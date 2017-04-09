if (self.CavalryLogger) { CavalryLogger.start_js(["XBVvn"]); }

/** js/deprecated/control-textarea.js */


__d('legacy:control-textarea',['TextAreaControl'],(function a(b,c,d,e,f,g){

b.TextAreaControl=c('TextAreaControl');}),3);

/** js/stream/fbfeed/FbFeedAttachmentRelatedShare.js */





__d('FbFeedAttachmentRelatedShare',['csx','Arbiter','AttachmentIssueDiversityShareConstants','AttachmentRelatedShareConstants','DOMQuery','Event','tidyEvent'],(function a(b,c,d,e,f,g,h){









var i=






{loadRelatedAttachment:function j(k,l){
c('tidyEvent')(c('Event').listen
(k,
'click',
function(){
c('Arbiter').inform
(c('AttachmentRelatedShareConstants').ARTICLE_CLICK,

{attachment:k,
global_share_id:l});}));},







loadRelatedGameAttachment:function j(k,l){
c('tidyEvent')(c('Event').listen
(k,
'click',
function(){
c('Arbiter').inform
(c('AttachmentRelatedShareConstants').GAME_CLICK,

{attachment:k,
global_share_id:l});}));},














loadRelatedAttachmentForStream:function j(k){
this._loadChainableAttachmentForStreamImpl
(k,
c('AttachmentRelatedShareConstants').ARTICLE_CLICK);},











loadIssueDiversityAttachmentForStream:function j(k){
this._loadChainableAttachmentForStreamImpl
(k,
c('AttachmentIssueDiversityShareConstants').ARTICLE_CLICK);},







_loadChainableAttachmentForStreamImpl:function j
(k,
l){

var m=function n(event,o){
var p=event.getTarget();
if(p.getAttribute('target')!=='_blank')
return;

var q="^div._5pbx",
r="^div._5pc9",
s=c('DOMQuery').scry(p,q)[0]||
c('DOMQuery').scry(p,r)[0];
if(!s)
return;

c('Arbiter').inform
(l,

{attachment:s,
global_share_id:0,
link_url:p.getAttribute('href'),
is_right_click:o});};



c('tidyEvent')(c('Event').listen
(k,
'click',
function(event){
m(event,false);}));



c('tidyEvent')(c('Event').listen
(k,
'mousedown',
function(event){
if(event.which==3||event.button==2)
m(event,true);}));}};






f.exports=i;}),null);
