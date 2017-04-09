if (self.CavalryLogger) { CavalryLogger.start_js(["VTSgG"]); }

/** js/browse/BrowseEmptyResult.js */






__d('BrowseEmptyResult',['csx','$','DOMQuery','UIPagelet'],(function a(b,c,d,e,f,g,h){







var i=

{init:function j
(k,
l,
m){

var n=[],
o=false;
if(k===null)



return;


for(var p=0;p<k.length;p++){
var q=c('$')(k[p]);


if(k[p]==='initial_browse_result'){
var r=c('DOMQuery').scry
(q,
"._58b7");

if(r.length>0)
o=true;}



if(q!==null&&q.textContent)
n.push(k[p]);}




if(n.length===0&&!o){
k&&k.length===0;





c('UIPagelet').loadFromEndpoint
('BrowsePageletNoContentError',
l,
m,
{usePipe:false});}}};





f.exports=i;}),null);

/** js/browse/BrowseScrollingPager.js */





__d('BrowseScrollingPager',['Arbiter','CSS','DOM','OnVisible','SubscriptionsHandler','UIPagelet'],(function a(b,c,d,e,f,g){








var h=800,

i=[],
j,
k=0;










function l(m,n,o){'use strict';
this.loadingNode=m;
this.globalData=n;
this.visibleBuffer=o?o:h;

this.subscriptionsHandler=new (c('SubscriptionsHandler'))();


j&&this.pageletComplete(j);
j=null;}
l.prototype.

pageletComplete=function(m){'use strict';
this.pageData=m;
c('Arbiter').inform('BrowseScrollingPageletLoaded');


setTimeout(this.$BrowseScrollingPager_updateVisibleListener.bind(this),1000);};
l.prototype.

destroy=function(){'use strict';
if(this.pageletLoadHandler)
this.pageletLoadHandler.cancel();

this.loadingNode=null;

this.subscriptionsHandler.release();};
l.prototype.

$BrowseScrollingPager_updateVisibleListener=function(){'use strict';
if(!this.loadingNode){

return;}else
if(this.pageData){
c('CSS').show(this.loadingNode);

this.subscriptionsHandler.addSubscriptions
(new (c('OnVisible'))
(this.loadingNode,
this.$BrowseScrollingPager_loadNextContent.bind(this),
false,
this.visibleBuffer));}else 



c('CSS').hide(this.loadingNode);};

l.prototype.

$BrowseScrollingPager_genID=function(){'use strict';
return 'fbBrowseScrollingPagerContainer'+k++;};
l.prototype.

$BrowseScrollingPager_loadNextContent=function(){'use strict';
if(this.$BrowseScrollingPager_hasErrors)
return;


c('CSS').show(this.loadingNode.firstChild);


this.contentContainer=c('DOM').create('div',
{id:this.$BrowseScrollingPager_genID()});


c('DOM').insertBefore(this.loadingNode,this.contentContainer);

this.pageletLoadHandler=c('UIPagelet').loadFromEndpoint
('BrowseScrollingSetPagelet',
this.contentContainer.id,babelHelpers['extends']({},

this.globalData,
this.pageData),


{constHeight:true,
sid:this.globalData.typeahead_sid||0,
displayCallback:this.$BrowseScrollingPager_showLoadedContent.bind(this)});};


l.prototype.

$BrowseScrollingPager_showLoadedContent=function(m){'use strict';

try{m();}catch(
n){

this.$BrowseScrollingPager_hasErrors=true;}finally{

this.loadingNode&&c('CSS').hide(this.loadingNode.firstChild);}};




l.init=function(m,n,o){
var p=new l(m,n,o);
i.push(p);};


l.pageletComplete=function(m){
var n=i[i.length-1];

if(n){
n.pageletComplete.call(n,m);}else 




j=m;};



l.destroyAllPagers=function(){
i.forEach(function(m){
m.destroy();});

i=[];};


c('Arbiter').subscribe('BrowseScrollingPager/destroyIfNotLast',function(){

if(i.length>1){
var m=i.pop();
m.destroy();}});



f.exports=l;}),null);

/** js/browse/BrowseWindowTransitions.js */







__d('BrowseWindowTransitions',['Arbiter','Banzai','BrowseClientEventLogger','Event','NavigationMessage','Run','SubscriptionsHandler'],(function a(b,c,d,e,f,g){









var h=


{init:function i(j,k){
this.subscriptions=new (c('SubscriptionsHandler'))();
this.currentSessionID=j;
this.currentVertical=k;
this.logData('window_load');


c('Run').onLeave(function(){
this.logData('window_transition_to_fb_page');
this.cleanup();}.
bind(this));


if(!this.unLoadAttached){
this.unLoadAttached=true;
c('Run').onUnload(function(){
this.logData('window_unloaded');}.
bind(this));}

this.subscriptions.addSubscriptions
(c('Event').listen(window,'focus',function(){
this.logData('window_focus');}.
bind(this)),
c('Event').listen(window,'blur',function(){
this.logData('window_blur');}.
bind(this)),


c('Arbiter').subscribe('pre_page_transition',function(event,l){
this.logData('window_pre_page_transition');}.
bind(this)),

c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,function(event,l){
this.logData('window_transition_to_LHC');
this.cleanup();}.
bind(this)),

c('Arbiter').subscribe('BlueBar/homeClick',function(){
this.logData('window_transition_to_home_click');
this.cleanup();}.
bind(this)));},



logData:function i(event){
c('BrowseClientEventLogger').logData
(event,
this.currentSessionID,
this.currentVertical);},



cleanup:function i(){
this.subscriptions.release();}};




f.exports=h;}),null);

/** js/logging/tracking/DesktopVisibilityTracking.js */




__d('DesktopVisibilityTracking',['Arbiter','ErrorUtils','LitestandMessages','Run','VisibilityTracking','VisibilityTrackingConfig'],(function a(b,c,d,e,f,g){









var h=

{init:function i(){
if(h.instance===undefined){
h.instance=new (c('VisibilityTracking'))(c('VisibilityTrackingConfig'));
h.instance.listeners.addSubscriptions
(c('Arbiter').subscribe

([c('LitestandMessages').STORIES_INSERTED],

c('ErrorUtils').guard
(function(){
h.instance.refreshAndFireEvent();},

'VisibilityTracking')));}






c('Run').onLoad(function(){
h.instance.refreshAndFireEvent();});}};




f.exports=h;}),null);
