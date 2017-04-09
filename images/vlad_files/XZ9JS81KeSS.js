if (self.CavalryLogger) { CavalryLogger.start_js(["iWRsG"]); }

/** js/extern/ExternReauth.js */




__d('ExternReauth',['CSS','DOMQuery','Event','Focus','ge'],(function a(b,c,d,e,f,g){







function h(i,j){


i.subscribe('change',function(){
j.forEach(function(k){
var l=c('ge')(k);
if(k===j[i.getValue()]){
c('CSS').show(l);
c('DOMQuery').scry(l,'input[type="radio"]')[0].checked=true;}else 

c('CSS').hide(l);});});






j.forEach(function(k){
c('DOMQuery').scry(c('ge')(k),'label').forEach(function(l){
var m=c('DOMQuery').scry(l,'input[type="radio"]')[0],
n=c('DOMQuery').scry(l,'input[type="text"]')[0];
c('Event').listen(l,'click',function(){
m.checked=true;
c('Focus').set(n);});});});}





f.exports=h;}),null);

/** js/logging/generated/WorkSwitcherTypedLogger.js */





__d('WorkSwitcherTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:WorkSwitcherLoggerConfig',this.$WorkSwitcherTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:WorkSwitcherLoggerConfig',this.$WorkSwitcherTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$WorkSwitcherTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$WorkSwitcherTypedLogger_data=babelHelpers['extends']({},
this.$WorkSwitcherTypedLogger_data,
j);

return this;};
h.prototype.




setEventType=function(j){
this.$WorkSwitcherTypedLogger_data.event_type=j;
return this;};
h.prototype.




setSourceCommunityID=function(j){
this.$WorkSwitcherTypedLogger_data.source_community_id=j;
return this;};
h.prototype.




setTargetCommunityID=function(j){
this.$WorkSwitcherTypedLogger_data.target_community_id=j;
return this;};
h.prototype.




setTargetUserID=function(j){
this.$WorkSwitcherTypedLogger_data.target_user_id=j;
return this;};
h.prototype.




setVC=function(j){
this.$WorkSwitcherTypedLogger_data.vc=j;
return this;};
h.prototype.




updateExtraData=function(j){
j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));
c('GeneratedLoggerUtils').checkExtraDataFieldNames
(j,
i);

this.$WorkSwitcherTypedLogger_data=babelHelpers['extends']({},
this.$WorkSwitcherTypedLogger_data,
j);

return this;};
h.prototype.




addToExtraData=function(j,k){
var l={};
l[j]=k;
return this.updateExtraData(l);};

















var i=
{event_type:true,
source_community_id:true,
target_community_id:true,
target_user_id:true,
vc:true};


f.exports=h;}),null);

/** js/mercury/clients/messenger/components/MessengerWorkAvailabilityStatus.react.js */







__d('MessengerWorkAvailabilityStatus.react',['fbt','React','AsyncRequest'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,










k='/ajax/mercury/bypass_focus_mode.php';i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.
displayFocusBanner=
function(m,
n){

var o=false;
n.forEach(function(p){
if(!p||p.fbid===m)
return;

o=o||p.is_user_focusing;});

return !!o;};
l.prototype.

$MessengerWorkAvailabilityStatus_bypassFocusMode=function(){
new (c('AsyncRequest'))(k).
setData
({thread_fbid:this.props.thread.thread_fbid,
other_user_fbid:this.props.thread.other_user_fbid,
new_setting:true}).

send();};
l.prototype.

render=function(){var m=
this.props,n=m.viewer,o=m.thread,p=m.participants,
q=l.displayFocusBanner
(n,
p);


if(!q)
return null;



if(o&&
o.bypass_focus_mode_until&&
o.bypass_focus_mode_until>Date.now()/1000)


return (c('React').createElement('div',{className:this.props.className},h._(["Focus mode bypassed.","55e341f288f84400fa2cca17cbc64702"])));








return (c('React').createElement('div',{className:this.props.className},h._({"*":["Your coworkers are in focus mode.","75b1456f98f9d42a9aaa1407c4878b15"],"268435456":["Your coworker is in focus mode.","5289ddcc51c7dee7f7081df9a2dc23db"]},[h.plural


(p.size-1)]),




' ',
c('React').createElement('a',{href:'#',onClick:function(){return this.$MessengerWorkAvailabilityStatus_bypassFocusMode();}.bind(this)},h._(["Bypass","c33ee695739688e91caf5307e4346f28"]))));};




function l(){i.apply(this,arguments);}


f.exports=l;}),null);

/** js/pages/nubs/PagesEmployeeNubAdminSection.react.js */





__d('PagesEmployeeNubAdminSection.react',['cx','AsyncRequest','Button.react','FBClipboardLink.react','LeftRight.react','React','URI'],(function a(b,c,d,e,f,g,h){
'use strict';var i,j;i=babelHelpers.inherits















(k,c('React').Component);j=i&&i.prototype;


function k(l,m){
j.constructor.call(this,l,m);}
k.prototype.

render=function(){

return (c('React').createElement('div',null,
c('React').createElement(c('LeftRight.react'),{className:"_4rlb"},
c('React').createElement('div',null,
c('React').createElement('span',{className:"_xzr"},'Page ID:'),


c('React').createElement('span',
{className:"_xzs _3-9b"},
this.props.pid)),


c('React').createElement('div',null,
c('React').createElement(c('FBClipboardLink.react'),
{value:this.props.pid.toString(),
tooltip:'Copy Page ID to clipboard',
tooltipSuccess:'Page ID copied'},
c('React').createElement(c('Button.react'),{label:'Copy'})))),



c('React').createElement(c('Button.react'),
{className:"_4f6h",
onClick:function(){return this.$PagesEmployeeNubAdminSection_sendRequest();}.bind(this),
label:'Add me as invisible admin'})));};


k.prototype.

$PagesEmployeeNubAdminSection_sendRequest=function(){
var l=!this.props.redirectURI,
m=new (c('URI'))().
setPath('/intern/support/objectadmin/ajax/edit_info.php').
setQueryData
({id:this.props.pid,
field:'Temporary Invisible Employee Admins',
redirect_override:this.props.redirectURI,
no_redirect:l});


new (c('AsyncRequest'))(m).send();};



f.exports=k;}),null);

/** js/perf/InteractionFinder.js */





__d('InteractionFinder',['cx','DialogX','Event','InputLabel.react','LayerDestroyOnHide','LayerFadeOnHide','LayerFadeOnShow','LayerHideOnBlur','LayerHideOnEscape','Link.react','React','Set','SimpleXUIDialog','URI','XUICheckboxInput.react','flattenArray'],(function a(b,c,d,e,f,g,h){var i,j,



















k=
{start:function o
(p,
q){

var r=new (c('URI'))(document.URL).getQueryData();

if(r.mh_p_content_refs!=='readable'&&r.mh_p_cx!=='readable'){
var s=
{mh_p_content_refs:'readable',
mh_p_x:'readable',
did_interaction_finder_reload:'1'};


new (c('URI'))(document.URL).addQueryData(s).go(true);
c('SimpleXUIDialog').show
('Hold on to your hat',
'Reloading the page with CSS Minfication off');

return;}

var t=function u(event){
c('Event').kill(event);
q(event);


document.removeEventListener('mouseover',p,true);
document.removeEventListener('mouseout',q,true);
document.removeEventListener('mousedown',c('Event').kill,true);
document.removeEventListener('mouseup',c('Event').kill,true);
document.removeEventListener('click',u,true);
new (c('DialogX'))

({xui:true,
width:800,
addedBehaviors:[c('LayerDestroyOnHide'),c('LayerFadeOnShow'),c('LayerFadeOnHide'),c('LayerHideOnEscape'),c('LayerHideOnBlur')]},







c('React').createElement(l,{stack:m(event.target)})).
show();};




document.addEventListener('mouseover',p,true);
document.addEventListener('mouseout',q,true);
document.addEventListener('mousedown',c('Event').kill,true);
document.addEventListener('mouseup',c('Event').kill,true);
document.addEventListener('click',t,true);}};
i=babelHelpers.inherits






(l,c('React').Component);j=i&&i.prototype;








function l(o){'use strict';
j.constructor.call(this,o);this.

















































































































$InteractionFinderDialog_onCheckBoxClick=function(event){
var p=event.target,
q=this.state.checkedFilters,
r=p.getAttribute('value');
q[r]=!q[r];
this.setState({checkedFilters:q});}.
bind(this);this.state={checkedFilters:{}};}l.prototype.render=function(){'use strict';var o={},p=Array.from(new (c('Set'))(c('flattenArray')(this.props.stack.map(function(q,r){var s=c('flattenArray')([q.nodeName,q.classNames,q.id]);s.forEach(function(t){o[t]=Math.min(o[t]||Infinity,r);});return s;})))).sort(function(q,r){return o[q]-o[r];});return c('React').createElement('div',{className:"_1r8d _2ph_"},c('React').createElement('h1',null,'Select the unique identifiers for the element'),c('React').createElement('hr',null),p.map(function(q,r){return this.renderCheckbox(q,r);}.bind(this)),this.renderUrl());};l.prototype.renderCheckbox=function(o,p){'use strict';if(!o.length)return null;return c('React').createElement(c('InputLabel.react'),{display:'inline',key:p},c('React').createElement(c('XUICheckboxInput.react'),{onClick:this.$InteractionFinderDialog_onCheckBoxClick,value:o,checked:this.state.checkedFilters[o]}),c('React').createElement('label',null,o));};l.prototype.renderUrl=function(){'use strict';var o=Object.keys(this.state.checkedFilters),p=o.filter(function(s){return this.state.checkedFilters[s];}.bind(this));if(!p.length)return null;var q={dataset:'webspeed_js_interactions',view:'Table',drillstate:JSON.stringify({start:'-1 day',end:'now',metric:'avg',dimensions:['event_name'],cols:['laggy_response_time_100','DD','tti_ms_revised'],param_dimensions:[{dim:'event_target_stack',op:'last',param:'15',anchor:'0'}],order:'weight',order_desc:true,filterMode:'DEFAULT',samplingRatio:'10',return_remainder:false,hideEmptyColumns:false,top:'200',constraints:[[{column:'policies',op:'all',value:[JSON.stringify(['js_interaction_Event'])]},{column:'Timeout Rate',op:'eq',value:[JSON.stringify(['0'])]},{column:'overflown_timeslice_buffer',op:'eq',value:[JSON.stringify(['0'])]},{column:'event_target_stack',op:'all',value:[JSON.stringify(p.map(function(s){return s.toLowerCase();}))]}]]})},r=new (c('URI'))('/intern/scuba/query').addQueryData(q).setDomain('our.intern.facebook.com').setProtocol('https');return c('React').createElement('div',{className:"_1r8e"},c('React').createElement('h2',null,c('React').createElement(c('Link.react'),{href:r,target:'_blank'},'Here is your Scuba link')));};


function m(o){
var p=[];
while(o&&o instanceof HTMLElement){
p.push(n(o));
o=o.parentElement;}

return p.reverse();}








function n(o){
if(!o||!(o instanceof HTMLElement))
return {nodeName:'',id:'',classNames:[]};

var p=o.id,q=o.nodeName,


r=o.getAttribute('class')||'';
p=p?''+p:'';
var s=r.
replace(/\s+/g,' ').
trim().
replace(/\-cx\-PRIVATE\-/g,'').
replace(/\-cx\-PUBLIC\-/g,'public/').
replace(/\_\_/g,'/').
split(' ');
return {nodeName:'#'+q,id:p,classNames:s};}


f.exports=k;}),null);

/** js/traffic/TrafficNub.js */




__d('TrafficNub',['Event'],(function a(b,c,d,e,f,g){



var h=

{bindDialog:function i(j,k){
c('Event').listen(j,'click',k.show.bind(k));}};




f.exports=h;}),null);

/** js/work/WorkSwitcherHelper.js */





__d('WorkSwitcherHelper',['Event','WorkSwitcherTypedLogger'],(function a(b,c,d,e,f,g){




var h=

{logOpen:function i(j,k){
c('Event').listen(j,'click',function(){
new (c('WorkSwitcherTypedLogger'))().
setEventType('open_switcher').
setSourceCommunityID(k.source_community_id).
log();});},




logProfile:function i(j,k){
c('Event').listen(j,'click',function(){
new (c('WorkSwitcherTypedLogger'))().
setEventType('view_profile').
setSourceCommunityID(k.source_community_id).
log();});},




logSwitch:function i(j,k){
c('Event').listen(j,'click',function(){
new (c('WorkSwitcherTypedLogger'))().
setEventType('switch_account').
setSourceCommunityID(k.source_community_id).
setTargetCommunityID(k.target_community_id).
setTargetUserID(k.target_user_id).
log();});}};





f.exports=h;}),null);
