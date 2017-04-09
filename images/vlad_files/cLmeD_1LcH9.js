if (self.CavalryLogger) { CavalryLogger.start_js(["BL6FF"]); }

/** __static_js_modules__/pagescomposercarouselpostchildattachmentattributes.js */




__d("PagesComposerCarouselPostChildAttachmentAttributes",[],(function a(b,c,d,e,f,g){

f.exports={PICTURE:"picture",NAME:"name",DESCRIPTION:"description",LINK:"link",SELECTED:"selected",SCRAPED:"scraped",IMAGE_FBID:"image_fbid",IMAGE_SOURCE:"image_source",ORIGINAL_DIMENSION_HEIGHT:"original_dimensions_height",ORIGINAL_DIMENSION_WIDTH:"original_dimensions_width",CROPPING_START_POINT_X:"cropping_startPoint_x",CROPPING_START_POINT_Y:"cropping_startPoint_y",CROPPING_SOURCE_DIMENSION_HEIGHT:"cropping_source_dimension_height",CROPPING_SOURCE_DIMENSION_WIDTH:"cropping_source_dimension_width",VIDEO_ID:"video_id",CTA_TYPE:"cta_type"};}),

null);

/** __static_js_modules__/pagescomposercarouselpostlogattributes.js */




__d("PagesComposerCarouselPostLogAttributes",[],(function a(b,c,d,e,f,g){

f.exports={USE_CAROUSEL_COMPOSER:"use_carousel_composer",CAROUSEL_INCOMPATIBLE:"carousel_incompatible",CAROUSEL_INCOMPATIBLE_TYPE:"carousel_incompatible_type",SCRAPED_IMAGE_NUM_OLD:"scraped_image_num_old",SCRAPED_URL:"scraped_url",SCRAPED_TIME:"scraped_time",COMPOSER_LOCATION:"composer_location",HIDE_END_CARD:"hide_end_card",SOURCE_ATTACHMENT:"source_attachment",PREFILL_SCRAPE_URL:"prefill_scrape_url"};}),

null);

/** __static_js_modules__/reactcomposercollagelayoutactor.js */




__d("ReactComposerCollageLayoutActor",[],(function a(b,c,d,e,f,g){

f.exports={USER:1,PAGE:2};}),

null);

/** __static_js_modules__/reactcomposerjsoncollagelayoutdata.js */




__d("ReactComposerJSONCollageLayoutData",[],(function a(b,c,d,e,f,g){

f.exports={"2":[{validActors:3,photoLayouts:[[0,3,3,0],[0,6,3,3]]},{validActors:3,photoLayouts:[[0,6,3,0],[3,6,6,0]]},{validActors:3,photoLayouts:[[0,3,6,0],[0,6,6,3]]},{validActors:1,photoLayouts:[[0,6,2,0],[2,6,4,0]]}],"3":[{validActors:3,photoLayouts:[[0,6,3,0],[3,3,6,0],[3,6,6,3]]},{validActors:3,photoLayouts:[[0,3,6,0],[0,6,3,3],[3,6,6,3]]},{validActors:2,photoLayouts:[[0,2,2,0],[0,4,2,2],[0,6,2,4]]},{validActors:1,photoLayouts:[[0,6,4,0],[4,3,6,0],[4,6,6,3]]},{validActors:1,photoLayouts:[[0,4,6,0],[0,6,3,4],[3,6,6,4]]},{validActors:1,photoLayouts:[[0,6,2,0],[2,6,4,0],[4,6,6,0]]},{validActors:1,photoLayouts:[[0,2,6,0],[0,4,6,2],[0,6,6,4]]}],"4":[{validActors:3,photoLayouts:[[0,3,3,0],[0,6,3,3],[3,3,6,0],[3,6,6,3]]},{validActors:3,photoLayouts:[[0,6,4,0],[4,2,6,0],[4,4,6,2],[4,6,6,4]]},{validActors:3,photoLayouts:[[0,4,6,0],[0,6,2,4],[2,6,4,4],[4,6,6,4]]}],"5":[{validActors:1,photoLayouts:[[0,3,3,0],[3,3,6,0],[0,6,2,3],[2,6,4,3],[4,6,6,3]]},{validActors:1,photoLayouts:[[0,3,3,0],[0,6,3,3],[3,2,5,0],[3,4,5,2],[3,6,5,4]]}]};}),

null);

/** __static_js_modules__/reactcomposermediaaspecttypes.js */




__d("ReactComposerMediaAspectTypes",[],(function a(b,c,d,e,f,g){

f.exports={LANDSCAPE:"landscape",PORTRAIT:"portrait",SQUARE:"square",PANORAMA_TESTING_ONLY:"panorama",VERTICAL_PANORAMA_TESTING_ONLY:"vertical_panorama"};}),

null);

/** js/components/core/BUI/ProgressBar/BUIProgressBar.react.js */





__d('BUIProgressBar.react',['cx','BUIComponent','Image.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=c('React').PropTypes,

l=248;i=babelHelpers.inherits

(m,c('BUIComponent'));j=i&&i.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.






































































$BUIProgressBar_renderProgress=function(){
if(this.props.isBuffering)

return (c('React').createElement('div',
{className:"__q3",
style:{width:'100%'}}));




var s=this.props.percentage||0;
if(s<0)
s=0;

if(s>100)
s=100;



return (c('React').createElement('div',{className:"__q6"},
c('React').createElement('div',
{className:"__q7",
style:{width:s+'%'}})));}.



bind(this),this.

$BUIProgressBar_getWidth=function(){
if(this.props.flexibleWidth)
return {width:'100%'};

var s=+this.props.width;

return {width:(s>l?l:s)+'px'};}.

bind(this),o;}m.prototype.$BUIProgressBar_renderLabel=function(){if(!this.props.icon&&!this.props.message)return null;var n;if(this.props.icon)n=c('React').createElement(c('Image.react'),{className:"__q1",src:this.props.icon});return c('React').createElement('div',{className:"__q2",'data-testid':this.props.dataTestId},n,this.props.message);};m.prototype.

render=function(){
var n=c('joinClasses')("__qa"+



(this.props.isComplete===true?' '+"__qb":'')+
(this.props.isError===true?' '+"__qc":'')+
(this.props.height==='small'?' '+"_2tr-":'')+
(this.props.color==='gray'?' '+"_2tr_":'')+
(this.props.padding===true?' '+"_2m-z":''),


this.props.className);



return (c('React').createElement('div',{className:n,style:this.$BUIProgressBar_getWidth()},
this.$BUIProgressBar_renderProgress(),
this.$BUIProgressBar_renderLabel()));};


m.propTypes={dataTestId:k.string,icon:k.object,isBuffering:k.bool,isError:k.bool,isSuccess:k.bool,message:k.node,percentage:k.number,height:k.oneOf(['small','medium']),width:k.number,color:k.oneOf(['gray','blue']),flexibleWidth:k.bool,padding:k.bool};m.defaultProps={isBuffering:false,isSuccess:false,isError:false,height:'medium',width:l,color:'blue',flexibleWidth:false,padding:true};


f.exports=m;}),null);

/** js/composer/ComposerTargetData.js */





__d("ComposerTargetData",[],(function a(b,c,d,e,f,g){







function h
(i,
j,
k,
l){
"use strict";
this.targetID=i;
this.targetSupportsMultiplePhotos=j;
this.viewerIsTarget=k;
this.targetSupportsMultiMedia=l;}



f.exports=h;}),null);

/** js/photos/editor/PhotoEditorSaveStates.js */





__d('PhotoEditorSaveStates',['requireWeak','Map'],(function a(b,c,d,e,f,g){



var h;
c('requireWeak')('PhotoEditorGraphic',function(l){
h=l.Sticker;});




var i=new (c('Map'))(),
j=new (c('Map'))(),

k=
{setState:function l(m,n){
i.set(m,n);},


getState:function l(m){
return i.get(m);},


setLoggingData:function l(m,n){
j.set(m,n);},


getLoggingData:function l(m){
return j.get(m);},


getTotalNumOfStickersOnPhoto:function l(m){
if(i.get(m))



return i.get(m).graphics.filter
(function(n){return h&&n.type===h;}).
length;

return 0;}};



f.exports=k;}),null);

/** shared/collage_layout/CollageLayoutConfig.js */





__d("CollageLayoutConfig",[],(function a(b,c,d,e,f,g){

var h=4;










































function i
(j,
k){

var l=arguments.length<=2||arguments[2]===undefined?h:arguments[2];"use strict";
this.$CollageLayoutConfig_spacing=l;
this.$CollageLayoutConfig_width=k;

this.$CollageLayoutConfig_processItemLayouts(j);}
i.prototype.

getItemStyleInfos=function(){"use strict";
return this.$CollageLayoutConfig_itemStyleInfos;};
i.prototype.

getIndexForPoint=function(j,k){"use strict";
var l=this.$CollageLayoutConfig_itemStyleInfos.findIndex(function(m){

return (m.left<=j&&
m.top<=k&&
m.left+m.width>=j&&
m.top+m.height>=k);});


return l===-1?null:l;};
i.prototype.

getCalculatedHeight=function(){"use strict";
return this.$CollageLayoutConfig_calculatedHeight;};
i.prototype.

getSpacing=function(){"use strict";
return this.$CollageLayoutConfig_spacing;};
i.prototype.

getWidth=function(){"use strict";
return this.$CollageLayoutConfig_width;};
i.prototype.

$CollageLayoutConfig_processItemLayouts=
function(j){
"use strict";
var k=this.$CollageLayoutConfig_calculateRowCount(j),
l=this.$CollageLayoutConfig_calculateColumnCount(j),

m=this.$CollageLayoutConfig_spacing*(l-1),
n=Math.ceil((this.$CollageLayoutConfig_width-m)/l);


this.$CollageLayoutConfig_calculatedHeight=
(n+this.$CollageLayoutConfig_spacing)*k-this.$CollageLayoutConfig_spacing;


this.$CollageLayoutConfig_itemStyleInfos=[];
j.forEach(function(o){
var p=
{left:(n+this.$CollageLayoutConfig_spacing)*o.x,
top:(n+this.$CollageLayoutConfig_spacing)*o.y,
width:(n+this.$CollageLayoutConfig_spacing)*o.width-this.$CollageLayoutConfig_spacing,
height:(n+this.$CollageLayoutConfig_spacing)*o.height-this.$CollageLayoutConfig_spacing};





if(p.left+p.width>this.$CollageLayoutConfig_width)
p.width=this.$CollageLayoutConfig_width-p.left;


this.$CollageLayoutConfig_itemStyleInfos.push(p);}.
bind(this));};
i.prototype.

$CollageLayoutConfig_calculateColumnCount=
function(j){
"use strict";
var k=0;
j.forEach(function(l){
k=Math.max
(k,
l.x+l.width);});



return k;};
i.prototype.

$CollageLayoutConfig_calculateRowCount=
function(j){
"use strict";
var k=0;
j.forEach(function(l){
k=Math.max
(k,
l.y+l.height);});



return k;};



f.exports=i;}),null);

/** js/react_composer/utils/collage/ReactComposerMediaAspect.js */








__d('ReactComposerMediaAspect',['ReactComposerMediaAspectTypes'],(function a(b,c,d,e,f,g){

'use strict';





f.exports=
{fromRect:function h(i){
return this._fromWidthAndHeight
(i.w(),
i.h());},



fromDimensions:function h(i){
return this._fromWidthAndHeight(i[0],i[1]);},


_fromWidthAndHeight:function h
(i,
j){

if(i>j){
return c('ReactComposerMediaAspectTypes').LANDSCAPE;}else
if(i<j){
return c('ReactComposerMediaAspectTypes').PORTRAIT;}else 

return c('ReactComposerMediaAspectTypes').SQUARE;}};}),

null);

/** js/react_composer/utils/collage/ReactComposerCollageLayoutModel.js */







__d('ReactComposerCollageLayoutModel',['regeneratorRuntime','Map','ReactComposerCollageLayoutActor','ReactComposerMediaAspect'],(function a(b,c,d,e,f,g){var h=










[i,













j].map(c('regeneratorRuntime').mark);'use strict';function i(l,m){var n,o;return c('regeneratorRuntime').wrap(function p(q){while(1)switch(q.prev=q.next){case 0:n=l.next();o=m.next();if(!(n.done||o.done)){q.next=5;break;}return q.abrupt('break',9);case 5:q.next=7;return [n.value,o.value];case 7:q.next=0;break;case 9:case 'end':return q.stop();}},h[0],this);}function j(l){var m,n,o,p,
q;return c('regeneratorRuntime').wrap(function r(s){while(1)switch(s.prev=s.next){case 0:m=l,n=Array.isArray(m),o=0,m=n?m:m[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();case 1:if(!n){s.next=7;break;}if(!(o>=m.length)){s.next=4;break;}return s.abrupt('break',16);case 4:p=m[o++];s.next=11;break;case 7:o=m.next();if(!o.done){s.next=10;break;}return s.abrupt('break',16);case 10:p=o.value;case 11:q=p;s.next=14;
return (q);case 14:s.next=1;break;case 16:case 'end':return s.stop();}},h[1],this);}












function k(l,m){'use strict';

this.$ReactComposerCollageLayoutModel_isValidForUsers=!!(l&c('ReactComposerCollageLayoutActor').USER);
this.$ReactComposerCollageLayoutModel_isValidForPages=!!(l&c('ReactComposerCollageLayoutActor').PAGE);
this.$ReactComposerCollageLayoutModel_photoLayouts=[];
if(m)
this.addPhotoLayouts(m);}

k.prototype.








addPhotoLayout=function(l){'use strict';
this.$ReactComposerCollageLayoutModel_photoLayouts.push(l);
return this;};
k.prototype.

addPhotoLayouts=function(l){'use strict';
l.forEach(function(m){return this.$ReactComposerCollageLayoutModel_photoLayouts.push(m);}.bind(this));
return this;};
k.prototype.





getNumPhotoLayouts=function(){'use strict';
return this.$ReactComposerCollageLayoutModel_photoLayouts.length;};
k.prototype.




getPhotoLayouts=function(){'use strict';
return this.$ReactComposerCollageLayoutModel_photoLayouts;};
k.prototype.




getIsValidForPages=function(){'use strict';
return this.$ReactComposerCollageLayoutModel_isValidForPages;};
k.prototype.




getIsValidForUsers=function(){'use strict';
return this.$ReactComposerCollageLayoutModel_isValidForUsers;};
k.prototype.




getIsValidFor=function(l){'use strict';
switch(l){
case c('ReactComposerCollageLayoutActor').USER:
return this.getIsValidForUsers();
case c('ReactComposerCollageLayoutActor').PAGE:
return this.getIsValidForPages();}

return false;};
k.prototype.

hasMatchingCollagePhotoLayoutType=
function(l){
'use strict';
var m=c('ReactComposerMediaAspect').fromRect(this.$ReactComposerCollageLayoutModel_photoLayouts[0]),
n=c('ReactComposerMediaAspect').fromDimensions(l);
return m===n;};
k.prototype.











score=
function(l){
'use strict';
var m=0;
for(var n=

i
(j(this.getPhotoLayouts()),
l.values()),o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){

var q;if(o){if(p>=n.length)break;q=n[p++];}else{p=n.next();if(p.done)break;q=p.value;}var r=q,s=r[0],t=r[1];
if(!t)
continue;

var u=s.w(),
v=s.h(),
w=t[0],x=t[1],
y=0;
if(w===0||x===0){


y=0;}else
if(u*x/w>=v){
var z=u*x/w;
y=(z-v)/z;}else
if(v*w/x>u){
var aa=v*w/x;
y=(aa-u)/aa;}


m-=y*100;

if(x===w){

m-=y*5;}else
if(u>v){
if(w>x){

m+=y*25;}else 


m-=y*25;}else

if(u<v){
if(w<x){

m+=y*25;}else 


m-=y*25;}else

if(u===v)




m-=y*5;}









m+=200*this.getNumPhotoLayouts();

return m;};



f.exports=k;}),null);

/** js/react_composer/utils/collage/ReactComposerCollageLayoutData.js */







__d('ReactComposerCollageLayoutData',['ReactComposerCollageLayoutModel','ReactComposerJSONCollageLayoutData','Rect'],(function a(b,c,d,e,f,g){





'use strict';

var h=[];

Object.keys(c('ReactComposerJSONCollageLayoutData')).forEach(function(i){
c('ReactComposerJSONCollageLayoutData')[i].forEach(function(j){
h.push(new (c('ReactComposerCollageLayoutModel'))
(j.validActors,
j.photoLayouts.map(function(k){return new (Function.prototype.bind.apply(c('Rect'),[null].concat(k)))();})));});});




f.exports=h;}),null);

/** js/react_composer/utils/collage/ReactComposerCollageLayoutSelection.js */







__d('ReactComposerCollageLayoutSelection',['Map','FBID','Rect','ReactComposerCollageLayoutActor','ReactComposerCollageLayoutData','ReactComposerCollageLayoutModel'],(function a(b,c,d,e,f,g){

'use strict';









f.exports=
{MAX_NUM_COLS:6,
MAX_NUM_ROWS:6,




_getCollageLayoutsFor:function h
(i){

return c('ReactComposerCollageLayoutData').filter
(function(j){return j.getIsValidFor(i);});},







getMaxPhotosSupported:function h(){
return Math.max.apply(Math,
c('ReactComposerCollageLayoutData').map(function(i){return i.getNumPhotoLayouts();}));},



getMaxPhotosSupportedFor:function h(i){
return Math.max.apply(Math,
this._getCollageLayoutsFor(i).
map(function(j){return j.getNumPhotoLayouts();}));},








getCollageLayout:function h
(i,
j){



if(j===0)
return this.getBestUserCollageLayout(i);


var k=c('FBID').isUser(j)?
this.getBestUserCollageLayout(i):
this.getBestPageCollageLayout(i);

return k;},






getBestPageCollageLayout:function h
(i){


if(i.size==0)
return new (c('Map'))();

var j=i.values().next().value,

k=Math.min
(this.getMaxPhotosSupportedFor(c('ReactComposerCollageLayoutActor').PAGE),
i.size),




l=this._getCollageLayoutsFor(c('ReactComposerCollageLayoutActor').PAGE).
filter(function(x){return x.getNumPhotoLayouts()===k;});

if(!l.length)
throw new Error('no valid layout for these media');





var m=l.filter
(function(x){return x.hasMatchingCollagePhotoLayoutType(j);});

if(!m.length)
throw new Error
('no valid layout for these media starts with a suitable aspect');


var n=m[0],



o=new (c('Map'))(),
p=0,
q=n.getPhotoLayouts();
for(var r=i.keys(),s=Array.isArray(r),t=0,r=s?r:r[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var u;if(s){if(t>=r.length)break;u=r[t++];}else{t=r.next();if(t.done)break;u=t.value;}var v=u,
w=q[p++];
if(w)
o.set(v,w);}


return o;},









getBestUserCollageLayout:function h
(i){

var j=this._getCollageLayoutsFor(c('ReactComposerCollageLayoutActor').USER).
filter(function(u){return u.getNumPhotoLayouts()<=i.size;});


if(!j.length)
throw new Error('no valid layout for these media');


var k=this._bestLayoutByScore
(j,
i);

if(!k)
throw new Error('no best layout? Should not happen!');




var l=new (c('Map'))(),
m=0,
n=k.getPhotoLayouts();
for(var o=i.keys(),p=Array.isArray(o),q=0,o=p?o:o[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var r;if(p){if(q>=o.length)break;r=o[q++];}else{q=o.next();if(q.done)break;r=q.value;}var s=r,
t=n[m++];
if(t)
l.set(s,t);}


return l;},


_bestLayoutByScore:function h
(i,
j){

var k=i.map
(function(n){return [n,n.score(j)];}),l=

k.reduce
(function(n,o){var p=n[0],q=n[1],r=o[0],s=o[1];
return (q===null||s>q?
[r,s]:[p,q]);},
[null,null]),m=l[0];

return m;}};}),
null);

/** js/react_composer/attachments/media/ReactComposerCollageUtils.js */







__d('ReactComposerCollageUtils',['CollageLayoutConfig','ReactComposerCollageLayoutSelection','immutable','Map'],(function a(b,c,d,e,f,g){







var h=
{extractDimensionDataIfValid:function i(j){
var k=true,
l=new (c('Map'))();
j.forEach(function(m){
if(!m.width||!m.height){
k=false;
return;}


var n=m.width,o=m.height;

if(m.isSpherical)
n=o;


l.set
(m.id,
[n,o]);});



return k?l:null;},


getCollageLayout:function i(j){
if(!j||j.size<2)
return [];

var k=h.extractDimensionDataIfValid
(j);
if(!k)
return [];

var l=c('ReactComposerCollageLayoutSelection').getBestUserCollageLayout(k);

if(!l)
return [];

var m=[];
for(var n=k.keys(),o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var q;if(o){if(p>=n.length)break;q=n[p++];}else{p=n.next();if(p.done)break;q=p.value;}var r=q,
s=l.get(r);
if(!s)
return [];

m.push
({x:s.l,y:s.t,width:s.w(),height:s.h()});}


return m;},




getCollageLayoutConfig:function i(j,k){
var l=j.filter
(function(n){return n.width&&n.height;}),

m=h.getCollageLayout
(l);
return new (c('CollageLayoutConfig'))(m,k);},


getSingleItemStyleInfo:function i(j,k){


var l=[],
m=k,
n=j.width/j.height;

if(j.isSpherical)
n=1;


if(n>1){
m=k/n;}else 

k=n*m;



l.push
({left:0,top:0,width:k,height:m});


return l;}};



f.exports=h;}),null);

/** js/react_composer/utils/prefill/ReactComposerMediaPrefillConfig.js */






__d('ReactComposerMediaPrefillConfig',['React'],(function a(b,c,d,e,f,g){



var h=c('React').PropTypes;

f.exports=h.shape
({photoID:h.string,
uploadID:h.string,
thumbSrc:h.string,
fileURL:h.string,
filename:h.string,
cubestripURI:h.string,
mediaType:h.string});}),null);

/** js/react_composer/attachments/media/photos/ReactComposerPhotoActions.js */





__d('ReactComposerPhotoActions',['ReactComposerPhotoActionType','ReactComposerDispatcher','ReactComposerPhotoStore'],(function a(b,c,d,e,f,g){





c('ReactComposerPhotoStore');









var h=

{startRecognizing:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
photoID:k,
type:c('ReactComposerPhotoActionType').PHOTO_RECOGNITION_STARTED});},



finishRecognizingPhoto:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerPhotoActionType').PHOTO_RECOGNITION_FINISHED,
photoID:k});},



finishRecognizing:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerPhotoActionType').PHOTO_RECOGNITION_ALL_FINISHED,
photos:k,
facerecWaterfallEvent:l});},



addFacebox:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerPhotoActionType').PHOTO_ADD_FACEBOX,
photoID:k,
facebox:l});},



tagXY:function i
(j,
k,
l,
m,
n,
o,
p){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerPhotoActionType').PHOTO_TAG_XY,
value:l,
photoID:k,
source:m,
subject:n,
x:o,
y:p});},



tagXYProduct:function i
(j,
k,
l,
m,
n,
o,
p){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerPhotoActionType').PHOTO_TAG_XY_PRODUCT,
value:l,
photoID:k,
source:m,
subject:n,
x:o,
y:p});},



tagFacebox:function i
(j,
k,
l,
m,
n){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerPhotoActionType').PHOTO_TAG_FACEBOX,
photoID:k,
faceboxID:l,
subjectID:m,
value:n});},



untagFacebox:function i
(j,
k,
l,
m){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerPhotoActionType').PHOTO_UNTAG_FACEBOX,
photoID:k,
faceboxID:l,
subjectID:m});},



removePhoto:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerPhotoActionType').PHOTO_REMOVE,
photoID:k,
uploadID:l});},



untagSubjectFromAllPhotos:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerPhotoActionType').PHOTO_UNTAG_SUBJECT_FROM_ALL_PHOTOS,
subjectID:k});},



untagAllForPhoto:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerPhotoActionType').PHOTO_UNTAG_ALL,
photoID:k});},



startPhotoEdit:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
photoID:k,
type:c('ReactComposerPhotoActionType').PHOTO_EDIT_STARTED});},



finishPhotoEdit:function i(j){
c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerPhotoActionType').PHOTO_EDIT_FINISHED});},



setPhotoBeingTagged:function i(j,k){
c('ReactComposerDispatcher').dispatch
({composerID:j,
photoID:k,
type:c('ReactComposerPhotoActionType').PHOTO_SET_BEING_TAGGED});},



finishLoadingPhotoEdit:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerPhotoActionType').PHOTO_LOADING_EDIT_FINISHED,
photoID:k});},



changeSphericalPhotoUpdateStatus:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerPhotoActionType').PHOTO_SPHERICAL_UPDATING,
isSphericalPhotoUpdating:k});}};




f.exports=h;}),null);

/** js/react_composer/attachments/media/photos/ReactComposerPhotoUploadState.js */




__d('ReactComposerPhotoUploadState',[],(function a(b,c,d,e,f,g){






f.exports=
{PHOTO_UPLOAD_ENQUEUED:'PHOTO_UPLOAD_ENQUEUED',
PHOTO_UPLOAD_RESIZE_STARTED:'PHOTO_UPLOAD_RESIZE_STARTED',
PHOTO_UPLOAD_RESIZE_DONE:'PHOTO_UPLOAD_RESIZE_DONE',
PHOTO_UPLOAD_RESIZE_FAILED:'PHOTO_UPLOAD_RESIZE_FAILED',
PHOTO_UPLOAD_UPLOADING:'PHOTO_UPLOAD_UPLOADING',
PHOTO_UPLOAD_DONE:'PHOTO_UPLOAD_DONE',
PHOTO_UPLOAD_FAILED:'PHOTO_UPLOAD_FAILED'};}),null);

/** js/react_composer/attachments/media/ReactComposerMediaUploadActions.js */





__d('ReactComposerMediaUploadActions',['ReactComposerDispatcher','ReactComposerMediaUploadType','ReactComposerMediaPrefillConfig','ReactComposerPhotoActions','ReactComposerPhotoUploadState','ReactComposerMediaUploadActionType','immutable','ReactComposerMediaUploadStore','ReactComposerPhotoStore'],(function a(b,c,d,e,f,g){













c('ReactComposerMediaUploadStore');
c('ReactComposerPhotoStore');









var h=
{enqueue:function i
(j,
k,
l,
m,
n,
o,
p){


var q=arguments.length<=7||arguments[7]===undefined?[]:arguments[7],r=arguments.length<=8||arguments[8]===undefined?false:arguments[8];
c('ReactComposerDispatcher').dispatch
({composerID:j,
mediaType:o,
uploadID:k,
type:n,
filename:l,
fileURL:p?p:'',
index:m,
xyTags:q,
isSpherical:r});},



startResizing:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
loggingData:l,
uploadID:k,
type:c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_RESIZE_STARTED});},



progressResizing:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
uploadID:k,
type:c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_RESIZE_PROGRESS,
progress:l});},



doneResizing:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
loggingData:l,
uploadID:k,
type:c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_RESIZE_DONE});},



failResizing:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
loggingData:l,
uploadID:k,
type:c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_RESIZE_FAILED});},



doneSphericalCheck:function i
(j,
k,
l,
m,
n){

c('ReactComposerDispatcher').dispatch
({composerID:j,
loggingData:l,
uploadID:k,
type:c('ReactComposerMediaUploadActionType').SPHERICAL_PHOTO_CHECK_DONE,
sphericalImage:m,
useLocalSphericalImage:n});},



failSphericalCheck:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
loggingData:l,
uploadID:k,
type:c('ReactComposerMediaUploadActionType').SPHERICAL_PHOTO_CHECK_FAILED});},



startUploading:function i
(j,
k,
l,
m){

c('ReactComposerDispatcher').dispatch
({composerID:j,
uploadID:k,
type:m,
fileUpload:l});},



progressUploading:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
uploadID:k,
type:c('ReactComposerMediaUploadActionType').MEDIA_UPLOAD_PROGRESS,
progress:l});},



isSpherical:function i
(j,
k,
l,
m){

c('ReactComposerDispatcher').dispatch
({composerID:j,
uploadID:k,
type:c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_IS_SPHERICAL,
isSpherical:l,
projectionType:m});},



doneUploading:function i
(j,
k,
l,
m,
n,
o,
p,
q,
r,
s,
t,
u,
v,
w){

c('ReactComposerDispatcher').dispatch
({composerID:j,
uploadID:k,
fileUpload:m,
mediaLocation:s,
timeToUpload:n,
type:l,
photoID:o,
sphericalPhotoID:p,
thumbSrc:q,
originalPhotoID:r,
cubestripURI:t,
imageSrc:u,
width:v,
height:w});},



doneUploadingExtra:function i
(j,
k,
l,
m,
n,
o,
p,
q){

c('ReactComposerDispatcher').dispatch
({type:c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_EXTRA_DONE,
composerID:j,
uploadID:k,
photoID:l,
thumbSrc:m,
cubestripURI:n,
imageSrc:o,
width:p,
height:q});},



failUploading:function i
(j,
k,
l,
m,
n,
o){

c('ReactComposerDispatcher').dispatch
({composerID:j,
uploadID:k,
type:o,
error:n,
fileUpload:l,
timeToUpload:m});},







removeAllPhotoUploads:function i
(j,
k){

k.forEach
(function(l){return this.removePhotoAndPhotoUpload(j,l);}.bind(this));},







removePhotoAndPhotoUpload:function i
(j,
k){

if(k.state===c('ReactComposerPhotoUploadState').PHOTO_UPLOAD_DONE){
c('ReactComposerPhotoActions').removePhoto
(j,
k.photoID,
k.id);}else 


this.removeMediaUpload
(j,
k.id);},




removeMediaUpload:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerMediaUploadActionType').MEDIA_UPLOAD_REMOVE,
uploadID:k});},



mediaMoved:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerMediaUploadActionType').MEDIA_UPLOAD_MOVED,
from:k,
to:l});},



resizerUnavailable:function i(j){
c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_RESIZER_UNAVAILABLE});},



photosSelect:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
method:l,
numPhotos:k,
type:c('ReactComposerMediaUploadActionType').PHOTOS_SELECT});},



retryMediaUpload:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:k});},



reorderMedias:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
mediaIDs:k,
type:c('ReactComposerMediaUploadActionType').REORDER_MEDIAS});},



prefillMedias:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
medias:k,
type:c('ReactComposerMediaUploadActionType').PREFILL_MEDIAS});},



setVideoThumbnail:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerMediaUploadActionType').VIDEO_SET_THUMBNAIL,
thumbSrc:l,
uploadID:k});},



addPhotoUpload:function i
(j,
k,
l,
m){

c('ReactComposerDispatcher').dispatch
({type:c('ReactComposerMediaUploadActionType').PHOTO_ADD_UPLOAD,
composerID:j,
index:k,
photo:m,
upload:l});},



setPhotoThumbnail:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerMediaUploadActionType').PHOTO_SET_THUMBNAIL,
thumbSrc:l,
uploadID:k});}};




f.exports=h;}),null);

/** js/react_composer/attachments/media/photos/ReactComposerPhotoUpload.js */






__d('ReactComposerPhotoUpload',['immutable'],(function a(b,c,d,e,f,g){


f.exports=c('immutable').Record
({error:{},
filename:null,
fileSize:null,
fileUpload:null,
fileURL:null,
height:null,
id:null,
mediaType:null,
originalPhotoID:null,
photoID:null,
progress:null,
state:null,
thumbSrc:null,
width:null,
xyTags:[],

canShowSphericalSingletonNux:false,
flatPhotoID:null,
sphericalImage:null,
isSpherical:false,
projectionType:null,
sphericalPhotoID:null,
useLocalSphericalImage:false});}),null);

/** js/react_composer/attachments/media/ReactComposerMediaUploadStore.js */





__d('ReactComposerMediaUploadStore',['invariant','ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerDispatcher','ReactComposerMediaUploadType','ReactComposerStoreBase','ReactComposerMediaUploadActionType','ReactComposerPhotoUploadState','ReactComposerPhotoActionType','ReactComposerPhotoStore','ReactComposerPhotoUpload','ReactComposerVideoXUploader','Bootloader','immutable','PhotoEditorSaveStates'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits























(k,c('ReactComposerStoreBase'));j=i&&i.prototype;
function k(){'use strict';
var l;
j.constructor.call(this,
function(){

return {removedIDs:c('immutable').Set(),
uploads:c('immutable').List(),
uploadsByID:c('immutable').Map(),
videoUploader:null};},


function(m){
if(l&&l.$ReactComposerMediaUploadStore_shouldIgnoreAction(m))
return;

switch(m.type){
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_ENQUEUED:
case c('ReactComposerMediaUploadActionType').VIDEO_UPLOAD_ENQUEUED:
l&&l.$ReactComposerMediaUploadStore_handleEnqueued(m);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_RESIZE_STARTED:
l&&l.$ReactComposerMediaUploadStore_handleStartResizing(m);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_RESIZE_PROGRESS:
l&&l.$ReactComposerMediaUploadStore_handleProgress(m);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_RESIZE_DONE:
l&&l.$ReactComposerMediaUploadStore_handleUpdateUploadState
(m,
c('ReactComposerPhotoUploadState').PHOTO_UPLOAD_RESIZE_DONE);

break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_RESIZE_FAILED:
l&&l.$ReactComposerMediaUploadStore_handleUpdateUploadState
(m,
c('ReactComposerPhotoUploadState').PHOTO_UPLOAD_RESIZE_FAILED);

break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_UPLOADING:
case c('ReactComposerMediaUploadActionType').VIDEO_UPLOAD_UPLOADING:
l&&l.$ReactComposerMediaUploadStore_handleStartUploading(m);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_IS_SPHERICAL:
l&&l.$ReactComposerMediaUploadStore_handleUploadIsSpherical(m);
break;
case c('ReactComposerMediaUploadActionType').VIDEO_SET_THUMBNAIL:
case c('ReactComposerMediaUploadActionType').PHOTO_SET_THUMBNAIL:
l&&l.$ReactComposerMediaUploadStore_handleSetThumbnail(m);
break;
case c('ReactComposerMediaUploadActionType').MEDIA_UPLOAD_PROGRESS:
l&&l.$ReactComposerMediaUploadStore_handleProgress(m);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_DONE:
case c('ReactComposerMediaUploadActionType').VIDEO_UPLOAD_DONE:
c('ReactComposerDispatcher').waitFor
([c('ReactComposerPhotoStore').getDispatchToken()]);

l&&l.$ReactComposerMediaUploadStore_handleUploadDone(m);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_EXTRA_DONE:
c('ReactComposerDispatcher').waitFor
([c('ReactComposerPhotoStore').getDispatchToken()]);

l&&l.$ReactComposerMediaUploadStore_handleUploadExtraDone(m);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_FAILED:
case c('ReactComposerMediaUploadActionType').VIDEO_UPLOAD_FAILED:
l&&l.$ReactComposerMediaUploadStore_handleUploadFail(m);
break;
case c('ReactComposerMediaUploadActionType').MEDIA_UPLOAD_REMOVE:
case c('ReactComposerPhotoActionType').PHOTO_REMOVE:
l&&l.$ReactComposerMediaUploadStore_handleUploadRemove(m);
break;
case c('ReactComposerMediaUploadActionType').MEDIA_UPLOAD_MOVED:
l&&l.$ReactComposerMediaUploadStore_handleMediaMoved(m);
break;
case c('ReactComposerMediaUploadActionType').PREFILL_MEDIAS:
l&&l.$ReactComposerMediaUploadStore_handlePrefillMedias(m);
break;
case c('ReactComposerMediaUploadActionType').REORDER_MEDIAS:
l&&l.$ReactComposerMediaUploadStore_handleReorderMedias(m);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_ADD_UPLOAD:
l&&l.$ReactComposerMediaUploadStore_handlePhotoAddUpload(m);
break;
case c('ReactComposerMediaUploadActionType').SPHERICAL_PHOTO_CHECK_DONE:
l&&l.$ReactComposerMediaUploadStore_handleSphericalPhotoCheckDone(m);
break;
default:}});





l=this;}
k.prototype.

getMediaUploadExists=function(l,m){'use strict';
var n=this.getComposerData(l);
return n.uploadsByID.get(m)!==undefined;};
k.prototype.

getMediaUpload=function(l,m){'use strict';
return this.$ReactComposerMediaUploadStore_getUpload(this.getComposerData(l),m);};
k.prototype.

getUploadIndex=function(l,m){'use strict';
return this.$ReactComposerMediaUploadStore_getUploadIndex(this.getComposerData(l),m);};
k.prototype.

getUploads=function(l){'use strict';
return this.getComposerData(l).uploads;};
k.prototype.

getUploadsOfType=
function(l,
m){
'use strict';
var n=this.getComposerData(l).uploads.filter(function(o){
return (o.mediaType===m);});

return n;};
k.prototype.

getUploadsCount=
function(l,
m){
'use strict';
if(!m)
return this.getComposerData(l).uploads.size;

return this.getComposerData(l).uploads.filter
(function(n){return n.mediaType===m;}).
size;};
k.prototype.

getSphericalPhotoCount=
function(l){
'use strict';
return this.getUploadsOfType(l,c('ReactComposerMediaUploadType').PHOTO).
filter(function(m){
return (m.isSpherical);}).
size;};
k.prototype.

getNonsphericalPhotoCount=
function(l){
'use strict';
return this.getUploadsOfType(l,c('ReactComposerMediaUploadType').PHOTO).
filter(function(m){
return (!m.isSpherical);}).
size;};
k.prototype.

getHasUploadBeenRemoved=function(l,m){'use strict';
var n=this.getComposerData(l);
return n.removedIDs.has(m);};
k.prototype.

isUploading=function(l){'use strict';
return this.getComposerData(l).uploads.some(function(m){
return (m.state!==c('ReactComposerPhotoUploadState').PHOTO_UPLOAD_RESIZE_FAILED&&
m.state!==c('ReactComposerPhotoUploadState').PHOTO_UPLOAD_DONE&&
m.state!==c('ReactComposerPhotoUploadState').PHOTO_UPLOAD_FAILED);});};

k.prototype.

getTotalNumberOfStickersOnPhotos=function(l){'use strict';
var m=0;
this.getComposerData(l).uploads.forEach(function(n){
var o=n.get('originalPhotoID');
if(o)
m+=c('PhotoEditorSaveStates').getTotalNumOfStickersOnPhoto
(o);});



return m;};
k.prototype.

getVideoUploader=
function(l,
m){
'use strict';
var n=this.getComposerData(l);

if(!n.videoUploader){
var o=new (c('ReactComposerVideoXUploader'))
({composerID:l,
uploaderParams:m});

n.videoUploader=o;}

return n.videoUploader;};
k.prototype.

$ReactComposerMediaUploadStore_handleEnqueued=function(l){'use strict';var m=


this.validateAction
(l,
['composerID','mediaType','uploadID','filename','fileURL','index',
'xyTags','isSpherical']),n=m[0],o=m[1],p=m[2],q=m[3],r=m[4],s=m[5],t=m[6],u=m[7];

this.$ReactComposerMediaUploadStore_registerMedia
(n,
s,
new (c('ReactComposerPhotoUpload'))
({id:p,
mediaType:o,
state:c('ReactComposerPhotoUploadState').PHOTO_UPLOAD_ENQUEUED,
filename:q,
fileURL:r,
xyTags:t,
isSpherical:u}));



this.emitChange(n);};
k.prototype.

$ReactComposerMediaUploadStore_handleStartResizing=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','uploadID']),n=m[0],o=m[1],


p=this.getComposerData(n);
this.$ReactComposerMediaUploadStore_updateUploadByID
(p,
o,
function(q){return q.withMutations(function(r){return r.
set('state',c('ReactComposerPhotoUploadState').PHOTO_UPLOAD_RESIZE_STARTED).
set('progress',0);});});



this.emitChange(n);};
k.prototype.

$ReactComposerMediaUploadStore_handleStartUploading=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','uploadID','fileUpload']),n=m[0],o=m[1],p=m[2],


q=this.getComposerData(n),
r=p&&p.getFile&&
p.getFile().size;
this.$ReactComposerMediaUploadStore_updateUploadByID
(q,
o,
function(s){return s.withMutations(function(t){return t.
set('state',c('ReactComposerPhotoUploadState').PHOTO_UPLOAD_UPLOADING).
set('progress',0).
set('fileUpload',p).
set('fileSize',r||null);});});



this.emitChange(n);};
k.prototype.

$ReactComposerMediaUploadStore_handleProgress=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','uploadID','progress']),n=m[0],o=m[1],p=m[2],


q=this.getComposerData(n);
this.$ReactComposerMediaUploadStore_updateUploadByID
(q,
o,
function(r){return r.set('progress',p);});


this.emitChange(n);};
k.prototype.

$ReactComposerMediaUploadStore_handleUploadDone=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','uploadID','photoID']),n=m[0],o=m[1],p=m[2],


q=this.getComposerData(n);
this.$ReactComposerMediaUploadStore_updateUploadByID
(q,
o,
function(r){return r.withMutations(function(s){return s.
set('state',c('ReactComposerPhotoUploadState').PHOTO_UPLOAD_DONE).
set('photoID',p).
set('sphericalPhotoID',l.sphericalPhotoID).
set('originalPhotoID',l.originalPhotoID||p).
set('progress',100).
remove('fileUpload');});});




if(!l.cubestripURI)
this.$ReactComposerMediaUploadStore_updateUploadByID
(q,
o,
function(r){return r.set('isSpherical',false);});



this.emitChange(n);};
k.prototype.

$ReactComposerMediaUploadStore_handleUploadExtraDone=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','uploadID','photoID','cubestripURI']),n=m[0],o=m[1],p=m[2],q=m[3],


r=this.getUploadsCount(n);
this.$ReactComposerMediaUploadStore_registerMedia
(n,
r,
new (c('ReactComposerPhotoUpload'))
({id:o,
photoID:p,
mediaType:c('ReactComposerMediaUploadType').PHOTO,
originalPhotoID:p,
state:c('ReactComposerPhotoUploadState').PHOTO_UPLOAD_DONE,
isSpherical:Boolean(q)}));



this.emitChange(n);};
k.prototype.

$ReactComposerMediaUploadStore_handleUploadIsSpherical=function(l){'use strict';var m=




this.validateAction
(l,
['composerID','uploadID','isSpherical']),n=m[0],o=m[1],p=m[2];


if(p)
c('Bootloader').loadModules
(["SphericalPhotoConstants","QE2Logger"],
function(q,r){
return (r.logExposureForUser(q.QE_WWW_UNIVERSE));},'ReactComposerMediaUploadStore');



this.$ReactComposerMediaUploadStore_updateUploadByID
(this.getComposerData(n),
o,
function(q){return q.withMutations(function(r){return r.
set('isSpherical',p).
set('projectionType',l.projectionType);});});};


k.prototype.

$ReactComposerMediaUploadStore_handleUploadFail=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','uploadID']),n=m[0],o=m[1],


p=this.getComposerData(n);
this.$ReactComposerMediaUploadStore_updateUploadByID
(p,
o,
function(q){return q.withMutations(function(r){return r.
set('state',c('ReactComposerPhotoUploadState').PHOTO_UPLOAD_FAILED).
set('error',l.error);});});



this.emitChange(n);};
k.prototype.

$ReactComposerMediaUploadStore_handleUploadRemove=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','uploadID']),n=m[0],o=m[1],

p=this.getComposerData(n),
q=this.$ReactComposerMediaUploadStore_getUploadIndex(p,o),


r=p.uploads.get(q);
if(r.mediaType==c('ReactComposerMediaUploadType').VIDEO)
if(r.state===c('ReactComposerPhotoUploadState').PHOTO_UPLOAD_UPLOADING){
p.videoUploader.cancelUpload(o);}else{

if(!p.videoUploader){

var s=
c('ReactComposerAttachmentStore').getAttachmentsConfig
(n,
c('ReactComposerAttachmentType').MEDIA);


s||h(0,
'uploaderParams needed for the videoXUploader');

this.getVideoUploader
(n,
s.videoUploadParams);}


p.videoUploader.deleteUpload(o);}



p.uploads=p.uploads['delete'](q);
p.uploadsByID=p.uploadsByID['delete'](o);
for(var t=q;t<p.uploads.size;t++){
var u=p.uploads.get(t).id;
p.uploadsByID=p.uploadsByID.set(u,t);}

p.removedIDs=p.removedIDs.add(o);

this.emitChange(n);};
k.prototype.

$ReactComposerMediaUploadStore_handleSetThumbnail=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','uploadID','thumbSrc']),n=m[0],o=m[1],p=m[2],


q=this.getComposerData(n);
this.$ReactComposerMediaUploadStore_updateUploadByID
(q,
o,
function(r){return r.set('thumbSrc',p);});

this.emitChange(n);};
k.prototype.

$ReactComposerMediaUploadStore_handleUpdateUploadState=function(l,m){'use strict';var n=
this.validateAction
(l,
['composerID','uploadID']),o=n[0],p=n[1];


this.$ReactComposerMediaUploadStore_updateUploadState(o,p,m);

this.emitChange(o);};
k.prototype.

$ReactComposerMediaUploadStore_handleMediaMoved=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','from','to']),n=m[0],o=m[1],p=m[2],


q=this.getComposerData(n);
q.uploads=q.uploads.
splice(o,1).
splice(p,0,q.uploads.get(o));

q.uploadsByID=q.uploads.
groupBy(function(r,s){return s;}).
toMap().
map(function(r){return r.first().id;}).
flip();

this.emitChange(n);};
k.prototype.

$ReactComposerMediaUploadStore_handleReorderMedias=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','mediaIDs']),n=m[0],o=m[1],


p=this.getComposerData(n);
p.uploads=o.map(function(q){return this.$ReactComposerMediaUploadStore_getUpload(p,q);}.bind(this));

p.uploadsByID=p.uploads.
groupBy(function(q,r){return r;}).
toMap().
map(function(q){return q.first().id;}).
flip();

this.emitChange(n);};
k.prototype.

$ReactComposerMediaUploadStore_handlePrefillMedias=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','medias']),n=m[0],o=m[1];


o.forEach(function(p,q){
this.$ReactComposerMediaUploadStore_registerMedia
(n,
q,
new (c('ReactComposerPhotoUpload'))
({id:p.uploadID,
photoID:p.photoID,
mediaType:p.mediaType,
originalPhotoID:p.photoID,
state:c('ReactComposerPhotoUploadState').PHOTO_UPLOAD_DONE,
thumbSrc:p.thumbSrc,
fileURL:p.fileURL||p.imageSrc,
filename:p.filename,
isSpherical:Boolean(p.cubestripURI),
height:p.height,
width:p.width}));}.


bind(this));

this.emitChange(n);};
k.prototype.

$ReactComposerMediaUploadStore_handlePhotoAddUpload=function(l){



'use strict';var m=
this.validateAction
(l,
['composerID','index','upload']),n=m[0],o=m[1],p=m[2],


q=this.getComposerData(n);
q.uploads=q.uploads.splice
(o,
0,
p);

for(var r=o;r<q.uploads.size;r++){
var s=q.uploads.get(r).id;
q.uploadsByID=q.uploadsByID.set(s,r);}

this.emitChange(n);};
k.prototype.

$ReactComposerMediaUploadStore_handleSphericalPhotoCheckDone=function(l){'use strict';var m=





this.validateAction
(l,

['composerID',
'uploadID',
'sphericalImage',
'useLocalSphericalImage']),n=m[0],o=m[1],p=m[2],q=m[3],


r=this.getComposerData(n);
this.$ReactComposerMediaUploadStore_updateUploadByID
(r,
o,
function(s){return s.withMutations(function(t){return t.
set('sphericalImage',p).
set('useLocalSphericalImage',q);});});


this.emitChange(n);};
k.prototype.

$ReactComposerMediaUploadStore_updateUploadState=
function(l,
m,
n){
'use strict';
var o=this.getComposerData(l);
this.$ReactComposerMediaUploadStore_updateUploadByID(o,m,function(p){return p.
set('state',n);});};

k.prototype.

$ReactComposerMediaUploadStore_updateUploadByID=
function(l,
m,
n){
'use strict';var o=
this.$ReactComposerMediaUploadStore_getUploadWithIndex(l,m),p=o[0],q=o[1];
l.uploads=l.uploads.set(q,n(p,q));};
k.prototype.


$ReactComposerMediaUploadStore_getUploadWithIndex=function(l,m){'use strict';
var n=this.$ReactComposerMediaUploadStore_getUploadIndex(l,m);
return [l.uploads.get(n),n];};
k.prototype.

$ReactComposerMediaUploadStore_getUploadIndex=function(l,m){'use strict';
var n=l.uploadsByID.get(m);
if(n===undefined)
throw new Error('Upload '+m+' hasn\'t been registered');

return n;};
k.prototype.

$ReactComposerMediaUploadStore_getUpload=function(l,m){'use strict';
var n=this.$ReactComposerMediaUploadStore_getUploadIndex(l,m);
return l.uploads.get(n);};
k.prototype.

$ReactComposerMediaUploadStore_shouldIgnoreAction=function(l){'use strict';

if(c('ReactComposerMediaUploadActionType')[l.type]){
var m=l.composerID,
n=l.uploadID;

if(n==null)
return false;


return this.getHasUploadBeenRemoved(m,n);}

return false;};
k.prototype.

$ReactComposerMediaUploadStore_registerMedia=
function(l,
m,
n){
'use strict';
var o=this.getComposerData(l);
o.uploads=o.uploads.splice
(m,
0,
n);

for(var p=m;p<o.uploads.size;p++){
var q=o.uploads.get(p).id;
o.uploadsByID=o.uploadsByID.set(q,p);}

this.$ReactComposerMediaUploadStore_updateUploadDimensions(l,n);};
k.prototype.



$ReactComposerMediaUploadStore_updateUploadDimensions=
function(l,
m){
'use strict';
if(m.mediaType==c('ReactComposerMediaUploadType').PHOTO){
var n=new Image();
n.onload=function(){
var p=this.getComposerData(l);
this.$ReactComposerMediaUploadStore_updateUploadByID
(p,
m.id,
function(q){return q.withMutations(function(r){return r.
set('height',n.height).
set('width',n.width);});});


this.emitChange(l);}.
bind(this);
n.src=m.fileURL;}else
if(m.mediaType==c('ReactComposerMediaUploadType').VIDEO){
var o=document.createElement('video');
o.onloadedmetadata=function(){
var p=this.getComposerData(l);
this.$ReactComposerMediaUploadStore_updateUploadByID
(p,
m.id,
function(q){return q.withMutations(function(r){return r.
set('height',o.videoHeight).
set('width',o.videoWidth);});});


this.emitChange(l);}.
bind(this);
o.src=m.fileURL;}};





f.exports=new k();}),null);

/** js/video/upload/utilities/MultimediaUploadProcessingDialog.react.js */






__d('MultimediaUploadProcessingDialog.react',['fbt','React','XUIDialog.react','XUIDialogTitle.react','XUIDialogBody.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.






state={dialogShown:true},this.







$MultimediaUploadProcessingDialog_getProcessingText=function(){
return this.props.numOfVideos===1?h._(["The video in your post is being processed. We'll send you a notification when it's done and your post is ready to view.","5979eddfd9a7a7f497e51d8d0b4face5"]):h._(["The videos in your post are being processed. We'll send you a notification when they're done and your post is ready to view.","b4ad91cbf8a538bc9f3bb653cf5d0c08"]);}.












bind(this),this.

$MultimediaUploadProcessingDialog_getTitle=function(){
return h._(["Processing Videos","dbdf51e1d110e9149f5fa3456e2c4582"]);},




n;}l.prototype.componentWillReceiveProps=function(m){if(m.show)this.setState({dialogShown:true});};l.prototype.

render=function(){

return (c('React').createElement(c('XUIDialog.react'),
{shown:this.state.dialogShown,
'data-testid':'video_processing_dialog',
width:400},
c('React').createElement(c('XUIDialogTitle.react'),null,
this.$MultimediaUploadProcessingDialog_getTitle()),

c('React').createElement(c('XUIDialogBody.react'),null,
this.$MultimediaUploadProcessingDialog_getProcessingText())));};



l.propTypes={numOfVideos:k.number.isRequired};


f.exports=l;}),null);

/** js/react_composer/utils/ReactComposerMediaFilterUtils.js */





__d('ReactComposerMediaFilterUtils',['ComposerXNativeAudioUploadsConfig','VideoUploadConfig'],(function a(b,c,d,e,f,g){




var h=
{hasVideos:function i(j){
return this.filterVideos(j).length>0;},


hasAudioFiles:function i(j){
return this.filterAudioFiles(j).length>0;},


filterVideos:function i(j){
return this.filterFileOfSupportedType
(j,
c('VideoUploadConfig').videoExtensions);},



filterAudioFiles:function i(j){
return this.filterFileOfSupportedType
(j,
c('ComposerXNativeAudioUploadsConfig').audioExtensions);},



filterFileOfSupportedType:function i
(j,
k){

return j.filter(function(l){
var m=l.indexOf('.')!==-1?
l.split('.').pop().toLowerCase():
'';
return k[m];});}};




f.exports=h;}),null);

/** js/react_composer/attachments/media/videos/ReactComposerVideoXUploader.js */





__d('ReactComposerVideoXUploader',['invariant','ReactComposerEvents','ReactComposerMediaUploadActions','ReactComposerMediaUploadStore','ReactComposerMediaUploadType','ReactComposerMediaFilterUtils','ReactComposerMediaUploadActionType','VideoUploader','VideoUploadProgressBar','Arbiter','DOM','ifRequired','JSLogger','Map','PhotosUploadID','SubscriptionsHandler','VideoUploadFile','MultimediaUploadProcessingDialog.react','React','ReactDOM','Run','Set','throttle','ReactComposerMediaUtils'],(function a(b,c,d,e,f,g,h){

'use strict';



























var i=250;
















function j(k){this.


































































































































































































































$ReactComposerVideoXUploader_handlePostSuccess=function(){
var l=c('DOM').create('div');
c('DOM').appendContent(document.body,l);

var m=this.$ReactComposerVideoXUploader_videoUploadsCount>0;
c('ifRequired')
('ReactComposerOptimisticPostingStore',
function(n){
if(n.
hadOptimisticallyPosted(this.$ReactComposerVideoXUploader_composerID))
m=false;}.

bind(this),
function(){});


if(m)
c('ReactDOM').render
(c('React').createElement(c('MultimediaUploadProcessingDialog.react'),
{numOfVideos:this.$ReactComposerVideoXUploader_videoUploadsCount}),

l);}.


bind(this);this.$ReactComposerVideoXUploader_config=k;this.$ReactComposerVideoXUploader_subscriptions=new (c('SubscriptionsHandler'))();this.$ReactComposerVideoXUploader_videoUploadsCount=0;this.$ReactComposerVideoXUploader_uploaders=new (c('Map'))();this.$ReactComposerVideoXUploader_uploads=new (c('Set'))();this.$ReactComposerVideoXUploader_isUploading=false;k.composerID||h(0,'`composerID` attribute required');k.uploaderParams||h(0,'`uploaderParams` attribute required');this.$ReactComposerVideoXUploader_subscriptions.addSubscriptions(c('Arbiter').subscribe(c('ReactComposerEvents').POST_SUCCEEDED+k.composerID,c('throttle')(this.$ReactComposerVideoXUploader_handlePostSuccess,i,this)),c('Arbiter').subscribe(c('ReactComposerEvents').POST_STARTED+k.composerID,c('throttle')(this.$ReactComposerVideoXUploader_handlePostStart,i,this)));this.$ReactComposerVideoXUploader_composerID=k.composerID;this.$ReactComposerVideoXUploader_uploaderParams=k.uploaderParams;this.$ReactComposerVideoXUploader_jsLogger=c('JSLogger').create('composer');c('Run').onLeave(function(){return this.cancelUploads();}.bind(this));c('Run').onUnload(function(){return this.cancelUploads();}.bind(this));}j.prototype.cancelUploads=function(){this.$ReactComposerVideoXUploader_uploads.forEach(function(k){var l=k.uploadID;this.$ReactComposerVideoXUploader_uploads['delete'](k);var m=this.$ReactComposerVideoXUploader_uploaders.get(l);if(m)m.abandon();}.bind(this));this.$ReactComposerVideoXUploader_isUploading=false;};j.prototype.upload=function(k){k.forEach(function(m){if(!c('ReactComposerMediaFilterUtils').hasVideos([m.name]))return;if(!m.uploadID)m.uploadID=c('PhotosUploadID').getNewID();this.$ReactComposerVideoXUploader_onUploadEnqueued(m);}.bind(this));var l=k.find(function(m){return c('ReactComposerMediaFilterUtils').hasVideos([m.name]);});if(!this.$ReactComposerVideoXUploader_isUploading&&l)this.uploadVideo(l);};j.prototype.uploadVideo=function(k){if(!k)return;this.$ReactComposerVideoXUploader_isUploading=true;var l=JSON.parse(JSON.stringify(this.$ReactComposerVideoXUploader_uploaderParams));l.isMultiMediaPost=true;var m=new (c('VideoUploader'))(l);this.$ReactComposerVideoXUploader_uploaders.set(k.uploadID,m);var n=c('VideoUploadFile').fromFile(k);this.$ReactComposerVideoXUploader_subscriptions.addSubscriptions(m.subscribe('upload-started',this.$ReactComposerVideoXUploader_onUploadStart.bind(this,k)),m.subscribe('upload-progressed',this.$ReactComposerVideoXUploader_onUploadProgress.bind(this,k)),m.subscribe('upload-failed',this.$ReactComposerVideoXUploader_onUploadFailure.bind(this,k)),m.subscribe('upload-finished',this.$ReactComposerVideoXUploader_onSequentialUploadSuccess.bind(this,k)));try{m.upload(n);}catch(o){this.$ReactComposerVideoXUploader_jsLogger.error('error_send_unpublished_files',o);throw o;}};j.prototype.cancelUpload=function(k){var l=this.$ReactComposerVideoXUploader_uploaders.get(k);if(l){l.cancel();l.reset();this.$ReactComposerVideoXUploader_uploaders['delete'](k);if(this.$ReactComposerVideoXUploader_uploads.size>0){var m=this.$ReactComposerVideoXUploader_uploads.values().next().value;this.uploadVideo(m);}else this.$ReactComposerVideoXUploader_isUploading=false;}this.deleteUpload(k);};j.prototype.deleteUpload=function(k){this.$ReactComposerVideoXUploader_uploads.forEach(function(l){if(l.uploadID===k)this.$ReactComposerVideoXUploader_uploads['delete'](l);}.bind(this));};j.prototype.$ReactComposerVideoXUploader_onSequentialUploadSuccess=function(k,l,m){c('ReactComposerMediaUploadActions').doneUploading(this.$ReactComposerVideoXUploader_composerID,k.uploadID,c('ReactComposerMediaUploadActionType').VIDEO_UPLOAD_DONE,k,0,m.video_id,'','');var n=this.$ReactComposerVideoXUploader_uploaders.get(k.uploadID);if(n){n.reset();this.$ReactComposerVideoXUploader_uploaders['delete'](k.uploadID);}c('ReactComposerMediaUtils').changeToPeopleTaggerAfterUpload(this.$ReactComposerVideoXUploader_composerID);this.$ReactComposerVideoXUploader_isUploading=false;this.$ReactComposerVideoXUploader_uploads['delete'](k);if(this.$ReactComposerVideoXUploader_uploads.size>0){var o=this.$ReactComposerVideoXUploader_uploads.values().next().value;this.uploadVideo(o);}};j.prototype.$ReactComposerVideoXUploader_onUploadEnqueued=function(k){this.$ReactComposerVideoXUploader_uploads.add(k);c('ReactComposerMediaUploadActions').enqueue(this.$ReactComposerVideoXUploader_composerID,k.uploadID,k.name,c('ReactComposerMediaUploadStore').getUploads(this.$ReactComposerVideoXUploader_composerID).size,c('ReactComposerMediaUploadActionType').VIDEO_UPLOAD_ENQUEUED,c('ReactComposerMediaUploadType').VIDEO,URL.createObjectURL(k));};j.prototype.$ReactComposerVideoXUploader_onUploadStart=function(k,l){c('ReactComposerMediaUploadActions').startUploading(this.$ReactComposerVideoXUploader_composerID,k.uploadID,k,c('ReactComposerMediaUploadActionType').VIDEO_UPLOAD_UPLOADING);};j.prototype.$ReactComposerVideoXUploader_onUploadProgress=function(k,l,m){var n=c('VideoUploadProgressBar').computeProgress(m.start_offset,m.sent_bytes,m.file_size,0,0);c('ReactComposerMediaUploadActions').progressUploading(this.$ReactComposerVideoXUploader_composerID,k.uploadID,Math.round(n));};j.prototype.$ReactComposerVideoXUploader_onUploadFailure=function(k,l,m){var n={code:m.error_code,description:m.error_description,summary:m.error_summary,transient:m.error_is_transient||m.error_code==1004||m.error_code==1006};c('ReactComposerMediaUploadActions').failUploading(this.$ReactComposerVideoXUploader_composerID,k.uploadID,k,0,n,c('ReactComposerMediaUploadActionType').VIDEO_UPLOAD_FAILED);};j.prototype.

$ReactComposerVideoXUploader_handlePostStart=function(){




this.$ReactComposerVideoXUploader_videoUploadsCount=
c('ReactComposerMediaUploadStore').getUploadsCount
(this.$ReactComposerVideoXUploader_composerID,
c('ReactComposerMediaUploadType').VIDEO);};

j.prototype.

destroy=function(){
this.$ReactComposerVideoXUploader_subscriptions.release();};



f.exports=j;}),null);

/** js/react_composer/attachments/media/photos/ReactComposerPhotoLegacyLimitExceededDialog.js */






__d('ReactComposerPhotoLegacyLimitExceededDialog',['fbt','DOM','LayerDestroyOnHide','React','ReactDOM','XUIDialog.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react'],(function a(b,c,d,e,f,g,h){



















var i=
{show:function j(k){
var l=h._(["Too Many Photos Added","c8fa3c101cd3d6351884b357e87784a0"]),




m=h._(["You can only add {maxselect} photos to a post. To add more photos, try creating an album.","187210f5c1f038b1a873023b326c2e58"],

[h.param('maxselect',k)]),





n=c('DOM').create('div');

c('ReactDOM').render
(c('React').createElement(c('XUIDialog.react'),
{shown:true,
behaviors:{LayerDestroyOnHide:c('LayerDestroyOnHide')},
width:600},
c('React').createElement(c('XUIDialogTitle.react'),null,
c('React').createElement('span',null,l)),

c('React').createElement(c('XUIDialogBody.react'),null,m),
c('React').createElement(c('XUIDialogFooter.react'),null,
c('React').createElement(c('XUIDialogOkayButton.react'),{use:'confirm',action:'cancel'}))),


n);}};




f.exports=i;}),null);

/** js/react_composer/attachments/media/videos/ReactComposerVideoLegacyLimitExceededDialog.js */






__d('ReactComposerVideoLegacyLimitExceededDialog',['fbt','ErrorDialog'],(function a(b,c,d,e,f,g,h){








var i=
{show:function j(){
c('ErrorDialog').show(h._(["Too many files","61c0c4cd032e06dcd4c2da7fa01f6683"]),h._(["Please select only one video file at a time.","4d8a6abbda45c0ba3b53f5921baf9d92"]));}};












f.exports=i;}),null);

/** js/react_composer/attachments/media/videos/ReactComposerVideoUploadActionType.js */





__d('ReactComposerVideoUploadActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){








f.exports=c('keyMirrorRecursive')
({VIDEO_SET_UPLOADER:null,
VIDEO_UPLOAD_ADD:null,
VIDEO_UPLOAD_REMOVE:null},
'ReactComposerVideoUploadActionType');}),null);

/** js/react_composer/attachments/media/videos/ReactComposerVideoUploadStore.js */





__d('ReactComposerVideoUploadStore',['ReactComposerStoreBase','ReactComposerVideoUploadActionType','immutable'],(function a(b,c,d,e,f,g){var h,i,











j=c('immutable').Record
({file:null});h=babelHelpers.inherits





(k,c('ReactComposerStoreBase'));i=h&&h.prototype;
function k(){'use strict';
var l;
i.constructor.call(this,
function(){

return {uploader:null,
video:null};},


function(m){
switch(m.type){
case c('ReactComposerVideoUploadActionType').VIDEO_SET_UPLOADER:
l&&l.$ReactComposerVideoUploadStore_handleSetUploader(m);
break;
case c('ReactComposerVideoUploadActionType').VIDEO_UPLOAD_ADD:
l&&l.$ReactComposerVideoUploadStore_handleAddUpload(m);
break;
case c('ReactComposerVideoUploadActionType').VIDEO_UPLOAD_REMOVE:
l&&l.$ReactComposerVideoUploadStore_handleRemoveUpload(m);
break;
default:}});





l=this;}
k.prototype.

getUploader=function(l){'use strict';
return this.getComposerData(l).uploader;};
k.prototype.

getVideo=function(l){'use strict';
return this.getComposerData(l).video;};
k.prototype.

$ReactComposerVideoUploadStore_handleSetUploader=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','uploader']),n=m[0],o=m[1],


p=this.getComposerData(n);
p.uploader=o;

this.emitChange(n);};
k.prototype.

$ReactComposerVideoUploadStore_handleAddUpload=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','file']),n=m[0],o=m[1],


p=this.getComposerData(n);
p.video=new j({file:o});

this.emitChange(n);};
k.prototype.

$ReactComposerVideoUploadStore_handleRemoveUpload=function(l){'use strict';
var m=this.validateAction(l,'composerID'),

n=this.getComposerData(m);
n.video=null;
n.input&&n.input.clear();

this.emitChange(m);};



f.exports=new k();}),null);

/** js/react_composer/attachments/media/videos/ReactComposerVideoUploadActions.js */





__d('ReactComposerVideoUploadActions',['ReactComposerDispatcher','ReactComposerVideoUploadActionType','ReactComposerVideoUploadStore'],(function a(b,c,d,e,f,g){





c('ReactComposerVideoUploadStore');













var h=
{setUploader:function i(j,k){
c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerVideoUploadActionType').VIDEO_SET_UPLOADER,
uploader:k});},



add:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerVideoUploadActionType').VIDEO_UPLOAD_ADD,
file:k});},



remove:function i(j){
c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerVideoUploadActionType').VIDEO_UPLOAD_REMOVE});}};




f.exports=h;}),null);

/** js/react_composer/utils/ReactComposerMediaUtils.js */






__d('ReactComposerMediaUtils',['invariant','ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerLoggingName','ReactComposerMediaUploadType','ReactComposerMediaFilterUtils','ReactComposerPhotoActions','ReactComposerPhotoLegacyLimitExceededDialog','ReactComposerMediaUploadActions','ReactComposerMediaUploadStore','ReactComposerTaggerActions','ReactComposerTaggerStore','ReactComposerTaggerType','ReactComposerVideoLegacyLimitExceededDialog','ReactComposerVideoUploadStore','ReactComposerVideoUploadActions','Arbiter','Bootloader','Map','PUWMethods','VideoUploadFeatureDetector','VideoUploader','VideoUploadFile','curry','uniqueID'],(function a(b,c,d,e,f,g,h){
'use strict';


































var i=







{clearInput:function j(k,l){
var m=this.getFileNamesFromFileInput(k.getInput());
if(l||!i.hasVideos(m))
k.clear();},



getFileNames:function j(k){
var l=[];
for(var m=0;m<k.length;m++)
l.push(k[m].name);

return l;},


getFileNamesFromFileInput:function j(k){
if(c('VideoUploadFeatureDetector').supportsFileAPI()){
return this.getFileNames(k.files);}else 

return [k.value.split('/').pop().split('\\').pop()];},



hasVideos:function j(k){
return c('ReactComposerMediaFilterUtils').hasVideos(k);},


hasAudioFiles:function j(k){
return c('ReactComposerMediaFilterUtils').hasAudioFiles(k);},


filterVideos:function j(k){
return c('ReactComposerMediaFilterUtils').filterVideos(k);},


filterAudioFiles:function j(k){
return c('ReactComposerMediaFilterUtils').filterAudioFiles(k);},


filterFileOfSupportedType:function j
(k,
l){

return c('ReactComposerMediaFilterUtils').filterFileOfSupportedType
(k,
l);},



uploadVideo:function j
(k,
l){



var m=c('ReactComposerMediaUploadStore').getUploadsOfType
(k,
c('ReactComposerMediaUploadType').PHOTO);

if(m.size>0)
c('ReactComposerMediaUploadActions').removeAllPhotoUploads(k,m);


c('ReactComposerVideoUploadActions').add(k,l);},


uploadPhotos:function j
(k,
l,
m,
n,
o,
p){

var q=m.isUploadLimitExceeded
(n,
l);


if(q){
c('ReactComposerPhotoLegacyLimitExceededDialog').show
(m.getMaxSelectableFilesCount
(n));


return;}





var r=l?l.length:1;



if(r<1)
return;







if(c('ReactComposerVideoUploadStore').getVideo(k))
c('ReactComposerVideoUploadActions').remove(k);


c('ReactComposerMediaUploadActions').photosSelect
(k,
r,
o);


p&&p();},


uploadVideosFromTarget:function j
(k,
l,
m,
n,
o){

if(o){
this.uploadMultiMediaFromTarget
(k,
l,
m,
n,
o);}else{


if(l.files&&l.files.length>1){
c('ReactComposerVideoLegacyLimitExceededDialog').show();
return;}

this.uploadVideo
(k,
c('VideoUploadFile').fromFileInput(l));}},




uploadVideos:function j
(k,
l,
m,
n,
o){

if(o){
this.uploadMultiMedia
(k,
l,
m,
n);}else{


if(l&&l.length>1){
c('ReactComposerVideoLegacyLimitExceededDialog').show();
return;}

this.uploadVideo
(k,
c('VideoUploadFile').fromFile(l[0]));}},




uploadMultiMediaFromTarget:function j
(k,
l,
m,
n,
o){

var p=this.getVideoXUploader(k);






p.upload(Array.from(l.files));


this.uploadPhotos
(k,
l.files,
m,
n,
c('PUWMethods').FILE_SELECTOR,
function(){
m&&m.upload(l);},

o);},



uploadPhotosOrVideoFromTarget:function j
(k,
l,
m,
n,
o){

var p=this.getFileNamesFromFileInput(l);
if(this.hasVideos(p)){
this.uploadVideosFromTarget
(k,
l,
m,
n,
o);}else 


this.uploadPhotos
(k,
l.files,
m,
n,
c('PUWMethods').FILE_SELECTOR,
function(){
m&&m.upload(l);});},




uploadMultiMedia:function j
(k,
l,
m,
n){

var o=arguments.length<=4||arguments[4]===undefined?c('PUWMethods').FILE_SELECTOR:arguments[4],
p=this.getVideoXUploader(k);






p.upload(l);


var q=
l.filter(function(r){return !this.hasVideos([r.name]);}.bind(this));

this.uploadPhotos
(k,
q,
m,
n,
o,
function(){
q.forEach(function(r){
r.uploadID=c('uniqueID')();
r.filename='';});

m.enqueueAsyncUploadRequest
(k,
q,
{},
{},
false);});},




uploadPhotosOrVideo:function j
(k,
l,
m,
n){


var o=arguments.length<=4||arguments[4]===undefined?c('PUWMethods').FILE_SELECTOR:arguments[4],p=arguments[5],
q=this.getFileNames(l);
if(this.hasVideos(q)){
this.uploadVideos
(k,
l,
m,
n,
p);}else 


this.uploadPhotos
(k,
l,
m,
n,
o,
function(){
l.forEach(function(r){
r.uploadID=c('uniqueID')();
r.filename='';});


m.enqueueAsyncUploadRequest
(k,
l,
{},
{},
false);});},





subscribeToImageEdit:function j
(k,
l){

return c('Arbiter').subscribe

(['AttachmentsPhotoEditor/newImage'+k,
'AttachmentsPhotoEditor/tagsUpdated'+k],

c('curry')
(i.onImageEdited,
k,
l));},




onImageEdited:function j
(k,
l,
m,
n){

if(m==='AttachmentsPhotoEditor/newImage'+k){

var o=c('ReactComposerMediaUploadStore').getUploadsOfType
(k,
c('ReactComposerMediaUploadType').PHOTO),

p=o.find(function(t){
return (t.photoID===n.fbid||t.originalPhotoID===n.fbid);}),

q=c('ReactComposerMediaUploadStore').getUploadIndex
(k,
p.id);




c('ReactComposerPhotoActions').removePhoto
(k,
p.photoID,
p.id);


var r=n.blob;
r.uploadID=c('uniqueID')();
r.name=p.filename||c('uniqueID')();
var s=new (c('Map'))([[r.uploadID,q]]);
l&&l.enqueueAsyncUploadRequest
(k,
[r],

{data:
{original_fbid:n.fbid,
xy_tags:n.xyTags,
stickers:n.stickers,
text_overlays:n.textOverlays,
has_crop:n.hasCrop,
has_filter:n.hasFilter},

indexMap:s},


{xyTags:n.xyTags},

false);


c('ReactComposerMediaUploadActions').photosSelect
(k,
1,
c('PUWMethods').METHOD_EDITOR);}else

if(m===
'AttachmentsPhotoEditor/tagsUpdated'+k)
i.handleFaceboxAndXYTags
(k,
n.fbid,
n.xyTags);



c('ReactComposerPhotoActions').finishPhotoEdit(k);},


handleFaceboxAndXYTags:function j
(k,
l,
m){

c('ReactComposerPhotoActions').untagAllForPhoto(k,l);
m.forEach(function(n){
if(n.from_facebox){
c('ReactComposerPhotoActions').tagFacebox
(k,
l,
n.facebox,
n.subject,
n.name);}else

if(n.is_product_tag){
c('ReactComposerPhotoActions').tagXYProduct
(k,
l,
n.name,
n.source,
n.subject,
n.x,
n.y);}else 


c('ReactComposerPhotoActions').tagXY
(k,
l,
n.name,
n.source,
n.subject,
n.x,
n.y);});},





handleXYTagsOnly:function j
(k,
l,
m){

m.forEach(function(n){
if(n.from_facebox){
return;}else 

c('ReactComposerPhotoActions').tagXY
(k,
l,
n.name,
n.source,
n.subject,
n.x,
n.y);});},





handleVideoUploadForDroppedFiles:function j
(k,
l,
m){

var n=
c('ReactComposerMediaUploadStore').getUploadsCount(m.composerID)>0;

if(n)
return false;


var o=this.getFileNames(k);
if(!o||o.length!==1)
return false;


var p=i.hasVideos(o);

if(p){
c('Bootloader').loadModules
(["ComposerXVideoUploadDialogController"],
function(q){
return (q.showDialog
({targetID:m.targetID,
files:k,
composerEntryPointRef:m.composerType,
canShowOptimisticPost:
l.shouldShowOptimisticVideoPost}));},'ReactComposerMediaUtils');


return true;}

return false;},


handleSpecialMediaUpload:function j
(event,
k,
l,
m){

var n=
c('ReactComposerMediaUploadStore').getUploadsCount(m.composerID)>0;


if(!l.useVideoUploadDialog||
n)

return false;


var o=event.target;
if(!o||!o.files||o.files.length!==1)
return false;


var p=i.getFileNamesFromFileInput(o),
q=i.hasVideos(p),
r=i.hasAudioFiles(p);

if(r&&l.canUploadAudio){
c('Bootloader').loadModules
(["ComposerXAudioUploadDialogController"],
function(s){
return (s.showDialog
({targetID:m.targetID,
fileInput:k,
originalComposerID:m.composerID}));},'ReactComposerMediaUtils');


return true;}else
if(q){
c('Bootloader').loadModules
(["ComposerXVideoUploadDialogController"],
function(s){
return (s.showDialog
({targetID:m.targetID,
fileInput:k,
composerEntryPointRef:m.composerType,
canShowOptimisticPost:
l.shouldShowOptimisticVideoPost,
originalComposerID:m.composerID}));},'ReactComposerMediaUtils');


return true;}


return false;},


isMultimediaPost:function j(k){

return (c('ReactComposerMediaUploadStore').getUploadsCount
(k,
c('ReactComposerMediaUploadType').VIDEO)>
0&&
c('ReactComposerMediaUploadStore').getUploadsCount
(k,
c('ReactComposerMediaUploadType').PHOTO)>
0);},






getVideoXUploader:function j(k){


var l=c('ReactComposerAttachmentStore').getAttachmentsConfig
(k,
c('ReactComposerAttachmentType').MEDIA);



l||h(0,
'uploaderParams needed for the videoXUploader');


var m=c('ReactComposerMediaUploadStore').getVideoUploader
(k,
l.videoUploadParams);


return m;},


getVideoUploader:function j(k){
var l=c('ReactComposerAttachmentStore').getAttachmentsConfig
(k,
c('ReactComposerAttachmentType').MEDIA);



l||h(0,
'uploaderParams needed for the videoXUploader');

var m=
JSON.parse(JSON.stringify(l.videoUploadParams));
return new (c('VideoUploader'))(m);},







changeToPeopleTaggerAfterUpload:function j(k){
var l=
c('ReactComposerTaggerStore').getSelectedTagger(k),
m=c('ReactComposerAttachmentStore').getIsAttachmentSelected
(k,
c('ReactComposerAttachmentType').MEDIA);

if(l===null&&m)
c('ReactComposerTaggerActions').selectTaggerWithoutAutofocus
(k,
c('ReactComposerLoggingName').PHOTO_UPLOAD_DONE,
c('ReactComposerTaggerType').PEOPLE);}};





f.exports=i;}),null);

/** js/react_composer/mixins/ReactComposerPropsAndStoreBasedStateMixin.js */





__d('ReactComposerPropsAndStoreBasedStateMixin',['invariant','ReactComposerContextMixin','ExecutionEnvironment','StoreBasedStateMixinHelper','setImmediate'],(function a(b,c,d,e,f,g,h){

'use strict';












var i=function j(){

for(var k=arguments.length,l=Array(k),m=0;m<k;m++)l[m]=arguments[m];


return {_queuedUpdates:[],

mixins:[c('ReactComposerContextMixin')],



getInitialState:function n(){
var o=void 0;

if(this.constructor.getAttachmentInitialState){
o=this.constructor.getAttachmentInitialState
(this.context.composerID,
this.props,
this.context);}else 


o={};


if(this.constructor.beforeCalculateInitialState)
this.constructor.beforeCalculateInitialState
(this.context.composerID,
this.props,
this.context);



return Object.assign
({},
o,
this.constructor.calculateState
(this.context.composerID,
this.props,
this.context));},




componentWillMount:function n(){

this.constructor.calculateState||h(0,
'Implement static calculateState() when using '+
'ReactComposerStoreBasedStateMixin');



this.context.composerID||h(0,
'Expose a composerID context variable when using '+
'ReactComposerStoreBasedStateMixin');


this._recalculateStateID=null;
var o=function(p){

if(!c('ExecutionEnvironment').canUseDOM)
return;

if(this.isMounted()&&p.composerID===this.context.composerID)
this.setState
(this.constructor.calculateState
(this.context.composerID,
this.props,
this.context));



this._recalculateStateID=null;
if(this._queuedUpdates.length)
this._queuedUpdates.shift()();}.

bind(this);

this._mixin=new (c('StoreBasedStateMixinHelper'))(l);
this._mixin.subscribeCallback(function(p){
if(this._recalculateStateID===null){
this._recalculateStateID=c('setImmediate')(o,p);}else 

this._queuedUpdates.push(function(){
this._recalculateStateID=c('setImmediate')(o,p);}.
bind(this));}.

bind(this));},


componentWillReceiveProps:function n(o){
var p=void 0;

if(this.constructor.getAttachmentWillReceivePropsState)
p=
this.constructor.getAttachmentWillReceivePropsState
(this.context.composerID,
o,
this.props,
this.context);



this.setState
(Object.assign
({},
p||{},
this.constructor.calculateState
(this.context.composerID,
o,
this.context)));},





componentWillUnmount:function n(){
this._mixin.release();
this._mixin=null;}};};




f.exports=i;}),null);

/** js/react_composer/attachments/mixins/ReactComposerAttachmentBodyMixin.js */





__d('ReactComposerAttachmentBodyMixin',['invariant','ReactComposerAttachmentActions','ReactComposerAttachmentStore','ReactComposerPropsAndStoreBasedStateMixin','ReactComponentWithPureRenderMixin'],(function a(b,c,d,e,f,g,h){









function i(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];
k=k.concat(c('ReactComposerAttachmentStore'));


return {mixins:[c('ReactComponentWithPureRenderMixin'),

c('ReactComposerPropsAndStoreBasedStateMixin').apply(this,k)],


statics:
{beforeCalculateInitialState:function m(n,o){


var p=this.getAttachmentConfig?
this.getAttachmentConfig(o):
o.config&&o.config.attachmentsConfig&&
o.config.attachmentsConfig[this.attachmentID];

c('ReactComposerAttachmentActions').registerAttachment
(n,

{id:this.attachmentID,
selected:o.selected,
active:o.prefillConfig&&
o.prefillConfig.shouldActivateSelectedAttachment,
config:p});},




calculateState:function m(n,o){
return Object.assign

({selected:c('ReactComposerAttachmentStore').getIsAttachmentSelected
(n,
this.attachmentID)},


this.calculateAttachmentState?
this.calculateAttachmentState(n,o):{});}},




componentWillMount:function m(){

this.constructor.attachmentID||h(0,
'`attachmentID` static attribute should exist when using '+
'ReactComposerAttachmentBodyMixin');



this.constructor.attachmentID||h(0,
'`renderX` function should exist when using '+
'ReactComposerAttachmentBodyMixin');},



render:function m(){

if(!this.state.selected)
return null;


return this.renderX();}};}




f.exports=i;}),null);

/** js/react_composer/attachments/status/attachment_preview/minutiae_attachment/ReactComposerMinutiaeAttachmentActionType.js */





__d('ReactComposerMinutiaeAttachmentActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirrorRecursive')
({FETCH_ATTACHMENT:null,
SET_EXPLICIT_LOCATION:null,
SET_MARKUP:null,
SET_HIDE_OBJECT_ATTACHMENT:null},
'ReactComposerMinutiaeAttachmentActionType');}),null);

/** www/__virtual__/x/XReactComposerMinutiaeAttachmentController.js */



__d("XReactComposerMinutiaeAttachmentController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/minutiae\/attachment\/",{av:{type:"FBID"},composer_id:{type:"String",required:true},action_id:{type:"String",required:true},object_id:{type:"String",required:true},target_id:{type:"String",required:true},is_timeline:{type:"Bool",defaultValue:false},explicit_place_tag_id:{type:"String"}});}),

null);

/** js/react_composer/attachments/status/attachment_preview/minutiae_attachment/ReactComposerMinutiaeAttachmentStore.js */





__d('ReactComposerMinutiaeAttachmentStore',['ActorURI','ReactComposerAttachmentActionType','ReactComposerAttachmentType','ReactComposerMinutiaeAttachmentActionType','ReactComposerStoreBase','XReactComposerMinutiaeAttachmentController','AsyncRequest'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits










(j,c('ReactComposerStoreBase'));i=h&&h.prototype;
function j(){'use strict';
var k;
i.constructor.call(this,
function(){

return {isFetching:false,
markup:null,
pendingRequest:null,
explicitLocation:null};},


function(l){
switch(l.type){
case c('ReactComposerMinutiaeAttachmentActionType').FETCH_ATTACHMENT:
k&&k.$ReactComposerMinutiaeAttachmentStore_handleFetchMinutiaeAttachment(l);
break;
case c('ReactComposerMinutiaeAttachmentActionType').SET_MARKUP:
k&&k.$ReactComposerMinutiaeAttachmentStore_handleSetMarkup(l);
break;
case c('ReactComposerAttachmentActionType').SELECT_ATTACHMENT:
k&&k.$ReactComposerMinutiaeAttachmentStore_handleAttachmentSelected(l);
break;
case c('ReactComposerMinutiaeAttachmentActionType').SET_EXPLICIT_LOCATION:
k&&k.$ReactComposerMinutiaeAttachmentStore_handleSetExplicitLocation(l);
break;
case c('ReactComposerMinutiaeAttachmentActionType').SET_HIDE_OBJECT_ATTACHMENT:
k&&k.$ReactComposerMinutiaeAttachmentStore_handleSetHideObjectAttachment(l);
break;}});



k=this;}
j.prototype.

getMarkup=function(k){'use strict';
return this.getComposerData(k).markup;};
j.prototype.

getHideObjectAttachment=function(k){'use strict';
return this.getComposerData(k).hideObjectAttachment;};
j.prototype.

isFetching=function(k){'use strict';
return this.getComposerData(k).isFetching;};
j.prototype.

$ReactComposerMinutiaeAttachmentStore_handleSetExplicitLocation=function(k){'use strict';var l=
this.validateAction
(k,
['composerID','explicitLocation']),m=l[0],n=l[1],


o=this.getComposerData(m);
o.explicitLocation=n;

this.emitChange(m);};
j.prototype.

$ReactComposerMinutiaeAttachmentStore_handleFetchMinutiaeAttachment=function(k){'use strict';var l=

this.validateAction
(k,

['composerID',
'actionID',
'objectID',
'targetID',
'actorID',
'isTimeline']),m=l[0],n=l[1],o=l[2],p=l[3],q=l[4],r=l[5],



s=this.getComposerData(m);
s.isFetching=true;

var t=c('XReactComposerMinutiaeAttachmentController').getURIBuilder().
setString('composer_id',m).
setString('action_id',n).
setString('object_id',o).
setString('target_id',p).
setBool('is_timeline',r);

if(s.explicitLocation)
t.setString('explicit_place_tag_id',s.explicitLocation);


var u=c('ActorURI').create(t.getURI(),q);
s.pendingRequest=new (c('AsyncRequest'))(u).
setFinallyHandler(function(){
s.isFetching=false;
s.pendingRequest=null;
this.emitChange(m);}.
bind(this));
s.pendingRequest.send();

this.emitChange(m);};
j.prototype.

$ReactComposerMinutiaeAttachmentStore_handleSetMarkup=function(k){'use strict';var l=
this.validateAction
(k,
['composerID','markup']),m=l[0],n=l[1],


o=this.getComposerData(m);
o.markup=n;

this.emitChange(m);};
j.prototype.

$ReactComposerMinutiaeAttachmentStore_handleSetHideObjectAttachment=function(k){'use strict';var l=
this.validateAction
(k,
['composerID','hideAttachment']),m=l[0],n=l[1],


o=this.getComposerData(m);
o.hideObjectAttachment=n;

this.emitChange(m);};
j.prototype.

$ReactComposerMinutiaeAttachmentStore_handleAttachmentSelected=function(k){'use strict';var l=
this.validateAction
(k,
['composerID','id']),m=l[0],n=l[1];


if(n===c('ReactComposerAttachmentType').STATUS)
return;


var o=this.getComposerData(m);
o.markup=null;
o.isFetching=false;
o.pendingRequest&&o.pendingRequest.abandon();

this.emitChange(m);};



f.exports=new j();}),null);

/** www/__virtual__/x/XReactComposerScrapedAttachmentController.js */



__d("XReactComposerScrapedAttachmentController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/scraper\/",{composer_id:{type:"String",required:true},target_id:{type:"String",required:true},scrape_url:{type:"String",required:true},carousel_params:{type:"String"},entry_point:{type:"String",required:true},source_attachment:{type:"String",defaultValue:""},source_logging_name:{type:"Enum",defaultValue:"others",enumType:1}});}),

null);

/** www/__virtual__/x/XReactComposerShareAttachmentController.js */



__d("XReactComposerShareAttachmentController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/share_attachment\/",{composer_id:{type:"String",required:true},target_id:{type:"String",required:true},share_type:{type:"Int",required:true},share_params:{type:"String",required:true},source_attachment:{type:"String",defaultValue:""}});}),

null);

/** js/react_composer/attachments/status/attachment_preview/scraped_attachment/ReactComposerScrapedAttachmentStore.js */





__d('ReactComposerScrapedAttachmentStore',['ActorURI','CallToActionLinkFormats','ReactComposerAttachmentActionType','ReactComposerAttachmentStore','ReactComposerScrapedAttachmentActionType','ReactComposerStoreBase','XReactComposerScrapedAttachmentController','XReactComposerShareAttachmentController','AsyncRequest','PagesComposerCarouselPostChildAttachmentAttributes','PagesComposerCarouselPostLogAttributes','DialogX','DOM'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits
















(j,c('ReactComposerStoreBase'));i=h&&h.prototype;
function j(){'use strict';
var k;
i.constructor.call(this,
function(){

return {markup:null,
attachmentConfig:{},
enabled:false,
isScraping:false,
permissiveMatch:null,
sourceAttachment:null};},


function(l){
switch(l.type){
case c('ReactComposerScrapedAttachmentActionType').ATTACHMENT_SCRAPE_ENABLED:
k&&k.$ReactComposerScrapedAttachmentStore_handleAttachmentScrapeEnabled(l);
break;
case c('ReactComposerScrapedAttachmentActionType').ATTACHMENT_PERMISSIVE_MATCH_SETTED:
k&&k.$ReactComposerScrapedAttachmentStore_handlePermissiveMatchSetted(l);
break;
case c('ReactComposerScrapedAttachmentActionType').ATTACHMENT_SCRAPE_INTENDED:
k&&k.$ReactComposerScrapedAttachmentStore_handleAttachmentScrapeIntended(l);
break;
case c('ReactComposerScrapedAttachmentActionType').ATTACHMENT_SHARE_SELECTED:
k&&k.$ReactComposerScrapedAttachmentStore_handleAttachmentShareSelected(l);
break;
case c('ReactComposerScrapedAttachmentActionType').ATTACHMENT_SCRAPED:
k&&k.$ReactComposerScrapedAttachmentStore_handleAttachmentScraped(l);
break;
case c('ReactComposerAttachmentActionType').SELECT_ATTACHMENT:
k&&k.$ReactComposerScrapedAttachmentStore_handleAttachmentSelected(l);
break;
case c('ReactComposerScrapedAttachmentActionType').ATTACHMENT_CAROUSEL_UPLOAD:
k&&k.$ReactComposerScrapedAttachmentStore_handleCarouselImageUpload(l);}});



k=this;}
j.prototype.

isEnabled=function(k){'use strict';
return this.getComposerData(k).isEnabled;};
j.prototype.

hasAttachment=function(k){'use strict';
return !!this.getMarkup(k);};
j.prototype.

isScraping=function(k){'use strict';
return this.getComposerData(k).isScraping;};
j.prototype.

getMarkup=function(k){'use strict';
return this.getComposerData(k).markup;};
j.prototype.

isReadOnly=function(k){'use strict';
var l=this.getComposerData(k);
return l.attachmentConfig&&l.attachmentConfig.readOnly;};
j.prototype.

getAttachmentConfig=function(k){'use strict';
var l=this.getComposerData(k);
if(!l.markup)
return null;


if(!l.attachmentConfig.readOnly){
var m=c('DOM').scry
(l.markup,
'input[name="attachment[params][images][0]"]').
pop(),
n=c('DOM').scry
(l.markup,
'input[name="attachment[params][title]"]').
pop(),

o=c('DOM').scry
(l.markup,
'input[name="attachment[params][summary]"]').
pop();

if(m!=null){
if(l.attachmentConfig.params.images===undefined)
l.attachmentConfig.params.images=[];

l.attachmentConfig.params.images[0]=m.value;}


if(n!=null)
l.attachmentConfig.params.title=n.value;


if(o!=null)
l.attachmentConfig.params.summary=o.value;


var p=c('DOM').scry
(l.markup,
'input[name="attachment[carousel_log]['+
c('PagesComposerCarouselPostLogAttributes').USE_CAROUSEL_COMPOSER+']"]').
pop();
if(p!=null&&p.value==='1'){
this.$ReactComposerScrapedAttachmentStore_updateCarouselChildAttachment(l);
this.$ReactComposerScrapedAttachmentStore_updateCarouselVideoLppAttachment(l);}


this.$ReactComposerScrapedAttachmentStore_updateCarouselLog(l);}


return l.attachmentConfig;};
j.prototype.

getPostConfirmationDialog=function(k){'use strict';
return this.getComposerData(k).postConfirmationDialog;};
j.prototype.

$ReactComposerScrapedAttachmentStore_updateCarouselLog=function(k){'use strict';
var l={},
m=Object.keys(c('PagesComposerCarouselPostLogAttributes'));
for(var n=0;n<m.length;n++){
var o=c('PagesComposerCarouselPostLogAttributes')[m[n]],
p=c('DOM').scry
(k.markup,
'input[name="attachment[carousel_log]['+o+']"]').
pop();
if(!p)
continue;


l[o]=p.value;}


if(Object.keys(l).length!==0)
k.attachmentConfig.carousel_log=l;};

j.prototype.

$ReactComposerScrapedAttachmentStore_updateCarouselChildAttachment=function(k){'use strict';
k.attachmentConfig.params.child_attachments={};
var l=Object.keys(c('PagesComposerCarouselPostChildAttachmentAttributes')),



m=0,
n={};
while(true){
var o=false,
p=0;
n={};
for(p=0;p<l.length;p++){
var q=c('DOM').scry
(k.markup,
'input[name="attachment[params][child_attachments]['+m+']['+
c('PagesComposerCarouselPostChildAttachmentAttributes')[l[p]]+']"]').
pop();
if(q==null)
continue;

n[c('PagesComposerCarouselPostChildAttachmentAttributes')[l[p]]]=
q.value;
o=true;}


if(!o)
break;

k.attachmentConfig.params.child_attachments[m]=n;
m++;}};

j.prototype.

$ReactComposerScrapedAttachmentStore_updateCarouselVideoLppAttachment=function(k){'use strict';
var l=k.attachmentConfig.params.child_attachments;
if(!l)
return;

var m=null,
n=0;
for(var o in l)
if(Object.prototype.hasOwnProperty.call(l,o))
if(l[o].selected==='1'){
n+=1;
if(n>1)
return;

if(l[o].video_id)
m=l[o];}




if(m){
k.attachmentConfig.params.carousel_video_lpp={};

Object.assign(k.attachmentConfig.params.carousel_video_lpp,
{video_id:m.video_id,
publish:true,
link_title:m.name,
link_description:m.description,
cta_type:m.cta_type?
m.cta_type:'NO_BUTTON',
cta_link:m.link,
cta_link_format:c('CallToActionLinkFormats').VIDEO_LPP});}};



j.prototype.

getPermissiveMatch=function(k){'use strict';
return this.getComposerData(k).permissiveMatch;};
j.prototype.

$ReactComposerScrapedAttachmentStore_handleAttachmentScrapeEnabled=function(k){'use strict';var l=
this.validateAction
(k,
['composerID','enabled']),m=l[0],n=l[1],


o=this.getComposerData(m);
o.isEnabled=n;};
j.prototype.

$ReactComposerScrapedAttachmentStore_handlePermissiveMatchSetted=function(k){'use strict';var l=
this.validateAction
(k,
['composerID','permissiveMatch']),m=l[0],n=l[1],


o=this.getComposerData(m);
o.permissiveMatch=n;

this.emitChange(k.composerID);};
j.prototype.

$ReactComposerScrapedAttachmentStore_handleAttachmentScrapeIntended=function(k){'use strict';var l=

this.validateAction
(k,

['composerID',
'targetID',
'value',
'entryPoint',
'actorID',
'sourceLoggingName']),m=l[0],n=l[1],o=l[2],p=l[3],q=l[4],r=l[5];



if(!this.isEnabled(m))
return;

var s=this.getComposerData(k.composerID);
s.isScraping=true;

var t=
c('ReactComposerAttachmentStore').getSelectedAttachmentID(m),

u=c('XReactComposerScrapedAttachmentController').getURIBuilder().
setString('composer_id',m).
setString('target_id',n).
setString('scrape_url',o).
setString('entry_point',p).
setString('source_attachment',t).
setEnum('source_logging_name',r).
getURI();

u=c('ActorURI').create(u,q);

new (c('AsyncRequest'))(u).send();

this.emitChange(k.composerID);};
j.prototype.

$ReactComposerScrapedAttachmentStore_handleAttachmentScraped=function(k){'use strict';
if(!this.isEnabled(k.composerID))
return;


var l=this.getComposerData(k.composerID);
l.markup=k.markup;
l.attachmentConfig=k.attachmentConfig;
l.isScraping=false;
l.sourceAttachment=
c('ReactComposerAttachmentStore').getSelectedAttachmentID(k.composerID);
l.postConfirmationDialog=k.postConfirmationDialog;

this.emitChange(k.composerID);};
j.prototype.

$ReactComposerScrapedAttachmentStore_handleAttachmentSelected=function(k){'use strict';
var l=this.getComposerData(k.composerID);
if(k.id===l.sourceAttachment)
return;


l.markup=null;
l.attachmentConfig={};
l.isScraping=false;
l.sourceAttachment=null;

this.emitChange(k.composerID);};
j.prototype.

$ReactComposerScrapedAttachmentStore_handleCarouselImageUpload=function(k){'use strict';var l=







this.validateAction
(k,

['composerID',
'targetID',
'scrapeUrl',
'carouselParams',
'entryPoint',
'actorID']),m=l[0],n=l[1],o=l[2],p=l[3],q=l[4],r=l[5],



s=this.getComposerData(k.composerID);
s.isScraping=true;

var t=
c('ReactComposerAttachmentStore').getSelectedAttachmentID(m),

u=c('XReactComposerScrapedAttachmentController').getURIBuilder().
setString('composer_id',m).
setString('target_id',n).
setString('scrape_url',o).
setString('carousel_params',p).
setString('entry_point',q).
setString('source_attachment',t).
getURI();

u=c('ActorURI').create(u,r);

new (c('AsyncRequest'))(u).send();

this.emitChange(k.composerID);};
j.prototype.

$ReactComposerScrapedAttachmentStore_handleAttachmentShareSelected=function(k){'use strict';var l=

this.validateAction
(k,
['composerID','targetID','actorID','shareType','shareParams']),m=l[0],n=l[1],o=l[2],p=l[3],q=l[4];


if(!this.isEnabled(m))
return;


var r=this.getComposerData(m);
r.isScraping=true;

var s=
c('ReactComposerAttachmentStore').getSelectedAttachmentID(m),

t=c('XReactComposerShareAttachmentController').getURIBuilder().
setString('composer_id',m).
setString('target_id',n).
setInt('share_type',p).
setString('share_params',JSON.stringify(q)).
setString('source_attachment',s).
getURI();

t=c('ActorURI').create(t,o);

new (c('AsyncRequest'))(t).send();

this.emitChange(m);};



f.exports=new j();}),null);

/** js/react_composer/flux/ReactComposerSessionMetricsActionTypes.js */





__d('ReactComposerSessionMetricsActionTypes',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirrorRecursive')
({KEYSTROKE:null,
PASTE:null},
'ReactComposerSessionMetricsActionTypes');}),null);

/** js/react_composer/flux/ReactComposerSessionMetricsStore.js */





__d('ReactComposerSessionMetricsStore',['ReactComposerStoreBase','ReactComposerAttachmentActionType','ReactComposerSessionMetricsActionTypes','NavigationMetrics'],(function a(b,c,d,e,f,g){var h,i,









j=-1;h=babelHelpers.inherits

(k,c('ReactComposerStoreBase'));i=h&&h.prototype;


function k(){'use strict';
var l=void 0;

i.constructor.call(this,
function(){


c('NavigationMetrics').addRetroactiveListener
(c('NavigationMetrics').Events.NAVIGATION_DONE,
function(m,n){var o=n.tti;
l.ttiTimestamp=o;});





return {composerStartTime:null,

keystrokeCount:0,

pasteCount:0};},


function(m){
switch(m.type){
case c('ReactComposerAttachmentActionType').SELECT_ATTACHMENT:
l&&l.$ReactComposerSessionMetricsStore_handleSelectAttachment(m);
break;
case c('ReactComposerSessionMetricsActionTypes').KEYSTROKE:
l&&l.$ReactComposerSessionMetricsStore_handleKeystroke(m);
break;
case c('ReactComposerSessionMetricsActionTypes').PASTE:
l&&l.$ReactComposerSessionMetricsStore_handlePaste(m);
break;}});

this.ttiTimestamp=j;

l=this;}
k.prototype.



getComposerEntryTime=function(l){'use strict';
if(this.ttiTimestamp==j){
return 0;}else 

return Math.round
((this.getComposerData(l).composerStartTime-this.ttiTimestamp)/
1000);};

k.prototype.

getComposerStartTime=function(l){'use strict';
return this.getComposerData(l).composerStartTime;};
k.prototype.

getKeystrokeCount=function(l){'use strict';
return this.getComposerData(l).keystrokeCount;};
k.prototype.

getPasteCount=function(l){'use strict';
return this.getComposerData(l).pasteCount;};
k.prototype.

$ReactComposerSessionMetricsStore_handleSelectAttachment=function(l){'use strict';
var m=this.validateAction(l,'composerID'),
n=this.getComposerData(m);


if(!n.composerStartTime)
n.composerStartTime=Date.now();};

k.prototype.

$ReactComposerSessionMetricsStore_handleKeystroke=function(l){'use strict';
var m=this.validateAction(l,'composerID'),
n=this.getComposerData(m);

n.keystrokeCount++;};
k.prototype.

$ReactComposerSessionMetricsStore_handlePaste=function(l){'use strict';
var m=this.validateAction(l,'composerID'),
n=this.getComposerData(m);

n.pasteCount++;};



f.exports=new k();}),null);

/** js/react_composer/optimistic_posting/ReactComposerOptimisticPostingActionType.js */





__d('ReactComposerOptimisticPostingActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){









f.exports=c('keyMirrorRecursive')
({START_OPTIMISTICALLY_POSTING:null,
FINISH_OPTIMISTICALLY_POSTING:null},
'ReactComposerOptimisticPostingActionType');}),null);

/** js/react_composer/utils/ReactComposerConfig.js */






__d('ReactComposerConfig',['ComposerEntryPointRef','ComposerTargetData','ComposerTargetType','ComposerSourceSurface','React','getObjectValues'],(function a(b,c,d,e,f,g){









var h=c('React').PropTypes;

































f.exports=h.shape
({actorConfig:h.object,
attachmentsConfig:h.object.isRequired,
audienceXHP:h.any,
contextInfo:h.object,
loggingConfig:h.shape
({targetType:h.oneOf(c('getObjectValues')(c('ComposerTargetType'))).isRequired,
ref:h.oneOf(c('getObjectValues')(c('ComposerEntryPointRef'))).isRequired,
composerSourceSurface:h.oneOf
(c('getObjectValues')(c('ComposerSourceSurface'))).
isRequired}).
isRequired,
mediaAcceptParam:h.shape
({photos:h.string,
both:h.string}),

nuxConfig:h.object.isRequired,
postButtonConfig:h.object,
showExpandedComposer:h.bool,
taggersConfig:h.object,
sproutsConfig:h.object,
targetData:h.instanceOf(c('ComposerTargetData')).isRequired,
instagramCrossPostingEnabled:h.bool});}),null);

/** js/react_composer/optimistic_posting/story/ReactComposerOptimisticPostingStoryGeneric.react.js */






__d('ReactComposerOptimisticPostingStoryGeneric.react',['cx','React'],(function a(b,c,d,e,f,g,h){






var i=function j(){
return (c('React').createElement('div',{className:"_3lza"},
c('React').createElement('div',{className:"_2iwq"},
c('React').createElement('div',{className:"_2iwy"}),
c('React').createElement('div',{className:"_2iwz"}),
c('React').createElement('div',{className:"_2iw-"}),
c('React').createElement('div',{className:"_2iw_"}),
c('React').createElement('div',{className:"_2ix0"}))));};




f.exports=i;}),null);

/** js/react_composer/ui/profile_photo/ReactComposerProfilePhoto.react.js */






__d('ReactComposerProfilePhoto.react',['cx','fbt','Image.react','Link.react','React'],(function a(b,c,d,e,f,g,h,i){var j,k,








l=c('React').PropTypes,


m=40;j=babelHelpers.inherits

(n,c('React').PureComponent);k=j&&j.prototype;n.prototype.














render=function(){'use strict';
var o="_3hvt",

p=
c('React').createElement(c('Image.react'),
{className:"_bth",
src:this.props.src,
height:m,
width:m}),


q=i._(["Profile of {name}","2a0e09a93c4c7c44709de92e3bbb7bb1"],[i.param



('name',this.props.profileName)]);



return this.props.profileURI?
c('React').createElement(c('Link.react'),
{'aria-label':q,
className:o,
href:this.props.profileURI,
onClick:this.props.onClick},
p):

c('React').createElement('div',{className:o},
p);};

function n(){'use strict';j.apply(this,arguments);}n.propTypes={src:l.string.isRequired,profileName:l.string,profileURI:l.string,onClick:l.func};


f.exports=n;}),null);

/** js/react_composer/optimistic_posting/story/ReactComposerOptimisticPostingStoryHeader.react.js */






__d('ReactComposerOptimisticPostingStoryHeader.react',['cx','fbt','ReactComposerProfilePhoto.react','Layout.react','React'],(function a(b,c,d,e,f,g,h,i){






var j=c('Layout.react').Column,
k=c('Layout.react').FillColumn,


l=c('React').PropTypes,

m=function o(){},

n=function o(p){
var q=p.profilePicSrc,
r=p.profileName;




return (c('React').createElement(c('Layout.react'),{className:"_1zm9"},
c('React').createElement(j,{className:"_2pii"},
c('React').createElement(c('ReactComposerProfilePhoto.react'),
{src:q,
profileName:r,
onClick:m})),


c('React').createElement(k,null,
c('React').createElement('h6',{className:"_5pbw"},r),
c('React').createElement('span',null,i._(["Just now","76a9e51332c34c9bc053b0425adba463"])))));};







n.propTypes=
{profilePicSrc:l.string.isRequired,
profileName:l.string.isRequired};


f.exports=n;}),null);

/** js/react_composer/optimistic_posting/story/ReactComposerOptimisticPostingStoryVideo.react.js */






__d('ReactComposerOptimisticPostingStoryVideo.react',['Bootloader','EventListener','ifRequired','Image.react','JSLog','React','ReactDOM'],(function a(b,c,d,e,f,g){var h,i,









j=c('React').PropTypes,

k=function m(){};h=babelHelpers.inherits

(l,c('React').Component);i=h&&h.prototype;












function l(m){'use strict';
i.constructor.call(this);this.$ReactComposerOptimisticPostingStoryVideo_loadedmetadataListener=null;

this.state=
{thumbSrc:m.videoUpload.thumbSrc};}

l.prototype.

componentDidMount=function(){'use strict';
if(!this.state.thumbSrc){
var m=document.createElement('video');
m.setAttribute('src',this.props.videoUpload.fileURL);

c('Bootloader').loadModules
(["generateVideoThumbnails"],
function(){},'ReactComposerOptimisticPostingStoryVideo.react');

this.$ReactComposerOptimisticPostingStoryVideo_loadedmetadataListener=c('EventListener').listen
(m,
'loadedmetadata',
this.$ReactComposerOptimisticPostingStoryVideo_handleLoadedmetadata.bind(this,m));}};


l.prototype.

componentWillUnmount=function(){'use strict';
this.$ReactComposerOptimisticPostingStoryVideo_loadedmetadataListener&&this.$ReactComposerOptimisticPostingStoryVideo_loadedmetadataListener.remove();};
l.prototype.

$ReactComposerOptimisticPostingStoryVideo_handleLoadedmetadata=function(m){'use strict';
var n=c('ReactDOM').findDOMNode(this);

c('Bootloader').loadModules
(["generateVideoThumbnails"],
function(o){
o
(m,

n.clientWidth,

n.clientHeight,
1).

done(function(p){return this.setState
({thumbSrc:p.thumbnails[0].getURL()});}.bind(this));}.

bind(this),'ReactComposerOptimisticPostingStoryVideo.react');


this.$ReactComposerOptimisticPostingStoryVideo_loadedmetadataListener&&this.$ReactComposerOptimisticPostingStoryVideo_loadedmetadataListener.remove();
this.$ReactComposerOptimisticPostingStoryVideo_loadedmetadataListener=null;};
l.prototype.

$ReactComposerOptimisticPostingStoryVideo_renderVideoPreviewElement=function(){'use strict';
return c('React').createElement(c('Image.react'),{src:this.state.thumbSrc});};
l.prototype.

$ReactComposerOptimisticPostingStoryVideo_renderVideoPlaceholderElement=function(){'use strict';
return c('ifRequired')
('ReactComposerVideoXUploadPlaceholder.react',
function(m){
return (c('React').createElement(m,
{onRemoveButtonClicked:k,
uploadID:this.props.videoUpload.id,
uploadProgress:this.props.videoUpload.progress,
uploadState:this.props.videoUpload.state}));}.bind(this),

function(){
c('JSLog').error
('ReactComposerVideoXUploadPlaceholderContainer.react isn\'t '+
'loaded when it\'s supposed to be.');});};



l.prototype.

render=function(){'use strict';


return this.state.thumbSrc&&
this.state.thumbSrc.indexOf('data:image/')===0?
this.$ReactComposerOptimisticPostingStoryVideo_renderVideoPreviewElement():
this.$ReactComposerOptimisticPostingStoryVideo_renderVideoPlaceholderElement();};
l.propTypes={videoUpload:j.object.isRequired};


f.exports=l;}),null);

/** js/react_composer/optimistic_posting/story/ReactComposerOptimisticPostingStoryMedia.react.js */






__d('ReactComposerOptimisticPostingStoryMedia.react',['cx','ReactComposerCollageUtils','ReactComposerMediaUploadType','ReactComposerOptimisticPostingStoryVideo.react','Image.react','immutable','React'],(function a(b,c,d,e,f,g,h){var i,j,










k=c('React').PropTypes,

l=5,

m=1000;i=babelHelpers.inherits

(n,c('React').Component);j=i&&i.prototype;n.prototype.








$ReactComposerOptimisticPostingStoryMedia_computeStyleInfos=function(o){'use strict';
if(o.size===0){
return [];}else
if(o.size===1){
return c('ReactComposerCollageUtils').getSingleItemStyleInfo
(o.first(),
m);}else{


var p=c('ReactComposerCollageUtils').getCollageLayoutConfig
(o,
m);

return p.getItemStyleInfos();}};

n.prototype.

$ReactComposerOptimisticPostingStoryMedia_computeHeightPercent=function(o){'use strict';

var p=0;
o.forEach(function(q){
var r=q.top+q.height;
if(r>p)
p=r;});



return p/m*100;};
n.prototype.

$ReactComposerOptimisticPostingStoryMedia_renderMediaItems=function(o){'use strict';
return o.map(function(p,q){
var r=this.props.mediaUploads.get(q),

s=p.height/m*100,
t=p.width/m*100,
u=p.top/m*100,
v=p.left/m*100,

w=void 0;
if(r.mediaType===c('ReactComposerMediaUploadType').VIDEO){
w=
c('React').createElement(c('ReactComposerOptimisticPostingStoryVideo.react'),
{videoUpload:r});}else{


var x=r.width/r.height,
y=p.width/p.height,
z=x>y?
{height:'100%'}:
{width:'100%'},



aa=r.isSpherical&&r.thumbSrc?
r.thumbSrc:
r.fileURL;
w=c('React').createElement(c('Image.react'),{src:aa,style:z});}


var ba=null;
if(this.props.mediaUploads.size>l&&
q===l-1)
ba=this.$ReactComposerOptimisticPostingStoryMedia_renderMoreMediaOverlay();



return (c('React').createElement('div',
{key:r.id,
className:"_58vp",
style:
{paddingBottom:''+s+'%',
width:''+t+'%',
top:''+u+'%',
left:''+v+'%'}},

w,
ba));}.


bind(this));};
n.prototype.

$ReactComposerOptimisticPostingStoryMedia_renderMoreMediaOverlay=function(){'use strict';
var o=this.props.mediaUploads.size-l+1;


return (c('React').createElement('div',{className:"_52d9"},
c('React').createElement('div',{className:"_52da"},
c('React').createElement('div',{className:"_52db"},'+',
o))));};




n.prototype.

render=function(){'use strict';
var o=this.$ReactComposerOptimisticPostingStoryMedia_computeStyleInfos
(this.props.mediaUploads.take(l));







return (c('React').createElement('div',
{className:"_58vq",
style:
{paddingBottom:''+this.$ReactComposerOptimisticPostingStoryMedia_computeHeightPercent(o)+'%'}},

this.$ReactComposerOptimisticPostingStoryMedia_renderMediaItems(o)));};


function n(){'use strict';i.apply(this,arguments);}n.propTypes={mediaUploads:k.instanceOf(c('immutable').List).isRequired};


f.exports=n;}),null);

/** js/react_composer/optimistic_posting/story/ReactComposerOptimisticPostingStoryProgress.react.js */






__d('ReactComposerOptimisticPostingStoryProgress.react',['cx','fbt','BUIProgressBar.react','React'],(function a(b,c,d,e,f,g,h,i){






var j=c('React').PropTypes,

k=function l(m){



var n=m.percent,
o=void 0;
if(n===null){
o={isBuffering:true};}else 

o={percentage:n};



return (c('React').createElement('div',{className:"_2oj3"},
c('React').createElement('span',null,i._(["Uploading...","001aafef9e9b5fadb8fb45aa61fe0691"])),



c('React').createElement(c('BUIProgressBar.react'),babelHelpers['extends']
({className:"_2oj4",
flexibleWidth:true},
o))));};





k.propTypes=
{percent:j.number};


f.exports=k;}),null);

/** js/react_composer/optimistic_posting/story/ReactComposerOptimisticPostingStoryStatus.react.js */






__d('ReactComposerOptimisticPostingStoryStatus.react',['cx','React'],(function a(b,c,d,e,f,g,h){




var i=c('React').PropTypes,

j=function l(m){
var n=m.status;



return (c('React').createElement('div',{className:"_4sfj"},
c('React').createElement('div',{className:"_5pbx"},
n)));},





k=i.oneOfType
([i.number,
i.string,
i.element,


i.arrayOf(k)]);


j.PropTypes=
{status:k.isRequired};


f.exports=j;}),null);

/** js/react_composer/optimistic_posting/story/ReactComposerOptimisticPostingStoryVideoMessage.react.js */






__d('ReactComposerOptimisticPostingStoryVideoMessage.react',['cx','fbt','React'],(function a(b,c,d,e,f,g,h,i){





var j=
function k(){
return (c('React').createElement('div',{className:"_41hf"},i._(["The video in your post is being processed. We'll send you a notification when it's done and your post is ready to view.","ec7e5090d8e89ec34710c4056b4b165a"])));};







f.exports=j;}),null);

/** js/react_composer/optimistic_posting/story/ReactComposerOptimisticPostingStoryContainer.react.js */






__d('ReactComposerOptimisticPostingStoryContainer.react',['cx','ReactComposerAttachmentType','ReactComposerConfig','ReactComposerEvents','ReactComposerMediaUploadType','ReactComposerOptimisticPostingStoryGeneric.react','ReactComposerOptimisticPostingStoryHeader.react','ReactComposerOptimisticPostingStoryMedia.react','ReactComposerOptimisticPostingStoryProgress.react','ReactComposerOptimisticPostingStoryStatus.react','ReactComposerOptimisticPostingStoryVideoMessage.react','ReactComposerStatusStore','StoreBasedStateMixinHelper','Arbiter','ifRequired','immutable','JSLog','ReactComponentWithPureRenderMixin','React','XUICard.react'],(function a(b,c,d,e,f,g,h){























var i=c('React').PropTypes,
j=null,

k=c('React').createClass({displayName:'ReactComposerOptimisticPostingStoryContainer',
mixins:[c('ReactComponentWithPureRenderMixin')],



propTypes:
{attachmentType:i.string.isRequired,
composerID:i.string.isRequired,
config:c('ReactComposerConfig').isRequired},


_mixin:null,
_recalculateStateID:null,
_mediaUploads:null,
_previousPercent:0,

getInitialState:function l(){
c('ifRequired')
('ReactComposerMediaUploadStore',
function(m){
j=m;},

function(){
c('JSLog').error
('ReactComposerMediaUploadStore isn\'t loaded when it\'s supposed '+
'to be loaded.');});




return this._calculateState();},


componentDidMount:function l(){
this._previousPercent=0;

this._mixin=new (c('StoreBasedStateMixinHelper'))
([j]);


this._mixin.subscribeCallback(function(m){
if(this._recalculateStateID===null)


this._recalculateStateID=setTimeout(function(){
var n=this._calculateState(),
o=Math.max(n.percent,this._previousPercent);
n.percent=o;
this._previousPercent=o;
this.setState(n);
this._recalculateStateID=null;}.
bind(this),0);}.

bind(this));

if(j&&j.
getUploadsOfType(this.props.composerID,c('ReactComposerMediaUploadType').VIDEO).
size)
c('Arbiter').subscribeOnce
(c('ReactComposerEvents').POST_SUCCEEDED+this.props.composerID,
function(){
this.setState({videoFinishedUploading:true});}.
bind(this));},




componentWillUnmount:function l(){
this._mixin&&this._mixin.release();
this._recalculateStateID&&clearTimeout(this._recalculateStateID);},



_calculateState:function l(){var m,n=this,
o=null;

if(this.props.attachmentType===c('ReactComposerAttachmentType').MEDIA&&
j)(function(){
var p=j.getUploads(n.props.composerID),
q=0,
r=0,
s=0,
t=0;

p.forEach(function(w){
if(w.get('fileSize')!==null){
q+=w.get('fileSize');

r+=(w.progress||0)*w.get('fileSize');}else{

s++;
t+=w.progress||0;}});



if(s){
var u=p.size-s,
v=u?
q/u:
1;

q+=v*s;
r+=v*t;}


if(q)
o=r/q;})
();



return {percent:o,
videoFinishedUploading:this.state&&this.state.videoFinishedUploading};},



_renderStatusElement:function l(){
var m=c('ReactComposerStatusStore').getMessageText
(this.props.composerID),




n=[].concat(m.split('\n'));
for(var o=1;o<n.length;o+=2)
n.splice(o,0,c('React').createElement('br',{key:o}));


return c('React').createElement(c('ReactComposerOptimisticPostingStoryStatus.react'),{key:'status',status:n});},


_renderMediaElement:function l(){
if(!j)
return this._renderGenericElement();


if(!this._mediaUploads)
this._mediaUploads=
j.getUploads(this.props.composerID);

var m=
c('React').createElement(c('ReactComposerOptimisticPostingStoryMedia.react'),
{key:'media',
mediaUploads:this._mediaUploads});


if(!c('ReactComposerStatusStore').getMessageText(this.props.composerID))
return m;


return [this._renderStatusElement(),
m];},



_renderGenericElement:function l(){
return c('React').createElement(c('ReactComposerOptimisticPostingStoryGeneric.react'),null);},


_renderBody:function l(){
var m=void 0;
if(this.props.attachmentType===c('ReactComposerAttachmentType').STATUS){
m=this._renderStatusElement();}else
if(this.props.attachmentType===c('ReactComposerAttachmentType').MEDIA){
m=this._renderMediaElement();}else 


m=this._renderGenericElement();



return (c('React').createElement('div',{className:"_38-r"},
m));},




render:function l(){var m=

this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],n=m.profilePicSrc,o=m.profileName;


return (c('React').createElement(c('XUICard.react'),{className:"_4rtr"},
this.state.videoFinishedUploading?
c('React').createElement(c('ReactComposerOptimisticPostingStoryVideoMessage.react'),null):
c('React').createElement(c('ReactComposerOptimisticPostingStoryProgress.react'),
{percent:this.state.percent}),

c('React').createElement(c('ReactComposerOptimisticPostingStoryHeader.react'),
{profilePicSrc:n,
profileName:o}),
this._renderBody()));}});





f.exports=k;}),null);

/** js/react_composer/optimistic_posting/ReactComposerOptimisticPostingStore.js */





__d('ReactComposerOptimisticPostingStore',['ReactComposerActionTypes','ReactComposerEvents','ReactComposerInit','ReactComposerMediaUploadType','ReactComposerOptimisticPostingActionType','ReactComposerOptimisticPostingStoryContainer.react','ReactComposerStoreBase','Arbiter','ifRequired','JSLog','React','ReactDOM'],(function a(b,c,d,e,f,g){var h,i,

















j={};h=babelHelpers.inherits






(k,c('ReactComposerStoreBase'));i=h&&h.prototype;
function k(){'use strict';
var l=function(m){
switch(m.type){
case c('ReactComposerOptimisticPostingActionType').START_OPTIMISTICALLY_POSTING:
this&&this.$ReactComposerOptimisticPostingStore_startOptimisticallyPosting(m);
break;
case c('ReactComposerOptimisticPostingActionType').FINISH_OPTIMISTICALLY_POSTING:
case c('ReactComposerActionTypes').POST_SUCCEEDED:
case c('ReactComposerActionTypes').POST_ERROR:
this&&this.$ReactComposerOptimisticPostingStore_finishOptimisticallyPosting(m);
break;
default:}}.

bind(this);

i.constructor.call(this,
function(){
return {hasVideo:null,
optimisticallyPostingElement:null};},

l);}

k.prototype.

isOptimisticallyPosting=function(l){'use strict';
return !!this.getComposerData(l).optimisticallyPostingElement;};
k.prototype.

hadOptimisticallyPosted=function(l){'use strict';
return !!j[l];};
k.prototype.

$ReactComposerOptimisticPostingStore_showPreviewAndResetComposer=function(l,m){'use strict';

c('Arbiter').inform(c('ReactComposerEvents').OPTIMISTIC_POSTING_STARTED+l);

c('Arbiter').inform('LitestandComposer/publishTemp',
{composer_id:l,
markup:m});


c('ReactComposerInit').hideAndReplaceComposer(l);};
k.prototype.

$ReactComposerOptimisticPostingStore_startOptimisticallyPosting=function(l){'use strict';var m=
this.validateAction
(l,['composerID','config','attachmentType']),n=m[0],o=m[1],p=m[2],


q=this.$ReactComposerOptimisticPostingStore_getComponentDOM
(c('React').createElement(c('ReactComposerOptimisticPostingStoryContainer.react'),
{attachmentType:p,
composerID:n,
config:o}));

this.getComposerData(n).optimisticallyPostingElement=q;
c('ifRequired')
('ReactComposerMediaUploadStore',
function(r){


this.getComposerData(n).hasVideo=r.
getUploadsOfType(n,c('ReactComposerMediaUploadType').VIDEO).size;}.
bind(this),
function(){
c('JSLog').error
('ReactComposerMediaUploadStore isn\'t loaded when it\'s supposed '+
'to be.');});




this.emitChange(n);



setTimeout
(this.$ReactComposerOptimisticPostingStore_showPreviewAndResetComposer.bind(null,n,q),
0);};

k.prototype.

$ReactComposerOptimisticPostingStore_finishOptimisticallyPosting=function(l){'use strict';
var m=this.validateAction(l,['composerID']),

n=this.getComposerData(m).optimisticallyPostingElement;
if(!n)
return;

this.getComposerData(m).optimisticallyPostingElement=null;
if(!this.getComposerData(m).hasVideo)
c('ReactDOM').unmountComponentAtNode(n);

j[m]=true;

this.emitChange(m);};
k.prototype.

$ReactComposerOptimisticPostingStore_getComponentDOM=function(l){'use strict';
var m=document.createElement('div');
c('ReactDOM').render(l,m);
return m;};



f.exports=new k();}),null);

/** js/react_composer/optimistic_posting/ReactComposerOptimisticPostingActions.js */





__d('ReactComposerOptimisticPostingActions',['ReactComposerConfig','ReactComposerDispatcher','ReactComposerOptimisticPostingActionType','ReactComposerOptimisticPostingStore'],(function a(b,c,d,e,f,g){





c('ReactComposerOptimisticPostingStore');









var h=
{startOptimisticallyPosting:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
config:k,
attachmentType:l,
type:c('ReactComposerOptimisticPostingActionType').START_OPTIMISTICALLY_POSTING});},



finishOptimisticallyPosting:function i
(j){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerOptimisticPostingActionType').FINISH_OPTIMISTICALLY_POSTING});}};




f.exports=h;}),null);

/** js/react_composer/utils/ReactComposerLoggingConfig.js */





__d('ReactComposerLoggingConfig',['React'],(function a(b,c,d,e,f,g){

var h=c('React').PropTypes;

f.exports=h.shape
({targetType:h.string,
ref:h.string,







composerSourceSurface:h.string.isRequired,
isEditComposer:h.bool});}),null);

/** js/react_composer/ui/ReactComposer.react.js */






__d('ReactComposer.react',['cx','ReactComposerActions','ReactComposerContextMixin','ReactComposerInit','ReactComposerLoggingActions','ReactComposerLoggingConfig','ReactComposerLoggingName','ReactComposerLoggingQueue','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerSessionMetricsStore','ReactComposerStore','ReactComponentWithPureRenderMixin','React','ReactDOM','XUICard.react','joinClasses'],(function a(b,c,d,e,f,g,h){




















var i=c('React').PropTypes,







j=c('React').createClass({displayName:'ReactComposer',
mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin'),


c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerStore'),c('ReactComposerSessionMetricsStore'))],







propTypes:
{hideBorders:i.bool,
loggingConfig:c('ReactComposerLoggingConfig').isRequired,








activateOnInit:i.bool,




activateOnInitEntryPoint:
i.oneOf(Object.values(c('ReactComposerLoggingName')))},


getDefaultProps:function k(){

return {hideBorders:false,
activateOnInit:false,
activateOnInitEntryPoint:c('ReactComposerLoggingName').OTHERS};},



getInitialState:function k(){

return {hasBeenActive:false};},



statics:
{calculateState:function k(l,m){

return {isActive:c('ReactComposerStore').isActive(l)};}},




componentWillMount:function k(){
c('ReactComposerActions').initConfig
(this.context.composerID,
this.props.loggingConfig,
this.props.activateOnInit);


if(this.props.activateOnInit)
c('ReactComposerLoggingActions').composerEntry
(this.context.composerID,
this.props.activateOnInitEntryPoint);},




componentDidUpdate:function k(l,m){
if(this.state.isActive&&!this.state.hasBeenActive){
this.setState({hasBeenActive:!this.state.hasBeenActive});

c('ReactComposerLoggingQueue').initBootload
(this.context.composerID,
c('ReactDOM').findDOMNode(this),
this.context.targetID,
this.props.loggingConfig);}},




componentWillUnmount:function k(){
c('ReactComposerInit').unmountInstance(this.context.composerID,true);},


render:function k(){
var l="_36bx"+

(this.props.hideBorders?' '+"_4a60":'');



return (c('React').createElement(c('XUICard.react'),

{className:c('joinClasses')(this.props.className,l),
'data-testid':'react-composer-root',
'data-test-actorid':this.context.actorID,
id:this.context.composerID},


this.props.children));}});





f.exports=j;}),null);

/** js/react_composer/ui/body/ReactComposerBody.react.js */






__d('ReactComposerBody.react',['cx','React','XUICardSection.react','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits







(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.
render=function(){
var l=c('joinClasses')
("_4zoz",
this.props.className);



return (c('React').createElement(c('XUICardSection.react'),{className:l},
this.props.children));};


function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/react_composer/ui/footer/ReactComposerFooter.react.js */






__d('ReactComposerFooter.react',['cx','React','XUICardSection.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,




k=c('React').PropTypes;i=babelHelpers.inherits




(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.










render=function(){'use strict';
var m=c('joinClasses')
("_2dck",

this.props.className);



return (c('React').createElement(c('XUICardSection.react'),
{background:this.props.background,
className:m},


this.props.children));};


function l(){'use strict';i.apply(this,arguments);}l.propTypes={background:k.string};l.defaultProps={background:'white'};


f.exports=l;}),null);

/** js/react_composer/ui/footer/ReactComposerFooterActions.react.js */






__d('ReactComposerFooterActions.react',['cx','React','XUICardSection.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits







(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.
render=function(){'use strict';
var l=c('joinClasses')
("_2ph-",
this.props.className);



return (c('React').createElement(c('XUICardSection.react'),{className:l},
this.props.children));};


function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** js/react_composer/ui/post_button/ReactComposerPostButton.react.js */






__d('ReactComposerPostButton.react',['cx','fbt','ix','Image.react','React','XUIButton.react'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,









m=c('React').PropTypes;k=babelHelpers.inherits





(n,c('React').PureComponent);l=k&&k.prototype;n.














getButtonSize=function(){
return 'medium';};
n.prototype.






render=function(){
var o=
c('React').createElement(c('Image.react'),
{className:"_5gm4"+


(this.props.disabled&&this.props.isPosting?' '+"_5gm5":''),

src:j("85428"),
'data-testid':'react-composer-throbber'}),


p=
c('React').createElement('span',
{className:

this.props.disabled&&this.props.isPosting?"_5gm9":''},

this.props.label);



return (c('React').createElement(c('XUIButton.react'),
{className:"_1mf7",
disabled:this.props.disabled,
label:p,
image:o,
onClick:this.props.onClick,
use:'confirm',
'data-testid':'react-composer-post-button'}));};


function n(){k.apply(this,arguments);}n.propTypes={disabled:m.bool,onClick:m.func,label:m.string,isPosting:m.bool};n.defaultProps={disabled:false,label:i._(["Post","0a1c00b9f90903aa694f9e3e1b1e515e"])};


f.exports=n;}),null);

/** js/react_composer/ui/mixins/ReactComposerPostButtonContainerMixin.js */





__d('ReactComposerPostButtonContainerMixin',['ReactComposerActions','ReactComposerAttachmentType','ReactComposerConfig','ReactComposerContextMixin','ReactComposerOptimisticPostingActions','ReactComposerOptimisticPostingStore','ReactComposerPostButton.react','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerScrapedAttachmentStore','ReactComposerStore','BootloadedComponent.react','JSResource','ReactComponentWithPureRenderMixin','React','XUIButtonGroup.react'],(function a(b,c,d,e,f,g){


















var h=c('React').PropTypes,

i=
{mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin'),


c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerOptimisticPostingStore'),c('ReactComposerStore'))],





propTypes:
{config:c('ReactComposerConfig').isRequired,
forceDisabled:h.bool,



onClickPreprocess:h.func},


getDefaultProps:function j(){

return {forceDisabled:false};},



statics:
{calculateState:function j
(k,
l,
m){

var n=c('ReactComposerStore').isPosting(k),
o=c('ReactComposerOptimisticPostingStore').
isOptimisticallyPosting(k);


return {disabled:l.forceDisabled||
n||
o,
isPosting:n,
isOptimisticallyPosting:o};},



getButtonSize:function j(){
return 'medium';}},




render:function j(){
var k=
c('React').createElement(c('ReactComposerPostButton.react'),babelHelpers['extends']({},
this.props,
{disabled:this.state.disabled,
className:this.props.className,
onClick:this._onClick,
isPosting:this.state.isPosting}));




if(this.context.actorID===this.context.targetID&&
this.props.config.actorConfig&&
this.props.config.actorConfig.canSchedule&&
this.props.config.actorConfig.timezoneStr)


return (c('React').createElement('span',null,
c('React').createElement(c('XUIButtonGroup.react'),null,
k),

c('React').createElement(c('BootloadedComponent.react'),
{bootloadLoader:
c('JSResource')('ReactComposerUserScheduledPostButton.react').__setRef('ReactComposerPostButtonContainerMixin'),

bootloadPlaceholder:c('React').createElement('div',null),
composerID:this.context.composerID,
onSchedule:this._onClick,
timezoneStr:this.props.config.actorConfig.timezoneStr})));





return k;},


_onClick:function j(event){
if(this.state.disabled){
event.preventDefault();
return;}


if(this.props.onClickPreprocess)
if(!this.props.onClickPreprocess())
return;



var k=
c('ReactComposerScrapedAttachmentStore').getPostConfirmationDialog
(this.context.composerID);

if(k){
k.subscribe('confirm',function(){
k.hide();
k.destroy();
this._doStartPost();}.
bind(this));
k.show();
return;}else 

this._doStartPost();},



_doStartPost:function j(){
c('ReactComposerActions').postStarted
(this.context.composerID,

{actorID:this.context.actorID,
config:this.props.config,
targetID:this.context.targetID});}};





f.exports=i;}),null);

/** js/react_composer/ui/post_button/ReactComposerPostButtonContainer.react.js */





__d('ReactComposerPostButtonContainer.react',['ReactComposerPostButtonContainerMixin','React'],(function a(b,c,d,e,f,g){





var h=c('React').createClass({displayName:'ReactComposerPostButtonContainer',
mixins:[c('ReactComposerPostButtonContainerMixin')]});




f.exports=h;}),null);

/** js/react_composer/ui/footer/ReactComposerGenericFooter.react.js */






__d('ReactComposerGenericFooter.react',['ReactComposerConfig','ReactComposerFooter.react','ReactComposerFooterActions.react','ReactComposerPostButtonContainer.react','React','LeftRight.react'],(function a(b,c,d,e,f,g){var h,i,








j=c('React').PropTypes;h=babelHelpers.inherits







(k,c('React').PureComponent);i=h&&h.prototype;k.prototype.





















render=function(){'use strict';
var l=this.props.postButton?
this.props.postButton:
c('React').createElement(c('ReactComposerPostButtonContainer.react'),{config:this.props.config});


return (c('React').createElement(c('ReactComposerFooter.react'),
{background:this.props.background},
c('React').createElement(c('LeftRight.react'),null,
this.props.leftChild,
c('React').createElement(c('ReactComposerFooterActions.react'),null,
this.props.audienceSelector,
l))));};




function k(){'use strict';h.apply(this,arguments);}k.propTypes={audienceSelector:j.element,background:j.string,config:c('ReactComposerConfig').isRequired,leftChild:j.element,postButton:j.element};k.defaultProps={background:'white',leftChild:c('React').createElement('noscript',null)};


f.exports=k;}),null);

/** js/react_composer/ui/profile_photo/ReactComposerProfilePhotoBlock.react.js */






__d('ReactComposerProfilePhotoBlock.react',['cx','ReactComposerProfilePhoto.react','Layout.react','React','emptyFunction'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,




k=c('Layout.react').Column,
l=c('Layout.react').FillColumn,






m=c('React').PropTypes;i=babelHelpers.inherits





(n,c('React').PureComponent);j=i&&i.prototype;n.prototype.




















render=function(){
var o=this.props.profilePhotoBadge,
p=this.props.onClick||c('emptyFunction');

return (c('React').createElement(c('Layout.react'),null,
c('React').createElement(k,
{className:"_q-v"},

o?
c('React').createElement(o,
this.props):

c('React').createElement(c('ReactComposerProfilePhoto.react'),
{src:this.props.profilePicSrc,
profileName:this.props.profileName,
profileURI:this.props.profileURI,
onClick:p})),


c('React').createElement(l,null,


this.props.children)));};



function n(){i.apply(this,arguments);}n.propTypes={profileName:m.string,profilePicSrc:m.string.isRequired,profileURI:m.string,profilePhotoBadge:m.any,currentProfileBadgeURI:m.string,profileBadgeNUX:m.string,onClick:m.func};


f.exports=n;}),null);

/** js/react_composer/utils/ReactComposerBootloaderPropTypes.js */






__d('ReactComposerBootloaderPropTypes',['React'],(function a(b,c,d,e,f,g){

'use strict';



var h=c('React').PropTypes;

f.exports=h.shape
({statusAttachment:h.func.isRequired,
mediaAttachment:h.func.isRequired,
qandaAttachment:h.func,
questionAttachment:h.func,
extraAttachment:h.func});}),null);
