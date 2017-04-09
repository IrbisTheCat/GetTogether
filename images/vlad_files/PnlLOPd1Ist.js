if (self.CavalryLogger) { CavalryLogger.start_js(["60TSu"]); }

/** js/components/ReactLegacyMentionsInput/LegacyMentionsInput.react.js */





__d('LegacyMentionsInput.react',['cx','FocusListener','Bootloader','TypeaheadMetricsConfig','Event','Keys','React','ReactDOM'],(function a(b,c,d,e,f,g,h){var i,j;

c('FocusListener');










var k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.

























hasEnteredText=function(){
return !!(this.$ReactLegacyMentionsInput_mentionsInput&&this.$ReactLegacyMentionsInput_mentionsInput.getValue().trim());}.
bind(this),this.





submitComment=function(event){
var r;

if(event){
r=event.target.value&&event.target.value.trim();}else{

var s=c('ReactDOM').findDOMNode(this.refs.textarea);
if(s.value&&s.value!==s.placeholder)
r=s.value;}



r=r||'';

var t=
{visibleValue:r,
encodedValue:r};


if(this.$ReactLegacyMentionsInput_mentionsInput)
t.encodedValue=this.$ReactLegacyMentionsInput_mentionsInput.getRawValue().trim();


var u=this.props.onEnterSubmit(t,event);
if(u&&this.$ReactLegacyMentionsInput_mentionsInput){
this.$ReactLegacyMentionsInput_mentionsInput.reset();
event&&event.preventDefault();}}.

bind(this),this.



$ReactLegacyMentionsInput_handleKeydown=function(event){
var r=event.nativeEvent,

s=c('Event').getKeyCode(r)==c('Keys').RETURN&&
!c('Event').$E(r).getModifiers().any,
t=this.$ReactLegacyMentionsInput_mentionsInput&&
this.$ReactLegacyMentionsInput_mentionsInput.getTypeahead().getView().getSelection();

if(this.props.onEnterSubmit&&s&&!t)
this.submitComment(event);}.

bind(this),this.

$ReactLegacyMentionsInput_handleFocus=function(){
this.props.onFocus&&this.props.onFocus();
this.$ReactLegacyMentionsInput_initializeTextarea(c('ReactDOM').findDOMNode(this.refs.root));}.
bind(this),this.

$ReactLegacyMentionsInput_handleBlur=function(){
this.props.onBlur&&this.props.onBlur();}.
bind(this),this.

$ReactLegacyMentionsInput_initializeTextarea=function(r){
if(this.props.disableInitTextarea||
this.$ReactLegacyMentionsInput_mentionsInput||
this.$ReactLegacyMentionsInput_bootloadingMentions)
return;
this.$ReactLegacyMentionsInput_bootloadingMentions=true;

c('Bootloader').loadModules(["CompactTypeaheadRenderer","ContextualTypeaheadView","InputSelection","MentionsInput","TextAreaControl","Typeahead","TypeaheadAreaCore","TypeaheadBestName","TypeaheadHoistFriends","TypeaheadMetrics","TypeaheadMetricsX","TypingDetector","UFIComments"],














function(s,
t,
u,
v,
w,
x,
y,
z,
aa,
ba,
ca,
da,
ea){

var fa=c('ReactDOM').findDOMNode(this.refs.textarea);
new w(fa);

if(this.props.onTypingStateChange){
var ga=new da(fa);
ga.init();
ga.subscribe('change',this.props.onTypingStateChange);}


var ha=
{autoSelect:true,
renderer:s,
causalElement:fa,
autoflip:this.props.autoflip};


if(this.props.viewOptionsTypeObjects)
ha.typeObjects=this.props.viewOptionsTypeObjects;


if(this.props.viewOptionsTypeObjectsOrder)
ha.typeObjectsOrder=this.props.viewOptionsTypeObjectsOrder;


var ia=new x
(this.props.datasource,
{ctor:t,options:ha},
{ctor:y},
c('ReactDOM').findDOMNode(this.refs.typeahead)),

ja=[z,aa];



if(c('TypeaheadMetricsConfig').gkResults){
var ka=new ca
({extraData:{event_name:'mention_metric_x'}});

ka.init(ia);}

var la=new ba
({extraData:{event_name:'mentions',from_location:'comments'}});

x.initNow(ia,ja,la);

this.$ReactLegacyMentionsInput_mentionsInput=new v
(r,
ia,
fa,
{hashtags:this.props.hashtags});

this.$ReactLegacyMentionsInput_mentionsInput.init({},this.props.initialData);
if(this.props.initialData)
u.set(fa,fa.value.length);


if(this.props.onPaste)
c('Event').listen(fa,'paste',this.props.onPaste);


if(this.props.onContentChange)
this.$ReactLegacyMentionsInput_inputOnChangeSubscriber=this.$ReactLegacyMentionsInput_mentionsInput.subscribe
('valueUpdate',
function(ma,na){
var oa=na.value;
this.props.onContentChange(oa);}.
bind(this));



this.$ReactLegacyMentionsInput_bootloadingMentions=false;}.
bind(this),'LegacyMentionsInput.react');}.
bind(this),this.

focus=function(){


try{c('ReactDOM').findDOMNode(this.refs.textarea).focus();}catch(
r){
}}.
bind(this),n;}l.prototype.componentDidMount=function(){'use strict';this.props.initialData&&this.$ReactLegacyMentionsInput_initializeTextarea(c('ReactDOM').findDOMNode(this));};l.prototype.getText=function(){'use strict';return this.$ReactLegacyMentionsInput_mentionsInput&&this.$ReactLegacyMentionsInput_mentionsInput.getRawValue().trim();};l.prototype.

componentWillUnmount=function(){'use strict';
if(this.$ReactLegacyMentionsInput_mentionsInput&&this.$ReactLegacyMentionsInput_inputOnChangeSubscriber)
this.$ReactLegacyMentionsInput_mentionsInput.unsubscribe(this.$ReactLegacyMentionsInput_inputOnChangeSubscriber);};

l.prototype.

render=function(){'use strict';
var m="textInput"+(' '+"mentionsTextarea")+(' '+"uiTextareaAutogrow")+(' '+"uiTextareaNoResize")+(' '+"UFIAddCommentInput")+(' '+"_2xww");









return (c('React').createElement('div',
{ref:'root',
className:"uiMentionsInput textBoxContainer ReactLegacyMentionsInput _2xwx",

'data-interaction-root-id':"_28pm"},
c('React').createElement('div',{className:'highlighter'},
c('React').createElement('div',null,c('React').createElement('span',{className:'highlighterContent hidden_elem'}))),

c('React').createElement('div',{ref:'typeahead',className:'uiTypeahead mentionsTypeahead'},
c('React').createElement('div',{className:'wrap'},
c('React').createElement('input',{type:'hidden',autoComplete:'off',className:'hiddenInput'}),
c('React').createElement('div',{className:'innerWrap'},
c('React').createElement('textarea',
{ref:'textarea',
name:'add_comment_text',
className:m,
title:this.props.placeholder,
placeholder:this.props.placeholder,
onFocus:this.$ReactLegacyMentionsInput_handleFocus,
onBlur:this.$ReactLegacyMentionsInput_handleBlur,
onKeyDown:this.$ReactLegacyMentionsInput_handleKeydown})))),




c('React').createElement('input',
{type:'hidden',
autoComplete:'off',
className:'mentionsHidden',
defaultValue:''})));};



l.propTypes={initialData:k.object,disableInitTextarea:k.bool,placeholder:k.string,datasource:k.object,ref:k.string,viewOptionsTypeObjects:k.object,viewOptionsTypeObjectsOrder:k.array,hashtags:k.bool,autoflip:k.bool,onEnterSubmit:k.func,onFocus:k.func,onBlur:k.func,onContentChange:k.func,onTypingStateChange:k.func,onPaste:k.func};


f.exports=l;}),null);

/** js/pages/vertex/VertexScrollColumn.react.js */




__d('VertexScrollColumn.react',['DOMContainer.react','React','ScrollColumn.react'],(function a(b,c,d,e,f,g){var h,i,





j=c('React').PropTypes,

k=5,
l=10;h=babelHelpers.inherits

(m,c('React').Component);i=h&&h.prototype;m.prototype.




render=function(){'use strict';
var n=
c('React').createElement(c('ScrollColumn.react'),
{topOffset:l,
ref:'scrollColumn',
zIndex:k},
c('React').createElement(c('DOMContainer.react'),null,
this.props.content));


return n;};
function m(){'use strict';h.apply(this,arguments);}m.propTypes={content:j.object.isRequired};


f.exports=m;}),null);
