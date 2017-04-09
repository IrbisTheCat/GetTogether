if (self.CavalryLogger) { CavalryLogger.start_js(["Lo7eG"]); }

/** js/chat/BuddyListNubLoader.js */






__d('BuddyListNubLoader',['Arbiter','ChatOptions','ChatSidebarStore','KeyEventController','PresencePrivacy','JSResource','SidebarType','emptyFunction','ifRequired'],(function a(b,c,d,e,f,g){

'use strict';














function h(){
return c('ChatSidebarStore').isEnabled()&&
!c('ChatOptions').getSetting('hide_buddylist')&&
!c('ifRequired')('ChannelConnection',function(j){return j.disconnected();})&&
!c('PresencePrivacy').isUserOffline();}










function i
(j,
k,
l,
m){

this.$BuddyListNubLoader_root=j;
this.$BuddyListNubLoader_orderedList=k;
this.$BuddyListNubLoader_typeahead=l;
this.$BuddyListNubLoader_dropdown=m;
this.$BuddyListNubLoader_buddyList=null;



c('ifRequired')('ChatSidebar',c('emptyFunction'),function(){
if(h()){
this.show();}else 

this.load();}.

bind(this));

c('Arbiter').subscribe('chat/option-changed',function(n,o){
if(this.$BuddyListNubLoader_shouldHandleEvent())
if(o.name==='hide_buddylist'&&!o.value)
this.show();}.


bind(this));

c('KeyEventController').registerKey('q',function(event){


if(this.$BuddyListNubLoader_shouldHandleEvent()){
this.show();
event.prevent();}}.

bind(this));

c('ChatSidebarStore').addListener(function(){
if(c('ChatSidebarStore').getVisibleType()===c('SidebarType').BUDDYLIST)
if(h()){
this.show();}else 

this.load();}.


bind(this));
if(c('ChatSidebarStore').getVisibleType()===c('SidebarType').BUDDYLIST)
if(h()){
this.show();}else 

this.load();}


i.prototype.

load=function(){
if(!this.$BuddyListNubLoader_buddyListPromise){
this.$BuddyListNubLoader_buddyListPromise=c('JSResource')('BuddyListNub').__setRef('BuddyListNubLoader').load();
this.$BuddyListNubLoader_buddyListPromise.done(function(j){
this.$BuddyListNubLoader_buddyList=new j
(this.$BuddyListNubLoader_root,
this.$BuddyListNubLoader_orderedList,
this.$BuddyListNubLoader_typeahead,
this.$BuddyListNubLoader_dropdown);}.

bind(this));}

return this.$BuddyListNubLoader_buddyListPromise;};
i.prototype.

show=function(){
return this.load().then(function(j){

this.$BuddyListNubLoader_buddyList&&this.$BuddyListNubLoader_buddyList.onButtonClick();
this.$BuddyListNubLoader_buddyList&&this.$BuddyListNubLoader_buddyList.show();}.
bind(this));};
i.prototype.

$BuddyListNubLoader_shouldHandleEvent=function(){
return !this.$BuddyListNubLoader_buddyList&&!this.$BuddyListNubLoader_buddyListPromise;};



f.exports=i;}),null);

/** js/deprecated/dom-html.js */


__d('legacy:dom-html',['HTML'],(function a(b,c,d,e,f,g){

b.HTML=c('HTML');}),3);
