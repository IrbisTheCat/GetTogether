if (self.CavalryLogger) { CavalryLogger.start_js(["PwVMy"]); }

/** js/p2p/stores/P2PFriendsListStore.js */






__d('P2PFriendsListStore',['P2PActionConstants','EventEmitter','P2PAPI','P2PDispatcher'],(function a(b,c,d,e,f,g){

'use strict';var h,i,






j=[],
k='',

l=25;h=babelHelpers.inherits

(m,c('EventEmitter'));i=h&&h.prototype;
function m(){
i.constructor.call(this);
c('P2PDispatcher').register(this.onEventDispatched.bind(this));}
m.prototype.

onEventDispatched=function(n){
var o=n.data,
p=n.type;

switch(p){
case c('P2PActionConstants').FRIENDS_LIST_UPDATED:
this.handleFriendsListUpdated(o);
this.emit('change');
break;}};

m.prototype.

handleFriendsListUpdated=function(n){
if(!k||k===n.query)
j=n.friends;};

m.prototype.

searchFriends=function(n){
k=n;
this.fetchFriends(n);};
m.prototype.

fetchFriends=function(n){
c('P2PAPI').getFriendsList(l,n);};
m.prototype.

getFriends=function(){
return j;};



f.exports=new m();}),null);

/** js/p2p/components/send_money/P2PFriendPicker.react.js */







__d('P2PFriendPicker.react',['ix','cx','fbt','glyph','debounce','Image.react','Layout.react','MercuryIDs','P2PActions','P2PFriendsListStore','P2PLoadingMask.react','P2PLogger','P2PPaymentLoggerEvent','P2PText.react','React','ScrollableArea.react','XUIButton.react','XUITextInput.react'],(function a(b,c,d,e,f,g,h,i,j,k){

'use strict';var l,m,




n=c('Layout.react').FillColumn,
o=c('Layout.react').Column,
















p=c('React').PropTypes;l=babelHelpers.inherits

(q,c('React').Component);m=l&&l.prototype;function q(){var r,s;for(var t=arguments.length,u=Array(t),v=0;v<t;v++)u[v]=arguments[v];return s=(r=m.constructor).call.apply(r,[this].concat(u)),this.




































state=
{friends:c('P2PFriendsListStore').getFriends(),
showLoader:true},this.


log=function(w,x){
c('P2PLogger').log(w,babelHelpers['extends']
({www_event_flow:this.props.eventFlow},
x));}.

bind(this),this.

loggedSearch=null,this.
friendPickerStoreSub=null,this.















updateFriendsList=function(){
this.setState
({friends:c('P2PFriendsListStore').getFriends(),
showLoader:false});}.

bind(this),this.

onFriendSelect=function(w){
this.log(c('P2PPaymentLoggerEvent').UI_ACTN_FRIEND_PICKER_SELECT,
{object_id:w.id});


c('P2PActions').chatSendViewOpened
({amount:this.props.amount,
referrer:this.props.referrer,
sendMoneyNUXDismissed:this.props.sendMoneyNUXDismissed,
threadID:c('MercuryIDs').getThreadIDFromUserID(w.id)});

this.props.onFriendSelected&&this.props.onFriendSelected();}.
bind(this),this.

getQuery=function(){

return (this.refs.input_ref&&
this.refs.input_ref.refs.textInput.getValue());}.

bind(this),this.

onSearchInputChange=function(){
if(!this.loggedSearch){
this.log(c('P2PPaymentLoggerEvent').UI_ACTN_FRIEND_PICKER_SEARCH);
this.loggedSearch=true;}

var w=this.getQuery();


if(!w)
this.setState({showLoader:true});

c('P2PFriendsListStore').searchFriends(w);}.
bind(this),this.

renderTagLineRow=function(){
if(this.state.showLoader)
return null;



return (c('React').createElement('li',{className:"_1px5"},
c('React').createElement('div',{className:"_1px6"},
this.props.subTitle)));}.



bind(this),this.

renderfriendRow=function(w){
var x=void 0;

if(this.props.buttonLabel)
x=
c('React').createElement(c('XUIButton.react'),
{label:this.props.buttonLabel,
size:'large'});




return (c('React').createElement('li',
{className:"_1px7",
key:w.id,
onClick:this.onFriendSelect.bind(this,w)},
c('React').createElement(c('Layout.react'),null,
c('React').createElement(n,null,
c('React').createElement('div',{className:"_1px8"},
c('React').createElement(c('Image.react'),
{className:"_1px9",
height:50,
src:w.image_src,
width:50})),


c('React').createElement('div',{className:"_1pxa"},
c('React').createElement(c('P2PText.react'),
{className:"_1pxb",
type:'primary'},
w.full_name))),



c('React').createElement(o,{className:"_1pxc"},
x))));}.




bind(this),this.

renderFriendList=function(){
var w=this.getQuery();

if(!this.state.showLoader&&this.state.friends.length===0)
if(w&&w.length){

return (c('React').createElement('div',{className:"_1pxd"},j._(["No results.","6d67b328472aa32f391be6c2e00a09be"])));}else 







return (c('React').createElement('div',{className:"_1pxd"},j._(["You do not have any friends who are able to receive money.","970032d26596bdaccb0f00aa7e35c8d2"])));









return (c('React').createElement('div',{className:"_1pxe"},
c('React').createElement(c('P2PLoadingMask.react'),{visible:this.state.showLoader}),
c('React').createElement(c('ScrollableArea.react'),
{height:this.props.height},
c('React').createElement('ul',null,
this.state.friends.map(this.renderfriendRow),
this.renderTagLineRow()))));}.




bind(this),s;}q.prototype.componentDidMount=function(){this.friendPickerStoreSub=c('P2PFriendsListStore').addListener('change',this.updateFriendsList);c('P2PFriendsListStore').searchFriends();this.log(c('P2PPaymentLoggerEvent').UI_ACTN_FRIEND_PICKER_SHOWN);};q.prototype.componentWillUnmount=function(){if(this.friendPickerStoreSub){this.friendPickerStoreSub.remove();this.friendPickerStoreSub=null;}};q.prototype.

render=function(){

return (c('React').createElement('div',null,
c('React').createElement('div',{className:"_1pxf"},
c('React').createElement('div',{className:"_1pxg"},
c('React').createElement(c('XUITextInput.react'),
{className:"_1pxn",
height:'tall',
onChange:c('debounce')(this.onSearchInputChange,150),
placeholder:j._(["Search friends","4340775566bf36912d27d7fd28767bb0"]),




ref:'input_ref'}),

c('React').createElement(c('Image.react'),
{className:"_1pxo",
src:h("101450")}))),



this.renderFriendList()));};


q.propTypes={amount:p.string,buttonLabel:p.node,eventFlow:p.string.isRequired,height:p.number,onFriendSelected:p.func,referrer:p.string,sendMoneyNUXDismissed:p.bool,subTitle:p.node};q.defaultProps={amount:'',buttonLabel:j._(["Pay Friend","b2b2c4905505442f561364f07474c984"]),height:350,title:j._(["Select Friend","5621677d289133c61456fd5d0a0e5502"]),subTitle:j._(["These are your friends who are able to receive money.","791a145d59a901aa511d1e7f77e1cb5b"])};


f.exports=q;}),null);

/** js/p2p/components/send_money/nux/P2PSendMoneyNUXListItems.react.js */







__d('P2PSendMoneyNUXListItems.react',['fbt','ix','Image.react','P2PListRow.react','P2PText.react','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,









l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.










renderRow=function(s,t){


return (c('React').createElement(c('P2PListRow.react'),{offset:this.props.size},
c('React').createElement(c('Image.react'),s),
c('React').createElement(c('P2PText.react'),
{type:'primary'},
t)));}.



bind(this),o;}m.prototype.

render=function(){

var n=this.props.size;


return (c('React').createElement('div',null,

this.renderRow
(n==='small'?

{height:18,
src:i("94401"),
width:18}:


{height:36,
src:i("94400"),
width:36},h._(["It's FREE to send and receive money.","bd11b147cf424de5ddd686baf9b55930"])),







this.renderRow
(n==='small'?

{height:27,
src:i("94405"),
width:18}:


{height:54,
src:i("94404"),
width:36},h._(["Industry-leading security \u2014 password protection, anti-fraud team and more.","0e3407fc961d487b631f3631fd813f17"])),








this.renderRow
(n==='small'?

{height:13,
src:i("94403"),
width:18}:


{height:26,
src:i("94402"),
width:36},h._(["Send money from your debit card to theirs.","a4119a1f37dbc81058da551d77653d58"]))));};








m.propTypes={offset:l.oneOf(['small','medium'])};m.defaultProps={size:'small'};


f.exports=m;}),null);

/** js/p2p/components/send_money/nux/P2PSendMoneyNUXTitleText.react.js */







__d('P2PSendMoneyNUXTitleText.react',['fbt','React'],(function a(b,c,d,e,f,g,h){

'use strict';





function i(){

return (c('React').createElement('div',null,h._(["Send Money to Anyone","fc584a0185b7ac12391882ca80abcf41"])));}







f.exports=i;}),null);

/** js/p2p/components/send_money/nux/P2PSendMoneyNUXDialog.react.js */







__d('P2PSendMoneyNUXDialog.react',['cx','MessengerEnvironment','P2PDialog.react','P2PDialogBody.react','P2PDialogFooter.react','P2PDialogTitle.react','P2PEncryptedText.react','P2PLogger','P2PNUXNextButton.react','P2PPaymentLoggerEvent','P2PSendMoneyNUXListItems.react','P2PSendMoneyNUXTitleText.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,
















k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.

















































$P2PSendMoneyNUXDialog_handleNextClick=function(){
this.$P2PSendMoneyNUXDialog_log(c('P2PPaymentLoggerEvent').UI_ACTN_SEND_MONEY_NUX_NEXT_CLICK);
this.props.onNextClick();}.
bind(this),this.

$P2PSendMoneyNUXDialog_log=function(r,s){
c('P2PLogger').log(r,babelHelpers['extends']
({www_event_flow:this.props.eventFlow},

this.props.loggingData,
s));}.

bind(this),n;}l.prototype.componentDidMount=function(){this.$P2PSendMoneyNUXDialog_log(c('P2PPaymentLoggerEvent').UI_ACTN_SEND_MONEY_NUX_SHOWN);};l.prototype.render=function(){return c('React').createElement(c('P2PDialog.react'),{onToggle:this.props.onToggle,width:this.props.width},c('React').createElement(c('P2PDialogTitle.react'),null,c('React').createElement(c('P2PSendMoneyNUXTitleText.react'),null)),c('React').createElement(c('P2PDialogBody.react'),{className:"_1ou5"},c('React').createElement(c('P2PSendMoneyNUXListItems.react'),{size:'large'})),c('React').createElement(c('P2PDialogFooter.react'),{leftContent:c('React').createElement('div',{className:"_1ou6"},c('React').createElement(c('P2PEncryptedText.react'),null))},c('React').createElement(c('P2PNUXNextButton.react'),{onNextClick:this.$P2PSendMoneyNUXDialog_handleNextClick})));};l.propTypes={eventFlow:k.string,onToggle:k.func.isRequired,onNextClick:k.func.isRequired,width:k.number};l.defaultProps={width:c('MessengerEnvironment').messengerui?400:350};


f.exports=l;}),null);

/** js/p2p/components/send_money/P2PFriendPickerDialog.react.js */







__d('P2PFriendPickerDialog.react',['cx','fbt','P2PActions','P2PDialog.react','P2PDialogBody.react','P2PDialogTitle.react','P2PFriendPicker.react','P2PSendMoneyNUXDialog.react','P2PTransferStore','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,














l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.
































state=
{sendMoneyNUXDismissed:false},this.


handleToggle=function(s){
if(!s)
this.props.onClose();}.

bind(this),this.

handleNUXNextClick=function(){
this.setState
({sendMoneyNUXDismissed:true});}.

bind(this),o;}m.prototype.

render=function(){
var n=445;


if(!this.state.sendMoneyNUXDismissed&&
c('P2PTransferStore').shouldShowSenderNUX())


return (c('React').createElement(c('P2PSendMoneyNUXDialog.react'),
{eventFlow:this.props.eventFlow,
onToggle:this.handleToggle,
onNextClick:this.handleNUXNextClick,
width:n}));





return (c('React').createElement(c('P2PDialog.react'),
{onToggle:this.handleToggle,
width:n},
c('React').createElement(c('P2PDialogTitle.react'),null,
c('React').createElement('div',{className:"_4ia-"},
this.props.title)),


c('React').createElement(c('P2PDialogBody.react'),{className:"_4ib0"},
c('React').createElement(c('P2PFriendPicker.react'),
{amount:this.props.amount,
buttonLabel:this.props.buttonLabel,
eventFlow:this.props.eventFlow,
onFriendSelected:this.props.onClose,
referrer:this.props.referrer,
sendMoneyNUXDismissed:this.state.sendMoneyNUXDismissed,
subTitle:this.props.subTitle}))));};




m.propTypes={amount:l.string,buttonLabel:l.node,eventFlow:l.string.isRequired,onClose:l.func.isRequired,referrer:l.string,subTitle:l.node,title:l.node};m.defaultProps={amount:'',title:i._(["Select Friend","5621677d289133c61456fd5d0a0e5502"]),subTitle:i._(["These are your friends who are able to receive money.","791a145d59a901aa511d1e7f77e1cb5b"])};



f.exports=

{module:m,


render:function n(o){
c('P2PActions').showDialog
(m,babelHelpers['extends']
({title:i._(["Send Money to Friends","4a3bf31c7b797e9a946937d0cc05f5be"])},



o,
{onClose:c('P2PActions').hideDialog}));}};}),


null);

/** js/p2p/components/send_money/P2PSendMoneyHelper.js */







__d('P2PSendMoneyHelper',['fbt','MercuryIDs','P2PActions','P2PLogger','P2PFriendPickerDialog.react','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow'],(function a(b,c,d,e,f,g,h){

'use strict';




var i=c('P2PFriendPickerDialog.react').module,





j=

{bindProfileSendMoneyAction:function k
(l,
m){

l.subscribe('itemclick',function(n,o){
if(o.item.getValue()==='send_money')
c('P2PActions').chatSendViewOpened
({referrer:'profile_action',
threadID:c('MercuryIDs').getThreadIDFromUserID(m)});});},






initPaymentsBluebarMenuItems:function k
(l){

l.subscribe('itemclick',function(m,n){
var o=n.item.getValue();

if(o==='send_money'){
c('P2PActions').showDialog
(i,
{eventFlow:c('P2PPaymentLoggerEventFlow').UI_FLOW_SEND_MONEY_BLUEBAR,
onClose:c('P2PActions').hideDialog,
referrer:'bluebar',
title:h._(["Send Money to Friends","4a3bf31c7b797e9a946937d0cc05f5be"])});}else





if(o==='payments_history')
c('P2PLogger').log
(c('P2PPaymentLoggerEvent').UI_ACTN_PAYMENTS_HISTORY_BLUEBAR_CLICK,

{www_event_flow:
c('P2PPaymentLoggerEventFlow').UI_FLOW_PAYMENTS_MENU_BLUEBAR});});}};







f.exports=j;}),null);
