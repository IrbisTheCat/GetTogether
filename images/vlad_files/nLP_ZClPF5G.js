if (self.CavalryLogger) { CavalryLogger.start_js(["K2xTy"]); }

/** js/dock/nub/PerformanceStats.js */





__d('PerformanceStats',['Arbiter'],(function a(b,c,d,e,f,g){



var h='\u2026',
i=['init','prepare','render'],

j=h,



k=[];

function l(n,o){
var p=null,
q=null;

for(var r=i,s=Array.isArray(r),t=0,r=s?r:r[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var u;if(s){if(t>=r.length)break;u=r[t++];}else{t=r.next();if(t.done)break;u=t.value;}var v=u;
if(!(v in o))
continue;


if(p===null)
p=o[v].start_time;


q=o[v].end_time;}


var w=
{pagelet:n,
wall_time:q&&p?q-p:'N/A',
end:q||'N/A',
html_bytes:o.html_bytes||'N/A',
html_gzip:o.html_gzip||'N/A',
php_class:o.php_class||'N/A'};





if(b.CavalryLogger){
w.lid=b.CavalryLogger.getInstance().lid;
c('Arbiter').subscribe('pagelet_event',function(x,y){
if(n===y.id){
w.phase=y.phase||'N/A';
w[y.event]=y.ts-window._cstart;}});}



if(q)
if(j==h||j<q)
j=q;


return w;}


var m=
{reset:function n(){

},

register:function n(o,p){

},


setStats:function n(o){
var p=[];
for(var q in o)
p.push(l(q,o[q]));

k.unshift(p);
c('Arbiter').inform('Performance/stats',
{lastEndTime:j,stats:k},
c('Arbiter').BEHAVIOR_STATE);},


getPageletStats:function n(){
var o=[],
p;
for(p=0;p<k.length;p++)
o=o.concat(k[p]);

return o;}};



f.exports=m;}),null);
