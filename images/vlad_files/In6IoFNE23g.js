if (self.CavalryLogger) { CavalryLogger.start_js(["c1UNP"]); }

/** js/si/DOMScanner.js */





__d('DOMScanner',['AsyncRequest','DataAttributeUtils','Run','URI','XDOMScannerResultsController'],(function a(b,c,d,e,f,g){







var h=
{results:[],
local_storage:[],
found_blacklisted_dom_element:false,
blacklist:[],
ad_divs:[],
scan_id:0,
runtime:0,
fb_domains_sampling_rate:.25,


scheduleScan:function i(j,k,l){
c('Run').onAfterLoad(function(){
setTimeout(h.runScan.bind(h),j);
this.blacklist=l;
this.scan_id=k;}.
bind(this));},


runScan:function i(){
var j=new Date();
this.checkScripts();
this.checkAs();
this.checkIframes();
this.checkImgs();
this.checkAdDivs();
this.checkLocalStorage();
this.runtime=new Date()-j;
this.sendResponse();},


isDataUri:function i(j){
return j.startsWith('data:')&&j.contains(';base64,');},


isForeignDomain:function i(j){
var k=new (c('URI'))(j),
l=k.getDomain();
return !(l.endsWith('fbcdn.net')||
l.endsWith('facebook.com')||
l.endsWith('facebook.net'));},


shouldLog:function i(j){
if(this.isDataUri(j))





return false;


return this.isForeignDomain(j)||
Math.random()<this.fb_domains_sampling_rate;},


checkScripts:function i(){
var j=document.getElementsByTagName('script');
for(var k=0;k<j.length;++k){
var l=j[k];
if(l.src&&this.shouldLog(l.src)){
var m=l.src,
n=null,
o=null;
if(l.className)
n=l.className;

if(l.id)
o=l.id;

var p=['script',m,o,n];
this.results.push(p);}}},




checkAs:function i(){
var j=document.getElementsByTagName('a');
for(var k=0;k<j.length;++k){
var l=j[k];
if(l.href&&this.shouldLog(l.href)){
var m=l.href,
n=null,
o=null;
if(l.className)
n=l.className;

if(l.id)
o=l.id;

var p=['a',m,o,n];
this.results.push(p);}}},




checkIframes:function i(){
var j=document.getElementsByTagName('iframe');
for(var k=0;k<j.length;++k){
var l=j[k];
if(l.src&&this.shouldLog(l.src)){
var m=l.src,
n=null,
o=null;
if(l.className)
n=l.className;

if(l.id)
o=l.id;

var p=['iframe',m,o,n];
this.results.push(p);}}},




checkImgs:function i(){
var j=document.getElementsByTagName('img');
for(var k=0;k<j.length;++k){
var l=j[k];
if(l.src&&this.shouldLog(l.src)){
var m=l.src,
n=null,
o=null;
if(l.className)
n=l.className;

if(l.id)
o=l.id;

var p=['img',m,o,n];
this.results.push(p);}}},




checkAdDivs:function i(){
var j=document.getElementsByTagName('div');
for(var k=0;k<j.length;++k){
var l=j[k],
m=c('DataAttributeUtils').getDataAttribute(l,'data-ad');
if(m){
this.ad_divs.push(m);
this.checkRecursiveAds(l);
continue;}}},




checkRecursiveAds:function i(j){
for(var k=0;k<j.childNodes.length;k++){
var l=j.childNodes[k];
this.checkRecursiveAds(l);
if(this.extractAd(l))
return;}},




extractAd:function i(j){

var k=j.innerHTML;
if(k){
var l=k.split
(" onmouseover=\"LinkshimAsyncLink.swap(this, &quot;");

if(l.length>=2){
l=l[1];
var m=l.split("&quot;);\" onmousedown=");
if(m){
m=m[0];
this.ad_divs.push(m);}

return true;}else

if(j.className.indexOf("AdUnitTitle__subtitle")>-1){
this.ad_divs.push(j.innerText);
return true;}}


return false;},


checkLocalStorage:function i(){
if(!localStorage||!localStorage.length||!localStorage.key)
return;

for(var j=0;j<localStorage.length;++j)
this.local_storage.push(localStorage.key(j));},




sendResponse:function i(){
var j=
{scan_id:this.scan_id,
results:JSON.stringify(this.results),
fun_divs:this.ad_divs,
local_storage:this.local_storage,
found_blacklisted_dom_element:this.found_blacklisted_dom_element,
runtime:this.runtime},


k=c('XDOMScannerResultsController').getURIBuilder().getURI();
new (c('AsyncRequest'))().
setURI(k).
setMethod('POST').
setData(j).
send();}};



f.exports=h;}),null);
