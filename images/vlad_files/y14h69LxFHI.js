if (self.CavalryLogger) { CavalryLogger.start_js(["G7kWE"]); }

/** __static_js_modules__/faceboxsourceconstants.js */




__d("FaceboxSourceConstants",[],(function a(b,c,d,e,f,g){

f.exports={SNOWLIFT_SUGGEST:"snowlift_suggest",SNOWLIFT_DISMISS:"photo_snowlift_unit_suggestions",PERMALINK_SUGGEST:"permalink_suggest",PERMALINK_DISMISS:"photo_permalink_suggestions",UPLOADER_SUGGEST:"uploader_suggest",UPLOADER_DISMISS:"album_uploader_suggestions"};}),

null);

/** __static_js_modules__/phototagdatasourcetype.js */




__d("PhotoTagDataSourceType",[],(function a(b,c,d,e,f,g){

f.exports={PRODUCT_ITEMS:"product_items",DEFAULT:"default"};}),

null);

/** js/photos/album/PhotoAlbumPlacesTypeahead.js */






__d('PhotoAlbumPlacesTypeahead',['Arbiter'],(function a(b,c,d,e,f,g){




function h(i){'use strict';
if(!i)
return;


if(i.getCore().getHiddenValue()){
var j=
{uid:i.getCore().getHiddenValue(),
text:i.getCore().getValue()};

c('Arbiter').inform
('PhotoAlbumPlacesTypeahead.EXIST_PLACE',
j);}


i.subscribe('select',function(k,l){
c('Arbiter').inform
('PhotoAlbumPlacesTypeahead.SELECTED_PLACE',
l.selected);}.

bind(this));
i.subscribe('reset',function(){
if(!i.getCore().getHiddenValue())
c('Arbiter').inform('PhotoAlbumPlacesTypeahead.RESET_PLACE');}.

bind(this));
i.subscribe('focus',function(){
c('Arbiter').inform('PhotoAlbumPlacesTypeahead.FOCUSED');}.
bind(this));

this._initialized=true;}

h.prototype.

init=function(i){'use strict';
if(this._initialized)
return;


h.call(this,i);};



f.exports=h;}),null);

/** js/photos/bulk/PersistentAlbumDataStore.js */




__d('PersistentAlbumDataStore',['WebStorage'],(function a(b,c,d,e,f,g){




var h='fb_album_recovery',


i=7*60*60*24,

j=

{_storageExists:true,

_initializeWebStorage:function k(){
var l=c('WebStorage').getLocalStorage();
if(!l){
j._storageExists=false;
return;}


if(!l.getItem(h))
l.setItem(h,JSON.stringify({}));},





_getAlbumsObject:function k(){
if(!j._storageExists)
return {};


j._initializeWebStorage();

return JSON.parse
(c('WebStorage').getLocalStorage().getItem(h));},



_setAlbumsObject:function k(l){
if(!j._storageExists)
return;


j._initializeWebStorage();

c('WebStorage').getLocalStorage().setItem
(h,
JSON.stringify(l));},



_getLocalStorageByAlbum:function k(l){

return (j._getAlbumsObject()[l]||
j.createAlbum(l));},



_setLocalStorageByAlbum:function k(l,m){
var n=j._getAlbumsObject();
n[l]=m;

j._setAlbumsObject(n);},


createAlbum:function k(l){
var m=
{privacy:null,
tags:{},
created_at:Date.now()};


j._setLocalStorageByAlbum(l,m);

return m;},


deleteAlbum:function k(l){
var m=j._getAlbumsObject();
delete m[l];

j._setAlbumsObject(m);},


getAlbumPrivacy:function k(l){
return j._getLocalStorageByAlbum(l).privacy;},


setAlbumPrivacy:function k(l,m){
var n=j._getLocalStorageByAlbum(l);
n.privacy=m;

j._setLocalStorageByAlbum(l,n);},


saveTag:function k(l,m,n){
var o=j._getLocalStorageByAlbum(l);
if(!o.tags[m])
o.tags[m]=[];


n.recovered=true;
o.tags[m].push(n);

j._setLocalStorageByAlbum(l,o);},


removeTag:function k(l,m,n){
var o=j._getLocalStorageByAlbum(l),
p=o.tags[m]||[];

for(var q=0;q<p.length;q++)


if(p[q].subject===n||
p[q].name===n){
p.splice(q,1);
break;}



o.tags[m]=p;
j._setLocalStorageByAlbum(l,o);},


getTags:function k(l,m){

return (j._getLocalStorageByAlbum(l).tags[m]||
[]);},



deleteExpiredAlbums:function k(){
var l=j._getAlbumsObject();

for(var m in l){
var n=l[m];


if(Date.now()-n.created_at>i*1000)
j.deleteAlbum(m);}}};






f.exports=j;}),null);

/** www/__virtual__/x/XFamilyBulkTagAddAsyncController.js */



__d("XFamilyBulkTagAddAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/family\/bulk_tag_save\/",{subject:{type:"Int"},save_tags:{type:"String"}});}),

null);

/** js/photos/modules/PhotoTagStore.js */






__d('PhotoTagStore',['AsyncRequest','XFamilyBulkTagAddAsyncController','isEmpty'],(function a(b,c,d,e,f,g){













function h(){'use strict';
this._tagList={};
this._textTagList={};
this._originalTagList={};
this._dirtyPhotosByUid={};

h.instance=this;}
h.prototype.

getPhotoTags=function(i){'use strict';
return this._tagList[i]||{};};
h.prototype.

photoHasTags=function(i){'use strict';
return !c('isEmpty')(this.getPhotoTags(i));};
h.prototype.

clear=function(){'use strict';

this._tagList={};
this._textTagList={};
this._originalTagList={};
this._dirtyPhotosByUid={};};
h.prototype.















addTag=function(i,j,k,l){'use strict';
i[j]=i[j]||{};
var m=i[j][k]||[];
m.push(l);
i[j][k]=m;};
h.prototype.

revert=function(i){'use strict';
var j=this._tagList,
k=this._originalTagList;

for(var l in j)
if(c('isEmpty')(k[l][i])){
j[l][i]=[];}else 

j[l][i]=k[l][i];



this._dirtyPhotosByUid={};};
h.prototype.

hasNewTags=function(){'use strict';
return !c('isEmpty')(this._tagList)||!c('isEmpty')(this._textTagList);};
h.prototype.

userHasDirtyTags=function(i){'use strict';
return !c('isEmpty')(this._dirtyPhotosByUid[i]);};
h.prototype.

userDirtyTagsCount=function(i){'use strict';
return Object.keys(this._dirtyPhotosByUid[i]).length;};
h.prototype.

handleTagFetch=function(i){'use strict';
for(var j in i)
this.loadTagInfo(j,i[j]);};

h.prototype.

saveAlbumTagsForUser=function(i,j){var k=arguments.length<=2||arguments[2]===undefined?false:arguments[2];'use strict';
var l={},
m=[],

n=this._dirtyPhotosByUid[i]||{};
for(var o in n){
var p=this._tagList[o][i];
if(c('isEmpty')(p)){
m[m.length]=o;
continue;}




p.forEach(function(s){
l[o]={x:s.x,y:s.y};});}



var q=
{subject:i,
action:'save',
save_tags:l},


r='/ajax/photos/album/tags.php';
if(k){
q=
{subject:i,
save_tags:JSON.stringify(l)};

r=c('XFamilyBulkTagAddAsyncController').getURIBuilder().
getURI();}

new (c('AsyncRequest'))().
setURI(r).
setData(q).
setHandler(function(s){
j(s.payload);}).

setAllowCrossPageTransition(true).
send();

delete this._dirtyPhotosByUid[i];};
h.prototype.

getTagsFromList=function(i){'use strict';
var j=[];

for(var k in i)
if(Object.prototype.hasOwnProperty.call(i,k))
for(var l in i[k])
if(Object.prototype.hasOwnProperty.call(i[k],l))
i[k][l].forEach(function(m){return j.push(m);});





return j;};
h.prototype.

getAllTags=function(){'use strict';
var i=this.getTagsFromList(this._tagList),
j=this.getTagsFromList(this._textTagList);

return i.concat(j);};
h.prototype.

removeTag=function(i,j){'use strict';
var k=this._tagList[i],
l=this._originalTagList[i]||{};

if(l[j]){

this._dirtyPhotosByUid[j]=this._dirtyPhotosByUid[j]||{};
this._dirtyPhotosByUid[j][i]=true;}else 


delete this._dirtyPhotosByUid[j][i];


for(var m in k)
if(m==j){
var n=this._tagList[i][m];
delete this._tagList[i][m];


if(c('isEmpty')(this._tagList[i]))
delete this._tagList[i];

return n;}};


h.prototype.

removeTextTag=function(i,j){'use strict';
var k=this._textTagList[i];

if(!c('isEmpty')(k[j])){
var l=this._textTagList[i][j];
this._textTagList[i][j]=[];


if(c('isEmpty')(this._textTagList[i]))
delete this._textTagList[i];


return l;}


return [];};
h.prototype.

removeAllNewTagsOfUser=function(i){'use strict';
var j=[];
if(!this.userHasDirtyTags(i))
return j;


var k=this._dirtyPhotosByUid[i];
for(var l in k)
j=j.concat(this.removeTag(l,i));


return j;};
h.prototype.

removeAllTagsFromPhoto=function(i){'use strict';
var j=[];
if(!c('isEmpty')(this._tagList[i]))
for(var k in this._tagList[i]){
if(!Object.prototype.hasOwnProperty.call(this._tagList[i],k))
continue;


j=j.concat(this.removeTag(i,k));}



if(!c('isEmpty')(this._textTagList[i]))
for(var l in this._textTagList[i]){
if(!Object.prototype.hasOwnProperty.call(this._textTagList[i],l))
continue;


j=j.concat(this.removeTextTag(i,l));}



return j;};
h.prototype.

storeTag=function(i,j,k,l,m){'use strict';
this.storeTagWithOptions
(i,
j,
k,
l,
{can_remove:m});};

h.prototype.

storeTagWithOptions=function(i,j,k,l,m){'use strict';
this._dirtyPhotosByUid[j]=this._dirtyPhotosByUid[j]||{};
this._dirtyPhotosByUid[j][i]=true;


var n=
{x:k,
y:l};


Object.assign(n,m);



if(!j){
this.addTag(this._textTagList,i,n.name,n);}else 

this.addTag(this._tagList,i,j,n);};

h.prototype.

loadTagInfo=function(i,j){'use strict';
this._tagList[i]={};
this._originalTagList[i]={};

for(var k=0;k<j.length;k++){
var l=j[k];
this.addTag(this._tagList,i,l.subject,l);
this.addTag(this._originalTagList,i,l.subject,l);}};

h.

getInstance=function(){'use strict';
if(h.instance===null)
new h();

return h.instance;};







h.instance=null;

f.exports=h;}),null);

/** js/photos/modules/PhotosTaggingWaterfall.js */





__d("PhotosTaggingWaterfall",["AsyncSignal"],(function a(b,c,d,e,f,g){



function h(i){
h._queueName=
i||h._queueName;}


Object.assign(h,

{BEGIN:"begin",
TAG_FACE:"tag_face",
HOVER_TAG_FACE:"hover_tag_face",
SHOW_SUGGEST:"show_suggest",
ADD_NAME:"add_name",
TAG_CONFIRMED:"tag_confirmed",
FINISH:"finish",



TYPE_NAME:'type_name',

SELECT_NAME:'select_name',


_queueName:null,

sendSignal:function i(j,k){
new (c("AsyncSignal"))('/ajax/photos/tag_waterfall.php',

{data:JSON.stringify(j)}).
setHandler(k).
send();}});



f.exports=h;}),null);

/** js/photos/viewer/modules/PhotoTagger.js */






__d('PhotoTagger',['csx','ActorURI','Arbiter','AsyncRequest','AsyncResponse','CommerceSelfServeNUXType','CSS','DOM','DOMQuery','Event','FaceboxSourceConstants','Hovercard','Keys','LegacyMentionsInput.react','Parent','PhotosConst','PhotosTaggingWaterfall','PhotosUtils','PhotoTagStore','PhotoTagDataSourceType','QE2Logger','React','ReactDOM','Style','UFIAddCommentController','UFICentralUpdates','UFIContainer.react','UFIComment.react','URI','Vector','WWWBase','XCommerceSelfServeMerchantNUXSeenController','getElementPosition','removeFromArray'],(function a(b,c,d,e,f,g,h){








































function i(k,l){
return (k%l+l)%l;}










function j(k){'use strict';
this.TAG_BOX_SIZE=100;

this.EPSILON=.0025;


this.HUGE_FACE_THRESH=90;
this.HUGE_FACE_SHRINK_FACTOR=.6;


this.elemNames=

{6:
{addTagLink:'div.fbPhotosPhotoOwnerButtons',
overlayActions:'div.snowliftOverlayBar'}};



this.viewer=k;
this.version=k.getVersionConst();



this.datasources={};


this.photoData={};
this.tagRects={};
this.spatialTags=[];


this.isSpherical=false;
this.sphericalPhotoXY=null;
this.fromSphericalFacebox=false;


this.ajaxURIs=
{tagsInit:'/ajax/photos/photo/tags/tags_init.php',
tagsAlbum:'/ajax/photos/photo/tags/tags_album.php',
fetchDatasource:'/ajax/photos/photo/tags/fetch_datasource.php',
tagAction:'/ajax/photo_tagging_ajax.php',
tagWithAction:'/ajax/with_tagging_ajax.php'};



this.recognizedUsers=[];
this.addedSuggestions=[];
this.featuredSuggestions=[];
this.albumSuggestions=[];
this.friendSuggestions=[];
this.suggestionAlbum=-1;
this.addCommentController=null;

j.instances[this.version]=this;}
j.prototype.

initSnowlift=function(k,l,m,n){'use strict';
this._init(k,l,m,this.viewer.container,n);
c('Arbiter').inform('PhotoSnowlift.TAGGER_READY');};
j.prototype.

initPermalink=function(k,l,m){'use strict';
this._init(k,l,m,this.viewer.actionList);};
j.prototype.

initSphericalPhoto=function(k,l,m){'use strict';
this._init(k,l,m,this.viewer.container);};
j.prototype.

_init=function(k,l,m,n,o){'use strict';
this.root=this.viewer.getRoot();
this.tagger=k;
this.tokenizer=l;
this.ufi=o;
this._qn=null;
this.typeahead=l.getTypeahead();
this.userId=m;
this.makeProfilePicMenuContainer=n;
this.faceboxes=[];
this.tags=[];
this.currentFacebox=null;
this.currentTextbox=null;
this.revokedFaceboxes=[];
this.requestFaceboxNextTag=false;

this.clickState=c('DOM').find(this.root,'div.stageActions');
this.newTagBox=c('DOM').find(this.clickState,'div.newTagBox');
this.addTagLink=null;
this.overlayActions=null;
if(this.elemNames[this.version]){
this.addTagLink=c('DOM').find
(this.root,
this.elemNames[this.version].addTagLink);

this.overlayActions=c('DOM').find
(this.root,
this.elemNames[this.version].overlayActions);}



this.setupHandlers();
this.hideNewTagTimer=null;

this.needAlbumSuggestionsFetch=true;
this.fetchTaggingSuggestions({owner:this.photoData.owner});
this.setDataSource(this.typeahead.getData());

this.updateFaceboxes();
this.tagAccumulating=false;

return this;};
j.prototype.

setTagAccumulator=function(k){'use strict';
this.tagAccumulating=k;};
j.prototype.

fetchTaggingSuggestions=function(k){'use strict';
var l=new (c('URI'))(c('WWWBase').uri).setPath(this.ajaxURIs.tagsInit);


new (c('AsyncRequest'))().
setAllowCrossPageTransition(true).
setAllowCrossOrigin(true).
setURI(l).
setData(k).
setOption('retries',1).
setHandler(function(n){
var o=n.getPayload();
this.featuredSuggestions=o.featuredTaggees;
this.friendSuggestions=o.friendTaggees;
this.updateTypeaheadSuggestions();}.
bind(this)).
send();


var m=this.typeahead.subscribe
('bootstrap',function(n,o){
if(o&&!o.bootstrapping){
if(this.taggingMode)
this.updateWithSuggestions();

this.typeahead.unsubscribe(m);
this.typeahead.subscribe('focus',function(){
if(this.taggingMode)
this.updateWithSuggestions();}.

bind(this));
this.typeahead.subscribe('click',function(){
if(!this.taggingMode)
this.updateWithSuggestions();}.

bind(this));
this.tokenizer.subscribe
('removeToken',
this.updateWithSuggestions.bind(this));

this.tokenizer.subscribe('addToken',this.addSuggestion.bind(this));
this.typeahead.subscribe('respond',function(p,q){
if(this.taggingMode&&q&&!q.results.length)
this.updateWithSuggestions();}.

bind(this));}}.

bind(this));};
j.prototype.

fetchAlbumTaggingSuggestions=function(){'use strict';

new (c('AsyncRequest'))().
setURI(this.ajaxURIs.tagsAlbum).
setData({cachedAlbum:this.suggestionAlbum,photo:this.photoData.fbid}).
setOption('retries',1).
setAllowCrossPageTransition(true).
setHandler(function(k){
this.needAlbumSuggestionsFetch=false;
var l=k.getPayload();
if(l.length===0)return;
this.suggestionAlbum=l.album;
this.albumSuggestions=l.taggees;
this.updateTypeaheadSuggestions();}.
bind(this)).
send();};
j.prototype.



resetAlbumTaggingSuggestions=function(){'use strict';
this.needAlbumSuggestionsFetch=true;
this.updateTypeaheadSuggestions();};
j.prototype.

updateTypeaheadSuggestions=function(){'use strict';
this.typeahead.getView().setSuggestions
(this.addedSuggestions.concat
(this.recognizedUsers,
this.featuredSuggestions,
this.needAlbumSuggestionsFetch?[]:this.albumSuggestions,
this.friendSuggestions));};


j.prototype.

saveClickPosition=function(k,l){'use strict';
var m=c('Vector').getElementPosition(k),
n=c('Vector').getElementDimensions(k);
this.clickPercentToPhoto=new (c('Vector'))
((l.x-m.x)/n.x,
(l.y-m.y)/n.y);};

j.prototype.

getCalculatedClickPosition=function(k){'use strict';
var l=c('Vector').getElementPosition(k),
m=c('Vector').getElementDimensions(k);


if(m.x===0||m.y===0)
return null;




return new (c('Vector'))
(this.clickPercentToPhoto.x*m.x+l.x,
this.clickPercentToPhoto.y*m.y+l.y,
'document');};

j.prototype.

repositionTagger=function(){'use strict';
if(this.clickPercentToPhoto){
var k=this.viewer.getImage(),
l=this.getCalculatedClickPosition(k);
if(!l)
return;

this.addTagFromClickPos(l);}};

j.prototype.

setupHandlers=function(){'use strict';
this.handlers=
[c('Event').listen(this.clickState,'click',function(k){
if(!this.isSpherical)
this.addTag(k);}.

bind(this))];

if(this.addTagLink)
this.handlers.push
(c('Event').listen
(this.addTagLink,
'click',
this.checkActions.bind(this)));



if(this.overlayActions)
this.handlers.push
(c('Event').listen
(this.overlayActions,
'click',
this.checkActions.bind(this)));




this.setupAddTagHandlers();

c('Event').listen(document.documentElement,'keydown',function(event){
if(!this.taggingMode)
return;


var k=c('Event').getKeyCode(event);
if(k===c('Keys').ESC){
this.deactivateTagging();}else
if(k===c('Keys').TAB)
this.addNextTagFromFacebox(event.shiftKey?-1:1);}.

bind(this));

this.subscriptions=
[c('Arbiter').subscribe
(this.viewer.getEventString('PAGE'),this.restartTagging.bind(this)),

c('Arbiter').subscribe
(this.viewer.getEventString('DATA_CHANGE'),this.setPhotoData.bind(this)),

c('Arbiter').subscribe
(this.viewer.getEventString('EXTRA_DATA_CHANGE'),
this.setExtraData.bind(this)),

c('Arbiter').subscribe
(this.viewer.getEventString('CLOSE'),this.deactivateTagging.bind(this))];








c('UFICentralUpdates').subscribe('update-comments',function(k,l){
if(l.comments&&l.comments.length)
this.commentAdded(l.comments,l.payloadsource);}.

bind(this));

this.tokenizer.subscribe('addToken',this.saveTag.bind(this));
this.tokenizer.subscribe('removeToken',this.removeTag.bind(this));
this.tokenizer.subscribe('markTagAsSpam',this.markTagAsSpam.bind(this));};
j.prototype.

setupAddTagHandlers=function(){'use strict';
if(this.ufi){
var k=c('DOM').scry(this.root,'.tagPhotoLink');
k.forEach(function(l){
c('Event').listen
(l,
'click',
this.showTaggerFromClick.bind(this));},

this);}};

j.prototype.

updateWithSuggestions=function(k,l){'use strict';
var m=this.typeahead.getData().buildUids
(' ',
this.typeahead.getView().getSuggestions(),
this.typeahead.getCore().getExclusions());

if(!m.length)
return;

var n=this.typeahead.getData().respond('',m);

for(var o=0;o<n.length;o++)
n[o].index=-1000+o;};

j.prototype.

addSuggestion=function(k,l){'use strict';
var m=l.info&&l.info.uid;
if(m){
this.addedSuggestions.unshift(m);
this.updateTypeaheadSuggestions();}};

j.prototype.




setQueueName=function(k){'use strict';
this._qn=k;
return this;};
j.prototype.

_sendWaterfallLogSignal=function(k){'use strict';
c('PhotosTaggingWaterfall').sendSignal
({qn:this._qn,
source:this.viewer.getSourceString(),
step:k,
pid:this.photoData.pid});};

j.prototype.

_sendFaceboxSuggestionLogSignal=function(k,l,m){'use strict';
c('PhotosTaggingWaterfall').sendSignal
({step:c('PhotosTaggingWaterfall').SHOW_SUGGEST,
photo_owner:this.photoData.owner,
tagee:k,
is_first:true,
source:l,
photo_id:this.photoData.fbid,
facebox_id:m});};

j.prototype.

_bumpQueueName=function(){'use strict';
if(this._qn)
this._qn+=1;};

j.prototype.

activateTagging=function(){'use strict';
c('Arbiter').inform('PhotoTagger.ACTIVATE_TAGGING');
if(this.getDataSource()){
this.dataSourceFetched(this.getDataSource());}else 

new (c('AsyncRequest'))(this.ajaxURIs.fetchDatasource).
setData
({fbid:this.photoData.fbid,
version:this.version,
data_source_type:this.dataSourceType}).

send();




if(this.needAlbumSuggestionsFetch)
this.fetchAlbumTaggingSuggestions();};

j.prototype.

restartTagging=function(){'use strict';
this.hideNewTag();
this.hideTagger();
this.hideExistingTags();
this.revokedFaceboxes=[];
this.setCurrentFacebox(null);
if(this.taggingMode){
this.requestFaceboxNextTag=true;
this.activateTagging();}};

j.prototype.

getDataSource=function(){'use strict';
return this.datasources[this.getDataSourceKey()];};
j.prototype.


getDataSourceKey=function(){'use strict';
var k;
if(this.photoData.ownertype=='user'&&!this.photoData.obj_id){
k='friends';}else 


k=this.photoData.obj_id||this.photoData.owner;


if(this.dataSourceType===c('PhotoTagDataSourceType').PRODUCT_ITEMS)
return k+'_products';

return k;};
j.prototype.

setDataSource=function(k){'use strict';
if(this.typeahead.getData()!=k)
this.typeahead.swapData(k);

this.datasources[this.getDataSourceKey()]=k;};
j.prototype.

dataSourceFetched=function(k){'use strict';


c('CSS').removeClass(this.root,'productTagging');
c('CSS').removeClass(this.root,'peopleTagging');

var l=
this.dataSourceType===c('PhotoTagDataSourceType').DEFAULT;

this.taggingMode=true;
c('CSS').addClass(this.root,'taggingMode');
c('CSS').addClass
(this.root,
l?'peopleTagging':'productTagging');


this._hidePivots();


c('Arbiter').inform('PhotoSnowlift.START_TAGGING');



this._bumpQueueName();
this._sendWaterfallLogSignal(c('PhotosTaggingWaterfall').BEGIN);

this.setDataSource(k);};
j.prototype.

deactivateTagging=function(){'use strict';
if(this.taggingMode===true)
this._sendWaterfallLogSignal(c('PhotosTaggingWaterfall').FINISH);

this.taggingMode=false;
this.hideNewTag();
this.hideTagger();
this.hideExistingTags();
this.setCurrentFacebox(null);
this._showPivots();
c('CSS').removeClass(this.root,'taggingMode');
this.dataSourceType===c('PhotoTagDataSourceType').PRODUCT_ITEMS?
c('CSS').removeClass(this.root,'productTagging'):
c('CSS').removeClass(this.root,'peopleTagging');
c('Arbiter').inform('PhotoSnowlift.STOP_TAGGING');};
j.prototype.

_hidePivots=function(){'use strict';
var k=c('DOMQuery').scry(this.root,'.tag');
for(var l=0;l<k.length;l++)
c('CSS').hide(k[l]);};

j.prototype.

_showPivots=function(){'use strict';
var k=c('DOMQuery').scry(this.root,'.tag');
for(var l=0;l<k.length;l++)
c('CSS').show(k[l]);};

j.prototype.

checkActions=function(event){'use strict';
var k=event.getTarget(),
l=c('Parent').byClass(k,'fbPhotosPhotoActionsTag'),
m=
c('Parent').byClass(k,'fbPhotosPhotoActionsProductTag');

if(l||m){
var n=c('CSS').hasClass(this.root,'peopleTagging'),
o=c('CSS').hasClass(this.root,'productTagging'),
p=l&&o||
m&&n;

if(this.taggingMode&&!p){
this.deactivateTagging();}else{



this.dataSourceType=m?
c('PhotoTagDataSourceType').PRODUCT_ITEMS:
c('PhotoTagDataSourceType').DEFAULT;
this.activateTagging();
if(!this.isSpherical)
this.addNextTagFromFacebox(1);}}};



j.prototype.

hideTagger=function(){'use strict';
c('CSS').hide(this.tagger);
this.clickPercentToPhoto=null;
var k=c('DOM').scry(this.tagger,'input.textInput')[0];
if(k)
k.blur();};

j.prototype.

showTaggerFromClick=function(){'use strict';
var k=event.getTarget(),
l=c('Parent').byClass(k,'tagPhotoLink'),
m=l.getAttribute('data-x'),
n=l.getAttribute('data-y');
if(m!==null&&n!==null){
var o=new (c('Vector'))(m,n),
p=this.viewer.getImage();
o=c('PhotosUtils').normalizedToAbsolutePosition(p,o);
this.setClickPosAndFacebox(o);
this.addTagFromClickPos(o);}

this.showTagger();};
j.prototype.

showTagger=function(){'use strict';
c('QE2Logger').logExposureForUser('www_snowlift_photo_tagger_qe');
c('DOM').scry(this.root,'.fbPhotosPhotoTagboxBase').forEach(function(p){
c('CSS').removeClass(p,'hover');
c('CSS').removeClass(p,'tagClick');
if(this.taggingMode)
c('CSS').hide(c('DOM').find(p,'.tag'));},

this);


var k=c('DOM').find(this.tagger,'.typeaheadContainer'),
l=c('DOM').find(k,'.arrow .nub'),
m=3;

c('Style').set(k,'margin-left',0);
c('Style').set(l,'margin-left',0);

var n=c('getElementPosition')(k);



if(n.x<=0)


if(!c('CSS').hasClass(this.tagger,'fbPhotoTaggerFlipped')){
c('Style').set(k,'margin-left',-2*n.x+'px');
c('Style').set(l,'margin-left',n.x-m+'px');}




if(this.ufi){
var o=c('DOM').find(this.tagger,"._12nb");
c('CSS').show(k);
c('CSS').hide(o);}

c('CSS').show(this.tagger);



setTimeout(function(){
c('DOM').find(this.tagger,'input.textInput').focus();}.
bind(this),0);
this.hideNewTag();
c('Arbiter').inform('reflow');};
j.prototype.

showNewTag=function(k,l){'use strict';

if(l&&this.ufi){
c('CSS').addClass(l,'hover');
c('DOM').find(l,'.uiLinkButtonInput').value=k;
return;}

if(!this.newTagBox)
return;

c('DOM').setContent(c('DOM').find(this.newTagBox,'div.tagName'),
c('DOM').create('span',null,k));
c('CSS').show(this.newTagBox);
this.hideNewTagTimer=setTimeout(this.hideNewTag.bind(this),3000);};
j.prototype.

hideNewTag=function(){'use strict';
if(!this.newTagBox)
return;

if(this.hideNewTagTimer!==null){
clearTimeout(this.hideNewTagTimer);
this.hideNewTagTimer=null;}

c('CSS').hide(this.newTagBox);};
j.prototype.

getTaggerPositioningOrigin=function(){'use strict';
return c('Vector').getElementPosition(this.clickState,'document');};
j.prototype.

setClickPosAndFacebox=function(k){'use strict';
var l=this.viewer.getImage();
this.saveClickPosition(l,k);



var m=c('PhotosUtils').absoluteToNormalizedPosition(l,k);
this.setCurrentFacebox(this.findNearestFacebox(m));};
j.prototype.

addTagFromClickPos=function(k){'use strict';
this.currentTextbox=null;
this.hideExistingTags();
if(this.currentFacebox){
this.addTagFromFaceboxDontSave(this.currentFacebox);}else{

var l=this.viewer.getImage(),
m=c('PhotosUtils').absoluteToNormalizedPosition(l,k);
if(this.tags!==undefined)
for(var n=0;n<this.tags.length;n++)
if(this.tags[n].rect.contains(m)){
this.showExistingTag(this.tags[n]);
this.currentTextbox=this.tags[n];}



this.removeSuggestionFromTagger();
c('CSS').removeClass(c('DOM').find(this.tagger,'.faceBox'),'faceBoxHidden');
if(this.currentTextbox){
var o=
this.currentTextbox.rect.w()/100*
c('Vector').getElementDimensions(l).x;
this.addTagFromPosition(k,o);}else 

this.addTagFromPosition(k,this.TAG_BOX_SIZE);}};


j.prototype.

showExistingTag=function(k){'use strict';
if(this.taggingMode){
this._hidePivots();
c('CSS').show(c('DOM').find(k.node,'.tag'));
c('CSS').addClass(k.node,'tagClick');}else 

c('CSS').addClass(k.node,'hover');

this.hideTagger();};
j.prototype.

hideExistingTags=function(){'use strict';
var k=c('DOM').scry(this.root,'.tagClick');
k&&k.forEach(function(l){
c('CSS').removeClass(l,'tagClick');
if(this.taggingMode)
c('CSS').hide(c('DOM').find(l,'.tag'));}.

bind(this));};
j.prototype.

addTag=function(event){'use strict';
var k=event.getTarget(),
l=c('Parent').byClass(k,'fbPhotosPhotoButtons');
if(!this.taggingMode||
l&&k!==l||
c('Parent').byClass(k,'fbPhotosPhotoActions')||
c('Parent').byClass(k,'faceboxSuggestion')||
c('Parent').byClass(k,'photoTagTypeahead')||
c('Parent').byClass(k,'tagUfi'))
return;


var m=c('Vector').getEventPosition(event);
this.setClickPosAndFacebox(m);
this.addTagFromClickPos(m);};
j.prototype.

addSpatialTag=function(k){'use strict';
var l=event.getTarget(),
m=c('Parent').byClass(l,'fbPhotosPhotoButtons');


if(m&&l!==m||
c('Parent').byClass(l,'fbPhotosPhotoActions')||
c('Parent').byClass(l,'faceboxSuggestion')||
c('Parent').byClass(l,'photoTagTypeahead')||
c('Parent').byClass(l,'tagUfi')||
!k.screenPos||
!k.photoXY||
!k.size||
!this.isSpherical||
!this.viewer.stage)

return;


this.sphericalPhotoXY=k.photoXY;
this.fromSphericalFacebox=k.fromTag;

var n=this.viewer.stage.getBoundingClientRect();



this.addTagFromPosition(c('Vector').from
(k.screenPos.x+n.left,
k.screenPos.y+n.top,
'document'),
k.size);




var o=c('DOM').find(this.tagger,'.faceBox');
if(this.fromSphericalFacebox&&!c('CSS').hasClass(o,'faceBoxHidden'))
c('CSS').addClass(o,'faceBoxHidden');

if(!this.fromSphericalFacebox&&c('CSS').hasClass(o,'faceBoxHidden'))
c('CSS').removeClass(o,'faceBoxHidden');};

j.prototype.

showTagIfCommentAdded=function(){'use strict';
if(this.taggingMode){
var k=this.getClickPointForSave(),
l=c('Vector').from
(k.x,
k.y);

if(k!==null)
for(var m=0;m<this.tags.length;m++)
if(this.tags[m].rect.contains(l)){
this.showExistingTag(this.tags[m]);
this.hideTagger();
return;}}};




j.prototype.

commentAdded=function(k,l){'use strict';
k.forEach(function(m){
var n=this.getClickPointForSave(),





o=null;

if(m.isPhotoTag&&

(m.photoTextTagID===null||
m.photoTextTagID===undefined)&&

m.photoTagX!==null&&
m.photoTagY!==null)


if(n!==null&&
m.photoTagX===n.x&&
m.photoTagY===n.y){

o=c('DOM').find(this.tagger,"._12nb");}else{

var p=new (c('Vector'))(m.photoTagX,m.photoTagY),
q=this.findNearestTag(p);
if(q!==null)
o=c('DOM').find(q.node,"._12nb");}



if(o!==null){
var r=c('DOM').find(o,'.UFIContainer'),
s={};
s[m.author]={id:m.author};
c('ReactDOM').render
(c('React').createElement(c('UFIContainer.react'),null,
c('React').createElement(c('UFIComment.react'),
{comment:m,
authorProfiles:s,
feedback:{},
contextArgs:{}})),


r);

c('Style').set(c('DOM').find(o,'.UFIAddComment'),'opacity',.5);
c('DOM').find(o,'textarea').setAttribute('disabled','disabled');}},

this);};
j.prototype.

showTaggerUFI=function(event){'use strict';
var k=c('DOM').find(this.tagger,'.typeaheadContainer'),
l=c('DOM').find(this.tagger,"._12nb"),
m=c('DOM').find(l,'.arrow .nub'),
n=3,
o=c('getElementPosition')(l);





if(o.x<=0&&!c('CSS').hasClass(this.tagger,'fbPhotoTaggerFlipped')){
c('Style').set(l,'margin-left',-2*o.x+'px');
c('Style').set(m,'margin-left',o.x-n+'px');}else{

c('Style').set(l,'margin-left',0);
c('Style').set(m,'margin-left',0);}


var p=this.getClickPointForSave(),
q=c('DOM').find(l,'.tagUfiAddComment'),



r=c('DOM').find
(this.viewer.ufiInputContainer,
'input[name="ft_ent_identifier"]'),

s=
{ftentidentifier:r.value,
source:q.getAttribute('data-source'),
mentionsinput:
{inputComponent:c('LegacyMentionsInput.react')},

hideActorPhoto:true,
isPhotoTag:true,
photoFBID:this.viewer.getCurrentPhotoInfo().fbid,
photoTagX:p.x,
photoTagY:p.y};

this.addCommentController=c('UFIAddCommentController').factory
(q,
s);

var t=c('DOM').find(l,'.UFIContainer');
if(t.firstChild!==null)
c('DOM').remove(t.firstChild);

c('Style').set(c('DOM').find(l,'.UFIAddComment'),'opacity',1);
c('DOM').find(l,'textarea').removeAttribute('disabled');
c('CSS').show(this.tagger);

c('CSS').hide(k);
c('CSS').show(l);
c('Arbiter').inform('reflow');};
j.prototype.

_findNearest=function(k,l){'use strict';
var m=Infinity,
n=null;
k.forEach(function(o){
if(o.rect.contains(l)){
var p=l.distanceTo(o.rect.getCenter());
if(p<m){
m=p;
n=o;}}});




return n;};
j.prototype.

findNearestFacebox=function(k){'use strict';
return this._findNearest(this.faceboxes,k);};
j.prototype.

findNearestTag=function(k){'use strict';
return this._findNearest(this.tags,k);};
j.prototype.

addNextTagFromFacebox=function(k){'use strict';
if(this.faceboxes.length===0)

return;


if(!this.currentFacebox){

this.setCurrentFacebox(this.faceboxes[0]);}else{


var l=this.faceboxes.indexOf(this.currentFacebox),
m=i(l+k,this.faceboxes.length);
if(m===l)
return;


this.setCurrentFacebox(this.faceboxes[m]);}


this.addTagFromFacebox(this.currentFacebox);};
j.prototype.

addTagFromFaceboxDontSave=function(k){'use strict';

c('CSS').addClass(k.node,'active');
c('CSS').addClass(c('DOM').find(this.tagger,'.faceBox'),'faceBoxHidden');

var l=k.rect.getCenter(),
m=this.viewer.getImage(),
n=c('PhotosUtils').normalizedToAbsolutePosition(m,l),
o=k.rect.w()/100*c('Vector').getElementDimensions(m).x;



if(k.rect.w()>this.HUGE_FACE_THRESH&&
k.rect.h()>this.HUGE_FACE_THRESH)
o*=this.HUGE_FACE_SHRINK_FACTOR;




var p=this.getFaceboxSuggestionFromFaceboxElem(k.node);
if(p){
var q=this.version===c('PhotosConst').VIEWER_PERMALINK?
c('FaceboxSourceConstants').PERMALINK_DISMISS:
c('FaceboxSourceConstants').SNOWLIFT_DISMISS;
this.addSuggestionToTagger(k,p);
this._sendFaceboxSuggestionLogSignal
(p.getAttribute('data-id'),
q,
k.id);}else 


this.removeSuggestionFromTagger();



this.addTagFromPosition(n,o);
return n;};
j.prototype.

getFaceboxSuggestionFromFaceboxElem=function(k){'use strict';
return c('DOM').scry(k,"._570u")[0];};
j.prototype.

addSuggestionToTagger=function(k,l){'use strict';
this.removeSuggestionFromTagger();

c('CSS').addClass(this.tagger,'suggestionActive');
var m=c('DOM').find(this.tagger,'.typeaheadContainer'),
n=l.cloneNode(true);


this.stripReactID(n);
c('DOM').appendContent(m,n);


this.setupFaceboxSuggestionHandlers(k,n);};
j.prototype.

stripReactID=function(k){'use strict';
k.removeAttribute('data-reactid');
for(var l=0;l<k.children.length;l++)
this.stripReactID(k.children[l]);};

j.prototype.

removeSuggestionFromTagger=function(){'use strict';
c('CSS').removeClass(this.tagger,'suggestionActive');
var k=c('DOM').scry(this.tagger,'.faceboxSuggestion');
k&&k.forEach(function(l){
c('DOM').remove(l);});};

j.prototype.

dismissFaceboxSuggestion=function(k,l,m,n){'use strict';
new (c('AsyncRequest'))().
setURI('/ajax/dismiss_tag_suggest.php').
setMethod('POST').
setData
({facebox_logs:
[{facebox:k,
log_data:
{photo_owner:m,
tagee:l,
is_first:true}}],


closing_source:n,
closing_action:'no'}).

setAllowCrossPageTransition(true).
send();};
j.prototype.

addTagFromFacebox=function(k){'use strict';
this.currentTextbox=null;
var l=this.addTagFromFaceboxDontSave(k),
m=this.viewer.getImage();
this.saveClickPosition(m,l);};
j.prototype.

addTagFromPosition=function(k,l){'use strict';
var m=this.viewer.getImage(),
n=this.calcTaggerPosition(m,k,l);
this.calcClickPoint(m,k);

if(!n){
this.hideTagger();
return;}

n.setElementPosition(this.tagger);
if(this.newTagBox){
n.setElementPosition(this.newTagBox);
new (c('Vector'))(l,l).setElementDimensions(this.newTagBox);}


var o=c('Vector').getElementPosition(m),
p=c('Vector').getElementDimensions(m),
q=this.typeahead.getView();
if(k.y>o.y+p.y*3/4){


c('CSS').addClass(this.tagger,'fbPhotoTaggerFlipped');
q.addTypeaheadFlip('fbPhotoTaggerFlipped');



if(k.x>o.x+p.x*1/2){
this.flipRules
('fbPhotoTaggerRight',
'fbPhotoTaggerLeft',
q);}else 


this.flipRules
('fbPhotoTaggerLeft',
'fbPhotoTaggerRight',
q);}else{



c('CSS').removeClass(this.tagger,'fbPhotoTaggerFlipped');
c('CSS').removeClass(this.tagger,'fbPhotoTaggerLeft');
c('CSS').removeClass(this.tagger,'fbPhotoTaggerRight');
q.removeTypeaheadFlip('fbPhotoTaggerFlipped');
q.removeTypeaheadFlip('fbPhotoTaggerLeft');
q.removeTypeaheadFlip('fbPhotoTaggerRight');}


if(!this.taggingMode||this.currentTextbox===null)

if(this.ufi&&this.currentFacebox===null){
this.showTaggerUFI();}else 

this.showTagger();



if(this.taggingMode){
this._sendWaterfallLogSignal(c('PhotosTaggingWaterfall').TAG_FACE);}else 

this._sendWaterfallLogSignal(c('PhotosTaggingWaterfall').HOVER_TAG_FACE);};

j.prototype.

flipRules=function(k,l,m){'use strict';
c('CSS').addClass(this.tagger,k);
c('CSS').removeClass(this.tagger,l);
m.addTypeaheadFlip(k);
m.removeTypeaheadFlip(l);};
j.prototype.


































calcTaggerPosition=function(k,l,m,n){'use strict';
n=n||m;
var o=c('Vector').getElementPosition(k),
p=c('Vector').getElementDimensions(k),
q=new (c('Vector'))(m/2,n/2),
r=l.sub(o);



for(var s in {x:1,y:1}){

if(l[s]<o[s]||
l[s]>o[s]+p[s])
return null;




var t=s==='x'?m:n;
if(r[s]<t/2){
q[s]=r[s];}else
if(p[s]<r[s]+t/2)
q[s]=t-(p[s]-r[s]);}



var u=3,
v=c('DOM').find(this.tagger,'.faceBox');

c('Style').set(v,'width',m-u*2+'px');
c('Style').set(v,'height',n-u*2+'px');

var w=l.sub(this.getTaggerPositioningOrigin());
return w.sub(q.x,q.y);};
j.prototype.




calcClickPoint=function(k,l){'use strict';
var m=c('Vector').getElementDimensions(k),
n=c('Vector').getElementPosition(k),
o=l.sub(n);

if(!this.isSpherical){
this.clickPoint=
{x:o.x/m.x,
y:o.y/m.y};}else 


this.clickPoint=
{x:this.sphericalPhotoXY.x,
y:this.sphericalPhotoXY.y};};


j.prototype.

getClickPointForSave=function(){'use strict';
if(this.clickPoint===undefined)
return null;


return {x:this.clickPoint.x*100,
y:this.clickPoint.y*100};};

j.prototype.

getTaggingDataForSave=function(k,l){'use strict';
var m=this.getTaggingData
('add',
k.isFreeform()?'':k.getValue(),
k.getText(),
l),


n=this.getClickPointForSave();
m.x=n.x;
m.y=n.y;
m.from_facebox=this.isSpherical?
this.fromSphericalFacebox:
!!this.currentFacebox;
m.tagging_mode=!!this.taggingMode;

return m;};
j.prototype.

saveTag=function(k,l,m){'use strict';
var n=this.getTaggingDataForSave(l,m);

if(this.tagAccumulating){
c('PhotoTagStore').getInstance().storeTagWithOptions
(this.photoData.fbid,
n.subject,
n.x,
n.y,
n);}else{


var o=c('ActorURI').create
(this.ajaxURIs.tagAction,
this.photoData.owner);

new (c('AsyncRequest'))().
setURI(o).
setMethod('POST').
setData(n).
setAllowCrossPageTransition(true).
setHandler(this.tagsChangeHandler.bind(this)).
setErrorHandler
(this.checkError.bind(this,l)).

send();}


var p=this.userId===n.subject;


if(p){
var q=c('DOM').scry
(this.makeProfilePicMenuContainer,
'[data-picid="'+this.viewer.getCurrentPhotoInfo().fbid+'"]');




if(q.length===1){
var r=q[0];
c('CSS').removeClass(r,'hide');}}





var s=new (c('Vector'))(n.x,n.y),
t=this.findNearestTag(s);
if(t&&t.rect.contains(s)){
this.showNewTag(l.getText(),t.node);}else 

this.showNewTag(l.getText());

this.hideTagger();

if(!this.isSpherical){

var u=this.currentFacebox;
if(u){
if(this.taggingMode)
this.addNextTagFromFacebox(1);

this.removeFacebox(u);}}



c('Arbiter').inform
('PhotoTagger.ADDING_TAG',

{subject:n.subject,
text:l.getText()});



c('Arbiter').inform
('PhotoTagger.SAVE_TAG',

{photo_fbid:this.photoData.fbid,
self_tag:p});};


j.prototype.

getTaggingData=function(k,l,m,n){'use strict';

return {cs_ver:this.version,
pid:this.photoData.pid,
fbid:this.photoData.fbid,
id:this.photoData.owner,
subject:l,
name:m,
action:k,
source:n?n:this.viewer.getSourceString(),
qn:this._qn,
position:this.getPosition(),
slsource:this.viewer.getViewerSource(),
slset:this.viewer.getViewerSet()};};

j.prototype.

getPosition=function(){'use strict';
return this.viewer.getPosition();};
j.prototype.

tagsChangeHandler=function(k){'use strict';};
j.prototype.

checkError=function(k,l){'use strict';
if(l.getPayload()&&l.getPayload().clear_tag){
k.already_untagged=true;
this.tokenizer.removeToken(k);}

c('AsyncResponse').defaultErrorHandler(l);};
j.prototype.

removeTag=function(k,l,m){'use strict';
if(l.already_untagged)
return;


var n='remove';
if(c('DOM').scry(l.element,'a.pending')[0])
n='retract';

if(l.blockUser)
n='remove_block';


if(this.tagAccumulating){
if(l.isFreeform()){
c('PhotoTagStore').getInstance().
removeTextTag
(this.photoData.fbid,
l.getInfo().text);}else 


c('PhotoTagStore').getInstance().
removeTag
(this.photoData.fbid,
l.getInfo().uid);}else 



new (c('AsyncRequest'))().
setURI(this.ajaxURIs.tagAction).
setMethod('POST').
setData(this.getTaggingData
(n,
l.isFreeform()?'':l.getInfo().uid,
l.getInfo().text)).
setHandler(function(q){
this.tagsChangeHandler(q);
m&&m();}.
bind(this)).
setAllowCrossPageTransition(true).
send();




if(this.userId===parseInt(l.getValue(),10)&&
this.userId!==this.viewer.getCurrentPhotoInfo().owner){
var o=c('DOM').scry
(this.makeProfilePicMenuContainer,
'[data-picid="'+this.viewer.getCurrentPhotoInfo().fbid+'"]');


if(o.length===1){
var p=o[0];
c('CSS').addClass(p,'hide');}


c('Arbiter').inform('PhotoTagger.REMOVED_MAKE_PROFILE_PIC_OPTION');}};

j.prototype.

removeTagByID=function(k,l,m){'use strict';
var n=this.tokenizer.tokens;
for(var o=0;o<n.length;o++)
if(n[o].info.uid==l)
return this.removeTag(null,n[o],m);



return null;};
j.prototype.

removeTagByIDFromHovercardLink=function(k,l,m){'use strict';
this.removeTagByID(k,l,function(){
if(c('Hovercard').contains(m))
c('Hovercard').hide(true);});};


j.prototype.

removeWithTag=function(k,l){'use strict';
new (c('AsyncRequest'))().
setURI(this.ajaxURIs.tagWithAction).
setMethod('POST').
setData({action:'remove_with',
taggee:l,
tag:k,
version:this.version,
fbid:this.photoData.fbid}).
setHandler(function(m){
this.tagsChangeHandler(m);
c('Hovercard').hide(true);}.
bind(this)).
setAllowCrossPageTransition(true).
send();};
j.prototype.

setPhotoData=function(k,l){'use strict';
this.clickPercentToPhoto=null;
this.photoData=l;
this.isSpherical=l.isSpherical;
return this;};
j.prototype.

setExtraData=function(k,l){'use strict';
this.tagRects=l.tagRects;
if(l.spatialTags)
this.spatialTags=l.spatialTags;

this.updateFaceboxes();
this.setupAddTagHandlers();

this._setInitialFaceboxFromID(l);

if(l.openTag)
setTimeout
(function(){
this.activateTagging();
this._setInitialFaceboxFromID(l);

if(this.faceboxes.length===1){
this.addTagFromFacebox(this.currentFacebox);}else 

this.addNextTagFromFacebox(1);}.

bind(this),
0);



return this;};
j.prototype.

_setInitialFaceboxFromID=function(k){'use strict';
if(k.initialFaceboxID!==null&&this.faceboxes.length!==0){
var l=this.getFacebox(k.initialFaceboxID);
if(l!==null){
var m=this.faceboxes.indexOf(l);
m=i(m-1,this.faceboxes.length);
this.setCurrentFacebox(this.faceboxes[m]);}}};


j.prototype.

markTagAsSpam=function(k,l){'use strict';
new (c('AsyncRequest'))().
setURI(this.ajaxURIs.tagAction).
setMethod('POST').
setData(this.getTaggingData('mark_as_spam',l,null)).
send();};
j.prototype.

removeFacebox=function(k){'use strict';
if(k===null)
return;


this.revokedFaceboxes.push(k.rect.getCenter());
c('removeFromArray')(this.faceboxes,k);
c('DOM').remove(k.node);
if(k===this.currentFacebox)
this.setCurrentFacebox(null);};

j.prototype.

setCurrentFacebox=function(k){'use strict';
if(this.currentFacebox)
c('CSS').removeClass(this.currentFacebox.node,'active');

this.currentFacebox=k;
if(k){




this.recognizedUsers=JSON.parse
(k.node.getAttribute('data-recognizeduids'));

this.updateTypeaheadSuggestions();}};

j.prototype.

updateRevokedFaceboxes=function(){'use strict';


this.revokedFaceboxes=this.revokedFaceboxes.
filter(function(k){
for(var l=0;l<this.faceboxes.length;++l){
var m=this.faceboxes[l],
n=k.distanceTo(m.rect.getCenter());
if(n<this.EPSILON)
return true;}


return false;}.
bind(this));


this.revokedFaceboxes.forEach(function(k){
var l=this.findNearestFacebox(k);
c('removeFromArray')(this.faceboxes,l);
c('DOM').remove(l.node);}.
bind(this));};
j.prototype.

updateFaceboxes=function(){'use strict';
this.faceboxes=[];
this.tags=[];
for(var k in this.tagRects){
var l;
if(c('PhotosUtils').isFacebox(k)){
l=this.faceboxes;}else
if(c('PhotosUtils').isTag(k))
l=this.tags;


if(l){
var m='container';
if(this.version===c('PhotosConst').VIEWER_PERMALINK)
m='root';


var n=c('DOM').scry(this.viewer[m],'#'+k);
if(n.length>0)
l.push
({node:n[0],
id:k,
rect:this.tagRects[k]});}



this.showTagIfCommentAdded();}





this.updateRevokedFaceboxes();


this.faceboxes.sort(function(p,q){
return p.rect.getCenter().x-q.rect.getCenter().x;});



if(this.currentFacebox){
var o=this.currentFacebox.rect.getCenter();
this.setCurrentFacebox(this.findNearestFacebox(o));
c('CSS').addClass(this.currentFacebox.node,'active');}



if(this.requestFaceboxNextTag){
this.addNextTagFromFacebox(1);
this.requestFaceboxNextTag=false;}};

j.prototype.

getFacebox=function(k){'use strict';
for(var l=0;l<this.faceboxes.length;++l)
if(this.faceboxes[l].id===k)
return this.faceboxes[l];


return null;};
j.prototype.

setupFaceboxSuggestionHandlers=function(k,l){'use strict';
var m=c('DOM').find
(l,
"a._570w"),

n=c('DOM').find
(l,
"a._570x");

this.handlers.push
(c('Event').listen
(m,
'click',
function(o){
var p=this._getCurrentFaceboxID(),
q=this.version===c('PhotosConst').VIEWER_PERMALINK?
c('FaceboxSourceConstants').PERMALINK_DISMISS:
c('FaceboxSourceConstants').SNOWLIFT_DISMISS;
this.dismissFaceboxSuggestion(k.id.replace('face:',''),
l.getAttribute('data-id'),
this.photoData.owner,
q);
this.removeSuggestionFromTagger();
this.hideTagger();
c('DOM').remove(this.getFaceboxSuggestionFromFaceboxElem(k.node));
c('Arbiter').inform
('PhotoTagger.TAG_SUGGESTION_REJECTED/'+p);}.


bind(this)),

c('Event').listen
(n,
'click',
function(o){
var p=this._getCurrentFaceboxID(),
q=
{uid:l.getAttribute('data-id'),
text:l.getAttribute('data-text')},

r=this.tokenizer.createToken(q),
s=this.version===c('PhotosConst').VIEWER_PERMALINK?
c('FaceboxSourceConstants').PERMALINK_SUGGEST:
c('FaceboxSourceConstants').SNOWLIFT_SUGGEST;
this.saveTag(null,r,s);

c('Arbiter').inform
('PhotoTagger.TAG_SUGGESTION_CONFIRMED/'+p);}.

bind(this)));};


j.prototype.

_getCurrentFaceboxID=function(){'use strict';

return this.currentFacebox&&this.currentFacebox.id.substring(5);};
j.

getInstance=function(k){'use strict';
return j.instances[k];};
j.


resetAlbumTaggingSuggestions=function(k){'use strict';
var l=j.getInstance(k);
l&&l.resetAlbumTaggingSuggestions();};



Object.assign(j,
{instances:{}});


f.exports=j;}),null);

/** js/photos/bulk/PhotoBulkEditTagger.js */





__d('PhotoBulkEditTagger',['csx','Arbiter','AsyncRequest','CSS','DOM','DOMQuery','Event','FaceboxSourceConstants','Parent','PersistentAlbumDataStore','PhotosConst','PhotosTaggingWaterfall','PhotoTagger','PhotoTagStore','SubscriptionsHandler','Vector','$','ge'],(function a(b,c,d,e,f,g,h){var i,j,





















k=60;i=babelHelpers.inherits

(l,c('PhotoTagger'));j=i&&i.prototype;
function l(m,n,o,p){'use strict';
j.constructor.call(this,m);
this.editor=m;

this.faceboxes=[];


this._qn=p.qn;

this.tokenizer=o;
this.editor.registerTagger(this);
this.typeahead=o.getTypeahead();

this.handlers=new (c('SubscriptionsHandler'))();
this.root=this.editor.getRoot();
this.tagger=n;
this.hideNewTagTimer=null;
this.photoKey=null;
this._needTaggingData=true;
this._currentRecognition=
{box:null,
isTagged:false,
suggestion:null};

this._hoverState=false;
this._tagging=false;

this.setupHandlers();
this._sendWaterfallLogSignal(c('PhotosTaggingWaterfall').BEGIN);
this.fetchTaggingSuggestions();

this.setTagAccumulator(p.bulkSaveTags);
this.setNeedTaggingData(p.needTaggingData);
this.version=c('PhotosConst').BULK_EDITOR;

c('Event').listen(this.root,'mousemove',function(event){


var q=event.getTarget();
if(this._hoverState&&
!(c('Parent').byClass(q,'faceBox')||
c('Parent').byClass(q,'tagPointer')||
c('Parent').byClass(q,'arrow')||
c('Parent').byClass(q,'faceboxSuggestion'))){
this.removeSuggestionFromTagger();
this.hideTagger();}}.

bind(this));}
l.prototype.

setupUserActionLogging=function(){'use strict';

return null;};
l.prototype.

logUserActionEvent=function(m){'use strict';
return null;};
l.prototype.

addFaceboxes=function(m){'use strict';
this.faceboxes=c('DOMQuery').scry(m.parentNode,'.faceBox');
this.faceboxes.sort(function(q,r){
return q.offsetLeft===r.offsetLeft?q.offsetTop-r.offsetTop:
q.offsetLeft-r.offsetLeft;});


var n=c('Parent').byClass(m,'editablePhoto'),
o=
c('PhotoTagStore').getInstance().getPhotoTags
(n.getAttribute('data-photoid')),



p=[];
Object.keys(o).forEach(function(q){
if(o[q].fbid)
p[o[q].fbid]=true;});



this.faceboxes.forEach(function(q){


var r=this.getFaceboxSuggestionFromFaceboxElem(q),
s=q.getAttribute('data-faceboxid');
if(r&&o[r.getAttribute('data-id')]||
p[s]){
c('DOM').remove(q);
return;}


var t=
{image:m,
facebox:q};

c('Event').listen(q,'mouseenter',
this._mouseOverFacebox.bind(this,t));}.

bind(this));};
l.prototype.

saveTag=function(m,n,o){'use strict';

if(!n.info.recovered){
j.saveTag.call(this,m,n,o);



var p=this.getTaggingDataForSave(n,o);

c('PersistentAlbumDataStore').saveTag
(this.photoData.albumFBID,
this.photoData.fbid,
p);}



c('Arbiter').inform('PhotoBulkEditTagger.TAG_SAVED',
{editor:this.root,
fbid:this.photoData.fbid});};

l.prototype.

recoverPhoto=function(m){'use strict';

this.setupPhotoDataForTarget(m.getRoot());



var n=c('PersistentAlbumDataStore').getTags
(this.photoData.albumFBID,
this.photoData.fbid);


n.forEach(function(o){

var p=
this.tokenizer.createToken
({uid:o.subject?o.subject:o.name,
text:o.name,
suggestion:o.from_facebox,
freeform:o.subject==='',
recovered:true});


this.tokenizer.addToken(p);



c('PhotoTagStore').getInstance().storeTagWithOptions
(this.photoData.fbid,
o.subject,
o.x,
o.y,
o);}.

bind(this));};
l.prototype.

setNeedTaggingData=function(m){'use strict';
this._needTaggingData=m;
return this;};
l.prototype.

setTagAccumulator=function(m){'use strict';
j.setTagAccumulator.call(this,m);
return this;};
l.prototype.

needTaggingData=function(){'use strict';
return this._needTaggingData;};
l.prototype.

setupHandlers=function(){'use strict';
c('Event').listen(this.root,'click',this.clickHandler.bind(this));

this.tokenizer.subscribe
(['addToken','removeToken'],
this.handleTokenAction.bind(this));


this.tokenizer.subscribe('switchTarget',this.switchPhoto.bind(this));

this.tokenizer.subscribe
('initialized',
this.editor._recoverPhotos.bind(this.editor));


c('Arbiter').subscribe
('PhotoBulkEditTagger.DATA_SOURCE_READY',
this.useTaggingDataSource.bind(this));

c('Arbiter').subscribe
(this.editor.mapEventNameToNamespace
('PhotosBulkEditor.PHOTO_REORDER_START'),

this.hideTagger.bind(this));};

l.prototype.

hideTagger=function(){'use strict';
j.hideTagger.apply(this,arguments);
if(this._currentRecognition.box&&!this._currentRecognition.isTagged)
c('CSS').show(this._currentRecognition.box);

this._tagging=false;
this._hoverState=false;
this._currentRecognition.box=null;
this._currentRecognition.isTagged=false;
this._currentRecognition.suggestion=null;

this.recognizedUsers=[];};
l.prototype.

done=function(){'use strict';
this._sendWaterfallLogSignal(c('PhotosTaggingWaterfall').FINISH);};
l.prototype.






handleTokenAction=function(m,n){'use strict';
var o=c('$')(this.photoKey),
p=c('DOM').find(o,'.peopleIcon'),
q=c('DOM').find(o,'.editablePhotoTagList'),
r=c('DOM').find(p,'.count'),
s=this.tokenizer.getTokens().length,

t=n.info.suggestion?
c('FaceboxSourceConstants').UPLOADER_SUGGEST:
null;

if(this._currentRecognition.box)
this._currentRecognition.isTagged=!!s;



c('CSS').conditionClass(p,'hasPeople',!!s);
c('CSS').conditionClass(q,'hasPeople',!!s);
c('DOM').setContent(r,s);
if(m=='addToken'){
this.saveTag(m,n,t);
return;}else{

this.removeTag(m,n);
c('PersistentAlbumDataStore').removeTag
(this.photoData.albumFBID,
this.photoData.fbid,
n.info.uid);


c('Arbiter').inform('PhotoBulkEditTagger.TAG_REMOVED',
{editor:this.root,
fbid:this.photoData.fbid});}};


l.prototype.

useTaggingDataSource=function(m,n){'use strict';
if(!this._needTaggingData)
return;

var o=this.tokenizer.getTypeahead();
o.swapData(n);
this.setNeedTaggingData(false);};
l.prototype.

getTaggerPositioningOrigin=function(){'use strict';
return c('Vector').getElementPosition(this.root);};
l.prototype.

getRecognitionBoxCenter=function(m,n){'use strict';
var o=c('Vector').getElementPosition(m).
add(c('Vector').getElementDimensions(m).
mul(.5)),
p=c('Vector').getElementDimensions(this._currentRecognition.box),
q=
this.calcTaggerPosition(n,o,p.x,p.y);


return {boxPos:o,
boxDim:p,
taggerPos:q};};

l.prototype.

setUpTagger=function(m,n,o,p,q){'use strict';
this.calcClickPoint(m,o);
q.setElementPosition(this.tagger);
if(p)
p.setElementDimensions(this.tagger);


c('CSS').hide(c('DOM').find(n,'.clickToTagMessage'));
this._sendWaterfallLogSignal(c('PhotosTaggingWaterfall').TAG_FACE);
this.updateTypeaheadSuggestions();
this.updateWithSuggestions();
this.showTagger();
this._tagging=true;};
l.prototype.

clickHandler=function(event){'use strict';
var m=event.getTarget();


if(c('Parent').byClass(m,'photoTagTypeahead'))
return;




if(this._hoverState){
this._hoverState=false;
this._tagging=true;
return;}




if(this.tagger){
this.hideTagger();
this.removeSuggestionFromTagger();
this.handlers.release();}


if(c('Parent').byClass(m,'photoContextualSelector')||
c('Parent').byClass(m,'removePhotoButton'))
return;


var n=c('Parent').byClass(m,'editablePhotoImage');

if(!n){
var o=c('Parent').byClass(m,'peopleIcon');


if(o)
this.setupPhotoDataForTarget(o);




return;}




if(c('DOMQuery').scry(n,'.clickToTagMessage').length===0)
return;


this.setupPhotoDataForTarget(n);
var p=c('DOM').find(n,'.scaledImage img'),
q=null,r=null,s=null,

t=c('Parent').byClass(m,'faceBox');

if(!t)
t=c('Parent').byClass(m,'recognitionBox');


this._currentRecognition.box=t;

if(this._currentRecognition.box&&
c('CSS').shown(this._currentRecognition.box)){

var u=this.getRecognitionBoxCenter(t,p);
q=u.boxPos;
r=u.boxDim;
s=u.taggerPos;

c('CSS').hide(this._currentRecognition.box);
this._currentRecognition.isTagged=false;


var v=this.getFaceboxSuggestionFromFaceboxElem(t);
if(v){
this._currentRecognition.suggestion=v;
this.addSuggestionToTagger(t,v);
this._sendFaceboxSuggestionLogSignal(v.getAttribute('data-id'),
c('FaceboxSourceConstants').UPLOADER_SUGGEST);}else 


this.recognizedUsers=JSON.parse
(t.getAttribute('data-recognizeduids'));}




if(s===null){
q=c('Vector').getEventPosition(event);
s=this.calcTaggerPosition(p,q,k);}


if(!s)
return;


this.setUpTagger(p,n,q,r,s);};
l.prototype.

_mouseOverFacebox=function(m){'use strict';

if(this._tagging)
return;


var n=m.image,
o=m.facebox,
p=this.getFaceboxSuggestionFromFaceboxElem(o);

if(p){
this._hoverState=true;
this._currentRecognition.box=o;
this._currentRecognition.suggestion=p;

this.setupPhotoDataForTarget(n);
this.addSuggestionToTagger(o,p);
this._sendFaceboxSuggestionLogSignal(p.getAttribute('data-id'),
c('FaceboxSourceConstants').UPLOADER_SUGGEST);
this._sendWaterfallLogSignal(c('PhotosTaggingWaterfall').HOVER_TAG_FACE);


var q=c('Vector').getElementPosition(o).
add(c('Vector').getElementDimensions(o).
mul(.5)),
r=c('Vector').getElementDimensions(this._currentRecognition.box),
s=
this.calcTaggerPosition(n,q,r.x,r.y);

this.calcClickPoint(n,q);
s.setElementPosition(this.tagger);
r.setElementDimensions(this.tagger);

this.showTagger();}};

l.prototype.

fetchTaggingSuggestions=function(){'use strict';
this.logUserActionEvent('sugg_fetch');

new (c('AsyncRequest'))().
setURI(this.ajaxURIs.tagsInit).
setData({owner:this.photoData.owner}).
setOption('retries',1).
setHandler(function(m){
var n=m.getPayload();
this.featuredSuggestions=n.featuredTaggees;
this.friendSuggestions=n.friendTaggees;
this.logUserActionEvent('sugg_fetch_done');}.
bind(this)).
send();};
l.prototype.

switchPhoto=function(m,n){'use strict';
var o=c('ge')(n);
o&&this.setupPhotoDataForTarget(o);
this.hideTagger();};
l.prototype.

getImageByID=function(m){'use strict';
return c('ge')('editablePhoto_'+m);};
l.prototype.

setupPhotoDataForTarget=function(m){'use strict';
var n;
if(m&&!c('CSS').hasClass(m,'editablePhoto')){
n=c('Parent').byClass(m,'editablePhoto');}else 

n=m;




if(!n){
this.photoKey=null;
this.photoData=null;
return false;}


var o=n.id;

if(o===this.photoKey)
return;

this.photoKey=o;
this.photoData=this.editor.getPhotoData(o);

this.tokenizer.setTokenarea
(c('DOM').find(n,'div.editablePhotoTagList'));};

l.prototype.

getPosition=function(){'use strict';
return this.photoData.fbid;};
l.prototype.

tagsChangeHandler=function(m){
'use strict';};

l.prototype.

removeTagByID=function(m,n,o){'use strict';
this.hideTagger();
this.setupPhotoDataForTarget(this.getImageByID(m));
j.removeTagByID.call(this,m,n,o);};
l.prototype.

setupFaceboxSuggestionHandlers=function(m,n){'use strict';
var o=c('DOM').find
(n,
"._570w"),

p=c('DOM').find
(n,
"._570x");

this.handlers.engage();
this.handlers.addSubscriptions
(c('Event').listen(o,'click',function(q){
this.dismissFaceboxSuggestion(m.id.replace('face:',''),
n.getAttribute('data-id'),
this.photoData.owner,
c('FaceboxSourceConstants').UPLOADER_DISMISS);
this.removeSuggestionFromTagger();
this.hideTagger();

c('DOM').remove(this.getFaceboxSuggestionFromFaceboxElem(m));}.
bind(this)),

c('Event').listen(p,'click',function(q){
var r=this.tokenizer.createToken
({uid:n.getAttribute('data-id'),
text:n.getAttribute('data-text'),
suggestion:true});


this.removeSuggestionFromTagger();
c('CSS').hide(m);


this.tokenizer.addToken(r);}.
bind(this)));};





Object.assign(l.prototype,
{elemNames:{}});


f.exports=l;}),null);

/** js/photos/bulk/PhotoBulkEditTokenizer.js */





__d('PhotoBulkEditTokenizer',['DOM','Event','Input','Parent','Tokenizer','UserAgent_DEPRECATED','getObjectValues'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits










(j,c('Tokenizer'));i=h&&h.prototype;j.prototype.
init=function(k,l,m,n){'use strict';
this._tokenareaListeners={};
i.init.call(this,k,l,m,n);
this.inform('initialized');};
j.prototype.

initEvents=function(){'use strict';

var k=c('UserAgent_DEPRECATED').firefox()<4?'keypress':'keydown';
c('Event').listen(this.input,'paste',this.paste.bind(this));
c('Event').listen(this.input,k,this.keydown.bind(this));};
j.prototype.

setTokenarea=function(k){'use strict';
this.tokenarea=k;
this.addTokenareaListener(k);
this.reset();};
j.prototype.

addTokenareaListener=function(k){'use strict';
if(this._tokenareaListeners[k.id])
return;


var l=this.handleEvents.bind(this);
this._tokenareaListeners[k.id]=
c('getObjectValues')(c('Event').listen
(k,
{click:l,keydown:l}));};

j.prototype.

handleEvents=function(event){'use strict';
var k=c('Parent').byClass
(event.getTarget(),
'editablePhotoTagList');


if(!k){
return;}else
if(this.tokenarea!==k){

this.setTokenarea(k);
this.inform('switchTarget',this.tokenarea.id);}

return i.handleEvents.call(this,event);};
j.prototype.

reset=function(){'use strict';

var k=this.getTokenElements().map(function(l){

return {uid:c('DOM').scry(l,'input')[0].value,
text:c('DOM').scry(l,'input')[1].value};});


c('Input').reset(this.input);
return i.reset.call(this,k);};
j.prototype.

updateTokenareaVisibility=function(){'use strict';
return null;};
j.prototype.

insertToken=function(k){'use strict';
c('DOM').prependContent(this.tokenarea,k.getElement());};
function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);

/** js/photos/bulk/PhotosBulkBackdateEditor.js */




__d('PhotosBulkBackdateEditor',['Event','Arbiter','DOMQuery','Focus','Form'],(function a(b,c,d,e,f,g){








var h=

{setup:function i(j,k){
c('Event').listen(j,'click',function(){
k.setContext(j);
k.show();});


var l=c('DOMQuery').find
(k.getContent(),
"^.photosBulkDatePicker .saveBackdatedTime");


c('Event').listen(l,'click',function(){
var m=c('Form').serialize(k.getContent()),
n=m.backdated_date,


o=parseInt(m.use_date_from_file,10)>0,
p=c('DOMQuery').scry
(k.getContent(),
'#hide_from_newsfeed')[
0],
q=p&&p.checked;

c('Arbiter').inform
('PhotosBulkBackdateEditor.SAVED',

{context:j,
backdatedDate:n,
hideFromNewsfeed:q,
useDateFromFile:o});


k.hide();

c('Focus').set(j);});}};




f.exports=h;}),null);

/** js/photos/bulk/PhotosBulkEditablePhotoPlaceholder.js */






__d('PhotosBulkEditablePhotoPlaceholder',['csx','CSS','DOM','Event','mixInEventEmitter'],(function a(b,c,d,e,f,g,h){









function i(j,k,l){'use strict';
this._root=j;
this._progressBar=k;
this._uploadID=l;


this._initAndGetGatedButton
("._3273",
'cancelButtonClicked');



this._retryButton=this._initAndGetGatedButton
("._3p03",
'retryButtonClicked');


this._errorOkayButton=this._initAndGetGatedButton
("._8qx",
'dismissPlaceholder');

this._errorCloseButton=this._initAndGetGatedButton
("._8qy",
'dismissPlaceholder');}

i.prototype.

_initAndGetGatedButton=function(j,k){'use strict';


var l=c('DOM').scry(this._root,j);
if(l.length){
l=l[0];
c('Event').listen
(l,
'click',
function(){return this.emit(k,this._uploadID);}.bind(this));

return l;}};

i.prototype.

getProgressBar=function(){'use strict';
return this._progressBar;};
i.prototype.

getRoot=function(){'use strict';
return this._root;};
i.prototype.

hide=function(){'use strict';
c('CSS').hide(this._root);};
i.prototype.

show=function(){'use strict';
c('CSS').show(this._root);};
i.prototype.

showRetryButton=function(){'use strict';
this._retryButton&&c('CSS').show(this._retryButton);};
i.prototype.

showErrorOkayButton=function(){'use strict';
this._errorOkayButton&&c('CSS').show(this._errorOkayButton);};
i.prototype.

showErrorCloseButton=function(){'use strict';
this._errorCloseButton&&c('CSS').show(this._errorCloseButton);};



c('mixInEventEmitter')(i,
{cancelButtonClicked:true,
retryButtonClicked:true,
dismissPlaceholder:true});


f.exports=i;}),null);

/** www/__virtual__/x/XPhotoBatchEditLocationController.js */



__d("XPhotoBatchEditLocationController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/photos\/edit\/batch\/location\/",{});}),

null);

/** js/photos/bulk/PhotosBulkEditor.js */





__d('PhotosBulkEditor',['ix','xuiglyph','cx','ActorURI','Arbiter','AsyncRequest','Button','CSS','DOM','Event','PageTransitions','Parent','PhotosConst','SortableGroup','XPhotoBatchEditLocationController','mapObject','createIxElement','emptyFunction'],(function a(b,c,d,e,f,g,h,i,j){























var k=
{ASCENDING:'ascending',
DESCENDING:'descending',
MANUAL:'manual'},


l=
{ascending:h("89980"),
descending:h("89944")};



function m
(n,
o,
p,
q,
r,
s,
t,
u,
v){'use strict';
this.source=n;

if(!o)
return;


this._root=o;

this._reorderButton=c('DOM').scry
(this._root.parentNode,
'button.reorderButton').
pop();

this._id=o.getAttribute('id');

this._ownerID=v;


this._photos={};
this._tagger=null;

this._options=t;

this._isNamespaced=u;

this._placeholder=r;
this._waitingTemplate=s;

this._mentionsData=p;
this._placesData=q;


this._albumPlace=null;

this._userDate=null;
this._useDateFromFile=false;

this._albumCoverListeners={};




this._albumCoverTracksFirstPhoto=
this.source===c('PhotosConst').FLASH_UPLOADER;
this._coverPhotoSortingID=null;

if(t.canReorder)
this._initSorting(t.autosaveReorder);


var w=
[c('Arbiter').subscribe
(this.mapEventNameToNamespace('PhotosBulkEditablePhoto.INITIALIZED'),
this._registerPhoto.bind(this)),

c('Arbiter').subscribe

([this.mapEventNameToNamespace('PhotosBulkEditablePhoto.REMOVED'),


this.mapEventNameToNamespace('PhotosBulkEditablePhoto.ROTATED')],

function(x,y){
if(this._sortableGroup){
var z=y.getPhotoData().fbid;
this._sortableGroup.removeSortable(z);}

delete this._photos[y.getPhotoDataKey()];}.
bind(this)),

c('Arbiter').subscribe
('PhotosBulkEditor.AUTO_ORDER',
this._autoOrder.bind(this)),

c('Arbiter').subscribe
('PhotosBulkBackdateEditor.SAVED',
function(x,y){
this._useDateFromFile=y.useDateFromFile;
this._userDate=y.backdatedDate;
this._setDate();}.
bind(this)),

c('Arbiter').subscribe

(['PhotoAlbumPlacesTypeahead.SELECTED_PLACE',
'PhotoAlbumPlacesTypeahead.EXIST_PLACE',
'PhotoAlbumPlacesTypeahead.RESET_PLACE'],

this._setPlace.bind(this)),

c('Arbiter').subscribe
('PhotosBulkEditablePhoto.MOVED',
function(x,y){
if(this.getPhotoData(y))
this._photos[y]._doRemove();}.

bind(this))];



c('Event').listen(this._root,'click',function(x){
var y=c('Parent').byClass(x.getTarget(),'editablePhoto'),
z=this._photos;


c('DOM').scry(this._root,'.showControls').forEach(function(aa){
if(y!==aa){
c('CSS').removeClass(aa,'showControls');
z[aa.id].hideMetadataInputs();}});}.


bind(this));

c('PageTransitions').registerHandler(function(){
w.forEach(function(x){
x.unsubscribe();});


if(this._tagger)
this._tagger.done();}.

bind(this));}
m.prototype.

init=
function(n,
o,
p,
q,
r,
s){'use strict';
m.call
(this,
this.source,
n,
o,
p,
q,
r,
s);};

m.prototype.

getRoot=function(){'use strict';
return this._root;};
m.prototype.

getSourceString=function(){'use strict';
if(this.source===c('PhotosConst').BULK_EDITOR){
return 'bulk_editor';}else
if(this.source===c('PhotosConst').FLASH_UPLOADER){
return 'flash_uploader';}else 

return null;};

m.prototype.

isNamespaced=function(){'use strict';
return this._isNamespaced;};
m.prototype.

getVersionConst=function(){'use strict';
return this.source;};
m.prototype.

getViewerSource=function(){'use strict';
return null;};
m.prototype.

getViewerSet=function(){'use strict';
return null;};
m.prototype.

registerTagger=function(n){'use strict';
this._tagger=n;};
m.prototype.

needTaggingData=function(){'use strict';
return this._tagger&&this._tagger.needTaggingData();};
m.prototype.

getPhotoData=function(n){'use strict';
var o=this._photos[n];

if(o)
return o.getPhotoData();

return {};};
m.prototype.

getPlaceholder=function(){'use strict';
return this._placeholder;};
m.prototype.

getWaitingTemplate=function(){'use strict';
return this._waitingTemplate;};
m.prototype.

addFaceboxes=function(n){'use strict';
this._tagger&&this._tagger.addFaceboxes(n);};
m.prototype.

mapEventNameToNamespace=function(n){'use strict';
return n+(this._isNamespaced?'/'+this._id:'');};
m.prototype.

_registerPhoto=function(event,n){'use strict';

this._setSortMode(k.MANUAL);

this._photos[n.getPhotoDataKey()]=n;


n.source=this.source;
var o=n.getPhotoData(),
p=o.fbid;

if(this._sortableGroup)
this._sortableGroup.addSortable
(p,
n.getRoot(),
n.getDragHandle());



n.swapData(this._mentionsData,this._placesData);
if(this._sortableGroup)
n.addPlaceSelectHandler(function(){
this._sortableGroup.killDrag(p);}.
bind(this));


if(this._albumPlace&&!n.hasOwnPlaceValue())
n.setAlbumPlace(this._albumPlace);


if(this._sortableGroup&&this._albumCoverTracksFirstPhoto)





this._coverPhotoSortingID=this._sortableGroup.getOrder()[0];};

m.prototype.

_recoverPhotos=function(n){'use strict';
var o=this._photos;
for(var p in o){
var q=o[p];
this._tagger.recoverPhoto(q);

c('CSS').addClass
(q.getRoot(),
'showRecognitionBoxes');


var r=c('DOM').find
(q.getRoot(),
'div.uiScaledImageContainer.scaledImage');

this.addFaceboxes(r);}};

m.prototype.

_initSorting=function(n){'use strict';
this._setSortMode(k.MANUAL);

this._dropCallback=function(o,p,q){


var r=this._photos[p.id].getPhotoData(),
s=
{order:this._sortableGroup.getOrder(),
owner:r.owner};




if(n){
var t;

if(r.set){
s.set=r.set;
t='/ajax/photos/sets/static/reorder.php';}else{

s.album_fbid=r.albumFBID;
t='/ajax/photos/reorder.php';}


new (c('AsyncRequest'))(t).
setData(s).
send();}


if(this._sortableGroup&&
this._albumCoverTracksFirstPhoto&&
this._coverPhotoSortingID!==s.order[0]){
var u=
this._photos[this._sortableGroup.sortables[s.order[0]].id];
if(u)
this._makeAlbumCover(u);

this._coverPhotoSortingID=s.order[0];}



if(!q)
this._setSortMode(k.MANUAL);}.

bind(this);

this._sortableGroup=new (c('SortableGroup'))().
setDropCallback(this._dropCallback).
setBeforeGrabCallback(function(){
c('Arbiter').inform
(this.mapEventNameToNamespace('PhotosBulkEditor.PHOTO_REORDER_START'));}.

bind(this));};
m.prototype.

_compare=function(n,o){'use strict';
switch(this._sortMode){
case k.MANUAL:
return this._orderLookup[n.fbid]<this._orderLookup[o.fbid];
case k.ASCENDING:
return n.timeTaken<o.timeTaken;
case k.DESCENDING:
return n.timeTaken>o.timeTaken;

default:throw new Error('Invalid sort mode');}};

m.prototype.

_setSortMode=function(n){'use strict';

if(!this._reorderButton)return;

this._sortMode=n;


var o=null,
p=n!==k.MANUAL;

if(p){
o=c('createIxElement')(l[n]);
c('CSS').addClass(o,"_3-8_");}


c('Button').setDepressed(this._reorderButton,p);
c('Button').setIcon(this._reorderButton,o);};
m.prototype.

_autoOrder=function(){'use strict';
switch(this._sortMode){
case k.MANUAL:
var n,o,
p=this.getOrder();

this._orderLookup={};
for(o=0;o<p.length;o++){
n=p[o];
this._orderLookup[n]=o;}

this._setSortMode(k.ASCENDING);
break;
case k.ASCENDING:
this._setSortMode(k.DESCENDING);
break;
case k.DESCENDING:
this._setSortMode(k.MANUAL);
break;

default:throw new Error('Invalid sort mode');}


var q=this._sortableGroup.getOrder().map(function(y){
return this._photos['editablePhoto_'+y].getPhotoData();}.
bind(this));





this._sortableGroup.setDropCallback(c('emptyFunction'));


var r,s,t;
for(r=0;r<q.length;r++){
s=r;
for(t=r+1;t<q.length;t++)
if(this._compare(q[t],q[s]))
s=t;



if(r!==s){
var u=q[s].fbid,
v=q[r].fbid;
this._sortableGroup.dragOverHandler(v,u);
this._sortableGroup.dropHandler(u);
q.splice(r,0,
q.splice(s,1)[0]);}}





var w=Object.keys(this._photos)[0],
x=this._photos[w];


this._dropCallback(x.getPhotoData().fbid,x.getRoot(),true);


this._sortableGroup.setDropCallback(this._dropCallback);};
m.prototype.

_saveCurrentOrder=function(){'use strict';
if(this._photos.length===0)
return;


var n=this._sortableGroup.getOrder()[0],
o=this._photos['editablePhoto_'+n]||
this._photos['photoContainer_'+n];

if(!o)
return;

var p=o.getPhotoData();

if(!p.albumFBID)


return;


var q=
{order:this._sortableGroup.getOrder(),
owner:p.owner,
album_fbid:p.albumFBID};


new (c('AsyncRequest'))('/ajax/photos/reorder.php').
setData(q).
send();};
m.prototype.

_setPlace=function(event,n){'use strict';
this._albumPlace=n||null;
var o=this._options.batchUpdateLocation,
p=[];

c('mapObject')(this._photos,function(r,s){
if(r.hasOwnPlaceValue())return;

r.setAlbumPlace(this._albumPlace,o);
if(o)
p.push(r.getPhotoData().fbid);},

this);

if(o){
var q=c('XPhotoBatchEditLocationController').getURIBuilder().getURI();
if(this._ownerID)
q=c('ActorURI').create(q,this._ownerID);

new (c('AsyncRequest'))(q).
setData
({photo_ids:p,
location:this._albumPlace?this._albumPlace.text:'',
location_data:this._albumPlace?this._albumPlace.uid:0}).

send();}};

m.prototype.

_setDate=function(){'use strict';
var n='',
o=null,
p;
for(var q in this._photos){
p=this._photos[q];
if(!this._useDateFromFile){
n=this._userDate.month+
'/'+this._userDate.day+
'/'+this._userDate.year;
o=new Date(n).getTime();}




p.setDate(o,true);}};

m.prototype.

_showAlbumCoverSet=function(n){'use strict';
if(this._albumCover)
c('CSS').removeClass(this._albumCover,"checked");

var o=c('DOM').find(n.getRoot(),'.albumCover');
c('CSS').addClass(o,"checked");
this._albumCover=o;};
m.prototype.

_makeAlbumCover=function(n){'use strict';
new (c('AsyncRequest'))().
setURI('/ajax/photos/album/setcover').
setData(n.getPhotoData()).
send();};
m.prototype.

getOrder=function(){'use strict';
if(this._sortableGroup){
return this._sortableGroup.getOrder();}else 

return [];};

m.prototype.

hasOrder=function(){'use strict';
return !!this._sortableGroup;};



f.exports=m;}),null);

/** js/photos/bulk/PhotosBulkHeader.js */





__d('PhotosBulkHeader',['fbt','Arbiter','AsyncRequest','DOM','Event','Form','Run','areJSONRepresentationsEqual','goURI'],(function a(b,c,d,e,f,g,h){













function i(j,k,l,m){'use strict';
this._form=j;
this._isAlbum=k;
this._editable=l;
this._audience=m;
this._backdatedTime=null;
this._initialData=null;

c('Arbiter').subscribe
('PhotosBulkBackdateEditor.SAVED',
function(n,o){
if(!c('DOM').contains(this._form.getRoot(),o.context))
return;


this._backdatedTime=o.backdatedDate;}.
bind(this));


c('Run').onBeforeUnload
(function(){
if(this.isDataDirty())
return h._(["Some of your changes have not been saved. Would you like to save your changes now?","795e3b903a69d9e43700cd17923dd8d5"]);

return false;}.
bind(this));


this._initialData=this.getSerializedData();}
i.prototype.

getSerializedData=function(){'use strict';
var j=c('Form').serialize(this._form.getRoot());
if(this._backdatedTime)
j.backTime=this._backdatedTime;

return j;};
i.prototype.

isDataDirty=function(){'use strict';
return !c('areJSONRepresentationsEqual')(this._initialData,this.getSerializedData());};
i.prototype.

save=function(j){'use strict';
if(!this._editable)



return j.call();


if(this._audience&&this._audience.removeHiddenPrivacyWidget)
this._audience.removeHiddenPrivacyWidget();


var k=this._isAlbum?
'/ajax/photos/album/edit':
'/ajax/photos/sets/edit',

l=c('Form').serialize(this._form.getRoot());
if(this._backdatedTime)
l.backdated_time=this._backdatedTime;


new (c('AsyncRequest'))(k).
setData(l).
setMethod('POST').
setHandler(function(){
this._initialData=this.getSerializedData();
j();}.
bind(this)).
send();};
i.


doneButtonSaveHandler=function(j,k,l){'use strict';
var m=j.save.bind
(j,
function(){
c('goURI')(k,true);
return true;});



j._listeners=[c('Event').listen(l,'click',m)];};



f.exports=i;}),null);

/** js/places/typeahead/behaviors/PlacesTypeaheadBehavior.js */




__d('PlacesTypeaheadBehavior',['CSS','DOM'],(function a(b,c,d,e,f,g){




var h=

{init:function i(j,k){
j.subscribe
(['reset','select','highlight'],
function(l,m){
if(l==='highlight'&&
m.index!==-1&&
m.selected.type!='freeform'&&
m.selected.map&&
!m.selected.changeCity){
c('DOM').setContent(k,m.selected.map);
c('CSS').show(k);}else 

c('CSS').hide(k);});}};






f.exports=h;}),null);

/** js/ui/core/ui/typeahead/behaviors/LegacyShowResultsOnFocusTypeaheadBehavior.js */




__d('legacy:ShowResultsOnFocusTypeaheadBehavior',['TypeaheadShowResultsOnFocus'],(function a(b,c,d,e,f,g){



if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};
b.TypeaheadBehaviors.showResultsOnFocus=function(h){
h.enableBehavior(c('TypeaheadShowResultsOnFocus'));};}),
3);
