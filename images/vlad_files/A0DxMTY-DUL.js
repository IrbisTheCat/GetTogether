if (self.CavalryLogger) { CavalryLogger.start_js(["I6NUg"]); }

/** __static_js_modules__/composedentitymutabilitytoname.js */




__d("ComposedEntityMutabilityToName",[],(function a(b,c,d,e,f,g){

f.exports={"0":"MUTABLE","1":"IMMUTABLE","2":"SEGMENTED"};}),

null);

/** __static_js_modules__/composedentitytypetoname.js */




__d("ComposedEntityTypeToName",[],(function a(b,c,d,e,f,g){

f.exports={"0":"MENTION","1":"LINK","2":"IMAGE","3":"VIDEO","4":"EMOTICON","5":"TOKEN","6":"HASHTAG","7":"IMPLICIT_LINK","8":"EMBED","9":"EMOJI"};}),

null);

/** __static_js_modules__/messengerplatformabusereporttype.js */




__d("MessengerPlatformAbuseReportType",[],(function a(b,c,d,e,f,g){

f.exports={SPAM:"spam",INAPPROPRIATE:"inappropriate",OTHER_ABUSE:"other_abuse"};}),

null);

/** js/components/Video/Video.react.js */





__d('Video.react',['React','ReactDOM'],(function a(b,c,d,e,f,g){var h,i,




j=c('React').PropTypes;h=babelHelpers.inherits




(k,c('React').Component);i=h&&h.prototype;k.prototype.

componentWillUpdate=function(l,m){'use strict';
if(l.playbackRate){

var n=c('ReactDOM').findDOMNode(this.refs.video);

n.playbackRate=l.playbackRate;}};

k.prototype.

render=function(){'use strict';

return (c('React').createElement('video',babelHelpers['extends']({},
this.props,
{ref:'video'})));};


function k(){'use strict';h.apply(this,arguments);}


k.propTypes=
{autoPlay:j.bool,
controls:j.bool,
height:j.oneOfType
([j.string,
j.number]),

loop:j.bool,
muted:j.bool,
onAbort:j.func,
onCanPlay:j.func,
onCanPlayThrough:j.func,
onDurationChange:j.func,
onEmptied:j.func,
onEncrypted:j.func,
onEnded:j.func,
onError:j.func,
onLoadedData:j.func,
onLoadedMetadata:j.func,
onLoadStart:j.func,
onPause:j.func,
onPlay:j.func,
onPlaying:j.func,
onProgress:j.func,
onRateChange:j.func,
onSeeked:j.func,
onSeeking:j.func,
onStalled:j.func,
onSuspend:j.func,
onTimeUpdate:j.func,
onVolumeChange:j.func,
onWaiting:j.func,
playbackRate:j.number,
poster:j.string,
src:j.string.isRequired,
width:j.oneOfType
([j.string,
j.number])};



f.exports=k;}),null);

/** js/mercury/clients/messenger/MessengerPresenceStatusUtils.js */






__d('MessengerPresenceStatusUtils',['fbt','AvailableListConstants','LastActiveTimes','MercuryIDs','PresenceStatus','WorkGKs'],(function a(b,c,d,e,f,g,h){

'use strict';












var i=



{getStatusFromCanonicalThread:function j
(k,
l){

var m=null;
if(l&&l.is_canonical){
var n=k.get
(c('MercuryIDs').getParticipantIDFromFromThreadID(l.thread_id));

if(n){
var o=void 0;
if(n.is_messenger_user){
o=c('WorkGKs').workplace_www_chat_branding?h._(["Work Chat","b8004504e9583632779a84e6461fe51a"]):h._(["Messenger","1e660d1508513f2989f6411da411f4ee"]);}else 










o=c('WorkGKs').workplace_www_chat_branding?h._(["Workplace","e7f8574813d372b1a99d06c803e4a4ae"]):h._(["Facebook","323604474ff0649d0fac6d565a692028"]);











var p=c('PresenceStatus').get(n.fbid),
q=void 0,
r=void 0;
if(p!==c('AvailableListConstants').ACTIVE){
q=c('LastActiveTimes').get(n.fbid);
r=c('LastActiveTimes').getShortDisplay(n.fbid);}

m=
{contact:n,
platform:o,
isUserActive:p===c('AvailableListConstants').ACTIVE,
lastActiveTS:q,
lastActive:r};}}



return m;}};



f.exports=i;}),null);

/** js/mercury/clients/messenger/components/MessengerThreadListGridWrapper.react.js */







__d('MessengerThreadListGridWrapper.react',['cx','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,





k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.









render=function(){
var m=this.props.label;

return (c('React').createElement('div',null,
c('React').createElement('h2',{className:"accessible_elem"},m),
c('React').createElement('ul',{'aria-label':m,role:'grid'},
this.props.children)));};



function l(){i.apply(this,arguments);}l.propTypes={label:k.string.isRequired};


f.exports=l;}),null);

/** js/mercury/clients/messenger/components/core/MessengerCheckboxInput.react.js */






__d('MessengerCheckboxInput.react',['cx','AbstractCheckboxInput.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits












(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.
render=function(){'use strict';

return (c('React').createElement(c('AbstractCheckboxInput.react'),babelHelpers['extends']({},
this.props,
{className:c('joinClasses')
(this.props.className,
"_55sg _4ng2")})));};



function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** www/__virtual__/x/XMNReportPageConversationActionController.js */



__d("XMNReportPageConversationActionController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messenger_platform\/report_page_conversation\/submit\/",{page_id:{type:"FBID",required:true},report_type:{type:"String",required:true}});}),

null);

/** js/mercury/clients/messenger/components/messenger_commerce/MNCommerceReportConversationDialog.react.js */










__d('MNCommerceReportConversationDialog.react',['cx','fbt','AsyncRequest','Link.react','MercuryIDs','MercuryParticipants','MessengerDialog.react','MessengerDialogBody.react','MessengerDialogButton.react','MessengerDialogFooter.react','MessengerDialogHeader.react','messengerDialogsRe','MessengerPlatformAbuseReportType','MNCommerceDialogStateActions','MNCommercePromotionBlockDataManager','MNCommercePromotionManageBlockDialogContainer.react','React','XMNReportPageConversationActionController','XUIRadioList.react'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,



















l=c('XUIRadioList.react').Item,




m=c('React').PropTypes;j=babelHelpers.inherits

(n,c('React').PureComponent);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.






state=
{error:false,
pageName:'',
reportType:c('MessengerPlatformAbuseReportType').SPAM},this.




































































































































































$MNCommerceReportConversationDialog_onManageLinkClick=function(){
this.$MNCommerceReportConversationDialog_onToggle();
var t=function v
(w,
x){

return c('MNCommercePromotionBlockDataManager').block(w,x);},

u=this.props.pageID;
c('MNCommerceDialogStateActions').showDialog(c('MNCommercePromotionManageBlockDialogContainer.react'),


{pageID:u,
onConfirmButtonClick:t});}.


bind(this),this.

$MNCommerceReportConversationDialog_onReportTypeChange=function(t){
this.setState({reportType:t});}.
bind(this),this.

$MNCommerceReportConversationDialog_onToggle=function(){
if(this.props.onToggle){
this.props.onToggle();}else 

c('messengerDialogsRe').removeDialog();}.

bind(this),this.

$MNCommerceReportConversationDialog_onConfirm=function(){
var t=c('XMNReportPageConversationActionController').getURIBuilder().
setFBID('page_id',this.props.pageID).
setString('report_type',this.state.reportType).
getURI();

new (c('AsyncRequest'))().
setURI(t).
setHandler(function(){
this.$MNCommerceReportConversationDialog_onToggle();}.
bind(this)).
setErrorHandler(function(){
this.setState({error:true});}.
bind(this)).
send();}.
bind(this),p;}n.prototype.componentWillMount=function(){var o=c('MercuryParticipants').getNow(c('MercuryIDs').getParticipantIDFromUserID(this.props.pageID));this.setState({pageName:o?o.short_name:''});};n.prototype.render=function(){if(this.props.showDialog===false)return null;return c('React').createElement(c('MessengerDialog.react'),{onToggle:this.$MNCommerceReportConversationDialog_onToggle},c('React').createElement(c('MessengerDialogHeader.react'),null,i._(["Report","bb142baeceb24c481765a0ff4458aa72"])),this.$MNCommerceReportConversationDialog_renderBody(),this.$MNCommerceReportConversationDialog_renderFooter());};n.prototype.$MNCommerceReportConversationDialog_renderBody=function(){var o=c('React').createElement('div',{className:"_5zjy"},i._(["Help us understand what's happening:","2850026c4ec758200dbe95a640b6341c"])),p=this.$MNCommerceReportConversationDialog_renderRadioList(),q=c('React').createElement('div',{className:"_5zjz"},i._(["Reporting this conversation will also turn off all messages from {page name}.","951719178b0c7e140640c51faf87ff8c"],[i.param('page name',this.state.pageName)])),r=this.$MNCommerceReportConversationDialog_renderAlternativeText();return this.state.error?c('React').createElement(c('MessengerDialogBody.react'),{className:"_5zj-"},i._(["Sorry, Something went wrong.","8334971df4c904610e429f1e5a9c12a3"])):c('React').createElement(c('MessengerDialogBody.react'),{className:"_5zj_"},o,p,q,r);};n.prototype.$MNCommerceReportConversationDialog_renderFooter=function(){var o=i._(["Report","186dbd3daf7e012c66057a030bcdf11f"]),p=i._(["Cancel","b664ee34abf71238d3aaf311fd372103"]),q=i._(["OK","e85d84bf2dd04ffc67b6ce47b492c2f4"]);if(this.state.error)return c('React').createElement(c('MessengerDialogFooter.react'),{className:"_5zk0"},c('React').createElement(c('MessengerDialogButton.react'),{label:q,onClick:this.$MNCommerceReportConversationDialog_onToggle,type:'primary',use:'default'}));return c('React').createElement(c('MessengerDialogFooter.react'),{className:"_5zk0"},c('React').createElement(c('MessengerDialogButton.react'),{label:p,type:'secondary',onClick:this.$MNCommerceReportConversationDialog_onToggle,use:'default'}),c('React').createElement(c('MessengerDialogButton.react'),{label:o,onClick:this.$MNCommerceReportConversationDialog_onConfirm,type:'primary',use:'default'}));};n.prototype.$MNCommerceReportConversationDialog_renderRadioList=function(){return c('React').createElement(c('XUIRadioList.react'),{selectedValue:this.state.reportType,onValueChange:this.$MNCommerceReportConversationDialog_onReportTypeChange},c('React').createElement(l,{value:c('MessengerPlatformAbuseReportType').SPAM},i._(["It's spam","e52239a321bfd528757fec46e4227ad2"])),c('React').createElement(l,{value:c('MessengerPlatformAbuseReportType').INAPPROPRIATE},i._(["It's inappropriate","4fad940753bceadb1dcee5b75a47a20c"])),c('React').createElement(l,{value:c('MessengerPlatformAbuseReportType').OTHER_ABUSE},i._(["Other","f70a62b42dc367ec9fa078c2c76eda23"])));};n.prototype.$MNCommerceReportConversationDialog_renderAlternativeText=function(){return c('React').createElement('div',{className:"_5zk1"},i._(["To stop receiving messages without reporting {page name}, you can manage your messages instead.","7a4f8b2beaecb22c257ab99656c662e1"],[i.param('page name',this.state.pageName)]),this.$MNCommerceReportConversationDialog_renderManageLink());};n.prototype.$MNCommerceReportConversationDialog_renderManageLink=function(){return c('React').createElement(c('Link.react'),{className:"_5zk2",onClick:this.$MNCommerceReportConversationDialog_onManageLinkClick},i._(["Manage","70387c6ae0132614dc77fe762f1b5477"]));};n.propTypes={pageID:m.string.isRequired,showDialog:m.bool,onToggle:m.func};


f.exports=n;}),null);

/** www/__virtual__/x/XNFXStartForMessageThreadController.js */



__d("XNFXStartForMessageThreadController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/nfx\/start_message_thread\/",{thread_fbid:{type:"String",required:true},responsible_fbid:{type:"Int"},av:{type:"Int"},location:{type:"Enum",enumType:1},__asyncDialog:{type:"Int"}});}),

null);

/** js/mercury/clients/messenger/ironman/lib/js/src/mNCommerceReportConversationDialogReact.js */





__d('mNCommerceReportConversationDialogReact',['reactRe','MNCommerceReportConversationDialog.react'],(function a(b,c,d,e,f,g){

'use strict';




function h(i){
var j=
{pageID:i},

k=c('MNCommerceReportConversationDialog.react');
return function(l,m,n,o){
return c('reactRe').wrapPropsShamelessly(k,j,l,m,n,o);};}



g.createElement=h;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerBlockDialogReact.js */





__d("messengerBlockDialogReact",["cx","fbt","bs_curry","React","reactRe","utilsRe","linkReact","bs_js_primitive","messengerDialogReact","messengerDialogBodyReact"],(function a(b,c,d,e,f,g,h,i){

'use strict';












var j=c("reactRe").Component[0],

k=c("reactRe").Component[1],

l=c("reactRe").Component[2],

m=c("reactRe").Component[3],

n=c("reactRe").Component[4],

o=c("reactRe").Component[5],

p=c("reactRe").Component[6],

q=c("reactRe").Component[7],

r="MessengerBlockDialogReact";

function s(ea,fa){
var ga=ea[1];
c("bs_curry")._1(ga[0],0);
c("bs_curry")._1(ga[1],false);
return 0;}


function t(ea,fa){
return c("React").createElement("div",
{className:"_1q73"},i._(["If you want, you can also {link}","7339e279e13c544c36d5bc5628726cc5"],
[i.param("link",c("linkReact").createElement(0,0,[fa],0,0,0,0,0,["_blank"],0)([i._(["block {short_name_or_description} on Facebook.","21fc0fb73d47d64969a6b9e0de78e790"],
[i.param("short_name_or_description",c("utilsRe").$pipe$unknown(ea,i._(["this person","c924f1e96cea917409f8d9422079280b"])))]),




0],
0,0,0))]));}




function u(ea){
var fa=ea[1],
ga=fa[2],
ha;
if(ga){
var ia=ga[0];
ha=
[[ia.name],
c("bs_js_primitive").null_undefined_to_opt(ia.href)];}else 


ha=
[0,
0];


var ja=ha[1],
ka=ha[0];
return c("bs_curry").app(c("messengerDialogReact").Dialog[0],
[0,
fa[1],
0,
0,
0,
0,
0,

[c("bs_curry")._6(c("messengerDialogReact").Header[0],0,0,[i._(["Block Messages","80e32bd92db1acd6a550db58ba294636"]),



0],
0,0,0),

[c("bs_curry")._3(c("messengerDialogBodyReact").createElement(0,
[c("React").createElement("div",
{className:"_1q73"},i._(["Stop getting messages and calls from {short_name_or_description} in Messenger.","0ccd690acd78d1bcefe3d0bbf71b9f86"],
[i.param("short_name_or_description",c("utilsRe").$pipe$unknown(ka,i._(["this person","ce4aef6a4a88f4e8c3e7a482605566bd"])))])),





[ja?t(ka,ja[0]):null,

[c("React").createElement("div",undefined,c("linkReact").createElement(0,0,["https://www.facebook.com/help/389645087895231"],0,0,0,0,0,["_blank"],0)([i._(["Learn more","804f875d09b50c630946d7830820a28c"]),



0],
0,0,0)),
0]]]),


0,0,0),

[c("bs_curry")._6(c("messengerDialogReact").Footer[0],0,0,
[c("bs_curry")._5(c("messengerDialogReact").CancelButton[0],0,0,0,0,0),

[c("bs_curry").app(c("messengerDialogReact").Button[0],
[0,
[i._(["Block Messages","973c3f455c88b3a98f4adeb5fdb418b1"])],


0,
["danger"],
[c("bs_curry")._1(ea[2],s)],
[0],
0,
0,
0,
0,
0,
0]),

0]],

0,0,0),
0]]],



0,
0,
0]);}



var v=c("reactRe").Component[8],

w=c("reactRe").Component[9],

x=c("reactRe").Component[10],

y=
[j,
k,
l,
m,
n,
o,
p,
q,
v,
w,
x,
r,
s,
t,
u],


z=c("reactRe").CreateComponent
([r,
o,
q,
j,
m,
k,
l,
n,
p,
u]),


aa=z[1];

function ba(ea,fa,ga){
return c("bs_curry")._1(aa,
[ea,
fa,
ga]);}



var ca=c("utilsRe").$pipe$unknown,

da=z[0];

g.$pipe$unknown=ca;
g.MessengerBlockDialog=y;
g.comp=da;
g.wrapProps=aa;
g.createElement=ba;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerDeleteDialogReact.js */





__d('messengerDeleteDialogReact',['fbt','bs_curry','reactRe','messengerDialogsRe','messengerDialogReact','messengerDialogBodyReact'],(function a(b,c,d,e,f,g,h){

'use strict';








var i=c('reactRe').Component[9],

j=i[0],

k=i[1],

l=i[2],

m=i[3],

n=i[4],

o=i[5],

p=i[6],

q="MessengerDeleteDialogReact";

function r(ba,ca){
if(!ca)
c('messengerDialogsRe').removeDialog(0);

return 0;}


function s(ba,ca){
var da=ba[1];
c('bs_curry')._1(da[2],false);
c('bs_curry')._1(da[0],ca);
return 0;}


function t(ba,ca){
var da=ba[1];
c('bs_curry')._1(da[2],false);
c('bs_curry')._1(da[1],0);
return 0;}


function u(ba){
var ca=ba[2];
return c('bs_curry').app(c('messengerDialogReact').Dialog[0],
[0,
c('bs_curry')._1(ca,r),
0,
0,
0,
0,
0,

[c('bs_curry')._6(c('messengerDialogReact').Header[0],0,0,[h._(["Delete Conversation","ce134df2f8b93adfe925e552800baf22"]),



0],
0,0,0),

[c('bs_curry')._3(c('messengerDialogBodyReact').createElement(0,[h._(["This will permanently delete the conversation history.","cb828f6d8391304479ee18dec7880479"]),



0]),
0,0,0),

[c('bs_curry')._6(c('messengerDialogReact').Footer[0],0,0,
[c('bs_curry')._5(c('messengerDialogReact').CancelButton[0],0,0,0,0,0),

[c('bs_curry').app(c('messengerDialogReact').Button[0],
[0,
[h._(["Archive","00266b35d72640a050ed4d518362c474"])],


0,
0,
[c('bs_curry')._1(ca,s)],
[1],
0,
0,
0,
0,
0,
0]),


[c('bs_curry').app(c('messengerDialogReact').Button[0],
[0,
[h._(["Delete","91d9b1999b97ea3fd2fc59b1054c808f"])],


0,
["danger"],
[c('bs_curry')._1(ca,t)],
[0],
0,
0,
0,
0,
0,
0]),

0]]],


0,0,0),
0]]],



0,
0,
0]);}



var v=[function(ba){

return [ba.onArchive,
ba.onDelete,
ba.onToggle];}],



w=
[j,
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
v],


x=c('reactRe').CreateComponent
([q,
o,
p,
j,
m,
k,
l,
n,
v,
u]),


y=x[1];

function z(ba,ca,da){
return c('bs_curry')._1(y,
[ba,
ca,
da]);}



var aa=x[0];

g.MessengerDeleteDialog=w;
g.comp=aa;
g.wrapProps=y;
g.createElement=z;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerMarkSpamDialogReact.js */





__d('messengerMarkSpamDialogReact',['fbt','bs_curry','reactRe','messengerDialogReact','messengerDialogBodyReact'],(function a(b,c,d,e,f,g,h){

'use strict';







var i=c('reactRe').Component[0],

j=c('reactRe').Component[1],

k=c('reactRe').Component[2],

l=c('reactRe').Component[3],

m=c('reactRe').Component[4],

n=c('reactRe').Component[5],

o=c('reactRe').Component[6],

p=c('reactRe').Component[7],

q="MessengerMarkSpamDialogReact";

function r(ba,ca){
var da=ba[1];
c('bs_curry')._1(da[0],0);
c('bs_curry')._1(da[1],false);
return 0;}


function s(ba){
return c('bs_curry').app(c('messengerDialogReact').Dialog[0],
[0,
ba[1][1],
0,
0,
0,
0,
0,

[c('bs_curry')._6(c('messengerDialogReact').Header[0],0,0,[h._(["Mark as Spam","3031a67da480d606b752a700848ebcf3"]),



0],
0,0,0),

[c('bs_curry')._3(c('messengerDialogBodyReact').createElement(0,[h._(["This conversation will be reported as spam and removed.","40d599ce7865c9f285d880588d5cc15d"]),



0]),
0,0,0),

[c('bs_curry')._6(c('messengerDialogReact').Footer[0],0,0,
[c('bs_curry')._5(c('messengerDialogReact').CancelButton[0],0,0,0,0,0),

[c('bs_curry').app(c('messengerDialogReact').Button[0],
[0,
[h._(["Mark as Spam","3031a67da480d606b752a700848ebcf3"])],


0,
["danger"],
[c('bs_curry')._1(ba[2],r)],
[0],
0,
0,
0,
0,
0,
0]),

0]],

0,0,0),
0]]],



0,
0,
0]);}



var t=c('reactRe').Component[8],

u=c('reactRe').Component[9],

v=c('reactRe').Component[10],

w=
[i,
j,
k,
l,
m,
n,
o,
p,
t,
u,
v,
q,
r,
s],


x=c('reactRe').CreateComponent
([q,
n,
p,
i,
l,
j,
k,
m,
o,
s]),


y=x[1];

function z(ba,ca){
return c('bs_curry')._1(y,
[ba,
ca]);}



var aa=x[0];

g.MessengerMarkSpamDialog=w;
g.comp=aa;
g.wrapProps=y;
g.createElement=z;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerMenuReact.js */





__d('messengerMenuReact',['reactRe','bs_js_null_undefined','MessengerMenu.react'],(function a(b,c,d,e,f,g){

'use strict';





var h={},

i=c('MessengerMenu.react');

function j(r,s,t,u){
return c('reactRe').wrapPropsShamelessly(i,h,r,s,t,u);}


var k=[j];

function l(r,s,t,u){
var v=
{href:c('bs_js_null_undefined').from_opt(r),
label:s,
onclick:c('bs_js_null_undefined').from_opt(t),
target:c('bs_js_null_undefined').from_opt(u)},

w=c('MessengerMenu.react').Item;
return function(x,y,z,aa){
return c('reactRe').wrapPropsShamelessly(w,v,x,y,z,aa);};}



var m=[l],

n={},

o=c('MessengerMenu.react').Separator;

function p(r,s,t,u){
return c('reactRe').wrapPropsShamelessly(o,n,r,s,t,u);}


var q=[p];

g.Menu=k;
g.MenuItem=m;
g.MenuSeparator=q;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerRadioListRe.js */





__d('messengerRadioListRe',['reactRe','bs_js_boolean','bs_js_null_undefined','MessengerRadioList.react'],(function a(b,c,d,e,f,g){

'use strict';






function h(l,m,n){
var o=
{name:c('bs_js_null_undefined').from_opt(l),
onValueChange:m,
selectedValue:n},

p=c('MessengerRadioList.react');
return function(q,r,s,t){
return c('reactRe').wrapPropsShamelessly(p,o,q,r,s,t);};}



var i=[h];

function j(l,m,n,o,p,q){
var r=l?l[0]:0,
s=
{disabled:c('bs_js_boolean').to_js_boolean(r),
className:c('bs_js_null_undefined').from_opt(m),
name:c('bs_js_null_undefined').from_opt(n),
onSelect:c('bs_js_null_undefined').from_opt(o),
selectedValue:c('bs_js_null_undefined').from_opt(p),
value:q},

t=c('MessengerRadioList.react').Item;
return function(u,v,w,x){
return c('reactRe').wrapPropsShamelessly(t,s,u,v,w,x);};}



var k=[j];

g.List=i;
g.Item=k;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerMuteDialogReact.js */





__d("messengerMuteDialogReact",["cx","fbt","bs_block","bs_curry","React","reactRe","bs_caml_int32","MercuryConfig","messengerDomIDsRe","messengerDialogReact","messengerRadioListRe","messengerDialogBodyReact"],(function a(b,c,d,e,f,g,h,i){

'use strict';














function j(ha){
if(typeof ha==="number"){
return -1;}else
if(ha.tag){
return c("bs_caml_int32").imul(ha[0],3600);}else 

return c("bs_caml_int32").imul(ha[0],60);}



var k=c("bs_block").__(0,[30]),

l=c("bs_block").__(1,[1]),

m=c("bs_block").__(1,[8]),

n=c("bs_block").__(1,[24]),

o=c("reactRe").Component[8][7],

p=o[0],

q=o[1],

r=o[2],

s=o[3],

t=o[4],

u=o[5],

v="MessengerMuteDialogReact";

function w(){
return [k];}


function x(ha,ia){
return [[ia]];}


function y(ha,ia){
var ja=ha[1],
ka=j(ha[0][0]);
c("bs_curry")._1(ja[0],ka);
c("bs_curry")._1(ja[1],false);
return 0;}


function z(ha){
var ia=ha[2],
ja=+c("MercuryConfig").Mentions;
return c("bs_curry").app(c("messengerDialogReact").Dialog[0],
[0,
ha[1][1],
0,
0,
[c("messengerDomIDsRe").ids.MUTE_DIALOG_TITLE],
0,
0,

[c("bs_curry")._6(c("messengerDialogReact").Header[0],0,0,[i._(["Mute Conversation","e59e187b4a997b95683f22224fc75f4a"]),



0],
0,0,0),

[c("bs_curry")._3(c("messengerDialogBodyReact").createElement(0,
[ja!==0?c("React").createElement("div",
{className:"_3-96"},i._(["You will continue to receive \u0040mention notifications while muted.","484452c92722143f2cd9de384698b54e"])):


null,

[c("bs_curry")._7(c("messengerRadioListRe").List[0],["messengerMuteOptions"],c("bs_curry")._1(ia,x),ha[0][0],
[c("bs_curry").app(c("messengerRadioListRe").Item[0],
[0,
0,
0,
0,
0,
k,
[i._(["For 30 minutes","a59de8bb22a4879979a8fe3893649485"]),



0],

0,
0,
0]),


[c("bs_curry").app(c("messengerRadioListRe").Item[0],
[0,
0,
0,
0,
0,
l,
[i._(["For 1 hour","d383c58894f1eb6c85fb4db39eb67cab"]),



0],

0,
0,
0]),


[c("bs_curry").app(c("messengerRadioListRe").Item[0],
[0,
0,
0,
0,
0,
m,
[i._(["For 8 hours","5587f103ca3f8748f6fb77d17d54490f"]),



0],

0,
0,
0]),


[c("bs_curry").app(c("messengerRadioListRe").Item[0],
[0,
0,
0,
0,
0,
n,
[i._(["For 24 hours","7dad64c5d1d37f83318b45e3ef953cac"]),



0],

0,
0,
0]),


[c("bs_curry").app(c("messengerRadioListRe").Item[0],
[0,
0,
0,
0,
0,
0,
[i._(["Indefinitely","dd81e94436dcb630e9dc10ca4b5d519d"]),



0],

0,
0,
0]),

0]]]]],




0,0,0),
0]]),

0,0,0),

[c("bs_curry")._6(c("messengerDialogReact").Footer[0],0,0,
[c("bs_curry")._5(c("messengerDialogReact").CancelButton[0],0,0,0,0,0),

[c("bs_curry").app(c("messengerDialogReact").Button[0],
[0,
[i._(["Mute","50373835c7f169a98bd1ee7190b88e00"])],


0,
0,
[c("bs_curry")._1(ia,y)],
[0],
0,
0,
0,
0,
0,
0]),

0]],

0,0,0),
0]]],



0,
0,
0]);}



var aa=[function(ha){

return [ha.onMute,
ha.onToggle];}],



ba=
[p,
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
aa],


ca=c("reactRe").CreateComponent
([v,
u,
w,
p,
s,
q,
r,
t,
aa,
z]),


da=ca[1];

function ea(ha,ia){
return c("bs_curry")._1(da,
[ha,
ia]);}



var fa=0,

ga=ca[0];

g.convertMuteToSeconds=j;
g.thirtyMinutes=k;
g.oneHour=l;
g.eightHours=m;
g.twentyFourHours=n;
g.always=fa;
g.MessengerMuteDialog=ba;
g.comp=ga;
g.wrapProps=da;
g.createElement=ea;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerPopoverMenuReact.js */





__d('messengerPopoverMenuReact',['reactRe','utilsRe','bs_js_null_undefined','MessengerPopoverMenu.react'],(function a(b,c,d,e,f,g){

'use strict';






function h(i,j,k,l,m){
var n=
{disableArrowKeyActivation:c('utilsRe').optionBoolToNullUndefinedBoolean(i),
isOpen:c('utilsRe').optionBoolToNullUndefinedBoolean(j),
menu:k,
onHide:c('bs_js_null_undefined').from_opt(l),
onShow:c('bs_js_null_undefined').from_opt(m)},

o=c('MessengerPopoverMenu.react');
return function(p,q,r,s){
return c('reactRe').wrapPropsShamelessly(o,n,p,q,r,s);};}



g.createElement=h;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerThreadlistRowActionsReact.js */





__d("messengerThreadlistRowActionsReact",["cx","fbt","bs_curry","React","reactRe","utilsRe","bs_js_boolean","AsyncDialog","joinClasses","AsyncRequest","bs_js_primitive","MercuryThreadIDMap","messengerDialogsRe","messengerMenuReact","messengerMuteDialogReact","messengerBlockDialogReact","messengerPopoverMenuReact","messengerDeleteDialogReact","messengerMarkSpamDialogReact","XNFXStartForMessageThreadController","mNCommerceReportConversationDialogReact"],(function a(b,c,d,e,f,g,h,i){

'use strict';























var j=c("reactRe").Component[9],

k=j[0],

l=j[1],

m=j[2],

n=j[3],

o=j[4],

p=j[5],

q=j[6],

r="MessengerThreadlistRowActionsReact";

function s(ka,la){
if(!la)
c("messengerDialogsRe").removeDialog(0);

return 0;}


function t(ka,la){
la.preventDefault();
return la.stopPropagation();}


function u(ka,la){
c("bs_curry")._1(ka[1][15],true);
return 0;}


function v(ka,la){
c("bs_curry")._1(ka[1][15],false);
return 0;}


function w(ka,la){
var ma=ka[2],
na=ka[1];
c("messengerDialogsRe").showDialog(function(){
return c("bs_curry")._4(c("messengerDeleteDialogReact").createElement(na[7],na[8],c("bs_curry")._1(ma,s)),0,0,0,0);});

return 0;}


function x(ka,la){
var ma=ka[2],
na=ka[1];
if(na[3]){
c("bs_curry")._1(na[16],0);}else 

c("messengerDialogsRe").showDialog(function(){
return c("bs_curry")._4(c("messengerMuteDialogReact").createElement(na[13],c("bs_curry")._1(ma,s)),0,0,0,0);});


return 0;}


function y(ka,la){
var ma=ka[1];
if(ma[5]){
c("bs_curry")._1(ma[10],0);}else 

c("bs_curry")._1(ma[12],0);

return 0;}


function z(ka,la){
var ma=ka[2],
na=ka[1];
c("messengerDialogsRe").showDialog(function(){
return c("bs_curry")._4(c("messengerMarkSpamDialogReact").createElement(na[11],c("bs_curry")._1(ma,s)),0,0,0,0);});

return 0;}


function aa(ka,la){
var ma=ka[2],
na=ka[1];
if(na[6]){
c("bs_curry")._1(na[18],0);}else 

c("messengerDialogsRe").showDialog(function(){
return c("bs_curry")._4(c("messengerBlockDialogReact").createElement(na[17],c("bs_curry")._1(ma,s),na[1]),0,0,0,0);});


return 0;}


function ba(ka,la){
var ma=c("MercuryThreadIDMap").get();
ma.getServerIDFromClientID(ka[1][24].thread_id,function(na){
c("AsyncDialog").send(new (c("AsyncRequest"))(c("XNFXStartForMessageThreadController").getURIBuilder().setString("thread_fbid",na).getURI()));
return 0;});

return 0;}


function ca(ka,la){
var ma=ka[1][24].other_user_fbid;
if(!c("bs_js_primitive").is_nil_undef(ma))
c("messengerDialogsRe").showDialog(function(){
return c("mNCommerceReportConversationDialogReact").createElement(ma)(0,0,0,0);});


return 0;}


function da(ka){
var la=ka[2],
ma=ka[1],
na=ma[2],
oa=na!==0?i._(["Leave Room","a038bbc8fbcd37411ab949130e7b9e08"]):i._(["Leave Group","79291d535fbe7aa186401746259957f9"]),




pa=ma[6],
qa=pa!==0?i._(["Unblock Messages","fef57e34e0987a06266a0c18f360eb08"]):i._(["Block Messages","037c2b775c34f6b5c11ab90ef4e4ef24"]),




ra=ma[20],
sa;
if(ra!==0){
var ta=ma[3];
sa=c("bs_curry")._8(c("messengerMenuReact").MenuItem[0],0,ta!==0?i._(["Unmute","dd04e3c27743fd2d61cc7affc68d5c9c"]):i._(["Mute","8be456f524a0c6dd5a7eac7245d1b570"]),



[c("bs_curry")._1(la,x)],0,0,0,0,0);}else 

sa=null;

var ua=c("utilsRe").isSomeTrue(ma[22]),
va=ma[20]||c("utilsRe").isSomeTrue(ma[22]),
wa=ma[19],
xa=ma[5],
ya=c("utilsRe").isSomeTrue(ma[23]),
za=c("utilsRe").isSomeTrue(ma[23]),
ab=ma[21],
bb=c("bs_curry")._4(c("messengerMenuReact").Menu[0],
[sa,

[ua!==0?c("bs_curry")._8(c("messengerMenuReact").MenuItem[0],0,i._(["Rename","01f6b82b918c4d674e2191513d2448e9"]),

ma[14],0,0,0,0,0):null,

[va!==0?c("bs_curry")._4(c("messengerMenuReact").MenuSeparator[0],0,0,0,0):null,

[wa!==0?c("bs_curry")._8(c("messengerMenuReact").MenuItem[0],0,oa,ma[9],0,0,0,0,0):null,

[c("bs_curry")._8(c("messengerMenuReact").MenuItem[0],0,i._(["Archive","b132c2a65c00fe206e3b0494393ec39e"]),

[ma[7]],0,0,0,0,0),

[c("bs_curry")._8(c("messengerMenuReact").MenuItem[0],0,i._(["Delete","d0f373a2a625c7ad6ea416ed8130b887"]),

[c("bs_curry")._1(la,w)],0,0,0,0,0),

[c("bs_curry")._4(c("messengerMenuReact").MenuSeparator[0],0,0,0,0),

[c("bs_curry")._8(c("messengerMenuReact").MenuItem[0],0,xa!==0?i._(["Mark as Read","614c5f59a0629aa9ec0a7adc39f3b1bf"]):i._(["Mark as Unread","928fda631c9afc56247fb73e1b4412ff"]),



[c("bs_curry")._1(la,y)],0,0,0,0,0),

[ya!==0?null:c("bs_curry")._8(c("messengerMenuReact").MenuItem[0],0,i._(["Mark as Spam","9d9469f3124da3e72c2b5fed58d68665"]),

[c("bs_curry")._1(la,z)],0,0,0,0,0),

[za!==0?c("bs_curry")._8(c("messengerMenuReact").MenuItem[0],0,i._(["Report...","673fd1ef98acf35e0a9a1af9f48b6119"]),

[c("bs_curry")._1(la,ca)],0,0,0,0,0):c("bs_curry")._8(c("messengerMenuReact").MenuItem[0],0,i._(["Report Spam or Abuse...","6a2181e690f89665b81d1454a7cb613e"]),

[c("bs_curry")._1(la,ba)],0,0,0,0,0),

[ab!==0?c("bs_curry")._8(c("messengerMenuReact").MenuItem[0],0,qa,[c("bs_curry")._1(la,aa)],0,0,0,0,0):null,
0]]]]]]]]]]],










0,0,0);
return c("React").createElement("div",
{className:"_3d85"},
c("messengerPopoverMenuReact").createElement([1],[ma[4]],bb,[c("bs_curry")._1(la,v)],[c("bs_curry")._1(la,u)])
([c("React").createElement("div",
{"aria-label":i._(["Conversation actions","10aedfa061c3d5b4555cb50afaef66fb"]),


className:c("joinClasses")(c("utilsRe").$pipe$unknown(ma[0],""),"_4-0h"+

(c("bs_js_boolean").to_js_boolean(ma[4])?" "+"_4-0i":"")),

onClick:c("bs_curry")._1(la,t),
role:"button",
ref:"button",
tabIndex:0}),

0],
0,0,0));}


var ea=[function(ka){

return [c("bs_js_primitive").null_undefined_to_opt(ka.className),
c("bs_js_primitive").null_undefined_to_opt(ka.contact),
+ka.isMessengerRoom,
+ka.isMuted,
+ka.isOpen,
+ka.isUnread,
+ka.isBlocked,
ka.onArchive,
ka.onDelete,
c("bs_js_primitive").null_undefined_to_opt(ka.onLeaveGroup),
ka.onMarkRead,
ka.onMarkSpam,
ka.onMarkUnread,
ka.onMute,
c("bs_js_primitive").null_undefined_to_opt(ka.onRename),
ka.onToggle,
ka.onUnmute,
ka.onBlock,
ka.onUnblock,
+ka.showLeaveGroup,
+ka.showMute,
+ka.showBlock,
c("utilsRe").nullUndefinedBooleanToOptionBool(ka.showRename),
c("utilsRe").nullUndefinedBooleanToOptionBool(ka.showReport),
ka.thread];}],



fa=
[k,
l,
m,
n,
o,
p,
q,
r,
c("utilsRe").$pipe$unknown,
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
da,
ea],


ga=c("reactRe").CreateComponent
([r,
p,
q,
k,
n,
l,
m,
o,
ea,
da]),


ha=ga[1];

function ia(ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,ab,bb,cb,db,eb,fb,gb,hb,ib){
return c("bs_curry")._1(ha,
[ka,
la,
ma,
na,
oa,
pa,
qa,
ra,
sa,
ta,
ua,
va,
wa,
xa,
ya,
za,
ab,
bb,
cb,
db,
eb,
fb,
gb,
hb,
ib]);}



var ja=ga[0];

g.MessengerThreadlistRowActions=fa;
g.comp=ja;
g.wrapProps=ha;
g.createElement=ia;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerThreadlistRowSeenHeadReact.js */





__d('messengerThreadlistRowSeenHeadReact',['cx','bs_curry','reactRe','utilsRe','imageReact','MercuryIDs','joinClasses','bs_js_primitive','MercuryMessageInfo'],(function a(b,c,d,e,f,g,h){

'use strict';











function i(z,aa,ba,ca){
var da=ba.snippet_sender;
if(ca){
var ea=ca[0];
if(ea.author===z&&aa.watermark>=ea.timestamp&&!c('MercuryMessageInfo').isSending(ea)){
return 1- +c('MercuryMessageInfo').hasError(ea);}else 

return 0;}else

if(!c('bs_js_primitive').is_nil_undef(da)&&da===z){
return +(aa.watermark>=ba.timestamp);}else 

return 0;}



var j=c('reactRe').Component[9],

k=j[0],

l=j[1],

m=j[2],

n=j[3],

o=j[4],

p=j[5],

q=j[6],

r="MessengerThreadlistRowSeenHeadReact";

function s(z){
var aa=z[1],
ba=aa[1],
ca=+aa[5].is_canonical,
da=aa[5].other_user_fbid;
if(ba){
if(ca!==0){
if(c('bs_js_primitive').is_nil_undef(da)){
return null;}else
if(ba[0]){
return null;}else{

var ea=c('MercuryIDs').getParticipantIDFromUserID(aa[6]),
fa=c('MercuryIDs').getParticipantIDFromUserID(da),
ga=aa[4].get(fa),
ha=aa[3].get(fa);
if(ha!==undefined&&ga!==undefined&&i(ea,ga,aa[5],aa[2])){
return c('imageReact').createElement([c('joinClasses')(c('utilsRe').$pipe$unknown(aa[0],""),"_2_a2")],0,[ha.image_src],0,[ha.name],0)(0,0,0,0);}else 

return null;}}else 



return null;}else 


return null;}



var t=[function(z){

return [c('bs_js_primitive').null_undefined_to_opt(z.className),
c('bs_js_primitive').null_undefined_to_opt(z.isHidden),
c('bs_js_primitive').null_undefined_to_opt(z.lastMessage),
z.participants,
z.readReceipts,
z.thread,
z.viewer];}],



u=
[k,
l,
m,
n,
o,
p,
q,
r,
c('utilsRe').$pipe$unknown,
s,
t],


v=c('reactRe').CreateComponent
([r,
p,
q,
k,
n,
l,
m,
o,
t,
s]),


w=v[1];

function x(z,aa,ba,ca,da,ea,fa){
return c('bs_curry')._1(w,
[z,
aa,
ba,
ca,
da,
ea,
fa]);}



var y=v[0];

g.shouldRender=i;
g.MessengerThreadlistRowSeenHead=u;
g.comp=y;
g.wrapProps=w;
g.createElement=x;}),null);

/** js/mercury/clients/messenger/components/threadlist/MessengerThreadlistRow.react.js */







__d('MessengerThreadlistRow.react',['cx','fbt','ix','FBRTCCore','Image.react','immutable','ImmutableObject','Link.react','MercuryBlockedParticipants','MercuryConfig','MercuryIDs','MercuryMessageInfo','MercuryThreadSnippet.react','MercuryThreadTimestamp.react','MercuryThreadTitle.react','MercuryTimestamp','MessengerAdminGroupUtils','MessengerButton.react','MessengerPresenceStatusUtils','messengerThreadImageReact','messengerThreadlistRowActionsReact','messengerThreadlistRowSeenHeadReact','messengerURIUtilsRe','MNAdsMessageUtils','React','ReactDOM','RTCConfig','FBRTCLogger','UserAgent','getPageIDFromThreadID','joinClasses','messengerRTLClasses'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,






m=c('MercuryBlockedParticipants').get(),










n=c('messengerThreadImageReact').comp,
o=c('messengerThreadlistRowActionsReact').comp,
p=c('messengerThreadlistRowSeenHeadReact').comp,





q=c('FBRTCLogger').Trigger,









r=c('React').PropTypes,

s=50,



t=j("86913"),
u=j("86914");k=babelHelpers.inherits


(v,c('React').PureComponent);l=k&&k.prototype;function v(){var w,x;for(var y=arguments.length,z=Array(y),aa=0;aa<y;aa++)z[aa]=arguments[aa];return x=(w=l.constructor).call.apply(w,[this].concat(z)),this.





















































state=
{actionsOpen:false},this.


$MessengerThreadlistRow_dragState=0,this.
$MessengerThreadlistRow_dragTimeout=null,this.






























































































































































































































































































$MessengerThreadlistRow_handleFocus=function(ba){
ba.preventDefault();
this.props.onFocus(this.props.thread.thread_id);}.
bind(this),this.

$MessengerThreadlistRow_handleDragEnter=function(ba){
this.$MessengerThreadlistRow_dragState++;
if(this.$MessengerThreadlistRow_dragTimeout)
return;

this.$MessengerThreadlistRow_dragTimeout=setTimeout(function(){
this.props.onSelect&&this.props.onSelect();
this.$MessengerThreadlistRow_dragState=0;
this.$MessengerThreadlistRow_dragTimeout=null;}.
bind(this),1000);}.
bind(this),this.

$MessengerThreadlistRow_handleDragLeave=function(ba){
this.$MessengerThreadlistRow_dragState--;
if(this.$MessengerThreadlistRow_dragState===0){
clearTimeout(this.$MessengerThreadlistRow_dragTimeout);
this.$MessengerThreadlistRow_dragTimeout=null;}}.

bind(this),this.

$MessengerThreadlistRow_handleClick=function(ba){
if(this.props.logClickHandler){
var ca=this.props.thread.is_canonical?
c('MercuryIDs').getUserIDFromThreadID(this.props.thread.thread_id)||'0':
this.props.thread.thread_fbid;
this.props.logClickHandler&&this.props.logClickHandler(ca);}

this.$MessengerThreadlistRow_unhideHref();
this.props.onSelect&&this.props.onSelect();
ba.preventDefault();
this.$MessengerThreadlistRow_hideHref();}.
bind(this),this.

$MessengerThreadlistRow_handleActionsToggle=function(ba){
this.setState({actionsOpen:ba});}.
bind(this),this.

$MessengerThreadlistRow_handleJoinCall=function(ba){
ba.preventDefault();
ba.stopPropagation();var ca=

this.props.thread,da=ca.rtc_call_data,ea=ca.thread_fbid;
c('FBRTCCore').startGroupCall
({conferenceName:'GROUP:'+ea,

hasVideo:true,
serverInfoData:da.server_info_data,
trigger:q.MULTIWAY_THREAD_LIST_JOIN_CALL_BUTTON});}.

bind(this),this.





$MessengerThreadlistRow_hideHref=function(){
var ba=c('ReactDOM').findDOMNode(this.refs.link);

if(ba.href){

ba.setAttribute('data-href',ba.href);

ba.removeAttribute('href');}}.

bind(this),this.

$MessengerThreadlistRow_unhideHref=function(){
var ba=c('ReactDOM').findDOMNode(this.refs.link),

ca=ba.getAttribute('data-href');
if(ca){

ba.setAttribute('href',ca);

ba.removeAttribute('data-href');}}.

bind(this),x;}v.prototype.componentDidMount=function(){this.$MessengerThreadlistRow_hideHref();};v.prototype.componentDidUpdate=function(w){if(this.props.isFocused)if(!w.isFocused){if(this.props.isActionsFocused){c('ReactDOM').findDOMNode(this.refs.actions.refs.button).focus();}else c('ReactDOM').findDOMNode(this.refs.link).focus();}else if(!w.isActionsFocused&&this.props.isActionsFocused){c('ReactDOM').findDOMNode(this.refs.actions.refs.button).focus();}else if(w.isActionsFocused&&!this.props.isActionsFocused)c('ReactDOM').findDOMNode(this.refs.link).focus();};v.prototype.render=function(){var w=this.props,x=w.isActive,y=w.isActionsFocused,z=w.isTabbable,aa=w.participants,ba=w.thread,ca=w.viewer,da=ba.unread_count>0,ea=c('messengerURIUtilsRe').getURIForThreadID(ba.thread_id);return c('React').createElement('li',{'aria-live':da?'polite':null,'aria-relevant':x||da?'additions text':null,onFocus:this.$MessengerThreadlistRow_handleFocus,className:"_5l-3"+(' '+"_1ht1")+(this.props.isActive?' '+"_1ht2":'')+(da?' '+"_1ht3":'')+(this.state.actionsOpen?' '+"_13aa":'')+(this.props.isMuted?' '+"_569x":'')+(this.props.isFocused?' '+"_23_m":'')+(da&&c('UserAgent').isBrowser('Chrome')&&c('UserAgent').isPlatform('Mac')?' '+"_5fx8":''),onDragEnter:x?null:this.$MessengerThreadlistRow_handleDragEnter,onDragLeave:x?null:this.$MessengerThreadlistRow_handleDragLeave,role:'row',ref:function(fa){return fa&&this.props.registerThreadRefs&&this.props.registerThreadRefs(fa);}.bind(this)},c('React').createElement('div',{className:"_5l-3 _1ht5",id:this.$MessengerThreadlistRow_getRowheaderID(ba.thread_id),role:'rowheader',tabIndex:-1},c('React').createElement(c('Link.react'),{href:ea.toString(),onBlur:this.$MessengerThreadlistRow_hideHref,onClick:this.$MessengerThreadlistRow_handleClick,onFocus:this.$MessengerThreadlistRow_unhideHref,className:"_1ht5 _2il3 _5l-3",s:'true',ref:'link',role:'link',tabIndex:z&&!y?0:-1},c('React').createElement('div',{className:"_1qt3 _5l-3"},c('React').createElement(n,{participants:aa,size:s,thread:ba,viewer:ca})),c('React').createElement('div',{className:"_1qt4 _5l-m"},c('React').createElement('div',{className:"_1qt5 _5l-3"},c('React').createElement(c('MercuryThreadTitle.react'),{className:"_1ht6",showUnreadCount:false,thread:ba,useShortName:false,viewer:ca}),c('React').createElement('div',null,c('MNAdsMessageUtils').isAdsMessageRequest(ba)?c('MNAdsMessageUtils').renderAdsMessageRequestStatus():this.$MessengerThreadlistRow_renderTimeStamp(ba))),c('React').createElement('div',{className:"_1qt5 _5l-3"},c('React').createElement(c('MercuryThreadSnippet.react'),{className:c('joinClasses')("_1htf",c('messengerRTLClasses')(ba.snippet,true)),participants:aa,shouldRenderYou:true,thread:ba,viewer:ca})),this.$MessengerThreadlistRow_renderJoinCallButton()))),this.$MessengerThreadlistRow_renderActions());};v.prototype.$MessengerThreadlistRow_renderActions=function(){if(this.props.showActions===false)return null;var w=this.props,x=w.isActionsFocused,y=w.isTabbable,z=w.participants,aa=w.thread,ba=w.viewer,ca=c('MessengerPresenceStatusUtils').getStatusFromCanonicalThread(this.props.participants,aa),da=ca&&ca.contact,ea=m.isMessageBlocked(aa),fa=c('MessengerAdminGroupUtils').isJoinableThread(aa),ga=aa.unread_count>0;return c('React').createElement('div',{role:'gridcell'},c('React').createElement('div',{'aria-describedby':this.$MessengerThreadlistRow_getRowheaderID(aa.thread_id),'aria-haspopup':'true','aria-label':i._(["Actions","8432306533c2ea6ef4f3886a6085c9b0"]),className:"_2j6 _5l-3",tabIndex:y&&x?0:-1,role:'button'},c('React').createElement(p,{className:"_5bli",isHidden:this.state.actionsOpen,lastMessage:this.props.lastMessage,participants:z,readReceipts:this.props.readReceipts,thread:aa,viewer:ba}),this.$MessengerThreadlistRow_renderSendingState(),c('React').createElement(o,{className:"_5blh",contact:da,isMessengerRoom:fa,isMuted:this.props.isMuted,isOpen:this.state.actionsOpen,isUnread:ga,isBlocked:ea,onArchive:this.props.onArchive,onDelete:this.props.onDelete,onLeaveGroup:this.props.onLeaveGroup,onMarkRead:this.props.onMarkRead,onMarkSpam:this.props.onMarkSpam,onMarkUnread:this.props.onMarkUnread,onMute:this.props.onMute,onToggle:this.$MessengerThreadlistRow_handleActionsToggle,onUnmute:this.props.onUnmute,onBlock:this.props.onBlock,onUnblock:this.props.onUnblock,showLeaveGroup:this.props.showLeaveGroup,showMute:true,showBlock:aa.is_canonical_user&&aa.other_user_fbid&&ba!==aa.other_user_fbid,showReport:c('getPageIDFromThreadID')(this.props.thread.thread_id)&&c('MercuryConfig').MessengerPlatformReportPage,thread:aa,ref:'actions'}),c('React').createElement('div',{className:"_56ck"})));};v.prototype.$MessengerThreadlistRow_renderSendingState=function(){var w=this.props.lastMessage;if(this.state.actionsOpen||!w)return null;var x=c('MercuryMessageInfo').isSending(w),y=c('MercuryMessageInfo').hasError(w);if(!x&&!y)return null;return c('React').createElement(c('Image.react'),{className:"_wtw"+(x?' '+"_3qh2":''),src:x?u:t});};v.prototype.$MessengerThreadlistRow_renderTimeStamp=function(w){return c('React').createElement(c('MercuryThreadTimestamp.react'),{className:"_1ht7",time:w.timestamp,title:c('MercuryTimestamp').getAbsoluteTimestamp(w.timestamp),text:c('MercuryTimestamp').getRelativeTimestamp(w.timestamp)});};v.prototype.$MessengerThreadlistRow_renderJoinCallButton=function(){if(!c('RTCConfig').RtcConferencingGK||!this.props.thread.rtc_call_data||this.props.thread.rtc_call_data.call_state==='NO_ONGOING_CALL')return null;return c('React').createElement(c('MessengerButton.react'),{className:"_4ry5",label:i._(["Join Call","9c65e666c48e17aa35c842f7e7ef9407"]),onClick:this.$MessengerThreadlistRow_handleJoinCall,type:'primary'});};v.prototype.$MessengerThreadlistRow_getRowheaderID=function(w){return 'row_header_id_'+w;};v.propTypes={isActive:r.bool.isRequired,isActionsFocused:r.bool,isFocused:r.bool,isMuted:r.bool.isRequired,lastMessage:r.instanceOf(c('ImmutableObject')),logClickHandler:r.func,onArchive:r.func.isRequired,onDelete:r.func.isRequired,onMarkRead:r.func.isRequired,onMarkSpam:r.func.isRequired,onMarkUnread:r.func.isRequired,onMute:r.func.isRequired,onSelect:r.func.isRequired,onUnmute:r.func.isRequired,onBlock:r.func.isRequired,onUnblock:r.func.isRequired,participants:r.instanceOf(c('immutable').Map).isRequired,readReceipts:r.instanceOf(c('immutable').OrderedMap).isRequired,registerThreadRefs:r.func,thread:r.instanceOf(c('ImmutableObject')).isRequired,viewer:r.string.isRequired};


f.exports=v;}),null);

/** js/mercury/clients/shared/components/MercuryThreadlistRowContainer.react.js */





__d('MercuryThreadlistRowContainer.react',['immutable','ImmutableObject','MercuryParticipants','React','StoreAndPropBasedStateMixin','shallowEqual'],(function a(b,c,d,e,f,g){

'use strict';









var h=c('React').PropTypes,



i=c('React').createClass({displayName:'MercuryThreadlistRowContainer',
mixins:[c('StoreAndPropBasedStateMixin')(c('MercuryParticipants'))],

propTypes:
{ChildClass:h.func.isRequired,
thread:h.instanceOf(c('ImmutableObject')).isRequired,
viewer:h.string.isRequired},


statics:
{calculateState:function j(k){

return {participants:c('immutable').Map
(c('immutable').Seq(k.thread.participants).map(function(l){
return [l,
c('MercuryParticipants').getOrFetch(l)];}))};}},






shouldComponentUpdate:function j(k,l){



return (!c('shallowEqual')(k,this.props)||
!c('immutable').is(l.participants,this.state.participants));},



render:function j(){var k=
this.props,l=k.ChildClass,m=babelHelpers.objectWithoutProperties(k,['ChildClass']);

return (c('React').createElement(l,babelHelpers['extends']({},
m,
{participants:this.state.participants})));}});





f.exports=i;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerConfirmLeaveGroupDialogReact.js */





__d('messengerConfirmLeaveGroupDialogReact',['bs_curry','reactRe','bs_js_boolean','messengerDialogsRe','messengerDialogReact','MessengerAdminGroupUtils','messengerDialogBodyReact'],(function a(b,c,d,e,f,g){

'use strict';









var h=c('reactRe').Component[9],

i=h[0],

j=h[1],

k=h[2],

l=h[3],

m=h[4],

n=h[5],

o=h[6],

p="MessengerConfirmLeaveGroupDialogReactReact";

function q(z,aa){
c('bs_curry')._1(z[1][1],0);
c('messengerDialogsRe').removeDialog(0);
return 0;}


function r(z){
if(z){
return c('messengerDialogsRe').removeDialog(0);}else 

return 0;}



function s(z){
var aa=z[1],
ba=c('bs_js_boolean').to_js_boolean(aa[0]),
ca=c('MessengerAdminGroupUtils').getLeaveGroupBodyText(ba,aa[2]),
da=c('MessengerAdminGroupUtils').getLeaveGroupButtonText(ba,aa[2]),
ea=c('MessengerAdminGroupUtils').getLeaveGroupTitleText(ba,aa[2]);
return c('bs_curry').app(c('messengerDialogReact').Dialog[0],
[0,
r,
0,
0,
0,
0,
0,

[c('bs_curry')._6(c('messengerDialogReact').Header[0],0,0,
[ea,
0],
0,0,0),

[c('bs_curry')._3(c('messengerDialogBodyReact').createElement(0,
[ca,
0]),
0,0,0),

[c('bs_curry')._6(c('messengerDialogReact').Footer[0],0,0,
[c('bs_curry')._5(c('messengerDialogReact').CancelButton[0],0,0,0,0,0),

[c('bs_curry').app(c('messengerDialogReact').Button[0],
[0,
[da],
0,
["danger"],
[c('bs_curry')._1(z[2],q)],
[0],
0,
0,
0,
0,
0,
0]),

0]],

0,0,0),
0]]],



0,
0,
0]);}



var t=[function(z){

return [+z.isViewerAdmin,
z.onLeave,
z.thread];}],



u=
[i,
j,
k,
l,
m,
n,
o,
p,
q,
r,
s,
t],


v=c('reactRe').CreateComponent
([p,
n,
o,
i,
l,
j,
k,
m,
t,
s]),


w=v[1];

function x(z,aa,ba){
return c('bs_curry')._1(w,
[z,
aa,
ba]);}



var y=v[0];

g.MessengerConfirmLeaveGroupDialogReact=u;
g.comp=y;
g.wrapProps=w;
g.createElement=x;}),null);

/** js/mercury/clients/messenger/components/threadlist/MessengerThreadlistRowContainer.react.js */






__d('MessengerThreadlistRowContainer.react',['ImmutableObject','MercuryIDs','MercuryLogMessageType','MercuryMessageActions','MercuryMessageObject','MercuryMessages','MercuryRoger','MercuryThreadActions','MercuryThreadInfo','MercuryThreadlistRowContainer.react','MercuryTriodeSourceUtil','MessagingSourceEnum','MessengerActions','messengerDialogsRe','messengerConfirmLeaveGroupDialogReact','MessengerAdminGroupUtils','MessengerThreadlistRow.react','MNPlatformTagsDataManager','ReactComponentWithPureRenderMixin','React','ReactDOM','StoreAndPropBasedStateMixin'],(function a(b,c,d,e,f,g){

'use strict';







var h=c('MercuryRoger').get(),







i=c('messengerConfirmLeaveGroupDialogReact').comp,








j=c('React').PropTypes,

k=c('React').createClass({displayName:'MessengerThreadlistRowContainer',
mixins:[c('ReactComponentWithPureRenderMixin'),

c('StoreAndPropBasedStateMixin')(c('MercuryMessages'),h)],


propTypes:
{isActive:j.bool.isRequired,
isTabbable:j.bool,
showActions:j.bool,
thread:j.instanceOf(c('ImmutableObject')).isRequired,
viewer:j.string.isRequired,
onOverrideSelect:j.func},


statics:
{calculateState:function l(m){
var n=c('MercuryMessages').getForFBID(m.viewer),
o=m.thread.thread_id,
p=n.getThreadMessagesRangeNow(o,0,1)[0];

return {lastMessage:p||null,
readReceipts:h.getSeenTimestamps(o)};}},




componentDidUpdate:function l(m){
if(this.props.isActive&&!m.isActive)

this.props.onScrollIntoView(c('ReactDOM').findDOMNode(this));},



render:function l(){

return (c('React').createElement(c('MercuryThreadlistRowContainer.react'),babelHelpers['extends']({},
this.props,
{ChildClass:c('MessengerThreadlistRow.react'),
isMuted:c('MercuryThreadInfo').isMuted(this.props.thread),
lastMessage:this.state.lastMessage,
onArchive:this._handleArchive,
onDelete:this._handleDelete,
onLeaveGroup:this._handleLeaveGroup,
onMarkRead:this._handleMarkRead,
onMarkSpam:this._handleMarkSpam,
onMarkUnread:this._handleMarkUnread,
onMute:this._handleMute,
onSelect:this._handleSelect,
onUnmute:this._handleUnmute,
onBlock:this._handleBlock,
onUnblock:this._handleUnblock,
readReceipts:this.state.readReceipts,
showActions:this.props.showActions,
showLeaveGroup:
this.props.thread.is_subscribed&&!this.props.thread.is_canonical})));},





_handleArchive:function l(){
var m=this.props.isActive;
this._getThreadActions().archive(this.props.thread.thread_id);
m&&c('MessengerActions').selectThread(null);},


_handleDelete:function l(){
var m=this.props.isActive;
this._getThreadActions()['delete'](this.props.thread.thread_id);
m&&c('MessengerActions').selectThread(null);},


_handleMarkRead:function l(){
this._getThreadActions().markRead(this.props.thread.thread_id);},


_handleMarkSpam:function l(){


var m=this.props.isActive;
this._getThreadActions().markSpam(this.props.thread.thread_id);
m&&c('MessengerActions').selectThread(null);},


_handleMarkUnread:function l(){
this._getThreadActions().markUnread(this.props.thread.thread_id);},


_handleMute:function l(m){
this._getThreadActions().updateMuteSetting
(this.props.thread.thread_id,
m);},



_handleSelect:function l(){
if(this.props.onOverrideSelect){
this.props.onOverrideSelect(this.props.thread);
return;}


c('MessengerActions').selectThread(this.props.thread.thread_id);
var m=
c('MercuryIDs').getUserIDFromThreadID(this.props.thread.thread_id);
c('MNPlatformTagsDataManager').updateThreadTabAfterSelectThread
(c('MessagingSourceEnum').MESSENGER_WEB_SEARCH,
m);},



_handleUnmute:function l(){
this._getThreadActions().unmute(this.props.thread.thread_id);},


_handleLeaveGroup:function l(){var m,n=this;
if(this.props.viewer)(function(){
var o=c('MessengerAdminGroupUtils').isViewerAdmin
(n.props.thread.admin_ids,
n.props.viewer);

c('messengerDialogsRe').showDialog(function(){
return (c('React').createElement(i,
{onLeave:this._onLeaveGroupConfirm,
isViewerAdmin:o,
thread:this.props.thread}));}.bind(n));})();},





_handleBlock:function l(){
this._getThreadActions().blockOnMessengerDotCom
(this.props.thread.thread_id);},



_handleUnblock:function l(){
this._getThreadActions().unblockOnMessengerDotCom
(this.props.thread.thread_id);},



_onLeaveGroupConfirm:function l(){
if(!c('MercuryThreadInfo').isEmptyLocalThread(this.props.thread)){
var m=this._getMessageObject().constructLogMessageObject
(c('MercuryTriodeSourceUtil').getMercuryTriodeSource(),
this.props.thread.thread_id,
c('MercuryLogMessageType').UNSUBSCRIBE,
{removed_participants:
[c('MercuryIDs').getParticipantIDFromUserID(this.props.viewer)]});


this._getMessageActions().send(m);}},



_getThreadActions:function l(){
return c('MercuryThreadActions').getForFBID(this.props.viewer);},


_getMessageActions:function l(){
return c('MercuryMessageActions').getForFBID(this.props.viewer);},


_getMessageObject:function l(){
return c('MercuryMessageObject').getForFBID(this.props.viewer);}});



f.exports=k;}),null);

/** js/mercury/clients/messenger/perf/MessengerPage.js */






__d('MessengerPage',['EventEmitter','EventEmitterWithHolding','EventHolder','keyMirror','performanceAbsoluteNow'],(function a(b,c,d,e,f,g){

'use strict';










var h=
{Events:c('keyMirror')
({APP_MOUNTED:null,
DATA_INITIALIZED:null,
JS_LOADED:null}),





addRetroactiveListener:function j(k,l){
return i.addRetroactiveListener(k,l);},





emit:function j(k){
i.emitAndHold(k,c('performanceAbsoluteNow')());},





removeCurrentListener:function j(){
i.removeCurrentListener();}},



i=new (c('EventEmitterWithHolding'))
(new (c('EventEmitter'))(),
new (c('EventHolder'))());


f.exports=h;}),null);

/** js/p2p/stores/P2PBannerStore.js */






__d('P2PBannerStore',['invariant','EventEmitter','P2PActionConstants','P2PAPI','P2PDispatcher'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=void 0,
l={},
m=false,
n=false;i=babelHelpers.inherits

(o,c('EventEmitter'));j=i&&i.prototype;
function o(){
j.constructor.call(this);
k=c('P2PDispatcher').register(this.onEventDispatched.bind(this));}
o.prototype.

onEventDispatched=function(p){
var q=p.type,
r=p.data;

switch(q){
case c('P2PActionConstants').BANNER_STATES_UPDATED:
this.handleBannerStatesUpdated(r);
this.emit('change');
break;
case c('P2PActionConstants').BANNER_DISMISSED:
this.handleBannerDismissed(r);
this.emit('change');
break;
case c('P2PActionConstants').BANNER_COMPLETED:
this.handleBannerCompleted(r);
this.emit('change');
break;}};

o.prototype.

handleBannerStatesUpdated=function(p){
m=true;
l=p;};
o.prototype.

handleBannerDismissed=function(p){
var q=this.getBannerState(p);
q.hasBeenDismissed=true;};
o.prototype.

shouldShowBanner=function(p){
var q=void 0;





if(!n){
c('P2PAPI').getBannerStates();
n=true;

return false;}


if(!m)
return false;


q=this.getBannerState(p);


return (q.eligible&&
!q.hasBeenDismissed);};

o.prototype.

handleBannerCompleted=function(p){
var q=this.getBannerState(p);
q.eligible=false;};
o.prototype.

getBannerState=function(p){
var q=l[p];

q||h(0,'No state found for banner: %s',p);

return q;};



f.exports=new o();}),null);

/** js/p2p/components/attachment/P2PJewelBanner.react.js */







__d('P2PJewelBanner.react',['cx','fbt','ix','Image.react','Layout.react','P2PButton.react','React','TooltipLink.react','URI','XUIGrayText.react'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,



m=c('Layout.react').FillColumn,
n=c('Layout.react').Column,










o=c('React').PropTypes;k=babelHelpers.inherits

(p,c('React').Component);l=k&&k.prototype;function p(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=l.constructor).call.apply(q,[this].concat(t)),this.







































handleCloseClick=function(v){
v.stopPropagation();

if(this.props.onClose)
this.props.onClose();}.

bind(this),this.

handleClick=function(){
this.execPrimaryClick();}.
bind(this),this.

handlePrimaryClick=function(v){
v.stopPropagation();
this.execPrimaryClick();}.
bind(this),this.

execPrimaryClick=function(){
if(this.props.primaryActionConfig.uri)
new (c('URI'))(this.props.primaryActionConfig.uri).go();

this.props.primaryActionConfig.onClick&&
this.props.primaryActionConfig.onClick();}.
bind(this),this.

handleSecondaryActionClick=function(v){
v.stopPropagation();
this.props.secondaryActionConfig&&
this.props.secondaryActionConfig.onClick&&
this.props.secondaryActionConfig.onClick();}.
bind(this),this.

renderCloseButton=function(){

return (c('React').createElement(c('TooltipLink.react'),
{alignH:'center',
className:"_47d8",
href:'#',
onClick:this.handleCloseClick,
position:'above',
tooltip:i._(["Dismiss","341c090985ce353854c7de009145284b"])},
c('React').createElement(c('Image.react'),
{className:"_47dg",
height:7,
src:j("94375"),
width:7})));}.



bind(this),this.

renderActions=function(){
var v=this.props.primaryActionConfig,
w=void 0,
x=this.props.secondaryActionConfig;

if(x)
w=
c('React').createElement(c('P2PButton.react'),
{className:"_5d0t",
href:'#',
label:x.text,
onClick:this.handleSecondaryActionClick,
size:'large',
target:'_blank',
type:'primary'});




return (c('React').createElement('div',null,
w,
c('React').createElement(c('P2PButton.react'),
{className:"_5d0t",
href:v.uri||'#',
label:v.text,
onClick:this.handlePrimaryClick,
size:'large',
target:'_blank',
type:'primary',
use:'confirm'})));}.



bind(this),r;}p.prototype.

render=function(){
var q=void 0;

if(this.props.isDismissable)
q=this.renderCloseButton();



return (c('React').createElement('div',
{className:"_5d0n",
onClick:this.handleClick,
role:'presentation'},
q,
c('React').createElement(c('Layout.react'),null,
c('React').createElement(n,
{className:"_400i"},
c('React').createElement('div',{className:"_400j"},
c('React').createElement(c('Image.react'),
{className:"_5d0q",
height:50,
src:j("94376"),
width:50}))),



c('React').createElement(m,{className:"_47di"},
c('React').createElement('div',{className:"_400j"},
c('React').createElement(c('XUIGrayText.react'),
{display:'block',
shade:'dark',
weight:'bold'},
this.props.titleText),

c('React').createElement(c('XUIGrayText.react'),
{display:'block',
shade:'light'},
this.props.bodyText))),



c('React').createElement(n,
{className:"_400k"},
c('React').createElement('div',{className:"_400j"},
this.renderActions())))));};





p.propTypes={bodyText:o.node,isDismissable:o.bool,onClose:o.func,primaryActionConfig:o.shape({onClick:o.func,text:o.node.isRequired,uri:o.oneOfType([o.string,o.object])}).isRequired,secondaryActionConfig:o.shape({onClick:o.func.isRequired,text:o.node.isRequired}),titleText:o.node.isRequired};p.defaultProps={isDismissable:false};


f.exports=p;}),null);

/** js/p2p/components/attachment/P2PPendingPaymentRequestJewelBanner.react.js */







__d('P2PPendingPaymentRequestJewelBanner.react',['fbt','P2PJewelBanner.react','P2PPaymentRequest','P2PPaymentRequestActionHelper','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.






handleDeclineClick=function(){
c('P2PPaymentRequestActionHelper').initDeclinePaymentRequestFlow
(this.props.paymentRequest);}.

bind(this),this.

handlePayClick=function(){
c('P2PPaymentRequestActionHelper').initPayForPaymentRequestFlow
(this.props.paymentRequest,
'banner');}.

bind(this),this.

renderBodyText=function(){
var r=this.props.paymentRequest,
s=r.memoText;

if(!s)
return null;


return h._(["For {What the user paid for}","794f57cb2058d1713350966cc74cfb28"],[h.param


('What the user paid for',
s)]);}.



bind(this),n;}l.prototype.

render=function(){
var m=this.props.paymentRequest;



return (c('React').createElement(c('P2PJewelBanner.react'),
{bodyText:this.renderBodyText(),
primaryActionConfig:
{onClick:this.handlePayClick,
text:h._(["Pay","4295d6ada8771ba20864b9778b5910b7"])},

secondaryActionConfig:
{onClick:this.handleDeclineClick,
text:h._(["Decline","0c7d2fc5eb37b569a56c0efa76eeefed"])},

titleText:h._(["{requester_name} requested {amount}","b9632c29f0a91113bb8fb5a064380ec7"],[h.param

('requester_name',
m.requester.name),h.param


('amount',
m.amountWithSymbol)])}));};





l.propTypes={paymentRequest:k.instanceOf(c('P2PPaymentRequest')).isRequired};


f.exports=l;}),null);

/** js/p2p/components/attachment/P2PPendingPushFailJewelBanner.react.js */







__d('P2PPendingPushFailJewelBanner.react',['fbt','P2PJewelBanner.react','P2PLinkConstants','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.






getActionText=function(){
return h._(["Learn More","4cdd3d52b4ede74754823c6bed4063c6"]);},



this.

getBodyText=function(){
var r=this.props.transfer;
return h._(["{currency}{amount} from {sender_name} couldn't be deposited using your debit card.","c63effbcb4bf33fe39b39eb272b19355"],[h.param


('currency',
r.currency),h.param

('amount',
r.amount),h.param


('sender_name',
r.sender.name)]);}.




bind(this),n;}l.prototype.

render=function(){

return (c('React').createElement(c('P2PJewelBanner.react'),
{bodyText:this.getBodyText(),
primaryActionConfig:
{text:this.getActionText(),
uri:c('P2PLinkConstants').helpTransferPushFailURI},

titleText:h._(["Update Your Card","0ddd8eeb6d231f997b321241529d4e14"])}));};







l.propTypes={transfer:k.object.isRequired};


f.exports=l;}),null);

/** js/p2p/components/attachment/P2PTimeBasedAcceptMessage.react.js */







__d('P2PTimeBasedAcceptMessage.react',['fbt','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,





k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.






render=function(){
var m=this.props.transfer,
n=m.creationTime*1000,

o=1000*60*60*24,
p=Date.now(),
q=(p-n)/o,
r=m.expirationTimestamp*1000-p,
s=Math.round(Math.max(r/o,1)),
t=void 0;

if(q<=2){
t=h._(["Add a debit card and it'll go straight to your bank.","7525756ef39312b022cdf04515a293a2"]);}else




if(q<=4){
t=h._(["This money will be sent back in {days left} days. Add a debit card to accept it.","bbfcb29630b984a9ec65ab3e5839e8db"],[h.param



('days left',
s)]);}else



if(q<=5){
t=h._({"day":["You have {days left} day to add a debit card before the money is sent back to {sender_name}.","b1492dbc44bf3bf3bdac780bf4266e30"],"days":["You have {days left} days to add a debit card before the money is sent back to {sender_name}.","387fb0afb928a9bc9f237b51b0dd2496"]},[h.param




('days left',
s),h['enum']



(s===1?'day':'days',
{day:'day',days:'days'}),h.param


('sender_name',
m.sender.name)]);}else 



t=h._(["You have 24 hours to add a debit card before the money is sent back to {sender_name}.","8fe8d6df122b34ca52db657fd37ed05e"],[h.param



('sender_name',
m.sender.name)]);




return c('React').createElement('div',null,t);};
function l(){i.apply(this,arguments);}l.propTypes={transfer:k.object.isRequired};


f.exports=l;}),null);

/** js/p2p/components/attachment/P2PPendingRecipientNUXJewelBanner.react.js */







__d('P2PPendingRecipientNUXJewelBanner.react',['fbt','P2PAcceptMoneyDialog.react','P2PActions','P2PCreditCardStore','P2PJewelBanner.react','P2PTimeBasedAcceptMessage.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';










var i=c('React').PropTypes,

j=c('React').createClass({displayName:'P2PPendingRecipientNUXJewelBanner',
propTypes:
{transfer:i.object.isRequired},


getInitialState:function k(){

return {creditCards:c('P2PCreditCardStore').getAll()};},



creditCardStoreSub:null,

componentDidMount:function k(){
this.creditCardStoreSub=
c('P2PCreditCardStore').addListener('change',this.onCreditCardStoreChange);},


componentWillUnmount:function k(){
if(this.creditCardStoreSub){
this.creditCardStoreSub.remove();
this.creditCardStoreSub=null;}},



onCreditCardStoreChange:function k(){
var l=
{creditCards:c('P2PCreditCardStore').getAll()};


if(this.isMounted())
this.setState(l);},



handleClick:function k(){
this.showAcceptMoneyDialog();},


showAcceptMoneyDialog:function k(){
c('P2PActions').showDialog(c('P2PAcceptMoneyDialog.react'),
{creditCards:this.state.creditCards,
onClose:c('P2PActions').hideDialog,
transfer:this.props.transfer});},



renderTimeBasedMessage:function k(){

return (c('React').createElement(c('P2PTimeBasedAcceptMessage.react'),
{transfer:this.props.transfer}));},




render:function k(){
var l=this.props.transfer;

if(!c('P2PCreditCardStore').isCreditCardsFetchComplete())
return null;



return (c('React').createElement(c('P2PJewelBanner.react'),
{bodyText:this.renderTimeBasedMessage(),
primaryActionConfig:
{onClick:this.handleClick,
text:h._(["Add Card","6ab633d6c86eab3078c686a39a95aa93"])},

titleText:h._(["Accept {currency}{amount} from {sender_name}.","e51579c102f48df19fb90b7443b86bbf"],[h.param


('currency',
l.currency),h.param

('amount',
l.amount),h.param


('sender_name',
l.sender.name)])}));}});








f.exports=j;}),null);

/** js/p2p/components/attachment/P2PPendingRecipientVerificationJewelBanner.react.js */







__d('P2PPendingRecipientVerificationJewelBanner.react',['fbt','P2PJewelBanner.react','P2PTransferParam','P2PVerificationFlowHelper','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.






handleClick=function(){
c('P2PVerificationFlowHelper').startVerificationFlow
(this.props.transfer[c('P2PTransferParam').TRANSFER_ID],
false);}.

bind(this),n;}l.prototype.

render=function(){

return (c('React').createElement(c('P2PJewelBanner.react'),
{bodyText:h._(["To accept the money {sender_name} sent you, please confirm your information.","6d8e86891af6a893c98d11bfafeef496"],[h.param


('sender_name',
this.props.transfer.sender.name)]),




primaryActionConfig:
{onClick:this.handleClick,
text:h._(["Confirm Info","bc38582de49d19a392b5b4942fb7cdad"])},

titleText:h._(["Please Confirm Your Info","b268f52c598256a9b293e19cd61b2afc"])}));};






l.propTypes={transfer:k.object.isRequired};


f.exports=l;}),null);

/** js/p2p/components/attachment/P2PJewelBannerContainer.react.js */







__d('P2PJewelBannerContainer.react',['cx','CurrentUser','P2PBannerStore','P2PPaymentRequestsStore','P2PPendingPaymentRequestJewelBanner.react','P2PPendingPushFailJewelBanner.react','P2PPendingRecipientNUXJewelBanner.react','P2PPendingRecipientVerificationJewelBanner.react','P2PTransferParam','P2PTransferStatus','P2PTransferStore','PureStoreBasedStateMixin','React'],(function a(b,c,d,e,f,g,h){

'use strict';
















var i=c('React').createClass({displayName:'P2PJewelBannerContainer',
mixins:
[c('PureStoreBasedStateMixin')(c('P2PBannerStore'),c('P2PPaymentRequestsStore'),c('P2PTransferStore'))],






statics:
{calculateState:function j(){
var k=c('P2PTransferStore').getNUXTransfer(),
l=c('P2PPaymentRequestsStore').getPendingPaymentRequest();


return {paymentRequest:l,
paymentRequestBannerShown:!!l,
transfer:k,
transferBannerShown:
k&&k.receiver.id==c('CurrentUser').getID()};}},




renderTransferBanner:function j(){
var k=this.state.transfer,
l=k[c('P2PTransferParam').STATUS];

switch(l){
case c('P2PTransferStatus').PENDING_RECIPIENT_NUX:

return (c('React').createElement(c('P2PPendingRecipientNUXJewelBanner.react'),
{transfer:k}));


case c('P2PTransferStatus').PENDING_RECIPIENT_VERIFICATION:

return (c('React').createElement(c('P2PPendingRecipientVerificationJewelBanner.react'),
{transfer:k}));


case c('P2PTransferStatus').PENDING_PUSH_FAIL:

return (c('React').createElement(c('P2PPendingPushFailJewelBanner.react'),
{transfer:k}));}},





renderPaymentRequestBanner:function j(){

return (c('React').createElement(c('P2PPendingPaymentRequestJewelBanner.react'),
{paymentRequest:this.state.paymentRequest}));},




render:function j(){
var k=void 0;

if(this.state.transferBannerShown){
k=this.renderTransferBanner();}else
if(this.state.paymentRequestBannerShown)
k=this.renderPaymentRequestBanner();



return (c('React').createElement('div',{className:"_1xfk"},
k));}});





f.exports=i;}),null);

/** js/mercury/clients/shared/components/MercuryThreadlistContainer.react.js */





__d('MercuryThreadlistContainer.react',['Bootloader','immutable','MercuryAPIArgsSource','MercuryFilters','MercuryThreadlistConstants','MessagingTag','P2PJewelBannerContainer.react','React','SubscriptionsHandler'],(function a(b,c,d,e,f,g){

'use strict';var h,i,











j=c('React').PropTypes,

k='search';h=babelHelpers.inherits

(l,c('React').Component);i=h&&h.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=i.constructor).call.apply(m,[this].concat(p)),this.
















state=
{isLoading:true,
isSearching:false,
unreadMessageRequestThreads:[],
threads:c('immutable').Map()},this.
































































$MercuryThreadlistContainer_renderP2PJewelBannerContainer=function(){

return (c('React').createElement(c('P2PJewelBannerContainer.react'),null));},

this.








$MercuryThreadlistContainer_handleFolderChange=function(r,s){
if(r===c('MessagingTag').INBOX&&
this.props.source!==c('MercuryAPIArgsSource').JEWEL)
this.$MercuryThreadlistContainer_loadMessageRequestThreads();

if(!this.$MercuryThreadlistContainer_hasInitialThreads(r,s)){
this.$MercuryThreadlistContainer_loadThreads
(r,
s,
this.props.threadCount||
c('MercuryThreadlistConstants').JEWEL_THREAD_COUNT+3);}else

if(this.state.isLoading){
this.setState({isLoading:false},function(){
this.$MercuryThreadlistContainer_updateThreads(r,s);}.
bind(this));}else 

this.$MercuryThreadlistContainer_updateThreads(r,s);}.

bind(this),this.

$MercuryThreadlistContainer_loadMessageRequestThreads=function(){
this.$MercuryThreadlistContainer_threadlist.getFilteredThreadlist
(c('MercuryThreadlistConstants').RECENT_THREAD_OFFSET,
c('MercuryThreadlistConstants').MAX_UNREAD_COUNT,
c('MessagingTag').PENDING,
c('MercuryFilters').UNREAD,
this.$MercuryThreadlistContainer_updateUnreadMessageRequestThreads,
true,
this.props.source);}.

bind(this),this.




$MercuryThreadlistContainer_loadMoreThreads=function(){
if(!this.state.isSearching&&
!this.state.isLoading&&
!this.$MercuryThreadlistContainer_threadlist.hasLoadedThreadlist
(this.props.folder,
this.props.filter))

this.$MercuryThreadlistContainer_loadThreads
(this.props.folder,
this.props.filter,
this.$MercuryThreadlistContainer_getThreadCount(this.props.folder)+
c('MercuryThreadlistConstants').JEWEL_MORE_COUNT+1);}.


bind(this),this.








$MercuryThreadlistContainer_loadThreads=function(r,s,t){
if(!this.$MercuryThreadlistContainer_threadlist)
return;

this.$MercuryThreadlistContainer_cancelThreadlistCallback();

this.setState({isLoading:true},function(){
var u=this.$MercuryThreadlistContainer_threadlist.getFilteredThreadlist
(c('MercuryThreadlistConstants').RECENT_THREAD_OFFSET,
t,
r,
s||c('MercuryFilters').ALL,
function(v){return this.setState({isLoading:false});}.bind(this),
true,
this.props.source);

this.$MercuryThreadlistContainer_threadlistSub={subscriberID:u,folder:r,filter:s};}.
bind(this));}.
bind(this),this.










$MercuryThreadlistContainer_updateThreads=function(r,s,t){
if(!this.$MercuryThreadlistContainer_threadlist||!this.$MercuryThreadlistContainer_threads)
return;

this.$MercuryThreadlistContainer_cancelThreadsCallback();

var u=t||
this.$MercuryThreadlistContainer_threadlist.getAvailableThreadlistNow(r,s);
this.$MercuryThreadlistContainer_threadsSub=this.$MercuryThreadlistContainer_threads.getMultiThreadMeta
(u,
function(v){
this.setState
({threads:this.state.threads.set
(r,
u.map(function(w){return v[w];}))});}.


bind(this));}.

bind(this),this.

$MercuryThreadlistContainer_updateUnreadMessageRequestThreads=function(){
if(!this.$MercuryThreadlistContainer_threadlist||!this.$MercuryThreadlistContainer_threads)
return;


var r=this.$MercuryThreadlistContainer_threadlist.getAvailableThreadlistNow
(c('MessagingTag').PENDING,
c('MercuryFilters').UNREAD);

this.$MercuryThreadlistContainer_threads.getMultiThreadMeta(r,function(s){
this.setState
({unreadMessageRequestThreads:
r.map(function(t){return s[t];})});}.

bind(this));}.
bind(this),this.









$MercuryThreadlistContainer_hasInitialThreads=function(r,s){

return !!(this.$MercuryThreadlistContainer_threadlist&&
(this.$MercuryThreadlistContainer_threadlist.getThreadCount(r,s)>=
c('MercuryThreadlistConstants').JEWEL_THREAD_COUNT+3||
this.$MercuryThreadlistContainer_threadlist.hasLoadedThreadlist(r,s)));}.


bind(this),this.







$MercuryThreadlistContainer_getThreadCount=function(r){
var s=this.state.threads.get(r);
return s?s.length:0;}.
bind(this),this.





$MercuryThreadlistContainer_cancelThreadsCallback=function(){
this.$MercuryThreadlistContainer_threads&&
this.$MercuryThreadlistContainer_threadsSub&&
this.$MercuryThreadlistContainer_threads.unsubscribe(this.$MercuryThreadlistContainer_threadsSub);}.
bind(this),this.





$MercuryThreadlistContainer_cancelThreadlistCallback=function(){
this.$MercuryThreadlistContainer_threadlist&&
this.$MercuryThreadlistContainer_threadlistSub&&
this.$MercuryThreadlistContainer_threadlist.unsubscribe
(this.$MercuryThreadlistContainer_threadlistSub.subscriberID,
this.$MercuryThreadlistContainer_threadlistSub.folder,
this.$MercuryThreadlistContainer_threadlistSub.filter);}.

bind(this),this.







$MercuryThreadlistContainer_handleSearchResults=function(r,s){
this.setState
({isLoading:s,
searchThreads:[]},

function(){return this.$MercuryThreadlistContainer_updateThreads(k,c('MercuryFilters').ALL,r);}.bind(this));}.

bind(this),this.







$MercuryThreadlistContainer_handleQuery=function(r){
this.setState({isSearching:!!r});}.
bind(this),n;}l.prototype.componentDidMount=function(){c('Bootloader').loadModules(["MercuryOrderedThreadlist","MercuryThreadInformer","MercuryThreads"],function(m,n,o){this.$MercuryThreadlistContainer_threadlist=m.getForFBID(this.props.viewer);this.$MercuryThreadlistContainer_threads=o.getForFBID(this.props.viewer);this.$MercuryThreadlistContainer_informer=n.getForFBID(this.props.viewer);this.$MercuryThreadlistContainer_subscriptions=new (c('SubscriptionsHandler'))();this.$MercuryThreadlistContainer_subscriptions.addSubscriptions(this.$MercuryThreadlistContainer_informer.subscribe('threadlist-updated',function(p,q){this.$MercuryThreadlistContainer_updateThreads(this.props.folder,this.props.filter);}.bind(this)));this.$MercuryThreadlistContainer_handleFolderChange(this.props.folder,this.props.filter);}.bind(this),'MercuryThreadlistContainer.react');};l.prototype.componentWillReceiveProps=function(m){if(m.folder!==this.props.folder||m.filter!==this.props.filter)this.$MercuryThreadlistContainer_handleFolderChange(m.folder,m.filter);};l.prototype.componentWillUnmount=function(){this.$MercuryThreadlistContainer_cancelThreadsCallback();this.$MercuryThreadlistContainer_cancelThreadlistCallback();this.$MercuryThreadlistContainer_subscriptions&&this.$MercuryThreadlistContainer_subscriptions.release();};l.prototype.render=function(){var m=this.props,n=m.ChildClass,o=m.folder,p=m.filter,q=babelHelpers.objectWithoutProperties(m,['ChildClass','folder','filter']),r=this.state.isSearching?this.state.threads.get(k)||[]:this.state.threads.get(o)||[];return c('React').createElement(n,babelHelpers['extends']({},q,{filter:this.props.filter,folder:o,isLoaded:!!this.$MercuryThreadlistContainer_threadlist&&this.$MercuryThreadlistContainer_threadlist.hasLoadedThreadlist(o,p),isLoading:this.state.isLoading,isSearching:this.state.isSearching,newMessageRequestThreads:this.state.unreadMessageRequestThreads,onLoadMoreRequest:this.$MercuryThreadlistContainer_loadMoreThreads,onRenderThreads:this.props.onRenderThreads,onQuery:this.$MercuryThreadlistContainer_handleQuery,onSearchResults:this.$MercuryThreadlistContainer_handleSearchResults,p2pJewelBannerContainer:this.$MercuryThreadlistContainer_renderP2PJewelBannerContainer(),threads:r}));};l.propTypes={ChildClass:j.func.isRequired,filter:j.string.isRequired,folder:j.string.isRequired,showCount:j.bool,showPresence:j.bool,source:j.string,threadCount:j.number,viewer:j.string.isRequired,onRenderThreads:j.func};l.defaultProps={source:c('MercuryAPIArgsSource').JEWEL};


f.exports=l;}),null);
