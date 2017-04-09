if (self.CavalryLogger) { CavalryLogger.start_js(["3q0pN"]); }

/** js/components/UFI/ActionLinks/UFILiveTypingIndicator.react.js */






__d('UFILiveTypingIndicator.react',['cx','fbt','Animation','MercuryTypingAnimation.react','OnVisible.react','React','ReactDOM','UFIImageBlock.react'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,











l=c('React').Component;j=babelHelpers.inherits
















(m,l);k=j&&j.prototype;


function m(n){
k.constructor.call(this,n);

this.state=
{friendTyping:n.friendTyping,
isVisible:false};}

m.prototype.

componentDidMount=function(){
this.$UFILiveTypingIndicator_animate(this.state,this.props);};
m.prototype.

componentWillReceiveProps=function(n){
if(n.hasTyping)
this.setState
({friendTyping:n.friendTyping});};


m.prototype.

componentDidUpdate=function(n,o){
this.$UFILiveTypingIndicator_animate(this.state,this.props);};
m.prototype.

$UFILiveTypingIndicator_animate=function(n,o){
if(!n.isVisible)
return;


var p=c('ReactDOM').findDOMNode(this.refs.content);
if(!p)
return;



if(o.hasTyping){
new (c('Animation'))(p).
show().
to('marginTop',0).
ease(c('Animation').ease.end).
checkpoint(.5).
to('opacity',1).
go();}else 

new (c('Animation'))(p).
to('opacity',0).
ease(c('Animation').ease.end).
checkpoint(.25).
to('marginTop',-32).
hide().
go();};

m.prototype.

render=function(){
var n=this.props,o=this.state,

p=o.friendTyping?i._(["A friend is typing a comment...","d2d9e09e4fa1c705f04fb09ce59414d5"]):i._(["Someone is typing a comment...","647248f38c77f7b3dfeb1dc595812f9b"]);










return (c('React').createElement(c('OnVisible.react'),
{onVisible:function(){return this.setState({isVisible:true});}.bind(this),
onHidden:function(){return this.setState({isVisible:false});}.bind(this)},
c('React').createElement('div',{className:"_j-l"},
c('React').createElement('div',{ref:'content',className:"_353j"+(' '+"UFIRow")+



(n.isFirstCommentComponent?' '+"_48pi":'')+
(n.isLastCommentComponent?' '+"UFILastCommentComponent":'')},

c('React').createElement(c('UFIImageBlock.react'),{spacing:'medium'},
c('React').createElement(c('MercuryTypingAnimation.react'),
{className:"_79o"}),

c('React').createElement('div',{className:"_79p"},
p))))));};









f.exports=m;}),null);

/** js/modules/AsyncDOM.js */




__d('AsyncDOM',['CSS','DOM','ErrorUtils'],(function a(b,c,d,e,f,g){





var h=















{invoke:function i(j,k){
for(var l=0;l<j.length;++l){var m=
j[l],n=m[0],o=m[1],p=m[2],q=m[3],

r=p&&k||null;
if(o)
r=c('DOM').scry(r||document.documentElement,o)[0];











switch(n){
case 'eval':



new Function(q).apply(r);

break;
case 'hide':
c('CSS').hide(r);
break;
case 'show':
c('CSS').show(r);
break;
case 'setContent':
c('DOM').setContent(r,q);
break;
case 'appendContent':
c('DOM').appendContent(r,q);
break;
case 'prependContent':
c('DOM').prependContent(r,q);
break;
case 'insertAfter':
c('DOM').insertAfter(r,q);
break;
case 'insertBefore':
c('DOM').insertBefore(r,q);
break;
case 'remove':
c('DOM').remove(r);
break;
case 'replace':
c('DOM').replace(r,q);
break;





default:}}}};





f.exports=h;}),null);
