if (self.CavalryLogger) { CavalryLogger.start_js(["+AdK6"]); }

/** js/dock/nub/NubController.js */




__d('NubController',['ArbiterMixin','Dock'],(function a(b,c,d,e,f,g){









function h(){}

Object.assign(h.prototype,c('ArbiterMixin'),



{init:function i(j){
this.el=j;
c('Dock').registerNubController(j,this);
return this;},





buttonContentChanged:function i(){
this.inform('nub/button/content-changed');},





flyoutContentChanged:function i(){
this.inform('nub/flyout/content-changed');},





hide:function i(){
c('Dock').hide(this.el);},





show:function i(){
c('Dock').show(this.el);}});



f.exports=h;}),null);

/** js/chat/BuddyListNub.js */





__d('BuddyListNub',['csx','cx','fbt','Arbiter','AsyncRequest','AvailableList','BootloadedComponent.react','ChannelConnection','ChatOptions','ChatSidebarActions','ChatSidebarStore','ChatSidebarVisibility','ChatVisibility','CSS','Dock','DOM','Event','intlNumUtils','JSLogger','JSResource','KeyEventController','Keys','NubController','OrderedFriendsList','Parent','PresencePrivacy','PresenceStatus','PresenceUtil','React','ReactDOM','Run','SidebarType','Style','Toggler','emptyFunction'],(function a(b,c,d,e,f,g,h,i,j){var k,l,






































m=40,
n=253,
o='285px',

p=c('JSLogger').create('buddylist_nub');k=babelHelpers.inherits

(q,c('NubController'));l=k&&k.prototype;
function q(r,s,t,u){'use strict';
l.constructor.call(this);

l.init.call(this,r);

this.root=r;
this.orderedList=s;


this.button=c('DOM').find(r,'a.fbNubButton');
this.unreadCount=
c('DOM').find(r,"span._5ayx");
this.label=c('DOM').find(r,'span.label');
this.body=c('DOM').scry(r,'div.fbNubFlyoutBody')[0];
this.container=
c('Parent').bySelector(r,"._56ox");

var v=c('DOM').find(r,'div.fbNubFlyoutTitlebar');
c('Toggler').createInstance(v).setSticky(false);
c('Toggler').createInstance(r).setSticky(true);

if(u)
c('Run').onAfterLoad(function(){
this.dropdown=c('ReactDOM').render
(c('React').createElement(c('BootloadedComponent.react'),
{bootloadPlaceholder:c('React').createElement('span',null),
bootloadLoader:c('JSResource')('ChatSidebarDropdown.react').__setRef('BuddyListNub'),
onToggleSidebar:function w(){},
sidebarType:c('SidebarType').BUDDYLIST}),

u);}.

bind(this));



s.subscribeOnce
('render',
this.flyoutContentChanged.bind(this));

c('Run').onAfterLoad(function(){
var w=c('DOM').find
(v,
"div._4k48");

if(w)
c('ReactDOM').render
(c('React').createElement(c('BootloadedComponent.react'),
{bootloadPlaceholder:c('React').createElement('span',null),
bootloadLoader:c('JSResource')('ChatSidebarComposeLink.react').__setRef('BuddyListNub'),
className:"_3a-4"}),

w);


var x=c('DOM').find
(this.button,
"div._1us9");

if(x)
c('ReactDOM').render
(c('React').createElement(c('BootloadedComponent.react'),
{bootloadPlaceholder:c('React').createElement('span',null),
bootloadLoader:c('JSResource')('ChatSidebarComposeLink.react').__setRef('BuddyListNub'),
className:"_3a-4"}),

x);


var y=c('DOM').find
(this.button,
"div._1usa");

if(y)
c('ReactDOM').render
(c('React').createElement(c('BootloadedComponent.react'),
{bootloadPlaceholder:c('React').createElement('span',null),
bootloadLoader:c('JSResource')('ChatSidebarDropdown.react').__setRef('BuddyListNub'),
onToggleSidebar:function z(){},
sidebarType:c('SidebarType').BUDDYLIST_NUB}),

y);}.


bind(this));


s.setScrollContainer(this.body);


c('AvailableList').subscribe
('buddylist/availability-changed',
this._updateCount.bind(this));



c('Arbiter').subscribe
('chat/connect',
function(){return this._handleConnect(true);}.bind(this));

c('Arbiter').subscribe('chat/option-changed',function(w,x){
if(x.name=='hide_groups'){
this.onResize();}else
if(x.name==='hide_buddylist')
x.value?this.hide():this.show();}.

bind(this));

c('ChannelConnection').subscribe
(c('ChannelConnection').CONNECTED,
function(){return this._updateView();}.bind(this));

c('ChannelConnection').subscribe
(c('ChannelConnection').SHUTDOWN,
function(){return this._updateView();}.bind(this));

c('ChannelConnection').subscribe
(c('ChannelConnection').RECONNECTING,
function(){return this._updateView();}.bind(this));

c('ChannelConnection').subscribe
([c('ChannelConnection').MUTE_WARNING,
c('ChannelConnection').UNMUTE_WARNING],
function(){return this._updateView();}.bind(this));



this.subscribe('show',this.onShow.bind(this));
this.subscribe('hide',this.onHide.bind(this));
this.subscribe('resize',this.onResize.bind(this));


c('Event').listen(r,'keydown',this._onKeyDown.bind(this));
c('Event').listen(this.button,'click',this.onButtonClick.bind(this));
c('KeyEventController').registerKey('q',function(event){
if(!(this._isOpen)){

this.onButtonClick();
this.show();}

event.prevent();}.
bind(this));


c('Arbiter').subscribe('minisidebar/show',this.hide.bind(this));
c('Arbiter').subscribe('sidebar/visibility',function(w,x){
if(x){
this.hide();}else 

this._onSidebarHide();}.

bind(this));

c('Style').set(this.body,'min-height',o);
c('Arbiter').subscribe('sidebar/typeahead/active',function(w,x){
if(x){
this._typeaheadActive=true;
c('CSS').hide(this.body.parentNode);
this.orderedList.hide();
this.onResize();}else{

this._typeaheadActive=false;
this.onResize();
c('CSS').show(this.body.parentNode);
this.orderedList.show();}}.

bind(this));

c('OrderedFriendsList').getList(function(w){
if(c('ChatSidebarStore').isEnabled()&&
c('ChatSidebarStore').getVisibleType()===c('SidebarType').BUDDYLIST&&
!c('ChatOptions').getSetting('hide_buddylist')&&
!c('ChannelConnection').disconnected()&&
!c('PresencePrivacy').isUserOffline()&&
w.length>0)
this.show();


c('Event').listen(v,'click',function(x){
if(c('CSS').matchesSelector(x.target,".titlebarTextWrapper"))
this._syncHideBuddylist(true);}.

bind(this));

this._updateView();

p.log('buddylist_initialized');}.
bind(this));}
q.prototype.

_handleVisibilityChange=function(){'use strict';
this._updateView();

if(!c('ChatVisibility').isOnline())
this.hide();};

q.prototype.








_updateView=function(r){'use strict';

var s,
t;
if(!c('ChatVisibility').isOnline()){

s=j._(["{Chat} (Off)","9f2733b71747f8446bb729ab1ed398ef"],[j.param('Chat',j._(["Chat","9e7dfbdd4a6f9e27a5ad36f33361db67"]))]);}else
if(c('ChannelConnection').disconnected()){

s=j._(["{Chat} (Disconnected)","b1783e2da0c6af20e1522c6eb2ef476c"],[j.param('Chat',j._(["Chat","9e7dfbdd4a6f9e27a5ad36f33361db67"]))]);}else{

var u=c('PresenceStatus').getOnlineCount();

if(u){
var v=c('DOM').create
('span',
{className:'count'},
'('+
c('intlNumUtils').formatNumberWithThousandDelimiters(u)+
')');

s=j._({"*":["{Chat} {number-available}","5c14370095c91d9c488db86050437b5e"]},[j.param('Chat',j._(["Chat","9e7dfbdd4a6f9e27a5ad36f33361db67"])),
j.param('number-available',v,[0,u])]);}else{


s=j._(["Chat","9e7dfbdd4a6f9e27a5ad36f33361db67"]);
t=true;}}



this._setPresenceIcon();
this._setUnread();
this._setLabel(s,t);
this.buttonContentChanged();};
q.prototype.

_setPresenceIcon=function(){'use strict';
c('CSS').conditionClass
(this.root,
'offline',
!c('ChatVisibility').isOnline()||c('ChannelConnection').disconnected());};

q.prototype.




onButtonClick=function(){'use strict';




if(!c('ChatSidebarStore').isInitialized())
return true;


c('ChatSidebarVisibility').shouldShowSidebarIgnoreEnabled(null,function(r,s){
var t=c('ChatSidebarStore').isEnabled();
if(!t&&r){
c('ChatSidebarActions').enable(c('SidebarType').SIDEBAR);}else 

c('ChatSidebarActions').show
(t&&r?c('SidebarType').SIDEBAR:c('SidebarType').BUDDYLIST);});};



q.prototype.




onHide=function(){'use strict';
this._isOpen=false;

if(this._buddyListRenderSubscription){
this.orderedList.unsubscribe(this._buddyListRenderSubscription);
this._buddyListRenderSubscription=null;}

this._hideBuddyList();

c('Arbiter').inform('buddylist/hide');};
q.prototype.





_onKeyDown=function(event){'use strict';
var r=c('Event').getKeyCode(event);


if(r===c('Keys').ESC&&
!c('CSS').hasClass(this.root,'menuOpened')){
this.hide();
return false;}else
if(r==c('Keys').RETURN)
c('ChatSidebarVisibility').shouldShowSidebarIgnoreEnabled(null,function(s,t){
c('ChatSidebarActions').enable
(s?c('SidebarType').SIDEBAR:c('SidebarType').BUDDYLIST);});};



q.prototype.

_onSidebarHide=function(event){'use strict';
c('OrderedFriendsList').getList(function(r){
if(c('ChatSidebarStore').isEnabled()&&
!c('ChatOptions').getSetting('hide_buddylist')&&
!c('ChannelConnection').disconnected()&&
!c('PresencePrivacy').isUserOffline()&&
r.lenth>0){
this.show();}else 

this.hide();}.

bind(this));};
q.prototype.

onResize=function(){'use strict';



var r=!this._typeaheadActive?
n:
c('Dock').getMaxFlyoutHeight(this.root)-60;
c('Arbiter').inform
('buddyList/resized',
r,
c('Arbiter').BEHAVIOR_PERSISTENT);

if(this._typeaheadActive){
c('Style').set(this.body,'max-height','none');}else 

c('Style').set(this.body,'max-height',o);


var s=Math.max(250,r),
t=Math.floor(s/m);
this.orderedList.setNumTopFriends(t);};
q.prototype.

_showBuddyList=function(){'use strict';


this._buddyListRenderSubscription=
this.orderedList.subscribe
('render',
function(){
if(c('Style').get(this.body,'height')!=o)
c('Style').set(this.body,'height',o);}.

bind(this));

this.orderedList.show();
p.bump('buddylist_show');};
q.prototype.

_hideBuddyList=function(){'use strict';
this.orderedList.hide();
p.bump('buddylist_hide');};
q.prototype.




onShow=function(){'use strict';
this._isOpen=true;

if(c('ChannelConnection').disconnected()){
c('ChannelConnection').reconnect();
this._showBuddyList();}else 

c('ChatVisibility').goOnline(this._showBuddyList.bind(this));


this._syncHideBuddylist(false);};
q.prototype.








_setLabel=function(r,s){'use strict';
var t=this.label.textContent||this.label.innerText;

if(t!==r){
var u=this.label.cloneNode(true);
c('DOM').setContent(u,r);
c('DOM').replace(this.label,u);
this.label=u;}


this.throbber&&c('CSS').conditionShow(this.throbber,!!s);};
q.prototype.

_setUnread=function(r){'use strict';
c('CSS').conditionShow(this.unreadCount,!!r);};
q.prototype.





_updateCount=function(){'use strict';
this._updateView();};
q.prototype.

_syncHideBuddylist=function(r){'use strict';
c('ChatOptions').setSetting('hide_buddylist',r,'buddylist');
new (c('AsyncRequest'))('/ajax/chat/settings.php').
setHandler(c('emptyFunction')).
setErrorHandler(c('emptyFunction')).
setData
({hide_buddylist:r,
window_id:c('PresenceUtil').getSessionID()}).

setAllowCrossPageTransition(true).
send();};



c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(r,s){
s.buddylist_visible=
c('ChatSidebarStore').getVisibleType()===c('SidebarType').BUDDYLIST;});



f.exports=q;}),null);

/** js/work/isInFocusMode.js */






__d('isInFocusMode',['WorkFocusModeController'],(function a(b,c,d,e,f,g){

var h=c('WorkFocusModeController').WorkFocusMode,

i=function j(k){
return !!(h&&h.currentViewerInFocusMode(k));};


f.exports=i;}),null);

/** js/chat/ChatUnreadCount.js */






__d('ChatUnreadCount',['ChatDispatcher','ChatUnreadCountActionTypes','Map','MercuryIDs','MercurySingletonProvider','MercuryThreadInformer','MercuryThreads','MercuryUnreadState','isInFocusMode'],(function a(b,c,d,e,f,g){

'use strict';h.















getForFBID=function(j){
return i.getForFBID(j);};
h.

get=function(){
return i.get();};








function h(j){
this.$ChatUnreadCount_fbid=j;
this.$ChatUnreadCount_threadInformer=c('MercuryThreadInformer').getForFBID(j);
this.$ChatUnreadCount_threads=c('MercuryThreads').getForFBID(j);
this.$ChatUnreadCount_unreadCounts=new (c('Map'))();
this.$ChatUnreadCount_unreadState=c('MercuryUnreadState').getForFBID(j);
this.setupSubscriptions();}
h.prototype.







getUnreadCountForUID=function(j){
if(!j)
return null;

var k=c('MercuryIDs').getThreadIDFromUserID(j);
if(!this.$ChatUnreadCount_unreadState.getIsThreadUnread(k)){
this.$ChatUnreadCount_unreadCounts['delete'](j);
return 0;}

var l=this.$ChatUnreadCount_threads.getOrFetch(k),
m=l&&l.unread_count;
this.$ChatUnreadCount_unreadCounts.set(j,m);
if(c('isInFocusMode')(k))
return 0;

return m;};
h.prototype.

setupSubscriptions=function(){
this.$ChatUnreadCount_threadInformer.subscribe
('threads-updated',
function(j,k){
var l=Object.keys(k).some(function(m){
var n=c('MercuryIDs').getUserIDFromThreadID(m);
if(!n)
return false;

var o=this.getUnreadCountForUID(n),
p=this.$ChatUnreadCount_unreadCounts.get(n)||0;
return o!==p;}.
bind(this));
if(l)
c('ChatDispatcher').dispatch
({type:c('ChatUnreadCountActionTypes').COUNT_UPDATED});}.


bind(this));

this.$ChatUnreadCount_threadInformer.subscribe
('unread-updated',
function(){return c('ChatDispatcher').dispatch
({type:c('ChatUnreadCountActionTypes').COUNT_UPDATED});});};





var i=new (c('MercurySingletonProvider'))(h);

f.exports=h;}),null);

/** js/mercury/clients/sidebar/components/ChatSidebarComposeLink.react.js */






__d('ChatSidebarComposeLink.react',['fbt','ChatOpenTabEventLogger','FantaTabActions','Link.react','MercuryThreads','React','TooltipData'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,




k=c('MercuryThreads').get();i=babelHelpers.inherits





(l,c('React').Component);j=i&&i.prototype;
function l(m){
j.constructor.call(this,m);}
l.prototype.

render=function(){
var m=h._(["New Message","d522d4568ec316e8f10b351c85f5ef31"]);






return (c('React').createElement(c('Link.react'),babelHelpers['extends']
({className:this.props.className,
href:'#',
onClick:this.$ChatSidebarComposeLink_handleClick},
c('TooltipData').propsFor(m,'below'))));};


l.prototype.

$ChatSidebarComposeLink_handleClick=function(m){
var n=k.createNewLocalThreadGenerateID();
c('FantaTabActions').openTab(n);
c('ChatOpenTabEventLogger').log('sidebar');

m.preventDefault();};



f.exports=l;}),null);

/** js/mercury/clients/messenger/MessengerSearchSource.js */







__d('MessengerSearchSource',['ChatSearchSource','MercuryConfig','MercuryIDs','MercuryParticipants','MercuryParticipantTypes','MercurySingletonProvider','MessengerEnvironment','MessengerTypeaheadUtils','SearchableEntry','emptyFunction','requireWeak'],(function a(b,c,d,e,f,g){

'use strict';var h,i,














j=50,
k=c('MessengerEnvironment').messengerui;h=babelHelpers.inherits

(l,c('ChatSearchSource'));i=h&&h.prototype;l.

getForFBID=function(n){
return m.getForFBID(n);};
l.

get=function(){
return m.get();};





function l(n){
i.constructor.call(this,
{queryRequests:[{uri:'/ajax/mercury/composer_query.php'}]});

this.$MessengerSearchSource_defaultEntries=[];
this.$MessengerSearchSource_fbid=n;}
l.prototype.

bootstrapImpl=function(n){




c('requireWeak')('OrderedFriendsList',function(p){
return (p.getSearchableEntries
(j,
function(q){
this.$MessengerSearchSource_defaultEntries=q;
i.addLocalEntries.call(this,q);}.
bind(this)));}.bind(this));



var o=c('MercuryIDs').getParticipantIDFromUserID(this.$MessengerSearchSource_fbid);
c('MercuryParticipants').get(o,function(p){
i.addLocalEntries.call(this,
[new (c('SearchableEntry'))
({uniqueID:
p.fbid?p.fbid.toString():p.id,
title:p.name,
type:c('MercuryParticipantTypes').FRIEND,
photo:p.big_image_src||p.image_src,
uri:p.href,
auxiliaryData:{isMessengerUser:p.is_messenger_user}})]);}.


bind(this));
i.bootstrapImpl.call(this,c('emptyFunction'));
n();};
l.prototype.

searchImpl=function(n,o,p){
p=p||{};
if(n===''&&p.showDefaultEntries){
o(this.$MessengerSearchSource_defaultEntries,n);
var q=p&&p.onQueryFinished;
q&&q(n);
return;}

p.threadLimit=c('MercuryConfig').MaxThreadResults;
i.searchImpl.call(this,
n,
this.$MessengerSearchSource_appendSearchEntry(o,p),
p);};

l.prototype.

$MessengerSearchSource_appendSearchEntry=function(n,o){
return k&&o&&o.showThreadSearchEntry?
function(p,q){
var r=
c('MessengerTypeaheadUtils').getMessageSearchEntry(q);
if(r){
n([r].concat(p),q);}else 

n(p,q);}:


n;};



var m=new (c('MercurySingletonProvider'))(l);

f.exports=l;}),null);

/** js/mercury/clients/messenger/components/search/MessengerSearchTypeahead.react.js */






__d('MessengerSearchTypeahead.react',['cx','fbt','ix','AbstractTypeahead.react','Bootloader','Image.react','MercuryIDs','MercuryThreadIDMap','MercuryThreads','MercuryTypeaheadConstants','MercuryVanityIDMap','MessengerActions','MessengerSearchSource','React','TypeaheadNavigation'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,





m=c('MercuryThreadIDMap').get(),
n=c('MercuryThreads').get(),











o=c('React').PropTypes,

p=
j("86933"),
q=100,

r=null,
s=null;k=babelHelpers.inherits

(t,c('React').PureComponent);l=k&&k.prototype;function t(){var v,w;for(var x=arguments.length,y=Array(x),z=0;z<x;z++)y[z]=arguments[z];return w=(v=l.constructor).call.apply(v,[this].concat(y)),u.call(this),w;}t.prototype.




















componentWillMount=function(){

var v=function x(y,z,aa){
var ba=y.indexOf(z),
ca=ba==-1?y.length-1:ba-1;
aa(ca==-1?y[y.length-1]:y[ca]);},

w=function x(y,z,aa){
var ba=y.indexOf(z)+1;
aa(ba==y.length?y[0]:y[ba]);};


v=c('TypeaheadNavigation').moveDown;
w=c('TypeaheadNavigation').moveUp;

this.$MessengerSearchTypeahead_moveUp=function(x){for(var y=arguments.length,z=Array(y>1?y-1:0),aa=1;aa<y;aa++)z[aa-1]=arguments[aa];return v.apply(undefined,
[s.orderEntries(x,this.props.queryString)].concat
(z));}.bind(this);

this.$MessengerSearchTypeahead_moveDown=function(x){for(var y=arguments.length,z=Array(y>1?y-1:0),aa=1;aa<y;aa++)z[aa-1]=arguments[aa];return w.apply(undefined,
[s.orderEntries(x,this.props.queryString)].concat
(z));}.bind(this);};

t.prototype.

render=function(){
var v=this.props.isFacebookChat?i._(["Search","f89f7492bc68ccee59e4db3afec1bdf0"]):i._(["Search Messenger","374c9e9c7edbbaa7740aa2e4ea327bda"]);








return (c('React').createElement('div',{className:"_3rh8"},
c('React').createElement(c('AbstractTypeahead.react'),
{autoHighlight:this.props.isFacebookChat,
blurOnWindowBlur:false,
className:"_5iwm"+


(this.props.isFocused||!!this.props.queryString?' '+"_5iwn":'')+(' '+"_150g")+

(this.props.hideResults?' '+"_1a03":''),

disabled:this.props.hideResults,
inputClassName:"_3rhb",
navigation:
{moveUp:this.$MessengerSearchTypeahead_moveUp,
moveDown:this.$MessengerSearchTypeahead_moveDown},

onBlur:this.props.onBlur,
onChange:this.$MessengerSearchTypeahead_handleChange,
onFocus:function(){var w;
this.$MessengerSearchTypeahead_handleInteraction();
(w=this.props).onFocus.apply(w,arguments);}.
bind(this),
onMouseOver:this.$MessengerSearchTypeahead_handleInteraction,
onClick:this.$MessengerSearchTypeahead_handleInteraction,
onSelectAttempt:this.$MessengerSearchTypeahead_handleSelect,
placeholder:v,
presenter:
{ViewRenderer:r,
alwaysVisibleOnFocus:true,
extraRendererProps:
{className:"_11_d",
hasHoverState:this.props.isFacebookChat,
isLoading:this.state.isLoading,
onScrollIntoView:this.props.onScrollIntoView,
viewer:this.props.viewer},

maxEntries:this.props.maxEntries||q,
sortEntries:this.$MessengerSearchTypeahead_sortEntries,
useLayer:false},

queryString:this.props.queryString,
role:'search',
searchSource:c('MessengerSearchSource').getForFBID(this.props.viewer),
searchSourceOptions:
{onQueryFinished:this.$MessengerSearchTypeahead_handleQueryFinished,
onQueryStarted:this.$MessengerSearchTypeahead_handleQueryStarted,
showDefaultEntries:!this.props.isFacebookChat,
showThreadSearchEntry:
!this.props.isFacebookChat&&!!this.props.queryString},

selectOnTab:true,
spellCheck:false,
showEntriesOnFocus:!this.props.isFacebookChat}),

c('React').createElement(c('Image.react'),
{onMouseDown:this.props.onClear,
className:
(!this.props.queryString?"hidden_elem":'')+(' '+"_2xme"),


src:p})));};



t.propTypes={hideResults:o.bool,isFacebookChat:o.bool,isFocused:o.bool,maxEntries:o.number,onBlur:o.func,onChange:o.func,onClear:o.func,onFocus:o.func,onSelect:o.func.isRequired,onScrollIntoView:o.func,queryString:o.string,viewer:o.string.isRequired};var u=function v(){this.state={isLoading:false,orderable:!!s};this.

$MessengerSearchTypeahead_handleChange=function(){var w;
this.setState({isLoaded:false});
(w=this.props).onChange.apply(w,arguments);}.
bind(this);this.

$MessengerSearchTypeahead_handleInteraction=function(){
if(!this.state.orderable)
c('Bootloader').loadModules
(["MessengerTypeaheadView.react","MessengerTypeaheadUtils"],
function(w,x){
r=w;
s=x;
this.setState({orderable:true});}.
bind(this),'MessengerSearchTypeahead.react');}.


bind(this);this.

$MessengerSearchTypeahead_handleQueryStarted=function(w){
if(w===this.props.queryString)
this.setState({isLoading:true});}.

bind(this);this.

$MessengerSearchTypeahead_handleQueryFinished=function(w){
if(w===this.props.queryString)
this.setState
({isLoading:false,
isLoaded:true});}.


bind(this);this.

$MessengerSearchTypeahead_sortEntries=function(w){
return s?
s.sortEntries
(w,
this.props.queryString):

w;}.
bind(this);this.

$MessengerSearchTypeahead_handleSelect=function(w){
var x=w.getUniqueID(),
y=w.getType(),
z=w.getAuxiliaryData().alias;
if(z)
c('MercuryVanityIDMap').set
(z,
c('MercuryIDs').getParticipantIDFromUserID(x));



if(y===c('MercuryTypeaheadConstants').SEARCH_TYPE){
c('MessengerActions').changeQueryAll(this.props.queryString);}else
if(y===c('MercuryTypeaheadConstants').THREAD_TYPE){
m.getClientIDFromServerID
(x,
function(aa){
this.props.onSelect(aa,y);}.
bind(this));}else 


n.getThreadMeta
(c('MercuryIDs').getThreadIDFromUserID(x),
function(aa){
this.props.onSelect(aa.thread_id,y);}.
bind(this));}.


bind(this);};


f.exports=t;}),null);

/** js/chat/typeahead/ChatTypeaheadWrapper.react.js */






__d('ChatTypeaheadWrapper.react',['cx','Arbiter','Bootloader','ChatConfig','ChatOpenTabEventLogger','ChatSidebarComposeLink.react','ChatSidebarSections','ChatSidebarSheet.react','ChatTypeaheadConstants','FantaTabActions','MessengerSearchTypeahead.react','React','Run','emptyFunction','getActiveElement'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,


















k=40,
l=c('ChatConfig').get('divebar_rounded_profile',false);

function m(o){
c('Arbiter').inform('sidebar/typeahead/active',o);}
i=babelHelpers.inherits








(n,c('React').Component);j=i&&i.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=j.constructor).call.apply(o,[this].concat(r)),this.
state=
{height:0,
value:'',
isSearching:false,
dropdownComponent:null},p;}n.prototype.


componentDidMount=function(){
if(this.props.isSidebar){
c('Arbiter').subscribe('sidebar/resized',function(o,p){
this.setState({height:p});}.
bind(this));
c('Run').onAfterLoad(function(){
c('Bootloader').loadModules
(["ChatSidebarDropdown.react","SidebarType","ChatSidebarActions"],
function(o,p,q){
this.setState
({dropdownComponent:
c('React').createElement(o,
{sidebarType:p.SIDEBAR,
onToggleSidebar:q.disable})});}.


bind(this),'ChatTypeaheadWrapper.react');}.

bind(this));}else 

c('Arbiter').subscribe('buddyList/resized',function(o,p){
this.setState({height:p});}.
bind(this));};

n.prototype.

componentWillUpdate=function(o,p){
if(p.isSearching!==this.state.isSearching)
m(p.isSearching);};

n.prototype.

render=function(){
var o=this.state.height!=null?
Math.floor

((this.state.height-k*2)/
k):

null;


return (c('React').createElement('div',{className:!l?"squareProfile":''},
c('React').createElement(c('ChatSidebarSheet.react'),{className:'fbChatSidebarMessage'}),
c('React').createElement(c('MessengerSearchTypeahead.react'),
{isFacebookChat:true,
isFocused:true,
maxEntries:o,
queryString:this.state.value,
viewer:this.props.id,
onBlur:function(){return this.setState({isSearching:false,value:''});}.bind(this),
onChange:function(p){
var q=p.target.value;
this.setState
({isSearching:q!=='',
value:q});}.

bind(this),
onClear:c('emptyFunction'),
onFocus:c('emptyFunction'),
onScrollIntoView:c('emptyFunction'),
onSelect:function(p,q){
c('getActiveElement')().blur();
if(q===c('ChatTypeaheadConstants').MEETING_ROOM_PAGE_TYPE){
c('Bootloader').loadModules
(["MercuryIDs","goURI"],
function(r,s){
this.setState({isSearching:false,value:''});
var t=r.getUserIDFromThreadID(p);
s('/'+t);}.
bind(this),'ChatTypeaheadWrapper.react');}else{


c('FantaTabActions').openTab(p,q);
c('ChatOpenTabEventLogger').logByType
(q,
c('ChatSidebarSections').TYPEAHEAD,
p);}}.


bind(this)}),

this.props.isSidebar?
c('React').createElement('div',{className:"_531b"},
this.state.dropdownComponent,
c('React').createElement(c('ChatSidebarComposeLink.react'),
{className:"_3a-4 _5q85"})):



null));};





f.exports=n;}),null);

/** js/chat/typeahead/ChatTypeaheadCore.js */






__d('ChatTypeaheadCore',['ChatTypeaheadWrapper.react','React','ReactDOM'],(function a(b,c,d,e,f,g){

'use strict';





var h=

{init:function i
(j,
k,
l){

c('ReactDOM').render
(c('React').createElement(c('ChatTypeaheadWrapper.react'),
{id:k,
isSidebar:l}),

j);}};




f.exports=h;}),null);

/** js/dock/DockTabsViewportFantaTabUtils.js */





__d('DockTabsViewportFantaTabUtils',[],(function a(b,c,d,e,f,g){

'use strict';














var h=269;

function i(){
return h+1;}


function j(m){
return Math.floor(m/h);}


function k
(m){

if(!m)
return null;


var n=m.fantaTabModelStateGetter;
return n?n():null;}


function l(m){
return m?m.size:0;}


f.exports=
{getTabCountToFitWidth:j,
getMinRequiredWidthForFirstFantaTab:i,
getFantaTabModelFromCallbacks:k,
getNumFantaTabsFromModel:l};}),null);

/** js/dock/DockTabsViewportPinnedConversationTabUtils.js */





__d('DockTabsViewportPinnedConversationTabUtils',[],(function a(b,c,d,e,f,g){

'use strict';




















var h=496+9+2,

i=210+9+2,

j=52;

function k(){
return h;}


function l(){
return i;}


function m(){
return j;}


function n(r){

return (r.getIsRaised()?
k():
l());}



function o(){




return (k()+
j);}



function p
(r){
var s=


r||{},t=s.pinnedConvoTabStateGetter;

return t?t():null;}


function q
(r){


return (r?
r.getTotalTabCount():
0);}



f.exports=
{getRaisedPinnedConvoTabWidth:k,
getLoweredPinnedConvoTabWidth:l,
getPinnedConvoSelectorWidth:m,
getPinnedConvoTabWidth:n,
getMinRequiredWidthForFirstConvoTab:o,
getPinnedConvoTabsStateFromCallbacks:p,
getNumPinnedConvoTabsFromModel:q};}),null);

/** js/dock/DockTabsViewportCalculator.js */








__d('DockTabsViewportCalculator',['csx','Arbiter','DataStore','Dock','DockTabsViewportFantaTabUtils','DockTabsViewportPinnedConversationTabUtils','DOM','Event','FullScreen','PinnedConversationNubsConfig','SubscriptionsHandler','Vector','ViewportBounds','ge','getViewportDimensions','setImmediate'],(function a(b,c,d,e,f,g,h){

'use strict';



















var i=50,

j=35,
k=j,

l='dock-tab-viewport-inst',


m=c('DockTabsViewportFantaTabUtils').getMinRequiredWidthForFirstFantaTab,
n=c('DockTabsViewportFantaTabUtils').getFantaTabModelFromCallbacks,
o=c('DockTabsViewportFantaTabUtils').getNumFantaTabsFromModel,



p=c('DockTabsViewportPinnedConversationTabUtils').getMinRequiredWidthForFirstConvoTab,
q=c('DockTabsViewportPinnedConversationTabUtils').getNumPinnedConvoTabsFromModel,
r=c('DockTabsViewportPinnedConversationTabUtils').getPinnedConvoTabsStateFromCallbacks;



















function s(u){
return u?c('Vector').getElementDimensions(u).x:0;}


















function t(u){
this.$DockTabsViewportCalculatorImpl_fbRightDockRoot=u;

this.$DockTabsViewportCalculatorImpl_totalAvailableDockWidth=0;
this.$DockTabsViewportCalculatorImpl_maxEmployeeNubsWidth=0;

this.$DockTabsViewportCalculatorImpl_fantaTabCallbacks=null;
this.$DockTabsViewportCalculatorImpl_pinnedConvoTabCallbacks=null;

this.$DockTabsViewportCalculatorImpl_ignoreFullscreenTransitionResize=false;
this.$DockTabsViewportCalculatorImpl_attemptedResizeWhileFullScreen=false;

this.$DockTabsViewportCalculatorImpl_isInformingTests_FOR_TEST_ONLY=false;

this.$DockTabsViewportCalculatorImpl_handler=new (c('SubscriptionsHandler'))();
this.$DockTabsViewportCalculatorImpl_initResizeListeners();

this.$DockTabsViewportCalculatorImpl_recalculateTotalDockWidth();}
t.prototype.

$DockTabsViewportCalculatorImpl_initResizeListeners=function(){
var u=this.$DockTabsViewportCalculatorImpl_onResize.bind(this);
this.$DockTabsViewportCalculatorImpl_handler.addSubscriptions
(c('Event').listen(window,'resize',u),
c('Dock').subscribe('resize',u),
c('Arbiter').subscribeOnce
('sidebar/initialized',
u,
c('Arbiter').SUBSCRIBE_NEW),

c('FullScreen').subscribe('changed',function(){
if(c('FullScreen').isFullScreen()){




this.$DockTabsViewportCalculatorImpl_ignoreFullscreenTransitionResize=true;
this.$DockTabsViewportCalculatorImpl_attemptedResizeWhileFullScreen=false;}else{

this.$DockTabsViewportCalculatorImpl_ignoreFullscreenTransitionResize=false;
if(this.$DockTabsViewportCalculatorImpl_attemptedResizeWhileFullScreen){

c('setImmediate')(function(){
u();});

this.$DockTabsViewportCalculatorImpl_attemptedResizeWhileFullScreen=false;}}}.


bind(this)));};

t.prototype.

registerFantaTabCallbacks=function(u){
this.$DockTabsViewportCalculatorImpl_fantaTabCallbacks=u;};
t.prototype.

registerPinnedConvoTabCallbacks=
function(u){

this.$DockTabsViewportCalculatorImpl_pinnedConvoTabCallbacks=u;};
t.prototype.

forceRecalculateFBDockWidth=function(){
this.$DockTabsViewportCalculatorImpl_recalculateTotalDockWidth();
this.$DockTabsViewportCalculatorImpl_recalculateTabWidthDistribution
({forceRecalculateChatTabs:false,
pinnedConvoUpdateData:null});};

t.prototype.

forceRecalculateChatTabs=function(){



this.$DockTabsViewportCalculatorImpl_recalculateTabWidthDistribution
({forceRecalculateChatTabs:true,
pinnedConvoUpdateData:null});};

t.prototype.

forceRecalculatePinnedConvoTabs=
function(u){

this.$DockTabsViewportCalculatorImpl_recalculateTabWidthDistribution
({forceRecalculateChatTabs:true,
pinnedConvoUpdateData:u});};

t.prototype.

$DockTabsViewportCalculatorImpl_onResize=function(){


if(c('FullScreen').isFullScreen()||this.$DockTabsViewportCalculatorImpl_ignoreFullscreenTransitionResize){
this.$DockTabsViewportCalculatorImpl_attemptedResizeWhileFullScreen=true;
return;}


this.forceRecalculateFBDockWidth();};
t.prototype.

$DockTabsViewportCalculatorImpl_recalculateTabWidthDistribution=function(u){




var v=

u.forceRecalculateChatTabs,w=u.pinnedConvoUpdateData,x=




this.$DockTabsViewportCalculatorImpl_getDistributedDockWidths(),y=x.chatTabAvailableWidth,z=x.pinnedConvoTabAvailableWidth;

this.$DockTabsViewportCalculatorImpl_informChatTabAvailableWidthChanged
(y,
!!v);


this.$DockTabsViewportCalculatorImpl_informPinnedConvoTabAvailableWidthChanged
(z,
w);};

t.prototype.

$DockTabsViewportCalculatorImpl_informPinnedConvoTabAvailableWidthChanged=
function(u,
v){
var w=


this.$DockTabsViewportCalculatorImpl_pinnedConvoTabCallbacks||{},x=w.onAvailableWidthChanged;

x&&x
(u,
v);};

t.prototype.

$DockTabsViewportCalculatorImpl_informChatTabAvailableWidthChanged=
function(u,
v){
var w=


this.$DockTabsViewportCalculatorImpl_fantaTabCallbacks||{},x=w.onAvailableWidthChanged;

x&&x(u);};
t.prototype.

$DockTabsViewportCalculatorImpl_getNumChatOrFantaTabs=function(){
var u=
n(this.$DockTabsViewportCalculatorImpl_fantaTabCallbacks);
return o(u);};
t.prototype.

$DockTabsViewportCalculatorImpl_getMinRequiredWidthForFirstChatOrFantaTab=function(){
return m();};
t.prototype.

$DockTabsViewportCalculatorImpl_getDistributedDockWidths=function(){
var u=this.$DockTabsViewportCalculatorImpl_totalAvailableDockWidth,

v=
{chatTabAvailableWidth:u,
pinnedConvoTabAvailableWidth:0},

w=
{chatTabAvailableWidth:0,
pinnedConvoTabAvailableWidth:u},


x=this.$DockTabsViewportCalculatorImpl_getNumChatOrFantaTabs(),

y=r
(this.$DockTabsViewportCalculatorImpl_pinnedConvoTabCallbacks),

z=
q(y);

if(!y||z===0){
return v;}else
if(x===0)
return w;





var aa=
this.$DockTabsViewportCalculatorImpl_getMinRequiredWidthForFirstChatOrFantaTab();
if(u<=aa)
return v;





var ba=p(),

ca=
u-aa,
da=0;
if(ca<ba){



if(c('PinnedConversationNubsConfig').chatTabTypingPriority&&
y&&

(y.anyTabHasText()||
y.anyTabHasFocus())){


return w;}else 

return v;}else 



da=ba;




var ea=da,
fa=Math.max
(aa,
u-da);



return {chatTabAvailableWidth:fa,
pinnedConvoTabAvailableWidth:ea};};

t.prototype.

$DockTabsViewportCalculatorImpl_recalculateTotalDockWidth=function(){
this.$DockTabsViewportCalculatorImpl_totalAvailableDockWidth=this.$DockTabsViewportCalculatorImpl_getTotalAvailableDockWidth();
this.$DockTabsViewportCalculatorImpl_attemptSendTestInform_FOR_TEST_ONLY
('DockTabsViewportCalculator/recalcTotalDock_FOR_TEST_ONLY');};

t.prototype.


$DockTabsViewportCalculatorImpl_measureFBDockChildrenPreallocatedWidths=function(){



var u=this.$DockTabsViewportCalculatorImpl_fbRightDockRoot;
if(!u)

return {buddyListNubWidth:0,
employeeNubsWidth:0};


var v=s(u),




w=s
(c('DOM').find(u,"._56ox")),


x=s
(c('DOM').scry(u,"._56oy")[0]),


y=s
(c('DOM').scry(u,"._ph1")[0]),


z=Math.max
(v-w-x-y,
0);



return {buddyListNubWidth:w,
employeeNubsWidth:z};};

t.prototype.



$DockTabsViewportCalculatorImpl_getTotalAvailableDockWidth=function(){
var u=c('getViewportDimensions').withoutScrollbars().width;


u-=c('ViewportBounds').getLeft()+c('ViewportBounds').getRight();


u-=i;var v=




this.$DockTabsViewportCalculatorImpl_measureFBDockChildrenPreallocatedWidths(),w=v.buddyListNubWidth,x=v.employeeNubsWidth;

u-=w;

this.$DockTabsViewportCalculatorImpl_maxEmployeeNubsWidth=
Math.max(this.$DockTabsViewportCalculatorImpl_maxEmployeeNubsWidth,x);

u-=this.$DockTabsViewportCalculatorImpl_maxEmployeeNubsWidth;


u-=k;

return Math.max(u,0);};
t.prototype.




enableTestInforms_FOR_TEST_ONLY=function(){
this.$DockTabsViewportCalculatorImpl_isInformingTests_FOR_TEST_ONLY=true;};
t.prototype.

$DockTabsViewportCalculatorImpl_attemptSendTestInform_FOR_TEST_ONLY=function(u){
if(this.$DockTabsViewportCalculatorImpl_isInformingTests_FOR_TEST_ONLY)
c('Arbiter').inform(u);};

t.prototype.

getChatTabAvailableDockWidth_FOR_TEST_ONLY=function(){
return this.$DockTabsViewportCalculatorImpl_getDistributedDockWidths().chatTabAvailableWidth;};
t.prototype.

getPinnedConvoTabAvailableDockWidth_FOR_TEST_ONLY=function(){
return this.$DockTabsViewportCalculatorImpl_getDistributedDockWidths().pinnedConvoTabAvailableWidth;};
t.prototype.

getAvailableTotalWidth_FOR_TEST_ONLY=function(){
return this.$DockTabsViewportCalculatorImpl_totalAvailableDockWidth;};






f.exports=
{getInstance:function u
(v){

var w=c('ge')('pagelet_dock');

if(!w||!c('DOM').contains(w,v))






return null;


var x=c('DataStore').get(w,l);
if(x instanceof t)
return x;


var y=
c('DOM').scry(w,'.fbDockWrapperRight .fbDock')[0];

x=new t(y);
c('DataStore').set(w,l,x);
return x;}};}),
null);

/** js/fbpayments/dialog/FBPaymentsDialogContainerMount.js */





__d('FBPaymentsDialogContainerMount',['FBPaymentsDialogContainer.react','React','ReactDOM'],(function a(b,c,d,e,f,g){

'use strict';





var h=

{mount:function i(j){
c('ReactDOM').render(c('React').createElement(c('FBPaymentsDialogContainer.react'),null),j);}};



f.exports=h;}),null);

/** js/home/SidebarAppTickerResizer.js */




__d('SidebarAppTickerResizer',['cx','Animation','Arbiter','AsyncRequest','ChatSidebarActions','ChatSidebarStore','ChatSidebarVisibility','CSS','debounce','Event','SidebarType','SimpleDrag','TickerController','$','queryThenMutateDOM'],(function a(b,c,d,e,f,g,h){


















var i=1e-07,
j=1,


k=85,
l=171,
m=165,
n=300,
o=46,
p=90,
q=82,
r=150;


function s
(t,
u,
v,
w,
x){
'use strict';
this.$SidebarAppTickerResizer_ticker_pagelet=c('$')('pagelet_ticker');
this.$SidebarAppTickerResizer_apps_pagelet=c('$')('pagelet_canvas_nav_content');
this.$SidebarAppTickerResizer_sidebar=this.$SidebarAppTickerResizer_ticker_pagelet.parentNode;
this.$SidebarAppTickerResizer_ticker_enabled=w;
this.$SidebarAppTickerResizer_show_more_recommendations=x;



var y=parseInt(v,10);
if(!isNaN(y)){
if(y>k)
if(y!=this.$SidebarAppTickerResizer_getAppsGripperMaxHeight())
v=this.$SidebarAppTickerResizer_getAppsGripperMaxHeight()+'px';


this.$SidebarAppTickerResizer_setArrows(y);}




this.$SidebarAppTickerResizer_apps_pagelet.style.height=v;

this.$SidebarAppTickerResizer_initializeDrag(t,u);



if(v===null)


c('Arbiter').subscribe
('AppsDivebar/show-apps',
this.$SidebarAppTickerResizer_resizeTicker.bind(this));




if(!w){
this.$SidebarAppTickerResizer_closeTicker();
c('CSS').hide(t);}


c('Arbiter').subscribe
('ChatSidebarDropdown/closeTicker',
this.$SidebarAppTickerResizer_closeTicker.bind(this));


c('Arbiter').subscribe
('ChatSidebarDropdown/openTicker',
this.$SidebarAppTickerResizer_openTicker.bind(this));


c('Arbiter').subscribe
('sidebar/visibility',
function(z,aa){
if(aa)
this.$SidebarAppTickerResizer_showTicker();}.

bind(this));


this.$SidebarAppTickerResizer_onWindowResizeHandler=c('debounce')(this.$SidebarAppTickerResizer_resizeTicker.bind(this),200);
c('Event').listen(window,'resize',this.$SidebarAppTickerResizer_onWindowResizeHandler);
c('Arbiter').inform('Ticker/resized');}
s.prototype.

$SidebarAppTickerResizer_showTicker=function(){'use strict';

var t=Math.round(parseFloat(this.$SidebarAppTickerResizer_ticker_pagelet.style.height));
if(t<=i)
return;

c('TickerController').show(this.$SidebarAppTickerResizer_ticker_pagelet);};
s.prototype.

$SidebarAppTickerResizer_resizeTicker=function(t){'use strict';
c('queryThenMutateDOM')
(function(){
this.$SidebarAppTickerResizer_initializeHeights();}.
bind(this),
function(){

var u=
Math.round(parseFloat(this.$SidebarAppTickerResizer_ticker_pagelet.style.height));
if(u>Math.round(this.$SidebarAppTickerResizer_getTickerMaxPercentHeight())||
this.$SidebarAppTickerResizer_apps_height&&this.$SidebarAppTickerResizer_apps_height>j){

var v=this.$SidebarAppTickerResizer_apps_height/this.$SidebarAppTickerResizer_sidebar_height*100,
w=this.$SidebarAppTickerResizer_setTickerGripperHeight
(0,
this.$SidebarAppTickerResizer_getTickerMaxPercentHeight()-v);


if(!(t&&t.type==='resize'))
this.$SidebarAppTickerResizer_saveTickerResizeState(w);

c('ChatSidebarVisibility').shouldShowSidebar(null,function(x,y){
c('ChatSidebarActions').show
(x?c('SidebarType').SIDEBAR:c('SidebarType').BUDDYLIST);});}}.



bind(this));};

s.prototype.

$SidebarAppTickerResizer_getTickerMaxPercentHeight=function(){'use strict';


if(!this.$SidebarAppTickerResizer_ticker_enabled)
return 0;


if(c('ChatSidebarStore').getVisibleType()!==c('SidebarType').SIDEBAR)
return p;

return Math.min
(p,
(this.$SidebarAppTickerResizer_sidebar_height-this.$SidebarAppTickerResizer_sidebar_top-q)*
100/this.$SidebarAppTickerResizer_sidebar_height);};

s.prototype.

$SidebarAppTickerResizer_initializeDrag=function(t,u){'use strict';
var v=new (c('SimpleDrag'))(t);
v.subscribe('start',this.$SidebarAppTickerResizer_startCommon.bind(this));
v.subscribe(['update','end'],this.$SidebarAppTickerResizer_updateTicker.bind(this));

var w=new (c('SimpleDrag'))(u);
w.subscribe('start',this.$SidebarAppTickerResizer_startCommon.bind(this));
w.subscribe('update',this.$SidebarAppTickerResizer_updateApps.bind(this));
w.subscribe('end',this.$SidebarAppTickerResizer_endApps.bind(this));};
s.prototype.

$SidebarAppTickerResizer_startCommon=function(t,event){'use strict';
this.$SidebarAppTickerResizer_start_offset=event.clientY;
this.$SidebarAppTickerResizer_initializeHeights();
this.$SidebarAppTickerResizer_addTickerDragClass();};
s.prototype.

$SidebarAppTickerResizer_initializeHeights=function(){'use strict';
this.$SidebarAppTickerResizer_sidebar_top=this.$SidebarAppTickerResizer_apps_pagelet.offsetTop;
this.$SidebarAppTickerResizer_ticker_height=this.$SidebarAppTickerResizer_ticker_pagelet.offsetHeight;
this.$SidebarAppTickerResizer_sidebar_height=this.$SidebarAppTickerResizer_sidebar.offsetHeight;
this.$SidebarAppTickerResizer_apps_height=this.$SidebarAppTickerResizer_apps_pagelet.offsetHeight;
this.$SidebarAppTickerResizer_new_apps_height=this.$SidebarAppTickerResizer_apps_height;};
s.prototype.

$SidebarAppTickerResizer_addTickerDragClass=function(){'use strict';
c('CSS').addClass(this.$SidebarAppTickerResizer_sidebar,"_4vfq");};
s.prototype.

$SidebarAppTickerResizer_removeTickerDragClass=function(){'use strict';
c('CSS').removeClass(this.$SidebarAppTickerResizer_sidebar,"_4vfq");};
s.prototype.




$SidebarAppTickerResizer_updateTicker=function(t,event){'use strict';


var u=this.$SidebarAppTickerResizer_apps_height/this.$SidebarAppTickerResizer_sidebar_height*100,
v=this.$SidebarAppTickerResizer_setTickerGripperHeight
(event.clientY-this.$SidebarAppTickerResizer_start_offset,
this.$SidebarAppTickerResizer_getTickerMaxPercentHeight()-u);



if(t=='end'){
this.$SidebarAppTickerResizer_removeTickerDragClass();
this.$SidebarAppTickerResizer_saveTickerResizeState(v);}

c('ChatSidebarVisibility').shouldShowSidebar(null,function(w,x){
c('ChatSidebarActions').show
(w?c('SidebarType').SIDEBAR:c('SidebarType').BUDDYLIST);});};


s.prototype.








$SidebarAppTickerResizer_updateApps=function(t,event){'use strict';






var u=-this.$SidebarAppTickerResizer_apps_height,
v=this.$SidebarAppTickerResizer_getAppsGripperMaxHeight()-this.$SidebarAppTickerResizer_apps_height,
w=this.$SidebarAppTickerResizer_getBoundedHeight
(event.clientY-this.$SidebarAppTickerResizer_start_offset,
u,
v);




this.$SidebarAppTickerResizer_setTickerGripperHeight
(-w,
this.$SidebarAppTickerResizer_getTickerMaxPercentHeight());




this.$SidebarAppTickerResizer_new_apps_height=this.$SidebarAppTickerResizer_apps_height+w;
this.$SidebarAppTickerResizer_new_apps_height=Math.max(j,this.$SidebarAppTickerResizer_new_apps_height);
this.$SidebarAppTickerResizer_apps_pagelet.style.height=this.$SidebarAppTickerResizer_new_apps_height+'px';};
s.prototype.





$SidebarAppTickerResizer_endApps=function(t,event){'use strict';
var u=this.$SidebarAppTickerResizer_new_apps_height,
v=this.$SidebarAppTickerResizer_snapAppsGripperHeight(this.$SidebarAppTickerResizer_new_apps_height);
this.$SidebarAppTickerResizer_setArrows(v);

var w=this.$SidebarAppTickerResizer_setTickerGripperHeight
(this.$SidebarAppTickerResizer_apps_height-v,
this.$SidebarAppTickerResizer_getTickerMaxPercentHeight());


if(this.$SidebarAppTickerResizer_apps_height!=v){
this.$SidebarAppTickerResizer_saveAppsResizeState(v);
this.$SidebarAppTickerResizer_saveTickerResizeState(w);}



new (c('Animation'))(this.$SidebarAppTickerResizer_apps_pagelet).
from('height',u).
to('height',v).
duration(n).
go();};
s.prototype.




$SidebarAppTickerResizer_setArrows=function(t){'use strict';
if(!this.$SidebarAppTickerResizer_show_more_recommendations)
return;


var u="_3qrt",
v=document.getElementsByClassName(u),
w='';
if(t==this.$SidebarAppTickerResizer_getAppsGripperCenterHeight()){
w='inline';}else 

w='';


for(var x=0;x<v.length;x++)
v[x].style.display=w;};

s.prototype.

$SidebarAppTickerResizer_setTickerGripperHeight=function(t,u){'use strict';
var v=this.$SidebarAppTickerResizer_ticker_height+t,
w=v/this.$SidebarAppTickerResizer_sidebar_height*100;



w=Math.max(i,Math.min(u,w));
this.$SidebarAppTickerResizer_ticker_pagelet.style.height=w+'%';

if(w!=i){
c('CSS').removeClass(this.$SidebarAppTickerResizer_ticker_pagelet,'hidden_elem');
this.$SidebarAppTickerResizer_showTicker();}


return w;};
s.prototype.







$SidebarAppTickerResizer_snapAppsGripperHeight=function(t){'use strict';






var u=this.$SidebarAppTickerResizer_getAppsGripperCenterHeight(),
v=this.$SidebarAppTickerResizer_getAppsGripperMaxHeight();
return t<v-o?
t<u-o?
j:
u:
v;};
s.prototype.

$SidebarAppTickerResizer_getAppsGripperCenterHeight=function(){'use strict';
return k;};
s.prototype.

$SidebarAppTickerResizer_getAppsGripperMaxHeight=function(){'use strict';
if(this.$SidebarAppTickerResizer_show_more_recommendations){
return m;}else 

return l;};

s.prototype.

$SidebarAppTickerResizer_boundAppsGripperHeight=function(t){'use strict';
var u=this.$SidebarAppTickerResizer_getAppsGripperMaxHeight();
return t<0?
j:
t>u?
u:
t;};
s.prototype.

$SidebarAppTickerResizer_getBoundedHeight=function(t,u,v){'use strict';
return t<u?
u:
t>v?
v:
t;};
s.prototype.

$SidebarAppTickerResizer_saveTickerResizeState=function(t){'use strict';
new (c('AsyncRequest'))('/ajax/feed/ticker/resize').
setData({height:''+t}).
setMethod('POST').
send();
c('Arbiter').inform('Ticker/resized');};
s.prototype.

$SidebarAppTickerResizer_saveAppsResizeState=function(t){'use strict';
new (c('AsyncRequest'))('/ajax/feed/apps/resize').
setData({height:''+t}).
setMethod('POST').
send();};
s.prototype.

$SidebarAppTickerResizer_animateTickerResize=function(t){'use strict';
var u=this.$SidebarAppTickerResizer_ticker_height,
v=this.$SidebarAppTickerResizer_sidebar_height*t/100;

new (c('Animation'))(this.$SidebarAppTickerResizer_ticker_pagelet).
from('height',u).
to('height',v).
duration(r).
ondone(function(){
this.$SidebarAppTickerResizer_ticker_pagelet.style.height=t+'%';

this.$SidebarAppTickerResizer_saveTickerResizeState
(t===0?'0.0':t);

c('ChatSidebarVisibility').shouldShowSidebar(null,function(w,x){
c('ChatSidebarActions').show
(w?c('SidebarType').SIDEBAR:c('SidebarType').BUDDYLIST);});}.


bind(this)).
go();};
s.prototype.

$SidebarAppTickerResizer_closeTicker=function(){'use strict';
this.$SidebarAppTickerResizer_initializeHeights();
this.$SidebarAppTickerResizer_animateTickerResize(0);};
s.prototype.

$SidebarAppTickerResizer_openTicker=function(){'use strict';
this.$SidebarAppTickerResizer_ticker_pagelet.style.height='40px';
c('TickerController').show(this.$SidebarAppTickerResizer_ticker_pagelet,function(){
this.$SidebarAppTickerResizer_initializeHeights();

var t=
(this.$SidebarAppTickerResizer_sidebar_height-this.$SidebarAppTickerResizer_sidebar_top-
q-this.$SidebarAppTickerResizer_apps_height)*50/
this.$SidebarAppTickerResizer_sidebar_height;
this.$SidebarAppTickerResizer_animateTickerResize(t);}.
bind(this));};



f.exports=s;}),null);

/** js/logging/generated/VideoCallTypedLogger.js */





__d('VideoCallTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:VideoCallLoggerConfig',this.$VideoCallTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:VideoCallLoggerConfig',this.$VideoCallTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$VideoCallTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$VideoCallTypedLogger_data=babelHelpers['extends']({},
this.$VideoCallTypedLogger_data,
j);

return this;};
h.prototype.




setEvent=function(j){
this.$VideoCallTypedLogger_data.event=j;
return this;};
h.prototype.




setMessage=function(j){
this.$VideoCallTypedLogger_data.message=j;
return this;};


























var i=
{event:true,
message:true};


f.exports=h;}),null);

/** js/login/device_based/DeviceBasedLoginWWWQP.js */





__d('DeviceBasedLoginWWWQP',['CSS','Event','tidyEvent'],(function a(b,c,d,e,f,g){

'use strict';






var h=

{swapWithShadowMessageOnClick:function i
(j,
k,
l){

c('tidyEvent')(c('Event').listen(j,'click',function(m){
c('CSS').hide(k);
c('CSS').show(l);}));}};




f.exports=h;}),null);

/** js/mercury/clients/chat/ChatAppActionTypes.js */






__d('ChatAppActionTypes',['keyMirror'],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c('keyMirror')
({INITIAL_DISPLAY_DONE:null,
HIDE:null,
LOAD:null,
TTI:null,
UNHIDE:null});}),null);

/** js/mercury/clients/chat/ChatAppStore.js */






__d('ChatAppStore',['ChatAppActionTypes','ChatDispatcher','FluxStore'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits















(j,c('FluxStore'));i=h&&h.prototype;



function j(){
i.constructor.call(this,c('ChatDispatcher'));

this.$ChatAppStore_state=
{initialDisplayDone:false,
isHidden:false,
isInitialized:false,
isLoaded:false};


this.$ChatAppStore_prevState=babelHelpers['extends']({},this.$ChatAppStore_state);}
j.prototype.

__onDispatch=function(k){
var l=k.type;
this.$ChatAppStore_prevState=babelHelpers['extends']({},this.$ChatAppStore_state);

switch(l){
case c('ChatAppActionTypes').INITIAL_DISPLAY_DONE:
this.$ChatAppStore_state.initialDisplayDone=true;
this.__emitChange();
break;
case c('ChatAppActionTypes').HIDE:
this.$ChatAppStore_state.isHidden=true;
this.__emitChange();
break;
case c('ChatAppActionTypes').UNHIDE:
this.$ChatAppStore_state.isHidden=false;
this.__emitChange();
break;
case c('ChatAppActionTypes').TTI:
this.$ChatAppStore_state.isInitialized=this.$ChatAppStore_state.isLoaded=true;
this.__emitChange();
break;
case c('ChatAppActionTypes').LOAD:
this.$ChatAppStore_state.isLoaded=true;
this.__emitChange();
break;}};

j.prototype.

getPreviousState=function(){
return this.$ChatAppStore_prevState;};
j.prototype.

getState=function(){
return this.$ChatAppStore_state;};



f.exports=new j();}),null);

/** js/mercury/clients/chat/ChatTimezoneWarning.js */






__d('ChatTimezoneWarning',['MercuryParticipants','MercuryViewer','MessengerBotIDs'],(function a(b,c,d,e,f,g){

'use strict';





var h=1,

i=
{updateUserTimezoneWarning:function j
(k,
l,
m){

c('MercuryParticipants').get(c('MercuryViewer').getID(),function(n){
var o=n.employee,
p=n.timezone,

q=0;
if(k.timezone_warning_dismiss_count!==undefined){
var r=k.timezone_warning_dismiss_count;
for(var s=Object.entries(r),t=Array.isArray(s),u=0,s=t?s:s[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var v;if(t){if(u>=s.length)break;v=s[u++];}else{u=s.next();if(u.done)break;v=u.value;}var w=v,x=w[0],y=w[1];
if(x===n.fbid)
q=Number(y);}}else 



return;


if(o&&p&&q<h)
c('MercuryParticipants').getMulti
(k.participants,
function(z){
var aa={},
ba=true;
for(var ca in z){
ba=ba&&z[ca].employee;
var da=!!c('MessengerBotIDs')[z[ca].fbid];

if(z[ca].timezone!==undefined&&
z[ca].timezone!==null&&
p!==z[ca].timezone&&
!da){

var ea=z[ca].fbid;
aa[ea]=z[ca];}}



if(Object.keys(aa).length>0&&ba){
aa.self=n;
l(aa);}else 

m();});});}};








f.exports=i;}),null);

/** js/work/WorkDualityDismissWarning.js */






__d('WorkDualityDismissWarning',[],(function a(b,c,d,e,f,g){

'use strict';



var h={},



i={};

f.exports=
{isWarningAcknowledged:function j(k){
if(h[k])
return true;

return false;},


acknowledgeWarning:function j(k){
h[k]=true;},


isThreadHijacked:function j(k){
if(i[k])
return true;

return false;},


setHijackedThread:function j(k){
i[k]=true;}};}),
null);

/** js/mercury/clients/chat/ChatUserPersonalUserWarning.js */






__d('ChatUserPersonalUserWarning',['MercuryIDs','MercuryParticipants','MercuryViewer','MercuryEmployeeDualityPreferences','WorkDualityDismissWarning'],(function a(b,c,d,e,f,g){







var h=1,




i=
{updateEmployeePersonalUserWarning:function j
(k,
l,
m){

c('MercuryParticipants').get(c('MercuryViewer').getID(),function(n){
var o=this._getFriendID(k,n);
if(!o){
m();
return;}


c('MercuryParticipants').getMulti
(k.participants,
function(p){
var q=this._getParticipant
(k,
Object.values(p),
o);


if(q){
l(n,q);}else 

m();}.

bind(this));}.

bind(this));},


getEmployeePersonalUserWarning:function j
(k){




var l=c('MercuryParticipants').getNow(c('MercuryViewer').getID()),
m=this._getFriendID(k,l),

n=k.participants.map(function(p){
return c('MercuryParticipants').getNow(p);}),


o=this._getParticipant(k,n,m);

return {myself:l,
participant:o};},



_getParticipant:function j
(k,
l,
m){

var n=null;

l.forEach(function(o){






if(o.personal_id&&
m===o.personal_id&&
o.work_id&&
o.employee&&
!c('WorkDualityDismissWarning').isWarningAcknowledged(k.thread_id))

n=o;});



return n;},


_getFriendID:function j
(k,
l){

var m=l.employee,
n=null;
if(l.personal_id)
n='fbid:'+l.personal_id;

var o=n===l.id,

p=0;
if(k.work_user_warning_dismiss_count!==undefined){
var q=k.work_user_warning_dismiss_count;
for(var r=Object.entries(q),s=Array.isArray(r),t=0,r=s?r:r[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var u;if(s){if(t>=r.length)break;u=r[t++];}else{t=r.next();if(t.done)break;u=t.value;}var v=u,w=v[0],x=v[1];
if(w===l.fbid)
p=Number(x);}}else 



return null;



var y=c('MercuryIDs').getUserIDFromThreadID(k.thread_id);


if(!m||
!o||
!y||
k.participants.length>2||
!c('MercuryEmployeeDualityPreferences').duality_warning_gk_check||
p>=h)

return null;


return y;}};



f.exports=i;}),null);

/** js/mercury/clients/chat/ChatUserWorkUserWarning.js */






__d('ChatUserWorkUserWarning',['MercuryIDs','MercuryParticipants','MercuryViewer','MercuryEmployeeDualityPreferences','WorkDualityDismissWarning'],(function a(b,c,d,e,f,g){






var h=1,




i=
{updateEmployeeWorkUserWarning:function j
(k,
l,
m){

c('MercuryParticipants').get(c('MercuryViewer').getID(),function(n){
var o=this._getFriendID(k,n);
if(!o){
m();
return;}


c('MercuryParticipants').getMulti
(k.participants,
function(p){
var q=this._getParticipant
(k,
Object.values(p),
o);


if(q){
l(n,q);}else 

m();}.

bind(this));}.

bind(this));},


getEmployeeWorkUserWarning:function j
(k){




var l=c('MercuryParticipants').getNow(c('MercuryViewer').getID()),
m=this._getFriendID(k,l),

n=k.participants.map(function(p){
return c('MercuryParticipants').getNow(p);}),


o=this._getParticipant(k,n,m);

return {myself:l,
participant:o};},



_getParticipant:function j
(k,
l,
m){

var n=null;

l.forEach(function(o){








if(o.work_id&&
m===o.work_id.toString()&&
o.personal_id&&
c('WorkDualityDismissWarning').isThreadHijacked(k.thread_id)&&
o.employee&&
!o.is_friend)
n=o;});



return n;},


_getFriendID:function j
(k,
l){


var m=l.employee,
n=null;
if(l.personal_id)
n='fbid:'+l.personal_id;

var o=n===l.id,


p=0;
if(k.work_user_warning_dismiss_count!==undefined){
var q=k.work_user_warning_dismiss_count;
for(var r=Object.entries(q),s=Array.isArray(r),t=0,r=s?r:r[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var u;if(s){if(t>=r.length)break;u=r[t++];}else{t=r.next();if(t.done)break;u=t.value;}var v=u,w=v[0],x=v[1];
if(w===l.fbid)
p=Number(x);}}else 



return null;



var y=c('MercuryIDs').getUserIDFromThreadID(k.thread_id);


if(!m||
!o||
!y||
k.participants.length>2||
!c('MercuryEmployeeDualityPreferences').duality_warning_gk_check||
p>=h)

return null;


return y;}};



f.exports=i;}),null);

/** js/mercury/clients/chat/components/ChatVideoCallButton.react.js */







__d('ChatVideoCallButton.react',['cx','fbt','invariant','Bootloader','FBID','FBRTCCallabilityStore','FBRTCCore','Keys','LayerFadeOnHide','Link.react','MercuryIDs','MercuryParticipants','MercuryThreadIDMap','ReactComponentWithPureRenderMixin','React','StoreAndPropBasedStateMixin','TrackingNodes','FBRTCLogger','VideoCallTypedLogger','XUIAmbientNUX.react'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';










var k=c('MercuryThreadIDMap').get(),




l=c('FBRTCLogger').Trigger,







m=c('React').PropTypes,

n=
{isCallable:false,
shown:false,
user:null},








o=c('React').createClass({displayName:'ChatVideoCallButton',
mixins:[c('ReactComponentWithPureRenderMixin'),

c('StoreAndPropBasedStateMixin')(c('FBRTCCallabilityStore'),c('MercuryParticipants'))],





propTypes:
{isAudio:m.bool,
isGroupChat:m.bool,
onRTCNuxCloseButtonClick:m.func.isRequired,
rtcNuxShown:m.bool.isRequired,
threadID:m.string,
viewer:m.string.isRequired,
shown:m.bool,
rtcCallData:m.object.isRequired},


getDefaultProps:function p(){

return {shown:true,
rtcCallData:
{call_state:'NO_ONGOING_CALL'}};},




statics:
{calculateState:function p(q){
if(!q.threadID)
return babelHelpers['extends']({},n);

if(q.isGroupChat)

return {isCallable:true,
shown:q.shown,
user:null};


var r=c('MercuryIDs').getUserIDFromThreadID(q.threadID);
if(r===q.viewer||!c('FBID').isUser(r))
return babelHelpers['extends']({},n);

r&&c('FBID').isUser(r)||j(0,'expecting a good id here');
var s=c('MercuryIDs').getParticipantIDFromUserID(r),
t=c('MercuryParticipants').getOrFetch(s);

return {isCallable:c('FBRTCCallabilityStore').isCallable(r),
shown:q.shown,
user:t};}},




getTooltipLabel:function p(){
if(this.props.isGroupChat)
return this.props.isAudio?i._(["Start a group call","b1f4642a7d92b969faa545d917206f24"]):i._(["Start a group video chat","fc7306f230c92f51e79f515dc988a9c2"]);




var q=this.state.user;
if(!q)
return undefined;

return this.props.isAudio?
c('FBRTCCallabilityStore').voiceCallButtonTooltip
(q.fbid,
q.short_name):

c('FBRTCCallabilityStore').callButtonTooltip
(q.fbid,
q.short_name);},



render:function p(){
if(!this.state.shown)
return null;

var q=c('TrackingNodes').getTrackingInfo
(this.props.isAudio?
c('TrackingNodes').types.VIDEOCHAT:
c('TrackingNodes').types.VOICECHAT),

r=JSON.stringify({videochat:'call_clicked_bhat_tab'});

return (c('React').createElement('div',null,
c('React').createElement(c('Link.react'),
{'aria-label':this.getTooltipLabel(),
className:"button"+(' '+"_3olv")+


(this.props.isAudio?' '+"_2fpc":'')+
(!this.props.isAudio?' '+"_2fpd":'')+
(this.state.isCallable?' '+"enabled":''),

'data-ft':q,
'data-gt':r,
'data-hover':'tooltip',
'data-tooltip-content':this.getTooltipLabel(),
'data-tooltip-position':'above',
onClick:this._handleClick,
onKeyUp:this._handleKeyUp,
ref:'button'}),

c('React').createElement(c('XUIAmbientNUX.react'),
{alignment:'right',
behaviors:{LayerFadeOnHide:c('LayerFadeOnHide')},
contextRef:function(){return this.refs.button;}.bind(this),
onCloseButtonClick:this.props.onRTCNuxCloseButtonClick,
shown:this.props.rtcNuxShown,
width:'auto'},i._(["You can now make a group call.","f5db9097443fc3a3e0d9b0a8cf24941f"]))));},









_handleClick:function p(q){
q.preventDefault();
if(!this.state.isCallable)
return;

this.props.onRTCNuxCloseButtonClick();
this._initiateCall();},


_handleKeyUp:function p(q){
q.preventDefault();
if(q.keyCode!==c('Keys').RETURN||
!this.state.isCallable)
return;

if(q.target){

q.target instanceof HTMLElement||j(0,
'event targets are HTHML elemets');

q.target.blur();}

this._initiateCall();},


_initiateCall:function p(){var q=
this.props,r=q.isAudio,s=q.isGroupChat,t=q.threadID;
!!t||j(0,'not even shown unless we have a thread');
var u=r?'audio':'video';
if(s){
if(c('MercuryIDs').isLocalThread(t)){
k.getServerIDFromClientID
(t,
function(v){return this._initiateGroupCall(v);}.bind(this));}else 


this._initiateGroupCall(c('MercuryIDs').getThreadFBIDFromThreadID(t));}else{


c('FBRTCCore').startOutgoingCall(this.state.user.fbid,u,r);
new (c('VideoCallTypedLogger'))().
setEvent('chat_tab_call_click').
log();}},



_initiateGroupCall:function p(q){var r=
this.props,s=r.isAudio,t=r.rtcCallData,u=t.call_state,v=t.server_info_data;
if(u!=='NO_ONGOING_CALL'&&v){
c('FBRTCCore').startGroupCall
({conferenceName:'GROUP:'+q,
hasVideo:!s,
serverInfoData:v,
trigger:u!=='AUDIO_GROUP_CALL'?
s?
l.MULTIWAY_THREAD_HEADER_JOIN_AUDIO_CALL_AUDIO_BUTTON:
l.MULTIWAY_THREAD_HEADER_JOIN_AUDIO_CALL_VIDEO_BUTTON:
s?
l.MULTIWAY_THREAD_HEADER_JOIN_VIDEO_CALL_AUDIO_BUTTON:
l.MULTIWAY_THREAD_HEADER_JOIN_VIDEO_CALL_VIDEO_BUTTON});

return;}


c('Bootloader').loadModules(["FBRTCSupport","MessengerRTCGroupCallUnsupportedBrowserDialogController","MessengerRTCGroupCallParticipantsPickerDialogController","RTCGroupCallUtils"],





function(w,
x,
y,
z){

if(!w.isGroupCallWebtrcSupported()){
x.render
({hasVideo:!this.props.isAudio});

return;}


z.getThread(q,function(aa,ba){
y.render
({participants:ba['delete']
(c('MercuryIDs').getParticipantIDFromUserID(this.props.viewer)),

thread:aa,
viewerID:this.props.viewer,
trigger:this.props.isAudio?
l.MULTIWAY_THREAD_HEADER_AUDIO_BUTTON:
l.MULTIWAY_THREAD_HEADER_VIDEO_BUTTON,
conferenceName:'GROUP:'+q,
hasVideo:!this.props.isAudio});}.

bind(this));}.
bind(this),'ChatVideoCallButton.react');}});



f.exports=o;}),null);

/** js/mercury/data_source/MercuryTypeaheadDataSource.js */





__d('MercuryTypeaheadDataSource',['CurrentUser','DataSource','MercuryConfig','MercuryParticipantTypes','MercuryTypeaheadConstants','OrderedFriendsList','ShortProfiles','WorkModeConfig','debounce'],(function a(b,c,d,e,f,g){var h,i,












j=500,

k=[],
l={},
m={},
n={},
o=false,
p=false;h=babelHelpers.inherits

(q,c('DataSource'));i=h&&h.prototype;



function q(r){'use strict';
r=r||{};
r.kanaNormalization=true;
i.constructor.call(this,r);}
q.prototype.




dirty=function(){'use strict';
this.$MercuryTypeaheadDataSource_data=k;
this.localCache=m;
this.queryCache=l;
this.queryIDs=n;
return this;};
q.prototype.




bootstrap=function(){'use strict';
if(o||p)
return false;

p=true;
c('ShortProfiles').fetchAll().then
(function(){
this.updateBootstrapData();
p=false;
o=true;}.
bind(this),
function(){
}.bind(this));
return true;};
q.prototype.





updateBootstrapData=function(){'use strict';

var r=this.getCachedShortProfileIDs(),
s=c('WorkModeConfig').is_work_user?
c('MercuryParticipantTypes').FB4C:
c('MercuryParticipantTypes').FRIEND,

t=r.map(function(u){
var v=c('ShortProfiles').getNow(u),
w=u==c('CurrentUser').getID()?
s:
v.type,
x=[v.additionalName,v.alternateName].
concat(v.searchTokens||[]).
join(' '),

y=v.name,
z=null;

return {uid:u,
index:c('OrderedFriendsList').getActiveRank(u),
text:y,
subtext:z,
tokens:x,
localized_text:v.name,
additional_text:v.additionalName,
photo:v.thumbSrc,
render_type:w,
type:c('MercuryTypeaheadConstants').USER_TYPE};});




if(t.length)
this.addEntries(t);};

q.prototype.









query=function(r,s,t,u){'use strict';


var v=s||r.length===1;
return i.query.call(this,r,v,t,u);};
q.prototype.










getQueryData=function(r,s){'use strict';
return babelHelpers['extends']({},i.
getQueryData.call(this,r,s));};

q.prototype.









setEntry=function(r,s){'use strict';
this.$MercuryTypeaheadDataSource_data[r]=s;};
q.prototype.





getEntry=function(r){'use strict';
return this.$MercuryTypeaheadDataSource_data[r]||null;};
q.prototype.






getCachedShortProfileIDs=function(){'use strict';
var r=c('ShortProfiles').getCachedProfileIDs(),
s=r.filter(function(t){
var u=c('ShortProfiles').getNow(t);

return (t==c('CurrentUser').getID()||
u.type===c('MercuryParticipantTypes').FRIEND||
u.type===c('MercuryParticipantTypes').FB4C||
u.type===c('MercuryParticipantTypes').PAGE&&
c('MercuryConfig').LinkedAgents&&
c('MercuryConfig').LinkedAgents.indexOf(t.toString())>-1);});



return s;};
q.prototype.




isBootstrapped=function(){'use strict';
return o;};
q.prototype.




isBootstrapping=function(){'use strict';
return p;};
q.prototype.






processEntries=function(r,s){'use strict';
r=r.map(function(t){
if(t.index==null&&
(t.render_type===c('MercuryParticipantTypes').FRIEND||
t.render_type===c('MercuryParticipantTypes').FB4C))
t.index=c('OrderedFriendsList').getActiveRank(t.uid);

if(t.render_type===c('MercuryParticipantTypes').PAGE&&
c('MercuryConfig').LinkedAgents&&
c('MercuryConfig').LinkedAgents.indexOf(t.uid.toString())>-1)

t.index=1;

return t;});

return i.processEntries.call(this,r);};
q.prototype.








mergeUids=function(r,s,t,u){'use strict';
var v=s.sort(function(w,x){
return this.getEntry(w).index-this.getEntry(x).index;}.
bind(this));
return i.mergeUids.call(this,r,v,t,u);};



f.exports=q;}),null);

/** js/mercury/clients/chat/data_source/ChatTabTypeaheadDataSource.js */





__d('ChatTabTypeaheadDataSource',['MercuryConfig','MercuryTypeaheadConstants','MercuryTypeaheadDataSource'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits





(j,c('MercuryTypeaheadDataSource'));i=h&&h.prototype;
function j(k){'use strict';
k=k||{};
k.maxResults=
c('MercuryTypeaheadConstants').COMPOSER_CHATTAB_MAX;
i.constructor.call(this,k);
this.$ChatTabTypeaheadDataSource_showThreads=true;}
j.prototype.

buildData=function(k){'use strict';
var l=[],
m=[],
n=[],
o=[],
p=[],
q=[];
k.forEach(function(s){
var t=i.getEntry.call(this,s);
switch(t.render_type){
case c('MercuryTypeaheadConstants').FRIEND_TYPE:
l.push(s);
break;
case c('MercuryTypeaheadConstants').THREAD_TYPE:
if(this.$ChatTabTypeaheadDataSource_showThreads)
m.push(s);

break;
case c('MercuryTypeaheadConstants').NON_FRIEND_TYPE:
n.push(s);
break;
case c('MercuryTypeaheadConstants').FB4C_TYPE:
o.push(s);
break;
case c('MercuryTypeaheadConstants').PAGE_TYPE:

if(this.$ChatTabTypeaheadDataSource_showThreads)
if(c('MercuryConfig').LinkedAgents&&
c('MercuryConfig').LinkedAgents.indexOf(s.toString())>-1){
q.push(s);}else 

p.push(s);


break;

default:break;}}.

bind(this),this);

var r=q.concat
(l,
o,
m,
p,
n);


return i.buildData.call(this,r);};
j.prototype.









query=function(k,l,m,n){'use strict';
return i.query.call(this,k,l,m,n);};
j.prototype.








respond=function(k,l,m){'use strict';
return i.respond.call(this,k,l,m);};
j.prototype.

setShowThreads=function(k){'use strict';
this.$ChatTabTypeaheadDataSource_showThreads=k;};



f.exports=j;}),null);

/** js/mercury/clients/mncommerce/MNCommerceDialogContainerMount.js */






__d('MNCommerceDialogContainerMount',['MNCommerceDialogContainer.react','React','ReactDOM'],(function a(b,c,d,e,f,g){

'use strict';






var h=

{mount:function i(j){
c('ReactDOM').render(c('React').createElement(c('MNCommerceDialogContainer.react'),null),j);}};



f.exports=h;}),null);

/** js/mercury/clients/rtc/FBRTCMessageHandler.js */








__d('FBRTCMessageHandler',['invariant','Bootloader','FBRTCMessageListener','FBRTCSupport'],(function a(b,c,d,e,f,g,h){





var i=null,
j=false,

k=null,

l=
{init:function o(){
if(!j&&c('FBRTCSupport').isReceiveWebrtcSupported()){
j=true;
c('FBRTCMessageListener').init(false);
c('FBRTCMessageListener').once('messageReceived',function(p){
m();});


c('FBRTCMessageListener').once('multiwayMessageReceived',function(p){
n(p);});}},






resetListener:function o(){

i||h(0,
'incoming call controller must be initialized');

c('FBRTCMessageListener').removeMessageHandler();
c('FBRTCMessageListener').setMessageHandler
(i.onMessageReceived,
i);}};







function m(){
if(!i)
c('Bootloader').loadModules(["FBRTCIncomingCallController","FBRTCIncomingCallDialog","FBRTCMissedVideoCallHandler","FBRTCUnsupportedBrowserMessage"],





function(o,
p,
q,
r){

i=new o
(p,
r,
new q());

c('FBRTCMessageListener').setMessageHandler
(i.onMessageReceived,
i);},

'FBRTCMessageHandler');}






function n(o){
if(!k)
c('Bootloader').loadModules(["FBRTCGroupCallIncomingController","FBRTCGroupCallIncomingDialog"],



function(p,
q){

k=new p
(q);


c('FBRTCMessageListener').setMultiwayMessageHandler
(k.onMessageReceived,
k);



k.onMessageReceived(o);},
'FBRTCMessageHandler');}




f.exports=l;}),null);

/** js/p2p/P2PDialogContainerMount.js */






__d('P2PDialogContainerMount',['P2PDialogContainer.react','React','ReactDOM'],(function a(b,c,d,e,f,g){

'use strict';





var h=

{mount:function i(j){
c('ReactDOM').render(c('React').createElement(c('P2PDialogContainer.react'),null),j);}};



f.exports=h;}),null);

/** js/pages/platform/message_attachment/PagesPlatformDialogContainerMount.js */






__d('PagesPlatformDialogContainerMount',['PagesPlatformDialogContainer.react','React','ReactDOM'],(function a(b,c,d,e,f,g){

'use strict';





var h=

{mount:function i(j){
c('ReactDOM').render(c('React').createElement(c('PagesPlatformDialogContainer.react'),null),j);}};



f.exports=h;}),null);

/** js/ui/core/ui/typeahead/renderers/CompactTypeaheadRendererLegacy.js */


__d('legacy:CompactTypeaheadRenderer',['CompactTypeaheadRenderer'],(function a(b,c,d,e,f,g){

if(!b.TypeaheadRenderers)b.TypeaheadRenderers={};
b.TypeaheadRenderers.compact=c('CompactTypeaheadRenderer');}),3);
