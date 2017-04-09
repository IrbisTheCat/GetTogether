if (self.CavalryLogger) { CavalryLogger.start_js(["DfW\/l"]); }

/** shared/react_contrib/update.js */









__d('update',['fbjs/lib/invariant'],(function a(b,c,d,e,f,g){



'use strict';


var h={}.hasOwnProperty;

function i(t){
if(Array.isArray(t)){
return t.concat();}else
if(t&&typeof t==='object'){
return Object.assign(new t.constructor(),t);}else 

return t;}



var j='$push',
k='$unshift',
l='$splice',
m='$set',
n='$merge',
o='$apply',

p=
[j,
k,
l,
m,
n,
o],


q={};

p.forEach(function(t){
q[t]=true;});


function r(t,u,v){

Array.isArray(t)||c('fbjs/lib/invariant')(0,
'update(): expected target of %s to be an array; got %s.',
v,
t);

var w=u[v];

Array.isArray(w)||c('fbjs/lib/invariant')(0,
'update(): expected spec of %s to be an array; got %s. '+
'Did you forget to wrap your parameter in an array?',
v,
w);}







function s(t,u){

typeof u==='object'||c('fbjs/lib/invariant')(0,
'update(): You provided a key path to update() that did not contain one '+
'of %s. Did you forget to include {%s: ...}?',
p.join(', '),
m);


if(h.call(u,m)){

Object.keys(u).length===1||c('fbjs/lib/invariant')(0,
'Cannot have more than one key in an object with %s',
m);


return u[m];}


var v=i(t);

if(h.call(u,n)){
var w=u[n];

w&&typeof w==='object'||c('fbjs/lib/invariant')(0,
"update(): %s expects a spec of type 'object'; got %s",
n,
w);


v&&typeof v==='object'||c('fbjs/lib/invariant')(0,
"update(): %s expects a target of type 'object'; got %s",
n,
v);

Object.assign(v,u[n]);}


if(h.call(u,j)){
r(t,u,j);
u[j].forEach(function(y){
v.push(y);});}



if(h.call(u,k)){
r(t,u,k);
u[k].forEach(function(y){
v.unshift(y);});}



if(h.call(u,l)){

Array.isArray(t)||c('fbjs/lib/invariant')(0,
'Expected %s target to be an array; got %s',
l,
t);


Array.isArray(u[l])||c('fbjs/lib/invariant')(0,
'update(): expected spec of %s to be an array of arrays; got %s. '+
'Did you forget to wrap your parameters in an array?',
l,
u[l]);

u[l].forEach(function(y){

Array.isArray(y)||c('fbjs/lib/invariant')(0,
'update(): expected spec of %s to be an array of arrays; got %s. '+
'Did you forget to wrap your parameters in an array?',
l,
u[l]);

v.splice.apply(v,y);});}



if(h.call(u,o)){

typeof u[o]==='function'||c('fbjs/lib/invariant')(0,
'update(): expected spec of %s to be a function; got %s.',
o,
u[o]);

v=u[o](v);}


for(var x in u)
if(!(Object.prototype.hasOwnProperty.call(q,x)&&q[x]))
v[x]=s(t[x],u[x]);



return v;}


f.exports=s;}),null);

/** js/components/core/XUI/Typeahead/XUITypeahead.react.js */





__d('XUITypeahead.react',['cx','AbstractTypeahead.react','Image.react','React','SearchableEntry','XUICloseButton.react','XUIError.react','XUITypeaheadTextOnlyView.react','XUITypeaheadView.react','joinClasses','update'],(function a(b,c,d,e,f,g,h){var i,j,














k=c('React').PropTypes,

l=
{ViewRenderer:c('XUITypeaheadView.react'),
useLayer:true},


m=
{ViewRenderer:c('XUITypeaheadView.react'),
useLayer:false},


n=
{ViewRenderer:c('XUITypeaheadTextOnlyView.react'),
useLayer:true};i=babelHelpers.inherits


(o,c('React').Component);j=i&&i.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=j.constructor).call.apply(p,[this].concat(s)),this.
























































focusInput=function(){

this.refs.typeahead&&this.refs.typeahead.focusInput();}.
bind(this),this.

blurInput=function(){
this.refs.typeahead&&this.refs.typeahead.blurInput();}.
bind(this),this.

hideView=function(){
this.refs.typeahead.hideView();}.
bind(this),this.

getTextFieldDOM=function(){
return this.refs.typeahead.getTextFieldDOM();}.
bind(this),this.

$XUITypeahead_onClear=function(){
this.props.onClear();


setTimeout(function(){return this.focusInput();}.bind(this),0);}.
bind(this),q;}o.prototype.componentWillMount=function(){'use strict';};o.prototype.




render=function(){'use strict';
var p=c('joinClasses')
(this.props.inputClassName,"_55r1"+


(!!this.props.tallInput?' '+"_55r2":'')),



q=null;

if(this.props.presenter){
q=this.props.presenter;}else
if(this.props.viewStyle=='rich'){
q=l;}else
if(this.props.viewStyle=='richNoLayer'){
q=m;}else 

q=n;

if(!this.props.presenter&&this.props.maxEntries)
q=c('update')
(q,

{maxEntries:{$set:this.props.maxEntries}});




var r=this.props.showPhoto&&this.props.selectedEntry?
c('React').createElement(c('Image.react'),
{className:"_wrl",
src:this.props.selectedEntry.getPhoto()}):

null,

s=this.props.clearable?
c('React').createElement(c('XUICloseButton.react'),
{className:"_wrm"+

(this.props.disabled||!this.props.queryString?' '+"hidden_elem":''),

size:this.props.tallInput?'medium':'small',
type:'button',
onClick:this.$XUITypeahead_onClear}):

null,t=

this.props,u=t.className,v=babelHelpers.objectWithoutProperties(t,['className']);


return (c('React').createElement(c('XUIError.react'),this.props,
c('React').createElement('span',{className:c('joinClasses')("_wrn"+

(!!this.props.tallInput?' '+"_213j":'')+
(!!s?' '+"_4ehf":'')+
(!!r?' '+"_4ehg":'')+
(!!this.props.queryString?' '+"_4in7":'')+
(this.props.highlightOnSelect&&
this.props.selectedEntry?' '+"_wrr":''),

u)},
r,
c('React').createElement(c('AbstractTypeahead.react'),babelHelpers['extends']({},
v,
{inputClassName:p,
ref:'typeahead',
presenter:q,
textInputDataTestID:this.props.textInputDataTestID})),

s)));};



o.propTypes=babelHelpers['extends']({excludedEntries:k.object,maxEntries:k.number,onChange:k.func.isRequired,onSelectAttempt:k.func.isRequired,onEnterWithoutSelection:k.func,onEntriesFound:k.func,onNoEntriesFound:k.func,selectedEntry:k.instanceOf(c('SearchableEntry')),tallInput:k.bool,viewStyle:k.oneOf(['textonly','rich','richNoLayer']),clearable:k.bool,onClear:k.func,showPhoto:k.bool,textInputDataTestID:k.string,highlightOnSelect:k.bool,presenter:k.object,inputID:k.string},c('XUIError.react').propTypes);o.defaultProps={viewStyle:'rich'};


f.exports=o;}),null);

/** js/modules/highlight.js */





__d('highlight',['Animation','Style'],(function a(b,c,d,e,f,g){










function h(i,j,k,l){
new (c('Animation'))(i).
from('background',l||'#fff9d7').
to('background',k||'#fff').
ease(c('Animation').ease.both).
duration(2000).
ondone(function(){
c('Style').set(i,'background','');
j&&j();}).

go();}


f.exports=h;}),null);

/** js/ui/core/ui/typeahead/metrics/lib/QueriesHistory.js */







__d("QueriesHistory",[],(function a(b,c,d,e,f,g){





function h(i){"use strict";
this.$QueriesHistory_maxTotalLength=i;
this.reset();}
h.prototype.




getQueries=function(){"use strict";
return this.$QueriesHistory_queries;};
h.prototype.




getCurrentLength=function(){"use strict";
return this.$QueriesHistory_currentLength;};
h.prototype.




add=function(i){"use strict";
this.$QueriesHistory_queries.push(i);
this.$QueriesHistory_currentLength+=i.length;

while(this.$QueriesHistory_queries.length!==0&&
this.$QueriesHistory_currentLength>this.$QueriesHistory_maxTotalLength){
var j=this.$QueriesHistory_queries.shift();
this.$QueriesHistory_currentLength-=j.length;}};

h.prototype.

reset=function(){"use strict";
this.$QueriesHistory_currentLength=0;
this.$QueriesHistory_queries=[];};



f.exports=h;}),null);

/** js/ui/core/ui/typeahead/metrics/TypeaheadMetricCounter.js */





__d("TypeaheadMetricCounter",[],(function a(b,c,d,e,f,g){


function h(){"use strict";
this.reset();}
h.prototype.




reset=function(){"use strict";
this.stats={};
this.avgStats={};};
h.prototype.





recordStat=function(i,j){"use strict";
this.stats[i]=j;};
h.prototype.




recordCountStat=function(i){"use strict";
var j=this.stats[i];
this.stats[i]=j?j+1:1;};
h.prototype.





recordAvgStat=function(i,j){"use strict";
if(this.avgStats[i]){
this.avgStats[i][0]+=j;
this.avgStats[i][1]+=1;}else 

this.avgStats[i]=[j,1];};

h.prototype.




hasStats=function(){"use strict";

return !!Object.keys(this.stats).length;};
h.prototype.




getStats=function(){"use strict";
var i=babelHelpers["extends"]({},
this.stats);

for(var j in this.avgStats){
var k=this.avgStats[j];
i[j]=k[0]/k[1];}

return i;};



f.exports=h;}),null);

/** js/ui/core/ui/typeahead/metrics/TypeaheadMetricReporter.js */







__d('TypeaheadMetricReporter',['AsyncRequest','QueriesHistory','TypeaheadMetricCounter','mixInEventEmitter'],(function a(b,c,d,e,f,g){







var h='/ajax/typeahead/record_basic_metrics.php',
i=1000;


















function j(k){'use strict';
this.counter=new (c('TypeaheadMetricCounter'))();

this.extraData=Object.assign({},k);
this.bootstrapped=false;
this.bootstrapBegin=Date.now();
this.queriesHistory=new (c('QueriesHistory'))(i);
this.lastQuery=null;
this.sessionActive=false;
this.lastNotBackspacedQuery='';
this.lastRequestID=null;
this.requestIDHistory=[];

this.$TypeaheadMetricReporter_resetSession();}
j.prototype.

getSID=function(){'use strict';
return this.sid;};
j.prototype.

sessionStart=function(){'use strict';
this.sessionActive=true;
this.sessionStartTime=Date.now();};
j.prototype.

sessionEnd=function(){'use strict';
if(this.sessionActive){
this.$TypeaheadMetricReporter_submit();
this.$TypeaheadMetricReporter_resetSession();
this.sessionActive=false;}};

j.prototype.

setAdditionalStats=function(k){'use strict';
if(k)
Object.entries(k).forEach(function(l){var m=l[0],n=l[1];
this.counter.recordStat(m,n);}.
bind(this));};

j.prototype.





sessionPause=function(k){'use strict';
if(this.sessionActive){
this.setAdditionalStats(k);
this.$TypeaheadMetricReporter_submit();
this.sessionActive=false;}};

j.prototype.





sessionDeactivate=function(){'use strict';
this.sessionActive=false;};
j.prototype.

reportSelect=
function(k,
l,
m,
n,
o,
p){
'use strict';
o=o==null?this.lastQuery:o;
this.counter.recordStat('selected_id',k||'SELECT_NULL');
this.counter.recordStat('selected_type',l);
this.counter.recordStat('selected_position',m);
this.counter.recordStat('selected_with_mouse',n?1:0);
this.counter.recordStat('selected_query',o);

for(var q in p)
this.counter.recordStat(q,p[q]);};

j.prototype.

reportStrategyName=function(k){'use strict';
this.counter.recordStat('strategy_name',k);};
j.prototype.

reportBootstrapBegin=function(){'use strict';
this.bootstrapBegin=Date.now();};
j.prototype.

reportBootstrapDirty=function(){'use strict';
this.bootstrapped=false;};
j.prototype.

reportBootstrapComplete=function(k){'use strict';
this.counter.recordAvgStat
('bootstrap_latency',
Date.now()-this.bootstrapBegin);


var l={};
k.forEach(function(m){
l[m]=(l[m]||0)+1;});


this.counter.recordStat('bootstrap_response_types',l);
this.bootstrapped=true;};
j.prototype.

reportQueryBegin=function(k){'use strict';
this.counter.recordStat('query',k);
this.counter.recordCountStat('num_queries');
this.queriesHistory.add(k);
if(this.lastNotBackspacedQuery.indexOf(k)!==0)
this.lastNotBackspacedQuery=k;

this.lastQuery=k;
this.lastQueryTime=Date.now();};
j.prototype.

reportRequestID=function(k){'use strict';
this.lastRequestID=k;
this.requestIDHistory.push(k);};
j.prototype.





reportQueryComplete=function(k,l){'use strict';
this.counter.recordAvgStat('avg_query_latency',k);
if(l!==undefined)
this.counter.recordStat('filtered_count',l);};

j.prototype.

reportResults=function(k,l){'use strict';
this.results=k;
if(l===this.lastQuery)
this.counter.recordStat
('last_query_latency',
Date.now()-this.lastQueryTime);};


j.prototype.





reportResultsAds=function(k){'use strict';
this.resultsAds=k;};
j.prototype.




$TypeaheadMetricReporter_resetSession=function(){'use strict';
this.sid=Math.floor(Date.now()*Math.random());
this.lastNotBackspacedQuery='';
this.queriesHistory.reset();
this.results=null;
this.resultsAds=null;
this.lastRequestID=null;
this.requestIDHistory=[];

this.counter.reset();


this.emit&&this.emit('reset',{sid:this.sid});};
j.prototype.




$TypeaheadMetricReporter_getExtraData=function(){'use strict';
var k={};

for(var l in this.extraData){
var m=this.extraData[l];
k[l]=typeof m==='function'?m():m;}


return k;};
j.prototype.




$TypeaheadMetricReporter_submit=function(){'use strict';
if(this.counter.hasStats()){
this.counter.recordStat
('session_time',
Date.now()-this.sessionStartTime);


if(this.results)
this.counter.recordStat
('candidate_results',
JSON.stringify(this.results));



if(this.resultsAds)
this.counter.recordStat
('candidate_results_ads',
JSON.stringify(this.resultsAds));



if(this.sid)
this.counter.recordStat('sid',this.sid);


if(this.lastNotBackspacedQuery)
this.counter.recordStat
('last_not_backspaced_query',
this.lastNotBackspacedQuery);



this.counter.recordStat
('queries_history',
JSON.stringify(this.queriesHistory.getQueries()));


if(this.bootstrapped)
this.counter.recordStat('bootstrapped',1);


if(this.lastRequestID)
this.counter.recordStat('request_id',this.lastRequestID);


if(this.requestIDHistory.length)
this.counter.recordStat('request_ids',this.requestIDHistory);


var k=babelHelpers['extends']({},
this.counter.getStats(),
this.$TypeaheadMetricReporter_getExtraData());


new (c('AsyncRequest'))().
setURI(h).
setMethod('POST').
setData({stats:k}).
send();



this.emit&&this.emit('submitted',k);}};




c('mixInEventEmitter')(j,
{reset:true,
submitted:true});


f.exports=j;}),null);

/** js/profile/ui/typeahead/ProfileMaskedTypeaheadWrapper.react.js */






__d('ProfileMaskedTypeaheadWrapper.react',['ProfileTypeaheadWrapperMixin','React','ProfileMaskedTypeahead.react'],(function a(b,c,d,e,f,g){






var h=c('React').createClass({displayName:'ProfileMaskedTypeaheadWrapper',

mixins:[c('ProfileTypeaheadWrapperMixin')],




propTypes:{},

render:function i(){

return (c('React').createElement(c('ProfileMaskedTypeahead.react'),babelHelpers['extends']({},
this.props,
{onChange:this._changeHandler,
onClear:this.clearSelection,
onSelectAttempt:this._selectHandler,
queryString:this.state.queryString,
ref:'typeahead',
selectedEntry:this.state.selectedEntry})));}});





f.exports=h;}),null);
