if (self.CavalryLogger) { CavalryLogger.start_js(["6zuTq"]); }

/** __static_js_modules__/aymtclientsidechannelnames.js */




__d("AYMTClientSideChannelNames",[],(function a(b,c,d,e,f,g){

f.exports={AYMT_ADS_CF_TARGETING_CHANNEL:"AYMTAdsCFTargetingChannel",AYMT_BOOSTED_COMPONENT_TARGETING_CHANNEL:"AYMTBoostedComponentTargetingChannel",AYMT_BOOSTED_COMPONENT_BUDGET_AND_DURATION_CHANNEL:"AYMTBoostedComponentBudgetAndDurationChannel",AYMT_BOOSTED_COMPONENT_PAYMENTS_SECTION_CHANNEL:"AYMTBoostedComponentPaymentsSectionChannel",AYMT_BOOSTED_COMPONENT_PROMOTIONS_CHANNEL:"AYMTBoostedComponentPromotionsChannel",AYMT_FLASH_INSIGHTS_CHANNEL:"AYMTFlashInsightsChannel",AYMT_HOMEPAGE_PANEL_CHANNEL:"AYMTHomepagePanelChannel",AYMT_HOMEPAGE_APPS_PANEL_CHANNEL:"AYMTHomepageAppsPanelChannel",AYMT_HOMEPAGE_GROUPS_PANEL_CHANNEL:"AYMTHomepageGroupsPanelChannel",AYMT_PAGES_INSIGHTS_POST_DETAILS_CHANNEL:"AYMTPagesInsightsPostDetailsChannel",AYMT_ADS_INSIGHTS_NAM_PERFORMANCE_CHANNEL:"AYMTAdsInsightsNAMPerformanceChannel",AYMT_CAMPAIGN_MANAGER_ATTENTION_CHANNEL:"AYMTCampaignManagerAttentionChannel",AYMT_CAMPAIGN_MANAGER_HOME_CHANNEL:"AYMTCampaignManagerHomeChannel",AYMT_CAMPAIGN_MANAGER_MEGAPHONE_CHANNEL:"AYMTCampaignManagerMegaphoneChannel",AYMT_POWER_EDITOR_CREATION_MEGAPHONE_CHANNEL:"AYMTPowerEditorCreationMegaphoneChannel",AYMT_POWER_EDITOR_HOME_MEGAPHONE_CHANNEL:"AYMTPowerEditorHomeMegaphoneChannel",AYMT_WORKPLACE_HOME_CHANNEL:"AYMTWorkplaceHomeChannel",AYMT_WORKPLACE_PAYMENT_CHANNEL:"AYMTWorkplacePaymentChannel"};}),

null);

/** __static_js_modules__/aymtclientsideparam.js */




__d("AYMTClientSideParam",[],(function a(b,c,d,e,f,g){

f.exports={AD_ACCOUNT_ID:"ad_account_id",APP_ID:"app_id",CAMPAIGN_GROUP_ID:"campaign_group_id",ESTIMATED_AUDIENCE_SIZE:"estimated_audience_size",INSIGHTS_METRIC:"insights_metric",PAGE_ID:"page_id",POST_ID:"post_id",USER_ID:"user_id",TARGETING_GENDER:"targeting_gender",CHANNEL:"channel",CACHE:"cache",TIP:"tip",VALIDATE:"validate",INVALIDATE:"invalidate",CAMPAIGN_ID:"campaign_id",BUSINESS_ID:"business_id",INSTAGRAM_USER_ID:"instagram_user_id"};}),

null);

/** __static_js_modules__/jobsearchsurface.js */




__d("JobSearchSurface",[],(function a(b,c,d,e,f,g){

f.exports={ALERT_NOTIFICATION:"alert_notification",APPROVED_NOTIFICATION:"approved_notification",AYMT_TIP:"aymt_tip",BOOKMARK:"bookmark",CITY_PAGE:"city_page",COMPLETION_SCREEN:"completion_screen",DETAIL_VIEW:"detail_view",EXPIRATION_NOTIFICATION:"expiration_notification",EXPIRATION_REMINDER_MEGAPHONE:"expiration_reminder_megaphone",INACTIVE_NOTIFICATION:"inactive_notification",INACTIVE_POST_MEGAPHONE:"inactive_post_megaphone",INTERNAL:"internal",JOB_BROWSER:"job_browser",JOB_BROWSER_ALL_CATEGORIES:"job_browser_all_categories",JOB_BROWSER_SEARCH_QUERY:"job_browser_search_query",JOB_BROWSER_TOP_CATEGORIES:"job_browser_top_categories",JOB_CAROUSEL:"job_carousel",JOBS_APP_IN_SEARCH_RESULT:"jobs_app_in_search_result",JOBS_MODULE_IN_SEARCH_RESULT:"jobs_module_in_search_result",MESSENGER:"messenger",NETEGO:"netego",PAGE_CARD:"page_card",PAGE_COMPOSER:"page_composer",PAGE_TAB_CREATE_BUTTON:"page_tab_create_button",PAGE_TAB_UPSELL_BUTTON:"page_tab_upsell_button",PAGES_EXTRA_COMPOSER_TAB:"pages_extra_composer_tab",PAGES_OBJECTIVE_COMPOSER:"pages_objective_composer",POST:"post",QUICK_PROMOTION:"quick_promotion",REMIND_ME_LATER_NOTIFICATION:"remind_me_later_notification",STATIC:"static",WEB_URL:"web_url"};}),

null);

/** js/ads/growth/aymt/actions/AYMTTipActions.js */






__d('AYMTTipActions',['AYMTClientSideChannelNames','AYMTTipActionTypes'],(function a(b,c,d,e,f,g){

'use strict';




var h=
{dispatchTips:function i
(j,
k,
l,
m){

switch(k){
case c('AYMTClientSideChannelNames').AYMT_BOOSTED_COMPONENT_TARGETING_CHANNEL:
case c('AYMTClientSideChannelNames').AYMT_BOOSTED_COMPONENT_BUDGET_AND_DURATION_CHANNEL:
case c('AYMTClientSideChannelNames').AYMT_BOOSTED_COMPONENT_PAYMENTS_SECTION_CHANNEL:
l.handleUpdateFromServerResponse
({data:{channelName:k,tips:j},
actionType:c('AYMTTipActionTypes').TIPS_LOADED});

break;
case c('AYMTClientSideChannelNames').AYMT_ADS_CF_TARGETING_CHANNEL:
l.handleUpdateFromServerResponse
({data:{channelName:k,tips:j},
type:c('AYMTTipActionTypes').TIPS_LOADED});

break;
case c('AYMTClientSideChannelNames').AYMT_PAGES_INSIGHTS_POST_DETAILS_CHANNEL:
case c('AYMTClientSideChannelNames').AYMT_HOMEPAGE_PANEL_CHANNEL:
case c('AYMTClientSideChannelNames').AYMT_HOMEPAGE_APPS_PANEL_CHANNEL:
case c('AYMTClientSideChannelNames').AYMT_HOMEPAGE_GROUPS_PANEL_CHANNEL:
case c('AYMTClientSideChannelNames').AYMT_FLASH_INSIGHTS_CHANNEL:
case c('AYMTClientSideChannelNames').AYMT_BOOSTED_COMPONENT_PROMOTIONS_CHANNEL:
l.dispatch
({data:{channelName:k,tips:j,params:m},
type:c('AYMTTipActionTypes').TIPS_LOADED});

break;
case c('AYMTClientSideChannelNames').AYMT_ADS_INSIGHTS_NAM_PERFORMANCE_CHANNEL:
case c('AYMTClientSideChannelNames').AYMT_POWER_EDITOR_CREATION_MEGAPHONE_CHANNEL:
l.dispatch
({data:{channelName:k,tips:j,params:m},
action:
{actionType:c('AYMTTipActionTypes').TIPS_LOADED,
data:
{channelName:k,
tips:j,
params:m,
type:c('AYMTTipActionTypes').TIPS_LOADED},

type:c('AYMTTipActionTypes').TIPS_LOADED}});


break;
case c('AYMTClientSideChannelNames').AYMT_CAMPAIGN_MANAGER_HOME_CHANNEL:
l.handleUpdateFromServerResponse
({data:{channelName:k,tips:j},
type:c('AYMTTipActionTypes').TIPS_LOADED});

break;
case c('AYMTClientSideChannelNames').AYMT_CAMPAIGN_MANAGER_MEGAPHONE_CHANNEL:
l.handleUpdateFromServerResponse
({data:{channelName:k,tips:j},
type:c('AYMTTipActionTypes').TIPS_LOADED});

break;
case c('AYMTClientSideChannelNames').AYMT_CAMPAIGN_MANAGER_ATTENTION_CHANNEL:
l.handleUpdateFromServerResponse
({data:{channelName:k,tips:j},
type:c('AYMTTipActionTypes').TIPS_LOADED});

break;
case c('AYMTClientSideChannelNames').AYMT_WORKPLACE_HOME_CHANNEL:
l.handleUpdateFromServerResponse
({data:{channelName:k,tips:j},
type:'home/tipsLoaded'});

break;
case c('AYMTClientSideChannelNames').AYMT_WORKPLACE_PAYMENT_CHANNEL:
l.handleUpdateFromServerResponse
({data:{channelName:k,tips:j},
type:'payments/tipsLoaded'});

break;

default:throw new Error
('Unregistered %s channel for AYMTTipActions.dispatchTips',
k);}},




dispatchTipsLoadingError:function i
(j,
k,
l){

l.handleUpdateFromServerResponse
({data:{channelName:k,error:j},
actionType:c('AYMTTipActionTypes').TIPS_LOADED_ERROR});},



dismissTips:function i(j,k){
switch(j){
case c('AYMTClientSideChannelNames').AYMT_POWER_EDITOR_CREATION_MEGAPHONE_CHANNEL:
k.handleUpdateFromServerResponse
({channelName:j,
type:c('AYMTTipActionTypes').TIPS_DISMISSED});

break;}}};




f.exports=h;}),null);

/** www/__virtual__/x/XAYMTClientSideTipsAsyncController.js */



__d("XAYMTClientSideTipsAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ads\/growth\/aymt\/load_client_side_tips\/",{cache:{type:"Int"},channel:{type:"String"},channel_name:{type:"String",required:true},invalidate:{type:"Int"},params:{type:"StringToStringMap"},previous_params:{type:"StringToStringMap"},previous_tips_aymt_data:{type:"StringVector"},request_id:{type:"String",required:true},tip:{type:"String"},validate:{type:"Int"}});}),

null);

/** js/ads/aymt/tips/channel/AYMTTipsLoader.js */







__d('AYMTTipsLoader',['invariant','Promise','AsyncRequest','AYMTClientSideParam','AYMTTipActions','AYMTTipSettings','XAYMTClientSideTipsAsyncController','ex','mergeDeepInto'],(function a(b,c,d,e,f,g,h){

'use strict';


















function i(){
this.$AYMTTipsLoaderClass_loaders={};
this.$AYMTTipsLoaderClass_latestIds={};
this.$AYMTTipsLoaderClass_latestParams={};
this.$AYMTTipsLoaderClass_previousParams={};
this.$AYMTTipsLoaderClass_previousTipsAYMTData={};}
i.prototype.

$AYMTTipsLoaderClass_sendRequestForTips=
function(k,
l){

return new (c('Promise'))(function(m,n){
var o=new Date(),
p='id_'+Math.random()+'_'+o.getTime();
this.$AYMTTipsLoaderClass_loaders[p]=
{resolve:m};

this.$AYMTTipsLoaderClass_latestIds[l]=p;
this.$AYMTTipsLoaderClass_latestParams[l]=k;
var q=c('XAYMTClientSideTipsAsyncController').getURIBuilder().
setString('channel_name',l).
setString('request_id',p).
setStringVector
('previous_tips_aymt_data',
this.$AYMTTipsLoaderClass_previousTipsAYMTData[l]).

setStringToStringMap('params',k).
setStringToStringMap
('previous_params',
this.$AYMTTipsLoaderClass_previousParams[l]),


r=k[c('AYMTClientSideParam').CHANNEL];
if(!(this.$AYMTTipsLoaderClass_loaders[l]||
r&&r!==l))
q.setString('channel',r).
setInt('cache',k[c('AYMTClientSideParam').CACHE]).
setInt('validate',k[c('AYMTClientSideParam').VALIDATE]).
setString('tip',k[c('AYMTClientSideParam').TIP]).
setInt('invalidate',k[c('AYMTClientSideParam').INVALIDATE]);


new (c('AsyncRequest'))().
setURI(q.getURI()).
setErrorHandler(function(s){
n(s.errorDescription);}).

setAllowCrossPageTransition(true).
send();}.
bind(this));};
i.prototype.

loadTips=
function(k,
l,
m){

this.$AYMTTipsLoaderClass_sendRequestForTips(k,l).done
(function(n){
if(n&&n.tips&&Array.isArray(n.tips)){
c('AYMTTipActions').dispatchTips
(n.tips,
l,
m,
this.$AYMTTipsLoaderClass_latestParams[l]);


this.$AYMTTipsLoaderClass_previousParams[l]={};
c('mergeDeepInto')(this.$AYMTTipsLoaderClass_previousParams[l],k);
this.$AYMTTipsLoaderClass_previousTipsAYMTData[l]=n.tips.map
(function(o){
return JSON.stringify(o[c('AYMTTipSettings').AYMT_DATA]);});}}.



bind(this),
function(n){
var o=new Error(c('ex')
('Tip loading request failed for %s channel %s',
l,
n.__html));


c('AYMTTipActions').dispatchTipsLoadingError
(o,
l,
m);});};



i.prototype.

setTips=
function(k,
l,
m){


k&&k.tips||h(0,
'Invalid tips data returned for %s channel',
l);


this.$AYMTTipsLoaderClass_loaders[m]&&this.$AYMTTipsLoaderClass_loaders[m].resolve||h(0,
'Setting tips for %s faild. LoadTips should be called first',
l);



if(this.$AYMTTipsLoaderClass_latestIds[l]!==m){
this.$AYMTTipsLoaderClass_loaders[m].resolve(null);}else 

this.$AYMTTipsLoaderClass_loaders[m].resolve(k);

delete this.$AYMTTipsLoaderClass_loaders[m];};



var j=new i();

f.exports=j;}),null);

/** js/components/Insights/loading_indicator/InsightsLoadingIndicator.react.js */




__d('InsightsLoadingIndicator.react',['cx','React','XUISpinner.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.








render=function(){'use strict';
var m=c('joinClasses')
("_5g39",
this.props.className);



return (c('React').createElement('div',{className:m},
c('React').createElement(c('XUISpinner.react'),{background:'light',size:this.props.size})));};


function l(){'use strict';i.apply(this,arguments);}l.propTypes={size:k.string};l.defaultProps={size:'large'};


f.exports=l;}),null);

/** js/components/core/XUI/TimeInput/TimeInputParser.js */








__d('TimeInputParser',[],(function a(b,c,d,e,f,g){


var h='AM',
i='PM';





function j(n){
var o=Math.floor(n/60),
p;
if(o!==0){
p=Math.floor(o/60);
o=o%60;}else 

p=0;


if(p>24)
return null;



return {hours24:p,
minutes:o,
time:k(p,o),
text12:l(p,o)};}








function k(n,o){
return (n*60+o)*60;}







function l(n,o){
if(o<10)
o='0'+o;

if(n===0){
return '12:'+o+' '+h;}else
if(n<12){
return n+':'+o+' '+h;}else
if(n===12){
return '12:'+o+' '+i;}else 

return n-12+':'+o+' '+i;}



var m=
{fromTime:j,
toTime:k,
toText12:l,
AM:h,
PM:i};


f.exports=m;}),null);

/** js/components/core/common/TimeInput/AbstractTimeInputColumn.react.js */





__d('AbstractTimeInputColumn.react',['cx','Keys','React','ReactDOM','joinClasses','uniqueID'],(function a(b,c,d,e,f,g,h){var i,j,









k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.



























state=
{descriptionID:c('uniqueID')(),
focused:false,
inputID:c('uniqueID')()},this.

























































focusInput=function(){
var r=c('ReactDOM').findDOMNode(this.refs.input);

try{r.focus();}catch(
s){

}

this.setState({focused:true});
if(this.props.onFocus)
this.props.onFocus();}.

bind(this),this.

blurInput=function(){
var r=c('ReactDOM').findDOMNode(this.refs.input);

try{r.blur();}catch(
s){

}

this.setState({focused:false});
if(this.props.onBlur)
this.props.onBlur();}.

bind(this),this.

$AbstractTimeInputColumn_onKeyDown=function(r){
switch(r.keyCode){
case c('Keys').TAB:
if(r.shiftKey){
this.$AbstractTimeInputColumn_onFocusPrevAttempt(r);}else 

this.$AbstractTimeInputColumn_onFocusNextAttempt(r);

break;

case c('Keys').LEFT:
this.$AbstractTimeInputColumn_onFocusPrevAttempt(r);
break;

case c('Keys').UP:
this.$AbstractTimeInputColumn_incrementValue(r);
break;

case c('Keys').RIGHT:
this.$AbstractTimeInputColumn_onFocusNextAttempt(r);
break;

case c('Keys').DOWN:
this.$AbstractTimeInputColumn_decrementValue(r);
break;

case c('Keys').BACKSPACE:
case c('Keys').DELETE:
this.props.onType&&this.props.onType(null);
r.preventDefault();
break;}}.

bind(this),this.

$AbstractTimeInputColumn_decrementValue=function(r){
this.props.onSpin&&this.props.onSpin(-1);
r.preventDefault();}.
bind(this),this.

$AbstractTimeInputColumn_incrementValue=function(r){
this.props.onSpin&&this.props.onSpin(1);
r.preventDefault();}.
bind(this),this.

$AbstractTimeInputColumn_onFocusPrevAttempt=function(event){
if(this.props.onFocusPrevAttempt){
event.preventDefault();
this.props.onFocusPrevAttempt();}else
if(event.nativeEvent.keyCode===c('Keys').LEFT)

event.preventDefault();}.

bind(this),this.

$AbstractTimeInputColumn_onFocusNextAttempt=function(event){
if(this.props.onFocusNextAttempt){
event.preventDefault();
this.props.onFocusNextAttempt();}else
if(event.nativeEvent.keyCode===c('Keys').RIGHT)

event.preventDefault();}.

bind(this),this.

$AbstractTimeInputColumn_onChange=function(r){
this.props.onType&&this.props.onType(r.target.value);}.
bind(this),this.

$AbstractTimeInputColumn_onFocus=function(){
this.setState
({focused:true});

if(this.props.onFocus)
this.props.onFocus();}.

bind(this),this.

$AbstractTimeInputColumn_onBlur=function(){
this.setState
({focused:false});

if(this.props.onBlur)
this.props.onBlur();}.

bind(this),n;}l.prototype.render=function(){'use strict';var m=this.props.classNames||{},n=c('joinClasses')(this.props.className,m.column,this.state.focused?m.focused:null),o={};if(this.props.disabled)o.disabled='disabled';return c('React').createElement('div',{className:n},c('React').createElement('div',{className:m.columnBody},c('React').createElement('label',{'aria-hidden':true,className:m.columnValue,htmlFor:this.state.inputID},this.props.value==null?this.props.placeholder:this.props.value),c('React').createElement('input',babelHelpers['extends']({},o,{'aria-describedby':this.state.descriptionID,'aria-disabled':this.props.disabled,'aria-valuetext':this.props.value,className:m.textInput,id:this.state.inputID,ref:'input',role:'spinbutton',tabIndex:this.props.tabIndex,value:'',onBlur:this.$AbstractTimeInputColumn_onBlur,onChange:this.$AbstractTimeInputColumn_onChange,onFocus:this.$AbstractTimeInputColumn_onFocus,onKeyDown:this.$AbstractTimeInputColumn_onKeyDown})),c('React').createElement('span',{'aria-label':this.props.label,className:"accessible_elem",id:this.state.descriptionID})));};l.propTypes={classNames:k.shape({column:k.string,columnBody:k.string,columnValue:k.string,focused:k.string,textInput:k.string}),disabled:k.bool,options:k.array,onBlur:k.func,onSpin:k.func,onType:k.func,onFocus:k.func,placeholder:k.string,value:k.any};


f.exports=l;}),null);

/** shared/date/TimeOfDay.js */






__d('TimeOfDay',['invariant','Instant','ISODateString','PeriodUnit','Timezone'],(function a(b,c,d,e,f,g,h){

'use strict';








var i=c('Timezone').UTC;









































function j(){



var k=arguments.length<=0||arguments[0]===undefined?0:arguments[0],l=arguments.length<=1||arguments[1]===undefined?0:arguments[1],m=arguments.length<=2||arguments[2]===undefined?0:arguments[2];
this.hour=k;
this.minute=l;
this.second=m;}




j.

create=function(){



var k=arguments.length<=0||arguments[0]===undefined?0:arguments[0],l=arguments.length<=1||arguments[1]===undefined?0:arguments[1],m=arguments.length<=2||arguments[2]===undefined?0:arguments[2];
return new j(k,l,m);};
j.prototype.

compare=function(k){
return this.toSecondOfDay()-k.toSecondOfDay();};
j.prototype.




equals=function(k){
return this.compare(k)===0;};
j.prototype.

isBefore=function(k){
return this.compare(k)<0;};
j.prototype.

isAfter=function(k){
return this.compare(k)>0;};
j.prototype.

isBeforeOrEqual=function(k){
return this.compare(k)<=0;};
j.prototype.

isAfterOrEqual=function(k){
return this.compare(k)>=0;};
j.prototype.

min=function(k){
return this.isBefore(k)?this:k;};
j.prototype.

max=function(k){
return this.isBefore(k)?k:this;};
j.prototype.

$TimeOfDay_set=function(k){
var l=this.toUTCDateOnArbitraryDay();

k.hour!=null&&l.setUTCHours(k.hour);
k.minute!=null&&l.setUTCMinutes(k.minute);
k.second!=null&&l.setUTCSeconds(k.second);

return j.fromUTCDate(l);};
j.prototype.

set=function(k){

k.hour==null||
k.hour>=0&&k.hour<=23||h(0,
'invalid hour');


k.minute==null||
k.minute>=0&&k.minute<=59||h(0,
'invalid minute');


k.second==null||
k.second>=0&&k.second<=59||h(0,
'invalid second');


return this.$TimeOfDay_set(k);};
j.prototype.

add=function(k){
var l=this.toUTCDateOnArbitraryDay();
k.hour&&
l.setUTCHours(l.getUTCHours()+k.hour);
k.minute&&
l.setUTCMinutes(l.getUTCMinutes()+k.minute);
k.second&&
l.setUTCSeconds(l.getUTCSeconds()+k.second);

return j.fromUTCDate(l);};
j.prototype.

subtract=function(k){

var l={};
for(var m in k)
l[m]=-k[m];


return this.add(l);};
j.prototype.

addHours=function(k){return this.add({hour:k});};j.prototype.
addMinutes=function(k){return this.add({minute:k});};j.prototype.
addSeconds=function(k){return this.add({second:k});};j.prototype.

subtractHours=function(k){return this.subtract({hour:k});};j.prototype.
subtractMinutes=function(k){return this.subtract({minute:k});};j.prototype.
subtractSeconds=function(k){return this.subtract({second:k});};j.prototype.

startOfHour=function(){return this.floor(c('PeriodUnit').hour);};j.prototype.
startOfMinute=function(){return this.floor(c('PeriodUnit').minute);};j.prototype.

floor=function(k){
switch(k){
case c('PeriodUnit').hour:
return this.set
({minute:0,
second:0});


case c('PeriodUnit').minute:
return this.set
({second:0});


case c('PeriodUnit').second:
return this;


default:h(0,'Invalid time based period unit %s',k);}};

j.prototype.

ceil=function(k){
var l=this.floor(k);
if(this.equals(l)){
return l;}else{

var m={};
m[k]=1;
return l.add(m);}};

j.prototype.





format=function(k,l){
return c('Instant').format(this.toInstantOnArbitraryDay(),k,l);};
j.prototype.





toString=function(){
return this.toISOString();};
j.prototype.

valueOf=function(){
return this.toSecondOfDay();};
j.prototype.




toISOString=function(){
return this.format
('H:i:s',
{skipPatternLocalization:true});};

j.




fromISOString=function(k){var l=

c('ISODateString').parseTimeComponents(k),m=l.hour,n=l.minute,o=l.second;
return j.create(m,n,o);};
j.prototype.

toSecondOfDay=function(){
return 3600*this.hour+60*this.minute+this.second;};
j.

fromSecondOfDay=function(k){
var l=k,

m=l%60;
l-=m;
l/=60;

var n=l%60;
l-=n;
l/=60;

return j.create(l,n,m);};
j.prototype.




toUTCDateOnArbitraryDay=function(){
return new Date(1000*this.toInstantOnArbitraryDay());};
j.





fromUTCDate=function(k){
return j.create
(k.getUTCHours(),
k.getUTCMinutes(),
k.getUTCSeconds());};

j.prototype.





toInstant=
function(k,
l){

var m=Date.UTC
(k.year,
k.month-1,
k.day,
this.hour,
this.minute,
this.second)/
1000;
return c('Instant').getParallel(m,l);};
j.prototype.




toInstantOnArbitraryDay=function(){
var k={year:2016,month:1,day:1};
return this.toInstant(k,i);};
j.




fromInstant=function(k,l){
var m=k+c('Instant').getOffset(k,l);
return j.fromUTCDate(new Date(1000*m));};
j.




fromDateTime=function(k){
var l=k.getFields();
return j.create
(l.hour,
l.minute,
l.second);};

j.




fromFBDate=function(k){
return j.create
(k.getHours(),
k.getMinutes(),
k.getSeconds());};

j.




fromLocalDateTime=function(k){
return j.create
(k.hour,
k.minute,
k.second);};

j.prototype.




toJSON=function(){
return this.toISOString();};
j.prototype.




fromJSON=function(k){
return j.fromISOString(k);};



f.exports=j;}),null);

/** js/components/core/common/TimeInput/AbstractTimeInput.react.js */







__d('AbstractTimeInput.react',['cx','fbt','AbstractTimeInputColumn.react','DateFormatConfig','React','TimeInputParser','TimeOfDay','UserAgent','joinClasses','nullthrows'],(function a(b,c,d,e,f,g,h,i){var j,k,






l=c('TimeInputParser').AM,m=c('TimeInputParser').PM,








n=c('React').PropTypes,


o=(c('DateFormatConfig').formats['g:ia']||'').indexOf('a')>=0,
p=new (c('TimeOfDay'))(0,0,0);j=babelHelpers.inherits



































































(q,c('React').Component);k=j&&j.prototype;function q(){var t,u;'use strict';for(var v=arguments.length,w=Array(v),x=0;x<v;x++)w[x]=arguments[x];return u=(t=k.constructor).call.apply(t,[this].concat(w)),this.













































































state=
{focused:false},this.





































































































































$AbstractTimeInput_onFocus=function(){
this.setState
({focused:true});


this.props.onFocus&&this.props.onFocus();}.
bind(this),this.

$AbstractTimeInput_onBlur=function(){
this.setState
({focused:false});


this.props.onBlur&&this.props.onBlur();}.
bind(this),this.





$AbstractTimeInput_onChange=function(y){
if(!this.props.onChangeValueAttempt)
return;
var z=



this.props,aa=z.minValue,ba=z.maxValue,ca=z.value;
if(ca&&y&&ba&&aa)
if(y.isAfter(ba)){
if(ca.equals(ba)){
y=aa;}else 

y=ba;}else

if(y.isBefore(aa))
if(ca.equals(aa)){
y=ba;}else 

y=aa;



this.props.onChangeValueAttempt(y);}.
bind(this),this.




$AbstractTimeInput_getValueOrDefault=function(){
return this.props.value||this.props.minValue||p;}.
bind(this),this.

$AbstractTimeInput_focusHours=function(){
this.refs.hours.focusInput();}.
bind(this),this.

$AbstractTimeInput_spinHours=function(y){
this.$AbstractTimeInput_onChange(this.$AbstractTimeInput_getValueOrDefault().addHours(y));}.
bind(this),this.

$AbstractTimeInput_typeHours=function(y){
if(y==null){
this.$AbstractTimeInput_onChange(y);
return;}


if(y===':')
this.$AbstractTimeInput_focusMinutes();


var z=this.$AbstractTimeInput_getValueOrDefault(),
aa=r(z),
ba=void 0;
if(o){
ba=s
(c('nullthrows')(aa.hours12),
y,
1,
12);


if(aa.meridiem===m&&ba!==12){
ba+=+12;}else
if(aa.meridiem===l&&ba===12)
ba=0;}else 


ba=s
(c('nullthrows')(aa.hours24),
y,
0,
23);



if(ba!=null)
this.$AbstractTimeInput_onChange(z.set({hour:ba}));}.

bind(this),this.

$AbstractTimeInput_focusMinutes=function(){
this.refs.minutes.focusInput();}.
bind(this),this.

$AbstractTimeInput_spinMinutes=function(y){
var z=this.props.spinMinutesInterval;
this.$AbstractTimeInput_onChange(this.$AbstractTimeInput_getValueOrDefault().addMinutes(z*y));}.
bind(this),this.

$AbstractTimeInput_typeMinutes=function(y){
if(y==null){
this.$AbstractTimeInput_onChange(y);
return;}


if(o&&(this.$AbstractTimeInput_matchesAM(y)||this.$AbstractTimeInput_matchesPM(y))){
this.$AbstractTimeInput_focusAMPM();
this.$AbstractTimeInput_typeMeridiem(y);
return;}


var z=this.$AbstractTimeInput_getValueOrDefault(),
aa=r(z),
ba=s
(c('nullthrows')(aa.minutes),
y,
0,
59);

if(ba!=null)
this.$AbstractTimeInput_onChange(z.set({minute:ba}));}.

bind(this),this.

$AbstractTimeInput_focusAMPM=function(){
this.refs.ampm.focusInput();}.
bind(this),this.

$AbstractTimeInput_spinMeridiem=function(y){
this.$AbstractTimeInput_onChange(this.$AbstractTimeInput_getValueOrDefault().addHours(12*y));}.
bind(this),this.

$AbstractTimeInput_matchesAM=function(y){
var z=y.toLowerCase();
return String(l).toLowerCase().startsWith(z);},
this.

$AbstractTimeInput_matchesPM=function(y){
var z=y.toLowerCase();
return String(m).toLowerCase().startsWith(z);},
this.





$AbstractTimeInput_typeMeridiem=function(y){
if(y==null){
this.$AbstractTimeInput_onChange(y);
return;}


var z=this.$AbstractTimeInput_matchesAM(y),
aa=this.$AbstractTimeInput_matchesPM(y);
if(!z&&!aa)
return;



if(!this.props.value){
var ba=c('TimeOfDay').create(z?0:12);
this.$AbstractTimeInput_onChange(ba);
return;}



var ca=r(this.props.value);

if(z&&ca.meridiem!==l||
aa&&ca.meridiem!==m)

this.$AbstractTimeInput_spinMeridiem(1);}.

bind(this),u;}q.prototype.render=function(){'use strict';var t=this.props,u=t.classNames,v=t.disabled,w=t.icon,x=t.placeholder,y=t.value,z=babelHelpers.objectWithoutProperties(t,['classNames','disabled','icon','placeholder','value']),aa=void 0,ba=void 0,ca=r(y),da=u.columnClassNames||{};if(o){aa=c('React').createElement(c('AbstractTimeInputColumn.react'),{className:u.meridiem,classNames:da,disabled:v,label:i._(["meridiem","02e8f4be790e3562344379f0e978b6f2"]),ref:'ampm',value:ca.meridiem,onBlur:this.$AbstractTimeInput_onBlur,onFocus:this.$AbstractTimeInput_onFocus,onFocusPrevAttempt:this.$AbstractTimeInput_focusMinutes,onSpin:this.$AbstractTimeInput_spinMeridiem,onType:this.$AbstractTimeInput_typeMeridiem});ba=c('React').createElement(c('AbstractTimeInputColumn.react'),{className:u.hours,classNames:da,disabled:v,label:i._(["hours","0ce807ea715d12206ce3f73a6fab8303"]),placeholder:x.hour,ref:'hours',value:ca.hours12,onBlur:this.$AbstractTimeInput_onBlur,onFocus:this.$AbstractTimeInput_onFocus,onFocusNextAttempt:this.$AbstractTimeInput_focusMinutes,onSpin:this.$AbstractTimeInput_spinHours,onType:this.$AbstractTimeInput_typeHours});}else{var ea=ca.hours24==null||ca.hours24>9?ca.hours24:'0'+ca.hours24;ba=c('React').createElement(c('AbstractTimeInputColumn.react'),{className:u.hours,classNames:da,disabled:v,label:i._(["hours","0ce807ea715d12206ce3f73a6fab8303"]),placeholder:x.hour,ref:'hours',value:ea,onBlur:this.$AbstractTimeInput_onBlur,onFocus:this.$AbstractTimeInput_onFocus,onFocusNextAttempt:this.$AbstractTimeInput_focusMinutes,onSpin:this.$AbstractTimeInput_spinHours,onType:this.$AbstractTimeInput_typeHours});}var fa=w?c('React').createElement('div',{className:u.icon},w):null,ga=c('joinClasses')(this.props.className,u.root,v?u.disabled:null,c('UserAgent').isBrowser('IE')?u.ie:null,this.state.focused?u.focused:null,y==null?u.placeholder:null),ha=ca.minutes==null||ca.minutes>9?ca.minutes:'0'+ca.minutes;return c('React').createElement('div',babelHelpers['extends']({},z,{'aria-atomic':true,'aria-live':'polite','aria-label':y?y.format('g:iA'):'',className:ga,role:'group'}),fa,c('React').createElement('div',{dir:'ltr',className:u.text},ba,c('React').createElement('span',{'aria-hidden':true,className:u.space},c('DateFormatConfig').timeSeparator),c('React').createElement(c('AbstractTimeInputColumn.react'),{className:u.minutes,classNames:da,disabled:v,label:i._(["minutes","8dd10caaf69d164ec29a22191505bef1"]),placeholder:x.minute,ref:'minutes',value:ha,onBlur:this.$AbstractTimeInput_onBlur,onFocus:this.$AbstractTimeInput_onFocus,onFocusNextAttempt:o?this.$AbstractTimeInput_focusAMPM:null,onFocusPrevAttempt:this.$AbstractTimeInput_focusHours,onSpin:this.$AbstractTimeInput_spinMinutes,onType:this.$AbstractTimeInput_typeMinutes}),aa));};q.propTypes={classNames:n.shape({columnClassNames:n.shape({column:n.string,columnBody:n.string,columnValue:n.string,focused:n.string,textInput:n.string}),disabled:n.string,focused:n.string,hours:n.string,icon:n.string,ie:n.string,meridiem:n.string,minutes:n.string,placeholder:n.string,root:n.string,space:n.string,text:n.string}).isRequired,disabled:n.bool,icon:n.element,maxValue:n.instanceOf(c('TimeOfDay')),minValue:n.instanceOf(c('TimeOfDay')),onBlur:n.func,onChangeValueAttempt:n.func,onFocus:n.func,placeholder:n.shape({hour:n.string,minute:n.string}),spinMinutesInterval:n.number,value:n.instanceOf(c('TimeOfDay'))};q.defaultProps={classNames:{columnClassNames:{column:"_4nww",columnBody:"_4nwx",columnValue:"_4nx3",textInput:"_4nx5"},disabled:"_4nx6",hours:"_4nx7",icon:"_4nx8",ie:"_4nx9",meridiem:"_4nxa",minutes:"_4nxe",root:"_4nxg",space:"_4nxh",text:"_4nxi"},placeholder:{hour:'',minute:''},spinMinutesInterval:1};






function r(t){
if(!t)
return {};


var u=t.hour%12;
u=u===0?12:u;


return {hours12:u,
hours24:t.hour,
meridiem:t.hour<12?l:m,
minutes:t.minute};}



function s
(t,
u,
v,
w){

if(isNaN(u)||u.length!==1)

return null;


var x=parseInt(u,10);
if(x>w)

return null;




var y=t*10+x;
if(y<=w)
return y>=v?y:null;



return x>=v?x:null;}


f.exports=q;}),null);

/** js/components/core/XUI/TimeInput/XUITimeInput.react.js */






__d('XUITimeInput.react',['cx','AbstractTimeInput.react','React','TimeInputParser','TimeOfDay','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';









var i=c('React').PropTypes,


j=c('TimeOfDay').create(12),

k=babelHelpers['extends']({},
c('AbstractTimeInput.react').defaultProps.classNames,
{columnClassNames:babelHelpers['extends']({},
c('AbstractTimeInput.react').defaultProps.classNames.columnClassNames,
{column:"_4nww _5pw0",
columnValue:"_4nx3 _5pw6",

focused:"_5pw1"}),

disabled:"_4nx6 _5o9l",

focused:"_5pwl",
space:"_4nxh _5pwa"});



function l(r){

var s=





r.maxTime,t=r.minTime,u=r.onChangeValueAttempt,v=r.shouldSetDefaultTime,w=r.time,x=babelHelpers.objectWithoutProperties(r,['maxTime','minTime','onChangeValueAttempt','shouldSetDefaultTime','time']),
y=m(w);
if(y===null&&v)
y=j;



return (c('React').createElement(c('AbstractTimeInput.react'),babelHelpers['extends']({},
x,
{className:c('joinClasses')(r.className,"_5pw9"),
classNames:k,
maxValue:m(s),
minValue:m(t),
onChangeValueAttempt:u&&
function(z){
z!=null&&u(z.valueOf());},

value:y})));}




function m(r){
var s=isNaN(r)?null:c('TimeInputParser').fromTime(r);
if(s!==null)
s=c('TimeOfDay').create(s.hours24,s.minutes);

return s;}
var n=





c('AbstractTimeInput.react').propTypes,o=n.classNames,p=n.value,q=babelHelpers.objectWithoutProperties(n,['classNames','value']);

void o;
void p;

l.propTypes=babelHelpers['extends']({},
q,




{maxTime:i.number,
minTime:i.number,




onChangeValueAttempt:i.func,




shouldSetDefaultTime:i.bool,




time:i.number});


f.exports=l;}),null);

/** js/feed/FeedPlaceHolderStory.react.js */





__d('FeedPlaceHolderStory.react',['cx','Locale','React','XUICard.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits








(k,c('React').Component);j=i&&i.prototype;k.prototype.
render=function(){'use strict';

return (c('React').createElement(c('XUICard.react'),
{className:c('joinClasses')
("_2iwp",
this.props.className)},

c('React').createElement('div',
{className:
(c('Locale').isRTL()?"direction_rtl":'')+(' '+"_2iwo")},


c('React').createElement('div',{className:"_2iwq"},
c('React').createElement('div',{className:"_2iwr"}),
c('React').createElement('div',{className:"_2iws"}),
c('React').createElement('div',{className:"_2iwt"}),
c('React').createElement('div',{className:"_2iwu"}),
c('React').createElement('div',{className:"_2iwv"}),
c('React').createElement('div',{className:"_2iww"}),
c('React').createElement('div',{className:"_2iwx"}),
c('React').createElement('div',{className:"_2iwy"}),
c('React').createElement('div',{className:"_2iwz"}),
c('React').createElement('div',{className:"_2iw-"}),
c('React').createElement('div',{className:"_2iw_"}),
c('React').createElement('div',{className:"_2ix0"})))));};




function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** js/insights/utils/InsightsApiClient.js */




__d('InsightsApiClient',['ApiClient','PHPQuerySerializer'],(function a(b,c,d,e,f,g){




var h={};
function i(k,l,m){
if(m&&!m.error)
h[k]=m;


l(m);}







var j=
{getRaw:function k(l,m,n,o,p,q){
var r=m+c('PHPQuerySerializer').serialize(n);
if(Object.prototype.hasOwnProperty.call(h,r)&&!q){


setTimeout(o.bind(null,h[r]),0);}else{

if(Object.prototype.hasOwnProperty.call(l,'accessToken'))
n.access_token=l.accessToken;






c('ApiClient').graph
(m,
n,
i.bind(null,r,o),
p);}}};





f.exports=j;}),null);

/** js/modules/CubicBezier.js */





__d("CubicBezier",[],(function a(b,c,d,e,f,g){

var h=.005;










function i
(j,
k){
"use strict";
this.cx=3*j[0];
this.bx=3*(k[0]-j[0])-this.cx;
this.ax=1-this.cx-this.bx;
this.cy=3*j[1];
this.by=3*(k[1]-j[1])-this.cy;
this.ay=1-this.cy-this.by;}
i.prototype.

sampleCurveX=function(j){"use strict";
return ((this.ax*j+this.bx)*j+this.cx)*j;};
i.prototype.

solve=function(j){"use strict";
j=this.solveCurveX(j);
return ((this.ay*j+this.by)*j+this.cy)*j;};
i.prototype.

solveCurveX=function(j){"use strict";
var k,
l,
m,
n,
o,
p;

for(o=j,l=0;l<8;l++){
p=this.sampleCurveX(o)-j;
if(Math.abs(p)<h)
return o;


k=(3*this.ax*o+2*this.bx)*o+this.cx;
if(Math.abs(k)<1e-06)
break;


o-=p/k;}


m=0;
n=1;
o=j;

if(o<m)
return m;


if(o>n)
return n;


while(m<n){
p=this.sampleCurveX(o);
if(Math.abs(p-j)<h)
return o;


if(j>p){
m=o;}else 

n=o;


o=(n-m)/2+m;}


return o;};



f.exports=i;}),null);

/** js/ui/layer/LayerPage.js */





__d('LayerPage',['Arbiter','CSS','DOM','Layer','LayerButtons','LayerFormHooks','LayerHideOnTransition','LayerMouseHooks','LayerTabIsolation','ModalLayer','Style'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits













(j,c('Layer'));i=h&&h.prototype;j.prototype.
_configure=function(n,o){'use strict';
this._fitWidth=!!n.fitWidth;

if(n.width){
this._width=Math.floor(n.width);}else 

this._width=null;


if(n.bottomMargin!==undefined){
this._bottomMargin=n.bottomMargin;}else 

this._bottomMargin=null;


i._configure.call(this,n,o);};
j.prototype.

_getDefaultBehaviors=function(){'use strict';
return i._getDefaultBehaviors.call(this).concat
([m,c('LayerButtons'),c('LayerFormHooks'),c('LayerHideOnTransition'),c('LayerMouseHooks'),c('LayerTabIsolation'),c('ModalLayer')]);};







j.prototype.




_buildWrapper=function(n,o){'use strict';
return c('DOM').create('div',null,o);};
j.prototype.

updatePosition=function(){'use strict';
var n=c('DOM').find(this.getRoot(),'div.uiLayerPage');

if(this._fitWidth){
c('Style').set(n,'width',l+'%');}else
if(this._width){
var o=c('DOM').find(n,'div.uiLayerPageContentWrap'),
p=this._width;
if(c('CSS').hasClass(o,'uiLayerPageDefaultPadding'))
p+=2*k;

c('Style').set(n,'width',p+'px');}

return true;};
j.prototype.

getContentRoot=function(){'use strict';
if(!this._contentRoot)
this._contentRoot=c('DOM').find(this.getRoot(),'.uiOverlayContent');

return this._contentRoot;};
j.prototype.

getBottomMargin=function(){'use strict';
return this._bottomMargin;};
function j(){'use strict';h.apply(this,arguments);}


var k=15,


l=95;






function m(n){'use strict';
this._layer=n;
this._subscription=null;}
m.prototype.

enable=function(){'use strict';
this._subscription=this._layer.subscribe
(['show','hide'],
function(n,o){
if(n==='show'){
c('Arbiter').inform('layer_shown',{type:'LayerPage'});}else 

c('Arbiter').inform('layer_hidden',{type:'LayerPage'});});};



m.prototype.

disable=function(){'use strict';
this._subscription.unsubscribe();
this._subscription=null;};



f.exports=j;}),null);

/** shared/candela/components/CandelaInteractivePoint.react.js */






__d('CandelaInteractivePoint.react',['Circle.art','CandelaConstants','CandelaInteractiveMixin','React'],(function a(b,c,d,e,f,g){

'use strict';






var h=c('CandelaConstants').Event,
i=c('React').PropTypes,










j=c('React').createClass({displayName:'CandelaInteractivePoint',

mixins:[c('CandelaInteractiveMixin')],

propTypes:



{hoverStyle:i.object,




proximityStyle:i.object,




radius:i.number,




style:i.object,




x:i.number.isRequired,




y:i.number.isRequired},


getDefaultProps:function k(){

return {style:{}};},



getInitialState:function k(){

return {hover:false,
proximity:false};},



_attachListeners:function k(){var l=
this.props,m=l.hoverStyle,n=l.proximityStyle;


if(m){
this._attachSelfListener(h.SHAPE_ENTER,this._handleShapeEnter);
this._attachSelfListener(h.SHAPE_LEAVE,this._handleShapeLeave);}


if(n){
this._attachSelfListener
(h.SHAPE_ENTER_PROXIMITY,
this._handleShapeEnterProximity);


this._attachSelfListener
(h.SHAPE_LEAVE_PROXIMITY,
this._handleShapeLeaveProximity);}},







_handleShapeEnter:function k(l){
this.setState
({hover:true});},






_handleShapeEnterProximity:function k(l){
this.setState
({proximity:true});},






_handleShapeLeave:function k(l){
this.setState
({hover:false});},






_handleShapeLeaveProximity:function k(l){
this.setState
({proximity:false});},







_resolveStyleProp:function k(l){var m=
this.state,n=m.hover,o=m.proximity,p=
this.props,q=p.hoverStyle,r=p.proximityStyle,s=p.style;

if(n&&q&&q[l]!==undefined){
return q[l];}else

if(o&&r&&r[l]!==undefined){

return r[l];}else
if(s){
return s[l];}else 

return null;},



_buildPathImpl:function k(){var l=
this.props,m=l.radius,n=l.x,o=l.y,
p=m||Number(this._resolveStyleProp('radius'));

this.addCommand('ellipse',n,o,p,p);},


render:function k(){var l=
this.props,m=l.radius,n=l.x,o=l.y,
p=m||Number(this._resolveStyleProp('radius')),
q=this._resolveStyleProp('fill'),
r=this._resolveStyleProp('opacity'),
s=this._resolveStyleProp('stroke'),
t=this._resolveStyleProp('strokeWidth');

if(!q&&!s)
return null;








return (c('React').createElement(c('Circle.art'),
{fill:q,
opacity:r,
radius:p,
stroke:s,
strokeWidth:t,
x:n,
y:o}));}});





f.exports=j;}),null);

/** shared/candela/components/CandelaLines.react.js */






__d('CandelaLines.react',['CandelaCategoryScale','CandelaConstants','CandelaGlobalThemeRegistry','immutable','CandelaInteractivePath.react','CandelaPureRenderMixin','React','ReactART','CandelaResizeScalesMixin','CandelaStructs','CandelaTheme','CandelaUtils','getObjectValues'],(function a(b,c,d,e,f,g){

'use strict';


















var h=c('ReactART').ClippingRectangle,i=c('ReactART').Group,
j=c('immutable').Map,k=c('immutable').OrderedSet,l=c('immutable').Set,
m=c('React').PropTypes,

n=c('CandelaConstants').Attribute,
o=c('CandelaConstants').Placement,
p=c('CandelaConstants').PseudoClass,
q=c('CandelaConstants').ShapeType,
r=c('CandelaConstants').Style,
s=c('CandelaConstants').Visibility,

t=c('CandelaStructs').Threshold,u=













c('CandelaUtils').data,v=u.classNamesToSelector,w=u.computeHighlightPseudoClass,x=u.getClassNamesFromDataRow,y=u.getClassNamesFromInputString;

c('CandelaGlobalThemeRegistry').register
({type:q.LINE,
attributes:[n.PLACEMENT,n.SERIES],
pseudoClasses:
[p.GREATER_THAN,
p.HIGHLIGHTED,
p.HOVER,
p.LESS_THAN,
p.MUTED,
p.PROXIMITY],

styles:
[r.OPACITY,
r.STROKE,
r.STROKE_DASHARRAY,
r.STROKE_WIDTH]});



var z=c('React').createClass({displayName:'CandelaLines',

mixins:[c('CandelaPureRenderMixin'),c('CandelaResizeScalesMixin')],

contextTypes:








{data:m.instanceOf(k),





scales:m.object,






schema:m.instanceOf(j),




theme:m.instanceOf(c('CandelaTheme'))},


propTypes:





{height:m.number.isRequired,










highlights:m.instanceOf(l),




placement:m.oneOf(c('getObjectValues')(o)),




plotX:m.string.isRequired,




plotY:m.instanceOf(k).isRequired,








threshold:m.instanceOf(t),





width:m.number.isRequired,





x:m.number.isRequired,





y:m.number.isRequired},


getDefaultProps:function aa(){

return {height:0,
placement:o.NONE,
width:0,
x:0,
y:0};},







_createPaths:function aa(ba){var ca=
this.props,da=ca.highlights,ea=ca.plotX,fa=ca.plotY,
ga=this.scales,

ha={},
ia=[],

ja={},
ka=void 0,

la=ga[ea],
ma=la instanceof c('CandelaCategoryScale')?
Math.round(la.props.outputStepInterval/2):
0;

ba.forEach(function(na,oa){
var pa=ba[oa+1],
qa=x(pa),
ra=ka!=null&&
!ka.equals(qa),
sa=la.convert(na[ea])+ma;

fa.forEach(function(ta){
var ua=na[ea]===null,
va=ta.size>1&&

(ua||
ta.some(function(xa){return na[xa]===null;}));



if(ua||va){
ta.forEach(function(xa){return ha[xa]=null;});
return;}


var wa=0;
ta.forEach(function(xa){


if(na[xa]===undefined)
return;



if(na[xa]===null){
ha[xa]=null;
return;}


var ya=void 0;
if(pa){
var za=w
(da,
xa,
pa[ea]);

ya=l([za]);}else 

ya=l();

var ab=ja[xa]!=null&&
!ja[xa].equals(ya);

if(!ha[xa]){
var bb=
{classNames:qa,
points:[],
pseudoClasses:ya,
seriesName:xa};

ha[xa]=bb;
ia.push(bb);}

var cb=ga[xa],
db=cb instanceof c('CandelaCategoryScale')?
Math.round(cb.props.outputStepInterval/2):
0;
wa+=na[xa];
var eb=
{x:sa,
y:cb.convert(wa)+db};

ha[xa].points.push(eb);

if(oa!==ba.length-1&&
(ra||ab)){

var fb=
{classNames:qa,
points:[eb],
pseudoClasses:ya,
seriesName:xa};

ha[xa]=fb;
ia.push(fb);}


ja[xa]=ya;});});



ka=qa;});


return ia;},






_handleShapeEvent:function aa(ba,ca,event){
var da=this.props.plotX,
ea=event.x,fa=event.y,
ga=this.scales,
ha=ga[da],
ia=ga[ba],

ja={};
ja[da]=
{scale:ha,
value:ha.invert(ea)};

ja[ba]=
{scale:ia,
value:ia.invert(fa)};


event.target=ca;
event.data=babelHelpers['extends']({},event.data,ja);},










_renderLines:function aa
(ba,
ca,
da,
ea){
var fa=
this.context,ga=fa.schema,ha=fa.theme,ia=
this.props,ja=ia.placement,ka=ia.threshold,
la=ka?
y(ka.get('className')):
l(),
ma=0,

na=ba.map(function(oa,pa){
var qa=oa.classNames,ra=oa.seriesName,
sa=oa.points,ta=oa.pseudoClasses;

ta=ta.add(ea);

var ua=y
(ga.get(ra).className),

va=v
(qa.union(ua).union(la)),

wa=
ga.get(ra).comparisonFor||
ga.get(ra).intervalOf||
ra,

xa=
q.LINE+
va+('[series="'+
wa+'"]')+('[placement="'+

ja+'"]')+
ta.join(''),

ya=ha.getHoverStyle(xa),
za=ha.getProximityStyle(xa),
ab=ha.getStyle(xa);

if(ab.visibility===s.HIDDEN)
return null;




if(sa.length===1){
var bb=sa[0];
sa=
[{x:bb.x-ab.strokeWidth,
y:bb.y},

{x:bb.x+ab.strokeWidth,
y:bb.y}];}


ma=Math.max(ma,ab.strokeWidth);

var cb=void 0,
db=void 0;
if(da){
var eb=
{shapeType:q.LINE,
style:ab},

fb=babelHelpers['extends']({},eb,{style:ya});
cb=
this._handleShapeEvent.bind(this,ra,eb);
db=
this._handleShapeEvent.bind(this,ra,fb);}



return (c('React').createElement(c('CandelaInteractivePath.react'),
{addHitRegion:da,
hoverStyle:ya,
key:ra+'-line-'+pa,
onShapeClick:db,
onShapeDown:db,
onShapeEnter:cb,
onShapeLeave:db,
onShapeUp:db,
points:sa,
proximityStyle:za,
regionID:ra+'-line',
style:ab}));}.


bind(this),this);



switch(ea){
case p.NONE:
ca.height+=ma;
ca.y-=ma/2;
break;



case p.GREATER_THAN:
ca.height+=ma/2;
ca.y-=ma/2;
break;
case p.LESS_THAN:
ca.height+=ma/2;
break;}



return (c('React').createElement(h,
ca,
na));},




render:function aa(){
var ba=this.context.data,ca=







this.props,da=ca.height,ea=ca.plotY,fa=ca.threshold,ga=ca.width,ha=ca.x,ia=ca.y,

ja=this._createPaths(ba.toArray());

if(fa){

var ka=ea.first().first(),
la=
this.scales[ka].convert(fa.get('value')),

ma=
{height:la-ia,
width:ga,
x:ha,
y:ia},

na=
{height:ia+da-la,
width:ga,
x:ha,
y:la};



return (c('React').createElement(i,null,
this._renderLines
(ja,
ma,
true,
p.GREATER_THAN),

this._renderLines
(ja,
na,
false,
p.LESS_THAN)));}else 




return this._renderLines
(ja,
{height:da,width:ga,x:ha,y:ia},
true,
p.NONE);}});





f.exports=z;}),null);

/** shared/candela/components/CandelaPoints.react.js */






__d('CandelaPoints.react',['invariant','CandelaCategoryScale','CandelaConstants','CandelaGlobalThemeRegistry','immutable','CandelaInteractivePoint.react','CandelaPureRenderMixin','React','ReactART','CandelaResizeScalesMixin','CandelaStructs','CandelaTheme','CandelaUtils','forEachObject','getObjectValues'],(function a(b,c,d,e,f,g,h){

'use strict';



















var i=c('CandelaConstants').Attribute,
j=c('CandelaConstants').Placement,
k=c('CandelaConstants').PseudoClass,
l=c('CandelaConstants').ShapeType,
m=c('CandelaConstants').Style,
n=c('CandelaConstants').Visibility,

o=c('ReactART').Group,
p=c('immutable').Map,q=c('immutable').Set,r=c('immutable').OrderedSet,
s=c('React').PropTypes,
t=c('CandelaStructs').Threshold,u=






c('CandelaUtils').data,v=u.classNamesToSelector,w=u.computeHighlightPseudoClass,x=u.getClassNamesFromDataRow,y=u.getClassNamesFromInputString;

c('CandelaGlobalThemeRegistry').register
({type:l.POINT,
attributes:[i.PLACEMENT,i.SERIES],
pseudoClasses:
[k.EQUAL_TO,
k.DENSE,
k.GREATER_THAN,
k.HIGHLIGHTED,
k.HOVER,
k.LESS_THAN,
k.MUTED,
k.PROXIMITY],

styles:
[m.FILL,
m.OPACITY,
m.STROKE,
m.STROKE_WIDTH]});



var z=c('React').createClass({displayName:'CandelaPoints',

mixins:[c('CandelaPureRenderMixin'),c('CandelaResizeScalesMixin')],

contextTypes:








{data:s.instanceOf(r),





scales:s.object,






schema:s.instanceOf(p),




theme:s.instanceOf(c('CandelaTheme'))},


propTypes:





{height:s.number,







highlights:s.instanceOf(q),





minDensityThreshold:s.number,




placement:s.oneOf(c('getObjectValues')(j)),




plotX:s.string.isRequired,




plotY:s.instanceOf(r).isRequired,




plotSize:s.string,





threshold:s.instanceOf(t),





width:s.number,





x:s.number.isRequired,





y:s.number.isRequired},


getDefaultProps:function aa(){

return {height:0,
highlights:q(),
placement:j.NONE,
width:0,
x:0,
y:0};},







_createPaths:function aa(ba){


var ca=
this.props,da=ca.highlights,ea=ca.plotX,fa=ca.plotY,
ga=this.scales,

ha={},
ia={},
ja={},

ka=ga[ea],
la=ka instanceof c('CandelaCategoryScale')?
Math.round(ka.props.outputStepInterval/2):
0;

ba.forEach(function(ma){
var na=x(ma),
oa=ka.convert(ma[ea])+la;

fa.forEach(function(pa){
var qa=ma[ea]===null,
ra=pa.size>1&&

(qa||
pa.some(function(ta){return ma[ta]===null;}));



if(qa||ra)
return;


var sa=0;
pa.forEach(function(ta){


if(ma[ta]==null)
return;

if(!ia[ta])
ia[ta]=[];

var ua=ga[ta],
va=ua instanceof c('CandelaCategoryScale')?
Math.round(ua.props.outputStepInterval/2):
0;
sa+=ma[ta];

var wa=w
(da,
ta,
ma[ea]),

xa=q([wa]),

ya=
{pseudoClasses:xa,
x:oa,
y:ua.convert(sa)+va};


ia[ta].push
({classNames:na,
point:ya,
row:ma});

if(ja[ta]!=null){
if(ha[ta]==null)
ha[ta]=Infinity;

ha[ta]=Math.min
(ha[ta],
Math.abs(oa-ja[ta]));}


ja[ta]=oa;});});});





return {minDensities:ha,
paths:ia};},







_handleShapeEvent:function aa
(ba,
ca,
da,
event){
var ea=
this.props,fa=ea.plotSize,ga=ea.plotX,
ha=this.scales,
ia=ha[ga],
ja=ha[ca],

ka={};
ka[ga]=
{scale:ia,
value:ba[ga]};

ka[ca]=
{scale:ja,
value:ba[ca]};


if(fa&&ba[fa]!=null)
ka[fa]=
{scale:ha[fa],
value:ba[fa]};



event.target=da;
event.data=babelHelpers['extends']({},event.data,ka);},


render:function aa(){var ba=
this.context,ca=ba.data,da=ba.schema,ea=ba.theme,fa=





this.props,ga=fa.minDensityThreshold,ha=fa.placement,ia=fa.plotSize,ja=fa.threshold,ka=

this._createPaths(ca),la=ka.minDensities,ma=ka.paths,

na=[];

c('forEachObject')(ma,function(oa,pa){
var qa=k.NONE;

if(ga!=null&&
la[pa]<ga)

qa=k.DENSE;


var ra=l.POINT+('[series="'+
pa+'"]')+('[placement="'+

ha+'"]')+
qa,

sa=ea.getStyle(ra);
if(sa.visibility!==n.VISIBLE)
return;


var ta=y
(da.get(pa).className);


oa.forEach(function(ua,va){var wa=ua.classNames,xa=ua.point,ya=ua.row,
za=ya[pa],
ab=k.NONE;
if(ja){
var bb=ja.get('value');
if(za>bb){
ab=k.GREATER_THAN;}else
if(za===bb){
ab=k.EQUAL_TO;}else 

ab=k.LESS_THAN;}


var cb=xa.pseudoClasses.add(ab),

db=ja?
y(ja.get('className')):
q(),

eb=wa.
union(ta).
union(db),

fb=ra+
v(eb)+
cb.join(''),

gb=ea.getHoverStyle(fb),
hb=ea.getProximityStyle(fb),
ib=ea.getStyle(fb),

jb=
{shapeType:l.POINT,
style:ib},

kb=babelHelpers['extends']({},jb,{style:gb}),
lb=
this._handleShapeEvent.bind(this,ya,pa,jb),
mb=
this._handleShapeEvent.bind(this,ya,pa,kb),

nb=void 0;
if(ia&&ya[ia]!=null){
var ob=this.context.scales[ia];

ob.props.output||h(0,
'Output must be specified for plotSize');

nb=Math.sqrt(ob.convert(ya[ia])/Math.PI);
if(ob.props.roundOutput)
nb=Math.round(nb*2)/2;}



na.push
(c('React').createElement(c('CandelaInteractivePoint.react'),babelHelpers['extends']({},
xa,
{hoverStyle:gb,
key:pa+'-point-'+va,
onShapeClick:mb,
onShapeDown:mb,
onShapeEnter:lb,
onShapeLeave:mb,
onShapeUp:mb,
proximityStyle:hb,
radius:nb,
regionID:pa+'-point'+va,
style:ib})));}.


bind(this));}.
bind(this));


return (c('React').createElement(o,null,
na));}});





f.exports=z;}),null);
