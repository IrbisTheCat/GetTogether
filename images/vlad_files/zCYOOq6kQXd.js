if (self.CavalryLogger) { CavalryLogger.start_js(["R0mVL"]); }

/** js/photos/viewer/modules/PhotosButtonTooltips.js */





__d('PhotosButtonTooltips',['Arbiter','DOMDimensions','Style','Tooltip'],(function a(b,c,d,e,f,g){






var h=[],
i=[],
j;

function k(o,p){
if(!o||!o.length||!p||!p.length||
o.length!=p.length)

throw new Error
('Incorrect arguments passed in from PHP for photo button cropping');


var q=0,
r=[],
s=false;



for(q=0;q<o.length;q++){
r.push(c('DOMDimensions').getElementDimensions(o[q]).width);
if(r[q])


s=true;}



if(s){

o.forEach(function(w){
c('Style').set(w,'max-width','100%');});



for(q=0;q<o.length;q++){
var t=o[q],
u=r[q];
if(u){
var v=c('DOMDimensions').getElementDimensions(t).width;
if(v>u){
c('Tooltip').set(t,p[q]);
i.push(t);}}}





o.forEach(function(w){
c('Style').set(w,'max-width','');});}



return s;}


function l(){


h.forEach(function(o){
o.unsubscribe();});

h=[];

i.forEach(c('Tooltip').remove);
i=[];}


function m(o,p,q){
this.arbiterToken=c('Arbiter').subscribe
(o,
function(){
if(k(p,q))



this.arbiterToken&&this.arbiterToken.unsubscribe();}.

bind(this));}



var n=

{init:function o(){
if(!j)
j=c('Arbiter').subscribe('PhotoSnowlift.CLOSE',l);},




registerButtonsOnPaging:function o(p,q){
h.push(new m
('PhotoSnowlift.DATA_CHANGE',
p,
q).
arbiterToken);},



registerButtonsOnTaggingOn:function o(p,q){
h.push(new m
('PhotoSnowlift.START_TAGGING',
p,
q).
arbiterToken);},



registerButtonsOnTaggingOff:function o(p,q){
h.push(new m
('PhotoSnowlift.STOP_TAGGING',
p,
q).
arbiterToken);}};




f.exports=n;}),null);

/** js/settings/removable_options-legacy.js */


__d('legacy:SettingsRemovableOptions',['SettingsRemovableOptions'],(function a(b,c,d,e,f,g){

b.SettingsRemovableOptions=c('SettingsRemovableOptions');}),3);
