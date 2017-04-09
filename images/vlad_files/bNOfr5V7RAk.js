if (self.CavalryLogger) { CavalryLogger.start_js(["UPqlN"]); }

/** js/clientufi/adapters/UFICommercialBreakAdapter.js */






__d('UFICommercialBreakAdapter',['Map','SubscriptionsHandler','UFIInstanceAction','UFISharedDispatcher'],(function a(b,c,d,e,f,g){

'use strict';









function h
(j,
k){

var l=k.getOption
('VideoWithCommercialBreak',
'controller');


if(l&&
l.getIsCommercialBreakOngoing())

c('UFISharedDispatcher').dispatch
(c('UFIInstanceAction').toggleCommercialBreak
(j,
true));



var m=new (c('SubscriptionsHandler'))();
m.addSubscriptions
(k.addListener
('commercialBreak/hideUFI',
function(){return c('UFISharedDispatcher').dispatch
(c('UFIInstanceAction').toggleCommercialBreak
(j,
true));}),



k.addListener
('commercialBreak/showUFI',
function(){return c('UFISharedDispatcher').dispatch
(c('UFIInstanceAction').toggleCommercialBreak
(j,
false));}));




return m;}


var i=new (c('Map'))();

f.exports=
{start:function j
(k,
l){

var m=k.instanceid;
if(i.get(m))
return;

i.set
(m,
h
(k,
l));},




stop:function j(k){
var l=i.get(k);
if(!l)
return;

l.release();
i['delete'](k);}};}),
null);

/** js/clientufi/adapters/UFIDomRootAdapter.js */






__d('UFIDomRootAdapter',['csx','DOMQuery','Parent','UFIRootRegistry'],(function a(b,c,d,e,f,g,h){
















function i
(j,
k){
'use strict';this.$UFIDomRootAdapter_form=null;this.$UFIDomRootAdapter_headRoot=null;this.$UFIDomRootAdapter_snowliftActionRoot=null;
this.$UFIDomRootAdapter_root=j;
this.$UFIDomRootAdapter_contextArgs=k;}
i.prototype.

getParentForm=function(){'use strict';
if(!this.$UFIDomRootAdapter_form)
this.$UFIDomRootAdapter_form=c('Parent').byTag(this.$UFIDomRootAdapter_root,'form');


return this.$UFIDomRootAdapter_form;};
i.prototype.

getHeadRoot=function(){'use strict';
if(!this.$UFIDomRootAdapter_headRoot){




var j=c('UFIRootRegistry').isSnowliftNode
(this.$UFIDomRootAdapter_contextArgs.rootid),

k=j?
"^.fbPhotosSnowliftFeedback ._37uu":
"^form ._37uu",

l=c('DOMQuery').scry(this.$UFIDomRootAdapter_root,k);

this.$UFIDomRootAdapter_headRoot=l&&l[0]||null;}

return this.$UFIDomRootAdapter_headRoot;};
i.prototype.

getSnowliftActionRoot=function(){'use strict';
if(!this.$UFIDomRootAdapter_snowliftActionRoot){

var j=c('DOMQuery').scry
(this.$UFIDomRootAdapter_root,
"^.snowliftPayloadRoot ._29qf ._37uu");


this.$UFIDomRootAdapter_snowliftActionRoot=j&&j[0]||null;}

return this.$UFIDomRootAdapter_snowliftActionRoot;};




f.exports=i;}),null);

/** www/__virtual__/webgraphql/PinnedCommentEventCreateSubscriptionWebGraphQLSubscription.js */






__d("PinnedCommentEventCreateSubscriptionWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLSubscriptionHelper").getExports
({docID:"1240880062668908",
queryID:"1109098922529083"});}),null);

/** js/graphql/subscriptions/LivePinnedCommentEventCreateSubscription.js */








__d('LivePinnedCommentEventCreateSubscription',['BaseGraphQLSubscription','PinnedCommentEventCreateSubscriptionWebGraphQLSubscription','uuid'],(function a(b,c,d,e,f,g){








var h=babelHelpers['extends']({},c('BaseGraphQLSubscription'),


{_getTopic:function i(j){
return 'gqls/pinned_comment_event_create_subscribe/video_id_'+j;},


_getQueryID:function i(){
return c('PinnedCommentEventCreateSubscriptionWebGraphQLSubscription').getLegacyQueryID();},


_getQueryParameters:function i(j){

return {input:JSON.stringify
({client_subscription_id:c('uuid')(),
video_id:j})};},




_getSubscriptionCallName:function i(){
return 'pinned_comment_event_create_subscribe';}});



f.exports=h;}),null);

/** js/stream/fbfeed/FbFeedCommentUFIScroller.js */




__d('FbFeedCommentUFIScroller',['DOMScroll','containsNode','ge','ifRequired'],(function a(b,c,d,e,f,g){







var h=
{reveal:function i(j){
if(j){
var k=c('ge')('content');

if(k&&c('containsNode')(k,j)){
c('DOMScroll').ensureVisible(j,null,60,250);}else 


c('ifRequired')('ScrollableArea',function(l){
var m=l.getInstance(j);
if(m)
m.scrollIntoView(j);});}}};







f.exports=h;}),null);

/** js/components/UFI/UFIAddCommentLink.react.js */





__d('UFIAddCommentLink.react',['cx','fbt','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,







l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.











render=function(){
var n=c('joinClasses')("UFIRow"+(' '+"UFIAddCommentLink")+




(this.props.isFirstCommentComponent?' '+"_48pi":'')+
(this.props.isLastCommentComponent?' '+"UFILastCommentComponent":'')+
(this.props.isFirstComponent?' '+"_4204":'')+
(this.props.isLastComponent?' '+"_2o9m":'')),



o;
if(this.props.isQAndA){
o=i._(["Ask a question...","9fbda49f042111a3458adccdff28d612"]);}else




if(this.props.isGroupQA){
o=i._(["Write an answer...","5a8c875e16e22e3f56126bace03841e8"]);}else 





o=i._(["Write a comment...","7c7ad321783f57b8234a0db5027ba413"]);



return (c('React').createElement('div',{className:n,'data-ft':this.props['data-ft']},
c('React').createElement('a',
{className:'UFICommentLink',
onClick:this.props.onClick,
href:'#',
role:'button'},
o)));};



function m(){j.apply(this,arguments);}m.propTypes={'data-ft':l.string,isFirstCommentComponent:l.bool,isFirstComponent:l.bool,isLastCommentComponent:l.bool,isLastComponent:l.bool,isQAndA:l.bool,isGroupQA:l.bool,onClick:l.func};


f.exports=m;}),null);

/** js/components/UFI/UFIAnimatedCommentList.react.js */





__d('UFIAnimatedCommentList.react',['cx','React','Visibility','ifRequired'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,







k=c('React').PureComponent;i=babelHelpers.inherits







(l,k);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.

node=null,n;}l.prototype.

render=function(){

return (c('React').createElement('div',
{ref:function(m){return this.node=m;}.bind(this),
className:"UFIAnimatedCommentList"},

this.props.children));};


l.prototype.

componentWillEnter=function(m){
var n=this.node;

if(!n||
this.props.isLatestCommentLocal||
c('Visibility').isHidden()){





m();
return;}

c('ifRequired')
('CSSAnimationBuilder',
function(o){
var p=this.props.isStreamingFromBottom?

n.lastChild.clientHeight:

-n.firstChild.clientHeight;
o.keyframeAnimation(n).
defineKeyframes
({'0%':
{transform:'translateY('+p+'px)'},

'100%':
{transform:'translateY(0px)'}}).


setTimingFunction('ease-in-out').
setDuration(.25).



setMemoize(true).
setIterationCount(1).
setFinishedCallback(m).
start();}.
bind(this));};




f.exports=l;}),null);

/** js/components/UFI/UFICommentDisabledNotice.react.js */





__d('UFICommentDisabledNotice.react',['cx','React','TextWithEntities.react','linkifyEntityRange'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,



k=c('React').PropTypes;i=babelHelpers.inherits




(l,c('React').Component);j=i&&i.prototype;l.prototype.






render=function(){
var m=this.props.feedback,
n=m.commentdisablednotice,

o=
c('React').createElement('div',{className:'UFINotice'},
c('React').createElement(c('TextWithEntities.react'),
{interpolator:c('linkifyEntityRange'),
ranges:n.ranges,
aggregatedranges:n.aggregated_ranges,
text:n.text}));



return (c('React').createElement('div',{className:"UFIRow _4204 _2o9m _4oep"},

o));};


function l(){i.apply(this,arguments);}l.propTypes={feedback:k.object.isRequired};


f.exports=l;}),null);

/** js/clientufi/models/UFICommentFilters.js */






__d('UFICommentFilters',['UFIConstants'],(function a(b,c,d,e,f,g){

'use strict';



var h=
{getAuthors:function i(j){
return j.reduce(function(k,l){
if(l.author)
k=k.concat(l.author);

if(l.socialcontext)
k=k.concat(l.socialcontext.topmutualid);

if(l.replyauthors&&l.replyauthors.length)
k=k.concat(l.replyauthors);

return k;},
[]);},


isDeleted:function i(j){
return j.status===c('UFIConstants').UFIStatus.DELETED;},


isSpam:function i(j){
return j.status===c('UFIConstants').UFIStatus.SPAM;},



















collectSpamBuckets:function i
(j,
k){

var l=j.reduce
(function(m,n){
if(h.isSpam(n)){
if(m.spamBucket){
m.spamBucket.spamCommentIDs.push(n.id);
m.collected.push(null);}else{


m.spamBucket=
{status:c('UFIConstants').UFIStatus.SPAM,
id:n.id,
spamCommentIDs:[n.id]};

m.collected.push(m.spamBucket);}}else 




if(n.isAnnouncement||k[n.author]){
m.spamBucket=null;
m.collected.push(n);}


return m;},


{spamBucket:null,
collected:[]});


return l.collected;}};



f.exports=h;}),null);

/** js/components/UFI/UFICommentHeader.react.js */





__d('UFICommentHeader.react',['cx','fbt','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k;j=babelHelpers.inherits






(l,c('React').Component);k=j&&j.prototype;l.prototype.
render=function(){

return (c('React').createElement('h6',babelHelpers['extends']({},
this.props,
{className:"accessible_elem"}),i._(["Comments","ffdcb1b8f809702ce66b8412c40c5ef4"])));};






function l(){j.apply(this,arguments);}


f.exports=l;}),null);

/** js/components/UFI/Comments/UFICommentListVisibilityTracker.react.js */





__d('UFICommentListVisibilityTracker.react',['cx','Arbiter','DOMQuery','OnVisible.react','React','ReactDOM','SubscriptionsHandler','UFICommentVPVD','UFIConfig','UFIInstanceAction','UFISharedDispatcher','UFIVisibility'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,


















k=c('React').Children,l=c('React').Component,m=c('React').PropTypes,
n=c('UFIConfig').commentVPVD;i=babelHelpers.inherits














(o,
l);j=i&&i.prototype;













function o(p){
j.constructor.call(this,p);this.state={isVisible:false};this.






















































































onVisible=function(){
if(this.$UFICommentListVisibilityTracker_isCommentListVisibilityTrackingEnabled())
this.setState({isVisible:true});

c('UFISharedDispatcher').dispatch
(c('UFIInstanceAction').changeCommentListVisibility
(this.props.contextArgs,
c('UFIVisibility').VISIBLE));}.


bind(this);this.

onHidden=function(){
if(this.$UFICommentListVisibilityTracker_isCommentListVisibilityTrackingEnabled())
this.setState({isVisible:false});

c('UFISharedDispatcher').dispatch
(c('UFIInstanceAction').changeCommentListVisibility
(this.props.contextArgs,
c('UFIVisibility').HIDDEN));}.


bind(this);this.$UFICommentListVisibilityTracker_subscriptions=new (c('SubscriptionsHandler'))();}o.prototype.componentDidMount=function(){if(this.$UFICommentListVisibilityTracker_isCommentListVisibilityTrackingEnabled()&&this.props.contextArgs.location==='conversation_nub')this.$UFICommentListVisibilityTracker_subscriptions.addSubscriptions(c('Arbiter').subscribe('ConversationNubUtils/recheckTabVisibility',function(p,q){var r=q||{},s=r.tab,t=s&&s.getRootDOM(),u=this.refs.onVisibleRoot,v=u&&c('ReactDOM').findDOMNode(u);if(t&&u&&v&&c('DOMQuery').contains(t,v))u.check();}.bind(this)));};o.prototype.componentWillUnmount=function(){this.$UFICommentListVisibilityTracker_subscriptions.release();};o.prototype.shouldComponentUpdate=function(p,q){if(!n.debug_html&&this.state.isVisible!==q.isVisible)return false;return true;};o.prototype.$UFICommentListVisibilityTracker_isCommentListVisibilityTrackingEnabled=function(){return !!c('UFIConfig').enableCommentListVisibilityTracking||c('UFICommentVPVD').enableVPVDLogging(this.props.contextArgs);};o.prototype.render=function(){var p=k.only(this.props.children);if(!this.$UFICommentListVisibilityTracker_isCommentListVisibilityTrackingEnabled())return p;var q=n.debug_html;return c('React').createElement('div',{'data-debugstate':q?this.state.isVisible?'partially visible':'hidden':null,className:"_3b-9"+(q?' '+"_3b-a":'')+(q&&this.state.isVisible?' '+"_3b-b":'')+(q&&!this.state.isVisible?' '+"_3b-c":'')},c('React').createElement(c('OnVisible.react'),{ref:'onVisibleRoot',onVisible:this.onVisible,onHidden:this.onHidden,considerZeroedElemsAsHidden:true},p));};o.propTypes={contextArgs:m.shape({instanceid:m.string.isRequired,location:m.string}).isRequired};



f.exports=o;}),null);

/** js/components/UFI/UFICommentScrollableArea.react.js */




__d('UFICommentScrollableArea.react',['React','ScrollableArea.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i,




j=c('React').Children,k=c('React').PropTypes;h=babelHelpers.inherits

(l,c('React').Component);i=h&&h.prototype;l.prototype.





render=function(){var m=




this.props,n=m.children,o=m.scrollcomments,p=m.scrollwidth;

if(o&&p)

return (c('React').createElement(c('ScrollableArea.react'),{width:p},
j.only(n)));




return j.only(n);};
function l(){h.apply(this,arguments);}l.propTypes={scrollcomments:k.bool.isRequired,scrollwidth:k.number.isRequired};


f.exports=l;}),null);

/** js/logging/generated/CommentsTimeSpentTypedLogger.js */





__d('CommentsTimeSpentTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:CommentsTimeSpentLoggerConfig',this.$CommentsTimeSpentTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:CommentsTimeSpentLoggerConfig',this.$CommentsTimeSpentTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$CommentsTimeSpentTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$CommentsTimeSpentTypedLogger_data=babelHelpers['extends']({},
this.$CommentsTimeSpentTypedLogger_data,
j);

return this;};
h.prototype.




setEndTime=function(j){
this.$CommentsTimeSpentTypedLogger_data.end_time=j;
return this;};
h.prototype.




setOrderingMode=function(j){
this.$CommentsTimeSpentTypedLogger_data.ordering_mode=j;
return this;};
h.prototype.




setPostFbid=function(j){
this.$CommentsTimeSpentTypedLogger_data.post_fbid=j;
return this;};
h.prototype.




setStartTime=function(j){
this.$CommentsTimeSpentTypedLogger_data.start_time=j;
return this;};
h.prototype.




setTimeSpentID=function(j){
this.$CommentsTimeSpentTypedLogger_data.time_spent_id=j;
return this;};
h.prototype.




setViewerHasInteracted=function(j){
this.$CommentsTimeSpentTypedLogger_data.viewer_has_interacted=j;
return this;};
























var i=
{end_time:true,
ordering_mode:true,
post_fbid:true,
start_time:true,
time_spent_id:true,
viewer_has_interacted:true};


f.exports=h;}),null);

/** js/components/UFI/CommentsTimeSpentTracker.react.js */





__d('CommentsTimeSpentTracker.react',['invariant','Banzai','CommentsTimeSpentTypedLogger','Event','OnVisible.react','React','SubscriptionsHandler','UFIOrderingModeStore','UserActivity','pageID','setTimeout'],(function a(b,c,d,e,f,g,h){

'use strict';














var i=c('React').PropTypes,





j=c('React').createClass({displayName:'CommentsTimeSpentTracker',
firstVisibleTime:0,
listeners:new (c('SubscriptionsHandler'))(),

propTypes:
{contextArgs:i.object.isRequired,
targetFBID:i.string.isRequired,
viewerHasInteracted:i.bool.isRequired,
timeToConsiderViewerInactiveMillis:i.number,
pollViewerActivityIntervalMillis:i.number},


getDefaultProps:function k(){

return {timeToConsiderViewerInactiveMillis:30000,
pollViewerActivityIntervalMillis:1000};},



render:function k(){

return (c('React').createElement(c('OnVisible.react'),
{ref:'onVisibleElement',
onVisible:this.startInterval,
onHidden:this.finishInterval},


this.props.children));},




startInterval:function k(){


if(this.firstVisibleTime===0){
this.firstVisibleTime=this._getTimeInSeconds();
this._checkForIdleViewer();}},



finishInterval:function k(){
var l=c('UFIOrderingModeStore').getState().
get(this.props.contextArgs.instanceid);

if(this.firstVisibleTime&&this.isMounted()){
var m=this._getTimeInSeconds();
if(m>this.firstVisibleTime)
new (c('CommentsTimeSpentTypedLogger'))().
setViewerHasInteracted(this.props.viewerHasInteracted).

setOrderingMode(l).
setPostFbid(this.props.targetFBID).
setStartTime(this.firstVisibleTime).
setEndTime(m).
setTimeSpentID(c('pageID')).
log();

this.firstVisibleTime=0;}},



componentWillReceiveProps:function k(){
this.finishInterval();},


componentDidMount:function k(){
this.listeners.addSubscriptions
(c('Banzai').subscribe(c('Banzai').SHUTDOWN,this.finishInterval),
c('Event').listen(window,'blur',this.finishInterval),
c('Event').listen(window,'focus',this._checkVisibility));},



componentWillUnmount:function k(){
this.finishInterval();
this.listeners.release();},


componentDidUpdate:function k(){
this._checkVisibility();},






_getTimeInSeconds:function k(){
return Math.floor(Date.now()/1000);},


_checkVisibility:function k(){
if(this.isMounted()){

this.refs.onVisibleElement!==null||h(0,
'CommentsTimeSpentTracker should always have an OnVisible element.');

this.refs.onVisibleElement.reset();}},



_checkForIdleViewer:function k(){

if(this.firstVisibleTime===0)
return;


if(c('UserActivity').isActive(this.props.timeToConsiderViewerInactiveMillis)){

c('setTimeout')
(function(){
this._checkForIdleViewer();}.
bind(this),
this.props.pollViewerActivityIntervalMillis);}else{



this.finishInterval();
c('UserActivity').subscribeOnce
(function(){
if(this.isMounted())
this._checkVisibility();}.

bind(this));}}});





f.exports=j;}),null);

/** js/components/UFI/UFISeenTracker.react.js */





__d('UFISeenTracker.react',['BanzaiODS','OnVisible.react','React','setTimeout'],(function a(b,c,d,e,f,g){

'use strict';var h,i;

















function j(l){
var m=false;
return function(){
if(!m){
l();
m=true;}};}


h=babelHelpers.inherits





(k,c('React').Component);i=h&&h.prototype;







function k(l){
i.constructor.call(this,l);

this.state={seen:false};

this.$UFISeenTracker_onVisible=j(this.logSeen.bind(this));}
k.prototype.

render=function(){
if(this.state.seen)
return this.props.children;


return (c('React').createElement(c('OnVisible.react'),{onVisible:this.$UFISeenTracker_onVisible},
this.props.children));};


k.prototype.

logSeen=function(){
c('setTimeout')(function(){return this.setState({seen:true});}.bind(this),100);



c('BanzaiODS').bumpEntityKey('unsampled_feedback','rendered_ufi_client');};
k.defaultProps={children:null};


f.exports=k;}),null);

/** js/components/UFI/UFIComponentLogger.react.js */





__d('UFIComponentLogger.react',['CommentsTimeSpentTracker.react','React','UFISeenTracker.react','UFIConfig'],(function a(b,c,d,e,f,g){

'use strict';var h,i,









j=c('React').PropTypes;h=babelHelpers.inherits













(k,c('React').Component);i=h&&h.prototype;k.prototype.












render=function(){var l=







this.props,m=l.children,n=l.contextArgs,o=l.feedback,p=l.hasComments,q=l.isPermalink,r=l.viewerHasInteractedWithComments;

if(!m)
return null;


var s=c('React').createElement('div',null,m);





if(p&&c('UFIConfig').logCommentsTimespent){
var t=r||q;
s=
c('React').createElement(c('CommentsTimeSpentTracker.react'),
{contextArgs:n,
viewerHasInteracted:t,
targetFBID:o.commentstargetfbid},
s);}



if(c('UFIConfig').logWhetherUFISeen)
s=
c('React').createElement(c('UFISeenTracker.react'),null,
s);




return s;};
function k(){h.apply(this,arguments);}k.propTypes={contextArgs:j.object.isRequired,feedback:j.object.isRequired,hasComments:j.bool.isRequired,isPermalink:j.bool.isRequired,viewerHasInteractedWithComments:j.bool.isRequired};k.defaultProps={children:null};


f.exports=k;}),null);

/** js/clientufi/models/UFIComponents.js */






__d('UFIComponents',['React','UFICommentFilters'],(function a(b,c,d,e,f,g){

'use strict';




var h=function k(l){
if(!l)
return false;



if(l.props.comment&&
c('UFICommentFilters').isDeleted(l.props.comment))

return false;


return true;},








i=function k
(l,
m,
n){

var o=void 0,
p=n?l.length-1:0,
q=n?-1:l.length,
r=n?-1:1;

for(o=p;o!=q;o+=r)
if(h(l[o])){
m(l,o);
return l;}



return l;},


j=





{applyToUFIComponents:function k
(l,
m,
n){

l=i
(l,
function(o,p){
o[p]=c('React').cloneElement(o[p],m);},

false);


l=i
(l,
function(o,p){
o[p]=c('React').cloneElement(o[p],n);},

true);


return l;}};



f.exports=j;}),null);

/** js/components/UFI/UFILikeSentenceText.react.js */





__d('UFILikeSentenceText.react',['cx','ActorURI','HovercardLinkInterpolator','ProfileBrowserLink','ProfileBrowserTypes','React','TextWithEntities.react','URI','XUFIReactionProfileBrowserController','XUFIReactionProfileDialogController'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,
















k=c('React').PropTypes;












function l
(n,
o,
p,
q){

if(q.count!=null){
var r=c('ProfileBrowserTypes').LIKES,
s=
{id:n.targetfbid,
actorid:n.actorid},

t=[],
u;
for(var v=0;v<o.length;v++)

if(!o[v].count){
u=o[v];
var w=u.entity;
t.push(w.id);}



var x=new (c('URI'))('/ajax/like/tooltip.php').
setQueryData
({comment_fbid:n.targetfbid,
comment_from:n.actorforpost,


seen_user_fbids:t.length?t:true});

x=c('ActorURI').create(x,n.actorforpost);

var y,z;

if(n.displayreactions){
y=c('XUFIReactionProfileDialogController').getURIBuilder().
setString('ft_ent_identifier',n.entidentifier).
getURI();
y=c('ActorURI').create(y,n.actorforpost);
z=c('XUFIReactionProfileBrowserController').getURIBuilder().
setString('ft_ent_identifier',n.entidentifier).
getURI();
z=c('ActorURI').create(z,n.actorforpost);}else{

y=c('ProfileBrowserLink').constructDialogURI(r,s).toString();
z=c('ProfileBrowserLink').constructPageURI(r,s).toString();}



return (c('React').createElement('a',
{'data-testid':'n_other_people_link',
className:"_375l",
rel:'dialog',
ajaxify:y,
href:z,
'data-hover':'tooltip',
'data-tooltip-alignh':'center',
'data-tooltip-uri':x.toString(),
role:'button'},
p));}else{



var aa=
{source_feedback_owner_id:n.ownerid,
source_feedback_identifier:n.entidentifier};

return c('HovercardLinkInterpolator')
(p,
q,
null,
null,
'ufi',
aa);}}


i=babelHelpers.inherits







(m,c('React').Component);j=i&&i.prototype;m.prototype.






render=function(){
var n=this.props.feedback,
o=this.props.likeSentenceData,
p,



q=
o.aggregatedranges||o.aggregated_ranges;

p=l;
p=
p.bind
(null,
n,
o.ranges);



return (c('React').createElement(c('TextWithEntities.react'),
{interpolator:p,
ranges:Object.values(o.ranges),
aggregatedRanges:q,
text:o.text}));};


function m(){i.apply(this,arguments);}m.propTypes={contextArgs:k.object.isRequired,feedback:k.object.isRequired,likeSentenceData:k.object.isRequired};


f.exports=m;}),null);

/** www/__virtual__/x/XUFIReactionTooltipController.js */



__d("XUFIReactionTooltipController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/reaction\/tooltip\/",{ft_ent_identifier:{type:"String",required:true},seen_user_fbids:{type:"IntVector",defaultValue:[]},reaction_type:{type:"Enum",enumType:0},user_count:{type:"Int"}});}),

null);

/** js/reactions/UFIReactionsFacepile.react.js */




__d('UFIReactionsFacepile.react',['ix','cx','ActorURI','Bootloader','Image.react','React','TooltipLink.react','UFIConfig','UFIConstants','UFIReactionIconImpl.react','UFIReactionsProfileBrowserUtils','XUFIReactionTooltipController','XUFIReactionsSocialSentenceTooltipController','fbglyph'],(function a(b,c,d,e,f,g,h,i){var j,k,
















l=11,
m=7,
n=32,
o='16';j=babelHelpers.inherits

(p,c('React').Component);k=j&&j.prototype;


function p(q,r){'use strict';
k.constructor.call(this,q,r);this.



































onSentenceClick=function(event){
var s=this.props.feedback,
t=
c('UFIReactionsProfileBrowserUtils').getDialogURI(s).toString();

c('Bootloader').loadModules(["AsyncDialog"],function(u){
u.bootstrap(t,event.currentTarget,'dialog');},
'UFIReactionsFacepile.react');

event.preventDefault();}.
bind(this);}p.prototype.componentWillMount=function(){'use strict';var q=this.props.context.source,r=c('UFIConstants').UFIFeedbackSourceType.PHOTOS_SNOWLIFT;if(q===r){this.$UFIReactionsFacepile_maxReactionIcons=m;}else this.$UFIReactionsFacepile_maxReactionIcons=l;};p.prototype.$UFIReactionsFacepile_getTooltipProps=function(q){'use strict';var r=q.actorforpost,s=q.entidentifier,t=c('UFIConfig').reactionsHasTooltipBreakdown?c('XUFIReactionsSocialSentenceTooltipController'):c('XUFIReactionTooltipController');return {'data-hover':'tooltip','data-tooltip-uri':c('ActorURI').create(t.getURIBuilder().setString('ft_ent_identifier',s).getURI(),r)};};p.prototype.

renderFacepile=function(){'use strict';
var q=this.props.feedback,

r=

q.reactioncount,s=q.reactors;

if(s===null)
return null;



var t=s;
if(r>this.$UFIReactionsFacepile_maxReactionIcons)
t=s.slice(0,this.$UFIReactionsFacepile_maxReactionIcons-1);


return t.map(function(u){

return (c('React').createElement(c('TooltipLink.react'),
{href:c('UFIReactionsProfileBrowserUtils').getPageURI(q),
key:u.profilepicsrc,
onClick:this.onSentenceClick,
position:'above',
rel:'ignore',
tooltip:u.name},
c('React').createElement('div',null,
c('React').createElement('div',
{className:"_44l5"},
c('React').createElement(c('Image.react'),
{height:n,
src:u.profilepicsrc,
width:n}),

c('React').createElement('div',
{className:"_44l6"},
c('React').createElement(c('UFIReactionIconImpl.react'),
{reaction:u.reaction,
size:o}))))));}.






bind(this));};
p.prototype.

renderMoreLink=function(){'use strict';
var q=this.props.feedback,

r=


q.reactioncount,s=q.reactors,t=q.viewerreaction;

if(s===null||r<=this.$UFIReactionsFacepile_maxReactionIcons)
return null;


var u=s[this.$UFIReactionsFacepile_maxReactionIcons-1],

v=void 0;
if(c('UFIConfig').reactionsHasTooltipBreakdown){
v=r>1;}else 

v=t?r>3:r>2;


var w=null;
if(v)
w=this.$UFIReactionsFacepile_getTooltipProps(q);



return (c('React').createElement('a',
{className:"_44l5 _19sm",

href:c('UFIReactionsProfileBrowserUtils').getPageURI(q),
onClick:this.onSentenceClick,
rel:'ignore'},
c('React').createElement('span',babelHelpers['extends']({},w,
{className:"_44l7"}),
c('React').createElement('div',
{className:"_3vbb"},
c('React').createElement(c('Image.react'),
{height:n,
src:u.profilepicsrc,
width:n})),


c('React').createElement('div',
{className:"_44l8"},
c('React').createElement(c('Image.react'),
{height:o,
src:h("114186"),


width:o})))));};





p.prototype.

render=function(){'use strict';

return (c('React').createElement('li',
{className:"_44l9"},
this.renderFacepile(),
this.renderMoreLink()));};





f.exports=p;}),null);

/** js/reactions/UFIReactionsSocialSentence.react.js */






__d('UFIReactionsSocialSentence.react',['cx','fbt','ActorURI','Bootloader','BanzaiLogger','React','UFIConfig','UFIReactionsBlingTokens.react','UFIReactionsFacepile.react','UFIReactionsProfileBrowserUtils','XUFIReactionTooltipController','XUFIReactionsSocialSentenceTooltipController'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits















(l,c('React').Component);k=j&&j.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.























onSentenceClick=function(event){
var r=this.props.feedback,
s=
c('UFIReactionsProfileBrowserUtils').getDialogURI(r).toString();

c('BanzaiLogger').log
('WebReactionsBlingLoggerConfig',

{feedback_id:this.props.feedback.entidentifier,
'interface':'www',
action:'click',
target_type:'social_sentence'});



c('Bootloader').loadModules(["AsyncDialog"],function(t){
t.bootstrap(s,event.currentTarget,'dialog');},
'UFIReactionsSocialSentence.react');

event.preventDefault();}.
bind(this),n;}l.prototype.$UFIReactionsSocialSentence_getTooltipProps=function(m){'use strict';var n=m.actorforpost,o=m.entidentifier,p=c('UFIConfig').reactionsHasTooltipBreakdown?c('XUFIReactionsSocialSentenceTooltipController'):c('XUFIReactionTooltipController');return {'data-hover':'tooltip','data-tooltip-uri':c('ActorURI').create(p.getURIBuilder().setString('ft_ent_identifier',o).getURI(),n)};};l.prototype.

render=function(){'use strict';
var m=this.props.feedback,
n=this.props.contextArgs,

o=






m.likesentences,p=m.reactors,q=m.reactioncount,r=m.reactioncountreduced,s=m.reactionsentences,t=m.showblingbarfeedback,u=m.viewerreaction,

v=u?q>3:q>2;
if(c('UFIConfig').reactionsHasTooltipBreakdown)
v=q>1;


var w=null;
if(v)
w=this.$UFIReactionsSocialSentence_getTooltipProps(m);


var x=null;
if(s&&s.current){
x=s.current.text;}else
if(o&&o.current){
x=o.current.text;}else 

x=r;


var y=m!==null&&
t&&
n.isPermalink,

z=null;
if(x)
z=
c('React').createElement('span',{className:"_4arz"},
c('React').createElement('span',w,
x));




var aa=null,
ba=null;
if(q){
if(y&&!z)
ba=i._(["people reacted to this","85b0f216ec06bfab44e450c4b9026dbe"]);







aa=
c('React').createElement('span',
{'aria-hidden':!!z,
className:"_1g5v"},
c('React').createElement('span',w,
r,
' ',
ba));}




var ca=
c('React').createElement('a',
{className:"_2x4v",
href:c('UFIReactionsProfileBrowserUtils').getPageURI(m),
onClick:this.onSentenceClick,
rel:'ignore'},
aa,
z),


da=null,
ea=null;

if(y&&p){
da=
c('React').createElement(c('UFIReactionsFacepile.react'),
{feedback:m,
context:n});}else{


var fa=c('UFIConfig').reactionsDirectReactTokensModule?
c('UFIConfig').reactionsDirectReactTokensModule:c('UFIReactionsBlingTokens.react');


ea=
c('React').createElement(fa,
{className:"_4ar- _ipn",

contextArgs:n,
showCounts:c('UFIConfig').reactionsHasDirectReactTokensCounts,
feedback:m,
max:3},
ca);}




return (c('React').createElement('div',
{'data-interaction-root-id':"_1vaq"},
da,
c('React').createElement('div',
{className:"_ipp"},


y?ca:ea)));};






f.exports=l;}),null);

/** www/__virtual__/x/XUFIGroupSeenByProfileBrowserController.js */



__d("XUFIGroupSeenByProfileBrowserController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/group\/seenby\/profile\/browser\/",{id:{type:"Int",required:true}});}),

null);

/** www/__virtual__/x/XUFIGroupSeenByProfileDialogController.js */



__d("XUFIGroupSeenByProfileDialogController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/group\/seenby\/profile\/dialog\/",{id:{type:"Int",required:true},__asyncDialog:{type:"Int"}});}),

null);

/** js/components/UFI/UFILikeSentence.react.js */







__d('UFILikeSentence.react',['cx','fbt','invariant','ActorURI','Bootloader','LeftRight.react','React','UFILikeSentenceText.react','UFIReactionsSocialSentence.react','URI','XUFIGroupSeenByProfileBrowserController','XUFIGroupSeenByProfileDialogController','isEmpty','joinClasses'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,

















m=c('React').PropTypes,

n=null;k=babelHelpers.inherits




(o,c('React').Component);l=k&&k.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.












































state=
{bootloadedSelectorModule:false,
hasSelectorModule:!!n},q;}o.rendersSocialSentence=function(p){var q=p.feedback,r=p.contextArgs,s=q.likesentences,t=q.reactionsentences;if(r.hideSocialSentence)return false;return s&&!c('isEmpty')(s.current)||t&&t.current&&t.current.text;};o.prototype.


componentWillMount=function(){
this.$UFILikeSentence_bootloadSelectorModule(this.props);};
o.prototype.

componentWillReceiveProps=function(p){
this.$UFILikeSentence_bootloadSelectorModule(p);};
o.prototype.







$UFILikeSentence_bootloadSelectorModule=function(p){

if(p.showOrderingModeSelector&&
!this.state.bootloadedSelectorModule){


!p.contextArgs.entstream||j(0,
'The entstream UFI may only be rendered with one ordering mode.');

c('Bootloader').loadModules
(["UFIOrderingModeSelectorContainer.react"],
function(q){
n=q;
this.setState
({hasSelectorModule:true});}.

bind(this),'UFILikeSentence.react');

this.setState
({bootloadedSelectorModule:true});}};


o.prototype.


$UFILikeSentence_getLikeSentenceData=function(){
var p=this.props.feedback,
q=p.likesentences,r=
q||{},s=r.current;
return s||{};};
o.prototype.

$UFILikeSentence_renderSocialSentence=function(){
var p=this.props,

q=

p.feedback,r=p.contextArgs;

if(!this.constructor.rendersSocialSentence(p))
return null;


if(r.hasReactions)

return (c('React').createElement(c('UFIReactionsSocialSentence.react'),
{feedback:q,
contextArgs:r}));




var s=this.$UFILikeSentence_getLikeSentenceData();
if(s&&s.text)

return (c('React').createElement('div',{className:"UFILikeSentenceText"},
c('React').createElement(c('UFILikeSentenceText.react'),
{contextArgs:r,
feedback:q,
likeSentenceData:s})));




return null;};
o.prototype.

$UFILikeSentence_renderHeader=function(){
var p=this.props;

if(!p.contextArgs.showCommentHeader)
return null;



return (c('React').createElement('div',{className:"_310u"},i._(["Comments","08ea8d8a9dbaebc28e0d77da9beba6c5"])));};



o.prototype.

renderOrderingModeSelector=function(){

if(!this.props.showOrderingModeSelector||
!this.state.hasSelectorModule||
!n)

return null;



return (c('React').createElement(n,
{key:'orderingmodeselector',
contextArgs:this.props.contextArgs,
feedback:this.props.feedback}));};


o.prototype.

renderSeenState=function(){
var p=this.props.feedback;

if(!p.seencount||
p.seencount===0||
this.props.contextArgs.entstream)

return null;


var q=null;
if(p.seenbyall){
q=i._(["Seen by everyone","c2e7317cc1564d8ba9e5b1f5cd7ab5b9"]);}else 




q=p.seencount==1?i._(["Seen by 1","6393ec6705ce92f17c1aad24bdb6155c"]):i._(["Seen by {count}","8e37e33cc5c9aa6914faaaed3f63aacc"],


[i.param('count',p.seencount)]);




var r=new (c('URI'))('/ajax/ufi/seen_list_hovercard.php').
setQueryData
({id:p.entidentifier}),

s=c('ActorURI').create
(c('XUFIGroupSeenByProfileDialogController').getURIBuilder().
setInt('id',p.entidentifier).
getURI(),
p.actorforpost),

t=c('ActorURI').create
(c('XUFIGroupSeenByProfileBrowserController').getURIBuilder().
setInt('id',p.entidentifier).
getURI(),
p.actorforpost);


return (c('React').createElement('a',
{key:'seenstate',
rel:'dialog',
ajaxify:s,
href:t,
'data-hovercard':r.toString(),
className:"UFISeenCount"+(' '+"UFISeenCountRight")},



c('React').createElement('span',{className:'UFISeenCountIcon'}),
q));};


o.prototype.

render=function(){
var p=this.$UFILikeSentence_renderSocialSentence(this.props),

q=
[this.renderSeenState(),
this.renderOrderingModeSelector()].
filter(function(t){return t!==null;}),

r=null;
if(q.length===1){
r=q[0];}else
if(q.length>1)
r=
c('React').createElement('div',{className:"_oql"},
q);




if(r)


if(!p){
p=this.$UFILikeSentence_renderHeader();
if(!p)
p=c('React').createElement('div',null);}




var s=null;
if(p){
s=
c('React').createElement(c('LeftRight.react'),{direction:c('LeftRight.react').DIRECTION.right},
p,
r);}else 


s=r;



return (c('React').createElement('div',{className:c('joinClasses')("UFIRow"+

(this.props.feedback.likesentences.isunseen?' '+"UFIUnseenItem":'')+(' '+"UFILikeSentence")+

(this.props.isFirstComponent?' '+"_4204":'')+
(this.props.isLastComponent?' '+"_2o9m":'')+
(this.props.contextArgs.hasReactions?' '+"_4_dr":''))},

s));};


o.propTypes={contextArgs:m.object.isRequired,feedback:m.object.isRequired,isFirstComponent:m.bool,isLastComponent:m.bool,onOrderingModeChange:m.func,showOrderingModeSelector:m.bool};o.contextTypes={dispatch:m.func};


f.exports=o;}),null);

/** js/components/UFI/ActionLinks/UFILiveTypingIndicatorContainer.react.js */





__d('UFILiveTypingIndicatorContainer.react',['BootloadOnRender.react','FluxContainer','JSResource','LazyComponent.react','React','UFIConfig','UFILiveTypingStore'],(function a(b,c,d,e,f,g){

'use strict';var h,i,









j=c('React').Component;h=babelHelpers.inherits










(k,j);i=h&&h.prototype;


function k(l){
i.constructor.call(this,l);

this.state=
{everHadTyping:false,
hasTyping:false,
friendTyping:false};}

k.

getStores=function(){
return [c('UFILiveTypingStore')];};
k.

calculateState=function(){var l=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],m=arguments[1];
if(!c('UFIConfig').typingIndicator.showInline)

return {everHadTyping:false,
hasTyping:false,
friendTyping:false};



var n=!!c('UFILiveTypingStore').getState()[m.feedbackTargetID];


return {everHadTyping:l.everHadTyping||n,
hasTyping:n,
friendTyping:c('UFILiveTypingStore').isFriendTyping(m.feedbackTargetID)};};

k.prototype.

shouldComponentUpdate=function(l,m){
return l.feedbackTargetID!=this.props.feedbackTargetID||
m.everHadTyping!=this.state.everHadTyping||
m.hasTyping!=this.state.hasTyping;};
k.prototype.

render=function(){
if(this.state.everHadTyping)

return (c('React').createElement(c('BootloadOnRender.react'),
{loader:c('JSResource')('UFILiveTypingIndicator.react').__setRef('UFILiveTypingIndicatorContainer.react'),
placeholder:c('React').createElement('div',null),
component:
c('React').createElement(c('LazyComponent.react'),babelHelpers['extends']({},this.props,this.state))}));




return null;};



f.exports=c('FluxContainer').create(k,
{pure:true,
withProps:true});}),null);

/** js/components/UFI/UFIReplySocialSentence.react.js */







__d('UFIReplySocialSentence.react',['cx','fbt','Badge.react','Image.react','LiveTimer','React','Timestamp.react','UFIImageBlock.react','Middot.react','NumberFormat','WebCommentViewOption','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,















l=c('React').PropTypes,

m=43200;j=babelHelpers.inherits

(n,c('React').Component);k=j&&j.prototype;n.prototype.















render=function(){
var o=
this.props.isLoading?"UFIReplySocialSentenceLoading":'',


p=c('joinClasses')("UFIRow"+(' '+"UFIReplySocialSentenceRow")+



(this.props.isFirstComponent?' '+"_4204":'')+
(this.props.isLastComponent?' '+"_2o9m":'')),



q,
r,
s=c('NumberFormat').formatInteger(this.props.replies);
if(this.props.isExpanded){
q=this.props.replies>1?i._({"*":["Hide {count} Replies","8cd1901ed24d467dcb598ac12b258ce2"]},


[i.param('count',s,[0,this.props.replies])]):i._(["Hide 1 Reply","c1ef27a1b0b53aab8dbc151599f8b93f"]);}else{





q=this.props.replies>1?i._({"*":["{count} Replies","549d46c5aa1cebc13a880c1f20fb054e"]},

[i.param('count',s,[0,this.props.replies])]):i._(["1 Reply","0484fdd07bbdc54af7c1f9ba1e1b8b65"]);





if(this.props.timestamp){


var t=c('LiveTimer').getApproximateServerTime()/1000-
this.props.timestamp.time;

if(t<m||
this.props.orderingMode==
c('WebCommentViewOption').RECENT_ACTIVITY)
r=
c('React').createElement('span',{className:"fcg"},
c('React').createElement(c('Middot.react'),
{key:'middot-timestamp'}),
c('React').createElement(c('Timestamp.react'),
{shorten:this.props.contextArgs.shortenTimestamp,
time:this.props.timestamp.time,
text:this.props.timestamp.text,
verbose:this.props.timestamp.verbose}));}}






var u=this.props.author,
v=u&&!this.props.isExpanded,

w=null,
x;

if(v){
w=
c('React').createElement(c('Image.react'),
{alt:'',
src:u.thumbSrc,
className:"img UFIActorImage _54ru"});

var y=null;
if(this.props.showVerified)
y=c('React').createElement(c('Badge.react'),{size:'xsmall',type:'verified'});


if(u.i18nGender){
x=[i._({"*":["{author}{verified_badge} replied","267410d02d8558eabb0e8ae73f5e6c36"]},
[i.param('author',u.name,[1,u.i18nGender]),
i.param('verified_badge',y)])];}else 



x=[i._(["{author}{verified_badge} replied","267410d02d8558eabb0e8ae73f5e6c36"],
[i.param('author',u.name),
i.param('verified_badge',y)])];




x.push
(c('React').createElement(c('Middot.react'),
{key:'middot-author'}),
q);}else 


x=q;



return (c('React').createElement('div',
{className:p,
'data-ft':this.props['data-ft'],
'data-interaction-root-id':"_34dm"},
c('React').createElement('a',
{className:'UFICommentLink',
onClick:this.props.onClick,
href:'#',
role:'button'},
c('React').createElement(c('UFIImageBlock.react'),null,
c('React').createElement('div',{className:
(v?"UFIReplyActorPhotoWrapper":'')+
(v?' '+"UFIReplyActor":'')},

c('React').createElement('i',
{className:
(!this.props.isExpanded?"UFIPagerIcon":'')+
(this.props.isExpanded?' '+"UFICollapseIcon":'')+
(v?' '+"UFIIconWithActor":'')}),


w),

c('React').createElement('span',{className:o},
c('React').createElement('span',{className:"UFIReplySocialSentenceLinkText"+

(this.props.showVerified?' '+"UFIReplySocialSentenceVerified":'')},

x),

r)))));};





function n(){j.apply(this,arguments);}n.propTypes={author:l.object,contextArgs:l.object.isRequired,'data-ft':l.string,isExpanded:l.bool,isFirstComponent:l.bool,isLastComponent:l.bool,isLoading:l.bool,onClick:l.func,orderingMode:l.string,replies:l.number,showVerified:l.bool,timestamp:l.object};


f.exports=n;}),null);

/** www/__virtual__/x/XUFICommentTooltipController.js */



__d("XUFICommentTooltipController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/comment\/tooltip\/",{ft_ent_identifier:{type:"String",required:true},seen_user_fbids:{type:"IntVector",defaultValue:[]}});}),

null);

/** js/components/UFI/UFICommentCount.react.js */






__d('UFICommentCount.react',['cx','fbt','ActorURI','NumberFormat','React','XUFICommentTooltipController'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,









l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.
$UFICommentCount_getLabelText=function(){
var n=this.props.commentCount,

o=n==1;

if(typeof n==='number')
n=
c('NumberFormat').formatInteger(n);




return i._({"Comment":["{count} Comment","cbdb2da762074bd3838d1887a69254b3"],"Comments":["{count} Comments","56b5c1ef3ac8118d8971cf2f7c84f7ce"]},[i.param

('count',
n),i['enum']




(o?'Comment':'Comments',{Comment:'Comment',Comments:'Comments'})]);};



m.prototype.

render=function(){

var n=
this.props.feedback,


o=

n.entidentifier,p=n.actorforpost,

q=this.$UFICommentCount_getLabelText(),


r="fcg",

s=null;
if(o&&p)
s=c('ActorURI').create
(c('XUFICommentTooltipController').getURIBuilder().
setString('ft_ent_identifier',o).
getURI(),
p);



if(s){

return (c('React').createElement('span',
{'aria-live':'polite',
className:r,
'data-hover':'tooltip',
'data-tooltip-uri':s},
q));}else 



return c('React').createElement('span',{className:r},q);};

function m(){j.apply(this,arguments);}


m.propTypes=
{commentCount:l.oneOfType
([l.number,
l.string]).
isRequired,
feedback:l.object.isRequired};


f.exports=m;}),null);

/** www/__virtual__/x/XUFIShareTooltipController.js */



__d("XUFIShareTooltipController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/share\/tooltip\/",{ft_ent_identifier:{type:"String",required:true},seen_user_fbids:{type:"IntVector",defaultValue:[]}});}),

null);

/** js/components/UFI/UFIShareRow.react.js */






__d('UFIShareRow.react',['cx','fbt','ActorURI','Layout.react','NumberFormat','React','UFICommentCount.react','XUFIShareTooltipController','URI'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,












l=c('Layout.react').Column,
m=c('Layout.react').FillColumn,

n=c('React').PropTypes;j=babelHelpers.inherits

(o,c('React').Component);k=j&&j.prototype;o.prototype.














$UFIShareRow_renderCommentCount=function(){var p=



this.props,q=p.feedback,r=p.shownCommentCount;


if(r&&r!=0)

return (c('React').createElement(c('UFICommentCount.react'),
{feedback:q,
commentCount:r}));




return null;};
o.prototype.

render=function(){
var p=this.props.feedback.sharefbid||
this.props.feedback.targetfbid,
q=
new (c('URI'))('/ajax/shares/view').setQueryData
({target_fbid:p}),


r=
new (c('URI'))('/shares/view').setSubdomain('www').setQueryData
({id:p}),


s=this.props.contextArgs.loggedOutLinkConfig;
if(s&&s.showShareLink)
q=s.shareAjaxifyURI;


var t;
if(this.props.feedback.sharecount>1){
var u=c('NumberFormat').formatInteger
(this.props.feedback.sharecount);

t=i._({"*":["{count} shares","9696c029f506cfe9b61588962911358d"]},
[i.param
('count',
u,[0,
this.props.feedback.sharecount])]);}else 




t=i._(["1 share","831790a2538ecc4cb1b22f1f8438ff6a"]);


var v="UFIRow"+(' '+"UFIShareRow")+


(this.props.isFirstComponent?' '+"_4204":'')+
(this.props.isLastComponent?' '+"_2o9m":''),


w=c('ActorURI').create
(c('XUFIShareTooltipController').getURIBuilder().
setString('ft_ent_identifier',this.props.feedback.entidentifier).
getURI(),
this.props.feedback.actorforpost),


x=
c('React').createElement('a',
{className:'UFIShareLink',
rel:'dialog',
'data-hover':'tooltip',
'data-tooltip-uri':w,
ajaxify:q.toString(),
href:r.toString()},
t),


y=this.$UFIShareRow_renderCommentCount();
if(y)
x=
c('React').createElement(c('Layout.react'),null,
c('React').createElement(m,null,
x),

c('React').createElement(l,null,
y));





return (c('React').createElement('div',{className:v},
x));};


function o(){j.apply(this,arguments);}o.propTypes={contextArgs:n.object.isRequired,feedback:n.object.isRequired,isFirstComponent:n.bool,isLastComponent:n.bool,shownCommentCount:n.oneOfType([n.number,n.string])};


f.exports=o;}),null);

/** js/components/UFI/UFISpamPlaceholder.react.js */






__d('UFISpamPlaceholder.react',['fbt','React','XUISpinner.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.






render=function(){
if(this.props.isLoading)

return (c('React').createElement('div',{className:'UFIRow'},
c('React').createElement('span',{className:'UFISpamCommentWrapper'},
c('React').createElement(c('XUISpinner.react'),
{className:'mls',
background:'light',
size:'small'}))));







return (c('React').createElement('div',{className:'UFIRow'},
c('React').createElement('a',
{href:'#',
role:'button',
className:'UFISpamCommentLink',
onClick:this.props.onClick,
'aria-label':h._(["Show comments marked as spam","930fd22898285cb38478d8a03d8d9d3e"])},



c('React').createElement('span',
{'data-hover':'tooltip',
'data-tooltip-alignh':'center',
'data-tooltip-content':h._({"*":["{count} hidden","b3fe2143f577d394bd992afdf4523085"]},
[h.param
('count',
this.props.numHidden,[0])]),



className:'UFISpamCommentWrapper'},
c('React').createElement('i',{className:'placeholderIcon'})))));};




function l(){i.apply(this,arguments);}l.propTypes={numHidden:k.number.isRequired,isLoading:k.bool,onClick:k.func};


f.exports=l;}),null);

/** js/components/UFI/UFISpamPlaceholderContainer.react.js */





__d('UFISpamPlaceholderContainer.react',['FluxContainer','React','UFISharedDispatcher','UFISpamPlaceholder.react','UFISpamStore','UFIStoryAction'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits
























(j,c('React').Component);i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.





state=
{isLoading:true,
numHidden:0,
onClick:function p(){return null;}},l;}j.getStores=function(){return [c('UFISpamStore')];};j.


calculateState=function(k,l){

var m=



l.contextArgs,n=l.viewas,o=l.comment,p=l.parentCommentID;


return {isLoading:!!c('UFISpamStore').getState()[o.id],
numHidden:o.spamCommentIDs.length,
onClick:function q(){return c('UFISharedDispatcher').dispatch
(c('UFIStoryAction').spamFetched
(m,
n,
o.spamCommentIDs,
p));}};};



j.prototype.

shouldComponentUpdate=function(k,l){
return k.contextArgs!=this.props.contextArgs||
k.viewas!=this.props.viewas||
k.parentCommentID!=this.props.parentCommentID||
l.isLoading!=this.state.isLoading||
l.numHidden!=this.state.numHidden;};
j.prototype.

render=function(){
return c('React').createElement(c('UFISpamPlaceholder.react'),this.state);};



f.exports=c('FluxContainer').create(j,
{pure:true,
withProps:true});}),null);

/** js/components/UFI/UFITranslateAllRow.react.js */





__d('UFITranslateAllRow.react',['cx','ContentTranslationStrings','Link.react','React','UFIInstanceAction','UFISharedDispatcher'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits















(k,c('React').Component);j=i&&i.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.












$UFITranslateAllRow_onTranslateAll=function(){
c('UFISharedDispatcher').dispatch
(c('UFIInstanceAction').translateAll(this.props.contextArgs));}.

bind(this),m;}k.prototype.render=function(){return c('React').createElement('div',{className:"UFIRow"},c('React').createElement('div',{className:"_4upo"},c('React').createElement(c('Link.react'),{onClick:this.$UFITranslateAllRow_onTranslateAll},c('ContentTranslationStrings').TRANSLATE_ALL_TEXT)));};


f.exports=k;}),null);

/** js/components/UFI/StaticUFI.react.js */




__d('StaticUFI.react',['csx','cx','invariant','Arbiter','BanzaiODS','BlueBar','BootloadOnRender.react','DOM','Event','FbFeedCommentUFIScroller','FluxContainer','JSResource','LazyComponent.react','LogHistory','Parent','React','ReactDOM','SearchableEntry','SubscriptionsHandler','TrackingNodes','UFIAcceptedAnswerStore','UFIAddComment.react','UFIAddCommentLink.react','UFIAnimatedCommentList.react','UFIComment.react','UFICommentDisabledNotice.react','UFICommentEditIDStore','UFICommentFilters','UFICommentHeader.react','UFICommentListVisibilityTracker.react','UFIComments','UFICommentScrollableArea.react','UFICommercialBreakStore','UFIComponentLogger.react','UFIComponents','UFIConfig','UFIConstants','UFIContainer.react','UFIInteractionStore','UFILikeSentence.react','UFILivePinnedCommentStore','UFILiveTypingIndicatorContainer.react','UFILocallyComposedCommentStore','UFIOrderingModeStore','UFIPagerGenerator','UFIPaging','UFIReplySocialSentence.react','UFIShareRow.react','UFISpamPlaceholderContainer.react','UFIStoryAction','UFITranslateAllRow.react','URI','XUISpinner.react','distinctArrayBy','emptyFunction','getElementPosition','getElementRect','getUnboundedScrollPosition','ifRequired','shallowEqual','throttle'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,
























































m=
c('UFIConfig').UFICommentFilterFallbackWarning||null,














n=c('UFIConstants').UFIFeedbackSourceType,
o=c('UFIConstants').UFIPayloadSourceType,
p=c('UFIConstants').UFIStatus,


q=c('React').PropTypes,

r=
c('React').createElement('div',{className:"UFICommentsLoadingSpinnerContainer _48pi UFIRow"},

c('React').createElement(c('XUISpinner.react'),
{size:'large'})),



s=
c('React').createElement('div',
{className:"_xtv _32k4",
role:'presentation'},
c('React').createElement('i',null));k=babelHelpers.inherits







(t,c('React').Component);l=k&&k.prototype;

























function t(u){
l.constructor.call(this,u);this.
































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































loadMoreComments=function(){



if(this.$StaticUFI_isMounted&&
this.refs.topLevelBottomPager&&
!(this.props.contextArgs.ftentidentifier in this.props.isActiveLoading)){

var w=c('ReactDOM').findDOMNode(this.refs.topLevelBottomPager),

x=c('getUnboundedScrollPosition')(window).y,
y=x+
document.documentElement.clientHeight+
c('UFIConstants').infiniteScrollRangeForQANDAPermalinks;
if(w.offsetHeight&&w.offsetTop<y)
this.refs.topLevelBottomPager.props.onPagerClick();}}.


bind(this);this.

onComment=function(){
var w=
[function(){return this.refs.toplevelcomposer;}.bind(this),




function(){return this.$StaticUFI_findComposerNode
(c('Parent').byTag
(c('ReactDOM').findDOMNode(this),
'form'));}.bind(this),




function(){return this.$StaticUFI_findComposerNode
(c('Parent').bySelector
(c('ReactDOM').findDOMNode(this),
"._3g6d"));}.bind(this)],




x=w.reduce
(function(y,z){return y||z();},
null);


if(x){
x.focus();
c('FbFeedCommentUFIScroller').reveal
(c('ReactDOM').findDOMNode(x));}}.


bind(this);var v=this.props.focusReply;this.state={acceptedAnswerState:{type:'NoneAccepted'},focusReply:v,viewerHasClickedCommentComposer:false,viewerHasClickedSeeMore:false,editcommentid:c('UFICommentEditIDStore').getForInstance(this.props.contextArgs.instanceid),localCommentIDs:c('UFILocallyComposedCommentStore').getStateForInstance(this.props.contextArgs.instanceid),inCommercialBreak:c('UFICommercialBreakStore').getValueFor(this.props.contextArgs.instanceid)};}t.getStores=function(){return [c('UFIAcceptedAnswerStore')];};t.calculateState=function(u,v){var w=v.contextArgs,x=v.feedback,y=c('UFIAcceptedAnswerStore').get(w.ftentidentifier,x.acceptedanswer);return babelHelpers['extends']({},u,{acceptedAnswerState:y});};t.prototype.componentDidMount=function(){this.$StaticUFI_isMounted=true;c('Arbiter').inform('UFI/displayDone-'+this.props.contextArgs.instanceid);this.$StaticUFI_subscriptions=new (c('SubscriptionsHandler'))();if(this.props.feedback.isqanda&&this.props.feedback.infinitescroll){var u=c('throttle')(this.loadMoreComments,20);this.$StaticUFI_subscriptions.addSubscriptions(c('Event').listen(window,'scroll',u),c('Event').listen(window,'resize',u));}this.$StaticUFI_resolveFocus();this.$StaticUFI_subscriptions.addSubscriptions(c('UFICommentEditIDStore').addListener(function(){this.setState({editcommentid:c('UFICommentEditIDStore').getForInstance(this.props.contextArgs.instanceid)});}.bind(this)),c('UFILocallyComposedCommentStore').addListener(function(){this.setState({localCommentIDs:c('UFILocallyComposedCommentStore').getStateForInstance(this.props.contextArgs.instanceid)});}.bind(this)),c('UFICommercialBreakStore').addListener(function(){this.setState({inCommercialBreak:c('UFICommercialBreakStore').getValueFor(this.props.contextArgs.instanceid)});}.bind(this)));};t.prototype.componentWillReceiveProps=function(u){if(this.props.focusReply!==u.focusReply)this.setState({focusReply:u.focusReply});};t.prototype.componentWillUnmount=function(){this.$StaticUFI_isMounted=false;this.$StaticUFI_subscriptions&&this.$StaticUFI_subscriptions.release();};t.prototype.shouldComponentUpdate=function(u,v){var w=this.props,x=this.state;return !c('shallowEqual')(x,v)||!c('shallowEqual')(x.loadingSpamIDs,v.loadingSpamIDs)||!c('shallowEqual')(x.localCommentIDs,v.localCommentIDs)||!c('shallowEqual')(x.inCommercialBreak,v.inCommercialBreak)||!c('shallowEqual')(w,u)||!c('shallowEqual')(w.feedback,u.feedback)||!c('shallowEqual')(w.repliesMap,u.repliesMap)||!c('shallowEqual')(w.commentCounts,u.commentCounts)||!c('shallowEqual')(w.deletedCounts,u.deletedCounts)||!c('shallowEqual')(w.availableComments,u.availableComments)||!c('shallowEqual')(w.ranges,u.ranges)||!c('shallowEqual')(w.authorProfiles,u.authorProfiles)||!c('shallowEqual')(w.commentPermalinks,u.commentPermalinks)||!c('shallowEqual')(w.canAddCommentMap,u.canAddCommentMap)||!c('shallowEqual')(w.canReplyMap,u.canReplyMap)||!c('shallowEqual')(w.isActiveLoading,u.isActiveLoading)||!c('shallowEqual')(w.allSeenActiveLoadDirectionData,u.allSeenActiveLoadDirectionData)||!c('shallowEqual')(w.repliesExpandedMap,u.repliesExpandedMap)||!c('shallowEqual')(w.loadingTranslationsMap,u.loadingTranslationsMap);};t.prototype.componentWillUpdate=function(u,v){this.$StaticUFI_maintainOffset=this.$StaticUFI_maintainOffset||!this.$StaticUFI_isUserDrivenPayloadSource(this.props.payloadSource)&&this.props.source===n.NEWS_FEED&&c('BlueBar').hasFixedBlueBar();if(this.$StaticUFI_maintainOffset&&!this.$StaticUFI_oldBoundingClientRect)this.$StaticUFI_oldBoundingClientRect=c('getElementRect')(c('ReactDOM').findDOMNode(this));};t.prototype.componentDidUpdate=function(u,v){this.$StaticUFI_resolveFocus(u);if(this.$StaticUFI_maintainOffset&&this.$StaticUFI_oldBoundingClientRect){var w=this.$StaticUFI_getOffsetOfRender(this.$StaticUFI_oldBoundingClientRect);if(w!==null)c('Arbiter').inform('ufi/didUpdate',{offsetY:w});this.$StaticUFI_maintainOffset=false;this.$StaticUFI_oldBoundingClientRect=null;}};t.prototype.$StaticUFI_isUserDrivenPayloadSource=function(u){return u===o.UNKNOWN||u===o.INITIAL_SERVER||u===o.USER_ACTION||u===o.COLLAPSE_ACTION;};t.prototype.$StaticUFI_getOffsetOfRender=function(u){var v=c('getElementPosition')(c('BlueBar').getMaybeFixedRoot());if(u.bottom<v.height){var w=u.bottom-u.top;return c('ReactDOM').findDOMNode(this).offsetHeight-w;}return null;};t.prototype.$StaticUFI_getCommentCountForSentence=function(){var u=this.props,v=u.contextArgs,w=u.commentCounts,x=u.deletedCounts,y=u.feedback,z=y.commentcountreduced,aa=v.ftentidentifier,ba=null;if(this.$StaticUFI_hasComments())if(z&&isNaN(z)){ba=z;}else ba=w[aa]-x[aa];return ba;};t.prototype.$StaticUFI_resolveFocus=function(u){if(this.props.loadingComments)return;if(this.props.focusTopLevelComposer)this.onComment();if(this.state.focusReply){var v=this.state.focusReply,w=v.replyID,x=v.initiatorComment;if(!(w in this.refs))return;var y=this.refs[w]&&this.refs[w].refs&&this.refs[w].refs.mentionsinput;if(!y)return;y.focus();c('FbFeedCommentUFIScroller').reveal(c('ReactDOM').findDOMNode(y));this.setState({focusReply:null});if(!x)return;var z=y.hasEnteredText(),aa=x.author===this.props.feedback.actorforpost,ba=!!x.parentcommentid;if(!z&&!aa&&ba)y.insertMention(this.$StaticUFI_createMentionEntry(x.author));}};t.prototype.$StaticUFI_createMentionEntry=function(u){var v=this.props.authorProfiles[u],w=v.type;return new (c('SearchableEntry'))({uniqueID:v.id,title:v.name,type:w==='friend'?'user':w});};t.prototype.$StaticUFI_isAds=function(){return this.props.source===n.ADS;};t.prototype.$StaticUFI_isLiveVideoPlayer=function(){return this.props.source===n.LIVE_VIDEO;};t.prototype.$StaticUFI_isSnowlift=function(){var u=this.props.contextArgs,v=u.feedcontext&&JSON.parse(u.feedcontext);return !!(v&&v.is_snowlift);};t.prototype.$StaticUFI_isCompactSearch=function(){return this.props.source===n.COMPACT_SEARCH;};t.prototype.$StaticUFI_showsLikeSentenceOrderingModeSelector=function(){var u=this.props,v=u.hideOrderingModeSelector,w=u.feedback,x=u.commentCounts,y=u.contextArgs;return !v&&w.orderingmodes&&!this.$StaticUFI_isCompactSearch()&&x[y.ftentidentifier]>=c('UFIConstants').minCommentsForOrderingModeSelector;};t.prototype.$StaticUFI_isShowingAllTopLevelComments=function(){var u=this.props,v=u.contextArgs,w=u.ranges,x=v.ftentidentifier,y=w[x].getLength();return this.$StaticUFI_isShowingAllComments(x,y);};t.prototype.$StaticUFI_isShowingAllComments=function(u,v){var w=this.props.commentCounts;return w[u]==v;};t.prototype.$StaticUFI_showsLikeSentenceSeenBy=function(){var u=this.props,v=u.contextArgs,w=u.feedback;return w.seencount>0&&!v.entstream;};t.prototype.$StaticUFI_hasValidSocialSentenceText=function(){return c('UFILikeSentence.react').rendersSocialSentence(this.props);};t.prototype.$StaticUFI_isBlacklistedFromHavingLikeSentenceRow=function(){var u=this.props,v=u.contextArgs,w=u.feedback;return this.$StaticUFI_isAds()||this.$StaticUFI_isLiveVideoPlayer()||v.search||this.hasReactions(w,v);};t.prototype.$StaticUFI_hasLikeSentenceRow=function(){if(this.$StaticUFI_isBlacklistedFromHavingLikeSentenceRow())return false;return this.$StaticUFI_hasValidSocialSentenceText()||this.$StaticUFI_showsLikeSentenceSeenBy()||this.$StaticUFI_showsLikeSentenceOrderingModeSelector();};t.prototype.$StaticUFI_hasShares=function(){var u=this.props,v=u.contextArgs,w=u.feedback;if(this.$StaticUFI_isAds())return false;return v.showshares&&w.sharecount&&!this.hasReactions(w,v);};t.prototype.$StaticUFI_hasShareRow=function(){return this.$StaticUFI_hasShares()&&!this.props.contextArgs.entstream;};t.prototype.$StaticUFI_hasComments=function(){if(this.$StaticUFI_isAds()||this.$StaticUFI_isCompactSearch())return false;var u=this.props.availableComments;return !!(u&&u.length);};t.prototype.$StaticUFI_hasAddCommentView=function(){var u=this.props,v=u.canAddCommentMap,w=u.contextArgs,x=u.feedback;return x.cancomment&&w.showaddcomment&&x.actorforpost&&v[w.ftentidentifier];};t.prototype.$StaticUFI_hasAddCommentLink=function(){return this.$StaticUFI_hasAddCommentView()&&this.$StaticUFI_hasCommentOrderInverted()&&this.props.hasPagedToplevel;};t.prototype.$StaticUFI_hasAddCommentDisabledNotice=function(){var u=this.props.feedback;return u.arecommentsdisabled===true&&u.cancomment===false;};t.prototype.$StaticUFI_showsShareRowCommentCount=function(){if(!this.$StaticUFI_hasShareRow())return false;var u=this.props.contextArgs.isPermalink,v=u?this.$StaticUFI_getCommentCountForSentence():null;return v&&v!='0';};t.prototype.$StaticUFI_renderShareRow=function(){if(!this.$StaticUFI_hasShareRow())return null;var u=this.props,v=u.contextArgs,w=u.feedback,x=this.$StaticUFI_showsShareRowCommentCount()?this.$StaticUFI_getCommentCountForSentence():null;return c('React').createElement(c('UFIShareRow.react'),{contextArgs:v,feedback:w,shownCommentCount:x});};t.prototype.$StaticUFI_renderLikeSentence=function(){var u=this.props,v=u.feedback,w=u.contextArgs;if(this.$StaticUFI_hasLikeSentenceRow())return c('React').createElement(c('UFILikeSentence.react'),{contextArgs:w,feedback:v,showOrderingModeSelector:this.$StaticUFI_showsLikeSentenceOrderingModeSelector(),key:'ufi_like_sentence'});return null;};t.prototype.render=function(){var u=this.props,v=u.feedback,w=u.contextArgs,x=this.$StaticUFI_hasAddCommentDisabledNotice(),y=this.$StaticUFI_hasShares(),z=this.$StaticUFI_renderLikeSentence(),aa=!!z,ba=x?c('React').createElement(c('UFICommentDisabledNotice.react'),{feedback:u.feedback}):null,ca=this.$StaticUFI_renderShareRow();if(u.loadingComments)return c('React').createElement(c('UFIContainer.react'),{shouldHide:this.state.inCommercialBreak},z,ca,r);var da=this.$StaticUFI_hasComments(),ea=u.ranges[w.ftentidentifier],fa=u.loggingOffset-ea.getOffset(),ga=v.targetiscomment,ha=da?this.renderCommentArray(u.availableComments,fa,ga,null):null,ia=null,ja=null,ka=v.cancomment,la=aa||y||da||ka,ma=null,na=this.state.acceptedAnswerState.id,oa=c('UFILivePinnedCommentStore').getPinnedCommentID(w.ftentidentifier)||na;if(oa){var pa=c('UFIComments').getComment(oa);if(!u.authorProfiles[pa.author]){c('BanzaiODS').bumpEntityKey('unsampled_feedback','missing_pinned_comment_author');}else if(na&&na===this.state.editcommentid){ma=this.renderEditCommentBox(pa);}else ma=this.renderComment(pa,0,false,false,na===oa,false,true,!!this.props.loadingTranslationsMap[pa.id]);}var qa=la?c('React').createElement(c('UFICommentHeader.react'),null):null;if(this.$StaticUFI_hasAddCommentView()||w.loggedOutLinkConfig&&w.loggedOutLinkConfig.showAddComment){var ra=this.$StaticUFI_shouldShowCommentInput();if(ra){var sa=c('UFIOrderingModeStore').isLiveStreaming(w.instanceid);if(!w.islivestreaming||!sa)ia=c('React').createElement(c('UFILiveTypingIndicatorContainer.react'),{contextArgs:w,feedbackTargetID:v.targetfbid});ja=c('React').createElement(c('UFIAddComment.react'),{viewerActorID:v.actorforpost,replyCommentID:null,targetID:v.ownerid,initialData:null,ref:'toplevelcomposer',withoutSeparator:null,editingComment:{},isEditing:false,mentionsDataSource:v.mentionsdatasource,showSendOnEnterTip:v.showsendonentertip,multiCompanyGroupsCount:v.multicompanygroupscount,allowVideoAttachments:v.allowvideoattachments&&!sa,allowPhotoAttachments:v.allowphotoattachments&&!sa,allowStickerAttachments:v.allowstickerattachments&&!sa,allowGifAttachments:v.allowgifattachments&&!sa,allowTipJar:v.istipjarenabled&&sa,contextArgs:w,subtitle:v.subtitle,isQAndA:v.isqanda,markViewerHasInteracted:this.state.viewerHasClickedCommentComposer?c('emptyFunction'):function(){return this.setState({viewerHasClickedCommentComposer:true});}.bind(this),allowCommentMarkdown:v.iscommentmarkdowneligible,keepFocus:sa});}}var ta=w.ftentidentifier,ua=this.renderPagers(ta,false,u.ranges[ta].getOffset(),u.ranges[ta].getLength()),va=ua.topPager,wa=ua.bottomPager,xa=this.$StaticUFI_hasCommentOrderInverted()?ia:null,ya=this.$StaticUFI_hasCommentOrderInverted()?null:ia,za=this.$StaticUFI_renderCommentFilterWarnings(ta,va,wa),ab=za.topFilterWarning,bb=za.bottomFilterWarning,cb=c('UFIComponents').applyToUFIComponents([xa,va,ab].concat(ha,[bb,wa,ya]),{isFirstCommentComponent:true},{isLastCommentComponent:true}),db=cb.slice(0,3);xa=db[0];va=db[1];ab=db[2];var eb=cb.slice(-3);bb=eb[0];wa=eb[1];ya=eb[2];ha=cb.slice(3,-3);var fb=this.$StaticUFI_hasCommentOrderInverted()?ja:null,gb=this.$StaticUFI_hasCommentOrderInverted()?null:ja,hb=this.$StaticUFI_hasAddCommentLink()?c('React').createElement(c('UFIAddCommentLink.react'),{onClick:this.onComment,isQAndA:v.isqanda,isGroupQA:w.isaskquestion}):null,ib=true,jb=null;if(w.showCommentNuxForGroupMallAds)jb=c('React').createElement(c('BootloadOnRender.react'),{loader:c('JSResource')('UFICommentNuxForGroupMallAds.react').__setRef('StaticUFI.react'),placeholder:c('React').createElement('div',null),component:c('React').createElement(c('LazyComponent.react'),{commentNuxContent:w.groupMallAdsCommentNuxContent})});cb=c('UFIComponents').applyToUFIComponents([z,ca,fb,va,ab].concat(ha,[bb,wa,gb,hb]),{isFirstComponent:ib},{isLastComponent:true});var kb=cb.slice(0,5);z=kb[0];ca=kb[1];fb=kb[2];va=kb[3];ab=kb[4];var lb=cb.slice(-4);bb=lb[0];wa=lb[1];gb=lb[2];hb=lb[3];ha=cb.slice(5,-4);var mb=!!c('UFIInteractionStore').getValueFor(w.instanceid);if(w.enableFacecastAnimatedComments&&c('UFIOrderingModeStore').isLiveStreaming(w.instanceid))ha=c('ifRequired')('ReactTransitionGroup',function(pb){if(!u.availableComments||!u.availableComments.length)return ha;var qb=w.isBroadcasterUFI,rb=qb?u.availableComments[u.availableComments.length-1]:u.availableComments[0];return c('React').createElement(pb,{component:'div',className:"_3s3y"},c('React').createElement(c('UFIAnimatedCommentList.react'),{key:c('UFIComments').getRenderKey(rb.id),isLatestCommentLocal:Boolean(rb.islocal),isStreamingFromBottom:qb},ha));},function(){return ha;});var nb=null;if(this.state.acceptedAnswerState.type==='Accepted'){var ob=c('UFIComments').getComment(this.state.acceptedAnswerState.id);nb=this.renderReplyContainer(ob);}return c('React').createElement(c('UFIContainer.react'),{shouldHide:this.state.inCommercialBreak},w.shownub&&la?s:null,z,ca,qa,jb,fb,c('React').createElement(c('UFICommentListVisibilityTracker.react'),{contextArgs:w},c('React').createElement(c('UFICommentScrollableArea.react'),{scrollcomments:!!w.scrollcomments,scrollwidth:w.scrollwidth||0},c('React').createElement(c('UFIComponentLogger.react'),{contextArgs:w,feedback:v,hasComments:da,isPermalink:w.isPermalink,viewerHasInteractedWithComments:mb||this.state.viewerHasClickedCommentComposer||this.state.viewerHasClickedSeeMore},xa,va,ab,w.isBroadcasterUFI?null:ma,nb,ha,w.isBroadcasterUFI?ma:null,bb,wa,ya))),gb,hb,ba);};t.prototype.$StaticUFI_shouldShowCommentInput=function(){return this.state.editcommentid===null;};t.prototype.renderCommentArray=function(u,v,w,x){var y=this.props,z=y.contextArgs,aa=this.props.feedback;if(!u.length)return [];u=c('distinctArrayBy')(u,function(ca){return ca.id;});u=u.filter(function(ca){return ca.id!=this.state.acceptedAnswerState.id;}.bind(this));var ba=c('UFICommentFilters').collectSpamBuckets(u,y.authorProfiles);return ba.reduce(function(ca,da,ea){if(!da)return ca;if(c('UFICommentFilters').isSpam(da)){ca.push(c('React').createElement(c('UFISpamPlaceholderContainer.react'),{key:'spam'+da.id,contextArgs:z,viewas:z.viewas,comment:da,parentCommentID:x}));}else{if(da.id==this.state.editcommentid){ca.push(this.renderEditCommentBox(da));}else{var fa=Math.max(v-ea,0),ga=ea===0,ha=ea===ba.length-1,ia=!w&&!aa.arecommentsdisabled,ja=w&&!ga;ca.push(this.renderComment(da,fa,ga,ha,ia,ja,false,!!this.props.loadingTranslationsMap[da.id]));if(da.id==this.props.translateAllCommentID&&!c('UFIOrderingModeStore').isLiveStreaming(z.instanceid))ca.push(c('React').createElement(c('UFITranslateAllRow.react'),{key:'translateAll'+da.id,contextArgs:z}));}if(!w&&!c('UFICommentFilters').isDeleted(da)&&!c('UFIOrderingModeStore').isLiveStreaming(z.instanceid)){var ka=this.renderReplyContainer(da);if(ka)ca.push(ka);}}return ca;}.bind(this),[]);};t.prototype.renderReplyContainer=function(u){var v=this.props,w=v.commentCounts[u.id],x=v.repliesExpandedMap[u.id],y=!x&&u.interestingReplyId,z=v.ranges[u.id],aa=void 0,ba=void 0;if(x||u.interestingReplyId){aa=v.repliesMap[u.id];ba=z.getOffset();if(y){var ca=aa.filter(function(bb){return bb.id===u.interestingReplyId;});if(ca.length!==1){c('LogHistory').getInstance('ufi').error('comment '+u.id+' claims to have an interesting reply, '+'but there is not exactly 1 comment with that id in the reply '+'list.');aa=null;}else{aa=ca;ba=u.interestingReplyOffset;}}}var da=void 0,ea=null,fa=null,ga=null,ha=null;if(aa){var ia=z.getOffset(),ja=z.getLength();if(y){ia=ba;ja=1;}var ka=this.renderPagers(u.id,true,ia,ja);ea=ka.topPager;fa=ka.bottomPager;var la=v.loggingOffset-ba;da=this.renderCommentArray(aa,la,true,u.id);var ma=this.$StaticUFI_renderReplyFilterWarnings(u.id,ea,fa);ga=ma.topFilterWarning;ha=ma.bottomFilterWarning;}var na=Math.max(w-u.spamreplycount,0),oa=void 0;if(!c('UFIOrderingModeStore').isLiveStreaming(this.props.contextArgs.instanceid)&&na&&(x&&aa&&aa.length>v.replySocialSentenceMaxReplies||!x&&!aa)){var pa=z.isLoadingPrev()||z.isLoadingNext(),qa=x&&!ea&&pa,ra=null;if(u.replyauthors&&u.replyauthors.length)ra=v.authorProfiles[u.replyauthors[0]];oa=c('React').createElement(c('UFIReplySocialSentence.react'),{contextArgs:v.contextArgs,author:ra,replies:x?aa.length:na,timestamp:u.recentreplytimestamp,onClick:function(){return this.context.dispatch(c('UFIStoryAction').toggleReplies(v.contextArgs,u.id));}.bind(this),isLoading:qa,isExpanded:x,showVerified:v.feedback.showfeaturedreplies,orderingMode:v.orderingMode});}var sa=void 0;if(x)if(u.cancomment&&v.canAddCommentMap[u.id]){var ta=false;if(da)for(var ua=da.length-1;ua>=0;ua--)if(da[ua]){ta=da[ua].props.isAuthorReply;break;}sa=this.renderReplyComposer(u,!ta);}var va=void 0;if(oa||ea||ga||da||ha||fa||sa){var wa=c('UFIComponents').applyToUFIComponents([oa,ea,ga].concat(da,[ha,fa,sa]),{isFirstComponent:true},{isLastComponent:true}),xa=wa.slice(0,3);oa=xa[0];ea=xa[1];ga=xa[2];var ya=wa.slice(-3);ha=ya[0];fa=ya[1];sa=ya[2];da=wa.slice(3,-3);var za=u.status===p.LIVE_DELETED,ab=this.state.acceptedAnswerState.type==='Accepted'&&u.id===this.state.acceptedAnswerState.id;va=c('React').createElement(c('UFIContainer.react'),{key:'replies'+u.id,isParentLiveDeleted:za,isReplyList:true,isAcceptedAnswerReply:ab},oa,ea,ga,da,ha,fa,sa);}return va;};t.prototype.renderReplyComposer=function(u,v){var w=this.props,x=w.contextArgs,y=w.feedback,z=this.state.editcommentid!==null,aa=z&&!u.id;if(aa)return null;var ba=c('UFIOrderingModeStore').isLiveStreaming(x.instanceid);return c('React').createElement(c('UFIAddComment.react'),{viewerActorID:y.actorforpost,replyCommentID:u.id,targetID:y.ownerid,initialData:null,ref:'replycomposer-'+u.id,withoutSeparator:v,editingComment:{},isEditing:false,mentionsDataSource:y.mentionsdatasource,showSendOnEnterTip:false,allowVideoAttachments:y.allowvideoattachments&&!ba,allowPhotoAttachments:y.allowphotoattachments&&!ba,allowStickerAttachments:y.allowstickerattachments&&!ba,allowGifAttachments:y.allowgifattachments&&!ba,allowCommentMarkdown:y.iscommentmarkdowneligible,contextArgs:x,subtitle:y.subtitle,isQAndA:y.isqanda});};t.prototype.renderEditCommentBox=function(u){var v=this.props,w=v.contextArgs,x=v.feedback,y=babelHelpers['extends']({},w);delete y.addcommentautoflip;delete y.collapseaddcomment;delete y.hideActorPhoto;delete y.issnowlift;delete y.loggedOutLinkConfig;delete y.monitorHeight;delete y.sht;delete y.viewoptionstypeobjects;delete y.viewoptionstypeobjectsorder;return c('React').createElement(c('UFIAddComment.react'),{key:'editing_comment'+u.id,viewerActorID:x.actorforpost,targetID:x.ownerid,mentionsDataSource:x.mentionsdatasource,contextArgs:y,isEditing:true,editingComment:u,allowVideoAttachments:x.allowvideoattachments,allowPhotoAttachments:x.allowphotoattachments,allowStickerAttachments:x.allowstickerattachments,allowGifAttachments:x.allowgifattachments,isQAndA:x.isqanda});};t.prototype.renderComment=function(u,v,w,x,y,z,aa,ba){var ca=this.props,da=ca.feedback,ea=da.actorforpost===u.author,fa=u.islocal||this.state.localCommentIDs[u.id],ga=da.showremovemenu||da.viewerid===u.author,ha=da.canremoveall&&da.isownerpage&&!ea,ia=ca.source!=n.INTERN,ja=!!u.parentcommentid,ka=true;if(ja&&u.parentcommentid in this.props.canReplyMap&&this.props.canReplyMap[u.parentcommentid]!==null)ka=this.props.canReplyMap[u.parentcommentid];var la=!!u.isfeatured,ma=c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.COMMENT,v),na=new (c('URI'))(ca.commentPermalinks[u.id]).addQueryData({comment_tracking:ma}).toString();return c('React').createElement(c('UFIComment.react'),{key:c('UFIComments').getRenderKey(u.id),isFirst:w,isLast:x,showReplyLink:y,hasPartialBorder:z,comment:u,authorProfiles:ca.authorProfiles,viewerIsAuthor:ea,feedback:da,'data-ft':ma,contextArgs:ca.contextArgs,hideAsSpamForPageAdmin:ha,isLocallyComposed:fa,isFeatured:la,parentCanComment:ka,permalink:na,showPermalink:ia,showRemoveReportMenu:ga,focusOnMount:u.id===ca.commentIDToFocusOnMount,orderingMode:ca.orderingMode,featuredCommentIDs:ca.featuredCommentIDs,markViewerHasInteracted:this.state.viewerHasClickedSeeMore?c('emptyFunction'):function(){return this.setState({viewerHasClickedSeeMore:true});}.bind(this),isLivePinnedComment:aa,showTranslation:ba||!!u.translationdata});};t.prototype.$StaticUFI_renderCommentFilterWarnings=function(u,v,w){return this.$StaticUFI_renderFilterWarningsImpl(u,v,w,false);};t.prototype.$StaticUFI_renderReplyFilterWarnings=function(u,v,w){return this.$StaticUFI_renderFilterWarningsImpl(u,v,w,true);};t.prototype.$StaticUFI_renderFilterWarningsImpl=function(u,v,w,x){var y=null,z=null;if(!v)y=this.$StaticUFI_renderSingleFilterWarningImpl(u,c('UFIPaging').TOP,x);if(!w)z=this.$StaticUFI_renderSingleFilterWarningImpl(u,c('UFIPaging').BOTTOM,x);return {topFilterWarning:y,bottomFilterWarning:z};};t.prototype.$StaticUFI_renderSingleFilterWarningImpl=function(u,v,w){var x=this.props.allSeenActiveLoadDirectionData;if(!x)return null;var y=x[u];if(!y||!(v in y))return null;var z=this.props;if(!m||!m.shouldRender(z,u,v,w))return null;return c('React').createElement(m,{asReplyWarning:w,targetID:u,pagingDirection:v,ufiProps:z});};t.prototype.renderPagers=function(u,v,w,x){var y=this.props;if(this.$StaticUFI_isShowingAllComments(u,x)||this.$StaticUFI_isAds()||this.$StaticUFI_isCompactSearch()||!v&&y.hideToplevelPager)return {topPager:null,bottomPager:null};Number.isInteger(y.commentCounts[u])||j(0,'must be an integer');Number.isInteger(y.deletedCounts[u])||j(0,'must be an integer');Number.isInteger(x)||j(0,'must be an integer');return c('UFIPagerGenerator').renderPagers({commentCount:y.commentCounts[u],contextArgs:y.contextArgs,currentLength:x,currentOffset:w,deletedCount:y.deletedCounts[u],feedback:y.feedback,onPageCallback:function(z,aa){this.context.dispatch(c('UFIStoryAction').pageInComments(y.contextArgs,u,z,aa));}.bind(this),orderingMode:y.orderingMode,range:y.ranges[u],targetID:u});};t.prototype.

$StaticUFI_findComposerNode=function(u){
if(!u)
return null;

return c('DOM').scry(u,'[name="add_comment_text_text"]').
concat(c('DOM').scry(u,'[name="add_comment_text"]')).
find(function(v){return !c('Parent').byClass(v,'UFIReplyList');});};
t.prototype.

$StaticUFI_hasCommentOrderInverted=function(){
return c('UFIOrderingModeStore').isInverted(this.props.orderingMode);};
t.prototype.

hasReactions=function(u,v){

return (u.displayreactions&&
v.hasReactions&&
(v.feedbackMode==='none'||
v.feedbackMode==='toggle'));};

t.contextTypes={dispatch:q.func};t.defaultProps={commentIDToFocusOnMount:null,focusReply:null,canReplyMap:{},isActiveLoading:{},repliesExpandedMap:{},hasPagedToplevel:false,loadingSpamIDs:{},loadingTranslationsMap:{}};



f.exports=c('FluxContainer').create(t,{withProps:true});}),null);

/** js/components/UFI/UFIBlingBox.react.js */







__d('UFIBlingBox.react',['cx','fbt','NumberFormat','React','UFIBlingItem.react','UFIReactionTypes'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,











l=c('React').PropTypes;j=babelHelpers.inherits






















(m,c('React').Component);k=j&&j.prototype;m.prototype.



















render=function(){
var n=[],
o='',p=







this.props,q=p.likes,r=p.likesreduced,s=p.reactionCount,t=p.reactionCountMap,u=p.reactionCountReduced;

if(q||s){
var v=
t&&
t[c('UFIReactionTypes').LIKE]['default']!==s;

n.push
(c('React').createElement(c('UFIBlingItem.react'),
{className:n.length>0?"mls":'',
contextArgs:this.props.contextArgs,
count:v?s:q,
countreduced:v?u:r,
iconClassName:'UFIBlingBoxLikeIcon',
itemKey:v?'reaction':'like',
key:'like'}));



o+=this.props.likes==1?i._(["1 like","dc8521b713c157bc7ee091a74138919c"]):i._({"*":["{count} likes","6cba16e9f77da489bbfe952f119ea246"]},



[i.param('count',this.props.likes,[0])]);



o+=' ';}


if(this.props.comments){
var w=this.props.commentsreduced;
if(this.props.contextArgs.islivestreaming)

w=c('NumberFormat').formatInteger(this.props.comments);

n.push
(c('React').createElement(c('UFIBlingItem.react'),
{className:n.length>0?"mls":'',
contextArgs:this.props.contextArgs,
count:this.props.comments,
countreduced:w,
iconClassName:'UFIBlingBoxCommentIcon',
itemKey:'comment',
key:'comment'}));



o+=this.props.comments==1?i._(["1 comment","759618e2e036fff619b84d2b50438418"]):i._({"*":["{count} comments","7e902db29f60e286733432b42b9dcbd5"]},



[i.param('count',this.props.comments,[0])]);



o+=' ';}


if(this.props.reshares){
n.push
(c('React').createElement(c('UFIBlingItem.react'),
{className:n.length>0?"mls":'',
contextArgs:this.props.contextArgs,
count:this.props.reshares,
countreduced:this.props.resharesreduced,
iconClassName:'UFIBlingBoxReshareIcon',
itemKey:'reshare',
key:'reshare'}));



o+=this.props.reshares==1?i._(["1 share","296182154020d794cc03c575d75598a3"]):i._({"*":["{count} shares","f4674047ec36e22689a81b502b91638d"]},



[i.param('count',this.props.reshares,[0])]);}


if(this.props.readOnly){

return (c('React').createElement('span',
{'aria-label':o},
n));}else{



var x=this.props.contextArgs.commentajaxify;

return (c('React').createElement('a',
{ajaxify:x,
href:this.props.permalink,
'data-ft':this.props['data-ft'],
'data-comment-prelude-ref':this.props['data-comment-prelude-ref'],
'aria-label':o,
onClick:this.props.onClick,
rel:x?'dialog':'ignore'},
n));}};



function m(){j.apply(this,arguments);}m.propTypes={contextArgs:l.object.isRequired,'data-ft':l.string,'data-comment-prelude-ref':l.string,comments:l.number,commentsreduced:l.string,likes:l.number,likesreduced:l.string,nfb:l.number,onClick:l.func,permalink:l.string,reactionCount:l.number,reactionCountMap:l.object,reactionCountReduced:l.string,reshares:l.number,resharesreduced:l.string,readOnly:l.bool};


f.exports=m;}),null);

/** js/reactions/UFIReactionsBlingSocialSentence.react.js */






__d('UFIReactionsBlingSocialSentence.react',['cx','fbt','ActorURI','BanzaiLogger','Bootloader','BootloadOnRender.react','FeedbackSourceType','JSResource','LazyComponent.react','NumberFormat','PagesPrivateReplyConstants','React','Tooltip.react','UFIPrivateReplyIndicator.react','UFIReactionsSocialSentence.react','URI','XUFICommentTooltipController','XUFIGroupSeenByProfileDialogController','XUFIGroupSeenByProfileBrowserController','XUFIShareTooltipController','XUIText.react'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits
























(l,c('React').Component);k=j&&j.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.
onCommentsClick=function(event){
var r=this.props.contextArgs.commentajaxify;
if(r){
if(this.props.contextArgs.showtheaterforcomment){
this.launchSnowlift(r,event.currentTarget);}else 

this.launchDialog(r,event.currentTarget);}else

if(this.props.onCommentClick)
this.props.onCommentClick(event);


this.logCountAction('comments','click');
event.preventDefault();}.
bind(this),this.

onSeensClick=function(event){
var r=this.props.feedback,

s=c('XUFIGroupSeenByProfileDialogController').getURIBuilder().
setInt('id',r.entidentifier).
getURI();
s=c('ActorURI').create(s,r.actorforpost);

this.launchDialog(s.toString(),event.currentTarget);
this.logCountAction('seens','click');
event.preventDefault();}.
bind(this),this.

onSharesClick=function(event){
if(this.isCompactSearch())
return;

var r=this.props.feedback,
s=r.sharefbid||r.targetfbid,
t=
c('ActorURI').create
(new (c('URI'))('/ajax/shares/view').setQueryData
({target_fbid:s}),

r.actorforpost);


this.launchDialog(t.toString(),event.currentTarget);
this.logCountAction('shares','click');
event.preventDefault();}.
bind(this),this.

onViewsClick=function(event){
this.logCountAction('views','click');}.
bind(this),this.

onViewsHover=function(event){
if(this.canSeeConsolidatedTooltip())
this.logCountAction('views','hover');}.

bind(this),n;}l.prototype.

launchSnowlift=function(m,n){'use strict';
c('Bootloader').loadModules(["PhotoSnowlift"],function(o){
o.bootstrap(m,n);},
'UFIReactionsBlingSocialSentence.react');};
l.prototype.

launchDialog=function(m,n){'use strict';
c('Bootloader').loadModules(["AsyncDialog"],function(o){
o.bootstrap(m,n,'dialog');},
'UFIReactionsBlingSocialSentence.react');};
l.prototype.

logCountAction=function(m,n){'use strict';
c('BanzaiLogger').log
('WebReactionsBlingLoggerConfig',

{feedback_id:this.props.feedback.entidentifier,
'interface':'www',
action:n,
target_type:'count',
target_subtype:m});};


l.prototype.

renderComments=function(){'use strict';
var m=this.props.contextArgs.islivestreaming;

if(!this.props.commentCount||

this.props.contextArgs.feedbackMode==='expanded'&&!m)

return null;


var n=
isNaN(this.props.feedback.commentcountreduced)&&!m?
this.props.feedback.commentcountreduced:
c('NumberFormat').formatInteger(this.props.commentCount),

o=c('ActorURI').create
(c('XUFICommentTooltipController').getURIBuilder().
setString('ft_ent_identifier',this.props.feedback.entidentifier).
getURI(),
this.props.feedback.actorforpost),


p=
"_-56";

return (c('React').createElement('a',
{'aria-live':'polite',
className:"_ipm",
'data-comment-prelude-ref':this.props['data-comment-prelude-ref'],
'data-ft':this.props['data-ft'],
'data-hover':'tooltip',
'data-interaction-root-id':p,
'data-tooltip-uri':o,
href:this.props.href,
onClick:this.onCommentsClick,
role:'button'},
this.props.children,i._({"Comment":["{count} Comment","a77e2dddccb678e4a7331ebdbee2921e"],"Comments":["{count} Comments","4234e6e0045a02cdd2702a982bbc0159"]},[i.param



('count',
n),i['enum']



(this.props.commentCount===1?'Comment':'Comments',
{Comment:'Comment',Comments:'Comments'})])));};




l.prototype.

renderSeens=function(){'use strict';
if(this.props.contextArgs.entstream||!this.props.feedback.seencount)
return null;


var m=this.props.feedback,
n=m.seencount,

o=void 0;
if(m.seenbyall){
o=i._(["Seen by everyone","c2e7317cc1564d8ba9e5b1f5cd7ab5b9"]);}else



if(n===1){
o=i._(["Seen by 1","6393ec6705ce92f17c1aad24bdb6155c"]);}else 




o=i._(["Seen by {count}","8e37e33cc5c9aa6914faaaed3f63aacc"],[i.param


('count',
n)]);




var p=new (c('URI'))('/ajax/ufi/seen_list_hovercard.php').
setQueryData
({id:m.entidentifier}),

q=c('XUFIGroupSeenByProfileBrowserController').getURIBuilder().
setInt('id',m.entidentifier).
getURI();
q=c('ActorURI').create(q,m.actorforpost);

var r=
"_-59";

return (c('React').createElement('span',{ref:'seen_by_text'},
c('React').createElement('a',
{href:q,
'data-hovercard':p.toString(),
'data-interaction-root-id':r,
className:"_ipm",
onClick:this.onSeensClick},
o)));};



l.prototype.

renderShares=function(){'use strict';
if(!this.props.feedback.sharecount)
return null;


var m=this.props.feedback.sharefbid||
this.props.feedback.targetfbid,

n=void 0;
if(this.isCompactSearch()&&this.props.href!=null){
n=this.props.href;}else 

n=
c('ActorURI').create
(new (c('URI'))('/shares/view').setSubdomain('www').setQueryData
({id:m}),

this.props.feedback.actorforpost);



var o=c('ActorURI').create
(c('XUFIShareTooltipController').getURIBuilder().
setString('ft_ent_identifier',this.props.feedback.entidentifier).
getURI(),
this.props.feedback.actorforpost),


p=
"_-5b";

return (c('React').createElement('a',
{'aria-live':'polite',
className:"_ipm",
'data-hover':'tooltip',
'data-interaction-root-id':p,
'data-tooltip-uri':o,
href:n,
onClick:this.onSharesClick,
role:'button'},i._({"Share":["{count} Share","090dba215040e4d41743d31334006590"],"Shares":["{count} Shares","456225fbf33c169da9f5cb2dfc28fa76"]},[i.param



('count',
this.props.feedback.sharecountreduced),i['enum']



(this.props.feedback.sharecount===1?'Share':'Shares',
{Share:'Share',Shares:'Shares'})])));};




l.prototype.

renderSaves=function(){'use strict';

if(!this.props.contextArgs.saveCount||
!this.props.contextArgs.saveCollectionId)

return null;



return (c('React').createElement(c('BootloadOnRender.react'),
{loader:c('JSResource')('UFIReactionsSaveDialog.react').__setRef('UFIReactionsBlingSocialSentence.react'),
placeholder:c('React').createElement('div',null),
component:
c('React').createElement(c('LazyComponent.react'),
{saveCount:this.props.contextArgs.saveCountReduced,
collectionId:this.props.contextArgs.saveCollectionId,
buttonText:this.props.contextArgs.saveButtonTitle})}));};




l.prototype.

renderViews=function(){'use strict';
var m=this.props.contextArgs.viewCount,
n=null;
if(this.canSeeConsolidatedTooltip())
n=this.renderViewsTooltip();

if(!m)
return null;


var o=
"_-5c";

return (c('React').createElement(c('Tooltip.react'),
{tooltip:n,
'data-hover':'tooltip',
'data-interaction-root-id':o,
'data-tooltip-alignh':'left',
'data-tooltip-position':'above',
'aria-live':'polite',
className:"_ipm",
onClick:this.onViewsClick,
onMouseOver:this.onViewsHover},i._({"View":["{count} View","2ffe73d7ad5551813e3a2d5f644991a5"],"Views":["{count} Views","63adaa2a4ed9d92e2816e2b3b45469bd"]},[i.param

('count',
this.props.contextArgs.viewCountReduced),i['enum']



(m==='1'?'View':'Views',
{View:'View',Views:'Views'})])));};




l.prototype.

canSeeConsolidatedTooltip=function(){'use strict';
var m=this.props.contextArgs.postViewCount,
n=this.props.contextArgs.totalPosts,
o=this.props.contextArgs.otherPostsViewCount;
return !!n&&n>1&&
!!m&&!!o;};
l.prototype.

isCompactSearch=function(){'use strict';
return this.props.contextArgs.source===c('FeedbackSourceType').COMPACT_SEARCH;};
l.prototype.

renderViewsTooltip=function(){'use strict';
var m=this.props.contextArgs.totalPosts,
n=this.props.contextArgs.postViewCount,
o=this.props.contextArgs.otherPostsViewCount,
p=m-1;

return (c('React').createElement('div',null,
c('React').createElement(c('XUIText.react'),{weight:'bold'},i._(["Video Posted {number of posts} Times","dd32967c251b3bfdc879c2d047e4b4c9"],[i.param




('number of posts',
m)])),




c('React').createElement('br',null),i._({"view":["{post views} view from this post","487093fce44f366c0df96e20ce5c0d1e"],"views":["{post views} views from this post","7e286fedeffc98301f5fe4c8cbe42232"]},[i.param



('post views',
n),i['enum']



(n==='1'?'view':'views',
{view:'view',views:'views'})]),



c('React').createElement('br',null),i._({"view":{"post":["{total views} view from {posts count} other post","eda9c7ad551f8ab1797b06f95d536252"],"posts":["{total views} view from {posts count} other posts","e382a5f62347374c7296dad679179979"]},"views":{"post":["{total views} views from {posts count} other post","d22c73ebb0da64df330b976ce2227a7a"],"posts":["{total views} views from {posts count} other posts","ae75e0709d46802348eff23f4a47c173"]}},[i.param





('total views',
o),i['enum']



(o==='1'?'view':'views',
{view:'view',views:'views'}),i.param


('posts count',
p),i['enum']



(p===1?'post':'posts',
{post:'post',posts:'posts'})])));};




l.prototype.

renderPrivateReply=function(){'use strict';
var m=this.props.feedback.messagereplycontext;
if(!m||
m.status!==c('PagesPrivateReplyConstants').Status.ALREADY_REPLIED)
return null;


return (c('React').createElement('span',{className:"_ipm"},
c('React').createElement(c('UFIPrivateReplyIndicator.react'),{replyStatus:m.status})));};


l.prototype.

render=function(){'use strict';
if(this.props.contextArgs.viewCount!=null&&
(this.props.contextArgs.saveCount!=null||
this.props.contextArgs.seenCount!=null)){

var m="_-5d";

return (c('React').createElement('div',
{className:"_ipn clearfix",
'data-interaction-root-id':m},
c('React').createElement('div',{className:"_ipo"},
c('React').createElement('div',{className:"_36_q"},
this.renderComments()),

c('React').createElement('div',{className:"_36_q"},
this.renderShares()),

c('React').createElement('div',{className:"_34i1 _36_q"},

c('React').createElement('div',{className:"_36_q"},
this.renderSaves()),

c('React').createElement('div',{className:"_36_q"},
this.renderSeens()),

c('React').createElement('div',{className:"_36_q"},
this.renderViews()),

c('React').createElement('div',{className:"_36_q"},
this.renderPrivateReply()))),



c('React').createElement(c('UFIReactionsSocialSentence.react'),
{feedback:this.props.feedback,
contextArgs:this.props.contextArgs})));}else{




var n="_-5d";

return (c('React').createElement('div',
{className:"_ipn clearfix",
'data-interaction-root-id':n},
c('React').createElement('div',{className:"_ipo"},
c('React').createElement('div',{className:"_36_q"},
this.renderComments()),

c('React').createElement('div',{className:"_36_q"},
this.renderShares()),

c('React').createElement('div',{className:"_36_q"},
this.renderSaves()),

c('React').createElement('div',{className:"_36_q"},
this.renderSeens()),

c('React').createElement('div',{className:"_36_q"},
this.renderViews()),

c('React').createElement('div',{className:"_36_q"},
this.renderPrivateReply())),


c('React').createElement(c('UFIReactionsSocialSentence.react'),
{feedback:this.props.feedback,
contextArgs:this.props.contextArgs})));}};







f.exports=l;}),null);

/** js/components/UFI/ActionLinks/UFIBling.react.js */





__d('UFIBling.react',['CommentPrelude','FeedbackSourceType','React','TrackingNodes','UFIBlingBox.react','UFIReactionsBlingSocialSentence.react','UFISharedDispatcher','UFIStoryAction','UFIToplevelPagedCommentList','URI'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits












(j,c('React').Component);i=h&&h.prototype;
function j(k,l){
i.constructor.call(this,k,l);}
j.prototype.

render=function(){
var k=this.props.contextArgs,
l=this.props.feedbackTarget,

m=
c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.BLINGBOX),

n=l.permalink;

if(k.showtheaterforcomment&&k.commentredirecturi){
n=k.commentredirecturi;
k=Object.freeze(babelHelpers['extends']({},
k,
{commentajaxify:k.commentredirecturi}));}



var o=new (c('URI'))(n).
addQueryData({comment_tracking:m}).
toString(),

p=
c('UFIToplevelPagedCommentList').
getCommentList
(k.ftentidentifier,
l.defaultcommentorderingmode).

getDisplayedCommentCount(),

q=
(k.feedbackMode==='none'||
k.feedbackMode==='toggle')&&
k.hasReactions&&
l.displayreactions,

r=function(event){
event.preventDefault();
if(q&&k.feedbackMode==='expanded'){
this.$UFIBling_onToggleComments();}else
if(k.source===c('FeedbackSourceType').COMPACT_SEARCH){
var v=new (c('URI'))(o);
if(v!=null)
v.go();}else{


c('CommentPrelude').onBlingboxClick(event.currentTarget);
if(!k.disableinlinetoggle)
this.props.onCommentVisibilityChanged&&
this.props.onCommentVisibilityChanged();}}.


bind(this);

if(q){

return (c('React').createElement(c('UFIReactionsBlingSocialSentence.react'),
{commentCount:p,
contextArgs:k,
'data-comment-prelude-ref':'action_link_bling',
'data-ft':m,
feedback:l,
href:o,
onCommentClick:r}));}else{



var s=void 0,
t=void 0,
u=void 0;

if(k.hasReactions){
s=l.reactioncount;
t=l.reactioncountmap;
u=l.reactioncountreduced;}



return (c('React').createElement(c('UFIBlingBox.react'),
{comments:p,
commentsreduced:l.commentcountreduced,
contextArgs:k,
'data-comment-prelude-ref':'action_link_bling',
'data-ft':m,
likes:l.likecount,
likesreduced:l.likecountreduced,
nfb:l.nfbcount,
onClick:r,
permalink:o,
reactionCount:s,
reactionCountMap:t,
reactionCountReduced:u,
reshares:l.sharecount,
resharesreduced:l.sharecountreduced,
readOnly:k.readonly}));}};



j.prototype.

$UFIBling_onToggleComments=function(){
c('UFISharedDispatcher').dispatch
(c('UFIStoryAction').showComments
(this.props.contextArgs));};





f.exports=j;}),null);

/** js/components/UFI/ActionLinks/UFICommentActionLink.react.js */






__d('UFICommentActionLink.react',['fbt','cx','React','UFICommentLink.react','UFISharedDispatcher','UFIStoryAction'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,









l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.






render=function(){var n=







this.props.contextArgs,o=n.commentajaxify,p=n.commentredirecturi,q=n.showtheaterforcomment,r=n.loggedOutLinkConfig,

s=this.props.contextArgs.isaskquestion?h._(["Answer","c2760f679ecae915719c880d955e0732"]):h._(["Comment","aebcf8041896e9214d4300b39ec95feb"]);








if(!o&&
r&&
r.showCommentLink)
o=r.commentAjaxifyURI;


if(o){
var t="_15-3";

return (c('React').createElement('span',
{className:"_6a",
'data-interaction-root-id':t},
c('React').createElement(c('UFICommentLink.react'),
{ajaxify:o,
rel:q?'theater':'dialog'},

s)));}else



if(p){
var u="_15-6";

return (c('React').createElement('span',
{className:"_6a",
'data-interaction-root-id':u},
c('React').createElement(c('UFICommentLink.react'),
{href:p,
rel:q?'theater':''},

s)));}




var v="_15-7";

return (c('React').createElement('span',
{className:"_6a",
'data-interaction-root-id':v},
c('React').createElement(c('UFICommentLink.react'),
{onClick:function(event){
event.preventDefault();
c('UFISharedDispatcher').dispatch
(c('UFIStoryAction').showComments
(this.props.contextArgs));}.


bind(this)},

s)));};



function m(){j.apply(this,arguments);}m.propTypes={contextArgs:l.object.isRequired};


f.exports=m;}),null);

/** js/components/UFI/ActionLinks/UFILikeActionLink.react.js */





__d('UFILikeActionLink.react',['React','UFILikeLink.react','UFIReactionsLinkImpl.react','UFIReactionTypes','UFIStoryAction'],(function a(b,c,d,e,f,g){

'use strict';var h,i,







j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.














onClick=function(event){
event.preventDefault();

var q=this.props.feedback.hasviewerliked;

this.context.dispatch
(c('UFIStoryAction').changeReaction
(this.props.contextArgs,
q?c('UFIReactionTypes').NONE:c('UFIReactionTypes').LIKE,
event.target));}.


bind(this),m;}k.prototype.

render=function(){var l=



this.props,m=l.contextArgs,n=l.feedback;


if(!m.showLikeNuxForGroupMallAds&&
m.hasReactions&&
n.canviewerreact&&c('UFIReactionsLinkImpl.react')){



return (c('React').createElement(c('UFIReactionsLinkImpl.react'),
{contextArgs:m,
nuxConfig:m.reactionsNuxConfig,
reaction:n.viewerreaction,
suggestedReaction:n.suggestedreaction,
supportedReactions:n.supportedreactions}));}else{



var o=m.loggedOutLinkConfig,
p=null;
if(o&&o.showLikeLink)
p=o.likeAjaxifyURI;



return (c('React').createElement(c('UFILikeLink.react'),
{ajaxify:p,
likeAction:!n.hasviewerliked,
onClick:this.onClick,
rel:p?'dialog':null,
forcelegacyrendering:m.forcelegacyrendering,
showLikeNuxForGroupMallAds:m.showLikeNuxForGroupMallAds,
likeNuxContent:m.groupMallAdsCommentNuxContent}));}};



k.contextTypes={dispatch:j.func};k.propTypes={feedback:j.object.isRequired,contextArgs:j.object.isRequired};


f.exports=k;}),null);

/** js/components/UFI/ActionLinks/UFIShareActionLink.react.js */





__d('UFIShareActionLink.react',['ActorURI','Bootloader','React','UFIShareNowMenuBootloader.react','UFIShareLink.react','URI'],(function a(b,c,d,e,f,g){

'use strict';var h,i,








j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.
state=
{confirmed:false,
openOnInitOverride:false},m;}k.prototype.
























render=function(){var l=



this.state,m=l.confirmed,n=l.openOnInitOverride,o=









this.props,p=o.shareURI,q=o.shareRel,r=o.shareNowMenuURI,s=o.feedbackReferrer,t=o.feedbackSource,u=o.feedbackTarget,v=o.misinformationConfirmDialogURI;


if(v&&!m)

return (c('React').createElement(c('UFIShareLink.react'),
{href:'#',
onClick:function(){
return (this.$UFIShareActionLink_onShareMisinformationClick(v));}.bind(this)}));




var w=
{feedback_referrer:s,
feedback_source:t},


x=u&&u.actorforpost;
if(x){
p=p&&c('ActorURI').create(p,x);
r=r&&new (c('URI'))(r).
addQueryData('actor_id',x).
toString();}


return r?
c('React').createElement(c('UFIShareNowMenuBootloader.react'),
{endpoint:r,
endpointData:w,
openOnInitOverride:n}):

c('React').createElement(c('UFIShareLink.react'),
{href:new (c('URI'))(p).addQueryData(w),
rel:q,
openOnInit:n});};

k.prototype.

$UFIShareActionLink_onShareMisinformationClick=function(l){
var m='MISINFORMATION_RESHARE_ALERT_FUNNEL';
c('Bootloader').loadModules
(["AsyncDialog","AsyncRequest","FunnelLogger"],
function(n,o,p){
p.startFunnel(m);
n.send
(new o(l),
function(q){
q.subscribe('confirm',function(){
this.setState
({confirmed:true,
openOnInitOverride:true});

p.appendAction(m,'continue');
p.endFunnel(m);
q.hide();}.
bind(this));

q.subscribe('cancel',function(){
p.appendAction(m,'cancel');
p.endFunnel(m);
q.hide();});}.

bind(this));}.
bind(this),'UFIShareActionLink.react');};

k.propTypes={feedbackTarget:j.object,shareURI:j.string,shareRel:j.string,shareNowMenuURI:j.string,shareLinkHref:j.string,feedbackReferrer:j.string,feedbackSource:j.number,misinformationConfirmDialogURI:j.string};


f.exports=k;}),null);

/** js/components/UFI/UFIActionLinks.react.js */






__d('UFIActionLinks.react',['cx','fbt','BanzaiODS','BootloadedComponent.react','FBFeedLocations','FeedbackSourceType','JSResource','Parent','React','UFIBling.react','UFICommentActionLink.react','UFIConfig','UFIInstanceAction','UFILikeActionLink.react','UFIPrivateReplyLink.react','UFIShareActionLink.react','UFISharedDispatcher','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k;j=babelHelpers.inherits





















(l,c('React').Component);k=j&&j.prototype;l.prototype.
componentDidMount=function(){
var m=this.$UFIActionLinks_getShareButtonODSKey();
c('BanzaiODS').bumpEntityKey('feedback',m);};
l.prototype.

renderActorSelector=function(){
if(this.props.hideActorSelector)
return null;
var m=

this.props.contextArgs,n=m.actorSelectorConfig,o=m.hasReactions;

if(!n)
return null;


var p=n.module;

return (c('React').createElement('div',
{className:"_40yk"+

(o?' '+"_pbn":'')},

c('React').createElement(p,babelHelpers['extends']({},
n.props,
{nuxHoverContext:c('Parent').byTag(this.refs.root,'form')}))));};



l.prototype.

renderActionList=function(){
var m=
[this.renderLikeLink(),
this.renderCommentLink(),
this.renderShareLink(),
this.renderPrivateReplyLink(),
this.renderEmbedLink()].
filter(function(n){return n;}).map(function(n,o){
return (c('React').createElement('span',{key:o},n));});


if(m.length){

return (c('React').createElement('div',{className:"_42nr"},
m));}else 



return null;};

l.prototype.

renderBling=function(){
if(this.props.contextArgs.showBling)

return (c('React').createElement(c('UFIBling.react'),
{contextArgs:this.props.contextArgs,
feedbackTarget:this.props.feedbacktarget,
onCommentVisibilityChanged:function(){
return (c('UFISharedDispatcher').dispatch
(c('UFIInstanceAction').toggleComments
(this.props.contextArgs)));}.bind(this)}));







return null;};
l.prototype.

renderLikeLink=function(){var m=



this.props,n=m.contextArgs,o=m.feedbacktarget,

p=n.loggedOutLinkConfig;
if(!o.hasviewerliked&&
!o.viewercanlike&&
!(p&&p.showLikeLink))
return null;



return (c('React').createElement(c('UFILikeActionLink.react'),
{feedback:o,
contextArgs:n}));};


l.prototype.

renderCommentLink=function(){
var m=this.props.contextArgs.loggedOutLinkConfig;
if(!this.props.feedbacktarget.cancomment&&
!(m&&m.showCommentLink)){
var n=this.props.contextArgs.disabledCommentTooltip;
if(n)

return (c('React').createElement('span',null,
c('React').createElement('span',
{className:"_1ysv",
'data-hover':'tooltip',
'data-tooltip-content':n},i._(["Comment","aebcf8041896e9214d4300b39ec95feb"]))));






return null;}



return (c('React').createElement(c('UFICommentActionLink.react'),
{contextArgs:this.props.contextArgs}));};


l.prototype.




$UFIActionLinks_getShareButtonODSKey=function(){
var m=this.props.contextArgs.shareLinkConfig;
if(!m)
return 'ufi-share-link.unavailable';


var n=this.props.contextArgs.loggedOutLinkConfig;
if(n&&n.showShareLink)
return 'ufi-share-link.loggedout';


return 'ufi-share-link.render';};
l.prototype.




renderShareLink=function(){
var m=this.props.contextArgs.shareLinkConfig;
if(!m)
return null;


var n=this.props.contextArgs.loggedOutLinkConfig;
if(n&&n.showShareLink)
m.shareURI=n.shareAjaxifyURI;



return (c('React').createElement(c('UFIShareActionLink.react'),babelHelpers['extends']
({feedbackTarget:this.props.feedbacktarget,
feedbackReferrer:this.props.contextArgs.feedbackReferrer,
feedbackSource:this.props.contextArgs.source},
m)));};


l.prototype.

renderPrivateReplyLink=function(){var m=






this.props,n=m.contextArgs,o=m.feedbacktarget,p=o.actorforpost,q=o.messagereplycontext;

if(!c('UFIPrivateReplyLink.react').willRender(q,p))
return null;



return (c('React').createElement(c('UFIPrivateReplyLink.react'),
{actorID:p,
activityID:n.ftentidentifier,
context:q,
seeResponseLabel:false}));};


l.prototype.

renderEmbedLink=function(){
var m=this.props.contextArgs.shareLinkConfig;
if(!m||!m.embedURI)
return null;


return (c('React').createElement('a',
{'data-interaction-root-id':"InteractionUFIActionLinksEmbedLink",
href:m.embedURI,
rel:'dialog',
className:"_2g1w"},i._(["Embed","3dd4cf602d0ec2f90ef4e9759ed2689f"])));};





l.prototype.


renderSearchFeedback=function(){
var m=this.props.contextArgs.inlineSearchFeedbackConfig;
if(!m)
return null;



return (c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']
({bootloadPlaceholder:c('React').createElement('div',null),
bootloadLoader:c('JSResource')('InlineFeedback.react').__setRef('UFIActionLinks.react')},
m)));};


l.prototype.

renderCommentOrderingModeSelector=function(){


if(!this.props.showCommentOrderingModeSelector)
return null;



return (c('React').createElement('div',{className:"_3csb"},
c('React').createElement(c('BootloadedComponent.react'),
{bootloadPlaceholder:c('React').createElement('div',null),
bootloadLoader:
c('JSResource')('UFIOrderingModeSelectorContainer.react').__setRef('UFIActionLinks.react'),

contextArgs:this.props.contextArgs,
feedback:this.props.feedbacktarget})));};



l.prototype.

renderCrowdsourceLabelingContainer=function(){
if(!c('UFIConfig').showUFICrowdsource)
return null;



return (c('React').createElement(c('BootloadedComponent.react'),
{bootloadPlaceholder:c('React').createElement('div',null),
bootloadLoader:c('JSResource')('UFICrowdsourceLabelingContainer.react').__setRef('UFIActionLinks.react'),
feedback:this.props.feedbacktarget,
contextArgs:this.props.contextArgs}));};


l.prototype.

renderLayout=
function(m,
n,
o){

n=n.map(function(p,q){
return p&&c('React').createElement('div',{className:"_3m9g",key:q},p);}).
filter(function(p){return p;});

if(!m&&n.length===0)
return null;



return (c('React').createElement('div',{className:c('joinClasses')("_3399",o)},
n,
c('React').createElement('div',{className:"_524d"},
m)));};



l.prototype.

shouldRenderActionButtons=function(){
var m=null,
n=this.props.contextArgs.source;
if(this.props.contextArgs.feedcontext)

try{m=
JSON.parse(this.props.contextArgs.feedcontext).location_type;}catch(
o){}


if(m===c('FBFeedLocations').GOODWILL_THROWBACK_PERMALINK||
m===c('FBFeedLocations').GOODWILL_THROWBACK_PROMOTION||
m===c('FBFeedLocations').GOODWILL_THROWBACK_SHARE||
m===c('FBFeedLocations').GROUP_SUGGESTIONS_WITH_STORY||
n===c('FeedbackSourceType').LIVE_WWW_BROADCASTING||
n===c('FeedbackSourceType').COMPACT_SEARCH)
return false;


return true;};
l.prototype.

hasCounts=function(){
return this.props.feedbacktarget.commentcountreduced||
this.props.feedbacktarget.sharecountreduced||
this.props.feedbacktarget.seencount||
this.props.contextArgs.viewCount;};
l.prototype.

render=function(){
var m=this.renderActorSelector(),
n=this.renderSearchFeedback(),

o=[],
p=[],

q=null,
r=this.renderBling();
if(r){
p.push(m);
if(this.hasCounts()){
q=
this.renderLayout(null,[n],"_1f6t");}else 

p.push(n);}else{


o.push(m);
o.push(n);}


o.push(this.renderCommentOrderingModeSelector());

var s="_1f6t"+

(this.props.contextArgs.hasReactions?' '+"_4_dr":''),


t=this.shouldRenderActionButtons()?
this.renderLayout
(this.renderActionList(),
o,
"_a7s clearfix _zw3"):

null,

u=
this.renderCrowdsourceLabelingContainer();


return (c('React').createElement('div',{ref:'root'},
q,
this.renderLayout(r,p,s),
t,
u));};


function l(){j.apply(this,arguments);}


f.exports=l;}),null);

/** js/components/UFI/ActionLinks/UFIActionHeader.react.js */





__d('UFIActionHeader.react',['cx','BootloadedComponent.react','FeedbackSourceType','FluxContainer','JSResource','React','UFIActionLinks.react','UFICommercialBreakStore','UFIDispatcherContext.react','ifRequired'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits





























(k,c('React').Component);j=i&&i.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.















state=
{inCommercialBreak:false},m;}k.getStores=function(){return [c('UFICommercialBreakStore')];};k.calculateState=function(l,m){var n=m.contextArgs.instanceid;return {inCommercialBreak:c('UFICommercialBreakStore').getValueFor(n)};};k.prototype.


$UFIActionHeader_getCommercialBreakUFIOverlay=function(){
if(!this.state.inCommercialBreak)
return null;


return (c('React').createElement(c('BootloadedComponent.react'),
{bootloadLoader:c('JSResource')('CommercialBreakUFIOverlay.react').__setRef('UFIActionHeader.react'),
bootloadPlaceholder:c('React').createElement('div',null),
contextArgs:this.props.contextArgs}));};

k.prototype.

$UFIActionHeader_getUFI=function(){
var l=this.props.contextArgs.source,
m=
l===c('FeedbackSourceType').COMPACT_SEARCH,
n=
c('React').createElement(c('UFIDispatcherContext.react'),
{dispatcher:this.props.dispatcher,
stores:this.props.stores},
c('React').createElement(c('UFIActionLinks.react'),
{contextArgs:this.props.contextArgs,
feedbacktarget:this.props.feedbacktarget,
hideActorSelector:m,
showCommentOrderingModeSelector:
this.props.showCommentOrderingModeSelector}));



if(!this.state.inCommercialBreak)
return n;

var o=c('ifRequired')
('UFIVideoPlayerRegistry',
function(s){
return (s.getAvailableVideoPlayerController
(this.props.contextArgs.instanceid));}.bind(this)),


p=
o&&o.getOption
('VideoWithInstreamVideo',
'controller'),

q=
p&&p.getConfig(),
r=q&&
q.vodTransitionVersion!==0;
if(!r)
return null;


return (c('React').createElement('div',{className:"_4hqd"},
n));};


k.prototype.

render=function(){

return (c('React').createElement('div',null,
this.$UFIActionHeader_getCommercialBreakUFIOverlay(),
this.$UFIActionHeader_getUFI()));};





f.exports=c('FluxContainer').create
(k,
{withProps:true,pure:false});}),null);

/** www/__virtual__/webgraphql/CommentLikeWebGraphQLSubscription.js */






__d("CommentLikeWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLSubscriptionHelper").getExports
({docID:"1435334373168219",
queryID:"1723155404680538"});}),null);

/** js/graphql/subscriptions/UFICommentLikeSubscription.js */








__d('UFICommentLikeSubscription',['BaseGraphQLSubscription','CommentLikeWebGraphQLSubscription','uuid'],(function a(b,c,d,e,f,g){








var h=babelHelpers['extends']({},c('BaseGraphQLSubscription'),


{_getTopic:function i(j){
return 'gqls/comment_like_subscribe/top_level_feedback_id_'+j;},


_getQueryID:function i(){
return c('CommentLikeWebGraphQLSubscription').getLegacyQueryID();},


_getQueryParameters:function i(j){

return {input:JSON.stringify
({client_subscription_id:c('uuid')(),
top_level_feedback_id:j})};},




_getSubscriptionCallName:function i(){
return 'comment_like_subscribe';}});



f.exports=h;}),null);

/** www/__virtual__/webgraphql/CommentCreateWebGraphQLSubscription.js */






__d("CommentCreateWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLSubscriptionHelper").getExports
({docID:"1289769837747297",
queryID:"229013197563831"});}),null);

/** js/graphql/subscriptions/UFICommentSubscription.js */








__d('UFICommentSubscription',['BaseGraphQLSubscription','CommentCreateWebGraphQLSubscription','uuid'],(function a(b,c,d,e,f,g){








var h=babelHelpers['extends']({},c('BaseGraphQLSubscription'),


{_getTopic:function i(j){
return 'gqls/comment_create_subscribe/top_level_feedback_id_'+j;},


_getQueryID:function i(){
return c('CommentCreateWebGraphQLSubscription').getLegacyQueryID();},


_getQueryParameters:function i(j){

return {input:JSON.stringify
({client_subscription_id:c('uuid')(),
top_level_feedback_id:j})};},




_getSubscriptionCallName:function i(){
return 'comment_create_subscribe';}});



f.exports=h;}),null);

/** js/clientufi/models/Comments/UFIFeaturedReplyCommentListImpl.js */






__d('UFIFeaturedReplyCommentListImpl',['UFIReplyCommentListImpl','WebCommentViewOption'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits







(j,c('UFIReplyCommentListImpl'));i=h&&h.prototype;






function j
(k,
l,
m,
n){

i.constructor.call(this,
k,
l,
c('WebCommentViewOption').FEATURED);


var o=0,
p=m.length;


this.updateCommentCount(p);


this.addCommentIDs(o,p,m);

var q={};
n.forEach(function(r){
if(r.id)
q[r.id]=r;});




m.forEach
(function(r){
this.addOrUpdateComment(q[r]);}.
bind(this));}

j.prototype.






fetchComments=
function(k,
l,
m){






};


f.exports=j;}),null);

/** js/clientufi/models/Comments/UFIFeaturedToplevelCommentListImpl.js */






__d('UFIFeaturedToplevelCommentListImpl',['UFIToplevelPagedCommentListImpl','WebCommentViewOption'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits







(j,c('UFIToplevelPagedCommentListImpl'));i=h&&h.prototype;






function j
(k,
l,
m){

i.constructor.call(this,k,c('WebCommentViewOption').FEATURED);

var n=0,
o=l.length;


this.updateCommentCount(o);


this.addCommentIDs(n,o,l);

var p={};
m.forEach(function(q){
if(q.id)
p[q.id]=q;});



l.forEach
(function(q){
this.addOrUpdateComment(p[q]);}.
bind(this));}

j.prototype.






fetchComments=
function(k,
l,
m){






};


f.exports=j;}),null);

/** js/clientufi/models/UFIFeedbackFilters.js */






__d('UFIFeedbackFilters',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
{getRequestedIDs:function i(j){
var k=[];

if(j.reactorids)
k=k.concat(j.reactorids);


if(j.actorforpost)
k=k.concat(j.actorforpost);


return k;}};



f.exports=h;}),null);

/** js/clientufi/models/UFIFetcher.js */






__d('UFIFetcher',['Promise','ShortProfiles','UFIRange'],(function a(b,c,d,e,f,g){

'use strict';



















var h=
{fetchShortProfiles:function i
(j){

return new (c('Promise'))(function(k,l){
return (c('ShortProfiles').getMulti(j,k));});},



fetchComments:function i
(j,
k,
l){

return new (c('Promise'))(function(m,n){
return (j.getComments(k.getOffset(),k.getLength(),l,m));}).
then(function(m){
return Object.values(m);});},




fetchCommentsOrThrow:function i
(j,
k,
l){

return Object.values(j.getCommentsOrThrow(k,l));}};



f.exports=h;}),null);

/** www/__virtual__/webgraphql/FeedbackLikeWebGraphQLSubscription.js */






__d("FeedbackLikeWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLSubscriptionHelper").getExports
({docID:"1304193676334207",
queryID:"264366153976871"});}),null);

/** js/graphql/subscriptions/UFILikeSubscription.js */








__d('UFILikeSubscription',['BaseGraphQLSubscription','FeedbackLikeWebGraphQLSubscription','uuid'],(function a(b,c,d,e,f,g){








var h=babelHelpers['extends']({},c('BaseGraphQLSubscription'),


{_getTopic:function i(j){
return 'gqls/feedback_like_subscribe/feedback_id_'+j;},


_getQueryID:function i(){
return c('FeedbackLikeWebGraphQLSubscription').getLegacyQueryID();},


_getQueryParameters:function i(j){

return {input:JSON.stringify
({client_subscription_id:c('uuid')(),
feedback_id:j})};},




_getSubscriptionCallName:function i(){
return 'feedback_like_subscribe';}});



f.exports=h;}),null);

/** www/__virtual__/webgraphql/UFILiveTipJarSubscriptionWebGraphQLSubscription.js */






__d("UFILiveTipJarSubscriptionWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLSubscriptionHelper").getExports
({docID:"1392307484123243",
queryID:"1851557885085599"});}),null);

/** js/graphql/subscriptions/UFILiveTipJarSubscription.js */








__d('UFILiveTipJarSubscription',['BaseGraphQLSubscription','UFILiveTipJarSubscriptionWebGraphQLSubscription','uuid'],(function a(b,c,d,e,f,g){








var h=babelHelpers['extends']({},c('BaseGraphQLSubscription'),


{_getTopic:function i(j){
return 'gqls/tip_jar_tip_event_subscribe/video_id_'+j;},


_getQueryID:function i(){
return c('UFILiveTipJarSubscriptionWebGraphQLSubscription').getLegacyQueryID();},


_getQueryParameters:function i(j){

return {data:JSON.stringify
({client_subscription_id:c('uuid')(),
video_id:j})};},




_getSubscriptionCallName:function i(){
return 'tip_jar_tip_event_subscribe';}});



f.exports=h;}),null);

/** js/clientufi/models/UFIRetryActions.js */






__d('UFIRetryActions',['JSLogger','UFICentralUpdates','UFIConstants','UFIUserActions'],(function a(b,c,d,e,f,g){

'use strict';






var h=c('JSLogger').create('UFIRetryActions');















function i(l,m){

var n=
{actiontype:c('UFIConstants').UFIActionType.DELETE_COMMENT,
commentid:l.id};

c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{actions:[n]});



var o=l.body.text,
p=l.body.mentionstext;

c('UFIUserActions').addComment
(l.ftentidentifier,
o,
p,

{source:m,
replyid:l.parentcommentid,
attachedphoto:l.body.mentionsphoto,
attachedvideo:l.body.mentionsvideo});}




function j
(l,
m){

var n=l.body.text,
o=l.body.mentionstext;

c('UFIUserActions').editComment
(l.id,
n,
o,

{source:m,
attachedPhoto:l.body.mentionsphoto,
attachedSticker:l.attachment,
attachedVideo:l.body.mentionsvideo});}




var k=
{retrySubmit:function l
(m,
n){

switch(m.status){
case c('UFIConstants').UFIStatus.FAILED_ADD:
i(m,n);
break;
case c('UFIConstants').UFIStatus.FAILED_EDIT:
j(m,n);
break;

default:h.error('retrysubmitstatus',{status:m.status});
break;}}};




f.exports=k;}),null);

/** www/__virtual__/webgraphql/FeedbackTypingWebGraphQLSubscription.js */






__d("FeedbackTypingWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLSubscriptionHelper").getExports
({docID:"1237650813017179",
queryID:"1235619139887368"});}),null);

/** js/graphql/subscriptions/UFITypingSubscription.js */








__d('UFITypingSubscription',['BaseGraphQLSubscription','FeedbackTypingWebGraphQLSubscription','uuid'],(function a(b,c,d,e,f,g){








var h=babelHelpers['extends']({},c('BaseGraphQLSubscription'),


{_getTopic:function i(j){
return 'gqls/feedback_typing_subscribe/feedback_id_'+j;},


_getQueryID:function i(){
return c('FeedbackTypingWebGraphQLSubscription').getLegacyQueryID();},


_getQueryParameters:function i(j){

return {input:JSON.stringify
({client_subscription_id:c('uuid')(),
feedback_id:j})};},




_getSubscriptionCallName:function i(){
return 'feedback_typing_subscribe';}});



f.exports=h;}),null);

/** js/clientufi/models/UFITypingSubscriptionController.js */






__d('UFITypingSubscriptionController',['UFITypingSubscription','getByPath','setTimeout'],(function a(b,c,d,e,f,g){

'use strict';









var h=15*1000;

















function i
(l){


var m=c('getByPath')
(l,

['feedback_typing_subscribe',
'feedback',
'feedback_typers',
'friend_count']),


n=c('getByPath')
(l,
['feedback_typing_subscribe','feedback','feedback_typers','other_count']);



return {friendCount:parseInt(m,10)||0,
otherCount:parseInt(n,10)||0};}



function j(l){
return l.friendCount===0&&l.otherCount===0;}


















function k
(l,
m){

this.$UFITypingSubscriptionController_freshnessTimer=null;
this.$UFITypingSubscriptionController_onUpdateCallback=m;
this.$UFITypingSubscriptionController_subscription=c('UFITypingSubscription').subscribe
(l,
this.$UFITypingSubscriptionController_handlePayload.bind(this));}

k.prototype.

unsubscribe=function(){
this.$UFITypingSubscriptionController_clearTimer();
this.$UFITypingSubscriptionController_subscription&&this.$UFITypingSubscriptionController_subscription.unsubscribe();};
k.prototype.

$UFITypingSubscriptionController_handlePayload=function(l){
this.$UFITypingSubscriptionController_clearTimer();
var m=i(l);
this.$UFITypingSubscriptionController_onUpdateCallback(m);

if(!j(m))
this.$UFITypingSubscriptionController_freshnessTimer=c('setTimeout')(function(){
this.$UFITypingSubscriptionController_clearTimer();
this.$UFITypingSubscriptionController_onUpdateCallback
({friendCount:0,
otherCount:0});}.

bind(this),h);};

k.prototype.

$UFITypingSubscriptionController_clearTimer=function(){
if(this.$UFITypingSubscriptionController_freshnessTimer){
clearTimeout(this.$UFITypingSubscriptionController_freshnessTimer);
this.$UFITypingSubscriptionController_freshnessTimer=null;}};




f.exports=k;}),null);

/** js/clientufi/factories/UFITypingSubscriptionControllerFactory.js */






__d('UFITypingSubscriptionControllerFactory',['UFIConfig','UFISharedDispatcher','UFIStoryAction','UFITypingSubscriptionController','debounce'],(function a(b,c,d,e,f,g){

'use strict';














var h=500,

i=
{forUFIController:function j
(k,
l){

var m=c('debounce')
(function(n){
var o=c('UFIConfig').typingIndicator.fromEveryone,

p=void 0;
if(n.friendCount){
p=c('UFIStoryAction').friendTyping(l);}else
if(n.otherCount&&o){
p=c('UFIStoryAction').someoneTyping(l);}else 

p=c('UFIStoryAction').typingStopped(l);

c('UFISharedDispatcher').dispatch(p);},

h);


return new (c('UFITypingSubscriptionController'))
(k.targetfbid,
m);}};




f.exports=i;}),null);

/** www/__virtual__/x/XVODStreamingCommentsAsyncController.js */



__d("XVODStreamingCommentsAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/videos\/vodcomments\/",{eft_id:{type:"String",required:true},target_ufi_instance_id:{type:"String",required:true},start_time:{type:"Float",required:true},end_time:{type:"Float",required:true},should_backfill:{type:"Bool",defaultValue:false}});}),

null);

/** js/clientufi/models/UFIVODStreamingComments.js */






__d('UFIVODStreamingComments',['AsyncRequest','BanzaiODS','Map','SubscriptionsHandler','UFICentralUpdates','UFIConstants','UFIInstanceAction','UFILivePinnedCommentStore','UFISharedDispatcher','UFIStoryAction','UFIToplevelStreamedCommentList','UFIToplevelPagedCommentList','WebCommentViewOption','XVODStreamingCommentsAsyncController','setInterval'],(function a(b,c,d,e,f,g){

'use strict';


























c('BanzaiODS').setEntitySample('feedback',.0001);











function h
(j,
k){

this.ufiController=j;
this.videoPlayerController=k;
this.queue=[];
this.queueEndTime=0;
this.currentRequest=null;
this.subscriptions=new (c('SubscriptionsHandler'))();
this.commentsAutoplayState=
this.ufiController.shouldAutoplayLiveVODComments()?
'MayPlay':
'MayNotPlay';
this.pinQueue=[];

this.resetToTime(k.getCurrentTimePosition());

var l=this.ufiController.getFtEntIdentifier(),
m=this.ufiController.getInstanceID(),
n=c('UFIToplevelPagedCommentList').
getPagedCommentCountForFeedbackTargetID(l);
if(typeof n==='number')


c('UFIToplevelStreamedCommentList').getCommentList(l,m).
updateCommentCount(n);


this.subscriptions.addSubscriptions
(k.addListener
('seekEnd',
function(o){
if(this.commentsAutoplayState==='MayNotPlay')
this.commentsAutoplayState='MayPlay';


this.resetToTime(o.position);}.
bind(this)),

k.addListener
('unmute',
function(o){
if(this.commentsAutoplayState==='MayNotPlay')
this.commentsAutoplayState='MayPlay';

this.$UFIVODCommentStream_autoPlayVODStreamingComments();}.
bind(this)),

k.addListener
('updateStatus',
function(o,p){
var q=null;
while(this.pinQueue.length){


if(this.pinQueue[0].timeoffset>o.position)
break;





q=this.pinQueue.shift();}

if(q)
this.$UFIVODCommentStream_updatePinnedCommentIfNeeded(q);}.

bind(this)));





c('setInterval')(this.renderNextComment.bind(this),2000);
c('BanzaiODS').bumpEntityKey('vod_comments','www_load');}
h.prototype.

renderNextComment=function(){
if(!this.videoPlayerController.isState('playing'))
return;


var j=this.videoPlayerController.getCurrentTimePosition();
this.onTimeUpdated(j);

while(this.queue.length&&this.queue[0].timeoffset<j){
var k=this.queue.shift();
if(k.timeoffset<j-5)
continue;

c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.STREAMING,

k.ufipayload);

c('BanzaiODS').bumpEntityKey('feedback','facecast_vod_comment_rendered');
break;}


this.$UFIVODCommentStream_autoPlayVODStreamingComments();};
h.prototype.

fetchNewCommments=
function(j,
k,
l,
m){


var n=j+60,
o=c('XVODStreamingCommentsAsyncController').getURIBuilder().
setString('eft_id',this.ufiController.getFtEntIdentifier()).
setString('target_ufi_instance_id',this.ufiController.getInstanceID()).
setFloat('start_time',j).
setFloat('end_time',n).
setBool('should_backfill',k).
getURI();
if(this.currentRequest)
this.currentRequest.abandon();

this.currentRequest=new (c('AsyncRequest'))().
setURI(o).
setHandler(function(p){
var q=p.getPayload();
if(q.status==='error')


return;


if(q.backfillpayload)
c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.STREAMING,
q.backfillpayload);



l(q.ufipayloads);
m
(q.pinnedcommentpayloads,
q.backfillpinnedcommentpayload);


this.queueEndTime=n;}.
bind(this)).
setFinallyHandler(function(){
if(k)
c('UFISharedDispatcher').dispatch
(c('UFIInstanceAction').didReceiveVODComments
(this.ufiController.getContextArgs()));



this.currentRequest=null;}.
bind(this));
this.currentRequest.send();
if(k)
c('UFISharedDispatcher').dispatch
(c('UFIInstanceAction').didRequestVODComments
(this.ufiController.getContextArgs()));};



h.prototype.

onTimeUpdated=function(j){
if(j<this.queueEndTime-15||this.currentRequest!==null)



return;


this.fetchNewCommments
(this.queueEndTime,
false,
function(k){
this.queue=this.queue.concat(k);}.
bind(this),
function(k,l){
this.pinQueue=this.pinQueue.concat(k);}.
bind(this));};

h.prototype.

resetToTime=function(j){
var k=this.ufiController.getFtEntIdentifier();
c('UFIToplevelStreamedCommentList').resetCommentList
(k,
this.ufiController.getInstanceID());

c('UFICentralUpdates').didUpdateFeedback(k);

this.fetchNewCommments
(j,
true,
function(l){
this.queue=l;}.
bind(this),
function(l,m){
this.pinQueue=l;
this.$UFIVODCommentStream_updatePinnedCommentIfNeeded(m);}.
bind(this));};

h.prototype.

stop=function(){
this.subscriptions.release();};
h.prototype.

$UFIVODCommentStream_autoPlayVODStreamingComments=function(){
var j=c('UFIToplevelStreamedCommentList').getExistingCommentList
(this.ufiController.getFtEntIdentifier(),
this.ufiController.getInstanceID());


if(!j||
j.getActualCommentCount()<5||
this.commentsAutoplayState!=='MayPlay'||
!this.videoPlayerController.isState('playing'))

return;


c('BanzaiODS').bumpEntityKey('vod_comments','www_autoplay');
this.commentsAutoplayState='Played';
c('UFISharedDispatcher').dispatch
(c('UFIInstanceAction').changeOrderingMode
(this.ufiController.getContextArgs(),
c('WebCommentViewOption').LIVE_STREAMING));


this.ufiController.scrollToTopOfCommentsInViewer();};
h.prototype.

$UFIVODCommentStream_updatePinnedCommentIfNeeded=function(j){
var k=this.ufiController.getContextArgs(),
l=c('UFILivePinnedCommentStore').getPinnedCommentID
(k.ftentidentifier),

m=j.ufipayload;
if(!m){
if(l!==null)

c('UFISharedDispatcher').dispatch
(c('UFIStoryAction').unpinComment(k,j.pineventid));



return;}


var n=m.pinnedcomments[0].id;
if(n===l)

return;



c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.STREAMING,
m);


c('UFISharedDispatcher').dispatch
(c('UFIStoryAction').pinComment
(k,
n,
j.pineventid));};





var i=new (c('Map'))();

f.exports=






{start:function j
(k,
l){

var m=k.getInstanceID();
if(i.get(m))
return;

i.set
(m,
new h
(k,
l));},








stop:function j(k,l){
var m=i.get(l);
if(!m)
return;

m.stop();
i['delete'](l);}};}),
null);

/** js/clientufi/controllers/UFIController.js */






__d('UFIController',['csx','invariant','Promise','Arbiter','AsyncRequest','Bootloader','BootloadedComponent.react','CommentPrelude','DOM','DOMContainer.react','DOMQuery','XCommentEmbedPluginEmbedAsyncDialogController','ErrorUtils','FeedbackPayloadSourceType','JSResource','LivePinnedCommentEventCreateSubscription','LiveTimer','React','ReactDOM','Run','ShortProfiles','SubscriptionsHandler','TranslationTrigger','StaticUFI.react','UFIActionHeader.react','UFIActionLinks.react','UFIAddCommentActionType','UFICallbackStore','UFICentralUpdates','UFICommentActionType','UFICommentFilters','UFICommentLikeSubscription','UFICommentLogger','UFIComments','UFICommentSubscription','UFICommentUtils','UFICommentVisibilityStore','UFICommercialBreakAdapter','UFIConfig','UFIConstants','UFIDispatcher','UFIDispatcherContext.react','UFIDomRootAdapter','UFIFeaturedReplyCommentListImpl','UFIFeaturedToplevelCommentListImpl','UFIFeedbackFilters','UFIFeedbackMode','UFIFeedbackStore','UFIFeedbackTargets','UFIFetcher','UFIInstanceAction','UFIInstanceActionType','UFILikeSubscription','UFILivePinnedCommentStore','UFILiveTipJarSubscription','UFINewCommentNotifier','UFIOrderingModeStore','UFIPaging','UFIRange','UFIReactionStore','UFIReplyCommentList','UFIRetryActions','UFIRootRegistry','UFISharedDispatcher','UFIStoryAction','UFIStoryActionType','UFISubscriptionUpdates','UFIToplevelPagedCommentList','UFIToplevelStreamedCommentList','UFITypingSubscriptionControllerFactory','UFIUIEvents','UFIUserActions','UFIVideoPlayerRegistry','UFIVisibility','UFIVODStreamingComments','URI','createArrayFromMixed','ex','flattenArray','forEachObject','isEmpty','onEnclosingPageletDestroy','requireWeak'],(function a(b,c,d,e,f,g,h,i){

'use strict';


































































































if(c('UFIConfig').prefetchTextDelightAnimation)
c('Bootloader').loadModules
(["TextDelightAnimation"],
function(n){
n.setupCommentAnimation
(c('UFIConfig').prefetchTextDelightAnimation);},

'UFIController');





var j=
{NEWSSTAND:'newsstand'},






k=function n
(o,
p,
q,
r){

var s=o.getRequestedOffset(),
t=o.getRequestedLength(),
u=s+t===p,
v=u&&l(r)?
q-s:
t;

return new (c('UFIRange'))(s,v);},


l=function n(o){
return o==c('FeedbackPayloadSourceType').USER_ACTION||
o==c('FeedbackPayloadSourceType').LIVE_SEND||
o==c('FeedbackPayloadSourceType').STREAMING;};
m.






































































factory=function(n,o,p){
if(o.flushEventQueueBeforeRender){

if(c('UFIConfig').flushEventQueueBeforeRenderUseIdleCallback&&
window.requestIdleCallback){

window.requestIdleCallback
(function(){return m.$UFIController_factoryImpl(n,o,p);});}else 


setTimeout
(function(){return m.$UFIController_factoryImpl(n,o,p);},
c('UFIConfig').flushEventQueueBeforeRenderTimeout);}else 



m.$UFIController_factoryImpl(n,o,p);};

m.

$UFIController_factoryImpl=function(n,o,p){
o.rootid=n.id;

return new m
(n,
Object.freeze(o),
p);};

m.prototype.

getRootNode=function(){
return this.root;};
m.prototype.

getContextArgs=function(){
return this.$UFIController_contextArgs;};
m.prototype.

getFtEntIdentifier=function(){
return this.$UFIController_contextArgs.ftentidentifier;};
m.prototype.

getInstanceID=function(){
return this.$UFIController_contextArgs.instanceid;};
m.prototype.

getFluentContentToken=function(){
return this.$UFIController_contextArgs.fluentContentToken;};
m.prototype.

shouldAutoplayLiveVODComments=function(){
return !!this.$UFIController_contextArgs.autoplayLiveVODComments;};


function m
(n,
o,
p){
var q,r;this.$UFIController_isDestroyed=false;
this.$UFIController_subscribeToFluxActions();
this.$UFIController_subscribeToSharedFluxActions();
this.root=n;
this.$UFIController_contextArgs=o;
this.$UFIController_liveSubscriptions=null;

c('UFISharedDispatcher').dispatch
(c('UFIInstanceAction').init(o,p));


c('UFIRootRegistry').registerController
(o.rootid,
o.instanceid,
o.ftentidentifier,
function(){
this.$UFIController_destroy();}.
bind(this));


this.$UFIController_domRootAdapter=new (c('UFIDomRootAdapter'))(this.root,this.$UFIController_contextArgs);


if(c('UFIConfig').feedfocusWrapperModule&&
o.location==j.NEWSSTAND){

var s=c('UFIConfig').feedfocusWrapperModule,t=
c('DOMQuery').scry(this.root,"^._5pat"),u=t[0];
if(u)(function(){
var ea=c('createArrayFromMixed')(u.children),
fa=document.createDocumentFragment();
ea.forEach(function(ga){
fa.appendChild(ga);});

c('ReactDOM').render
(c('React').createElement(s,{instanceID:o.instanceid},
c('React').createElement(c('DOMContainer.react'),null,
fa)),


u);})();}








var v=o.feedbackMode===c('UFIFeedbackMode').NEVER||
o.feedbackMode===c('UFIFeedbackMode').NONE;

this.$UFIController_state=
{payloadSource:null,
feedback:null,
oldRange:
{offset:0,
length:0},

commentIDToFocusOnMount:null,
showLoadingUFI:false,
isActiveLoading:{},
allSeenActiveLoadDirectionData:{},
requestedInitialComments:false,
isHidden:v,
commentPermalinks:{},
deletedCounts:{},
canAddCommentMap:{},
canReplyMap:{},
defaultRepliesExpandedMap:{},
repliesExpandedMap:{},
hasPagedToplevel:false,
focusTopLevelComposer:false,
featuredCommentLists:{},
featuredCommentIDs:[],
translateAllCommentID:null,









toplevelPagerClickCounts:{},
replyPagerClickCounts:{},
loadingVODComments:false,
shouldTranslateAllVisibleComments:false,
commentsLoadingTranslations:{}};


this.authorProfiles={};

this.commentcounts={};
this.comments=[];
this.repliesMap={};

var w=p.feedbacktarget?
p.feedbacktarget:
p.feedbacktargets&&p.feedbacktargets[0];

if(!this.canRenderHeader())


c('Bootloader').loadModules
(["UFIActionLinkController"],
function(ea){return new ea
(n,
o,
w);},'UFIController');




if(w)
this.$UFIController_initLiveSubscriptions(w,o);


var x=c('UFIOrderingModeStore').
getOrderingMode(this.$UFIController_contextArgs.instanceid),



y=null;
if(p.featuredcommentlists&&
p.featuredcommentlists.comments&&
p.featuredcommentlists.comments[o.ftentidentifier]){
y=
p.featuredcommentlists.comments[o.ftentidentifier];
this.$UFIController_state.featuredCommentLists[o.ftentidentifier]=
new (c('UFIFeaturedToplevelCommentListImpl'))
(o.ftentidentifier,
y.values,
p.comments);}else{


var z=p.commentlists&&p.commentlists.comments,
aa=z[o.ftentidentifier];

y=aa[x];}


if(p.featuredcommentids)



this.$UFIController_state.featuredCommentIDs=p.featuredcommentids;


this.ranges={};
this.replyRanges={};

this.commentcounts={};


this.ranges[x]=new (c('UFIRange'))
(y.range.offset,
y.range.length);


this.$UFIController_state.oldRange=
{offset:y.range.offset,
length:this.comments&&this.comments.length||0};


var ba=void 0,ca=void 0,da=void 0;
if(p.commentlists.replies)
for(ba=0;ba<y.values.length;ba++){
ca=y.values[ba];
da=p.commentlists.replies[ca];
if(da){
this.commentcounts[ca]=
this.getReplyCommentList(ca).getCommentCount();
this.replaceReplyRange
(ca,
new (c('UFIRange'))
(da.range.offset,
da.range.length));}}






if(p.featuredcommentlists)
if(p.featuredcommentlists.replies)
for(ba=0;ba<y.values.length;ba++){
ca=y.values[ba];
da=p.featuredcommentlists.replies[ca];
if(da){
this.$UFIController_state.featuredCommentLists[ca]=
new (c('UFIFeaturedReplyCommentListImpl'))
(o.ftentidentifier,
ca,
da.values,
p.comments);

this.commentcounts[ca]=
this.getReplyCommentList(ca).getCommentCount();
this.replaceReplyRange
(ca,
c('UFIRange').combine
(new (c('UFIRange'))
(da.range.offset,
da.range.length),

this.replyRanges[ca]));}}












this.$UFIController_loggingOffset=null;


this.ufiCentralUpdatesSubscriptions=
[c('UFICentralUpdates').subscribe('feedback-updated',function(ea,fa){
var ga=fa.updates;



if(o.ftentidentifier in ga){
this.$UFIController_state.payloadSource=fa.payloadSource;
this.fetchAndUpdate(this.$UFIController_state.payloadSource);}}.

bind(this))];


this.$UFIController_initArbiterSubscriptions(o);
this.onUnloadSubscription=c('Run').onUnload
(function(){return this.$UFIController_onPageUnload();}.bind(this));



this.getToplevelCommentList();


c('UFICentralUpdates').handleUpdate
(c('FeedbackPayloadSourceType').INITIAL_SERVER,
p);



if(o.islivestreaming&&
o.fluentContentToken)
(function(){
var ea=Date.now();
c('LivePinnedCommentEventCreateSubscription').subscribe
(o.fluentContentToken,
function(fa){
c('UFISubscriptionUpdates').handleLivePinnedComment
(o,
fa,
Date.now()-ea);});})

();



if(o.islivestreaming)
c('requireWeak')('UFILiveStreamingComments',function(ea){
var fa=null;
if(p.comments&&p.comments.length>0)
fa=p.comments[p.comments.length-1].fbid;

ea.start
(o.ftentidentifier,
w.commentcount,
fa,
o.showLiveVideoAnnoucements,
o.showLiveVideoBroadcastingJoinEvents);

this.scrollToTopOfCommentsInViewer();
c('Run').onLeave
(function(){return ea.stop(o.ftentidentifier);});}.

bind(this));


if(!o.lazyFetch&&!this.canRenderHeader())
this.$UFIController_renderOrderingModeSelectorIfNeeded(w);


if(this.$UFIController_contextArgs.fluentContentToken)
c('UFIVideoPlayerRegistry').registerUFIController
(this,
function(ea){

if(o.enableVODStreamingComments&&
!this.$UFIController_state.featuredCommentLists[o.ftentidentifier])

c('UFIVODStreamingComments').start(this,ea);

c('UFICommercialBreakAdapter').start
(o,
ea);

if(o.islivestreaming)
this.$UFIController_subscriptionsHandler.addSubscriptions
(ea.addListener('stateChange',function(){
if(ea.isState('playing'))



this.render();}.

bind(this)));}.


bind(this),
function(){
if(o.enableVODStreamingComments)
c('UFIVODStreamingComments').stop
(this.$UFIController_contextArgs.ftentidentifier,
o.instanceid);


c('UFICommercialBreakAdapter').stop
(o.instanceid);}.

bind(this));}


m.prototype.

$UFIController_initArbiterSubscriptions=function(n){
this.$UFIController_arbiterSubscriptions=new (c('SubscriptionsHandler'))();
this.$UFIController_arbiterSubscriptions.addSubscriptions
(c('onEnclosingPageletDestroy')
(this.root,
function(){
this.$UFIController_destroy();}.
bind(this)),

c('Arbiter').subscribe
(c('UFIUIEvents').PageCleared,
function(){
this.$UFIController_destroy();}.
bind(this)),



c('Arbiter').subscribe
('ConversationNub/destroy',
function(o,p){
if(p.root&&c('DOMQuery').contains(p.root,this.root))
this.$UFIController_destroy();}.

bind(this)));






if(n.viewas)
this.$UFIController_arbiterSubscriptions.addSubscriptions
(c('Arbiter').subscribe
('pre_page_transition',
function(o,p){
if(n.viewas!==
new (c('URI'))(p.to).getQueryData('viewas')){
c('UFIToplevelPagedCommentList').resetCommentListsForFeedbackTargetID
(n.ftentidentifier);

c('UFIToplevelStreamedCommentList').resetAllCommentLists
(n.ftentidentifier);}}));};






m.prototype.

$UFIController_initLiveSubscriptions=
function(n,
o){

this.$UFIController_clearLiveSubscriptions();

var p=Date.now(),
q=[];

if(n.ll)
q.push
(c('UFILikeSubscription').subscribe
(n.targetfbid,
function(s){
c('UFISubscriptionUpdates').handleLiveLike
(o.ftentidentifier,
s,
Date.now()-p);}));





if(n.lc)
q.push
(c('UFICommentSubscription').subscribe
(n.targetfbid,
function(s){
c('UFISubscriptionUpdates').handleLiveComment
(o.ftentidentifier,
s.comment_create_subscribe,
Date.now()-p);}));





if(n.lcl)
q.push
(c('UFICommentLikeSubscription').subscribe
(n.targetfbid,
function(s){
c('UFISubscriptionUpdates').handleLiveCommentLike
(o.ftentidentifier,
s,
Date.now()-p);}));






if(n.lti&&c('UFIConfig').typingIndicator.subscribe)
q.push
(c('UFITypingSubscriptionControllerFactory').forUFIController
(n,
o));




if(n.istipjarenabled)
c('requireWeak')('UFILiveStreamingComments',function(s){
q.push
(c('UFILiveTipJarSubscription').subscribe
(n.targetfbid,
function(t){
s.enqueueSubscribedTipJarEvent
(n,
t);}));});







var r=new (c('SubscriptionsHandler'))();


r.addSubscriptions.apply
(r,
q.filter(function(s){return !!s;}));

this.$UFIController_liveSubscriptions=r;};
m.prototype.

$UFIController_reregisterLiveSubscriptions=function(){
var n=
c('UFIFeedbackStore').getState()[this.$UFIController_contextArgs.ftentidentifier];
if(n)
this.$UFIController_initLiveSubscriptions(n,this.$UFIController_contextArgs);};

m.prototype.





scrollToTopOfCommentsInViewer=function(){
c('Arbiter').inform
(c('UFIUIEvents').AutoplayLiveComments,
{form:this.$UFIController_domRootAdapter.getParentForm()});};

m.prototype.

$UFIController_unmountActionLinks=function(){
var n=this.$UFIController_domRootAdapter.getHeadRoot();
if(n)
c('ReactDOM').unmountComponentAtNode(n);


if(c('UFIRootRegistry').isSnowliftNode(this.$UFIController_contextArgs.rootid)){
var o=this.$UFIController_domRootAdapter.getSnowliftActionRoot();
if(o)
c('ReactDOM').unmountComponentAtNode(o);}



c('ReactDOM').unmountComponentAtNode(this.root);};
m.prototype.


unitTestOnlySetFeedbackIntoState=function(n){
this.$UFIController_state.feedback=n;};
m.prototype.

$UFIController_subscribeToFluxActions=function(){
if(!this.$UFIController_subscriptionsHandler){
this.$UFIController_dispatcher=new (c('UFIDispatcher'))();
this.$UFIController_stores=
{UFICallbackStore:new (c('UFICallbackStore'))(this.$UFIController_dispatcher),
UFIReactionStore:new (c('UFIReactionStore'))(this.$UFIController_dispatcher)};


this.$UFIController_subscriptionsHandler=new (c('SubscriptionsHandler'))();
this.$UFIController_subscriptionsHandler.addSubscriptions
(this.$UFIController_stores.UFICallbackStore.on
(c('UFICommentActionType').TOGGLE_LIKE,
function(n){
c('UFIUserActions').changeCommentLike
(n.comment.id,
n.like,

{source:this.$UFIController_contextArgs.source,
target:n.target});}.


bind(this)),

this.$UFIController_stores.UFICallbackStore.on
(c('UFICommentActionType').CHANGE_REACTION,
function(n){
c('UFIUserActions').changeCommentReaction
(n.comment.id,
n.reactionType,

{source:this.$UFIController_contextArgs.source,
instanceid:this.$UFIController_contextArgs.instanceid},

n.target);}.

bind(this)),

this.$UFIController_stores.UFICallbackStore.on
(c('UFICommentActionType').REMOVE,
function(n){
c('Bootloader').loadModules(["UFICommentRemoveDialog"],function(o){
return (o.show
(function(){
c('UFIUserActions').removeComment(n.comment.id,
{source:this.$UFIController_contextArgs.source,
oneclick:false,
target:n.target});

n.onConfirm();}.
bind(this)));}.bind(this),'UFIController');}.


bind(this)),

this.$UFIController_stores.UFICallbackStore.on
(c('UFICommentActionType').TRANSLATE,
function(n){
if(!this.$UFIController_state.commentsLoadingTranslations[n.comment.id]){
this.$UFIController_state.commentsLoadingTranslations[n.comment.id]=true;
c('UFIUserActions').translateComments
(n.comment.ftentidentifier,
[n.comment.id],
n.trigger,

{source:this.$UFIController_contextArgs.source,
target:n.target});




if(c('UFICommentUtils').shouldShowTranslateAll
(this.comments,
this.repliesMap,babelHelpers['extends']({},

this.$UFIController_state.defaultRepliesExpandedMap,
this.$UFIController_state.repliesExpandedMap),

this.$UFIController_state.commentsLoadingTranslations))


this.$UFIController_state.translateAllCommentID=n.comment.id;


this.render();}}.

bind(this)),

this.$UFIController_stores.UFICallbackStore.on
(c('UFICommentActionType').TOGGLE_MARK_AS_SPAM,
function(n){
c('UFIUserActions').setHideAsSpam
(n.comment.id,
n.is_spam,

{source:this.$UFIController_contextArgs.source,
target:n.target});}.


bind(this)),

this.$UFIController_stores.UFICallbackStore.on
(c('UFIStoryActionType').CHANGE_ACCEPTED_ANSWER,
function(n){
c('UFIUserActions').changeAcceptedAnswer
(n.comment,
n.doAccept);}),



this.$UFIController_stores.UFICallbackStore.on
(c('UFICommentActionType').TOGGLE_INLINE_BAN,
function(n){return c('UFIUserActions').banUser
(n.comment,
n.ownerid,
n.is_banned,

{source:this.$UFIController_contextArgs.source,
target:n.target});}.bind(this)),



this.$UFIController_stores.UFICallbackStore.on
(c('UFICommentActionType').EMBED,
function(n){
var o=c('XCommentEmbedPluginEmbedAsyncDialogController').getURIBuilder().
setString('comment_id',n.comment.id).
getURI();
new (c('AsyncRequest'))(o).send();}),


this.$UFIController_stores.UFICallbackStore.on
(c('UFICommentActionType').SHOW_CONSTITUENT_TITLE,
function(n){
c('UFIUserActions').showConstituentTitle
(n.comment);}),



this.$UFIController_stores.UFICallbackStore.on
(c('UFICommentActionType').HIDE_CONSTITUENT_TITLE,
function(n){
c('UFIUserActions').hideConstituentTitle
(n.comment);}),



this.$UFIController_stores.UFICallbackStore.on
(c('UFIAddCommentActionType').SUBMIT_NEW,
function(n){
var o=this.$UFIController_domRootAdapter.getParentForm();
if(o)
c('UFINewCommentNotifier').onNewComment
(o,
this.$UFIController_contextArgs,
n.comment,
n.target,
n.replyCommentID,
n.timestamp);}.


bind(this)),

this.$UFIController_stores.UFICallbackStore.on
(c('UFIAddCommentActionType').SUBMIT_EDIT,
function(n){
var o=n.comment,
p=n.commentData,
q=n.target;
if(!p.visibleValue&&
!p.attachedPhoto&&
!p.attachedVideo&&
!p.attachedSticker&&
!p.attachedShareURL){

c('Bootloader').loadModules(["UFICommentRemoveDialog"],function(r){
return (r.show(function(){
return (c('UFIUserActions').removeComment(o.id,
{source:this.$UFIController_contextArgs.source,
oneclick:false,
target:q}));}.bind(this)));}.bind(this),'UFIController');}else 




c('UFIUserActions').editComment
(o.id,
p.visibleValue,
p.encodedValue,

{source:this.$UFIController_contextArgs.source,
target:q,
attachedPhoto:p.attachedPhoto,
attachedVideo:p.attachedVideo,
attachedSticker:p.attachedSticker,
attachedShareURL:p.attachedShareURL});}.



bind(this)),

this.$UFIController_stores.UFICallbackStore.on
(c('UFICommentActionType').REMOVE_PREVIEW,
function(n){return c('UFIUserActions').removePreview
(n.comment,

{source:this.$UFIController_contextArgs.source,
target:n.target});}.bind(this)),



this.$UFIController_stores.UFICallbackStore.on
(c('UFIAddCommentActionType').RETRY_SUBMIT,
function(n){return c('UFIRetryActions').retrySubmit
(n.comment,
this.$UFIController_contextArgs.source);}.bind(this)),


this.$UFIController_stores.UFICallbackStore.on
(c('UFIStoryActionType').PAGE_IN_COMMENTS,
function(n){
this.$UFIController_state.payloadSource=c('FeedbackPayloadSourceType').USER_ACTION;
this.$UFIController_pageInComments
(n.commentID,
n.direction,
n.nextRange);



this.fetchAndUpdateWithLogs(c('FeedbackPayloadSourceType').USER_ACTION);}.
bind(this)),

this.$UFIController_stores.UFICallbackStore.on
(c('UFIStoryActionType').TOGGLE_REPLIES,
function(n){
this.$UFIController_state.payloadSource=c('FeedbackPayloadSourceType').USER_ACTION;

var o=n.commentID,
p=this.$UFIController_state.repliesExpandedMap[o];
if(p){
delete this.$UFIController_state.isActiveLoading[o];
this.$UFIController_state.repliesExpandedMap[o]=false;

this.render();}else{

this.$UFIController_state.focusedReplyComposer=
{replyID:'replycomposer-'+o,
initiatorComment:null};

this.$UFIController_pageInComments
(o,
c('UFIPaging').BOTTOM,
this.$UFIController_nextRepliesRange(o));




this.fetchAndUpdateWithLogs
(c('FeedbackPayloadSourceType').USER_ACTION);}}.


bind(this)),

this.$UFIController_stores.UFICallbackStore.on
(c('UFIStoryActionType').SHOW_REPLIES,
function(n){
this.$UFIController_state.payloadSource=c('FeedbackPayloadSourceType').USER_ACTION;
this.$UFIController_state.focusedReplyComposer=
{replyID:'replycomposer-'+n.commentID,
initiatorComment:n.initiatorComment};

this.$UFIController_pageInComments
(n.commentID,
c('UFIPaging').BOTTOM,
this.$UFIController_nextRepliesRange(n.commentID));




this.fetchAndUpdateWithLogs(c('FeedbackPayloadSourceType').USER_ACTION);}.
bind(this)),

this.$UFIController_stores.UFICallbackStore.on
(c('UFIStoryActionType').COMMENTS_ARRIVED,
function(n){
this.$UFIController_state.payloadSource=n.source;
this.$UFIController_state.showLoadingUFI=false;
this.$UFIController_state.isActiveLoading={};





this.$UFIController_state.commentIDToFocusOnMount=
n.source===c('FeedbackPayloadSourceType').USER_ACTION&&

!this.$UFIController_contextArgs.isBroadcasterUFI?
this.$UFIController_getCommentIDToFocus
(n.newOffset,
n.newLength):

null;

this.$UFIController_state.oldRange=
{offset:n.newOffset,
length:n.newLength};


this.$UFIController_updateTranslationLoadingStates();

if(this.$UFIController_state.shouldTranslateAllVisibleComments&&
!c('UFIOrderingModeStore').isLiveStreaming
(this.$UFIController_contextArgs.instanceid))


this.$UFIController_fetchTranslationsForAllVisibleComments();


this.render();


if(n.source==c('FeedbackPayloadSourceType').ENDPOINT_COMMENT_FETCH){


c('Arbiter').inform(c('UFIUIEvents').CommentPager);
if(c('UFIConfig').logCommentLoad)
c('UFICommentLogger').logCommentFetchReceived
(this.$UFIController_contextArgs.ftentidentifier,
Date.now());}}.



bind(this)));}};



m.prototype.

$UFIController_subscribeToSharedFluxActions=function(){
this.$UFIController_sharedSubscriptions=
[c('UFISharedDispatcher').register(function(n){
switch(n.type){
case c('UFIInstanceActionType').REMOVE:
if(n.instanceID!==this.$UFIController_contextArgs.instanceid){

if(n.ftentidentifier===this.$UFIController_contextArgs.ftentidentifier)







this.$UFIController_reregisterLiveSubscriptions();

return;}

c('UFIRootRegistry').cleanupInstance(n.instanceID);
break;

case c('UFIInstanceActionType').TOGGLE_COMMENTS:
if(n.instanceID!==this.$UFIController_contextArgs.instanceid)
return;

this.$UFIController_state.payloadSource=
c('FeedbackPayloadSourceType').COLLAPSE_ACTION;
this.$UFIController_state.isHidden=!this.$UFIController_state.isHidden;

this.render();
break;

case c('UFIInstanceActionType').CHANGE_ORDER_MODE:
if(n.instanceID!==this.$UFIController_contextArgs.instanceid)
return;

this.$UFIController_state.payloadSource=c('FeedbackPayloadSourceType').USER_ACTION;
this.$UFIController_state.showLoadingUFI=true;

this.render();
this.fetchAndUpdate(c('FeedbackPayloadSourceType').USER_ACTION);
break;

case c('UFIInstanceActionType').REQUESTED_VOD_COMMENTS:
if(n.instanceID!==this.$UFIController_contextArgs.instanceid)
return;

this.$UFIController_state.loadingVODComments=true;
this.render();
break;

case c('UFIInstanceActionType').RECEIVED_VOD_COMMENTS:
if(n.instanceID!==this.$UFIController_contextArgs.instanceid)
return;

this.$UFIController_state.loadingVODComments=false;
this.render();
break;

case c('UFIStoryActionType').LIVE_PIN_COMMENT:
if(n.ftentidentifier!==this.$UFIController_contextArgs.ftentidentifier)
return;




var o=c('UFIComments').getComment
(n.commentID).
author;





c('ShortProfiles').get
(o,
function(p){
this.authorProfiles[o]=p;
if(!this.$UFIController_isDestroyed)
this.render();}.

bind(this));

break;

case c('UFIStoryActionType').LIVE_UNPIN_COMMENT:
if(n.ftentidentifier!==this.$UFIController_contextArgs.ftentidentifier)
return;

this.render();
break;
case c('UFIStoryActionType').SHOW_COMMENTS:
if(n.instanceID!==this.$UFIController_contextArgs.instanceid)
return;

this.$UFIController_state.isHidden=false;
this.$UFIController_state.focusTopLevelComposer=true;
c('CommentPrelude').expand(this.root,false,'ufi_controller');
if(this.staticUFI)
c('CommentPrelude').expand(this.staticUFI,false,'ufi.react');

this.render();
break;
case c('UFIInstanceActionType').TRANSLATE_ALL:
if(n.instanceID!==this.$UFIController_contextArgs.instanceid)
return;

if(this.$UFIController_contextArgs.islivestreaming)
break;

this.$UFIController_state.shouldTranslateAllVisibleComments=true;
this.$UFIController_state.translateAllCommentID=null;
this.$UFIController_fetchTranslationsForAllVisibleComments();
this.render();
break;}}.

bind(this))];};

m.prototype.

getStores=function(){
return this.$UFIController_stores;};
m.prototype.

$UFIController_nextRepliesRange=function(n){
var o=this.commentcounts[n],
p=Math.min(o,this.$UFIController_contextArgs.pagesize);

return new (c('UFIRange'))
(o-p,
p);};

m.prototype.

$UFIController_pageInComments=function(n,o,p){var q=






this.$UFIController_state,r=q.isActiveLoading,s=q.allSeenActiveLoadDirectionData,t=q.repliesExpandedMap,u=q.toplevelPagerClickCounts,v=q.replyPagerClickCounts,

w=this.$UFIController_contextArgs.ftentidentifier,

x=n!==w;

r[n]=o;

var y=s[n]||{};
y[o]=true;
s[n]=y;

if(x){
t[n]=true;}else 

this.$UFIController_state.hasPagedToplevel=true;


if(n==w){
var z=c('UFIOrderingModeStore').
getOrderingMode(this.$UFIController_contextArgs.instanceid),
aa=u[z]||0;
u[z]=aa+1;
this.getRange().updateRequestedRange
(p.offset,
p.length);}else{


var ba=v[n]||0;
v[n]=ba+1;
this.replyRanges[n].updateRequestedRange
(p.offset,
p.length);}};


m.prototype.

$UFIController_fetchInitialComments=function(){
this.$UFIController_state.payloadSource=c('FeedbackPayloadSourceType').USER_ACTION;
this.$UFIController_state.showLoadingUFI=true;
this.$UFIController_state.requestedInitialComments=true;

var n=this.getToplevelCommentList().getCommentCount(),
o=Math.min(n,this.$UFIController_contextArgs.numLazyComments||0);



c('forEachObject')
(this.ranges,
function(p){return p.updateRequestedRange(n-o,o);});


this.fetchAndUpdate(c('FeedbackPayloadSourceType').USER_ACTION);

c('UFIFeedbackTargets').getFeedbackTarget
(this.$UFIController_contextArgs.ftentidentifier,
function(p){
if(this.canRenderHeader()){
this.renderHeader(p);}else 

this.$UFIController_renderOrderingModeSelectorIfNeeded(p);}.

bind(this));};

m.prototype.

$UFIController_renderOrderingModeSelectorIfNeeded=function(n){
if(this.shouldShowCommentOrderingModeSelector(n))
c('DOM').scry(this.root,"^form ._3csb").

slice(0,1).forEach(function(o){
c('ReactDOM').render
(c('React').createElement(c('BootloadedComponent.react'),
{bootloadPlaceholder:c('React').createElement('div',null),
bootloadLoader:
c('JSResource')('UFIOrderingModeSelectorContainer.react').__setRef('UFIController'),

contextArgs:this.$UFIController_contextArgs,
feedback:n}),

o);}.

bind(this));};

m.prototype.

$UFIController_updateTranslationLoadingStates=function(){
if(Object.keys(this.$UFIController_state.commentsLoadingTranslations).length==0)
return;

this.comments.forEach(function(n){

if(this.$UFIController_state.commentsLoadingTranslations[n.id]&&
!!n.translationdata)

delete this.$UFIController_state.commentsLoadingTranslations[n.id];}.

bind(this));
Object.keys(this.repliesMap).forEach(function(n){
var o=this.repliesMap[n];
o.forEach(function(p){

if(this.$UFIController_state.commentsLoadingTranslations[p.id]&&
!!p.translationdata)

delete this.$UFIController_state.commentsLoadingTranslations[p.id];}.

bind(this));}.
bind(this));};
m.prototype.

$UFIController_fetchTranslationsForAllVisibleComments=function(){

var n=this.comments.
filter(function(q){return this.$UFIController_shouldFetchTranslationForComment(q);}.bind(this)).
map(function(q){return q.id;}),


o=babelHelpers['extends']({},
this.$UFIController_state.defaultRepliesExpandedMap,
this.$UFIController_state.repliesExpandedMap),

p=[];
Object.keys(this.repliesMap).filter
(function(q){return o[q];}).
forEach(function(q){
p=p.concat(this.repliesMap[q]);}.
bind(this));

n=n.concat
(p.
filter(function(q){return this.$UFIController_shouldFetchTranslationForComment(q);}.bind(this)).
map(function(q){return q.id;}));


if(n.length>0){
n.forEach
(function(q){return this.$UFIController_state.commentsLoadingTranslations[q]=true;}.bind(this));

c('UFIUserActions').translateComments
(this.$UFIController_contextArgs.ftentidentifier,
n,
c('TranslationTrigger').TRANSLATE_ALL,
{source:this.$UFIController_contextArgs.source});}};


m.prototype.

$UFIController_shouldFetchTranslationForComment=function(n){
return n.istranslatable&&
!n.translationdata&&
!this.$UFIController_state.commentsLoadingTranslations[n.id];};
m.prototype.

canRenderHeader=function(){
return !!this.$UFIController_domRootAdapter.getHeadRoot();};
m.prototype.

renderHeader=function(n){
if(!this.canRenderHeader())
return;




var o=
!!this.$UFIController_contextArgs.hasReactions&&
(this.$UFIController_contextArgs.feedbackMode==='none'||
this.$UFIController_contextArgs.feedbackMode==='toggle')&&
n.displayreactions&&
this.shouldShowCommentOrderingModeSelector(n)&&
(!this.$UFIController_contextArgs.lazyFetch||this.$UFIController_state.requestedInitialComments);

c('ReactDOM').render
(c('React').createElement(c('UFIActionHeader.react'),
{contextArgs:this.$UFIController_contextArgs,
dispatcher:this.$UFIController_dispatcher,
feedbacktarget:n,
showCommentOrderingModeSelector:o,
stores:this.$UFIController_stores}),

this.$UFIController_domRootAdapter.getHeadRoot());


var p=c('UFIRootRegistry').isSnowliftNode(this.$UFIController_contextArgs.rootid);
if(p&&this.$UFIController_domRootAdapter.getSnowliftActionRoot())
c('ReactDOM').render
(c('React').createElement(c('UFIDispatcherContext.react'),
{dispatcher:this.$UFIController_dispatcher,
stores:this.$UFIController_stores},
c('React').createElement(c('UFIActionLinks.react'),
{contextArgs:this.$UFIController_contextArgs,
feedbacktarget:n,
showCommentOrderingModeSelector:o,
hideActorSelector:true})),


this.$UFIController_domRootAdapter.getSnowliftActionRoot());};


m.prototype.

shouldComponentUpdate=function(){

if(this.$UFIController_contextArgs.islivestreaming&&
(this.$UFIController_state.payloadSource===c('FeedbackPayloadSourceType').STREAMING||
this.$UFIController_state.payloadSource===c('FeedbackPayloadSourceType').LIVE_SEND)){

var n=
c('UFIVideoPlayerRegistry').getAvailableVideoPlayerController
(this.$UFIController_contextArgs.instanceid),

o=n?
n.isState('playing')&&
!n.getOption('WatchAndScroll','isActive'):
false,
p=c('UFICommentVisibilityStore').getVisibility
(c('UFICommentVisibilityStore').getState(),
this.$UFIController_contextArgs)===
c('UFIVisibility').VISIBLE;






return o||p;}

return true;};
m.prototype.

render=function(){
if(!this.shouldComponentUpdate())
return;



if(this.$UFIController_state.showLoadingUFI||

c('UFIOrderingModeStore').isLiveStreaming(this.$UFIController_contextArgs.instanceid)&&
this.$UFIController_state.loadingVODComments){


c('ReactDOM').render(this.$UFIController_getLoadingUFI(),this.root);
return;}


this.$UFIController_state.feedback||i(0,'without a feedback we have trouble');var n=





this.$UFIController_state.feedback,o=n.reactionsentences,p=n.likesentences,q=n.replysocialsentencemaxreplies,




r=this.comments.length||
!c('isEmpty')((o||p).current),

s=this.$UFIController_state.payloadSource;




if(r&&
l(s)&&
this.$UFIController_contextArgs.feedbackMode!==c('UFIFeedbackMode').NEVER){






this.$UFIController_state.isHidden=false;
c('CommentPrelude').expand(this.root,false,'ufi_controller');}


if(this.$UFIController_contextArgs.disableCSSHiding&&this.$UFIController_state.isHidden){
c('ReactDOM').unmountComponentAtNode(this.root);
return;}



if(this.$UFIController_contextArgs.lazyFetch&&
!this.$UFIController_state.requestedInitialComments){

c('ReactDOM').render(this.$UFIController_getLoadingUFI(),this.root);
this.$UFIController_fetchInitialComments();
return;}


var t=this.getRange();



if(this.$UFIController_loggingOffset===null)
this.$UFIController_loggingOffset=t.getOffset()+t.getLength()-1;




var u=q||-1,



v={};
v[this.$UFIController_contextArgs.ftentidentifier]=new (c('UFIRange'))
(t.offset,
t.length).
updateRequestedRange
(t.requestedOffset,
t.requestedLength);


for(var w in this.replyRanges)
v[w]=new (c('UFIRange'))
(this.replyRanges[w].offset,
this.replyRanges[w].length).
updateRequestedRange
(this.replyRanges[w].requestedOffset,
this.replyRanges[w].requestedLength);



var x=babelHelpers['extends']({},
this.$UFIController_state.defaultRepliesExpandedMap,
this.$UFIController_state.repliesExpandedMap),


y=
!!this.$UFIController_state.featuredCommentLists[this.$UFIController_contextArgs.ftentidentifier],



z=
c('UFIOrderingModeStore').isLiveStreaming(this.$UFIController_contextArgs.instanceid)?
true:

this.getToplevelCommentList().getClientHasAll()&&
t.offset===0&&
t.length===this.getToplevelCommentList().getCommentCount(),

aa=this.$UFIController_state.focusTopLevelComposer,
ba=this.$UFIController_getReplyRefToFocus(s),
ca=c('UFIOrderingModeStore').
getOrderingMode(this.$UFIController_contextArgs.instanceid),

da=
c('React').createElement(c('UFIDispatcherContext.react'),
{dispatcher:this.$UFIController_dispatcher,
stores:this.$UFIController_stores},
c('React').createElement(c('StaticUFI.react'),
{ref:function(fa){this.staticUFI=fa;}.bind(this),
feedback:this.$UFIController_state.feedback,
contextArgs:this.$UFIController_contextArgs,
repliesMap:this.repliesMap,
commentCounts:this.commentcounts,
deletedCounts:this.$UFIController_state.deletedCounts,
availableComments:this.comments,
source:this.$UFIController_contextArgs.source,
payloadSource:s,
ranges:v,
authorProfiles:this.authorProfiles,
loggingOffset:this.$UFIController_loggingOffset,
replySocialSentenceMaxReplies:u,
orderingMode:ca,
hideOrderingModeSelector:y,
commentPermalinks:this.$UFIController_state.commentPermalinks,
canAddCommentMap:this.$UFIController_state.canAddCommentMap,
canReplyMap:this.$UFIController_state.canReplyMap,
focusTopLevelComposer:aa,
focusReply:ba,
isActiveLoading:this.$UFIController_state.isActiveLoading,
allSeenActiveLoadDirectionData:
this.$UFIController_state.allSeenActiveLoadDirectionData,

repliesExpandedMap:x,
hasPagedToplevel:this.$UFIController_state.hasPagedToplevel,
commentIDToFocusOnMount:this.$UFIController_state.commentIDToFocusOnMount,
hideToplevelPager:z,
featuredCommentIDs:this.$UFIController_state.featuredCommentIDs,
loadingTranslationsMap:this.$UFIController_state.commentsLoadingTranslations,
translateAllCommentID:this.$UFIController_state.translateAllCommentID}));




c('ReactDOM').render(da,this.root);
c('LiveTimer').updateTimeStamps();


var ea=this.$UFIController_domRootAdapter.getParentForm();
if(ea)
c('Arbiter').inform
(c('UFIUIEvents').Changed,
{form:ea});




if(s!=c('FeedbackPayloadSourceType').INITIAL_SERVER)
c('Arbiter').inform('reflow');






this.$UFIController_state.focusedReplyComposer=null;

this.$UFIController_state.focusTopLevelComposer=false;};
m.prototype.

$UFIController_getReplyRefToFocus=function(n){

if(n===c('FeedbackPayloadSourceType').INITIAL_SERVER&&
this.$UFIController_state.feedback&&
this.$UFIController_state.feedback.permalinkcommentid){


return {replyID:'replycomposer-'+this.$UFIController_state.feedback.permalinkcommentid};}else

if(this.$UFIController_state.focusedReplyComposer)
return this.$UFIController_state.focusedReplyComposer;


return null;};
m.prototype.

$UFIController_getCommentIDToFocus=function(n,o){
var p=this.$UFIController_state.oldRange;


if(p&&
(p.offset!=n||p.length!=o)){

var q=n<p.offset?p.length:0;

if(q<o)

return this.comments[q].id;}


return this.$UFIController_state.commentIDToFocusOnMount;};
m.prototype.

$UFIController_expandRepliesByDefault=
function(n,
o,
p){

if(n&&o.id===n.permalinkcommentid)
return true;


if(p>1)
return true;


if(p>0&&o.interestingReplyOffset===undefined)
return true;


var q=n&&o.author===n.viewerid;
if(q&&p==1)
return true;


return false;};
m.prototype.

getNewRange=
function(n,
o,
p){

if(c('UFIOrderingModeStore').isLiveStreaming(this.$UFIController_contextArgs.instanceid)){




return new (c('UFIRange'))(0,o.feedcarded?4:50);}else 

return k
(this.getRange(),
this.commentcounts[o.ftentidentifier],
p,
n);};


m.prototype.

getNewReplyRange=
function(n,
o,
p){

var q=o.id;

if(this.replyRanges[q]){
return k
(this.getReplyRange(q),
this.commentcounts[q],
p,
n);}else

if(o.interestingReplyOffset!==undefined){
return new (c('UFIRange'))(o.interestingReplyOffset,1);}else{

var r=this.$UFIController_state.feedback&&this.$UFIController_state.feedback.isranked,
s=r?
0:
Math.min(p,2);
return new (c('UFIRange'))(0,s);}};

m.prototype.

fetchAndUpdateWithLogs=function(n){

n===this.$UFIController_state.payloadSource||i(0,
'You must set `this._state.payloadSource` before calling '+
'fetchAndUpdateWithLogs');

this.$UFIController_fetchAndUpdateImpl(n,true);};
m.prototype.

fetchAndUpdate=function(n){

n===this.$UFIController_state.payloadSource||i(0,
'You must set `this._state.payloadSource` before calling fetchAndUpdate');

this.$UFIController_fetchAndUpdateImpl(n,false);};
m.prototype.

$UFIController_getCommentListParams=
function(n){

var o=c('UFIOrderingModeStore').
getOrderingMode(this.$UFIController_contextArgs.instanceid);

return {numPagerClicks:n?
this.$UFIController_state.toplevelPagerClickCounts[o]||0:
null,
viewAs:this.$UFIController_contextArgs.viewas,
feedContext:this.$UFIController_contextArgs.feedcontext,
feedbackSource:this.$UFIController_contextArgs.source,
streamingOrderReversed:this.$UFIController_contextArgs.streamingCommentOrderReversed};};

m.prototype.

$UFIController_getCommentReplyListParams=
function(n,
o){


return {numPagerClicks:o?
this.$UFIController_state.replyPagerClickCounts[n]||0:
null,
viewAs:this.$UFIController_contextArgs.viewas,
feedContext:this.$UFIController_contextArgs.feedcontext};};

m.prototype.

$UFIController_doInitialUpdate=function(n){
var o=this.$UFIController_state.feedback,
p=this.getToplevelCommentList(),

q=this.getNewRange
(n,
this.$UFIController_contextArgs,
p.getCommentCount()),


r=c('UFIFetcher').fetchCommentsOrThrow
(p,
q,
this.$UFIController_getCommentListParams(false));


this.$UFIController_setCommentState(q,r);

var s=c('UFICommentFilters').getAuthors(r);

r.forEach(function(v){
var w=v.id,
x=this.getReplyCommentList(w),

y=this.getNewReplyRange
(n,
v,
x.getCommentCount()),


z=c('UFIFetcher').fetchCommentsOrThrow
(x,
y,
this.$UFIController_getCommentReplyListParams(w,false));


s.push.apply(s,c('UFICommentFilters').getAuthors(z));

this.$UFIController_setReplyState(y,v,z);}.
bind(this));
if(o)
s.push.apply(s,c('UFIFeedbackFilters').getRequestedIDs(o));

var t=
c('UFILivePinnedCommentStore').getPinnedCommentAuthorID
(this.$UFIController_contextArgs.ftentidentifier);

if(t)
s.push(t);


if(o&&o.acceptedanswer){
var u=
c('UFIComments').getComment(o.acceptedanswer);
if(u&&u.author)
s.push(u.author);}



Object.assign(this.authorProfiles,c('ShortProfiles').getMultiNow(s));};
m.prototype.

$UFIController_fetchAndUpdateImpl=
function(n,
o){

var p=c('UFIFeedbackTargets').getFeedbackTargetIfExists
(this.$UFIController_contextArgs.ftentidentifier);


if(!p){



var q=new Error(c('ex')
('Feedback target %s not present while rendering UFI with source %s',
this.$UFIController_contextArgs.ftentidentifier,
n));


q.type='warn';
c('ErrorUtils').reportError(q,true);
return;}


this.$UFIController_state.feedback=p;

if(l(n))
this.render();


if(this.canRenderHeader())
this.renderHeader(p);


if(!this.$UFIController_state.isHidden)
if(n===c('FeedbackPayloadSourceType').INITIAL_SERVER){
this.$UFIController_doInitialUpdate(n);
this.$UFIController_dispatcher.dispatch
(c('UFIStoryAction').commentsArrived
(this.$UFIController_contextArgs,
this.getRange().getOffset(),
this.comments.length,
n));}else 



this.fetchAllComments(n,o).done(function(){
return (this.$UFIController_dispatcher.dispatch
(c('UFIStoryAction').commentsArrived
(this.$UFIController_contextArgs,
this.getRange().getOffset(),
this.comments.length,
n)));}.bind(this));};





m.prototype.

fetchAllComments=
function(n,
o){

return c('Promise').resolve().then(function(){
return this.fetchCommentsForFeedbackTarget
(n,
o).
then(function(p){
var q=c('UFICommentFilters').getAuthors(p);


if(!this.$UFIController_state.feedback||
!this.$UFIController_state.feedback.isthreaded||
!p.length)

return q;


return this.fetchAllReplyIDsForComments
(p,
n,
o).
then(function(r){
return q.concat(r);});}.


bind(this)).then(function(p){
if(!this.$UFIController_state.feedback)
return [];


return (c('UFIFeedbackFilters').getRequestedIDs(this.$UFIController_state.feedback).
concat(p));}.

bind(this));}.

bind(this)).then(function(p){
var q=this.$UFIController_state.feedback,
r=
c('UFILivePinnedCommentStore').getPinnedCommentAuthorID
(this.$UFIController_contextArgs.ftentidentifier);

if(r)
p.push(r);

if(q&&q.acceptedanswer){
var s=
c('UFIComments').getComment(q.acceptedanswer);
if(s&&s.author)
p.push(s.author);}


return c('UFIFetcher').fetchShortProfiles(p);}.
bind(this)).then(function(p){
Object.assign(this.authorProfiles,p);}.
bind(this));};
m.prototype.

fetchCommentsForFeedbackTarget=
function(n,
o){

var p=
this.getToplevelCommentList().getCommentCount(),

q=this.getNewRange
(n,
this.$UFIController_contextArgs,
p);


return c('UFIFetcher').fetchComments
(this.getToplevelCommentList(),
q,
this.$UFIController_getCommentListParams(o)).
then(function(r){
this.$UFIController_setCommentState(q,r);

return r;}.
bind(this));};
m.prototype.

$UFIController_setCommentState=
function(n,
o){

var p=this.getToplevelCommentList(),
q=this.$UFIController_contextArgs.ftentidentifier,r=






this.$UFIController_state,s=r.deletedCounts,t=r.canAddCommentMap,u=r.canReplyMap,v=r.commentPermalinks;

this.replaceRange(n);

this.comments=o;
this.commentcounts[q]=p.getCommentCount();

s[q]=p.getDeletedCount();
t[q]=!this.$UFIController_state.featuredCommentLists[q];

o.forEach(function(w){var x=w.id,y=w.cancomment;
u[x]=y;
v[x]=p.getPermalinkForComment(x);});};

m.prototype.

fetchRepliesForComment=
function(n,
o,
p){

var q=n.id,

r=
this.getReplyCommentList(q).getCommentCount(),

s=this.getNewReplyRange
(o,
n,
r);


return c('UFIFetcher').fetchComments
(this.getReplyCommentList(q),
s,
this.$UFIController_getCommentReplyListParams(q,p)).
then(function(t){
this.$UFIController_setReplyState(s,n,t);
return t;}.
bind(this));};
m.prototype.

$UFIController_setReplyState=
function(n,
o,
p){

var q=o.id,
r=this.getReplyCommentList(q),s=









this.$UFIController_state,t=s.deletedCounts,u=s.canAddCommentMap,v=s.featuredCommentLists,w=s.defaultRepliesExpandedMap,x=s.feedback,y=s.canReplyMap,z=s.commentPermalinks;

this.replaceReplyRange(q,n);
this.repliesMap[q]=p;

this.commentcounts[q]=r.getCommentCount();
t[q]=r.getDeletedCount();

u[q]=!v[q];

w[q]=this.$UFIController_expandRepliesByDefault

(x,
o,
p.length);


p.forEach(function(aa){var ba=aa.id,ca=aa.cancomment;
y[ba]=ca;
z[ba]=r.getPermalinkForComment(ba);});};

m.prototype.

fetchAllReplyIDsForComments=
function(n,
o,
p){

var q=new (c('Promise').all)
(n.map(function(r){
return this.fetchRepliesForComment
(r,
o,
p).
then(function(s){
return c('UFICommentFilters').getAuthors(s);});}.

bind(this)));

return q.then(c('flattenArray'));};
m.prototype.

getToplevelCommentList=function(){
var n=this.$UFIController_contextArgs;

if(this.$UFIController_state.featuredCommentLists[n.ftentidentifier])
return this.$UFIController_state.featuredCommentLists[n.ftentidentifier];


if(c('UFIOrderingModeStore').isLiveStreaming(this.$UFIController_contextArgs.instanceid))
return c('UFIToplevelStreamedCommentList').getCommentList
(n.ftentidentifier,
n.islivestreaming?
c('UFIToplevelStreamedCommentList').GLOBAL_ID:
n.instanceid);



var o=c('UFIOrderingModeStore').
getOrderingMode(this.$UFIController_contextArgs.instanceid);

return c('UFIToplevelPagedCommentList').getCommentList
(n.ftentidentifier,
o);};

m.prototype.

getReplyCommentList=function(n){
if(n in this.$UFIController_state.featuredCommentLists)
return this.$UFIController_state.featuredCommentLists[n];


var o=c('UFIOrderingModeStore').
getOrderingMode(this.$UFIController_contextArgs.instanceid);

return c('UFIReplyCommentList').getCommentList
(this.$UFIController_contextArgs.ftentidentifier,
n,
o);};

m.prototype.

getRange=function(){
var n=c('UFIOrderingModeStore').
getOrderingMode(this.$UFIController_contextArgs.instanceid);

if(!(n in this.ranges)){
var o=this.getToplevelCommentList().getCommentCount(),
p=
Math.min(o,this.$UFIController_contextArgs.defaultNumCommentsToExpand);

this.ranges[n]=
new (c('UFIRange'))(o-p,p);}

return this.ranges[n];};
m.prototype.

replaceRange=function(n){
var o=c('UFIOrderingModeStore').
getOrderingMode(this.$UFIController_contextArgs.instanceid);

this.ranges[o]=n;};
m.prototype.

getReplyRange=function(n){
if(!(n in this.replyRanges))
this.replyRanges[n]=new (c('UFIRange'))();

return this.replyRanges[n];};
m.prototype.

replaceReplyRange=function(n,o){
this.replyRanges[n]=o;};
m.prototype.

$UFIController_destroy=function(){
this.$UFIController_isDestroyed=true;
this.$UFIController_unmountActionLinks();
this.$UFIController_clearAllSubscriptions();};
m.prototype.


$UFIController_clearAllSubscriptions=function(){
this.$UFIController_clearCentralUpdatesSubscriptions();
this.$UFIController_clearArbiterSubscriptions();
this.$UFIController_clearLiveSubscriptions();
this.$UFIController_clearSubscriptionHandlerSubscriptions();
this.$UFIController_clearVODCommentSubscriptions();
this.$UFIController_clearCommercialBreakSubscriptions();
if(this.onUnloadSubscription)
this.onUnloadSubscription.remove();

c('UFISharedDispatcher').dispatch
(c('UFIInstanceAction').remove
(this.$UFIController_contextArgs));};


m.prototype.





$UFIController_onPageUnload=function(){
this.$UFIController_clearLiveSubscriptions();};
m.prototype.

$UFIController_clearCommercialBreakSubscriptions=function(){
var n=this.$UFIController_contextArgs;
c('UFICommercialBreakAdapter').stop(n.instanceid);};
m.prototype.

$UFIController_clearVODCommentSubscriptions=function(){
var n=this.$UFIController_contextArgs;
c('UFIVODStreamingComments').stop
(n.ftentidentifier,
n.instanceid);};

m.prototype.

$UFIController_clearCentralUpdatesSubscriptions=function(){
this.ufiCentralUpdatesSubscriptions.forEach
(function(n){return n&&c('UFICentralUpdates').unsubscribe(n);});};

m.prototype.

$UFIController_clearArbiterSubscriptions=function(){
this.$UFIController_arbiterSubscriptions&&this.$UFIController_arbiterSubscriptions.release();};
m.prototype.

$UFIController_clearLiveSubscriptions=function(){
this.$UFIController_liveSubscriptions&&this.$UFIController_liveSubscriptions.release();};
m.prototype.

$UFIController_clearSubscriptionHandlerSubscriptions=function(){
if(this.$UFIController_subscriptionsHandler){
this.$UFIController_subscriptionsHandler.release();

this.$UFIController_subscriptionsHandler=null;}

this.$UFIController_sharedSubscriptions.forEach
(function(n){return c('UFISharedDispatcher').unregister(n);});};

m.prototype.

$UFIController_getLoadingUFI=function(){



var n=this.$UFIController_contextArgs;


return (c('React').createElement(c('UFIDispatcherContext.react'),
{dispatcher:this.$UFIController_dispatcher,
stores:this.$UFIController_stores},
c('React').createElement(c('StaticUFI.react'),
{feedback:this.$UFIController_state.feedback,
id:this.$UFIController_contextArgs.ftentidentifier,
contextArgs:n,
commentCounts:this.commentcounts,
loadingComments:true})));};



m.prototype.

shouldShowCommentOrderingModeSelector=
function(n){





var o=
this.getToplevelCommentList().getCommentCount()||
n.commentcount||
0;


return n.orderingmodes&&
o>=c('UFIConstants').minCommentsForOrderingModeSelector&&
!this.$UFIController_state.featuredCommentLists[this.$UFIController_contextArgs.ftentidentifier];};



f.exports=m;}),null);
