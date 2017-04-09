if (self.CavalryLogger) { CavalryLogger.start_js(["sjCxt"]); }

/** js/ads/ui/boosted_pagelike/BoostedPagelikeUtils.js */







__d('BoostedPagelikeUtils',['Event'],(function a(b,c,d,e,f,g){



var h={};

Object.assign(h,















{addTooltipIfTruncated:function i
(j,
k,
l,
m){
l=l?l:j;
m=
m?m:j;



c('Event').listen(l,'mouseover',function(){
var n=
m.offsetWidth<
m.scrollWidth;
if(n&&!j.title)
j.title=k;});},




redirectClickToButton:function i
(j,k){
c('Event').listen(j,'click',function(){
if(!k.disabled)
k.click();});}});





f.exports=h;}),null);

/** js/games/desktop/tracking/ArcadeAtlasPixel.js */






__d('ArcadeAtlasPixel',['URI','emptyFunction','getDOMImageSize'],(function a(b,c,d,e,f,g){





var h=11002204187427,

i=

{track:function j(event){
var k=new (c('URI'))
('https://ad.atdmt.com/m/img;m='+h+
';cache='+Math.random());


k.addQueryData({event:event});

c('getDOMImageSize')(k,c('emptyFunction'));}};



f.exports=i;}),null);

/** js/games/desktop/tracking/ArcadeFacebookPixel.js */






__d('ArcadeFacebookPixel',[],(function a(b,c,d,e,f,g){


!function(i,j,k,l,m,n,o){if(i.fbq)return;m=i.fbq=function(){m.callMethod?
m.callMethod.apply(m,arguments):m.queue.push(arguments);};if(!i._fbq)i._fbq=m;
m.push=m;m.loaded=true;m.version='2.0';m.queue=[];n=j.createElement(k);n.async=true;
n.src=l;o=j.getElementsByTagName(k)[0];o.parentNode.insertBefore(n,o);}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

var h=window.fbq;


h('init','1094144027348012');
h('track','PageView');

f.exports={fbq:h};}),null);

/** js/games/desktop/tracking/ArcadeGooglePixel.js */









__d('ArcadeGooglePixel',['URI','emptyFunction','getDOMImageSize'],(function a(b,c,d,e,f,g){





var h='https://www.googleadservices.com/pagead/conversion/963623955/?label=2-zMCPq1pG0Qk_i-ywM&amp;guid=ON&amp;script=0',

i=
{trackDownloadClick:function j(){
c('getDOMImageSize')(new (c('URI'))(h),c('emptyFunction'));}};



f.exports=i;}),null);

/** js/games/desktop/tracking/ArcadeTTDPixel.js */








__d('ArcadeTTDPixel',['URI','emptyFunction','getDOMImageSize'],(function a(b,c,d,e,f,g){





var h='https://insight.adsrvr.org/track/evnt/?adv=mz1fyqh&ct=0:v5zyg32&fmt=3',
i='https://insight.adsrvr.org/track/conv/?adv=mz1fyqh&ct=0:b6zg6mm&fmt=3',

j=

{trackLandingPage:function k(){
c('getDOMImageSize')(new (c('URI'))(h),c('emptyFunction'));},


trackDownloadClick:function k(){
c('getDOMImageSize')(new (c('URI'))(i),c('emptyFunction'));}};



f.exports=j;}),null);

/** js/games/ArcadeLandingPageDownloadButton.js */






__d('ArcadeLandingPageDownloadButton',['ArcadeAtlasPixel','ArcadeFacebookPixel','ArcadeGooglePixel','ArcadeTTDPixel','Event'],(function a(b,c,d,e,f,g){







var h=

{init:function i(j){
c('Event').listen
(j,
'click',
function(){
c('ArcadeFacebookPixel').fbq('track','AddToCart');
c('ArcadeAtlasPixel').track('download');
c('ArcadeTTDPixel').trackDownloadClick();
c('ArcadeGooglePixel').trackDownloadClick();});}};





f.exports=h;}),null);

/** js/ui/layer/behaviors/LayerHideOnSuccess.js */





__d('LayerHideOnSuccess',[],(function a(b,c,d,e,f,g){



function h(i){'use strict';
this._layer=i;}
h.prototype.

enable=function(){'use strict';
this._subscription=this._layer.subscribe
('success',
this._layer.hide.bind(this._layer));};

h.prototype.

disable=function(){'use strict';
if(this._subscription){
this._subscription.unsubscribe();
this._subscription=null;}};




Object.assign(h.prototype,
{_subscription:null});


f.exports=h;}),null);

/** js/ui/layer/behaviors/LayerPageFitHeight.js */





__d('LayerPageFitHeight',['DOMQuery','Event','Style','Vector','debounce'],(function a(b,c,d,e,f,g){










var h=40,




i=300;







function j(k){'use strict';
this._layer=k;
this._listener=null;
this._subscription=null;
this._bottomMargin=k.getBottomMargin();
if(this._bottomMargin===null)
this._bottomMargin=h;}

j.prototype.

enable=function(){'use strict';
this._listener=c('Event').listen
(window,
'resize',
c('debounce')(this._handle.bind(this)));


var k=this._layer.getContentRoot();
this._wrap=c('DOMQuery').find(k,'div.uiLayerPageContentWrap');
this._inner=c('DOMQuery').find(this._layer.getRoot(),'div.uiLayerPageInner');
this._content=c('DOMQuery').find(this._wrap,'div.uiLayerPageContent');
this._footer=c('DOMQuery').scry(k,'div.uiLayerPageFooter')[0]||null;


this._subscription=this._layer.subscribe
('show',
this._handle.bind(this));};

j.prototype.

disable=function(){'use strict';
this._listener&&this._listener.remove();
this._subscription&&this._subscription.unsubscribe();
this._listener=this._subscription=null;
this._wrap=this._content=this._inner=this._footer=null;};
j.prototype.

_handle=function(){'use strict';
var k=c('Vector').getElementPosition(this._content).y,
l=c('Vector').getViewportDimensions().y,
m=0;
if(this._footer)
m=c('Vector').getElementDimensions(this._footer).y;


var n=
l-
k-
m-
this._bottomMargin,

o=Math.max(i,n);
c('Style').set(this._wrap,'height',o+'px');
c('Style').set(this._inner,'paddingBottom',this._bottomMargin+'px');

this._layer.inform('resize',{height:o});};



f.exports=j;}),null);
