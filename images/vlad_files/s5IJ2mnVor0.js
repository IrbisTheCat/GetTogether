if (self.CavalryLogger) { CavalryLogger.start_js(["AKTHF"]); }

/** js/modules/SelectorDeprecated.js */








__d('SelectorDeprecated',['Arbiter','Button','ContextualLayer','CSS','DataStore','DOM','Event','Focus','HTML','Keys','MenuDeprecated','Parent','Style','Toggler','TooltipData','URI','Vector','arrayContains','emptyFunction','getDocumentScrollElement'],(function a(b,c,d,e,f,g){
























var h,


i,
j=[],
k;







function l(w){
return c('Parent').byClass(w,'uiSelector');}








function m(w){
return c('Parent').byClass(w,'uiSelectorButton');}


function n(){
if(!i){
i=new (c('ContextualLayer'))({position:'below'},c('DOM').create('div'));
c('CSS').addClass(i.getRoot(),'uiSelectorContextualLayer');}

return i;}







function o(w){
return c('DOM').scry(w,'select')[0];}







function p(w){
return c('DOM').find(w,'div.uiSelectorMenuWrapper');}






var q=function w(){
q=c('emptyFunction');


c('MenuDeprecated').subscribe('select',function(x,y){

if(!h||!y||
y.menu!==v.getSelectorMenu(h))
return;


var z=r(h),
aa=s(y.item);

if(aa){
var ba=h,
ca=v.isOptionSelected(y.item),


da=v.inform
('select',
{selector:ba,option:y.item,clone:k});


if(da===false)
return;




if(z||!ca){
v.setSelected
(ba,
v.getOptionValue(y.item),
!ca);



v.inform('toggle',{selector:ba,option:y.item});


v.inform('change',{selector:ba});
c('Arbiter').inform('Form/change',{node:ba});




if(t(ba))
c('DataStore').set(ba,'dirty',true);}}





if(!z||!aa)
h&&v.toggle(h);});};








function r(w){
return !!w.getAttribute('data-multiple');}







function s(w){
return c('CSS').hasClass(w,'uiSelectorOption');}







function t(w){
return !!w.getAttribute('data-autosubmit');}







var u=function w(){
u=c('emptyFunction');

var x=


{keydown:function y(event){
var z=event.getTarget();


if(c('DOM').isInputNode(z))
return;


switch(c('Event').getKeyCode(event)){
case c('Keys').DOWN:
case c('Keys').SPACE:
case c('Keys').UP:
if(m(z)){
var aa=l(z);
v.toggle(aa);
return false;}

break;
case c('Keys').ESC:
if(h){


var ba=v.getSelectorButton(h);
v.toggle(h);
ba&&c('Focus').set(ba);
return false;}

break;}},




mouseover:function y(event){
var z=c('Parent').byAttribute(event.getTarget(),'ajaxify');
if(z&&c('CSS').hasClass(z,'uiSelectorButton'))
v.loadMenu(l(z));}};





c('Event').listen(document.body,x);};



c('Toggler').subscribe(['show','hide'],function(w,x){
var y=l(x.getActive());
if(y){
u();

q();

var z=v.getSelectorButton(y),
aa=v.getSelectorMenu(y),

ba=w==='show';
z.setAttribute('aria-expanded',ba?'true':'false');
if(ba){
h=y;


if(c('CSS').hasClass(z,'uiButtonDisabled')){
v.setEnabled(y,false);
return false;}


aa=aa||v.loadMenu(y);


var ca=c('Style').getScrollParent(y),
da=ca!==window&&
ca!==c('getDocumentScrollElement')();
if(da||
c('CSS').hasClass(y,'uiSelectorUseLayer')){

if(da)

j.push
(c('Event').listen(ca,'scroll',function(){
x.hide();}));






k=c('DOM').create('div',{className:y.className});
c('CSS').addClass(k,'invisible_elem');
c('Vector').
getElementDimensions(y).
setElementDimensions(k);

c('DOM').replace(y,k);


var ea=c('CSS').hasClass(y,'uiSelectorRight'),
fa=c('CSS').hasClass(y,'uiSelectorBottomUp');
n().
setContext(k).
setContent(y).
setPosition(fa?'above':'below').
setAlignment(ea?'right':'left').
show();}



c('MenuDeprecated').register(aa);


var ga=c('MenuDeprecated').getCheckedItems(aa);
if(!ga.length)
ga=c('MenuDeprecated').getEnabledItems(aa);

if(ga.length)
c('MenuDeprecated').focusItem(ga[0]);}else{


h=null;


if(k){

while(j.length)
j.pop().remove();



c('DOM').replace(k,y);
n().hide();

k=null;}



aa&&c('MenuDeprecated').unregister(aa);

if(t(y)&&c('DataStore').get(y,'dirty')){
var ha=c('DOM').scry(y,'input.submitButton')[0];
ha&&ha.click();

c('DataStore').remove(y,'dirty');}}




c('CSS').conditionClass
(v.getSelectorButton(y),'selected',ba);


v.inform
(ba?'open':'close',
{selector:y,clone:k});}});


























var v=Object.assign(new (c('Arbiter'))(),







{attachMenu:function w(x,y,z){
x=l(x);
if(x){
h&&c('MenuDeprecated').unregister(v.getSelectorMenu(h));
c('DOM').setContent(p(x),y);
h&&c('MenuDeprecated').register(v.getSelectorMenu(x));

k&&n().updatePosition();

if(z){

var aa=x.getAttribute('data-name');
aa&&z.setAttribute('name',aa);
if(!r(x))
z.setAttribute('multiple',false);



var ba=o(x);
if(ba){
c('DOM').replace(ba,z);}else 

c('DOM').insertAfter(x.firstChild,z);}


return true;}},










getOption:function w(x,y){
var z=v.getOptions(x),aa=z.length;
while(aa--)
if(y===v.getOptionValue(z[aa]))
return z[aa];


return null;},







getOptions:function w(x){
var y=c('MenuDeprecated').getItems(v.getSelectorMenu(x));
return y.filter(s);},







getEnabledOptions:function w(x){
var y=c('MenuDeprecated').getEnabledItems(v.getSelectorMenu(x));
return y.filter(s);},







getSelectedOptions:function w(x){
return c('MenuDeprecated').getCheckedItems(v.getSelectorMenu(x));},







getOptionText:function w(x){
return c('MenuDeprecated').getItemLabel(x);},








getOptionValue:function w(x){
var y=l(x),
z=o(y),
aa=v.getOptions(y).indexOf(x);
return aa>=0?z.options[aa+1].value:'';},







getSelectorButton:function w(x){
return c('DOM').find(x,'a.uiSelectorButton');},







getSelectorMenu:function w(x){
return c('DOM').scry(x,'div.uiSelectorMenu')[0];},









getValue:function w(x){
var y=o(x);
if(!y)
return null;



if(!r(x))
return y.value;


var z=[],
aa=y.options;
for(var ba=1,ca=aa.length;ba<ca;ba++)
if(aa[ba].selected)
z.push(aa[ba].value);


return z;},







isOptionSelected:function w(x){
return c('MenuDeprecated').isItemChecked(x);},











listen:function w(x,y,z){
return this.subscribe(y,function(aa,ba){
if(ba.selector===x)
return z(ba,aa);});},











loadMenu:function w(x,y){
var z=v.getSelectorMenu(x);
if(!z){

var aa=v.getSelectorButton(x),
ba=aa.getAttribute('ajaxify');
if(ba){
e(['AsyncRequest'],function(da){
var ea=new (c('URI'))(ba),
fa=ea.getQueryData();
ea.setQueryData({});

var ga=new da(ea).
setData(fa).
setNectarModuleDataSafe(aa).
setRelativeTo(aa);




y&&ga.setFinallyHandler(function(){
setTimeout(y,0);});

ga.send();}.

bind(this));



var ca=
c('HTML')
('<div class="uiSelectorMenuWrapper uiToggleFlyout">'+
'<div class="uiMenu uiSelectorMenu loading">'+
'<ul class="uiMenuInner">'+
'<li><span></span></li>'+
'</ul>'+
'</div>'+
'</div>');


c('DOM').appendContent(aa.parentNode,ca);

z=v.getSelectorMenu(x);


aa.removeAttribute('onmouseover');}}else 


y&&y();

return z;},







setButtonLabel:function w(x,y){
var z=v.getSelectorButton(x),
aa=parseInt(z.getAttribute('data-length'),10);

y=y||z.getAttribute('data-label')||'';
c('Button').setLabel(z,y);

if(typeof y==='string')
if(aa&&y.length>aa){
z.setAttribute('title',y);}else 

z.removeAttribute('title');},









setButtonTooltip:function w(x,y){
var z=v.getSelectorButton(x),
aa=c('Parent').byTag(z,'a');
aa&&c('TooltipData').set
(aa,
y||z.getAttribute('data-tooltip')||'');},








setEnabled:function w(x,y){

if(!y&&h&&l(x)===h)
v.toggle(x);

c('Button').setEnabled(v.getSelectorButton(x),y);},







setOptionEnabled:function w(x,y){
c('MenuDeprecated').setItemEnabled(x,y);},









setSelected:function w(x,y,z){
z=z!==false;

var aa=v.getOption(x,y);
if(!aa)
return;


var ba=v.isOptionSelected(aa);
if(z!==ba){
if(!r(x)&&!ba){

var ca=v.getSelectedOptions(x)[0];
ca&&c('MenuDeprecated').toggleItem(ca);}



c('MenuDeprecated').toggleItem(aa);}



v.updateSelector(x);},






toggle:function w(x){
c('Toggler').toggle(c('DOM').scry(l(x),'div.wrap')[0]);},







updateSelector:function w(x){
var y=v.getOptions(x),
z=v.getSelectedOptions(x),
aa=o(x).options,
ba=[],
ca=[];


for(var da=0,ea=y.length;da<ea;da++){
var fa=c('arrayContains')(z,y[da]);


aa[da+1].selected=fa;

if(fa){
var ga=v.getOptionText(y[da]);
ba.push(ga);
ca.push(y[da].getAttribute('data-tooltip')||ga);}}




aa[0].selected=!z.length;


var ha=c('CSS').hasClass(x,'uiSelectorDynamicLabel'),
ia=c('CSS').hasClass(x,'uiSelectorDynamicTooltip');
if(ha||ia){
var ja='';
if(r(x)){
var ka=v.getSelectorButton(x);
ja=ka.getAttribute('data-delimiter')||', ';}

ba=ba.join(ja);
ca=ca.join(ja);
ha&&v.setButtonLabel(x,ba);
ia&&v.setButtonTooltip(x,ca);}}});




f.exports=v;}),null);

/** js/ui/core/ui/button/ButtonGroup.js */







__d('ButtonGroup',['CSS','DataStore','Parent'],(function a(b,c,d,e,f,g){





var h='firstItem',
i='lastItem';


function j(o,p){
var q=c('Parent').byClass(o,p);
if(!q)
throw new Error('invalid use case');

return q;}



function k(o){
return c('CSS').shown(o)&&
Array.from(o.childNodes).some(c('CSS').shown);}



function l(o){
var p,q,r;
Array.from(o.childNodes).forEach(function(s){
r=k(s);

c('CSS').removeClass(s,h);
c('CSS').removeClass(s,i);
c('CSS').conditionShow(s,r);

if(r){
p=p||s;
q=s;}});



p&&c('CSS').addClass(p,h);
q&&c('CSS').addClass(q,i);
c('CSS').conditionShow(o,p);}



function m(o,p){
var q=j(p,'uiButtonGroupItem');
o(q);
l(q.parentNode);}








function n(o){'use strict';
this._root=j(o,'uiButtonGroup');
c('DataStore').set(this._root,'ButtonGroup',this);
l(this._root);}
n.









getInstance=function(o){'use strict';
var p=j(o,'uiButtonGroup'),
q=c('DataStore').get(p,'ButtonGroup');
return q||new n(p);};



Object.assign(n.prototype,





{hideItem:m.bind(null,c('CSS').hide),






showItem:m.bind(null,c('CSS').show),






toggleItem:m.bind(null,c('CSS').toggle)});


f.exports=n;}),null);

/** js/ui/core/ui/button/ButtonGroupMonitor.js */




__d('ButtonGroupMonitor',['ContextualDialog','ContextualLayer','CSS','Layer','Parent','SelectorDeprecated','DataStore'],(function a(b,c,d,e,f,g){









function h(i,j){
var k=
c('Parent').byClass(i,'bg_stat_elem')||
c('Parent').byClass(i,'uiButtonGroup');
if(!k&&j)
k=c('DataStore').get(j,'toggleElement',null);

if(k){
j&&c('DataStore').set(j,'toggleElement',k);
c('CSS').toggleClass(k,'uiButtonGroupActive');}}



c('Layer').subscribe
(['hide','show'],
function(i,j){
if(j instanceof c('ContextualLayer')||j instanceof c('ContextualDialog'))
h(j.getCausalElement(),j);});




c('SelectorDeprecated').subscribe
(['close','open'],
function(i,j){
h(j.selector);});}),
null);
