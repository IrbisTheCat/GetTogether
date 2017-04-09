if (self.CavalryLogger) { CavalryLogger.start_js(["Zfa05"]); }

/** __static_js_modules__/privacyconst.js */




__d("PrivacyConst",[],(function a(b,c,d,e,f,g){

f.exports={BaseValue:{FRIEND_LIST:129,FRIENDS_PLUS_GAMER_FRIENDS:128,FRIENDS_MINUS_ACQUAINTANCES:127,FACEBOOK_EMPLOYEES:112,CUSTOM:111,EVERYONE:80,NETWORKS_FRIENDS_OF_FRIENDS:60,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SELF:10,NOBODY:0},CustomPrivacyTokens:{FRIENDS:247124075410460,FRIENDS_OF_FRIENDS:498125493540100},FriendsValue:{EVERYONE:80,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SOME_FRIENDS:30,SELF:10,NO_FRIENDS:0},PostParam:{EVERYONE:300645083384735,NETWORKS_FRIENDS:123780391104836,FRIENDS_OF_FRIENDS:275425949243301,FRIENDS:291667064279714,FRIENDS_MINUS_ACQUAINTANCES:284920934947802,ONLY_ME:286958161406148,FB_ONLY:411331705596297,EVENT_PUBLIC:1493271774218406,EVENT_INVITE_ONLY:599950423437029},PrivacyField:{CURRENT_COMPOSER:8787670733,DEFAULT_COMPOSER:875106179167765,TIMELINE_TAGGED_CONTENT_VISIBILITY:8787530733,WALL_POSTS:8787370733,TAG_EXPANDED_CONTENT:8787795733,SEARCH_BY_PHONE:8787815733,SEARCH_BY_EMAIL:8787820733,CAN_FRIEND:8787540733,DEPRECATED_APP_DEFAULT:8787700733,SEARCH_BY_NAME:8787755733,SEARCH_BY_CONTACT_INFO:8787760733,SCREENNAME:8787335733,CURRENT_ADDRESS:8787355733,FRIENDS:8787365733,WEBSITE:8787375733,STATUS_UPDATES:8787395733,BIRTHDAY:8787510733,BIRTHYEAR:8787805733,CAN_COMMENT:8787535733,CAN_MESSAGE:8787545733,RELATIONSHIPS:8787550733,PROFILE_PICTURE_ALBUM:8787565733,DASHBOARD_ACTIVITY:8787575733,FAMILY:8787585733,INTERESTED_IN_LOOKING_FOR:8787590733,PLACES:8787620733,NAME_DAY:8787810733,LANGUAGES:8787625733,QUOTATIONS:8787630733,ABOUT_ME:8787635733,POLITICAL:8787640733,RELIGIOUS:8787645733,CURRENT_CITY:8787650733,HOMETOWN:8787655733,PROFILE_LIKES_AND_INTERESTS:8787660733,BLURB:8787665733,OTHER_LIKES_AND_INTERESTS:8787680733,SUBSCRIBERS:8787690733,SUBSCRIBED_TO:8787695733,PERSONAL_CONTACT_DEFAULT:8787765733,PAGE_CONTACT_DEFAULT:8787770733,AUTO_GENERATED_FB_EMAIL:8787775733,SKILLS:8787780733,CUSTOM_GENDERS:237760973066217,LOCATION_DO_NOT_WRITE_DIRECTLY:8787785733,SOCIAL_ADS:7719929599,PLATFORM_ADS:126540474531,BASS_ADS:183468681673909,ACTIVITIES:144331422306930,INTERESTS:113693108715766,MUSIC:172372399483077,BOOKS:100725463352700,GAMES:199298603444535,MOVIES:201146206594049,TV_SHOWS:129665560441221,SPORTS_PLAYED:129991670408857,FAVORITE_TEAMS:225288534151802,FAVORITE_ATHLETES:203380763033334,PEOPLE_I_ADMIRE:210380795648667,FAVORITE_FOODS:585935528106425,FAVORITE_RESTAURANTS:172588449584647,FAVORITE_WEBSITES:180412195459106,CLOTHING_BRANDS:397391233714082,LAST_POST_PRIVACY:314763985364212,SECOND_TO_LAST_POST_PRIVACY:321179124722698,PREVIOUS_SECONDARY_COMPOSER:864562253561430,RECENT_COMPOSER:358304524327898,COMPOSER_CUSTOM_INCLUSION:1067668039947624,COMPOSER_CUSTOM_EXCLUSION:1082068668536535,CAN_LIKE_AND_COMMENT_PUBLIC_PROFILE_MEDIA:1269423589794183,CAN_TAG_PUBLIC_PROFILE_MEDIA:260920744319731,CAN_DOWNLOAD_PUBLIC_PROFILE_MEDIA:410249702663051,CAN_SHARE_PUBLIC_PROFILE_MEDIA:1648969422065270,NOW_COMPOSER:421290164697736,BACKSTAGE_PRIVACY:809506612451171},TagExpansion:{NONE:0,TAGGEES:1,FRIENDS_OF_TAGGEES:2},ExpansionType:{NONE:0,TAGS_ONLY:1}};}),

null);

/** js/InstanceProxy.js */










__d("InstanceProxy",[],(function a(b,c,d,e,f,g){

function h(i){"use strict";
this.$InstanceProxy_instance=i;}
h.prototype.

getInstance=function(){"use strict";
return this.$InstanceProxy_instance;};
h.prototype.

setInstance=function(i){"use strict";
this.$InstanceProxy_instance=i;};


f.exports=h;}),null);

/** js/chat/ChatOpenTab.js */




__d('ChatOpenTab',['csx','Bootloader','ContextualThing','Event','MercuryIDs','MercuryParticipantTypes','Parent','requireWeak'],(function a(b,c,d,e,f,g,h){

'use strict';











var i=null;
c('requireWeak')('FantaTabsApp',function(n){return i=n;});
c('requireWeak')('FantaTabsReactApp',function(n){return i=n;});
c('requireWeak')('FantaTabsSlimApp',function(n){return i=n;});




function j(n,o,p,q){
c('Event').listen(n,'click',function(r){
if(m.canOpenTab()){
q(o,p);
return r.kill();}});}




function k(n,o,p,q){
c('Event').listen(n,'click',function(r){
if(m.canOpenTab())
q(o,p);});}




function l(n){
var o=c('ContextualThing').getContext(n);
return o&&
c('Parent').bySelector(o,"._3qw")!==null;}


var m=
{canOpenTab:function n(){
return i&&!i.isHidden();},



listenOpenEmptyTabDEPRECATED:function n(o,p){
j
(o,
null,
p,
this._loadAndOpenEmptyFantaTab);},



listenOpenThreadDEPRECATED:function n(o,p,q){
j
(o,
p,
q,
function(r,s){return this._loadAndOpenFantaTab(r,s,q);}.bind(this));},





openPageTabDEPRECATED:function n(o,p,q){
this._loadAndOpenFantaTab
(p,
c('MercuryParticipantTypes').PAGE,
q);


return true;},



listenOpenUserTabDEPRECATED:function n(o,p,q){


if(!l(o))
j
(o,
p,
q,
function(r){return this._loadAndOpenFantaTab
(r,
c('MercuryParticipantTypes').USER,
q);}.bind(this));},






listenOpenUserTabPersistentEventDEPRECATED:function n(o,p,q){
if(!l(o))
k
(o,
p,
q,
function(r){return this._loadAndOpenFantaTab
(r,
c('MercuryParticipantTypes').USER,
q);}.bind(this));},






listenOpenPageTabDEPRECATED:function n(o,p,q,r){
if(!l(o))
j
(o,
p,
r,
function(s){return this._loadAndOpenFantaTab
(s,
c('MercuryParticipantTypes').PAGE,
r);}.bind(this));},






listenOpenPageTabPersistentEventDEPRECATED:function n
(o,
p,
q,
r){

if(!l(o))
k
(o,
p,
r,
function(s){return this._loadAndOpenFantaTab
(s,
c('MercuryParticipantTypes').PAGE,
r);}.bind(this));},





_loadAndOpenFantaTab:function n(o,p,q){
c('Bootloader').loadModules(["ChatOpenTabEventLogger","FantaTabActions"],



function(r,
s){

if(p===c('MercuryParticipantTypes').USER){
var t=c('MercuryIDs').getThreadIDFromUserID(o);
s.openTab(t);
r.logUser(q,o);}else
if(p===c('MercuryParticipantTypes').PAGE){
var u=c('MercuryIDs').getThreadIDFromUserID(o);
s.openTab(u);
r.logPage(q,o);}else{

s.openTab(o);
r.log(q,o);}},

'ChatOpenTab');},


_loadAndOpenEmptyFantaTab:function n(){
c('Bootloader').loadModules(["ChatOpenTabEventLogger","FantaTabActions","MercuryThreads"],




function(o,
p,
q){

var r=q.get().createNewLocalThreadGenerateID();
p.openTab(r);
o.log('EmptyTab');},
'ChatOpenTab');}};



f.exports=m;}),null);

/** js/fbx/OutdatedBrowserBanner.js */




__d('OutdatedBrowserBanner',['ge','CSS'],(function a(b,c,d,e,f,g){





g.conditionShow=function(h,i){
c('CSS').conditionShow(c('ge')(h),i);};}),
null);

/** js/privacy/modules/lite/PrivacyLiteFlyoutBootloader.js */






__d('PrivacyLiteFlyoutBootloader',['regeneratorRuntime','Promise','Deferred','JSResource'],(function a(b,c,d,e,f,g){

'use strict';




var h=false,
i=null,
j=null,

k=

{loadFlyout:function l(){return c('regeneratorRuntime').async(function m(n){while(1)switch(n.prev=n.next){case 0:n.next=2;return c('regeneratorRuntime').awrap
(k._loadFlyout(false));case 2:case 'end':return n.stop();}},null,this);},


loadFlyoutAsChild:function l(){return c('regeneratorRuntime').async(function m(n){while(1)switch(n.prev=n.next){case 0:n.next=2;return c('regeneratorRuntime').awrap
(k._loadFlyout(true));case 2:case 'end':return n.stop();}},null,this);},


_loadFlyout:function l(m){var n,






o,p,
q,r,s,
t,event,u,v;return c('regeneratorRuntime').async(function w(x){while(1)switch(x.prev=x.next){case 0:if(!h){x.next=2;break;}return x.abrupt('return');case 2:h=true;x.next=5;return c('regeneratorRuntime').awrap
(c('Promise').all
([c('JSResource')('PrivacyLiteFlyout').__setRef('PrivacyLiteFlyoutBootloader').load(),
this._getDeferredFlyoutElements().getPromise(),
this._getDeferredFooterElements().getPromise()]));case 5:n=x.sent;o=n[0];p=n[1];q=p.flyout;r=p.flyoutRoot;s=n[2];t=s.footer;event=s.event;u=s.settingsExitPoint;v=s.basicsExitPoint;


o.setIsChild(!!m);
o.registerFlyoutToggler
(q,
r);

o.registerSettingsAndBasicsLinkLogging
(t,
event,
u,
v);

o.loadBody();case 19:case 'end':return x.stop();}},null,this);},




setChildFlyoutVisible:function l(m){var n,





o,p,
q,r;return c('regeneratorRuntime').async(function s(t){while(1)switch(t.prev=t.next){case 0:if(!(!h&&!m)){t.next=2;break;}return t.abrupt('return');case 2:t.next=4;return c('regeneratorRuntime').awrap
(c('Promise').all
([c('JSResource')('PrivacyLiteFlyout').__setRef('PrivacyLiteFlyoutBootloader').load(),
this._getDeferredFlyoutElements().getPromise()]));case 4:n=t.sent;o=n[0];p=n[1];q=p.flyout;r=p._flyoutRoot;


if(!(m===o.isFlyoutVisible())){t.next=11;break;}return t.abrupt('return');case 11:


o.setChildFlyoutVisible(m);



o.onToggle(q,m?'show':'hide');case 13:case 'end':return t.stop();}},null,this);},


_getDeferredFlyoutElements:function l(){
if(i==null)
i=new (c('Deferred'))();

return i;},



registerFlyoutElements:function l
(m,
n){

this._getDeferredFlyoutElements().resolve
({flyout:m,
flyoutRoot:n});},



_getDeferredFooterElements:function l(){
if(j==null)
j=new (c('Deferred'))();

return j;},



registerFooterElements:function l
(m,
event,
n,
o){

this._getDeferredFooterElements().resolve
({footer:m,
event:event,
settingsExitPoint:n,
basicsExitPoint:o});}};




f.exports=k;}),null);

/** js/help/lite/HelpLiteFlyout.js */






__d('HelpLiteFlyout',['AsyncRequest','CSS','DOM','Event','HelpLiteFlyoutBootloader','PrivacyLiteFlyoutBootloader','Toggler','ge','ifRequired'],(function a(b,c,d,e,f,g){

'use strict';












var h=null,

i=




{loadBody:function j(){
if(c('ge')('fbHelpLiteFlyoutLoading'))
new (c('AsyncRequest'))('/help/ajax/contextual/').
setData({page_type:c('HelpLiteFlyoutBootloader').getHelpType()}).
send();},



refreshHelp:function j(){
if(c('ge')('fbHelpLiteFlyoutLoading'))
new (c('AsyncRequest'))('/help/ajax/contextual/').
setData
({page_type:c('HelpLiteFlyoutBootloader').getHelpType(),
is_refresh:true}).

send();},




resetHelp:function j(k){
var l=c('ge')('fbContextualHelpContent');
if(l)
c('DOM').replace(l,k);},



showHelp:function j(){
c('PrivacyLiteFlyoutBootloader').setChildFlyoutVisible(false);
c('CSS').show(c('ge')('fbHelpLiteFlyout'));},


openPrivacy:function j(){
c('CSS').hide(c('ge')('fbHelpLiteFlyout'));
c('PrivacyLiteFlyoutBootloader').loadFlyoutAsChild();
c('PrivacyLiteFlyoutBootloader').setChildFlyoutVisible(true);},



registerPrivacyBackLink:function j(k){
c('Event').listen
(k,
'click',
i.showHelp);},



registerFlyoutToggler:function j(k,l){
h=l;
var m=c('Toggler').createInstance(k);
m.setSticky(false);
c('Toggler').listen('hide',l,function(n){
c('PrivacyLiteFlyoutBootloader').setChildFlyoutVisible(false);});

c('Toggler').listen('show',l,function(n){
i.showHelp();});

c('ifRequired')('ClientChromeStore',function(n){
this._clientChromeStoreUnsubscribe=n.subscribe(function(){
var o=n.getState();
if(o.bluebar.activeFlyout.type==='help'){
i.showHelp();}else 

c('PrivacyLiteFlyoutBootloader').setChildFlyoutVisible(false);});}.


bind(this));},


isFlyoutVisible:function j(){
return h&&c('Toggler').getActive()===h;},


setFlyoutVisible:function j(k){
if(k)
c('HelpLiteFlyoutBootloader').loadFlyout();

c('ifRequired')('ClientChromeStore',function(l){
l.dispatch
({type:'UPDATE_ACTIVE_FLYOUT',
data:k?'help':null});});


k?c('Toggler').show(h):c('Toggler').hide(h);}};



f.exports=i;}),null);

/** js/mercury/clients/fanta/FantaHider.js */






__d('FantaHider',['MercuryConfig','ifRequired'],(function a(b,c,d,e,f,g){

'use strict';






f.exports=

{hide:function h(){
c('ifRequired')('FantaTabsSlimApp',function(i){
i.hide();},
function(){
if(c('MercuryConfig').FantaTabView){
c('ifRequired')('FantaTabsReactApp',function(i){
i.hide();});}else 


c('ifRequired')('FantaTabsApp',function(i){
i.hide();});});},





unhide:function h(){
c('ifRequired')('FantaTabsSlimApp',function(i){
i.unhide();},
function(){
if(c('MercuryConfig').FantaTabView){
c('ifRequired')('FantaTabsReactApp',function(i){
i.unhide();});}else 


c('ifRequired')('FantaTabsApp',function(i){
i.unhide();});});}};}),



null);

/** js/video/player/commercial_break/CommercialBreakHostStoryComponentType.js */





__d('CommercialBreakHostStoryComponentType',[],(function a(b,c,d,e,f,g){

var h=
{POP_OVER_MENU:'POP_OVER_MENU',
HOST_STORY_HEADER:'HOST_STORY_HEADER'};


f.exports=h;}),null);

/** js/video/player/commercial_break/StoryComponentVideoPlayerControllerRegistry.js */









__d('StoryComponentVideoPlayerControllerRegistry',['CommercialBreakHostStoryComponentType','EventEmitter','Map'],(function a(b,c,d,e,f,g){

'use strict';









var h=new (c('EventEmitter'))(),

i=
new (c('Map'))(),
j=
new (c('Map'))(),
k=
new (c('Map'))();



function l(o){
var p=o,
q=[];
while(p){
q.unshift(p);
p=p.parentElement;}

return q;}













function m
(o,
p){

if(o===null)
return null;


var q=l(o),
r=null,
s=null;
p.forEach(function(t){var u=t[0],v=t[1],
w=l(u);
for(var x=0;x<q.length;++x)


if(q[x]!==w[x]){
if(s===null||x>s){
s=x;
r=v;}

break;}});



return r;}


var n=

{registerVideoPlayerController:function o
(p,
q){

var r=p.getVideoID(),
s=i.get
(r);

if(s){
s.push(p);}else{

s=[p];
i.set(r,s);}


var t=null;
if(q===c('CommercialBreakHostStoryComponentType').POP_OVER_MENU){
t=this.findPopoverAsyncMenuForVideoPlayerController
(p);}else


if(q===c('CommercialBreakHostStoryComponentType').HOST_STORY_HEADER)

t=this.findHostStoryControllerForVideoPlayerController
(p);


if(!t)
return;

h.emit
(t.getInstanceID()+'/register',
p);},



registerHostStoryController:function o
(p,
q,
r){

var s=k.get(q);
if(s){
s.push(p);}else{

s=[p];
k.set(q,s);}


this._informStoryComponentRegister
(p.getContainerElement(),
p.getInstanceID(),
q,
r);},



registerPopoverAsyncMenu:function o
(p,
q,
r){

var s=p.getInstanceID(),
t=j.get(q);
if(t){
t.push(p);}else{

t=[p];
j.set(q,t);}


this._informStoryComponentRegister
(p.getTriggerElement(),
s,
q,
r);},



_informStoryComponentRegister:function o
(p,
q,
r,
s){

h.addListener(q+'/register',s);

var t=
this.findVideoPlayerControllerForElement
(p,
r);

if(!t)
return;


h.emit(q+'/register',t);},


findVideoPlayerControllerForElement:function o
(p,
q){

var r=i.get(q);
if(!r)
return null;


return m
(p,
r.map(function(s){

return [s.getRootNode(),
s];}));},





findPopoverAsyncMenuForVideoPlayerController:function o
(p){

var q=j.get
(p.getVideoID());

if(!q)
return null;


return m
(p.getRootNode(),
q.map(function(r){

return [r.getTriggerElement(),
r];}));},




findHostStoryControllerForVideoPlayerController:function o
(p){

var q=k.get
(p.getVideoID());

if(!q)
return null;


return m
(p.getRootNode(),
q.map(function(r){

return [r.getContainerElement(),
r];}));}};






f.exports=n;}),null);

/** js/modules/PopoverAsyncMenu.js */






__d('PopoverAsyncMenu',['Bootloader','CommercialBreakExperiments','Event','KeyStatus','PopoverMenu','StoryComponentVideoPlayerControllerRegistry','VirtualCursorStatus','setImmediate'],(function a(b,c,d,e,f,g){var h,i,













j={},
k=0;h=babelHelpers.inherits

(l,c('PopoverMenu'));i=h&&h.prototype;










function l
(m,
n,
o,
p,
q,
r,
s){
'use strict';
i.constructor.call(this,m,n,null,q);

this._endpoint=p;
this._endpointData=r||{};
this._additionalData=s||{};
this._loadingMenu=o;
this._instanceId=k++;

this._originalEndpoint=this._endpoint;

j[this._instanceId]=this;

this._mouseoverListener=c('Event').listen
(n,
'mouseover',
this.fetchMenu.bind(this));



if('host_video_id' in this._additionalData&&
c('CommercialBreakExperiments').instreamAdsEnableNFX)

c('StoryComponentVideoPlayerControllerRegistry').registerPopoverAsyncMenu
(this,
this._additionalData.host_video_id,
this._registerVideoPlayerController.bind(this));}


l.prototype.

_onLayerInit=function(){'use strict';

if(!this._menu&&this._loadingMenu)
this.setMenu(this._loadingMenu);

this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));


this._triggerInfo=
{isKeyDown:c('KeyStatus').isKeyDown(),
isVirtualCursorTriggered:c('VirtualCursorStatus').isVirtualCursorTriggered()};



c('setImmediate')(function(){return this.fetchMenu();}.bind(this));};
l.prototype.

_onPopoverHide=function(){'use strict';
i._onPopoverHide.call(this);
this._triggerInfo=null;};
l.prototype.

_registerVideoPlayerController=
function(m){
'use strict';
m.addListener
('commercialBreak/updateOptionMenuURI',
function(n){
this._updateEndpoint(n);}.
bind(this));

m.addListener
('commercialBreak/recoverOptionMenuURI',
function(){return this._updateEndpoint(this._originalEndpoint);}.bind(this));};

l.prototype.

_updateEndpoint=function(m){'use strict';
this.setMenu(this._loadingMenu);
this._setFocus(this._loadingMenu);
this._endpoint=m;

if(this._fetched){

this._fetched=false;
this.fetchMenu();}};

l.prototype.

fetchMenu=function(){'use strict';
if(this._fetched)
return;


c('Bootloader').loadModules(["AsyncRequest"],function(m){
new m().
setURI(this._endpoint).
setData(Object.assign({pmid:this._instanceId},this._endpointData)).
send();}.
bind(this),'PopoverAsyncMenu');

this._fetched=true;

if(this._mouseoverListener){
this._mouseoverListener.remove();
this._mouseoverListener=null;}};

l.prototype.

getInstanceID=function(){'use strict';
return this._instanceId.toString();};
l.prototype.

getTriggerElement=function(){'use strict';
return this._triggerElem;};
l.prototype.

getOptionsButtonID=function(){'use strict';
return this._additionalData.options_button_id||'';};
l.prototype.

_setFocus=function(m){'use strict';var n=



this._triggerInfo||{},o=n.isKeyDown,p=n.isVirtualCursorTriggered;
this.setInitialFocus(m,o||p);
this._triggerInfo=null;};
l.


setMenu=function(m,n){'use strict';
var o=j[m];
o.setMenu(n);
o._setFocus(n);};
l.

getInstance=function(m){'use strict';
return j[m];};
l.

getInstanceByTriggerElem=function(m){'use strict';
var n=null;
Object.keys(j).forEach(function(o){
if(j[o]._triggerElem==m)
n=j[o];});


return n;};



f.exports=l;}),null);

/** js/modules/reportData.js */





__d('reportData',['Banzai','SessionName','ifRequired'],(function a(b,c,d,e,f,g){



























var h=
{retry:true};



function i(j){var k=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],
l=
{ft:k.ft||{},
gt:k.gt||{}},

m='-',
n='r',
o=c('ifRequired')
('URI',
function(q){return q.getRequestURI(true,true).getUnqualifiedURI().toString();},
function(){return location.pathname+location.search+location.hash;}),

p=

[c('SessionName').getName(),
Date.now(),
'act',


Date.now(),
0,
m,
j,
m,
m,
n,
o,
l,
0,0,0,0];

c('Banzai').post('eagle_eye_event',p,h);}


f.exports=i;}),null);

/** js/privacy/selector/store/PrivacySelectorNewDispatcher.js */





__d('PrivacySelectorNewDispatcher',['Dispatcher_DEPRECATED'],(function a(b,c,d,e,f,g){



var h='selector',

i=Object.assign(new (c('Dispatcher_DEPRECATED'))(),
{handleUpdateFromSelector:function j(k){
this.dispatch(babelHelpers['extends']
({payloadSource:h},
k));}});




f.exports=i;}),null);

/** js/ui/core/abstract/popover/PopoverLoadingMenu.js */







__d('PopoverLoadingMenu',['cx','BehaviorsMixin','DOM','PopoverMenuInterface','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits








(k,c('PopoverMenuInterface'));j=i&&i.prototype;
function k(l){'use strict';
j.constructor.call(this);
this._config=l||{};
this._theme=l.theme||{};}
k.prototype.

getRoot=function(){'use strict';
if(!this._root){
this._root=
c('DOM').create
('div',

{className:c('joinClasses')
("_54nq",
this._config.className,
this._theme.className)},


c('DOM').create('div',{className:"_54ng"},
c('DOM').create
('div',

{className:"_54nf _54af"},


c('DOM').create
('span',

{className:"_54ag"}))));






if(this._config.behaviors)
this.enableBehaviors(this._config.behaviors);}



return this._root;};



Object.assign(k.prototype,c('BehaviorsMixin'),
{_root:null});


f.exports=k;}),null);

/** js/ui/core/xui/badge/XUIBadge.js */





__d('XUIBadge',['cx','invariant','CSS','DOM','formatNumber'],(function a(b,c,d,e,f,g,h,i){








function j(l){
return parseInt(l,10)===l;}



function k(l){'use strict';
this.target=l.target;
this.count=l.count;
this.maxcount=l.maxcount;}
k.prototype.

getCount=function(){'use strict';
return this.count;};
k.prototype.

setCount=function(l){'use strict';
j(l)||i(0,'`count` must be an integer');
l>=0||i(0,'`count` must be greater than or equal to 0');

this.count=l;

c('CSS').conditionClass(this.target,'hidden_elem',this.count===0);


c('DOM').setContent
(this.target,
c('formatNumber').withMaxLimit(l,this.maxcount));

if(l>this.maxcount){
c('CSS').addClass(this.target,"_5ugi");}else 

c('CSS').removeClass(this.target,"_5ugi");};

k.prototype.


setLegacyContent=function(l){'use strict';
if(typeof l==='string'){

c('CSS').conditionClass(this.target,'hidden_elem',l==0);
c('DOM').setContent(this.target,l);
c('CSS').removeClass(this.target,"_5ugi");}else 

this.setCount(l);};

k.prototype.

increment=function(){'use strict';
this.setCount(this.getCount()+1);};



f.exports=k;}),null);

/** www/__virtual__/x/XPrivacyCustomDialogController.js */



__d("XPrivacyCustomDialogController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/privacy\/custom_dialog\/",{id:{type:"String",required:true},option_id:{type:"String",required:true},autosave:{type:"Bool",defaultValue:false},explain_tags:{type:"Bool",defaultValue:false},limit_community:{type:"Bool",defaultValue:false},limit_facebook:{type:"Bool",defaultValue:false},limit_fof:{type:"Bool",defaultValue:false},limit_tagexpand:{type:"Bool",defaultValue:false},is_new_privacy_selector:{type:"Bool",defaultValue:false},render_location:{type:"Int"},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},saved_custom_opt_in:{type:"Bool",defaultValue:false},__asyncDialog:{type:"Int"}});}),

null);
