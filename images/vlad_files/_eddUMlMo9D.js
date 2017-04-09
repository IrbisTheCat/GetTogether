if (self.CavalryLogger) { CavalryLogger.start_js(["fbZFP"]); }

/** __static_js_modules__/actoruriconfig.js */




__d("ActorURIConfig",[],(function a(b,c,d,e,f,g){

f.exports={PARAMETER_ACTOR:"av"};}),

null);

/** __static_js_modules__/businessconf.js */




__d("BusinessConf",[],(function a(b,c,d,e,f,g){

f.exports={DOMAIN:"business",WWW_DOMAIN:"www",HOSTNAME:"business.facebook.com",BIZ_ID_PARAM_NAME:"business_id",BIZ_ID_AUTOMATICALLY_ATTACHED_API_PARAM_NAME:"__business_id",LABEL_ID_PARAM_NAME:"project_id",ACCOUNT_ID_PARAM_NAME:"act",ACCOUNT_ID_PARAM_NAME_LONG:"account_id",ACCOUNT_IDS_PARAM_NAME_LONG:"account_ids",ACCOUNT_ID_CATEGORY_NAME:"cat",PAGE_ID_PARAM_NAME:"id",PAGE_ADMIN_SELECTED_KEY:"sk",PRODUCT_CATALOG_ID_PARAM_NAME:"catalog_id",PRODUCT_FEED_ID_PARAM_NAME:"feed_id",LEGACY_ADS_MANAGER_PREFIX:"\/ads\/manage\/",CAMPAIGN_MANAGER_PREFIX:"\/ads\/manager\/",SAM_PREFIX:"\/ads\/management\/",AUDIENCE_INSIGHTS_PREFIX:"\/ads\/audience-insights\/",SHOW_ADD_PRODUCT_FEED_DIALOG:"add_feed",SHOW_SPLASH_PARAM_NAME:"splash",SHOW_GRAY_MIGRATE_COMPLETE_SPLASH_PARAM_NAME:"migrate",COMMENT_ID_PARAM_NAME:"comment_id",NAV_SOURCE_PARAM_NAME:"nav_source",WHITELISTED_URI_CLASS:"bizOK",BIZ_HOME_FAVORITE_UPSELL:"biz_home_favorite_upsell",OPT_OUT_KEY:"do_not_redirect_to_biz_site",GRAY_MIGRATE_KEY:"tried_to_migrate_from_gray_account",HIDE_OPT_OUT_KEY:"hide_opt_out",HIDE_HOME_V3_SPLASH_KEY:"hide_home_v3_splash",CAKE_NUX_IS_OPTED_OUT:"1",DPA_TD_WELCOME_NUX_KEY:"dpa_td_welcome_nux",HIDE_AD_ACCOUNT_MSG_PANEL:"hide_ad_account_msg_panel",HIDE_AD_ACCOUNT_FAV_UPSELL:"hide_ad_account_fav_upsell",HIDE_PAGE_FAV_UPSELL:"hide_page_fav_upsell",DPA_TD_WELCOME_NUX_ID:3918,OPT_OUT_EXPIRE:259200,HIGHLANDER_OPT_OUT_KEY:"use_biz_page_in_highlander"};}),

null);

/** __static_js_modules__/pagescalloutactions.js */




__d("PagesCalloutActions",[],(function a(b,c,d,e,f,g){

f.exports={REGISTER_CALLOUT:"register_callout",INIT_SURFACE:"init_surface",SHOW_CALLOUT:"show_callout",DISMISS_CALLOUT:"dismiss_callout"};}),

null);

/** __static_js_modules__/videoplayerreason.js */




__d("VideoPlayerReason",[],(function a(b,c,d,e,f,g){

f.exports={AUTOPLAY:"autoplay_initiated",USER:"user_initiated",PAGE_VISIBILITY:"page_visibility_initiated",SEEK:"seek_initiated",LOOP:"loop_initiated",EMBEDDED_VIDEO_API:"embedded_video_api_initiated",CONNECTION:"host-connection-error",VIDEO_DATA_REPLACED:"video_data_replaced",VOD_NOT_READY:"vod_not_ready",VIDEO_DATA_SWITCH:"video_data_switch",FALLBACK_MODE:"fallback_mode",COMMERCIAL_BREAK:"commercial_break",SPHERICAL_FALLBACK:"spherical_fallback",UNLOADED:"unloaded",SPHERICAL_SWITCH_CANVAS:"spherical_switch_canvas",HOVER:"hover"};}),

null);

/** js/brands/chrome/ui/NullBusinessID.js */





__d('NullBusinessID',[],(function a(b,c,d,e,f,g){

f.exports='personal-business';}),null);

/** js/brands/settings/utils/BizSiteIdentifier.brands.js */






__d('BizSiteIdentifier.brands',['BusinessConf','NullBusinessID','URI'],(function a(b,c,d,e,f,g){





var h=c('NullBusinessID'),

i=
{isBizSite:function j(){
return c('URI').getRequestURI
(false).
getSubdomain()===c('BusinessConf').DOMAIN;},


getBusinessID:function j(){
return c('URI').getRequestURI
(false).
getQueryData()[c('BusinessConf').BIZ_ID_PARAM_NAME];},










createBusinessURL:function j
(k,
l){

if(!l||l===h)
return new (c('URI'))(k).setSubdomain('www');

var m=new (c('URI'))(k).setSubdomain(c('BusinessConf').DOMAIN);
if(i.isBizSite())







m.setDomain
(c('URI').getRequestURI
(false).
getDomain());


var n=l||i.getBusinessID();
m.addQueryData(c('BusinessConf').BIZ_ID_PARAM_NAME,n);
return m;}};



f.exports=i;}),null);

/** js/components/FocusRelocator/FocusRelocator.react.js */





__d('FocusRelocator.react',['csx','CSS','Focus','React','getActiveElement'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits





















(k,c('React').Component);j=i&&i.prototype;k.prototype.



componentWillReceiveProps=function(l){var m=
this.props,n=m.from,o=m.to,
p=l.from,q=l.to;
if(p&&q&&(n!==p||o!==q)){
this.$FocusRelocator_focus&&this.$FocusRelocator_focus.remove();
this.$FocusRelocator_focus=c('Focus').relocate(p,q);}};

k.prototype.

componentDidUpdate=function(){
this.$FocusRelocator_scheduleValidateRelocation();};
k.prototype.

componentWillUnmount=function(){
this.$FocusRelocator_focus&&this.$FocusRelocator_focus.remove();
this.$FocusRelocator_focus=null;};
k.prototype.

render=function(){
return this.props.children;};
k.prototype.

$FocusRelocator_performRelocation=function(){var l=
this.props,m=l.from,n=l.to;
if(m&&n){
c('Focus').performRelocation(m,n,c('getActiveElement')()===this.props.from);
this.$FocusRelocator_scheduleValidateRelocation();}};

k.prototype.

$FocusRelocator_scheduleValidateRelocation=function(){
setTimeout
(function(){

if(c('getActiveElement')()===this.props.from&&
!c('CSS').matchesSelector
(this.props.to,
"._16jm"))


this.$FocusRelocator_performRelocation();}.

bind(this),
0);};

function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/components/Text/Text.react.js */




__d('Text.react',['React'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits








(j,c('React').Component);i=h&&h.prototype;j.prototype.
render=function(){'use strict';

return (c('React').createElement('span',this.props,
this.props.children));};


function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);

/** shared/lynx/LynxGeneration.js */





__d('LynxGeneration',['$','emptyFunction','Bootloader','LinkshimHandlerConfig','URI'],(function a(b,c,d,e,f,g){







function h(k){
c('Bootloader').loadModules
(["AsyncSignal","XLinkshimLogController"],
k||c('emptyFunction'),'LynxGeneration');}



function i(k,l){
h(function(m,n){
var o=n.getURIBuilder().
setString('u',k).
setString('h',l).
getURI();
new m(o).send();});}



var j=
{getShimURI:function k(){
return new (c('URI'))('/l.php').setDomain(c('LinkshimHandlerConfig').linkshim_host);},



getLynxURIProtocol:function k(l){



if(c('LinkshimHandlerConfig').always_use_https)
return 'https';


return l.getProtocol()==='http'?'http':'https';},


getShimmedHref:function k(l,m){


var n=new (c('URI'))(l),
o=j.getLynxURIProtocol(n);
return j.getShimURI().
setQueryData({u:l,h:m}).
setProtocol(o).
toString();},



temporarilySetMetaReferrer:function k(l,m){
var n=c('$')('meta_referrer');
n.content=c('LinkshimHandlerConfig').switched_meta_referrer_policy;
setTimeout(function(){
n.content=c('LinkshimHandlerConfig').default_meta_referrer_policy;
i(l,m);},
100);},


loadLogging:h};


f.exports=j;}),null);

/** js/components/core/UI/Link/AbstractLink.react.js */





__d('AbstractLink.react',['LynxGeneration','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits
















(j,c('React').Component);i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.


$AbstractLink_onClick=function(p){var q=
this.props,r=q.href,s=q.shimhash,t=q.useMetaReferrer,u=q.onClick;
if(t)
c('LynxGeneration').temporarilySetMetaReferrer(r,s||'');

u&&u(p);}.
bind(this),l;}j.prototype.

componentDidMount=function(){
if(this.props.useMetaReferrer)
c('LynxGeneration').loadLogging();};

j.prototype.

render=function(){var k=











this.props,l=k.href,m=k.linkRef,n=k.shimhash,o=k.onClick,p=k.useRedirect,q=k.useMetaReferrer,r=k.nofollow,s=k.noopener,t=k.rel,u=babelHelpers.objectWithoutProperties(k,['href','linkRef','shimhash','onClick','useRedirect','useMetaReferrer','nofollow','noopener','rel']),

v=l,
w=t;

if(p)
v=c('LynxGeneration').getShimmedHref(l,n||'');


if(r)
w=w?w+' nofollow':'nofollow';


if(s)
w=w?w+' noopener':'noopener';



return (c('React').createElement('a',babelHelpers['extends']({},
u,
{href:v,
rel:w,
ref:m,
onClick:this.$AbstractLink_onClick})));};





f.exports=j;}),null);

/** js/components/core/UI/Link/Link.react.js */











__d('Link.react',['AbstractLink.react','isFacebookURI','isMessengerDotComURI','LinkReactUnsafeHrefConfig','LinkshimHandlerConfig','React','URI'],(function a(b,c,d,e,f,g){

'use strict';var h,i,









j=c('LinkReactUnsafeHrefConfig').LinkHrefChecker;











































function k(o){
return c('isFacebookURI')(o)||c('isMessengerDotComURI')(o);}





var l=/^(#|\/\w)/;
function m(o){
if(l.test(o))
return false;

var p=new (c('URI'))(o),
q=p.getProtocol();
return (q==='http'||q==='https')&&
!k(p);}
h=babelHelpers.inherits

(n,c('React').Component);i=h&&h.prototype;n.prototype.


render=function(){var o=







this.props,p=o.allowunsafehref,q=o.s,r=o.href,s=o.linkRef,t=o.target,u=babelHelpers.objectWithoutProperties(o,['allowunsafehref','s','href','linkRef','target']),


v='#',
w=null;

if(r instanceof c('URI')){
v=r.toString();}else
if(typeof r==='string'&&r!==''&&
r!=='#'){
v=r;}else
if(typeof r==='object'&&r!==null){
v=r.url.toString();
w=r.shimhash?r.shimhash.toString():w;}else{

v='#';
w=null;}



if(j)

j.logIfInvalidProtocol(v,p);



if(w==null&&m(v))
w=c('LinkshimHandlerConfig').link_react_default_hash;



var x=w!=null,
y=w!=null,
z=false;

if(c('LinkshimHandlerConfig').supports_meta_referrer){
if(q)

y=false;

if(w!=null)
z=true;}



var aa=c('LinkshimHandlerConfig').use_rel_no_opener&&
w!==null&&
t==='_blank';


return (c('React').createElement(c('AbstractLink.react'),babelHelpers['extends']({},
u,
{href:v,
linkRef:s,
nofollow:x,
noopener:aa,
shimhash:w,
target:t,
useRedirect:y,
useMetaReferrer:z})));};


function n(){h.apply(this,arguments);}


f.exports=n;}),null);

/** js/components/core/UI/PopoverMenu/AbstractPopoverButton.react.js */





__d('AbstractPopoverButton.react',['cx','React','URI','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits














(l,c('React').Component);j=i&&i.prototype;l.prototype.










render=function(){'use strict';
var m=this.props.config,
n={},

o=m.defaultMaxWidth;
if(typeof this.props.maxwidth!=='undefined')
o=this.props.maxwidth;

var p=null;
if(o){
var q=this.props.haschevron?
o-m.chevronWidth:
o;

if(this.props.label)
p={maxWidth:q+'px'};

n.style=babelHelpers['extends']({},

m.button.props.style,
{maxWidth:o+'px'});}



n.image=null;
var r=null;
if(this.props.image&&this.props.label){
r=c('React').cloneElement(this.props.image,
{className:c('joinClasses')
(this.props.image.props.className,
"_3-8_")});}else


if(this.props.image)


r=this.props.image;

if(r||this.props.label)
n.label=
c('React').createElement('span',
{className:"_55pe",
style:p},
r,
this.props.label);



if(this.props.haschevron)
n.imageRight=m.chevron;


n.className=c('joinClasses')
(m.button.props.className,
"_2agf");



n.href=new (c('URI'))('#');
n['aria-haspopup']=true;

return c('React').cloneElement(m.button,n);};
function l(){'use strict';i.apply(this,arguments);}l.propTypes={config:k.object.isRequired,haschevron:k.bool,maxwidth:k.number};l.defaultProps={haschevron:true};


f.exports=l;}),null);

/** shared/core/ServerTime.js */





__d('ServerTime',['InitialServerTime'],(function a(b,c,d,e,f,g){











k(c('InitialServerTime').serverTime);

var h;






function i(){
return Date.now()-h;}





function j(){
return h;}





function k(l){
h=Date.now()-l;}


f.exports=
{getMillis:i,
getOffsetMillis:j,
update:k,


get:i,

getSkew:j};}),null);

/** js/components/core/UI/Timestamp/Timestamp.react.js */




__d('Timestamp.react',['LiveTimer','React','ReactDOM','joinClasses'],(function a(b,c,d,e,f,g){var h,i,







j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;k.prototype.






componentDidMount=function(){'use strict';
if(this.props.autoUpdate)
c('LiveTimer').addTimeStamps(c('ReactDOM').findDOMNode(this));};

k.prototype.

componentDidUpdate=function(l,m){'use strict';
if(this.props.autoUpdate&&this.props.time!==l.time)
c('LiveTimer').loop();};

k.prototype.

componentWillUnmount=function(){'use strict';
c('LiveTimer').removeTimestamp(c('ReactDOM').findDOMNode(this));};
k.prototype.

render=function(){'use strict';
var l=
c('LiveTimer').renderRelativeTimeToServer
(this.props.time,
this.props.shorten,
this.props.minimize),m=

this.props,n=m.shorten,o=m.time,p=m.text,q=m.verbose,r=babelHelpers.objectWithoutProperties(m,['shorten','time','text','verbose']);
delete r.autoUpdate;


return (c('React').createElement('abbr',babelHelpers['extends']({},
r,
{className:c('joinClasses')(this.props.className,"livetimestamp"),
title:q,
'data-utime':o,
'data-minimize':this.props.minimize?true:null,
'data-shorten':n?true:null}),
l.text.toString()||p));};


function k(){'use strict';h.apply(this,arguments);}k.propTypes={autoUpdate:j.bool};k.defaultProps={autoUpdate:false};


f.exports=k;}),null);

/** shared/react_contrib/ReactPropTransfererCore.js */




__d('ReactPropTransfererCore',['emptyFunction','joinClasses'],(function a(b,c,d,e,f,g){

'use strict';











function h(m){
return function(n,o,p){
if(!Object.prototype.hasOwnProperty.call(n,o)){
n[o]=p;}else 

n[o]=m(n[o],p);};}




var i=h(function(m,n){



return Object.assign({},n,m);}),







j=



{children:c('emptyFunction'),



className:h(c('joinClasses')),



style:i};










function k(m,n){
for(var o in n){
if(!Object.prototype.hasOwnProperty.call(n,o))
continue;


var p=j[o];

if(p&&Object.prototype.hasOwnProperty.call(j,o)){
p(m,o,n[o]);}else
if(!Object.prototype.hasOwnProperty.call(m,o))
m[o]=n[o];}


return m;}








var l=








{mergeProps:function m(n,o){
return k(Object.assign({},n),o);}};




f.exports=l;}),null);

/** js/react_contrib/ReactPropTransferer.js */




__d('ReactPropTransferer',['ReactPropTransfererCore'],(function a(b,c,d,e,f,g){

f.exports=c('ReactPropTransfererCore');}),null);

/** shared/react_contrib/cloneWithProps_DEPRECATED.js */




__d('cloneWithProps_DEPRECATED',['ReactElement','ReactPropTransferer','keyOf','warning'],(function a(b,c,d,e,f,g){






'use strict';







var h=c('keyOf')({children:null}),

i=false;











function j(k,l){















var m=c('ReactPropTransferer').mergeProps(l,k.props);


if(!Object.prototype.hasOwnProperty.call(m,h)&&Object.prototype.hasOwnProperty.call
(k.props,h))
m.children=k.props.children;




return c('ReactElement').createElement(k.type,m);}


f.exports=j;}),null);

/** js/components/core/XUI/Button/AbstractButton.react.js */





__d('AbstractButton.react',['cx','Link.react','React','cloneWithProps_DEPRECATED','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,










k=c('React').Component,l=c('React').PropTypes;i=babelHelpers.inherits




















(m,k);j=i&&i.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.











































handleLinkClick=function(event){
if(this.props.disabled){
event.preventDefault();}else
if(this.props.onClick)
this.props.onClick(event);}.

bind(this),o;}m.prototype.

render=function(){'use strict';var n=








this.props,o=n.depressed,p=n.disabled,q=n.image,r=n.imageRight,s=n.label,t=n.labelIsHidden,u=babelHelpers.objectWithoutProperties(n,['depressed','disabled','image','imageRight','label','labelIsHidden']);
delete u.shade;

var v="_42ft"+

(p?' '+"_42fr":'')+
(o?' '+"_42fs":''),


w=q;
if(w){
var x={};
if(s){
x.alt='';
if(!t)
x.className="_3-8_";}


w=c('cloneWithProps_DEPRECATED')(w,x);}


var y=r;
if(y){
var z={};
if(s){
z.alt='';
if(!t)
z.className="_3-99";}


y=c('cloneWithProps_DEPRECATED')(y,z);}


if(this.props.href){

return (c('React').createElement(c('Link.react'),babelHelpers['extends']({},
u,
{className:c('joinClasses')(this.props.className,v),
onClick:this.handleLinkClick}),
w,
t?
c('React').createElement('span',{className:"accessible_elem"},
s):

s,
y));}else


if(this.props.type&&this.props.type!=='submit'){

return (c('React').createElement('button',babelHelpers['extends']({},
u,
{className:c('joinClasses')(this.props.className,v),
disabled:p,
type:this.props.type}),
w,
t?
c('React').createElement('span',{className:"accessible_elem"},
s):

s,
y));}else 




return (c('React').createElement('button',babelHelpers['extends']({},
u,
{className:c('joinClasses')(this.props.className,v),
disabled:p,
type:'submit',
value:'1'}),
w,
t?
c('React').createElement('span',{className:"accessible_elem"},
s):

s,
y));};



m.propTypes={image:l.element,imageRight:l.element,depressed:l.bool,label:l.node,onClick:l.func,labelIsHidden:l.bool};m.defaultProps={disabled:false,depressed:false,labelIsHidden:false};


f.exports=m;}),null);

/** js/components/core/XUI/Button/XUIButton.react.js */





__d('XUIButton.react',['cx','AbstractButton.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,







k=c('React').PropTypes,

l='medium';i=babelHelpers.inherits





















(m,c('React').Component);j=i&&i.prototype;m.

getButtonSize=function(n){'use strict';
return n.size||l;};
m.prototype.










render=function(){'use strict';var n=
this.props,o=n.use,p=n.size,q=n.borderShade,r=n.suppressed,s=babelHelpers.objectWithoutProperties(n,['use','size','borderShade','suppressed']),

t="_4jy0"+

(p==='small'?' '+"_517i":'')+
(p==='medium'?' '+"_4jy3":'')+
(p==='large'?' '+"_4jy4":'')+
(p==='xlarge'?' '+"_4jy5":'')+
(p==='xxlarge'?' '+"_4jy6":'')+

(o==='default'?' '+"_517h":'')+
(o==='confirm'?' '+"_4jy1":'')+
(o==='special'?' '+"_4jy2":'')+

(q==='light'?' '+"_51sy":'')+
(q==='dark'?' '+"_9c6":'')+

(r?' '+"_59pe":'')+

(o==='confirm'||o==='special'?' '+"selected":'');



return (c('React').createElement(c('AbstractButton.react'),babelHelpers['extends']({},
s,
{className:c('joinClasses')(this.props.className,t)})));};


function m(){'use strict';i.apply(this,arguments);}m.defaultProps={use:'default',size:l,borderShade:'light',suppressed:false};





m.propTypes=



{use:k.oneOf
(['default',
'special',
'confirm']),




size:k.oneOf
(['small',
'medium',
'large',
'xlarge',
'xxlarge']),




borderShade:k.oneOf
(['light',
'dark']),





suppressed:k.bool};


f.exports=m;}),null);

/** js/components/core/XUI/GlyphButton/XUIAbstractGlyphButton.react.js */






__d('XUIAbstractGlyphButton.react',['cx','AbstractButton.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,









k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.







render=function(){

return (c('React').createElement(c('AbstractButton.react'),babelHelpers['extends']({},
this.props,
{className:c('joinClasses')(this.props.className,"_5upp")})));};


function l(){i.apply(this,arguments);}l.propTypes=c('AbstractButton.react').propTypes;


f.exports=l;}),null);

/** js/components/core/XUI/GlyphButton/XUICloseButton.react.js */




__d('XUICloseButton.react',['cx','fbt','XUIAbstractGlyphButton.react','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,








l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.















render=function(){'use strict';
var n=this.props.size,
o=this.props.shade,

p="_50zy"+

(n==='small'?' '+"_50zz":'')+
(n==='medium'?' '+"_50-0":'')+
(o==='light'?' '+"_50z_":'')+
(o==='dark'?' '+"_50z-":''),


q=this.props.label,
r=this.props.title;
if(!this.props.title&&!this.props.tooltip){
if(!q)
q=i._(["Remove","4c2f3136c447c92c8787037c3723a78d"]);

r=q;}



return (c('React').createElement(c('XUIAbstractGlyphButton.react'),babelHelpers['extends']({},
this.props,
{label:q,
title:r,
type:this.props.href?null:this.props.type,
'data-hover':this.props.tooltip&&'tooltip',
'data-tooltip-alignh':this.props.tooltip&&'center',
'data-tooltip-content':this.props.tooltip,
className:c('joinClasses')(this.props.className,p)})));};


function m(){'use strict';j.apply(this,arguments);}m.propTypes={shade:l.oneOf(['light','dark']),size:l.oneOf(['small','medium']),type:l.oneOf(['submit','button','reset'])};m.defaultProps={size:'medium',shade:'dark',type:'button'};


f.exports=m;}),null);

/** js/components/core/XUI/PopoverMenu/XUIPopoverButton.react.js */





__d('XUIPopoverButton.react',['cx','ix','AbstractPopoverButton.react','Image.react','React','XUIButton.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,










l=c('React').PropTypes;j=babelHelpers.inherits









(m,c('React').Component);k=j&&j.prototype;m.








getButtonSize=function(n){'use strict';
return n.size||'medium';};
m.prototype.

render=function(){'use strict';
var n=m.getButtonSize(this.props),

o="_55pi",p=










this.props,q=p.theme,r=p.use,s=p.chevron,t=p.maxwidth,u=p.image,v=p.label,w=p.haschevron,x=babelHelpers.objectWithoutProperties(p,['theme','use','chevron','maxwidth','image','label','haschevron']);

if(q==='dark')
o=c('joinClasses')
(o,"_5vto"+


(n==='small'?' '+"_55_o":'')+
(n==='medium'?' '+"_55_p":'')+
(n==='large'?' '+"_55_q":'')+
(n==='xlarge'?' '+"_55_r":'')+
(n==='xxlarge'?' '+"_55_s":''));




if(!s){
var y=q==='dark'||
r==='confirm'||
r==='special'?
i("101301"):
i("101305");

s=c('React').createElement(c('Image.react'),{src:y});}


var z=
{button:c('React').createElement(c('XUIButton.react'),babelHelpers['extends']({},
x,
{use:r,
className:c('joinClasses')(this.props.className,o),
size:n})),

chevron:s,
chevronWidth:14,
defaultMaxWidth:t||200};


return (c('React').createElement(c('AbstractPopoverButton.react'),
{config:z,
haschevron:w,
image:u,
label:v,
maxwidth:t}));};


function m(){'use strict';j.apply(this,arguments);}m.propTypes={haschevron:l.bool,maxwidth:l.number};


f.exports=m;}),null);

/** js/components/core/XUI/Spinner/XUISpinner.react.js */





__d('XUISpinner.react',['cx','fbt','BrowserSupport','React','UserAgent','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,









l=c('React').PropTypes,

m=
c('BrowserSupport').hasCSSAnimations()&&

!(c('UserAgent').isEngine('Trident < 6')||
c('UserAgent').isEngine('Gecko < 39')||
c('UserAgent').isBrowser('Safari < 6'));j=babelHelpers.inherits


(n,c('React').Component);k=j&&j.prototype;n.prototype.

















render=function(){'use strict';var o=
this.props,p=o.showOnAsync,q=o.background,r=babelHelpers.objectWithoutProperties(o,['showOnAsync','background']),

s="img"+(' '+"_55ym")+


(this.props.size=='small'?' '+"_55yn":'')+
(this.props.size=='large'?' '+"_55yq":'')+
(q=='light'?' '+"_55yo":'')+
(q=='dark'?' '+"_55yp":'')+
(p?' '+"_5tqs":'')+
(!m?' '+"_5d9-":'')+
(m&&this.props.paused?' '+"_2y32":'');



return (c('React').createElement('span',babelHelpers['extends']({},
r,
{className:c('joinClasses')(this.props.className,s),
role:'progressbar',
'aria-valuetext':i._(["Loading...","0007976d9b948d4ca9e57de7b555b2c5"]),


'aria-busy':'true',
'aria-valuemin':'0',
'aria-valuemax':'100'})));};


function n(){'use strict';j.apply(this,arguments);}n.propTypes={paused:l.bool,showOnAsync:l.bool,size:l.oneOf(['small','large']),background:l.oneOf(['light','dark'])};n.defaultProps={showOnAsync:false,size:'small',background:'light'};


f.exports=n;}),null);

/** js/components/core/XUI/Text/XUIText.react.js */





__d('XUIText.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits

































(l,c('React').Component);j=i&&i.prototype;l.prototype.







































render=function(){'use strict';var m=








this.props,n=m.type,o=m.size,p=m.weight,q=m.display,r=m.headingLevel,s=m.children,t=babelHelpers.objectWithoutProperties(m,['type','size','weight','display','headingLevel','children']),

u=
(n==='serif'?"_5s6c":'')+
(o==='small'?' '+"_50f3":'')+
(o==='medium'?' '+"_50f4":'')+
(o==='large'?' '+"_50f5":'')+
(o==='xlarge'?' '+"_50f6":'')+
(p==='bold'?' '+"_50f7":'')+
(p==='normal'?' '+"_5kx5":'');


if(r!==undefined)
t=babelHelpers['extends']({},
t,
{role:'heading',
'aria-level':''+r});



if(q==='block')

return (c('React').createElement('div',babelHelpers['extends']({},
t,
{className:c('joinClasses')(this.props.className,u)}),
s));




return (c('React').createElement('span',babelHelpers['extends']({},
t,
{className:c('joinClasses')(this.props.className,u)}),
s));};


function l(){'use strict';i.apply(this,arguments);}l.propTypes={type:k.oneOf(['serif','inherit']),size:k.oneOf(['small','medium','large','xlarge','inherit']),weight:k.oneOf(['bold','inherit','normal']),display:k.oneOf(['inline','block']),headingLevel:k.oneOf([1,2,3,4,5,6])};l.defaultProps={type:'inherit',size:'inherit',weight:'inherit',display:'inline'};


f.exports=l;}),null);

/** js/components/core/XUI/Text/XUIGrayText.react.js */





__d('XUIGrayText.react',['cx','React','XUIText.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits












(l,c('React').Component);j=i&&i.prototype;l.prototype.


















render=function(){'use strict';var m=
this.props,n=m.shade,o=babelHelpers.objectWithoutProperties(m,['shade']),
p=
(n==='light'?"_50f8":'')+
(n==='medium'?' '+"_c24":'')+
(n==='dark'?' '+"_50f9":'');



return (c('React').createElement(c('XUIText.react'),babelHelpers['extends']({},
o,
{className:c('joinClasses')(this.props.className,p)}),
this.props.children));};


function l(){'use strict';i.apply(this,arguments);}l.propTypes={shade:k.oneOf(['light','medium','dark'])};l.defaultProps={shade:'light'};


f.exports=l;}),null);

/** js/feed/AttachmentRelatedShareConstants.js */




__d('AttachmentRelatedShareConstants',[],(function a(b,c,d,e,f,g){

var h=
{ARTICLE_CLICK:'article_click',
VIDEO_CLICK:'video_click',
FBVIDEO_CLICK:'fbvideo_click',
FBVIDEO_VIEW:'fbvideo_view',
GAME_CLICK:'game_click',
EVENT_DELAY:1000,
HIDE_DELAY:100,
PHOTO_CLICK:'photo_click',
EVENT_JOIN:'event_join',
PRODUCT_CLICK:'product_click',
MAP_CLICK:'map_click',
ACTION_BUTTON_CLICK:'action_button_click'};


f.exports=h;}),null);

/** js/logging/JSLogger.js */










__d('JSLogger',['lowerFacebookDomain'],(function a(b,c,d,e,f,g){




var h=

{MAX_HISTORY:500,


counts:{},


categories:{},


seq:0,


pageId:(Math.random()*2147483648|0).toString(36),


forwarding:false};


function i(n){
if(n=='/'||n.indexOf('/',1)<0)
return false;

var o=/^\/(v\d+\.\d\d?|head)\//.test(n);
if(o)
return /^\/(dialog|plugins)\//.
test(n.substring(n.indexOf('/',1)));

return /^\/(dialog|plugins)\//.test(n);}





function j(n){

if(n instanceof Error&&b.ErrorUtils)
n=b.ErrorUtils.normalizeError(n);



try{return JSON.stringify(n);}catch(
o){



return '{}';}}






function k(n,event,o){
if(!h.counts[n])h.counts[n]={};
if(!h.counts[n][event])h.counts[n][event]=0;
o=o==null?1:Number(o);
h.counts[n][event]+=isFinite(o)?o:0;}











h.logAction=function(event,n,o){
if(this.type=='bump'){
k(this.cat,event,n);}else
if(this.type=='rate'){
n&&k(this.cat,event+'_n',o);
k(this.cat,event+'_d',o);}else{



var p=
{cat:this.cat,
type:this.type,
event:event,
data:n!=null?j(n):null,
date:Date.now(),
seq:h.seq++};



h.head=h.head?h.head.next=p:h.tail=p;


while(h.head.seq-h.tail.seq>h.MAX_HISTORY)
h.tail=h.tail.next;

return p;}};






function l(n){
if(!h.categories[n]){
h.categories[n]={};

var o=function p(q){
var r={cat:n,type:q};
h.categories[n][q]=function(){
h.forwarding=false;
var s=null;

if(c('lowerFacebookDomain').isValidDocumentDomain())
return;


s=h.logAction;
if(i(location.pathname)){

h.forwarding=false;}else 


try{s=b.top.require('JSLogger')._.logAction;
h.forwarding=s!==h.logAction;}catch(
t){}


s&&s.apply(r,arguments);};};



o('debug');
o('log');
o('warn');
o('error');
o('bump');
o('rate');}


return h.categories[n];}







function m(n,o){
var p=[];
for(var q=o||h.tail;q;q=q.next)
if(!n||n(q)){
var r=
{type:q.type,
cat:q.cat,
date:q.date,
event:q.event,
seq:q.seq};


if(q.data)

r.data=JSON.parse(q.data);


p.push(r);}


return p;}



f.exports=
{_:h,
DUMP_EVENT:'jslogger/dump',
create:l,
getEntries:m};}),null);

/** js/modules/DOMScroll.js */




__d('DOMScroll',['Arbiter','Bootloader','DOM','DOMQuery','Run','Vector','ViewportBounds','ge','emptyFunction','ifRequired','isAsyncScrollQuery'],(function a(b,c,d,e,f,g){


























c('Run').onAfterLoad(function(){
c('Bootloader').loadModules(["Animation"],c('emptyFunction'),'DOMScroll');});


var h=
{SCROLL:'dom-scroll',

_scrolling:false,
_scrollingFinishedTimoeut:null,



getScrollState:function i(){

var j=c('Vector').getViewportDimensions(),
k=c('Vector').getDocumentDimensions(),
l=k.x>j.x,
m=k.y>j.y;


l+=0;
m+=0;

return new (c('Vector'))(l,m);},




_scrollbarSize:null,

_initScrollbarSize:function i(){

var j=c('DOM').create('p');
j.style.width='100%';
j.style.height='200px';

var k=c('DOM').create('div');
k.style.position='absolute';
k.style.top='0px';
k.style.left='0px';
k.style.visibility='hidden';
k.style.width='200px';
k.style.height='150px';
k.style.overflow='hidden';
k.appendChild(j);

document.body.appendChild(k);
var l=j.offsetWidth;
k.style.overflow='scroll';
var m=j.offsetWidth;
if(l==m)
m=k.clientWidth;


document.body.removeChild(k);

h._scrollbarSize=l-m;},


getScrollbarSize:function i(){
if(h._scrollbarSize===null)
h._initScrollbarSize();

return h._scrollbarSize;},































scrollTo:function i
(j,
k,
l,
m,
n,
o){


if(typeof k=='undefined'||k===true)
k=750;


if(c('isAsyncScrollQuery')())
k=false;


if(!(j instanceof c('Vector'))){
var p=c('Vector').getScrollPosition().x,
q=c('Vector').getElementPosition(c('ge')(j)).y;
j=new (c('Vector'))(p,q,'document');

if(!m)
j.y-=c('ViewportBounds').getTop()/(l?2:1);}



if(l){
j.y-=c('Vector').getViewportDimensions().y/2;}else
if(m){
j.y-=c('Vector').getViewportDimensions().y;
j.y+=m;}


if(n)
j.y-=n;


j=j.convertTo('document');

if(k){
c('ifRequired')('Animation',function(r){
h._setScrollingForDuration(k);

return new r(document.body).
to('scrollTop',j.y).
to('scrollLeft',j.x).
ease(r.ease.end).
duration(k).
ondone(o).
go();},
function(){
window.scrollTo(j.x,j.y);
o&&o();});}else{


window.scrollTo(j.x,j.y);
o&&o();}


c('Arbiter').inform(h.SCROLL);},















ensureVisible:function i
(j,
k,
l,
m,
n){

var o=c('Vector').getScrollPosition().x,p=
this._getBounds(j,k,l),q=p[0],r=p[1],s=p[2],t=p[3];

if(s<q){

h.scrollTo
(new (c('Vector'))(o,s,'document'),
m,
false,
false,
0,
n);}else
if(t>r)
if(s-(t-r)<q){

h.scrollTo
(new (c('Vector'))(o,s,'document'),
m,
false,
false,
0,
n);}else 


h.scrollTo
(new (c('Vector'))(o,t,'document'),
m,
false,
true,
0,
n);},













isCurrentlyVisible:function i(j,k,l){var m=
this._getBounds(j,k,l),n=m[0],o=m[1],p=m[2],q=m[3];

return p>=n&&q<=o;},


_getBounds:function i(j,k,l){
if(l===undefined)
l=10;


j=c('ge')(j);

if(k)
j=c('DOMQuery').find(j,k);


var m=c('Vector').getScrollPosition().y,
n=m+c('Vector').getViewportDimensions().y,
o=c('Vector').getElementPosition(j).y,
p=o+c('Vector').getElementDimensions(j).y;

o-=c('ViewportBounds').getTop();

o-=l;
p+=l;

return [m,n,o,p];},



scrollToTop:function i(j){
var k=c('Vector').getScrollPosition();
h.scrollTo(new (c('Vector'))(k.x,0,'document'),j!==false);},


currentlyScrolling:function i(){
return h._scrolling;},


_setScrollingForDuration:function i(j){
h._scrolling=true;

if(h._scollingFinishedTimeout)
clearTimeout(h._scrollingFinishedTimeout);

h._scrollingFinishedTimoeut=setTimeout(function(){
h._scrolling=false;},
j);}};



f.exports=h;}),null);

/** js/modules/goOrReplace.js */




__d("goOrReplace",[],(function a(b,c,d,e,f,g){












function h(i,j,k){










if(k){
i.replace(j);}else
if(i.href==j){
i.reload();}else 

i.href=j;}



f.exports=h;}),null);

/** js/modules/pagelets/onEnclosingPageletDestroy.js */




__d('onEnclosingPageletDestroy',['Arbiter','DOMQuery'],(function a(b,c,d,e,f,g){













function h(i,j){
var k=c('Arbiter').subscribe('pagelet/destroy',function(l,m){
if(c('DOMQuery').contains(m.root,i)){
k.unsubscribe();
j();}});


return k;}


f.exports=h;}),null);

/** shared/flux/src/Dispatcher_DEPRECATED.js */





__d('Dispatcher_DEPRECATED',['invariant','monitorCodeUse'],(function a(b,c,d,e,f,g,h){

'use strict';






var i='ID_';
































































































function j(){
this.$Dispatcher_DEPRECATED_callbacks={};
this.$Dispatcher_DEPRECATED_isDispatching=false;
this.$Dispatcher_DEPRECATED_isHandled={};
this.$Dispatcher_DEPRECATED_isPending={};
this.$Dispatcher_DEPRECATED_lastID=1;}
j.prototype.







register=
function(m,
n){







n=this.__genID(n);

this.$Dispatcher_DEPRECATED_callbacks[n]=m;
return n;};
j.prototype.




unregister=function(m){







this.$Dispatcher_DEPRECATED_callbacks[m]||h(0,
'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
m);

delete this.$Dispatcher_DEPRECATED_callbacks[m];};
j.prototype.






waitFor=function(m){

this.$Dispatcher_DEPRECATED_isDispatching||h(0,
'Dispatcher.waitFor(...): Must be invoked while dispatching.');

for(var n=0;n<m.length;n++){
var o=m[n];
if(this.$Dispatcher_DEPRECATED_isPending[o]){

this.$Dispatcher_DEPRECATED_isHandled[o]||h(0,
'Dispatcher.waitFor(...): Circular dependency detected while '+
'waiting for `%s`.',
o);

continue;}


this.$Dispatcher_DEPRECATED_callbacks[o]||h(0,
'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
o);

this.$Dispatcher_DEPRECATED_invokeCallback(o);}};

j.prototype.




dispatch=function(m){
l
(this.$Dispatcher_DEPRECATED_isDispatching,
this.$Dispatcher_DEPRECATED_pendingPayload,
m);

this.$Dispatcher_DEPRECATED_startDispatching(m);

try{for(var n in this.$Dispatcher_DEPRECATED_callbacks){
if(this.$Dispatcher_DEPRECATED_isPending[n])
continue;

this.$Dispatcher_DEPRECATED_invokeCallback(n);}}finally{


this.$Dispatcher_DEPRECATED_stopDispatching();}};

j.prototype.




isDispatching=function(){
return this.$Dispatcher_DEPRECATED_isDispatching;};
j.prototype.







$Dispatcher_DEPRECATED_invokeCallback=function(m){
this.$Dispatcher_DEPRECATED_isPending[m]=true;
this.__invokeCallback(m,this.$Dispatcher_DEPRECATED_callbacks[m],this.$Dispatcher_DEPRECATED_pendingPayload);
this.$Dispatcher_DEPRECATED_isHandled[m]=true;};
j.prototype.






__invokeCallback=
function(m,
n,
o){

n(o);};
j.prototype.






$Dispatcher_DEPRECATED_startDispatching=function(m){
for(var n in this.$Dispatcher_DEPRECATED_callbacks){
this.$Dispatcher_DEPRECATED_isPending[n]=false;
this.$Dispatcher_DEPRECATED_isHandled[n]=false;}

this.$Dispatcher_DEPRECATED_pendingPayload=m;
this.$Dispatcher_DEPRECATED_isDispatching=true;};
j.prototype.






$Dispatcher_DEPRECATED_stopDispatching=function(){
delete this.$Dispatcher_DEPRECATED_pendingPayload;
this.$Dispatcher_DEPRECATED_isDispatching=false;};
j.prototype.





__genID=function(m){
m=m||i+this.$Dispatcher_DEPRECATED_lastID++;



while(this.$Dispatcher_DEPRECATED_callbacks[m])
m=i+this.$Dispatcher_DEPRECATED_lastID++;

return m;};



function k(m){
var n='<unknown>';

if(!m)
return n;


if(typeof m.type==='string')
return m.type;


if(typeof m.actionType==='string')
return m.actionType;


if(!m.action)
return n;


if(typeof m.action.type==='string')
return m.action.type;


if(typeof m.action.actionType==='string')
return m.action.actionType;


return n;}


function l
(m,
n,
o){


!m||h(0,
'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. '+
'Tried to dispatch action `%s` while already dispatching `%s`.',
k(o),
k(n));}




f.exports=j;}),null);

/** shared/flux-internal/ExplicitRegistrationDispatcherUtils.js */





__d('ExplicitRegistrationDispatcherUtils',['ErrorUtils','FluxInternalConfig','emptyFunction','monitorCodeUse','setImmediate'],(function a(b,c,d,e,f,g){

'use strict';var h,








i=false,
j=c('emptyFunction');












































f.exports={warn:j,inlineRequiresEnabled:i};}),null);

/** shared/flux-internal/ExplicitRegistrationDispatcher.js */





__d('ExplicitRegistrationDispatcher',['Dispatcher_DEPRECATED','ExplicitRegistrationDispatcherUtils','setImmediate'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits















































(j,c('Dispatcher_DEPRECATED'));i=h&&h.prototype;





function j(k){var l=k.strict;
i.constructor.call(this);
this.$ExplicitRegistrationDispatcher_strict=l;
this.$ExplicitRegistrationDispatcher_isExplicitlyRegistered={};}




j.prototype.

explicitlyRegisterStore=
function(k){

var l=k.getDispatchToken();
this.$ExplicitRegistrationDispatcher_isExplicitlyRegistered[l]=true;
return l;};
j.prototype.

explicitlyRegisterStores=
function(k){

return k.map(function(l){return this.explicitlyRegisterStore(l);}.bind(this));};
j.prototype.

register=
function(k,
l){

var m=this.__genID(l);

this.$ExplicitRegistrationDispatcher_isExplicitlyRegistered[m]=false;

var n=i.register.call(this,
this.$ExplicitRegistrationDispatcher_invokeCallback.bind(this,m,k),
m);


















return n;};
j.prototype.

$ExplicitRegistrationDispatcher_invokeCallback=
function(k,
l,
m){

if(this.$ExplicitRegistrationDispatcher_isExplicitlyRegistered[k]||!this.$ExplicitRegistrationDispatcher_strict)
this.__invokeCallback(k,l,m);};





j.prototype.

unregister=function(k){
i.unregister.call(this,k);
delete this.$ExplicitRegistrationDispatcher_isExplicitlyRegistered[k];};



j.prototype.


__getMaps=function(){






};


f.exports=j;}),null);

/** shared/flux-internal/ExplicitRegistrationReactDispatcher.js */





__d('ExplicitRegistrationReactDispatcher',['ExplicitRegistrationDispatcher','ReactDOM'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits









(j,c('ExplicitRegistrationDispatcher'));i=h&&h.prototype;j.prototype.

dispatch=function(k){
c('ReactDOM').unstable_batchedUpdates(function(){
i.dispatch.call(this,k);}.
bind(this));};
function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/pages/page_callout/PagesCalloutDispatcher.js */





__d('PagesCalloutDispatcher',['ExplicitRegistrationReactDispatcher'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits



(j,c('ExplicitRegistrationReactDispatcher'));i=h&&h.prototype;

function j(k){
i.constructor.call(this,k);
this.dispatch=this.dispatch.bind(this);}



f.exports=new j({strict:true});}),null);

/** shared/actor/ActorURI.js */





__d('ActorURI',['ActorURIConfig','URI'],(function a(b,c,d,e,f,g){




var h=





{create:function i(j,k){
return new (c('URI'))(j).addQueryData(c('ActorURIConfig').PARAMETER_ACTOR,k);}};



h.PARAMETER_ACTOR=c('ActorURIConfig').PARAMETER_ACTOR;

f.exports=h;}),null);

/** shared/bootloaded_component/DeferredComponent.react.js */





__d('DeferredComponent.react',['React','createCancelableFunction'],(function a(b,c,d,e,f,g){var h,i,





j=c('React').PropTypes;h=babelHelpers.inherits



















(k,c('React').Component);i=h&&h.prototype;



function k(l,m){'use strict';
i.constructor.call(this,l,m);this.
































$DeferredComponent_onComponentLoaded=function(n){
this.setState({ComponentClass:n},function(){
this.props.onComponentLoad&&this.props.onComponentLoad(n);}.
bind(this));}.
bind(this);this.state={ComponentClass:null,cancelableModulesLoaded:c('createCancelableFunction')(this.$DeferredComponent_onComponentLoaded)};}k.prototype.componentWillMount=function(){'use strict';this.props.deferredComponent(this.state.cancelableModulesLoaded);};k.prototype.componentWillUnmount=function(){'use strict';this.state.cancelableModulesLoaded.cancel();};k.prototype.render=function(){'use strict';var l=this.state.ComponentClass;if(!l||this.props.deferredForcePlaceholder)return this.props.deferredPlaceholder;var m=this.props,n=m.deferredPlaceholder,o=m.deferredComponent,p=m.onComponentLoad,q=m.deferredForcePlaceholder,r=babelHelpers.objectWithoutProperties(m,['deferredPlaceholder','deferredComponent','onComponentLoad','deferredForcePlaceholder']);return c('React').createElement(l,r);};


k.propTypes=



{deferredPlaceholder:j.element.isRequired,








deferredComponent:j.func.isRequired,





onComponentLoad:j.func,






deferredForcePlaceholder:j.bool};







f.exports=k;}),null);

/** shared/bootloaded_component/BootloadedComponent.react.js */





__d('BootloadedComponent.react',['DeferredComponent.react','JSResource','React'],(function a(b,c,d,e,f,g){var h,i,







j=c('React').PropTypes;h=babelHelpers.inherits









































(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.





















$BootloadedComponent_provideComponent=function(q){
c('JSResource').loadAll([this.props.bootloadLoader],q);}.
bind(this),m;}k.prototype.render=function(){'use strict';var l=this.props,m=l.bootloadLoader,n=l.bootloadPlaceholder,o=l.bootloadForcePlaceholder,p=babelHelpers.objectWithoutProperties(l,['bootloadLoader','bootloadPlaceholder','bootloadForcePlaceholder']);return c('React').createElement(c('DeferredComponent.react'),babelHelpers['extends']({deferredPlaceholder:n,deferredComponent:this.$BootloadedComponent_provideComponent,deferredForcePlaceholder:o},p));};


f.exports=Object.assign(k,
{propTypes:
{bootloadPlaceholder:j.element.isRequired,
bootloadLoader:j.instanceOf(c('JSResource').Reference).isRequired,
bootloadForcePlaceholder:j.bool},

create:function l(m){var n,o;n=babelHelpers.inherits
(p,c('React').Component);o=n&&n.prototype;p.prototype.
render=function(){'use strict';var q=
this.props,r=q.bootloadLoader,s=babelHelpers.objectWithoutProperties(q,['bootloadLoader']);

return (c('React').createElement(k,babelHelpers['extends']
({bootloadLoader:m,
bootloadPlaceholder:c('React').createElement('div',null)},
s)));};


function p(){'use strict';n.apply(this,arguments);}

p.displayName='BootloadedComponent('+
m.getModuleId()+')';
return p;}});}),
null);

/** shared/core/RTLKeys.js */





__d('RTLKeys',['Keys','Locale'],(function a(b,c,d,e,f,g){






var h=babelHelpers['extends']({},c('Keys')),

i=null;
function j(){
if(i===null)
i=c('Locale').isRTL();

return i;}


h.REAL_RIGHT=c('Keys').RIGHT;
h.REAL_LEFT=c('Keys').LEFT;
delete h.LEFT;
delete h.RIGHT;

h.getLeft=function(){
return j()?h.REAL_RIGHT:h.REAL_LEFT;};


h.getRight=function(){
return j()?h.REAL_LEFT:h.REAL_RIGHT;};


f.exports=h;}),null);

/** shared/core/areEqual.js */





__d('areEqual',[],(function a(b,c,d,e,f,g){

var h=[],
i=[];









function j(l,m){
var n=h.length?h.pop():[],
o=i.length?i.pop():[],
p=k(l,m,n,o);
n.length=0;
o.length=0;
h.push(n);
i.push(o);
return p;}


function k(l,m,n,o){
if(l===m)

return l!==0||1/l==1/m;

if(l==null||m==null)

return false;

if(typeof l!='object'||typeof m!='object')
return false;

var p=Object.prototype.toString,
q=p.call(l);
if(q!=p.call(m))
return false;

switch(q){
case '[object String]':
return l==String(m);
case '[object Number]':
return isNaN(l)||isNaN(m)?false:l==Number(m);
case '[object Date]':
case '[object Boolean]':
return +l==+m;
case '[object RegExp]':
return l.source==m.source&&
l.global==m.global&&
l.multiline==m.multiline&&
l.ignoreCase==m.ignoreCase;}


var r=n.length;
while(r--)
if(n[r]==l)
return o[r]==m;


n.push(l);
o.push(m);
var s=0;

if(q==='[object Array]'){
s=l.length;
if(s!==m.length)
return false;


while(s--)
if(!k(l[s],m[s],n,o))
return false;}else{



if(l.constructor!==m.constructor)
return false;

if(Object.prototype.hasOwnProperty.call(l,'valueOf')&&Object.prototype.hasOwnProperty.call(m,'valueOf'))
return l.valueOf()==m.valueOf();

var t=Object.keys(l);
if(t.length!=Object.keys(m).length)
return false;

for(var u=0;u<t.length;u++){
if(t[u]==='_owner')




continue;


if(!Object.prototype.hasOwnProperty.call(m,t[u])||
!k(l[t[u]],m[t[u]],n,o))

return false;}}



n.pop();
o.pop();
return true;}


f.exports=j;}),null);

/** shared/core/coalesce.js */




__d("coalesce",[],(function a(b,c,d,e,f,g){








function h(){
for(var i=0;i<arguments.length;++i)
if(arguments[i]!=null)
return arguments[i];


return null;}


f.exports=h;}),null);

/** shared/core/enumerate.js */





__d('enumerate',[],(function a(b,c,d,e,f,g){



'use strict';

f.exports=function(h){
return h.FB_enumerate;}
(b);}),null);

/** shared/core_components/DOMContainer/DOMContainer.react.js */




__d('DOMContainer.react',['invariant','React','ReactDOM','isNode'],(function a(b,c,d,e,f,g,h){var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits

















(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.











getDOMChild=function(){
var r=this.props.children;
c('isNode')(r)||h(0,'DOMContainer child must be a DOM node.');
return r;}.
bind(this),n;}l.prototype.

shouldComponentUpdate=function(m,n){'use strict';
return m.children!==this.props.children;};
l.prototype.

componentDidMount=function(){'use strict';
c('ReactDOM').findDOMNode(this).appendChild(this.getDOMChild());};
l.prototype.

componentDidUpdate=function(){'use strict';
var m=c('ReactDOM').findDOMNode(this);


while(m.lastChild)
m.removeChild(m.lastChild);



m.appendChild(this.getDOMChild());};
l.prototype.

render=function(){'use strict';
if(this.props.display==='block')
return c('React').createElement('div',this.props,undefined);

return c('React').createElement('span',this.props,undefined);};
l.propTypes={display:k.oneOf(['inline','block'])};l.defaultProps={display:'inline'};


f.exports=l;}),null);

/** shared/core_components/Layout/Layout.react.js */




__d('Layout.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits






(k,c('React').Component);j=i&&i.prototype;k.prototype.
render=function(){'use strict';
var l=false,
m=false;

c('React').Children.forEach
(this.props.children,
function(n){
if(!n)
return;




if(n.type===k.FillColumn){
m=true;}else
if(m)
l=true;});





return (c('React').createElement('div',babelHelpers['extends']({},this.props,
{className:
c('joinClasses')
(this.props.className,
l?
"_5aj7":
"clearfix _ikh")}),

this.props.children));};


function k(){'use strict';i.apply(this,arguments);}


k.Column=function(){var l,m;l=babelHelpers.inherits(n,c('React').Component);m=l&&l.prototype;n.prototype.
render=function(){'use strict';

return (c('React').createElement('div',babelHelpers['extends']({},this.props,
{className:c('joinClasses')(this.props.className,"_4bl7")})));};


function n(){'use strict';l.apply(this,arguments);}return n;}();


k.FillColumn=function(){var l,m;l=babelHelpers.inherits(n,c('React').Component);m=l&&l.prototype;n.prototype.
render=function(){'use strict';

return (c('React').createElement('div',babelHelpers['extends']({},this.props,
{className:
c('joinClasses')(this.props.className,"_4bl9")})));};



function n(){'use strict';l.apply(this,arguments);}return n;}();


f.exports=k;}),null);

/** shared/core_components/LeftRight/LeftRight.react.js */






__d('LeftRight.react',['cx','invariant','React','keyMirror','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,









l=c('keyMirror')
({left:true,
right:true,
both:true});










function m(p){

p&&
(p.length===1||
p.length===2)||i(0,

'LeftRight component must have one or two children.');}



function n(p){
var q=[];
c('React').Children.forEach(p,function(r){return q.push(r);});
return q;}
j=babelHelpers.inherits




(o,c('React').Component);k=j&&j.prototype;o.prototype.




render=function(){
var p=n(this.props.children);
m(p);

var q=this.props.direction||l.both,
r=q===l.both,



s=r||q===l.left?
"_ohe lfloat":'',

t=r||q===l.right?
"_ohf rfloat":'',

u=
c('React').createElement('div',{key:'left',className:s},
p[0]),


v=p.length<2?null:
c('React').createElement('div',{key:'right',className:t},
p[1]),















w=q===l.right&&v?
[v,u]:
[u,v];


return (c('React').createElement('div',babelHelpers['extends']({},this.props,
{className:c('joinClasses')(this.props.className,'clearfix')}),
w));};


function o(){j.apply(this,arguments);}o.DIRECTION=l;


f.exports=o;}),null);

/** shared/fbjs/functional/filterObject.js */




__d('filterObject',[],(function a(b,c,d,e,f,g){

'use strict';

var h=Object.prototype.hasOwnProperty;
























function i(j,k,l){
if(!j)
return null;

var m={};
for(var n in j)
if(h.call(j,n)&&
k.call(l,j[n],n,j))
m[n]=j[n];


return m;}


f.exports=i;}),null);

/** shared/fbjs/key-mirror/keyMirrorRecursive.js */






__d('keyMirrorRecursive',['invariant'],(function a(b,c,d,e,f,g,h){

'use strict';



















function i(l,m){
return j(l,m);}


function j
(l,
m){

var n={},
o;


k(l)||h(0,
'keyMirrorRecursive(...): Argument must be an object.');


for(o in l){
if(!Object.prototype.hasOwnProperty.call(l,o))
continue;


var p=l[o],

q=m?m+'.'+o:o;

if(k(p)){
p=j(p,q);}else 

p=q;


n[o]=p;}

return n;}


function k(l){
return l instanceof Object&&!Array.isArray(l);}


f.exports=i;}),null);

/** shared/flux/src/stores/FluxStore.js */





__d('FluxStore',['invariant','EventEmitter'],(function a(b,c,d,e,f,g,h){

'use strict';




























function i(k){
this.__className=this.constructor.name;

this.__changed=false;
this.__changeEvent='change';
this.__dispatcher=k;
this.__emitter=new (c('EventEmitter'))();
this.$FluxStore_dispatchToken=k.register
(function(l){
this.__invokeOnDispatch(l);}.
bind(this),
this.__getIDForDispatcher());}

i.prototype.

addListener=function(k){
return this.__emitter.addListener(this.__changeEvent,k);};
i.prototype.

getDispatcher=function(){
return this.__dispatcher;};
i.prototype.






getDispatchToken=function(){
return this.$FluxStore_dispatchToken;};
i.prototype.




hasChanged=function(){

this.__dispatcher.isDispatching()||h(0,
'%s.hasChanged(): Must be invoked while dispatching.',
this.__className);

return this.__changed;};
i.prototype.

__emitChange=function(){

this.__dispatcher.isDispatching()||h(0,
'%s.__emitChange(): Must be invoked while dispatching.',
this.__className);

this.__changed=true;};
i.prototype.






__invokeOnDispatch=function(k){
this.__changed=false;
this.__onDispatch(k);
if(this.__changed)
this.__emitter.emit(this.__changeEvent);};

i.prototype.






__onDispatch=function(k){

h(0,
'%s has not overridden FluxStore.__onDispatch(), which is required',
this.__className);};

i.prototype.





__getIDForDispatcher=function(){
return this.__className;};



var j=i;


f.exports=i;}),null);

/** shared/flux/src/stores/TypedFluxStore.js */





__d('TypedFluxStore',['FluxStore'],(function a(b,c,d,e,f,g){

'use strict';





f.exports=c('FluxStore');}),null);

/** shared/utils/abstractMethod.js */





__d('abstractMethod',['invariant'],(function a(b,c,d,e,f,g,h){

'use strict';



function i(j,k){

h(0,
'Subclasses of %s must override %s() with their own implementation.',
j,
k);}



f.exports=i;}),null);

/** shared/flux/src/stores/FluxReduceStore.js */





__d('FluxReduceStore',['invariant','TypedFluxStore','abstractMethod'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,k,l;i=babelHelpers.inherits





























(m,c('TypedFluxStore'));j=i&&i.prototype;



function m(p){
j.constructor.call(this,p);
this.$FluxReduceStore_state=this.getInitialState();}
m.prototype.





getState=function(){
return this.$FluxReduceStore_state;};
m.prototype.





getInitialState=function(){
return c('abstractMethod')('FluxReduceStore','getInitialState');};
m.prototype.





reduce=function(p,q){
return c('abstractMethod')('FluxReduceStore','reduce');};
m.prototype.





areEqual=function(p,q){
return p===q;};
m.prototype.

__invokeOnDispatch=function(p){
this.__changed=false;


var q=this.$FluxReduceStore_state,
r=this.reduce(q,p);



r!==undefined||h(0,
'%s returned undefined from reduce(...), did you forget to return '+
'state in the default case? (use null if this was intentional)',
this.constructor.name);


if(!this.areEqual(q,r)){
this.$FluxReduceStore_state=r;




this.__emitChange();}


if(this.__changed)
this.__emitter.emit(this.__changeEvent);};




var n=m;k=babelHelpers.inherits


(o,m);l=k&&k.prototype;function o(){k.apply(this,arguments);}
f.exports=n;}),null);

/** shared/haste/cssVar.js */






__d('cssVar',[],(function a(b,c,d,e,f,g){




function h(i){
throw new Error
('cssVar'+'("'+i+'"): Unexpected class transformation.');}



f.exports=h;}),null);

/** shared/haste/fbglyph.js */





__d('fbglyph',[],(function a(b,c,d,e,f,g){






























function h(i){
throw new Error

('fbglyph'+'('+JSON.stringify(i)+'): '+
'Unexpected fbglyph reference.');}



f.exports=h;}),null);

/** shared/intl/intlList.js */










__d('intlList',['fbt','invariant','React','keyMirror'],(function a(b,c,d,e,f,g,h,i){

'use strict';







var j=function l
(m,
n){











n=n||l.CONJUNCTIONS.AND;

var o=m.length;
if(o===0){
return '';}else
if(o===1)
return m[0];


var p=m[o-1],
q=m[0];

for(var r=1;r<o-1;++r)
q=h._(["{previous items}, {following items}","98480f6038b80a5d36d6c3860730dc94"],[h.param




('previous items',q),h.param

('following items',m[r])]);



return k(q,p,n);};


function k
(l,
m,
n){

switch(n){
case j.CONJUNCTIONS.AND:
return h._(["{list of items} and {last item}","b104b096e9c260fcb13df28f35809223"],[h.param



('list of items',l),h.param

('last item',m)]);



case j.CONJUNCTIONS.OR:
return h._(["{list of items} or {last item}","eb7d70b44256b8d083bd3ba1d26fe7b0"],[h.param



('list of items',l),h.param

('last item',m)]);



case j.CONJUNCTIONS.NONE:
return h._(["{list of items}, {last item}","a2de5d6ad7c50e834e2f85de55c0a8b4"],[h.param



('list of items',l),h.param

('last item',m)]);





default:i(0,
'Invalid conjunction %s provided to intlList',
n);}}




j.CONJUNCTIONS=c('keyMirror')
({AND:null,
NONE:null,
OR:null});


f.exports=j;}),null);

/** shared/request/XHRHttpError.js */





__d('XHRHttpError',[],(function a(b,c,d,e,f,g){
'use strict';










var h='HTTP_CLIENT_ERROR',
i='HTTP_PROXY_ERROR',
j='HTTP_SERVER_ERROR',
k='HTTP_TRANSPORT_ERROR',
l='HTTP_UNKNOWN_ERROR',

m=
{HTTP_CLIENT_ERROR:h,
HTTP_PROXY_ERROR:i,
HTTP_SERVER_ERROR:j,
HTTP_TRANSPORT_ERROR:k,
HTTP_UNKNOWN_ERROR:l,




getErrorCode:function n(o,p){
if(p===0){




var q=o.getProtocol();
if(q==='file'||q==='ftp')
return null;

return k;}else
if(p>=100&&p<200){
return i;}else
if(p>=200&&p<300){
return null;}else
if(p>=400&&p<500){
return h;}else
if(p>=500&&p<600){
return j;}else
if(p>=12001&&p<12156){










return k;}else 

return l;}};





f.exports=m;}),null);

/** shared/request/xhrSimpleDataSerializer.js */





__d('xhrSimpleDataSerializer',[],(function a(b,c,d,e,f,g){
'use strict';

function h(i){
var j=[];
for(var k in i)
j.push
(encodeURIComponent(k)+'='+encodeURIComponent(i[k]));


return j.join('&');}


f.exports=h;}),null);

/** shared/request/XHRRequest.js */





__d('XHRRequest',['invariant','Env','ErrorUtils','TimeSlice','URI','XHRHttpError','ZeroRewrites','getAsyncHeaders','xhrSimpleDataSerializer'],(function a(b,c,d,e,f,g,h){









































var i=
{errorCode:null,
errorMsg:null,
errorType:null},




j=
{loadedBytes:null,
totalBytes:null};






function k(l){'use strict';
this.setURI(l);
this.setResponseType(null);
this.setMethod('POST');
this.setTransportBuilder
(c('ZeroRewrites').getTransportBuilderForURI(this.getURI()));

this.setDataSerializer(c('xhrSimpleDataSerializer'));}
k.prototype.







setURI=function(l){'use strict';
this.$XHRRequest_uri=c('ZeroRewrites').rewriteURI(new (c('URI'))(l));
return this;};
k.prototype.




getURI=function(){'use strict';
return this.$XHRRequest_uri;};
k.prototype.








setResponseType=function(l){'use strict';
this.$XHRRequest_responseType=l;
return this;};
k.prototype.







setMethod=function(l){'use strict';
this.$XHRRequest_method=l;
return this;};
k.prototype.




getMethod=function(){'use strict';
return this.$XHRRequest_method;};
k.prototype.





setData=function(l){'use strict';
this.$XHRRequest_data=l;
return this;};
k.prototype.




getData=function(){'use strict';
return this.$XHRRequest_data;};
k.prototype.





setRawData=function(l){'use strict';
this.$XHRRequest_rawData=l;
return this;};
k.prototype.






setRequestHeader=function(l,m){'use strict';
if(!this.$XHRRequest_headers)
this.$XHRRequest_headers={};

this.$XHRRequest_headers[l]=m;
return this;};
k.prototype.





setTimeout=function(l){'use strict';
this.$XHRRequest_timeout=l;
return this;};
k.prototype.




getTimeout=function(){'use strict';
return this.$XHRRequest_timeout;};
k.prototype.





setResponseHandler=function(l){'use strict';
this.$XHRRequest_responseHandler=l;
return this;};
k.prototype.




getResponseHandler=function(){'use strict';
return this.$XHRRequest_responseHandler;};
k.prototype.





setErrorHandler=function(l){'use strict';
this.$XHRRequest_errorHandler=l;
return this;};
k.prototype.




getErrorHandler=function(){'use strict';
return this.$XHRRequest_errorHandler;};
k.prototype.





setAbortHandler=function(l){'use strict';
this.$XHRRequest_abortHandler=l;
return this;};
k.prototype.




getAbortHandler=function(){'use strict';
return this.$XHRRequest_abortHandler;};
k.prototype.





setTimeoutHandler=function(l){'use strict';
this.$XHRRequest_timeoutHandler=l;
return this;};
k.prototype.





setUploadProgressHandler=function(l){'use strict';
this.$XHRRequest_uploadProgressHandler=l;
return this;};
k.prototype.





setDownloadProgressHandler=function(l){'use strict';
this.$XHRRequest_downloadProgressHandler=l;
return this;};
k.prototype.





setTransportBuilder=function(l){'use strict';
this.$XHRRequest_transportBuilder=l;
return this;};
k.prototype.





setDataSerializer=function(l){'use strict';
this.$XHRRequest_dataSerializer=l;
return this;};
k.prototype.

send=function(){'use strict';
var l=this.$XHRRequest_timeout,
m=this.$XHRRequest_transportBuilder(),
n=this.getURI();

this.$XHRRequest_pendingTransport=m;

var o;

this.$XHRRequest_method==='POST'||!this.$XHRRequest_rawData||h(0,
'Must send raw data on post. Data: %s URI: %s',this.$XHRRequest_rawData,n);

if(c('Env').force_param)
Object.assign(this.$XHRRequest_data,c('Env').force_param);

if(this.$XHRRequest_method==='GET'||this.$XHRRequest_rawData){
n.addQueryData(this.$XHRRequest_data);
o=this.$XHRRequest_rawData;}else 

o=this.$XHRRequest_dataSerializer(this.$XHRRequest_data);


m.onreadystatechange=this.$XHRRequest_getOnReadyStateChangeHandler();




if(m.upload&&this.$XHRRequest_uploadProgressHandler)
m.upload.onprogress=this.$XHRRequest_onuploadprogress.bind(this);


if(this.$XHRRequest_downloadProgressHandler)
m.onprogress=this.$XHRRequest_ondownloadprogress.bind(this);


if(l)
this.$XHRRequest_timeoutTimer=setTimeout(this.$XHRRequest_ontimeout.bind(this),l);


m.open(this.$XHRRequest_method,n.toString(),true);

var p=false;
if(this.$XHRRequest_headers)
for(var q in this.$XHRRequest_headers){
if(q.toLowerCase()==='content-type')
p=true;

m.setRequestHeader(q,this.$XHRRequest_headers[q]);}



if(this.$XHRRequest_method=='POST'&&!this.$XHRRequest_rawData&&!p)
m.setRequestHeader
('Content-Type',
'application/x-www-form-urlencoded');



var r=c('getAsyncHeaders')(n);
Object.keys(r).forEach(function(s){
m.setRequestHeader(s,r[s]);});




if(this.$XHRRequest_responseType==='arraybuffer')
if('responseType' in m){

m.responseType='arraybuffer';}else
if('overrideMimeType' in m){

m.overrideMimeType('text/plain; charset=x-user-defined');}else
if('setRequestHeader' in m)

m.setRequestHeader('Accept-Charset','x-user-defined');



if(this.$XHRRequest_responseType==='blob')
m.responseType=this.$XHRRequest_responseType;


m.send(o);};
k.prototype.

abort=function(){'use strict';
this.$XHRRequest_abort();
if(this.$XHRRequest_abortHandler)
c('ErrorUtils').applyWithGuard
(this.$XHRRequest_abortHandler,
null,
null,
null,
'XHRRequest:_abortHandler');};


k.prototype.

$XHRRequest_abort=function(){'use strict';
var l=this.$XHRRequest_pendingTransport;
if(l){
l.onreadystatechange=null;
l.abort();}

this.$XHRRequest_cleanup();};
k.prototype.

$XHRRequest_ontimeout=function(){'use strict';
this.$XHRRequest_abort();
if(this.$XHRRequest_timeoutHandler)
c('ErrorUtils').applyWithGuard
(this.$XHRRequest_timeoutHandler,
null,
null,
null,
'XHRRequest:_abortHandler');};


k.prototype.

$XHRRequest_getResponse=function(l){'use strict';
if(this.$XHRRequest_responseType)


if('response' in l){
return l.response;}else
if(this.$XHRRequest_responseType==='arraybuffer')
if(window.VBArray)
return window.VBArray(l.responseBody).toArray();







return l.responseText;};
k.prototype.

$XHRRequest_getOnReadyStateChangeHandler=function(){'use strict';
var l=c('TimeSlice').getGuardedContinuation
('XHRRequest onreadystatechange continuation'),

m=c('TimeSlice').guard
(function(n){for(var o=arguments.length,p=Array(o>1?o-1:0),q=1;q<o;q++)p[q-1]=arguments[q];return n.apply(undefined,p);},
'XHRRequest onreadystatechange',
{isContinuation:false});

return function(){
var n=this.$XHRRequest_pendingTransport,
o=n.readyState;



if(o>=2){
var p=o===4,

q=this.getURI(),
r=c('XHRHttpError').getErrorCode(q,n.status),
s=this.$XHRRequest_responseHandler;
if(r!==null){
if(p){
i.errorCode=r;
i.errorMsg=this.$XHRRequest_getResponse(n);
i.errorType=n.status?'HTTP '+
n.status:
'HTTP';

if(this.$XHRRequest_errorHandler){
c('ErrorUtils').applyWithGuard
(l.bind(undefined,this.$XHRRequest_errorHandler),
null,
[i],
null,
'XHRRequest:_errorHandler');}else 



l(function(){});}}else


if(s){


var t=null;
if(s.includeHeaders)
t=n.getAllResponseHeaders();





if(p||s.parseStreaming&&o===3){




var u=p?l:
m;
c('ErrorUtils').applyWithGuard
(u.bind(undefined,s),
null,
[this.$XHRRequest_getResponse(n),t,p],
null,
'XHRRequest:handler');}}else 




l(function(){});


if(p)
this.$XHRRequest_cleanup();}}.


bind(this);};
k.prototype.

$XHRRequest_onuploadprogress=function(l){'use strict';
j.loadedBytes=l.loaded;
j.totalBytes=l.total;
if(this.$XHRRequest_uploadProgressHandler)
c('ErrorUtils').applyWithGuard
(this.$XHRRequest_uploadProgressHandler,
null,
[j],
null,
'XHRRequest:_uploadProgressHandler');};


k.prototype.

$XHRRequest_ondownloadprogress=function(l){'use strict';
var m=
{loadedBytes:l.loaded,
totalBytes:l.total};

if(this.$XHRRequest_downloadProgressHandler)
c('ErrorUtils').applyWithGuard
(this.$XHRRequest_downloadProgressHandler,
null,
[m],
null,
'XHRRequest:_downloadProgressHandler');};


k.prototype.

$XHRRequest_cleanup=function(){'use strict';
clearTimeout(this.$XHRRequest_timeoutTimer);
delete this.$XHRRequest_pendingTransport;};



f.exports=k;}),null);
