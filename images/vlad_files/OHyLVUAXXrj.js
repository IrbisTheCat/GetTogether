if (self.CavalryLogger) { CavalryLogger.start_js(["H\/9Of"]); }

/** js/logging/JSLoggerImpl.js */





__d('JSLoggerImpl',['Arbiter','AsyncRequest','Banzai','BanzaiODS','Env','ErrorUtils','JSLogger','JSLoggerConfig','SystemEvents','emptyFunction','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){













































































var h=c('BanzaiODS').create(),










i=c('JSLogger')._,


j,


k='/ajax/chat/jslogger.php',


l=c('JSLogger').create('jslogger'),


m=-1,


n=null,


o=
{enabled_categories:null,
categories:null,
send_min:7500,
send_max:60000};






function p(z){
return c('JSLoggerConfig')[z]||o[z];}





function q(z){
var aa=p('enabled_categories')||{},
ba=z in aa?aa[z]:aa.__default;

return ba;}






function r(z,aa,event){




































































}




function s(z){
if(console&&console[z.type]&&
n&&n.test(z.cat)){
var aa=/(\d\d:\d\d:\d\d)/.test(new Date(z.date))&&RegExp.$1,
ba=aa+' '+z.cat+':'+z.event;
if(z.data){
console[z.type](ba,JSON.parse(z.data));}else 

console[z.type](ba);}}








function t(z){
var aa=
{page_id:i.pageId,
env_start:c('Env').start,
now:Date.now()};


if(z){


c('Arbiter').inform(c('JSLogger').DUMP_EVENT,z);
aa.dumpData=z;
aa.log=c('JSLogger').getEntries();}else{

aa.log=c('JSLogger').getEntries
(function(ba){
return /log|warn|error/.test(ba.type)&&
q(ba.cat);},

j);


j=i.head;


aa.counts=i.counts;
i.counts={};}


return aa;}












function u(z,aa,ba){
var ca=t(z);

if(!z){


var da=false;
for(var ea in ca.counts)
da=da||ea!='jslogger';



if(!da&&ca.log.length<=0)
return;}



if(c('Banzai').isEnabled('jslogger')){

delete ca.counts;



c('Banzai').post('jslogger',ca,{delay:0});
h.flush();}else{

ca=JSON.stringify(ca);

var fa=new (c('AsyncRequest'))().setURI(k+(z?'?dump=1':'')).
setMethod('POST').
setData({clientState:ca}).
setReadOnly(true).
setAllowCrossPageTransition(true);

if(aa)
fa.setHandler(aa);




fa.setErrorHandler(ba||c('emptyFunction'));

fa.send();}}






function v(){
var z=p('send_min'),aa=p('send_max'),

ba=z*Math.pow(2,m+1);


if(m>=0&&!i.forwarding){
l.bump('send_t'+(ba<=aa?m:'max'));
u();}


m++;


ba*=.75+Math.random()/2;

c('setTimeoutAcrossTransitions')(v,ba);}




var w=i.logAction;
i.logAction=function(event,z,aa){

r(this.type,this.cat,event);

var ba=w.apply(this,arguments);



if(c('Banzai').isEnabled('jslogger'))
if(this.type=='bump'){
h.bumpEntityKey(this.cat,event,z);}else
if(this.type=='rate')
h.bumpFraction(this.cat,event,z?aa:0,aa);





if(ba){
s(ba);



while(j&&i.head.seq-j.seq>i.MAX_HISTORY){
j=j.next;

l.bump('dropped_entries');}}};









Object.assign(c('JSLogger'),



{setConsoleFilter:function z(aa){
if(!(aa instanceof RegExp))
aa=aa?new RegExp(aa):null;

n=aa;},






replay:function z(){
for(var aa=i.tail;aa;aa=aa.next)
s(aa);},



getDumpJSON:function z(aa){
return t({});},


submitDump:function z(aa,ba){
u(aa||{},function(ca){
var da=ca.getPayload();
ba(da);},
function(){
ba(null);});},



dump:function z(aa){
this.submitDump(aa,function(ba){
if(ba){
prompt('JSLogger dump now available at:',ba);}else 

alert('Error while sending JSLogger dump');});}});










v();


for(var x=i.tail;x;x=x.next)
s(x);






var y=c('JSLogger').create('sys');

c('ErrorUtils').addListener(function(z){
if(z.message=='Script error.'){


y.bump('xdomain_error');
y.debug('xdomain_error');}else 

y.error('uncaught_exception',z);});



c('SystemEvents').subscribe(c('SystemEvents').ONLINE,function(z,aa){
y.warn(aa?'online':'offline');});

c('SystemEvents').subscribe(c('SystemEvents').USER,function(z,aa){
y.warn('user',{user:aa});});

c('SystemEvents').subscribe(c('SystemEvents').TIME_TRAVEL,function(z,aa){
y.warn('time_travel',{dt:aa});});}),
null);
