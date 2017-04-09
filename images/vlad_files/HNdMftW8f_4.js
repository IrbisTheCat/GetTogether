if (self.CavalryLogger) { CavalryLogger.start_js(["jEEMJ"]); }

/** js/components/UFI/UFIOrderingModeSelector.react.js */










__d('UFIOrderingModeSelector.react',['cx','invariant','ix','Image.react','InlineBlock.react','Link.react','PopoverMenu.react','React','ReactXUIMenu'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,












m=c('React').PropTypes,

n=c('ReactXUIMenu').SelectableMenu,
o=c('ReactXUIMenu').SelectableItem;k=babelHelpers.inherits

(p,c('React').Component);l=k&&k.prototype;function p(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=l.constructor).call.apply(q,[this].concat(t)),this.
















onMenuItemClick=function(v,w){
this.props.onOrderChanged(w.item.getValue());}.
bind(this),r;}p.prototype.




render=function(){
if(this.props.orderingModes.length===0)
return null;


var q=this.props.orderingModes.
filter(function(s){return s.value==this.props.selectedMode;}.bind(this)).
map(function(s){return s.name;}).
pop();


q||i(0,
'The selectedMode must exist inside orderingModes');


var r=
c('React').createElement(n,
{className:"_4tju",
onItemClick:this.onMenuItemClick},

this.props.orderingModes.map(function(s){
return (c('React').createElement(o,
{key:s.value,
value:s.value,
label:s.name,
selected:s.value===this.props.selectedMode},

c('React').createElement('div',{className:"_3scm"},
c('React').createElement('div',{className:"_3scn"},
s.name),

c('React').createElement('div',
{className:"_3sco"},

s.description))));}.bind(this)));







return (c('React').createElement('div',
{className:"_3scp",
'data-interaction-root-id':"_5-e4"},
c('React').createElement(c('InlineBlock.react'),null,
c('React').createElement(c('PopoverMenu.react'),
{className:"_3scs",
menu:r,
alignh:'right'},
c('React').createElement(c('Link.react'),null,
q,
c('React').createElement(c('Image.react'),
{className:"_3sct",
src:j("101460")}))))));};






p.propTypes={onOrderChanged:m.func.isRequired,orderingModes:m.arrayOf(m.shape({name:m.string.isRequired,description:m.string,value:m.string.isRequired})).isRequired,selectedMode:m.string.isRequired};


f.exports=p;}),null);

/** js/logging/generated/CommentsOrderingModeSelectorUsageTypedLogger.js */





__d('CommentsOrderingModeSelectorUsageTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:CommentsOrderingModeSelectorUsageLoggerConfig',this.$CommentsOrderingModeSelectorUsageTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:CommentsOrderingModeSelectorUsageLoggerConfig',this.$CommentsOrderingModeSelectorUsageTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$CommentsOrderingModeSelectorUsageTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$CommentsOrderingModeSelectorUsageTypedLogger_data=babelHelpers['extends']({},
this.$CommentsOrderingModeSelectorUsageTypedLogger_data,
j);

return this;};
h.prototype.




setAvailableOrders=function(j){
this.$CommentsOrderingModeSelectorUsageTypedLogger_data.available_orders=c('GeneratedLoggerUtils').serializeVector(j);
return this;};
h.prototype.




setEndOrder=function(j){
this.$CommentsOrderingModeSelectorUsageTypedLogger_data.end_order=j;
return this;};
h.prototype.




setPostFBID=function(j){
this.$CommentsOrderingModeSelectorUsageTypedLogger_data.post_fbid=j;
return this;};
h.prototype.




setPostOwnerFBID=function(j){
this.$CommentsOrderingModeSelectorUsageTypedLogger_data.post_owner_fbid=j;
return this;};
h.prototype.




setStartOrder=function(j){
this.$CommentsOrderingModeSelectorUsageTypedLogger_data.start_order=j;
return this;};
h.prototype.




setVC=function(j){
this.$CommentsOrderingModeSelectorUsageTypedLogger_data.vc=j;
return this;};















var i=
{available_orders:true,
end_order:true,
post_fbid:true,
post_owner_fbid:true,
start_order:true,
vc:true};


f.exports=h;}),null);

/** js/components/UFI/UFIOrderingModeSelectorContainer.react.js */





__d('UFIOrderingModeSelectorContainer.react',['CommentsOrderingModeSelectorUsageTypedLogger','Random','React','SubscriptionsHandler','UFIConfig','UFIInstanceAction','UFIOrderingModeSelector.react','UFIOrderingModeStore','UFISharedDispatcher'],(function a(b,c,d,e,f,g){

'use strict';var h,i,

















j=c('React').PropTypes;h=babelHelpers.inherits









(k,
c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.



















state=
{selectedMode:c('UFIOrderingModeStore').
getState().
get(this.props.contextArgs.instanceid)},this.


$UFIOrderingModeSelectorContainer_subscriptions=null,this.





























onOrderChanged=function(q){
var r=this.props.feedback;


if(r.orderingmodes&&
c('UFIConfig').logChangeOrderingModeUsageSampleRate>c('Random').random()){

var s=r.orderingmodes.map(function(t){return t.value;});
new (c('CommentsOrderingModeSelectorUsageTypedLogger'))().
setStartOrder(this.state.selectedMode).
setEndOrder(q).
setPostFBID(r.commentstargetfbid).
setPostOwnerFBID(r.ownerid).
setAvailableOrders(s).
log();}


c('UFISharedDispatcher').dispatch
(c('UFIInstanceAction').changeOrderingMode
(this.props.contextArgs,
q));}.


bind(this),m;}k.prototype.componentDidMount=function(){this.$UFIOrderingModeSelectorContainer_subscriptions=new (c('SubscriptionsHandler'))();this.$UFIOrderingModeSelectorContainer_subscriptions.addSubscriptions(c('UFIOrderingModeStore').addListener(function(){if(!this.$UFIOrderingModeSelectorContainer_subscriptions)return;this.setState({selectedMode:c('UFIOrderingModeStore').getState().get(this.props.contextArgs.instanceid)});}.bind(this)));};k.prototype.componentWillUnmount=function(){if(this.$UFIOrderingModeSelectorContainer_subscriptions){this.$UFIOrderingModeSelectorContainer_subscriptions.release();this.$UFIOrderingModeSelectorContainer_subscriptions=null;}};k.prototype.shouldComponentUpdate=function(l,m){return this.state.selectedMode!==m.selectedMode;};k.prototype.

render=function(){

return (c('React').createElement(c('UFIOrderingModeSelector.react'),
{onOrderChanged:this.onOrderChanged,
orderingModes:this.props.feedback.orderingmodes,
selectedMode:this.state.selectedMode}));};


k.propTypes={feedback:j.shape({defaultcommentorderingmode:j.string.isRequired,orderingmodes:j.arrayOf(j.shape({name:j.string.isRequired,description:j.string.isRequired,selected:j.bool.isRequired,value:j.string.isRequired})).isRequired,commentstargetfbid:j.string.isRequired,ownerid:j.string.isRequired}).isRequired,contextArgs:j.object.isRequired};


f.exports=k;}),null);

/** js/feed/multi_share/CarouselDynamicSlideshowController.js */





__d('CarouselDynamicSlideshowController',['Arbiter'],(function a(b,c,d,e,f,g){





function h(i){'use strict';
this.$CarouselDynamicSlideshowController_slideshowIDs=i.slideshow_ids;
this.$CarouselDynamicSlideshowController_carousel=i.carousel;}
h.prototype.

slide=function(){'use strict';
var i=this.$CarouselDynamicSlideshowController_carousel.getVisibleIndex();
this.$CarouselDynamicSlideshowController_slideshowIDs.forEach(function(j,k){
if(!j)
return;


if(k===i){
c('Arbiter').inform
('fbPhotosSlideshow/forceEnable',
{parentID:j});}else 


c('Arbiter').inform
('fbPhotosSlideshow/forceDisable',
{parentID:j});});};






f.exports=h;}),null);

/** js/logging/generated/CtaImpressionsTypedLogger.js */





__d('CtaImpressionsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:CtaImpressionsLoggerConfig',this.$CtaImpressionsTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:CtaImpressionsLoggerConfig',this.$CtaImpressionsTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$CtaImpressionsTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$CtaImpressionsTypedLogger_data=babelHelpers['extends']({},
this.$CtaImpressionsTypedLogger_data,
j);

return this;};
h.prototype.




setCtaType=function(j){
this.$CtaImpressionsTypedLogger_data.cta_type=j;
return this;};
h.prototype.




setOriginalURI=function(j){
this.$CtaImpressionsTypedLogger_data.original_uri=j;
return this;};
h.prototype.




updateExtraData=function(j){
j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));
c('GeneratedLoggerUtils').checkExtraDataFieldNames
(j,
i);

this.$CtaImpressionsTypedLogger_data=babelHelpers['extends']({},
this.$CtaImpressionsTypedLogger_data,
j);

return this;};
h.prototype.




addToExtraData=function(j,k){
var l={};
l[j]=k;
return this.updateExtraData(l);};









var i=
{cta_type:true,
original_uri:true};


f.exports=h;}),null);

/** js/modules/PostsCtaModern.js */




__d('PostsCtaModern',['CtaImpressionsTypedLogger','Animation','Style'],(function a(b,c,d,e,f,g){




var h=150,
i=215,
j=255,

k=

{show:function l
(m,
n,
o,
p,
q){

var r=i;
if(q)
r=j;




c('Style').set(document.body,'margin-bottom',r+'px');

var s=setInterval(t,2500);

p.addEventListener
('click',
function(){
c('Style').set(o,'display','none');
c('Style').set(m,'height','70%');
c('Style').set(n,'display','block');
c('Style').set(m,'background','none');
u(m,'height',r+'px');

clearInterval(s);});



function t(){
var v=v=document.documentElement.clientHeight,
w=m.clientHeight;
if(w!==v){
c('Style').set(n,'display','none');
c('Style').set(o,'display','block');
u(m,'height',v+'px');
u(m,'background','rgba(0,0,0,0.5)');

var x=new (c('CtaImpressionsTypedLogger'))();
x.setCtaType('www_permalink_cta');
x.setOriginalURI(window.location.href);
x.logVital();}}



function u(v,w,x){
new (c('Animation'))(v).
to(w,x).
duration(h).
ease(c('Animation').ease.both).
go();}}};




f.exports=k;}),null);
