if (self.CavalryLogger) { CavalryLogger.start_js(["TARHN"]); }

/** js/deprecated/UIControllerRegistry.js */


__d("legacy:UIControllerRegistry",[],(function a(b,c,d,e,f,g){

b.__UIControllerRegistry=b.__UIControllerRegistry||{};}),3);

/** js/search/SearchFunnelTypeaheadLogger.js */




__d('SearchFunnelTypeaheadLogger',['csx','Arbiter','Banzai','DOM','Event','PageEvents','PageTransitions','SubscriptionsHandler','URI'],(function a(b,c,d,e,f,g,h){












var i='search_funnel',
j=
{focus:'entrant',
render:'results_displayed',
keydown:'interaction',
select:'search'},

k,

l=

{init:function m(n,o){
if(!n||!o)
return;

this._isColdStart=true;

this._sampleRates=o;
this._core=n.getCore();
this._data=n.getData();
this._view=n.getView();
this._handler=new (c('SubscriptionsHandler'))();

this.log=this.log.bind(this);
this.onKeydown=this.onKeydown.bind(this);
this.onSelect=this.onSelect.bind(this);
this.onTypeaheadImpression=this.onTypeaheadImpression.bind(this);

this._transitionInProgress=true;
this.onTypeaheadImpression();},


onTypeaheadImpression:function m(n){
this._initTime=this._getInitTime();
this.e2eMarkers=[];

if(this._transitionInProgress&&c('DOM').scry
(document.body,
"._4d3w").
length===0)
this.log('impression',{funnel_path:c('URI').getNextURI().getPath()});


this.reset();

this._handler.addSubscriptions
(this._core.subscribeOnce('focus',this.log),
this._view.subscribeOnce('render',this.log),
this._view.subscribeOnce('select',this.onSelect));


c('Event').listen(this._core.getElement(),'keydown',this.onKeydown);






c('PageTransitions').registerHandler(function(){
this._transitionInProgress=true;}.
bind(this));
c('PageTransitions').registerCompletionCallback(this.onTypeaheadImpression);},


onKeydown:function m(event){
if(!this._sawKeydown){
this._sawKeydown=true;
this.log('keydown',event);}},



onSelect:function m(event,n){
n.funnel_data=
{selected_position:n.selected.globalIndex,
selected_type:n.selected.type};


if(n.selected.isNullState){
n.funnel_data.interaction_type='null_state';}else
if(n.selected.isSingleState){
n.funnel_data.interaction_type='single_state';}else 

n.funnel_data.interaction_type='typed';


this._endToEndPath=c('URI').getMostRecentURI().path;
k=null;
c('Arbiter').subscribe('BigPipe/init',function(event,o){
if(!o.arbiter)
return;

var p=
{arbiter:o.arbiter,
event:c('PageEvents').AJAXPIPE_ONLOAD,
markers:this.e2eMarkers,
init_time:this._initTime,
from_path:this._endToEndPath};}.

bind(this));

this.log(event,n);},


reset:function m(){
this._handler.release();
this._handler.engage();
this._sawKeydown=false;
this._transitionInProgress=false;},


log:function m(n,o){
if(j[n])
n=j[n];

this.e2eMarkers.push
({event:n,
time:String(Date.now()-this._initTime)});


if(!this._sampleRates[n])
return;


o=o||{};
o.funnel_data=o.funnel_data||{};
o.funnel_data.sample_rate=this._sampleRates[n];
o.funnel_data.current_event_time=Date.now();
if(this._prevTime&&this._prevEvt){
o.funnel_data.previous_event_time=this._prevTime;
o.funnel_data.previous_event=this._prevEvt;}


this._prevTime=o.funnel_data.current_event_time;
this._prevEvt=n;
c('Banzai').post
(i,

{funnel_data:o.funnel_data,
path:o.funnel_path||c('PageTransitions').getMostRecentURI().getPath(),
stage:n},

c('Banzai').VITAL);},



_getInitTime:function m(){
if(window.ExitTime)
return window.ExitTime;


var n=window.performance||window.msPerformance;
if(!n||!n.timing)
return;

return n.timing.navigationStart;}};



f.exports=l;}),null);
