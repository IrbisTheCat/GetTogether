if (self.CavalryLogger) { CavalryLogger.start_js(["dtGBP"]); }

/** js/asyncloader/AsyncLoader.js */








__d('AsyncLoader',['AsyncRequest','BaseAsyncLoader'],(function a(b,c,d,e,f,g){




function h(i,j){
this._endpoint=i;
this._type=j;}


Object.assign(h.prototype,c('BaseAsyncLoader').prototype);

h.prototype.send=
function(i,j,k,l,m){
new (c('AsyncRequest'))(i).
setData({ids:j}).
setHandler(l).
setErrorHandler(m).
setAllowCrossPageTransition(true).
setMethod('GET').
setReadOnly(true).
send();};


f.exports=h;}),null);

/** js/chat/ChatHovercard.js */






__d('ChatHovercard',['Arbiter','AsyncLoader','Bootloader','JSLogger','debounce','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){









var h=5,
i=new (c('AsyncLoader'))('/ajax/chat/hovercard/sidebar.php','hover'),

j=c('JSLogger').create('chat_hovercard');


c('Arbiter').subscribe('Hovercard/dirty',i.reset.bind(i));

function k(o,p){
if(!o)
return;

i.get(o,function(q){
c('setTimeoutAcrossTransitions')(function(){
if(!q){
j.error('fetch_failure',{id:o});
return;}


c('Bootloader').loadModules(["Hovercard"],function(r){
var s=r.getDialog(q);
if(!s){
j.error('no_hovercard',{id:o,endpoint:q});
return;}


if(o==p.getActiveID())
p.showHovercard(o,s);},

'ChatHovercard');},
0);});}







function l(o,p){
var q=[];
function r(u){
if(u>=0&&u<o.length)
q.push(o[u]);}



var s=o.indexOf(p);
if(s>-1){
r(s);
for(var t=1;t<h;t++){
r(s+t);
r(s-t);}}



return q.filter(function(u){return u;});}


function m(o,p){
var q=p.getActiveID();
if(q){
var r=o.getShowingUsers(),
s=l(r,q);


i.get(s,function(){});}}



function n(o){
var p=o.getHoverController();
p.registerDefault(k);
p.subscribe
('hover',
c('debounce')
(m.bind(null,o,p),
100));}




f.exports=n;}),null);

/** js/chat/ChatOrderedListHover.js */








__d('ChatOrderedListHover',['csx','ArbiterMixin','CSS','ErrorUtils','Event','LayerHideOnBlur','Parent','mixin','setTimeoutAcrossTransitions','shield'],(function a(b,c,d,e,f,g,h){var i,j;













function k(n){
c('CSS').addClass(n,'fetching');}


function l(n){
c('CSS').removeClass(n,'fetching');}
i=babelHelpers.inherits

(m,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;



function m(n){'use strict';
j.constructor.call(this);
this._orderedList=n;
this._root=n.getRoot();

c('Event').listen(this._root,'mouseover',this._mouseOver.bind(this));
c('Event').listen(this._root,'mouseleave',this._mouseLeave.bind(this));
n.subscribe('click',c('shield')(this._hide,this));}
m.prototype.

_mouseOver=function(event){'use strict';
if(this._paused)
return;


var n=event.getTarget(),
o=c('Parent').bySelector(n,"._42fz")||
c('Parent').bySelector(n,"._5a58");
o&&this._setActiveItem(o);};
m.prototype.

_mouseLeave=function(event){'use strict';
this._setActiveItem(null);};
m.prototype.

_clearTimeouts=function(){'use strict';
this._showTimeout&&clearTimeout(this._showTimeout);
this._showTimeout=null;

this._hideTimeout&&clearTimeout(this._hideTimeout);
this._hideTimeout=null;};
m.prototype.




_hide=function(){'use strict';
if(this._showingDialog){
this._showingDialog.hide();

this._showingDialog=null;
this._showingID=null;}};

m.prototype.




_show=function(){'use strict';
var n=this.getActiveID(),
o=false;
if(this._defaultHandler){
o=true;
c('ErrorUtils').applyWithGuard(this._defaultHandler,{},[n,this]);}


if(o&&this._showingID!=this.getActiveID())
k(this._activeItem);};

m.prototype.




_setActiveItem=function(n){'use strict';
if(n!=this._activeItem){
this._clearTimeouts();

this._activeItem&&l(this._activeItem);

if(n){
this._activeItem=n;

var o=this._showingDialog?0:600;
this._showTimeout=c('setTimeoutAcrossTransitions')
(function(){return this._show();}.bind(this),
o);


this.inform('hover');}else{

this._activeItem=null;
this._hideTimeout=c('setTimeoutAcrossTransitions')(function(){return this._hide();}.bind(this),10);
this.inform('leave');}}};


m.prototype.




registerDefault=function(n){'use strict';
this._defaultHandler=n;};
m.prototype.






getActiveID=function(){'use strict';
var n=this._activeItem&&
this._orderedList.getUserForNode(this._activeItem);
return n||null;};
m.prototype.







showHovercard=function(n,o){'use strict';
if(n==this.getActiveID()&&n!=this._showingID){
this._clearTimeouts();

l(this._activeItem);

this._hide();

this._showingDialog=o;
this._showingID=n;


var p=o.subscribe
('mouseenter',
this._setActiveItem.bind(this,this._activeItem)),

q=o.subscribe
('mouseleave',
function(){

p.unsubscribe();
this._setActiveItem(null);}.
bind(this)),



r=o.subscribe
('hide',
function(){
this.inform('hovercard_hide');
p.unsubscribe();
q.unsubscribe();
r.unsubscribe();}.
bind(this));


o.
enableBehavior(c('LayerHideOnBlur')).
setContext(this._activeItem).
setPosition('left').
show();
this.inform('hovercard_show');}};




Object.assign(m.prototype,
{_root:null,


_activeItem:null,

_hideTimeout:null,
_showTimeout:null,


_showingDialog:null,

_showingID:null,
_defaultHandler:null});


f.exports=m;}),null);

/** js/mercury/clients/sidebar/ChatSidebarConstants.js */






__d('ChatSidebarConstants',['ChatConfig'],(function a(b,c,d,e,f,g){

'use strict';



var h=c('ChatConfig').get('divebar_rounded_profile',false),

i=
{IMAGE_SIZE:32,

getImageSize:function j(){
return i.IMAGE_SIZE+
(h?2:0);},


getItemHeight:function j(){
return i.IMAGE_SIZE+8;}};



f.exports=i;}),null);

/** js/mercury/clients/sidebar/components/ChatSidebarItem.react.js */






__d('ChatSidebarItem.react',['cssVar','cx','ix','xuiglyph','AvailableListConstants','XUIBadge.react','ChatConfig','ChatSidebarConstants','Image.react','Link.react','MessengerTextWithEmoticons.react','React','SplitImage.react','TextWithEmoticons.react','fbglyph'],(function a(b,c,d,e,f,g,h,i,j,k){

'use strict';var l,m,




















n=c('React').PropTypes,

o=c('ChatConfig').get('divebar_rounded_profile',false),
p=9;l=babelHelpers.inherits

(q,c('React').PureComponent);m=l&&l.prototype;function q(){var x,y;for(var z=arguments.length,aa=Array(z),ba=0;ba<z;ba++)aa[ba]=arguments[ba];return y=(x=m.constructor).call.apply(x,[this].concat(aa)),this.
































































































































renderLastActiveTime=function(){

return (c('React').createElement('div',{className:"_568-"},
this.props.statusTime));}.


bind(this),this.

renderBirthday=function(){
if(!this.props.birthday)
return null;



return (c('React').createElement(c('Image.react'),
{className:"_5dv3",
src:u()}));}.


bind(this),this.

renderPlayingGame=function(){

if(this.props.statusTime||
this.props.birthday||
!this.props.isPlayingGame)
return null;



return (c('React').createElement('div',{className:"_46b2"},
c('React').createElement(c('Image.react'),
{className:"_46b3",
src:w()})));}.



bind(this),y;}q.prototype.render=function(){var x="_55ln"+(this.props.context?' '+"_55lo":'')+(o?' '+"_qhr":'');return c('React').createElement(c('Link.react'),{className:x,href:{url:this.props.href},onClick:this.props.onClick,rel:'ignore'},c('React').createElement('div',{className:"_55lp"},c('React').createElement('div',{className:"_55lq"},c('React').createElement(c('SplitImage.react'),{size:this.props.imageSize||c('ChatSidebarConstants').IMAGE_SIZE,srcs:this.props.image||this.props.images})),c('React').createElement('div',{className:"_5bon"},this.renderPlayingGame(),this.renderBirthday(),this.renderUnreadCount(),this.renderStatus()),c('React').createElement('div',{className:"_55lr"},this.renderName()),c('React').createElement('div',{className:"_55ls"},this.props.context)));};q.prototype.renderName=function(){if(this.props.nameCanHaveEmoji){return c('React').createElement(c('MessengerTextWithEmoticons.react'),{renderEmoticons:true,renderEmoji:true,text:this.props.name});}else return this.props.name;};q.prototype.renderUnreadCount=function(){var x=this.props.unreadCount;if(!x)return null;return c('React').createElement(c('XUIBadge.react'),{count:x,maxcount:p,type:'regular'});};q.prototype.renderStatus=function(){var x=this.$ChatSidebarItem_renderStatusIcon();if(!x&&!this.props.statusTime)return null;var y=true;if(this.props.unreadCount&&this.props.unreadCount>0){x=this.props.statusTime?null:x;y=false;}return c('React').createElement('div',{className:"_568z"+(this.props.showRelationshipIndicator?' '+"_2oov":'')},y?this.renderLastActiveTime():null,x);};q.prototype.

$ChatSidebarItem_renderStatusIcon=function(){
if(this.props.isMessengerOnlyContact){

return (c('React').createElement(c('Image.react'),
{className:"_568_",
src:v()}));}else


if(this.props.status===c('AvailableListConstants').ACTIVE)
if(this.props.showRelationshipIndicator){

return (c('React').createElement(c('Image.react'),
{className:"_568_",
src:j("118297")}));}else 








return (c('React').createElement('span',
{style:
{background:"#42b72a",
borderRadius:'50%',
display:'inline-block',
height:'6px',
marginLeft:'4px',
veritcalAlign:'middle',
width:'6px'}}));





return null;};
q.propTypes={birthday:n.bool,context:n.node,href:n.string,imageSize:n.number,image:n.string,images:n.array,isPagesSection:n.bool,isPlayingGame:n.bool,isMessengerOnlyContact:n.bool,name:n.node.isRequired,nameCanHaveEmoji:n.bool,onClick:n.func,showRelationshipIndicator:n.bool,status:n.number,statusTime:n.string,unreadCount:n.number};


var r=void 0,
s=void 0,
t=void 0;

function u(){
if(!r)
r=j("74517");

return r;}


function v(){
if(!t)
t=j("28076");

return t;}


function w(){
if(!s)
s=j("89258");

return s;}



f.exports=q;}),null);

/** js/mercury/clients/sidebar/components/ChatSidebarThread.react.js */






__d('ChatSidebarThread.react',['fbt','ChatOpenTabEventLogger','ChatSidebarItem.react','FantaTabActions','MercuryIDs','MercuryParticipantListRenderer','WebMessengerThreadPermalinks','React','TooltipData'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,












k=c('React').PropTypes,

l=10,
m='\n';i=babelHelpers.inherits

(n,c('React').PureComponent);j=i&&i.prototype;function n(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=j.constructor).call.apply(q,[this].concat(t)),this.





























































































$ChatSidebarThread_handleClick=function(v){
var w=this.props.threadFBID;
v.preventDefault();
if(w){
c('FantaTabActions').openTab
(c('MercuryIDs').getThreadIDFromThreadFBID(w));

c('ChatOpenTabEventLogger').log(this.props.referrer,w);}}.

bind(this),r;}n.prototype.render=function(){var q=this.props.name,r=o(this.props.threadFBID,this.props.participants,this.props.numOtherParticipants),s=q?r:undefined,t=this.props.image?[]:p(this.props.participants),u=q?q:r;return c('React').createElement('div',c('TooltipData').propsFor(this.$ChatSidebarThread_renderParticipantsTooltip()),c('React').createElement(c('ChatSidebarItem.react'),{context:s,href:this.props.threadFBID&&c('WebMessengerThreadPermalinks').getThreadURIFromServerID(this.props.threadFBID),imageSize:this.props.imageSize,image:this.props.image,images:t,name:u,nameCanHaveEmoji:true,onClick:this.$ChatSidebarThread_handleClick,referrer:this.props.referrer,status:this.props.status,unreadCount:this.props.unreadCount}));};n.prototype.$ChatSidebarThread_renderParticipantsTooltip=function(){var q=[],r=this.props.participants.length,s=this.props.numOtherParticipants,t=Math.min(l,r);if(s-t===1)t--;var u=0;while(q.length<t&&u<this.props.participants.length){var v=this.props.participants[u].name;if(v)q.push(v);u++;}if(t<s)q.push(h._(["and {num} more...","76fbc9ba5cd40ef1cffb97607cae01c7"],[h.param('num',s-t)]));return q.join(m);};n.propTypes={image:k.string,imageSize:k.number,name:k.string,participants:k.array.isRequired,numOtherParticipants:k.number.isRequired,referrer:k.string,status:k.number,threadFBID:k.string,unreadCount:k.number};n.defaultProps={numOtherParticipants:l};


function o
(q,
r,
s){

return new (c('MercuryParticipantListRenderer'))().
setIsNewThread(!q).
setUseShortName(true).
setTotalParticipantCount(s).
renderParticipantList(r);}


function p(q){
return q.map(function(r){return r.image_src;}).filter(function(r){return r;});}


f.exports=n;}),null);

/** js/mercury/clients/sidebar/components/ChatSidebarGroupThreadsGroup.react.js */






__d('ChatSidebarGroupThreadsGroup.react',['cx','ChatSidebarThread.react','ChatSidebarSections','ChatSidebarConstants','PresencePrivacy','PresenceStatus','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,










k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.
















$ChatSidebarGroupThreadsGroup_renderGroup=function(r){
var s=r.mercury_thread.participants,
t=
this.props.isDisconnected||c('PresencePrivacy').isUserOffline();


return (c('React').createElement('li',
{className:"_42fz"+

(t?' '+"_570-":''),

'data-id':r.uid,
key:r.uid},
c('React').createElement(c('ChatSidebarThread.react'),
{image:r.mercury_thread.image_src,
imageSize:c('ChatSidebarConstants').getImageSize(),
name:r.mercury_thread.name,
participants:r.participants_to_render,
numOtherParticipants:s.length-1,
referrer:c('ChatSidebarSections').ORDERED_LIST,
status:c('PresenceStatus').getGroup(s),
threadFBID:r.uid})));}.



bind(this),n;}l.prototype.render=function(){return c('React').createElement('ul',null,this.props.groups.map(this.$ChatSidebarGroupThreadsGroup_renderGroup));};l.propTypes={groups:k.array.isRequired,isDisconnected:k.bool};


f.exports=l;}),null);

/** js/mercury/clients/sidebar/components/ChatSidebarHeader.react.js */





__d('ChatSidebarHeader.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits






(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.
render=function(){'use strict';

return (c('React').createElement('div',babelHelpers['extends']({},
this.props,
{className:c('joinClasses')
(this.props.className,
"_55ob")}),

c('React').createElement('div',{className:"_55oc"},
this.props.children)));};



function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** js/mercury/clients/sidebar/components/ChatSidebarItemPlaceholder.react.js */






__d('ChatSidebarItemPlaceholder.react',['cx','React'],(function a(b,c,d,e,f,g,h){

'use strict';












var i=function k(l){
return (50+Math.ceil(50-2*(Math.pow(7+l,2)%10)));},

j=function k(l){
return (c('React').createElement('li',
{className:"_42fz"+

(l.isDisconnected?' '+"_570-":'')},

c('React').createElement('div',
{className:"_55ln"+

(l.roundedProfile?' '+"_qhr":'')},

c('React').createElement('div',{className:"_55lp"},
c('React').createElement('span',
{className:"_1qh _55lq"}),


c('React').createElement('span',{className:"_55lr"},
c('React').createElement('span',
{className:"_1qh",
style:
{width:i(l.slot)+'px'}}))))));};







f.exports=j;}),null);

/** js/mercury/clients/sidebar/components/ChatSidebarUser.react.js */






__d('ChatSidebarUser.react',['ChatOpenTabEventLogger','ChatSidebarItem.react','FantaTabActions','MercuryIDs','WebMessengerThreadPermalinks','React'],(function a(b,c,d,e,f,g){var h,i,








j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').PureComponent);i=h&&h.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.





























































$ChatSidebarUser_openTab=function(q){var r=




this.props,s=r.sectionName,t=r.slot,u=r.userID,

v=c('MercuryIDs').getThreadIDFromUserID(u);
c('FantaTabActions').openTab(v);
c('ChatOpenTabEventLogger').logUser
(s,
u,
{global_slot:t});


q.preventDefault();}.
bind(this),m;}k.prototype.render=function(){'use strict';var l=c('WebMessengerThreadPermalinks').getThreadURIFromUserID(this.props.userID);return c('React').createElement(c('ChatSidebarItem.react'),{onClick:this.$ChatSidebarUser_openTab,href:l,imageSize:this.props.imageSize,image:this.props.image,isPlayingGame:this.props.isPlayingGame,name:this.props.name,nameCanHaveEmoji:false,showRelationshipIndicator:this.props.showRelationshipIndicator,status:this.props.status,birthday:this.props.birthday,statusTime:this.props.statusTime,context:this.props.context,unreadCount:this.props.unreadCount,isMessengerOnlyContact:this.props.isMessengerOnlyContact});};k.propTypes={birthday:j.bool,image:j.string,imageSize:j.number,isPlayingGame:j.bool,name:j.string,sectionName:j.string.isRequired,showRelationshipIndicator:j.bool,slot:j.number,status:j.number,statusTime:j.string,unreadCount:j.number,userID:j.string.isRequired,isMessengerOnlyContact:j.bool,context:j.string};


f.exports=k;}),null);

/** js/mercury/clients/sidebar/components/ChatSidebarUserGroup.react.js */






__d('ChatSidebarUserGroup.react',['cx','AvailableListConstants','ChatConfig','ChatSidebarItemPlaceholder.react','ChatSidebarSections','ChatSidebarUser.react','LastActiveTimes','PresencePrivacy','React'],(function a(b,c,d,e,f,g,h){

'use strict';












var i=c('React').PropTypes,
j=c('ChatConfig').get('divebar_rounded_profile',false),

k=Object.keys(c('ChatSidebarSections')).map
(function(n){return c('ChatSidebarSections')[n];}),












l=function n
(o,
p,
q){

if(!p)

return (c('React').createElement(c('ChatSidebarItemPlaceholder.react'),
{isDisconnected:!!o.isDisconnected,
key:'placeholder'+q,
roundedProfile:j,
slot:q}));



if(!p.id)
return null;


var r=o.statusMap[p.id],

s=r!==c('AvailableListConstants').ACTIVE?
c('LastActiveTimes').getShortDisplay(p.id):
undefined,
t=o.isDisconnected||
!c('PresencePrivacy').allows(p.id),
u=o.sectionName===c('ChatSidebarSections').NEARBY?
p.location:
undefined;


return (c('React').createElement('li',
{className:"_42fz"+

(t?' '+"_570-":''),

'data-id':p.id,
key:p.id},
c('React').createElement(c('ChatSidebarUser.react'),
{birthday:p.is_birthday,
image:p.thumbSrc,
imageSize:o.imageSize,
isPlayingGame:!!o.playingMap[p.id],
name:p.name,
roundedProfile:j,
showRelationshipIndicator:p.show_relationship_indicator,
sectionName:o.sectionName,
slot:q,
status:r,
statusTime:s,
userID:p.id,
unreadCount:o.unreadCounts[p.id],
isMessengerOnlyContact:p.is_messenger_only,
context:u})));},





m=function n(o){
var p=o.userData,q=babelHelpers.objectWithoutProperties(o,['userData']);
delete q.imageSize;
delete q.isDisconnected;
delete q.playingMap;
delete q.sectionName;
delete q.statusMap;
delete q.unreadCounts;


return (c('React').createElement('ul',q,
p.map(function(r,s){return l(o,r,s);})));};




m.propTypes=
{imageSize:i.number.isRequired,
isDisconnected:i.bool.isRequired,
sectionName:i.oneOf(k).isRequired,
playingMap:i.object.isRequired,
statusMap:i.object.isRequired,
unreadCounts:i.object.isRequired,
userData:i.arrayOf(i.object).isRequired};


f.exports=m;}),null);

/** js/chat/ChatUnreadCountStore.js */






__d('ChatUnreadCountStore',['ChatDispatcher','ChatUnreadCountActionTypes','FluxStore','ifRequired'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits







(j,c('FluxStore'));i=h&&h.prototype;

function j(){
i.constructor.call(this,c('ChatDispatcher'));}
j.prototype.

__onDispatch=function(k){
var l=k.type;
switch(l){
case c('ChatUnreadCountActionTypes').COUNT_UPDATED:
this.__emitChange();
break;

default:break;}};

j.prototype.

get=function(k){
return c('ifRequired')
('ChatUnreadCount',
function(l){return l.get().getUnreadCountForUID(k);},
function(){return 0;});};




f.exports=new j();}),null);

/** js/chat/PresenceStatusStore.js */






__d('PresenceStatusStore',['ChatDispatcher','FluxStore','PresenceStatus','PresenceStatusActionTypes'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits






(j,c('FluxStore'));i=h&&h.prototype;

function j(){
i.constructor.call(this,c('ChatDispatcher'));}
j.prototype.

__onDispatch=function(k){
var l=k.type;
switch(l){
case c('PresenceStatusActionTypes').AVAILABILITY_CHANGED:
this.__emitChange();
break;

default:break;}};

j.prototype.

get=function(k){
return c('PresenceStatus').get(k);};
j.prototype.

getIsPlaying=function(k){
return c('PresenceStatus').isPlayingCanvasGameUser(k);};



f.exports=new j();}),null);

/** js/chat/ShortProfilesActionTypes.js */






__d('ShortProfilesActionTypes',['keyMirror'],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c('keyMirror')
({PROFILE_UPDATED:null});}),null);

/** js/chat/ShortProfilesStore.js */






__d('ShortProfilesStore',['ChatDispatcher','ChatProfileStore','FluxStore','ShortProfiles','ShortProfilesActionTypes'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits







(j,c('FluxStore'));i=h&&h.prototype;

function j(){
i.constructor.call(this,c('ChatDispatcher'));}
j.prototype.

__onDispatch=function(k){
var l=k.type;
switch(l){
case c('ShortProfilesActionTypes').PROFILE_UPDATED:
this.__emitChange();
break;

default:break;}};

j.prototype.

getNow=function(k){
var l=c('ChatProfileStore').get(k);
if(!l)
l=c('ShortProfiles').getNow(k);

return l;};
j.prototype.

getMulti=function(k){
c('ShortProfiles').getMulti(k,this.$ShortProfilesStore_onLoad);};
j.prototype.

$ShortProfilesStore_onLoad=function(k){
c('ChatDispatcher').dispatch
({type:c('ShortProfilesActionTypes').PROFILE_UPDATED});};




f.exports=new j();}),null);

/** js/mercury/clients/sidebar/components/ChatSidebarUserGroupContainer.react.js */






__d('ChatSidebarUserGroupContainer.react',['AvailableListConstants','ChatSidebarSections','ChatSidebarUserGroup.react','ChatUnreadCountStore','PresenceStatusStore','ShortProfilesStore','React','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){var h,i,











j=c('React').PropTypes,


k=5000,
















l=Object.keys(c('ChatSidebarSections')).map
(function(o){return c('ChatSidebarSections')[o];});h=babelHelpers.inherits


(m,c('React').Component);i=h&&h.prototype;

















function m(o){'use strict';
i.constructor.call(this,o);n.call(this);var p=

this.$ChatSidebarUserGroupContainer_getStatusMap(o.ids,o.loadExtras),q=p.playingMap,r=p.statusMap,
s=this.$ChatSidebarUserGroupContainer_getUnreadCountsMap(o.ids),
t=this.$ChatSidebarUserGroupContainer_getUserData(o.ids);
this.state={playingMap:q,statusMap:r,unreadCounts:s,userData:t};

this.$ChatSidebarUserGroupContainer_unreadStoreListener=c('ChatUnreadCountStore').addListener(function(){
this.$ChatSidebarUserGroupContainer_updateState(this.props);}.
bind(this));
this.$ChatSidebarUserGroupContainer_presenceStoreListener=c('PresenceStatusStore').addListener(function(){
this.$ChatSidebarUserGroupContainer_updateState(this.props);}.
bind(this));
this.$ChatSidebarUserGroupContainer_profileStoreListener=c('ShortProfilesStore').addListener(function(){
this.$ChatSidebarUserGroupContainer_updateState(this.props);}.
bind(this));}
m.prototype.

shouldComponentUpdate=function(o,p){'use strict';
for(var q=Object.keys(this.$ChatSidebarUserGroupContainer_waitingProfileIDs),r=Array.isArray(q),s=0,q=r?q:q[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var t;if(r){if(s>=q.length)break;t=q[s++];}else{s=q.next();if(s.done)break;t=s.value;}var u=t;
if(this.$ChatSidebarUserGroupContainer_waitingProfileIDs[u])
return false;}



if(this.props.ids!==o.ids||
this.props.imageSize!==o.imageSize||
this.props.isDisconnected!==o.isDisconnected||
this.props.loadExtras!==o.loadExtras||
this.props.sectionName!==o.sectionName||
this.state.userData.length!==p.userData.length)
return true;


for(var v=Object.keys(this.state.unreadCounts),w=Array.isArray(v),x=0,v=w?v:v[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var y;if(w){if(x>=v.length)break;y=v[x++];}else{x=v.next();if(x.done)break;y=x.value;}var z=y;
if(p.unreadCounts[z]!==this.state.unreadCounts[z])
return true;}



for(var aa=Object.keys(this.state.statusMap),ba=Array.isArray(aa),ca=0,aa=ba?aa:aa[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var da;if(ba){if(ca>=aa.length)break;da=aa[ca++];}else{ca=aa.next();if(ca.done)break;da=ca.value;}var ea=da;
if(p.statusMap[ea]!==this.state.statusMap[ea])
return true;}



for(var fa=Object.keys(p.statusMap),ga=Array.isArray(fa),ha=0,fa=ga?fa:fa[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var ia;if(ga){if(ha>=fa.length)break;ia=fa[ha++];}else{ha=fa.next();if(ha.done)break;ia=ha.value;}var ja=ia;
if(p.statusMap[ja]!==this.state.statusMap[ja])
return true;}



for(var ka=0;ka<this.state.userData.length;ka++)
if(!this.state.userData[ka]||
!p.userData[ka]||
this.state.userData[ka].id!==p.userData[ka].id)
return true;



return false;};
m.prototype.











render=function(){'use strict';

return (c('React').createElement(c('ChatSidebarUserGroup.react'),
{imageSize:this.props.imageSize,
isDisconnected:this.props.isDisconnected,
playingMap:this.state.playingMap,
sectionName:this.props.sectionName,
statusMap:this.state.statusMap,
unreadCounts:this.state.unreadCounts,
userData:this.state.userData}));};


m.prototype.

$ChatSidebarUserGroupContainer_updateState=function(o){'use strict';
var p=this.$ChatSidebarUserGroupContainer_getUnreadCountsMap(o.ids),q=
this.$ChatSidebarUserGroupContainer_getStatusMap
(o.ids,
o.loadExtras),r=q.playingMap,s=q.statusMap,

t=this.$ChatSidebarUserGroupContainer_getUserData(o.ids);
this.setState({playingMap:r,statusMap:s,unreadCounts:p,userData:t});};
m.prototype.




























$ChatSidebarUserGroupContainer_getUserData=function(o){'use strict';
var p=[],
q=[];
o.forEach(function(r){
var s=c('ShortProfilesStore').getNow(r);
p.push(s);
if(s){
this.$ChatSidebarUserGroupContainer_resolvedProfileID(r);}else{

this.$ChatSidebarUserGroupContainer_waitForProfileID(r);
q.push(r);}}.

bind(this));

if(q.length>0)
c('ShortProfilesStore').getMulti(q);


return p;};
m.prototype.





$ChatSidebarUserGroupContainer_waitForProfileID=function(o){'use strict';
if(this.$ChatSidebarUserGroupContainer_waitingProfileIDs[o]===undefined)
this.$ChatSidebarUserGroupContainer_waitingProfileIDs[o]=c('setTimeoutAcrossTransitions')(function(){
this.$ChatSidebarUserGroupContainer_waitingProfileIDs[o]=null;
this.$ChatSidebarUserGroupContainer_updateState(this.props);}.
bind(this),k);};

m.prototype.

$ChatSidebarUserGroupContainer_resolvedProfileID=function(o){'use strict';
var p=this.$ChatSidebarUserGroupContainer_waitingProfileIDs[o];
if(!p)
return;

clearTimeout(p);
this.$ChatSidebarUserGroupContainer_waitingProfileIDs[o]=null;};
m.propTypes={ids:j.arrayOf(j.string).isRequired,imageSize:j.number.isRequired,isDisconnected:j.bool.isRequired,loadExtras:j.bool.isRequired,sectionName:j.oneOf(l).isRequired};var n=function o(){this.$ChatSidebarUserGroupContainer_waitingProfileIDs={};this.$ChatSidebarUserGroupContainer_unreadStoreListener=null;this.$ChatSidebarUserGroupContainer_presenceStoreListener=null;this.$ChatSidebarUserGroupContainer_profileStoreListener=null;this.componentWillReceiveProps=function(p){this.$ChatSidebarUserGroupContainer_updateState(p);}.bind(this);this.componentWillUnmount=function(){this.$ChatSidebarUserGroupContainer_unreadStoreListener&&this.$ChatSidebarUserGroupContainer_unreadStoreListener.remove();this.$ChatSidebarUserGroupContainer_presenceStoreListener&&this.$ChatSidebarUserGroupContainer_presenceStoreListener.remove();this.$ChatSidebarUserGroupContainer_profileStoreListener&&this.$ChatSidebarUserGroupContainer_profileStoreListener.remove();}.bind(this);this.$ChatSidebarUserGroupContainer_getStatusMap=function(p,q){var r={},s={};p.forEach(function(t){if(q){var u=c('PresenceStatusStore').getIsPlaying(t);r[t]=u;}var v=c('PresenceStatusStore').get(t);if(v===c('AvailableListConstants').ACTIVE)s[t]=v;});return {statusMap:s,playingMap:r};};this.$ChatSidebarUserGroupContainer_getUnreadCountsMap=function(p){var q={};p.forEach(function(r){q[r]=c('ChatUnreadCountStore').get(r);});return q;};};


f.exports=m;}),null);

/** js/mercury/clients/sidebar/components/ChatSidebarOrderedList.react.js */






__d('ChatSidebarOrderedList.react',['cx','fbt','ix','Bootloader','BootloadOnRender.react','ChatConfig','ChatQuietLinks','ChatReliabilityInstrumentation','ChatSidebarConstants','ChatSidebarGroupThreadsGroup.react','ChatSidebarHeader.react','ChatSidebarSections','ChatSidebarUserGroupContainer.react','Image.react','JSResource','LazyComponent.react','LeftRight.react','Link.react','MessageBlockNuxState','MessengerWebDriverTestIDs','PresencePrivacy','React','ReactDOM','Run','Scroll','SubscriptionsHandler','URI','WorkInviteSource','WorkModeConfig','XPagesBrowserController','XUIButton.react','XWorkInviteCoworkersDialogController','fbglyph','ifRequired'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,





































m=c('React').PropTypes,

n=3;k=babelHelpers.inherits






(o,c('React').PureComponent);l=k&&k.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.























state=
{isDisconnected:false,
renderBelowFold:false},this.



$ChatSidebarOrderedList_subscriptions=null,q;}o.prototype.

componentDidMount=function(){
c('ChatQuietLinks').nukeLinks(c('ReactDOM').findDOMNode(this.refs.noLinks));
this.$ChatSidebarOrderedList_subscriptions=new (c('SubscriptionsHandler'))();
c('Run').onAfterLoad(function(){
this.setState
({renderBelowFold:true});

this.$ChatSidebarOrderedList_bootloadChannelSubscription();}.
bind(this));};
o.prototype.

componentWillUnmount=function(){
this.$ChatSidebarOrderedList_subscriptions.release();};
o.prototype.

render=function(){
var p=
c('PresencePrivacy').getOnlinePolicy()===c('PresencePrivacy').ONLINE_TO_WHITELIST&&
c('PresencePrivacy').getVisibility()?
this.$ChatSidebarOrderedList_renderOfflineSection():
this.$ChatSidebarOrderedList_renderOnlineSection();


return (c('React').createElement('div',{'data-testid':c('MessengerWebDriverTestIDs').CHAT_SIDEBAR},
this.$ChatSidebarOrderedList_shouldRenderMessageBlockingNUX()?
this.$ChatSidebarOrderedList_renderMessageBlockingNUX():
null,

c('React').createElement('div',{ref:'noLinks'},
this.$ChatSidebarOrderedList_renderAdminedPagesSection()),

c('React').createElement('div',{ref:'noLinks'},
this.$ChatSidebarOrderedList_renderHeader(),
this.$ChatSidebarOrderedList_renderFriendsSection()),

this.$ChatSidebarOrderedList_renderNearbyHeader(),
c('React').createElement('div',{ref:'noLinks'},
this.$ChatSidebarOrderedList_renderNearbySection(),
this.$ChatSidebarOrderedList_renderGroupsSection(),
p,
this.$ChatSidebarOrderedList_renderInviteButton())));};



o.prototype.

$ChatSidebarOrderedList_scrollToSeparator=function(p){
var q=this.props.scrollContainer;
if(!q)
return;


var r=q.clientHeight,s=q.scrollHeight,

t=c('Scroll').getTop(q),
u=Math.min(p.offsetTop,s-r);
if(t!==u)
c('ifRequired')
('Animation',

function(v){
var w=
Math.abs(u-t)/
q.clientHeight*500;

new v(q).
to('scrollTop',u).
ease(v.ease.end).
duration(w).
go();},


function(){
c('Scroll').setTop(q,u);});};



o.prototype.

$ChatSidebarOrderedList_renderHeader=function(){
if(!c('ChatConfig').get('show_header'))
return null;



return (c('React').createElement(c('ChatSidebarHeader.react'),{key:'header'},i._(["CONTACTS","ab090901cf6cc999f5e2ea97d201eecf"])));};







o.prototype.

$ChatSidebarOrderedList_renderOfflineSection=function(){
var p=c('ChatSidebarConstants').getImageSize(),
q=this.props.topUsers.filter
(function(u){return !c('PresencePrivacy').allows(u);});



q.splice(-2);

var r=c('React').createElement('a',
{ajaxify:'/ajax/chat/privacy/settings_dialog.php?ref=whitelist_separator',
href:'#',
rel:'dialog'},i._(["Edit","2100a3c6c28639d5a17c0555d5f51528"])),







s=c('WorkModeConfig').is_work_user?i._(["MORE COWORKERS","bc7f16d85b02e976cdbb0537dc4533a5"]):i._(["MORE CONTACTS","55ec0a743eb8c65e557984e8b1f3923d"]),









t=c('WorkModeConfig').is_work_user?i._(["These coworkers can't see you on chat. {=link}","27deff066a4ce82ab503db53ff3c652b"],

[i.param('=link',r)]):i._(["These contacts can't see you on chat. {=link}","1e1b61326d922821dcc67520867368e2"],




[i.param('=link',r)]);





return [c('React').createElement(c('ChatSidebarHeader.react'),
{key:'usersSeparator1'},
s),

c('React').createElement(c('ChatSidebarHeader.react'),
{className:"_5j9-",
key:'usersSeparator2'},
t),

c('React').createElement(c('ChatSidebarUserGroupContainer.react'),
{ids:q,
isDisconnected:this.state.isDisconnected,
imageSize:p,
key:c('ChatSidebarSections').OFFLINE_USERS,
loadExtras:this.state.renderBelowFold,
sectionName:c('ChatSidebarSections').OFFLINE_USERS})];};


o.prototype.

$ChatSidebarOrderedList_renderOnlineSection=function(){
if(this.props.availableUsers.length===0)
return null;

if(!this.state.renderBelowFold){
var p=c('ChatSidebarConstants').getItemHeight();

return [c('React').createElement('div',
{key:c('ChatSidebarSections').MORE_ONLINE_FRIENDS,
style:
{height:p*this.props.availableUsers.length}})];}





var q=c('ChatSidebarConstants').getImageSize(),

r=c('WorkModeConfig').is_work_user?i._({"*":["{MORE ONLINE COWORKERS} ({=count})","a22bd901ac0078f59bead28f0f15810d"]},

[i.param
('MORE ONLINE COWORKERS',i._(["MORE COWORKERS","bc7f16d85b02e976cdbb0537dc4533a5"])),







i.param
('=count',
this.props.availableUsers.length,[0])]):i._({"*":["{MORE ONLINE CONTACTS} ({=count})","246390cf6266547d78347eddba01ea03"]},






[i.param
('MORE ONLINE CONTACTS',i._(["MORE CONTACTS","55ec0a743eb8c65e557984e8b1f3923d"])),






i.param
('=count',
this.props.availableUsers.length,[0])]),




s=
c('React').createElement(c('ChatSidebarUserGroupContainer.react'),
{ids:this.props.availableUsers,
imageSize:q,
isDisconnected:this.state.isDisconnected,
key:c('ChatSidebarSections').MORE_ONLINE_FRIENDS,
loadExtras:this.state.renderBelowFold,
sectionName:c('ChatSidebarSections').MORE_ONLINE_FRIENDS});




return [c('React').createElement(c('ChatSidebarHeader.react'),
{ref:'usersSeparator',
key:'usersSeparator',
onClick:function(){return this.$ChatSidebarOrderedList_scrollToSeparator

(c('ReactDOM').findDOMNode(this.refs.usersSeparator));}.bind(this)},

r),

s];};

o.prototype.

$ChatSidebarOrderedList_renderNearbyHeader=function(){
if(!c('ChatConfig').get('nearby_friends_www_chatbar')||
this.props.nearby.length===0)
return null;



return (c('React').createElement(c('ChatSidebarHeader.react'),
{ref:'nearbySeparator',
key:'nearbySeparator'},
c('React').createElement(c('LeftRight.react'),null,i._(["NEARBY","f9092b8891fcd899900ff07a356476e1"]),





c('React').createElement(c('Link.react'),
{target:'_blank',
href:new (c('URI'))('/help/android-app/291236034364603')},
c('React').createElement(c('Image.react'),
{className:"_3-90",
src:j("129548")})))));};









o.prototype.

$ChatSidebarOrderedList_renderNearbySection=function(){
if(!c('ChatConfig').get('nearby_friends_www_chatbar')||
this.props.nearby.length===0)
return null;


var p=c('ChatSidebarConstants').getImageSize(),
q=this.props.nearby;
if(c('PresencePrivacy').getVisibility()==c('PresencePrivacy').ONLINE)
q=this.props.nearby.filter
(function(r){return c('PresencePrivacy').allows(r);});




return (c('React').createElement(c('ChatSidebarUserGroupContainer.react'),
{key:c('ChatSidebarSections').NEARBY,
ids:q,
isDisconnected:this.state.isDisconnected,
imageSize:p,
loadExtras:this.state.renderBelowFold,
sectionName:c('ChatSidebarSections').NEARBY}));};


o.prototype.

$ChatSidebarOrderedList_renderGroupsSection=function(){
if(this.props.groups.length===0)
return null;


var p=
this.state.isDisconnected||c('PresencePrivacy').isUserOffline();


return [c('React').createElement(c('ChatSidebarHeader.react'),
{ref:'groupSeparator',
key:'groupSeparator',
className:
p?"_570-":'',

onClick:function(){return this.$ChatSidebarOrderedList_scrollToSeparator

(c('ReactDOM').findDOMNode(this.refs.groupSeparator));}.bind(this)},i._(["GROUP CONVERSATIONS","1b9fab7107dc2f0bac3a6e22ac28c1fc"])),







c('React').createElement(c('ChatSidebarGroupThreadsGroup.react'),
{groups:this.props.groups,
isDisconnected:this.state.isDisconnected,
key:'group_threads_section',
loadExtras:this.state.renderBelowFold})];};


o.prototype.

$ChatSidebarOrderedList_renderFriendsSection=function(){

var p=c('ChatSidebarConstants').getImageSize(),

q=this.props.topUsers;
if(c('PresencePrivacy').getVisibility()==c('PresencePrivacy').ONLINE)
q=this.props.topUsers.filter
(function(r){return c('PresencePrivacy').allows(r);});




return (c('React').createElement(c('ChatSidebarUserGroupContainer.react'),
{key:c('ChatSidebarSections').ORDERED_LIST,
ids:q,
isDisconnected:this.state.isDisconnected,
imageSize:p,
loadExtras:this.state.renderBelowFold,
sectionName:c('ChatSidebarSections').ORDERED_LIST}));};


o.prototype.

$ChatSidebarOrderedList_renderInviteButton=function(){
if(!c('ChatConfig').get('work_show_invites'))
return null;

var p=c('XWorkInviteCoworkersDialogController').
getURIBuilder().
setEnum('source',c('WorkInviteSource').WWW_CHAT_SIDEBAR).
getURI(),

q=i._(["Invite more coworkers","6f4ea2e63981125314d6206f7c4f8919"]),




r=null;

if(this.props.availableUsers.length===0&&
this.props.topUsers.length===0){

q=i._(["Invite coworkers","50f3b6d5bb8a0a85ce2ac1bf322ac83c"]);




r=
c('React').createElement('div',{className:"_3-8z"},
c('React').createElement(c('Image.react'),
{className:"_3-8z",
src:j("286109")}),
c('React').createElement('h3',{className:"_3-8k"},i._(["Reach anyone instantly","cf68243f5d59bb7d90f8d3031d1f14b8"])),






c('React').createElement('div',{className:"_3-8k _5-km"},i._(["Invite coworkers to see them here as chat contacts.","6e4a2ff894ae46714b3eb532fb85ca55"])));}










return (c('React').createElement('div',{className:"_5-kn"},
r,
c('React').createElement(c('XUIButton.react'),
{className:"_3-8i",
label:q,
size:'large',
href:'#',
ajaxify:p,
rel:'dialog'})));};



o.prototype.

$ChatSidebarOrderedList_renderAdminedPagesSection=function(){
if(!c('ChatConfig').get('show_admined_pages')||
this.props.adminedPages.length===0||
!this.props.pageListModule)
return null;


var p=null;
if(this.props.adminedPages.length>=n){
var q=c('XPagesBrowserController').getURIBuilder().
setString('category','your_pages').
setString('ref',this.props.adminedPages[0].ref).
getURI();
p=
c('React').createElement(c('Link.react'),
{className:"_2l56",
href:q,
target:'_blank'},i._(["SEE ALL","ede5e5614b19e5547926543a16346683"]));}









var r=this.props.pageListModule;


return [c('React').createElement(c('ChatSidebarHeader.react'),
{className:"_4kqp",
key:c('ChatSidebarSections').ADMINED_PAGES},
c('React').createElement(c('LeftRight.react'),null,i._(["YOUR PAGES","7bc0a3bec7d667097e67f59919ca33f3"]),






p)),


c('React').createElement(r,
{adminedPages:this.props.adminedPages,
key:'pages_section'})];};


o.prototype.

$ChatSidebarOrderedList_bootloadChannelSubscription=function(){
c('Bootloader').loadModules
(["ChannelConnection"],
function(p){
this.$ChatSidebarOrderedList_subscriptions.addSubscriptions
(p.subscribe
([p.CONNECTED,
p.RECONNECTING,
p.SHUTDOWN,
p.MUTE_WARNING,
p.UNMUTE_WARNING],

function(){
var q=p.disconnected();
if(q!==this.state.isDisconnected){
if(q){
c('ChatReliabilityInstrumentation').logCHANNEL_DISCONNECT();}else 

c('ChatReliabilityInstrumentation').logCHANNEL_CONNECT();

this.setState
({isDisconnected:q});}}.


bind(this)));}.

bind(this),'ChatSidebarOrderedList.react');};

o.prototype.

$ChatSidebarOrderedList_renderMessageBlockingNUX=function(){

return (c('React').createElement(c('BootloadOnRender.react'),
{loader:
c('JSResource')('MercuryMessageBlockingNuxIntro.react').__setRef('ChatSidebarOrderedList.react'),

placeholder:c('React').createElement('div',null),
component:c('React').createElement(c('LazyComponent.react'),{shouldShowImage:false})}));};


o.prototype.

$ChatSidebarOrderedList_shouldRenderMessageBlockingNUX=function(){

return (c('MessageBlockNuxState').shouldShowMessageBlockingNuxIntro&&
!this.props.isSidebar);};

o.propTypes={availableUsers:m.array.isRequired,groups:m.array.isRequired,scrollContainer:m.object,topUsers:m.array.isRequired,nearby:m.array.isRequired,adminedPages:m.array.isRequired,pageListModule:m.func,isSidebar:m.bool};



f.exports=o;}),null);

/** js/chat/ChatSidebarPreloadStoreWithoutPage.js */







__d('ChatSidebarPreloadStoreWithoutPage',['ChatSidebarData','InitialChatFriendsListWithoutPage'],(function a(b,c,d,e,f,g){

'use strict';




var h=
{onLoaded:function i
(j){









if(c('ChatSidebarData').AsyncDataPreloader){
c('ChatSidebarData').AsyncDataPreloader.onLoaded
(function(k){var l=k.result,
m=l.list,
n=l.groups,
o=l.shortProfiles,
p=l.nearby;

return (j
({buddies:m,
groups:n,
shortProfiles:o,
nearby:p,
profiles:[]}));});}else


if(c('ChatSidebarData').WebGraphQLPreloader){
c('ChatSidebarData').WebGraphQLPreloader.onLoaded
(function(k){
return (j(c('ChatSidebarData').WebGraphQLNormalizer.normalize(k)));});}else 


j
({buddies:c('InitialChatFriendsListWithoutPage').list||[],
groups:c('InitialChatFriendsListWithoutPage').groups||[],
shortProfiles:c('InitialChatFriendsListWithoutPage').shortProfiles||{},
nearby:c('InitialChatFriendsListWithoutPage').nearby||[],
profiles:[]});}};





f.exports=h;}),null);

/** js/chat/ChatSortUsers.js */




__d('ChatSortUsers',['ShortProfiles','TokenizeUtil'],(function a(b,c,d,e,f,g){




var h={};
function i(k){
if(h[k])
return h[k];


var l=(c('ShortProfiles').getNow(k)||{}).name;
if(l)
return h[k]=c('TokenizeUtil').flatten(l);

return '~';}


var j=



{sortAlphabetical:function k(l,m){
var n=i(l),
o=i(m);
if(n!==o)
return n<o?-1:1;

return 0;}};



f.exports=j;}),null);

/** js/presence/PresenceOrderedList.js */












__d('PresenceOrderedList',['ChatSidebarPreloadStore','ChatSortUsers','PresencePrivacy','PresenceStatus'],(function a(b,c,d,e,f,g){






function h(k){
return k.map(function(l){
var m=l.slice(0,-2),
n=Number(l.slice(-1));
return [m,n];});}



function i
(k,
l){

var m=[];
k.forEach(function(n){var o=n[0],p=n[1];
if(m.length>=l)
return;


if(c('PresencePrivacy').getFriendVisibility(o)==
c('PresencePrivacy').BLACKLISTED)
return;


if(p==c('PresenceStatus').get(o))
m.push(o);});


return m;}





function j(){'use strict';
this.$PresenceOrderedList_userList=null;}
j.prototype.




getSorted=function(k,l){'use strict';
if(this.$PresenceOrderedList_userList){
l(i(this.$PresenceOrderedList_userList,k));
return;}


c('ChatSidebarPreloadStore').onLoaded(function(m){var n=m.buddies;
this.$PresenceOrderedList_userList=h(n);
l(i(this.$PresenceOrderedList_userList,k));}.
bind(this));};
j.prototype.




getAvailableSorted=
function(k){
'use strict';
var l=c('PresenceStatus').getOnlineIDs();
if(k)
l=l.filter(function(m){return k&&k.indexOf(m)===-1;});

return l.sort(c('ChatSortUsers').sortAlphabetical);};
j.prototype.

getAllSorted=
function(k){
'use strict';
var l=[],
m=this.$PresenceOrderedList_userList||[];
c('PresenceStatus').getAllIDs().
concat(m.map(function(n){return n[0];})).
forEach(function(n){return l.indexOf(n)===-1&&l.push(n);});
if(k)
l=l.filter(function(n){return k&&k.indexOf(n)===-1;});

return l.sort(c('ChatSortUsers').sortAlphabetical);};



f.exports=new j();}),null);

/** js/chat/ChatOrderedList.js */






__d('ChatOrderedList',['csx','Arbiter','ArbiterMixin','AvailableList','AvailableListConstants','CSS','ChatConfig','ChatHovercard','ChatOptions','ChatOrderedListHover','ChatSidebarConstants','ChatSidebarOrderedList.react','ChatSidebarPreloadStore','ChatSidebarPreloadStoreWithoutPage','DOM','DataStore','Event','JSLogger','Parent','PresenceOrderedList','PresencePrivacy','React','ReactDOM','WorkModeConfig','debounceAcrossTransitions','mixin','shield'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits






























(k,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;
function k(l,m,n){'use strict';
j.constructor.call(this);

this._root=n;
this._isVisible=false;
this._excludedIds={};
this._numTopFriends=5;
this._adminedPages=[];
this._groups=[];
this._nearby=[];
this._hoverController=null;
this._isHovering=false;
this._pageListModule=null;
this._showPages=m;
this._isSidebar=l;

this._orderedList=c('DOM').find(this._root,'.fbChatOrderedList');

c('Event').listen
(this._orderedList,
'mouseover',
function(){
this._isHovering=true;}.
bind(this));

c('Event').listen
(this._orderedList,
'mouseout',
function(){
this._isHovering=false;
this._render();}.
bind(this));



this._scrollableOrderedList=c('Parent').byClass
(this._root,'scrollableOrderedList');


this._scrollableArea=c('Parent').byClass
(this._root,'scrollable');


if(l)
new (c('ChatHovercard'))(this);


c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(o,p){
this.getSortedList(function(q){
p.chat_lists=p.chat_lists||
{sorted_list:q,
available_list:c('PresenceOrderedList').getAvailableSorted(),
excluded_list:this._excludedIds};}.

bind(this));}.
bind(this));

c('PresencePrivacy').subscribe
('privacy-user-presence-changed',
c('shield')(this._render,this));

c('AvailableList').subscribe
(c('AvailableListConstants').ON_AVAILABILITY_CHANGED,
c('shield')(this._render,this));}

k.prototype.




getShowingUsers=function(){'use strict';
return c('DOM').scry
(this._root,
"li._42fz,li._5a58").
map(this.getUserForNode);};
k.prototype.

getUserForNode=function(l){'use strict';
return c('DataStore').get(l,'id')||c('DataStore').get(l,'serverthreadid');};
k.prototype.

getHoverController=function(){'use strict';
if(!this._hoverController)
this._hoverController=
new (c('ChatOrderedListHover'))(this);

return this._hoverController;};
k.prototype.

getItemHeight=function(){'use strict';
return c('ChatSidebarConstants').getItemHeight();};
k.prototype.





getRoot=function(){'use strict';
return this._root;};
k.prototype.

getSortedList=function(l){'use strict';
c('PresenceOrderedList').getSorted(this._numTopFriends,function(m){return l(m);});};
k.prototype.




hide=function(){'use strict';
if(!this._isVisible)
return;

this._isVisible=false;
c('CSS').hide(this._scrollableOrderedList||this._root);
this.inform('hide');};
k.prototype.








setNumTopFriends=function(l,m){'use strict';
if(!this._showPages){
c('ChatSidebarPreloadStoreWithoutPage').onLoaded(function(n){


var o=n.groups,p=n.nearby;

l--;
if(c('ChatConfig').get('show_header'))
l--;

var q=l,

r=!c('ChatOptions').getSetting('hide_groups')?
o:
[];

if(r.length>0)

q-=r.length+1;

if(c('ChatConfig').get('nearby_friends_www_chatbar')&&p.length>0)

q-=p.length+1;




q=Math.min
(l,
Math.max(q,c('ChatConfig').get('min_top_friends')||0));


if(q!==this._numTopFriends||
r.length!==this._groups.length||
p.length!==this._nearby.length){
this._groups=r;
this._numTopFriends=q;
this._nearby=p;
if(m){
this._renderOrderedList();}else 

this._render();}}.


bind(this));}else 

c('ChatSidebarPreloadStore').onLoaded(function(n){




var o=n.groups,p=n.nearby,q=n.adminedPages,r=n.pageListModule;

l--;
if(c('ChatConfig').get('show_header'))
l--;

var s=l,

t=!c('ChatOptions').getSetting('hide_groups')?
o:
[],
u=!c('ChatOptions').getSetting('hide_admined_pages')?
q:
[];

if(t.length>0)

s-=t.length+1;

if(c('ChatConfig').get('nearby_friends_www_chatbar')&&p.length>0)

s-=p.length+1;

if(c('ChatConfig').get('show_admined_pages')&&
u.length>0)

s-=u.length+1;




s=Math.min
(l,
Math.max(s,c('ChatConfig').get('min_top_friends')||0));


if(s!==this._numTopFriends||
t.length!==this._groups.length||
p.length!==this._nearby.length||
u.length!==this._adminedPages.length){
this._groups=t;
this._numTopFriends=s;
this._nearby=p;
this._adminedPages=u;
this._pageListModule=r;
if(m){
this._renderOrderedList();}else 

this._render();}}.


bind(this));};

k.prototype.

_renderOrderedList=function(){'use strict';
if(!this._isVisible||this._isHovering)
return;


c('PresenceOrderedList').getSorted(this._numTopFriends,function(l){
var m=c('WorkModeConfig').is_work_user?
c('PresenceOrderedList').getAllSorted(l.concat(this._nearby)):
c('PresenceOrderedList').getAvailableSorted(l.concat(this._nearby)),
n=l.filter
(function(o){return !this._nearby||this._nearby.indexOf(o)===-1;}.bind(this));


c('ReactDOM').render
(c('React').createElement(c('ChatSidebarOrderedList.react'),
{availableUsers:m,
scrollContainer:this._scrollContainer,
topUsers:n,
groups:this._groups,
nearby:this._nearby,
adminedPages:this._adminedPages,
pageListModule:this._pageListModule,
isSidebar:this._isSidebar}),

this._orderedList);


this.inform('render');}.
bind(this));};
k.prototype.




_render=function(){'use strict';
this._render=
c('debounceAcrossTransitions')(this._renderOrderedList.bind(this),300);

this._render();};
k.prototype.




show=function(){'use strict';
if(this._isVisible)
return;

this._isVisible=true;

c('CSS').show(this._scrollableOrderedList||this._root);

this._render();

this.inform('show');};
k.prototype.




isVisible=function(){'use strict';
return this._isVisible;};
k.prototype.






setScrollContainer=function(l){'use strict';
if(c('DOM').contains(l,this._root))
this._scrollContainer=l;};




f.exports=k;}),null);

/** js/mercury/clients/sidebar/components/ChatSidebarPageItem.react.js */





__d('ChatSidebarPageItem.react',['cx','XUIBadge.react','Layout.react','Link.react','React','SplitImage.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,



k=c('Layout.react').Column,
l=c('Layout.react').FillColumn,






m=9;i=babelHelpers.inherits













(n,c('React').Component);j=i&&i.prototype;n.prototype.


render=function(){

return (c('React').createElement('div',{className:"_55ln",rel:'ignore'},
c('React').createElement('div',{className:"_55lp"},
c('React').createElement(c('Layout.react'),null,
c('React').createElement(k,null,
c('React').createElement(c('Link.react'),{href:this.props.href},
c('React').createElement('div',{className:"_55lq"},
c('React').createElement(c('SplitImage.react'),
{size:this.props.imageSize,
srcs:this.props.image})))),




c('React').createElement(l,null,
c('React').createElement(c('Link.react'),
{className:"_224p",
href:this.props.href},
c('React').createElement('div',{className:"_55lr"},
this.props.name))),



c('React').createElement(k,null,
c('React').createElement('div',{className:"_5bon"},
this.renderUnreadCount(),
this.renderPageActionMenu()))))));};






n.prototype.

renderUnreadCount=function(){
var o=this.props.unreadCount;
if(!o)
return null;



return (c('React').createElement(c('XUIBadge.react'),
{className:"_4fsv",
count:o,
maxcount:m,
type:'regular'}));};


n.prototype.

renderPageActionMenu=function(){
var o=this.props.popoverMenu;

return (c('React').createElement(o,
{messageEligible:this.props.messageEligible,
pageID:this.props.pageID,
ref:this.props.pageRef}));};


function n(){i.apply(this,arguments);}


f.exports=n;}),null);

/** js/mercury/clients/sidebar/components/ChatSidebarPageListContainer.react.js */





__d('ChatSidebarPageListContainer.react',['cx','ChatSidebarPageItem.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits










(k,c('React').Component);j=i&&i.prototype;k.prototype.


render=function(){

return (c('React').createElement('ul',{className:"_4kqp"},
this.props.adminedPages.map(function(l){return this.$ChatSidebarPageListContainer_renderPage(l);}.bind(this))));};


k.prototype.

$ChatSidebarPageListContainer_renderPage=function(l){

return (c('React').createElement('li',
{className:"_12um _42fz",

'data-id':l.id,
key:l.id},
c('React').createElement(c('ChatSidebarPageItem.react'),
{href:l.uri,
imageSize:l.imgSize,
image:l.imgSrc,
messageEligible:l.messageEligible,
name:l.name,
pageID:l.id,
pageRef:l.ref,
popoverMenu:l.popoverMenu,
unreadCount:l.badgingCount})));};



function k(){i.apply(this,arguments);}


f.exports=k;}),null);
