if (self.CavalryLogger) { CavalryLogger.start_js(["X4tvp"]); }

/** js/bugs/product_info/MessagingBugReportStateUtils.js */











__d('MessagingBugReportStateUtils',['ifRequired'],(function a(b,c,d,e,f,g){



var h='N/A',
i=function k(){return h;},

j=
{getStateSnapshot:function k(){
var l=false,
m=false;
c('ifRequired')('ChatSidebarVisibility',function(n){
l=n.isSidebarVisible();
m=n.isBuddyListVisible();});


return {channel_connection:c('ifRequired')
('ChannelConnection',
function(n){return !n.disconnected();},
i),

buddylist_visible:m,
sidebar_visible:l,
tab_id:c('ifRequired')
('ChannelClientID',
function(n){return n.getID();},
i),

channel_host:c('ifRequired')
('ChannelManager',
function(n){
return (n.getConfig('fullHost')+'.'+
n.getConfig('domain'));},
i)};}};





f.exports=j;}),null);

/** www/__virtual__/x/XGroupsInviteController.js */



__d("XGroupsInviteController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/a\/group\/user\/invite\/",{group_id:{type:"Int"},invite_response:{type:"Enum",enumType:1},invite_type:{type:"Enum",enumType:1},is_new_user:{type:"Bool",defaultValue:false},ref_source:{type:"String"},prevent_future_invites:{type:"Bool",defaultValue:false},target_id_for_ego_logging:{type:"Int"}});}),

null);

/** js/groups/browse/GroupBrowseActionOnInvite.js */





__d('GroupBrowseActionOnInvite',['cx','fbt','DOM','CSS','Event','DialogX','ToggleButton','Button','AsyncRequest','XGroupsInviteController'],(function a(b,c,d,e,f,g,h,i){











var j="_42fr",
k=i._(["Declined","d1564c5bfeb3428cbc9478566d8f2e0a"]),
l=i._(["Joined","9135fb66e5893693cb3b5d73154aafa6"]),
m=null,
n=null;o.prototype.


construct=function(){'use strict';};o.

registerDeclineButton=
function(p,
q,
r){
'use strict';
var s=c('DOM').find
(r.getRoot(),
'button.groupsInviteDeclineConfirmButton');

c('Event').listen(s,'click',function(){
c('DOM').remove(p);
c('DOM').setContent(q,k);
c('CSS').addClass(q,j);});};

o.


registerLeaveButton=
function(p,
q){
'use strict';
c('Event').listen(q,'click',function(){
m=p;
n=q;});};

o.


registerConfirmLeaveButton=
function(p){
'use strict';
var q=c('DOM').find
(p.getRoot(),
'button.groupsLeaveButton');

c('Event').listen(q,'click',function(){
c('DOM').remove(m);
c('DOM').setContent(n,k);
c('CSS').addClass(n,j);});};

o.


registerJoinButton=
function(p,
q,
r,
s,
t,
u){
'use strict';
p.subscribe('change',function(v,w){
if(p.isSelected()){
c('DOM').remove(q);
c('Button').setLabel(p.getRoot(),l);
c('Button').setEnabled(p.getRoot(),false);
var x=c('XGroupsInviteController').getURIBuilder().
setInt('group_id',r).
setEnum('invite_type',s).
setEnum('invite_response',t).
setString('ref_source',u).
getURI();
new (c('AsyncRequest'))(x).
setMethod('POST').
send();}});};


function o(){'use strict';}


f.exports=o;}),null);

/** js/ui/layer/dialog/DialogUtils.js */




__d('DialogUtils',['Event'],(function a(b,c,d,e,f,g){


var h=

{showDialogOnClickTruthyReturn:function i(j,k){
c('Event').listen(j,'click',function(){
k.show();
return true;});},




showDialogOnClick:function i(j,k){
c('Event').listen(j,'click',function(){
k.show();
return false;});}};




f.exports=h;}),null);

/** shared/service_worker_window/ServiceWorkerErrorUtils.js */





__d('ServiceWorkerErrorUtils',['Promise','ClientServiceWorkerMessage','ServiceWorkerRegistration'],(function a(b,c,d,e,f,g){




var h=
{getHistory:function i(){
if(!c('ServiceWorkerRegistration').isSupported())
return c('Promise').reject('serviceWorker or messageChannel not supported');


var j=false;
return new (c('Promise'))(function(k){
new (c('ClientServiceWorkerMessage'))
('errordump',
null,
function(event){
if(!j){
j=true;
k(event.data.data.history||[]);}}).


sendViaController();});}};




f.exports=h;}),null);
