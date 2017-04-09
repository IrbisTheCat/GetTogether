if (self.CavalryLogger) { CavalryLogger.start_js(["ZrL6x"]); }

/** js/bugs/BugBar.js */








__d('BugBar',['fbt','Event','AsyncRequest','AsyncDialog','CSS','DOM','DataCollector','ErrorUtils','Input','BanzaiScribe','BanzaiODS','ServiceWorkerErrorUtils','SimpleXUIDialog','ge'],(function a(b,c,d,e,f,g,h){


















var i={};

Object.assign(i,

{_nub:null,
_nubClasses:['bugNubInfo','bugNubWarning','bugNubFatal'],

_taskTags:[],
_taskSubscribers:[],


_savedInput:null,


_form:null,


_duplicate_task_title:null,




addMetadata:function j(k){
c('DataCollector').addMetadata(k);},


getMetadata:function j(){
return c('DataCollector').getMetadata();},


addTaskSubscribers:function j(k){
i._taskSubscribers=i._taskSubscribers.concat(k);},


getTaskSubscribers:function j(){
return i._taskSubscribers;},







addTaskTags:function j(k){
i._taskTags=i._taskTags.concat(k);},


getTaskTags:function j(){
return i._taskTags;},



reset:function j(){
c('DataCollector').reset();
i._taskTags=[];},


cancel:function j(){


var k=i._dialog;
delete i._dialog;

i.reset();

if(k)
k.hide();},






initForm:function j(k){
var l=k.form;
this._form=k.form;

this.initFormField(l.logs);
this.initFormField(l.metadata);

setTimeout(i.setProductAreaFocus,0);},


isPotentialVideoDecodingReport:function j(){
var k='269405676539001',
l=this._form.descr,
m=this._form.product_category_id,
n=m.options[m.selectedIndex];

if(n.value===k)
return l.value.search
(/decoding|artifact|green|pixel|flicker|flashing|flashed/i)>
-1;


return false;},




initFormField:function j(k){
var l;
if(k.name=="logs"){

try{l=c('DataCollector')._collectLogs();
k.value=JSON.stringify(l);}catch(
m){
c('BanzaiODS').bumpEntityKey('flytrap','client_log_failed');
c('BanzaiScribe').log('flytrap',m.message);}}else

if(k.name=="metadata")

try{l=c('DataCollector')._collectMetadata();
k.value=JSON.stringify(l);}catch(
m){
c('BanzaiODS').bumpEntityKey('flytrap','metadata_log_failed');
c('BanzaiScribe').log('flytrap',m.message);}},




initNub:function j(k){
this._nub=k;},


initScreenshotUploader:function j(k){
var l=c('DOM').scry(i._dialog.getRoot(),'button');
k.setSubmitButtons(l);},


setProductAreaFocus:function j(){
var k=c('DOM').scry(document.body,'select#product_category');
k&&k.length&&k[0].focus();},



taskCreated:function j(k,l){
this.cancel();
c('SimpleXUIDialog').show(l,k);},


subscribeSubmit:function j(k,l){
i._dialog=k;
k.subscribe(['submit'],function(){
if(this.isPotentialVideoDecodingReport()){
var m=c('DOM').scry
(this._form,
'#bug_report_decoding_artifacts')[
0];
if(m&&!c('CSS').shown(m)){
c('CSS').show(m);
return false;}}


if(this._form.duplicate_task_id){
var n=this._form.duplicate_task_id.value;
if(n){
var o="Another report of bug: "+
this._duplicate_task_title;
if(!c('Input').isEmpty(l))
o=o+"\n\nAdditional description: "+
l.value;

c('Input').setValue(l,o);}}


if(c('Input').getValue(l).length<4){

c('CSS').show(c('ge')('bug_report_warning'));
c('DOM').setContent
(c('ge')('bug_report_warning'),h._(["Please provide more details about the problem you are experiencing.","ff925b87f6879c612e6e7db58e4d11e8"]));







return false;}

if(this._form.product_category_id.value=='100977986739334'){


c('CSS').show(c('ge')('bug_report_warning'));
c('DOM').setContent
(c('ge')('bug_report_warning'),h._(["Please select a product.","390d7f4988163b19a4e467f26b9401bf"]));







return false;}}.

bind(this));},





fillSavedDescription:function j(k){
k=c('ge')(k);
this._savedInput=this._savedInput||
"Sorry, we lost your original description :(";
c('DOM').setContent(k,this._savedInput);},






hide:function j(){
if(i._dialog){
c('CSS').hide(i._dialog.getRoot());
return true;}

return false;},







unhide:function j(){
if(i._dialog){
c('CSS').show(i._dialog.getRoot());


var k=JSON.parse(this._form.debuginfo.value);
k.additionalmetadata=k.additionalmetadata||{};
Object.assign(k.additionalmetadata,i.getMetadata());
this._form.debuginfo.value=JSON.stringify(k);
return true;}

return false;},







openBugDialog:function j(k){
if(i._dialog)
return false;


var l=new (c('AsyncRequest'))(k);
c('AsyncDialog').send(l,function(m){
m.subscribe('cancel',i.cancel);});},






registerMeToo:function j(k,l,m,n,o){
c('Event').listen
(k,
'click',
function(event){
c('CSS').show(c('ge')('bug_report_warning'));
c('DOM').setContent
(c('ge')('bug_report_warning'),
['When you submit this bug report, it will be merged into task ',
c('DOM').create('a',{href:o},"#"+m+": "+n),'. '+
'It is optional to include a description. Please hit submit!']);
this._form.duplicate_task_id.value=m;
this._duplicate_task_title=n;}.
bind(this));},



setNubLevel:function j(k){
if(this._nub){
this._nubClasses.forEach(function(l){
c('CSS').removeClass(this._nub,l);}.
bind(this));
c('CSS').addClass(this._nub,this._nubClasses[k]);}},







prepareJSErrors:function j(k){
var l=55,
m=5,
n={},
o=[];

for(var p=k,q=Array.isArray(p),r=0,p=q?p:p[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var s;if(q){if(r>=p.length)break;s=p[r++];}else{r=p.next();if(r.done)break;s=r.value;}var t=s,
u=
t.message&&t.message.substring(0,l)||'';
if(o.length<m&&o.indexOf(u)===-1)
o.push(u);

if(!n[u]){
n[u]=1;}else 

n[u]++;}



var v=o.
map(function(w){return w+': '+n[w];}).
join(', ');

return v;},


summarizeJSErrors:function j(k){
var l=i.prepareJSErrors(c('ErrorUtils').history);
c('Input').setValue
(k,
l);},



summarizeSWErrors:function j(k){
c('ServiceWorkerErrorUtils').getHistory().then(function(l){
var m=i.prepareJSErrors(l);
c('Input').setValue
(k,
m);}).

done();}});



f.exports=i;}),null);
