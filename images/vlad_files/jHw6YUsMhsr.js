if (self.CavalryLogger) { CavalryLogger.start_js(["6IEEG"]); }

/** js/dock/nub/PerformanceNub.js */






__d('PerformanceNub',['cx','csx','Arbiter','CSS','DOM','DOMQuery','Event','EventHandlerUtils','InteractionFinder','NavigationMetrics','NubController','Parent','SimpleXUIDialog','Style','TooltipData','URI','isEmpty','sprintf'],(function a(b,c,d,e,f,g,h,i){var j,k;
























function l(n,o){
var p=
[c('sprintf')('Pagelet (for load %s)',n[0].lid),
'PHP Wall',
'Server Done',
'HTML Bytes',
'Approx Gzip'];


if(o){
var q=
['Phase',
'Arrive',
'CSS Done',
'Display',
'JS Done'];

p=p.concat(q);}


p=p.map(function(s){
return c('DOM').create('th',
{style:{'white-space':'nowrap'}},
s);});


var r=n.map(function(s){
var t=
[s.wall_time,
s.end,
s.html_bytes,
s.html_gzip];


if(o){
var u=
[s.phase,
s.arrive,
s.css_load,
s.display,
s.jsdone];

t=t.concat(u);}


t=t.map(function(w){
var x=Math.round(w);
if(isNaN(x))
x='N/A';

return c('DOM').create('td',{style:{textAlign:'right'}},x);});


var v=c('DOM').create
('span',
{title:s.php_class},
s.pagelet);
return c('DOM').create
('tr',
{},
[c('DOM').create('td',{},v)].concat(t));});


return c('DOM').create
('table',
{},
[c('DOM').create('tr',{},p)].concat(r));}
j=babelHelpers.inherits

(m,c('NubController'));k=j&&j.prototype;












function m(n,o,p,q){'use strict';
k.constructor.call(this);
k.init.call(this,n);

this.button=c('DOM').find(n,'a.fbNubButton');
this.body=c('DOM').find(n,'div.fbNubFlyoutBodyContent');
this.results=p;
this._isProfiling=false;


for(var r in o){
var s=c('DOM').scry(o[r],'a');
for(var t=0;t<s.length;t++){

var u=s[t].getAttribute('data-param')||s[t].text,
v=q.indexOf(r)>=0;

if(u==='select'){
c('Event').listen
(s[t],
'click',
this.introspectEventHandlers.bind(this));}else

if(u==='interaction'){
c('Event').listen
(s[t],
'click',
this.interactionFinderHandlers.bind(this));}else 


c('Event').listen
(s[t],
'click',
this.reloadWithParams.bind(this,r,u,v));}}





this.updateResults(new (c('URI'))(document.URL));


var w=b.CavalryLogger;
this._isDetailed=
!!w&&w.getInstance().is_detailed_profiler;

this._stats=null;
this.subscribe('show',this.renderStats.bind(this));
c('Arbiter').subscribe('Performance/stats',this.update.bind(this));
c('NavigationMetrics').addListener
(c('NavigationMetrics').Events.NAVIGATION_DONE,
function(x,y){
if(y.pageType!=='normal'&&y.pageType!=='quickling')
return;

var z=y.start,
aa=Math.floor(y.tti-z)/1000,
ba=Math.floor(y.extras.all_pagelets_displayed-z)/1000;
c('DOM').setContent
(this.button,
c('sprintf')('TTI:%ss DD:%ss',aa.toFixed(1),ba.toFixed(1)));

this.buttonContentChanged();}.
bind(this));

c('Arbiter').subscribe
('killabyte_banzai_flush',
function(x,y){return this.killabyteDone(y);}.bind(this));

c('Arbiter').subscribe
('cavalry_log_sent',
function(x,y){return this.sriDone(y);}.bind(this));


if(new (c('URI'))(document.URL).getQueryData().did_interaction_finder_reload)
c('SimpleXUIDialog').show('CSS Minification needed to be turned off first. Now that it is off\n        find the element that starts the interaction you\'re interested in, click\n        select next to \'Interaction Finder\' in the Performance Nub, and click\n        on the element.',




'CSS Minification turned off');}


m.prototype.

renderStats=function(){'use strict';
if(c('isEmpty')(this._stats)||this._isProfiling)
return;

var n=[l(this._stats[0],this._isDetailed)];

for(var o=1;o<this._stats.length;o++){
if(o===1){
n.push
(c('DOM').create('hr'),
c('DOM').create('div',
{style:{textAlign:'center',fontWeight:'bold'}},
'Prior Requests'),
c('DOM').create('hr'));}else 

n.push(c('DOM').create('hr'));

n.push(l(this._stats[o],this._isDetailed));}

if(!!b.CavalryLogger.perfNubMarkup)
n.push(b.CavalryLogger.perfNubMarkup);


c('DOM').setContent
(c('DOM').scry(this.body,"._510d")[0],
n);
this.flyoutContentChanged();};
m.prototype.

update=function(n,o){'use strict';
this._stats=o.stats;
if(this._stats[0].length!==0&&
this._stats[0][0].pagelet!='first_response')
c('TooltipData').set
(this.button,
c('sprintf')('Most recent pagelet end time: %s\u00A0ms',o.lastEndTime));


this.buttonContentChanged();};
m.prototype.





reloadWithParams=function(n,o){var p=arguments.length<=2||arguments[2]===undefined?false:arguments[2];'use strict';
var q={};
q[n]=o;
var r=new (c('URI'))(document.URL).
addQueryData(q);
this.updateResults(r);
r.go(p);};
m.prototype.

updateResults=function(n){'use strict';

var o={};
for(var p in this.results)
if(typeof n.getQueryData()[p]!='undefined')
o[p]=this.results[p];




if(Object.keys(o).length===0){
this._isProfiling=false;
return;}


this._isProfiling=true;


c('TooltipData').set
(this.button,
'Profile results: '+Object.keys(o).join(', '));

c('Style').set(this.button,'background','green');
this.buttonContentChanged();


var q=c('DOM').create('div',{},'Profiling results:'),
r='padding-left: 20px; list-style-type: circle',
s=c('DOM').create('ul',{style:r});
for(p in o){
var t=c('DOM').create('li',{},o[p]);
s.appendChild(t);}

q.appendChild(s);
this.killabyteMessage=o.killabyte||null;
this.sriMessage=o.sri;


c('DOM').setContent(this.body,q);
this.flyoutContentChanged();};
m.prototype.

killabyteDone=function(n){'use strict';
if(this.killabyteMessage){
var o=c('URI').getRequestURI().
setSubdomain('our').
setPath('/intern/haste/killabyte/sample/').
setQueryData({id:n}),
p=c('DOM').create
('a',

{href:o.toString(),
text:'Killabyte (ready)',
target:'_blank'},

null);


c('DOM').replace(this.killabyteMessage,p);
this.flyoutContentChanged();}};

m.prototype.

sriDone=function(n){'use strict';
if(this.sriMessage){
var o=c('URI').getRequestURI().
setDomain('our.intern.facebook.com').
setPath('/intern/sr/inspector/'+n.lid).
setQueryData({}),
p=c('DOM').create('a',
{href:o.toString(),
text:'SR Inspector',
target:'_blank'},
null);

c('DOM').replace(this.sriMessage,p);
this.flyoutContentChanged();}};

m.prototype.

introspectEventHandlers=function(event){'use strict';
c('Event').kill(event);
this.hide();

this.handlers=c('Event').listen
(document.body,

{mouseover:this.cinderellaDomNode.bind(this),
mouseout:this.pumpkinDomNode.bind(this),
click:this.introspectThatElement.bind(this),
mousedown:c('Event').kill,
mouseup:c('Event').kill},

c('Event').Priority.URGENT);};

m.prototype.

interactionFinderHandlers=function(event){'use strict';
c('Event').kill(event);
this.hide();
c('InteractionFinder').start(this.cinderellaDomNode,this.pumpkinDomNode);};
m.prototype.

cinderellaDomNode=function(event){'use strict';

c('CSS').addClass(event.target,"_1yj4");};
m.prototype.

pumpkinDomNode=function(event){'use strict';

c('CSS').removeClass(event.target,"_1yj4");};
m.prototype.

introspectThatElement=function(event){'use strict';
c('Event').kill(event);
c('CSS').removeClass(event.target,"_1yj4");
for(var n in this.handlers)
this.handlers[n].remove();

this.handlers=null;
if(this.collapseHandler)
this.collapseHandler.remove();


var o=c('EventHandlerUtils').introspect(event.target),
p=c('DOMQuery').find(this.body,'#event_handler_section');
c('CSS').removeClass(p,'hidden_elem');

var q=c('DOMQuery').find(p,
'#event_handler_table'),

r=this.makeHandlerTable(o);
c('DOM').setContent(q,r);


this.collapseHandler=c('Event').listen(q,
'click',
this.toggleRow.bind(this));


this.show();};
m.prototype.

toggleRow=function(event){'use strict';
var n=c('Parent').byTag(event.target,'tr'),
o=c('DOMQuery').scry(n,'td');

if(o[0]===event.target&&o[1]&&o[3]){
c('CSS').toggleClass(o[1].childNodes[0],'hidden_elem');
c('CSS').toggleClass(o[3].childNodes[0],'hidden_elem');}};

m.prototype.

makeHandlerTable=function(n){'use strict';
var o=['Tagname','Classes','ID','Handlers'].map(function(q){
return c('DOM').create('th',{style:{'white-space':'nowrap'}},q);}),


p=n.map(function(q,r){
var s=q.elementRef,
t=s.nodeName,
u=s.className?s.className.trim():'';
if(u.indexOf(' ')>-1){
var v=u.split(' ');
u=[];
v.forEach(function(ca){
u.push(ca);
u.push(c('DOM').create('br'));});}


var w=s.id||'',
x=[];
Object.keys(q.handlers).forEach(function(ca){
x.push(ca);
x.push(c('DOM').create('br'));});

var y=c('DOM').create('div',{},u),
z=c('DOM').create('div',{},x),
aa=[t,y,w,z].map(function(ca){
return c('DOM').create('td',
{style:
{textAlign:'right',
padding:'5px 10px'}},
ca);}),

ba=r%2?
{style:
{'background-color':'#e9ebee'}}:
{};
return c('DOM').create('tr',ba,aa);});

p.unshift(c('DOM').create('tr',{},o));
return c('DOM').create('table',{},p);};



f.exports=m;}),null);
