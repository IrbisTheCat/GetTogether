if (self.CavalryLogger) { CavalryLogger.start_js(["XlSyH"]); }

/** js/pages/PageSelector.js */




__d('PageSelector',['Button'],(function a(b,c,d,e,f,g){



function h(i,j,k){
this._button=i;
this._menu=j;
this._input=k;

this.init();}


Object.assign(h.prototype,
{init:function i(){
this._menu.subscribe('change',function(j,k){
c('Button').setLabel(this._button,k.label);
this._input.value=k.value;}.
bind(this));}});



f.exports=h;}),null);

/** shared/instrumentation/ResourceTimingRecorder.js */




__d('ResourceTimingRecorder',['Banzai','BanzaiScuba','pageID','performance','URI'],(function a(b,c,d,e,f,g){







var h='resource_timing',
i=
{transferSize:true,
encodedBodySize:true,
decodedBodySize:true},





j=!!c('performance').getEntriesByType&&!window.externalHost,
k=0,
l=[],
m,
n,
o,
p;

if(j){
var q=new (c('URI'))(b.location.href);
m=q.getProtocol();
n=q.getDomain();
o=q.getPort();
p=q.getPath();}


var r=function s(){
var t=c('performance').getEntriesByType('resource');
for(;k<t.length;k++){
var u=t[k];

if(u.duration<0||!c('URI').isValidURI(u.name))
continue;


var v=new (c('URI'))(u.name),
w=new (c('BanzaiScuba'))
(h,
null,

{addBrowserFields:true,
addGeoFields:true,
addPredictedGeographyFields:true,
addMobileDeviceFields:true}),





x=Object.keys(u);
if(x.length===0)

x=Object.keys(Object.getPrototypeOf(u));

x.forEach(function(y){
if(y in u)
switch(typeof u[y]){
case 'number':

if(i[y]){
w.addInteger(y,u[y]);}else 





w.addInteger(y,Math.round(u[y]*1000));

break;
case 'string':
if(y!=='entryType')
w.addNormal(y,u[y]);

break;}});




w.addNormal('resource_protocol',v.getProtocol());
w.addNormal('resource_domain',v.getDomain());
w.addNormal('resource_port',v.getPort());
w.addNormal('resource_path',v.getPath());

w.addNormal('page_protocol',m);
w.addNormal('page_domain',n);
w.addNormal('page_port',o);
w.addNormal('page_path',p);
w.addNormal('page_id',c('pageID'));





w.post();}};



if(j){
c('Banzai').subscribe(c('Banzai').SEND,r);
c('Banzai').subscribe(c('Banzai').SHUTDOWN,r);}}),




null);
