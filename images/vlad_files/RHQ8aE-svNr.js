if (self.CavalryLogger) { CavalryLogger.start_js(["jtHOa"]); }

/** js/logging/generated/LinkReactUnsafeHrefTypedLogger.js */





__d('LinkReactUnsafeHrefTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:LinkReactUnsafeHrefLoggerConfig',this.$LinkReactUnsafeHrefTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:LinkReactUnsafeHrefLoggerConfig',this.$LinkReactUnsafeHrefTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$LinkReactUnsafeHrefTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$LinkReactUnsafeHrefTypedLogger_data=babelHelpers['extends']({},
this.$LinkReactUnsafeHrefTypedLogger_data,
j);

return this;};
h.prototype.




setDocumentLocation=function(j){
this.$LinkReactUnsafeHrefTypedLogger_data.document_location=j;
return this;};
h.prototype.




setHref=function(j){
this.$LinkReactUnsafeHrefTypedLogger_data.href=j;
return this;};











var i=
{document_location:true,
href:true};


f.exports=h;}),null);

/** js/modules/isSecureInstagramDotComURI.js */





__d('isSecureInstagramDotComURI',['arrayContains'],(function a(b,c,d,e,f,g){




var h=new RegExp('(^|\\.)instagram\\.com$','i'),

i=['https'];





function j(k){

return (c('arrayContains')(i,k.getProtocol())&&
h.test(k.getDomain()));}



f.exports=j;}),null);

/** js/modules/isWitDotAiURI.js */





__d('isWitDotAiURI',[],(function a(b,c,d,e,f,g){

var h=
new RegExp('(^|\\.)wit\\.ai$','i'),

i=['https'];








function j(k){
if(k.isEmpty()&&k.toString()!=='#')
return false;


if(!k.getDomain()&&!k.getProtocol())
return true;



return (i.indexOf(k.getProtocol())!==-1&&
h.test(k.getDomain()));}



f.exports=j;}),null);

/** js/components/core/UI/Link/LinkHrefChecker.js */





__d('LinkHrefChecker',['ErrorUtils','LinkReactUnsafeHrefTypedLogger','URI','ex','isSecureInstagramDotComURI','isFacebookURI','isMessengerDotComURI','isWitDotAiURI'],(function a(b,c,d,e,f,g){











function h(n){



return (n.startsWith('#')||
n.startsWith('/')&&!n.startsWith('//'));}



function i(n){
return n.startsWith('mailto:');}


function j(n,o){
if(h(n)||i(n))
return true;


var p=l(n),
q=p?p.getProtocol():'';

return (q===o||
q===''||
q==='http'||
q==='https');}



function k(n){
if(h(n))
return true;


var o=l(n);

return (o==null||
c('isFacebookURI')(o)||
c('isMessengerDotComURI')(o)||
c('isSecureInstagramDotComURI')(o)||
c('isWitDotAiURI')(o));}



function l(n){






try{return new (c('URI'))(n);}catch(
o){

return null;}}



var m=
{logIfInvalidProtocol:function n(o,p){
if(!j(o,p))
new (c('LinkReactUnsafeHrefTypedLogger'))().
setHref(o).
setDocumentLocation(document.location.toString()).
log();}};








f.exports=m;}),null);

/** js/perf/EventHandlerUtils.js */





__d('EventHandlerUtils',['DataStore'],(function a(b,c,d,e,f,g){


var h=
{introspect:function i(j){

var k=[],
l=j;


do{var m=c('DataStore').get(l,'Event.listeners');
if(m)
k.unshift({elementRef:l,handlers:m});

l=l.parentNode;}while(
l!=null);

return k;}};



f.exports=h;}),null);

/** js/ui/layer/behaviors/ModalLayerBugNub.js */





__d('ModalLayerBugNub',['DOM','ModalLayer'],(function a(b,c,d,e,f,g){




var h=false,





i=






{init:function j(k){
if(h)
return;

h=true;

c('ModalLayer').subscribe('show',function(l,m){
c('DOM').appendContent(m.getLayerContentRoot(),k);});

c('ModalLayer').subscribe('hide',function(l,m){

c('DOM').remove(k);});}};





f.exports=i;}),null);

/** shared/lazy_component/MouseEventAccumulator.react.js */





__d('MouseEventAccumulator.react',['React'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits












(j,c('React').Component);i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.

state=
{hover:false,
clicked:false},l;}j.prototype.

render=function(){var k=
this.props,l=k.render,m=babelHelpers.objectWithoutProperties(k,['render']);

return (c('React').createElement('span',babelHelpers['extends']({},
m,
{onMouseEnter:function(){return this.setState({hover:true});}.bind(this),
onMouseLeave:function(){return this.setState({hover:false});}.bind(this),
onClick:function(){return this.setState({clicked:true});}.bind(this)}),
l(this.state)));};





f.exports=j;}),null);

/** www/__virtual__/x/XBrowserPreRenderLoggingController.js */



__d("XBrowserPreRenderLoggingController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/logging\/prerender\/",{href:{type:"String",required:true},page_id:{type:"String",required:true},script_path:{type:"String",required:true},session_name:{type:"String"},visibility_state:{type:"String",required:true}});}),

null);

/** shared/logging/ReportPreRender.js */




__d('ReportPreRender',['ScriptPath','XBrowserPreRenderLoggingController','pageID'],(function a(b,c,d,e,f,g){









var h=null,
i=null;

if(document.visibilityState){
h='visibilitychange';
i='visibilityState';}else
if(document.webkitVisibilityState){
h='webkitvisibilitychange';
i='webkitVisibilityState';}


function j(){
var k=document[i];
if(k=='visible')
document.removeEventListener(h,j);

var l=c('XBrowserPreRenderLoggingController').getURIBuilder().
setString('href',window.location.href).
setString('page_id',c('pageID')).
setString('script_path',c('ScriptPath').getScriptPath()).
setString('visibility_state',k).
setString('session_name',window.name);
new Image().src=l.getURI();}


if(i&&document[i]=='prerender'){
j();



document.addEventListener(h,j);}


f.exports={};}),null);
