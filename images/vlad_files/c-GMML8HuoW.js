if (self.CavalryLogger) { CavalryLogger.start_js(["7Vl9R"]); }

/** __static_js_modules__/messagesettingspreviewtab.js */




__d("MessageSettingsPreviewTab",[],(function a(b,c,d,e,f,g){

f.exports={MESSENGER_CODE:"messenger_code",RESPONSE_ASSISTANT:"response_assistant"};}),

null);

/** __static_js_modules__/nativebookingrequeststatusupdateaction.js */




__d("NativeBookingRequestStatusUpdateAction",[],(function a(b,c,d,e,f,g){

f.exports={ACCEPT:"accept",ADMIN_CANCEL:"admin_cancel",ADMIN_DECLINE:"admin_decline",CREATE:"create",DECLINE:"decline",SCHEDULE:"schedule",USER_CANCEL:"user_cancel",REQUEST:"request"};}),

null);

/** __static_js_modules__/pagecustomtagconsts.js */




__d("PageCustomTagConsts",[],(function a(b,c,d,e,f,g){

f.exports={COLORS:{FF000000:{fill:"FFFFFFFF",border:"FF90949C",darkerFill:"FFBEC2C9"},FF8A73C9:{fill:"FFF4F1FA",border:"FF8A73C9",darkerFill:"FFDDD5F0"},FFF65569:{fill:"FFFEEEF0",border:"FFF65569",darkerFill:"FFFBCCD2"},FF5291FF:{fill:"FFEEF4FF",border:"FF5291FF",darkerFill:"FFC6D9FF"},FFFB9240:{fill:"FFFFF4EC",border:"FFFB9240",darkerFill:"FFFCDEC5"},FF72A737:{fill:"FFF6FAF1",border:"FF72A737",darkerFill:"FFE4F0D5"}}};}),

null);

/** __static_js_modules__/pagesmanagermessagingtabperfevents.js */




__d("PagesManagerMessagingTabPerfEvents",[],(function a(b,c,d,e,f,g){

f.exports={MESSAGE_TAB_WILL_RENDER:"message_tab_will_render",MESSAGE_TAB_APP_DID_RENDER:"message_tab_app_did_render",MESSAGE_TAB_THREAD_LIST_DID_RENDER:"message_tab_thread_list_did_render",MESSAGE_TAB_DETAIL_VIEW_DID_RENDER:"message_tab_detail_view_did_render",OLD_MESSAGE_TAB_WILL_RENDER:"old_message_tab_will_render",OLD_MESSAGE_TAB_DID_RENDER:"old_message_tab_did_render"};}),

null);

/** __static_js_modules__/pagesplatformnativebookinggraphqlstatus.js */




__d("PagesPlatformNativeBookingGraphQLStatus",[],(function a(b,c,d,e,f,g){

f.exports={CANCELLED:"CANCELLED",CONFIRMED:"CONFIRMED",DECLINED:"DECLINED",PENDING:"PENDING",REQUESTED:"REQUESTED"};}),

null);

/** __static_js_modules__/pagesplatformnativebookingstatus.js */




__d("PagesPlatformNativeBookingStatus",[],(function a(b,c,d,e,f,g){

f.exports={CANCELLED:"Cancelled",CONFIRMED:"Confirmed",DECLINED:"Declined",PENDING:"Pending",REQUESTED:"Requested"};}),

null);

/** __static_js_modules__/pagesplatformnoteupdateaction.js */




__d("PagesPlatformNoteUpdateAction",[],(function a(b,c,d,e,f,g){

f.exports={ADD:"add",DELETE:"delete",UPDATE:"update"};}),

null);

/** __static_js_modules__/servicesappointmentreferrer.js */




__d("ServicesAppointmentReferrer",[],(function a(b,c,d,e,f,g){

f.exports={BANNER:"banner",BUBBLE:"bubble",BUBBLE_CREATE:"bubble_create",BUBBLE_SCHEDULE:"bubble_schedule",COMPOSER:"composer",CTA:"cta",EVENTS:"events",INSTANT_WORKFLOW:"instant_workflow",LIST:"list",MESSAGE_BUBBLE:"message_bubble",PAGE:"page",PAGE_CTA:"page_cta",THREAD_INTENT:"thread_intent",THREAD_INTENT_CTA:"thread_intent_cta",TRIGGER_WORD:"trigger_word"};}),

null);

/** js/components/Mercury/clients/pages_messenger/PagesMessengerConfirmCloseThreadDialog.react.js */







__d('PagesMessengerConfirmCloseThreadDialog.react',['fbt','React','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogFooter.react','XUIDialogTitle.react'],(function a(b,c,d,e,f,g,h){var i,j,










k=c('React').PropTypes,

l=300;i=babelHelpers.inherits







(m,c('React').Component);j=i&&i.prototype;
function m(n){'use strict';
j.constructor.call(this,n);}
m.prototype.

render=function(){'use strict';

return (c('React').createElement(c('XUIDialog.react'),
{layerHideOnBlur:false,
shown:this.props.shown,
width:l},
c('React').createElement(c('XUIDialogTitle.react'),{showCloseButton:false},h._(["Close Message Thread","04e2e22da13e11a020ebced589b8c977"])),




c('React').createElement(c('XUIDialogBody.react'),null,h._(["You haven't sent your message yet. Do you want to leave without sending it?","420a8d3914ace5abb678b46c6f7520f2"])),





c('React').createElement(c('XUIDialogFooter.react'),null,
c('React').createElement(c('XUIDialogButton.react'),
{action:'cancel',
label:h._(["Continue Writing","d2d13e31ca861f53caf5b4d9f553c520"]),




onClick:this.props.onCancel,
use:'default'}),

c('React').createElement(c('XUIDialogButton.react'),
{action:'confirm',
label:h._(["Leave This Thread","55eef0945b741406c2192887985aee4d"]),




onClick:this.props.onConfirm,
use:'confirm'}))));};







m.propTypes=
{onCancel:k.func.isRequired,
onConfirm:k.func.isRequired,
shown:k.bool.isRequired};


f.exports=m;}),null);

/** js/components/Mercury/clients/pages_messenger/PagesMessengerSimpleMultilineComposer.react.js */






__d('PagesMessengerSimpleMultilineComposer.react',['cx','fbt','MercuryMessageObject','MercurySourceType','MercuryPageMessageActions','PagesEventObserver','PagesEventType','PagesMessengerTextInput.react','React','ReactDOM','XUIButton.react','isEmpty'],(function a(b,c,d,e,f,g,h,i){var j,k,















l=c('React').PropTypes;j=babelHelpers.inherits










(m,c('React').Component);k=j&&j.prototype;



function m(n){'use strict';
k.constructor.call(this,n);
this.state=
{value:''};


this.$PagesMessengerSimpleMultilineComposer_messageActions=c('MercuryPageMessageActions').getForFBID(this.props.sourceID);
this.$PagesMessengerSimpleMultilineComposer_messageObject=c('MercuryMessageObject').getForFBID(this.props.sourceID);}
m.prototype.

hasInput=function(){'use strict';
return !!this.state.value;};
m.prototype.

clearInput=function(){'use strict';
this.setState({value:''});};
m.prototype.

focusInput=function(){'use strict';
c('ReactDOM').findDOMNode(this.refs.textInput).focus();};
m.prototype.

getConfirmButtonLabel=function(){'use strict';
return i._(["Send","d622971caa2936e3bb0a19fce5ac131c"]);};
m.prototype.

getTextInputPlaceholder=function(){'use strict';
return i._(["Write a message","dc619df024f308e5abe3eccc37c08e29"]);};


m.prototype.

onTextInputChanged=function(event){'use strict';
this.setState({value:event.target.value});};
m.prototype.

processSend=function(event){'use strict';
var n=this.refs.textInput.props.value;
if(!n)
return;


var o=this.$PagesMessengerSimpleMultilineComposer_messageObject.constructUserGeneratedMessageObject
(n,
c('MercurySourceType').TITAN_WEB,
this.props.threadID,
null,
null);


c('PagesEventObserver').logData_DEPRECATED
({page_id:this.props.sourceID,
event_name:c('PagesEventType').MESSAGES_DIALOG_SEND,
thread_id:this.props.destinationID},
null);

event.preventDefault();

if(this.props.allowSend()){
this.$PagesMessengerSimpleMultilineComposer_messageActions.send(o);
this.setState({value:''});

this.props.afterSend();}};

m.prototype.

render=function(){'use strict';

return (c('React').createElement('div',
{className:"_1yn"},

c('React').createElement('div',null,
c('React').createElement(c('PagesMessengerTextInput.react'),
{className:"_1yq"+(' '+"_32wh")+



(c('isEmpty')(this.state.value)?' '+"_1yx":''),

placeholder:this.getTextInputPlaceholder(),
onChange:this.onTextInputChanged.bind(this),
onKeyUp:this.props.onKeyUp,
value:this.state.value,
ref:'textInput'})),


c('React').createElement('hr',{className:"_1yy"}),
c('React').createElement('div',
{className:"_1yz"},

c('React').createElement('div',
{className:
"_1y-"},


c('React').createElement(c('XUIButton.react'),
{use:'confirm',
onClick:this.processSend.bind(this),
label:this.getConfirmButtonLabel()})))));};








m.propTypes=
{afterSend:l.func.isRequired,
allowSend:l.func.isRequired,
destinationID:l.string.isRequired,
onKeyUp:l.func.isRequired,
sourceID:l.string.isRequired,
threadID:l.string.isRequired};


f.exports=m;}),null);

/** www/__virtual__/x/XPagesMessagingFindPageController.js */



__d("XPagesMessagingFindPageController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/messaging\/search\/page_name_typeahead\/",{page_id:{type:"String",required:true},value:{type:"String"}});}),

null);

/** js/components/Mercury/clients/pages_messenger/PagesMessengerNewThreadDialog.react.js */







__d('PagesMessengerNewThreadDialog.react',['cx','fbt','Event','Keys','MercuryIDs','MercuryParticipants','PagesEventObserver','PagesEventType','PagesMessengerConfirmCloseThreadDialog.react','PagesMessengerSimpleMultilineComposer.react','React','SearchableEntry','WebAsyncSearchSource','XPagesMessagingFindPageController','XUIDialog.react','XUIDialogBody.react','XUIDialogTitle.react','XUITokenizerRichToken.react','XUITypeahead.react'],(function a(b,c,d,e,f,g,h,i){var j,k,






















l=c('React').PropTypes,

m=445,
n=326;j=babelHelpers.inherits








(o,c('React').Component);k=j&&j.prototype;





function o(p){'use strict';
k.constructor.call(this,p);
this.state=
{typeaheadErrorMessage:null,
initDialog:false,
pageName:'...',
query:'',
selectedItem:null,
showCloseConfirmationDialog:false};

this.$PagesMessengerNewThreadDialog_fetchedPageName=false;
this.$PagesMessengerNewThreadDialog_newPageMessageDialogSubscribed=false;

var q=c('XPagesMessagingFindPageController').getURIBuilder().
setString('page_id',this.props.pageID).
getURI(),
r=
{uri:q};

this.$PagesMessengerNewThreadDialog_searchSource=new (c('WebAsyncSearchSource'))
({bootstrapRequests:[r],
queryRequests:[r],
getAllForEmptyQuery:true});}

o.prototype.

$PagesMessengerNewThreadDialog_logCloseEvent=function(p){'use strict';
c('PagesEventObserver').notify
(c('PagesEventType').MESSAGES_CLOSE_PAGE_MESSAGE_DIALOG,
this.props.pageID,

{flowID:this.props.flowID,
close_state:p});};


o.prototype.

$PagesMessengerNewThreadDialog_onCloseButton=function(){'use strict';
if(this.refs.newThreadComposer.hasInput()){
this.setState({showCloseConfirmationDialog:true});

this.$PagesMessengerNewThreadDialog_logCloseEvent('has_message');}else{

this.$PagesMessengerNewThreadDialog_cleanState();
this.props.onHide();

this.$PagesMessengerNewThreadDialog_logCloseEvent('no_message');}};

o.prototype.

$PagesMessengerNewThreadDialog_cleanState=function(){'use strict';
this.refs.newThreadComposer.clearInput();
this.setState
({query:'',
selectedItem:null,
showCloseConfirmationDialog:false});};

o.prototype.

$PagesMessengerNewThreadDialog_onConfirmCloseButton=function(){'use strict';
this.$PagesMessengerNewThreadDialog_cleanState();
this.props.onHide();

this.$PagesMessengerNewThreadDialog_logCloseEvent('confirm_close');};
o.prototype.

$PagesMessengerNewThreadDialog_onCancelCloseButton=function(){'use strict';
this.setState({showCloseConfirmationDialog:false});};
o.prototype.

$PagesMessengerNewThreadDialog_onDialogKey=function(p,event){'use strict';
if(c('Event').getKeyCode(event)===c('Keys').ESC)
setTimeout(this.$PagesMessengerNewThreadDialog_onCloseButton.bind(this),0);};

o.prototype.

$PagesMessengerNewThreadDialog_onComposerKey=function(event){'use strict';
if(c('Event').getKeyCode(event)===c('Keys').ESC)
setTimeout(this.$PagesMessengerNewThreadDialog_onCloseButton.bind(this),0);};

o.prototype.

$PagesMessengerNewThreadDialog_onDialogToggle=function(p){'use strict';


if(!p&&this.props.shown)
this.$PagesMessengerNewThreadDialog_onCloseButton();};

o.prototype.

subscribeEvents=function(){'use strict';
if(this.refs.newPageMessageDialog&&
!this.$PagesMessengerNewThreadDialog_newPageMessageDialogSubscribed){
this.refs.newPageMessageDialog.layerSubscribe
('key',
this.$PagesMessengerNewThreadDialog_onDialogKey.bind(this));

this.$PagesMessengerNewThreadDialog_newPageMessageDialogSubscribed=true;}};

o.prototype.

loadPageName=function(){'use strict';
if(!this.$PagesMessengerNewThreadDialog_fetchedPageName){
this.$PagesMessengerNewThreadDialog_fetchedPageName=true;
c('MercuryParticipants').get
(c('MercuryIDs').getParticipantIDFromUserID(this.props.pageID),
function(p){
this.setState({pageName:p.name});}.
bind(this));}};


o.prototype.

componentDidUpdate=function(p,q){'use strict';
if(!this.props.shown)
return;


this.subscribeEvents();
this.loadPageName();

if(!this.refs.pageTypeahead)
return;


var r=this.refs.pageTypeahead.getTextFieldDOM();
r.style.border='0px';
r.style.fontSize='14px';
r.style.lineHeight='14px';

if(this.props.shown&&!p.shown)
this.refs.pageTypeahead.focusInput();};

o.prototype.

renderFrom=function(){'use strict';

return (c('React').createElement('div',
{className:"_1vwk"},i._(["From: {pageName}","352e084f43f07299f6ecf295b2f77f62"],[i.param


('pageName',
this.state.pageName)])));};




o.prototype.

renderSelectedResult=function(){'use strict';
if(!this.state.selectedItem)
return null;



return (c('React').createElement('span',{className:"_31d6"},
c('React').createElement(c('XUITokenizerRichToken.react'),
{entry:this.state.selectedItem,
highlighted:false,
label:this.state.selectedItem.getTitle(),
onRemove:this.$PagesMessengerNewThreadDialog_onTypeaheadClear.bind(this)})));};



o.prototype.

renderTypeahead=function(){'use strict';
if(this.state.selectedItem)
return null;



return (c('React').createElement(c('XUITypeahead.react'),
{className:

(!this.state.selectedItem?"_1vwn":'')+

(this.state.selectedItem?' '+"_29ez":'')+(' '+"_2pir"),


clearable:!!this.state.selectedItem,
highlightOnSelect:true,
onChange:this.$PagesMessengerNewThreadDialog_onTypeaheadChange.bind(this),
onClear:this.$PagesMessengerNewThreadDialog_onTypeaheadClear.bind(this),
onSelectAttempt:this.$PagesMessengerNewThreadDialog_onTypeaheadSelect.bind(this),
queryString:this.state.query,
ref:'pageTypeahead',
searchSource:this.$PagesMessengerNewThreadDialog_searchSource,
selectedEntry:this.state.selectedItem,
showPhoto:!!this.state.selectedItem,
tallInput:false,
viewStyle:'rich',
xuiError:this.state.typeaheadErrorMessage}));};


o.prototype.

renderTo=function(){'use strict';

return (c('React').createElement('div',
{className:"_1vwl"},
c('React').createElement('span',
{className:"_1vwm"},i._(["To:","930b0b7ec9b09cdb82f0171382231d9a"])),




this.renderSelectedResult(),
this.renderTypeahead(),
c('React').createElement('span',
{className:"_2f3y"},i._(["Pages Only","02c91e3a6eb1a1136aabf91bcce12549"]))));};






o.prototype.

$PagesMessengerNewThreadDialog_onTypeaheadSelect=function(p){'use strict';
this.refs.newThreadComposer.focusInput();
this.setState
({typeaheadErrorMessage:null,
query:p.getTitle(),
selectedItem:p});


c('PagesEventObserver').notify
(c('PagesEventType').MESSAGES_PAGE_MESSAGE_DIALOG_CHOOSE_RECIPIENT,
this.props.pageID,

{flowID:this.props.flowID,
recipient:p.getUniqueID()});};


o.prototype.

$PagesMessengerNewThreadDialog_onTypeaheadChange=function(event){'use strict';
this.setState
({typeaheadErrorMessage:null,
query:event.target.value,
selectedItem:null});};

o.prototype.

$PagesMessengerNewThreadDialog_onTypeaheadClear=function(){'use strict';
this.setState
({typeaheadErrorMessage:null,
query:'',
selectedItem:null});


setTimeout(function(){this.refs.pageTypeahead.focusInput();}.bind(this),0);};
o.prototype.

$PagesMessengerNewThreadDialog_afterSend=function(){'use strict';
setTimeout(this.$PagesMessengerNewThreadDialog_onCloseButton.bind(this),0);};
o.prototype.

$PagesMessengerNewThreadDialog_allowSend=function(){'use strict';
if(!this.state.selectedItem||
this.state.selectedItem.getUniqueID().length==0){
var p=i._(["Please choose a page to receive your message","049ca503b217da4645626d7e4268e44b"]);





this.refs.pageTypeahead.focusInput();
this.setState({typeaheadErrorMessage:p});
return false;}


c('PagesEventObserver').notify
(c('PagesEventType').MESSAGES_PAGE_MESSAGE_DIALOG_SEND,
this.props.pageID,

{flowID:this.props.flowID,
recipient:this.state.selectedItem.getUniqueID()});



return true;};
o.prototype.

renderAttachmentShelf=function(){'use strict';

return (c('React').createElement('div',
{ref:'newThreadAttachmentsShelf',
className:"_jz4"}));};


o.prototype.

renderComposer=function(){'use strict';
var p=this.state.selectedItem?
this.state.selectedItem.getUniqueID():'',
q='user:'+p;


return (c('React').createElement(c('PagesMessengerSimpleMultilineComposer.react'),
{afterSend:this.$PagesMessengerNewThreadDialog_afterSend.bind(this),
allowSend:this.$PagesMessengerNewThreadDialog_allowSend.bind(this),
destinationID:p,
onKeyUp:this.$PagesMessengerNewThreadDialog_onComposerKey.bind(this),
ref:'newThreadComposer',
sourceID:this.props.pageID,
threadID:q}));};


o.prototype.

componentWillReceiveProps=function(p){'use strict';
if(!this.state.initDialog&&p.shown)
this.setState({initDialog:true});};

o.prototype.

renderCloseConfirmationDialog=function(){'use strict';
if(!this.state.showCloseConfirmationDialog)
return null;



return (c('React').createElement(c('PagesMessengerConfirmCloseThreadDialog.react'),
{shown:this.state.showCloseConfirmationDialog,
onCancel:this.$PagesMessengerNewThreadDialog_onCancelCloseButton.bind(this),
onConfirm:this.$PagesMessengerNewThreadDialog_onConfirmCloseButton.bind(this)}));};


o.prototype.

render=function(){'use strict';
if(!this.state.initDialog)
return null;



return (c('React').createElement('div',null,
c('React').createElement(c('XUIDialog.react'),
{layerHideOnBlur:false,
ref:'newPageMessageDialog',
shown:this.props.shown,
onToggle:this.$PagesMessengerNewThreadDialog_onDialogToggle.bind(this),
width:m,
height:n},
c('React').createElement(c('XUIDialogTitle.react'),
{className:"_2ga7"},i._(["New Message To Page","24337d2f791fc151156c073a1844b77e"])),




c('React').createElement(c('XUIDialogBody.react'),
{className:"_1vwv"},
this.renderFrom(),
this.renderTo(),
this.renderAttachmentShelf(),
this.renderComposer())),


this.renderCloseConfirmationDialog()));};





o.propTypes=
{flowID:l.string,
onHide:l.func.isRequired,
shown:l.bool.isRequired,
pageID:l.string.isRequired};


f.exports=o;}),null);

/** js/components/Mercury/clients/pages_messenger/PagesMessengerMessagePageButton.react.js */







__d('PagesMessengerMessagePageButton.react',['ix','cx','fbt','Image.react','PagesEventObserver','PagesEventType','PagesMessengerNewThreadDialog.react','React','XUIButton.react','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){var k,l,











m=c('React').PropTypes;k=babelHelpers.inherits









(n,c('React').Component);l=k&&k.prototype;n.

getButtonSize=function(o){'use strict';
return o.size||'medium';};


function n(o){'use strict';
l.constructor.call(this,o);
this.state=
{showDialog:false};}

n.prototype.

$PagesMessengerMessagePageButton_onHideDialog=function(){'use strict';
this.setState({showDialog:false});};
n.prototype.

$PagesMessengerMessagePageButton_openMessageDialog=function(){'use strict';
if(this.state.showDialog)
return;


this.setState({showDialog:true});

c('PagesEventObserver').notify
(c('PagesEventType').MESSAGES_OPEN_PAGE_MESSAGE_DIALOG,
this.props.pageID,

{flowID:this.props.flowID});};


n.prototype.

render=function(){'use strict';
var o=j._(["Message Page","d7e37bb0a80f24831e13c14c4e9035e9"]);





return (c('React').createElement('span',
{className:
!this.props.pagesCommNewMessagesTab?"_3-9a":''},
c('React').createElement(c('XUIButton.react'),
{className:
this.props.pagesCommNewMessagesTab?"_3kr2":'',
image:c('React').createElement(c('Image.react'),{src:h("142642")}),
label:o,
onClick:this.$PagesMessengerMessagePageButton_openMessageDialog.bind(this),
size:this.props.size}),

c('React').createElement(c('PagesMessengerNewThreadDialog.react'),
{flowID:this.props.flowID,
shown:this.state.showDialog,
onHide:this.$PagesMessengerMessagePageButton_onHideDialog.bind(this),
pageID:this.props.pageID})));};






n.propTypes=
{flowID:m.string,
pageID:m.string.isRequired,
pagesCommNewMessagesTab:m.bool};


f.exports=n;}),null);

/** js/components/Mercury/clients/pages_messenger/context_card/tags/PagesContextCardCustomTag.react.js */







__d('PagesContextCardCustomTag.react',['cx','Image.react','React','XUICard.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits
























(k,c('React').Component);j=i&&i.prototype;


function k(l){
j.constructor.call(this,l);this.









$PagesContextCardCustomTag_onClick=function(){
if(this.props.onClick)
this.props.onClick(this.props.tagData);}.

bind(this);this.

$PagesContextCardCustomTag_onRemove=function(event){
event.stopPropagation();
if(this.props.hideOnRemove)
this.setState({removed:true});

if(this.props.onRemove)
this.props.onRemove(this.props.tagData.name);}.

bind(this);this.state={removed:false};}k.prototype.genDefaultProps=function(){return {textOnly:false};};k.prototype.

render=function(){
if(this.props.hideOnRemove&&this.state.removed)
return null;

var l=this.props.tagData,
m=
'/images/pages/context_card/cross/cross_'+l.borderColor+'.png',
n=
{color:'#'+l.color.substring(2),
backgroundColor:'none'};


if(!this.props.textOnly)
n.backgroundColor='#'+l.darkerFill.substring(2);



return (c('React').createElement(c('XUICard.react'),
{className:"_1pbr"+

(this.props.onClick?' '+"_2rj2":'')+
(this.props.textOnly?' '+"_49ww":''),

style:n,
key:l.id,
onClick:this.$PagesContextCardCustomTag_onClick},
l.name,
this.props.canRemove?
c('React').createElement(c('Image.react'),
{className:"_2rj2 _5t1r",

src:m,
onClick:this.$PagesContextCardCustomTag_onRemove,
height:8,
width:8}):
null));};






f.exports=k;}),null);

/** js/pages/pages_manager/messages/filter/PagesManagerMessagingNavigationUnitKey.js */






__d('PagesManagerMessagingNavigationUnitKey',['MercuryFilters','MessagingTag','PageMessageEnumTag'],(function a(b,c,d,e,f,g){
'use strict';





var h=
{FILTERS:
{ALL:c('MercuryFilters').ALL,
UNREAD:c('MercuryFilters').UNREAD,
FLAGGED:c('PageMessageEnumTag').FLAG,
PRIORITY:c('PageMessageEnumTag').IMPORTANT},

FOLDERS:
{INBOX:c('MessagingTag').INBOX,
ARCHIVED:c('MessagingTag').ACTION_ARCHIVED,
SPAM:c('MessagingTag').SPAM}};



f.exports=h;}),null);

/** js/components/Mercury/clients/pages_messenger/context_card/tags/PagesEnumTag.react.js */







__d('PagesEnumTag.react',['PagesContextCardCustomTag.react','React','PagesManagerMessagingNavigationUnitKey'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits















(j,c('React').Component);i=h&&h.prototype;function j(){var k,l;'use strict';for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.
















$PagesEnumTag_onClick=function(){
if(this.props.onClick)
this.props.onClick(this.props.unit);}.

bind(this),this.

$PagesEnumTag_onRemove=function(){
if(this.props.onRemove)
this.props.onRemove();}.

bind(this),l;}j.prototype.getTagData=function(){'use strict';var k={};if(this.props.unit.getKey()===c('PagesManagerMessagingNavigationUnitKey').FILTERS.FLAGGED||this.props.unit.getKey()===c('PagesManagerMessagingNavigationUnitKey').FILTERS.PRIORITY){k.borderColor='FFFB9240';k.color='FFFB9240';k.fillColor='FFFFF4EC';k.darkerFill='FFFCDEC5';k.id=0;}k.name=this.props.unit.getDisplayTitle();return k;};j.prototype.

render=function(){'use strict';
var k=this.getTagData();

return (c('React').createElement(c('PagesContextCardCustomTag.react'),babelHelpers['extends']({},
this.props,
{key:k.id,
onClick:this.$PagesEnumTag_onClick,
onRemove:this.$PagesEnumTag_onRemove,
tagData:k})));};




f.exports=j;}),null);

/** js/logging/generated/PagesManagerPerfTypedLogger.js */





__d('PagesManagerPerfTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:PagesManagerPerfLoggerConfig',this.$PagesManagerPerfTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:PagesManagerPerfLoggerConfig',this.$PagesManagerPerfTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$PagesManagerPerfTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$PagesManagerPerfTypedLogger_data=babelHelpers['extends']({},
this.$PagesManagerPerfTypedLogger_data,
j);

return this;};
h.prototype.




setEventName=function(j){
this.$PagesManagerPerfTypedLogger_data.event_name=j;
return this;};
h.prototype.






setEventSeriesID=function(j){
this.$PagesManagerPerfTypedLogger_data.event_series_id=j;
return this;};
h.prototype.




setPageID=function(j){
this.$PagesManagerPerfTypedLogger_data.page_id=j;
return this;};
h.prototype.






setPerfTime=function(j){
this.$PagesManagerPerfTypedLogger_data.perf_time=j;
return this;};
h.prototype.




setVC=function(j){
this.$PagesManagerPerfTypedLogger_data.vc=j;
return this;};














var i=
{event_name:true,
event_series_id:true,
page_id:true,
perf_time:true,
vc:true};


f.exports=h;}),null);

/** js/mercury/clients/chat/components/pages_platform/ChatAppointmentUtil.js */







__d('ChatAppointmentUtil',['fbt','DateTime'],(function a(b,c,d,e,f,g,h){

'use strict';












var i=

{getAbbreviationMonthText:function j(k){
switch(k.getMonth()){
case 1:return h._(["JAN","3caf7d13dc74eaa207f70be622b48c07"]);
case 2:return h._(["FEB","952e9c54ed4950c19225285f478adb55"]);
case 3:return h._(["MAR","a3c4fd5d4128630961e1839352ae13da"]);
case 4:return h._(["APR","4aca72d9465d9fda0338a3ac92036ab8"]);
case 5:return h._(["MAY","58cd73c4bf867a249dd8e98109dbabda"]);
case 6:return h._(["JUN","e6bf5041569018ae23f278e36e9acffa"]);
case 7:return h._(["JUL","7c375fe227480da043ea22c6c1623f06"]);
case 8:return h._(["AUG","61d7c17445f7ef5d44f571f7cebecf4e"]);
case 9:return h._(["SEP","4ac7a854a573c2df224d0c626eaca67f"]);
case 10:return h._(["OCT","72fca0d6aae45c16f8382cafa3373caf"]);
case 11:return h._(["NOV","374528828e316fb45e97ca880c559f99"]);
case 12:return h._(["DEC","71eecabc3d70de78fcea5dc8835e198f"]);}

return null;},


validateAppointment:function j(k){
return Boolean(k.product_item&&k.page);},


renderDate:function j(k){
if(!k)
return null;


var l=c('DateTime').localCreate(k.start);
return l.format('l, M j, Y');},


renderTimeRange:function j(k){
if(!k)
return null;


var l=c('DateTime').localCreate(k.start),
m=c('DateTime').localCreate(k.end);

if(l.equals(m)){
return l.format('g:i A');}else 

return l.format('g:i A')+' - '+m.format('g:i A');},



renderDateTimeRange:function j(k){
if(!k)
return null;


var l=i.renderDate(k),
m=i.renderTimeRange(k);

if(!l||!m)
return null;


return l+' '+m;}};



f.exports=i;}),null);

/** js/mercury/clients/shared/components/MercurySeenIndicator.react.js */






__d('MercurySeenIndicator.react',['cx','MercuryDelayedRoger','MercuryIDs','React','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.

















































$MercurySeenIndicator_separateParticipants=function(){
var r=c('MercuryIDs').getParticipantIDFromUserID(this.props.viewer),
s=this.props.thread.participants.filter
(function(t){return t!==r;});

return {viewer:r,others:s};}.
bind(this),this.





$MercurySeenIndicator_viewerLastToReply=function(r){
return r===this.props.thread.snippet_sender;}.
bind(this),this.





$MercurySeenIndicator_seenByAll=function(r){
var s=this.props.thread.thread_id;
return this.$MercurySeenIndicator_mercuryDelayedRoger.getSeenBy
(s).
length===r.length;}.
bind(this),n;}l.prototype.componentWillMount=function(){this.$MercurySeenIndicator_mercuryDelayedRoger=c('MercuryDelayedRoger').getForFBID(this.props.viewer);};l.prototype.componentDidMount=function(){this.$MercurySeenIndicator_subscriptions=new (c('SubscriptionsHandler'))();this.$MercurySeenIndicator_subscriptions.addSubscriptions(this.$MercurySeenIndicator_mercuryDelayedRoger.subscribe('state-changed',function(m,n){n[this.props.thread.thread_id]&&this.forceUpdate();}.bind(this)));};l.prototype.componentWillUnmount=function(){this.$MercurySeenIndicator_subscriptions&&this.$MercurySeenIndicator_subscriptions.release();};l.prototype.render=function(){var m=this.$MercurySeenIndicator_separateParticipants(),n=m.viewer,o=m.others,p=this.$MercurySeenIndicator_viewerLastToReply(n),q=this.$MercurySeenIndicator_seenByAll(o);return c('React').createElement('span',{className:"_3jy5"+(p?' '+"repliedLast":'')+(p&&q?' '+"seenByAll":'')});};l.propTypes={thread:k.object.isRequired,viewer:k.string.isRequired};


f.exports=l;}),null);

/** js/modules/text_transform/DOMEmployeeLink.js */




__d('DOMEmployeeLink',['cx','EmployeeLinkMatcher','EmployeeLinkRanges','JSXDOM','TransformTextToDOMMixin'],(function a(b,c,d,e,f,g,h){


















var i=

{match:function j(k){
if(!c('EmployeeLinkMatcher').isMatch(k))
return false;

var l=c('EmployeeLinkMatcher').match(k);

return {startIndex:l.idx,
endIndex:l.idx+l.lnk.length,
element:this._element(l.lnk)};},



_element:function j(k){
var l=c('EmployeeLinkRanges').get(k);
if(l.length==0)
return k;


return c('JSXDOM').a
({className:"_553k",
href:l[0].entity.url,
target:'_blank',
rel:'nofollow'},
k);}};




f.exports=Object.assign(i,c('TransformTextToDOMMixin'));}),null);

/** js/modules/text_transform/DOMHyperlink.js */




__d('DOMHyperlink',['cx','Env','JSXDOM','TransformTextToDOMMixin','UntrustedLink','URI','URLScraper','isFacebookURI'],(function a(b,c,d,e,f,g,h){





















var i=

{MAX_ITEMS:40,

match:function j(k,l){
var m=c('URLScraper').match(k);
if(!m)
return false;


var n=k.indexOf(m),
o=n+m.length;


return {startIndex:n,
endIndex:o,
element:this._element(m,l)};},



_element:function j(k,l){
var m=k,
n=m.replace(/"/g,'%22');
if(!/^[a-z][a-z0-9\-+.]+:\/\//i.test(k))
n='http://'+n;


if(!c('URI').isValidURI(n))
return m;


var o=
c('JSXDOM').a
({className:"_553k",
href:n,
target:"_blank",
rel:"nofollow"},
m);

if(l&&!c('isFacebookURI')(new (c('URI'))(n)))
o.onmousedown=function(p){
c('UntrustedLink').bootstrap(this,c('Env').lhsh,p);};



return o;}};



f.exports=Object.assign(i,c('TransformTextToDOMMixin'));}),null);

/** js/mercury/renderers/MercuryMessageRenderer.js */






__d('MercuryMessageRenderer',['DOM','DOMEmoji','DOMEmote','DOMEmployeeLink','DOMHyperlink','JSXDOM','URI','shouldAddMRefParam','transformTextToDOM'],(function a(b,c,d,e,f,g){












var h=












{formatMessageBody:function l(m,n,o){




var p=(m||'').replace(/\s+$/,'');

if(!n)
return k(p,false,o);


var q=Object.keys(n).
map(function(t){
return window.parseInt(t);}).
sort(function(t,u){


return t-u;}),



r=[],
s=0;
q.forEach(function(t){

var u=p.slice(s,t);

if(u)
r.push(k(u,false,o));






s=t+n[t].length;

var v=p.slice(t,s);
if(v)
r.push(k(v,true,o));});




if(s<p.length)
r.push(k(p.slice(s),false,o));


return r.length===0?null:
r.length===1?r[0]:c('DOM').create('span',{},r);}};






function i(l,m){
var n=m(l);
if(Array.isArray(n))
n.forEach
(function(o){
if(o.href){
var p=new (c('URI'))(o.href);
if(c('shouldAddMRefParam')(p))
o.href=p.
addQueryData({__mref:'message'}).
toString();}});





return n;}








function j(l,m){
var n=l.replace(/\r\n?/g,'\n').split(/\n{2,}/);
return n.
filter(function(o){return o.length;}).
map(function(o){return c('JSXDOM').p(null,i(o,m));});}













function k(l,m,n){




if(l.length===0&&!m)
return null;


var o=function p(q){
return c('transformTextToDOM')(q,
[c('DOMHyperlink').params(true),
c('DOMEmoji').params({renderInMessenger:true}),
c('DOMEmote').params({renderInMessenger:true}),c('DOMEmployeeLink')]);};





return (c('JSXDOM').span({className:m?'highlight':null},
n?
j(l,o):
i(l,o)));}




f.exports=h;}),null);

/** js/mercury/search/MercuryThreadSearchUtils.js */






__d('MercuryThreadSearchUtils',['escapeRegex','TokenizeUtil'],(function a(b,c,d,e,f,g){




var h=







{wordsInString:function i(j){
return (j||'').split(/\s+/).filter(function(k){
return k.trim().length>0;});},












anyMatchPredicate:function i(j,k){
for(var l=0;l<j.length;l++)
if(k(j[l]))
return true;


return false;},











allMatchPredicate:function i(j,k){
for(var l=0;l<j.length;l++)
if(!k(j[l]))
return false;


return true;},











queryWordMatchesAnyNameWord:function i(j,k){
var l=new RegExp('^'+c('escapeRegex')(j),'i');
return this.anyMatchPredicate(k,function(m){
var n=c('TokenizeUtil').parse(m).flatValue;
return l.test(n);});},












queryMatchesName:function i(j,k){
var l=this.wordsInString(j),
m=this.wordsInString(k);
return this.allMatchPredicate(l,function(n){
return this.queryWordMatchesAnyNameWord(n,m);}.
bind(this));}};



f.exports=h;}),null);

/** js/mercury/search/MercuryLocalThreadResults.js */









__d('MercuryLocalThreadResults',['MercuryFolders','MercuryIDs','MercurySingletonMixin','MercuryOrderedThreadlist','MercuryParticipants','MercuryThreadSearchUtils','MercuryThreads'],(function a(b,c,d,e,f,g){










function h(i){'use strict';
this.$MercuryLocalThreadResults_fbid=i;
this.$MercuryLocalThreadResults_orderedThreadlist=c('MercuryOrderedThreadlist').getForFBID(this.$MercuryLocalThreadResults_fbid);
this.$MercuryLocalThreadResults_threads=c('MercuryThreads').getForFBID(this.$MercuryLocalThreadResults_fbid);}
h.prototype.












findMatchingThreadsFromIds=function(i,j){'use strict';
return j.filter(function(k){
var l=this.$MercuryLocalThreadResults_threads.getThreadMetaNow(k);
return this.$MercuryLocalThreadResults_threadMatchesQuery(l,i);}.
bind(this));};
h.prototype.









findMatchingThreads=function(i){'use strict';
var j=[];
c('MercuryFolders').getSupportedFolders().forEach(function(k){
j=j.concat
(this.$MercuryLocalThreadResults_orderedThreadlist.getThreadlistUntilTimestamp(0,k));}.

bind(this));
return this.findMatchingThreadsFromIds(i,j);};
h.prototype.












$MercuryLocalThreadResults_threadMatchesQuery=function(i,j){'use strict';
var k=
this.$MercuryLocalThreadResults_getParticipantsToCheckAgainstQuery(i.participants),
l=c('MercuryThreadSearchUtils').wordsInString(j),

m=null;




c('MercuryParticipants').getMulti(k,function(n){
m=k.map(function(o){
return n[o];});});





if(!m)
return false;





return c('MercuryThreadSearchUtils').allMatchPredicate(l,function(n){
var o=
c('MercuryThreadSearchUtils').anyMatchPredicate(m,function(q){






return q&&q.name&&
c('MercuryThreadSearchUtils').queryWordMatchesAnyNameWord
(n,
c('MercuryThreadSearchUtils').wordsInString(q.name));}),


p=i.name&&
c('MercuryThreadSearchUtils').queryWordMatchesAnyNameWord
(n,
c('MercuryThreadSearchUtils').wordsInString(i.name));

return o||p;});};

h.prototype.















$MercuryLocalThreadResults_getParticipantsToCheckAgainstQuery=function(i){'use strict';

if(i.length===1&&
c('MercuryIDs').tokenize(i[0]).value===this.$MercuryLocalThreadResults_fbid)
return i;


return i.filter(function(j){
var k=c('MercuryIDs').tokenize(j).value;
return k!==this.$MercuryLocalThreadResults_fbid;}.
bind(this));};



Object.assign(h,c('MercurySingletonMixin'));

f.exports=h;}),null);

/** js/mercury/search/MercurySearchThreadResultOrderer.js */








__d('MercurySearchThreadResultOrderer',['MercurySingletonMixin','MessagingTag','MercuryThreads','createObjectFrom'],(function a(b,c,d,e,f,g){








function h(l){'use strict';
this.$MercurySearchThreadResultOrderer_fbid=l;
this.$MercurySearchThreadResultOrderer_threads=c('MercuryThreads').getForFBID(l);}
h.prototype.
















separateCanonicalThreadsInFolder=function(l,m){'use strict';
var n=[],
o=[];
l.forEach(function(p){
var q=this.$MercurySearchThreadResultOrderer_threads.getThreadMetaNow(p);
if(q.folder===m&&q.is_canonical){
n.push(p);}else 

o.push(p);}.

bind(this));

return {canonical_in_folder:
n.sort(function(p,q){return this.$MercurySearchThreadResultOrderer_compareByTimestamp(p,q);}.bind(this)),
remaining:o};};

h.prototype.








filterThreadsInFolder=function(l,m){'use strict';
var n=[];
l.forEach(function(o){
var p=this.$MercurySearchThreadResultOrderer_threads.getThreadMetaNow(o);
if(p.folder===m&&p.is_archived===false){
n.push(o);}else
if(m===c('MessagingTag').ACTION_ARCHIVED&&
p.is_archived===true)
n.push(o);}.

bind(this));
return n;};
h.prototype.






























orderResults=function(l,m,n,o){'use strict';
var p=k(m,n),
q=p.sort
(this.$MercurySearchThreadResultOrderer_compareByFolderThenCanonicalityThenTimestamp.bind(this,o));

return k(l,q);};
h.prototype.













$MercurySearchThreadResultOrderer_compareByFolderThenCanonicalityThenTimestamp=function(l,m,n){'use strict';





var o=this.$MercurySearchThreadResultOrderer_threads.getThreadMetaNow(m),
p=this.$MercurySearchThreadResultOrderer_threads.getThreadMetaNow(n),

q=i(o),
r=i(p);

if(q!==r)
return j(q,l)>
j(r,l)?-1:1;

if(o.is_canonical!==p.is_canonical)

return o.is_canonical?-1:1;

return this.$MercurySearchThreadResultOrderer_compareByTimestamp(m,n);};
h.prototype.










$MercurySearchThreadResultOrderer_compareByTimestamp=function(l,m){'use strict';
var n=this.$MercurySearchThreadResultOrderer_threads.getThreadMetaNow(l),
o=this.$MercurySearchThreadResultOrderer_threads.getThreadMetaNow(m);

return n.timestamp>o.timestamp?-1:1;};










function i(l){


return l.is_archived?c('MessagingTag').ACTION_ARCHIVED:
l.folder;}


















function j(l,m){


if(l===m)
return 5;

var n={};
n[c('MessagingTag').INBOX]=4;
n[c('MessagingTag').ACTION_ARCHIVED]=3;
n[c('MessagingTag').OTHER]=2;
n[c('MessagingTag').SPAM]=1;





return n[l];}
















function k(l,m){

var n=c('createObjectFrom')(l),

o=m.filter(function(p){
return !(p in n);});

return l.concat(o);}


Object.assign(h,c('MercurySingletonMixin'));

f.exports=h;}),null);

/** js/mercury/search/MercurySearchThreadResults.js */












__d('MercurySearchThreadResults',['KeyedCallbackManager','MercuryAPIArgsSource','MercurySingletonMixin','MercuryThreadlistConstants','MercuryThreadIDMap','RangedCallbackManager','MercuryServerDispatcher','MercuryServerPayloadPreprocessor'],(function a(b,c,d,e,f,g){










var h=new (c('KeyedCallbackManager'))(),

i=c('MercuryThreadlistConstants').WEBMESSENGER_THREAD_COUNT,
j=c('MercuryThreadlistConstants').WEBMESSENGER_MORE_COUNT;



function k(l){'use strict';
this.$MercurySearchThreadResults_fbid=l;
this.$MercurySearchThreadResults_payloadPreprocessor=
c('MercuryServerPayloadPreprocessor').getForFBID(this.$MercurySearchThreadResults_fbid);
this.$MercurySearchThreadResults_threadIDMap=c('MercuryThreadIDMap').getForFBID(this.$MercurySearchThreadResults_fbid);
c('MercuryServerDispatcher').registerEndpoints
({'/ajax/mercury/search_threads.php':
{request_user_id:l,
mode:c('MercuryServerDispatcher').IMMEDIATE,
handler:function(m){this.handleUpdate(m);}.bind(this)}});}


k.prototype.


getThreadlist=function(l,m){'use strict';
if(l){
var n=h.executeOrEnqueue
(l,
function(q){
var r=q.getAllResources(),
s=q.hasReachedEndOfArray();
m(r,s);}),


o=h.getUnavailableResources(n),
p=c('MercuryAPIArgsSource').WEBMESSENGER;
if(o.length)
this.$MercurySearchThreadResults_makeAsyncRequest
({client:p,
query:l,
offset:0,
limit:i+1});


return n;}};

k.prototype.









isExhausted=function(l){'use strict';
var m=h.getResource(l);
return m?m.hasReachedEndOfArray():false;};
k.prototype.










getCachedThreadlist=function(l){'use strict';
var m=h.getResource(l);
return m?m.getAllResources():null;};
k.prototype.











cacheThreadlist=function(l,m){'use strict';
h.getResource(l);





var n=new (c('RangedCallbackManager'))();
n.addResourcesWithoutSorting(m,0);
n.setReachedEndOfArray();
h.setResource(l,n);};
k.prototype.


getMoreThreadlist=function(l,m){'use strict';
if(l){
var n=h.getResource(l);
if(n){
var o=n.getCurrentArraySize(),
p=j,
q=n.executeOrEnqueue
(0,
o+p,
function(){
var s=n.getAllResources(),
t=n.hasReachedEndOfArray();
m(s,t);}),


r=n.getUnavailableResources(q);
if(r.length)
this.$MercurySearchThreadResults_makeAsyncRequest
({query:l,
offset:o,
limit:p+1});


return q;}}};


k.prototype.

handleUpdate=function(l){'use strict';

if(l.mercury_payload)
this.$MercurySearchThreadResults_payloadPreprocessor.handleUpdate(l.mercury_payload);

var m=l.search_threads||{};
for(var n in m){
var o=m[n]||[],
p=o.map
(function(r){return this.$MercurySearchThreadResults_threadIDMap.getClientIDFromServerIDNow(r);}.bind(this)),

q=h.getResource(n);
if(q){
this.$MercurySearchThreadResults_addResults(q,p,j+1);}else{

q=new (c('RangedCallbackManager'))();
this.$MercurySearchThreadResults_addResults(q,p,i+1);
h.setResource(n,q);}}};


k.prototype.




unsubscribe=function(l,m){'use strict';
if(m){
var n=h.getResource(m);
if(n){
n.unsubscribe(l);}else 

h.unsubscribe(l);}};


k.prototype.

setInitialCount=function(l){'use strict';
i=l;};
k.prototype.

$MercurySearchThreadResults_addResults=function(l,m,n){'use strict';
var o=l.getCurrentArraySize(),
p=m.length<n;
if(!p)
m.pop();


l.addResourcesWithoutSorting(m,o);
if(p)
l.setReachedEndOfArray();};

k.prototype.

$MercurySearchThreadResults_makeAsyncRequest=function(l){'use strict';
l.client=c('MercuryAPIArgsSource').WEBMESSENGER;
l.index='fbid';
c('MercuryServerDispatcher').trySend
('/ajax/mercury/search_threads.php',
l,
null,
this.$MercurySearchThreadResults_fbid);};




Object.assign(k,c('MercurySingletonMixin'));

f.exports=k;}),null);

/** js/mercury/search/MercurySearchThreadsStrategy.js */












__d('MercurySearchThreadsStrategy',['WebMessengerConstants','MercuryLocalThreadResults','MercurySingletonMixin','MercurySearchThreadResults','createObjectFrom'],(function a(b,c,d,e,f,g){








var h=null,
i=null,

j=c('WebMessengerConstants').SEARCH_THREAD_DELAY;



function k(l){'use strict';
this.$MercurySearchThreadsStrategy_fbid=l;
this.$MercurySearchThreadsStrategy_localThreadResults=c('MercuryLocalThreadResults').getForFBID(this.$MercurySearchThreadsStrategy_fbid);
this.$MercurySearchThreadsStrategy_searchThreadResults=c('MercurySearchThreadResults').getForFBID(this.$MercurySearchThreadsStrategy_fbid);}
k.prototype.

clearTimer=function(){'use strict';
h=null;
clearTimeout(i);
i=null;};
k.prototype.








































search=function(l,m,n,o){'use strict';










if(l!=h){
h=l;
clearTimeout(i);
i=null;}

var p=
this.$MercurySearchThreadsStrategy_localThreadResults.findMatchingThreads(l),


q=
this.$MercurySearchThreadsStrategy_searchThreadResults.getCachedThreadlist(l);
if(q){

var r=this.$MercurySearchThreadsStrategy_mergeArrays
(p,q);
m(r);
n([],this.$MercurySearchThreadsStrategy_searchThreadResults.isExhausted(l));
o(null,l);
return;}


var s=this.$MercurySearchThreadsStrategy_findQueryResultsByNarrowing(l),
t=this.$MercurySearchThreadsStrategy_mergeArrays
(p,s.thread_ids);

if(s.from_exhausted_remote_results){


this.$MercurySearchThreadsStrategy_searchThreadResults.cacheThreadlist(l,t);
m(t);
n([],true);
o(null,l);
return;}




m(t);
i=setTimeout
(function(){
var u=this.$MercurySearchThreadsStrategy_searchThreadResults.getThreadlist
(l,n);
o(u,l);}.
bind(this),
j);};

k.prototype.














$MercurySearchThreadsStrategy_findQueryResultsByNarrowing=function(l){'use strict';
var m='',
n=[];




for(var o=l.length-1;o>0;o--){
var p=l.slice(0,o),
q=this.$MercurySearchThreadsStrategy_searchThreadResults.getCachedThreadlist
(p);
if(!q)

continue;


if(this.$MercurySearchThreadsStrategy_searchThreadResults.isExhausted(p)){


return {from_exhausted_remote_results:true,
thread_ids:this.$MercurySearchThreadsStrategy_localThreadResults.
findMatchingThreadsFromIds(l,q)};}else

if(m.length===0){

m=p;
n=this.$MercurySearchThreadsStrategy_localThreadResults.
findMatchingThreadsFromIds(l,q);}}






return {from_exhausted_remote_results:false,
thread_ids:n};};

k.prototype.










$MercurySearchThreadsStrategy_mergeArrays=function(l,m){'use strict';
return Object.keys(babelHelpers['extends']({},
c('createObjectFrom')(l),
c('createObjectFrom')(m)));};




Object.assign(k,c('MercurySingletonMixin'));

f.exports=k;}),null);

/** js/pages/components/SelectableSimpleList/actions/PagesSelectableSimpleListActionType.js */





__d('PagesSelectableSimpleListActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){

'use strict';



var h='PAGES_SELECTABLE_SIMPLE_LIST',

i=c('keyMirrorRecursive')

({ROW:
{ALL_DESELECTED:'',
ALL_SELECTED:'',
SELECTED:''}},


h);


f.exports=i;}),null);

/** js/pages/components/SelectableSimpleList/actions/PagesSelectableSimpleListAction.js */





__d('PagesSelectableSimpleListAction',['PagesDispatcher','PagesSelectableSimpleListActionType'],(function a(b,c,d,e,f,g){

'use strict';




var h=
{rowSelected:function i(j,k){
c('PagesDispatcher').dispatch
({type:c('PagesSelectableSimpleListActionType').ROW.SELECTED,
rowKey:j,
selected:k});},



selectAll:function i(j,k){
c('PagesDispatcher').dispatch
({type:c('PagesSelectableSimpleListActionType').ROW.ALL_SELECTED,
rowKeys:j,
selected:k});},



deselectAll:function i(){
c('PagesDispatcher').dispatch
({type:c('PagesSelectableSimpleListActionType').ROW.ALL_DESELECTED});}};




f.exports=h;}),null);

/** js/pages/components/SelectableSimpleList/stores/PagesSelectableSimpleListStore.js */





__d('PagesSelectableSimpleListStore',['FluxStore','Map','PagesDispatcher','PagesSelectableSimpleListActionType'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits






(j,c('FluxStore'));i=h&&h.prototype;


function j(){
i.constructor.call(this,c('PagesDispatcher'));
this.$PagesSelectableSimpleListStore_selectedRows=new (c('Map'))();}
j.prototype.

__onDispatch=function(k){
switch(k.type){
case c('PagesSelectableSimpleListActionType').ROW.SELECTED:
this.$PagesSelectableSimpleListStore_rowSelected(k.rowKey,k.selected);
this.__emitChange();
break;

case c('PagesSelectableSimpleListActionType').ROW.ALL_SELECTED:
this.$PagesSelectableSimpleListStore_rowsSelected(k.rowKeys,k.selected);
this.__emitChange();
break;

case c('PagesSelectableSimpleListActionType').ROW.ALL_DESELECTED:
this.$PagesSelectableSimpleListStore_selectedRows=new (c('Map'))();
this.__emitChange();
break;}};

j.prototype.

$PagesSelectableSimpleListStore_rowSelected=function(k,l){
if(l){
this.$PagesSelectableSimpleListStore_selectedRows.set(k,true);}else 

this.$PagesSelectableSimpleListStore_selectedRows['delete'](k);};

j.prototype.

$PagesSelectableSimpleListStore_rowsSelected=function(k,l){
k.forEach(function(m){return this.$PagesSelectableSimpleListStore_rowSelected(m,l);}.bind(this));};
j.prototype.

isRowSelected=function(k){
return this.$PagesSelectableSimpleListStore_selectedRows.has(k);};
j.prototype.

getSelectedCount=function(){
return this.$PagesSelectableSimpleListStore_selectedRows.size;};
j.prototype.

getSelectedRowsMap=function(){
return this.$PagesSelectableSimpleListStore_selectedRows;};



f.exports=new j();}),null);

/** js/pages/components/SelectableSimpleList/PagesSelectableSimpleListCheckboxContainer.react.js */





__d('PagesSelectableSimpleListCheckboxContainer.react',['FluxContainer','PagesSelectableListCheckbox.react','PagesSelectableSimpleListAction','PagesSelectableSimpleListStore','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits




















(j,c('React').PureComponent);i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.




































$PagesSelectableSimpleListCheckboxContainer_onChange=function(){
c('PagesSelectableSimpleListAction').selectAll
(this.props.allRowKeysGetter(),
!this.state.checked);


var p=this.props.onChange;
if(p)
p(c('PagesSelectableSimpleListStore').getSelectedRowsMap());}.

bind(this),l;}j.getStores=function(){return [c('PagesSelectableSimpleListStore')];};j.calculateState=function(k,l){var m=c('PagesSelectableSimpleListStore').getSelectedCount(),n=void 0;if(m===0){n=false;}else if(m===l.rowCount){n=true;}else n=null;return {checked:n};};j.prototype.render=function(){return c('React').createElement(c('PagesSelectableListCheckbox.react'),{checked:this.state.checked,onChange:this.$PagesSelectableSimpleListCheckboxContainer_onChange});};


f.exports=c('FluxContainer').create
(j,
{withProps:true});}),null);

/** js/pages/components/SelectableSimpleList/PagesSelectableSimpleListRowContainer.react.js */





__d('PagesSelectableSimpleListRowContainer.react',['FluxContainer','PagesSelectableSimpleListAction','PagesSelectableSimpleListStore','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits



























(j,c('React').PureComponent);i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.






















$PagesSelectableSimpleListRowContainer_onSelected=function(p){
c('PagesSelectableSimpleListAction').rowSelected(this.props.rowKey,p);

if(this.props.onSelected)
this.props.onSelected
(c('PagesSelectableSimpleListStore').getSelectedRowsMap());}.


bind(this),l;}j.getStores=function(){return [c('PagesSelectableSimpleListStore')];};j.calculateState=function(k,l){return {selected:c('PagesSelectableSimpleListStore').isRowSelected(l.rowKey)};};j.prototype.render=function(){return this.props.rowRenderer(this.props.rowData.rowIndex,this.state.selected,this.$PagesSelectableSimpleListRowContainer_onSelected);};


f.exports=c('FluxContainer').create
(j,
{withProps:true});}),null);

/** js/pages/components/SelectableSimpleList/PagesSelectableSimpleList.react.js */





__d('PagesSelectableSimpleList.react',['cx','CenteredContainer.react','LeftRight.react','OnVisible.react','PagesSelectableSimpleListCheckboxContainer.react','PagesSelectableSimpleListRowContainer.react','React','ResponsiveBlock.react','SimpleList.react','XUISpinner.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits



















































(k,c('React').PureComponent);j=i&&i.prototype;















function k(){
j.constructor.call(this);this.














































$PagesSelectableSimpleList_onHeaderResize=function(l,m){
this.setState
({headerHeight:m});}.

bind(this);this.



































$PagesSelectableSimpleList_renderRow=function(l){

if(this.props.canLoadMoreRows&&
l.rowIndex===this.props.rowCount)

return this.$PagesSelectableSimpleList_renderLoadingRow();



return (c('React').createElement(c('PagesSelectableSimpleListRowContainer.react'),
{onSelected:this.$PagesSelectableSimpleList_onSelectionChange,
rowData:l,
rowKey:this.props.rowKeyGetter(l.rowIndex),
rowRenderer:this.props.rowRenderer}));}.


bind(this);this.











$PagesSelectableSimpleList_onRequestMoreRows=function(){
if(this.props.onRequestMoreRows&&!this.props.isLoadingMoreRows)
this.props.onRequestMoreRows();}.

bind(this);this.

$PagesSelectableSimpleList_onSelectionChange=function(l){
if(this.props.onSelectionChange)
this.props.onSelectionChange(l);}.

bind(this);this.state={headerHeight:0};}k.prototype.render=function(){return c('React').createElement('div',{className:this.props.className},this.$PagesSelectableSimpleList_renderHeader(),this.$PagesSelectableSimpleList_renderContent());};k.prototype.$PagesSelectableSimpleList_renderHeader=function(){if(!this.props.showHeader)return null;var l=this.props.allRowKeysGetter?c('React').createElement(c('PagesSelectableSimpleListCheckboxContainer.react'),{allRowKeysGetter:this.props.allRowKeysGetter,onChange:this.$PagesSelectableSimpleList_onSelectionChange,rowCount:this.props.rowCount}):null;return c('React').createElement(c('ResponsiveBlock.react'),{onResize:this.$PagesSelectableSimpleList_onHeaderResize},c('React').createElement(c('LeftRight.react'),{className:"_2x3m"},c('React').createElement('div',null,l,c('React').createElement('span',null,this.props.actionBarLeftComponent)),c('React').createElement('div',null,this.props.actionBarRightComponent)),this.props.header);};k.prototype.$PagesSelectableSimpleList_renderContent=function(){var l=this.props.height-this.state.headerHeight;if(l<=0)return null;if(this.props.replaceContent||!this.props.rowCount)return c('React').createElement('div',{style:{height:l}},this.props.replaceContent);return this.$PagesSelectableSimpleList_renderList(l);};k.prototype.$PagesSelectableSimpleList_renderList=function(l){return c('React').createElement(c('SimpleList.react'),{height:l,hideScrollShadow:true,item:this.$PagesSelectableSimpleList_renderRow,rowCount:this.$PagesSelectableSimpleList_getRowCount(),rowHeight:this.props.rowHeight,scrollbarOnHoverOnly:true});};k.prototype.$PagesSelectableSimpleList_getRowCount=function(){return this.props.rowCount+(this.props.canLoadMoreRows?1:0);};k.prototype.$PagesSelectableSimpleList_renderLoadingRow=function(){return c('React').createElement(c('OnVisible.react'),{onVisible:this.$PagesSelectableSimpleList_onRequestMoreRows,style:{height:this.props.rowHeight}},this.props.loadingIndicator);};k.defaultProps={canLoadMoreRows:false,isLoadingMoreRows:false,loadingIndicator:c('React').createElement(c('CenteredContainer.react'),{fullHeight:true,horizontal:true},c('React').createElement(c('XUISpinner.react'),{size:'large'})),showHeader:false};


f.exports=k;}),null);

/** js/pages/customers/PageCustomerConstants.js */





__d('PageCustomerConstants',['keyMirror'],(function a(b,c,d,e,f,g){
'use strict';



var h=
{ActionTypes:c('keyMirror')

({UPDATE_CUSTOMER_ACTIONS:null,
UPDATE_CUSTOMER_DATA:null,
UPDATE_CUSTOMER_ADMIN_NOTES_DATA:null,
UPDATE_MORE_SHARED_PHOTOS:null,
UPDATED_CUSTOMER_TAG_NAMES:null,

FETCH_CUSTOMER_DATA:null,
FETCH_CUSTOMER_ACTIONS_DATA:null,
FETCH_MORE_SHARED_PHOTOS:null,
RESET:null,


RESET_UI:null,
QUERY_TAGS:null,
SET_TAG:null,
UNSET_TAG:null,
SHOW_MORE_HISTORY:null,
SHOW_MORE_NOTES:null,
SHOW_STORY_PREVIEW:null,
HIDE_STORY_PREVIEW:null,
TOGGLE_EDIT_NOTE_DIALOG:null,
TOGGLE_DELETE_NOTE_DIALOG:null,
TOGGLE_FULL_VIEW:null,
ADD_NOTE:null,
EDIT_NOTE:null,
DELETE_NOTE:null,
DRAFT_NOTE:null}),


PayloadSources:c('keyMirror')
({SERVER_ACTION:null,
VIEW_ACTION:null}),


ContextCardLocations:c('keyMirror')
({HOVERCARD_LOCATION:null,
INBOX_LOCATION:null})};



f.exports=h;}),null);

/** js/pages/customers/PageCustomerDispatcher.js */





__d('PageCustomerDispatcher',['Dispatcher_DEPRECATED','PageCustomerConstants'],(function a(b,c,d,e,f,g){
'use strict';var h,i,




j=c('PageCustomerConstants').PayloadSources,

k=[];h=babelHelpers.inherits

(l,c('Dispatcher_DEPRECATED'));i=h&&h.prototype;l.prototype.

$PageCustomerDispatcher_clearCallbacks=function(){
var m=k;
k=[];
m.forEach(function(n){return n();});
k.length=0;};
l.prototype.

addPostDispatchCallback=function(m){
if(this.isDispatching()){
k.push(m);}else 

m();};

l.prototype.

handleServerAction=function(m){
this.addPostDispatchCallback(function(){
var n=
{source:j.SERVER_ACTION,
action:m};

this.dispatch(n);
this.$PageCustomerDispatcher_clearCallbacks();}.
bind(this));};
l.prototype.

handleViewAction=function(m){
this.addPostDispatchCallback(function(){
var n=
{source:j.VIEW_ACTION,
action:m};

this.dispatch(n);
this.$PageCustomerDispatcher_clearCallbacks();}.
bind(this));};
function l(){h.apply(this,arguments);}


f.exports=new l();}),null);

/** js/pages/pages_manager/custom_tags/PagesManagerCustomTagsActionType.js */




__d('PagesManagerCustomTagsActionType',['PagesManagerActionType','keyMirrorRecursive'],(function a(b,c,d,e,f,g){





var h=c('keyMirrorRecursive')

({FETCH:null,
UPDATE:null,
TOGGLE_MERGE_LABELS:null,
TOGGLE_TAG_MANAGEMENT_DIALOG:null,
CREATE:null,
DELETE:null,
EDIT_COLOR:null,
MERGE:null},

'CUSTOM_TAGS_');


Object.assign(h,c('PagesManagerActionType'));
f.exports=h;}),null);

/** js/pages/pages_manager/custom_tags/PagesManagerCustomTagsAction.js */





__d('PagesManagerCustomTagsAction',['PagesManagerCustomTagsActionType','PagesManagerDispatcher'],(function a(b,c,d,e,f,g){






var h=
{fetch:function i(j){
c('PagesManagerDispatcher').dispatch
({pageID:j,
type:c('PagesManagerCustomTagsActionType').FETCH});},



toggleMergeLabelsSection:function i(j,k){
c('PagesManagerDispatcher').dispatch
({type:c('PagesManagerCustomTagsActionType').TOGGLE_MERGE_LABELS,
pageID:j,
show:k});},



toggleManageTagsDialog:function i(j,k){
c('PagesManagerDispatcher').dispatch
({type:c('PagesManagerCustomTagsActionType').TOGGLE_TAG_MANAGEMENT_DIALOG,
pageID:j,
show:k});},



updateCustomTagsData:function i
(j,
k,
l){

c('PagesManagerDispatcher').dispatch
({type:c('PagesManagerCustomTagsActionType').UPDATE,
pageID:j,
customTags:k,
hasTagListChanged:l});},



createCustomTag:function i
(j,
k,
l){

c('PagesManagerDispatcher').dispatch
({type:c('PagesManagerCustomTagsActionType').CREATE,
pageID:j,
tagName:k,
color:l});},



deleteCustomTag:function i
(j,
k){

c('PagesManagerDispatcher').dispatch
({type:c('PagesManagerCustomTagsActionType').DELETE,
pageID:j,
tagName:k});},



editCustomTagColor:function i
(j,
k,
l){

c('PagesManagerDispatcher').dispatch
({type:c('PagesManagerCustomTagsActionType').EDIT_COLOR,
pageID:j,
tagName:k,
color:l});},



mergeCustomTag:function i
(j,
k,
l){

c('PagesManagerDispatcher').dispatch
({type:c('PagesManagerCustomTagsActionType').MERGE,
pageID:j,
tagName:k,
oldTags:l});}};




f.exports=h;}),null);

/** js/pages/customers/PageCustomerActions.js */





__d('PageCustomerActions',['cx','PageCustomerConstants','ActorURI','MercuryAttachmentType','MercuryAttachmentViewer','MercuryIDs','MercuryPageThreadActions','MessagesViewerSetID','PageCustomerDispatcher','PagesAdminToolUIActionType','PagesManagerLogger','PagesManagerCustomTagsAction','URI','Vector'],(function a(b,c,d,e,f,g,h){
'use strict';



var i=c('PageCustomerConstants').ActionTypes,















j='/ajax/messaging/attachments/sharedphotos.php',

k=
{toggleContextCardDialog:function l(m,n){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.TOGGLE_FULL_VIEW,
pageID:m,
userID:n});},



resetData:function l(m){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.RESET,
pageID:m});},



fetchCustomerData:function l(m,n){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.FETCH_CUSTOMER_DATA,
pageID:m,
userID:n});},



fetchCustomerActionsData:function l(m,n){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.FETCH_CUSTOMER_ACTIONS_DATA,
pageID:m,
userID:n});},



fetchMoreSharedPhotos:function l(m,n,o){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.FETCH_MORE_SHARED_PHOTOS,
pageID:m,
userID:n,
shouldLoadAllImages:o});},



resetUI:function l(m,n){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.RESET_UI,
pageID:m,
userID:n});},



clickPhotoFullView:function l(m,n,o){
switch(o.media_type){
case c('MercuryAttachmentType').VIDEO:
var p=o.dim.split(',');
c('MercuryAttachmentViewer').renderVideo
({disableForward:true,
rootClassName:"_1j1h",
videoID:o.fbid,
videoSize:new (c('Vector'))(p[0],p[1]),
videoURI:o.src_uri,
pageID:m});

break;

case c('MercuryAttachmentType').ANIMATED_IMAGE:
case c('MercuryAttachmentType').PHOTO:
var q=
c('ActorURI').create
(new (c('URI'))(j).setQueryData
({thread_id:n,
image_id:o.fbid}),

m);


c('MercuryAttachmentViewer').bootstrapWithConfig
({actorid:m,
dimensions:o.dim,
disableForward:true,
disablePaging:true,
endpoint:q,
fbid:o.fbid,
setID:c('MessagesViewerSetID').MESSAGES_VIEW_ALL_IN_THREAD,
snapToPhoto:true,
src:o.src_uri});

break;}

c('PagesManagerLogger').logContextCardUIAction
(c('PagesAdminToolUIActionType').CONTEXT_CARD_CLICK_SHARED_MEDIA,
m,

{fbid:o.fbid,
media_type:o.media_type});},




clickProfileLink:function l(m,n){
c('PagesManagerLogger').logContextCardUIAction
(c('PagesAdminToolUIActionType').CONTEXT_CARD_CLICK_PROFILE_LINK,
m);},



queryTags:function l(m,n,o){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.QUERY_TAGS,
pageID:m,
userID:n,
query:o});},



setTag:function l(m,n,o){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.SET_TAG,
pageID:m,
userID:n,
tagName:o});},



unsetTag:function l(m,n,o){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.UNSET_TAG,
pageID:m,
userID:n,
tagName:o});},



unflag:function l(m,n){
c('MercuryPageThreadActions').getForFBID(m).removeFlag
(c('MercuryIDs').getThreadIDFromUserID(n),
'context_card');},



updateCustomTagsData:function l
(m,
n,
o){

c('PagesManagerCustomTagsAction').updateCustomTagsData
(m,
n,
o);},



showMoreHistory:function l(m,n){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.SHOW_MORE_HISTORY,
pageID:m,
userID:n});},



showMoreNotes:function l(m,n){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.SHOW_MORE_NOTES,
pageID:m,
userID:n});},



showStoryPreview:function l(m,n,o){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.SHOW_STORY_PREVIEW,
pageID:m,
userID:n,
storyToken:o});},



hideStoryPreview:function l(m,n){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.HIDE_STORY_PREVIEW,
pageID:m,
userID:n});},



toggleEditNoteDialog:function l(m,n,o,p){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.TOGGLE_EDIT_NOTE_DIALOG,
pageID:m,
userID:n,
noteID:p,
showEditNoteDialog:o});},



toggleDeleteNoteDialog:function l(m,n,o,p){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.TOGGLE_DELETE_NOTE_DIALOG,
pageID:m,
userID:n,
noteID:o,
showDeleteNoteDialog:p});},



addNote:function l(m,n,o){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.ADD_NOTE,
pageID:m,
userID:n,
noteBody:o});},



editNote:function l(m,n,o,p){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.EDIT_NOTE,
pageID:m,
userID:n,
noteID:o,
noteBody:p});},



deleteNote:function l(m,n,o){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.DELETE_NOTE,
pageID:m,
userID:n,
noteID:o});},



draftNote:function l(m,n,o){
c('PageCustomerDispatcher').handleViewAction
({actionType:i.DRAFT_NOTE,
pageID:m,
userID:n,
noteDraft:o});}};




f.exports=k;}),null);

/** js/pages/pages_manager/PagesManagerCountDownTimer.react.js */






__d('PagesManagerCountDownTimer.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j,





k=1000;i=babelHelpers.inherits







(l,c('React').Component);j=i&&i.prototype;



function l(m,n){'use strict';
j.constructor.call(this,m,n);this.












































$PagesManagerCountDownTimer_startCountDown=function(){
this.setState({isCountingDown:true});
var o=function(){
var p=this.$PagesManagerCountDownTimer_getTimeRemaining(this.props.expireTimestamp);
if(p>0){
this.setState({timeRemaining:p});
this.$PagesManagerCountDownTimer_startCountDown();
return;}

this.setState({isCountingDown:false});
this.props.onTimeup();}.
bind(this);
setTimeout(o,k);}.
bind(this);this.state={timeRemaining:this.$PagesManagerCountDownTimer_getTimeRemaining(this.props.expireTimestamp),isCountingDown:false};}l.prototype.componentDidMount=function(){'use strict';if(!this.state.isCountingDown)this.$PagesManagerCountDownTimer_startCountDown();};l.prototype.componentWillReceiveProps=function(m){'use strict';this.setState({timeRemaining:this.$PagesManagerCountDownTimer_getTimeRemaining(m.expireTimestamp)});if(!this.state.isCountingDown)this.$PagesManagerCountDownTimer_startCountDown();};l.prototype.render=function(){'use strict';return c('React').createElement('div',{className:"_3uo9"+(this.props.isHidden?' '+"hidden_elem":'')},this.$PagesManagerCountDownTimer_getText());};l.prototype.$PagesManagerCountDownTimer_getText=function(){'use strict';var m=Math.floor(this.state.timeRemaining/1000/60),n=this.$PagesManagerCountDownTimer_padDigits(Math.floor(m/60)),o=this.$PagesManagerCountDownTimer_padDigits(m%60);return c('React').createElement('span',null,n+':'+o);};l.prototype.$PagesManagerCountDownTimer_getTimeRemaining=function(m){'use strict';return m?m-Date.now():0;};l.prototype.




$PagesManagerCountDownTimer_padDigits=function(m){'use strict';
return ("0"+m).slice(-2);};



f.exports=l;}),null);

/** js/pages/pages_manager/PagesManagerPerfLogger.js */






__d('PagesManagerPerfLogger',['PagesManagerPerfTypedLogger','Set'],(function a(b,c,d,e,f,g){
'use strict';






var h=1000;




function i(){
this.$PagesManagerPerfLogger_eventCache=new (c('Set'))();}
i.prototype.

log=function(j,k){
var l=k.perfID+':'+j;
if(this.$PagesManagerPerfLogger_eventCache.has(l))

return;

this.$PagesManagerPerfLogger_eventCache.add(l);

var m=Date.now()/h-k.baseTime;
new (c('PagesManagerPerfTypedLogger'))().
setPageID(k.pageID).
setEventName(j).
setEventSeriesID(k.perfID).
setPerfTime(Math.round(m)).
log();};



f.exports=new i();}),null);

/** js/pages/pages_manager/component/PagesManagerListBatchActionContainer.react.js */






__d('PagesManagerListBatchActionContainer.react',['FluxContainer','PagesManagerStore','React'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits











(j,c('React').Component);i=h&&h.prototype;j.


getStores=function(){'use strict';
return [c('PagesManagerStore')];};


j.

calculateState=function(k){'use strict';
var l=c('PagesManagerStore').getSelectedRows(),
m=l.length>0;
return {showBatchAction:m,selectedRows:l};};
j.prototype.

render=function(){'use strict';var k=
this.props,l=k.ChildClass,m=babelHelpers.objectWithoutProperties(k,['ChildClass']);

return (c('React').createElement(l,babelHelpers['extends']({},
m,
{selectedRows:this.state.selectedRows,
showBatchAction:this.state.showBatchAction})));};


function j(){'use strict';h.apply(this,arguments);}


f.exports=c('FluxContainer').create
(j);}),null);

/** js/pages/pages_manager/component/PagesManagerListRowContainer.react.js */






__d('PagesManagerListRowContainer.react',['FluxContainer','PagesManagerStore','React'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits










(j,c('React').Component);i=h&&h.prototype;j.








getStores=function(){'use strict';
return [c('PagesManagerStore')];};


j.

calculateState=function(k,l){'use strict';
var m=false,
n=false;
if(l&&l.listItem){
m=l.selected===undefined?
c('PagesManagerStore').getIsRowSelected(l.listItem):
l.selected;
n=c('PagesManagerStore').getViewingListItem()===l.listItem;}

var o=c('PagesManagerStore').isSelectionMode();
return {selected:m,isViewing:n,selectionMode:o};};
j.prototype.

render=function(){'use strict';var k=
this.props,l=k.ChildClass,m=babelHelpers.objectWithoutProperties(k,['ChildClass']);

return (c('React').createElement(l,babelHelpers['extends']
({ref:'childClass',
isViewing:this.state.isViewing,
onSelected:this.props.onSelected,
selected:this.state.selected,
selectionMode:this.state.selectionMode},
m)));};


function j(){'use strict';h.apply(this,arguments);}


f.exports=c('FluxContainer').create
(j,
{withProps:true});}),null);

/** js/pages/pages_manager/component/PagesManagerStaticStore.js */





__d('PagesManagerStaticStore',[],(function a(b,c,d,e,f,g){





var h=
{_pageID:'',
setPageID:function i(j){
this._pageID=j;},


getPageID:function i(){
return this._pageID;}};



f.exports=h;}),null);

/** www/__virtual__/x/XPagesCustomTagCreateController.js */



__d("XPagesCustomTagCreateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/custom_tag\/create\/",{tag_name:{type:"String",required:true},color:{type:"String"}});}),

null);

/** www/__virtual__/x/XPagesCustomTagDeleteController.js */



__d("XPagesCustomTagDeleteController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/custom_tag\/delete\/",{tag_name:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XPagesCustomTagEditColorController.js */



__d("XPagesCustomTagEditColorController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/custom_tag\/edit\/color\/",{tag_name:{type:"String",required:true},color:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XPagesCustomTagMergeController.js */



__d("XPagesCustomTagMergeController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/custom_tag\/merge\/",{tag_name:{type:"String",required:true},old_tags:{type:"StringSet",required:true}});}),

null);

/** www/__virtual__/x/XPagesCustomTagsDataController.js */



__d("XPagesCustomTagsDataController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/custom_tags\/data\/",{});}),

null);

/** js/pages/pages_manager/custom_tags/store/PagesManagerCustomTagsStore.js */





__d('PagesManagerCustomTagsStore',['ActorURI','AsyncRequest','PagesManagerCustomTagsActionType','PagesManagerDispatcher','FluxStore','immutable','Map','PageCustomerActions','XPagesCustomTagsDataController','XPagesCustomTagCreateController','XPagesCustomTagDeleteController','XPagesCustomTagEditColorController','XPagesCustomTagMergeController'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits



















(j,c('FluxStore'));i=h&&h.prototype;




function j(k){
i.constructor.call(this,k);
this.$PagesManagerCustomTagsStore_pageCustomTagsData=new (c('Map'))();
this.$PagesManagerCustomTagsStore_isMergingLabels=false;
this.$PagesManagerCustomTagsStore_isManagingTags=false;}
j.prototype.

hasCustomTags=function(k){
return this.$PagesManagerCustomTagsStore_pageCustomTagsData.has(k);};
j.prototype.

getCustomTags=function(k){
return c('immutable').Map(this.$PagesManagerCustomTagsStore_pageCustomTagsData.get(k)||new (c('Map'))());};
j.prototype.

hasCustomTag=function(k,l){
var m=this.$PagesManagerCustomTagsStore_pageCustomTagsData.get(k);
return m!==undefined&&m.has(l);};
j.prototype.

getIsMergingLabels=function(){
return this.$PagesManagerCustomTagsStore_isMergingLabels;};
j.prototype.

getIsManagingTags=function(){
return this.$PagesManagerCustomTagsStore_isManagingTags;};
j.prototype.

__onDispatch=function(k){
switch(k.type){
case c('PagesManagerCustomTagsActionType').FETCH:
new (c('AsyncRequest'))().
setURI(c('ActorURI').create
(c('XPagesCustomTagsDataController').getURIBuilder().getURI(),
k.pageID)).

setHandler(function(m){
this.__dispatcher.dispatch
({type:c('PagesManagerCustomTagsActionType').UPDATE,
pageID:k.pageID,
customTags:m.payload});}.

bind(this)).
send();
break;
case c('PagesManagerCustomTagsActionType').UPDATE:
var l=this.$PagesManagerCustomTagsStore_pageCustomTagsData.get(k.pageID)||new (c('Map'))();
k.customTags.map(function(m){
l.set(m.name,m);});

this.$PagesManagerCustomTagsStore_pageCustomTagsData.set(k.pageID,l);
this.__emitChange();
break;
case c('PagesManagerCustomTagsActionType').TOGGLE_MERGE_LABELS:
this.$PagesManagerCustomTagsStore_isMergingLabels=k.show;
this.__emitChange();
break;
case c('PagesManagerCustomTagsActionType').TOGGLE_TAG_MANAGEMENT_DIALOG:
this.$PagesManagerCustomTagsStore_isManagingTags=k.show;
this.$PagesManagerCustomTagsStore_isMergingLabels=false;
this.__emitChange();
break;
case c('PagesManagerCustomTagsActionType').CREATE:
new (c('AsyncRequest'))().
setURI(c('ActorURI').create
(c('XPagesCustomTagCreateController').getURIBuilder().
setString('tag_name',k.tagName).
setString('color',k.color).
getURI(),
k.pageID)).

setHandler(function(m){
this.__dispatcher.dispatch
({type:c('PagesManagerCustomTagsActionType').UPDATE,
pageID:k.pageID,
customTags:[m.payload],
hasTagListChanged:true});}.

bind(this)).
send();
break;
case c('PagesManagerCustomTagsActionType').DELETE:
new (c('AsyncRequest'))().
setURI(c('ActorURI').create
(c('XPagesCustomTagDeleteController').getURIBuilder().
setString('tag_name',k.tagName).
getURI(),
k.pageID)).

setHandler(function(m){
var n=this.$PagesManagerCustomTagsStore_pageCustomTagsData.get(k.pageID);
if(n&&n.has(k.tagName)){
n['delete'](k.tagName);
this.$PagesManagerCustomTagsStore_pageCustomTagsData.set(k.pageID,n);
this.__dispatcher.dispatch
({type:c('PagesManagerCustomTagsActionType').UPDATE,
pageID:k.pageID,
customTags:[],
hasTagListChanged:true});}}.


bind(this)).
send();
break;
case c('PagesManagerCustomTagsActionType').EDIT_COLOR:
new (c('AsyncRequest'))().
setURI(c('ActorURI').create
(c('XPagesCustomTagEditColorController').getURIBuilder().
setString('tag_name',k.tagName).
setString('color',k.color).
getURI(),
k.pageID)).

setHandler(function(m){
this.__dispatcher.dispatch
({type:c('PagesManagerCustomTagsActionType').UPDATE,
pageID:k.pageID,
customTags:[m.payload],
hasTagListChanged:false});}.

bind(this)).
send();
break;
case c('PagesManagerCustomTagsActionType').MERGE:
new (c('AsyncRequest'))().
setURI(c('ActorURI').create
(c('XPagesCustomTagMergeController').getURIBuilder().
setString('tag_name',k.tagName).
setStringSet('old_tags',k.oldTags).
getURI(),
k.pageID)).

setHandler(function(m){
var n=this.$PagesManagerCustomTagsStore_pageCustomTagsData.get(k.pageID);
k.oldTags.forEach(function(o){
if(n&&n.has(o)&&o!==k.tagName)
n['delete'](o);});


this.$PagesManagerCustomTagsStore_pageCustomTagsData.set(k.pageID,n);
this.__dispatcher.dispatch
({type:c('PagesManagerCustomTagsActionType').UPDATE,
pageID:k.pageID,
customTags:[m.payload],
hasTagListChanged:true});

c('PageCustomerActions').resetData(k.pageID);}.
bind(this)).
send();
break;

default:break;}};




f.exports=new j(c('PagesManagerDispatcher'));}),null);

/** js/pages/pages_manager/custom_tags/view/PageCustomTagColorSelector.react.js */







__d('PageCustomTagColorSelector.react',['ix','cx','xuiglyph','ContextualLayer.react','Image.react','PageCustomTagConsts','React','XUICard.react'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,



m=c('PageCustomTagConsts').COLORS;k=babelHelpers.inherits
















(n,c('React').Component);l=k&&k.prototype;


function n(o){
l.constructor.call(this,o);this.



$PageCustomTagColorSelector_onToggleSelector=function(p){
this.props.onToggleSelector(p);
this.setState({openSelector:p});}.
bind(this);this.

$PageCustomTagColorSelector_onSelectColor=function(p){
this.props.onSelectColor(p);
this.setState({openSelector:false});}.
bind(this);this.state={openSelector:false};}n.prototype.

$PageCustomTagColorSelector_getBorderColor=function(o){
return '#'+m[o].border.substring(2);};
n.prototype.

$PageCustomTagColorSelector_getFillColor=function(o){
return '#'+m[o].fill.substring(2);};
n.prototype.

$PageCustomTagColorSelector_getCheckmark=function(o){
var p=null;
if(o==='FF000000'){
p=h("88838");}else 

p=
'/images/pages/context_card/checkmark/checkmark_'+o+'.png';

return c('React').createElement(c('Image.react'),{src:p});};
n.prototype.

render=function(){
var o=
'/images/pages/context_card/triangle_down/triangle_down_'+
this.props.selectedColor+'.png';

return (c('React').createElement('span',null,
c('React').createElement('div',
{className:"_1fj6"+

(this.state.openSelector?' '+"_1fj7":''),

ref:'colorSelector'},
c('React').createElement(c('XUICard.react'),
{className:"_1fjd",
style:
{borderColor:this.$PageCustomTagColorSelector_getBorderColor(this.props.selectedColor),
backgroundColor:this.$PageCustomTagColorSelector_getFillColor(this.props.selectedColor)},

onClick:function(){return this.$PageCustomTagColorSelector_onToggleSelector(!this.state.openSelector);}.bind(this)},
c('React').createElement(c('Image.react'),{src:o}))),


c('React').createElement(c('ContextualLayer.react'),
{contextRef:function(){return this.refs.colorSelector;}.bind(this),
shown:this.state.openSelector,
onToggle:function(p){return !p&&this.$PageCustomTagColorSelector_onToggleSelector;}.bind(this),
position:'below',
alignment:'left'},
c('React').createElement('div',{className:"_1fj8"},
c('React').createElement('div',{className:"_1fjb"}),
Object.keys(m).map(function(p){
return (c('React').createElement(c('XUICard.react'),
{className:"_1fjc",
key:p,
style:
{borderColor:this.$PageCustomTagColorSelector_getBorderColor(p),
backgroundColor:this.$PageCustomTagColorSelector_getFillColor(p)},

onClick:function(){return this.$PageCustomTagColorSelector_onSelectColor(p);}.bind(this)},
p===this.props.selectedColor?
this.$PageCustomTagColorSelector_getCheckmark(p):null));}.bind(this))))));};









f.exports=n;}),null);

/** js/pages/pages_manager/custom_tags/view/PageCustomTagSearchableEntry.js */





__d('PageCustomTagSearchableEntry',['SearchableEntry'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits





(j,c('SearchableEntry'));i=h&&h.prototype;


function j(k){'use strict';
i.constructor.call(this,{uniqueID:k.id,title:k.name});
this.$PageCustomTagSearchableEntry_data=k;}
j.prototype.

getColor=function(){'use strict';
return '#'+this.$PageCustomTagSearchableEntry_data.color.substring(2);};
j.prototype.

getBorderColor=function(){'use strict';
return '#'+this.$PageCustomTagSearchableEntry_data.borderColor.substring(2);};
j.prototype.

getFillColor=function(){'use strict';
return '#'+this.$PageCustomTagSearchableEntry_data.fillColor.substring(2);};
j.prototype.

getFBID=function(){'use strict';
return this.$PageCustomTagSearchableEntry_data.id;};
j.prototype.

getData=function(){'use strict';
return this.$PageCustomTagSearchableEntry_data;};



f.exports=j;}),null);

/** js/pages/pages_manager/custom_tags/view/PageCustomTagSearchSource.js */






__d('PageCustomTagSearchSource',['AbstractSearchSource','PageCustomTagSearchableEntry'],(function a(b,c,d,e,f,g){var h,i,






j=3,

k=[];h=babelHelpers.inherits

(l,c('AbstractSearchSource'));i=h&&h.prototype;l.



getInstance=
function(m,
n){
'use strict';
var o=n?1:0;
if(!k[o]){
k[o]=
new l(m,n);}else 

k[o].setAvailableTags(m);

return k[o];};


function l
(m,
n){
'use strict';
i.constructor.call(this);
var o=n?1:0;
if(!(k[o])){






this.setAvailableTags(m);
this.setShowQueryAsEntry(n);}}

l.prototype.

setAvailableTags=function(m){'use strict';
this.$PageCustomTagSearchSource_availableTags=m;};
l.prototype.

setShowQueryAsEntry=function(m){'use strict';
this.$PageCustomTagSearchSource_showQueryAsEntry=m;};
l.prototype.

searchImpl=function(m,n,o){'use strict';
var p=[],
q=false;
if(m){
var r=m.toLowerCase();
this.$PageCustomTagSearchSource_availableTags.forEach(function(u){
if(u.name.toLowerCase().indexOf(r)!==-1)
p.push(u);

if(m===u.name)
q=true;});}else 



p=this.$PageCustomTagSearchSource_availableTags.slice(0,j);


var s=[],
t=0;
if(m&&!q&&this.$PageCustomTagSearchSource_showQueryAsEntry)
s.push(new (c('PageCustomTagSearchableEntry'))
({id:0,
color:'',
borderColor:'',
fillColor:'',
name:m}));



p.forEach(function(u){
s.push(new (c('PageCustomTagSearchableEntry'))(u));});


n(s,m);};



f.exports=l;}),null);

/** js/pages/pages_manager/custom_tags/view/PageCustomTagTypeaheadPresenter.react.js */






__d('PageCustomTagTypeaheadPresenter.react',['cx','fbt','ContextualLayerUpdateOnScroll','LeftRight.react','PageCustomTagSearchableEntry','React','XUITypeaheadViewItem.react','emptyFunction'],(function a(b,c,d,e,f,g,h,i){var j,k,l,m,n,o;j=babelHelpers.inherits













(p,c('React').Component);k=j&&j.prototype;p.prototype.


render=function(){'use strict';
var t=this.props.entry,

u="_599m"+

(this.props.highlighted?' '+"_599n":''),


v={};
if(!this.props.searchBar)
v.color=this.props.highlighted?'white':t.getColor();


var w=!t.getFBID();

return (c('React').createElement('li',
{'aria-selected':this.props.highlighted,
className:u,
key:t.getUniqueID(),
onMouseDown:function(x){return this.props.onSelect(t,x);}.bind(this),
onMouseEnter:function(){return this.props.onHighlight(t);}.bind(this)},
c('React').createElement(c('LeftRight.react'),null,
c('React').createElement('div',{style:v},
t.getTitle()),

w?
c('React').createElement('div',{className:"_507"},i._(["+ New Label","d3bb1b83a9433860a56d3a818d06777e"])):





null)));};




function p(){'use strict';j.apply(this,arguments);}l=babelHelpers.inherits


(q,c('React').Component);m=l&&l.prototype;q.prototype.



$PageCustomTagsRenderer_renderItem=function(t){'use strict';

return (c('React').createElement(p,
{entry:t,
key:t.getUniqueID(),
highlighted:t===this.props.highlightedEntry,
onHighlight:this.props.onHighlight,
onRenderHighlight:this.props.onRenderHighlight,
onSelect:this.props.onSelect,
searchBar:this.props.searchBar}));};


q.prototype.

render=function(){'use strict';
var t=
(!this.props.searchBar?"_50ig":'')+
(!this.props.entries.length?' '+"_599s":'');


return (c('React').createElement('ul',
{className:t,
onMouseLeave:function(){return this.props.removeHighlight();}.bind(this)},
this.props.entries.map(function(u){return this.$PageCustomTagsRenderer_renderItem(u);}.bind(this))));};


function q(){'use strict';l.apply(this,arguments);}n=babelHelpers.inherits


(r,c('React').Component);o=n&&n.prototype;r.prototype.




render=function(){'use strict';
var t=this.props.entry;

return (c('React').createElement('span',
{className:"_4n1-",
style:{color:t.getColor()}},
t.getTitle()));};


function r(){'use strict';n.apply(this,arguments);}


var s=
{useLayer:true,
layerBehaviors:
{ContextualLayerUpdateOnScroll:c('ContextualLayerUpdateOnScroll')},

ViewRenderer:q,
TokenRenderer:r};







q.defaultProps=
{removeHighlight:c('emptyFunction'),
searchBar:false};


f.exports=s;}),null);

/** js/pages/pages_manager/custom_tags/view/PagesManagerManageCustomTagsDialog.react.js */







__d('PagesManagerManageCustomTagsDialog.react',['cx','fbt','immutable','LeftRight.react','Link.react','ObjectSort','PageCustomTagColorSelector.react','PagesAdminToolUIActionType','PagesContextCardCustomTag.react','PagesManagerCustomTagsAction','PagesManagerLogger','PagesSelectableListCheckbox.react','React','ScrollableArea.react','XUIButton.react','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogCancelButton.react','XUIDialogFooter.react','XUIDialogTitle.react','XUISortableDataTable.react','XUITextInput.react','curry','nullthrows'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,
































l=350,
m=500,
n=225,
o=25,
p=5;j=babelHelpers.inherits


















(q,c('React').Component);k=j&&j.prototype;


function q(r){
k.constructor.call(this,r);this.












$PagesManagerManageCustomTagsDialog_onClickDeleteLink=function(s){
c('PagesManagerLogger').logManageTagUIAction
(c('PagesAdminToolUIActionType').TAG_MANAGEMENT_CLICK_DELETE_LINK,
this.props.pageID,

{fbid:s.id,
tag_name:s.name});


if(this.state.selectedRows.indexOf(s.name)>=0)
this.$PagesManagerManageCustomTagsDialog_deleteTagFromSelectedRows(s.name);

this.$PagesManagerManageCustomTagsDialog_onToggleDeleteConfirmationDialog(true,s);}.
bind(this);this.

$PagesManagerManageCustomTagsDialog_onToggleDeleteConfirmationDialog=function(s,t){
this.setState
({deleteConfirmationDialogProps:
{show:s,
actionTag:s?c('nullthrows')(t):null}});}.


bind(this);this.

$PagesManagerManageCustomTagsDialog_onConfirmDelete=function(){
var s=
c('nullthrows')(this.state.deleteConfirmationDialogProps.actionTag);
c('PagesManagerLogger').logManageTagUIAction
(c('PagesAdminToolUIActionType').TAG_MANAGEMENT_CLICK_CONFIRM_DELETE,
this.props.pageID,

{fbid:s.id,
tag_name:s.name});


c('PagesManagerCustomTagsAction').deleteCustomTag
(this.props.pageID,
s.name);

this.$PagesManagerManageCustomTagsDialog_onToggleDeleteConfirmationDialog(false);}.
bind(this);this.








































$PagesManagerManageCustomTagsDialog_onSelectColor=function(s,t){
c('PagesManagerLogger').logManageTagUIAction
(c('PagesAdminToolUIActionType').TAG_MANAGEMENT_CLICK_CHANGE_COLOR,
this.props.pageID,

{fbid:s.id,
tagName:s.name});


c('PagesManagerCustomTagsAction').editCustomTagColor
(this.props.pageID,
s.name,
t);}.

bind(this);this.

$PagesManagerManageCustomTagsDialog_onToggleColorSelector=function(s){
c('PagesManagerLogger').logManageTagUIAction
(c('PagesAdminToolUIActionType').TAG_MANAGEMENT_CLICK_COLOR_SELECTOR,
this.props.pageID,

{show:s});}.


bind(this);this.

$PagesManagerManageCustomTagsDialog_onTagNameInputChange=function(event){
this.setState({tagNameInputValue:event.target.value});}.
bind(this);this.

$PagesManagerManageCustomTagsDialog_onMergeTagNameInputChange=function(event){
this.setState({mergeTagNameInputValue:event.target.value});}.
bind(this);this.

$PagesManagerManageCustomTagsDialog_onClickAddCustomTag=function(){
c('PagesManagerLogger').logManageTagUIAction
(c('PagesAdminToolUIActionType').TAG_MANAGEMENT_CLICK_ADD_TAG,
this.props.pageID,

{tag_name:this.state.tagNameInputValue});


c('PagesManagerCustomTagsAction').createCustomTag
(this.props.pageID,
this.state.tagNameInputValue);

this.setState({tagNameInputValue:''});}.
bind(this);this.

$PagesManagerManageCustomTagsDialog_onClickMergeCustomTag=function(){
c('PagesManagerLogger').logManageTagUIAction
(c('PagesAdminToolUIActionType').TAG_MANAGEMENT_CLICK_MERGE_TAG,
this.props.pageID,

{tag_name:this.state.mergeTagNameInputValue});


c('PagesManagerCustomTagsAction').mergeCustomTag
(this.props.pageID,
this.state.mergeTagNameInputValue,
this.state.selectedRows);

this.$PagesManagerManageCustomTagsDialog_onToggleMergingLabels(false);
this.setState({mergeTagNameInputValue:'',selectedRows:[]});}.
bind(this);this.

$PagesManagerManageCustomTagsDialog_onHoverOverTag=function(s){
this.setState({hoveredTag:s});}.
bind(this);this.














$PagesManagerManageCustomTagsDialog_handleLabelCheckbox=function(s){
if(this.state.selectedRows.indexOf(s)>=0){
this.$PagesManagerManageCustomTagsDialog_deleteTagFromSelectedRows(s);}else 

this.$PagesManagerManageCustomTagsDialog_addTagToSelectedRows(s);}.

bind(this);this.



















































































































































$PagesManagerManageCustomTagsDialog_onToggleMergingLabels=function(s){
c('PagesManagerCustomTagsAction').toggleMergeLabelsSection
(this.props.pageID,
s);}.

bind(this);this.state={deleteConfirmationDialogProps:{show:false,actionTag:null},tagNameInputValue:'',mergeTagNameInputValue:'',selectedRows:[],hoveredTag:''};}q.prototype.$PagesManagerManageCustomTagsDialog_getDeleteConfirmationDialog=function(){return c('React').createElement(c('XUIDialog.react'),{layerHideOnBlur:false,onToggle:function(r){return !r&&this.$PagesManagerManageCustomTagsDialog_onToggleDeleteConfirmationDialog(r);}.bind(this),shown:this.state.deleteConfirmationDialogProps.show,width:l},c('React').createElement(c('XUIDialogTitle.react'),{showCloseButton:false},i._(["Delete Label?","4753eff890771f16d3ed70bddf8e0b1e"])),c('React').createElement(c('XUIDialogBody.react'),null,i._(["Are you sure to delete label \"{label name}\"?","11a282f91cbe4f15c22b088949693f0b"],[i.param('label name',this.state.deleteConfirmationDialogProps.actionTag!==null?this.state.deleteConfirmationDialogProps.actionTag.name:null)])),c('React').createElement(c('XUIDialogFooter.react'),null,c('React').createElement(c('XUIDialogCancelButton.react'),null),c('React').createElement(c('XUIDialogButton.react'),{action:'confirm',label:i._(["Confirm","c3015ab540a980374970a21cb8160b7c"]),onClick:this.$PagesManagerManageCustomTagsDialog_onConfirmDelete,use:'confirm'})));};q.prototype.$PagesManagerManageCustomTagsDialog_deleteTagFromSelectedRows=function(r){var s=this.state.selectedRows,t=this.state.selectedRows.indexOf(r);s.splice(t,1);this.setState({selectedRows:s});};q.prototype.$PagesManagerManageCustomTagsDialog_addTagToSelectedRows=function(r){var s=this.state.selectedRows;s.push(r);this.setState({selectedRows:s});};q.prototype.$PagesManagerManageCustomTagsDialog_renderCheckbox=function(r){if(this.state.hoveredTag===r||this.state.selectedRows.indexOf(r)>=0)return c('React').createElement(c('PagesSelectableListCheckbox.react'),{checked:this.state.selectedRows.indexOf(r)>=0,className:"_54un",onChange:c('curry')(this.$PagesManagerManageCustomTagsDialog_handleLabelCheckbox,r)});return null;};q.prototype.$PagesManagerManageCustomTagsDialog_renderMergeTagFooter=function(){return c('React').createElement('div',{className:"_42xa"},c('React').createElement(c('XUITextInput.react'),{className:"_42xc",placeholder:i._(["Name the new combined label...","926677c47b85ef30025433b2e345a67f"]),xuiError:this.$PagesManagerManageCustomTagsDialog_getMergeTagError(),onChange:this.$PagesManagerManageCustomTagsDialog_onMergeTagNameInputChange,value:this.state.mergeTagNameInputValue,maxLength:o}),c('React').createElement(c('XUIButton.react'),{className:"_42xd",label:i._(["Combine","fc680cac091f7deafdab0c57a5b7a095"]),disabled:this.$PagesManagerManageCustomTagsDialog_getMergeTagError()||this.state.mergeTagNameInputValue===''||this.state.selectedRows.length<2,use:'confirm',onClick:this.$PagesManagerManageCustomTagsDialog_onClickMergeCustomTag}));};q.prototype.$PagesManagerManageCustomTagsDialog_renderAddTagFooter=function(){return c('React').createElement('div',{className:"_5hry"},c('React').createElement(c('XUITextInput.react'),{className:"_5hrz",placeholder:i._(["Add a label for products, services or common questions...","4edf71e582b375cc7472c739f38c80d9"]),xuiError:this.$PagesManagerManageCustomTagsDialog_getAddTagError(),onChange:this.$PagesManagerManageCustomTagsDialog_onTagNameInputChange,value:this.state.tagNameInputValue,maxLength:o}),c('React').createElement(c('XUIButton.react'),{className:"_5hr-",label:i._(["Add","336abbe15511f7ec6bb72009d046715b"]),disabled:this.$PagesManagerManageCustomTagsDialog_getAddTagError()||this.state.tagNameInputValue==='',use:'confirm',onClick:this.$PagesManagerManageCustomTagsDialog_onClickAddCustomTag}));};q.prototype.$PagesManagerManageCustomTagsDialog_renderTagList=function(){if(this.props.customTags.size===0)return null;var r=c('React').createElement('div',{className:"_31fn"},this.props.customTags.toArray().map(function(s){return c('React').createElement(c('LeftRight.react'),{className:"_2zxg",key:s.id,onMouseEnter:c('curry')(this.$PagesManagerManageCustomTagsDialog_onHoverOverTag,s.name),onMouseLeave:c('curry')(this.$PagesManagerManageCustomTagsDialog_onHoverOverTag,'')},c('React').createElement('div',null,this.$PagesManagerManageCustomTagsDialog_renderCheckbox(s.name),c('React').createElement(c('PageCustomTagColorSelector.react'),{selectedColor:s.color,onSelectColor:function(t){return this.$PagesManagerManageCustomTagsDialog_onSelectColor(s,t);}.bind(this),onToggleSelector:this.$PagesManagerManageCustomTagsDialog_onToggleColorSelector}),c('React').createElement(c('PagesContextCardCustomTag.react'),{canRemove:false,tagData:s})),c('React').createElement(c('Link.react'),{onClick:c('curry')(this.$PagesManagerManageCustomTagsDialog_onClickDeleteLink,s)},i._(["Delete","1d42b0f1979bd4f3696545ad6465c3b3"])));}.bind(this)));if(this.props.customTags.size>p)return c('React').createElement(c('ScrollableArea.react'),{height:n},r);return r;};q.prototype.$PagesManagerManageCustomTagsDialog_getAddTagError=function(){if(this.props.customTags.has(this.state.tagNameInputValue))return i._(["Label name must be unique.","d08a5af43da877fb1b3eca0e289bdf59"]);if(this.state.tagNameInputValue.indexOf(':')!==-1)return i._(["Label name can not contain ':'.","6ca5c8bc566388b342e6164e8fa0cb35"]);return null;};q.prototype.$PagesManagerManageCustomTagsDialog_getMergeTagError=function(){if(this.state.mergeTagNameInputValue.indexOf(':')!==-1)return i._(["Label name can not contain ':'.","6ca5c8bc566388b342e6164e8fa0cb35"]);return null;};q.prototype.

render=function(){
var r=this.props.isMergingLabels&&
this.state.selectedRows.length>1?this.$PagesManagerManageCustomTagsDialog_renderMergeTagFooter():
this.$PagesManagerManageCustomTagsDialog_renderAddTagFooter();

return (c('React').createElement(c('XUIDialog.react'),
{layerHideOnBlur:false,
onToggle:this.props.onToggle,
shown:this.props.show,
width:m},
c('React').createElement(c('XUIDialogTitle.react'),{showCloseButton:false},i._(["Add & Manage Labels","83fcc9121991063d7b0c891f7d7a7b80"])),




c('React').createElement(c('XUIDialogBody.react'),null,
c('React').createElement('div',{className:"_5hrx"},i._(["Labels help you track and find conversations. Create your own labels and apply them to people based on what they messaged you about.","cfd598681294e167987beecf62de5610"])),






c('React').createElement('div',{className:
(this.state.selectedRows.length<2||
this.props.isMergingLabels?"hidden_elem":'')+(' '+"_54uo")},


c('React').createElement(c('XUIButton.react'),
{className:
"_54up",

label:i._(["Combine","fc680cac091f7deafdab0c57a5b7a095"]),
use:'confirm',
onClick:c('curry')(this.$PagesManagerManageCustomTagsDialog_onToggleMergingLabels,true)})),


this.$PagesManagerManageCustomTagsDialog_renderTagList(),
this.$PagesManagerManageCustomTagsDialog_getDeleteConfirmationDialog(),
r),

c('React').createElement(c('XUIDialogFooter.react'),null,
c('React').createElement(c('XUIDialogButton.react'),
{action:'cancel',
label:i._(["Close","9e07139ead0ae96ad67c68e45066f828"]),
use:'confirm'}))));};







f.exports=q;}),null);

/** js/pages/pages_manager/inbox/flux/view/PagesManagerInboxSwitcher.react.js */







__d('PagesManagerInboxSwitcher.react',['ix','cx','fbt','Image.react','PagesManagerInboxSwitcherUtil','React','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){var k,l;k=babelHelpers.inherits














(m,c('React').PureComponent);l=k&&k.prototype;m.prototype.


render=function(){'use strict';

return (c('React').createElement('div',
{className:"_1tvr _4w2j",

onClick:
function(){return c('PagesManagerInboxSwitcherUtil').switchToInbox
(this.props.pageID,
this.props.pageToken);}.bind(this),

role:'button',
tabIndex:0},
c('React').createElement('div',{className:"_259i"},j._(["Go to New Inbox","67516641c93614d4b314e0000777dab7"])),




c('React').createElement(c('Image.react'),
{className:"_1tvs",
src:h("133558")})));};







function m(){'use strict';k.apply(this,arguments);}

f.exports=m;}),null);

/** js/pages/pages_manager/messages/flux/dispatcher/PagesManagerMessagingAwayStatusDispatcher.js */





__d('PagesManagerMessagingAwayStatusDispatcher',['ReactDispatcher_DEPRECATED'],(function a(b,c,d,e,f,g){



f.exports=new (c('ReactDispatcher_DEPRECATED'))();}),null);

/** js/pages/pages_manager/messages/flux/actions/PagesManagerAwayToggleAction.js */





__d('PagesManagerAwayToggleAction',['PagesManagerMessagingActionType','PagesManagerMessagingAwayStatusDispatcher','PagesAdminToolUIActionType','PagesManagerLogger'],(function a(b,c,d,e,f,g){

'use strict';






var h=
{fetchStatus:function i(j){
c('PagesManagerMessagingAwayStatusDispatcher').dispatch
({pageID:j,
type:c('PagesManagerMessagingActionType').AWAY_STATE.FETCH});},



setToggleStatus:function i(j,k){
c('PagesManagerLogger').logMessageInboxUIAction
(c('PagesAdminToolUIActionType').MESSAGE_INBOX_CLICK_AWAY_TOGGLE,
j,

{away:k});


c('PagesManagerMessagingAwayStatusDispatcher').dispatch
({pageID:j,
toggle:k,
type:c('PagesManagerMessagingActionType').AWAY_STATE.SET});}};




f.exports=h;}),null);

/** js/pages/pages_manager/messages/views/PagesManagerAwayBanner.react.js */






__d('PagesManagerAwayBanner.react',['cx','fbt','ix','PagesManagerAwayToggleAction','Image.react','LeftRight.react','Link.react','PagesManagerResizeListener','PagesManagerCountDownTimer.react','React','XUIText.react'],(function a(b,c,d,e,f,g,h,i,j){var k,l,















m='/help/800788243369168';k=babelHelpers.inherits








(n,c('React').Component);l=k&&k.prototype;n.prototype.
$PagesManagerAwayBanner_onTimeup=function(){'use strict';
c('PagesManagerAwayToggleAction').setToggleStatus(this.props.pageID,false);};
n.prototype.

componentDidUpdate=function(o){'use strict';
if(o.isAway!==this.props.isAway)
c('PagesManagerResizeListener').emit('change');};

n.prototype.

renderLeftChild=function(){'use strict';
var o=this.props.expirationTimestamp*1000;


return (c('React').createElement('div',null,
c('React').createElement(c('Image.react'),
{className:"_2fei",
src:j("94985")}),

c('React').createElement(c('XUIText.react'),
{className:"_2fek",
size:'small',
display:'inline'},i._(["Currently Away","0c8104c2fdccd088b92fb1049d4eac27"]),



c('React').createElement('div',{className:"_2fel"},
c('React').createElement(c('PagesManagerCountDownTimer.react'),
{expireTimestamp:o,
isHidden:!this.props.isAway,
isNewInbox:true,
onTimeup:function(){return this.$PagesManagerAwayBanner_onTimeup();}.bind(this)})))));};





n.prototype.

renderRightChild=function(){'use strict';

return (c('React').createElement('div',null,
c('React').createElement(c('Link.react'),
{className:"_2fem",
href:m,
target:'_blank'},i._(["Learn More","45c45734e7d20646ed0dca3bab28fb66"])),




c('React').createElement(c('XUIText.react'),
{className:"_2fen",
onClick:function(){
c('PagesManagerAwayToggleAction').setToggleStatus(this.props.pageID,false);}.
bind(this)},i._(["Turn Off","0f33cf3c058ea35d3e55140d21cad47a"]))));};






n.prototype.

render=function(){'use strict';
if(!this.props.isInitialized)
return c('React').createElement('div',null);


return (c('React').createElement(c('LeftRight.react'),
{className:"_2feo"+

(!this.props.isAway?' '+"hidden_elem":'')},

this.renderLeftChild(),
this.renderRightChild()));};


function n(){'use strict';k.apply(this,arguments);}


f.exports=n;}),null);

/** www/__virtual__/x/XPagesAwayToggleController.js */



__d("XPagesAwayToggleController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/manager\/messages\/awaytoggle\/",{});}),

null);

/** www/__virtual__/x/XPagesAwayToggleStatusController.js */



__d("XPagesAwayToggleStatusController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/manager\/messages\/awaytoggle\/status\/",{});}),

null);

/** js/pages/pages_manager/messages/flux/store/PagesManagerMessagingAwayStatusStore.js */





__d('PagesManagerMessagingAwayStatusStore',['ActorURI','AsyncRequest','PagesManagerMessagingActionType','FluxStore','PagesManagerMessagingAwayStatusDispatcher','XPagesAwayToggleController','XPagesAwayToggleStatusController'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits









(j,c('FluxStore'));i=h&&h.prototype;




function j(k){
i.constructor.call(this,k);
this.$PagesManagerMessagingAwayStatusStore_isAway=false;
this.$PagesManagerMessagingAwayStatusStore_isInitialized=false;
this.$PagesManagerMessagingAwayStatusStore_expirationTimestamp=0;}
j.prototype.

$PagesManagerMessagingAwayStatusStore_fetchAwayState=function(k){
var l=c('XPagesAwayToggleStatusController').getURIBuilder().getURI();
l=c('ActorURI').create(l,k);
new (c('AsyncRequest'))().
setURI(l).
setHandler(function(m){
this.$PagesManagerMessagingAwayStatusStore_isAway=m.payload.isAway;
this.$PagesManagerMessagingAwayStatusStore_expirationTimestamp=m.payload.expiration;
this.$PagesManagerMessagingAwayStatusStore_isInitialized=true;
this.__dispatcher.dispatch({type:c('PagesManagerMessagingActionType').AWAY_STATE.UPDATE});}.
bind(this)).
send();};
j.prototype.

$PagesManagerMessagingAwayStatusStore_updateAwayState=function(k,l){
var m=c('XPagesAwayToggleController').getURIBuilder().getURI();
m=c('ActorURI').create(m,k);
new (c('AsyncRequest'))().
setURI(m).
setMethod('POST').
setData
({is_away:l}).

setHandler(function(n){
this.$PagesManagerMessagingAwayStatusStore_isAway=n.payload.isAway;
this.$PagesManagerMessagingAwayStatusStore_expirationTimestamp=n.payload.expiration;
this.__dispatcher.dispatch({type:c('PagesManagerMessagingActionType').AWAY_STATE.UPDATE});}.
bind(this)).
send();};
j.prototype.

__onDispatch=function(k){
switch(k.type){
case c('PagesManagerMessagingActionType').AWAY_STATE.SET:
this.$PagesManagerMessagingAwayStatusStore_updateAwayState(k.pageID,k.toggle);
break;
case c('PagesManagerMessagingActionType').AWAY_STATE.FETCH:
this.$PagesManagerMessagingAwayStatusStore_fetchAwayState(k.pageID);
break;
case c('PagesManagerMessagingActionType').AWAY_STATE.UPDATE:
this.__emitChange();
break;

default:break;}};

j.prototype.

isAway=function(){
return this.$PagesManagerMessagingAwayStatusStore_isAway;};
j.prototype.

isInitialized=function(){
return this.$PagesManagerMessagingAwayStatusStore_isInitialized;};
j.prototype.

getExpirationTimestamp=function(){
return this.$PagesManagerMessagingAwayStatusStore_expirationTimestamp;};



f.exports=new j(c('PagesManagerMessagingAwayStatusDispatcher'));}),null);

/** js/pages/pages_manager/messages/flux/container/PagesManagerAwayContainer.react.js */





__d('PagesManagerAwayContainer.react',['PagesManagerMessagingAwayStatusStore','PagesManagerAwayToggleAction','FluxContainer','React'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits


















(j,c('React').Component);i=h&&h.prototype;j.

getStores=function(){'use strict';
return [c('PagesManagerMessagingAwayStatusStore')];};


j.

calculateState=function(k,l){'use strict';

return {isAway:c('PagesManagerMessagingAwayStatusStore').isAway(),
isInitialized:c('PagesManagerMessagingAwayStatusStore').isInitialized(),
expirationTimestamp:c('PagesManagerMessagingAwayStatusStore').getExpirationTimestamp()};};

j.prototype.

componentWillMount=function(){'use strict';
c('PagesManagerAwayToggleAction').fetchStatus(this.props.pageID);};
j.prototype.

render=function(){'use strict';var k=
this.props,l=k.RenderClass,m=babelHelpers.objectWithoutProperties(k,['RenderClass']);

return (c('React').createElement(l,babelHelpers['extends']({},
m,
this.state)));};


function j(){'use strict';h.apply(this,arguments);}


f.exports=c('FluxContainer').create
(j,
{withProps:true});}),null);

/** js/pages/pages_manager/messages/booking_flow/NativeBookingFlowAdminNotesMutation.js */





__d('NativeBookingFlowAdminNotesMutation',['Relay','RelayMutationType'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits
















(j,c('Relay').Mutation);i=h&&h.prototype;j.prototype.

getMutation=function(){
return function(){return {calls:[{kind:'Call',metadata:{},name:'request_note_update',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'client_mutation_id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],kind:'Mutation',metadata:{inputType:'RequestNoteUpdateData!'},name:'NativeBookingFlowAdminNotesMutation',responseType:'RequestNoteUpdateResponsePayload'};}();};


j.prototype.

getVariables=function(){

return {action:this.props.action,
actor_id:this.props.actor_id,
body:this.props.body,
component_flow_request_id:this.props.component_flow_request_id,
request_note_id:this.props.request_note_id};};

j.prototype.

getFatQuery=function(){
return function(){return {children:[{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'component_flow_request',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isAbstract:true},type:'NativeComponentFlowRequest'},{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'request_note',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'PagesPlatformNote'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'NativeBookingFlowAdminNotesMutationRelayQL',type:'RequestNoteUpdateResponsePayload'};}();};





j.prototype.

getConfigs=function(){

return [{type:c('RelayMutationType').FIELDS_CHANGE,
fieldIDs:
{component_flow_request:this.props.component_flow_request_id}}];};


function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/pages/pages_manager/messages/booking_flow/NativeComponentFlowBookingRequestMutation.js */





__d('NativeComponentFlowBookingRequestMutation',['Relay','RelayMutationType'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits























(j,c('Relay').Mutation);i=h&&h.prototype;j.prototype.

getMutation=function(){
return function(){return {calls:[{kind:'Call',metadata:{},name:'native_booking_request_status_update',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'client_mutation_id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],kind:'Mutation',metadata:{inputType:'NativeBookingRequestStatusUpdateData!'},name:'NativeComponentFlowBookingRequestMutation',responseType:'NativeBookingRequestStatusUpdateResponsePayload'};}();};


j.prototype.

getVariables=function(){

return {action:this.props.action,
actor_id:this.props.actor_id,
message_text:this.props.message_text,
page_id:this.props.page_id,
referrer:this.props.referrer,
request_id:this.props.request_id,
request_owner_id:this.props.request_owner_id,
service_id:this.props.service_id,
suggested_end_time:this.props.suggested_end_time,
suggested_time:this.props.suggested_time};};

j.prototype.

getFatQuery=function(){
return function(){return {children:[{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'request',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'NativeComponentFlowBookingRequest'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'NativeComponentFlowBookingRequestMutationRelayQL',type:'NativeComponentFlowRequestRescheduleResponsePayload'};}();};




j.prototype.

getConfigs=function(){

return [{type:c('RelayMutationType').FIELDS_CHANGE,
fieldIDs:
{request:this.props.request_id||''}}];};


function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/pages/pages_manager/messages/booking_flow/PagesAppointmentDateTimeRangePicker.react.js */






__d('PagesAppointmentDateTimeRangePicker.react',['cx','fbt','BUIDatePicker.react','BUITimeInput.react','DateTime','Link.react','LocalDate','React','TimeOfDay','Timezone'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,









l=c('Timezone').getEnvironmentTimezoneID,m=c('Timezone').UTC,



n=l()||m,
o=c('LocalDate').today(n),
p=
[function(s){return s.isAfterOrEqual(o);}];j=babelHelpers.inherits


















(q,c('React').Component);k=j&&j.prototype;



function q(s){
k.constructor.call(this,s);r.call(this);
var t=s.value||
{from:c('TimeOfDay').fromDateTime(c('DateTime').now(n)).addMinutes(15),
until:null,
date:o};

this.state=
{value:t,
showUntil:Boolean(t.until)};}

q.prototype.

shouldComponentUpdate=function(s,t){

return (!this.$PagesAppointmentDateTimeRangePicker_areEqual(this.props.value,s.value)||
!this.$PagesAppointmentDateTimeRangePicker_areEqual(this.state.value,t.value)||
this.state.showUntil!==t.showUntil);};

q.prototype.

componentWillReceiveProps=function(s){
if(s.value&&!this.$PagesAppointmentDateTimeRangePicker_areEqual(this.props.value,s.value))
this.setState
({value:s.value,
showUntil:Boolean(s.value.until)});};


q.prototype.

componentDidMount=function(){
this.props.onChange(this.state.value);};
q.prototype.

$PagesAppointmentDateTimeRangePicker_areEqual=
function(s,
t){

if(!s&&!t)
return true;


if(s&&t){
if(!s.date.equals(t.date))
return false;

if(!s.from.equals(t.from))
return false;

if(!s.util&&!t.until)
return true;

if(s.until&&t.until&&s.until.equals(t.until))
return true;}



return false;};
q.prototype.























$PagesAppointmentDateTimeRangePicker_renderUntilTimeInput=function(){var s=
this.state.value,t=s.from,u=s.until;

if(this.state.showUntil)

return (c('React').createElement(c('BUITimeInput.react'),
{minValue:t,
onChange:this.$PagesAppointmentDateTimeRangePicker_handleUntilChange,
value:u}));




return (c('React').createElement(c('Link.react'),{onClick:this.$PagesAppointmentDateTimeRangePicker_showUntilTimeInput},i._(["+ End Time","a9a5d8fd461a654040812c3439e16573"])));};






q.prototype.

render=function(){var s=
this.state.value,t=s.date,u=s.from;


return (c('React').createElement('div',null,
c('React').createElement(c('BUIDatePicker.react'),
{dateRestraints:p,
onChange:this.$PagesAppointmentDateTimeRangePicker_handleDateChange,
value:t}),

c('React').createElement('div',{className:"_3-8x"},
c('React').createElement(c('BUITimeInput.react'),
{className:"_3-90",
onChange:this.$PagesAppointmentDateTimeRangePicker_handleFromChange,
value:u}),

this.$PagesAppointmentDateTimeRangePicker_renderUntilTimeInput())));};



var r=function s(){this.$PagesAppointmentDateTimeRangePicker_handleDateChange=function(t){var u=Object.assign({},this.state.value,{date:t});this.setState({value:u});this.props.onChange(u);}.bind(this);this.$PagesAppointmentDateTimeRangePicker_handleFromChange=function(t){var u=Object.assign({},this.state.value,{from:t});this.setState({value:u});this.props.onChange(u);}.bind(this);this.$PagesAppointmentDateTimeRangePicker_handleUntilChange=function(t){var u=Object.assign({},this.state.value,{until:t});this.setState({value:u});this.props.onChange(u);}.bind(this);this.$PagesAppointmentDateTimeRangePicker_showUntilTimeInput=function(){this.setState({showUntil:true});}.bind(this);};


f.exports=q;}),null);

/** www/__virtual__/webgraphql/PageAllServicesQueryWebGraphQLQuery.js */






__d("PageAllServicesQueryWebGraphQLQuery",["WebGraphQLQueryHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLQueryHelper").getExports
({docID:"1308264852564700",
queryID:"246146925834855"});}),null);

/** js/pages/pages_manager/messages/booking_flow/PagesCatalogItemsSelector.react.js */






__d('PagesCatalogItemsSelector.react',['fbt','AsyncRequest','PageAllServicesQueryWebGraphQLQuery','React','SUIBusinessTheme','SUISelector.react','SUISelectorOption.react','idx'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits




























(k,c('React').Component);j=i&&i.prototype;



function k(l){
j.constructor.call(this,l);this.





















$PagesCatalogItemsSelector_handleQuery=function(m){var n,o,p,q,
r=((n=m)!=null?(o=n.payload)!=null?(p=o.data)!=null?(q=p.page)!=null?q.services_card:q:p:o:n)||{},
s=r.card_visibility;
if(s==='published'){var t,u,v,
w=((t=r)!=null?(u=t.product_catalog)!=null?(v=u.catalog_items)!=null?v.edges:v:u:t)||[],
x=w.map(function(z){return z.node;}),
y=x.length>0;
this.setState({catalogItems:x,hasService:y},function(){
this.$PagesCatalogItemsSelector_handleChange(this.state.value);}.
bind(this));}}.

bind(this);this.

$PagesCatalogItemsSelector_handleChange=function(m){
this.setState({value:m});
this.props.onChange(m,this.state.hasService);}.
bind(this);this.state={catalogItems:l.catalogItems||[],hasService:false,value:null};}k.prototype.componentDidMount=function(){if(this.state.catalogItems.length===0){var l=c('PageAllServicesQueryWebGraphQLQuery').getURI({page_id:this.props.pageID});new (c('AsyncRequest'))(l).setHandler(this.$PagesCatalogItemsSelector_handleQuery).send();}else this.setState({hasService:true},function(){this.$PagesCatalogItemsSelector_handleChange(this.state.value);}.bind(this));};k.prototype.

render=function(){
var l=this.state.catalogItems;

if(l.length===0)
return null;



return (c('React').createElement(c('SUISelector.react'),
{onChange:this.$PagesCatalogItemsSelector_handleChange,
placeholder:h._(["Select a service","b3655865edfbc238a43c3e9774665f63"]),



theme:c('SUIBusinessTheme'),
value:this.state.value},
l.map(function(m){
return (c('React').createElement(c('SUISelectorOption.react'),{value:m.id,key:m.id},
m.name));})));};







f.exports=k;}),null);

/** js/pages/pages_manager/messages/utils/PagesManagerRequestTimeDialogType.js */





__d('PagesManagerRequestTimeDialogType',['keyMirror'],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c('keyMirror')
({ADMIN_CANCEL:null,
ADMIN_DECLINE:null,
CREATE_ANOTHER_APPOINTMENT:null,
LIST:null,
SCHEDULE:null,
USER_CANCEL:null,
USER_DECLINE:null,
USER_VIEW_DETAILS:null,
VIEW_DETAILS:null});}),null);

/** js/pages/platform/message_attachment/PagesPlatformBookingGlyphUtils.js */







__d('PagesPlatformBookingGlyphUtils',['ix','fbglyph'],(function a(b,c,d,e,f,g,h){

'use strict';



var i=
{'calendar:16:fig-light-20':h("125720"),




'calendar:16:fig-light-50':h("122516"),




'calendar:16:fig-white':h("114507"),




'calendar:20:fig-light-20':h("125721"),




'calendar:20:fig-light-50':h("122517"),




'calendar:20:fig-white':h("114508"),




'clock:16:fig-light-20':h("125848"),




'clock:20:fig-light-20':h("125849"),




'pin:20:fig-light-20':h("126598"),




'phone:20:fig-light-20':h("126569"),




'price-tag:20:fig-light-20':h("126650")},






j=
{selectGlyph:function k(l,m,n){
return i[l+':'+m+':'+n];}};



f.exports=j;}),null);

/** js/pages/pages_manager/messages/booking_flow/PagesManagerMessagingAppointmentDialogDetailPane.react.js */






__d('PagesManagerMessagingAppointmentDialogDetailPane.react',['cx','fbt','AbstractTextArea.react','ChatAppointmentUtil','DateTime','Image.react','ImageBlock.react','LocalDate','PagesAppointmentDateTimeRangePicker.react','PagesCatalogItemsSelector.react','PagesManagerRequestTimeDialogType','PagesPlatformBookingGlyphUtils','PagesPlatformNativeBookingStatus','React','Relay','Timezone','idx','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,l,m,

























n=c('Timezone').getEnvironmentTimezoneID()||c('Timezone').UTC,




















o=function t(){
return (c('React').createElement('div',
{className:"_9tb _3-8y"}));},




p=function t(u){
return (c('React').createElement('div',
{className:c('joinClasses')
(u.className,
"_9tc")},

u.children));},



q=function t(u){
return (c('React').createElement('div',
{className:c('joinClasses')
(u.className,
"_9te")},


u.children));};j=babelHelpers.inherits



(r,c('React').Component);k=j&&j.prototype;r.prototype.
render=function(){var t=






this.props,u=t.className,v=t.primaryText,w=t.secondaryText,x=t.src,y=t.subText,
z=x?c('ImageBlock.react'):'div',
aa=void 0;

if(!v)
return null;


if(x)
aa=
c('React').createElement('div',
{className:"_9tf"},

c('React').createElement(c('Image.react'),
{className:"_9tg",

src:x}));






return (c('React').createElement(z,{className:u,spacing:'medium'},
aa,
c('React').createElement('div',null,
w?
c('React').createElement(q,{className:"_3-94"},
w):

null,

c('React').createElement(p,
{className:
!w&&!y?"_3-8x":''},

v),

y?
c('React').createElement(q,{className:"_3-8w"},
y):

null)));};




function r(){j.apply(this,arguments);}l=babelHelpers.inherits


(s,
c('React').Component);m=l&&l.prototype;



function s(t){
m.constructor.call(this,t);this.
























$PagesManagerMessagingAppointmentDialogDetailPane_handleDataChange=function(){
this.props.onDataChange(this.$PagesManagerMessagingAppointmentDialogDetailPane_validateData());}.
bind(this);this.




























































































































































































































































































































































































































































































































































































































$PagesManagerMessagingAppointmentDialogDetailPane_handleDateTimeChange=function(u){
this.setState({dateTimeRange:u},this.$PagesManagerMessagingAppointmentDialogDetailPane_handleDataChange);}.
bind(this);this.

$PagesManagerMessagingAppointmentDialogDetailPane_handleAdminNotesChange=function(event){
var u=event.target.value;
this.setState({notes:u});}.
bind(this);this.

$PagesManagerMessagingAppointmentDialogDetailPane_handleCancelNotesChange=function(event){
var u=event.target.value;
this.setState({cancelNotes:u},this.$PagesManagerMessagingAppointmentDialogDetailPane_handleDataChange);}.
bind(this);this.

$PagesManagerMessagingAppointmentDialogDetailPane_handleServiceSelectorChange=
function(u,
v){

this.setState({serviceID:u,hasService:v},this.$PagesManagerMessagingAppointmentDialogDetailPane_handleDataChange);}.
bind(this);this.state=this.$PagesManagerMessagingAppointmentDialogDetailPane_initState(t);this.$PagesManagerMessagingAppointmentDialogDetailPane_handleDataChange();}s.prototype.componentWillReceiveProps=function(t){if(this.props.paneType!==t.paneType)this.setState(this.$PagesManagerMessagingAppointmentDialogDetailPane_initState(t),this.$PagesManagerMessagingAppointmentDialogDetailPane_handleDataChange);};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_initState=function(t){var u,v,w,x,y,z,aa;return {cancelNotes:this.$PagesManagerMessagingAppointmentDialogDetailPane_getDefaultDeclineOrCancelNotes(t),dateTimeRange:null,hasService:false,notes:((u=t)!=null?(v=u.appointment)!=null?(w=v.request_note)!=null?(x=w.edges)!=null?(y=x[0])!=null?(z=y.node)!=null?(aa=z.body)!=null?aa.text:aa:z:y:x:w:v:u)||'',serviceID:null};};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_validateData=function(){switch(this.props.paneType){case c('PagesManagerRequestTimeDialogType').CREATE_ANOTHER_APPOINTMENT:return this.$PagesManagerMessagingAppointmentDialogDetailPane_validateCreateAnotherAppointmentData();case c('PagesManagerRequestTimeDialogType').SCHEDULE:return this.$PagesManagerMessagingAppointmentDialogDetailPane_validateScheduleData();case c('PagesManagerRequestTimeDialogType').ADMIN_CANCEL:case c('PagesManagerRequestTimeDialogType').ADMIN_DECLINE:case c('PagesManagerRequestTimeDialogType').USER_CANCEL:case c('PagesManagerRequestTimeDialogType').USER_DECLINE:return this.$PagesManagerMessagingAppointmentDialogDetailPane_validateDeclineOrCancelData();}return {data:{},isValid:false};};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_getUnixTimestampSeconds=function(t,u){if(!t||!u)return null;return c('DateTime').localNow().set({second:u.second,minute:u.minute,hour:u.hour,day:t.day,month:t.month,year:t.year}).getUnixTimestampSeconds();};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_validateDeclineOrCancelData=function(){var t=this.state.cancelNotes;return {data:{cancelNotes:t},isValid:true};};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_validateCreateAnotherAppointmentData=function(){var t=this.state,u=t.serviceID,v=t.hasService,w=this.$PagesManagerMessagingAppointmentDialogDetailPane_validateScheduleData();w.data=babelHelpers['extends']({},w.data,{serviceID:u});if(v&&!u)w.isValid=false;return w;};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_validateScheduleData=function(){var t=this.state.dateTimeRange,u={data:{},isValid:false};if(t){var v=t.date,w=t.from,x=t.until,y=this.$PagesManagerMessagingAppointmentDialogDetailPane_getUnixTimestampSeconds(v,w),z=x&&x.isAfterOrEqual(w)?this.$PagesManagerMessagingAppointmentDialogDetailPane_getUnixTimestampSeconds(v,x):this.$PagesManagerMessagingAppointmentDialogDetailPane_getUnixTimestampSeconds(v.addDays(1),x),aa=c('DateTime').now(n).getUnixTimestampSeconds();if(y&&y>aa)u={data:{startTime:y,endTime:z},isValid:true};}return u;};s.prototype.getAppointmentDetail=function(){return this.state;};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_getDefaultDeclineOrCancelNotes=function(t){var u,v,w,x=((u=t)!=null?(v=u.appointment)!=null?(w=v.user)!=null?w.name:w:v:u)||'';switch(t.paneType){case c('PagesManagerRequestTimeDialogType').ADMIN_CANCEL:return i._(["Hi, {user name}. Unfortunately, we need to cancel this appointment. We're sorry for the inconvenience and would like to reschedule. Are there any other times that would work for you?","df69281dd5beac20cd392de08a35b956"],[i.param('user name',x)]);case c('PagesManagerRequestTimeDialogType').ADMIN_DECLINE:return i._(["Hi, {user name}. Unfortunately, the appointment times you've suggested aren't available. Are there any other times that would work for you?","9787d8a0f95a447a0505ea3e6c830839"],[i.param('user name',x)]);case c('PagesManagerRequestTimeDialogType').USER_CANCEL:case c('PagesManagerRequestTimeDialogType').USER_DECLINE:return i._(["Hello. Unfortunately, this time doesn't work for my schedule.","95506dcef75a43892c18e383062b394f"]);}return '';};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_renderCreateAnotherAppointmentPane=function(){var t=this.props.appointment;if(!t)return null;var u=t.page||{};return c('React').createElement('div',{className:"_zcq"},c('React').createElement('div',{className:"_3-96"},i._(["When you create an appointment, people will get a reminder the day before their service. It will also show as a calendar event.","a96902098c70f639b0e1846aeb78ee88"])),c('React').createElement(c('PagesCatalogItemsSelector.react'),{onChange:this.$PagesManagerMessagingAppointmentDialogDetailPane_handleServiceSelectorChange,pageID:u.id}),c('React').createElement('div',{className:"_9th"},c('React').createElement(c('PagesAppointmentDateTimeRangePicker.react'),{onChange:this.$PagesManagerMessagingAppointmentDialogDetailPane_handleDateTimeChange,value:this.state.dateTimeRange})));};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_renderSchedulePane=function(){var t,u,v,w,x,y=this.props.appointment;if(!y)return null;var z=y.product_item||{},aa=z.experimental_freeform_price||'',ba=z.name||'',ca=((t=z)!=null?(u=t.profile_picture)!=null?u.uri:u:t)||((v=y)!=null?(w=v.page)!=null?(x=w.profile_photo)!=null?x.url:x:w:v);return c('React').createElement('div',{className:"_zcq"},c('React').createElement(r,{primaryText:ba,src:ca,subText:aa}),c('React').createElement('div',{className:"_9th"},c('React').createElement(c('PagesAppointmentDateTimeRangePicker.react'),{onChange:this.$PagesManagerMessagingAppointmentDialogDetailPane_handleDateTimeChange,value:this.state.dateTimeRange})),c('React').createElement(o,null),this.$PagesManagerMessagingAppointmentDialogDetailPane_renderRequestDetails(true));};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_renderAdminDeclineOrCancelPane=function(){var t=this.props.appointment;if(!t)return null;var u=t.booking_status||'',v=t.user||{},w=v.name||'',x=v.profile_picture||{},y=u===c('PagesPlatformNativeBookingStatus').REQUESTED?this.$PagesManagerMessagingAppointmentDialogDetailPane_renderRequestDetails():this.$PagesManagerMessagingAppointmentDialogDetailPane_renderAdminScheduleDetails();return c('React').createElement('div',{className:"_zcq"},c('React').createElement(r,{primaryText:w,secondaryText:i._(["Customer","f0c6c77d85f84fd451ed45fd332cfed2"]),src:x.uri}),y,c('React').createElement(o,null),this.$PagesManagerMessagingAppointmentDialogDetailPane_renderTextArea());};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_renderUserDeclineOrCancelPane=function(){return c('React').createElement('div',{className:"_zcq"},this.$PagesManagerMessagingAppointmentDialogDetailPane_renderUserScheduleDetails(),c('React').createElement(o,null),this.$PagesManagerMessagingAppointmentDialogDetailPane_renderTextArea());};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_renderAdminViewDetailsPane=function(){var t=this.props.appointment;if(!t)return null;var u=t.booking_status||'',v=t.status||'',w=c('PagesPlatformBookingGlyphUtils').selectGlyph('calendar','20','fig-white');return c('React').createElement('div',{className:"_zcq"},c('React').createElement(r,{className:c('joinClasses')("_zcr _2ph_",(u===c('PagesPlatformNativeBookingStatus').PENDING?"_9ti":'')+(u===c('PagesPlatformNativeBookingStatus').CONFIRMED?' '+"_9tj":'')+(u===c('PagesPlatformNativeBookingStatus').DECLINED||u===c('PagesPlatformNativeBookingStatus').CANCELLED?' '+"_9tk":'')),primaryText:v,secondaryText:i._(["Appointment","5df0e036b39dd566e0856eb116aee82c"]),src:w}),this.$PagesManagerMessagingAppointmentDialogDetailPane_renderAdminScheduleDetails(),c('React').createElement(o,null),this.$PagesManagerMessagingAppointmentDialogDetailPane_renderTextArea());};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_renderUserViewDetailsPane=function(){var t=this.props.appointment;if(!t)return null;return c('React').createElement('div',{className:"_zcq"},this.$PagesManagerMessagingAppointmentDialogDetailPane_renderUserScheduleDetails(true));};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_renderRequestDetails=function(t){var u,v,w=this.props.appointment;if(!w)return null;var x=w.service_general_info||'',y=w.special_request||'',z=w.user_availability||'',aa=((u=w)!=null?(v=u.user)!=null?v.name:v:u)||'',ba=t&&aa?i._(["{user name}'s Availability","71cc90809fd973737d43ee13c3c20796"],[i.param('user name',aa)]):i._(["Availability","30bedc6502781fde643841165fe8dae5"]);return c('React').createElement('div',null,c('React').createElement(r,{className:"_3-8y",primaryText:x,secondaryText:i._(["General Info","56c70ae760a9a7c9a5588913c487690c"])}),c('React').createElement(r,{className:"_3-8y",primaryText:z,secondaryText:ba}),c('React').createElement(r,{className:"_3-8y",primaryText:y,secondaryText:i._(["Additional Notes","5fda1710d85306cb1cf272eb6f7bcb8a"])}));};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_renderAdminScheduleDetails=function(){var t,u,v,w,x,y=this.props.appointment;if(!y)return null;var z=y.product_item||{},aa=y.suggested_time_range||{},ba=z.experimental_freeform_price||'',ca=z.name||'',da=((t=z)!=null?(u=t.profile_picture)!=null?u.uri:u:t)||((v=y)!=null?(w=v.page)!=null?(x=w.profile_photo)!=null?x.url:x:w:v),ea=c('PagesPlatformBookingGlyphUtils').selectGlyph('calendar','20','fig-light-20'),fa=c('PagesPlatformBookingGlyphUtils').selectGlyph('clock','20','fig-light-20'),ga=c('PagesPlatformBookingGlyphUtils').selectGlyph('price-tag','20','fig-light-20');return c('React').createElement('div',null,c('React').createElement(r,{className:"_3-8y",primaryText:ca,secondaryText:i._(["Appointment","5df0e036b39dd566e0856eb116aee82c"]),src:da}),c('React').createElement(r,{className:"_3-8y",primaryText:c('ChatAppointmentUtil').renderDate(aa),secondaryText:i._(["Date","edc0c1f1f46a944492a70b5f8b8d8a3a"]),src:ea}),c('React').createElement(r,{className:"_3-8y",primaryText:c('ChatAppointmentUtil').renderTimeRange(aa),secondaryText:i._(["Time","a2ea14e12c208c7e10b781b9811d3656"]),src:fa}),c('React').createElement(r,{className:"_3-8y",primaryText:ba,secondaryText:i._(["Price","a5efaa6cdfade25bd1fc9e8dd23dc012"]),src:ga}));};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_renderUserScheduleDetails=function(t){var u,v,w,x,y,z,aa,ba,ca,da=this.props.appointment;if(!da)return null;var ea=da.page||{},fa=ea.name,ga=((u=ea)!=null?(v=u.phone_number)!=null?v.display_number:v:u)||'',ha=((w=ea)!=null?(x=w.address)!=null?x.single_line_full_address:x:w)||'',ia=da.product_item||{},ja=da.suggested_time_range||{},ka=ia.experimental_freeform_price||'',la=ia.name||'',ma=((y=ia)!=null?(z=y.profile_picture)!=null?z.uri:z:y)||((aa=da)!=null?(ba=aa.page)!=null?(ca=ba.profile_photo)!=null?ca.url:ca:ba:aa),na=c('PagesPlatformBookingGlyphUtils').selectGlyph('calendar','20','fig-light-20'),oa=c('PagesPlatformBookingGlyphUtils').selectGlyph('clock','20','fig-light-20'),pa=c('PagesPlatformBookingGlyphUtils').selectGlyph('pin','20','fig-light-20'),qa=c('PagesPlatformBookingGlyphUtils').selectGlyph('phone','20','fig-light-20'),ra=void 0;if(t&&ma&&la){ra=c('React').createElement('div',{className:"_2pio _9nm"},c('React').createElement(c('Image.react'),{height:72,src:ma,width:72}),c('React').createElement(p,{className:"_3-8m"},la),c('React').createElement(q,null,ka));}else ra=c('React').createElement(r,{className:"_3-8y",primaryText:la,subText:ka,src:ma});return c('React').createElement('div',null,ra,c('React').createElement(r,{className:"_3-8y",primaryText:c('ChatAppointmentUtil').renderDate(ja),src:na}),c('React').createElement(r,{className:"_3-8y",primaryText:c('ChatAppointmentUtil').renderTimeRange(ja),src:oa}),c('React').createElement(r,{className:"_3-8y",primaryText:fa,subText:ha,src:pa}),c('React').createElement(r,{className:"_3-8y",primaryText:ga,src:qa}));};s.prototype.$PagesManagerMessagingAppointmentDialogDetailPane_renderTextArea=function(){var t='',u='',v='',w=null,x=this.props.paneType;switch(this.props.paneType){case c('PagesManagerRequestTimeDialogType').ADMIN_DECLINE:case c('PagesManagerRequestTimeDialogType').USER_DECLINE:v=i._(["Message","4433cb62d52694e8261703d4fa3e5937"]);u=i._(["Send a brief message describing why you're declining this appointment request.","a8123d5cfffcb68044a575b27f9dc16d"]);t=this.state.cancelNotes;w=this.$PagesManagerMessagingAppointmentDialogDetailPane_handleCancelNotesChange;break;case c('PagesManagerRequestTimeDialogType').ADMIN_CANCEL:case c('PagesManagerRequestTimeDialogType').USER_CANCEL:v=i._(["Message","4433cb62d52694e8261703d4fa3e5937"]);u=i._(["Send a brief message describing why you're cancelling this appointment.","53d174a897b042d984a718a58526cfcf"]);t=this.state.cancelNotes;w=this.$PagesManagerMessagingAppointmentDialogDetailPane_handleCancelNotesChange;break;case c('PagesManagerRequestTimeDialogType').VIEW_DETAILS:case c('PagesManagerRequestTimeDialogType').CREATE_ANOTHER_APPOINTMENT:v=i._(["Notes","4d14bd8c4f4b6bf1f55ade3fb09a6932"]);u=i._(["Only you will be able to see any notes you add in this section.","66d9e2da429da5da40a30bd7f189e72e"]);t=this.state.notes;w=this.$PagesManagerMessagingAppointmentDialogDetailPane_handleAdminNotesChange;break;}return c('React').createElement('div',{className:"_3-8y"},c('React').createElement(p,{className:"_3-95"},v),c('React').createElement(c('AbstractTextArea.react'),{className:"_zcu",defaultValue:t.toString(),key:x,onChange:w,placeholder:u.toString()}));};s.prototype.

render=function(){
switch(this.props.paneType){
case c('PagesManagerRequestTimeDialogType').ADMIN_DECLINE:
case c('PagesManagerRequestTimeDialogType').ADMIN_CANCEL:
return this.$PagesManagerMessagingAppointmentDialogDetailPane_renderAdminDeclineOrCancelPane();
case c('PagesManagerRequestTimeDialogType').USER_DECLINE:
case c('PagesManagerRequestTimeDialogType').USER_CANCEL:
return this.$PagesManagerMessagingAppointmentDialogDetailPane_renderUserDeclineOrCancelPane();
case c('PagesManagerRequestTimeDialogType').CREATE_ANOTHER_APPOINTMENT:
return this.$PagesManagerMessagingAppointmentDialogDetailPane_renderCreateAnotherAppointmentPane();
case c('PagesManagerRequestTimeDialogType').SCHEDULE:
return this.$PagesManagerMessagingAppointmentDialogDetailPane_renderSchedulePane();
case c('PagesManagerRequestTimeDialogType').USER_VIEW_DETAILS:
return this.$PagesManagerMessagingAppointmentDialogDetailPane_renderUserViewDetailsPane();
case c('PagesManagerRequestTimeDialogType').VIEW_DETAILS:
return this.$PagesManagerMessagingAppointmentDialogDetailPane_renderAdminViewDetailsPane();}

return null;};



f.exports=c('Relay').createContainer
(s,

{fragments:
{appointment:function t(){return function(){return {children:[{alias:'booking_status',fieldName:'booking_status_value',kind:'Field',metadata:{},type:'String'},{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{children:[{children:[{fieldName:'single_line_full_address',kind:'Field',metadata:{},type:'String'}],fieldName:'address',kind:'Field',metadata:{canHaveSubselections:true},type:'StreetAddress'},{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'name',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'display_number',kind:'Field',metadata:{},type:'String'}],fieldName:'phone_number',kind:'Field',metadata:{canHaveSubselections:true},type:'PhoneNumber'},{children:[{fieldName:'url',kind:'Field',metadata:{},type:'Url'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'profile_photo',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Photo'}],fieldName:'page',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Page'},{children:[{fieldName:'experimental_freeform_price',kind:'Field',metadata:{},type:'String'},{fieldName:'name',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'uri',kind:'Field',metadata:{},type:'Url'}],fieldName:'profile_picture',kind:'Field',metadata:{canHaveSubselections:true},type:'Image'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'product_item',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'ProductItem'},{calls:[{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallValue',callValue:10}}],children:[{children:[{children:[{children:[{fieldName:'text',kind:'Field',metadata:{},type:'String'}],fieldName:'body',kind:'Field',metadata:{canHaveSubselections:true},type:'TextWithEntities'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'PagesPlatformNote'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'PagesPlatformNoteFromComponentFlowRequestEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'request_note',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true,isFindable:true},type:'PagesPlatformNoteFromComponentFlowRequestConnection'},{fieldName:'service_general_info',kind:'Field',metadata:{},type:'String'},{fieldName:'special_request',kind:'Field',metadata:{},type:'String'},{fieldName:'status',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'start',kind:'Field',metadata:{},type:'Time'},{fieldName:'end',kind:'Field',metadata:{},type:'Time'}],fieldName:'suggested_time_range',kind:'Field',metadata:{canHaveSubselections:true},type:'TimeRange'},{children:[{fieldName:'name',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'uri',kind:'Field',metadata:{},type:'Url'}],fieldName:'profile_picture',kind:'Field',metadata:{canHaveSubselections:true},type:'Image'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'user',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'User'},{fieldName:'user_availability',kind:'Field',metadata:{},type:'String'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'PagesManagerMessagingAppointmentDialogDetailPane_react_AppointmentRelayQL',type:'NativeComponentFlowBookingRequest'};}();}}});}),null);

/** js/pages/platform/message_attachment/PagesPlatformBookingMessageViewer.js */






__d('PagesPlatformBookingMessageViewer',['keyMirror'],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c('keyMirror')
({ADMIN:null,
USER:null});}),null);

/** js/pages/pages_manager/messages/booking_flow/PagesManagerMessagingAppointmentDialogNavItem.react.js */






__d('PagesManagerMessagingAppointmentDialogNavItem.react',['cx','fbt','DateBlock.react','DateTime','Layout.react','Link.react','PagesPlatformBookingMessageViewer','PagesPlatformNativeBookingStatus','React','Relay'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,

















l=c('Layout.react').Column,
m=c('Layout.react').FillColumn;j=babelHelpers.inherits








(n,c('React').Component);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.


$PagesManagerMessagingAppointmentDialogNavItem_handleClick=function(){
this.props.onClick(this.props.index);}.
bind(this),p;}n.prototype.

$PagesManagerMessagingAppointmentDialogNavItem_renderDateBlock=function(o){
return o?
c('React').createElement(c('DateBlock.react'),babelHelpers['extends']({className:"_3-90"},o)):
null;};
n.prototype.

$PagesManagerMessagingAppointmentDialogNavItem_renderStatus=
function(o,
p){

if(this.props.viewer===c('PagesPlatformBookingMessageViewer').USER)
return null;



if(p!==c('PagesPlatformNativeBookingStatus').PENDING&&
p!==c('PagesPlatformNativeBookingStatus').CONFIRMED)

return null;


return (c('React').createElement(l,
{className:"_1oa1"+


(p===c('PagesPlatformNativeBookingStatus').CONFIRMED?' '+"_2qun":'')+

(p===c('PagesPlatformNativeBookingStatus').PENDING?' '+"_2qum":'')},

o));};


n.prototype.

render=function(){
var o=this.props.appointment;
if(!o)
return null;


var p=o.booking_status,
q=o.product_item||{},
r=o.requested_time,
s=o.status,
t=o.suggested_time_range,
u=o.service_general_info,
v=void 0,
w=void 0;

switch(p){
case c('PagesPlatformNativeBookingStatus').PENDING:
case c('PagesPlatformNativeBookingStatus').CONFIRMED:
var x=c('DateTime').localCreate(t.start),
y=c('DateTime').localCreate(t.end);
v=
{month:x.format('M'),
day:x.format('j')};

w=x.format('g:i A');
if(t.start!==t.end)
w+=' - '+y.format('g:i A');

break;
case c('PagesPlatformNativeBookingStatus').REQUESTED:
case c('PagesPlatformNativeBookingStatus').DECLINED:
var z=c('DateTime').localCreate(r);
w=i._(["Sent on {date of the request was sent} at {time of the request was sent}","31994e61edaf8e1503d118943b294c67"],[i.param


('date of the request was sent',
z.format('l, M j')),i.param


('time of the request was sent',
z.format('g:i A'))]);


break;}



return (c('React').createElement(c('Layout.react'),
{className:"_2pi3 _2quo"},

this.$PagesManagerMessagingAppointmentDialogNavItem_renderDateBlock(v),
c('React').createElement(m,null,
c('React').createElement('div',
{className:"_2qus"},

q.name||
u||i._(["Appointment","37f5202162648ea2427c8e05032d663a"])),






c('React').createElement('div',
{className:"_2quw"},

w)),


this.$PagesManagerMessagingAppointmentDialogNavItem_renderStatus(s,p),
c('React').createElement(c('Link.react'),
{className:"_1oa2",
onClick:this.$PagesManagerMessagingAppointmentDialogNavItem_handleClick})));};






f.exports=c('Relay').createContainer
(n,

{fragments:
{appointment:function o(){return function(){return {children:[{alias:'booking_status',fieldName:'booking_status_value',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'name',kind:'Field',metadata:{},type:'String'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'product_item',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'ProductItem'},{fieldName:'requested_time',kind:'Field',metadata:{},type:'Time'},{fieldName:'service_general_info',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'start',kind:'Field',metadata:{},type:'Time'},{fieldName:'end',kind:'Field',metadata:{},type:'Time'}],fieldName:'suggested_time_range',kind:'Field',metadata:{canHaveSubselections:true},type:'TimeRange'},{fieldName:'status',kind:'Field',metadata:{},type:'String'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'PagesManagerMessagingAppointmentDialogNavItem_react_AppointmentRelayQL',type:'NativeComponentFlowBookingRequest'};}();}}});}),null);

/** js/services_vertical/utils/ServicesVerticalRequestTimeReferrer.js */





__d('ServicesVerticalRequestTimeReferrer',[],(function a(b,c,d,e,f,g){

'use strict';

f.exports=
{APPOINTMENT_CALENDAR:'appointment_calendar',
BANNER:'banner',
BUBBLE:'bubble',
BUBBLE_CREATE:'bubble_create',
BUBBLE_SCHEDULE:'bubble_schedule',
COMPOSER:'composer',
CTA:'cta',
STATUS_CARD:'status_card',
TRIGGER_WORD:'trigger_word',
TRIGGER_WORD_CTA:'trigger_word_cta'};}),null);

/** js/services_vertical/utils/ServicesReferrerMapping.js */





__d('ServicesReferrerMapping',['ServicesAppointmentReferrer','ServicesVerticalRequestTimeReferrer'],(function a(b,c,d,e,f,g){

'use strict';







function h
(i){

switch(i){
case c('ServicesVerticalRequestTimeReferrer').BUBBLE:
case c('ServicesVerticalRequestTimeReferrer').BUBBLE_CREATE:
case c('ServicesVerticalRequestTimeReferrer').BUBBLE_SCHEDULE:
return c('ServicesAppointmentReferrer').MESSAGE_BUBBLE;
case c('ServicesVerticalRequestTimeReferrer').COMPOSER:
return c('ServicesAppointmentReferrer').COMPOSER;
case c('ServicesVerticalRequestTimeReferrer').TRIGGER_WORD:
return c('ServicesAppointmentReferrer').THREAD_INTENT;
case c('ServicesVerticalRequestTimeReferrer').TRIGGER_WORD_CTA:
return c('ServicesAppointmentReferrer').THREAD_INTENT_CTA;
case c('ServicesVerticalRequestTimeReferrer').BANNER:
case c('ServicesVerticalRequestTimeReferrer').CTA:
case c('ServicesVerticalRequestTimeReferrer').STATUS_CARD:
break;}

return c('ServicesAppointmentReferrer').INSTANT_WORKFLOW;}


f.exports=
{getAppointmentMutationReferrer:h};}),null);

/** js/pages/pages_manager/messages/booking_flow/PagesManagerMessagingAppointmentDialog.react.js */






__d('PagesManagerMessagingAppointmentDialog.react',['cx','fbt','LayerFadeOnHide','NativeBookingFlowAdminNotesMutation','NativeBookingRequestStatusUpdateAction','NativeComponentFlowBookingRequestMutation','PagesEventObserver','PagesEventType','PagesManagerMessagingAppointmentDialogDetailPane.react','PagesManagerMessagingAppointmentDialogNavItem.react','PagesManagerRequestTimeDialogType','PagesPlatformBookingMessageViewer','PagesPlatformNativeBookingStatus','PagesPlatformNoteUpdateAction','React','Relay','ServicesReferrerMapping','ServicesRequestAppointmentGating','ServicesVerticalRequestTimeReferrer','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogFooter.react','XUIDialogTitle.react','XUISpinner.react','idx'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,

































l=400;j=babelHelpers.inherits
























(m,c('React').Component);k=j&&j.prototype;



function m(o){
k.constructor.call(this,o);this.







































































$PagesManagerMessagingAppointmentDialog_onGoBack=function(){
var p=this.state.history,
q=p.pop();
if(q){
this.setState({dialogType:q,history:p});}else 

this.$PagesManagerMessagingAppointmentDialog_onToggle(false);}.

bind(this);this.

$PagesManagerMessagingAppointmentDialog_onToggle=function(p){
if(!p)
this.setState
({appointments:[],
currentAppointment:null});


this.setState({dialogShown:p});
this.props.onToggle&&this.props.onToggle(p);}.
bind(this);this.












$PagesManagerMessagingAppointmentDialog_goToUserDeclineDialog=function(){
this.$PagesManagerMessagingAppointmentDialog_changeDialog(c('PagesManagerRequestTimeDialogType').USER_DECLINE);}.
bind(this);this.

$PagesManagerMessagingAppointmentDialog_goToUserCancelDialog=function(){
this.$PagesManagerMessagingAppointmentDialog_changeDialog(c('PagesManagerRequestTimeDialogType').USER_CANCEL);}.
bind(this);this.

$PagesManagerMessagingAppointmentDialog_goToAdminDeclineDialog=function(){
this.$PagesManagerMessagingAppointmentDialog_changeDialog(c('PagesManagerRequestTimeDialogType').ADMIN_DECLINE);}.
bind(this);this.

$PagesManagerMessagingAppointmentDialog_goToAdminCancelDialog=function(){
this.$PagesManagerMessagingAppointmentDialog_changeDialog(c('PagesManagerRequestTimeDialogType').ADMIN_CANCEL);}.
bind(this);this.

$PagesManagerMessagingAppointmentDialog_onClickAcceptAppointment=function(){
var p=this.state.currentAppointment,
q=this.refs.detailPane;
if(!p||!q)
return;


var r=p.page||{},
s=p.suggested_time_range||{},

t=this.props.referrer;
c('PagesEventObserver').notify
(c('PagesEventType').BOOKING_CONSUMER_TAPPED_ACCEPT_APPOINTMENT,
r.id,
{referrer:t});


c('Relay').Store.commitUpdate
(new (c('NativeComponentFlowBookingRequestMutation'))
({action:c('NativeBookingRequestStatusUpdateAction').ACCEPT,
actor_id:this.props.actorID,
referrer:c('ServicesReferrerMapping').getAppointmentMutationReferrer
(this.props.referrer),

request_id:p.id,
suggested_end_time:s.end,
suggested_time:s.start}),

{onFailure:this.props.onUpdateFailure,
onSuccess:this.props.onUpdateSuccess});}.


bind(this);this.

$PagesManagerMessagingAppointmentDialog_onClickDeclineOrCancelAppointment=function(){var p=
this.state,q=p.currentAppointment,r=p.formData;
if(!q||!r.isValid)
return;

var s=r.data,
t=q.page||{},
u=q.suggested_time_range||{},

v=void 0,
w=this.props.actorID,
x=void 0;

switch(this.state.dialogType){
case c('PagesManagerRequestTimeDialogType').ADMIN_CANCEL:
v=c('NativeBookingRequestStatusUpdateAction').ADMIN_CANCEL;
w=t.id;
x=c('PagesEventType').BOOKING_ADMIN_TAPPED_CANCEL_APPOINTMENT;
break;
case c('PagesManagerRequestTimeDialogType').ADMIN_DECLINE:
v=c('NativeBookingRequestStatusUpdateAction').ADMIN_DECLINE;
w=t.id;
x=c('PagesEventType').BOOKING_ADMIN_TAPPED_DECLINE_APPOINTMENT;
break;
case c('PagesManagerRequestTimeDialogType').USER_CANCEL:
v=c('NativeBookingRequestStatusUpdateAction').USER_CANCEL;
x=c('PagesEventType').BOOKING_CONSUMER_TAPPED_CANCEL_APPOINTMENT;
break;
case c('PagesManagerRequestTimeDialogType').USER_DECLINE:
v=c('NativeBookingRequestStatusUpdateAction').DECLINE;
x=c('PagesEventType').BOOKING_CONSUMER_TAPPED_DECLINE_APPOINTMENT;
break;}


if(!v||!x)
return;


var y=this.props.referrer;
c('PagesEventObserver').notify(x,t.id,{referrer:y});
c('Relay').Store.commitUpdate
(new (c('NativeComponentFlowBookingRequestMutation'))
({action:v,
actor_id:w,
message_text:s.cancelNotes,
referrer:c('ServicesReferrerMapping').getAppointmentMutationReferrer
(this.props.referrer),

request_id:q.id,
suggested_end_time:u.end,
suggested_time:u.start}),

{onFailure:this.props.onUpdateFailure,
onSuccess:this.props.onUpdateSuccess});}.


bind(this);this.

$PagesManagerMessagingAppointmentDialog_onClickDoneEditingNotes=function(){var p,q,r,s,t,u,
v=this.state.currentAppointment,
w=this.refs.detailPane;
if(!v||!w)
return;


var x=w.getAppointmentDetail()||{},
y=((p=v)!=null?(q=p.
request_note)!=null?(r=q.edges)!=null?(s=r[0])!=null?s.node:s:r:q:p)||
{},
z=((t=y)!=null?(u=t.body)!=null?u.text:u:t)||'',
aa=x.notes||'';

if(aa!==z){
var ba=y.id?
c('PagesPlatformNoteUpdateAction').UPDATE:
c('PagesPlatformNoteUpdateAction').ADD;

c('Relay').Store.commitUpdate
(new (c('NativeBookingFlowAdminNotesMutation'))
({action:ba,
actor_id:this.props.actorID,
body:{text:aa},
component_flow_request_id:v.id,
referrer:c('ServicesReferrerMapping').getAppointmentMutationReferrer
(this.props.referrer),

request_note_id:y.id}));}}.



bind(this);this.

$PagesManagerMessagingAppointmentDialog_onClickScheduleAppointment=function(){var p=
this.state,q=p.currentAppointment,r=p.formData;
if(!q||!r.isValid)
return;

var s=r.data,
t=q.page.id,u=q.id;

c('Relay').Store.commitUpdate
(new (c('NativeComponentFlowBookingRequestMutation'))
({action:c('NativeBookingRequestStatusUpdateAction').SCHEDULE,
actor_id:t,
request_id:u,
referrer:c('ServicesReferrerMapping').getAppointmentMutationReferrer
(this.props.referrer),

suggested_end_time:s.endTime,
suggested_time:s.startTime}));



var v=this.props.referrer;
if(v===c('ServicesVerticalRequestTimeReferrer').BUBBLE)
v=c('ServicesVerticalRequestTimeReferrer').BUBBLE_SCHEDULE;

c('PagesEventObserver').notify
(c('PagesEventType').BOOKING_ADMIN_TAPPED_SCHEDULE_APPOINTMENT,
t,
{referrer:v});}.

bind(this);this.

$PagesManagerMessagingAppointmentDialog_onClickCreateAnotherAppointment=function(){var p=
this.state,q=p.currentAppointment,r=p.formData;
if(!q||!r.isValid)
return;

var s=r.data,
t=q.page.id,u=q.id;

c('Relay').Store.commitUpdate
(new (c('NativeComponentFlowBookingRequestMutation'))
({action:c('NativeBookingRequestStatusUpdateAction').CREATE,
actor_id:t,
referrer:c('ServicesReferrerMapping').getAppointmentMutationReferrer
(this.props.referrer),

request_id:u,
service_id:s.serviceID,
suggested_end_time:s.endTime,
suggested_time:s.startTime}));



var v=this.props.referrer;
if(v===c('ServicesVerticalRequestTimeReferrer').BUBBLE)
v=c('ServicesVerticalRequestTimeReferrer').BUBBLE_CREATE;

c('PagesEventObserver').notify
(c('PagesEventType').BOOKING_ADMIN_TAPPED_CREATE_APPOINTMENT,
t,
{referrer:v});}.

bind(this);this.










































































































































































































































































































$PagesManagerMessagingAppointmentDialog_handleSwitchItem=function(p){
var q=this.state.appointments[p],
r=q.booking_status,s=
this.state,t=s.history,u=s.dialogType;

t.push(u);
u=this.$PagesManagerMessagingAppointmentDialog_determineDialogType(r);

this.setState({currentAppointment:q,dialogType:u,history:t});}.
bind(this);this.

$PagesManagerMessagingAppointmentDialog_handleDataChange=function(p){
this.setState
({formData:p});}.

bind(this);this.state=this.$PagesManagerMessagingAppointmentDialog_initState(o);}m.prototype.declineButton=function(){return c('ServicesRequestAppointmentGating').decline_button||i._(["Decline Appointment","d9fcda6d5ba30cc6c2c8c3f38290e954"]);};m.prototype.declineTitle=function(){return c('ServicesRequestAppointmentGating').decline_title||i._(["Decline Appointment","8a9fccf1219f4a2b8ee245885cd2fccd"]);};m.prototype.componentWillReceiveProps=function(o){var p=this.state,q=p.appointments,r=p.currentAppointment;if(q.length===0&&!r)this.setState(this.$PagesManagerMessagingAppointmentDialog_initState(o));};m.prototype.$PagesManagerMessagingAppointmentDialog_initState=function(o){var p,q,r,s,t,u=((p=o)!=null?(q=p.appointments)!=null?(r=q.native_booking_request)!=null?r.edges:r:q:p)||[],v=u.map(function(y){return y.node;}),w=o.appointment||((s=this)!=null?(t=s.state)!=null?t.currentAppointment:t:s),x=w&&w.booking_status;return {appointments:v,currentAppointment:w,dialogShown:o.dialogShown,dialogType:o.dialogType||this.$PagesManagerMessagingAppointmentDialog_determineDialogType(x),formData:{isValid:false,data:{}},history:[]};};m.prototype.$PagesManagerMessagingAppointmentDialog_determineDialogType=function(o){switch(o){case c('PagesPlatformNativeBookingStatus').CONFIRMED:case c('PagesPlatformNativeBookingStatus').PENDING:if(this.props.viewer===c('PagesPlatformBookingMessageViewer').ADMIN){return c('PagesManagerRequestTimeDialogType').VIEW_DETAILS;}else return c('PagesManagerRequestTimeDialogType').USER_VIEW_DETAILS;case c('PagesPlatformNativeBookingStatus').DECLINED:case c('PagesPlatformNativeBookingStatus').REQUESTED:return c('PagesManagerRequestTimeDialogType').SCHEDULE;case c('PagesPlatformNativeBookingStatus').CANCELLED:return c('PagesManagerRequestTimeDialogType').LIST;}return c('PagesManagerRequestTimeDialogType').LIST;};m.prototype.$PagesManagerMessagingAppointmentDialog_changeDialog=function(o){var p=this.state.history;p.push(this.state.dialogType);this.setState(babelHelpers['extends']({},this.$PagesManagerMessagingAppointmentDialog_initState(this.props),{dialogType:o,history:p}));};m.prototype.$PagesManagerMessagingAppointmentDialog_renderScheduleFooter=function(){var o=this.$PagesManagerMessagingAppointmentDialog_renderBackButton();return c('React').createElement(c('XUIDialogFooter.react'),{leftContent:o},c('React').createElement(c('XUIDialogButton.react'),{action:'button',label:i._(["Decline","b6328ae6ba25ff36754898686bfb8673"]),onClick:this.$PagesManagerMessagingAppointmentDialog_goToAdminDeclineDialog}),c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',disabled:!this.state.formData.isValid,label:i._(["Create Appointment","88a8ae42affd61bdc01873c6f71d96d4"]),onClick:this.$PagesManagerMessagingAppointmentDialog_onClickScheduleAppointment,use:'confirm'}));};m.prototype.$PagesManagerMessagingAppointmentDialog_renderAdminViewDetailsFooter=function(){var o=this.$PagesManagerMessagingAppointmentDialog_renderBackButton();return c('React').createElement(c('XUIDialogFooter.react'),{leftContent:o},c('React').createElement(c('XUIDialogButton.react'),{action:'button',label:i._(["Cancel Appointment","aa1f687be808ff978a2422928cb14e41"]),onClick:this.$PagesManagerMessagingAppointmentDialog_goToAdminCancelDialog}),c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:i._(["Done","a70ae24bfdb224e269ef853e8ff32fd0"]),onClick:this.$PagesManagerMessagingAppointmentDialog_onClickDoneEditingNotes,use:'confirm'}));};m.prototype.$PagesManagerMessagingAppointmentDialog_renderUserViewDetailsFooter=function(){var o=this.state.currentAppointment;if(!o)return null;var p=o.booking_status,q=void 0,r=void 0,s=void 0,t=void 0;switch(p){case c('PagesPlatformNativeBookingStatus').PENDING:q=i._(["Accept","3a35f77998b57806605f4fbe9f93aefe"]);r=i._(["Decline","b6328ae6ba25ff36754898686bfb8673"]);s=this.$PagesManagerMessagingAppointmentDialog_onClickAcceptAppointment;t=this.$PagesManagerMessagingAppointmentDialog_goToUserDeclineDialog;break;default:q=i._(["Done","967b6050991d2f07d23a0f198d799b7c"]);r=i._(["Cancel Appointment","aa1f687be808ff978a2422928cb14e41"]);s=null;t=this.$PagesManagerMessagingAppointmentDialog_goToUserCancelDialog;break;}var u=this.$PagesManagerMessagingAppointmentDialog_renderBackButton();return c('React').createElement(c('XUIDialogFooter.react'),{leftContent:u},c('React').createElement(c('XUIDialogButton.react'),{action:'button',label:r,onClick:t}),c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:q,onClick:s,use:'confirm'}));};m.prototype.$PagesManagerMessagingAppointmentDialog_renderUserDeclineFooter=function(){return c('React').createElement(c('XUIDialogFooter.react'),null,this.$PagesManagerMessagingAppointmentDialog_renderBackButton(),c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:this.declineButton(),onClick:this.$PagesManagerMessagingAppointmentDialog_onClickDeclineOrCancelAppointment,use:'confirm'}));};m.prototype.$PagesManagerMessagingAppointmentDialog_renderAdminDeclineFooter=function(){return c('React').createElement(c('XUIDialogFooter.react'),null,this.$PagesManagerMessagingAppointmentDialog_renderBackButton(),c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:i._(["Decline Appointment","d9fcda6d5ba30cc6c2c8c3f38290e954"]),onClick:this.$PagesManagerMessagingAppointmentDialog_onClickDeclineOrCancelAppointment,use:'confirm'}));};m.prototype.$PagesManagerMessagingAppointmentDialog_renderCancelFooter=function(){return c('React').createElement(c('XUIDialogFooter.react'),null,this.$PagesManagerMessagingAppointmentDialog_renderBackButton(),c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:i._(["Cancel Appointment","481bd8e93aecfb8d11812cbea3f5836f"]),onClick:this.$PagesManagerMessagingAppointmentDialog_onClickDeclineOrCancelAppointment,use:'confirm'}));};m.prototype.$PagesManagerMessagingAppointmentDialog_renderCreateAnotherAppointmentFooter=function(){return c('React').createElement(c('XUIDialogFooter.react'),null,this.$PagesManagerMessagingAppointmentDialog_renderBackButton(),c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',disabled:!this.state.formData.isValid,label:i._(["Create Appointment","ebd8eee67286dee0440f058e3c1eaede"]),onClick:this.$PagesManagerMessagingAppointmentDialog_onClickCreateAnotherAppointment,use:'confirm'}));};m.prototype.$PagesManagerMessagingAppointmentDialog_renderBackButton=function(){return c('React').createElement(c('XUIDialogButton.react'),{action:'button',label:i._(["Back","8a96638ea55eaa220e8e21a9518fdc54"]),onClick:this.$PagesManagerMessagingAppointmentDialog_onGoBack});};m.prototype.$PagesManagerMessagingAppointmentDialog_renderTitle=function(){var o=void 0;switch(this.state.dialogType){case c('PagesManagerRequestTimeDialogType').SCHEDULE:o=i._(["Schedule Appointment","9fb2c2b2ffa0be465bca37fbfa26ed8c"]);break;case c('PagesManagerRequestTimeDialogType').ADMIN_DECLINE:o=i._(["Decline Appointment","8a9fccf1219f4a2b8ee245885cd2fccd"]);break;case c('PagesManagerRequestTimeDialogType').USER_DECLINE:o=this.declineTitle();break;case c('PagesManagerRequestTimeDialogType').CREATE_ANOTHER_APPOINTMENT:o=i._(["Create Another Appointment","32e65b2474470c3f84e143e6c6b8caf7"]);break;case c('PagesManagerRequestTimeDialogType').USER_VIEW_DETAILS:case c('PagesManagerRequestTimeDialogType').VIEW_DETAILS:o=i._(["Appointment Details","046b7d728180375b1507f632423295ee"]);break;case c('PagesManagerRequestTimeDialogType').LIST:o=i._({"*":["Appointments","a424451d4c46f50e126b37c7781bca01"],"268435456":[" Appointment","a151cdec49ecbd47b992d56e312499a5"]},[i.plural(this.state.appointments.length)]);break;case c('PagesManagerRequestTimeDialogType').ADMIN_CANCEL:case c('PagesManagerRequestTimeDialogType').USER_CANCEL:o=i._(["Cancel Appointment","09d832499b4f5f4da4fdc1e81f5aee00"]);break;}return c('React').createElement(c('XUIDialogTitle.react'),null,o);};m.prototype.$PagesManagerMessagingAppointmentDialog_renderFooter=function(){switch(this.state.dialogType){case c('PagesManagerRequestTimeDialogType').SCHEDULE:return this.$PagesManagerMessagingAppointmentDialog_renderScheduleFooter();case c('PagesManagerRequestTimeDialogType').ADMIN_DECLINE:return this.$PagesManagerMessagingAppointmentDialog_renderAdminDeclineFooter();case c('PagesManagerRequestTimeDialogType').USER_DECLINE:return this.$PagesManagerMessagingAppointmentDialog_renderUserDeclineFooter();case c('PagesManagerRequestTimeDialogType').CREATE_ANOTHER_APPOINTMENT:return this.$PagesManagerMessagingAppointmentDialog_renderCreateAnotherAppointmentFooter();case c('PagesManagerRequestTimeDialogType').USER_VIEW_DETAILS:return this.$PagesManagerMessagingAppointmentDialog_renderUserViewDetailsFooter();case c('PagesManagerRequestTimeDialogType').VIEW_DETAILS:return this.$PagesManagerMessagingAppointmentDialog_renderAdminViewDetailsFooter();case c('PagesManagerRequestTimeDialogType').ADMIN_CANCEL:case c('PagesManagerRequestTimeDialogType').USER_CANCEL:return this.$PagesManagerMessagingAppointmentDialog_renderCancelFooter();}return null;};m.prototype.

$PagesManagerMessagingAppointmentDialog_renderContent=function(){
var o=void 0;

if(this.state.dialogType===c('PagesManagerRequestTimeDialogType').LIST||
!this.state.currentAppointment){

var p=this.state.appointments.map
(function(q,r){
return (c('React').createElement(c('PagesManagerMessagingAppointmentDialogNavItem.react'),
{appointment:q,
index:r,
key:q.id,
onClick:this.$PagesManagerMessagingAppointmentDialog_handleSwitchItem,
viewer:this.props.viewer}));}.bind(this));


o=
c('React').createElement('div',
{className:"_25xb"},

p);}else 


o=
c('React').createElement(c('PagesManagerMessagingAppointmentDialogDetailPane.react'),
{appointment:this.state.currentAppointment,
onDataChange:this.$PagesManagerMessagingAppointmentDialog_handleDataChange,
paneType:this.state.dialogType,
ref:'detailPane',
viewer:this.props.viewer});




return (c('React').createElement(c('XUIDialogBody.react'),null,
o));};


m.prototype.

$PagesManagerMessagingAppointmentDialog_renderSpinner=function(){

return (c('React').createElement(c('XUIDialog.react'),
{behaviors:{LayerFadeOnHide:c('LayerFadeOnHide')},
causalElementRef:this.props.causalElementRef,
hideOnEscape:true,
shown:true,
width:l},
c('React').createElement(c('XUIDialogBody.react'),
{className:"_2mr1"},
c('React').createElement(c('XUISpinner.react'),{size:'large'}))));};



m.prototype.

render=function(){
if(!this.state.dialogShown)
return null;


if(!this.props.appointments&&!this.props.appointment)
return this.$PagesManagerMessagingAppointmentDialog_renderSpinner();



return (c('React').createElement(c('XUIDialog.react'),
{behaviors:{LayerFadeOnHide:c('LayerFadeOnHide')},
causalElementRef:this.props.causalElementRef,
hideOnEscape:true,
onToggle:this.$PagesManagerMessagingAppointmentDialog_onToggle,
shown:this.state.dialogShown,
width:l},
this.$PagesManagerMessagingAppointmentDialog_renderTitle(),
this.$PagesManagerMessagingAppointmentDialog_renderContent(),
this.$PagesManagerMessagingAppointmentDialog_renderFooter()));};





var n=function(){return {children:[{alias:'booking_status',fieldName:'booking_status_value',kind:'Field',metadata:{},type:'String'},{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],fieldName:'page',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Page'},{calls:[{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallValue',callValue:10}}],children:[{children:[{children:[{children:[{fieldName:'text',kind:'Field',metadata:{},type:'String'}],fieldName:'body',kind:'Field',metadata:{canHaveSubselections:true},type:'TextWithEntities'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'PagesPlatformNote'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'PagesPlatformNoteFromComponentFlowRequestEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'request_note',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true,isFindable:true},type:'PagesPlatformNoteFromComponentFlowRequestConnection'},{children:[{fieldName:'start',kind:'Field',metadata:{},type:'Time'},{fieldName:'end',kind:'Field',metadata:{},type:'Time'}],fieldName:'suggested_time_range',kind:'Field',metadata:{canHaveSubselections:true},type:'TimeRange'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'PagesManagerMessagingAppointmentDialog_reactRelayQL',type:'NativeComponentFlowBookingRequest'};}();






















f.exports=c('Relay').createContainer
(m,

{initialVariables:
{bookingStatus:[],
count:1,
pageID:''},

fragments:
{appointments:function o(){return function(p,q,r){return {children:[{calls:[{kind:'Call',metadata:{type:'[PagesPlatformNativeBookingStatus]'},name:'booking_status',value:{kind:'CallVariable',callVariableName:'bookingStatus'}},{kind:'Call',metadata:{type:'PagesPlatformNativeBookingTimeFilter'},name:'booking_time',value:{kind:'CallValue',callValue:'FUTURE_ONLY'}},{kind:'Call',metadata:{},name:'requests_on_page',value:{kind:'CallVariable',callVariableName:'pageID'}},{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallVariable',callVariableName:'count'}}],children:[{children:[{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},c('Relay').QL.__frag(p),c('Relay').QL.__frag(q),c('Relay').QL.__frag(r)]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'NativeComponentFlowBookingRequest'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'NativeBookingRequestsEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'native_booking_request',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'NativeBookingRequestsConnection'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'PagesManagerMessagingAppointmentDialog_react_AppointmentsRelayQL',type:'User'};}









(n,
c('PagesManagerMessagingAppointmentDialogNavItem.react').getFragment
('appointment'),

c('PagesManagerMessagingAppointmentDialogDetailPane.react').getFragment
('appointment'));},






appointment:function o(){return function(p,q){return {children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},c('Relay').QL.__frag(p),c('Relay').QL.__frag(q)]),id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'PagesManagerMessagingAppointmentDialog_react_AppointmentRelayQL',type:'NativeComponentFlowBookingRequest'};}

(n,
c('PagesManagerMessagingAppointmentDialogDetailPane.react').getFragment
('appointment'));}}});}),null);

/** js/pages/pages_manager/messages/booking_flow/PagesManagerMessagingAppointmentBannerContainer.react.js */






__d('PagesManagerMessagingAppointmentBannerContainer.react',['ix','cx','fbt','PagesManagerMessagingMessagelistAction','ChatAppointmentUtil','Image.react','Link.react','Map','PagesPlatformNativeBookingGraphQLStatus','PagesEventObserver','PagesEventType','PagesManagerMessagingAppointmentDialog.react','PagesPlatformBookingMessageViewer','PagesPlatformNativeBookingStatus','React','ReactDOM','Relay','ServicesVerticalRequestTimeReferrer','fbglyph','idx'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,


























m=100,

n=function q(r){

return (c('React').createElement(c('Link.react'),
{className:"_2ph_ _1hgm",

onClick:r.onClick,
role:'button'},
c('React').createElement('span',
{className:"_2pii _1hgo _1hgp"},

c('React').createElement(c('Image.react'),
{className:"_3-90",
src:h("112904")}),





r.title),

c('React').createElement('span',
{className:"_1hgq"+


(r.bookingStatus===c('PagesPlatformNativeBookingStatus').CONFIRMED?' '+"_1hgt":'')+

(r.bookingStatus===c('PagesPlatformNativeBookingStatus').PENDING?' '+"_1hgs":'')+(' '+"_1hgu")},


r.status)));};



k=babelHelpers.inherits



































(o,
c('React').Component);l=k&&k.prototype;






function o(q){
l.constructor.call(this,q);this.












































































$PagesManagerMessagingAppointmentBanner_handleSchedulableBanner=function(){
this.setState
({dialogShown:true,
selectedBookingStatus:[c('PagesPlatformNativeBookingGraphQLStatus').REQUESTED]});

c('PagesEventObserver').notify
(c('PagesEventType').BOOKING_ADMIN_CLICK_REQUEST_LIST,
this.props.pageID);}.

bind(this);this.

$PagesManagerMessagingAppointmentBanner_handleScheduledBanner=function(){
this.setState
({dialogShown:true,
selectedBookingStatus:
[c('PagesPlatformNativeBookingGraphQLStatus').PENDING,
c('PagesPlatformNativeBookingGraphQLStatus').CONFIRMED]});


c('PagesEventObserver').notify
(c('PagesEventType').BOOKING_ADMIN_CLICK_SENT_LIST,
this.props.pageID);}.

bind(this);var r=q.messageList,s=q.pageID,t=q.userID;this.state=this.$PagesManagerMessagingAppointmentBanner_initState(q);this.lastMessageMap=new (c('Map'))();this.$PagesManagerMessagingAppointmentBanner_isFirstTimeLoad=true;q.relay.setVariables({pageID:s,count:m});this.lastMessageMap.set(t,this.$PagesManagerMessagingAppointmentBanner_getLastMessage(r));}o.prototype.$PagesManagerMessagingAppointmentBanner_initState=function(q){var r,s,t,u,v=((r=this)!=null?(s=r.state)!=null?s.dialogShown:s:r)||false,w=((t=this)!=null?(u=t.state)!=null?u.selectedBookingStatus:u:t)||[];return {dialogShown:v,selectedBookingStatus:w};};o.prototype.componentWillReceiveProps=function(q){var r=q.messageList,s=q.pageID,t=q.userID,u=this.$PagesManagerMessagingAppointmentBanner_getLastMessage(r),v=this.lastMessageMap.get(t),w=null;this.setState(this.$PagesManagerMessagingAppointmentBanner_initState(q));if(this.$PagesManagerMessagingAppointmentBanner_shouldForceFetch(v,u)){w='forceFetch';}else if(this.props.userID!==t||this.props.pageID!==s){this.$PagesManagerMessagingAppointmentBanner_isFirstTimeLoad=true;w='setVariables';}if(w)this.props.relay[w]({pageID:s,count:m});this.lastMessageMap.set(t,u);};o.prototype.$PagesManagerMessagingAppointmentBanner_getConfirmedAppointments=function(){var q,r,s,t,u=((q=this)!=null?(r=q.props)!=null?(s=r.appointments)!=null?(t=s.confirmed)!=null?t.edges:t:s:r:q)||[];return u.map(function(v){return v.node;});};o.prototype.$PagesManagerMessagingAppointmentBanner_getRequestedAppointments=function(){var q,r,s,t,u=((q=this)!=null?(r=q.props)!=null?(s=r.appointments)!=null?(t=s.requested)!=null?t.edges:t:s:r:q)||[];return u.map(function(v){return v.node;});};o.prototype.$PagesManagerMessagingAppointmentBanner_getLastMessage=function(q){return q&&q[q.length-1];};o.prototype.$PagesManagerMessagingAppointmentBanner_shouldForceFetch=function(q,r){if(r&&q!==r){var s,t,u,v,w,x,y,z,aa,ba=((s=r)!=null?(t=s.attachments)!=null?(u=t[0])!=null?(v=u.share)!=null?(w=v.target)!=null?(x=w.requestMetadata)!=null?x.id:x:w:v:u:t:s)||((y=r)!=null?(z=y.log_message_data)!=null?(aa=z.untypedData)!=null?aa.request_id:aa:z:y);return Boolean(ba);}return false;};o.prototype.

$PagesManagerMessagingAppointmentBanner_renderSchedulableBanner=
function(q){

if(q.length===0)
return null;


var r=void 0;

if(q.length===1){
r=j._({"*":["{user name} requested {number} appointments","40227cc731daa9b1aec07a4caae5801b"],"268435456":["{user name} requested 1 appointment","ebc157d5401870a00f9786daae55e6d0"]},[j.param



('user name',
this.props.appointments.user_name),j.plural



(q.length,'number')]);}else 






r=j._({"*":["{number} appointment requests","cb2967e1e631287f64d10c629daa835e"],"268435456":["1 appointment request","0c3679a4dfa5cde1c1de7723ecd92034"]},[j.plural




(q.length,'number')]);








return (c('React').createElement(n,
{status:j._(["Respond","665e9aa9b6f1541a9702de150feb9391"]),
title:r,
onClick:this.$PagesManagerMessagingAppointmentBanner_handleSchedulableBanner}));};


o.prototype.

$PagesManagerMessagingAppointmentBanner_renderScheduledBanner=
function(q){

if(q.length===0)
return null;


var r=void 0,
s=void 0,
t=void 0;

if(q.length===1){
var u=q[0],
v=u.suggested_time_range;
r=c('ChatAppointmentUtil').renderDateTimeRange(v);
s=u.status;
t=u.booking_status;}else{

r=j._({"*":["{number} appointments","ed841baf80dd1cbd42d34d84d26d0845"],"268435456":["1 appointment","1c6dea4fdd84338ff400ad99107d96e7"]},[j.plural




(q.length,'number')]);





s=j._(["View","acf6764a3ba1b5ad3d8598e58df5e0e8"]);}






return (c('React').createElement(n,
{bookingStatus:t,
status:s,
title:r,
onClick:this.$PagesManagerMessagingAppointmentBanner_handleScheduledBanner}));};


o.prototype.

$PagesManagerMessagingAppointmentBanner_renderDialog=function(){
if(!this.state.dialogShown)
return null;


return (c('React').createElement(c('PagesManagerMessagingAppointmentDialog.react'),
{actorID:this.props.viewer.actor.id,
appointments:this.props.appointments,
bookingStatus:this.state.selectedBookingStatus,
causalElementRef:function(){return this;}.bind(this),
count:this.props.count,
dialogShown:this.state.dialogShown,
onToggle:function(q){return this.setState({dialogShown:q});}.bind(this),
pageID:this.props.pageID,
referrer:c('ServicesVerticalRequestTimeReferrer').BANNER,
viewer:c('PagesPlatformBookingMessageViewer').ADMIN}));};


o.prototype.

render=function(){
var q=this.$PagesManagerMessagingAppointmentBanner_getConfirmedAppointments(),
r=this.$PagesManagerMessagingAppointmentBanner_getRequestedAppointments();
if(q.length===0&&r.length===0)
return null;


if(this.$PagesManagerMessagingAppointmentBanner_isFirstTimeLoad){
c('PagesEventObserver').notify
(c('PagesEventType').BOOKING_ADMIN_BANNER_IMPRESSION,
this.props.pageID,

{sent_count:q.length,
requested_count:r.length});


this.$PagesManagerMessagingAppointmentBanner_isFirstTimeLoad=false;}



return (c('React').createElement('div',
{className:"_1hgy",
ref:function s(t){
if(t&&c('ReactDOM').findDOMNode(t)){
c('PagesManagerMessagingMessagelistAction').setAppointmentBannerHeight

(c('ReactDOM').findDOMNode(t).clientHeight);}else 


c('PagesManagerMessagingMessagelistAction').setAppointmentBannerHeight(0);}},


this.$PagesManagerMessagingAppointmentBanner_renderDialog(),
this.$PagesManagerMessagingAppointmentBanner_renderSchedulableBanner(r),
this.$PagesManagerMessagingAppointmentBanner_renderScheduledBanner(q)));};





var p=function(){return {children:[{children:[{children:[{fieldName:'booking_status',kind:'Field',metadata:{},type:'PagesPlatformNativeBookingStatus'},{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{children:[{fieldName:'end',kind:'Field',metadata:{},type:'Time'},{fieldName:'start',kind:'Field',metadata:{},type:'Time'}],fieldName:'suggested_time_range',kind:'Field',metadata:{canHaveSubselections:true},type:'TimeRange'},{fieldName:'status',kind:'Field',metadata:{},type:'String'}],fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'NativeComponentFlowBookingRequest'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'NativeBookingRequestsEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'PagesManagerMessagingAppointmentBannerContainer_reactRelayQL',type:'NativeBookingRequestsConnection'};}();















f.exports=c('Relay').createContainer
(o,

{initialVariables:
{count:m,
pageID:''},

fragments:
{appointments:function q(r){var s=r.count,t=r.pageID;return function(u,v,w){return {children:[].concat.apply([],[{alias:'user_name',fieldName:'name',kind:'Field',metadata:{},type:'String'},{alias:'confirmed',calls:[{kind:'Call',metadata:{type:'[PagesPlatformNativeBookingStatus]'},name:'booking_status',value:[{kind:'CallValue',callValue:'PENDING'},{kind:'CallValue',callValue:'CONFIRMED'}]},{kind:'Call',metadata:{type:'PagesPlatformNativeBookingTimeFilter'},name:'booking_time',value:{kind:'CallValue',callValue:'FUTURE_ONLY'}},{kind:'Call',metadata:{},name:'requests_on_page',value:{kind:'CallVariable',callVariableName:'pageID'}},{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallVariable',callVariableName:'count'}}],children:[].concat.apply([],[c('Relay').QL.__frag(u)]),fieldName:'native_booking_request',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'NativeBookingRequestsConnection'},{alias:'requested',calls:[{kind:'Call',metadata:{type:'[PagesPlatformNativeBookingStatus]'},name:'booking_status',value:[{kind:'CallValue',callValue:'REQUESTED'}]},{kind:'Call',metadata:{type:'PagesPlatformNativeBookingTimeFilter'},name:'booking_time',value:{kind:'CallValue',callValue:'FUTURE_ONLY'}},{kind:'Call',metadata:{},name:'requests_on_page',value:{kind:'CallVariable',callVariableName:'pageID'}},{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallVariable',callVariableName:'count'}}],children:[].concat.apply([],[c('Relay').QL.__frag(v)]),fieldName:'native_booking_request',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'NativeBookingRequestsConnection'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},c('Relay').QL.__frag(w)]),id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'PagesManagerMessagingAppointmentBannerContainer_react_AppointmentsRelayQL',type:'User'};}








(p,







p,

c('PagesManagerMessagingAppointmentDialog.react').getFragment
('appointments',

{bookingStatus:['PENDING','REQUESTED','CONFIRMED'],
count:s,
pageID:t}));},




viewer:function q(){return function(){return {children:[{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'actor',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isAbstract:true},type:'Actor'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'PagesManagerMessagingAppointmentBannerContainer_react_ViewerRelayQL',type:'Viewer'};}();}}});}),null);

/** js/pages/pages_manager/messages/booking_flow/PagesManagerMessagingAppointmentBannerRoute.js */





__d('PagesManagerMessagingAppointmentBannerRoute',['Relay'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits









(j,
c('Relay').Route);i=h&&h.prototype;function j(){h.apply(this,arguments);}j.
paramDefinitions=
{count:
{type:'Int',
required:true},

pageID:
{type:'String',
required:true},

userID:
{type:'String',
required:true}};j.


queries=
{appointments:function k(l,m){var n=m.count,o=m.pageID;return function(p){return {calls:[{kind:'Call',metadata:{type:'ID!'},name:'id',value:{kind:'CallVariable',callVariableName:'userID'}}],children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},c('Relay').QL.__frag(p)]),fieldName:'node',kind:'Query',metadata:{isAbstract:true,identifyingArgName:'id',identifyingArgType:'ID!'},name:'PagesManagerMessagingAppointmentBannerRoute',type:'Node'};}


(l.getFragment('appointments',{count:n,pageID:o}));},



viewer:function k(l){return function(m){return {children:[].concat.apply([],[c('Relay').QL.__frag(m)]),fieldName:'viewer',kind:'Query',metadata:{},name:'PagesManagerMessagingAppointmentBannerRoute',type:'Viewer'};}


(l.getFragment('viewer'));}};j.





routeName='PagesManagerMessagingAppointmentBannerRoute';


f.exports=j;}),null);

/** js/pages/pages_manager/messages/booking_flow/PagesManagerMessagingAppointmentBannerRoot.react.js */





__d('PagesManagerMessagingAppointmentBannerRoot.react',['PagesManagerMessagingAppointmentBannerContainer.react','PagesManagerMessagingAppointmentBannerRoute','React','RelayRootContainer'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits











(j,c('React').Component);i=h&&h.prototype;j.prototype.


render=function(){var k=
this.props,l=k.pageID,m=k.userID,n=babelHelpers.objectWithoutProperties(k,['pageID','userID']);
if(!l||!m)
return null;



return (c('React').createElement(c('RelayRootContainer'),
{Component:c('PagesManagerMessagingAppointmentBannerContainer.react'),
renderFetched:function o(p){
return (c('React').createElement(c('PagesManagerMessagingAppointmentBannerContainer.react'),babelHelpers['extends']({},
n,
p)));},


route:new (c('PagesManagerMessagingAppointmentBannerRoute'))
({count:100,
pageID:l,
userID:m})}));};



function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/pages/pages_manager/navigation/PagesManagerNavigationUnit.js */






__d('PagesManagerNavigationUnit',['invariant'],(function a(b,c,d,e,f,g,h){

'use strict';







function i(j){
this.$PagesManagerNavigationUnit_key=j;}
i.prototype.

getDisplayTitle=function(){
h(0,'must override this function');};
i.prototype.

getKey=function(){
return this.$PagesManagerNavigationUnit_key;};
i.prototype.




getNotificationCount=function(j,k){
return 0;};



f.exports=i;}),null);

/** js/pages/pages_manager/messages/filter/PagesManagerMessagingAllNavigationUnit.js */







__d('PagesManagerMessagingAllNavigationUnit',['fbt','PagesManagerMessagingNavigationUnitKey','PagesManagerNavigationUnit'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits






(k,c('PagesManagerNavigationUnit'));j=i&&i.prototype;

function k(){
j.constructor.call(this,c('PagesManagerMessagingNavigationUnitKey').FILTERS.ALL);}
k.prototype.

getDisplayTitle=function(){
return h._(["All","ff020f65b741a47fa42fcfb136d458d4"]);};








f.exports=k;}),null);

/** js/pages/pages_manager/messages/filter/PagesManagerMessagingFolderNavigationUnit.js */





__d('PagesManagerMessagingFolderNavigationUnit',['invariant','immutable','PagesManagerMessagingNavigationUnitKey','PagesManagerNavigationUnit'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,


k=c('immutable').List;i=babelHelpers.inherits





(l,c('PagesManagerNavigationUnit'));j=i&&i.prototype;l.prototype.


getSupportedFilterKeys=function(){
return k
([c('PagesManagerMessagingNavigationUnitKey').FILTERS.ALL]);};

l.prototype.

assertSupportsFilter=function(m){

this.getSupportedFilterKeys().indexOf(m.getKey())>=0||h(0,
'filter not supported by the folder');};

function l(){i.apply(this,arguments);}


f.exports=l;}),null);

/** js/pages/pages_manager/messages/filter/PagesManagerMessagingArchiveNavigationUnit.js */







__d('PagesManagerMessagingArchiveNavigationUnit',['fbt','PagesManagerMessagingFolderNavigationUnit','PagesManagerMessagingNavigationUnitKey'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits






(k,c('PagesManagerMessagingFolderNavigationUnit'));j=i&&i.prototype;


function k(){
j.constructor.call(this,c('PagesManagerMessagingNavigationUnitKey').FOLDERS.ARCHIVED);}
k.prototype.

getDisplayTitle=function(){
return h._(["Archived","087a5e6bf571758f9439565eca094918"]);};








f.exports=k;}),null);

/** js/pages/pages_manager/messages/filter/PagesManagerMessagingFlaggedNavigationUnit.js */






__d('PagesManagerMessagingFlaggedNavigationUnit',['fbt','PagesManagerNavigationUnit','PagesManagerMessagingNavigationUnitKey'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits






(k,c('PagesManagerNavigationUnit'));j=i&&i.prototype;


function k(){
j.constructor.call(this,c('PagesManagerMessagingNavigationUnitKey').FILTERS.FLAGGED);}
k.prototype.

getDisplayTitle=function(){
return h._(["Flagged","d60443791df7b43d388c04a60d087aa9"]);};









f.exports=k;}),null);

/** js/pages/pages_manager/messages/filter/PagesManagerMessagingUnreadCountHelper.js */






__d('PagesManagerMessagingUnreadCountHelper',['MercuryThreadlistConstants','MercuryUnreadState'],(function a(b,c,d,e,f,g){
'use strict';




var h=
{getUnreadCount:function i(j,k){
var l=c('MercuryUnreadState').getForFBID(j),
m=l.exceedsMaxCount(k);
return m?
c('MercuryThreadlistConstants').MAX_UNREAD_COUNT:
l.getUnreadCount(k);}};



f.exports=h;}),null);

/** js/pages/pages_manager/messages/filter/PagesManagerMessagingInboxNavigationUnit.js */






__d('PagesManagerMessagingInboxNavigationUnit',['fbt','immutable','PagesManagerMessagingFolderNavigationUnit','PagesManagerMessagingNavigationUnitKey','PagesManagerMessagingUnreadCountHelper'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,


k=c('immutable').List;i=babelHelpers.inherits






(l,c('PagesManagerMessagingFolderNavigationUnit'));j=i&&i.prototype;

function l(){
j.constructor.call(this,c('PagesManagerMessagingNavigationUnitKey').FOLDERS.INBOX);}
l.prototype.

getDisplayTitle=function(){
return h._(["Inbox","fbc8baa5bf153caf4032ceaca10c7d79"]);};





l.prototype.

getSupportedFilterKeys=function(){
return k
([c('PagesManagerMessagingNavigationUnitKey').FILTERS.ALL,
c('PagesManagerMessagingNavigationUnitKey').FILTERS.UNREAD,
c('PagesManagerMessagingNavigationUnitKey').FILTERS.FLAGGED]);};

l.prototype.

getNotificationCount=function(m,n){
return c('PagesManagerMessagingUnreadCountHelper').getUnreadCount
(m,
this.getKey());};




f.exports=l;}),null);

/** js/pages/pages_manager/messages/filter/PagesManagerMessagingSpamNavigationUnit.js */







__d('PagesManagerMessagingSpamNavigationUnit',['fbt','PagesManagerMessagingFolderNavigationUnit','PagesManagerMessagingNavigationUnitKey'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits






(k,c('PagesManagerMessagingFolderNavigationUnit'));j=i&&i.prototype;


function k(){
j.constructor.call(this,c('PagesManagerMessagingNavigationUnitKey').FOLDERS.SPAM);}
k.prototype.

getDisplayTitle=function(){
return h._(["Spam","94ad2ec5ec467a16655d09af97533dd0"]);};








f.exports=k;}),null);

/** js/pages/pages_manager/messages/filter/PagesManagerMessagingUnreadNavigationUnit.js */






__d('PagesManagerMessagingUnreadNavigationUnit',['fbt','PagesManagerMessagingNavigationUnitKey','PagesManagerMessagingUnreadCountHelper','PagesManagerNavigationUnit'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits












(k,c('PagesManagerNavigationUnit'));j=i&&i.prototype;

function k(){
j.constructor.call(this,c('PagesManagerMessagingNavigationUnitKey').FILTERS.UNREAD);}
k.prototype.

getDisplayTitle=function(){
return h._(["Unread","1e246149ac35dbb134b4523bc48a9913"]);};






k.prototype.

getNotificationCount=
function(l,
m){

if(m.activeFolder.getKey()!==
c('PagesManagerMessagingNavigationUnitKey').FOLDERS.INBOX)

return 0;

return c('PagesManagerMessagingUnreadCountHelper').getUnreadCount
(l,
m.activeFolder.getKey());};




f.exports=k;}),null);

/** js/pages/pages_manager/messages/flux/store/PagesManagerMessagingFilterStore.js */






__d('PagesManagerMessagingFilterStore',['invariant','FluxStore','immutable','Map','MessagingTag','MessageThreadViewSource','PagesManagerActionType','PagesManagerDispatcher','PagesManagerMessagingAllNavigationUnit','PagesManagerMessagingArchiveNavigationUnit','PagesManagerMessagingFlaggedNavigationUnit','PagesManagerMessagingInboxNavigationUnit','PagesManagerMessagingLogger','PagesManagerMessagingSpamNavigationUnit','PagesManagerMessagingSearchStore','PagesManagerMessagingUnreadNavigationUnit','PagesManagerMessagingNavigationUnitKey'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,























k='inbox|all|';i=babelHelpers.inherits

(l,c('FluxStore'));j=i&&i.prototype;











function l(){
j.constructor.call(this,c('PagesManagerDispatcher'));
var m=new (c('PagesManagerMessagingInboxNavigationUnit'))(),
n=new (c('PagesManagerMessagingArchiveNavigationUnit'))(),
o=new (c('PagesManagerMessagingSpamNavigationUnit'))();
this.$PagesManagerMessagingFilterStore_folders=c('immutable').List([m,n,o]);
this.$PagesManagerMessagingFilterStore_defaultFilter=new (c('PagesManagerMessagingAllNavigationUnit'))();
var p=new (c('PagesManagerMessagingUnreadNavigationUnit'))();
this.$PagesManagerMessagingFilterStore_filters=c('immutable').List
([this.$PagesManagerMessagingFilterStore_defaultFilter,
p,
new (c('PagesManagerMessagingFlaggedNavigationUnit'))()]);

this.$PagesManagerMessagingFilterStore_activeFolder=this.$PagesManagerMessagingFilterStore_folders.first();
this.$PagesManagerMessagingFilterStore_activeFilter=this.getFilterByKey
(this.$PagesManagerMessagingFilterStore_activeFolder.getSupportedFilterKeys().first());

this.$PagesManagerMessagingFilterStore_isFiltering=false;
this.$PagesManagerMessagingFilterStore_isSearching=false;
this.$PagesManagerMessagingFilterStore_folderDropdown=[m,p,n,o];}
l.prototype.

$PagesManagerMessagingFilterStore_getNavigationUnitByKey=
function(m,
n){

var o=m.filter(function(p){
return p.getKey()===n;});

o.size>0||h(0,'no unit found');
return o.first();};
l.prototype.

$PagesManagerMessagingFilterStore_changeFolder=
function(m,
n){

c('PagesManagerMessagingLogger').logMessagesSectionViewEvent
(m,
n.getKey());

c('PagesManagerMessagingLogger').logPageViewFolderEvent
(m,
n,
c('MessageThreadViewSource').NEW_MESSAGETAB);

this.$PagesManagerMessagingFilterStore_activeFolder=n;
this.$PagesManagerMessagingFilterStore_activeFilter=this.getFilterByKey
(n.getSupportedFilterKeys().first());

this.__emitChange();};
l.prototype.

$PagesManagerMessagingFilterStore_changeFilter=function(m,n){


if(n.getKey()===c('MessagingTag').UNREAD){
this.$PagesManagerMessagingFilterStore_activeFilter=n;
this.$PagesManagerMessagingFilterStore_activeFolder=this.$PagesManagerMessagingFilterStore_folders.first();}else{

this.$PagesManagerMessagingFilterStore_activeFolder.assertSupportsFilter(n);
this.$PagesManagerMessagingFilterStore_activeFilter=n;}

this.__emitChange();};
l.prototype.

getFilterByKey=function(m){
return this.$PagesManagerMessagingFilterStore_getNavigationUnitByKey(this.$PagesManagerMessagingFilterStore_filters,m);};
l.prototype.

getAvailableFolders=function(){

return this.$PagesManagerMessagingFilterStore_folders;};
l.prototype.

getAvailableFilters=function(){
return c('immutable').List
(this.$PagesManagerMessagingFilterStore_filters.filter(function(m){
return this.
getActiveFolder().
getSupportedFilterKeys().
indexOf(m.getKey())>=0;}.
bind(this)));};

l.prototype.

getActiveFolder=function(){
return this.$PagesManagerMessagingFilterStore_activeFolder;};
l.prototype.

getActiveFilter=function(){
var m=
c('PagesManagerMessagingSearchStore').getCurrentSearchCustomTagNames();
return this.$PagesManagerMessagingFilterStore_isSearching||m.size!==0&&
this.$PagesManagerMessagingFilterStore_activeFilter.getKey()!==c('PagesManagerMessagingNavigationUnitKey').FILTERS.FLAGGED?
this.$PagesManagerMessagingFilterStore_defaultFilter:
this.$PagesManagerMessagingFilterStore_activeFilter;};
l.prototype.

getActiveFolderName=function(){
return this.getActiveFolder().getKey();};
l.prototype.

getActiveFilterName=function(){
return this.getActiveFilter().getKey();};
l.prototype.

getFolderDropDown=function(){


if(this.getActiveFilterName()===c('MessagingTag').UNREAD){
return this.$PagesManagerMessagingFilterStore_folders;}else{

var m=this.$PagesManagerMessagingFilterStore_folderDropdown.filter
(function(n){return n.getKey()!==this.$PagesManagerMessagingFilterStore_activeFolder.getKey();}.bind(this));

return c('immutable').List(m);}};

l.prototype.

getActiveFolderDropDown=function(){

if(this.getActiveFilterName()===c('MessagingTag').UNREAD){
return this.$PagesManagerMessagingFilterStore_activeFilter;}else 

return this.$PagesManagerMessagingFilterStore_activeFolder;};

l.prototype.

getUnitNotificationCountMap=function(m){
var n=new (c('Map'))(),
o=function(p){return n.set
(p,
p.getNotificationCount
(m,

{activeFolder:this.getActiveFolder(),
activeFilter:this.getActiveFilter()}));}.bind(this);



this.getAvailableFolders().map(o);
this.getAvailableFilters().map(o);
return n;};
l.prototype.





getNavigationKey=function(){
return this.getActiveFolderName()+'|'+
this.getActiveFilterName()+'|'+
(c('PagesManagerMessagingSearchStore').getCustomTagsFilterName()||'');};
l.prototype.

getIsInboxAll=function(){
return this.getNavigationKey()===k;};
l.prototype.

getIsFiltering=function(){
return this.$PagesManagerMessagingFilterStore_isFiltering;};
l.prototype.

__onDispatch=function(m){
switch(m.type){
case c('PagesManagerActionType').NAVIGATION_UNIT.CHANGE:
if(this.getAvailableFolders().indexOf(m.unit)>=0){
this.$PagesManagerMessagingFilterStore_changeFolder(m.pageID,m.unit);}else 

this.$PagesManagerMessagingFilterStore_changeFilter(m.pageID,m.unit);

break;
case c('PagesManagerActionType').NAVIGATION_UNIT.NOTIFICATION_COUNT_CHANGE:
this.__emitChange();
break;
case c('PagesManagerActionType').SEARCH.ADD_SEARCH_CUSTOM_TAG:
case c('PagesManagerActionType').SEARCH.REMOVE_SEARCH_CUSTOM_TAG:
case c('PagesManagerActionType').SEARCH.CHANGE_SEARCH_TERM:
c('PagesManagerDispatcher').waitFor
([c('PagesManagerMessagingSearchStore').getDispatchToken()]);

var n=
c('PagesManagerMessagingSearchStore').getCurrentSearchTerm()!=='';
this.$PagesManagerMessagingFilterStore_isFiltering=false;
if(this.$PagesManagerMessagingFilterStore_isSearching!==n){
this.$PagesManagerMessagingFilterStore_isSearching=n;
this.__emitChange();}

break;
case c('PagesManagerActionType').FILTER_PANEL.TOGGLE_PANEL:
this.$PagesManagerMessagingFilterStore_isFiltering=m.showPanel;
this.__emitChange();}};




f.exports=new l();}),null);

/** www/__virtual__/x/XPagesCustomTagMessageThreadCountsController.js */



__d("XPagesCustomTagMessageThreadCountsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/custom_tags\/message_thread_counts\/",{intersect_custom_tags:{type:"StringVector",defaultValue:[]},folder:{type:"String",defaultValue:"inbox"},key:{type:"String",required:true},enum_tag:{type:"Enum",enumType:1}});}),

null);

/** js/pages/pages_manager/messages/flux/store/PagesManagerMessagingSearchStore.js */





__d('PagesManagerMessagingSearchStore',['ActorURI','PagesManagerMessagingActionType','AsyncRequest','PagesManagerDispatcher','FluxStore','immutable','Map','MercurySearchSnippetResults','MercurySearchThreadResults','MercurySearchThreadResultOrderer','MercurySearchThreadsStrategy','PageMessageEnumTag','PagesManagerCustomTagsActionType','PagesManagerCustomTagsStore','PagesManagerMessagingFilterStore','PagesMessengerThreadUtils','PagesMessagingSearchMode','PagesManagerMessagingThreadlistAction','PagesManagerMessagingNavigationUnitKey','XPagesCustomTagMessageThreadCountsController','emptyFunction','guid'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits

























(j,c('FluxStore'));i=h&&h.prototype;

















function j(){
i.constructor.call(this,c('PagesManagerDispatcher'));
this.$PagesManagerMessagingSearchStore_currentSearchTerm='';
this.$PagesManagerMessagingSearchStore_hasMoreNameResult=false;
this.$PagesManagerMessagingSearchStore_hasMoreSnippetResult=false;
this.$PagesManagerMessagingSearchStore_isInSearchMode=false;
this.$PagesManagerMessagingSearchStore_isSearchingName=false;
this.$PagesManagerMessagingSearchStore_isSearchingSnippet=false;
this.$PagesManagerMessagingSearchStore_lastSearchRequestID='';
this.$PagesManagerMessagingSearchStore_threadsNameSearchResult=[];
this.$PagesManagerMessagingSearchStore_threadsSnippetSearchResult={};
this.$PagesManagerMessagingSearchStore_currentSearchCustomTagNames=[];
this.$PagesManagerMessagingSearchStore_searchMode=c('PagesMessagingSearchMode').NONE;
this.$PagesManagerMessagingSearchStore_searchCustomTagThreadCounts={};}
j.prototype.

getCurrentSearchTerm=function(){
return this.$PagesManagerMessagingSearchStore_currentSearchTerm;};
j.prototype.

getIsInSearchMode=function(){
return this.$PagesManagerMessagingSearchStore_isInSearchMode;};
j.prototype.

getSearchMode=function(){
return this.$PagesManagerMessagingSearchStore_searchMode;};
j.prototype.

getThreadNameSearchResults=function(){
return this.$PagesManagerMessagingSearchStore_threadsNameSearchResult;};
j.prototype.

getThreadSnippetSearchResults=function(){
return this.$PagesManagerMessagingSearchStore_threadsSnippetSearchResult;};
j.prototype.

getIsSearchingName=function(){
return this.$PagesManagerMessagingSearchStore_isSearchingName;};
j.prototype.

getIsSearchingSnippet=function(){
return this.$PagesManagerMessagingSearchStore_isSearchingSnippet;};
j.prototype.

hasMoreNameSearchResult=function(){
return this.$PagesManagerMessagingSearchStore_hasMoreNameResult;};
j.prototype.

hasMoreSnippetSearchResult=function(){
return this.$PagesManagerMessagingSearchStore_hasMoreSnippetResult;};
j.prototype.

getCurrentSearchCustomTagNames=function(){

return c('immutable').List(this.$PagesManagerMessagingSearchStore_currentSearchCustomTagNames);};
j.prototype.

getCustomTagsFilterName=function(){
if(this.$PagesManagerMessagingSearchStore_currentSearchCustomTagNames.length===0)
return null;

return c('PagesMessengerThreadUtils').getCustomTagsFilter
(this.$PagesManagerMessagingSearchStore_currentSearchCustomTagNames,
c('PagesManagerMessagingFilterStore').getActiveFilterName()===
c('PagesManagerMessagingNavigationUnitKey').FILTERS.FLAGGED);};

j.prototype.

getCurrentSearchCustomTagThreadCounts=function(){

var k=this.$PagesManagerMessagingSearchStore_getCurrentFolderAndCustomTagsFilterKey();
if(!k||!(k in this.$PagesManagerMessagingSearchStore_searchCustomTagThreadCounts))
return null;

return c('immutable').OrderedMap(this.$PagesManagerMessagingSearchStore_searchCustomTagThreadCounts[k]);};
j.prototype.

$PagesManagerMessagingSearchStore_getFolderAndCustomTagsFilterKey=
function(k,
l){

return k+'|'+l;};
j.prototype.

$PagesManagerMessagingSearchStore_getCurrentFolderAndCustomTagsFilterKey=function(){
return this.$PagesManagerMessagingSearchStore_getFolderAndCustomTagsFilterKey
(c('PagesManagerMessagingFilterStore').getActiveFolderName(),
this.getCustomTagsFilterName()||'');};

j.prototype.

$PagesManagerMessagingSearchStore_fetchCurrentSearchCustomTagThreadCounts=function(k){
var l=this.$PagesManagerMessagingSearchStore_getCurrentFolderAndCustomTagsFilterKey();
if(!l||l in this.$PagesManagerMessagingSearchStore_searchCustomTagThreadCounts)
return;

new (c('AsyncRequest'))().
setURI(c('ActorURI').create
(c('XPagesCustomTagMessageThreadCountsController').getURIBuilder().
setStringVector
('intersect_custom_tags',
this.$PagesManagerMessagingSearchStore_currentSearchCustomTagNames).

setEnum
('enum_tag',
c('PagesManagerMessagingFilterStore').getActiveFilterName()===
c('PagesManagerMessagingNavigationUnitKey').FILTERS.FLAGGED?c('PageMessageEnumTag').FLAG:null).

setString
('folder',
c('PagesManagerMessagingFilterStore').getActiveFolderName()).

setString('key',this.$PagesManagerMessagingSearchStore_getCurrentFolderAndCustomTagsFilterKey()).
getURI(),
k)).

setHandler(function(m){
var n=m.payload.threadCounts,
o=Object.keys(n).sort
(function(q,r){return n[r]-n[q];}),

p=new (c('Map'))();
o.map(function(q){
p.set(q,n[q]);});

if(this.__dispatcher.isDispatching()){
this.$PagesManagerMessagingSearchStore_searchCustomTagThreadCounts[m.payload.key]=
p;

if(m.payload.key===this.$PagesManagerMessagingSearchStore_getCurrentFolderAndCustomTagsFilterKey())

this.__emitChange();}else 


this.__dispatcher.dispatch
({type:c('PagesManagerMessagingActionType').SEARCH.UPDATE_CUSTOM_TAG_THREAD_COUNTS,
key:m.payload.key,
threadCounts:p});}.


bind(this)).
send();};
j.prototype.

__onDispatch=function(k){
switch(k.type){
case c('PagesManagerMessagingActionType').SEARCH.CHANGE_SEARCH_TERM:
this.$PagesManagerMessagingSearchStore_currentSearchTerm=k.searchTerm;
if(this.$PagesManagerMessagingSearchStore_currentSearchTerm===''){
this.$PagesManagerMessagingSearchStore_threadsNameSearchResult=[];
this.$PagesManagerMessagingSearchStore_isInSearchMode=false;
this.$PagesManagerMessagingSearchStore_searchMode=c('PagesMessagingSearchMode').NONE;}else{

this.$PagesManagerMessagingSearchStore_isInSearchMode=true;
this.$PagesManagerMessagingSearchStore_searchMode=k.searchMode;
this.$PagesManagerMessagingSearchStore_executeSearch
(k.pageID,
k.searchTerm,
k.activeFolder,
k.searchMode);}


this.__emitChange();
break;
case c('PagesManagerMessagingActionType').MESSAGE_SEARCH.NAME_SEARCH_UPDATE:
this.$PagesManagerMessagingSearchStore_isSearchingName=k.isSearching;
this.__emitChange();
break;
case c('PagesManagerMessagingActionType').MESSAGE_SEARCH.SNIPPET_SEARCH_UPDATE:
this.$PagesManagerMessagingSearchStore_isSearchingSnippet=k.isSearching;
this.__emitChange();
break;
case c('PagesManagerMessagingActionType').MESSAGE_SEARCH.LOAD_MORE_NAME_RESULT:
this.$PagesManagerMessagingSearchStore_loadMoreNameResult
(k.pageID,
k.searchTerm,
k.activeFolder);

this.__emitChange();
break;
case c('PagesManagerMessagingActionType').MESSAGE_SEARCH.LOAD_MORE_SNIPPET_RESULT:
this.$PagesManagerMessagingSearchStore_loadMoreSnippetResultsAllThreads
(k.pageID,
k.searchTerm,
k.activeFolder);

this.__emitChange();
break;
case c('PagesManagerMessagingActionType').SEARCH.ADD_SEARCH_CUSTOM_TAG:
c('PagesManagerDispatcher').waitFor
([c('PagesManagerCustomTagsStore').getDispatchToken()]);

var l=c('PagesManagerCustomTagsStore').hasCustomTag
(k.pageID,
k.tagName);


if(l&&
this.$PagesManagerMessagingSearchStore_currentSearchCustomTagNames.indexOf(k.tagName)<0){

this.$PagesManagerMessagingSearchStore_currentSearchTerm='';
this.$PagesManagerMessagingSearchStore_isInSearchMode=false;
this.$PagesManagerMessagingSearchStore_currentSearchCustomTagNames.push(k.tagName);
this.__emitChange();}

break;
case c('PagesManagerMessagingActionType').SEARCH.REMOVE_SEARCH_CUSTOM_TAG:
case c('PagesManagerCustomTagsActionType').DELETE:
var m=
this.$PagesManagerMessagingSearchStore_currentSearchCustomTagNames.indexOf(k.tagName);
if(m>=0){
this.$PagesManagerMessagingSearchStore_currentSearchCustomTagNames.splice(m,1);
this.__emitChange();}

break;
case c('PagesManagerMessagingActionType').SEARCH.FETCH_CUSTOM_TAG_THREAD_COUNTS:
this.$PagesManagerMessagingSearchStore_fetchCurrentSearchCustomTagThreadCounts(k.pageID);
break;
case c('PagesManagerCustomTagsActionType').UPDATE:
if(k.hasTagListChanged){
this.$PagesManagerMessagingSearchStore_searchCustomTagThreadCounts={};
this.$PagesManagerMessagingSearchStore_fetchCurrentSearchCustomTagThreadCounts(k.pageID);}

this.__emitChange();
break;
case c('PagesManagerMessagingActionType').SEARCH.UPDATE_CUSTOM_TAG_THREAD_COUNTS:
this.$PagesManagerMessagingSearchStore_searchCustomTagThreadCounts[k.key]=k.threadCounts;
if(k.key===this.$PagesManagerMessagingSearchStore_getCurrentFolderAndCustomTagsFilterKey())
this.__emitChange();

break;}};

j.prototype.

$PagesManagerMessagingSearchStore_executeSearch=
function(k,
l,
m,
n){

var o=c('guid')();
this.$PagesManagerMessagingSearchStore_lastSearchRequestID=o;
var p=
c('MercurySearchThreadsStrategy').getForFBID(k),
q=c('MercurySearchSnippetResults').getForFBID(k),
r=c('MercurySearchThreadResultOrderer').getForFBID(k);

if(n===c('PagesMessagingSearchMode').ALL||
n===c('PagesMessagingSearchMode').NAME_SEARCH){
this.$PagesManagerMessagingSearchStore_isSearchingName=true;
p.search
(l,

function(s){
this.$PagesManagerMessagingSearchStore_threadsNameSearchResult=r.filterThreadsInFolder
(s,
m);

this.__emitChange();}.
bind(this),

function(s,t){
if(o!==this.$PagesManagerMessagingSearchStore_lastSearchRequestID)

return;

var u=r.filterThreadsInFolder
(s,
m);

this.$PagesManagerMessagingSearchStore_threadsNameSearchResult=r.orderResults
(this.$PagesManagerMessagingSearchStore_threadsNameSearchResult,
[],
u,
m);

this.$PagesManagerMessagingSearchStore_hasMoreNameResult=!t;



if(this.__dispatcher.isDispatching()){
this.$PagesManagerMessagingSearchStore_isSearchingName=false;
this.__emitChange();}else 

c('PagesManagerMessagingThreadlistAction').changeIsSearchingNameStatus(false);}.

bind(this),c('emptyFunction'));}





if(n===c('PagesMessagingSearchMode').ALL||
n===c('PagesMessagingSearchMode').MESSAGE_SEARCH){
this.$PagesManagerMessagingSearchStore_isSearchingSnippet=true;
q.getAllThreadSearchResults
(l,
function(s,t,u){
this.$PagesManagerMessagingSearchStore_threadsSnippetSearchResult=
this.$PagesManagerMessagingSearchStore_filterSearchSnippet(t,s,m);
this.$PagesManagerMessagingSearchStore_hasMoreSnippetResult=!u;
if(this.__dispatcher.isDispatching()){
this.$PagesManagerMessagingSearchStore_isSearchingSnippet=false;
this.__emitChange();}else 

c('PagesManagerMessagingThreadlistAction').changeIsSearchingSnippetStatus(false);}.

bind(this,r));}



this.__emitChange();};
j.prototype.

$PagesManagerMessagingSearchStore_filterSearchSnippet=
function(k,
l,
m){
var n=Object.keys(k),
o=
l.filterThreadsInFolder
(n,
m),

p={};
o.forEach(function(q){
p[q]=k[q];});

return p;};
j.prototype.

$PagesManagerMessagingSearchStore_loadMoreNameResult=
function(k,
l,
m){

var n=
c('MercurySearchThreadResults').getForFBID(k),
o=c('MercurySearchThreadResultOrderer').getForFBID(k);
this.$PagesManagerMessagingSearchStore_isSearchingName=true;
n.getMoreThreadlist
(l,
function(p,q){
var r=
o.filterThreadsInFolder
(p,
m);

this.$PagesManagerMessagingSearchStore_threadsNameSearchResult=r;
if(this.__dispatcher.isDispatching()){
this.$PagesManagerMessagingSearchStore_isSearchingName=false;
this.__emitChange();}else 

c('PagesManagerMessagingThreadlistAction').changeIsSearchingNameStatus(false);}.

bind(this));};

j.prototype.

$PagesManagerMessagingSearchStore_loadMoreSnippetResultsAllThreads=
function(k,
l,
m){

var n=c('MercurySearchSnippetResults').getForFBID(k),
o=c('MercurySearchThreadResultOrderer').getForFBID(k);
n.getAllThreadSearchMoreResults
(l,
function(p,q,r){
this.$PagesManagerMessagingSearchStore_hasMoreSnippetResult=!r;
this.$PagesManagerMessagingSearchStore_threadsSnippetSearchResult=
this.$PagesManagerMessagingSearchStore_filterSearchSnippet(q,p,m);
if(this.__dispatcher.isDispatching()){
this.$PagesManagerMessagingSearchStore_isSearchingSnippet=false;
this.__emitChange();}else 

c('PagesManagerMessagingThreadlistAction').changeIsSearchingSnippetStatus(false);}.

bind(this,o));};




f.exports=new j();}),null);

/** js/pages/pages_manager/messages/flux/actions/PagesManagerMessagingFilterActions.js */





__d('PagesManagerMessagingFilterActions',['PagesManagerActionType','PagesManagerDispatcher','PagesManagerMessagingThreadlistAction','PagesManagerNavigationUnit'],(function a(b,c,d,e,f,g){

'use strict';






var h=
{changeFilter:function i(j,k){
c('PagesManagerDispatcher').dispatch
({unit:k,
pageID:j,
type:c('PagesManagerActionType').NAVIGATION_UNIT.CHANGE});

c('PagesManagerMessagingThreadlistAction').resetSearch(j);},


notifyNotificationCountChanged:function i(j){
c('PagesManagerDispatcher').dispatch
({pageID:j,
type:c('PagesManagerActionType').NAVIGATION_UNIT.NOTIFICATION_COUNT_CHANGE});},



toggleFilterPanel:function i(j,k){
c('PagesManagerDispatcher').dispatch
({pageID:j,
showPanel:k,
type:c('PagesManagerActionType').FILTER_PANEL.TOGGLE_PANEL});}};




f.exports=h;}),null);

/** js/pages/pages_manager/messages/flux/store/PagesManagerMessagingThreadlistStore.js */





__d('PagesManagerMessagingThreadlistStore',['AbstractPagesManagerListStore','PagesManagerActionType','MercuryPageOrderedThreadlist','MercuryThreadlistConstants','PagesManagerDispatcher','PagesManagerMessagingFilterStore','PagesManagerMessagingSearchStore'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits



















(j,c('AbstractPagesManagerListStore'));i=h&&h.prototype;


function j(){'use strict';
i.constructor.call(this,c('PagesManagerDispatcher'));}
j.prototype.

__onDispatch=function(k){'use strict';
switch(k.type){
case c('PagesManagerActionType').LIST.FETCH:
this.__handleListFetch(k);
break;
case c('PagesManagerActionType').LIST.LOADING:
this.__isLoading=true;
this.__emitChange();
break;

default:i.__onDispatch.call(this,k);}};

j.prototype.

$PagesManagerMessagingThreadlistStore_getActiveFilter=function(){'use strict';
return c('PagesManagerMessagingSearchStore').getCustomTagsFilterName()||
c('PagesManagerMessagingFilterStore').getActiveFilterName();};
j.prototype.

$PagesManagerMessagingThreadlistStore_isThreadsAvailableInCache=function(k,l){'use strict';
var m=c('MercuryPageOrderedThreadlist').getForFBID(k);
return m.hasLoadedThreadlist
(c('PagesManagerMessagingFilterStore').getActiveFolderName(),
this.$PagesManagerMessagingThreadlistStore_getActiveFilter())||
m.getThreadCount
(c('PagesManagerMessagingFilterStore').getActiveFolderName(),
this.$PagesManagerMessagingThreadlistStore_getActiveFilter())>=l;};
j.prototype.

$PagesManagerMessagingThreadlistStore_fetchFromServer=
function(k,
l,
m){
'use strict';
var n=c('MercuryPageOrderedThreadlist').getForFBID(k);
n.getFilteredThreadlist
(l,
m+1,
c('PagesManagerMessagingFilterStore').getActiveFolderName(),
this.$PagesManagerMessagingThreadlistStore_getActiveFilter(),
function(o){
var p=o.length>m;
this.$PagesManagerMessagingThreadlistStore_onListFetched(p);}.
bind(this));};

j.prototype.

$PagesManagerMessagingThreadlistStore_fetchFromCache=
function(k){
'use strict';
var l=c('MercuryPageOrderedThreadlist').getForFBID(k);
return l.getAvailableThreadlistNow
(c('PagesManagerMessagingFilterStore').getActiveFolderName(),
this.$PagesManagerMessagingThreadlistStore_getActiveFilter());};

j.prototype.

__handleListFetch=function(k){'use strict';
var l=k.pageID,m=k.offset,n=k.limit;
this.__isLoading=true;
var o=this.$PagesManagerMessagingThreadlistStore_isThreadsAvailableInCache
(l,
m+n);

if(o){



this.$PagesManagerMessagingThreadlistStore_onListFetched(this.__hasMoreItem.get
(c('PagesManagerMessagingFilterStore').getNavigationKey()));}else 


this.$PagesManagerMessagingThreadlistStore_fetchFromServer(l,m,n);

this.__emitChange();};
j.prototype.

__handleNavigationUnitChange=function(k){'use strict';
c('PagesManagerDispatcher').waitFor
([c('PagesManagerMessagingFilterStore').getDispatchToken(),
c('PagesManagerMessagingSearchStore').getDispatchToken()]);






if(this.__isPriorityEnabled&&
c('PagesManagerMessagingFilterStore').getIsInboxAll())

return;

this.__handleListFetch
({pageID:k.pageID,
offset:0,
limit:c('MercuryThreadlistConstants').WEBMESSENGER_THREAD_COUNT});};

j.prototype.

$PagesManagerMessagingThreadlistStore_onListFetched=function(k){'use strict';
this.__isLoading=false;
this.__hasMoreItem.set
(c('PagesManagerMessagingFilterStore').getNavigationKey(),
k);

if(!this.__dispatcher.isDispatching())
this.__dispatcher.dispatch({type:c('PagesManagerActionType').LIST.FETCHED});};

j.prototype.

getItemList=function(k){'use strict';
var l=this.$PagesManagerMessagingThreadlistStore_fetchFromCache(k),
m=c('PagesManagerMessagingFilterStore').getNavigationKey();
return this.hasMoreItem(m)&&l.length>0?
l.slice(0,l.length-1):l;};



f.exports=new j();}),null);

/** js/pages/pages_manager/messages/flux/actions/PagesManagerMessagingThreadInteractionHelper.js */






__d('PagesManagerMessagingThreadInteractionHelper',['MercuryPageThreadActions','MercuryThreadIDMap','MercuryThreads','MessagingTag','PagesManagerMessagingFilterActions','PagesManagerMessagingFilterStore','PagesManagerMessagingMessagelistStore','PagesManagerMessagingNavigationUnitKey','PagesManagerMessagingThreadlistStore','PagesManagerStore','PagesMessagingActionPlacement','URI'],(function a(b,c,d,e,f,g){
'use strict';














var h=
{_getPermalinkURI:function i(j,k){
var l=c('MercuryThreadIDMap').
getForFBID(k).
getServerIDFromClientIDNow(j),
m=c('URI').getRequestURI(),
n=c('MercuryThreads').
getForFBID(k).
getThreadMetaNow(j);
m.addQueryData
({threadid:l,
timestamp:n?n.timestamp:null});

return m;},


_clearURLParam:function i(){
var j=c('URI').getRequestURI();
j.removeQueryData('threadid');
j.removeQueryData('timestamp');
window.history.replaceState({},null,j);},


handlePermalinkUpdate:function i(j,k){
if(!j){
this._clearURLParam();
return;}

var l=h._getPermalinkURI
(j,
k);

window.history.replaceState({},null,l);},


handleUnreadStateUpdate:function i
(j,
k,
l){

var m=c('PagesManagerStore').getViewingListItem();
if(!m)
return;

var n=c('MercuryThreads').
getForFBID(k).
getThreadMetaNow(m.toString()),
o=c('MercuryThreads').
getForFBID(k).
getThreadMetaNow(j.toString()),
p=c('PagesManagerMessagingMessagelistStore').getMessagelist
(k,
m.toString()),

q=c('PagesManagerMessagingThreadlistStore').getItemList
(k,
l).
length,
r=c('MercuryPageThreadActions').getForFBID(k);
if(n&&n.unread_count>0||p.length>0)

if(l===c('MessagingTag').UNREAD&&q>1&&
j!==m){





r.markRead
(m,
c('PagesMessagingActionPlacement').MESSAGE_DIALOG_SHOWN);}else

if(l===c('MessagingTag').UNREAD&&q===1){


r.markRead
(j,
c('PagesMessagingActionPlacement').MESSAGE_DIALOG_SHOWN);

c('PagesManagerMessagingFilterActions').changeFilter
(k,
c('PagesManagerMessagingFilterStore').getFilterByKey
(c('PagesManagerMessagingNavigationUnitKey').FILTERS.ALL));}else



if(l!==c('MessagingTag').UNREAD)



r.markRead
(j,
c('PagesMessagingActionPlacement').MESSAGE_DIALOG_SHOWN);}};






f.exports=h;}),null);

/** js/pages/pages_manager/messages/views/PagesManagerMessagingBatchActionMenu.react.js */






__d('PagesManagerMessagingBatchActionMenu.react',['cx','fbt','invariant','AsyncRequest','MercuryPageThreadActions','InsightsInfoTip.react','PagesAdminToolUIActionType','PagesManagerAction','PagesManagerLogger','PagesManagerMessagingMessagelistAction','PagesMessengerActions','PagesMessagingActionPlacement','PopoverMenu.react','React','SimpleXUIDialog','XPagesBanUserDataController','ReactXUIMenu','XUIDialogButton.react','XUIDialogCancelButton.react','XUIText.react'],(function a(b,c,d,e,f,g,h,i,j){var k,l,























m=c('ReactXUIMenu').Item;k=babelHelpers.inherits






























(n,c('React').Component);l=k&&k.prototype;


function n(o){'use strict';
l.constructor.call(this,o);
this.$PagesManagerMessagingBatchActionMenu_threadAction=c('MercuryPageThreadActions').getForFBID(o.pageID);}
n.prototype.

$PagesManagerMessagingBatchActionMenu_onActionItemClick=function(event,o){'use strict';
var p=o.item.getValue();
c('PagesManagerLogger').logMessageInboxUIAction
(c('PagesAdminToolUIActionType').MESSAGE_INBOX_CLICK_MENU_ACTION,
this.props.pageID,

{menu_action:p,
position:this.props.placement});



var q=null,
r=false;
switch(p){
case c('PagesMessengerActions').FLAG:
q=this.$PagesManagerMessagingBatchActionMenu_threadAction.batchAddFlag;
break;
case c('PagesMessengerActions').UNFLAG:
q=this.$PagesManagerMessagingBatchActionMenu_threadAction.batchRemoveFlag;
break;
case c('PagesMessengerActions').MARK_AS_SPAM:
q=this.$PagesManagerMessagingBatchActionMenu_threadAction.batchMarkSpam;
r=true;
break;
case c('PagesMessengerActions').MARK_AS_UNSPAM:
q=this.$PagesManagerMessagingBatchActionMenu_threadAction.batchUnmarkSpam;
r=true;
break;
case c('PagesMessengerActions').MARK_AS_READ:
q=this.$PagesManagerMessagingBatchActionMenu_threadAction.batchMarkRead;
break;
case c('PagesMessengerActions').MARK_AS_UNREAD:
q=this.$PagesManagerMessagingBatchActionMenu_threadAction.batchMarkUnread;
break;
case c('PagesMessengerActions').ARCHIVE:
q=this.$PagesManagerMessagingBatchActionMenu_threadAction.batchArchive;
r=true;
break;
case c('PagesMessengerActions').UNARCHIVE:
q=this.$PagesManagerMessagingBatchActionMenu_threadAction.batchUnarchive;
r=true;
break;
case c('PagesMessengerActions').DELETE_THREAD:
this.$PagesManagerMessagingBatchActionMenu_onDeleteThread();
return;
case c('PagesMessengerActions').HIDE_CONTEXT_CARD:
this.$PagesManagerMessagingBatchActionMenu_onHideContextCard();
return;
case c('PagesMessengerActions').SHOW_CONTEXT_CARD:
this.$PagesManagerMessagingBatchActionMenu_onShowContextCard();
return;
case c('PagesMessengerActions').SHOW_BAN_FROM_PAGE:
this.$PagesManagerMessagingBatchActionMenu_onBanFromPage();
return;

default:j(0,'Invalid batch action');}


if(q)
q.call
(this.$PagesManagerMessagingBatchActionMenu_threadAction,
this.props.selectedRows,
this.props.placement);



c('PagesManagerAction').deselectAll();
if(r===true)
c('PagesManagerAction').viewListItem(null);

this.props.onSelectionClear&&this.props.onSelectionClear();};
n.prototype.

$PagesManagerMessagingBatchActionMenu_onDeleteThread=function(){'use strict';
var o=this.props.selectedRows.length,
p=i._(["Delete Messages","37817bdc6b3b4034bc16170a836f9ccf"]),



q=i._(["Are you sure you want to delete {number of messages}?","e21ad6dd4a25e1fbaba429eda83cdd96"],[i.param


('number of messages',
c('React').createElement('span',{className:"_50f7"},i._({"*":{"message":["{number of messages} message","b01c5d2744549261a9fc257547620ca8"],"messages":["{number of messages} messages","36574809c155eaddb4e5fbcbfb43aa78"]}},[i.param

('number of messages',
o,[0]),i['enum']



(o>1?'messages':'message',{message:'message',messages:'messages'})])))]),






r=i._(["Delete Messages","d30ef3b828307241ffb5f5ec035a913f"]),



s=
[c('React').createElement(c('XUIDialogCancelButton.react'),{key:'cancel'}),
c('React').createElement(c('XUIDialogButton.react'),
{action:'cancel',
key:'submit',
label:r,
onClick:function(){
this.$PagesManagerMessagingBatchActionMenu_threadAction.batchDelete
(this.props.selectedRows,
c('PagesMessagingActionPlacement').THREAD_LIST_BATCH_ACTION);

c('PagesManagerAction').deselectAll();
c('PagesManagerAction').viewListItem(null);
this.props.onSelectionClear&&this.props.onSelectionClear();}.
bind(this),
use:'confirm'})];


c('SimpleXUIDialog').showEx(q,p,s);};
n.prototype.

$PagesManagerMessagingBatchActionMenu_onHideContextCard=function(){'use strict';
c('PagesManagerMessagingMessagelistAction').setIsContextCardHidden
(this.props.pageID,
true);};

n.prototype.

$PagesManagerMessagingBatchActionMenu_onShowContextCard=function(){'use strict';
c('PagesManagerMessagingMessagelistAction').setIsContextCardHidden
(this.props.pageID,
false);};

n.prototype.

$PagesManagerMessagingBatchActionMenu_onBanFromPage=function(){'use strict';
this.props.pageID||j(0,'Page ID is not specified.');
this.props.userID||j(0,'User ID is not specified.');
var o=c('XPagesBanUserDataController').getURIBuilder().
setFBID('page_id',this.props.pageID).
setFBIDVector('user_ids',[this.props.userID]).
getURI(),
p=i._(["Ban Person From Page","36d4d414fc1ed577ce46402ff70fcbe4"]),



q=i._(["A person who's banned can't post, comment, like or take other actions on the Page. They won't be notified.","1421050eb0cc8db9f740a6ff12b4cb4f"]),






r=this.props.userName?i._(["Would you like to ban {user name}?","a009d4cd00208342142722730ce286af"],[i.param



('user name',
c('React').createElement(c('XUIText.react'),{weight:'bold'},
this.props.userName))]):i._(["Would you like to ban this user?","dbe09977298606bee6f595c408d39de8"]),







s=
c('React').createElement('div',null,
r,
c('React').createElement(c('InsightsInfoTip.react'),
{alignH:'center',
position:'above',
tip:q}));


c('SimpleXUIDialog').showConfirm(s,p,function(t){
if(!t)
return;

new (c('AsyncRequest'))().
setURI(o).
setHandler(function(u){
if(!u.payload.success)
return;

c('PagesManagerMessagingMessagelistAction').resetIsUserBanned
(this.props.pageID,
this.props.userID);

this.$PagesManagerMessagingBatchActionMenu_threadAction.batchMarkSpam
(this.props.selectedRows,
c('PagesMessagingActionPlacement').THREAD_LIST_BATCH_ACTION);}.

bind(this)).
send();}.
bind(this));};
n.prototype.

renderMenu=function(){'use strict';

return (c('React').createElement(c('ReactXUIMenu'),{onItemClick:
function(event,o){return this.$PagesManagerMessagingBatchActionMenu_onActionItemClick(event,o);}.bind(this)},

this.props.inlineActionParam.showFlag?
c('React').createElement(m,{value:c('PagesMessengerActions').FLAG},i._(["Flag","6d53dcd127ffdb18a5a4fb56074c9a8d"])):



null,
this.props.inlineActionParam.showUnflag?
c('React').createElement(m,{value:c('PagesMessengerActions').UNFLAG},i._(["Unflag","46c44fc87ebb5edc4f435b79006164c4"])):



null,
this.props.inlineActionParam.showSpam?
c('React').createElement(m,{value:c('PagesMessengerActions').MARK_AS_SPAM},i._(["Mark as Spam","a1c557bf064d84a0eea9b7f13c31845c"])):



null,
this.props.inlineActionParam.showUnspam?
c('React').createElement(m,{value:c('PagesMessengerActions').MARK_AS_UNSPAM},i._(["Move to Inbox","282affa1b2779590a23c77c76a17ea00"])):



null,
this.props.inlineActionParam.showMarkRead?
c('React').createElement(m,{value:c('PagesMessengerActions').MARK_AS_READ},i._(["Mark as Read","4867859b7502d4f264949e9e8e7fe081"])):



null,
this.props.inlineActionParam.showMarkUnread?
c('React').createElement(m,{value:c('PagesMessengerActions').MARK_AS_UNREAD},i._(["Mark as Unread","d40d50f73da3233202117a2dc422f97d"])):



null,
this.props.inlineActionParam.showArchive?
c('React').createElement(m,{value:c('PagesMessengerActions').ARCHIVE},i._(["Archive","a133dc5a9c4fed39218a1fe22a6d29f6"])):



null,
this.props.inlineActionParam.showUnarchive?
c('React').createElement(m,{value:c('PagesMessengerActions').UNARCHIVE},i._(["Move to Inbox","5f8c2ffdfeaea50327b722ca0d20c7f5"])):



null,
this.props.inlineActionParam.showDelete?
c('React').createElement(m,{value:c('PagesMessengerActions').DELETE_THREAD},i._(["Delete","ae45267a1ba38229a8cb1c118e578a57"])):



null,
this.props.inlineActionParam.showHideContextCard?
c('React').createElement(m,{value:c('PagesMessengerActions').HIDE_CONTEXT_CARD},i._(["Hide sender info","eedc0f43e8b26d0c8db042ea058c5905"])):



null,
this.props.inlineActionParam.showShowContextCard?
c('React').createElement(m,{value:c('PagesMessengerActions').SHOW_CONTEXT_CARD},i._(["Show sender info","e3dd4c1104608d6e84f40bc66ca1d9fa"])):



null,
this.props.showBanFromPage&&
this.props.pageID&&this.props.userID?
c('React').createElement(m,{value:c('PagesMessengerActions').SHOW_BAN_FROM_PAGE},i._(["Ban From Page","1aa0df8f8b90994730b4d09c5255a790"])):



null));};


n.prototype.

render=function(){'use strict';

return (c('React').createElement(c('PopoverMenu.react'),
{alignh:this.props.alignh,
className:"_1tly"+

(!this.props.showBatchAction?' '+"hidden_elem":''),

layerBehaviors:this.props.layerBehaviors,
menu:this.renderMenu(),
onHide:this.props.onHide,
onShow:this.props.onShow,
ref:'menu'},
this.props.children));};










n.defaultProps={alignh:'left'};
f.exports=n;}),null);

/** js/pages/pages_manager/messages/views/PagesManagerMessagingThreadTitle.react.js */







__d('PagesManagerMessagingThreadTitle.react',['cx','fbt','ContextualDialogArrow','ContextualLayerAutoFlip','Image.react','InlineBlock.react','LeftRight.react','Link.react','MercuryIDs','MercuryParticipants','MercuryThreadTitle.react','PagesManagerMessagingBatchActionMenu.react','PagesMessengerThreadUtils','PagesMessagingActionPlacement','MercuryParticipantListRenderer','XUIPopoverButton.react','React'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits




















(l,c('React').Component);k=j&&j.prototype;

function l(m){'use strict';
k.constructor.call(this,m);
this.state=
{href:'',
userName:null,
imageSource:null,
menuShown:false};}

l.prototype.









$PagesManagerMessagingThreadTitle_getUserName=function(m){'use strict';
if(m&&m.other_user_fbid){
var n=c('MercuryIDs').getParticipantIDFromUserID
(m.other_user_fbid);

c('MercuryParticipants').get(n,function(o){
var p=new (c('MercuryParticipantListRenderer'))().
renderParticipantList([o]);
this.setState
({userName:p,
href:o.href,
imageSource:o.image_src});}.

bind(this));}};

l.prototype.

componentWillMount=function(){'use strict';
this.$PagesManagerMessagingThreadTitle_getUserName(this.props.thread);};
l.prototype.

componentWillReceiveProps=function(m){'use strict';
this.$PagesManagerMessagingThreadTitle_getUserName(m.thread);};
l.prototype.

$PagesManagerMessagingThreadTitle_renderThreadTitle=function(){'use strict';

return (c('React').createElement('div',null,
this.state.imageSource?
c('React').createElement(c('Image.react'),
{className:"_3stv",
src:this.state.imageSource}):

c('React').createElement('div',{className:"_3stv"}),

c('React').createElement(c('InlineBlock.react'),
{className:"_3ak8 _3-9a"},

c('React').createElement(c('MercuryThreadTitle.react'),
{className:"_174p",
thread:this.props.thread,
viewer:this.props.pageID,
showUnreadCount:false}),

c('React').createElement(c('Link.react'),
{href:this.state.href?this.state.href:'',
target:'_blank'},i._(["View Profile","263443ac33bd3a43da79a4d4c9e687c2"])))));};







l.prototype.

render=function(){'use strict';
if(this.props.thread===null||this.props.thread===undefined)
return c('React').createElement('div',{className:"_174o"});


var m=c('PagesMessengerThreadUtils').getBatchActionMenuParam
(this.props.thread);


m.showMarkRead=false;
m.showMarkUnread=false;
m.showHideContextCard=
this.props.isContextCardEnabled&&!this.props.isContextCardHidden;
m.showShowContextCard=
this.props.isContextCardEnabled&&this.props.isContextCardHidden;

var n=
c('React').createElement(c('XUIPopoverButton.react'),
{label:i._(["Actions","b4da9591a4cfa00d5fa2cff53f195df6"])});


return (c('React').createElement(c('LeftRight.react'),
{className:"_3stw"},
this.$PagesManagerMessagingThreadTitle_renderThreadTitle(),
c('React').createElement(c('PagesManagerMessagingBatchActionMenu.react'),
{alignh:'right',
layerBehaviors:[c('ContextualDialogArrow'),c('ContextualLayerAutoFlip')],
onHide:function(){
this.setState({menuShown:false});}.
bind(this),
onShow:function(){
this.setState({menuShown:true});}.
bind(this),
pageID:this.props.pageID,
inlineActionParam:m,
placement:c('PagesMessagingActionPlacement').THREAD_TITLE_BAR,
selectedRows:[this.props.thread&&this.props.thread.thread_id],
showBanFromPage:this.props.isBanFromPageEnabled,
showBatchAction:true,
userID:this.props.thread?this.props.thread.other_user_fbid:null,
userName:this.state?this.state.userName:null},
n)));};






f.exports=l;}),null);

/** js/pages/pages_manager/messages/container/PagesManagerMessagingDetailContainer.react.js */





__d('PagesManagerMessagingDetailContainer.react',['cx','BootloadedComponent.react','FluxContainer','Grid.react','immutable','JSResource','MercuryMessageStore','MercuryRoger','MercuryThreadInformer','MercuryThreads','MessagingTag','MessengerConfig','MessengerHotLikePreviewEvents','PagesManagerMessagingAppointmentBannerRoot.react','PagesManagerMessagingClassifierStore','PagesManagerMessagingComposerContainer.react','PagesManagerMessagingFilterStore','PagesManagerMessagingMessageList.react','PagesManagerMessagingMessagelistAction','PagesManagerMessagingMessagelistStore','PagesManagerMessagingTabPerfEvents','PagesManagerMessagingThreadInteractionHelper','PagesManagerMessagingThreadTitle.react','PagesManagerPerfLogger','PagesMessagingPerfTypedLogger','PagesMessagingPerfLoggerEvent','React','ReactDOM','Set','SubscriptionsHandler','Vector','debounce'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,











k=c('Grid.react').GridItem;i=babelHelpers.inherits



























































(l,c('React').Component);j=i&&i.prototype;













function l(m,n){
j.constructor.call(this,m,n);
this.$PagesManagerMessagingDetailContainer_mercuryRoger=c('MercuryRoger').getForFBID(m.pageID);
this.$PagesManagerMessagingDetailContainer_threadInformer=c('MercuryThreadInformer').getForFBID(m.pageID);
this.$PagesManagerMessagingDetailContainer_likePreview=null;
this.$PagesManagerMessagingDetailContainer_keepLikePreview=false;
this.state=
{appointmentBannerHeight:0,
isContextCardEnabled:false,
isLoading:false,
isLoadingMore:false,
messagelist:[],
preventScroll:false,
hideContextCard:m.config.hideContextCard,
readReceipts:c('immutable').OrderedMap(),
scrollHeight:0,
threadID:'',
isUserBanned:false,
thread:{}};

this.$PagesManagerMessagingDetailContainer_logLoadingEndEvent=false;



this.$PagesManagerMessagingDetailContainer_recalculateLayout=c('debounce')(function(){
if(this.props.height)
this.$PagesManagerMessagingDetailContainer_setScrollableHeight(this.props.height);}.

bind(this),50);}
l.

getStores=function(){
return [c('PagesManagerMessagingMessagelistStore'),c('PagesManagerMessagingClassifierStore')];};



l.

calculateState=function(m,n){
var o=[],
p={},
q=null,
r=n.listItemKey;
if(r){
o=c('PagesManagerMessagingMessagelistStore').getMessagelist
(n.pageID,
r);

p=c('PagesManagerMessagingMessagelistStore').getReadReceipts
(r);

q=c('MercuryThreads').getForFBID(n.pageID).
getThreadMetaNow(r);
if(q&&q.other_user_fbid&&n.config&&n.pageID)
c('PagesManagerMessagingMessagelistAction').fetchIsUserBanned
(n.pageID,
q.other_user_fbid);}




var s=c('PagesManagerMessagingMessagelistStore').isCardHidden();
if(s===null)
s=n.config.hideContextCard;


var t=
n.config.enableContextCard&&
q&&
q.other_user_fbid,

u=n.pageID&&q&&q.other_user_fbid?
c('PagesManagerMessagingMessagelistStore').getIsUserBanned
(n.pageID,
q.other_user_fbid):

false;


return {appointmentBannerHeight:
c('PagesManagerMessagingMessagelistStore').getAppointmentBannerHeight(),
isContextCardEnabled:t,
hideContextCard:s,
isLoading:c('PagesManagerMessagingMessagelistStore').isLoading(),
isLoadingMore:c('PagesManagerMessagingMessagelistStore').isLoadingMore(),
isUserBanned:u,
scrollHeight:
c('PagesManagerMessagingMessagelistStore').getScrollHeight(),
messagelist:o,
readReceipts:p,
threadID:n.listItemKey,
thread:q};};

l.prototype.






$PagesManagerMessagingDetailContainer_setScrollableHeight=function(m){
var n=0;
if(this.refs.threadTitle)
n=c('Vector').getElementDimensions

(c('ReactDOM').findDOMNode(this.refs.threadTitle)).
y;

var o=c('Vector').getElementDimensions

(c('ReactDOM').findDOMNode(this.refs.composer)).
y,
p=m-n-o-
this.state.appointmentBannerHeight;
if(p<0)
p=0;

c('PagesManagerMessagingMessagelistAction').setScrollAreaHeight(p);};
l.prototype.

$PagesManagerMessagingDetailContainer_calculateReceipts=function(m,n){
var o=this.$PagesManagerMessagingDetailContainer_mercuryRoger.getSeenTimestamps(m),
p=new (c('Set'))(o.keys());
return o.withMutations(function(q){
c('immutable').Seq(n).reverse().forEach
(function(r){
if(p.size===0)
return false;

if(!p.has(r.author))
return true;

q.update
(r.author,
function(s){
if(!s||s.watermark<=r.timestamp)

return {watermark:r.timestamp,
action:r.timestamp};


return s;});


p['delete'](r.author);});});};


l.prototype.

componentDidMount=function(){
c('PagesManagerPerfLogger').log
(c('PagesManagerMessagingTabPerfEvents').MESSAGE_TAB_DETAIL_VIEW_DID_RENDER,
this.props.perfParams);

if(this.props.listItemKey)
this.$PagesManagerMessagingDetailContainer_updateMercuryMessageStore(this.props.listItemKey);};

l.prototype.

componentWillReceiveProps=function(m){
var n=m.listItemKey;
if(n&&this.props.listItemKey!==n)
this.$PagesManagerMessagingDetailContainer_updateMercuryMessageStore(n);};

l.prototype.

componentWillUpdate=function(m,n){
if(m.height!==this.props.height)
this.$PagesManagerMessagingDetailContainer_setScrollableHeight(m.height);};

l.prototype.

componentDidUpdate=function(m,n){
if(n.appointmentBannerHeight!==
this.state.appointmentBannerHeight)
this.$PagesManagerMessagingDetailContainer_setScrollableHeight(this.props.height);};

l.prototype.

getMessageStore=function(){
return this.$PagesManagerMessagingDetailContainer_mercuryMessagestore;};
l.prototype.

logMessageLoadingStart=function(m){
this.$PagesManagerMessagingDetailContainer_logLoadingEndEvent=true;
this.$PagesManagerMessagingDetailContainer_loadStartTime=Date.now();
this.$PagesManagerMessagingDetailContainer_threadID=m;
new (c('PagesMessagingPerfTypedLogger'))().
setPageID(this.props.pageID).
setEventName(c('PagesMessagingPerfLoggerEvent').MESSAGELIST_LOAD_START).
log();};
l.prototype.

logMessageLoadingEnd=function(){
if(this.$PagesManagerMessagingDetailContainer_logLoadingEndEvent&&
this.$PagesManagerMessagingDetailContainer_threadID===this.props.listItemKey){
this.$PagesManagerMessagingDetailContainer_logLoadingEndEvent=false;
new (c('PagesMessagingPerfTypedLogger'))().
setPageID(this.props.pageID).
setEventName(c('PagesMessagingPerfLoggerEvent').MESSAGELIST_LOAD_END).
setPerfTime(Date.now()-this.$PagesManagerMessagingDetailContainer_loadStartTime).
log();}};

l.prototype.


$PagesManagerMessagingDetailContainer_updateMercuryMessageStore=function(m){
this.$PagesManagerMessagingDetailContainer_mercuryMessagestore&&this.$PagesManagerMessagingDetailContainer_mercuryMessagestore.destroy();
this.$PagesManagerMessagingDetailContainer_subscriptions&&this.$PagesManagerMessagingDetailContainer_subscriptions.release();
this.$PagesManagerMessagingDetailContainer_mercuryMessagestore=new (c('MercuryMessageStore'))
(m,
c('MessengerConfig').MessageLoadCount,
this.props.pageID);

var n=c('PagesManagerMessagingMessagelistStore').getMessagelist
(this.props.pageID,
m);

if(n.length===0){


c('PagesManagerMessagingMessagelistAction').setIsLoadingMore(false);
c('PagesManagerMessagingMessagelistAction').setIsLoading(true);
this.logMessageLoadingStart(m);}


var o=this.$PagesManagerMessagingDetailContainer_calculateReceipts(m,n);
c('PagesManagerMessagingMessagelistAction').updateReadReceipts
(this.props.pageID,
m,
o);

this.$PagesManagerMessagingDetailContainer_subscriptions=new (c('SubscriptionsHandler'))();
this.$PagesManagerMessagingDetailContainer_subscriptions.addSubscriptions
(this.$PagesManagerMessagingDetailContainer_mercuryMessagestore.subscribe(function(p){
this.logMessageLoadingEnd();
c('PagesManagerMessagingMessagelistAction').setIsLoading(false);
c('PagesManagerMessagingMessagelistAction').setIsLoadingMore(false);
c('PagesManagerMessagingMessagelistAction').updateMessagelist
(this.props.pageID,
m,
p);}.

bind(this)),
this.$PagesManagerMessagingDetailContainer_threadInformer.subscribe
('threads-updated',
function(p,q){
if(q[this.props.listItemKey])
c('PagesManagerMessagingMessagelistAction').updateThread
(this.props.pageID,
this.props.listItemKey);}.


bind(this)),

this.$PagesManagerMessagingDetailContainer_mercuryRoger.subscribe('change',function(p,q){
if(q[this.props.listItemKey]){
var r=
c('PagesManagerMessagingMessagelistStore').getMessagelist
(this.props.pageID,
this.props.listItemKey),

s=this.$PagesManagerMessagingDetailContainer_calculateReceipts
(this.props.listItemKey,
r);

c('PagesManagerMessagingMessagelistAction').updateReadReceipts
(this.props.pageID,
this.props.listItemKey,
s);}}.


bind(this)),
c('MessengerHotLikePreviewEvents').addListener
(c('MessengerHotLikePreviewEvents').START,
function(p,q){
if(m==q)
c('PagesManagerMessagingMessagelistAction').setHotLikeStart(p);}),



c('MessengerHotLikePreviewEvents').addListener
(c('MessengerHotLikePreviewEvents').STOP,
function(p){
if(m==p)
c('PagesManagerMessagingMessagelistAction').setHotLikeEnd();}));};




l.prototype.

$PagesManagerMessagingDetailContainer_onComposerFocused=function(){
var m=c('PagesManagerMessagingFilterStore').getActiveFilterName();
if(!this.props.listItemKey||m===c('MessagingTag').UNREAD)
return;

c('PagesManagerMessagingThreadInteractionHelper').handleUnreadStateUpdate
(this.props.listItemKey,
this.props.pageID,
m);

c('PagesManagerMessagingThreadInteractionHelper').handlePermalinkUpdate
(this.props.listItemKey,
this.props.pageID);};

l.prototype.

$PagesManagerMessagingDetailContainer_fetchEarlierMessages=function(){
if(!this.state.isLoadingMore)
if(this.getMessageStore().fetchMoreMessages()){
c('PagesManagerMessagingMessagelistAction').setIsLoading(false);
c('PagesManagerMessagingMessagelistAction').setIsLoadingMore(true);}};


l.prototype.

$PagesManagerMessagingDetailContainer_renderMessageList=function(){

return (c('React').createElement(c('PagesManagerMessagingMessageList.react'),babelHelpers['extends']({},
this.props,
{initLoading:this.state.isLoading,
isLoadingMore:this.state.isLoadingMore,
messagelist:c('immutable').List(this.state.messagelist),
fetchEarlierMessages:function(){return this.$PagesManagerMessagingDetailContainer_fetchEarlierMessages();}.bind(this),
readReceipts:this.state.readReceipts,
scrollHeight:this.state.scrollHeight,
threadID:this.state.threadID,
thread:this.state.thread})));};


l.prototype.

$PagesManagerMessagingDetailContainer_renderContextCard=function(m){
if(!this.state.isContextCardEnabled)
return null;



var n=m,
o=0;
if(this.refs.threadTitle)
o=c('Vector').getElementDimensions

(c('ReactDOM').findDOMNode(this.refs.threadTitle)).
y;

n+=o;

return (c('React').createElement(k,
{alignv:'middle',
className:"_2utd"+

(this.state.hideContextCard?' '+"hidden_elem":'')},

c('React').createElement(c('BootloadedComponent.react'),
{bootloadPlaceholder:c('React').createElement('div',{className:"hidden_elem"}),
bootloadLoader:
c('JSResource')('PagesMessengerContextCardContainer.react').__setRef('PagesManagerMessagingDetailContainer.react'),

pageID:this.props.pageID,
userID:this.state.thread&&this.state.thread.other_user_fbid,
scrollHeight:n,
updatedUI:true})));};



l.prototype.

$PagesManagerMessagingDetailContainer_renderAppointmentBanner=function(){
if(!this.props.config.enableBookingFlow)
return null;

var m=this.state.thread||{};

return (c('React').createElement(c('PagesManagerMessagingAppointmentBannerRoot.react'),
{messageList:this.state.messagelist,
pageID:this.props.pageID,
userID:m.other_user_fbid}));};


l.prototype.

render=function(){


return (c('React').createElement('div',null,
c('React').createElement(c('Grid.react'),
{alignv:'top',
className:"_2utb",
cols:this.state.isContextCardEnabled?2:1},
c('React').createElement(k,
{className:"_2utc"},
c('React').createElement(c('PagesManagerMessagingThreadTitle.react'),
{pageID:this.props.pageID,
isContextCardEnabled:this.state.isContextCardEnabled,
isContextCardHidden:this.state.hideContextCard,
isBanFromPageEnabled:!this.state.isUserBanned,s:true,
ref:'threadTitle',
thread:this.state.thread}),

this.$PagesManagerMessagingDetailContainer_renderAppointmentBanner(),
this.$PagesManagerMessagingDetailContainer_renderMessageList()),

this.$PagesManagerMessagingDetailContainer_renderContextCard(this.state.scrollHeight)),

c('React').createElement('div',{className:!this.props.config.enableComposer?"hidden_elem":''},
c('React').createElement(c('PagesManagerMessagingComposerContainer.react'),
{creatorInfo:this.props.config.creatorInfo,
defaultCurrency:this.props.config.defaultCurrency,
onInitialRender:function(){return this.$PagesManagerMessagingDetailContainer_recalculateLayout();}.bind(this),
onMessageOrAttachmentUpdate:function(){return this.$PagesManagerMessagingDetailContainer_recalculateLayout();}.bind(this),
onFocus:function(){return this.$PagesManagerMessagingDetailContainer_onComposerFocused();}.bind(this),
recipientID:
this.state.thread?
this.state.thread.other_user_fbid.toString():
null,

ref:'composer',
shouldShowCommerceInvoiceButton:
this.props.config.shouldShowCommerceInvoiceButton,

shouldShowCommerceInvoiceButtonNUX:
this.props.config.shouldShowCommerceInvoiceButtonNUX,

shouldShowCommerceInvoiceButtonPUX:
this.props.config.shouldShowCommerceInvoiceButtonPUX,

shouldShowCommerceInvoiceNewFlow:
this.props.config.shouldShowCommerceInvoiceNewFlow,

shouldShowInvoiceShippingNUX:
this.props.config.shouldShowInvoiceShippingNUX,

threadElementID:this.state.threadID,
threadID:this.state.threadID,
userID:this.props.pageID}))));};







f.exports=c('FluxContainer').create
(l,
{withProps:true});}),null);

/** js/pages/pages_manager/messages/views/PagesManagerAwayToggle.react.js */





__d('PagesManagerAwayToggle.react',['cx','fbt','PagesManagerAwayToggleAction','BUISwitch.react','PagesManagerCountDownTimer.react','React','Tooltip'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits










(l,c('React').Component);k=j&&j.prototype;l.prototype.






$PagesManagerAwayToggle_onTimeup=function(){'use strict';
if(this.props.isAway)
c('PagesManagerAwayToggleAction').setToggleStatus(this.props.pageID,false);};

l.prototype.

$PagesManagerAwayToggle_onToggle=function(m){'use strict';
if(m!==this.props.isAway)
c('PagesManagerAwayToggleAction').setToggleStatus(this.props.pageID,m);};

l.prototype.

render=function(){'use strict';
var m=i._(["Stepping out? Set your status to Away for 12 hours. Change it if you get back sooner.","be0d46e225a4dd9c1cc3cac80841444a"]),





n=i._(["Away","8e0d60b5f4f0e61653bc5fce6cfff526"]),





o=0;
if(this.props.expirationTimestamp)
o=this.props.expirationTimestamp*1000;


var p=
c('React').createElement(c('PagesManagerCountDownTimer.react'),
{expireTimestamp:o,
isHidden:!this.props.isAway,
onTimeup:function(){return this.$PagesManagerAwayToggle_onTimeup();}.bind(this)});



return (c('React').createElement('div',{className:"_4cdp"},
c('React').createElement('div',{className:"_ast"},
c('React').createElement(c('BUISwitch.react'),babelHelpers['extends']
({onToggle:function(q){return this.$PagesManagerAwayToggle_onToggle(q);}.bind(this),
value:this.props.isAway},
c('Tooltip').propsFor(m)))),


c('React').createElement('div',{className:"_asu"+

(this.props.isAway?' '+"_2eyq":'')},

n),

p));};


function l(){'use strict';j.apply(this,arguments);}


f.exports=l;}),null);

/** js/pages/pages_manager/messages/views/PagesManagerMessagingBatchActionHeader.react.js */





__d('PagesManagerMessagingBatchActionHeader.react',['cx','fbt','PagesManagerMessagingBatchActionMenu.react','PagesMessagingActionPlacement','React','XUIPopoverButton.react'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k;j=babelHelpers.inherits













(l,c('React').Component);k=j&&j.prototype;l.prototype.




render=function(){



return (c('React').createElement(c('PagesManagerMessagingBatchActionMenu.react'),babelHelpers['extends']
({layerBehaviors:[],
placement:c('PagesMessagingActionPlacement').THREAD_LIST_BATCH_ACTION},
this.props),
c('React').createElement(c('XUIPopoverButton.react'),
{className:"_3640",
label:i._(["Actions","b4da9591a4cfa00d5fa2cff53f195df6"])})));};





function l(){j.apply(this,arguments);}


f.exports=l;}),null);

/** js/pages/pages_manager/messages/flux/container/PagesManagerMessagingBatchActionHeaderContainer.react.js */





__d('PagesManagerMessagingBatchActionHeaderContainer.react',['FluxContainer','MercuryPageThreadActions','MercuryThreads','PagesManagerMessagingNavigationUnitKey','PagesManagerMessagingBatchActionHeader.react','PagesManagerMessagingFilterStore','PagesMessengerThreadUtils','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits



























(j,c('React').Component);i=h&&h.prototype;

function j(k,l){
i.constructor.call(this,k,l);
this.$PagesManagerMessagingBatchActionHeaderContainer_threadAction=c('MercuryPageThreadActions').getForFBID(k.pageID);}
j.

getStores=function(){
return [c('PagesManagerMessagingFilterStore')];};


j.

calculateState=function(k,l){
var m=c('PagesManagerMessagingFilterStore').getActiveFolderName(),
n=c('PagesManagerMessagingFilterStore').getActiveFilterName(),
o=c('MercuryThreads').getForFBID(l.pageID),
p=false,
q=false,
r=false,
s=false,
t=false,
u=false,
v=false,
w=false,
x=false,

y=0,
z=0;
l.selectedRows.forEach(function(ba){
var ca=o.getThreadMetaNow(ba);
if(c('PagesMessengerThreadUtils').isFlagThread(ca))
y++;

if(ca&&ca.unread_count===0)
z++;});


var aa=l.selectedRows.length;
if(m===c('PagesManagerMessagingNavigationUnitKey').FOLDERS.INBOX&&
n===c('PagesManagerMessagingNavigationUnitKey').FILTERS.ALL){
p=true;
s=true;
u=aa-y>0;
v=y>0;
w=z<aa;
x=z>0;}else
if(m===c('PagesManagerMessagingNavigationUnitKey').FOLDERS.ARCHIVED&&
n===c('PagesManagerMessagingNavigationUnitKey').FILTERS.ALL){
q=true;
r=true;}else
if(m===c('PagesManagerMessagingNavigationUnitKey').FOLDERS.SPAM&&
n===c('PagesManagerMessagingNavigationUnitKey').FILTERS.ALL){
t=true;}else
if(n===c('PagesManagerMessagingNavigationUnitKey').FILTERS.FLAGGED&&
m===c('PagesManagerMessagingNavigationUnitKey').FOLDERS.INBOX){
v=true;}else
if(n===c('PagesManagerMessagingNavigationUnitKey').FILTERS.UNREAD&&
m===c('PagesManagerMessagingNavigationUnitKey').FOLDERS.INBOX)
w=true;



return {inlineActionParam:
{showArchive:p,
showDelete:q,
showUnarchive:r,
showSpam:s,
showUnspam:t,
showFlag:u,
showUnflag:v,
showMarkRead:w,
showMarkUnread:x}};};


j.prototype.

$PagesManagerMessagingBatchActionHeaderContainer_onSelectionClear=function(){
this.props.onSelectionClear();};
j.prototype.

render=function(){

return (c('React').createElement(c('PagesManagerMessagingBatchActionHeader.react'),babelHelpers['extends']
({onSelectionClear:function(){return this.$PagesManagerMessagingBatchActionHeaderContainer_onSelectionClear();}.bind(this),
pageID:this.props.pageID,
showBatchAction:this.props.showBatchAction,
selectedRows:this.props.selectedRows},
this.state)));};





f.exports=c('FluxContainer').create
(j,
{withProps:true});}),null);

/** js/pages/pages_manager/messages/views/PagesManagerMessagingFilterPanel.react.js */





__d('PagesManagerMessagingFilterPanel.react',['ix','cx','fbt','Image.react','immutable','InlineBlock.react','LeftRight.react','Link.react','MessengerSpinner.react','PageCustomTagSearchSource','PageCustomTagSearchableEntry','PagesAdminToolUIActionType','PagesContextCardCustomTag.react','PagesEnumTag.react','PagesManagerCustomTagsAction','PagesManagerLogger','PagesManagerManageCustomTagsDialog.react','PagesManagerMessagingFilterActions','PagesManagerMessagingThreadlistAction','React','ReactDOM','SearchableTextInput.react','ScrollableArea.react','Vector','fbglyph','nullthrows','PagesManagerMessagingNavigationUnitKey'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,































m=c('PagesManagerMessagingNavigationUnitKey').FILTERS,
n=45,
o=130;k=babelHelpers.inherits



















(p,c('React').Component);l=k&&k.prototype;


function p(q){
l.constructor.call(this,q);this.






$PagesManagerMessagingFilterPanel_onEnumTagClick=function(r){
c('PagesManagerMessagingFilterActions').changeFilter
(this.props.pageID,
r);}.

bind(this);this.

$PagesManagerMessagingFilterPanel_onEnumTagRemove=function(){
c('PagesManagerMessagingFilterActions').changeFilter
(this.props.pageID,
this.props.defaultFilter);}.

bind(this);this.

$PagesManagerMessagingFilterPanel_onTagClick=function(r){
this.setState
({tagQuery:'',
tagQueryResult:null});

c('PagesManagerMessagingThreadlistAction').addSearchCustomTag
(this.props.pageID,
r.name,
'filter_panel');}.

bind(this);this.

$PagesManagerMessagingFilterPanel_onTagRemove=function(r){
this.setState
({tagQuery:'',
tagQueryResult:null});

c('PagesManagerMessagingThreadlistAction').removeSearchCustomTag
(this.props.pageID,
r.name,
'filter_panel');}.

bind(this);this.
















$PagesManagerMessagingFilterPanel_onQueryChange=function(event){
this.setState
({tagQuery:event.target.value});}.

bind(this);this.

$PagesManagerMessagingFilterPanel_onTagEntriesFound=function(r,s){
if(s===this.state.tagQuery)
this.setState
({tagQueryResult:r.map(function(t){return t.getTitle();})});}.


bind(this);this.























































































































































































$PagesManagerMessagingFilterPanel_onClickManageTagsLink=function(){
c('PagesManagerLogger').logMessageInboxUIAction
(c('PagesAdminToolUIActionType').MESSAGE_INBOX_CLICK_MANAGE_TAGS,
this.props.pageID);

this.$PagesManagerMessagingFilterPanel_onToggleManageTagsDialog(true);}.
bind(this);this.

$PagesManagerMessagingFilterPanel_onToggleManageTagsDialog=function(r){
c('PagesManagerCustomTagsAction').toggleManageTagsDialog
(this.props.pageID,
r);}.

bind(this);this.state={tagQuery:'',tagQueryResult:null};}p.prototype.$PagesManagerMessagingFilterPanel_getTagListHeight=function(){var q=this.props.height-n,r=c('ReactDOM').findDOMNode(this.refs.header);if(r!==null)q-=c('Vector').getElementDimensions(r).y;var s=c('ReactDOM').findDOMNode(this.refs.searchBar);if(s!==null)q-=c('Vector').getElementDimensions(s).y;return q-o;};p.prototype.$PagesManagerMessagingFilterPanel_renderSelectedFilterRow=function(q){return c('React').createElement('div',{className:"_3v0k",key:q.getKey()},c('React').createElement(c('Image.react'),{className:"__o0",src:h("141802")}),c('React').createElement(c('PagesEnumTag.react'),{onClick:this.$PagesManagerMessagingFilterPanel_onEnumTagClick,unit:q,textOnly:true}),c('React').createElement(c('Link.react'),{className:"__o1",onClick:this.$PagesManagerMessagingFilterPanel_onEnumTagRemove},j._(["Remove","2366db1124f43567724806f013e1eab8"])));};p.prototype.$PagesManagerMessagingFilterPanel_renderFilterRow=function(q){return c('React').createElement('div',{className:"_3v0k",key:q.getKey()},c('React').createElement(c('PagesEnumTag.react'),{onClick:this.$PagesManagerMessagingFilterPanel_onEnumTagClick,unit:q,textOnly:true}));};p.prototype.$PagesManagerMessagingFilterPanel_renderSelectedTagRow=function(q){return c('React').createElement('div',{className:"_3v0k",key:q.id},c('React').createElement(c('Image.react'),{className:"__o0",src:h("141802")}),c('React').createElement(c('PagesContextCardCustomTag.react'),{canRemove:false,key:q.id,tagData:q,textOnly:true}),c('React').createElement(c('Link.react'),{className:"__o1",onClick:function(){return this.$PagesManagerMessagingFilterPanel_onTagRemove(q);}.bind(this)},j._(["Remove","e000c501a4cda5ed9293654742d83eb5"])));};p.prototype.$PagesManagerMessagingFilterPanel_renderTagRow=function(q){var r=null;if(this.props.currentSearchCustomTagThreadCounts)r=this.props.currentSearchCustomTagThreadCounts.get(q.name);return c('React').createElement('div',{className:"_3v0k",key:q.id},c('React').createElement(c('PagesContextCardCustomTag.react'),{canRemove:false,key:q.id,tagData:q,onClick:this.$PagesManagerMessagingFilterPanel_onTagClick,textOnly:true}),c('React').createElement('span',{className:"_2-3_"},r!==null?r:c('React').createElement(c('MessengerSpinner.react'),null)));};p.prototype.$PagesManagerMessagingFilterPanel_renderTagsList=function(){var q=[],r=[],s=[],t=this.state.tagQuery!==''&&this.state.tagQueryResult!==null;if(this.props.activeFilter.getKey()===m.FLAGGED)q.push(this.$PagesManagerMessagingFilterPanel_renderSelectedFilterRow(this.props.activeFilter));this.props.currentSearchCustomTagNames.map(function(u){if(!t||c('nullthrows')(this.state.tagQueryResult).indexOf(u)>=0)q.push(this.$PagesManagerMessagingFilterPanel_renderSelectedTagRow(this.props.customTags.get(u)));}.bind(this));if(this.state.tagQuery!==''&&this.state.tagQueryResult!==null){c('nullthrows')(this.state.tagQueryResult).map(function(u){if(!this.props.currentSearchCustomTagNames.contains(u))s.push(this.$PagesManagerMessagingFilterPanel_renderTagRow(this.props.customTags.get(u)));}.bind(this));}else{if(this.props.enumTags)this.props.enumTags.forEach(function(u){if(u.getKey()!==this.props.activeFilter.getKey())r.push(this.$PagesManagerMessagingFilterPanel_renderFilterRow(u));}.bind(this));if(this.props.currentSearchCustomTagThreadCounts!==null)this.props.currentSearchCustomTagThreadCounts.forEach(function(u,v){if(!this.props.currentSearchCustomTagNames.contains(v))s.push(this.$PagesManagerMessagingFilterPanel_renderTagRow(this.props.customTags.get(v)));}.bind(this));this.props.customTags.forEach(function(u,v){if(!this.props.currentSearchCustomTagNames.contains(v)&&(this.props.currentSearchCustomTagThreadCounts===null||v in this.props.currentSearchCustomTagThreadCounts))s.push(this.$PagesManagerMessagingFilterPanel_renderTagRow(this.props.customTags.get(v)));}.bind(this));}return c('React').createElement(c('ScrollableArea.react'),{className:"_3v0j",height:this.$PagesManagerMessagingFilterPanel_getTagListHeight(),key:'tagList'},q,r,s);};p.prototype.$PagesManagerMessagingFilterPanel_renderExplanationNote=function(){return c('React').createElement(c('InlineBlock.react'),null,c('React').createElement(c('Image.react'),{src:'/images/pages/context_card/tag.png'}),c('React').createElement(c('InlineBlock.react'),{className:"_106m"},c('React').createElement('div',{className:"_106n"},j._(["About Labels","a46ba53496cb7959e42a55bebc5b1dd4"])),j._(["Labels help you track and find conversations. Create your own labels and apply them to people based on what they messaged you about.","6f200ec10f73b2b332ecbae8122332a3"])));};p.prototype.

$PagesManagerMessagingFilterPanel_getManageTagsDialog=function(){

return (c('React').createElement(c('PagesManagerManageCustomTagsDialog.react'),
{customTags:this.props.customTags,
pageID:this.props.pageID,
show:this.props.isManagingTags,
onToggle:this.$PagesManagerMessagingFilterPanel_onToggleManageTagsDialog,
isMergingLabels:this.props.isMergingLabels}));};


p.prototype.

render=function(){



return (c('React').createElement('div',
{className:"_5xjz",
style:{height:this.props.height-n+'px'}},
c('React').createElement(c('LeftRight.react'),
{className:"_5xj_",
ref:'header'},j._(["LABELS","8d7438a87b222bb3dde0374c1fe93e53"]),



c('React').createElement(c('Link.react'),{onClick:this.$PagesManagerMessagingFilterPanel_onClickManageTagsLink},j._(["Add & Manage","40114624b9b3ed4eddb8d1958c1b4f9d"]))),





c('React').createElement(c('SearchableTextInput.react'),
{className:"_30p_",
onChange:this.$PagesManagerMessagingFilterPanel_onQueryChange,
onEntriesFound:this.$PagesManagerMessagingFilterPanel_onTagEntriesFound,
placeholder:j._(["Search your labels...","1c98a3b9d332fc805afb23096a8e1916"]),




queryString:this.state.tagQuery,
searchSource:
c('PageCustomTagSearchSource').getInstance
(this.props.customTags.toArray(),
false),


ref:'searchBar'}),

this.$PagesManagerMessagingFilterPanel_renderTagsList(),
this.$PagesManagerMessagingFilterPanel_getManageTagsDialog(),
this.$PagesManagerMessagingFilterPanel_renderExplanationNote()));};





f.exports=p;}),null);

/** js/pages/pages_manager/messages/container/PagesManagerMessagingFilterPanelContainer.react.js */





__d('PagesManagerMessagingFilterPanelContainer.react',['PagesManagerMessagingFilterStore','FluxContainer','immutable','PagesManagerCustomTagsAction','PagesManagerCustomTagsStore','PagesManagerMessagingFilterPanel.react','PagesManagerMessagingNavigationUnitKey','PagesManagerMessagingThreadlistAction','React','PagesManagerMessagingSearchStore'],(function a(b,c,d,e,f,g){

'use strict';var h,i,
















j=c('PagesManagerMessagingNavigationUnitKey').FILTERS;h=babelHelpers.inherits
















(k,c('React').Component);i=h&&h.prototype;

function k(l){
i.constructor.call(this,l);}
k.

getStores=function(){
return [c('PagesManagerMessagingFilterStore'),c('PagesManagerCustomTagsStore'),c('PagesManagerMessagingSearchStore')];};




k.prototype.

componentWillMount=function(){

if(!c('PagesManagerCustomTagsStore').hasCustomTags(this.props.pageID))

c('PagesManagerCustomTagsAction').fetch(this.props.pageID);};

k.prototype.

componentDidUpdate=function(l,m){

if(this.state.isFiltering&&!m.isFiltering&&
this.state.currentSearchCustomTagThreadCounts===null)

c('PagesManagerMessagingThreadlistAction').fetchCustomTagThreadCounts
(this.props.pageID);};


k.

calculateState=function(l,m){

return {activeFilter:c('PagesManagerMessagingFilterStore').getActiveFilter(),
currentSearchCustomTagNames:
c('PagesManagerMessagingSearchStore').getCurrentSearchCustomTagNames(),
currentSearchCustomTagThreadCounts:
c('PagesManagerMessagingSearchStore').getCurrentSearchCustomTagThreadCounts(),
customTags:c('PagesManagerCustomTagsStore').getCustomTags(m.pageID),
isManagingTags:c('PagesManagerCustomTagsStore').getIsManagingTags(),
isFiltering:c('PagesManagerMessagingFilterStore').getIsFiltering(),
isMergingLabels:c('PagesManagerCustomTagsStore').getIsMergingLabels()};};

k.prototype.

render=function(){
var l=c('PagesManagerMessagingFilterStore').getAvailableFilters(),
m=[],
n=l.get(0);
if(c('PagesManagerMessagingFilterStore').getActiveFilterName()===j.ALL)
m=l.filter
(function(o){return o.getKey()===j.FLAGGED;});




return (c('React').createElement(c('PagesManagerMessagingFilterPanel.react'),
{activeFilter:this.state.activeFilter,
currentSearchCustomTagNames:this.state.currentSearchCustomTagNames,
currentSearchCustomTagThreadCounts:
this.state.currentSearchCustomTagThreadCounts,

customTags:this.state.customTags,
defaultFilter:n,
enumTags:m,
height:this.props.height,
isManagingTags:this.state.isManagingTags,
pageID:this.props.pageID,
isMergingLabels:this.state.isMergingLabels}));};





f.exports=c('FluxContainer').create
(k,
{withProps:true});}),null);

/** js/pages/pages_manager/messages/views/PagesManagerMessagingFilterPanelSwitch.react.js */





__d('PagesManagerMessagingFilterPanelSwitch.react',['ix','cx','fbt','AsyncRequest','ContextualDialogArrow','ContextualLayer.react','Image.react','PagesAdminToolUIActionType','PagesManagerLogger','PagesManagerMessagingFilterActions','PagesManagerMessagingFilterPanelContainer.react','React','XBasicFBNuxDismissController','XUIAmbientNUX.react','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,

















m=4152;k=babelHelpers.inherits












(n,
c('React').Component);l=k&&k.prototype;

function n(o){
l.constructor.call(this,o);this.





$PagesManagerMessagingFilterPanelSwitch_onNUXCloseButtonClick=function(){
var p=c('XBasicFBNuxDismissController').
getURIBuilder().
setInt('nux_id',m).
getURI();
new (c('AsyncRequest'))().setURI(p).send();
this.setState({showNUX:false});}.
bind(this);this.

$PagesManagerMessagingFilterPanelSwitch_onSwitchClick=function(){
c('PagesManagerLogger').logMessageInboxUIAction
(c('PagesAdminToolUIActionType').MESSAGE_INBOX_TOGGLE_FILTER_PANEL,
this.props.pageID,

{show:!this.props.isFiltering});


c('PagesManagerMessagingFilterActions').toggleFilterPanel
(this.props.pageID,
!this.props.isFiltering);}.

bind(this);this.state={showNUX:this.props.showNUX};}n.prototype.

$PagesManagerMessagingFilterPanelSwitch_getNUX=function(){

return (c('React').createElement(c('XUIAmbientNUX.react'),
{contextRef:function(){return this.refs.contextRef;}.bind(this),
onCloseButtonClick:this.$PagesManagerMessagingFilterPanelSwitch_onNUXCloseButtonClick,
position:'above',
shown:this.state.showNUX,
width:'auto'},j._(["Now You can filter your inbox by labels.","168e48ee7f434db1c77fa0f085ce64ba"])));};






n.prototype.

render=function(){

return (c('React').createElement('span',null,
c('React').createElement('span',
{className:"_5pwy",
onClick:this.$PagesManagerMessagingFilterPanelSwitch_onSwitchClick,
ref:'contextRef'},
c('React').createElement('span',{className:"_5pwz"+

(this.props.isFiltering?' '+"_5px3":'')},j._(["Filter By","0d6bbd1e972588e06bc3794b0a18668c"])),





c('React').createElement(c('Image.react'),
{className:"_5px4",
src:
this.props.isFiltering?
h("113106"):




h("124190")})),







c('React').createElement(c('ContextualLayer.react'),
{alignment:'right',
containerWidthMatchContext:false,
contextRef:function(){return this.refs.contextRef;}.bind(this),
layerBehaviors:[c('ContextualDialogArrow')],
shown:this.props.isFiltering,
offsetX:12,
offsetY:16,
position:'below'},
c('React').createElement(c('PagesManagerMessagingFilterPanelContainer.react'),
{pageID:this.props.pageID,
height:this.props.height})),


this.$PagesManagerMessagingFilterPanelSwitch_getNUX()));};





f.exports=n;}),null);

/** js/pages/pages_manager/messages/views/PagesManagerMessagingList.react.js */







__d('PagesManagerMessagingList.react',['cx','fbt','Link.react','PagesManagerListRowContainer.react','PagesManagerAction','PagesMessagingSearchMode','PagesSelectableList.react','React','emptyFunction'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits












(l,c('React').Component);k=j&&j.prototype;l.prototype.



































$PagesManagerMessagingList_onViewingListItem=function(m){'use strict';
c('PagesManagerAction').viewListItem(m);};
l.prototype.

$PagesManagerMessagingList_renderListResult=function(){'use strict';
if(!this.props.isInSearchMode){
if(!this.props.list.length){
if(!this.props.initLoading){
return [this.props.emptyView];}else 

return [this.$PagesManagerMessagingList_renderLoading()];}else 


return this.$PagesManagerMessagingList_renderListItems();}else 


return this.$PagesManagerMessagingList_renderSearchResult();};

l.prototype.

$PagesManagerMessagingList_renderSearchResult=function(){'use strict';
var m=null,
n=[];
switch(this.props.searchMode){
case c('PagesMessagingSearchMode').MESSAGE_SEARCH:
m=i._(["Messages that contain '{message search term}'","dbd2e22ec07e29536efccd9bd1754cc3"],[i.param


('message search term',
this.props.searchTerm)]);



Object.keys(this.props.snippetSearchResult).forEach(function(p){
n.push
(c('React').createElement(c('PagesManagerListRowContainer.react'),babelHelpers['extends']
({ChildClass:this.props.listRowContainer,
listItem:p,
pageID:this.props.pageID,
ref:p,
key:p,
onViewingListItem:this.$PagesManagerMessagingList_onViewingListItem,
snippetSearchResult:this.props.snippetSearchResult[p],
highlightText:this.props.searchTerm,
useHighlightTitle:false,
type:'li'},
this.props.containerProps)));}.


bind(this));
break;
case c('PagesMessagingSearchMode').NAME_SEARCH:
m=i._(["Names that contain '{message search term}'","d0691db3e95aebe37e811be111339a95"],[i.param


('message search term',
this.props.searchTerm)]);



n=
this.props.searchResult.map(function(p){
return (c('React').createElement(c('PagesManagerListRowContainer.react'),babelHelpers['extends']
({ChildClass:this.props.listRowContainer,
disableCheckBox:true,
listItem:p,
pageID:this.props.pageID,
ref:p,
key:p,
onViewingListItem:this.$PagesManagerMessagingList_onViewingListItem,
highlightText:this.props.searchTerm,
useHighlightTitle:true,
type:'li'},
this.props.containerProps)));}.bind(this));


break;}

m=
c('React').createElement('li',
{className:"_16-z",
key:'searchTitle'},

m);


var o=
this.props.hasMoreResult?
c('React').createElement('li',
{className:"_2b19",
key:'loadMoreResult'},
c('React').createElement(c('Link.react'),{onClick:
this.props.loadMore.bind
(null,
this.props.searchMode,
this.props.searchTerm)},i._(["See more results","5bb4fe36a04ecb9e0dbbe94f5d06c671"]))):






c('React').createElement('li',
{className:"_3o39",
key:'loadMoreResult'});



return [m].concat
(n,
[o]);};

l.prototype.

$PagesManagerMessagingList_renderLoading=function(){'use strict';
return c('React').createElement('div',{key:'loading'});};
l.prototype.

$PagesManagerMessagingList_renderListItems=function(){'use strict';
return this.props.list.map(function(m){
return (c('React').createElement(c('PagesManagerListRowContainer.react'),babelHelpers['extends']
({ChildClass:this.props.listRowContainer,
listItem:m,
pageID:this.props.pageID,
ref:this.props.getKey(m),
key:this.props.getKey(m),
onViewingListItem:this.$PagesManagerMessagingList_onViewingListItem,
type:'li'},
this.props.containerProps)));}.bind(this));};


l.prototype.

render=function(){'use strict';
var m=this.$PagesManagerMessagingList_renderListResult();

return (c('React').createElement(c('PagesSelectableList.react'),
{actionBarRightComponent:this.props.actionBarRightContainer,
customLeftComponent:this.props.folderDropDown,
deselectAllLabel:'',
hideBatchAction:
this.props.isInSearchMode||
this.props.isFilteringByTag,

enableOnVisible:!this.props.isInSearchMode&&this.props.hasMoreResult,
forceRequestMoreRows:!this.props.isInSearchMode,
height:this.props.height,
header:this.props.header,
loadingIndicator:this.props.loadingMoreSpinner,
onSelectionChange:this.props.onSelectionChange,
onRequestMoreRows:
this.props.isInSearchMode?c('emptyFunction'):

this.props.onScroll,
ref:'selectableList',
scrollableAreaMode:true,
scrollableAreaHasShadow:false,
scrollableAreaOnScroll:this.props.handleScroll,
scrollableWidth:this.props.scrollableWidth,
selectAllLabel:this.props.selectAllLabel},
m));};


l.prototype.

clearSelection=function(){'use strict';
this.refs.selectableList.clearSelection();};
function l(){'use strict';j.apply(this,arguments);}

f.exports=l;}),null);

/** js/pages/pages_manager/messages/views/MercuryPageSeenIndicator.react.js */





__d('MercuryPageSeenIndicator.react',['cx','MercuryIDs','MercurySeenIndicator.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits







(k,c('React').Component);j=i&&i.prototype;k.prototype.






render=function(){
if(this.props.snippetSearchResult){
var l=this.props.snippetSearchResult.snippets.length;
if(l===1){
var m=this.props.snippetSearchResult.snippets[0].author,
n=c('MercuryIDs').getParticipantIDFromUserID(this.props.viewer);
if(m===n)

return (c('React').createElement('span',
{className:"_3jy5 repliedLast"}));}






return (c('React').createElement('span',null));}else 



return (c('React').createElement(c('MercurySeenIndicator.react'),
{thread:this.props.thread,
viewer:this.props.viewer}));};



function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/pages/pages_manager/messages/views/MercuryPageThreadTitle.react.js */





__d('MercuryPageThreadTitle.react',['DOM','MercuryMessageRenderer','MercuryThreadTitle.react','React','ReactDOM'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits







(j,c('MercuryThreadTitle.react'));i=h&&h.prototype;j.prototype.





render=function(){

return (c('React').createElement('div',{className:this.props.className},
c('React').createElement('span',{ref:'title'})));};


j.prototype.

componentDidUpdate=function(){
var k=
this.props.thread.name?
this.$MercuryPageThreadTitle_renderThreadTitle():
this.state.participantNames;
if(this.props.useHighlightTitle){
var l=k.toLowerCase().search
(this.props.highlightText.toLowerCase()),

m={};
m[l]=this.props.highlightText;
k=c('MercuryMessageRenderer').formatMessageBody
(k,
m);}


c('DOM').setContent(c('ReactDOM').findDOMNode(this.refs.title),k);};
function j(){h.apply(this,arguments);}


j.defaultProps=
{isNewThread:false,
showUnreadCount:false,
useShortName:false,
useAndSeparator:false};


f.exports=j;}),null);

/** js/pages/pages_manager/messages/views/PagesManagerMessagingThreadIntentView.react.js */





__d('PagesManagerMessagingThreadIntentView.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits













(k,c('React').Component);j=i&&i.prototype;


function k(l){
j.constructor.call(this,l);}
k.prototype.

render=function(){

return (c('React').createElement('div',{className:c('joinClasses')

(!this.props.intentDescription||
this.props.isThreadReplied&&this.props.isThreadSeen?"hidden_elem":'',

this.props.className)},

c('React').createElement('div',{className:"_5jsx"}),
c('React').createElement('span',null,
this.props.intentDescription)));};






f.exports=k;}),null);

/** js/pages/pages_manager/messages/container/PagesManagerMessagingThreadIntentContainer.react.js */





__d('PagesManagerMessagingThreadIntentContainer.react',['cx','FluxContainer','MercuryIDs','PagesManagerMessagingClassifierStore','PagesManagerMessagingThreadIntentView.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits























(k,c('React').Component);j=i&&i.prototype;k.



getStores=function(l){
return [c('PagesManagerMessagingClassifierStore')];};


k.

calculateState=
function(l,
m){

var n=m.thread.snippet_sender;

return {intent:c('PagesManagerMessagingClassifierStore').getIntentOnThread
(m.pageID,
m.userID),

isThreadReplied:n?
c('MercuryIDs').tokenize
(n).
value===m.pageID:
false,
isThreadSeen:m.thread.unread_count===0};};



function k(l){
j.constructor.call(this,l);}
k.prototype.

render=function(){
if(this.state.isThreadReplied&&this.state.isThreadSeen)
return null;


return (c('React').createElement(c('PagesManagerMessagingThreadIntentView.react'),
{className:"_o2k",
intentDescription:this.state.intent,
isThreadReplied:this.state.isThreadReplied,
isThreadSeen:this.state.isThreadSeen}));};





f.exports=c('FluxContainer').create
(k,
{withProps:true,pure:true});}),null);

/** js/pages/pages_manager/messages/views/PagesManagerMessagingListRow.react.js */







__d('PagesManagerMessagingListRow.react',['csx','cx','fbt','ContextualDialogArrow','ContextualLayerAutoFlip','CSS','PagesManagerMessagingFilterStore','Layout.react','MercuryPageSeenIndicator.react','MercuryPageThreadTitle.react','MercuryThreadSnippet.react','MercuryThreadTimestamp.react','MercuryTimestamp','PagesAdminToolUIActionType','PagesContextCardCustomTag.react','PagesEnumTag.react','PagesManagerLogger','PagesManagerMessagingBatchActionMenu.react','PagesManagerMessagingThreadIntentContainer.react','PagesMessagingActionPlacement','PagesSelectableListRow.react','React','SplitImage.react','PagesManagerMessagingNavigationUnitKey','XUIBadge.react'],(function a(b,c,d,e,f,g,h,i,j){var k,l,





































m=c('Layout.react').Column,
n=c('Layout.react').FillColumn,































o=44;k=babelHelpers.inherits

(p,c('React').Component);l=k&&k.prototype;


function p(q){'use strict';
l.constructor.call(this,q);
this.state=
{menuShown:false,
showFadding:false};}

p.prototype.

renderSnippetSearchResult=function(){'use strict';
var q=this.props.snippetSearchResult.snippets.length,
r=this.props.snippetSearchResult.num_total_snippets;
if(q===1){

return (c('React').createElement('div',{className:"_3f6a"},
this.props.snippetSearchResult.snippets[0].body));}else 




return (c('React').createElement('div',{className:"_3f6a"},j._(["Found {number of messages found} Results","c9341870c8d0eb8a2a1e54ec4e968d37"],[j.param


('number of messages found',
r)])));};






p.prototype.

$PagesManagerMessagingListRow_renderTagBlock=function(){'use strict';
var q=this.props.customTagsData,
r=null;
if(this.props.isFlagged)
r=
c('React').createElement(c('PagesEnumTag.react'),
{canRemove:false,
unit:c('PagesManagerMessagingFilterStore').getFilterByKey(c('PagesManagerMessagingNavigationUnitKey').FILTERS.FLAGGED)});



return (c('React').createElement('div',
{className:"_1woq",
ref:'tagBlock'},
c('React').createElement('div',{ref:'tags',className:"_4pbm"},
r,
q.map(function(s){
return (c('React').createElement(c('PagesContextCardCustomTag.react'),
{key:s.name,
canRemove:false,
tagData:s}));})),



c('React').createElement('span',{className:"_1wor"})));};


p.prototype.

$PagesManagerMessagingListRow_renderRow=function(){'use strict';

return (c('React').createElement('div',null,
c('React').createElement('div',{className:"_2fp5"},

this.props.participantImages?
c('React').createElement(c('SplitImage.react'),
{srcs:this.props.participantImages,
size:o}):

null),


c('React').createElement('div',
{className:"_55hu"},
c('React').createElement(c('MercuryThreadTimestamp.react'),
{time:this.props.thread.timestamp,
title:
c('MercuryTimestamp').getAbsoluteTimestamp(this.props.thread.timestamp),

text:
c('MercuryTimestamp').getRelativeTimestamp(this.props.thread.timestamp)})),



c('React').createElement(c('PagesManagerMessagingBatchActionMenu.react'),
{alignh:'right',
layerBehaviors:[c('ContextualDialogArrow'),c('ContextualLayerAutoFlip')],
onHide:function(){
this.setState({menuShown:false});}.
bind(this),
onShow:function(){
this.setState({menuShown:true});}.
bind(this),
pageID:this.props.pageID,
inlineActionParam:this.props.inlineActionParam,
placement:c('PagesMessagingActionPlacement').THREAD_ROW_ACTION_ICON,
selectedRows:[this.props.thread.thread_id],
showBatchAction:true},
c('React').createElement('span',
{className:"_4hq1",
onClick:function q(event){return event.stopPropagation();},
role:'button',
tabIndex:'0'})),

c('React').createElement(c('Layout.react'),null,
c('React').createElement(n,
{className:"_2fp6"},
c('React').createElement(c('MercuryPageThreadTitle.react'),
{className:"_1a_3",
highlightText:this.props.highlightText,
showUnreadCount:false,
thread:this.props.thread,
useShortName:false,
useHighlightTitle:this.props.useHighlightTitle,
viewer:this.props.pageID}),

c('React').createElement('div',{className:"_1a_7"},
c('React').createElement(c('PagesManagerMessagingThreadIntentContainer.react'),
{pageID:this.props.pageID,
userID:this.props.thread.other_user_fbid,
thread:this.props.thread}),

this.props.snippetSearchResult?
this.renderSnippetSearchResult():
c('React').createElement(c('MercuryThreadSnippet.react'),
{participants:this.props.participants,
shouldRenderYou:false,
thread:this.props.thread,
viewer:this.props.pageID})),



this.$PagesManagerMessagingListRow_renderTagBlock()),

c('React').createElement(m,
{className:"_2fp8"},
this.props.thread.unread_count>0?
c('React').createElement('div',{className:"_2fp9"},
c('React').createElement(c('XUIBadge.react'),
{count:this.props.thread.unread_count,
maxcount:99})):


c('React').createElement('div',{className:"_2fpa"},
c('React').createElement(c('MercuryPageSeenIndicator.react'),
{snippetSearchResult:this.props.snippetSearchResult,
thread:this.props.thread,
viewer:this.props.pageID}))))));};







p.prototype.

render=function(){'use strict';

return (c('React').createElement(c('PagesSelectableListRow.react'),
{disabled:this.props.disableCheckBox,
onSelected:this.props.onSelected,
onClick:function(event){
if(c('CSS').matchesSelector
(event.target.parentElement,
"._4vbb"))

return;

c('PagesManagerLogger').logMessageInboxUIAction
(c('PagesAdminToolUIActionType').MESSAGE_INBOX_CLICK_THREAD_BLOCK,
this.props.pageID);

this.props.onViewingListItem(this.props.listItem);}.
bind(this),
selected:this.props.selected,
className:"_1a_0"+

(this.props.isUnread?' '+"_1a_1":'')+

(this.props.isViewing&&!this.props.selected?' '+"_3wxb":'')+

(this.state.menuShown?' '+"_1hgw":'')+(' '+"_o3f")+(' '+"_1yt-")+



(this.props.selectionMode?' '+"_ptw":'')},


this.$PagesManagerMessagingListRow_renderRow()));};










p.defaultProps=
{disableCheckBox:false,
useHighlightTitle:false};


f.exports=p;}),null);

/** js/pages/pages_manager/messages/container/PagesManagerMessagingListRowContainer.react.js */






__d('PagesManagerMessagingListRowContainer.react',['immutable','PagesManagerMessagingListRow.react','MercuryIDs','MercuryParticipants','MercuryThreads','PagesManagerCustomTagsStore','PagesManagerMessagingFilterStore','PagesManagerMessagingThreadInteractionHelper','PagesMessengerThreadUtils','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i,











j=c('immutable').Map;h=babelHelpers.inherits

































(k,c('React').Component);i=h&&h.prototype;









function k(){
i.constructor.call(this);this.

















































$PagesManagerMessagingListRowContainer_setParticipantImages=function(l){
if(this.$PagesManagerMessagingListRowContainer_isMounted)
this.setState
({participantImages:l});}.


bind(this);this.

































































$PagesManagerMessagingListRowContainer_onViewingMessagingListItem=function(l){
c('PagesManagerMessagingThreadInteractionHelper').handleUnreadStateUpdate
(l,
this.props.pageID,
c('PagesManagerMessagingFilterStore').getActiveFilterName());

c('PagesManagerMessagingThreadInteractionHelper').handlePermalinkUpdate
(l,
this.props.pageID);

this.props.onViewingListItem(l);}.
bind(this);this.$PagesManagerMessagingListRowContainer_isMounted=false;}k.prototype.componentWillUnmount=function(){this.$PagesManagerMessagingListRowContainer_isMounted=false;};k.prototype.componentWillMount=function(){this.$PagesManagerMessagingListRowContainer_isMounted=true;var l=c('MercuryThreads').getForFBID(this.props.pageID).getThreadMetaNow(this.props.listItem);if(!l)return;var m=void 0;if(l.other_user_fbid){var n=c('MercuryIDs').getParticipantIDFromUserID(l.other_user_fbid),o=c('MercuryParticipants').getNow(n);m=o&&o.big_image_src?[o.big_image_src]:undefined;if(!m)c('MercuryParticipants').getOrderedBigImageMulti([n],this.$PagesManagerMessagingListRowContainer_setParticipantImages);}this.setState({inlineActionParam:c('PagesMessengerThreadUtils').getBatchActionMenuParam(l),thread:l,participants:j(c('immutable').Seq(l.participants).map(function(p){return [p,c('MercuryParticipants').getOrFetch(p)];})),participantImages:m});};k.prototype.shouldComponentUpdate=function(l,m){if(l.selected!==this.props.selected||l.selectionMode!==this.props.selectionMode||l.isViewing!==this.props.isViewing||l.useHighlightTitle!==this.props.useHighlightTitle||m.participantImages!==this.state.participantImages)return true;return this.state.thread!=m.thread;};k.prototype.render=function(){if(this.state.thread.other_user_fbid===null)return c('React').createElement('div',null);var l=this.state.thread.unread_count&&this.state.thread.unread_count>0,m=this.state.thread.page_thread_info&&this.state.thread.page_thread_info.flagged,n=this.state.thread.page_thread_info&&this.state.thread.page_thread_info.customTagNames,o=[],p=c('PagesManagerCustomTagsStore').getCustomTags(this.props.pageID);(n||[]).map(function(t){if(p.has(t))o.push(p.get(t));});var q=this.props,r=q.onViewingListItem,s=babelHelpers.objectWithoutProperties(q,['onViewingListItem']);return c('React').createElement(c('PagesManagerMessagingListRow.react'),babelHelpers['extends']({customTagsData:o,isFlagged:m,isUnread:l,onViewingListItem:this.$PagesManagerMessagingListRowContainer_onViewingMessagingListItem,participantImages:this.state.participantImages,thread:this.state.thread},s,this.state));};k.prototype.updateThread=function(){var l=c('MercuryThreads').getForFBID(this.props.pageID).getThreadMetaNow(this.props.listItem);if(!l)return;this.setState({thread:l,inlineActionParam:c('PagesMessengerThreadUtils').getBatchActionMenuParam(l)});};k.defaultProps={useHighlightTitle:false};


f.exports=k;}),null);

/** www/__virtual__/x/XPageMessageSettingsPreviewController.js */



__d("XPageMessageSettingsPreviewController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/messaging\/settings\/preview_dialog\/",{page_id:{type:"FBID",required:true},tab:{type:"Enum",defaultValue:"messenger_code",enumType:1},__asyncDialog:{type:"Int"}});}),

null);

/** js/pages/pages_manager/messages/views/PagesManagerMessagingMessengerCodeLink.react.js */






__d('PagesManagerMessagingMessengerCodeLink.react',['ix','cx','fbt','AsyncRequest','Image.react','Link.react','MessageSettingsPreviewTab','React','TooltipData','XBasicFBNuxDismissController','XPageMessageSettingsPreviewController','XUIAmbientNUX.react','fbglyph','joinClasses'],(function a(b,c,d,e,f,g,h,i,j){var k,l,
















m=4156,
n=4198;k=babelHelpers.inherits













(o,c('React').Component);l=k&&k.prototype;



function o(p){'use strict';
l.constructor.call(this,p);

this.state=
{isMessengerCodeNuxShown:this.props.showMessengerCodeNux,
isResponseAssistantNuxShown:this.props.showResponseAssistantNux};}

o.prototype.

$PagesManagerMessagingMessengerCodeLink_getNuxCloseHandler=function(p){'use strict';
return function(){
var q=c('XBasicFBNuxDismissController').
getURIBuilder().
setInt('nux_id',p).
getURI();
new (c('AsyncRequest'))().
setURI(q).
send();
switch(p){
case m:
this.setState({isMessengerCodeNuxShown:false});
break;
case n:
this.setState({isResponseAssistantNuxShown:false});
break;}}.

bind(this);};
o.prototype.

$PagesManagerMessagingMessengerCodeLink_renderNux=function(p){'use strict';
var q=void 0,r=void 0;
switch(p){
case m:
q=this.state.isMessengerCodeNuxShown;
r=j._(["Download and share your Messenger Code","4da6efd856f60f9c6104cdb37b148065"]);





break;
case n:
q=this.state.isResponseAssistantNuxShown;
r=j._(["Get started with Response Assistant","ec1da3d3570d6c4383d1a627899e7671"]);





break;}


return (c('React').createElement(c('XUIAmbientNUX.react'),
{contextRef:function(){return this.refs.codeLink;}.bind(this),
hasActionableContext:true,
onCloseButtonClick:this.$PagesManagerMessagingMessengerCodeLink_getNuxCloseHandler(p),
position:'above',
shown:q,
width:'auto'},
r));};


o.prototype.

render=function(){'use strict';
var p=j._(["View Response Assistant and Messenger Code","7cb7ba28c2785d07cf85ea714af2edc2"]),





q=c('XPageMessageSettingsPreviewController').
getURIBuilder().
setFBID('page_id',this.props.pageID);



if(this.state.isResponseAssistantNuxShown)
q=q.
setEnum('tab',c('MessageSettingsPreviewTab').RESPONSE_ASSISTANT);


var r=c('joinClasses')
("_59k4",
this.props.className);



return (c('React').createElement('div',{className:r},
c('React').createElement(c('Link.react'),babelHelpers['extends']
({ajaxify:q.getURI(),
className:"_4d6o",
ref:'codeLink',
rel:'dialog'},
c('TooltipData').propsFor(p)),
c('React').createElement(c('Image.react'),
{src:h("126342")})),







this.state.isMessengerCodeNuxShown?
this.$PagesManagerMessagingMessengerCodeLink_renderNux(m):
null,


this.state.isResponseAssistantNuxShown?
this.$PagesManagerMessagingMessengerCodeLink_renderNux(n):
null));};






f.exports=o;}),null);

/** js/pages/pages_manager/messages/views/PagesManagerMessagingSearchInput.react.js */







__d('PagesManagerMessagingSearchInput.react',['cx','fbt','ContextualLayer.react','LayerHideOnEscape','PageCustomTagSearchableEntry','PageCustomTagTypeaheadPresenter.react','React','SearchableTextInput.react','SearchableEntry','TokenizerToken.react','XUICloseButton.react','isEmpty','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,













l=c('React').PropTypes;j=babelHelpers.inherits






(m,c('React').Component);k=j&&j.prototype;


function m(n,o){'use strict';
k.constructor.call(this,n,o);this.









$PagesManagerMessagingSearchInput_onBlur=function(){
this.setState({showLayer:false});}.
bind(this);this.



























































































$PagesManagerMessagingSearchInput_onSearchChange=function(p){
var q=p.target.value,
r=true;
if(q===''){
r=false;
this.props.onClear();}

this.setState({query:q,showLayer:r});}.
bind(this);this.

$PagesManagerMessagingSearchInput_onSearchClear=function(){
this.setState({query:''});
this.props.onClear();}.
bind(this);this.

$PagesManagerMessagingSearchInput_onSearchEntriesFound=function(p,q){
this.setState({matchedLabels:p});}.
bind(this);this.

$PagesManagerMessagingSearchInput_onSearchBarFocus=function(){
if(this.state.query!==''){
this.refs.input.getTextFieldDOM().select();
this.setState({showLayer:true});}}.

bind(this);this.

$PagesManagerMessagingSearchInput_onTypeaheadHightlight=function(p){
this.setState({highlightedEntry:p});}.
bind(this);this.

$PagesManagerMessagingSearchInput_onTypeaheadRemove=function(){
this.setState({highlightedEntry:{}});}.
bind(this);this.

$PagesManagerMessagingSearchInput_onTypeaheadSelect=function(p){
this.props.addCustomTag(p);
this.setState({query:''});}.
bind(this);this.state={query:'',showLayer:false,matchedLabels:[],highlightedEntry:{}};}m.prototype.$PagesManagerMessagingSearchInput_onClick=function(n,o,event){'use strict';this.setState({showLayer:false});switch(n){case 'message':this.props.searchMessage.call(this,o);break;case 'name':this.props.searchName.call(this,o);break;}};m.prototype.$PagesManagerMessagingSearchInput_getSearchDropDown=function(n){'use strict';return c('React').createElement('div',{className:"_4j2v"},c('React').createElement('li',{className:"_4j2w",onMouseDown:this.$PagesManagerMessagingSearchInput_onClick.bind(this,'message',this.state.query)},i._(["Messages that contain '{message search term}'","7fd2dd01d5b0dfcb802825eb3276321b"],[i.param('message search term',this.state.query)])),c('React').createElement('li',{className:"_4j2x",onMouseDown:this.$PagesManagerMessagingSearchInput_onClick.bind(this,'name',this.state.query)},i._(["Names that contain '{message search term}'","d0691db3e95aebe37e811be111339a95"],[i.param('message search term',this.state.query)])));};m.prototype.$PagesManagerMessagingSearchInput_getKeyworkdTypeahead=function(n){'use strict';var o=this.state.matchedLabels.filter(function(q){return !Object.prototype.hasOwnProperty.call(n,q.getUniqueID());});if(o.length==0){return c('React').createElement('div',null);}else{var p=c('PageCustomTagTypeaheadPresenter.react').ViewRenderer;return c('React').createElement('div',null,c('React').createElement('li',{className:"_5n87"},i._(["Labels","1b2ed6fe129b33ef8a73ca0de64ed9d3"])),c('React').createElement(p,{entries:o,highlightedEntry:this.state.highlightedEntry,onHighlight:this.$PagesManagerMessagingSearchInput_onTypeaheadHightlight,removeHighlight:this.$PagesManagerMessagingSearchInput_onTypeaheadRemove,onSelect:this.$PagesManagerMessagingSearchInput_onTypeaheadSelect,searchBar:true}));}};m.prototype.$PagesManagerMessagingSearchInput_renderToken=function(n,o){'use strict';var p=this.props.TokenRenderer||c('TokenizerToken.react'),q=c('joinClasses')("_2ei6",this.props.tokenClassName);return c('React').createElement(p,{className:q,key:n.getUniqueID(),label:n.getTitle(),entry:n,index:o,onRemove:this.props.onRemove});};m.prototype.

render=function(){'use strict';
var n=this.props.entries&&this.props.entries.length>0,
o=this.props.entries.map(this.$PagesManagerMessagingSearchInput_renderToken,this),
p={},
q;
if(n)
for(var r=0,s=this.props.entries.length;r<s;r++){
var t=this.props.entries[r];
q=t.getUniqueID();
p[q]=true;}

var u=




this.props,v=u.className,w=u.placeholder,x=babelHelpers.objectWithoutProperties(u,['className','placeholder']);


v=c('joinClasses')("_29s6"+


(n?' '+"_29s7":''),

v);

w=n?'':this.props.placeholder;

return (c('React').createElement('div',
{className:v},
c('React').createElement('div',{className:"_29s8"},
o),

c('React').createElement(c('SearchableTextInput.react'),babelHelpers['extends']
({onBlur:this.$PagesManagerMessagingSearchInput_onBlur,
onChange:this.$PagesManagerMessagingSearchInput_onSearchChange,
onFocus:this.$PagesManagerMessagingSearchInput_onSearchBarFocus,
onEntriesFound:this.$PagesManagerMessagingSearchInput_onSearchEntriesFound,
placeholder:w,
queryString:this.state.query,
ref:'input'},
x)),

c('React').createElement(c('XUICloseButton.react'),
{className:"_3i2o"+

(c('isEmpty')(this.state.query)?' '+"hidden_elem":''),

onClick:this.$PagesManagerMessagingSearchInput_onSearchClear,
size:'medium'}),

this.props.contextRef&&this.props.contextRef()?
c('React').createElement(c('ContextualLayer.react'),
{behaviors:{LayerHideOnEscape:c('LayerHideOnEscape')},
containerWidthMatchContext:true,
contextRef:this.props.contextRef,
shown:this.state.showLayer,
position:'below'},
this.$PagesManagerMessagingSearchInput_getSearchDropDown(p)):

null));};






m.propTypes=
{addCustomTag:l.func,
contextRef:l.func,
searchMessage:l.func,
searchName:l.func,
textInputClassName:l.string,
tokenClassName:l.string,
TokenRenderer:l.element,
entries:l.arrayOf(l.instanceOf(c('SearchableEntry')))};


f.exports=m;}),null);

/** js/pages/pages_manager/messages/views/PagesManagerMessagingSearchView.react.js */







__d('PagesManagerMessagingSearchView.react',['cx','fbt','ix','AbstractTextInput.react','AbstractTokenizer.react','PagesManagerMessagingFilterStore','Image.react','immutable','PageCustomTagSearchableEntry','PageCustomTagSearchSource','PageCustomTagTypeaheadPresenter.react','PagesAdminToolUIActionType','PagesContextCardCustomTag.react','PagesEnumTag.react','PagesManagerLogger','PagesManagerMessagingFilterActions','PagesManagerMessagingSearchInput.react','React','PagesMessagingSearchMode','PagesManagerMessagingThreadlistAction','PagesManagerMessagingNavigationUnitKey','XUICloseButton.react','emptyFunction'],(function a(b,c,d,e,f,g,h,i,j){
'use strict';var k,l;k=babelHelpers.inherits










































(m,c('React').Component);l=k&&k.prototype;











function m(n,o){
l.constructor.call(this,n,o);this.































































$PagesManagerMessagingSearchView_onSearchChange=function(p){
var q=p.target.value,
r=true;
if(q==='')
r=false;

this.setState({query:q,showLayer:r});}.
bind(this);this.

$PagesManagerMessagingSearchView_onRemoveCustomTag=function(p){
c('PagesManagerMessagingThreadlistAction').removeSearchCustomTag
(this.props.pageID,
p,
'search_block');}.

bind(this);this.

$PagesManagerMessagingSearchView_onRemoveEnumTag=function(){
c('PagesManagerMessagingFilterActions').changeFilter
(this.props.pageID,
c('PagesManagerMessagingFilterStore').getAvailableFilters().get(0));}.

bind(this);this.$PagesManagerMessagingSearchView_onSearchTermChanged=function(p){c('PagesManagerMessagingThreadlistAction').changeSearchTerm(this.props.pageID,p.target.value,c('PagesManagerMessagingFilterStore').getActiveFolderName(),c('PagesMessagingSearchMode').ALL);}.bind(this);this.$PagesManagerMessagingSearchView_onSearchCleared=function(){c('PagesManagerMessagingThreadlistAction').resetSearch(this.props.pageID);}.bind(this);this.$PagesManagerMessagingSearchView_onSearchKeyDown=function(p){if(p.key==='Escape')c('PagesManagerMessagingThreadlistAction').resetSearch(this.props.pageID);}.bind(this);this.$PagesManagerMessagingSearchView_searchName=function(p){c('PagesManagerLogger').logMessageInboxUIAction(c('PagesAdminToolUIActionType').MESSAGE_INBOX_CLICK_SEARCH_NAMES,this.props.pageID,{query:p});c('PagesManagerMessagingThreadlistAction').changeSearchTerm(this.props.pageID,p,c('PagesManagerMessagingFilterStore').getActiveFolderName(),c('PagesMessagingSearchMode').NAME_SEARCH);this.setState({showLayer:false});}.bind(this);this.$PagesManagerMessagingSearchView_searchMessage=function(p){c('PagesManagerLogger').logMessageInboxUIAction(c('PagesAdminToolUIActionType').MESSAGE_INBOX_CLICK_SEARCH_MESSAGES,this.props.pageID,{query:p});c('PagesManagerMessagingThreadlistAction').changeSearchTerm(this.props.pageID,p,c('PagesManagerMessagingFilterStore').getActiveFolderName(),c('PagesMessagingSearchMode').MESSAGE_SEARCH);this.setState({showLayer:false});}.bind(this);this.$PagesManagerMessagingSearchView_onSearchBarFocus=function(p){if(this.state.query!=='')this.setState({showLayer:true});}.bind(this);this.state={query:'',showLayer:false,highlightedEntry:{}};}m.prototype.

$PagesManagerMessagingSearchView_getCurrentSearchCustomTagData=function(){
var n=[];
this.props.currentSearchCustomTagNames.toArray().map
(function(o){
if(this.props.customTagSearchSource.has(o))
n.push(this.props.customTagSearchSource.get(o));}.

bind(this));

return n;};
m.prototype.

$PagesManagerMessagingSearchView_getSearchField=function(){
var n=i._(["Search people and messages","7af836ab270131e6b73c11fc24394360"]);






return (c('React').createElement(c('PagesManagerMessagingSearchInput.react'),
{addCustomTag:c('emptyFunction'),
className:"_5ptj",
contextRef:function(){return this.refs.input;}.bind(this),
onClick:this.$PagesManagerMessagingSearchView_onSearchBarFocus,
onClear:this.$PagesManagerMessagingSearchView_onSearchCleared,
onRemove:c('emptyFunction'),
placeholder:n,
searchMessage:this.$PagesManagerMessagingSearchView_searchMessage,
searchName:this.$PagesManagerMessagingSearchView_searchName,
entries:[],
excludedEntries:[],
TokenRendere:c('PageCustomTagTypeaheadPresenter.react').ViewRenderer,
searchSource:c('PageCustomTagSearchSource').getInstance
([],
false)}));};



m.prototype.

$PagesManagerMessagingSearchView_getSearchFooter=function(){

if(this.props.currentSearchCustomTagNames.toArray().length===0&&
this.props.activeFilter.getKey()!==c('PagesManagerMessagingNavigationUnitKey').FILTERS.FLAGGED)

return null;


return (c('React').createElement('div',{className:"_4w11"},
this.props.activeFilter.getKey()===c('PagesManagerMessagingNavigationUnitKey').FILTERS.FLAGGED?
c('React').createElement(c('PagesEnumTag.react'),
{canRemove:true,
onRemove:this.$PagesManagerMessagingSearchView_onRemoveEnumTag,
unit:this.props.activeFilter}):
null,

this.$PagesManagerMessagingSearchView_getCurrentSearchCustomTagData().map(function(n){
return (c('React').createElement(c('PagesContextCardCustomTag.react'),
{canRemove:true,
hideOnRemove:true,
key:n.id,
onRemove:this.$PagesManagerMessagingSearchView_onRemoveCustomTag,
tagData:n}));}.bind(this))));};




m.prototype.

render=function(){
var n=
{left:this.props.arrowTopX,
top:this.props.arrowTopY-8};


return (c('React').createElement('div',null,
c('React').createElement('div',
{ref:'arrow',
className:"_1u5x"+


(this.props.currentSearchCustomTagNames.toArray().length>0||
c('PagesManagerMessagingFilterStore').getActiveFilterName()===c('PagesManagerMessagingNavigationUnitKey').FILTERS.FLAGGED||
this.props.isSearchActive?' '+"hidden_elem":''),


style:n}),

c('React').createElement('div',
{className:"_3i2n"+(' '+"_4m_d")+



(this.props.currentSearchCustomTagNames.toArray().length>0||
c('PagesManagerMessagingFilterStore').getActiveFilterName()===c('PagesManagerMessagingNavigationUnitKey').FILTERS.FLAGGED?' '+"hidden_elem":''),

ref:'input'},
c('React').createElement(c('Image.react'),
{className:"_5pti",
src:j("27278")}),

this.$PagesManagerMessagingSearchView_getSearchField()),

this.$PagesManagerMessagingSearchView_getSearchFooter()));};





f.exports=m;}),null);

/** js/pages/pages_manager/messages/flux/actions/PagesManagerMessagingUIActionTypes.js */





__d('PagesManagerMessagingUIActionTypes',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){

'use strict';



var h=c('keyMirrorRecursive')
({SET_SEARCH_ARROW_TOP_X:'',
SET_SEARCH_ARROW_TOP_Y:'',
SET_SEARCH_BAR_SHADOW:''});


f.exports=h;}),null);

/** js/pages/pages_manager/messages/flux/store/PagesManagerMessagingUIStore.js */






__d('PagesManagerMessagingUIStore',['PagesManagerMessagingUIActionTypes','FluxStore','PagesManagerDispatcher'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits





(j,c('FluxStore'));i=h&&h.prototype;



function j(){'use strict';
i.constructor.call(this,c('PagesManagerDispatcher'));
this.$PagesManagerMessagingUIStore_searchBarArrowTopX=0;
this.$PagesManagerMessagingUIStore_searchBarArrowTopY=0;
this.$PagesManagerMessagingUIStore_searchBarShadow=false;}
j.prototype.

__onDispatch=function(k){'use strict';
switch(k.type){
case c('PagesManagerMessagingUIActionTypes').SET_SEARCH_ARROW_TOP_X:
this.$PagesManagerMessagingUIStore_searchBarArrowTopX=k.offset;
this.__emitChange();
break;
case c('PagesManagerMessagingUIActionTypes').SET_SEARCH_ARROW_TOP_Y:
this.$PagesManagerMessagingUIStore_searchBarArrowTopY=k.offset;
this.__emitChange();
break;
case c('PagesManagerMessagingUIActionTypes').SET_SEARCH_BAR_SHADOW:
this.$PagesManagerMessagingUIStore_searchBarShadow=k.status;
this.__emitChange();
break;}};

j.prototype.

getSearchBarArrowTopX=function(){'use strict';
return this.$PagesManagerMessagingUIStore_searchBarArrowTopX;};
j.prototype.

getSearchBarArrowTopY=function(){'use strict';
return this.$PagesManagerMessagingUIStore_searchBarArrowTopY;};
j.prototype.

getSearchBarShadow=function(){'use strict';
return this.$PagesManagerMessagingUIStore_searchBarShadow;};



f.exports=new j();}),null);

/** js/pages/pages_manager/messages/container/PagesManagerMessagingSearchContainer.react.js */






__d('PagesManagerMessagingSearchContainer.react',['PagesManagerMessagingFilterStore','FluxContainer','immutable','PagesManagerCustomTagsAction','PagesManagerCustomTagsStore','PagesManagerMessagingSearchStore','PagesManagerMessagingSearchView.react','PagesManagerMessagingUIStore','React'],(function a(b,c,d,e,f,g){
'use strict';var h,i;h=babelHelpers.inherits





























(j,c('React').Component);i=h&&h.prototype;



function j(k,l){
i.constructor.call(this,k,l);}
j.

getStores=function(){
return [c('PagesManagerMessagingFilterStore'),c('PagesManagerCustomTagsStore'),c('PagesManagerMessagingSearchStore'),c('PagesManagerMessagingUIStore')];};





j.prototype.

componentWillMount=function(){
if(!c('PagesManagerCustomTagsStore').hasCustomTags(this.props.pageID))
c('PagesManagerCustomTagsAction').fetch(this.props.pageID);};

j.

calculateState=function(k,l){

return {activeFilter:c('PagesManagerMessagingFilterStore').getActiveFilter(),
arrowTopX:c('PagesManagerMessagingUIStore').getSearchBarArrowTopX(),
arrowTopY:c('PagesManagerMessagingUIStore').getSearchBarArrowTopY(),
currentSearchCustomTagNames:
c('PagesManagerMessagingSearchStore').getCurrentSearchCustomTagNames(),
currentSearchTerm:
c('PagesManagerMessagingSearchStore').getCurrentSearchTerm(),
isSearchActive:c('PagesManagerMessagingSearchStore').getIsInSearchMode(),
customTagSearchSource:
c('PagesManagerCustomTagsStore').getCustomTags(l.pageID)};};

j.prototype.

render=function(){

return (c('React').createElement(c('PagesManagerMessagingSearchView.react'),babelHelpers['extends']({},
this.props,
{activeFilter:this.state.activeFilter,
arrowTopX:this.state.arrowTopX,
arrowTopY:this.state.arrowTopY,
initSearchTerm:this.state.currentSearchTerm,
isSearchActive:this.state.isSearchActive,
customTagSearchSource:this.state.customTagSearchSource,
currentSearchCustomTagNames:this.state.currentSearchCustomTagNames})));};





f.exports=c('FluxContainer').create
(j,
{withProps:true});}),null);

/** js/pages/pages_manager/messages/views/PagesManagerMessagingSimpleList.react.js */






__d('PagesManagerMessagingSimpleList.react',['cssVar','cx','fbt','invariant','CenteredContainer.react','PagesManagerListRowContainer.react','PagesManagerAction','PagesMessagingSearchMode','PagesSelectableSimpleList.react','React','XUISpinner.react'],(function a(b,c,d,e,f,g,h,i,j,k){

'use strict';var l,m;l=babelHelpers.inherits
















(n,c('React').PureComponent);m=l&&l.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=m.constructor).call.apply(o,[this].concat(r)),this.



































$PagesManagerMessagingSimpleList_searchRowRenderer=
function(t,
u,
v){

switch(this.props.searchMode){
case c('PagesMessagingSearchMode').MESSAGE_SEARCH:
var w=Object.keys(this.props.snippetSearchResult),
x=w[t];

return (c('React').createElement(c('PagesManagerListRowContainer.react'),babelHelpers['extends']
({ChildClass:this.props.listRowContainer,
highlightText:this.props.searchTerm,
listItem:x,
onViewingListItem:this.$PagesManagerMessagingSimpleList_onViewingListItem,
pageID:this.props.pageID,
snippetSearchResult:this.props.snippetSearchResult[x],
type:'li',
useHighlightTitle:false},
this.props.containerProps)));


case c('PagesMessagingSearchMode').NAME_SEARCH:
var y=this.props.searchResult[t];

return (c('React').createElement(c('PagesManagerListRowContainer.react'),babelHelpers['extends']
({ChildClass:this.props.listRowContainer,
disableCheckBox:true,
highlightText:this.props.searchTerm,
listItem:y,
onViewingListItem:this.$PagesManagerMessagingSimpleList_onViewingListItem,
pageID:this.props.pageID,
type:'li',
useHighlightTitle:true},
this.props.containerProps)));





default:k(0,
'Unexpected search mode %s',
this.props.searchMode);}}.


bind(this),this.

$PagesManagerMessagingSimpleList_rowRenderer=
function(t,
u,
v){

var w=this.props.list[t];

return (c('React').createElement(c('PagesManagerListRowContainer.react'),babelHelpers['extends']
({ChildClass:this.props.listRowContainer,
key:this.$PagesManagerMessagingSimpleList_getRowKey(t),
listItem:w,
onSelected:v,
onViewingListItem:this.$PagesManagerMessagingSimpleList_onViewingListItem,
pageID:this.props.pageID,
selected:u,
type:'li'},
this.props.containerProps)));}.


bind(this),this.

$PagesManagerMessagingSimpleList_getRowKey=function(t){
var u=this.props.list[t];
return this.props.getKey(u);}.
bind(this),this.

$PagesManagerMessagingSimpleList_getAllRowKeys=function(){
return this.props.list.map
(function(t){return this.props.getKey(t);}.bind(this));}.

bind(this),this.



































$PagesManagerMessagingSimpleList_onRequestMoreRows=function(){
if(this.props.isInSearchMode)
this.props.loadMore(this.props.searchMode,this.props.searchTerm);


return this.props.onScroll();}.
bind(this),p;}n.prototype.$PagesManagerMessagingSimpleList_onViewingListItem=function(o){c('PagesManagerAction').viewListItem(o);};n.prototype.render=function(){return c('React').createElement(c('PagesSelectableSimpleList.react'),{actionBarLeftComponent:this.props.isInSearchMode?undefined:this.props.folderDropDown,actionBarRightComponent:this.props.actionBarRightContainer,allRowKeysGetter:this.props.isInSearchMode?undefined:this.$PagesManagerMessagingSimpleList_getAllRowKeys,canLoadMoreRows:this.props.hasMoreResult,header:this.$PagesManagerMessagingSimpleList_renderHeader(),height:this.props.height,loadingIndicator:this.props.loadingMoreSpinner,onSelectionChange:this.props.onSelectionChange,onRequestMoreRows:this.$PagesManagerMessagingSimpleList_onRequestMoreRows,replaceContent:this.$PagesManagerMessagingSimpleList_renderReplaceContent(),rowCount:this.$PagesManagerMessagingSimpleList_getRowCount(),rowHeight:parseInt("72px",10),rowKeyGetter:this.$PagesManagerMessagingSimpleList_getRowKey,rowRenderer:this.props.isInSearchMode?this.$PagesManagerMessagingSimpleList_searchRowRenderer:this.$PagesManagerMessagingSimpleList_rowRenderer,showHeader:true});};n.prototype.

$PagesManagerMessagingSimpleList_getRowCount=function(){
if(this.props.isInSearchMode)
switch(this.props.searchMode){
case c('PagesMessagingSearchMode').MESSAGE_SEARCH:
return Object.keys(this.props.snippetSearchResult).length;
case c('PagesMessagingSearchMode').NAME_SEARCH:
return this.props.searchResult.length;}



return this.props.list.length;};
n.prototype.

$PagesManagerMessagingSimpleList_renderHeader=function(){
var o=void 0;
if(this.props.isInSearchMode)
switch(this.props.searchMode){
case c('PagesMessagingSearchMode').MESSAGE_SEARCH:
o=j._(["Messages that contain '{message search term}'","dbd2e22ec07e29536efccd9bd1754cc3"],[j.param


('message search term',
this.props.searchTerm)]);



break;
case c('PagesMessagingSearchMode').NAME_SEARCH:
o=j._(["Names that contain '{message search term}'","d0691db3e95aebe37e811be111339a95"],[j.param


('message search term',
this.props.searchTerm)]);



break;}



if(o)
o=
c('React').createElement('div',{className:"_16-z"},
o);




return (c('React').createElement('div',null,
this.props.header,
o));};


n.prototype.

$PagesManagerMessagingSimpleList_renderReplaceContent=function(){
if(this.props.list.length)
return null;


if(!this.props.initLoading)
return this.props.emptyView;



return (c('React').createElement(c('CenteredContainer.react'),
{fullHeight:true,
vertical:true},
c('React').createElement(c('XUISpinner.react'),{size:'large'})));};




f.exports=n;}),null);

/** js/pages/pages_manager/messages/flux/actions/PagesManagerMessagingUIActions.js */





__d('PagesManagerMessagingUIActions',['PagesManagerMessagingUIActionTypes','PagesManagerDispatcher'],(function a(b,c,d,e,f,g){




var h=
{setSearchBarArrowTopX:function i(j){
c('PagesManagerDispatcher').dispatch
({offset:j,
type:c('PagesManagerMessagingUIActionTypes').SET_SEARCH_ARROW_TOP_X});},



setSearchBarArrowTopY:function i(j){
c('PagesManagerDispatcher').dispatch
({offset:j,
type:c('PagesManagerMessagingUIActionTypes').SET_SEARCH_ARROW_TOP_Y});},



setSearchBarShaddow:function i(j){
c('PagesManagerDispatcher').dispatch
({status:j,
type:c('PagesManagerMessagingUIActionTypes').SET_SEARCH_BAR_SHADOW});}};




f.exports=h;}),null);

/** js/pages/pages_manager/messages/container/PagesManagerMessagingListContainer.react.js */







__d('PagesManagerMessagingListContainer.react',['cx','fbt','ix','PagesManagerMessagingBatchActionHeaderContainer.react','ContextualDialogArrow','ContextualLayerAutoFlip','FluxContainer','Image.react','immutable','LeftRight.react','PagesManagerListBatchActionContainer.react','Map','MercuryThreadlistConstants','MessageThreadViewSource','PagesAdminToolUIActionType','PagesEventObserver','PagesEventType','PagesManagerAction','PagesManagerAwayContainer.react','PagesManagerAwayToggle.react','PagesManagerInboxSwitcher.react','PagesManagerLogger','PagesManagerMessagingFilterActions','PagesManagerMessagingFilterPanelSwitch.react','PagesManagerMessagingFilterStore','PagesManagerMessagingList.react','PagesManagerMessagingListRowContainer.react','PagesManagerMessagingLogger','PagesManagerMessagingMessengerCodeLink.react','PagesManagerMessagingNUXActions','PagesManagerMessagingSearchContainer.react','PagesManagerMessagingSearchStore','PagesManagerMessagingSimpleList.react','PagesManagerMessagingTabPerfEvents','PagesManagerMessagingThreadInteractionHelper','PagesManagerMessagingThreadlistAction','PagesManagerMessagingThreadlistStore','PagesManagerMessagingUIActions','PagesManagerMessagingUIStore','PagesManagerPerfLogger','PagesManagerStore','PagesMessagingPerfLoggerEvent','PagesMessagingPerfTypedLogger','PagesMessagingSearchMode','PagesSelectableSimpleListAction','PopoverMenu.react','React','ReactDOM','SubscriptionsHandler','MercuryThreadInformer','TimeSliceInteraction','PagesManagerMessagingNavigationUnitKey','Vector','XUICard.react','ReactXUIMenu'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,



































































m=c('ReactXUIMenu').Item;k=babelHelpers.inherits



























(n,c('React').Component);l=k&&k.prototype;








function n(o){
l.constructor.call(this,o);this.















































































































































































































































































$PagesManagerMessagingListContainer_loadMore=function(p,q){
switch(p){
case c('PagesMessagingSearchMode').NAME_SEARCH:
c('PagesManagerMessagingThreadlistAction').loadMoreNameResult
(this.props.pageID,
q,
c('PagesManagerMessagingFilterStore').getActiveFolderName());

break;
case c('PagesMessagingSearchMode').MESSAGE_SEARCH:
c('PagesManagerMessagingThreadlistAction').loadMoreSnippetResult
(this.props.pageID,
q,
c('PagesManagerMessagingFilterStore').getActiveFolderName());

break;}}.

bind(this);this.






$PagesManagerMessagingListContainer_onScroll=function(){
if(this.props.config.isPerfShortlisted)
c('TimeSliceInteraction').createAutoclosed('page_messaging_shortlist');


var p=c('PagesManagerMessagingFilterStore').getNavigationKey(),
q=
c('PagesManagerMessagingThreadlistStore').hasMoreItem(p)&&
!c('PagesManagerMessagingThreadlistStore').isLoading();
if(q&&!this.state.isInSearchMode){
var r=this.$PagesManagerMessagingListContainer_getThreadIDListLength(this.state);
if(this.$PagesManagerMessagingListContainer_getIsInboxAllWithoutSearch()){
this.$PagesManagerMessagingListContainer_threadFetchStartTime.set(r,Date.now());
new (c('PagesMessagingPerfTypedLogger'))().
setPageID(this.props.pageID).
setEventName
(c('PagesMessagingPerfLoggerEvent').THREADLIST_LOAD_MORE_EVENT).

setThreadOffset(r).
log();}

c('PagesManagerMessagingThreadlistAction').fetchThreadlist
(this.props.pageID,
r,
c('MercuryThreadlistConstants').WEBMESSENGER_MORE_COUNT);}}.


bind(this);this.




















































$PagesManagerMessagingListContainer_handleScroll=function(){

if(this.refs.listView.refs.selectableList.refs.scrollableArea.getArea().
isScrolledToTop()){

c('PagesManagerMessagingUIActions').setSearchBarShaddow(false);}else 

if(!c('PagesManagerMessagingUIStore').getSearchBarShadow())
c('PagesManagerMessagingUIActions').setSearchBarShaddow(true);}.


bind(this);this.

























$PagesManagerMessagingListContainer_onDropdownItemClicked=function(p,q){
var r=this.state.folderDropdown.filter
(function(t){return t.getKey()===q.item.getValue();});

if(r.count()==0)
return;

var s=r.get(0);
c('PagesManagerLogger').logMessageInboxUIAction
(c('PagesAdminToolUIActionType').MESSAGE_INBOX_SWITCH_FOLDER,
this.props.pageID,

{folder:s.getKey(),
position:'dropdown'});


c('PagesManagerMessagingFilterActions').changeFilter
(this.props.pageID,
s);}.

bind(this);this.$PagesManagerMessagingListContainer_logLoadEndEvent=false;this.$PagesManagerMessagingListContainer_threadFetchStartTime=new (c('Map'))();this.$PagesManagerMessagingListContainer_onBulkActionSelectionClear=function(){if(this.refs.listView.clearSelection){this.refs.listView.clearSelection();}else c('PagesSelectableSimpleListAction').deselectAll();}.bind(this);}n.getStores=function(){return [c('PagesManagerMessagingThreadlistStore'),c('PagesManagerMessagingFilterStore'),c('PagesManagerMessagingSearchStore'),c('PagesManagerMessagingUIStore')];};n.calculateSearchState=function(o,p){var q=c('PagesManagerMessagingSearchStore').getThreadNameSearchResults(),r=c('PagesManagerMessagingSearchStore').getIsSearchingName(),s=c('PagesManagerMessagingSearchStore').hasMoreNameSearchResult(),t=c('PagesManagerMessagingSearchStore').hasMoreSnippetSearchResult(),u=c('PagesManagerMessagingSearchStore').getThreadSnippetSearchResults(),v=c('PagesManagerMessagingSearchStore').getIsSearchingSnippet(),w=[],x={},y=false,z=false;switch(c('PagesManagerMessagingSearchStore').getSearchMode()){case c('PagesMessagingSearchMode').MESSAGE_SEARCH:x=u;y=t;z=v;break;case c('PagesMessagingSearchMode').NAME_SEARCH:w=q;y=s;z=r;break;}return {hasMoreResult:y,isInSearchMode:true,isSearching:z,searchTerm:c('PagesManagerMessagingSearchStore').getCurrentSearchTerm(),searchMode:c('PagesManagerMessagingSearchStore').getSearchMode(),searchResult:w,snippetSearchResult:x};};n.calsulateListState=function(o,p){var q=c('PagesManagerMessagingThreadlistStore').getItemList(p.pageID),r=c('PagesManagerMessagingThreadlistStore').hasMoreItem(c('PagesManagerMessagingFilterStore').getNavigationKey()),s=q.findIndex(function(ba){return ba===c('PagesManagerStore').getViewingListItem();})>=0,t=c('PagesManagerStore').getInitialViewingItem(),u=c('PagesManagerStore').getViewingListItem(),v=q.length>0,w=t&&t===u,x=!w&&(!u&&v||u&&v&&!s);if(x){var y=q[0];c('PagesManagerAction').viewListItem(y);c('PagesManagerMessagingThreadInteractionHelper').handlePermalinkUpdate(y,p.pageID);}var z=c('PagesManagerMessagingThreadlistStore').isLoading(),aa=false;if(q.length===0)aa=z;return {hasMoreResult:r,initLoading:aa,isInSearchMode:false,threadIDList:q};};n.calculateState=function(o,p){var q=null;if(c('PagesManagerMessagingSearchStore').getIsInSearchMode()&&c('PagesManagerMessagingSearchStore').getCurrentSearchTerm().length>0){q=n.calculateSearchState(o,p);}else q=n.calsulateListState(o,p);if(o&&o.initLoading&&!q.initLoading)c('PagesManagerMessagingNUXActions').setThreadlistReady();q.isFiltering=c('PagesManagerMessagingFilterStore').getIsFiltering();q.folderDropdown=c('PagesManagerMessagingFilterStore').getFolderDropDown();q.unitNotificationCountMap=c('PagesManagerMessagingFilterStore').getUnitNotificationCountMap(p.pageID);q.showShadow=c('PagesManagerMessagingUIStore').getSearchBarShadow();q.currentSearchCustomTagNames=c('PagesManagerMessagingSearchStore').getCurrentSearchCustomTagNames();q.activeFilter=c('PagesManagerMessagingFilterStore').getActiveFilter();return q;};n.prototype.$PagesManagerMessagingListContainer_getIsFilteringByTag=function(){return this.state.currentSearchCustomTagNames.size!==0||this.state.activeFilter.getKey()===c('PagesManagerMessagingNavigationUnitKey').FILTERS.FLAGGED;};n.prototype.$PagesManagerMessagingListContainer_getThreadIDListLength=function(o){return o.threadIDList.length;};n.prototype.$PagesManagerMessagingListContainer_getIsInboxAllWithoutSearch=function(){return c('PagesManagerMessagingFilterStore').getIsInboxAll()&&!this.state.isInSearchMode;};n.prototype.componentDidUpdate=function(o,p){if(this.$PagesManagerMessagingListContainer_getIsInboxAllWithoutSearch()){var q=this.$PagesManagerMessagingListContainer_getThreadIDListLength(p);if(q!==this.$PagesManagerMessagingListContainer_getThreadIDListLength(this.state)){var r=this.$PagesManagerMessagingListContainer_threadFetchStartTime.get(q),s=r?Date.now()-r:0;new (c('PagesMessagingPerfTypedLogger'))().setPageID(this.props.pageID).setEventName(c('PagesMessagingPerfLoggerEvent').THREADLIST_RENDER_COMPLETE_EVENT).setPerfTime(s).setThreadOffset(q).log();}}if(this.$PagesManagerMessagingListContainer_logLoadEndEvent&&!this.state.initLoading){this.$PagesManagerMessagingListContainer_logLoadEndEvent=false;c('PagesEventObserver').notify(c('PagesEventType').MESSAGES_INBOX_LOAD_END,this.props.pageID,{flowID:this.props.flowID,page_id:this.props.pageID,loading_event_time:Date.now()});}if(this.state.isFiltering!==p.isFiltering||this.state.activeFilter!==p.activeFilter||this.state.currentSearchCustomTagNames.size===0&&p.currentSearchCustomTagNames.size!==0)this.$PagesManagerMessagingListContainer_updateArrowTopPosition();};n.prototype.componentDidMount=function(){c('PagesManagerPerfLogger').log(c('PagesManagerMessagingTabPerfEvents').MESSAGE_TAB_THREAD_LIST_DID_RENDER,this.props.perfParams);c('PagesManagerMessagingThreadlistAction').initThreadlist(this.props.pageID);c('PagesEventObserver').notify(c('PagesEventType').MESSAGES_THREADLIST_LOAD_START,this.props.pageID,{flowID:this.props.flowID,page_id:this.props.pageID,loading_event_time:Date.now()});c('PagesManagerMessagingLogger').logPageViewFolderEvent(this.props.pageID,c('PagesManagerMessagingFilterStore').getActiveFolder(),c('MessageThreadViewSource').NEW_MESSAGETAB);if(this.$PagesManagerMessagingListContainer_getIsInboxAllWithoutSearch()){this.$PagesManagerMessagingListContainer_threadFetchStartTime.set(0,Date.now());new (c('PagesMessagingPerfTypedLogger'))().setPageID(this.props.pageID).setEventName(c('PagesMessagingPerfLoggerEvent').THREADLIST_LOAD_MORE_EVENT).setThreadOffset(0).log();}this.$PagesManagerMessagingListContainer_logLoadEndEvent=true;this.$PagesManagerMessagingListContainer_threadInformer=c('MercuryThreadInformer').getForFBID(this.props.pageID);this.$PagesManagerMessagingListContainer_subscriptions=new (c('SubscriptionsHandler'))();this.$PagesManagerMessagingListContainer_subscriptions.addSubscriptions(this.$PagesManagerMessagingListContainer_threadInformer.subscribe('threadlist-updated',function(o,p){return this.$PagesManagerMessagingListContainer_updateThreadlist();}.bind(this)),this.$PagesManagerMessagingListContainer_threadInformer.subscribe('threads-updated',function(o,p){return this.$PagesManagerMessagingListContainer_updateThreads(Object.keys(p));}.bind(this)));this.$PagesManagerMessagingListContainer_updateArrowTopPosition();};n.prototype.componentWillUnmount=function(){this.$PagesManagerMessagingListContainer_subscriptions&&this.$PagesManagerMessagingListContainer_subscriptions.release();};n.prototype.$PagesManagerMessagingListContainer_getKey=function(o){return o;};n.prototype.$PagesManagerMessagingListContainer_loadMoreNameResult=function(){c('PagesManagerMessagingThreadlistAction').loadMoreNameResult(this.props.pageID,this.state.searchTerm,c('PagesManagerMessagingFilterStore').getActiveFolderName());};n.prototype.$PagesManagerMessagingListContainer_loadMoreSnippetResult=function(){c('PagesManagerMessagingThreadlistAction').loadMoreSnippetResult(this.props.pageID,this.state.searchTerm,c('PagesManagerMessagingFilterStore').getActiveFolderName());};n.prototype.$PagesManagerMessagingListContainer_updateThreadlist=function(){c('PagesManagerMessagingThreadlistAction').updateThreadlist(this.props.pageID);};n.prototype.$PagesManagerMessagingListContainer_updateThreads=function(o){o.forEach(function(p){if(this.refs.searchResult){var q=this.refs.searchResult.refs[p];if(q)q.refs.childClass.updateThread();}else if(this.refs.listView){var r=this.refs.listView.refs[p];if(r)r.refs.childClass.updateThread();}}.bind(this));};n.prototype.$PagesManagerMessagingListContainer_updateArrowTopPosition=function(){if(this.refs.fileMenu&&this.refs.unreadCount){var o=0;if(this.state.isFiltering){var p=c('Vector').getElementDimensions(c('ReactDOM').findDOMNode(this.refs.filterSwitch)).x,q=c('ReactDOM').findDOMNode(this.refs.filterSwitch).offsetLeft;o=q+p-4;}else{var r=c('Vector').getElementDimensions(c('ReactDOM').findDOMNode(this.refs.fileMenu)).x,s=c('Vector').getElementDimensions(c('ReactDOM').findDOMNode(this.refs.unreadCount)).x,t=c('ReactDOM').findDOMNode(this.refs.fileMenu).offsetLeft;o=t+(r-s)/2;}c('PagesManagerMessagingUIActions').setSearchBarArrowTopX(o);}};n.prototype.$PagesManagerMessagingListContainer_renderActionBarRightComponent=function(){var o=c('React').createElement(c('PagesManagerMessagingFilterPanelSwitch.react'),{pageID:this.props.pageID,ref:'filterSwitch',height:this.$PagesManagerMessagingListContainer_getListHeight(),isFiltering:c('PagesManagerMessagingFilterStore').getIsFiltering(),enableManageTags:this.props.config.enableManageTags,showNUX:this.props.config.showFilterNUX});return c('React').createElement('div',null,c('React').createElement(c('PagesManagerListBatchActionContainer.react'),{ChildClass:c('PagesManagerMessagingBatchActionHeaderContainer.react'),pageID:this.props.pageID,onSelectionClear:this.$PagesManagerMessagingListContainer_onBulkActionSelectionClear}),o);};n.prototype.

$PagesManagerMessagingListContainer_renderTabBarDropdownItem=function(o){

return (c('React').createElement(m,{key:o.getKey(),value:o.getKey()},
c('React').createElement('div',{className:"_-7b"},
o.getDisplayTitle())));};



n.prototype.

$PagesManagerMessagingListContainer_getFolderDropdown=function(){
var o=
c('React').createElement(c('ReactXUIMenu'),{onItemClick:this.$PagesManagerMessagingListContainer_onDropdownItemClicked},
this.state.folderDropdown.map(this.$PagesManagerMessagingListContainer_renderTabBarDropdownItem)),


p=
c('PagesManagerMessagingFilterStore').getActiveFolderDropDown(),
q=
this.state.unitNotificationCountMap.get(p);

return (c('React').createElement(c('PopoverMenu.react'),
{layerBehaviors:[c('ContextualDialogArrow'),c('ContextualLayerAutoFlip')],
menu:o},
c('React').createElement('div',
{className:"_-7c _46l"},


c('React').createElement('span',{ref:'fileMenu'},
p.getDisplayTitle()),

c('React').createElement('div',
{className:"_-7h"+(' '+"_-7e")+


(q===0?' '+"hidden_elem":''),

ref:'unreadCount'},

q))));};




n.prototype.

$PagesManagerMessagingListContainer_getSelectBoxLabel=function(){
return '';};
n.prototype.

$PagesManagerMessagingListContainer_getListHeight=function(){
var o=c('ReactDOM').findDOMNode(this.refs.threadListFooter),
p=0;
if(o!==null)

p=c('Vector').getElementDimensions(o).y;

return this.props.height-p;};
n.prototype.

$PagesManagerMessagingListContainer_renderFooter=function(){

return (c('React').createElement(c('XUICard.react'),
{className:"_alj",
ref:'threadListFooter'},
c('React').createElement(c('LeftRight.react'),null,
c('React').createElement(c('PagesManagerAwayContainer.react'),
{pageID:this.props.pageID,
RenderClass:c('PagesManagerAwayToggle.react')}),

c('React').createElement(c('PagesManagerMessagingMessengerCodeLink.react'),
{className:"_h38",
pageID:this.props.pageID,
showMessengerCodeNux:this.props.config.shouldShowMessengerCodeNUX,
showResponseAssistantNux:
this.props.config.shouldShowResponseAssistantNUX}))));};





n.prototype.

$PagesManagerMessagingListContainer_getListHeader=function(){

return (c('React').createElement('div',{ref:'threadListHeader'},
c('React').createElement('div',
{className:

(this.state.isFiltering?"_4f_9":'')+(' '+"_alk")+


(this.state.showShadow&&!this.props.config.showInboxSwitcher?' '+"_1axm":'')},

c('React').createElement(c('PagesManagerMessagingSearchContainer.react'),
{pageID:this.props.pageID})),



this.props.config.showInboxSwitcher?

c('React').createElement('div',{className:
this.state.showShadow?"_1axm":''},

c('React').createElement(c('PagesManagerInboxSwitcher.react'),
{pageID:this.props.pageID,
pageToken:this.props.config.uriToken})):


null));};



n.prototype.

$PagesManagerMessagingListContainer_renderEmptyView=function(){
if(this.$PagesManagerMessagingListContainer_getIsFilteringByTag())

return (c('React').createElement('div',{className:"_3-8-",key:'emptyView'},
c('React').createElement(c('Image.react'),
{className:"_5gxr",
src:j("94993")}),

c('React').createElement('div',
{className:"_5gxs"},i._(["No conversations match the labels you selected","bd36ddb0a4f0d3591da5ae5505930396"]))));








return c('React').createElement('div',{key:'emptyView'});};
n.prototype.

$PagesManagerMessagingListContainer_renderList=function(){
if(this.props.config.useSimpleList)

return (c('React').createElement(c('PagesManagerMessagingSimpleList.react'),babelHelpers['extends']({},
this.props,
{actionBarRightContainer:this.$PagesManagerMessagingListContainer_renderActionBarRightComponent(),
folderDropDown:this.$PagesManagerMessagingListContainer_getFolderDropdown(),
containerProps:{config:this.props.config},
emptyView:this.$PagesManagerMessagingListContainer_renderEmptyView(),
getKey:this.$PagesManagerMessagingListContainer_getKey,
handleScroll:this.$PagesManagerMessagingListContainer_handleScroll,
hasMoreResult:this.state.hasMoreResult,
header:this.$PagesManagerMessagingListContainer_getListHeader(),
height:this.$PagesManagerMessagingListContainer_getListHeight(),
initLoading:this.state.initLoading,
isFiltering:this.state.isFiltering,
isInSearchMode:this.state.isInSearchMode,
isSearching:this.state.isSearching,
isFilteringByTag:this.$PagesManagerMessagingListContainer_getIsFilteringByTag(),
list:this.state.threadIDList,
listRowContainer:c('PagesManagerMessagingListRowContainer.react'),
loadMore:this.$PagesManagerMessagingListContainer_loadMore,
navigationKey:c('PagesManagerMessagingFilterStore').getNavigationKey(),
onScroll:this.$PagesManagerMessagingListContainer_onScroll,
onSelectionChange:this.props.onSelectionChange,
ref:'listView',
scrollableWidth:320,
selectAllLabel:this.$PagesManagerMessagingListContainer_getSelectBoxLabel(),
searchTerm:this.state.searchTerm,
searchMode:this.state.searchMode,
searchResult:this.state.searchResult,
snippetSearchResult:this.state.snippetSearchResult})));





return (c('React').createElement(c('PagesManagerMessagingList.react'),babelHelpers['extends']({},
this.props,
{actionBarRightContainer:this.$PagesManagerMessagingListContainer_renderActionBarRightComponent(),
folderDropDown:this.$PagesManagerMessagingListContainer_getFolderDropdown(),
containerProps:{config:this.props.config},
emptyView:this.$PagesManagerMessagingListContainer_renderEmptyView(),
getKey:this.$PagesManagerMessagingListContainer_getKey,
handleScroll:this.$PagesManagerMessagingListContainer_handleScroll,
hasMoreResult:this.state.hasMoreResult,
header:this.$PagesManagerMessagingListContainer_getListHeader(),
height:this.$PagesManagerMessagingListContainer_getListHeight(),
initLoading:this.state.initLoading,
isFiltering:this.state.isFiltering,
isInSearchMode:this.state.isInSearchMode,
isSearching:this.state.isSearching,
isFilteringByTag:this.$PagesManagerMessagingListContainer_getIsFilteringByTag(),
list:this.state.threadIDList,
listRowContainer:c('PagesManagerMessagingListRowContainer.react'),
loadMore:this.$PagesManagerMessagingListContainer_loadMore,
navigationKey:c('PagesManagerMessagingFilterStore').getNavigationKey(),
onScroll:this.$PagesManagerMessagingListContainer_onScroll,
onSelectionChange:this.props.onSelectionChange,
ref:'listView',
scrollableWidth:320,
selectAllLabel:this.$PagesManagerMessagingListContainer_getSelectBoxLabel(),
searchTerm:this.state.searchTerm,
searchMode:this.state.searchMode,
searchResult:this.state.searchResult,
snippetSearchResult:this.state.snippetSearchResult})));};


n.prototype.

render=function(){

return (c('React').createElement('div',null,
this.$PagesManagerMessagingListContainer_renderList(),
this.$PagesManagerMessagingListContainer_renderFooter()));};





f.exports=c('FluxContainer').create
(n,
{withProps:true});}),null);

/** js/pages/pages_manager/messages/PagesManagerMessagingApp.react.js */






__d('PagesManagerMessagingApp.react',['cx','MercuryPagesChannelHandlerDEPRECATED','MercuryServerPayloadPreprocessor','MercurySyncPageEnvironment','PagesEventObserver','PagesEventType','PagesManagerAction','PagesManagerAwayBanner.react','PagesManagerAwayContainer.react','PagesManagerDetailContainer.react','PagesManagerListContainer.react','PagesManagerListDetailLayout.react','PagesManagerMessagingClassifierActions','PagesManagerMessagingDetailContainer.react','PagesManagerMessagingListContainer.react','PagesManagerMessagingLogger','PagesManagerMessagingTabPerfEvents','PagesManagerPerfLogger','PagesManagerStaticStore','PagesMessengerMessagePageButton.react','React','ReactDOM','PagesManagerStore'],(function a(b,c,d,e,f,g,h){var i,j;






























c('PagesManagerStore');i=babelHelpers.inherits














(k,c('React').Component);j=i&&i.prototype;




function k(l,m){'use strict';
j.constructor.call(this,l,m);
c('PagesManagerStaticStore').setPageID(this.props.pageID);
this.state=
{rootElement:null};

this.$PagesManagerMessagingApp_onHeaderResize=function(){
this.refs.body&&this.refs.body.recalculateHeight();}.
bind(this);}
k.prototype.

componentWillMount=function(){'use strict';
c('MercuryPagesChannelHandlerDEPRECATED').getForFBID(this.props.pageID).turnOn();
c('MercurySyncPageEnvironment').setUp
(this.props.pageID,
this.props.initSyncSequenceID);

c('PagesManagerMessagingLogger').logMessagesSectionViewEvent
(this.props.pageID);

c('PagesEventObserver').notify
(c('PagesEventType').MESSAGES_THREADLIST_LAYOUT_LOAD_START,
this.props.pageID,

{flowID:this.props.flowID,
page_id:this.props.pageID,
loading_event_time:Date.now()});


if(this.props.initialThreadID)
c('PagesManagerAction').setInitialViewItem(this.props.initialThreadID);};

k.prototype.

componentDidMount=function(){'use strict';
c('PagesManagerPerfLogger').log
(c('PagesManagerMessagingTabPerfEvents').MESSAGE_TAB_APP_DID_RENDER,
this.props.perfParams);

var l=
c('MercuryServerPayloadPreprocessor').getForFBID(this.props.pageID);
l.handleUpdate(this.props.config.jewelInitData);
this.setState

({rootElement:c('ReactDOM').findDOMNode(this)});

c('PagesManagerMessagingClassifierActions').initializeStore
(this.props.config,
this.props.pageID);};

k.prototype.

componentWillUnmount=function(){'use strict';
c('MercuryPagesChannelHandlerDEPRECATED').getForFBID(this.props.pageID).turnOff();
c('MercurySyncPageEnvironment').tearDown(this.props.pageID);};
k.prototype.

$PagesManagerMessagingApp_getThreadID=function(l){'use strict';
if(l)
return l;

return null;};
k.prototype.

$PagesManagerMessagingApp_renderMessagePageButton=function(){'use strict';
if(this.props.config.enabledPageToPageMessaging)

return (c('React').createElement(c('PagesMessengerMessagePageButton.react'),
{flowID:this.props.flowID,
pageID:this.props.pageID,
pagesCommNewMessagesTab:true,
size:'large'}));



return null;};
k.prototype.

$PagesManagerMessagingApp_renderNavigationView=function(){'use strict';
return c('React').createElement('div',{className:"_n4_"});};
k.prototype.

$PagesManagerMessagingApp_renderListView=function(){'use strict';

return (c('React').createElement('div',{className:"_14vf"},
c('React').createElement(c('PagesManagerListContainer.react'),
{config:this.props.config,
ChildContainerClass:c('PagesManagerMessagingListContainer.react'),
flowID:this.props.flowID,
pageID:this.props.pageID,
perfParams:this.props.perfParams,
useSimpleList:this.props.config.useSimpleList})));};



k.prototype.

$PagesManagerMessagingApp_renderDetailView=function(){'use strict';

return (c('React').createElement('div',null,
c('React').createElement(c('PagesManagerDetailContainer.react'),
{config:this.props.config,
pageID:this.props.pageID,
ChildContainerClass:c('PagesManagerMessagingDetailContainer.react'),
getListItemKey:this.$PagesManagerMessagingApp_getThreadID,
perfParams:this.props.perfParams})));};



k.prototype.

$PagesManagerMessagingApp_renderAwayBanner=function(){'use strict';
if(!this.props.config.enableAwayToggle)
return null;


return (c('React').createElement('div',null,
c('React').createElement(c('PagesManagerAwayContainer.react'),
{pageID:this.props.pageID,
RenderClass:c('PagesManagerAwayBanner.react')})));};



k.prototype.

render=function(){'use strict';

return (c('React').createElement('div',null,
c('React').createElement('div',{className:"_15i2"},
c('React').createElement(c('PagesManagerListDetailLayout.react'),
{ref:'body',
detailSection:this.$PagesManagerMessagingApp_renderDetailView(),
listClassName:"_1-9p",
listSection:this.$PagesManagerMessagingApp_renderListView(),
navigationSection:this.$PagesManagerMessagingApp_renderNavigationView()}))));};







f.exports=k;}),null);
