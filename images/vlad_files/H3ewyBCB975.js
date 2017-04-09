if (self.CavalryLogger) { CavalryLogger.start_js(["zubbQ"]); }

/** __static_js_modules__/livevideoannouncementglyph.js */




__d("LiveVideoAnnouncementGlyph",[],(function a(b,c,d,e,f,g){

f.exports={BULB:"bulb",COMMENT:"comment",EYE:"eye",LIKE:"like",LIVE_VIDEO:"live-video",CHECKMARK:"checkmark",AVATAR:"avatar"};}),

null);

/** __static_js_modules__/messengerplatforminterfacetype.js */




__d("MessengerPlatformInterfaceType",[],(function a(b,c,d,e,f,g){

f.exports={UNKNOWN_INTERFACE:0,MESSENGER_INTERFACE:1,FB_INTERFACE:2};}),

null);

/** __static_js_modules__/pagesprivatereplyconstants.js */




__d("PagesPrivateReplyConstants",[],(function a(b,c,d,e,f,g){

f.exports={Status:{REPLYABLE:"replyable",ALREADY_REPLIED:"already_replied",RECIPIENT_FILTER:"recipient_filter",EXPIRED:"expired",NOT_USER_CREATED:"not_user_created",CANNOT_MESSAGE:"cannot_message",MESSAGING_DISABLED:"messaging_disabled"},Type:{COMMENT_PAGE_POST:"comment_page_post",COMMENT_WALL_POST:"comment_wall_post",COMMENT_REVIEW:"comment_review",REVIEW:"review",WALL_POST:"wall_post"}};}),

null);

/** __static_js_modules__/ufistreamingcommentsmode.js */




__d("UFIStreamingCommentsMode",[],(function a(b,c,d,e,f,g){

f.exports={NONE:0,LIVE:1,ON_DEMAND:2};}),

null);

/** js/clientufi/UFICommentVPVs.js */






__d('UFICommentVPVs',['Map','MarauderLogger','Set'],(function a(b,c,d,e,f,g){

'use strict';





var h=new (c('Map'))();

function i(l,m){
c('MarauderLogger').log('comment_vpv',undefined,null,'comment',m);
if(!h.has(l))
h.set(l,new (c('Set'))());




h.get(l).add(m);}


function j(l,m){
if(h.has(l))



return h.get(l).has(m);

return false;}


var k=
{logVPV:i,
hasLoggedVPV:j};


f.exports=k;}),null);

/** js/clientufi/UFIStopWatch.js */






__d('UFIStopWatch',[],(function a(b,c,d,e,f,g){

'use strict';



var h='COUNTING',
i='PAUSED';
















function j(){
this.$UFIStopWatch_state=i;
this.$UFIStopWatch_duration=0;
this.$UFIStopWatch_startTime=0;}
j.prototype.

start=function(){
if(this.$UFIStopWatch_state===h)
return this;

this.$UFIStopWatch_state=h;
this.$UFIStopWatch_startTime=Date.now();
return this;};
j.prototype.

pause=function(){
if(this.$UFIStopWatch_state===i)
return this;

this.$UFIStopWatch_state=i;
this.$UFIStopWatch_duration+=Date.now()-this.$UFIStopWatch_startTime;
return this;};
j.prototype.

reset=function(){
this.$UFIStopWatch_duration=0;
this.$UFIStopWatch_startTime=0;
if(this.$UFIStopWatch_state==h)
this.$UFIStopWatch_startTime=Date.now();

return this;};
j.prototype.

state=function(){
return this.$UFIStopWatch_state;};
j.prototype.

milliseconds=function(){
var k=0;
if(this.$UFIStopWatch_state===h)
k=Date.now()-this.$UFIStopWatch_startTime;

return this.$UFIStopWatch_duration+k;};
j.COUNTING=h;j.PAUSED=i;



f.exports=j;}),null);

/** js/clientufi/actions/UFIAddCommentAction.js */






__d('UFIAddCommentAction',['UFIAddCommentActionType'],(function a(b,c,d,e,f,g){

'use strict';
















































var h=
{cancel:function i(j){

return {type:c('UFIAddCommentActionType').CANCEL,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier};},



changeContent:function i
(j,
k,
l){


return {type:c('UFIAddCommentActionType').CHANGE_CONTENT,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
text:k,
replyFBID:l};},



retrySubmit:function i
(j,
k){


return {type:c('UFIAddCommentActionType').RETRY_SUBMIT,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
comment:k};},



submitEdit:function i
(j,
k,
l,
m){


return {type:c('UFIAddCommentActionType').SUBMIT_EDIT,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
comment:k,
commentData:l,
target:m};},



submitNew:function i
(j,
k,
l,
m){


return {type:c('UFIAddCommentActionType').SUBMIT_NEW,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
comment:k,
target:l,
replyCommentID:m,
timestamp:Date.now()};}};





f.exports=h;}),null);

/** js/clientufi/actions/UFINewCommentNotifier.js */






__d('UFINewCommentNotifier',['Arbiter','UFIFeedbackTargets','UFIUserActions','UFIUIEvents'],(function a(b,c,d,e,f,g){

'use strict';










var h=
{onNewComment:function i
(j,
k,
l,
m,
n,
o){

c('UFIUserActions').addComment
(k.ftentidentifier,
l.visibleValue,
l.encodedValue,

{source:k.source,
ufiinstanceid:k.instanceid,
target:m,
replyid:n,
rootid:k.rootid,
attachedphoto:l.attachedPhoto,
attachedvideo:l.attachedVideo,
attachedsticker:l.attachedSticker,
feedcontext:k.feedcontext,
timestamp:o,
feedbackReferrer:k.feedbackReferrer,
isMarkdown:l.isMarkdown,
fluentContentToken:k.fluentContentToken,
isLiveVOD:k.isLiveVOD,
islivestreaming:k.islivestreaming,
photoTextTagID:k.photoTextTagID,
isPrivate:l.isPrivate,
isPhotoTag:k.isPhotoTag,
photoFBID:k.photoFBID,
photoTagX:k.photoTagX,
photoTagY:k.photoTagY,
attachedshareurl:l.attachedShareURL,
isBroadcasterUFI:k.isBroadcasterUFI,
enableVODCommentTimestamps:k.enableVODCommentTimestamps});



c('UFIFeedbackTargets').getFeedbackTarget
(k.ftentidentifier,
function(p){

if(j)
c('Arbiter').inform
(c('UFIUIEvents').Comment,

{ft_id:p.entidentifier,
target:m,
form:j,
isinverted:p.isranked||k.islivestreaming,
isPhotoTag:k.isPhotoTag,
photoTextTagID:k.photoTextTagID,
photoTagX:k.photoTagX,
photoTagY:k.photoTagY});});}};









f.exports=h;}),null);

/** js/clientufi/comments/onCommentIsVisible.js */






__d('onCommentIsVisible',['onViewportChanged'],(function a(b,c,d,e,f,g){

'use strict';












function h
(i,
j){

var k=void 0;

function l(n){
return i(n);}


function m(n){
if(k!==n){
k=n;
j(n);}}



return c('onViewportChanged')(m,l);}


f.exports=h;}),null);

/** js/logging/generated/FacecastStreamingCommentDelayTypedLogger.js */





__d('FacecastStreamingCommentDelayTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:FacecastStreamingCommentDelayLoggerConfig',this.$FacecastStreamingCommentDelayTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:FacecastStreamingCommentDelayLoggerConfig',this.$FacecastStreamingCommentDelayTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$FacecastStreamingCommentDelayTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$FacecastStreamingCommentDelayTypedLogger_data=babelHelpers['extends']({},
this.$FacecastStreamingCommentDelayTypedLogger_data,
j);

return this;};
h.prototype.




setCommentID=function(j){
this.$FacecastStreamingCommentDelayTypedLogger_data.comment_id=j;
return this;};
h.prototype.




setEvent=function(j){
this.$FacecastStreamingCommentDelayTypedLogger_data.event=j;
return this;};
h.prototype.




setProtocol=function(j){
this.$FacecastStreamingCommentDelayTypedLogger_data.protocol=j;
return this;};
h.prototype.





setServerTimestamp=function(j){
this.$FacecastStreamingCommentDelayTypedLogger_data.server_timestamp=j;
return this;};
h.prototype.




setVC=function(j){
this.$FacecastStreamingCommentDelayTypedLogger_data.vc=j;
return this;};



















var i=
{comment_id:true,
event:true,
protocol:true,
server_timestamp:true,
vc:true};


f.exports=h;}),null);

/** js/clientufi/models/UFISubscriptionUpdates.js */







__d('UFISubscriptionUpdates',['fbt','BanzaiODS','FacecastStreamingCommentDelayTypedLogger','ImmutableObject','LiveWWWFeedbackTypedLogger','UFICentralUpdates','UFIComments','UFIConfig','UFIConstants','UFIReactionsUtils','UFISharedDispatcher','UFIStoryAction','UFIStreamingStateType','requireWeak'],(function a(b,c,d,e,f,g,h){

'use strict';



















c('BanzaiODS').setEntitySample('feedback',.0001);

function i(k,l,m){
new (c('LiveWWWFeedbackTypedLogger'))().
setMechanism('graphql_subscriptions').
setEvent('receive_payload').
setUpdateType(k).
setTimeSinceSub(l).
updateData(m?m:{}).
log();}


var j=

{handleLiveLike:function k
(l,
m,
n){

c('BanzaiODS').bumpEntityKey('feedback','gql_like_received');
i('like',n);

if(!m||!m.feedback_like_subscribe)
return;


var o=m.feedback_like_subscribe.feedback,
p=m.feedback_like_subscribe.liker;
if(!o||!p)
return;


var q=
[{actiontype:c('UFIConstants').UFIActionType.LIKE_ACTION,
actorid:p.id,
clientid:m.feedback_like_subscribe.client_mutation_id,
entidentifier:l,
likesentences:
{current:o.does_viewer_like?
o.viewer_likes_sentence:
o.viewer_does_not_like_sentence,
alternate:o.does_viewer_like?
o.viewer_does_not_like_sentence:
o.viewer_likes_sentence},

hasviewerliked:o.does_viewer_like,
likecount:o.likers.count}],


r=o.reactions_summary;
if(r){
var s=c('UFIReactionsUtils').getReactionCountMapFromSummary
(o.reactions_summary),

t=o.viewer_feedback_reaction_info?
o.viewer_feedback_reaction_info.key:
0,
u=o.reaction_count_reduced?
o.reaction_count_reduced:
o.reactors.count;
q.push
({actiontype:c('UFIConstants').UFIActionType.REACTION,
actorid:p.id,
clientid:m.feedback_like_subscribe.client_mutation_id,
entidentifier:l,
viewerreaction:t,
reactioncount:o.reactors.count,
reactioncountreduced:u,
reactioncountmap:s,
reactionsentences:
{current:t?
o.viewer_likes_reaction_sentence:
o.viewer_does_not_like_reaction_sentence,
alternate:t?
o.viewer_does_not_like_reaction_sentence:
o.viewer_likes_reaction_sentence}});}



c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.LIVE_SEND,
{actions:q});},



handleLiveComment:function k
(l,
m,
n){

c('BanzaiODS').bumpEntityKey('feedback','gql_comment_received');
var o=m&&m.comment;
if(!o)
return;

i('comment',n,{comment_id:o.legacy_token});

var p=this.prepareCommentData
(l,
o,
n,
m.client_mutation_id);


c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.LIVE_SEND,

{comments:[p]});},




handleLiveStreamingComment:function k
(l,
m,
n){

c('BanzaiODS').bumpEntityKey('feedback','gql_streaming_comment_received');
var o=m&&m.comment;
if(!o)
return;

i('comment',n,{comment_id:o.legacy_token});
if(c('UFIConfig').shouldLogFacecastStreamingCommentDelay)
new (c('FacecastStreamingCommentDelayTypedLogger'))().
setCommentID(o.legacy_fbid).
setEvent('push').
setProtocol('Subscription').
log();


var p=this.prepareCommentData
(l,
o,
n,
m.client_mutation_id);


c('requireWeak')('UFILiveStreamingComments',function(q){
q.enqueueSubscribedComment
(l,

{comments:[p],
streamingstate:c('UFIStreamingStateType').LIVE,
priority:o.live_streaming_comment_priority},

m.feedback.top_level_comments.total_count);});},




prepareCommentData:function k
(l,
m,
n,
o){

var p=
{author:m.author.id,
body:m.body,
cancomment:m.feedback.can_viewer_comment,
canedit:m.can_viewer_edit,
canremove:m.can_viewer_delete,
canshare:m.can_viewer_share,
commentshareuri:m.www_share_uri_raw,
clientid:o,
ftentidentifier:l,
id:m.legacy_token,
fbid:m.legacy_fbid,
legacyid:m.legacy_fbid,
timestamp:
{time:m.created_time,
text:h._(["a few seconds ago","38e44a3e5dcc3861b18fc5280f589e74"])},





hasviewerliked:m.feedback.does_viewer_like,
isauthornoncoworker:m.is_author_non_coworker,
isfeatured:m.is_featured,
istranslatable:m.translation_available_for_viewer,
likecount:m.feedback.likers.count,
viewercanlike:m.feedback.can_viewer_like,
parentcommentid:
m.comment_parent&&m.comment_parent.legacy_token,
spamreplycount:0};

if(m.attachments.length){
var q=m.attachments[0],
r=q.style_list;



if(r&&r.length&&r[0]=='sticker'){
var s=q.target;
p.attachment=
{fbid:s.id,
metadata:
{source_uri:s.img.uri,
source_uri_2x:s.img_2x.uri,
width:s.img.width,
height:s.img.height,
frameCount:s.frame_count,
frameRate:s.frame_rate,
framesPerCol:s.frames_per_column,
framesPerRow:s.frames_per_row,
sprite_uri:s.sprite_img&&s.sprite_img.uri,
sprite_uri_2x:s.sprite_img_2x&&s.sprite_img_2x.uri},

type:'sticker'};}else

if(r&&r.length&&r[0]=='photo'){
var t=q.target;
p.attachment=
{fbid:t.id,
metadata:
{preview_uri:t.photo_img&&t.photo_img.uri,
width:t.photo_img.width,
height:t.photo_img.height,
url:t.url},

type:'photo'};}else


if(r&&
r.length&&
(r[0]=='share'||r[0]=='image_share')){

q.type='live_share';
p.attachment=q;}else

if(r&&
r.length&&

(r[0]=='animated_image_share'||
r[0]=='animated_image_autoplay'||
r[0]=='animated_image_video'||
r[0]=='animated_image_video_autoplay')){


q.type='gif';
p.attachment=q;}else
if(r&&r.length&&r[0]=='video_inline'){
q.type='video';
p.attachment=q;}else
if(r&&r.length&&r[0]=='comment_place_info'){
q.type='live_comment_place_info';
p.attachment=q;}}



var u=m.feedback;
if(u.reactions_summary){
p.canviewerreact=u.can_viewer_react;
p.reactioncount=u.reactors.count;
p.reactioncountmap=
c('UFIReactionsUtils').getReactionCountMapFromSummary
(u.reactions_summary);

p.reactioncountreduced=u.reaction_count_reduced?
u.reaction_count_reduced:
u.reactors.count;
p.viewerreaction=u.viewer_feedback_reaction_info?
u.viewer_feedback_reaction_info.key:
0;}

return p;},


handleLivePinnedComment:function k
(l,
m,
n){

var o=m.pinned_comment_event_create_subscribe.
pinned_comment_event.pinned_comment;

if(o){

var p=j.prepareCommentData
(l.ftentidentifier,
o,
n,
m.client_mutation_id);



c('UFIComments').setComment
(p.id,
new (c('ImmutableObject'))(p));


c('UFISharedDispatcher').dispatch
(c('UFIStoryAction').pinComment
(l,
p.id));}else 



c('UFISharedDispatcher').dispatch
(c('UFIStoryAction').unpinComment
(l));},





handleLiveCommentLike:function k
(l,
m,
n){

i('comment_like',n);
var o=
m&&
m.comment_like_subscribe&&
m.comment_like_subscribe.feedback;
if(!o)
return;


var p=null;
if(o.reactions_summary)
p=
{reactioncount:o.reactors.count,
reactioncountmap:
c('UFIReactionsUtils').getReactionCountMapFromSummary
(o.reactions_summary),

reactioncountreduced:o.reaction_count_reduced?
o.reaction_count_reduced:
o.reactors.count,
viewerreaction:o.viewer_feedback_reaction_info?
o.viewer_feedback_reaction_info.key:
0};



c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.LIVE_SEND,

{actions:
[{actiontype:c('UFIConstants').UFIActionType.COMMENT_LIKE,
clientid:m.comment_like_subscribe.client_mutation_id,
commentid:o.legacy_comment_token,
likecount:o.likers&&o.likers.count,
reactiondata:p,
viewerliked:o.does_viewer_like}]});}};






f.exports=j;}),null);

/** js/clientufi/models/VPVD/UFICommentVPVDLogging.js */





__d('UFICommentVPVDLogging',['csx','Banzai','Parent','UFIConfig','UFIOrderingModeStore','UFIStopWatch','UFIStreamingCommentsMode','WebCommentViewOption'],(function a(b,c,d,e,f,g,h){

'use strict';































var i=c('UFIConfig').commentVPVD;

function j(k){var l=








k.renderedComment,m=l.comment,n=l.isLivePinnedComment,o=k.contextArgs,p=k.node,q=k.stopWatch;

if(q.state()===c('UFIStopWatch').COUNTING)



return {state:'still visible - not logged',
instanceid:o.instanceid,
fbid:m.fbid,
duration_ms:q.milliseconds()};



var r=q.milliseconds();
if(r>=0&&r<i.min_duration_to_log)


return {state:'small duration - not logged',
instanceid:o.instanceid,
fbid:m.fbid,
duration_ms:r};



var s=c('Parent').byClass(p,"public/feedobject/root"),
t=null,
u=null;
if(s){

t=JSON.parse(s.getAttribute('data-ft'));
u=s.getAttribute('data-referrer');}


var v=c('UFIOrderingModeStore').
getState().
get(o.instanceid),

w=c('UFIStreamingCommentsMode').NONE;
if(v===c('WebCommentViewOption').LIVE_STREAMING)
if(o.islivestreaming){
w=c('UFIStreamingCommentsMode').LIVE;}else
if(o.isLiveVOD)
w=c('UFIStreamingCommentsMode').ON_DEMAND;



var x=
{comment_fbid:m.fbid,
comment_id:m.id,
container_module:o.location,
duration_ms:r,
is_live_pinned_comment:n,
is_on_sponsored_story:!!o.isSponsored,
is_page_comment:!!o.isPage,
is_reply:!!m.parentcommentid,
mf_story_key:t?t.mf_story_key:null,
order_mode:v,
qid:t?t.qid:null,
referrer_source:u,
streaming_comments_mode:w};

q.reset();

c('Banzai').post('comment_vpvd',x);

return babelHelpers['extends']
({state:'logged',
instanceid:o.instanceid,
fbid:m.fbid,
duration_ms:r},
x);}



f.exports=
{log:j};}),null);

/** js/clientufi/models/VPVD/UFICommentVPVDState.js */





__d('UFICommentVPVDState',['invariant','Arbiter','Parent','UFICommentVisibilityStore','UFICommentVPVDLogging','UFIConfig','UFIRootRegistry','UFIStopWatch','UFIVisibility','UserActivity','ViewportTrackingHelper','getActiveElement'],(function a(b,c,d,e,f,g,h){

'use strict';




















var i=c('UFIConfig').commentVPVD,



j=
{INFOCUS:'INFOCUS',
BLURRED_NEW:'BLURRED_NEW',
BLURRED_INACTIVE:'BLURRED_INACTIVE',
BLURRED_SNOWLIFT_OTHER:'BLURRED_SNOWLIFT_OTHER',
BLURRED_UNDER_LAYER:'BLURRED_UNDER_LAYER',
BLURRED_NO_NODE:'BLURRED_NO_NODE'},

k='changed',

l=new (c('Arbiter'))(),
m=null,
n=false,
o=false,
p={};

function q(w){
if(!i.debug_console)
return;




console.table&&console.table
([{isFocusInLayer:n,
isSnowliftOpen:o,
userIsActive:c('UserActivity').isActive(i.idle_timeout)}]);

console.table&&console.table
(Object.keys(p).map(function(x){
var y=p[x];

return {instanceID:y.contextArgs.instanceid,
fbid:y.renderedComment.comment.fbid,
state:y.state,
visibility:y.visibility,
counting:y.stopWatch.state()};}));}





function r(w){
var x=Object.keys(w);
if(!x.length)
return;

x.forEach
(function(y){return t(w[y]);});


p=babelHelpers['extends']({},
p,
w);

l.inform(k);}


function s(w,x){var y;
r((y={},y[
w]=x,y));}



function t(w){

if(w.visibility==c('UFIVisibility').VISIBLE&&
w.state==j.INFOCUS){

w.stopWatch.start();}else 

w.stopWatch.pause();}



function u(w){
if(!c('UserActivity').isActive(i.idle_timeout))
return j.BLURRED_INACTIVE;

if(n&&!o){
if(!w.node)
return j.BLURRED_NO_NODE;

if(!m)
return j.BLURRED_UNDER_LAYER;


w.node||h(0,'for flow type check');
m||h(0,'for flow type check');
var x=c('ViewportTrackingHelper').isDescendantOf
(w.node,
m);


return x?
j.INFOCUS:
j.BLURRED_UNDER_LAYER;}

if(o)
if(c('UFIRootRegistry').isSnowliftNode(w.contextArgs.rootid)){
return j.INFOCUS;}else 

return j.BLURRED_SNOWLIFT_OTHER;


return j.INFOCUS;}


var v=
{subscribe:function w(x){
return l.subscribe(k,x);},


unsubscribe:function w(x){
l.unsubscribe(x);},


getState:function w(){
return p;},


getKey:function w
(x,
y){

var z=x.isLivePinnedComment?'/P':'';
return y.instanceid+'/'+x.comment.fbid+z;},


initComment:function w
(x,
y,
z){

var aa=v.getKey(x,y),
ba=p[aa];

if(!ba&&!z){

return;}else
if(!ba){
var ca=
{renderedComment:x,
contextArgs:y,
node:z,
state:j.BLURRED_NEW,
stopWatch:new (c('UFIStopWatch'))(),
visibility:c('UFICommentVisibilityStore').getVisibility
(c('UFICommentVisibilityStore').getState(),
y,
x)};


ca.state=u(ca);

s(aa,ca);}else
if(!z){
ba.stopWatch.pause();
s(aa,babelHelpers['extends']({},
ba,
{state:j.BLURRED_NO_NODE}));}else 


s(aa,babelHelpers['extends']({},
ba,
{node:z,
state:u(ba)}));},




updateAllStates:function w(x){
r
(Object.keys(p).reduce(function(y,z){
y[z]=babelHelpers['extends']({},
p[z],
{state:u(p[z])});

return y;},
{}));


q(x);},


cleanupUFIInstance:function w(x){
var y=[];

Object.keys(p).
filter
(function(z){return p[z].contextArgs.instanceid==x;}).

forEach(function(z){
p[z].stopWatch.pause();
var aa=c('UFICommentVPVDLogging').log(p[z]);
if(i.debug_console)
y.push(aa);

delete p[z];});


if(i.debug_console)


console.table&&console.table(y);},



onCommentVisibilityChanged:function w(){
var x=c('UFICommentVisibilityStore').getState();

r
(Object.keys(p).reduce(function(y,z){var aa=
p[z],ba=aa.renderedComment,ca=aa.contextArgs,da=aa.visibility,
ea=c('UFICommentVisibilityStore').getVisibility
(x,
ca,
ba),


fa=da!=ea;
if(!fa)
return y;


y[z]=babelHelpers['extends']({},
p[z],
{visibility:ea});

return y;},
{}));


q('UFICommentVisibilityStore.changed');},


onClickDocument:function w(){
var x=c('getActiveElement')();
if(!x){
m=null;
n=false;}else{

m=c('Parent').byClass(x,'uiContextualLayerParent');
n=!!m;}},



onSnowliftOpen:function w(){
o=true;},


onSnowliftClose:function w(){
o=false;},


debug:function w(){
q('debug');}};



f.exports=v;}),null);

/** js/modules/UserActivityEmitter.js */





__d('UserActivityEmitter',['invariant','EventEmitter','UserActivity','clearTimeout','setTimeout'],(function a(b,c,d,e,f,g,h){

'use strict';










var i='change',




j={};k.

















factory=function(l){
if(!j[l])
j[l]=new k(l);

return j[l];};


function k(l){this.$UserActivityEmitter_timeUntilIdle=250;this.





























$UserActivityEmitter_onUserIsActive=function(){
if(this.$UserActivityEmitter_lastActiveState=='INACTIVE'){
this.$UserActivityEmitter_lastActiveState='ACTIVE';
this.$UserActivityEmitter_emitter.emit(i,'ACTIVE');}


if(this.$UserActivityEmitter_idleTimeout)
c('clearTimeout')(this.$UserActivityEmitter_idleTimeout);


this.$UserActivityEmitter_idleTimeout=c('setTimeout')
(this.$UserActivityEmitter_onUserTimedOut,
this.$UserActivityEmitter_timeUntilIdle);}.

bind(this);this.

$UserActivityEmitter_onUserTimedOut=function(){
this.$UserActivityEmitter_lastActiveState='INACTIVE';
this.$UserActivityEmitter_emitter.emit(i,'INACTIVE');

c('clearTimeout')(this.$UserActivityEmitter_idleTimeout);
this.$UserActivityEmitter_idleTimeout=null;}.
bind(this);l>c('UserActivity').EVENT_INTERVAL_MS||h(0,'UserActivityEmitter: `timeUntilIdle` should be longer than '+'%sms (`UserActivity.EVENT_INTERVAL_MS`).',c('UserActivity').EVENT_INTERVAL_MS);this.$UserActivityEmitter_timeUntilIdle=l;this.$UserActivityEmitter_emitter=new (c('EventEmitter'))();this.$UserActivityEmitter_lastActiveState=c('UserActivity').isActive(l)?'ACTIVE':'INACTIVE';this.$UserActivityEmitter_activitySubscription=c('UserActivity').subscribe(this.$UserActivityEmitter_onUserIsActive);if(this.$UserActivityEmitter_lastActiveState=='ACTIVE')this.$UserActivityEmitter_onUserIsActive();}k.prototype.subscribe=function(l){return this.$UserActivityEmitter_emitter.addListener(i,l);};k.prototype.getState=function(){return this.$UserActivityEmitter_lastActiveState;};


f.exports=k;}),null);

/** js/clientufi/models/VPVD/UFICommentVPVD.js */





__d('UFICommentVPVD',['Arbiter','Event','SubscriptionsHandler','UFICommentVisibilityStore','UFICommentVPVDLogging','UFICommentVPVDState','UFIConfig','UFIInstanceActionType','UFISharedDispatcher','UserActivityEmitter'],(function a(b,c,d,e,f,g){

'use strict';
















var h=c('UFIConfig').commentVPVD,

i=false,
j=null,
k=new (c('SubscriptionsHandler'))(),
l=null,
m=null;

function n(){
if(j)
return;

j=setTimeout(function(){
j=null;
var p=c('UFICommentVPVDState').getState(),
q=[];

Object.keys(p).forEach(function(r){
var s=c('UFICommentVPVDLogging').log(p[r]);
if(h.debug_console)
q.push(s);});



if(h.debug_console)


console.table&&console.table(q);},

10);}


var o=
{init:function p(){
if(i||!c('UFICommentVPVDState'))
return;


i=true;

m=c('UFISharedDispatcher').register(function(q){
if(q.type==c('UFIInstanceActionType').REMOVE)
c('UFICommentVPVDState').cleanupUFIInstance(q.instanceID);});



l=c('UserActivityEmitter').factory
(h.idle_timeout);


k=new (c('SubscriptionsHandler'))();
k.addSubscriptions
(c('UFICommentVisibilityStore').addListener(function(){
var q=c('UFICommentVPVDState').getState();
c('UFICommentVPVDState').onCommentVisibilityChanged();
if(q!==c('UFICommentVPVDState').getState())
n();}),



{remove:function q(){
if(m){
c('UFISharedDispatcher').unregister(m);
m=null;}}},



c('Event').listen(document.documentElement,'click',function(){
c('UFICommentVPVDState').onClickDocument();
c('UFICommentVPVDState').updateAllStates('document onClick');
n();}),

l.subscribe(function(q){
c('UFICommentVPVDState').updateAllStates('user-active = '+q);
if(q!='ACTIVE')
n();}),


c('Arbiter').subscribe('reflow',function(){
c('UFICommentVPVDState').updateAllStates('reflow');
n();}),

c('Arbiter').subscribe('PhotoSnowlift.OPEN',function(){
c('UFICommentVPVDState').onSnowliftOpen();
c('UFICommentVPVDState').updateAllStates('PhotoSnowlift.OPEN');
n();}),

c('Arbiter').subscribe('PhotoSnowlift.CLOSE',function(){
c('UFICommentVPVDState').onSnowliftClose();
c('UFICommentVPVDState').updateAllStates('PhotoSnowlift.CLOSE');
n();}));},




enableVPVDLogging:function p(q){

if(!q.location||
!h.locations)

return false;



return (h.everywhere||
h.locations.includes
(q.location));}};






f.exports=o;}),null);

/** js/clientufi/stores/UFICallbackStore.js */






__d('UFICallbackStore',['FluxStore'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits
















(j,c('FluxStore'));i=h&&h.prototype;j.prototype.

__onDispatch=function(k){
var l=k.type,m=babelHelpers.objectWithoutProperties(k,['type']);

this.__emitter.emit(l,m);};
j.prototype.

on=function(k,l){
return this.__emitter.addListener(k,l);};
j.prototype.

remove=function(){
this.__emitter.removeAllListeners();};
function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/components/UFI/Comments/UFICommentVPVDTracker.react.js */





__d('UFICommentVPVDTracker.react',['cx','React','ReactDOM','SubscriptionsHandler','UFICommentAction','UFICommentVisibilityStore','UFICommentVPVD','UFICommentVPVDState','UFIConfig','UFISharedDispatcher','UFIVisibility','ViewportTrackingHelper','onCommentIsVisible'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,




















k=c('React').Children,l=c('React').PropTypes,
m=c('UFIConfig').commentVPVD;










function n(p){
return c('UFICommentVisibilityStore').getVisibility
(c('UFICommentVisibilityStore').getState(),
p.contextArgs)===
c('UFIVisibility').VISIBLE;}
i=babelHelpers.inherits

(o,c('React').Component);j=i&&i.prototype;












function o(p){
j.constructor.call(this,p);this.state={isVisible:false};this.



























































isCommentVisible=function(q){
if(!n(this.props))
return false;



var r=
{height:q.bottom-q.top,
width:0};

return c('ViewportTrackingHelper').isVisibleInDimension
(r,

c('ReactDOM').findDOMNode(this),
m.min_visible_size);}.

bind(this);this.

onCommentVisibilityChanged=function(q){
this.setState({isVisible:q});
c('UFISharedDispatcher').dispatch
(c('UFICommentAction').changeVisibility
(this.props.contextArgs,
this.props.renderedComment,
q?c('UFIVisibility').VISIBLE:c('UFIVisibility').HIDDEN));}.


bind(this);if(c('UFICommentVPVD').enableVPVDLogging(p.contextArgs))c('UFICommentVPVD').init();this.$UFICommentVPVDTracker_subscriptions=new (c('SubscriptionsHandler'))();}o.prototype.componentDidMount=function(){if(c('UFICommentVPVD').enableVPVDLogging(this.props.contextArgs))this.$UFICommentVPVDTracker_subscriptions.addSubscriptions(c('onCommentIsVisible')(this.isCommentVisible,this.onCommentVisibilityChanged));};o.prototype.componentWillUnmount=function(){this.$UFICommentVPVDTracker_subscriptions.release();};o.prototype.render=function(){var p=this.props,q=this.state,r=k.only(p.children);if(!c('UFICommentVPVD').enableVPVDLogging(p.contextArgs))return r;var s=m.debug_html;return c('React').createElement('div',{'data-debugstate':s?q.isVisible?'fully visible':'not fully visible':null,className:"_3b-9"+(s?' '+"_3b-a":'')+(s&&q.isVisible?' '+"_3b-b":'')+(s&&!q.isVisible?' '+"_3b-c":''),ref:function t(u){return c('UFICommentVPVDState').initComment(p.renderedComment,p.contextArgs,u);}},r);};o.propTypes={renderedComment:l.object.isRequired,contextArgs:l.object.isRequired};



f.exports=o;}),null);

/** js/components/UFI/UFIActorIconContainer.react.js */






__d('UFIActorIconContainer.react',['cx','Image.react','React','ShortProfiles','UFIBusinessActorIcon.react','XUISpinner.react','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,










k=c('React').PropTypes,

l=c('React').createElement(c('XUISpinner.react'),{size:'large'});i=babelHelpers.inherits

(m,c('React').Component);j=i&&i.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.





state=
{actor:null},o;}m.prototype.


componentWillMount=function(){
this.$UFIActorIconContainer_fetchActorData();};
m.prototype.

componentDidUpdate=function(n){
if(this.props.actorID!==n.actorID)
this.$UFIActorIconContainer_fetchActorData();};

m.prototype.

$UFIActorIconContainer_fetchActorData=function(){
c('ShortProfiles').get
(this.props.actorID,
function(n){return this.setState({actor:n});}.bind(this));};

m.prototype.

render=function(){
var n=this.state.actor;

if(!n)
return l;


var o=c('joinClasses')
("img UFIActorImage _54ru",
this.props.className);



return (n.isBusinessPersona?
c('React').createElement(c('UFIBusinessActorIcon.react'),
{classNames:o,
firstName:n.firstName,
lastName:n.lastName,
textClassNames:"UFIBusinessActorIconText"}):

c('React').createElement(c('Image.react'),
{alt:n.name,
className:o,
src:n.thumbSrc}));};


m.propTypes={actorID:k.string.isRequired,className:k.string};


f.exports=m;}),null);

/** js/photos/upload/ClipboardPhotoUploader.js */




__d('ClipboardPhotoUploader',['ArbiterMixin','AsyncRequest','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits






(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;





function j(k,l){'use strict';
i.constructor.call(this);
this.uploadURIString=k;
this.data=l;}
j.prototype.

handlePaste=function(event){'use strict';
var k=j.getImages(event);
for(var l=0;l<k.length;++l){
var m=new FormData();
m.append('pasted_file',k[l]);

var n=new (c('AsyncRequest'))();
n.
setURI(this.uploadURIString).
setData(this.data).
setRawData(m).
setHandler(function(o){
this.inform('upload_success',o);}.
bind(this)).
setErrorHandler(function(o){
this.inform('upload_error',o);}.
bind(this)).
setAbortHandler(function(o){
this.inform('upload_error',o);}.
bind(this));
this.inform('upload_start');
n.send();


break;}};

j.

getImages=function(event){'use strict';
if(!event.clipboardData)
return [];


var k=event.clipboardData.items;
if(!k)
return [];


var l,m=[];
for(var n=0;n<k.length;++n){
l=k[n];
if(l.kind==='string')





return [];

if(l.kind==='file'&&l.type.indexOf('image/')!==-1)
m.push(l.getAsFile());

if(l.kind==='blob')
m.push(l.blob);}



return m;};



f.exports=j;}),null);

/** js/ui/core/ui/form/mentions/MentionsInputUtils.js */




__d("MentionsInputUtils",[],(function a(b,c,d,e,f,g){

var h=





{generateDataFromTextWithEntities:function i(j){
var k=j.text,
l=[];

(j.ranges||[]).forEach(function(n){
var o=n.entity;







if(!o.external&&
!n.videoTimestamp&&
!n.sphericalViewport&&
!/\D/.test(o.id))

l.push
({uid:o.id,
text:k.substr(n.offset,n.length),
offset:n.offset,
length:n.length,
weakreference:!!o.weakreference});});




var m=
{value:k,
mentions:l};


return m;}};



f.exports=h;}),null);

/** js/photos/snowflake/SnowflakePermalinkUtils.js */





__d('SnowflakePermalinkUtils',['URI'],(function a(b,c,d,e,f,g){







var h=/\/[^/]+\/(albums\/([^/]+)|posts\/([a-zA-Z]+[^/]+))\/([^/]+\/)?/,
i=/\/[^/]+\/(albums|posts)\/([^/]+)\/([^/]+\/)?/,

j=

{isPermalinkURI:function k(l){
l=new (c('URI'))(l);
return h.test(l.getPath());},



parseURI:function k(l){
if(!this.isPermalinkURI(l))
return {};


l=new (c('URI'))(l);
var m=l.getPath().match(i);


return {setToken:m[2],
entIdentifierToken:m[3],
photoID:l.getQueryData().photo_id};}};




f.exports=j;}),null);

/** shared/comment_live_typing/AbstractCommentLiveTypingController.js */





__d('AbstractCommentLiveTypingController',['ex','destroyOnUnload'],(function a(b,c,d,e,f,g){

'use strict';












var h=
{START:'start',
STOP:'stop'},




i=10*1000;












function j
(k,
l,
m){

this.$AbstractCommentLiveTypingController_feedbackTargetID=k;
this.$AbstractCommentLiveTypingController_replyParentCommentID=l;
this.$AbstractCommentLiveTypingController_actorID=m;

this.$AbstractCommentLiveTypingController_typingEventPublisher=null;

this.$AbstractCommentLiveTypingController_attemptedPublisherBootload=false;
this.$AbstractCommentLiveTypingController_lastTypingEventTimestamp=0;
this.$AbstractCommentLiveTypingController_lastAttemptedTypingEvent=null;

c('destroyOnUnload')(this.destroy.bind(this));}
j.prototype.

destroy=function(){
this.$AbstractCommentLiveTypingController_typingEventPublisher&&this.$AbstractCommentLiveTypingController_typingEventPublisher.destroy();
this.$AbstractCommentLiveTypingController_typingEventPublisher=null;

this.$AbstractCommentLiveTypingController_attemptedPublisherBootload=false;
this.$AbstractCommentLiveTypingController_lastTypingEventTimestamp=0;
this.$AbstractCommentLiveTypingController_lastAttemptedTypingEvent=null;};
j.prototype.






bootloadPublisherModule=function(k){
throw new Error(c('ex')
('bootloadPublisherModule not implemented, '+
'should be overridden by subclass'));};

j.prototype.

$AbstractCommentLiveTypingController_onPublisherBootload=
function(k){




var l=new k
(this.$AbstractCommentLiveTypingController_feedbackTargetID,
this.$AbstractCommentLiveTypingController_replyParentCommentID,
this.$AbstractCommentLiveTypingController_actorID),





















m=Date.now(),
n=this.$AbstractCommentLiveTypingController_lastTypingEventTimestamp;

if(n&&
n+i>=m){

var o=this.$AbstractCommentLiveTypingController_lastAttemptedTypingEvent;
if(o===h.START){
l.handleStartEvent();}else
if(o===h.STOP)
l.handleStopEvent();}



this.$AbstractCommentLiveTypingController_typingEventPublisher=l;};
j.prototype.

$AbstractCommentLiveTypingController_attemptBootloadTypingEventPublisher=function(){
if(this.$AbstractCommentLiveTypingController_attemptedPublisherBootload||!this.$AbstractCommentLiveTypingController_feedbackTargetID)
return;


this.$AbstractCommentLiveTypingController_attemptedPublisherBootload=true;
this.bootloadPublisherModule(this.$AbstractCommentLiveTypingController_onPublisherBootload.bind(this));};
j.prototype.





attemptPublishStartEvent=function(){
this.$AbstractCommentLiveTypingController_lastAttemptedTypingEvent=h.START;
this.$AbstractCommentLiveTypingController_lastTypingEventTimestamp=Date.now();

if(this.$AbstractCommentLiveTypingController_typingEventPublisher){
this.$AbstractCommentLiveTypingController_typingEventPublisher.handleStartEvent();}else
if(!this.$AbstractCommentLiveTypingController_attemptedPublisherBootload)
this.$AbstractCommentLiveTypingController_attemptBootloadTypingEventPublisher();};

j.prototype.





attemptPublishStopEvent=function(){
this.$AbstractCommentLiveTypingController_lastAttemptedTypingEvent=h.STOP;
this.$AbstractCommentLiveTypingController_lastTypingEventTimestamp=Date.now();

if(this.$AbstractCommentLiveTypingController_typingEventPublisher){
this.$AbstractCommentLiveTypingController_typingEventPublisher.handleStopEvent();}else
if(!this.$AbstractCommentLiveTypingController_attemptedPublisherBootload)
this.$AbstractCommentLiveTypingController_attemptBootloadTypingEventPublisher();};




f.exports=j;}),null);

/** js/components/UFI/UFIAddCommentLiveTypingController.js */





__d('UFIAddCommentLiveTypingController',['AbstractCommentLiveTypingController','Bootloader'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits






(j,c('AbstractCommentLiveTypingController'));i=h&&h.prototype;


function j
(k,
l,
m){

i.constructor.call(this,k,l,m);}
j.prototype.

bootloadPublisherModule=function(k){
c('Bootloader').loadModules(["UFIAddCommentLiveTypingPublisher"],k,'UFIAddCommentLiveTypingController');};
j.prototype.

attemptPublishStartEvent=function(){
i.attemptPublishStartEvent.call(this);};
j.prototype.

attemptPublishStopEvent=function(){
i.attemptPublishStopEvent.call(this);};



f.exports=j;}),null);

/** js/components/UFI/UFIGifButton.react.js */





__d('UFIGifButton.react',['cx','fbt','Arbiter','Bootloader','FocusRelocator.react','Link.react','MessengerPlatformInterfaceType','React','ReactLayeredComponentMixin_DEPRECATED'],(function a(b,c,d,e,f,g,h,i){

'use strict';












var j=278,
k=c('React').PropTypes,

l=c('React').createClass({displayName:'UFIGifButton',
_linkRef:null,

propTypes:
{onGifFlyoutShow:k.func,
onGifSelected:k.func.isRequired,
showTooltip:k.bool},


mixins:[c('ReactLayeredComponentMixin_DEPRECATED')],

getDefaultProps:function m(){

return {showTooltip:true};},



getInitialState:function m(){

return {renderFlyout:null,
flyoutShown:false,
query:''};},



componentDidMount:function m(){
this._updateListener=c('Arbiter').subscribe
('page_transition',
function(){return this._hideFlyout();}.bind(this));},



componentWillUnmount:function m(){
this._updateListener&&this._updateListener.unsubscribe();},


render:function m(){
var n=i._(["Post a GIF","60b6d7bf54e6231678a7fbf0b7070f1f"]);







return (c('React').createElement(c('FocusRelocator.react'),{from:this._linkRef,to:this.refs.icon},
c('React').createElement(c('Link.react'),
{'aria-label':n,
className:"_r1a UFICommentGifButton",

'data-hover':'tooltip',
'data-tooltip-alignh':'center',
'data-tooltip-content':this.props.showTooltip?n:null,
linkRef:this._setRef,
onClick:this._onLinkClicked,
onMouseDown:this._prepareForClick,
role:'button'},
c('React').createElement('div',
{ref:'icon',
className:"UFICommentGifIcon"+


(this.state.flyoutShown?' '+"UFICommentGifIconActive":'')}),



this.props.children)));},





renderLayers:function m(){
return !this.state.renderFlyout||!this.state.flyoutShown?
{}:
this.state.renderFlyout();},


_hideFlyout:function m(){
this.setState({flyoutShown:false,query:''});},


_prepareForClick:function m(){
this._clickGuard=this.state.flyoutShown;},


_onLinkClicked:function m(){
if(this.state.renderFlyout!==null){
if(!this._clickGuard){
this.props.onGifFlyoutShow&&this.props.onGifFlyoutShow();
this.setState({flyoutShown:true});}

return;}


c('Bootloader').loadModules
(["XUIContextualDialog.react","ChatContentSearchFlyout.react","ContextualLayerAutoFlip"],



function(n,o,p){
this.setState
({flyoutShown:true,
renderFlyout:function(){

return {contextualDialog:
c('React').createElement(n,
{alignment:'right',
behaviors:{flip:p},
className:"_5trk",
contextRef:function(){return this._linkRef;}.bind(this),
onBlur:this._hideFlyout,
onToggle:function(q){
if(!q&&this.state.flyoutShown)
this._hideFlyout();}.

bind(this),
position:'above',
shown:this.state.flyoutShown,
hasActionableContext:true,
width:j},
c('React').createElement('div',null,
c('React').createElement(o,
{onEscKeyDown:this._hideFlyout,
onSelect:this._onGifSelected,
query:this.state.query,
shown:this.state.flyoutShown,
searchInterface:
c('MessengerPlatformInterfaceType').FB_INTERFACE})))};}.





bind(this)});

this.props.onGifFlyoutShow&&this.props.onGifFlyoutShow();}.
bind(this),'UFIGifButton.react');},



_onGifSelected:function m(n){
this.props.onGifSelected(n);
this._hideFlyout();},


_setRef:function m
(n){

this._linkRef=n;}});



f.exports=l;}),null);

/** js/components/UFI/UFIMarkdownButton.react.js */





__d('UFIMarkdownButton.react',['cx','fbt','Link.react','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,







l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.





render=function(){
var n=i._(["Format text with Markdown","7949a2c5df080f37a94e1758339805be"]);







return (c('React').createElement(c('Link.react'),
{className:"_r1a _45-m",

'data-hover':'tooltip',
'data-tooltip-alignh':'center',
'data-tooltip-content':n,
'aria-label':n,
onClick:this.props.onClick},
c('React').createElement('div',
{tabIndex:0,
className:"_45-n"+

(this.props.active?' '+"_45-o":'')})));};




function m(){j.apply(this,arguments);}m.propTypes={active:l.bool,onClick:l.func.isRequired};


f.exports=m;}),null);

/** js/components/UFI/UFITipJarButton.react.js */






__d('UFITipJarButton.react',['cx','fbt','Bootloader','Link.react','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k;j=babelHelpers.inherits















(l,c('React').Component);k=j&&j.prototype;
function l(m){
k.constructor.call(this,m);this.
































$UFITipJarButton_onLinkClicked=function(){
c('Bootloader').loadModules
(["PhotoSnowlift","VideoChannel","LiveSendTipButtonUtil"],
function(n,o,p){
var q=n.getInstance(),
r=o.get();

if(q.fullscreen||
q.isOpen||
r){

p.openPanel
(!!r,
this.props.videoID,
this.props.receiverID);}else 


p.bootloadSnowliftWithPanelOpen
(this.props.permalink);}.


bind(this),'UFITipJarButton.react');}.

bind(this);this.$UFITipJarButton_onLinkClicked=this.$UFITipJarButton_onLinkClicked.bind(this);}l.prototype.render=function(){var m=i._(["Send a Tip","56f352fba7e28bd7641d0738df2e7cf7"]);return c('React').createElement(c('Link.react'),{className:"_r1a _qqp",'data-hover':'tooltip','data-tooltip-alignh':'center','data-tooltip-content':m,'aria-label':m,onClick:this.$UFITipJarButton_onLinkClicked},c('React').createElement('div',{className:"_qqq",ref:'tipJar',tabIndex:0}));};


f.exports=l;}),null);

/** www/__virtual__/x/XFeedNUXSaveSeenStateController.js */



__d("XFeedNUXSaveSeenStateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/feed\/nux\/seen\/save\/",{link_id:{type:"String"},key:{type:"String",required:true},seen:{type:"Bool",defaultValue:false},env:{type:"Enum",enumType:0}});}),

null);

/** www/__virtual__/x/XUFICommentGIFPreprocessController.js */



__d("XUFICommentGIFPreprocessController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/comment\/gif_preprocess\/",{});}),

null);

/** www/__virtual__/x/XUFICommentMarkdownPreviewController.js */



__d("XUFICommentMarkdownPreviewController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/comment\/markdown_preview\/",{comment_body:{type:"String"}});}),

null);

/** js/components/UFI/UFIAddComment.react.js */








__d('UFIAddComment.react',['cx','fbt','ActorURI','Arbiter','AsyncRequest','Badge.react','BootloadedComponent.react','Bootloader','ClipboardPhotoUploader','UFIEmojiInputButton','Event','JSResource','Keys','Link.react','LitestandStoryInsertionStatus','MentionsInputUtils','React','ReactDOM','Run','SnowflakePermalinkUtils','SubscriptionsHandler','TextDelightGatekeeperChecks','TrackingNodes','UFIActorIconContainer.react','UFIAddCommentAction','UFIAddCommentLiveTypingController','UFIAttachMediaSection.react','UFICommercialBreakStore','UFIComposerIsTypingStore','UFIConfig','UFIGifButton.react','UFIImageBlock.react','UFIMarkdownButton.react','UFISharedDispatcher','UFIStickerButton.react','UFITipJarButton.react','URI','VideoPermalinkURI','XFeedNUXSaveSeenStateController','XUFICommentMarkdownPreviewController','XUFICommentGIFPreprocessController','getActiveElement','joinClasses','throttle'],(function a(b,c,d,e,f,g,h,i){

'use strict';








var j=c('UFIEmojiInputButton').EmojiInputButton,








































k=b.URL||b.webkitURL||{},

l=c('React').PropTypes,

m=i._(["Write a comment...","7c7ad321783f57b8234a0db5027ba413"]),
n=i._(["Write a reply...","f05e124af39eeb75a952fc8c01824ec4"]),
o=i._(["Write an answer...","ec03cc16c22e3cd8b7d36f072da0c325"]),
p="fcg fss UFICommentTip",


q=19,
r='/ajax/ufi/upload/',
s='/ajax/ufi/sticker_preview/',
t=1000,
u='comment_content_change',

v=
{UPLOAD:'uploading',
ENCODE:'encoding'},


w=false,
x=false,
y=false,

z=c('React').createClass({displayName:'UFIAddComment',
propTypes:
{contextArgs:l.object.isRequired,
viewerActorID:l.string.isRequired,
editingComment:l.object.isRequired,
className:l.string,
allowPhotoAttachments:l.bool,
allowVideoAttachments:l.bool,
allowStickerAttachments:l.bool,
allowGifAttachments:l.bool,
allowTipJar:l.bool,
isEditing:l.bool,
isFirstComponent:l.bool,
isLastComponent:l.bool,
isQAndA:l.bool,
mentionsDataSource:l.object,
replyCommentID:l.string,
showSendOnEnterTip:l.bool,
multiCompanyGroupsCount:l.number,
subtitle:l.any,
targetID:l.string,
withoutSeparator:l.bool,
markViewerHasInteracted:l.func,
allowCommentMarkdown:l.bool,
allowCommentPrivate:l.bool,

keepFocus:l.bool},


contextTypes:
{dispatch:l.func},


getInitialState:function aa(){
var ba=this.props.editingComment,

ca=ba.attachment||{type:null},
da=ca.type==='photo'?ca:null;

return {attachedPhoto:ba.photo_comment||da,
attachedVideo:ba.video_comment||null,
commentMarkdownPreviewContent:null,
commentMarkdownEnabled:false,
videoStatus:null,
videoFileURL:null,
videoProgress:0,
isVideoFileTranscodedGIF:false,
attachedSticker:ca.type=='sticker'?ca:null,



attachedGIF:ca.type=='share'?ca:null,
fileInput:null,
fileUploader:null,
isCommenting:false,
isLoadingPhoto:false,
stickerNUXVisible:false,

isFocused:this.props.isEditing,
videosInCommentsNUXVisible:false,
markdownNUXVisible:false,

hasSubmitted:false,
inCommercialBreak:false};},



_onKeyDown:function aa(event){

if(this.props.isEditing&&
c('Event').getKeyCode(event.nativeEvent)===c('Keys').ESC)

this.context.dispatch
(c('UFIAddCommentAction').cancel
(this.props.contextArgs));




if(this.isMounted()&&!this._isOnBeforeUnloadListenerAdded){
c('Run').onBeforeUnload(this._handleUnsavedChanges);
this._isOnBeforeUnloadListenerAdded=true;}


var ba=c('getActiveElement')();
if(c('Event').getKeyCode(event.nativeEvent)===c('Keys').ESC)
ba.blur();},



_onContentChange:function aa(ba){
c('UFISharedDispatcher').dispatch
(c('UFIAddCommentAction').changeContent
(this.props.contextArgs,
ba,
this.props.replyCommentID));



c('Arbiter').inform
(u,

{fbid:this.props.replyCommentID,
text:ba,
instanceid:this.props.contextArgs.instanceid,
ftentidentifier:this.props.contextArgs.ftentidentifier});



if(this.props.allowCommentMarkdown&&this.state.commentMarkdownEnabled)
this._sendMarkdownUpdate(ba);},



_sendMarkdownUpdate:function aa(ba){
var ca=c('XUFICommentMarkdownPreviewController').getURIBuilder().
setString('comment_body',ba).
getURI();
new (c('AsyncRequest'))(ca).
setHandler(this._handleMarkdownUpdate).
send();},


_handleMarkdownUpdate:function aa(ba){
if(!ba)
return;

this.setState
({commentMarkdownPreviewContent:
ba.payload?ba.payload.markup:null});},



_handleUnsavedChanges:function aa(){
var ba=b.PageTransitions;
if(ba){
var ca=c('URI').getNextURI(),
da=ba.getMostRecentURI();


if(Object.prototype.hasOwnProperty.call(ca.getQueryData(),'theater')||Object.prototype.hasOwnProperty.call
(da.getQueryData(),'theater')||Object.prototype.hasOwnProperty.call
(ca.getQueryData(),'sdialog')||
c('SnowflakePermalinkUtils').isPermalinkURI(ca)||
c('SnowflakePermalinkUtils').isPermalinkURI(da)||
c('VideoPermalinkURI').isValid(ca)&&
ca.getQueryData().ref==='channel'||
c('VideoPermalinkURI').isValid(da)&&
da.getQueryData().ref==='channel')
return;



var ea=b.DialogNavigationStack;
if(ea&&
ea.isActiveURI(ca))
return;}




if(this.refs&&this.refs.mentionsinput&&
this.refs.mentionsinput.hasEnteredText())
return i._(["You haven't finished your comment yet. Do you want to leave without finishing?","5fd11ca50ee07c341ab131a719b69d96"]);},



_blur:function aa(){
this.setState
({markdownNUXVisible:false,
stickerNUXVisible:false,
videosInCommentsNUXVisible:false});


setTimeout(function(){
if(this.isMounted())
this.setState({isFocused:false});}.

bind(this),100);

if(this.refs.mentionsinput&&this.refs.mentionsinput.hasEnteredText())


return;


this.setState({isCommenting:false});},



_onPaste:function aa(event){
var ba=new (c('ClipboardPhotoUploader'))
(r,
this._getPhotoUploadData());


this._cancelCurrentSubscriptions();
this._subscriptions=
[ba.subscribe
('upload_start',
this._prepareForAttachedPhotoPreview),


ba.subscribe
('upload_error',
this._onRemoveAttachedMediaPreviewClicked),

ba.subscribe
('upload_success',
function(ca,da){
this._onPhotoUploadComplete(da);}.
bind(this))];



ba.handlePaste(event);},


_onEnterSubmit:function aa(ba,event){
this.setState({hasSubmitted:true});
var ca=
this.state.attachedPhoto||
this.state.attachedVideo||
this.state.attachedSticker||
this.state.attachedGIF,
da=this.props.isEditing||ca;

if(this.state.isLoadingPhoto||this._isLoadingVideo()){
return false;}else
if(!ba.encodedValue.trim()&&!da)
return false;

ba.encodedValue=ba.encodedValue.trim();

if(this.state.commentMarkdownEnabled){
ba.isMarkdown=true;
this.setState
({commentMarkdownEnabled:false,
commentMarkdownPreviewContent:null});}



if(ca){
ba.attachedPhoto=this.state.attachedPhoto;
ba.attachedVideo=this.state.attachedVideo;
ba.attachedSticker=this.state.attachedSticker;
if(this.state.attachedGIF)
if(this.state.attachedGIF.source){
ba.attachedShareURL=
this.state.attachedGIF.source.url;}else
if(this.state.attachedGIF.originalImageUrl)
ba.attachedShareURL=
this.state.attachedGIF.originalImageUrl;



this.setState
({isLoadingPhoto:false,
attachedPhoto:null,
attachedVideo:null,
attachedSticker:null,
attachedGIF:null});}else{


ba.attachedPhoto=null;
ba.attachedVideo=null;
ba.attachedSticker=null;
ba.attachedShareURL=null;}

if(this.props.isEditing){
this.context.dispatch
(c('UFIAddCommentAction').submitEdit
(this.props.contextArgs,
this.props.editingComment,
ba,
event.target));}else 



this.context.dispatch
(c('UFIAddCommentAction').submitNew
(this.props.contextArgs,
ba,
event.target,
this.props.replyCommentID));




return true;},


_isLoadingVideo:function aa(){
return this.state.videoStatus===v.UPLOAD||

this.state.videoStatus===v.ENCODE&&
this.state.videoProgress!==100;},



_cancelCurrentSubscriptions:function aa(){
if(this._subscriptions)
this._subscriptions.forEach(function(ba){
ba.unsubscribe();});},




componentWillMount:function aa(){
this._isOnBeforeUnloadListenerAdded=false;
this._storyInsertionBlocker=c('LitestandStoryInsertionStatus').registerBlocker
(function(){return this.state.isCommenting;}.bind(this));


this._storeSubscriptions&&this._storeSubscriptions.release();
this._storeSubscriptions=new (c('SubscriptionsHandler'))();
this._storeSubscriptions.addSubscriptions
(c('UFICommercialBreakStore').addListener(function(){
this.setState
({inCommercialBreak:c('UFICommercialBreakStore').getValueFor
(this.props.contextArgs.instanceid)});}.


bind(this)));


this._typingEventController=null;
if(c('UFIConfig').canPublishLive)
this._storeSubscriptions.addSubscriptions
(c('UFIComposerIsTypingStore').addListener(function(){
var ba=c('UFIComposerIsTypingStore').getValueFor
(this.props.contextArgs.ftentidentifier);


if(ba===null)

return;


if(!this._typingEventController)
this._typingEventController=new (c('UFIAddCommentLiveTypingController'))
(this.props.contextArgs.ftentidentifier,
this.props.replyCommentID,
this.props.viewerActorID);



if(ba){
this._typingEventController.attemptPublishStartEvent();}else 

this._typingEventController.attemptPublishStopEvent();}.

bind(this)));},




_destroyLiveTypingController:function aa(){
this._typingEventController&&this._typingEventController.destroy();
this._typingEventController=null;},


componentWillReceiveProps:function aa(ba){
var ca=this.props.contextArgs.ftentidentifier,
da=ba.contextArgs.ftentidentifier;

if(da!==ca||
this.props.replyCommentID!==ba.replyCommentID||
this.props.viewerActorID!==ba.viewerActorID)

this._destroyLiveTypingController();},



componentWillUnmount:function aa(){
this._cancelCurrentSubscriptions();
if(this._remixedImageToken)
c('Arbiter').unsubscribe(this._remixedImageToken);

if(this._focusCommentFieldToken)
c('Arbiter').unsubscribe(this._focusCommentFieldToken);

this._storyInsertionBlocker&&this._storyInsertionBlocker.unsubscribe();
this._storyInsertionBlocker=null;

this._storeSubscriptions&&this._storeSubscriptions.release();

this._destroyLiveTypingController();},


focus:function aa(){

var ba=
{isCommenting:true,
isFocused:true,
hasSubmitted:false},


ca=this.props.contextArgs.loggedOutLinkConfig;
if(ca&&ca.showAddComment)
c('Bootloader').loadModules(["AsyncDialog"],function(fa){
fa.bootstrap
(ca.addCommentAjaxifyURI,
null,
'dialog');},

'UFIAddComment.react');


var da=c('TextDelightGatekeeperChecks').gk;

if(da.delights_text_trigger_prefetch_comment_anim_enable&&
c('TextDelightGatekeeperChecks').commentAnimationURI)

c('Bootloader').loadModules
(["TextDelightAnimation"],
function(fa){
fa.setupCommentAnimation
(c('TextDelightGatekeeperChecks').commentAnimationURI);},

'UFIAddComment.react');



if(this.props.allowStickerAttachments&&c('UFIConfig').shouldShowStickerNUX)
if(!w){
w=true;
var ea=c('XFeedNUXSaveSeenStateController').getURIBuilder().
setString('key','sticker_comments').
setBool('seen',true).
getURI();
new (c('AsyncRequest'))(ea).send();
ba.stickerNUXVisible=true;}




if(this.props.allowVideoAttachments&&
c('UFIConfig').shouldShowVideosInCommentsNux&&
!c('UFIConfig').shouldShowStickerNUX)

if(!x){
x=true;
ea=c('XFeedNUXSaveSeenStateController').getURIBuilder().
setString('key','video_comments').
setBool('seen',true).
getURI();
new (c('AsyncRequest'))(ea).send();
ba.videosInCommentsNUXVisible=true;}




if(this.props.allowCommentMarkdown&&
c('UFIConfig').shouldShowMarkdownCommentNUX&&
!c('UFIConfig').shouldShowVideosInCommentsNux&&
!c('UFIConfig').shouldShowStickerNUX)

if(!y){
y=true;
ea=c('XFeedNUXSaveSeenStateController').getURIBuilder().
setString('key','markdown_comments').
setBool('seen',true).
getURI();
new (c('AsyncRequest'))(ea).send();
ba.markdownNUXVisible=true;}


this.setState(ba);
if(this.props.markViewerHasInteracted)
this.props.markViewerHasInteracted();

if(this.props.onFocus)
this.props.onFocus();},



_renderStickerNUX:function aa(){
if(this.state.stickerNUXVisible)

return (c('React').createElement(c('BootloadedComponent.react'),
{bootloadLoader:c('JSResource')('XUIAmbientNUX.react').__setRef('UFIAddComment.react'),
bootloadPlaceholder:c('React').createElement('div',null),
contextRef:function(){return this.refs.sticker_button;}.bind(this),
shown:this.state.stickerNUXVisible,
position:'above',
width:'auto',
alignment:'right',
onCloseButtonClick:this._hideStickerNUX},i._(["Now you can comment with a sticker!","b3115f0389f8e6060db8604db6aacb50"])));








return null;},


_renderVideoInCommentsNUX:function aa(){
if(this.state.videosInCommentsNUXVisible)

return (c('React').createElement(c('BootloadedComponent.react'),
{bootloadLoader:c('JSResource')('XUIAmbientNUX.react').__setRef('UFIAddComment.react'),
bootloadPlaceholder:c('React').createElement('div',null),
contextRef:function(){return this.refs.media_section;}.bind(this),
shown:this.state.videosInCommentsNUXVisible,
position:'above',
width:'auto',
alignment:'right',
onCloseButtonClick:this._hidevideosInCommentsNUX},i._(["You can now add videos to comments","4db8aeb4b4c31dbed49ac06992601c9b"])));









return null;},


_renderMarkdownCommentsNUX:function aa(){
if(this.state.markdownNUXVisible)

return (c('React').createElement(c('BootloadedComponent.react'),
{bootloadLoader:c('JSResource')('XUIAmbientNUX.react').__setRef('UFIAddComment.react'),
bootloadPlaceholder:c('React').createElement('div',null),
contextRef:function(){return this.refs.markdownButton;}.bind(this),
shown:this.state.markdownNUXVisible,
position:'above',
width:'auto',
alignment:'right',
onCloseButtonClick:this._hideMarkdownCommentsNUX},i._(["[FB-Only] Markdown in Comments! Click to enable.","bc8aa3b6714d8184c7a8e5df159c3fd0"])));








return null;},


_setFileInput:function aa(ba,ca){
this.setState({fileInput:ba,fileUploader:ca});},


render:function aa(){
var ba=this.props.contextArgs.loggedOutLinkConfig,
ca=true;
if(ba&&ba.showAddComment)
ca=false;



var da=
(!this.props.contextArgs.collapseaddcomment||
this.state.isCommenting)&&
ca&&
!this.props.contextArgs.hideActorPhoto,

ea=null;


if(this.props.subtitle){
ea=
c('React').createElement('span',{className:p},
this.props.subtitle);}else

if(!this.state.isFocused&&this.props.isEditing){
ea=
c('React').createElement('span',{className:p},i._(["{cancel}","019bf7cddbc90286200bc3821f7d5d09"],[i.param

('cancel',
c('React').createElement(c('Link.react'),{onClick:function(){
return (this.context.dispatch
(c('UFIAddCommentAction').cancel
(this.props.contextArgs)));}.bind(this)},i._(["Cancel","fe830a5783fa38e2a305bed5fcf60fa3"])))]));}else








if(this.props.isEditing){
ea=
c('React').createElement('span',{className:p},i._(["Press Esc to {cancel}.","e2b9b2478f2008ccdeb0dfec8ceab818"],[i.param


('cancel',


c('React').createElement(c('Link.react'),{onMouseDown:function(){
return (this.context.dispatch
(c('UFIAddCommentAction').cancel
(this.props.contextArgs)));}.bind(this)},i._(["cancel","44d90c2ccf11bead16edfad22b0d5cdd"])))]));}else









if(this.props.multiCompanyGroupsCount&&this.state.isFocused){
ea=
c('React').createElement('div',{className:"fcg fsm _2pid"},
c('React').createElement(c('Badge.react'),{key:'noncoworker',type:'work_non_coworker'}),
c('React').createElement('span',{className:"_2pir _4zk5"},i._({"*":["People from {number} companies will see this.","8fa21dee5c5edee1ee0fd0bc80048ac1"],"268435456":["People from 1 company will see this.","a2639f34e7405a173da83c73500d2e18"]},[i.plural



(this.props.multiCompanyGroupsCount,'number')])));}else








if(this.props.showSendOnEnterTip)
ea=
c('React').createElement('span',{className:p},i._(["Press Enter to post.","e375b2b767f6e51841e5a5f7fd713fe5"]));




var fa=null,
ga=null,
ha=null,
ia=null,
ja=
this.state.attachedPhoto||
this.state.attachedSticker||
this.state.attachedVideo||
this.state.attachedGIF,
ka=null,
la=null;

if(this.props.allowCommentMarkdown)
ia=
c('React').createElement(c('UFIMarkdownButton.react'),
{active:this.state.commentMarkdownEnabled,
ref:'markdownButton',
onClick:function(){
var cb=!this.state.commentMarkdownEnabled;
this.setState
({commentMarkdownEnabled:cb});

if(this.refs.mentionsinput&&cb)
this._sendMarkdownUpdate(this.refs.mentionsinput.getText());}.

bind(this)});



if(this.props.allowStickerAttachments&&!ja)
ga=
c('React').createElement(c('UFIStickerButton.react'),
{ref:'sticker_button',
onStickerSelected:this.onStickerSelected,
onEmoticonSelected:this._insertEmoticonIntoCommentText,
onStickerFlyoutShow:function(){
c('Arbiter').inform('comment_content_change',{addingAttachment:true});
if(this.props.markViewerHasInteracted)
this.props.markViewerHasInteracted();}.

bind(this)});



if(this.props.allowGifAttachments&&!ja)
ha=
c('React').createElement(c('UFIGifButton.react'),
{ref:'gif_button',
onGifSelected:this.onGifSelected,
onGifFlyoutShow:function(){
if(this.props.markViewerHasInteracted)
this.props.markViewerHasInteracted();}.

bind(this)});



if(this.props.allowTipJar)
la=
c('React').createElement(c('UFITipJarButton.react'),
{instanceID:this.props.contextArgs.instanceid,
permalink:this.props.contextArgs.permalink,
receiverID:this.props.targetID,
videoID:this.props.contextArgs.ftentidentifier});



if(this.props.allowPhotoAttachments||this.props.allowVideoAttachments){
ka=this._onPaste;

fa=
c('React').createElement(c('UFIAttachMediaSection.react'),
{ref:'media_section',
getPhotoUploadData:this._getPhotoUploadData,
prepareForAttachedPhotoPreview:
this._prepareForAttachedPhotoPreview,

prepareForAttachedVideoPreview:
this._prepareForAttachedVideoPreview,

allowVideoAttachments:this.props.allowVideoAttachments,
onPhotoUploadComplete:this._onPhotoUploadComplete,
onVideoUploadComplete:this._onVideoUploadComplete,
onVideoEncodeUpdate:this._onVideoEncodeUpdate,
onVideoUploadUpdate:this._onVideoUploadUpdate,
setFileInput:this._setFileInput,
targetId:this.props.targetID,
onClick:function(){
c('Arbiter').inform('comment_content_change',{addingAttachment:true});
if(this.props.markViewerHasInteracted)
this.props.markViewerHasInteracted();}.

bind(this),
attachment:ja,
viewerActorID:this.props.viewerActorID});}



var ma=
c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.ADD_COMMENT_BOX),

na='addComment_'+this.props.contextArgs.ftentidentifier,

oa;
if(!!this.props.replyCommentID){
oa=n;}else
if(this.props.isQAndA){
oa=i._(["Ask a question...","9fbda49f042111a3458adccdff28d612"]);}else





if(this.props.contextArgs.isaskquestion){
oa=o;}else 

oa=m;


var pa=this.props.contextArgs.viewoptionstypeobjects,
qa=
this.props.contextArgs.viewoptionstypeobjectsorder;

if(this.props.attachedPhoto&&!this.props.subtitle)

ea=null;


var ra;



if(this.state.attachedPhoto||
this.state.isLoadingPhoto||
this.state.attachedVideo||
this.state.videoStatus===v.UPLOAD||
this.state.attachedSticker||
this.state.attachedGIF)

ra=
c('React').createElement(c('BootloadedComponent.react'),
{bootloadLoader:c('JSResource')('UFIAttachedMediaPreview.react').__setRef('UFIAddComment.react'),
bootloadPlaceholder:c('React').createElement('span',null),
attachedPhoto:this.state.attachedPhoto,
attachedVideo:this.state.attachedVideo,
attachedSticker:this.state.attachedSticker,
attachedGIF:this.state.attachedGIF,
monitorHeight:this.props.contextArgs.monitorHeight,
onRemoveAttachedMediaPreviewClicked:
this._onRemoveAttachedMediaPreviewClicked,

onRemoveAttachedStickerPreview:
this._onRemoveAttachedStickerPreviewClicked,

subtitle:this.props.subtitle,
isLoadingPhoto:this.state.isLoadingPhoto,
videoFileURL:this.state.videoFileURL,
videoStatus:this.state.videoStatus,
videoProgress:this.state.videoProgress,
isVideoFileTranscodedGIF:this.state.isVideoFileTranscodedGIF});

var sa=





this.props.contextArgs.mentionsinput,ta=sa.inputComponent,ua=sa.viewComponent,va=sa.viewProps,

wa=this.props.editingComment.body,
xa=wa?
c('MentionsInputUtils').generateDataFromTextWithEntities(wa):
null,

ya=null;
if(this.props.allowCommentMarkdown&&
this.state.commentMarkdownEnabled)
ya=
c('React').createElement(c('BootloadedComponent.react'),
{bootloadLoader:c('JSResource')('UFICommentMarkdownPreview.react').__setRef('UFIAddComment.react'),
bootloadPlaceholder:c('React').createElement('span',null),
markup:this.state.commentMarkdownPreviewContent});



var za=null;
if(j)
za=
c('React').createElement(j,
{buttonClassName:"_r1a UFICommentEmojiButton",

iconActiveClassName:"UFICommentEmojiIconActive",
iconClassName:"UFICommentEmojiIcon",
onClick:function(){
if(this.props.markViewerHasInteracted)
this.props.markViewerHasInteracted();}.

bind(this),
onSelect:function(cb){
this.refs.mentionsinput.insertEmoji(cb);}.
bind(this)});



var ab="_fmk"+(' '+"UFICommentAttachmentButtons")+



(c('UFIConfig').hasFaceliftCommentComposerIcons?' '+"_5op2":'');


if(c('UFIConfig').emojiPickerClassName)
ab=c('joinClasses')
(ab,
c('UFIConfig').emojiPickerClassName);



var bb=
c('React').createElement('div',{className:'UFICommentContainer'},
c('React').createElement('div',{className:"_fmi UFIInputContainer"},
c('React').createElement(ta,
{disableInitTextarea:!ca,
replyCommentID:this.props.replyCommentID,
initialData:xa,
placeholder:oa,
datasource:this.props.mentionsDataSource,
ref:'mentionsinput',
viewComponent:ua,
viewProps:va,
viewOptionsTypeObjects:pa,
viewOptionsTypeObjectsOrder:qa,
hashtags:this.props.contextArgs.sht,
showHashtagTypeahead:c('UFIConfig').showHashtagTypeahead,
autoflip:this.props.contextArgs.addcommentautoflip,
monitorHeight:this.props.contextArgs.monitorHeight,
onEnterSubmit:this._onEnterSubmit,
onFocus:this.focus,
onBlur:this._blur,
onContentChange:this._onContentChange,
onPaste:ka,
ftEntIdentifier:this.props.contextArgs.ftentidentifier,
instanceID:this.props.contextArgs.instanceid,
isBroadcasterUFI:this.props.contextArgs.isBroadcasterUFI}),

c('React').createElement('div',{className:ab},
za,
ia,
fa,
ha,
ga,
la)),


ya,
ra,
ea);


if(da)
bb=
c('React').createElement(c('UFIImageBlock.react'),{className:"UFIMentionsInputWrap"+

(this.props.allowStickerAttachments?' '+"UFIStickersEnabledInput":'')+
(this.props.allowCommentMarkdown?' '+"UFIMarkdownEnabledInput":'')+
(this.props.allowGifAttachments?' '+"UFIGifEnabledInput":'')+
(this.props.allowTipJar?' '+"UFITipJarEnabledInput":'')},

c('React').createElement('div',
{className:'UFIReplyActorPhotoWrapper',
onClick:this.focus,
role:'presentation'},
c('React').createElement(c('UFIActorIconContainer.react'),
{actorID:this.props.viewerActorID})),


bb);




return (c('React').createElement('div',
{ref:function(cb){return this.rootNode=cb;}.bind(this),
id:na,
className:c('joinClasses')("UFIRow"+(' '+"_4oep")+(' '+"UFIAddComment")+




(this.props.allowPhotoAttachments?' '+"UFIAddCommentWithPhotoAttacher":'')+
(this.props.withoutSeparator?' '+"UFIAddCommentWithoutSeparator":'')+
(this.props.isFirstComponent?' '+"_4204":'')+
(this.props.isLastComponent?' '+"_2o9m":'')+


(this.state.inCommercialBreak?' '+"hidden_elem":''),

this.props.className),

onKeyDown:this._onKeyDown,
'data-ft':ma},
bb,
this._renderStickerNUX(),
this._renderVideoInCommentsNUX(),
this._renderMarkdownCommentsNUX()));},




componentDidUpdate:function aa(ba,ca,da){

if(!ca.attachedPhoto&&this.state.attachedPhoto||
!ca.attachedSticker&&this.state.attachedSticker||
!ca.attachedVideo&&this.state.attachedVideo||
!ca.isCommenting&&this.state.isCommenting){

this.refs.mentionsinput.focus();}else
if(this.props.keepFocus&&this.state.hasSubmitted)

this.refs.mentionsinput.focus();

if(ba.viewerActorID!==this.props.viewerActorID){
if(this.state.fileInput)
this.state.fileInput.clear();

if(this.state.fileUploader)
this.state.fileUploader.setData(this._getPhotoUploadData());

this._onRemoveAttachedMediaPreviewClicked();}},



componentDidMount:function aa(){
this._sendMarkdownUpdate=c('throttle')
(this._sendMarkdownUpdate,
t,
this);


if(!this.props.allowPhotoAttachments&&
!this.props.allowVideoAttachments)

return;


if(this.props.replyCommentID===null){
this._focusCommentFieldToken=
c('Arbiter').subscribe
('focusCommentField'+this.props.contextArgs.ftentidentifier,
function(ba){
this.refs.mentionsinput.focus();}.
bind(this));


if(this.props.contextArgs.issnowlift)
this._remixedImageToken=c('Arbiter').subscribe
('newRemixedImage'+this.props.contextArgs.ftentidentifier,
function(ba,ca){
var event=
{clipboardData:
{items:[ca]}};


this._onPaste(event);}.
bind(this));}},





insertMention:function aa(ba){

if(this.refs.mentionsinput&&this.refs.mentionsinput.insertMention)
this.refs.mentionsinput.insertMention(ba);},



_getPhotoUploadData:function aa(){
var ba=this.props.viewerActorID,
ca=
{profile_id:ba,
target_id:this.props.targetID,
source:q};

ca[c('ActorURI').PARAMETER_ACTOR]=ba;
return ca;},


_onPhotoUploadComplete:function aa(ba){
if(!this.state.isLoadingPhoto)
return;


var ca=ba.getPayload();
if(ca&&ca.fbid){
this.setState({attachedPhoto:ca,isLoadingPhoto:false});}else 

this._onRemoveAttachedMediaPreviewClicked(null);},



_onVideoEncodeUpdate:function aa(ba,ca){

if(!this.state.attachedVideo||
this.state.videoStatus!==v.ENCODE)

return;


if(ca.obj.progress<this.state.videoProgress)
return;




ca.obj.fbid=ca.obj.videoID;

this.setState
({attachedVideo:ca.obj,
videoProgress:ca.obj.progress,
videoStatus:v.ENCODE});


if(this._isEncodingFinished(ca.obj.stage))
this._onEncodeComplete();},



_onVideoUploadUpdate:function aa(ba){
this.setState({videoProgress:ba});},


_isEncodingFinished:function aa(ba){
return ba==='finish';},


_onEncodeComplete:function aa(){
this.state.fileInput.clear();},


_onVideoUploadComplete:function aa(ba){
if(this.state.videoStatus!==v.UPLOAD)
return;


if(ba&&ba.video_id)
this.setState
({videoProgress:0,
attachedVideo:ba,
videoStatus:v.ENCODE});},




_onRemoveAttachedMediaPreviewClicked:function aa(event){

c('Arbiter').inform('video_upload_cancel',{});
if(this.state.fileInput)
this.state.fileInput.clear();

this.setState
({attachedPhoto:null,
attachedVideo:null,
attachedGIF:null,
videoStatus:null,
videoFileURL:null,
isLoadingPhoto:false,
videoProgress:0,
isVideoFileTranscodedGIF:false});},



_prepareForAttachedPhotoPreview:function aa(){
this.setState({attachedPhoto:null,isLoadingPhoto:true});},


_prepareForAttachedVideoPreview:function aa(){
var ba,
ca=this.state.fileInput.input.files[0];
if(ca&&k.createObjectURL)
ba=k.createObjectURL(ca);


this.setState
({attachedVideo:null,
videoStatus:v.UPLOAD,
videoFileURL:ba,
videoProgress:0,
isVideoFileTranscodedGIF:ca&&ca.type==='image/gif'});},



_onStickerUploadComplete:function aa(ba){
if(!this.state.isLoadingPhoto)
return;


var ca=ba.getPayload();
if(ca&&ca.fbid){
this.setState({attachedSticker:ca,isLoadingPhoto:false});}else{

c('Bootloader').loadModules
(["Dialog"],
function(da){
var ea=i._(["Sticker Failed","d9dcf35b0e6106af0c044c5246088066"]),



fa=i._(["There was a problem attaching the sticker.","ca56e0eab7f30340fb7f7226a394ddc0"]);



new da().
setTitle(ea).
setBody(fa).
setButtons(da.OK).
show();},
'UFIAddComment.react');

this._onRemoveAttachedStickerPreviewClicked(null);}},



_onRemoveAttachedStickerPreviewClicked:function aa(event){
this.setState({attachedSticker:null,isLoadingPhoto:false});},





onStickerSelected:function aa(ba,event){
if(this.props.isEditing||
this.refs.mentionsinput.hasEnteredText()||
c('UFIConfig').alwaysPreviewSticker){
this._prepareForAttachedStickerPreview(ba);
return;}


this.sendSticker(ba,event);},


_prepareForAttachedStickerPreview:function aa(ba){
this.setState({attachedSticker:null,isLoadingPhoto:true});

new (c('AsyncRequest'))(s).
setData({sticker_id:ba}).
setErrorHandler(this._onRemoveAttachedStickerPreviewClicked).
setHandler(this._onStickerUploadComplete).
send();},


sendSticker:function aa(ba,event){
var ca=
{encodedValue:'',
visibleValue:'',
attachedPhoto:null,
attachedSticker:{fbid:ba}};


this.context.dispatch
(c('UFIAddCommentAction').submitNew
(this.props.contextArgs,
ca,
event.target,
this.props.replyCommentID));},




_insertEmoticonIntoCommentText:function aa(ba){
c('Bootloader').loadModules
(["EmoticonsList","EmoticonUtils","TextAreaControl","SelectionPosition"],






function(ca,
da,
ea,
fa){

var ga=ca.symbols[ba];
if(!ga)
return;


if(this.props.contextArgs.mentionsinput){
this.refs.mentionsinput.insertEmoticon(ga);
return;}


if(!this._selectionPosition)
this._selectionPosition=new fa
(c('ReactDOM').findDOMNode(this.refs.mentionsinput.refs.textarea));



var ha=this.refs.mentionsinput.refs.getTextFieldDOM(),

ia=ea.getInstance(ha),
ja=ia.getValue(),

ka=da.insertEmoticon
(ga,
ja,
this._selectionPosition.getPos());


ia.setValue(ka.result);
this._selectionPosition.setPos
(ka.start,ka.end);}.

bind(this),'UFIAddComment.react');},



_hideStickerNUX:function aa(){
this.setState({stickerNUXVisible:false});},


_hidevideosInCommentsNUX:function aa(){
this.setState({videosInCommentsNUXVisible:false});},


_hideMarkdownCommentsNUX:function aa(){
this.setState({markdownNUXVisible:false});},


onGifSelected:function aa(ba){
if(this.props.isEditing||
this.refs.mentionsinput.hasEnteredText()){

this.setState({attachedGIF:ba});
this.preprocessGIF(ba);

return;}

this.sendGIF(ba);},


preprocessGIF:function aa(ba){
var ca=c('XUFICommentGIFPreprocessController').
getURIBuilder().
getURI();
new (c('AsyncRequest'))(ca).
setData({gif_url:ba.source.url}).
send();},


sendGIF:function aa(ba){
var ca=
{encodedValue:'',
visibleValue:'',
attachedShareURL:ba.source.url};

this.context.dispatch
(c('UFIAddCommentAction').submitNew
(this.props.contextArgs,
ca,
this.rootNode,
this.props.replyCommentID));}});





f.exports=z;}),null);

/** js/logging/generated/PublicConversationsUnicornTypedLogger.js */





__d('PublicConversationsUnicornTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:PublicConversationsUnicornLoggerConfig',this.$PublicConversationsUnicornTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:PublicConversationsUnicornLoggerConfig',this.$PublicConversationsUnicornTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$PublicConversationsUnicornTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$PublicConversationsUnicornTypedLogger_data=babelHelpers['extends']({},
this.$PublicConversationsUnicornTypedLogger_data,
j);

return this;};
h.prototype.





setCommentFbid=function(j){
this.$PublicConversationsUnicornTypedLogger_data.comment_fbid=j;
return this;};
h.prototype.




setVC=function(j){
this.$PublicConversationsUnicornTypedLogger_data.vc=j;
return this;};











var i=
{comment_fbid:true,
vc:true};


f.exports=h;}),null);

/** js/components/UFI/UFICommentLikeCount.react.js */






__d('UFICommentLikeCount.react',['cx','fbt','ActorURI','NumberFormat','ProfileBrowserLink','ProfileBrowserTypes','React','URI'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,














l=c('React').PropTypes,

m=function o
(p,
q,
r){

var s=new (c('URI'))('/ajax/like/tooltip.php').
setQueryData
({comment_fbid:p.fbid,
comment_from:p.author,
comment_likecount:p.likecount||0,
comment_id:p.id,
cache_buster:p.likeconfirmhash||0});


if(q)
s.addQueryData({viewas:q});


return c('ActorURI').create(s,r);};
j=babelHelpers.inherits







(n,c('React').Component);k=j&&j.prototype;n.prototype.






render=function(){
var o=this.props.comment,
p=o.likecount||0,
q=c('NumberFormat').formatInteger(p),

r=i._({"*":["{number} Likes","7d1a31dc1c1ce36c5758a6502f191756"],"268435456":["1 Like","5920116548d5b390f61f39ca202af6ca"]},[i.plural

(p,'number')]),




s=c('ProfileBrowserTypes').LIKES,
t={id:o.fbid},

u=m
(this.props.comment,
this.props.contextArgs.viewas,
this.props.actorForPost),


v=
c('React').createElement('span',{className:"UFICommentReactionIconContainer"},
c('React').createElement('i',{className:"_3j7l _2p78 _9-y"})),



w=c('React').createElement('span',null,q),

x="UFICommentLikeButton"+

(this.props.comment.hasviewerliked?' '+"UFICommentLikedButton":''),


y=c('ProfileBrowserLink').
constructDialogURI(s,t).
toString(),
z=c('ProfileBrowserLink').constructPageURI(s,t).toString(),
aa='dialog',

ba=this.props.contextArgs.loggedOutLinkConfig;
if(ba&&ba.showLikeLink){
y=ba.likeAjaxifyURI;
z='#';}



return (c('React').createElement('a',
{ajaxify:y,
'aria-label':r,
className:x,
'data-hover':'tooltip',
'data-interaction-root-id':"_298o",
'data-tooltip-alignh':'center',
'data-tooltip-uri':u.toString(),
href:z,
rel:aa,
role:'button'},
v,
w));};


function n(){j.apply(this,arguments);}n.propTypes={actorForPost:l.string,comment:l.object.isRequired,contextArgs:l.object.isRequired};


f.exports=n;}),null);

/** js/components/UFI/UFICommentLikeLink.react.js */






__d('UFICommentLikeLink.react',['fbt','cx','React','ReactionNuxTypeEnum','TrackingNodes','UFICommentAction','UFIConfig','UFIReactionsLinkImpl.react'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,











l=c('React').PropTypes,

m='ufi_comment_like_link',
n='ufi_reply_like_link';j=babelHelpers.inherits

(o,c('React').Component);k=j&&j.prototype;o.
















getCanRender=function(p){
return !!(p&&
(p.canviewerreact||
p.viewercanlike||
p.hasviewerliked));};

o.prototype.

render=function(){
var p=this.props.comment,
q=this.props.feedback,
r=this.props.contextArgs;

if(!this.constructor.getCanRender(p))
return null;


if(p.canviewerreact){
var s="_3-me";

return (c('React').createElement('span',
{className:"_6a",
'data-interaction-root-id':s},
this.$UFICommentLikeLink_renderReactionsLink(p,q,r)));}else


if(p.viewercanlike||p.hasviewerliked)
return this.$UFICommentLikeLink_renderLikeLink(p,q,r);


return null;};
o.prototype.

$UFICommentLikeLink_renderReactionsLink=
function(p,
q,
r){

var s=null;
if(c('UFIConfig').reactionsHasCommentsNux)
s=
{nuxKey:'reactions_comments',
titleOverride:h._(["New! React to a Comment","ccf65ff030bbe463e2fb655e762f2cd7"]),





textOverride:h._(["Hover over the Like link to see all reactions.","47a663a45222fddf383115c96b63873e"]),





nuxType:c('ReactionNuxTypeEnum').LIKE_CLICK};



return (c('React').createElement(c('UFIReactionsLinkImpl.react'),
{contextArgs:babelHelpers['extends']({},
r,
{ftentidentifier:p.id}),

comment:p,
nuxConfig:s,
reaction:p.viewerreaction,
supportedReactions:q.supportedreactions,
ftIdentifier:r.ftentidentifier}));};


o.prototype.

$UFICommentLikeLink_renderLikeLink=
function(p,
q,
r){

var s=r.loggedOutLinkConfig,

t=
c('TrackingNodes').getTrackingInfo
(p.hasviewerliked?
c('TrackingNodes').types.UNLIKE_LINK:
c('TrackingNodes').types.LIKE_LINK),


u=p.hasviewerliked?h._(["Unlike this comment","bcd1836cc9f4ca9e90a7718751aacc92"]):h._(["Like this comment","5a9a80f9e98e3c700d8237876e4ecc2d"]),



v=p.parentcommentid?
n:
m,

w=!p.hasviewerliked||s?h._(["Like","b6651d95d59f5dda6b9ecd0fa396c4ee"]):h._(["Unlike","a0abf4513f2d677190e1e8402d294078"]);






if(this.props.contextArgs.isaskquestion&&!p.parentcommentid){
u=p.hasviewerliked?h._(["Unvote for this answer","aac5ee5c116b1bd76c4e426148f51f8e"]):h._(["Vote for this answer","b55376fd6b5a27ad2bd6d78f06bf60f4"]);


w=!p.hasviewerliked||s?h._(["Upvote","e12bf5015ba1afd253e1b85d0da9b7ba"]):h._(["Upvoted","a3c3edaebcc46e151bd11c6190ecc805"]);}






var x=null,
y=null;
if(s&&s.showLikeLink){
x='dialog';
y=s.likeAjaxifyURI;}



return (c('React').createElement('a',
{className:'UFILikeLink',
'data-ft':t,
'data-interaction-root-id':"_3-mf",
'data-testid':v,
href:'#',
rel:x,
ajaxify:y,
onClick:function(event){return this.context.dispatch
(c('UFICommentAction').toggleLike
(r,
p,
event.target));}.bind(this),


role:'button',
title:u},
w));};


function o(){j.apply(this,arguments);}o.propTypes={comment:l.object.isRequired,contextArgs:l.object.isRequired,feedback:l.object.isRequired};o.contextTypes={dispatch:l.func};


f.exports=o;}),null);

/** www/__virtual__/x/XUFIReactionProfileBrowserController.js */



__d("XUFIReactionProfileBrowserController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/reaction\/profile\/browser\/",{ft_ent_identifier:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XUFIReactionProfileDialogController.js */



__d("XUFIReactionProfileDialogController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/reaction\/profile\/dialog\/",{reaction_type:{type:"Enum",enumType:0},ft_ent_identifier:{type:"String",required:true},__asyncDialog:{type:"Int"}});}),

null);

/** js/reactions/UFIReactionsProfileBrowserUtils.js */





__d('UFIReactionsProfileBrowserUtils',['ActorURI','XUFIReactionProfileBrowserController','XUFIReactionProfileDialogController'],(function a(b,c,d,e,f,g){





var h=
{getDialogURI:function i(j,k){
return c('ActorURI').create
(c('XUFIReactionProfileDialogController').getURIBuilder().
setString('ft_ent_identifier',j.entidentifier).
setEnum('reaction_type',k).
getURI(),
j.actorforpost);},



getPageURI:function i(j){
return c('ActorURI').create
(c('XUFIReactionProfileBrowserController').getURIBuilder().
setString('ft_ent_identifier',j.entidentifier).
getURI(),
j.actorforpost);}};




f.exports=h;}),null);

/** js/reactions/UFIReactionsBlingTokens.react.js */






__d('UFIReactionsBlingTokens.react',['cx','fbt','Bootloader','Event','RTLKeys','React','ReactDOM','UFIReactionIconImpl.react','UFIReactionTypes','UFIReactionsProfileBrowserUtils','joinClasses','sortReactionTypes'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,















l=null;j=babelHelpers.inherits























(m,
c('React').Component);k=j&&j.prototype;









function m(n){
k.constructor.call(this,n);this.
































































onFocusIn=function(event){
if(!this.refs.tokens.contains(event.target)){
this.setState
({selectedIndex:-1});


if(this.focusInListener){
this.focusInListener.remove();
this.focusInListener=null;}}}.


bind(this);this.

onFocus=function(event){
if(event.target===this.refs.tokens){
this.setState
({selectedIndex:0});


if(!this.focusInListener)
this.focusInListener=c('Event').listen
(document.documentElement,
'focusin',
this.onFocusIn);}}.



bind(this);this.

















onKeyDown=function(event){
switch(event.keyCode){
case c('RTLKeys').RETURN:




if(this.focusInListener){
this.focusInListener.remove();
this.focusInListener=null;}

break;
case c('RTLKeys').TAB:
this.setState
({selectedIndex:0});

break;
case c('RTLKeys').getLeft():
case c('RTLKeys').getRight():
event.preventDefault();
this.setState
({selectedIndex:Math.max
(0,
Math.min
(this.state.selectedIndex+
(event.keyCode===c('RTLKeys').getLeft()?-1:1),
this.state.reactionTypes.length-1))});




break;}}.

bind(this);this.

renderToken=
function(o,
p){

var q=this.props.feedback,
r=i._(["{reduced_count} {reaction_type}","546adad93d3b59d19b35edd8e8ebb3a7"],[i.param


('reduced_count',
q.reactioncountmap[o].reduced),i.param


('reaction_type',
c('UFIReactionTypes').reactions[o].display_name)]),



s=
c('React').createElement(c('UFIReactionIconImpl.react'),
{size:this.props.size,
className:"_4-op",
reaction:o}),


t=
c('React').createElement('span',{className:"_3chu"},
q.reactioncountmap[o].reduced),


u=
{'aria-label':r,
className:"_3emk"+

(this.props.size==='13'?' '+"_26lk":''),

key:'reactionType-'+o,
ref:p};


if(this.props.noLinks)

return (c('React').createElement('span',u,
s,
t));




u=babelHelpers['extends']({},
u,
{ajaxify:
c('UFIReactionsProfileBrowserUtils').getDialogURI(q,o),
href:c('UFIReactionsProfileBrowserUtils').getPageURI(q),
rel:'dialog',
role:'button',
tabIndex:this.state.selectedIndex===p?0:-1});


if(l)

return (c('React').createElement(l,babelHelpers['extends']
({active:this.state.active===o,
feedback:q,
reaction:o},
u),
s,
t));





return (c('React').createElement('a',babelHelpers['extends']
({onMouseEnter:this.onMouseEnter.bind(this,o)},
u),
s,
t));}.


bind(this);this.state={active:null,selectedIndex:-1,reactionTypes:this.getReactionTypes(n.feedback.reactioncountmap,n.max)};}m.prototype.componentDidUpdate=function(){if(this.state.selectedIndex>-1){var n=c('ReactDOM').findDOMNode(this.refs[this.state.selectedIndex]);if(n)n.focus();}};m.prototype.componentWillReceiveProps=function(n){if(n.feedback.reactioncount!==this.props.feedback.reactioncount)this.setState({active:null});this.setState({reactionTypes:this.getReactionTypes(n.feedback.reactioncountmap,n.max)});};m.prototype.getReactionTypes=function(n,o){var p=c('sortReactionTypes')(n,false).filter(function(q){return c('UFIReactionTypes').reactions[q]&&n[q]['default'];});if(o)p=p.slice(0,o);return p;};m.prototype.onMouseEnter=function(n){if(!l)c('Bootloader').loadModules(["UFIReactionsTooltipImpl.react"],function(o){l=o;this.forceUpdate();}.bind(this),'UFIReactionsBlingTokens.react');this.setState({active:n});};m.prototype.

render=function(){
var n=this.props.noLinks?
{}:

{onFocus:this.onFocus,
onKeyDown:this.onKeyDown,
role:'toolbar',
tabIndex:this.state.selectedIndex>-1?-1:0};



return (c('React').createElement('div',
{className:
c('joinClasses')("_3t53",this.props.className)},

c('React').createElement('span',babelHelpers['extends']
({'aria-label':i._(["See who reacted to this","2af011fd46a9f54cb0895c9a6d6c9957"]),



className:"_3t54",
ref:'tokens'},
n),
this.state.reactionTypes.map(this.renderToken,this)),

this.props.children));};


m.defaultProps={className:null,size:'16'};


f.exports=m;}),null);

/** www/__virtual__/x/XUFIReactionsSocialSentenceTooltipController.js */



__d("XUFIReactionsSocialSentenceTooltipController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/reaction\/sentence\/tooltip\/",{ft_ent_identifier:{type:"String",required:true},user_count:{type:"Int"}});}),

null);

/** js/components/UFI/UFICommentReactionCount.react.js */







__d('UFICommentReactionCount.react',['cx','React','UFIReactionsBlingTokens.react','UFIReactionsProfileBrowserUtils','ActorURI','XUFIReactionsSocialSentenceTooltipController'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,









k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.
render=function(){
var m=this.props.comment,
n=
{entidentifier:m.id,
reactioncount:m.reactioncount,
reactioncountmap:m.reactioncountmap,
actorforpost:this.props.actorForPost,
supportedreactions:this.props.supportedReactions},


o="UFICommentLikeButton"+

(this.props.comment.hasviewerliked?' '+"UFICommentLikedButton":''),

p="UFICommentReactionsBling"+(' '+"_4ar-")+(' '+"_ipn"),





q=c('ActorURI').create
(c('XUFIReactionsSocialSentenceTooltipController').getURIBuilder().
setString('ft_ent_identifier',m.id).
setInt('user_count',m.reactioncount).
getURI(),
this.props.actorForPost),


r=c('UFIReactionsProfileBrowserUtils').getDialogURI(n),
s=c('UFIReactionsProfileBrowserUtils').getPageURI(n),

t=this.props.contextArgs.loggedOutLinkConfig;
if(t&&t.showLikeLink){
r=t.likeAjaxifyURI;
s='#';}



return (c('React').createElement('a',
{ajaxify:r,
'data-hover':'tooltip',
'data-tooltip-alignh':'center',
'data-tooltip-uri':q,
href:s,
rel:'dialog',
role:'button'},
c('React').createElement(c('UFIReactionsBlingTokens.react'),
{className:p,
feedback:n,
contextArgs:this.props.contextArgs,
max:3,
noLinks:true,
size:'13'},
c('React').createElement('span',{className:o},
m.reactioncountreduced))));};




function l(){i.apply(this,arguments);}


l.propTypes=
{actorForPost:k.string,
comment:k.object.isRequired,
contextArgs:k.object.isRequired,
supportedReactions:k.array};


f.exports=l;}),null);

/** js/components/UFI/UFICommentShareLink.react.js */






__d('UFICommentShareLink.react',['cx','fbt','BootloadedComponent.react','Event','JSResource','React','ReactDOM','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,











l=c('React').PropTypes,














m=false;j=babelHelpers.inherits

(n,c('React').Component);k=j&&j.prototype;n.










getCanRender=function(o){
return !!(o&&o.canshare&&o.commentshareuri);};


function n(o,p){
k.constructor.call(this,o,p);

this.$UFICommentShareLink_handler=new (c('SubscriptionsHandler'))();
this.state=
{nuxShown:false};}

n.prototype.

componentDidMount=function(){
var o=c('ReactDOM').findDOMNode(this.refs.root);
if(o&&this.$UFICommentShareLink_getNuxKey())
this.$UFICommentShareLink_handler.addSubscriptions
(c('Event').listen(o,'click',this.$UFICommentShareLink_onClick.bind(this)));};


n.prototype.

componentWillUnmount=function(){
this.$UFICommentShareLink_handler.release();};
n.prototype.

componentWillReceiveProps=function(o){


if(this.props.comment&&!this.props.comment.hasviewerliked&&
o.comment&&o.comment.hasviewerliked)

this.$UFICommentShareLink_attemptShowNUX();};

n.prototype.




$UFICommentShareLink_onClick=function(){
this.setState
({nuxShown:false});};

n.prototype.

$UFICommentShareLink_getNuxKey=function(){

return (this.props.contextArgs&&
this.props.contextArgs.commentShareNuxConfig&&
this.props.contextArgs.commentShareNuxConfig.nuxKey||
null);};
n.prototype.

$UFICommentShareLink_attemptShowNUX=function(){
if(m||!this.$UFICommentShareLink_getNuxKey())
return;

m=true;

this.setState
({nuxShown:true});};

n.prototype.

$UFICommentShareLink_renderNUX=function(){
if(!this.state.nuxShown)
return null;

var o=this.$UFICommentShareLink_getNuxKey();
if(!o)
return null;



return (c('React').createElement(c('BootloadedComponent.react'),
{bootloadPlaceholder:c('React').createElement('span',{className:"hidden_elem"}),
bootloadLoader:c('JSResource')('UFICommentShareNUX.react').__setRef('UFICommentShareLink.react'),
nuxContext:this.refs.root,
nuxKey:o}));};


n.prototype.

render=function(){
var o=this.props.comment;

if(!this.constructor.getCanRender(o))
return null;


var p=i._(["Share this comment","5e859800cab74f5620697836ac499fa5"]),



q=i._(["Share","2cd251f9a8352fa590d4bb2353f9e044"]);





return (c('React').createElement('a',
{className:'share_action_link',
href:o.commentshareuri,
role:'button',
ref:'root',
rel:'dialog',
title:p},
q,
this.$UFICommentShareLink_renderNUX()));};


n.propTypes={comment:l.object.isRequired,contextArgs:l.object.isRequired};


f.exports=n;}),null);

/** www/__virtual__/x/XVideoBroadcastPinnedCommentsController.js */



__d("XVideoBroadcastPinnedCommentsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/videos\/pinnedcomments\/",{});}),

null);

/** js/components/UFI/UFILivePinnedCommentLink.react.js */






__d('UFILivePinnedCommentLink.react',['cx','fbt','AsyncRequest','BanzaiODS','React','UFILivePinnedCommentStore','UFISharedDispatcher','UFIStoryAction','UFIVideoPlayerRegistry','XVideoBroadcastPinnedCommentsController','ifRequired'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k;j=babelHelpers.inherits























(l,c('React').Component);k=j&&j.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.
onLinkClick=function(){
var r=c('UFILivePinnedCommentStore').getPinnedCommentID
(this.props.contextArgs.ftentidentifier);



if(this.props.isPinned){
c('UFISharedDispatcher').dispatch
(c('UFIStoryAction').unpinComment
(this.props.contextArgs));}else 



c('UFISharedDispatcher').dispatch
(c('UFIStoryAction').pinComment
(this.props.contextArgs,
this.props.commentID));



var s=this.props.contextArgs.isBroadcasterUFI?
this.getCurrentBroadcastTime():
c('UFIVideoPlayerRegistry').getAvailableVideoPlayerControllerTime
(this.props.contextArgs.instanceid);

if(s===null){
c('BanzaiODS').bumpEntityKey('streaming_comments','pin_with_no_timestamp');
return;}

var t=c('XVideoBroadcastPinnedCommentsController').getURIBuilder().
getURI();
new (c('AsyncRequest'))().
setURI(t).
setData
({video_id:this.props.contextArgs.fluentContentToken,
video_time_offset:s,
comment_fbid:this.props.isPinned?null:this.props.commentFBID}).

setMethod('POST').
setErrorHandler(function(u){
if(r){
c('UFISharedDispatcher').dispatch
(c('UFIStoryAction').pinComment
(this.props.contextArgs,
r));}else 



c('UFISharedDispatcher').dispatch
(c('UFIStoryAction').unpinComment
(this.props.contextArgs));}.



bind(this)).
send();}.
bind(this),n;}l.prototype.

getCurrentBroadcastTime=function(){
return c('ifRequired')
('LiveControlPanelStore',
function(m){
return (m.getCurrentBroadcastTime());})||
c('ifRequired')
('LiveVideoBroadcastBroadcastStore',
function(m){
return (m.getCurrentBroadcastTime());});};

l.prototype.

render=function(){
var m=i._(["Unpin Comment","1ab2a98ac0e94508827058138ef4f5f1"]),




n=i._(["Pin Comment","b0615c8babf183edc1013a0a6920eee8"]);





return (c('React').createElement('a',
{className:"uiLink",
href:'#',
onClick:this.onLinkClick},
this.props.isPinned?m:n));};





f.exports=l;}),null);

/** www/__virtual__/x/XVideoBroadcastClearPinCommentEventAsyncController.js */



__d("XVideoBroadcastClearPinCommentEventAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/videos\/pinnedcomments\/clear\/",{});}),

null);

/** js/components/UFI/UFILiveVODUnpinCommentLink.react.js */






__d('UFILiveVODUnpinCommentLink.react',['cx','fbt','AsyncRequest','Bootloader','React','UFILivePinnedCommentStore','UFISharedDispatcher','UFIStoryAction','XVideoBroadcastClearPinCommentEventAsyncController'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k;j=babelHelpers.inherits




















(l,c('React').Component);k=j&&j.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.
$UFILiveVODUnpinCommentLink_onLinkClick=function(){
c('Bootloader').loadModules(["SimpleXUIDialog"],function(r){
r.showConfirm(i._(["If you unpin this comment, you won't be able to pin it again.","19eff4431c66c790ce168eace00385c1"]),i._(["Unpin Comment","8d9c421e199a13df551c0e7d202d2bc8"]),










function(s){
if(!s)
return;

new (c('AsyncRequest'))().
setURI(c('XVideoBroadcastClearPinCommentEventAsyncController').getURIBuilder().getURI()).
setData({pin_event_id:this.props.pinEventID}).
setMethod('POST').
setHandler(function(t){

if(this.props.commentID===
c('UFILivePinnedCommentStore').getPinnedCommentID
(this.props.contextArgs.ftentidentifier))








c('UFISharedDispatcher').dispatch
(c('UFIStoryAction').unpinComment(this.props.contextArgs));}.


bind(this)).
send();}.
bind(this));}.

bind(this),'UFILiveVODUnpinCommentLink.react');}.
bind(this),n;}l.prototype.

render=function(){

return (c('React').createElement('a',
{className:"uiLink",
href:'#',
onClick:this.$UFILiveVODUnpinCommentLink_onLinkClick},i._(["Unpin Comment","1ab2a98ac0e94508827058138ef4f5f1"])));};









f.exports=l;}),null);

/** js/components/UFI/UFIPrivateReplyIndicator.react.js */






__d('UFIPrivateReplyIndicator.react',['fbt','PagesPrivateReplyConstants','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,





k=c('PagesPrivateReplyConstants').Status;i=babelHelpers.inherits





(l,c('React').Component);j=i&&i.prototype;l.


willRender=function(m){
return m===k.ALREADY_REPLIED;};
l.prototype.

render=function(){
if(this.props.replyStatus===k.ALREADY_REPLIED)

return (c('React').createElement('span',null,h._(["Page responded privately","7370e70010a9a654cca0f7ffc1cb5100"])));






return null;};
function l(){i.apply(this,arguments);}


f.exports=l;}),null);

/** www/__virtual__/x/XPagesMessagingPrivateReplyDialogController.js */



__d("XPagesMessagingPrivateReplyDialogController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/messaging\/private_reply\/dialog\/",{activity_id:{type:"String",required:true},hide_attachments:{type:"Bool",defaultValue:false}});}),

null);

/** js/components/UFI/UFIPrivateReplyLink.react.js */





__d('UFIPrivateReplyLink.react',['cx','fbt','ActorURI','Link.react','PagesPrivateReplyConstants','React','XUIGrayText.react','XPagesMessagingPrivateReplyDialogController'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,











l=c('PagesPrivateReplyConstants').Status,
m=c('PagesPrivateReplyConstants').Type,
n=c('React').PropTypes;j=babelHelpers.inherits

(o,c('React').Component);k=j&&j.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=k.constructor).call.apply(p,[this].concat(s)),this.










































$UFIPrivateReplyLink_renderMessageLink=function(){
var u=c('ActorURI').create
(c('XPagesMessagingPrivateReplyDialogController').getURIBuilder().
setString('activity_id',this.props.activityID).
getURI(),
this.props.context.pageID);



return (c('React').createElement(c('Link.react'),
{className:"_50u0",
'data-interaction-root-id':"_2moj",
href:u,
rel:'dialog'},
this.$UFIPrivateReplyLink_getLabel()));}.


bind(this),this.

$UFIPrivateReplyLink_renderTooltip=function(){
var u=void 0;
switch(this.props.context.status){
case l.EXPIRED:
u=i._({"comments":["You can't send a message response to comments that are older than 6 months.","2f2dab3c687a576545fd9031dfc4a2ea"],"reviews":["You can't send a message response to reviews that are older than 6 months.","fc203eaa1d7bcf009b5ce89407b8aae4"],"posts":["You can't send a message response to posts that are older than 6 months.","ebe3e3e58d66ea8f2b2d3f7ccde98b02"]},[i['enum']




(this.$UFIPrivateReplyLink_getActivityTypeLabel(),
{comments:'comments',reviews:'reviews',posts:'posts'})]);



break;
case l.NOT_USER_CREATED:
u=i._(["Pages can't send private messages to other Pages.","cdee7105b2b9c35fce018a0ac71208fd"]);




break;
case l.CANNOT_MESSAGE:
u=i._(["This person can't receive a message reply from your Page.","95bb3b138feb00b80679b722e2e43deb"]);




break;}


return (c('React').createElement('span',{className:"_50u0 _50u4",
'data-hover':u?'tooltip':null,
'data-tooltip-content':u},
this.$UFIPrivateReplyLink_getLabel()));}.


bind(this),this.



















$UFIPrivateReplyLink_getLabel=function(){
return i._(["Message","604b0e1eae150a4906dc6aea68132714"]);},


this.

$UFIPrivateReplyLink_getActivityTypeLabel=function(){
switch(this.props.context.activityType){
case m.COMMENT_PAGE_POST:
case m.COMMENT_WALL_POST:
case m.COMMENT_REVIEW:
return 'comments';
case m.REVIEW:
return 'reviews';

default:return 'posts';}}.

bind(this),q;}o.willRender=function(p,q){if(!p)return false;if(p.hasReplyPermission&&q===p.pageID)return true;return false;};o.prototype.render=function(){var p=this.props.context;if(p.hasReplyPermission&&this.props.actorID===p.pageID){if(p.status===l.REPLYABLE){return this.$UFIPrivateReplyLink_renderMessageLink();}else if(p.status===l.ALREADY_REPLIED)return this.$UFIPrivateReplyLink_renderSeeReplyLink();return this.$UFIPrivateReplyLink_renderTooltip();}return null;};o.prototype.$UFIPrivateReplyLink_renderSeeReplyLink=function(){var p="_2mok";return c('React').createElement(c('Link.react'),{className:"_50u0",'data-interaction-root-id':p,href:this.props.context.permalink||'#'},this.props.seeResponseLabel?i._(["See Response","d63daab713c4518c243b056c65faad5f"]):this.$UFIPrivateReplyLink_getLabel());};o.propTypes={actorID:n.string.isRequired,activityID:n.string.isRequired,context:n.shape({activityType:n.string.isRequired,status:n.string.isRequired,hasReplyPermission:n.bool.isRequired,pageID:n.string.isRequired,permalink:n.string}).isRequired,seeResponseLabel:n.bool.isRequired};


f.exports=o;}),null);

/** js/components/UFI/UFISpamCount.js */




__d('UFISpamCount',['UFISpamCountImpl'],(function a(b,c,d,e,f,g){

























'use strict';

f.exports=c('UFISpamCountImpl').module||
{enabled:false};}),null);

/** js/components/UFI/UFICommentActions.react.js */











__d('UFICommentActions.react',['cx','fbt','FluxContainer','Middot.react','PublicConversationsUnicornTypedLogger','React','ReactFragment','UFIAcceptedAnswerStore','UFIAddCommentAction','UFICentralUpdates','UFICommentAction','UFICommentLikeCount.react','UFICommentLikeLink.react','UFICommentMetadata.react','UFICommentReactionCount.react','UFICommentShareLink.react','UFIConfig','UFIConstants','UFILivePinnedCommentLink.react','UFILivePinnedCommentStore','UFILiveVODUnpinCommentLink.react','UFIPrivateReplyIndicator.react','UFIPrivateReplyLink.react','UFISharedDispatcher','UFISpamCount','UFIStoryAction','UFIUserActions','WebCommentViewOption'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,































l=c('React').PropTypes,

m=c('UFIConstants').UFIStatus,

n="fsm fwn fcg UFICommentActions",
o="UFIDeletedMessageIcon",
p="UFIDeletedMessage";j=babelHelpers.inherits






























(q,c('React').Component);k=j&&j.prototype;q.







getStores=function(){
return [c('UFIAcceptedAnswerStore'),c('UFILivePinnedCommentStore')];};



q.

calculateState=function(r,s){
var t=s.comment,u=s.feedback,

v=c('UFIAcceptedAnswerStore').get
(t.ftentidentifier,
u.acceptedanswer),


w=c('UFILivePinnedCommentStore').getPinnedCommentID
(t.ftentidentifier),


x=this.calculatePinActionLinkState
(t,
w);



return {acceptedAnswerState:v,
pinActionLinkState:x};};

q.

calculatePinActionLinkState=
function(r,
s){

if(r.islocal)


return 'None';

if(s===r.id)
return 'MayUnpin';

return 'MayPin';};


function q(r){
k.constructor.call(this,r);this.



































































































































































































































































































































































































































































$UFICommentActions_acceptAnswer=function(){
this.context.dispatch
(c('UFIStoryAction').changeAcceptedAnswer
(this.props.contextArgs,
this.props.comment,
true));}.


bind(this);this.

$UFICommentActions_unacceptAnswer=function(){
this.context.dispatch
(c('UFIStoryAction').changeAcceptedAnswer
(this.props.contextArgs,
this.props.comment,
false));}.


bind(this);this.state=q.calculateState(null,r);}q.prototype.render=function(){var r=this.props,s=r.comment,t=r.permalink,u=r.feedback,v=r.parentCanComment,w=r.markedAsSpamHere,x=s.status===m.SPAM_DISPLAY,y=r.showReplyLink,z=r.hideAsSpamForPageAdmin,aa=void 0,ba=void 0,ca=void 0,da=void 0,ea=void 0,fa=void 0,ga=void 0,ha=void 0,ia=void 0,ja=void 0,ka=!s.islocal&&s.status!==m.LIVE_DELETED&&!s.tipOptionIndex;if(ka){if(x&&!w){if(r.viewerCanMarkNotSpam)aa=c('React').createElement('a',{onClick:function(event){return this.context.dispatch(c('UFICommentAction').markAsNotSpam(r.contextArgs,s,event));}.bind(this),className:"UFICommentNotSpamLink",href:'#',role:'button'},i._(["Unhide","7094aaf802e76300abdd608bde26db21"]));if(z&&u.isthreaded&&s.cancomment&&y)fa=this.renderCommentReply(s);}else{ba=c('UFICommentLikeLink.react').getCanRender(s)?c('React').createElement(c('UFICommentLikeLink.react'),{comment:s,contextArgs:r.contextArgs,feedback:u}):null;if(u.isthreaded&&s.cancomment&&y||!!s.parentcommentid&&u.cancomment&&v)fa=this.renderCommentReply(s);if(s.canviewerreact){da=s.reactioncount>0?c('React').createElement(c('UFICommentReactionCount.react'),{comment:s,actorForPost:u.actorforpost,supportedReactions:u.supportedreactions,contextArgs:r.contextArgs}):null;}else da=s.likecount>0?c('React').createElement(c('UFICommentLikeCount.react'),{comment:s,actorForPost:u.actorforpost,contextArgs:r.contextArgs}):null;if(s.spamcount&&c('UFISpamCount').enabled)ea=c('React').createElement(c('UFISpamCount'),{count:s.spamcount});ga=this.renderMessageReply(s,u);}if(s.attachment&&s.attachment.type==='share'&&!s.attachment.disableRemove&&s.canremove){var la="_460h";ha=c('React').createElement('a',{'data-interaction-root-id':la,href:'#',onClick:function(event){return this.context.dispatch(c('UFICommentAction').removePreview(r.contextArgs,s,event.target));}.bind(this),role:'button'},i._(["Remove Preview","0cf818528d934316f58287c90981ee8e"]));}if(c('UFICommentShareLink.react').getCanRender(s))ca=c('React').createElement(c('UFICommentShareLink.react'),{contextArgs:r.contextArgs,comment:s});}if(c('UFIConfig').publicConversationsUnicornWhitelist)ia=c('React').createElement('a',{className:'share_action_link',href:'#',role:'button',title:"[FB Only] Mark this comment as a great comment for futher review.",onClick:function bb(event){return new (c('PublicConversationsUnicornTypedLogger'))().setCommentFbid(s.fbid).log();}},'Unicorn');var ma=r.contextArgs.islivestreaming?null:c('React').createElement(c('UFICommentMetadata.react'),{comment:s,onRetrySubmit:function(){return this.context.dispatch(c('UFIAddCommentAction').retrySubmit(r.contextArgs,s));}.bind(this),permalink:t,shortenTimestamp:r.contextArgs.shortenTimestamp,showPermalink:r.showPermalink,contextArgs:r.contextArgs}),na=null;if(r.contextArgs.enablePinLiveComments&&!s.tipOptionIndex)if(r.contextArgs.islivestreaming&&this.state.pinActionLinkState!=='None'){na=c('React').createElement(c('UFILivePinnedCommentLink.react'),{commentID:s.id,commentFBID:s.fbid,contextArgs:r.contextArgs,isPinned:this.state.pinActionLinkState==='MayUnpin'});}else if(r.contextArgs.isLiveVOD&&this.state.pinActionLinkState==='MayUnpin'){var oa=c('UFILivePinnedCommentStore').getPinEventID(r.contextArgs.ftentidentifier);if(oa!==null)na=c('React').createElement(c('UFILiveVODUnpinCommentLink.react'),{commentID:s.id,contextArgs:r.contextArgs,pinEventID:oa});}var pa={};if(u.customcommentactionlinks)for(var qa in u.customcommentactionlinks){var ra=u.customcommentactionlinks[qa];if(ra.showInMenu)continue;var sa=function bb(event){return c('UFICentralUpdates').inform(ra.type,{comment:s,feedback:u});};pa[ra.type]=c('React').createElement('a',{href:'#',onClick:sa,role:'button'},ra.title);}var ta=void 0;if(this.props.orderingMode===c('WebCommentViewOption').LIVE_STREAMING){ta=babelHelpers['extends']({likeToggle:ba,unicornButton:ia,spamToggle:aa,likeCount:da,spamCount:ea,livePinCommentLink:na,metadata:ma},pa);}else if(u.isqanda){ta=babelHelpers['extends']({likeCount:da,spamCount:ea,likeToggle:ba,unicornButton:ia,commentReply:fa,shareComment:ca,messageReply:ga,spamToggle:aa},pa,{livePinCommentLink:na,metadata:ma,removePreview:ha});}else if(r.contextArgs.isaskquestion&&!s.parentcommentid){if(ka)ja=this.renderAcceptAnswerButton(r.contextArgs,u,s);ta=babelHelpers['extends']({likeToggle:ba,unicornButton:ia,commentReply:fa,messageReply:ga,spamToggle:aa,removePreview:ha,shareComment:ca,likeCount:da,spamCount:ea,acceptAnswerButton:ja},pa,{livePinCommentLink:na,metadata:ma});}else if(r.contextArgs.entstream){ta=babelHelpers['extends']({livePinCommentLink:na,metadata:ma,likeToggle:ba,unicornButton:ia,likeCount:da,commentReply:fa,messageReply:ga,shareComment:ca,spamCount:ea,spamToggle:aa,removePreview:ha},pa);}else if(u.isthreaded){ta=babelHelpers['extends']({likeToggle:ba,unicornButton:ia,commentReply:fa,messageReply:ga,spamToggle:aa,removePreview:ha,shareComment:ca,likeCount:da,spamCount:ea},pa,{livePinCommentLink:na,metadata:ma});}else ta=babelHelpers['extends']({livePinCommentLink:na,metadata:ma,likeToggle:ba,unicornButton:ia,shareComment:ca,likeCount:da,spamCount:ea,commentReply:fa,messageReply:ga,spamToggle:aa,removePreview:ha},pa);if(s.status===m.LIVE_DELETED){var ua=i._(["Comment deleted","e494655d270acfe584984e49a43ef564"]),va=c('React').createElement('span',{className:p},c('React').createElement('i',{'aria-label':ua,className:o,'data-hover':'tooltip','data-tooltip-content':ua,role:'img'}));ta.deletionWarning=va;}var wa=true,xa={};for(var ya in ta){var za=ta[ya];if(za){var ab=c('React').createElement(c('Middot.react'),{key:'middot-'+ya});xa[ya]=wa?za:c('ReactFragment').create({middot:ab,action:za});wa=false;}}return c('React').createElement('div',{className:n},c('ReactFragment').create(xa));};q.prototype.renderCommentReply=function(r){return c('React').createElement('a',{className:"UFIReplyLink",'data-interaction-root-id':"_460i",href:'#',onClick:function(){var s=this.props,t=s.contextArgs,u=s.feedback;if(u.isthreaded&&r.cancomment){this.context.dispatch(c('UFIStoryAction').showReplies(t,r.id,r));}else if(r.parentcommentid)this.context.dispatch(c('UFIStoryAction').showReplies(t,r.parentcommentid,r));if(u.targetiscomment)c('UFISharedDispatcher').dispatch(c('UFIStoryAction').showComments(t));}.bind(this),role:'button'},i._(["Reply","0bc8d68a2d21f6960b1e55c86d20c969"]));};q.prototype.renderMessageReply=function(r,s){if(r.messagereply){if(c('UFIPrivateReplyLink.react').willRender(r.messagereply,s.actorforpost)){return c('React').createElement(c('UFIPrivateReplyLink.react'),{actorID:s.actorforpost,activityID:r.id,context:r.messagereply,seeResponseLabel:true});}else if(c('UFIPrivateReplyIndicator.react').willRender(r.messagereply.status))return c('React').createElement(c('UFIPrivateReplyIndicator.react'),{replyStatus:r.messagereply.status});}else if(r.chattobuy){var t="_460j";return c('React').createElement('a',{'data-interaction-root-id':t,href:r.chattobuy,role:'button',rel:'async-dialog'},i._(["Message","b756fc16adec291c5df694a7cc377f93"]));}return null;};q.prototype.

renderAcceptAnswerButton=
function(r,
s,
t){

var u=s.actorid===s.actorforpost;


if(this.state.acceptedAnswerState.type==='NoneAccepted'){
if(!u)
return null;


var v="_460k";
return c('React').createElement('a',
{'data-interaction-root-id':v,
onClick:this.$UFICommentActions_acceptAnswer,
role:'button',
tabIndex:'0'},i._(["Accept answer","6cb7d59f5ac7d6052be19a5d450f8289"]));}











if(this.state.acceptedAnswerState.id!==t.id)
return null;


var w="_460l";

return u?
c('React').createElement('a',
{'data-interaction-root-id':w,
onClick:this.$UFICommentActions_unacceptAnswer,
role:'button',
tabIndex:'0'},i._(["Unaccept answer","0262a3f9c1a5a22130d5997b3c00e642"])):i._(["Accepted answer","840f13d3fce96857175d797314ff4de9"]);};













q.contextTypes={dispatch:l.func};



f.exports=c('FluxContainer').create(q,{withProps:true});}),null);

/** js/components/UFI/UFISocialContext.react.js */







__d('UFISocialContext.react',['fbt','HovercardLink','ProfileBrowserLink','ProfileBrowserTypes','React','URI'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,









k=c('React').PropTypes,


l=27;i=babelHelpers.inherits

(m,c('React').Component);j=i&&i.prototype;m.prototype.






render=function(){
var n=this.props.topMutualFriend,
o=this.props.otherMutualCount,
p=this.props.commentAuthor,

q=
c('HovercardLink').constructEndpoint(n).toString(),
r=
c('React').createElement('a',
{href:n.uri,
'data-hovercard':q,
key:'top'},
n.name),




s=p.name.length+n.name.length,

t=void 0;
if(o===0){
t=h._(["Friends with {name}","a9d37e05f1282a3fde80d30bc39781ed"],

[h.param('name',r)]);}else


if(s<l){
var u=void 0;
if(o==1){
u=h._(["1 other","64a91422586076a3098ccc7839590911"]);}else 




u=h._({"*":["{count} others","6655cf5efec8812472a60a052704173e"]},
[h.param('count',o,[0])]);





t=h._(["Friends with {name} and {others}","0c54978d795f67fd29edee488fc4294c"],

[h.param('name',r),

h.param
('others',
this.getOthersLink(u,p,n))]);}else{





var v=h._({"*":["{count} mutual friends","f37d93857243e21335658a19de784971"]},
[h.param('count',o+1,[0])]);



t=this.getOthersLink(v,p);}



return (c('React').createElement('span',{className:'UFICommentSocialContext'},
t));};


m.prototype.

getOthersLink=function(n,o,p){
var q=c('ProfileBrowserTypes').MUTUAL_FRIENDS,
r={uid:o.id},

s=new (c('URI'))('/ajax/mutual_friends/tooltip.php').
setQueryData({friend_id:o.id});

if(p)
s.addQueryData({exclude_id:p.id});


var t=
c('ProfileBrowserLink').constructDialogURI(q,r).toString();


return (c('React').createElement('a',
{ajaxify:t,
'data-hover':'tooltip',
'data-tooltip-alignh':'center',
'data-tooltip-uri':s.toString(),
href:c('ProfileBrowserLink').constructPageURI(q,r).toString(),
key:'others',
rel:'dialog'},
n));};


function m(){i.apply(this,arguments);}m.propTypes={commentAuthor:k.object.isRequired,otherMutualCount:k.number.isRequired,topMutualFriend:k.object.isRequired};


f.exports=m;}),null);

/** js/components/UFI/UFICommentAuthorName.react.js */





__d('UFICommentAuthorName.react',['Badge.react','React','TrackingNodes','UFIActor.react','UFISocialContext.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i,








j=c('React').PropTypes;h=babelHelpers.inherits






















(k,c('React').Component);i=h&&h.prototype;k.prototype.



















render=function(){
var l=this.props,
m=l.author,
n=
c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.USER_NAME);

return (c('React').createElement(c('UFIActor.react'),
{author:m,
disableAuthorLink:l.disableAuthorLink,
showHovercard:l.showHovercard,
isAdminViewer:l.isAdminViewer,
key:'author',
focusOnMount:l.focusOnMount,
'data-ft':n,
isAuthorWeakReference:l.isAuthorWeakReference,
isAuthorNonCoworker:l.isAuthorNonCoworker,
memberBioBadgeURI:l.memberBioBadgeURI,
groupMemberTag:l.groupMemberTag,
groupOrEventID:l.groupOrEventID,
useFirstName:l.useFirstName,
isPublic:this.props.isPublic},

l.isFeatured?
c('React').createElement(c('Badge.react'),{key:'badge',size:'xsmall',type:'verified'}):
null,

this.getConstituentTitle(m),
l.socialContext?
c('React').createElement(c('UFISocialContext.react'),
{topMutualFriend:
l.authorProfiles[l.socialContext.topmutualid],

otherMutualCount:l.socialContext.othermutualcount,
commentAuthor:m}):

null));};



k.prototype.

getConstituentTitle=function(l){
var m=this.props.constituentTitle;
if(m&&m.titleModule){
var n=m.titleModule;

return (c('React').createElement(n,
{representativeName:m.representativeName,
representativeId:m.representativeId,
authorId:l.id,
ftId:m.ftId,
commentId:m.commentId,
showHovercard:true,
isOwner:m.isOwner,
key:'constituentTitle'}));}else 



return null;};

function k(){h.apply(this,arguments);}k.propTypes={author:j.object.isRequired,authorProfiles:j.object.isRequired,disableAuthorLink:j.bool,showHovercard:j.bool,isAdminViewer:j.bool,isAuthorWeakReference:j.bool,isAuthorNonCoworker:j.bool,memberBioBadgeURI:j.string,groupMemberTag:j.string,focusOnMount:j.bool,groupOrEventID:j.string,isFeatured:j.bool,socialContext:j.object,useFirstName:j.bool,isPublic:j.bool,constituentTitle:j.object};


f.exports=k;}),null);

/** shared/intl/IntlLang.js */





__d('IntlLang',['UnicodeBidi'],(function a(b,c,d,e,f,g){







'use strict';








var h=

{HE:
'\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05D0-\u05EA\u05EB-\u05EF'+
'\u05F0-\u05F2\u05F3-\u05F4\u05F5-\u05FF\u07C0-\u07C9\u07CA-\u07EA'+
'\u07F4-\u07F5\u07FA\u07FB-\u07FF\u0800-\u0815\u081A\u0824\u0828'+
'\u082E-\u082F\u0830-\u083E\u083F\u0840-\u0858\u085C-\u085D\u085E'+
'\u085F-\u089F\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB37\uFB38-\uFB3C'+
'\uFB3D\uFB3E\uFB3F\uFB40-\uFB41\uFB42\uFB43-\uFB44\uFB45\uFB46-\uFB4F'},


i=new RegExp
('['+
h.HE+
']');










function j(l){
var m=c('UnicodeBidi').firstStrongChar(l);
if(m===null)
return null;


if(i.exec(m))
return 'he';


return null;}


var k=
{getLang:j};


f.exports=k;}),null);

/** js/components/UFI/UFICommentBody.react.js */





__d('UFICommentBody.react',['cx','Locale','React','TrackingNodes','TruncatedTextWithEntities.react','UnicodeBidi','IntlLang','UFICommentUtils','UFIConfig','UFIConstants'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,
















k=c('React').PropTypes;i=babelHelpers.inherits















(l,c('React').Component);j=i&&i.prototype;l.prototype.

















render=function(){
var m=this.props,
n=m.commentText,
o=
c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.USER_MESSAGE),

p=c('UnicodeBidi').isDirectionLTR(n),
q=!p,
r=
p&&c('Locale').isRTL()?'ltr':
q&&!c('Locale').isRTL()?'rtl':null,

s=c('IntlLang').getLang(n),

t=c('UFICommentUtils').getCommentBodyInterpolator
(m.groupOrEventID,
m.ufiInstanceID,
m.commentFBID,
!!m.isLiveStreaming),


u=
c('React').createElement(c('TruncatedTextWithEntities.react'),
{key:'comment-body',
className:"UFICommentBody",


interpolator:t,
ranges:m.commentRanges,
text:n,
truncationPercent:c('UFIConstants').commentTruncationPercent,
maxLength:m.maxLength,
maxLines:m.maxLines,
renderEmoticons:c('UFIConfig').renderEmoticons,
renderEmoji:c('UFIConfig').renderEmoji,
'data-ft':o,
dir:r,
lang:s,
markViewerHasInteracted:this.props.markViewerHasInteracted,
allowSeeMoreLinebreakOnLongWords:true,
shouldExpand:this.props.shouldExpand});


if(m.socialContext){
u=c('React').createElement('div',{key:'body'},u);}else{

var v=
(p&&c('Locale').isRTL()?"_5wjy":'')+
(p&&c('Locale').isRTL()?' '+"_5wjz":'')+
(q&&!c('Locale').isRTL()?' '+"_5wj-":'')+
(q&&!c('Locale').isRTL()?' '+"_5wj_":'');

u=v?
c('React').createElement('div',{key:'body',className:v},u):
[' ',u];}


return c('React').createElement('span',null,u);};
function l(){i.apply(this,arguments);}l.propTypes={commentText:k.string.isRequired,commentRanges:k.array,groupOrEventID:k.string,maxLength:k.number,maxLines:k.number,socialContext:k.object,markViewerHasInteracted:k.func,ufiInstanceID:k.string,commentFBID:k.oneOfType([k.string,k.number]),isLiveStreaming:k.bool,shouldExpand:k.bool};


f.exports=l;}),null);

/** js/components/UFI/UFICommentLiveVideoAnnouncementImage.react.js */







__d('UFICommentLiveVideoAnnouncementImage.react',['ix','cx','Image.react','React','LiveVideoAnnouncementGlyph','fbglyph'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k;j=babelHelpers.inherits











(l,c('React').PureComponent);k=j&&j.prototype;l.prototype.






render=function(){
var m=this.$UFICommentLiveVideoAnnouncementImage_getImageSource();
if(!m)
return c('React').createElement('span',null);



return (c('React').createElement('div',
{className:"_15lj",
style:{backgroundColor:'gray'}},
c('React').createElement(c('Image.react'),
{className:"_15lk",
height:20,
src:m,
width:20})));};



l.prototype.

$UFICommentLiveVideoAnnouncementImage_getImageSource=function(){
if(this.props.image)
return this.props.image;

switch(this.props.glyphName){
case c('LiveVideoAnnouncementGlyph').COMMENT:
return h("114673");





case c('LiveVideoAnnouncementGlyph').EYE:
return h("114860");





case c('LiveVideoAnnouncementGlyph').BULB:
return h("114492");





case c('LiveVideoAnnouncementGlyph').LIKE:
return h("115160");






default:return null;}};

function l(){j.apply(this,arguments);}


f.exports=l;}),null);

/** js/components/core/XUI/GlyphButton/XUIEditButton.react.js */




__d('XUIEditButton.react',['cx','fbt','XUIAbstractGlyphButton.react','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits








(l,c('React').Component);k=j&&j.prototype;l.prototype.
render=function(){'use strict';

var m=this.props.label,
n=this.props.title;
if(!this.props.title&&!this.props.tooltip){
if(!m)
m=i._(["Edit","6c339fabd58d3789ca1c9a403e3259b1"]);

n=m;}



return (c('React').createElement(c('XUIAbstractGlyphButton.react'),babelHelpers['extends']({},
this.props,
{label:m,
title:n,
'data-hover':this.props.tooltip&&'tooltip',
'data-tooltip-alignh':this.props.tooltip&&'center',
'data-tooltip-content':this.props.tooltip,
className:c('joinClasses')(this.props.className,"_5upq _5upr")})));};


function l(){'use strict';j.apply(this,arguments);}


f.exports=l;}),null);

/** js/components/UFI/UFICommentMenu.react.js */









__d('UFICommentMenu.react',['ix','cx','Bootloader','Image.react','React','XUICloseButton.react','XUIEditButton.react','keyMirror','fbglyph'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,l,m,











n=c('React').PropTypes,


o=void 0,
p=void 0,
q=void 0,
r=void 0,

s=c('keyMirror')
({EDIT:true,
CLOSE:true,
CHEVRON:true});j=babelHelpers.inherits

















(t,c('React').Component);k=j&&j.prototype;function t(){var v,w;for(var x=arguments.length,y=Array(x),z=0;z<x;z++)y[z]=arguments[z];return w=(v=k.constructor).call.apply(v,[this].concat(y)),this.









state=
{bootloading:false,
bootloaded:false,
needsExpand:false},this.


onClickGuard=function(event){
if(this.state.bootloading){
return;}else
if(!this.state.bootloaded&&this.props.menuData){
this.setState({bootloading:true});
c('Bootloader').loadModules
(["ContextualDialogArrow","PopoverMenu.react","ReactXUIMenu"],
function(aa,ba,ca){
o=aa;
p=ba;
q=ca;
r=ca.Item;

this.setState
({bootloading:false,
bootloaded:true,
needsExpand:true});}.

bind(this),'UFICommentMenu.react');}else

if(this.props.onClick)
this.props.onClick(event);}.

bind(this),w;}t.prototype.

shouldComponentUpdate=function(v,w){
if(this.state.needsExpand&&!w.needsExpand)
return false;


return true;};
t.prototype.

render=function(){
var v=null;
if(this.props.menuType===s.EDIT){
v=c('XUIEditButton.react');}else
if(this.props.menuType===s.CLOSE){
v=c('XUICloseButton.react');}else 

v=u;


if(this.props.menuData&&this.state.bootloaded){
var w=this.props.menuData.map(function(y){

return (c('React').createElement(r,
{'data-testid':y.testid,
key:y.value,
value:y.value},
y.label));}),




x=c('React').createElement(q,{onItemClick:this.props.onAction},w);


return (c('React').createElement(p,babelHelpers['extends']({},
this.props,
{alignh:'right',
layerBehaviors:[o],
menu:x,
ref:'menu'}),
c('React').createElement(v,babelHelpers['extends']({},this.props,{href:'#',onClick:this.onClickGuard}))));}




return (c('React').createElement(v,babelHelpers['extends']({},
this.props,
{'data-interaction-root-id':"_1-be",
href:'#',
onClick:this.onClickGuard})));};


t.prototype.

componentDidUpdate=function(){
if(this.state.needsExpand){
this.refs.menu.showPopover();
this.setState({needsExpand:false});}};

t.MenuType=s;t.propTypes={menuData:n.array,menuType:n.oneOf(Object.keys(s)).isRequired,onAction:n.func,onClick:n.func};l=babelHelpers.inherits


(u,c('React').Component);m=l&&l.prototype;u.prototype.
render=function(){

return (c('React').createElement('a',this.props,
c('React').createElement(c('Image.react'),
{'data-hover':'tooltip',
'data-tooltip-content':this.props.tooltip,
'aria-label':this.props.tooltip,
src:h("125792")})));};







function u(){l.apply(this,arguments);}


f.exports=t;}),null);

/** js/components/UFI/UFICommentTranslation.react.js */






__d('UFICommentTranslation.react',['cx','ContentTranslationStrings','Link.react','React','TranslationTrigger','TruncatedTextWithEntities.react','UFIConfig','UFIConstants','XUISpinner.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits


























































(k,c('React').Component);j=i&&i.prototype;







function k(l){
j.constructor.call(this,l);
var m=this.props.translationData;
this.state=
{shouldExpand:
this.props.shouldExpand||

!!m&&
m.trigger===c('TranslationTrigger').SEE_TRANSLATION};}


k.prototype.

render=function(){

if(!this.props.showTranslation)

return (c('React').createElement(c('Link.react'),
{className:"UFITranslateLink",
onClick:function(){return this.$UFICommentTranslation_onSeeTranslationClick();}.bind(this)},
c('ContentTranslationStrings').SEE_TRANSLATION));





var l=this.props.translationData;
if(!l)

return (c('React').createElement('div',{className:"UFITranslateLink"},
c('React').createElement(c('XUISpinner.react'),{background:'light',size:'small'})));





var m=l.translatedText;
if(!m||!m.text)

return (c('React').createElement('div',{className:"UFITranslationErrorText"},
c('ContentTranslationStrings').NO_TRANSLATION_AVAILABLE));




var n=
this.props.isShowingOriginal||
l.trigger===
c('TranslationTrigger').LOGGED_OUT_AUTO_TRANSLATION,
o=n?
null:
c('React').createElement('div',{className:"UFITranslateAttribution"},
c('ContentTranslationStrings').getTranslatedFrom
(l.sourceDialectName)),


p=n?
c('React').createElement('div',{className:"UFITranslateAttribution"},
c('ContentTranslationStrings').AUTOMATICALLY_TRANSLATED):

c('React').createElement(c('Link.react'),
{className:"UFITranslateLink",
onClick:function(){return this.$UFICommentTranslation_onSeeOriginalClick();}.bind(this)},
c('ContentTranslationStrings').SEE_ORIGINAL_LINK);



return (c('React').createElement('div',null,
o,
c('React').createElement('div',{className:"UFITranslatedText"},
c('React').createElement(c('TruncatedTextWithEntities.react'),
{className:"UFICommentBody",
ranges:m.ranges,
text:m.text,
truncationPercent:c('UFIConstants').commentTruncationPercent,
maxLength:c('UFIConstants').commentTruncationLength,
maxLines:c('UFIConstants').commentTruncationMaxLines,
renderEmoticons:c('UFIConfig').renderEmoticons,
renderEmoji:c('UFIConfig').renderEmoji,
dir:m.dir,
shouldExpand:this.state.shouldExpand,
markViewerHasInteracted:
function(){return this.setState({shouldExpand:!this.state.shouldExpand});}.bind(this)}),


p)));};



k.prototype.

$UFICommentTranslation_onSeeTranslationClick=function(){
this.props.onSeeTranslation&&this.props.onSeeTranslation();};
k.prototype.

$UFICommentTranslation_onSeeOriginalClick=function(){
this.props.onSeeOriginal&&this.props.onSeeOriginal();};
k.defaultProps={shouldExpand:false};


f.exports=k;}),null);

/** js/components/UFI/UFICommentVPVTracker.react.js */





__d('UFICommentVPVTracker.react',['OnVisible.react','React','UFICommentVPVs','UFIConfig','clearTimeout','setTimeout'],(function a(b,c,d,e,f,g){

'use strict';var h,i,









j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.











state={timer:null},this.





















maybeScheduleVPVLogging=function(){
if(this.state.timer!==null)
return;


var q=this.props.comment.id,
r=this.props.contextArgs.instanceid;
if(c('UFICommentVPVs').hasLoggedVPV(r,q))
return;


this.setState({timer:c('setTimeout')(function(){
c('UFICommentVPVs').logVPV(r,q);
this.setState({timer:null});}.
bind(this),c('UFIConfig').vpvLoggingTimeout)});}.
bind(this),this.

cancelScheduledVPVLogging=function(){
if(this.state.timer===null)
return;


c('clearTimeout')(this.state.timer);
this.setState({timer:null});}.
bind(this),m;}k.prototype.render=function(){var l=this.props.comment.id,m=this.props.contextArgs.instanceid,n=this.props.children,o=c('UFICommentVPVs').hasLoggedVPV(m,l);return c('React').createElement(c('OnVisible.react'),{onVisible:o?null:this.maybeScheduleVPVLogging,onHidden:o?null:this.cancelScheduledVPVLogging},n);};k.prototype.

shouldComponentUpdate=function(l,m){


return m.timer===this.state.timer;};
k.prototype.

componentWillReceiveProps=function(){
this.cancelScheduledVPVLogging();};
k.prototype.

componentWillUnmount=function(){
this.cancelScheduledVPVLogging();};
k.propTypes={comment:j.object.isRequired,contextArgs:j.object.isRequired};


f.exports=k;}),null);

/** shared/date/TimeOffset.js */





__d('TimeOffset',[],(function a(b,c,d,e,f,g){

'use strict';

var h=






{timeToTimestamp:function i(j){
if(j<=0)
return '0:00';


var k=Math.floor(j/3600),
l=k?k+':':'';
l+=
((k?'0':'')+Math.floor(j%3600/60)).slice(-2)+':';
return l+('0'+j%60).slice(-2);}};



f.exports=h;}),null);

/** js/components/UFI/UFILiveCommentTimestamp.react.js */






__d('UFILiveCommentTimestamp.react',['cx','fbt','CommentPostedLiveState','React','TimeOffset','Tooltip.react','Middot.react','UFIVideoPlayerRegistry','VideoTimestampsClicksWWWTypedLogger'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,












l=c('React').PropTypes;j=babelHelpers.inherits





(m,c('React').Component);k=j&&j.prototype;m.prototype.
















render=function(){var n,o=
this.props,p=o.comment,q=o.contextArgs,

r=!p.parentcommentid,

s=null;
if(r)(function(){
var u=typeof p.videoTimeOffset==='number'?
p.videoTimeOffset:
0;
s=
c('React').createElement('a',
{className:"_39g5",
onClick:function v(event){
event.preventDefault();
var w=new (c('VideoTimestampsClicksWWWTypedLogger'))().
setVideoTimestamp(u).
setIsContentTimestamp(true);



if(p.islocal){
w.setLocalCommentFeedbackID(p.ftentidentifier);}else 

w.setCommentID(p.fbid);

w.log();
c('UFIVideoPlayerRegistry').seekAvailableVideoPlayerController
(q.instanceid,
u);},



role:'button',
tabIndex:'0'},
c('TimeOffset').timeToTimestamp(u));})();



var t=null;

if(p.postedLiveState===c('CommentPostedLiveState').LIVE){

t=
c('React').createElement(c('Tooltip.react'),{tooltip:i._(["Comment posted while the video was live","f908c37670c1c63bb306c9fb64bb370a"])},



c('React').createElement(c('Middot.react'),{className:"_5rr7"}));}else


if(p.postedLiveState===c('CommentPostedLiveState').ON_DEMAND){

t=
c('React').createElement(c('Tooltip.react'),{tooltip:i._(["Comment posted after the live video ended","a1595dd90d2a0efa2a85db0b2a3c15f5"])},



c('React').createElement(c('Middot.react'),{className:"_5rra"}));}else 



t=c('React').createElement(c('Middot.react'),{className:"_5rra"});



return (c('React').createElement('span',null,
t,
s));};


function m(){j.apply(this,arguments);}m.propTypes={comment:l.shape({fbid:l.string,islocal:l.bool,postedLiveState:l.oneOf([c('CommentPostedLiveState').LIVE,c('CommentPostedLiveState').ON_DEMAND]),videoTimeOffset:l.number,parentcommentid:l.string}).isRequired,contextArgs:l.shape({instanceid:l.string.isRequired}).isRequired};


f.exports=m;}),null);

/** js/video/video_ads/tip_jar/VideoTipJarCommentBackground.react.js */







__d('VideoTipJarCommentBackground.react',['ix','Image.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,






k=
[h("99652"),
h("99653"),
h("99654")];i=babelHelpers.inherits






(l,
c('React').Component);j=i&&i.prototype;l.prototype.

render=function(){
var m=k[parseInt(this.props.tipOptionIndex,10)];
return m?c('React').createElement(c('Image.react'),{src:m}):null;};
function l(){i.apply(this,arguments);}


f.exports=l;}),null);

/** www/__virtual__/x/XUnifiedQueueReportedCommentsController.js */



__d("XUnifiedQueueReportedCommentsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/groups\/{groupid}\/write_async\/reported_comments\/",{groupid:{type:"Int",required:true},commentid:{type:"Int"},keep:{type:"Bool",defaultValue:false},block:{type:"Bool",defaultValue:false},uid:{type:"Int"}});}),

null);

/** js/components/UFI/UFIComment.react.js */









__d('UFIComment.react',['ix','cx','fbt','invariant','AsyncRequest','BootloadedComponent.react','Bootloader','DOMContainer.react','FluxContainer','HovercardLink','HTML','Image.react','InlineBlock.react','JSResource','LiveWWWFeedbackTypedLogger','React','ReactDOM','TrackingNodes','TranslationTrigger','UFIAcceptedAnswerStore','UFIActorIconContainer.react','UFICentralUpdates','UFICommentAction','UFICommentActions.react','UFICommentAttachment.react','UFICommentAuthorName.react','UFICommentBody.react','UFICommentLiveVideoAnnouncementImage.react','UFICommentMenu.react','UFICommentTranslation.react','UFICommentUtils','UFICommentVPVDTracker.react','UFICommentVPVTracker.react','UFIConfig','UFIConstants','UFIImageBlock.react','UFILiveCommentTimestamp.react','UFISharedDispatcher','UserHovercardLocation','VideoTipJarCommentBackground.react','WebCommentViewOption','XFeedNUXSaveSeenStateController','XUIButton.react','XUICloseButton.react','XUnifiedQueueReportedCommentsController','emptyFunction','fbglyph','joinClasses','keyMirror'],(function a(b,c,d,e,f,g,h,i,j,k){

'use strict';var l,m,



















































n=c('React').PropTypes,


o=c('UFIConstants').UFIStatus,




p=
{NEWSSTAND:'newsstand'},


q=c('keyMirror')
({edit:true,
hide:true,
remove:true,
embed:true,
showConstituentTitle:true,
hideConstituentTitle:true}),


r='ufi_comment_close_button',
s='ufi_highlighted_comment',
t='ufi_comment_menu_delete',
u='ufi_comment_menu_edit',
v='ufi_comment_menu_hide',
w='ufi_comment_menu_embed',
x='ufi_comment_menu_show_district',
y='ufi_comment_menu_hide_district',

z=
{testid:t,
value:q.remove,
label:j._(["Delete Comment...","d3cf29e454873d279d4b4be2d721beeb"])},


aa=
{testid:v,
value:q.hide,
label:j._(["Hide Comment","0794c50c8b255ae8718ccd1a67af1f2f"])},


ba=
{testid:w,
value:q.embed,
label:j._(["Embed","5cf62af4048f232bd0d2017fb620bfba"])},


ca=
{testid:t,
value:q.remove,
label:j._(["Delete...","444ecdbd589a1a6628f3ada00428f278"])},






da=
{testid:x,
value:q.showConstituentTitle,
label:j._(["Show District","1ada2c7baeb8881aa95917b4bb2965b7"])},


ea=
{testid:y,
value:q.hideConstituentTitle,
label:j._(["Hide District","5c7fef6c362f333eba506d48073a50d7"])},


fa=false,















ga=null,

ha=function ma(na){
var oa=na.status;
return oa===o.FAILED_ADD||oa===o.FAILED_EDIT;},


ia=function ma(na,oa){

return (!!na.tipOptionIndex&&
oa===p.NEWSSTAND);};








function ja(ma){
return ma.commenterIsFOF!==undefined&&
ma.userIsMinor!==undefined&&
ma.reportLink!==undefined;}
l=babelHelpers.inherits

(ka,c('React').Component);m=l&&l.prototype;ka.



































getStores=function(){
return [c('UFIAcceptedAnswerStore')];};


ka.

calculateState=function(ma,na){
var oa=na.comment,pa=na.feedback,
qa=c('UFIAcceptedAnswerStore').get
(oa.ftentidentifier,
pa.acceptedanswer),

ra=qa.id==oa.id;
return babelHelpers['extends']({},
ma,
{isAcceptedAnswer:ra});};



function ka(ma){
m.constructor.call(this,ma);la.call(this);
var na=ma.comment;

this.state=
{isHighlighting:na.highlightcomment,
wasHighlighted:na.highlightcomment,
markedAsSpamHere:false,
isAcceptedAnswer:false,
isInlinePageDeleted:false,
isInlineBanned:false,
loggedLiveUpdate:false,
hideConstituentTitleNUXVisible:true,
showBody:false};}

ka.prototype.

























































































































$UFIComment_createRemoveReportMenuData=function(){
return [z,aa];};
ka.prototype.

$UFIComment_createEditDeleteMenuData=function(){


return [{testid:u,
value:q.edit,
label:j._(["Edit...","9658761bd167eec3326e5fc594aec29d"])},





ca];};

ka.prototype.

$UFIComment_onSeeTranslation=function(){
this.setState({showBody:!c('UFIConfig').shouldTranslationsReplaceContent});
if(!this.props.comment.translationdata)
this.context.dispatch
(c('UFICommentAction').translate
(this.props.contextArgs,
this.props.comment,
c('TranslationTrigger').SEE_TRANSLATION));};



ka.prototype.

$UFIComment_renderCloseButton=function(){
var ma=this.props.comment,

na=null,
oa=null,
pa=null,
qa=c('UFICommentMenu.react').MenuType.CLOSE,
ra=ma.canembed&&c('UFIConfig').showCommentEmbedOption,
sa=ma.canEditConstituentTitle,
ta=ma.constituentTitle;

if(ma.canremove&&!this.props.hideAsSpamForPageAdmin){
if(this.props.viewerIsAuthor&&ma.canedit){

pa=ra?j._(["Edit, delete or embed this","28d04e4e6772cc5a9cf0e832966c6773"]):j._(["Edit or delete this","07bf7cae869e2e90797fe6a49ea2b537"]);








qa=c('UFICommentMenu.react').MenuType.EDIT;

if(sa){
if(ta){
oa=[ea];}else 

oa=[da];

oa=oa.concat(this.$UFIComment_createEditDeleteMenuData());}else 

oa=this.$UFIComment_createEditDeleteMenuData();}else

if(this.props.showRemoveReportMenu){

pa=ra?j._(["Remove, report or embed this","b0e6a3e5ae40265c3f3ccb81827416ad"]):j._(["Remove or report this","41690759e70484cb7bcfa13e837d7649"]);








oa=this.$UFIComment_createRemoveReportMenuData();}else
if(this.props.feedback.customcommentactionlinks){
pa=ra?j._(["Remove this","1abd4f7c9fb0d6df15127ad744165484"]):j._(["Remove or embed this","ccd0297d10d402e6eea6348cb5a5309c"]);





oa=[z];
qa=c('UFICommentMenu.react').MenuType.EDIT;}else{


pa=ra?j._(["Remove or embed this","ccd0297d10d402e6eea6348cb5a5309c"]):j._(["Remove this","1abd4f7c9fb0d6df15127ad744165484"]);





if(!ra){
na=this.$UFIComment_onRemove;}else 

oa=[ca];}}else


if(this.props.feedback.customcommentactionlinks){
pa=ra?j._(["Hide or embed this","137d339fb28ecb64391d148e49bf3774"]):j._(["Hide this","f3441416c8de4628e964561a83a5c4bb"]);





oa=[aa];
qa=c('UFICommentMenu.react').MenuType.EDIT;}else
if(ma.canreport){

pa=ra?j._(["Hide or embed this","137d339fb28ecb64391d148e49bf3774"]):j._(["Hide this","f3441416c8de4628e964561a83a5c4bb"]);





if(!ra){
na=this.$UFIComment_onHideAsSpam;}else 

oa=[aa];}



if(ra){

oa.length>0||k(0,
'MenuData has at least one action when a comment is embeddable');

oa.push(ba);
qa=c('UFICommentMenu.react').MenuType.CHEVRON;}


if(this.props.feedback.customcommentactionlinks)
for(var ua in this.props.feedback.customcommentactionlinks){
var va=this.props.feedback.customcommentactionlinks[ua];

if(!va.showInMenu)
continue;


oa.push
({testid:va.type,
value:va.type,
label:va.title});}




var wa=null;

if(sa&&
!ta&&
c('UFIConfig').shouldShowHideConstituentTitleNUX)

if(!fa){
wa=this.$UFIComment_renderNUX();
c('UFIConfig').shouldShowHideConstituentTitleNUX=false;}



var xa="UFICommentCloseButton"+


(na===null&&oa===null?' '+"hdn":'')+
(wa!==null?' '+"UFICommentCloseButtonNux":''),


ya=null,
za=null;
if(this.props.contextArgs.viewas){
ya='/ajax/profile/link_disabled_in_viewas.php';
za='dialog';
na=null;}



return (c('React').createElement('span',
{'data-interaction-root-id':"_36rj"},
c('React').createElement(c('UFICommentMenu.react'),
{ajaxify:ya,
'aria-label':pa,
className:xa,
'data-testid':r,
onClick:na,
rel:za,
tooltip:pa,
menuData:oa,
menuType:qa,
onAction:this.$UFIComment_onAction,
ref:'comment_menu'}),
wa));};


ka.prototype.









$UFIComment_renderFakeCloseButton=function(){
if(c('UFIConfig').hasNoFakeCommentClose)
return null;


return (c('React').createElement(c('XUICloseButton.react'),
{className:'UFICommentCloseButtonFake',
tabIndex:'-1'}));};


ka.prototype.











$UFIComment_renderNUX=function(){

return (c('React').createElement(c('BootloadedComponent.react'),
{bootloadLoader:c('JSResource')('XUIAmbientNUX.react').__setRef('UFIComment.react'),
bootloadPlaceholder:c('React').createElement('div',null),
contextRef:function(){return this.refs.comment_menu;}.bind(this),
shown:this.state.hideConstituentTitleNUXVisible,
position:'above',
alignment:'right',
onCloseButtonClick:this.$UFIComment_onNUXCloseButtonClick},j._(["Your district is hidden on all comments. Edit any comment to your representatives to show it again.","39696dd687bb758c79568162dc844c56"])));};






ka.prototype.

componentDidMount=function(){var ma,na=this;
if(this.state.isHighlighting)(function(){
var oa=c('ReactDOM').findDOMNode(na),
pa=
parseInt(na.props.comment.scrolltopoffset||0,10);

c('Bootloader').loadModules
(["UFIScrollHighlight"],
function(qa){



setTimeout
(qa.actOn.bind(null,oa,pa),
0);},

'UFIComment.react');

na.setState({isHighlighting:false});})();



if(this.props.comment.fbid)
c('UFISharedDispatcher').dispatch
(c('UFICommentAction').mounted
(this.props.contextArgs,

{comment:this.props.comment,
isLivePinnedComment:this.props.isLivePinnedComment}));};




ka.prototype.

componentWillUnmount=function(){
if(this.props.comment.fbid)
c('UFISharedDispatcher').dispatch
(c('UFICommentAction').unmounted
(this.props.contextArgs,

{comment:this.props.comment,
isLivePinnedComment:this.props.isLivePinnedComment}));};




ka.prototype.















shouldComponentUpdate=function(ma,na){
var oa=this.props,
pa=this.state;



return (ma.comment!==oa.comment||
ma.showReplyLink!==oa.showReplyLink||
ma.isFirst!==oa.isFirst||
ma.isLast!==oa.isLast||
ma.isFirstCommentComponent!==oa.isFirstCommentComponent||
ma.isLastCommentComponent!==oa.isLastCommentComponent||
ma.isFirstComponent!==oa.isFirstComponent||
ma.isLastComponent!==oa.isLastComponent||
ma.isFeatured!==oa.isFeatured||
ma.hasPartialBorder!==oa.hasPartialBorder||
ma.showTranslation!==oa.showTranslation||
na.wasHighlighted!==pa.wasHighlighted||
na.isHighlighting!==pa.isHighlighting||
na.markedAsSpamHere!==pa.markedAsSpamHere||
na.isInlinePageDeleted!==pa.isInlinePageDeleted||
na.isInlineBanned!==pa.isInlineBanned||
na.hideConstituentTitleNUXVisible!==
pa.hideConstituentTitleNUXVisible||
na.showBody!==pa.showBody);};

ka.prototype.

$UFIComment_onCommentReportIgnoreClick=function(ma,na){
var oa=c('XUnifiedQueueReportedCommentsController').getURIBuilder().
setInt('groupid',na).
getURI();
new (c('AsyncRequest'))(oa).setData
({commentid:ma.fbid,
uid:ma.author,
keep:true,
block:false}).
send();};
ka.prototype.

$UFIComment_onCommentReportDeleteClick=function(ma,na){
var oa=c('XUnifiedQueueReportedCommentsController').getURIBuilder().
setInt('groupid',na).
getURI();
new (c('AsyncRequest'))(oa).setData
({commentid:ma.fbid,
uid:ma.author,
keep:false,
block:false}).
send();};
ka.prototype.

$UFIComment_onCommentReportDeleteAndBlockClick=function(ma,na){
var oa=c('XUnifiedQueueReportedCommentsController').getURIBuilder().
setInt('groupid',na).
getURI();
new (c('AsyncRequest'))(oa).setData
({commentid:ma.fbid,
uid:ma.author,
keep:false,
block:true}).
send();};
ka.prototype.






render=function(){var ma=




this.props,na=ma.contextArgs,oa=ma.comment,pa=ma.feedback,
qa=oa.status===o.DELETED,
ra=oa.status===o.LIVE_DELETED,
sa=oa.status===o.SPAM_DISPLAY;

if(qa)
return null;


var ta=this.state.markedAsSpamHere,
ua=this.state.isInlinePageDeleted,
va=this.props.hideAsSpamForPageAdmin,
wa=this.state.isInlineBanned;

if(oa.islive&&!this.state.loggedLiveUpdate){
new (c('LiveWWWFeedbackTypedLogger'))().
setEvent('update_view').
setUpdateType('comment').
setCommentID(oa.id).
log();
this.setState({loggedLiveUpdate:true});}





var xa=ja(oa),


ya=!oa.status&&(oa.isunseen||oa.islocal);


if(!oa.status&&pa.lastseentime){
var za=oa.originalTimestamp||oa.timestamp.time;



ya=ya||za>pa.lastseentime;}




var ab=na.markedcomments;
if(ab&&ab[oa.legacyid])
ya=true;




if(this.props.orderingMode===
c('WebCommentViewOption').LIVE_STREAMING||
this.props.isLivePinnedComment)

ya=false;


var bb="UFIRow"+

(this.props.isFirst?' '+"_48ph":'')+
(this.props.isLast?' '+"UFILastComment":'')+

(this.props.isFirstCommentComponent?' '+"_48pi":'')+
(this.props.isLastCommentComponent?' '+"UFILastCommentComponent":'')+
(this.props.isFirstComponent?' '+"_4204":'')+
(this.props.isLastComponent?' '+"_2o9m":'')+
(this.state.isAcceptedAnswer?' '+"UFIAcceptedAnswer":'')+
(this.props.isLivePinnedComment?' '+"UFILivePinnedComment":''),


cb=j._(["Comment","523dcf4007f5197df65b31de9b745957"]),

db=j._(["Comment reply","e761e6252dc08f43f2da82e18011693e"]),

eb=oa.parentcommentid?db:cb;

if(xa)
if(ga){
var fb=null,
gb=null,



hb=null,
ib=null;

if(va){
hb=wa?
this.$UFIComment_onUndoInlineBan:
this.$UFIComment_onInlineBan;

if(ua){
fb=j._(["You've deleted this comment so no one can see it.","b1c055479a8c922be6877526f0900158"]);}else




if(ta){


fb=j._(["Now this is only visible to the person who wrote it and their friends.","3f6af20c5b5905259bdf0ddab781c447"]);




ib=this.$UFIComment_onDeleteSpam;
gb=this.$UFIComment_onMarkAsNotSpam;}}else

if(ta){


fb=j._(["This comment has been hidden.","6733b352a4cddee3af279feca9d00b1b"]);




ib=this.$UFIComment_onDeleteSpam;
gb=this.$UFIComment_onMarkAsNotSpam;}




if(fb)

return (c('React').createElement('div',{className:bb,
role:'article',
'aria-label':eb},
c('React').createElement(ga,
{notice:fb,
comment:this.props.comment,
authorProfiles:this.props.authorProfiles,
onUndo:gb,
onBanAction:hb,
onDeleteAction:ib,
isInlineBanned:wa,
isInlinePageDeleted:ua,
hideAsSpamForPageAdmin:va,
pageID:this.props.feedback.ownerid})));}else 





c('Bootloader').loadModules(["UFICommentRemovalControls.react"],
function(mb){

ga=mb;


setTimeout(function(){
this.forceUpdate();}.
bind(this));}.
bind(this),'UFIComment.react');






var jb=c('joinClasses')
(bb,"UFIComment"+


(ha(oa)?' '+"UFICommentFailed":'')+
(ia
(oa,
na.location)?' '+"UFITipJarComment":'')+

(ra||sa?' '+"UFITranslucentComment":'')+
(this.state.isHighlighting?' '+"highlightComment":'')+(' '+"_4oep")+

(this.props.hasPartialBorder?' '+"UFIPartialBorder":'')+
(ya?' '+"UFIUnseenItem":'')+
(oa.isAnnouncement?' '+"UFICommentLiveVideoAnnouncement":'')),



kb=this.renderComment(),

lb=na.mayLogVPVs&&
this.props.orderingMode===c('WebCommentViewOption').FILTERED;


if(!oa.islocal&&!oa.isAnnouncement){
if(lb)
kb=
c('React').createElement(c('UFICommentVPVTracker.react'),
{comment:oa,
contextArgs:na},
kb);




kb=
c('React').createElement(c('UFICommentVPVDTracker.react'),
{renderedComment:
{comment:oa,
isLivePinnedComment:this.props.isLivePinnedComment},

contextArgs:this.props.contextArgs},
kb);}





return (c('React').createElement('div',{className:jb,
role:'article',
'aria-label':eb,
'data-testid':
this.state.wasHighlighted?
s:
null,

'data-ft':this.props['data-ft']},
kb));};


ka.prototype.

renderComment=function(){
var ma=this.props,
na=ma.comment,oa=ma.permalink,pa=ma.feedback,
qa=na.body?na.body.text:'',
ra=c('UFICommentUtils').shallowCopyRanges
(na.body&&na.body.ranges),

sa=ma.authorProfiles[na.author],
ta=na.status===o.SPAM_DISPLAY,
ua=na.status===o.LIVE_DELETED,
va=!(ta||ua),










wa=
pa.canremoveall||na.hiddenbyviewer;





qa=c('UFICommentUtils').getCommentTextWithTruncatedURIs
(ra,
qa);



var xa=null,
ya=null;

if(!ma.isLocallyComposed&&
!this.state.wasHighlighted){

ya=c('UFIConstants').commentTruncationLength;
xa=c('UFIConstants').commentTruncationMaxLines;}


var za=c('TrackingNodes').getTrackingInfo
(c('TrackingNodes').types.SMALL_ACTOR_PHOTO),


ab=false;
if(this.props.featuredCommentIDs&&
this.props.featuredCommentIDs.indexOf(this.props.comment.fbid)>-1)
ab=true;


var bb=null;
if(na.body&&na.body.markdown_enabled&&na.body.markup){
if(c('HTML').isHTML(na.body.markup)){
bb=
c('React').createElement('span',{dangerouslySetInnerHTML:na.body.markup});}else 

bb=
c('React').createElement(c('DOMContainer.react'),null,
na.body.markup);}else 



bb=
c('React').createElement(c('UFICommentBody.react'),
{socialContext:na.socialcontext,
commentText:qa,
commentRanges:ra,
groupOrEventID:pa.grouporeventid,
maxLength:ya,
maxLines:xa,
markViewerHasInteracted:this.props.markViewerHasInteracted,
shouldExpand:ab,
ufiInstanceID:this.props.contextArgs.instanceid,
commentFBID:na.fbid,
isLiveStreaming:ma.contextArgs.islivestreaming});



var cb=na.translationdata,
db=
cb&&
cb.translatedText&&
cb.translatedText.text,
eb=
!db||
this.state.showBody||
cb.trigger===
c('TranslationTrigger').LOGGED_OUT_AUTO_TRANSLATION,

fb=
this.props.showTranslation&&!cb||
!!cb&&
(!c('UFIConfig').shouldTranslationsReplaceContent||
!eb||
!db||
cb.trigger===
c('TranslationTrigger').LOGGED_OUT_AUTO_TRANSLATION),


gb=void 0;
if(na.isAnnouncement){
gb=
c('React').createElement('div',{className:"UFICommentLiveVideoAnnouncementBody"},
c('React').createElement(c('InlineBlock.react'),
{alignv:'middle',
className:"UFICommentLiveVideoAnnouncementMessage",
height:32},
bb),

c('React').createElement(c('BootloadedComponent.react'),
{bootloadLoader:c('JSResource')
('UFILiveVideoAnnouncementCTAContainer.react').__setRef('UFIComment.react'),

bootloadPlaceholder:c('React').createElement('span',null),
comment:na}));}else 



gb=
c('React').createElement('span',null,
eb?bb:null,
na.istranslatable||!!cb?
c('React').createElement(c('UFICommentTranslation.react'),
{translationData:cb,
showTranslation:fb,
isShowingOriginal:eb,
shouldExpand:ab,
onSeeTranslation:function(){return this.$UFIComment_onSeeTranslation();}.bind(this),
onSeeOriginal:function(){return this.setState({showBody:true});}.bind(this)}):

null);




var hb=void 0;


if(!ma.contextArgs.viewas&&!na.isAnnouncement){
if(!sa)
throw new Error
('Got unexpected null author on comment '+JSON.stringify(na)+
' with profiles '+JSON.stringify(ma.authorProfiles));


hb=
c('HovercardLink').constructEndpointWithGroupLocationAndExtraParams
(sa,
pa.grouporeventid,
c('UserHovercardLocation').UFI,
na.isauthorweakreference,
{on_public_ufi:pa.ispublic}).
toString();}

var ib=ma.contextArgs.disableCommentAuthorLink,

jb=na.isAnnouncement?
null:
c('React').createElement(c('UFICommentAuthorName.react'),
{author:sa,
authorProfiles:ma.authorProfiles,
disableAuthorLink:ib,
showHovercard:!!hb,
isAuthorWeakReference:na.isauthorweakreference,
isAuthorNonCoworker:na.isauthornoncoworker,
memberBioBadgeURI:na.memberbiobadgeuri,
groupMemberTag:na.groupmembertag,
isAdminViewer:ma.feedback.isadminviewer,
focusOnMount:ma.focusOnMount,
groupOrEventID:pa.grouporeventid,
isFeatured:ma.isFeatured,
socialContext:na.socialcontext,
isPublic:pa.ispublic,
constituentTitle:na.constituentTitle}),

kb=null;

if(ma.contextArgs.isLiveVOD||

!ma.contextArgs.islivestreaming&&
ma.contextArgs.showVODCommentTimestamps&&
ma.comment.videoTimeOffset)


kb=
c('React').createElement(c('UFILiveCommentTimestamp.react'),
{comment:na,
contextArgs:ma.contextArgs});



var lb=null;
if(na.photo_comment_status)
lb=
c('React').createElement('div',{className:"_50f8"},
na.photo_comment_status);



var mb=null;
if(na.sticker_attachment_status)
mb=
c('React').createElement('div',{className:"_50f8"},
na.sticker_attachment_status);



var nb=c('React').createElement(c('UFICommentAttachment.react'),{comment:ma.comment}),

ob=void 0;
if(na.isAnnouncement){
ob=
c('React').createElement(c('UFICommentLiveVideoAnnouncementImage.react'),
{accentColor:na.accentColor,
glyphName:na.glyphName,
image:na.image});}else{


ob=c('React').createElement(c('UFIActorIconContainer.react'),
{actorID:na.author});


if(sa.uri||sa.isBusinessPersona)
ob=
c('React').createElement('a',
{'data-ft':za,
'data-hovercard':hb,
href:
c('UFICommentUtils').annotateProfileURIIfPublic
(pa.ispublic,sa.uri)},


ob);}





var pb=null;
if(this.state.isAcceptedAnswer){
pb=
c('React').createElement('span',{className:"UFIAcceptedAnswerLabel"},j._(["Accepted Answer","3082558ca2f3b6f31343f66c678a2448"]));}else





if(this.props.isLivePinnedComment){
var qb=j._(["Pinned Comment","8842bba5f963b56afe045e350b48da2c"]);




pb=
c('React').createElement('span',{className:"UFILivePinnedCommentLabel"},
c('React').createElement(c('Image.react'),
{className:'UFILivePinnedCommentGlyph',
src:h("117058")}),

qb);}



var rb=na.tipOptionIndex?
c('React').createElement(c('VideoTipJarCommentBackground.react'),{tipOptionIndex:na.tipOptionIndex}):
va?this.$UFIComment_renderFakeCloseButton():null,

sb=na.isReported?
c('React').createElement('div',null,
c('React').createElement(c('XUIButton.react'),
{label:j._(["Ignore","fbf3293f9ff22b7ec5ba434af90ebae4"]),
type:'button',
onClick:function(){return this.$UFIComment_onCommentReportIgnoreClick
(na,
pa.grouporeventid);}.bind(this)}),

c('React').createElement(c('XUIButton.react'),
{label:j._(["Delete","129a5588007293e7f34126253d786c26"]),
type:'button',
onClick:function(){return this.$UFIComment_onCommentReportDeleteClick
(na,
pa.grouporeventid);}.bind(this)}),

c('React').createElement(c('XUIButton.react'),
{label:j._(["Delete and Block","c6d6d4c56d897b1161cccb06f35190f0"]),



type:'button',
onClick:function(){return this.$UFIComment_onCommentReportDeleteAndBlockClick
(na,
pa.grouporeventid);}.bind(this)})):


null,

tb=na.isAnnouncement?
null:
c('React').createElement(c('UFICommentActions.react'),
{comment:na,
feedback:pa,
parentCanComment:ma.parentCanComment,
permalink:oa,
viewerCanMarkNotSpam:wa,
showPermalink:ma.showPermalink,
showReplyLink:ma.showReplyLink,
contextArgs:ma.contextArgs,
markedAsSpamHere:this.state.markedAsSpamHere,
hideAsSpamForPageAdmin:ma.hideAsSpamForPageAdmin,
orderingMode:ma.orderingMode});


return (c('React').createElement('div',null,
pb,
c('React').createElement(c('UFIImageBlock.react'),{spacing:'medium'},
ob,
c('React').createElement('div',{className:'UFICommentContentBlock'},
c('React').createElement('div',{className:'UFICommentContent'},
jb,
kb,
gb,
nb),

lb,
mb,
tb,
sb,
va?this.$UFIComment_renderCloseButton():null),

rb)));};



ka.propTypes={authorProfiles:n.object.isRequired,comment:n.object.isRequired,contextArgs:n.object.isRequired,feedback:n.object.isRequired,'data-ft':n.string,featuredCommentIDs:n.array,focusOnMount:n.bool,hasPartialBorder:n.bool,hideAsSpamForPageAdmin:n.bool,isFeatured:n.bool,isFirst:n.bool,isFirstCommentComponent:n.bool,isFirstComponent:n.bool,isLast:n.bool,isLastCommentComponent:n.bool,isLastComponent:n.bool,isLivePinnedComment:n.bool,isLocallyComposed:n.bool,parentCanComment:n.bool,permalink:n.string,showPermalink:n.bool,showRemoveReportMenu:n.bool,showReplyLink:n.bool,viewerIsAuthor:n.bool,orderingMode:n.string,markViewerHasInteracted:n.func,showTranslation:n.bool};ka.contextTypes={dispatch:n.func};var la=function ma(){this.$UFIComment_onHideAsSpam=function(event){this.context.dispatch(c('UFICommentAction').markAsSpam(this.props.contextArgs,this.props.comment,event));this.setState({markedAsSpamHere:true});}.bind(this);this.$UFIComment_onMarkAsNotSpam=function(event){this.context.dispatch(c('UFICommentAction').markAsNotSpam(this.props.contextArgs,this.props.comment,event));this.setState({markedAsSpamHere:false});}.bind(this);this.$UFIComment_onDeleteSpam=function(event){this.context.dispatch(c('UFICommentAction').remove(this.props.contextArgs,this.props.comment,event.target,function(){return this.setState({isInlinePageDeleted:true});}.bind(this)));}.bind(this);this.$UFIComment_onRemove=function(event){this.context.dispatch(c('UFICommentAction').remove(this.props.contextArgs,this.props.comment,event.target,c('emptyFunction')));}.bind(this);this.$UFIComment_onInlineBan=function(event){this.context.dispatch(c('UFICommentAction').inlineBan(this.props.contextArgs,this.props.comment,event,this.props.feedback.ownerid));this.setState({isInlineBanned:true});}.bind(this);this.$UFIComment_onUndoInlineBan=function(event){this.context.dispatch(c('UFICommentAction').undoInlineBan(this.props.contextArgs,this.props.comment,event,this.props.feedback.ownerid));this.setState({isInlineBanned:false});}.bind(this);this.$UFIComment_onAction=function(event,na){var oa=na.item,pa=oa.getValue();setTimeout(function(){var qa=this.props,ra=qa.comment,sa=qa.contextArgs,ta=qa.feedback;if(pa===q.remove){this.$UFIComment_onRemove(event);}else if(pa===q.edit){this.context.dispatch(c('UFICommentAction').edit(sa,ra));}else if(pa===q.hide){this.$UFIComment_onHideAsSpam(event);}else if(pa===q.embed){this.context.dispatch(c('UFICommentAction').embed(sa,ra));}else if(pa===q.showConstituentTitle){this.context.dispatch(c('UFICommentAction').showConstituentTitle(sa,ra));}else if(pa===q.hideConstituentTitle){this.context.dispatch(c('UFICommentAction').hideConstituentTitle(sa,ra));}else c('UFICentralUpdates').inform(pa,{comment:ra,feedback:ta});}.bind(this),0);}.bind(this);this.$UFIComment_onNUXCloseButtonClick=function(){fa=true;this.setState({hideConstituentTitleNUXVisible:false});var na=c('XFeedNUXSaveSeenStateController').getURIBuilder().setString('key','hide_constituent_title_comments').setBool('seen',true).getURI();new (c('AsyncRequest'))(na).send();}.bind(this);};


f.exports=c('FluxContainer').create(ka,{withProps:true});}),null);

/** js/components/UFI/UFIContainer.react.js */







__d('UFIContainer.react',['cx','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,





k=c('React').PropTypes;i=babelHelpers.inherits





(l,c('React').Component);j=i&&i.prototype;l.prototype.







render=function(){

return (c('React').createElement('div',{className:
(!this.props.isReplyList?"UFIList":'')+
(this.props.isAcceptedAnswerReply?' '+"UFIAcceptedAnswerReply":'')+
(this.props.isReplyList?' '+"UFIReplyList":'')+
(this.props.isParentLiveDeleted?' '+"UFITranslucentReplyList":'')+

(this.props.isFirstCommentComponent?' '+"_48pi":'')+
(this.props.isLastCommentComponent?' '+"UFILastCommentComponent":'')+
(this.props.isFirstComponent?' '+"_4204":'')+
(this.props.isLastComponent?' '+"_2o9m":'')+


(this.props.shouldHide?' '+"hidden_elem":'')},

this.props.children));};


function l(){i.apply(this,arguments);}l.propTypes={isParentLiveDeleted:k.bool,isReplyList:k.bool,shouldHide:k.bool,isAcceptedAnswerReply:k.bool};


f.exports=l;}),null);

/** js/components/UFI/UFIShareNowMenuBootloader.react.js */





__d('UFIShareNowMenuBootloader.react',['BootloadedComponent.react','JSResource','React','UFIShareLink.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i,






j='ufi_share_link_placeholder',
k='ufi_share_link_loaded';h=babelHelpers.inherits















(l,c('React').Component);i=h&&h.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=i.constructor).call.apply(m,[this].concat(p)),this.
state=
{openOnInit:false,
focusOnInit:false,
interacted:false},n;}l.prototype.


render=function(){var m=




this.state,n=m.openOnInit,o=m.focusOnInit,p=m.interacted,q=







this.props,r=q.endpoint,s=q.endpointData,t=q.onShow,u=q.onHide,v=q.openOnInitOverride,

w=
c('React').createElement(c('UFIShareLink.react'),
{href:'#',
'data-testid':j,
onClick:function(){return this.setState
({interacted:true,
openOnInit:true});}.bind(this),

onFocus:function(){return this.setState
({interacted:true,
focusOnInit:true});}.bind(this),

onMouseOver:function(){return this.setState
({openOnInit:false,
focusOnInit:false,
interacted:true});}.bind(this)});




if(p||v)

return (c('React').createElement(c('BootloadedComponent.react'),
{bootloadLoader:c('JSResource')('UFIShareNowMenu.react').__setRef('UFIShareNowMenuBootloader.react'),
bootloadPlaceholder:w,
endpoint:r,
endpointData:s,
onShow:t,
onHide:u,
openOnInit:n||v,
focusOnInit:o,
testID:k}));




return w;};



f.exports=l;}),null);

/** js/modules/MultiBootstrapDataSource.js */





__d('MultiBootstrapDataSource',['DataSource'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits



(j,c('DataSource'));i=h&&h.prototype;
function j(k){'use strict';
i.constructor.call(this,k);
this._bootstrapEndpoints=k.bootstrapEndpoints;}
j.prototype.

bootstrapWithoutToken=function(){'use strict';
for(var k=0;k<this._bootstrapEndpoints.length;k++)
this.fetch
(this._bootstrapEndpoints[k].endpoint,
this._bootstrapEndpoints[k].data||{},
{bootstrap:true});};





f.exports=j;}),null);

/** js/modules/linkifyEntityRange.js */





__d('linkifyEntityRange',['Link.react','React'],(function a(b,c,d,e,f,g){




function h(i,j){
var k=(j.entity||{}).url;
if(!k)
return c('React').createElement('span',null,i);



return (c('React').createElement(c('Link.react'),{href:k,target:'_blank'},
i));}




f.exports=h;}),null);

/** shared/graphql_subscriptions/BaseGraphQLSubscription.js */





__d('BaseGraphQLSubscription',['Banzai','BanzaiLogger','ChannelClientID','CurrentUser','CurrentLocale','RTISubscriptionManager'],(function a(b,c,d,e,f,g){








var h=10000,







i=

{subscribe:function j(k,l){
var m=
{transformContext:JSON.stringify(this._getTransformContext(k))},

n=this._getQueryParameters(k);

this._logEvent('client_subscribe',n);

return c('RTISubscriptionManager').subscribe
(this._getTopic(k),
function(o){
this._logEvent('receivepayload',n);
l(JSON.parse(o.payload));}.
bind(this),
m,
null,
function(){
this._logEvent('client_unsubscribe',n);}.
bind(this));},



_getTransformContext:function j(k){

var l=155160167952447;


return {viewerID:c('CurrentUser').getID(),
appID:l,
locale:c('CurrentLocale').get(),
queryID:this._getQueryID(),
serializedQueryParameters:JSON.stringify(this._getQueryParameters(k))};},



_logEvent:function j(k,l){
if(c('Banzai').isEnabled('gqls_web_logging')){






var m=
c('CurrentUser').isEmployee()?1:h;
if(Math.random()*m<1)
c('BanzaiLogger').log
('GraphQLSubscriptionsLoggerConfig',

{clienttime:Date.now()/1000,
client_sample_weight:m,
event:k,
mechanism:'skywalker',
query_id:parseInt(this._getQueryID(),10),
query_params:l,
session_id:c('ChannelClientID').getID(),
subscription_call:this._getSubscriptionCallName()});}}};








f.exports=i;}),null);

/** shared/webgraphql/WebGraphQLSubscriptionHelper.js */





__d('WebGraphQLSubscriptionHelper',[],(function a(b,c,d,e,f,g){

'use strict';



f.exports=
{getExports:function h(i){

var j=i.docID,k=i.queryID;

return {getDocID:function l(){return j;},
getLegacyQueryID:function l(){return k;}};}};}),

null);
