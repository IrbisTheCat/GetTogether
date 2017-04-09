if (self.CavalryLogger) { CavalryLogger.start_js(["B4KNz"]); }

/** __static_js_modules__/pinnedconversationnubsactiontaken.js */




__d("PinnedConversationNubsActionTaken",[],(function a(b,c,d,e,f,g){

f.exports={TAB_CLOSED_BY_USER:0,COMMENT_ADDED:1};}),

null);

/** js/conversation/ConversationNub.js */





__d('ConversationNub',['csx','cx','Arbiter','ConversationNubHeader','ConversationNubTabsUpdateEventController','ConversationNubUtils','CSS','DOM','EventListener','NotificationUserActions','PinnedConversationNubsConfig','SubscriptionsHandler','UFIComposerIsTypingStore','URI','containsNode','ConversationNubTabState','debounce','guid'],(function a(b,c,d,e,f,g,h,i){

'use strict';

























var j=c('ConversationNubTabsUpdateEventController').minimizeAndInformTabUpdate,
k=c('ConversationNubTabsUpdateEventController').popOutAndInformTabUpdate,


l=c('ConversationNubTabState'),



m=10,


n=500,
o=100;p.




























createDefaultState=
function(q,
r,
s,
t,
u,
v){


return {tabID:q,
permalinkURI:r?new (c('URI'))(r):null,
ftID:s,
notifAlertID:t,
notificationType:u,
title:v,
keepAtBottom:false,
isTabRaised:false,
isBlinkingUnread:false,
badgeCount:0,
allSeenNewComments:{},
unseenCommentsSinceLastCleared:{},
hasFakeInitBadge:false};};



function p
(q,
r,
s){


var t=arguments.length<=3||arguments[3]===undefined?false:arguments[3],u=arguments.length<=4||arguments[4]===undefined?false:arguments[4];this.$ConversationNub_isFocused=false;this.$ConversationNub_hasText=false;
this.$ConversationNub_dom=q;

this.$ConversationNub_tabID=r;

this.$ConversationNub_sessionID=c('guid')();

this.$ConversationNub_scrollCheckFudgeTimer=null;

this.$ConversationNub_programmaticallyScrolling=false;

this.$ConversationNub_blinkingMouseEnterTimestamp=null;

this.$ConversationNub_shouldShowIntroNux=t;
this.$ConversationNub_shouldShowHideNux=u;

this.$ConversationNub_handler=new (c('SubscriptionsHandler'))();

this.$ConversationNub_initListeners();

this.$ConversationNub_initHeader();

if(s!=null)
l.modifyTabState(this.$ConversationNub_tabID,function(v){
if(s){
v.hasFakeInitBadge=false;}else{





v.hasFakeInitBadge=true;
this.$ConversationNub_setBadgeCount(1);
this.$ConversationNub_setIsBlinkingUnread(true);}}.

bind(this));


this.$ConversationNub_refreshFromState();}
p.prototype.

$ConversationNub_refreshFromState=function(){
this.$ConversationNub_onBadgeCountSet();
this.$ConversationNub_onBlinkingUnreadSet();
c('ConversationNubUtils').informShouldRecheckTabVisibility(this);
this.forceReflow();};
p.prototype.

getPersistentState=function(){
return l.getTabState(this.$ConversationNub_tabID);};
p.prototype.

getPersistentStateIfExists=function(){
return l.getTabStateIfExists(this.$ConversationNub_tabID);};
p.prototype.

$ConversationNub_initListeners=function(){
var q=this.$ConversationNub_getNubButtonElem();
if(q){
this.$ConversationNub_handler.addSubscriptions
(c('EventListener').listen
(q,
'click',
this.$ConversationNub_onClickNubButton.bind(this)),

c('EventListener').listen
(q,
'mouseenter',
this.$ConversationNub_onMouseEnterNubButton.bind(this)),

c('EventListener').listen
(q,
'mouseleave',
this.$ConversationNub_onMouseLeaveNubButton.bind(this)));


var r=c('ConversationNubUtils').getCloseButtonElem(q);
if(r)
c('ConversationNubUtils').addCloseButtonListeners
(r,
this.$ConversationNub_handler,
this.$ConversationNub_onCloseButton.bind(this));}




var s=this.$ConversationNub_getScrollableElem();
if(s){
l.modifyTabState(this.$ConversationNub_tabID,function(u){
u.keepAtBottom=true;});




this.$ConversationNub_handler.addSubscriptions
(c('EventListener').listen
(s,
'scroll',
c('debounce')(this.$ConversationNub_onScroll.bind(this),o)),

c('Arbiter').subscribe('reflow',this.$ConversationNub_onReflow.bind(this)));}



var t=this.$ConversationNub_getFlyoutElem();
if(t)
this.$ConversationNub_handler.addSubscriptions
(c('EventListener').listen
(t,
'focusin',
this.$ConversationNub_setIsFocused.bind(this,true)),

c('EventListener').listen
(t,
'focusout',
this.$ConversationNub_setIsFocused.bind(this,false)));};



p.prototype.

$ConversationNub_initHeader=function(){
var q=this.$ConversationNub_getFlyoutTitleBarElem();
if(!q){
this.$ConversationNub_header=null;
return;}


var r=function(){
var t=this.getPersistentState();

return {permalinkURI:t.permalinkURI,
ftID:t.ftID,
tabID:t.tabID};}.

bind(this),

s=new (c('ConversationNubHeader'))(q,r);

this.$ConversationNub_handler.addSubscriptions
(s.subscribe('closeButton',this.$ConversationNub_onCloseButton.bind(this)),
s.subscribe('showMenu',this.$ConversationNub_onShowMenu.bind(this)),
s.subscribe('hideMenu',this.$ConversationNub_onHideMenu.bind(this)),


s.subscribe
('minimizeButton',
this.$ConversationNub_minimizeWithInform.bind(this,true)),

s.subscribe
('clickHeader',
this.$ConversationNub_minimizeWithInform.bind(this,true)),

s.subscribe
('menuPermalinkClick',
this.$ConversationNub_minimizeWithInform.bind(this,false)),

c('UFIComposerIsTypingStore').addListener(function(){
var t=this.getPersistentStateIfExists();
if(!t)
return;


var u=this.$ConversationNub_hasText,
v=c('UFIComposerIsTypingStore').getValueFor(t.ftID);
this.$ConversationNub_hasText=v===true;

if(u!==this.$ConversationNub_hasText)






c('ConversationNubTabsUpdateEventController').informTabsUpdated();}.

bind(this)));


this.$ConversationNub_header=s;};
p.prototype.

$ConversationNub_getFlyoutTitleBarElem=function(){
return this.$ConversationNub_dom&&c('DOM').scry(this.$ConversationNub_dom,".fbNubFlyoutTitlebar")[0];};
p.prototype.

$ConversationNub_getNubButtonElem=function(){
return this.$ConversationNub_dom&&c('DOM').scry(this.$ConversationNub_dom,".fbNubButton")[0];};
p.prototype.

$ConversationNub_getScrollableElem=function(){


if(!this.$ConversationNub_scrollElem&&this.$ConversationNub_dom)
this.$ConversationNub_scrollElem=c('DOM').scry(this.$ConversationNub_dom,".uiScrollableAreaWrap")[0];

return this.$ConversationNub_scrollElem;};
p.prototype.

$ConversationNub_getFlyoutElem=function(){


if(!this.$ConversationNub_flyoutElem&&this.$ConversationNub_dom)
this.$ConversationNub_flyoutElem=c('DOM').scry(this.$ConversationNub_dom,".fbNubFlyoutBodyContent")[0];

return this.$ConversationNub_flyoutElem;};
p.prototype.

$ConversationNub_getCountBadgeElem=function(){
var q=this.$ConversationNub_getNubButtonElem();
if(q)
return c('DOM').scry(q,"._37op")[0];

return null;};
p.prototype.

$ConversationNub_onCloseButton=function(){
c('ConversationNubUtils').informShouldCloseTab
(this.$ConversationNub_tabID,
this.getFeedbackTargetID(),
c('ConversationNubUtils').CLOSE_REASON_TAB_X_OUT);};

p.prototype.

$ConversationNub_minimizeWithInform=function(q){
j
(this,
q);};

p.prototype.

$ConversationNub_onShowMenu=function(){
this.$ConversationNub_dom&&c('CSS').addClass(this.$ConversationNub_dom,"_1uw3");};
p.prototype.

$ConversationNub_onHideMenu=function(){
this.$ConversationNub_dom&&c('CSS').removeClass(this.$ConversationNub_dom,"_1uw3");};
p.prototype.

$ConversationNub_onClickNubButton=function(){
if(this.getPersistentState().isTabRaised){
j
(this,
true);}else 


k
(this,
true);};


p.prototype.

$ConversationNub_onMouseEnterNubButton=function(){
if(this.getPersistentState().isBlinkingUnread)
this.$ConversationNub_blinkingMouseEnterTimestamp=new Date();};

p.prototype.

$ConversationNub_onMouseLeaveNubButton=function(){
var q=this.$ConversationNub_blinkingMouseEnterTimestamp;
if(q&&this.getPersistentState().isBlinkingUnread){
var r=new Date();
if(r-q>=n)
this.$ConversationNub_setIsBlinkingUnread(false);}


this.$ConversationNub_blinkingMouseEnterTimestamp=null;};
p.prototype.

$ConversationNub_scrollToBottom=function(){
var q=this.$ConversationNub_getScrollableElem();

if(q){
var r=q.scrollHeight;
if(r>0&&!this.$ConversationNub_isScrolledToBottom(q)){
this.$ConversationNub_programmaticallyScrolling=true;
q.scrollTop=r;}}};


p.prototype.

$ConversationNub_isScrolledToBottom=


function(q){

q=q||this.$ConversationNub_getScrollableElem();

return !!(q&&
q.scrollTop>=
q.scrollHeight-
q.clientHeight-
m);};


p.prototype.

$ConversationNub_onScroll=function(){

if(!l.getTabStateIfExists(this.$ConversationNub_tabID)||
!this.getPersistentState().isTabRaised)

return;


l.modifyTabState(this.$ConversationNub_tabID,function(q){
q.keepAtBottom=this.$ConversationNub_isScrolledToBottom();
c('ConversationNubUtils').informShouldRecheckTabVisibility(this);}.
bind(this));




if(!this.$ConversationNub_programmaticallyScrolling)
this.clearJewelNotifications();


this.$ConversationNub_programmaticallyScrolling=false;};
p.prototype.

$ConversationNub_setIsFocused=function(q){
if(this.$ConversationNub_isFocused===q)
return;


this.$ConversationNub_isFocused=q;

if(this.$ConversationNub_isFocused)

this.clearJewelNotifications();








c('ConversationNubTabsUpdateEventController').informTabsUpdated();};
p.prototype.

getIsFocused=function(){
return this.$ConversationNub_isFocused;};
p.prototype.

getHasText=function(){
return this.$ConversationNub_hasText;};
p.prototype.

$ConversationNub_onReflow=function(){
var q=this.getPersistentState();
if(!q.isTabRaised)
return;


if(q.keepAtBottom){
this.$ConversationNub_scrollToBottom();

this.$ConversationNub_scrollCheckFudgeTimer&&clearTimeout(this.$ConversationNub_scrollCheckFudgeTimer);
this.$ConversationNub_scrollCheckFudgeTimer=setTimeout(function(){
if(q.keepAtBottom)
this.$ConversationNub_scrollToBottom();}.

bind(this),100);}};

p.prototype.

$ConversationNub_setBadgeCount=function(q){
l.modifyTabState(this.$ConversationNub_tabID,function(r){
r.badgeCount=q;
this.$ConversationNub_onBadgeCountSet();}.
bind(this));};
p.prototype.

$ConversationNub_setIsBlinkingUnread=function(q){
l.modifyTabState(this.$ConversationNub_tabID,function(r){
r.isBlinkingUnread=q;
this.$ConversationNub_onBlinkingUnreadSet();}.
bind(this));};
p.prototype.

$ConversationNub_onBadgeCountSet=function(){
var q=this.$ConversationNub_getCountBadgeElem();
if(!q)
return;


var r=this.getPersistentState().badgeCount,

s=r>0;

if(s){
c('DOM').setContent(q,r);
c('CSS').show(q);}else{

c('CSS').hide(q);
c('DOM').setContent(q,r);}};

p.prototype.

$ConversationNub_onBlinkingUnreadSet=function(){
if(this.$ConversationNub_dom){
var q=this.getPersistentState().isBlinkingUnread;
c('CSS').conditionClass(this.$ConversationNub_dom,"_53tf",q);}};

p.prototype.

getRootDOM=function(){
return this.$ConversationNub_dom;};
p.prototype.

getShouldShowIntroNux=function(){
return this.$ConversationNub_shouldShowIntroNux;};
p.prototype.

getShouldShowHideNux=function(){
return this.$ConversationNub_shouldShowHideNux;};
p.prototype.

getTabID=function(){
return this.$ConversationNub_tabID;};
p.prototype.

getNotificationAlertID=function(){
return this.getPersistentState().notifAlertID;};
p.prototype.

getNotificationType=function(){
return this.getPersistentState().notificationType;};
p.prototype.

setNotificationType=function(q){
l.modifyTabState(this.$ConversationNub_tabID,function(r){
r.notificationType=q;});};

p.prototype.

getFeedbackTargetID=function(){
return this.getPersistentState().ftID;};
p.prototype.

getPermalinkURI=function(){
return this.getPersistentState().permalinkURI;};
p.prototype.

getTitle=function(){
return this.getPersistentState().title;};
p.prototype.

getBadgeCount=function(){
return this.getPersistentState().badgeCount;};
p.prototype.

getIsRaised=function(){
return this.getPersistentState().isTabRaised;};
p.prototype.

getSessionID=function(){
return this.$ConversationNub_sessionID;};
p.prototype.

markCommentsAsSeenWithoutBadging=function(q){
l.modifyTabState(this.$ConversationNub_tabID,function(r){
q.forEach(function(s){
r.allSeenNewComments[s]=true;});});};


p.prototype.

attemptAddNewCommentsToBadge=function(q){
l.modifyTabState(this.$ConversationNub_tabID,function(r){
q.forEach(function(u){
if(r.allSeenNewComments[u])
return;

r.allSeenNewComments[u]=true;
r.unseenCommentsSinceLastCleared[u]=true;});


var s=Object.keys(r.unseenCommentsSinceLastCleared).length;
if(r.hasFakeInitBadge)


s+=1;


var t=r.badgeCount;
this.$ConversationNub_setBadgeCount(s);

this.$ConversationNub_setIsBlinkingUnread(s>0&&s>t);}.
bind(this));};
p.prototype.

clearBadge=function(){
l.clearTabNotifications(this.$ConversationNub_tabID);
this.$ConversationNub_onBadgeCountSet();
this.$ConversationNub_onBlinkingUnreadSet();};
p.prototype.

clearJewelNotifications=function(){
if(c('PinnedConversationNubsConfig').sharedNotificationsReadStateEnabled){
var q=this.getNotificationAlertID();
if(q)
c('NotificationUserActions').markNotificationsAsRead([q]);}};


p.prototype.

popOutAndInformTabUpdate=function(){
this.popOut();
c('ConversationNubTabsUpdateEventController').informTabsUpdated();};
p.prototype.



popOut=function(){
l.modifyTabState(this.$ConversationNub_tabID,function(q){
if(this.$ConversationNub_dom)
c('CSS').addClass(this.$ConversationNub_dom,"_5r93");


q.isTabRaised=true;
this.clearBadge();



if(q.keepAtBottom)
this.$ConversationNub_scrollToBottom();}.

bind(this));};
p.prototype.



minimize=function(){
l.modifyTabState(this.$ConversationNub_tabID,function(q){
if(this.$ConversationNub_dom)
c('CSS').removeClass(this.$ConversationNub_dom,"_5r93");

q.isTabRaised=false;
this.$ConversationNub_header&&this.$ConversationNub_header.hideMenu();
this.clearBadge();}.
bind(this));};
p.prototype.

forceReflow=function(){
this.$ConversationNub_onReflow();};
p.prototype.

isFormForThisUFI=function(q){
return this.$ConversationNub_dom&&c('containsNode')(this.$ConversationNub_dom,q);};
p.prototype.

destroy=function(){
this.$ConversationNub_handler.release();
this.$ConversationNub_header&&this.$ConversationNub_header.destroy();
this.$ConversationNub_header=null;
this.$ConversationNub_scrollCheckFudgeTimer&&clearTimeout(this.$ConversationNub_scrollCheckFudgeTimer);

this.minimize();

if(this.$ConversationNub_dom){
c('DOM').remove(this.$ConversationNub_dom);
c('Arbiter').inform('ConversationNub/destroy',{root:this.$ConversationNub_dom});
this.$ConversationNub_dom=null;}};




f.exports=p;}),null);

/** www/__virtual__/x/XConversationNubActionTakenController.js */



__d("XConversationNubActionTakenController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ajax\/conversation\/nub_story\/action_taken\/",{});}),

null);

/** js/conversation/ConversationNubActionTakenReporter.js */





__d('ConversationNubActionTakenReporter',['Arbiter','AsyncRequest','ConversationNubAddCommentSubscription','ConversationNubUtils','PinnedConversationNubsActionTaken','SubscriptionsHandler','XConversationNubActionTakenController'],(function a(b,c,d,e,f,g){

'use strict';
















function h(){this.















$ConversationNubActionTakenReporter_onAddComment=
function(i,
j){

this.$ConversationNubActionTakenReporter_reportActionTaken
(j,
c('PinnedConversationNubsActionTaken').COMMENT_ADDED);}.

bind(this);this.

$ConversationNubActionTakenReporter_onCloseTab=
function(event,i){

var j=i.tabID,k=i.ftID,l=i.tabState,m=i.sessionID,n=i.reason;

if(n===c('ConversationNubUtils').CLOSE_REASON_TAB_X_OUT||
n===c('ConversationNubUtils').CLOSE_REASON_OVERFLOW_X_OUT||
n===c('ConversationNubUtils').CLOSE_REASON_UNPIN)

this.$ConversationNubActionTakenReporter_reportActionTaken
(k,
c('PinnedConversationNubsActionTaken').TAB_CLOSED_BY_USER);}.


bind(this);this.$ConversationNubActionTakenReporter_handler=new (c('SubscriptionsHandler'))(c('ConversationNubAddCommentSubscription').subscribe(this.$ConversationNubActionTakenReporter_onAddComment),c('Arbiter').subscribe(c('ConversationNubUtils').CLOSE_TAB_EVENT,this.$ConversationNubActionTakenReporter_onCloseTab));}h.prototype.destroy=function(){this.$ConversationNubActionTakenReporter_handler.release();};h.prototype.

$ConversationNubActionTakenReporter_reportActionTaken=
function(i,
j){

var k=c('XConversationNubActionTakenController').getURIBuilder().getURI();

new (c('AsyncRequest'))().
setURI(k).
setMethod('POST').
setData
({ft_id:i,
action:j}).

setAllowCrossPageTransition(true).
send();};



f.exports=h;}),null);

/** js/conversation/ConversationNubAddCommentSubscription.js */





__d('ConversationNubAddCommentSubscription',['Arbiter','UFIUIEvents','ConversationNubTabState'],(function a(b,c,d,e,f,g){

'use strict';













function h
(i){

return c('Arbiter').subscribe
(c('UFIUIEvents').Comment,

function(j,k){

var l=k.ft_id,m=k.form;
if(!l||!m)
return;


var n=c('ConversationNubTabState').getLoadedTabByFeedbackTarget(l);
if(n&&n.isFormForThisUFI(m))
i(n,l);});}





f.exports=
{subscribe:h};}),null);

/** js/conversation/ConversationNubHeader.js */







__d('ConversationNubHeader',['csx','ArbiterMixin','Bootloader','ConversationNubUtils','DOM','Event','EventListener','Keys','SubscriptionsHandler','ifRequired','mixin'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;
























function k(m,n){
return c('EventListener').listen
(m,
'keydown',
function(o){
if(c('Event').getKeyCode(o)===c('Keys').RETURN)
n(o);});}



i=babelHelpers.inherits

(l,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;










function l
(m,
n){

j.constructor.call(this);this.$ConversationNubHeader_isDestroyed=false;

this.$ConversationNubHeader_headerRoot=m;
this.$ConversationNubHeader_menuPropsBuilder=n;

this.$ConversationNubHeader_bootloadedMenu=null;
this.$ConversationNubHeader_shouldMountMenuImmediatelyOpen=false;

this.$ConversationNubHeader_handler=new (c('SubscriptionsHandler'))();
this.$ConversationNubHeader_initListeners();}
l.prototype.

$ConversationNubHeader_initListeners=function(){
var m=this.$ConversationNubHeader_headerRoot;
this.$ConversationNubHeader_handler.addSubscriptions
(c('EventListener').listen
(m,
'click',
this.$ConversationNubHeader_onClickFlyoutTitleBar.bind(this)));



var n=c('ConversationNubUtils').getCloseButtonElem(m);
if(n)
c('ConversationNubUtils').addCloseButtonListeners
(n,
this.$ConversationNubHeader_handler,
this.$ConversationNubHeader_onCloseButton.bind(this));



var o=this.$ConversationNubHeader_getMinimizeButtonElem();
if(o)
this.$ConversationNubHeader_handler.addSubscriptions
(c('EventListener').listen
(o,
'click',
this.$ConversationNubHeader_onMinimizeButton.bind(this)),


k(o,this.$ConversationNubHeader_onMinimizeButton.bind(this)));



var p=this.$ConversationNubHeader_getMenuButtonElem();
if(p)
this.$ConversationNubHeader_handler.addSubscriptions
(c('EventListener').listen
(p,
'click',
this.$ConversationNubHeader_onClickMenuButton.bind(this)),

c('EventListener').listen
(p,
'mouseover',
this.$ConversationNubHeader_onMouseoverMenuButton.bind(this)),

c('EventListener').listen
(p,
'focus',
this.$ConversationNubHeader_onFocusMenuButton.bind(this)),


k(p,this.$ConversationNubHeader_onReturnKeyMenuButton.bind(this)));};


l.prototype.

$ConversationNubHeader_getMenuButtonElem=function(){
return c('DOM').scry(this.$ConversationNubHeader_headerRoot,"._1rf1")[0];};
l.prototype.

$ConversationNubHeader_getMinimizeButtonElem=function(){
return c('DOM').scry
(this.$ConversationNubHeader_headerRoot,
"._4a56")[
0];};
l.prototype.

$ConversationNubHeader_getCloseButtonElem=function(){
return c('ConversationNubUtils').getCloseButtonElem(this.$ConversationNubHeader_headerRoot);};
l.prototype.

$ConversationNubHeader_onCloseButton=function(){
this.inform('closeButton');};
l.prototype.

$ConversationNubHeader_onMinimizeButton=function(m){
if(m.type==='click')
m.kill();


this.inform('minimizeButton');};
l.prototype.

$ConversationNubHeader_onClickFlyoutTitleBar=function(){
this.inform('clickHeader');};
l.prototype.

$ConversationNubHeader_onMenuShow=function(){
this.inform('showMenu');};
l.prototype.

$ConversationNubHeader_onMenuHide=function(){
this.inform('hideMenu');


var m=this.$ConversationNubHeader_getMenuButtonElem();
m&&m.blur();};
l.prototype.

$ConversationNubHeader_onMenuPermalinkClick=function(){
this.inform('menuPermalinkClick');};
l.prototype.

$ConversationNubHeader_bootloadOptionsMenu=function(m){
if(this.$ConversationNubHeader_bootloadedMenu)
return;


var n=this.$ConversationNubHeader_getMenuButtonElem();
if(!n)
return;





if(m)
this.$ConversationNubHeader_shouldMountMenuImmediatelyOpen=true;


c('Bootloader').loadModules
(["React","ReactDOM","ConversationNubHeaderMenu.react"],
function(o,p,q){
if(this.$ConversationNubHeader_isDestroyed)


return;


var r=babelHelpers['extends']({},
this.$ConversationNubHeader_menuPropsBuilder(),
{onMenuShow:this.$ConversationNubHeader_onMenuShow.bind(this),
onMenuHide:this.$ConversationNubHeader_onMenuHide.bind(this),
onPermalinkClick:this.$ConversationNubHeader_onMenuPermalinkClick.bind(this),
showOnMount:this.$ConversationNubHeader_shouldMountMenuImmediatelyOpen});

this.$ConversationNubHeader_bootloadedMenu=p.render
(o.createElement(q,
r),

n);}.

bind(this),'ConversationNubHeader');};

l.prototype.

$ConversationNubHeader_onClickMenuButton=function(m){
m.kill();
this.$ConversationNubHeader_bootloadOptionsMenu(true);};
l.prototype.

$ConversationNubHeader_onMouseoverMenuButton=function(){
this.$ConversationNubHeader_bootloadOptionsMenu(false);};
l.prototype.

$ConversationNubHeader_onFocusMenuButton=function(){
this.$ConversationNubHeader_bootloadOptionsMenu(false);};
l.prototype.

$ConversationNubHeader_onReturnKeyMenuButton=function(){
if(this.$ConversationNubHeader_bootloadedMenu){
this.$ConversationNubHeader_bootloadedMenu.toggle();}else 

this.$ConversationNubHeader_bootloadOptionsMenu(true);};

l.prototype.

hideMenu=function(){
this.$ConversationNubHeader_bootloadedMenu&&this.$ConversationNubHeader_bootloadedMenu.hide();};
l.prototype.

destroy=function(){
this.$ConversationNubHeader_isDestroyed=true;

var m=this.$ConversationNubHeader_getMenuButtonElem();
if(m&&this.$ConversationNubHeader_bootloadedMenu)
c('ifRequired')('ReactDOM',function(n){
n.unmountComponentAtNode(m);});


this.$ConversationNubHeader_handler.release();};



f.exports=l;}),null);

/** js/conversation/ConversationNubTabState.js */





__d('ConversationNubTabState',['invariant','ConversationNubTabStateList','PinnedConversationNubsConfig'],(function a(b,c,d,e,f,g,h){

'use strict';





















function i(){this.$ConversationNubTabStateClass_loadedTabMap=Object.create(null);this.$ConversationNubTabStateClass_tabStateList=new (c('ConversationNubTabStateList'))();this.$ConversationNubTabStateClass_maxDockTabs=Infinity;this.maxTabsLoaded=Infinity;

if(c('PinnedConversationNubsConfig').numberOfTabsLimit&&
c('PinnedConversationNubsConfig').numberOfTabsLimit>0)

this.maxTabsLoaded=c('PinnedConversationNubsConfig').numberOfTabsLimit;}

i.prototype.

anyTabHasFocus=function(){
return this.getUnsortedLoadedTabs().some(function(j){return j.getIsFocused();});};
i.prototype.

anyTabHasText=function(){
return this.getUnsortedLoadedTabs().some(function(j){return j.getHasText();});};
i.prototype.

getTabState=function(j){
return this.$ConversationNubTabStateClass_tabStateList.getTabState(j);};
i.prototype.


getTabStateIfExists=function(j){
return this.$ConversationNubTabStateClass_tabStateList.getTabStateIfExists(j);};
i.prototype.


getUnloadedTabs=function(){
var j=this.$ConversationNubTabStateClass_tabStateList.getTabs().
filter(function(k){return !this.getLoadedTab(k.tabID);}.bind(this));

return j;};
i.prototype.

setMaxDockTabs=function(j){
this.$ConversationNubTabStateClass_maxDockTabs=j;};
i.prototype.

getNumDockTabs=function(){
var j=this.$ConversationNubTabStateClass_maxDockTabs,
k=this.getTotalTabCount();

return Math.min(j,k);};
i.prototype.

getNumMenuTabs=function(){
return this.getTotalTabCount()-this.getNumDockTabs();};
i.prototype.






addTabState=
function(j){

this.$ConversationNubTabStateClass_tabStateList.push(j);};
i.prototype.






addLoadedTab=
function(j,
k){

var l=this.getTabState(j);
if(!l)





return;


var m=this.getLoadedTab(j);
if(m)





return;


this.$ConversationNubTabStateClass_loadedTabMap[j]=k;

this.$ConversationNubTabStateClass_trimOverflowListIfNecessary();};
i.prototype.

getLoadedTab=function(j){
return this.$ConversationNubTabStateClass_loadedTabMap[j];};
i.prototype.

getLoadedTabByFeedbackTarget=function(j){
return this.getLoadedTabs().find
(function(k){return k.getPersistentState().ftID===j;});};

i.prototype.

isTabInDock=function(j){
var k=this.getLoadedTab(j);
if(!k)
return false;


var l=this.$ConversationNubTabStateClass_getLoadedTabIndex(k);
return 0<=l&&l<this.getNumDockTabs();};
i.prototype.

clearTabNotifications=function(j){
this.$ConversationNubTabStateClass_tabStateList.modifyTabState(j,function(k){
k.unseenCommentsSinceLastCleared={};
k.hasFakeInitBadge=false;
k.badgeCount=0;
k.isBlinkingUnread=false;});};

i.prototype.


deleteTab=function(j){

var k=this.getLoadedTab(j);
if(k){
delete this.$ConversationNubTabStateClass_loadedTabMap[j];
k.destroy();}


this.$ConversationNubTabStateClass_tabStateList.remove(j);

return Boolean(k);};
i.prototype.

deleteAllTabs=function(){
this.getUnsortedLoadedTabs().forEach
(function(j){return this.deleteTab(j.getTabID());}.bind(this));};

i.prototype.

modifyTabState=
function(j,
k){

return this.$ConversationNubTabStateClass_tabStateList.modifyTabState(j,k);};
i.prototype.







moveTabToDockLeft=function(j){
var k=this.getLoadedTab(j);

if(!k)






return;



this.$ConversationNubTabStateClass_tabStateList.modifyTabs(function(l){
var m=
l.findIndex(function(v){return v.tabID===j;});

m!==-1||h(0,
'Could not find tab state in storage');


var n=l[m],

o=this.$ConversationNubTabStateClass_getLoadedTabIndex(k),
p=this.getLoadedTabs().length,
q=this.getNumDockTabs();
if(o<0||p===0){
return l;}else
if(q===0){
if(o!==0){


l.splice(m,1);
l.unshift(n);}

return l;}



var r=q-1;
if(o===r)
return l;



l.splice(m,1);

if(o<r)


r-=1;




var s=this.getLoadedTabs()[r],
t=
this.getTabState(s.getTabID());


t||h(0,
"Tried to move loaded tab, but couldn't find state");


var u=l.
findIndex(function(v){return v.tabID===t.tabID;});


l.splice(u,0,n);

return l;}.
bind(this));};
i.prototype.

getLoadedTabs=function(){
var j=this.$ConversationNubTabStateClass_tabStateList.getTabs().
map(function(k){return this.getLoadedTab(k.tabID);}.bind(this)).
filter(Boolean);

return j;};
i.prototype.




getUnsortedLoadedTabs=function(){
var j=Object.values(this.$ConversationNubTabStateClass_loadedTabMap);
return j;};
i.prototype.

getTotalTabCount=function(){
return this.getUnsortedLoadedTabs().length;};
i.prototype.

getTabsForDockOldestFirst=function(){
return this.getLoadedTabs().slice(0,this.getNumDockTabs());};
i.prototype.

getTabsForDockNewestFirst=function(){

return this.getTabsForDockOldestFirst().slice().reverse();};
i.prototype.

getTabsForMenuOldestFirst=function(){
return this.getLoadedTabs().slice(this.getNumDockTabs());};
i.prototype.

getTabsForMenuNewestFirst=function(){



return this.getLoadedTabs().slice(this.getNumDockTabs()).reverse();};
i.prototype.

$ConversationNubTabStateClass_trimOverflowListIfNecessary=function(){
if(this.maxTabsLoaded!==Infinity){
var j=this.getLoadedTabs().length;
if(j>this.maxTabsLoaded){
var k=j-this.maxTabsLoaded,
l=this.getTabsForMenuOldestFirst().slice
(0,
k);


l.
map(function(m){return m.getTabID();}).
forEach(function(m){return this.deleteTab(m);}.bind(this));}}};


i.prototype.

$ConversationNubTabStateClass_getLoadedTabIndex=function(j){
return this.getLoadedTabs().indexOf(j);};









f.exports=new i();}),null);

/** js/modules/PersistedStore.js */





__d('PersistedStore',['invariant','EventListener','SubscriptionsHandler','UserAgent','WebStorage','areEqual','deepFreezeValue'],(function a(b,c,d,e,f,g,h){

'use strict';





















































































function i(j){





































var k=j.initialValue,l=j.storageKeyPrefix,m=j.serializer,n=j.deserializer,o=j.onDataUpdatedOutOfBand,p=j.onDataUpdatedInOtherBrowserTab,q=j.enablePersistence,r=q===undefined?true:q;this.$PersistedStore_dataWithOngoingModification=null;this.$PersistedStore_cachedFrozenData=null;this.$PersistedStore_highWaterMark=0;this.$PersistedStore_subscriptionsHandler=new (c('SubscriptionsHandler'))();
if(r)
this.$PersistedStore_localStorage=c('WebStorage').getLocalStorage();


this.$PersistedStore_data=k;
this.$PersistedStore_storageKeyPrefix=l;
this.$PersistedStore_metadataStorageKey=l+'.PersistedStoreMetadata';
this.$PersistedStore_serializer=m;
this.$PersistedStore_deserializer=n;
this.$PersistedStore_onDataUpdatedOutOfBand=o;
this.$PersistedStore_onDataUpdatedInOtherBrowserTab=p;



if(r&&p)
this.$PersistedStore_listenToStorageIfPossible();


this.reloadFromStorageIfNecessary();}
i.prototype.

$PersistedStore_listenToStorageIfPossible=function(){






if(c('UserAgent').isBrowser('Chrome')&&
typeof BroadcastChannel==='function'){

this.$PersistedStore_broadcastChannel=new BroadcastChannel
(i.BROADCAST_CHANNEL_NAME);

this.$PersistedStore_broadcastChannel.onmessage=this.$PersistedStore_onBroadcastMessage.bind(this);}else 


this.$PersistedStore_subscriptionsHandler.addSubscriptions
(c('EventListener').listen
(window,
'storage',
this.$PersistedStore_onStorageEvent.bind(this)));};



i.prototype.

$PersistedStore_onBroadcastMessage=function(j){
this.$PersistedStore_onStorageUpdated();};
i.prototype.

$PersistedStore_onStorageEvent=function(j){
if(j.key===this.$PersistedStore_storageKeyPrefix)
this.$PersistedStore_onStorageUpdated();};

i.prototype.

$PersistedStore_onStorageUpdated=function(){
var j=this.$PersistedStore_readDataFromLocalStorage();
if(j&&this.$PersistedStore_onDataUpdatedInOtherBrowserTab)
this.$PersistedStore_onDataUpdatedInOtherBrowserTab(j);};

i.prototype.

$PersistedStore_getClone=function(j){




var k=JSON.stringify(this.$PersistedStore_serializer(j));
return this.$PersistedStore_deserializer(JSON.parse(k));};
i.prototype.





$PersistedStore_getClonedData=function(){
return this.$PersistedStore_getClone(this.$PersistedStore_data);};
i.prototype.

isPersisted=function(){
return this.$PersistedStore_localStorage!=null;};
i.prototype.






modify=function(j){
this.$PersistedStore_cachedFrozenData=null;

if(!this.isPersisted()){
this.$PersistedStore_data=j(this.$PersistedStore_data);}else
if(this.$PersistedStore_dataWithOngoingModification){
this.$PersistedStore_dataWithOngoingModification=
j(this.$PersistedStore_dataWithOngoingModification);}else{

var k=void 0;


try{this.$PersistedStore_dataWithOngoingModification=this.$PersistedStore_getClonedData();
k=j(this.$PersistedStore_dataWithOngoingModification);}finally{

this.$PersistedStore_dataWithOngoingModification=null;}


if(k&&!c('areEqual')(this.$PersistedStore_data,k)){
this.$PersistedStore_data=k;
this.$PersistedStore_persistData();}}};


i.prototype.

getData=function(){
if(!this.isPersisted()){
return this.$PersistedStore_data;}else
if(this.$PersistedStore_cachedFrozenData)
return this.$PersistedStore_cachedFrozenData;


var j=void 0;

if(this.$PersistedStore_dataWithOngoingModification){
j=this.$PersistedStore_getClone(this.$PersistedStore_dataWithOngoingModification);
c('deepFreezeValue')(j);}else{


j=this.$PersistedStore_getClonedData();
c('deepFreezeValue')(j);




this.$PersistedStore_cachedFrozenData=j;}


return j;};
i.prototype.

$PersistedStore_checkVersionCompatAndDisableIfNecessary=function(j){
if(this.$PersistedStore_localStorage!=null)
if(j>i.VERSION){


this.$PersistedStore_localStorage=null;}else
if(j<i.VERSION){



this.$PersistedStore_localStorage.removeItem(this.$PersistedStore_metadataStorageKey);

this.$PersistedStore_localStorage.removeItem(this.$PersistedStore_storageKeyPrefix);}else 

return true;



return false;};
i.prototype.

$PersistedStore_getMetadataFromStorage=function(){

try{if(this.$PersistedStore_localStorage!=null){
var k=
this.$PersistedStore_localStorage.getItem(this.$PersistedStore_metadataStorageKey);
if(k!=null){
var l=JSON.parse(k),
m=Number.parseInt(l.highWaterMark,10),
n=Number.parseInt(l.version,10);

if(m&&n)

return {highWaterMark:m,
version:n};}}}catch(




j){

this.$PersistedStore_localStorage=null;}


return null;};
i.prototype.

reloadFromStorageIfNecessary=function(){
if(!this.isPersisted())
return;


var j=this.$PersistedStore_getMetadataFromStorage();
if(j){

var k=

j.highWaterMark,l=j.version;


if(this.$PersistedStore_checkVersionCompatAndDisableIfNecessary(l)&&
this.$PersistedStore_highWaterMark<k)

this.$PersistedStore_reloadFromLocalStorage(k);}};


i.prototype.

$PersistedStore_reloadFromLocalStorage=function(j){
var k=this.$PersistedStore_readDataFromLocalStorage();
if(k)
this.$PersistedStore_reload(k,j);};

i.prototype.

$PersistedStore_readDataFromLocalStorage=function(){
var j=null;


try{if(this.$PersistedStore_localStorage){
var l=this.$PersistedStore_localStorage.getItem(this.$PersistedStore_storageKeyPrefix);
if(l!=null)
j=JSON.parse(l);}}catch(


k){

this.$PersistedStore_localStorage=null;}


return this.$PersistedStore_deserializer(j);};
i.prototype.

$PersistedStore_reload=
function(j,
k){

this.$PersistedStore_cachedFrozenData=null;


var l=this.$PersistedStore_data;
this.$PersistedStore_data=j;
this.$PersistedStore_highWaterMark=k;


this.$PersistedStore_onDataUpdatedOutOfBand(l,j);};
i.prototype.

$PersistedStore_persistData=function(){
this.reloadFromStorageIfNecessary();



if(!this.isPersisted())
return;


var j=this.$PersistedStore_serializer(this.$PersistedStore_data),
k=JSON.stringify(j),

l=
{highWaterMark:++this.$PersistedStore_highWaterMark,
version:i.VERSION},


m=JSON.stringify(l);


try{this.$PersistedStore_localStorage!=null||h(0,"Can't be null here");
this.$PersistedStore_localStorage.setItem(this.$PersistedStore_metadataStorageKey,m);

this.$PersistedStore_localStorage.setItem(this.$PersistedStore_storageKeyPrefix,k);



if(this.$PersistedStore_broadcastChannel)
this.$PersistedStore_broadcastChannel.postMessage
(i.BROADCAST_CHANNEL_NAME);}catch(


n){

this.$PersistedStore_localStorage=null;}};

i.prototype.

$PersistedStore_destroy=function(){
this.$PersistedStore_subscriptionsHandler.release();
if(this.$PersistedStore_broadcastChannel)
this.$PersistedStore_broadcastChannel.close();};

i.VERSION=24;i.BROADCAST_CHANNEL_NAME='PersistedStoreMessage-StorageUpdated';


f.exports=i;}),null);

/** shared/fbjs/functional/filterSet.js */





__d('filterSet',['Set'],(function a(b,c,d,e,f,g){

'use strict';







function h
(i,
j){

var k=new (c('Set'))();
for(var l=i,m=Array.isArray(l),n=0,l=m?l:l[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var o;if(m){if(n>=l.length)break;o=l[n++];}else{n=l.next();if(n.done)break;o=n.value;}var p=o;
if(j(p))
k.add(p);}



return k;}


f.exports=h;}),null);

/** shared/fbjs/functional/differenceSets.js */





__d('differenceSets',['filterSet'],(function a(b,c,d,e,f,g){

'use strict';









function h
(i){

for(var j=arguments.length,k=Array(j>1?j-1:0),l=1;l<j;l++)k[l-1]=arguments[l];
return c('filterSet')
(i,
function(m){return !k.some
(function(n){return n.has(m);});});}




f.exports=h;}),null);

/** js/conversation/ConversationNubTabStateList.js */





__d('ConversationNubTabStateList',['invariant','ConversationNubUtils','PersistedStore','PinnedConversationNubsConfig','Set','URI','differenceSets'],(function a(b,c,d,e,f,g,h){

'use strict';

















function i(){this.$ConversationNubTabStateList_tabIDsBeingRemovedByInProgressModification=new (c('Set'))();
var j=
c('PinnedConversationNubsConfig').syncTabCloseEnabled?
this.$ConversationNubTabStateList_onDataUpdatedInOtherBrowserTab.bind(this):
undefined;

this.$ConversationNubTabStateList_storage=new (c('PersistedStore'))
({initialValue:[],
storageKeyPrefix:'conversationNubTabState',
serializer:i.serializeStateArrayToJson,
deserializer:i.deserializeJsonToStateArray,
onDataUpdatedOutOfBand:this.$ConversationNubTabStateList_onDataUpdatedOutOfBand.bind(this),
onDataUpdatedInOtherBrowserTab:j,
enablePersistence:c('PinnedConversationNubsConfig').persistenceEnabled});}

i.prototype.


modifyTabState=
function(j,
k){

this.modifyTabs(function(l){
var m=l.findIndex(function(n){return n.tabID===j;});
m!==-1||h(0,'Could not find tab state in storage');
k(l[m]);
return l;});};

i.prototype.

$ConversationNubTabStateList_getTabIDs=function(j){
return new (c('Set'))(j.map(function(k){return k.tabID;}));};
i.prototype.

modifyTabs=
function(j){



try{this.$ConversationNubTabStateList_storage.modify(function(k){
var l=this.$ConversationNubTabStateList_getTabIDs(k),

m=j(k),
n=this.$ConversationNubTabStateList_getTabIDs(m);

this.$ConversationNubTabStateList_tabIDsBeingRemovedByInProgressModification=
c('differenceSets')(l,n);

return m;}.
bind(this));}finally{

this.$ConversationNubTabStateList_tabIDsBeingRemovedByInProgressModification=new (c('Set'))();}};

i.prototype.


getTabs=function(){
return this.$ConversationNubTabStateList_storage.getData();};
i.prototype.


getTabState=function(j){
var k=this.getTabStateIfExists(j);
k||h(0,'Could not find tab state in storage');
return k;};
i.prototype.


getTabStateIfExists=function(j){
return this.getTabs().find(function(k){return k.tabID===j;});};
i.prototype.

$ConversationNubTabStateList_onDataUpdatedInOtherBrowserTab=
function(j){

var k=this.$ConversationNubTabStateList_getTabIDs(this.$ConversationNubTabStateList_storage.getData()),
l=this.$ConversationNubTabStateList_tabIDsBeingRemovedByInProgressModification,
m=this.$ConversationNubTabStateList_getTabIDs(j),

n=c('differenceSets')
(k,
m,
l),


o=this.$ConversationNubTabStateList_storage.getData().filter
(function(p){return n.has(p.tabID);});


if(o.size)
this.$ConversationNubTabStateList_onTabsClosedInOtherBrowserTabs(o);};

i.prototype.

$ConversationNubTabStateList_onTabsClosedInOtherBrowserTabs=
function(j){

j.forEach(function(k){
c('ConversationNubUtils').informShouldCloseTab
(k.tabID,
k.ftID,
c('ConversationNubUtils').CLOSE_REASON_SYNCHRONIZED_FROM_OTHER_TAB);});};


i.prototype.





$ConversationNubTabStateList_onDataUpdatedOutOfBand=
function(j,
k){

var l=j.length!==0,
m=
this.$ConversationNubTabStateList_tabIDsBeingRemovedByInProgressModification.size!==0;

if(l||m)
this.modifyTabs(function(n){






var o=this.$ConversationNubTabStateList_getTabIDs(k),
p=this.$ConversationNubTabStateList_getTabIDs(j),
q=this.$ConversationNubTabStateList_tabIDsBeingRemovedByInProgressModification,



r=c('differenceSets')
(o,
p,
q),

s=k.
filter(function(t){return r.has(t.tabID);});

return j.concat(s);}.
bind(this));};

i.prototype.

reloadFromStorageIfNecessary=function(){var j;
(j=this.$ConversationNubTabStateList_storage).reloadFromStorageIfNecessary.apply(j,arguments);};
i.

serializeStateArrayToJson=
function(j){

var k=[];

if(Array.isArray(j))

k=j.
map(i.serializeStateToJson).
filter(Boolean);


return k;};
i.

serializeStateToJson=
function(j){


var k=j.permalinkURI?
j.permalinkURI.toString():null,


l=babelHelpers['extends']({},
j,
{permalinkURI:k});


return l;};
i.

deserializeJsonToStateArray=
function(j){

if(Array.isArray(j)){

return j.
map(i.deserializeJsonToState).
filter(Boolean);}else 

return [];};

i.

deserializeJsonToState=
function(j){


if(j!=null&&
typeof j.tabID==='string'&&
typeof j.ftID==='string'&&
typeof j.title==='string'&&
typeof j.keepAtBottom==='boolean'&&
typeof j.isTabRaised==='boolean'&&
typeof j.isBlinkingUnread==='boolean'&&
j.allSeenNewComments!=null&&
j.allSeenNewComments instanceof Object&&

j.unseenCommentsSinceLastCleared!=null&&
j.unseenCommentsSinceLastCleared instanceof Object&&

typeof j.hasFakeInitBadge==='boolean'&&
typeof j.badgeCount==='number'&&
(j.permalinkURI==null||
typeof j.permalinkURI==='string')&&

(j.notifAlertID==null||
typeof j.notifAlertID==='string')&&

(j.notificationType==null||
typeof j.notificationType==='string')){



var k=j.permalinkURI?new (c('URI'))(j.permalinkURI):null,


l=
{tabID:j.tabID,
ftID:j.ftID,
notifAlertID:j.notifAlertID,
notificationType:j.notificationType,

title:j.title,

keepAtBottom:j.keepAtBottom,
isTabRaised:j.isTabRaised,

isBlinkingUnread:j.isBlinkingUnread,

allSeenNewComments:j.allSeenNewComments,
unseenCommentsSinceLastCleared:j.unseenCommentsSinceLastCleared,
hasFakeInitBadge:j.hasFakeInitBadge,
badgeCount:j.badgeCount,






permalinkURI:k};


return l;}else 

return null;};

i.prototype.

push=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];
this.modifyTabs(function(m){
k.forEach(function(n){

if(m.find(function(o){return o.tabID===n.tabID;})){

h(0,
'Trying to add a duplicate item with tabID %s',
n.tabID);}else 


m.push(n);});



return m;});};

i.prototype.

remove=function(j){
this.modifyTabs(function(k){
var l=k.findIndex(function(m){return m.tabID===j;});
if(l!==-1)
k.splice(l,1);

return k;});};




f.exports=i;}),null);

/** js/conversation/ConversationNubTabsUpdateEventController.js */





__d('ConversationNubTabsUpdateEventController',['Arbiter','ConversationNubUtils'],(function a(b,c,d,e,f,g){

'use strict';







var h='ConversationNub/tabsUpdated',
i='ConversationNub/minimizedByUser',
j='ConversationNub/maximizedByUser',






k=false;

function l(p){
if(!k)
c('Arbiter').inform(h,p);}



function m
(p){

return c('Arbiter').subscribe
(h,
function(q,r){


k=true;
p(r);
k=false;});}






function n
(p,
q){

q&&c('Arbiter').inform
(i,
{tab:p});

p.minimize();
l();}


function o
(p,
q){

if(!q&&!c('ConversationNubUtils').allowProgrammaticPopOut())
return;


q&&c('Arbiter').inform
(j,
{tab:p});

p.popOut();
l();}


f.exports=
{TAB_MINIMIZED_BY_USER_EVENT:i,
TAB_MAXIMIZED_BY_USER_EVENT:j,
informTabsUpdated:l,
subscribeToTabsUpdated:m,
minimizeAndInformTabUpdate:n,
popOutAndInformTabUpdate:o};}),null);

/** www/__virtual__/x/XConversationNubTogglePinController.js */



__d("XConversationNubTogglePinController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ajax\/conversation\/nub_story\/toggle_pin\/",{ft_id:{type:"String"},pin:{type:"Bool",defaultValue:false},with_render:{type:"Bool",defaultValue:false},notif_setting:{type:"Enum",enumType:1}});}),

null);

/** www/__virtual__/x/XConversationsToggleController.js */



__d("XConversationsToggleController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ajax\/conversation\/toggle_feature\/",{turn_conversations_on:{type:"Bool",defaultValue:false}});}),

null);

/** shared/facebook/isBusinessURI.js */





__d('isBusinessURI',['isFacebookURI'],(function a(b,c,d,e,f,g){

'use strict';









function h(i){
return c('isFacebookURI')(i)&&i.getSubdomain()==='business';}


f.exports=h;}),null);

/** js/conversation/ConversationNubUtils.js */





__d('ConversationNubUtils',['csx','Arbiter','AsyncFeature','AsyncRequest','DOM','Event','EventListener','Keys','NotificationConversationController','URI','XConversationNubTogglePinController','XConversationsToggleController','ConversationNubTabState','isBusinessURI','isCanvasAppURI'],(function a(b,c,d,e,f,g,h){

'use strict';





































var i=c('ConversationNubTabState'),

j=


{DISABLE:'disable',
ENABLE:'enable'},


k='ConversationNubUtils/closeTab',
l='ConversationNubUtils/unpinnedFromHeader',
m=
'ConversationNubUtils/recheckTabVisibility',
n=
'ConversationNubUtils/openPermalinkFromHeader',
o='ConversationNubUtils/turnOff',
p='ConversationNubUtils/turnOn',

q='tab-x-out',
r='browser-tab-sync',
s='overflow-x-out',
t='unpin';

function u
(oa){


var pa=
Object.values(j);

return pa.find(function(qa){return qa===oa;})||null;}


function v
(oa,
pa,
qa,
ra){
var sa=


ra||{},ta=sa.notif_setting,

ua=
c('XConversationNubTogglePinController').getURIBuilder().
setString('ft_id',String(oa)).
setBool('pin',pa);


if(ta&&c('AsyncFeature').__serverHasFeatureImpl(3))



ua.setEnum('notif_setting',ta);


var va=ua.getURI(),

wa=
new (c('AsyncRequest'))().
setURI(va).
setMethod('POST');

if(qa)
wa.setAllowCrossPageTransition(true);

wa.send();}


function w(oa){
var pa=
c('XConversationsToggleController').getURIBuilder().
setBool('turn_conversations_on',oa).
getURI();


oa?
na():
ma();

var qa=
new (c('AsyncRequest'))().
setURI(pa).
setAllowCrossPageTransition(true).
setHandler(function(ra){
if(ra.getPayload().conversationsStatus){
na();}else 

ma();}).


setErrorHandler(function(ra){

oa?
ma():
na();}).

setMethod('POST');

qa.send();}


function x
(oa,
pa,
qa){

v
(oa,
true,
pa,
qa);}



function y
(oa,
pa,
qa){

v
(oa,
false,
pa,
qa);}



function z
(oa,
pa){

x(oa,false,pa);}


function aa
(oa,
pa){

y(oa,false,pa);}


function ba
(oa,
pa){

x(oa,true,pa);}


function ca
(oa,
pa){

y(oa,true,pa);}


function da(){
w(false);
c('NotificationConversationController').deleteAllTabs();}


function ea(){
w(true);}


function fa(oa){
return c('DOM').scry(oa,"._4iz6")[0];}


function ga
(oa,
pa,
qa){

var ra=function sa(){qa();};

pa.addSubscriptions
(c('EventListener').listen
(oa,
'click',
ra),


c('EventListener').listen
(oa,
'keydown',
function(sa){
if(c('Event').getKeyCode(sa)===c('Keys').RETURN)
ra();}));}






function ha(){
var oa=c('URI').getRequestURI();
return !c('isCanvasAppURI')(oa)&&!c('isBusinessURI')(oa);}


function ia
(oa,
pa,
qa){

var ra=i.getLoadedTab(oa);
if(!ra)
return;


var sa=ra.getPersistentState(),
ta=ra.getSessionID();
c('Arbiter').inform
(k,
{tabID:oa,ftID:pa,tabState:sa,sessionID:ta,reason:qa});}



function ja(oa){
var pa=i.getLoadedTab(oa);
if(!pa)
return;


c('Arbiter').inform(l,{tab:pa});}



function ka(oa){
c('Arbiter').inform(m,{tab:oa});}


function la(oa){
var pa=i.getLoadedTab(oa);
if(!pa)
return;


c('Arbiter').inform(n,{tab:pa});}


function ma(){
c('Arbiter').inform(o,{});}


function na(){
c('Arbiter').inform(p,{});}


f.exports=
{CLOSE_TAB_EVENT:k,
UNPIN_FROM_HEADER_EVENT:l,
OPEN_PERMALINK_FROM_HEADER_EVENT:n,
TURN_CONVERSATIONS_OFF_EVENT:o,
TURN_CONVERSATIONS_ON_EVENT:p,

CLOSE_REASON_TAB_X_OUT:q,
CLOSE_REASON_SYNCHRONIZED_FROM_OTHER_TAB:r,
CLOSE_REASON_OVERFLOW_X_OUT:s,
CLOSE_REASON_UNPIN:t,

coerceToPinRequestNotifSetting:u,
sendPinRequest:z,
sendUnpinRequest:aa,
sendPinRequestAcrossTransitions:ba,
sendUnpinRequestAcrossTransitions:ca,

getCloseButtonElem:fa,
addCloseButtonListeners:ga,

informShouldCloseTab:ia,
informDidUnpinFromHeaderMenu:ja,
informShouldRecheckTabVisibility:ka,
informOpenPermalinkFromHeader:la,

allowProgrammaticPopOut:ha,

turnConversationsOff:da,
turnConversationsOn:ea};}),null);

/** js/conversation/ConversationNubPermalinkUtils.js */





__d('ConversationNubPermalinkUtils',['URI','isFacebookURI'],(function a(b,c,d,e,f,g){

'use strict';





function h(l){
return l.substr(-1)==='/'?l.slice(0,-1):l;}


function i(l,m){
var n=l.getPath(),
o=m.getPath();

return h(n)===h(o);}


function j(l,m,n){
var o=l.getQueryData(),
p=m.getQueryData(),

q=o[n],
r=p[n];


if(q==null&&r==null)
return true;

return q===r;}


function k(l){
var m=new (c('URI'))(window.location.href);


return (m&&
l&&
c('isFacebookURI')(m)&&
c('isFacebookURI')(l)&&
i(m,l)&&

j(m,l,'fbid')&&

j(m,l,'story_fbid'));}



f.exports=
{isOnPermalink:k};}),null);

/** js/conversation/ConversationNubViewportManager.js */





__d('ConversationNubViewportManager',['DockTabsViewportCalculator','DockTabsViewportPinnedConversationTabUtils'],(function a(b,c,d,e,f,g){

'use strict';


























var h=c('DockTabsViewportPinnedConversationTabUtils').getMinRequiredWidthForFirstConvoTab;







function i
(j,
k,
l){

this.$ConversationNubViewportManager_root=j;
this.$ConversationNubViewportManager_tabState=k;

this.$ConversationNubViewportManager_dockCalculator=c('DockTabsViewportCalculator').getInstance(this.$ConversationNubViewportManager_root);
this.$ConversationNubViewportManager_dockCalculator&&
this.$ConversationNubViewportManager_dockCalculator.registerPinnedConvoTabCallbacks(babelHelpers['extends']({},
l,
{pinnedConvoTabStateGetter:function(){
return this.$ConversationNubViewportManager_tabState;}.
bind(this)}));}

i.prototype.

getNumDockTabsToShow=function(j){


return this.getCouldFitAtLeastOneDockTab(j)?1:0;};
i.prototype.

getCouldFitAtLeastOneDockTab=function(j){
var k=h();
return k<=j;};
i.prototype.

forceRecalculatePinnedConvoTabs=
function(j){

this.$ConversationNubViewportManager_dockCalculator&&
this.$ConversationNubViewportManager_dockCalculator.forceRecalculatePinnedConvoTabs(j);};



f.exports=i;}),null);

/** js/conversation/ConversationNubVisibilityDedupeUtils.js */








__d('ConversationNubVisibilityDedupeUtils',['Bootloader','emptyFunction','ifRequired'],(function a(b,c,d,e,f,g){

'use strict';








function h
(j){

c('Bootloader').loadModules(["UFICommentVisibilityStore"],j,'ConversationNubVisibilityDedupeUtils');}


function i(j){
return c('ifRequired')('UFICommentVisibilityStore',
function(k){
return (k.isFeedbackTargetVisible(j));},
c('emptyFunction').thatReturnsFalse);}



f.exports=
{bootloadUFIVisibilityModule:h,
isFeedbackTargetVisible:i};}),null);

/** www/__virtual__/x/XNotificationNubStoryController.js */



__d("XNotificationNubStoryController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/conversation\/nub_story\/",{notif_alert_id:{type:"String"},notif_id:{type:"Int"},ft_id:{type:"String"},force_minimized:{type:"Bool",defaultValue:false}});}),

null);

/** js/conversation/NotificationConversationController.js */






__d('NotificationConversationController',['csx','cx','Arbiter','AsyncRequest','Bootloader','CSS','ConversationNub','ConversationNubActionTakenReporter','ConversationNubAddTabSource','ConversationNubPermalinkUtils','ConversationNubTabState','ConversationNubTabsUpdateEventController','ConversationNubUtils','ConversationNubViewportManager','ConversationNubVisibilityDedupeUtils','DOM','PinnedConversationNubsConfig','SubscriptionsHandler','URI','XNotificationNubStoryController','ge','ifRequired'],(function a(b,c,d,e,f,g,h,i){

'use strict';




















































var j=c('ConversationNubVisibilityDedupeUtils').isFeedbackTargetVisible,

k=1,

l=c('ConversationNubTabState'),
m=Object.create(null),
n=null,

o=null,
p=null,
q=null,

r=null,
s=null,

t=false,
u=null,
v=null,
w=null,
x=null,

y=
Object.create(null);

function z(){
if(!o)
o=c('DOM').scry
(c('ge')('pagelet_dock'),
"._1mw-")[
0];

return o;}


function aa(){
if(!p){
var da=z();
if(da)
p=c('DOM').scry
(da,
"._1tvj")[
0];}


return p;}


function ba(){
if(!q){
var da=z();
if(da)
q=c('DOM').scry
(da,
"._2ikx .fbNubButton")[
0];}


return q;}
ca.prototype.




init=function(){
if(t)
return;

t=true;

var da=new (c('SubscriptionsHandler'))();
da.addSubscriptions
(c('ConversationNubTabsUpdateEventController').subscribeToTabsUpdated
(this.$NotificationConversationController_onTabsUpdated.bind(this)),

c('Arbiter').subscribe(c('ConversationNubUtils').CLOSE_TAB_EVENT,
function(ea,fa){var ga=
fa||{},ha=ga.tabID;
if(ha)
this.$NotificationConversationController_deleteTab(ha);}.

bind(this)));



this.$NotificationConversationController_reporter=new (c('ConversationNubActionTakenReporter'))();

u=da;};
ca.prototype.

handleAllEndpointNotifications=
function(da){

this.init();

var ea=da.filter
(function(fa){return fa.seen_state==='UNSEEN_AND_UNREAD';});


this.handleNewNotifications
(ea,
c('ConversationNubAddTabSource').UNSEEN_NOTIFICATION);};

ca.prototype.

$NotificationConversationController_recalculateDockSize=function(da){
var ea=n?
n.getNumDockTabsToShow(da):
k;

l.setMaxDockTabs(ea);};
ca.prototype.

$NotificationConversationController_onAvailableWidthChanged=
function(da,
ea){

this.$NotificationConversationController_recalculateDockSize(da);

if(ea){

var fa=

ea.tabToPromote,ga=ea.tabToOpenIfInDock;

if(fa&&!l.isTabInDock(fa.getTabID()))
l.moveTabToDockLeft(fa.getTabID());



if(c('ConversationNubUtils').allowProgrammaticPopOut()&&
ga&&
l.isTabInDock(ga.getTabID()))



ga.popOut();}



this.$NotificationConversationController_rerenderTabs(da);};
ca.prototype.

$NotificationConversationController_onTabsUpdated=function(da){

n&&n.forceRecalculatePinnedConvoTabs(da);};
ca.prototype.

$NotificationConversationController_rerenderTabs=function(da){
var ea=l.getTotalTabCount(),
fa=l.getNumDockTabs(),
ga=
n&&
n.getCouldFitAtLeastOneDockTab(da),

ha=ea>0&&ga,
ia=
fa<ea&&ha,

ja=z();
if(ja){
c('CSS').conditionClass
(ja,
"_1tvf",
ha);

c('CSS').conditionClass
(ja,
"_1dex",
ia);

c('CSS').conditionClass
(ja,
"_1tvi",
ia);}



var ka=c('PinnedConversationNubsConfig').pinnedToLeft?
l.getTabsForDockOldestFirst():
l.getTabsForDockNewestFirst();

ka.forEach(function(ma){
if(ma.getIsRaised())
ma.clearBadge();});



var la=l.getTabsForMenuNewestFirst();

this.$NotificationConversationController_renderDockedTabGroup(ka);
this.$NotificationConversationController_renderSelectorNubMenu(la);};
ca.prototype.

handleNotificationsRead=
function(da){

this.init();


l.getUnsortedLoadedTabs().forEach(function(fa){
var ga=fa.getNotificationAlertID();
if(ga&&da[ga])
fa.clearBadge();});




l.getUnloadedTabs().forEach
(function(fa){
if(fa.notifAlertID&&da[fa.notifAlertID])
l.clearTabNotifications(fa.tabID);});





var ea=l.getTabsForMenuNewestFirst();
this.$NotificationConversationController_renderSelectorNubMenu(ea);};
ca.prototype.

handleNewNotifications=
function(da,
ea){

this.init();

da.forEach(function(fa){

var ga=



fa.alert_id,ha=fa.pinnedConvoConfig,ia=fa.tracking,ja=fa.notif_type;

if(!ha)
return;



var ka=


ha.tab_id,la=ha.ft_id,ma=ha.permalink_uri,

na=JSON.parse(ia),
oa=ma?new (c('URI'))(ma):null;

this.$NotificationConversationController_requestNotificationStory
(ka,
na.alert_id,
la,
ga,
oa,
ea,
ja);}.

bind(this));};
ca.prototype.

$NotificationConversationController_requestNotificationStory=
function(da,
ea,
fa,
ga,
ha,
ia,
ja){

var ka=c('XNotificationNubStoryController').getURIBuilder().
setString('notif_alert_id',ga).
setInt('notif_id',ea);

this.$NotificationConversationController_attributeTabAddToSource(fa,ia);

this.$NotificationConversationController_requestStoryFromServer
(da,
fa,
ja,
ha,
ka);};

ca.prototype.

$NotificationConversationController_attributeTabAddToSource=
function(da,
ea){

if(!y[da])
y[da]=ea;};

ca.prototype.

requestPersistedStory=
function(da,
ea,
fa,
ga){

this.$NotificationConversationController_attributeTabAddToSource(ea,ga);

var ha=c('XNotificationNubStoryController').getURIBuilder().
setString('ft_id',ea);

this.$NotificationConversationController_requestStoryFromServer
(da,
ea,
null,
fa,
ha);};

ca.prototype.

$NotificationConversationController_requestStoryFromServer=
function(da,
ea,
fa,
ga,
ha){


if(m[da])
return;





var ia=l.getLoadedTab(da);
if(ia){


if(fa)
ia.setNotificationType(fa);


return;}



if(c('ConversationNubPermalinkUtils').isOnPermalink(ga)||
j(ea))

ha.setBool('force_minimized',true);


m[da]=true;
new (c('AsyncRequest'))().
setURI(ha.getURI()).
setAllowCrossPageTransition(true).
setFinallyHandler(function(){
delete m[da];}).

send();};
ca.prototype.

$NotificationConversationController_onUFICommentsUpdated=
function(da){



var ea=true;


l.getUnsortedLoadedTabs().forEach(function(fa){
var ga=fa.getFeedbackTargetID(),
ha=da[ga],

ia=ha?
Object.keys(ha):
[];

if(ia.length){
var ja=fa.getBadgeCount();

if(j(ga)){
fa.markCommentsAsSeenWithoutBadging(ia);
fa.clearBadge();}else 

fa.attemptAddNewCommentsToBadge(ia);


var ka=fa.getBadgeCount();
if(ja!==ka)
ea=true;}});




if(ea)
c('ConversationNubTabsUpdateEventController').informTabsUpdated();};

ca.prototype.

$NotificationConversationController_bootloadConversationNubSurveys=
function(da){

if(x)
return;


c('Bootloader').loadModules(["ConversationNubSurveys"],
function(ea){
if(!x)
x=new ea(da);},

'NotificationConversationController');};

ca.prototype.

$NotificationConversationController_bootloadConversationNubLogger=
function(da,
ea,
fa){

if(w){
w.addTab(da,fa);
delete y[da.getPersistentState().ftID];
return;}


c('Bootloader').loadModules(["ConversationNubLogger"],
function(ga){
if(!w)
w=new ga(ea);

w.addTab(da,fa);
delete y[da.getPersistentState().ftID];},
'NotificationConversationController');};

ca.prototype.

$NotificationConversationController_bootloadUFIUpdateManager=function(){
if(v)
return;

c('Bootloader').loadModules(["ConversationNubUFICentralUpdateManager"],
function(da){
if(v)
return;

v=new da
(this.$NotificationConversationController_onUFICommentsUpdated.bind(this));}.

bind(this),'NotificationConversationController');};

ca.prototype.

$NotificationConversationController_renderDockedTabGroup=function(da){
var ea=aa();
if(!ea)
return;


c('Bootloader').loadModules
(["React","ReactDOM","ConversationNubDockedTabGroup.react"],
function(fa,ga,ha){
s=ga.render
(fa.createElement(ha,{dockTabs:da}),
ea);},

'NotificationConversationController');};

ca.prototype.

$NotificationConversationController_onSelectCollapsedTab=function(da){
da.popOut();
c('ConversationNubTabsUpdateEventController').informTabsUpdated
({tabToPromote:da});};

ca.prototype.

$NotificationConversationController_renderSelectorNubMenu=
function(da){

var ea=ba();
if(!ea)
return;


c('Bootloader').loadModules
(["React","ReactDOM","ConversationNubCollapsedSelectorMenu.react"],
function(fa,ga,ha){
r=ga.render
(fa.createElement(ha,
{menuTabs:da,
onTabSelected:this.$NotificationConversationController_onSelectCollapsedTab}),

ea);}.

bind(this),'NotificationConversationController');};

ca.prototype.

$NotificationConversationController_initViewportManager=function(){
if(!n){
var da=z();
if(da){
var ea=
{onAvailableWidthChanged:this.$NotificationConversationController_onAvailableWidthChanged.bind(this)};


n=new (c('ConversationNubViewportManager'))
(da,
l,
ea);}}};



ca.prototype.


storyFromServer=
function(da,
ea){














if(!t)
this.init();



var fa=











ea.attempt_open_on_init,ga=ea.ft_id,ha=ea.init_without_badge,ia=ea.notif_alert_id,ja=ea.notification_type,ka=ea.permalink_uri,la=ea.promote_on_init,ma=ea.tab_add_source,na=ea.tab_id,oa=ea.title,pa=ea.should_show_intro_nux,qa=ea.should_show_hide_nux,

ra=l.getLoadedTab(na);
if(ra){
if(la||fa)
c('ConversationNubTabsUpdateEventController').informTabsUpdated
({tabToPromote:la?ra:null,
tabToOpenIfInDock:fa?ra:null});


return;}


ha=
ha||j(ga);

var sa=l.getTabStateIfExists(na);
if(sa){

ha=null;}else{

var ta=c('ConversationNub').createDefaultState
(na,
ka,
ga,
ia,
ja,
oa);


l.addTabState(ta);}


var ua=new (c('ConversationNub'))
(da,
na,
ha,
Boolean(pa),
Boolean(qa));


l.addLoadedTab(na,ua);

fa=fa||
ua.getPersistentState().isTabRaised;



this.$NotificationConversationController_bootloadUFIUpdateManager();
this.$NotificationConversationController_initViewportManager();

c('ConversationNubTabsUpdateEventController').informTabsUpdated
({tabToPromote:la?ua:null,
tabToOpenIfInDock:fa?ua:null});


this.$NotificationConversationController_bootloadConversationNubSurveys(l);

var va=
y[ga]||
ma||
'unknown';


this.$NotificationConversationController_bootloadConversationNubLogger(ua,l,va);};
ca.prototype.

deleteAllTabs=function(){
l.deleteAllTabs();
c('ConversationNubTabsUpdateEventController').informTabsUpdated();};
ca.prototype.

$NotificationConversationController_deleteTab=function(da){
var ea=l.deleteTab(da);

if(ea)
c('ConversationNubTabsUpdateEventController').informTabsUpdated();};

ca.prototype.

unsubscribe=function(){
u&&u.release();
u=null;

w&&w.destroy();
w=null;

x&&x.destroy();
x=null;

v&&v.destroy();
v=null;

this.$NotificationConversationController_reporter.destroy();

c('ifRequired')('ReactDOM',function(da){
var ea=ba();
if(r&&ea)
da.unmountComponentAtNode(ea);


var fa=aa();
if(s&&fa)
da.unmountComponentAtNode(fa);});};


function ca(){}


f.exports=new ca();}),null);
