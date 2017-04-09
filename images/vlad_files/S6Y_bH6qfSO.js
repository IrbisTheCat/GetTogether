if (self.CavalryLogger) { CavalryLogger.start_js(["NZTDR"]); }

/** js/bhaji/HostnameRewriter.js */




__d('HostnameRewriter',['URI','isFacebookURI','lowerFacebookDomain'],(function a(b,c,d,e,f,g){







var h=function x(y){
return String(y).replace(/([.*+?^=!:${}()|[\]\/\\])/g,'\\$1');},


i=null,
j=null,
k=new RegExp
('^(.*(?:channel-proxy|edge-chat).*)\\.(facebook\\.com)$',
'i'),

l=new RegExp('facebook\\.com$'),
m=new RegExp('^www\\.(|.*\\.)facebook\\.com$'),

n=null,
o='facebook.com';

function p(x){
i=null;
var y;
if(x){
y='(^|\\.)';}else 

y='^';

n=y+h(o)+'$';

j=null;}


function q(){
if(!n)
return null;

if(i)
return i;

i=new RegExp(n,'i');
return i;}


function r(){
if(j)
return j;

j=new RegExp
('(^|\\.)('+h(o)+
'|facebook\\.com)$',
'i');

return j;}







function s(){
return function(x){
x=new (c('URI'))(x);
var y=k.exec(x.getDomain());
if(!y||y.length<3)
return x;

x.setDomain('edge-chat.'+y[2]);
return x;};}






function t(){
return function(x){
x=new (c('URI'))(x);
if(r().test(x.getDomain()))
x.setProtocol('https');

return x;};}






function u(){
return function(x){
x=new (c('URI'))(x);
var y=x.getDomain();
if(r().test(y))
x.setDomain(y.replace(l,o));

return x;};}






function v(){
return function(x){
x=new (c('URI'))(x);
var y=x.getDomain();
if(m.test(y))
x.setDomain(o);

return x;};}



var w=







{registerFacebookFilters:function x(y,z){
o=y;
p(z);
c('isFacebookURI').setRegex(q());
c('URI').registerFilter(s());
c('URI').registerFilter(t());
c('URI').registerFilter(u());
c('lowerFacebookDomain').setDomain(o);},



registerInternetDotOrgFilters:function x(y,z){
o=y;
c('URI').registerFilter(v());}};



f.exports=w;}),null);

/** shared/fbt_logger/FbtLoggerImpl.js */





__d('FbtLoggerImpl',['BanzaiLogger','ScriptPath'],(function a(b,c,d,e,f,g){



var h=
{logImpression:function i(j){
c('BanzaiLogger').log('FbtImpressionsLoggerConfig',

{hash:j,
sample_rate:100,
script_path:c('ScriptPath').getScriptPath()});}};





f.exports=h;}),null);
