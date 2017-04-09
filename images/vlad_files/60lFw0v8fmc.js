if (self.CavalryLogger) { CavalryLogger.start_js(["6qk+I"]); }

/** www/__virtual__/x/XBrowserPushDisabledController.js */



__d("XBrowserPushDisabledController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/notifications\/client\/push\/disabled\/",{});}),

null);

/** www/__virtual__/x/XBrowserPushXOutController.js */



__d("XBrowserPushXOutController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/notifications\/client\/push\/xout\/",{});}),

null);

/** www/__virtual__/x/XServiceWorkerSessionChangeController.js */



__d("XServiceWorkerSessionChangeController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/service_workers\/session\/persist\/",{});}),

null);

/** js/components/Notifications/BrowserPush/BrowserPushSessionChange.react.js */






__d('BrowserPushSessionChange.react',['cx','fbt','ix','AsyncRequest','BanzaiLogger','Image.react','ImageBlock.react','LayerFadeOnHide','React','ReloadPage','XBrowserPushDisabledController','XBrowserPushXOutController','XServiceWorkerSessionChangeController','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react','XUISpinner.react','XUIText.react'],(function a(b,c,d,e,f,g,h,i,j){var k,l,




















m=c('React').PropTypes;k=babelHelpers.inherits





(n,c('React').Component);l=k&&k.prototype;function n(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=l.constructor).call.apply(o,[this].concat(r)),this.










state=
{dialogShown:true,
spin:false},this.


$BrowserPushSessionChange_onToggle=function(t){
if(t)
return;

this.setState({dialogShown:false});

this.$BrowserPushSessionChange_logEvent('session_keep');
var u=c('XServiceWorkerSessionChangeController').getURIBuilder().
getURI();
new (c('AsyncRequest'))().
setURI(u).
setMethod('post').
setData({app_id:this.props.push.appID}).
setAllowCrossPageTransition(true).
setHandler(function(v){
this.props.onHide();}.
bind(this)).
send();}.
bind(this),this.










$BrowserPushSessionChange_doNotPersist=function(){
this.setState({spin:true});

this.$BrowserPushSessionChange_logEvent('session_uninstall');
this.$BrowserPushSessionChange_logEvent('xout');
var t=c('XBrowserPushXOutController').getURIBuilder().getURI(),
u=function(){
this.props.push.unregisterPushAndSW(c('XBrowserPushDisabledController'),c('AsyncRequest')).


done(function(v){
c('ReloadPage').now();});}.

bind(this);
new (c('AsyncRequest'))().
setURI(t).
setMethod('post').
setHandler(u).
setAllowCrossPageTransition(true).
send();}.
bind(this),p;}n.prototype.$BrowserPushSessionChange_logEvent=function(event){'use strict';var o={event:event,appid:this.props.push.appID,surface:'session_change'};c('BanzaiLogger').log('BrowserPushLoggerConfig',o);};n.prototype.

componentDidMount=function(){'use strict';
this.$BrowserPushSessionChange_logEvent('session_change_prompt');};
n.prototype.

render=function(){'use strict';
if(!this.state.dialogShown)
return null;


var o=
j("92724");

return (c('React').createElement(c('XUIDialog.react'),
{shown:true,
behaviors:{LayerFadeOnHide:c('LayerFadeOnHide')},
onToggle:this.$BrowserPushSessionChange_onToggle,
width:445,
key:'dialog'},
c('React').createElement(c('XUIDialogTitle.react'),null,i._(["Desktop Notifications Are On","d6b4644e52a4f688e9972e9e465aad68"])),




c('React').createElement(c('XUIDialogBody.react'),null,
this.state.spin?
c('React').createElement(c('XUISpinner.react'),{size:'large'}):
c('React').createElement(c('ImageBlock.react'),{spacing:'medium'},
c('React').createElement(c('Image.react'),
{src:o,
alt:i._(["Desktop Notifications Are On","132177ae6be1a4e6ab4280c9a72ff5e4"])}),






c('React').createElement('div',null,
c('React').createElement('div',{className:"_3-8h"},
c('React').createElement(c('XUIText.react'),{size:'large'},i._(["When you get a new notification, you'll see it in the corner of your screen.","cddca0f847fdbeca98d8b5e0fdfe2014"]))),








c('React').createElement('div',{className:"_3-8h"},
c('React').createElement(c('XUIText.react'),{size:'small'},i._(["To be sure you get notifications, you'll now stay logged into Facebook on this computer. If you're using a public computer or don't want to stay logged in, click Undo to turn off desktop notifications.","25ee5d3a03f06f0bdc02d42e1e93927c"])))))),














c('React').createElement(c('XUIDialogFooter.react'),null,
c('React').createElement(c('XUIDialogButton.react'),
{action:'button',
label:i._(["Undo","3b65d88fea659b1cf1cf20ce99f247e6"]),




onClick:this.$BrowserPushSessionChange_doNotPersist}),
c('React').createElement(c('XUIDialogOkayButton.react'),{use:'confirm',action:'cancel'}))));};



n.propTypes={onHide:m.func.isRequired,push:m.object.isRequired};


f.exports=n;}),null);

/** js/components/Notifications/BrowserPush/MockBrowserNotification.react.js */






__d('MockBrowserNotification.react',['cx','fbt','ix','DOMContainer.react','Image.react','React','WorkModeConfig','isNode','joinClasses'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l;k=babelHelpers.inherits
























(m,c('React').Component);l=k&&k.prototype;m.prototype.










render=function(){
var n=c('isNode')(this.props.message)?
c('React').createElement(c('DOMContainer.react'),null,this.props.message):
this.props.message;


return (c('React').createElement('section',{className:
c('joinClasses')(this.props.className,"_-cs")},

c('React').createElement('span',{className:"_-ct"}),
c('React').createElement(c('Image.react'),
{className:"_-cu",
draggable:false,
src:this.props.image}),

c('React').createElement('div',{className:"_-cv"},
c('React').createElement('h3',null,c('WorkModeConfig').is_work_user?'Workplace':'Facebook'),
c('React').createElement('p',null,n),
c('React').createElement('cite',null,window.location.hostname))));};



function m(){k.apply(this,arguments);}m.defaultProps={message:i._(["You have new notifications.","1901be96587c744b9ed05948c71b0908"]),image:j("76304")};


f.exports=m;}),null);

/** js/components/Notifications/BrowserPush/NotificationPermissionNotice.react.js */






__d('NotificationPermissionNotice.react',['cx','fbt','Event','Keys','React','XUIAmbientNUX.react'],(function a(b,c,d,e,f,g,h,i){var j,k,









l=[],

m=c('React').PropTypes;j=babelHelpers.inherits

(n,c('React').Component);k=j&&j.prototype;n.prototype.












componentDidMount=function(){'use strict';





l.push(c('Event').listen(window,'mousedown',this.props.onHide));
l.push(c('Event').listen(window,'keydown',function(event){
if(event.keyCode===c('Keys').ESC)
this.props.onHide();}.

bind(this)));};
n.prototype.

componentWillUnmount=function(){'use strict';
while(l.length>0){
var o=l.pop();
o.remove();}};

n.prototype.

renderLayers=function(){'use strict';
var o=this.props.shortText?i._(["Click the lock to give {browser_name} permission to send you desktop notifications.","d0e182c06bb50d3a03189cb4a73d8edb"],[i.param




('browser_name',this.props.browserName)]):i._(["If you change your mind, click the lock to give {browser_name} permission to send you desktop notifications.","7e65c2d6645db394a7a8e8dd41f41d0a"],[i.param






('browser_name',this.props.browserName)]);



return (c('React').createElement(c('XUIAmbientNUX.react'),
{contextRef:function(){return this.refs.noticeAnchor;}.bind(this),
shown:true,
position:'below',
onCloseButtonClick:this.props.onHide,
key:'nux'},
o));};


n.prototype.

render=function(){'use strict';

return (c('React').createElement('span',null,
c('React').createElement('span',
{ref:'noticeAnchor',
className:"_1_i1"}),

this.renderLayers()));};


function n(){'use strict';j.apply(this,arguments);}n.propTypes={onHide:m.func.isRequired,shortText:m.bool,browserName:m.string.isRequired};


f.exports=n;}),null);

/** js/ui/core/ui/layer/spotlight/Spotlight.js */





__d('Spotlight',['csx','cx','Arbiter','ArbiterMixin','DOM','JSXDOM','Layer','LayerAutoFocus','LayerTabIsolation','ModalLayer','Vector','classWithMixins','joinClasses','mixin'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits

















(l,c('classWithMixins')(c('Layer'),c('mixin')(c('ArbiterMixin'))));k=j&&j.prototype;
function l(n,o){'use strict';
k.constructor.call(this,n,o);
this.stageMinSize=new (c('Vector'))(0,0);
this.stagePadding=new (c('Vector'))(0,0);}
l.prototype.

_buildWrapper=function(n,o){'use strict';
var p=c('joinClasses')("_n8"+


(n.wash==='dark'||!n.wash?' '+"_3qx":'')+
(n.wash==='xui'?' '+"_4-hy":''),

n.rootClassName);



return (c('JSXDOM').div({className:p},
c('JSXDOM').div({className:"_n9"},
o)));};



l.prototype.

_getDefaultBehaviors=function(){'use strict';
return k._getDefaultBehaviors.call(this).concat
([m,c('LayerAutoFocus'),c('LayerTabIsolation'),c('ModalLayer')]);};




l.prototype.

getContentRoot=function(){'use strict';
if(!this._content)
this._content=c('DOM').find(this.getRoot(),"div._n3");

return this._content;};
l.prototype.

configure=function(n){'use strict';
if(n.stageMinSize)
this.stageMinSize=n.stageMinSize;

if(n.stagePadding)
this.stagePadding=n.stagePadding;};

l.prototype.

onContentLoaded=function(){'use strict';
this.inform('content-load');};
l.prototype.

updatePermalink=function(n){'use strict';
this.inform('permalinkchange',n);};



Object.assign(l.prototype,
{stageMinSize:null,
stagePadding:null});







function m(n){'use strict';
this._layer=n;}
m.prototype.

enable=function(){'use strict';
this._subscription=this._layer.subscribe
(['show','hide'],
function(n,o){
if(n==='show'){
c('Arbiter').inform('layer_shown',{type:'Spotlight'});}else 

c('Arbiter').inform('layer_hidden',{type:'Spotlight'});});};



m.prototype.

disable=function(){'use strict';
this._subscription.unsubscribe();
this._subscription=null;};



Object.assign(m.prototype,
{_subscription:null});


f.exports=l;}),null);

/** js/components/core/UI/Spotlight/Spotlight.react.js */




__d('Spotlight.react',['LayerAutoFocusReact','LayerHideOnBlur','LayerHideOnEscape','LayerRefocusOnHide','ReactLayer','Spotlight','React'],(function a(b,c,d,e,f,g){







var h=c('React').PropTypes,

i=c('ReactLayer').createClass
({propTypes:
{causalElement:h.instanceOf(HTMLElement),
onHide:h.func,
rootClassName:h.string,
shown:h.bool,
wash:h.oneOf(['light','xui','dark'])},


getDefaultEnabledBehaviors:function j(){

return {hideOnBlur:c('LayerHideOnBlur'),
hideOnEscape:c('LayerHideOnEscape'),
refocusOnHide:c('LayerRefocusOnHide'),
autoFocus:c('LayerAutoFocusReact')};},



createLayer:function j(k){
var l=this.enumerateBehaviors(this.props.behaviors),
m=
{addedBehaviors:l,
rootClassName:this.props.rootClassName,
wash:this.props.wash},

n=new (c('Spotlight'))(m,k);
n.setCausalElement(this.props.causalElement);
n.conditionShow(this.props.shown);
if(this.props.onBeforeHide)
n.subscribe('beforehide',this.props.onBeforeHide);

if(this.props.onHide)
n.subscribe('hide',this.props.onHide);

return n;},


receiveProps:function j(k){
if(this.layer){
this.layer.setCausalElement(k.causalElement);
this.layer.conditionShow(k.shown);}}});




f.exports=i;}),null);

/** js/components/Notifications/BrowserPush/NotificationPermissionRequest.react.js */





__d('NotificationPermissionRequest.react',['cx','Spotlight.react','React'],(function a(b,c,d,e,f,g,h){var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.






render=function(){'use strict';

return (c('React').createElement(c('Spotlight.react'),{shown:true,onHide:this.props.onHide,key:'spotlight'},
c('React').createElement('div',{className:"_n3"})));};


function l(){'use strict';i.apply(this,arguments);}l.propTypes={onHide:k.func.isRequired};


f.exports=l;}),null);

/** js/components/Notifications/BrowserPush/NotificationPermissionRequestWithPreview.react.js */






__d('NotificationPermissionRequestWithPreview.react',['cx','fbt','ix','BrowserPushStrings','Image.react','ImageBlock.react','MockBrowserNotification.react','React','Spotlight.react','XUIAmbientNUX.react','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogFooter.react','XUIDialogTitle.react'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,

























m=function o(p){
var q=void 0;

return (c('React').createElement(c('Spotlight.react'),
{onHide:p.onHide,
shown:p.shown,
wash:'xui'},
c('React').createElement('span',
{ref:function r(s){return q=s;},
className:"_m4w"}),

c('React').createElement('div',{className:"_n3"},
c('React').createElement(c('XUIAmbientNUX.react'),
{contextRef:function r(){return q;},
key:'nux',
shown:p.shown,
onCloseButtonClick:p.onHide,
position:'below'},
c('React').createElement('strong',null,i._(["Almost Done!","23d794f59c31d9cfcc63dd737f4e668e"])),





c('React').createElement('br',null),i._(["Now, click \"Allow\" to finish activating notifications.","2a1388f969b65498c443849f60c0cd6a"])))));};







k=babelHelpers.inherits






(n,c('React').Component);l=k&&k.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=l.constructor).call.apply(o,[this].concat(r)),this.




state=
{acceptPromptShown:false,
dialogShown:true},this.










$NotificationPermissionRequestWithPreview_onToggle=function(t){
this.setState({dialogShown:t});}.
bind(this),this.

$NotificationPermissionRequestWithPreview_onAccept=function(){
this.setState
({acceptPromptShown:true,
dialogShown:false});

this.props.onAccept&&this.props.onAccept(this.$NotificationPermissionRequestWithPreview_onComplete);}.
bind(this),this.

$NotificationPermissionRequestWithPreview_onComplete=function(){
if(this.$NotificationPermissionRequestWithPreview_isMounted)
this.setState
({acceptPromptShown:false,
dialogShown:false});}.


bind(this),this.

$NotificationPermissionRequestWithPreview_onHideAcceptPrompt=function(){
this.setState({acceptPromptShown:false});}.
bind(this),p;}n.prototype.componentWillMount=function(){this.$NotificationPermissionRequestWithPreview_isMounted=true;};n.prototype.componentWillUnmount=function(){this.$NotificationPermissionRequestWithPreview_isMounted=false;};n.prototype.

render=function(){var o=
this.props,p=o.notificationImage,q=o.notificationMessage,
r=c('React').createElement(c('MockBrowserNotification.react'),
{className:"_m4x",
image:p,
message:q});



return (c('React').createElement('div',{className:"_m4y"},
c('React').createElement(m,
{shown:this.state.acceptPromptShown,
onHide:this.$NotificationPermissionRequestWithPreview_onHideAcceptPrompt}),

c('React').createElement(c('XUIDialog.react'),
{layerHideOnBlur:false,
onToggle:this.$NotificationPermissionRequestWithPreview_onToggle,
shown:this.state.dialogShown,
titleID:'notification-permission-title',
width:445},
c('React').createElement(c('XUIDialogTitle.react'),{showCloseButton:false},
c('React').createElement('span',{id:'notification-permission-title'},
c('BrowserPushStrings').turn_on)),


c('React').createElement(c('XUIDialogBody.react'),null,
c('React').createElement(c('ImageBlock.react'),{spacing:'large'},
c('React').createElement(c('Image.react'),
{draggable:false,
src:j("287648")}),

c('React').createElement('div',null,c('BrowserPushStrings').explanation)),

r),

c('React').createElement(c('XUIDialogFooter.react'),null,
c('React').createElement(c('XUIDialogButton.react'),
{action:'cancel',
label:i._(["Not Now","b7eada0a2e34db09b41ce4afb7525159"]),



onClick:this.props.onClose}),

c('React').createElement(c('XUIDialogButton.react'),
{action:'button',
label:i._(["Turn On","58d5c6e0b4dedecd347ad26947f58daa"]),



onClick:this.$NotificationPermissionRequestWithPreview_onAccept,
use:'special'})))));};








f.exports=n;}),null);

/** shared_core/service_workers_shared/BrowserPushCommands.js */




__d('BrowserPushCommands',[],(function a(b,c,d,e,f,g){

var h='browser_push_ack',
i='browser_push_redirect',
j='browser_push_window_visible',

k=
{ACK:h,
REDIRECT:i,
WINDOW_VISIBLE:j};


f.exports=k;}),null);

/** js/service_worker_www/BrowserPushMessageRedirectUtil.js */





__d('BrowserPushMessageRedirectUtil',['Bootloader'],(function a(b,c,d,e,f,g){



var h=function i(j){


var k='(messages)(.*?)(?:(tid=))([^&]*)',
l=j.match(k);
if(!l)
return true;

var m=l.pop();

c('Bootloader').loadModules(["FantaTabActions"],


function(n){

n.openTab(m);},
'BrowserPushMessageRedirectUtil');
return false;};


f.exports=h;}),null);

/** shared/service_worker_window/push/BrowserPushMessageHandler.js */





__d('BrowserPushMessageHandler',['BrowserPushCommands','BrowserPushMessageRedirectUtil','EventListener','isFacebookURI','URISchemes','URI'],(function a(b,c,d,e,f,g){








function h(event){
if(event.data.command&&
event.data.command===c('BrowserPushCommands').REDIRECT){
if(window.onbeforeunload()===undefined){
event.ports[0].postMessage
({command:c('BrowserPushCommands').ACK,
success:true});}else{


event.ports[0].postMessage
({command:c('BrowserPushCommands').ACK,
success:false});

return;}


var j=event.data.uri;
if(/^([^.:/?#]+):/.test(j)&&
!c('URISchemes').isAllowed(/^([^.:/?#]+):/.exec(j)[1])||
!c('isFacebookURI')(new (c('URI'))(j)))
throw new Error('goURI: URI scheme rejected, URI: '+j);






if(c('BrowserPushMessageRedirectUtil')(j))

window.location.href=j;}}





var i=
{registerRedirectHandler:function j(){
c('EventListener').listen(window,'message',function(event){

if(event.origin==='')
h(event);});



if(navigator.serviceWorker&&navigator.serviceWorker.addEventListener)
navigator.serviceWorker.addEventListener('message',function(event){


if(navigator.serviceWorker&&
navigator.serviceWorker.controller&&
event.target&&
event.target.controller&&
event.target.controller===navigator.serviceWorker.controller||

new RegExp
('^'+window.location.protocol+'//'+window.location.host+'$').
test(event.origin))

h(event);});}};






f.exports=i;}),null);

/** shared/service_worker_window/push/BrowserPushVisibilityChanger.js */





__d('BrowserPushVisibilityChanger',['BrowserPushCommands','ClientServiceWorkerMessage','Visibility'],(function a(b,c,d,e,f,g){





function h(){
new (c('ClientServiceWorkerMessage'))
(c('BrowserPushCommands').WINDOW_VISIBLE,
null).
sendViaController();}


var i=
{listenForVisibility:function j(){
if(!c('Visibility').isHidden())
h();

c('Visibility').addListener(c('Visibility').VISIBLE,h);}};



f.exports=i;}),null);

/** shared/service_worker_window/PushRegistration.js */





__d('PushRegistration',['Promise','BrowserPushMessageHandler','BrowserPushVisibilityChanger','Map','ServiceWorkerRegistration'],(function a(b,c,d,e,f,g){











var h=window.Notification,

i=new (c('Map'))();j.








get=function(k,l){'use strict';


if(i.has(l))



return i.get(l);

var m=new j(k,l);
i.set(l,m);
return m;};


function j(k,l){'use strict';
this.$PushRegistration_pushServiceWorkerPath=k;
this.appID=l;
if(!j.$PushRegistration_isRegistering&&!j.$PushRegistration_isRejecting){
j.$PushRegistration_isRegistering=false;
j.$PushRegistration_isRejecting=false;}}

j.prototype.

getPushSubscription=function(){'use strict';
return new (c('Promise'))(function(k,l){
if(!h||h.permission==='denied')
l(new Error('No permission or not supported'));

c('ServiceWorkerRegistration').
getWorkerRegistration(this.$PushRegistration_pushServiceWorkerPath).
then(function(m){
if(!m){
k(null);
return;}

m.pushManager.getSubscription().
then(function(n){
k(n);})[
'catch']
(l);})[
'catch']
(l);}.
bind(this));};
j.prototype.

$PushRegistration_normalizeSubscriptionEndpoint=
function(k){
'use strict';




var l=k.endpoint;
if('subscriptionId' in k&&
!new RegExp('/'+k.subscriptionId+'$').test(l))
l+='/'+k.subscriptionId;

return l;};
j.prototype.

$PushRegistration_sendPushSubscription=
function(k,
l,
m,
n){
'use strict';
var o=this.$PushRegistration_normalizeSubscriptionEndpoint(m),

p=k.getURIBuilder().
getURI(),
q=new l(p);
q.setData
({app_id:this.appID,
push_endpoint:o,
subscription_keys:JSON.stringify(m.toJSON().keys)});

q.setMethod('post');


if(q.setHandler)
q.setHandler(function(r){
if(r.payload&&r.payload.session_change)
n();});



q.send();};
j.prototype.

getSubscription=function(){'use strict';
return new (c('Promise'))(function(k,l){
this.getPushSubscription().
then(function(m){
if(m){
k(this.$PushRegistration_normalizeSubscriptionEndpoint(m));}else 

k(null);}.

bind(this))['catch']
(l);}.
bind(this));};
j.prototype.

maybeRegisterPushAgain=
function(k,
l,
m){
'use strict';
return new (c('Promise'))(function(n,o){
this.getPushSubscription().
then(function(p){
if(p){
this.$PushRegistration_sendPushSubscription
(k,
l,
p,
m);

n(this.$PushRegistration_normalizeSubscriptionEndpoint(p));}else 

n(null);}.

bind(this))['catch']
(function(){
n(null);});}.

bind(this));};
j.prototype.

$PushRegistration_sendDisableInfo=
function(k,
l,
m){
'use strict';
return new (c('Promise'))(function(n,o){
if(j.$PushRegistration_isRejecting&&!m){
o(new Error('sending disable info already'));
return;}


j.$PushRegistration_isRejecting=true;
var p=k.getURIBuilder().
getURI(),
q=new l(p.toString());
q.setData
({appid:this.appID,
from_browser_settings:m});

q.setMethod('post');
if(q.listen){
q.listen('finally',n);
q.listen('fail',function(){
j.$PushRegistration_isRejecting=false;
o();});}else

if(q.setErrorHandler&&q.setHandler){
q.setErrorHandler(function(){
j.$PushRegistration_isRejecting=false;
o();});

q.setHandler(n);}else 

n();

q.send();}.
bind(this));};
j.prototype.

isPushRegistered=
function(k,
l,
m,
n,
o,
p,
q){
'use strict';
c('BrowserPushMessageHandler').registerRedirectHandler();
return new (c('Promise'))(function(r,s){
this.getPushSubscription().
then(function(t){
r
(!!t||
k&&!j.pushPermissionIsPending());



if(t){
if(o){
self.$PushRegistration_sendPushSubscription
(l,
n,
p,
q);}else 


c('BrowserPushVisibilityChanger').listenForVisibility();}else

if(!t&&k)


if(j.pushPermissionIsOn()){



this.registerPush
(l,
n,
p,
q)['catch']
(function(){});}else 



this.$PushRegistration_sendDisableInfo
(m,
n,
false);}.



bind(this))['catch']
(function(){
if(k){
this.$PushRegistration_sendDisableInfo
(m,
n,
false);

s();}

if(q)
c('ServiceWorkerRegistration').unregisterControllingWorker();}.

bind(this));}.
bind(this));};
j.prototype.

$PushRegistration_requestPermissionPromise=function(){'use strict';



return new (c('Promise'))(function(k,l){
h.requestPermission(k);});};

j.prototype.

registerPushAndWaitForEndpoint=
function(k,
l,
m,
n){
'use strict';
return new (c('Promise'))(function(o,p){
this.$PushRegistration_registerPushImpl
(k,
l,
m,
true,
null,
n).

then(function(q){
if(typeof q!=='string'){
p(new Error('registerPushImpl did not return an endpoint'));
return;}

o(q);})[
'catch']
(p);}.
bind(this));};
j.prototype.

registerPush=
function(k,
l,
m,
n){
'use strict';
return this.registerPushWithFinishedCallBack
(k,
l,
m,
null,
n);};

j.prototype.




registerPushWithFinishedCallBack=
function(k,
l,
m,
n,
o){
'use strict';
return new (c('Promise'))(function(p,q){
this.$PushRegistration_registerPushImpl
(k,
l,
m,
false,
n,
o).
then(function(r){
if(typeof r!=='boolean'){
q(new Error('registerPushImpl did not return a boolean'));
return;}

p(r);})[
'catch']
(q);}.
bind(this));};
j.prototype.

$PushRegistration_registerPushImpl=
function(k,
l,
m,
n,
o,
p){
'use strict';
if(j.$PushRegistration_isRegistering)
return new (c('Promise'))(function(q,r){
r(new Error('registering already'));});



j.$PushRegistration_isRegistering=true;
return new (c('Promise'))(function(q,r){
var s=c('ServiceWorkerRegistration').
registerWorkerIfUnregistered(this.$PushRegistration_pushServiceWorkerPath),
t=this.$PushRegistration_requestPermissionPromise();
c('Promise').all([s,t]).
then(function(u){
var v=u[0];
if(!j.pushPermissionIsOn()){
if(p)
v.unregister();


throw new Error('Push permission was denied');}

if(!n)
q(true);

v.pushManager.subscribe
({userVisibleOnly:true}).
then(function(w){
if(n)
q(this.$PushRegistration_normalizeSubscriptionEndpoint(w));

this.$PushRegistration_sendPushSubscription
(k,
l,
w,
m);

if(o)
o();


c('BrowserPushVisibilityChanger').listenForVisibility();}.
bind(this))['catch']
(function(w){
j.$PushRegistration_isRegistering=false;
if(p)
v.unregister();

r(w);});}.

bind(this))['catch']
(function(u){
j.$PushRegistration_isRegistering=false;
r(u);});}.

bind(this));};
j.prototype.

unregisterPushAndSW=
function(k,
l){
'use strict';
return new (c('Promise'))(function(m,n){
this.$PushRegistration_sendDisableInfo(k,l,true).
then(function(){
c('ServiceWorkerRegistration').unregisterControllingWorker().done(m);})[
'catch']
(n);}.
bind(this));};
j.prototype.

unregisterPushOnly=
function(k,
l){
'use strict';
return new (c('Promise'))(function(m,n){
this.getPushSubscription().then(function(o){
if(o){
o.unsubscribe().
then
(this.$PushRegistration_sendDisableInfo(k,l,true)).

then(function(){m(true);})['catch']
(n);}else 

n();}.

bind(this))['catch'](n);}.
bind(this));};
j.

pushPermissionIsPending=function(){'use strict';
return h&&h.permission==='default';};
j.

pushPermissionIsOn=function(){'use strict';
return h&&h.permission==='granted';};



f.exports=j;}),null);

/** www/__virtual__/x/XPushRegisterServiceWorkerController.js */



__d("XPushRegisterServiceWorkerController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/push\/register\/service_worker\/",{});}),

null);

/** js/notifications/BrowserPushDirectPromptInstaller.js */





__d('BrowserPushDirectPromptInstaller',['Arbiter','AsyncRequest','BanzaiLogger','BrowserPushSessionChange.react','DOM','NotificationPermissionNotice.react','NotificationPermissionRequest.react','NotificationPermissionRequestWithPreview.react','PushRegistration','QE2Logger','React','ReactDOM','XBrowserPushDisabledController','XBrowserPushXOutController','XPushRegisterServiceWorkerController','emptyFunction'],(function a(b,c,d,e,f,g){



















var h='www_browser_push_notifications',

i=false;

function j(event,p){
var q=
{event:event,
appid:p,
surface:'prompt'};

c('BanzaiLogger').log('BrowserPushLoggerConfig',q);}


function k(p){
var q=c('XBrowserPushXOutController').getURIBuilder().getURI();
new (c('AsyncRequest'))().setURI(q).setMethod('post').send();
j('xout',p);}


function l(p){
if(!i){
i=true;
c('ReactDOM').unmountComponentAtNode(p);}}



function m(p,q){
var r=c('DOM').insertBefore(p,c('DOM').create('span')),
s=r.pop();
c('ReactDOM').render
(c('React').createElement(c('BrowserPushSessionChange.react'),
{onHide:function t(){
c('ReactDOM').unmountComponentAtNode(p);},

push:q}),

s);}



function n
(p,
q,
r,
s,
t){

var u=c('PushRegistration').get(p,q);
j('turn_on',q);
return u.
registerPushWithFinishedCallBack(c('XPushRegisterServiceWorkerController'),c('AsyncRequest'),


function(){
m(r,u);},

function(){
c('Arbiter').inform('BrowserPushInstall/installed');},

t).

then(function(){
l(r);
j('install',q);})[
'catch']
(function(v){
l(r);
if(window.Notification&&window.Notification.permission==='denied'){
c('ReactDOM').render
(c('React').createElement(c('NotificationPermissionNotice.react'),
{onHide:function w(){


c('ReactDOM').unmountComponentAtNode(r);},

browserName:s}),

r);

j('deny',q);}else 



j('install_ignore',q);

k(q);});}



var o=

{requestThenInstallPush:function p
(q,
r,
s,
t,
u,
v,
w,
x,
y,
z){

var aa=c('PushRegistration').get(q,r);
aa.
isPushRegistered
(t,c('XPushRegisterServiceWorkerController'),c('XBrowserPushDisabledController'),c('AsyncRequest'),



!!v,
function(){
m(s,aa);},

x).

then(function(ba){
if(ba||u)
return;

if(c('PushRegistration').pushPermissionIsPending()){
j('twostep_request',r);
c('QE2Logger').logExposureForUser(h);
c('ReactDOM').render
(c('React').createElement(c('NotificationPermissionRequestWithPreview.react'),
{notificationImage:z||undefined,
notificationMessage:y||undefined,
onAccept:function ca(da){
j('twostep_accept',r);
n
(q,
r,
s,
w,
x).

then(da,da).
done();},

onClose:function ca(){
j('twostep_notnow',r);
k(r);
l(s);}}),


s);}})[


'catch'](c('emptyFunction'));},



installPush:function p
(q,
r,
s,
t,
u,
v,
w,
x){

var y=c('PushRegistration').get(q,r);
y.
isPushRegistered
(t,c('XPushRegisterServiceWorkerController'),c('XBrowserPushDisabledController'),c('AsyncRequest'),



!!v,
function(){
m(s,y);},

x).

then(function(z){
if(z||u)
return;

if(c('PushRegistration').pushPermissionIsPending()){
c('QE2Logger').logExposureForUser(h);
c('ReactDOM').render
(c('React').createElement(c('NotificationPermissionRequest.react'),
{onHide:function aa(){
l(s);}}),


s);}


n
(q,
r,
s,
w,
x);})[

'catch'](c('emptyFunction'));}};




f.exports=o;}),null);

/** www/__virtual__/x/XBrowserPushMuteController.js */



__d("XBrowserPushMuteController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/notifications\/client\/push\/mute\/",{push_endpoint:{type:"String",required:true},appid:{type:"Int",required:true},is_settings_page:{type:"Bool",defaultValue:false},__asyncDialog:{type:"Int"}});}),

null);

/** js/notifications/BrowserPushMuteOptions.js */






__d('BrowserPushMuteOptions',['fbt','AsyncRequest','PushRegistration','React','ReactDOM','XBrowserPushMuteController'],(function a(b,c,d,e,f,g,h){









function i
(k,
l,
m){

var n=c('PushRegistration').get(l,m);

n.getPushSubscription().
done(function(o){
if(o){
var p=c('XBrowserPushMuteController').
getURIBuilder().
setString('push_endpoint',o.endpoint).
setInt('appid',m).
getURI();
new (c('AsyncRequest'))().
setURI(p).
setRelativeTo(k).
send();}});}




var j=

{showMuteOptions:function k
(l,
m,
n){


if(!c('PushRegistration').pushPermissionIsOn())
return;

c('ReactDOM').render
(c('React').createElement('a',{href:'#',onClick:function o(){
i(l,m,n);}},
h._(["Mute","27f5531d0af802d1fff94befe140b38f"])),




l);}};




f.exports=j;}),null);
