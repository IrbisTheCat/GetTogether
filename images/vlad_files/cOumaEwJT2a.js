if (self.CavalryLogger) { CavalryLogger.start_js(["uEPIF"]); }

/** www/__virtual__/x/XPubcontentPymlFeedbackController.js */



__d("XPubcontentPymlFeedbackController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pubcontent\/pyml\/feedback\/",{ego_service:{type:"String",required:true},pageids:{type:"String",required:true},__asyncDialog:{type:"Int"}});}),

null);

/** js/netego/PYMLEmployeeFeedbackHeaderLink.js */





__d('PYMLEmployeeFeedbackHeaderLink',['csx','cx','DOM','URI','XPubcontentPymlFeedbackController'],(function a(b,c,d,e,f,g,h,i){







var j=
{_isNullOrEmpty:function k(l){
return l===null||typeof l==='undefined'||l.length===0;},



setup:function k(l,m){
if(this._isNullOrEmpty(l))return;

var n=l.getAttribute('data-ego-fbid');
if(this._isNullOrEmpty(n))return;

var o=c('DOM').scry(l,'^.ego_section')[0];
if(this._isNullOrEmpty(o))return;

var p=
c('DOM').scry(o,"._5x1_")[0];
if(this._isNullOrEmpty(p)){

var q=c('XPubcontentPymlFeedbackController').getURIBuilder().
setString('pageids',n).
setString('ego_service',m).
getURI(),

r=c('DOM').scry(o,"._ohf")[0];
p=c('DOM').create
('a',

{rel:'dialog-post',
className:"_5x1_"+

(r?' '+"rfloat":'')+
(r?' '+"uiHeaderActions":''),

href:q},

'Feedback');


if(r){
var s=c('DOM').create
('div',

{className:"_z1u"});



c('DOM').insertAfter(r.lastChild,s);
c('DOM').appendContent(s,p);}else 

c('DOM').insertAfter
(c('DOM').scry(o,"._3653")[0],
p);}else{




var t=new (c('URI'))(p.getAttribute('href')),
u=t.getQueryData().pageids+','+n;
t.addQueryData({pageids:u});
p.setAttribute('href',t);}}};




f.exports=j;}),null);
