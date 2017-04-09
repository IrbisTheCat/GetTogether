if (self.CavalryLogger) { CavalryLogger.start_js(["HAHsF"]); }

/** __static_js_modules__/mercurytimepassed.js */




__d("MercuryTimePassed",[],(function a(b,c,d,e,f,g){

f.exports={TODAY:0,WEEK_AGO:1,MONTH_AGO:2,CURRENT_YEAR:3,OTHER_YEAR:4};}),

null);

/** js/ads/units/neko/ItunesPluginLogging.js */




__d('ItunesPluginLogging',['Run','Bootloader'],(function a(b,c,d,e,f,g){



var h=

{logPluginData:function i(){
c('Run').onAfterLoad(function(){
var j=c('Bootloader');
j.loadModules
(["ItunesDetector","AsyncRequest"],
function(k,l){
new l().
setURI('/ajax/ads/media/log').
setData({status:k.hasItunes()}).
send();},
'ItunesPluginLogging');});}};




f.exports=h;}),null);

/** js/chat/ChatSearchSource.js */





__d('ChatSearchSource',['requireWeak','AbstractSearchSource','AsyncRequest','CurrentUser','MercuryConfig','MercuryParticipantTypes','SearchableEntry','SearchSourceCallbackManager','ShortProfiles','TokenizeUtil','debounce','emptyFunction','isValidUniqueID'],(function a(b,c,d,e,f,g){

'use strict';var h,i,







j=null;












c('requireWeak')('OrderedFriendsList',function(l){
j=l;});
h=babelHelpers.inherits




(k,c('AbstractSearchSource'));i=h&&h.prototype;



function k(l){
i.constructor.call(this);
this.$ChatSearchSource_callbackManager=new (c('SearchSourceCallbackManager'))
({parseFn:c('TokenizeUtil').parse,
matchFn:c('TokenizeUtil').isQueryMatch,
indexFn:l.indexFn});

this.$ChatSearchSource_queryRequests=l.queryRequests||[];
this.$ChatSearchSource_bootstrapped=false;
this.$ChatSearchSource_sendRequest=c('debounce')(this.$ChatSearchSource_sendRequest,100,this);}
k.prototype.




bootstrapImpl=function(l){
c('ShortProfiles').fetchAll().done(function(){
this.$ChatSearchSource_bootstrapped=true;
this.$ChatSearchSource_update();
l();}.
bind(this));};
k.prototype.






searchImpl=function(l,m,n){
var o=null,
p={},
q=n&&n.onQueryFinished,
r=n&&n.onQueryStarted;
r&&r(l);
var s=this.$ChatSearchSource_callbackManager.search
(l,
function(v){
if(!o){
o=v;
o.forEach
(function(w){return p[w.getUniqueID()]=true;});}else 


v.forEach(function(w){
var x=w.getUniqueID();
if(!p[x]){
o.push(w);
p[x]=true;}});



m(o,l);
if(l.length===1&&this.$ChatSearchSource_bootstrapped)
q&&q(l);}.

bind(this),
n);


if(!s||
!this.$ChatSearchSource_queryRequests||
!this.$ChatSearchSource_queryRequests.length||
l.length===0){
q&&q(l);
return;}


if(l.length===1){
if(this.$ChatSearchSource_bootstrapped)
q&&q(l);

return;}


var t=
{value:l,
existing_ids:o&&o.map
(function(v){return v.getUniqueID();}).
join(','),
limit:n&&n.threadLimit},


u=this.$ChatSearchSource_queryRequests.length;
this.$ChatSearchSource_queryRequests.forEach(function(v){
this.$ChatSearchSource_sendRequest(t,v,function(w){
this.$ChatSearchSource_addQueryResults
(this.$ChatSearchSource_normalizeEntries(this.$ChatSearchSource_normalizeResponse(w)).
filter(function(x){return !!x;}),
l);

u--;
if(u===0){
this.$ChatSearchSource_callbackManager.setQueryStringAsExhausted(l);
q&&q(l);}}.

bind(this));}.
bind(this),this);};
k.prototype.




getAllEntriesMap=function(){
return this.$ChatSearchSource_callbackManager.getAllEntries();};
k.prototype.

$ChatSearchSource_update=function(){
var l=c('ShortProfiles').getCachedProfileIDs(),
m=l.filter(function(o){
var p=c('ShortProfiles').getNow(o);

return (o==c('CurrentUser').getID()||
p.type===c('MercuryParticipantTypes').FRIEND||
p.type===c('MercuryParticipantTypes').PAGE&&
c('MercuryConfig').LinkedAgents&&
c('MercuryConfig').LinkedAgents.indexOf(o.toString())>-1);}),



n=m.map(this.$ChatSearchSource_packageFn);
if(n.length)
this.$ChatSearchSource_callbackManager.addLocalEntries(n);};

k.prototype.





$ChatSearchSource_normalizeEntries=function(l){
return l.map(this.$ChatSearchSource_normalize,this);};
k.prototype.






$ChatSearchSource_normalize=function(l,m){
if(l.mercury_thread){
if(!j)
return null;

return j.normalizeThreadEntry(l,m);}


var n=l.text,
o=l.uid;
if(!n||!c('isValidUniqueID')(o))
return null;

var p=j?j.getActiveRank(o):0;
if(j&&!j.contains(o))


p+=m;

return new (c('SearchableEntry'))
({uniqueID:o,
title:n,
order:p,
subtitle:l.subtext,
type:l.render_type||l.type,
photo:l.photo,
uri:l.path,
auxiliaryData:
{isMessengerUser:l.is_messenger_user,
alias:l.alias}});};


k.prototype.





$ChatSearchSource_normalizeResponse=function(l){
var m=l.getPayload();
if(Array.isArray(m)){
return m;}else
if(m&&m.entries){
return m.entries;}else 

return [];};

k.prototype.





$ChatSearchSource_packageFn=function(l){
var m=c('ShortProfiles').getNow(l),
n=l==c('CurrentUser').getID()?
c('MercuryParticipantTypes').FRIEND:
m.type,
o=[m.additionalName,m.alternateName].
concat(m.searchTokens||[]).
join(' '),

p=m.name,
q=null;
return new (c('SearchableEntry'))
({uniqueID:l,
title:p,
order:j?j.getActiveRank(l):0,
subtitle:q,
keywordString:o,
type:n,
photo:m.thumbSrc,
uri:m.uri,
auxiliaryData:
{isMessengerUser:m.is_messenger_user,
alias:m.alias}});};


k.prototype.







$ChatSearchSource_sendRequest=function(l,m,n,o){
new (c('AsyncRequest'))(m.uri).
setData(babelHelpers['extends']({},
l,
m.data)).

setMethod('GET').
setReadOnly(true).
setHandler(n).
setErrorHandler(o||c('emptyFunction')).
setAllowCrossPageTransition(true).
send();};
k.prototype.

$ChatSearchSource_addQueryResults=function(l,m){
if(l.length)
this.$ChatSearchSource_callbackManager.addQueryEntries(l,m);};

k.prototype.

addLocalEntries=function(l){
this.$ChatSearchSource_callbackManager.addLocalEntries(l);};
k.prototype.

refreshData=function(){
c('ShortProfiles').fetchAll();};



f.exports=k;}),null);

/** js/dock/Dock.js */





__d('Dock',['csx','Event','shield','Arbiter','ArbiterMixin','BlueBar','ChatQuietLinks','CSS','DataStore','DOM','Parent','Scroll','Style','Toggler','Vector','emptyFunction'],(function a(b,c,d,e,f,g,h){


























function i(){}

Object.assign(i,c('ArbiterMixin'),


{MIN_HEIGHT:140,


INITIAL_FLYOUT_HEIGHT_OFFSET:10,






init:function j(k){
this.init=c('emptyFunction');

this.rootEl=k;


this.calculateViewportDimensions();


c('ChatQuietLinks').removeEmptyHrefs(this.rootEl);


c('Event').listen(k,'click',this._onClick.bind(this));


c('Event').listen(window,'resize',this._onWindowResize.bind(this));


c('Toggler').subscribe(['show','hide'],function(l,m){
var n=m.getActive();
if(!c('DOM').contains(k,n))
return;


if(c('CSS').hasClass(n,'fbNub')){

this.notifyNub(n,l);
if(l==='show')
this._resizeNubFlyout(n);}else{



var o=c('Parent').byClass(n,'fbNubFlyout');
if(o)
c('CSS').conditionClass(o,'menuOpened',l==='show');}}.


bind(this));

this.inform('init',{},c('Arbiter').BEHAVIOR_PERSISTENT);},





calculateViewportDimensions:function j(){
return this.viewportDimensions=c('Vector').getViewportDimensions();},






getFlyoutHeightOffset:function j(){
if(this.flyoutHeightOffset)
return this.flyoutHeightOffset;



this.flyoutHeightOffset=
this.INITIAL_FLYOUT_HEIGHT_OFFSET+
c('Vector').getElementDimensions(this.rootEl).y;

var k=c('BlueBar').getBar();
if(k){
var l=c('Style').isFixed(k)?'viewport':'document';
this.flyoutHeightOffset+=
c('Vector').getElementPosition(k,l).y+
c('Vector').getElementDimensions(k).y;}

return this.flyoutHeightOffset;},







toggle:function j(k){

var l=this._findFlyout(k);
if(!l)
return;



this.subscribe('init',function(){
c('Toggler').toggle(k);});},








show:function j(k){
this.subscribe('init',function(){
c('Toggler').show(k);});},








showNub:function j(k){
c('CSS').show(k);},







hide:function j(k){
this.subscribe('init',function(){


var l=c('Toggler').getInstance(k);
c('DOM').contains(k,l.getActive())&&l.hide();});},








hideNub:function j(k){
c('CSS').hide(k);


this.hide(k);},







setUseMaxHeight:function j(k,l){
c('CSS').conditionClass(k,'maxHeight',l!==false);
this._resizeNubFlyout(k);},










_resizeNubFlyout:function j(k){
var l=this._findFlyout(k);
if(!l||
c('CSS').hasClass(k,'placeholder')||
!(c('CSS').hasClass(k,'openToggler')||c('CSS').hasClass(k,'opened')))
return;








var m=c('DOM').find(l,'div.fbNubFlyoutOuter'),

n=c('DOM').find(m,'div.fbNubFlyoutInner'),

o=c('DOM').find(n,'div.fbNubFlyoutBody'),


p=c('Scroll').getTop(o),
q=o.offsetHeight;


c('Style').set(o,'height','auto');


var r=c('Vector').getElementDimensions(l),
s=c('Vector').getElementDimensions(o),


t=this.getMaxFlyoutHeight(k);
c('Style').set(l,'max-height',t+'px');
c('Style').set(m,'max-height',t+'px');


r=c('Vector').getElementDimensions(l);


var u=c('Vector').getElementDimensions(n),
v=u.y-s.y,


w=r.y-v,
x=parseInt(o.style.height||o.clientHeight,10),
y=w!==x;
if(r.y>v&&y)
c('Style').set(o,'height',w+'px');










c('CSS').removeClass(l,'swapDirection');
var z=c('Vector').getElementPosition(l).x;
c('CSS').conditionClass(l,'swapDirection',function(){
if(z<0)
return true;

if(!r||!this.viewportDimensions)
return false;

return z+r.x>this.viewportDimensions.x;}.
bind(this)());



if(y&&p+q>=s.y){
c('Scroll').setTop(o,o.scrollHeight);}else 

c('Scroll').setTop(o,p);


this.notifyNub(k,'resize');},


getMaxFlyoutHeight:function j(k){
var l=this._findFlyout(k),

m=c('Vector').getElementPosition(l,'viewport'),
n=c('Vector').getElementDimensions(l);

if(!this.viewportDimensions||!m)
return 0;


var o=Math.max
(this.MIN_HEIGHT,
this.viewportDimensions.y-this.getFlyoutHeightOffset())-
(this.viewportDimensions.y-m.y-n.y);




return Math.max(o,0);},





resizeAllFlyouts:function j(){
var k=this._getAllNubs(),
l=k.length;
while(l--)
this._resizeNubFlyout(k[l]);},



hideAllFlyouts:function j(){
var k=this._getAllNubs(),
l=k.length;
while(l--)
this.hide(k[l]);},



_getAllNubs:function j(){
var k=c('DOM').scry(this.rootEl,"div._50-v.openToggler");
return k.concat(c('DOM').scry(this.rootEl,"div._50-v.opened"));},







_onClick:function j(event){
var k=event.getTarget(),
l=c('Parent').byClass(k,'fbNub');

if(l){
if(c('Parent').byClass(k,'fbNubFlyoutTitlebar')){
var m=c('Parent').byTag(k,'a'),
n=k.nodeName=='INPUT'&&
k.getAttribute('type')=='submit';

if(!m&&!n){

this.hide(l);
return false;}}



this.notifyNub(l,'click');}},








_onWindowResize:function j(event){

this.calculateViewportDimensions();
this.resizeAllFlyouts();},









_findFlyout:function j(k){
return c('CSS').hasClass(k,'fbNubFlyout')?
k:
c('DOM').scry(k,'div.fbNubFlyout')[0]||null;},








registerNubController:function j(k,l){
c('DataStore').set(k,'dock:nub:controller',l);


l.subscribe
('nub/button/content-changed',
c('shield')(this.inform,this,'resize',k));


l.subscribe
('nub/flyout/content-changed',
c('shield')(this._resizeNubFlyout,this,k));},







unregisterNubController:function j(k){
c('DataStore').remove(k,'dock:nub:controller');},










notifyNub:function j(k,l,m){
var n=c('DataStore').get(k,'dock:nub:controller');
n&&n.inform(l,m);}});



f.exports=b.Dock||i;}),null);

/** js/mercury/clients/fanta/FantaTabMainPlaceholder.react.js */






__d('FantaTabMainPlaceholder.react',['cx','React','XUISpinner.react'],(function a(b,c,d,e,f,g,h){

'use strict';






var i=function j(){

return (c('React').createElement('div',{className:"_59v1"},
c('React').createElement('div',{className:"_5qi9"+(' '+"_5qib")},



c('React').createElement('div',
{className:"_3_9e"+(' '+"_s0f")+(' '+"_50mz")+(' '+"_50m_")+(' '+"fbNub")+(' '+"_50-v")+(' '+"opened")+(' '+"_27_3")},









c('React').createElement('div',
{className:'fbNubFlyout fbDockChatTabFlyout uiContextualLayerParent'},



c('React').createElement('div',{className:'fbNubFlyoutOuter'},
c('React').createElement('div',{className:'fbNubFlyoutInner'},
c('React').createElement('div',{className:"_5-kq"},
c('React').createElement(c('XUISpinner.react'),null)))))))));};










f.exports=i;}),null);

/** shared/core/SoundPlayer.js */










__d('SoundPlayer',['URI','createArrayFromMixed','Map'],(function a(b,c,d,e,f,g){

'use strict';






var h=new (c('Map'))();

function i(l){
var m=new (c('URI'))(l);
return m.getDomain()?
l:
new (c('URI'))(window.location.href).setPath(m.getPath()).toString();}


function j(l){
var m=new (c('URI'))(l).getPath();
if(/\.mp3$/.test(m))
return 'audio/mpeg';

if(/\.og[ga]$/.test(m))
return 'audio/ogg';

return '';}


var k=



{preload:function l(m){
for(var n=c('createArrayFromMixed')(m),o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var q;if(o){if(p>=n.length)break;q=n[p++];}else{p=n.next();if(p.done)break;q=p.value;}var r=q;
if(h.has(r))
return;


var s=document.createElement('audio');

if(!s||
!s.canPlayType||
!s.canPlayType(j(r)))

continue;


s.preload='auto';
s.src=i(r);

document.body&&document.body.appendChild(s);
h.set(r,s);
return;}},





























play:function l(m){var n=arguments.length<=1||arguments[1]===undefined?false:arguments[1];
for(var o=c('createArrayFromMixed')(m),p=Array.isArray(o),q=0,o=p?o:o[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var r;if(p){if(q>=o.length)break;r=o[q++];}else{q=o.next();if(q.done)break;r=q.value;}var s=r;
if(!h.has(s))
k.preload(s);


var t=h.get(s);
if(!t)
continue;


if(n)
t.setAttribute('loop','');

t.play();
return;}},



pause:function l(m){
for(var n=c('createArrayFromMixed')(m),o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var q;if(o){if(p>=n.length)break;q=n[p++];}else{p=n.next();if(p.done)break;q=p.value;}var r=q,
s=h.get(r);
if(s){
s.pause();
return;}}},





stop:function l(m){
for(var n=c('createArrayFromMixed')(m),o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var q;if(o){if(p>=n.length)break;q=n[p++];}else{p=n.next();if(p.done)break;q=p.value;}var r=q,
s=h.get(r);
if(s){
s.pause();
s.removeAttribute('src');
s.src=i(r);
return;}}}};





f.exports=k;}),null);

/** shared/mercury/utils/MercuryTimestamp.js */






__d('MercuryTimestamp',['fbt','formatDate','MercuryTimePassed'],(function a(b,c,d,e,f,g,h){





var i=86400000,
j=6*i,






k=

{getFormatedTimestamp:function l(m){
var n=m/1000;
return k.getFormattedTimestampByBucket
(n,
this.getTimeBucket(m));},



getAbsoluteTimestamp:function l(m){
if(m==null){
return null;}else{

var n=k.getFormatedTimestamp(m);
return n.absolute;}},



getRelativeTimestamp:function l(m){
var n=k.getFormatedTimestamp(m);
return n.relative;},


getFormattedTimestampByBucket:function l
(m,
n){

switch(n){
case c('MercuryTimePassed').TODAY:




return {absolute:h._(["Today","5552ffe62e13128f973c726283b58fe1"]),
relative:c('formatDate')(m,'g:ia')};

case c('MercuryTimePassed').WEEK_AGO:




return {absolute:c('formatDate')(m,'l'),
relative:c('formatDate')(m,'D')};

case c('MercuryTimePassed').CURRENT_YEAR:




return {absolute:c('formatDate')(m,'F j'),
relative:c('formatDate')(m,'M j')};






default:return {absolute:c('formatDate')(m,'F j, Y'),
relative:c('formatDate')(m,'n/j/y')};}},




getTimeBucket:function l(m){
var n=new Date(m),
o=new Date(),
p=new Date
(o.getFullYear(),
o.getMonth(),
o.getDate());

if(p<n){

return c('MercuryTimePassed').TODAY;}else
if(p-j<n){




return c('MercuryTimePassed').WEEK_AGO;}else
if(p.getFullYear()===n.getFullYear()){

return c('MercuryTimePassed').CURRENT_YEAR;}else 


return c('MercuryTimePassed').OTHER_YEAR;},



getPreciseTimestamp:function l(m){
return c('formatDate')
(new Date(m),
k.getPreciseFormat(m));},



getPreciseFormat:function l(m){
var n=k.getTimeBucket(m);
switch(n){
case c('MercuryTimePassed').TODAY:
return 'g:ia';
case c('MercuryTimePassed').WEEK_AGO:
return 'l g:ia';
case c('MercuryTimePassed').CURRENT_YEAR:
return 'F jS, g:ia';
case c('MercuryTimePassed').OTHER_YEAR:


default:return 'F j, Y g:i a';}}};




f.exports=k;}),null);

/** js/modules/SoundSynchronizer.js */







__d('SoundSynchronizer',['SoundPlayer','WebStorage','createArrayFromMixed'],(function a(b,c,d,e,f,g){






var h='fb_sounds_playing3';




function i(){
var m=c('WebStorage').getLocalStorage();
if(m)

try{var o=m[h];
if(o){
o=JSON.parse(o);
if(Array.isArray(o))
return o;}}catch(


n){}


return [];}


function j(m){
var n=c('WebStorage').getLocalStorage();
if(n){
var o=i();
o.push(m);
while(o.length>5)
o.shift();



try{n[h]=JSON.stringify(o);}catch(
p){}}}



function k(m){
return i().some
(function(n){return n===m;});}



var l=





{play:function m(n,o,p){
n=c('createArrayFromMixed')(n);

o=o||n[0]+Math.floor(Date.now()/1000);

if(k(o))
return;


c('SoundPlayer').play(n,p);

j(o);},





isSupported:function m(){
return !!c('WebStorage').getLocalStorage();}};




f.exports=l;}),null);

/** js/modules/SoundRPC.js */







__d('SoundRPC',['Event','FBJSON','SoundSynchronizer'],(function a(b,c,d,e,f,g){





function h(j,k,l){
c('SoundSynchronizer').play(j,k,l);}


var i=

{playLocal:h,

playRemote:function j(k,l,m,n){
var o=
{name:'SoundRPC',
data:
{paths:l,
sync:m,
loop:n}};


k.postMessage(c('FBJSON').stringify(o),'*');},


supportsRPC:function j(){
return !!window.postMessage;},







_listen:function j(){
c('Event').listen(window,'message',function(k){
if(!/\.facebook.com$/.test(k.origin))
return;


var l={};

try{l=c('FBJSON').parse(k.data);}catch(
m){


}
if(l.name==='SoundRPC')
h(l.data.paths,l.data.sync,l.data.loop);});}};






f.exports=i;}),null);

/** js/modules/Sound.js */




__d('Sound',['SoundInitialData','SoundPlayer','SoundRPC','SoundSynchronizer','URI','UserAgent_DEPRECATED','Visibility','isFacebookURI'],(function a(b,c,d,e,f,g){





















var h=null,
i=false,

j=


{init:function n(o){
},

play:function n(o,p,q){
if(h){


c('SoundRPC').playRemote(h.contentWindow,o,p,false);}else 

c('SoundRPC').playLocal(o,p,q);


i=true;},



hasPlayedSoundBefore:function n(){
return i;},


playOnlyIfImmediate:function n(o,p,q){





if(!i&&c('Visibility').isHidden())
return;


this.play(o,p,q);},


stop:function n(o){

if(!h)
c('SoundPlayer').stop(o);}},





k=new (c('URI'))(location.href);

if(k.getSubdomain()&&k.getSubdomain()!=='www')
k.setSubdomain('www');


var l=k.getDomain();

function m(){
if(c('UserAgent_DEPRECATED').ie()<9)

return false;


if(c('SoundInitialData').RPC_DISABLED)
return false;



return c('SoundSynchronizer').isSupported()&&c('SoundRPC').supportsRPC();}


if(c('isFacebookURI')(k)&&location.host!==l&&m()){

h=document.createElement('iframe');
h.setAttribute('src','//'+l+'/sound_iframe.php');
h.style.display='none';
document.body.appendChild(h);}


f.exports=j;}),null);

/** js/mercury/clients/fanta/FantaTabsSlimApp.js */







__d('FantaTabsSlimApp',['Bootloader','BootloadOnRender.react','ChatPerfInstrumentation','FantaTabMainPlaceholder.react','FantaTabsAppBase','JSResource','LazyComponent.react','MercuryConfig','React','ReactDOM','ifRequired','setImmediate'],(function a(b,c,d,e,f,g){

'use strict';var h,i,















j=void 0;h=babelHelpers.inherits

(k,c('FantaTabsAppBase'));i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.


$FantaTabsSlimApp_isPumpedUp=false,this.










































































































































































$FantaTabsSlimApp_handleReceiveMessage=function(q,r){
if(this.$FantaTabsSlimApp_isPumpedUp){
c('ifRequired')('FantaMessageActions',function(s){
s.receivedNewMessage(q,r);});}else 


this.$FantaTabsSlimApp_bootloadAppStore(function(){
c('ifRequired')('FantaMessageActions',function(s){
s.receivedNewMessage(q,r);});});}.



bind(this),m;}k.prototype.getPumpedUp=function(l){if(this.$FantaTabsSlimApp_isPumpedUp){l();}else this.$FantaTabsSlimApp_bootloadAppStore(l);};k.prototype.getViewComponent=function(){if(c('MercuryConfig').FantaTabView){return c('React').createElement(c('BootloadOnRender.react'),{component:c('React').createElement(c('LazyComponent.react'),{loadDataOnMount:false}),loader:c('JSResource')('FantaMercuryTabsWithMain.react').__setRef('FantaTabsSlimApp'),placeholder:c('React').createElement(c('FantaTabMainPlaceholder.react'),null)});}else return c('React').createElement(c('BootloadOnRender.react'),{component:c('React').createElement(c('LazyComponent.react'),{loadDataOnMount:false}),loader:c('JSResource')('FantaMercuryTabs.react').__setRef('FantaTabsSlimApp'),placeholder:c('React').createElement('div',null)});};k.prototype.initializeFantaData=function(l){e(['FantaCookieUtil','MercuryServerPayloadPreprocessor','MercuryThreadInformer','PresenceState'],function(m,n,o,p){p.registerStateLoader(function(q){var r,s=this;if(this.$FantaTabsSlimApp_isPumpedUp){c('ifRequired')('FantaTabActions',function(t){c('ifRequired')('FantaAppStore',function(u){t.loadFromData(m.convertCookieData(q,u.getState().tabGroup));});});}else (function(){var t=m.convertCookieData(q);if(t.tabs.length>0)s.$FantaTabsSlimApp_bootloadAppStore(function(){c('ifRequired')('FantaTabActions',function(u){u.loadFromData(t);});});})();}.bind(this));p.doSync();n.get().handleUpdate(l);if(c('MercuryConfig').FantaTabView)o.get().subscribe('threads-updated',function(q,r){c('ifRequired')('FantaGetMessageActions',function(s){Object.keys(r).forEach(function(t){c('setImmediate')(function(){s.refreshThread(t);});});});});c('ChatPerfInstrumentation').logInitData();}.bind(this));};k.prototype.$FantaTabsSlimApp_bootloadAppStore=function(l){c('ifRequired')('FantaAppStore',function(m){l();},function(){c('Bootloader').loadModules(["FantaAppStore","FantaCookieUtil","FantaMessageActions","FantaTabActions","FantaTabViewportManager","PresenceState"],function(m,n,o,p,q,r){r.registerStateStorer(function(s){var t=m.getState().tabGroup;if(!j||j&&!j.equals(t)){j=t;return n.createCookieData(t,s);}else return s;});m.addListener(function(){return r.doSync();});c('ReactDOM').render(this.getViewComponent(),this.tabsElem);q.init(this.tabsElem);this.$FantaTabsSlimApp_isPumpedUp=true;l();}.bind(this),'FantaTabsSlimApp');}.bind(this));};k.prototype.initializeFantaUI=function(){e(['FantaMercuryThreadEventsBootloaded','FantaMessageActions','FantaTabActions','FantaTabViewportManager','FBRTCMessageHandler','MercuryBrowserAlerts'],function(l,m,n,o,p,q){p.init();q.init();l.onMessagesReceived(this.$FantaTabsSlimApp_handleReceiveMessage);c('ChatPerfInstrumentation').logInitUI();c('ChatPerfInstrumentation').logDisplayDone();}.bind(this));};


f.exports=new k();}),null);

/** js/mercury/clients/messenger/MessengerTypeaheadUtils.js */







__d('MessengerTypeaheadUtils',['fbt','ix','immutable','MercuryConfig','MercuryTypeaheadConstants','MessengerEnvironment','ReactDOM','SearchableEntry','WorkModeConfig','mapObject'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,













k=c('immutable').OrderedMap,

l=500,
m=100,

n=
c('WorkModeConfig').is_work_user||c('MercuryConfig').CoworkersOverGroups?

[c('MercuryTypeaheadConstants').SEARCH_TYPE,
c('MercuryTypeaheadConstants').FRIEND_TYPE,
c('MercuryTypeaheadConstants').FB4C_TYPE,
c('MercuryTypeaheadConstants').THREAD_TYPE,
c('MercuryTypeaheadConstants').MEETING_ROOM_PAGE_TYPE,
c('MercuryTypeaheadConstants').INTERNAL_BOT_PAGE_TYPE,
c('MercuryTypeaheadConstants').PAGE_TYPE,
c('MercuryTypeaheadConstants').NON_FRIEND_TYPE,
c('MercuryTypeaheadConstants').GAME_TYPE]:


[c('MercuryTypeaheadConstants').SEARCH_TYPE,
c('MercuryTypeaheadConstants').FRIEND_TYPE,
c('MercuryTypeaheadConstants').THREAD_TYPE,
c('MercuryTypeaheadConstants').FB4C_TYPE,
c('MercuryTypeaheadConstants').MEETING_ROOM_PAGE_TYPE,
c('MercuryTypeaheadConstants').PAGE_TYPE,
c('MercuryTypeaheadConstants').NON_FRIEND_TYPE,
c('MercuryTypeaheadConstants').GAME_TYPE],

o=(j={},j[
c('MercuryTypeaheadConstants').SEARCH_TYPE]=
{header:''},j[

c('MercuryTypeaheadConstants').FRIEND_TYPE]=
{header:h._(["Contacts","dd39b26544bb249ded042981f68528a7"])},j[




c('MercuryTypeaheadConstants').FB4C_TYPE]=
{header:h._(["Co-workers","c8c47c7368ae47cadd5e6e18579d0866"])},j[




c('MercuryTypeaheadConstants').THREAD_TYPE]=
{header:h._(["Group Conversations","d6cd384a517e9df421cb12cb927b4940"])},j[




c('MercuryTypeaheadConstants').PAGE_TYPE]=
{header:h._(["Businesses","41d93db3ffeb21a0e1abfcaed389a87d"])},j[




c('MercuryTypeaheadConstants').MEETING_ROOM_PAGE_TYPE]=
{header:h._(["Meeting Rooms","16aad8b801e2e8d0a34b513defc2e64d"])},j[




c('MercuryTypeaheadConstants').INTERNAL_BOT_PAGE_TYPE]=
{header:h._(["Bots","41cb1221410ea4f594b3decc3407e592"])},j[




c('MercuryTypeaheadConstants').NON_FRIEND_TYPE]=
{header:h._(["More People","6c764c408b5cf7da30c39dc3ad6718f3"])},j.




game=
{header:h._(["Games","d852fddcb1c0ab03dcea25959d07ffcd"])},j),






p=



{sortEntries:function q
(r,
s){

var t=[],
u=[],
v=[],
w=[],
x=[],
y=[],
z=[],
aa=[],
ba=[];

r.forEach(function(ca){
switch(ca.getType()){
case c('MercuryTypeaheadConstants').FRIEND_TYPE:
u.push(ca);
break;
case c('MercuryTypeaheadConstants').FB4C_TYPE:
v.push(ca);
break;
case c('MercuryTypeaheadConstants').THREAD_TYPE:
w.push(ca);
break;
case c('MercuryTypeaheadConstants').PAGE_TYPE:
case c('MercuryTypeaheadConstants').COMMERCE_PAGE_TYPE:
y.push(ca);
break;
case c('MercuryTypeaheadConstants').NON_FRIEND_TYPE:
x.push(ca);
break;
case c('MercuryTypeaheadConstants').MEETING_ROOM_PAGE_TYPE:
z.push(ca);
break;
case c('MercuryTypeaheadConstants').INTERNAL_BOT_PAGE_TYPE:
aa.push(ca);
break;
case c('MercuryTypeaheadConstants').SEARCH_TYPE:
t.push(ca);
break;
case c('MercuryTypeaheadConstants').GAME_TYPE:
ba.push(ca);
break;}});



if(p._shouldHoistPages(s))
return t.concat
(y,
u,
v,
w,
z,
aa,
x,
ba);


return t.concat
(u,
v,
w,
z,
aa,
y,
x,
ba);},



sortEntriesWithoutPages:function q
(r){

var s=[],
t=[],
u=[],
v=[];

r.forEach(function(w){
switch(w.getType()){
case c('MercuryTypeaheadConstants').FRIEND_TYPE:
s.push(w);
break;
case c('MercuryTypeaheadConstants').FB4C_TYPE:
t.push(w);
break;
case c('MercuryTypeaheadConstants').THREAD_TYPE:
u.push(w);
break;
case c('MercuryTypeaheadConstants').NON_FRIEND_TYPE:
v.push(w);
break;}});



return s.concat
(t,
u,
v);},



sortEntriesWithoutGroupsOrViewer:function q
(r,
s){

var t=[],
u=[],
v=[];

r.forEach(function(w){
if(w.getUniqueID()===s)
return;

switch(w.getType()){
case c('MercuryTypeaheadConstants').FRIEND_TYPE:
t.push(w);
break;
case c('MercuryTypeaheadConstants').FB4C_TYPE:
u.push(w);
break;
case c('MercuryTypeaheadConstants').NON_FRIEND_TYPE:
v.push(w);
break;}});


return t.concat
(u,
v);},



getEntryOrder:function q
(r){

var s=arguments.length<=1||arguments[1]===undefined?n:arguments[1];
if(p._shouldHoistPages(r)){
s=[].concat(s);
s.splice(s.indexOf(c('MercuryTypeaheadConstants').PAGE_TYPE));
s.unshift(c('MercuryTypeaheadConstants').PAGE_TYPE);}

return s;},


orderEntries:function q
(r,
s){

var t=[];
this.getEntryOrder(s).

filter(function(u){return u!==c('MercuryTypeaheadConstants').SEARCH_TYPE;}).
concat(c('MercuryTypeaheadConstants').SEARCH_TYPE).
forEach(function(u){return t.push.apply(t,
r.filter(function(v){
return (this.areSectionsEqual
(v.getType(),
u));}.bind(this)));}.bind(this));



return t;},


buildSingleSection:function q
(r){

return k
([['',r]]);},



buildListSections:function q
(r,
s,
t){

if(!r.length)
return k();


t=this.getEntryOrder(s,t);

var u=c('mapObject')(o,function(v){return babelHelpers['extends']({},
v,
{entries:[]});});

u[c('MercuryTypeaheadConstants').COMMERCE_PAGE_TYPE]=
u[c('MercuryTypeaheadConstants').PAGE_TYPE];

r.forEach(function(v){
var w=v.getType();
if(u[w])
u[w].entries.push(v);});



return k
(t.
filter(function(v){return u[v].entries.length;}).
map(function(v){return [u[v].header,u[v].entries];}));},



buildCustomSection:function q
(r,
s){
var t;
return t={},t[r]=s,t;},


areSectionsEqual:function q(r,s){
if(r===c('MercuryTypeaheadConstants').COMMERCE_PAGE_TYPE)
return s===c('MercuryTypeaheadConstants').COMMERCE_PAGE_TYPE||
s===c('MercuryTypeaheadConstants').PAGE_TYPE;

return r===s;},









scrollEntryIntoView:function q(r,s){
var t=c('ReactDOM').findDOMNode(s),
u=s.getScrollTop(),
v=r.offsetTop-u,

w=t.offsetHeight-r.offsetHeight,
x=Math.abs(w-v);
if(v>=w&&
x<=m){
s.scrollToPosition
(u+v-w,
true,
{duration:l});}else

if(v<0&&
x<=w+m)
s.scrollToPosition
(u+v,
true,
{duration:l});},




getMessageSearchEntry:function q(r){
if(!c('MessengerEnvironment').messengerui||r.length<2)
return null;


return new (c('SearchableEntry'))
({uniqueID:'__special_search_entry__',
title:h._(["Search Messages for \"{queryString}\"","d2dfaa79742fbb3415dc815cd189b2ec"],[h.param


('queryString',
r)]),


photo:i("86924"),
type:c('MercuryTypeaheadConstants').SEARCH_TYPE});},



_shouldHoistPages:function q(r){
if(!r)
return false;


return !!(c('MercuryConfig').HoistAgentsKeywords&&
c('MercuryConfig').HoistAgentsKeywords.indexOf
(r.toLowerCase().trim())!==
-1);}};




f.exports=p;}),null);

/** js/mercury/clients/messenger/actions/MNCommerceActionTypes.js */






__d('MNCommerceActionTypes',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){

'use strict';



var h=c('keyMirrorRecursive')
({RECEIPT:
{LOADED:null,
LOAD_ERROR:null,
RELOAD:null},

SHIPMENT:
{LOADED:null,
LOAD_ERROR:null,
RELOAD:null},

DIALOG:
{SHOW:null,
HIDE:null},

RETAIL_ITEM:
{LOADED:null,
LOAD_ERROR:null,
RELOAD:null},

PROMOTION_STATE:
{LOADED:null,
LOAD_ERROR:null,
RELOAD:null},

TRANSACTION_INVOICE:
{LOADED:null,
LOAD_ERROR:null,
RELOAD:null},

BOT_REVIEW_STATE:
{LOADED:null,
LOAD_ERROR:null,
RELOAD:null}});



f.exports=h;}),null);

/** js/mercury/clients/messenger/components/core/MessengerSpinner.react.js */







__d('MessengerSpinner.react',['cx','fbt','ix','Image.react','React','joinClasses'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,









m=c('React').PropTypes,

n=
j("86853"),
o=
j("86857"),
p=
j("86854"),
q=24,
r=32;k=babelHelpers.inherits

(s,c('React').PureComponent);l=k&&k.prototype;s.prototype.





















render=function(){

return (c('React').createElement(c('Image.react'),
{'aria-label':i._(["Loading...","0007976d9b948d4ca9e57de7b555b2c5"]),



'aria-busy':true,
className:c('joinClasses')
(this.props.className,
"_3u55 _3qh2"),

height:this.props.size,
src:this.$MessengerSpinner_getSpinnerSrc(),
width:this.props.size}));};


s.prototype.

$MessengerSpinner_getSpinnerSrc=function(){
return this.props.size===q?
this.props.color==='blue'?n:o:
p;};
function s(){k.apply(this,arguments);}s.propTypes={color:m.oneOf(['blue','grey']),size:m.oneOf([q,r])};s.defaultProps={color:'blue',size:q};s.Sizes={LARGE:r,MEDIUM:q};


f.exports=s;}),null);

/** js/mercury/clients/messenger/stores/MNCommerceDialogStateStore.js */






__d('MNCommerceDialogStateStore',['FluxStore','MessengerDispatcher','MNCommerceActionTypes'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits





(j,c('FluxStore'));i=h&&h.prototype;



function j(){
i.constructor.call(this,c('MessengerDispatcher'));
this.$MNCommerceDialogStateStore_dialogContainer=null;
this.$MNCommerceDialogStateStore_state=null;}
j.prototype.

__onDispatch=function(k){
var l=k.type;
switch(l){
case c('MNCommerceActionTypes').DIALOG.SHOW:
this.$MNCommerceDialogStateStore_dialogContainer=k.dialogContainer;
this.$MNCommerceDialogStateStore_state=k.state;
this.__emitChange();
break;

case c('MNCommerceActionTypes').DIALOG.HIDE:
this.$MNCommerceDialogStateStore_dialogContainer=null;
this.$MNCommerceDialogStateStore_state=null;
this.__emitChange();
break;}};

j.prototype.

getDialogContainer=function(){
return this.$MNCommerceDialogStateStore_dialogContainer;};
j.prototype.

getState=function(){
return this.$MNCommerceDialogStateStore_state;};



f.exports=new j();}),null);

/** js/notifications/NotificationJewelReminderLoader.js */





__d('NotificationJewelReminderLoader',['JSResource'],(function a(b,c,d,e,f,g){



f.exports=

{init:function h(i){
c('JSResource')('NotificationJewelReminder').__setRef('NotificationJewelReminderLoader').load().done
(function(j){
new j(i);});}};}),


null);

/** shared/crisis/mixins/PureStoreBasedStateMixin.js */






__d('PureStoreBasedStateMixin',['invariant','StoreBasedStateMixinHelper','setImmediate'],(function a(b,c,d,e,f,g,h){

'use strict';











var i=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];

return {getInitialState:function m(){
return this.constructor.calculateState();},


componentWillMount:function m(){

this.constructor.calculateState||h(0,
'Implement a static calculateState() when using '+
'PureStoreBasedStateMixin');


this._recalculateStateID=null;
var n=function(){
if(this.isMounted())
this.setState(this.constructor.calculateState());

this._recalculateStateID=null;}.
bind(this);

this._mixin=new (c('StoreBasedStateMixinHelper'))(k);
this._mixin.subscribeCallback(function(){
if(this._recalculateStateID===null)
this._recalculateStateID=c('setImmediate')(n);}.

bind(this));},


componentWillUnmount:function m(){
this._mixin.release();
this._mixin=null;}};}.


bind(this);

f.exports=i;}),null);

/** shared/fbpayments/dispatchers/FBPaymentsDispatcher.js */





__d('FBPaymentsDispatcher',['ExplicitRegistrationReactDispatcher'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits



(j,c('ExplicitRegistrationReactDispatcher'));i=h&&h.prototype;
function j(k){
i.constructor.call(this,k);
this.dispatch=this.dispatch.bind(this);}



f.exports=new j({strict:false});}),null);

/** shared/fbpayments/dialog/FBPaymentsDialogActions.js */





__d('FBPaymentsDialogActions',['FBPaymentsDispatcher','keyMirror'],(function a(b,c,d,e,f,g){

'use strict';





var h=
{types:c('keyMirror')
({SHOW_DIALOG:null,
HIDE_DIALOG:null}),





showDialog:function i(j,k){
c('FBPaymentsDispatcher').dispatch
({type:h.types.SHOW_DIALOG,
data:
{dialogClass:j,
dialogProps:k}});},







hideDialog:function i(){
c('FBPaymentsDispatcher').dispatch
({type:h.types.HIDE_DIALOG,
data:{}});}};




f.exports=h;}),null);

/** shared/fbpayments/dialog/FBPaymentsDialogStore.js */





__d('FBPaymentsDialogStore',['FBPaymentsDialogActions','FBPaymentsDispatcher','FluxStore'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits















(j,c('FluxStore'));i=h&&h.prototype;


function j(){
i.constructor.call(this,c('FBPaymentsDispatcher'));
this.$FBPaymentsDialogStore_dialogState=
{dialogClass:null,
dialogProps:null};}

j.prototype.

__onDispatch=function(k){
var l=k.type,
m=k.data;

switch(l){
case c('FBPaymentsDialogActions').types.SHOW_DIALOG:
this.$FBPaymentsDialogStore_dialogState=
{dialogClass:m.dialogClass,
dialogProps:m.dialogProps};

this.__emitChange();
break;
case c('FBPaymentsDialogActions').types.HIDE_DIALOG:
this.$FBPaymentsDialogStore_dialogState=
{dialogClass:null,
dialogProps:null};

this.__emitChange();
break;}};

j.prototype.

getState=function(){
return this.$FBPaymentsDialogStore_dialogState;};



f.exports=new j();}),null);

/** shared/fbpayments/dialog/FBPaymentsDialogContainer.react.js */





__d('FBPaymentsDialogContainer.react',['FBPaymentsDialogStore','FBPaymentsDispatcher','FluxContainer','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits














(j,c('React').Component);i=h&&h.prototype;j.


calculateState=function(){
return c('FBPaymentsDialogStore').getState();};
j.

getStores=function(){
return [c('FBPaymentsDialogStore')];};
j.prototype.

componentWillMount=function(){
c('FBPaymentsDispatcher').explicitlyRegisterStore(c('FBPaymentsDialogStore'));};
j.prototype.

render=function(){
if(!this.state.dialogClass)
return null;


var k=this.state.dialogClass;
return c('React').createElement(k,babelHelpers['extends']({},this.state.dialogProps,{key:'dialog'}));};
function j(){h.apply(this,arguments);}


f.exports=c('FluxContainer').create(j);}),null);
