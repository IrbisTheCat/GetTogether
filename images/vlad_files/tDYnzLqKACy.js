if (self.CavalryLogger) { CavalryLogger.start_js(["vjd+p"]); }

/** js/jewel/RequestsJewel.js */





__d('RequestsJewel',['RequestsJewelController'],(function a(b,c,d,e,f,g){











function h(i,j){'use strict';
var k=c('RequestsJewelController').create
(i.getFlyout(),
function(){return i.isOpen();},
j.inbox_folder);

i.subscribe('marked-seen',function(){return k.markSeen();});
i.subscribe('closed',function(){return k.closeHandler();});
i.subscribe('opened',function(){return k.openHandler();});}



f.exports=h;}),null);

/** www/__virtual__/x/XLinkshimLogController.js */



__d("XLinkshimLogController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/si\/ajax\/l\/render_linkshim_log\/",{u:{type:"String",required:true},h:{type:"String",required:true},enc:{type:"String"},d:{type:"String"}});}),

null);
