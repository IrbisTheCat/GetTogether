if (self.CavalryLogger) { CavalryLogger.start_js(["dkqOZ"]); }

/** js/litestand/LitestandChromeHomeBadge.js */






__d('LitestandChromeHomeBadge',['cx','Arbiter','AsyncRequest','CSS','DOM','Event','formatNumber','LitestandMessages','UserAgent'],(function a(b,c,d,e,f,g,h){












var i=300000,








j={},
k,
l;

function m(){
l&&clearTimeout(l);

if(k)
return;


l=setTimeout(n,i);}


function n(){
if(k)
return;


new (c('AsyncRequest'))().
setURI('/ajax/litestand/newsfeed_count').
setHandler
(function(q){
if(k)


return;


p.setCount
(q.getPayload());

m();}).


setAllowCrossPageTransition(true).
send();}


function o(q){
if(j.countNode===null){
c('CSS').conditionClass
(j.badgeNode,
"_2527",
q>0);}else{


c('CSS').conditionClass
(j.badgeNode,
"_461d",
q>0);

if(q>0){
var r=c('formatNumber').withMaxLimit(q,j.maxCount);
c('DOM').setContent(j.countNode,r);}}}




var p=

{init:function q(r){
j=r;

c('Event').listen(j.homeNode,'click',function(event){var s=
event.getModifiers(),t=s.shift,u=s.meta,v=s.control;

if(t||
c('UserAgent').isPlatform('Mac OS X')&&u||
c('UserAgent').isPlatform('Windows')&&v)

o(0);});



c('Arbiter').subscribe
(c('LitestandMessages').NEWSFEED_LOAD,
function(){
k=true;
this.setCount(0);}.
bind(this));


c('Arbiter').subscribe
(c('LitestandMessages').LEAVE_HOME,
function(){
k=false;
m();});



m();},


setCount:function q(r){
o(k?0:r);}};



f.exports=p;}),null);

/** www/__virtual__/x/XCareersRequisitionPageController.js */



__d("XCareersRequisitionPageController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/careers\/jobs\/{req}\/",{req:{type:"String",required:true},q:{type:"String"},location:{type:"String"},ref:{type:"String"}});}),

null);
