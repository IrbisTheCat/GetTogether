if (self.CavalryLogger) { CavalryLogger.start_js(["AR0pI"]); }

/** shared/request/SimpleFBAuthenticatedXHRRequest.js */




__d('SimpleFBAuthenticatedXHRRequest',['invariant','CurrentUser','DTSG','ServerJSDefine','XHRRequest','isFacebookURI'],(function a(b,c,d,e,f,g,h){var i,j,










k=1;i=babelHelpers.inherits

(l,c('XHRRequest'));j=i&&i.prototype;

function l(m,n){'use strict';
j.constructor.call(this,m);

var o=




{__dyn:c('ServerJSDefine').getLoadedModuleHash(),








__req:(k++).toString(36),

__ajax__:1,

__a:1,

__user:c('CurrentUser').getID()};

j.setData.call(this,babelHelpers['extends']({},
n,
o));}

l.prototype.

send=function(){'use strict';

if(!c('isFacebookURI')(this.getURI()))
return j.send.call(this);


if(c('DTSG').getCachedToken){
var m=c('DTSG').getCachedToken();




if(m){
return this.sendOnDTSGToken(m);}else{

c('DTSG').getToken().done(function(n){return this.sendOnDTSGToken(n);}.bind(this));
return this;}}else 


this.sendOnDTSGToken(c('DTSG').getToken());};


l.prototype.

sendOnDTSGToken=function(m){'use strict';
if(m)
j.setData.call(this,babelHelpers['extends']({},
this.getData(),
{fb_dtsg:m}));


return j.send.call(this);};
l.prototype.

setData=function(m){'use strict';
h(0,'Can only set params in constructor!');};
l.

parseResponse=function(m){'use strict';
return JSON.parse(m.substr(9));};
l.

getPayload=function(m){'use strict';
var n=
l.parseResponse(m).payload;
return n.payload?
n.payload:
n;};




f.exports=l;}),null);

/** www/__virtual__/x/XFantailLogController.js */



__d("XFantailLogController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ajax\/fantail\/",{service:{type:"String",required:true}});}),

null);

/** shared/fantail/FantailLogQueue.js */











__d('FantailLogQueue',['ChannelClientID','CircularBuffer','destroyOnUnload','FantailConfig','PHPQuerySerializer','setIntervalAcrossTransitions','SimpleFBAuthenticatedXHRRequest','sprintf','XFantailLogController'],(function a(b,c,d,e,f,g){











var h=
{DEBUG:'debug',
INFO:'info',
WARN:'warn',
ERROR:'error'};







function i(j){'use strict';
this.$FantailLogQueue_service=j;
this.$FantailLogQueue_logBuffer=new (c('CircularBuffer'))(c('FantailConfig').queueSize||200);
c('setIntervalAcrossTransitions')
(this.$FantailLogQueue_flush.bind(this),
c('FantailConfig').flushInterval||30*1000);
c('destroyOnUnload')(this.$FantailLogQueue_flush.bind(this));}
i.

get=function(j){'use strict';
i.$FantailLogQueue_instances=i.$FantailLogQueue_instances||{};
i.$FantailLogQueue_instances[j]=
i.$FantailLogQueue_instances[j]||new i(j);

return i.$FantailLogQueue_instances[j];};
i.prototype.

debug=function(j){'use strict';for(var k=arguments.length,l=Array(k>1?k-1:0),m=1;m<k;m++)l[m-1]=arguments[m];
this.$FantailLogQueue_log.apply(this,[h.DEBUG,j].concat(l));};
i.prototype.
info=function(j){'use strict';for(var k=arguments.length,l=Array(k>1?k-1:0),m=1;m<k;m++)l[m-1]=arguments[m];
this.$FantailLogQueue_log.apply(this,[h.INFO,j].concat(l));};
i.prototype.
warn=function(j){'use strict';for(var k=arguments.length,l=Array(k>1?k-1:0),m=1;m<k;m++)l[m-1]=arguments[m];
this.$FantailLogQueue_log.apply(this,[h.WARN,j].concat(l));};
i.prototype.
error=function(j){'use strict';for(var k=arguments.length,l=Array(k>1?k-1:0),m=1;m<k;m++)l[m-1]=arguments[m];
this.$FantailLogQueue_log.apply(this,[h.ERROR,j].concat(l));};
i.prototype.

$FantailLogQueue_log=function(j,k){'use strict';for(var l=arguments.length,m=Array(l>2?l-2:0),n=2;n<l;n++)m[n-2]=arguments[n];

var o=c('sprintf').apply(undefined,[k].concat(m));


this.$FantailLogQueue_logBuffer.write
({log_time:Date.now(),
log:o,
severity:j,
device_id:c('ChannelClientID').getID()});};

i.prototype.

$FantailLogQueue_flush=function(){'use strict';
var j=this.$FantailLogQueue_logBuffer.read();
if(j.length>0){
var k=
{log_time:[],
log:[],
severity:[],
device_id:[]};


j.forEach(function(m){
k.log_time.push(m.log_time);
k.log.push(m.log);
k.severity.push(m.severity);
k.device_id.push(m.device_id);});



this.$FantailLogQueue_logBuffer.clear();

var l=c('XFantailLogController').getURIBuilder().
setString('service',this.$FantailLogQueue_service).
getURI();

new (c('SimpleFBAuthenticatedXHRRequest'))(l,k).
setMethod('POST').
setDataSerializer(c('PHPQuerySerializer').serialize).
setRequestHeader('Content-Type','application/x-www-form-urlencoded').
send();}};




f.exports=i;}),null);
