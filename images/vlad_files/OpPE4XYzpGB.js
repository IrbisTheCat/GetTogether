if (self.CavalryLogger) { CavalryLogger.start_js(["7xDAK"]); }

/** js/logging/DOMInspector.js */









__d('DOMInspector',['Arbiter','ErrorSignal','PageletSet','Run','ge','isNode'],(function a(b,c,d,e,f,g){








var h=
{content:
{checkVisible:true},

globalContainer:
{checkVisible:true},

blueBarDOMInspector:
{checkVisible:true},

stage:{}},


i=
{pagelet_main_column:1,
pagelet_right_sidebar:1,
pagelet_left_column:1,
pagelet_composer:1,
pagelet_home_stream:1,
pagelet_ego_pane:1,
pagelet_navigation:1,
pagelet_timeline_recent:1,
pagelet_timeline_main_column:1,
pagelet_ticker:1,
pagelet_sidebar:1},


j=0,



k={};

function l(){
j=Date.now();}


function m(){
return Date.now()-j;}


function n(){
l();





c('Run').onUnload(p);


c('Arbiter').subscribe('pre_page_transition',p);


c('Arbiter').subscribe('page_transition',l);



c('Arbiter').subscribe('BigPipe/init',function(event,t){
o(t.arbiter);});}



function o(t){
t.subscribe('pagelet_event',function(event,u){
var v=u.id,
w=k[v]||[];
w.push(u.event);
k[v]=w;});}



function p(){
if(m()>=15000)
r();}



function q(t,u){
var v=c('ge')(t),


w;
if(v&&c('isNode')(v)){
if(v.childNodes.length===0)
w=t+' is empty';

if(u&&u.checkVisible&&
v.style.display=='none'||v.style.visibility=='hidden')
w=t+' is not visible';}else

if(u&&u.required)
w=t+' is not in DOM';

if(w){


var x=
{error:w,
extra:
{element:t,
events:k[t]||k}};


c('ErrorSignal').logJSError('empty-dom',x);}}



function r(){

for(var t in h)
q(t,h[t]);


for(var u in i)
if(c('PageletSet').hasPagelet(u))


q(u,{required:true});}







n();

var s=
{runInspections:p,
inspectDOM:r,
inspectElement:q};


f.exports=s;}),null);
