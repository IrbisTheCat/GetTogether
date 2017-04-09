if (self.CavalryLogger) { CavalryLogger.start_js(["4DoUS"]); }

/** js/plugins/PluginMessengerToggle.js */






__d('PluginMessengerToggle',['csx','AsyncRequest','DOM','Event','MNCommerceLogger','MNCommercePluginType'],(function a(b,c,d,e,f,g,h){
'use strict';











var i=


{setupLink:function j
(k,
l,
m,
n){

c('MNCommerceLogger').logPluginLoaded
(l,
c('MNCommercePluginType').MESSENGER_TOGGLE,
n);

c('Event').listen(k,'click',function(){
this._turnOffCommerceUpdates(l,m,n);}.
bind(this));},


_turnOffCommerceUpdates:function j
(k,
l,
m){

var n=
{appID:k,
pageID:l,
userID:m};


new (c('AsyncRequest'))().
setURI('/plugins/messengeraccountconfirmation/not_you').
setData(n).
setMethod('POST').
setHandler(this._handleResponse).
send();},


_handleResponse:function j(k){
var l=k.payload&&k.payload.xhp;
if(!l)

return;


var m=c('DOM').find
(document.body,
"._rai");

c('DOM').replace(m,l);}};



f.exports=i;}),null);

/** www/__virtual__/x/XLiveVideoInviteFriendsController.js */



__d("XLiveVideoInviteFriendsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/live_video\/invite_friends\/",{friend_ids:{type:"FBIDVector"},video_id:{type:"FBID"}});}),

null);
