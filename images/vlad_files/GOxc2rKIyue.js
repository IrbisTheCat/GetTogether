if (self.CavalryLogger) { CavalryLogger.start_js(["Ap6uU"]); }

/** __static_js_modules__/groupsellcomposeractionevents.js */




__d("GroupSellComposerActionEvents",[],(function a(b,c,d,e,f,g){

f.exports={COMPOSER_LOAD:"composer_load",LAUNCH_SELL_COMPOSER:"launch_sell_composer",SELL_COMPOSER_POST_TO_MARKETPLACE_SEEN:"sell_composer_post_to_marketplace_seen",CROSS_POST_CHECKBOX_SEEN:"cross_post_checkbox_seen",LAUNCH_NORMAL_COMPOSER:"launch_normal_composer",COMPOSER_FILL_TITLE:"composer_fill_title",COMPOSER_FILL_PRICE:"composer_fill_price",COMPOSER_FILL_PRICE_TYPE:"composer_fill_price_type",COMPOSER_FILL_DESCRIPTION:"composer_fill_description",COMPOSER_FILL_PICKUP_NOTE:"composer_fill_pickup_note",COMPOSER_FILL_CATEGORY:"composer_fill_category",LAUNCH_AUTOS_SELL_COMPOSER:"launch_autos_sell_composer",COMPOSER_FILL_AUTOS_MAKE:"composer_fill_autos_make",COMPOSER_FILL_AUTOS_MODEL:"composer_fill_autos_model",COMPOSER_FILL_AUTOS_VIN:"composer_fill_autos_vin",COMPOSER_FILL_AUTOS_YEAR:"composer_fill_autos_year",COMPOSER_FILL_AUTOS_ODOMETER:"composer_fill_autos_odometer",COMPOSER_SELECT_AUTOS_TYPEAHEAD:"composer_autos_typeahead",COMPOSER_LOCATION_DEFAULT_TYPE:"composer_location_default_type",COMPOSER_ADD_PHOTO:"composer_add_photo",COMPOSER_DELETE_PHOTO:"composer_delete_photo",COMPOSER_SUBMIT:"composer_submit",COMPOSER_SUBMIT_ENABLED:"composer_submit_enabled",COMPOSER_FILL_DESCRIPTION_REGULAR:"composer_fill_description_regular",COMPOSER_ADD_PHOTO_REGULAR:"composer_add_photo_regular",COMPOSER_DELETE_PHOTO_REGULAR:"composer_delete_photo_regular",COMPOSER_SUBMIT_REGULAR:"composer_submit_regular",COMPOSER_INVALID_FIELD_SUBMISSION:"composer_invalid_field_submission",GROUP_POST:"group_post",GROUP_NON_FOR_SALE_POST:"group_non_for_sale_post",COMPOSER_TUTORIAL_VIDEO_SHOW:"composer_tutorial_video_show",COMPOSER_TUTORIAL_VIDEO_COMPLETE:"composer_tutorial_video_complete",COMPOSER_TUTORIAL_VIDEO_CONFIRM:"composer_tutorial_video_confirm",COMPOSER_TUTORIAL_VIDEO_CLOSE:"composer_tutorial_video_close",COMPOSER_TUTORIAL_VIDEO_NO_FLASH:"composer_tutorial_video_no_flash",COMPOSER_REFINE_LOCATION_DIALOG_SEEN:"composer_refine_location_dialog_seen",COMPOSER_REFINE_LOCATION_DIALOG_SUBMITTED:"composer_refine_location_dialog_submitted",COMPOSER_REFINE_LOCATION_DIALOG_DISMISSED:"composer_refine_location_dialog_dismissed"};}),

null);

/** js/components/core/UI/MentionsInput/MentionsTypeaheadViewItem.react.js */





__d('MentionsTypeaheadViewItem.react',['cx','Badge.react','ImageBlock.react','React','TypeaheadViewItem','cssURL'],(function a(b,c,d,e,f,g,h){









var i=c('React').PropTypes,

j=c('React').createClass({displayName:'MentionsTypeaheadViewItem',
mixins:[c('TypeaheadViewItem').Mixin],
propTypes:babelHelpers['extends']({},
c('TypeaheadViewItem').propTypes,
{ariaDescribedBy:i.string}),





render:function k(){
var l=this.props.entry,
m=l.getAuxiliaryData(),

n=null;
if(m)
if(m.verified){
n=c('React').createElement(c('Badge.react'),{type:'verified',size:'xsmall'});}else
if(m.nonCoworker){
n=c('React').createElement(c('Badge.react'),{type:'work_non_coworker'});}else
if(m.workUser)
n=c('React').createElement(c('Badge.react'),{type:'work',size:'xsmall'});



var o=l.getPhoto()?
c('React').createElement('span',
{className:"_5u93",
style:{backgroundImage:c('cssURL')(l.getPhoto())}}):

c('React').createElement('span',null),

p=null;
if(l.getSubtitle())
p=
c('React').createElement('div',{className:"_5u95"},
l.getSubtitle());



var q="_5u91"+

(this.props.highlighted?' '+"_5u92":'');







return (c('React').createElement('li',
{role:'option',
className:q,
'aria-label':l.getTitle(),
'aria-selected':this.props.highlighted,
'aria-describedby':this.props.ariaDescribedBy,
onMouseDown:this._onSelect,
onMouseEnter:this._onHighlight},
c('React').createElement(c('ImageBlock.react'),{spacing:'medium'},
o,
c('React').createElement('div',null,
c('React').createElement('div',{className:"_5u94"},
l.getTitle(),
n),

p))));}});







f.exports=j;}),null);

/** js/components/MentionsInput/GroupMentionsTypeaheadView.react.js */





__d('GroupMentionsTypeaheadView.react',['cx','fbt','ix','Image.react','MentionsTypeaheadViewItem.react','React','uniqueID'],(function a(b,c,d,e,f,g,h,i,j){var k,l,










m=c('React').PropTypes,

n=i._(["No Results","7f10f87d829dcf8208a10d7d06040d4c"]);k=babelHelpers.inherits




(o,c('React').Component);l=k&&k.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.










state=
{emptyMembersHeaderID:c('uniqueID')(),
membersHeaderID:c('uniqueID')(),
nonMembersHeaderID:c('uniqueID')()},this.







$GroupMentionsTypeaheadView_renderItem=function(u,v){
var w=u===this.props.highlightedEntry;


return (c('React').createElement(c('MentionsTypeaheadViewItem.react'),
{key:u.getUniqueID(),
ariaDescribedBy:v,
entry:u,
highlighted:w,
onSelect:this.props.onSelect,
onHighlight:this.props.onHighlight,
onRenderHighlight:this.$GroupMentionsTypeaheadView_onRenderHighlight}));}.


bind(this),this.





$GroupMentionsTypeaheadView_renderHashtagItem=function(u){
var v=u===this.props.highlightedEntry;


return (c('React').createElement(c('MentionsTypeaheadViewItem.react'),
{key:u.getUniqueID(),
entry:u,
highlighted:v,
onSelect:this.props.onSelect,
onHighlight:this.props.onHighlight,
onRenderHighlight:this.props.onRenderHighlight}));}.


bind(this),this.

$GroupMentionsTypeaheadView_renderMembers=function(u){
var v=null;

if(u.length){
v=u.map(function(y,z){
var aa=z===0?this.state.membersHeaderID:null;
return this.$GroupMentionsTypeaheadView_renderItem(y,aa);}.
bind(this));}else 

v=
[c('React').createElement('li',
{className:"_2ph-",
key:this.state.emptyMembersHeaderID,
role:'option',
'aria-describedby':this.state.membersHeaderID,
'aria-label':n},
n)];




var w=null;
if(this.props.viewProps.member.aux)
w=
c('React').createElement('span',{className:"_1knr"},
' \u00b7 ',
this.props.viewProps.member.aux);



var x=
[c('React').createElement('li',
{key:this.state.membersHeaderID,
className:"_1kns"},
this.props.viewProps.member.title,
w)];


x.push.apply(x,v);
return x;}.
bind(this),this.

$GroupMentionsTypeaheadView_renderNonMembers=function(u){
if(!u.length)
return null;


var v=null;
if(this.props.viewProps.nonMember.aux)
v=
c('React').createElement('span',{className:"_1knr"},
' \u00b7 ',
this.props.viewProps.nonMember.aux);



var w=
[c('React').createElement('li',
{key:this.state.nonMembersHeaderID,
className:"_1kns"},
c('React').createElement(c('Image.react'),
{src:j("75329"),
className:"_1knt"}),

this.props.viewProps.nonMember.title,
v)];



w.push.apply(w,u.map(function(x,y){
var z=y===0?this.state.nonMembersHeaderID:null;
return this.$GroupMentionsTypeaheadView_renderItem(x,z);}.
bind(this)));
return w;}.
bind(this),q;}o.prototype.




render=function(){'use strict';
var p=[],
q=[],
r=[];

this.props.entries.forEach(function(v){var w=
v.getAuxiliaryData(),x=w.renderType;
if(x==='member'){
p.push(v);}else
if(x==='hashtag'){
r.push(v);}else 

q.push(v);});



var s="_5u8_"+


(!p.length&&!q.length&&!r.length?' '+"_5u90":''),


t=
p.length===0&&
q.length===0&&
r.length>0,

u=t?
this.props.entries.map(this.$GroupMentionsTypeaheadView_renderHashtagItem):
this.$GroupMentionsTypeaheadView_renderMembers(p).concat(this.$GroupMentionsTypeaheadView_renderNonMembers(q));


return (c('React').createElement('ul',
{className:s,
role:'listbox',
id:this.props.id},
u));};


o.propTypes={id:m.string,viewProps:m.object,highlightedEntry:m.object,entries:m.array.isRequired,onSelect:m.func.isRequired,onHighlight:m.func,onRenderHighlight:m.func};


f.exports=o;}),null);

/** www/__virtual__/x/XGroupSellNUXMarkAsSeenController.js */



__d("XGroupSellNUXMarkAsSeenController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/groups\/sell\/_nuxMarkAsSeen\/",{assoc_type:{type:"Int"},remove_node_id:{type:"String"},nux_type:{type:"Enum",enumType:1},group_id:{type:"Int"}});}),

null);

/** js/groups/sell/GroupSellNUX.js */





__d('GroupSellNUX',['Arbiter','AsyncRequest','DOM','Event','OnVisible','SubscriptionsHandler','XGroupSellNUXMarkAsSeenController'],(function a(b,c,d,e,f,g){










var h={};

function i
(l,
m){

var n=c('XGroupSellNUXMarkAsSeenController').getURIBuilder();
if(l){
n.setInt('assoc_type',l);}else
if(m)
n.setEnum('nux_type',m);

var o=n.getURI();
new (c('AsyncRequest'))(o).send();}


function j
(l,
m,
n,
o){


if(h[o])
return;


new (c('OnVisible'))
(m.getContext(),
function(){
if(h[o])
return;


h[o]=true;
m.show();

i(o);},

true);


l.addSubscriptions
(c('Arbiter').subscribe('page_transition',function(){
l.release();
if(m.isShown())
m.hide();}));}





var k=

{markAsSeen:function l(m){
i(null,m);},



setupDialogMarkAsSeen:function l(m,n){
m.subscribe('click',function(){
i(null,n);});},




setupTooltipMarkAsSeen:function l(m,n){
var o=new (c('SubscriptionsHandler'))();

new (c('OnVisible'))
(m.getContext(),
function(){
i(null,n);
m.show();},

false);


o.addSubscriptions
(c('Arbiter').subscribe('page_transition',function(){
if(m.isShown())
m.hide();

o.release();

o=null;}));},





manageComposerTooltip:function l
(m,
n,
o,
p){

var q=new (c('SubscriptionsHandler'))();



q.addSubscriptions
(c('Event').listen(m,'click',function(){
if(n.isShown())
n.hide();}),


c('Arbiter').subscribe('GroupSellComposer/launchedComposer',function(){
if(n.isShown())
n.hide();}));




j(q,n,o,p);},




manageTooltipAfterDelay:function l(m,n,o,p){
setTimeout(function(){
k.manageTooltip(m,n,o);},
p);},



manageTooltip:function l(m,n,o){
var p=new (c('SubscriptionsHandler'))();

j(p,m,n,o);},



setupOnClickMarkAsSeenAndRemove:function l
(m,
n,
o,
p){

var q=new (c('SubscriptionsHandler'))();
q.addSubscriptions
(c('Event').listen(m,'click',function(){
i(o,p);
if(n!==null)
n.hide();

q.release();

q=null;}),


c('Arbiter').subscribe('page_transition',function(){
q.release();

q=null;}));},




setupOnClickMarkAsSeen:function l
(m,
n,
o,
p){

var q=new (c('SubscriptionsHandler'))();
q.addSubscriptions
(c('Event').listen(m,'click',function(){
i(o,p);
if(typeof n==='object'){
c('DOM').remove(n);}else
if(n!==null)
n.hide();}),



c('Arbiter').subscribe('page_transition',function(){
q.release();

q=null;}));}};





f.exports=k;}),null);

/** js/litestand/composer/LitestandComposer.js */








__d('LitestandComposer',['Arbiter','Bootloader','ReactComposerEvents','ReactComposerIDGenerator','Run','SubscriptionsHandler'],(function a(b,c,d,e,f,g){








var h=600,

i={};






function j
(m,
n,
o){

c('Bootloader').loadModules
(["Animation","ComposerXController","ComposerXMarauderLogger","DOM","LitestandStream"],






function(p,
q,
r,
s,
t){

if(!t.isReady()){
t.addReadyListener(function(){
j(m,n,o);});

return;}


if(!c('ReactComposerIDGenerator').isComposerID(m))
q.reset(m);


if(!t||!n)
return;



if(i[m]){
s.insertAfter(i[m],n);
var u=i[m].parentNode;
if(u)
u.removeChild
(i[m]);


delete i[m];}else 

s.prependContent(t.getStreamRoot(),n);


new p(n).
from('opacity',0).
to('opacity',1).
duration(h).
go();

r.logCompleted(m);
o&&o();},
'LitestandComposer');}



var k={},
l=

{initComposer:function m(n){
if(k[n])
l.destructComposer(n);

k[n]=new (c('SubscriptionsHandler'))();

k[n].addSubscriptions
(c('Arbiter').subscribe
('LitestandComposer/publish',
function(o,p){
if(p.composer_id===n)
j(n,p.markup);}),




c('Arbiter').subscribe
('LitestandComposer/publishTemp',
function(o,p){
if(p.composer_id===n)
j(n,p.markup,function(){
if(p.markup)
i[n]=p.markup;});}),






c('Arbiter').subscribe
(c('ReactComposerEvents').COMPOSER_UNMOUNT+n,
l.destructComposer.bind(null,n)));



c('Run').onLeave(l.destructComposer.bind(null,n));},


destructComposer:function m(n){
var o=k[n];
if(o!=null){
o.release();
o=null;
delete k[n];}}};




f.exports=l;}),null);

/** js/react_composer/attachments/album/ReactComposerAlbumActions.js */





__d('ReactComposerAlbumActions',['ReactComposerAlbumActionType','ReactComposerDispatcher'],(function a(b,c,d,e,f,g){h.prototype.





selectorClicked=function(i){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerAlbumActionType').CREATE_ALBUM_SELECTOR_CLICKED});};

function h(){'use strict';}


f.exports=new h();}),null);

/** js/react_composer/attachments/album/ReactComposerAlbumAttachmentSelector.react.js */






__d('ReactComposerAlbumAttachmentSelector.react',['ReactComposerAlbumActions','ReactComposerContextMixin','DOM','DOMContainer.react','DOMQuery','ReactComponentWithPureRenderMixin','React','ReactDOM'],(function a(b,c,d,e,f,g){











var h=c('React').PropTypes,

i=c('React').createClass({displayName:'ReactComposerAlbumAttachmentSelector',
_containerRef:null,

mixins:[c('ReactComposerContextMixin'),c('ReactComponentWithPureRenderMixin')],




propTypes:
{isInMoreButton:h.bool,
createAlbumLink:h.any},


componentDidMount:function j(){




if(this.props.isInMoreButton)
setTimeout(function(){
if(this.props.createAlbumLink){
var k=this._getInputDOMNode();
if(k)
c('DOM').setAttributes(k,{tabindex:-1});}}.


bind(this),50);},



render:function j(){

return (c('React').createElement(c('DOMContainer.react'),
{display:'block',
onClick:this._onClick,
ref:function(k){this._containerRef=k;}.bind(this)},
this.props.createAlbumLink));},




_getInputDOMNode:function j(){
var k=
this._containerRef&&c('ReactDOM').findDOMNode(this._containerRef),
l=
k&&c('DOM').scry(k,'input');
return l&&l[0];},


_onClick:function j(k){








if(this.props.isInMoreButton&&
k.target&&
!c('DOMQuery').isNodeOfType(k.target,'input')){

var l=this._getInputDOMNode();
l&&l.click();

k.stopPropagation&&k.stopPropagation();}

c('ReactComposerAlbumActions').selectorClicked(this.context.composerID);}});



f.exports=i;}),null);

/** js/react_composer/attachments/doc/ReactComposerDocAttachmentSelector.react.js */






__d('ReactComposerDocAttachmentSelector.react',['ix','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerContextMixin','ReactComposerLoggingName','AsyncRequest','Bootloader','ReactComponentWithPureRenderMixin','React','URI'],(function a(b,c,d,e,f,g,h){














var i=c('React').PropTypes,

j=c('React').createClass({displayName:'ReactComposerDocAttachmentSelector',
mixins:[c('ReactComposerContextMixin'),c('ReactComponentWithPureRenderMixin')],




propTypes:
{isInMoreButton:i.bool,
label:i.node.isRequired,
createDocCampfireURI:i.string,
createDocFallbackURI:i.string.isRequired},


render:function k(){

return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),
{attachmentID:c('ReactComposerAttachmentType').DOC,
label:this.props.label,
icon:h("85214"),
'data-testid':'create-doc-attachment-selector',
onSelected:this._onSelected,
loggingName:c('ReactComposerLoggingName').DOC_TAB_SELECTOR,
tabIndex:this.props.isInMoreButton?'-1':undefined}));},




_onSelected:function k(){
if(this.props.createDocCampfireURI){
c('Bootloader').loadModules(["AsyncDialog"],function(l){
var m=new (c('AsyncRequest'))(this.props.createDocCampfireURI).
setMethod('POST').
setStatusElement(this.context.composerID);
l.send(m);}.
bind(this),'ReactComposerDocAttachmentSelector.react');}else 

new (c('URI'))(this.props.createDocFallbackURI).go();}});




f.exports=j;}),null);

/** js/react_composer/attachments/event/ReactComposerEventAttachmentSelector.react.js */






__d('ReactComposerEventAttachmentSelector.react',['ix','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerContextMixin','ReactComposerLoggingName','AsyncRequest','Bootloader','ReactComponentWithPureRenderMixin','React'],(function a(b,c,d,e,f,g,h){













var i=c('React').PropTypes,

j=c('React').createClass({displayName:'ReactComposerEventAttachmentSelector',
mixins:[c('ReactComposerContextMixin'),c('ReactComponentWithPureRenderMixin')],




propTypes:
{isInMoreButton:i.bool,
label:i.node.isRequired,
createEventURI:i.string.isRequired},


render:function k(){

return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),
{attachmentID:c('ReactComposerAttachmentType').EVENT,
label:this.props.label,
icon:h("40536"),
'data-testid':'create-event-attachment-selector',
onSelected:this._onSelected,
loggingName:c('ReactComposerLoggingName').EVENT_TAB_SELECTOR,
tabIndex:this.props.isInMoreButton?'-1':undefined}));},




_onSelected:function k(){
c('Bootloader').loadModules(["AsyncDialog"],function(l){
var m=new (c('AsyncRequest'))(this.props.createEventURI).
setMethod('POST').
setStatusElement(this.context.composerID);
l.send(m);}.
bind(this),'ReactComposerEventAttachmentSelector.react');}});



f.exports=j;}),null);

/** js/react_composer/attachments/file/ReactComposerFileAttachmentSelector.react.js */






__d('ReactComposerFileAttachmentSelector.react',['fbt','ix','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerLoggingName','ReactComponentWithPureRenderMixin','React'],(function a(b,c,d,e,f,g,h,i){











var j=c('React').PropTypes,

k=c('React').createClass({displayName:'ReactComposerFileAttachmentSelector',
mixins:[c('ReactComponentWithPureRenderMixin')],

propTypes:
{isInMoreButton:j.bool,
label:j.string},


getDefaultProps:function l(){

return {label:h._(["Add File","e2e4fa18af5f85559533e54d5e72eb8e"])};},






render:function l(){

return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),
{attachmentID:c('ReactComposerAttachmentType').FILE,
label:this.props.label,
icon:i("40530"),
loggingName:c('ReactComposerLoggingName').FILE_TAB_SELECTOR,
tabIndex:this.props.isInMoreButton?'-1':undefined}));}});





f.exports=k;}),null);

/** www/__virtual__/x/XReactComposerFileAttachmentBootstrapController.js */



__d("XReactComposerFileAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/file\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"Int",required:true}});}),

null);

/** js/react_composer/attachments/file/ReactComposerFileLazyAttachment.react.js */






__d('ReactComposerFileLazyAttachment.react',['ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','XReactComposerFileAttachmentBootstrapController','ActorURI','Bootloader','React'],(function a(b,c,d,e,f,g){











var h=c('React').createClass({displayName:'ReactComposerFileLazyAttachment',
mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],



statics:
{attachmentID:c('ReactComposerAttachmentType').FILE},


bootload:function i(j){
if(this.props.bootload){
this.props.bootload(j);}else 

c('Bootloader').loadModules
(["ReactComposerFileAttachment.react"],
j,'ReactComposerFileLazyAttachment.react');},




getBootstrapURI:function i(){
return c('ActorURI').create
(c('XReactComposerFileAttachmentBootstrapController').
getURIBuilder().
setString('composer_id',this.context.composerID).
setEnum('composer_type',this.context.composerType).
setInt('target_id',this.context.targetID).
getURI(),
this.context.actorID);}});




f.exports=h;}),null);

/** js/react_composer/attachments/game/ReactComposerGameAttachmentSelector.react.js */






__d('ReactComposerGameAttachmentSelector.react',['fbt','ix','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerLoggingName','React','ReactComposerContextMixin','ReactComponentWithPureRenderMixin'],(function a(b,c,d,e,f,g,h,i){












var j=c('React').PropTypes,

k=c('React').createClass({displayName:'ReactComposerGameAttachmentSelector',
mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin')],




propTypes:
{isInMoreButton:j.bool,
label:j.string},


_getRenderButton:function l(){
return this.refs.play_game_selector;},


getDefaultProps:function l(){

return {label:h._(["Play games","1ecdbe92ccef6601fbd5b3939fdb1254"]),



alignment:'left'};},



render:function l(){

return (c('React').createElement('div',null,
c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),
{ref:'play_game_selector',
attachmentID:c('ReactComposerAttachmentType').GAME,
label:this.props.label,
icon:i("85231"),
loggingName:c('ReactComposerLoggingName').GAME_TAB_SELECTOR,
tabIndex:this.props.isInMoreButton?'-1':undefined})));}});






f.exports=k;}),null);

/** www/__virtual__/x/XReactComposerGameAttachmentBootstrapController.js */



__d("XReactComposerGameAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/game\/bootstrap\/",{composer_id:{type:"String",required:true},target_id:{type:"String",required:true}});}),

null);

/** js/react_composer/attachments/game/ReactComposerGameLazyAttachment.react.js */






__d('ReactComposerGameLazyAttachment.react',['invariant','ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','ReactComposerBootloaderPropTypes','XReactComposerGameAttachmentBootstrapController','ActorURI','React'],(function a(b,c,d,e,f,g,h){













var i=c('React').createClass({displayName:'ReactComposerGameLazyAttachment',
mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],



statics:
{attachmentID:c('ReactComposerAttachmentType').GAME},


propTypes:
{bootloader:c('ReactComposerBootloaderPropTypes').isRequired},


bootload:function j(k){

this.props.bootloader.questionAttachment||h(0,
'the questionAttachment bootloader must be defined');


this.props.bootloader.gameAttachment(k);},


getBootstrapURI:function j(){
return c('ActorURI').create
(c('XReactComposerGameAttachmentBootstrapController').
getURIBuilder().
setString('composer_id',this.context.composerID).
setString('target_id',this.context.targetID).
getURI(),
this.context.actorID);}});





f.exports=i;}),null);

/** js/react_composer/attachments/group_qa/ReactComposerGroupQAAttachmentSelector.react.js */






__d('ReactComposerGroupQAAttachmentSelector.react',['fbt','ix','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerLoggingName','ReactComponentWithPureRenderMixin','React'],(function a(b,c,d,e,f,g,h,i){











var j=c('React').PropTypes,

k=c('React').createClass({displayName:'ReactComposerGroupQAAttachmentSelector',
mixins:[c('ReactComponentWithPureRenderMixin')],

propTypes:
{isInMoreButton:j.bool,
label:j.string},


getDefaultProps:function l(){

return {label:h._(["Ask Question","2aeb3d60e3130839d644f648e69d254b"])};},






render:function l(){

return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),
{attachmentID:c('ReactComposerAttachmentType').QA,
label:this.props.label,
icon:i("40547"),
loggingName:c('ReactComposerLoggingName').QA_TAB_SELECTOR,
tabIndex:this.props.isInMoreButton?'-1':undefined}));}});





f.exports=k;}),null);

/** www/__virtual__/x/XReactComposerGroupQAAttachmentBootstrapController.js */



__d("XReactComposerGroupQAAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/group_qa\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"String",required:true}});}),

null);

/** js/react_composer/attachments/group_qa/ReactComposerGroupQALazyAttachment.react.js */






__d('ReactComposerGroupQALazyAttachment.react',['invariant','ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','ReactComposerBootloaderPropTypes','XReactComposerGroupQAAttachmentBootstrapController','ActorURI','React'],(function a(b,c,d,e,f,g,h){













var i=c('React').createClass({displayName:'ReactComposerGroupQALazyAttachment',
mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],



statics:
{attachmentID:c('ReactComposerAttachmentType').QA},


propTypes:
{bootloader:c('ReactComposerBootloaderPropTypes').isRequired},


bootload:function j(k){

this.props.bootloader.groupQAAttachment||h(0,
'the questionAttachment bootloader must be defined');



this.props.bootloader.groupQAAttachment(k);},


getBootstrapURI:function j(){
return c('ActorURI').create
(c('XReactComposerGroupQAAttachmentBootstrapController').
getURIBuilder().
setString('composer_id',this.context.composerID).
setEnum('composer_type',this.context.composerType).
setString('target_id',this.context.targetID).
getURI(),
this.context.actorID);}});





f.exports=i;}),null);

/** js/react_composer/attachments/mixins/ReactComposerSellComposerNUXMixin.js */





__d('ReactComposerSellComposerNUXMixin',['fbt','React','GroupSellNUX','XUIAmbientNUX.react'],(function a(b,c,d,e,f,g,h){
'use strict';







var i=

{getInitialState:function j(){

return {sellComposerNUXDismissed:false};},



componentDidMount:function j(){

if(this.props.shouldShowSellComposerNonFSGroupNUX&&
!this._getSeenNux()){

this._setSeenNux();
c('GroupSellNUX').markAsSeen(this.props.saleComposerNUXType);}},



renderLayers:function j(){

if(!this.props.shouldShowSellComposerNonFSGroupNUX||
this.state.sellComposerNUXDismissed||
this._getSeenNux())

return {};



return {dialog:
c('React').createElement(c('XUIAmbientNUX.react'),
{alignment:this.props.alignment,
contextRef:function(){return this._getRenderButton();}.bind(this),
onCloseButtonClick:
function(){return this.setState({sellComposerNUXDismissed:true});}.bind(this),

position:'above',
shown:true},h._(["Now you can post items you want to sell.","42888dbbf395757b1861e2ee424e3057"]))};}};










f.exports=i;}),null);

/** js/react_composer/attachments/sell/ReactComposerSellActionType.js */





__d('ReactComposerSellActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirrorRecursive')
({CLEAR_LOCATION:null,
CLEAR_CATEGORY:null,
POST_BUTTON_ENABLED:null,
SAVE_CATEGORY:null,
SAVE_LOCATION:null,
SAVE_PICKUP_NOTE:null,
SAVE_PRICE:null,
SAVE_PRICE_TYPE:null,
SAVE_TITLE:null,
SAVE_AUDIENCE_TARGET_IDS:null,
SET_SELL_CONFIG:null,
REGISTER_COMPOSER:null,
POST_TO_MARKETPLACE_SEEN:null,
TOGGLE_NEARBY_LOCATION_CHECKED:null,
SET_POST_TO_MARKETPLACE:null,
CROSS_POST_CHECKBOX_SEEN:null,
TOGGLE_CROSS_POST_CHECKBOX:null,
SET_CURRENCY:null,
SELL_INTERCEPT:null,
SELL_INTERCEPT_ATTEMPT:null,
MARKETPLACE_NUX_SEEN:null,
MARKETPLACE_INTERCEPT_ATTEMPT:null,
TOGGLE_NLU_EDUCATION:null,
TOGGLE_AUDIENCE_SELECTOR_NUX:null,
SHOW_URL_INTERCEPT:null,
DESCRIPTION_CHANGED:null,
SUBMIT:null,
LOAD:null},
'ReactComposerSellActionType');}),null);

/** shared/groupsell/GroupSellComposerLogger.js */





__d('GroupSellComposerLogger',['BanzaiLogger','GroupSellComposerActionEvents'],(function a(b,c,d,e,f,g){



var h=
{log:function i
(j,
event,
k,
l){

c('BanzaiLogger').log
('GroupSellComposerActionsLoggerConfig',

{event:event,
group_id:j,
is_edit:k,
is_marketplace:l});},




logComposerSubmit:function i
(j,
k,
l,
m,
n,
o,
p,
q,
r,
s){

c('BanzaiLogger').log
('GroupSellComposerActionsLoggerConfig',

{event:c('GroupSellComposerActionEvents').COMPOSER_SUBMIT,
group_id:j,
title:k,
price_currency:l,
price_amount:m,
description:n,
pickup_note:o,
num_photos:p,
is_edit:q,
is_intercept:r,
is_marketplace:s});},




logComposerNonForsaleSubmit:function i
(j,
k,
l){

c('BanzaiLogger').log
('GroupSellComposerActionsLoggerConfig',

{event:c('GroupSellComposerActionEvents').COMPOSER_SUBMIT_REGULAR,
group_id:j,
description:k,
is_edit:l});},




logVideoEvent:function i(event,j){
c('BanzaiLogger').log
('GroupSellComposerActionsLoggerConfig',

{event:event,
video_time_position:j});}};





f.exports=h;}),null);

/** js/react_composer/attachments/sell/ReactComposerSellStore.js */






__d('ReactComposerSellStore',['fbt','ReactComposerSellActionType','ReactComposerStoreBase','GroupSellComposerActionEvents','GroupSellComposerLogger','ReactComposerPhotoStore','Set'],(function a(b,c,d,e,f,g,h){var i,j,










k=5,
l=100,
m=9;i=babelHelpers.inherits

(n,c('ReactComposerStoreBase'));j=i&&i.prototype;




function n(){'use strict';
var o;
j.constructor.call(this,
function(){
var p=h._(["Select category","14bfe66b8af081bdb65dddf74934b130"]);




return {audienceTargetIDs:new (c('Set'))(),
categories:[],
locationID:'',
nearbyLocationChecked:false,
defaultCategoryText:p,
savedCategoryID:null,
savedCategoryText:p,
showPostNearby:false,
showPostToProfile:false,
marketplaceCheckboxText:null,
marketplaceIsAvailable:false,
marketplaceisCompulsory:false,
marketplaceShouldShowIntercept:false,
marketplaceShouldShowNux:false,
marketplaceNuxLabel:'',
marketplaceUpsellTitleLabel:'',
marketplaceUpsellSubtitleLabel:'',
marketplaceUpsellHelpTextLabel:'',
marketplaceInterceptAcceptButtonLabel:'',
marketplaceInterceptDeclineButtonLabel:'',
marketplaceUpsellAcceptButtonLabel:'',
marketplaceUpsellDeclineButtonLabel:'',
showAudienceSelector:false,
showAudienceSelectorNUX:false,
showMarketplaceInAudienceSelector:false,
showFreePriceHint:false,
showPriceTypeSelector:false,
showZipcodeField:false,
showAddressTypeahead:false,
isLocationMandatory:false,
crossPostChecked:false,
showCrossPostCheckbox:false,
showTypeaheadTitle:false,
showTypeaheadCategories:false,
title:'',
pickupNote:'',
price:'',
priceType:'',
postDirectlyToMarketplace:false,
description:'',
imageURL:'',
interceptWords:[],
interceptWordsAfterNumber:[],

interceptSell:false,
interceptSellAttempt:false,
showCategoriesFirst:false,
isCategoryOptional:false,
categoryTitlePlaceholder:{},
autos_category:{},
odometerUnits:'kilometers',
showAutosForSellOptions:false,
showAutosVINField:false,
showAutosOdometerUnitsField:false,
showIPScanningNUX:false,
ipScanningNotifEnabled:false,
showURLIntercept:false,
isEdit:false,
targetID:null,
shouldUseIPScanningEUText:false,
inputsEverChanged:
{title:false,
price:false,
priceType:false,
description:false,
imageURL:false,
pickupNode:false,
category:false,
postButton:false},

latitude:null,
longitude:null,
languageID:''};},


function(p){
switch(p.type){
case c('ReactComposerSellActionType').CLEAR_LOCATION:
o&&o.$ReactComposerSellStore_handleClearLocation(p);
break;
case c('ReactComposerSellActionType').CLEAR_CATEGORY:
o&&o.$ReactComposerSellStore_handleClearCategory(p);
break;
case c('ReactComposerSellActionType').SAVE_AUDIENCE_TARGET_IDS:
o&&o.$ReactComposerSellStore_handleSaveAudienceTargetIDs(p);
break;
case c('ReactComposerSellActionType').SAVE_CATEGORY:
o&&o.$ReactComposerSellStore_handleSaveCategory(p);
break;
case c('ReactComposerSellActionType').SAVE_LOCATION:
o&&o.$ReactComposerSellStore_handleSaveLocation(p);
break;
case c('ReactComposerSellActionType').SAVE_PICKUP_NOTE:
o&&o.$ReactComposerSellStore_handleSavePickupNote(p);
break;
case c('ReactComposerSellActionType').SAVE_PRICE:
o&&o.$ReactComposerSellStore_handleSavePrice(p);
break;
case c('ReactComposerSellActionType').SAVE_PRICE_TYPE:
o&&o.$ReactComposerSellStore_handleSavePriceType(p);
break;
case c('ReactComposerSellActionType').SAVE_TITLE:
o&&o.$ReactComposerSellStore_handleSaveTitle(p);
break;
case c('ReactComposerSellActionType').SET_SELL_CONFIG:
o&&o.$ReactComposerSellStore_handleSetSellConfig(p);
break;
case c('ReactComposerSellActionType').TOGGLE_NEARBY_LOCATION_CHECKED:
o&&o.$ReactComposerSellStore_handleToggleNearbyLocationChecked(p);
break;
case c('ReactComposerSellActionType').SET_POST_TO_MARKETPLACE:
o&&o.$ReactComposerSellStore_handleSetPostToMarketplace(p);
break;
case c('ReactComposerSellActionType').TOGGLE_CROSS_POST_CHECKBOX:
o&&o.$ReactComposerSellStore_handleToggleCrossPostChecked(p);
break;
case c('ReactComposerSellActionType').SET_CURRENCY:
o&&o.$ReactComposerSellStore_handleSetCurrency(p);
break;
case c('ReactComposerSellActionType').SELL_INTERCEPT:
o&&o.$ReactComposerSellStore_handleInterceptSell(p);
break;
case c('ReactComposerSellActionType').SELL_INTERCEPT_ATTEMPT:
o&&o.$ReactComposerSellStore_handleInterceptSellAttempt(p);
break;
case c('ReactComposerSellActionType').MARKETPLACE_NUX_SEEN:
o&&o.$ReactComposerSellStore_handleMarketplaceNUXSeen(p);
break;
case c('ReactComposerSellActionType').MARKETPLACE_INTERCEPT_ATTEMPT:
o&&o.$ReactComposerSellStore_handleMarketplaceInterceptAttempt(p);
break;
case c('ReactComposerSellActionType').TOGGLE_NLU_EDUCATION:
o&&o.$ReactComposerSellStore_handleToggleNLUEducation(p);
break;
case c('ReactComposerSellActionType').TOGGLE_AUDIENCE_SELECTOR_NUX:
o&&o.$ReactComposerSellStore_handleToggleAudienceSelectorNUX(p);
break;
case c('ReactComposerSellActionType').SHOW_URL_INTERCEPT:
o&&o.$ReactComposerSellStore_handleShowURLIntercept(p);
break;
case c('ReactComposerSellActionType').DESCRIPTION_CHANGED:
o&&o.$ReactComposerSellStore_handleDescriptionChanged(p);
break;
case c('ReactComposerSellActionType').POST_BUTTON_ENABLED:
o&&o.$ReactComposerSellStore_handlePostButtonEnabled(p);
break;
case c('ReactComposerSellActionType').LOAD:
o&&o.$ReactComposerSellStore_handleLoad(p);
break;
case c('ReactComposerSellActionType').SUBMIT:
o&&o.$ReactComposerSellStore_handleSubmit(p);
break;}});




this.$ReactComposerSellStore_showNLUEducation=false;
o=this;}
n.prototype.

getInterceptSell=function(o){'use strict';
return this.getComposerData(o).interceptSell;};
n.prototype.

getInterceptSellAttempt=function(o){'use strict';
return this.getComposerData(o).interceptSellAttempt;};
n.prototype.

isPostButtonEnabled=function(o){'use strict';
var p=this.getComposerData(o),
q=
p.isCategoryOptional||
!p.categories.length||
p.savedCategoryID,
r=
!p.isLocationMandatory||

p.showZipcodeField&&
p.pickupNote.length>=k||


!p.showZipcodeField&&
p.pickupNote.length>=1;


return !!(p.title.length&&
p.price.length&&
q&&
r);};

n.prototype.

getAudienceTargetIDs=function(o){'use strict';
return this.getComposerData(o).audienceTargetIDs;};
n.prototype.

getCategories=function(o){'use strict';
return this.getComposerData(o).categories;};
n.prototype.

getCategoryID=function(o){'use strict';
return this.getComposerData(o).savedCategoryID;};
n.prototype.

getCategoryText=function(o){'use strict';
return this.getComposerData(o).savedCategoryText;};
n.prototype.

getCategoryTextForID=function(o,p){'use strict';
var q=this.getComposerData(o).categories;
if(q&&q.length>0)
var r=q.find
(function(s){
return s.id==p;});



return r?r.text:'';};
n.prototype.

getCurrency=function(o){'use strict';
return this.getComposerData(o).currency;};
n.prototype.

getCurrencySymbol=function(o){'use strict';
return this.getComposerData(o).currencySymbol;};
n.prototype.

getIsLocationMandatory=function(o){'use strict';
return this.getComposerData(o).isLocationMandatory;};
n.prototype.

getLocationID=function(o){'use strict';
return this.getComposerData(o).locationID;};
n.prototype.

getNearbyLocationName=function(o){'use strict';
return this.getComposerData(o).nearbyLocationName;};
n.prototype.

getMaxCharactersForPrice=function(o){'use strict';
return m;};
n.prototype.

getMaxCharactersForPickupNote=function(o){'use strict';
return l;};
n.prototype.

getMaxCharactersForTitle=function(o){'use strict';
return l;};
n.prototype.

getPickupNoteText=function(o){'use strict';
return this.getComposerData(o).pickupNote;};
n.prototype.

getPrice=function(o){'use strict';
return this.getComposerData(o).price;};
n.prototype.

getPriceType=function(o){'use strict';
return this.getComposerData(o).priceType;};
n.prototype.

getTitleText=function(o){'use strict';
return this.getComposerData(o).title;};
n.prototype.

getDescText=function(o){'use strict';
return this.getComposerData(o).description;};
n.prototype.

getFetchedImageURL=function(o){'use strict';
return this.getComposerData(o).imageURL;};
n.prototype.

getYear=function(o){'use strict';
return this.getComposerData(o).year;};
n.prototype.

getOdometerValue=function(o){'use strict';
return this.getComposerData(o).odometer;};
n.prototype.

getOdometerUnits=function(o){'use strict';
return this.getComposerData(o).odometerUnits;};
n.prototype.

getInterceptWords=function(o){'use strict';
return this.getComposerData(o).interceptWords;};
n.prototype.

getInterceptedWordsAfterNumber=function(o){'use strict';
return this.getComposerData(o).interceptWordsAfterNumber;};
n.prototype.

getMarketplaceCheckboxText=function(o){'use strict';
return this.getComposerData(o).marketplaceCheckboxText;};
n.prototype.

getMarketplaceShouldShowIntercept=function(o){'use strict';
return this.getComposerData(o).marketplaceShouldShowIntercept;};
n.prototype.

getMarketplaceShouldShowNux=function(o){'use strict';
return this.getComposerData(o).marketplaceShouldShowNux;};
n.prototype.

getMarketplaceNuxLabel=function(o){'use strict';
return this.getComposerData(o).marketplaceNuxLabel;};
n.prototype.

getMarketplaceUpsellTitleLabel=function(o){'use strict';
return this.getComposerData(o).marketplaceUpsellTitleLabel;};
n.prototype.

getMarketplaceUpsellSubtitleLabel=function(o){'use strict';
return this.getComposerData(o).marketplaceUpsellSubtitleLabel;};
n.prototype.

getMarketplaceUpsellHelpTextLabel=function(o){'use strict';
return this.getComposerData(o).marketplaceUpsellHelpTextLabel;};
n.prototype.

getMarketplaceInterceptAcceptButtonLabel=function(o){'use strict';
return this.getComposerData(o).
marketplaceInterceptAcceptButtonLabel;};
n.prototype.

getMarketplaceInterceptDeclineButtonLabel=function(o){'use strict';
return this.getComposerData(o).
marketplaceInterceptDeclineButtonLabel;};
n.prototype.

getMarketplaceUpsellAcceptButtonLabel=function(o){'use strict';
return this.getComposerData(o).
marketplaceUpsellAcceptButtonLabel;};
n.prototype.

getMarketplaceUpsellDeclineButtonLabel=function(o){'use strict';
return this.getComposerData(o).
marketplaceUpsellDeclineButtonLabel;};
n.prototype.

isCategorySelected=function(o){'use strict';
return !!this.getComposerData(o).savedCategoryID;};
n.prototype.

isNearbyLocationChecked=function(o){'use strict';
return this.getComposerData(o).nearbyLocationChecked;};
n.prototype.

isPostNearbyEnabled=function(o){'use strict';
return !!this.getComposerData(o).showPostNearby;};
n.prototype.

isPostToProfileEnabled=function(o){'use strict';
return !!this.getComposerData(o).showPostToProfile;};
n.prototype.

isCrossPostChecked=function(o){'use strict';
return this.getComposerData(o).crossPostChecked;};
n.prototype.

isCrossPostCheckboxEnabled=function(o){'use strict';
return this.getComposerData(o).showCrossPostCheckbox;};
n.prototype.

isAudienceSelectorEnabled=function(o){'use strict';
return this.getComposerData(o).showAudienceSelector;};
n.prototype.

shouldShowAudienceSelectorNUX=function(o){'use strict';
return this.getComposerData(o).showAudienceSelectorNUX;};
n.prototype.

isMarketplaceInAudienceSelector=function(o){'use strict';
return this.getComposerData(o).showMarketplaceInAudienceSelector;};
n.prototype.

isFreePriceHintEnabled=function(o){'use strict';
return this.getComposerData(o).showFreePriceHint;};
n.prototype.

isPriceTypeSelectorEnabled=function(o){'use strict';
return this.getComposerData(o).showPriceTypeSelector;};
n.prototype.

isZipcodeFieldEnabled=function(o){'use strict';
return this.getComposerData(o).showZipcodeField;};
n.prototype.

isAddressTypeaheadEnabled=function(o){'use strict';
return this.getComposerData(o).showAddressTypeahead;};
n.prototype.

showCategoriesFirst=function(o){'use strict';
return this.getComposerData(o).showCategoriesFirst;};
n.prototype.

marketplaceIsAvailable=function(o){'use strict';
return this.getComposerData(o).marketplaceIsAvailable;};
n.prototype.

marketplaceIsCompulsory=function(o){'use strict';
return this.getComposerData(o).marketplaceIsCompulsory;};
n.prototype.

isCategoryOptional=function(o){'use strict';
return this.getComposerData(o).isCategoryOptional;};
n.prototype.

isTypeaheadTitleEnabled=function(o){'use strict';
return this.getComposerData(o).showTypeaheadTitle;};
n.prototype.

isTypeaheadCategoriesEnabled=function(o){'use strict';
return this.getComposerData(o).showTypeaheadCategories;};
n.prototype.

isAutosEnabled=function(o){'use strict';
return this.getComposerData(o).showAutosForSellOptions;};
n.prototype.

isIPScanningNotifEnabled=function(o){'use strict';
return this.getComposerData(o).ipScanningNotifEnabled;};
n.prototype.

isIPScanningNUXShowing=function(o){'use strict';
return this.getComposerData(o).showIPScanningNUX;};
n.prototype.

shouldUseIPScanningEUText=function(o){'use strict';
return this.getComposerData(o).shouldUseIPScanningEUText;};
n.prototype.

shouldAttemptMarketplaceIntercept=function(o){'use strict';
if(this.marketplaceIsCompulsory(o))
return false;


return this.isPostNearbyEnabled(o)&&
this.getMarketplaceShouldShowIntercept(o)&&
!this.isNearbyLocationChecked(o)&&
c('ReactComposerPhotoStore').getPhotos(o).size>0;};
n.prototype.


shouldShowNLUInterceptNUX=function(o){'use strict';
return false;};
n.prototype.

showNLUIntercept=function(o){'use strict';
return false;};
n.prototype.

showAutosForSellOptions=function(o){'use strict';
return this.getComposerData(o).showAutosForSellOptions;};
n.prototype.

showAutosVINField=function(o){'use strict';
return this.getComposerData(o).showAutosVINField;};
n.prototype.

showAutosOdometerUnitsField=function(o){'use strict';
return this.getComposerData(o).showAutosOdometerUnitsField;};
n.prototype.

showNLUEducation=function(o){'use strict';
return this.$ReactComposerSellStore_showNLUEducation;};
n.prototype.

showURLIntercept=function(o){'use strict';
return this.getComposerData(o).showURLIntercept;};
n.prototype.

getLatitude=function(o){'use strict';
return this.getComposerData(o).latitude;};
n.prototype.

getLongitude=function(o){'use strict';
return this.getComposerData(o).longitude;};
n.prototype.

getLanguageID=function(o){'use strict';
return this.getComposerData(o).languageID;};
n.prototype.

getPostDirectlyToMarketplace=function(o){'use strict';
return this.getComposerData(o).postDirectlyToMarketplace;};
n.prototype.

$ReactComposerSellStore_handleClearLocation=function(o){'use strict';
var p=this.validateAction(o,'composerID'),

q=this.getComposerData(p);
q.locationID=q.pickupNote='';

this.emitChange(p);};
n.prototype.

$ReactComposerSellStore_handleClearCategory=function(o){'use strict';
var p=this.validateAction(o,'composerID'),

q=this.getComposerData(p);
q.savedCategoryID=null;
q.savedCategoryText=q.defaultCategoryText;

this.emitChange(p);};
n.prototype.

$ReactComposerSellStore_handleSaveAudienceTargetIDs=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','audienceTargetIDs']),q=p[0],r=p[1],


s=this.getComposerData(q);
s.audienceTargetIDs=r;
this.emitChange(q);};
n.prototype.

$ReactComposerSellStore_handleSaveCategory=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','categoryID','categoryText']),q=p[0],r=p[1],s=p[2],


t=this.getComposerData(q);
if(!t.inputsEverChanged.category&&r&&s){
c('GroupSellComposerLogger').log
(t.targetID,
c('GroupSellComposerActionEvents').COMPOSER_FILL_CATEGORY,
t.isEdit,
t.postDirectlyToMarketplace);

t.inputsEverChanged.category=true;}


t.savedCategoryID=r;
t.savedCategoryText=s;
this.emitChange(q);};
n.prototype.

getPlaceholderTextForCategory=function(o){'use strict';
return this.getComposerData(o).categoryTitlePlaceholder[
this.getComposerData(o).savedCategoryID];};

n.prototype.

$ReactComposerSellStore_handleSaveLocation=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','locationID','locationText']),q=p[0],r=p[1],s=p[2],


t=this.getComposerData(q);
if(!t.inputsEverChanged.pickupNote&&r&&s){
c('GroupSellComposerLogger').log
(t.targetID,
c('GroupSellComposerActionEvents').COMPOSER_FILL_PICKUP_NOTE,
t.isEdit,
t.postDirectlyToMarketplace);

t.inputsEverChanged.pickupNote=true;}


t.locationID=r;
t.pickupNote=s;

this.emitChange(q);};
n.prototype.

$ReactComposerSellStore_handleSavePickupNote=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','pickupNote']),q=p[0],r=p[1],


s=this.getComposerData(q);
if(!s.inputsEverChanged.pickupNote&&r&&s.targetID){
c('GroupSellComposerLogger').log
(s.targetID,
c('GroupSellComposerActionEvents').COMPOSER_FILL_PICKUP_NOTE,
s.isEdit,
s.postDirectlyToMarketplace);

s.inputsEverChanged.pickupNote=true;}


s.pickupNote=r.substring(0,l);
this.emitChange(q);};
n.prototype.

$ReactComposerSellStore_handleSavePrice=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','price']),q=p[0],r=p[1];



if(!isNaN(r)&&
/^\d*$/.test(r)&&
r.length<=m){

var s=this.getComposerData(q);
if(!s.inputsEverChanged.price){
c('GroupSellComposerLogger').log
(s.targetID,
c('GroupSellComposerActionEvents').COMPOSER_FILL_PRICE,
s.isEdit,
s.postDirectlyToMarketplace);

s.inputsEverChanged.price=true;}


s.price=r;
this.emitChange(q);}};

n.prototype.

$ReactComposerSellStore_handleSavePriceType=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','priceType']),q=p[0],r=p[1],


s=this.getComposerData(q);
if(!s.inputsEverChanged.priceType&&r){
c('GroupSellComposerLogger').log
(s.targetID,
c('GroupSellComposerActionEvents').COMPOSER_FILL_PRICE_TYPE,
s.isEdit,
s.postDirectlyToMarketplace);

s.inputsEverChanged.priceType=true;}


s.priceType=r;
this.emitChange(q);};
n.prototype.

$ReactComposerSellStore_handleSaveTitle=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','title']),q=p[0],r=p[1],


s=this.getComposerData(q);
if(!s.inputsEverChanged.title&&r){
c('GroupSellComposerLogger').log
(s.targetID,
c('GroupSellComposerActionEvents').COMPOSER_FILL_TITLE,
s.isEdit,
s.postDirectlyToMarketplace);

s.inputsEverChanged.title=true;}


s.title=r.substring(0,l);
this.emitChange(q);};
n.prototype.

$ReactComposerSellStore_handleDescriptionChanged=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','description']),q=p[0],r=p[1],

s=this.getComposerData(q);
if(!s.inputsEverChanged.description&&r){
c('GroupSellComposerLogger').log
(s.targetID,
c('GroupSellComposerActionEvents').COMPOSER_FILL_DESCRIPTION,
s.isEdit,
s.postDirectlyToMarketplace);

s.inputsEverChanged.description=true;}





s.description=r;};
n.prototype.

$ReactComposerSellStore_handlePostButtonEnabled=function(o){'use strict';
var p=this.validateAction(o,['composerID']),
q=this.getComposerData(p);
if(!q.inputsEverChanged.postButton){
c('GroupSellComposerLogger').log
(q.targetID,
c('GroupSellComposerActionEvents').COMPOSER_SUBMIT_ENABLED,
q.isEdit,
q.postDirectlyToMarketplace);

q.inputsEverChanged.postButton=true;}};

n.prototype.

$ReactComposerSellStore_handleLoad=function(o){'use strict';
var p=this.validateAction(o,['composerID']),
q=this.getComposerData(p);
c('GroupSellComposerLogger').log
(q.targetID,
c('GroupSellComposerActionEvents').COMPOSER_LOAD,
q.isEdit,
q.postDirectlyToMarketplace);};

n.prototype.

$ReactComposerSellStore_handleSubmit=function(o){'use strict';
var p=this.validateAction(o,['composerID']),
q=this.getComposerData(p);
c('GroupSellComposerLogger').logComposerSubmit
(q.targetID,
q.title,
q.currency,
q.price,
q.description,
q.pickupNote,
c('ReactComposerPhotoStore').getPhotos(p).size,
q.isEdit,
q.interceptSell,
q.postDirectlyToMarketplace);};

n.prototype.

$ReactComposerSellStore_handleInterceptSell=function(o){'use strict';
var p=this.getComposerData(o.composerID);
p.interceptSell=true;
this.emitChange(o.composerID);};
n.prototype.

$ReactComposerSellStore_handleInterceptSellAttempt=function(o){'use strict';
var p=this.getComposerData(o.composerID);
p.interceptSellAttempt=true;
this.emitChange(o.composerID);};
n.prototype.

$ReactComposerSellStore_handleSetSellConfig=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','config']),q=p[0],r=p[1],

s=r.nearbyLocationConfig,
t=r.crossPostConfig,
u=r.ipScanningConfig,

v=this.getComposerData(q);
v.categories=r.categories;
v.currency=r.currency;
v.currencySymbol=r.currencySymbol;
v.locationID=r.locationID;
v.nearbyLocationChecked=s.nearbyLocationChecked;
v.nearbyLocationName=s.nearbyLocationName;
v.showPostNearby=s.showPostNearby;
v.showPostToProfile=r.showPostToProfile;
v.crossPostChecked=t.crossPostChecked;
v.showCrossPostCheckbox=t.showCrossPostCheckbox;
v.showAudienceSelector=r.showAudienceSelector;
v.showAudienceSelectorNUX=r.showAudienceSelectorNUX;
v.showMarketplaceInAudienceSelector=
r.showMarketplaceInAudienceSelector;
v.pickupNote=r.pickupNote;
v.showFreePriceHint=r.showFreePriceHint;
v.showPriceTypeSelector=r.showPriceTypeSelector;
v.showZipcodeField=r.showZipcodeField;
v.showAddressTypeahead=r.showAddressTypeahead;
v.isLocationMandatory=r.isLocationMandatory;
v.interceptWords=r.interceptWords;
v.interceptWordsAfterNumber=r.interceptWordsAfterNumber;
v.showCategoriesFirst=r.showCategoriesFirst;
v.isCategoryOptional=r.isCategoryOptional;
v.marketplaceCheckboxText=s.marketplaceCheckboxText;
v.marketplaceIsAvailable=s.marketplaceIsAvailable;
v.marketplaceIsCompulsory=
s.marketplaceIsCompulsory;
v.marketplaceShouldShowIntercept=
s.marketplaceShouldShowIntercept;
v.marketplaceShouldShowNux=
s.marketplaceShouldShowNux;
v.marketplaceNuxLabel=s.marketplaceNuxLabel;
v.marketplaceUpsellTitleLabel=
s.marketplaceUpsellTitleLabel;
v.marketplaceUpsellSubtitleLabel=
s.marketplaceUpsellSubtitleLabel;
v.marketplaceUpsellHelpTextLabel=
s.marketplaceUpsellHelpTextLabel;
v.marketplaceInterceptAcceptButtonLabel=
s.marketplaceInterceptAcceptButtonLabel;
v.marketplaceInterceptDeclineButtonLabel=
s.marketplaceInterceptDeclineButtonLabel;
v.marketplaceUpsellAcceptButtonLabel=
s.marketplaceUpsellAcceptButtonLabel;
v.marketplaceUpsellDeclineButtonLabel=
s.marketplaceUpsellDeclineButtonLabel;
if(v.isCategoryOptional)
v.savedCategoryText=v.defaultCategoryText=h._(["Select category (optional)","f67188c504c95a4685a428e10c7daa50"]);




if(r.prefillCategory){
v.savedCategoryID=r.prefillCategory.categoryID;
v.savedCategoryText=r.prefillCategory.categoryText;}

v.showTypeaheadTitle=r.showTypeaheadTitle;
v.showTypeaheadCategories=r.showTypeaheadCategories;
var w=r.autosCategory;
v.categoryTitlePlaceholder=
w.titlePlaceholder;
v.showAutosForSellOptions=w.showAutosForSellOptions;
v.showAutosVINField=w.showAutosVINField;
v.showAutosOdometerUnitsField=
w.showAutosOdometerUnitsField;
v.odometerUnits=w.autosOdometerUnits;
v.postDirectlyToMarketplace=r.postDirectlyToMarketplace;
if(r.ipScanningConfig){
v.showIPScanningNUX=u.showIPScanningNUX;
v.ipScanningNotifEnabled=u.ipScanningNotifEnabled;
v.shouldUseIPScanningEUText=
u.shouldUseIPScanningEUText;}

v.isEdit=r.isEdit;
v.targetID=r.targetID;
v.latitude=r.latitude;
v.longitude=r.longitude;
this.emitChange(q);};
n.prototype.

$ReactComposerSellStore_handleToggleNearbyLocationChecked=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','isNearbyLocationChecked']),q=p[0],r=p[1],


s=this.getComposerData(q);
s.nearbyLocationChecked=r;

this.emitChange(q);};
n.prototype.

$ReactComposerSellStore_handleSetPostToMarketplace=function(o){'use strict';
var p=this.validateAction(o,['composerID']),

q=this.getComposerData(p);
q.nearbyLocationChecked=true;

this.emitChange(p);};
n.prototype.

$ReactComposerSellStore_handleToggleCrossPostChecked=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','isCrossPostChecked']),q=p[0],r=p[1],


s=this.getComposerData(q);
s.crossPostChecked=r;

this.emitChange(q);};
n.prototype.

$ReactComposerSellStore_handleSetCurrency=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','currency']),q=p[0],r=p[1],


s=this.getComposerData(q);
s.currency=r;

this.emitChange(q);};
n.prototype.

$ReactComposerSellStore_handleMarketplaceNUXSeen=function(o){'use strict';
var p=this.validateAction(o,['composerID']),

q=this.getComposerData(p);
q.marketplaceShouldShowNux=false;

this.emitChange(p);};
n.prototype.

$ReactComposerSellStore_handleMarketplaceInterceptAttempt=function(o){'use strict';
var p=this.validateAction(o,['composerID']),

q=this.getComposerData(p);
q.marketplaceShouldShowIntercept=false;

this.emitChange(p);};
n.prototype.

$ReactComposerSellStore_handleToggleNLUEducation=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','showNLUEducation']),q=p[0],r=p[1];


this.$ReactComposerSellStore_showNLUEducation=r;

this.emitChange(q);};
n.prototype.

$ReactComposerSellStore_handleShowURLIntercept=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','price','title','description','imageURL']),q=p[0],r=p[1],s=p[2],t=p[3],u=p[4],


v=this.getComposerData(q);
v.price=r;
v.title=s.substring(0,l);
v.description=t;
v.imageURL=u;
v.showURLIntercept=true;

this.emitChange(q);};
n.prototype.

$ReactComposerSellStore_handleToggleAudienceSelectorNUX=function(o){'use strict';var p=
this.validateAction
(o,
['composerID','showNUX']),q=p[0],r=p[1],

s=this.getComposerData(q);
s.showAudienceSelectorNUX=r;

this.emitChange(q);};



f.exports=new n();}),null);

/** js/react_composer/attachments/sell/ReactComposerSellActions.js */





__d('ReactComposerSellActions',['ReactComposerSellActionType','ReactComposerDispatcher','ReactComposerSellStore'],(function a(b,c,d,e,f,g){






c('ReactComposerSellStore');h.prototype.








clearLocation=function(i){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').CLEAR_LOCATION});};

h.prototype.

clearCategory=function(i){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').CLEAR_CATEGORY});};

h.prototype.

saveAudienceTargetIDs=
function(i,
j){
'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').SAVE_AUDIENCE_TARGET_IDS,
audienceTargetIDs:j});};

h.prototype.

saveCategory=function(i,j,k){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').SAVE_CATEGORY,
categoryID:j,
categoryText:k});};

h.prototype.

saveLocation=function(i,j,k){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').SAVE_LOCATION,
locationID:j,
locationText:k});};

h.prototype.

savePickupNote=function(i,j){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').SAVE_PICKUP_NOTE,
pickupNote:j});};

h.prototype.

savePrice=function(i,j){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').SAVE_PRICE,
price:j});};

h.prototype.

savePriceType=function(i,j){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').SAVE_PRICE_TYPE,
priceType:j});};

h.prototype.

saveTitle=function(i,j){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').SAVE_TITLE,
title:j});};

h.prototype.

setConfig=function(i,j){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').SET_SELL_CONFIG,
config:j});};

h.prototype.

registerComposer=function(i,j){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').REGISTER_COMPOSER,
groupID:j});};

h.prototype.

setCurrency=function(i,j){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').SET_CURRENCY,
currency:j});};

h.prototype.

toggleNearbyLocationChecked=
function(i,
j){
'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').TOGGLE_NEARBY_LOCATION_CHECKED,
isNearbyLocationChecked:j});};

h.prototype.

setPostToMarketplace=function(i){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').SET_POST_TO_MARKETPLACE});};

h.prototype.

postButtonEnabled=function(i){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').POST_BUTTON_ENABLED});};

h.prototype.

postToMarketplaceSeen=function(i){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').POST_TO_MARKETPLACE_SEEN});};

h.prototype.

toggleCrossPostCheckbox=
function(i,
j){
'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').TOGGLE_CROSS_POST_CHECKBOX,
isCrossPostChecked:j});};

h.prototype.

crossPostCheckboxSeen=function(i){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').CROSS_POST_CHECKBOX_SEEN});};

h.prototype.

sellIntercept=function(i){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').SELL_INTERCEPT});};

h.prototype.

sellInterceptAttempt=function(i){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').SELL_INTERCEPT_ATTEMPT});};

h.prototype.

marketplaceNuxSeen=function(i){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').MARKETPLACE_NUX_SEEN});};

h.prototype.

marketplaceInterceptAttempt=function(i){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').MARKETPLACE_INTERCEPT_ATTEMPT});};

h.prototype.

toggleNLUEducation=function(i,j){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
showNLUEducation:j,
type:c('ReactComposerSellActionType').TOGGLE_NLU_EDUCATION});};

h.prototype.

toggleAudienceSelectorNUX=function(i,j){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').TOGGLE_AUDIENCE_SELECTOR_NUX,
showNUX:j});};

h.prototype.

showURLIntercept=
function(i,
j,
k,
l,
m){
'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
price:j,
title:k,
description:l,
imageURL:m,
type:c('ReactComposerSellActionType').SHOW_URL_INTERCEPT});};

h.prototype.

descriptionChanged=function(i,j){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').DESCRIPTION_CHANGED,
description:j});};

h.prototype.

load=function(i){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').LOAD});};

h.prototype.

submit=function(i){'use strict';
c('ReactComposerDispatcher').dispatch
({composerID:i,
type:c('ReactComposerSellActionType').SUBMIT});};

function h(){'use strict';}


f.exports=new h();}),null);

/** js/react_composer/attachments/sell/ReactComposerSellNLUNUXContainer.react.js */






__d('ReactComposerSellNLUNUXContainer.react',['fbt','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerSellActions','ReactComposerSellStore','React','XUIAmbientNUX.react'],(function a(b,c,d,e,f,g,h){

'use strict';










var i=c('React').PropTypes,

j=c('React').createClass({displayName:'ReactComposerSellNLUNUXContainer',
mixins:
[c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerSellStore'))],


propTypes:




{contextRef:i.func.isRequired},


statics:
{calculateState:function k(l,m){

return {showNLUEducation:c('ReactComposerSellStore').showNLUEducation(l)};}},




render:function k(){

return (c('React').createElement(c('XUIAmbientNUX.react'),
{contextRef:this.props.contextRef,
onCloseButtonClick:this._onNLUEducationDismiss,
position:'above',
shown:this.state.showNLUEducation},h._(["Post items you want to sell anytime","5b3568823836e047eb2faa72112a5d22"])));},









_onNLUEducationDismiss:function k(){
c('ReactComposerSellActions').toggleNLUEducation(this.context.composerID,false);}});



f.exports=j;}),null);

/** js/react_composer/attachments/more/ReactComposerMoreButton.react.js */






__d('ReactComposerMoreButton.react',['cx','fbt','ix','ReactComposerAttachmentType','ReactComposerSellComposerNUXMixin','ReactComposerSellNLUNUXContainer.react','Image.react','Keys','Link.react','React','ReactLayeredComponentMixin_DEPRECATED','TooltipData','XUIContextualDialog.react','joinClasses'],(function a(b,c,d,e,f,g,h,i,j){


















var k=c('React').PropTypes,

l=false,
m=null,
n=500,

o=c('React').createClass({displayName:'ReactComposerMoreButton',
mixins:[c('ReactLayeredComponentMixin_DEPRECATED'),c('ReactComposerSellComposerNUXMixin')],




propTypes:
{items:k.arrayOf(k.object).isRequired,
shouldShowSellComposerNonFSGroupNUX:k.bool,
saleComposerNUXType:k.string},


_label:i._(["More","b1e0759cc6e8920607ae07435ff3e2a9"]),

getDefaultProps:function p(){

return {alignment:'right',
hasSeenSellComposerNonFSGroupNUX:false};},



_getSeenNux:function p(){
return l;},


_setSeenNux:function p(){
l=true;},


_getRenderButton:function p(){
return this.refs.moreButton;},


_hideDialog:function p(){
m=setTimeout(function(){
if(this.isMounted())
this.setState
({moreDialogShown:false});}.


bind(this),n);},


_showDialog:function p(){
clearTimeout(m);
this.setState
({moreDialogShown:true,
sellComposerNUXDismissed:true});},



_handleKeyPress:function p(q,r){

var s=this.refs[r];
if(!s)
return;

if(q.charCode===c('Keys').RETURN||q.charCode===c('Keys').SPACE){
q.preventDefault();

var t=s.children;
if(t&&t.length===1)
t[0].click();

this._hideDialog();}},



render:function p(){
var q=c('joinClasses')
("_44b1",
'fbReactComposerMoreButton');



return (c('React').createElement('div',null,
c('React').createElement(c('Link.react'),babelHelpers['extends']
({className:q,
'data-tooltip-delay':'500',
label:this._label,
onClick:function(){return this._showDialog();}.bind(this),
onMouseEnter:function(){return this._showDialog();}.bind(this),
onMouseLeave:function(){return this._hideDialog();}.bind(this),
ref:'moreButton',
role:'tab'},
c('TooltipData').propsFor(this._label)),

c('React').createElement(c('Image.react'),
{className:"_44b3",
height:16,
src:j("85222"),
width:16}),

c('React').createElement('span',{className:"_44b4"},i._(["More","b1e0759cc6e8920607ae07435ff3e2a9"])),




c('React').createElement(c('XUIContextualDialog.react'),
{alignment:'right',
contextRef:function(){return this.refs.moreButton;}.bind(this),
offsetY:-5,
onToggle:function(r){
if(!r)
this.setState({moreDialogShown:false});}.

bind(this),
position:'below',
shown:this.state.moreDialogShown,
width:200},
c('React').createElement('ul',
{className:"_44b5",
onMouseEnter:function r(){
clearTimeout(m);},

onMouseLeave:function(){return this._hideDialog();}.bind(this)},
this.props.items.map(function(r,s){
var t='more'+(r.key||s);

return (c('React').createElement('li',
{className:"_44b6",
key:t,
onClick:function(){return this.setState({moreDialogShown:false});}.bind(this)},
c('React').createElement('div',
{onKeyPress:function(u){return this._handleKeyPress(u,t);}.bind(this),
ref:t,
role:'button',
tabIndex:0},
r)));}.



bind(this))))),



this._renderNLUNUX()));},







_renderNLUNUX:function p(){
for(var q=0;q<this.props.items.length;q++)
if(this.props.items[q].key===c('ReactComposerAttachmentType').SELL)

return (c('React').createElement(c('ReactComposerSellNLUNUXContainer.react'),
{contextRef:function(){return this._getRenderButton();}.bind(this)}));




return null;}});



f.exports=o;}),null);

/** js/react_composer/attachments/question/ReactComposerQuestionAttachmentSelector.react.js */






__d('ReactComposerQuestionAttachmentSelector.react',['fbt','ix','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerLoggingName','ReactComponentWithPureRenderMixin','React'],(function a(b,c,d,e,f,g,h,i){











var j=c('React').PropTypes,

k=c('React').createClass({displayName:'ReactComposerQuestionAttachmentSelector',
mixins:[c('ReactComponentWithPureRenderMixin')],

propTypes:
{isInMoreButton:j.bool,
label:j.string},


getDefaultProps:function l(){

return {label:h._(["Create Poll","56280ecf5bcc6877ff1cc9754ec322e0"])};},






render:function l(){

return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),
{attachmentID:c('ReactComposerAttachmentType').QUESTION,
label:this.props.label,
icon:i("40547"),
loggingName:c('ReactComposerLoggingName').QUESTION_TAB_SELECTOR,
'data-testid':'question-attachment-selector',
tabIndex:this.props.isInMoreButton?'-1':undefined}));}});





f.exports=k;}),null);

/** js/react_composer/attachments/quiz/ReactComposerQuizAttachmentSelector.react.js */






__d('ReactComposerQuizAttachmentSelector.react',['ix','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerContextMixin','ReactComposerLoggingName','AsyncRequest','Bootloader','ReactComponentWithPureRenderMixin','React'],(function a(b,c,d,e,f,g,h){

'use strict';













var i=c('React').PropTypes,

j=c('React').createClass({displayName:'ReactComposerQuizAttachmentSelector',
mixins:[c('ReactComposerContextMixin'),c('ReactComponentWithPureRenderMixin')],




propTypes:
{isInMoreButton:i.bool,
label:i.node.isRequired,
createQuizURI:i.string.isRequired},


render:function k(){

return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),
{attachmentID:c('ReactComposerAttachmentType').QUIZ,
label:this.props.label,
icon:h("40548"),
'data-testid':'create-quiz-attachment-selector',
onSelected:this._onSelected,
loggingName:c('ReactComposerLoggingName').QUIZ_TAB_SELECTOR,
tabIndex:this.props.isInMoreButton?'-1':undefined}));},




_onSelected:function k(){
c('Bootloader').loadModules(["AsyncDialog"],function(l){
var m=new (c('AsyncRequest'))(this.props.createQuizURI).
setMethod('POST').
setStatusElement(this.context.composerID);
l.send(m);}.
bind(this),'ReactComposerQuizAttachmentSelector.react');}});



f.exports=j;}),null);

/** js/react_composer/attachments/sell/ReactComposerSellAttachmentTextCounter.react.js */






__d('ReactComposerSellAttachmentTextCounter.react',['cx','Layout.react','React','XUIText.react','XUITextInput.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,


k=c('Layout.react').Column,
l=c('Layout.react').FillColumn,




m=c('React').PropTypes;i=babelHelpers.inherits






(n,c('React').PureComponent);j=i&&i.prototype;function n(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=j.constructor).call.apply(o,[this].concat(r)),this.




















state=
{numCharsRemaining:this.props.text?

this.props.maxLength-this.props.text.length:
this.props.maxLength,
selected:this.props.focusOnMount,
value:this.props.text},this.

































focusInput=function(){
this.refs.textInput.focusInput();}.
bind(this),this.

$ReactComposerSellAttachmentTextCounter_getTextInput=function(){

return (c('React').createElement(c('XUITextInput.react'),
{className:"_2t_f",
maxLength:this.props.maxLength,
onBlur:this.$ReactComposerSellAttachmentTextCounter_onBlur,
onFocus:this.$ReactComposerSellAttachmentTextCounter_onFocus,
onChange:this.$ReactComposerSellAttachmentTextCounter_onChange,
onClick:this.$ReactComposerSellAttachmentTextCounter_onClick,
placeholder:this.props.placeholder,
ref:'textInput',
value:this.state.value}));}.


bind(this),this.

$ReactComposerSellAttachmentTextCounter_getCounter=function(){

return (c('React').createElement(c('XUIText.react'),
{className:"_2t_g",
size:'small'},
this.state.numCharsRemaining));}.


bind(this),this.

$ReactComposerSellAttachmentTextCounter_onBlur=function(){
this.setState({selected:false});}.
bind(this),this.

$ReactComposerSellAttachmentTextCounter_onFocus=function(event){
this.props.onFocus&&this.props.onFocus(event);}.
bind(this),this.

$ReactComposerSellAttachmentTextCounter_onChange=function(event){
var t=event.target.value;
this.setState
({value:t,
numCharsRemaining:
this.props.maxLength-t.length});


this.props.onChange&&this.props.onChange(event);}.
bind(this),this.

$ReactComposerSellAttachmentTextCounter_onClick=function(){
this.setState({selected:true});}.
bind(this),p;}n.prototype.componentWillReceiveProps=function(o){'use strict';this.setState({selected:o.focusOnMount||this.state.selected,value:o.text,numCharsRemaining:o.maxLength-o.text.length});};n.prototype.render=function(){'use strict';var o=c('joinClasses')(this.props.className,"_2t_e");return c('React').createElement(c('Layout.react'),{className:o},c('React').createElement(l,null,this.$ReactComposerSellAttachmentTextCounter_getTextInput()),c('React').createElement(k,null,!this.props.shouldHideCharCounter&&this.state.selected&&this.$ReactComposerSellAttachmentTextCounter_getCounter()));};n.propTypes={focusOnMount:m.bool.isRequired,maxLength:m.number.isRequired,onFocus:m.func,onChange:m.func,placeholder:m.node,text:m.node.isRequired,shouldHideCharCounter:m.bool};


f.exports=n;}),null);

/** js/react_composer/attachments/sell/ReactComposerSellAttachmentTitleContainer.react.js */






__d('ReactComposerSellAttachmentTitleContainer.react',['fbt','ReactComposerContextMixin','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerSellActions','ReactComposerSellAttachmentTextCounter.react','ReactComposerSellStore','React'],(function a(b,c,d,e,f,g,h){










var i=c('React').PropTypes,



j=c('React').createClass({displayName:'ReactComposerSellAttachmentTitleContainer',
mixins:[c('ReactComposerContextMixin'),

c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerSellStore'))],




PropTypes:
{focusOnMount:i.bool},


statics:
{calculateState:function k(l){

return {titleText:c('ReactComposerSellStore').getTitleText(l),
overridePlaceholderText:
c('ReactComposerSellStore').getPlaceholderTextForCategory(l)};}},




getDefaultProps:function k(){

return {focusOnMount:false};},



componentDidMount:function k(){
if(this.props.focusOnMount)
this.refs.title.focusInput();},



render:function k(){
var l=h._(["What are you selling?","8df15bebdc15cc86bc6965ebd81ca4cc"]);




if(this.state.overridePlaceholderText)
l=this.state.overridePlaceholderText;



return (c('React').createElement(c('ReactComposerSellAttachmentTextCounter.react'),
{onFocus:this._onFocus,
onChange:this._onChange,
className:this.props.className,
focusOnMount:this.props.focusOnMount,
placeholder:l,
text:this.state.titleText,
ref:'title',
maxLength:c('ReactComposerSellStore').getMaxCharactersForTitle
(this.context.composerID)}));},





_onFocus:function k(event){


event.target.value=this.props.titleText;},


_onChange:function k(event){
c('ReactComposerSellActions').saveTitle
(this.context.composerID,
event.target.value);}});




f.exports=j;}),null);

/** js/react_composer/attachments/sell/ReactComposerSellAttachmentPlaceholder.react.js */






__d('ReactComposerSellAttachmentPlaceholder.react',['cx','ReactComposerAttachmentActions','ReactComposerAttachmentType','ReactComposerContextMixin','ReactComposerSellAttachmentTitleContainer.react','ReactComponentWithPureRenderMixin','React'],(function a(b,c,d,e,f,g,h){









var i=c('React').PropTypes,



j=c('React').createClass({displayName:'ReactComposerSellAttachmentPlaceholder',
mixins:[c('ReactComposerContextMixin'),c('ReactComponentWithPureRenderMixin')],




render:function k(){

return (c('React').createElement('div',{onClick:this._onClick,role:'presentation'},
c('React').createElement(c('ReactComposerSellAttachmentTitleContainer.react'),
{className:"_ox2"})));},





_onClick:function k(){
c('ReactComposerAttachmentActions').selectAttachment
(this.context.composerID,
c('ReactComposerAttachmentType').SELL,
true);}});




f.exports=j;}),null);

/** js/react_composer/attachments/sell/ReactComposerSellAttachmentSelector.react.js */






__d('ReactComposerSellAttachmentSelector.react',['fbt','ix','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerLoggingName','ReactComposerSellNLUNUXContainer.react','React','ReactLayeredComponentMixin_DEPRECATED','ReactComposerSellComposerNUXMixin'],(function a(b,c,d,e,f,g,h,i){













var j=c('React').PropTypes,

k=false,

l=c('React').createClass({displayName:'ReactComposerSellAttachmentSelector',
mixins:[c('ReactLayeredComponentMixin_DEPRECATED'),c('ReactComposerSellComposerNUXMixin')],




propTypes:
{isInMoreButton:j.bool,
label:j.string,
shouldShowSellComposerNonFSGroupNUX:j.bool,
saleComposerNUXType:j.string},


_getSeenNux:function m(){
return k;},


_setSeenNux:function m(){
k=true;},


_getRenderButton:function m(){
return this.refs.sell_tab_selector;},


getDefaultProps:function m(){

return {label:h._(["Sell Something","52e1de1bcfee632c97c5a88c593730ca"]),



alignment:'left',
hasSeenSellComposerNonFSGroupNUX:false};},



render:function m(){

return (c('React').createElement('div',null,
c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),
{ref:'sell_tab_selector',
attachmentID:c('ReactComposerAttachmentType').SELL,
label:this.props.label,
icon:i("40549"),
loggingName:c('ReactComposerLoggingName').SELL_TAB_SELECTOR,
tabIndex:this.props.isInMoreButton?'-1':undefined}),

this._renderNLUNUX()));},




_renderNLUNUX:function m(){
if(this.props.isInMoreButton)
return null;


return (c('React').createElement(c('ReactComposerSellNLUNUXContainer.react'),
{contextRef:function(){return this._getRenderButton();}.bind(this)}));}});





f.exports=l;}),null);

/** www/__virtual__/x/XReactComposerSellAttachmentBootstrapController.js */



__d("XReactComposerSellAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/sell\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"Int",required:true}});}),

null);

/** js/react_composer/attachments/sell/ReactComposerSellLazyAttachment.react.js */






__d('ReactComposerSellLazyAttachment.react',['ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','ReactComposerSellAttachmentPlaceholder.react','XReactComposerSellAttachmentBootstrapController','ActorURI','Bootloader','React'],(function a(b,c,d,e,f,g){












var h=c('React').createClass({displayName:'ReactComposerSellLazyAttachment',
mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],



statics:
{attachmentID:c('ReactComposerAttachmentType').SELL,
initOnlyWhenComposerActive:true},


getPlaceholderModule:function i(){
return c('ReactComposerSellAttachmentPlaceholder.react');},


bootload:function i(j){
if(this.props.bootload){
this.props.bootload(j);}else 

c('Bootloader').loadModules
(["ReactComposerSellAttachmentContainer.react"],
j,'ReactComposerSellLazyAttachment.react');},




getBootstrapURI:function i(){
return c('ActorURI').create
(c('XReactComposerSellAttachmentBootstrapController').
getURIBuilder().
setString('composer_id',this.context.composerID).
setEnum('composer_type',this.context.composerType).
setInt('target_id',this.context.targetID).
getURI(),
this.context.actorID);}});




f.exports=h;}),null);

/** js/react_composer/attachments/status/taggers/content_warnings/ReactComposerContentWarningsTaggerButton.react.js */






__d('ReactComposerContentWarningsTaggerButton.react',['cx','fbt','ReactComposerTaggerButtonMixin','ReactComposerTaggerType','React'],(function a(b,c,d,e,f,g,h,i){









var j=c('React').createClass({displayName:'ReactComposerContentWarningsTaggerButton',
mixins:[c('ReactComposerTaggerButtonMixin')],

statics:
{taggerID:c('ReactComposerTaggerType').CONTENT_WARNINGS},


getTitle:function k(){
return i._(["Tag content warnings","f34dddbbe8988769aa45c62a5590c5e3"]);},


getTooltip:function k(){
return i._(["Tag content warnings in your post","8d7c16842ac85a4e4a73657a4e8d9c5a"]);},





getClassName:function k(){
return "_1o9t";}});



f.exports=j;}),null);

/** js/react_composer/attachments/status/taggers/content_warnings/ReactComposerContentWarningsTaggerComponent.react.js */






__d('ReactComposerContentWarningsTaggerComponent.react',['cx','fbt','ReactComposerTaggerPresenter','ReactComposerTaggerViewStyles','Grid.react','React','XUITokenizer.react','emptyFunction'],(function a(b,c,d,e,f,g,h,i){var j,k,





l=c('Grid.react').GridItem,







m=c('React').PropTypes;j=babelHelpers.inherits



(n,c('React').Component);k=j&&j.prototype;function n(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.































$ReactComposerContentWarningsTaggerComponent_onAdd=function(t){
var u=this.props.taggerData,
v=t.getUniqueID(),
w=u.some(function(x){return x.getUniqueID()===v;});

if(w){
return;}else 

u.push(t);

this.props.onSelect&&this.props.onSelect(u);}.
bind(this),this.

$ReactComposerContentWarningsTaggerComponent_onRemove=function(t){
var u=this.props.taggerData,
v=u.indexOf(t);
if(v==-1)
return;

u.splice(v,1);
this.props.onSelect&&this.props.onSelect(u);}.
bind(this),p;}n.prototype.

render=function(){'use strict';

return (c('React').createElement(c('Grid.react'),
{cols:2,
className:
"_5esl",

role:'presentation'},
c('React').createElement(l,
{key:'label',className:"_5esm",
role:'presentation'},i._(["Content Warnings","9c1dc57ac86b36bf89dcab751f977ede"])),


c('React').createElement(l,
{key:'tokenizer',
className:"_5esw",
role:'presentation'},
c('React').createElement(c('XUITokenizer.react'),babelHelpers['extends']
({presenter:c('ReactComposerTaggerPresenter'),
focusedOnInit:this.props.autoFocus,
entries:this.props.taggerData,
className:"_5esx _3255",

placeholder:this.props.placeholder,
searchSource:this.props.taggerSource,
onAddEntryAttempt:this.$ReactComposerContentWarningsTaggerComponent_onAdd,
onRemoveEntryAttempt:this.$ReactComposerContentWarningsTaggerComponent_onRemove},
this.props)))));};




n.propTypes={autoFocus:m.bool,placeholder:m.string,taggerConfig:m.object,taggerData:m.array.isRequired,taggerSource:m.object.isRequired,onSelect:m.func,taggerViewStyle:m.shape(c('ReactComposerTaggerViewStyles').Shape)};n.defaultProps={autoFocus:true,onSelect:c('emptyFunction'),placeholder:i._(["Why might this post be offensive?","b835b51fff1074a0719753c9f5ca58b0"]),taggerViewStyle:c('ReactComposerTaggerViewStyles').DEFAULT,taggerData:[]};


f.exports=n;}),null);

/** www/__virtual__/x/XContentWarningsTypeaheadController.js */



__d("XContentWarningsTypeaheadController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/async\/typeahead\/contentwarnings\/",{value:{type:"String",defaultValue:""}});}),

null);

/** js/react_composer/attachments/status/taggers/content_warnings/ReactComposerContentWarningsTaggerContainer.react.js */






__d('ReactComposerContentWarningsTaggerContainer.react',['ReactComposerContentWarningsTaggerComponent.react','ReactComposerLoggingName','ReactComposerTaggerActions','ReactComposerTaggerContainerMixin','ReactComposerTaggerType','ReactComposerTaggerViewStyles','WebAsyncSearchSource','XContentWarningsTypeaheadController','React'],(function a(b,c,d,e,f,g){












var h=c('React').PropTypes,

i=c('React').createClass({displayName:'ReactComposerContentWarningsTaggerContainer',
_taggerSourceInitialized:false,

mixins:[c('ReactComposerTaggerContainerMixin')],



statics:
{taggerID:c('ReactComposerTaggerType').CONTENT_WARNINGS,
loggingName:c('ReactComposerLoggingName').CONTENT_WARNINGS_TAGGER,
taggerComponent:c('ReactComposerContentWarningsTaggerComponent.react')},


propTypes:
{taggerViewStyle:h.shape(c('ReactComposerTaggerViewStyles').Shape)},


getDefaultProps:function j(){

return {taggerViewStyle:c('ReactComposerTaggerViewStyles').DEFAULT};},



componentWillMount:function j(){
if(!this._taggerSourceInitialized){
this._setNewSearchSource(this.props);
this._taggerSourceInitialized=true;}},



__onTaggerDataChanged:function j(k){
c('ReactComposerTaggerActions').setTaggerDataWithoutLogging
(this.context.composerID,
c('ReactComposerTaggerType').CONTENT_WARNINGS,
k);



this.props.onSelect&&this.props.onSelect(k);},


_setNewSearchSource:function j(k){
c('ReactComposerTaggerActions').setTaggerSource
(this.context.composerID,
c('ReactComposerTaggerType').CONTENT_WARNINGS,
new (c('WebAsyncSearchSource'))
({queryRequests:
[{uri:c('XContentWarningsTypeaheadController').getURIBuilder().getURI()}]}));}});






f.exports=i;}),null);

/** js/react_composer/attachments/status/taggers/markdown/ReactComposerMarkdownTaggerButton.react.js */






__d('ReactComposerMarkdownTaggerButton.react',['cx','fbt','Arbiter','ReactComposerEvents','ReactComposerLoggingName','ReactComposerTaggerActions','ReactComposerTaggerButtonMixin','ReactComposerTaggerStore','ReactComposerTaggerType','React'],(function a(b,c,d,e,f,g,h,i){














var j=c('React').createClass({displayName:'ReactComposerMarkdownTaggerButton',
mixins:[c('ReactComposerTaggerButtonMixin')],

statics:
{taggerID:c('ReactComposerTaggerType').MARKDOWN,
loggingName:c('ReactComposerLoggingName').MARKDOWN_TAGGER,
unselectable:true},


getTitle:function k(){
return i._(["Format text with Markdown","7949a2c5df080f37a94e1758339805be"]);},






getTooltip:function k(){
return i._(["Format text with Markdown","7949a2c5df080f37a94e1758339805be"]);},






getClassName:function k(){
return "_1957";},


_onSelectX:function k(){
var l=c('ReactComposerTaggerStore').hasData
(this.context.composerID,
this.constructor.taggerID);


c('ReactComposerTaggerActions').setTaggerData
(this.context.composerID,
this.constructor.loggingName,
this.constructor.taggerID,
l?null:{isMarkdown:true});





c('Arbiter').inform
(c('ReactComposerEvents').ACTIVATE_ATTACHMENT+this.context.composerID);}});




f.exports=j;}),null);

/** js/react_composer/attachments/status/taggers/markdown/ReactComposerMarkdownTaggerComponent.react.js */






__d('ReactComposerMarkdownTaggerComponent.react',['React','emptyFunction'],(function a(b,c,d,e,f,g){var h,i,




j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.















$ReactComposerMarkdownTaggerComponent_onClear=function(){
this.props.onSelect({});}.
bind(this),m;}k.prototype.

render=function(){'use strict';
return c('React').createElement('noscript',null);};
k.propTypes={taggerData:j.object.isRequired,onSelect:j.func.isRequired};k.defaultProps={taggerData:{},onSelect:c('emptyFunction')};


f.exports=k;}),null);

/** js/react_composer/attachments/status/taggers/markdown/ReactComposerMarkdownTaggerContainer.react.js */






__d('ReactComposerMarkdownTaggerContainer.react',['ReactComposerLoggingName','ReactComposerMarkdownTaggerComponent.react','ReactComposerTaggerContainerMixin','ReactComposerTaggerType','React'],(function a(b,c,d,e,f,g){








var h=c('React').createClass({displayName:'ReactComposerMarkdownTaggerContainer',
mixins:[c('ReactComposerTaggerContainerMixin')],



statics:
{taggerID:c('ReactComposerTaggerType').MARKDOWN,
loggingName:c('ReactComposerLoggingName').MARKDOWN_TAGGER,
taggerComponent:c('ReactComposerMarkdownTaggerComponent.react')}});



f.exports=h;}),null);

/** js/react_composer/attachments/status/taggers/presenter/ReactComposerGroupishPeopleTaggerPresenter.react.js */





__d('ReactComposerGroupishPeopleTaggerPresenter.react',['GroupMentionsTypeaheadView.react','SearchableEntry'],(function a(b,c,d,e,f,g){




var h=function i
(j){

var k=[],
l=[];

j.map
(function(m){var n=
m.getAuxiliaryData(),o=n.renderType;
if(o==='member'){
k.push(m);}else 

l.push(m);});




return k.concat(l);};


f.exports=
{ViewRenderer:c('GroupMentionsTypeaheadView.react'),
useLayer:true,
sortEntries:h};}),null);

/** js/react_composer/group/ReactComposerGroupBootloader.js */






__d('ReactComposerGroupBootloader',['Bootloader'],(function a(b,c,d,e,f,g){

'use strict';



var h=
{statusAttachment:function i(j){
c('Bootloader').loadModules
(["ReactComposerStatusAttachmentContainer.react","ReactComposerGroupPostButtonContainer.react"],



j,'ReactComposerGroupBootloader');},



mediaAttachment:function i(j){
c('Bootloader').loadModules
(["ReactComposerMediaAttachmentContainer.react","ReactComposerGroupPostButtonContainer.react"],



j,'ReactComposerGroupBootloader');},



questionAttachment:function i(j){
c('Bootloader').loadModules
(["ReactComposerQuestionAttachmentContainer.react","ReactComposerGroupPostButtonContainer.react"],



j,'ReactComposerGroupBootloader');},



gameAttachment:function i(j){
c('Bootloader').loadModules
(["ReactComposerGameAttachmentContainer.react"],


j,'ReactComposerGroupBootloader');},



qaAttachment:function i(j){
c('Bootloader').loadModules
(["ReactComposerQAAttachmentContainer.react"],


j,'ReactComposerGroupBootloader');},



groupQAAttachment:function i(j){
c('Bootloader').loadModules
(["ReactComposerGroupQAAttachmentContainer.react","ReactComposerGroupPostButtonContainer.react"],



j,'ReactComposerGroupBootloader');},



redEnvelopeAttachment:function i(j){
c('Bootloader').loadModules
(["ReactComposerRedEnvelopeAttachmentContainer.react","ReactComposerGroupPostButtonContainer.react"],



j,'ReactComposerGroupBootloader');}};





f.exports=h;}),null);

/** js/react_composer/group/ReactGroupComposerSellUtils.js */





__d('ReactGroupComposerSellUtils',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
{getNUXTypeDefault:function i(j){
return j.enableTargetedSellComposerPosition?
'sell_composer_non_fs_default':
'sell_composer_non_fs_group';},


getNUXTypeMoreButton:function i(j){
return j.enableTargetedSellComposerPosition?
'sell_composer_non_fs_more':
'sell_composer_non_fs_group';},


isSellComposerFirst:function i(j){
var k=j.isForSaleGroup,
l=
j.isUserSellerInGroupAndSellComposerFirstPosition,
m=j.enabled,
n=
j.enableTargetedSellComposerPosition,
o=j.sellComposerPosition;

return k||
m&&
(n?
o===1:
l);},


isSellComposerSecond:function i(j){
var k=j.enabled,
l=
j.enableTargetedSellComposerPosition,
m=j.sellComposerPosition;

return k&&
(l?m===2:false);},


shouldShowSellComposerNonFSGroupNUXMoreButton:function i
(j,
k){


return ((j.enableTargetedSellComposerPosition?
j.shouldShowSellComposerNonFSMoreNUX:
j.shouldShowSellComposerNonFSGroupNUX)&&
k&&
!h.isSellComposerFirst(j)&&
!h.isSellComposerSecond(j));},



shouldShowSellComposerNonFSGroupNUXSellButton:function i
(j){


return ((j.enableTargetedSellComposerPosition?
j.shouldShowSellComposerNonFSDefaultNUX:
j.shouldShowSellComposerNonFSGroupNUX)&&
!j.isForSaleGroup&&
(h.isSellComposerFirst(j)||
h.isSellComposerSecond(j)));}};




f.exports=h;}),null);

/** js/react_composer/group/ReactGroupComposer.react.js */





__d('ReactGroupComposer.react',['cx','fbt','ReactComposer.react','ReactComposerAlbumAttachmentSelector.react','ReactComposerAttachmentType','ReactComposerBodyContainer.react','ReactComposerConfig','ReactComposerContentWarningsTaggerButton.react','ReactComposerContentWarningsTaggerContainer.react','ReactComposerContextConfig','ReactComposerContextProviderMixin','ReactComposerDocAttachmentSelector.react','ReactComposerEventAttachmentSelector.react','ReactComposerFileAttachmentSelector.react','ReactComposerFileLazyAttachment.react','ReactComposerGroupBootloader','ReactComposerLazyHeader.react','ReactComposerLiveVideoAttachmentSelector.react','ReactComposerLiveVideoLazyAttachment.react','ReactComposerMarkdownTaggerButton.react','ReactComposerMarkdownTaggerContainer.react','ReactComposerMediaAttachmentSelector.react','ReactComposerMediaLazyAttachment.react','ReactComposerMoreButton.react','ReactComposerQuestionAttachmentSelector.react','ReactComposerQuestionLazyAttachment.react','ReactComposerQuizAttachmentSelector.react','ReactComposerStatusAttachmentSelector.react','ReactComposerStatusLazyAttachment.react','ReactComposerGameAttachmentSelector.react','ReactComposerGameLazyAttachment.react','ReactComposerTaggerType','ReactGroupComposerSellUtils','ReactComposerGroupQAAttachmentSelector.react','ReactComposerGroupQALazyAttachment.react','BootloadedComponent.react','Bootloader','JSResource','LayerHideOnBlur','LayerHideOnEscape','LayerHideOnTransition','Link.react','LitestandComposer','React','XUIAmbientNUX.react','XUISpinner.react'],(function a(b,c,d,e,f,g,h,i){


















































var j=3,
k='',

l=c('React').createClass({displayName:'ReactGroupComposer',
mixins:[c('ReactComposerContextProviderMixin')],



propTypes:
{contextConfig:c('ReactComposerContextConfig').isRequired,
config:c('ReactComposerConfig').isRequired},


stateTypes:
{showLiveVideoNux:Boolean},


statics:
{getCurrComposerID:function m(){
return k;}},



getInitialState:function m(){
return {showLiveVideoNux:this._shouldRenderLiveVideoNux()};},


componentDidMount:function m(){
c('LitestandComposer').initComposer(this.props.contextConfig.composerID);
k=this.props.contextConfig.composerID;},


componentWillUnmount:function m(){
if(this.props.contextConfig.composerID===k)
k='';},



render:function m(){var n=
this._getAttachmentComponents(),o=n[0],p=n[1],
q=this._getHeaderLink(),
r=this._renderActorSelector(),
s=
c('React').createElement('div',null,
q,
r),

t=[],
u=null;

if(this._isGroupSeedsComposerEnabled()){
t=o.splice(j,o.length);


t=t.map(function(z){
return c('React').cloneElement(z,
{label:z.props.longLabel||z.props.label,
isInMoreButton:true});});



var v=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').SELL],
w=c('ReactGroupComposerSellUtils').getNUXTypeMoreButton
(v),

x=
c('ReactGroupComposerSellUtils').
shouldShowSellComposerNonFSGroupNUXMoreButton
(v,
this._isGroupSeedsComposerEnabled());


u=
c('React').createElement(c('ReactComposerMoreButton.react'),
{items:t,
ref:'moreSelector',
saleComposerNUXType:w,
shouldShowSellComposerNonFSGroupNUX:
x});}



var y=this._renderLiveVideoNux();


return (c('React').createElement(c('ReactComposer.react'),
{className:"_4lmd"+

(!!r?' '+"_3xdv":''),

loggingConfig:this.props.config.loggingConfig},
c('React').createElement(c('ReactComposerLazyHeader.react'),{rightChild:s},
o,
u,
y),

c('React').createElement(c('ReactComposerBodyContainer.react'),
{expanded:this.props.config.showExpandedComposer,
hasMinHeight:false},
p)));},





_shouldRenderAttachment:function m(n){
return this.props.config.attachmentsConfig[n]?
this.props.config.attachmentsConfig[n].enabled:
false;},


_shouldRenderLiveVideoNux:function m(){
var n=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').LIVE_VIDEO];

return (n&&
n.enabled&&
n.show_nux);},



_shouldUseLiveVideoComposerDialog:function m(){
var n=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').LIVE_VIDEO];

return (n&&
n.enabled&&
n.composerDialog);},



_shouldShowLiveVideoInMainRow:function m(){
var n=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').LIVE_VIDEO];

return (n&&
n.enabled&&
n.liveVideoInMainRow);},



_renderLiveVideoNux:function m(){
if(!this.state.showLiveVideoNux)
return null;


var n=this._shouldShowLiveVideoInMainRow()?
function(){return this.refs.liveVideoSelector;}.bind(this):
function(){return this.refs.moreSelector;}.bind(this);


return (c('React').createElement(c('XUIAmbientNUX.react'),
{behaviors:
{LayerHideOnBlur:c('LayerHideOnBlur'),
LayerHideOnEscape:c('LayerHideOnEscape'),
LayerHideOnTransition:c('LayerHideOnTransition')},

contextRef:n,
onCloseButtonClick:function(){
this.setState({showLiveVideoNux:false});}.
bind(this),
position:'above',
shown:this.state.showLiveVideoNux,
width:'auto'},i._(["New! Create a live video from your browser","f2e0cd8af4cb58a99b66eed497208c31"])));},









_getAttachmentComponents:function m(){
var n=[],
o=[],

p=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').SELL],
q=
this._shouldRenderAttachment(c('ReactComposerAttachmentType').SELL),
r=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').MEDIA].
showSelector,
s=
this._shouldRenderAttachment(c('ReactComposerAttachmentType').FILE),
t=
this._shouldRenderAttachment(c('ReactComposerAttachmentType').STATUS),
u=
this._shouldRenderAttachment(c('ReactComposerAttachmentType').QUESTION),
v=
this._shouldRenderAttachment(c('ReactComposerAttachmentType').ALBUM),
w=
this._shouldRenderAttachment(c('ReactComposerAttachmentType').DOC),
x=
this._shouldRenderAttachment(c('ReactComposerAttachmentType').EVENT),
y=
this._shouldRenderAttachment(c('ReactComposerAttachmentType').GAME),
z=
this._shouldRenderAttachment(c('ReactComposerAttachmentType').QA),
aa=
this._shouldRenderAttachment(c('ReactComposerAttachmentType').LIVE_VIDEO),
ba=
this._shouldRenderAttachment(c('ReactComposerAttachmentType').QUIZ),



ca=c('ReactGroupComposerSellUtils').isSellComposerFirst
(p),

da=c('ReactGroupComposerSellUtils').isSellComposerSecond
(p);


if(q){
var ea=
p.attachmentSelector,
fa=p.lazyAttachment,

ga=c('ReactGroupComposerSellUtils').getNUXTypeDefault
(p),

ha=
c('ReactGroupComposerSellUtils').
shouldShowSellComposerNonFSGroupNUXSellButton(p);

n.push
(c('React').createElement(ea,
{key:c('ReactComposerAttachmentType').SELL,
label:p.attachmentSelectorLabel,
longLabel:p.attachmentSelectorLabel,
saleComposerNUXType:ga,
shouldShowSellComposerNonFSGroupNUX:
ha}));



o.push
(c('React').createElement(fa,
{config:this.props.config,
key:c('ReactComposerAttachmentType').SELL,
bootload:function bc(cc){return c('Bootloader').loadModules(["ReactComposerSellAttachmentContainer.react","ReactComposerGroupSellPostButtonContainer.react"],


cc,'ReactGroupComposer.react');},
selected:ca}));}




if(t){
var ia=ca||da?i._(["Start Discussion","ebd4109e20321956c1cdaf1142fabfcb"]):i._(["Write Post","9802fd41fcf5bcf5be6d3f7915ed6590"]),








ja=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],
ka=
!q&&
ja.showShortSelectorLabel?i._(["Post","1c75a04e86c01ee5e3e9eb4fa133c4e7"]):





ia;

n.push
(c('React').createElement(c('ReactComposerStatusAttachmentSelector.react'),
{key:c('ReactComposerAttachmentType').STATUS,
label:ka,
longLabel:ia}));


var la=i._(["Write something...","9eb2bbf79ed8edabe9df326ff0201e38"]);



o.push
(c('React').createElement(c('ReactComposerStatusLazyAttachment.react'),
{additionalTaggers:this._getAdditionalTaggersForStatusAttachment(),
config:this.props.config,
expanded:this.props.config.showExpandedComposer,
key:c('ReactComposerAttachmentType').STATUS,
placeholder:la,
bootloader:c('ReactComposerGroupBootloader'),
selected:!ca}));}




if(r){
var ma=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').MEDIA],
na=i._(["Add Photo\/Video","e11fe210c71192f65e58d663b5b2f2c1"]),




oa=ma.showShortSelectorLabel?i._(["Photo\/Video","99d00f503561c3b6420dd43fd05d424c"]):





na;

n.push
(c('React').createElement(c('ReactComposerMediaAttachmentSelector.react'),
{key:c('ReactComposerAttachmentType').MEDIA,
label:oa,
longLabel:na}));}







o.push
(c('React').createElement(c('ReactComposerMediaLazyAttachment.react'),
{additionalTaggers:this._getAdditionalTaggersForStatusAttachment(),
config:this.props.config,
key:c('ReactComposerAttachmentType').MEDIA,
bootloader:c('ReactComposerGroupBootloader')}));



if(y){
var pa=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').GAME],
qa=i._(["Play games","acf0d5567510a16a56494ae333f4e1cf"]),



ra=
pa.showShortSelectorLabel?i._(["Games","35d10d4812352b8ecceed1625cae1eca"]):





qa;

n.push
(c('React').createElement(c('ReactComposerGameAttachmentSelector.react'),
{key:c('ReactComposerAttachmentType').GAME,
label:ra,
longLabel:qa}));


o.push
(c('React').createElement(c('ReactComposerGameLazyAttachment.react'),
{config:this.props.config,
key:c('ReactComposerAttachmentType').GAME,
bootloader:c('ReactComposerGroupBootloader')}));}




var sa=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').FILE],
ta=sa.shouldPromoteFileAttachment;
if(s&&ta){
n.push(this._getFileAttachment());
o.push
(c('React').createElement(c('ReactComposerFileLazyAttachment.react'),
{config:this.props.config,
key:c('ReactComposerAttachmentType').FILE,
bootload:function bc(cc){return c('Bootloader').loadModules(["ReactComposerFileAttachment.react","ReactComposerGroupFilePostButtonContainer.react"],


cc,'ReactGroupComposer.react');}}));}




if(z){
var ua=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').QA],
va=i._(["Ask Question","2aeb3d60e3130839d644f648e69d254b"]),




wa=ua.showShortSelectorLabel?i._(["Ask Question","d30e7af6937e5761dd4023e43ebd111d"]):




va;

n.push
(c('React').createElement(c('ReactComposerGroupQAAttachmentSelector.react'),
{key:c('ReactComposerAttachmentType').QA,
label:wa,
longLabel:va}));


o.push
(c('React').createElement(c('ReactComposerGroupQALazyAttachment.react'),
{config:this.props.config,
key:c('ReactComposerAttachmentType').QA,
bootloader:c('ReactComposerGroupBootloader')}));}




if(u){
var xa=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').QUESTION],
ya=i._(["Create Poll","05c404556668ff9f7a95d971df8fc5d3"]),










za=
xa.showShortSelectorLabel?i._(["Poll","dc9b0724ae2bb5db23ce247708d326b4"]):





ya;

n.push
(c('React').createElement(c('ReactComposerQuestionAttachmentSelector.react'),
{key:c('ReactComposerAttachmentType').QUESTION,
label:za,
longLabel:ya}));


o.push
(c('React').createElement(c('ReactComposerQuestionLazyAttachment.react'),
{config:this.props.config,
key:c('ReactComposerAttachmentType').QUESTION,
bootloader:c('ReactComposerGroupBootloader')}));}




var ab=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').RED_ENVELOPE];
if(ab&&ab.enabled){
var bb=ab.attachmentSelector,
cb=ab.lazyAttachment,

db=i._(["Red Envelope","04e10fa8ea238540748c28f5fc9853d8"]);




n.push
(c('React').createElement(bb,
{key:c('ReactComposerAttachmentType').RED_ENVELOPE,
label:db}));


o.push
(c('React').createElement(cb,
{config:this.props.config,
key:c('ReactComposerAttachmentType').RED_ENVELOPE,
bootloader:c('ReactComposerGroupBootloader')}));}




if(s&&!ta){
n.push(this._getFileAttachment());
o.push
(c('React').createElement(c('ReactComposerFileLazyAttachment.react'),
{config:this.props.config,
key:c('ReactComposerAttachmentType').FILE,
bootload:function bc(cc){return c('Bootloader').loadModules(["ReactComposerFileAttachment.react","ReactComposerGroupFilePostButtonContainer.react"],


cc,'ReactGroupComposer.react');}}));}




if(v){
var eb=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').ALBUM],
fb=i._(["Create Photo Album","dd29fce40c8dbb6d18b2eaf9c0306513"]),



gb=eb.showShortSelectorLabel?i._(["Create Album","32e89e93ab359b4093bb30cdb73395f2"]):




fb;

n.push
(c('React').createElement(c('ReactComposerAlbumAttachmentSelector.react'),
{label:gb,
longLabel:fb,
createAlbumLink:eb.createAlbumLink,
key:c('ReactComposerAttachmentType').ALBUM}));}




if(w){
var hb=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').DOC],
ib=i._(["Create Doc","0bb2188858d1f67d5cfe4b8632a819fa"]),



jb=hb.showShortSelectorLabel?i._(["Create Doc","2db306f1a058417f5c37444081f2e14b"]):




ib;

n.push
(c('React').createElement(c('ReactComposerDocAttachmentSelector.react'),
{createDocCampfireURI:hb.createDocCampfireURI,
createDocFallbackURI:hb.createDocFallbackURI,
label:jb,
longLabel:ib,
key:c('ReactComposerAttachmentType').DOC}));}




if(x){
var kb=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').EVENT],
lb=i._(["Create Event","93cc52f8a3109a3a3706050532a2dabe"]),



mb=kb.showShortSelectorLabel?i._(["Create Event","cf48fcfd3c69fa0420070ddb7e1c7e95"]):




lb;

n.push
(c('React').createElement(c('ReactComposerEventAttachmentSelector.react'),
{createEventURI:kb.createEventURI,
label:mb,
longLabel:lb,
key:c('ReactComposerAttachmentType').EVENT}));}




var nb=null,
ob=false;

if(aa){
var pb=i._(["Live Video","8b927243fcbfe74f89b8f866cf01b46d"]),




qb=this._shouldUseLiveVideoComposerDialog(),
rb=
c('React').createElement(c('ReactComposerLiveVideoLazyAttachment.react'),
{config:this.props.config,
key:c('ReactComposerAttachmentType').LIVE_VIDEO,
bootloader:c('ReactComposerGroupBootloader'),
useDialogComposer:qb});

nb=
c('React').createElement(c('ReactComposerLiveVideoAttachmentSelector.react'),
{config:this.props.config,
contextConfig:this.props.contextConfig,
label:pb,
ref:'liveVideoSelector',
key:c('ReactComposerAttachmentType').LIVE_VIDEO,
useComposerDialog:qb});


ob=this._shouldShowLiveVideoInMainRow();

o.push(rb);
if(!ob)
n.push(nb);}



if(ba){
var sb=i._(["Create Quiz","42a3e7bfa9edf16ec2321e2a2643eb81"]),



tb=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').QUIZ].createQuizURI;
n.push
(c('React').createElement(c('ReactComposerQuizAttachmentSelector.react'),
{createQuizURI:tb,
key:c('ReactComposerAttachmentType').QUIZ,
label:sb}));}




var ub=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').TASK];
if(ub&&ub.enabled){
var vb=
ub.attachmentSelector,
wb=ub.lazyAttachment,
xb=i._(["Add Task","803e5d51dece2cf70feb089b2c80b9b9"]);






n.push
(c('React').createElement(vb,
{key:c('ReactComposerAttachmentType').TASK,
label:xb}));


o.push
(c('React').createElement(wb,
{config:this.props.config,
key:c('ReactComposerAttachmentType').TASK,
bootload:function bc(cc){return c('Bootloader').loadModules(["ReactComposerTaskAttachmentTaskArea.react","ReactComposerGroupPostButtonContainer.react"],


cc,'ReactGroupComposer.react');}}));}





if(this._isGroupSeedsComposerEnabled()){





if(n[0].key===c('ReactComposerAttachmentType').SELL&&
!ca&&
!da){

var yb=n.splice(0,1)[0];



n.splice(j,0,yb);}






if(n[2].key===c('ReactComposerAttachmentType').MEDIA&&
(ca||da)){

var zb=n.splice(2,1)[0];



n.splice(j,0,zb);
if(da){

var ac=n[1];
n[1]=n[0];
n[0]=ac;}}}





if(ob&&
nb)

n.splice(2,0,nb);


return [n,o];},


_getHeaderLink:function m(){
var n=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').SELL];

if(n&&
n.headerLinkConfig&&
n.headerLinkConfig.href&&
n.headerLinkConfig.label)


return (c('React').createElement(c('Link.react'),{href:n.headerLinkConfig.href},
n.headerLinkConfig.label));



return null;},


_getFileAttachment:function m(){
var n=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').FILE],
o=i._(["Add File","e2e4fa18af5f85559533e54d5e72eb8e"]),



p=n.showShortSelectorLabel?i._(["File","8c762d4f7e7db15f708702d2245a355c"]):





o;


return (c('React').createElement(c('ReactComposerFileAttachmentSelector.react'),
{key:c('ReactComposerAttachmentType').FILE,
label:p,
longLabel:o}));},




_getAdditionalTaggersForStatusAttachment:function m(){

var n=[];

if(this.props.config.taggersConfig[c('ReactComposerTaggerType').MARKDOWN].enabled)
n.push
({button:c('React').createElement(c('ReactComposerMarkdownTaggerButton.react'),{key:'markdown_button'}),
container:c('React').createElement(c('ReactComposerMarkdownTaggerContainer.react'),{key:'markdown_container'})});




if(this.props.config.taggersConfig[c('ReactComposerTaggerType').CONTENT_WARNINGS].
enabled)

n.push
({button:c('React').createElement(c('ReactComposerContentWarningsTaggerButton.react'),
{key:'content_warnings_button'}),

container:c('React').createElement(c('ReactComposerContentWarningsTaggerContainer.react'),
{key:'content_warnings_container'})});



return n;},


_renderActorSelector:function m(){
var n=this.props.config.actorConfig;

n.syncEnabled=true;

if(!n.showActorSelector)
return null;


n.composerID=this.props.contextConfig.composerID;


return (c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']({},
n,
{bootloadPlaceholder:
c('React').createElement(c('XUISpinner.react'),{className:"_3igw"}),

bootloadLoader:
c('JSResource')('ReactComposerActorSelectorContainer.react').__setRef('ReactGroupComposer.react')})));},





_isGroupSeedsComposerEnabled:function m(){
return this.props.contextConfig.gks.groupSeedsComposerEnabled;}});




f.exports=l;}),null);
