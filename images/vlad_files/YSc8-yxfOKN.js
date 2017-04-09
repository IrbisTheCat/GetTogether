if (self.CavalryLogger) { CavalryLogger.start_js(["BrR1+"]); }

/** js/home/TickerController.js */




__d('TickerController',['invariant','Arbiter','AsyncSignal','Bootloader','CSS','DOM','Parent','UIPagelet','Vector','$','emptyFunction','ge'],(function a(b,c,d,e,f,g,h){





















var i=1,
j=2,
k=3,
l=4,
m=15000,

n=null,
o={},

p={},

q=
{setActiveInstance:function r(s){
n=s;},


getActiveInstance:function r(){
return n;},


clearRHCplaceholder:function r(){
o.pagelet_rhc_ticker=null;},



registerInstance:function r(s,t){
s||h(0,'Ticker instance must have an ID');
p[s]=t;
q.setActiveInstance(t);},


getInstance:function r(s){
if(!s)
return null;

var t=c('Parent').byClass(c('$')(s),'fbFeedTicker');
return p[t.id]||null;},


isLoaded:function r(s){
var t=o[s.id];
return !t||t.status==k;},


show:function r(s,t){
t=t||c('emptyFunction');
for(var u in p){
var v=c('ge')(u);
if(!v||v.parentNode.id==s.id)
continue;

q.hide(v.parentNode);}


q._doPositionChange(s);
c('CSS').show(s);

var w=o[s.id];
if(w&&w.status==i){

var x=(c('Vector').getElementDimensions(s).y||0)>0,
y=s.id==='pagelet_rhc_ticker'&&
!c('CSS').hasClass(s,'hidden_rhc_ticker');
if(x||y){
var z=c('DOM').scry(s,'.tickerPlaceholderSpinner')[0];
z&&c('CSS').show(z);

q._fetchTickerForPlaceholder(s,t);}else 

c('Arbiter').subscribe
('Ticker/resized',
function(){
if(w.status==i)
q._fetchTickerForPlaceholder(s,t);});}else{





var aa=c('DOM').scry(s,'.fbFeedTicker')[0],
ba=q.getInstance(aa);
n=ba;
ba&&ba._poll();
o[s.id]=
{status:l,
callback:t};

t();}



c('Arbiter').inform('ticker/show',{node:s,callback:t});},


_doPositionChange:function r(s){
if(c('CSS').shown(s))
return;


new (c('AsyncSignal'))('/common/ods_endpoint.php',
{k:'ticker.render.switch.'+s.id}).
send();},


hide:function r(s){
var t=c('DOM').scry(s,'.fbFeedTicker')[0],
u=q.getInstance(t);
u&&u.hideActiveStory();
c('CSS').hide(s);},


hideStoriesByClass:function r(s){
for(var t in p)
c('DOM').scry(c('$')(t),s).forEach(c('CSS').hide);},




hideStory:function r(s){
var t=q.getInstance(s);
t&&t.hideStory(s);},



replaceStory:function r(s,t){
var u=c('DOM').scry(document.body,'div.fbFeedTickerStory'),
v=q.getInstance(u[0]);
if(!v)
return;


var w=v._findStoryById(s);


v.handleRemoveStory();

c('CSS').hide(w);
c('DOM').insertAfter(w,t);
t.setAttribute('data-story-id',w.getAttribute('id'));


var x=
setTimeout
(function(){return q.removeMarkup(t,w);},
m);

t.setAttribute('data-timeout-token',x);},


removeMarkup:function r(s,t){
c('Bootloader').loadModules(["Animation"],function(u){
c('CSS').addClass(s,'removedStoryMarkup');

new u(s).
to('height',0).
duration(500).
ondone(function(){c('DOM').remove(s);}).
go();},
'TickerController');},


undoHideStory:function r(s){
var t=q.getInstance(s);
t&&t.undoHideStory(s);},



insertStoriesAtBottom:function r(s){
n.insertStoriesAtBottom(s);},


_fetchTickerForPlaceholder:function r(s,t){
var u=
{handler:function v(){
o[s.id].status=k;
t();}};



c('UIPagelet').loadFromEndpoint
('TickerEntStoryPagelet',
s.id,
o[s.id].pageletData,
u);


o[s.id].status=j;},



registerStoryDialog:function r(s,t){


c('Arbiter').subscribe('ticker/init',function(){
var u=c('ge')(s),

v=q.getInstance(u);
v&&v.registerStoryDialog(u,t);},
c('Arbiter').SUBSCRIBE_ALL);},



registerPlaceholder:function r(s,t){
var u=o[s];
o[s]=
{status:i,
pageletData:t};





if(u&&u.status==l){
q.show(c('$')(s));
u.callback();}}};




f.exports=q;}),null);

/** js/home/TickerRightColumnController.js */





__d('TickerRightColumnController',['csx','cx','Arbiter','CSS','DOM','Event','NavigationMessage','Parent','Run','Style','SubscriptionsHandler','TickerController','Vector','ge','throttle'],(function a(b,c,d,e,f,g,h,i){

















var j;

function k(){
var p=c('ge')('pagelet_rhc_ticker');
p&&c('TickerController').show(p,m);}


function l(){
var p=c('ge')('pagelet_rhc_ticker');
p&&c('TickerController').hide(p);}


function m(){
var p=c('ge')('pagelet_rhc_ticker'),
q=c('DOM').scry(p,'.ticker_container')[0],
r=c('DOM').scry(p,'.ticker_stream')[0],
s=c('ge')('rightCol');

if(!p||!q||!r||!s)
return;




c('Style').set(q,'height','0');
var t=75,
u=c('Vector').getViewportDimensions().y,
v=c('Vector').getElementDimensions(s).y,
w=u-v-t,


x=c('Vector').getElementDimensions(r).y,

y=Math.max
(Math.min
(w,
x,
j.tickerMaxHeight||425),

j.tickerMinHeight||225);

c('Style').set(q,'height',y+'px');}


function n(p){
var q=c('ge')('pagelet_rhc_ticker'),
r=q&&c('Parent').bySelector(q,"._5zcc");
if(r)
c('CSS').conditionClass(r,"_5zcb",p);


q&&c('CSS').conditionClass(q,'hidden_rhc_ticker',!p);

if(p){
m();


var s=c('ge')('fbTickerClosedEd');
s&&c('CSS').hide(s);}}



var o=

{init:function p(q){
j=q;
var r=new (c('SubscriptionsHandler'))();


if(j.enableSidebar)
r.addSubscriptions
(c('Arbiter').subscribe('sidebar/visibility',function(t,u){
if(u){
l();}else 

k();}),


c('Arbiter').subscribe('minisidebar/show',k),
c('Arbiter').subscribe('LitestandClassicRHC/loaded',m),


c('Event').listen(window,'scroll',c('throttle')(function(){
var t=c('DOM').scry(c('ge')('pagelet_rhc_ticker'),'.fbFeedTicker')[0],
u=c('TickerController').getInstance(t);
u&&u.handleRemoveStory();})));



if(!c('CSS').hasClass(document.documentElement,'sidebarMode')){
k();}else
if(j.enableSidebar)
l();


var s=function t(){
r.release();};

c('Arbiter').subscribeOnce(c('NavigationMessage').NAVIGATION_BEGIN,s);
c('Run').onLeave(s);},



initRHCTickerHider:function p(q){
c('Event').listen(q,'click',this.hideRHCTicker);},



showRHCTicker:function p(){
n(true);},


hideRHCTicker:function p(){
n(false);}};



f.exports=o;}),null);
