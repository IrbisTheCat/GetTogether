if (self.CavalryLogger) { CavalryLogger.start_js(["7z9dw"]); }

/** js/dock/nub/IntlNub.js */





__d('IntlNub',['csx','BanzaiNectar','CSS','NubController','Toggler'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits








(k,c('NubController'));j=i&&i.prototype;
function k
(l){
'use strict';
j.constructor.call(this);
j.init.call(this,l);

c('Toggler').subscribe('show',function(m,n){
if(n.active&&
c('CSS').matchesSelector(n.active,"._4up"))
c('BanzaiNectar').log('translation_app','nub_show',{});});}





f.exports=k;}),null);
