if (self.CavalryLogger) { CavalryLogger.start_js(["cdkD5"]); }

/** __static_js_modules__/followrequestresultenum.js */




__d("FollowRequestResultEnum",[],(function a(b,c,d,e,f,g){

f.exports={REVERT:"revert"};}),

null);

/** __static_js_modules__/profileintrocardtestid.js */




__d("ProfileIntroCardTestID",[],(function a(b,c,d,e,f,g){

f.exports={BIO_TEXT:"profile_intro_card_bio_text",DELETE_PHOTO_BUTTON:"profile_intro_card_delete_photo_button",EDIT_BIO_BUTTON:"profile_intro_card_edit_bio_button",EDIT_BIO_TEXT_AREA:"profile_intro_card_edit_bio_text_area",EDIT_PHOTO_CONTAINER:"profile_intro_card_edit_photo_container",EDIT_PHOTO_PLACEHOLDER:"profile_intro_card_edit_photo_placeholder",EDIT_PHOTOS_BUTTON:"profile_intro_card_edit_photos_button",EDIT_PHOTOS_PENCIL_BUTTON:"profile_intro_card_edit_photos_pencil_button",PHOTO_COLLAGE:"profile_intro_card_photo_collage",PHOTO_DIALOG_ROOT:"profile_intro_card_photo_dialog_root",PHOTO_NUX:"profile_intro_card_photo_nux",PHOTO_NUX_CLOSE_BUTTON:"profile_intro_card_photo_nux_close_button",ROOT:"profile_intro_card_root",SAVE_BIO_BUTTON:"profile_intro_card_save_bio_button",SAVE_PHOTOS_BUTTON:"profile_intro_card_save_photos_button"};}),

null);

/** __static_js_modules__/seefirstnuxevents.js */




__d("SeeFirstNuxEvents",[],(function a(b,c,d,e,f,g){

f.exports={SWITCHER_NUX_IMP:"switcher_nux_imp",SEE_FIRST_SELECTED:"see_first_selected",XOUT:"xout",NOT_NOW:"not_now",IMP:"imp",ENTER_DIALOG:"enter_dialog",BATCH_SEE_FIRST_SELECTED:"batch_see_first_selected"};}),

null);

/** js/components/core/UI/ScrollColumn/ScrollColumn.react.js */




__d('ScrollColumn.react',['cx','invariant','joinClasses','throttle','tidyEvent','Arbiter','Event','React','ReactDOM','Vector','ViewportBounds'],(function a(b,c,d,e,f,g,h,i){














var j=c('React').PropTypes,

k='ScrollColumn/adjust',

l=c('React').createClass({displayName:'ScrollColumn',

propTypes:
{topOffset:j.number,
zIndex:j.number},


getDefaultProps:function m(){

return {topOffset:0,
zIndex:0};},




_scroll:0,
_scrollDelta:0,

getInitialState:function m(){

return {fixed:null,
fixedBottom:0,
fixedTop:this.props.topOffset,
top:0};},



render:function m(){
var n='auto',
o=this.state.fixedLeft,
p='auto';
if(this.state.fixed==='bottom'){
n=this.state.fixedBottom;}else
if(this.state.fixed==='top'){
p=this.state.fixedTop;}else{

o='auto';
p=this.state.top;}


var q=
c('joinClasses')(this.props.className,"_5ss7");

return (c('React').createElement('div',{className:q,ref:'container'},
c('React').createElement('div',
{className:"_5ss8"+

(this.state.fixed?' '+"fixed_always":''),

ref:'column',
style:
{bottom:n,
left:o,
top:p,
zIndex:this.props.zIndex}},

this.props.children)));},





componentDidMount:function m(){
this.setState
({adjustEventListener:
c('tidyEvent')(c('Arbiter').subscribe
(k,
function(){
this._adjust();}.
bind(this))),

resizeListener:
c('tidyEvent')(c('Event').listen(window,'resize',c('throttle')(this._adjust))),
scrollListener:
c('tidyEvent')(c('Event').listen(window,'scroll',this._onScroll)),
viewportBoundsUpdateListener:
c('tidyEvent')(c('ViewportBounds').subscribe('change',this._adjust))});

this._adjust();},


componentDidUpdate:function m(n,o){
if(o.fixed!==this.state.fixed)
c('Arbiter').inform('reflow');},



componentWillUnmount:function m(){
this.state.adjustEventListener.unsubscribe();
this.state.resizeListener.remove();
this.state.scrollListener.remove();},


_onScroll:function m(event){
var n=c('Vector').getScrollPosition().y;
this._scrollDelta=n-this._scroll;
this._scroll=n;
this._adjust();},


_adjust:function m(){

if(!this.isMounted())
return;






this._updateContainerHeight();
this._updateColumnWidth();


if(this._isContainerBelowViewportTop()){
this._setNotFixed(0);
return;}




if(!this._isColumnLargerThanViewport()){
this._setFixedToTop();
return;}







if(this._scrollDelta>0)



if(this._isBottomOfColumnVisible()){
this._setFixedToBottom();
return;}




if(this._scrollDelta<0)



if(this._isTopOfColumnVisible()){
this._setFixedToTop();
return;}







var n=this._getTopPositionForRef('column'),
o=this._getTopPositionForRef('container'),
p=n-o;
this._setNotFixed(p);},


_getTopPositionForRef:function m(n){
var o=this.refs[n];
o||i(0,'Invalid ref provided to _getTopPositionForRef.');
var p=
c('Vector').getElementPosition(c('ReactDOM').findDOMNode(o),'viewport').y;





if(this._scroll<0)
p+=this._scroll;


return p;},


_getTopBoundWithOffset:function m(){
return c('ViewportBounds').getTop()+this.props.topOffset;},


_isContainerBelowViewportTop:function m(){
var n=this._getTopPositionForRef('container');
return n>=this._getTopBoundWithOffset();},


_isColumnLargerThanViewport:function m(){
var n=
c('Vector').getViewportDimensions().y-c('ViewportBounds').getBottom()-
this._getTopBoundWithOffset();
return c('ReactDOM').findDOMNode(this.refs.column).offsetHeight>n;},


_isBottomOfColumnVisible:function m(){
var n=this._getTopPositionForRef('column'),
o=c('Vector').getElementDimensions
(c('ReactDOM').findDOMNode(this.refs.column),
'viewport').
y,
p=n+o;
return p<=
c('Vector').getViewportDimensions().y-c('ViewportBounds').getBottom();},


_isTopOfColumnVisible:function m(){
var n=this._getTopPositionForRef('column');
return n>=this._getTopBoundWithOffset();},









_getFixedLeft:function m(){

return (c('Vector').getElementPosition
(c('ReactDOM').findDOMNode(this.refs.container),
'viewport').
x);},






_setFixedToBottom:function m(){
this.setState
({fixed:'bottom',
fixedBottom:c('ViewportBounds').getBottom(),
fixedLeft:this._getFixedLeft()});},





_setFixedToTop:function m(){
this.setState
({fixed:'top',
fixedLeft:this._getFixedLeft(),
fixedTop:this._getTopBoundWithOffset()});},







_setNotFixed:function m(n){
this.setState({fixed:false,top:n});},






_updateContainerHeight:function m(){
c('ReactDOM').findDOMNode(this.refs.container).style.height=
c('ReactDOM').findDOMNode(this.refs.column).offsetHeight+
this.state.top+'px';},






_updateColumnWidth:function m(){
c('ReactDOM').findDOMNode(this.refs.column).style.width=
c('ReactDOM').findDOMNode(this.refs.container).offsetWidth+'px';}});




l.EVENT_SHOULD_ADJUST=k;

f.exports=l;}),null);

/** www/__virtual__/x/XFollowPrivacyNuxLogViewAsyncController.js */



__d("XFollowPrivacyNuxLogViewAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/follow\/follow_privacy\/nux\/log\/view\/",{});}),

null);

/** www/__virtual__/x/XPubcontentChainedSuggestionsController.js */



__d("XPubcontentChainedSuggestionsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pubcontent\/chained_suggestions\/",{pageid:{type:"String"},profileid:{type:"Int"},eh:{type:"Bool",defaultValue:false},friendid:{type:"Int"}});}),

null);

/** js/follow/SubscribeButton.js */




__d('SubscribeButton',['Arbiter','AsyncRequest','Button','CSS','Event','TooltipData','XFollowPrivacyNuxLogViewAsyncController','XPubcontentChainedSuggestionsController'],(function a(b,c,d,e,f,g){












var h=
{SUBSCRIBED:'FollowingUser',
UNSUBSCRIBED:'UnfollowingUser',









_enable:function i(j){
c('Button').setEnabled(j,true);
c('TooltipData').remove(j);},


_disable:function i(j,k){
c('Button').setEnabled(j,false);
if(k)
c('TooltipData').set(j,k);},




init:function i
(j,
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
u){

var v=!t,

w=!(r===undefined||
r===null);

if(w&&!p&&!q)
h._disable(k,r);


c('Event').listen(k,'click',function(){
c('Arbiter').inform
(h.SUBSCRIBED,
{profile_id:m,contextID:u,suppress:true});

if(s){
s.show();
var x=
c('XFollowPrivacyNuxLogViewAsyncController').getURIBuilder().getURI();
new (c('AsyncRequest'))(x).send();}});



c('Arbiter').subscribe(h.SUBSCRIBED,function(x,y){
if(m==y.profile_id){
if(!n)


l.suppressNextMouseEnter&&
l.suppressNextMouseEnter();

if(w){


if(typeof y.connected!=='undefined')
p=y.connected;







if(p||q)
h._enable(k);}


j.swap(v);


if(o===true&&
y.chaining!==false){

var z=
c('XPubcontentChainedSuggestionsController').getURIBuilder().
setInt('profileid',m).
getURI();

new (c('AsyncRequest'))().
setURI(z).
send();}}});



c('Arbiter').subscribe(h.UNSUBSCRIBED,function(x,y){
if(m==y.profile_id){
j.unswap(v);
l.hideFlyout&&l.hideFlyout();

if(w){

if(typeof y.connected!=='undefined')
p=y.connected;




if(!p&&!q)
h._disable(k,r);}


c('Arbiter').inform('SubMenu/Reset');}});},




initSubscribe:function i(j,k){
c('Event').listen(j,'click',function(){



setTimeout(c('Arbiter').inform.bind(c('Arbiter'),

h.SUBSCRIBED,
{profile_id:k}),
0);});},




initUnsubscribe:function i(j,k,l){
c('Event').listen(j,'click',function(){



setTimeout(c('Arbiter').inform.bind(c('Arbiter'),

h.UNSUBSCRIBED,
{profile_id:k,contextID:l}),
0);});},











initSubscribeMenuItem:function i(j,k,l){
c('CSS').hide(k);
this._initMenuItem(j,k,l);},










initUnsubscribeMenuItem:function i(j,k,l){
c('CSS').hide(j);
this._initMenuItem(j,k,l);},













_initMenuItem:function i(j,k,l){
this.initSubscribe(j,l);
this.initUnsubscribe(k,l);
c('Arbiter').subscribe(h.SUBSCRIBED,function(m,n){
c('CSS').hide(j);
c('CSS').show(k);});

c('Arbiter').subscribe(h.UNSUBSCRIBED,function(m,n){
c('CSS').hide(k);
c('CSS').show(j);});}};




f.exports=h;}),null);

/** www/__virtual__/x/XFeedSeeFirstNuxController.js */



__d("XFeedSeeFirstNuxController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/feed\/control\/see_first\/nux\/",{});}),

null);

/** js/feed/control/ProfileHoverButton.js */





__d('ProfileHoverButton',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','Event','FeedBlacklistButton','FollowRequestResultEnum','MenuStaticItem','ProfileSubFollowStatus','Run','SeeFirstNuxEvents','SubscribeButton','SubscriptionsHandler','XFeedSeeFirstNuxController'],(function a(b,c,d,e,f,g,h,i){



















var j=1;


function k
(l,
m,
n,
o){
'use strict';
this.$ProfileHoverButton_buttons=l;
this.$ProfileHoverButton_menu=m;
this.$ProfileHoverButton_config=o;
this.$ProfileHoverButton_nux=n;
this.$ProfileHoverButton_previous=null;
this.$ProfileHoverButton_handler=new (c('SubscriptionsHandler'))();

this.$ProfileHoverButton_menu.subscribe('itemclick',function(p,q){
if(q.item instanceof c('MenuStaticItem'))
return;

var r=q.item.getValue();

if(r==='unfollow'){
c('Arbiter').inform
(c('SubscribeButton').UNSUBSCRIBED,
{profile_id:this.$ProfileHoverButton_config.id});

c('Arbiter').inform
(c('FeedBlacklistButton').BLACKLIST,
{profile_id:this.$ProfileHoverButton_config.id});

if(this.$ProfileHoverButton_nux)
this.$ProfileHoverButton_nux.hide();}else{


this.setSelected(r);
if(r===c('ProfileSubFollowStatus').SEE_FIRST&&this.$ProfileHoverButton_nux){
this.$ProfileHoverButton_nux.hide();
this.logNux(c('SeeFirstNuxEvents').SEE_FIRST_SELECTED);}}}.


bind(this));
this.$ProfileHoverButton_handler.addSubscriptions(c('Arbiter').subscribe
(c('SubscribeButton').SUBSCRIBED,
this.setSelected.bind(this,c('ProfileSubFollowStatus').REGULAR_FOLLOW)));

this.$ProfileHoverButton_handler.addSubscriptions(c('Arbiter').subscribe
(c('FollowRequestResultEnum').REVERT,
this.handleResponse.bind(this)));


if(this.$ProfileHoverButton_nux){
this.$ProfileHoverButton_nux.show();
this.logNux(c('SeeFirstNuxEvents').IMP);
this.$ProfileHoverButton_handler.addSubscriptions(c('Event').listen
(c('DOM').find(this.$ProfileHoverButton_nux.getRoot(),"._50zy"),
'click',
this.logNux.bind(this,c('SeeFirstNuxEvents').XOUT)));}



c('Run').onLeave(this.cleanUp.bind(this));}
k.prototype.

logNux=function(event){'use strict';
var l=c('XFeedSeeFirstNuxController').getURIBuilder().getURI();
new (c('AsyncRequest'))(l).
setData({event:event,id:this.$ProfileHoverButton_config.id}).
send();};
k.prototype.

getButtons=function(){'use strict';
return c('DOM').scry
(this.$ProfileHoverButton_buttons,
"._3oz-");};

k.prototype.

getSelected=function(){'use strict';
var l=this.getButtons(),
m=null;
l.forEach(function(n){
var o=n.getAttribute('data-status');
if(c('CSS').matchesSelector(n,"._52-0"))
m=o;});


return m;};
k.prototype.

setSelected=function(l){'use strict';
this.$ProfileHoverButton_previous=this.getSelected();
var m=this.getButtons();
m.forEach(function(n){
var o=n.getAttribute('data-status');
if(o===l){
c('CSS').addClass(n,"_52-0");}else 

c('CSS').removeClass(n,"_52-0");});


this.$ProfileHoverButton_menu.forEachItem(function(n){
if(!n.getValue)
return;

var o=n.getValue();
if(o==='unfollow')
return;

var p=n.getRoot();
if(o===l){
c('CSS').addClass(p,"_52-0");}else 

c('CSS').removeClass(p,"_52-0");});};


k.prototype.

handleResponse=function(event,l){'use strict';
if(l.id!==this.$ProfileHoverButton_config.id||l.location!==j)
return;

if(event===c('FollowRequestResultEnum').REVERT)
this.revert();};

k.prototype.

revert=function(){'use strict';
if(this.$ProfileHoverButton_previous===null)
return;

this.setSelected(this.$ProfileHoverButton_previous);};
k.prototype.

cleanUp=function(){'use strict';
this.$ProfileHoverButton_handler&&this.$ProfileHoverButton_handler.release();
this.$ProfileHoverButton_handler=null;
this.$ProfileHoverButton_buttons=null;
this.$ProfileHoverButton_menu=null;
this.$ProfileHoverButton_config=null;};



f.exports=k;}),null);

/** js/intl/getTextDirection.js */






__d('getTextDirection',['Locale','UnicodeBidi'],(function a(b,c,d,e,f,g){




function h(i){
var j=c('UnicodeBidi').isDirectionRTL(i),
k=c('Locale').isRTL();
if(j&&!k){
return 'rtl';}else
if(!j&&k)
return 'ltr';

return '';}


f.exports=h;}),null);

/** js/modules/TidyArbiter.js */




__d('TidyArbiter',['TidyArbiterMixin'],(function a(b,c,d,e,f,g){



var h=babelHelpers['extends']({},c('TidyArbiterMixin'));

f.exports=h;}),null);

/** js/profile/intro_card/ProfileIntroCardAddButton.react.js */






__d('ProfileIntroCardAddButton.react',['ix','cx','React','Image.react','Link.react','fbglyph'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits









(l,c('React').Component);k=j&&j.prototype;






function l(m){'use strict';
k.constructor.call(this,m);}
l.prototype.

render=function(){'use strict';

return (c('React').createElement(c('Link.react'),
{className:"_zho _2pi3",

onClick:this.props.onClick},
c('React').createElement(c('Image.react'),
{alt:this.props.altText,
className:"_zhp _3-90",

src:h("139438")}),





c('React').createElement('span',null,
this.props.promptLabel)));};







f.exports=l;}),null);

/** shared/profile/intro_card/ProfileIntroCardStrings.js */






__d('ProfileIntroCardStrings',['fbt','ProfileIntroCardBioPostToFeed'],(function a(b,c,d,e,f,g,h){





var i=
{PLACEHOLDER:h._(["Enter text here","61d0cc07f92ff54510daed446eb3886b"]),




EDIT:h._(["Edit","9b6daa63e3253ec8ee92948d79a9831b"]),






EDIT_BIO:h._(["Edit Bio","9e6ae14b20e8003eac5b72b1de29aa34"]),






CANCEL:h._(["Cancel","2519c1b560e2b297bbf9be911641ee1b"]),






SAVE:h._(["Save","7f50d4e4589dc2819f698a30a45974e8"]),






SAVED:h._(["Saved","095b02f43748d96203496d258713bdab"]),






POST:h._(["Post","eb01a46ad440d727608e53fe1ba9d625"]),






POST_TO_FEED:h._(["Post to News Feed","c64f7f760f4bb4af87c8c1a2d3e4efcd"]),






POST_TO_FEED_QUESTION:h._(["{Question whether to post bio to News Feed}","c59a80d9f928d164e2b57624538c354a"],[h.param



('Question whether to post bio to News Feed',
c('ProfileIntroCardBioPostToFeed').content)]),



POST_PHOTOS_TO_FEED:h._(["Post new photos to News Feed","c34ae364e913eb9962c5be3a99364927"]),






POST_TO_FEED_BIO_NUX:h._(["Share your bio with friends by posting to News Feed.","897e63ec925abd6b8d509ef07de05da8"]),






POST_TO_FEED_SINGLE_PHOTO_NUX:h._(["Share your new featured photo with friends by posting to News Feed.","424f70ab79afae994d7c1aa801aa212a"]),






POST_TO_FEED_MULTIPLE_PHOTO_NUX:h._(["Share your new featured photos with friends by posting to News Feed.","73bb7323cd1206244e744b27c4a38483"]),






BIO_SUGGESTION_MESSAGE:h._(["Use details from your About section as your bio","adac8e7efc27f3a26c7b5fb26cb03e47"]),






getRemainingCharacters:function j(k){
return h._(["{remainingCharacters} characters left","7bac87ef450645699ada5f9bdcd3d771"],[h.param

('remainingCharacters',
k)]);}};







f.exports=i;}),null);

/** www/__virtual__/x/XProfileIntroCardDismissSuggestedBioPromptAsyncController.js */



__d("XProfileIntroCardDismissSuggestedBioPromptAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/profile\/intro\/suggested_bio_prompt\/dismiss\/",{});}),

null);

/** js/profile/intro_card/ProfileIntroCardBioSuggestion.react.js */






__d('ProfileIntroCardBioSuggestion.react',['cx','React','AsyncRequest','Link.react','LineClamp.react','ProfileIntroCardStrings','XProfileIntroCardDismissSuggestedBioPromptAsyncController','XUICloseButton.react','XUIGrayText.react','XUIText.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits














(k,c('React').Component);j=i&&i.prototype;






function k(l){'use strict';
j.constructor.call(this,l);}
k.prototype.

render=function(){'use strict';

return (c('React').createElement('div',
{className:"_4nk4 _3-8x _3-96"},

c('React').createElement(c('Link.react'),
{className:"_4nk5 _2pi9 _2pi3",

onClick:this.props.onClick},
c('React').createElement(c('XUIText.react'),
{className:"_4nk6 _3-95 _3-91",

display:'block',
size:'medium'},
c('ProfileIntroCardStrings').BIO_SUGGESTION_MESSAGE),

c('React').createElement(c('XUIGrayText.react'),{shade:'dark',size:'medium'},
c('React').createElement(c('LineClamp.react'),{lines:2},
this.props.bioSuggestionLabel))),



c('React').createElement(c('XUICloseButton.react'),
{className:"_4nk7 _3-8y _3-91",

onClick:this.$ProfileIntroCardBioSuggestion_onDismiss.bind(this)})));};



k.prototype.

$ProfileIntroCardBioSuggestion_onDismiss=function(){'use strict';
var l=
c('XProfileIntroCardDismissSuggestedBioPromptAsyncController').
getURIBuilder().
getURI();

new (c('AsyncRequest'))().setURI(l).send();

this.props.onDismiss();};



f.exports=k;}),null);

/** js/profile/intro_card/ProfileIntroCardLogger.js */






__d('ProfileIntroCardLogger',['csx','cx','BanzaiLogger','CSS','DataStore','Event','Parent','tidyEvent'],(function a(b,c,d,e,f,g,h,i){













var j=null,
k=null;






function l
(o,
p,
q,
r){

j=p;
k=r;
c('tidyEvent')(c('Event').listen(o,'click',function(s){
var t=s.getTarget(),
u=c('Parent').byAttribute(t,q);
if(u){





if(c('CSS').matchesSelector(u,"._md0")&&
t.nodeName!=='A')

return;


n(JSON.parse(c('DataStore').get(u,'store')));}}));}




function m(o){
n(o);}


function n(o){
c('BanzaiLogger').log(j,babelHelpers['extends']({},k,o));}


f.exports=
{init:l,
logClick:m};}),null);

/** js/profile/intro_card/ProfileIntroCardSpinner.react.js */






__d('ProfileIntroCardSpinner.react',['cx','React','XUISpinner.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits






(k,c('React').Component);j=i&&i.prototype;k.prototype.
render=function(){'use strict';

return (c('React').createElement('div',
{className:"_33dp _2pi5"},

c('React').createElement(c('XUISpinner.react'),null)));};


function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** js/profile/intro_card/ProfileIntroCardBio.react.js */






__d('ProfileIntroCardBio.react',['cx','BootloadedComponent.react','DOMScroll','JSResource','ProfileIntroCardAddButton.react','ProfileIntroCardBioSuggestion.react','ProfileIntroCardLogger','ProfileIntroCardSpinner.react','ProfileIntroCardStrings','ProfileIntroCardTestID','React','ReactDOM','TextWithEmoticons.react','TooltipLink.react','getTextDirection'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits































(k,c('React').Component);j=i&&i.prototype;




















function k(l){'use strict';
j.constructor.call(this,l);

this.state=
{isBioSuggestionDismissed:false,
isEditMode:this.props.initialEdit,
isShareToFeedPromptShown:this.props.showShareToFeedPrompt};}

k.prototype.

componentDidMount=function(){'use strict';
if(this.props.initialEdit)
c('DOMScroll').ensureVisible
(c('ReactDOM').findDOMNode(this));};


k.prototype.

render=function(){'use strict';
if(this.state.isEditMode||this.state.isShareToFeedPromptShown){
var l=null;
if(this.props.bio){
l=this.props.bio;}else

if(this.props.bioSuggestionText&&
!this.state.isBioSuggestionDismissed)

l=this.props.bioSuggestionText;



return (c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']
({bootloadLoader:c('JSResource')('ProfileIntroCardBioEditForm.react').__setRef('ProfileIntroCardBio.react'),
bootloadPlaceholder:c('React').createElement(c('ProfileIntroCardSpinner.react'),null),
introCardSessionID:this.props.introCardSessionID,
initialText:l,
onCancel:function(){
this.setState
({isEditMode:false,
isShareToFeedPromptShown:false});}.

bind(this),
showShareToFeedPrompt:this.state.isShareToFeedPromptShown},
this.props.editFieldOptions)));}




if(this.props.bio)

return (c('React').createElement('div',
{'data-testid':c('ProfileIntroCardTestID').BIO_TEXT,
dir:c('getTextDirection')(this.props.bio),
className:"_4ihn _2pi4 _2pia"},

c('React').createElement(c('TextWithEmoticons.react'),
{renderEmoji:true,
renderEmoticons:true,
text:this.props.bio}),

c('React').createElement(c('TooltipLink.react'),
{className:"_1-gu _2p2g",

onClick:this.$ProfileIntroCardBio_showEditForm.bind(this,'bio_edit_click'),
tooltip:c('ProfileIntroCardStrings').EDIT},
c('React').createElement('i',
{className:"_2p2h"}))));






if(this.props.animatedBioPromptButton){
var m=
this.props.animatedBioPromptButton;

return (c('React').createElement(m,
{animatedBioPromptStrings:this.props.animatedBioPromptStrings,
onClick:this.$ProfileIntroCardBio_showEditForm.bind(this,'bio_add_click')}));}




if(!this.props.bioSuggestionText||this.state.isBioSuggestionDismissed)

return (c('React').createElement(c('ProfileIntroCardAddButton.react'),
{altText:c('ProfileIntroCardStrings').EDIT_BIO,
onClick:this.$ProfileIntroCardBio_showEditForm.bind(this,'bio_add_click'),
promptLabel:this.props.addBioPrompt}));





return (c('React').createElement(c('ProfileIntroCardBioSuggestion.react'),
{bioSuggestionLabel:this.props.bioSuggestionLabel,
onClick:
this.$ProfileIntroCardBio_showEditForm.bind(this,'bio_add_prompt_suggested_click'),

onDismiss:this.$ProfileIntroCardBio_dismissBioSuggestion.bind(this)}));};


k.prototype.

$ProfileIntroCardBio_showEditForm=function(event){'use strict';
c('ProfileIntroCardLogger').logClick({event:event});
this.setState({isEditMode:true});};
k.prototype.

$ProfileIntroCardBio_dismissBioSuggestion=function(){'use strict';
this.setState({isBioSuggestionDismissed:true});};



f.exports=k;}),null);

/** js/profile/timeline/TimelineCoverCollapse.js */




__d('TimelineCoverCollapse',['$','Arbiter','DOMDimensions','Style','TidyArbiter','getViewportDimensions'],(function a(b,c,d,e,f,g){










g.collapse=function(h,i){


i--;



var j=c('getViewportDimensions')().height,
k=c('DOMDimensions').getDocumentDimensions().height,
l=j+i;
if(k<=l)
c('Style').set
(c('$')('globalContainer'),
'min-height',
l+'px');


window.scrollBy(0,i);
c('TidyArbiter').inform
('TimelineCover/coverCollapsed',
i,
c('Arbiter').BEHAVIOR_STATE);};}),

null);

/** js/profile/timeline/modules/TimelineCapsuleUtilities.js */




__d('TimelineCapsuleUtilities',['CSS'],(function a(b,c,d,e,f,g){



var h=
{setFirstUnit:function i(j){
var k=true;
for(var l=0;l<j.childNodes.length;++l){
var m=j.childNodes[l];

if(m.id.indexOf('tl_unit_')===0)
if(k){
k=false;
c('CSS').addClass(m,'firstUnit');}else{

c('CSS').removeClass(m,'firstUnit');
break;}}}};






f.exports=h;}),null);

/** js/profile/timeline/modules/TimelineComposer.js */






__d('TimelineComposer',['csx','Arbiter','Bootloader','ComposerXMarauderLogger','ComposerXStore','CSS','DOM','DOMQuery','Event','Parent','ProfileFIGConfig','ReloadPage','Run','TimelineCapsuleUtilities','TimelineDOMID','$','ge','getObjectValues','goURI','tidyEvent'],(function a(b,c,d,e,f,g,h){























var i,
j;

function k(){
c('ComposerXMarauderLogger').logCompleted(i.id);}


function l(n){
if(n.hidePost){
k();
return;}


if(n.redirect){

var o=c('ComposerXStore').getAllForComposer(i.id);
c('getObjectValues')(o).forEach(function(q){
if(q.reset)
q.reset(q);});


c('goURI')(n.redirect);
k();
return;}


if(!n.streamStory){



c('ReloadPage').now();
return;}


if(c('ProfileFIGConfig').hasFIG){
var p=c('ge')(c('TimelineDOMID').FIG_TIMELINE);
if(p){

c('DOM').prependContent(p,n.streamStory);
k();
return;}}



if(n.backdatedTime){
c('Bootloader').loadModules(["TimelineStoryPublisher"],
function(q){
q.publish(n);},
'TimelineComposer');

k();
return;}


m.renderCapsuleBasedStory(i,n.streamStory);

c('Arbiter').inform
('TimelineComposer/on_after_publish',
n.streamStory,
c('Arbiter').BEHAVIOR_PERSISTENT);


k();}


var m=
{init:function n(o){
i=c('$')(o);
j=
c('Arbiter').subscribe('composer/publish',function(event,p){
if(p.composer_id===i.id)
l(p);});


c('Run').onLeave(m.destroy);},


destroy:function n(){
j&&j.unsubscribe();},


renderCapsuleBasedStory:function n(o,p){
var q=c('Parent').byClass(o,'fbTimelineCapsule');
if(!q)
return;


var r=c('DOMQuery').scry(q,".fbTimelineUnit")[0],
s=r.nextSibling;
if(s&&s.getAttribute('data-spine'))
r=r.nextSibling;


var t=c('DOM').insertAfter(r,p)[0];
if(c('CSS').hasClass(t,'fbTimelineUnit'))
t=c('DOM').find(t,'div.timelineUnitContainer');


c('Bootloader').loadModules(["Animation"],function(u){
new u(t).
from('backgroundColor','#fff8dd').
to('backgroundColor','#fff').
duration(2000).
ease(u.ease.both).
go();},
'TimelineComposer');

c('TimelineCapsuleUtilities').setFirstUnit(q);},


getRoot:function n(){
return i;},


initNUX:function n(o,p){
c('tidyEvent')(c('Event').listen
(o,
'click',
function(){
var q=c('DOM').scry(p,'textarea')[0];
q&&q.focus();}));}};





f.exports=b.TimelineComposer||m;}),null);

/** js/react_composer/attachments/life_event/ReactComposerLifeEventActionTypes.js */





__d('ReactComposerLifeEventActionTypes',[],(function a(b,c,d,e,f,g){

f.exports=
{ADD_LIFE_EVENT_TYPE_DETAILS:'ADD_LIFE_EVENT_TYPE_DETAILS',
DESELECT_LIFE_EVENT_TYPE:'DESELECT_LIFE_EVENT_TYPE',
SELECT_CATEGORY:'SELECT_CATEGORY',
SELECT_LIFE_EVENT_TYPE:'SELECT_LIFE_EVENT_TYPE',
SET_CONFIG:'SET_CONFIG',
SET_LIFE_EVENT_FIELD_VALUE:'SET_LIFE_EVENT_FIELD_VALUE',
SET_LIFE_EVENT_TYPEAHEAD_TEXT:'SET_LIFE_EVENT_TYPEAHEAD_TEXT',
SET_SELECTED_LIFE_EVENT_ICON_ID:'SET_SELECTED_LIFE_EVENT_ICON_ID',
SET_SELECTED_LIFE_EVENT_STORY:'SET_SELECTED_LIFE_EVENT_STORY',
SET_SELECTED_LIFE_EVENT_TITLE:'SET_SELECTED_LIFE_EVENT_TITLE'};}),null);

/** js/react_composer/attachments/life_event/ReactComposerLifeEventActions.js */





__d('ReactComposerLifeEventActions',['ReactComposerDispatcher','ReactComposerLifeEventActionTypes','ReactComposerLifeEventStore'],(function a(b,c,d,e,f,g){





c('ReactComposerLifeEventStore');h.prototype.




setConfig=function(i,j){'use strict';
var k=c('ReactComposerLifeEventActionTypes').SET_CONFIG;
c('ReactComposerDispatcher').dispatch({composerID:i,config:j,type:k});};
h.prototype.

selectLifeEventType=
function(i,
j,
k){
'use strict';
var l=c('ReactComposerLifeEventActionTypes').SELECT_LIFE_EVENT_TYPE;
c('ReactComposerDispatcher').dispatch
({composerID:i,
lifeEventType:k,
profileID:j,
type:l});};

h.prototype.

deselectLifeEventType=function(i){'use strict';
var j=c('ReactComposerLifeEventActionTypes').DESELECT_LIFE_EVENT_TYPE;
c('ReactComposerDispatcher').dispatch({composerID:i,type:j});};
h.prototype.

setSelectedCategoryIndex=function(i,j){'use strict';
var k=c('ReactComposerLifeEventActionTypes').SELECT_CATEGORY;
c('ReactComposerDispatcher').dispatch({composerID:i,index:j,type:k});};
h.prototype.

setLifeEventTypeaheadText=function(i,j){'use strict';
var k=c('ReactComposerLifeEventActionTypes').SET_LIFE_EVENT_TYPEAHEAD_TEXT;
c('ReactComposerDispatcher').dispatch({composerID:i,text:j,type:k});};
h.prototype.

setSelectedLifeEventTitle=function(i,j){'use strict';
var k=c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_TITLE;
c('ReactComposerDispatcher').dispatch({composerID:i,title:j,type:k});};
h.prototype.

setSelectedLifeEventStory=function(i,j){'use strict';
var k=
c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_STORY;
c('ReactComposerDispatcher').dispatch({composerID:i,story:j,type:k});};
h.prototype.

setSelectedLifeEventIconID=function(i,j){'use strict';
var k=
c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_ICON_ID;
c('ReactComposerDispatcher').dispatch({composerID:i,iconID:j,type:k});};
h.prototype.

setLifeEventFieldValue=
function(i,
j,
k){
'use strict';
var l=
c('ReactComposerLifeEventActionTypes').SET_LIFE_EVENT_FIELD_VALUE;
c('ReactComposerDispatcher').dispatch({composerID:i,fieldID:j,fieldValue:k,type:l});};
h.prototype.

addLifeEventTypeDetails=
function(i,
j,
k){
'use strict';
var l=c('ReactComposerLifeEventActionTypes').ADD_LIFE_EVENT_TYPE_DETAILS;
c('ReactComposerDispatcher').dispatch
({composerID:i,
details:k,
lifeEventType:j,
type:l});};

function h(){'use strict';}


f.exports=new h();}),null);

/** www/__virtual__/x/XLifeEventAsyncDetailsController.js */



__d("XLifeEventAsyncDetailsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/life_event\/composer\/async_details\/",{life_event_type:{type:"Enum",required:true,enumType:0}});}),

null);

/** js/react_composer/attachments/life_event/ReactComposerLifeEventStore.js */





__d('ReactComposerLifeEventStore',['invariant','ReactComposerStoreBase','ReactComposerLifeEventActions','ReactComposerLifeEventActionTypes','ReactComposerLifeEventConstants','AsyncDialog','AsyncRequest','Bootloader','XLifeEventAsyncDetailsController','flattenArray'],(function a(b,c,d,e,f,g,h){var i,j;














function k
(n){

return n.filter(function(o){
return (c('ReactComposerLifeEventConstants').
SUGGESTED_LIFE_EVENT_TYPES.indexOf(o.id)>=0);});}



function l(n){
var o=[];
n.forEach(function(p){
c('flattenArray')(p.life_events).forEach(function(q){
o.push(q);});});


return o;}
i=babelHelpers.inherits

(m,c('ReactComposerStoreBase'));j=i&&i.prototype;
function m(){'use strict';
var n;
j.constructor.call(this,
function(){

return {allLifeEventTypes:[],
categories:[],
hasUnsavedData:false,
iconsMap:{},
lifeEventTypeaheadText:'',
lifeEventTypeDetails:{},
selectedCategoryIndex:undefined,
selectedLifeEvent:{},
suggestedLifeEventTypes:[]};},


function(o){
switch(o.type){
case c('ReactComposerLifeEventActionTypes').SET_CONFIG:
n&&n.$ReactComposerLifeEventStore_handleSetConfig(o);
break;
case c('ReactComposerLifeEventActionTypes').SELECT_LIFE_EVENT_TYPE:
n&&n.$ReactComposerLifeEventStore_selectLifeEventType(o);
break;
case c('ReactComposerLifeEventActionTypes').DESELECT_LIFE_EVENT_TYPE:
n&&n.$ReactComposerLifeEventStore_deselectLifeEventType(o);
break;
case c('ReactComposerLifeEventActionTypes').ADD_LIFE_EVENT_TYPE_DETAILS:
n&&n.$ReactComposerLifeEventStore_addLifeEventTypeDetails(o);
break;
case c('ReactComposerLifeEventActionTypes').SELECT_CATEGORY:
n&&n.$ReactComposerLifeEventStore_selectCategory(o);
break;

case c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_ICON_ID:
n&&n.$ReactComposerLifeEventStore_setSelectedLifeEventIconID(o);
break;

case c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_STORY:
n&&n.$ReactComposerLifeEventStore_setSelectedLifeEventStory(o);
break;
case c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_TITLE:
n&&n.$ReactComposerLifeEventStore_setSelectedLifeEventTitle(o);
break;
case c('ReactComposerLifeEventActionTypes').SET_LIFE_EVENT_TYPEAHEAD_TEXT:
n&&n.$ReactComposerLifeEventStore_setLifeEventTypeaheadText(o);
break;
case c('ReactComposerLifeEventActionTypes').SET_LIFE_EVENT_FIELD_VALUE:
n&&n.$ReactComposerLifeEventStore_setSelectedLifeEventFieldValue(o);
break;}});



n=this;}
m.prototype.

getCategories=function(n){'use strict';
return this.getComposerData(n).categories;};
m.prototype.

getAllLifeEventTypes=function(n){'use strict';
return this.getComposerData(n).allLifeEventTypes;};
m.prototype.

getSuggestedLifeEventTypes=function(n){'use strict';
return this.getComposerData(n).suggestedLifeEventTypes;};
m.prototype.

getOtherID=function(n){'use strict';
return this.getComposerData(n).otherID;};
m.prototype.

getSelectedLifeEventType=function(n){'use strict';
return this.getComposerData(n).selectedLifeEvent.type;};
m.prototype.

getSelectedLifeEventFields=function(n){'use strict';
return this.getComposerData(n).selectedLifeEvent.fields;};
m.prototype.

getSelectedCategoryIndex=function(n){'use strict';
return this.getComposerData(n).selectedCategoryIndex;};
m.prototype.

getSelectedLifeEventDetails=function(n){'use strict';
var o=this.getComposerData(n);
return Object.assign({},o.selectedLifeEvent);};
m.prototype.

getIconsMap=function(n){'use strict';
var o=this.getComposerData(n);
return Object.assign({},o.iconsMap);};
m.prototype.

getSelectedLifeEventIconID=function(n){'use strict';
var o=this.getComposerData(n);
return o.selectedLifeEvent.iconID;};
m.prototype.

getSelectedLifeEventStory=function(n){'use strict';
return this.getComposerData(n).selectedLifeEvent.story;};
m.prototype.

getSelectedLifeEventTitle=function(n){'use strict';
return this.getComposerData(n).selectedLifeEvent.title;};
m.prototype.

getLifeEventTypeaheadText=function(n){'use strict';
return this.getComposerData(n).lifeEventTypeaheadText;};
m.prototype.

isWaitingForLifeEventDetails=function(n){'use strict';
var o=this.getComposerData(n);

return (o.selectedLifeEvent.type&&
!o.lifeEventTypeDetails[o.selectedLifeEvent.type]);};

m.prototype.

hasUnsavedData=function(n){'use strict';
var o=this.getComposerData(n);

return (o.selectedLifeEvent.title.length>0&&
o.selectedLifeEvent.story.length>0&&
o.hasUnsavedData);};

m.prototype.

$ReactComposerLifeEventStore_selectLifeEventType=function(n){'use strict';
var o=this.getComposerData(n.composerID);
if(!o.isActive){
o.isActive=true;

c('Bootloader').loadModules
(["ReactComposerHandleUnsavedChanges"],


function(q){return q.addCustomCheck
(n.composerID,
function(){
return this.hasUnsavedData
(n.composerID);}.

bind(this));}.bind(this),'ReactComposerLifeEventStore');}



var p=
c('ReactComposerLifeEventConstants').EDIT_WITH_MODAL_SPECIAL_CASES.
indexOf(n.lifeEventType)>=0;
if(p){
this.$ReactComposerLifeEventStore_launchLifeEventEditorModal
(n.composerID,
n.profileID,
n.lifeEventType);}else{


o.selectedLifeEvent={type:n.lifeEventType};
if(o.lifeEventTypeDetails[n.lifeEventType]===undefined){
this.$ReactComposerLifeEventStore_requestLifeEventTypeDetails
(n.composerID,
n.lifeEventType);}else 


this.$ReactComposerLifeEventStore_setSelectedLifeEventDetails(o);}


this.emitChange(n.composerID);};
m.prototype.

$ReactComposerLifeEventStore_selectCategory=function(n){'use strict';
var o=this.getComposerData(n.composerID);
o.selectedCategoryIndex=n.index;
this.emitChange(n.composerID);};
m.prototype.

$ReactComposerLifeEventStore_setSelectedLifeEventIconID=function(n){'use strict';
var o=this.getComposerData(n.composerID);
o.selectedLifeEvent.iconID=n.iconID;
o.hasUnsavedData=true;
this.emitChange(n.composerID);};
m.prototype.

$ReactComposerLifeEventStore_setSelectedLifeEventStory=function(n){'use strict';
var o=this.getComposerData(n.composerID);
o.selectedLifeEvent.story=n.story;
o.hasUnsavedData=true;
this.emitChange(n.composerID);};
m.prototype.

$ReactComposerLifeEventStore_setSelectedLifeEventTitle=function(n){'use strict';
var o=this.getComposerData(n.composerID);
o.selectedLifeEvent.title=n.title;
o.hasUnsavedData=true;
this.emitChange(n.composerID);};
m.prototype.

$ReactComposerLifeEventStore_deselectLifeEventType=function(n){'use strict';
var o=this.getComposerData(n.composerID);
o.lifeEventTypeaheadText='';
o.selectedLifeEvent={};
this.emitChange(n.composerID);};
m.prototype.

$ReactComposerLifeEventStore_setLifeEventTypeaheadText=function(n){'use strict';
var o=this.getComposerData(n.composerID);
o.lifeEventTypeaheadText=n.text;
this.emitChange(n.composerID);};
m.prototype.

$ReactComposerLifeEventStore_setSelectedLifeEventFieldValue=function(n){'use strict';
var o=this.getComposerData(n.composerID);
o.selectedLifeEvent.fields[n.fieldID]=n.fieldValue;
o.hasUnsavedData=true;
this.emitChange(n.composerID);};
m.prototype.

$ReactComposerLifeEventStore_addLifeEventTypeDetails=function(n){'use strict';
var o=this.getComposerData(n.composerID);
o.lifeEventTypeDetails[n.lifeEventType]=n.details;
this.$ReactComposerLifeEventStore_setSelectedLifeEventDetails(o);
this.emitChange(n.composerID);};
m.prototype.

$ReactComposerLifeEventStore_handleSetConfig=function(n){'use strict';
var o=this.getComposerData(n.composerID),

p=n.config.categories,
q=c('ReactComposerLifeEventConstants').ICONS_MAP,
r=n.config.otherID;


p!==null&&p!==undefined&&
q!==null&&q!==undefined&&
r!==null&&r!==undefined||h(0,
'config must include category and icon data and other life event id');


var s=l(p);

s.forEach(function(t){
return (t.icon=q[t.iconID]);});


o.iconsMap=q;
o.categories=p;
o.allLifeEventTypes=s;
o.suggestedLifeEventTypes=
k(s);
o.otherID=n.config.otherID;

this.emitChange(n.composerID);};
m.prototype.



$ReactComposerLifeEventStore_setSelectedLifeEventDetails=function(n){'use strict';
var o=n.selectedLifeEvent.type,
p=
n.lifeEventTypeDetails[o],
q=n.otherID===o;

n.selectedLifeEvent.title=q?
n.lifeEventTypeaheadText:
p.description;
n.selectedLifeEvent.story='';
n.selectedLifeEvent.iconID=p.iconID;
n.selectedLifeEvent.requiredFields=
p.requiredFields;

var r={};
Object.keys(p.requiredFields).forEach(function(s){
var t=p.requiredFields[s];


t.options=t.options.filter(function(u){
return (typeof u.value==='number');});



if(t.category===
c('ReactComposerLifeEventConstants').FIELD_CATEGORIES.DATA_FIELD_BACKED)

r[s]=t.options[0].value;});


n.selectedLifeEvent.fields=r;};
m.prototype.

$ReactComposerLifeEventStore_requestLifeEventTypeDetails=
function(n,
o){
'use strict';
var p=c('XLifeEventAsyncDetailsController').
getURIBuilder().
setEnum('life_event_type',o).
getURI();
new (c('AsyncRequest'))(p).
setHandler(function(q){
if(q.error)
return;

c('ReactComposerLifeEventActions').addLifeEventTypeDetails
(n,
o,
q.payload);}).


send();};
m.prototype.

$ReactComposerLifeEventStore_launchLifeEventEditorModal=
function(n,
o,
p){
'use strict';
var q=c('ReactComposerLifeEventConstants').MLE_MODAL_CONTROLLER_URI,
r=new (c('AsyncRequest'))(q).setData
({composer_id:n,
profile_id:o,
surface:'composer',
mle_type:p});


c('AsyncDialog').send(r);};



f.exports=new m();}),null);

/** js/react_composer/attachments/life_event/ReactComposerLifeEventStrings.js */





__d('ReactComposerLifeEventStrings',['fbt'],(function a(b,c,d,e,f,g,h){



var i=
{ATTACHMENT_SELECTOR_TEXT:h._(["Life Event","e49ca89073a366c93bb17e85ec931ea7"]),



ICON_PICKER_CLOSE_BUTTON:h._(["Close","f64ed42f8c4b6a34846511f13baf6968"]),



LIFE_EVENT_TYPE_TYPEAHEAD_PLACEHOLDER:h._(["Search or type a title","985fc2017b5b418d9947c9bce5cc8221"]),



STORY_INPUT_PLACEHOLDER:h._(["Add Story (optional)","8099484a01486ce16355657746c9dd61"]),



TITLE_INPUT_PLACEHOLDER:h._(["Add Title","905dc75bae70f2c86ed47ec4d0f3b927"])};





f.exports=i;}),null);

/** js/react_composer/attachments/life_event/ReactComposerLifeEventAttachmentSelector.react.js */





__d('ReactComposerLifeEventAttachmentSelector.react',['ix','ReactComposerAttachmentType','ReactComposerAttachmentSelectorContainer.react','ReactComposerLifeEventStrings','ReactComposerLoggingName','ReactComponentWithPureRenderMixin','React'],(function a(b,c,d,e,f,g,h){









var i=c('React').PropTypes,



j=c('React').createClass({displayName:'ReactComposerLifeEventAttachmentSelector',
mixins:[c('ReactComponentWithPureRenderMixin')],

propTypes:
{label:i.string},


getDefaultProps:function k(){

return {label:c('ReactComposerLifeEventStrings').ATTACHMENT_SELECTOR_TEXT};},



render:function k(){

return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),
{attachmentID:c('ReactComposerAttachmentType').LIFE_EVENT,
icon:h("40538"),
label:this.props.label,
loggingName:c('ReactComposerLoggingName').MLE_TAB_SELECTOR}));}});





f.exports=j;}),null);

/** www/__virtual__/x/XReactComposerLifeEventAttachmentBootstrapController.js */



__d("XReactComposerLifeEventAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/life_event\/bootstrap\/",{composer_id:{type:"String",required:true}});}),

null);

/** js/react_composer/attachments/life_event/ReactComposerLifeEventLazyAttachment.react.js */





__d('ReactComposerLifeEventLazyAttachment.react',['Bootloader','ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','React','XReactComposerLifeEventAttachmentBootstrapController'],(function a(b,c,d,e,f,g){









var h=c('React').createClass({displayName:'ReactComposerLifeEventLazyAttachment',
mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],



statics:
{attachmentID:c('ReactComposerAttachmentType').LIFE_EVENT},


bootload:function i(j){
c('Bootloader').loadModules
(["ReactComposerLifeEventAttachmentContainer.react"],
j,'ReactComposerLifeEventLazyAttachment.react');},



getBootstrapURI:function i(){
return c('XReactComposerLifeEventAttachmentBootstrapController').
getURIBuilder().
setString('composer_id',this.context.composerID).
getURI();}});



f.exports=h;}),null);

/** js/react_composer/attachments/mle/ReactComposerMLEAttachmentSelector.react.js */






__d('ReactComposerMLEAttachmentSelector.react',['fbt','ix','React','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerLoggingName'],(function a(b,c,d,e,f,g,h,i){var j,k,







l=c('React').PropTypes;j=babelHelpers.inherits




(m,c('React').PureComponent);k=j&&j.prototype;m.prototype.













render=function(){'use strict';

return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),
{'data-testid':'mle-attachment-selector',
attachmentID:c('ReactComposerAttachmentType').MLE,
label:this.props.label,
icon:i("40538"),
loggingName:c('ReactComposerLoggingName').MLE_TAB_SELECTOR}));};


function m(){'use strict';j.apply(this,arguments);}m.propTypes={label:l.node};m.defaultProps={label:h._(["Life Event","e49ca89073a366c93bb17e85ec931ea7"])};


f.exports=m;}),null);

/** www/__virtual__/x/XReactComposerMLEAttachmentBootstrapController.js */



__d("XReactComposerMLEAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/mle\/bootstrap\/",{composer_id:{type:"String",required:true}});}),

null);

/** js/react_composer/attachments/mle/ReactComposerMLELazyAttachment.react.js */





__d('ReactComposerMLELazyAttachment.react',['cx','ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','Bootloader','React','XReactComposerMLEAttachmentBootstrapController'],(function a(b,c,d,e,f,g,h){












var i=c('React').createClass({displayName:'ReactComposerMLELazyAttachment',
mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],



statics:
{attachmentID:c('ReactComposerAttachmentType').MLE},


bootload:function j(k){
c('Bootloader').loadModules
(["ReactComposerMLEAttachmentContainer.react"],
k,'ReactComposerMLELazyAttachment.react');},



getBootstrapURI:function j(){
return c('XReactComposerMLEAttachmentBootstrapController').
getURIBuilder().
setString('composer_id',this.context.composerID).
getURI();}});



f.exports=i;}),null);

/** js/react_composer/attachments/qanda/ReactComposerQAndAAttachmentSelector.react.js */






__d('ReactComposerQAndAAttachmentSelector.react',['fbt','ix','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerLoggingName','React'],(function a(b,c,d,e,f,g,h,i){var j,k,










l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').PureComponent);k=j&&j.prototype;m.prototype.













render=function(){'use strict';

return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),
{attachmentID:c('ReactComposerAttachmentType').QANDA,
label:this.props.label,
icon:i("40547"),
loggingName:c('ReactComposerLoggingName').QANDA_TAB_SELECTOR}));};


function m(){'use strict';j.apply(this,arguments);}m.propTypes={label:l.node};m.defaultProps={label:h._(["Start a Q&A","a63e9d29d90c1c01fa44e0097ac48e77"])};


f.exports=m;}),null);

/** www/__virtual__/x/XReactComposerQAndAAttachmentBootstrapController.js */



__d("XReactComposerQAndAAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/qanda\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"Int",required:true}});}),

null);

/** js/react_composer/attachments/qanda/ReactComposerQAndALazyAttachment.react.js */





__d('ReactComposerQAndALazyAttachment.react',['ReactComposerAttachmentType','ReactComposerBootloaderPropTypes','ReactComposerLoadableAttachmentBodyMixin','ActorURI','Bootloader','React','XReactComposerQAndAAttachmentBootstrapController'],(function a(b,c,d,e,f,g){












var h=c('React').createClass({displayName:'ReactComposerQAndALazyAttachment',
mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],



statics:
{attachmentID:c('ReactComposerAttachmentType').QANDA},


propTypes:
{bootloader:c('ReactComposerBootloaderPropTypes')},


bootload:function i(j){
if(this.props.bootloader&&this.props.bootloader.qandaAttachment){
this.props.bootloader.qandaAttachment(j);}else 

c('Bootloader').loadModules
(["ReactComposerQAndAAttachmentContainer.react"],
j,'ReactComposerQAndALazyAttachment.react');},




getBootstrapURI:function i(){
var j=c('XReactComposerQAndAAttachmentBootstrapController').
getURIBuilder().
setString('composer_id',this.context.composerID).
setEnum('composer_type',this.context.composerType).
setInt('target_id',this.context.targetID).
getURI();

return c('ActorURI').create(j,this.context.actorID);}});



f.exports=h;}),null);

/** js/react_composer/timeline/ReactComposerTimelineBootloader.js */






__d('ReactComposerTimelineBootloader',['Bootloader'],(function a(b,c,d,e,f,g){

'use strict';



var h=
{statusAttachment:function i(j){
c('Bootloader').loadModules
(["ReactComposerStatusAttachmentContainer.react","ReactComposerTimelinePostButtonContainer.react"],



j,'ReactComposerTimelineBootloader');},



mediaAttachment:function i(j){
c('Bootloader').loadModules
(["ReactComposerMediaAttachmentContainer.react","ReactComposerTimelineMediaPostButtonContainer.react"],



j,'ReactComposerTimelineBootloader');},



qandaAttachment:function i(j){
c('Bootloader').loadModules
(["ReactComposerQAndAAttachmentContainer.react","ReactComposerTimelineMediaPostButtonContainer.react"],



j,'ReactComposerTimelineBootloader');},



redEnvelopeAttachment:function i(j){
c('Bootloader').loadModules
(["ReactComposerRedEnvelopeAttachmentContainer.react","ReactComposerTimelineMediaPostButtonContainer.react"],



j,'ReactComposerTimelineBootloader');}};




f.exports=h;}),null);

/** js/react_composer/timeline/ReactComposerTimelineHeader.react.js */





__d('ReactComposerTimelineHeader.react',['ReactComponentWithPureRenderMixin','React','ReactComposerHeaderProps','ReactComposerLifeEventStore','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerLazyHeader.react'],(function a(b,c,d,e,f,g){









var h=c('React').createClass({displayName:'ReactComposerTimelineHeader',
mixins:[c('ReactComponentWithPureRenderMixin'),

c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerLifeEventStore'))],




propTypes:c('ReactComposerHeaderProps').propTypes,

getDefaultProps:c('ReactComposerHeaderProps').getDefaultProps,

statics:
{calculateState:function i(j,k){
var l=
c('ReactComposerLifeEventStore').isWaitingForLifeEventDetails(j);
return {forceThrobber:l};}},



render:function i(){

return (c('React').createElement(c('ReactComposerLazyHeader.react'),babelHelpers['extends']({},
this.props,
this.state)));}});





f.exports=h;}),null);

/** js/react_composer/timeline/ReactTimelineComposer.react.js */





__d('ReactTimelineComposer.react',['cx','fbt','ReactComposer.react','ReactComposerAttachmentType','ReactComposerBodyContainer.react','ReactComposerConfig','ReactComposerContextConfig','ReactComposerContextProviderMixin','ReactComposerFocusInit','ReactComposerTimelineBootloader','ReactComposerTimelineHeader.react','ReactComposerLifeEventAttachmentSelector.react','ReactComposerLifeEventLazyAttachment.react','ReactComposerLiveVideoAttachmentSelector.react','ReactComposerLiveVideoLazyAttachment.react','ReactComposerMediaAttachmentSelector.react','ReactComposerMediaLazyAttachment.react','ReactComposerMLEAttachmentSelector.react','ReactComposerMLELazyAttachment.react','ReactComposerQAndAAttachmentSelector.react','ReactComposerQAndALazyAttachment.react','ReactComposerStatusAttachmentSelector.react','ReactComposerStatusLazyAttachment.react','RedEnvelopeCreateAttachmentSelector','LayerHideOnBlur','LayerHideOnEscape','LayerHideOnTransition','React','XUIAmbientNUX.react','TimelineComposer','$','coalesce'],(function a(b,c,d,e,f,g,h,i){






















var j=c('RedEnvelopeCreateAttachmentSelector').module,















k=c('React').createClass({displayName:'ReactTimelineComposer',
mixins:[c('ReactComposerContextProviderMixin')],



propTypes:
{contextConfig:c('ReactComposerContextConfig').isRequired,
config:c('ReactComposerConfig').isRequired},


stateTypes:
{showLiveVideoNux:Boolean},


getInitialState:function l(){
return {showLiveVideoNux:this._shouldRenderLiveVideoNux()};},


componentDidMount:function l(){
c('TimelineComposer').init(this.props.contextConfig.composerID);
if(this.props.contextConfig.gks.shouldBlurOnFocus)
c('ReactComposerFocusInit').handler
(c('$')('timeline_react_composer_container'),
this.props.contextConfig.composerID,
this.props.contextConfig.actorID,
this.props.contextConfig.gks,
this.props.contextConfig.jsModules.composerFocus,
true);},




_shouldRenderLiveVideoNux:function l(){
var m=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').LIVE_VIDEO];

return (m&&
m.enabled&&
m.show_nux);},



_renderLiveVideoNux:function l(){
if(!this.state.showLiveVideoNux)
return null;



return (c('React').createElement(c('XUIAmbientNUX.react'),
{behaviors:
{LayerHideOnBlur:c('LayerHideOnBlur'),
LayerHideOnEscape:c('LayerHideOnEscape'),
LayerHideOnTransition:c('LayerHideOnTransition')},

contextRef:function(){return this.refs.liveVideoSelector;}.bind(this),
onCloseButtonClick:function(){
this.setState({showLiveVideoNux:false});}.
bind(this),
position:'above',
shown:this.state.showLiveVideoNux,
width:'auto'},i._(["New! Create a live video from your browser","f2e0cd8af4cb58a99b66eed497208c31"])));},









render:function l(){var m=

this._getAdditionalAttachmentComponents(),n=m[0],o=m[1];


return (c('React').createElement(c('ReactComposer.react'),
{className:"_s7h",
hideBorders:true,
loggingConfig:this.props.config.loggingConfig,
ref:'root'},
c('React').createElement(c('ReactComposerTimelineHeader.react'),
{background:'light-wash',
noHorizontalMargin:true,
showDelimiter:false},
c('React').createElement(c('ReactComposerStatusAttachmentSelector.react'),
{label:this.props.config.targetData.viewerIsTarget?i._(["Status","32ae0f875a527fbdc595ead6d7c77944"]):i._(["Post","61ac428a9c4b073e4165028f5b089643"])}),













c('React').createElement(c('ReactComposerMediaAttachmentSelector.react'),null),
n,
this._renderLiveVideoNux()),

c('React').createElement(c('ReactComposerBodyContainer.react'),
{expanded:this.props.config.showExpandedComposer},
c('React').createElement(c('ReactComposerStatusLazyAttachment.react'),
{config:this.props.config,
selected:true,
expanded:this.props.config.showExpandedComposer,
placeholder:this.props.config.targetData.viewerIsTarget?i._(["What's on your mind?","2340e43c54f5a3de9ca7fc0a7efc2cae"]):




c('coalesce')
(this.props.config.attachmentsConfig[
c('ReactComposerAttachmentType').STATUS].placeholderText,i._(["Write something...","9eb2bbf79ed8edabe9df326ff0201e38"])),






bootloader:c('ReactComposerTimelineBootloader')}),

c('React').createElement(c('ReactComposerMediaLazyAttachment.react'),
{config:this.props.config,
bootloader:c('ReactComposerTimelineBootloader')}),

o)));},





_getAdditionalAttachmentComponents:function l(){
var m=this.props.config.attachmentsConfig,
n=[],
o=[],

p=
m[c('ReactComposerAttachmentType').MLE].enabled,
q=
m[c('ReactComposerAttachmentType').QANDA].enabled,
r=
this.props.contextConfig.gks.www_react_mle_composer_attachment,
s=
m[c('ReactComposerAttachmentType').RED_ENVELOPE],
t=
m[c('ReactComposerAttachmentType').LIVE_VIDEO].enabled,
u=
m[c('ReactComposerAttachmentType').LIVE_VIDEO].composerDialog;

if(t){
n.push
(c('React').createElement(c('ReactComposerLiveVideoAttachmentSelector.react'),
{config:this.props.config,
contextConfig:this.props.contextConfig,
key:'live_video',
ref:'liveVideoSelector',
useComposerDialog:u}));


o.push
(c('React').createElement(c('ReactComposerLiveVideoLazyAttachment.react'),
{config:this.props.config,
key:'live_video',
useDialogComposer:u}));}




if(p)
if(r){
n.push
(c('React').createElement(c('ReactComposerLifeEventAttachmentSelector.react'),
{key:'life_event'}));


o.push
(c('React').createElement(c('ReactComposerLifeEventLazyAttachment.react'),
{config:this.props.config,
key:'life_event'}));}else{



n.push
(c('React').createElement(c('ReactComposerMLEAttachmentSelector.react'),
{key:'mle'}));


o.push
(c('React').createElement(c('ReactComposerMLELazyAttachment.react'),
{key:'mle',
config:this.props.config}));}





if(s.enabled&&
!this.props.config.targetData.viewerIsTarget){
var v=i._(["Red Envelope","04e10fa8ea238540748c28f5fc9853d8"]);





n.push
(c('React').createElement(j,
{label:v,
longLabel:v,
key:c('ReactComposerAttachmentType').RED_ENVELOPE}));}




if(q){
n.push
(c('React').createElement(c('ReactComposerQAndAAttachmentSelector.react'),
{key:'qanda',
label:i._(["Q&A","1ee3983530c6dbca8f52aab391c6e034"])}));






o.push
(c('React').createElement(c('ReactComposerQAndALazyAttachment.react'),
{key:'qanda',
config:this.props.config,
bootloader:c('ReactComposerTimelineBootloader')}));}




return [n,o];}});



f.exports=k;}),null);

/** js/ui/core/ui/layout/ScrollColumnRenderer.js */




__d('ScrollColumnRenderer',['DOMContainer.react','React','ReactRenderer','ScrollColumn.react'],(function a(b,c,d,e,f,g){






var h=

{init:function i
(j,
k,
l){

c('ReactRenderer').constructAndRenderComponentAcrossTransitions(c('ScrollColumn.react'),babelHelpers['extends']


({children:
[c('React').createElement(c('DOMContainer.react'),{key:'content'},j)]},


l),

k);}};




f.exports=h;}),null);
