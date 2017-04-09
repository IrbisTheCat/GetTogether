if (self.CavalryLogger) { CavalryLogger.start_js(["VY4El"]); }

/** __static_js_modules__/crowdsourcingcontextparam.js */




__d("CrowdsourcingContextParam",[],(function a(b,c,d,e,f,g){

f.exports={PAGE_ID:"page_id",ENTRY_POINT:"entry_point",END_POINT:"end_point",SESSION_ID:"session_id",LAST_ACTION_TIME:"last_action_time"};}),

null);

/** js/modules/ErrorLogging.js */





__d('ErrorLogging',['ErrorSignal','ErrorUtils','JSErrorExtra','JSErrorPlatformColumns'],(function a(b,c,d,e,f,g){








function h(k){
var l=k.extra||{},
m={};

Object.keys(c('JSErrorExtra')).forEach(function(n){
if(c('JSErrorExtra')[n])
m[n]=true;});



Object.keys(l).forEach(function(n){
if(l[n]){
m[n]=true;}else
if(m[n])
delete m[n];});


k.extra=Object.keys(m);}


function i
(k){

if(c('JSErrorPlatformColumns').app_id!==undefined)
k.app_id=c('JSErrorPlatformColumns').app_id;

if(c('JSErrorPlatformColumns').access_token!==undefined)
k.access_token=c('JSErrorPlatformColumns').access_token;}



function j(k){
h(k);
i(k);
var l=k.category||'onerror';
c('ErrorSignal').logJSError(l,
{error:k.name||k.message,
extra:k});}



c('ErrorUtils').addListener(j);

f.exports={defaultJSErrorHandler:j};}),null);
