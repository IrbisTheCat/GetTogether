if (self.CavalryLogger) { CavalryLogger.start_js(["qTkwX"]); }

/** __static_js_modules__/actorselectornuxtypes.js */




__d("ActorSelectorNuxTypes",[],(function a(b,c,d,e,f,g){

f.exports={COMPOSER:"composer_seen_count",COMPOSER_COVERED:"composer_covered_seen_count",M_COMPOSER:"m_composer_seen_count",M_UFI:"m_ufi_seen_count",UFI:"ufi_seen_count",UFI_TIMELINE:"ufi_timeline_seen_count",UFI_TIMELINE_COVERED:"ufi_timeline_covered_seen_count"};}),

null);

/** __static_js_modules__/stickerinterfaces.js */




__d("StickerInterfaces",[],(function a(b,c,d,e,f,g){

f.exports={MESSAGES:"messages",COMMENTS:"comments",STICKERED:"stickered",COMPOSER:"composer",POSTS:"posts",FRAMES:"frames",SMS:"sms",MONTAGE:"montage"};}),

null);

/** __static_js_modules__/userhovercardlocation.js */




__d("UserHovercardLocation",[],(function a(b,c,d,e,f,g){

f.exports={INVALID:"unknown",NONE:"none",HC_FRIEND_BROWSER:"hc_friend_browser",HC_FRIENDS_TAB:"hc_friends_tab",HC_PROFILE_BROWSER:"hc_profile_browser",HC_STREAM:"hc_stream",HC_TIMELINE:"hc_timeline",HC_UFI:"hc_ufi",HC_REMINDER_POKE:"hc_reminder_poke",HC_REMINDER_BIRTHDAY:"hc_reminder_birthday",HC_EVENT_GUEST:"hc_event_guest",HC_UNKNOWN:"hc_unknown",HC_NUX:"hc_nux_page_suggestion",FRIEND_BROWSER:"friend_browser",FRIENDS_TAB:"friends_tab",PROFILE_BROWSER:"profile_browser",STREAM:"stream",TIMELINE:"timeline",UFI:"ufi",UFI_ADMIN:"ufi_admin",REMINDER_POKE:"reminder_poke",REMINDER_BIRTHDAY:"reminder_birthday",REMINDER_FACEVERSARY:"reminder_faceversary",REMINDER_NAMEDAY:"reminder_nameday",REMINDER_WORK_ANNIVERSARY:"reminder_work_anniversary",EVENT_GUEST:"event_guest",NUX_PAGE_SUGGESTION:"hc_nux_page_suggestion",TIMELINE_FRIENDS_BOX:"tl_fr_box",CHAT:"chat"};}),

null);

/** js/ads/components/assets/PageVoiceDropdownSelector.react.js */






__d('PageVoiceDropdownSelector.react',['cx','BootloadedComponent.react','Image.react','JSResource','React','XUIPopoverButton.react','XUISpinner.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,










k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.


































state=
{dialogShown:false,
bootloadFinished:false},this.


$PageVoiceDropdownSelector_onChangeActor=function(r){
this.props.onChange(r);
this.setState({dialogShown:false});}.
bind(this),this.

$PageVoiceDropdownSelector_getDialogContextRef=function(){
return this.refs['open-menu-button'];}.
bind(this),this.

$PageVoiceDropdownSelector_onBootloadFinished=function(){
this.setState({bootloadFinished:true});}.
bind(this),this.


































































$PageVoiceDropdownSelector_onButtonClick=function(event){
this.setState

({dialogShown:!this.state.dialogShown,






shownBusinessID:this.state.defaultBusinessID},

function(){return this.props.onClick(event);}.bind(this));}.

bind(this),this.

$PageVoiceDropdownSelector_onToggle=function(r){
this.setState({dialogShown:r});}.
bind(this),this.

$PageVoiceDropdownSelector_getSelectedImageSource=function(){
var r=this.props.selectedActorID;
if(!r)
return '';


if(r===this.props.user.id)
return this.props.user.thumbSrc||'';


return this.props.pages[r].thumbSrc||'';}.
bind(this),this.

$PageVoiceDropdownSelector_getSelectedActorName=function(){
var r=this.props.selectedActorID;
if(!r)
return '';


if(r===this.props.user.id)
return this.props.user.name||'';


return this.props.pages[r].name||'';}.
bind(this),n;}l.prototype.render=function(){var m=null;if(this.state.dialogShown)m=c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']({bootloadLoader:c('JSResource')('PageVoiceDropdownSelectorMenu.react').__setRef('PageVoiceDropdownSelector.react'),bootloadPlaceholder:c('React').createElement('div',null),onComponentLoad:this.$PageVoiceDropdownSelector_onBootloadFinished},this.props,{contextRef:this.$PageVoiceDropdownSelector_getDialogContextRef,shown:true,shownBusinessID:this.state.shownBusinessID,onChange:this.$PageVoiceDropdownSelector_onChangeActor,onToggle:this.$PageVoiceDropdownSelector_onToggle}));var n=this.state.dialogShown&&!this.state.bootloadFinished,o=this.props.loading||n,p=null,q=null;if(o){q=c('React').createElement('span',{className:"_2wk7"},c('React').createElement(c('XUISpinner.react'),null));}else p=c('React').createElement(c('Image.react'),{className:"_6vg",height:16,src:this.$PageVoiceDropdownSelector_getSelectedImageSource(),width:16});return c('React').createElement('span',null,c('React').createElement(c('XUIPopoverButton.react'),{className:"_4z8-",disabled:this.props.disabled,image:c('React').createElement('span',null,p,q),label:this.props.showPageName?this.$PageVoiceDropdownSelector_getSelectedActorName():'',maxwidth:this.props.maxwidth,ref:'open-menu-button',suppressed:this.props.suppressed,type:'button',onClick:this.$PageVoiceDropdownSelector_onButtonClick}),m);};l.propTypes={disabled:k.bool,loading:k.bool,maxWidth:k.number,pages:k.object.isRequired,selectedActorID:k.string,showPageName:k.bool,suppressed:k.bool.isRequired,user:k.object.isRequired,onChange:k.func.isRequired,onClick:k.func.isRequired};l.defaultProps={disabled:false,showPageName:false};


f.exports=l;}),null);

/** js/actor/ActorSelector.react.js */






__d('ActorSelector.react',['cx','Arbiter','BizSiteIdentifier.brands','BootloadedComponent.react','Bootloader','Event','JSResource','PagesCalloutActions','PagesCalloutDispatcher','PageVoiceDropdownSelector.react','React','ReactDOM','ShortProfiles','TooltipData','emptyFunction','getObjectValues','goURI','joinClasses','tidyEvent'],(function a(b,c,d,e,f,g,h){var i,j,























k=c('React').PropTypes,

l=500;i=babelHelpers.inherits

(m,c('React').Component);j=i&&i.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.


























state=
{actorData:{},
nuxShown:false,
selectedActorID:this.props.selectedActorID},this.







$ActorSelector_getNUXContextRef=function(){
return this.refs.selector;}.
bind(this),this.

























































































$ActorSelector_fetchActorData=function(){
c('ShortProfiles').getMulti(this.props.actorIDs,function(s){
if(this.$ActorSelector_canSetState)
this.setState({actorData:s});}.

bind(this));}.
bind(this),this.






$ActorSelector_onClickSelector=function(){
if(this.state.nuxShown)
this.$ActorSelector_onCompleteNux();}.

bind(this),this.

$ActorSelector_onChange=function(s){
if(this.props.syncEnabled){
c('Arbiter').inform('ActorSelector/ActorChange',s);
return;}

this.props.onChange(s);}.
bind(this),this.




















$ActorSelector_onClickSettings=function(){
this.$ActorSelector_onCompleteNux();
c('goURI')(this.props.settingsURI);}.
bind(this),this.






$ActorSelector_onCompleteNux=function(){
this.setState({nuxShown:false});
if(this.props.onCompleteNux)
this.props.onCompleteNux();}.

bind(this),this.

$ActorSelector_setHoverNux=function(){
if(!this.props.nuxEnabled)
return;

if(this.props.nuxHoverContext&&!this.$ActorSelector_hoverListener)

this.$ActorSelector_hoverListener=c('tidyEvent')
(c('Event').listen(this.props.nuxHoverContext,'mouseenter',function(){

c('Bootloader').loadModules
(["ActorSelectorNUXLayer.react"],c('emptyFunction'),'ActorSelector.react');




var s=setTimeout(function(){
this.$ActorSelector_hoverListener.remove();
this.$ActorSelector_showNux();}.
bind(this),l),
t=c('tidyEvent')
(c('Event').listen(this.props.nuxHoverContext,'mouseleave',function(){
clearTimeout(s);
t.remove();}));}.


bind(this)));}.


bind(this),this.

$ActorSelector_registerNux=function(){



if(!this.props.nuxEnabled||!this.props.pageTimelineNuxTipID)
return;

c('PagesCalloutDispatcher').dispatch
({type:c('PagesCalloutActions').REGISTER_CALLOUT,
data:
{tip_id:this.props.pageTimelineNuxTipID,
showCallback:function(){return this.$ActorSelector_showNux();}.bind(this)}});}.


bind(this),this.

$ActorSelector_showNux=function(){
if(this.props.nuxEnabled)
this.setState({nuxShown:true});}.

bind(this),o;}m.prototype.componentWillMount=function(){'use strict';this.$ActorSelector_canSetState=true;this.$ActorSelector_fetchActorData();};m.prototype.render=function(){'use strict';if(!this.state.selectedActorID||!this.state.actorData[this.state.selectedActorID])return c('React').createElement('div',null);if(this.props.actorIDs.length===0)return c('React').createElement('div',null);var n=null;if(this.state.nuxShown)n=c('React').createElement(c('BootloadedComponent.react'),{bootloadLoader:c('JSResource')('ActorSelectorNUXLayer.react').__setRef('ActorSelector.react'),bootloadPlaceholder:c('React').createElement('span',null),onCompleteNux:this.$ActorSelector_onCompleteNux,onClickSettings:this.$ActorSelector_onClickSettings,settingsURI:this.props.settingsURI,shown:true,contextRef:this.$ActorSelector_getNUXContextRef,nuxBody:this.props.nuxBody});return c('React').createElement('span',{className:c('joinClasses')("_6vh",this.props.className),'data-testid':'actor-selector','data-interaction-root-id':"_3r_r"},c('React').createElement('span',{ref:'selector'},c('React').createElement(c('PageVoiceDropdownSelector.react'),{disabled:this.props.disabled,loading:this.props.loading,pages:this.state.actorData,onChange:this.$ActorSelector_onChange,onClick:this.$ActorSelector_onClickSelector,selectedActorID:this.state.selectedActorID,searchBarVisible:true,showBusinessPages:false,showPageName:this.props.showName,showNameMaxWidth:this.props.showNameMaxWidth,showPersonalPagesInRoot:!c('BizSiteIdentifier.brands').isBizSite(),suppressed:this.props.suppressed,user:c('getObjectValues')(this.state.actorData)[0]})),n);};m.prototype.componentDidMount=function(){'use strict';this.$ActorSelector_registerNux();this.$ActorSelector_setHoverNux();this.$ActorSelector_setTooltip();if(this.props.syncEnabled)this.$ActorSelector_setSyncSelectors();};m.prototype.componentDidUpdate=function(n,o){'use strict';if(this.props.actorIDs.toString()!==n.actorIDs.toString())this.$ActorSelector_fetchActorData();this.$ActorSelector_setHoverNux();this.$ActorSelector_setTooltip();if(this.state.nuxShown&&!o.nuxShown&&this.props.onShowNux)this.props.onShowNux();if(this.props.selectedActorID!==n.selectedActorID)this.setState({selectedActorID:this.props.selectedActorID});};m.prototype.componentWillUnmount=function(){'use strict';this.$ActorSelector_canSetState=false;this.$ActorSelector_arbiterToken&&c('Arbiter').unsubscribe(this.$ActorSelector_arbiterToken);};m.prototype.$ActorSelector_setSyncSelectors=function(){'use strict';this.$ActorSelector_arbiterToken=c('Arbiter').subscribe('ActorSelector/ActorChange',function(n,o){if(this.props.actorIDs.indexOf(o.value)===-1)return;this.setState({selectedActorID:o.value},function(){return this.props.onChange(o);}.bind(this));}.bind(this));};m.prototype.






$ActorSelector_setTooltip=function(){'use strict';
if(!this.refs.selector)
return;


var n=this.state.actorData[this.state.selectedActorID];
if(!n)
return;


if(!this.props.tooltipConstructor)
return;


c('TooltipData').set
(c('ReactDOM').findDOMNode(this.refs.selector),
this.props.tooltipConstructor(n.name),
'above',
'right');};

m.propTypes={actorIDs:k.array.isRequired,disabled:k.bool,loading:k.bool,nuxBody:k.node,nuxEnabled:k.bool,nuxHoverContext:k.object,onChange:k.func.isRequired,onCompleteNux:k.func,onShowNux:k.func,pageTimelineNuxTipID:k.string,selectedActorID:k.string,settingsURI:k.string,showName:k.bool,showNameMaxWidth:k.number,suppressed:k.bool,syncEnabled:k.bool,tooltipConstructor:k.func};m.defaultProps={disabled:false,suppressed:true};


f.exports=m;}),null);

/** js/components/Hovercard/HovercardLink.js */




__d('HovercardLink',['Bootloader','URI'],(function a(b,c,d,e,f,g){




var h=



{getBaseURI:function i(){
return new (c('URI'))('/ajax/hovercard/hovercard.php');},


constructEndpoint:function i(j,k){
return h.
constructEndpointWithGroupAndLocation(j,k,null);},


constructEndpointWithLocation:function i(j,k){
return h.
constructEndpointWithGroupAndLocation(j,null,k);},


constructEndpointWithGroupAndLocation:function i
(j,
k,
l,
m){

return h.
constructEndpointWithGroupLocationAndExtraParams
(j,
k,
l,
m);},



constructEndpointWithGroupLocationAndExtraParams:function i
(j,
k,
l,
m){

var n=arguments.length<=4||arguments[4]===undefined?null:arguments[4],
o=new (c('URI'))(h.getBaseURI()).
setQueryData({id:j.id}),

p={};
if(n!==null)
for(var q in n)
p[q]=n[q];








if((j.weakreference||m)&&k)
p.group_id=k;

if(l)
p.hc_location=l;

o.addQueryData({extragetparams:JSON.stringify(p)});

return o;}};




f.exports=h;}),null);

/** js/intl/isRTL.js */





__d('isRTL',['UnicodeBidi','UnicodeBidiDirection'],(function a(b,c,d,e,f,g){












function h(i){
return c('UnicodeBidi').getDirection(i)===c('UnicodeBidiDirection').RTL;}


f.exports=h;}),null);

/** js/components/Hovercard/HovercardLinkInterpolator.js */






__d('HovercardLinkInterpolator',['cx','fbt','Badge.react','HovercardLink','Link.react','React','URI','isFacebookURI','isRTL'],(function a(b,c,d,e,f,g,h,i){












function j
(k,
l,
m,
n,
o){

var p=arguments.length<=5||arguments[5]===undefined?null:arguments[5],
q=l.entity,


r=m||(q.external?'_blank':null),

s,
t=
(!q.external?"profileLink":'')+
(q.weakreference?' '+"weakReference":''),


u,
v=q.hashtag?k.substring(1):k;
u=c('isRTL')(v)?'rtl':'ltr';


var w=new (c('URI'))(q.url);
if(c('isFacebookURI')(w))
w.addQueryData({hc_location:o});

var x=q.shimhash?q.shimhash:null,



y=!q.external&&
!q.hashtag&&
!q.photo&&
!q.note&&
!q.statusupdate&&
!q.video,

z=y?

{'data-hovercard':
c('HovercardLink').constructEndpointWithGroupLocationAndExtraParams
(q,
n,
o,
null,
p).
toString()}:

{};

if(q.hashtag){
s=
c('React').createElement('a',babelHelpers['extends']({},
z,
{className:"_58cn",
dir:u,
href:w.toString(),
target:r}),
c('React').createElement('span',
{'aria-label':i._(["hashtag","4173d37550ea28aa2840de742cef4486"]),



className:"_58cl"},
k.substring(0,1)),

c('React').createElement('span',{className:"_58cm"},
k.substring(1)));}else{



var aa=[];

if(q.weakreference)
aa.push(c('React').createElement('i',{key:'weakreference',className:'UFIWeakReferenceIcon'}));


aa.push(k);

if(q.noncoworker)
aa.push(c('React').createElement(c('Badge.react'),{key:'noncoworker',type:'work_non_coworker'}));


s=
c('React').createElement(c('Link.react'),babelHelpers['extends']({},
z,
{className:t,
dir:u,
href:
{url:w.toString(),
shimhash:x},

target:r}),
aa);}



return s;}


f.exports=j;}),null);

/** js/uri/URITruncator.js */












__d('URITruncator',['fbt','URI'],(function a(b,c,d,e,f,g,h){





var i=3,


j=h._(["...","2b559e34e1810013c532afd11a7a43f9"]),
k=j.length||j.toString().length;









function l(m,n){
if(!m||
n===undefined||
m.length<=n||
n<=k||
m.toString().length<=k)
return m;





if(!c('URI').isValidURI(m))



return m.substring(0,n-k)+j;


var o=new (c('URI'))(m),
p=o.getOrigin();


if(p.length>n-k)
return p.substring(0,n-k)+j;








var q=false;

if(!!o.getFragment()){
q=true;
o.setFragment('');
if(o.toString().length<=n-k)
return o.toString()+j;}



var r=o.getQueryData();
if(r){
var s=Object.keys(r);

if(s.length>0){
q=true;

for(var t=s.length-1;t>=0;t--){
o.removeQueryData(s[t]);
if(o.toString().length<=n-k)
return o.toString()+j;}}}





var u=o.getPath()+(q?j:''),
v=u.split('/'),
w=p.length+u.length-n,
x=0;




while(w>0&&v.length>x+1){
var y=x+1,
z=v[y];




if(w+k+i<=z.length){
var aa=z.length-1,
ba=z.length-w-k,
ca=/[a-zA-Z0-9]/;


w+=k;

while(w>0){


while(aa>0&&ca.test(z[aa])){
aa--;
w--;}

while(aa>0&&!ca.test(z[aa])){
aa--;
w--;}}





if(aa===0)
aa=ba-1;

v[y]=z.substring(0,aa+1)+j;}else{



x++;
w-=z.length;

if(x===1){

w+=k;}else 



w--;}}




if(x>0){












if(v[v.length-1].length===0&&
v.length===x+2)
x++;

v.splice(1,x,j);}


var da=p+v.join('/');





if(da.length>n)
da=da.substring(0,n-k)+j;


return da;}


f.exports=l;}),null);

/** js/logging/generated/VideoTimestampsClicksWWWTypedLogger.js */





__d('VideoTimestampsClicksWWWTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:VideoTimestampsClicksWWWLoggerConfig',this.$VideoTimestampsClicksWWWTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:VideoTimestampsClicksWWWLoggerConfig',this.$VideoTimestampsClicksWWWTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$VideoTimestampsClicksWWWTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$VideoTimestampsClicksWWWTypedLogger_data=babelHelpers['extends']({},
this.$VideoTimestampsClicksWWWTypedLogger_data,
j);

return this;};
h.prototype.




setCommentID=function(j){
this.$VideoTimestampsClicksWWWTypedLogger_data.comment_id=j;
return this;};
h.prototype.




setIsContentTimestamp=function(j){
this.$VideoTimestampsClicksWWWTypedLogger_data.is_content_timestamp=j;
return this;};
h.prototype.





setLocalCommentFeedbackID=function(j){
this.$VideoTimestampsClicksWWWTypedLogger_data.local_comment_feedback_id=j;
return this;};
h.prototype.




setVC=function(j){
this.$VideoTimestampsClicksWWWTypedLogger_data.vc=j;
return this;};
h.prototype.




setVideoTimestamp=function(j){
this.$VideoTimestampsClicksWWWTypedLogger_data.video_timestamp=j;
return this;};














var i=
{comment_id:true,
is_content_timestamp:true,
local_comment_feedback_id:true,
vc:true,
video_timestamp:true};


f.exports=h;}),null);

/** shared/core/transformTextRanges.js */





__d('transformTextRanges',['UnicodeUtils'],(function a(b,c,d,e,f,g){















var h=function i(j,k,l){
if(!j||!k||!l)
return j;


k.sort(function(s,t){return s.offset-t.offset;});

var m=0;
for(var n=0;n<k.length;n++){
k[n].offset+=m;

var o=c('UnicodeUtils').substr
(j,
k[n].offset,
k[n].length),

p=c('UnicodeUtils').strlen(o),
q=l(o,k[n]),
r=c('UnicodeUtils').strlen(q);

if(o!==q){
j=c('UnicodeUtils').substr(j,0,k[n].offset)+
q+
c('UnicodeUtils').substr(j,k[n].offset+k[n].length);
k[n].length=r;


m+=r-p;}}



return j;};


f.exports=h;}),null);

/** js/clientufi/models/UFICommentUtils.js */






__d('UFICommentUtils',['cx','Bootloader','HovercardLinkInterpolator','React','UFIConstants','UFIVideoPlayerRegistry','URI','URITruncator','VideoTimestampsClicksWWWTypedLogger','transformTextRanges'],(function a(b,c,d,e,f,g,h){

'use strict';














var i=
{timeToTimestamp:function j(k){
var l=Math.floor(k/3600),
m=l?l+':':'';
m+=
((l?'0':'')+Math.floor(k%3600/60)).slice(-2)+':';
return m+('0'+k%60).slice(-2);},


getCommentTextWithTruncatedURIs:function j
(k,
l){

if(c('UFIConstants').commentURLTruncationLength)
if(k&&k.length>0)
l=c('transformTextRanges')
(l,
k,
function(m,n){
var o=
n.entity.external||
n.entity.__type__&&
n.entity.__type__.name==='ExternalUrl';
return o?
c('URITruncator')(m,c('UFIConstants').commentURLTruncationLength):
m;});




return l;},


getCommentBodyInterpolator:function j
(k,
l,
m,
n){

return function(o,p){
if(p.videoTimestamp){
if(n)
return c('React').createElement('span',null,p.entity);


var q=function u(v){
v.preventDefault();

new (c('VideoTimestampsClicksWWWTypedLogger'))().
setVideoTimestamp(p.integerTimestamp).
setCommentID(m).
setIsContentTimestamp(false).
log();

if(l){
c('UFIVideoPlayerRegistry').seekAvailableVideoPlayerController
(l,
p.integerTimestamp);

c('UFIVideoPlayerRegistry').scrollToAvailableVideo(l);}

return false;};


return c('React').createElement('a',
{className:"TimestampLink",
onClick:q,
href:'#'},
p.entity);}else

if(p.sphericalViewport){
var r=function u(v){
v.preventDefault();
if(l)
c('UFIVideoPlayerRegistry').
setAvailableVideoPlayerControllerSphericalViewport
(l,
{yaw:p.yaw,pitch:p.pitch});


return false;};


return (c('React').createElement('a',{onClick:r,href:'#'},
p.entity));}else


if(p.sphericalViewportAndTimestamp){
var s=function u(v){
v.preventDefault();
if(l){
c('UFIVideoPlayerRegistry').
setAvailableVideoPlayerControllerSphericalViewport
(l,
{yaw:p.yaw,pitch:p.pitch});

c('UFIVideoPlayerRegistry').seekAvailableVideoPlayerController
(l,
p.integerTimestamp);}


return false;};


return (c('React').createElement('a',{onClick:s,href:'#'},
p.entity));}else



if(p.entity&&
p.entity.__type__=='EntTextDelightCampaign'){

var t=null;
if(p.animationURI)
t=function u(v){
v.preventDefault();
c('Bootloader').loadModules
(["TextDelightAnimation"],
function(w){
w.playCommentAnimation(p.animationURI);},
'UFICommentUtils');};




return (c('React').createElement('span',
{style:p.highlightStyle,
onClick:t},
o));}else 



return c('HovercardLinkInterpolator')
(o,
p,
'_blank',
k,
'ufi');};},










shallowCopyRanges:function j(k){
if(!k)
return k;


var l=[];

k.forEach(function(m){
l.push(babelHelpers['extends']({},
m));});



return l;},





annotateProfileURIIfPublic:function j(k,l){
if(!k)
return l;


return new (c('URI'))(l).addQueryData('rc','p').toString();},





shouldShowTranslateAll:function j
(k,
l,
m,
n){

if(!k)
return false;

var o=0,
p=void 0,q=void 0;
for(var r=0;r<k.length;r++){
p=k[r];

if(p.istranslatable&&
!p.translationdata&&
!n[p.id])

o++;

if(o>1)
return true;


if(m[p.id]){
q=l?l[p.id]:[];
for(var s=0;s<q.length;s++){
p=q[s];

if(p.istranslatable&&
!p.translationdata&&
!n[p.id])

o++;

if(o>1)
return true;}}}




return false;}};



f.exports=i;}),null);

/** js/components/Text/Newline.react.js */




__d('Newline.react',['React'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits








(j,c('React').Component);i=h&&h.prototype;j.prototype.
render=function(){'use strict';
return c('React').createElement('br',this.props);};
function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);

/** shared/core_components/TextWithEntities/BaseTextWithEntities.react.js */




__d('BaseTextWithEntities.react',['Newline.react','React','ReactFragment','Text.react','UnicodeUtils'],(function a(b,c,d,e,f,g){

'use strict';var h,i,







j=c('React').PropTypes;




function k(o,p){
return o.offset-p.offset;}





var l=/(\r\n|[\r\n])/,

m=j.shape
({length:j.number.isRequired,
offset:j.number.isRequired});h=babelHelpers.inherits
















(n,c('React').Component);i=h&&h.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=i.constructor).call.apply(o,[this].concat(r)),this.











$BaseTextWithEntities_getSortedRanges=function(){
return [].concat
(this.props.ranges,
this.props.aggregatedRanges,
this.props.imageRanges,
this.props.metaRanges,
this.props.inlineStyleRanges).
filter(function(t){return t!=null;}).sort(k);}.
bind(this),this.






$BaseTextWithEntities_renderText=function(t){
var u=t.split(l),
v={};



for(var w=0;w<u.length;w++){
var x=u[w];
if(x){


var y='text'+w;
if(w%2===1){
v[y]=c('React').createElement(c('Newline.react'),null);}else 

v[y]=this.props.textRenderer(u[w]);}}




return c('ReactFragment').create(v);}.
bind(this),p;}n.prototype.

render=function(){
var o=0,
p=this.props.text,
q=this.$BaseTextWithEntities_getSortedRanges(),

r={},
s=q.length;
for(var t=0,u=s;t<u;t++){
var v=q[t];
if(v.offset<o)
continue;


if(v.offset>o)
r['text'+t]=this.$BaseTextWithEntities_renderText
(c('UnicodeUtils').substring(p,o,v.offset));



var w=c('UnicodeUtils').substr(p,v.offset,v.length);
r['range'+t]=
this.props.rangeRenderer(w,v);

o=v.offset+v.length;}


if(p.length>o)
r.end=this.$BaseTextWithEntities_renderText(c('UnicodeUtils').substr(p,o));



return (c('React').createElement(c('Text.react'),
{className:this.props.className,
style:this.props.style},
c('ReactFragment').create(r)));};


n.propTypes={aggregatedRanges:j.array,imageRanges:j.array,inlineStyleRanges:j.array,metaRanges:j.array,rangeRenderer:j.func.isRequired,ranges:j.arrayOf(m),text:j.string.isRequired,textRenderer:j.func.isRequired};


f.exports=n;}),null);

/** js/components/ReactTextWithEntities/TextWithEntities.react.js */




__d('TextWithEntities.react',['BaseTextWithEntities.react','Link.react','React','TextWithEmoticons.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i;









function j(l){
return l.replace(/<3\b|&hearts;/g,'\u2665');}
h=babelHelpers.inherits















(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.





$TextWithEntities_renderText=function(q){
if(this.props.renderEmoticons||this.props.renderEmoji){

return (c('React').createElement(c('TextWithEmoticons.react'),
{text:q,
renderEmoticons:this.props.renderEmoticons,
renderEmoji:this.props.renderEmoji}));}else 



return j(q);}.

bind(this),this.

$TextWithEntities_renderRange=function(q,r){
if(this.props.interpolator){
return this.props.interpolator(q,r);}else
if(r.entity){

return (c('React').createElement(c('Link.react'),{href:r.entity},
q));}else 




return q;}.

bind(this),m;}k.prototype.

render=function(){

return (c('React').createElement(c('BaseTextWithEntities.react'),babelHelpers['extends']({},
this.props,
{textRenderer:this.$TextWithEntities_renderText,
rangeRenderer:this.$TextWithEntities_renderRange,
ranges:this.props.ranges,
imageRanges:this.props.imageRanges,
aggregatedRanges:this.props.aggregatedRanges,
metaRanges:this.props.metaRanges,
text:this.props.text})));};





f.exports=k;}),null);

/** js/components/SeeMore/SeeMore.react.js */





__d('SeeMore.react',['cx','fbt','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits







(l,c('React').Component);k=j&&j.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.









state=
{isCollapsed:true},this.


handleClick=function(r){
if(this.props.clickCallback!==null)
this.props.clickCallback(r);

this.setState({isCollapsed:false});}.
bind(this),n;}l.prototype.

render=function(){'use strict';
var m=this.state.isCollapsed,
n=this.props.exposeTextInHtml,

o=null;
if(m){
var p=null;
if(this.props.allowSeeMoreLinebreak)


p=
c('React').createElement('span',
{className:"_1ipe",
role:'hidden'},
' ');



o=
c('React').createElement('span',{className:"_5uzb"},i._(["...","2b559e34e1810013c532afd11a7a43f9"]),

p);}



var q=this.props.children[0],

r=null;
if(m){
if(n)
r=
c('React').createElement('span',{className:"_1x3s"},this.props.children[1]);}else 


r=c('React').createElement('span',null,this.props.children[1]);


var s=!m?null:
c('React').createElement('a',
{className:"_5v47 fss",
onClick:this.handleClick,
href:'#',
role:'button'},i._(["See More","b8efa8e7befb23561cf3f04e6d09b734"]));




return (c('React').createElement('span',{className:c('joinClasses')
(this.props.className,
"_1n4g")},

q,
o,
s,
r));};


l.defaultProps={clickCallback:null,exposeTextInHtml:false,allowSeeMoreLinebreak:false};


f.exports=l;}),null);

/** shared/core/findSplitPointForText.js */





__d('findSplitPointForText',[],(function a(b,c,d,e,f,g){







function h(i,j,k){
var l=null,
m=i.split('\n');

if(j&&i.length>j)
l=j;


if(k&&m.length>k){
var n=m.slice(0,k).join('\n').length;

if(l!==null){
l=Math.min(n,l);}else 

l=n;}



return l;}


f.exports=h;}),null);

/** shared/core/partitionTextAndRanges.js */






__d('partitionTextAndRanges',['UnicodeUtils'],(function a(b,c,d,e,f,g){





























function h(k,l){
var m=k.offset+k.length;
return l>k.offset&&l<m;}









function i
(k,
l){

for(var m=0;m<k.length;m++){
var n=k[m];
if(h(n,l))

return n.offset;}


return l;}




















var j=function k
(l,
m,
n){

var o=[],
p=[],
q=i(m,n);
for(var r=0;r<m.length;r++){
var s=m[r];
if(s.offset<q){
o.push(s);}else 

p.push(babelHelpers['extends']({},
s,
{offset:s.offset-q}));}





return {before:
{ranges:o,
text:c('UnicodeUtils').substr(l,0,q)},

after:
{ranges:p,
text:c('UnicodeUtils').substr(l,q)}};};




f.exports=j;}),null);

/** js/components/TruncatedTextWithEntities/TruncatedTextWithEntities.react.js */





__d('TruncatedTextWithEntities.react',['React','SeeMore.react','TextWithEntities.react','findSplitPointForText','partitionTextAndRanges'],(function a(b,c,d,e,f,g){var h,i,










j=30;h=babelHelpers.inherits




















(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.


$TruncatedTextWithEntities_getAllowSeeMoreLinebreak=function(q){
if(!this.props.allowSeeMoreLinebreakOnLongWords||!q)
return false;

if(q.length<=j)
return false;





var r=/(^|\s)(\S+)$/,
s=r.exec(q),
t=s?s[2]:null;

return !!(t&&t.length>j);}.
bind(this),m;}k.prototype.

render=function(){'use strict';
var l=this.props.text||'',
m=this.props.ranges||[];

l=l.replace(/\s*$/,'');

var n=this.props.maxLines,
o=this.props.maxLength;

if(o&&l.length>o){
var p=this.props.truncationPercent||.6;
o=Math.floor(p*o);}


var q=null;
if(!this.props.shouldExpand)
q=c('findSplitPointForText')(l,o,n);


if(q!==null){

while(l[q-1]==='\n')
q--;

var r=c('partitionTextAndRanges')(l,m,q),

s=
this.$TruncatedTextWithEntities_getAllowSeeMoreLinebreak(r.before.text);

return (c('React').createElement('span',
{'data-ft':this.props['data-ft'],
dir:this.props.dir,
lang:this.props.lang},
c('React').createElement(c('SeeMore.react'),
{className:this.props.className,
clickCallback:this.props.markViewerHasInteracted,
allowSeeMoreLinebreak:s},
c('React').createElement(c('TextWithEntities.react'),
{interpolator:this.props.interpolator,
ranges:r.before.ranges,
aggregatedRanges:this.props.aggregatedRanges,
text:r.before.text,
renderEmoticons:this.props.renderEmoticons,
renderEmoji:this.props.renderEmoji}),

c('React').createElement(c('TextWithEntities.react'),
{interpolator:this.props.interpolator,
ranges:r.after.ranges,
aggregatedRanges:this.props.aggregatedRanges,
text:r.after.text,
renderEmoticons:this.props.renderEmoticons,
renderEmoji:this.props.renderEmoji}))));}else 






return (c('React').createElement('span',
{'data-ft':this.props['data-ft'],
dir:this.props.dir,
lang:this.props.lang},
c('React').createElement(c('TextWithEntities.react'),
{className:this.props.className,
interpolator:this.props.interpolator,
ranges:m,
imageRanges:this.props.imageRanges,
aggregatedRanges:this.props.aggregatedRanges,
text:l,
renderEmoticons:this.props.renderEmoticons,
renderEmoji:this.props.renderEmoji})));};







f.exports=k;}),null);

/** js/components/UFI/UFIActor.react.js */





__d('UFIActor.react',['ix','cx','fbt','Badge.react','Focus','HovercardLink','Image.react','Link.react','Locale','React','ReactDOM','UFICommentUtils','UserHovercardLocation','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,
















m=c('React').PropTypes;k=babelHelpers.inherits

(n,c('React').Component);l=k&&k.prototype;n.prototype.























componentDidMount=function(){
if(this.props.focusOnMount)
c('Focus').setWithoutOutline(c('ReactDOM').findDOMNode(this.refs.authorName));};

n.prototype.

render=function(){
var o=this.props.author,
p=c('Locale').isRTL()?'rtl':'ltr',

q=
(this.props.isAuthorWeakReference?"weakReference":'')+(' '+"UFICommentActorName"),



r=[];
if(this.props.isAuthorWeakReference)
r.push(c('React').createElement('i',{className:'UFIWeakReferenceIcon',key:'icon'}));

if(this.props.useFirstName){
r.push(o.firstName);}else

if(this.props.author.isBusinessPersona&&
this.props.author.assetRole){

r.push(o.name+' '+j._(["(","5b38a91fc8f435525d8b33c478dfda22"])+

this.props.author.assetRole+j._([")","dff5b57696cae0aeb3d78ff0b0c1c3c1"]));}else 


r.push(o.name);


if(this.props.isAuthorNonCoworker)
r.push(c('React').createElement(c('Badge.react'),{key:'noncoworker',type:'work_non_coworker'}));

if(this.props.memberBioBadgeURI!=null)
r.push
(c('React').createElement(c('Link.react'),{href:this.props.memberBioBadgeURI},
c('React').createElement(c('Image.react'),
{className:"_5lek",
key:'memberbio',
src:h("116571")})));







if(this.props.groupMemberTag!=null)
r.push
(c('React').createElement('span',
{className:"_4bo_",
key:'membertag'},

this.props.groupMemberTag));




var s=this.props.isAdminViewer?
c('UserHovercardLocation').UFI_ADMIN:
c('UserHovercardLocation').UFI,

t=Object.assign({},this.props);
delete t.author;
delete t.delimiter;
delete t.disableAuthorLink;
delete t.focusOnMount;
delete t.groupMemberTag;
delete t.groupOrEventID;
delete t.isAdminViewer;
delete t.isAuthorNonCoworker;
delete t.isAuthorWeakReference;
delete t.isPublic;
delete t.memberBioBadgeURI;
delete t.showHovercard;
delete t.useFirstName;

var u=o.uri&&!this.props.disableAuthorLink?
c('React').createElement('a',babelHelpers['extends']({},
t,
{className:q,
'data-hovercard':
this.props.showHovercard?
c('HovercardLink').constructEndpointWithGroupLocationAndExtraParams
(o,
this.props.groupOrEventID,
s,
this.props.isAuthorWeakReference,
{is_public:this.props.isPublic}).
toString():
null,

'data-ft':this.props['data-ft'],
dir:p,
href:
c('UFICommentUtils').annotateProfileURIIfPublic
(this.props.isPublic,
o.uri),


ref:'authorName'}),

r):

c('React').createElement('span',
{className:q,
dir:p,
ref:'authorName'},

r);



return (c('React').createElement('span',null,
u,
c('React').Children.map(this.props.children,function(v){
return (v?
[v.key==='badge'||v.key==='constituentTitle'?
'':
this.props.delimiter,
v]:
null);}.bind(this))));};



function n(){k.apply(this,arguments);}n.propTypes={author:m.object.isRequired,'data-ft':m.string,disableAuthorLink:m.bool,focusOnMount:m.bool,showHovercard:m.bool,isAdminViewer:m.bool,isAuthorWeakReference:m.bool,isAuthorNonCoworker:m.bool,memberBioBadgeURI:m.string,groupMemberTag:m.string,groupOrEventID:m.string,useFirstName:m.bool,delimiter:m.string,isPublic:m.bool};n.defaultProps={delimiter:' \u00b7 ',isAdminViewer:false,isPublic:false};


f.exports=n;}),null);

/** www/__virtual__/x/XActorSelectorNuxSeenWriteController.js */



__d("XActorSelectorNuxSeenWriteController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/actor_selector\/nux\/mark_seen\/",{nux_type:{type:"Enum",required:true,enumType:1}});}),

null);

/** js/components/UFI/UFIActorSelector.react.js */






__d('UFIActorSelector.react',['csx','fbt','ActorSelector.react','ActorSelectorNuxTypes','Arbiter','AsyncRequest','Parent','React','ReactDOM','SubscriptionsHandler','UFICentralUpdates','UFIFeedbackTargets','UFIUserActions','XActorSelectorNuxSeenWriteController'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,

















l=c('React').PropTypes,

m='ufi_actor_selector_nux_disabled_event';j=babelHelpers.inherits


















(n,c('React').Component);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.












state=
{loading:false,
nuxEnabled:!!this.props.nuxEnabled,
nuxHoverContext:null,
selectedActorID:null},this.
















































































$UFIActorSelector_onChange=function(t){
this.setState({loading:true});
c('UFIUserActions').changeActor
(this.props.ftEntIdentifier,
t.value);}.

bind(this),this.

$UFIActorSelector_onCompleteNux=function(){
var t=this.props.isTimeline?
c('ActorSelectorNuxTypes').UFI_TIMELINE:
c('ActorSelectorNuxTypes').UFI,

u=c('XActorSelectorNuxSeenWriteController').getURIBuilder().
setEnum('nux_type',t).
getURI();
new (c('AsyncRequest'))().
setURI(u).
send();}.
bind(this),p;}n.prototype.render=function(){return c('React').createElement(c('ActorSelector.react'),{actorIDs:this.props.actorIDs,loading:this.props.loading||this.state.loading,nuxBody:this.$UFIActorSelector_getNUXBody(),nuxEnabled:this.state.nuxEnabled,nuxHoverContext:this.state.nuxHoverContext,onChange:this.$UFIActorSelector_onChange,onShowNux:this.$UFIActorSelector_onShowNux,onCompleteNux:this.$UFIActorSelector_onCompleteNux,selectedActorID:this.state.selectedActorID,settingsURI:this.props.settingsURI,tooltipConstructor:this.$UFIActorSelector_getTooltipForActorName,syncEnabled:this.props.syncEnabled});};n.prototype.componentDidMount=function(){this.$UFIActorSelector_updateSelectedActorIDFromFeedbackTarget();this.$UFIActorSelector_subscriptions=new (c('SubscriptionsHandler'))();this.$UFIActorSelector_subscriptions.addSubscriptions(c('UFICentralUpdates').subscribe('feedback-updated',function(p,q){if(this.props.ftEntIdentifier in q.updates)this.$UFIActorSelector_updateSelectedActorIDFromFeedbackTarget();}.bind(this)),c('Arbiter').subscribe(m,function(){this.setState({nuxEnabled:false});}.bind(this)));var o=c('Parent').bySelector(c('ReactDOM').findDOMNode(this),"._5pcr");if(o)this.setState({nuxHoverContext:o});};n.prototype.componentWillUnmount=function(){this.$UFIActorSelector_subscriptions.release();};n.prototype.$UFIActorSelector_updateSelectedActorIDFromFeedbackTarget=function(){c('UFIFeedbackTargets').getFeedbackTarget(this.props.ftEntIdentifier,function(o){this.setState({loading:false,selectedActorID:o.actorforpost});}.bind(this));};n.prototype.$UFIActorSelector_getNUXBody=function(){return i._(["Like, comment or share as yourself or as one of the Pages you manage.","8d7e9d0fd92ad584f6795576cbe8388d"]);};n.prototype.$UFIActorSelector_getTooltipForActorName=function(o){return i._(["Liking and commenting as {actorName}","4a29fce7ad4707069f32dd0e488cf10f"],[i.param('actorName',o)]);};n.prototype.

$UFIActorSelector_onShowNux=function(){
c('Arbiter').inform(m);};
n.propTypes={actorIDs:l.array.isRequired,ftEntIdentifier:l.string.isRequired,isTimeline:l.bool,loading:l.bool,nuxEnabled:l.bool,settingsURI:l.string,syncEnabled:l.bool};


f.exports=n;}),null);

/** js/modules/XUIError.js */





__d('XUIError',['cx','invariant','Promise','ARIA','Bootloader','CSS','DataStore','DOM','Event','Parent','filterObject','getActiveElement','getElementText','isNode','memoize','nl2br'],(function a(b,c,d,e,f,g,h,i){

'use strict';


















var j='data-xui-error-alignh',
k='XUIError',
l='data-xui-error',
m="_1tp7",
n='data-xui-error-position';

c('Event').listen
(document.documentElement,
'mouseover',
function(event){

if(c('Parent').byClass
(c('getActiveElement')(),
m))

return;


var aa=c('Parent').byClass
(event.getTarget(),
m);


if(aa){
w(aa);}else 

x();});




c('Event').listen
(document.documentElement,
'focusin',
function(event){
var aa=c('Parent').byClass
(event.getTarget(),
m);


if(aa){
w(aa);}else 

x();});




c('Event').listen
(document.documentElement,
'focusout',
function(event){
x();});




var o=c('memoize')(function(){
return new (c('Promise'))(function(aa,ba){
c('Bootloader').loadModules(["React","ReactDOM","XUIErrorDialogImpl"],




function(ca,
da,
ea){

aa(babelHelpers['extends']
({React:ca,
ReactDOM:da},
ea.getNewDialog()));},

'XUIError');});}),



p=null;

function q(aa){
return babelHelpers['extends']
({message:aa.getAttribute(l),
position:aa.getAttribute(n),
alignh:aa.getAttribute(j)},
c('DataStore').get(aa,k));}



function r(aa,ba){
c('DataStore').set(aa,k,ba);}


function s(aa,ba){
c('DataStore').set(aa,k,babelHelpers['extends']({},
c('DataStore').get(aa,k),
ba));}



function t(aa){
c('DataStore').remove(aa,k);}


var u=false,
v=false;

function w(aa){
o().done(function(ba){




var ca=ba.React,da=ba.ReactDOM,ea=ba.dialog,fa=ba.dialogMessageNode,
ga=q(aa),
ha=ga.message;

if(ha==null)

return;


var ia=ca.isValidElement(ha);

if(u&&!ia)
da.unmountComponentAtNode(fa);


if(ia){
da.render
(ha,
fa);}else{



typeof ha==='string'||c('isNode')(ha)||i(0,
'Error message must be a string or DOM node');


if(typeof ha==='string')
ha=c('nl2br')(ha);


c('DOM').setContent
(fa,
ha);}



u=ia;

ea.
setContext(aa).
setPosition(ga.position||'right').
setAlignment(ga.alignh||
(ga.position==='above'||
ga.position==='below'?
'right':null)).

show();

c('ARIA').notify(c('getElementText')(fa));

p=aa;});


v=true;}


function x(){
if(!v)
return;


o().done(function(aa){




var ba=aa.React,ca=aa.ReactDOM,da=aa.dialog,ea=aa.dialogMessageNode;
if(!p)
return;


if(u){
ca.unmountComponentAtNode(ea);
u=false;}


da.hide();
p=null;});}



function y(aa){
if(c('DOM').contains(aa,c('getActiveElement')()))
w(aa);}



var z=

{set:function aa(ba){




var ca=ba.target,da=ba.message,ea=ba.position,fa=ba.alignh;

da!==null||i(0,
'`message` must not be null');


c('CSS').addClass(ca,m);

s(ca,c('filterObject')
({message:da,
position:ea,
alignh:fa},
function(ga){return ga!==undefined;}));

y(ca);},


clear:function aa
(ba){

c('CSS').removeClass(ba,m);
ba.removeAttribute(l);

t(ba);

if(ba===p)
x();},



updatePosition:function aa(){
if(!v)
return;


o().done(function(ba){var ca=ba.dialog;
if(p)
ca.updatePosition();});},




__setReactError:function aa
(ba,ca){





var da=ca.message,ea=ca.position,fa=ca.alignh;

da!==null||i(0,
'`message` must not be null');


r(ba,
{message:da,
position:ea,
alignh:fa});


y(ba);},


__clearReactError:function aa
(ba){

t(ba);

if(ba===p)
x();}};




f.exports=z;}),null);

/** js/modules/XUIError.react.js */




__d('XUIError.react',['cx','React','ReactDOM','XUIError','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=c('React').PropTypes,

l="_1tp7";i=babelHelpers.inherits

(m,c('React').Component);j=i&&i.prototype;m.prototype.





























componentDidMount=function(){
if(this.props.xuiError!=null)
c('XUIError').__setReactError(c('ReactDOM').findDOMNode(this),
{message:this.props.xuiError,
position:this.props.xuiErrorPosition,
alignh:this.props.xuiErrorAlignh});};


m.prototype.

componentDidUpdate=function(){
if(this.props.xuiError==null){
c('XUIError').__clearReactError(c('ReactDOM').findDOMNode(this));}else 

c('XUIError').__setReactError(c('ReactDOM').findDOMNode(this),
{message:this.props.xuiError,
position:this.props.xuiErrorPosition,
alignh:this.props.xuiErrorAlignh});};


m.prototype.

componentWillUnmount=function(){
c('XUIError').__clearReactError(c('ReactDOM').findDOMNode(this));};
m.prototype.

render=function(){
var n=c('React').Children.only(this.props.children);

if(this.props.xuiError!=null)
n=c('React').cloneElement
(n,

{className:c('joinClasses')
(n.props.className,
l)});





return n;};
function m(){i.apply(this,arguments);}m.propTypes={xuiError:k.any,xuiErrorPosition:k.oneOf(['above','below','left','right']),xuiErrorAlignh:k.oneOf(['left','center','right'])};


f.exports=m;}),null);

/** js/components/UFI/UFIAttachMediaSection.react.js */







__d('UFIAttachMediaSection.react',['cx','fbt','Bootloader','Focus','React','UFICommentFileInputAcceptValues','XUIError.react'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,












l=c('React').PropTypes;j=babelHelpers.inherits






(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.
































state=
{bootloaded:false,
hasUploadFailure:false},this.

$UFIAttachMediaSection_uploader=null,this.















$UFIAttachMediaSection_onUploadAttempted=function(){
this.setState({hasUploadFailure:false});}.
bind(this),this.

$UFIAttachMediaSection_onUploadSuccess=function(){
this.setState({hasUploadFailure:false});}.
bind(this),this.

$UFIAttachMediaSection_onUploadFailure=function(){
this.setState({hasUploadFailure:true});}.
bind(this),this.

$UFIAttachMediaSection_handleClick=function(event){
this.props.onClick&&this.props.onClick();

if(this.state.bootloaded)
return;


c('Bootloader').loadModules(["UFIUploader"],function(s){
this.$UFIAttachMediaSection_uploader=new s
(this.refs.inputContainer,
this.refs.inputControl,
this.refs.input,
this.props.getPhotoUploadData,
this.props.prepareForAttachedPhotoPreview,
this.props.prepareForAttachedVideoPreview,
this.props.onPhotoUploadComplete,
this.props.onVideoEncodeUpdate,
this.props.onVideoUploadUpdate,
this.props.onVideoUploadComplete,
this.props.setFileInput,
this.props.viewerActorID,
this.$UFIAttachMediaSection_onUploadAttempted,
this.$UFIAttachMediaSection_onUploadSuccess,
this.$UFIAttachMediaSection_onUploadFailure);}.

bind(this),'UFIAttachMediaSection.react');

this.setState({bootloaded:true});}.
bind(this),o;}m.prototype.componentDidMount=function(){var n=this.refs,o=n.input,p=n.inputControl;if(o&&p)c('Focus').relocate(o,p);};m.prototype.componentWillUnmount=function(){this.$UFIAttachMediaSection_uploader&&this.$UFIAttachMediaSection_uploader.destroy();};m.prototype.

render=function(){



var n=
this.props.allowVideoAttachments?i._(["Attach a Photo or Video","6b5fe6bf023bdafc8eed7a335c65896b"]):i._(["Attach a Photo","cf4bdfad23deb56acce52d3187acb92d"]),









o=i._(["There was a problem attaching the file, please try again","6ead82f7e50c90e332f890aace1e52f6"]),




p=this.state.hasUploadFailure,

q=
c('React').createElement('div',
{className:"_r1a"+(' '+"UFIPhotoAttachLinkWrapper")+(' '+"_m")+



(!!this.props.attachment?' '+"_5t1p":''),

'data-hover':p?null:'tooltip',
'data-interaction-root-id':"_4i89",
'data-tooltip-alignh':p?null:'center',
'data-tooltip-content':p?null:n,
onClick:this.$UFIAttachMediaSection_handleClick,
ref:'inputContainer',
role:'presentation'},
c('React').createElement('span',
{className:"UFICommentPhotoIcon",
ref:'inputControl'},
c('React').createElement('input',
{accept:
this.props.allowVideoAttachments?
c('UFICommentFileInputAcceptValues').both:
c('UFICommentFileInputAcceptValues').photos,

'aria-label':n,
className:"_n",
name:'file',
ref:'input',
title:n,
type:'file',
key:'0'})));











return (c('React').createElement(c('XUIError.react'),
{xuiError:p?o:null,
xuiErrorPosition:'above',
xuiErrorAlignh:'center'},
q));};


m.propTypes={getPhotoUploadData:l.func.isRequired,prepareForAttachedPhotoPreview:l.func.isRequired,prepareForAttachedVideoPreview:l.func,onPhotoUploadComplete:l.func.isRequired,onVideoUploadComplete:l.func,onVideoUploadUpdate:l.func,onVideoEncodeUpdate:l.func,onClick:l.func,setFileInput:l.func.isRequired,targetId:l.string,allowVideoAttachments:l.bool,attachment:l.object,viewerActorID:l.string.isRequired};


f.exports=m;}),null);

/** js/litestand/LitestandEllipsis.js */






__d('LitestandEllipsis',['BinarySearch','DOMQuery','LitestandEllipsisConfig','concatMap','getElementText','isTextNode'],(function a(b,c,d,e,f,g){



var h=c('LitestandEllipsisConfig').useBinarySearchAlgorithm,





i,

j=











{add:function m(n,o,p){var q;
p=p||n;


c('DOMQuery').scry(n,'br').forEach(function(x){
x.parentNode&&x.parentNode.removeChild(x);});


var r=p.offsetHeight||0;

if(r<=o)
return;


var s,
t='\u2026',
u=l(n);

if(h){(function(){var x,
y=u.length-1,
z=o+1;
function aa
(da,
ea,
fa){

var ga=da.slice(0,ea).join(' ')+t;
if(fa===0)
ga=ga.trimLeft();

return ga;}

function ba
(da,
ea,
fa){

var ga=da.substr(0,ea).trimRight()+t;
if(fa===0)
ga=ga.trimLeft();

return ga;}
var ca=function da(){

var ea=c('getElementText')(u[y]).split(/[\n\s]/g),

fa=c('BinarySearch').greatestLowerBound
(function(ha){
k
(u[y],
aa(ea,ha,y));

return p.offsetHeight||0;},

z,
0,
ea.length,
function(ha,ia){return ha-ia;});

if(fa>-1){

k
(u[y],
aa(ea,fa,y));

return 'break';}


var ga=c('BinarySearch').greatestLowerBound
(function(ha){
k
(u[y],
ba
(ea[0],
ha,
y));


return p.offsetHeight||0;},

z,
0,
ea[0].length-t.length-2,
function(ha,ia){return ha-ia;});

if(ga>-1){

k
(u[y],
ba
(ea[0],
ga,
y));


return 'break';}


k(u[y],'');
y--;};while(y>=0){var x=ca();if(x==='break')break;}})
();}else{

var v=u.length-1,
w=c('getElementText')(u[v]);
if(v===0)

w=w.trimLeft();

while(v>=0&&r>o){

s=Math.max(w.lastIndexOf(' '),w.lastIndexOf('\n'));



if(s===-1)
s=w.length-t.length-1;

if(s<=0){
k(u[v],'');
v--;
w=c('getElementText')(u[v]);}else{

w=w.substr(0,s).trimRight()+t;
k(u[v],w);}

r=(p.offsetHeight||0)-1;}}}};









function k(m,n){
i=i||
(m.textContent!=null?'textContent':'innerText');
m[i]=n;}






function l(m){
if(c('isTextNode')(m))
return [m];

return c('concatMap')
(l,
Array.from(m.childNodes));}



f.exports=j;}),null);

/** js/litestand/LitestandShareAttachment.js */







__d('LitestandShareAttachment',['csx','cx','CSS','DOMQuery','LitestandEllipsis','queryThenMutateDOM'],(function a(b,c,d,e,f,g,h,i){









var j=16,
k=22,
l=20,
m=5,
n=3,
o=2,
p=2,
q=5,
r=5,
s="_5qqr",
t="_6m2",

u=
{getSimpleCropClass:function y(){
return s;},







_truncateText:function y
(z,
aa){

var ba=void 0,
ca=void 0,
da=void 0,

ea=v(z);

c('queryThenMutateDOM')
(function(){
ba=c('DOMQuery').scry
(z,
"._6m6")[
0];
ca=c('DOMQuery').scry
(z,
"._6m7")[
0];
da=w(z,ba,ea);},

function(){


if(!z.offsetHeight){
if(aa)
c('CSS').addClass(z,s);

return;}


if(!da){
if(ca)
c('CSS').hide(ca);

ba&&c('LitestandEllipsis').add
(ba,
ea*x(z));}else

if(ca&&da){
c('CSS').show(ca);
c('LitestandEllipsis').add
(ca,
da*j);}});},













init:function y(z){
if(c('CSS').hasClass(z,s)){
var aa=false;
c('queryThenMutateDOM')
(function(){
if(z.offsetHeight)
aa=true;},


function(){
if(aa){

c('CSS').removeClass(z,s);



this._truncateText(z,true);}}.

bind(this));

return;}else{




var ba=c('CSS').hasClass
(z,
t);

this._truncateText(z,ba);}},






getNumDescriptionLines:function y(z){
return w
(z,
c('DOMQuery').scry(z,"._6m6")[0],
v(z));},



getDescriptionLineHeight:function y(){
return j;}};



function v(y){
var z=
c('CSS').matchesSelector(y,"._59ap"),
aa=
c('CSS').matchesSelector(y,"._pb2"),
ba=c('DOMQuery').scry
(y,
"^div._4rtc").
length>0,

ca=void 0;
if(aa){
ca=p;}else
if(ba){
ca=o;}else
if(z){
ca=n;}else 

ca=m;


return ca;}


function w
(y,
z,
aa){

var ba=c('DOMQuery').scry
(y,
"._6m3")[
0];
if(!z||!ba)
return 0;

var ca=
c('DOMQuery').scry(y,"._59tj")[0],
da=
c('CSS').matchesSelector(y,"._59ap"),
ea=
c('CSS').matchesSelector(y,"._pb2"),


fa=Math.round
(z.scrollHeight/x(y));

if(fa>aa&&!ea)
return 0;


var ga=
ba.offsetHeight-
q-
z.offsetHeight-
(ca?ca.offsetHeight:0)-
(da?0:r)+
1;
return Math.floor(Math.max(ga,0)/j);}


function x(y){
var z=c('CSS').matchesSelector
(y,
"._pb2");

return z?
l:
k;}


f.exports=u;}),null);

/** www/__virtual__/x/XAnimatedImageInLiveCommentPreviewController.js */



__d("XAnimatedImageInLiveCommentPreviewController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/gifs\/in_live_comment\/",{});}),

null);

/** www/__virtual__/x/XVideoInLiveCommentPreviewController.js */



__d("XVideoInLiveCommentPreviewController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/video\/in_live_comment\/",{});}),

null);

/** js/components/UFI/UFICommentAttachment.react.js */











__d('UFICommentAttachment.react',['cx','AsyncRequest','BootloadedComponent.react','CSS','DOM','DOMQuery','HTML','Image.react','JSResource','Link.react','LitestandShareAttachment','React','ReactDOM','SubscriptionsHandler','UFILocallyComposedCommentStore','XAnimatedImageInLiveCommentPreviewController','XUISpinner.react','XVideoInLiveCommentPreviewController'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,





















k=c('React').PropTypes,

l='ufi_comment_photo',
m=80,
n='ufi_comment_sticker';i=babelHelpers.inherits

(o,c('React').Component);j=i&&i.prototype;












function o(p){
j.constructor.call(this,p);this.














$UFICommentAttachment_attachmentFromCommentData=function(q){



return (q.photo_comment||
q.video_comment||
q.gif_comment||
q.attachment);};

this.





















































































































































































renderPhoto=function(q){
var r="_2rn3 _4-eo";


return (c('React').createElement('div',{className:"_4iv9"},
c('React').createElement(c('Link.react'),
{className:r,
'data-testid':l,
href:q.metadata.url},
c('React').createElement('div',{style:{height:q.metadata.height}},
c('React').createElement(c('Image.react'),{src:q.metadata.preview_uri})))));};




this.




renderShare=function(q){

return (c('React').createElement(c('BootloadedComponent.react'),
{bootloadPlaceholder:c('React').createElement('span',null),
bootloadLoader:c('JSResource')('UFILiveCommentLinkPreview.react').__setRef('UFICommentAttachment.react'),
attachment:q}));};


this.

renderLivePlaceInfo=function(q){

return (c('React').createElement(c('BootloadedComponent.react'),
{bootloadPlaceholder:c('React').createElement('span',null),
bootloadLoader:c('JSResource')('PlaceListLiveCommentAttachment.react').__setRef('UFICommentAttachment.react'),
commentID:this.props.comment.fbid,
data:q,
postID:this.props.comment.ftentidentifier}));}.


bind(this);this.state={localCommentIDs:c('UFILocallyComposedCommentStore').getStateForInstance(this.props.comment.ufiinstanceid),randomInstanceID:Math.floor(Math.random()*10000)};}o.prototype.$UFICommentAttachment_getScaledDimensions=function(p,q){var r,s,t;if(q>p){t=m/q;r=p*t;s=q*t;}else{t=m/p;r=p*t;s=q*t;}return {height:Math.round(r),width:Math.round(s)};};o.prototype.componentDidMount=function(){var p=this.$UFICommentAttachment_attachmentFromCommentData(this.props.comment);if(p)this.renderAttachment(p);this.$UFICommentAttachment_subscriptions=new (c('SubscriptionsHandler'))();this.$UFICommentAttachment_subscriptions.addSubscriptions(c('UFILocallyComposedCommentStore').addListener(function(){this.setState({localCommentIDs:c('UFILocallyComposedCommentStore').getStateForInstance(this.props.comment.ufiinstanceid)});}.bind(this)));};o.prototype.shouldComponentUpdate=function(p,q){var r=this.$UFICommentAttachment_attachmentFromCommentData(this.props.comment),s=this.$UFICommentAttachment_attachmentFromCommentData(p.comment);if(!r&&!s)return false;if(!r||!s||r.markup!=s.markup){return true;}else return false;};o.prototype.componentDidUpdate=function(p){var q=this.$UFICommentAttachment_attachmentFromCommentData(this.props.comment);if(!q)return;if(q.type!=='sticker'&&q.type!=='photo')this.renderAttachment(q);};o.prototype.componentWillUnmount=function(){this.$UFICommentAttachment_subscriptions&&this.$UFICommentAttachment_subscriptions.release();};o.prototype.renderAttachment=function(p){if(p&&this.refs&&this.refs.contents&&p.markup){var q=p.markup;if(c('HTML').isHTML(q.markup))q=c('HTML').replaceJSONWrapper(q.markup).getRootNode();var r=q.parentNode,s=c('ReactDOM').findDOMNode(this.refs.contents);if(r&&r!==s)q=q.cloneNode(true);if(this.props.disableTheater){var t=q.querySelector('a[rel="theater"]');if(t)c('DOM').setAttributes(t,{target:'_blank',rel:''});}c('DOM').setContent(s,q);if(p.type=='share'){var u="_6m2",v=c('CSS').hasClass(s,u)?s:c('DOMQuery').scry(s,'.'+u)[0];c('LitestandShareAttachment').init(v?v:s);}}else if(p&&p.type=='video'&&!p.markup){var w=c('XVideoInLiveCommentPreviewController').getURIBuilder();new (c('AsyncRequest'))(w.getURI()).setMethod('POST').setData({video_id:p.target.id}).setHandler(function(x){this.renderAttachment(x.payload.video_preview.video_comment);}.bind(this)).send();}else if(p&&p.type=='gif'&&!p.markup)new (c('AsyncRequest'))(c('XAnimatedImageInLiveCommentPreviewController').getURIBuilder().getURI()).setMethod('POST').setData({comment_id:this.props.comment.id,dom_selector:'div#'+this.$UFICommentAttachment_gifAttachmentPlaceholderDivID()}).send();};o.prototype.renderSticker=function(p){var q=this.$UFICommentAttachment_getScaledDimensions(p.metadata.height,p.metadata.width),r=null,s=null;if(window.devicePixelRatio&&window.devicePixelRatio>1){r=p.metadata.sprite_uri_2x;s=p.metadata.source_uri_2x;}else{r=p.metadata.sprite_uri;s=p.metadata.source_uri;}return c('React').createElement(c('BootloadedComponent.react'),{bootloadPlaceholder:c('React').createElement(c('XUISpinner.react'),null),bootloadLoader:c('JSResource')('Sticker.react').__setRef('UFICommentAttachment.react'),animationTrigger:'load_and_hover',frameCount:p.metadata.frameCount,frameRate:p.metadata.frameRate,framesPerCol:p.metadata.framesPerCol,framesPerRow:p.metadata.framesPerRow,spriteURI:r,sourceHeight:q.height,sourceURI:s,sourceWidth:q.width,testID:n});};o.prototype.

renderPlaceInfo=function(p){
var q=this.props.comment.islocal||
this.state.localCommentIDs[this.props.comment.id];

return (c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']
({bootloadPlaceholder:c('React').createElement(c('XUISpinner.react'),null),
bootloadLoader:c('JSResource')('MultiPlacePageInfoCard.react').__setRef('UFICommentAttachment.react'),
isLocallyComposed:q},
p.props)));};


o.prototype.

$UFICommentAttachment_gifAttachmentPlaceholderDivID=function(){
return 'gif_comment_attachment_'+
this.props.comment.id+
this.state.randomInstanceID;};
o.prototype.




render=function(){
var p=this.$UFICommentAttachment_attachmentFromCommentData(this.props.comment);
if(p)
if(p&&p.type==='sticker'){
return this.renderSticker(p);}else
if(p&&p.type==='gif'){



return (c('React').createElement('div',
{ref:'contents',
id:this.$UFICommentAttachment_gifAttachmentPlaceholderDivID()},

c('React').createElement(c('XUISpinner.react'),null)));}else


if(p&&p.type==='photo'){





return this.renderPhoto(p);}else
if(p&&p.type==='live_share'){


return this.renderShare(p);}else
if(p&&p.type=='comment_place_info'){
return this.renderPlaceInfo(p);}else
if(p&&p.type=='live_comment_place_info'){
return this.renderLivePlaceInfo(p);}else 

return c('React').createElement('div',{ref:'contents'});



return c('React').createElement('span',null);};
o.propTypes={comment:k.object.isRequired,disableTheater:k.bool};


f.exports=o;}),null);

/** js/components/contrib/FBCollapsibleList.react.js */







__d('FBCollapsibleList.react',['Link.react','React','getObjectValues'],(function a(b,c,d,e,f,g){var h,i,






j=c('React').PropTypes,

k=
{COMMA:'comma',
NEWLINE:'newline'};h=babelHelpers.inherits


(l,c('React').Component);i=h&&h.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=i.constructor).call.apply(m,[this].concat(p)),this.











































state=
{numShown:this.props.numVisible},this.


























$FBCollapsibleList_shouldShowSeeMore=function(){
return this.state.numShown<this.$FBCollapsibleList_numShowMore();}.
bind(this),this.

$FBCollapsibleList_shouldShowSeeLess=function(){
var r=this.$FBCollapsibleList_numShowMore();
return this.props.showLessLink&&
this.props.numVisible<r&&
this.state.numShown>=r;}.
bind(this),this.

$FBCollapsibleList_renderShowMoreLink=function(){
var r=this.$FBCollapsibleList_numShowMore()-this.props.numVisible;

return (c('React').createElement(c('Link.react'),{onClick:this.$FBCollapsibleList_showMore,key:'seeMore'},
c('React').createElement('b',null,'Show more ','(',r,')')));}.


bind(this),this.

$FBCollapsibleList_renderShowLessLink=function(){

return (c('React').createElement(c('Link.react'),{onClick:this.$FBCollapsibleList_showLess,key:'seeLess'},
c('React').createElement('b',null,'Show less')));}.


bind(this),this.

$FBCollapsibleList_renderItem=function(r,s){


switch(this.props.delimiter){
case k.NEWLINE:
return [c('React').createElement('div',null,r)];
case k.COMMA:
return s?[r]:[r,', '];

default:throw new Error('Invalid delimiter: '+this.props.delimiter);}}.

bind(this),this.

$FBCollapsibleList_showLess=function(){
this.setState({numShown:this.props.numVisible});}.
bind(this),this.


$FBCollapsibleList_numShowMore=function(){
if(!!this.props.maxShowMore&&
this.props.maxShowMore<this.props.children.length)
return this.props.maxShowMore;


return this.props.children.length;}.
bind(this),this.

$FBCollapsibleList_showMore=function(){
this.setState({numShown:this.$FBCollapsibleList_numShowMore()});}.
bind(this),n;}l.prototype.render=function(){'use strict';var m=this.$FBCollapsibleList_shouldShowSeeMore(),n=this.$FBCollapsibleList_shouldShowSeeLess(),o=Math.min(this.state.numShown,this.props.children.length),p=m||n,q=[];for(var r=0;r<o;r++){var s=!p&&r===o-1;q.push(this.$FBCollapsibleList_renderItem(this.props.children[r],s));}if(m){q.push(this.$FBCollapsibleList_renderShowMoreLink());}else if(n)q.push(this.$FBCollapsibleList_renderShowLessLink());return this.props.display=='block'?c('React').createElement('div',this.props,q):c('React').createElement('span',this.props,q);};l.propTypes={delimiter:j.oneOf(c('getObjectValues')(k)),display:j.oneOf(['inline','block']),numVisible:j.number.isRequired,maxShowMore:j.number,showLessLink:j.bool};l.Delimiters=k;l.defaultProps={children:[],delimiter:k.NEWLINE,display:'block',showLessLink:false};


f.exports=l;}),null);

/** shared/core_components/Middot/Middot.react.js */




__d('Middot.react',['React'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits



(j,c('React').Component);i=h&&h.prototype;j.prototype.
render=function(){

return (c('React').createElement('span',babelHelpers['extends']({},
this.props,
{role:'presentation',
'aria-hidden':true}),' \u00B7 '));};

function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/components/UFI/UFICommentMetadata.react.js */







__d('UFICommentMetadata.react',['cx','fbt','Bootloader','BootloadedComponent.react','FBCollapsibleList.react','JSResource','React','ReactDOM','Timestamp.react','TrackingNodes','UFIConstants','Middot.react','URI','XUISpinner.react'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,

















l=c('React').PropTypes,

m=c('UFIConstants').UFIStatus,

n='ufi_comment_timestamp',

o="UFIFailureMessageIcon",
p="UFIFailureMessage",
q="uiLinkSubtle",

r=function t(u){
var v=u.status;
return v===m.FAILED_ADD||v===m.FAILED_EDIT;};
j=babelHelpers.inherits

(s,c('React').Component);k=j&&j.prototype;s.prototype.










render=function(){var t=
this.props,u=t.comment,v=t.onRetrySubmit,

w=void 0,
x=void 0;

if(r(u)){
w=
[c('React').createElement('span',{key:'failure',className:p},
c('React').createElement('i',{className:o}),i._(["Unable to post comment.","51234ac984f03fca73aa561e81c6b8b9"])),


u.allowRetry&&v?
[' ',
c('React').createElement('a',{key:'rety-submit',onClick:v,href:'#',role:'button'},i._(["Try Again","d379bc1632452567d0be52ab7a4fa3c6"]))]:


null];}else{


var y=
c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.SOURCE);

x=
c('React').createElement(c('Timestamp.react'),
{shorten:this.props.shortenTimestamp,
time:u.timestamp.time,
text:u.timestamp.text,
verbose:u.timestamp.verbose});


if(this.props.showPermalink)

x=
c('React').createElement('a',
{key:'timestamp-message',
className:q,
href:this.props.permalink,
'data-ft':y,
'data-testid':n,
target:this.props.permalinkTarget},
x);}




var z=null;
if(u.originalTimestamp){
var aa=new (c('URI'))('/ajax/edits/browser/comment').
addQueryData({comment_token:u.id}).
toString();

z=
[c('React').createElement(c('Middot.react'),
{key:'middot-editNote'}),
c('React').createElement('a',
{ajaxify:aa,
className:'uiLinkSubtle',
'data-hover':'tooltip',
'data-tooltip-content':i._(["Show edit history","5872db5409734183b1db2c2873f80d38"]),





href:'#',
key:'edit-link',
ref:'EditLink',
rel:'dialog',
role:'button',
title:i._(["Show edit history","5872db5409734183b1db2c2873f80d38"])},i._(["Edited","588f2514e70bc9f6ac9614e0821e0d78"]))];}





var ba=null;
if(u.creator_data)
ba=
[c('React').createElement(c('BootloadedComponent.react'),
{key:'creator',
bootloadPlaceholder:c('React').createElement(c('XUISpinner.react'),{size:'small'}),
bootloadLoader:c('JSResource')('UFICreatorInfo.react').__setRef('UFICommentMetadata.react'),
creatorID:u.creator_data.creatorID,
creatorType:u.creator_data.creatorType,
creatorName:u.creator_data.creatorName,
labelType:u.creator_data.labelType,
pageID:u.creator_data.pageID,
profileURI:u.creator_data.profileURI}),

c('React').createElement(c('Middot.react'),
{key:'middot-creator'})];



var ca=null;
if(u.body&&u.body.markdown_enabled&&u.body.markup)
ca=
[c('React').createElement(c('Middot.react'),{key:'middot-markdownNote'}),
c('React').createElement(c('BootloadedComponent.react'),
{bootloadPlaceholder:
c('React').createElement('a',{className:'uiLinkSubtle'},i._(["Formatted","11670e7f551a9af5ab7e5ce69bbb44a3"])),





bootloadLoader:c('JSResource')('UFICommentMarkdownFormattedLink.react').__setRef('UFICommentMetadata.react'),
comment:u,
key:'markdown-link'})];




var da=u.reportedBy,
ea=null;
if(da&&da.length>0)
ea=
[c('React').createElement(c('Middot.react'),{key:'middot-reportedByMessage'}),
c('React').createElement('span',{key:'reportedByMessage'},i._(["Reported by {Comma-separated list of names}","61a2d1b3c7a3eb09b5224868ce2156e4"],[i.param



('Comma-separated list of names',
c('React').createElement(c('FBCollapsibleList.react'),
{numVisible:2,
showLessLink:true,
display:'inline',
delimiter:'comma'},
da))]))];









return (c('React').createElement('span',null,
ba,
x,
w,
z,
ca,
ea));};


s.prototype.

componentWillUpdate=function(t){
var u=this.props.comment,
v=t.comment;

if(!u.editnux&&!!v.editnux)
c('Bootloader').loadModules(["LegacyContextualDialog"],
function(w){
var x=new w();
x.init(v.editnux).
setContext(c('ReactDOM').findDOMNode(this.refs.EditLink)).
setWidth(300).
setPosition('below').
show();}.
bind(this),'UFICommentMetadata.react');};


function s(){j.apply(this,arguments);}s.propTypes={comment:l.object.isRequired,contextArgs:l.object,onRetrySubmit:l.func,permalink:l.string,shortenTimestamp:l.bool,showPermalink:l.bool,permalinkTarget:l.string};


f.exports=s;}),null);

/** shared/core_components/ImageBlock/ImageBlock.react.js */





__d('ImageBlock.react',['cx','invariant','LeftRight.react','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;


















function l(o){
var p=o.children;


p&&
(p.length===2||
p.length===3)||i(0,

'ImageBlock requires two or three children.');



p[0]!==null||i(0,
'ImageBlock requires a non-null first child');

return p;}


function m(o){
return "img"+(' '+"_8o")+


(o==='small'?' '+"_8r":'')+
(o==='medium'?' '+"_8s":'')+
(o==='large'?' '+"_8t":'');}

j=babelHelpers.inherits





(n,c('React').Component);k=j&&j.prototype;n.prototype.







render=function(){'use strict';
var o=l(this.props),

p=o[0],
q=o[1],
r=o[2],s=





this.props,t=s.imageClassName,u=s.contentClassName,v=s.spacing,w=babelHelpers.objectWithoutProperties(s,['imageClassName','contentClassName','spacing']),x=






p.props,y=x.className,z=x.alt,aa=x.tabIndex,ba=x.title,

ca=
{className:c('joinClasses')
(y,
m(v),
t)};



if(p.type==='img'){
if(z===undefined)
ca.alt='';}else


if((p.type==='a'||p.type==='link')&&
aa===undefined&&
ba===undefined&&
p.props['aria-label']===undefined){

ca.tabIndex='-1';
ca['aria-hidden']='true';}


p=c('React').cloneElement(p,ca);

var da=c('joinClasses')
(u,"_42ef"+


(v==='small'?' '+"_8u":'')),



ea=void 0;
if(!r){
ea=
c('React').createElement('div',{className:da},
q);}else 


ea=
c('React').createElement(c('LeftRight.react'),
{className:da,
direction:c('LeftRight.react').DIRECTION.right},
q,
r);







return (c('React').createElement(c('LeftRight.react'),babelHelpers['extends']({},w,{direction:c('LeftRight.react').DIRECTION.left}),
p,
ea));};


function n(){'use strict';j.apply(this,arguments);}n.defaultProps={spacing:'small'};


f.exports=n;}),null);

/** js/components/UFI/UFIImageBlock.react.js */





__d('UFIImageBlock.react',['cx','ImageBlock.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits






(k,c('React').Component);j=i&&i.prototype;k.prototype.
render=function(){

return (c('React').createElement(c('ImageBlock.react'),babelHelpers['extends']({},
this.props,
{imageClassName:"UFIImageBlockImage",
contentClassName:"UFIImageBlockContent"}),
this.props.children));};


function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/components/UFI/UFIStickerButton.react.js */





__d('UFIStickerButton.react',['cx','fbt','Arbiter','Bootloader','FocusRelocator.react','Link.react','React','StickerInterfaces','getObjectValues'],(function a(b,c,d,e,f,g,h,i){

'use strict';












var j=c('React').PropTypes,

k=c('React').createClass({displayName:'UFIStickerButton',
_clickGuard:false,
_updateListener:null,
_linkRef:null,

propTypes:
{onStickerFlyoutShow:j.func,
onStickerSelected:j.func.isRequired,
onEmoticonSelected:j.func,
showTooltip:j.bool,
stickerInterface:j.oneOf
(c('getObjectValues')(c('StickerInterfaces'))),

tabIndex:j.number},


getDefaultProps:function l(){

return {showTooltip:true,
stickerInterface:c('StickerInterfaces').COMMENTS};},



getInitialState:function l(){

return {renderFlyout:null,
flyoutShown:false};},



componentDidMount:function l(){
this._updateListener=c('Arbiter').subscribe
('page_transition',
function(){return this._hideFlyout();}.bind(this));},



componentWillUnmount:function l(){
this._updateListener&&this._updateListener.unsubscribe();},


render:function l(){
var m=i._(["Post a sticker","aa3518ba1f1b74b31439457e0145b5b8"]);







return (c('React').createElement(c('FocusRelocator.react'),{from:this._linkRef,to:this.refs.icon},
c('React').createElement(c('Link.react'),
{'aria-label':m,
className:"_r1a UFICommentStickerButton",

'data-hover':'tooltip',
'data-interaction-root-id':"_ara",
'data-tooltip-content':this.props.showTooltip?m:null,
linkRef:this._setRef,
onClick:this._onLinkClicked,
onMouseDown:this._prepareForClick,
role:'button',
tabIndex:this.props.tabIndex},
c('React').createElement('div',
{ref:'icon',
className:"UFICommentStickerIcon"+


(this.state.flyoutShown?' '+"UFICommentStickerIconActive":'')}),





this.props.children,
this.state.renderFlyout?this.state.renderFlyout():null)));},





_hideFlyout:function l(){
this.setState({flyoutShown:false});},


_prepareForClick:function l(){

this._clickGuard=this.state.flyoutShown;},


_onLinkClicked:function l(m){




m.preventDefault();

if(this.state.renderFlyout!==null){
if(!this._clickGuard){
this.props.onStickerFlyoutShow&&this.props.onStickerFlyoutShow();
this.setState({flyoutShown:true});}

return;}


c('Bootloader').loadModules
(["ContextualLayerAutoFlip","LayerTabIsolation","StickersFlyout.react","XUIContextualDialog.react"],






function(n,
o,
p,
q){

this.setState
({flyoutShown:true,

renderFlyout:function(){
return (c('React').createElement(q,
{alignment:'right',
behaviors:
{ContextualLayerAutoFlip:n,
LayerTabIsolation:o},

className:"_5e-r",
contextRef:function(){return this._linkRef;}.bind(this),
onBlur:this._hideFlyout,
onToggle:function(r){
if(!r&&this.state.flyoutShown)
this._hideFlyout();}.

bind(this),
position:'above',
shown:this.state.flyoutShown,
hasActionableContext:true,
width:278},
c('React').createElement('div',null,
c('React').createElement(p,
{onEscKeyDown:this._hideFlyout,
onStickerSelect:this._onStickerSelected,
onEmoticonSelect:this._onEmoticonSelected,
stickerInterface:this.props.stickerInterface,
shown:this.state.flyoutShown}))));}.bind(this)});





this.props.onStickerFlyoutShow&&this.props.onStickerFlyoutShow();}.
bind(this),'UFIStickerButton.react');},



_onStickerSelected:function l(m,event){
this.props.onStickerSelected(m,event);
this._hideFlyout();},


_onEmoticonSelected:function l(m){
this.props.onEmoticonSelected&&this.props.onEmoticonSelected(m);
this._hideFlyout();},


_setRef:function l
(m){

this._linkRef=m;}});



f.exports=k;}),null);

/** js/litestand_classic/LitestandClassicPlaceHolders.js */







__d("LitestandClassicPlaceHolders",[],(function a(b,c,d,e,f,g){

var h={},

i=

{register:function j(k,l){
h[k]=l;},



destroy:function j(k){
var l=h[k];
if(l){
l.parentNode.removeChild(l);
delete h[k];}}};




f.exports=i;}),null);

/** js/litestand_classic/LitestandClassicRHC.js */









__d('LitestandClassicRHC',['cx','Arbiter','BigPipe','DOMQuery','NavigationMessage','Run','SubscriptionsHandler','requireWeak'],(function a(b,c,d,e,f,g,h){











function i(k,l){
var m=new (c('SubscriptionsHandler'))(),
n=m.release.bind(m),

o=c('DOMQuery').scry(k,'.pagelet'),
p=o.length;

m.addSubscriptions
(l.subscribe
([].map.call(o,function(q){return q.id+'_displayed';}),
function(){
if(--p===0){
c('Arbiter').inform('LitestandClassicRHC/loaded');
n();}}),



c('Arbiter').subscribe
(c('NavigationMessage').NAVIGATION_BEGIN,
n),



l.subscribeOnce
(c('BigPipe').Events.displayed,
function(){
c('Arbiter').inform('LitestandClassicRHC/loaded');
n();}));




c('Run').onLeave(n);}


var j=




{init:function k(l){

c('requireWeak')('BigPipe',function(m){
var n=m.getCurrentInstance();
if(n&&n.arbiter){
i(l,n.arbiter);}else 

c('Arbiter').subscribeOnce('BigPipe/init',function(event,o){
i(l,o.arbiter);},
c('Arbiter').SUBSCRIBE_NEW);});}};





f.exports=j;}),null);

/** www/__virtual__/x/XCommentEmbedPluginEmbedAsyncDialogController.js */



__d("XCommentEmbedPluginEmbedAsyncDialogController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/plugins\/comment-embed\/async\/embed\/dialog\/",{comment_id:{type:"String",required:true},width:{type:"Int"},__asyncDialog:{type:"Int"}});}),

null);
