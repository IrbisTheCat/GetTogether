if (self.CavalryLogger) { CavalryLogger.start_js(["eEcUJ"]); }

/** js/modules/Overlay.js */






__d('Overlay',['CSS','DataStore','DOM','Layer','LayerButtons','LayerDestroyOnHide','LayerFadeOnHide','LayerFadeOnShow','LayerFormHooks','LayerHideOnBlur','LayerHideOnEscape','LayerHideOnSuccess','LayerHideOnTransition','LayerMouseHooks','LayerTabIsolation'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits

















(j,c('Layer'));i=h&&h.prototype;
function j(k,l){'use strict';
k=babelHelpers['extends']
({buildWrapper:true},
k);

i.constructor.call(this,k,l);}
j.prototype.








_configure=function(k,l){'use strict';

this._shouldBuildWrapper=k.buildWrapper;
i._configure.call(this,k,l);

var m=this.getRoot();
this._overlay=c('DOM').scry(m,'div.uiOverlay')[0]||m;



c('CSS').hide(m);
c('DOM').appendContent(this.getInsertParent(),m);

c('DataStore').set(this._overlay,'overlay',this);

var n=c('DataStore').get(this._overlay,'width');
n&&this.setWidth(n);


if(this.setFixed)
this.setFixed(c('DataStore').get(this._overlay,'fixed')=='true');



if(c('DataStore').get(this._overlay,'fadeonshow')!='false')
this.enableBehavior(c('LayerFadeOnShow'));



if(c('DataStore').get(this._overlay,'fadeonhide')!='false')
this.enableBehavior(c('LayerFadeOnHide'));



if(c('DataStore').get(this._overlay,'hideonsuccess')!='false')
this.enableBehavior(c('LayerHideOnSuccess'));



if(c('DataStore').get(this._overlay,'hideonblur')=='true')
this.enableBehavior(c('LayerHideOnBlur'));




if(c('DataStore').get(this._overlay,'destroyonhide')!='false')
this.enableBehavior(c('LayerDestroyOnHide'));


return this;};
j.prototype.

_getDefaultBehaviors=function(){'use strict';
return i._getDefaultBehaviors.call(this).concat([c('LayerButtons'),c('LayerFormHooks'),c('LayerMouseHooks'),c('LayerHideOnEscape'),c('LayerHideOnTransition'),c('LayerTabIsolation')]);};







j.prototype.







initWithoutBuildingWrapper=function(){'use strict';
this._shouldBuildWrapper=false;
return this.init.apply(this,arguments);};
j.prototype.

_buildWrapper=function(k,l){'use strict';
l=i._buildWrapper.call(this,k,l);
if(!this._shouldBuildWrapper){
this._contentRoot=l;
return l;}


this._contentRoot=
c('DOM').create('div',{className:'uiOverlayContent'},l);
return c('DOM').create('div',{className:'uiOverlay'},this._contentRoot);};
j.prototype.

getContentRoot=function(){'use strict';
return this._contentRoot;};
j.prototype.

destroy=function(){'use strict';
c('DataStore').remove(this.getRoot(),'overlay');
i.destroy.call(this);};



f.exports=j;}),null);

/** js/photos/album/PhotoAlbumAudienceInput.js */




__d('PhotoAlbumAudienceInput',['Arbiter','CSS','DOM','Event'],(function a(b,c,d,e,f,g){








function h
(i,
j,
k,
l,
m){
'use strict';
this.$PhotoAlbumAudienceInput_normalPrivacyWidget=i;


if(j){
this.$PhotoAlbumAudienceInput_sharedPrivacyWidget=j;
this.$PhotoAlbumAudienceInput_contributorsTokenizerElement=k;
this.$PhotoAlbumAudienceInput_removeContributorsOption=l;
this.$PhotoAlbumAudienceInput_addContributorsAllowAll=m;

c('Arbiter').subscribe
('Tokenizer/init',
this.$PhotoAlbumAudienceInput_subscribeToTokenizer.bind(this));

c('Event').listen
(this.$PhotoAlbumAudienceInput_removeContributorsOption,
'click',
this.$PhotoAlbumAudienceInput_removeAllContributors.bind(this));}}


h.prototype.

removeHiddenPrivacyWidget=function(){'use strict';
[this.$PhotoAlbumAudienceInput_normalPrivacyWidget,
this.$PhotoAlbumAudienceInput_sharedPrivacyWidget,
this.$PhotoAlbumAudienceInput_addContributorsAllowAll].
forEach(function(i){


if(i&&c('CSS').hasClass(i,'hidden_elem'))
c('DOM').remove(i);});};


h.prototype.

$PhotoAlbumAudienceInput_removeAllContributors=function(){'use strict';
this.$PhotoAlbumAudienceInput_contributorsTokenizer.removeAllTokens();
this.$PhotoAlbumAudienceInput_onTokenizerUpdate(null,null);};
h.prototype.

$PhotoAlbumAudienceInput_subscribeToTokenizer=function(i,j){'use strict';
if(this.$PhotoAlbumAudienceInput_contributorsTokenizer||
this.$PhotoAlbumAudienceInput_contributorsTokenizerElement!=j.element)
return;

this.$PhotoAlbumAudienceInput_contributorsTokenizer=j;



this.$PhotoAlbumAudienceInput_onTokenizerUpdate(null,null);


c('Arbiter').subscribe('Form/change',this.$PhotoAlbumAudienceInput_onTokenizerUpdate.bind(this));};
h.prototype.

$PhotoAlbumAudienceInput_onTokenizerUpdate=function(i,j){'use strict';
var k=this.$PhotoAlbumAudienceInput_contributorsTokenizer.getTokens().length>0;
this.$PhotoAlbumAudienceInput_updatePrivacyWidgets(k);};
h.prototype.

$PhotoAlbumAudienceInput_updatePrivacyWidgets=function(i){'use strict';
c('CSS').conditionShow(this.$PhotoAlbumAudienceInput_sharedPrivacyWidget,i);
c('CSS').conditionShow(this.$PhotoAlbumAudienceInput_normalPrivacyWidget,!i);
this.$PhotoAlbumAudienceInput_addContributorsAllowAll&&
c('CSS').conditionShow(this.$PhotoAlbumAudienceInput_addContributorsAllowAll,i);};



f.exports=h;}),null);

/** js/ui/core/ui/form/ProgressiveDatepicker.js */





__d('ProgressiveDatepicker',['Arbiter','ArbiterMixin','CSS','DataStore','DOM','Event','Parent','getElementText','mixin','shield','Focus'],(function a(b,c,d,e,f,g){var h,i;














function j(m){
return new Date(m[0],m[1],m[2],m[3],m[4]);}


function k(m,n){
while(m.length)
c('DOM').insertAfter(n,m.pop());}

h=babelHelpers.inherits

(l,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;
function l(m,n){'use strict';
i.constructor.call(this);
this._root=m;
this._savedLabels={};
this._savedPeriodsBack=[];
this._savedPeriodsFront=[];
this._menus={};

this._dayOrderAscending=n.dayorderascending;




var o=0;
if(n.gmtoffset!==undefined)


o=-new Date().getTimezoneOffset()-n.gmtoffset;

this._mintime=n.mintime&&
new Date(1000*n.mintime-o*60000);
this._maxtime=n.maxtime&&
new Date(1000*n.maxtime-o*60000);

c('DataStore').set(m,'datepicker',this);
c('DOM').scry(m,'select').forEach(function(p){
c('Event').listen(p,'change',c('shield')(this._handleChange,this,p));
var q=c('Parent').byClass(p,'period');
c('Event').listen(p,'focus',c('CSS').addClass.bind(null,q,'periodFocus'));
c('Event').listen(p,'blur',c('CSS').removeClass.bind(null,q,'periodFocus'));

this._setMenuSelectionState(p);
if(p.getAttribute('data-name')==='month')
this._filterInvalidDates();}.

bind(this));




c('DOM').scry(m,'a.periodLabel').forEach(function(p){
var q=c('Parent').byClass(p,'period');
c('Event').listen(p,'click',function(){
c('CSS').addClass(q,'periodSelected');
c('CSS').addClass(q,'periodFocus');
c('Focus').set(c('DOM').find(q,'select'));});});



this._filterInvalidDates();

this.inform('initialized',this,c('Arbiter').BEHAVIOR_STATE);}
l.prototype.

setDate=function(m,n,o,p,q){'use strict';
this._addSavedPeriods();
var r=l.PERIODS;
for(var s=0;s<r.length;s++)
this._setValueForPeriod(r[s],arguments[s]);

this._filterInvalidDates();
this.inform('changed');};
l.prototype.

setDateWithTimestamp=function(m){'use strict';
var n=new Date(m);
this.setDate
(n.getFullYear(),
n.getMonth()+1,
n.getDate(),
n.getHours(),
n.getMinutes());};

l.prototype.

isSet=function(){'use strict';
var m=l.PERIODS;
for(var n=0;n<m.length;n++)
if(this._getValueForPeriod(m[n]))
return true;


return false;};
l.prototype.

getRoot=function(){'use strict';
return this._root;};
l.prototype.

getValues=function(){'use strict';
var m=l.PERIODS,
n={};
for(var o=0;o<m.length;o++){
var p=this._getValueForPeriod(m[o]);
if(p)
n[m[o]]=p;}


return n;};
l.prototype.

getDate=function(){'use strict';
var m=this.getValues();
return new Date
(m.year||0,
(m.month||1)-1,
m.day||1,
m.hour||0,
m.minute||0);};

l.prototype.

getTimestamp=function(){'use strict';
return Math.round(this.getDate().getTime()/1000);};
l.prototype.

_setValueForPeriod=function(m,n){'use strict';
var o=this._menuForPeriodName(m);
if(!o)
return;

if(n===undefined)
n='';


var p=o.options;
for(var q=0,r=p.length;q<r;q++)
if(p[q].value==n){
o.selectedIndex=q;
break;}


this._setMenuSelectionState(o);};
l.prototype.

_getValueForPeriod=function(m){'use strict';
var n=this._menuForPeriodName(m);
return n&&n.options[n.selectedIndex].value;};
l.prototype.

_handleChange=function(m){'use strict';
this._setMenuSelectionState(m);
this._filterInvalidDates();
this.inform('changed');};
l.prototype.

_setMenuSelectionState=function(m){'use strict';
var n=c('Parent').byClass(m,'period');
if(!n)
return;

if(c('CSS').hasClass(n,'periodRequired')){
if(m.selectedIndex===0)
m.selectedIndex=1;}else 


this._updateLabel(m);


var o=m.getAttribute('data-name'),
p=m.options[m.selectedIndex].value;
c('CSS').conditionClass(n,'periodSelected',p);
c('CSS').conditionClass(this._root,this._selectedClass(o),p);

if(!p)
this._resetMenu(l.PERIODS.indexOf(o)+1);};

l.prototype.

_updateLabel=function(m){'use strict';
var n=m.getAttribute('data-name'),
o=m.options[0];
if(!this._savedLabels[n])
this._savedLabels[n]=c('getElementText')(o);


if(m.selectedIndex===0){
c('DOM').setContent(o,this._savedLabels[n]);}else 

c('DOM').setContent(o,'--');};

l.prototype.

_daysInMonth=function(m,n){'use strict';


return new Date
(m||1999,
n+1||1,
0).
getDate();};
l.prototype.

_daysInCurrentMonth=function(){'use strict';
return this._daysInMonth
(this._getValueForPeriod('year'),
this._getValueForPeriod('month')-1);};

l.prototype.

_menuForPeriodName=function(m){'use strict';
if(!this._menus[m])
this._menus[m]=c('DOM').scry(this._root,'.'+m+'Menu')[0];

return this._menus[m];};
l.prototype.

_selectedClass=function(m){'use strict';
return 'uiProgressiveDatepickerSelected-'+m;};
l.prototype.




_resetMenu=function(m){'use strict';
var n=l.PERIODS;
for(;m<n.length;m++){
var o=n[m],
p=this._menuForPeriodName(o);
if(!p)
return;

if(c('Parent').byClass(p,'periodRequired')){
p.selectedIndex=1;}else{

c('CSS').removeClass(c('Parent').byClass(p,'period'),'periodSelected');
c('CSS').removeClass(this._root,this._selectedClass(o));
p.selectedIndex=0;
this._updateLabel(p);}}};


l.prototype.

_addSavedPeriods=function(){'use strict';
var m=l.PERIODS;
for(var n=0;n<m.length;n++){
var o=this._menuForPeriodName(m[n]);
if(!o)
return;



this._savedPeriodsFront[n]||(this._savedPeriodsFront[n]=[]);
this._savedPeriodsBack[n]||(this._savedPeriodsBack[n]=[]);


var p=o.options[0],
q=o.options[o.options.length-1];
if(n===l.PERIODS.indexOf('hour')||
n===l.PERIODS.indexOf('minute')||
n===l.PERIODS.indexOf('day')&&
this._dayOrderAscending){

k(this._savedPeriodsFront[n],p);
k(this._savedPeriodsBack[n],q);}else{


k(this._savedPeriodsBack[n],p);
k(this._savedPeriodsFront[n],q);}}};


l.prototype.






_filterInvalidDates=function(){'use strict';

this._addSavedPeriods();

var m=l.PERIODS,
n=this.getValues();
for(var o=0;o<m.length;o++){
var p=this._menuForPeriodName(m[o]);
if(!p)
return;



this._savedPeriodsFront[o]||(this._savedPeriodsFront[o]=[]);
this._savedPeriodsBack[o]||(this._savedPeriodsBack[o]=[]);


for(var q=1;q<p.options.length;){
var r=p.options[q],




s=
[o-1>=0?n[m[0]]:0,
o-1>=1?n[m[1]]-1:0,
o-1>=2?n[m[2]]:1,
o-1>=3?n[m[3]]:0,
o-1>=4?n[m[4]]:0];

s[o]=r.value;
if(o===l.PERIODS.indexOf('month'))

s[o]=s[o]-1;

var t=j(s),




u=
[o-1>=0?n[m[0]]:9001,
o-1>=1?n[m[1]]-1:11,
o-1>=2?n[m[2]]:this._daysInCurrentMonth(),
o-1>=3?n[m[3]]:23,
o-1>=4?n[m[4]]:59];

u[o]=r.value;
if(o===l.PERIODS.indexOf('month')){


u[o]--;
u[o+1]=
this._daysInMonth(u[0],u[1]);}

var v=j(u),

w=t>this._maxtime,
x=v<this._mintime,
y=
o===l.PERIODS.indexOf('day')&&
r.value>this._daysInCurrentMonth();

if(x||w||y){
if(r.selected){
r.selected=false;
this._resetMenu(o);}

c('DOM').remove(r);
if(w||y){
this._savedPeriodsBack[o].push(r);}else 

this._savedPeriodsFront[o].push(r);}else 


q++;}}};



l.

getInstance=function(m){'use strict';
return m?c('DataStore').get(m,'datepicker'):null;};



Object.assign(l,
{PERIODS:['year','month','day','hour','minute']});


f.exports=l;}),null);

/** js/photos/bulk/PhotosBulkEditablePhoto.js */





__d('PhotosBulkEditablePhoto',['csx','cx','fbt','Arbiter','AsyncDialog','AsyncRequest','AsyncResponse','CSS','Dialog','DOM','Event','Focus','Form','Input','Parent','PhotosConst','PlaceUtils','ProgressiveDatepicker'],(function a(b,c,d,e,f,g,h,i,j){





















var k=null,
l=null,
m=false;


function n
(o,
p,
q,
r,
s,
t,
u){
'use strict';
this._root=o;
this._mentionsTypeahead=p;
this._placesTypeahead=q;
this._photoData=r;
this._hasOwnPlaceValue=!!q.getCore().getHiddenValue();

var v=c('DOM').find(o,'.placesInput'),
w=c('DOM').find(o,'.captionTextarea'),
x=
c('DOM').find(q.element,'.uiTypeaheadCloseButton');

this._metadataInputs=c('DOM').find(o,'.metadataInputs');
this._editorId=s;
this._published=t;
this._showMove=u;

this._photoDataKey=this._root.id;

this._hasTimeTaken=!!this._photoData.timeTaken;
this._hasExistingDateValue=this._photoData.isBackdated;

this._listeners=
[c('Event').listen(o,'click',this._handleClick.bind(this)),
c('Event').listen(v,'focus',this._placesFocus.bind(this)),
c('Event').listen(w,'focus',this._captionFocus.bind(this)),
c('Event').listen(w,'blur',this._save.bind(this)),
c('Event').listen(x,'click',function(){
setTimeout(this._save.bind(this),0);}.
bind(this)),


c('Event').listen(o,'submit',function(){
return false;})];



this._previousSaveData=c('Form').serialize(this._root);

var y=c('DOM').scry(this._root,'div.backdateInput .periodMenu');
for(var z=0;z<y.length;z++){
var aa=y[z];
this._listeners.push
(c('Event').listen(aa,'change',function(){return this._saveDate();}.bind(this)));}



var ba=c('DOM').scry
(this._root,
"._2sfm").
pop();

if(ba){
var ca=ba.getAttribute('data-direction');
this._listeners.push
(c('Event').listen(ba,'click',this._rotate.bind(this,ca)));}



var da=c('DOM').scry(o,'.photoContextualSelector')[0];
if(da){
var ea=c('DOM').scry(da,'.moveAlbum')[0];
ea&&this._listeners.push
(c('Event').listen(ea,'click',this._move.bind(this)));
var fa=c('DOM').scry(da,'.albumCover')[0];
fa&&this._listeners.push
(c('Event').listen(fa,'click',this._setAlbumCover.bind(this)));
var ga=c('DOM').scry(da,'.removePhoto')[0];
ga&&this._listeners.push
(c('Event').listen(ga,'click',this.remove.bind(this)));}else{

var ha=c('DOM').find(o,'.removePhotoButton');
this._listeners.push
(c('Event').listen(ha,'click',this.remove.bind(this)));}


this._placesDataListener=[q.subscribe
(['select','reset','render'],





function(ia,ja){


c('CSS').conditionClass(this._root,'focusedInput',ia=='render');
if(ia=='render')return;
if(ia=='reset'&&q.getCore().getHiddenValue())
return;






if(ja&&ja.selected){
k=ja.selected;

if(l==k.text){
m=true;}else{

l=k.text;
m=false;}}else{


k=null;
l=null;
m=false;}


this._hasOwnPlaceValue=ia=='select';
c('CSS').conditionClass
(c('DOM').find(o,'.placeIcon'),
'hasPlace',
this._hasOwnPlaceValue);


if(this._hasOwnPlaceValue)
this._save();}.

bind(this))];




this._placesInputBlurListener=q.getCore().subscribe
('blur',
function(ia,ja){
c('CSS').removeClass(this._root,'focusedInput');}.
bind(this));


c('Arbiter').inform
(this.mapEventNameToNamespace('PhotosBulkEditablePhoto.INITIALIZED'),
this,
c('Arbiter').BEHAVIOR_PERSISTENT);}

n.prototype.

getPhotoDataKey=function(){'use strict';
return this._photoDataKey;};
n.prototype.

getPhotoData=function(){'use strict';
return this._photoData;};
n.prototype.

getRoot=function(){'use strict';
return this._root;};
n.prototype.

getDragHandle=function(){'use strict';
return this.getRoot();};
n.prototype.

getRotateButtonType=function(){'use strict';
return this._rotateButtonType;};
n.prototype.

swapData=function(o,p){'use strict';
var q=this._mentionsTypeahead.getData(),
r=this._placesTypeahead.getData();

if(q!==o)
this._mentionsTypeahead.swapData(o);

if(r!==p){


var s=this._placesTypeahead.getCore().getValue(),
t=this._placesTypeahead.getCore().getHiddenValue();

this._placesTypeahead.swapData(p);
if(this.hasOwnPlaceValue())
this._placesTypeahead.getCore().select
({text:s,
uid:t});}};



n.prototype.




hasOwnPlaceValue=function(){'use strict';
return this._hasOwnPlaceValue;};
n.prototype.







setAlbumPlace=function(o,p){'use strict';
this._hasOwnPlaceValue=false;
var q=this._placesTypeahead.getCore();
c('CSS').conditionClass
(c('DOM').find(this._root,'.placeIcon'),
'hasPlace',
!!o);

if(o){
q.select(o);}else 

q.reset();



if(!p)
this._save();};

n.prototype.

addPlaceSelectHandler=function(o){'use strict';
this._placesDataListener.push
(this._placesTypeahead.subscribe('select',o));};

n.prototype.

mapEventNameToNamespace=function(o){'use strict';
return o+(this._editorId?'/'+this._editorId:'');};
n.prototype.

setDate=function(o,p){'use strict';

if(this._hasExistingDateValue)
return;





var q=!o,

r=o;
if(q){


if(!this._hasTimeTaken)
return;




r=Math.round(this._photoData.timeTaken/600)*600*1000;}


var s=c('DOM').find(this.getRoot(),'.uiProgressiveDatepicker'),
t=c('ProgressiveDatepicker').getInstance(s);
t.setDateWithTimestamp(r);

c('CSS').conditionClass
(c('DOM').find(this._root,'.dateIcon'),
'hasDate',
!!r);


if(q)
this._saveDate(p);};

n.prototype.

_doRemove=function(){'use strict';
c('DOM').remove(this._root);
this._unsubscribeAll();
c('Arbiter').inform
(this.mapEventNameToNamespace('PhotosBulkEditablePhoto.REMOVED'),
this);};

n.prototype.

_unsubscribeAll=function(){'use strict';
this._listeners.forEach(function(o){
o.remove();});

this._listeners=[];

this._placesDataListener.forEach(function(o){
this._placesTypeahead.unsubscribe(o);}.
bind(this));

this._placesTypeahead.getCore().unsubscribe
(this._placesInputBlurListener);};

n.prototype.

_handleClick=function(o){'use strict';
var p=o.getTarget();

if(c('Parent').byClass(p,'confirmPhotoBackdate')){
this._saveDate();
return;}


if(!c('Parent').byClass(p,'metaIcon'))
return;

c('CSS').addClass(this._root,'showControls');
if(c('Parent').byClass(p,'placeIcon')){
this._showMetadataInput('place');
c('Focus').set(this._placesTypeahead.getCore().getElement());}else
if(c('Parent').byClass(p,'dateIcon')){
this._showMetadataInput('date');}else
if(c('Parent').byClass(p,'peopleIcon')){
c('Arbiter').inform
(this.mapEventNameToNamespace('PhotosBulkEditablePhoto.TAG_BUTTON_CLICKED'),
this);


this._showMetadataInput('people');}else 

c('CSS').removeClass(this._root,'showControls');};

n.prototype.

hideMetadataInputs=function(){'use strict';
this._showMetadataInput();};
n.prototype.

_showMetadataInput=function(o){'use strict';
['people','date','place'].forEach(function(p){
c('CSS').conditionClass(this._metadataInputs,p,o==p);}.
bind(this));};
n.prototype.

_captionFocus=function(o){'use strict';
this.hideMetadataInputs();
c('CSS').addClass(this._root,'focusedInput');};
n.prototype.

remove=function(){'use strict';
var o=
{fbid:this._photoData.fbid,
version:c('PhotosConst').BULK_EDITOR,
confirmed:true};


new (c('Dialog'))().
setTitle(j._(["Delete Photo","a40d7a3177e4ffad207c4d7ca81d7c3c"])).
setBody(j._(["Are you sure you want to delete this photo?","5a291ff772c1cfe7c9da76e60e21b930"])).
setButtons(c('Dialog').OK_AND_CANCEL).
setModal(true).
setHandler(function(){
c('CSS').addClass(this._root,'editablePhotoWillBeRemoved');
new (c('AsyncRequest'))().
setURI('/ajax/photos/photo/delete/dialog.php').
setData(o).
setHandler(function(p){
if(p.getPayload().success){
this._doRemove();}else 

c('CSS').removeClass(this._root,'editablePhotoWillBeRemoved');}.

bind(this)).
setErrorHandler(function(p){
c('CSS').removeClass(this._root,'editablePhotoWillBeRemoved');
c('AsyncResponse').defaultErrorHandler(p);}.
bind(this)).
send();}.
bind(this)).
show();};
n.prototype.

_setAlbumCover=function(){'use strict';
var o=
{aid:this._photoData.aid,
albumFBID:this._photoData.albumFBID,
fbid:this._photoData.fbid,
owner:this._photoData.owner,
pid:this._photoData.pid},


p=new (c('AsyncRequest'))().
setURI('/ajax/photos/album/setcover/').
setData(o).
setAllowCrossPageTransition(false);
c('AsyncDialog').send(p);};
n.prototype.

_move=function(){'use strict';
var o=
{aid:this._photoData.aid,
albumFBID:this._photoData.albumFBID,
datakey:this._photoDataKey,
fbid:this._photoData.fbid,
owner:this._photoData.owner,
pid:this._photoData.pid},


p=new (c('AsyncRequest'))().
setURI('/ajax/photos/photo/move/dialog.php').
setData(o).
setAllowCrossPageTransition(false);
c('AsyncDialog').send(p);};
n.prototype.

_timeclose=function(o,p){'use strict';
o=o||0;
p=p||0;
return Math.abs(o-p)<43200;};
n.prototype.

_placesFocus=function(o){'use strict';
c('CSS').addClass(this._root,'focusedInput');
var p=c('DOM').scry(this._root,'input.latitude')[0],
q=c('DOM').scry(this._root,'input.longitude')[0],
r=c('DOM').scry(this._root,'input.takentime')[0],
s=r?c('Input').getValue(r):null,
t=this._placesTypeahead.getData(),
u=t.getBootstrapData(),
v={};

if(p&&q){
v=
{latitude:c('Input').getValue(p),
longitude:c('Input').getValue(q),
proximity_boost:'true',
city_id:null,
search_time:s};


t.setQueryData(v,false);



if(!c('PlaceUtils').placesClose
(u.latitude,u.longitude,
v.latitude,v.longitude)||
!this._timeclose(u.search_time,
v.search_time))



t.
setBootstrapData(v,false).
setBootstrapEndpoint(t.getQueryEndpoint());}else{





v=
{latitude:null,
longitude:null,
proximity_boost:null,
city_id:null,
search_time:s};


if(k)
if(k.city_id){
v.city_id=k.city_id;}else
if(k.latitude&&
k.longitude){
v.latitude=k.latitude;
v.longitude=k.longitude;}



t.setQueryData(v,false);


if(!m){
t.
setBootstrapData(v).
resetBootstrapEndpoint(true);}else 




if(!c('PlaceUtils').placesClose
(u.latitude,u.longitude,
v.latitude,v.longitude)||
!this._timeclose(u.search_time,
v.search_time))
t.
setBootstrapData(v,false).
resetBootstrapEndpoint();}};



n.prototype.

_saveDate=function(o){'use strict';
var p=c('DOM').find(this._root,'div.backdateInput'),
q=c('Form').serialize(p);
q.source=this.source;
q.fbid=this._photoData.fbid;
q.version=c('PhotosConst').BULK_EDITOR;
q.bulk=!!o;
c('CSS').addClass(p,'backdating');
new (c('AsyncRequest'))().
setURI('/ajax/photos/photo/backdate/').
setData(q).
setRelativeTo(this._root).
send();};
n.prototype.

_save=function(){'use strict';
c('CSS').removeClass(this._root,'focusedInput');
var o=c('Form').serialize(this._root);

if(this._previousSaveData){
var p=false;

for(var q in o){
if(q!=='caption'&&q!=='location'&&q!=='location_data')
continue;


if(o[q]!==this._previousSaveData[q]){
p=true;
this._previousSaveData[q]=o[q];}}



if(!p)
return;}



o.source=this.source;
o.bulk=!this._hasOwnPlaceValue;
new (c('AsyncRequest'))().
setURI('/ajax/photos/metadata/save/').
setData(o).
setAllowCrossPageTransition(true).
send();};
n.prototype.

_setLoadingIndicator=function(o){'use strict';
c('CSS').conditionClass
(this._root,
"_2sfl",
o);};

n.prototype.

_rotate=function(o){'use strict';
var p=
{fbid:this._photoData.fbid,
cs_ver:c('PhotosConst').BULK_EDITOR,
editor_id:this._editorId,
published:this._published,
showMove:this._showMove};

p[o]=1;

this._setLoadingIndicator(true);
new (c('AsyncRequest'))('/ajax/photos/photo/rotate/').
setData(p).
setHandler(function(q){
c('DOM').replace(this._root,q.getPayload());
this._unsubscribeAll();
c('Arbiter').inform
(this.mapEventNameToNamespace('PhotosBulkEditablePhoto.ROTATED'),
this);}.

bind(this)).
setFinallyHandler(function(){
this._setLoadingIndicator(false);}.
bind(this)).
setMethod('POST').
send();

return false;};



f.exports=n;}),null);

/** js/photos/viewer/modules/TagTypeaheadView.js */





__d('TagTypeaheadView',['AsyncRequest','ContextualTypeaheadView','CSS','DOM','Parent','FamilyTaggingConfig'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits








(j,c('ContextualTypeaheadView'));i=h&&h.prototype;
function j(k,l){'use strict';
i.constructor.call(this,k,l);
this.hintText=l.hintText;
this.userEd=l.userEd;
this.origAutoSelect=l.autoSelect;
this.setSuggestions(l.suggestions);}
j.prototype.

init=function(){'use strict';
c('CSS').addClass(this.element,'uiTagTypeaheadView');
i.init.call(this);};
j.prototype.






buildResults=function(k){'use strict';
if(!this.value&&this.hintText)
k.unshift({subtext:this.hintText,type:'hintText'});

if(this.userEd){
new (c('AsyncRequest'))().
setURI('/ajax/fof/user_education.php').
setData
({increment:1}).

send();
k.unshift({subtext:this.userEd,type:'userEdText'});}








if(c('FamilyTaggingConfig').gk){
var l=[],
m=[];
for(var n=0;n<k.length;n++)
if(k[n].type!=='family_tags'&&
k[n].index!=-1000&&
k[n].type!=='hintText'){
l.push(k[n]);}else 

m.push(k[n]);


k=m.concat(l);

i.updateResults.call(this,k);}

var o=i.buildResults.call(this,k);
if(this.userEd)
k.shift();

if(!this.value)
k.shift();

return o;};
j.prototype.

show=function(){'use strict';



var k=c('DOM').scry(this.context,'.typeaheadBackdrop');
if(k.length>0)
c('CSS').addClass(k[0],'resultsPresent');

return i.show.call(this);};
j.prototype.

hide=function(){'use strict';
var k=c('DOM').scry(this.context,'.typeaheadBackdrop');
if(k.length>0)
c('CSS').removeClass(k[0],'resultsPresent');

return i.hide.call(this);};
j.prototype.





render=function(k,l,m){'use strict';
this.autoSelect=this.origAutoSelect&&k.length;
this.disableAutoSelect=k.length===0;
l=l.concat(this.getAdditionalResults());
i.render.call(this,k,l,m);};
j.prototype.






getItems=function(){'use strict';
var k=i.getItems.call(this);
if(!this.value)
k.shift();

if(this.userEd)
k.shift();

return k;};
j.prototype.

getSuggestions=function(){'use strict';
return this.suggestions;};
j.prototype.




setSuggestions=function(k){'use strict';
this.suggestions=k?k.map(String):[];
this.visible=!!this.suggestions.length;};
j.prototype.

addSuggestion=function(k){'use strict';
this.suggestions.unshift(k);};
j.prototype.

addTypeaheadFlip=function(k){'use strict';
c('CSS').addClass(this.element,k);};
j.prototype.

removeTypeaheadFlip=function(k){'use strict';
c('CSS').removeClass(this.element,k);};
j.prototype.






getContext=function(){'use strict';
var k=c('Parent').byClass(this.element,'typeaheadContainer');
if(k){
return k;}else 

return i.getContext.call(this);};

j.prototype.

getAdditionalResults=function(){'use strict';
return [];};



f.exports=j;}),null);

/** js/places/typeahead/renderers/NoTrucatingCompactTypeaheadRenderer.js */





__d('NoTrucatingCompactTypeaheadRenderer',['CompactTypeaheadRenderer'],(function a(b,c,d,e,f,g){










function h(i,j){
return c('CompactTypeaheadRenderer')(i,j);}


h.className='noTrucating compact';

f.exports=h;}),null);

/** js/ui/core/ui/overlay/layer-destroy-on-hide.js */


__d('legacy:LayerDestroyOnHide',['LayerDestroyOnHide'],(function a(b,c,d,e,f,g){

b.LayerDestroyOnHide=c('LayerDestroyOnHide');}),3);

/** js/ui/core/ui/overlay/layer-hide-on-blur.js */


__d('legacy:LayerHideOnBlur',['LayerHideOnBlur'],(function a(b,c,d,e,f,g){

b.LayerHideOnBlur=c('LayerHideOnBlur');}),3);

/** js/ui/core/ui/tokenizer/behaviors/FreeformTokenizerBehavior.js */




__d('FreeformTokenizerBehavior',['Event','Input','Keys'],(function a(b,c,d,e,f,g){





































function h(i,j){
var k=j.matcher&&new RegExp(j.matcher,'i'),
l=j.splitter&&new RegExp(j.splitter),
m=j.tokenize_on_blur!==false,
n=j.tokenize_on_paste!==false,
o=j.split_on_check===true,
p=j.select_on_comma!==false,
q=j.select_on_space===true,
r=j.never_submit===true;

function s(event){
var t=c('Input').getValue(i.getInput()).trim();

if(l&&event&&event.type=='paste'){
t=t.split(l);}else
if(l&&o){
t=t.split(l);}else 

t=[t];


var u=false;
for(var v=0;v<t.length;v++){
var w=t[v].trim();
if(w&&(!k||k.test(w))){
var x={uid:w,text:w,freeform:true};
i.addToken(i.createToken(x));
u=true;}}



if(event&&u){
i.getTypeahead().getCore().afterSelect();
event.kill();}}



i.subscribe('keydown',function(t,u){
var event=u.event,
v=c('Event').getKeyCode(event);
if(v==c('Keys').RETURN||
p&&v==c('Keys').COMMA||
q&&v==c('Keys').SPACE){
var w=i.getTypeahead().getView();
if(w.getSelection()){
w.select();
event.kill();}else 

s(event);}


if(v==c('Keys').RETURN&&r)
event.kill();});



i.subscribe('paste',function(t,u){
if(n)
setTimeout(s.bind(null,u.event),20);});



i.subscribe('blur',function(t,u){
if(m)
s();

i.getTypeahead().getCore().reset();});}



f.exports=h;}),null);

/** js/ui/core/ui/typeahead/behaviors/TypeaheadHintText.js */





__d('TypeaheadHintText',['emptyFunction'],(function a(b,c,d,e,f,g){




function h(i){'use strict';
this._typeahead=i;}
h.prototype.

enable=function(){'use strict';
this._typeahead.getCore().resetOnKeyup=false;};



Object.assign(h.prototype,
{disable:c('emptyFunction')});


f.exports=h;}),null);

/** js/ui/core/ui/typeahead/behaviors/LegacyHintTextTypeaheadBehavior.js */




__d('legacy:HintTextTypeaheadBehavior',['TypeaheadHintText'],(function a(b,c,d,e,f,g){



if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};
b.TypeaheadBehaviors.hintText=function(h){
h.enableBehavior(c('TypeaheadHintText'));};}),
3);

/** js/ui/layer/contextual_dialog/behaviors/ContextualDialogFooterLink.js */





__d('ContextualDialogFooterLink',['CSS','DOM','Event'],(function a(b,c,d,e,f,g){










function h(i){'use strict';
this._layer=i;}
h.prototype.

enable=function(){'use strict';
var i=this._layer.getRoot(),
j=c('DOM').scry(i,'.uiContextualDialogFooterLink')[0],








k='uiContextualDialogHoverFooterArrow';
this._subscriptions=
[c('Event').listen(j,'mouseenter',c('CSS').addClass.bind(null,i,k)),
c('Event').listen(j,'mouseleave',c('CSS').removeClass.bind(null,i,k))];};

h.prototype.

disable=function(){'use strict';
this._subscriptions.forEach(function(i){
i.remove();});

this._subscriptions=null;};



Object.assign(h.prototype,
{_subscriptions:null});


f.exports=h;}),null);

/** js/ui/layer/legacy/LegacyContextualDialog.js */






__d('LegacyContextualDialog',['csx','Arbiter','ArbiterMixin','ARIA','Bootloader','ContextualDialogFooterLink','ContextualThing','CSS','DataStore','DOM','Event','LayerAutoFocus','LayerRefocusOnHide','Locale','Overlay','Parent','Scroll','Style','Vector','$','getLegacyContextualDialogInstance','getOrCreateDOMID','getOverlayZIndex','shield'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits



































(k,c('Overlay'));j=i&&i.prototype;k.prototype.
_configure=function(l,m){'use strict';
j._configure.call(this,l,m);

var n=this.getRoot(),
o=c('DataStore').get.bind(null,n);
this.setAlignH(o('alignh','left'));
this.setOffsetX(o('offsetx',0));
this.setOffsetY(o('offsety',0));
this.setPosition(o('position','above'));
this._hasFooter=o('hasfooter',false);

if(this._hasFooter){
var p=c('DOM').scry(n,'.uiContextualDialogFooterLink')[0];
p&&this.enableBehavior(c('ContextualDialogFooterLink'));}

this.enableBehaviors(this._getDefaultBehaviors());


this._setContextSubscription=this.subscribe('beforeshow',function(){
this.unsubscribe(this._setContextSubscription);
this._setContextSubscription=null;
var r=o('context');
if(r){
this.setContext(c('$')(r));}else{

r=o('contextselector');
if(r)
this.setContext(c('DOM').find(document,r));}}.


bind(this));

this._content=c('DOM').scry(n,'.uiContextualDialogContent')[0];
if(this._content){
this._content.setAttribute('role','dialog');
var q=c('DOM').scry
(this._content,
'.legacyContextualDialogTitle')[
0];
if(q)
this._content.setAttribute('aria-labelledby',c('getOrCreateDOMID')(q));}



this._showSubscription=this.subscribe('show',function(){
var r=c('shield')(this.updatePosition,this);
this._resizeListener=c('Event').listen(window,'resize',r);
this._reflowSubscription=c('Arbiter').subscribe('reflow',r);
this._setupScrollListener(this._scrollParent);
c('ContextualThing').register(n,this.context);
c('Arbiter').inform('layer_shown',{type:'ContextualDialog'});}.
bind(this));
this._hideSubscription=this.subscribe('hide',function(){
this._teardownResizeAndReflowListeners();
this._teardownScrollListener();
c('Arbiter').inform('layer_hidden',{type:'ContextualDialog'});}.
bind(this));

return this;};
k.prototype.

_getDefaultBehaviors=function(){'use strict';
return j._getDefaultBehaviors.call(this).concat([c('LayerAutoFocus'),c('LayerRefocusOnHide')]);};



k.prototype.

_buildWrapper=function(l,m){'use strict';
var n=j._buildWrapper.call(this,l,m);
if(!this._shouldBuildWrapper)return n;

c('CSS').addClass(n,'uiContextualDialog');
return c('DOM').create
('div',
{className:'uiContextualDialogPositioner'},
n);};
k.prototype.

setWidth=function(l){'use strict';
this._width=Math.floor(l);
return this;};
k.prototype.

setFixed=function(l){'use strict';
l=!!l;
c('CSS').conditionClass(this.getRoot(),'uiContextualDialogFixed',l);
this._fixed=l;
return this;};
k.prototype.








setAlignH=function(l){'use strict';
this.alignH=l;
this._updateAlignmentClass();
this._shown&&this.updatePosition();
this.position&&this._updateArrow();
return this;};
k.prototype.












getContent=function(){'use strict';
return this._content;};
k.prototype.






getContext=function(){'use strict';
return this.context;};
k.prototype.







setContext=function(l){'use strict';
if(this._setContextSubscription){
this.unsubscribe(this._setContextSubscription);
this._setContextSubscription=null;}


l=c('$')(l);

if(this.context&&this.context!=l)
c('DataStore').remove(this.context,'LegacyContextualDialog');


this.context=l;

c('ARIA').setPopup(this.getCausalElement(),this.getRoot());




var m=
c('Parent').bySelector(l,"._4d3w");
this.setInsertParent(m||document.body);



if(this._scrollListener&&this._scrollParent!==m){
this._teardownScrollListener();
this._setupScrollListener(m);}


this._scrollParent=m;


var n=c('getOverlayZIndex')(l,this._insertParent);
c('Style').set(this.getRoot(),'z-index',n>200?n:'');

c('DataStore').set(this.context,'LegacyContextualDialog',this);
return this;};
k.prototype.





getCausalElement=function(){'use strict';
return j.getCausalElement.call(this)||this.context;};
k.prototype.









listen=function(l,m){'use strict';
return c('Event').listen(this.getRoot(),l,m);};
k.prototype.







setOffsetX=function(l){'use strict';
this.offsetX=parseInt(l,10)||0;
this._shown&&this.updatePosition();
return this;};
k.prototype.







setOffsetY=function(l){'use strict';
this.offsetY=parseInt(l,10)||0;
this._shown&&this.updatePosition();
return this;};
k.prototype.








setPosition=function(l){'use strict';
this.position=l;
for(var m in k.POSITION_TO_CLASS)
c('CSS').conditionClass
(this.getRoot(),
k.POSITION_TO_CLASS[m],
l==m);

this._updateAlignmentClass();
this._shown&&this.updatePosition();
this._updateArrow();
return this;};
k.prototype.






updatePosition=function(){'use strict';
if(!this.context)return false;

if(this._width)
c('Style').set(this._overlay,'width',this._width+'px');



var l=this._fixed?'viewport':'document',
m=c('Vector').getElementPosition(this.context,l),


n=this._scrollParent;
if(n)
m=m.
sub(c('Vector').getElementPosition(n,'document')).
add(c('Scroll').getLeft(n),c('Scroll').getTop(n));


var o=c('Vector').getElementDimensions(this.context),
p=this.position=='above'||this.position=='below',
q=c('Locale').isRTL();



if((this.position=='right'||
p&&this.alignH=='right')!=q)
m=m.add(o.x,0);



if(this.position=='below')
m=m.add(0,o.y);


var r=new (c('Vector'))(0,0);

if(p&&this.alignH=='center'){
r=r.add((o.x-this._width)/2,0);}else{



var s=p?o.x:o.y,
t=2*k.ARROW_INSET;
if(s<t){
var u=s/2-k.ARROW_INSET;
if(p&&this.alignH=='right'!=q)
u=-u;

r=r.add(p?u:0,p?0:u);}}




r=r.add(this.offsetX,this.offsetY);

if(q)
r=r.mul(-1,1);


m=m.add(r);





if(this._fixed)
m=new (c('Vector'))(m.x,m.y,'document');



m.setElementPosition(this.getRoot());


this._adjustVerticalPosition();
this._adjustHorizontalPosition();

return true;};
k.prototype.




scrollTo=function(){'use strict';
if(this.context)
c('Bootloader').loadModules(["DOMScroll"],
function(l){
l.scrollTo
(this.context,
true,
true);}.
bind(this),'LegacyContextualDialog');};



k.prototype.




destroy=function(){'use strict';
this.unsubscribe(this._showSubscription);
this.unsubscribe(this._hideSubscription);
if(this._setContextSubscription){
this.unsubscribe(this._setContextSubscription);
this._setContextSubscription=null;}

this._teardownScrollListener();
this._teardownResizeAndReflowListeners();
this.context&&c('DataStore').remove(this.context,'LegacyContextualDialog');
j.destroy.call(this);};
k.prototype.







_adjustVerticalPosition=function(){'use strict';

if(this.position!='left'&&this.position!='right'){
c('Style').set(this._overlay,'top','');
return;}


var l=this.getRoot(),
m=c('Vector').getElementPosition(l,'viewport').y,
n=c('Vector').getElementDimensions(this._overlay).y,
o=c('Vector').getViewportDimensions().y,


p=Math.min
(Math.max(m,k.MIN_TOP_GAP),
k.TOP_MARGIN),


q=
Math.min



(Math.max(0,
m+
n+
k.BOTTOM_MARGIN-
o),




Math.max(-p,m-p),






n-2*k.ARROW_INSET);


c('Style').set(this._overlay,'top',-1*q+'px');
c('Style').set(this._arrow,'top',k.ARROW_OFFSET+'px');
c('Style').set(this._arrow,'marginTop',q+'px');};
k.prototype.

_adjustHorizontalPosition=function(){'use strict';

if(this.position!='above'&&this.position!='below'||
this.alignH!='left'){
c('Style').set(this._overlay,'left','');
c('Style').set(this._overlay,'right','');
return;}


var l=this.getRoot(),
m=c('Vector').getElementPosition(l,'viewport').x,
n=c('Vector').getElementDimensions(this._overlay).x,
o=c('Vector').getViewportDimensions().x,

p=c('Locale').isRTL(),
q;


if(!p){
q=m+
n+
k.RIGHT_MARGIN-
o;}else 

q=k.LEFT_MARGIN+
n-
m;


q=Math.min

(Math.max(0,q),


n-2*k.ARROW_INSET);


c('Style').set
(this._overlay,
p?'right':'left',-1*q+'px');

c('Style').set
(this._arrow,
p?'right':'left',k.ARROW_OFFSET+'px');

c('Style').set
(this._arrow,
p?'marginRight':'marginLeft',q+'px');};

k.prototype.




_updateArrow=function(){'use strict';
var l=0;
if(this.position=='above'||this.position=='below')
switch(this.alignH){
case 'center':
l=50;
break;
case 'right':
l=100;
break;}



this._renderArrow
(k.POSITION_TO_ARROW[this.position],
l);};

k.prototype.







_renderArrow=function(l,m){'use strict';
for(var n in k.ARROW_CLASS)
c('CSS').conditionClass
(this._overlay,
k.ARROW_CLASS[n],
l==n);



c('CSS').conditionClass
(this._overlay,
'uiContextualDialogWithFooterArrowBottom',
l=='bottom'&&this._hasFooter);


if(l=='none')
return;



if(!this._arrow){
this._arrow=c('DOM').create('i',{className:'uiContextualDialogArrow'});
c('DOM').appendContent(this._overlay,this._arrow);}



c('Style').set(this._arrow,'top','');
c('Style').set(this._arrow,'left','');
c('Style').set(this._arrow,'right','');
c('Style').set(this._arrow,'margin','');


var o=l=='top'||l=='bottom',
p=o?c('Locale').isRTL()?'right':'left':'top';

m=m||0;
c('Style').set(this._arrow,p,m+'%');
var q=
k.ARROW_LENGTH+
k.ARROW_OFFSET*2,
r=
-(q*m/100-k.ARROW_OFFSET);

c('Style').set
(this._arrow,
'margin-'+p,
r+'px');};

k.prototype.

_updateAlignmentClass=function(){'use strict';
c('CSS').conditionClass
(this.getRoot(),
k.RIGHT_ALIGNED_CLASS,
(this.position=='above'||this.position=='below')&&
this.alignH=='right');};
k.prototype.






_setupScrollListener=function(l){'use strict';
this._scrollListener=c('Event').listen
(l||window,
'scroll',
c('shield')(this._adjustVerticalPosition,this));};
k.prototype.




_teardownScrollListener=function(){'use strict';
if(this._scrollListener){
this._scrollListener.remove();
this._scrollListener=null;}};

k.prototype.

_teardownResizeAndReflowListeners=function(){'use strict';
if(this._resizeListener){
this._resizeListener.remove();
this._resizeListener=null;}

if(this._reflowSubscription){
this._reflowSubscription.unsubscribe();
this._reflowSubscription=null;}};

k.










getInstance=function(l){'use strict';
return c('getLegacyContextualDialogInstance')(l);};
function k(){'use strict';i.apply(this,arguments);}


Object.assign(k,c('ArbiterMixin'),

{ARROW_OFFSET:15,


ARROW_LENGTH:16,


ARROW_INSET:22,


TOP_MARGIN:50,


BOTTOM_MARGIN:30,

LEFT_MARGIN:15,


RIGHT_MARGIN:30,



MIN_TOP_GAP:5,

POSITION_TO_CLASS:
{above:'uiContextualDialogAbove',
below:'uiContextualDialogBelow',
left:'uiContextualDialogLeft',
right:'uiContextualDialogRight'},


RIGHT_ALIGNED_CLASS:'uiContextualDialogRightAligned',


ARROW_CLASS:
{bottom:'uiContextualDialogArrowBottom',
top:'uiContextualDialogArrowTop',
right:'uiContextualDialogArrowRight',
left:'uiContextualDialogArrowLeft'},


POSITION_TO_ARROW:
{above:'bottom',
below:'top',
left:'right',
right:'left'}});



Object.assign(k.prototype,
{_scrollListener:null,
_scrollParent:null,
_width:null,
_fixed:false,
_hasFooter:false,
_showSubscription:null,
_hideSubscription:null,
_setContextSubscription:null,
_resizeListener:null,
_reflowSubscription:null});


f.exports=k;}),null);

/** js/ui/layer/legacy/LegacyContextualDialog-legacy.js */


__d('legacy:LegacyContextualDialog',['LegacyContextualDialog'],(function a(b,c,d,e,f,g){

b.LegacyContextualDialog=c('LegacyContextualDialog');}),3);
