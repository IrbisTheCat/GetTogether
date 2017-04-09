if (self.CavalryLogger) { CavalryLogger.start_js(["bgoEY"]); }

/** js/dock/nub/EmployeePrefs.js */





__d('EmployeePrefs',['Dock','DOM','Event','Keys','MenuDeprecated','NubController','Parent','URI','goURI'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits












(j,c('NubController'));i=h&&h.prototype;j.prototype.
init=function(k,l){'use strict';
i.init.call(this,k);
this.menu=l;


c('Dock').registerNubController(k,this);


c('Event').listen(k,'keydown',function(event){
var m=c('Event').getKeyCode(event)||event.which;
switch(m){



case c('Keys').UP:
case c('Keys').DOWN:
var n=c('Parent').byClass(event.getTarget(),'fbNubButton');
if(n){
this.show();


var o=c('MenuDeprecated').getItems(l);
c('MenuDeprecated').focusItem(o[m===c('Keys').UP?o.length-1:0]);
return false;}

break;

case c('Keys').ESC:
this.hide();


setTimeout(function(){c('DOM').find(k,'a.fbNubButton').focus();},0);
break;}}.

bind(this));

this.subscribe('show',this.onShow.bind(this));
this.subscribe('hide',this.onHide.bind(this));

this.buttonContentChanged();};
j.prototype.

onShow=function(){'use strict';
c('MenuDeprecated').register(this.menu);};
j.prototype.

onHide=function(){'use strict';
c('MenuDeprecated').unregister(this.menu);};
j.prototype.


getSamePageURLOnNewTier=function(k,l){'use strict';

var m='www'+(l?'.'+l:'')+'.facebook.com';
return new (c('URI'))(window.location.href).setProtocol(k.getProtocol()).
setDomain(m).
setSubdomain(k.getSubdomain()).
setPath(k.getPath()).
setQueryData(k.getQueryData()).
setFragment(k.getFragment());};
j.prototype.



goToTier=function(k){'use strict';
c('goURI')(this.getSamePageURLOnNewTier(c('URI').getRequestURI(),k));
return false;};
function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);

/** js/dock/nub/EmployeePrefsNub.js */





__d('EmployeePrefsNub',['Cookie','EmployeePrefs','Event'],(function a(b,c,d,e,f,g){

'use strict';




















function h(j){var k=j.nubRoot,l=j.menu,m=j.viewTheSiteIn,
n=new (c('EmployeePrefs'))();
n.init(k,l);

Array.from(m.el.querySelectorAll('[data-tierid]')).
forEach(function(o){
var p=o.dataset.tierid,
q=m.data.get(p);
if(q)
c('Event').listen(o,'click',function(r){
if(!q.is_smurf&&p==='latest')


c('Cookie').clear('smurf');

return n.goToTier(q.target_tier);});});}





var i={init:h};

f.exports=i;}),null);
