if (self.CavalryLogger) { CavalryLogger.start_js(["caK+3"]); }

/** js/plugins/PluginConnectButtonWrapIconButton.js */






__d('PluginConnectButtonWrapIconButton',['Arbiter','DOM','Event','Focus','FormSubmit','PlatformWidgetEndpoint','Plugin','PluginOptin','URI'],(function a(b,c,d,e,f,g){











var h=
{_connected:false,
_form:null,
_href:null,
_button:null,
_plugin:null,
_submitRequest:null,


initializeButton:function i
(j,
k,
l,
m,
n,
o,
p,
q,
r,
s){

this._connected=l;
this._form=j;
this._href=o;
this._button=k;
this._plugin=p;
this._submitRequest=null;
this._connecttip=r;
this._disconnecttip=s;

if(m){
c('Event').listen(j,'click',function(t){
t.preventDefault();
this.submit();}.
bind(this));

if(n)

setTimeout(function(){
this.submit();
this._button.toggleButton();}.
bind(this),0);



c('Arbiter').subscribe(c('Plugin').CONNECT,this._updatePlugin.bind(this));
c('Arbiter').subscribe(c('Plugin').DISCONNECT,this._updatePlugin.bind(this));
c('Arbiter').subscribe(c('Plugin').ERROR,function(t,u){return this._handleError(u);}.bind(this));}else 


c('Event').listen(this._form,'click',function(t){
t.preventDefault();
new (c('PluginOptin'))(p,c('URI').getRequestURI().getQueryData().api_key).
addReturnParams({act:'connect'}).
addLoginParams({social_plugin_action:q}).
start();});},




submit:function i(){

if(this._submitRequest!==null){
this._submitRequest.clearStatusIndicator();
this._submitRequest.abort();}


this._submitRequest=c('FormSubmit').send(this._form);

if(this._connected){
c('Plugin').disconnect(this._href);}else 

c('Plugin').connect(this._href);},



_updatePlugin:function i(j,k){
if(k.identifier!==this._href)
return;


var l=j===c('Plugin').CONNECT;

if(l!==this._button.isActivated())
this._button.toggleButton();

this._connected=l;
this._toggleFormAction();
this._button.setTitle(l?this._disconnecttip:this._connecttip);},


_toggleFormAction:function i(){
var j=c('PlatformWidgetEndpoint').plugins(this._plugin)+
'/'+(this._connected?'disconnect':'connect');
this._form.setAttribute('action',j);
this._form.setAttribute('ajaxify',j);},


_handleError:function i(j){
c('DOM').setContent(this._form,j.content);
var k=c('DOM').scry(this._form,'.confirmButton');
if(k.length===1)
c('Focus').set(k[0]);}};




f.exports=h;}),null);

/** shared/intl/formatNumber.js */





__d('formatNumber',['fbt','intlNumUtils'],(function a(b,c,d,e,f,g,h){

'use strict';




function i(l,m){
return c('intlNumUtils').formatNumber(l,m);}


function j(l){
var m=h._({"*":["{number}+","1b41e03b081e11a6bada6ac0312b59e7"]},[h.param

('number',
c('intlNumUtils').formatNumberWithThousandDelimiters(l),[0,l])]);




return m.toString();}


function k
(l,
m,
n){

return l>m?
j(m):
c('intlNumUtils').formatNumberWithThousandDelimiters(l);}


i.withThousandDelimiters=
c('intlNumUtils').formatNumberWithThousandDelimiters;
i.withMaxLimit=k;

f.exports=i;}),null);

/** shared/intl/intlSummarizeNumber.js */





__d('intlSummarizeNumber',['fbt','formatNumber'],(function a(b,c,d,e,f,g,h){





function i(j){var k=arguments.length<=1||arguments[1]===undefined?0:arguments[1];
j=parseFloat(j.toFixed(k));
if(Math.abs(j)<1000)
return c('formatNumber')(j,k);


j=parseFloat((j/1000).toFixed(k||1));
if(Math.abs(j)<1000)
return String(h._(["{number}K","7c78028d8878adbb68b2b5dcedcfb4b6"],
[h.param('number',c('formatNumber')(j,k||j%1&&1))]));





j=parseFloat((j/1000).toFixed(k||1));
if(Math.abs(j)<1000)
return String(h._(["{number}M","818cc459bb30336398a33b0960e964a5"],
[h.param('number',c('formatNumber')(j,k||j%1&&1))]));





j=parseFloat((j/1000).toFixed(k||1));
return String(h._(["{number}B","8caff7a0adc424c5706d6ed295579513"],
[h.param('number',c('formatNumber')(j,k||j%1&&1))]));}





f.exports=i;}),null);

/** js/plugins/PluginIconButton.js */







__d('PluginIconButton',['invariant','fbt','CSS','DOM','Event','intlSummarizeNumber'],(function a(b,c,d,e,f,g,h,i){















function j
(k,
l,
m,
n,
o){
'use strict';
n===null||m!==null||h(0,'Missing count label');

this.$PluginIconButton_button=k;
this.$PluginIconButton_countLabel=m;
this.$PluginIconButton_count=n;
this.$PluginIconButton_showXOnHover=o;

if(l===false){
c('Event').listen(k,'click',function(){return this.toggleButton();}.bind(this));
c('Event').listen(k,'toggle',function(){return this.toggleButton();}.bind(this));
if(this.$PluginIconButton_showXOnHover)
c('Event').listen
(k,
'mouseout',
function(){return c('CSS').removeClass(this.$PluginIconButton_button,'stop_hoverx');}.bind(this));}}



j.prototype.

toggleButton=function(){'use strict';
if(c('CSS').hasClass(this.$PluginIconButton_button,'active')===false){
c('CSS').addClass(this.$PluginIconButton_button,'active');

if(this.$PluginIconButton_showXOnHover)
c('CSS').addClass(this.$PluginIconButton_button,'stop_hoverx');


this.$PluginIconButton_updateCount(true);
c('CSS').addClass(this.$PluginIconButton_button,'is_animating');
setTimeout(function(){return c('CSS').removeClass(this.$PluginIconButton_button,'is_animating');}.bind(this),240);}else{

c('CSS').removeClass(this.$PluginIconButton_button,'active');
this.$PluginIconButton_updateCount(false);}};

j.prototype.

setTitle=function(k){'use strict';
this.$PluginIconButton_button.setAttribute('title',k);};
j.prototype.

$PluginIconButton_updateCount=function(k){'use strict';
var l=function m(n){
return i._(["{count}","77949add57b76716d9e0df2215dd2bcc"],
[i.param
('count',
c('intlSummarizeNumber')(n,0))]);};




if(this.$PluginIconButton_count!=null&&this.$PluginIconButton_count<1000){
this.$PluginIconButton_count=k?this.$PluginIconButton_count+1:this.$PluginIconButton_count-1;
c('DOM').setContent(this.$PluginIconButton_countLabel,l(this.$PluginIconButton_count));}};

j.prototype.

isActivated=function(){'use strict';
return c('CSS').hasClass(this.$PluginIconButton_button,'active');};



f.exports=j;}),null);

/** www/__virtual__/x/XPagesBrowserController.js */



__d("XPagesBrowserController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/",{category:{type:"String"},ref:{type:"String"},cityid:{type:"Int"},similar:{type:"Int"},frompageid:{type:"Int"},actAsPageID:{type:"Int"},source:{type:"String"},pyml:{type:"Int"},viewallpywo:{type:"Bool",defaultValue:false}});}),

null);
