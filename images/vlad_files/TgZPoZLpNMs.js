if (self.CavalryLogger) { CavalryLogger.start_js(["NZixt"]); }

/** __static_js_modules__/commentpostedlivestate.js */




__d("CommentPostedLiveState",[],(function a(b,c,d,e,f,g){

f.exports={LIVE:"Live",ON_DEMAND:"OnDemand"};}),

null);

/** __static_js_modules__/ufistreamingstatetype.js */




__d("UFIStreamingStateType",[],(function a(b,c,d,e,f,g){

f.exports={LIVE:"live",ON_DEMAND:"on_demand"};}),

null);

/** js/logging/generated/UFICommentTypedLogger.js */





__d('UFICommentTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:UFICommentLoggerConfig',this.$UFICommentTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:UFICommentLoggerConfig',this.$UFICommentTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$UFICommentTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$UFICommentTypedLogger_data=babelHelpers['extends']({},
this.$UFICommentTypedLogger_data,
j);

return this;};
h.prototype.




setDuration=function(j){
this.$UFICommentTypedLogger_data.duration=j;
return this;};
h.prototype.




setEvent=function(j){
this.$UFICommentTypedLogger_data.event=j;
return this;};
h.prototype.




setHasPhoto=function(j){
this.$UFICommentTypedLogger_data.has_photo=j;
return this;};
h.prototype.




setHasSticker=function(j){
this.$UFICommentTypedLogger_data.has_sticker=j;
return this;};
h.prototype.




setIsReply=function(j){
this.$UFICommentTypedLogger_data.is_reply=j;
return this;};
h.prototype.




setRequestLength=function(j){
this.$UFICommentTypedLogger_data.request_length=j;
return this;};
h.prototype.




setVC=function(j){
this.$UFICommentTypedLogger_data.vc=j;
return this;};






















var i=
{duration:true,
event:true,
has_photo:true,
has_sticker:true,
is_reply:true,
request_length:true,
vc:true};


f.exports=h;}),null);

/** js/clientufi/UFICommentLogger.js */






__d('UFICommentLogger',['UFICommentTypedLogger'],(function a(b,c,d,e,f,g){

'use strict';












function h(){
this.$UFICommentLogger_fetchCommentMap={};
this.$UFICommentLogger_newCommentMap={};}
h.prototype.

logNewCommentPost=
function(i,
j,
k){

this.$UFICommentLogger_newCommentMap[i]=babelHelpers['extends']({timestamp:j},k);
new (c('UFICommentTypedLogger'))().
setEvent('new_comment_post').
setHasPhoto(k.has_photo).
setHasSticker(k.has_sticker).
setIsReply(k.is_reply).
log();};
h.prototype.

logNewCommentReceived=
function(i,
j){

var k=this.$UFICommentLogger_newCommentMap[i];
if(k){
var l=0;
if(j&&k.timestamp)
l=j-k.timestamp;

new (c('UFICommentTypedLogger'))().
setEvent('new_comment_received').
setDuration(l).
setHasPhoto(k.has_photo).
setHasSticker(k.has_sticker).
setIsReply(k.is_reply).
log();}

delete this.$UFICommentLogger_newCommentMap[i];};
h.prototype.

logCommentFetch=
function(i,
j,
k){

var l=babelHelpers['extends']({timestamp:j},k);
if(this.$UFICommentLogger_fetchCommentMap[i]===undefined){
this.$UFICommentLogger_fetchCommentMap[i]=[l];}else 

this.$UFICommentLogger_fetchCommentMap[i].push(l);

new (c('UFICommentTypedLogger'))().
setEvent('fetch_comment').
setIsReply(k.is_reply).
setRequestLength(k.request_length).
log();};
h.prototype.

logCommentFetchReceived=
function(i,
j){

if(this.$UFICommentLogger_fetchCommentMap[i]){
var k=this.$UFICommentLogger_fetchCommentMap[i].shift(),
l=0;
if(j&&k.timestamp)
l=j-k.timestamp;

new (c('UFICommentTypedLogger'))().
setEvent('fetch_comment_received').
setDuration(l).
setIsReply(k.is_reply).
setRequestLength(k.request_length).
log();
if(this.$UFICommentLogger_fetchCommentMap[i].length===0)
delete this.$UFICommentLogger_fetchCommentMap[i];}};





f.exports=new h();}),null);

/** js/clientufi/stores/UFIAcceptedAnswerStore.js */






__d('UFIAcceptedAnswerStore',['FluxReduceStore','UFIDispatcherBase','UFIStoryActionType'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits


















(j,c('FluxReduceStore'));i=h&&h.prototype;j.prototype.
getInitialState=function(){
return {};};
j.prototype.

reduce=function(k,l){var m;
switch(l.type){
case c('UFIStoryActionType').CHANGE_ACCEPTED_ANSWER:
return babelHelpers['extends']({},
k,(m={},m[
l.comment.ftentidentifier]=l.doAccept?
{type:'Accepted',id:l.comment.id}:
{type:'NoneAccepted'},m));


default:return k;}};

j.prototype.

get=
function(k,
l){

var m=this.getState()[k];
if(m)
return m;


return l?
{type:'Accepted',id:l}:
{type:'NoneAccepted'};};
function j(){h.apply(this,arguments);}


f.exports=new j(c('UFIDispatcherBase'));}),null);

/** js/clientufi/stores/UFICommentEditIDStore.js */






__d('UFICommentEditIDStore',['FluxReduceStore','UFIAddCommentActionType','UFICentralUpdates','UFICommentActionType','UFIDispatcherBase'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits


















(j,c('FluxReduceStore'));i=h&&h.prototype;

function j(k){
i.constructor.call(this,k);

c('UFICentralUpdates').subscribe('actor-changed',function(l,m){







c('UFIDispatcherBase').dispatch
({type:'PRIVATE_ACTOR_CHANGED',
instanceID:true,
ftentidentifier:true});});}


j.prototype.

getInitialState=function(){
return {};};
j.prototype.

getForInstance=function(k){
return this.getState()[k]||null;};
j.prototype.

reduce=
function(k,
l){
var m;
switch(l.type){
case 'PRIVATE_ACTOR_CHANGED':
return {};

case c('UFIAddCommentActionType').CANCEL:
case c('UFIAddCommentActionType').SUBMIT_EDIT:

var n=

k[l.instanceID],o=babelHelpers.objectWithoutProperties(k,[l.instanceID]);
return o;

case c('UFICommentActionType').EDIT:
return babelHelpers['extends']({},
k,(m={},m[
l.instanceID]=l.comment.id,m));}


return k;};



f.exports=new j(c('UFIDispatcherBase'));}),null);

/** js/clientufi/models/UFIComments.js */






__d('UFIComments',['invariant','ClientIDs','ImmutableObject','LiveWWWFeedbackTypedLogger','UFICentralUpdates','UFIConstants','randomInt'],(function a(b,c,d,e,f,g,h){

'use strict';












var i={},




j={},




k={};

function l(da){
return da in j?j[da]:da;}


function m(da,ea){
da.forEach(function(fa){
var ga=fa.ftentidentifier,
ha=c('UFIConstants').UFIPayloadSourceType,



ia=fa.clientid,
ja=false,
ka=babelHelpers['extends']({},
fa);

if(ia){
delete ka.clientid;
ja=c('ClientIDs').isExistingClientID(ia);
if(ja&&j[ia]){


new (c('LiveWWWFeedbackTypedLogger'))().
setEvent('update_view').
setUpdateType('comment').
setOriginatedLocally(true).
setCommentID(fa.id).
log();
return;}}





if(ea===ha.LIVE_SEND||
ea===c('UFIConstants').UFIPayloadSourceType.STREAMING||
ea===ha.USER_ACTION||
ea===ha.ENDPOINT_ADD_COMMENT||
ea===ha.ENDPOINT_EDIT_COMMENT)
ka.isunseen=true;



if(ea===c('UFIConstants').UFIPayloadSourceType.LIVE_SEND||
ea===c('UFIConstants').UFIPayloadSourceType.STREAMING)

ka.islive=true;


if(ea===ha.ENDPOINT_COMMENT_FETCH||
ea===ha.ENDPOINT_ID_COMMENT_FETCH)
ka.fromfetch=true;



if(ja&&i[ia]){


ka.ufiinstanceid=i[ia].ufiinstanceid;


j[ia]=fa.id;
k[fa.id]=ia;
i[fa.id]=i[ia];
delete i[ia];
c('UFICentralUpdates').didUpdateComment(ia);}



ca.setComment
(fa.id,
new (c('ImmutableObject'))(ka));


c('UFICentralUpdates').didUpdateComment(fa.id);
c('UFICentralUpdates').didUpdateFeedback(ga);});}



function n(da,ea){
for(var fa=0;fa<da.length;fa++){
var ga=da[fa];
switch(ga.actiontype){
case c('UFIConstants').UFIActionType.LIKE_ACTION:




if(ca.getComment(ga.entidentifier))
o
(ga.clientid,
ga.entidentifier,
ga.hasviewerliked,
ga.likecount,
ga.reactiondata,
ea);


break;
case c('UFIConstants').UFIActionType.COMMENT_LIKE:
o
(ga.clientid,
ga.commentid,
ga.viewerliked,
ga.likecount,
ga.reactiondata,
ea);

break;
case c('UFIConstants').UFIActionType.REACTION:



if(ca.getComment(ga.entidentifier))
p(ga.entidentifier,ga);

break;
case c('UFIConstants').UFIActionType.COMMENT_REACTION:
p(ga.commentid,ga);
break;
case c('UFIConstants').UFIActionType.DELETE_COMMENT:
t(ga);
break;
case c('UFIConstants').UFIActionType.LIVE_DELETE_COMMENT:
u(ga);
break;
case c('UFIConstants').UFIActionType.ACCEPT_ANSWER:
v(ga);
break;
case c('UFIConstants').UFIActionType.REMOVE_PREVIEW:
w(ga);
break;
case c('UFIConstants').UFIActionType.COMMENT_SET_SPAM:
x(ga);
break;
case c('UFIConstants').UFIActionType.CONFIRM_COMMENT_REMOVAL:
y(ga);
break;
case c('UFIConstants').UFIActionType.TRANSLATE_COMMENT:
r(ga);
break;
case c('UFIConstants').UFIActionType.COMMENT_LIKECOUNT_UPDATE:
q(ga);
break;
case c('UFIConstants').UFIActionType.UPDATE_CONSTITUENT_TITLE:
aa(ga);
break;}}}




function o
(da,
ea,
fa,
ga,
ha,
ia){

var ja=ca.getComment(ea);
if(ja){
var ka={},

la=
da&&c('ClientIDs').isExistingClientID(da);

if(!la){

ka.hasviewerliked=fa;
ka.likecount=ga;
if(ha){
ka.reactioncount=ha.reactioncount;
ka.reactioncountmap=ha.reactioncountmap;
ka.reactioncountreduced=ha.reactioncountreduced;
ka.viewerreaction=ha.viewerreaction;}}




if(ia===c('UFIConstants').UFIPayloadSourceType.LIVE_SEND||
ia===c('UFIConstants').UFIPayloadSourceType.STREAMING)

new (c('LiveWWWFeedbackTypedLogger'))().
setEvent('update_view').
setUpdateType('comment_like').
setOriginatedLocally(la).
setCommentID(ea).
log();





ka.likeconfirmhash=c('randomInt')(0,1024);
ba(ea,ka);}}



function p(da,ea){
var fa=ca.getComment(da);
if(fa){
var ga={};



if(ea.clientid&&
c('ClientIDs').isExistingClientID(ea.clientid)&&
ea.viewerreaction!==fa.viewerreaction)
return;


ga.hasviewerliked=ea.hasviewerliked;
ga.likecount=ea.likecount;
ga.reactioncount=ea.reactioncount;
ga.reactioncountmap=ea.reactioncountmap;
ga.reactioncountreduced=ea.reactioncountreduced;
ga.viewerreaction=ea.viewerreaction;

ba(da,ga);}}



function q(da){
var ea=ca.getComment(da.commentid);
if(ea&&da.hasviewerliked===ea.hasviewerliked){
var fa=
{likecount:da.likecount,
likeconfirmhash:c('randomInt')(0,1024)};

ba(da.commentid,fa);}}



function r(da){
var ea=da.commentid,
fa=ca.getComment(ea);
if(fa){
var ga=
{translationdata:da.translationdata};

ba(ea,ga);}}








function s(da){
var ea=
{reportLink:da.reportLink,
commenterIsFOF:da.commenterIsFOF,
userIsMinor:da.userIsMinor,
giveFeedbackLink:da.giveFeedbackLink,
reportGroupAdminLink:da.reportGroupAdminLink};

return ea;}


function t(da){

var ea=ca.getComment(da.commentid);
z(ea,c('UFIConstants').UFIStatus.DELETED);}


function u(da){

var ea=ca.getComment(da.commentid);




if(ea&&ea.status!==c('UFIConstants').UFIStatus.DELETED)
z
(ea,
c('UFIConstants').UFIStatus.LIVE_DELETED);}




function v(da){
ba
(da.commentid,

{postacceptedanswer:da.isaccepted?da.commentid:null});}




function w(da){
ba(da.commentid,{attachment:null});}







function x(da){
var ea=ca.getComment(da.commentid),
fa=da.shouldHideAsSpam?
c('UFIConstants').UFIStatus.SPAM_DISPLAY:null;

z(ea,fa);}


function y(da){
ba(da.commentid,s(da));}


function z(da,ea){
ba(da.id,
{priorstatus:da.status,
status:ea});}



function aa(da){
var ea=ca.getComment(da.commentid);
if(ea){
var fa={constituentTitle:da.constituentTitle};
ba(da.commentid,fa);}}



function ba(da,ea){
var fa=
ca.getComment(da)||new (c('ImmutableObject'))({});
ca.setComment
(da,
c('ImmutableObject').set(fa,ea));

c('UFICentralUpdates').didUpdateComment(fa.id);
c('UFICentralUpdates').didUpdateFeedback(fa.ftentidentifier);}


var ca=
{getRenderKey:function da(ea){
return 'comment'+
(ea in k?k[ea]:ea);},


getComment:function da(ea){
if(ea===c('UFIConstants').unavailableCommentKey)
return null;


return i[l(ea)];},


setComment:function da(ea,fa){

fa instanceof c('ImmutableObject')||h(0,
'Comments must be instances of ImmutableObjects.'+
'Something is not wrapping comment data in "new ImmutableObject(..)"');

i[l(ea)]=fa;},







resetComments:function da(ea){
for(var fa in ea)
delete i[l(fa)];},



getCommentsForFTEntIdentifier:function da(ea){
return Object.values(i).
filter(function(fa){return fa.ftentidentifier==ea;});}};



c('UFICentralUpdates').subscribe('update-comments',function(da,ea){
if(ea.comments&&ea.comments.length)
m(ea.comments,ea.payloadsource);

if(ea.pinnedcomments&&ea.pinnedcomments.length)
m(ea.pinnedcomments,ea.payloadsource);});



c('UFICentralUpdates').subscribe('update-actions',function(da,ea){
if(ea.actions&&ea.actions.length)
n(ea.actions,ea.payloadsource);});



f.exports=ca;}),6);

/** js/clientufi/stores/UFILivePinnedCommentStore.js */






__d('UFILivePinnedCommentStore',['FluxReduceStore','UFIComments','UFIFeedbackTargets','UFIDispatcherBase','UFIStoryActionType','areEqual'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits


















(j,c('FluxReduceStore'));i=h&&h.prototype;j.prototype.
getInitialState=function(){
return {};};
j.prototype.

reduce=function(k,l){var m;
switch(l.type){
case c('UFIStoryActionType').LIVE_PIN_COMMENT:
case c('UFIStoryActionType').LIVE_UNPIN_COMMENT:

var n=l.commentID,

o=l.pinEventID;
return babelHelpers['extends']({},
k,(m={},m[
l.ftentidentifier]={commentID:n,pinEventID:o},m));


default:return k;}};

j.prototype.

areEqual=function(k,l){
return c('areEqual')(k,l);};
j.prototype.

getPinnedCommentID=function(k){
var l=this.getState()[k];
if(!l){

var m=c('UFIFeedbackTargets').getFeedbackTargetIfExists
(k);

if(!m)
return null;

return m.livepinnedcommentid||null;}

return l.commentID||null;};
j.prototype.




getPinEventID=function(k){
var l=this.getState()[k];
if(!l)
return null;

return l.pinEventID||null;};
j.prototype.

getPinnedCommentAuthorID=function(k){
var l=this.getPinnedCommentID(k);
if(l===null)
return null;

return c('UFIComments').getComment(l).author||null;};
function j(){h.apply(this,arguments);}


f.exports=new j(c('UFIDispatcherBase'));}),null);

/** js/clientufi/types/UFIVisibility.js */






__d('UFIVisibility',[],(function a(b,c,d,e,f,g){

'use strict';



var h=
{VISIBLE:'visible',
HIDDEN:'hidden'};


f.exports=h;}),null);

/** js/clientufi/stores/UFICommentVisibilityStore.js */






__d('UFICommentVisibilityStore',['invariant','FluxReduceStore','UFICommentActionType','UFIComments','UFIDispatcherBase','UFIInstanceActionType','UFILivePinnedCommentStore','UFIRootRegistry','UFIVisibility','filterObject'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;





























function k
(p){


var q=arguments.length<=1||arguments[1]===undefined?null:arguments[1],r=arguments.length<=2||arguments[2]===undefined?null:arguments[2];

q===null&&r===null||
q!==null&&r!==null||h(0,
'The comment FBID and pin state must always be provided together');

if(q)
return p+'-'+q+(r?'-P':'');

return p;}


function l(p,q){
return p===q||p.startsWith(q+'-');}


function m(p){
var q=
c('UFIRootRegistry').getInstanceIDFromFTEntIdentifier(p);

return q?q:[];}


function n
(p){


return {instanceid:p};}

i=babelHelpers.inherits

(o,c('FluxReduceStore'));j=i&&i.prototype;o.prototype.

getInitialState=function(){
return {};};
o.prototype.

















getVisibility=
function(p,
q){

var r=arguments.length<=2||arguments[2]===undefined?null:arguments[2],
s=r?
k
(q.instanceid,
r.comment.fbid,
r.isLivePinnedComment):

k(q.instanceid);

if(Object.prototype.hasOwnProperty.call(p,s))
return p[s];

return c('UFIVisibility').HIDDEN;};
o.prototype.

$UFICommentVisibilityStore_isUFIInstanceVisible=function(p){
var q=n(p);

return (this.getVisibility(this.getState(),q)===c('UFIVisibility').VISIBLE);};

o.prototype.

isFeedbackTargetVisible=function(p){
var q=m(p);
return q.some(function(r){
return this.$UFICommentVisibilityStore_isUFIInstanceVisible(r);}.
bind(this));};
o.prototype.

reduce=function(p,q){var r,s;
switch(q.type){
case c('UFICommentActionType').UNMOUNTED:
var t=babelHelpers['extends']({},p);

delete t[k
(q.instanceID,
q.renderedComment.comment.fbid,
q.renderedComment.isLivePinnedComment)];

return t;

case c('UFICommentActionType').CHANGE_VISIBILITY:
return babelHelpers['extends']({},
p,(r={},r[
k
(q.instanceID,
q.renderedComment.comment.fbid,
q.renderedComment.isLivePinnedComment)]=
q.visibility,r));


case c('UFIInstanceActionType').CHANGE_VISIBILITY:
var u=
c('UFIRootRegistry').getFTEntIdentifierFromInstanceID(q.instanceID),
v=
c('UFIComments').getCommentsForFTEntIdentifier(u);


q.type===c('UFIInstanceActionType').CHANGE_VISIBILITY||h(0,
'so flow stops complaining');

var w=q.visibility,

x=v.reduce(function(ca,da){
ca[
k
(q.instanceID,
da.fbid,

da.fbid?false:null)]=

w;
return ca;},
{});

if(u){
var y=c('UFILivePinnedCommentStore').getPinnedCommentID
(u);

if(y!==null){
var z=c('UFIComments').getComment(y);
x[
k(q.instanceID,z.fbid,true)]=
w;}}



return babelHelpers['extends']({},
p,(s={},s[
k(q.instanceID)]=q.visibility,s),
x);


case c('UFIInstanceActionType').REMOVE:
var aa=q.instanceID,
ba=k(aa);









return c('filterObject')
(p,
function(ca,da){

return (da!==ba&&!l(da,aa));});}




return p;};
function o(){i.apply(this,arguments);}


f.exports=new o(c('UFIDispatcherBase'));}),null);

/** js/clientufi/stores/UFIKeyValueStore.js */






__d('UFIKeyValueStore',['FluxReduceStore','abstractMethod'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits









(j,c('FluxReduceStore'));i=h&&h.prototype;j.prototype.

getInitialState=function(){
return {};};
j.prototype.

getValueFor=function(k){
return this.getState()[k]||null;};
j.prototype.

getStateKey=function(k){
return k.instanceID;};
j.prototype.

getStateValue=function(k){
return c('abstractMethod')('UFIKeyValueStore','getStateValue');};
j.prototype.

reduce=function(k,l){
var m=this.getStateKey(l),
n=this.getStateValue(l);
if(n!==null){var o;
return babelHelpers['extends']({},
k,(o={},o[
m]=n,o));}


return k;};
function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/clientufi/stores/UFICommercialBreakStore.js */






__d('UFICommercialBreakStore',['UFIKeyValueStore','UFIInstanceActionType','UFIDispatcherBase'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits









(j,c('UFIKeyValueStore'));i=h&&h.prototype;j.prototype.
getValueFor=function(k){
return !!i.getValueFor.call(this,k);};
j.prototype.

getStateValue=function(k){
switch(k.type){
case c('UFIInstanceActionType').TOGGLE_COMMERCIAL_BREAK:
return k.inCommercial;}

return null;};
function j(){h.apply(this,arguments);}


f.exports=new j(c('UFIDispatcherBase'));}),null);

/** js/clientufi/stores/UFIComposerIsTypingStore.js */






__d('UFIComposerIsTypingStore',['UFIKeyValueStore','UFIAddCommentActionType','UFIDispatcherBase'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits









(j,c('UFIKeyValueStore'));i=h&&h.prototype;j.prototype.
getStateKey=function(k){
return k.ftentidentifier;};
j.prototype.

getStateValue=function(k){
switch(k.type){
case c('UFIAddCommentActionType').SUBMIT_EDIT:
return false;
case c('UFIAddCommentActionType').SUBMIT_NEW:
return false;
case c('UFIAddCommentActionType').CHANGE_CONTENT:
var l=k.text.trim().length;
return l>0;}

return null;};
function j(){h.apply(this,arguments);}


f.exports=new j(c('UFIDispatcherBase'));}),null);

/** js/clientufi/stores/UFIInteractionStore.js */






__d('UFIInteractionStore',['UFIAddCommentActionType','UFICommentActionType','UFIDispatcherBase','UFIInstanceActionType','UFIKeyValueStore','UFIStoryActionType'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits












(j,c('UFIKeyValueStore'));i=h&&h.prototype;j.prototype.
getValueFor=function(k){
return !!i.getValueFor.call(this,k);};
j.prototype.

getStateValue=function(k){
switch(k.type){
case c('UFIAddCommentActionType').CHANGE_CONTENT:
case c('UFIAddCommentActionType').SUBMIT_EDIT:
case c('UFIAddCommentActionType').SUBMIT_NEW:
case c('UFICommentActionType').CHANGE_REACTION:
case c('UFICommentActionType').EDIT:
case c('UFICommentActionType').REMOVE:
case c('UFICommentActionType').TOGGLE_LIKE:
case c('UFICommentActionType').TOGGLE_MARK_AS_SPAM:
case c('UFICommentActionType').TRANSLATE:
case c('UFIInstanceActionType').CHANGE_ORDER_MODE:
case c('UFIInstanceActionType').TOGGLE_COMMENTS:
case c('UFIStoryActionType').PAGE_IN_COMMENTS:
case c('UFIStoryActionType').SHOW_REPLIES:
case c('UFIStoryActionType').TOGGLE_REPLIES:
return true;}

return null;};
function j(){h.apply(this,arguments);}


f.exports=new j(c('UFIDispatcherBase'));}),null);

/** js/clientufi/stores/UFILiveTypingStore.js */






__d('UFILiveTypingStore',['FluxReduceStore','UFIDispatcherBase','UFIStoryActionType'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits










(j,c('FluxReduceStore'));i=h&&h.prototype;j.

getNewFeedbackState=function(k){
switch(k){
case c('UFIStoryActionType').FRIEND_TYPING:
return 'friend';
case c('UFIStoryActionType').SOMEONE_TYPING:
return 'someone';
case c('UFIStoryActionType').TYPING_STOPPED:
return false;

default:return null;}};

j.prototype.

getInitialState=function(){
return {};};
j.prototype.

reduce=function(k,l){
var m=j.getNewFeedbackState(l.type);

if(m!==null){var n;
k=babelHelpers['extends']({},
k,(n={},n[
l.ftentidentifier]=m,n));}



return k;};
j.prototype.

isFriendTyping=function(k){
return this.getState()[k]==='friend';};
function j(){h.apply(this,arguments);}


f.exports=new j(c('UFIDispatcherBase'));}),null);

/** js/clientufi/actions/UFIActionTypes.js */






__d('UFIActionTypes',['UFIInstanceActionType','UFIStoryActionType','UFIAddCommentActionType','UFICommentActionType'],(function a(b,c,d,e,f,g){

'use strict';

var h=
{INSTANCE:c('UFIInstanceActionType'),
STORY:c('UFIStoryActionType'),
ADD_COMMENT:c('UFIAddCommentActionType'),
COMMENT:c('UFICommentActionType')};


f.exports=h;}),null);

/** js/clientufi/stores/UFIReactionPendingRequestsStore.js */






__d('UFIReactionPendingRequestsStore',['FluxReduceStore','UFIActionTypes','UFIDispatcherBase'],(function a(b,c,d,e,f,g){

'use strict';var h,i;









function j(o){
return o+'-comment';}


function k(o){
return o+'-story';}


function l(o,p){var q;
return babelHelpers['extends']({},
o,(q={},q[
p]=(o[p]||0)+1,q));}



function m(o,p){var q;
return babelHelpers['extends']({},
o,(q={},q[
p]=(o[p]||0)-1,q));}

h=babelHelpers.inherits






(n,c('FluxReduceStore'));i=h&&h.prototype;n.prototype.

getInitialState=function(){
return {};};
n.prototype.

reduce=function(o,p){
switch(p.type){
case c('UFIActionTypes').STORY.CHANGE_REACTION:
return l
(o,
k(p.ftentidentifier));

case c('UFIActionTypes').COMMENT.CHANGE_REACTION:
return l
(o,
j(p.fbid));

case c('UFIActionTypes').STORY.CHANGE_REACTION_SUCCESS:
case c('UFIActionTypes').STORY.CHANGE_REACTION_FAILURE:
return m
(o,
k(p.ftentidentifier));

case c('UFIActionTypes').COMMENT.CHANGE_REACTION_FAILURE:
case c('UFIActionTypes').COMMENT.CHANGE_REACTION_SUCCESS:
return m
(o,
j(p.fbid));}



return o;};
n.prototype.

getPendingRequestsForComment=function(o){
return this.getState()[j(o)]||0;};
n.prototype.

getPendingRequests=function(o){
return this.getState()[k(o)]||0;};
function n(){h.apply(this,arguments);}


f.exports=new n(c('UFIDispatcherBase'));}),null);

/** js/clientufi/stores/UFIReactionSyncStore.js */






__d('UFIReactionSyncStore',['FluxReduceStore','UFIActionTypes','UFIDispatcherBase'],(function a(b,c,d,e,f,g){

'use strict';var h,i;










function j(m){
return m+'-comment';}


function k(m){
return m+'-story';}
h=babelHelpers.inherits







(l,c('FluxReduceStore'));i=h&&h.prototype;l.prototype.
getInitialState=function(){
return {};};
l.prototype.

reduce=function(m,n){var o,p,q;
switch(n.type){
case c('UFIActionTypes').INSTANCE.INIT:
var r=n.payload,
s=r.feedbacktarget?
r.feedbacktarget:
r.feedbacktargets&&r.feedbacktargets[0];
if(!s)
return m;


var t=n.payload.comments.reduce(function(u,v){
u[j(v.fbid)]=v.viewerreaction;
return u;},
{});

return babelHelpers['extends']({},
m,
t,(o={},o[
k(n.ftentidentifier)]=s.viewerreaction,o));

case c('UFIActionTypes').STORY.CHANGE_REACTION_SUCCESS:
return babelHelpers['extends']({},
m,(p={},p[
k(n.ftentidentifier)]=n.reactionType,p));

case c('UFIActionTypes').COMMENT.CHANGE_REACTION_SUCCESS:
return babelHelpers['extends']({},
m,(q={},q[
j(n.fbid)]=n.reactionType,q));


default:return m;}};

l.prototype.

getLastKnownCommentReaction=function(m){
return this.getState()[j(m)];};
l.prototype.

getLastKnownReaction=function(m){
return this.getState()[k(m)];};
function l(){h.apply(this,arguments);}


f.exports=new l(c('UFIDispatcherBase'));}),null);

/** js/clientufi/UFISharedDispatcher.js */






__d('UFISharedDispatcher',['UFIDispatcherBase','UFIFeedbackStore','UFIAcceptedAnswerStore','UFICommentEditIDStore','UFICommentVisibilityStore','UFICommercialBreakStore','UFIComposerIsTypingStore','UFIInteractionStore','UFILivePinnedCommentStore','UFILiveTypingStore','UFILocallyComposedCommentStore','UFIOrderingModeStore','UFIReactionPendingRequestsStore','UFIReactionSyncStore','UFISpamStore'],(function a(b,c,d,e,f,g){

'use strict';




c('UFIFeedbackStore');

c('UFIAcceptedAnswerStore');
c('UFICommentEditIDStore');
c('UFICommentVisibilityStore');
c('UFICommercialBreakStore');
c('UFIComposerIsTypingStore');
c('UFIFeedbackStore');
c('UFIInteractionStore');
c('UFILivePinnedCommentStore');
c('UFILiveTypingStore');
c('UFILocallyComposedCommentStore');
c('UFIOrderingModeStore');
c('UFIReactionPendingRequestsStore');
c('UFIReactionSyncStore');
c('UFISpamStore');

f.exports=c('UFIDispatcherBase');}),null);

/** js/clientufi/actions/UFICommentAction.js */






__d('UFICommentAction',['UFICommentActionType'],(function a(b,c,d,e,f,g){

'use strict';





















































































































































































var h=
{changeReaction:function i
(j,
k,
l,
m){


return {type:c('UFICommentActionType').CHANGE_REACTION,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k,
reactionType:l,
target:m};},



changeReactionSuccess:function i


(j,
k,
l){


return {type:c('UFICommentActionType').CHANGE_REACTION_SUCCESS,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k,
reactionType:l};},



changeReactionFailure:function i


(j,
k,
l){


return {type:c('UFICommentActionType').CHANGE_REACTION_FAILURE,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k,
reactionType:l};},



mounted:function i
(j,
k){


return {type:c('UFICommentActionType').MOUNTED,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.comment.fbid,
renderedComment:k,
contextArgs:j};},



unmounted:function i
(j,
k){


return {type:c('UFICommentActionType').UNMOUNTED,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.comment.fbid,
renderedComment:k,
contextArgs:j};},



changeVisibility:function i
(j,
k,
l){


return {type:c('UFICommentActionType').CHANGE_VISIBILITY,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.comment.fbid,
renderedComment:k,
contextArgs:j,
visibility:l};},



edit:function i
(j,
k){


return {type:c('UFICommentActionType').EDIT,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k};},



remove:function i
(j,
k,
l,
m){


return {type:c('UFICommentActionType').REMOVE,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k,
target:l,
onConfirm:m};},



removePreview:function i
(j,
k,
l){


return {type:c('UFICommentActionType').REMOVE_PREVIEW,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k,
target:l};},



toggleLike:function i
(j,
k,
l){


return {type:c('UFICommentActionType').TOGGLE_LIKE,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k,
like:!k.hasviewerliked,
target:l};},



translate:function i
(j,
k,
l){


return {type:c('UFICommentActionType').TRANSLATE,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k,
trigger:l};},



markAsSpam:function i
(j,
k,
l){


return {type:c('UFICommentActionType').TOGGLE_MARK_AS_SPAM,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k,
is_spam:true,
target:l};},



markAsNotSpam:function i
(j,
k,
l){


return {type:c('UFICommentActionType').TOGGLE_MARK_AS_SPAM,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k,
is_spam:false,
target:l};},



inlineBan:function i
(j,
k,
l,
m){


return {type:c('UFICommentActionType').TOGGLE_INLINE_BAN,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k,
is_banned:true,
ownerid:m,
target:l};},



undoInlineBan:function i
(j,
k,
l,
m){


return {type:c('UFICommentActionType').TOGGLE_INLINE_BAN,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k,
is_banned:false,
ownerid:m,
target:l};},



embed:function i
(j,
k){


return {type:c('UFICommentActionType').EMBED,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k};},



showConstituentTitle:function i
(j,
k){


return {type:c('UFICommentActionType').SHOW_CONSTITUENT_TITLE,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k};},



hideConstituentTitle:function i
(j,
k){


return {type:c('UFICommentActionType').HIDE_CONSTITUENT_TITLE,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
fbid:k.fbid,
comment:k};}};




f.exports=h;}),null);

/** shared/reactions/UFIReactionsUtils.js */





__d('UFIReactionsUtils',[],(function a(b,c,d,e,f,g){


var h=
{getReactionData:function i
(j,
k,
l,
m){

k=parseInt(k,10);
var n=!!k,

o=j.reactorids?j.reactorids.slice(0):[],
p=o.indexOf(l),
q=0;

if(n){


if(p<0){
o.unshift(l);
q=1;}}else

if(p>-1){
o.splice(p,1);
q=-1;}


var r=Math.max(j.reactioncount+q,0),

s=j.reactioncountreduced;
if(s&&!isNaN(s))
if(m){
s=m(r);}else 

s=r.toString();



var t=j.reactioncountmap||{},
u,



v=j.viewerreaction;
if(v&&t[v]){
t[v]['default']=
Math.max((t[v]['default']||0)-1,0);

u=t[v].reduced;
if(u&&!isNaN(u))
t[v].reduced=
t[v]['default'].toString();}





if(n&&t[k]){
t[k]['default']=
(t[k]['default']||0)+1;

u=t[k].reduced;
if(u&&!isNaN(u))
t[k].reduced=
t[k]['default'].toString();}



var w=j.userreactions;



if(!w||Array.isArray(w))
w={};


if(n){
w[l]=k;}else 

delete w[l];


var x=null;
if(j.reactionsentences){


var y=!(v&&k);
x=
{current:j.reactionsentences[y?'alternate':'current'],
alternate:j.reactionsentences[y?'current':'alternate']};}




return {reactioncount:r,
reactioncountmap:t,
reactioncountreduced:s,
reactionsentences:x,
reactorids:o,
userreactions:w,
viewerreaction:k};},



getReactionCountMapFromSummary:function i
(j){

var k={};
if(!j)
return k;

for(var l=0;l<j.length;l++){
var m=j[l],
n=m.feedback_reaction.key;
k[n]=
{'default':m.reactors&&m.reactors.count,
reduced:m.reactors&&m.reactors.display_count};}


return k;}};



f.exports=h;}),null);

/** js/clientufi/models/UFIUserActionUtils.js */






__d('UFIUserActionUtils',['Nectar','collectDataAttributes'],(function a(b,c,d,e,f,g){





var h=
{trackingData:function i(j){
if(!j)
return {ft:{}};


var i=
{ft:c('collectDataAttributes')(j,['ft']).ft};

c('Nectar').addModuleData(i,j);

return i;}};



f.exports=h;}),null);

/** www/__virtual__/x/XUFICommentReactionController.js */



__d("XUFICommentReactionController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/comment\/reaction\/",{reaction_type:{type:"Enum",enumType:0}});}),

null);

/** www/__virtual__/x/XUFIReactionController.js */



__d("XUFIReactionController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/reaction\/",{client_id:{type:"String"},ft_ent_identifier:{type:"String"},reaction_type:{type:"Enum",enumType:0},story_render_location:{type:"Enum",enumType:1},feedback_source:{type:"Int"},feedback_referrer:{type:"String"},basic_origin_uri:{type:"String"},basic_reload:{type:"Exists",defaultValue:false},on_demand_content_time_offset:{type:"Int"},live_content_time_offset:{type:"Int"},aftercursor:{type:"String"},tab:{type:"String"},av:{type:"Int"},_ft_:{type:"String"}});}),

null);

/** js/clientufi/models/UFIReactionUserActions.js */






__d('UFIReactionUserActions',['ActorURI','AsyncResponse','AsyncRequest','ClientIDs','ChannelClientID','NumberFormat','QE2Logger','MercuryServerDispatcher','UFICentralUpdates','UFICommentAction','UFIComments','UFIConfig','UFIConstants','UFIFeedbackTargets','UFIReactionPendingRequestsStore','UFIReactionSyncStore','UFIReactionTypes','UFISharedDispatcher','UFIStoryAction','UFIReactionsUtils','UFIUserActionUtils','UFIVideoPlayerRegistry','XUFIReactionController','XUFICommentReactionController','emptyFunction','ifRequired','setImmediate'],(function a(b,c,d,e,f,g){

'use strict';





































var h=



{changeReaction:function z
(aa,
ba,
ca,
da){


var ea=arguments.length<=4||arguments[4]===undefined?null:arguments[4],fa=arguments.length<=5||arguments[5]===undefined?null:arguments[5];
c('UFIFeedbackTargets').getFeedbackTarget(aa,function(ga){var ha,
ia=w(ga,ba);
c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{actions:ia});


var ja=c('UFIUserActionUtils').trackingData(da),

ka={};
ka[c('ActorURI').PARAMETER_ACTOR]=ga.actorforpost;
var la=babelHelpers['extends']
({client_id:c('ClientIDs').getNewClientID(),
ft_ent_identifier:aa,
reaction_type:ba,
root_id:ca.rootid,
session_id:c('ChannelClientID').getID(),
source:ca.source,
feedback_referrer:ca.feedbackReferrer,
instance_id:ca.instanceid},
ka,
ja);


if(ca.fluentContentToken)(function(){
var ma=ca.fluentContentToken,
na=
c('UFIVideoPlayerRegistry').getAvailableVideoPlayerControllerForElement
(da,
ma);

if(na&&na.isSpherical())
la.video_playback_timestamp=c('UFIVideoPlayerRegistry').
getAvailableVideoPlayerControllerTimeForElement
(da,
ma);


if(ca.isLiveVOD){
la.on_demand_content_time_offset=c('UFIVideoPlayerRegistry').
getAvailableVideoPlayerControllerTimeForElement
(da,
ma);}else

if(ca.islivestreaming)
la.live_content_time_offset=c('UFIVideoPlayerRegistry').
getAvailableVideoPlayerControllerTimeForElement
(da,
ma);



if(na&&na.isSpherical())
c('ifRequired')
('SphericalViewportControlStore',
function(oa){
var pa=
oa.getOrientation
(na.getVideoPlayerID());


if(pa)
if(ea!==null&&fa!==null){
la.spherical_yaw=ea;
la.spherical_pitch=fa;}else{

la.spherical_pitch=
Math.round(pa.pitch);
la.spherical_yaw=
Math.round(pa.yaw);}},



c('emptyFunction')());})

();


c('MercuryServerDispatcher').trySend
(c('XUFIReactionController').getURIBuilder().getURI(),
la);});},






changeCommentReaction:function z
(aa,
ba,
ca,
da){

var ea=c('UFIComments').getComment(aa);
if(ea.viewerreaction!=ba)
c('UFIFeedbackTargets').getFeedbackTarget
(ea.ftentidentifier,
function(fa){
var ga=c('UFIUserActionUtils').trackingData(da),
ha=v
(ea,
fa,
ba);

c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{actions:ha});


var ia={};
ia[c('ActorURI').PARAMETER_ACTOR]=fa.actorforpost;

c('MercuryServerDispatcher').trySend
(c('XUFICommentReactionController').getURIBuilder().getURI(),babelHelpers['extends']

({comment_id:aa,
legacy_id:ea.legacyid,
reaction_type:ba,
ft_ent_identifier:ea.ftentidentifier,
source:ca.source,
instance_id:ca.instanceid,

client_id:c('ClientIDs').getNewClientID(),
session_id:c('ChannelClientID').getID()},

ga,
ia));});}},










i={},

j=c('XUFIReactionController').getURIBuilder().getURI();
i[j]=
{mode:c('MercuryServerDispatcher').IMMEDIATE,
error_handler:r,
handler:q};


var k=
c('XUFICommentReactionController').getURIBuilder().getURI();
i[k]=
{mode:c('MercuryServerDispatcher').BATCH_CONDITIONAL,
batch_if:l,
batch_function:m,
error_handler:u,
handler:t};


c('MercuryServerDispatcher').registerEndpoints(i);


function l(z,aa){
return z&&
z.ft_ent_identifier==aa.ft_ent_identifier&&
z.comment_id==aa.comment_id;}



function m(z,aa){
return aa;}


var n='feedback_reactions_www_rollback_universe';

function o(){
c('QE2Logger').logExposureForUser(n);}


function p
(z,
aa){

var ba=c('UFIReactionPendingRequestsStore').
getPendingRequests(z);

if(ba>0)
return;


var ca=c('UFIReactionSyncStore').
getLastKnownReaction(z);



if(aa===ca)
return;





c('UFIFeedbackTargets').getFeedbackTarget(z,function(da){
var ea=w(da,ca);
c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{actions:ea});});}




function q(z,aa){
var ba=aa.data,
ca=ba.ft_ent_identifier,
da=ba.reaction_type;

c('UFISharedDispatcher').dispatch
(c('UFIStoryAction').changeReactionSuccess



({instanceid:ba.instance_id,
ftentidentifier:ca},

da));



c('setImmediate')(function(){return p
(ca,
da);});}



function r(z){

var aa=z.request.data,
ba=aa.ft_ent_identifier,
ca=aa.reaction_type;

o();

var da=c('UFIConfig').reactionsHasReactionsRollback,
ea=c('UFIConfig').reactionsHasReactionsRetry;




if(ea&&!aa.retry_attempt){
c('MercuryServerDispatcher').trySend
(c('XUFIReactionController').getURIBuilder().getURI(),babelHelpers['extends']({},

aa,
{retry_attempt:1}));


return;}


c('UFISharedDispatcher').dispatch
(c('UFIStoryAction').changeReactionFailure

({instanceid:aa.instance_id,
ftentidentifier:ba},

ca));



if(da)
c('setImmediate')(function(){return p
(ba,
ca);});



c('AsyncResponse').defaultErrorHandler(z);}


function s
(z,
aa,
ba){

var ca=c('UFIReactionPendingRequestsStore').
getPendingRequestsForComment(aa.fbid);

if(ca>0)
return;


var da=c('UFIReactionSyncStore').
getLastKnownCommentReaction(aa.fbid);


if(ba===da)
return;


c('UFIFeedbackTargets').getFeedbackTarget(z,function(ea){
var fa=v(aa,ea,da);
c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{actions:fa});});}




function t
(z,
aa){

var ba=aa.data,
ca=ba.ft_ent_identifier,
da=ba.reaction_type,

ea=c('UFIComments').getComment(ba.comment_id);
if(!ea)
return;


c('UFISharedDispatcher').dispatch
(c('UFICommentAction').changeReactionSuccess

({instanceid:ba.instance_id,
ftentidentifier:ca},

ea,
da));



c('setImmediate')
(function(){return s
(ca,
ea,
da);});}




function u(z){

var aa=z.request.data,
ba=aa.ft_ent_identifier,
ca=aa.reaction_type,

da=c('UFIComments').getComment(aa.comment_id);
if(!da)
return;


o();

var ea=c('UFIConfig').reactionsHasCommentReactionsRollback,
fa=c('UFIConfig').reactionsHasCommentReactionsRetry;




if(fa&&!aa.retry_attempt){
c('MercuryServerDispatcher').trySend
(c('XUFICommentReactionController').getURIBuilder().getURI(),babelHelpers['extends']({},

aa,
{retry_attempt:1}));


return;}


c('UFISharedDispatcher').dispatch
(c('UFICommentAction').changeReactionFailure

({instanceid:aa.instance_id,
ftentidentifier:ba},

da,
ca));



if(ea)
c('setImmediate')
(function(){return s
(ba,
da,
ca);});




c('AsyncResponse').defaultErrorHandler(z);}


function v
(z,
aa,
ba){

var ca=z.id,

da=
[y
(z,
ba,
ca,
aa.supportedreactions||[],
aa.actorforpost)],



ea=ba===c('UFIReactionTypes').LIKE;
if(aa.hasviewerliked!==ea){
var fa=ea?1:-1;
da.push
({commentid:ca,
actiontype:c('UFIConstants').UFIActionType.COMMENT_LIKE,
viewerliked:ea,
likecount:(z.likecount||0)+fa});}



return da;}


function w
(z,
aa){

var ba=[x(z,aa)],

ca=aa!==c('UFIReactionTypes').NONE;
if(z.hasviewerliked!==ca){
var da=ca?1:-1;
ba.push
({actiontype:c('UFIConstants').UFIActionType.LIKE_ACTION,
actorid:z.actorforpost,
hasviewerliked:ca,
likecount:(z.likecount||0)+da,
entidentifier:z.entidentifier,
likesentences:
{current:z.likesentences.alternate,
alternate:z.likesentences.current}});}




return ba;}


function x
(z,
aa){

return Object.assign

({actiontype:c('UFIConstants').UFIActionType.REACTION,
actorid:z.actorforpost,
entidentifier:z.entidentifier},

c('UFIReactionsUtils').getReactionData(z,aa,z.actorforpost,
c('NumberFormat').formatInteger));}



function y
(z,
aa,
ba,
ca,
da){

var ea={};
for(var fa=0;fa<ca.length;fa++){
var ga=ca[fa],
ha=z.reactioncountmap?
z.reactioncountmap[ga]:
null;


ea[ga]=
{'default':ha?ha['default']:0,
reduced:ha?ha.reduced:'0'};}



var ia=
c('UFIReactionsUtils').getReactionData
({viewerreaction:z.viewerreaction,
reactioncount:z.reactioncount,
reactioncountreduced:z.reactioncountreduced,
reactioncountmap:ea,
reactorids:z.viewerreaction?[da]:[]},
aa,da);


return {actiontype:c('UFIConstants').UFIActionType.COMMENT_REACTION,
commentid:ba,
hasviewerliked:!!aa,
likecount:ia.reactioncountmap[1]['default'],
reactioncount:ia.reactioncount,
reactioncountmap:ia.reactioncountmap,
reactioncountreduced:ia.reactioncountreduced,
viewerreaction:aa};}



f.exports=h;}),null);

/** js/clientufi/models/Comments/UFIPagedCommentListImpl.js */






__d('UFIPagedCommentListImpl',['ClientIDs','KeyedCallbackManager','UFICentralUpdates','UFICommentLogger','UFIConfig','UFIConstants','UFIFeedbackTargets'],(function a(b,c,d,e,f,g){

'use strict';






































function h(i){this.actorID=null;this.basePermalink=null;this.commentPermalinks=Object.create(null);this.count=0;this.dataSource=new (c('KeyedCallbackManager'))();this.deletedComments=Object.create(null);this.deletedCount=0;this.lastRequestedLength=0;this.lastRequestedOffset=0;
this.feedbackTargetID=i;






c('UFIFeedbackTargets').getFeedbackTarget
(this.feedbackTargetID,
function(j){
this.actorID=j.actorforpost;
this.basePermalink=j.permalink;}.
bind(this));}

h.prototype.

setClientHasAll=function(i){

};h.prototype.






addOrUpdateComment=function(i){


if(i.islocal){

this.$UFIPagedCommentListImpl_addComment(i.id);}else 

this.$UFIPagedCommentListImpl_addOrUpdateCommentFromServer
(i.id,
i.clientid,
i.legacyid);


c('UFICentralUpdates').didUpdateFeedback(this.feedbackTargetID);};
h.prototype.




$UFIPagedCommentListImpl_addComment=function(i){
this.dataSource.setResource(this.count,i);
this.count++;};
h.prototype.

















$UFIPagedCommentListImpl_addOrUpdateCommentFromServer=
function(i,
j,
k){

var l=
j&&c('ClientIDs').isExistingClientID(j),



m=this.dataSource.getAllResources(),
n={};
for(var o in m){
var p=m[o];
n[p]=o;}




if(l&&
j&&
j in n){



n[i]=n[j];


var q=n[j];
this.dataSource.setResource(q,i);
if(c('UFIConfig').logCommentPost)
c('UFICommentLogger').logNewCommentReceived(j,Date.now());}else


if(!n[i]&&j)
this.$UFIPagedCommentListImpl_addComment(i);



if(k&&i in n)
this.commentPermalinks[i]=this.buildCommentPermalink
(i,
k,
n[i]);};


h.prototype.










addCommentIDs=
function(i,
j,
k){

var l={};
for(var m=0;m<j;m++)
l[i+m]=k[m]||c('UFIConstants').unavailableCommentKey;

this.dataSource.addResourcesAndExecute(l);



c('UFICentralUpdates').didUpdateFeedback(this.feedbackTargetID);};
h.prototype.














getComments=
function(i,
j,
k,
l){

var m=new Array(j).fill().map(function(s,t){return t+i;}),

n=this.dataSource.getUnavailableResourcesFromRequest(m);
if(n.length){

var o=Math.min.apply(Math,n),
p=Math.max.apply(Math,n),

q=o,
r=p-o+1;


if(q<this.lastRequestedOffset||
q+r>
this.lastRequestedOffset+this.lastRequestedLength){

this.lastRequestedOffset=q;
this.lastRequestedLength=r;

this.fetchComments(q,r,k);}}else 




this.dataSource.executeOrEnqueue(m,function(s){return l
(this.commentsFromCommentIDs(s,i,j));}.bind(this));};


h.prototype.

getCommentsOrThrow=function(i){
var j=i.getLength(),k=i.getOffset(),

l={};

new Array(j).fill().forEach(function(m,n){
var o=n+k,
p=this.dataSource.getResource(o);

if(!p)
throw new Error('Tried to get nonexistent comment');


l[o]=p;}.
bind(this));

return this.commentsFromCommentIDs(l,k,j);};
h.prototype.










fetchComments=
function(i,
j,
k){




};h.prototype.











commentsFromCommentIDs=
function(i,
j,
k){




return {};};
h.prototype.







reset=function(){
var i=this.dataSource.getAllResources();

this.dataSource.reset();
this.count=0;
this.deletedCount=0;
this.deletedComments={};
this.lastRequestedOffset=0;
this.lastRequestedLength=0;

return i;};
h.prototype.







deleteComment=function(i){
if(!(i in this.deletedComments)){
this.deletedComments[i]=true;
this.deletedCount++;}};

h.prototype.








updateCommentCount=function(i){
this.count=i;



this.deletedCount=0;};
h.prototype.






getFeedbackTargetID=function(){
return this.feedbackTargetID;};
h.prototype.







getCommentCount=function(){
return this.count;};
h.prototype.







getDeletedCount=function(){
return this.deletedCount;};
h.prototype.







getDisplayedCommentCount=function(){
return this.count-this.deletedCount;};
h.prototype.








getBasePermalink=function(){
return this.basePermalink;};
h.prototype.










buildCommentPermalink=
function(i,
j,
k){




return null;};
h.prototype.








getPermalinkForComment=function(i){
return this.commentPermalinks[i];};



f.exports=h;}),null);

/** js/clientufi/models/Comments/UFIReplyCommentListImpl.js */






__d('UFIReplyCommentListImpl',['ActorURI','JSLogger','MercuryServerDispatcher','UFICommentLogger','UFIComments','UFIConfig','UFIPagedCommentListImpl','URI'],(function a(b,c,d,e,f,g){

'use strict';var h,i,














j=c('JSLogger').create('ufi_reply_comment_list');h=babelHelpers.inherits

(k,c('UFIPagedCommentListImpl'));i=h&&h.prototype;








function k
(l,
m,
n){

i.constructor.call(this,l);
this.parentCommentID=m;
this.containerOrderingMode=n;}
k.prototype.






fetchComments=
function(l,
m,
n){

if(c('UFIConfig').logCommentLoad)
c('UFICommentLogger').logCommentFetch
(this.feedbackTargetID,
Date.now(),
{request_length:m,is_reply:true});



var o=
{ft_ent_identifier:this.feedbackTargetID,
parent_comment_ids:[this.parentCommentID],
source:null,
offsets:[l],
lengths:[m],
feed_context:n?n.feedContext:null,
numpagerclicks:n?n.numPagerClicks:null,
containerorderingmode:this.containerOrderingMode,
translate_all:n?n.translateAll:null};

if(!n||!n.viewAs)
o[c('ActorURI').PARAMETER_ACTOR]=this.actorID;

c('MercuryServerDispatcher').trySend('/ajax/ufi/reply_fetch.php',o);};
k.prototype.







commentsFromCommentIDs=
function(l,
m,
n){




var o={};
for(var p=0;p<n;p++){
var q=c('UFIComments').getComment(l[m+p]);
if(q)
o[m+p]=q;}



return o;};
k.prototype.

reset=function(){
var l=i.reset.call(this),

m={};
for(var n in l){
var o=l[n];
m[o]=true;}

c('UFIComments').resetComments(m);
return l;};
k.prototype.




getParentCommentID=function(){
return this.parentCommentID;};
k.prototype.







buildCommentPermalink=
function(l,
m,
n){

if(!this.basePermalink)
return null;


var o=this.getParentCommentID().split('_'),
p=m;
if(o.length===2){
p=o[1];}else 

j.error('Bad reply comment ID: '+this.getParentCommentID());



return (new (c('URI'))(this.basePermalink).
addQueryData
({comment_id:p,
reply_comment_id:m}).

toString());};




c('MercuryServerDispatcher').registerEndpoints
({'/ajax/ufi/reply_fetch.php':
{mode:c('MercuryServerDispatcher').IMMEDIATE}});



f.exports=k;}),null);

/** js/clientufi/models/UFIReplyCommentList.js */








__d('UFIReplyCommentList',['getObjectValues','UFICentralUpdates','UFIComments','UFIConstants','UFIReplyCommentListImpl'],(function a(b,c,d,e,f,g){

'use strict';










var h={},

i=






{getCommentList:function k
(l,
m,
n){

if(!h[m])
h[m]={};

if(!h[m][n]){
var o=new (c('UFIReplyCommentListImpl'))
(l,
m,
n),






p=
i.
getReplyListsForParentCommentID(String(m));
if(p.length)
o.updateCommentCount
(p[0].getCommentCount());



h[m][n]=
o;}

return h[m][n];},









getReplyListsForParentCommentID:function k
(l){

return c('getObjectValues')(h[l]||{});},








resetWithContext:function k
(l,
m,
n,
o){

var p=h[m][o];
if(!p)
return;

p.reset();
p.actorID=n;}};




function j(k){
var l=c('UFIComments').getComment(k.commentid),

m=l.id,
n=l.parentcommentid;

if(!n)
return;


if(l.status!==c('UFIConstants').UFIStatus.DELETED&&
l.status!==c('UFIConstants').UFIStatus.FAILED_ADD)
i.
getReplyListsForParentCommentID(n).
forEach(function(o){
o.deleteComment(m);});}




c('UFICentralUpdates').subscribe('update-actions',function(k,l){
if(l.actions&&l.actions.length)
for(var m=0;m<l.actions.length;m++){
var n=l.actions[m];
switch(n.actiontype){
case c('UFIConstants').UFIActionType.DELETE_COMMENT:
j(n);
break;}}});





c('UFICentralUpdates').subscribe('update-comment-lists',function(k,l){
var m=l.commentlists;

if(m&&
m.replies&&
Object.keys(m).length)

for(var n in m.replies){
var o=m.replies[n],
p=o.ftentidentifier,
q=o.containerorderingmode,
r=i.getCommentList
(String(p),
String(n),
q);

r.addCommentIDs
(o.range.offset,
o.range.length,
o.values);

r.updateCommentCount(o.count);}});




c('UFICentralUpdates').subscribe('update-comments',function(k,l){
if(l.comments&&l.comments.length)
l.comments.forEach(function(m){
var n=m.parentcommentid;

if(!n)
return;


i.
getReplyListsForParentCommentID(String(n)).
forEach(function(o){
o.addOrUpdateComment(m);});});});





f.exports=i;}),6);

/** js/clientufi/models/Comments/UFIToplevelPagedCommentListImpl.js */






__d('UFIToplevelPagedCommentListImpl',['ActorURI','MercuryServerDispatcher','UFICommentLogger','UFIComments','UFIConfig','UFIOrderingModeStore','UFIPagedCommentListImpl','URI','WebCommentViewOption'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits















(j,c('UFIPagedCommentListImpl'));i=h&&h.prototype;








function j
(k,
l){

i.constructor.call(this,k);this.clientHasAll=false;



this.orderReversed=c('UFIOrderingModeStore').isInverted(l);
this.orderingMode=l;
this.clientHasAll=false;}
j.prototype.






fetchComments=
function(k,
l,
m){



if(c('UFIConfig').logCommentLoad)
c('UFICommentLogger').logCommentFetch
(this.feedbackTargetID,
Date.now(),
{request_length:l,is_reply:false});


var n=
{ft_ent_identifier:this.feedbackTargetID,
viewas:m&&m.viewAs?m.viewAs+'':null,
source:m&&m.feedbackSource,
offset:k,
length:l,
orderingmode:this.orderingMode,
feed_context:m?m.feedContext:null,
numpagerclicks:m?m.numPagerClicks:null,
translate_all:m?m.translateAll:null,
clientcommentcount:this.count};



if(this.orderingMode!==c('WebCommentViewOption').RECENT_ACTIVITY||
this.orderingMode!==c('WebCommentViewOption').RANKED_THREADED||
this.orderingMode!==c('WebCommentViewOption').FILTERED)

delete n.clientcommentcount;

if(!m||!m.viewAs)
n[c('ActorURI').PARAMETER_ACTOR]=this.actorID;


c('MercuryServerDispatcher').trySend('/ajax/ufi/comment_fetch.php',n);};
j.prototype.







commentsFromCommentIDs=
function(k,
l,
m){




var n={},
o=l,
p=l+m-1;

for(var q=0;q<m;q++){



var r=this.orderReversed?
p-q:
o+q,
s=c('UFIComments').getComment(k[r]);
if(s)
n[l+q]=s;}



return n;};
j.prototype.




getOrderingMode=function(){
return this.orderingMode;};
j.prototype.






setClientHasAll=function(k){
this.clientHasAll=k;};
j.prototype.







getClientHasAll=function(){
return this.clientHasAll;};
j.prototype.







buildCommentPermalink=
function(k,
l,
m){

if(!this.basePermalink)
return null;


return (new (c('URI'))(this.basePermalink).
addQueryData
({comment_id:l}).

toString());};




c('MercuryServerDispatcher').registerEndpoints
({'/ajax/ufi/comment_fetch.php':
{mode:c('MercuryServerDispatcher').IMMEDIATE}});



f.exports=j;}),null);

/** js/clientufi/models/UFIToplevelStreamedCommentList.js */







__d('UFIToplevelStreamedCommentList',['invariant','ClientIDs','Map','UFICentralUpdates','UFICommentLogger','UFIConfig','UFIComments','UFIConstants','UFIRange','UFIStreamingStateType'],(function a(b,c,d,e,f,g,h){

'use strict';





























function i(j){
this.feedbackTargetID=j;
this.commentIDs=[];
this.deletedCount=0;
this.totalCommentCount=0;}
i.prototype.

getFeedbackTargetID=function(){
return this.feedbackTargetID;};
i.prototype.

getClientHasAll=function(){
return false;};
i.prototype.

getActualCommentCount=function(){
return this.commentIDs.length;};
i.prototype.

getCommentCount=function(){
return this.totalCommentCount;};
i.prototype.

getDisplayedCommentCount=function(){
return this.getCommentCount()-this.getDeletedCount();};
i.prototype.

getDeletedCount=function(){
return this.deletedCount;};
i.prototype.

getPermalinkForComment=function(j){

return '';};
i.prototype.






getComments=
function(j,
k,
l,
m){

m(this.getCommentsOrThrow(new (c('UFIRange'))(j,k),l));};
i.prototype.

getCommentsOrThrow=
function(j,
k){

var l=j.getLength(),m=j.getOffset();


m===0||h(0,
'Streamed comments should only ever be requested with offset 0');

var n=k.streamingOrderReversed,
o={};
for(var p=0;p<Math.min(l,this.commentIDs.length);++p){
var q=n?
this.commentIDs.length-1-p:
p,
r=c('UFIComments').getComment(this.commentIDs[q]);
if(r)
o[p]=r;}



return o;};
i.prototype.

$UFIToplevelStreamedCommentList_reset=function(){
var j=this.commentIDs;
this.commentIDs=[];
return j;};
i.prototype.

hasComment=function(j){
for(var k=0;k<this.commentIDs.length;++k)
if(this.commentIDs[k]===j.id)
return true;


return false;};
i.prototype.

addCommentIDs=
function(j,
k,
l){




};i.prototype.

setClientHasAll=function(j){

};i.prototype.

addOrUpdateComment=
function(j){

var k=arguments.length<=1||arguments[1]===undefined?null:arguments[1],
l=j.clientid;
if(l&&c('ClientIDs').isExistingClientID(l)){




for(var m=0;m<this.commentIDs.length;++m)
if(this.commentIDs[m]===l){

this.commentIDs[m]=j.id;

if(c('UFIConfig').logCommentPost)
c('UFICommentLogger').logNewCommentReceived
(l,
Date.now());}}else




if(k||j.islocal){

if(this.hasComment(j))
return;




this.commentIDs.push(j.id);
if(k!==c('UFIStreamingStateType').ON_DEMAND)


this.totalCommentCount+=1;}



if(this.commentIDs.length>50)


this.commentIDs.shift();

c('UFICentralUpdates').didUpdateFeedback(this.feedbackTargetID);};
i.prototype.

deleteComment=function(j){
this.deletedCount+=1;
var k=[];
for(var l=0;l<this.commentIDs.length;++l){
var m=this.commentIDs[l];
if(m!==j)
k.push(m);}


this.commentIDs=k;};
i.prototype.

updateCommentCount=function(j){
this.totalCommentCount=j;



this.deletedCount=0;};
i.

getCommentList=
function(j){

var k=arguments.length<=1||arguments[1]===undefined?i.GLOBAL_ID:arguments[1],
l=
i.$UFIToplevelStreamedCommentList_streamedCommentLists.get
(j);

if(!l){
l=new (c('Map'))();
i.$UFIToplevelStreamedCommentList_streamedCommentLists.set
(j,
l);}


var m=l.get(k);
if(!m){
m=new i(j);
l.set(k,m);}

return m;};
i.

getExistingCommentList=
function(j){

var k=arguments.length<=1||arguments[1]===undefined?i.GLOBAL_ID:arguments[1],
l=
i.$UFIToplevelStreamedCommentList_streamedCommentLists.get
(j);

if(!l)
return null;

return l.get(k);};
i.

getAllExistingCommentLists=
function(j){

var k=
i.$UFIToplevelStreamedCommentList_streamedCommentLists.get
(j);

if(!k)
return [];

return Array.from(k.values());};
i.






$UFIToplevelStreamedCommentList_queueCommentsToDelete=
function(j,
k){

var l=
i.$UFIToplevelStreamedCommentList_feedbackTargetIDToDeletedComments.get
(j);

if(l){
k.forEach(function(n){
l[n]=true;});

return;}


var m={};
k.forEach(function(n){
m[n]=true;});

i.$UFIToplevelStreamedCommentList_feedbackTargetIDToDeletedComments.set
(j,
m);};

i.

resetCommentList=
function(j){

var k=arguments.length<=1||arguments[1]===undefined?i.GLOBAL_ID:arguments[1],
l=i.getExistingCommentList
(j,
k);


if(!l)
return;


i.$UFIToplevelStreamedCommentList_queueCommentsToDelete
(j,
l.$UFIToplevelStreamedCommentList_reset());};

i.

resetAllCommentLists=function(j){
var k=
i.getAllExistingCommentLists
(j);


if(k.length===0)
return;


k.forEach(function(m){
i.$UFIToplevelStreamedCommentList_queueCommentsToDelete
(j,
m.$UFIToplevelStreamedCommentList_reset());});



var l=
i.$UFIToplevelStreamedCommentList_feedbackTargetIDToDeletedComments.get
(j);

if(l){
i.$UFIToplevelStreamedCommentList_feedbackTargetIDToDeletedComments['delete']
(j);

c('UFIComments').resetComments(l);}};

i.GLOBAL_ID='GLOBAL_ID';i.$UFIToplevelStreamedCommentList_streamedCommentLists=new (c('Map'))();i.$UFIToplevelStreamedCommentList_feedbackTargetIDToDeletedComments=new (c('Map'))();


c('UFICentralUpdates').subscribe('update-actions',function(j,k){
if(!k.actions)
return;


k.actions.forEach(function(l){
if(l.actiontype!==c('UFIConstants').UFIActionType.DELETE_COMMENT)
return;


var m=c('UFIComments').getComment(l.commentid),

n=m.id,
o=m.ftentidentifier,
p=m.parentcommentid;

if(p)
return;



if(l.islocal||
m.status!==c('UFIConstants').UFIStatus.DELETED&&
m.status!==c('UFIConstants').UFIStatus.FAILED_ADD)


i.
getAllExistingCommentLists(o).
forEach(function(q){return q.deleteComment(n);});});});




c('UFICentralUpdates').subscribe('update-comments',function(j,k){
if(!k.comments)

return;


var l=k.targetufiinstanceid;

k.comments.forEach(function(m){
if(m.parentcommentid)
return;


if(l){


i.
getCommentList(m.ftentidentifier,l).
addOrUpdateComment(m,k.streamingstate);}else 









i.
getAllExistingCommentLists(m.ftentidentifier).
forEach(function(n){
n.addOrUpdateComment(m,k.streamingstate);});});});





c('UFICentralUpdates').subscribe('update-feedback',function(j,k){
var l=k.feedbacktarget?
k.feedbacktarget:
k.feedbacktargets&&k.feedbacktargets[0];
if(!l)
return;

i.getAllExistingCommentLists
(l.entidentifier).
forEach(function(m){
return (m.updateCommentCount(l.commentcount));});});



f.exports=i;}),6);

/** js/clientufi/models/UFIToplevelPagedCommentList.js */








__d('UFIToplevelPagedCommentList',['UFICentralUpdates','UFIComments','UFIConstants','UFIReplyCommentList','UFIToplevelPagedCommentListImpl','UFIToplevelStreamedCommentList','WebCommentViewOption'],(function a(b,c,d,e,f,g){

'use strict';












var h=



{},

i=









{getCommentList:function k
(l,
m){

if(!h[l])
h[l]={};

if(!h[l][m]){
var n=
new (c('UFIToplevelPagedCommentListImpl'))(l,m),






o=
i.
getCommentListsForFeedbackTargetID(l);

if(o.length)
n.updateCommentCount
(o[0].getCommentCount());



h[l][m]=
n;}


return h[l][m];},









getCommentListsForFeedbackTargetID:function k
(l){

var m=[],

n=h[l]||{};
for(var o in n)

m.push(n[o]);


return m;},






getPagedCommentCountForFeedbackTargetID:function k
(l){

var m=i.
getCommentListsForFeedbackTargetID(l);
return m.length?
m[0].getCommentCount():
null;},











getDisplayedCommentCountForFeedbackTargetID_UNSAFE:function k
(l){

var m=
i.
getCommentListsForFeedbackTargetID(l),
n=m.length?
m[0].getDisplayedCommentCount():
null,

o=
c('UFIToplevelStreamedCommentList').getAllExistingCommentLists
(l),

p=o.length?
o[0].getDisplayedCommentCount():
null;

if(n===null&&p===null)
return null;


return Math.max(n||0,p||0);},








resetCommentListsForFeedbackTargetID:function k(l){
if(!h[l])
return;


var m={};
for(var n in h[l]){

var o=h[l][n],
p=o.reset();
for(var q in p){
var r=p[q];
m[r]=true;}}


c('UFIComments').resetComments(m);},









resetCommentListsWithContext:function k
(l,
m){

var n=h[l];

if(!n)
return;


var o={};
for(var p in n){

var q=n[p];
q.actorID=m;

var r=q.reset();
for(var s in r){
var t=r[s];
o[t]=true;
c('UFIReplyCommentList').resetWithContext
(l,
t,
m,

p);}}



c('UFIComments').resetComments(o);}};



function j(k){
var l=c('UFIComments').getComment(k.commentid),

m=l.id,
n=l.ftentidentifier,
o=l.parentcommentid;

if(o)
return;


if(k.islocal||
l.status!==c('UFIConstants').UFIStatus.DELETED&&
l.status!==c('UFIConstants').UFIStatus.FAILED_ADD)
i.
getCommentListsForFeedbackTargetID(n).
forEach(function(p){
p.deleteComment(m);});}




c('UFICentralUpdates').subscribe('update-actions',function(k,l){
if(l.actions&&l.actions.length)
for(var m=0;m<l.actions.length;m++){
var n=l.actions[m];
switch(n.actiontype){
case c('UFIConstants').UFIActionType.DELETE_COMMENT:
j(n);
break;}}});





c('UFICentralUpdates').subscribe('update-comment-lists',function(k,l){
var m=l.commentlists;

if(m&&
m.comments&&
Object.keys(m).length)

for(var n in m.comments)
for(var o in m.comments[n]){
var p=
m.comments[n][o],

q=i.getCommentList
(String(n),

o);

q.addCommentIDs
(p.range.offset,
p.range.length,
p.values);

q.setClientHasAll
(!!p.forcenotpageable);}});






c('UFICentralUpdates').subscribe('update-comments',function(k,l){
if(l.comments&&l.comments.length)
l.comments.forEach(function(m){
if(m.parentcommentid)
return;


var n=m.ftentidentifier;

i.
getCommentListsForFeedbackTargetID(String(n)).
forEach(function(o){
o.addOrUpdateComment(m);});});});





c('UFICentralUpdates').subscribe('update-feedback',function(k,l){var m,
n=l.feedbacktarget?
l.feedbacktarget:
l.feedbacktargets&&l.feedbacktargets[0];

if(n)(function(){
var o=n.entidentifier,
p=n.defaultcommentorderingmode,

q={};

if(p)
q[p]=true;


if(n.orderingmodes)
n.orderingmodes.forEach(function(s){

if(s.value===
c('WebCommentViewOption').LIVE_STREAMING)



return;

q[s.value]=true;});



for(var r in q)
i.

getCommentList(String(o),String(r)).
updateCommentCount(n.commentcount);})
();});



f.exports=i;}),6);

/** www/__virtual__/x/XConstituencyTitleEditVisibilityDialogController.js */



__d("XConstituencyTitleEditVisibilityDialogController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/constituency_title\/edit_comment_visibility\/",{ft_id:{type:"FBID",required:true},action_type:{type:"Enum",required:true,enumType:1},source:{type:"Enum",required:true,enumType:1},comment_id:{type:"String"},__asyncDialog:{type:"Int"}});}),

null);

/** www/__virtual__/x/XConstituencyTitleEnableController.js */



__d("XConstituencyTitleEnableController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/constituency_title\/enable\/",{});}),

null);

/** www/__virtual__/x/XUFIActorChangeController.js */



__d("XUFIActorChangeController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/actor\/change\/",{});}),

null);

/** www/__virtual__/x/XUFIAddCommentController.js */



__d("XUFIAddCommentController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/add\/comment\/",{});}),

null);

/** www/__virtual__/x/XUFICommentAcceptAnswerController.js */



__d("XUFICommentAcceptAnswerController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/comment\/answer\/accept\/",{});}),

null);

/** www/__virtual__/x/XUFICommentLikeController.js */



__d("XUFICommentLikeController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/comment\/like\/",{});}),

null);

/** www/__virtual__/x/XUFIDeleteCommentController.js */



__d("XUFIDeleteCommentController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/delete\/comment\/",{});}),

null);

/** www/__virtual__/x/XUFIEditCommentController.js */



__d("XUFIEditCommentController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/edit\/comment\/",{});}),

null);

/** www/__virtual__/x/XUFIHideCommentController.js */



__d("XUFIHideCommentController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/hide\/comment\/",{});}),

null);

/** www/__virtual__/x/XUFILikeController.js */



__d("XUFILikeController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/like\/",{});}),

null);

/** www/__virtual__/x/XUFITranslateCommentController.js */



__d("XUFITranslateCommentController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ufi\/translate\/comment\/",{});}),

null);

/** js/clientufi/models/UFIUserActions.js */






__d('UFIUserActions',['errorCode','fbt','ActorURI','AsyncRequest','AsyncResponse','ChannelClientID','ClientIDs','CommentPostedLiveState','ImmutableObject','UFICentralUpdates','UFIToplevelPagedCommentList','UFIToplevelStreamedCommentList','UFIComments','UFICommentLogger','UFIConfig','UFIConstants','UFIFeedbackTargets','UFIReactionUserActions','UFIUserActionUtils','UFIVideoPlayerRegistry','MercuryServerDispatcher','UnicodeBidi','XConstituencyTitleEditVisibilityDialogController','XConstituencyTitleEnableController','XUFIActorChangeController','XUFIAddCommentController','XUFICommentAcceptAnswerController','XUFICommentLikeController','XUFIDeleteCommentController','XUFIEditCommentController','XUFIHideCommentController','XUFILikeController','XUFITranslateCommentController','ifRequired'],(function a(b,c,d,e,f,g,h,i){

'use strict';






































var j=
{BAN:'ban',
UNDO_BAN:'undo_ban'},


k=

{changeActor:function ga(ha,ia){
c('UFIFeedbackTargets').getFeedbackTarget(ha,function(ja){


c('UFIToplevelPagedCommentList').resetCommentListsWithContext
(ha,
ia);



c('UFIToplevelStreamedCommentList').resetAllCommentLists
(ha);



c('UFICentralUpdates').inform('actor-changed',{actorID:ia});

var ka=
{from_actor_id:ja.actorforpost,
ft_ent_identifier:ha};

ka[c('ActorURI').PARAMETER_ACTOR]=ia;
var la=c('XUFIActorChangeController').getURIBuilder().getURI();
c('MercuryServerDispatcher').trySend(la,ka);});},





changeCommentLike:function ga(ha,ia,ja){
var ka=c('UFIComments').getComment(ha);
if(ka.hasviewerliked!=ia){
var la=c('UFIUserActionUtils').trackingData(ja.target),
ma=ia?1:-1,
na=
{commentid:ha,
actiontype:c('UFIConstants').UFIActionType.COMMENT_LIKE,
viewerliked:ia,
likecount:(ka.likecount||0)+ma};




c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{actions:[na]});


c('UFIFeedbackTargets').getFeedbackTarget
(ka.ftentidentifier,
function(oa){
var pa={};
pa[c('ActorURI').PARAMETER_ACTOR]=oa.actorforpost;

var qa=c('XUFICommentLikeController').getURIBuilder().getURI();
c('MercuryServerDispatcher').trySend
(qa,babelHelpers['extends']
({comment_id:ha,
legacy_id:ka.legacyid,
like_action:ia,
ft_ent_identifier:ka.ftentidentifier,
source:ja.source,


client_id:c('ClientIDs').getNewClientID(),
session_id:c('ChannelClientID').getID()},

la,
pa));});}},







_getAttachment:function ga(ha){
return ha;},


_getLocalComment:function ga
(ha,
ia,
ja,
ka,
la,
ma){

var na=c('ClientIDs').getNewClientID(),

oa=
c('UnicodeBidi').isDirectionLTR(ja)?'ltr':'rtl',

pa=this._getAttachment(la.attachedsticker);




return {ftentidentifier:ia,
body:
{text:ja,
dir:oa},

author:ha.actorforpost,
id:na,
islocal:true,
ufiinstanceid:la.ufiinstanceid,
likecount:0,
hasviewerliked:false,
parentcommentid:la.replyid,
replycommentparentid:la.replycommentparentid,
attachment:pa,
photo_comment:la.attachedphoto,
video_comment:la.attachedvideo,
timestamp:
{time:Math.floor(Date.now()/1000),
text:i._(["a few seconds ago","38e44a3e5dcc3861b18fc5280f589e74"])},





photoTextTagID:la.photoTextTagID,
isPhotoTag:la.isPhotoTag,
photoTagX:la.photoTagX,
photoTagY:la.photoTagY,
videoTimeOffset:ma,
postedLiveState:la.islivestreaming?
c('CommentPostedLiveState').LIVE:
c('CommentPostedLiveState').ON_DEMAND};},















addComment:function ga
(ha,
ia,
ja,
ka){
c('UFIFeedbackTargets').getFeedbackTarget(ha,function(la){
var ma=this.createComment
(ha,
ia,
ja,
ka);


if(!ma)
return;


var na=
{actiontype:c('UFIConstants').UFIActionType.SUBSCRIBE_ACTION,
actorid:la.actorforpost,
hasviewersubscribed:true,
entidentifier:la.entidentifier},


oa=
{actiontype:c('UFIConstants').UFIActionType.ADD_COMMENT_ACTION,
feedbackfbid:la.targetfbid};


c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{comments:[ma],actions:[na,oa]});}.

bind(this));},
















createComment:function ga
(ha,
ia,
ja,
ka){

var la=c('UFIFeedbackTargets').getFeedbackTargetIfExists
(ha);


if(!la.actorforpost)

return null;


var ma=null;
if(ka.isBroadcasterUFI){
ma=c('ifRequired')
('LiveVideoBroadcastBroadcastStore',
function(qa){
return (qa.getCurrentBroadcastTime());});}else


if(ka.fluentContentToken&&

(ka.isLiveVOD||ka.islivestreaming||


ka.enableVODCommentTimestamps)){


var na=c('UFIVideoPlayerRegistry').
getAvailableVideoPlayerControllerTimeForElement
(ka.target,
ka.fluentContentToken);

if(ka.isLiveVOD||ka.islivestreaming){
ma=na;}else{



var oa=c('UFIVideoPlayerRegistry').
getAvailableVideoPlayerControllerForElement
(ka.target,
ka.fluentContentToken);

if(oa!=null&&na>0&&
na<Math.floor(oa.getPlaybackDuration()))
ma=na;}}




var pa=this._getLocalComment
(la,
ha,
ia,
ja,
ka,
ma);


this._sendCommentToServer
(ha,
la.actorforpost,
ia,
ja,
ka,
pa.id,
ma);


return pa;},


_sendCommentToServer:function ga
(ha,
ia,
ja,
ka,
la,
ma,
na){

var oa=null;
if(la.reply_fbid){
oa=la.reply_fbid;}else
if(la.replyid)
oa=c('UFIComments').getComment(la.replyid).fbid;


var pa;
if(c('UFIConfig').logCommentPost)
c('UFICommentLogger').logNewCommentPost
(ma,
la.timestamp,

{has_photo:!!la.attachedphoto,
has_video:!!la.attachedvideo,
has_sticker:!!la.attachedsticker,
is_reply:!!la.replyid});



var qa={};
qa[c('ActorURI').PARAMETER_ACTOR]=ia;
var ra=c('XUFIAddCommentController').getURIBuilder().getURI();
c('MercuryServerDispatcher').trySend(ra,babelHelpers['extends']
({ft_ent_identifier:ha,
comment_text:ka,
source:la.source,
client_id:ma,
session_id:c('ChannelClientID').getID(),
reply_fbid:oa,
parent_comment_id:la.parent_comment_id||la.replyid,
reply_comment_parent_id:la.replycommentparentid,
rootid:la.rootid,
clp:pa,

attached_sticker_fbid:
la.attachedsticker?la.attachedsticker.fbid:0,

attached_photo_fbid:
la.attachedphoto?la.attachedphoto.fbid:0,

attached_video_fbid:
la.attachedvideo?la.attachedvideo.fbid:0,

attached_share_url:la.attachedshareurl,

feedback_referrer:la.feedbackReferrer,

feed_context:la.feedcontext,
video_time_offset:na,
is_live_streaming:la.islivestreaming,
is_markdown:la.isMarkdown},
c('UFIUserActionUtils').trackingData(la.target),
qa,
{photo_text_tag_id:la.photoTextTagID,
is_private:la.isPrivate,
is_photo_tag:la.isPhotoTag,
photo_fbid:la.photoFBID,
photo_tag_x:la.photoTagX,
photo_tag_y:la.photoTagY}));},



_hasCommentTextChanged:function ga(ha,ia){
return ha.body&&ha.body.text!=ia;},


_hasCommentPhotoChanged:function ga(ha,ia){
return (ha||ia)&&
!(ha&&ia)||
ha&&ia&&
ha.fbid!=ia.fbid;},


_hasCommentVideoChanged:function ga(ha,ia){
return (ha||ia)&&
!(ha&&ia)||
ha&&ia&&
ha.fbid!=ia.fbid;},


_hasCommentStickerChanged:function ga(ha,ia){
return (ha||ia)&&
!(ha&&ia)||
ha&&ha.type=='sticker'&&ia&&
ha.fbid!=ia.fbid;},


_hasCommentShareURLChanged:function ga(ha,ia){
if(ia){
return true;}else 

return ha&&ha.type=='share';},



editComment:function ga(ha,ia,ja,ka){
var la=c('UFIUserActionUtils').trackingData(ka.target),
ma=c('UFIComments').getComment(ha),
na=
this._hasCommentTextChanged(ma,ia)||
this._hasCommentPhotoChanged
(ma.photo_comment,
ka.attachedPhoto)||
this._hasCommentStickerChanged
(ma.attachment,
ka.attachedSticker)||
this._hasCommentVideoChanged
(ma.video_comment,
ka.attachedVideo)||
this._hasCommentShareURLChanged
(ma.attachment,
ka.attachedShareURL);

ma=c('ImmutableObject').set(ma,
{status:c('UFIConstants').UFIStatus.PENDING_EDIT,
body:{text:ia},
editnux:null,
attachment:ka.attachedSticker,
photo_comment:ka.attachedPhoto,
video_comment:ka.attachedVideo});

if(na)


ma=c('ImmutableObject').set(ma,
{originalTimestamp:ma.timestamp.time,
timestamp:
{time:Math.floor(Date.now()/1000),
text:i._(["a few seconds ago","38e44a3e5dcc3861b18fc5280f589e74"])}});







c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{comments:[ma]});


c('UFIFeedbackTargets').getFeedbackTarget(ma.ftentidentifier,function(oa){
var pa={};
pa[c('ActorURI').PARAMETER_ACTOR]=oa.actorforpost;
var qa=c('XUFIEditCommentController').getURIBuilder().getURI();

c('MercuryServerDispatcher').trySend(qa,babelHelpers['extends']
({ft_ent_identifier:ma.ftentidentifier,
comment_text:ja,
source:ka.source,
comment_id:ma.id,
parent_comment_id:ma.parentcommentid,

attached_sticker_fbid:
ka.attachedSticker?ka.attachedSticker.fbid:0,

attached_photo_fbid:
ka.attachedPhoto?ka.attachedPhoto.fbid:0,

attached_video_fbid:
ka.attachedVideo?ka.attachedVideo.fbid:0,

attached_share_url:
ka.attachedShareURL},

la,
pa));});},




translateComments:function ga
(ha,
ia,
ja,
ka){

var la=c('XUFITranslateCommentController').getURIBuilder().getURI();
c('MercuryServerDispatcher').trySend(la,
{ft_ent_identifier:ha,
comment_ids:ia,
source:ka.source,
trigger:ja});},





setHideAsSpam:function ga(ha,ia,ja){
var ka=c('UFIUserActionUtils').trackingData(ja.target),
la=c('UFIComments').getComment(ha),

ma=
{commentid:ha,
actiontype:c('UFIConstants').UFIActionType.COMMENT_SET_SPAM,
shouldHideAsSpam:ia};


c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{actions:[ma]});


c('UFIFeedbackTargets').getFeedbackTarget(la.ftentidentifier,function(na){
var oa={};
oa[c('ActorURI').PARAMETER_ACTOR]=na.actorforpost;
var pa=c('XUFIHideCommentController').getURIBuilder().getURI();
c('MercuryServerDispatcher').trySend(pa,babelHelpers['extends']
({comment_id:ha,
spam_action:ia,
ft_ent_identifier:la.ftentidentifier,
source:ja.source},
ka,
oa));});},




removeComment:function ga(ha,ia){
var ja=c('UFIUserActionUtils').trackingData(ia.target),
ka=c('UFIComments').getComment(ha),

la=
{actiontype:c('UFIConstants').UFIActionType.DELETE_COMMENT,
commentid:ha,
islocal:true,
oneclick:ia.oneclick};


c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{actions:[la]});


c('UFIFeedbackTargets').getFeedbackTarget(ka.ftentidentifier,function(ma){
var na={};
na[c('ActorURI').PARAMETER_ACTOR]=ma.actorforpost;

var oa=c('XUFIDeleteCommentController').getURIBuilder().getURI();
c('MercuryServerDispatcher').trySend(oa,babelHelpers['extends']
({comment_id:ka.id,
comment_legacyid:ka.legacyid,
ft_ent_identifier:ka.ftentidentifier,
one_click:ia.oneclick,
source:ia.source,


client_id:c('ClientIDs').getNewClientID()},

ja,
na));});},




changeAcceptedAnswer:function ga
(ha,
ia){

c('MercuryServerDispatcher').trySend
(w,

{ft_ent_identifier:ha.id,
do_accept:ia});},




banUser:function ga(ha,ia,ja,ka){
var la=ja?j.BAN:j.UNDO_BAN;

c('MercuryServerDispatcher').trySend('/ajax/ufi/ban_user.php',
{page_id:ia,
commenter_id:ha.author,
action:la,
comment_id:ha.id,
client_side:true});},



changeSubscribe:function ga(ha,ia,ja){
c('UFIFeedbackTargets').getFeedbackTarget(ha,function(ka){
var la=c('UFIUserActionUtils').trackingData(ja.target);

if(ka.hasviewersubscribed!==ia){
var ma=
{actiontype:c('UFIConstants').UFIActionType.SUBSCRIBE_ACTION,
actorid:ka.actorforpost,
hasviewersubscribed:ia,
entidentifier:ha};


c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{actions:[ma]});


var na={};
na[c('ActorURI').PARAMETER_ACTOR]=ka.actorforpost;

c('MercuryServerDispatcher').trySend('/ajax/ufi/subscribe.php',babelHelpers['extends']
({subscribe_action:ia,
ft_ent_identifier:ha,
source:ja.source,
client_id:c('ClientIDs').getNewClientID(),
rootid:ja.rootid,
comment_expand_mode:ja.commentexpandmode},
la,
na));}});},





fetchSpamComments:function ga
(ha,
ia,
ja,
ka){

c('MercuryServerDispatcher').trySend('/ajax/ufi/id_comment_fetch.php',
{ft_ent_identifier:ha,
viewas:ka,
comment_ids:ia,
parent_comment_id:ja,
source:null});},



hideConstituentTitle:function ga
(ha){

var ia=
c('XConstituencyTitleEnableController').getURIBuilder().getURI();
new (c('AsyncRequest'))(ia).
setMethod('POST').
setData
({ft_id:ha.ftentidentifier,
enable:false,
source:'comment_edit_menu',
comment_id:ha.id}).
send();},


showConstituentTitle:function ga
(ha){

var ia=
c('XConstituencyTitleEditVisibilityDialogController').getURIBuilder().
setFBID('ft_id',ha.ftentidentifier).
setEnum('action_type','comment_show_constituent_title').
setEnum('source','comment_edit_menu').
setString('comment_id',ha.id).
getURI();
new (c('AsyncRequest'))(ia).
send();},


removePreview:function ga(ha,ia){
var ja=c('UFIUserActionUtils').trackingData(ia.target),
ka=
{commentid:ha.id,
actiontype:c('UFIConstants').UFIActionType.REMOVE_PREVIEW};



c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{actions:[ka]});


c('MercuryServerDispatcher').trySend('/ajax/ufi/remove_preview.php',babelHelpers['extends']
({comment_id:ha.id,
ft_ent_identifier:ha.ftentidentifier,
source:ia.source},
ja));}};





function l(ga){
c('AsyncResponse').defaultErrorHandler(ga);}


function m(ga){
var ha=ga.request.data;

c('AsyncResponse').defaultErrorHandler(ga);


var ia=ha.client_id||ha.comment_id,
ja=c('UFIComments').getComment(ia),


ka=ja.status===c('UFIConstants').UFIStatus.PENDING_EDIT?
c('UFIConstants').UFIStatus.FAILED_EDIT:
c('UFIConstants').UFIStatus.FAILED_ADD;

ja=c('ImmutableObject').setDeep(ja,
{status:ka,
allowRetry:n(ga),
body:
{mentionstext:ha.comment_text,
mentionsphoto:ja.photo_comment,
mentionsvideo:ja.video_comment}});



c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{comments:[ja]});}



function n(ga){
var ha=ga.getError();



if(ga.isBlockedAction())
return false;



if(ga.silentError)
return true;




if(ha===1357012||
ha===1357006)
return false;


return true;}


function o(ga){
var ha=ga.request.data,

ia=ha.comment_id,
ja=c('UFIComments').getComment(ia);


ja=c('ImmutableObject').set(ja,
{status:ja.priorstatus||null,
priorstatus:undefined});


c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{comments:[ja]});}



function p(ga){
var ha=ga.request.data,

ia=ha.comment_id,
ja=c('UFIComments').getComment(ia);

if(ha.like_action===ja.hasviewerliked){

var ka=ja.hasviewerliked?-1:1,
la=
{commentid:ia,
actiontype:c('UFIConstants').UFIActionType.COMMENT_LIKE,
viewerliked:!ja.hasviewerliked,
likecount:(ja.likecount||0)+ka};


c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{actions:[la]});}



c('AsyncResponse').defaultErrorHandler(ga);}


function q(ga){
var ha=ga.request.data,
ia=ha.ft_ent_identifier;

c('UFIFeedbackTargets').getFeedbackTarget(ia,function(ja){
if(ja.hasviewerliked===ha.like_action){
var ka=ja.hasviewerliked?-1:1,
la=
{actiontype:c('UFIConstants').UFIActionType.LIKE_ACTION,
actorid:ja.actorforpost,
hasviewerliked:!ja.hasviewerliked,
likecount:(ja.likecount||0)+ka,
entidentifier:ia,
likesentences:
{current:ja.likesentences.alternate,
alternate:ja.likesentences.current}};



c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{actions:[la]});}});




c('AsyncResponse').defaultErrorHandler(ga);}


function r(ga){
var ha=ga.request.data,
ia=ha.ft_ent_identifier;

c('UFIFeedbackTargets').getFeedbackTarget(ia,function(ja){
if(ja.hasviewersubscribed===ha.subscribe_action){
var ka=
{actiontype:c('UFIConstants').UFIActionType.SUBSCRIBE_ACTION,
actorid:ja.actorforpost,
hasviewersubscribed:!ja.hasviewersubscribed,
entidentifier:ia};


c('UFICentralUpdates').handleUpdate
(c('UFIConstants').UFIPayloadSourceType.USER_ACTION,
{actions:[ka]});}});




c('AsyncResponse').defaultErrorHandler(ga);}



var s=
{'/ajax/ufi/ban_user.php':
{mode:c('MercuryServerDispatcher').IMMEDIATE,
error_handler:l},

'/ajax/ufi/subscribe.php':
{mode:c('MercuryServerDispatcher').BATCH_CONDITIONAL,
error_handler:r,
batch_if:ea,
batch_function:fa},

'/ajax/ufi/id_comment_fetch.php':
{mode:c('MercuryServerDispatcher').IMMEDIATE},

'/ajax/ufi/remove_preview.php':
{mode:c('MercuryServerDispatcher').IMMEDIATE},

'/profile/broadcast_request/async/add_composer_token/':
{mode:c('MercuryServerDispatcher').IMMEDIATE}},



t=c('XUFIAddCommentController').getURIBuilder().getURI();
s[t]=
{mode:c('MercuryServerDispatcher').IMMEDIATE,
error_handler:m};


var u=c('XUFIDeleteCommentController').getURIBuilder().getURI();
s[u]=
{mode:c('MercuryServerDispatcher').IMMEDIATE,
error_handler:o};


var v=c('XUFICommentLikeController').getURIBuilder().getURI();
s[v]=
{mode:c('MercuryServerDispatcher').BATCH_CONDITIONAL,
error_handler:p,
batch_if:ca,
batch_function:fa};


var w=
c('XUFICommentAcceptAnswerController').getURIBuilder().getURI();
s[w]=
{mode:c('MercuryServerDispatcher').IMMEDIATE};


var x=c('XUFIHideCommentController').getURIBuilder().getURI();
s[x]=
{mode:c('MercuryServerDispatcher').IMMEDIATE,
error_handler:o};


var y=c('XUFILikeController').getURIBuilder().getURI();
s[y]=
{mode:c('MercuryServerDispatcher').BATCH_CONDITIONAL,
error_handler:q,
batch_if:da,
batch_function:fa};


var z=c('XUFIEditCommentController').getURIBuilder().getURI();
s[z]=
{mode:c('MercuryServerDispatcher').IMMEDIATE,
error_handler:m};


var aa=
c('XUFITranslateCommentController').getURIBuilder().getURI();
s[aa]=
{mode:c('MercuryServerDispatcher').IMMEDIATE};


var ba=c('XUFIActorChangeController').getURIBuilder().getURI();
s[ba]=
{mode:c('MercuryServerDispatcher').IMMEDIATE};


c('MercuryServerDispatcher').registerEndpoints(s);

function ca(ga,ha){
return ga&&
ga.ft_ent_identifier==ha.ft_ent_identifier&&
ga.comment_id==ha.comment_id;}


function da(ga,ha){
return ga&&
ga.ft_ent_identifier==ha.ft_ent_identifier;}


function ea(ga,ha){
return ga&&
ga.ft_ent_identifier==ha.ft_ent_identifier;}



function fa(ga,ha){
return ha;}


f.exports=babelHelpers['extends']({},
k,c('UFIReactionUserActions'));}),null);

/** js/clientufi/stores/UFISpamStore.js */






__d('UFISpamStore',['FluxReduceStore','UFIDispatcherBase','UFIStoryActionType','UFIUserActions'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits











(j,c('FluxReduceStore'));i=h&&h.prototype;j.prototype.

getInitialState=function(){
return {};};
j.prototype.

areEqual=function(k,l){
return Object.keys(k).length===Object.keys(l).length;};
j.prototype.

reduce=function(k,l){
switch(l.type){
case c('UFIStoryActionType').SPAM_FETCHED:

k=babelHelpers['extends']({},k);

l.commentIDs.forEach(function(m){
return (k[m]=true);});


c('UFIUserActions').fetchSpamComments
(l.ftentidentifier,
l.commentIDs,
l.parentCommentID,
l.viewas);


break;}

return k;};
function j(){h.apply(this,arguments);}


f.exports=new j(c('UFIDispatcherBase'));}),null);
