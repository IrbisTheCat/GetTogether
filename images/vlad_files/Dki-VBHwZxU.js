if (self.CavalryLogger) { CavalryLogger.start_js(["z75Ga"]); }

/** __static_js_modules__/localeswitchingreferrers.js */




__d("LocaleSwitchingReferrers",[],(function a(b,c,d,e,f,g){

f.exports={CARRY_LOGOUT_LOGIN:"carry_logout_login",FB4B_GLOBAL_SITES_DIALOG:"fb4b_global_sites_dialog",FB4B_GLOBAL_SITES_FOOTER:"fb4b_global_sites_footer",IGB_GLOBAL_SITES_FOOTER:"igb_global_sites_footer",LOCALE_SWITCH_SCRIPT:"locale_switch_script",M_TOUCH_LOCALE_SELECTOR:"m_touch_locale_selector",M_BASIC_LOCALE_FOOTER:"m_basic_locale_footer",MOBILE_ACCOUNT_SETTINGS:"mobile_account_settings",MOBILE_CHROME_JP_FOOTER:"mobile_chrome_jp_footer",MOBILE_FB4B_GLOBAL_SITES_FOOTER:"mobile_fb4b_global_sites_footer",MOBILE_FB4B_GLOBAL_SITES_PAGE_VIEW:"mobile_fb4b_global_sites_page_view",MOBILE_HELP_CENTER_SEARCH:"mobile_help_center_search",MOBILE_LOCALE_CHANGED_NOTICE:"mobile_locale_changed_notice",MOBILE_LOCALE_LINKS:"mobile_locale_links",MOBILE_SUGGESTED_LOCALE_SELECTOR:"mobile_suggested_locale_selector",MOBILE_SWITCH_LANGUAGE_HEADER:"mobile_switch_language_header",SAFETY_CENTER_GLOBAL_SITES_FOOTER:"fbsc_global_sites_footer",SITEMAP:"sitemap",QP_PROMO:"qp_promo",WWW_ACCOUNT_SETTINGS:"www_account_settings",WWW_CARD_SELECTOR:"www_card_selector",WWW_CARD_SELECTOR_MORE:"www_card_selector_more",WWW_DEV_SITE:"www_dev_site",WWW_HELP_INLINE_SELECTOR:"www_help_inline_selector",WWW_I18N_NUB:"www_i18n_nub",WWW_LANGUAGE_PAGE:"www_language_page",WWW_LINK_DIALOG_SELECTOR:"www_link_dialog_selector",WWW_LIST_SELECTOR:"www_list_selector",WWW_LIST_SELECTOR_MORE:"www_list_selector_more",WWW_MANDATORY_LOCALE_SELECTION_POST:"www_mandatory_locale_selection_post",WWW_TRANS_APP_INCONSISTENT:"www_trans_app_inconsistent",FBCOLUMN_FOOTER:"fbcolumn_footer",WWW_LOGIN_BLUE_BAR:"www_login_blue_bar_nub",OTHER:"other"};}),

null);

/** js/ModuleDependencies.js */




__d('ModuleDependencies',['__debug'],(function a(b,c,d,e,f,g){




function h(l,m,n){
var o=c('__debug').modulesMap[n],
p=c('__debug').deps;

if(m[n])

return;

m[n]=true;

if(!o){

p[n]&&(l[n]=true);
return;}


if(!o.dependencies||!o.dependencies.length){

if(o.waiting)

l[n]=true;


return;}


o.dependencies.forEach(function(q){
h(l,m,q);});}



function i(l){
var m={};
h(m,{},l);

var n=Object.keys(m);
n.sort();
return n;}


function j(){
var l={loading:{},missing:[]},

m={},
n=c('__debug').getModules(),
o=c('__debug').deps;

for(var p in n){
var q=n[p];
if(q.waiting){
var r={};
h(r,{},q.id);
delete r[q.id];
l.loading[q.id]=Object.keys(r);
l.loading[q.id].sort();
l.loading[q.id].forEach(function(s){
if(!(s in n)&&o[s])
m[s]=1;});}}





l.missing=Object.keys(m);
l.missing.sort();
return l;}


var k=
{getMissing:i,
getNotLoadedModules:j};


f.exports=k;}),null);

/** js/ModuleErrorLogger.js */





__d('ModuleErrorLogger',['Bootloader','ErrorUtils','ModuleDependencies','BanzaiScuba'],(function a(b,c,d,e,f,g){






function h(k){
if(!k||!k.length)
return 0;


return k.reduce(function(l,m){return l+m;})/k.length;}


function i(k){
if(!k)
return [];


var l=[];
for(var m in k)
l.push(k[m]);

return l;}


var j=

{init:function k(){
c('ErrorUtils').addListener(function(l){
if(l.name!=='ModuleError')
return;

var m=c('ModuleDependencies').getNotLoadedModules(),
n=Object.keys(m.loading),
o=i(c('Bootloader').getLoadingUrls()),
p=i(c('Bootloader').getLoadedUrlTimes()),

q={};
m.missing.forEach(function(t){
q[t]=1;});


var r={};
n.forEach(function(t){
r[t]=1;});


var s=new (c('BanzaiScuba'))
('module_errors',
null,

{addAsnFields:true,
addPredictedGeographyFields:true,
addBrowserFields:true,
addMobileDeviceFields:true,
addPageFields:true,
addUserFields:true});


s.addNormal('message',l.message).
addInteger('missing_count',m.missing.length).
addInteger('loading_count',n.length).
addInteger('error_url_count',c('Bootloader').getErrorUrls().length).
addTagset('missing_modules',q).
addTagset('loading_modules',r).
addInteger
('mean_url_loading_time',
Math.floor(h(o))).

addInteger
('mean_url_loaded_time',
Math.floor(h(p))).

post();},
true);}};



f.exports=j;}),null);

/** js/ResetScrollOnUnload.js */






__d('ResetScrollOnUnload',['Run'],(function a(b,c,d,e,f,g){



var h=








{disableScrollRestoration:function i(){
c('Run').onUnload(function(){
window.history.scrollRestoration='manual';});},




init:function i(j){

c('Run').onUnload(function(){
window.history.scrollRestoration='manual';




j.style.opacity='0';
window.scrollTo(0,0);});}};




f.exports=h;}),null);

/** js/logging/generated/AccessibilityWebAssistiveTechTypedLogger.js */





__d('AccessibilityWebAssistiveTechTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:AccessibilityWebAssistiveTechLoggerConfig',this.$AccessibilityWebAssistiveTechTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:AccessibilityWebAssistiveTechLoggerConfig',this.$AccessibilityWebAssistiveTechTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$AccessibilityWebAssistiveTechTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$AccessibilityWebAssistiveTechTypedLogger_data=babelHelpers['extends']({},
this.$AccessibilityWebAssistiveTechTypedLogger_data,
j);

return this;};
h.prototype.




setIndicatedBrowsers=function(j){
this.$AccessibilityWebAssistiveTechTypedLogger_data.indicated_browsers=c('GeneratedLoggerUtils').serializeVector(j);
return this;};
h.prototype.





setIsVirtualCursorAction=function(j){
this.$AccessibilityWebAssistiveTechTypedLogger_data.is_virtual_cursor_action=j;
return this;};
h.prototype.




setVC=function(j){
this.$AccessibilityWebAssistiveTechTypedLogger_data.vc=j;
return this;};
h.prototype.




updateExtraData=function(j){
j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));
c('GeneratedLoggerUtils').checkExtraDataFieldNames
(j,
i);

this.$AccessibilityWebAssistiveTechTypedLogger_data=babelHelpers['extends']({},
this.$AccessibilityWebAssistiveTechTypedLogger_data,
j);

return this;};
h.prototype.




addToExtraData=function(j,k){
var l={};
l[j]=k;
return this.updateExtraData(l);};










var i=
{indicated_browsers:true,
is_virtual_cursor_action:true,
vc:true};


f.exports=h;}),null);

/** js/accessibility/AccessibilityWebVirtualCursorClickLogger.js */





__d('AccessibilityWebVirtualCursorClickLogger',['AccessibilityWebAssistiveTechTypedLogger','VirtualCursorStatus'],(function a(b,c,d,e,f,g){







var h=

{init:function i(j){
j.forEach(function(k){
c('VirtualCursorStatus').add(k,this._log);}.
bind(this),this);},

_log:function i
(j,
k){

var l=arguments.length<=2||arguments[2]===undefined?false:arguments[2];



if(j)
new (c('AccessibilityWebAssistiveTechTypedLogger'))().
setIndicatedBrowsers(k).
setIsVirtualCursorAction(l).
log();}};




f.exports=h;}),null);

/** js/logging/generated/BootloaderEventsTypedLogger.js */





__d('BootloaderEventsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('bootloader_events:BootloaderEventsLoggerConfig',this.$BootloaderEventsTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('bootloader_events:BootloaderEventsLoggerConfig',this.$BootloaderEventsTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$BootloaderEventsTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$BootloaderEventsTypedLogger_data=babelHelpers['extends']({},
this.$BootloaderEventsTypedLogger_data,
j);

return this;};
h.prototype.




setAllResourcesCount=function(j){
this.$BootloaderEventsTypedLogger_data.all_resources_count=j;
return this;};
h.prototype.




setAllResourcesDownloaded=function(j){
this.$BootloaderEventsTypedLogger_data.all_resources_downloaded=j;
return this;};
h.prototype.




setAsyncResourcesCount=function(j){
this.$BootloaderEventsTypedLogger_data.async_resources_count=j;
return this;};
h.prototype.




setAsyncResourcesDownloaded=function(j){
this.$BootloaderEventsTypedLogger_data.async_resources_downloaded=j;
return this;};
h.prototype.




setBlEndpointMode=function(j){
this.$BootloaderEventsTypedLogger_data.bl_endpoint_mode=j;
return this;};
h.prototype.




setBlSampleRate=function(j){
this.$BootloaderEventsTypedLogger_data.bl_sample_rate=j;
return this;};
h.prototype.




setBlockingResourcesCount=function(j){
this.$BootloaderEventsTypedLogger_data.blocking_resources_count=j;
return this;};
h.prototype.




setBlockingResourcesDownloaded=function(j){
this.$BootloaderEventsTypedLogger_data.blocking_resources_downloaded=j;
return this;};
h.prototype.




setCavalryBlCohort=function(j){
this.$BootloaderEventsTypedLogger_data.cavalry_bl_cohort=j;
return this;};
h.prototype.




setCavalryCohort=function(j){
this.$BootloaderEventsTypedLogger_data.cavalry_cohort=j;
return this;};
h.prototype.




setComponents=function(j){
this.$BootloaderEventsTypedLogger_data.components=c('GeneratedLoggerUtils').serializeVector(j);
return this;};
h.prototype.




setDuration=function(j){
this.$BootloaderEventsTypedLogger_data.duration=j;
return this;};
h.prototype.




setErrCount=function(j){
this.$BootloaderEventsTypedLogger_data.err_count=j;
return this;};
h.prototype.




setFirstIdenticalRequest=function(j){
this.$BootloaderEventsTypedLogger_data.first_identical_request=j;
return this;};
h.prototype.





setHasNewComponent=function(j){
this.$BootloaderEventsTypedLogger_data.has_new_component=j;
return this;};
h.prototype.




setIsEmployee=function(j){
this.$BootloaderEventsTypedLogger_data.is_employee=j;
return this;};
h.prototype.




setMsSinceNavstart=function(j){
this.$BootloaderEventsTypedLogger_data.ms_since_navstart=j;
return this;};
h.prototype.




setPkgCohort=function(j){
this.$BootloaderEventsTypedLogger_data.pkg_cohort=j;
return this;};
h.prototype.




setRef=function(j){
this.$BootloaderEventsTypedLogger_data.ref=j;
return this;};
h.prototype.




setRequestPath=function(j){
this.$BootloaderEventsTypedLogger_data.request_path=j;
return this;};
h.prototype.




setRetries=function(j){
this.$BootloaderEventsTypedLogger_data.retries=j;
return this;};
h.prototype.




setSvnRev=function(j){
this.$BootloaderEventsTypedLogger_data.svn_rev=j;
return this;};
h.prototype.




setTimesliceContext=function(j){
this.$BootloaderEventsTypedLogger_data.timeslice_context=j;
return this;};
h.prototype.




setVC=function(j){
this.$BootloaderEventsTypedLogger_data.vc=j;
return this;};
h.prototype.




setWeight=function(j){
this.$BootloaderEventsTypedLogger_data.weight=j;
return this;};


































var i=
{all_resources_count:true,
all_resources_downloaded:true,
async_resources_count:true,
async_resources_downloaded:true,
bl_endpoint_mode:true,
bl_sample_rate:true,
blocking_resources_count:true,
blocking_resources_downloaded:true,
cavalry_bl_cohort:true,
cavalry_cohort:true,
components:true,
duration:true,
err_count:true,
first_identical_request:true,
has_new_component:true,
is_employee:true,
ms_since_navstart:true,
pkg_cohort:true,
ref:true,
request_path:true,
retries:true,
svn_rev:true,
timeslice_context:true,
vc:true,
weight:true};


f.exports=h;}),null);

/** shared/performance/performanceNavigationStart.js */





__d('performanceNavigationStart',['performance'],(function a(b,c,d,e,f,g){var h,







i=void 0;
if(c('performance').now){

if(c('performance').timing&&
c('performance').timing.navigationStart){



i=function j(){return c('performance').timing.navigationStart;};}else 




if(typeof window._cstart==='number'){


i=function j(){return window._cstart;};}else 
(function(){

var j=Date.now();
i=function k(){return j;};})();}else 





i=function j(){return 0;};


f.exports=i;}),null);

/** js/bootloader/BootloaderLoggerUtil.js */







__d('BootloaderLoggerUtil',['Arbiter','Bootloader','BootloaderEventsTypedLogger','CurrentUser','ScriptPath','SiteData','performanceNavigationStart'],(function a(b,c,d,e,f,g){










var h=null,








i=
{initLogging:function j(k){
if(h)
return;


h=c('Arbiter').subscribe
(c('Bootloader').Events.BOOTLOAD,
function(l,m){var n=m.start_time,o=babelHelpers.objectWithoutProperties(m,['start_time']),
p=Math.round
(n-c('performanceNavigationStart')());


new (c('BootloaderEventsTypedLogger'))().
setMsSinceNavstart(p).
setCavalryCohort(k.cavalry_cohort).
setPkgCohort(c('SiteData').pkg_cohort).
setWeight(k.sample_rate).
setIsEmployee(c('CurrentUser').isEmployee()).
setSvnRev(c('SiteData').revision).
setBlEndpointMode(c('SiteData').be_mode).
setRequestPath(c('ScriptPath').getScriptPath()).
setCavalryBlCohort(k.cavalry_bl_cohort).
setBlSampleRate(k.bl_sample_rate).
updateData(o).
log();});}};





f.exports=i;}),null);

/** js/logging/generated/LoggedOutSwitchingLocaleTypedLogger.js */





__d('LoggedOutSwitchingLocaleTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:LoggedOutSwitchingLocaleLoggerConfig',this.$LoggedOutSwitchingLocaleTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:LoggedOutSwitchingLocaleLoggerConfig',this.$LoggedOutSwitchingLocaleTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$LoggedOutSwitchingLocaleTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$LoggedOutSwitchingLocaleTypedLogger_data=babelHelpers['extends']({},
this.$LoggedOutSwitchingLocaleTypedLogger_data,
j);

return this;};
h.prototype.












setIndex=function(j){
this.$LoggedOutSwitchingLocaleTypedLogger_data.index=j;
return this;};
h.prototype.




setNewLocale=function(j){
this.$LoggedOutSwitchingLocaleTypedLogger_data.new_locale=j;
return this;};
h.prototype.




setOldLocale=function(j){
this.$LoggedOutSwitchingLocaleTypedLogger_data.old_locale=j;
return this;};
h.prototype.




setReferrer=function(j){
this.$LoggedOutSwitchingLocaleTypedLogger_data.referrer=j;
return this;};





































var i=
{index:true,
new_locale:true,
old_locale:true,
referrer:true};


f.exports=h;}),null);

/** www/__virtual__/x/XIntlAccountSetLocaleAsyncController.js */



__d("XIntlAccountSetLocaleAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/intl\/ajax\/save_locale\/",{loc:{type:"String"},href:{type:"String"},index:{type:"Int"},ref:{type:"Enum",defaultValue:"other",enumType:1},should_redirect:{type:"Bool",defaultValue:true}});}),

null);

/** js/intl/IntlUtils.js */





__d('IntlUtils',['AsyncRequest','Cookie','LocaleSwitchingReferrers','LoggedOutSwitchingLocaleTypedLogger','ReloadPage','XIntlAccountSetLocaleAsyncController','goURI'],(function a(b,c,d,e,f,g){












var h=




{setXmode:function i(j){
new (c('AsyncRequest'))().
setURI('/ajax/intl/save_xmode.php').
setData({xmode:j}).
setHandler(function(){
c('ReloadPage').now();}).

send();},





setAmode:function i(j){
new (c('AsyncRequest'))().
setURI('/ajax/intl/save_xmode.php').
setData({amode:j,app:false}).
setHandler(function(){
c('ReloadPage').now();}).

send();},





setRmode:function i(j){
new (c('AsyncRequest'))().
setURI('/ajax/intl/save_xmode.php').
setData({rmode:j}).
setHandler(function(){
c('ReloadPage').now();}).

send();},


setLocale:function i
(j,
k,
l,
m){

if(!l)
l=j.options[j.selectedIndex].value;


var n=c('XIntlAccountSetLocaleAsyncController').getURIBuilder().getURI();
new (c('AsyncRequest'))().
setURI(n).
setData({loc:l,ref:k,should_redirect:false}).
setHandler(function(o){
c('ReloadPage').now();}).

send();},





setCookieLocale:function i
(j,
k,
l){


var m=arguments.length<=3||arguments[3]===undefined?c('LocaleSwitchingReferrers').OTHER:arguments[3],n=arguments.length<=4||arguments[4]===undefined?null:arguments[4];
c('Cookie').set('locale',j);

new (c('LoggedOutSwitchingLocaleTypedLogger'))().
setNewLocale(j).
setOldLocale(k).
setIndex(n).
setReferrer(m).
log();

c('goURI')(l);}};




f.exports=h;}),null);

/** js/intl/base-legacy.js */




__d('legacy:intl-base',['IntlUtils'],(function a(b,c,d,e,f,g){



b.intl_set_xmode=c('IntlUtils').setXmode;
b.intl_set_amode=c('IntlUtils').setAmode;
b.intl_set_rmode=c('IntlUtils').setRmode;
b.intl_set_locale=c('IntlUtils').setLocale;}),3);

/** js/keystroke_dynamics/FormTypeABTester.js */




__d('FormTypeABTester',['Base64','Event'],(function a(b,c,d,e,f,g){



























function h(i){
var j=16,
k=32,
l=65,
m=90,
n=48,
o=57,
p=58,
q=63,
r=91,
s=94,

t=0,
u=0,
v=0,
w=0,

x=[],
y=null,

z=[],

aa=[],
ba=[],
ca=[];

for(var da=0;da<10;da++){
z.push(0);
aa.push(0);}

for(var ea=0;ea<10;ea++){
aa.push(0);
ba.push(0);
ca.push(0);}


var fa=function ia(ja){
var ka=window.event?Date.now():ja.timeStamp,
la=window.event?window.event.keyCode:ja.which;
la%=128;


if(la>=l&&la<=m||la==k){
t++;}else
if(la>=n&&la<=o){
u++;}else
if(la>=p&&la<=q||la>=r&&la<=s){
v++;}else 

w++;



x[la]=ka;
if(y){
var ma=ka-y;
if(ma>=0&&(la>=l&&la<=m||la==k))
if(ma<400){
aa[Math.floor(ma/20)]++;}else
if(ma<1000){
ba[Math.floor((ma-400)/60)]++;}else
if(ma<3000)
ca[Math.floor((ma-1000)/200)]++;}




y=ka;},


ga=function ia(ja){
var ka=window.event?Date.now():ja.timeStamp,
la=window.event?window.event.keyCode:ja.which,
ma=ka-x[la%128];
if(ma>=50&&ma<250)
z[Math.floor((ma-50)/20)]++;},




ha=function ia(ja){
var ka=Math.max.apply(Math,ja),
la=[];
ja.forEach(function(ma){
la.push(Math.floor(ma*63/(ka||1)));});

return la;};


this.getDataVect=function(){
var ia=aa.concat
(ba,
ca);
return ha(ia).concat
(ha(z),
[t/2,
u/2,
v/2,
w/2]);};


this.getData=function(){
return c('Base64').encodeNums(this.getDataVect());};


c('Event').listen(i,
{keyup:ga.bind(this),
keydown:fa.bind(this)});}



f.exports=h;}),null);

/** js/login/LoginFormController.js */




__d('LoginFormController',['Event','ge','goURI','Button','Cookie','DeferredCookie','FormTypeABTester','WebStorage'],(function a(b,c,d,e,f,g){












g.init=
function(h,
i,
j,
k){

if(k)
var l=new (c('FormTypeABTester'))(h);


c('Event').listen(h,'submit',function(){
if(k&&h.ab_test_data)
h.ab_test_data.value=l.getData();


if(window.__cookieReload)
window.clearInterval(window.__cookieReload);

c('Button').setEnabled(i,false);

setTimeout(c('Button').setEnabled.bind(null,i,true),15000);


c('DeferredCookie').flushAllCookies();});





var m=c('ge')('lgnjs');
if(m){
var n=Math.floor(Date.now()/1000);
m.value=n;}







var o=c('WebStorage').getSessionStorage(),
p=o!=null?
parseInt(o.getItem('LoginPollRateLimit'),10):
0,
q=j!=null;
if(p>n-60)
q=false;


if(q){
var r,
s=function t(){
if(c('Cookie').get('c_user')!=null){
window.clearInterval(r);

if(o!=null)
o.setItem
('LoginPollRateLimit',
Math.floor(Date.now()/1000));


c('goURI')(j);}};


r=window.setInterval(s,1000);
s();}};}),

null);

/** js/modules/LoginbarPopover.js */




__d('LoginbarPopover',['CSS','ge','getActiveElement'],(function a(b,c,d,e,f,g){





var h=1000,

i=


{init:function j
(k,
l,
m){

var n=arguments.length<=3||arguments[3]===undefined?true:arguments[3],
o=c('ge')('email',m);
setTimeout
(function(){return this.show(k,m,o);}.bind(this),
h);


l.addEventListener
('click',
function(event){
event.kill();
if(n){
this.toggle(m,o);}else 

o.focus();}.

bind(this));

k.style.visibility='visible';},


show:function j
(k,
l,
m){

c('CSS').show(l);
var n=c('getActiveElement')().tagName.toLowerCase();
if(n!=='input'&&n!=='textarea')
m.focus();},



toggle:function j
(k,
l){

c('CSS').toggle(k);

if(c('CSS').shown(k))
l.focus();}};





f.exports=i;}),null);

/** js/modules/ScreenDimensionsAutoSet.js */




__d("ScreenDimensionsAutoSet",[],(function a(b,c,d,e,f,g){








function h(){
if(!window.btoa)
return '';


var j=
{w:screen.width,
h:screen.height,
aw:screen.availWidth,
ah:screen.availHeight,
c:screen.colorDepth};


return btoa(JSON.stringify(j));}


var i=

{setInputValue:function j(k){
k.value=h();}};


f.exports=i;}),null);

/** js/modules/StringTransformations.js */




__d('StringTransformations',[],(function a(b,c,d,e,f,g){

f.exports=






{unicodeEscape:function h(i){

return i.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(j){
var k=j.charCodeAt().toString(16);
return '\\u'+('0000'+k.toUpperCase()).slice(-4);});},



unicodeUnescape:function h(i){
return i.replace(/(\\u[0-9A-Fa-f]{4})/g,function(j){
return String.fromCharCode(parseInt(j.slice(2),16));});}};}),

null);

/** shared/time_spent/TimeSpentArray.js */




__d('TimeSpentArray',['Banzai','pageID','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){























































var h=2,
i=h*32,

j,
k,
l,

m,


n,

o,
p,
q,
r,
s={},
t;

function u(){

return {timeoutDelayMap:s,
nextDelay:t,
timeoutInSeconds:l};}



function v(){
if(j){
var da=Date.now();
if(da>n)

p=Math.min
(i,
Math.ceil(da/1000-m));


var ea=aa();
if(ea)
j(ea,t);}








z();}


function w(){
x();
k=c('setTimeoutAcrossTransitions')
(v,
l*1000);}



function x(){
if(k){
clearTimeout(k);
k=null;}}






function y(da){
m=da;
n=m*1000;
o=[1];
for(var ea=1;ea<h;ea++)
o.push(0);

p=1;
q+=1;
r+=1;

var fa=r.toString()+'_delay';
t=s[fa];
if(t===undefined)
t=s.delay;

var ga=r.toString()+'_timeout',
ha=s[ga];
if(ha===undefined)
ha=s.timeout;


ha=Math.min(ha,i);
l=ha||i;
w();}


function z(){
x();
o=null;}


function aa(){
if(!o)
return null;


return {tos_id:c('pageID'),
start_time:m,
tos_array:o.slice(0),
tos_len:p,
tos_seq:r,
tos_cum:q};}



function ba(da){

if(da>=n&&
da-n<1000)
return;

ca(Math.floor(da/1000));}





function ca(da){
var ea=da-m;

if(ea<0||ea>=i)
v();


if(!o){

y(da);}else{





o[ea>>5]|=1<<(ea&31);
p=ea+1;
q+=1;
n=da*1000;}}




f.exports=
{init:function da(ea,fa,ga){
q=0;
r=-1;
j=ea;
if(typeof fa=='object'&&
fa!==null){
s=fa;}else 

s={};

if(!ga)
ga=Date.now();

y(Math.floor(ga/1000));
c('Banzai').subscribe(c('Banzai').SHUTDOWN,v);},


update:function da(ea){








ba(ea);},


get:function da(){
return aa();},


ship:function da(){
v();},


reset:function da(){
z();},


testState:function da(){
return u();}};}),
null);

/** shared/time_spent/TimeSpentImmediateActiveSecondsLogger.js */




__d('TimeSpentImmediateActiveSecondsLogger',['Banzai','ImmediateActiveSecondsConfig','ScriptPath'],(function a(b,c,d,e,f,g){






















var h='immediate_active_seconds',
i={signal:true,retry:true},
j=c('ImmediateActiveSecondsConfig').sampling_rate,
k=c('ImmediateActiveSecondsConfig').ias_bucket,

l=0;

function m(o){
if(j<=0)
return false;


var p=Math.floor(o/1000)%j;
return p===k;}


function n(o){

if(o>=l&&
o-l<1000)
return;


if(m(o)){
var p=
{activity_time_ms:o,
last_activity_time_ms:l,
script_path:c('ScriptPath').getTopViewEndpoint()};



try{c('Banzai').post(h,p,i);}catch(
q){



}}


l=Math.floor(o/1000)*1000;}


f.exports=
{maybeReportActiveSecond:n};}),null);

/** js/modules/TimeSpentBitArrayLogger.js */




__d('TimeSpentBitArrayLogger',['Arbiter','Banzai','BanzaiODS','TimeSpentArray','TimeSpentConfig','TimeSpentImmediateActiveSecondsLogger','UserActivity','isInIframe'],(function a(b,c,d,e,f,g){










var h=
{delay:c('Banzai').BASIC.delay,
retry:true};


function i(j,k){
c('Arbiter').inform('timespent/tosbitdataposted',babelHelpers['extends']({},
j));
if(typeof k=='number'){
h.delay=k;}else 

h.delay=c('Banzai').BASIC.delay;

c('Banzai').post('time_spent_bit_array',babelHelpers['extends']({},
j),
h);


h.delay=c('TimeSpentConfig').delay;}


f.exports=

{init:function j(k){
if(c('isInIframe')())return;







c('UserActivity').subscribe(function(m,n){
var o=n.last_inform;
c('TimeSpentArray').update(o);
c('TimeSpentImmediateActiveSecondsLogger').maybeReportActiveSecond
(o);});


var l=Date.now();
c('TimeSpentArray').init(i,c('TimeSpentConfig'),l);
c('TimeSpentImmediateActiveSecondsLogger').maybeReportActiveSecond(l);



c('BanzaiODS').bumpEntityKey
('ms.time_spent.qa.www',
'time_spent.bits.js_initialized');}};}),

null);

/** js/modules/UserActionHistory.js */




__d('UserActionHistory',['Arbiter','ClickRefUtils','ScriptPath','throttle','WebStorage'],(function a(b,c,d,e,f,g){






var h={click:1,submit:1},
i=false,
j={log:[],len:0},

k=c('throttle').acrossTransitions(function(){

try{i._ua_log=JSON.stringify(j);}catch(
n){



i=false;}},

1000);


function l(){
var n=c('WebStorage').getSessionStorage();
if(n){
i=n;
i._ua_log&&(j=JSON.parse(i._ua_log));}else 

i=false;


j.log[j.len%10]=
{ts:Date.now(),
path:'-',
index:j.len,
type:'init',
iref:'-'};

j.len++;

c('Arbiter').subscribe("UserAction/new",function(o,p){
var q=p.ua,r=p.node,event=p.event;
if(!event||!(event.type in h))
return;


var s=
{path:c('ScriptPath').getScriptPath(),
type:event.type,
ts:q._ue_ts,
iref:c('ClickRefUtils').get_intern_ref(r)||'-',
index:j.len};



j.log[j.len++%10]=s;
i&&k();});}



function m(){
return j.log.sort(function(n,o){
return o.ts!=n.ts?o.ts-n.ts:o.index-n.index;});}



l();

f.exports=
{getHistory:m};}),null);

/** js/time_spent/NavigationClickPointHandler.js */




__d('NavigationClickPointHandler',['Event','ScriptPath','collectDataAttributes'],(function a(b,c,d,e,f,g){










var h=

{getClickPointInfo:function j(k){
var l=null,
m=c('collectDataAttributes')
(k,
['ft'],
['href','data-click']),

n=m.normal.href;
if(!n||n==='#')
return false;


var o=m.normal['data-click'];
if(l===null&&o)
l={click:o};


var p=m.ft.tn;
if(l===null&&p)
l={tn:p};


if(l===null&&k.getAttribute){
var q=k.getAttribute('class');
if(q)
l={'class':q};}



return l;}};



function i(event){
var j=event.target||event.srcElement,
k=h.getClickPointInfo(j);

if(k!==false)
c('ScriptPath').setClickPointInfo(k);}



if(document.documentElement!==null)
c('Event').listen(document.documentElement,{click:i});


f.exports=h;}),null);

/** js/ui/layer/contextual_dialog/behaviors/ErrorContextualDialogXUITheme.js */




__d('ErrorContextualDialogXUITheme',['cx'],(function a(b,c,d,e,f,g,h){



var i=
{wrapperClassName:"_572t",
arrowDimensions:
{offset:12,
length:22}};



f.exports=i;}),null);

/** www/__virtual__/x/XWebStorageLoggingAsyncController.js */



__d("XWebStorageLoggingAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ajax\/webstorage\/process_keys\/",{});}),

null);

/** js/webstorage/WebStorageMonster.js */






__d('WebStorageMonster',['Event','AsyncRequest','UserActivity','StringTransformations','WebStorage','XWebStorageLoggingAsyncController','arrayContains','isEmpty','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){












var h=300000,

i=false;






function j(o){
var p={};
for(var q in o){
var r=o.getItem(q),
s=c('StringTransformations').unicodeEscape(q);
if(typeof r==='string')



p[s]=r.length;}


return p;}





function k(o){
var p=c('WebStorage').getLocalStorage();
if(!p||!o.keys)
return;


n._getLocalStorageKeys().forEach(function(q){
if(c('arrayContains')(o.keys,q))
p.removeItem(q);});}








function l(o){
var p=c('WebStorage').getLocalStorage();
if(p)
n._getLocalStorageKeys().forEach(function(q){
if(!o.some(function(r){
return new RegExp(r).test(q);}))

p.removeItem(q);});}












function m(){
if(c('UserActivity').isActive(h)){
c('setTimeoutAcrossTransitions')(m,h);}else 

n.cleanNow();}



var n=


{registerLogoutForm:function o(p,q){
c('Event').listen(p,'submit',function(r){
n.cleanOnLogout(q);});},




schedule:function o(){
if(i)
return;

i=true;
m();},


cleanNow:function o(){
var p=Date.now(),

q={},

r=c('WebStorage').getLocalStorage();
if(r)
q.local_storage=j(r);


var s=c('WebStorage').getSessionStorage();
if(s)
q.session_storage=j(s);


var t=!c('isEmpty')(q),



u=Date.now();
q.logtime=u-p;

if(t){
var v=c('XWebStorageLoggingAsyncController').getURIBuilder().getURI();
new (c('AsyncRequest'))(v).
setData(q).
setHandler(function(w){
var x=w.getPayload();
if(x.keys)
x.keys=x.keys.map
(c('StringTransformations').unicodeUnescape);


k(x);}).

send();}},







cleanOnLogout:function o(p){
if(p)
l(p);


var q=c('WebStorage').getSessionStorage();
if(q)
q.clear();},




_getLocalStorageKeys:function o(){
var p=c('WebStorage').getLocalStorage();
return p?Object.keys(p):[];}};



f.exports=n;}),null);

/** shared/logging/ScriptPathLogger.js */






__d('ScriptPathLogger',['Banzai','BanzaiVitalWWW','ScriptPath','TimeSpentPageTransitionCause','URI','isInIframe'],(function a(b,c,d,e,f,g){

'use strict';












var h='script_path_change',
i=
{scriptPath:null,
categoryToken:null,
extraData:{}},


j=false,
k='imp_id';

function l(v){


var w=c('URI').getNextURI?c('URI').getNextURI():new (c('URI'))(window.location.href),
x=w.getQueryData(),
y=w.getPath();
if(y.endsWith('/'))
y=y.substr(0,y.length-1);



var z=m(y,x);
if(z){
v.content_id=z;
return;}


var aa=n(y);
if(aa!==''){
v.dest_topic_feed=aa;
return;}



if(o(y)){
var ba=x.queue_id;
if(ba)
v.dest_srt_queue_id=ba;

return;}}



function m(v,w){

if(w.story_fbid)
return w.story_fbid;



if(w.fbid)
return w.fbid;



if(w.view==='permalink'&&w.id)
return w.id;



var x=/\/(posts|videos|notes|groups\/.*\/permalink)\//,
y=/^[0-9]+$/;
if(x.test(v)){
var z=v.split('/'),
aa=z[z.length-1];
if(y.test(aa))
return aa;}


return '';}


function n(v){
if(!v||v.search('/feed/topics/')==-1)
return '';

var w=v.split('/');
return w[w.length-1];}


function o(v){
return !!v&&v.search('/intern/review/')!==-1;}


function p
(v,
w,
x,
y){

if(!j||c('isInIframe')())
return;


var z=c('Banzai').isEnabled('vital_navigations')||
c('BanzaiVitalWWW').useVital,
aa=z?
c('Banzai').VITAL:c('Banzai').BASIC;
if(z){
y=y||{};
y.via_banzai_vital='1';}


var ba=
{source_path:v.scriptPath,
source_token:v.categoryToken,
dest_path:w.scriptPath,
dest_token:w.categoryToken,
impression_id:w.extraData?w.extraData.imp_id:null,
cause:x},


ca=x===c('TimeSpentPageTransitionCause').PAGE_UNLOAD;
if(!ca)
l(ba);


if(y){
if(!ca&&y.snowlift_photo_id){
ba.content_id=y.snowlift_photo_id;
delete y.snowlift_photo_id;}

ba.extra_data=y;}


if(v.scriptPath===null)
ba.referrer=document.referrer;


var da=c('ScriptPath').getClickPointInfo();
if(da)
ba.click_point_info=da;



if(v.extraData)
for(var ea in v.extraData)
if(ea!=k)
ba['source_'+ea]=v.extraData[ea];



if(w.extraData)
for(var fa in w.extraData)
if(fa!=k)
ba['dest_'+fa]=w.extraData[fa];




if(v.topViewEndpoint)
ba.source_endpoint=v.topViewEndpoint;

if(w.topViewEndpoint)
ba.dest_endpoint=w.topViewEndpoint;


if(v.restored)
ba.source_restored=true;


c('Banzai').post(h,ba,aa);



c('ScriptPath').setClickPointInfo(null);}


function q(){
p
(c('ScriptPath').getSourcePageInfo()||i,
c('ScriptPath').getPageInfo()||i,
c('TimeSpentPageTransitionCause').PAGE_LOAD);}



function r
(v,
w,
x){

p(v,w,c('TimeSpentPageTransitionCause').TRANSITION,x);}


function s(){
p
(c('ScriptPath').getPageInfo()||i,
i,
c('TimeSpentPageTransitionCause').PAGE_UNLOAD);

c('ScriptPath').shutdown();}


var t=c('ScriptPath').subscribe(function(v){
if(j){
var w=v.source,
x=v.dest,
y=v.cause,
z=v.extraData;
if(y){
p
(w||i,
x||i,
y,
z);}else

if(w){
r(w,x||i,z);}else 



q();}});




c('Banzai').subscribe(c('Banzai').SHUTDOWN,s);

var u=






{startLogging:function v(){
j=true;


if(c('ScriptPath').getPageInfo())
q();},






stopLogging:function v(){
j=false;
t.remove();},



BANZAI_LOGGING_ROUTE:h};


f.exports=u;}),null);
