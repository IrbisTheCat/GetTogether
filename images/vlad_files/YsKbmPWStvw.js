if (self.CavalryLogger) { CavalryLogger.start_js(["wfMPD"]); }

/** js/search/SearchResultPageShortcuts.js */






__d('SearchResultPageShortcuts',['csx','cx','Arbiter','CSS','DOMQuery','DOMScroll','KeyboardShortcuts','NavigationMessage','Run','SubscriptionsHandler','URI'],(function a(b,c,d,e,f,g,h,i){

'use strict';





















function j(k){this.$SearchResultPageShortcuts_index=-1;this.






















highlightNext=function(){
this.$SearchResultPageShortcuts_results=this.$SearchResultPageShortcuts_getResults();

for(var l=this.$SearchResultPageShortcuts_results,m=Array.isArray(l),n=0,l=m?l:l[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var o;if(m){if(n>=l.length)break;o=l[n++];}else{n=l.next();if(n.done)break;o=n.value;}var p=o;
c('CSS').removeClass
(p,
"_2iaj");}



if(this.$SearchResultPageShortcuts_index<this.$SearchResultPageShortcuts_results.length-1){
var q=this.$SearchResultPageShortcuts_results[++this.$SearchResultPageShortcuts_index];

while(this.$SearchResultPageShortcuts_index<this.$SearchResultPageShortcuts_results.length-1&&
q.offsetHeight===0)

q=this.$SearchResultPageShortcuts_results[++this.$SearchResultPageShortcuts_index];}



c('CSS').addClass
(this.$SearchResultPageShortcuts_results[this.$SearchResultPageShortcuts_index],
"_2iaj");


c('DOMScroll').ensureVisible
(this.$SearchResultPageShortcuts_results[this.$SearchResultPageShortcuts_index],
null,
100,
0);}.

bind(this);this.

highlightPrevious=function(){
this.$SearchResultPageShortcuts_results=this.$SearchResultPageShortcuts_getResults();

for(var l=this.$SearchResultPageShortcuts_results,m=Array.isArray(l),n=0,l=m?l:l[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var o;if(m){if(n>=l.length)break;o=l[n++];}else{n=l.next();if(n.done)break;o=n.value;}var p=o;
c('CSS').removeClass
(p,
"_2iaj");}



if(this.$SearchResultPageShortcuts_index>0){
var q=this.$SearchResultPageShortcuts_results[--this.$SearchResultPageShortcuts_index];
while(this.$SearchResultPageShortcuts_index>0&&q.offsetHeight===0)
q=this.$SearchResultPageShortcuts_results[--this.$SearchResultPageShortcuts_index];}



c('CSS').addClass
(this.$SearchResultPageShortcuts_results[this.$SearchResultPageShortcuts_index],
"_2iaj");


c('DOMScroll').ensureVisible
(this.$SearchResultPageShortcuts_results[this.$SearchResultPageShortcuts_index],
null,
100,
0);}.

bind(this);this.

select=function(){
var l=this.$SearchResultPageShortcuts_results[this.$SearchResultPageShortcuts_index];
if(l.href!=null){

new (c('URI'))(l.href).go();
return;}


var m=c('DOMQuery').find
(this.$SearchResultPageShortcuts_results[this.$SearchResultPageShortcuts_index],

"._2yez,._2ial");


new (c('URI'))(m.href).go();}.
bind(this);this.









$SearchResultPageShortcuts_onLeave=function(){
this.$SearchResultPageShortcuts_subscriptions&&this.$SearchResultPageShortcuts_subscriptions.release();}.
bind(this);this.$SearchResultPageShortcuts_root=k;c('Run').onLeave(this.$SearchResultPageShortcuts_onLeave);this.$SearchResultPageShortcuts_subscriptions=new (c('SubscriptionsHandler'))();this.$SearchResultPageShortcuts_subscriptions.addSubscriptions(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,this.$SearchResultPageShortcuts_onLeave),c('KeyboardShortcuts').register('j',this.highlightNext),c('KeyboardShortcuts').register('k',this.highlightPrevious),c('KeyboardShortcuts').register('RETURN',this.select));}j.prototype.$SearchResultPageShortcuts_getResults=function(){return c('DOMQuery').scry(this.$SearchResultPageShortcuts_root,"._2yer,._1c30");};



f.exports=


{init:function k(l){
return new j(l);}};}),
null);

/** shared/moments_app/permalink/MomentsJoinMomentInit.js */






__d('MomentsJoinMomentInit',['MomentsJSLogger'],(function a(b,c,d,e,f,g){




var h=function i
(j){

j.addEventListener('click',function(event){
c('MomentsJSLogger').log
(c('MomentsJSLogger').JoinMomentClick,
{});});};




f.exports={init:h};}),null);
