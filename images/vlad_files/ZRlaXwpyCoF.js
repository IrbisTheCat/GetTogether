if (self.CavalryLogger) { CavalryLogger.start_js(["POzhr"]); }

/** js/ads/rhc/EgoAdsObjectSet.js */





__d('EgoAdsObjectSet',['csx','DataAttributeUtils','DOM'],(function a(b,c,d,e,f,g,h){






var i=void 0;


function j(l){'use strict';
i=l;
this._allEgoUnits=[];
this._egoUnits=[];}
j.prototype.

init=function(l){'use strict';
this._allEgoUnits=l;
this._egoUnits=[];

this._allEgoUnits.forEach(function(m){
var n=k(m);


if(!n||!n.holdout)
this._egoUnits.push(m);},

this);};
j.prototype.




getCount=function(){'use strict';
return this._egoUnits.length;};
j.prototype.




forEach=function(l,m){'use strict';
this._egoUnits.forEach(l,m);};
j.prototype.





getUnit=function(l){'use strict';
return this._egoUnits[l];};
j.prototype.

getHoldoutAdIDsForSpace=function(l,m){'use strict';
if(!l||!m)
return [];


var n=[];
for(var o=0;l>0&&o<this._allEgoUnits.length;o++){
var p=this._allEgoUnits[o],
q=m(p),
r=k(p);

if(l>=q&&r&&r.holdout)
n.push(r.adid);


l-=q;}


return n;};
j.prototype.

getHoldoutAdIDsForNumAds=function(l){'use strict';
l=Math.min(l,this._allEgoUnits.length);

var m=[];
for(var n=0;n<l;n++){
var o=this._allEgoUnits[n],
p=k(o);

if(p&&p.holdout)
m.push(p.adid);}



return m;};



function k(l){

var m=c('DOM').scry
(l,
i||"div._4u8")[
0],

n=m&&c('DataAttributeUtils').getDataAttribute(m,'data-ad');
return n&&JSON.parse(n)||undefined;}


f.exports=j;}),null);

/** js/profile/timeline/modules/TimelineCapsule.js */





__d('TimelineCapsule',['csx','Arbiter','CSS','DataStore','DOM','DOMQuery','DOMScroll','Parent','TimelineConstants','TimelineLegacySections','Vector','$','queryThenMutateDOM'],(function a(b,c,d,e,f,g,h){
















var i=function(){

var j={},
k={};

function l(n){
c('DOMQuery').scry(n,"._3ram").forEach
(function(o){
var p=o.getAttribute('data-endmarker'),
q=o.getAttribute('data-pageindex'),

r=function t(){
if(!o.parentNode)

return;



c('DataStore').set(c('TimelineConstants').DS_LOADED,n.id,q);
c('DOM').remove(o);
c('Arbiter').inform(c('TimelineConstants').SECTION_FULLY_LOADED,
{scrubberKey:p,
pageIndex:q,
capsuleID:n.id,
childCount:n.childNodes.length});};





if(c('TimelineLegacySections').get(p)){
r();}else 

var s=c('Arbiter').subscribe
(c('TimelineConstants').SECTION_REGISTERED,
function(t,u){
if(u.scrubberKey===p){
r();
s.unsubscribe();}});});







c('Arbiter').inform('TimelineCapsule/balanced',
{capsule:n});}






function m(n,o){
var p=c('Parent').byAttribute(n,'data-size');
if(p)



if(c('CSS').hasClass(n.parentNode,'timelineReportContent')){
o(n);}else 

o(p);}





return {removeUnit:function n(o){
m(o,function(p){
c('DOM').remove(p);});},



removeUnitWithID:function n(o){
i.removeUnit(c('$')(o));},


hideUnit:function n(o){
m(o,function(p){
c('CSS').addClass(p,'fbTimelineColumnHidden');});},



undoHideUnit:function n(o,p){
c('DOM').remove(c('Parent').byClass(p,'hiddenText'));
m(o,function(q){
c('CSS').removeClass(q,'fbTimelineColumnHidden');});},



unplacehold:function n(o){
var p=c('$')(o);
p.style.top=null;
c('CSS').removeClass(p,'visiblePlaceholder');
c('CSS').removeClass(p,'placeholder');
var q=c('Parent').byClass(p,'fbTimelineCapsule');
delete j[q.id][o];
i.balanceCapsule(q);},


scrollToCapsule:function n(o){
if(!Object.prototype.hasOwnProperty.call(k,o.id)){
var p=c('Vector').getElementPosition(o.parentNode);
c('DOMScroll').scrollTo(new (c('Vector'))
(c('Vector').getScrollPosition().x,
p.y-c('TimelineConstants').SCROLL_TO_OFFSET,
'document'));

k[o.id]=true;}},




loadTwoColumnUnits:function n(o,p,q){
var r=c('$')(o);
c('queryThenMutateDOM')
(function(){
var s=c('Parent').byClass(r,'fbTimelineSection');
if(s&&!p){
var t=c('DOMQuery').find
(r,
"._2t4u"),

u=c('DOMQuery').find
(r,
"._2t4v"),

v=
u.offsetHeight-t.offsetHeight;
c('DataStore').set
(c('TimelineConstants').DS_COLUMN_HEIGHT_DIFFERENTIAL,
q,
v);}},



l.bind(null,r));}};}



();

f.exports=i;}),null);

/** js/profile/timeline/modules/TimelineSideAds.js */





__d('TimelineSideAds',['csx','cx','AdsMouseStateStore','Animation','Arbiter','CSS','DataAttributeUtils','DOM','EgoAdsObjectSet','Event','ProfileTabUtils','StickyController','TimelineAdsConfig','TimelineComponentKeys','TimelineConstants','TimelineController','UIPagelet','UITinyViewportAction','URI','Vector','cxodecode','debounce','ge','getOrCreateDOMID','queryThenMutateDOM'],(function a(b,c,d,e,f,g,h,i){




























var j=75,
k='data-height',
l=c('AdsMouseStateStore').STATES,

m=c('AdsMouseStateStore').get(),


n=30000,
o=0,

p=false,
q,
r,
s,
t,
u,
v,
w,
x,
y,
z,
aa=Infinity,
ba=false,
ca=5,

da,
ea,

fa,
ga,
ha,
ia,
ja,
ka,
la,
ma,
na,

oa=void 0,
pa=void 0,
qa=void 0,
ra=void 0,


sa=false,

ta=[],
ua;












function va(ub,vb,wb){
var xb=0;
if(vb)
xb+=vb.getHeight();


if(!ab()&&!xb)
return;


ub-=xb;

var yb=0;
for(var zb=0;zb<wb;zb++)
yb+=jb(zb);


if(vb)
if(ub<yb){
ub+=vb.fold(yb-ub);}else
if(ub>yb)
ub-=vb.unfold(ub-yb);



return ub;}


function wa(){


var ub=r.cloneNode(true);
ub.id='';



var vb=new (c('EgoAdsObjectSet'))(oa);
vb.init(c('DOM').scry(ub,'div.ego_unit'));


var wb=true;
vb.forEach(function(xb){
if(wb){
wb=false;}else 

c('DOM').remove(xb);});


c('CSS').addClass(ub,'fixed_elem');

return ub;}


function xa(){
v=undefined;


if(!c('ProfileTabUtils').tabHasScrubber(x)){
bb(ca);
eb();}else 

if(ga){
cb(r,false);



var ub=ha;
ha&&c('DOM').remove(ha);
ha=wa();


if(ub)
pb();


bb(ea);
eb();







if(!z){
var vb=c('TimelineController').getCurrentScrubber();
if(vb)
ob(vb.getRoot(),vb.getOffset());}


z&&z.start();}else 

tb.adjustAdsToFit();}




function ya(){


if(ha){
c('DOM').remove(ha);
ha=null;}


if(z){
z.stop();
z=null;}


var ub=c('ProfileTabUtils').tabHasScrubber(x);

c('CSS').conditionClass
(r,
'fixed_elem',
!ga&&(ab()||ub));


c('CSS').conditionClass
(r,
pa||"_5w67",
!ub);

c('CSS').conditionClass
(r,
qa||"_5w68",
ub);}








function za(ub){
var vb=c('Vector').getViewportDimensions().y,
wb=c('TimelineController').getCurrentScrubber(),
xb=wb?wb.getOffset():
c('TimelineConstants').SCRUBBER_DEFAULT_OFFSET,
yb=vb-xb-j;
if(wb||ab())
return va(yb,wb,ub);}



function ab(){
return c('ProfileTabUtils').tabHasFixedAds(x);}











function bb(ub){
u=Math.min(ub,w.getCount());

w.forEach(function(vb,wb){
cb(vb,wb>=u);});



cb(r,u===0);}


function cb(ub,vb){
c('CSS').conditionClass
(ub,
ra||"_53o5",
vb);

ub.setAttribute('aria-hidden',vb?'true':'false');}


function db(ub){

var vb=c('DOM').scry
(w.getUnit(ub),
oa||"div._bef");

if(!vb||vb.length===0)
return;


var wb=c('DataAttributeUtils').getDataAttribute(vb,'data-ad');
return JSON.parse(wb).adid;}


function eb(){
gb();
fb();}


function fb(){
var ub;







if(v!==undefined){
ub=w.getHoldoutAdIDsForSpace(v,kb);}else 

ub=w.getHoldoutAdIDsForNumAds(u);


if(ub)
ub.forEach(hb);}










function gb(){
if(!ia)
return;






for(var ub=u-1;ub>=0;--ub){



if(z&&z.isFixed()&&
(ub!==0||ha&&!c('CSS').shown(ha)))
continue;


var vb=db(ub);


if(!vb||!ia[vb])
return;


hb(vb);}}



function hb(ub){
if(!ia[ub])
return;


var vb=c('DOM').create('iframe',
{src:new (c('URI'))('/ai.php').addQueryData({aed:ia[ub]}),
width:0,
height:0,
frameborder:0,
scrolling:'no',
className:'fbEmuTracking'});

vb.setAttribute('aria-hidden','true');

c('DOM').appendContent(r,vb);


delete ia[ub];}






function ib(ub){
var vb=0;

for(var wb=0;wb<ca;wb++){
var xb=jb(wb);
ub-=xb;

if(ub>0&&xb>0)
vb++;}



return vb;}





function jb(ub){
var vb=w.getUnit(ub);


if(!vb)
return 0;


return kb(vb);}


function kb(ub){
if(!ub.getAttribute(k))
lb(ub);


return parseInt(ub.getAttribute(k),10);}


function lb(ub){
ub.setAttribute(k,ub.offsetHeight);}


function mb(){
for(var ub=0;ub<w.getCount();ub++){
var vb=w.getUnit(ub);
if(!vb)
continue;

lb(vb);}}



function nb(){
var ub=c('DOM').scry(r,'div.ego_unit');
w.init(ub);

var vb=ub.length;

if(!vb)
return;







c('CSS').addClass(w.getUnit(0),'ego_unit_no_top_border');

xa();

setTimeout(function(){
ub.forEach(lb);
tb.adjustAdsToFit();
aa=Date.now();},
0);}


function ob(ub,vb){
z=new (c('StickyController'))
(ub,
vb,
function(wb){

if(wb){
pb();}else{

c('DOM').remove(ha);
eb();}});




if(ha)
z.start();}



function pb(){
c('DOM').insertAfter(r,ha);
qb();}


function qb(){
c('CSS').conditionShow
(ha,
jb(0)<=za(1)&&
!c('UITinyViewportAction').isTiny());}



function rb(){
if(y){
var ub=c('ge')(s);
c('DOM').find(ub,'.ego_column').appendChild(y);}

if(c('TimelineAdsConfig').fade)
new (c('Animation'))(c('ge')(s)).
from('opacity',0).
to('opacity',1).
duration(600).
go();}



function sb(ub){
return !!c('DOM').scry(ub,'div.fbEmuHidePoll')[0];}


var tb=
{init:function ub(vb,wb,xb){
if(p)
return;

if(xb.nonce){var yb=





xb.nonce.map(function(zb){return c('cxodecode')(zb);});oa=yb[0];pa=yb[1];qa=yb[2];ra=yb[3];}

w=new (c('EgoAdsObjectSet'))(oa);
ca=xb.max_ads;
q=xb.refresh_delay;
n=xb.refresh_threshold;
da=xb.min_ads;
ea=xb.min_ads_short;

p=true;
t=wb;
r=vb;
m.updateRhcID(c('getOrCreateDOMID')(r));

ja=c('Arbiter').subscribe

(['UFI/CommentAddedActive',
'UFI/CommentDeletedActive',
'UFI/LikeActive',
'Curation/Action',
'ProfileBrowser/LoadMoreContent',
'Ads/NewContentDisplayed'],

tb.loadAdsIfEnoughTimePassed);


ka=c('Arbiter').subscribe
('TimelineSideAds/refresh',
tb.forceReloadAds);


la=c('Arbiter').subscribe
('ProfileQuestionAnswered',
tb.forceReloadAdsWithCallback);


ma=c('Arbiter').subscribe
('Ads/displayPoll',
tb.displayAdsPoll);


na=c('Arbiter').subscribe
('Ads/hidePoll',
tb.hideAdsPoll);


ua=c('debounce')
(tb.loadAdsIfEnoughTimePassed,
q,
this,
true);


if(xb.mouse_move){
ta.push
(c('Event').listen(window,'mousemove',ua));


ta.push
(c('Event').listen(window,'scroll',ua));

ta.push
(c('Event').listen(window,'resize',ua));


ta.push
(c('Event').listen(r,'mouseenter',function(){
ba=true;}));


ta.push
(c('Event').listen(r,'mouseleave',function(){
ba=false;}));}




c('TimelineController').register(c('TimelineComponentKeys').ADS,tb);},


setShortMode:function ub(vb){
ga=vb;},



start:function ub(vb){
ia=vb;
fa=null;
nb();},


updateCurrentKey:function ub(vb){
if(vb==x)
return;

x=vb;
ya();},


loadAds:function ub(vb){
if(fa)


return;


aa=Infinity;

fa=c('UIPagelet').loadFromEndpoint
('WebEgoPane',
r.id,

{pid:33,
data:
[t,
'timeline_'+vb,
ga?ea:ca,
++o,
false]},



{crossPage:true,
bundle:false,
handler:rb});},






registerScrubber:function ub(vb){
if(ga)
ob(vb.getRoot(),vb.getOffset());




!fa&&tb.adjustAdsToFit();},


intentShown:function ub(){
if(!c('TimelineAdsConfig').stateRefresh)

return false;

switch(m.getState()){
case l.HOVER:
case l.INTENT:


default:return true;
case l.NO_INTENT:
return false;
case l.STATIONARY:
return !c('TimelineAdsConfig').refreshOnStationary;}},



loadAdsIfEnoughTimePassed:function ub(){







if(n&&
Date.now()-aa>=n&&
!c('UITinyViewportAction').isTiny()&&
(!z||z.isFixed())&&
(!ia||!ia[db(0)])&&
!tb.intentShown()&&
!ba)
tb.loadAds(x);

tb.adjustAdsToFit();},


forceReloadAdsWithCallback:function ub(vb,wb){
y=wb;
s=c('getOrCreateDOMID')(r);
tb.loadAds(x);},


forceReloadAds:function ub(){
tb.loadAds(x);},


displayAdsPoll:function ub(){



var vb=-1;
for(var wb=0;wb<w.getCount();wb++){
var xb=w.getUnit(wb);
if(!xb)
continue;

if(vb===-1&&sb(xb))
vb=wb;

lb(xb);}

tb.adjustAdsToFit();




if(vb===u&&vb>0){
cb(w.getUnit(vb-1),true);
cb(w.getUnit(vb),false);}},



hideAdsPoll:function ub(){
mb();
tb.adjustAdsToFit();},


adjustAdsToFit:function ub(){
if(!r||sa)
return;

sa=true;


if(ga){


if(z&&ha){


z.handleScroll();


if(z.isFixed()){

c('CSS').conditionShow
(ha,
jb(0)<=za(1)&&
!c('UITinyViewportAction').isTiny());}else 






bb(ea);

eb();}

sa=false;
return;}




var vb=0;

c('queryThenMutateDOM')
(function(){
var wb=za(da);
if(wb!==undefined){
v=wb;
vb=ib(wb);}},


function(){
if(vb>0){
bb(vb);
eb();
sa=false;}});},





reset:function ub(){
z&&z.stop();
fa&&fa.cancel();
w=new (c('EgoAdsObjectSet'))(oa);
r=null;
z=null;
fa=null;
o=0;
ga=null;
ha=null;
x=null;
aa=Infinity;
p=false;
ja&&c('Arbiter').unsubscribe(ja);
ja=null;
ka&&c('Arbiter').unsubscribe(ka);
ka=null;
la&&
c('Arbiter').unsubscribe(la);
ma&&c('Arbiter').unsubscribe(ma);
na&&c('Arbiter').unsubscribe(na);
la=null;
ba=false;

ta.forEach(function(vb){
vb.remove();});

ta=[];
ua&&
ua.reset();}};



f.exports=b.TimelineSideAds||tb;}),null);

/** js/profile/timeline/modules/TimelineStickyHeader.js */





__d('TimelineStickyHeader',['Animation','Arbiter','BlueBar','Bootloader','CSS','DOM','ProfileTabConst','ProfileTabUtils','ProfileTimelineUILogger','Style','TimelineComponentKeys','TimelineController','Vector','ViewportBounds','UITinyViewportAction','ge','getOrCreateDOMID','queryThenMutateDOM'],(function a(b,c,d,e,f,g){





















var h=200,
i=358,
j=48,

k=false,
l=false,
m,
n,
o,
p,
q=false,

r=0,
s,
t,

u={},

v=
{VISIBLE:'TimelineStickyHeader/visible',
ADJUST_WIDTH:'TimelineStickyHeader/adjustWidth',

init:function w(x){
if(k)
return;

k=true;
m=x;
n=c('DOM').find(x,'div.name');
o=c('DOM').find(x,'div.actions');
l=c('CSS').hasClass(x,'fbTimelineStickyHeaderVisible');

var y,
z=false,
aa=true;

c('queryThenMutateDOM')
(function(){
var ba=c('BlueBar').getBar();
if(ba.offsetTop&&
!c('ge')('page_admin_panel')&&
c('TimelineController').getCurrentKey()!==c('ProfileTabConst').TIMELINE){
y=c('Vector').tElementDimensions(ba).y;
z=true;}

aa=c('BlueBar').hasFixedBlueBar();},

function(){


if(z){
c('Bootloader').loadModules
(["StickyController"],
function(ba){
new ba(x,y).start();},
'TimelineStickyHeader');}else 


c('CSS').addClass(x,'fixed_elem');


if(!aa)
c('CSS').addClass(x,'fbTimelineStickyHeaderNonFixedBlueBar');




v.updateBounds(l);

c('TimelineController').register
(c('TimelineComponentKeys').STICKY_HEADER,
v);},


'TimelineStickyHeader/init');},



reset:function w(){
k=false;
l=false;
m=null;
n=null;
o=null;
u={};

p.remove();
p=null;},


handleTabChange:function w(x){
r=c('ProfileTabUtils').isTimelineTab(x)?
i-j:
0;

if(!c('ProfileTabUtils').tabHasStickyHeader(x)){
this.toggle(false,function(){return c('CSS').hide(m);});
return;}


c('CSS').show(m);},


updateBounds:function w(){
c('queryThenMutateDOM')
(function(){
s=m.offsetTop;
t=m.scrollHeight;},

function(){
p=c('ViewportBounds').addTop(function(){
return l?s+t:0;});},


'TimelineStickyHeader/init');},



check:function w(x){
if(c('UITinyViewportAction').isTiny()){
this.toggle(false);
return;}


var y=
r===0||
x>=r;

this.toggle(y);},


toggle:function w(x,y){
if(x===l){
y&&y();
return;}


var z=x?s-t:s,
aa=x?s:s-t;

c('Style').set(m,'top',z+'px');
c('CSS').addClass(m,'fbTimelineStickyHeaderAnimating');

var ba=c('getOrCreateDOMID')(m);
u[ba]&&u[ba].stop();
u[ba]=new (c('Animation'))(m).
from('top',z).
to('top',aa).
duration(h).
ondone(function(){
u[ba]=null;

if(x&&!q){
c('ProfileTimelineUILogger').logStickyHeaderImpression();
q=true;}


c('queryThenMutateDOM')
(null,
function(){
c('CSS').conditionClass(m,'fbTimelineStickyHeaderHidden',!x);
m.setAttribute('aria-hidden',x?'false':'true');
c('CSS').removeClass(m,'fbTimelineStickyHeaderAnimating');
c('Style').set(m,'top','');

v.updateBounds();
c('Arbiter').inform(v.VISIBLE,x);
y&&y();});}).



go();



l=x;
if(l)
v.adjustWidth();},



adjustWidth:function w(){
c('Arbiter').inform
(v.ADJUST_WIDTH,
n,
c('Arbiter').BEHAVIOR_STATE);},



getRoot:function w(){
return m;},



setActions:function w(x){
if(k&&x){
c('DOM').setContent(o,x);
o=x;}}};




f.exports=b.TimelineStickyHeader||v;}),null);

/** js/profile/timeline/modules/TimelineStickyHeaderNav.js */




__d('TimelineStickyHeaderNav',['Arbiter','BlueBar','ButtonGroup','CSS','DataStore','DateStrings','DOM','Event','Parent','ProfileTimelineUILogger','SelectorDeprecated','Style','SubscriptionsHandler','TimelineComponentKeys','TimelineConstants','TimelineController','UITinyViewportAction','URI','Vector','queryThenMutateDOM'],(function a(b,c,d,e,f,g){























var h=false,
i,
j,

k,
l,
m,
n,
o,
p,
q,
r,
s,
t={},
u={},
v=[],
w=false,
x=[],
y=[],

z,

aa=80;

function ba(){
var na=c('SelectorDeprecated').getSelectorMenu(m);
z.addSubscriptions
(c('Event').listen(na,'click',ca),
c('Arbiter').subscribe
(c('TimelineConstants').SECTION_REGISTERED,
ea));}




function ca(event){
var na=c('Parent').byTag(event.getTarget(),'a'),
oa=na&&c('DataStore').get(na,'key');
if(oa){
c('TimelineController').stickyHeaderNavWasClicked(oa);
c('TimelineController').navigateToSection(oa);
c('ProfileTimelineUILogger').logStickyHeaderScrubberClick(oa);
event.prevent();}}



function da(na){
if(r===na&&
p[na]&&
!j.custom_subsection_menu){
ia(na);}else 

fa();

c('TimelineController').adjustStickyHeaderWidth();}


function ea(na,oa){
var pa=oa.section,
qa=pa&&pa.getParentKey();
if(!qa)
return;


var ra=ha(qa),
sa=c('TimelineController').getCurrentScrubber(),
ta=pa.getScrubberKey(),
ua=sa?
sa.getLabelForSubnav(qa,ta):
ua=ga(ta);

if(ua){
p[qa]=true;
ja(ra,{key:ta,label:ua});
da(qa);}}



function fa(){
if(k)
k.hideItem(n);}



function ga(na){
var oa=na.split('_');
return c('DateStrings').getMonthName(parseInt(oa.pop(),10));}


function ha(na){
var oa=o[na];
if(!oa){
oa=o[na]=n.cloneNode(true);
var pa=c('DOM').scry(oa,'li.activityLog a')[0];
if(pa)
pa.href=
new (c('URI'))(pa.href).addQueryData({key:na});


z.addSubscriptions
(c('Event').listen(oa,'click',ca));}


return oa;}


function ia(na){
var oa=ha(na);

c('DOM').insertAfter(n,oa);

c('CSS').hide(n);
for(var pa in o){
var qa=o[pa];
c('CSS').conditionShow(qa,qa===oa);}


if(k)
k.showItem(n);}






function ja(na,oa){
var pa=c('DOM').create('a',
{href:'#',rel:'ignore',className:'itemAnchor',tabIndex:0},
c('DOM').create('span',{className:'itemLabel fsm'},oa.label));

pa.setAttribute('data-key',oa.key);
pa.setAttribute('aria-checked',false);
var qa=c('DOM').create('li',
{className:'uiMenuItem uiMenuItemRadio uiSelectorOption'},
pa);

qa.setAttribute('data-label',oa.label);
var ra=c('DOM').find(na,'ul.uiMenuInner'),

sa=c('DOM').create('option',{value:oa.key},oa.label),
ta=c('DOM').find(na,'select');

if(oa.key==='recent'){

c('DOM').prependContent(ra,qa);

c('DOM').insertAfter(ta.options[0],sa);}else{

c('DOM').appendContent(ra,qa);
c('DOM').appendContent(ta,sa);}}



function ka(na,oa){
var pa=c('DOM').scry(na,'li.uiMenuItem');
if(!pa)
return;

for(var qa=0;qa<pa.length;qa++){
var ra=pa[qa];
if(c('CSS').hasClass(ra,oa)||
ra.firstChild.getAttribute('data-key')==oa){
c('DOM').remove(ra);
break;}}



var sa=c('DOM').find(na,'select'),
ta=c('DOM').scry(sa,'option');
for(qa=0;qa<ta.length;qa++)
if(ta[qa].value===oa){
c('DOM').remove(ta[qa]);
return;}}




function la(event){
var na=c('Parent').byClass(event.target,'itemAnchor');
if(na){
var oa=c('DataStore').get(na,'tab-key');
if(oa)
c('ProfileTimelineUILogger').logStickyHeaderNavItemClick(oa);}}




var ma=

{init:function na(oa,pa){
if(h)
return;

h=true;
i=oa;
j=pa||{};
l=c('DOM').find(i,'div.pageMenu');
m=c('DOM').find(i,'div.sectionMenu');
n=c('DOM').find(i,'div.subsectionMenu');

s=c('DOM').find(l,'li.uiMenuSeparator');
k=c('ButtonGroup').getInstance(l);

z=new (c('SubscriptionsHandler'))();

o={};
p={};
q={};
ma.adjustMenuHeights();

ba();

c('TimelineController').register
(c('TimelineComponentKeys').STICKY_HEADER_NAV,
ma);


y.forEach(function(qa){
qa();});


z.addSubscriptions
(c('Event').listen(l,'click',la));},



reset:function na(){
h=false;
j={};
v=[];
t={};
u={};
w=false;
x=[];
i=null;
l=null;
m=null;
n=null;
s=null;
o={};
p={};
q={};

z.release();},


addTimePeriod:function na(oa){
var pa=c('TimelineController').getCurrentScrubber();
if(!pa)
return;

var qa=pa.getLabelForNav(oa);
if(!qa)
return;


ja(m,{key:oa,label:qa});

var ra=c('DOM').find(m,'ul.uiMenuInner');
if(oa==='recent'||ra.children.length<2)
c('SelectorDeprecated').setSelected(m,oa,true);},



updateSection:function na(oa,pa){
if(pa){
var qa=ha(oa);
c('SelectorDeprecated').setSelected(qa,pa);}else 

q[oa]=true;


r=oa;
c('SelectorDeprecated').setSelected(m,oa,true);
da(oa);},


adjustMenuHeights:function na(){
var oa='';
c('queryThenMutateDOM')
(function(){
if(!c('UITinyViewportAction').isTiny()){
oa=
c('Vector').getViewportDimensions().y-
c('Vector').getElementDimensions(c('BlueBar').getBar()).y-
aa;

oa+='px';}},


function(){
[l,m].map(function(pa){
if(pa)
c('Style').set(c('DOM').find(pa,'ul.uiMenuInner'),'maxHeight',oa);});});},






initPageMenu:function na(oa,pa){
if(!h){
y.push
(ma.initPageMenu.bind(null,oa,pa));

return;}


function qa(ra,sa){
ra.forEach(function(ta){
var ua=u[ta]=c('DOM').create('li');
c('CSS').hide(ua);
sa?
c('DOM').insertBefore(s,ua):
c('DOM').appendContent(c('DOM').find(l,'ul.uiMenuInner'),ua);});}



qa(oa,true);
qa(pa,false);

t.info=c('DOM').scry(l,'li')[0];
v=pa;

w=true;
if(x.length)
x.forEach(function(ra){
ma.registerPageMenuItem(ra.key,ra.item);});},




registerPageMenuItem:function na(oa,pa){
if(!w){
x.push({key:oa,item:pa});
return;}

if(u[oa]){
c('DOM').replace(u[oa],pa);
t[oa]=pa;
delete u[oa];

if(v.indexOf(oa)>=0)
c('CSS').show(s);}},




removeTimePeriod:function na(oa){
ka(m,oa);},


hideSectionMenu:function na(){
if(h)
c('CSS').hide(m);}};




f.exports=ma;}),null);
