if (self.CavalryLogger) { CavalryLogger.start_js(["\/mr0n"]); }

/** js/search/facebar/FacebarTypeaheadGrid.js */




__d('FacebarTypeaheadGrid',['cx','DOM'],(function a(b,c,d,e,f,g,h){

'use strict';






var i=

{init:function j(k,l){
var m=32,
n=3,
o=23,

p=24,
q=l.length,

r=document.createElement('div');
r.width=m*p;
r.height=o;
r.className="_585z";
r.style.position='absolute';

var s=document.createElement('canvas');
if(!s||!s.getContext||!s.getContext('2d'))

return;

s.width=m*p;
s.height=o;
s.style.opacity=0;
r.appendChild(s);

var t=s.getContext('2d'),
u='orange';
t.fillStyle=u;

var v=0,

w=o-n;
for(var x=q-1;x>=0;x--){
if(q-x==p+1){

v=0;
w=0;}

if(l[x]=='1')
t.fillRect(v,w,m,n);

v+=m;}


c('DOM').prependContent(k,r);}};



f.exports=i;}),null);

/** js/search/facebar/behaviors/FacebarTypeaheadInviteCoworkers.js */




__d('FacebarTypeaheadInviteCoworkers',['AsyncRequest'],(function a(b,c,d,e,f,g){

'use strict';



function h(j){
if(j.isAsync){
new (c('AsyncRequest'))().
setURI(j.asyncURI).
setMethod('POST').
send();
return false;}

return true;}



function i(j){
this.$FacebarTypeaheadInviteCoworkers_typeahead=j;}
i.prototype.

enable=function(){
this.$FacebarTypeaheadInviteCoworkers_typeahead.view.subscribe('beforeSelect',function(j,k){
return h(k.selected);});};

i.prototype.

disable=function(){

};

f.exports=i;}),null);
