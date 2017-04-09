if (self.CavalryLogger) { CavalryLogger.start_js(["po4+7"]); }

/** __static_js_modules__/adpagemessagetypeenum.js */




__d("AdPageMessageTypeEnum",[],(function a(b,c,d,e,f,g){

f.exports={AD_ADMIN_TEXT:"ad_admin_text",AD_TEXT:"ad_text",AD_BUBBLE:"ad_bubble"};}),

null);

/** __static_js_modules__/mncommerceblocktypejsinstance.js */




__d("MNCommerceBlockTypeJSInstance",[],(function a(b,c,d,e,f,g){

f.exports={ALL:"all",PROMOTION:"promotion",NONE:"none"};}),

null);

/** __static_js_modules__/mncommerceerrors.js */




__d("MNCommerceErrors",[],(function a(b,c,d,e,f,g){

f.exports={ALREADY_UNLINKED:1893001};}),

null);

/** __static_js_modules__/mncommercereplytypes.js */




__d("MNCommerceReplyTypes",[],(function a(b,c,d,e,f,g){

f.exports={COMMERCE_LINK:2,COMMERCE_UNLINK:3};}),

null);

/** __static_js_modules__/p2ppaymentlogmessagesubtype.js */




__d("P2PPaymentLogMessageSubtype",[],(function a(b,c,d,e,f,g){

f.exports={SENT_IN_GROUP:"sent_in_group",CANCELED_SENDER_RISK:"canceled_sender_risk",CANCELED_DECLINED:"canceled_declined",CANCELED_RECIPIENT_RISK:"canceled_recipient_risk",CANCELED_EXPIRED:"canceled_expired",CANCELED_SAME_CARD:"canceled_same_card",CANCELED_CUSTOMER_SERVICE:"canceled_customer_service",CANCELED_CHARGEBACK:"canceled_chargeback",CANCELED_SYSTEM_FAIL:"canceled_system_fail",REQUEST_CANCELED_BY_REQUESTER:"request_canceled_by_requester",REQUEST_DECLINED_BY_REQUESTEE:"request_declined_by_requestee",REQUEST_EXPIRED:"request_expired"};}),

null);

/** js/mercury/attachments/MercuryAudioPlayer.js */




__d('MercuryAudioPlayer',['Arbiter','DOM','Event','Flash'],(function a(b,c,d,e,f,g){








var h=200;


function i(){
var r=c('DOM').create('audio'),
s=false;

try{if(!!r.canPlayType)
if(r.canPlayType('video/mp4;').replace(/^no$/,''))
s=true;}finally{



return s;}}




function j(){
return c('Flash').isAvailable();}


var k=function r(){
this.interval=null;
this.arbiterInstance=null;

this.audio=c('DOM').create('audio');

c('Event').listen(this.audio,'playing',function(){
this.informAttachment('playing',this.audio.currentTime);
this.interval=setInterval(function(){
this.informAttachment('playing',this.audio.currentTime);}.
bind(this),h);}.
bind(this));

c('Event').listen(this.audio,'ended',function(){
clearInterval(this.interval);
this.informAttachment('finished');}.
bind(this));};



Object.assign(k.prototype,
{setAudio:function r(s,t){
this.audio.setAttribute('src',s);
this.arbiterInstance=t;},


informAttachment:function r(s,t){
if(this.arbiterInstance)
this.arbiterInstance.inform(s,t);},



play:function r(){
this.audio.play();
this.informAttachment('played');},


resume:function r(){
this.audio.play();
this.informAttachment('played');},


pause:function r(){
this.audio.pause();
clearInterval(this.interval);
this.informAttachment('paused');},


getType:function r(){
return 'html5';}});



var l=function r(){
this.src=null;
this.arbiterInstance=null;

var s=c('DOM').create('div');
document.body.appendChild(s);
this.swf=c('Flash').embed('/swf/cigars/SoundStreamPlayer.swf',s,null,{});

this.interval=null;

c('Arbiter').subscribe('soundstream/finished',function(){
clearInterval(this.interval);
this.informAttachment('finished');}.
bind(this));};


Object.assign(l.prototype,
{setAudio:function r(s,t){
this.src=s;
this.arbiterInstance=t;},


informAttachment:function r(s,t){
if(this.arbiterInstance)
this.arbiterInstance.inform(s,t);},



play:function r(){
this.swf.playSound(this.src);

this.interval=setInterval(function(){
var s=this.swf.getCurrentTime();
this.informAttachment('playing',s);}.
bind(this),h);
this.informAttachment('played');},


resume:function r(){
this.swf.resume();
this.informAttachment('played');},


pause:function r(){
clearInterval(this.interval);
this.swf.pause();
this.informAttachment('paused');},


getType:function r(){
return 'flash';}});




function m(){
if(i()){
return new k();}else
if(j())
return new l();

return false;}



var n=null,
o=null,


p=0;

function q(r,s){
this.src=r;
this.arbiterInstance=s;
this.audio_id=++p;

n!==null||(n=m());
if(!n)

return false;}



Object.assign(q.prototype,




{getType:function r(){
if(!n){
return false;}else 

return n.getType();},



play:function r(s){
if(s&&o==this.audio_id){

n.resume();}else{


this.pause();

o=this.audio_id;
n.setAudio(this.src,this.arbiterInstance);

n.play();}},



pause:function r(){
n.pause();}});



f.exports=q;}),null);

/** js/components/Mercury/attachment/MercuryAttachmentAudioClip.react.js */





__d('MercuryAttachmentAudioClip.react',['cssVar','cx','fbt','Arbiter','ArbiterMixin','MercuryAudioPlayer','CurrentUser','JSLogger','LeftRight.react','Link.react','MercuryShareAttachmentRenderLocations','React','SubscriptionsHandler','WorkModeConfig','joinClasses','messengerCustomColorUtils','shield'],(function a(b,c,d,e,f,g,h,i,j){




















var k=c('React').PropTypes,

l='MercuryAttachmentAudioClip/play',
m='progress-bar',

n=c('JSLogger').create('mercury_audio_clip'),






o=c('React').createClass({displayName:'AudioClip',
mixins:[c('ArbiterMixin')],

propTypes:
{customColor:k.string,
duration:k.number,
isChat:k.bool,
isFromViewer:k.bool,
location:k.oneOf
(c('MercuryShareAttachmentRenderLocations').getValues()),

onAttachmentLoad:k.func,
rootClassName:k.string,
showHelp:k.bool,
src:k.string.isRequired,
width:k.number},


getInitialState:function p(){
this.logged=false;


return {time:0,
playing:false,
started:false,
duration:this.props.duration,
audioPlayer:new (c('MercuryAudioPlayer'))(this.props.src,this)};},



componentDidMount:function p(){
this.props.onAttachmentLoad&&this.props.onAttachmentLoad();

this._subscriptionsHandler=new (c('SubscriptionsHandler'))();
this._subscriptionsHandler.addSubscriptions
(this.subscribe('playing',this.updateTime),
this.subscribe('played',c('shield')(this.setState,this,
{playing:true,started:true})),
this.subscribe('paused',c('shield')(this.setState,this,{playing:false})),
this.subscribe('finished',c('shield')(this.setState,this,
{playing:false,started:false,time:this.props.duration})),

c('Arbiter').subscribe(l,function(q,r){
if(this.props.src!=r)
this.setState({time:0});}.

bind(this)));},



componentWillUnmount:function p(){
this._subscriptionsHandler&&this._subscriptionsHandler.release();},


updateTime:function p(q,r){
this.setState({time:r});},


play:function p(){
if(this.state.playing){
this.state.audioPlayer.pause();}else{

this.state.audioPlayer.play(this.state.started);
c('Arbiter').inform(l,this.props.src);
if(!this.logged){

this.logged=true;
n.log('play',{uid:c('CurrentUser').getID(),duration:this.props.duration});}}},





_formatSeconds:function p(q){
if(q){
q=Math.round(q);
var r=q%60;
if(r<10)r='0'+r;
var s=Math.floor(q/60);
return s+':'+r;}else 

return null;},



_renderPlayer:function p(q,r,s){
var t=this.props.isFromViewer,
u=this.props.isChat,
v=c('WorkModeConfig').is_work_user,
w=s===m,
x=u&&t&&!w,
y=
this.props.location===c('MercuryShareAttachmentRenderLocations').MESSENGER,


z=
v?"#373e4c":"#4080ff",
aa=s||z,
ba={width:q};
if(x)
c('messengerCustomColorUtils').customBubbleStyle
(aa,
ba);


var ca=
s&&s!==m&&!u?
{color:s}:
{},

da={};

if(w)
da['aria-disabled']=true;



return (c('React').createElement(c('Link.react'),babelHelpers['extends']
({'aria-label':j._(["Voice Message","5905ecb498310b1099ee405aee194094"]),




className:"_1miz"+(' '+"_2e-1")+


(!y?' '+"_3_om":'')+
(t&&u?' '+"_3e5f":''),

role:'button',
style:ba,
onClick:this.play},
da),
c('React').createElement('span',{className:"_1mi- _2e-2"},

c('React').createElement('i',{className:"_1mi_ _2e-3"})),


c('React').createElement('span',
{style:ca,
className:"_1mj0 _2e-4 _3oh-"},

r),

c('React').createElement('div',{className:"_1mj1 _2e-5"})));},





render:function p(){
var q=this.state.time,
r=this.state.playing,
s=this._formatSeconds(this.state.duration),
t=
this.props.location===c('MercuryShareAttachmentRenderLocations').MESSENGER,

u=this.props.width||170;
if(t){
var v=this.props.duration;
if(v>10){
u=240;}else
if(v>5){
u=200;}else
if(v>2){
u=160;}else 

u=120;}



var w=null,
x=Math.ceil
(q*(u+2)/this.state.duration);

if(t)
x=Math.ceil
(q*(u+24)/this.state.duration);



if(this.state.audioPlayer&&this.state.audioPlayer.getType()){



var y=this._renderPlayer
(u,
s,
this.props.customColor),

z=this._renderPlayer
(u,
s,
m),


aa="_1mj2"+(' '+"_2e-6")+


(r&&q!==0?' '+"_1mj3":'')+
(r&&q===0?' '+"_4g4x":'');


w=
c('React').createElement('div',{className:aa},
y,
c('React').createElement('div',
{className:"_1mj4 _2e-7",

style:{width:x}},
z));}else 




w=
c('React').createElement('div',{className:"_1mj2"},
c('React').createElement('div',
{className:"_1miz"},
c('React').createElement(c('LeftRight.react'),null,
c('React').createElement('a',
{className:"_1mj5",
href:this.props.src},
c('React').createElement('span',{className:"_3qi6"},
c('React').createElement('i',{className:"_1mj6"})),

c('React').createElement('span',{className:"_1mj7"},j._(["Voice Message","5905ecb498310b1099ee405aee194094"])),


c('React').createElement('span',
{className:"_1mj8"},
s)),


c('React').createElement('a',
{href:this.props.src,
className:"_1mj9"},
c('React').createElement('i',{className:"_1mja"})))));








return (c('React').createElement('div',{className:c('joinClasses')("_1mjb"+


(t?' '+"_454y":''),

this.props.rootClassName)},

w));}});





f.exports=o;}),null);

/** js/components/UFI/UFICreatorInfo.react.js */




__d('UFICreatorInfo.react',['cx','fbt','HelpLink.react','Image.react','React','URI'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,









l=c('React').PropTypes;j=babelHelpers.inherits





(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.










































































getCreatorLink=function(){
switch(this.props.creatorType){
case 'application':
case 'gray_account':
case 'indirect_admin':

return (c('React').createElement('a',
{className:'uiLinkSubtle',
'data-hover':'tooltip',
'data-tooltip-content':this.getTooltipText()},
this.props.creatorName));


case 'business_admin':

return (c('React').createElement('a',{className:'uiLinkSubtle',href:this.props.profileURI},
this.props.creatorName));


case 'direct_admin':
return this.getProfileLinkWithHovercard();
case 'former_admin':

return (c('React').createElement('span',{className:'uiLinkSubtle'},
c('React').createElement(c('Image.react'),
{src:'/images/privacy/cant-see.png',
width:9,
height:9,
className:"_3-8_"}),

this.getProfileLinkWithHovercard()));




default:return (c('React').createElement('span',{className:'uiLinkSubtle'},this.props.creatorName));}}.


bind(this),this.

getTooltipText=function(){
switch(this.props.creatorType){
case 'application':
return this.getApplicationText();
case 'gray_account':
return this.getGrayAccountText();
case 'indirect_admin':
return this.getIndirectAdminText();}}.

bind(this),this.

getProfileLinkWithHovercard=function(){
if(!this.props.profileURI)
return c('React').createElement('span',null,this.props.creatorName);


var s=new (c('URI'))('/ajax/hovercard/user.php').
setQueryData({id:this.props.creatorID}).
addQueryData
({type:'page_admin',
extragetparams:JSON.stringify
({directed_target_id:this.props.pageID})});




return (c('React').createElement('a',
{className:'uiLinkSubtle',
'data-hovercard':s,
href:this.props.profileURI},
this.props.creatorName));}.


bind(this),this.

getApplicationText=function(){
switch(this.props.labelType){
case 'commented':
return i._(["This was commented on by someone using {application}.","c609ceecadc656779d3aed2985ae6c41"],[i.param




('application',this.props.creatorName)]);



case 'edited_comment':
return i._(["This was edited by someone using {application}.","cc04887b406e61ed8d35c29496994fa9"],[i.param




('application',this.props.creatorName)]);



case 'sent_message':
return i._(["This was sent by someone using {application}.","26333986d2ba78cad8632267c28c3b1a"],[i.param




('application',this.props.creatorName)]);



case 'page_admin_note':
return i._(["This was noted by someone using {application}.","b7c28c0601672a1ea161725301e1f560"],[i.param




('application',this.props.creatorName)]);}}.



bind(this),this.

getIndirectAdminText=function(){
switch(this.props.labelType){
case 'commented':
return i._(["This was commented on by someone from {page}.","94ced2a1654bb5534659e6528e4ee750"],[i.param




('page',this.props.creatorName)]);



case 'edited_comment':
return i._(["This was edited by someone from {page}.","e32afda812cce6ffcceeb0d1dd0f959f"],[i.param




('page',this.props.creatorName)]);



case 'sent_message':
return i._(["This was sent by someone from {page}.","1c463c0c941a3a6f4ae0b1fe439cb04b"],[i.param




('page',this.props.creatorName)]);



case 'page_admin_note':
return i._(["This was noted by someone from {page}.","8a65d5c34f427b90942e1f91a1d9a54c"],[i.param




('page',this.props.creatorName)]);}}.



bind(this),this.

getGrayAccountText=function(){
switch(this.props.labelType){
case 'commented':
return i._(["This was commented on by someone who doesn't have a personal Facebook account.","df53670fa9542a6f065aad74c8a33f09"]);








case 'edited_comment':
return i._(["This was edited by someone who doesn't have a personal Facebook account.","aae60b76bd84ecde05707c5d482af259"]);








case 'sent_message':
return i._(["This was sent by someone who doesn't have a personal Facebook account.","050f9e48c27e17210df63415fcd12eec"]);








case 'page_admin_note':
return i._(["This was noted by someone who doesn't have a personal Facebook account.","a9736079fc29034005a3e3ccc8f4bfa0"]);}}.








bind(this),this.

getHelpText=function(){
switch(this.props.labelType){
case 'commented':
return i._(["Only people who manage this Page can see who posted a comment","98afd8102a8002284a06eaf2672107c6"]);






case 'edited_comment':
return i._(["Only people who manage this Page can see who edited a comment","8795558c6ac6b40057fc14b9e568ab7f"]);






case 'sent_message':
return i._(["Only people who manage this Page can see who sent a message","8f44c41be1bd1b6b38f196377cefd859"]);





case 'page_admin_note':
return i._(["Only people who manage this Page can see who created a note","7e4fb1d221df6a14e39febb2b7ab5e2c"]);}}.






bind(this),o;}m.prototype.render=function(){var n=void 0,o=this.getCreatorLink();switch(this.props.labelType){case 'commented':n=i._(["Commented on by {creator}","2f15db11cf6305d0655683be8363122a"],[i.param('creator',o)]);break;case 'edited_comment':n=i._(["Edited by {creator}","ede33085ebc4e548e6e89d20938a6e3b"],[i.param('creator',o)]);break;case 'sent_message':n=i._(["Sent by {creator}","85892f1c50c2e875ed4b59acbbc04499"],[i.param('creator',o)]);break;case 'page_admin_note':n=i._(["Noted by {creator}","b36e6ec01a6d47e6b6bb1f9a56cde719"],[i.param('creator',o)]);break;default:return;}return c('React').createElement('span',null,n,c('React').createElement(c('HelpLink.react'),{tooltip:this.getHelpText()}));};m.propTypes={creatorID:l.string.isRequired,creatorType:l.string.isRequired,creatorName:l.string.isRequired,labelType:l.string.isRequired,pageID:l.string.isRequired,profileURI:l.string};


f.exports=m;}),null);

/** js/components/Mercury/clients/pages_messenger/PagesMessengerCreatorInfo.react.js */






__d('PagesMessengerCreatorInfo.react',['cx','React','UFICreatorInfo.react','XUIGrayText.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits















(l,c('React').Component);j=i&&i.prototype;l.prototype.
render=function(){

return (c('React').createElement(c('XUIGrayText.react'),
{className:"_ajk"+

(this.props.isNote?' '+"_45l2":''),

display:'inline',
shade:'light',
size:'small'},
c('React').createElement(c('UFICreatorInfo.react'),
{creatorID:this.props.creator_info.creatorID,
creatorType:this.props.creator_info.creatorType,
creatorName:this.props.creator_info.creatorName,
labelType:this.props.creator_info.labelType,
pageID:this.props.creator_info.pageID,
profileURI:this.props.creator_info.profileURI})));};



function l(){i.apply(this,arguments);}


l.propTypes=
{creator_info:k.shape
({creatorID:k.string.isRequired,
creatorName:k.string.isRequired,
creatorType:k.string.isRequired,
labelType:k.string.isRequired,
pageID:k.string.isRequired,
profileURI:k.string}).
isRequired};


f.exports=l;}),null);

/** js/fbpayments/pages_commerce/PagesCommerceBuyerNUXDialog.react.js */







__d('PagesCommerceBuyerNUXDialog.react',['cx','fbt','ix','Image.react','LayerFadeOnHide','LayerFadeOnShow','React','SimpleNUXMessage','SimpleNUXMessageTypes','XUIButton.react','XUIDialog.react','XUIDialogBody.react','XUIText.react'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,
















m=400,
n=
j("276000");k=babelHelpers.inherits

(o,c('React').PureComponent);l=k&&k.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.











$PagesCommerceBuyerNUXDialog_onConfirm=function(){
c('SimpleNUXMessage').markMessageSeenByUser
(c('SimpleNUXMessageTypes').PAGES_COMMERCE_BUYER_NUX);


this.props.onConfirm();}.
bind(this),this.

$PagesCommerceBuyerNUXDialog_onToggle=function(u){
if(!u)
this.$PagesCommerceBuyerNUXDialog_onConfirm();}.

bind(this),q;}o.prototype.$PagesCommerceBuyerNUXDialog_getConfirmLabel=function(){return i._(["OK","3e2327f197b4a2e49eab9bc99d4e3ea2"]);};o.prototype.

$PagesCommerceBuyerNUXDialog_renderFooter=function(){

return (c('React').createElement('div',{className:"_1lc0"},
c('React').createElement(c('XUIButton.react'),
{className:"_1lcd",
label:this.$PagesCommerceBuyerNUXDialog_getConfirmLabel(),
size:'xxlarge',
use:'confirm',
onClick:this.$PagesCommerceBuyerNUXDialog_onConfirm})));};



o.prototype.

$PagesCommerceBuyerNUXDialog_renderItemList=function(){

return (c('React').createElement('ul',{className:"_1lce"},
c('React').createElement('li',{className:"_1lcf"},
c('React').createElement(c('Image.react'),
{className:"_1_2f",
src:j("275996")}),

c('React').createElement(c('XUIText.react'),
{className:"_1_2g",
size:'large'},i._(["Use your bank account or credit card.","3320c81faeac252dc325e2baedc1a430"]))),





c('React').createElement('li',{className:"_1lcf"},
c('React').createElement(c('Image.react'),
{className:"_1_2f",
src:j("275998")}),

c('React').createElement(c('XUIText.react'),
{className:"_1_2g",
size:'large'},i._(["Payments are protected and private.","b0943979b87fbd373d828cfdd68d36dc"]))),





c('React').createElement('li',{className:"_1lcf"},
c('React').createElement(c('Image.react'),
{className:"_1_2f",
src:j("275997")}),

c('React').createElement(c('XUIText.react'),
{className:"_1_2g",
size:'large'},i._(["FREE! No extra fees or charges.","87c95ae90a4cceda5ce31e02d0964bc4"])))));};







o.prototype.

render=function(){
if(!this.props.isShown)
return null;



return (c('React').createElement(c('XUIDialog.react'),
{behaviors:{LayerFadeOnHide:c('LayerFadeOnHide'),LayerFadeOnShow:c('LayerFadeOnShow')},
onToggle:this.$PagesCommerceBuyerNUXDialog_onToggle,
shown:this.props.isShown,
width:this.props.width||m},
c('React').createElement(c('XUIDialogBody.react'),{className:"_52jv"},
c('React').createElement(c('Image.react'),
{className:"_1lcg",
src:n}),

c('React').createElement('div',{className:"_1lci"},i._(["Instant, secure payments on Messenger.","43e93aee2595040dce7b32d55f19180e"])),




this.$PagesCommerceBuyerNUXDialog_renderItemList(),
this.$PagesCommerceBuyerNUXDialog_renderFooter())));};






f.exports=o;}),null);

/** js/mercury/clients/messenger/components/MessengerSharedPhoto.react.js */






__d('MessengerSharedPhoto.react',['React'],(function a(b,c,d,e,f,g){

'use strict';var h,i,



j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').PureComponent);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.

























$MessengerSharedPhoto_handleClick=function(q){
q.preventDefault();
this.props.onClick(this.props.fbid);}.
bind(this),m;}k.prototype.render=function(){return c('React').createElement('a',{className:this.props.className,href:this.props.uri,onClick:this.$MessengerSharedPhoto_handleClick,style:{backgroundImage:'url('+this.props.uri+')'}});};k.propTypes={className:j.string.isRequired,fbid:j.string.isRequired,onClick:j.func.isRequired,uri:j.string.isRequired};


f.exports=k;}),null);

/** js/mercury/clients/chat/components/ChatPhotoViewFooterHScroll.react.js */







__d('ChatPhotoViewFooterHScroll.react',['cx','Animation','MessengerSharedPhoto.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,





k=c('React').PropTypes,



l=200,
m=74,
n=140,
o=30;i=babelHelpers.inherits

(p,c('React').Component);j=i&&i.prototype;function p(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=j.constructor).call.apply(q,[this].concat(t)),this.
















$ChatPhotoViewFooterHScroll_animation=null,this.

state=
{currentPhoto:'',
prevScrollLeft:0,
scrollLeft:0},this.





























































































$ChatPhotoViewFooterHScroll_getNumberInOneBatch=function(v){
return v?
Math.ceil((v-n*2)/m):
o;},
r;}p.prototype.componentDidMount=function(){if(this.props.width)this.props.updateNumberInOneBatch(this.$ChatPhotoViewFooterHScroll_getNumberInOneBatch(this.props.width));this.$ChatPhotoViewFooterHScroll_animation=new (c('Animation'))(this.refs.childContainer).to('scrollLeft',0).duration(l).go();};p.prototype.componentWillReceiveProps=function(q){if(q.photoID!=this.state.currentPhoto||this.props.sharedPhotos.length!==q.sharedPhotos.length){var r=q.width?(q.width-m)/2-n:0,s=q.sharedPhotos.findIndex(function(t){return t.node.id===q.photoID;});this.setState({currentPhoto:q.photoID,prevScrollLeft:this.state.scrollLeft,scrollLeft:s*m-r});}if(q.width!=this.props.width)this.props.updateNumberInOneBatch(this.$ChatPhotoViewFooterHScroll_getNumberInOneBatch(q.width));};p.prototype.componentDidUpdate=function(){if(this.$ChatPhotoViewFooterHScroll_animation)this.$ChatPhotoViewFooterHScroll_animation.from('scrollLeft',this.state.prevScrollLeft).to('scrollLeft',this.state.scrollLeft).duration(l).go();};p.prototype.componentWillUnmount=function(){this.$ChatPhotoViewFooterHScroll_animation&&this.$ChatPhotoViewFooterHScroll_animation.stop();};p.prototype.shouldComponentUpdate=function(q,r){if(q.photoID!=this.state.currentPhoto||q.sharedPhotos.length!==this.props.sharedPhotos.length)return true;return false;};p.prototype.render=function(){var q=this.props.sharedPhotos,r=q.map(function(s){return c('React').createElement('div',{className:"_1oyb",key:s.node.legacy_attachment_id},c('React').createElement(c('MessengerSharedPhoto.react'),{className:"_1oyc"+(this.state.currentPhoto!==s.node.id?' '+"_1oyd":''),fbid:s.node.legacy_attachment_id,onClick:this.props.onScroll,photoID:s.node.id,uri:s.node.image1.uri}));}.bind(this));return c('React').createElement('div',{className:"_1oye"},c('React').createElement('div',{className:"_1oyf",ref:'childContainer'},c('React').createElement('div',{className:"_1oyh",ref:'scrollable'},r)));};p.propTypes={onScroll:k.func,photoID:k.string,sharedPhotos:k.array,updateNumberInOneBatch:k.func,width:k.number};


f.exports=p;}),null);

/** www/__virtual__/x/XForwardingNUXSeenController.js */



__d("XForwardingNUXSeenController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/chat\/forwarding_nux_seen\/",{});}),

null);

/** js/messaging/MessagingForwardingButtonNUX.react.js */







__d('MessagingForwardingButtonNUX.react',['AsyncRequest','ChatConfig','React','XForwardingNUXSeenController','XUIAmbientNUX.react'],(function a(b,c,d,e,f,g){var h,i,







j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.






state=
{showNUX:!c('ChatConfig').get('seen_forwarding_nux')},this.


$MessagingForwardingButtonNUX_onClose=function(){
if(!this.state.showNUX)
return;

c('ChatConfig').set('seen_forwarding_nux',true);
new (c('AsyncRequest'))(c('XForwardingNUXSeenController').getURIBuilder().getURI()).
send();
this.setState({showNUX:false});}.
bind(this),this.
















close=function(){
this.$MessagingForwardingButtonNUX_onClose();}.
bind(this),m;}k.prototype.render=function(){'use strict';return c('React').createElement(c('XUIAmbientNUX.react'),{contextRef:this.props.contextRef,onCloseButtonClick:this.$MessagingForwardingButtonNUX_onClose,position:'left',width:'auto',shown:this.state.showNUX},this.props.children);};k.propTypes={contextRef:j.func.isRequired};


f.exports=k;}),null);

/** js/mercury/clients/messenger/components/MessengerPhotoViewCloseLink.react.js */







__d('MessengerPhotoViewCloseLink.react',['cx','fbt','React','TooltipLink.react'],(function a(b,c,d,e,f,g,h,i){

'use strict';







var j=c('React').PropTypes,

k=function l(m){
var n=m.customTooltip!==undefined?
m.customTooltip:
c('React').createElement('span',null,i._(["Press Esc to close","d4d874f81b928b1489fd136f66319918"]));






return (c('React').createElement(c('TooltipLink.react'),
{className:"_51ok _50-m _51an",

onClick:m.onClick,
tooltip:n},
c('React').createElement('div',{className:"_387s"})));};




k.propTypes=
{onClick:j.func,
customTooltip:j.element};


f.exports=k;}),null);

/** js/photos/client/SpotlightViewerBottomBarLink.js */




__d('SpotlightViewerBottomBarLink',['cx','Link.react','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits






(k,c('React').Component);j=i&&i.prototype;k.prototype.
render=function(){'use strict';
var l=this.props.className||
"_4_8j _4_8k";


return (c('React').createElement(c('Link.react'),babelHelpers['extends']({},
this.props,
{className:l}),
this.props.children));};


function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** js/mercury/clients/chat/components/ChatPhotoViewHeader.react.js */







__d('ChatPhotoViewHeader.react',['cx','fbt','MessagingForwardingButtonNUX.react','MessengerPhotoViewCloseLink.react','React','SpotlightViewerBottomBarLink','WorkModeConfig'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,










l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').PureComponent);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.










































$ChatPhotoViewHeader_showForwardDialog=function(){
this.$ChatPhotoViewHeader_closeForwardNUX();
this.props.showForwardDialog&&this.props.showForwardDialog();}.
bind(this),this.

$ChatPhotoViewHeader_showShareDialog=function(){
this.$ChatPhotoViewHeader_closeForwardNUX();
this.props.showShareDialog&&this.props.showShareDialog();}.
bind(this),o;}m.prototype.render=function(){return c('React').createElement('div',{className:"_51an _50-m _3h_t _5l-3",role:'banner'},this.$ChatPhotoViewHeader_renderActionButtons(),c('React').createElement(c('MessengerPhotoViewCloseLink.react'),{onClick:this.props.onClose}));};m.prototype.$ChatPhotoViewHeader_closeForwardNUX=function(){if(this.refs.forwardNUX)this.refs.forwardNUX.close();};m.prototype.

$ChatPhotoViewHeader_renderActionButtons=function(){
var n=void 0,
o=void 0,
p=void 0;
if(!this.props.disableForward){
n=
c('React').createElement(c('SpotlightViewerBottomBarLink'),
{className:"_3h_u",
onClick:this.$ChatPhotoViewHeader_showForwardDialog,
ref:'forwardButton'},
c('React').createElement('div',
{className:"_3h_v _3h_w"}),i._(["Forward","1d687903a24091ef042e649bf13338ed"]));







o=
c('React').createElement(c('MessagingForwardingButtonNUX.react'),
{contextRef:function(){return this.refs.forwardButton;}.bind(this),
ref:'forwardNUX'},i._(["Send this image to other people in separate messages.","fed69b0792a0d6d5a4362024a9b4ff8b"]));}






if(this.props.enableShareToFB)
p=
c('React').createElement('div',
{className:"_3h_u",
onClick:this.$ChatPhotoViewHeader_showShareDialog,
ref:'shareButton',
role:'button',
tabIndex:'0'},
c('React').createElement('div',
{className:"_3tth _3h_w"}),


this.$ChatPhotoViewHeader_renderActionText());





return (c('React').createElement('div',
{key:'buttonsContainer',
ref:'buttons'},
c('React').createElement(c('SpotlightViewerBottomBarLink'),
{className:"_3h_u",
rel:'async',
ajaxify:this.props.url,
ref:'downloadButton'},
c('React').createElement('div',
{className:"_3h_x _3h_w"}),i._(["Download","91a22db127a7e7880f9173812afcb208"])),






n,
o,
p,
c('React').createElement('div',
{className:"_3h_u",
onClick:this.props.openInfo,
ref:'moreInfo',
role:'link'},
c('React').createElement('div',
{className:"_3h_y _3h_w"}),i._(["Info","c4d34b381863ed7d99243aa43061217c"]))));};








m.prototype.

$ChatPhotoViewHeader_renderActionText=function(){
if(c('WorkModeConfig').is_work_user){
return i._(["Share to Workplace","1d152465b9b958b646c41edb8bab81a4"]);}else 





return i._(["Share to Facebook","c3cfd56c731d517e58e2b70b9599a62d"]);};





m.propTypes={disableForward:l.bool,enableShareToFB:l.bool,onClose:l.func,openInfo:l.func,showForwardDialog:l.func,showShareDialog:l.func,url:l.object};


f.exports=m;}),null);

/** js/mercury/clients/chat/components/ChatSpeakingSticker.react.js */






__d('ChatSpeakingSticker.react',['React','ReactDOM'],(function a(b,c,d,e,f,g){

'use strict';var h,i,




j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').PureComponent);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.
















$ChatSpeakingSticker_handleStickerClick=function(){
var q=

c('ReactDOM').findDOMNode(this.refs.stickerVideo);
q.play();}.
bind(this),m;}k.prototype.

render=function(){

return (c('React').createElement('div',{onClick:this.$ChatSpeakingSticker_handleStickerClick},
c('React').createElement('video',
{height:this.props.videoSize.height,
ref:"stickerVideo",
width:this.props.videoSize.width},
c('React').createElement('source',{src:this.props.videoURI}))));};



k.propTypes={videoURI:j.string.isRequired,videoSize:j.shape({height:j.number,width:j.number}).isRequired};


f.exports=k;}),null);

/** js/mercury/clients/messenger/MercuryLWARenderer.js */







__d('MercuryLWARenderer',['MercuryConfig','MessengerTextWithEntities.react','MessengerLightweightActionUtils','React','TextWithEntities.react'],(function a(b,c,d,e,f,g){

'use strict';







var h=
{renderCollapsedText:function i(j){
var k=null;
if(c('MercuryConfig').MessengerNewEmojiGK){
k=
c('React').createElement(c('MessengerTextWithEntities.react'),
{renderEmoji:true,
renderEmoticons:true,
text:c('MessengerLightweightActionUtils').getCollapsedLWAText(j)});}else 


k=
c('React').createElement(c('TextWithEntities.react'),
{renderEmoji:true,
renderEmoticons:true,
text:c('MessengerLightweightActionUtils').getCollapsedLWAText(j)});


return c('React').createElement('span',null,k);}};



f.exports=h;}),null);

/** js/stickers/EmojiSticker.react.js */






__d('EmojiSticker.react',['cx','Image.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.














componentDidMount=function(){
this.props.onAttachmentLoad&&this.props.onAttachmentLoad();};
l.prototype.

render=function(){
var m=this.props.emojiImage?
this.props.emojiImage:
c('React').createElement(c('Image.react'),{src:this.props.sourceURI});

return (c('React').createElement('div',
{'aria-label':this.props.emoji,
className:c('joinClasses')

(this.props.className,
"_383m"),

tabIndex:'0'},
m));};


function l(){i.apply(this,arguments);}l.propTypes={emoji:k.string,emojiImage:k.any,onAttachmentLoad:k.func,sourceURI:k.string.isRequired};


f.exports=l;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/animated_share/MercuryAnimatedShareSnippet.react.js */







__d('MercuryAnimatedShareSnippet.react',['cx','fbt','ix','Image.react','React'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,








m=c('React').PropTypes;k=babelHelpers.inherits

(n,c('React').Component);l=k&&k.prototype;n.prototype.










render=function(){
var o=this.props.isViewerSender?i._(["You sent a GIF.","d863f84649c664100e3872bfc4c9241e"]):i._(["{sender name} sent a GIF.","581dea07762b97b9566dcf8780c07fd1"],[i.param




('sender name',this.props.senderName)]);



return (c('React').createElement('span',
{className:"uiIconText _3l6h"},
c('React').createElement(c('Image.react'),{src:j("81849")}),
o));};


function n(){k.apply(this,arguments);}n.propTypes={isViewerSender:m.bool,senderName:m.oneOfType([m.string,m.object])};


f.exports=n;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/crisis/MercuryCrisisListingShareSnippet.react.js */






__d('MercuryCrisisListingShareSnippet.react',['fbt','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits










(k,c('React').Component);j=i&&i.prototype;k.prototype.


render=function(){

return (c('React').createElement('span',null,
this.props.isViewerSender?h._(["You shared a post.","54f11bb89d26be4f19ace07c2047172e"]):h._(["{sender_name} shared a post.","c771570cd614086963383662847c893b"],[h.param




('sender_name',this.props.senderName)])));};





function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/MercuryFallbackShareAttachmentSnippet.react.js */




__d('MercuryFallbackShareAttachmentSnippet.react',['cx','fbt','ix','Image.react','React'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,








m=c('React').PropTypes;k=babelHelpers.inherits

(n,c('React').Component);l=k&&k.prototype;n.prototype.





render=function(){
var o=void 0;
if(this.props.isViewerSender){
o=i._(["You sent a link.","bbb547db549333f98f558b12b95cddbd"]);}else 





o=i._(["{sender name} sent a link.","a224699298626e6909117c54b2a88e64"],[i.param

('sender name',this.props.senderName)]);






return (c('React').createElement('span',
{className:"uiIconText _3l6h"},
c('React').createElement(c('Image.react'),{src:j("86988")}),
o));};


function n(){k.apply(this,arguments);}n.propTypes={isViewerSender:m.bool,senderName:m.oneOfType([m.string,m.object])};


f.exports=n;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/social_good/MercuryFundraiserShareSnippet.react.js */







__d('MercuryFundraiserShareSnippet.react',['cx','fbt','ix','Image.react','React'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,








m=c('React').PropTypes;k=babelHelpers.inherits

(n,c('React').Component);l=k&&k.prototype;n.prototype.










render=function(){
var o=this.props.isViewerSender?i._(["You shared a fundraiser","91904845b55a8b0eddc0f1867e185511"]):i._(["{sender name} shared a fundraiser","8b19bb7d182d96196378d7b674d4a554"],[i.param




('sender name',this.props.senderName)]);



return (c('React').createElement('span',
{className:"uiIconText _3l6h"},
c('React').createElement(c('Image.react'),{src:j("40052")}),
o));};


function n(){k.apply(this,arguments);}n.propTypes={isViewerSender:m.bool,senderName:m.oneOfType([m.string,m.object])};


f.exports=n;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/message_live_location/MercuryMessageLiveLocationShareAttachmentSnippet.react.js */




__d('MercuryMessageLiveLocationShareAttachmentSnippet.react',['cx','fbt','ix','Image.react','React'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,








m=c('React').PropTypes;k=babelHelpers.inherits

(n,c('React').Component);l=k&&k.prototype;n.prototype.





render=function(){
var o=void 0;
if(this.props.isViewerSender){
o=i._(["You sent a live location.","ad83a8c472aa4c30a67f6a63d9c7f024"]);}else 







o=i._(["{sender name} sent a live location.","fd9fdffe1107cc9ac9d3390a0876aebe"],[i.param



('sender name',this.props.senderName)]);






return (c('React').createElement('span',
{className:"uiIconText _3l6h"},
c('React').createElement(c('Image.react'),{src:j("87068")}),
o));};


function n(){k.apply(this,arguments);}n.propTypes={isViewerSender:m.bool,senderName:m.oneOfType([m.string,m.object])};


f.exports=n;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/message_location/MercuryMessageLocationShareAttachmentSnippet.react.js */




__d('MercuryMessageLocationShareAttachmentSnippet.react',['cx','fbt','ix','Image.react','React'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,








m=c('React').PropTypes;k=babelHelpers.inherits

(n,c('React').Component);l=k&&k.prototype;n.prototype.





render=function(){
var o=void 0;
if(this.props.isViewerSender){
o=i._(["You sent a location.","999c4e3dadb7e00cd2f875e942e684a3"]);}else 







o=i._(["{sender name} sent a location.","cc1465288aa6eff0e7a3132938b60760"],[i.param



('sender name',this.props.senderName)]);






return (c('React').createElement('span',
{className:"uiIconText _3l6h"},
c('React').createElement(c('Image.react'),{src:j("87068")}),
o));};


function n(){k.apply(this,arguments);}n.propTypes={isViewerSender:m.bool,senderName:m.oneOfType([m.string,m.object])};


f.exports=n;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/messenger_invite/MercuryMessengerInviteShareAttachmentSnippet.react.js */




__d('MercuryMessengerInviteShareAttachmentSnippet.react',['cx','React','MercuryShareAttachmentReactShape'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits






(k,c('React').Component);j=i&&i.prototype;k.prototype.




render=function(){

return (c('React').createElement('span',
{className:"_3l6h"},
this.props.attachment.title));};


function k(){i.apply(this,arguments);}k.propTypes={attachment:c('MercuryShareAttachmentReactShape')};


f.exports=k;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/music/MercuryMusicIntegrationAttachmentSnippet.react.js */





__d('MercuryMusicIntegrationAttachmentSnippet.react',['fbt','MercuryFallbackShareAttachmentSnippet.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits







(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.








render=function(){
var m=void 0,
n=this.props.attachment.target;
if(!n)

return (c('React').createElement(c('MercuryFallbackShareAttachmentSnippet.react'),this.props));


var o=n.title,p=n.app_name;
if(this.props.isViewerSender){
m=h._(["You shared \"{music title}\" from {music servvice}.","2b01ab55c3c0adfa11d54734c25460b7"],[h.param


('music title',o),h.param

('music servvice',p)]);}else 



m=h._(["{sender name} shared \"{music title}\" from {music servvice}.","a00a6a621a0f7df55ccde9b7f53e2b07"],[h.param

('sender name',this.props.senderName),h.param

('music title',o),h.param

('music servvice',p)]);





return (c('React').createElement('span',null,
m));};


function l(){i.apply(this,arguments);}l.propTypes={attachment:k.object,isViewerSender:k.bool,senderName:k.oneOfType([k.string,k.object])};


f.exports=l;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/payment_platform/MercuryPaymentPlatformSnippet.react.js */







__d('MercuryPaymentPlatformSnippet.react',['cx','ix','Image.react','MercuryShareAttachmentReactShape','React','idx'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,












l=c('React').PropTypes;j=babelHelpers.inherits







(m,c('React').Component);k=j&&j.prototype;m.prototype.








render=function(){var n,o,p,q,
r=(n=this.props)!=null?(o=n.attachment)!=null?(p=o.target)!=null?(q=p.payment_snippet)!=null?q.text:q:p:o:n;
if(!r)
return null;



return (c('React').createElement('span',
{className:"uiIconText _3l6h"},
c('React').createElement(c('Image.react'),{src:i("86988")}),
r));};


function m(){j.apply(this,arguments);}m.propTypes={attachment:c('MercuryShareAttachmentReactShape'),isSenderViewer:l.bool,senderName:l.oneOfType([l.string,l.object])};


f.exports=m;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/photo/MercuryPhotoShareSnippet.react.js */







__d('MercuryPhotoShareSnippet.react',['cx','fbt','ix','Image.react','React'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,








m=c('React').PropTypes;k=babelHelpers.inherits

(n,c('React').Component);l=k&&k.prototype;n.prototype.










render=function(){
var o=this.props.isViewerSender?i._(["You sent a photo.","217c2cf3dde3af90cdf48bceb5180a19"]):i._(["{sender name} sent a photo.","f24be5d03265e1800c75c78e44b8e445"],[i.param




('sender name',this.props.senderName)]);



return (c('React').createElement('span',
{className:"uiIconText _3l6h"},
c('React').createElement(c('Image.react'),{src:j("81849")}),
o));};


function n(){k.apply(this,arguments);}n.propTypes={isViewerSender:m.bool,senderName:m.oneOfType([m.string,m.object])};


f.exports=n;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/MercuryPromotionShareAttachmentSnippet.react.js */




__d('MercuryPromotionShareAttachmentSnippet.react',['cx','fbt','ix','Image.react','React'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,








m=c('React').PropTypes;k=babelHelpers.inherits

(n,c('React').Component);l=k&&k.prototype;n.prototype.






render=function(){
var o=this.props.attachment,
p=o&&o.target,
q=null;
if(this.props.isViewerSender){
q=i._(["You sent an attachment.","9574323eb2903495dbdb1946792eb611"]);}else 





q=i._(["{sender name} sent an attachment.","aa52fff119bce4fcb3715ec917964205"],[i.param


('sender name',this.props.senderName)]);



var r=p&&p.message||q;

return (c('React').createElement('span',
{className:"uiIconText _3l6h"},
c('React').createElement(c('Image.react'),{src:j("86988")}),
r));};


function n(){k.apply(this,arguments);}n.propTypes={senderName:m.oneOfType([m.string,m.object]),attachment:m.object,isViewerSender:m.bool};


f.exports=n;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/sale_group_product_item/MercurySaleGroupProductItemShareSnippet.react.js */







__d('MercurySaleGroupProductItemShareSnippet.react',['cx','fbt','ix','Image.react','React'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,








m=c('React').PropTypes;k=babelHelpers.inherits

(n,c('React').Component);l=k&&k.prototype;n.prototype.










render=function(){
var o=this.props.isViewerSender?i._(["You sent a for sale item.","8f4bdf114f85154ddd3813a7bf5b9a58"]):i._(["{sender name} sent a for sale item.","3c3aecd2843aa1abf6a1b6a7b696df8d"],[i.param




('sender name',this.props.senderName)]);



return (c('React').createElement('span',
{className:"uiIconText _3l6h"},
c('React').createElement(c('Image.react'),{src:j("86988")}),
o));};


function n(){k.apply(this,arguments);}n.propTypes={isViewerSender:m.bool,senderName:m.oneOfType([m.string,m.object])};


f.exports=n;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/transaction_invoice/MercuryTransactionInvoiceShareSnippet.react.js */







__d('MercuryTransactionInvoiceShareSnippet.react',['cx','fbt','ix','Image.react','React'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,








m=c('React').PropTypes;k=babelHelpers.inherits

(n,c('React').Component);l=k&&k.prototype;n.prototype.
render=function(){
var o=this.props.isViewerSender?i._(["You sent an invoice","128af00c8e37ea20c10551c8580f5ee0"]):i._(["Page {sender name} sent you an invoice.","55785884655971a16a69e68892f8cc73"],[i.param





('sender name',this.props.senderName)]);




return (c('React').createElement('span',
{className:"uiIconText _3l6h"},
c('React').createElement(c('Image.react'),{src:j("86988")}),
o));};


function n(){k.apply(this,arguments);}


n.propTypes=
{isViewerSender:m.bool,
senderName:m.oneOfType([m.string,m.object])};


f.exports=n;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/video/MercuryVideoShareSnippet.react.js */







__d('MercuryVideoShareSnippet.react',['cx','fbt','ix','Image.react','React'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,








m=c('React').PropTypes;k=babelHelpers.inherits

(n,c('React').Component);l=k&&k.prototype;n.prototype.










render=function(){
var o=this.props.isViewerSender?i._(["You sent a video.","446cf3afbda2e4841370889f4fbd3888"]):i._(["{sender name} sent a video.","cf1f8b3dbecd4560b5bb3b281c3f8a72"],[i.param




('sender name',this.props.senderName)]);



return (c('React').createElement('span',
{className:"uiIconText _3l6h"},
c('React').createElement(c('Image.react'),{src:j("82423")}),
o));};


function n(){k.apply(this,arguments);}n.propTypes={isViewerSender:m.bool,senderName:m.oneOfType([m.string,m.object])};


f.exports=n;}),null);

/** js/mercury/clients/shared/components/attachments/share/share_styles/lightweight_action/MessengerLightweightActionSnippet.react.js */






__d('MessengerLightweightActionSnippet.react',['cx','MercuryShareAttachmentReactShape','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits






(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.




render=function(){

return (c('React').createElement('span',
{className:"_3l6h"},
this.props.attachment.title));};


function k(){i.apply(this,arguments);}k.propTypes={attachment:c('MercuryShareAttachmentReactShape')};


f.exports=k;}),null);

/** js/mercury/clients/messenger/components/moments_app/MessengerMomentsAppSnippet.react.js */






__d('MessengerMomentsAppSnippet.react',['cx','fbt','ix','Image.react','MercuryShareAttachmentReactShape','React'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,









m=c('React').PropTypes;k=babelHelpers.inherits

(n,c('React').Component);l=k&&k.prototype;n.prototype.






render=function(){
var o=this.props.attachment;
if(!o||!o.target)
return null;



return (c('React').createElement('span',
{className:"uiIconText _3l6h"},
c('React').createElement(c('Image.react'),{src:j("86988")}),
o.target.snippet));};



function n(){k.apply(this,arguments);}n.propTypes={attachment:c('MercuryShareAttachmentReactShape')};


f.exports=n;}),null);

/** shared/mercury/attachments/MercuryAttachmentSnippetType.js */






__d('MercuryAttachmentSnippetType',['keyMirror'],(function a(b,c,d,e,f,g){



var h=c('keyMirror')
({PHOTO:null,
GIF:null,
VIDEO:null,
AUDIO_CLIP:null,
STICKER:null,
SHARE:null,
ERROR:null,
MIXED:null,
GIFT:null,
THIRDPARTYSTICKER:null,
FILE:null,
LIKE_STICKER:null});


f.exports=h;}),null);

/** shared/p2p/P2PSnippetStringUtils.js */








__d('P2PSnippetStringUtils',['fbt','P2PPaymentRequestStatus','P2PTransferStatus'],(function a(b,c,d,e,f,g,h){






var i=
{getRequestCanceledSnippet:function j
(k,
l,
m,
n,
o){

if(k){
return h._(["Your request for {payment request amount} from {receiver's name} was canceled.","ea2b98db7ad914a5723744dbe4f526da"],[h.param



('payment request amount',
o),h.param


('receiver\'s name',
n)]);}else




if(l){
return h._(["{requester's name}'s request for {payment request amount} was canceled.","775a750f67059d06cb15ca165c3a542c"],[h.param


('requester\'s name',
m),h.param


('payment request amount',
o)]);}else 





return h._(["{requester's name}'s request for {payment request amount} from {receiver's name} was canceled.","cadcf2d87b6910b23c1cf8f860d950fc"],[h.param


('requester\'s name',
m),h.param


('payment request amount',
o),h.param


('receiver\'s name',
n)]);},







getRequestDeclinedSnippet:function j
(k,
l,
m,
n,
o){

if(k){
return h._(["{receiver's name} declined your request for {payment request amount}.","ea032e52016f09fbe1765c45b61fe386"],[h.param


('receiver\'s name',
n),h.param


('payment request amount',
o)]);}else



if(l){
return h._(["You declined {requester's name}'s request for {payment request amount}.","dfd1df9be8f53493f6da476aee6b60d0"],[h.param



('requester\'s name',
m),h.param


('payment request amount',
o)]);}else 




return h._(["{receiver's name} declined {sender's name}'s request for {payment request amount}.","feada5cb413dafd460167b024fb26500"],[h.param


('receiver\'s name',
n),h.param


('sender\'s name',
m),h.param


('payment request amount',
o)]);},







getRequestSentSnippet:function j
(k,
l,
m,
n,
o){

if(k){
return h._(["You requested {amount} from {requestee name}.","9ba52a4af821a883da789b66bcb0832f"],[h.param



('amount',
o),h.param


('requestee name',
n)]);}else



if(l){
return h._(["{requester name} requested {amount} from you.","08d23d0e6c41970af7c68cc4f0d239da"],[h.param


('requester name',
m),h.param


('amount',
o)]);}else 





return h._(["{name} requested {amount} from {requestee name}.","b0b6cc7a7954f293526ae615d87bc748"],[h.param



('name',
m),h.param


('amount',
o),h.param


('requestee name',
n)]);},






getRequestSnippetByStatus:function j
(k,
l,
m,
n,
o,
p){

var q=k||c('P2PPaymentRequestStatus').INITED,
r=
[l,
m,
n,
o,
p];

switch(q){
case c('P2PPaymentRequestStatus').DECLINED:
return this.getRequestDeclinedSnippet.apply(this,r);
case c('P2PPaymentRequestStatus').TRANSFER_FAILED:
case c('P2PPaymentRequestStatus').CANCELED:
return this.getRequestCanceledSnippet.apply(this,r);}

return this.getRequestSentSnippet.apply(this,r);},


getTransferCanceledSnippet:function j
(k,
l,
m,
n,
o){

if(k){
return h._(["Your {amount} payment to {receiver_name} was canceled.","979997d68d8686f5a43324d8feb4267c"],[h.param


('amount',
o),h.param


('receiver_name',
n)]);}else




if(l){
return h._(["{sender name}'s {amount} payment was canceled.","f919963b91bbb2ff4c88ad1a77c3118a"],[h.param

('sender name',
m),h.param


('amount',
o)]);}else 





return h._(["{sender_name}'s {amount} payment to {receiver_name} was canceled.","b97ee6ca51023114b3c50d8c5685e011"],[h.param

('sender_name',
m),h.param


('amount',
o),h.param


('receiver_name',
n)]);},







getTransferDeclinedSnippet:function j
(k,
l,
m,
n,
o){

if(k){
return h._(["{receiver_name} didn't accept your {amount} payment.","acf47780402964ae20e20fbdee3a4975"],[h.param

('receiver_name',
n),h.param


('amount',
o)]);}else




if(l){
return h._(["You didn't accept {sender name}'s {amount} payment.","df984a819544c5cc319573ae007441a3"],[h.param


('sender name',
m),h.param


('amount',
o)]);}else 





return h._(["{receiver_name} didn't accept {sender_name}'s {amount} payment.","4edeed38c14f7c3aab30c7160170f3e3"],[h.param

('receiver_name',
n),h.param


('sender_name',
m),h.param


('amount',
o)]);},







getTransferSentSnippet:function j
(k,
l,
m,
n,
o){

if(k){
return h._(["You sent {receiver name} {amount}.","f691f276c2e5161d75f53529fef057a6"],[h.param


('receiver name',
n),h.param

('amount',
o)]);}else



if(l){
return h._(["{name} sent you {amount}.","f870072851379397a2c5cfafee3d5daa"],[h.param

('name',
m),h.param


('amount',
o)]);}else 




return h._(["{sender name} sent {receiver name} {amount}.","33144aa55704f7019f144148d8cad27e"],[h.param


('sender name',
m),h.param


('receiver name',
n),h.param

('amount',
o)]);},






getTransferSnippetByStatus:function j
(k,
l,
m,
n,
o,
p){

var q=
[l,
m,
n,
o,
p],

r=k||c('P2PTransferStatus').PENDING_SENDER_INITED;
switch(r){
case c('P2PTransferStatus').CANCELED_DECLINED:
return this.getTransferDeclinedSnippet.apply(this,q);
case c('P2PTransferStatus').CANCELED_SENDER_RISK:
case c('P2PTransferStatus').CANCELED_RECIPIENT_RISK:
case c('P2PTransferStatus').CANCELED_SYSTEM_FAIL:
case c('P2PTransferStatus').CANCELED_EXPIRED:
case c('P2PTransferStatus').CANCELED_SAME_CARD:
return this.getTransferCanceledSnippet.apply(this,q);}

return this.getTransferSentSnippet.apply(this,q);}};




f.exports=i;}),null);

/** shared/mercury/renderers/MercuryAttachmentSnippetRenderer.js */






__d('MercuryAttachmentSnippetRenderer',['fbt','CurrentUser','MercuryAttachmentSnippetType','MercuryAttachmentType','MercuryAudioType','MercuryGiftSnippetRenderer','P2PSnippetStringUtils','StickerConstants','StoryAttachmentStyle'],(function a(b,c,d,e,f,g,h){

'use strict';


















var i=
{getAttachmentSnippetType:function j(k){
if(this._hasOnlyPhotos(k))
return c('MercuryAttachmentSnippetType').PHOTO;


if(this._hasOnlyAnimatedImages(k))
return c('MercuryAttachmentSnippetType').GIF;


if(this._hasOnlyVideo(k))
return c('MercuryAttachmentSnippetType').VIDEO;


if(this._hasAudioClip(k))
return c('MercuryAttachmentSnippetType').AUDIO_CLIP;


if(this._hasLikeSticker(k))
return c('MercuryAttachmentSnippetType').LIKE_STICKER;


if(this._hasSticker(k))
return c('MercuryAttachmentSnippetType').STICKER;


if(this._hasThirdPartySticker(k))
return c('MercuryAttachmentSnippetType').THIRDPARTYSTICKER;


if(this._hasShare(k))
return c('MercuryAttachmentSnippetType').SHARE;


if(this._hasGift(k))
return c('MercuryAttachmentSnippetType').GIFT;


if(this._hasError(k))
return c('MercuryAttachmentSnippetType').ERROR;


if(this._hasFile(k))
return c('MercuryAttachmentSnippetType').FILE;


return c('MercuryAttachmentSnippetType').MIXED;},


renderAttachmentSnippetText:function j
(k,
l,
m,
n){

switch(k){
case c('MercuryAttachmentSnippetType').PHOTO:
return this._renderPhotoAttachmentSnippetText
(l,
m,
this._getPhotoAttachments(n));

case c('MercuryAttachmentSnippetType').GIF:
return this._renderAnimatedImagesAttachmentSnippetText
(l,
m,
this._getAnimatedImageAttachments(n));

case c('MercuryAttachmentSnippetType').VIDEO:
return l?h._(["You sent a video.","1c22ec26194a814963df296dad4e5f63"]):h._(["{sender name} sent a video.","64d16b5d21cd6f10dd5c14e409bbf5e4"],[h.param




('sender name',m)]);


case c('MercuryAttachmentSnippetType').AUDIO_CLIP:
return l?h._(["You sent a voice message.","d58fbd1efc18a1869e3d76655db50347"]):h._(["{name} sent a voice message.","0b392b75a61ff9136ffdc0af71336ae3"],[h.param




('name',m)]);


case c('MercuryAttachmentSnippetType').STICKER:
case c('MercuryAttachmentSnippetType').LIKE_STICKER:
case c('MercuryAttachmentSnippetType').THIRDPARTYSTICKER:
return l?h._(["You sent a sticker.","c75346c5ff07f3238893f11ca5b4edcc"]):h._(["{name} sent a sticker.","7f5584f8968e39553f9dce9d57445067"],[h.param




('name',m)]);


case c('MercuryAttachmentSnippetType').SHARE:
if(n&&this._hasP2PPayment(n))
return this._renderP2PPaymentSnippetText(n[0]);

if(n&&this._hasP2PPaymentRequest(n))
return this._renderP2PPaymentRequestSnippetText(n[0]);

if(n&&this._hasBusinessMessage(n))
return this._renderBusinessMessageSnippetText
(n[0],
m);


if(n&&this._hasLocation(n))
return l?h._(["You sent a location.","4ff24a296130b5082fb94347b88aa05b"]):h._(["{sender name} sent a location.","be14b03328add9240f37ddda57ab1126"],[h.param




('sender name',m)]);



if(n&&this._hasLiveLocation(n))
return l?h._(["You sent a live location.","1901f73e1fd547155d27e41f15488ff7"]):h._(["{sender name} sent a live location.","670ead3c7781cb167795bead0e477c69"],[h.param








('sender name',m)]);



return l?h._(["You sent a link.","bbb547db549333f98f558b12b95cddbd"]):h._(["{sender name} sent a link.","a224699298626e6909117c54b2a88e64"],[h.param




('sender name',m)]);


case c('MercuryAttachmentSnippetType').GIFT:
return c('MercuryGiftSnippetRenderer').renderText
(l,
m);

case c('MercuryAttachmentSnippetType').FILE:
return l?h._(["You sent an attachment.","3d91259d89e3120aa21809ed907fb77c"]):h._(["{sender name} sent an attachment.","fcc703751f1c7402d32788b0c86cb8a3"],[h.param






('sender name',m)]);



case c('MercuryAttachmentSnippetType').ERROR:
return l?h._(["You sent an attachment.","b2325abbbb4c2595f2d9a2f098fab13c"]):h._(["{sender name} sent an attachment.","9bec022fba95710d4ab4c0bf306e0dc9"],[h.param




('sender name',m)]);



default:return '';}},



_hasOnlyPhotos:function j(k){
return this._getPhotoAttachments(k).length===k.length;},


_hasThirdPartySticker:function j(k){

return (k.length===1&&
k[0].attach_type===c('MercuryAttachmentType').THIRDPARTYSTICKER);},



_hasOnlyAnimatedImages:function j(k){
return this._getAnimatedImageAttachments(k).length===
k.length;},


_hasOnlyVideo:function j(k){

return (k.length===1&&
k[0].attach_type===c('MercuryAttachmentType').VIDEO);},



_hasAudioClip:function j(k){
var l=k[0].metadata&&k[0].metadata.type;

return (k.length===1&&
(l===c('MercuryAudioType').AudioClip||
l===c('MercuryAudioType').VoiceMessageWithTranscript));},



_hasBusinessMessage:function j(k){
return this._hasSingleShareAttachmentOfStyle
(k,
c('StoryAttachmentStyle').BUSINESS_MESSAGE_ITEMS);},



_hasSticker:function j(k){

return (k.length===1&&
k[0].attach_type===c('MercuryAttachmentType').STICKER);},



_hasLikeSticker:function j(k){
if(k.length<1)
return false;

var l=k[0].metadata&&
k[0].metadata.stickerID;

return (k.length===1&&
(l==c('StickerConstants').LIKE_STICKER_ID||
l==c('StickerConstants').HOT_LIKE_SMALL_STICKER_ID||
l==c('StickerConstants').HOT_LIKE_MEDIUM_STICKER_ID||
l==c('StickerConstants').HOT_LIKE_LARGE_STICKER_ID));},



_hasLocation:function j(k){
return this._hasSingleShareAttachmentOfStyle
(k,
c('StoryAttachmentStyle').MESSAGE_LOCATION);},



_hasLiveLocation:function j(k){
return this._hasSingleShareAttachmentOfStyle
(k,
c('StoryAttachmentStyle').MESSAGE_LIVE_LOCATION);},



_hasP2PPayment:function j(k){
return this._hasSingleShareAttachmentOfStyle
(k,
c('StoryAttachmentStyle').ORION);},



_hasP2PPaymentRequest:function j(k){
return this._hasSingleShareAttachmentOfStyle
(k,
c('StoryAttachmentStyle').ORION_REQUEST);},



_hasSingleShareAttachmentOfStyle:function j
(k,
l){


return (k.length===1&&
k[0].attach_type===c('MercuryAttachmentType').SHARE&&
k[0].share.style_list.indexOf(l)>=0);},



_hasShare:function j(k){

return (k.length===1&&
k[0].attach_type===c('MercuryAttachmentType').SHARE);},



_hasError:function j(k){

return (k.length===1&&
k[0].attach_type===c('MercuryAttachmentType').ERROR);},



_hasGift:function j(k){

return (k.length===1&&
k[0].attach_type===c('MercuryAttachmentType').GIFT);},



_hasFile:function j(k){

return (k.length===1&&
k[0].attach_type===c('MercuryAttachmentType').FILE);},



_getPhotoAttachments:function j(k){
if(!k)
return [];


return k.filter
(function(l){return l.attach_type===c('MercuryAttachmentType').PHOTO;});},



_getAnimatedImageAttachments:function j
(k){

if(!k)
return [];


return k.filter
(function(l){return l.attach_type===c('MercuryAttachmentType').ANIMATED_IMAGE;});},



_renderPhotoAttachmentSnippetText:function j
(k,
l,
m){

if(m.length===1){
if(k){
return h._(["You sent a photo.","d9db0bbeaf6c3668955b6b197e696cdb"]);}else 





return h._(["{name} sent a photo.","1bef6ccdaac44ef93936f98b46ac0653"],[h.param

('name',l)]);}else 





if(k){
return h._({"*":["You sent {num_photos} photos.","bf988ac4b1f077c300d75f1ef2187c0e"]},[h.param


('num_photos',
m.length,[0])]);}else 





return h._({"*":["{name} sent {num_photos} photos.","1e6b1d81495d051198c529bffe2c0918"]},[h.param

('name',l),h.param

('num_photos',
m.length,[0])]);},








_renderAnimatedImagesAttachmentSnippetText:function j
(k,
l,
m){

if(m.length===1){
if(k){
return h._(["You sent a GIF.","dec58594b91850b65a41821f5f299f57"]);}else 







return h._(["{name} sent a GIF.","4b4f54901560036a602ab0c17b572f96"],[h.param



('name',l)]);}else 





if(k){
return h._(["You sent {num_animated_images} GIFs.","84d81ee51a12bfdccb178361c73c9828"],[h.param




('num_animated_images',
m.length)]);}else 





return h._(["{name} sent {num_animated_images} GIFs.","40926a746ce7e49c3a029bfa13371cfd"],[h.param



('name',l),h.param

('num_animated_images',
m.length)]);},








_renderBusinessMessageSnippetText:function j
(k,
l){

var m=k.share.target,
n=m&&m.message||h._(["{sender name} sent an attachment.","aa52fff119bce4fcb3715ec917964205"],[h.param

('sender name',l)]);


return n;},


_renderP2PPaymentSnippetText:function j
(k){

var l=k.share.target;
return this.renderP2PPaymentSnippetText
(c('CurrentUser').getID()===l.sender.id,
l.sender.name,
l.amountWithSymbol,
l.status,
c('CurrentUser').getID()===l.receiver.id,
l.receiver.name);},



_renderP2PPaymentRequestSnippetText:function j
(k){

var l=k.share.target;
return this.renderP2PPaymentRequestSnippetText
(c('CurrentUser').getID()===l.requester.id,
l.requester.name,
l.amountWithSymbol,
l.currentStatus,
c('CurrentUser').getID()===l.requestee.id,
l.requestee.name);},



renderP2PPaymentSnippetText:function j
(k,
l,
m,
n,
o,
p){

return c('P2PSnippetStringUtils').getTransferSnippetByStatus
(n,
k,
o||false,
l||'',
p||'',
m);},



renderP2PPaymentRequestSnippetText:function j
(k,
l,
m,
n,
o,
p){

return c('P2PSnippetStringUtils').getRequestSnippetByStatus
(n,
k,
o||false,
l||'',
p||'',
m);}};




f.exports=i;}),null);

/** js/p2p/components/attachment/P2PMercuryAttachmentSnippetRendererBase.react.js */







__d('P2PMercuryAttachmentSnippetRendererBase.react',['cx','ix','Image.react','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,







l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.






render=function(){

return (c('React').createElement('span',
{className:"uiIconText _3l6h _3_io"},

c('React').createElement(c('Image.react'),
{height:12,
src:i("94348"),
width:12}),

this.props.text));};


function m(){j.apply(this,arguments);}m.propTypes={text:l.node};


f.exports=m;}),null);

/** js/p2p/components/attachment/P2PMercuryAttachmentSnippet.react.js */






__d('P2PMercuryAttachmentSnippet.react',['CurrentUser','MercuryAttachmentSnippetRenderer','P2PMercuryAttachmentSnippetRendererBase.react','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i,








j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;k.prototype.


















render=function(){
var l=c('MercuryAttachmentSnippetRenderer').renderP2PPaymentSnippetText
(c('CurrentUser').getID()===this.props.sender.id,
this.props.sender.name,
this.props.amountWithSymbol,
this.props.status,
c('CurrentUser').getID()===this.props.receiver.id,
this.props.receiver.name);



return (c('React').createElement(c('P2PMercuryAttachmentSnippetRendererBase.react'),{text:l}));};

function k(){h.apply(this,arguments);}k.propTypes={amountWithSymbol:j.string,receiver:j.object,sender:j.object,status:j.number};k.defaultProps={sender:{},receiver:{}};


f.exports=k;}),null);

/** js/p2p/components/attachment/P2PMercuryShareAttachmentSnippet.react.js */







__d('P2PMercuryShareAttachmentSnippet.react',['MercuryShareAttachmentReactShape','P2PMercuryAttachmentSnippet.react','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits





(j,c('React').Component);i=h&&h.prototype;j.prototype.






render=function(){
var k=this.props.attachment?this.props.attachment.target:{};

return (c('React').createElement(c('P2PMercuryAttachmentSnippet.react'),k));};

function j(){h.apply(this,arguments);}j.propTypes={attachment:c('MercuryShareAttachmentReactShape')};


f.exports=j;}),null);

/** js/p2p/components/attachment/P2PPaymentRequestMercuryAttachmentSnippet.react.js */







__d('P2PPaymentRequestMercuryAttachmentSnippet.react',['CurrentUser','MercuryAttachmentSnippetRenderer','P2PMercuryAttachmentSnippetRendererBase.react','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i,








j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;k.prototype.














render=function(){
var l=
c('MercuryAttachmentSnippetRenderer').renderP2PPaymentRequestSnippetText
(c('CurrentUser').getID()===this.props.requester.id,
this.props.requester.name,
this.props.formattedAmount,
this.props.status,
c('CurrentUser').getID()===this.props.requestee.id,
this.props.requestee.name);


return (c('React').createElement(c('P2PMercuryAttachmentSnippetRendererBase.react'),{text:l}));};

function k(){h.apply(this,arguments);}k.propTypes={formattedAmount:j.string.isRequired,requestee:j.object.isRequired,requester:j.object.isRequired,status:j.number.isRequired};


f.exports=k;}),null);

/** js/p2p/components/attachment/P2PPaymentRequestMercuryShareAttachmentSnippet.react.js */







__d('P2PPaymentRequestMercuryShareAttachmentSnippet.react',['MercuryShareAttachmentReactShape','P2PPaymentRequestMercuryAttachmentSnippet.react','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits






(j,c('React').Component);i=h&&h.prototype;j.prototype.






render=function(){
var k=this.props.attachment?this.props.attachment.target:{};


return (c('React').createElement(c('P2PPaymentRequestMercuryAttachmentSnippet.react'),
{formattedAmount:k.amountWithSymbol,
requestee:k.requestee,
requester:k.requester,
status:k.currentStatus}));};


function j(){h.apply(this,arguments);}j.propTypes={attachment:c('MercuryShareAttachmentReactShape')};


f.exports=j;}),null);

/** js/mercury/clients/shared/components/attachments/share/MercuryShareStyleMap.js */






__d('MercuryShareStyleMap',['cx','JSResource','Map','MercuryConfig','MercuryShareAttachmentRenderLocations','StoryAttachmentStyle','emptyFunction','MercuryFallbackShareAttachmentSnippet.react','P2PMercuryShareAttachmentSnippet.react','P2PPaymentRequestMercuryShareAttachmentSnippet.react','MercuryPromotionShareAttachmentSnippet.react','MessengerMomentsAppSnippet.react','MercuryPhotoShareSnippet.react','MercuryVideoShareSnippet.react','MercuryMessageLocationShareAttachmentSnippet.react','MercuryMessageLiveLocationShareAttachmentSnippet.react','MercuryAnimatedShareSnippet.react','MercurySaleGroupProductItemShareSnippet.react','MercuryTransactionInvoiceShareSnippet.react','MercuryPaymentPlatformSnippet.react','MercuryMusicIntegrationAttachmentSnippet.react','MercuryFundraiserShareSnippet.react','MercuryCrisisListingShareSnippet.react','MercuryMessengerInviteShareAttachmentSnippet.react','MessengerLightweightActionSnippet.react'],(function a(b,c,d,e,f,g,h){

'use strict';


















































var i=new (c('Map'))();

i.set
(c('StoryAttachmentStyle').FALLBACK,

{componentName:'MercuryFallbackShareAttachment.react',
componentLoader:c('JSResource')('MercuryFallbackShareAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('MercuryFallbackShareAttachmentSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d"]])});






i.set
(c('StoryAttachmentStyle').EVENT,

{componentName:'MercuryEventShareAttachment.react',
componentLoader:c('JSResource')('MercuryEventShareAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('MercuryFallbackShareAttachmentSnippet.react');}});



i.set
(c('StoryAttachmentStyle').ORION,

{componentName:'P2PMercuryShareAttachmentContainer.react',
componentLoader:c('JSResource')('P2PMercuryShareAttachmentContainer.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('P2PMercuryShareAttachmentSnippet.react');},


cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _3-50"]])});






i.set
(c('StoryAttachmentStyle').ORION_REQUEST,

{componentName:'P2PPaymentRequestMercuryShareAttachmentContainer.react',
componentLoader:
c('JSResource')('P2PPaymentRequestMercuryShareAttachmentContainer.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('P2PPaymentRequestMercuryShareAttachmentSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _3-50"]])});






i.set
(c('StoryAttachmentStyle').RETAIL_RECEIPT,

{componentName:'MNCommerceReceiptMercuryShareAttachment.react',
componentLoader:
c('JSResource')('MNCommerceReceiptMercuryShareAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d"]])});






i.set
(c('StoryAttachmentStyle').RETAIL_CANCELLATION,

{componentName:'MNCommerceCancelationMercuryShareAttachment.react',
componentLoader:
c('JSResource')('MNCommerceCancelationMercuryShareAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d"]])});






i.set
(c('StoryAttachmentStyle').RETAIL_SHIPMENT,

{componentName:'MNCommerceShippingMercuryShareAttachment.react',
componentLoader:
c('JSResource')('MNCommerceShippingMercuryShareAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d"]])});






i.set
(c('StoryAttachmentStyle').RETAIL_SHIPMENT_TRACKING_EVENT,

{componentName:'MNCommerceShippingMercuryShareAttachment.react',
componentLoader:
c('JSResource')('MNCommerceShippingMercuryShareAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d"]])});






i.set
(c('StoryAttachmentStyle').RETAIL_NOW_IN_STOCK,

{componentName:
'MNCommerceProductSubscriptionMercuryShareAttachment.react',
componentLoader:
c('JSResource')('MNCommerceProductSubscriptionMercuryShareAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d"]])});






i.set
(c('StoryAttachmentStyle').RETAIL_PROMOTION,

{componentName:
'MNCommercePromotionMercuryShareAttachment.react',
componentLoader:
c('JSResource')('MNCommercePromotionMercuryShareAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d _28rg"]])});






if(c('MercuryConfig').MessengerGamesGK){
i.set
(c('StoryAttachmentStyle').INSTANT_GAMES_SHARE_MESSAGE,

{componentName:
'MessengerGamesShareAttachment.react',
componentLoader:
c('JSResource')('MessengerGamesShareContainer.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _4niv _205d _28rg"]])});





i.set
(c('StoryAttachmentStyle').INSTANT_GAMES_SHARE_SCORE_MESSAGE,

{componentName:
'MessengerGamesScoreShareContainer.react',
componentLoader:
c('JSResource')('MessengerGamesScoreShareContainer.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _4niv _205d _28rg"]])});}







i.set
(c('StoryAttachmentStyle').RETAIL_ITEM,

{componentName:
'MNCommercePromotionMercuryShareAttachment.react',
componentLoader:
c('JSResource')('MNCommercePromotionMercuryShareAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d _28rg"]])});






i.set
(c('StoryAttachmentStyle').BUSINESS_MESSAGE_ITEMS,

{componentName:
'MNCommercePromotionMercuryShareAttachment.react',
componentLoader:
c('JSResource')('MNCommercePromotionMercuryShareAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){
return (c('MercuryPromotionShareAttachmentSnippet.react'));},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d _28rg"]])});






i.set
(c('StoryAttachmentStyle').H_SCROLL,

{componentName:
'MNCommerceHScrollMessageAttachment.react',
componentLoader:
c('JSResource')('MNCommerceHScrollMessageAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){
return (c('MercuryPromotionShareAttachmentSnippet.react'));},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d _8ka"]])});






i.set
(c('StoryAttachmentStyle').MESSENGER_PLATFORM_COMPACT_ITEM,

{componentName:'MessengerPlatformVerticalListItemAttachment.react',
componentLoader:c('JSResource')('MessengerPlatformVerticalListItemAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('MercuryPromotionShareAttachmentSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_205d _28rg"]])});






i.set
(c('StoryAttachmentStyle').MESSENGER_PLATFORM_COVER_ITEM,

{componentName:'MessengerPlatformVerticalListItemAttachment.react',
componentLoader:c('JSResource')('MessengerPlatformVerticalListItemAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('MercuryPromotionShareAttachmentSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_205d _28rg"]])});






i.set
(c('StoryAttachmentStyle').MESSENGER_PLATFORM_BUTTON_LIST,

{componentName:
'MNCommercePromotionMercuryShareAttachment.react',
componentLoader:
c('JSResource')('MNCommercePromotionMercuryShareAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){
return (c('MercuryPromotionShareAttachmentSnippet.react'));},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_205d _28rg"]])});






i.set
(c('StoryAttachmentStyle').VERTICAL_ATTACHMENT_LIST,

{componentName:
'MessengerPlatformVerticalListAttachment.react',
componentLoader:
c('JSResource')('MessengerPlatformVerticalListAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){
return (c('MercuryPromotionShareAttachmentSnippet.react'));},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_205d"]])});






if(c('MercuryConfig').WWWMessengerTransportationGK){
i.set
(c('StoryAttachmentStyle').RIDE_ORDERED,

{componentName:
'MNTransportationRideConfirmationMercuryAttachment.react',
componentLoader:
c('JSResource')('MNTransportationRideConfirmationMercuryAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('MercuryPromotionShareAttachmentSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d"]])});






i.set
(c('StoryAttachmentStyle').RIDE_RECEIPT,

{componentName:
'MNTransportationRideReceiptMercuryAttachment.react',
componentLoader:
c('JSResource')('MNTransportationRideReceiptMercuryAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('MercuryPromotionShareAttachmentSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d"]])});}







i.set
(c('StoryAttachmentStyle').AIRLINE_UPDATE,

{componentName:
'MNAirlineUpdateMercuryAttachment.react',
componentLoader:
c('JSResource')('MNAirlineUpdateMercuryAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d _8kb"]])});






i.set
(c('StoryAttachmentStyle').AIRLINE_ITINERARY,

{componentName:
'MNAirlineItineraryMercuryAttachment.react',
componentLoader:
c('JSResource')('MNAirlineItineraryMercuryAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d _8kb"]])});






i.set
(c('StoryAttachmentStyle').AIRLINE_CHECKIN_REMINDER,

{componentName:
'MNAirlineCheckInMercuryAttachment.react',
componentLoader:
c('JSResource')('MNAirlineCheckInMercuryAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d _8kb"]])});






i.set
(c('StoryAttachmentStyle').AIRLINE_BOARDING_PASS,

{componentName:
'MNAirlineBoardingPassMercuryAttachment.react',
componentLoader:
c('JSResource')('MNAirlineBoardingPassMercuryAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d _8kb"]])});






if(c('MercuryConfig').WWWMessengerMoneyPennyGK)
i.set
(c('StoryAttachmentStyle').RETAIL_AGENT_ITEM_SUGGESTION,

{componentName:
'MNCommerceAgentItemSuggestionMercuryShareAttachment.react',
componentLoader:
c('JSResource')('MNCommerceAgentItemSuggestionMercuryShareAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d"]])});







var j=
{componentName:'MessengerMomentsAppShareAttachment.react',
componentLoader:
c('JSResource')('MessengerMomentsAppShareAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:function l(){return c('MessengerMomentsAppSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d"]])};




i.set(c('StoryAttachmentStyle').MOMENTS_APP_INVITATION,j);
i.set(c('StoryAttachmentStyle').MOMENTS_APP_PHOTO_REQUEST,j);

i.set
(c('StoryAttachmentStyle').GENIE_MESSAGE,

{componentName:
'GenieMessageShareAttachment.react',
componentLoader:
c('JSResource')('GenieMessageShareAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_2wrf"]]),



getSnippetComponent:
function l(){return c('MercuryFallbackShareAttachmentSnippet.react');}});



i.set
(c('StoryAttachmentStyle').MOVIE_BOT_MOVIE_LIST,

{componentName:
'MovieBotMovieListShareAttachment.react',
componentLoader:
c('JSResource')('MovieBotMovieListShareAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d"]])});






i.set
(c('StoryAttachmentStyle').MOVIE_BOT_MOVIE_SHOWTIME_LIST,

{componentName:
'MovieBotMovieShowtimeListShareAttachment.react',
componentLoader:
c('JSResource')('MovieBotMovieShowtimeListShareAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d"]])});






i.set
(c('StoryAttachmentStyle').SHARE_LARGE_IMAGE,

{componentName:'MercuryShareLargeImageAttachment.react',
componentLoader:c('JSResource')('MercuryShareLargeImageAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:function l(){return c('MercuryPhotoShareSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d"]]),



unwrapInStory:c('emptyFunction').thatReturnsTrue});



i.set
(c('StoryAttachmentStyle').IMAGE_SHARE,

{componentName:'MercuryImageShareAttachment.react',
componentLoader:c('JSResource')('MercuryImageShareAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:function l(){return c('MercuryPhotoShareSnippet.react');},
unwrapInStory:c('emptyFunction').thatReturnsTrue});



i.set
(c('StoryAttachmentStyle').VIDEO,

{componentName:'MercuryVideoShareAttachment.react',
componentLoader:c('JSResource')('MercuryVideoShareAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:function l(){return c('MercuryVideoShareSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_3duc"]]),



unwrapInStory:c('emptyFunction').thatReturnsTrue});



i.set
(c('StoryAttachmentStyle').MESSAGE_LOCATION,

{componentName:'MercuryMessageLocationShareAttachment.react',
componentLoader:
c('JSResource')('MercuryMessageLocationShareAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('MercuryMessageLocationShareAttachmentSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d"]])});






i.set
(c('StoryAttachmentStyle').MESSAGE_LIVE_LOCATION,

{componentName:'MercuryMessageLiveLocationShareAttachment.react',
componentLoader:
c('JSResource')('MercuryMessageLiveLocationShareAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('MercuryMessageLiveLocationShareAttachmentSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d"]])});






i.set
(c('StoryAttachmentStyle').ANIMATED_IMAGE_SHARE,

{componentName:'MercuryAnimatedShareAttachment.react',
componentLoader:c('JSResource')('MercuryAnimatedShareAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:function l(){return c('MercuryAnimatedShareSnippet.react');},
unwrapInStory:c('emptyFunction').thatReturnsFalse});



i.set
(c('StoryAttachmentStyle').GROUP_SELL_PRODUCT_ITEM,

{componentName:'MercurySaleGroupProductItemShareAttachment.react',
componentLoader:
c('JSResource')('MercurySaleGroupProductItemShareAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('MercurySaleGroupProductItemShareSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d"]]),



unwrapInStory:c('emptyFunction').thatReturnsTrue});



i.set
(c('StoryAttachmentStyle').COMMERCE_PRODUCT_ITEM,

{componentName:'MercuryCommerceProductItemShareAttachment.react',
componentLoader:
c('JSResource')('MercuryCommerceProductItemShareAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('MercuryFallbackShareAttachmentSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d"]]),



unwrapInStory:c('emptyFunction').thatReturnsTrue});



i.set
(c('StoryAttachmentStyle').TRANSACTION_INVOICE,

{componentName:'MercuryTransactionInvoiceShareAttachment.react',
componentLoader:
c('JSResource')('MercuryTransactionInvoiceShareAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('MercuryTransactionInvoiceShareSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d"]]),



unwrapInStory:c('emptyFunction').thatReturnsTrue});



i.set
(c('StoryAttachmentStyle').PAYMENT_PLATFORM,

{componentName:'MercuryPaymentPlatformShareAttachment.react',
componentLoader:
c('JSResource')('MercuryPaymentPlatformShareAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:function l(){return c('MercuryPaymentPlatformSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d"]])});






i.set
(c('StoryAttachmentStyle').FINANCIAL_BILL_PAYMENT_REQUEST,

{componentName:
'MNBillPaymentRequestMercuryShareAttachment.react',
componentLoader:
c('JSResource')('MNBillPaymentRequestMercuryShareAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _205d"]])});






i.set
(c('StoryAttachmentStyle').MUSIC_AGGREGATION,

{componentName:'MercuryMusicAttachment.react',
componentLoader:c('JSResource')('MercuryMusicAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('MercuryConfig').MEMI?
c('MercuryMusicIntegrationAttachmentSnippet.react'):
c('MercuryFallbackShareAttachmentSnippet.react');},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,"_5i_d"+


(c('MercuryConfig').MEMI?' '+"_4p_r":'')]])});






i.set
(c('StoryAttachmentStyle').VIDEO_SHARE_YOUTUBE,

{componentName:'MercuryVideoShareYoutubeAttachment.react',
componentLoader:c('JSResource')('MercuryVideoShareYoutubeAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d"]])});






i.set
(c('StoryAttachmentStyle').RTC_CALL_LOG,

{componentName:'MercuryRTCShareAttachment.react',
componentLoader:c('JSResource')('MercuryRTCShareAttachment.react').__setRef('MercuryShareStyleMap')});



i.set
(c('StoryAttachmentStyle').FUNDRAISER_PERSON_FOR_PERSON,

{componentName:'MercuryFundraiserAttachment.react',
componentLoader:c('JSResource')('MercuryFundraiserAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:function l(){return c('MercuryFundraiserShareSnippet.react');}});



i.set
(c('StoryAttachmentStyle').FUNDRAISER_PERSON_TO_CHARITY,

{componentName:'MercuryFundraiserAttachment.react',
componentLoader:c('JSResource')('MercuryFundraiserAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:function l(){return c('MercuryFundraiserShareSnippet.react');}});



i.set
(c('StoryAttachmentStyle').CRISIS_LISTING,

{componentName:'MercuryCrisisListingAttachment.react',
componentLoader:c('JSResource')('MercuryCrisisListingAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:
function l(){return c('MercuryCrisisListingShareSnippet.react');}});



i.set
(c('StoryAttachmentStyle').MESSENGER_TEAM_BOT_SHARE,

{componentName:'MessengerTeamBotShareAttachment.react',
componentLoader:c('JSResource')('MessengerTeamBotShareAttachment.react').__setRef('MercuryShareStyleMap')});



i.set
(c('StoryAttachmentStyle').MESSENGER_INVITE,

{componentName:'MercuryMessengerInviteShareAttachment.react',
componentLoader:c('JSResource')('MercuryMessengerInviteShareAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_3thf"]]),



getSnippetComponent:
function l(){return c('MercuryMessengerInviteShareAttachmentSnippet.react');},
unwrapInStory:c('emptyFunction').thatReturnsTrue});



i.set
(c('StoryAttachmentStyle').PAGES_PLATFORM_BOOKING_MESSAGE,

{componentName:'PagesPlatformBookingMessageAttachment.react',
componentLoader:
c('JSResource')('PagesPlatformBookingMessageAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _3fk6"]]),



unwrapInStory:c('emptyFunction').thatReturnsTrue});



i.set
(c('StoryAttachmentStyle').FRIEND_REQUEST,

{componentName:'MercuryMessengerFriendRequestAttachment.react',
componentLoader:
c('JSResource')('MercuryMessengerFriendRequestAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d"]]),


unwrapInStory:c('emptyFunction').thatReturnsTrue});



i.set
(c('StoryAttachmentStyle').CULTURAL_MOMENT_HOLIDAY_CARD,

{componentName:'MercuryCulturalMomentHolidayCardAttachment.react',
componentLoader:
c('JSResource')('MercuryCulturalMomentHolidayCardAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_3duc"]]),



unwrapInStory:c('emptyFunction').thatReturnsTrue});



i.set
(c('StoryAttachmentStyle').PAGES_PLATFORM_LEAD_GEN,

{componentName:'PagesPlatformLeadGenMercuryShareAttachmentContainer.react',
componentLoader:
c('JSResource')('PagesPlatformLeadGenMercuryShareAttachmentContainer.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_b4_"]]),


unwrapInStory:c('emptyFunction').thatReturnsTrue});



i.set
(c('StoryAttachmentStyle').LIGHTWEIGHT_ACTION,

{componentName:'MessengerLightweightActionAttachment.react',
componentLoader:c('JSResource')('MessengerLightweightActionAttachment.react').__setRef('MercuryShareStyleMap'),
getSnippetComponent:function l(){
return (c('MessengerLightweightActionSnippet.react'));},
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d"]])});






i.set
(c('StoryAttachmentStyle').JOB_SEARCH_JOB_APPLICATION,

{componentName:'JobApplicationAttachment.react',
componentLoader:c('JSResource')('JobApplicationAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _1zrz"]]),



unwrapInStory:c('emptyFunction').thatReturnsTrue});



i.set
(c('StoryAttachmentStyle').EVENT_REMINDER,

{componentName:'MercuryLightweightEventShareAttachment.react',
componentLoader:
c('JSResource')('MercuryLightweightEventShareAttachment.react').__setRef('MercuryShareStyleMap'),
cx:new (c('Map'))

([[c('MercuryShareAttachmentRenderLocations').MESSENGER,
"_5i_d _1z7j"]])});






var k=
{getStyleFactory:function l(m){
if(!m||!m.style_list)
return null;




if(m.style_list[0]===c('StoryAttachmentStyle').ATTACHED_STORY||
m.style_list[0]===c('StoryAttachmentStyle').CULTURAL_MOMENT){
var n=m.subattachments,
o=n&&n.length?
n[0].style_list:
[],
p=o.length?
this._getStyleMapEntry(o):
null,
q=n[0];

if(Array.isArray(o)&&
o.find(function(t){return t===c('StoryAttachmentStyle').VIDEO;})){

var r=
{video_title:m.title,
description:m.description,
source:m.source};

q=Object.assign({},n[0],r);}

if(p&&
p.unwrapInStory&&
p.unwrapInStory())

return {attachment:q,
factory:p};}




var s=this._getStyleMapEntry(m.style_list);
if(!s)
return null;



return {attachment:m,
factory:s};},



_getStyleMapEntry:function l(m){
for(var n=0;n<m.length;n++){
var o=i.get(m[n]);
if(o)
return o;}


return null;}};



f.exports=k;}),null);

/** js/mercury/clients/messenger/components/MessengerErrorBoundary.react.js */







__d('MessengerErrorBoundary.react',['cx','fbt','ErrorBoundary.react','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,





















l=function o(p){return i._({"conversation list":["Could not display conversation list.","541d3a946cc88769c37f65f4de9620ea"],"conversation":["Could not display conversation.","14828ab785f685a7b31c76b881d76eaf"],"composer":["Could not display composer.","966b4256848bac71f6ad8c6391812010"],"conversation information":["Could not display conversation information.","f23005cb98bb6f7bc046c03d42ca493b"],"attachment":["Could not display attachment.","1eb66ab7051c8294741d336c335e2e36"]},

[i['enum'](p,
{'conversation list':'conversation list',
conversation:'conversation',
composer:'composer',
'conversation information':'conversation information',
attachment:'attachment'})]);},




m=function o(p,q){return function(){
return (c('React').createElement('div',{className:c('joinClasses')("_5jpt",q)},
p));};};j=babelHelpers.inherits


(n,c('React').Component);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.












$MessengerErrorBoundary_handleError=function(t,u){

this.props.onHandleError&&this.props.onHandleError(t,u);}.
bind(this),p;}n.prototype.render=function(){var o=this.props,p=o.className,q=o.component,r=babelHelpers.objectWithoutProperties(o,['className','component']);return c('React').createElement(c('ErrorBoundary.react'),babelHelpers['extends']({},r,{fallbackComponent:m(l(q),p),onHandleError:this.$MessengerErrorBoundary_handleError,bigRedBox:true}));};


f.exports=n;}),null);

/** js/mercury/clients/shared/components/attachments/share/MercuryShareAttachment.react.js */






__d('MercuryShareAttachment.react',['cx','BootloadedComponent.react','DOM','Event','MercuryShareAttachmentReactShape','MercuryShareStyleMap','MessengerErrorBoundary.react','React','ReactDOM','MercuryShareAttachmentRenderLocations','emptyFunction','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,















k=c('React').PropTypes;i=babelHelpers.inherits






(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.









































































































$MercuryShareAttachment_onComponentLoad=function(r){
this.$MercuryShareAttachment_handleComponentLoad(r);
c('DOM').scry(c('ReactDOM').findDOMNode(this),'img').forEach(function(s){
var t=c('Event').listen(s,'load',function(){
this.$MercuryShareAttachment_handleComponentLoad(s.height);
t.remove();}.
bind(this));}.
bind(this));}.
bind(this),this.

$MercuryShareAttachment_handleComponentLoad=function(r){
this.props.onComponentLoaded(r);}.
bind(this),n;}l.prototype.componentDidMount=function(){this.$MercuryShareAttachment_handleComponentLoad();};l.prototype.$MercuryShareAttachment_renderMessageBubble=function(){var m=this.props.messageBubble;if(!m)return null;return c('React').cloneElement(m,{className:null,notBubblish:true});};l.prototype.$MercuryShareAttachment_renderComponent=function(m,n){var o=this.$MercuryShareAttachment_renderMessageBubble();if(this.props.location===c('MercuryShareAttachmentRenderLocations').MESSENGER&&!this.props.isSubattachment)n=c('joinClasses')("_52mr _2poz _ui9",(!!o?"_5i_d":'')+(!!o?' '+"_4ikk":''),n);return c('React').createElement('div',{className:n},o,m);};l.prototype.render=function(){var m=c('MercuryShareStyleMap').getStyleFactory(this.props.attachment);if(!m)return null;var n=m.attachment,o=m.factory;return this.$MercuryShareAttachment_renderComponent(c('React').createElement(c('MessengerErrorBoundary.react'),babelHelpers['extends']({},this.props,{component:'attachment'}),c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']({},this.props,{attachment:n,bootloadLoader:o.componentLoader,bootloadPlaceholder:c('React').createElement('div',null),module:o.componentName,onComponentLoad:this.$MercuryShareAttachment_onComponentLoad}))),o.cx&&o.cx.get(this.props.location));};l.propTypes={attachment:c('MercuryShareAttachmentReactShape'),isSponsored:k.bool,isSubattachment:k.bool,isVisible:k.bool,location:k.oneOf(c('MercuryShareAttachmentRenderLocations').getValues()),messageBubble:k.object,messageID:k.string,onComponentLoaded:k.func.isRequired,onSelect:k.func,pageID:k.string,threadID:k.string.isRequired};l.defaultProps={onComponentLoaded:c('emptyFunction')};


f.exports=l;}),null);

/** js/messaging/flowerborder/MessagingFlowerBorderChecker.js */






__d('MessagingFlowerBorderChecker',['MercuryConfig','MercuryMessageCustomizations','MessageBorderType','MessageCustomizationType'],(function a(b,c,d,e,f,g){

'use strict';







var h=
{shouldRenderWithFlowerBorder:function i(j){
return c('MercuryConfig').WWWMessengerFlowerBorderViewer&&
c('MercuryMessageCustomizations').getCustomizationValue
(j,
c('MessageCustomizationType').BORDER)===
c('MessageBorderType').FLOWERS;}};



f.exports=h;}),null);

/** js/mercury/clients/messenger/components/MessengerErrorAttachment.react.js */






__d('MessengerErrorAttachment.react',['cx','fbt','CurrentUser','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k;j=babelHelpers.inherits














(l,c('React').PureComponent);k=j&&j.prototype;


function l(m){
k.constructor.call(this,m);}
l.prototype.

render=function(){
var m=this.props.attachment.error_msg||i._(["This attachment could not be loaded.","975d9e2c4086eb26ecfaa1838984ae10"]);






return (c('React').createElement('div',
{className:"_1o12 _52mr"},

c('React').createElement('div',{className:"_1o13"},
m,
this.$MessengerErrorAttachment_maybeRenderIsForWork())));};



l.prototype.

$MessengerErrorAttachment_maybeRenderIsForWork=function(){
if(!this.props.attachment.error_msg&&
c('CurrentUser').hasWorkUser()&&
!c('CurrentUser').isWorkUser())

return (c('React').createElement('div',null,i._(["It was probably meant for your \u0040workplace account.","03a7953e7c0cc94b51249b0308b6d946"])));








return null;};



f.exports=l;}),null);

/** js/mercury/clients/messenger/components/MessengerFileAttachment.react.js */





__d('MessengerFileAttachment.react',['cx','Link.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.




render=function(){

return (c('React').createElement(c('Link.react'),
{className:"_4pcn _2uf4",

target:'_blank',
href:this.props.attachment.url},
c('React').createElement('div',{className:"_2uf5"}),
this.props.attachment.name));};


function l(){i.apply(this,arguments);}l.propTypes={attachment:k.object.isRequired};


f.exports=l;}),null);

/** js/mercury/clients/messenger/MessengerFromViewerUtils.js */






__d('MessengerFromViewerUtils',['CurrentUser','MercuryIDs'],(function a(b,c,d,e,f,g){

'use strict';






function h(i){
return i.author===
c('MercuryIDs').getParticipantIDFromUserID(c('CurrentUser').getID());}


f.exports=
{isFromViewer:h};}),null);

/** js/mercury/clients/messenger/components/hotlike/MessengerHotLikePreview.react.js */




__d('MessengerHotLikePreview.react',['cx','Animation','EmojiLikeConstants','HotLikeSound','MessengerHotLikePreviewEvents','MessengerHotLikeSVG.react','MessengerHotLikeUtils','MessengerSupportedEmojiUtils','React','ReactDOM','StickerConstants','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,















k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.




































































$MessengerHotLikePreview_setUpRotationAnimation=function(){
this.$MessengerHotLikePreview_rotateAnimation=new (c('Animation'))(c('ReactDOM').findDOMNode(this));
this.$MessengerHotLikePreview_rotateHotLike(-2,2,150,1000);
this.$MessengerHotLikePreview_rotateHotLike(-4,4,100,1000);
this.$MessengerHotLikePreview_rotateHotLike(-10,10,75,1000);
this.$MessengerHotLikePreview_rotateAnimation.go();}.
bind(this),this.

$MessengerHotLikePreview_rotateHotLike=function(r,s,t,u){
var v=Math.floor(u/t),
w=null;
for(var x=0;x<v;x++){
w=x%2?
r:
s;
this.$MessengerHotLikePreview_rotateAnimation.
to('rotateZ',w).
duration(t).
checkpoint();}}.

bind(this),this.

$MessengerHotLikePreview_snapToStickerSize=function(r,s){
var t=s?
c('MessengerHotLikePreviewEvents').FINISH_EMOJI_ANIMATION:
c('MessengerHotLikePreviewEvents').FINISH_ANIMATION;
if(this.$MessengerHotLikePreview_snapped)
return;

this.$MessengerHotLikePreview_snapped=true;
var u=Date.now()-this.props.since,
v=null;

if(this.props.customLike)
v=c('MessengerHotLikeUtils').getEmojiSizeForTime(u);


var w=c('MessengerHotLikeUtils').getStickerIDForTime(u);

c('HotLikeSound').snap(w);
var x=c('MessengerHotLikeUtils').getMetadataForHotLike
(v||w);

this.$MessengerHotLikePreview_rotateAnimation.stop();
var y=30,
z=-10;
if(w===c('StickerConstants').HOT_LIKE_SMALL_STICKER_ID){
y=0;
z=0;}

this.$MessengerHotLikePreview_growthAnimation.
stop().
to('width',x.width*1.2).
to('height',x.height*1.2).
to('rotateZ',y).
duration(100).
checkpoint().
to('width',x.width*.9).
to('height',x.height*.9).
to('rotateZ',z).
duration(100).
checkpoint().
to('width',x.width).
to('height',x.height).
to('rotateZ',0).
duration(100).
ondone(function(){
c('MessengerHotLikePreviewEvents').emit
(t,
r,
w,
v);}).


go();}.
bind(this),this.

$MessengerHotLikePreview_pop=function(r){
c('HotLikeSound').pop();
this.$MessengerHotLikePreview_growthAnimation.
stop().
to('width',0).
to('height',0).
duration(100).
ondone(function(){
c('MessengerHotLikePreviewEvents').emit
(c('MessengerHotLikePreviewEvents').REMOVE,
r);}).


go();}.
bind(this),n;}l.prototype.componentDidMount=function(){this.$MessengerHotLikePreview_subscriptions=new (c('SubscriptionsHandler'))();this.$MessengerHotLikePreview_subscriptions.addSubscriptions(c('MessengerHotLikePreviewEvents').addListener(c('MessengerHotLikePreviewEvents').STOP,this.$MessengerHotLikePreview_snapToStickerSize),c('MessengerHotLikePreviewEvents').addListener(c('MessengerHotLikePreviewEvents').STOP_EMOJI,this.$MessengerHotLikePreview_snapToStickerSize),c('MessengerHotLikePreviewEvents').addListener(c('MessengerHotLikePreviewEvents').POP,this.$MessengerHotLikePreview_pop));c('HotLikeSound').start();this.$MessengerHotLikePreview_growthAnimation=new (c('Animation'))(c('ReactDOM').findDOMNode(this)).to('width',80).to('height',80).duration(3000).go();this.$MessengerHotLikePreview_setUpRotationAnimation();};l.prototype.componentWillUnmount=function(){this.$MessengerHotLikePreview_subscriptions&&this.$MessengerHotLikePreview_subscriptions.release();};l.prototype.render=function(){if(this.props.customLike){var m=this.props.customLike,n=c('MessengerSupportedEmojiUtils').getNewEmojiData(m.emoji,c('EmojiLikeConstants').size.LARGE),o=n?n.url:this.props.customLike.large;if(m.uri)o=m.uri;return c('React').createElement('div',{className:"_4a9g _383m",style:{backgroundImage:'url('+o+')'}});}return c('React').createElement('div',{className:"_4a9g _576q"},c('React').createElement(c('MessengerHotLikeSVG.react'),{color:this.props.customColor}));};l.propTypes={customLike:k.object,since:k.number};


f.exports=l;}),null);

/** js/mercury/clients/messenger/MessengerAttachmentViewer.js */






__d('MessengerAttachmentViewer',['Bootloader','MessagesViewer','React','Run','emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';








var h=

{renderVideo:function i(j){
c('Bootloader').loadModules
(["MessagingVideoViewer.react","messengerForwardAttachmentDialogReact"],
function(k,l){var m=l.comp;
c('MessagesViewer').renderVideo
(c('React').createElement(k,babelHelpers['extends']({},
j,
{forwardDialogComponent:m})));},


'MessengerAttachmentViewer');},



bootstrapWithConfig:function i(j,k){
c('Bootloader').loadModules
(["SpotlightMessagesViewer","messengerForwardAttachmentDialogReact"],
function(l,m){var n=m.comp;
c('MessagesViewer').renderSpotlight
(j,
k,
l,
n);},

'MessengerAttachmentViewer');},



preload:function i(){
c('Run').onAfterLoad(function(){
c('Bootloader').loadModules
(["MessagingVideoViewer.react","SpotlightMessagesViewer","messengerForwardAttachmentDialogReact"],c('emptyFunction'),'MessengerAttachmentViewer');});}};










f.exports=h;}),null);

/** js/mercury/clients/messenger/MessengerPhoto.react.js */






__d('MessengerPhoto.react',['cx','fbt','Image.react','Link.react','MercuryAttachmentType','MessengerSpinner.react','MessengerWebDriverTestIDs','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,












l=c('React').PropTypes,

m=280,
n=480,
o=1800,
p=450;

function q
(u,
v){

if(u.metadata){
if(u.attach_type===c('MercuryAttachmentType').VIDEO)
return v&&u.metadata.large_preview?
u.metadata.large_preview:
u.metadata.inbox_preview;

return v?
u.large_preview_url:
u.preview_url;}

return null;}


function r(u){
var v=window.screen.width>o;
if(u.preview_uploading)
return v&&u.large_preview_url?

{height:u.large_preview_height||n,
src:u.large_preview_url,
width:u.large_preview_width||n,
renderLargePreview:true}:


{height:u.preview_height||m,
src:u.preview_url,
width:u.preview_width||m};


var w=q(u,v);
if(w){
var x=v&&u.metadata.large_size?
u.metadata.large_size:
u.metadata.inbox_size;
return babelHelpers['extends']
({src:w,
renderLargePreview:v},
x);}


if(u.preview_url)
return v&&u.large_preview_url?

{height:u.large_preview_height,
src:u.large_preview_url,
width:u.large_preview_width,
renderLargePreview:true}:


{height:u.preview_height,
src:u.preview_url,
width:u.preview_width};


if(u.media)
return u.media.playable&&u.media.animated_image?babelHelpers['extends']({},

u.media.animated_image_size,
{src:u.media.animated_image}):babelHelpers['extends']({},


u.media.image_size,
{src:u.media.image});


return null;}


function s
(u,
v){

if(u.preview_uploading)
return u.preview_url?0:m;

var w=u.media?
r(u):

{height:u.preview_height,
width:u.preview_width};


return Math.min
(w.height*Math.min(1,p/w.width),
p);}

j=babelHelpers.inherits

(t,c('React').Component);k=j&&j.prototype;function t(){var u,v;for(var w=arguments.length,x=Array(w),y=0;y<w;y++)x[y]=arguments[y];return v=(u=k.constructor).call.apply(u,[this].concat(x)),this.






























































































$MessengerPhoto_onClick=function(z){
z.preventDefault();
var aa=this.props.attachment;
if(this.props.onClick)
this.props.onClick(aa);}.

bind(this),v;}t.prototype.componentDidMount=function(){var u=this.props.onAttachmentLoad;u&&u();};t.prototype.render=function(){var u=this.props,v=u.attachment,w=u.isSingle,x=r(v);if(!x)return null;var y=v.attach_type===c('MercuryAttachmentType').ANIMATED_IMAGE,z=!!this.props.attachment.app_attribution,aa=this.$MessengerPhoto_getImageFromMetadata(x,w&&y,(z?"_mxz":'')+(w&&!z?' '+"_52mr":'')),ba={};if(!y||!w){if(x.src)ba.backgroundImage='url('+x.src+')';if(w){var ca=s(v,this.context);if(ca)ba.minHeight=ca;}}var da=void 0;if(v.preview_uploading)da=c('React').createElement(c('MessengerSpinner.react'),null);var ea=y?c('MessengerWebDriverTestIDs').ANIMATED_IMAGE:null;return c('React').createElement('div',{className:c('joinClasses')(this.props.className,"_4tsk"+(z?' '+"_mxz":'')+(w&&!z?' '+"_52mr":'')+(v.preview_uploading&&!x.src?' '+"_3etv":'')),'data-testid':ea,onClick:this.$MessengerPhoto_onClick,role:'presentation',style:ba},aa,da,c('React').createElement(c('Link.react'),{'aria-label':i._(["Open Photo","f53de8cfbd9b87a7bbb8245e9dd7b889"]),className:"_4tsl",href:x.src},this.props.children));};t.prototype.

$MessengerPhoto_getImageFromMetadata=
function(u,
v,
w){

if(this.props.attachment.preview_uploading&&!u.src)
return null;

if(this.props.isSingle){
var x=
{width:'100%',
maxWidth:'100%'};

x.maxHeight=u.renderLargePreview?
window.screen.height*.7:
window.screen.height*.65;

return (c('React').createElement(c('Image.react'),
{alt:'',
className:c('joinClasses')
(w,

!v?"_5pf5":''),


style:x,
src:u.src}));}



return null;};
t.contextTypes={width:l.number};t.propTypes={attachment:l.object.isRequired,isSingle:l.bool.isRequired,onAttachmentLoad:l.func,onClick:l.func};


f.exports=t;}),null);

/** www/__virtual__/webgraphql/MessengerThreadSharedMediaAfterWebGraphQLQuery.js */






__d("MessengerThreadSharedMediaAfterWebGraphQLQuery",["WebGraphQLQueryHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLQueryHelper").getExports
({docID:"1611092932240778",
queryID:"719742774850735"});}),null);

/** www/__virtual__/webgraphql/MessengerThreadSharedMediaBeforeWebGraphQLQuery.js */






__d("MessengerThreadSharedMediaBeforeWebGraphQLQuery",["WebGraphQLQueryHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLQueryHelper").getExports
({docID:"1268180893260151",
queryID:"393804677650619"});}),null);

/** www/__virtual__/webgraphql/MessengerThreadSharedMediaFindWebGraphQLQuery.js */






__d("MessengerThreadSharedMediaFindWebGraphQLQuery",["WebGraphQLQueryHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLQueryHelper").getExports
({docID:"1597236330294464",
queryID:"728987990612546"});}),null);

/** js/mercury/clients/messenger/components/MessengerSharedMediaReducer.js */






__d('MessengerSharedMediaReducer',['MessengerSharedMediaActions','MessengerThreadSharedMediaHelper','Set'],(function a(b,c,d,e,f,g){

'use strict';



var h=c('MessengerSharedMediaActions').Types;




function i(r,s){

switch(s.type){
case h.LOAD_CURRENT:
var t=r.get('sharedMedia').get(s.threadFBID);
if(t){
var u=t.edges.find
(function(x){return x.node.legacy_attachment_id===s.photoID;});
if(u)
return r;}



var v=r.get('isLoading').get(s.threadFBID);
if(!!v&&v.curr)

return r;

var w=q(r,s.threadFBID,'curr',true);

c('MessengerThreadSharedMediaHelper').search
(s.threadFBID,
s.photoID,
function(x){return c('MessengerSharedMediaActions').currentLoaded(x);});

return w;}

return r;}


function j(r,s){

switch(s.type){
case h.LOAD_MORE_PREVIOUS:
var t=r.get('isLoading').get(s.threadFBID);
if(!!t&&t.prev)

return r;

var u=q(r,s.threadFBID,'prev',true);
if(u===null)
return r;


c('MessengerThreadSharedMediaHelper').loadMorePrevious
(s.threadFBID,
s.afterCursor,
s.first,
function(v){return c('MessengerSharedMediaActions').previousLoaded(v);});

return u;}

return r;}


function k(r,s){

switch(s.type){
case h.LOAD_MORE_LATEST:
var t=r.get('isLoading').get(s.threadFBID);
if(!!t&&t.latest)

return r;

var u=q
(r,s.threadFBID,'latest',true);

if(u===null)
return r;


c('MessengerThreadSharedMediaHelper').loadMoreLatest
(s.threadFBID,
s.beforeCursor,
s.last,
function(v){return c('MessengerSharedMediaActions').latestLoaded(v);});

return u;}

return r;}


function l(r,s){

switch(s.type){
case h.CURRENT_LOADED:
var t=s.data,
u=Object.keys(t)[0],
v=t[u].message_shared_media,
w=v.edges.length,

x=q(r,u,'curr',false);

if(w!==0){
var y=p(r.get('sharedMedia').get(u),v,0),
z=r.get('sharedMedia').set(u,y);
x=x.set('sharedMedia',z);
var aa=v.edges[0];

c('MessengerThreadSharedMediaHelper').loadMorePrevious
(u,
aa.cursor,
10,
function(ba){return c('MessengerSharedMediaActions').previousLoaded(ba);});

c('MessengerThreadSharedMediaHelper').loadMoreLatest
(u,
aa.cursor,
10,
function(ba){return c('MessengerSharedMediaActions').latestLoaded(ba);});}


return x;}

return r;}


function m(r,s){

switch(s.type){
case h.PREVIOUS_LOADED:
var t=s.data,
u=Object.keys(t)[0],
v=t[u].message_shared_media,

w=q(r,u,'prev',false),

x=p(r.get('sharedMedia').get(u),v,1),
y=r.get('sharedMedia').set(u,x);
w=w.set('sharedMedia',y);
return w;}

return r;}


function n(r,s){

switch(s.type){
case h.LATEST_LOADED:
var t=s.data,
u=Object.keys(t)[0],
v=t[u].message_shared_media,

w=q(r,u,'latest',false),

x=p(r.get('sharedMedia').get(u),v,-1),
y=r.get('sharedMedia').set(u,x);
w=w.set('sharedMedia',y);
return w;}

return r;}


function o(r,s){

switch(s.type){
case h.DELETE_PHOTOS:
var t=s.threadFBID,
u=s.photoFBIDs,

v=r.get('sharedMedia').get(t),
w=new (c('Set'))(u.map(function(z){return z.toString();}));
v.edges=v.edges.filter(function(z){
return (!w.has(z.node.legacy_attachment_id));});


var x=r.get('sharedMedia').set(t,v),
y=r.set('sharedMedia',x);
return y;}

return r;}


function p(r,s,t){
var u={};
u.count=s.count;
if(t===1&&r){
var v=r.edges;
u.has_previous_page=r.has_previous_page;
u.has_next_page=s.page_info.has_next_page;
if(s.edges.length>0){
u.edges=v.concat(s.edges);}else 

u.edges=v;}else

if(t===-1&&r){
var w=r.edges;
u.has_previous_page=s.page_info.has_previous_page;
u.has_next_page=r.has_next_page;
if(s.edges.length>0){
u.edges=s.edges.concat(w);}else 

u.edges=w;}else{


u.has_previous_page=s.page_info.has_previous_page;
u.has_next_page=s.page_info.has_next_page;
if(s.edges.length>0)
u.edges=s.edges;}


return u;}


function q
(r,
s,
t,
u){

var v=r.get('isLoading').get(s);
if(v===undefined){
v={};
v[t]=u;}else 

v[t]=u;

var w=r.set
('isLoading',
r.get('isLoading').set(s,v));

return w;}


f.exports=
{currentLoaded:l,
deletePhotos:o,
latestLoaded:n,
loadCurrent:i,
loadMoreLatest:k,
loadMorePrevious:j,
previousLoaded:m};}),null);

/** js/mercury/clients/messenger/components/MessengerSharedMediaState.js */





__d('MessengerSharedMediaState',['immutable'],(function a(b,c,d,e,f,g){

'use strict';var h,i,



j=
{sharedMedia:c('immutable').Map({}),
isLoading:c('immutable').Map({})};h=babelHelpers.inherits


(k,c('immutable').Record(j));i=h&&h.prototype;function k(){h.apply(this,arguments);}




f.exports=k;}),null);

/** js/messaging/MessengerSharedMediaStore.js */






__d('MessengerSharedMediaStore',['MessengerFluxReduceDispatcher','MessengerSharedMediaActions','MessengerSharedMediaReducer','MessengerSharedMediaState','FluxReduceStore'],(function a(b,c,d,e,f,g){

'use strict';var h,i,







j=[].concat
(Object.values(c('MessengerSharedMediaReducer')));h=babelHelpers.inherits


(k,c('FluxReduceStore'));i=h&&h.prototype;k.prototype.

getInitialState=function(){
return new (c('MessengerSharedMediaState'))();};
k.prototype.

reduce=
function(l,
m){

if(m.namespace!==c('MessengerSharedMediaActions').Namespace)
return l;

return j.reduce
(function(n,o){return o(n,m);},
l);};

function k(){h.apply(this,arguments);}


f.exports=new k(c('MessengerFluxReduceDispatcher'));}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerSharedPhotosAlbumViewPhotoReact.js */





__d('messengerSharedPhotosAlbumViewPhotoReact',['bs_curry','React','reactRe'],(function a(b,c,d,e,f,g){

'use strict';





var h=c('reactRe').Component[0],

i=c('reactRe').Component[1],

j=c('reactRe').Component[2],

k=c('reactRe').Component[3],

l=c('reactRe').Component[4],

m=c('reactRe').Component[5],

n=c('reactRe').Component[6],

o=c('reactRe').Component[7],

p="MessengerSharedPhotosAlbumViewPhotoReact";

function q(aa,ba){
var ca=aa[1];
c('bs_curry')._1(ca[2],ca[1]);
return 0;}


function r(aa){
var ba=aa[1];
return c('React').createElement("a",
{className:ba[0],
style:
{backgroundImage:"url("+(ba[3]+")")},

href:"#",
onClick:c('bs_curry')._1(aa[2],q)});}



var s=c('reactRe').Component[8],

t=c('reactRe').Component[9],

u=c('reactRe').Component[10],

v=
[h,
i,
j,
k,
l,
m,
n,
o,
s,
t,
u,
p,
q,
r],


w=c('reactRe').CreateComponent
([p,
m,
o,
h,
k,
i,
j,
l,
n,
r]),


x=w[1];

function y(aa,ba,ca,da){
return c('bs_curry')._1(x,
[aa,
ba,
ca,
da]);}



var z=w[0];

g.MessengerSharedPhotosAlbumViewPhoto=v;
g.comp=z;
g.wrapProps=x;
g.createElement=y;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerSharedPhotosAlbumViewVScrollReact.js */





__d('messengerSharedPhotosAlbumViewVScrollReact',['cx','bs_array','bs_curry','React','reactRe','ReactDOM','Animation','bs_caml_array','bs_caml_builtin_exceptions','MessengerSharedMediaActions','messengerSharedPhotosAlbumViewPhotoReact'],(function a(b,c,d,e,f,g,h){

'use strict';













var i=c('reactRe').Component[10][7],

j=i[1],

k=i[2],

l=i[3],

m=i[5],

n="MessengerSharedPhotosAlbumViewVScrollReact";

function o(){

return [0,
0,
0,
0];}



function p(ja){
var ka=ja[2].length;
if(ka<48){
return c('MessengerSharedMediaActions').loadMorePrevious(ja[3],c('bs_caml_array').caml_array_get(ja[2],ja[2].length-1|0).cursor,48);}else 

return 0;}



function q(ja){
var ka=ja[1];
if(ka){
var la=ka[0];
return +((la.scrollTop+la.clientHeight|0)>=(la.scrollHeight-20|0));}else 

throw c('bs_caml_builtin_exceptions').not_found;}



function r(ja){
var ka=ja[1];
if(ka){
return +(ka[0].scrollTop<=20);}else 

throw c('bs_caml_builtin_exceptions').not_found;}



function s(ja,ka){
var la=ja[4],
ma=ja[1],
na=ma[2].length,
oa=ma[4];
if(q(la)){
if(na<oa&&!ma[0].prev)
c('MessengerSharedMediaActions').loadMorePrevious(ma[3],c('bs_caml_array').caml_array_get(ma[2],ma[2].length-1|0).cursor,48);}else


if(r(la)&&!ma[0].latest)
c('MessengerSharedMediaActions').loadMoreLatest(ma[3],c('bs_caml_array').caml_array_get(ma[2],0).cursor,48);

return 0;}


function t(ja){
var ka=ja[3];
if(ka){
return ka[0].clientHeight;}else 

throw c('bs_caml_builtin_exceptions').not_found;}



function u(ja,ka){
var la=ja[1];
if(la){
new (c('Animation'))(la[0]).to("scrollTop",ka).duration(200).go();
return 0;}else 

return 0;}



function v(ja){
var ka=ja[2];
if(ka){
return u(ja,c('ReactDOM').findDOMNode(ka[0]).offsetTop-70|0);}else 

return 0;}



function w(ja){
var ka=ja[4],
la=ja[2];
p(ja[1]);
var ma=ka[1];
if(ma)
ma[0].addEventListener("scroll",c('bs_curry')._1(la,s));

if(!t(ka)){
var na=function oa(pa,qa){
var ra=pa[4];
if(t(ra)>0){
var sa=ra[0];
if(sa)
clearInterval(sa[0]);

v(ra);}

return 0;};

ka[0]=[setInterval(c('bs_curry')._1(la,na),200)];}

return 0;}


function x(ja){
var ka=ja[4],
la=ka[1];
if(la)
la[0].removeEventListener("scroll",c('bs_curry')._1(ja[2],s));

var ma=ka[0];
if(ma){
clearInterval(ma[0]);
return 0;}else 

return 0;}



function y(ja,ka){
ja[4][1]=[ka];
return 0;}


function z(ja,ka){
ja[4][3]=[ka];
return 0;}


function aa(ja,ka){
ja[4][2]=[ka];
return 0;}


function ba(ja,ka){
return c('bs_array').map(function(la){
var ma=la.node,
na=+(ma.legacy_attachment_id===ja[5]);
return c('bs_curry')._4(c('messengerSharedPhotosAlbumViewPhotoReact').createElement("_3bly",ma.legacy_attachment_id,ja[1],ma.image1.uri),0,na!==0?[c('bs_curry')._1(ka,aa)]:0,[ma.legacy_attachment_id],0);},
ja[2]);}


function ca(ja){
var ka=ja[3];
return c('React').createElement("div",
{ref:c('bs_curry')._1(ka,y),
className:"_3xo8",
onScroll:c('bs_curry')._1(ja[2],s)},
c('React').createElement("div",
{ref:c('bs_curry')._1(ka,z),
className:"_3xoa"},
ba(ja[1],ka)));}


var da=[function(ja){

return [ja.isLoading,
ja.onClick,
ja.sharedPhotos,
ja.threadID,
ja.totalCount,
ja.viewedPhoto];}],



ea=
[j,
k,
l,
m,
n,
200,
48,
6,
20,
70,
o,
p,
q,
r,
s,
t,
u,
v,
w,
x,
y,
z,
aa,
ba,
ca,
da],


fa=c('reactRe').CreateComponent
([n,
o,
m,
w,
l,
j,
k,
x,
da,
ca]),


ga=fa[1];

function ha(ja,ka,la,ma,na,oa){
return c('bs_curry')._1(ga,
[ja,
ka,
la,
ma,
na,
oa]);}



var ia=fa[0];

g.MessengerSharedPhotosAlbumViewVScroll=ea;
g.comp=ia;
g.wrapProps=ga;
g.createElement=ha;}),null);

/** js/mercury/clients/messenger/components/MessengerSharedPhotosAlbumView.react.js */







__d('MessengerSharedPhotosAlbumView.react',['cx','fbt','messengerSharedPhotosAlbumViewVScrollReact','MessengerPhotoViewCloseLink.react','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,

l=c('messengerSharedPhotosAlbumViewVScrollReact').comp,






m=c('React').PropTypes;j=babelHelpers.inherits

(n,c('React').Component);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.








































$MessengerSharedPhotosAlbumView_handleBackOrClose=function(){
this.props.onClick(this.props.viewedPhoto);}.
bind(this),this.

$MessengerSharedPhotosAlbumView_renderHeader=function(){

return (c('React').createElement('div',
{className:"_3bm0 _5l-3",
ref:'header'},
c('React').createElement('div',
{className:"_3bm2",
onClick:this.$MessengerSharedPhotosAlbumView_handleBackOrClose,
role:'button',
tabIndex:'0'},
c('React').createElement('div',{className:"_3bm3"}),i._(["Back to photo","65eca05108e2755c37c192227bace50c"])),




c('React').createElement('div',{className:"_3bm4"},i._(["Shared Photos","53551462cae32e2e0347939975cf516a"])),




c('React').createElement(c('MessengerPhotoViewCloseLink.react'),{onClick:this.props.onCloseSharedPhotos})));}.


bind(this),p;}n.prototype.render=function(){return c('React').createElement('div',{className:"_3bl- _5l-3",ref:'window'},this.$MessengerSharedPhotosAlbumView_renderHeader(),c('React').createElement(l,{isLoading:this.props.isLoading,onClick:this.props.onClick,sharedPhotos:this.props.sharedPhotos,threadID:this.props.threadID,totalCount:this.props.totalCount,viewedPhoto:this.props.viewedPhoto}));};n.propTypes={onClick:m.func.isRequired,onCloseSharedPhotos:m.func.isRequired,sharedPhotos:m.arrayOf(m.object).isRequired,totalCount:m.number.isRequired,viewedPhoto:m.string.isRequired,threadID:m.string.isRequired,isLoading:m.object.isRequired};


f.exports=n;}),null);

/** js/mercury/clients/messenger/components/MessengerSharedPhotosAlbumViewContainer.react.js */






__d('MessengerSharedPhotosAlbumViewContainer.react',['FluxContainer','MessengerSharedMediaStore','React','MessengerSharedPhotosAlbumView.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i,







j=c('React').PropTypes;h=babelHelpers.inherits



(k,c('React').PureComponent);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.














state=
{edges:[],
count:0,
isLoading:{}},m;}k.


getStores=function(){
return [c('MessengerSharedMediaStore')];};
k.

calculateState=function(l,m){
var n=c('MessengerSharedMediaStore').getState(),
o=n.sharedMedia;

return {edges:o.get(m.threadID).edges,
count:o.get(m.threadID).count,
isLoading:n.isLoading.get(m.threadID)};};

k.prototype.

render=function(){
if(this.state.edges.length===0)
return null;



return (c('React').createElement(c('MessengerSharedPhotosAlbumView.react'),
{onClick:this.props.onClick,
onCloseSharedPhotos:this.props.onCloseSharedPhotos,
sharedPhotos:this.state.edges,
totalCount:this.state.count,
viewedPhoto:this.props.viewedPhoto,
threadID:this.props.threadID,
isLoading:this.state.isLoading}));};


k.propTypes={onClick:j.func.isRequired,onCloseSharedPhotos:j.func.isRequired,viewedPhoto:j.string.isRequired,threadID:j.string};


f.exports=c('FluxContainer').create
(k,
{withProps:true});}),null);

/** js/mercury/clients/messenger/components/MessengerPhotoInfoDialog.react.js */







__d('MessengerPhotoInfoDialog.react',['cx','fbt','MessengerEnvironment','messengerContactImageReact','MessengerDialog.react','MessengerDialogButton.react','MessengerDialogHeader.react','MessengerDialogTitle.react','messengerDialogsRe','MessengerSpinner.react','MercuryIDs','MercuryTimestamp','MercuryParticipants','React','Relay','RelayQL','XUIDialog.react','XUIDialogHeader.react','XUIDialogHeaderTitle.react'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,


l=c('messengerContactImageReact').comp,



















m=c('React').PropTypes,

n=54;j=babelHelpers.inherits

(o,c('React').Component);k=j&&j.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=k.constructor).call.apply(p,[this].concat(s)),this.























































































































$MessengerPhotoInfoDialog_renderCameraSection=function(){
var u=this.props.fullMedia.exif_data,
v='';
if(u){
if(u.aperture)
v=u.aperture+' ';

if(u.focal_length){
var w=u.focal_length.split('/'),
x=parseInt(w[0],10)/(parseInt(w[1],10)||1);
v+=x+'mm ';}

if(u.iso)
v+='ISO '+u.iso;}


if(!v.length)
return null;


return (c('React').createElement('div',{className:"_2zn1"},
c('React').createElement('div',{className:"_2zn2"},i._(["Camera","5ac0eeb14d91f337c5f2066b6afbcb31"])),




c('React').createElement('div',{className:"_2zn4"},
c('React').createElement('div',{className:"_2zn5"},
u.model||'Camera'),

c('React').createElement('div',{className:"_2zn6"},
v))));}.




bind(this),this.

$MessengerPhotoInfoDialog_renderDetailsSection=function(){
var u=this.props.fullMedia,
v='';
if(u.filesize>1e+06){
v=(u.filesize/1e+06).toFixed(2)+'MB';}else
if(u.filesize>1000){
v=(u.filesize/1000).toFixed(2)+'KB';}else
if(u.filesize>0)
v=u.filesize+'B';


var w=u.__typename==='MessageImage'?
(u.original_dimensions.x*u.original_dimensions.y/
1e+06).toFixed(2)+'MP':
'';

return (c('React').createElement('div',{className:"_2zn1"},
c('React').createElement('div',{className:"_2zn2"},i._(["Details","76b93ffa3159f3fdc9d3689c3f7bcbd3"])),




c('React').createElement('div',{className:"_2zn4"},
c('React').createElement('div',{className:"_2zn5"},
u.filename),

c('React').createElement('div',{className:"_2zn6"},
w+' '+u.original_dimensions.x+' x '+
u.original_dimensions.y+' '+v))));}.




bind(this),this.

$MessengerPhotoInfoDialog_handleDone=function(event){
event.preventDefault();
this.props.showHeader&&this.props.showHeader();
c('messengerDialogsRe').removeDialog();}.
bind(this),this.

$MessengerPhotoInfoDialog_handleToggle=function(u){
if(!u){
this.props.showHeader&&this.props.showHeader();
this.props.closeInfo();}}.

bind(this),q;}o.prototype.render=function(){if(!this.props.fullMedia)return null;return c('MessengerEnvironment').messengerui?this.$MessengerPhotoInfoDialog_renderMessengerInfoDialog():this.$MessengerPhotoInfoDialog_renderChatInfoDialog();};o.prototype.$MessengerPhotoInfoDialog_renderMessengerInfoDialog=function(){var p=this.props.fullMedia;return c('React').createElement(c('MessengerDialog.react'),{onToggle:this.$MessengerPhotoInfoDialog_handleToggle,ref:'dialog',type:'default',width:504},c('React').createElement(c('MessengerDialogHeader.react'),null,c('React').createElement(c('MessengerDialogTitle.react'),null,i._(["Info","11c685d0d7c0a12e9e195ef5e2109a2a"])),c('React').createElement(c('MessengerDialogButton.react'),{action:'cancel',label:i._(["Done","f0d8e0610b180f132ce3403f181aed4e"]),onClick:this.$MessengerPhotoInfoDialog_handleDone,type:'primary'})),c('React').createElement('div',{className:"_2zn1"},c('React').createElement('div',{className:"_2zn2"},i._(["Uploaded by","51ef9ab4cf1828a8e8dda3a63a220dc6"])),c('React').createElement('div',{className:"_2zn4"},c('React').createElement('div',{className:"_2zn5"},p.creator.name),c('React').createElement('div',{className:"_2zn6"},c('MercuryTimestamp').getPreciseTimestamp(p.creation_time*1000))),c('React').createElement('div',{className:"_2zn7"},this.showProfilePic())),this.$MessengerPhotoInfoDialog_renderDetailsSection(),this.$MessengerPhotoInfoDialog_renderCameraSection());};o.prototype.$MessengerPhotoInfoDialog_renderChatInfoDialog=function(){var p=this.props.fullMedia;return c('React').createElement(c('XUIDialog.react'),{onToggle:this.$MessengerPhotoInfoDialog_handleToggle,shown:this.props.infoOpen,ref:'dialog',type:'serif',width:504},c('React').createElement(c('XUIDialogHeader.react'),null,c('React').createElement(c('XUIDialogHeaderTitle.react'),null,i._(["Info","11c685d0d7c0a12e9e195ef5e2109a2a"]))),c('React').createElement('div',{className:"_2zn1"},c('React').createElement('div',{className:"_2zn2"},i._(["Uploaded by","51ef9ab4cf1828a8e8dda3a63a220dc6"])),c('React').createElement('div',{className:"_2zn4"},c('React').createElement('div',{className:"_2zn5"},p.creator.name),c('React').createElement('div',{className:"_2zn6"},c('MercuryTimestamp').getPreciseTimestamp(p.creation_time*1000))),c('React').createElement('div',{className:"_2zn7"},this.showProfilePic())),this.$MessengerPhotoInfoDialog_renderDetailsSection(),this.$MessengerPhotoInfoDialog_renderCameraSection());};o.prototype.

showProfilePic=function(){
var p=this.props.fullMedia;
if(!p){
return c('React').createElement(c('MessengerSpinner.react'),null);}else{

var q=c('MercuryIDs').getParticipantIDFromUserID(p.creator.id),
r=c('MercuryParticipants').getNow(q);

if(r)

return (c('React').createElement(l,
{isMessengerUser:r.is_messenger_user,
size:n,
src:
r.big_image_src||
r.image_src}));




return c('React').createElement(c('MessengerSpinner.react'),null);}};

o.propTypes={closeInfo:m.func,fullMedia:m.object,infoOpen:m.bool,photoID:m.string,showHeader:m.func};


f.exports=c('Relay').createContainer(o,
{fragments:
{fullMedia:function p(q){return function(){return {children:[{fieldName:'__typename',kind:'Field',metadata:{isRequisite:true},type:'String'},{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{children:[{fieldName:'creation_time',kind:'Field',metadata:{},type:'Time'},{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'name',kind:'Field',metadata:{},type:'String'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'creator',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isAbstract:true},type:'Actor'},{fieldName:'filename',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'x',kind:'Field',metadata:{},type:'Float'},{fieldName:'y',kind:'Field',metadata:{},type:'Float'}],fieldName:'original_dimensions',kind:'Field',metadata:{canHaveSubselections:true},type:'Vect2'},{fieldName:'filesize',kind:'Field',metadata:{},type:'Int'},{children:[{fieldName:'iso',kind:'Field',metadata:{},type:'Int'},{fieldName:'aperture',kind:'Field',metadata:{},type:'String'},{fieldName:'focal_length',kind:'Field',metadata:{},type:'String'},{fieldName:'model',kind:'Field',metadata:{},type:'String'}],fieldName:'exif_data',kind:'Field',metadata:{canHaveSubselections:true},type:'MessageImageExifData'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{},name:'MessageImage',type:'MessageImage'},{children:[{fieldName:'creation_time',kind:'Field',metadata:{},type:'Time'},{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'name',kind:'Field',metadata:{},type:'String'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'creator',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isAbstract:true},type:'Actor'},{fieldName:'filename',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'x',kind:'Field',metadata:{},type:'Float'},{fieldName:'y',kind:'Field',metadata:{},type:'Float'}],fieldName:'original_dimensions',kind:'Field',metadata:{canHaveSubselections:true},type:'Vect2'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{},name:'MessageVideo',type:'MessageVideo'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{isAbstract:true},name:'MessengerPhotoInfoDialog_react_FullMediaRelayQL',type:'Node'};}();}}});}),null);

/** js/mercury/clients/messenger/routes/SpotlightMessagesViewerContainerRoute.js */






__d('SpotlightMessagesViewerContainerRoute',['RelayRoute','RelayQL'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits




(j,c('RelayRoute'));i=h&&h.prototype;function j(){h.apply(this,arguments);}j.
routeName='SpotlightMessagesViewerContainerRoute';j.
paramDefinition=
{photoID:
{type:'String',
required:true}};j.


queries=
{fullMedia:function k(l){return function(m){return {calls:[{kind:'Call',metadata:{type:'ID!'},name:'id',value:{kind:'CallVariable',callVariableName:'photoID'}}],children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},c('RelayQL').__frag(m)]),fieldName:'node',kind:'Query',metadata:{isAbstract:true,identifyingArgName:'id',identifyingArgType:'ID!'},name:'SpotlightMessagesViewerContainerRoute',type:'Node'};}


(l.getFragment('fullMedia'));}};






f.exports=j;}),null);

/** js/mercury/clients/messenger/components/MessengerPhotoInfoDialogContainer.react.js */







__d('MessengerPhotoInfoDialogContainer.react',['MessengerPhotoInfoDialog.react','RelayRootContainer','SpotlightMessagesViewerContainerRoute','React'],(function a(b,c,d,e,f,g){

'use strict';







var h=c('React').PropTypes,

i=c('React').createClass({displayName:'MessengerPhotoInfoDialogContainer',

proptypes:
{photoID:h.string.isRequired,
showHeader:h.func},


render:function j(){
var k=new (c('SpotlightMessagesViewerContainerRoute'))
({photoID:this.props.photoID});


return (c('React').createElement(c('RelayRootContainer'),
{Component:c('MessengerPhotoInfoDialog.react'),
route:k,
renderFetched:function(l){
return (c('React').createElement(c('MessengerPhotoInfoDialog.react'),babelHelpers['extends']({},
l,
{closeInfo:this.props.closeInfo,
photoID:this.props.photoID,
infoOpen:this.props.infoOpen,
showHeader:this.props.showHeader})));}.bind(this)}));}});







f.exports=i;}),null);

/** js/mercury/clients/messenger/components/MessengerPhotoViewBottomBar.react.js */






__d('MessengerPhotoViewBottomBar.react',['cx','React'],(function a(b,c,d,e,f,g,h){

'use strict';





var i=function j(k){

return (c('React').createElement('div',
{className:"_51an _50-m _16zz"},

k.children));};




f.exports=i;}),null);

/** js/mercury/clients/messenger/components/MessengerPhotoViewHScroll.react.js */






__d('MessengerPhotoViewHScroll.react',['cx','Animation','MessengerSharedPhoto.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,







k=c('React').PropTypes,

l=200,
m=80;i=babelHelpers.inherits








(n,c('React').Component);j=i&&i.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=j.constructor).call.apply(o,[this].concat(r)),this.


$MessengerPhotoViewHScroll_animation=null,p;}n.prototype.

componentDidMount=function(){
this.$MessengerPhotoViewHScroll_scrollToCurrent();};
n.prototype.

componentDidUpdate=function(){
this.$MessengerPhotoViewHScroll_scrollToCurrent();};
n.prototype.

componentWillUnmount=function(){
this.$MessengerPhotoViewHScroll_animation&&this.$MessengerPhotoViewHScroll_animation.stop();
this.$MessengerPhotoViewHScroll_animation=null;};
n.prototype.

render=function(){
var o=this.props.sharedPhotos,
p=o.reduce(function(r,s){
var t=s.node.image1===null?
s.node.image:
s.node.image1;
if(t)
r.push
(c('React').createElement('div',
{className:"_4dy9",
key:s.node.legacy_attachment_id},
c('React').createElement(c('MessengerSharedPhoto.react'),
{className:"_42rl"+


(this.props.photoID!==s.node.legacy_attachment_id?' '+"_q1a":''),

fbid:s.node.legacy_attachment_id,
onClick:this.props.onScroll,
uri:t.uri})));




return r;}.
bind(this),[]),

q=(this.props.width-m)/2;

return (c('React').createElement('div',
{className:"_463g"},
c('React').createElement('div',
{className:"_463h",
ref:'childContainer'},
c('React').createElement('div',
{className:"_463j",
style:{paddingLeft:q,paddingRight:q},
ref:'scrollable'},
p))));};




n.prototype.

$MessengerPhotoViewHScroll_scrollToCurrent=function(){
var o=this.refs.childContainer?
this.refs.childContainer.scrollLeft:
0,
p=this.props.sharedPhotos.findIndex
(function(r){return r.node.legacy_attachment_id===this.props.photoID;}.bind(this)),

q=p*m;

if(!this.$MessengerPhotoViewHScroll_animation)
this.$MessengerPhotoViewHScroll_animation=new (c('Animation'))(this.refs.childContainer);

this.$MessengerPhotoViewHScroll_animation.
from('scrollLeft',o).
to('scrollLeft',q).
duration(l).
go();};



f.exports=n;}),null);

/** js/mercury/clients/messenger/components/MessengerPhotoViewHeader.react.js */







__d('MessengerPhotoViewHeader.react',['cx','fbt','MessagingForwardingButtonNUX.react','MessengerActions','MessengerPhotoInfoDialogContainer.react','React','SpotlightViewerBottomBarLink','MessengerPhotoViewCloseLink.react'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,











l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').PureComponent);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.


































$MessengerPhotoViewHeader_showForwardDialog=function(){
if(this.refs.forwardNUX)
this.refs.forwardNUX.close();

this.props.showForwardDialog&&this.props.showForwardDialog();}.
bind(this),this.

$MessengerPhotoViewHeader_renderCloseButton=function(){

return (c('React').createElement(c('MessengerPhotoViewCloseLink.react'),{onClick:this.props.onClose}));}.

bind(this),o;}m.prototype.render=function(){return c('React').createElement('div',{className:"_51an _50-m _3c1i _5l-3",role:'banner'},this.$MessengerPhotoViewHeader_renderLeftButtons(),this.$MessengerPhotoViewHeader_renderCloseButton());};m.prototype.

$MessengerPhotoViewHeader_renderLeftButtons=function(){
var n=void 0,
o=void 0;
if(!this.props.disableForward){
n=
c('React').createElement(c('SpotlightViewerBottomBarLink'),
{className:"_3c1o",
onClick:this.$MessengerPhotoViewHeader_showForwardDialog,
ref:'forwardButton'},
c('React').createElement('div',
{className:"_2msr _3oo2"}),i._(["Forward","1d687903a24091ef042e649bf13338ed"]));







o=
c('React').createElement(c('MessagingForwardingButtonNUX.react'),
{contextRef:function(){return this.refs.forwardButton;}.bind(this),
ref:'forwardNUX'},i._(["Send this image to other people in separate messages.","fed69b0792a0d6d5a4362024a9b4ff8b"]));}








return (c('React').createElement('div',
{key:'buttonsContainer',
ref:'buttons'},
c('React').createElement(c('SpotlightViewerBottomBarLink'),
{ajaxify:this.props.url,
className:"_3c1o",
rel:'async'},
c('React').createElement('div',
{className:"_3ooo _2msr"}),i._(["Download","873c2f2695dc32461d788166895e3dd7"])),






n,
o,
c('React').createElement(c('SpotlightViewerBottomBarLink'),
{className:"_3c1o",
href:'#',
onClick:this.props.openInfo,
ref:'moreInfo'},
c('React').createElement('div',
{className:"_3c1k _2msr"}),i._(["Info","c4d34b381863ed7d99243aa43061217c"]))));};








m.propTypes={disableForward:l.bool,onClose:l.func,openInfo:l.func,photoID:l.string,showForwardDialog:l.func,url:l.object};


f.exports=m;}),null);

/** www/__virtual__/x/XMessagingVideoAttachmentController.js */



__d("XMessagingVideoAttachmentController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/mercury\/attachments\/video\/",{video_id:{type:"String",required:true},video_container_id:{type:"String",required:true},width:{type:"Int",required:true},height:{type:"Int",required:true},start_muted:{type:"Bool",defaultValue:false},no_fullscreen:{type:"Bool",defaultValue:false},load_player_controller:{type:"Bool",defaultValue:false},hide_controls_on_finish:{type:"Bool",defaultValue:false},is_share:{type:"Bool",defaultValue:false},render_play_button:{type:"Bool",defaultValue:false},start_timestamp:{type:"Int",defaultValue:0}});}),

null);

/** js/mercury/clients/messenger/components/MessengerVideoPlayer.react.js */






__d('MessengerVideoPlayer.react',['cx','ActorURI','AsyncRequest','BackgroundImage.react','Event','FullScreen','MessengerSpinner.react','React','VideoPlayerReason','VideoPlayerStates','Vector','XMessagingVideoAttachmentController','SpotlightMercurySharedMediaViewer.react','SubscriptionsHandler','getFullScreenElement','guid','joinClasses','setImmediate'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,





















k=c('React').PropTypes,

l="_ox1";i=babelHelpers.inherits











(m,c('React').Component);j=i&&i.prototype;

































function m(n){
j.constructor.call(this,n);this.$MessengerVideoPlayer_shouldAutoplay=true;this.$MessengerVideoPlayer_requests=[];this.$MessengerVideoPlayer_stopPos=-1;this.$MessengerVideoPlayer_stopAutoplay=false;this.$MessengerVideoPlayer_wasPlaying=false;this.





















































































































































































$MessengerVideoPlayer_onClick=function(o){
if(!this.props.onClick||!this.isVideoClicked(o))
return;

o.preventDefault();
this.pause(c('VideoPlayerReason').USER);
this.props.onClick&&this.props.onClick();}.
bind(this);this.

$MessengerVideoPlayer_onRightClick=function(o){
if(!this.isRightClick(o))
return;

o.stopPropagation();
o.preventDefault();

c('setImmediate')(function(){
this.props.onSelect&&this.props.onSelect();}.
bind(this));}.
bind(this);this.

$MessengerVideoPlayer_onFocus=function(){
if(!this.$MessengerVideoPlayer_shouldAutoplay||this.state.forcePause)
return;

if(this.$MessengerVideoPlayer_wasPlaying){
this.play();
this.$MessengerVideoPlayer_wasPlaying=false;}}.

bind(this);this.

$MessengerVideoPlayer_onBlur=function(){
if(!this.$MessengerVideoPlayer_shouldAutoplay||
this.state.forcePause||
!(this.state.playerAPI&&this.state.playerAPI.isMuted()))
return;

this.$MessengerVideoPlayer_wasPlaying=
!!this.state.playerAPI&&
this.state.playerAPI.isState(c('VideoPlayerStates').PLAYING);
this.pause();}.
bind(this);this.state={playerAPI:null,forcePause:false};this.$MessengerVideoPlayer_domID=c('guid')();if(this.props.isInThread){this.listeners=new (c('SubscriptionsHandler'))();this.listeners.addSubscriptions(c('Event').listen(window,'blur',this.$MessengerVideoPlayer_onBlur),c('Event').listen(window,'focus',this.$MessengerVideoPlayer_onFocus));}}m.prototype.shouldComponentUpdate=function(n){var o=document.getElementById(this.$MessengerVideoPlayer_domID.toString()),p=c('FullScreen').isFullScreen();if(o!=null&&p&&o.children[0].children[0]===c('getFullScreenElement')())return false;var q=!!(n.stageDimensions&&n.stageDimensions!==this.props.stageDimensions);if(q){this.$MessengerVideoPlayer_stopPos=this.getCurrentTimePosition();this.$MessengerVideoPlayer_stopAutoplay=!this.isState(c('VideoPlayerStates').PLAYING);}return !this.props.videoData||n.videoData.id!==this.props.videoData.id||q;};m.prototype.componentWillReceiveProps=function(n){if(!this.$MessengerVideoPlayer_shouldAutoplay)return;if(this.props.isInThread&&n.isVisible!==this.props.isVisible)n.isVisible&&!this.state.forcePause?this.play():this.pause();};m.prototype.componentDidMount=function(){if(this.props.videoData)this.$MessengerVideoPlayer_loadVideoPlayer();};m.prototype.componentDidUpdate=function(){this.$MessengerVideoPlayer_requests.forEach(function(n){return n.abandon();});this.$MessengerVideoPlayer_requests=[];if(this.props.videoData)this.$MessengerVideoPlayer_loadVideoPlayer();};m.prototype.componentWillUnmount=function(){this.pause(c('VideoPlayerReason').UNLOADED);this.seek(0);this.$MessengerVideoPlayer_requests.forEach(function(n){return n.abandon();});this.listeners&&this.listeners.release();if(this.state.playerAPI)this.state.playerAPI.detachRootNode();};m.prototype.isVideoLoaded=function(){var n=!!this.state.playerAPI;!n;if(this.isState(c('VideoPlayerStates').FALLBACK))return false;return n;};m.prototype.isVideoClicked=function(n){if(n.target instanceof HTMLElement)return n.target.classList.contains(l);return false;};m.prototype.isRightClick=function(n){n=n||window.event;return n.button===2;};m.prototype.play=function(n){if(!this.isVideoLoaded())return;if(this.state.playerAPI)this.state.playerAPI.play(n);};m.prototype.pause=function(n){if(!this.isVideoLoaded())return;if(this.state.playerAPI)this.state.playerAPI.pause(n);};m.prototype.seek=function(n){if(!this.isVideoLoaded())return;if(this.state.playerAPI)this.state.playerAPI.seek(n);};m.prototype.getCurrentTimePosition=function(){return this.isVideoLoaded()&&this.state.playerAPI?this.state.playerAPI.getCurrentTimePosition():-1;};m.prototype.render=function(){var n=this.props.videoData,o=c('React').createElement('div',{ref:'placeholder'},c('React').createElement(c('MessengerSpinner.react'),{color:'blue',size:c('MessengerSpinner.react').Sizes.LARGE})),p={};if(n&&n.url){var q=n.original_dimensions;p.backgroundImage='url('+n.url+')';o=c('React').createElement('div',{ref:'placeholder'},c('React').createElement(c('BackgroundImage.react'),{className:this.props.className,width:q.x,height:q.y,loadingIndicatorStyle:'large',backgroundSize:'cover',ref:'placeholder',style:p,src:n.url}));}return c('React').createElement('div',{className:c('joinClasses')(this.props.className,"_4-od"),id:this.$MessengerVideoPlayer_domID,onClick:this.$MessengerVideoPlayer_onClick,onMouseDown:this.$MessengerVideoPlayer_onRightClick,role:'button',style:p,tabIndex:'0'},o);};m.prototype.

$MessengerVideoPlayer_loadVideoPlayer=function(){
var n=this.props.videoData;
if(n){
var o=n.original_dimensions;
if(this.props.stageDimensions)
o=
c('SpotlightMercurySharedMediaViewer.react').getImageDimensionsForStage
(new (c('Vector'))
(n.original_dimensions.x,
n.original_dimensions.y),

this.props.stageDimensions);



var p=c('XMessagingVideoAttachmentController').getURIBuilder().
setString('video_id',n.legacy_attachment_id).
setString('video_container_id',this.$MessengerVideoPlayer_domID).
setInt('width',o.x).
setInt('height',o.y).
setInt
('start_timestamp',
this.$MessengerVideoPlayer_stopPos>0?Math.round(this.$MessengerVideoPlayer_stopPos):0).

setBool('start_muted',n.start_muted).
setBool('no_fullscreen',n.no_fullscreen).
setBool('load_player_controller',true).
setBool('hide_controls_on_finish',n.hide_controls_on_finish).
setBool('is_share',n.is_share).
setBool('render_play_button',this.props.isInThread).
getURI(),

q=this.props.attachment;
if(q&&q.metadata&&q.metadata.pageid)
p=c('ActorURI').create(p,q.metadata.pageid);


var r=new (c('AsyncRequest'))();
this.$MessengerVideoPlayer_requests.push(r);
r.setMethod('GET').
setStatusElement(this.refs.placeholder).
setURI(p).
setRelativeTo(this).
setReadOnly(true).
setHandler(function(s){}).
send();}};

m.prototype.

$MessengerVideoPlayer_onStateChange=function(){
if(this.props.isVisible&&this.isState(c('VideoPlayerStates').FINISHED)){
this.seek(0);
this.play(c('VideoPlayerReason').LOOP);}else
if(this.props.isVisible&&
this.isState(c('VideoPlayerStates').PAUSED)&&
!this.$MessengerVideoPlayer_wasPlaying){


this.setState({forcePause:true});}else
if(this.isState(c('VideoPlayerStates').PLAYING))

this.setState({forcePause:false});};

m.prototype.

onVideoLoaded=function(){
if(!this.$MessengerVideoPlayer_shouldAutoplay)
return;


this.state.playerAPI&&this.state.playerAPI.addListener
('stateChange',
function(){return this.$MessengerVideoPlayer_onStateChange();}.bind(this));

if(this.props.isVisible&&!this.$MessengerVideoPlayer_stopAutoplay&&!this.state.forcePause){
this.play(c('VideoPlayerReason').AUTOPLAY);}else 

this.pause();

this.$MessengerVideoPlayer_stopPos=-1;
this.$MessengerVideoPlayer_stopAutoplay=false;};
m.prototype.

isState=function(n){
return !!(this.state.playerAPI&&this.state.playerAPI.isState(n));};
m.propTypes={attachment:k.object,className:k.string,isInThread:k.bool,isVisible:k.bool,stageDimensions:k.instanceOf(c('Vector')),videoData:k.object,onClick:k.func,onSelect:k.func};m.


invokeVideoLoaded=
function(n,
o,
p){

n.$MessengerVideoPlayer_shouldAutoplay=p;
if(o.isState(c('VideoPlayerStates').LOADING)){
n.stateChangeListener=o.addListener
('stateChange',
function(){
if(!o.isState(c('VideoPlayerStates').LOADING)){
if(n.state&&n.state.playerAPI)
return;

n.setState
({playerAPI:o},
n.onVideoLoaded);
if(n.stateChangeListener)
n.stateChangeListener.remove();}});}else 





n.setState({playerAPI:o},n.onVideoLoaded);};




f.exports=m;}),null);

/** js/mercury/clients/messenger/components/SpotlightMessagesViewerPagers.react.js */






__d('SpotlightMessagesViewerPagers.react',['cx','LeftRight.react','Link.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';







var i=function j(k){

return (c('React').createElement(c('LeftRight.react'),null,
c('React').createElement(c('Link.react'),
{className:"_322u"+

(!k.disablePrevArrow?' '+"_2bbb":'')+(' '+"_50-m")},


c('React').createElement('div',{className:
(!k.disablePrevArrow?"_4ksl":'')+

(!k.disablePrevArrow?' '+"_4ksm":'')})),


c('React').createElement(c('Link.react'),
{className:"_322u"+

(!k.disableNextArrow?' '+"_2bbc":'')+(' '+"_50-m")},


c('React').createElement('div',{className:
(!k.disableNextArrow?"_4ksl":'')+

(!k.disableNextArrow?' '+"_4kso":'')}))));};






f.exports=i;}),null);

/** www/__virtual__/x/XMessagingPhotoDownloadController.js */



__d("XMessagingPhotoDownloadController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/mercury\/attachments\/photo\/",{photo_id:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XMessagingShareAttachmentDialogController.js */



__d("XMessagingShareAttachmentDialogController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/mercury\/attachments\/share\/dialog\/",{__asyncDialog:{type:"Int"}});}),

null);

/** js/messaging/SpotlightMercurySharedMediaViewer.react.js */







__d('SpotlightMercurySharedMediaViewer.react',['csx','cx','fbt','invariant','ActorURI','AsyncDialog','AsyncRequest','ChatPhotoViewFooterHScroll.react','ChatPhotoViewHeader.react','Event','FunnelLogger','KeyEventController','MessagingForwardAttachmentDialog.react','MessengerPhotoInfoDialogContainer.react','MessengerThreadSharedMediaHelper','MessengerVideoPlayer.react','Parent','PhotoUtils','React','SpotlightViewer','SpotlightViewerImage','SpotlightMessagesViewerPagers.react','SpotlightViewport','SubscriptionsHandler','Vector','XMessagingPhotoDownloadController','XMessagingShareAttachmentDialogController'],(function a(b,c,d,e,f,g,h,i,j,k){

'use strict';var l,m,





























n=c('React').PropTypes,

o=88,
p=30,
q='WWW_MESSENGER_SHARE_TO_FB_FUNNEL',

r="_4-og";l=babelHelpers.inherits

(s,c('React').Component);m=l&&l.prototype;function s(){var t,u;for(var v=arguments.length,w=Array(v),x=0;x<v;x++)w[x]=arguments[x];return u=(t=m.constructor).call.apply(t,[this].concat(w)),this.

$SpotlightMercurySharedMediaViewer_subscriptionsHandler=undefined,this.
$SpotlightMercurySharedMediaViewer_requests=[],this.

























state=
{hasPrevPage:false,
hasNextPage:false,
firstPhotoLoaded:false,
isLoading:false,
mediaData:[],
numberInOneBatch:p,
photoData:null,
showForward:false,
showInfo:false,
stageDimensions:new (c('Vector'))()},this.



























































































































































$SpotlightMercurySharedMediaViewer_renderWebFooter=function(){
if(!this.state.photoData)
return null;


return (c('React').createElement(c('ChatPhotoViewFooterHScroll.react'),
{onScroll:this.$SpotlightMercurySharedMediaViewer_handleClickPhotoStrip,
photoID:this.state.photoData.node.id,
sharedPhotos:this.state.mediaData,
updateNumberInOneBatch:this.$SpotlightMercurySharedMediaViewer_updateNumberInOneBatch,
width:this.state.stageDimensions.x}));}.


bind(this),this.





















$SpotlightMercurySharedMediaViewer_renderInfo=function(){
return this.state.showInfo?

c('React').createElement(c('MessengerPhotoInfoDialogContainer.react'),
{closeInfo:this.$SpotlightMercurySharedMediaViewer_hideInfoDialog,
infoOpen:this.state.showInfo,
photoID:this.state.photoData.node.id}):


c('React').createElement('xhp',null);}.
bind(this),this.

$SpotlightMercurySharedMediaViewer_updateNumberInOneBatch=function(y){
this.setState({numberInOneBatch:y});}.
bind(this),this.

$SpotlightMercurySharedMediaViewer_handleClickPhotoStrip=function(y){
if(!this.state.mediaData||this.state.isLoading)
return;


var z=this.state.mediaData.findIndex
(function(ba){return ba.node.legacy_attachment_id===y;});
if(z<0)
return;

var aa=this.state.mediaData[z];
this.setState({photoData:aa});
this.$SpotlightMercurySharedMediaViewer_loadMoreIfNecessary(z);}.
bind(this),this.

$SpotlightMercurySharedMediaViewer_handleClickViewport=
function(y,
event){

if(this.state.photoData==null||this.state.isLoading)
return;

if(event&&!!c('Parent').bySelector
(event.target,"._3tsq"))
return;

if(event&&
event.target instanceof HTMLElement&&
event.target.className===r)

this.$SpotlightMercurySharedMediaViewer_close();


var z=this.state.mediaData.findIndex
(function(ba){
this.state.photoData!=null||k(0,
'this.state.photoData cannot be null');
return ba.node.legacy_attachment_id===
this.state.photoData.node.legacy_attachment_id;}.
bind(this));
if(z<0||
z===this.state.mediaData.length-1&&
!this.state.hasNextPage&&
y)
return;


if(z===0&&!y){
this.setState({isLoading:true},
function(){return this.$SpotlightMercurySharedMediaViewer_loadLatestData
(this.state.photoData,
1,
function(ba){
if(ba===0)
return;

this.$SpotlightMercurySharedMediaViewer_handleClickViewport(y);}.
bind(this));}.bind(this));

return;}


var aa=y?
this.state.mediaData[z+1]:
this.state.mediaData[z-1];

this.setState({photoData:aa});

this.$SpotlightMercurySharedMediaViewer_loadMoreIfNecessary(z);}.
bind(this),this.

$SpotlightMercurySharedMediaViewer_loadMoreIfNecessary=function(y){
var z=this.state.numberInOneBatch,
aa=this.state.mediaData;
if(y<=z/2){
this.setState
({isLoading:true},
function(){return this.$SpotlightMercurySharedMediaViewer_loadLatestData(aa[0],z,function(){});}.bind(this));}else

if(y>=aa.length-z/2&&
this.state.hasNextPage)
this.setState
({isLoading:true},
function(){return this.$SpotlightMercurySharedMediaViewer_loadPreviousData
(aa[aa.length-1],
z,
function(){});}.bind(this));}.



bind(this),this.

$SpotlightMercurySharedMediaViewer_close=function(){
if(this.props.photoID===null)
return;

this.setState({photoData:null});
this.props.onClosePhotoView();}.
bind(this),this.

$SpotlightMercurySharedMediaViewer_showForwardDialog=function(){
this.setState({showForward:true});}.
bind(this),this.

$SpotlightMercurySharedMediaViewer_hideForwardDialog=function(){
this.setState({showForward:false});}.
bind(this),this.

$SpotlightMercurySharedMediaViewer_showInfoDialog=function(){
this.setState({showInfo:true});}.
bind(this),this.

$SpotlightMercurySharedMediaViewer_hideInfoDialog=function(){
this.setState({showInfo:false});}.
bind(this),this.

$SpotlightMercurySharedMediaViewer_showShareDialog=function(){
this.setState
({showForward:false,
showInfo:false});


c('FunnelLogger').appendAction(q,'click');

var y=this.state.photoData;

if(!y||y.node.__typename!=='MessageImage')
return;


var z=y.node.legacy_attachment_id,
aa=c('XMessagingShareAttachmentDialogController').
getURIBuilder().
getURI(),
ba=new (c('AsyncRequest'))(aa).
setData({attachment_id:z}).
setMethod('POST');
c('AsyncDialog').send(ba);}.
bind(this),this.

$SpotlightMercurySharedMediaViewer_loadPhotoData=function(y){
var z=c('MessengerThreadSharedMediaHelper').search
(this.props.threadID,
String(y),
function(aa){return this.$SpotlightMercurySharedMediaViewer_addData(aa,0,function(){});}.bind(this));

this.$SpotlightMercurySharedMediaViewer_requests.push(z);}.
bind(this),this.

$SpotlightMercurySharedMediaViewer_loadPreviousData=
function(y,
z,
aa){

var ba=c('MessengerThreadSharedMediaHelper').loadMorePrevious
(this.props.threadID,
y.cursor,
z||1,
function(ca){return this.$SpotlightMercurySharedMediaViewer_addData(ca,1,aa);}.bind(this));

this.$SpotlightMercurySharedMediaViewer_requests.push(ba);}.
bind(this),this.

$SpotlightMercurySharedMediaViewer_loadLatestData=
function(y,
z,
aa){

var ba=y?y.cursor:null,
ca=c('MessengerThreadSharedMediaHelper').loadMoreLatest
(this.props.threadID,
ba,
z||1,
function(da){return this.$SpotlightMercurySharedMediaViewer_addData(da,-1,aa);}.bind(this));

this.$SpotlightMercurySharedMediaViewer_requests.push(ca);}.
bind(this),this.

$SpotlightMercurySharedMediaViewer_addData=function(y,z,aa){
var ba=Object.keys(y)[0],
ca=y[ba].message_shared_media,
da=ca.page_info,
ea=ca.edges.length;
if(ea!==0){
var fa=this.state.mediaData;
switch(z){
case 0:
this.setState
({photoData:ca.edges[0],
mediaData:[ca.edges[0]],
firstPhotoLoaded:true});

break;
case 1:
fa=fa.concat(ca.edges);
this.setState
({hasNextPage:da.has_next_page,
mediaData:fa});

break;
case -1:
fa=ca.edges;
fa=fa.concat(this.state.mediaData);
this.setState
({mediaData:fa,
hasPrevPage:da.has_previous_page});

break;}}


this.setState({isLoading:false});
aa(ea);}.
bind(this),this.

$SpotlightMercurySharedMediaViewer_getStageDimensions=function(){
var y=new (c('Vector'))
(c('Vector').getViewportDimensions().x,
c('Vector').getViewportDimensions().y-o);

return y;},
this.

$SpotlightMercurySharedMediaViewer_getMedia=function(){
if(this.state.photoData&&this.state.photoData.node){
var y=this.state.photoData.node;
if(y.__typename&&y.__typename==='MessageVideo')
return this.$SpotlightMercurySharedMediaViewer_getVideo();

var z=this.state.stageDimensions,

aa=this.$SpotlightMercurySharedMediaViewer_getBestFitImageFromPhoto
(y,
z);

if(!aa)
return null;

var ba=
s.getImageDimensionsForStage
(new (c('Vector'))(aa.width,aa.height),
z);

return this.$SpotlightMercurySharedMediaViewer_getPhoto(aa,ba);}else 

return null;}.

bind(this),this.














$SpotlightMercurySharedMediaViewer_getPhoto=function(y,z){

return (c('React').createElement(c('SpotlightViewerImage'),
{dimensions:z,
ref:'image',
src:y.uri}));},


this.







































$SpotlightMercurySharedMediaViewer_getBestFitImageFromPhoto=function(y,z){
var aa=null,
ba=c('PhotoUtils').getImagesFromData(y);



ba=ba.sort(function(da,ea){
return ea.width-da.width;});


if(window.devicePixelRatio&&window.devicePixelRatio>1)
z=new (c('Vector'))
(z.x*window.devicePixelRatio,
z.y*window.devicePixelRatio);



for(var ca=0;ca<ba.length;ca++)



if(!aa||
ba[ca].width>=z.x||
ba[ca].height>=z.y)
aa=ba[ca];


return aa;},
u;}s.prototype.getDefaultProps=function(){return {enableShareToFB:false};};s.prototype.componentDidMount=function(){this.setState({isLoading:true,stageDimensions:this.$SpotlightMercurySharedMediaViewer_getStageDimensions()},function(){return this.$SpotlightMercurySharedMediaViewer_loadPhotoData(this.props.photoID);}.bind(this));this.$SpotlightMercurySharedMediaViewer_subscriptionsHandler=new (c('SubscriptionsHandler'))();this.$SpotlightMercurySharedMediaViewer_subscriptionsHandler.addSubscriptions(c('Event').listen(window,'resize',function(){this.setState({stageDimensions:this.$SpotlightMercurySharedMediaViewer_getStageDimensions()});}.bind(this)),c('KeyEventController').registerKey('LEFT',function(){this.$SpotlightMercurySharedMediaViewer_handleClickViewport(false);return false;}.bind(this)),c('KeyEventController').registerKey('RIGHT',function(){this.$SpotlightMercurySharedMediaViewer_handleClickViewport(true);return false;}.bind(this)));if(this.props.enableShareToFB)c('FunnelLogger').startFunnel(q);};s.prototype.componentWillUpdate=function(t,u){if(u.firstPhotoLoaded!==this.state.firstPhotoLoaded)this.setState({isLoading:true},function(){this.$SpotlightMercurySharedMediaViewer_loadPreviousData(u.photoData,u.numberInOneBatch,function(){});this.$SpotlightMercurySharedMediaViewer_loadLatestData(u.photoData,u.numberInOneBatch,function(){});}.bind(this));if(u.numberInOneBatch!=this.state.numberInOneBatch&&!u.isLoading)this.setState({isLoading:true},function(){return this.$SpotlightMercurySharedMediaViewer_loadPreviousData(u.mediaData[u.mediaData.length-1],u.numberInOneBatch,function(){});}.bind(this));};s.prototype.componentWillUnmount=function(){this.$SpotlightMercurySharedMediaViewer_subscriptionsHandler&&this.$SpotlightMercurySharedMediaViewer_subscriptionsHandler.release();this.$SpotlightMercurySharedMediaViewer_subscriptionsHandler=null;this.$SpotlightMercurySharedMediaViewer_requests.forEach(function(t){return t.abandon();});};s.prototype.render=function(){var t=this.$SpotlightMercurySharedMediaViewer_getMedia(),u=this.state.stageDimensions,v=this.state.isLoading||this.props.useloadingindicator&&!this.state.photoData;if(this.state.photoData==null)return null;var w=this.state.mediaData.findIndex(function(y){this.state.photoData!=null||k(0,'this.state.photoData cannot be null');return y.node.id===this.state.photoData.node.id;}.bind(this)),x=c('React').createElement('div',null,this.$SpotlightMercurySharedMediaViewer_renderWebHeader(),this.props.disablepaging?null:c('React').createElement(c('SpotlightMessagesViewerPagers.react'),{disablePrevArrow:w<=0&&!this.state.hasPrevPage,disableNextArrow:!this.state.hasNextPage&&w>=this.state.mediaData.length-1}));return c('React').createElement('span',null,c('React').createElement(c('SpotlightViewer'),{className:"_53vs",onHide:this.$SpotlightMercurySharedMediaViewer_close,open:this.props.photoID!==null,ref:'spotlightViewer',rootClassName:this.props.rootClassName},c('React').createElement(c('SpotlightViewport'),{active:false,fadeInNOut:true,media:t,onClick:this.$SpotlightMercurySharedMediaViewer_handleClickViewport,ref:'viewport',showLoadingIndicator:v,stageDimensions:u,useWidth:true},x),this.$SpotlightMercurySharedMediaViewer_renderWebFooter()),this.$SpotlightMercurySharedMediaViewer_renderForward(),this.$SpotlightMercurySharedMediaViewer_renderInfo());};s.prototype.$SpotlightMercurySharedMediaViewer_renderWebHeader=function(){if(!this.state.photoData)return null;var t=this.state.photoData,u=t.node.legacy_attachment_id,v=c('XMessagingPhotoDownloadController').getURIBuilder().setString('photo_id',u).getURI();if(this.props.actorid)v=c('ActorURI').create(v,this.props.actorid);var w=this.props.enableShareToFB&&t.node.__typename==='MessageImage'&&t.node.image1.uri.indexOf('.gif')<0;return c('React').createElement(c('ChatPhotoViewHeader.react'),{disableForward:this.props.disableForward,enableShareToFB:w,onClose:this.$SpotlightMercurySharedMediaViewer_close,openInfo:this.$SpotlightMercurySharedMediaViewer_showInfoDialog,ref:'photoviewheader',showForwardDialog:this.$SpotlightMercurySharedMediaViewer_showForwardDialog,showShareDialog:this.$SpotlightMercurySharedMediaViewer_showShareDialog,url:v});};s.prototype.$SpotlightMercurySharedMediaViewer_renderForward=function(){if(!this.state.photoData)return null;var t=j._(["Forward in separate messages","cadefe63f5ada4f69ffbb32c230db012"]);return c('React').createElement(c('MessagingForwardAttachmentDialog.react'),{attachmentID:this.state.photoData.node.legacy_attachment_id,onClose:this.$SpotlightMercurySharedMediaViewer_hideForwardDialog,shown:this.state.showForward,title:t});};s.prototype.$SpotlightMercurySharedMediaViewer_getVideo=function(){if(this.state.photoData)return c('React').createElement(c('MessengerVideoPlayer.react'),{isVisible:true,videoData:this.state.photoData.node,stageDimensions:this.state.stageDimensions});return null;};s.propTypes={disableForward:n.bool,enableShareToFB:n.bool,onClosePhotoView:n.func,photoID:n.string,rootClassName:n.string,threadID:n.string};s.getImageDimensionsForStage=function(t,u){var v=t.x,w=t.y,x=u.x,y=u.y,z=v/w,aa=x/y;if(v>=x||w>=y){if(aa<z){v=x;w=Math.round(x/z);}else if(aa>z){v=Math.round(y*z);w=y;}else{v=x;w=y;}}else if(z<aa){v=Math.round(w*z);}else w=Math.round(v/z);return new (c('Vector'))(v,w);};


f.exports=s;}),null);

/** js/messaging/SpotlightMessengerSharedMediaViewer.react.js */







__d('SpotlightMessengerSharedMediaViewer.react',['csx','cx','fbt','invariant','ActorURI','MessengerPhotoViewHScroll.react','Event','KeyEventController','messengerForwardAttachmentDialogReact','MessengerPhotoInfoDialogContainer.react','MessengerPhotoViewHeader.react','MessengerSharedMediaActions','MessengerVideoPlayer.react','Parent','PhotoUtils','React','SpotlightViewer','SpotlightViewerImage','SpotlightMessagesViewerPagers.react','SpotlightViewport','SubscriptionsHandler','Vector','XMessagingPhotoDownloadController','MessengerPhotoViewBottomBar.react'],(function a(b,c,d,e,f,g,h,i,j,k){

'use strict';var l,m,





n=c('messengerForwardAttachmentDialogReact').comp,




















o=c('React').PropTypes,

p=88,
q=80,
r=30,

s="_4-og";l=babelHelpers.inherits

(t,c('React').Component);m=l&&l.prototype;function t(){var u,v;for(var w=arguments.length,x=Array(w),y=0;y<w;y++)x[y]=arguments[y];return v=(u=m.constructor).call.apply(u,[this].concat(x)),this.

$SpotlightMessengerSharedMediaViewer_subscriptionsHandler=undefined,this.
$SpotlightMessengerSharedMediaViewer_requests=[],this.

























state=
{photoData:null,
showForward:false,
showInfo:false,
stageDimensions:new (c('Vector'))()},this.
















































































































































































$SpotlightMessengerSharedMediaViewer_handleClickPhotoStrip=function(z){
if(!this.props.sharedMedia)
return;


var aa=this.props.sharedMedia.findIndex
(function(ca){return ca.node.legacy_attachment_id===z;});
if(aa<0)
return;

var ba=this.props.sharedMedia[aa];
this.setState({photoData:ba});
this.$SpotlightMessengerSharedMediaViewer_loadMoreIfNecessary(aa);}.
bind(this),this.

$SpotlightMessengerSharedMediaViewer_handleClickViewport=
function(z,
event){

if(this.state.photoData==null)
return;

var aa=this.state.photoData;
if(event&&!!c('Parent').bySelector
(event.target,"._3tsq"))
return;

if(event&&
event.target instanceof HTMLElement&&
event.target.className===s)

this.$SpotlightMessengerSharedMediaViewer_close();


var ba=this.props.sharedMedia.findIndex
(function(da){
return da.node.legacy_attachment_id===
aa.node.legacy_attachment_id;});

if(ba<0||
ba===this.props.sharedMedia.length-1&&
!this.props.hasNextPage&&
z)
return;


if(ba===0&&!z){
c('MessengerSharedMediaActions').loadMoreLatest
(this.props.threadID,
this.props.sharedMedia[0].cursor,
r);

return;}


var ca=z?
this.props.sharedMedia[ba+1]:
this.props.sharedMedia[ba-1];

this.setState({photoData:ca});

this.$SpotlightMessengerSharedMediaViewer_loadMoreIfNecessary(ba);}.
bind(this),this.




























$SpotlightMessengerSharedMediaViewer_close=function(){
if(this.props.photoID===null)
return;

this.setState({photoData:null});
this.props.onClosePhotoView();}.
bind(this),this.

$SpotlightMessengerSharedMediaViewer_showForwardDialog=function(){
this.setState({showForward:true});}.
bind(this),this.

$SpotlightMessengerSharedMediaViewer_hideForwardDialog=function(){
this.setState({showForward:false});}.
bind(this),this.

$SpotlightMessengerSharedMediaViewer_showInfoDialog=function(){
this.setState({showInfo:true});}.
bind(this),this.

$SpotlightMessengerSharedMediaViewer_hideInfoDialog=function(){
this.setState({showInfo:false});}.
bind(this),v;}t.prototype.componentDidMount=function(){var u=this.props.sharedMedia.find(function(v){return v.node.legacy_attachment_id===this.props.photoID;}.bind(this));this.setState({photoData:u,stageDimensions:this.$SpotlightMessengerSharedMediaViewer_getStageDimensions()});this.$SpotlightMessengerSharedMediaViewer_subscriptionsHandler=new (c('SubscriptionsHandler'))();this.$SpotlightMessengerSharedMediaViewer_subscriptionsHandler.addSubscriptions(c('Event').listen(window,'resize',function(){this.setState({stageDimensions:this.$SpotlightMessengerSharedMediaViewer_getStageDimensions()});}.bind(this)),c('KeyEventController').registerKey('LEFT',function(){this.$SpotlightMessengerSharedMediaViewer_handleClickViewport(false);return false;}.bind(this)),c('KeyEventController').registerKey('RIGHT',function(){this.$SpotlightMessengerSharedMediaViewer_handleClickViewport(true);return false;}.bind(this)));};t.prototype.componentWillUnmount=function(){this.$SpotlightMessengerSharedMediaViewer_subscriptionsHandler&&this.$SpotlightMessengerSharedMediaViewer_subscriptionsHandler.release();this.$SpotlightMessengerSharedMediaViewer_subscriptionsHandler=null;this.$SpotlightMessengerSharedMediaViewer_requests.forEach(function(u){return u.abandon();});};t.prototype.render=function(){var u=this.$SpotlightMessengerSharedMediaViewer_getMedia(),v=this.state.stageDimensions,w=this.props.useloadingindicator&&!this.state.photoData;if(this.state.photoData==null)return null;var x=this.props.sharedMedia.findIndex(function(z){this.state.photoData!=null||k(0,'this.state.photoData cannot be null');return z.node.id===this.state.photoData.node.id;}.bind(this)),y=c('React').createElement('div',null,this.$SpotlightMessengerSharedMediaViewer_renderHeader(),this.props.disablepaging?null:c('React').createElement(c('SpotlightMessagesViewerPagers.react'),{disablePrevArrow:x<=0&&!this.props.hasPrevPage,disableNextArrow:!this.props.hasNextPage&&x>=this.props.sharedMedia.length-1}));return c('React').createElement('span',null,c('React').createElement(c('SpotlightViewer'),{className:"_53vs",onHide:this.$SpotlightMessengerSharedMediaViewer_close,open:this.props.photoID!==null,ref:'spotlightViewer',rootClassName:this.props.rootClassName},c('React').createElement(c('SpotlightViewport'),{active:false,fadeInNOut:true,media:u,onClick:this.$SpotlightMessengerSharedMediaViewer_handleClickViewport,ref:'viewport',showLoadingIndicator:w,stageDimensions:v,useWidth:true},y),this.$SpotlightMessengerSharedMediaViewer_renderFooter()),this.$SpotlightMessengerSharedMediaViewer_renderForward(),this.$SpotlightMessengerSharedMediaViewer_renderInfo());};t.prototype.$SpotlightMessengerSharedMediaViewer_renderHeader=function(){if(!this.state.photoData)return null;var u=this.state.photoData.node.legacy_attachment_id,v=c('XMessagingPhotoDownloadController').getURIBuilder().setString('photo_id',u).getURI();if(this.props.actorid)v=c('ActorURI').create(v,this.props.actorid);return c('React').createElement(c('MessengerPhotoViewHeader.react'),{disableForward:this.props.disableForward,onClose:this.$SpotlightMessengerSharedMediaViewer_close,openInfo:this.$SpotlightMessengerSharedMediaViewer_showInfoDialog,photoID:this.props.photoID,ref:'photoviewheader',showForwardDialog:this.$SpotlightMessengerSharedMediaViewer_showForwardDialog,url:v});};t.prototype.$SpotlightMessengerSharedMediaViewer_getNumberInOneBatch=function(u){return u?Math.ceil(u/q):r;};t.prototype.$SpotlightMessengerSharedMediaViewer_renderFooter=function(){if(!this.state.photoData)return null;var u=this.state.photoData,v=c('React').createElement('button',{className:"_2n5b",onClick:function(){return this.props.openAlbum(u.node.legacy_attachment_id);}.bind(this),type:'button'},c('React').createElement('div',{className:"_3por"}));return c('React').createElement(c('MessengerPhotoViewBottomBar.react'),null,c('React').createElement(c('MessengerPhotoViewHScroll.react'),{onScroll:this.$SpotlightMessengerSharedMediaViewer_handleClickPhotoStrip,photoID:u.node.legacy_attachment_id,sharedPhotos:this.props.sharedMedia,width:this.state.stageDimensions.x}),v);};t.prototype.$SpotlightMessengerSharedMediaViewer_renderForward=function(){if(!this.state.photoData||this.props.disableForward)return null;var u=j._(["Forward in separate messages","cadefe63f5ada4f69ffbb32c230db012"]);return c('React').createElement(n,{attachmentID:this.state.photoData.node.legacy_attachment_id,onClose:this.$SpotlightMessengerSharedMediaViewer_hideForwardDialog,shown:this.state.showForward,title:u});};t.prototype.$SpotlightMessengerSharedMediaViewer_renderInfo=function(){return this.state.showInfo?c('React').createElement(c('MessengerPhotoInfoDialogContainer.react'),{closeInfo:this.$SpotlightMessengerSharedMediaViewer_hideInfoDialog,infoOpen:this.state.showInfo,photoID:this.state.photoData.node.id}):c('React').createElement('xhp',null);};t.prototype.$SpotlightMessengerSharedMediaViewer_loadMoreIfNecessary=function(u){var v=this.$SpotlightMessengerSharedMediaViewer_getNumberInOneBatch(this.state.stageDimensions.x),w=this.props.sharedMedia;if(u<=v/2){c('MessengerSharedMediaActions').loadMoreLatest(this.props.threadID,w[0].cursor,v);if(w.length<v&&this.props.hasNextPage)c('MessengerSharedMediaActions').loadMorePrevious(this.props.threadID,w[w.length-1].cursor,v);}else if(u>=w.length-v/2&&this.props.hasNextPage)c('MessengerSharedMediaActions').loadMorePrevious(this.props.threadID,w[w.length-1].cursor,v);};t.prototype.

$SpotlightMessengerSharedMediaViewer_getStageDimensions=function(){
var u=new (c('Vector'))
(c('Vector').getViewportDimensions().x,
c('Vector').getViewportDimensions().y-p);

return u;};
t.prototype.

$SpotlightMessengerSharedMediaViewer_getMedia=function(){
if(this.state.photoData&&this.state.photoData.node){
var u=this.state.photoData.node;
if(u.__typename&&u.__typename==='MessageVideo')
return this.$SpotlightMessengerSharedMediaViewer_getVideo();

var v=this.state.stageDimensions,

w=this.$SpotlightMessengerSharedMediaViewer_getBestFitImageFromPhoto
(u,
v);

if(!w)
return null;

var x=
t.getImageDimensionsForStage
(new (c('Vector'))(w.width,w.height),
v);

return this.$SpotlightMessengerSharedMediaViewer_getPhoto(w,x);}else 

return null;};

t.prototype.

$SpotlightMessengerSharedMediaViewer_getVideo=function(){
if(this.state.photoData)

return (c('React').createElement(c('MessengerVideoPlayer.react'),
{isVisible:true,
videoData:this.state.photoData.node,
stageDimensions:this.state.stageDimensions}));



return null;};
t.prototype.

$SpotlightMessengerSharedMediaViewer_getPhoto=function(u,v){

return (c('React').createElement(c('SpotlightViewerImage'),
{dimensions:v,
ref:'image',
src:u.uri}));};


t.prototype.







































$SpotlightMessengerSharedMediaViewer_getBestFitImageFromPhoto=function(u,v){
var w=null,
x=c('PhotoUtils').getImagesFromData(u);



x=x.sort(function(z,aa){
return aa.width-z.width;});


if(window.devicePixelRatio&&window.devicePixelRatio>1)
v=new (c('Vector'))
(v.x*window.devicePixelRatio,
v.y*window.devicePixelRatio);



for(var y=0;y<x.length;y++)



if(!w||
x[y].width>=v.x||
x[y].height>=v.y)
w=x[y];


return w;};
t.propTypes={disableForward:o.bool,hasPrevPage:o.bool,hasNextPage:o.bool,onClosePhotoView:o.func,openAlbum:o.func,photoID:o.string,rootClassName:o.string,threadID:o.string,sharedMedia:o.arrayOf(o.object)};t.getImageDimensionsForStage=function(u,v){var w=u.x,x=u.y,y=v.x,z=v.y,aa=w/x,ba=y/z;if(w>=y||x>=z){if(ba<aa){w=y;x=Math.round(y/aa);}else if(ba>aa){w=Math.round(z*aa);x=z;}else{w=y;x=z;}}else if(aa<ba){w=Math.round(x*aa);}else x=Math.round(w/aa);return new (c('Vector'))(w,x);};


f.exports=t;}),null);

/** js/messaging/SpotlightMessengerSharedMediaViewerContainer.react.js */






__d('SpotlightMessengerSharedMediaViewerContainer.react',['FluxContainer','MessengerSharedMediaStore','MessengerSharedMediaActions','React','SpotlightMessengerSharedMediaViewer.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits























(j,c('React').PureComponent);i=h&&h.prototype;j.



getStores=function(){
return [c('MessengerSharedMediaStore')];};
j.

calculateState=function(k,l){
var m=c('MessengerSharedMediaStore').getState(),
n=m.sharedMedia.get(l.threadID),
o=m.isLoading.get(l.threadID);


return {sharedMedia:n,
isLoading:o};};

j.prototype.

componentDidMount=function(){
c('MessengerSharedMediaActions').loadCurrent
(this.props.threadID,
this.props.photoID);};

j.prototype.

render=function(){
if(!this.state.sharedMedia)
return null;

var k=this.state.sharedMedia&&
this.state.sharedMedia.edges.find
(function(l){return l.node.legacy_attachment_id===this.props.photoID;}.bind(this));

if(!k)
return null;


return (c('React').createElement(c('SpotlightMessengerSharedMediaViewer.react'),
{disableForward:this.props.disableForward,
hasPrevPage:this.state.sharedMedia&&
this.state.sharedMedia.has_previous_page,
hasNextPage:this.state.sharedMedia&&
this.state.sharedMedia.has_next_page,
onClosePhotoView:this.props.onClosePhotoView,
openAlbum:this.props.openAlbum,
photoID:this.props.photoID,
rootClassName:this.props.rootClassName,
sharedMedia:this.state.sharedMedia&&this.state.sharedMedia.edges,
threadID:this.props.threadID}));};


function j(){h.apply(this,arguments);}


f.exports=c('FluxContainer').create
(j,
{withProps:true});}),null);

/** js/mercury/clients/messenger/components/MessengerThreadSharedPhotos.react.js */







__d('MessengerThreadSharedPhotos.react',['cx','MessengerSharedPhotosAlbumViewContainer.react','React','SpotlightViewer','SpotlightMessengerSharedMediaViewerContainer.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits


(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.












state=



{photoView:this.props.findFBID,
albumView:''},this.






















$MessengerThreadSharedPhotos_handleAlbumOpenClosePhotoView=function(r){
this.setState
({albumView:r,
photoView:''});}.

bind(this),this.

$MessengerThreadSharedPhotos_handleAlbumClose=function(){
this.setState({albumView:''});}.
bind(this),this.

$MessengerThreadSharedPhotos_handleCloseAlbumOpenPhoto=function(r){
this.setState({albumView:'',photoView:r});}.
bind(this),this.

$MessengerThreadSharedPhotos_handlePhotoviewClose=function(){
this.setState({photoView:''});}.
bind(this),this.

$MessengerThreadSharedPhotos_loadImage=function(r){
this.setState({photoView:r});}.
bind(this),n;}l.prototype.componentDidUpdate=function(){!this.state.photoView&&!this.state.albumView&&this.props.onCloseSharedPhotos();};l.prototype.render=function(){var m=this.state.photoView?this.$MessengerThreadSharedPhotos_renderPhotoview():null,n=this.state.albumView?this.$MessengerThreadSharedPhotos_renderAlbumView():null;return c('React').createElement('div',null,n,m);};l.prototype.

$MessengerThreadSharedPhotos_renderPhotoview=function(){

return (c('React').createElement(c('SpotlightMessengerSharedMediaViewerContainer.react'),
{disableForward:false,
onClosePhotoView:this.$MessengerThreadSharedPhotos_handlePhotoviewClose,
openAlbum:this.$MessengerThreadSharedPhotos_handleAlbumOpenClosePhotoView,
photoID:this.state.photoView,
rootClassName:'',
threadID:this.props.threadFBID}));};


l.prototype.

$MessengerThreadSharedPhotos_renderAlbumView=function(){

return (c('React').createElement(c('SpotlightViewer'),
{className:"_3ode",
onHide:this.$MessengerThreadSharedPhotos_handleAlbumClose,
open:true,
ref:'spotlightViewer'},
c('React').createElement(c('MessengerSharedPhotosAlbumViewContainer.react'),
{onClick:this.$MessengerThreadSharedPhotos_handleCloseAlbumOpenPhoto,
onCloseSharedPhotos:this.props.onCloseSharedPhotos,
threadID:this.props.threadFBID,
viewedPhoto:this.state.albumView})));};



l.propTypes={findFBID:k.string,onCloseSharedPhotos:k.func,threadFBID:k.string};


f.exports=l;}),null);

/** js/mercury/clients/messenger/MessengerVideo.react.js */






__d('MessengerVideo.react',['cx','ix','Image.react','MessengerPhoto.react','MessengerVideoPlayer.react','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,










l=c('React').PropTypes,

m=1800;j=babelHelpers.inherits

(n,c('React').PureComponent);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.

















































































































$MessengerVideo_onClick=function(){
this.props.onClick&&this.props.onClick(this.props.attachment);}.
bind(this),p;}n.prototype.render=function(){var o=this.$MessengerVideo_constructVideoData(this.props.attachment),p=this.$MessengerVideo_getVideo(o);return p?p:c('React').createElement(c('MessengerPhoto.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_ccq")}),c('React').createElement(c('Image.react'),{className:"_ccr",src:i("27983")}),c('React').createElement('span',{className:"_ccs"},this.$MessengerVideo_getDuration()));};n.prototype.$MessengerVideo_getDuration=function(){var o=void 0;if(this.props.attachment.metadata){o=this.props.attachment.metadata.duration;}else if(this.props.attachment.media)o=this.props.attachment.media.duration;return o?this.$MessengerVideo_formatDuration(o):null;};n.prototype.$MessengerVideo_getVideo=function(o){if(!o.legacy_attachment_id)return null;return c('React').createElement(c('MessengerVideoPlayer.react'),{attachment:this.props.attachment,videoData:o,isInThread:true,isVisible:this.props.isVisible,onClick:this.$MessengerVideo_onClick,onSelect:this.props.onSelect,className:c('joinClasses')(this.props.className,"_ccq"+(' '+"_4tsk")+(' '+"_3o67")+(this.props.isSingle?' '+"_52mr":''))});};n.prototype.$MessengerVideo_constructVideoData=function(o){var p=null,q=null,r=null;if(o.metadata&&o.metadata.fbid){var s=window.screen.width>m&&o.metadata.large_size&&o.metadata.large_preview;p=o.metadata.fbid;var t=s?o.metadata.large_size:o.metadata.inbox_size;q=t?{x:t.width,y:t.height}:{x:0,y:0};r=s?o.metadata.large_preview:o.metadata.inbox_preview;}return {legacy_attachment_id:p,original_dimensions:q,start_muted:true,hide_controls_on_finish:true,url:r,is_share:false};};n.prototype.$MessengerVideo_formatDuration=function(o){var p=o%60;return Math.floor(o/60)+':'+(p<10?'0':'')+p;};n.propTypes={attachment:l.object.isRequired,isSingle:l.bool.isRequired,isVisible:l.bool,onClick:l.func,onSelect:l.func};


f.exports=n;}),null);

/** js/mercury/clients/messenger/MessengerXMATextBlock.react.js */






__d('MessengerXMATextBlock.react',['cx','LineClamp.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,







k=c('React').PropTypes,

l=26;i=babelHelpers.inherits

(m,c('React').Component);j=i&&i.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.





























































































$MessengerXMATextBlock_onClick=function(){
this.props.url&&window.open(this.props.url);}.
bind(this),o;}m.prototype.render=function(){if(!this.props)return c('React').createElement('div',{className:"__6j"});var n=this.props.width?{maxWidth:this.props.width-l,textAlign:'left'}:{textAlign:'left'},o={textDecoration:'none'};return c('React').createElement('div',{className:c('joinClasses')(this.props.className,"__6j _43kk"),style:n},c('React').createElement('a',{onClick:this.$MessengerXMATextBlock_onClick,role:'button',style:o,tabIndex:'0'},this.renderTitle(),this.renderDescription(),this.renderSource()));};m.prototype.renderTitle=function(){if(!this.props.title)return null;return c('React').createElement('div',{className:"__6k"},c('React').createElement(c('LineClamp.react'),{lines:2,lineHeight:16},this.props.title));};m.prototype.renderDescription=function(){if(!this.props.description)return null;return c('React').createElement('div',{className:"__6l"},c('React').createElement(c('LineClamp.react'),{lines:2,lineHeight:15},this.props.description));};m.prototype.renderSource=function(){if(!this.props.source)return null;return c('React').createElement('div',{className:"__6m"},c('React').createElement(c('LineClamp.react'),{lines:1,lineHeight:14},this.props.source));};m.propTypes={className:k.string,description:k.string,source:k.string,title:k.string,url:k.string,width:k.number};


f.exports=m;}),null);

/** js/mercury/clients/messenger/MessengerVideoXMA.react.js */






__d('MessengerVideoXMA.react',['cx','MessengerVideoPlayer.react','MessengerXMATextBlock.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=c('React').PropTypes,

l=640,
m=450,

n=1800;i=babelHelpers.inherits

(o,c('React').PureComponent);j=i&&i.prototype;o.prototype.















render=function(){
var p=this.$MessengerVideoXMA_constructVideoData(this.props.attachment),
q=this.$MessengerVideoXMA_getVideo(p);

return (c('React').createElement('div',{className:"_3duc"},
q,
this.$MessengerVideoXMA_renderAttribution(p&&p.original_dimensions)));};


o.prototype.

$MessengerVideoXMA_getVideo=function(p){
return p?
c('React').createElement(c('MessengerVideoPlayer.react'),
{attachment:this.props.attachment,
videoData:p,
isInThread:true,
isVisible:this.props.isVisible,
onSelect:this.props.onSelect,
className:c('joinClasses')
(this.props.className,"_ccq"+(' '+"_4tsk")+(' '+"_3o67")+(' '+"_52mr"))}):








null;};
o.prototype.

$MessengerVideoXMA_constructVideoData=function(p){

if(!p.media||
!p.media.image_size||
!p.target||
!p.target.video_id)

return null;


var q=p.media.image_size;


return {legacy_attachment_id:p.target.video_id,
original_dimensions:this.$MessengerVideoXMA_adjustSize(q),
start_muted:true,
hide_controls_on_finish:true,
url:p.media.image,
is_share:true};};

o.prototype.

$MessengerVideoXMA_adjustSize=function(p){
var q=Math.max(p.width,p.height),
r=window.screen.width>n?
l:
m;
if(q<=r)
return {x:p.width,y:p.height};

var s=r/q,
t=Math.floor(p.width*s),
u=Math.floor(p.height*s);
return {x:t,y:u};};
o.prototype.

$MessengerVideoXMA_renderAttribution=function(p){
var q=this.props.attachment;

return (c('React').createElement(c('MessengerXMATextBlock.react'),
{className:"_2f5n _4br2 _29ew _3dug",

description:q.description,
source:q.source,
title:q.video_title,
url:q.uri,
width:p&&p.x}));};


function o(){i.apply(this,arguments);}o.propTypes={attachment:k.object.isRequired,isVisible:k.bool,onClick:k.func,onSelect:k.func};


f.exports=o;}),null);

/** js/mercury/clients/messenger/MessengerPhotosGroup.react.js */






__d('MessengerPhotosGroup.react',['cx','ActorURI','ChatSpeakingSticker.react','MercuryAttachment','MercuryAttachmentType','MercuryIDs','MessagingGiftWrap.react','MessagingFlowerBorder.react','MessengerAttachmentViewer','MessengerPhoto.react','MessengerVideo.react','MessengerVideoXMA.react','MessagesViewerSetID','React','MessengerThreadSharedPhotos.react','URI','Vector','getPageIDFromThreadID','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,






















k='empty-spacer',

l=c('React').PropTypes;i=babelHelpers.inherits

(m,c('React').PureComponent);j=i&&i.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.

































state=
{findID:null},this.






































$MessengerPhotosGroup_handleOpenNewSharedPhotosView=function(s){
this.setState({findID:s});}.
bind(this),this.

$MessengerPhotosGroup_handleCloseNewSharedPhotosView=function(){
this.setState({findID:null});}.
bind(this),this.

$MessengerPhotosGroup_onChildClicked=function(s){
if(s.preview_uploading)
return;

if(s.attach_type===c('MercuryAttachmentType').VIDEO){
c('MessengerAttachmentViewer').renderVideo
({pageID:this.props.pageID,
rootClassName:"_1j1h",
videoID:s.metadata.fbid,
videoSize:new (c('Vector'))
(s.metadata.dimensions.width,
s.metadata.dimensions.height),

videoURI:s.url});}else


if(s.attach_type===c('MercuryAttachmentType').PHOTO||
s.attach_type===c('MercuryAttachmentType').THIRDPARTYSTICKER||
s.attach_type===c('MercuryAttachmentType').ANIMATED_IMAGE){

var t=this.props.attachments.length===1,
u=s.url,
v=null;

if(!this.props.isXMA&&
s.attach_type===c('MercuryAttachmentType').PHOTO&&
this.props.count){

var w=this.props.count,
x=this.props.message,
y=x&&x.thread_fbid;
if(x&&!y)
y=c('MercuryIDs').getThreadFBIDFromThreadID(x.thread_id);

t=w===1;
u=
new (c('URI'))('/ajax/messaging/attachments/sharedphotos.php').
setQueryData
({thread_id:y,
image_id:s.metadata.fbid});

if(this.props.pageID)
u=
new (c('ActorURI').create)(u,this.props.pageID);

v=c('MessagesViewerSetID').MESSAGES_VIEW_ALL_IN_THREAD;}


c('MessengerAttachmentViewer').bootstrapWithConfig
({actorid:this.props.pageID,
dimensions:s.metadata.dimensions,
disableForward:!!this.props.pageID,
disablePaging:t,
endpoint:u,
fbid:s.metadata.fbid,
rootClassName:"_1j1h",
setID:v,
snapToPhoto:true,
src:s.preview_url});}else

if(s.uri)

window.open(s.uri);}.

bind(this),o;}m.prototype.componentDidMount=function(){c('MessengerAttachmentViewer').preload();};m.prototype.render=function(){var n=this.props.attachments,o=this.props.message?!!c('getPageIDFromThreadID')(this.props.message.thread_id):false,p=this.$MessengerPhotosGroup_rowsFor(n,o);if(this.props.isGiftWrapped)p=c('React').createElement('div',null,p);var q=this.state.findID?this.$MessengerPhotosGroup_renderSpotlightView():null;return c('React').createElement('div',babelHelpers['extends']({},this.props,{tabIndex:'0',className:this.$MessengerPhotosGroup_getRootClassNameFor(n)}),q,p,this.props.isGiftWrapped?c('React').createElement(c('MessagingGiftWrap.react'),{onUnwrap:this.props.onUnwrap}):null,this.props.hasFlowerBorder?c('React').createElement(c('MessagingFlowerBorder.react'),{offset:-10}):null);};m.prototype.

$MessengerPhotosGroup_renderSpotlightView=function(){
var n=this.props.message,
o=n&&n.thread_fbid;
if(n&&!o)
o=c('MercuryIDs').getThreadFBIDFromThreadID(n.thread_id);


return (c('React').createElement(c('MessengerThreadSharedPhotos.react'),
{findFBID:String(this.state.findID.metadata.fbid),
backUpClick:this.$MessengerPhotosGroup_onChildClicked,
onCloseSharedPhotos:this.$MessengerPhotosGroup_handleCloseNewSharedPhotosView,
threadFBID:o}));};


m.prototype.

$MessengerPhotosGroup_rowsFor=function(n,o){
if(n.length===1)
return [this.$MessengerPhotosGroup_photo(n[0],o,true)];

var p=3;

if(n.length===2||n.length===4)
p=2;

var q=[];
for(var r=0,s=n.length;r<s;r+=p){
var t=n.slice(r,r+p),

u=p-t.length;
while(u>0){
t.push
({attach_type:k,
key:'ghost'+u});

u--;}

q.push
(c('React').createElement('div',{className:"_2n8g",key:r},
t.map(function(v){return this.$MessengerPhotosGroup_photo(v,o);}.bind(this))));}



return q;};
m.prototype.

$MessengerPhotosGroup_photo=function(n,o,p){
var q=void 0;
if(n.deduplication_key){
q=n.deduplication_key;}else
if(n.metadata){
q=n.metadata.fbid;}else 

q=n.upload_id;


var r=
{attachment:n,
isSingle:p||false,
key:q,
onAttachmentLoad:this.props.onAttachmentLoad,
onClick:!o&&
!this.props.isPageMessage&&
n.metadata&&
n.metadata.fbid&&
!c('MercuryAttachment').hasAttribution(n)?
this.$MessengerPhotosGroup_handleOpenNewSharedPhotosView:
this.$MessengerPhotosGroup_onChildClicked},

s=this.props.attachType||n.attach_type;
switch(s){
case c('MercuryAttachmentType').PHOTO:
case c('MercuryAttachmentType').ANIMATED_IMAGE:
case c('MercuryAttachmentType').THIRDPARTYSTICKER:
return c('React').createElement(c('MessengerPhoto.react'),r);
case c('MercuryAttachmentType').VIDEO:
if(n.metadata&&n.metadata.render_as_sticker){

return (c('React').createElement(c('ChatSpeakingSticker.react'),
{videoSize:n.metadata.dimensions,
videoURI:n.url}));}else


if(this.props.isXMA)

return (c('React').createElement(c('MessengerVideoXMA.react'),babelHelpers['extends']({},
r,
{isVisible:this.props.isVisible,
onSelect:this.props.onSelect})));



return c('React').createElement(c('MessengerVideo.react'),babelHelpers['extends']({},
r,
{isVisible:this.props.isVisible,
onSelect:this.props.onSelect}));

case k:

return (c('React').createElement('div',
{key:n.key,
className:"_4tsk _4rf-"}));




default:throw new Error
(n.attachType+
' is not handled by MessengerPhotoGroup');}};


m.prototype.

$MessengerPhotosGroup_getRootClassNameFor=function(n){
var o=n.length===2||n.length===4;
return c('joinClasses')
(this.props.className,"_2n8h"+


(n.length===1?' '+"_2n8i":'')+
(o?' '+"_4ksk":'')+
(n.length>1&&!o?' '+"_2n8k":'')+(' '+"_5fk1"));};



m.prototype.

$MessengerPhotosGroup_getPhotoIDs=function(n){
var o=[];
n.forEach(function(p){
if(p.metadata&&p.metadata.fbid)
o.push(p.metadata.fbid.toString());});


return o;};
m.propTypes={attachments:l.arrayOf(l.object).isRequired,attachType:l.string,count:l.number,hasFlowerBorder:l.bool,isGiftWrapped:l.bool,isPageMessage:l.bool,isXMA:l.bool,isVisible:l.bool,message:l.object,onAttachmentLoad:l.func,onSelect:l.func,onUnwrap:l.func,pageID:l.string};


f.exports=m;}),null);

/** js/mercury/clients/messenger/MessengerStickerUtils.js */






__d('MessengerStickerUtils',['MercuryAttachmentType'],(function a(b,c,d,e,f,g){

'use strict';






function h(k){

return !!(k&&
k.attach_type===c('MercuryAttachmentType').STICKER);}



function i(k){
var l=k.attachments;

return !!(k.is_like_preview||
k.sticker_id||
l&&
l.length===1&&
h(l[0]));}




function j(k){
return k.size===1&&i(k.first());}


f.exports=
{isStickerMessageGroup:j,
isStickerMessage:i,
isStickerAttachment:h};}),null);

/** js/mercury/clients/messenger/components/MessengerVoiceClipAttachment.react.js */






__d('MessengerVoiceClipAttachment.react',['cx','MercuryAttachmentAudioClip.react','MercuryShareAttachmentRenderLocations','MessagingGiftWrap.react','MessagingFlowerBorder.react','React','messengerCustomColorUtils'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,










k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.
















render=function(){
var m=this.props.attachment,
n=m.metadata.duration/1000,

o=!!m.app_attribution,
p={};
if(this.props.customColor)
p=c('messengerCustomColorUtils').customBubbleStyle
(this.props.customColor,
p);



var q=this.props.isGiftWrapped?
c('React').createElement(c('MessagingGiftWrap.react'),{onUnwrap:this.props.onUnwrap}):
null,
r=this.props.hasFlowerBorder?
c('React').createElement(c('MessagingFlowerBorder.react'),{offset:-10}):
null;


return (c('React').createElement('div',
{className:"_hh7"+(' '+"_s1-")+


(!!this.props.customColor?' '+"_5sxi":'')+
(!o?' '+"_52mr":'')+
(o?' '+"_mxz":'')+(' '+"_1fz8")+

(o?' '+"_1-wa":'')+(' '+"_1nqp"),


style:p},
c('React').createElement(c('MercuryAttachmentAudioClip.react'),
{customColor:this.props.customColor,
src:m.url,
duration:n,
key:'audio:'+this.props.message.message_id,
showHelp:false,
width:200,
location:c('MercuryShareAttachmentRenderLocations').MESSENGER,
rootClassName:"_3czg"+

(o?' '+"_4yjw":'')+(' '+"_2poz")+(' '+"_ui9")}),




q,
r));};


function l(){i.apply(this,arguments);}l.propTypes={attachment:k.object.isRequired,customColor:k.string,isGiftWrapped:k.bool,message:k.object.isRequired,onUnwrap:k.func};


f.exports=l;}),null);

/** www/__virtual__/x/XStickerInTrayController.js */



__d("XStickerInTrayController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/stickers\/in_tray\/",{pack_id:{type:"Int",required:true}});}),

null);

/** js/stickers/StickersPackInTray.js */





__d('StickersPackInTray',['Promise','AsyncRequest','RelayQL','RelayStore','XStickerInTrayController','createRelayQuery'],(function a(b,c,d,e,f,g){

'use strict';








var h=

{onIsPackInTray:function i
(j,
k,
l){

var m=c('createRelayQuery')(function(){return {children:[{children:[{calls:[{kind:'Call',metadata:{type:'StickerInterfaces'},name:'interface',value:{kind:'CallVariable',callVariableName:'stickerInterface'}},{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallValue',callValue:10000}}],children:[{children:[{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'StickerPack'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'PacksInTrayEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'tray_packs',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'PacksInTrayConnection'}],fieldName:'sticker_store',kind:'Field',metadata:{canHaveSubselections:true},type:'StickerStore'}],fieldName:'viewer',kind:'Query',metadata:{},name:'StickersPackInTray',type:'Viewer'};}(),















{stickerInterface:k}),

n=c('RelayStore').readQuery(m);
n=n&&n.length>0?n[0]:null;
if(n&&
n.sticker_store&&
n.sticker_store.tray_packs&&
n.sticker_store.tray_packs.edges)

return new (c('Promise'))(function(p,q){return p
({in_sticker_tray:n.sticker_store.tray_packs.edges.
filter(function(r){return r.node.id===j;}).
length>0});}).
then(l);

var o=c('XStickerInTrayController').getURIBuilder().
setInt('pack_id',j).
getURI();
return new (c('Promise'))(function(p,q){
return (new (c('AsyncRequest'))(o).setHandler
(function(r){return p(r.getPayload());}).
setAllowCrossPageTransition(true).send());}).
then(l);}};




f.exports=h;}),null);

/** js/mercury/clients/messenger/isRetina.js */




__d('isRetina',[],(function a(b,c,d,e,f,g){

'use strict';

f.exports=function(){return (window.devicePixelRatio||1)>1;};}),null);

/** js/mercury/clients/messenger/MessengerAttachmentRenderer.js */






__d('MessengerAttachmentRenderer',['cx','EmojiSticker.react','MercuryAttachment','MercuryAttachmentType','MercuryAudioType','MercuryShareAttachment.react','MercuryShareAttachmentRenderLocations','MessagingFlowerBorder.react','MessagingFlowerBorderChecker','MessagingGiftWrap.react','MessagingGiftWrapChecker','MessengerErrorAttachment.react','MessengerFileAttachment.react','MessengerFromViewerUtils','MessengerHotLikePreview.react','MessengerHotLikeUtils','MessengerPhotosGroup.react','MessengerStickerUtils','MessengerSupportedEmojiUtils','MessengerVoiceClipAttachment.react','MessengerWebDriverTestIDs','React','Set','Sticker.react','StickerAssetType','StickerConstants','StickerInterfaces','StickerUtils','StickersActions','StickersPackInTray','StickersStoreController','StoryAttachmentStyle','XStickerAssetController','isRetina','wrapNullableForReact'],(function a(b,c,d,e,f,g,h){

'use strict';









































var i=700,
j='sticker:',
k='giftwrap:',
l='share:',
m="_1c_u",


n=function p(q){return q===Object(q);},











o=
{getAttachmentsInsideBubble:function p
(q,
r){

var s=c('MercuryAttachment').
get(q).
filter(n).
filter(function(t){
return (!this.attachmentShouldAppearOutsideBubble(t));}.bind(this));

return this._getAttachmentComponents
(s,
q,
r);},



getAttachmentsOutsideBubble:function p
(q,
r,
s){

var t=c('MercuryAttachment').
get(q).
filter(n).
filter(function(u){
return (this.attachmentShouldAppearOutsideBubble(u));}.bind(this));

return this._getAttachmentComponents
(t,
q,
r,
s);},



_getAttachmentComponents:function p
(q,
r,
s,
t){

var u=this._getPhotosGroup
(q.filter(c('MercuryAttachment').isPhotoGroupAttachment),
r,
s,
t),

v=q.
filter(function(w){return !c('MercuryAttachment').isPhotoGroupAttachment(w);}).
map(function(w,x){return this._getAttachmentComponent
(w,
r,
s,
t,
x===0);}.bind(this));

if(u)
v.push(u);

return v;},


_getAttachmentComponent:function p
(q,
r,
s,
t,
u){

var v=t&&t.customColor,
w=t&&t.onUnwrap,
x=t&&t.isVisible,
y=t&&t.onSelect,
z=t&&t.messageBubble;
if(c('MessengerStickerUtils').isStickerAttachment(q))
return this._getStickerComponent
(q,
r,
v,
w);


if(this.isEmojiLikeAttachment(q))
return this._getEmojiLikeAttachment(q,r,w);

if(this.isVoiceClip(q))
return this._getVoiceClip(q,r,v,w);

if(this.isFileAttchment(q))
return this._getFileComponent(q,r);


if(this.isP2P(q)||
this.isShareAttachment(q))

return this._getShareAttachment
(q,
r,
s,
x,
y,
u?z:null);


if(this.isErrorAttachment(q))
return this._getErrorAttachment(q,r);

return null;},


_getStickerComponent:function p
(q,
r,
s,
t){

if(r.is_like_preview)
return this._maybeGiftWrapSticker
(c('React').createElement(c('MessengerHotLikePreview.react'),
{customColor:s,
customLike:r.customLike,
key:'hlp:'+r.like_preview_since,
since:r.like_preview_since}),

r,
t);





var u=q.metadata;

if(!u){


u=
c('MessengerHotLikeUtils').getMetadataForHotLike(r.sticker_id);

if(!u){
u={};var v=
c('StickerUtils').getScaledDimensions
(c('StickerConstants').THREAD_SIZE,
c('StickerConstants').THREAD_SIZE,
c('StickerConstants').THREAD_SIZE),w=v.height,x=v.width;

u.height=w;
u.width=x;}

u.stickerID=r.sticker_id;}

var y=c('XStickerAssetController').getURIBuilder().
setInt('sticker_id',u.stickerID),
z=null,
aa=null;
if(c('isRetina')()){
z=u.paddedSpriteURI2x;
aa=u.spriteURI2x;}else{

z=u.paddedSpriteURI;
aa=u.spriteURI;}


var ba=u.stickerID.toString(),
ca=
c('React').createElement(c('Sticker.react'),
{className:"_2poz"+(' '+"_ui9")+



(c('MessagingGiftWrapChecker').shouldRenderWithGiftWrap(r)&&
!!c('MessengerHotLikeUtils').getMetadataForHotLike(ba)?' '+"_4ue_":''),

animationTrigger:'hover',
customColor:s,
frameCount:u.frameCount||1,
frameRate:u.frameRate||c('StickerConstants').DEFAULT_FRAME_RATE,
framesPerCol:u.framesPerCol||1,
framesPerRow:u.framesPerRow||1,
key:j+r.message_id,
onStickerClick:function da(ea,fa){
c('StickersPackInTray').onIsPackInTray
(ea,
c('StickerInterfaces').MESSAGES,
function(ga){
if(ga.in_sticker_tray){
c('StickersActions').selectTrayPack(ea);
c('StickersActions').showStickerFlyout(r.thread_id);}else 

c('StickersStoreController').showStore(ea);});},




packID:u.packID&&u.packID.toString(),
paddedSpriteURI:z,
sourceHeight:u.height,
sourceURI:
y.setEnum('image_type',c('StickerAssetType').IMAGE).getURI().toString(),

sourceWidth:u.width,
spriteURI:aa,
stickerID:ba,
testID:c('MessengerWebDriverTestIDs').STICKER});

return this._maybeGiftWrapSticker(ca,r,t);},


_getEmojiLikeAttachment:function p
(q,
r,
s){

var t=c('MessengerSupportedEmojiUtils').transferSize(q.size),
u=
c('MessengerSupportedEmojiUtils').getNewEmojiData(r.body,t),
v=u?u.emoji:undefined;
if(!u)
return this._getErrorAttachment(q,r);

var w=
c('React').createElement(c('EmojiSticker.react'),
{className:"_2poz _ui9",

key:j+r.message_id,
emoji:r.body,
emojiImage:v,
sourceURI:''});

return this._maybeGiftWrapSticker
(w,
r,
s);},



_getShareAttachment:function p
(q,
r,
s,
t,
u,
v){

var w=null;
if(r&&r.platform_xmd)
w=JSON.parse(r.platform_xmd);

return c('React').createElement(c('MercuryShareAttachment.react'),
{attachment:q.share,
isSponsored:r.is_sponsored,
isVisible:!!t,
key:l+r.message_id,
location:c('MercuryShareAttachmentRenderLocations').MESSENGER,
maxWidth:i,
messageBubble:v,
messageID:r.message_id,
mnMessageType:w&&w.template_type,
onComponentLoaded:s,
onSelect:u,
pageID:r.author,
threadID:r.thread_id});},



_getVoiceClip:function p
(q,
r,
s,
t){

s=c('MessengerFromViewerUtils').isFromViewer(r)?
s||undefined:
undefined;

return (c('React').createElement(c('MessengerVoiceClipAttachment.react'),
{attachment:q,
customColor:s,
isGiftWrapped:
c('MessagingGiftWrapChecker').shouldRenderWithGiftWrap(r),

hasFlowerBorder:
c('MessagingFlowerBorderChecker').shouldRenderWithFlowerBorder(r),

key:'audio:'+r.message_id,
message:r,
onUnwrap:function(u){function v(){return u.apply(this,arguments);}v.toString=function(){return u.toString();};return v;}(function(){t&&t();})}));},




_getErrorAttachment:function p(q,r){

return (c('React').createElement(c('MessengerErrorAttachment.react'),
{attachment:q,
key:'error:'+r.message_id}));},




_getPhotosGroup:function p
(q,
r,
s,
t){

if(!q.length)
return null;

var u=t&&t.onUnwrap,
v=t&&t.isVisible,
w=t&&t.onSelect,
x=t&&t.isPageMessage,
y=t&&t.pageID,
z=
c('MessagingFlowerBorderChecker').shouldRenderWithFlowerBorder(r),
aa=
c('MessagingGiftWrapChecker').shouldRenderWithGiftWrap(r)&&

this._rendersWithoutAttribution(q);

return (c('React').createElement(c('MessengerPhotosGroup.react'),
{attachments:q,
className:"_2poz _52mr _ui9",

count:q.length,
hasFlowerBorder:z,
isGiftWrapped:aa,
isPageMessage:x,
isVisible:!!v,
key:'photos:'+r.message_id,
message:r,
onSelect:w,
onUnwrap:function(ba){function ca(){return ba.apply(this,arguments);}ca.toString=function(){return ba.toString();};return ca;}(function(){u&&u();}),
pageID:y}));},




getVideoElem:function p(q,r){
var s=
r.getMessageElement(q);
if(!s)
return null;

var t=s.getElementsByClassName(m);
return t&&t.length?
t[0]:
s;},


_rendersWithoutAttribution:function p(q){
return q.length!=1||
!c('MercuryAttachment').hasAttribution(q[0]);},


_getFileComponent:function p(q,r){

return (c('React').createElement(c('MessengerFileAttachment.react'),
{attachment:q,
className:"_2poz",
key:'file:'+q.url}));},




attachmentShouldAppearOutsideBubble:function p(q){
return c('MessengerStickerUtils').isStickerAttachment(q)||
c('MercuryAttachment').isPhotoGroupAttachment(q)||
this.isShareAttachment(q)||
this.isP2P(q)||
this.isVoiceClip(q)||
this.isErrorAttachment(q)||
this.isEmojiLikeAttachment(q);},


isPhotosGroupAttachment:function p(q){
var r=q.props.attachments;
return !!r&&r.length>1&&
r.some(function(s){
return !!s&&c('MercuryAttachment').isPhotoGroupAttachment(s);});},



isRenderedShareAttachment:function p(q){

return !!(q.key&&
q.key.startsWith(l));},



isFileAttchment:function p(q){
return q.attach_type===c('MercuryAttachmentType').FILE;},


isShareAttachment:function p(q){

return !!(this._isStoryBased(q)&&
!this.isP2P(q)&&
(q.share.style_list.indexOf(c('StoryAttachmentStyle').SHARE)>-1||
q.share.style_list.indexOf(c('StoryAttachmentStyle').FALLBACK)>-1));},




isSharedVideoAttachment:function p(q){
var r=
q.attach_type===c('MercuryAttachmentType').SHARE&&
q.share&&
q.share.subattachments&&
q.share.subattachments[0];
return !!(r&&
r.target&&
r.target.video_id);},



isP2P:function p(q){

return !!(this._isStoryBased(q)&&
q.share.style_list.indexOf(c('StoryAttachmentStyle').ORION)>-1);},




_isStoryBased:function p(q){

return !!(q.attach_type===c('MercuryAttachmentType').SHARE&&
q.share&&
q.share.style_list);},



isEmojiLikeAttachment:function p(q){
return q.attach_type===c('MercuryAttachmentType').EMOJI_LIKE;},


isVoiceClip:function p(q){
return !!q.metadata&&
(q.metadata.type===c('MercuryAudioType').AudioClip||
q.metadata.type===c('MercuryAudioType').VoiceMessageWithTranscript);},


isVoiceClipAttachment:function p(q){
var r=c('MercuryAttachment').
get(q).
filter(n).
filter(function(s){
return (this.isVoiceClip(s));}.bind(this));


return !!r.length;},


isP2PAttachment:function p(q){
var r=c('MercuryAttachment').
get(q).
filter(function(s){
return (n(s)&&this.isP2P(s));}.bind(this));


return !!r.length;},


isSingleVideoAttachment:function p(q){
var r=c('MercuryAttachment').
get(q).
filter(n).
filter(function(s){
return (c('MercuryAttachment').isVideoAttachment(s));});


return r.length===1;},


isSharedVideoAttachmentMessage:function p(q){
var r=c('MercuryAttachment').
get(q).
filter(n).
filter(function(s){
return (this.isSharedVideoAttachment(s)||
this.isGenieSharedVideoAttachment(s));}.bind(this));

return r.length===1;},


isGenieSharedVideoAttachment:function p(q){
return !!(q.attach_type===c('MercuryAttachmentType').SHARE&&
q.share&&
q.share.style_list.
indexOf(c('StoryAttachmentStyle').GENIE_MESSAGE)>-1&&
q.share.target&&
q.share.target.attachment&&
this.isSharedVideoAttachment(q.share.target.attachment));},



isErrorAttachment:function p(q){
return q.attach_type===c('MercuryAttachmentType').ERROR;},


_maybeGiftWrapComponentForMessage:function p
(q,
r,
s){

var t=
c('MessagingGiftWrapChecker').shouldRenderWithGiftWrap(r),
u=
c('MessagingFlowerBorderChecker').shouldRenderWithFlowerBorder(r);
if(!t&&!u)
return q;



return (c('React').createElement('div',
{key:k+r.message_id},
q,
t?
c('React').createElement(c('MessagingGiftWrap.react'),{onUnwrap:c('wrapNullableForReact')(s)}):
null,

u?c('React').createElement(c('MessagingFlowerBorder.react'),{offset:-10}):null));},




_maybeGiftWrapSticker:function p
(q,
r,
s){

var t=
c('MessagingGiftWrapChecker').shouldRenderWithGiftWrap(r),
u=
c('MessagingFlowerBorderChecker').shouldRenderWithFlowerBorder(r);
if(!t&&!u)
return q;



return (c('React').createElement('div',{key:k+r.message_id},
q,
t?
c('React').createElement(c('MessagingGiftWrap.react'),
{isSticker:true,
onUnwrap:c('wrapNullableForReact')(s)}):

null,

u?c('React').createElement(c('MessagingFlowerBorder.react'),{offset:-10}):null));}};





f.exports=o;}),null);

/** js/mercury/clients/messenger/shouldNotRenderSegoe.js */





__d('shouldNotRenderSegoe',['MessengerConfig','UserAgent'],(function a(b,c,d,e,f,g){

'use strict';











var h=new RegExp('[\u0530-\u05f4\u10a0-\u10ff]'),
i=c('UserAgent').isBrowser('Chrome')&&
c('UserAgent').isPlatform('Windows 10');

f.exports=function j(k){

return (!c('MessengerConfig').SegoeUIDisabled&&
i&&
h.test(k));};}),

null);

/** js/mercury/clients/messenger/components/MessengerBubble.react.js */






__d('MessengerBubble.react',['cx','EmojiOnlyMessage.react','immutable','ImmutableObject','MercuryIDs','MercuryMessageBody.react','MessengerActions','MessengerDecorator','MessengerSupportedEmojiUtils','React','joinClasses','shouldNotRenderSegoe'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,















k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').PureComponent);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.
































state={emojis:undefined},n;}l.prototype.

componentDidMount=function(){
if(!this.props.emojis){
var m=this.props.body||'',
n=c('MessengerSupportedEmojiUtils').getEmojiOnlyContents(m);
if(n&&n.length)
this.setState({emojis:n});}};


l.prototype.

render=function(){
var m=false,
n=null;
if(this.state.emojis){
n=
c('React').createElement(c('EmojiOnlyMessage.react'),
{contents:this.state.emojis});}else{


m=true;
n=
c('React').createElement(c('MercuryMessageBody.react'),
{body:this.props.body,
className:"_3oh-"+


(c('shouldNotRenderSegoe')(this.props.body||'')?' '+"_2por":'')+(' '+"_58nk"),


threadCustomColor:this.props.threadCustomColor,
isFromViewer:this.props.isFromViewer,
ranges:this.props.ranges,
metaRanges:this.props.metaRanges,
threadID:this.props.threadID,
customLike:this.props.customLike,
onContactSelect:this.$MessengerBubble_handleContactSelect});}



var o=[],
p=[],
q=this.props.message,
r=!!this.props.isFromViewer;
if(q){
c('MessengerDecorator').getInsideDecorators().concat
(c('MessengerDecorator').getAfterDecorators()).
forEach(function(u){
if(u.check(q)){
o.push(u.render
(q,
r,
this.props));

p.push(u.getAdditionalClassNames());}}.

bind(this));
c('MessengerDecorator').getBeforeDecorators().forEach(function(u){
if(u.check(q))
p.push(u.getAdditionalClassNames());});}



var s=p.join(' '),
t=this.props.body?
c('React').createElement('div',{className:"_aok"},
n,
this.props.attachments):

null;


return (c('React').createElement('div',babelHelpers['extends']({},
this.props,
{className:c('joinClasses')
(s,
this.props.className,"_hh7"+(' '+"_s1-")+



(!this.props.notBubblish?' '+"_52mr":'')+

(this.props.isP2PAttachment?' '+"_4z55":'')+
(!!this.state.emojis?' '+"_2f5r":'')+
(!!this.state.emojis?' '+"_581a":'')+

(this.props.isFromViewer&&!this.state.emojis?' '+"_43by":'')+
(m?' '+"_3oh-":''))}),


t,
!t?n:null,
!t?this.props.attachments:null,
o));};


l.prototype.

$MessengerBubble_handleContactSelect=function(m,n){
n&&n.preventDefault();
var o=c('MercuryIDs').getThreadIDFromUserID(m.id);
o&&c('MessengerActions').selectThread(o);};
l.propTypes={attachments:k.instanceOf(c('immutable').List),body:k.string,customColor:k.string,customLike:k.object,isFromViewer:k.bool,message:k.instanceOf(c('ImmutableObject')),metaRanges:k.array,notBubblish:k.bool,onUnwrap:k.func,ranges:k.array,threadID:k.string,threadCustomColor:k.string};


f.exports=l;}),null);

/** js/mercury/clients/messenger/MessengerCodePasteUtils.js */






__d('MessengerCodePasteUtils',['cx','BanzaiODS','MessengerBubble.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';







var i=/`{3,}/;

function j(l){

return !!(l&&
l.search(i)!==-1&&
l.split('\n').length>1);}



function k
(l,
m,
n,
o){

var p=l.split(i),
q=[];

for(var r=0;r<p.length;r+=2){

var s=p[r].trim();
if(s&&s.length>0)
q.push
(c('React').createElement(c('MessengerBubble.react'),
{key:r,
body:s,
customColor:o||undefined,
className:"clearfix _3058 _ui9",

ranges:m,
threadID:n}));





if(r+1<p.length&&p[r+1]){
var t=p[r+1].split('\n'),

u=t[0].replace(/[^a-zA-Z]+/g,''),
v=t.slice(1).join('\n');

c('BanzaiODS').bumpEntityKey('messenger_code_paste','render_bubble');

q.push
(c('React').createElement('div',
{key:r+1,
className:"_3058 _wu0 _52mr"},

c('React').createElement('div',{ref:'syntaxTarget'+r,className:'language-'+u},
v)));}}






return q;}


f.exports=
{containsCodeBlock:j,
getCodeAndMessageBubbles:k};}),null);

/** js/mercury/clients/messenger/actions/MNCommercePromotionStateActions.js */






__d('MNCommercePromotionStateActions',['MessengerDispatcher','MNCommerceActionTypes'],(function a(b,c,d,e,f,g){

'use strict';




var h=
{stateLoaded:function i(j){
c('MessengerDispatcher').dispatch
({type:c('MNCommerceActionTypes').PROMOTION_STATE.LOADED,
state:j});},



stateLoadError:function i(j){
c('MessengerDispatcher').dispatch
({type:c('MNCommerceActionTypes').PROMOTION_STATE.LOAD_ERROR,
pageID:j});},



stateReload:function i(j){
c('MessengerDispatcher').dispatch
({type:c('MNCommerceActionTypes').PROMOTION_STATE.RELOAD,
pageID:j});}};




f.exports=h;}),null);

/** js/mercury/clients/shared/components/MercuryAttachmentAttribution.react.js */







__d('MercuryAttachmentAttribution.react',['cx','fbt','Image.react','ImmutableObject','Link.react','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,










l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').PureComponent);k=j&&j.prototype;m.prototype.









render=function(){
var n=this.$MercuryAttachmentAttribution_getAttribution();
if(!n)
return null;



return (c('React').createElement('div',
{className:c('joinClasses')
(this.props.className,
"_29ew")},

c('React').createElement(c('Image.react'),
{src:n.icon_url,
className:"_29ex"}),

c('React').createElement('span',{className:"_29ey"},
n.name),

this.$MercuryAttachmentAttribution_renderAction()));};


m.prototype.

$MercuryAttachmentAttribution_getAttribution=function(){
return this.props.attachment&&this.props.attachment.app_attribution;};
m.prototype.

$MercuryAttachmentAttribution_renderAction=function(){
var n=this.$MercuryAttachmentAttribution_getAttribution();
if(!n||!n.metadata)
return null;

var o="_439n",
p=void 0;

try{p=JSON.parse(n.metadata);}catch(
q){


return null;}




if(p.spotify_link)

return (c('React').createElement(c('Link.react'),
{className:o,
href:p.spotify_link,
target:'_blank'},i._(["Open","c7c500278548ddc87b05a0c7f748de74"])));







return null;};
function m(){j.apply(this,arguments);}m.propTypes={attachment:l.instanceOf(c('ImmutableObject'))};


f.exports=m;}),null);

/** js/mercury/clients/messenger/components/MessengerAttachmentAttribution.react.js */






__d('MessengerAttachmentAttribution.react',['cx','ImmutableObject','MercuryAttachmentAttribution.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.






render=function(){

return (c('React').createElement(c('MercuryAttachmentAttribution.react'),
{attachment:this.props.attachment,
className:"_2f5n _4br2"}));};



function l(){i.apply(this,arguments);}l.propTypes={attachment:k.instanceOf(c('ImmutableObject'))};


f.exports=l;}),null);

/** js/mercury/clients/messenger/components/MessengerBubbleBlock.react.js */






__d('MessengerBubbleBlock.react',['cx','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits











(k,c('React').Component);j=i&&i.prototype;k.prototype.
render=function(){

return (c('React').createElement('div',
{className:"_52mr _4h13 _3058"},

this.props.children));};


function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/mercury/clients/messenger/components/MessengerCodeBubble.react.js */






__d('MessengerCodeBubble.react',['Bootloader','immutable','MessengerCodePasteUtils','React','ReactDOM'],(function a(b,c,d,e,f,g){

'use strict';var h,i,







j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').PureComponent);i=h&&h.prototype;k.prototype.

















componentDidMount=function(){
c('Bootloader').loadModules(["Prism.Complete"],function(l){
for(var m in this.refs){

var n=c('ReactDOM').findDOMNode(this.refs[m]);
l.highlightElement(n);}}.

bind(this),'MessengerCodeBubble.react');};
k.prototype.

render=function(){
var l=c('MessengerCodePasteUtils').getCodeAndMessageBubbles
(this.props.body,
this.props.ranges,
this.props.threadID,
this.props.customColor);


return c('React').createElement('div',{className:this.props.className},l);};
function k(){h.apply(this,arguments);}k.propTypes={attachments:j.instanceOf(c('immutable').List),body:j.string.isRequired,customColor:j.string,ranges:j.array.isRequired,threadID:j.string.isRequired};


f.exports=k;}),null);

/** js/mercury/clients/messenger/components/MessengerCollapsedLogMessageGroup.react.js */






__d('MessengerCollapsedLogMessageGroup.react',['cx','fbt','Link.react','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k;j=babelHelpers.inherits







(l,c('React').PureComponent);k=j&&j.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.





state=
{collapsed:true},n;}l.prototype.


render=function(){
var m=i._(["See more","7f4326f335173f008af013b7218b76ad"]),





n=i._(["See less","55e5de250112eccd0439a0ac1ed6d580"]);






return (c('React').createElement('div',
{className:"_497p"},i._(["New Activities in the Room.","f9d359338583b7cb25577054f50c8d6e"]),





' ',
c('React').createElement(c('Link.react'),
{className:"_4ea1",
onClick:function(){return this.setState({collapsed:!this.state.collapsed});}.bind(this)},
this.state.collapsed?m:n),

!this.state.collapsed?
c('React').createElement('div',null,
c('React').createElement('div',{className:"_4ea2"}),

this.props.children,
c('React').createElement('div',{className:"_4ea2"})):


null));};





f.exports=l;}),null);

/** js/mercury/clients/messenger/components/MessengerDateBreak.react.js */




__d('MessengerDateBreak.react',['cx','React','formatDate','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.




shouldComponentUpdate=function(m){'use strict';
return this.props.date.getTime()!==m.date.getTime();};
l.prototype.

render=function(){'use strict';
var m=c('formatDate')(this.props.date,
{today:'g:ia',
withinWeek:'D g:ia',
thisYear:'M jS, g:ia',
older:'m/d/Y g:ia'});



return (c('React').createElement('h4',
{className:c('joinClasses')
(this.props.className,
"_497p _2lpt")},

c('React').createElement('time',{className:"_3oh-"},
m)));};



function l(){'use strict';i.apply(this,arguments);}l.propTypes={date:k.instanceOf(Date).isRequired};


f.exports=l;}),null);

/** js/mercury/clients/messenger/components/MessengerHorizontalScroll.react.js */







__d('MessengerHorizontalScroll.react',['ix','cx','fbt','Animation','Image.react','Link.react','React','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';










var k=c('React').PropTypes,

l=250,
m='left',
n='right',
















o=c('React').createClass({displayName:'MessengerHorizontalScroll',
_rightArrowBoundOnClick:Function,
_leftArrowBoundOnClick:Function,

propTypes:





{batchScroll:k.bool.isRequired,



childPadding:k.number.isRequired,





childWidth:k.number.isRequired,





freeScroll:k.bool.isRequired,




leftOffset:k.number.isRequired,






numChildrenVisible:k.number.isRequired,




width:k.number.isRequired},


getInitialState:function p(){
var q=this._calculateState();
return babelHelpers['extends']
({index:0,
scrollLeft:0},
q);},



getDefaultProps:function p(){

return {batchScroll:false,
childPadding:0,
freeScroll:false,
leftOffset:0,
numChildrenVisible:1};},



componentWillMount:function p(){
this._rightArrowBoundOnClick=this._updatePosition.bind
(this,
n);

this._leftArrowBoundOnClick=this._updatePosition.bind
(this,
m);},



componentWillReceiveProps:function p(q){
this.setState(this._calculateState(q));},


render:function p(){
var q=this.props;



if(this.refs&&this.refs.childContainer&&!q.freeScroll)
new (c('Animation'))(this.refs.childContainer).
to('scrollLeft',this.state.scrollLeft).
duration(l).
go();


var r=this._calculateVisibleWidth(),
s=
this.state.scrollLeft===0||
q.freeScroll||
r<q.width,
t=
this.state.scrollLeft===this.state.maxScrollLeft||
q.freeScroll||
r<q.width,

u=q.freeScroll?'scroll':'hidden',
v={overflow:u,width:q.width};


return (c('React').createElement('div',
{className:"_5agf",
style:{width:q.width}},
c('React').createElement(c('Link.react'),
{'aria-label':j._(["See more results from the left","e61961c1460e480b9c6a99c39bf9a428"]),



className:
(s?"hidden_elem":'')+(' '+"_5agg"),


onClick:this._leftArrowBoundOnClick,
role:'button'},
c('React').createElement(c('Image.react'),
{className:"_5agh",
src:h("141823")})),


c('React').createElement(c('Link.react'),
{'aria-label':j._(["See more results from the right","3c1464dc1bbfc42a527f640629ea2eca"]),



className:
(t?"hidden_elem":'')+(' '+"_5agi"),


onClick:this._rightArrowBoundOnClick,
role:'button'},
c('React').createElement(c('Image.react'),
{className:"_5agh",
src:h("141833")})),


c('React').createElement('div',
{className:"_5agj",
ref:'childContainer',
style:v},
c('React').createElement('div',{className:"_5agk"},
this._renderChildren()))));},






_calculateState:function p(q){


if(!q||q.children!==this.props.children)
var r=c('React').Children.map

(this.props.children,
function(s,t){
return this._onChildClick.bind(null,t);}.
bind(this));



return {maxScrollLeft:this._getMaxScrollLeft(),
boundChildOnClicks:r||
this.state.boundChildOnClicks};},



_updatePosition:function p(q){
var r=

c('React').Children.count(this.props.children)-this.props.numChildrenVisible,
s=this.state.scrollLeft,
t=s,
u=this.state.index;

switch(q){
case n:
if(this.props.batchScroll){
u+=this.props.numChildrenVisible;
if(u>r)
u=r;}else 


u+=1;

t=Math.min
(this._getNextScrollLeft(u),
this.state.maxScrollLeft);

break;
case m:
if(this.props.batchScroll){
u-=this.props.numChildrenVisible;
if(u<0)
u=0;}else 


u-=1;


t=Math.max
(0,
this._getNextScrollLeft(u));

break;}


this.setState({scrollLeft:t,index:u});},


_onChildClick:function p(q){

if(this._isVisibleChild(q))
return;


var r=q<this.state.index?
m:
n;
this._updatePosition(r);},


_getNextScrollLeft:function p(q){


if(q===0)
return 0;
var r=







this.props,s=r.width,t=r.childWidth,u=r.childPadding,v=r.leftOffset,w=r.numChildrenVisible,

x=t*w,
y=u*(w-1),



z=(s-(x+y))/2,




aa=q*(u+t)-z;


return aa+v;},


_calculateVisibleWidth:function p(){
var q=this.props,

r=c('React').Children.count(q.children);

return (q.childWidth*r+
q.childPadding*(r-1)+
q.leftOffset);},



_getMaxScrollLeft:function p(){
var q=this._calculateVisibleWidth();
return q-this.props.width;},


_renderChildren:function p(){
var q=this.props,

r=c('React').Children.count(q.children);

return c('React').Children.map(q.children,function(s,t){
var u={};


u.width=q.childWidth;
if(t<r-1)
u.paddingRight=q.childPadding;


if(t===0&&q.leftOffset)
u.paddingLeft=q.leftOffset;

var v=this._isVisibleChild(t),
w=q.freeScroll?
null:
this.state.boundChildOnClicks[t];

return (c('React').createElement('div',
{className:"_5agl"+


(v||q.freeScroll?' '+"_5agm":''),

key:t,
onClick:w,
role:'presentation',
style:u},
s));}.


bind(this));},



_isVisibleChild:function p(q){var r=

this.props,s=r.children,t=r.numChildrenVisible,

u=c('React').Children.count(s),
v=this.state.index,
w=v===u-1,

x=w?
v:
v+t-1,
y=w?
v-(t-1):
v;

return q<=x&&q>=y;}});



f.exports=o;}),null);

/** www/__virtual__/x/XMNCommercePromotionBlockController.js */



__d("XMNCommercePromotionBlockController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messages\/commerce\/promotion\/block\/",{page_id:{type:"String",required:true},type:{type:"String",required:true}});}),

null);

/** js/mercury/clients/messenger/data_managers/commerce/MNCommercePromotionBlockDataManager.js */






__d('MNCommercePromotionBlockDataManager',['AsyncRequest','MNCommercePromotionStateActions','XMNCommercePromotionBlockController'],(function a(b,c,d,e,f,g){

'use strict';h.prototype.






block=function(i,j){
var k=c('XMNCommercePromotionBlockController').getURIBuilder().
setString('page_id',i).
setString('type',j).
getURI();

new (c('AsyncRequest'))().
setURI(k).
setHandler(this.$MNCommercePromotionBlockDataManager_handleResponse).
setErrorHandler(this.$MNCommercePromotionBlockDataManager_handleError).
send();};
h.prototype.

$MNCommercePromotionBlockDataManager_handleResponse=function(i){
var j=i.
getRequest().
uri.
getQueryData(),
k=j.page_id;


c('MNCommercePromotionStateActions').stateReload(k);};
h.prototype.


$MNCommercePromotionBlockDataManager_handleError=function(i){
var j=i.
getRequest().
uri.
getQueryData(),
k=j.page_id;
c('MNCommercePromotionStateActions').stateLoadError(k);};
function h(){}


f.exports=new h();}),null);

/** js/mercury/clients/messenger/components/core/MessengerRadioButton.react.js */






__d('MessengerRadioButton.react',['cx','React','XUIRadioInput.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits






(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.
render=function(){

return (c('React').createElement(c('XUIRadioInput.react'),babelHelpers['extends']({},
this.props,
{className:"__rm"})));};


function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/mercury/clients/messenger/components/core/MessengerRadioList.react.js */






__d('MessengerRadioList.react',['invariant','InputLabel.react','MessengerRadioButton.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,k,l,







m=c('React').PropTypes;i=babelHelpers.inherits

(n,c('React').Component);j=i&&i.prototype;function n(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=j.constructor).call.apply(p,[this].concat(s)),this.





































$MessengerRadioListItem_handleChange=function(event){

event.target instanceof HTMLInputElement||h(0,
'event.target must be an instance of HTMLInputElement');

this.props.onSelect&&this.props.onSelect
(this.props.value);}.

bind(this),q;}n.prototype.render=function(){return c('React').createElement('li',{className:this.props.className},c('React').createElement(c('InputLabel.react'),{display:'inline'},c('React').createElement(c('MessengerRadioButton.react'),{checked:this.props.selectedValue===this.props.value,disabled:!!this.props.disabled,name:this.props.name,onChange:this.$MessengerRadioListItem_handleChange,value:this.props.value}),c('React').createElement('label',null,this.props.children)));};n.propTypes={disabled:m.bool,name:m.string,onSelect:m.func,selectedValue:m.any,value:m.any};k=babelHelpers.inherits





(o,c('React').Component);l=k&&k.prototype;o.prototype.















render=function(){
var p=c('React').Children.map(this.props.children,function(q){
return c('React').cloneElement(q,
{name:this.props.name,
onSelect:this.props.onValueChange,
selectedValue:this.props.selectedValue});},

this);





return c('React').createElement('ul',babelHelpers['extends']({},this.props,{name:null}),p);};
function o(){k.apply(this,arguments);}o.propTypes={name:m.string,onValueChange:m.func,selectedValue:m.any};o.Item=n;


f.exports=o;}),null);

/** js/mercury/clients/messenger/components/messenger_commerce/MNCommercePromotionManageBlockDialog.react.js */









__d('MNCommercePromotionManageBlockDialog.react',['fbt','MessengerEnvironment','Link.react','MessengerRadioList.react','MNCommerceButton.react','MNCommerceDetailsDialog.react','MNCommerceDialogBody.react','MNCommerceDialogFooter.react','MNCommerceDialogTitle.react','MNCommerceBlockTypeJSInstance','React','URI','WorkModeConfig','XUIRadioList.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,




k=c('MessengerRadioList.react').Item,










l=c('XUIRadioList.react').Item,



m=c('React').PropTypes;i=babelHelpers.inherits














(n,c('React').Component);j=i&&i.prototype;















function n(p,q){
j.constructor.call(this,p,q);o.call(this);
this.state=this.$MNCommercePromotionManageBlockDialog_calculateState();}
n.prototype.

componentWillReceiveProps=function(p){
this.setState(this.$MNCommercePromotionManageBlockDialog_calculateState(p));};
n.prototype.

$MNCommercePromotionManageBlockDialog_calculateState=function(p){
var q=p||this.props,
r=c('MNCommerceBlockTypeJSInstance').ALL;
if(q.isAllBlocked||q.isPromotionBlocked)
r=c('MNCommerceBlockTypeJSInstance').NONE;

return {type:r};};
n.prototype.





render=function(){
var p=this.props.merchantName||'',
q=h._(["Manage messages from {label for merchant name}","b1a151d0458074f1884567c2d1a54f22"],[h.param



('label for merchant name',
p)]),


r=h._(["Cancel","e9535665879fc64b041d754f044bb7cd"]),



s=h._(["Confirm","e4feb8043fbe84a11d2daa72c71f13c1"]),



t=h._(["Manage Options couldn't be shown.","a8e10416dc372e7c78f4aed144ef9216"]),



u=c('WorkModeConfig').is_work_user?
new (c('URI'))('https://facebook.com/help/work/1731361900459513').
setSubdomain(c('WorkModeConfig').company_subdomain):
new (c('URI'))('https://www.facebook.com/help/389645087895231'),
v=
c('React').createElement(c('Link.react'),
{href:u,
target:'_blank'},h._(["Learn More","8ed279ad1b36c086ba9c2db02ae10f19"]));





return (c('React').createElement(c('MNCommerceDetailsDialog.react'),babelHelpers['extends']
({errorMessage:t,
onToggle:this.props.onToggle,
shown:this.props.shown},
this.props),
c('React').createElement(c('MNCommerceDialogTitle.react'),{showCloseButton:true},
q),

c('React').createElement(c('MNCommerceDialogBody.react'),null,
this.$MNCommercePromotionManageBlockDialog_renderBody()),

c('React').createElement(c('MNCommerceDialogFooter.react'),{leftContent:v},
c('React').createElement(c('MNCommerceButton.react'),
{label:r,
onClick:this.props.onCancelButtonClick,
use:'default'}),

c('React').createElement(c('MNCommerceButton.react'),
{label:s,
onClick:this.$MNCommercePromotionManageBlockDialog_onConfirm,
use:'confirm'}))));};




n.propTypes={isAllBlocked:m.bool,isPromotionBlocked:m.bool,error:m.object,loading:m.bool.isRequired,merchantName:m.string,onCancelButtonClick:m.func,onConfirmButtonClick:m.func.isRequired,pageID:m.string};var o=function p(){this.onTypeChange=function(q){this.setState({type:q});}.bind(this);this.

$MNCommercePromotionManageBlockDialog_renderBody=function(){
var q=c('MessengerEnvironment').messengerui,
r=q?c('MessengerRadioList.react'):c('XUIRadioList.react'),
s=q?
k:l;

return (c('React').createElement(r,
{selectedValue:this.state.type,
onValueChange:this.onTypeChange},
c('React').createElement(s,
{value:c('MNCommerceBlockTypeJSInstance').ALL},h._(["Receive all messages","a251a2e9a8ef51a5a762faade4fc882b"])),




c('React').createElement(s,
{value:c('MNCommerceBlockTypeJSInstance').NONE},h._(["Turn off all messages","22d22635684b21af7afaefc8eb0ae0e7"]))));}.






bind(this);this.


$MNCommercePromotionManageBlockDialog_onConfirm=function(q){
var r=this.props;
r.onToggle(false);
if(!r.onConfirmButtonClick)
return;

var s=r.pageID;
r.onConfirmButtonClick
(s,
this.state.type);}.

bind(this);};


f.exports=n;}),null);

/** www/__virtual__/x/XMNCommercePromotionStateController.js */



__d("XMNCommercePromotionStateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messages\/commerce\/promotion\/state\/",{page_id:{type:"String",required:true}});}),

null);

/** js/mercury/clients/messenger/data_managers/commerce/MNCommercePromotionStateDataManager.js */






__d('MNCommercePromotionStateDataManager',['AsyncRequest','MNCommercePromotionStateActions','XMNCommercePromotionStateController'],(function a(b,c,d,e,f,g){

'use strict';h.prototype.






fetchPromotionState=function(i){
var j=c('XMNCommercePromotionStateController').getURIBuilder().
setString('page_id',i).
getURI();

new (c('AsyncRequest'))().
setURI(j).
setHandler(this.$MNCommercePromotionStateDataManager_handleResponse).
setErrorHandler(this.$MNCommercePromotionStateDataManager_handleError).
send();};
h.prototype.

$MNCommercePromotionStateDataManager_handleResponse=function(i){
var j=i.
getRequest().
uri.
getQueryData(),
k=j.page_id;
i.payload.pageID=k;
c('MNCommercePromotionStateActions').stateLoaded(i.payload);};
h.prototype.

$MNCommercePromotionStateDataManager_handleError=function(i){
var j=i.
getRequest().
uri.
getQueryData(),
k=j.page_id;
c('MNCommercePromotionStateActions').stateLoadError(k);};
function h(){}


f.exports=new h();}),null);

/** js/mercury/clients/messenger/stores/MNCommercePromotionStateStore.js */






__d('MNCommercePromotionStateStore',['Cache','FluxStore','LoadObject','MessengerDispatcher','MNCommerceActionTypes','MNCommerceCacheTimeoutLimits','MNCommercePromotionStateDataManager'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits









(j,c('FluxStore'));i=h&&h.prototype;


function j(){
i.constructor.call(this,c('MessengerDispatcher'));
this.$MNCommercePromotionStateStore_cache=new (c('Cache'))();}
j.prototype.

__onDispatch=function(k){
var l=k.type,
m=k.pageID||
k.state&&k.state.pageID;
switch(l){
case c('MNCommerceActionTypes').PROMOTION_STATE.LOADED:
var n=k.state;
this.$MNCommercePromotionStateStore_cache.set
(m,
c('LoadObject').empty().setValue(n),
null,
c('MNCommerceCacheTimeoutLimits').SUCCESS_TIMEOUT);

this.__emitChange();
break;

case c('MNCommerceActionTypes').PROMOTION_STATE.LOAD_ERROR:
this.$MNCommercePromotionStateStore_cache.set
(m,
c('LoadObject').empty().setError
(new Error('Unable to load permissions for: '+m)),

null,
c('MNCommerceCacheTimeoutLimits').ERROR_TIMEOUT);

this.__emitChange();
break;

case c('MNCommerceActionTypes').PROMOTION_STATE.RELOAD:
if(m){
this.$MNCommercePromotionStateStore_cache.set
(m,
c('LoadObject').loading());

c('MNCommercePromotionStateDataManager').fetchPromotionState(m);}

this.__emitChange();
break;}};

j.prototype.

getPromotionState=function(k){
if(k&&!this.$MNCommercePromotionStateStore_cache.has(k)){
this.$MNCommercePromotionStateStore_cache.set
(k,
c('LoadObject').loading().setValue({pageID:k}));

c('MNCommercePromotionStateDataManager').fetchPromotionState(k);}

return this.$MNCommercePromotionStateStore_cache.get(k)||c('LoadObject').empty();};



f.exports=new j();}),null);

/** js/mercury/clients/messenger/components/messenger_commerce/MNCommercePromotionManageBlockDialogContainer.react.js */







__d('MNCommercePromotionManageBlockDialogContainer.react',['MNCommerceDialogStateActions','MNCommerceDialogStateStore','MNCommercePromotionManageBlockDialog.react','MNCommercePromotionStateActions','MNCommercePromotionStateStore','PureStoreBasedStateMixin','React'],(function a(b,c,d,e,f,g){

'use strict';









var h=c('React').createClass({displayName:'MNCommercePromotionManageBlockDialogContainer',
mixins:
[c('PureStoreBasedStateMixin')(c('MNCommercePromotionStateStore'))],




statics:
{calculateState:function i(){
var j=c('MNCommerceDialogStateStore').getState(),
k=null;
if(j)
k=j.pageID;

var l=
c('MNCommercePromotionStateStore').getPromotionState(k);

return {shown:!!j,
loading:l.isLoading(),
onConfirmButtonClick:j&&j.onConfirmButtonClick,
pageID:k,
promotionState:l.getValue(),
error:l.getError()};}},






render:function i(){
var j=this.state.promotionState;

return (c('React').createElement(c('MNCommercePromotionManageBlockDialog.react'),
{error:this.state.error,
isAllBlocked:j&&j.is_all_blocked,
isPromotionBlocked:
j&&
j.is_promotion_blocked,

loading:this.state.loading,
merchantName:j&&j.name,
onCancelButtonClick:this._hideDialog,
onToggle:this._onToggle,
pageID:this.state.pageID,
onTryAgain:this._onTryAgainClick,
onConfirmButtonClick:this.state.onConfirmButtonClick,
shown:this.state.shown}));},




_onToggle:function i(j){
if(!j)
this._hideDialog();},



_onTryAgainClick:function i(){
c('MNCommercePromotionStateActions').stateReload(this.state.pageID);},


_hideDialog:function i(){
c('MNCommerceDialogStateActions').hideDialog();}});



f.exports=h;}),null);

/** js/mercury/clients/messenger/components/messenger_commerce/MNCommerceUnlinkDialog.react.js */









__d('MNCommerceUnlinkDialog.react',['fbt','MNCommerceButton.react','MNCommerceDialog.react','MNCommerceDialogBody.react','MNCommerceDialogFooter.react','MNCommerceDialogTitle.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,










k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.












render=function(){
var m=h._(["Cancel","32b66c8188b054a4a076e584f71bc099"]),


n=h._(["Turn Off","d99ce3126192636057e14994870f477e"]);




return (c('React').createElement(c('MNCommerceDialog.react'),
{onToggle:this.props.onToggle,
shown:this.props.shown},
c('React').createElement(c('MNCommerceDialogTitle.react'),{showCloseButton:false},h._(["Unlink account?","c53c13cadb4cb956f252c1d88cd9022e"])),





c('React').createElement(c('MNCommerceDialogBody.react'),null,
c('React').createElement('div',null,h._(["You can turn off updates if you didn't sign up or just don't want to get them anymore.","6e81cb8d5f64a8912ea878f3260b40c3"]))),






c('React').createElement(c('MNCommerceDialogFooter.react'),null,
c('React').createElement(c('MNCommerceButton.react'),
{label:m,
onClick:this.props.onCancelButtonClick,
use:'default'}),

c('React').createElement(c('MNCommerceButton.react'),
{label:n,
onClick:this.props.onTurnOffButtonClick,
use:'confirm'}))));};




function l(){i.apply(this,arguments);}l.propTypes={onCancelButtonClick:k.func,onTurnOffButtonClick:k.func};


f.exports=l;}),null);

/** js/mercury/clients/messenger/components/messenger_commerce/MNCommerceUnlinkErrorDialog.react.js */









__d('MNCommerceUnlinkErrorDialog.react',['fbt','MNCommerceAttachmentConstants','MNCommerceErrors','React','MNCommerceButton.react','MNCommerceDialog.react','MNCommerceDialogBody.react','MNCommerceDialogFooter.react','MNCommerceDialogTitle.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,












k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.





render=function(){
var m=h._(["OK","06db62b74bc6653308a13954baddda8e"]),



n=null,
o=null;
switch(this.props.errorType){
case c('MNCommerceErrors').ALREADY_UNLINKED:
o=
c('React').createElement('div',null,h._(["Updates Are Already Off","d0ed0035787f44f3d8300da588aafbcb"]));




n=
c('React').createElement('div',null,h._(["You aren't getting updates in Messenger.","89ef37dd58725c3035a5b6520bdffbce"]));




break;


default:o=
c('React').createElement('div',null,h._(["Couldn't Turn Off Updates","bdd04c4e6bb12950703683a3160d338e"]));




n=
c('React').createElement('div',null,h._(["Sorry, something went wrong. Please try again.","4896d9cf1f2ceb50c46e2417407a147c"]));




break;}



return (c('React').createElement(c('MNCommerceDialog.react'),
{onToggle:this.props.onToggle,
shown:this.props.shown,
width:c('MNCommerceAttachmentConstants').UNLINK_ERROR_DIALOG.WIDTH},
c('React').createElement(c('MNCommerceDialogTitle.react'),null,
o),

c('React').createElement(c('MNCommerceDialogBody.react'),null,
n),

c('React').createElement(c('MNCommerceDialogFooter.react'),null,
c('React').createElement(c('MNCommerceButton.react'),
{label:m,
onClick:this.props.onOkayButtonClick,
use:'confirm'}))));};




function l(){i.apply(this,arguments);}l.propTypes={errorType:k.number,onOkayButtonClick:k.func};


f.exports=l;}),null);

/** js/mercury/clients/messenger/components/messenger_commerce/MNCommerceUnlinkDialogContainer.react.js */







__d('MNCommerceUnlinkDialogContainer.react',['BanzaiLogger','MNCommerceDialogStateActions','MNCommerceDialogStateStore','MNCommerceLoggingConstants','MNCommerceLoggerEvents','MNCommerceUnlinkDialog.react','MNCommerceUnlinkErrorDialog.react','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits










(j,c('React').Component);i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.







































$MNCommerceUnlinkDialogContainer_onToggle=function(p){
if(!p)
this.$MNCommerceUnlinkDialogContainer_hideDialog();}.

bind(this),this.

$MNCommerceUnlinkDialogContainer_hideDialog=function(){
c('MNCommerceDialogStateActions').hideDialog();},
l;}j.prototype.render=function(){var k=c('MNCommerceDialogStateStore').getState();if(k&&k.errorType){c('BanzaiLogger').log('MessengerCommerceLoggerConfig',{event:c('MNCommerceLoggerEvents').DIALOG_LOAD_SUCCESS,debug_data:JSON.stringify({dialog_surface:c('MNCommerceLoggingConstants').DIALOG_SURFACE.UNLINK_ERROR})});return c('React').createElement(c('MNCommerceUnlinkErrorDialog.react'),{onToggle:this.$MNCommerceUnlinkDialogContainer_onToggle,shown:!!k,errorType:k.errorType,onOkayButtonClick:this.$MNCommerceUnlinkDialogContainer_hideDialog});}else{c('BanzaiLogger').log('MessengerCommerceLoggerConfig',{event:c('MNCommerceLoggerEvents').DIALOG_LOAD_SUCCESS,debug_data:JSON.stringify({dialog_surface:c('MNCommerceLoggingConstants').DIALOG_SURFACE.UNLINK})});return c('React').createElement(c('MNCommerceUnlinkDialog.react'),{onToggle:this.$MNCommerceUnlinkDialogContainer_onToggle,shown:!!k,onCancelButtonClick:this.$MNCommerceUnlinkDialogContainer_hideDialog,onTurnOffButtonClick:k&&k.onTurnOffButtonClick});}};


f.exports=j;}),null);

/** www/__virtual__/x/XMNCommerceUnlinkController.js */



__d("XMNCommerceUnlinkController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messages\/commerce\/unlink\/",{page_id:{type:"String",required:true},user_id:{type:"String",required:true}});}),

null);

/** js/mercury/clients/messenger/data_managers/commerce/MNCommerceUnlinkDataManager.js */






__d('MNCommerceUnlinkDataManager',['AsyncRequest','MNCommerceDialogStateActions','MNCommerceUnlinkDialogContainer.react','XMNCommerceUnlinkController'],(function a(b,c,d,e,f,g){

'use strict';h.prototype.







unlink=function(i,j){
var k=c('XMNCommerceUnlinkController').getURIBuilder().
setString('page_id',i).
setString('user_id',j).
getURI();

new (c('AsyncRequest'))().
setURI(k).
setErrorHandler(this.$MNCommerceUnlinkDataManager_handleError).
send();};
h.prototype.

$MNCommerceUnlinkDataManager_handleError=function(i){
c('MNCommerceDialogStateActions').showDialog(c('MNCommerceUnlinkDialogContainer.react'),

{errorType:i.error});};

function h(){}


f.exports=new h();}),null);

/** js/mercury/utils/MNCommerceLogMessageUtils.js */






__d('MNCommerceLogMessageUtils',['cx','fbt','invariant','BanzaiLogger','Link.react','MercuryConfig','MercuryIDs','MercuryThreads','MNCommerceLoggingConstants','MNCommerceLoggerEvents','MNCommerceDialogStateActions','MNCommerceReplyTypes','MNCommercePromotionBlockDataManager','MNCommercePromotionManageBlockDialogContainer.react','MNCommerceUnlinkDataManager','MNCommerceUnlinkDialogContainer.react','React'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';





var k=c('MercuryThreads').get();l.prototype.















isCommercePageAdminMessage=function(m){

return !!(m&&
m.log_message_data&&
(m.log_message_data.replyType===
c('MNCommerceReplyTypes').COMMERCE_LINK||
m.log_message_data.replyType===
c('MNCommerceReplyTypes').COMMERCE_UNLINK));};

l.prototype.

getCommercePageManage=function(m,n){
var o=null;
if(c('MercuryConfig').WWWMessengerManageAdminGK){

var p=function r(){
var s=c('MercuryIDs').getUserIDFromParticipantID(m.author),

t=function u
(v,
w){

return c('MNCommercePromotionBlockDataManager').block(v,w);};


c('MNCommerceDialogStateActions').showDialog(c('MNCommercePromotionManageBlockDialogContainer.react'),


{pageID:s,
onConfirmButtonClick:t});



c('BanzaiLogger').log('MessengerCommerceLoggerConfig',
{event:c('MNCommerceLoggerEvents').DIALOG_OPENED,
debug_data:JSON.stringify
({dialog_surface:
c('MNCommerceLoggingConstants').DIALOG_SURFACE.MANAGE})});};




o=
c('React').createElement(c('Link.react'),
{className:
(!n?"_2w2m":'')+
(n?' '+"_1jvn":''),

onClick:p},i._(["Manage","c3625ec91a39fcdeac7ef22b73a5f970"]));}else




if(m.log_message_data.replyType===
c('MNCommerceReplyTypes').COMMERCE_LINK){

var q=function r(){
var s=c('MercuryIDs').getUserIDFromParticipantID(m.author),
t=k.getThreadMetaNow(m.thread_id);


t||j(0,
'Thread %s cannot be null or undefined',
m.thread_id);



var u=null;
t.participants.every(function(w){
if(w!==m.author){
u=c('MercuryIDs').getUserIDFromParticipantID(w);
return false;}

return true;});


var v=function w(){
c('MNCommerceDialogStateActions').hideDialog();
c('MNCommerceUnlinkDataManager').unlink(s,u);};


c('MNCommerceDialogStateActions').showDialog(c('MNCommerceUnlinkDialogContainer.react'),

{onTurnOffButtonClick:v});


c('BanzaiLogger').log('MessengerCommerceLoggerConfig',
{event:c('MNCommerceLoggerEvents').DIALOG_OPENED,
debug_data:JSON.stringify
({dialog_surface:
c('MNCommerceLoggingConstants').DIALOG_SURFACE.UNLINK})});};




o=
c('React').createElement(c('Link.react'),
{className:
(!n?"_2w2m":'')+
(n?' '+"_1jvn":''),

onClick:q},i._(["Turn Off","7721de9d8c8e05611cd37bc3a2db88c8"]));}






return (c('React').createElement('span',null,
m.log_message_body,
' ',
o));};


function l(){}


f.exports=new l();}),null);

/** js/mercury/utils/MNAdsMessageUtils.js */






__d('MNAdsMessageUtils',['cx','fbt','AdPageMessageTypeEnum','Bootloader','FBJSON','Link.react','MercuryConfig','MercuryIDs','MessagingGenericAdminTextType','MessagingTag','MNCommerceDialogStateActions','MNCommercePromotionBlockDataManager','React','getPageIDFromThreadID'],(function a(b,c,d,e,f,g,h,i){

'use strict';

















var j='offsite_ad';k.prototype.


isAdsMessageRequest=function(l){
return l.folder==c('MessagingTag').PENDING&&
!!l.last_message_type&&
l.last_message_type!==c('AdPageMessageTypeEnum').NON_AD;};
k.prototype.

renderAdsMessageRequestStatus=function(){
var l=i._(["Sponsored","67533d62dbbca328ebcbdb82105b4150"]);






return (c('React').createElement('span',null,
l));};


k.prototype.

isAdsAdminMessage=function(l){
return l&&
l.log_message_data&&
l.log_message_data.message_type&&
l.log_message_data.message_type===
c('MessagingGenericAdminTextType').AD_MANAGE_MESSAGE;};
k.prototype.

isOffsiteAd=function(l){
if(l.log_message_data&&
l.log_message_data.untypedData&&
l.log_message_data.untypedData.ad_properties){

var m=c('FBJSON').parse
(l.log_message_data.untypedData.ad_properties);

for(var n=m,o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var q;if(o){if(p>=n.length)break;q=n[p++];}else{p=n.next();if(p.done)break;q=p.value;}var r=q;
if(r===j)
return true;}}



return false;};
k.prototype.

getadPreferencesUrl=function(l){
if(l.log_message_data&&
l.log_message_data.untypedData&&
l.log_message_data.untypedData.ad_preferences_url)

return l.log_message_data.untypedData.ad_preferences_url;

return '';};
k.prototype.

getAdsPageManage=function(l,m){
var n=null;
if(c('MercuryConfig').WWWMessengerManageAdminGK){

var o=function(){
var p=this.isOffsiteAd(l),
q=c('getPageIDFromThreadID')(l.thread_id);
if(!q)
q=c('MercuryIDs').getUserIDFromParticipantID(l.author);

var r=this.getadPreferencesUrl(l),

s=function t
(u,
v){

return c('MNCommercePromotionBlockDataManager').block(u,v);};


c('Bootloader').loadModules
(["MNAdsMessagesManageBlockDialogContainer.react"],
function(t){
c('MNCommerceDialogStateActions').showDialog
(t,

{adPreferencesUrl:r,
isOffsiteAd:p,
onConfirmButtonClick:s,
pageID:q});},


'MNAdsMessageUtils');}.

bind(this);

n=
c('React').createElement(c('Link.react'),
{className:
(!m?"_3kyk":'')+
(m?' '+"_3kyl":''),

onClick:o},i._(["Manage","e78d80aa194466201c540b1343e4ba4f"]));







return (c('React').createElement('span',{className:
!m?"_3kym":''},

l.log_message_body,
' ','\u00B7',

' ',
n));}





return (c('React').createElement('span',{className:
!m?"_3kym":''},

l.log_message_body));};


function k(){}


f.exports=new k();}),null);

/** js/mercury/clients/messenger/components/instant_games/routes/MessengerGameAdminMessageRoute.js */






__d('MessengerGameAdminMessageRoute',['RelayQL','RelayRoute'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits




(j,c('RelayRoute'));i=h&&h.prototype;function j(){h.apply(this,arguments);}j.
routeName='MessengerGameAdminMessageRoute';j.
queries=
{adminMessageText:function k(l){return function(m){return {calls:[{kind:'Call',metadata:{type:'MessageData!'},name:'thread_and_message_id',value:{kind:'CallVariable',callVariableName:'messageData'}}],children:[].concat.apply([],[{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},c('RelayQL').__frag(m)]),fieldName:'message',kind:'Query',metadata:{isAbstract:true,identifyingArgName:'thread_and_message_id',identifyingArgType:'MessageData!'},name:'MessengerGameAdminMessageRoute',type:'Message'};}


(l.getFragment('adminMessageText'));}};j.




paramDefinitions=
{messageData:
{type:'MessageData!',
required:true}};




f.exports=j;}),null);

/** js/mercury/clients/messenger/components/MessengerResponsiveBlock.react.js */







__d('MessengerResponsiveBlock.react',['React','shallowEqual'],(function a(b,c,d,e,f,g){

'use strict';var h,i,





j=c('React').PropTypes,





k=
{bottom:0,
left:0,
overflow:'hidden',
position:'absolute',
right:0,
top:0,
visibility:'hidden',
zIndex:-1},

l=
{left:0,
position:'absolute',
top:0,
transition:'0s'},

m=
{height:'200%',
left:0,
position:'absolute',
top:0,
transition:'0s',
width:'200%'};h=babelHelpers.inherits


(n,c('React').Component);i=h&&h.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=i.constructor).call.apply(o,[this].concat(r)),this.



















dirty=false,this.
lastWidth=null,this.
lastHeight=null,this.
lastBreakpointsToggles=null,this.

setupWeirdScrollTracking=function(){


this.refs.expandChild.style.width='10000px';
this.refs.expandChild.style.height='10000px';

this.refs.expand.scrollLeft=100000;
this.refs.expand.scrollTop=100000;

this.refs.shrink.scrollLeft=100000;
this.refs.shrink.scrollTop=100000;}.
bind(this),this.

onScroll=function(){

var t=this.refs.outer.offsetWidth,
u=this.refs.outer.offsetHeight;
if(t!=this.lastWidth||u!=this.lastHeight)
if(!this.dirty){


this.dirty=true;

this.lastWidth=t;
this.lastHeight=u;
var v=
this.props.breakpointsToggles(t,u);
if(c('shallowEqual')(this.lastBreakpointsToggles,v)){
this.dirty=false;}else 

this.forceUpdate(function(){
this.dirty=false;}.
bind(this));

this.lastBreakpointsToggles=v;}


this.setupWeirdScrollTracking();}.
bind(this),p;}n.prototype.

componentDidMount=function(){
this.setupWeirdScrollTracking();};
n.prototype.

render=function(){

return (c('React').createElement('div',{ref:'outer'},
this.props.children
(this.props.breakpointsToggles(this.lastWidth,this.lastHeight)),

c('React').createElement('div',
{style:k,
onScroll:this.onScroll,
ref:'expand'},
c('React').createElement('div',{style:l,ref:'expandChild'})),

c('React').createElement('div',
{style:k,
onScroll:this.onScroll,
ref:'shrink'},
c('React').createElement('div',{style:m}))));};



n.propTypes={children:j.func.isRequired,breakpointsToggles:j.func.isRequired};


f.exports=n;}),null);

/** js/mercury/clients/messenger/components/instant_games/MessengerGamesHorizontalLeaderboard.react.js */






__d('MessengerGamesHorizontalLeaderboard.react',['cx','messengerContactImageReact','MessengerHorizontalScroll.react','MessengerResponsiveBlock.react','React','Relay','RelayQL'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,

k=c('messengerContactImageReact').comp,








l=10,
m=150,

n=function q(r){var s=r.name,t=r.score,u=r.position;

return (c('React').createElement('div',{className:"_4u4_"},
c('React').createElement('h3',null,s),
c('React').createElement('div',null,t)));},




o=function q(r,s){
if(!r||!r.user)
return null;



return (c('React').createElement('div',{className:"_4u50",key:s},
c('React').createElement(k,
{size:40,
src:r.user.profile_picture.uri,
customBadge:String(s+1)}),

c('React').createElement(n,
{name:r.user.short_name,
position:s+1,
score:r.score})));};



i=babelHelpers.inherits

(p,c('React').PureComponent);j=i&&i.prototype;p.prototype.





componentDidMount=function(){
this.props.onLoad&&this.props.onLoad();};
p.prototype.

render=function(){
var q=this.props.leaderboard.leaderboard_entries;

return (c('React').createElement(c('MessengerResponsiveBlock.react'),{breakpointsToggles:function r(s){return [s];}},
function(r){var s=r[0];
return (c('React').createElement(c('MessengerHorizontalScroll.react'),
{batchScroll:true,
childPadding:l,
childWidth:m,
numChildrenVisible:
Math.floor(s/(m+l)),

width:s||0},
q.map(o).filter(Boolean)));}));};




function p(){i.apply(this,arguments);}


f.exports=c('Relay').createContainer
(p,
{fragments:
{leaderboard:function q(){return function(){return {children:[{calls:[{kind:'Call',metadata:{},name:'scores_only',value:{kind:'CallValue',callValue:true}}],children:[{fieldName:'score',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'short_name',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'uri',kind:'Field',metadata:{},type:'Url'}],fieldName:'profile_picture',kind:'Field',metadata:{canHaveSubselections:true},type:'Image'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'user',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'User'}],fieldName:'leaderboard_entries',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'InstantGameLeaderboardEntry'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{},name:'MessengerGamesHorizontalLeaderboard_react_LeaderboardRelayQL',type:'InstantGameLeaderboard'};}();}}});}),null);

/** js/mercury/clients/messenger/components/instant_games/MessengerGamesExpandedAdmin.react.js */







__d('MessengerGamesExpandedAdmin.react',['cx','fbt','MessengerButton.react','messengerContactImageReact','MessengerGamesHorizontalLeaderboard.react','Link.react','React','Relay','RelayQL','idx'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,


l=c('messengerContactImageReact').comp,










m=function o(p){var q=p.name,r=p.uri;
return (c('React').createElement('div',{className:"_261_"},
c('React').createElement(l,
{size:25,
src:r}),

c('React').createElement('h2',{className:"_2620"},q)));};j=babelHelpers.inherits


(n,c('React').PureComponent);k=j&&j.prototype;n.prototype.







componentDidMount=function(){
this.props.onLoad&&this.props.onLoad();};
n.prototype.

render=function(){var o,p,q,r,s,
t=this.$MessengerGamesExpandedAdmin_getLeaderboard(),
u=this.$MessengerGamesExpandedAdmin_getAdminText();
if(!u||!t)
return null;


var v=(o=u)!=null?(p=o.game)!=null?p.name:p:o,
w=(q=u)!=null?(r=q.game)!=null?(s=r.instant_game_info)!=null?s.icon_uri:s:r:q;


return (c('React').createElement('div',null,
c('React').createElement('div',
{className:"_4ea2 _2kar"}),


c('React').createElement(c('Link.react'),
{className:"_fy2 _2621",

'aria-haspopup':'true',
'aria-label':i._(["View Less","4f880e77a19a73fb933c937c316006ae"]),



href:'#',
onClick:this.props.hideAdmin,
role:'button'}),

c('React').createElement(m,
{name:v,
uri:w}),

c('React').createElement('div',{className:"_2622"},
u.expanded_text),

c('React').createElement(c('MessengerGamesHorizontalLeaderboard.react'),
{leaderboard:t,
onLoad:this.props.onLoad}),

c('React').createElement(c('MessengerButton.react'),
{className:"_fy2 _2623",

label:i._(["Play Now","5bbcba5903f006472835081bf0a9694c"]),




onClick:this.props.playGame,
type:'primary',
use:'default'}),

c('React').createElement('div',{className:"_4ea2 _2kar"})));};



n.prototype.

$MessengerGamesExpandedAdmin_getLeaderboard=function(){var o;
return (o=this.$MessengerGamesExpandedAdmin_getAdminText())!=null?o.leaderboard:o;};
n.prototype.

$MessengerGamesExpandedAdmin_getAdminText=function(){var o,p;
return (o=
this.props)!=null?(p=o.
adminMessageText)!=null?p.extensible_message_admin_text:p:o;};

function n(){j.apply(this,arguments);}


f.exports=c('Relay').createContainer
(n,
{fragments:
{adminMessageText:function o(){return function(p){return {children:[{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},{children:[{children:[{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},{children:[{children:[{fieldName:'name',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'icon_uri',kind:'Field',metadata:{},type:'Url'}],fieldName:'instant_game_info',kind:'Field',metadata:{canHaveSubselections:true},type:'GamesInstantPlayStyleInfo'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'game',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Application'},{fieldName:'expanded_text',kind:'Field',metadata:{},type:'String'},{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},c('RelayQL').__frag(p)]),fieldName:'leaderboard',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'InstantGameLeaderboard'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{},name:'InstantGameUpdateExtensibleMessageAdminText',type:'InstantGameUpdateExtensibleMessageAdminText'}],fieldName:'extensible_message_admin_text',kind:'Field',metadata:{canHaveSubselections:true,isAbstract:true},type:'ExtensibleMessageAdminText'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{},name:'GenericAdminTextMessage',type:'GenericAdminTextMessage'},{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{isAbstract:true},name:'IdFragment',type:'Node'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{isAbstract:true},name:'MessengerGamesExpandedAdmin_react_AdminMessageTextRelayQL',type:'Message'};}













(c('MessengerGamesHorizontalLeaderboard.react').getFragment('leaderboard'));}}});}),null);

/** js/mercury/clients/messenger/components/instant_games/MessengerGamesExpandedAdminContainer.react.js */






__d('MessengerGamesExpandedAdminContainer.react',['fbt','MessengerGameAdminMessageRoute','MessengerGamesExpandedAdmin.react','React','Relay'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,





k=c('Relay').RootContainer;i=babelHelpers.inherits



(l,c('React').PureComponent);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.


















renderLoaded=function(r){var s=
this.props,t=s.gameID,u=s.hideAdmin,v=s.playGame,w=s.threadFBID;

return (c('React').createElement(c('MessengerGamesExpandedAdmin.react'),babelHelpers['extends']({},
r,
{gameID:t,
hideAdmin:u,
onLoad:this.props.onLoad,
playGame:v,
threadFBID:w})));}.


bind(this),n;}l.prototype.render=function(){var m=this.props,n=m.messageID,o=m.threadFBID,p=m.renderLoading;return c('React').createElement(k,{Component:c('MessengerGamesExpandedAdmin.react'),route:new (c('MessengerGameAdminMessageRoute'))({messageData:{message_id:n,thread_id:o}}),renderLoading:p,renderFetched:this.renderLoaded,renderFailure:this.renderFailure});};l.prototype.

renderFailure=function(){
return h._(["Failed to Load","2ab03bd484cabaa6aff4b8cfefaf4db8"]);};










f.exports=l;}),null);

/** js/mercury/clients/messenger/components/instant_games/MessengerGameAdminMessage.react.js */







__d('MessengerGameAdminMessage.react',['cx','fbt','BootloadOnRender.react','ImmutableObject','InstantGameContextType','JSResource','LazyComponent.react','Link.react','MercuryIDs','MessengerGamesExpandedAdminContainer.react','MessengerSpinner.react','QuicksilverSources','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,

















l=c('React').PropTypes;j=babelHelpers.inherits












(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.

state=this.$MessengerGameAdminMessage_getInitialState(),this.































































renderText=function(){

return (c('React').createElement('span',null,
c('React').createElement('span',null,this.props.text,' '),
c('React').createElement(c('Link.react'),
{className:"_fy2",
onClick:this.state.isExpanded?
this.$MessengerGameAdminMessage_handleHide:
this.$MessengerGameAdminMessage_handleExpand},i._(["View","927fe224238efb94043753e26fafc8b0"]))));}.







bind(this),this.


































$MessengerGameAdminMessage_handleGameHide=function(){
this.setState({playerOpen:false});}.
bind(this),this.

$MessengerGameAdminMessage_playGame=function(){
this.setState({playerOpen:true});}.
bind(this),this.

$MessengerGameAdminMessage_handleExpand=function(){
this.setState({isExpanded:true});}.
bind(this),this.

$MessengerGameAdminMessage_handleHide=function(){
this.setState({isExpanded:false});}.
bind(this),o;}m.prototype.$MessengerGameAdminMessage_getInitialState=function(){return {isExpanded:this.props.isLastOfType,playerOpen:false};};m.prototype.componentDidMount=function(){this.props.onLoad&&this.props.onLoad();};m.prototype.componentWillReceiveProps=function(n){if(this.props.isLastOfType!==n.isLastOfType)this.setState({isExpanded:n.isLastOfType});};m.prototype.getXMATData=function(){return this.props.message.log_message_data&&this.props.message.log_message_data.untypedData?new (c('ImmutableObject'))(this.props.message.log_message_data.untypedData):new (c('ImmutableObject'))();};m.prototype.render=function(){var n=this.getXMATData(),o=this.renderGame(n.game_id);switch(n.update_type){case 'game_score':return this.state.isExpanded?c('React').createElement('span',null,c('React').createElement(c('MessengerGamesExpandedAdminContainer.react'),{hideAdmin:this.$MessengerGameAdminMessage_handleHide,gameID:n.game_id,messageID:this.props.message.message_id,playGame:this.$MessengerGameAdminMessage_playGame,threadFBID:c('MercuryIDs').getThreadFBIDFromThreadID(this.props.message.thread_id),onLoad:this.props.onLoad,renderLoading:this.renderText}),o):c('React').createElement('span',null,this.renderText(),o);default:return c('React').createElement('span',null,this.props.text);}};m.prototype.renderGame=function(n){var o=c('MercuryIDs').getThreadFBIDFromThreadID(this.props.message.thread_id),p=o?c('InstantGameContextType').THREAD:c('InstantGameContextType').SOLO,q=o;return this.state.playerOpen?c('React').createElement('div',{key:n},c('React').createElement(c('BootloadOnRender.react'),{loader:c('JSResource')('MessengerGamesQuicksilverPlayerContainer.react').__setRef('MessengerGameAdminMessage.react'),placeholder:c('React').createElement(c('MessengerSpinner.react'),null),component:c('React').createElement(c('LazyComponent.react'),{contextSourceID:q,contextType:p,gameID:n,onHide:this.$MessengerGameAdminMessage_handleGameHide,source:c('QuicksilverSources').MESSENGER_ADMIN_MESSAGE,sourceID:o,invitationID:this.props.message.message_id})})):null;};m.propTypes={message:l.instanceOf(c('ImmutableObject')).isRequired,text:l.string.isRequired,isLastOfType:l.bool.isRequired};


f.exports=m;}),null);

/** www/__virtual__/webgraphql/MessengerGroupPollingAllOptionsWebGraphQLQuery.js */






__d("MessengerGroupPollingAllOptionsWebGraphQLQuery",["WebGraphQLQueryHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLQueryHelper").getExports
({docID:"1332332233495274",
queryID:"161810330985999"});}),null);

/** js/mercury/clients/messenger/components/group_polling/MessengerGroupPollingUtils.js */






__d('MessengerGroupPollingUtils',['ix','CurrentUser','FacepileRounded.react','MercuryIDs','MercuryParticipants','MessengerTextWithEntities.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';












var i=2,

j=
{renderEmojiText:function k(l){

return (c('React').createElement(c('MessengerTextWithEntities.react'),
{renderEmoji:true,
renderEmoticons:true,
text:l}));},




renderVoterFacepiles:function k
(l,
m,
n,
o,
p){




var q=i,
r=n-i;
if(n===i+1){
q=n;
r=0;}



return (c('React').createElement(c('FacepileRounded.react'),
{className:l,
imageSize:m,
direction:'descending',
numProfilesToDisplay:q,
remainingProfilesCount:r,
profiles:this._getProfilePictures
(q,
o,
p),

showNames:true}));},




_getProfilePictures:function k
(l,
m,
n){


if(n===true){
var o=c('CurrentUser').getID(),
p=m.indexOf(o);
if(p!==-1){
var q=m[p];
m[p]=m[0];
m[0]=q;}}




var r=m.
slice(0,l).
map(function(t){
var u=c('MercuryIDs').getParticipantIDFromUserID(t),
v=c('MercuryParticipants').getOrFetch(u);


return {image_src:v&&v.image_src||
h("98939"),
name:v&&v.name||'Facebook User'};}),



s=m.
slice(l,m.length).
map(function(t){

return {image_src:t,
name:''};});



return r.concat(s);}};



f.exports=j;}),null);

/** js/mercury/clients/messenger/components/group_polling/MessengerGroupPollingAdminMessage.react.js */







__d('MessengerGroupPollingAdminMessage.react',['cssVar','cx','fbt','ix','AsyncRequest','BootloadOnRender.react','Image.react','ImmutableObject','JSResource','LazyComponent.react','MessengerContextualDialog.react','MessengerEnvironment','MessengerGroupPollingAllOptionsWebGraphQLQuery','MessengerGroupPollingUtils','MessengerSpinner.react','React','idx'],(function a(b,c,d,e,f,g,h,i,j,k){

'use strict';var l,m,




















n=c('React').PropTypes,

o=16,
p=24,

q=k("86887"),

r=k("86886"),


s=3;l=babelHelpers.inherits












(t,c('React').Component);m=l&&l.prototype;function t(){var u,v;for(var w=arguments.length,x=Array(w),y=0;y<w;y++)x[y]=arguments[y];return v=(u=m.constructor).call.apply(u,[this].concat(x)),this.


state=
{flyoutOpen:false,
options:null},this.








$MessengerGroupPollingAdminMessage_clickGuard=false,this.



















































































































































































































$MessengerGroupPollingAdminMessage_handleContextualDialogToggle=function(z){
this.setState({flyoutOpen:z});}.
bind(this),this.

$MessengerGroupPollingAdminMessage_hideFlyout=function(){
this.setState({flyoutOpen:false});}.
bind(this),this.

$MessengerGroupPollingAdminMessage_handleMouseDown=function(z){
this.$MessengerGroupPollingAdminMessage_clickGuard=this.state.flyoutOpen;}.
bind(this),this.

$MessengerGroupPollingAdminMessage_handleClick=function(z){
z.stopPropagation();
if(this.state.flyoutOpen||this.$MessengerGroupPollingAdminMessage_clickGuard)
return;

if(!this.state.options&&!this.state.flyoutOpen)
this.$MessengerGroupPollingAdminMessage_fetchAllOptions();

this.setState({flyoutOpen:!this.state.flyoutOpen});}.
bind(this),v;}t.prototype.render=function(){var u,v,w,x,y,z,aa=this.props.customColor||"#0084ff",ba=c('MessengerGroupPollingUtils').renderEmojiText(this.props.message.log_message_body),ca=c('MessengerEnvironment').messengerui,da=this.props.isLastOfType||this.state.flyoutOpen&&ca;if(!da)return ba;var ea=(u=this.props.message)!=null?(v=u.log_message_data)!=null?(w=v.untypedData)!=null?w.question_json:w:v:u,fa=ea&&JSON.parse(ea);if(!fa)return this.$MessengerGroupPollingAdminMessage_renderLegacyAdminMessage();var ga=ca?p:o,ha=c('React').createElement('div',{className:"_8bt"+(!ca?' '+"_5il4":'')},c('React').createElement(c('MessengerSpinner.react'),{color:'grey'})),ia=null;if(this.state.flyoutOpen)ia=c('React').createElement(c('MessengerContextualDialog.react'),{contextRef:function(){return this.refs.voteButton;}.bind(this),shown:this.state.flyoutOpen,onToggle:this.$MessengerGroupPollingAdminMessage_handleContextualDialogToggle,onBlur:this.$MessengerGroupPollingAdminMessage_hideFlyout},c('React').createElement(c('BootloadOnRender.react'),{component:c('React').createElement(c('LazyComponent.react'),{customColor:aa,questionID:fa.id,questionText:fa.text,options:this.state.options,onSubmitHandler:this.$MessengerGroupPollingAdminMessage_hideFlyout}),loader:c('JSResource')('MessengerGroupPollingFlyout.react').__setRef('MessengerGroupPollingAdminMessage.react'),placeholder:ha}));var ja=((x=fa)!=null?(y=x.options)!=null?(z=y[0])!=null?z.total_count:z:y:x)||0,ka=fa.options.map(function(ma){return c('React').createElement('div',{className:"_3b4a"+(!ca?' '+"_4ic5":''),key:ma.id},c('React').createElement('div',{className:"_3b4c"},c('React').createElement('div',{className:(ca?"_3b4f":'')+(!ca?' '+"_4ic6":'')},c('MessengerGroupPollingUtils').renderEmojiText(ma.text)),c('MessengerGroupPollingUtils').renderVoterFacepiles("_4ic7"+(!ca?' '+"_8kg":''),ga,ma.total_count,ma.voters,ma.viewer_has_voted==='true')),c('React').createElement('div',{className:"_3b4h"+(!ca?' '+"_4ic8":'')},c('React').createElement('span',{style:{width:this.$MessengerGroupPollingAdminMessage_calculateAnswerBarWidth(ma.total_count,ja),backgroundColor:aa}})));}.bind(this)),la=fa.viewer_has_voted==='true'?j._(["Change Vote","3b2380de34da64464c47471070dcc626"]):j._(["Vote","4c5875b6dd3d63c6b51c5095d9704fa4"]);return c('React').createElement('div',null,ba,c('React').createElement('div',{className:"_3b4t"+(!ca?' '+"_4ic9":'')},c('React').createElement('div',{className:"_3b4u"+(!ca?' '+"_2wew":'')},c('React').createElement(c('Image.react'),{className:"_4ica"+(!ca?' '+"_2ozk":''),src:ca?q:r}),j._(["Poll","0c25963c1e22fb1f7c02e38b2d14988a"])),c('React').createElement('div',{className:(ca?"_3b4v":'')+(!ca?' '+"_2wex":'')},c('MessengerGroupPollingUtils').renderEmojiText(fa.text)),c('React').createElement('div',{className:"_3b4w"},ka),c('React').createElement('div',{className:"_8bu"},this.$MessengerGroupPollingAdminMessage_renderMoreAnswersText(fa.total_count)),c('React').createElement('div',{className:"_4icb"+(!ca?' '+"_4icc":'')+(ca?' '+"uiContextualLayerParent":'')+(ca?' '+"_5f0v":''),onClick:this.$MessengerGroupPollingAdminMessage_handleClick,onMouseDown:this.$MessengerGroupPollingAdminMessage_handleMouseDown,ref:'voteButton',role:'button',style:{color:aa},tabIndex:'0'},la,ia)));};t.prototype.$MessengerGroupPollingAdminMessage_renderLegacyAdminMessage=function(){return c('React').createElement('span',null,j._(["{original-admin-message} Use the mobile app to vote.","d40aba3725c7aa265778cdc84e5d8936"],[j.param('original-admin-message',this.props.message.log_message_body)]));};t.prototype.$MessengerGroupPollingAdminMessage_renderMoreAnswersText=function(u){var v=u-s;if(v<=0){return null;}else return j._({"*":["{number of remaining answer options} more options...","c1bd4152b12b9cc4bd71cb5ed30f2557"],"268435456":["{number of remaining answer options} more option...","be1ea22490c8ef2614eec00b54f0424c"]},[j.param('number of remaining answer options',v),j.plural(v)]);};t.prototype.

$MessengerGroupPollingAdminMessage_fetchAllOptions=function(){var u,v,w,
x=(u=
this.props.message)!=null?(v=u.
log_message_data)!=null?(w=v.untypedData)!=null?w.question_id:w:v:u;

if(!x){
this.setState({options:[]});
return;}

var y=c('MessengerGroupPollingAllOptionsWebGraphQLQuery').getURI
({node_id:x});

new (c('AsyncRequest'))().
setURI(y).
setHandler(function(z){
var aa=z.payload.data.node,
ba=aa.options.edges||[],
ca=ba.map(function(da){return da.node;});
this.setState({options:ca});}.
bind(this)).
send();};
t.prototype.

$MessengerGroupPollingAdminMessage_calculateAnswerBarWidth=
function(u,
v){


return (v===0?
'0%':
u/v*100+'%');};

t.propTypes={customColor:n.string,message:n.instanceOf(c('ImmutableObject')).isRequired,isLastOfType:n.bool.isRequired};


f.exports=t;}),null);

/** js/mercury/clients/messenger/components/payment/MessengerPagesCommercePaymentEnabledAdminMessage.react.js */







__d('MessengerPagesCommercePaymentEnabledAdminMessage.react',['cssVar','cx','fbt','ix','Image.react','ImmutableObject','Link.react','MessengerEnvironment','PagesCommerceBuyerNUXDialog.react','React'],(function a(b,c,d,e,f,g,h,i,j,k){

'use strict';var l,m;l=babelHelpers.inherits

















(n,
c('React').PureComponent);m=l&&l.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=m.constructor).call.apply(o,[this].concat(r)),this.





state=
{showDialog:false},this.


$MessengerPagesCommercePaymentEnabledAdminMessage_onDialogConfirm=function(){
this.setState({showDialog:false});}.
bind(this),this.

$MessengerPagesCommercePaymentEnabledAdminMessage_onLearnMoreClick=function(){
this.setState({showDialog:true});}.
bind(this),p;}n.prototype.

render=function(){
var o=c('MessengerEnvironment').messengerui;


return (c('React').createElement('div',{className:o?"_2piv":''},
c('React').createElement(c('Image.react'),
{className:"_3-96",
src:k("275999")}),

c('React').createElement('div',null,this.props.message.log_message_body),
c('React').createElement('div',{className:"_3-8w"},
c('React').createElement(c('Link.react'),
{onClick:this.$MessengerPagesCommercePaymentEnabledAdminMessage_onLearnMoreClick,
style:
{color:"#0084ff",
textDecoration:'none'}},j._(["Learn More","6ebd4299bd8336c2dd279811e8c275a7"]))),






c('React').createElement(c('PagesCommerceBuyerNUXDialog.react'),
{isShown:this.state.showDialog,
onConfirm:this.$MessengerPagesCommercePaymentEnabledAdminMessage_onDialogConfirm})));};






f.exports=n;}),null);

/** js/mercury/renderers/MercuryXMATRenderer.js */







__d('MercuryXMATRenderer',['cx','fbt','invariant','MercuryConfig','MercuryIDs','MercuryParticipants','MessagingGenericAdminTextType','MessengerGameAdminMessage.react','MessengerGroupPollingAdminMessage.react','MessengerPagesCommercePaymentEnabledAdminMessage.react','MessengerTextWithEntities.react','MNAdsMessageUtils','React','FacepileRounded.react','isWebGLEnabled'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';


















var k=

{renderText:function l
(m,
n,
o,
p){

var q=
c('React').createElement(c('MessengerTextWithEntities.react'),
{renderEmoji:true,
renderEmoticons:true,
text:n.log_message_body});


switch(n.log_message_data.message_type){
case c('MessagingGenericAdminTextType').JOURNEY_PROMPT_COLOR:
q=i._(["You need to be on the latest version of Messenger on a mobile device to pick a color for this conversation.","b11da3466629164efbf48a786dfd954b"]);




break;
case c('MessagingGenericAdminTextType').JOURNEY_PROMPT_NICKNAME:
var r=null,
s=c('MercuryIDs').getUserIDFromParticipantID(n.author);
if(n.other_user_fbid&&
s!==n.other_user_fbid){
var t=c('MercuryIDs').getParticipantIDFromUserID
(n.other_user_fbid);

r=c('MercuryParticipants').getOrFetch(t);}

if(r&&r.short_name){
q=i._(["You need to be on the latest version of Messenger on a mobile device to set a nickname for {admin-text-message} .","61fb91a605e91059d789cea538a5059c"],[i.param



('admin-text-message',
r.short_name)]);}else 




q=i._(["You need to be on the latest version of Messenger on a mobile device to set a nickname for yourself.","223392425e92b21d5f0904c89190f31c"]);





break;
case c('MessagingGenericAdminTextType').JOURNEY_PROMPT_LIKE:
q=i._(["You need to be on the latest version of Messenger on a mobile device to pick an emoji for this conversation.","d4c6c397e3942f351efc2a1ae8e594c0"]);




break;
case c('MessagingGenericAdminTextType').INSTANT_GAME_UPDATE:
if(c('MercuryConfig').MessengerGamesGK&&c('isWebGLEnabled')())
q=
c('React').createElement(c('MessengerGameAdminMessage.react'),
{message:n,
text:n.log_message_body,
isLastOfType:o,
onLoad:p});


break;
case c('MessagingGenericAdminTextType').ADS_WELCOME_MSG:
break;
case c('MessagingGenericAdminTextType').AD_MANAGE_MESSAGE:
if(c('MNAdsMessageUtils').isAdsAdminMessage(n))
q=c('MNAdsMessageUtils').getAdsPageManage
(n,
false);


break;
case c('MessagingGenericAdminTextType').CONFIRM_FRIEND_REQUEST:
var u=
n.log_message_data.untypedData.friend_request_recipient,
v=
n.log_message_data.untypedData.friend_request_sender,

w=c('MercuryParticipants').getNow
(c('MercuryIDs').getParticipantIDFromUserID(u)),

x=c('MercuryParticipants').getNow
(c('MercuryIDs').getParticipantIDFromUserID(v));

if(x!=null&&w!=null)
q=
c('React').createElement(c('FacepileRounded.react'),
{profiles:[w,x],
message:n.log_message_body,
numProfilesToDisplay:2,
className:"_8lx"});


break;
case c('MessagingGenericAdminTextType').GROUP_POLL:
q=
c('React').createElement(c('MessengerGroupPollingAdminMessage.react'),
{customColor:m,
message:n,
isLastOfType:o});

break;
case c('MessagingGenericAdminTextType').PAGES_COMMERCE_PAYMENT_ENABLED:
q=
c('React').createElement(c('MessengerPagesCommercePaymentEnabledAdminMessage.react'),
{message:n});

break;

default:break;}

return c('React').createElement('span',null,q);}};



f.exports=k;}),null);

/** js/p2p/components/send_money/P2PGroupSendReceiptDialog.react.js */







__d('P2PGroupSendReceiptDialog.react',['cx','fbt','FacepileRounded.react','Image.react','Link.react','MessengerEnvironment','P2PAmountUtils','P2PBigAmount.react','P2PButton.react','P2PDialog.react','P2PDialogBody.react','P2PDialogFooter.react','P2PDialogTitle.react','P2PLinkConstants','P2PLogger','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','P2PPaymentRequest','P2PPaymentRequestStatus','P2PText.react','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k;j=babelHelpers.inherits































(l,c('React').Component);k=j&&j.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.










































































handleClose=function(){
this.log(c('P2PPaymentLoggerEvent').UI_ACTN_3RD_PARTY_RECEIPT_DISMISSED);
this.props.onClose();}.
bind(this),n;}l.prototype.componentDidMount=function(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_3RD_PARTY_RECEIPT_SHOWN,{raw_amount:this.props.amount});};l.prototype.getReceiverStatusMap=function(){var m;return this.props.individualRequests.reduce(function(n,o){switch(o.currentStatus){case c('P2PPaymentRequestStatus').EXPIRED:case c('P2PPaymentRequestStatus').DECLINED:case c('P2PPaymentRequestStatus').TRANSFER_COMPLETED:n[o.currentStatus].push(o);break;default:n[c('P2PPaymentRequestStatus').INITED].push(o);break;}return n;},(m={},m[c('P2PPaymentRequestStatus').DECLINED]=[],m[c('P2PPaymentRequestStatus').EXPIRED]=[],m[c('P2PPaymentRequestStatus').INITED]=[],m[c('P2PPaymentRequestStatus').TRANSFER_COMPLETED]=[],m));};l.prototype.getRequestProfile=function(m){var n=m.requestee||{};return {image_src:n.picture,name:n.full_name};};l.prototype.log=function(m,n){c('P2PLogger').log(m,babelHelpers['extends']({www_event_flow:this.props.eventFlow},n));};l.prototype.

renderBody=function(){

return (c('React').createElement(c('P2PDialogBody.react'),null,
c('React').createElement('ul',null,
this.renderParticipantRow(this.props.sender,true),
this.renderParticipantRow(this.props.receiver,false)),

this.renderReceiverStatusList(),
c('React').createElement('div',{className:"_bpy"},
c('React').createElement(c('P2PBigAmount.react'),
{amount:c('P2PAmountUtils').sanitizeAmount(this.props.amount),
isPending:this.props.isGrayAmount,
size:'large'})),


c('React').createElement(c('P2PText.react'),
{className:"_bpt",
size:'small',
type:'secondary'},
this.props.bodyText,
' ',
c('React').createElement(c('Link.react'),
{className:"_1ed3",
href:c('P2PLinkConstants').helpCenterURI,
target:'_blank'},i._(["Learn More","610184f485ac18241cd058bed95054ff"])))));};





l.prototype.

renderParticipantRow=
function(m,
n){

if(!n&&this.props.individualRequests.length>1)
return null;



return (c('React').createElement('li',
{className:"_2chg",
key:m.id},
c('React').createElement('div',{className:"_2chh"},
c('React').createElement(c('Link.react'),
{href:m.profile_uri,
onClick:this.props.onClose},
c('React').createElement(c('Image.react'),
{height:50,
src:m.picture,
width:50}))),



c('React').createElement('div',{className:"_2chi"},
c('React').createElement(c('P2PText.react'),{type:'primary'},
c('React').createElement(c('P2PText.react'),{type:'secondary'},
this.renderParticipantText(n)),

m.full_name))));};




l.prototype.

renderParticipantText=function(m){
if(m)
return i._(["From","c7dc53b82b592036ac13d711514880ea"]);


return i._(["To","3fe5959532c4cbca06da4dac74f9fe5f"]);};
l.prototype.

renderReceiverStatusList=function(){
if(this.props.individualRequests.length<2)
return null;


var m=this.getReceiverStatusMap();


return (c('React').createElement('ul',null,
this.renderStatus(m,c('P2PPaymentRequestStatus').TRANSFER_COMPLETED),
this.renderStatus(m,c('P2PPaymentRequestStatus').DECLINED),
this.renderStatus(m,c('P2PPaymentRequestStatus').INITED),
this.renderStatus(m,c('P2PPaymentRequestStatus').EXPIRED)));};


l.prototype.

renderStatus=
function(m,
n){

var o=m[n].map(this.getRequestProfile);

if(o.length===0)
return null;



return (c('React').createElement('li',{className:"_5-av",key:n},
c('React').createElement(c('P2PText.react'),
{className:"_2chi _2pir",

type:'secondary'},
this.renderStatusText(n)),

c('React').createElement(c('FacepileRounded.react'),
{className:"_3-8w",
imageSize:40,
numProfilesToDisplay:10,
profiles:o,
showNames:true})));};



l.prototype.

renderStatusText=function(m){
switch(m){
case c('P2PPaymentRequestStatus').DECLINED:
return i._(["Declined","0552825dcd7523f3d16f202331958e44"]);
case c('P2PPaymentRequestStatus').EXPIRED:
return i._(["Expired","59773af0256ddd531401f9716ee4a55f"]);
case c('P2PPaymentRequestStatus').TRANSFER_COMPLETED:
return i._(["Paid","8df99dea02165cd42ec2c0644c6c8e14"]);
case c('P2PPaymentRequestStatus').INITED:

default:return i._(["Pending","84d17ccca06b7852867251e062a7e490"]);}};

l.prototype.

render=function(){
var m=c('MessengerEnvironment').messengerui,
n=m?380:360,
o=this.props.title;


return (c('React').createElement(c('P2PDialog.react'),
{className:
m?"_bpv":'',

layerHideOnBlur:false,
onToggle:this.props.onClose,
width:n},
c('React').createElement(c('P2PDialogTitle.react'),null,
o),

this.renderBody(),
c('React').createElement(c('P2PDialogFooter.react'),null,
c('React').createElement(c('P2PButton.react'),
{label:i._(["OK","0ec769ae5618134b3955cf27f004fef5"]),
onClick:this.handleClose,
type:'primary'}))));};




l.defaultProps={bodyText:i._(["You can send money to friends in groups.","75051659138a4e342655d6200cfca400"]),eventFlow:c('P2PPaymentLoggerEventFlow').UI_FLOW_P2P_GROUP_SEND,individualRequests:[],isGrayAmount:false,title:i._(["Payment Details","1f06f5638853ba887b0435412550f79f"])};


f.exports=l;}),null);

/** js/p2p/components/send_money/P2PGroupPaymentRequestReceiptDialog.react.js */







__d('P2PGroupPaymentRequestReceiptDialog.react',['fbt','P2PActions','P2PGroupSendReceiptDialog.react','P2PPaymentLoggerEventFlow','P2PPaymentRequest','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits









(k,c('React').Component);j=i&&i.prototype;k.prototype.








render=function(){

return (c('React').createElement(c('P2PGroupSendReceiptDialog.react'),
{amount:this.props.amount,
bodyText:h._(["You can send payment requests to friends in groups","2c53762fec92bf8849c22276219a87c7"]),




eventFlow:c('P2PPaymentLoggerEventFlow').UI_FLOW_P2P_GROUP_REQUEST,
individualRequests:this.props.individualRequests,
isGrayAmount:true,
receiver:this.props.requestee,
sender:this.props.requester,
title:h._(["Payment Request Details","ed9eb0a9708b1a116549d886fbde0cea"]),




onClose:this.props.onClose||c('P2PActions').hideDialog}));};


function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** www/__virtual__/x/XP2PPaymentRequestReceiptController.js */



__d("XP2PPaymentRequestReceiptController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/payment_request\/",{id:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XP2PTransactionDetailController.js */



__d("XP2PTransactionDetailController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/transaction\/",{id:{type:"String",required:true}});}),

null);

/** js/p2p/components/attachment/P2PMercuryLogMessage.react.js */






__d('P2PMercuryLogMessage.react',['cx','fbt','MessengerEnvironment','CurrentUser','Link.react','MercuryIDs','P2PGroupPaymentRequestReceiptDialog.react','P2PGroupSendReceiptDialog.react','P2PPaymentLogMessageSubtype','React','ReactLayeredComponentMixin_DEPRECATED','XP2PPaymentRequestReceiptController','XP2PTransactionDetailController'],(function a(b,c,d,e,f,g,h,i){

'use strict';
















var j=c('React').PropTypes,

k=c('React').createClass({displayName:'P2PMercuryLogMessage',
mixins:[c('ReactLayeredComponentMixin_DEPRECATED')],

propTypes:
{amount:j.string,
receiver:j.object.isRequired,
sender:j.object.isRequired,
subtype:j.oneOf
(Object.keys(c('P2PPaymentLogMessageSubtype')).map
(function(l){return c('P2PPaymentLogMessageSubtype')[l];})),


transferID:j.string.isRequired,
threadFBID:j.string,
threadID:j.string},





getDefaultProps:function l(){

return {amount:'',
sender:null,
receiver:null,
subtype:null};},



getInitialState:function l(){

return {groupPaymentRequestReceiptDetailsShown:false,
groupSendReceiptDetailsShown:false};},



handleGroupDetailsLinkClicked:function l(){
this.setState
({groupSendReceiptDetailsShown:true});},



handleGroupPaymentRequestDetailsLinkClicked:function l(){
this.setState
({groupPaymentRequestReceiptDetailsShown:true});},



handleThirdPartyReceiptDialogClosed:function l(){
this.setState
({groupPaymentRequestReceiptDetailsShown:false,
groupSendReceiptDetailsShown:false});},



isViewerSender:function l(){
var m=this.props.sender.id;

return (m&&
c('MercuryIDs').getUserIDFromParticipantID(m)===c('CurrentUser').getID());},



isViewerReceiver:function l(){
var m=this.props.receiver.id;

return (m&&
c('MercuryIDs').getUserIDFromParticipantID(m)===c('CurrentUser').getID());},






renderPaymentRequestDetailsLink:function l(){
var m=
c('XP2PPaymentRequestReceiptController').getURIBuilder().
setString('id',this.props.transferID).
getURI();

return (c('React').createElement(c('Link.react'),
{className:"_kiq",
href:m,
target:'_blank'},i._(["See details","a03cb3a771db31f317d9c36dca74147b"])));},










renderTransferDetailsLink:function l(){
var m=
c('XP2PTransactionDetailController').getURIBuilder().
setString('id',this.props.transferID).
getURI();

return (c('React').createElement(c('Link.react'),
{className:"_kiq",
href:m,
target:'_blank'},i._(["See details","ed7bd9ed5b97ff8871e69e0e17952244"])));},










renderGroupDetailsLink:function l(){

return (c('React').createElement(c('Link.react'),
{className:"_kiq",
href:'#',
onClick:this.handleGroupDetailsLinkClicked},i._(["See details","ed7bd9ed5b97ff8871e69e0e17952244"])));},










renderGroupPaymentRequestDetailsLink:function l(){

return (c('React').createElement(c('Link.react'),
{className:"_kiq",
href:'#',
onClick:this.handleGroupPaymentRequestDetailsLinkClicked},i._(["See details","ed7bd9ed5b97ff8871e69e0e17952244"])));},










renderLayers:function l(){
var m={},

n=
{full_name:this.props.receiver.name,
id:this.props.receiver.id,
picture:this.props.receiver.image_src,
profile_uri:this.props.receiver.href},

o=
{full_name:this.props.sender.name,
id:this.props.sender.id,
picture:this.props.sender.image_src,
profile_uri:this.props.sender.href};


if(this.state.groupSendReceiptDetailsShown){
m.groupSendReceiptDetailsDialog=
c('React').createElement(c('P2PGroupSendReceiptDialog.react'),
{amount:this.props.amount,
onClose:this.handleThirdPartyReceiptDialogClosed,
receiver:n,
sender:o});}else

if(this.state.groupPaymentRequestReceiptDetailsShown)
m.groupPaymentRequestReceiptDetailsDialog=
c('React').createElement(c('P2PGroupPaymentRequestReceiptDialog.react'),
{amount:this.props.amount,
onClose:this.handleThirdPartyReceiptDialogClosed,
requestee:n,
requester:o});



return m;},





render:function l(){
var m=null,
n=this.props.amount,
o=this.props.subtype,
p=this.isViewerSender(),
q=this.isViewerReceiver(),
r=void 0;

if(!p&&!q){
r=this.renderGroupDetailsLink();}else 

r=this.renderTransferDetailsLink();


switch(o){
case c('P2PPaymentLogMessageSubtype').SENT_IN_GROUP:
m=i._(["{sendername} sent {amount} to {receivername}. {details}","9e0a7e41233aee09c808a2ab11ba60c4"],[i.param



('sendername',
this.props.sender.name),i.param


('amount',
n),i.param


('receivername',
this.props.receiver.name),i.param

('details',
r)]);



break;
case c('P2PPaymentLogMessageSubtype').CANCELED_EXPIRED:
case c('P2PPaymentLogMessageSubtype').CANCELED_SAME_CARD:
case c('P2PPaymentLogMessageSubtype').CANCELED_SENDER_RISK:
case c('P2PPaymentLogMessageSubtype').CANCELED_RECIPIENT_RISK:
case c('P2PPaymentLogMessageSubtype').CANCELED_CUSTOMER_SERVICE:
if(p){
m=i._(["Your {amount} payment was canceled. {details}","d622f628987fff2a44f594f0c9d1bbb3"],[i.param




('amount',
n),i.param



('details',
this.renderTransferDetailsLink())]);}else



if(q){
m=i._(["{name}'s {amount} payment was canceled. {details}","8fff7b5707394e530fac223ed2aefba4"],[i.param



('name',
this.props.sender.name),i.param


('amount',
n),i.param


('details',
this.renderTransferDetailsLink())]);}else 




m=i._(["{sender_name}'s {amount} payment to {receiver_name} was canceled. {details}","a943b884aad51724fdbae5640c203ffe"],[i.param



('sender_name',
this.props.sender.name),i.param


('amount',
n),i.param


('receiver_name',
this.props.receiver.name),i.param


('details',
r)]);




m=
c('React').createElement('span',{className:"_5rdx"},
m);

break;
case c('P2PPaymentLogMessageSubtype').CANCELED_DECLINED:
if(p){
m=i._(["{name} didn't accept your {amount} payment. {details}","091299147b455421a548c49acedd2933"],[i.param



('name',
this.props.receiver.name),i.param


('amount',
n),i.param


('details',
this.renderTransferDetailsLink())]);}else



if(q){
m=i._(["You didn't accept {name}'s {amount} payment. {details}","0f79c18079466ff173ab5905bed7ea12"],[i.param




('name',
this.props.sender.name),i.param


('amount',
n),i.param


('details',
this.renderTransferDetailsLink())]);}else 




m=i._(["{receiver_name} didn't accept {sender_name}'s {amount} payment. {details}","3fe935695951639f2a8e479738368192"],[i.param



('receiver_name',
this.props.receiver.name),i.param


('sender_name',
this.props.sender.name),i.param


('amount',
n),i.param


('details',
r)]);




m=
c('React').createElement('span',{className:"_5rdx"},
m);

break;
case c('P2PPaymentLogMessageSubtype').REQUEST_CANCELED_BY_REQUESTER:
if(p){
m=i._(["You canceled your request for {payment request amount}. {details}","68e14bf5d50617c09bccfde4e74e20e0"],[i.param




('payment request amount',
n),i.param

('details',
this.renderPaymentRequestDetailsLink())]);}else



if(q){
m=i._(["{sender's name} canceled their request for {payment request amount}. {details}","b3dbf5114eee1cd386f0da9a9b4421d5"],[i.param



('sender\'s name',
this.props.sender.name),i.param


('payment request amount',
n),i.param

('details',
this.renderPaymentRequestDetailsLink())]);}else 




m=i._(["{sender's name} canceled their request for {payment request amount} from {receiver's name}. {details}","db2cb2deee07c10cd9bb45ef6f84e7d5"],[i.param



('sender\'s name',
this.props.sender.name),i.param


('payment request amount',
n),i.param


('receiver\'s name',
this.props.receiver.name),i.param

('details',
this.renderGroupPaymentRequestDetailsLink())]);




m=
c('React').createElement('span',{className:"_5rdx"},
m);

break;
case c('P2PPaymentLogMessageSubtype').REQUEST_DECLINED_BY_REQUESTEE:
if(p){
m=i._(["{receiver's name} declined your request for {payment request amount}. {details}","cf8d6eecab925ee59ddfac646b30f84a"],[i.param



('receiver\'s name',
this.props.receiver.name),i.param


('payment request amount',
n),i.param

('details',
this.renderPaymentRequestDetailsLink())]);}else



if(q){
m=i._(["You declined {sender's name}'s request for {payment request amount}. {details}","658231df972e4426f7d0adc99dafcea9"],[i.param




('sender\'s name',
this.props.sender.name),i.param


('payment request amount',
n),i.param

('details',
this.renderPaymentRequestDetailsLink())]);}else 




m=i._(["{receiver's name} declined {sender's name}'s request for {payment request amount}. {details}","fe9eee3d023a26b172886d1b546db755"],[i.param



('receiver\'s name',
this.props.receiver.name),i.param


('sender\'s name',
this.props.sender.name),i.param


('payment request amount',
n),i.param

('details',
this.renderGroupPaymentRequestDetailsLink())]);




m=
c('React').createElement('span',{className:"_5rdx"},
m);

break;
case c('P2PPaymentLogMessageSubtype').REQUEST_EXPIRED:
if(p){
m=i._(["Your request for {payment request amount} expired so it was canceled. {details}","c8dc1a1181b438198294400a7743d5c9"],[i.param




('payment request amount',
n),i.param


('details',
this.renderPaymentRequestDetailsLink())]);}else



if(q){
m=i._(["{sender's name}'s request for {payment request amount} expired so it was canceled. {details}","4aa17e566ed5be1e5bd380fd2fea4af9"],[i.param



('sender\'s name',
this.props.sender.name),i.param


('payment request amount',
n),i.param


('details',
this.renderPaymentRequestDetailsLink())]);}else 




m=i._(["{sender's name}'s request to {receiver's name} for {payment request amount} expired so it was canceled. {details}","2b444a119476ee430fbf831383658ba3"],[i.param



('sender\'s name',
this.props.sender.name),i.param


('receiver\'s name',
this.props.receiver.name),i.param


('payment request amount',
n),i.param


('details',
this.renderGroupPaymentRequestDetailsLink())]);




m=
c('React').createElement('span',{className:"_5rdx"},
m);

break;}



return (c('React').createElement('div',
{className:

c('MessengerEnvironment').messengerui?"_5rdy":''},

m));}});





f.exports=k;}),null);

/** js/mercury/clients/messenger/components/MessengerLogMessageBody.react.js */






__d('MessengerLogMessageBody.react',['fbt','immutable','ImmutableObject','MercuryIDs','MercuryParticipants','MercuryLogMessageType','MessengerAdminGroupUtils','P2PMercuryLogMessage.react','ReactComponentWithPureRenderMixin','React','StoreAndPropBasedStateMixin'],(function a(b,c,d,e,f,g,h){














var i=c('React').PropTypes,

j=c('React').createClass({displayName:'MessengerLogMessageBody',
_viewer:'',

mixins:[c('ReactComponentWithPureRenderMixin'),

c('StoreAndPropBasedStateMixin')(c('MercuryParticipants'))],


propTypes:
{thread:i.instanceOf(c('ImmutableObject')),
message:i.instanceOf(c('ImmutableObject')).isRequired,
viewer:i.string.isRequired},


statics:
{calculateState:function k(l){
var m=[],
n=l.message,
o=n.log_message_data,
p=n.log_message_type;

switch(p){
case c('MercuryLogMessageType').SUBSCRIBE:
m=o.added_participants;
break;
case c('MercuryLogMessageType').UNSUBSCRIBE:
m=o.removed_participants;
break;
case c('MercuryLogMessageType').ORION:
m.push(o.senderId,o.receiverId);
break;}


if(!m||!m.length)
return {};

var q=c('immutable').Map().withMutations(function(r){
m.forEach(function(s){
r.set(s,c('MercuryParticipants').getOrFetch(s)||{});});});


return {extraParticipants:q};}},



render:function k(){
var l=this.props.message.log_message_type;
this._viewer=c('MercuryIDs').getParticipantIDFromUserID(this.props.viewer);



if(this._viewer!==this.props.message.author&&
l!==c('MercuryLogMessageType').ORION)

return null;

var m=
c('MessengerAdminGroupUtils').isJoinableThread(this.props.thread);
switch(l){
case c('MercuryLogMessageType').SUBSCRIBE:

return (c('React').createElement('span',null,this._renderSubscribeMessage(this.props.message)));

case c('MercuryLogMessageType').UNSUBSCRIBE:
if(m)

return (c('React').createElement('span',null,
this._renderUnsubscribeMessageForRoom(this.props.message)));




return (c('React').createElement('span',null,this._renderUnsubscribeMessage(this.props.message)));

case c('MercuryLogMessageType').THREAD_NAME:
var n=this.props.message.log_message_data;
if(m){
if(!n.name)

return (c('React').createElement('span',null,h._(["You removed the room name.","9a4ba919e5855abfcd4190f956946eb8"])));









return (c('React').createElement('span',null,h._(["You named the room {the new name of the group}.","9d9e1a7e1b8a56f29492087fb1794e40"],[h.param




('the new name of the group',
n.name)])));}





if(!n.name)

return (c('React').createElement('span',null,h._(["You removed the group name.","8dced08d4be91732b81497a8108e52b7"])));










return (c('React').createElement('span',null,h._(["You named the group {the new name of the group}.","943b5ca5d1f3af685e663af3345e12f4"],[h.param




('the new name of the group',
n.name)])));




case c('MercuryLogMessageType').THREAD_IMAGE:
if(m)

return (c('React').createElement('span',null,h._(["You changed the room photo.","994cdca4202da6d9ae411557bad84150"])));







return (c('React').createElement('span',null,h._(["You changed the group photo.","8db5f30995eef75c384b17e4cbe249ac"])));





case c('MercuryLogMessageType').ORION:
return this._renderP2PLogMessage(this.props.message);

default:return null;}},



_renderP2PLogMessage:function k(l){
var m=l.log_message_data,
n=m.senderId,
o=m.receiverId,
p=this.state.extraParticipants,
q=p.get(n),
r=p.get(o);


return (c('React').createElement(c('P2PMercuryLogMessage.react'),
{amount:m.formattedAmount,
receiver:r,
sender:q,
subtype:m.subtype,
threadFBID:l.thread_fbid,
threadID:l.thread_id,
transferID:m.transfer_id}));},




_renderSubscribeMessage:function k(l){
var m=this._moveCurrentUserToFront
(l.log_message_data.added_participants),

n=this.state.extraParticipants;

switch(m.length){
case 1:
return h._(["You added {subscriber1}.","29d4235bb06b5e168895325e238e1a59"],[h.param




('subscriber1',
n.get(m[0]).name)]);



case 2:
return h._(["You added {subscriber1} and {subscriber2}.","6d87a2f46910f5f6d9cd46f34fb484f9"],[h.param




('subscriber1',
n.get(m[0]).name),h.param


('subscriber2',
n.get(m[1]).name)]);



case 3:
return h._(["You added {subscriber1}, {subscriber2} and {subscriber3}.","297d99ae494a961cbf84bc11204d27f2"],[h.param




('subscriber1',
n.get(m[0]).name),h.param

('subscriber2',
n.get(m[1]).name),h.param


('subscriber3',
n.get(m[2]).name)]);




default:var o=m.map(function(p){return n.get(p);});
return h._(["You added {subscriber1}, {subscriber2} and {num} other people.","7befaf0707af08a67ae7045d9b136d8c"],[h.param




('subscriber1',
o[0].name),h.param

('subscriber2',
o[1].name),h.param


('num',
o.slice(2).length)]);}},







_renderUnsubscribeMessage:function k(l){
var m=this.state.extraParticipants,
n=l.log_message_data.removed_participants[0],
o=m.get(n);

if(!n||n===l.author){
return h._(["You left the conversation.","83ee05c15a9ca389203883d7dd2b02ff"]);}else 





return h._(["You removed {name} from the conversation.","78c77e5093b774576e80690be905cd7c"],[h.param


('name',
o.name)]);},







_renderUnsubscribeMessageForRoom:function k(l){
var m=this.state.extraParticipants,
n=
l.log_message_data.removed_participants[0],
o=m.get(n);

if(!n||n===l.author){
return h._(["You left the room.","9f633bef7066fbb5e18084af5874cc94"]);}else 







return h._(["You removed {name} from the room.","32f85239d3252231da5d13c76723811b"],[h.param




('name',
o.name)]);},







_moveCurrentUserToFront:function k(l){
var m=this._viewer,
n=l.indexOf(m);
if(n>0){
var o=l.
filter(function(p){return p!==m;});
return [m].concat(o);}

return l;}});



f.exports=j;}),null);

/** js/mercury/clients/messenger/components/MessengerLogMessage.react.js */






__d('MessengerLogMessage.react',['cx','ix','Image.react','ImmutableObject','MercuryLogMessageType','MercuryLWARenderer','MercuryMessageInfo','MercuryXMATRenderer','MessagingGenericAdminTextType','MessengerLightweightActionUtils','MessengerLogMessageBody.react','MNCommerceLogMessageUtils','React','convertMIGColorToFIGColor','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,


















l=c('React').PropTypes,

m=i("86913");j=babelHelpers.inherits

(n,c('React').PureComponent);k=j&&j.prototype;n.prototype.















render=function(){

return (c('React').createElement('div',{className:this.$MessengerLogMessage_computeClass()},
this.$MessengerLogMessage_renderErrorState(),
c('React').createElement('i',{className:"_uwa"}),
c('React').createElement('span',{className:"_3oh-"},
this.$MessengerLogMessage_renderLogMessageBody())));};



n.prototype.

$MessengerLogMessage_renderLogMessageBody=function(){
var o=c('convertMIGColorToFIGColor')
(this.props.thread&&this.props.thread.custom_color),


p=void 0;

if(c('MessengerLightweightActionUtils').isLWAMessage(this.props.message))
return c('MercuryLWARenderer').renderCollapsedText
(this.props.message);




if(this.props.message.log_message_type!==c('MercuryLogMessageType').ORION)
p=c('MercuryXMATRenderer').renderText
(o,
this.props.message,
this.props.isLastOfType,
this.props.onImageLoad);



return (this.$MessengerLogMessage_renderMNCommerceManage()||
p||
c('React').createElement(c('MessengerLogMessageBody.react'),
{message:this.props.message,
viewer:this.props.viewer,
thread:this.props.thread}));};


n.prototype.

$MessengerLogMessage_renderMNCommerceManage=function(){
var o=this.props.message;
if(c('MNCommerceLogMessageUtils').isCommercePageAdminMessage(o))
return c('MNCommerceLogMessageUtils').getCommercePageManage
(o,
true);


return null;};
n.prototype.

$MessengerLogMessage_renderErrorState=function(){
if(!c('MercuryMessageInfo').hasError(this.props.message))
return null;


return (c('React').createElement(c('Image.react'),
{className:"_41-9",
src:m}));};


n.prototype.

$MessengerLogMessage_computeClass=function(){
var o=void 0,
p=this.props.message,
q=
p.log_message_type===c('MercuryLogMessageType').UNSUBSCRIBE&&
p.log_message_data.removed_participants.
indexOf(p.author)!==-1,
r=this.props.viewer;
switch(p.log_message_type){
case c('MercuryLogMessageType').SUBSCRIBE:
o="_uwb";
break;
case c('MercuryLogMessageType').UNSUBSCRIBE:
o=q?
"_uwc":
"_uwe";
break;
case c('MercuryLogMessageType').PHONE_CALL:
o=p.log_message_data.caller.indexOf(r)!==-1?
"_uwf":
"_uwg";
break;
case c('MercuryLogMessageType').VIDEO_CALL:
o=p.log_message_data.caller.indexOf(r)!==-1?
"_uwh":
"_uwi";
break;
case c('MercuryLogMessageType').THREAD_NAME:
o="_uwj";
break;
case c('MercuryLogMessageType').THREAD_IMAGE:
o="_uwk";
break;
case c('MercuryLogMessageType').SERVER_ERROR:
o="_uwl";
break;
case c('MercuryLogMessageType').LIVE_LISTEN:
o="_uwm";
break;
case c('MercuryLogMessageType').WALLPAPER:
o="_uwn";
break;
case c('MercuryLogMessageType').ORION:
o="_uwo";
break;
case c('MercuryLogMessageType').SWITCH_TO_WORK:
o="_uwp";
break;
case c('MercuryLogMessageType').PAGE_REPLY:
o="_uwq";
break;}


return c('joinClasses')("_497p"+




((p.log_message_type===c('MercuryLogMessageType').PHONE_CALL||
p.log_message_type===c('MercuryLogMessageType').VIDEO_CALL)&&
!p.log_message_data.answered?' '+"_3no3":'')+

(p.log_message_data&&
p.log_message_data.message_type===
c('MessagingGenericAdminTextType').INSTANT_GAME_UPDATE?' '+"_11es":''),

o);};

function n(){j.apply(this,arguments);}n.propTypes={message:l.instanceOf(c('ImmutableObject')).isRequired,viewer:l.string.isRequired,isLastOfType:l.bool.isRequired,onImageLoad:l.func};


f.exports=n;}),null);

/** js/mercury/clients/messenger/components/MessengerMessageActionsWrapper.react.js */







__d('MessengerMessageActionsWrapper.react',['ImmutableObject','React'],(function a(b,c,d,e,f,g){

'use strict';




var h=c('React').PropTypes,

i=c('React').createClass({displayName:'MessengerMessageActionsWrapper',

propTypes:
{message:h.instanceOf(c('ImmutableObject')).isRequired,
onShowMenu:h.func.isRequired},


render:function j(){

return (c('React').createElement('div',babelHelpers['extends']
({onMouseEnter:this._handleShowMenu,
onMouseLeave:this._handleHideMenu},
this.props),


this.props.children));},




_handleShowMenu:function j(){
this.props.onShowMenu(this.props.message.message_id,true);},


_handleHideMenu:function j(){
this.props.onShowMenu(this.props.message.message_id,false);}});



f.exports=i;}),null);

/** js/mercury/clients/messenger/components/MessengerMessageSeenHeads.react.js */






__d('MessengerMessageSeenHeads.react',['cssVar','cx','fbt','Image.react','immutable','ImmutableObject','MercuryMessageInfo','MercuryTimestamp','MessengerConfig','React','getViewportDimensions','joinClasses'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,















m=c('React').PropTypes,
n=c('MessengerConfig').MaxSeenHeadCount||8;k=babelHelpers.inherits

(o,c('React').PureComponent);l=k&&k.prototype;o.prototype.

















render=function(){var q=
this.props,r=q.message,s=q.nextTimestamp,t=q.participants,u=q.readReceipts;

if(c('MercuryMessageInfo').isSending(r)||
u.isEmpty()||
c('MercuryMessageInfo').hasError(r))

return null;


var v=c('immutable').Seq(u).
filter(function(da,ea){
return (da.watermark>=r.timestamp&&
da.watermark<s);}).
sort
(function(da,ea){return da.action-ea.action;});


if(v.isEmpty())
return null;


var w=this.props.isFromViewer?
n:
p(),
x=v.count()>w+1,
y=x?
v.slice(0,w):
v,

z=y.

map(function(da,ea){
var fa=t.get(ea);
if(!fa)
return null;

var ga=da?j._(["Seen by {full name} at {seen time}","1b207cc82d2b4e0be94ac1c182da0206"],[j.param


('full name',fa.name),j.param

('seen time',
c('MercuryTimestamp').getPreciseTimestamp(da.action))]):j._(["Seen by {full name}","6b3da68e87f5af70ede05660af9f105e"],[j.param




('full name',fa.name)]);


return (c('React').createElement(c('Image.react'),
{alt:ga,
className:"_jf2",
key:ea,
src:fa.image_src,
title:ga}));}).



toArray(),

aa=z.length;
if(!aa)
return null;


var ba=x?
v.slice(w).count():
0;
if(ba>0){
var ca=v.slice(w).

map(function(da,ea){
var fa=t.get(ea);
return fa?fa.name:null;}).

filter(function(da){return !!da;}).
join('\n')+' ';
z.unshift
(c('React').createElement('span',
{className:"_jf3",
key:'overflow',
title:ca},'+'+
ba));}





return (c('React').createElement('span',
{className:c('joinClasses')
(this.props.className,"_jf4"+


(aa+ba===1?' '+"_jf5":''))},


z));};


function o(){k.apply(this,arguments);}o.propTypes={isFromViewer:m.bool,message:m.instanceOf(c('ImmutableObject')).isRequired,nextTimestamp:m.number.isRequired,participants:m.instanceOf(c('immutable').Map).isRequired,readReceipts:m.instanceOf(c('immutable').OrderedMap).isRequired};


function p(){
var q=c('getViewportDimensions')().width;
if(q<
parseInt("920px".replace('px',''),10))
return Math.min(n,8);

if(q<
parseInt("1211px".replace('px',''),10))
return Math.min(n,3);

return n;}


f.exports=o;}),null);

/** js/mercury/clients/messenger/messengerRTLClasses.js */






__d('messengerRTLClasses',['cx','isRTL'],(function a(b,c,d,e,f,g,h){

'use strict';




function i(j,k){
var l=c('isRTL')(j||'');
return k?
l?"_4pv0":'':

(!l?"direction_ltr":'')+
(l?' '+"direction_rtl":'')+
(!l?' '+"text_align_ltr":'')+
(l?' '+"text_align_rtl":'')+
(l?' '+"_4pv0":'');}



f.exports=i;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerURIUtilsRe.js */





__d("messengerURIUtilsRe",["URI","MercuryIDs","MessengerView","MessengerURISerializer"],(function a(b,c,d,e,f,g){

'use strict';






function h(k){
var l=c("MessengerURISerializer").deserialize(new (c("URI"))(window.location.href)),
m=c("MessengerView").DETAIL.THREAD,
n=+l.queryAll;
return c("MessengerURISerializer").serialize(Object.assign(Object.assign({},l),
{activeThreadID:k,
detailView:m,
query:n!==0?l.query:undefined}));}



function i(k){
return h(c("MercuryIDs").getThreadIDFromUserID(k));}


function j(k){
return new (c("URI"))("/m/"+k);}


g.getURIForThreadID=h;
g.getURIForUserID=i;
g.getURIForMessageID=j;}),null);

/** js/mercury/clients/messenger/components/MessengerMessage.react.js */







__d('MessengerMessage.react',['cssVar','cx','fbt','EmojiLikeUtils','MercuryDisplayTimeFilterMessageRenderer','FluxContainer','immutable','ImmutableObject','MercuryAttachment','MercuryConfig','MercuryMessageDeliveryState','MercuryMessageError.react','MercuryMessageInfo','MercuryTimestamp','MessengerAttachmentAttribution.react','MessengerAttachmentRenderer','MessengerBubble.react','MessengerBubbleBlock.react','MessengerCodeBubble.react','MessengerCodePasteUtils','MessengerConfig','MessengerDecorator','MessengerInnerDecorators.react','MessengerMessageActionsWrapper.react','MessengerMessageSeenHeads.react','messengerURIUtilsRe','MessengerVideoAutoplayStore','MNCommerceMessageType','React','TooltipData','emptyFunction','getViewportDimensions','joinClasses','messengerRTLClasses'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,





































m=c('React').PropTypes;




function n(q){
switch(q){
case c('MercuryMessageDeliveryState').SENDING:
return j._(["Sending","ddc6c60f071f3188e599008a611cf0d5"]);
case c('MercuryMessageDeliveryState').SENT:
return j._(["Sent","778a9507ef75dc5bad342d655754a249"]);
case c('MercuryMessageDeliveryState').DELIVERED:
return j._(["Delivered","5c7ccba7c2014c83daabe2653e7712eb"]);
case c('MercuryMessageDeliveryState').ERROR:
return j._(["Error","15e1bc38623cebfdd37a0311905564da"]);}

return null;}
k=babelHelpers.inherits

(o,c('React').Component);l=k&&k.prototype;function o(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=l.constructor).call.apply(q,[this].concat(t)),this.















































state=
{isVisible:false,
shown:{}},this.

































































































































































































































































































































































































































































$MessengerMessage_handleSelect=function(v){
v.stopPropagation();
this.props.onSelect(this.props.message.message_id);}.
bind(this),this.

$MessengerMessage_handleShowMenu=function(v,w){var x;
this.setState({shown:babelHelpers['extends']({},this.state.shown,(x={},x[v]=w,x))});}.
bind(this),this.

$MessengerMessage_onSelect=function(){
this.props.onSelect(this.props.message.message_id);}.
bind(this),r;}o.getStores=function(){return [c('MessengerVideoAutoplayStore')];};o.calculateState=function(q,r){return {isVisible:c('MessengerVideoAutoplayStore').isVisible(r.message.thread_id,r.message.message_id)};};o.prototype.shouldComponentUpdate=function(q,r){return q.isActive!==this.props.isActive||q.isFromViewer!==this.props.isFromViewer||q.message!==this.props.message||q.nextTimestamp!==this.props.nextTimestamp||q.showDeliveryState!==this.props.showDeliveryState||q.deliveryTimestamp!==this.props.deliveryTimestamp||!c('immutable').is(q.readReceipts,this.props.readReceipts)||!c('immutable').is(q.participants,this.props.participants)||q.customColor!==this.props.customColor||r.isVisible!==this.state.isVisible;};o.prototype.render=function(){var q=this.props,r=q.isActive,s=q.isFromViewer,t=q.isPageMessage,u=q.message,v=j._(["{time}","4be6faf656971150d06d6964ee5454de"],[j.param('time',c('MercuryTimestamp').getPreciseTimestamp(u.timestamp))]),w=c('MessengerConfig').SentTimestampEnabled?c('TooltipData').propsFor(v,p(s)):null,x=[],y=[],z=this.props.message,aa=s||false;if(t&&z&&!this.props.hideBeforeDecorator){c('MessengerDecorator').getBeforeDecorators().forEach(function(da){if(da.check(z))x.push(da.render(z,aa));});c('MessengerDecorator').getInnerDecorators().forEach(function(da){if(da.check(z))y.push(da.getAdditionalClassNames());});}var ba=this.$MessengerMessage_renderBubble(w),ca=this.$MessengerMessage_renderAttachmentsOutsideBubble(w,c('MercuryConfig').WWWMessengerAttachmentMessageGK?ba:null);return c('React').createElement(c('MessengerMessageActionsWrapper.react'),{className:c('joinClasses').apply(undefined,["clearfix"+(' '+"_o46")+(' '+"_3erg")+(r?' '+"_-5k":'')+(s?' '+"_3i_m":'')+(s?' '+"_nd_":'')+(!s?' '+"_29_7":'')+(u.isSelected?' '+"_3xsz":''),c('messengerRTLClasses')(u.body)].concat(y)),message:u,onShowMenu:this.$MessengerMessage_handleShowMenu},x,c('MercuryConfig').WWWMessengerAttachmentMessageGK&&ca?null:ba,ca||t?null:c('React').createElement(c('MessengerInnerDecorators.react'),{message:z,isFromViewer:s,hovered:this.state.shown[z.message_id],messageProps:this.props}),ca,this.$MessengerMessage_renderAfterExtneralDecorators(z,aa),this.$MessengerMessage_renderErrorState(),this.$MessengerMessage_renderDeliveryState(),c('React').createElement(c('MessengerMessageSeenHeads.react'),{className:"_4jzq",isFromViewer:s,message:u,nextTimestamp:this.props.nextTimestamp,participants:this.props.participants,readReceipts:this.props.readReceipts}));};o.prototype.$MessengerMessage_renderAfterExtneralDecorators=function(q,r){var s,t=this;if(q&&!this.props.hideAfterExternalDecorator){var s=function(){var u=[],v=[];c('MessengerDecorator').getAfterExternalDecorators().forEach(function(x){if(q&&x.check(q)){u.push(x.render(q,r,this.props));v.push(x.getAdditionalClassNames());}},t);var w=v.join(' ');if(u.length===0)return {v:null};return {v:c('React').createElement('span',{className:c('joinClasses')(w,"_31gm"+(!r?' '+"isFromOther":''))},u)};}();if(typeof s==="object")return s.v;}return null;};o.prototype.$MessengerMessage_attachmentsCanHaveTooltipWrap=function(q){return q.every(function(r){return !r||!c('MessengerAttachmentRenderer').isRenderedShareAttachment(r);});};o.prototype.$MessengerMessage_renderAttachmentsOutsideBubble=function(q,r){if(this.props.message.is_filtered_content)return null;if(this.props.message.commerce_message_type===c('MNCommerceMessageType').RIDE_INTENT)return null;var s=c('MessengerAttachmentRenderer').getAttachmentsOutsideBubble(this.props.message,this.props.onAttachmentLoad,{customColor:this.props.customColor,isPageMessage:this.props.isPageMessage,isVisible:this.state.isVisible,messageBubble:r,onSelect:this.$MessengerMessage_onSelect,onUnwrap:null,pageID:this.props.pageID});if(!s||!s.length)return null;var t=[],u=[],v=this.props.message,w=this.props.isFromViewer||false;if(v)c('MessengerDecorator').getAfterDecorators().forEach(function(ba){if(ba.check(v,w)){t.push(ba.render(v,w,this.props));u.push(ba.getAdditionalClassNames());}}.bind(this));if(q){var x=s.some(function(ba){return !!ba&&c('MessengerAttachmentRenderer').isPhotosGroupAttachment(ba);});s=this.$MessengerMessage_attachmentsCanHaveTooltipWrap(s)?c('React').createElement('div',babelHelpers['extends']({},q,{className:c('joinClasses').apply(undefined,["_3zvs"+(x?' '+"_2-x3":'')].concat(u))}),s,t):s.map(function(ba){return ba&&c('React').cloneElement(ba,q);});}var y=c('MessengerAttachmentRenderer').isSharedVideoAttachmentMessage(this.props.message),z=c('React').createElement('div',{key:'renderedAttachments',className:"_3058"+(' '+"_15gf")+(y?' '+"_3duc":'')},s,this.props.isPageMessage?null:c('React').createElement(c('MessengerInnerDecorators.react'),{message:this.props.message,isFromViewer:this.props.isFromViewer||false,hovered:this.state.shown[this.props.message.message_id],messageProps:this.props}));if(this.props.message.attachments.length===1&&c('MercuryAttachment').hasAttribution(this.props.message.attachments[0])){var aa=[z,c('React').createElement(c('MessengerAttachmentAttribution.react'),{attachment:new (c('ImmutableObject'))(this.props.message.attachments[0]),key:'attribution'})];return c('React').createElement(c('MessengerBubbleBlock.react'),null,aa);}return z;};o.prototype.$MessengerMessage_isP2PAttachment=function(){return c('MessengerAttachmentRenderer').isP2PAttachment(this.props.message);};o.prototype.$MessengerMessage_renderBubble=function(q){var r=this.props.message,s=c('immutable').List(c('MessengerAttachmentRenderer').getAttachmentsInsideBubble(r,this.props.onAttachmentLoad)),t=r.ranges;if(c('MercuryConfig').Mentions&&r.profile_ranges&&r.profile_ranges.length)t=(t||[]).concat(r.profile_ranges.map(function(v){return babelHelpers['extends']({},v,{url:c('messengerURIUtilsRe').getURIForUserID(v.id)});}));if(c('MessengerCodePasteUtils').containsCodeBlock(r.body))return c('React').createElement(c('MessengerCodeBubble.react'),{attachments:s,body:r.body,customColor:this.props.isFromViewer?this.props.customColor:'',className:(this.props.isFromViewer?"_3uhm":'')+(!this.props.isFromViewer?' '+"_3uhn":''),ranges:t||[],threadID:r.thread_id||''});if(r.is_filtered_content)return c('React').createElement('div',{className:"_3058 _wiu _52mr uiBoxYellow clearfix"},c('MercuryDisplayTimeFilterMessageRenderer').renderFilteredContent(r));var u=r.body&&!c('EmojiLikeUtils').isEmojiLike(r);if(u||!s.isEmpty())return c('React').createElement(c('MessengerBubble.react'),babelHelpers['extends']({attachments:s,body:r.body,className:"_3058"+(' '+"_ui9"),customColor:this.props.isFromViewer?this.props.customColor:'',customLike:r.customLike,isFromViewer:this.props.isFromViewer,isP2PAttachment:this.$MessengerMessage_isP2PAttachment(),ranges:t,message:r,metaRanges:r.meta_ranges,threadCustomColor:this.props.threadCustomColor||"#0084ff",threadID:r.thread_id,participants:this.props.participants},q||{}));return null;};o.prototype.$MessengerMessage_renderDeliveryState=function(){if(!this.props.isFromViewer||!this.props.showDeliveryState||this.props.message.is_like_preview)return null;var q=c('MercuryMessageInfo').getDeliveryState(this.props.message,this.props.deliveryTimestamp);if(q===c('MercuryMessageDeliveryState').UNKNOWN)return null;var r={};if(this.props.customColor&&(q===c('MercuryMessageDeliveryState').SENT||q===c('MercuryMessageDeliveryState').SENDING||q===c('MercuryMessageDeliveryState').DELIVERED))r.color=this.props.customColor;return c('React').createElement('span',{className:"_2her"+(q===c('MercuryMessageDeliveryState').SENDING?' '+"_4jzp":'')+(q===c('MercuryMessageDeliveryState').SENT?' '+"_3zzf":'')+(q===c('MercuryMessageDeliveryState').DELIVERED?' '+"_9ah":'')+(q===c('MercuryMessageDeliveryState').ERROR?' '+"_5ei9":''),onClick:this.$MessengerMessage_handleSelect,role:'checkbox',style:r,title:n(q)},c('React').createElement('i',{className:"_57e_"}));};o.prototype.$MessengerMessage_renderErrorState=function(){var q=this.props.message;if(!c('MercuryMessageInfo').hasError(q))return null;return c('React').createElement(c('MercuryMessageError.react'),{className:"_3058 _2ygi",message:q,authorFBID:this.props.authorFBID});};o.propTypes={customColor:m.string,deliveryTimestamp:m.number.isRequired,hideAfterExternalDecorator:m.bool,hideBeforeDecorator:m.bool,isActive:m.bool,isFromViewer:m.bool,isPageMessage:m.bool,message:m.instanceOf(c('ImmutableObject')).isRequired,nextTimestamp:m.number.isRequired,onAttachmentLoad:m.func.isRequired,onDeselect:m.func.isRequired,onSelect:m.func.isRequired,participants:m.instanceOf(c('immutable').Map).isRequired,readReceipts:m.instanceOf(c('immutable').OrderedMap).isRequired,showDeliveryState:m.bool,authorFBID:m.string,threadCustomColor:m.string,pageID:m.string};o.defaultProps={onAttachmentLoad:c('emptyFunction'),threadCustomColor:"#0084ff"};


function p(q){

if(c('getViewportDimensions')().width<=
parseInt("700px".replace('px',''),10))

return 'above';

return q?'right':'left';}


f.exports=c('FluxContainer').create(o,{withProps:true});}),null);

/** js/mercury/clients/messenger/components/MessengerPageAdminNoteList.react.js */







__d('MessengerPageAdminNoteList.react',['cx','fbt','LeftRight.react','MessengerBubble.react','PagesMessengerCreatorInfo.react','ReactComponentWithPureRenderMixin','React','enumerate','classWithMixins','immutable','mixin'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,

















l=c('React').PropTypes;j=babelHelpers.inherits

(m,
c('classWithMixins')(c('React').Component,c('mixin')(c('ReactComponentWithPureRenderMixin'))));k=j&&j.prototype;m.prototype.
render=function(){
var n=[],
o=this.calculateGroups(this.props.notes);

o.forEach(function(p,q){
n.push
(c('React').createElement('li',
{className:"_4kd2",
key:'group:'+q},
this.$MessengerPageAdminNoteList_renderPageAdminNoteGroup(p)));}.


bind(this));


return (c('React').createElement('ul',{className:"_4kd3"},
n));};


m.prototype.

$MessengerPageAdminNoteList_renderPageAdminNoteGroup=function(n){
var o=[];
n.forEach(function(p,q){
o.push
(c('React').createElement('div',
{className:"_4kd4",
key:'note:'+q},
this.$MessengerPageAdminNoteList_renderPageAdminNoteBubble(p,n)));}.


bind(this));
return o;};
m.prototype.

$MessengerPageAdminNoteList_renderPageAdminNoteBubble=
function(n,
o){

var p=c('immutable').List
([c('React').createElement(c('LeftRight.react'),{className:"_561k"},
c('React').createElement('div',
{className:"_561l"},i._(["Private Note","65d024cacb134f4cfe6b5ae773c289ff"])),





c('React').createElement(c('PagesMessengerCreatorInfo.react'),
{key:'creator_info',
creator_info:o[0].creator_info,
isNote:true}))]);




return (c('React').createElement('div',{className:"_o46 _3i_m _nd_"},

c('React').createElement('div',{className:'clearfix'},
c('React').createElement(c('MessengerBubble.react'),
{body:n.body.text,
attachments:p,
className:"_3058 _4kd5"}))));};





m.prototype.

calculateGroups=function(n){
var o=[],
p=null,
q=null,
r=c('enumerate')(n),
s=void 0;

while(!(s=r.next()).done){
var t=q&&
q.value.creator_info.creatorID===
s.value.creator_info.creatorID;
if(!t){
p=[];
o.push(p);}


if(p)
p.push(s.value);

q=s;}

return o;};
function m(){j.apply(this,arguments);}


m.propTypes=
{notes:l.arrayOf
(l.shape
({id:l.string,
body:l.object.isRequired,
creator_info:l.shape
({creatorID:l.string.isRequired,
creatorName:l.string.isRequired,
creatorType:l.string.isRequired,
labelType:l.string.isRequired,
pageID:l.string.isRequired,
profileURI:l.string}),

timestamp:l.number.isRequired})).

isRequired};


f.exports=m;}),null);

/** js/mercury/clients/messenger/components/MessengerMessageGroup.react.js */






__d('MessengerMessageGroup.react',['cx','fbt','immutable','ImmutableObject','Image.react','Link.react','MercuryConfig','MercuryIDs','MercuryParticipants','MercuryParticipantSilhouettes','MercuryTimestamp','MessengerActions','MessengerConfig','MessengerDateBreak.react','MessengerMessage.react','MessengerPageAdminNoteList.react','MessengerProfileImageWrapper.react','MessengerStickerUtils','MessengerTextWithEmoticons.react','messengerURIUtilsRe','PagesMessengerCreatorInfo.react','React','ReactDOM','StoreAndPropBasedStateMixin'],(function a(b,c,d,e,f,g,h,i){

'use strict';



























var j=c('immutable').List,k=c('immutable').OrderedMap,
l=c('React').PropTypes,

m=32,
n=new (c('ImmutableObject'))
({image_src:c('MercuryParticipantSilhouettes').neutralSilhouette,
is_messenger_user:true,
name:''}),


o=c('React').createClass({displayName:'MessengerMessageGroup',
mixins:[c('StoreAndPropBasedStateMixin')(c('MercuryParticipants'))],

propTypes:
{activeMessageID:l.string,
deliveryTimestamp:l.number.isRequired,
hasDateBreak:l.bool,
isCanonical:l.bool,
isFromViewer:l.bool,
isPageMessage:l.bool,
lastReadTimestamp:l.number.isRequired,
messages:l.instanceOf(c('immutable').List).isRequired,
nextTimestamp:l.number.isRequired,
onAttachmentLoad:l.func,
onMessageDeselect:l.func.isRequired,
onMessageSelect:l.func.isRequired,
readReceipts:l.instanceOf(k).isRequired,
thread:l.object,



pageCustomAction:l.func,
pageID:l.string},


statics:
{calculateState:function r(s){

return {participants:p(s)};}},




shouldComponentUpdate:function r(s,t){

return (this.props.activeMessageID!==s.activeMessageID||
this.props.isFromViewer!==s.isFromViewer||
this.props.deliveryTimestamp!==s.deliveryTimestamp||
this.props.lastReadTimestamp!==s.lastReadTimestamp||
!c('immutable').is(this.props.messages,s.messages)||
!c('immutable').is(this.props.readReceipts,s.readReceipts)||
!c('immutable').is(this.state.participants,t.participants)||
!!(s.thread&&this.props.thread&&this.props.thread!==
s.thread));},



render:function r(){

return (c('React').createElement('div',null,
c('React').createElement('div',
{className:"_1t_p"+(' '+"clearfix")+



(c('MessengerStickerUtils').isStickerMessageGroup(this.props.messages)?' '+"_5tx1":'')+

(this._hasSeenHeadsAtBottom()?' '+"_35fy":'')},

this._renderProfileColumn(),
c('React').createElement('div',{className:"_41ud"},
this._renderName(),
this._renderMessages())),


this.props.isPageMessage?this._renderNotes():null));},




_renderProfileColumn:function r(){
if(this.props.isFromViewer)
return null;


var s=this.props.messages.last(),
t=this.state.participants.get(s.author)||n,
u=i._(["{name} {time}","7307b7ab3035e93f93f4db13bcb6bd31"],
[i.param('name',t.name),
i.param
('time',
c('MercuryTimestamp').getPreciseTimestamp(s.timestamp))]),





v=
c('React').createElement(c('MessengerProfileImageWrapper.react'),
{className:"_1t_r",
isMessengerUser:t.is_messenger_user,
size:m,
showBadge:true,
tooltipContent:u},
c('React').createElement(c('Image.react'),
{alt:t.name,
src:t.image_src,
height:m,
width:m}));



if(!this.props.isCanonical&&t.fbid){

var w=c('messengerURIUtilsRe').getURIForUserID(t.fbid);
v=
c('React').createElement(c('Link.react'),
{className:"_5f0v",
href:w.toString(),
onClick:this._handleContactSelect.bind(this,t),
tabIndex:-1},
v);}




return (c('React').createElement('div',{className:"_1t_q"},
v));},




_renderMessages:function r(){
var s=this.props.messages.size,
t=[];

this.props.messages.forEach(function(u,v,w){
var x=u.message_id===this.props.activeMessageID;

if(x&&!(v===0&&this.props.hasDateBreak)&&
!c('MessengerConfig').SentTimestampEnabled)
t.push
(c('React').createElement(c('MessengerDateBreak.react'),
{className:"_5r8z",
date:new Date(u.timestamp),
key:'db:'+u.message_id}));






var y=
this.props.isPageMessage&&this.props.pageCustomAction?
this.props.pageCustomAction:
null;

if(y)



t.push
(c('React').createElement('h4',{key:'page_action'+u.message_id},
c('React').createElement(y,{message:u})));




var z=

c('MercuryIDs').getUserIDFromParticipantID(this.props.author),

aa=this.props.thread?this.props.thread.custom_color:'';

t.push
(c('React').createElement(c('MessengerMessage.react'),
{customColor:aa,
deliveryTimestamp:this.props.deliveryTimestamp,
isActive:x,
isFromViewer:this.props.isFromViewer,
isPageMessage:this.props.isPageMessage,
key:u.message_id,
message:u,

messageActionsWrapper:this.props.messageActionWrapper,
onAttachmentLoad:this.props.onAttachmentLoad,
participants:this.state.participants,
nextTimestamp:this._getNextTimestamp(w,s,v),
onDeselect:this.props.onMessageDeselect,
onSelect:this.props.onMessageSelect,
readReceipts:this.props.readReceipts,
showDeliveryState:u.timestamp>this.props.lastReadTimestamp,
ref:u.message_id,
authorFBID:z==null?undefined:z,
threadCustomColor:aa,
pageID:this.props.pageID}));





if(q
(this.props.isPageMessage,
w,
v,
u))

t.push
(c('React').createElement(c('PagesMessengerCreatorInfo.react'),
{key:'creator_info:'+v,
creator_info:u.creator_info}));}.



bind(this));
return t;},


_renderNotes:function r(){
var s=[];
this.props.messages.forEach(function(t,u,v){
if(this.props.isPageMessage&&t.page_admin_notes)
s.push
(c('React').createElement(c('MessengerPageAdminNoteList.react'),
{key:'notes:'+t.message_id,
notes:t.page_admin_notes}));}.



bind(this));
return s;},






_renderName:function r(){
var s=this.state.participants.get
(this.props.messages.first().author);

if(!s)
return null;

var t=s.short_name;
if(this.props.thread){
var u=this.props.thread.custom_nickname?
this.props.thread.custom_nickname:
null,
v=c('MercuryIDs').getUserIDFromParticipantID(s.id);
if(u&&v&&u[v])
t=
c('React').createElement(c('MessengerTextWithEmoticons.react'),
{renderEmoticons:true,
renderEmoji:true,
text:u[v]});}





return (c('React').createElement('h5',
{className:"_ih3"+


(this.props.isCanonical||this.props.isFromViewer?' '+"_-ne":'')},

c('React').createElement('span',{className:"_3oh-"},
t)));},





getMessageElement:function r(s){

return c('ReactDOM').findDOMNode(this.refs[s]);},


_hasSeenHeadsAtBottom:function r(){var s=
this.props,t=s.messages,u=s.nextTimestamp,v=s.readReceipts,
w=t.last().timestamp,
x=0;
v.forEach(function(y){
if(y>=w&&y<u)
if(++x===2)
return false;});



return x===2;},






_getNextTimestamp:function r(s,t,u){
return u<t-1?
s.get(u+1).timestamp:
this.props.nextTimestamp;},


_handleContactSelect:function r(s,t){
t&&t.preventDefault();
var u=c('MercuryIDs').getThreadIDFromParticipantID(s.id);
u&&c('MessengerActions').selectThread(u);}});



function p(r){
var s=r.messages.first().author;
return c('immutable').Map().withMutations(function(t){
r.readReceipts.forEach(function(u,v){
t.set(v,c('MercuryParticipants').getOrFetch(v));});

t.set(s,c('MercuryParticipants').getOrFetch(s));});}







function q
(r,
s,
t,
u){

if(!r||!u.creator_info)
return false;


if(t===s.size-1)
return true;


var v=s.get(t+1).creator_info;
if(!v)
return true;

return u.creator_info.creatorID!==v.creatorID;}

















f.exports=o;}),null);

/** js/mercury/clients/messenger/components/MessengerTypingIndicator.react.js */






__d('MessengerTypingIndicator.react',['cx','Image.react','immutable','MercuryParticipants','MercuryTypingAnimation.react','MessengerProfileImageWrapper.react','MessengerBubble.react','ReactComponentWithPureRenderMixin','React','createReactClass_DEPRECATED','StoreAndPropBasedStateMixin'],(function a(b,c,d,e,f,g,h){














var i=c('React').PropTypes,

j=32,

k=c('createReactClass_DEPRECATED')
({displayName:'MessengerTypingIndicator',

mixins:[c('ReactComponentWithPureRenderMixin'),

c('StoreAndPropBasedStateMixin')(c('MercuryParticipants'))],


propTypes:
{userID:i.string,
showName:i.bool},


statics:
{calculateState:function l(m){

return {author:c('MercuryParticipants').getOrFetch(m.userID)};}},




render:function l(){
if(!this.state.author)
return null;

var m=this.state.author;



return (c('React').createElement('div',
{className:"_1t_p _1hbw"},

c('React').createElement('div',{className:"_1t_q"},
c('React').createElement(c('MessengerProfileImageWrapper.react'),
{className:"_1t_r",
isMessengerUser:m.is_messenger_user,
size:j,
showBadge:true},
c('React').createElement(c('Image.react'),
{alt:'',
src:m.image_src,
height:j,
width:j}))),



c('React').createElement('div',{className:"_41ud"},
c('React').createElement('div',
{className:"_o46 _3erg _29_7"},

c('React').createElement(c('MessengerBubble.react'),
{attachments:
c('immutable').List
([c('React').createElement(c('MercuryTypingAnimation.react'),{key:'animation'})]),


body:'',
className:"_3058",
ref:'bubble'})))));},







getBubble:function l(){
return this.refs.bubble;}});



f.exports=k;}),null);
