if (self.CavalryLogger) { CavalryLogger.start_js(["UUCDJ"]); }

/** __static_js_modules__/instantgamecontexttype.js */




__d("InstantGameContextType",[],(function a(b,c,d,e,f,g){

f.exports={THREAD:"THREAD",GROUP:"GROUP",STORY:"STORY",MATCH:"MATCH",SOLO:"SOLO"};}),

null);

/** __static_js_modules__/messagesharetype.js */




__d("MessageShareType",[],(function a(b,c,d,e,f,g){

f.exports={IMAGE:"image",PLATFORM_SHARE_CTA:"platform_share_CTA"};}),

null);

/** __static_js_modules__/messengerroomprivacymode.js */




__d("MessengerRoomPrivacyMode",[],(function a(b,c,d,e,f,g){

f.exports={WHITELISTED_MODE:0,PUBLIC_MODE:1};}),

null);

/** js/ads/core/utils/wrapNullableForReact.js */







__d('wrapNullableForReact',[],(function a(b,c,d,e,f,g){
'use strict';




function h(i){
if(i!=null){
return i;}else 

return undefined;}



f.exports=h;}),null);

/** js/mercury/clients/messenger/MessengerContactAdapters.js */






__d('MessengerContactAdapters',['immutable','ImmutableObject','MercuryTypeaheadConstants'],(function a(b,c,d,e,f,g){







var h=
{fromSearchableEntry:function i(j){
var k=j.getType(),
l=
{alias:null,
isMessengerUser:null,
isWorkUser:null,
participants:null,
photo:j.getPhoto(),
subtitle:j.getSubtitle(),
thread:null,
title:j.getTitle(),
type:k,
uid:j.getUniqueID()},

m=j.getAuxiliaryData();
if(m)
if(k===c('MercuryTypeaheadConstants').THREAD_TYPE){
l.thread=new (c('ImmutableObject'))(m.thread);
l.participants=c('immutable').Map().withMutations(function(n){
m.participantsToRender.forEach(function(o){
n.set(o.id,o);});});}else{



l.isMessengerUser=m.isMessengerUser;
l.isWorkUser=m.isWorkUser;
l.alias=m.alias;}


return new (c('ImmutableObject'))(l);},


fromMercuryParticipant:function i(j){
return new (c('ImmutableObject'))
({alias:j.alias,
uid:j.id,
photo:j.image_src,
title:j.name,
subtitle:'',
type:j.type,
isMessengerUser:j.is_messenger_user,
isWorkUser:j.is_work_user,
href:j.href,
timezone:j.timezone});}};




f.exports=h;}),null);

/** js/mercury/clients/messenger/MessengerGraphQLTypeaheadAdapter.js */






__d('MessengerGraphQLTypeaheadAdapter',['MercuryIDs','MercuryParticipantTypes','MercuryTypeaheadConstants','RelayQL','SearchableEntry'],(function a(b,c,d,e,f,g){

'use strict';







function h(j){
return c('MercuryIDs').isValid(j)?
j:
c('MercuryIDs').getParticipantIDFromUserID(j);}


var i=

{convertProfileToEntry:function j(k){
if(!k||!k.id||!k.name||k.is_memorialized)
return null;

var l=c('MercuryParticipantTypes').NON_FRIEND;

if(k.is_viewer_friend||
k.messenger_contact.is_on_viewer_contact_list||
k.is_viewer_coworker&&k.viewer_affinity>0){

l=c('MercuryParticipantTypes').FRIEND;}else
if(k.is_viewer_coworker)
l=c('MercuryParticipantTypes').FB4C;

return new (c('SearchableEntry'))
({uniqueID:k.id,
title:k.name,
type:l,
photo:k.profile_picture&&k.profile_picture.uri,
uri:k.url,
auxiliaryData:
{isMessengerUser:k.is_messenger_user,
isWorkUser:k.is_work_user},

order:-k.viewer_affinity});},



convertPageToEntry:function j(k,l){
if(!k||!k.id||!k.name)
return null;

if(k.instant_game_info)
return this.convertGameToEntry(k);

return new (c('SearchableEntry'))
({uniqueID:k.id,
title:k.name,
type:l,
photo:k.profile_picture&&k.profile_picture.uri,
uri:k.url,
auxiliaryData:
{isMessengerUser:k.is_messenger_user,
isWorkUser:k.is_work_user},

order:0});},



convertGameToEntry:function j(k,l){
if(!k||!k.id||!k.name||!k.instant_game_info)
return null;

return new (c('SearchableEntry'))
({uniqueID:k.id,
title:k.name,
type:c('MercuryTypeaheadConstants').GAME_TYPE,
photo:k.instant_game_info&&k.instant_game_info.icon_uri,
uri:k.instant_game_info&&k.instant_game_info.game_uri,
order:0});},



convertGroupToEntry:function j(k,l){
if(!k||!k.thread_key||!k.is_group_thread)
return null;


var m=k.thread_key.thread_fbid;
if(!m)
return null;


var n=k.image&&k.image.uri,
o=k.other_participants.edges.map
(function(s){return s.node.messaging_actor.name;}).
join(', '),
p=k.name,
q=null;
if(!p){
p=o;}else 

q=o;

if(!p)
return null;


var r={};
r.thread=
{thread_id:m,
other_user_fbid:null,
image_src:n,
participants:k.other_participants.edges.map
(function(s){return h(s.node.messaging_actor.id);})};


r.participantsToRender=k.other_participants.edges.map
(function(s){

return {id:h(s.node.messaging_actor.id),
is_messenger_user:s.node.messaging_actor.is_messenger_user};});



return new (c('SearchableEntry'))
({uniqueID:m,
order:l,
photo:n,
title:p,
subtitle:q,
type:c('MercuryParticipantTypes').THREAD,
auxiliaryData:r});},



userFragment:function(){return {children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'name',kind:'Field',metadata:{},type:'String'},{fieldName:'is_memorialized',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'is_viewer_friend',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'is_viewer_coworker',kind:'Field',metadata:{},type:'Boolean'},{calls:[{kind:'Call',metadata:{type:'Int'},name:'width',value:{kind:'CallValue',callValue:32}},{kind:'Call',metadata:{type:'Int'},name:'height',value:{kind:'CallValue',callValue:32}}],children:[{fieldName:'uri',kind:'Field',metadata:{},type:'Url'}],fieldName:'profile_picture',kind:'Field',metadata:{canHaveSubselections:true},type:'Image'},{children:[{fieldName:'is_on_viewer_contact_list',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'messenger_contact',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Contact'},{fieldName:'url',kind:'Field',metadata:{},type:'Url'},{fieldName:'is_messenger_user',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'is_work_user',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'viewer_affinity',kind:'Field',metadata:{},type:'Float'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{},name:'MessengerGraphQLTypeaheadAdapter_UserFragmentRelayQL',type:'User'};}(),



















pageFragment:function(){return {children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'name',kind:'Field',metadata:{},type:'String'},{calls:[{kind:'Call',metadata:{type:'Int'},name:'width',value:{kind:'CallValue',callValue:32}},{kind:'Call',metadata:{type:'Int'},name:'height',value:{kind:'CallValue',callValue:32}}],children:[{fieldName:'uri',kind:'Field',metadata:{},type:'Url'}],fieldName:'profile_picture',kind:'Field',metadata:{canHaveSubselections:true},type:'Image'},{fieldName:'url',kind:'Field',metadata:{},type:'Url'},{fieldName:'is_messenger_user',kind:'Field',metadata:{},type:'Boolean'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{},name:'MessengerGraphQLTypeaheadAdapter_PageFragmentRelayQL',type:'Page'};}(),











groupFragment:function(){return {children:[{children:[{fieldName:'thread_fbid',kind:'Field',metadata:{},type:'String'}],fieldName:'thread_key',kind:'Field',metadata:{canHaveSubselections:true},type:'MessageThreadKey'},{fieldName:'name',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'uri',kind:'Field',metadata:{},type:'Url'}],fieldName:'image',kind:'Field',metadata:{canHaveSubselections:true},type:'Image'},{fieldName:'is_group_thread',kind:'Field',metadata:{},type:'Boolean'},{calls:[{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallValue',callValue:250}}],children:[{children:[{children:[{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'name',kind:'Field',metadata:{},type:'String'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},{children:[{fieldName:'is_messenger_user',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{},name:'User',type:'User'}],fieldName:'messaging_actor',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isAbstract:true},type:'MessagingActor'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'MessagingParticipant'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'MessagingParticipantsOfThreadEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'other_participants',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'MessagingParticipantsOfThreadConnection'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{},name:'MessengerGraphQLTypeaheadAdapter_GroupFragmentRelayQL',type:'MessageThread'};}(),

























gameFragment:function(){return {children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'name',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'icon_uri',kind:'Field',metadata:{},type:'Url'}],fieldName:'instant_game_info',kind:'Field',metadata:{canHaveSubselections:true},type:'GamesInstantPlayStyleInfo'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{},name:'MessengerGraphQLTypeaheadAdapter_GameFragmentRelayQL',type:'Application'};}()};










f.exports=i;}),null);

/** js/mercury/clients/messenger/MessengerGraphQLTypeaheadHighlighter.js */






__d('MessengerGraphQLTypeaheadHighlighter',['Keys','MercuryTypeaheadConstants','MessengerTypeaheadUtils'],(function a(b,c,d,e,f,g){

'use strict';







var h=

{getNextHighlightedEntry:function i
(j,
k,
l,
m){

var n=[];
c('MessengerTypeaheadUtils').getEntryOrder(l).
forEach(function(r){return n.push.apply(n,
k.filter(function(s){
return (c('MessengerTypeaheadUtils').areSectionsEqual
(s.getType(),
r));}));});





if(!m){
if(n.length===0)
return null;


if(j===c('Keys').DOWN){
var o=n[0];

if(o.getType()===c('MercuryTypeaheadConstants').SEARCH_TYPE&&
n.length>1)
return n[1];


return o;}


if(j===c('Keys').UP)
return n[n.length-1];


return null;}


var p=m.getUniqueID(),
q=n.findIndex
(function(r){return r.getUniqueID()===p;});

if(q===-1)
return null;


if(j===c('Keys').DOWN){
q+=1;
if(q>=n.length)
q=0;}else

if(j===c('Keys').UP){
q-=1;
if(q<0)
q=n.length-1;}


return n[q];}};



f.exports=h;}),null);

/** www/__virtual__/webgraphql/MessengerRoomWithAssocObjectAudienceWebGraphQLQuery.js */






__d("MessengerRoomWithAssocObjectAudienceWebGraphQLQuery",["WebGraphQLQueryHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLQueryHelper").getExports
({docID:"1310278199019267",
queryID:"404717586571843"});}),null);

/** js/mercury/clients/messenger/MessengerRoomWithAssocObjectAudienceLocalCacheManager.js */






__d('MessengerRoomWithAssocObjectAudienceLocalCacheManager',['AsyncRequest','Map','MercurySingletonProvider','MessengerGraphQLTypeaheadAdapter','SearchableEntry','SearchSourceCallbackManager','TokenizeUtil','MessengerRoomWithAssocObjectAudienceWebGraphQLQuery','emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';


















function h(k){this.entriesPromise=null;this.audienceEntries=null;
this.threadFBID=k;
this.callbackManager=new (c('SearchSourceCallbackManager'))
({parseFn:c('TokenizeUtil').parse,
matchFn:c('TokenizeUtil').isQueryMatch,
indexFn:null});}

h.prototype.

onEntriesLoaded=function(k){
if(this.audienceEntries!==null){
k(this.audienceEntries,true);
return;}

if(this.entriesPromise===null){
var l=
c('MessengerRoomWithAssocObjectAudienceWebGraphQLQuery').getURI
({thread_fbid:this.threadFBID,first:30});

this.entriesPromise=new (c('AsyncRequest'))(l).
setAllowCrossPageTransition(true).
exec().
then(function(m){return m.getPayload();}).
then(function(m){
var n=
m.data.message_thread.messaging_audience_list.edges.
map(function(o){
return (c('MessengerGraphQLTypeaheadAdapter').convertProfileToEntry
(o.node));}).

filter(function(o){return o!==null;});
this.callbackManager.addLocalEntries(n);
this.audienceEntries=n;}.
bind(this));}

if(this.entriesPromise)
this.entriesPromise.done
(function(){
k(this.audienceEntries,true);}.
bind(this),c('emptyFunction'));};



h.prototype.

search=function(k,l){
this.onEntriesLoaded
(function(){
this.callbackManager.search(k,function(m){
l(m,k);});}.

bind(this));};
h.prototype.

isBootstrapped=function(){
return this.audienceEntries!==null;};
i.






get=function(){
return j.get();};


function i(){
this.threadFBIDToCacheMap=new (c('Map'))();}
i.prototype.

onEntriesLoaded=function(k,l){
var m=this.threadFBIDToCacheMap.get(k);
if(!m){
m=new h(k);
this.threadFBIDToCacheMap.set(k,m);}

m.onEntriesLoaded(l);};
i.prototype.

search=function(k,l,m){
var n=this.threadFBIDToCacheMap.get(k);
if(!n){
n=new h(k);
this.threadFBIDToCacheMap.set(k,n);}

n.search(l,m);};
i.prototype.

isBootstrapped=function(k){

if(!k)
return false;

var l=this.threadFBIDToCacheMap.get(k);
if(l)
return l.isBootstrapped();

return false;};



var j=new (c('MercurySingletonProvider'))
(i);

f.exports=i;}),null);

/** www/__virtual__/webgraphql/MessengerFriendsWebGraphQLQuery.js */






__d("MessengerFriendsWebGraphQLQuery",["WebGraphQLQueryHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLQueryHelper").getExports
({docID:"1138546562910012",
queryID:"340140939718890"});}),null);

/** www/__virtual__/webgraphql/TopMessengerFriendsAndGroupsWebGraphQLQuery.js */






__d("TopMessengerFriendsAndGroupsWebGraphQLQuery",["WebGraphQLQueryHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLQueryHelper").getExports
({docID:"1573443639352292",
queryID:"170460960113470"});}),null);

/** js/mercury/clients/messenger/MessengerTypeaheadLocalCache.js */






__d('MessengerTypeaheadLocalCache',['AsyncRequest','MessengerConfig','MessengerFriendsWebGraphQLQuery','MessengerGraphQLTypeaheadAdapter','SearchSourceCallbackManager','TokenizeUtil','TopMessengerFriendsAndGroupsWebGraphQLQuery','emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';











var h=new (c('SearchSourceCallbackManager'))
({parseFn:c('TokenizeUtil').parse,
matchFn:c('TokenizeUtil').isQueryMatch,
indexFn:null}),


i=null,
j=null,
k=null,

l=null;

function m(){
if(c('MessengerConfig').BootstrapTypeaheadFromBuddylist||!k)
return;


var o=k;
k=null;
new (c('AsyncRequest'))(c('MessengerFriendsWebGraphQLQuery').getLegacyURI({cursor:o})).
setAllowCrossPageTransition(true).
exec().
then(function(p){return p.getPayload();}).
done(function(p){
h.addLocalEntries
(p.viewer.all_friends.edges.map(function(q){
return (c('MessengerGraphQLTypeaheadAdapter').convertProfileToEntry
(q.node));}).

filter(function(q){return q!==null;}));});}




var n=









{onEntriesLoaded:function o(p){var q;
if(i!==null&&j!==null){
p(i,j,false);
return;}

if(l===null)(function(){
var r=c('MessengerConfig').BootstrapTypeaheadFromBuddylist,
s=c('TopMessengerFriendsAndGroupsWebGraphQLQuery').getLegacyURI
({use_buddylist:r,first:100});

l=new (c('AsyncRequest'))(s).
setAllowCrossPageTransition(true).
exec().
then(function(t){return t.getPayload();}).
then(function(t){
var u=(r?
t.viewer.chat_buddylist:
t.viewer.all_friends.edges).
map(function(w){
return (c('MessengerGraphQLTypeaheadAdapter').convertProfileToEntry
(r?w.represented_profile:w.node));}).

filter(function(w){return w!==null;}),
v=t.viewer.message_threads.edges.map
(function(w,x){
return (c('MessengerGraphQLTypeaheadAdapter').convertGroupToEntry
(w.node,
x));}).

filter(function(w){return w!==null;});
h.addLocalEntries(u);
h.addLocalEntries(v);
i=u;
j=v;
if(t.viewer.all_friends&&
t.viewer.all_friends.page_info&&
t.viewer.all_friends.page_info.has_next_page)
k=t.viewer.all_friends.page_info.end_cursor;});})

();

l.done
(function(){
p(i,j,true);
m();},
c('emptyFunction'));},




search:function o(p,q){
n.onEntriesLoaded(function(){
h.search(p,function(r){
q(r,p);});});},




isBootstrapped:function o(){
return i!==null&&j!==null;}};



f.exports=n;}),null);

/** js/mercury/clients/messenger/actions/MNCommerceDialogStateActions.js */






__d('MNCommerceDialogStateActions',['MessengerDispatcher','MNCommerceActionTypes'],(function a(b,c,d,e,f,g){

'use strict';




var h=
{showDialog:function i(j,k){
c('MessengerDispatcher').dispatch
({type:c('MNCommerceActionTypes').DIALOG.SHOW,
dialogContainer:j,
state:k});},



hideDialog:function i(){
c('MessengerDispatcher').dispatch
({type:c('MNCommerceActionTypes').DIALOG.HIDE});}};




f.exports=h;}),null);

/** js/mercury/clients/messenger/logging/MessengerSearchFunnelLogger.js */





__d('MessengerSearchFunnelLogger',['FunnelLogger','MercuryIDs'],(function a(b,c,d,e,f,g){

'use strict';




var h;

function i(p){



c('FunnelLogger').startFunnel(p);

c('FunnelLogger').appendActionIfNew(p,'search_start');
h=[];}


function j(p){
c('FunnelLogger').appendActionIfNew(p,'search_end');
c('FunnelLogger').endFunnel(p);}


function k
(p,
q){

c('FunnelLogger').appendActionWithPayload
(p,
'initiate_content_search',

{query_string:q,
impression_list:h});


c('FunnelLogger').endFunnel(p);}


function l
(p,
q,
r,
s){

if(r==null||
h==null||
h.length===0){
c('FunnelLogger').appendActionWithPayload
(p,
'search_result_error',

{error:'threadID or latest impression list are null',
thread_id:r,
impression_list:h});


c('FunnelLogger').endFunnel(p);
return;}

r=c('MercuryIDs').getThreadFBIDFromThreadID(r);
c('FunnelLogger').appendActionWithPayload
(p,
'log_result_selection',

{thread_id:r,
type:s,
rank:h.indexOf(r),
search_query:q?q:''});}




function m
(p,
q,
r){

c('FunnelLogger').appendActionWithPayloadIfNew
(p,
'loading_state_impression_list',

{search_query:q,
impression_list:r});


h=r;}


function n
(p,
q,
r,
s){

c('FunnelLogger').appendActionWithPayload
(p,
q,

{search_query:r,
impression_list:s});


h=s;}


function o(p){
c('FunnelLogger').appendAction(p,'clear_search_query');
this.endFunnel(p);}


f.exports=
{startFunnel:i,
logResultSelection:l,
endFunnel:j,
logContentSearchInitiation:k,
logLoadingStateQuery:m,
logUpdateQuery:n,
logClearQuery:o};}),null);

/** js/mercury/clients/messenger/routes/MessengerTypeaheadResultRoute.js */






__d('MessengerTypeaheadResultRoute',['RelayQL','RelayRoute'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits




(j,c('RelayRoute'));i=h&&h.prototype;function j(){h.apply(this,arguments);}j.
routeName='MessengerTypeaheadResultRoute';j.
paramDefinition=
{queryString:{required:true,type:'String'},
localEntryIDs:{required:true,type:'Array'},
shouldQueryPages:{required:true,type:'Boolean'},
shouldQueryThreadName:{required:true,type:'Boolean'},
shouldQueryParticipantIDs:{required:true,type:'Boolean'},
shouldQueryParticipantNames:{required:true,type:'Boolean'},
shouldQueryVCEndpoint:{required:true,type:'Boolean'},
shouldQueryInternalBot:{required:true,type:'Boolean'},
shouldQueryRoomsAudience:{required:true,type:'Boolean'},
threadFBID:{required:false,type:'String'}};j.

queries=
{profiles:function k
(l,m){

var n=m.shouldQueryPages,
o=m.shouldQueryVCEndpoint,
p=m.shouldQueryInternalBot,
q=m.shouldQueryRoomsAudience;return function(r){return {calls:[{kind:'Call',metadata:{type:'String!'},name:'query',value:{kind:'CallVariable',callVariableName:'queryString'}}],children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},c('RelayQL').__frag(r)]),fieldName:'entities_named',kind:'Query',metadata:{identifyingArgName:'query',identifyingArgType:'String!'},name:'MessengerTypeaheadResultRoute',type:'SearchableEntitiesQuery'};}




(l.getFragment
('profiles',

{shouldQueryPages:n,
shouldQueryVCEndpoint:o,
shouldQueryInternalBot:p,
shouldQueryRoomsAudience:q}));},





groups:function k
(l,m){

var n=m.queryString,
o=m.localEntryIDs,
p=m.shouldQueryThreadName,
q=m.shouldQueryParticipantIDs,
r=m.shouldQueryParticipantNames;return function(s){return {children:[].concat.apply([],[c('RelayQL').__frag(s)]),fieldName:'viewer',kind:'Query',metadata:{},name:'MessengerTypeaheadResultRoute',type:'Viewer'};}




(l.getFragment
('groups',

{queryString:n,
localEntryIDs:o,
shouldQueryThreadName:p,
shouldQueryParticipantIDs:q,
shouldQueryParticipantNames:r}));},





roomAudience:function k
(l,m){
var n=m.queryString,o=m.shouldQueryRoomsAudience;return function(p){return {calls:[{kind:'Call',metadata:{type:'ID!'},name:'id',value:{kind:'CallVariable',callVariableName:'threadFBID'}}],children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},c('RelayQL').__frag(p)]),fieldName:'message_thread',kind:'Query',metadata:{identifyingArgName:'id',identifyingArgType:'ID!'},name:'MessengerTypeaheadResultRoute',type:'MessageThread'};}



(l.getFragment
('roomAudience',
{queryString:n,shouldQueryRoomsAudience:o}));}};








f.exports=j;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_caml_builtin_exceptions.js */





__d("bs_caml_builtin_exceptions",[],(function a(b,c,d,e,f,g){
'use strict';


var h=
["Out_of_memory",
0],


i=
["Sys_error",
-1],


j=
["Failure",
-2],


k=
["Invalid_argument",
-3],


l=
["End_of_file",
-4],


m=
["Division_by_zero",
-5],


n=
["Not_found",
-6],


o=
["Match_failure",
-7],


p=
["Stack_overflow",
-8],


q=
["Sys_blocked_io",
-9],


r=
["Assert_failure",
-10],


s=
["Undefined_recursive_module",
-11];


g.out_of_memory=h;
g.sys_error=i;
g.failure=j;
g.invalid_argument=k;
g.end_of_file=l;
g.division_by_zero=m;
g.not_found=n;
g.match_failure=o;
g.stack_overflow=p;
g.sys_blocked_io=q;
g.assert_failure=r;
g.undefined_recursive_module=s;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_caml_array.js */





__d('bs_caml_array',['bs_caml_builtin_exceptions'],(function a(b,c,d,e,f,g){
'use strict';



function h(p,q,r){
var s=new Array(r),
t=0,
u=q;
while(t<r){
s[t]=p[u];
t=t+1|0;
u=u+1|0;}

return s;}


function i(p,q){
while(true){
var r=q,
s=p;
if(r){
q=r[1];
p=r[0].length+s|0;
continue;}else 


return s;}}




function j(p,q,r){
while(true){
var s=r,
t=q;
if(s){
var u=s[0],
v=u.length,
w=t,
x=0;
while(x<v){
p[w]=u[x];
w=w+1|0;
x=x+1|0;}

r=s[1];
q=w;
continue;}else 


return 0;}}




function k(p){
var q=i(0,p),
r=new Array(q);
j(r,0,p);
return r;}


function l(p,q,r){
if(q<0||q>=p.length){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"index out of bounds"];}else{


p[q]=r;
return 0;}}



function m(p,q){
if(q<0||q>=p.length){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"index out of bounds"];}else 


return p[q];}



function n(p,q){
var r=new Array(p);
for(var s=0,t=p-1|0;s<=t;++s)
r[s]=q;

return r;}


function o(p,q,r,s,t){
if(s<=q){
for(var u=0,v=t-1|0;u<=v;++u)
r[u+s|0]=p[u+q|0];

return 0;}else{

for(var w=t-1|0;w>=0;--w)
r[w+s|0]=p[w+q|0];

return 0;}}



g.caml_array_sub=h;
g.caml_array_concat=k;
g.caml_make_vect=n;
g.caml_array_blit=o;
g.caml_array_get=m;
g.caml_array_set=l;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_caml_exceptions.js */





__d('bs_caml_exceptions',[],(function a(b,c,d,e,f,g){
'use strict';


var h=[0];

function i(l){
l[1]=h[0];
h[0]+=1;
return l;}


function j(){
h[0]+=1;
return h[0];}


function k(l){
var m=j(0),
n=
[l,
m];

n.tag=248;
return n;}


g.caml_set_oo_id=i;
g.get_id=j;
g.create=k;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_curry.js */





__d('bs_curry',['bs_caml_array'],(function a(b,c,d,e,f,g){
'use strict';



function h(ga,ha){
while(true){
var ia=ha,
ja=ga,
ka=ja.length,
la=ka?ka:1,
ma=ia.length,
na=la-ma|0;
if(na){
if(na<0){
ha=c('bs_caml_array').caml_array_sub(ia,la,-na|0);
ga=ja.apply(null,c('bs_caml_array').caml_array_sub(ia,0,la));
continue;}else 


return function(oa,pa){
return function(qa){
return h(oa,pa.concat([qa]));};}

(ja,ia);}else 


return ja.apply(null,ia);}}




function i(ga,ha,ia){
if(ia>7||ia<0){
return h(ga,[ha]);}else 

switch(ia){
case 0:
case 1:
return ga(ha);
case 2:
return function(ja){
return ga(ha,ja);};

case 3:
return function(ja,ka){
return ga(ha,ja,ka);};

case 4:
return function(ja,ka,la){
return ga(ha,ja,ka,la);};

case 5:
return function(ja,ka,la,ma){
return ga(ha,ja,ka,la,ma);};

case 6:
return function(ja,ka,la,ma,na){
return ga(ha,ja,ka,la,ma,na);};

case 7:
return function(ja,ka,la,ma,na,oa){
return ga(ha,ja,ka,la,ma,na,oa);};}}






function j(ga,ha){
var ia=ga.length;
if(ia===1){
return ga(ha);}else 

return i(ga,ha,ia);}



function k(ga){
var ha=ga.length;
if(ha===1){
return ga;}else 

return function(ia){
return j(ga,ia);};}




function l(ga,ha,ia,ja){
if(ja>7||ja<0){
return h(ga,
[ha,
ia]);}else 


switch(ja){
case 0:
case 1:
return h(ga(ha),[ia]);
case 2:
return ga(ha,ia);
case 3:
return function(ka){
return ga(ha,ia,ka);};

case 4:
return function(ka,la){
return ga(ha,ia,ka,la);};

case 5:
return function(ka,la,ma){
return ga(ha,ia,ka,la,ma);};

case 6:
return function(ka,la,ma,na){
return ga(ha,ia,ka,la,ma,na);};

case 7:
return function(ka,la,ma,na,oa){
return ga(ha,ia,ka,la,ma,na,oa);};}}






function m(ga,ha,ia){
var ja=ga.length;
if(ja===2){
return ga(ha,ia);}else 

return l(ga,ha,ia,ja);}



function n(ga){
var ha=ga.length;
if(ha===2){
return ga;}else 

return function(ia,ja){
return m(ga,ia,ja);};}




function o(ga,ha,ia,ja,ka){
var la=0;
if(ka>7||ka<0){
return h(ga,
[ha,
ia,
ja]);}else 


switch(ka){
case 0:
case 1:
la=1;
break;
case 2:
return h(ga(ha,ia),[ja]);
case 3:
return ga(ha,ia,ja);
case 4:
return function(ma){
return ga(ha,ia,ja,ma);};

case 5:
return function(ma,na){
return ga(ha,ia,ja,ma,na);};

case 6:
return function(ma,na,oa){
return ga(ha,ia,ja,ma,na,oa);};

case 7:
return function(ma,na,oa,pa){
return ga(ha,ia,ja,ma,na,oa,pa);};}




if(la===1)
return h(ga(ha),
[ia,
ja]);}





function p(ga,ha,ia,ja){
var ka=ga.length;
if(ka===3){
return ga(ha,ia,ja);}else 

return o(ga,ha,ia,ja,ka);}



function q(ga){
var ha=ga.length;
if(ha===3){
return ga;}else 

return function(ia,ja,ka){
return p(ga,ia,ja,ka);};}




function r(ga,ha,ia,ja,ka,la){
var ma=0;
if(la>7||la<0){
return h(ga,
[ha,
ia,
ja,
ka]);}else 


switch(la){
case 0:
case 1:
ma=1;
break;
case 2:
return h(ga(ha,ia),
[ja,
ka]);

case 3:
return h(ga(ha,ia,ja),[ka]);
case 4:
return ga(ha,ia,ja,ka);
case 5:
return function(na){
return ga(ha,ia,ja,ka,na);};

case 6:
return function(na,oa){
return ga(ha,ia,ja,ka,na,oa);};

case 7:
return function(na,oa,pa){
return ga(ha,ia,ja,ka,na,oa,pa);};}




if(ma===1)
return h(ga(ha),
[ia,
ja,
ka]);}





function s(ga,ha,ia,ja,ka){
var la=ga.length;
if(la===4){
return ga(ha,ia,ja,ka);}else 

return r(ga,ha,ia,ja,ka,la);}



function t(ga){
var ha=ga.length;
if(ha===4){
return ga;}else 

return function(ia,ja,ka,la){
return s(ga,ia,ja,ka,la);};}




function u(ga,ha,ia,ja,ka,la,ma){
var na=0;
if(ma>7||ma<0){
return h(ga,
[ha,
ia,
ja,
ka,
la]);}else 


switch(ma){
case 0:
case 1:
na=1;
break;
case 2:
return h(ga(ha,ia),
[ja,
ka,
la]);

case 3:
return h(ga(ha,ia,ja),
[ka,
la]);

case 4:
return h(ga(ha,ia,ja,ka),[la]);
case 5:
return ga(ha,ia,ja,ka,la);
case 6:
return function(oa){
return ga(ha,ia,ja,ka,la,oa);};

case 7:
return function(oa,pa){
return ga(ha,ia,ja,ka,la,oa,pa);};}




if(na===1)
return h(ga(ha),
[ia,
ja,
ka,
la]);}





function v(ga,ha,ia,ja,ka,la){
var ma=ga.length;
if(ma===5){
return ga(ha,ia,ja,ka,la);}else 

return u(ga,ha,ia,ja,ka,la,ma);}



function w(ga){
var ha=ga.length;
if(ha===5){
return ga;}else 

return function(ia,ja,ka,la,ma){
return v(ga,ia,ja,ka,la,ma);};}




function x(ga,ha,ia,ja,ka,la,ma,na){
var oa=0;
if(na>7||na<0){
return h(ga,
[ha,
ia,
ja,
ka,
la,
ma]);}else 


switch(na){
case 0:
case 1:
oa=1;
break;
case 2:
return h(ga(ha,ia),
[ja,
ka,
la,
ma]);

case 3:
return h(ga(ha,ia,ja),
[ka,
la,
ma]);

case 4:
return h(ga(ha,ia,ja,ka),
[la,
ma]);

case 5:
return h(ga(ha,ia,ja,ka,la),[ma]);
case 6:
return ga(ha,ia,ja,ka,la,ma);
case 7:
return function(pa){
return ga(ha,ia,ja,ka,la,ma,pa);};}




if(oa===1)
return h(ga(ha),
[ia,
ja,
ka,
la,
ma]);}





function y(ga,ha,ia,ja,ka,la,ma){
var na=ga.length;
if(na===6){
return ga(ha,ia,ja,ka,la,ma);}else 

return x(ga,ha,ia,ja,ka,la,ma,na);}



function z(ga){
var ha=ga.length;
if(ha===6){
return ga;}else 

return function(ia,ja,ka,la,ma,na){
return y(ga,ia,ja,ka,la,ma,na);};}




function aa(ga,ha,ia,ja,ka,la,ma,na,oa){
var pa=0;
if(oa>7||oa<0){
return h(ga,
[ha,
ia,
ja,
ka,
la,
ma,
na]);}else 


switch(oa){
case 0:
case 1:
pa=1;
break;
case 2:
return h(ga(ha,ia),
[ja,
ka,
la,
ma,
na]);

case 3:
return h(ga(ha,ia,ja),
[ka,
la,
ma,
na]);

case 4:
return h(ga(ha,ia,ja,ka),
[la,
ma,
na]);

case 5:
return h(ga(ha,ia,ja,ka,la),
[ma,
na]);

case 6:
return h(ga(ha,ia,ja,ka,la,ma),[na]);
case 7:
return ga(ha,ia,ja,ka,la,ma,na);}



if(pa===1)
return h(ga(ha),
[ia,
ja,
ka,
la,
ma,
na]);}





function ba(ga,ha,ia,ja,ka,la,ma,na){
var oa=ga.length;
if(oa===7){
return ga(ha,ia,ja,ka,la,ma,na);}else 

return aa(ga,ha,ia,ja,ka,la,ma,na,oa);}



function ca(ga){
var ha=ga.length;
if(ha===7){
return ga;}else 

return function(ia,ja,ka,la,ma,na,oa){
return ba(ga,ia,ja,ka,la,ma,na,oa);};}




function da(ga,ha,ia,ja,ka,la,ma,na,oa,pa){
var qa=0;
if(pa>7||pa<0){
return h(ga,
[ha,
ia,
ja,
ka,
la,
ma,
na,
oa]);}else 


switch(pa){
case 0:
case 1:
qa=1;
break;
case 2:
return h(ga(ha,ia),
[ja,
ka,
la,
ma,
na,
oa]);

case 3:
return h(ga(ha,ia,ja),
[ka,
la,
ma,
na,
oa]);

case 4:
return h(ga(ha,ia,ja,ka),
[la,
ma,
na,
oa]);

case 5:
return h(ga(ha,ia,ja,ka,la),
[ma,
na,
oa]);

case 6:
return h(ga(ha,ia,ja,ka,la,ma),
[na,
oa]);

case 7:
return h(ga(ha,ia,ja,ka,la,ma,na),[oa]);}



if(qa===1)
return h(ga(ha),
[ia,
ja,
ka,
la,
ma,
na,
oa]);}





function ea(ga,ha,ia,ja,ka,la,ma,na,oa){
var pa=ga.length;
if(pa===8){
return ga(ha,ia,ja,ka,la,ma,na,oa);}else 

return da(ga,ha,ia,ja,ka,la,ma,na,oa,pa);}



function fa(ga){
var ha=ga.length;
if(ha===8){
return ga;}else 

return function(ia,ja,ka,la,ma,na,oa,pa){
return ea(ga,ia,ja,ka,la,ma,na,oa,pa);};}




g.app=h;
g.curry_1=i;
g._1=j;
g.__1=k;
g.curry_2=l;
g._2=m;
g.__2=n;
g.curry_3=o;
g._3=p;
g.__3=q;
g.curry_4=r;
g._4=s;
g.__4=t;
g.curry_5=u;
g._5=v;
g.__5=w;
g.curry_6=x;
g._6=y;
g.__6=z;
g.curry_7=aa;
g._7=ba;
g.__7=ca;
g.curry_8=da;
g._8=ea;
g.__8=fa;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_array.js */





__d('bs_array',['bs_curry','bs_caml_array','bs_caml_exceptions','bs_caml_builtin_exceptions'],(function a(b,c,d,e,f,g){
'use strict';






function h(da,ea){
if(da){
if(da<0){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"Array.init"];}else{


var fa=c('bs_caml_array').caml_make_vect(da,c('bs_curry')._1(ea,0));
for(var ga=1,ha=da-1|0;ga<=ha;++ga)
fa[ga]=c('bs_curry')._1(ea,ga);

return fa;}}else 


return [];}



function i(da,ea,fa){
var ga=c('bs_caml_array').caml_make_vect(da,[]);
for(var ha=0,ia=da-1|0;ha<=ia;++ha)
ga[ha]=c('bs_caml_array').caml_make_vect(ea,fa);

return ga;}


function j(da){
var ea=da.length;
if(ea){
return c('bs_caml_array').caml_array_sub(da,0,ea);}else 

return [];}



function k(da,ea){
var fa=da.length;
if(fa){
if(ea.length){
return da.concat(ea);}else 

return c('bs_caml_array').caml_array_sub(da,0,fa);}else 


return j(ea);}



function l(da,ea,fa){
if(fa<0||ea>(da.length-fa|0)){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"Array.sub"];}else 


return c('bs_caml_array').caml_array_sub(da,ea,fa);}



function m(da,ea,fa,ga){
if(ea<0||fa<0||ea>(da.length-fa|0)){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"Array.fill"];}else{


for(var ha=ea,ia=(ea+fa|0)-1|0;ha<=ia;++ha)
da[ha]=ga;

return 0;}}



function n(da,ea,fa,ga,ha){
if(ha<0||ea<0||ea>(da.length-ha|0)||ga<0||ga>(fa.length-ha|0)){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"Array.blit"];}else 


return c('bs_caml_array').caml_array_blit(da,ea,fa,ga,ha);}



function o(da,ea){
for(var fa=0,ga=ea.length-1|0;fa<=ga;++fa)
c('bs_curry')._1(da,ea[fa]);

return 0;}


function p(da,ea){
var fa=ea.length;
if(fa){
var ga=c('bs_caml_array').caml_make_vect(fa,c('bs_curry')._1(da,ea[0]));
for(var ha=1,ia=fa-1|0;ha<=ia;++ha)
ga[ha]=c('bs_curry')._1(da,ea[ha]);

return ga;}else 

return [];}



function q(da,ea){
for(var fa=0,ga=ea.length-1|0;fa<=ga;++fa)
c('bs_curry')._2(da,fa,ea[fa]);

return 0;}


function r(da,ea){
var fa=ea.length;
if(fa){
var ga=c('bs_caml_array').caml_make_vect(fa,c('bs_curry')._2(da,0,ea[0]));
for(var ha=1,ia=fa-1|0;ha<=ia;++ha)
ga[ha]=c('bs_curry')._2(da,ha,ea[ha]);

return ga;}else 

return [];}



function s(da){
var ea=da.length-1|0,
fa=0;
while(true){
var ga=fa,
ha=ea;
if(ha<0){
return ga;}else{

fa=
[da[ha],
ga];

ea=ha-1|0;
continue;}}}





function t(da,ea){
while(true){
var fa=ea,
ga=da;
if(fa){
ea=fa[1];
da=ga+1|0;
continue;}else 


return ga;}}




function u(da){
if(da){
var ea=c('bs_caml_array').caml_make_vect(t(0,da),da[0]),
fa=1,
ga=da[1];
while(true){
var ha=ga,
ia=fa;
if(ha){
ea[ia]=ha[0];
ga=ha[1];
fa=ia+1|0;
continue;}else 


return ea;}}else 



return [];}



function v(da,ea,fa){
var ga=ea;
for(var ha=0,ia=fa.length-1|0;ha<=ia;++ha)
ga=c('bs_curry')._2(da,ga,fa[ha]);

return ga;}


function w(da,ea,fa){
var ga=fa;
for(var ha=ea.length-1|0;ha>=0;--ha)
ga=c('bs_curry')._2(da,ea[ha],ga);

return ga;}


var x=c('bs_caml_exceptions').create("Array.Bottom");

function y(da,ea){
var fa=function oa(pa,qa){
var ra=((qa+qa|0)+qa|0)+1|0,
sa=ra;
if((ra+2|0)<pa){
if(c('bs_curry')._2(da,c('bs_caml_array').caml_array_get(ea,ra),c('bs_caml_array').caml_array_get(ea,ra+1|0))<0)
sa=ra+1|0;

if(c('bs_curry')._2(da,c('bs_caml_array').caml_array_get(ea,sa),c('bs_caml_array').caml_array_get(ea,ra+2|0))<0)
sa=ra+2|0;

return sa;}else
if((ra+1|0)<pa&&c('bs_curry')._2(da,c('bs_caml_array').caml_array_get(ea,ra),c('bs_caml_array').caml_array_get(ea,ra+1|0))<0){
return ra+1|0;}else
if(ra<pa){
return ra;}else 


throw [x,
qa];},



ga=function oa(pa,qa,ra){

try{var ta=pa,
ua=qa,
va=ra;
while(true){
var wa=ua,
xa=fa(ta,wa);
if(c('bs_curry')._2(da,c('bs_caml_array').caml_array_get(ea,xa),va)>0){
c('bs_caml_array').caml_array_set(ea,wa,c('bs_caml_array').caml_array_get(ea,xa));
ua=xa;
continue;}else 


return c('bs_caml_array').caml_array_set(ea,wa,va);}}catch(



sa){
if(sa[0]===x){
return c('bs_caml_array').caml_array_set(ea,sa[1],ra);}else 

throw sa;}},



ha=function oa(pa,qa){

try{var sa=pa,
ta=qa;
while(true){
var ua=ta,
va=fa(sa,ua);
c('bs_caml_array').caml_array_set(ea,ua,c('bs_caml_array').caml_array_get(ea,va));
ta=va;
continue;}}catch(



ra){
if(ra[0]===x){
return ra[1];}else 

throw ra;}},



ia=function oa(pa,qa){
while(true){
var ra=pa,
sa=(ra-1|0)/3|0;
if(ra===sa)

throw [c('bs_caml_builtin_exceptions').assert_failure,

["array.ml",
168,
4]];



if(c('bs_curry')._2(da,c('bs_caml_array').caml_array_get(ea,sa),qa)<0){
c('bs_caml_array').caml_array_set(ea,ra,c('bs_caml_array').caml_array_get(ea,sa));
if(sa>0){
pa=sa;
continue;}else 


return c('bs_caml_array').caml_array_set(ea,0,qa);}else 


return c('bs_caml_array').caml_array_set(ea,ra,qa);}},



ja=ea.length;
for(var ka=((ja+1|0)/3|0)-1|0;ka>=0;--ka)
ga(ja,ka,c('bs_caml_array').caml_array_get(ea,ka));

for(var la=ja-1|0;la>=2;--la){
var ma=c('bs_caml_array').caml_array_get(ea,la);
c('bs_caml_array').caml_array_set(ea,la,c('bs_caml_array').caml_array_get(ea,0));
ia(ha(la,0),ma);}

if(ja>1){
var na=c('bs_caml_array').caml_array_get(ea,1);
c('bs_caml_array').caml_array_set(ea,1,c('bs_caml_array').caml_array_get(ea,0));
return c('bs_caml_array').caml_array_set(ea,0,na);}else 

return 0;}



function z(da,ea){
var fa=function ma(na,oa,pa,qa,ra,sa,ta){
var ua=na+oa|0,
va=qa+ra|0,
wa=na,
xa=c('bs_caml_array').caml_array_get(ea,na),
ya=qa,
za=c('bs_caml_array').caml_array_get(pa,qa),
ab=ta;
while(true){
var bb=ab,
cb=za,
db=ya,
eb=xa,
fb=wa;
if(c('bs_curry')._2(da,eb,cb)<=0){
c('bs_caml_array').caml_array_set(sa,bb,eb);
var gb=fb+1|0;
if(gb<ua){
ab=bb+1|0;
xa=c('bs_caml_array').caml_array_get(ea,gb);
wa=gb;
continue;}else 


return n(pa,db,sa,bb+1|0,va-db|0);}else{


c('bs_caml_array').caml_array_set(sa,bb,cb);
var hb=db+1|0;
if(hb<va){
ab=bb+1|0;
za=c('bs_caml_array').caml_array_get(pa,hb);
ya=hb;
continue;}else 


return n(ea,fb,sa,bb+1|0,ua-fb|0);}}},




ga=function ma(na,oa,pa,qa){
for(var ra=0,sa=qa-1|0;ra<=sa;++ra){
var ta=c('bs_caml_array').caml_array_get(ea,na+ra|0),
ua=(pa+ra|0)-1|0;
while(ua>=pa&&c('bs_curry')._2(da,c('bs_caml_array').caml_array_get(oa,ua),ta)>0){
c('bs_caml_array').caml_array_set(oa,ua+1|0,c('bs_caml_array').caml_array_get(oa,ua));
ua=ua-1|0;}

c('bs_caml_array').caml_array_set(oa,ua+1|0,ta);}

return 0;},

ha=function ma(na,oa,pa,qa){
if(qa<=5){
return ga(na,oa,pa,qa);}else{

var ra=qa/2|0,
sa=qa-ra|0;
ma(na+ra|0,oa,pa+ra|0,sa);
ma(na,ea,na+sa|0,ra);
return fa(na+sa|0,ra,oa,pa+ra|0,sa,oa,pa);}},


ia=ea.length;
if(ia<=5){
return ga(0,ea,0,ia);}else{

var ja=ia/2|0,
ka=ia-ja|0,
la=c('bs_caml_array').caml_make_vect(ka,c('bs_caml_array').caml_array_get(ea,0));
ha(ja,la,0,ka);
ha(0,ea,ka,ja);
return fa(ka,ja,la,0,ka,ea,0);}}



var aa=i,

ba=c('bs_caml_array').caml_array_concat,

ca=z;

g.init=h;
g.make_matrix=i;
g.create_matrix=aa;
g.append=k;
g.concat=ba;
g.sub=l;
g.copy=j;
g.fill=m;
g.blit=n;
g.to_list=s;
g.of_list=u;
g.iter=o;
g.map=p;
g.iteri=q;
g.mapi=r;
g.fold_left=v;
g.fold_right=w;
g.sort=y;
g.stable_sort=z;
g.fast_sort=ca;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_js_boolean.js */





__d('bs_js_boolean',[],(function a(b,c,d,e,f,g){
'use strict';


function h(i){
if(i){
return true;}else 

return false;}



g.to_js_boolean=h;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_js_primitive.js */





__d('bs_js_primitive',[],(function a(b,c,d,e,f,g){
'use strict';


function h(m){
if(m===null){
return 1;}else 

return +(m===undefined);}



function i(m){
if(m===null||m===undefined){
return 0;}else 

return [m];}



function j(m){
if(m===undefined){
return 0;}else 

return [m];}



function k(m){
if(m===null){
return 0;}else 

return [m];}



function l(m){
if(m){
return m[0];}else 

return undefined;}



g.is_nil_undef=h;
g.null_undefined_to_opt=i;
g.undefined_to_opt=j;
g.null_to_opt=k;
g.option_get=l;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_js_null_undefined.js */





__d('bs_js_null_undefined',['bs_js_primitive'],(function a(b,c,d,e,f,g){
'use strict';



function h(k,l){
if(c('bs_js_primitive').is_nil_undef(k)){
return k;}else 

return l(k);}



function i(k,l){
if(c('bs_js_primitive').is_nil_undef(k)){
return 0;}else 

return l(k);}



function j(k){
if(k){
return k[0];}else 

return undefined;}



g.bind=h;
g.iter=i;
g.from_opt=j;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_block.js */





__d('bs_block',[],(function a(b,c,d,e,f,g){
'use strict';


function h(i,j){
j.tag=i;
return j;}


g.__=h;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_caml_obj.js */





__d('bs_caml_obj',['bs_block','bs_caml_builtin_exceptions'],(function a(b,c,d,e,f,g){
'use strict';




function h(v){
var w=v.length,
x=new Array(w);
for(var y=0,z=w-1|0;y<=z;++y)
x[y]=v[y];

x.tag=v.tag|0;
return x;}


function i(v,w){
var x=v.length;
if(w<=0||w>x){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"Obj.truncate"];}else

if(x!==w){
for(var y=w,z=x-1|0;y<=z;++y)
v[y]=0;

v.length=w;
return 0;}else 

return 0;}



function j(v){
return c('bs_block').__(250,[v]);}


function k(v,w){
var x=w.length;
for(var y=0,z=x-1|0;y<=z;++y)
v[y]=w[y];

var aa=w.tag|0;
if(aa!==0){
v.tag=aa;
return 0;}else 

return 0;}



function l(v,w){
if(v<w){
return -1;}else
if(v===w){
return 0;}else 

return 1;}



function m(v,w){
while(true){
var x=w,
y=v,
z=typeof y,
aa=typeof x;
if(z==="string"){
var ba=y,
ca=x;
if(ba<ca){
return -1;}else
if(ba===ca){
return 0;}else 

return 1;}else{


var da=+(z==="number"),
ea=+(aa==="number");
if(da!==0){
if(ea!==0){
return l(y,x);}else 

return -1;}else

if(ea!==0){
return 1;}else
if(z==="boolean"||z==="null"||z==="undefined"){
var fa=y,
ga=x;
if(fa===ga){
return 0;}else
if(fa<ga){
return -1;}else 

return 1;}else

if(z==="function"||aa==="function"){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"compare: functional value"];}else{


var ha=y.tag|0,
ia=x.tag|0;
if(ha===250){
v=y[0];
continue;}else

if(ia===250){
w=x[0];
continue;}else

if(ha===248){
return l(y[1],x[1]);}else
if(ha===251){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"equal: abstract value"];}else

if(ha!==ia){
if(ha<ia){
return -1;}else 

return 1;}else{


var ja=y.length,
ka=x.length;
if(ja===ka){
var la=y,
ma=x,
na=0,
oa=ja;
while(true){
var pa=na;
if(pa===oa){
return 0;}else{

var qa=m(la[pa],ma[pa]);
if(qa!==0){
return qa;}else{

na=pa+1|0;
continue;}}}}else




if(ja<ka){
var ra=y,
sa=x,
ta=0,
ua=ja;
while(true){
var va=ta;
if(va===ua){
return -1;}else{

var wa=m(ra[va],sa[va]);
if(wa!==0){
return wa;}else{

ta=va+1|0;
continue;}}}}else{





var xa=y,
ya=x,
za=0,
ab=ka;
while(true){
var bb=za;
if(bb===ab){
return 1;}else{

var cb=m(xa[bb],ya[bb]);
if(cb!==0){
return cb;}else{

za=bb+1|0;
continue;}}}}}}}}}











function n(v,w){
while(true){
var x=w,
y=v;
if(y===x){
return 1;}else{

var z=typeof y;
if(z==="string"||z==="number"||z==="boolean"||z==="undefined"||z==="null"){
return 0;}else{

var aa=typeof x;
if(z==="function"||aa==="function"){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"equal: functional value"];}else

if(aa==="number"||aa==="null"||aa==="undefined"){
return 0;}else{

var ba=y.tag|0,
ca=x.tag|0;
if(ba===250){
v=y[0];
continue;}else

if(ca===250){
w=x[0];
continue;}else

if(ba===248){
return +(y[1]===x[1]);}else
if(ba===251){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"equal: abstract value"];}else

if(ba!==ca){
return 0;}else{

var da=y.length,
ea=x.length;
if(da===ea){
var fa=y,
ga=x,
ha=0,
ia=da;
while(true){
var ja=ha;
if(ja===ia){
return 1;}else
if(n(fa[ja],ga[ja])){
ha=ja+1|0;
continue;}else 


return 0;}}else 



return 0;}}}}}}








function o(v,w){
return 1-n(v,w);}


function p(v,w){
return +(m(v,w)>=0);}


function q(v,w){
return +(m(v,w)>0);}


function r(v,w){
return +(m(v,w)<=0);}


function s(v,w){
return +(m(v,w)<0);}


var t=l,

u=l;

g.caml_obj_dup=h;
g.caml_obj_truncate=i;
g.caml_lazy_make_forward=j;
g.caml_update_dummy=k;
g.caml_int_compare=l;
g.caml_int32_compare=t;
g.caml_nativeint_compare=u;
g.caml_compare=m;
g.caml_equal=n;
g.caml_notequal=o;
g.caml_greaterequal=p;
g.caml_greaterthan=q;
g.caml_lessthan=s;
g.caml_lessequal=r;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_caml_int32.js */





__d('bs_caml_int32',['bs_caml_builtin_exceptions'],(function a(b,c,d,e,f,g){
'use strict';



function h(n,o){
if(o===0){
throw c('bs_caml_builtin_exceptions').division_by_zero;}else 

return n/o|0;}



function i(n,o){
if(o===0){
throw c('bs_caml_builtin_exceptions').division_by_zero;}else 

return n%o;}



function j(n){
return (n&255)<<8|(n&65280)>>>8;}


function k(n){
return (n&255)<<24|(n&65280)<<8|(n&16711680)>>>8|(n&4278190080)>>>24;}


var l=Math.imul||function(n,o){
o|=0;return ((n>>16)*o<<16)+(n&65535)*o|0;},



m=k;

g.div=h;
g.mod_=i;
g.caml_bswap16=j;
g.caml_int32_bswap=k;
g.caml_nativeint_bswap=m;
g.imul=l;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_caml_utils.js */





__d('bs_caml_utils',[],(function a(b,c,d,e,f,g){
'use strict';


var h=String.prototype.repeat&&function(i,j){return j.repeat(i);}||
function(i,j){
if(j.length==0||i==0)
return '';




if(j.length*i>=1<<28)
throw new RangeError('repeat count must not overflow maximum string size');

var k='';
for(;;){
if((i&1)==1)
k+=j;

i>>>=1;
if(i==0)
break;

j+=j;}

return k;};



g.repeat=h;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_caml_int64.js */





__d('bs_caml_int64',['bs_caml_obj','bs_caml_int32','bs_caml_utils','bs_caml_builtin_exceptions'],(function a(b,c,d,e,f,g){
'use strict';






var h=
[-2147483648,
0],


i=
[134217727,
1],


j=
[0,
1],


k=
[0,
0],


l=
[-1,
4294967295];


function m(wa){
return +((wa&2147483648)!==0);}


function n(wa,xa){
var ya=xa[1],
za=wa[1],
ab=za+ya&4294967295,
bb=m(za)&&(m(ya)||!m(ab))||m(ya)&&!m(ab)?1:0,
cb=wa[0]+xa[0]+bb&4294967295;

return [cb,
ab>>>0];}



function o(wa){
var xa=wa[0]^-1,
ya=wa[1]^-1;

return [xa,
ya>>>0];}



function p(wa,xa){
if(wa[0]===xa[0]){
return +(wa[1]===xa[1]);}else 

return 0;}



function q(wa){
if(p(wa,h)){
return h;}else 

return n(o(wa),j);}



function r(wa,xa){
return n(wa,q(xa));}


function s(wa,xa){
if(xa){
var ya=wa[1];
if(xa>=32){

return [ya<<(xa-32|0),
0];}else{


var za=ya>>>(32-xa|0)|wa[0]<<xa;

return [za,
ya<<xa>>>0];}}else 



return wa;}



function t(wa,xa){
if(xa){
var ya=wa[0],
za=xa-32|0;
if(za){
if(za>0){
var ab=ya>>>za;

return [0,
ab>>>0];}else{


var bb=ya>>>xa,
cb=ya<<(-za|0)|wa[1]>>>xa;

return [bb,
cb>>>0];}}else 




return [0,
ya>>>0];}else 



return wa;}



function u(wa,xa){
if(xa){
var ya=wa[0];
if(xa<32){
var za=ya>>xa,
ab=ya<<(32-xa|0)|wa[1]>>>xa;

return [za,
ab>>>0];}else{


var bb=ya>>(xa-32|0);

return [ya>=0?0:-1,
bb>>>0];}}else 



return wa;}



function v(wa){
if(wa[0]!==0||wa[1]!==0){
return 0;}else 

return 1;}



function w(wa,xa){
while(true){
var ya=xa,
za=wa,
ab=0,
bb,
cb=za[0],
db=0,
eb=0,
fb=0;
if(cb!==0){
fb=4;}else
if(za[1]!==0){
fb=4;}else 

return k;

if(fb===4)
if(ya[0]!==0){
eb=3;}else
if(ya[1]!==0){
eb=3;}else 

return k;


if(eb===3)
if(cb!==-2147483648){
db=2;}else
if(za[1]!==0){
db=2;}else{

bb=ya[1];
ab=1;}


if(db===2){
var gb=ya[0],
hb=za[1],
ib=0;
if(gb!==-2147483648){
ib=3;}else
if(ya[1]!==0){
ib=3;}else{

bb=hb;
ab=1;}

if(ib===3){
var jb=ya[1];
if(cb<0){
if(gb<0){
xa=q(ya);
wa=q(za);
continue;}else 


return q(w(q(za),ya));}else

if(gb<0){
return q(w(za,q(ya)));}else{

var kb=cb>>>16,
lb=cb&65535,
mb=hb>>>16,
nb=hb&65535,
ob=gb>>>16,
pb=gb&65535,
qb=jb>>>16,
rb=jb&65535,
sb=0,
tb=0,
ub=0,
vb=nb*rb;
ub=(vb>>>16)+mb*rb;
tb=ub>>>16;
ub=(ub&65535)+nb*qb;
tb=tb+(ub>>>16)+lb*rb;
sb=tb>>>16;
tb=(tb&65535)+mb*qb;
sb+=tb>>>16;
tb=(tb&65535)+nb*pb;
sb+=tb>>>16;
tb=tb&65535;
sb=sb+(kb*rb+lb*qb+mb*pb+nb*ob)&65535;
var wb=tb|sb<<16,
xb=vb&65535|(ub&65535)<<16;

return [wb,
xb>>>0];}}}





if(ab===1)
if((bb&1)===0){
return k;}else 

return h;}}






function x(wa){
var xa=c('bs_caml_int32').caml_int32_bswap(wa[1]),
ya=c('bs_caml_int32').caml_int32_bswap(wa[0]);

return [xa,
ya>>>0];}



function y(wa,xa){

return [wa[0]^xa[0],
(wa[1]^xa[1])>>>0];}



function z(wa,xa){

return [wa[0]|xa[0],
(wa[1]|xa[1])>>>0];}



function aa(wa,xa){

return [wa[0]&xa[0],
(wa[1]&xa[1])>>>0];}



function ba(wa,xa){
var ya=xa[0],
za=wa[0];
if(za>ya){
return 1;}else
if(za<ya){
return 0;}else 

return +(wa[1]>=xa[1]);}



function ca(wa,xa){
return 1-p(wa,xa);}


function da(wa,xa){
return 1-ba(wa,xa);}


function ea(wa,xa){
if(wa[0]>xa[0]){
return 1;}else
if(wa[0]<xa[0]){
return 0;}else 

return +(wa[1]>xa[1]);}



function fa(wa,xa){
return 1-ea(wa,xa);}


function ga(wa){
return wa[0]*4294967296+wa[1];}


var ha=Math.pow(2,32),

ia=Math.pow(2,63),

ja=-Math.pow(2,63);

function ka(wa){
if(isNaN(wa)||!isFinite(wa)){
return k;}else
if(wa<=ja){
return h;}else
if(wa+1>=ia){
return i;}else
if(wa<0){
return q(ka(-wa));}else{

var xa=wa/ha|0,
ya=wa%ha|0;

return [xa,
ya>>>0];}}




function la(wa,xa){
while(true){
var ya=xa,
za=wa,
ab=za[0],
bb=0,
cb=0;
if(ya[0]!==0){
cb=2;}else
if(ya[1]!==0){
cb=2;}else 

throw c('bs_caml_builtin_exceptions').division_by_zero;

if(cb===2)
if(ab!==-2147483648){
if(ab!==0){
bb=1;}else
if(za[1]!==0){
bb=1;}else 

return k;}else

if(za[1]!==0){
bb=1;}else
if(p(ya,j)||p(ya,l)){
return za;}else
if(p(ya,h)){
return j;}else{

var db=ya[0],
eb=u(za,1),
fb=s(la(eb,ya),1),
gb=0;
if(fb[0]!==0){
gb=3;}else
if(fb[1]!==0){
gb=3;}else
if(db<0){
return j;}else 

return q(j);

if(gb===3){
var hb=w(ya,fb),
ib=n(za,q(hb));
return n(fb,la(ib,ya));}}




if(bb===1){
var jb=ya[0],
kb=0;
if(jb!==-2147483648){
kb=2;}else
if(ya[1]!==0){
kb=2;}else 

return k;

if(kb===2)
if(ab<0){
if(jb<0){
xa=q(ya);
wa=q(za);
continue;}else 


return q(la(q(za),ya));}else

if(jb<0){
return q(la(za,q(ya)));}else{

var lb=k,
mb=za;
while(ba(mb,ya)){
var nb=Math.max(1,Math.floor(ga(mb)/ga(ya))),
ob=Math.ceil(Math.log(nb)/Math.LN2),
pb=ob<=48?1:Math.pow(2,ob-48),
qb=ka(nb),
rb=w(qb,ya);
while(rb[0]<0||ea(rb,mb)){
nb-=pb;
qb=ka(nb);
rb=w(qb,ya);}

if(v(qb))
qb=j;

lb=n(lb,qb);
mb=n(mb,q(rb));}

return lb;}}}}








function ma(wa,xa){
var ya=w(la(wa,xa),xa);
return n(wa,q(ya));}


function na(wa,xa){
var ya=la(wa,xa),
za=w(ya,xa);

return [ya,
n(wa,q(za))];}



function oa(wa,xa){
var ya=c('bs_caml_obj').caml_nativeint_compare(wa[0],xa[0]);
if(ya){
return ya;}else 

return c('bs_caml_obj').caml_nativeint_compare(wa[1],xa[1]);}



function pa(wa){

return [wa<0?-1:0,
wa>>>0];}



function qa(wa){
return wa[1]|0;}


function ra(wa){
var xa=function db(eb){
return (eb>>>0).toString(16);},

ya=wa[0],
za=wa[1],
ab=0;
if(ya!==0){
ab=1;}else
if(za!==0){
ab=1;}else 

return "0";

if(ab===1)
if(za!==0){
if(ya!==0){
var bb=xa(wa[1]),
cb=8-bb.length|0;
if(cb<=0){
return xa(wa[0])+bb;}else 

return xa(wa[0])+(c('bs_caml_utils').repeat(cb,"0")+bb);}else 


return xa(wa[1]);}else 


return xa(wa[0])+"00000000";}





function sa(wa){

return [2147483647&wa[0],
wa[1]];}



function ta(wa){
var xa=new Int32Array
([wa[1],
wa[0]]);

return new Float64Array(xa.buffer)[0];}


function ua(wa){
var xa=new Float64Array([wa]),
ya=new Int32Array(xa.buffer),
za=ya[1],
ab=za,
bb=ya[0],
cb=bb;

return [ab,
cb>>>0];}



function va(wa,xa){
var ya=wa.charCodeAt(xa+4|0)<<32|wa.charCodeAt(xa+5|0)<<40|wa.charCodeAt(xa+6|0)<<48|wa.charCodeAt(xa+7|0)<<56,
za=wa.charCodeAt(xa)|wa.charCodeAt(xa+1|0)<<8|wa.charCodeAt(xa+2|0)<<16|wa.charCodeAt(xa+3|0)<<24;

return [ya,
za>>>0];}



g.min_int=h;
g.max_int=i;
g.one=j;
g.zero=k;
g.not=o;
g.of_int32=pa;
g.to_int32=qa;
g.add=n;
g.neg=q;
g.sub=r;
g.lsl_=s;
g.lsr_=t;
g.asr_=u;
g.is_zero=v;
g.mul=w;
g.xor=y;
g.or_=z;
g.and_=aa;
g.swap=x;
g.ge=ba;
g.eq=p;
g.neq=ca;
g.lt=da;
g.gt=ea;
g.le=fa;
g.to_float=ga;
g.of_float=ka;
g.div=la;
g.mod_=ma;
g.div_mod=na;
g.compare=oa;
g.to_hex=ra;
g.discard_sign=sa;
g.float_of_bits=ta;
g.bits_of_float=ua;
g.get64=va;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_caml_format.js */





__d('bs_caml_format',['bs_curry','bs_caml_int32','bs_caml_int64','bs_caml_utils','bs_caml_builtin_exceptions'],(function a(b,c,d,e,f,g){
'use strict';







function h(aa){

throw [c('bs_caml_builtin_exceptions').failure,
aa];}



function i(aa){
if(aa>=65){
if(aa>=97){
if(aa>=123){
return -1;}else 

return aa-87|0;}else

if(aa>=91){
return -1;}else 

return aa-55|0;}else

if(aa>57||aa<48){
return -1;}else 

return aa-48|0;}



function j(aa){
switch(aa){
case 0:
return 8;
case 1:
return 16;
case 2:
return 10;
case 3:
return 2;}}




function k(aa){
var ba=1,
ca=2,
da=0;
if(aa[da]==="-"){
ba=-1;
da=da+1|0;}

var ea=aa.charCodeAt(da),
fa=aa.charCodeAt(da+1|0);
if(ea===48)
if(fa>=89){
if(fa!==98){
if(fa!==111){
if(fa===120){
ca=1;
da=da+2|0;}}else{



ca=0;
da=da+2|0;}}else{


ca=3;
da=da+2|0;}}else

if(fa!==66){
if(fa!==79){
if(fa>=88){
ca=1;
da=da+2|0;}}else{



ca=0;
da=da+2|0;}}else{


ca=3;
da=da+2|0;}



return [da,
ba,
ca];}



function l(aa){
var ba=k(aa),
ca=ba[0],
da=j(ba[2]),
ea=4294967295,
fa=aa.length,
ga=ca<fa?aa.charCodeAt(ca):0,
ha=i(ga);
if(ha<0||ha>=da)

throw [c('bs_caml_builtin_exceptions').failure,
"int_of_string"];


var ia=function la(ma,na){
while(true){
var oa=na,
pa=ma;
if(oa===fa){
return pa;}else{

var qa=aa.charCodeAt(oa);
if(qa===95){
na=oa+1|0;
continue;}else{


var ra=i(qa);
if(ra<0||ra>=da){

throw [c('bs_caml_builtin_exceptions').failure,
"int_of_string"];}else{


var sa=da*pa+ra;
if(sa>ea){

throw [c('bs_caml_builtin_exceptions').failure,
"int_of_string"];}else{


na=oa+1|0;
ma=sa;
continue;}}}}}},







ja=ba[1]*ia(ha,ca+1|0),
ka=ja|0;
if(da===10&&ja!==ka)

throw [c('bs_caml_builtin_exceptions').failure,
"int_of_string"];


return ka;}


function m(aa){
var ba=k(aa),
ca=ba[2],
da=ba[0],
ea=c('bs_caml_int64').of_int32(j(ca)),
fa=c('bs_caml_int64').of_int32(ba[1]),
ga;
switch(ca){
case 0:
ga=
[536870911,
4294967295];

break;
case 1:
ga=
[268435455,
4294967295];

break;
case 2:
ga=
[429496729,
2576980377];

break;
case 3:
ga=
[2147483647,
4294967295];

break;}


var ha=aa.length,
ia=da<ha?aa.charCodeAt(da):0,
ja=c('bs_caml_int64').of_int32(i(ia));
if(c('bs_caml_int64').lt(ja,
[0,
0])||
c('bs_caml_int64').ge(ja,ea))

throw [c('bs_caml_builtin_exceptions').failure,
"int64_of_string"];


var ka=function na(oa,pa){
while(true){
var qa=pa,
ra=oa;
if(qa===ha){
return ra;}else{

var sa=aa.charCodeAt(qa);
if(sa===95){
pa=qa+1|0;
continue;}else{


var ta=c('bs_caml_int64').of_int32(i(sa));
if(c('bs_caml_int64').lt(ta,
[0,
0])||
c('bs_caml_int64').ge(ta,ea)){

throw [c('bs_caml_builtin_exceptions').failure,
"int64_of_string"];}else{


var ua=c('bs_caml_int64').add(c('bs_caml_int64').mul(ea,ra),ta);
if(c('bs_caml_int64').gt(ua,ga)){

throw [c('bs_caml_builtin_exceptions').failure,
"int64_of_string"];}else{


pa=qa+1|0;
oa=ua;
continue;}}}}}},







la=c('bs_caml_int64').mul(fa,ka(ja,da+1|0)),
ma=c('bs_caml_int64').or_(la,
[0,
0]);

if(c('bs_caml_int64').eq(ea,
[0,
10])&&
c('bs_caml_int64').neq(la,ma))

throw [c('bs_caml_builtin_exceptions').failure,
"int64_of_string"];


return ma;}


function n(aa){
switch(aa){
case 0:
return 8;
case 1:
return 16;
case 2:
return 10;}}




function o(aa){
if(aa>=65&&aa<=90||aa>=192&&aa<=214||aa>=216&&aa<=222){
return aa+32|0;}else 

return aa;}



function p(aa){
var ba=aa.length;
if(ba>31)

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"format_int: format too long"];


var ca=
["+",
"-",
" ",
0,
2,
0,
0,
0,
1,
-1,
"f"],

da=0;
while(true){
var ea=da;
if(ea>=ba){
return ca;}else{

var fa=aa.charCodeAt(ea),
ga=0;
if(fa>=69){
if(fa>=88){
if(fa>=121){
ga=1;}else 

switch(fa-88|0){
case 0:
ca[4]=1;
ca[7]=1;
da=ea+1|0;
continue;
case 13:
case 14:
case 15:
ga=5;
break;
case 12:
case 17:
ga=4;
break;
case 23:
ca[4]=0;
da=ea+1|0;
continue;
case 29:
ca[4]=2;
da=ea+1|0;
continue;
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
case 11:
case 16:
case 18:
case 19:
case 20:
case 21:
case 22:
case 24:
case 25:
case 26:
case 27:
case 28:
case 30:
case 31:
ga=1;
break;
case 32:
ca[4]=1;
da=ea+1|0;
continue;}}else



if(fa>=72){
ga=1;}else{

ca[5]=1;
ca[7]=1;
ca[10]=String.fromCharCode(o(fa));
da=ea+1|0;
continue;}}else{



var ha=fa-32|0;
if(ha>25||ha<0){
ga=1;}else 

switch(ha){
case 3:
ca[3]=1;
da=ea+1|0;
continue;
case 0:
case 11:
ga=2;
break;
case 13:
ca[0]="-";
da=ea+1|0;
continue;
case 14:
ca[9]=0;
var ia=ea+1|0;
while(function(ka){
return function(){
var la=aa.charCodeAt(ka)-48|0;
return +(la>=0&&la<=9);};}

(ia)()){
ca[9]=(c('bs_caml_int32').imul(ca[9],10)+aa.charCodeAt(ia)|0)-48|0;
ia=ia+1|0;}

da=ia;
continue;
case 1:
case 2:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
case 12:
case 15:
ga=1;
break;
case 16:
ca[2]="0";
da=ea+1|0;
continue;
case 17:
case 18:
case 19:
case 20:
case 21:
case 22:
case 23:
case 24:
case 25:
ga=3;
break;}}




switch(ga){
case 1:
da=ea+1|0;
continue;
case 2:
ca[1]=String.fromCharCode(fa);
da=ea+1|0;
continue;
case 3:
ca[6]=0;
var ja=ea;
while(function(ka){
return function(){
var la=aa.charCodeAt(ka)-48|0;
return +(la>=0&&la<=9);};}

(ja)()){
ca[6]=(c('bs_caml_int32').imul(ca[6],10)+aa.charCodeAt(ja)|0)-48|0;
ja=ja+1|0;}

da=ja;
continue;
case 4:
ca[5]=1;
ca[4]=2;
da=ea+1|0;
continue;
case 5:
ca[5]=1;
ca[10]=String.fromCharCode(fa);
da=ea+1|0;
continue;}}}}






function q(aa,ba){
var ca=aa[0],
da=aa[1],
ea=aa[2],
fa=aa[3],
ga=aa[4],
ha=aa[5],
ia=aa[6],
ja=aa[7],
ka=aa[8],
la=ba.length;
if(ha&&(ka<0||da!=="-"))
la=la+1|0;

if(fa)
if(ga){
if(ga===1)
la=la+2|0;}else 



la=la+1|0;


var ma="";
if(ca==="+"&&ea===" ")
for(var na=la,oa=ia-1|0;na<=oa;++na)
ma=ma+ea;


if(ha)
if(ka<0){
ma=ma+"-";}else
if(da!=="-")
ma=ma+da;



if(fa&&ga===0)
ma=ma+"0";

if(fa&&ga===1)
ma=ma+"0x";

if(ca==="+"&&ea==="0")
for(var pa=la,qa=ia-1|0;pa<=qa;++pa)
ma=ma+ea;


ma=ja?ma+ba.toUpperCase():ma+ba;
if(ca==="-")
for(var ra=la,sa=ia-1|0;ra<=sa;++ra)
ma=ma+" ";


return ma;}


function r(aa,ba){
if(aa==="%d"){
return String(ba);}else{

var ca=p(aa),
da=ca,
ea=ba,
fa=ea<0?
da[5]?(da[8]=-1,-ea):ea>>>0:
ea,
ga=fa.toString(n(da[4]));
if(da[9]>=0){
da[2]=" ";
var ha=da[9]-ga.length|0;
if(ha>0)
ga=c('bs_caml_utils').repeat(ha,"0")+ga;}



return q(da,ga);}}



function s(aa,ba){
var ca=p(aa),
da=ca[5]&&c('bs_caml_int64').lt(ba,
[0,
0])?
(ca[8]=-1,c('bs_caml_int64').neg(ba)):ba,
ea="",
fa=ca[4];
switch(fa){
case 0:
var ga=
[0,
8],

ha="01234567";
if(c('bs_caml_int64').lt(da,
[0,
0])){

var ia=c('bs_caml_int64').discard_sign(da),
ja=c('bs_caml_int64').div_mod(ia,ga),
ka=c('bs_caml_int64').add
([268435456,
0],
ja[0]),
la=ja[1];
ea=String.fromCharCode(ha.charCodeAt(la[1]|0))+ea;
while(c('bs_caml_int64').neq(ka,
[0,
0])){

var ma=c('bs_caml_int64').div_mod(ka,ga);
ka=ma[0];
la=ma[1];
ea=String.fromCharCode(ha.charCodeAt(la[1]|0))+ea;}}else{


var na=c('bs_caml_int64').div_mod(da,ga),
oa=na[0],
pa=na[1];
ea=String.fromCharCode(ha.charCodeAt(pa[1]|0))+ea;
while(c('bs_caml_int64').neq(oa,
[0,
0])){

var qa=c('bs_caml_int64').div_mod(oa,ga);
oa=qa[0];
pa=qa[1];
ea=String.fromCharCode(ha.charCodeAt(pa[1]|0))+ea;}}


break;
case 1:
ea=c('bs_caml_int64').to_hex(da)+ea;
break;
case 2:
var ra=
[0,
10],

sa="0123456789";
if(c('bs_caml_int64').lt(da,
[0,
0])){

var ta=c('bs_caml_int64').discard_sign(da),
ua=c('bs_caml_int64').div_mod(ta,ra),
va=c('bs_caml_int64').div_mod(c('bs_caml_int64').add
([0,
8],
ua[1]),ra),
wa=c('bs_caml_int64').add(c('bs_caml_int64').add
([214748364,
3435973836],
ua[0]),va[0]),
xa=va[1];
ea=String.fromCharCode(sa.charCodeAt(xa[1]|0))+ea;
while(c('bs_caml_int64').neq(wa,
[0,
0])){

var ya=c('bs_caml_int64').div_mod(wa,ra);
wa=ya[0];
xa=ya[1];
ea=String.fromCharCode(sa.charCodeAt(xa[1]|0))+ea;}}else{


var za=c('bs_caml_int64').div_mod(da,ra),
ab=za[0],
bb=za[1];
ea=String.fromCharCode(sa.charCodeAt(bb[1]|0))+ea;
while(c('bs_caml_int64').neq(ab,
[0,
0])){

var cb=c('bs_caml_int64').div_mod(ab,ra);
ab=cb[0];
bb=cb[1];
ea=String.fromCharCode(sa.charCodeAt(bb[1]|0))+ea;}}


break;}


if(ca[9]>=0){
ca[2]=" ";
var db=ca[9]-ea.length|0;
if(db>0)
ea=c('bs_caml_utils').repeat(db,"0")+ea;}



return q(ca,ea);}


function t(aa,ba){
var ca=p(aa),
da=ca[9]<0?6:ca[9],
ea=ba<0?(ca[8]=-1,-ba):ba,
fa="";
if(isNaN(ea)){
fa="nan";
ca[2]=" ";}else
if(isFinite(ea)){
var ga=ca[10];
switch(ga){
case "e":
fa=ea.toExponential(da);
var ha=fa.length;
if(fa[ha-3|0]==="e")
fa=fa.slice(0,ha-1|0)+("0"+fa.slice(ha-1|0));

break;
case "f":
fa=ea.toFixed(da);
break;
case "g":
var ia=da!==0?da:1;
fa=ea.toExponential(ia-1|0);
var ja=fa.indexOf("e"),
ka=Number(fa.slice(ja+1|0))|0;
if(ka<-4||ea>=1e+21||ea.toFixed().length>ia){
var la=ja-1|0;
while(fa[la]==="0")
la=la-1|0;

if(fa[la]===".")
la=la-1|0;

fa=fa.slice(0,la+1|0)+fa.slice(ja);
var ma=fa.length;
if(fa[ma-3|0]==="e")
fa=fa.slice(0,ma-1|0)+("0"+fa.slice(ma-1|0));}else{



var na=ia;
if(ka<0){
na=na-(ka+1|0)|0;
fa=ea.toFixed(na);}else 

while(function(){
fa=ea.toFixed(na);
return +(fa.length>(ia+1|0));}
())
na=na-1|0;


if(na!==0){
var oa=fa.length-1|0;
while(fa[oa]==="0")
oa=oa-1|0;

if(fa[oa]===".")
oa=oa-1|0;

fa=fa.slice(0,oa+1|0);}}



break;
default:}}else{



fa="inf";
ca[2]=" ";}

return q(ca,fa);}


var u=
function aa(ba,ca){
var da=+ba;
if(ba.length>0&&da===da)
return da;
ba=ba.replace(/_/g,"");
da=+ba;
if(ba.length>0&&da===da||/^[+-]?nan$/i.test(ba))
return da;


if(/^ *0x[0-9a-f_]+p[+-]?[0-9_]+/i.test(ba)){
var ea=ba.indexOf('p');
ea=ea==-1?ba.indexOf('P'):ea;
var fa=+ba.substring(ea+1);
da=+ba.substring(0,ea);
return da*Math.pow(2,fa);}

if(/^\+?inf(inity)?$/i.test(ba))
return Infinity;
if(/^-inf(inity)?$/i.test(ba))
return -Infinity;
ca("float_of_string");};




function v(aa){
return c('bs_curry')._2(u,aa,h);}


var w=r,

x=r,

y=l,

z=l;

g.caml_format_float=t;
g.caml_format_int=r;
g.caml_nativeint_format=w;
g.caml_int32_format=x;
g.caml_float_of_string=v;
g.caml_int64_format=s;
g.caml_int_of_string=l;
g.caml_int32_of_string=y;
g.caml_int64_of_string=m;
g.caml_nativeint_of_string=z;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_caml_io.js */





__d('bs_caml_io',['bs_curry','bs_caml_builtin_exceptions'],(function a(b,c,d,e,f,g){
'use strict';




function h(u,v){
return u+v;}


var i=undefined,

j=
["",
function(u,v){
var w=v.length-1|0;
if(typeof process!=="undefined"&&process.stdout&&process.stdout.write){
return process.stdout.write(v);}else
if(v[w]==="\n"){

return 0;}else 


return 0;}],




k=
["",
function(u,v){
var w=v.length-1|0;
if(v[w]==="\n"){

return 0;}else 


return 0;}];




function l(){

throw [c('bs_caml_builtin_exceptions').failure,
"caml_ml_open_descriptor_in not implemented"];}



function m(){

throw [c('bs_caml_builtin_exceptions').failure,
"caml_ml_open_descriptor_out not implemented"];}



function n(u){
if(u[0]!==""){
c('bs_curry')._2(u[1],u,u[0]);
u[0]="";
return 0;}else 

return 0;}



var o=function u(v){
return typeof process!=="undefined"&&process.stdout&&(process.stdout.write(v),true);};



function p(u,v,w,x){
var y=w===0&&x===v.length?v:v.slice(w,x);
if(typeof process!=="undefined"&&process.stdout&&process.stdout.write&&u===j){
return process.stdout.write(y);}else{

var z=y.lastIndexOf("\n");
if(z<0){
u[0]=u[0]+y;
return 0;}else{

u[0]=u[0]+y.slice(0,z+1|0);
n(u);
u[0]=u[0]+y.slice(z+1|0);
return 0;}}}




function q(u,v){
return p(u,String.fromCharCode(v),0,1);}


function r(u,v,w,x){

throw [c('bs_caml_builtin_exceptions').failure,
"caml_ml_input ic not implemented"];}



function s(){

throw [c('bs_caml_builtin_exceptions').failure,
"caml_ml_input_char not implemnted"];}



function t(){

return [j,

[k,
0]];}




g.$caret=h;
g.stdin=i;
g.stdout=j;
g.stderr=k;
g.caml_ml_open_descriptor_in=l;
g.caml_ml_open_descriptor_out=m;
g.caml_ml_flush=n;
g.node_std_output=o;
g.caml_ml_output=p;
g.caml_ml_output_char=q;
g.caml_ml_input=r;
g.caml_ml_input_char=s;
g.caml_ml_out_channels_list=t;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_caml_string.js */





__d('bs_caml_string',['bs_caml_builtin_exceptions'],(function a(b,c,d,e,f,g){
'use strict';



function h(v){
return String.fromCharCode(v);}


function i(v,w){
if(w>=v.length||w<0){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"index out of bounds"];}else 


return v.charCodeAt(w);}



function j(v){
if(v<0){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"String.create"];}else 


return new Array(v);}



function k(v,w){
if(v===w){
return 0;}else
if(v<w){
return -1;}else 

return 1;}



function l(v,w,x,y){
if(x>0){
for(var z=w,aa=(x+w|0)-1|0;z<=aa;++z)
v[z]=y;

return 0;}else 

return 0;}



function m(v,w,x,y,z){
if(z>0){
var aa=v.length-w|0;
if(z<=aa){
for(var ba=0,ca=z-1|0;ba<=ca;++ba)
x[y+ba|0]=v.charCodeAt(w+ba|0);

return 0;}else{

for(var da=0,ea=aa-1|0;da<=ea;++da)
x[y+da|0]=v.charCodeAt(w+da|0);

for(var fa=aa,ga=z-1|0;fa<=ga;++fa)
x[y+fa|0]=0;

return 0;}}else 


return 0;}



function n(v,w,x,y,z){
if(z>0){
if(v===x){
var aa=v,
ba=w,
ca=y,
da=z;
if(ba<ca){
var ea=(aa.length-ca|0)-1|0,
fa=da-1|0,
ga=ea>fa?fa:ea;
for(var ha=ga;ha>=0;--ha)
aa[ca+ha|0]=aa[ba+ha|0];

return 0;}else
if(ba>ca){
var ia=(aa.length-ba|0)-1|0,
ja=da-1|0,
ka=ia>ja?ja:ia;
for(var la=0;la<=ka;++la)
aa[ca+la|0]=aa[ba+la|0];

return 0;}else 

return 0;}else{


var ma=v.length-w|0;
if(z<=ma){
for(var na=0,oa=z-1|0;na<=oa;++na)
x[y+na|0]=v[w+na|0];

return 0;}else{

for(var pa=0,qa=ma-1|0;pa<=qa;++pa)
x[y+pa|0]=v[w+pa|0];

for(var ra=ma,sa=z-1|0;ra<=sa;++ra)
x[y+ra|0]=0;

return 0;}}}else 



return 0;}



function o(v){
var w=v.length,
x=new Array(w);
for(var y=0,z=w-1|0;y<=z;++y)
x[y]=v.charCodeAt(y);

return x;}


function p(v){
var w=v,
x=0,
y=v.length,
z="",
aa=y;
if(x===0&&y<=4096&&y===w.length){
return String.fromCharCode.apply(null,w);}else{

var ba=0;
while(aa>0){
var ca=aa<1024?aa:1024,
da=new Array(ca);
n(w,ba,da,0,ca);
z=z+String.fromCharCode.apply(null,da);
aa=aa-ca|0;
ba=ba+ca|0;}

return z;}}



function q(v){
var w=v.length,
x=new Array(w);
for(var y=0,z=w-1|0;y<=z;++y)
x[y]=v[y];

return p(x);}


function r(v){
if(v>31){
return +(v<127);}else 

return 0;}



function s(v,w){
return v.charCodeAt(w)+(v.charCodeAt(w+1|0)<<8)|0;}


function t(v,w){
return ((v.charCodeAt(w)+(v.charCodeAt(w+1|0)<<8)|0)+(v.charCodeAt(w+2|0)<<16)|0)+(v.charCodeAt(w+3|0)<<24)|0;}


function u(v,w){
if(w<0||w>=v.length){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"index out of bounds"];}else 


return v.charCodeAt(w);}



g.bytes_of_string=o;
g.bytes_to_string=p;
g.caml_is_printable=r;
g.caml_string_of_char_array=q;
g.caml_string_get=i;
g.caml_string_compare=k;
g.caml_create_string=j;
g.caml_fill_string=l;
g.caml_blit_string=m;
g.caml_blit_bytes=n;
g.caml_string_get16=s;
g.caml_string_get32=t;
g.string_of_char=h;
g.get=u;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_camlinternalFormatBasics.js */





__d('bs_camlinternalFormatBasics',['bs_block'],(function a(b,c,d,e,f,g){
'use strict';



function h(k){
if(typeof k==="number"){
return 0;}else 

switch(k.tag|0){
case 0:
return c('bs_block').__(0,[h(k[0])]);
case 1:
return c('bs_block').__(1,[h(k[0])]);
case 2:
return c('bs_block').__(2,[h(k[0])]);
case 3:
return c('bs_block').__(3,[h(k[0])]);
case 4:
return c('bs_block').__(4,[h(k[0])]);
case 5:
return c('bs_block').__(5,[h(k[0])]);
case 6:
return c('bs_block').__(6,[h(k[0])]);
case 7:
return c('bs_block').__(7,[h(k[0])]);
case 8:
return c('bs_block').__(8,
[k[0],
h(k[1])]);

case 9:
var l=k[0];
return c('bs_block').__(9,
[l,
l,
h(k[2])]);

case 10:
return c('bs_block').__(10,[h(k[0])]);
case 11:
return c('bs_block').__(11,[h(k[0])]);
case 12:
return c('bs_block').__(12,[h(k[0])]);
case 13:
return c('bs_block').__(13,[h(k[0])]);
case 14:
return c('bs_block').__(14,[h(k[0])]);}}





function i(k,l){
if(typeof k==="number"){
return l;}else 

switch(k.tag|0){
case 0:
return c('bs_block').__(0,[i(k[0],l)]);
case 1:
return c('bs_block').__(1,[i(k[0],l)]);
case 2:
return c('bs_block').__(2,[i(k[0],l)]);
case 3:
return c('bs_block').__(3,[i(k[0],l)]);
case 4:
return c('bs_block').__(4,[i(k[0],l)]);
case 5:
return c('bs_block').__(5,[i(k[0],l)]);
case 6:
return c('bs_block').__(6,[i(k[0],l)]);
case 7:
return c('bs_block').__(7,[i(k[0],l)]);
case 8:
return c('bs_block').__(8,
[k[0],
i(k[1],l)]);

case 9:
return c('bs_block').__(9,
[k[0],
k[1],
i(k[2],l)]);

case 10:
return c('bs_block').__(10,[i(k[0],l)]);
case 11:
return c('bs_block').__(11,[i(k[0],l)]);
case 12:
return c('bs_block').__(12,[i(k[0],l)]);
case 13:
return c('bs_block').__(13,[i(k[0],l)]);
case 14:
return c('bs_block').__(14,[i(k[0],l)]);}}





function j(k,l){
if(typeof k==="number"){
return l;}else 

switch(k.tag|0){
case 0:
return c('bs_block').__(0,[j(k[0],l)]);
case 1:
return c('bs_block').__(1,[j(k[0],l)]);
case 2:
return c('bs_block').__(2,
[k[0],
j(k[1],l)]);

case 3:
return c('bs_block').__(3,
[k[0],
j(k[1],l)]);

case 4:
return c('bs_block').__(4,
[k[0],
k[1],
k[2],
j(k[3],l)]);

case 5:
return c('bs_block').__(5,
[k[0],
k[1],
k[2],
j(k[3],l)]);

case 6:
return c('bs_block').__(6,
[k[0],
k[1],
k[2],
j(k[3],l)]);

case 7:
return c('bs_block').__(7,
[k[0],
k[1],
k[2],
j(k[3],l)]);

case 8:
return c('bs_block').__(8,
[k[0],
k[1],
k[2],
j(k[3],l)]);

case 9:
return c('bs_block').__(9,[j(k[0],l)]);
case 10:
return c('bs_block').__(10,[j(k[0],l)]);
case 11:
return c('bs_block').__(11,
[k[0],
j(k[1],l)]);

case 12:
return c('bs_block').__(12,
[k[0],
j(k[1],l)]);

case 13:
return c('bs_block').__(13,
[k[0],
k[1],
j(k[2],l)]);

case 14:
return c('bs_block').__(14,
[k[0],
k[1],
j(k[2],l)]);

case 15:
return c('bs_block').__(15,[j(k[0],l)]);
case 16:
return c('bs_block').__(16,[j(k[0],l)]);
case 17:
return c('bs_block').__(17,
[k[0],
j(k[1],l)]);

case 18:
return c('bs_block').__(18,
[k[0],
j(k[1],l)]);

case 19:
return c('bs_block').__(19,[j(k[0],l)]);
case 20:
return c('bs_block').__(20,
[k[0],
k[1],
j(k[2],l)]);

case 21:
return c('bs_block').__(21,
[k[0],
j(k[1],l)]);

case 22:
return c('bs_block').__(22,[j(k[0],l)]);
case 23:
return c('bs_block').__(23,
[k[0],
j(k[1],l)]);

case 24:
return c('bs_block').__(24,
[k[0],
k[1],
j(k[2],l)]);}}






g.concat_fmtty=i;
g.erase_rel=h;
g.concat_fmt=j;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_pervasives.js */





__d('bs_pervasives',['bs_curry','bs_caml_io','bs_caml_obj','bs_caml_format','bs_caml_string','bs_caml_exceptions','bs_caml_builtin_exceptions','bs_camlinternalFormatBasics'],(function a(b,c,d,e,f,g){
'use strict';










function h(wc){

throw [c('bs_caml_builtin_exceptions').failure,
wc];}



function i(wc){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
wc];}



var j=c('bs_caml_exceptions').create("Pervasives.Exit");

function k(wc,xc){
if(c('bs_caml_obj').caml_lessequal(wc,xc)){
return wc;}else 

return xc;}



function l(wc,xc){
if(c('bs_caml_obj').caml_greaterequal(wc,xc)){
return wc;}else 

return xc;}



function m(wc){
if(wc>=0){
return wc;}else 

return -wc|0;}



function n(wc){
return wc^-1;}


var o=-2147483648;

function p(wc,xc){
return wc+xc;}


function q(wc){
if(wc<0||wc>255){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"char_of_int"];}else 


return wc;}



function r(wc){
if(wc){
return "true";}else 

return "false";}



function s(wc){
switch(wc){
case "false":
return 0;
case "true":
return 1;


default:throw [c('bs_caml_builtin_exceptions').invalid_argument,
"bool_of_string"];}}




function t(wc){
return ""+wc;}


function u(wc){
var xc=wc.length,
yc=0;
while(true){
var zc=yc;
if(zc>=xc){
return p(wc,".");}else{

var ad=c('bs_caml_string').get(wc,zc);
if(ad>=48){
if(ad>=58){
return wc;}else{

yc=zc+1|0;
continue;}}else


if(ad!==45){
return wc;}else{

yc=zc+1|0;
continue;}}}}






function v(wc){
return u(c('bs_caml_format').caml_format_float("%.12g",wc));}


function w(wc,xc){
if(wc){

return [wc[0],
w(wc[1],xc)];}else 


return xc;}



var x=c('bs_caml_io').stdin,

y=c('bs_caml_io').stdout,

z=c('bs_caml_io').stderr;

function aa(wc,xc,yc){
return c('bs_caml_io').caml_ml_open_descriptor_out(function(){
throw "caml_sys_open not implemented by bucklescript yet\n";}
());}


function ba(wc){
return aa
([1,

[3,

[4,

[7,
0]]]],



438,wc);}


function ca(wc){
return aa
([1,

[3,

[4,

[6,
0]]]],



438,wc);}


function da(){
var wc=c('bs_caml_io').caml_ml_out_channels_list(0);
while(true){
var xc=wc;
if(xc){

try{c('bs_caml_io').caml_ml_flush(xc[0]);}catch(

yc){

}
wc=xc[1];
continue;}else 


return 0;}}




function ea(wc,xc){
return c('bs_caml_io').caml_ml_output(wc,xc,0,xc.length);}


function fa(wc,xc){
return c('bs_caml_io').caml_ml_output(wc,xc,0,xc.length);}


function ga(wc,xc,yc,zc){
if(yc<0||zc<0||yc>(xc.length-zc|0)){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"output"];}else 


return c('bs_caml_io').caml_ml_output(wc,xc,yc,zc);}



function ha(wc,xc,yc,zc){
if(yc<0||zc<0||yc>(xc.length-zc|0)){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"output_substring"];}else 


return c('bs_caml_io').caml_ml_output(wc,xc,yc,zc);}



function ia(wc,xc){
return function(){
throw "caml_output_value not implemented by bucklescript yet\n";}
();}


function ja(wc){
c('bs_caml_io').caml_ml_flush(wc);
return function(){
throw "caml_ml_close_channel not implemented by bucklescript yet\n";}
();}


function ka(wc){

try{c('bs_caml_io').caml_ml_flush(wc);}catch(

xc){

}

try{return function(){
throw "caml_ml_close_channel not implemented by bucklescript yet\n";}
();}catch(

yc){
return 0;}}



function la(wc,xc,yc){
return c('bs_caml_io').caml_ml_open_descriptor_in(function(){
throw "caml_sys_open not implemented by bucklescript yet\n";}
());}


function ma(wc){
return la
([0,

[7,
0]],

0,wc);}


function na(wc){
return la
([0,

[6,
0]],

0,wc);}


function oa(wc,xc,yc,zc){
if(yc<0||zc<0||yc>(xc.length-zc|0)){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"input"];}else 


return function(){
throw "caml_ml_input not implemented by bucklescript yet\n";}
();}



function pa(wc,xc,yc,zc){
while(true){
var ad=zc,
bd=yc;
if(ad<=0){
return 0;}else{

var cd=function(){
throw "caml_ml_input not implemented by bucklescript yet\n";}
();
if(cd){
zc=ad-cd|0;
yc=bd+cd|0;
continue;}else 


throw c('bs_caml_builtin_exceptions').end_of_file;}}}





function qa(wc,xc,yc,zc){
if(yc<0||zc<0||yc>(xc.length-zc|0)){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"really_input"];}else 


return pa(wc,xc,yc,zc);}



function ra(wc,xc){
var yc=c('bs_caml_string').caml_create_string(xc);
qa(wc,yc,0,xc);
return c('bs_caml_string').bytes_to_string(yc);}


function sa(wc){
var xc=function zc(ad,bd,cd){
while(true){
var dd=cd,
ed=bd;
if(dd){
var fd=dd[0],
gd=fd.length;
c('bs_caml_string').caml_blit_bytes(fd,0,ad,ed-gd|0,gd);
cd=dd[1];
bd=ed-gd|0;
continue;}else 


return ad;}},



yc=function zc(ad,bd){
while(true){
var cd=bd,
dd=ad,
ed=function(){
throw "caml_ml_input_scan_line not implemented by bucklescript yet\n";}
();
if(ed){
if(ed>0){
var fd=c('bs_caml_string').caml_create_string(ed-1|0);
(function(){
throw "caml_ml_input not implemented by bucklescript yet\n";})
();
c('bs_caml_io').caml_ml_input_char(wc);
if(dd){
var gd=(cd+ed|0)-1|0;
return xc(c('bs_caml_string').caml_create_string(gd),gd,
[fd,
dd]);}else 


return fd;}else{


var hd=c('bs_caml_string').caml_create_string(-ed|0);
(function(){
throw "caml_ml_input not implemented by bucklescript yet\n";})
();
bd=cd-ed|0;
ad=
[hd,
dd];

continue;}}else


if(dd){
return xc(c('bs_caml_string').caml_create_string(cd),cd,dd);}else 

throw c('bs_caml_builtin_exceptions').end_of_file;}};



return c('bs_caml_string').bytes_to_string(yc(0,0));}


function ta(){

try{return function(){
throw "caml_ml_close_channel not implemented by bucklescript yet\n";}
();}catch(

wc){
return 0;}}



function ua(wc){
return c('bs_caml_io').caml_ml_output_char(y,wc);}


function va(wc){
return fa(y,wc);}


function wa(wc){
return ea(y,wc);}


function xa(wc){
return fa(y,""+wc);}


function ya(wc){
return fa(y,u(c('bs_caml_format').caml_format_float("%.12g",wc)));}


function za(wc){

return 0;}


function ab(){
c('bs_caml_io').caml_ml_output_char(y,10);
return c('bs_caml_io').caml_ml_flush(y);}


function bb(wc){
return c('bs_caml_io').caml_ml_output_char(z,wc);}


function cb(wc){
return fa(z,wc);}


function db(wc){
return ea(z,wc);}


function eb(wc){
return fa(z,""+wc);}


function fb(wc){
return fa(z,u(c('bs_caml_format').caml_format_float("%.12g",wc)));}


function gb(wc){

return 0;}


function hb(){
c('bs_caml_io').caml_ml_output_char(z,10);
return c('bs_caml_io').caml_ml_flush(z);}


function ib(){
c('bs_caml_io').caml_ml_flush(y);
return sa(x);}


function jb(){
return c('bs_caml_format').caml_int_of_string((c('bs_caml_io').caml_ml_flush(y),sa(x)));}


function kb(){
return c('bs_caml_format').caml_float_of_string((c('bs_caml_io').caml_ml_flush(y),sa(x)));}


function lb(wc){
return wc[1];}


function mb(wc,xc){

return [c('bs_camlinternalFormatBasics').concat_fmt(wc[0],xc[0]),
p(wc[1],p("%,",xc[1]))];}



var nb=[da];

function ob(wc){
var xc=nb[0];
nb[0]=function(){
c('bs_curry')._1(wc,0);
return c('bs_curry')._1(xc,0);};

return 0;}


function pb(){
return c('bs_curry')._1(nb[0],0);}


function qb(){
pb(0);
return function(){
throw "caml_sys_exit not implemented by bucklescript yet\n";}
();}


var rb=2147483647,

sb=Infinity,

tb=-Infinity,

ub=NaN,

vb=Number.MAX_VALUE,

wb=Number.MIN_VALUE,

xb=2.220446049250313e-16,

yb=c('bs_caml_io').caml_ml_flush,

zb=c('bs_caml_io').caml_ml_output_char,

ac=c('bs_caml_io').caml_ml_output_char;

function bc(wc,xc){
return function(){
throw "caml_ml_output_int not implemented by bucklescript yet\n";}
();}


function cc(wc,xc){
return function(){
throw "caml_ml_seek_out not implemented by bucklescript yet\n";}
();}


function dc(){
return function(){
throw "caml_ml_pos_out not implemented by bucklescript yet\n";}
();}


function ec(){
return function(){
throw "caml_ml_channel_size not implemented by bucklescript yet\n";}
();}


function fc(wc,xc){
return function(){
throw "caml_ml_set_binary_mode not implemented by bucklescript yet\n";}
();}


var gc=c('bs_caml_io').caml_ml_input_char,

hc=c('bs_caml_io').caml_ml_input_char;

function ic(){
return function(){
throw "caml_ml_input_int not implemented by bucklescript yet\n";}
();}


function jc(){
return function(){
throw "caml_input_value not implemented by bucklescript yet\n";}
();}


function kc(wc,xc){
return function(){
throw "caml_ml_seek_in not implemented by bucklescript yet\n";}
();}


function lc(){
return function(){
throw "caml_ml_pos_in not implemented by bucklescript yet\n";}
();}


function mc(){
return function(){
throw "caml_ml_channel_size not implemented by bucklescript yet\n";}
();}


function nc(){
return function(){
throw "caml_ml_close_channel not implemented by bucklescript yet\n";}
();}


function oc(wc,xc){
return function(){
throw "caml_ml_set_binary_mode not implemented by bucklescript yet\n";}
();}


function pc(wc,xc){
return function(){
throw "caml_ml_seek_out_64 not implemented by bucklescript yet\n";}
();}


function qc(){
return function(){
throw "caml_ml_pos_out_64 not implemented by bucklescript yet\n";}
();}


function rc(){
return function(){
throw "caml_ml_channel_size_64 not implemented by bucklescript yet\n";}
();}


function sc(wc,xc){
return function(){
throw "caml_ml_seek_in_64 not implemented by bucklescript yet\n";}
();}


function tc(){
return function(){
throw "caml_ml_pos_in_64 not implemented by bucklescript yet\n";}
();}


function uc(){
return function(){
throw "caml_ml_channel_size_64 not implemented by bucklescript yet\n";}
();}


var vc=
[pc,
qc,
rc,
sc,
tc,
uc];


g.invalid_arg=i;
g.failwith=h;
g.Exit=j;
g.min=k;
g.max=l;
g.abs=m;
g.max_int=rb;
g.min_int=o;
g.lnot=n;
g.infinity=sb;
g.neg_infinity=tb;
g.nan=ub;
g.max_float=vb;
g.min_float=wb;
g.epsilon_float=xb;
g.$caret=p;
g.char_of_int=q;
g.string_of_bool=r;
g.bool_of_string=s;
g.string_of_int=t;
g.string_of_float=v;
g.$at=w;
g.stdin=x;
g.stdout=y;
g.stderr=z;
g.print_char=ua;
g.print_string=va;
g.print_bytes=wa;
g.print_int=xa;
g.print_float=ya;
g.print_endline=za;
g.print_newline=ab;
g.prerr_char=bb;
g.prerr_string=cb;
g.prerr_bytes=db;
g.prerr_int=eb;
g.prerr_float=fb;
g.prerr_endline=gb;
g.prerr_newline=hb;
g.read_line=ib;
g.read_int=jb;
g.read_float=kb;
g.open_out=ba;
g.open_out_bin=ca;
g.open_out_gen=aa;
g.flush=yb;
g.flush_all=da;
g.output_char=zb;
g.output_string=fa;
g.output_bytes=ea;
g.output=ga;
g.output_substring=ha;
g.output_byte=ac;
g.output_binary_int=bc;
g.output_value=ia;
g.seek_out=cc;
g.pos_out=dc;
g.out_channel_length=ec;
g.close_out=ja;
g.close_out_noerr=ka;
g.set_binary_mode_out=fc;
g.open_in=ma;
g.open_in_bin=na;
g.open_in_gen=la;
g.input_char=gc;
g.input_line=sa;
g.input=oa;
g.really_input=qa;
g.really_input_string=ra;
g.input_byte=hc;
g.input_binary_int=ic;
g.input_value=jc;
g.seek_in=kc;
g.pos_in=lc;
g.in_channel_length=mc;
g.close_in=nc;
g.close_in_noerr=ta;
g.set_binary_mode_in=oc;
g.LargeFile=vc;
g.string_of_format=lb;
g.$caret$caret=mb;
g.exit=qb;
g.at_exit=ob;
g.valid_float_lexem=u;
g.unsafe_really_input=pa;
g.do_at_exit=pb;}),null);

/** js/mercury/clients/messenger/ironman/BuckleScriptStdlib/bs_list.js */





__d('bs_list',['bs_curry','bs_caml_obj','bs_pervasives','bs_caml_builtin_exceptions'],(function a(b,c,d,e,f,g){
'use strict';






function h(bb){
var cb=0,
db=bb;
while(true){
var eb=db,
fb=cb;
if(eb){
db=eb[1];
cb=fb+1|0;
continue;}else 


return fb;}}




function i(bb){
if(bb){
return bb[0];}else 


throw [c('bs_caml_builtin_exceptions').failure,
"hd"];}




function j(bb){
if(bb){
return bb[1];}else 


throw [c('bs_caml_builtin_exceptions').failure,
"tl"];}




function k(bb,cb){
if(cb<0){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.nth"];}else{


var db=bb,
eb=cb;
while(true){
var fb=eb,
gb=db;
if(gb){
if(fb){
eb=fb-1|0;
db=gb[1];
continue;}else 


return gb[0];}else 



throw [c('bs_caml_builtin_exceptions').failure,
"nth"];}}}






function l(bb,cb){
while(true){
var db=cb,
eb=bb;
if(eb){
cb=
[eb[0],
db];

bb=eb[1];
continue;}else 


return db;}}




function m(bb){
return l(bb,0);}


function n(bb){
if(bb){
return c('bs_pervasives').$at(bb[0],n(bb[1]));}else 

return 0;}



function o(bb,cb){
if(cb){
var db=c('bs_curry')._1(bb,cb[0]);

return [db,
o(bb,cb[1])];}else 


return 0;}



function p(bb,cb,db){
if(db){
var eb=c('bs_curry')._2(cb,bb,db[0]);

return [eb,
p(bb+1|0,cb,db[1])];}else 


return 0;}



function q(bb,cb){
return p(0,bb,cb);}


function r(bb,cb){
var db=0,
eb=cb;
while(true){
var fb=eb,
gb=db;
if(fb){
eb=fb[1];
db=
[c('bs_curry')._1(bb,fb[0]),
gb];

continue;}else 


return gb;}}




function s(bb,cb){
while(true){
var db=cb;
if(db){
c('bs_curry')._1(bb,db[0]);
cb=db[1];
continue;}else 


return 0;}}




function t(bb,cb){
var db=0,
eb=bb,
fb=cb;
while(true){
var gb=fb,
hb=db;
if(gb){
c('bs_curry')._2(eb,hb,gb[0]);
fb=gb[1];
db=hb+1|0;
continue;}else 


return 0;}}




function u(bb,cb,db){
while(true){
var eb=db,
fb=cb;
if(eb){
db=eb[1];
cb=c('bs_curry')._2(bb,fb,eb[0]);
continue;}else 


return fb;}}




function v(bb,cb,db){
if(cb){
return c('bs_curry')._2(bb,cb[0],v(bb,cb[1],db));}else 

return db;}



function w(bb,cb,db){
if(cb){
if(db){
var eb=c('bs_curry')._2(bb,cb[0],db[0]);

return [eb,
w(bb,cb[1],db[1])];}else 



throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.map2"];}else


if(db){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.map2"];}else 


return 0;}



function x(bb,cb,db){
var eb=0,
fb=cb,
gb=db;
while(true){
var hb=gb,
ib=fb,
jb=eb;
if(ib){
if(hb){
gb=hb[1];
fb=ib[1];
eb=
[c('bs_curry')._2(bb,ib[0],hb[0]),
jb];

continue;}else 



throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.rev_map2"];}else


if(hb){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.rev_map2"];}else 


return jb;}}




function y(bb,cb,db){
while(true){
var eb=db,
fb=cb;
if(fb){
if(eb){
c('bs_curry')._2(bb,fb[0],eb[0]);
db=eb[1];
cb=fb[1];
continue;}else 



throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.iter2"];}else


if(eb){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.iter2"];}else 


return 0;}}




function z(bb,cb,db,eb){
while(true){
var fb=eb,
gb=db,
hb=cb;
if(gb){
if(fb){
eb=fb[1];
db=gb[1];
cb=c('bs_curry')._3(bb,hb,gb[0],fb[0]);
continue;}else 



throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.fold_left2"];}else


if(fb){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.fold_left2"];}else 


return hb;}}




function aa(bb,cb,db,eb){
if(cb){
if(db){
return c('bs_curry')._3(bb,cb[0],db[0],aa(bb,cb[1],db[1],eb));}else 


throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.fold_right2"];}else


if(db){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.fold_right2"];}else 


return eb;}



function ba(bb,cb){
while(true){
var db=cb;
if(db){
if(c('bs_curry')._1(bb,db[0])){
cb=db[1];
continue;}else 


return 0;}else 


return 1;}}




function ca(bb,cb){
while(true){
var db=cb;
if(db){
if(c('bs_curry')._1(bb,db[0])){
return 1;}else{

cb=db[1];
continue;}}else 



return 0;}}




function da(bb,cb,db){
while(true){
var eb=db,
fb=cb;
if(fb){
if(eb){
if(c('bs_curry')._2(bb,fb[0],eb[0])){
db=eb[1];
cb=fb[1];
continue;}else 


return 0;}else 



throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.for_all2"];}else


if(eb){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.for_all2"];}else 


return 1;}}




function ea(bb,cb,db){
while(true){
var eb=db,
fb=cb;
if(fb){
if(eb){
if(c('bs_curry')._2(bb,fb[0],eb[0])){
return 1;}else{

db=eb[1];
cb=fb[1];
continue;}}else 




throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.exists2"];}else


if(eb){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.exists2"];}else 


return 0;}}




function fa(bb,cb){
while(true){
var db=cb;
if(db){
if(c('bs_caml_obj').caml_compare(db[0],bb)){
cb=db[1];
continue;}else 


return 1;}else 


return 0;}}




function ga(bb,cb){
while(true){
var db=cb;
if(db){
if(db[0]===bb){
return 1;}else{

cb=db[1];
continue;}}else 



return 0;}}




function ha(bb,cb){
while(true){
var db=cb;
if(db){
var eb=db[0];
if(c('bs_caml_obj').caml_compare(eb[0],bb)){
cb=db[1];
continue;}else 


return eb[1];}else 


throw c('bs_caml_builtin_exceptions').not_found;}}




function ia(bb,cb){
while(true){
var db=cb;
if(db){
var eb=db[0];
if(eb[0]===bb){
return eb[1];}else{

cb=db[1];
continue;}}else 



throw c('bs_caml_builtin_exceptions').not_found;}}




function ja(bb,cb){
while(true){
var db=cb;
if(db){
if(c('bs_caml_obj').caml_compare(db[0][0],bb)){
cb=db[1];
continue;}else 


return 1;}else 


return 0;}}




function ka(bb,cb){
while(true){
var db=cb;
if(db){
if(db[0][0]===bb){
return 1;}else{

cb=db[1];
continue;}}else 



return 0;}}




function la(bb,cb){
if(cb){
var db=cb[1],
eb=cb[0];
if(c('bs_caml_obj').caml_compare(eb[0],bb)){

return [eb,
la(bb,db)];}else 


return db;}else 


return 0;}



function ma(bb,cb){
if(cb){
var db=cb[1],
eb=cb[0];
if(eb[0]===bb){
return db;}else 


return [eb,
ma(bb,db)];}else 



return 0;}



function na(bb,cb){
while(true){
var db=cb;
if(db){
var eb=db[0];
if(c('bs_curry')._1(bb,eb)){
return eb;}else{

cb=db[1];
continue;}}else 



throw c('bs_caml_builtin_exceptions').not_found;}}




function oa(bb){
return function(cb){
var db=0,
eb=cb;
while(true){
var fb=eb,
gb=db;
if(fb){
var hb=fb[1],
ib=fb[0];
if(c('bs_curry')._1(bb,ib)){
eb=hb;
db=
[ib,
gb];

continue;}else{


eb=hb;
continue;}}else 



return l(gb,0);}};}





function pa(bb,cb){
var db=0,
eb=0,
fb=cb;
while(true){
var gb=fb,
hb=eb,
ib=db;
if(gb){
var jb=gb[1],
kb=gb[0];
if(c('bs_curry')._1(bb,kb)){
fb=jb;
db=
[kb,
ib];

continue;}else{


fb=jb;
eb=
[kb,
hb];

continue;}}else 




return [l(ib,0),
l(hb,0)];}}





function qa(bb){
if(bb){
var cb=bb[0],
db=qa(bb[1]);


return [[cb[0],
db[0]],


[cb[1],
db[1]]];}else 




return [0,
0];}




function ra(bb,cb){
if(bb){
if(cb){


return [[bb[0],
cb[0]],

ra(bb[1],cb[1])];}else 



throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.combine"];}else


if(cb){

throw [c('bs_caml_builtin_exceptions').invalid_argument,
"List.combine"];}else 


return 0;}



function sa(bb,cb,db){
if(cb){
if(db){
var eb=db[0],
fb=cb[0];
if(c('bs_curry')._2(bb,fb,eb)<=0){

return [fb,
sa(bb,cb[1],db)];}else 



return [eb,
sa(bb,cb,db[1])];}else 



return cb;}else 


return db;}



function ta(bb,cb){
while(true){
var db=cb,
eb=bb;
if(eb){
if(db){
cb=db[1];
bb=eb-1|0;
continue;}else 



throw [c('bs_caml_builtin_exceptions').assert_failure,

["list.ml",
223,
11]];}else 




return db;}}




function ua(bb,cb){
var db=function gb(hb,ib){
var jb=0;
if(hb!==2){
if(hb!==3){
jb=1;}else
if(ib){
var kb=ib[1];
if(kb){
var lb=kb[1];
if(lb){
var mb=lb[0],
nb=kb[0],
ob=ib[0];
if(c('bs_curry')._2(bb,ob,nb)<=0){
if(c('bs_curry')._2(bb,nb,mb)<=0){

return [ob,

[nb,

[mb,
0]]];}else



if(c('bs_curry')._2(bb,ob,mb)<=0){

return [ob,

[mb,

[nb,
0]]];}else 





return [mb,

[ob,

[nb,
0]]];}else




if(c('bs_curry')._2(bb,ob,mb)<=0){

return [nb,

[ob,

[mb,
0]]];}else



if(c('bs_curry')._2(bb,nb,mb)<=0){

return [nb,

[mb,

[ob,
0]]];}else 





return [mb,

[nb,

[ob,
0]]];}else 





jb=1;}else 


jb=1;}else 


jb=1;}else

if(ib){
var pb=ib[1];
if(pb){
var qb=pb[0],
rb=ib[0];
if(c('bs_curry')._2(bb,rb,qb)<=0){

return [rb,

[qb,
0]];}else 




return [qb,

[rb,
0]];}else 




jb=1;}else 


jb=1;

if(jb===1){
var sb=hb>>1,
tb=hb-sb|0,
ub=ta(sb,ib),
vb=eb(sb,ib),
wb=eb(tb,ub),
xb=vb,
yb=wb,
zb=0;
while(true){
var ac=zb,
bc=yb,
cc=xb;
if(cc){
if(bc){
var dc=bc[0],
ec=cc[0];
if(c('bs_curry')._2(bb,ec,dc)>0){
zb=
[ec,
ac];

xb=cc[1];
continue;}else{


zb=
[dc,
ac];

yb=bc[1];
continue;}}else 



return l(cc,ac);}else 


return l(bc,ac);}}},





eb=function gb(hb,ib){
var jb=0;
if(hb!==2){
if(hb!==3){
jb=1;}else
if(ib){
var kb=ib[1];
if(kb){
var lb=kb[1];
if(lb){
var mb=lb[0],
nb=kb[0],
ob=ib[0];
if(c('bs_curry')._2(bb,ob,nb)>0){
if(c('bs_curry')._2(bb,nb,mb)>0){

return [ob,

[nb,

[mb,
0]]];}else



if(c('bs_curry')._2(bb,ob,mb)>0){

return [ob,

[mb,

[nb,
0]]];}else 





return [mb,

[ob,

[nb,
0]]];}else




if(c('bs_curry')._2(bb,ob,mb)>0){

return [nb,

[ob,

[mb,
0]]];}else



if(c('bs_curry')._2(bb,nb,mb)>0){

return [nb,

[mb,

[ob,
0]]];}else 





return [mb,

[nb,

[ob,
0]]];}else 





jb=1;}else 


jb=1;}else 


jb=1;}else

if(ib){
var pb=ib[1];
if(pb){
var qb=pb[0],
rb=ib[0];
if(c('bs_curry')._2(bb,rb,qb)>0){

return [rb,

[qb,
0]];}else 




return [qb,

[rb,
0]];}else 




jb=1;}else 


jb=1;

if(jb===1){
var sb=hb>>1,
tb=hb-sb|0,
ub=ta(sb,ib),
vb=db(sb,ib),
wb=db(tb,ub),
xb=vb,
yb=wb,
zb=0;
while(true){
var ac=zb,
bc=yb,
cc=xb;
if(cc){
if(bc){
var dc=bc[0],
ec=cc[0];
if(c('bs_curry')._2(bb,ec,dc)<=0){
zb=
[ec,
ac];

xb=cc[1];
continue;}else{


zb=
[dc,
ac];

yb=bc[1];
continue;}}else 



return l(cc,ac);}else 


return l(bc,ac);}}},





fb=h(cb);
if(fb<2){
return cb;}else 

return db(fb,cb);}



function va(bb,cb){
var db=function gb(hb,ib){
var jb=0;
if(hb!==2){
if(hb!==3){
jb=1;}else
if(ib){
var kb=ib[1];
if(kb){
var lb=kb[1];
if(lb){
var mb=lb[0],
nb=kb[0],
ob=ib[0],
pb=c('bs_curry')._2(bb,ob,nb);
if(pb){
if(pb<0){
var qb=c('bs_curry')._2(bb,nb,mb);
if(qb){
if(qb<0){

return [ob,

[nb,

[mb,
0]]];}else{




var rb=c('bs_curry')._2(bb,ob,mb);
if(rb){
if(rb<0){

return [ob,

[mb,

[nb,
0]]];}else 





return [mb,

[ob,

[nb,
0]]];}else 






return [ob,

[nb,
0]];}}else 






return [ob,

[nb,
0]];}else{




var sb=c('bs_curry')._2(bb,ob,mb);
if(sb){
if(sb<0){

return [nb,

[ob,

[mb,
0]]];}else{




var tb=c('bs_curry')._2(bb,nb,mb);
if(tb){
if(tb<0){

return [nb,

[mb,

[ob,
0]]];}else 





return [mb,

[nb,

[ob,
0]]];}else 






return [nb,

[ob,
0]];}}else 






return [nb,

[ob,
0]];}}else{





var ub=c('bs_curry')._2(bb,nb,mb);
if(ub){
if(ub<0){

return [nb,

[mb,
0]];}else 




return [mb,

[nb,
0]];}else 





return [nb,
0];}}else 




jb=1;}else 


jb=1;}else 


jb=1;}else

if(ib){
var vb=ib[1];
if(vb){
var wb=vb[0],
xb=ib[0],
yb=c('bs_curry')._2(bb,xb,wb);
if(yb){
if(yb<0){

return [xb,

[wb,
0]];}else 




return [wb,

[xb,
0]];}else 





return [xb,
0];}else 



jb=1;}else 


jb=1;

if(jb===1){
var zb=hb>>1,
ac=hb-zb|0,
bc=ta(zb,ib),
cc=eb(zb,ib),
dc=eb(ac,bc),
ec=cc,
fc=dc,
gc=0;
while(true){
var hc=gc,
ic=fc,
jc=ec;
if(jc){
if(ic){
var kc=ic[1],
lc=ic[0],
mc=jc[1],
nc=jc[0],
oc=c('bs_curry')._2(bb,nc,lc);
if(oc){
if(oc>0){
gc=
[nc,
hc];

ec=mc;
continue;}else{


gc=
[lc,
hc];

fc=kc;
continue;}}else{



gc=
[nc,
hc];

fc=kc;
ec=mc;
continue;}}else 



return l(jc,hc);}else 


return l(ic,hc);}}},





eb=function gb(hb,ib){
var jb=0;
if(hb!==2){
if(hb!==3){
jb=1;}else
if(ib){
var kb=ib[1];
if(kb){
var lb=kb[1];
if(lb){
var mb=lb[0],
nb=kb[0],
ob=ib[0],
pb=c('bs_curry')._2(bb,ob,nb);
if(pb){
if(pb>0){
var qb=c('bs_curry')._2(bb,nb,mb);
if(qb){
if(qb>0){

return [ob,

[nb,

[mb,
0]]];}else{




var rb=c('bs_curry')._2(bb,ob,mb);
if(rb){
if(rb>0){

return [ob,

[mb,

[nb,
0]]];}else 





return [mb,

[ob,

[nb,
0]]];}else 






return [ob,

[nb,
0]];}}else 






return [ob,

[nb,
0]];}else{




var sb=c('bs_curry')._2(bb,ob,mb);
if(sb){
if(sb>0){

return [nb,

[ob,

[mb,
0]]];}else{




var tb=c('bs_curry')._2(bb,nb,mb);
if(tb){
if(tb>0){

return [nb,

[mb,

[ob,
0]]];}else 





return [mb,

[nb,

[ob,
0]]];}else 






return [nb,

[ob,
0]];}}else 






return [nb,

[ob,
0]];}}else{





var ub=c('bs_curry')._2(bb,nb,mb);
if(ub){
if(ub>0){

return [nb,

[mb,
0]];}else 




return [mb,

[nb,
0]];}else 





return [nb,
0];}}else 




jb=1;}else 


jb=1;}else 


jb=1;}else

if(ib){
var vb=ib[1];
if(vb){
var wb=vb[0],
xb=ib[0],
yb=c('bs_curry')._2(bb,xb,wb);
if(yb){
if(yb>0){

return [xb,

[wb,
0]];}else 




return [wb,

[xb,
0]];}else 





return [xb,
0];}else 



jb=1;}else 


jb=1;

if(jb===1){
var zb=hb>>1,
ac=hb-zb|0,
bc=ta(zb,ib),
cc=db(zb,ib),
dc=db(ac,bc),
ec=cc,
fc=dc,
gc=0;
while(true){
var hc=gc,
ic=fc,
jc=ec;
if(jc){
if(ic){
var kc=ic[1],
lc=ic[0],
mc=jc[1],
nc=jc[0],
oc=c('bs_curry')._2(bb,nc,lc);
if(oc){
if(oc<0){
gc=
[nc,
hc];

ec=mc;
continue;}else{


gc=
[lc,
hc];

fc=kc;
continue;}}else{



gc=
[nc,
hc];

fc=kc;
ec=mc;
continue;}}else 



return l(jc,hc);}else 


return l(ic,hc);}}},





fb=h(cb);
if(fb<2){
return cb;}else 

return db(fb,cb);}



var wa=c('bs_pervasives').$at,

xa=n,

ya=oa,

za=ua,

ab=ua;

g.length=h;
g.hd=i;
g.tl=j;
g.nth=k;
g.rev=m;
g.append=wa;
g.rev_append=l;
g.concat=xa;
g.flatten=n;
g.iter=s;
g.iteri=t;
g.map=o;
g.mapi=q;
g.rev_map=r;
g.fold_left=u;
g.fold_right=v;
g.iter2=y;
g.map2=w;
g.rev_map2=x;
g.fold_left2=z;
g.fold_right2=aa;
g.for_all=ba;
g.exists=ca;
g.for_all2=da;
g.exists2=ea;
g.mem=fa;
g.memq=ga;
g.find=na;
g.filter=ya;
g.find_all=oa;
g.partition=pa;
g.assoc=ha;
g.assq=ia;
g.mem_assoc=ja;
g.mem_assq=ka;
g.remove_assoc=la;
g.remove_assq=ma;
g.split=qa;
g.combine=ra;
g.sort=za;
g.stable_sort=ua;
g.fast_sort=ab;
g.sort_uniq=va;
g.merge=sa;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/reactRe.js */





__d('reactRe',['bs_list','bs_array','bs_curry','React','bs_caml_array','bs_pervasives','bs_js_primitive','bs_caml_builtin_exceptions'],(function a(b,c,d,e,f,g){

'use strict';










var h=c('bs_array').of_list;

function i(ja,ka,la,ma,na,oa,pa){
var qa=na?na[0]:undefined,
ra=oa?oa[0]:undefined,
sa=c('bs_curry')._3(la,ka,qa,ra);
if(ma){
var ta=ma[1],
ua=ma[0];
if(ta){
var va=ta[1],
wa=ta[0];
if(va){
var xa=va[1],
ya=va[0];
if(xa){
var za=xa[1],
ab=xa[0];
if(za){
var bb=za[1],
cb=za[0];
if(bb){
var db=bb[1],
eb=bb[0];
if(db){
var fb=db[1],
gb=db[0];
if(fb){
var hb=fb[1],
ib=fb[0];
if(hb){
var jb=hb[1],
kb=hb[0];
if(jb){
var lb=jb[1],
mb=jb[0];
if(lb){
var nb=lb[1],
ob=lb[0];
if(nb){
var pb=nb[1],
qb=nb[0];
if(pb){
var rb=pb[1],
sb=pb[0];
if(rb){
var tb=rb[1],
ub=rb[0];
if(tb){
var vb=tb[1],
wb=tb[0];
if(vb){
var xb=vb[1],
yb=vb[0];
if(xb){
if(xb[1]){
var zb="Reason allows up to 17 static children (but dynamic children in an array can be unlimited in size); You have "+(c('bs_pervasives').string_of_int(c('bs_list').length(ma))+", please put them in an array and assign key to the elements. Sorry for the inconvenience!");

throw [c('bs_caml_builtin_exceptions').invalid_argument,
zb];}else 


return c('React').createElement(ja,sa,ua,wa,ya,ab,cb,eb,gb,ib,kb,mb,ob,qb,sb,ub,wb,yb,xb[0]);}else 


return c('React').createElement(ja,sa,ua,wa,ya,ab,cb,eb,gb,ib,kb,mb,ob,qb,sb,ub,wb,yb);}else 


return c('React').createElement(ja,sa,ua,wa,ya,ab,cb,eb,gb,ib,kb,mb,ob,qb,sb,ub,wb);}else 


return c('React').createElement(ja,sa,ua,wa,ya,ab,cb,eb,gb,ib,kb,mb,ob,qb,sb,ub);}else 


return c('React').createElement(ja,sa,ua,wa,ya,ab,cb,eb,gb,ib,kb,mb,ob,qb,sb);}else 


return c('React').createElement(ja,sa,ua,wa,ya,ab,cb,eb,gb,ib,kb,mb,ob,qb);}else 


return c('React').createElement(ja,sa,ua,wa,ya,ab,cb,eb,gb,ib,kb,mb,ob);}else 


return c('React').createElement(ja,sa,ua,wa,ya,ab,cb,eb,gb,ib,kb,mb);}else 


return c('React').createElement(ja,sa,ua,wa,ya,ab,cb,eb,gb,ib,kb);}else 


return c('React').createElement(ja,sa,ua,wa,ya,ab,cb,eb,gb,ib);}else 


return c('React').createElement(ja,sa,ua,wa,ya,ab,cb,eb,gb);}else 


return c('React').createElement(ja,sa,ua,wa,ya,ab,cb,eb);}else 


return c('React').createElement(ja,sa,ua,wa,ya,ab,cb);}else 


return c('React').createElement(ja,sa,ua,wa,ya,ab);}else 


return c('React').createElement(ja,sa,ua,wa,ya);}else 


return c('React').createElement(ja,sa,ua,wa);}else 


return c('React').createElement(ja,sa,ua);}else 


return c('React').createElement(ja,sa);}



function j(ja){
if(c('bs_js_primitive').is_nil_undef(ja)){
return 0;}else
if(Array.isArray(ja)){
return c('bs_array').to_list(ja);}else 


return [ja,
0];}




function k(){
return 0;}


function l(ja,ka,la){
return 0;}


function m(ja,ka,la){
return 0;}


function n(ja,ka){
return 0;}


function o(){
return 0;}


function p(ja){
var ka=function oa(pa){
var qa=pa.reasonProps,
ra=ja[8];
if(qa!==undefined){
return qa;}else
if(ra){
return c('bs_curry')._1(ra[0],pa);}else 


throw [c('bs_caml_builtin_exceptions').invalid_argument,
"A JS component called the Reason component "+(ja[0]+(" which didn't implement the JS->Reason React props conversion. Did you forget to add `JsProps` to "+(ja[0]+"'s `include ReactRe.Component.*`?")))];},



la=c('React').createClass
({displayName:ja[0],
instanceVars:null,
memoizedUpdaterCallbacks:null,
memoizedUpdaterCount:0,
memoizedRefCallbacks:null,
memoizedRefCount:0,
getInitialState:function oa(){
var pa=this;
pa.instanceVars=c('bs_curry')._1(ja[1],0);
pa.memoizedUpdaterCallbacks=c('bs_caml_array').caml_make_vect(30,null);
pa.memoizedRefCallbacks=c('bs_caml_array').caml_make_vect(30,null);
var qa=this,
ra=ka(qa.props);

return {mlState:c('bs_curry')._1(ja[2],ra)};},


componentDidMount:function oa(){
var pa=this,
qa=this,
ra=qa.state.mlState,
sa=c('bs_curry')._1(ja[3],
[ra,
ka(qa.props),
pa.updaterMethod,
pa.handlerMethod,
pa.instanceVars,
pa.setStateMethod]);

if(sa){
var ta=sa[0];
return qa.setState(function(ua,va){

return {mlState:ta};});}else 



return 0;},


componentWillUpdate:function oa(pa,qa){
var ra=this,
sa=this,
ta=sa.state.mlState,
ua=c('bs_curry')._3(ja[5],
[ta,
ka(sa.props),
ra.updaterMethod,
ra.handlerMethod,
ra.instanceVars,
ra.setStateMethod],
ka(pa),qa.mlState);
if(ua){
var va=ua[0];
return sa.setState(function(wa,xa){

return {mlState:va};});}else 



return 0;},


componentDidUpdate:function oa(pa,qa){
var ra=this,
sa=this,
ta=sa.state.mlState,
ua=c('bs_curry')._3(ja[6],ka(pa),qa.mlState,
[ta,
ka(sa.props),
ra.updaterMethod,
ra.handlerMethod,
ra.instanceVars,
ra.setStateMethod]);

if(ua){
var va=ua[0];
return sa.setState(function(wa,xa){

return {mlState:va};});}else 



return 0;},


componentWillReceiveProps:function oa(pa){
var qa=this,
ra=this,
sa=ra.state.mlState,
ta=c('bs_curry')._2(ja[4],
[sa,
ka(ra.props),
qa.updaterMethod,
qa.handlerMethod,
qa.instanceVars,
qa.setStateMethod],
ka(pa));
if(ta){
var ua=ta[0];
return ra.setState(function(va,wa){

return {mlState:ua};});}else 



return 0;},


componentWillUnmount:function oa(){
var pa=this,
qa=this,
ra=qa.state.mlState;
return c('bs_curry')._1(ja[7],
[ra,
ka(qa.props),
pa.updaterMethod,
pa.handlerMethod,
pa.instanceVars,
pa.setStateMethod]);},


handlerMethod:function oa(pa){
var qa=this,
ra=qa.memoizedRefCount,
sa=qa.memoizedRefCallbacks,
ta=
function(xa,ya){
for(var za=0;za<xa.length;za++){

if(xa[za]==null)
return null;

if(xa[za][0]===ya)
return xa[za][1];}


return null;}

(sa,pa);
if(ta!==null){
return ta;}else{

var ua=this,
va=function xa(ya){
var za=ua.state.mlState;
return c('bs_curry')._2(pa,
[za,
ka(ua.props),
qa.updaterMethod,
qa.handlerMethod,
qa.instanceVars,
qa.setStateMethod],
ya);};

if(ra<30){
var wa=qa.memoizedRefCallbacks;
c('bs_caml_array').caml_array_set(wa,ra,
[pa,
va]);

qa.memoizedRefCount=qa.memoizedRefCount+1|0;}

return va;}},


setStateMethod:function oa(pa){
var qa=this,
ra=this;
return ra.setState(function(sa,ta){
var ua=sa.mlState,
va=ka(ta),
wa=qa.updaterMethod,
xa=qa.handlerMethod,
ya=qa.instanceVars,
za=qa.setStateMethod,
ab=
[ua,
va,
wa,
xa,
ya,
za];


return {mlState:c('bs_curry')._1(pa,ab)};});},



updaterMethod:function oa(pa){
var qa=this,
ra=qa.memoizedUpdaterCount,
sa=qa.memoizedUpdaterCallbacks,
ta=
function(xa,ya){
for(var za=0;za<xa.length;za++){

if(xa[za]==null)
return null;

if(xa[za][0]===ya)
return xa[za][1];}


return null;}

(sa,pa);
if(ta!==null){
return ta;}else{

var ua=this,
va=function xa(ya){
var za=ua.state.mlState,
ab=c('bs_curry')._2(pa,
[za,
ka(ua.props),
qa.updaterMethod,
qa.handlerMethod,
qa.instanceVars,
qa.setStateMethod],
ya);
if(ab){
var bb=ab[0];
return ua.setState(function(cb,db){

return {mlState:bb};});}else 



return 0;};


if(ra<30){
var wa=qa.memoizedUpdaterCallbacks;
c('bs_caml_array').caml_array_set(wa,ra,
[pa,
va]);

qa.memoizedUpdaterCount=qa.memoizedUpdaterCount+1|0;}

return va;}},


render:function oa(){
var pa=this,
qa=this;
return c('bs_curry')._1(ja[9],
[qa.state.mlState,
ka(qa.props),
pa.updaterMethod,
pa.handlerMethod,
pa.instanceVars,
pa.setStateMethod]);}}),



ma=function oa(pa,qa,ra){

return {reasonProps:pa,
ref:qa,
key:ra};},


na=function oa(pa,qa,ra,sa,ta){
return i(la,pa,ma,qa,ra,sa,0);};


return [la,
na];}



function q(ja,ka,la){
return Object.assign(Object.assign({},ja),
{ref:ka,
key:la});}



function r(ja,ka,la,ma,na,oa){
return i(ja,ka,q,la,ma,na,0);}


function s(){
return 0;}


function t(){
return 0;}


function u(){
return 0;}


function v(){
return 0;}


var w=
[k,
l,
m,
n,
o,
v,
0],


x=
[k,
l,
m,
n,
o],


y=
[k,
l,
m,
n,
o,
0,
x],


z=
[k,
l,
m,
n,
o,
u,
0,
w,
y];


function aa(){
return 0;}


function ba(){
return 0;}


var ca=
[k,
l,
m,
n,
o,
aa,
ba];


function da(){
return 0;}


function ea(){
return 0;}


var fa=
[k,
l,
m,
n,
o,
ea],


ga=
[k,
l,
m,
n,
o,
da,
0,
fa],


ha=
[k,
l,
m,
n,
o,
s,
0,
t,
z,
ca,
ga],


ia=[];

g.listToElement=h;
g.jsChildrenToReason=j;
g.ComponentBase=ia;
g.CreateComponent=p;
g.wrapPropsShamelessly=r;
g.Component=ha;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/imageBlockReact.js */





__d('imageBlockReact',['reactRe','ImageBlock.react','bs_js_null_undefined'],(function a(b,c,d,e,f,g){

'use strict';





function h(i,j,k,l){
var m=
{className:c('bs_js_null_undefined').from_opt(i),
contentClassName:c('bs_js_null_undefined').from_opt(j),
imageClassName:c('bs_js_null_undefined').from_opt(k),
spacing:c('bs_js_null_undefined').from_opt(l)},

n=c('ImageBlock.react');
return function(o,p,q,r){
return c('reactRe').wrapPropsShamelessly(n,m,o,p,q,r);};}



g.createElement=h;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/imageReact.js */





__d('imageReact',['reactRe','Image.react','bs_js_null_undefined'],(function a(b,c,d,e,f,g){

'use strict';





function h(i,j,k,l,m,n){
var o=
{className:c('bs_js_null_undefined').from_opt(i),
alt:c('bs_js_null_undefined').from_opt(j),
src:c('bs_js_null_undefined').from_opt(k),
height:c('bs_js_null_undefined').from_opt(l),
title:c('bs_js_null_undefined').from_opt(m),
width:c('bs_js_null_undefined').from_opt(n)},

p=c('Image.react');
return function(q,r,s,t){
return c('reactRe').wrapPropsShamelessly(p,o,q,r,s,t);};}



g.createElement=h;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/linkReact.js */





__d('linkReact',['reactRe','Link.react','bs_js_null_undefined'],(function a(b,c,d,e,f,g){

'use strict';





function h(i,j,k,l,m,n,o,p,q,r){
var s=
{"aria-label":c('bs_js_null_undefined').from_opt(i),
className:c('bs_js_null_undefined').from_opt(j),
href:c('bs_js_null_undefined').from_opt(k),
onClick:c('bs_js_null_undefined').from_opt(l),
onMouseDown:c('bs_js_null_undefined').from_opt(m),
onMouseEnter:c('bs_js_null_undefined').from_opt(n),
role:c('bs_js_null_undefined').from_opt(o),
tabIndex:c('bs_js_null_undefined').from_opt(p),
target:c('bs_js_null_undefined').from_opt(q),
title:c('bs_js_null_undefined').from_opt(r)},

t=c('Link.react');
return function(u,v,w,x){
return c('reactRe').wrapPropsShamelessly(t,s,u,v,w,x);};}



g.createElement=h;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerContactActionsRe.js */





__d("messengerContactActionsRe",[],(function a(b,c,d,e,f,g){

'use strict';


var h=
{ADD_OWNER:"ADD_OWNER",
MESSAGE:"MESSAGE",
PROFILE:"PROFILE",
REMOVE:"REMOVE",
REMOVE_OWNER:"REMOVE_OWNER",
SELECT:"SELECT"};


g.actions=h;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/utilsRe.js */





__d('utilsRe',['bs_array','bs_curry','bs_js_boolean','bs_js_primitive','bs_caml_builtin_exceptions'],(function a(b,c,d,e,f,g){

'use strict';







function h(p){
if(c('bs_js_primitive').is_nil_undef(p)){
return 0;}else 

return +p;}



function i(p,q){
if(p){
return p[0];}else 

return q;}



function j(p){
if(p){
return p[0];}else 

return 0;}



function k(p){
if(c('bs_js_primitive').is_nil_undef(p)){
return 0;}else 

return [+p];}



function l(p){
if(p){
return c('bs_js_boolean').to_js_boolean(p[0]);}else 

return undefined;}



function m(p){
if(p){
return c('bs_js_boolean').to_js_boolean(p[0]);}else 

return false;}



function n(p,q){
var r=p,
s=q,
t=0;
while(true){
var u=t,
v=s;
if(v){
var w=v[1],
x=c('bs_curry')._1(r,v[0]);
if(x){
t=
[x[0],
u];

s=w;
continue;}else{


s=w;
continue;}}else 



return u;}}




function o(p){
return c('bs_array').map(function(q){
if(q){
return q[0];}else 


throw [c('bs_caml_builtin_exceptions').invalid_argument,
"arrayCompact: sorry, something went wrong."];},


p.filter(function(q){
if(q){
return 1;}else 

return 0;}));}




g.isTruthy=h;
g.$pipe$unknown=i;
g.isSomeTrue=j;
g.nullUndefinedBooleanToOptionBool=k;
g.optionBoolToNullUndefinedBoolean=l;
g.optionBoolToBoolean=m;
g.listFilterMap=n;
g.arrayCompact=o;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerProfileImageWrapperReact.js */





__d('messengerProfileImageWrapperReact',['reactRe','utilsRe','bs_js_null_undefined','MessengerProfileImageWrapper.react'],(function a(b,c,d,e,f,g){

'use strict';






function h(i,j,k,l,m,n,o,p,q){
var r=
{className:c('bs_js_null_undefined').from_opt(i),
isMessengerUser:c('utilsRe').optionBoolToNullUndefinedBoolean(j),
size:c('bs_js_null_undefined').from_opt(k),
customBadge:c('bs_js_null_undefined').from_opt(l),
renderOnlineStatus:c('utilsRe').optionBoolToNullUndefinedBoolean(m),
tooltipContent:c('bs_js_null_undefined').from_opt(n),
threadColor:c('bs_js_null_undefined').from_opt(o),
threadType:c('bs_js_null_undefined').from_opt(p),
showBadge:c('utilsRe').optionBoolToNullUndefinedBoolean(q)},

s=c('MessengerProfileImageWrapper.react');
return function(t,u,v,w){
return c('reactRe').wrapPropsShamelessly(s,r,t,u,v,w);};}



g.createElement=h;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerContactImageReact.js */





__d('messengerContactImageReact',['bs_curry','React','reactRe','utilsRe','imageReact','bs_js_primitive','bs_js_null_undefined','MessengerContactImage.react','messengerProfileImageWrapperReact'],(function a(b,c,d,e,f,g){

'use strict';











var h=c('reactRe').Component[9],

i=h[0],

j=h[1],

k=h[2],

l=h[3],

m=h[4],

n=h[5],

o=h[6],

p="MessengerContactImageReact";

function q(aa){
var ba=aa[1];
return c('React').createElement("div",
{className:c('utilsRe').$pipe$unknown(ba[0],"")},
c('messengerProfileImageWrapperReact').createElement(0,ba[2],[ba[3]],ba[1],0,0,0,0,[1])
([c('imageReact').createElement(0,[""],ba[4],[ba[3]],0,[ba[3]])(0,0,0,0),
0],
0,0,0));}


var r=[function(aa){

return [c('bs_js_primitive').null_undefined_to_opt(aa.className),
c('bs_js_primitive').null_undefined_to_opt(aa.customBadge),
c('utilsRe').nullUndefinedBooleanToOptionBool(aa.isMessengerUser),
aa.size,
c('bs_js_primitive').null_undefined_to_opt(aa.src)];}],



s=
[i,
j,
k,
l,
m,
n,
o,
p,
q,
r],


t=c('reactRe').CreateComponent
([p,
n,
o,
i,
l,
j,
k,
m,
r,
q]),


u=t[1];

function v(aa,ba,ca,da,ea){
return c('bs_curry')._1(u,
[aa,
ba,
ca,
da,
ea]);}



function w(aa,ba,ca,da,ea){
var fa=
{className:c('bs_js_null_undefined').from_opt(aa),
customBadge:c('bs_js_null_undefined').from_opt(ba),
isMessengerUser:c('utilsRe').optionBoolToNullUndefinedBoolean(ca),
size:da,
src:c('bs_js_null_undefined').from_opt(ea)},

ga=c('MessengerContactImage.react');
return function(ha,ia,ja,ka){
return c('reactRe').wrapPropsShamelessly(ga,fa,ha,ia,ja,ka);};}



var x=[w],

y=c('utilsRe').$pipe$unknown,

z=t[0];

g.$pipe$unknown=y;
g.MessengerContactImage=s;
g.comp=z;
g.wrapProps=u;
g.createElement=v;
g.StraightJSComponent=x;}),null);

/** js/mercury/clients/shared/components/MercuryThreadTimestamp.react.js */




__d('MercuryThreadTimestamp.react',['React','formatDate','joinClasses'],(function a(b,c,d,e,f,g){

'use strict';var h,i,






j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').PureComponent);i=h&&h.prototype;k.prototype.






render=function(){
var l=this.props.time;
if(!l)
return c('React').createElement('abbr',null);



return (c('React').createElement('abbr',
{className:c('joinClasses')(this.props.className,'timestamp'),
title:this.props.title||new Date(l).toLocaleDateString(),
'data-utime':l/1000},
this.props.text||c('formatDate')(new Date(l),'g:ia')));};


function k(){h.apply(this,arguments);}k.propTypes={time:j.number,title:j.string,text:j.string};


f.exports=k;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/mercuryThreadTimestampReact.js */





__d('mercuryThreadTimestampReact',['reactRe','bs_js_null_undefined','MercuryThreadTimestamp.react'],(function a(b,c,d,e,f,g){

'use strict';





function h(i,j,k){
var l=
{time:c('bs_js_null_undefined').from_opt(i),
title:c('bs_js_null_undefined').from_opt(j),
text:c('bs_js_null_undefined').from_opt(k)},

m=c('MercuryThreadTimestamp.react');
return function(n,o,p,q){
return c('reactRe').wrapPropsShamelessly(m,l,n,o,p,q);};}



g.createElement=h;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerLocalTimeReact.js */





__d("messengerLocalTimeReact",["cx","fbt","bs_curry","React","reactRe","bs_js_boolean","joinClasses","mercuryThreadTimestampReact"],(function a(b,c,d,e,f,g,h,i){

'use strict';










var j=c("reactRe").Component[0],

k=c("reactRe").Component[1],

l=c("reactRe").Component[2],

m=c("reactRe").Component[3],

n=c("reactRe").Component[4],

o=c("reactRe").Component[5],

p=c("reactRe").Component[6],

q=c("reactRe").Component[7],

r="MessengerLocalTimeReact";

function s(ba){
var ca=ba[1],
da=ca[1];
if(da){
var ea=da[0]-new Date().getTimezoneOffset()*-60;
if(ea===0){
return null;}else{

var fa=new Date(Date.now()+ea*1000),
ga=fa.getHours(),
ha=+(ga<6||ga>22),
ia=c("joinClasses")("_10rk",ca[0]);
return c("React").createElement("span",
{className:ia},
c("React").createElement("span",
{className:
c("bs_js_boolean").to_js_boolean(ha)?"_2f3x":""},

"(",c("mercuryThreadTimestampReact").createElement([fa.getTime()],0,0)(0,0,0,0)," ",i._(["local time","228ad13a04708b5f5d8670681da01742"]),

")"));}}else 


return null;}



var t=c("reactRe").Component[8],

u=c("reactRe").Component[9],

v=c("reactRe").Component[10],

w=
[j,
k,
l,
m,
n,
o,
p,
q,
t,
u,
v,
r,
22,
6,
s],


x=c("reactRe").CreateComponent
([r,
o,
q,
j,
m,
k,
l,
n,
p,
s]),


y=x[1];

function z(ba,ca){
return c("bs_curry")._1(y,
[ba,
ca]);}



var aa=x[0];

g.MessengerLocalTime=w;
g.comp=aa;
g.wrapProps=y;
g.createElement=z;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerTextWithEntitiesReact.js */





__d('messengerTextWithEntitiesReact',['reactRe','utilsRe','bs_js_null_undefined','MessengerTextWithEntities.react'],(function a(b,c,d,e,f,g){

'use strict';






function h(i,j,k){
var l=
{renderEmoji:c('utilsRe').optionBoolToNullUndefinedBoolean(i),
renderEmoticons:c('utilsRe').optionBoolToNullUndefinedBoolean(j),
text:c('bs_js_null_undefined').from_opt(k)},

m=c('MessengerTextWithEntities.react');
return function(n,o,p,q){
return c('reactRe').wrapPropsShamelessly(m,l,n,o,p,q);};}



g.createElement=h;}),null);

/** js/mercury/clients/shared/components/MercuryParticipantsImage.react.js */






__d('MercuryParticipantsImage.react',['MercuryParticipants','React','SplitImage.react','areEqual'],(function a(b,c,d,e,f,g){

'use strict';







var h=c('React').PropTypes,

i=c('React').createClass({displayName:'MercuryParticipantsImage',
_bigImageToken:null,

propTypes:
{participants:h.array.isRequired,
size:h.number},


getInitialState:function j(){

return {participantImages:[]};},



componentDidMount:function j(){
this._getParticipantImages(this.props);},


componentWillReceiveProps:function j(k){
this._getParticipantImages(k);},


componentWillUnmount:function j(){
this._bigImageToken&&this._bigImageToken.remove();},


shouldComponentUpdate:function j(k,l){

return (k.size!==this.props.size||
!c('areEqual')(l.participantImages,this.state.participantImages));},



render:function j(){
if(this.state.participantImages.length>0)

return (c('React').createElement(c('SplitImage.react'),
{border:true,

className:this.props.className,
srcs:this.state.participantImages,
size:this.props.size}));




return null;},


_getParticipantImages:function j(k){
this._bigImageToken&&this._bigImageToken.remove();
if(!k.participants||!k.participants.length){
this.setState({participantImages:[]});}else 

this._bigImageToken=c('MercuryParticipants').getOrderedBigImageMulti
(k.participants,
function(l){
this.isMounted()&&this.setState
({participantImages:l});}.

bind(this));}});





f.exports=i;}),null);

/** js/mercury/clients/shared/components/MercuryThreadImage.react.js */




__d('MercuryThreadImage.react',['cx','ImmutableObject','MercuryIDs','MercuryParticipantsImage.react','MessagingThreadType','MercuryParticipantsConstants','Pixelz.react','React','areEqual'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,












k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.







shouldComponentUpdate=function(m,n){

return (m.thread.image_src!==this.props.thread.image_src||
!c('areEqual')
(m.thread.participants,
this.props.thread.participants)||

m.size!==this.props.size||
m.viewer!==this.props.viewer||
m.useBackground!==this.props.useBackground);};

l.prototype.

render=function(){
var m=this.props.thread,
n=this.props.size||c('MercuryParticipantsConstants').BIG_IMAGE_SIZE,
o=m.image_src;

if(o){
if(this.props.useBackground)

return (c('React').createElement('div',
{style:
{height:n,
backgroundImage:'url('+o+')',
backgroundPosition:'50% 50%',
backgroundRepeat:'no-repeat',
backgroundSize:'cover',
width:n}}));






return (c('React').createElement(c('Pixelz.react'),
{alt:'',
height:n,
resizeMode:'cover',
src:o,
width:n}));}




if(m.thread_type===c('MessagingThreadType').ROOM){
var p=
{height:n+'px',
width:n+'px'};

if(m.custom_color)
p.background=m.custom_color;


return (c('React').createElement('span',
{className:"_asv _asw",

style:p},
m.name[0]));}



var q=c('MercuryIDs').isCanonical(m.thread_id),
r=c('MercuryIDs').getParticipantIDFromUserID(this.props.viewer),


s=[];
if(m.participants)
s=q?
m.participants.filter(function(t){return t!==r;}):
m.participants.slice(0,3);


if(s.length===0&&q)
s.push(r);



return (c('React').createElement(c('MercuryParticipantsImage.react'),
{className:this.props.className,
participants:s,
size:n}));};


function l(){i.apply(this,arguments);}l.propTypes={thread:k.instanceOf(c('ImmutableObject')).isRequired,viewer:k.string.isRequired,size:k.number,useBackground:k.bool};


f.exports=l;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/mercuryThreadImageReact.js */





__d('mercuryThreadImageReact',['reactRe','bs_js_null_undefined','MercuryThreadImage.react'],(function a(b,c,d,e,f,g){

'use strict';





function h(i,j,k,l){
var m=
{size:c('bs_js_null_undefined').from_opt(i),
thread:j,
useBackground:c('bs_js_null_undefined').from_opt(k),
viewer:l},

n=c('MercuryThreadImage.react');
return function(o,p,q,r){
return c('reactRe').wrapPropsShamelessly(n,m,o,p,q,r);};}



g.createElement=h;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerThreadImageReact.js */





__d('messengerThreadImageReact',['bs_curry','reactRe','utilsRe','MercuryIDs','bs_js_primitive','mercuryThreadImageReact','messengerProfileImageWrapperReact'],(function a(b,c,d,e,f,g){

'use strict';









var h=c('reactRe').Component[9],

i=h[0],

j=h[1],

k=h[2],

l=h[3],

m=h[4],

n=h[5],

o=h[6],

p="MessengerThreadImageReact";

function q(y){
var z=y[4].other_user_fbid,
aa=y[3].size,
ba=+c('MercuryIDs').isCanonical(y[4].thread_id);
if(c('bs_js_primitive').is_nil_undef(z)){
return 0;}else
if(ba!==0){
if(aa!==0){
var ca=c('MercuryIDs').getParticipantIDFromUserID(z),
da=y[3].get(ca);
if(da!==undefined&&!c('bs_js_primitive').is_nil_undef(da)){
return c('utilsRe').isTruthy(da.is_messenger_user);}else 

return 0;}else 


return 0;}else 


return 0;}



function r(y){
var z=y[1];
return c('messengerProfileImageWrapperReact').createElement(z[0],[q(z)],z[2],0,0,0,c('bs_js_primitive').null_undefined_to_opt(z[4].custom_color),c('bs_js_primitive').null_undefined_to_opt(z[4].thread_type),[z[1]&&+c('MercuryIDs').isCanonical(z[4].thread_id)])
([c('mercuryThreadImageReact').createElement(z[2],z[4],[true],z[5])(0,0,0,0),
0],
0,0,0);}


var s=[function(y){

return [c('bs_js_primitive').null_undefined_to_opt(y.className),
c('utilsRe').isTruthy(y.showBadge),
c('bs_js_primitive').null_undefined_to_opt(y.size),
y.participants,
y.thread,
y.viewer];}],



t=
[i,
j,
k,
l,
m,
n,
o,
p,
c('utilsRe').$pipe$unknown,
q,
r,
s],


u=c('reactRe').CreateComponent
([p,
n,
o,
i,
l,
j,
k,
m,
s,
r]),


v=u[1];

function w(y,z,aa,ba,ca,da){
var ea=z?z[0]:1;
return c('bs_curry')._1(v,
[y,
ea,
aa,
ba,
ca,
da]);}



var x=u[0];

g.MessengerThreadImage=t;
g.comp=x;
g.wrapProps=v;
g.createElement=w;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerContactListRowReact.js */





__d("messengerContactListRowReact",["cx","ix","fbt","bs_array","bs_curry","React","reactRe","utilsRe","linkReact","imageReact","bs_js_boolean","MercuryIDs","Badge.react","joinClasses","bs_js_primitive","PresenceStatus","imageBlockReact","AvailableListConstants","MercuryParticipantTypes","messengerLocalTimeReact","MessengerAdminGroupUtils","MercuryTypeaheadConstants","messengerContactActionsRe","messengerThreadImageReact","messengerContactImageReact","messengerTextWithEntitiesReact"],(function a(b,c,d,e,f,g,h,i,j){

'use strict';




























function k(ra,sa){
if(ra){
return +ra[0].contains(sa);}else 

return 0;}



function l(ra,sa,ta){
var ua=ta.photo,
va=0;
if(c("bs_js_primitive").is_nil_undef(ua)){
va=1;}else
if(ua===""){
va=1;}else 

return c("bs_curry")._4(c("messengerContactImageReact").createElement(["_5l39 _5rmm"],0,c("utilsRe").nullUndefinedBooleanToOptionBool(ta.isMessengerUser),32,[ua]),0,0,0,0);

if(va===1){
var wa=ta.thread,
xa=ta.participants,
ya=+(ta.type===c("MercuryTypeaheadConstants").THREAD_TYPE),
za=0,
ab,
bb;
if(sa){
if(c("bs_js_primitive").is_nil_undef(xa)){
za=2;}else
if(ya!==0){
ab=sa[0];
bb=xa;
za=3;}else 

za=2;}else

if(c("bs_js_primitive").is_nil_undef(wa)){
za=2;}else
if(c("bs_js_primitive").is_nil_undef(xa)){
za=2;}else
if(ya!==0){
ab=wa;
bb=xa;
za=3;}else 

za=2;

switch(za){
case 2:
return c("React").createElement("div",
{className:"_5l39"});

case 3:
return c("bs_curry")._4(c("messengerThreadImageReact").createElement(["_5l39"],0,[32],bb,ab,ra),0,0,0,0);}}}






function m(ra){
var sa=ra.subtitle,
ta=0;
if(c("bs_js_primitive").is_nil_undef(sa)){
ta=1;}else
if(sa===""){
ta=1;}else 

return c("React").createElement("div",undefined,c("React").createElement("div",
{className:"_3q34"},
c("messengerTextWithEntitiesReact").createElement([1],[1],[ra.title])(0,0,0,0)),c("React").createElement("div",
{className:"_3q35"},
sa));

if(ta===1){
var ua=c("utilsRe").isTruthy(ra.isWorkUser);
return c("React").createElement("div",
{className:"_364g"},
ra.title,c("bs_curry")._4(c("messengerLocalTimeReact").createElement("_5ywd",c("bs_js_primitive").null_undefined_to_opt(ra.timezone)),0,0,0,0),ua!==0?c("React").createElement(c("Badge.react"),
{size:"small",
type:"work"}):
null);}}




function n(ra,sa){
var ta=sa.type;
if(ra){
if(ra[0]!==0){
if(c("bs_js_primitive").is_nil_undef(ta)){
return 0;}else
if(ta===c("MercuryParticipantTypes").FRIEND||ta===c("MercuryParticipantTypes").USER){
var ua=c("MercuryIDs").getUserIDFromParticipantID(sa.uid);
if(c("bs_js_primitive").is_nil_undef(ua)){
return 0;}else 

return +(c("PresenceStatus").get(ua)===c("AvailableListConstants").ACTIVE);}else 


return 0;}else 


return 0;}else 


return 0;}



var o=c("React").createElement("span",
{className:"_5rh4"},j._(["Added","caa0dca417ec08a73f09c55063060211"])),




p=c("React").createElement("span",
{className:"_5rh4"},j._(["Invited","8f474698674314a64ff0ae047f8531aa"])),




q=c("imageReact").createElement(["_1kqm"],0,[i("86852")],0,0,0)(0,0,0,0);

function r(){
var ra=c("reactRe").Component[8][8][6],
sa=ra[1],
ta=ra[4],
ua="MessengerContactListRowReact",
va=function nb(ob){

return [c("bs_curry")._1(ob[2],ob[14]),
0];},


wa=function nb(){
return [0];},

xa=function nb(ob,pb){
ob[4][0]=[pb];
return 0;},

ya=function nb(ob){
var pb=ob[1],
qb=c("utilsRe").isSomeTrue(pb[7]),
rb=pb[11],
sb=ob[4][0];
if(qb!==0){
if(rb){
if(sb){
var tb=sb[0];
c("bs_curry")._1(rb[0],tb);
var ub=pb[10];
if(ub){
c("bs_curry")._1(ub[0],tb);
return 0;}else 

return 0;}else 


return 0;}else 


return 0;}else 


return 0;},


za=function nb(ob,pb,qb){
var rb=qb[1],
sb=c("utilsRe").isSomeTrue(rb[7]),
tb=ob[11],
ub=qb[4][0];
if(sb!==0){
if(tb){
if(ub){
var vb=ub[0];
c("bs_curry")._1(tb[0],vb);
var wb=rb[10];
if(wb){
c("bs_curry")._1(wb[0],vb);
return 0;}else 

return 0;}else 


return 0;}else 


return 0;}else 


return 0;},


ab=function nb(ob,pb){
var qb=+(pb[14]!==ob[1][14]);
if(qb!==0){

return [[c("bs_curry")._1(pb[2],pb[14]),
ob[0][1]]];}else 


return 0;},


bb=function nb(ob,pb){
var qb=ob[1],
rb=c("utilsRe").isSomeTrue(qb[5]),
sb=qb[9];
if(rb!==0&&sb){
c("bs_curry")._1(sb[0],qb[14]);
return 0;}else 

return 0;},


cb=function nb(ob,pb){
var qb=pb[0],
rb=ob[1];
if(qb===c("messengerContactActionsRe").actions.SELECT){
c("bs_curry")._2(rb[12],rb[14],pb[1]);
return 0;}else{

var sb=rb[8];
if(sb){
c("bs_curry")._2(sb[0],qb,rb[14]);
return 0;}else 

return 0;}},



db=function nb(ob,pb){
var qb=ob[1][0];
if(qb){
return 0;}else{

pb.stopPropagation();
pb.preventDefault();
return 0;}},


eb=function nb(ob,pb){
pb.stopPropagation();
return cb(ob,
[c("messengerContactActionsRe").actions.SELECT,
pb]);},


fb=function nb(ob,pb){

return [[ob[0][0],
pb]];},


gb=function nb(ob){
var pb=ob[2],
qb=ob[1],
rb=ob[0];
if(k(qb[13],rb[0].uid)){
return o;}else
if(k(qb[6],rb[0].uid)){
return p;}else
if(k(qb[16],rb[0].uid)){
return q;}else
if(n(qb[17],rb[0])){
return c("React").createElement("div",
{className:"_jg2"});}else{


var sb=qb[1],
tb=sb?c("utilsRe").arrayCompact(sb[0]):undefined,
ub=qb[18],
vb=rb[0].thread,
wb,
xb=0,
yb;
if(ub){
yb=ub[0];
xb=1;}else
if(c("bs_js_primitive").is_nil_undef(vb)){
wb=0;}else{

yb=vb;
xb=1;}

if(xb===1){
var zb=+c("MessengerAdminGroupUtils").isAdmin(tb,rb[0].uid);
wb=+c("MessengerAdminGroupUtils").isOwner(c("bs_js_boolean").to_js_boolean(zb),yb);}

var ac=wb!==0?c("React").createElement("span",
{className:"_5qsj"},j._(["Admin","c9f412a8b7da7c81223713ffdab9ce1d"])):


null,
bc=function dc(ec,fc){
return c("bs_curry")._2(pb,cb,
[ec,
fc]);},


cc=qb[0];
if(cc){
return c("React").createElement("div",undefined,ac,c("React").createElement(cc[0],
{className:"_rwo",
adminIds:tb,
contact:rb[0],
extrasEnabled:c("bs_js_boolean").to_js_boolean(qb[4]),
isOpen:c("bs_js_boolean").to_js_boolean(rb[1]),
onAction:bc,
onToggle:c("bs_curry")._1(pb,fb),
viewer:qb[19]}));}else 


return ac;}},



hb=function nb(ob){
var pb=ob[3],
qb=ob[2],
rb=ob[1],
sb=ob[0],
tb=c("joinClasses")(c("utilsRe").$pipe$unknown(rb[15],""),"_5l37"+

(c("utilsRe").optionBoolToBoolean(rb[7])?" "+"_1k1p":"")+
(c("bs_js_boolean").to_js_boolean(sb[1])?" "+"_rwn":"")),

ub=rb[0],
vb=ub?-1:0,
wb=c("linkReact").createElement(0,["_5f0v"],0,[c("bs_curry")._1(qb,eb)],[c("bs_curry")._1(qb,db)],[c("bs_curry")._1(qb,bb)],0,[vb],0,0)
([c("imageBlockReact").createElement(0,["_5l38"],0,["medium"])
([l(rb[19],rb[18],sb[0]),

[m(sb[0]),

[gb(ob),
0]]],


0,0,0),
0],
0,0,0),
xb=c("utilsRe").isSomeTrue(rb[3]);
if(xb!==0){
return c("React").createElement("li",
{ref:c("bs_curry")._1(pb,xa),
className:tb},
wb);}else 

return c("React").createElement("li",
{className:tb,
"aria-selected":c("utilsRe").optionBoolToNullUndefinedBoolean(rb[7]),
role:"option",
ref:c("bs_curry")._1(pb,xa)},
wb);},


ib=[function(nb){
var ob=nb.adminIds;

return [c("bs_js_primitive").null_undefined_to_opt(nb.actionsClass),
c("bs_js_primitive").is_nil_undef(ob)?0:[c("bs_array").map(c("bs_js_primitive").null_undefined_to_opt,ob)],
nb.contactAdapter,
c("utilsRe").nullUndefinedBooleanToOptionBool(nb.disableRole),
+nb.extraActionsEnabled,
c("utilsRe").nullUndefinedBooleanToOptionBool(nb.hasHoverState),
c("bs_js_primitive").null_undefined_to_opt(nb.invitedEntryIDs),
c("utilsRe").nullUndefinedBooleanToOptionBool(nb.isHighlighted),
c("bs_js_primitive").null_undefined_to_opt(nb.onAction),
c("bs_js_primitive").null_undefined_to_opt(nb.onHighlight),
c("bs_js_primitive").null_undefined_to_opt(nb.onRenderHighlight),
c("bs_js_primitive").null_undefined_to_opt(nb.onScrollIntoView),
nb.onSelect,
c("bs_js_primitive").null_undefined_to_opt(nb.originalEntryIDs),
nb.rawContact,
c("bs_js_primitive").null_undefined_to_opt(nb.rowClassName),
c("bs_js_primitive").null_undefined_to_opt(nb.selectedEntryIDs),
c("utilsRe").nullUndefinedBooleanToOptionBool(nb.showPresence),
c("bs_js_primitive").null_undefined_to_opt(nb.thread),
nb.viewer];}],


jb=
[sa,
ta,
ua,
va,
wa,
xa,
ya,
za,
ab,
bb,
cb,
db,
eb,
fb,
gb,
hb,
ib],

kb=c("reactRe").CreateComponent
([ua,
wa,
va,
ya,
ab,
sa,
za,
ta,
ib,
hb]),

lb=kb[1],
mb=function nb(ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,ac,bc,cc,dc,ec,fc,gc,hc){
return c("bs_curry")._1(lb,
[ob,
pb,
qb,
rb,
sb,
tb,
ub,
vb,
wb,
xb,
yb,
zb,
ac,
bc,
cc,
dc,
ec,
fc,
gc,
hc]);};



return [jb,
kb[0],
lb,
mb];}



var s=c("reactRe").Component[8][8][6],

t=s[1],

u=s[4],

v="MessengerContactListRowReact";

function w(ra){

return [c("bs_curry")._1(ra[2],ra[14]),
0];}



function x(){
return [0];}


function y(ra,sa){
ra[4][0]=[sa];
return 0;}


function z(ra){
var sa=ra[1],
ta=c("utilsRe").isSomeTrue(sa[7]),
ua=sa[11],
va=ra[4][0];
if(ta!==0){
if(ua){
if(va){
var wa=va[0];
c("bs_curry")._1(ua[0],wa);
var xa=sa[10];
if(xa){
c("bs_curry")._1(xa[0],wa);
return 0;}else 

return 0;}else 


return 0;}else 


return 0;}else 


return 0;}



function aa(ra,sa,ta){
var ua=ta[1],
va=c("utilsRe").isSomeTrue(ua[7]),
wa=ra[11],
xa=ta[4][0];
if(va!==0){
if(wa){
if(xa){
var ya=xa[0];
c("bs_curry")._1(wa[0],ya);
var za=ua[10];
if(za){
c("bs_curry")._1(za[0],ya);
return 0;}else 

return 0;}else 


return 0;}else 


return 0;}else 


return 0;}



function ba(ra,sa){
var ta=+(sa[14]!==ra[1][14]);
if(ta!==0){

return [[c("bs_curry")._1(sa[2],sa[14]),
ra[0][1]]];}else 


return 0;}



function ca(ra,sa){
var ta=ra[1],
ua=c("utilsRe").isSomeTrue(ta[5]),
va=ta[9];
if(ua!==0&&va){
c("bs_curry")._1(va[0],ta[14]);
return 0;}else 

return 0;}



function da(ra,sa){
var ta=sa[0],
ua=ra[1];
if(ta===c("messengerContactActionsRe").actions.SELECT){
c("bs_curry")._2(ua[12],ua[14],sa[1]);
return 0;}else{

var va=ua[8];
if(va){
c("bs_curry")._2(va[0],ta,ua[14]);
return 0;}else 

return 0;}}




function ea(ra,sa){
var ta=ra[1][0];
if(ta){
return 0;}else{

sa.stopPropagation();
sa.preventDefault();
return 0;}}



function fa(ra,sa){
sa.stopPropagation();
return da(ra,
[c("messengerContactActionsRe").actions.SELECT,
sa]);}



function ga(ra,sa){

return [[ra[0][0],
sa]];}



function ha(ra){
var sa=ra[2],
ta=ra[1],
ua=ra[0];
if(k(ta[13],ua[0].uid)){
return o;}else
if(k(ta[6],ua[0].uid)){
return p;}else
if(k(ta[16],ua[0].uid)){
return q;}else
if(n(ta[17],ua[0])){
return c("React").createElement("div",
{className:"_jg2"});}else{


var va=ta[1],
wa=va?c("utilsRe").arrayCompact(va[0]):undefined,
xa=ta[18],
ya=ua[0].thread,
za,
ab=0,
bb;
if(xa){
bb=xa[0];
ab=1;}else
if(c("bs_js_primitive").is_nil_undef(ya)){
za=0;}else{

bb=ya;
ab=1;}

if(ab===1){
var cb=+c("MessengerAdminGroupUtils").isAdmin(wa,ua[0].uid);
za=+c("MessengerAdminGroupUtils").isOwner(c("bs_js_boolean").to_js_boolean(cb),bb);}

var db=za!==0?c("React").createElement("span",
{className:"_5qsj"},j._(["Admin","c9f412a8b7da7c81223713ffdab9ce1d"])):


null,
eb=function gb(hb,ib){
return c("bs_curry")._2(sa,da,
[hb,
ib]);},


fb=ta[0];
if(fb){
return c("React").createElement("div",undefined,db,c("React").createElement(fb[0],
{className:"_rwo",
adminIds:wa,
contact:ua[0],
extrasEnabled:c("bs_js_boolean").to_js_boolean(ta[4]),
isOpen:c("bs_js_boolean").to_js_boolean(ua[1]),
onAction:eb,
onToggle:c("bs_curry")._1(sa,ga),
viewer:ta[19]}));}else 


return db;}}




function ia(ra){
var sa=ra[3],
ta=ra[2],
ua=ra[1],
va=ra[0],
wa=c("joinClasses")(c("utilsRe").$pipe$unknown(ua[15],""),"_5l37"+

(c("utilsRe").optionBoolToBoolean(ua[7])?" "+"_1k1p":"")+
(c("bs_js_boolean").to_js_boolean(va[1])?" "+"_rwn":"")),

xa=ua[0],
ya=xa?-1:0,
za=c("linkReact").createElement(0,["_5f0v"],0,[c("bs_curry")._1(ta,fa)],[c("bs_curry")._1(ta,ea)],[c("bs_curry")._1(ta,ca)],0,[ya],0,0)
([c("imageBlockReact").createElement(0,["_5l38"],0,["medium"])
([l(ua[19],ua[18],va[0]),

[m(va[0]),

[ha(ra),
0]]],


0,0,0),
0],
0,0,0),
ab=c("utilsRe").isSomeTrue(ua[3]);
if(ab!==0){
return c("React").createElement("li",
{ref:c("bs_curry")._1(sa,y),
className:wa},
za);}else 

return c("React").createElement("li",
{className:wa,
"aria-selected":c("utilsRe").optionBoolToNullUndefinedBoolean(ua[7]),
role:"option",
ref:c("bs_curry")._1(sa,y)},
za);}



var ja=[function(ra){
var sa=ra.adminIds;

return [c("bs_js_primitive").null_undefined_to_opt(ra.actionsClass),
c("bs_js_primitive").is_nil_undef(sa)?0:[c("bs_array").map(c("bs_js_primitive").null_undefined_to_opt,sa)],
ra.contactAdapter,
c("utilsRe").nullUndefinedBooleanToOptionBool(ra.disableRole),
+ra.extraActionsEnabled,
c("utilsRe").nullUndefinedBooleanToOptionBool(ra.hasHoverState),
c("bs_js_primitive").null_undefined_to_opt(ra.invitedEntryIDs),
c("utilsRe").nullUndefinedBooleanToOptionBool(ra.isHighlighted),
c("bs_js_primitive").null_undefined_to_opt(ra.onAction),
c("bs_js_primitive").null_undefined_to_opt(ra.onHighlight),
c("bs_js_primitive").null_undefined_to_opt(ra.onRenderHighlight),
c("bs_js_primitive").null_undefined_to_opt(ra.onScrollIntoView),
ra.onSelect,
c("bs_js_primitive").null_undefined_to_opt(ra.originalEntryIDs),
ra.rawContact,
c("bs_js_primitive").null_undefined_to_opt(ra.rowClassName),
c("bs_js_primitive").null_undefined_to_opt(ra.selectedEntryIDs),
c("utilsRe").nullUndefinedBooleanToOptionBool(ra.showPresence),
c("bs_js_primitive").null_undefined_to_opt(ra.thread),
ra.viewer];}],



ka=
[t,
u,
v,
w,
x,
y,
z,
aa,
ba,
ca,
da,
ea,
fa,
ga,
ha,
ia,
ja],


la=c("reactRe").CreateComponent
([v,
x,
w,
z,
ba,
t,
aa,
u,
ja,
ia]),


ma=la[1];

function na(ra,sa,ta,ua,va,wa,xa,ya,za,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb){
return c("bs_curry")._1(ma,
[ra,
sa,
ta,
ua,
va,
wa,
xa,
ya,
za,
ab,
bb,
cb,
db,
eb,
fb,
gb,
hb,
ib,
jb,
kb]);}



var oa=32,

pa=c("utilsRe").$pipe$unknown,

qa=la[0];

g.imageSize=oa;
g.$pipe$unknown=pa;
g.idsContain=k;
g.renderContactImage=l;
g.renderContactText=m;
g.getPresenceStatus=n;
g.isOriginal=o;
g.isInvited=p;
g.isSelected=q;
g.Make=r;
g.MessengerContactListRow=ka;
g.comp=qa;
g.wrapProps=ma;
g.createElement=na;}),null);

/** js/mercury/clients/messenger/components/MessengerContactList.react.js */







__d('MessengerContactList.react',['cx','fbt','messengerContactListRowReact','ImageBlock.react','immutable','ImmutableObject','MessengerSpinner.react','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,

l=c('messengerContactListRowReact').comp,










m=c('React').PropTypes;j=babelHelpers.inherits

(n,c('React').PureComponent);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.































































$MessengerContactList_renderListSection=
function(t,
u){


return (c('React').createElement('div',{key:u,className:"_29hk"},
this.$MessengerContactList_renderHeader(u),
c('React').createElement('ul',
{id:this.props.ariaOwneeID,
role:this.props.disableRole?undefined:'listbox',
className:"_29hl"},
t.map
(function(v,w){
var x=w===0?
c('joinClasses')
(this.props.rowClassName,
"_3h3c"):

this.props.rowClassName;

return (c('React').createElement(l,
{actionsClass:this.props.actionsClass,
adminIds:this.props.adminIds,
contactAdapter:this.props.contactAdapter,
disableRole:this.props.disableRole,
extraActionsEnabled:!!this.props.extraActionsEnabled,
hasHoverState:this.props.hasHoverState,
invitedEntryIDs:this.props.invitedEntryIDs,
isHighlighted:
this.props.highlightedEntry&&
this.props.highlightedEntry.getUniqueID()===
v.getUniqueID(),

key:v.id||v.getUniqueID(),
onAction:this.props.onAction,
onHighlight:this.props.onHighlight,
onRenderHighlight:this.props.onRenderHighlight,
onScrollIntoView:this.props.onScrollIntoView,
onSelect:this.props.onSelect,
originalEntryIDs:this.props.originalEntryIDs,
rawContact:v,
rowClassName:x,
selectedEntryIDs:this.props.selectedEntryIDs,
showPresence:this.props.showPresence,
thread:this.props.thread,
viewer:this.props.viewer}));}.


bind(this)))));}.




bind(this),p;}n.prototype.render=function(){return c('React').createElement('div',{className:this.props.className},this.props.listSections.map(this.$MessengerContactList_renderListSection).toArray(),this.$MessengerContactList_renderSpinner(),this.$MessengerContactList_renderEmptyResult());};n.prototype.

$MessengerContactList_renderHeader=function(o){
if(!o)
return null;



return (c('React').createElement('div',{className:"_225b"},
o));};


n.prototype.

$MessengerContactList_renderSpinner=function(){
if(!this.props.isLoading)
return null;



return (c('React').createElement(c('ImageBlock.react'),
{className:"_225c",
spacing:'medium'},
c('React').createElement(c('MessengerSpinner.react'),
{className:"_2i59",
color:'grey'}),

c('React').createElement('div',{className:"_4g0h"},i._(["Searching...","f4c606c1e2eaf9894178c3cd57de0ffc"]))));};






n.prototype.

$MessengerContactList_renderEmptyResult=function(){
if(this.props.isLoading||
this.props.listSections.size>0||
!this.props.queryString||
this.props.queryString.length===0)
return null;



return (c('React').createElement('div',{className:"_3xcx"},i._(["No results found","063eab86f61cd512f14b5ff802cbe06c"])));};





n.propTypes={actionsClass:m.func,adminIds:m.arrayOf(m.string),ariaOwneeID:m.string,contactAdapter:m.func.isRequired,disableRole:m.bool,extraActionsEnabled:m.bool,hasHoverState:m.bool,highlightedEntry:m.object,invitedEntryIDs:m.instanceOf(c('immutable').Set),isLoading:m.bool,listSections:m.instanceOf(c('immutable').OrderedMap).isRequired,onAction:m.func,onHighlight:m.func,onRenderHighlight:m.func,onScrollIntoView:m.func,onSelect:m.func.isRequired,originalEntryIDs:m.instanceOf(c('immutable').Set),queryString:m.string,rowClassName:m.string,selectedEntryIDs:m.instanceOf(c('immutable').Set),showPresence:m.bool,thread:m.instanceOf(c('ImmutableObject')),viewer:m.string.isRequired};


f.exports=n;}),null);

/** js/mercury/clients/messenger/components/MessengerTypeaheadResultView.react.js */






__d('MessengerTypeaheadResultView.react',['cx','ChatTypeaheadConstants','immutable','Keys','MessengerContactAdapters','MessengerContactList.react','MessengerGraphQLTypeaheadHighlighter','MessengerSearchFunnelLogger','MessengerTypeaheadUtils','MessengerGraphQLTypeaheadAdapter','MercuryConfig','MercuryParticipantTypes','MercuryTypeaheadConstants','React','Relay','RelayQL','SearchableEntry','joinClasses','wrapNullableForReact'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,






















k=20,
l=50,

m=c('React').PropTypes;i=babelHelpers.inherits




























(n,c('React').Component);j=i&&i.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=j.constructor).call.apply(o,[this].concat(r)),this.

































$MessengerTypeaheadResultView_entries=null,this.





















































onKeyDown=function(t){
if(t===c('Keys').RETURN){
this.props.onSelectHighlighted();
return;}


if(!this.$MessengerTypeaheadResultView_entries)
return;


var u=
c('MessengerGraphQLTypeaheadHighlighter').getNextHighlightedEntry
(t,
this.$MessengerTypeaheadResultView_entries,
this.props.queryString,
this.props.highlightedEntry);

this.props.onNextHighlighted(u);}.
bind(this),this.



























































































































$MessengerTypeaheadResultView_onHighlight=function(t){
this.props.onNextHighlighted(t);}.
bind(this),p;}n.prototype.componentWillMount=function(){this.$MessengerTypeaheadResultView_entries=this.$MessengerTypeaheadResultView_getAllEntries(this.props);};n.prototype.componentDidMount=function(){this.props.onMount(this.onKeyDown);};n.prototype.componentWillUpdate=function(o){this.$MessengerTypeaheadResultView_entries=this.$MessengerTypeaheadResultView_getAllEntries(o);};n.prototype.componentWillUnmount=function(){this.props.onUnmount();};n.prototype.render=function(){var o=this.$MessengerTypeaheadResultView_entries;if(!o)return null;return c('React').createElement(c('MessengerContactList.react'),{ariaOwneeID:this.props.ariaOwneeID,className:c('joinClasses')(this.props.className,"_4p-s"),contactAdapter:c('MessengerContactAdapters').fromSearchableEntry,hasHoverState:this.props.hasHoverState,highlightedEntry:c('wrapNullableForReact')(this.props.highlightedEntry),isLoading:false,listSections:c('MessengerTypeaheadUtils').buildListSections(o,this.props.queryString),onHighlight:this.$MessengerTypeaheadResultView_onHighlight,onScrollIntoView:this.props.onScrollIntoView,onSelect:this.props.onSelect,originalEntryIDs:this.props.originalEntryIDs,queryString:this.props.queryString,selectedEntryIDs:this.props.selectedEntryIDs,showPresence:false,viewer:this.props.viewer});};n.prototype.$MessengerTypeaheadResultView_getAllEntries=function(o){var p=c('MessengerTypeaheadUtils').sortEntries(this.$MessengerTypeaheadResultView_getServerEntries(o),o.queryString),q=o.localEntries.slice(0,k).concat(p).filter(function(r){return !o.selectedEntryIDs.contains(r.getUniqueID());}).slice(0,l);c('MessengerSearchFunnelLogger').logUpdateQuery('WWW_MESSENGER_SEARCH_SESSION_FUNNEL','fetched_state_impression_list',this.props.queryString,q.map(function(r){return r.getUniqueID();}));return q;};n.prototype.$MessengerTypeaheadResultView_getServerEntries=function(o){var p=o.localEntries,q={};p.forEach(function(fa){q[fa.getUniqueID()]=true;});var r=[];if(!o.profiles&&o.roomAudience){if(o.roomAudience.user_results)r=o.roomAudience.user_results.edges.map(function(fa){return c('MessengerGraphQLTypeaheadAdapter').convertProfileToEntry(fa.node);});}else if(o.profiles)r=o.profiles.user_results.edges.map(function(fa){return c('MessengerGraphQLTypeaheadAdapter').convertProfileToEntry(fa.node);});var s=[],t=[],u=[];for(var v=r,w=Array.isArray(v),x=0,v=w?v:v[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var y;if(w){if(x>=v.length)break;y=v[x++];}else{x=v.next();if(x.done)break;y=x.value;}var z=y;if(!z||q[z.getUniqueID()])continue;if(z.getType()===c('MercuryParticipantTypes').FRIEND&&s.length<c('MercuryTypeaheadConstants').COMPOSER_FRIENDS_MAX){s.push(z);}else if(z.getType()===c('MercuryParticipantTypes').FB4C&&t.length<c('MercuryTypeaheadConstants').COMPOSER_FB4C_MAX){t.push(z);}else if(z.getType()===c('MercuryParticipantTypes').NON_FRIEND&&u.length<c('MercuryTypeaheadConstants').COMPOSER_NON_FRIENDS_MAX)u.push(z);}r=s.concat(t).concat(u);if(o.profiles&&o.profiles.page_results)r=r.concat(o.profiles.page_results.edges.map(function(fa){return c('MessengerGraphQLTypeaheadAdapter').convertPageToEntry(fa.node,c('MercuryParticipantTypes').PAGE);}).filter(function(fa){return fa&&!q[fa.getUniqueID()];}).slice(0,c('MercuryTypeaheadConstants').COMPOSER_PAGES_MAX));if(o.profiles&&o.profiles.vc_results)r=r.concat(o.profiles.vc_results.edges.map(function(fa){return c('MessengerGraphQLTypeaheadAdapter').convertPageToEntry(fa.node,c('ChatTypeaheadConstants').MEETING_ROOM_PAGE_TYPE);}));if(o.profiles&&o.profiles.internal_bot_results)r=r.concat(o.profiles.internal_bot_results.edges.map(function(fa){return c('MessengerGraphQLTypeaheadAdapter').convertPageToEntry(fa.node,c('ChatTypeaheadConstants').INTERNAL_BOT_PAGE_TYPE);}));var aa=[],ba=[];if(o.groups&&o.groups.threads_matching_name)ba=ba.concat(o.groups.threads_matching_name.edges);if(o.groups&&o.groups.threads_matching_participant_ids)ba=ba.concat(o.groups.threads_matching_participant_ids.edges);if(o.groups&&o.groups.threads_matching_participant_names)ba=ba.concat(o.groups.threads_matching_participant_names.edges);for(var ca=0;ca<ba.length;ca++){var da=ba[ca],ea=c('MessengerGraphQLTypeaheadAdapter').convertGroupToEntry(da.node,ca);if(!ea||q[ea.getUniqueID()])continue;aa.push(ea);q[ea.getUniqueID()]=true;}return r.concat(aa);};n.propTypes={ariaOwneeID:m.string.isRequired,className:m.string.isRequired,localEntries:m.arrayOf(m.instanceOf(c('SearchableEntry'))).isRequired,localEntryIDs:m.arrayOf(m.string.isRequired).isRequired,hasHoverState:m.bool.isRequired,highlightedEntry:m.object,onMount:m.func.isRequired,onNextHighlighted:m.func.isRequired,onScrollIntoView:m.func.isRequired,onSelect:m.func.isRequired,onSelectHighlighted:m.func.isRequired,onUnmount:m.func.isRequired,originalEntryIDs:m.instanceOf(c('immutable').Set).isRequired,queryString:m.string.isRequired,selectedEntryIDs:m.instanceOf(c('immutable').Set).isRequired,shouldQueryInternalBot:m.bool.isRequired,shouldQueryPages:m.bool.isRequired,shouldQueryParticipantIDs:m.bool.isRequired,shouldQueryParticipantNames:m.bool.isRequired,shouldQueryThreadName:m.bool.isRequired,shouldQueryVCEndpoint:m.bool.isRequired,viewer:m.string.isRequired};n.defaultProps={ariaOwneeID:'',className:''};


f.exports=c('Relay').createContainer(n,
{initialVariables:
{friendEntryCount:k,
queryString:'',
localEntryIDs:[],
shouldQueryPages:false,
shouldQueryThreadName:false,
shouldQueryParticipantIDs:false,
shouldQueryParticipantNames:false,
shouldQueryRoomsAudience:false,
shouldQueryVCEndpoint:false,
shouldQueryInternalBot:false,
shouldQueryMessengerOnlyUsersForWebMessenger:true},

fragments:
{profiles:function o(p){
var q=p.friendEntryCount,
r=p.shouldQueryPages,
s=p.shouldQueryVCEndpoint,
t=p.shouldQueryMessengerOnlyUsersForWebMessenger;return function(u,v,w,x,y){return {children:[{alias:'user_results',calls:[{kind:'Call',metadata:{type:'[SearchEntityType]'},name:'of_type',value:{kind:'CallValue',callValue:'user'}},{kind:'Call',metadata:{},name:'include_messenger_only_results_for_web_messenger',value:{kind:'CallVariable',callVariableName:'shouldQueryMessengerOnlyUsersForWebMessenger'}},{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallVariable',callVariableName:'friendEntryCount'}}],children:[{children:[{children:[].concat.apply([],[{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},c('RelayQL').__frag(u),{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{isAbstract:true},name:'IdFragment',type:'Node'}]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,isAbstract:true,isRequisite:true},type:'Searchable'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'SearchableResultsEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],directives:[{kind:'Directive',name:'skip',args:[{name:'if',value:{kind:'CallVariable',callVariableName:'shouldQueryRoomsAudience'}}]}],fieldName:'search_results',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'SearchableResultsConnection'},{alias:'page_results',calls:[{kind:'Call',metadata:{},name:'messenger_commerce',value:{kind:'CallValue',callValue:true}},{kind:'Call',metadata:{},name:'include_games',value:{kind:'CallValue',callValue:true}},{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallValue',callValue:5}}],children:[{children:[{children:[].concat.apply([],[{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},c('RelayQL').__frag(v),c('RelayQL').__frag(w),{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{isAbstract:true},name:'IdFragment',type:'Node'}]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,isAbstract:true,isRequisite:true},type:'Searchable'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'SearchableResultsEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],directives:[{kind:'Directive',name:'include',args:[{name:'if',value:{kind:'CallVariable',callVariableName:'shouldQueryPages'}}]}],fieldName:'search_results',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'SearchableResultsConnection'},{alias:'vc_results',calls:[{kind:'Call',metadata:{},name:'vc_endpoint',value:{kind:'CallValue',callValue:true}},{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallValue',callValue:20}}],children:[{children:[{children:[].concat.apply([],[{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},c('RelayQL').__frag(x),{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{isAbstract:true},name:'IdFragment',type:'Node'}]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,isAbstract:true,isRequisite:true},type:'Searchable'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'SearchableResultsEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],directives:[{kind:'Directive',name:'include',args:[{name:'if',value:{kind:'CallVariable',callVariableName:'shouldQueryVCEndpoint'}}]}],fieldName:'search_results',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'SearchableResultsConnection'},{alias:'internal_bot_results',calls:[{kind:'Call',metadata:{},name:'internal_bot',value:{kind:'CallValue',callValue:true}},{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallValue',callValue:20}}],children:[{children:[{children:[].concat.apply([],[{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},c('RelayQL').__frag(y),{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{isAbstract:true},name:'IdFragment',type:'Node'}]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,isAbstract:true,isRequisite:true},type:'Searchable'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'SearchableResultsEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],directives:[{kind:'Directive',name:'include',args:[{name:'if',value:{kind:'CallVariable',callVariableName:'shouldQueryInternalBot'}}]}],fieldName:'search_results',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'SearchableResultsConnection'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{},name:'MessengerTypeaheadResultView_react_ProfilesRelayQL',type:'SearchableEntitiesQuery'};}









(c('MessengerGraphQLTypeaheadAdapter').userFragment,










c('MessengerGraphQLTypeaheadAdapter').pageFragment,
c('MessengerGraphQLTypeaheadAdapter').gameFragment,









c('MessengerGraphQLTypeaheadAdapter').pageFragment,









c('MessengerGraphQLTypeaheadAdapter').pageFragment);},





groups:function o(p){
var q=p.queryString,
r=p.localEntryIDs,
s=p.shouldQueryThreadName,
t=p.shouldQueryParticiapnts,
u=p.shouldQueryParticipantNames;return function(v,w,x,y,z,aa){return {children:[{alias:'threads_matching_name',calls:[{kind:'Call',metadata:{},name:'with_thread_name',value:{kind:'CallVariable',callVariableName:'queryString'}},{kind:'Call',metadata:{type:'Int'},name:'last',value:c('RelayQL').__var(v)}],children:[{children:[{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},c('RelayQL').__frag(w)]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'MessageThread'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'ViewerMessageThreadsEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],directives:[{kind:'Directive',name:'include',args:[{name:'if',value:{kind:'CallVariable',callVariableName:'shouldQueryThreadName'}}]}],fieldName:'message_threads',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'ViewerMessageThreadsConnection'},{alias:'threads_matching_participant_ids',calls:[{kind:'Call',metadata:{},name:'with_participant_ids',value:{kind:'CallVariable',callVariableName:'localEntryIDs'}},{kind:'Call',metadata:{type:'Int'},name:'last',value:c('RelayQL').__var(x)}],children:[{children:[{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},c('RelayQL').__frag(y)]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'MessageThread'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'ViewerMessageThreadsEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],directives:[{kind:'Directive',name:'include',args:[{name:'if',value:{kind:'CallVariable',callVariableName:'shouldQueryParticipantIDs'}}]}],fieldName:'message_threads',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'ViewerMessageThreadsConnection'},{alias:'threads_matching_participant_names',calls:[{kind:'Call',metadata:{},name:'with_participants',value:{kind:'CallVariable',callVariableName:'queryString'}},{kind:'Call',metadata:{},name:'with_group',value:{kind:'CallValue',callValue:true}},{kind:'Call',metadata:{type:'Int'},name:'last',value:c('RelayQL').__var(z)}],children:[{children:[{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},c('RelayQL').__frag(aa)]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'MessageThread'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'ViewerMessageThreadsEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],directives:[{kind:'Directive',name:'include',args:[{name:'if',value:{kind:'CallVariable',callVariableName:'shouldQueryParticipantNames'}}]}],fieldName:'message_threads',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'ViewerMessageThreadsConnection'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{},name:'MessengerTypeaheadResultView_react_GroupsRelayQL',type:'Viewer'};}




(c('MercuryConfig').MaxThreadResults,



c('MessengerGraphQLTypeaheadAdapter').groupFragment,





c('MercuryConfig').MaxThreadResults,



c('MessengerGraphQLTypeaheadAdapter').groupFragment,






c('MercuryConfig').MaxThreadResults,



c('MessengerGraphQLTypeaheadAdapter').groupFragment);},





roomAudience:function o(p){
var q=p.queryString,
r=p.shouldQueryRoomsAudience;return function(s){return {children:[{alias:'user_results',calls:[{kind:'Call',metadata:{},name:'named',value:{kind:'CallVariable',callVariableName:'queryString'}},{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallValue',callValue:10}}],children:[{children:[{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},c('RelayQL').__frag(s)]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isAbstract:true,isRequisite:true},type:'MessagingActor'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'AllAudienceListOfMessageThreadEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],directives:[{kind:'Directive',name:'include',args:[{name:'if',value:{kind:'CallVariable',callVariableName:'shouldQueryRoomsAudience'}}]}],fieldName:'messaging_audience_list',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true,isFindable:true},type:'AllAudienceListOfMessageThreadConnection'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('RelayQL').__id(),kind:'Fragment',metadata:{},name:'MessengerTypeaheadResultView_react_RoomAudienceRelayQL',type:'MessageThread'};}







(c('MessengerGraphQLTypeaheadAdapter').userFragment);}}});}),null);

/** js/mercury/clients/messenger/components/MessengerTypeaheadTopFriendsView.react.js */






__d('MessengerTypeaheadTopFriendsView.react',['cx','immutable','Keys','MessengerContactAdapters','MessengerContactList.react','MessengerGraphQLTypeaheadHighlighter','MessengerTypeaheadUtils','React','joinClasses','wrapNullableForReact'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,















k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.























































































onKeyDown=function(r){
if(r===c('Keys').RETURN){
this.props.onSelectHighlighted();
return;}


var s=
c('MessengerGraphQLTypeaheadHighlighter').getNextHighlightedEntry
(r,
this.props.entries.toArray(),
this.props.queryString,
this.props.highlightedEntry);

this.props.onNextHighlighted(s);}.
bind(this),this.

$MessengerTypeaheadTopFriendsView_onHighlight=function(r){
this.props.onNextHighlighted(r);}.
bind(this),n;}l.prototype.componentWillMount=function(){if(this.props.hasHoverState)if(this.props.entries.size>0)this.props.onNextHighlighted(this.props.entries.first());};l.prototype.componentDidMount=function(){this.props.onMount(this.onKeyDown);};l.prototype.componentWillUnmount=function(){this.props.onUnmount();};l.prototype.render=function(){return c('React').createElement(c('MessengerContactList.react'),{ariaOwneeID:this.props.ariaOwneeID,className:c('joinClasses')(this.props.className,"_4p-s"),contactAdapter:c('MessengerContactAdapters').fromSearchableEntry,hasHoverState:this.props.hasHoverState,highlightedEntry:c('wrapNullableForReact')(this.props.highlightedEntry),isLoading:!!this.props.queryString,listSections:c('MessengerTypeaheadUtils').buildListSections(this.props.entries.toArray(),this.props.queryString),onHighlight:this.$MessengerTypeaheadTopFriendsView_onHighlight,onScrollIntoView:this.props.onScrollIntoView,onSelect:this.props.onSelect,originalEntryIDs:this.props.originalEntryIDs,queryString:this.props.queryString,selectedEntryIDs:this.props.selectedEntryIDs,showPresence:false,viewer:this.props.viewer});};l.propTypes={ariaOwneeID:k.string.isRequired,className:k.string.isRequired,entries:k.instanceOf(c('immutable').List).isRequired,hasHoverState:k.bool.isRequired,highlightedEntry:k.object,onNextHighlighted:k.func.isRequired,onMount:k.func.isRequired,onScrollIntoView:k.func.isRequired,onSelect:k.func.isRequired,onSelectHighlighted:k.func.isRequired,onUnmount:k.func.isRequired,originalEntryIDs:k.instanceOf(c('immutable').Set).isRequired,queryString:k.string.isRequired,selectedEntryIDs:k.instanceOf(c('immutable').Set).isRequired,viewer:k.string.isRequired};l.defaultProps={ariaOwneeID:'',className:''};


f.exports=l;}),null);

/** js/mercury/clients/messenger/components/MessengerGraphQLTypeaheadView.react.js */






__d('MessengerGraphQLTypeaheadView.react',['CurrentUser','immutable','MercuryParticipantTypes','MercuryTypeaheadConstants','MessengerRoomPrivacyMode','MessengerRoomWithAssocObjectAudienceLocalCacheManager','MessengerSearchFunnelLogger','MessengerTypeaheadLocalCache','MessengerTypeaheadResultRoute','MessengerTypeaheadResultView.react','MessengerTypeaheadTopFriendsView.react','MessengerTypeaheadUtils','React','RelayRootContainer','createCancelableFunction','debounce'],(function a(b,c,d,e,f,g){

'use strict';var h,i,





















j=c('React').PropTypes,

k='WWW_MESSENGER_SEARCH_SESSION_FUNNEL',
l=100;h=babelHelpers.inherits

(m,c('React').Component);i=h&&h.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=i.constructor).call.apply(n,[this].concat(q)),this.













































state=
{route:null,
localEntries:c('immutable').List(),
highlightedEntry:null},this.


$MessengerGraphQLTypeaheadView_cancelableCallback=null,this.
$MessengerGraphQLTypeaheadView_debouncer=null,this.
$MessengerGraphQLTypeaheadView_handleKeyDown=null,this.
$MessengerGraphQLTypeaheadView_isMounted=true,this.
$MessengerGraphQLTypeaheadView_roomAudienceCacheManager=

c('MessengerRoomWithAssocObjectAudienceLocalCacheManager').get(),this.



















































































































































































$MessengerGraphQLTypeaheadView_handleViewMount=function(s){
this.$MessengerGraphQLTypeaheadView_handleKeyDown=s;}.
bind(this),this.

$MessengerGraphQLTypeaheadView_handleViewUnmount=function(){
this.$MessengerGraphQLTypeaheadView_handleKeyDown=null;}.
bind(this),this.

$MessengerGraphQLTypeaheadView_onNextHighlighted=function(s){
this.setState({highlightedEntry:s});}.
bind(this),this.

$MessengerGraphQLTypeaheadView_selectHighlighted=function(){
if(this.state.highlightedEntry)
this.props.onSelect(this.state.highlightedEntry);}.

bind(this),o;}m.prototype.componentDidMount=function(){this.$MessengerGraphQLTypeaheadView_showLocalEntries();this.$MessengerGraphQLTypeaheadView_debouncer=c('debounce')(function(){if(this.$MessengerGraphQLTypeaheadView_isMounted){var n=new (c('MessengerTypeaheadResultRoute'))(this.$MessengerGraphQLTypeaheadView_getRouteProps());this.setState({route:n});}}.bind(this),150,this,true);};m.prototype.componentWillReceiveProps=function(n){this.setState({highlightedEntry:null});if(!n.queryString){this.$MessengerGraphQLTypeaheadView_showLocalEntries();}else if(n.queryString!==this.props.queryString){this.$MessengerGraphQLTypeaheadView_debouncer&&this.$MessengerGraphQLTypeaheadView_debouncer();var o=this.props.roomAssociatedObject&&this.props.roomAssociatedObject.privacy_mode;if(o===c('MessengerRoomPrivacyMode').WHITELISTED_MODE){this.$MessengerGraphQLTypeaheadView_searchLocalRoomAudienceEntries(n);return;}c('MessengerTypeaheadLocalCache').search(n.queryString,function(p,q){if(this.$MessengerGraphQLTypeaheadView_isMounted)if(q===n.queryString){var r=c('MessengerTypeaheadUtils').sortEntries(p,q).slice(0,this.props.maxEntries),s=this.props.enableMessageSearch?c('MessengerTypeaheadUtils').getMessageSearchEntry(q):null;if(s)r.unshift(s);var t=c('immutable').List(r).filter(function(u){if(this.props.excludeGroups&&u.getType()===c('MercuryParticipantTypes').THREAD)return false;if(this.props.excludePages&&u.getType()===c('MercuryParticipantTypes').PAGE)return false;return true;}.bind(this));this.setState({localEntries:t});}}.bind(this));}};m.prototype.shouldComponentUpdate=function(n,o){return n.queryString!==this.props.queryString||n.isFocused!==this.props.isFocused||o.localEntries!==this.state.localEntries||o.route!==this.state.route||o.highlightedEntry!==this.state.highlightedEntry;};m.prototype.componentWillUnmount=function(){if(this.$MessengerGraphQLTypeaheadView_cancelableCallback)this.$MessengerGraphQLTypeaheadView_cancelableCallback.cancel();this.$MessengerGraphQLTypeaheadView_isMounted=false;};m.prototype.render=function(){if(!this.props.isFocused&&!this.props.queryString||!c('MessengerTypeaheadLocalCache').isBootstrapped()&&!this.$MessengerGraphQLTypeaheadView_roomAudienceCacheManager.isBootstrapped(this.props.threadFBID))return null;if(!this.props.queryString||!this.state.route){c('MessengerSearchFunnelLogger').logUpdateQuery(k,'null_state_impression','',this.state.localEntries.toArray().map(function(o){return o.getUniqueID();}));return c('React').createElement(c('MessengerTypeaheadTopFriendsView.react'),{className:this.props.typeaheadViewClassName,entries:this.state.localEntries,hasHoverState:this.props.hasHoverState,highlightedEntry:this.state.highlightedEntry,onMount:this.$MessengerGraphQLTypeaheadView_handleViewMount,onNextHighlighted:this.$MessengerGraphQLTypeaheadView_onNextHighlighted,onScrollIntoView:this.props.onScrollIntoView,onSelect:this.props.onSelect,onSelectHighlighted:this.$MessengerGraphQLTypeaheadView_selectHighlighted,onUnmount:this.$MessengerGraphQLTypeaheadView_handleViewUnmount,originalEntryIDs:this.props.originalEntryIDs,queryString:this.props.queryString,selectedEntryIDs:this.props.selectedEntryIDs,viewer:this.props.viewer});}var n=this.$MessengerGraphQLTypeaheadView_getRouteProps();return c('React').createElement(c('RelayRootContainer'),{Component:c('MessengerTypeaheadResultView.react'),route:this.state.route,renderLoading:function(){return c('React').createElement(c('MessengerTypeaheadTopFriendsView.react'),{className:this.props.typeaheadViewClassName,entries:this.$MessengerGraphQLTypeaheadView_getFilteredLoadingEntries(),hasHoverState:this.props.hasHoverState,highlightedEntry:this.state.highlightedEntry,onNextHighlighted:this.$MessengerGraphQLTypeaheadView_onNextHighlighted,onMount:this.$MessengerGraphQLTypeaheadView_handleViewMount,onScrollIntoView:this.props.onScrollIntoView,onSelect:this.props.onSelect,onSelectHighlighted:this.$MessengerGraphQLTypeaheadView_selectHighlighted,onUnmount:this.$MessengerGraphQLTypeaheadView_handleViewUnmount,originalEntryIDs:this.props.originalEntryIDs,queryString:this.props.queryString,selectedEntryIDs:this.props.selectedEntryIDs,viewer:this.props.viewer});}.bind(this),renderFetched:function(o){return c('React').createElement(c('MessengerTypeaheadResultView.react'),babelHelpers['extends']({},o,{className:this.props.typeaheadViewClassName,hasHoverState:this.props.hasHoverState,highlightedEntry:this.state.highlightedEntry,localEntries:this.state.localEntries.toArray(),onMount:this.$MessengerGraphQLTypeaheadView_handleViewMount,onNextHighlighted:this.$MessengerGraphQLTypeaheadView_onNextHighlighted,onScrollIntoView:this.props.onScrollIntoView,onSelect:this.props.onSelect,onSelectHighlighted:this.$MessengerGraphQLTypeaheadView_selectHighlighted,onUnmount:this.$MessengerGraphQLTypeaheadView_handleViewUnmount,originalEntryIDs:this.props.originalEntryIDs,selectedEntryIDs:this.props.selectedEntryIDs,viewer:this.props.viewer},n));}.bind(this)});};m.prototype.$MessengerGraphQLTypeaheadView_getFilteredLoadingEntries=function(){var n=this.state.localEntries.filter(function(o){return !this.props.selectedEntryIDs.contains(o.getUniqueID());}.bind(this));c('MessengerSearchFunnelLogger').logLoadingStateQuery(k,this.props.queryString,n.toArray().map(function(o){return o.getUniqueID();}));return n;};m.prototype.onKeyDown=function(n){this.$MessengerGraphQLTypeaheadView_handleKeyDown&&this.$MessengerGraphQLTypeaheadView_handleKeyDown(n);};m.prototype.

$MessengerGraphQLTypeaheadView_searchLocalRoomAudienceEntries=function(n){
this.$MessengerGraphQLTypeaheadView_roomAudienceCacheManager.search
(n.threadFBID,
n.queryString,
function(o,p){
if(this.$MessengerGraphQLTypeaheadView_isMounted)
if(p===n.queryString){
var q=c('MessengerTypeaheadUtils').
sortEntries(o,p).
slice(0,this.props.maxEntries);
this.setState({localEntries:c('immutable').List(q)});}}.


bind(this));};

m.prototype.

$MessengerGraphQLTypeaheadView_showLocalRoomAudienceEntries=function(){
this.setState({localEntries:c('immutable').List()});
this.$MessengerGraphQLTypeaheadView_cancelableCallback=c('createCancelableFunction')
(function(n){
var o=n.slice(0,30);
this.setState({localEntries:c('immutable').List(o)});}.
bind(this));

this.$MessengerGraphQLTypeaheadView_roomAudienceCacheManager.onEntriesLoaded
(this.props.threadFBID,
function(n){
if(this.$MessengerGraphQLTypeaheadView_cancelableCallback)
this.$MessengerGraphQLTypeaheadView_cancelableCallback(n);

this.$MessengerGraphQLTypeaheadView_cancelableCallback=null;}.
bind(this));};
m.prototype.

$MessengerGraphQLTypeaheadView_showLocalEntries=function(){
var n=
this.props.roomAssociatedObject&&
this.props.roomAssociatedObject.privacy_mode;
if(n===c('MessengerRoomPrivacyMode').WHITELISTED_MODE){
this.$MessengerGraphQLTypeaheadView_showLocalRoomAudienceEntries();
return;}

this.setState({localEntries:c('immutable').List()});
this.$MessengerGraphQLTypeaheadView_cancelableCallback=c('createCancelableFunction')
(function(o,p,q){
var r=o.slice(0,50);
if(!this.props.excludeGroups)
r=r.concat(p);

if(!q||!this.props.queryString){
var s=this.props.enableMessageSearch?
c('MessengerTypeaheadUtils').getMessageSearchEntry
(this.props.queryString):

null;
if(s)
r.unshift(s);

this.setState({localEntries:c('immutable').List(r)});}}.

bind(this));


c('MessengerTypeaheadLocalCache').onEntriesLoaded(function(o,p,q){
if(this.$MessengerGraphQLTypeaheadView_cancelableCallback)
this.$MessengerGraphQLTypeaheadView_cancelableCallback(o,p,q);

this.$MessengerGraphQLTypeaheadView_cancelableCallback=null;}.
bind(this));};
m.prototype.

$MessengerGraphQLTypeaheadView_getRouteProps=function(){
var n=this.state.localEntries.toArray(),
o=n.
filter(function(y){
return (y.getType()!==c('MercuryTypeaheadConstants').SEARCH_TYPE);}).

map(function(y){return y.getUniqueID();}),
p=
this.props.roomAssociatedObject&&
this.props.roomAssociatedObject.privacy_mode,
q=
p===c('MessengerRoomPrivacyMode').WHITELISTED_MODE,

r=
!this.props.excludeGroups&&
this.props.queryString&&
this.props.queryString.length>1&&
!q,
s=
!this.props.excludeGroups&&
o.length>0&&
!q,
t=
!this.props.excludeGroups&&
(!s||c('CurrentUser').isEmployee())&&
!q,
u=!this.props.excludePages&&
!q,
v=this.props.shouldQueryVCEndpoint&&
(c('CurrentUser').isEmployee()||c('CurrentUser').isWorkUser())&&
!q,
w=this.props.shouldQueryInternalBot&&
c('CurrentUser').isEmployee()&&c('CurrentUser').isWorkUser()&&
!q,
x=this.props.threadFBID;

return {queryString:this.props.queryString,
localEntryIDs:o,
shouldQueryPages:u,
shouldQueryThreadName:r,
shouldQueryParticipantIDs:s,
shouldQueryParticipantNames:t,
shouldQueryVCEndpoint:v,
shouldQueryInternalBot:w,
shouldQueryRoomsAudience:q,
threadFBID:x};};

m.propTypes={enableMessageSearch:j.bool.isRequired,excludeGroups:j.bool.isRequired,excludePages:j.bool.isRequired,isFocused:j.bool.isRequired,hasHoverState:j.bool.isRequired,maxEntries:j.number.isRequired,onScrollIntoView:j.func.isRequired,onSelect:j.func.isRequired,originalEntryIDs:j.instanceOf(c('immutable').Set).isRequired,queryString:j.string.isRequired,roomAssociatedObject:j.object,selectedEntryIDs:j.instanceOf(c('immutable').Set).isRequired,shouldQueryInternalBot:j.bool.isRequired,shouldQueryVCEndpoint:j.bool.isRequired,threadFBID:j.string,typeaheadViewClassName:j.string.isRequired,viewer:j.string.isRequired};m.defaultProps={maxEntries:l,typeaheadViewClassName:''};


f.exports=m;}),null);

/** js/mercury/clients/messenger/components/MessengerGraphQLSearchTypeahead.react.js */






__d('MessengerGraphQLSearchTypeahead.react',['cx','ix','BootloadOnRender.react','ContextualLayer.react','Event','Image.react','immutable','InstantGameContextType','JSResource','Keys','LazyComponent.react','MercuryIDs','MercuryThreadIDMap','MercuryThreads','MercuryTypeaheadConstants','MercuryVanityIDMap','MessagingSourceEnum','MessengerActions','MessengerGraphQLTypeaheadView.react','MessengerScrollableArea.react','MessengerSearchFunnelLogger','MessengerSpinner.react','MessengerTypeaheadUtils','MNPlatformTagsDataManager','QuicksilverSources','React','ReactDOM','ReactLayeredComponentMixin_DEPRECATED','clearImmediate','emptyFunction','joinClasses','setImmediate'],(function a(b,c,d,e,f,g,h,i){

'use strict';











var j=c('MercuryThreadIDMap').get(),
k=c('MercuryThreads').get(),






















l=c('React').PropTypes,

m=
i("86933"),
n=30,
o=100,

















p=c('React').createClass({displayName:'MessengerGraphQLSearchTypeahead',
mixins:[c('ReactLayeredComponentMixin_DEPRECATED')],

_input:null,
_timer:null,
_view:null,

propTypes:
{className:l.string.isRequired,
context:l.object,
enableMessageSearch:l.bool.isRequired,
excludeGroups:l.bool.isRequired,
excludePages:l.bool.isRequired,
hasHoverState:l.bool.isRequired,
hideClearButton:l.bool.isRequired,
hideResults:l.bool,
isFacebookChat:l.bool.isRequired,
isFocused:l.bool.isRequired,
isTokenizer:l.bool.isRequired,
onBackspace:l.func.isRequired,
onBlur:l.func.isRequired,
onChange:l.func.isRequired,
onClear:l.func.isRequired,
onClick:l.func.isRequired,
onFocus:l.func.isRequired,
onScrollIntoView:l.func.isRequired,
onSelect:l.func.isRequired,
originalEntryIDs:l.instanceOf(c('immutable').Set).isRequired,
placeholder:l.string.isRequired,
queryString:l.string.isRequired,
roomAssociatedObject:l.object,
scrollableViewClassName:l.string.isRequired,
selectedEntryIDs:l.instanceOf(c('immutable').Set).isRequired,
shouldQueryInternalBot:l.bool.isRequired,
shouldQueryVCEndpoint:l.bool.isRequired,
tabIndex:l.number,
threadFBID:l.string,
typeaheadViewClassName:l.string.isRequired,
useLayer:l.bool.isRequired,
viewer:l.string.isRequired,
width:l.number},


getInitialState:function q(){

return {gameID:null};},



getDefaultProps:function q(){

return {isFacebookChat:false,
isTokenizer:false,
onBackspace:c('emptyFunction'),
onChange:c('emptyFunction'),
onClear:c('emptyFunction'),
onClick:c('emptyFunction'),
onScrollIntoView:c('emptyFunction'),
originalEntryIDs:c('immutable').Set(),
placeholder:'',
scrollableViewClassName:'',
selectedEntryIDs:c('immutable').Set(),
typeaheadViewClassName:'',
useLayer:false};},



componentDidMount:function q(){
this._timer=c('setImmediate')(this._syncInputWidth);},


componentDidUpdate:function q(){
clearTimeout(this._timer);
this._timer=c('setImmediate')(this._syncInputWidth);},


componentWillUnmount:function q(){
clearTimeout(this._timer);},


renderLayers:function q(){
if(!this.props.useLayer)
return {};


var r=null,
s=null;
if(this.props.context){
r=this.props.context;}else 

s=function(){return this._input;}.bind(this);


return {typeaheadView:
c('React').createElement(c('ContextualLayer.react'),
{context:r,
contextRef:s,
position:"below",
shown:this.props.queryString&&this.props.isFocused,
shouldSetARIAProperties:false},
this._renderView())};},




render:function q(){
var r=this.props.useLayer?
null:
this._renderView();


return (c('React').createElement('div',{className:
(!this.props.isTokenizer?"_3rh8":'')+
(this.props.isTokenizer?' '+"_3mkz":'')},

c('React').createElement('span',
{className:c('joinClasses')
(this.props.className,"_58ah"+


(this.props.hideResults?' '+"_1a03":'')),


onChange:this.props.onChange,
onSelect:c('emptyFunction'),
tabIndex:null},
c('React').createElement('label',
{className:"_58ak"},
c('React').createElement('input',
{className:"_58al",
disabled:this.props.hideResults,
onBlur:this._handleBlur,
onClick:this.props.onClick,
onFocus:this.props.onFocus,
onKeyDown:function(s){return this._handleKeyDown(s);}.bind(this),
placeholder:this.props.placeholder,
ref:function(s){return this._input=s;}.bind(this),
spellCheck:false,
tabIndex:this.props.tabIndex,
type:'text',
value:this.props.queryString})),


r),

c('React').createElement(c('Image.react'),
{onMouseDown:this.props.onClear,
className:
(this.props.hideClearButton?"hidden_elem":'')+(' '+"_2xme"),


src:m}),

c('React').createElement('span',
{ref:'textSizeProxy',
className:"_58-3",
'aria-hidden':'true'},
this.props.queryString||this.props.placeholder),

this._renderGame()));},




focusInput:function q(){
this._input&&this._input.focus();},


_syncInputWidth:function q(){
if(!this.props.isTokenizer)
return;

var r=c('ReactDOM').findDOMNode(this.refs.textSizeProxy),

s=r?r.offsetWidth:0;
if(s===0)
return;


if(this._input)
this._input.style.width=s+'px';},



_renderGame:function q(){
if(!this.state.gameID)
return null;


return (c('React').createElement(c('BootloadOnRender.react'),
{loader:
c('JSResource')('MessengerGamesQuicksilverPlayerContainer.react').__setRef('MessengerGraphQLSearchTypeahead.react'),

placeholder:c('React').createElement(c('MessengerSpinner.react'),null),
component:c('React').createElement(c('LazyComponent.react'),
{contextType:c('InstantGameContextType').SOLO,
contextSourceID:null,
gameID:this.state.gameID,
onHide:this._handleHideGame,
source:c('QuicksilverSources').MESSENGER_GAME_SEARCH,
sourceID:null})}));},





_renderView:function q(){
if(!this.props.queryString&&!this.props.isFocused)
return null;


var r=this.props.isTokenizer?
n:
o,
s=
c('React').createElement(c('MessengerGraphQLTypeaheadView.react'),
{enableMessageSearch:this.props.enableMessageSearch,
excludeGroups:this.props.excludeGroups,
excludePages:this.props.excludePages,
isFocused:this.props.isFocused,
hasHoverState:this.props.hasHoverState,
maxEntries:r,
onScrollIntoView:this._handleScrollIntoView,
onSelect:this._handleSelect,
originalEntryIDs:this.props.originalEntryIDs,
queryString:this.props.queryString,
ref:function(t){return this._view=t;}.bind(this),
roomAssociatedObject:this.props.roomAssociatedObject,
shouldQueryInternalBot:this.props.shouldQueryInternalBot,
shouldQueryVCEndpoint:this.props.shouldQueryVCEndpoint,
selectedEntryIDs:this.props.selectedEntryIDs,
threadFBID:this.props.threadFBID,
typeaheadViewClassName:this.props.typeaheadViewClassName,
viewer:this.props.viewer});


if(this.props.isTokenizer){

return (c('React').createElement(c('MessengerScrollableArea.react'),
{className:this.props.scrollableViewClassName,
ref:'scrollable',
width:this.props.width},
s));}else 



return s;},



_handleScrollIntoView:function q(r){
if(!r)
return;


if(!this.props.isTokenizer){
this.props.onScrollIntoView(r);
return;}


if(this.refs.scrollable)
c('MessengerTypeaheadUtils').scrollEntryIntoView
(r,
this.refs.scrollable);},




_handleSelect:function q(r,event){
var s=r.getUniqueID(),
t=r.getType(),
u=r.getAuxiliaryData().alias;
if(u)
c('MercuryVanityIDMap').set
(u,
c('MercuryIDs').getParticipantIDFromUserID(s));


if(t===c('MercuryTypeaheadConstants').SEARCH_TYPE){
c('MessengerSearchFunnelLogger').logContentSearchInitiation
('WWW_MESSENGER_SEARCH_SESSION_FUNNEL',
this.props.queryString);

c('MessengerActions').changeQueryAll(this.props.queryString);}else
if(t===c('MercuryTypeaheadConstants').GAME_TYPE){
this.setState({gameID:s});}else
if(t===c('MercuryTypeaheadConstants').THREAD_TYPE){
j.getClientIDFromServerID
(s,
function(v){return this.props.onSelect(v,t,r);}.bind(this));}else{


k.getThreadMeta
(c('MercuryIDs').getThreadIDFromUserID(s),
function(v){return this.props.onSelect(v.thread_id,t,r);}.bind(this));

c('MNPlatformTagsDataManager').updateThreadTabAfterSelectThread
(c('MessagingSourceEnum').MESSENGER_WEB_SEARCH,
s);}},




_handleHideGame:function q(){
this.setState({gameID:null});},


_handleKeyDown:function q(r){
var s=r.keyCode;
if(s===c('Keys').DOWN||
s===c('Keys').UP||
s===c('Keys').RETURN){
this._view&&this._view.onKeyDown&&this._view.onKeyDown(s);}else
if(s===c('Keys').BACKSPACE){
this.props.onBackspace(r);}else
if(s===c('Keys').ESC)
this._input&&this._input.blur();},



_handleBlur:function q(){



var r=null,
s=c('Event').listen(window,'blur',function(){
s.remove();
c('clearImmediate')(r);});

r=c('setImmediate')(function(){
s.remove();
this.props.onBlur();}.
bind(this));}});



f.exports=p;}),null);

/** js/mercury/clients/messenger/components/core/MessengerTokenizerToken.react.js */






__d('MessengerTokenizerToken.react',['cx','Keys','React','SearchableEntry','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=c('React').PropTypes,

l=100;i=babelHelpers.inherits

(m,c('React').Component);j=i&&i.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.










































$MessengerTokenizerToken_handleKeyDown=function(event){
if(event.keyCode===c('Keys').BACKSPACE){
event.preventDefault();
this.props.onRemove&&this.props.onRemove(this.props.entry);}}.

bind(this),o;}m.prototype.render=function(){return c('React').createElement('span',{className:c('joinClasses')(this.props.className,"_14-8"),label:null,onClick:this.$MessengerTokenizerToken_handleClick,onKeyDown:this.$MessengerTokenizerToken_handleKeyDown,role:'option',tabIndex:this.props.index+l},c('React').createElement('span',{'aria-label':this.props.label,title:this.props.label,className:"_14-9"},this.props.label));};m.prototype.$MessengerTokenizerToken_handleClick=function(event){event.stopPropagation();};m.propTypes={className:k.string,entry:k.instanceOf(c('SearchableEntry')),index:k.number,label:k.string.isRequired,onRemove:k.func};


f.exports=m;}),null);

/** js/mercury/clients/messenger/components/MessengerGraphQLTokenizer.react.js */






__d('MessengerGraphQLTokenizer.react',['cx','invariant','immutable','MessengerGraphQLSearchTypeahead.react','MessengerTokenizerToken.react','React','joinClasses','setImmediate'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,













l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.






















































state=
{focused:this.props.autoFocus,
queryString:''},this.






































































focusInput=function(){
this.refs.typeahead&&this.refs.typeahead.focusInput();}.
bind(this),this.














$MessengerGraphQLTokenizer_handleBackspace=function(event){
if(this.state.queryString||this.props.entries.size===0)
return;


this.$MessengerGraphQLTokenizer_handleRemove(this.props.entries.last());
event.preventDefault();
c('setImmediate')(this.focusInput);}.
bind(this),this.

$MessengerGraphQLTokenizer_handleChange=function(event){

event.target instanceof HTMLInputElement||i(0,
'event.target must be an input.');

this.setState({queryString:event.target.value});}.
bind(this),this.

$MessengerGraphQLTokenizer_handleClear=function(){



this.setState({queryString:''});
this.props.onClear&&this.props.onClear();}.
bind(this),this.

$MessengerGraphQLTokenizer_handleAdd=
function(s,
t,
u){

var v=this.props.entries,
w=u.getUniqueID();
if(this.props.originalEntryIDs.contains(w)){
return;}else
if(v.some(function(x){
return (x.getUniqueID()===w);})){

this.$MessengerGraphQLTokenizer_handleRemove(u);
return;}

this.props.onAddEntryAttempt(u);
this.setState({queryString:''});}.
bind(this),this.

$MessengerGraphQLTokenizer_handleRemove=function(s){
this.props.onRemoveEntryAttempt(s);}.
bind(this),o;}m.prototype.componentDidMount=function(){if(this.props.autoFocus)c('setImmediate')(this.focusInput);};m.prototype.render=function(){var n=this.props.entries.map(function(q,r){return this.$MessengerGraphQLTokenizer_renderToken(q,r);}.bind(this)),o=n.size>0?'':this.props.placeholder,p=this.props.forceHideClearButton||this.state.queryString===''&&this.props.entries.isEmpty();return c('React').createElement('div',null,c('React').createElement('div',{className:c('joinClasses')(this.props.className,"_14-7")},c('React').createElement('div',{className:c('joinClasses')("_58-2",'clearfix')},n,c('React').createElement(c('MessengerGraphQLSearchTypeahead.react'),{className:"_58-0",context:this.props.context,enableMessageSearch:this.props.enableMessageSearch,excludeGroups:this.props.excludeGroups,excludePages:this.props.excludePages,hasHoverState:this.props.hasHoverState,hideClearButton:p,isFacebookChat:false,isFocused:this.state.focused,isTokenizer:true,onBlur:function(){return this.setState({focused:false});}.bind(this),onBackspace:this.$MessengerGraphQLTokenizer_handleBackspace,onChange:this.$MessengerGraphQLTokenizer_handleChange,onClear:this.$MessengerGraphQLTokenizer_handleClear,onFocus:function(){return this.setState({focused:true});}.bind(this),onSelect:this.$MessengerGraphQLTokenizer_handleAdd,originalEntryIDs:this.props.originalEntryIDs,placeholder:o,queryString:this.state.queryString,ref:'typeahead',roomAssociatedObject:this.props.roomAssociatedObject,selectedEntryIDs:c('immutable').Seq(this.props.entries).map(function(q){return q.getUniqueID();}).toSet(),scrollableViewClassName:this.props.scrollableViewClassName,shouldQueryInternalBot:this.props.shouldQueryInternalBot,shouldQueryVCEndpoint:this.props.shouldQueryVCEndpoint,tabIndex:this.props.tabIndex,threadFBID:this.props.threadFBID,useLayer:this.props.useLayer,viewer:this.props.viewer,width:this.props.width}))),this.state.queryString===''&&!this.state.focused?this.props.defaultEntries:null);};m.prototype.$MessengerGraphQLTokenizer_renderToken=function(n,o){return c('React').createElement(c('MessengerTokenizerToken.react'),{className:"_2ei6",key:n.getUniqueID(),label:n.getTitle(),entry:n,index:o,onRemove:this.$MessengerGraphQLTokenizer_handleRemove});};m.propTypes={autoFocus:l.bool.isRequired,className:l.string.isRequired,context:l.object,defaultEntries:l.element,enableMessageSearch:l.bool.isRequired,entries:l.instanceOf(c('immutable').List).isRequired,excludeGroups:l.bool.isRequired,excludePages:l.bool.isRequired,forceHideClearButton:l.bool,hasHoverState:l.bool.isRequired,onAddEntryAttempt:l.func.isRequired,onClear:l.func,onRemoveEntryAttempt:l.func.isRequired,originalEntryIDs:l.instanceOf(c('immutable').Set).isRequired,placeholder:l.node.isRequired,roomAssociatedObject:l.object,scrollableViewClassName:l.string.isRequired,shouldQueryInternalBot:l.bool.isRequired,shouldQueryVCEndpoint:l.bool.isRequired,tabIndex:l.number,threadFBID:l.string,useLayer:l.bool.isRequired,viewer:l.string.isRequired,width:l.number.isRequired};


f.exports=m;}),null);

/** js/mercury/clients/messenger/constants/MessengerTabIndices.js */






__d('MessengerTabIndices',[],(function a(b,c,d,e,f,g){

'use strict';





var h=
{NEW_MESSAGE_TOKENIZER:9998,
COMPOSER_INPUT:9999};


f.exports=h;}),null);

/** js/mercury/clients/messenger/components/MessengerComposeViewHeader.react.js */







__d('MessengerComposeViewHeader.react',['cx','fbt','immutable','MessengerGraphQLTokenizer.react','MessengerTabIndices','React','clearImmediate','joinClasses','setImmediate'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,












l=c('React').PropTypes,

m=320;j=babelHelpers.inherits

(n,c('React').PureComponent);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.





















state=
{tokenizerContext:null},this.


$MessengerComposeViewHeader_timer=null,this.



































































$MessengerComposeViewHeader_focusTokenizer=function(){
this.$MessengerComposeViewHeader_timer=c('setImmediate')(function(){
this.refs.tokenizer&&this.refs.tokenizer.focusInput();}.
bind(this));}.
bind(this),p;}n.prototype.componentDidMount=function(){this.$MessengerComposeViewHeader_focusTokenizer();this.setState({tokenizerContext:this.refs.tokenizerContext});};n.prototype.componentDidUpdate=function(o){if(this.props.recipients!==o.recipients)this.props.onResize();};n.prototype.componentWillUnmount=function(){this.$MessengerComposeViewHeader_timer&&c('clearImmediate')(this.$MessengerComposeViewHeader_timer);};n.prototype.render=function(){var o={enableMessageSearch:false,excludeGroups:false,excludePages:false,hasHoverState:true,originalEntryIDs:c('immutable').Set(),scrollableViewClassName:"_2y8_",shouldQueryInternalBot:true,shouldQueryVCEndpoint:false,width:m};return c('React').createElement('div',{className:c('joinClasses')("_2y8y _5l-3",this.props.className),onClick:this.$MessengerComposeViewHeader_focusTokenizer,role:'presentation'},c('React').createElement('div',{className:"_2y8z"},i._(["To:","eb7bb0363f6fbbc5f4a24ccedec0d809"])),c('React').createElement('div',null,c('React').createElement(c('MessengerGraphQLTokenizer.react'),babelHelpers['extends']({autoFocus:true,className:"_2y8-",context:this.state.tokenizerContext,entries:this.props.recipients,forceHideClearButton:this.props.forceHideClearButton,onAddEntryAttempt:this.props.onAddRecipient,onClear:this.props.onClear,onRemoveEntryAttempt:this.props.onRemoveRecipient,placeholder:i._(["Type the name of a person or group","c5293bdacfc4e3dc6874ec40539d8fba"]),ref:'tokenizer',tabIndex:c('MessengerTabIndices').NEW_MESSAGE_TOKENIZER,useLayer:true,viewer:this.props.viewer},o)),c('React').createElement('div',{ref:'tokenizerContext'})));};n.propTypes={forceHideClearButton:l.bool.isRequired,onAddRecipient:l.func.isRequired,onClear:l.func,onRemoveRecipient:l.func.isRequired,onResize:l.func.isRequired,recipients:l.instanceOf(c('immutable').List).isRequired,viewer:l.string.isRequired};


f.exports=n;}),null);

/** js/mercury/clients/messenger/components/core/MessengerDialogCancelButton.react.js */







__d('MessengerDialogCancelButton.react',['fbt','MessengerDialogButton.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits






(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.
render=function(){

return (c('React').createElement(c('MessengerDialogButton.react'),babelHelpers['extends']
({action:'cancel',
label:h._(["Cancel","ccbbe3697748b161619805af5770147f"]),
type:'secondary'},
this.props)));};


function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerSignalsRe.js */





__d("messengerSignalsRe",["EventEmitter"],(function a(b,c,d,e,f,g){

'use strict';



var h=new (c("EventEmitter"))(),

i="resize";

function j(){
h.emit(i);
return 0;}


function k(l){
return h.addListener(i,l);}


g.emitter=h;
g.resizeEvent=i;
g.resize=j;
g.onResize=k;}),null);

/** js/mercury/clients/messenger/components/core/MessengerFlexArea.react.js */






__d('MessengerFlexArea.react',['cx','CSS','Event','messengerSignalsRe','React','ReactDOM','ResponsiveBlock.react','Style','SubscriptionsHandler','Vector','getScrollPosition','joinClasses','throttle'],(function a(b,c,d,e,f,g,h){

'use strict';
















var i=c('React').PropTypes,





j=c('React').createClass({displayName:'MessengerFlexArea',
propTypes:
{beforeResize:i.func,
onResize:i.func},


_subscriptions:null,
_onResizeTimeout:null,

getInitialState:function k(){

return {height:0};},



componentDidMount:function k(){
var l=new (c('SubscriptionsHandler'))();
l.addSubscriptions
(c('Event').listen
(window,
'resize',
c('throttle')(this.recalculateHeight,51)),

c('messengerSignalsRe').onResize(function(){
this.recalculateHeight();}.
bind(this)));

this._subscriptions=l;
this.recalculateHeight();},


componentWillUnmount:function k(){
this._subscriptions&&this._subscriptions.release();
clearTimeout(this._onResizeTimeout);},


render:function k(){

return (c('React').createElement(c('ResponsiveBlock.react'),
{className:c('joinClasses')

(this.props.className,
"_9hq"),

onResize:this._handleResponsiveBlockResize,
style:{height:this.state.height+'px'}},


this.props.children));},




recalculateHeight:function k(){
if(!this.isMounted())
return;

var l=c('ReactDOM').findDOMNode(this),

m=l.parentNode,

n=this.state.height,
o=c('Vector').getViewportDimensions().y,


p=false;
if(m&&c('Style').get(m,'display')==='none'){
c('Style').set(m,'display','initial');
p=true;}


var q=false;
if(m&&c('CSS').hasClass(m,'hidden_elem')){
c('CSS').removeClass(m,'hidden_elem');
q=true;}




o-=c('Vector').getElementPosition(m||l).y;


var r=c('getScrollPosition')(window);
o+=r.y;


if(m){
Array.from(m.childNodes).forEach(function(s){

if(s.nodeType===Node.COMMENT_NODE||
c('Style').get(s,'position')==='absolute')

return;


o-=c('Vector').getElementDimensions(s).y;});


o+=c('Vector').getElementDimensions(l).y;}



if(p)
c('Style').set(m,'display','');

if(q)
c('CSS').addClass(m,'hidden_elem');


if(isNaN(o)||o<0)
o=0;


if(o!==n){
this.props.beforeResize&&this.props.beforeResize();
this.setState({height:o},this.props.onResize);}},



_handleResponsiveBlockResize:c('throttle')
(function(k,l){
if(!this.isMounted())
return;

if(l===this.state.height){
this.props.beforeResize&&this.props.beforeResize();
clearTimeout(this._onResizeTimeout);
if(this.props.onResize)
this._onResizeTimeout=setTimeout(this.props.onResize,0);}},



51)});



f.exports=j;}),null);

/** js/mercury/clients/messenger/components/core/MessengerFlexScrollableArea.react.js */






__d('MessengerFlexScrollableArea.react',['MessengerFlexArea.react','MessengerScrollableArea.react','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i,





j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.
























state=
{shouldTrackBottom:this.props.shouldStickToBottom},this.



























































$MessengerFlexScrollableArea_handleScroll=function(){
this.props.onScroll&&this.props.onScroll();

if(!this.props.shouldStickToBottom)
return;


this.$MessengerFlexScrollableArea_checkAndSetScrolledToBottom();}.
bind(this),this.

getArea=function(){
return this.refs.scrollable&&this.refs.scrollable.getArea();}.
bind(this),this.

$MessengerFlexScrollableArea_handleResize=function(){
this.trackBottomIfRequired();}.
bind(this),this.

handleResize=function(){
this.refs.flexArea&&this.refs.flexArea.recalculateHeight();}.
bind(this),this.

trackBottomIfRequired=function(){
if(this.state.shouldTrackBottom)
this.scrollToBottom();}.

bind(this),this.

scrollToBottom=function(){
this.refs.scrollable&&this.refs.scrollable.scrollToBottom();}.
bind(this),this.

scrollToTop=function(q){
this.refs.scrollable&&this.refs.scrollable.scrollToTop(q);}.
bind(this),this.













isScrolledToBottom=function(){
var q=this.refs.scrollable;
return q?
q.isScrolledToBottom():
true;}.
bind(this),this.

isScrolledToBottomWithHeight=function(q){
return this.refs.scrollable.isScrolledToBottomWithHeight(q);}.
bind(this),this.

isScrolledToTop=function(){
return this.refs.scrollable&&this.refs.scrollable.isScrolledToTop();}.
bind(this),this.

getScrollTop=function(){
return this.refs.scrollable&&this.refs.scrollable.getScrollTop()||0;}.
bind(this),m;}k.prototype.componentDidMount=function(){this.props.onMount&&this.props.onMount();};k.prototype.render=function(){return c('React').createElement(c('MessengerFlexArea.react'),{className:this.props.className,onResize:this.$MessengerFlexScrollableArea_handleResize,ref:'flexArea'},this.props.flexChildren,c('React').createElement(c('MessengerScrollableArea.react'),{height:'100%',needsFastScrollHandler:this.state.shouldTrackBottom,onScroll:this.$MessengerFlexScrollableArea_handleScroll,ref:'scrollable',tabIndex:this.props.tabIndex},this.props.children),this.props.footerChildren);};k.prototype.$MessengerFlexScrollableArea_checkAndSetScrolledToBottom=function(){if(this.isScrolledToBottom()){this.setState({shouldTrackBottom:true});this.$MessengerFlexScrollableArea_setupScrollInterval();}else{this.setState({shouldTrackBottom:false});this.$MessengerFlexScrollableArea_clearScrollTimers();}};k.prototype.$MessengerFlexScrollableArea_setupScrollInterval=function(){if(!this.props.useScrollProtection)return;this.$MessengerFlexScrollableArea_clearScrollTimers();this.$MessengerFlexScrollableArea_scrollInterval=setInterval(function(){this.trackBottomIfRequired();}.bind(this),500);};k.prototype.$MessengerFlexScrollableArea_clearScrollTimers=function(){if(this.$MessengerFlexScrollableArea_scrollInterval)clearInterval(this.$MessengerFlexScrollableArea_scrollInterval);};k.prototype.scrollToPosition=function(l,m,n){this.refs.scrollable&&this.refs.scrollable.scrollToPosition(l,m,n);};k.propTypes={flexChildren:j.node,footerChildren:j.node,onMount:j.func,onScroll:j.func,shouldStickToBottom:j.bool,tabIndex:j.number,useScrollProtection:j.bool};


f.exports=k;}),null);

/** js/mercury/clients/messenger/constants/commerce/MNCommerceAttachmentConstants.js */





__d('MNCommerceAttachmentConstants',[],(function a(b,c,d,e,f,g){

var h=
{XLARGE_IMAGE_DIMENSION:72,
LARGE_IMAGE_DIMENSION:60,
SMALL_IMAGE_DIMENSION:32,
SINGLE_IMAGE_HEIGHT:108,
BUBBLE_PADDING:6,
IMAGE_HEIGHT:
{CHAT:108,
WEB_INBOX:130},

UNLINK_ERROR_DIALOG:
{WIDTH:300},

DIALOG:
{WIDTH:445,
PADDING:12},

MDOTCOMDIALOG:
{WIDTH:495},

ORDER_DETAIL:
{SUB_TOTAL:'subTotal',
SHIPPING:'shippingCost',
TAX:'tax',
TOTAL:'totalCost'}};



f.exports=h;}),null);

/** js/mercury/clients/messenger/components/messenger_commerce/dialogs/MNCommerceDialog.react.js */






__d('MNCommerceDialog.react',['cx','MessengerEnvironment','LayerFadeOnHide','LayerHideOnEscape','MNCommerceAttachmentConstants','MessengerDialog.react','React','XUIDialog.react','emptyFunction','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';













var i=c('React').PropTypes,

j=c('React').createClass({displayName:'MNCommerceDialog',
propTypes:
{onToggle:i.func,
shown:i.bool,
width:i.number.isRequired},


getDefaultProps:function k(){

return {onToggle:c('emptyFunction'),
repositionOnUpdate:true,
shown:true,
width:c('MessengerEnvironment').messengerui?
c('MNCommerceAttachmentConstants').MDOTCOMDIALOG.WIDTH:
c('MNCommerceAttachmentConstants').DIALOG.WIDTH};},



componentDidUpdate:function k(){



if(this.props.repositionOnUpdate)
setTimeout(function(){

if(this.isMounted()&&
this.refs.dialog&&
this.refs.dialog.layer)

this.refs.dialog.layer.updatePosition();}.

bind(this),0);},



render:function k(){
var l=c('MessengerEnvironment').messengerui,
m=l?c('MessengerDialog.react'):c('XUIDialog.react');

return (c('React').createElement(m,babelHelpers['extends']
({behaviors:
{LayerFadeOnHide:c('LayerFadeOnHide'),
LayerHideOnEscape:c('LayerHideOnEscape')}},

this.props,
{className:c('joinClasses')

(this.props.className,

l?"_3rx0":''),


ref:'dialog'}),


this.props.children));}});





f.exports=j;}),null);

/** js/mercury/clients/messenger/components/messenger_commerce/dialogs/MNCommerceDialogBody.react.js */






__d('MNCommerceDialogBody.react',['MessengerEnvironment','MessengerDialogBody.react','React','XUIDialogBody.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits






(j,c('React').Component);i=h&&h.prototype;j.prototype.
render=function(){
var k=c('MessengerEnvironment').messengerui,
l=k?c('MessengerDialogBody.react'):c('XUIDialogBody.react');


return (c('React').createElement(l,this.props,
this.props.children));};


function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/mercury/clients/messenger/components/messenger_commerce/dialogs/MNCommerceDialogTitle.react.js */






__d('MNCommerceDialogTitle.react',['MessengerEnvironment','MessengerDialogHeader.react','React','XUIDialogTitle.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits






(j,c('React').Component);i=h&&h.prototype;j.prototype.
render=function(){
var k=c('MessengerEnvironment').messengerui,
l=
k?c('MessengerDialogHeader.react'):c('XUIDialogTitle.react');


return (c('React').createElement(l,this.props,
this.props.children));};


function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/mercury/clients/messenger/components/messenger_commerce/MNCommerceDetailsDialog.react.js */









__d('MNCommerceDetailsDialog.react',['cx','fbt','React','MNCommerceDialog.react','MNCommerceDialogBody.react','MNCommerceDialogTitle.react','XUISpinner.react','XUIButton.react'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,











l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.




















































$MNCommerceDetailsDialog_renderTitle=function(){
return this.props.title?
c('React').createElement(c('MNCommerceDialogTitle.react'),null,
this.props.title):

null;}.
bind(this),this.

$MNCommerceDetailsDialog_renderError=function(){

return (c('React').createElement('div',{className:"_4y9b"},
c('React').createElement('p',{className:"_4y9c"},i._(["Sorry, Something Went Wrong","d4d5cdb327931da0351c53d82fc2f6c4"])),




c('React').createElement('p',{className:"_4y9d"},
this.props.errorMessage),

c('React').createElement(c('XUIButton.react'),
{onClick:this.props.onTryAgain,
label:i._(["Try Again","95c8f5710936a0abadf07620e0c799e3"])})));}.







bind(this),this.

$MNCommerceDetailsDialog_renderLoading=function(){

return (c('React').createElement('div',{className:"_4y9e"},
c('React').createElement(c('XUISpinner.react'),{background:'light',size:'large',paused:false})));},


o;}m.prototype.render=function(){var n=null;if(this.props.loading){n=this.$MNCommerceDetailsDialog_renderLoading();}else if(this.props.error){n=this.$MNCommerceDetailsDialog_renderError();}else n=this.props.children;return c('React').createElement(c('MNCommerceDialog.react'),{className:this.props.className,modal:true,onToggle:this.props.onToggle,shown:this.props.shown},this.$MNCommerceDetailsDialog_renderTitle(),c('React').createElement(c('MNCommerceDialogBody.react'),{useCustomPadding:true},n));};m.propTypes={error:l.object,errorMessage:l.node,loading:l.bool.isRequired,onToggle:l.func,onTryAgain:l.func,title:l.node,shown:l.bool.isRequired};m.defaultProps={shown:false};


f.exports=m;}),null);

/** js/mercury/clients/messenger/components/messenger_commerce/dialogs/MNCommerceButton.react.js */






__d('MNCommerceButton.react',['MessengerEnvironment','MessengerDialogButton.react','React','XUIButton.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits






(j,c('React').Component);i=h&&h.prototype;j.prototype.
render=function(){
var k=c('MessengerEnvironment').messengerui,
l=k?c('MessengerDialogButton.react'):c('XUIButton.react'),
m=this.props.type;
if(!m)
m=this.props.type==='confirm'?'primary':'secondary';

var n=k?'default':this.props.use,
o=babelHelpers['extends']({},this.props,{type:m,use:n});


return (c('React').createElement(l,o,
this.props.children));};


function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/mercury/clients/messenger/components/messenger_commerce/dialogs/MNCommerceDialogFooter.react.js */






__d('MNCommerceDialogFooter.react',['cx','MessengerEnvironment','MessengerDialogFooter.react','React','XUIDialogFooter.react','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits









(k,c('React').Component);j=i&&i.prototype;k.prototype.
render=function(){
var l=c('MessengerEnvironment').messengerui,
m=
l?c('MessengerDialogFooter.react'):c('XUIDialogFooter.react'),
n=void 0,
o=this.props.children;

if(l){
n=c('React').Children.count(this.props.children);
o=c('React').Children.map(this.props.children,function(p,q){
if(!p)
return null;

return c('React').cloneElement(p,
{className:c('joinClasses')
(p.props.className,
"_4ec0"),

type:q===0&&n===2?'secondary':'primary'});});}





return (c('React').createElement(m,
this.props,
o));};


function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/mercury/clients/messenger/constants/commerce/MNCommerceLoggingConstants.js */





__d('MNCommerceLoggingConstants',[],(function a(b,c,d,e,f,g){

var h=
{DIALOG_SURFACE:
{CHECKOUT_ORDER_CONFIG:'checkout_order_config',
SHIPMENT:'shipment',
RECEIPT:'receipt',
UNLINK:'unlink',
UNLINK_ERROR:'unlink_error',
MANAGE:'manage'}};



f.exports=h;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerComposeViewHeaderReact.js */





__d('messengerComposeViewHeaderReact',['reactRe','bs_js_boolean','bs_js_null_undefined','MessengerComposeViewHeader.react'],(function a(b,c,d,e,f,g){

'use strict';






function h(i,j,k,l,m,n,o,p){
var q=
{className:c('bs_js_null_undefined').from_opt(i),
forceHideClearButton:c('bs_js_boolean').to_js_boolean(j),
onClear:c('bs_js_null_undefined').from_opt(k),
onAddRecipient:l,
onRemoveRecipient:m,
onResize:n,
recipients:o,
viewer:p},

r=c('MessengerComposeViewHeader.react');
return function(s,t,u,v){
return c('reactRe').wrapPropsShamelessly(r,q,s,t,u,v);};}



g.createElement=h;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerDialogBodyReact.js */





__d('messengerDialogBodyReact',['cx','bs_curry','React','reactRe','utilsRe','joinClasses','bs_js_primitive'],(function a(b,c,d,e,f,g,h){

'use strict';









var i=c('reactRe').Component[9],

j=i[0],

k=i[1],

l=i[2],

m=i[3],

n=i[4],

o=i[5],

p=i[6],

q="MessengerDialogBodyReact";

function r(y){
var z=y[1];
return c('React').createElement("div",
{className:c('joinClasses')("_4eb-",c('utilsRe').$pipe$unknown(z[0],""))},
c('reactRe').listToElement(z[1]));}


var s=[function(y){

return [c('bs_js_primitive').null_undefined_to_opt(y.className),
c('reactRe').jsChildrenToReason(y.children)];}],



t=
[j,
k,
l,
m,
n,
o,
p,
q,
c('utilsRe').$pipe$unknown,
r,
s],


u=c('reactRe').CreateComponent
([q,
o,
p,
j,
m,
k,
l,
n,
s,
r]),


v=u[1];

function w(y,z){
return c('bs_curry')._2(v,
[y,
z],
z);}


var x=u[0];

g.MessengerDialogBody=t;
g.comp=x;
g.wrapProps=v;
g.createElement=w;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerDialogReact.js */





__d('messengerDialogReact',['reactRe','utilsRe','bs_js_null_undefined','MessengerDialog.react','MessengerDialogTitle.react','MessengerDialogButton.react','MessengerDialogFooter.react','MessengerDialogHeader.react','MessengerDialogCancelButton.react'],(function a(b,c,d,e,f,g){

'use strict';











function h(w){
if(w){
switch(w[0]){
case 0:
return ["cancel"];
case 1:
return ["button"];
case 2:
return ["confirm"];}}else 



return 0;}



function i(w){
if(w){
if(w[0]!==0){
return ["secondary"];}else 

return ["primary"];}else 


return 0;}



function j(w,x,y,z,aa,ba,ca){
var da=
{className:c('bs_js_null_undefined').from_opt(w),
onToggle:x,
repositionOnUpdate:c('utilsRe').optionBoolToNullUndefinedBoolean(y),
shown:c('utilsRe').optionBoolToNullUndefinedBoolean(z),
titleID:c('bs_js_null_undefined').from_opt(aa),
type:c('bs_js_null_undefined').from_opt(ba),
width:c('bs_js_null_undefined').from_opt(ca)},

ea=c('MessengerDialog.react');
return function(fa,ga,ha,ia){
return c('reactRe').wrapPropsShamelessly(ea,da,fa,ga,ha,ia);};}



var k=[j];

function l(w,x){
var y=
{className:c('bs_js_null_undefined').from_opt(w),
id:c('bs_js_null_undefined').from_opt(x)},

z=c('MessengerDialogHeader.react');
return function(aa,ba,ca,da){
return c('reactRe').wrapPropsShamelessly(z,y,aa,ba,ca,da);};}



var m=[l];

function n(w){
var x=
{className:c('bs_js_null_undefined').from_opt(w)},

y=c('MessengerDialogTitle.react');
return function(z,aa,ba,ca){
return c('reactRe').wrapPropsShamelessly(y,x,z,aa,ba,ca);};}



var o=[n];

function p(w,x){
var y=
{className:c('bs_js_null_undefined').from_opt(w),
leftContent:c('bs_js_null_undefined').from_opt(x)},

z=c('MessengerDialogFooter.react');
return function(aa,ba,ca,da){
return c('reactRe').wrapPropsShamelessly(z,y,aa,ba,ca,da);};}



var q=[p];

function r(w){
var x=
{onClick:c('bs_js_null_undefined').from_opt(w)},

y=c('MessengerDialogCancelButton.react');
return function(z,aa,ba,ca){
return c('reactRe').wrapPropsShamelessly(y,x,z,aa,ba,ca);};}



var s=[r];

function t(w,x,y,z,aa,ba,ca,da){
var ea=
{action:c('bs_js_null_undefined').from_opt(h(w)),
label:c('bs_js_null_undefined').from_opt(x),
disabled:c('utilsRe').optionBoolToNullUndefinedBoolean(y),
use:c('bs_js_null_undefined').from_opt(z),
onClick:c('bs_js_null_undefined').from_opt(aa),
type:c('bs_js_null_undefined').from_opt(i(ba)),
className:c('bs_js_null_undefined').from_opt(ca),
leftContent:c('bs_js_null_undefined').from_opt(da)},

fa=c('MessengerDialogButton.react');
return function(ga,ha,ia,ja){
return c('reactRe').wrapPropsShamelessly(fa,ea,ga,ha,ia,ja);};}



var u=[t],

v=0;

g.stringOfButtonAction=h;
g.stringOfButtonType=i;
g.Dialog=k;
g.Header=m;
g.Title=o;
g.Footer=q;
g.CancelButton=s;
g.Button=u;
g.Body=v;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerDialogsRe.js */





__d('messengerDialogsRe',['bs_list','bs_curry'],(function a(b,c,d,e,f,g){

'use strict';




var h=[0],

i=[0];

function j(o){
i[0]=[o];
return 0;}


function k(){
var o=i[0],
p=h[0];
if(o){
var q=o[0];
if(c('bs_list').length(p)>0){
return c('bs_curry')._1(q,[p]);}else 

return c('bs_curry')._1(q,0);}else 


return 0;}



function l(o){
h[0]=
[o,
h[0]];

return k(0);}


function m(){
var o=h[0];
h[0]=o?o[1]:0;
return k(0);}


function n(){
h[0]=0;
return k(0);}


g.visibleDialogs=h;
g.setDialogComponentState=i;
g.addHandler=j;
g.updateComponent=k;
g.showDialog=l;
g.removeDialog=m;
g.removeAllDialogs=n;}),null);

/** www/__virtual__/x/XMessagingForwardAttachmentController.js */



__d("XMessagingForwardAttachmentController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/mercury\/attachments\/forward\/",{});}),

null);

/** www/__virtual__/x/XMessengerPlatformShareCTAController.js */



__d("XMessengerPlatformShareCTAController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messages\/platform\/share\/",{});}),

null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerSpinnerReact.js */





__d('messengerSpinnerReact',['reactRe','bs_js_null_undefined','MessengerSpinner.react'],(function a(b,c,d,e,f,g){

'use strict';





function h(i,j,k){
var l=
{className:c('bs_js_null_undefined').from_opt(i),
color:c('bs_js_null_undefined').from_opt(j),
size:c('bs_js_null_undefined').from_opt(k)},

m=c('MessengerSpinner.react');
return function(n,o,p,q){
return c('reactRe').wrapPropsShamelessly(m,l,n,o,p,q);};}



g.createElement=h;}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerForwardAttachmentDialogReact.js */





__d("messengerForwardAttachmentDialogReact",["ix","cx","fbt","bs_curry","React","reactRe","fbglyph","immutable","imageReact","bs_js_boolean","CurrentUser","AsyncRequest","bs_js_primitive","MessageShareType","messengerDialogReact","messengerSpinnerReact","messengerDialogBodyReact","messengerComposeViewHeaderReact","XMessengerPlatformShareCTAController","XMessagingForwardAttachmentController"],(function a(b,c,d,e,f,g,h,i,j){

'use strict';





















var k=j._(["Send","2a31ddfbcb41b624b387adae698f95e8"]),



l=c("reactRe").Component[8][7],

m=l[0],

n=l[1],

o=l[2],

p=l[3],

q=l[4],

r=l[5],

s="MessengerForwardAttachmentDialogReact";

function t(){

return [c("immutable").List([]),
0,
0,
Date.now()];}



function u(ia,ja){
var ka=ia[0];

return [[ka[0].push(ja),
ka[1],
ka[2],
ka[3]]];}



function v(ia,ja){
var ka=ia[0];

return [[ka[0].filter(function(la){
return c("bs_js_boolean").to_js_boolean(+(la!==ja));}),

ka[1],
ka[2],
ka[3]]];}



function w(ia,ja){
var ka=ia[0];

return [[c("immutable").List([]),
ka[1],
ka[2],
ka[3]]];}



function x(ia,ja,ka){
new (c("AsyncRequest"))(ia.getURIBuilder().getURI()).setMethod("POST").setHandler(ka).setData(ja).send();
return 0;}


function y(ia,ja){
var ka=ia[0];
if(ja.payload.success){
c("bs_curry")._1(ia[1][1],0);

return [[c("immutable").List([]),
ka[1],
0,
Date.now()]];}else 



return [[ka[0],
c("bs_js_primitive").null_undefined_to_opt(ja.payload.error),
0,
ka[3]]];}




function z(ia,ja){
var ka=ia[2],
la=ia[1],
ma=ia[0],
na={},
oa=ma[3];
ma[0].forEach(function(sa,ta,ua){
na[oa+ta]=sa.getUniqueID();
return true;});

var pa=la[5],
qa=la[2],
ra=0;
if(pa&&qa&&pa[0]===c("MessageShareType").PLATFORM_SHARE_CTA){
x(c("XMessengerPlatformShareCTAController"),
{cta_id:la[0],
message_id:qa[0],
recipient_map:na},
c("bs_curry")._1(ka,y));}else 

ra=1;

if(ra===1)
x(c("XMessagingForwardAttachmentController"),
{attachment_id:la[0],
recipient_map:na},
c("bs_curry")._1(ka,y));


return [[ma[0],
0,
1,
ma[3]]];}



function aa(ia,ja){
if(!ja)
c("bs_curry")._1(ia[1][1],0);

return 0;}


function ba(ia){
var ja=ia[2],
ka=ia[1],
la=ia[0],
ma=la[2],
na=la[1],
oa;
if(ma!==0){
oa=c("React").createElement("div",undefined,c("messengerSpinnerReact").createElement(0,0,0)(0,0,0,0),c("React").createElement("span",
{className:"_1e1n _3-99"},j._(["Sending","a5840f55a3307edc49d847183c2ac7fe"])));}else



if(na){
var pa=h("141787");




oa=c("React").createElement("div",
{className:"_1e1n"},
c("imageReact").createElement(0,0,[pa],0,0,0)(0,0,0,0),c("React").createElement("span",
{className:"_3-99"},
na[0]));}else 

oa=null;

return c("bs_curry").app(c("messengerDialogReact").Dialog[0],
[0,
c("bs_curry")._1(ja,aa),
0,
[ka[3]],
0,
0,
[560],

[c("bs_curry")._6(c("messengerDialogReact").Header[0],0,0,
[c("bs_curry")._5(c("messengerDialogReact").Title[0],0,
[ka[4],
0],
0,0,0),
0],
0,0,0),

[c("bs_curry")._3(c("messengerDialogBodyReact").createElement(0,
[c("messengerComposeViewHeaderReact").createElement(["_1e1o"],0,[c("bs_curry")._1(ja,w)],c("bs_curry")._1(ja,u),c("bs_curry")._1(ja,v),function(){
return 0;},
la[0],c("CurrentUser").getID())(0,0,0,0),
0]),
0,0,0),

[c("bs_curry")._6(c("messengerDialogReact").Footer[0],0,[oa],
[c("bs_curry")._5(c("messengerDialogReact").CancelButton[0],0,0,0,0,0),

[c("bs_curry").app(c("messengerDialogReact").Button[0],
[[2],
[k],
[+la[0].isEmpty()||la[2]],
0,
[c("bs_curry")._1(ja,z)],
[0],
0,
0,
0,
0,
0,
0]),

0]],

0,0,0),
0]]],



0,
0,
0]);}



var ca=[function(ia){

return [ia.attachmentID,
ia.onClose,
c("bs_js_primitive").null_undefined_to_opt(ia.messageID),
+ia.shown,
ia.title,
c("bs_js_primitive").null_undefined_to_opt(ia.shareType)];}],



da=
[m,
n,
o,
p,
q,
r,
s,
t,
u,
v,
w,
x,
y,
z,
aa,
ba,
ca],


ea=c("reactRe").CreateComponent
([s,
r,
t,
m,
p,
n,
o,
q,
ca,
ba]),


fa=ea[1],

ga=c("bs_curry").__1(fa),

ha=ea[0];

g.sendButtonLabel=k;
g.MessengerForwardAttachmentDialog=da;
g.comp=ha;
g.wrapProps=fa;
g.createElement=ga;}),null);

/** js/mercury/clients/messenger/stores/MNCommerceCacheTimeoutLimits.js */






__d('MNCommerceCacheTimeoutLimits',[],(function a(b,c,d,e,f,g){

'use strict';




var h=
{SUCCESS_TIMEOUT:10,
ERROR_TIMEOUT:1};


f.exports=h;}),null);

/** js/mercury/clients/shared/components/attachments/share/MercuryShareAttachmentReactShape.js */






__d('MercuryShareAttachmentReactShape',['React'],(function a(b,c,d,e,f,g){

'use strict';



var h=c('React').PropTypes,























































i=h.shape
({share_id:h.string,
description:h.string,
media:h.shape
({image:h.string,
image_size:h.shape
({height:h.number,
width:h.number}),

duration:h.number,
playable:h.bool,
source:h.string}),

source:h.string,
style_list:h.arrayOf(h.string),
subattachments:h.array,
target:h.object,
title:h.string,
properties:h.object,
uri:h.string,
action_links:h.array,
messaging_attribution:h.shape
({attribution_type:h.string,
attribution_id:h.string,
name:h.string,
icon_url:h.string}),

messenger_ctas:h.arrayOf(h.shape
({id:h.string,
action_title:h.string,
action_url:h.string,
action_open_type:h.number,
is_high_confidence:h.bool,
is_mutable_by_server:h.bool,
user_confirmation:h.bool,
native_url:h.string,
is_disabled:h.bool,
nested_ctas:h.array}))}).

isRequired;

f.exports=i;}),null);

/** js/mercury/renderers/raw/MercuryThreadMetadataRawRenderer.js */





__d('MercuryThreadMetadataRawRenderer',['cx','fbt','Event','CSS','DOM','MercuryActionStatus','MercuryErrorInfo','MercuryStatusTemplates','TooltipData'],(function a(b,c,d,e,f,g,h,i){












var j=


















{renderParticipantListWithNoThreadName:function k
(l,
m,
n,
o,
p,
q){




var r=
{callback:true,
check_length:true,

show_unread_count:true};

q=q||{};
var s={};
for(var t in q)
if(r[t]){
s[t]=q[t];
delete q[t];}



var u=n.map(function(z){
return o[z];}),


v=this.renderRawParticipantList
(l,
u,
n.length,
q);


v=this.renderRawTitleWithUnreadCount
(v,
s.show_unread_count?m.unread_count:0);


var w=q.abbr_mode,
x={};
for(var y in q)
x[y]=q[y];

x.abbr_mode=true;

p.forEach(function(z){
var aa=p.length>1?
this._cloneIfDOMElement(v):
v;
c('DOM').setContent(z,aa);
if(s.check_length&&
!w&&
z.scrollWidth>z.clientWidth){
var ba=
this.renderRawParticipantList
(l,
u,
n.length,
x),

ca=
this.renderRawTitleWithUnreadCount
(ba,
s.show_unread_count?m.unread_count:0);

c('DOM').setContent(z,ca);}}.

bind(this));

s.callback&&s.callback(v);},












renderRawParticipantList:function k(l,m,n,o){



var p=
{abbr_mode:true,

last_separator_uses_and:true,



names_renderer:true};



o=o||{};











var q=null;
if(o.names_renderer){
q=o.names_renderer(m);}else 

q=m.map(function(s){return s.name;});


var r=null;
if(q.length===0){
if(!l){
r=i._(["New Message","c2e45d6b1b1043131add652eb099d0b7"]);}else 

r=i._(["No Participants","e4e348c816b4416bcf68481452caf22b"]);}else

if(q.length==1){
r=q[0];}else
if(q.length==2){
if(o.last_separator_uses_and){
r=i._(["{participant1} and {participant2}","3ad29ef006230b2d125be4abd2ad9ceb"],[i.param('participant1',q[0]),i.param('participant2',q[1])]);}else 

r=i._(["{participant1}, {participant2}","424d303e149b47764bf9b8f3667c54a9"],[i.param('participant1',q[0]),i.param('participant2',q[1])]);}else

if(o.last_separator_uses_and){
if(o.abbr_mode){
r=i._(["{participant1} and {others_link}","06a546208c1496efb270d9c25e14d243"],[i.param('participant1',q[0]),i.param('others_link',this.renderRawParticipantCount

({render_subset:true,
count:n-1}))]);}else


if(q.length==3){
r=i._(["{participant1}, {participant2} and {participant3}","fb60c91838d2ec8cdb1d7378f729d628"],[i.param('participant1',q[0]),i.param('participant2',q[1]),i.param('participant3',q[2])]);}else 

r=i._(["{participant1}, {participant2} and {others_link}","f7b9c2569c8663f6160f79b063996077"],[i.param('participant1',q[0]),i.param('participant2',q[1]),i.param('others_link',this.renderRawParticipantCount

({render_subset:true,
count:n-2}))]);}else 




if(q.length==3){
r=i._(["{participant1}, {participant2}, {participant3}","ef67c44cb1e065c379efd4ac03dc121c"],[i.param('participant1',q[0]),i.param('participant2',q[1]),i.param('participant3',q[2])]);}else 

r=i._(["{participant1}, {participant2}, {participant3}, {others_link}","491612e1e81932de4a022129313395cf"],[i.param('participant1',q[0]),i.param('participant2',q[1]),i.param('participant3',q[2]),i.param('others_link',this.renderRawParticipantCount

({render_subset:true,
count:n-3}))]);




if(Array.isArray(r))


r=c('DOM').create('span',{},r);

return r;},


renderRawTitleWithUnreadCount:function k(l,m){
var n=l;
if(m&&m>1)
n=c('DOM').create('span',{},i._(["{conversation_title} ({unread_count})","de5b18fca4f3899be7b181d761e55f8a"],[i.param('conversation_title',l),i.param('unread_count',m)]));

return n;},











renderRawParticipantCount:function k(l){
var m=l.render_subset,
n;

if(!m){
n=l.count>1?i._({"*":["{num} people","b511a54dffda1952d285152b5ba29af5"]},
[i.param('num',l.count,[0])]):i._(["1 person","72028c70cce9206ca1c42b342e655fd4"]);}else 


n=l.count>1?i._({"*":["{others_count} others","e3f2c94aed402988232109e294cff16f"]},
[i.param('others_count',l.count,[0])]):i._(["1 other","d5e958dcde63fd753dfa7aae6a6e20fd"]);



return n;},







renderShortNames:function k(l){
if(l.length==1)
return [l[0].name];


return l.map(function(m){
return m.short_name;});},



renderStatusIndicator:function k(l,m,n){
var o;
if(l==c('MercuryActionStatus').RESENDING){
o=this.renderResendIndicator();}else
if(l!==undefined&&
l!=c('MercuryActionStatus').UNSENT&&
l!=c('MercuryActionStatus').UNCONFIRMED&&
l!=c('MercuryActionStatus').SUCCESS)
o=this.renderErrorIndicator(m,n);


return o;},


renderResendIndicator:function k(){
return c('MercuryStatusTemplates')[':fb:mercury:resend-indicator'].render();},










renderErrorIndicator:function k(l,m){
if(!l)
return null;


var n=c('MercuryStatusTemplates')[':fb:mercury:error-indicator'].render(),
o=l.is_transient,

p=c('MercuryErrorInfo').getMessage(l);
if(o)
if(c('MercuryErrorInfo').isConnectionError(l)){
p=i._(["{message} Check your internet connection and click to try again.","5f382758f9329ff2f48a27deef205b69"],
[i.param('message',p)]);}else 







p=i._(["{message} Click to send again.","616fc38efc0fef44e52fe9199759c783"],
[i.param('message',p)]);







c('TooltipData').set(n,p,'above','center');


if(m&&o){
c('Event').listen(n,'click',m);
n.setAttribute('tabindex','0');
c('CSS').addClass(n,"_55q-");}


return n;},


_cloneIfDOMElement:function k(l){
if(l&&l.cloneNode){
return l.cloneNode();}else 

return l;}};




f.exports=j;}),null);

/** js/messaging/typeahead/MessagingRecipientTypeaheadItem.react.js */





__d('MessagingRecipientTypeaheadItem.react',['cx','BackgroundImage.react','ChatTypeaheadConstants','ImageBlock.react','LeftRight.react','React','SplitImage.react','MercuryThreadMetadataRawRenderer','TypeaheadViewItem','joinClasses','Keys'],(function a(b,c,d,e,f,g,h){














var i=c('React').PropTypes,

j=c('React').createClass({displayName:'MessagingRecipientTypeaheadItem',
propTypes:babelHelpers['extends']({},
c('TypeaheadViewItem').propTypes,
{imageSize:i.number.isRequired}),


mixins:[c('TypeaheadViewItem').Mixin],

isThreadRecipient:function k(){
return this.props.entry.getType()===c('ChatTypeaheadConstants').THREAD_TYPE;},


_getImage:function k(){
var l=this.props.entry;

if(l.getType()===c('ChatTypeaheadConstants').THREAD_TYPE&&
!l.getPhoto()){
var m=l.getAuxiliaryData();

return (c('React').createElement(c('SplitImage.react'),
{size:this.props.imageSize,
srcs:m.participantsToRender.map(function(n){return n.image_src;})}));}




if(l.getPhoto())

return (c('React').createElement(c('BackgroundImage.react'),
{width:this.props.imageSize,
height:this.props.imageSize,
backgroundSize:'cover',
src:l.getPhoto()}));




return c('React').createElement('span',null);},


_getThreadParticipantList:function k(){
if(!this.isThreadRecipient())
return null;


var l=this.props.entry;

return c('MercuryThreadMetadataRawRenderer').renderRawParticipantList
(l.getUniqueID(),
l.getAuxiliaryData().participantsToRender,
l.getAuxiliaryData().thread.participants.length-1,
{names_renderer:c('MercuryThreadMetadataRawRenderer').renderShortNames});},



_getTitle:function k(){
var l=this.props.entry;
if(this.isThreadRecipient()&&!l.getTitle())
return this._getThreadParticipantList();


return l.getTitle();},


_getSubtitle:function k(){
var l=this.props.entry;

if(this.isThreadRecipient()&&!l.getTitle())
return this._getThreadParticipantList();


return l.getSubtitle()?
l.getSubtitle().split(' \u00b7 ')[0]:
null;},


_onKeyDown:function k(event){

if(event.keyCode===c('Keys').SPACE||
event.keyCode===c('Keys').RETURN){

event.preventDefault();
this._onSelect(event);}},



render:function k(){
var l=this._getSubtitle(),
m=c('joinClasses')("_599m"+(' '+"_55xn")+



(!l?' '+"_5mne":'')+
(this.props.highlighted?' '+"_599n":''),

this.props.className);


return (c('React').createElement('li',
{'aria-selected':this.props.selected,
className:m,
onMouseDown:this._onSelect,
onMouseEnter:this._onHighlight,
onKeyDown:this._onKeyDown,
role:this.props.role},
c('React').createElement(c('ImageBlock.react'),{spacing:'medium'},
this._getImage(),
c('React').createElement(c('LeftRight.react'),null,
c('React').createElement('div',null,
c('React').createElement('div',{className:"_55xt _599p"},

this._getTitle()),

c('React').createElement('div',{className:"_55z3 _599q"},

l)),


this.props.children))));}});







f.exports=j;}),null);

/** js/messaging/typeahead/MessagingRecipientSelectedList.react.js */





__d('MessagingRecipientSelectedList.react',['ix','cx','fbt','xuiglyph','Image.react','LeftRight.react','Map','MessagingRecipientTypeaheadItem.react','React'],(function a(b,c,d,e,f,g,h,i,j,k){var l,m,











n=c('React').PropTypes;l=babelHelpers.inherits

(o,c('React').Component);m=l&&l.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=m.constructor).call.apply(p,[this].concat(s)),this.





$MessagingRecipientSelectedList_renderSelectedEntry=function(u){
var v=h("88982");





return (c('React').createElement(c('MessagingRecipientTypeaheadItem.react'),
{key:u.getUniqueID(),
entry:u,
imageSize:24,
onSelect:this.props.onSelect},
c('React').createElement(c('Image.react'),
{className:"_1jm4",
src:v})));}.



bind(this),q;}o.prototype.

render=function(){'use strict';
var p=j._(["Send to:","87b7738140913684ef91e4f761563dd0"]),





q=[];
this.props.entries.forEach
(function(r){return q.push(this.$MessagingRecipientSelectedList_renderSelectedEntry(r));}.bind(this));


return (c('React').createElement('div',{className:"_1jm5"},
c('React').createElement(c('LeftRight.react'),
{className:
"_1jm6 _2ph-"},

c('React').createElement('span',null,p),
c('React').createElement('span',null,this.props.entries.size)),

c('React').createElement('ul',null,q)));};


o.propTypes={entries:n.instanceOf(c('Map')),onSelect:n.func.isRequired};


f.exports=o;}),null);

/** js/messaging/typeahead/MessagingRecipientTypeaheadView.react.js */





__d('MessagingRecipientTypeaheadView.react',['cx','fbt','CenteredContainer.react','Link.react','Map','MessagingRecipientTypeaheadItem.react','React','TypeaheadViewPropTypes','XUISpinner.react'],(function a(b,c,d,e,f,g,h,i){var j,k,












l=c('React').PropTypes,

m=32;j=babelHelpers.inherits

(n,c('React').Component);k=j&&j.prototype;function n(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.








$MessagingRecipientTypeaheadView_renderItem=function(t){
var u=t===this.props.highlightedEntry,
v=this.props.selectedEntries.has(t.getUniqueID());

return (c('React').createElement(c('MessagingRecipientTypeaheadItem.react'),
{key:t.getUniqueID(),
entry:t,
highlighted:u,
imageSize:m,
selected:v,
onSelect:this.props.onSelect,
onHighlight:this.props.onHighlight,
onRenderHighlight:this.props.onRenderHighlight},
c('React').createElement(c('Link.react'),
{'aria-checked':v,
className:"_2i83"+

(v?' '+"_2i85":'')+
(!v?' '+"_2i86":''),

href:'#',
role:'checkbox',
tabIndex:'0'})));}.



bind(this),p;}n.prototype.

render=function(){'use strict';
if(this.props.entries.length===0&&!this.props.loading)

return (c('React').createElement(c('CenteredContainer.react'),{className:"_2pi1"},i._(["No results","8457d11f5621912de64f3c5d42f30125"])));








return (c('React').createElement('ul',
{id:this.props.ariaOwneeID,
className:"_51do",
role:this.props.role},
this.props.entries.map(this.$MessagingRecipientTypeaheadView_renderItem),
c('React').createElement('div',{className:"_51dq"},
this.props.loading?c('React').createElement(c('XUISpinner.react'),null):null)));};



n.propTypes=babelHelpers['extends']({},c('TypeaheadViewPropTypes'),{selectedEntries:l.instanceOf(c('Map')),loading:l.bool});n.defaultProps={role:'listbox'};


f.exports=n;}),null);

/** js/messaging/MessagingForwardAttachmentDialog.react.js */






__d('MessagingForwardAttachmentDialog.react',['ix','cx','fbt','AsyncRequest','ChatSearchSource','Image.react','LayerFadeOnHide','Layout.react','Map','MessageShareType','MessagingRecipientSelectedList.react','MessagingRecipientTypeaheadView.react','React','SearchableTextInput.react','ScrollableArea.react','XMessagingForwardAttachmentController','XMessengerPlatformShareCTAController','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogCancelButton.react','XUIDialogFooter.react','XUIDialogTitle.react','XUISpinner.react','fbglyph','requireWeak'],(function a(b,c,d,e,f,g,h,i,j){var k,l,






m=c('Layout.react').Column,
n=c('Layout.react').FillColumn,






















o=c('React').PropTypes;k=babelHelpers.inherits

(p,c('React').Component);l=k&&k.prototype;function p(){var q,r;'use strict';for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=l.constructor).call.apply(q,[this].concat(t)),this.











state=
{bootstrappedEntries:[],
entries:[],
loading:true,
selectedEntries:new (c('Map'))(),
sendError:null,
sending:false,
startingThreadingID:Date.now(),
query:''},this.
























$MessagingForwardAttachmentDialog_onSelectEntry=function(v){
var w=v.getUniqueID(),
x=new (c('Map'))(this.state.selectedEntries);
if(x.has(w)){
x['delete'](w);}else 

x.set(w,v);


this.setState({selectedEntries:x});}.
bind(this),this.

$MessagingForwardAttachmentDialog_onSearchChange=function(v){
var w=v.target.value;
this.setState
({loading:true,
query:w});}.

bind(this),this.

$MessagingForwardAttachmentDialog_onSearchEntriesFound=function(v){
this.setState({entries:v});}.
bind(this),this.

$MessagingForwardAttachmentDialog_onSearchFinished=function(v){
v===this.state.query&&this.setState({loading:false});}.
bind(this),this.

$MessagingForwardAttachmentDialog_onSubmit=function(){
var v={},
w=this.state.startingThreadingID;
this.state.selectedEntries.forEach
(function(y){
v[w++]=y.getUniqueID();});


if(this.props.shareType===c('MessageShareType').PLATFORM_SHARE_CTA){
var x=c('XMessengerPlatformShareCTAController').getURIBuilder().getURI();
new (c('AsyncRequest'))(x).
setMethod('POST').
setHandler(this.$MessagingForwardAttachmentDialog_onSubmitResponse).
setData
({cta_id:this.props.attachmentID,
message_id:this.props.messageID,
recipient_map:v}).

send();}else{

x=c('XMessagingForwardAttachmentController').getURIBuilder().getURI();
new (c('AsyncRequest'))(x).
setMethod('POST').
setHandler(this.$MessagingForwardAttachmentDialog_onSubmitResponse).
setData
({attachment_id:this.props.attachmentID,
recipient_map:v}).

send();}

this.setState({sending:true,sendError:null});}.
bind(this),this.

$MessagingForwardAttachmentDialog_onSubmitResponse=function(v){
if(v.payload.success){

this.setState
({bootstrappedEntries:[],
selectedEntries:new (c('Map'))(),
sending:false,
startingThreadID:Date.now(),
query:''},
this.props.onClose);
return;}


this.setState
({sending:false,
sendError:v.payload.error});}.

bind(this),this.

$MessagingForwardAttachmentDialog_onToggle=function(v){
if(!v)
this.props.onClose();}.

bind(this),r;}p.prototype.componentWillMount=function(){'use strict';this.$MessagingForwardAttachmentDialog_dataSource=new (c('ChatSearchSource'))({queryRequests:[{uri:'/ajax/mercury/composer_query.php'}]});};p.prototype.componentDidMount=function(){'use strict';c('requireWeak')('OrderedFriendsList',function(q){return q.getSearchableEntries(20,function(r){this.setState({bootstrappedEntries:r,loading:false});}.bind(this));}.bind(this));};p.prototype.

render=function(){'use strict';
var q=j._(["Send","2a31ddfbcb41b624b387adae698f95e8"]),





r=null;
if(this.state.sending){
r=
c('React').createElement('div',null,
c('React').createElement(c('XUISpinner.react'),null),
c('React').createElement('span',{className:"_5s0d _3-99"},j._(["Sending","a5840f55a3307edc49d847183c2ac7fe"])));}else







if(this.state.sendError){
var s=h("141787");




r=
c('React').createElement('div',{className:"_5s0d"},
c('React').createElement(c('Image.react'),{src:s}),
c('React').createElement('span',{className:"_3-99"},
this.state.sendError));}





var t=j._(["Search for people and groups","a2f012f6e29c20565c3970eeb816f17b"]);






return (c('React').createElement(c('XUIDialog.react'),
{behaviors:{LayerFadeOnHide:c('LayerFadeOnHide')},
hideOnEscape:true,
onToggle:this.$MessagingForwardAttachmentDialog_onToggle,
shown:this.props.shown,
width:560},
c('React').createElement(c('XUIDialogTitle.react'),null,this.props.title),
c('React').createElement(c('XUIDialogBody.react'),{useCustomPadding:true},
c('React').createElement(c('Layout.react'),null,
c('React').createElement(m,{className:"_5s0e"},
c('React').createElement('div',{className:"_2ph_"},
c('React').createElement(c('SearchableTextInput.react'),
{className:"_5s0f autofocus",

onChange:this.$MessagingForwardAttachmentDialog_onSearchChange,
onEntriesFound:this.$MessagingForwardAttachmentDialog_onSearchEntriesFound,
placeholder:t,
queryString:this.state.query,
searchSource:this.$MessagingForwardAttachmentDialog_dataSource,
searchSourceOptions:
{onQueryFinished:this.$MessagingForwardAttachmentDialog_onSearchFinished}})),



c('React').createElement(c('ScrollableArea.react'),
{className:"_5s0g",
height:400,
width:360},
c('React').createElement(c('MessagingRecipientTypeaheadView.react'),
{entries:this.state.query?
this.state.entries:
this.state.bootstrappedEntries,
loading:this.state.loading,
selectedEntries:this.state.selectedEntries,
onSelect:this.$MessagingForwardAttachmentDialog_onSelectEntry}))),



c('React').createElement(n,
{className:"_5s0h"},
c('React').createElement(c('ScrollableArea.react'),
{height:457,
shadow:false},
c('React').createElement(c('MessagingRecipientSelectedList.react'),
{entries:this.state.selectedEntries,
onSelect:this.$MessagingForwardAttachmentDialog_onSelectEntry}))))),





c('React').createElement(c('XUIDialogFooter.react'),{leftContent:r},
c('React').createElement(c('XUIDialogCancelButton.react'),
{onClick:this.props.onClose}),

c('React').createElement(c('XUIDialogButton.react'),
{use:'confirm',
disabled:!this.state.selectedEntries.size||this.state.sending,
label:q,
onClick:this.$MessagingForwardAttachmentDialog_onSubmit}))));};




p.propTypes={attachmentID:o.string.isRequired,messageID:o.string,onClose:o.func,shown:o.bool.isRequired,title:o.string.isRequired,shareType:o.string};p.defaultProps={shareType:c('MessageShareType').IMAGE};


f.exports=p;}),null);

/** js/p2p/components/send_money/P2PBigAmount.react.js */







__d('P2PBigAmount.react',['cx','ix','MessengerEnvironment','Image.react','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,








l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.
















getImage=function(){
if(this.isMessengerDotCom()){
if(this.props.isPending){
if(this.props.size==='large'){
return i("94389");}else 

return i("94388");}else

if(this.props.size==='large'){
return i("94393");}else 

return i("94387");}else 


if(this.props.isPending){
if(this.props.size==='large'){
return i("94392");}else 

return i("94391");}else

if(this.props.size==='large'){
return i("94390");}else 

return i("94394");}.


bind(this),this.

isMessengerDotCom=function(){
return c('MessengerEnvironment').messengerui;},
o;}m.prototype.

render=function(){
var n=
this.props.size==='large'?
'24':
'16';


return (c('React').createElement('div',
{className:"_8j6"+

(this.isMessengerDotCom()?' '+"_8j7":'')+
(this.props.size==='large'?' '+"_1fv":'')},

c('React').createElement('div',{className:"_8j8"},
c('React').createElement(c('Image.react'),
{height:n,
src:this.getImage(),
width:n})),

c('React').createElement('div',
{className:"_8jc"+

(this.props.isPending?' '+"_8jd":'')+

(this.props.amount.length>=8?' '+"_8je":'')+(' '+"_3oh-")},


this.props.amount)));};



m.propTypes={amount:l.string.isRequired,isPending:l.bool,size:l.oneOf(['medium','large'])};m.defaultProps={size:'medium'};


f.exports=m;}),null);

/** shared/react_contrib/createReactClass_DEPRECATED.js */









__d('createReactClass_DEPRECATED',['invariant','React','emptyObject','warning'],(function a(b,c,d,e,f,g,h){

'use strict';









var i='mixins';



function j(ea){
return ea;}


var k;







k={};


var l=c('React').Component,
m=c('React').isValidElement,

n=new l().updater,






o=[],























p=







{mixins:'DEFINE_MANY',








statics:'DEFINE_MANY',







propTypes:'DEFINE_MANY',







contextTypes:'DEFINE_MANY',







childContextTypes:'DEFINE_MANY',













getDefaultProps:'DEFINE_MANY_MERGED',















getInitialState:'DEFINE_MANY_MERGED',





getChildContext:'DEFINE_MANY_MERGED',

















render:'DEFINE_ONCE',










componentWillMount:'DEFINE_MANY',











componentDidMount:'DEFINE_MANY',




















componentWillReceiveProps:'DEFINE_MANY',





















shouldComponentUpdate:'DEFINE_ONCE',
















componentWillUpdate:'DEFINE_MANY',













componentDidUpdate:'DEFINE_MANY',












componentWillUnmount:'DEFINE_MANY',













updateComponent:'OVERRIDE_BASE'},












q=
{displayName:function ea(fa,ga){
fa.displayName=ga;},

mixins:function ea(fa,ga){
if(ga)
for(var ha=0;ha<ga.length;ha++)
t(fa,ga[ha]);},



childContextTypes:function ea(fa,ga){



fa.childContextTypes=Object.assign
({},
fa.childContextTypes,
ga);},


contextTypes:function ea(fa,ga){



fa.contextTypes=Object.assign
({},
fa.contextTypes,
ga);},






getDefaultProps:function ea(fa,ga){
if(fa.getDefaultProps){
fa.getDefaultProps=w
(fa.getDefaultProps,
ga);}else 


fa.getDefaultProps=ga;},


propTypes:function ea(fa,ga){



fa.propTypes=Object.assign({},fa.propTypes,ga);},

statics:function ea(fa,ga){
u(fa,ga);},

autobind:function ea(){}};

function r(ea,fa,ga){
for(var ha in fa)
if(Object.prototype.hasOwnProperty.call(fa,ha))


warning
(typeof fa[ha]==='function',
'%s: %s type `%s` is invalid; it must be a function, usually from '+
'React.PropTypes.',
ea.displayName||'ReactClass',
k[ga],
ha);}





function s(ea,fa){
var ga=Object.prototype.hasOwnProperty.call(p,fa)?
p[fa]:
null;


if(Object.prototype.hasOwnProperty.call(ba,fa))

ga==='OVERRIDE_BASE'||h(0,
'ReactClassInterface: You are attempting to override '+
'`%s` from your class specification. Ensure that your method names '+
'do not overlap with React methods.',
fa);




if(ea)

ga==='DEFINE_MANY'||
ga==='DEFINE_MANY_MERGED'||h(0,
'ReactClassInterface: You are attempting to define '+
'`%s` on your component more than once. This conflict may be due '+
'to a mixin.',
fa);}








function t(ea,fa){
if(!fa)















return;



typeof fa!=='function'||h(0,
'ReactClass: You\'re attempting to '+
'use a component class or function as a mixin. Instead, just use a '+
'regular object.');


!m(fa)||h(0,
'ReactClass: You\'re attempting to '+
'use a component as a mixin. Instead, just use a regular object.');


var ga=ea.prototype,
ha=ga.__reactAutoBindPairs;




if(Object.prototype.hasOwnProperty.call(fa,i))
q.mixins(ea,fa.mixins);


for(var ia in fa){
if(!Object.prototype.hasOwnProperty.call(fa,ia))
continue;


if(ia===i)

continue;


var ja=fa[ia],
ka=Object.prototype.hasOwnProperty.call(ga,ia);
s(ka,ia);

if(Object.prototype.hasOwnProperty.call(q,ia)){
q[ia](ea,ja);}else{





var la=Object.prototype.hasOwnProperty.call(p,ia),
ma=typeof ja==='function',
na=
ma&&
!la&&
!ka&&
fa.autobind!==false;

if(na){
ha.push(ia,ja);
ga[ia]=ja;}else 

if(ka){
var oa=p[ia];



la&&
(oa==='DEFINE_MANY_MERGED'||
oa==='DEFINE_MANY')||h(0,

'ReactClass: Unexpected spec policy %s for key %s '+
'when mixing in component specs.',
oa,
ia);




if(oa==='DEFINE_MANY_MERGED'){
ga[ia]=w(ga[ia],ja);}else
if(oa==='DEFINE_MANY')
ga[ia]=x(ga[ia],ja);}else 


ga[ia]=ja;}}}













function u(ea,fa){
if(!fa)
return;

for(var ga in fa){
var ha=fa[ga];
if(!Object.prototype.hasOwnProperty.call(fa,ga))
continue;


var ia=ga in q;

!ia||h(0,
'ReactClass: You are attempting to define a reserved '+
'property, `%s`, that shouldn\'t be on the "statics" key. Define it '+
'as an instance property instead; it will still be accessible on the '+
'constructor.',
ga);


var ja=ga in ea;

!ja||h(0,
'ReactClass: You are attempting to define '+
'`%s` on your component more than once. This conflict may be '+
'due to a mixin.',
ga);

ea[ga]=ha;}}










function v(ea,fa){

ea&&fa&&typeof ea==='object'&&typeof fa==='object'||h(0,
'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.');


for(var ga in fa)
if(Object.prototype.hasOwnProperty.call(fa,ga)){

ea[ga]===undefined||h(0,
'mergeIntoWithNoDuplicateKeys(): '+
'Tried to merge two objects with the same key: `%s`. This conflict '+
'may be due to a mixin; in particular, this may be caused by two '+
'getInitialState() or getDefaultProps() methods returning objects '+
'with clashing keys.',
ga);

ea[ga]=fa[ga];}


return ea;}










function w(ea,fa){
return function ga(){
var ha=ea.apply(this,arguments),
ia=fa.apply(this,arguments);
if(ha==null){
return ia;}else
if(ia==null)
return ha;

var ja={};
v(ja,ha);
v(ja,ia);
return ja;};}











function x(ea,fa){
return function ga(){
ea.apply(this,arguments);
fa.apply(this,arguments);};}










function y(ea,fa){
var ga=fa.bind(ea);


































return ga;}







function z(ea){
var fa=ea.__reactAutoBindPairs;
for(var ga=0;ga<fa.length;ga+=2){
var ha=fa[ga],
ia=fa[ga+1];
ea[ha]=y(ea,ia);}}



var aa=
{componentDidMount:function ea(){
this.__isMounted=true;},

componentWillUnmount:function ea(){
this.__isMounted=false;}},







ba=





{replaceState:function ea(fa,ga){
this.updater.enqueueReplaceState(this,fa,ga);},








isMounted:function ea(){












return !!this.__isMounted;}},



ca=function ea(){};
Object.assign
(ca.prototype,
l.prototype,
ba);










function da(ea){



var fa=j(function(ha,ia,ja){












if(this.__reactAutoBindPairs.length)
z(this);


this.props=ha;
this.context=ia;
this.refs=c('emptyObject');
this.updater=ja||n;

this.state=null;




var ka=this.getInitialState?this.getInitialState():null;









typeof ka==='object'&&!Array.isArray(ka)||h(0,
'%s.getInitialState(): must return an object or null',
fa.displayName||'ReactCompositeComponent');


this.state=ka;});

fa.prototype=new ca();
fa.prototype.constructor=fa;
fa.prototype.__reactAutoBindPairs=[];

o.forEach(t.bind(null,fa));

t(fa,aa);
t(fa,ea);


if(fa.getDefaultProps)
fa.defaultProps=fa.getDefaultProps();
















fa.prototype.render||h(0,
'createClass(...): Class specification must implement a `render` method.');




















for(var ga in p)
if(!fa.prototype[ga])
fa.prototype[ga]=null;



return fa;}


f.exports=da;}),null);
