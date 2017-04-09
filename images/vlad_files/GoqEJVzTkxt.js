if (self.CavalryLogger) { CavalryLogger.start_js(["HPhKB"]); }

/** js/components/core/XUI/Typeahead/XUITypeaheadWrapper.react.js */





__d('XUITypeaheadWrapper.react',['React','SearchableEntry','XUITypeahead.react'],(function a(b,c,d,e,f,g){var h,i,



















j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;




















function k(m){'use strict';
i.constructor.call(this,m);l.call(this);
var n=m.initialEntry||null,
o=n?n.getTitle():'';

this.state=
{queryString:o,
selectedEntry:n};}

k.prototype.
































































render=function(){'use strict';

return (c('React').createElement('span',null,
this.$XUITypeaheadWrapper_renderHiddenInput(),
c('React').createElement(c('XUITypeahead.react'),
{tallInput:this.props.tallInput,
viewStyle:this.props.viewStyle,
queryString:this.state.queryString,
selectedEntry:this.state.selectedEntry,
className:this.props.className,
placeholder:this.props.placeholder,
searchSource:this.props.searchSource,
selectOnBlur:this.props.selectOnBlur,
showEntriesOnFocus:this.props.showEntriesOnFocus,
focusedOnInit:this.props.focusedOnInit,
onSelectAttempt:this.$XUITypeaheadWrapper_onSelectAttempt,
onBlur:this.$XUITypeaheadWrapper_onBlur,
onClear:this.$XUITypeaheadWrapper_onClear,
onChange:this.$XUITypeaheadWrapper_onChange,
autoHighlight:true,
clearable:this.props.clearable,
showPhoto:this.props.showPhoto,
highlightOnSelect:this.props.highlightOnSelect,
maxEntries:this.props.maxEntries,
excludedEntries:this.props.excludedEntries,
inputID:this.props.inputID})));};



k.propTypes={name:j.string.isRequired,className:j.string,tallInput:j.bool.isRequired,placeholder:j.string,initialEntry:j.instanceOf(c('SearchableEntry')),viewStyle:j.oneOf(['textonly','rich']).isRequired,searchSource:j.object.isRequired,selectOnBlur:j.bool,clearIfNoSelection:j.bool,showEntriesOnFocus:j.bool,focusedOnInit:j.bool,clearable:j.bool,showPhoto:j.bool,highlightOnSelect:j.bool,maxEntries:j.number,excludedEntries:j.object,inputID:j.string};var l=function m(){this.$XUITypeaheadWrapper_renderHiddenInput=function(){var n=this.state.selectedEntry,o=n?n.getUniqueID():'';return c('React').createElement('input',{type:'hidden',name:this.props.name,value:o});}.bind(this);this.$XUITypeaheadWrapper_onSelectAttempt=function(n){this.setState({queryString:n.getTitle(),selectedEntry:n});}.bind(this);this.$XUITypeaheadWrapper_onChange=function(event){this.setState({queryString:event.target.value,selectedEntry:null});}.bind(this);this.$XUITypeaheadWrapper_onClear=function(event){this.setState({queryString:'',selectedEntry:null});}.bind(this);this.$XUITypeaheadWrapper_onBlur=function(){if(this.props.clearIfNoSelection)this.forceUpdate(function(){if(!this.state.selectedEntry)this.setState({queryString:''});}.bind(this));}.bind(this);};


f.exports=k;}),null);

/** js/crowdsourcing/edit_dialog/CrowdSuggestEditsAddressInput.js */




__d('CrowdSuggestEditsAddressInput',['cx','Arbiter','CSS'],(function a(b,c,d,e,f,g,h){







function i
(j,
k,
l,
m,
n,
o,
p,
q,
r,
s,
t,
u,
v,
w,
x){
'use strict';
this.$CrowdSuggestEditsAddressInput_rowID=j;
this.$CrowdSuggestEditsAddressInput_origSelector=k.getValue();
this.$CrowdSuggestEditsAddressInput_selector=k;

this.$CrowdSuggestEditsAddressInput_address_input=l;
this.$CrowdSuggestEditsAddressInput_address_hidden=m;
this.$CrowdSuggestEditsAddressInput_address_null=n;
this.$CrowdSuggestEditsAddressInput_address_form=o;
this.$CrowdSuggestEditsAddressInput_located_in_input=p;
this.$CrowdSuggestEditsAddressInput_located_in_form=r;
this.$CrowdSuggestEditsAddressInput_city_input=s;
this.$CrowdSuggestEditsAddressInput_city_hidden=t;
this.$CrowdSuggestEditsAddressInput_city_form=u;
this.$CrowdSuggestEditsAddressInput_zip_input=v;
this.$CrowdSuggestEditsAddressInput_zip_hidden=w;
this.$CrowdSuggestEditsAddressInput_zip_form=x;

k.subscribe
('change',
this.updateInput.bind(this));


c('Arbiter').subscribe
('CrowdSuggestEdits/undoClick',
this.undoClick.bind(this));


c('Arbiter').subscribe
('CrowdSuggestEdits/editClick',
this.editClick.bind(this));


this.updateInput();}
i.prototype.

updateInput=function(){'use strict';

c('CSS').conditionClass
(this.$CrowdSuggestEditsAddressInput_address_form,
"_5o-_",
this.$CrowdSuggestEditsAddressInput_selector.getValue()!='has_address');



c('CSS').conditionClass
(this.$CrowdSuggestEditsAddressInput_city_form,
"_5o-_",
this.$CrowdSuggestEditsAddressInput_selector.getValue()=='located_inside_another_place');

c('CSS').conditionClass
(this.$CrowdSuggestEditsAddressInput_zip_form,
"_5o-_",
this.$CrowdSuggestEditsAddressInput_selector.getValue()=='located_inside_another_place');



c('CSS').conditionClass
(this.$CrowdSuggestEditsAddressInput_located_in_form,
"_5o-_",
this.$CrowdSuggestEditsAddressInput_selector.getValue()!='located_inside_another_place');



this.conditionalDisable
(this.$CrowdSuggestEditsAddressInput_address_input,
this.$CrowdSuggestEditsAddressInput_selector.getValue()!='has_address');

this.conditionalDisable
(this.$CrowdSuggestEditsAddressInput_address_null,
this.$CrowdSuggestEditsAddressInput_selector.getValue()!='has_no_address');



this.conditionalDisableTypeahead
(this.$CrowdSuggestEditsAddressInput_city_input,
this.$CrowdSuggestEditsAddressInput_selector.getValue()=='located_inside_another_place');

this.conditionalDisable
(this.$CrowdSuggestEditsAddressInput_city_hidden,
this.$CrowdSuggestEditsAddressInput_selector.getValue()=='located_inside_another_place');

this.conditionalDisable
(this.$CrowdSuggestEditsAddressInput_zip_input,
this.$CrowdSuggestEditsAddressInput_selector.getValue()=='located_inside_another_place');

this.conditionalDisable
(this.$CrowdSuggestEditsAddressInput_zip_hidden,
this.$CrowdSuggestEditsAddressInput_selector.getValue()=='located_inside_another_place');



this.conditionalDisableTypeahead
(this.$CrowdSuggestEditsAddressInput_located_in_input,
this.$CrowdSuggestEditsAddressInput_selector.getValue()!='located_inside_another_place');};

i.prototype.

undoClick=function(event,j){'use strict';
if(j.id!==this.$CrowdSuggestEditsAddressInput_rowID)
return;



this.$CrowdSuggestEditsAddressInput_selector.setValue(this.$CrowdSuggestEditsAddressInput_origSelector);


if(this.$CrowdSuggestEditsAddressInput_address_hidden.value!=this.$CrowdSuggestEditsAddressInput_address_null.value){
this.$CrowdSuggestEditsAddressInput_address_input.value=this.$CrowdSuggestEditsAddressInput_address_hidden.value;}else 

this.$CrowdSuggestEditsAddressInput_address_input.value='';



this.$CrowdSuggestEditsAddressInput_city_input.reset();


this.$CrowdSuggestEditsAddressInput_zip_input.value=this.$CrowdSuggestEditsAddressInput_zip_hidden.value;


this.$CrowdSuggestEditsAddressInput_located_in_input.reset();

this.updateInput();};
i.prototype.

editClick=function(event,j){'use strict';
if(j.id!==this.$CrowdSuggestEditsAddressInput_rowID)
return;


this.updateInput();};
i.prototype.

conditionalDisableTypeahead=function(j,k){'use strict';
if(k){
j.disable();}else 

j.enable();};

i.prototype.

conditionalDisable=function(j,k){'use strict';
if(k){
this.disable(j);}else 

this.enable(j);};

i.prototype.

disable=function(j){'use strict';
j.setAttribute('disabled','disabled');};
i.prototype.

enable=function(j){'use strict';
j.removeAttribute('disabled');};



f.exports=i;}),null);

/** js/crowdsourcing/edit_dialog/CrowdSuggestEditsTypeahead.js */




__d('CrowdSuggestEditsTypeahead',['React','ReactDOM','XUITypeaheadWrapper.react'],(function a(b,c,d,e,f,g){











function h(i,j){'use strict';
this.$CrowdSuggestEditsTypeahead_root=i;
this.$CrowdSuggestEditsTypeahead_props=j;
this.$CrowdSuggestEditsTypeahead_originalName=j.name;
this.$CrowdSuggestEditsTypeahead_key=1;
this.$CrowdSuggestEditsTypeahead_render();}
h.prototype.


disable=function(){'use strict';
this.$CrowdSuggestEditsTypeahead_props.name=this.$CrowdSuggestEditsTypeahead_originalName+'Disabled';
this.$CrowdSuggestEditsTypeahead_render();};
h.prototype.

enable=function(){'use strict';
this.$CrowdSuggestEditsTypeahead_props.name=this.$CrowdSuggestEditsTypeahead_originalName;
this.$CrowdSuggestEditsTypeahead_render();};
h.prototype.

reset=function(){'use strict';
this.$CrowdSuggestEditsTypeahead_key++;
this.$CrowdSuggestEditsTypeahead_render();};
h.prototype.




$CrowdSuggestEditsTypeahead_render=function(){'use strict';
this.$CrowdSuggestEditsTypeahead_component=c('ReactDOM').render
(c('React').createElement(c('XUITypeaheadWrapper.react'),babelHelpers['extends']({},
this.$CrowdSuggestEditsTypeahead_props,
{key:this.$CrowdSuggestEditsTypeahead_key})),

this.$CrowdSuggestEditsTypeahead_root);};




f.exports=h;}),null);

/** js/pages/city/FBVertexPagesUtils.js */





__d('FBVertexPagesUtils',['CSS','DOMQuery','Event'],(function a(b,c,d,e,f,g){





var h=

{initDescriptionCard:function i
(j,
k,
l){

c('CSS').hide(k);
c('CSS').hide(l);
var m=c('DOMQuery').scry(j,'a.see_more_link')[0];
if(m)
c('Event').listen(m,'click',function(){
c('CSS').show(k);
c('CSS').show(l);});}};





f.exports=h;}),null);

/** www/__virtual__/x/XPagesVertexCrowdsourceController.js */



__d("XPagesVertexCrowdsourceController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/vertex\/crowdsource\/save\/",{page_id:{type:"Int"},entry_point:{type:"String"},end_point:{type:"String"},session_id:{type:"Int"},last_action_time:{type:"Int"},page_category:{type:"Int"},page_category_rendered:{type:"Int"},page_categories_vote:{type:"StringToStringMap"},page_categories_vote_rendered:{type:"StringToStringMap"},page_duplicate:{type:"Int"},page_duplicate_rendered:{type:"Int"},page_duplicates_vote:{type:"StringToStringMap"},page_duplicates_vote_rendered:{type:"StringToStringMap"},page_name:{type:"String"},page_name_rendered:{type:"String"},page_name_vote:{type:"StringToStringMap"},page_name_vote_rendered:{type:"StringToStringMap"},page_phone:{type:"String"},page_phone_rendered:{type:"String"},page_phone_vote:{type:"StringToStringMap"},page_phone_vote_rendered:{type:"StringToStringMap"},page_related_websites:{type:"StringToStringMap"},page_related_websites_rendered:{type:"StringToStringMap"},page_related_websites_vote:{type:"StringToStringMap"},page_related_websites_vote_rendered:{type:"StringToStringMap"},page_website:{type:"String"},page_website_rendered:{type:"String"},page_website_vote:{type:"StringToStringMap"},page_website_vote_rendered:{type:"StringToStringMap"},place_street:{type:"String"},place_street_rendered:{type:"String"},place_zip:{type:"String"},place_zip_rendered:{type:"String"},place_city_id:{type:"Int"},place_city_id_rendered:{type:"Int"},place_category:{type:"IntVector"},place_category_rendered:{type:"IntVector"},place_categories_vote:{type:"StringToStringMap"},place_categories_vote_rendered:{type:"StringToStringMap"},place_latitude:{type:"Float"},place_latitude_rendered:{type:"Float"},place_longitude:{type:"Float"},place_longitude_rendered:{type:"Float"},place_parent_id:{type:"Int"},place_parent_id_rendered:{type:"Int"},page_email:{type:"String"},page_email_rendered:{type:"String"},page_email_vote:{type:"StringToStringMap"},page_email_vote_rendered:{type:"StringToStringMap"},page_photo_vote:{type:"StringToStringMap"},page_photo_vote_rendered:{type:"StringToStringMap"},page_photo:{type:"String"},page_photo_rendered:{type:"String"},place_address_vote:{type:"StringToStringMap"},place_address_vote_rendered:{type:"StringToStringMap"},place_hours_rendered:{type:"String"},place_hours_vote:{type:"StringToStringMap"},place_hours_vote_rendered:{type:"StringToStringMap"},place_located_in_vote:{type:"StringToStringMap"},place_located_in_vote_rendered:{type:"StringToStringMap"},place_price_range:{type:"String"},place_price_range_rendered:{type:"String"},place_price_range_vote:{type:"StringToStringMap"},place_price_range_vote_rendered:{type:"StringToStringMap"},complete_section_shown:{type:"Bool",defaultValue:false},place_neighborhood:{type:"StringToStringMap"},place_neighborhood_rendered:{type:"StringToStringMap"},place_junk_type:{type:"String"},place_junk_type_rendered:{type:"String"},page_tags:{type:"IntVector"},page_tags_rendered:{type:"IntVector"},place_wait_time:{type:"String"},place_wait_time_rendered:{type:"String"},place_wait_time_vote:{type:"StringToStringMap"},place_wait_time_vote_rendered:{type:"StringToStringMap"},page_tag:{type:"StringToStringMap"},page_tag_rendered:{type:"StringToStringMap"},knowledge_values:{type:"StringToStringMap"},knowledge_values_rendered:{type:"StringToStringMap"},knowledge_values_vote:{type:"HackType"},knowledge_values_vote_rendered:{type:"HackType"},skip_entity:{type:"Bool",defaultValue:false},state_modifier:{type:"Enum",enumType:0},sentiment:{type:"Enum",enumType:1}});}),

null);

/** js/pages/vertex/VertexCrowdsourcingCardReady.js */




__d('VertexCrowdsourcingCardReady',['AsyncRequest','Button','DOM','Event','Form','XPagesVertexCrowdsourceController'],(function a(b,c,d,e,f,g){









var h='#crowdsourcing-form',
i='#crowdsourcing-form-save',
j='#crowdsourcing-form-cancel',

k=

{init:function l(m){
var n=c('DOM').find
(m,
h),

o=c('DOM').find
(m,
i),

p=c('DOM').find
(m,
j);


c('Event').listen(p,'click',function(){
var q=c('Form').serialize(n),
r=c('XPagesVertexCrowdsourceController').getURIBuilder().
setBool('skip_entity',true).
getURI();
new (c('AsyncRequest'))(r).
setMethod('POST').
setData(q).
send();
c('Button').setEnabled(p,false);
c('Button').setEnabled(o,false);});}};




f.exports=k;}),null);

/** js/pages/vertex/VertexCrowdsourcingNullableInput.js */





__d('VertexCrowdsourcingNullableInput',['cx','CSS','Event','Input','Tooltip'],(function a(b,c,d,e,f,g,h){









function i
(j,
k,
l,
m,
n,
o,
p,
q,
r,
s){
'use strict';
this.$VertexCrowdsourcingNullableInput_input=j;
this.$VertexCrowdsourcingNullableInput_hiddenInput=k;
this.$VertexCrowdsourcingNullableInput_noValueCheckbox=l;
this.$VertexCrowdsourcingNullableInput_noValueHiddenInput=m;
this.$VertexCrowdsourcingNullableInput_content=n;
this.$VertexCrowdsourcingNullableInput_origInput=j.value;
this.$VertexCrowdsourcingNullableInput_placeholder=o;
this.$VertexCrowdsourcingNullableInput_nonApplicablePlaceholder=p;
this.$VertexCrowdsourcingNullableInput_origSelector=l.value;
this.$VertexCrowdsourcingNullableInput_nonNullCheckboxTooltip=q;
this.$VertexCrowdsourcingNullableInput_nullCheckboxTooltip=r;
this.$VertexCrowdsourcingNullableInput_origText=s;
this.updateInput();
c('Event').listen
(this.$VertexCrowdsourcingNullableInput_noValueCheckbox,
'click',
this.updateInput.bind(this));}

i.prototype.

updateInput=function(){'use strict';
var j=!this.$VertexCrowdsourcingNullableInput_noValueCheckbox.firstChild.checked;
if(j){
c('Input').setValue(this.$VertexCrowdsourcingNullableInput_input,'');
c('Input').setPlaceholder(this.$VertexCrowdsourcingNullableInput_input,this.$VertexCrowdsourcingNullableInput_nonApplicablePlaceholder);
c('Tooltip').set(this.$VertexCrowdsourcingNullableInput_noValueCheckbox,this.$VertexCrowdsourcingNullableInput_nullCheckboxTooltip);}else{

c('Input').setValue(this.$VertexCrowdsourcingNullableInput_input,this.$VertexCrowdsourcingNullableInput_origText);
c('Input').setPlaceholder(this.$VertexCrowdsourcingNullableInput_input,this.$VertexCrowdsourcingNullableInput_placeholder);
c('Tooltip').set(this.$VertexCrowdsourcingNullableInput_noValueCheckbox,this.$VertexCrowdsourcingNullableInput_nonNullCheckboxTooltip);}

c('CSS').conditionClass
(this.$VertexCrowdsourcingNullableInput_content,
"_37-t",
j);


this.conditionalDisable
(this.$VertexCrowdsourcingNullableInput_input,
j);

this.conditionalDisable
(this.$VertexCrowdsourcingNullableInput_noValueHiddenInput,
!j);};

i.prototype.

conditionalDisable=function(j,k){'use strict';
if(k){
j.setAttribute('disabled','disabled');}else 

j.removeAttribute('disabled');};




f.exports=i;}),null);
