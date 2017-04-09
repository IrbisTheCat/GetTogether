if (self.CavalryLogger) { CavalryLogger.start_js(["cEHWL"]); }

/** __static_js_modules__/funnelregistry.js */




__d("FunnelRegistry",[],(function a(b,c,d,e,f,g){

f.exports={WWW_EXAMPLE_FUNNEL:true,MSITE_EXAMPLE_FUNNEL:true,WWW_FEED_SHARE_DIALOG_FUNNEL:true,MSITE_FEED_SHARE_DIALOG_FUNNEL:true,PLATFORM_SHARE_DIALOG_FUNNEL:true,WWW_RECRUITING_SEARCH_FUNNEL:true,WWW_CANVAS_EDITOR_FUNNEL:true,MSITE_COMMENT_TYPING_FUNNEL:true,MSITE_NOTE_READING_FUNNEL:true,WWW_CAMPFIRE_COMPOSER_UPSELL_FUNNEL:true,WWW_REACTIONS_LIKE_BUTTON_HOVER_FUNNEL:true,WWW_REACTIONS_NUX_FUNNEL:true,WWW_COMMENT_REACTIONS_NUX_FUNNEL:true,MSITE_INLINE_REPLY_COMPOSER_FUNNEL:true,WWW_LEAD_GEN_FORM_CREATION_FUNNEL:true,WWW_LEAD_GEN_DESKTOP_AD_UNIT_FUNNEL:true,WWW_LEAD_GEN_MSITE_AD_UNIT_FUNNEL:true,WWW_LINK_PICKER_DIALOG_FUNNEL:true,WWW_MEME_PICKER_DIALOG_FUNNEL:true,WWW_SNOWLIFT_ACTIONS_FUNNEL:true,WWW_CANVAS_AD_CREATION_FUNNEL:true,WWW_SEARCH_AWARENESS_LEARNING_NUX_FUNNEL:true,WWW_CONSTITUENT_TITLE_UPSELL_FUNNEL:true,WWW_PAGE_CREATION_FUNNEL:true,WWW_VIDEOS_CASTING_FUNNEL:true,MSITE_PPD_FUNNEL:true,WWW_CMS_SEARCH_FUNNEL:true,SOCIAL_SEARCH_CONVERSION_WWW_FUNNEL:true,SOCIAL_SEARCH_DASHBOARD_WWW_FUNNEL:true,GAMES_QUICKSILVER_FUNNEL:true,SRT_USER_FLOW_FUNNEL:true,WWW_MEME_PIVOT_FUNNEL:true,WWW_NOTIFICATION_FUNNEL:true,MSITE_HASHTAG_PROMPT_FUNNEL:true,MSITE_FEED_ALBUM_CTA_FUNNEL:true,MTOUCH_COMMENT_STORIES_FUNNEL:true,WWW_MESSENGER_SHARE_TO_FB_FUNNEL:true,MISINFORMATION_RESHARE_ALERT_FUNNEL:true,FACECAST_BROADCASTER_FUNNEL:true,WWW_MISINFO_WARNING_FOOTER_FUNNEL:true,MTOUCH_MISINFO_WARNING_FOOTER_FUNNEL:true,COLLEGE_COMMUNITY_NUX_ONBOARDING_FUNNEL:true,WWW_MESSENGER_SEARCH_SESSION_FUNNEL:true,WWW_ACCESSIBILITY_NOTIFICATIONS_JEWEL_TABBING_FUNNEL:true,MTOUCH_FEED_MISSED_STORIES_FUNNEL:true,WWW_STORYSET_FUNNEL:true,POLYGLOT_MAIN_FUNNEL:true,CREATIVE_STUDIO_CREATION_FUNNEL:true,WWW_LIVE_VIEWER_TIPJAR_FUNNEL:true,WWW_FUNDRAISER_CREATION_FUNNEL:true,WWW_FUNDRAISER_EDIT_FUNNEL:true,WWW_FBL_FUNNEL:true,WWW_CLUE_FUNNEL:true,WWW_OFFERS_SIMPLE_COMPOSE_FUNNEL:true,WWW_OFFERS_SIMPLE_COMPOSE_POST_LIKE_FUNNEL:true,WWW_CHEVRON_FUNNEL:true,MSITE_AD_BREAKS_ONBOARDING_FLOW_FUNNEL:true};}),

null);

/** shared/funnellogger/FunnelAction.js */





__d('FunnelAction',[],(function a(b,c,d,e,f,g){









'use strict';

var h='name',
i='payload',
j='relative_time',
k='tag';




function l
(m,
n,
o,
p){

this.$FunnelAction_data={};
this.$FunnelAction_data[h]=m;
this.$FunnelAction_data[j]=n;
if(o!==undefined)
this.$FunnelAction_data[k]=o;

if(p!==undefined)
this.$FunnelAction_data[i]=JSON.stringify(p);}

l.prototype.

getData=function(){
return this.$FunnelAction_data;};



f.exports=l;}),null);

/** shared/funnellogger/Funnel.js */





__d('Funnel',['invariant','FunnelAction','FunnelRegistry','sprintf'],(function a(b,c,d,e,f,g,h){







'use strict';






var i='name',
j='instance_id',
k='start_time',
l='tags',
m='actions',
n='sampling_rate',
o='timeout_sec',

p=

{EXPLICIT:'explicit',

TIMEOUT:'timeout',

SESSION_END:'session_end',

RESTART:'restart',

ACTIONS_FULL:'actions_full'},


q=

{ACTION_END:'funnel_end',

ACTION_WINDOW_BLUR:'window_blur',

ACTION_WINDOW_FOCUS:'window_focus'},



r=600;















function s
(t,
u,
v,
w){


c('FunnelRegistry')[t]===true||h(0,
'Funnel name not registered.');

this.$Funnel_funnelName=t;
this.$Funnel_instanceId=u;


this.$Funnel_actions=[];
this.$Funnel_tags={};
this.$Funnel_samplingRate=v;
this.$Funnel_createdTimeStamp=Date.now();
this.timeout_sec=r;
this.shouldTrackFocus=false;
this.$Funnel_devMode=w;

this.devModeLogger('Started funnel');}
s.prototype.






addTag=function(t){
typeof t==='string'||h(0,'Funnel tag should be a String.');

this.$Funnel_tags[t]=true;
this.devModeLogger('Added funnel tag %s',t);
return this;};
s.prototype.







appendAction=function(t,u,v){



this.$Funnel_actions.push
(new (c('FunnelAction'))
(t,
Date.now()-this.$Funnel_createdTimeStamp,
u,
v));


if(u){
this.devModeLogger('Appended action %s with tag %s',t,u);}else 

this.devModeLogger('Appended action %s',t);

this.$Funnel_lastAction=t;
return this;};
s.prototype.


appendActionIfNew=function(t,u,v){
if(t!==this.$Funnel_lastAction)
this.appendAction(t,u,v);

return this;};
s.prototype.




getLogData=function(){
var t={};
t[i]=this.$Funnel_funnelName;
if(this.$Funnel_instanceId!==undefined){
t[j]=this.$Funnel_instanceId;}else 



t[j]=Math.floor(Math.random()*65536);

t[k]=this.$Funnel_createdTimeStamp;
t[n]=this.$Funnel_samplingRate;
t[o]=this.timeout_sec;
t[l]=[];
for(var u in this.$Funnel_tags)
if(this.$Funnel_tags[u]===true)
t[l].push(u);


if(this.$Funnel_actions.length>0){
t[m]=[];
for(var v=0;v<this.$Funnel_actions.length;v++)
t[m].push(this.$Funnel_actions[v].getData());}


return t;};
s.prototype.

devModeLogger=function(){










};s.prototype.

getTags=function(){
return this.$Funnel_tags;};



f.exports=
{Funnel:s,
EndType:p,
ActionType:q};}),null);

/** shared/funnellogger/FunnelLoggerSampler.js */





__d('FunnelLoggerSampler',['FunnelLoggerConfig'],(function a(b,c,d,e,f,g){








'use strict';



function h(j){
var k=i(j);




if(k===0)
return false;





return Math.random()*k<1;}


function i(j){
var k=c('FunnelLoggerConfig').freq[j];
if(k===undefined)

k=c('FunnelLoggerConfig').freq['default'];

return k;}


f.exports=
{shouldLog:h,
getSamplingRate:i};}),null);

/** shared/funnellogger/FunnelLogger.js */





__d('FunnelLogger',['invariant','Banzai','Funnel','FunnelRegistry','FunnelLoggerSampler','MarauderLogger'],(function a(b,c,d,e,f,g,h){













'use strict';









var i={},
j=false,
k=true;







function l
(qa,
ra){

var sa=ba(qa,ra);
pa();
ka(sa);
if(c('FunnelLoggerSampler').shouldLog(qa)){
i[sa]=new (c('Funnel').Funnel)
(qa,
ra,
c('FunnelLoggerSampler').getSamplingRate(qa),
false);

ea(sa);}}



function m
(qa,
ra){

var sa=ba(qa,ra);
if(!ca(sa))
return null;

return i[sa];}








function n
(qa,
ra){













}






function o
(qa,
ra,
sa){

if(sa===undefined){
da(qa,undefined,ra);}else
if(sa)
da(qa,ra,sa);}






function p
(qa,
ra){

var sa=ba(qa,ra);
if(ca(sa)){
i[sa].devModeLogger('Cancelled funnel');

fa(sa);
i[sa]=undefined;}}







function q(qa,ra){
var sa=ba(qa,ra);
if(ca(sa)){
i[sa].appendAction
(c('Funnel').ActionType.ACTION_END,
c('Funnel').EndType.EXPLICIT);

la(sa);}}














function r
(qa,
ra,
sa){

if(sa===undefined){
ga(qa,undefined,String(ra));}else 

ga(qa,Number(ra),sa);}





function s
(qa,
ra,
sa){

if(sa===undefined){
ha(qa,undefined,Boolean(ra));}else 

ha(qa,Number(ra),sa);}





function t
(qa,
ra,
sa){

if(sa===undefined){
ia(qa,undefined,String(ra),undefined);}else 

ia(qa,Number(ra),sa,undefined);}






function u
(qa,
ra,
sa){

if(sa===undefined){
ja(qa,undefined,String(ra),undefined);}else 

ja(qa,Number(ra),sa,undefined);}









function v
(qa,
ra,
sa,
ta){

if(ta===undefined){
ia(qa,undefined,String(ra),sa);}else 

ia(qa,Number(ra),sa,ta);}








function w
(qa,
ra,
sa,
ta){

if(ta===undefined){
ja(qa,undefined,String(ra),sa);}else 

ja(qa,Number(ra),sa,ta);}







function x
(qa,
ra,
sa,
ta){

if(ta===undefined){
ia(qa,undefined,String(ra),undefined,sa);}else 

ia
(qa,
Number(ra),
String(sa),
undefined,
ta);}









function y
(qa,
ra,
sa,
ta){

if(ta===undefined){
ja
(qa,
undefined,
String(ra),
undefined,
sa);}else 


ja
(qa,
Number(ra),
String(sa),
undefined,
ta);}








function z
(qa,
ra,
sa,
ta,
ua){

if(ua===undefined){
ia(qa,undefined,String(ra),sa,ta);}else 

ia
(qa,
Number(ra),
String(sa),
String(ta),
ua);}









function aa
(qa,
ra,
sa,
ta,
ua){

if(ua===undefined){
ja
(qa,
undefined,
String(ra),
sa,
ta);}else 


ja
(qa,
Number(ra),
String(sa),
String(ta),
ua);}











function ba(qa,ra){

c('FunnelRegistry')[qa]===true||h(0,
'Funnel name not registered.');

if(ra===undefined||ra===null){
return qa;}else 

return qa+ra.toString();}







function ca(qa){
return i[qa]!==undefined;}



function da
(qa,
ra,
sa){

var ta=ba(qa,ra);
if(ca(ta)){
i[ta].timeout_sec=sa;
i[ta].devModeLogger('Timeout set to %d sec',sa);
ea(ta);}}




function ea
(qa){

fa(qa);
i[qa].timeout_handle=setTimeout

(function(){
i[qa].appendAction
(c('Funnel').ActionType.ACTION_END,
c('Funnel').EndType.TIMEOUT);

la(qa);},

1000*i[qa].timeout_sec);}




function fa
(qa){

if(i[qa].timeout_handle)
clearTimeout(i[qa].timeout_handle);}




function ga
(qa,
ra,
sa){

var ta=ba(qa,ra);
if(ca(ta)){
i[ta].addTag(sa);
ea(ta);}}




function ha
(qa,
ra,
sa){

var ta=ba(qa,ra);
if(ca(ta)){
i[ta].shouldTrackFocus=sa;
i[ta].devModeLogger
('Focus tracking %s',
sa?'on':'off');}}





function ia
(qa,
ra,
sa,
ta,
ua){

var va=ba(qa,ra);
if(ca(va)){
i[va].appendAction(sa,ta,ua);
ea(va);}}




function ja
(qa,
ra,
sa,
ta,
ua){

var va=ba(qa,ra);
if(ca(va))
i[va].appendActionIfNew(sa,ta,ua);}







function ka(qa){
if(ca(qa)){
i[qa].appendAction
(c('Funnel').ActionType.ACTION_END,
c('Funnel').EndType.RESTART);

la(qa);}}







function la(qa){
if(ca(qa)){
var ra=i[qa].getLogData();
c('MarauderLogger').log('funnel_analytics',null,ra);
i[qa].devModeLogger('Logged: %s',JSON.stringify(ra));

fa(qa);
i[qa]=undefined;}}









function ma(){
for(var qa in i)
if(Object.prototype.hasOwnProperty.call(i,qa)&&ca(qa)){
i[qa].appendAction
(c('Funnel').ActionType.ACTION_END,
c('Funnel').EndType.SESSION_END);

la(qa);}}





function na(){
if(k){
k=false;
for(var qa in i)
if(Object.prototype.hasOwnProperty.call(i,qa)&&
ca(qa)&&
i[qa].shouldTrackFocus){

i[qa].appendAction(c('Funnel').ActionType.ACTION_WINDOW_BLUR);
fa(qa);}}}






function oa(){
if(!k){
k=true;
for(var qa in i)
if(Object.prototype.hasOwnProperty.call(i,qa)&&
ca(qa)&&
i[qa].shouldTrackFocus){

i[qa].appendAction(c('Funnel').ActionType.ACTION_WINDOW_FOCUS);
fa(qa);}}}






function pa(){
if(!j){
j=true;
if(window.addEventListener){
c('Banzai').subscribe(c('Banzai').SHUTDOWN,ma);
window.addEventListener('blur',na);
window.addEventListener('focus',oa);}}}




f.exports=

{startFunnel:l,
startFunnel_DEV_MODE:n,
setFunnelTimeout:o,
setFunnelTrackFocus:s,
addFunnelTag:r,
appendAction:t,
appendActionIfNew:u,
appendActionWithTag:v,
appendActionWithTagIfNew:w,
appendActionWithPayload:x,
appendActionWithPayloadIfNew:y,
appendActionWithTagAndPayload:z,
appendActionWithTagAndPayloadIfNew:aa,
cancelFunnel:p,
endFunnel:q,
getFunnelInstance:m};}),null);
