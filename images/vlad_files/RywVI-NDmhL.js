if (self.CavalryLogger) { CavalryLogger.start_js(["LHfov"]); }

/** js/entstream/EntstreamInjectWarning.js */




__d('EntstreamInjectWarning',['CSS','DOM'],(function a(b,c,d,e,f,g){



var h,

i=


{init:function j(k){
h=k;},



showWarning:function j(k){
if(h){
c('CSS').show(h);
c('DOM').setContent(h,k);}}};




f.exports=i;}),null);

/** www/__virtual__/x/XIntlInlineDialogController.js */



__d("XIntlInlineDialogController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/translations\/inline\/dialog\/",{appid:{type:"Int"},displayed_locale:{type:"String"},hash:{type:"String",required:true},loc:{type:"String"},location:{type:"String",defaultValue:"inline"},phash:{type:"String"},project:{type:"String"},show_app:{type:"Bool",defaultValue:false},translation:{type:"String"},trid:{type:"Int"}});}),

null);

/** js/intl/IntlInlineTranslations.js */






__d('IntlInlineTranslations',['csx','cx','AsyncRequest','CSS','DOM','Event','LayerDestroyOnHide','Vector','XIntlInlineDialogController'],(function a(b,c,d,e,f,g,h,i){












var j=500,

k=false,
l;





function m(r){
while(r.parentNode){
if(c('CSS').hasClass(r,'intl-prototype-translatable')||
c('CSS').matchesSelector(r,"._4qbb")||
c('CSS').hasClass(r,'intl-prototype-contributed')||
c('CSS').hasClass(r,'intl-prototype-translated')||
c('CSS').hasClass(r,'intl-prototype-approved')||
c('CSS').hasClass(r,'intl-prototype-approvable')||
c('CSS').matchesSelector(r,"._4qbc")||
c('CSS').hasClass(r,'intl-prototype-autoapproved')||
c('CSS').hasClass(r,'intl-prototype-iapproved')||
c('CSS').hasClass(r,'intl-prototype-complained')||
c('CSS').hasClass(r,'intl-prototype-complainable')||
c('CSS').hasClass(r,'intl-prototype-unvotable')||
c('CSS').hasClass(r,'intl-prototype-votable')||
c('CSS').hasClass(r,'intl-prototype-reportable')||
c('CSS').matchesSelector(r,"._4qbd"))
return r;

r=r.parentNode;}

return null;}





function n(r){
var s=r.getAttribute('data-intl-hash'),
t=r.getAttribute('data-intl-locale'),
u=r.getAttribute('data-intl-displayed-locale'),
v=r.getAttribute('data-intl-app')||null,
w=r.getAttribute('data-intl-trid')||null,
x=r.getAttribute('data-intl-project'),
y=r.getAttribute('data-intl-translation')||null,




z=c('Vector').getViewportDimensions().x,
aa=z<j;
if(l&&!aa){
l.setContext(r);
l.setInsertParent(r);
l.show();}

k=true;

var ba=c('XIntlInlineDialogController').getURIBuilder().
setInt('appid',v).
setString('displayed_locale',u).
setString('hash',s).
setString('loc',t).
setString('project',x).
setBool('show_app',aa).
setString('translation',y).
setInt('trid',w).
getURI();

new (c('AsyncRequest'))(ba).
setFinallyHandler(function(){
k=false;
l&&l.hide();}).

setRelativeTo(r).
send();}





function o(r){
if(!r.isRightClick()&&!r.getModifiers().control||k)
return;


var s=m(r.getTarget());
if(!s)return;

s.oncontextmenu=function(){return false;};
n(s);}








function p(r,s,t){
var u=c('DOM').scry(document.body,'em[data-intl-hash="'+s+'"]');

u.filter(function(v){
return v.getAttribute('data-intl-app')==r&&
v.getAttribute('data-intl-locale')==t&&
!c('CSS').hasClass(v,'intl-ignore-update');});



return u;}


var q=





{bindListeners:function r(s){
c('Event').listen(document.body,'mousedown',o);
l=s;
l.disableBehavior(c('LayerDestroyOnHide'));},












updateTranslations:function r(s,t,u){
var v=p(u,s,t);

v.forEach(function(w){
var x=
{translatable:'contributed',
approvable:'iapproved',
votable:'voted',
unvotable:'voted',
complainable:'complained'};


for(var y in x)
if(c('CSS').hasClass(w,'intl-prototype-'+y)){
c('CSS').removeClass(w,'intl-prototype-'+y);
c('CSS').addClass(w,'intl-prototype-'+x[y]);}});}};






f.exports=q;}),null);
