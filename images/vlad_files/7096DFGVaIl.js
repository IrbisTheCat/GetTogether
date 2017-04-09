if (self.CavalryLogger) { CavalryLogger.start_js(["mv0IO"]); }

/** __static_js_modules__/p2pchanneltype.js */




__d("P2PChannelType",[],(function a(b,c,d,e,f,g){

f.exports={CREDIT_CARD_CHANGED:"P2P\/CreditCardChanged",CREDIT_CARD_DELETED:"P2P\/CreditCardDeleted",TRANSFER_STATUS_CHANGED:"P2P\/TransferStatusChanged",PLATFORM_CONTEXT_NEW:"P2P\/PlatformContextNew",PLATFORM_CONTEXT_DISMISSED:"P2P\/PlatformContextDismissed",PLATFORM_CONTEXT_ELIGIBLE_ITEM_UPDATED:"P2P\/PlatformContextEligibleItemUpdated",PAYMENT_REQUEST_STATUS_CHANGED:"P2P\/PaymentRequestStateChanged"};}),

null);

/** __static_js_modules__/p2ppasswordprotectionparam.js */




__d("P2PPasswordProtectionParam",[],(function a(b,c,d,e,f,g){

f.exports={STATUS:"status"};}),

null);

/** __static_js_modules__/p2ppaymentcampaignnames.js */




__d("P2PPaymentCampaignNames",[],(function a(b,c,d,e,f,g){

f.exports={ZANGOOSE:"zangoose",SEVIPER:"seviper",PICHU:"pichu"};}),

null);

/** __static_js_modules__/p2ppaymentmethodcategory.js */




__d("P2PPaymentMethodCategory",[],(function a(b,c,d,e,f,g){

f.exports={CREDIT_CARD:"credit_card",DEBIT_CARD:"debit_card",PREPAID_CARD:"prepaid_card",STORED_VALUE_ACCOUNT:"stored_value_account"};}),

null);

/** __static_js_modules__/p2ppaymentrequeststatus.js */




__d("P2PPaymentRequestStatus",[],(function a(b,c,d,e,f,g){

f.exports={INITED:1,DECLINED:2,TRANSFER_INITED:3,TRANSFER_COMPLETED:4,TRANSFER_FAILED:5,CANCELED:6,EXPIRED:7};}),

null);

/** __static_js_modules__/p2ptransferparam.js */




__d("P2PTransferParam",[],(function a(b,c,d,e,f,g){

f.exports={TRANSFER_ID:"transfer_id",STATUS:"status",SENDER_STATUS:"sender_status",RECEIVER_STATUS:"receiver_status",RISK_RESULT:"risk_result"};}),

null);

/** __static_js_modules__/p2ptransferstatus.js */




__d("P2PTransferStatus",[],(function a(b,c,d,e,f,g){

f.exports={PENDING_SENDER_MANUAL_REVIEW:1,PENDING_SENDER_VERIFICATION:2,CANCELED_SENDER_RISK:3,PENDING_RECIPIENT_NUX:4,CANCELED_DECLINED:5,PENDING_RECIPIENT_VERIFICATION:6,PENDING_RECIPIENT_MANUAL_REVIEW:7,PENDING_RECIPIENT_PROCESSING:8,PENDING_PUSH_FAIL:9,CANCELED_RECIPIENT_RISK:10,CANCELED_SYSTEM_FAIL:11,CANCELED_EXPIRED:12,COMPLETED:13,INTERMEDIATE_PROCESSING:14,PENDING_SENDER_INITED:15,CANCELED_SAME_CARD:16,PENDING_SENDER_VERIFICATION_PROCESSING:17,PENDING_RECIPIENT_VERIFICATION_PROCESSING:18};}),

null);

/** __static_js_modules__/paymentactionapifields.js */




__d("PaymentActionAPIFields",[],(function a(b,c,d,e,f,g){

f.exports={AUTHORIZE:"authorize",CAPTURE:"capture",CHARGE:"charge",REFUND:"refund",VOID:"void",CHARGEBACK:"chargeback",CHARGEBACK_REVERSAL:"chargeback_reversal",SALE:"sale",GEN_ASYNC_CREDENTIAL:"gen_async_credential"};}),

null);

/** js/mercury/clients/messenger/components/core/MessengerDialogButton.react.js */






__d('MessengerDialogButton.react',['cx','MessengerButton.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.















render=function(){var m=
this.props,n=m.action,o=m.className,p=babelHelpers.objectWithoutProperties(m,['action','className']);

return (c('React').createElement(c('MessengerButton.react'),babelHelpers['extends']
({className:c('joinClasses')
(o,"_5ixy"+


(n==='button'?' '+"layerButton":'')+
(n==='cancel'?' '+"layerCancel":'')+
(n==='confirm'?' '+"layerConfirm":''))},


p)));};


function l(){i.apply(this,arguments);}l.propTypes={action:k.oneOf(['button','cancel','confirm'])};


f.exports=l;}),null);

/** js/mercury/clients/messenger/components/core/MessengerText.react.js */






__d('MessengerText.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.






















render=function(){

return (c('React').createElement('div',babelHelpers['extends']({},
this.props,
{className:c('joinClasses')("_39r5"+


(this.props.type==='primary'?' '+"_39r6":'')+
(this.props.type==='secondary'?' '+"_39r7":'')+
(this.props.size==='small'?' '+"_39r8":'')+
(this.props.display==='inline'?' '+"__0d":''),

this.props.className)}),

this.props.children));};


function l(){i.apply(this,arguments);}l.propTypes={display:k.oneOf(['inline','block']),type:k.oneOf(['primary','secondary']).isRequired,size:k.oneOf(['small'])};


f.exports=l;}),null);

/** js/p2p/api/P2PAPIUtils.js */







__d('P2PAPIUtils',['fbt','CreditCardFormParam','guid'],(function a(b,c,d,e,f,g,h){






var i=[1001,1004,1006,1002],

j=




{getRandomDigits:function k(l){
return Math.random().toString().slice(2,2+l);},


genRequestID:function k(){
return 'id:'+c('guid')()+':'+Date.now();},







genOfflineThreadingID:function k(){

return Date.now()+''+j.getRandomDigits(6);},


getUncaughtErrorMessage:function k(l){
if(l&&i.indexOf(l)!==-1)
return h._(["Sorry, we were unable to complete your request. Please check that you are connected to the internet or refresh this page and try again.","da6461dea9772ffa5fd505eb3dcadb06"]);








return h._(["Sorry, something went wrong. Please try again later.","de1b607413138c30ed4d36b4f8d561ad"]);},












prepareCardMutationData:function k(l){
var m={},

n=l[c('CreditCardFormParam').CARD_NUMBER].replace(/ /g,'');
m[c('CreditCardFormParam').CARD_NUMBER]=n;



if(typeof l[c('CreditCardFormParam').CARD_EXPIRATION]==='string'){
var o=l[c('CreditCardFormParam').CARD_EXPIRATION].split('/');
m[c('CreditCardFormParam').MONTH]=o[0];
m[c('CreditCardFormParam').YEAR]=o[1];

m[c('CreditCardFormParam').CARD_EXPIRATION]={};
m[c('CreditCardFormParam').CARD_EXPIRATION][c('CreditCardFormParam').MONTH]=
m[c('CreditCardFormParam').MONTH];
m[c('CreditCardFormParam').CARD_EXPIRATION][c('CreditCardFormParam').YEAR]=
m[c('CreditCardFormParam').YEAR];}else{

m[c('CreditCardFormParam').MONTH]=
l[c('CreditCardFormParam').CARD_EXPIRATION][c('CreditCardFormParam').MONTH];
m[c('CreditCardFormParam').YEAR]=
l[c('CreditCardFormParam').CARD_EXPIRATION][c('CreditCardFormParam').YEAR];}


return babelHelpers['extends']({},
l,
m);}};




f.exports=j;}),null);

/** www/__virtual__/x/XCommerceConsumerReceiptUploadCompletionController.js */



__d("XCommerceConsumerReceiptUploadCompletionController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/commerce\/transaction-invoice\/update\/receipt-upload\/",{});}),

null);

/** www/__virtual__/x/XCommerceTransactionInvoiceDetailsController.js */



__d("XCommerceTransactionInvoiceDetailsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messages\/commerce\/transaction_invoice_details\/",{invoice_id:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XMoneypennyPaymentsCreateController.js */



__d("XMoneypennyPaymentsCreateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/moneypenny\/payments\/_create\/",{});}),

null);

/** www/__virtual__/x/XP2PAddressesController.js */



__d("XP2PAddressesController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/addresses\/",{});}),

null);

/** www/__virtual__/x/XP2PBannerDismissalsUpdateController.js */



__d("XP2PBannerDismissalsUpdateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/banner_dismissals\/_update\/",{banner_type:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XP2PBannerStatesController.js */



__d("XP2PBannerStatesController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/banner_states\/",{});}),

null);

/** www/__virtual__/x/XP2PBannerViewsUpdateController.js */



__d("XP2PBannerViewsUpdateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/banner_views\/_update\/",{banner_type:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XP2PCardBINValidateController.js */



__d("XP2PCardBINValidateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/card_bin\/validate\/",{bin_number:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XP2PCreditCardCreateController.js */



__d("XP2PCreditCardCreateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/credit_cards\/_create\/",{});}),

null);

/** www/__virtual__/x/XP2PCreditCardDeleteController.js */



__d("XP2PCreditCardDeleteController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/credit_cards\/_delete\/",{});}),

null);

/** www/__virtual__/x/XP2PCreditCardUpdateController.js */



__d("XP2PCreditCardUpdateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/credit_cards\/_update\/",{});}),

null);

/** www/__virtual__/x/XP2PCreditCardVerifyController.js */



__d("XP2PCreditCardVerifyController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/credit_cards\/_verify\/",{});}),

null);

/** www/__virtual__/x/XP2PCreditCardsController.js */



__d("XP2PCreditCardsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/credit_cards\/",{});}),

null);

/** www/__virtual__/x/XP2PCurrentUserProfileDataController.js */



__d("XP2PCurrentUserProfileDataController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/current_user_profile_data\/",{});}),

null);

/** www/__virtual__/x/XP2PExtensiveTransferDetailsController.js */



__d("XP2PExtensiveTransferDetailsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/transaction\/details\/",{id:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XP2PFriendPickerController.js */



__d("XP2PFriendPickerController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/friend_picker\/",{limit:{type:"Int",defaultValue:100},query:{type:"String"}});}),

null);

/** www/__virtual__/x/XP2PPasswordProtectionStatusController.js */



__d("XP2PPasswordProtectionStatusController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/password_protection_status\/",{});}),

null);

/** www/__virtual__/x/XP2PPasswordProtectionStatusUpdateController.js */



__d("XP2PPasswordProtectionStatusUpdateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/password_protection_status\/_update\/",{});}),

null);

/** www/__virtual__/x/XP2PPaymentRequestCancelController.js */



__d("XP2PPaymentRequestCancelController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/payment_requets\/_cancel\/",{});}),

null);

/** www/__virtual__/x/XP2PPaymentRequestCreateController.js */



__d("XP2PPaymentRequestCreateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/payment_requests\/_create\/",{});}),

null);

/** www/__virtual__/x/XP2PPaymentRequestDeclineController.js */



__d("XP2PPaymentRequestDeclineController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/payment_requets\/_decline\/",{});}),

null);

/** www/__virtual__/x/XP2PPendingPaymentRequestsController.js */



__d("XP2PPendingPaymentRequestsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/pending_payment_requests\/",{});}),

null);

/** www/__virtual__/x/XP2PPlatformContextController.js */



__d("XP2PPlatformContextController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/platform_context\/",{platform_context_id:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XP2PPlatformMsgrCommerceCartCreateController.js */



__d("XP2PPlatformMsgrCommerceCartCreateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/platform\/msgr_commerce\/create\/",{});}),

null);

/** www/__virtual__/x/XP2PPlatformSetShippingAddressController.js */



__d("XP2PPlatformSetShippingAddressController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/platform\/set_shipping_address\/",{});}),

null);

/** www/__virtual__/x/XP2PPresetCreditCardSetController.js */



__d("XP2PPresetCreditCardSetController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/preset_credit_card\/_set\/",{});}),

null);

/** www/__virtual__/x/XP2PProductItemBannerController.js */



__d("XP2PProductItemBannerController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/product_item_banner\/",{other_user_id:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XP2PProductItemBannerDismissalController.js */



__d("XP2PProductItemBannerDismissalController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/product_item_banner\/_dismiss\/",{platform_context_id:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XP2PProductItemBannerMarkSoldController.js */



__d("XP2PProductItemBannerMarkSoldController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/product_item_banner\/_mark_sold\/",{platform_context_id:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XP2PTransactionsCampaignCreateController.js */



__d("XP2PTransactionsCampaignCreateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/transactions\/campaign\/_create\/",{});}),

null);

/** www/__virtual__/x/XP2PTransactionsCancelController.js */



__d("XP2PTransactionsCancelController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/transactions\/_cancel\/",{});}),

null);

/** www/__virtual__/x/XP2PTransactionsController.js */



__d("XP2PTransactionsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/transactions\/",{since:{type:"Int"}});}),

null);

/** www/__virtual__/x/XP2PTransactionsCreateController.js */



__d("XP2PTransactionsCreateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/transactions\/_create\/",{});}),

null);

/** www/__virtual__/x/XP2PTransactionsDeclineController.js */



__d("XP2PTransactionsDeclineController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/transactions\/_decline\/",{});}),

null);

/** www/__virtual__/x/XP2PUserEligibilityController.js */



__d("XP2PUserEligibilityController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/p2p\/user_eligibility\/",{user_ids:{type:"StringVector",required:true}});}),

null);

/** www/__virtual__/x/XPayPagesCommercePaymentMethodsController.js */



__d("XPayPagesCommercePaymentMethodsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pay\/pages_commerce_payment_methods\/",{payment_type:{type:"Enum",required:true,enumType:1},extra_data:{type:"StringToStringMap"}});}),

null);

/** www/__virtual__/x/XPayPagesCommercePaymentsController.js */



__d("XPayPagesCommercePaymentsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pay\/pages_commerce_payments\/_charge\/",{});}),

null);

/** js/p2p/api/P2PAPI.js */








__d('P2PAPI',['AsyncRequest','CreditCardFormParam','P2PActions','P2PAPIUtils','P2PLogger','P2PGKValues','P2PPasswordProtectionParam','P2PPaymentCampaignNames','P2PPaymentLoggerEvent','P2PPaymentRequestStatus','P2PTransferParam','PaymentActionAPIFields','PaymentTokenProxyUtils','ImmutableObject','XCommerceConsumerReceiptUploadCompletionController','XCommerceTransactionInvoiceDetailsController','XMoneypennyPaymentsCreateController','XP2PAddressesController','XP2PAddressCreateController','XP2PBannerDismissalsUpdateController','XP2PBannerStatesController','XP2PBannerViewsUpdateController','XP2PCardBINValidateController','XP2PCreditCardDeleteController','XP2PCreditCardUpdateController','XP2PCreditCardCreateController','XP2PCreditCardVerifyController','XP2PCreditCardsController','XP2PCurrentUserProfileDataController','XP2PExtensiveTransferDetailsController','XP2PFriendPickerController','XP2PPasswordProtectionStatusController','XP2PPasswordProtectionStatusUpdateController','XP2PPaymentRequestCancelController','XP2PPaymentRequestCreateController','XP2PPaymentRequestDeclineController','XP2PPendingPaymentRequestsController','XP2PPlatformContextController','XP2PPlatformMsgrCommerceCartCreateController','XP2PPlatformSetShippingAddressController','XP2PPresetCreditCardSetController','XP2PProductItemBannerController','XP2PProductItemBannerDismissalController','XP2PProductItemBannerMarkSoldController','XP2PTransactionsCampaignCreateController','XP2PTransactionsCancelController','XP2PTransactionsCreateController','XP2PTransactionsController','XP2PTransactionsDeclineController','XP2PUserEligibilityController','XPayPagesCommercePaymentMethodsController','XPayPagesCommercePaymentsController','emptyFunction','isEmpty'],(function a(b,c,d,e,f,g){

'use strict';

























































var h=function j
(k,
event){

if(c('P2PGKValues').P2PWWWClientExceptionLogging)
c('P2PLogger').log(event,
{exception_message:k.getErrorDescription(),
exception_code:k.getError()});},




i=
{getAllCreditCards:function j(){
var k=c('XP2PCreditCardsController').getURIBuilder().
getURI();

new (c('AsyncRequest'))().
setURI(k).
setMethod('GET').
setReadOnly(true).
setAllowCrossPageTransition(true).
setHandler(function(l){
var m=l.getPayload(),


n=!m.error?m:[];
c('P2PActions').updateCreditCards(n);}).

setErrorHandler(function(l){
c('P2PActions').updateCreditCardsError();}).

send();},


getPaymentMethods:function j(k){
var l=c('XPayPagesCommercePaymentMethodsController').getURIBuilder().
setEnum('payment_type',k.payment_type).
setStringToStringMap('extra_data',k.extra_data).
getURI();

new (c('AsyncRequest'))().
setURI(l).
setMethod('GET').
setReadOnly(true).
setAllowCrossPageTransition(true).
setHandler(function(m){
var n=m.getPayload();
c('P2PActions').updatePaymentMethods
({id:k.id,
paymentMethodsData:n});}).


setErrorHandler(function(m){
c('P2PActions').updatePaymentMethodsError
({id:k.id,
error:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(m.getError())}});}).



send();},


createTransaction:function j(k){
var l=c('XP2PTransactionsCreateController').getURIBuilder().
getURI(),
m={},
n=k.formData,
o=k.success||c('emptyFunction'),
p=k.error||c('emptyFunction');

m[c('CreditCardFormParam').CREDENTIAL_ID]=
n[c('CreditCardFormParam').CREDENTIAL_ID];
m.amount=n.amount;
m.receiver_id=n.receiverId;
m.offline_threading_id=c('P2PAPIUtils').genOfflineThreadingID();
m.group_thread_fbid=n.group_thread_fbid;
m.platform_context_id=n.platform_context_id;
m.shipping_address_id=n.shippingAddressID;
m.shipping_option_id=n.shippingOptionID;
m.memo_text=n.memoText;
m.memo_image_ids=n.memoPhotoIDs;
m.payment_request_id=n.paymentRequestID;

new (c('AsyncRequest'))().
setData(m).
setMethod('POST').
setURI(l).
setAllowCrossPageTransition(true).
setHandler(function(q){
var r=q?q.getPayload():{};

if(r.error){
p(r.error);}else{

o(r);

this.getAllCreditCards();
if(m.payment_request_id)
c('P2PActions').paymentRequestUpdated
({id:m.payment_request_id,
currentStatus:c('P2PPaymentRequestStatus').TRANSFER_COMPLETED});}}.



bind(this)).
setErrorHandler(function(q){
p
({message:c('P2PAPIUtils').getUncaughtErrorMessage(q.getError())});

h
(q,
c('P2PPaymentLoggerEvent').UI_ACTN_CREATE_TRANSFER_EXCEPTION);}).


send();},


addCreditCard:function j(k){
c('P2PActions').ignoreCreditCardChannelEvents();
var l=c('XP2PCreditCardCreateController').getURIBuilder(),
m=l.getURI().getPath(),
n=k.onSuccess||c('emptyFunction'),
o=k.onError||c('emptyFunction'),
p=c('PaymentTokenProxyUtils').getURI({tpe:m});
k=c('P2PAPIUtils').prepareCardMutationData(k);
var q=new (c('ImmutableObject'))(k),
r=k.hasPlatformContext;
delete k.onSuccess;
delete k.onError;
c('P2PActions').creditCardSaving();

new (c('AsyncRequest'))().
setAllowCrossOrigin(true).
setURI(p).
setData(k).
setMethod('POST').
setHandler(function(s){
var t=s.getPayload();

if(!t.errors){
q=c('ImmutableObject').set(q,t);

c('P2PActions').addCreditCard(q);

if(t.isPreset)


c('P2PActions').transferAccepted();


if(r)
c('P2PActions').checkoutCreditCardSelected
(t[c('CreditCardFormParam').CREDENTIAL_ID]);






n();}else{

c('P2PActions').addCreditCardError(babelHelpers['extends']
({requestID:q.requestID},
t));

o(t);}

c('P2PActions').allowCreditCardChannelEvents();}).

setErrorHandler(function(s){
c('P2PActions').addCreditCardError
({requestID:q.requestID,
errors:
{general:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(s.getError())}}});



c('P2PActions').allowCreditCardChannelEvents();
h
(s,
c('P2PPaymentLoggerEvent').UI_ACTN_ADD_CARD_EXCEPTION);}).


send();},


getTransactions:function j(k){
k=k||{};
var l={},
m=k,
n=c('XP2PTransactionsController').getURIBuilder().
getURI(),
o=new (c('ImmutableObject'))(m);

if(m.since)
l.since=m.since;


return new (c('AsyncRequest'))().
setData(l).
setURI(n).
setMethod('GET').
setReadOnly(true).
setHandler(function(p){
var q=p.getPayload();
if(!q.error){
c('P2PActions').updateTransfers(q);}else 

c('P2PActions').updateTransfersError(babelHelpers['extends']
({requestID:o.requestID},
q));}).



setErrorHandler(function(p){
c('P2PActions').updateTransfersError
({error:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(p.getError())},

requestID:o.requestID});}).


send();},


getExtensiveTransferDetailsByID:function j(k){
var l=c('XP2PExtensiveTransferDetailsController').getURIBuilder().
setString('id',k).
getURI();

new (c('AsyncRequest'))().
setURI(l).
setMethod('GET').
setReadOnly(true).
setHandler(function(m){
var n=m.getPayload();
if(!n.error)
c('P2PActions').extensiveTransferDetailsLoaded(n);}).


send();},


getNUXTransactions:function j(){
var k=new Date(),
l=Math.round(k.setDate(k.getDate()-15)/1000),
m=c('XP2PTransactionsController').getURIBuilder().getURI();

return new (c('AsyncRequest'))().
setData({since:l}).
setURI(m).
setMethod('GET').
setReadOnly(true).
setHandler(function(n){
var o=n.getPayload();
if(!o.error)
c('P2PActions').updateNUXTransfers(o);}).


send();},


updatePresetCreditCard:function j(k){
var l=c('XP2PPresetCreditCardSetController').getURIBuilder().
getURI();

new (c('AsyncRequest'))().
setData(k).
setURI(l).
setMethod('POST').
setHandler(function(m){
var n=m.getPayload();

if(!n.error){
c('P2PActions').updatePresetCreditCard(babelHelpers['extends']({},
n,
{requestID:k.requestID}));

c('P2PActions').transferAccepted();}else 

c('P2PActions').updatePresetCreditCardError(babelHelpers['extends']({},
n,
{requestID:k.requestID}));}).



setErrorHandler(function(m){
c('P2PActions').updatePresetCreditCardError
({error:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(m.getError())},

requestID:k.requestID});

h
(m,
c('P2PPaymentLoggerEvent').UI_ACTN_UPDATE_PRESET_CARD_EXCEPTION);}).


send();},


updateCreditCard:function j(k){
c('P2PActions').ignoreCreditCardChannelEvents();
var l=c('XP2PCreditCardUpdateController').getURIBuilder(),
m=l.getURI().getPath(),
n=c('PaymentTokenProxyUtils').getURI({tpe:m});
k=c('P2PAPIUtils').prepareCardMutationData(k);
var o=new (c('ImmutableObject'))(k);

new (c('AsyncRequest'))().
setAllowCrossOrigin(true).
setURI(n).
setData(k).
setMethod('POST').
setHandler(function(p){
var q=p.getPayload();

if(!q.errors){
c('P2PActions').updateCreditCard(o);}else 

c('P2PActions').updateCreditCardError(babelHelpers['extends']({},
q,
{requestID:o.requestID}));


c('P2PActions').allowCreditCardChannelEvents();}).

setErrorHandler(function(p){
c('P2PActions').updateCreditCardError
({errors:
{general:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(p.getError())}},


requestID:o.requestID});

c('P2PActions').allowCreditCardChannelEvents();
h
(p,
c('P2PPaymentLoggerEvent').UI_ACTN_UPDATE_CARD_EXCEPTION);}).


send();},


deleteCreditCard:function j(k){
var l=c('XP2PCreditCardDeleteController').getURIBuilder().getURI();

new (c('AsyncRequest'))().
setData(k).
setMethod('POST').
setURI(l).
setHandler(function(m){
var n=m.getPayload();

if(!n.error){
c('P2PActions').deleteCreditCard(babelHelpers['extends']({},
n,
{requestID:k.requestID}));}else 


c('P2PActions').deleteCreditCardError(babelHelpers['extends']({},
n,
{requestID:k.requestID}));}).



setErrorHandler(function(m){
c('P2PActions').deleteCreditCardError
({error:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(m.getError())},

requestID:k.requestID});}).


send();},


getPasswordProtectionSetting:function j(k){
var l=c('XP2PPasswordProtectionStatusController').getURIBuilder().
getURI(),
m=k.success||c('emptyFunction'),
n=k.error||c('emptyFunction');

new (c('AsyncRequest'))().
setURI(l).
setMethod('GET').
setReadOnly(true).
setHandler(function(o){
var p=o?o.getPayload():[];

if(p.error){
n();}else 

m(p);}).


setErrorHandler(function(o){
n();}).

send();},


setPasswordProtectionSetting:function j(k){
var l=c('XP2PPasswordProtectionStatusUpdateController').getURIBuilder().
getURI(),
m=k.formData,
n=k.success||c('emptyFunction'),
o=k.error||c('emptyFunction'),
p={};
p[c('P2PPasswordProtectionParam').STATUS]=
m[c('P2PPasswordProtectionParam').STATUS];

new (c('AsyncRequest'))().
setData(p).
setURI(l).
setMethod('POST').
setHandler(function(q){
var r=q?q.getPayload():{};

if(r.error){
o(r.error);}else 

n();}).


setErrorHandler(function(q){
o();}).

send();},


declineTransaction:function j(k){
var l=c('XP2PTransactionsDeclineController').getURIBuilder().getURI(),
m=k.formData,
n=k.success||c('emptyFunction'),
o=k.error||c('emptyFunction'),
p={};
p[c('P2PTransferParam').TRANSFER_ID]=
m[c('P2PTransferParam').TRANSFER_ID];

new (c('AsyncRequest'))().
setData(p).
setURI(l).
setMethod('POST').
setHandler(function(q){
var r=q?q.getPayload():{},
s={};

if(r.error){
o(r.error);}else{

n();
s[c('P2PTransferParam').TRANSFER_ID]=
p[c('P2PTransferParam').TRANSFER_ID];
c('P2PActions').transferDeclined(s);}}).


setErrorHandler(function(q){
o();
h
(q,
c('P2PPaymentLoggerEvent').UI_ACTN_DECLINE_TRANSFER_EXCEPTION);}).


send();},


cancelTransaction:function j(k){
var l=c('XP2PTransactionsCancelController').getURIBuilder().getURI(),
m=k.formData,
n=k.success||c('emptyFunction'),
o=k.error||c('emptyFunction'),
p={};
p[c('P2PTransferParam').TRANSFER_ID]=
m[c('P2PTransferParam').TRANSFER_ID];

new (c('AsyncRequest'))().
setData(p).
setURI(l).
setMethod('POST').
setHandler(function(q){
var r=q?q.getPayload():{};

if(r.error){
o(r.error);}else 

n();}).


setErrorHandler(function(q){
o();}).

send();},


verifyCreditCard:function j(k){
var l=c('XP2PCreditCardVerifyController').getURIBuilder(),
m=l.getURI().getPath(),
n=c('PaymentTokenProxyUtils').getURI({tpe:m});

new (c('AsyncRequest'))().
setAllowCrossOrigin(true).
setURI(n).
setData(k).
setMethod('POST').
setHandler(function(o){
var p=o.getPayload();

if(!p.error){
c('P2PActions').verifyCreditCard(babelHelpers['extends']({},
p,
{requestID:k.requestID}));}else 


c('P2PActions').verifyCreditCardError(babelHelpers['extends']({},
p,
{requestID:k.requestID}));}).



setErrorHandler(function(o){
c('P2PActions').verifyCreditCardError
({error:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(o.getError())},

requestID:k.requestID});

h
(o,
c('P2PPaymentLoggerEvent').UI_ACTN_VERIFY_CARD_EXCEPTION);}).


send();},




validateBINNumber:function j(k){
k=k||{};
var l=new (c('ImmutableObject'))(k),
m=c('XP2PCardBINValidateController').getURIBuilder().
setString('bin_number',k.binNumber).
getURI();

return new (c('AsyncRequest'))().
setURI(m).
setMethod('GET').
setReadOnly(true).
setHandler(function(n){
var o=n.getPayload();
if(!o.error){
c('P2PActions').binNumberValidated(babelHelpers['extends']({},
o,
{requestID:k.requestID}));}else 


c('P2PActions').binNumberValidatedError(babelHelpers['extends']({},
o,
{requestID:l.requestID}));}).



send();},


getUserEligibility:function j(k){
k=k||{};
var l=c('XP2PUserEligibilityController').getURIBuilder().
setStringVector('user_ids',k.userIDs).
getURI();

return new (c('AsyncRequest'))().
setURI(l).
setMethod('GET').
setReadOnly(true).
setAllowCrossPageTransition(true).
setHandler(function(m){
var n=m.getPayload();
if(!n.error)
c('P2PActions').userEligibilityUpdated(n);}).


send();},


getFriendsList:function j(k,l){
var m=c('XP2PFriendPickerController').getURIBuilder().
setInt('limit',k).
setString('query',l).
getURI();

return new (c('AsyncRequest'))().
setURI(m).
setMethod('GET').
setReadOnly(true).
setHandler(function(n){
var o=n.getPayload();
if(!o.error)
c('P2PActions').friendsListUpdated
({friends:o,
query:l});}).



send();},


getBannerStates:function j(){
var k=c('XP2PBannerStatesController').getURIBuilder().
getURI();

new (c('AsyncRequest'))().
setURI(k).
setMethod('GET').
setReadOnly(true).
setHandler(function(l){
var m=l.getPayload();
if(!m.error)
c('P2PActions').bannerStatesUpdated(m);}).


send();},


incrementBannerViews:function j(k){
var l=c('XP2PBannerViewsUpdateController').getURIBuilder().
setString('banner_type',k).
getURI();

new (c('AsyncRequest'))().
setMethod('POST').
setURI(l).
send();},


incrementBannerDismissals:function j(k){
var l=void 0;


c('P2PActions').bannerDismissed(k);

l=c('XP2PBannerDismissalsUpdateController').getURIBuilder().
setString('banner_type',k).
getURI();

new (c('AsyncRequest'))().
setMethod('POST').
setURI(l).
send();},


createMoneypennyTransfer:function j(k){
var l=c('XMoneypennyPaymentsCreateController').getURIBuilder().getURI();

new (c('AsyncRequest'))().
setMethod('POST').
setURI(l).
setData
({item_id:k.item_id,
credential_id:k.credential_id,
amount:k.amount,
external_request_id:k.external_request_id}).

setHandler(function(m){
var n=m.getPayload();

if(!n.error){
c('P2PActions').moneypennyTransferCreated(babelHelpers['extends']({},
n,
{requestID:k.requestID}));


this.getAllCreditCards();}else 

c('P2PActions').moneypennyTransferCreatedError(babelHelpers['extends']({},
n,
{requestID:k.requestID}));}.


bind(this)).
setErrorHandler(function(m){
c('P2PActions').moneypennyTransferCreatedError
({error:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(m.getError())},

requestID:k.requestID});

h
(m,
c('P2PPaymentLoggerEvent').UI_ACTN_CREATE_M_TRANSFER_EXCEPTION);}).


send();},


createFinancialIncentivesTransfer:function j(k){
var l=c('XP2PTransactionsCampaignCreateController').getURIBuilder().
getURI(),

m=k.success||c('emptyFunction'),
n=k.error||c('emptyFunction'),

o={};
o[c('CreditCardFormParam').CREDENTIAL_ID]=k.credential_id;
o.external_request_id=c('P2PAPIUtils').genOfflineThreadingID();
o.campaign_name=c('P2PPaymentCampaignNames').SEVIPER;

new (c('AsyncRequest'))().
setData(o).
setURI(l).
setMethod('POST').
setHandler(function(p){
var q=p.getPayload();
if(q.error){
n(q.error);}else 

m();}).


send();},


getPlatformContextByOtherUserID:function j(k){
k=k||{};
var l=c('XP2PProductItemBannerController').getURIBuilder().
setString('other_user_id',k.otherUserID).
getURI();

return new (c('AsyncRequest'))().
setURI(l).
setMethod('GET').
setReadOnly(true).
setAllowCrossPageTransition(true).
setHandler(function(m){
var n=m.getPayload();
if(!n.error&&!c('isEmpty')(n))
c('P2PActions').addPlatformContext(n);}).


send();},


getPlatformContextByID:function j(k){
k=k||{};
var l=k.onSuccess||c('emptyFunction'),
m=k.onError||c('emptyFunction'),
n=c('XP2PPlatformContextController').getURIBuilder().
setString('platform_context_id',k.id).
getURI();

return new (c('AsyncRequest'))().
setURI(n).
setMethod('GET').
setReadOnly(true).
setAllowCrossPageTransition(true).
setHandler(function(o){
var p=o.getPayload();
if(!p.error&&!c('isEmpty')(p)){
c('P2PActions').addPlatformContext(p);
l(p);}}).


setErrorHandler(function(o){
c('P2PActions').addPlatformContextError
({itemID:k.productItemID,
error:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(o.getError())}});


m();}).

send();},


dismissPlatformContextBanner:function j(k){
var l=void 0;


c('P2PActions').platformContextBannerDismissed(k);

l=c('XP2PProductItemBannerDismissalController').getURIBuilder().
setString('platform_context_id',k).
getURI();

new (c('AsyncRequest'))().
setMethod('POST').
setURI(l).
send();},


markSoldPlatformContextProductItem:function j(k){
var l=void 0;


c('P2PActions').platformContextProductItemSold(k);

l=c('XP2PProductItemBannerMarkSoldController').getURIBuilder().
setString('platform_context_id',k).
getURI();

new (c('AsyncRequest'))().
setMethod('POST').
setURI(l).
send();},


getAddresses:function j(){
var k=c('XP2PAddressesController').getURIBuilder().
getURI();

return new (c('AsyncRequest'))().
setURI(k).
setMethod('GET').
setReadOnly(true).
setAllowCrossPageTransition(true).
setHandler(function(l){
var m=l.getPayload();

if(!m.error)
c('P2PActions').updateAddresses(m);}).


send();},


addAddress:function j(){var k=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],
l=c('XP2PAddressCreateController').
getURIBuilder().
getURI(),
m=void 0,
n=k.platformContext,
o=k.onSuccess||c('emptyFunction'),
p=k.onError||c('emptyFunction');
m=
{label:k.label,
care_of:k.care_of,
city:k.city,
street1:k.street1,
street2:k.street2,
state:k.state,
zip:k.zip,
country:k.country};


c('P2PActions').addressSaving();

return new (c('AsyncRequest'))().
setData(m).
setURI(l).
setMethod('POST').
setHandler(function(q){
var r=q.getPayload();

if(!r.errors){
c('P2PActions').addAddress(babelHelpers['extends']({},
r,
m,
{requestID:k.requestID}));


if(n){
c('P2PActions').checkoutAddressSelected(r.id);
this.setPlatformContextShippingAddress
({platformContextID:n.id,
shippingAddressID:r.id});}


o();}else{

c('P2PActions').addAddressError(babelHelpers['extends']({},
r,
{requestID:k.requestID}));

p(r);}}.

bind(this)).
setErrorHandler(function(q){
c('P2PActions').addAddressError
({errors:
{general:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(q.getError())}},


requestID:k.requestID});

h
(q,
c('P2PPaymentLoggerEvent').UI_ACTN_ADD_ADDRESS_EXCEPTION);}).


send();},



createMCCart:function j(k){
var l=c('XP2PPlatformMsgrCommerceCartCreateController').
getURIBuilder().
getURI(),
m=void 0,
n=k.productItemID;
k=k||{};
m=
{item_id:n};


c('P2PActions').checkoutCartInitiated();

return new (c('AsyncRequest'))().
setData(m).
setURI(l).
setMethod('POST').
setHandler(function(o){
var p=o.getPayload();
if(!p.error){
c('P2PActions').addPlatformContext(babelHelpers['extends']({},
p));

c('P2PActions').checkoutCartCreated
({sellerID:k.sellerID,
productItemID:n});}else 


c('P2PActions').addPlatformContextError(babelHelpers['extends']
({itemID:n},
p));}).



setErrorHandler(function(o){
c('P2PActions').addPlatformContextError
({itemID:n,
error:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(o.getError())}});


h
(o,
c('P2PPaymentLoggerEvent').UI_ACTN_CREATE_CART_EXCEPTION);}).


send();},


setPlatformContextShippingAddress:function j(k){
var l=c('XP2PPlatformSetShippingAddressController').
getURIBuilder().
getURI(),
m=void 0,
n=k.platformContextID,
o=k.shippingAddressID;
k=k||{};
m=
{platform_context_id:n,
shipping_address_id:o};


c('P2PActions').checkoutProcessing(true);

return new (c('AsyncRequest'))().
setData(m).
setURI(l).
setMethod('POST').
setHandler(function(p){
c('P2PActions').checkoutProcessing(false);
var q=p.getPayload();

if(!q.error)
c('P2PActions').addPlatformContext(babelHelpers['extends']({},
q));}).



setErrorHandler(function(p){
h
(p,
c('P2PPaymentLoggerEvent').UI_ACTN_SET_CART_ADDRESS_EXCEPTION);}).


send();},


getCurrentUserProfileData:function j(){
var k=c('XP2PCurrentUserProfileDataController').getURIBuilder().
getURI();

return new (c('AsyncRequest'))().
setURI(k).
setMethod('GET').
setReadOnly(true).
setAllowCrossPageTransition(true).
setHandler(function(l){
var m=l.getPayload();

if(!m.error){
c('P2PActions').checkoutBuyerProfileUpdated(m);}else 

c('P2PActions').checkoutBuyerProfileUpdated({});}).


setErrorHandler(function(l){
c('P2PActions').checkoutBuyerProfileUpdated({});}).

send();},


createPaymentRequest:function j(k){
var l=c('XP2PPaymentRequestCreateController').getURIBuilder().getURI(),
m=k.formData,
n=m.amount,
o=m.memoText,
p=m.group_thread_fbid,
q=
{amount:n,
memo_text:o,
offline_threading_id:c('P2PAPIUtils').genOfflineThreadingID(),
group_thread_fbid:p,
platform_context_id:m.platform_context_id},


r=m.requestees,
s=r.get(0)||{};

if(r.size>1){
q.requestee_ids=r.map(function(t){return t.userID;}).toJS();}else 

q.requestee_id=s.userID;


c('P2PActions').paymentRequestInitiated();

new (c('AsyncRequest'))().
setData(q).
setURI(l).
setMethod('POST').
setHandler(function(t){
var u=t.getPayload();

if(!u.error){
c('P2PActions').paymentRequestCreated(babelHelpers['extends']
({requesteeID:s.userID,
amount:n,
memoText:o},
u));

k.success(u);}else{

c('P2PActions').paymentRequestCreatedError(u);
k.error(u);}

c('P2PActions').paymentRequestInitiatedComplete();}).

setErrorHandler(function(t){
k.error
({error:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(t.getError())}});


c('P2PActions').paymentRequestInitiatedComplete();
h
(t,
c('P2PPaymentLoggerEvent').UI_ACTN_CREATE_REQUEST_EXCEPTION);}).


send();},


declinePaymentRequest:function j(k){
var l=c('XP2PPaymentRequestDeclineController').
getURIBuilder().
getURI(),
m=k.paymentRequestID,
n=k.success||c('emptyFunction'),
o=k.error||c('emptyFunction'),
p=
{payment_request_id:m};


c('P2PActions').paymentRequestDeclineInitiated();

return new (c('AsyncRequest'))().
setData(p).
setURI(l).
setMethod('POST').
setHandler(function(q){
var r=q.getPayload();

if(!r.error){
c('P2PActions').paymentRequestDeclined(m);
c('P2PActions').hideDialog();
n(r);}else{

c('P2PActions').paymentRequestDeclineError(r);
o(r);}}).


setErrorHandler(function(q){
c('P2PActions').paymentRequestDeclineError
({error:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(q.getError())}});


o();
h
(q,
c('P2PPaymentLoggerEvent').UI_ACTN_DECLINE_REQUEST_EXCEPTION);}).


send();},


cancelPaymentRequest:function j(k){
var l=c('XP2PPaymentRequestCancelController').
getURIBuilder().
getURI(),
m=k.paymentRequestID,
n=k.success||c('emptyFunction'),
o=k.error||c('emptyFunction'),
p=
{payment_request_id:m};


c('P2PActions').paymentRequestCancelInitiated();

return new (c('AsyncRequest'))().
setData(p).
setURI(l).
setMethod('POST').
setHandler(function(q){
var r=q.getPayload();

if(!r.error){
c('P2PActions').paymentRequestCanceled(m);
c('P2PActions').hideDialog();
n(r);}else{

c('P2PActions').paymentRequestCancelError(r);
o(r);}}).


setErrorHandler(function(q){
c('P2PActions').paymentRequestCancelError
({error:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(q.getError())}});


o();
h
(q,
c('P2PPaymentLoggerEvent').UI_ACTN_CANCEL_REQUEST_EXCEPTION);}).


send();},


getPendingPaymentRequests:function j(){
var k=c('XP2PPendingPaymentRequestsController').getURIBuilder().
getURI();

new (c('AsyncRequest'))().
setURI(k).
setMethod('GET').
setReadOnly(true).
setAllowCrossPageTransition(true).
setHandler(function(l){
var m=l.getPayload(),
n=!m.error?m:[];

c('P2PActions').paymentRequestsFetched(n);}).

send();},


getCommerceInvoiceDetails:function j(k){
var l=c('XCommerceTransactionInvoiceDetailsController').getURIBuilder().
setString('invoice_id',k.invoiceID).
getURI(),

m=k.onSuccess||c('emptyFunction'),
n=k.onError||c('emptyFunction');

new (c('AsyncRequest'))().
setURI(l).
setMethod('GET').
setReadOnly(true).
setHandler(function(o){
var p=o.getPayload();
if(!p.error){
m(p);}else 

n(p);}).


setErrorHandler(function(o){
n
({error:
{message:c('P2PAPIUtils').getUncaughtErrorMessage(o.getError())}});}).



send();},


completeReceiptUploadCheckout:function j(k){
var l=c('XCommerceConsumerReceiptUploadCompletionController').
getURIBuilder().
getURI(),

m=k.onSuccess||c('emptyFunction'),
n=k.onError||c('emptyFunction'),
o=
{invoice_id:k.invoiceID,
receipt_image_id:k.receiptImageID,
selected_payment_option_id:k.selectedPaymentOptionID};


new (c('AsyncRequest'))().
setURI(l).
setMethod('POST').
setData(o).
setAllowCrossOrigin(true).
setHandler(function(p){
var q=p.getPayload();
if(!q||!q.error){
m(q);}else 

n
({message:c('P2PAPIUtils').getUncaughtErrorMessage()});}).



setErrorHandler(function(p){
n
({message:c('P2PAPIUtils').getUncaughtErrorMessage(p.getError())});}).


send();},


completeNMORCheckout:function j(k){
var l=k.success,
m=k.error,
n=
{nmor_order_type:k.nmorOrderType,
action:c('PaymentActionAPIFields').SALE,
receiver_id:k.receiverID,
order_id:k.orderID,
request_id:c('P2PAPIUtils').genRequestID(),
currency:k.currency,
credential_id:k.credentialId,
shipping_address_id:k.shippingAddressID,
shipping_option_id:k.shippingOptionID,
payment_method:
{type:k.paymentMethodType},

payment_method_data:k.paymentMethodData,
extra_data:k.extraData,
amount:k.amount,
csc:k.securityCode},


o=c('XPayPagesCommercePaymentsController').
getURIBuilder().
getURI();
if(n.credential_id&&n.csc){

var p=o.getPath();
o=c('PaymentTokenProxyUtils').getURI({tpe:p});}


var q=new (c('AsyncRequest'))().
setAllowCrossOrigin(true).
setURI(o).
setData(n).
setMethod('POST');
if(l)
q.setHandler(function(r){
var s=r.getPayload();
if(s.error){
m(s.error);}else 

l(s.id,s.extra_data);});



if(m)
q.setErrorHandler(function(r){
m
({message:c('P2PAPIUtils').getUncaughtErrorMessage(r.getError())});});



q.send();}};



f.exports=i;}),null);

/** js/p2p/components/attachment/P2PNUXRendererUtils.js */






__d('P2PNUXRendererUtils',['CurrentUser','ImmutableObject','MercuryAttachmentType','P2PTransferParam','P2PTransferStatus','StoryAttachmentStyle'],(function a(b,c,d,e,f,g){

'use strict';








var h=
{getTransferFromMessage:function i(j){
var k=void 0,
l=void 0;

if(!j||!j.attachments||!j.attachments.length)
return null;


l=j.attachments[0];

if(this.isShareAttachment(l))
k=l.share.target;


if(k)
k=new (c('ImmutableObject'))(k);


return k;},


isSuccessfulReceivedTransfer:function i(j){

return (j&&
j.receiver&&
j.receiver.id===c('CurrentUser').getID()&&
(j.status===c('P2PTransferStatus').COMPLETED||
j.status===c('P2PTransferStatus').PENDING_RECIPIENT_NUX));},



isShareAttachment:function i(j){

return !!(typeof j!=='string'&&
j.attach_type==c('MercuryAttachmentType').SHARE&&
j.share&&
j.share.style_list&&
j.share.style_list.indexOf(c('StoryAttachmentStyle').ORION)>=0);},



doesNUXNeedCreditCards:function i(j){
var k=c('CurrentUser').getID()===j.sender.id;


return (!k&&
j[c('P2PTransferParam').STATUS]===
c('P2PTransferStatus').PENDING_RECIPIENT_NUX);},



isRecipientActionableStatus:function i(j){
var k=j[c('P2PTransferParam').STATUS],
l=c('CurrentUser').getID()===j.sender.id;


return (!l&&
(k===c('P2PTransferStatus').PENDING_RECIPIENT_NUX||
k===c('P2PTransferStatus').PENDING_RECIPIENT_VERIFICATION||
k===c('P2PTransferStatus').PENDING_PUSH_FAIL));}};





f.exports=h;}),null);

/** js/p2p/components/common/P2PAmountUtils.js */








__d('P2PAmountUtils',[],(function a(b,c,d,e,f,g){


var h=10000,

i=
{isAmountOverLegalLimit:function j(k){
return parseFloat(this.sanitizeAmount(k))>=h;},


isAmountZero:function j(k){
return parseFloat(this.sanitizeAmount(k))===0;},


isValidSendAmount:function j(k){
return !this.isAmountOverLegalLimit(k)&&!this.isAmountZero(k);},


sanitizeAmount:function j(k){
return k.replace(/[^0-9\.]+/g,'');}};



f.exports=i;}),null);

/** js/p2p/components/common/P2PButton.react.js */







__d('P2PButton.react',['MessengerEnvironment','MessengerDialogButton.react','React','XUIButton.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits






(j,c('React').Component);i=h&&h.prototype;j.prototype.
render=function(){
var k=c('MessengerEnvironment').messengerui,
l=k?c('MessengerDialogButton.react'):c('XUIButton.react'),
m=this.props.type;
if(!m)
m=this.props.use==='confirm'?'primary':'secondary';

var n=k?'default':this.props.use,
o=babelHelpers['extends']({},this.props,{type:m,use:n});


return (c('React').createElement(l,o,
this.props.children));};


function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/p2p/components/common/P2PDialog.react.js */







__d('P2PDialog.react',['MessengerEnvironment','LayerFadeOnHide','MessengerDialog.react','React','XUIDialog.react','emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';









var h=c('React').PropTypes,

i=c('React').createClass({displayName:'P2PDialog',
propTypes:
{onToggle:h.func,
shown:h.bool,
width:h.number},


getDefaultProps:function j(){

return {onToggle:c('emptyFunction'),
repositionOnUpdate:false,
shown:true,
width:400};},



componentDidUpdate:function j(){



if(this.props.repositionOnUpdate)
setTimeout(function(){

if(this.isMounted()&&
this.refs.dialog&&
this.refs.dialog.layer)

this.refs.dialog.layer.updatePosition();}.

bind(this),0);},



render:function j(){
var k=c('MessengerEnvironment').messengerui,
l=k?c('MessengerDialog.react'):c('XUIDialog.react');


return (c('React').createElement(l,babelHelpers['extends']
({behaviors:
{LayerFadeOnHide:c('LayerFadeOnHide')}},

this.props,
{ref:'dialog'}),


this.props.children));}});





f.exports=i;}),null);

/** js/p2p/components/common/P2PDialogBody.react.js */







__d('P2PDialogBody.react',['MessengerEnvironment','MessengerDialogBody.react','React','XUIDialogBody.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits






(j,c('React').Component);i=h&&h.prototype;j.prototype.
render=function(){
var k=c('MessengerEnvironment').messengerui,
l=k?c('MessengerDialogBody.react'):c('XUIDialogBody.react');


return (c('React').createElement(l,this.props,
this.props.children));};


function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/p2p/components/common/P2PDialogFooter.react.js */







__d('P2PDialogFooter.react',['cx','MessengerEnvironment','MessengerDialogFooter.react','React','XUIDialogFooter.react','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits









(k,c('React').Component);j=i&&i.prototype;k.prototype.
render=function(){
var l=c('MessengerEnvironment').messengerui,
m=
l?c('MessengerDialogFooter.react'):c('XUIDialogFooter.react'),
n=void 0,
o=this.props.children;

if(l){
n=c('React').Children.count(this.props.children);
o=c('React').Children.map(this.props.children,function(p,q){
if(!p)
return null;

return c('React').cloneElement(p,
{className:c('joinClasses')
(p.props.className,
"_4ec0"),

type:q===0&&n===2?'secondary':'primary'});});}





return (c('React').createElement(m,
this.props,
o));};


function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/p2p/components/common/P2PDialogTitle.react.js */







__d('P2PDialogTitle.react',['MessengerEnvironment','MessengerDialogHeader.react','React','XUIDialogTitle.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits






(j,c('React').Component);i=h&&h.prototype;j.prototype.
render=function(){
var k=c('MessengerEnvironment').messengerui,
l=
k?c('MessengerDialogHeader.react'):c('XUIDialogTitle.react');


return (c('React').createElement(l,this.props,
this.props.children));};


function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/p2p/components/common/P2PListRow.react.js */









__d('P2PListRow.react',['cx','invariant','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,






l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.
















render=function(){
var n=this.props;



c('React').Children.count(n.children)===2||i(0,
'Expected a left and right column only');


var o=n.offset,
p=
n.offsetRight!==undefined&&n.offsetRight+'px',
q=
n.offsetBottom!==undefined&&n.offsetBottom+'px';


return (c('React').createElement('div',
{className:"_3q6c"+

(o==='large'?' '+"_3q6d":'')+
(o==='small'?' '+"_3q6o":'')},

c('React').createElement('div',
{className:"_3q6p",
style:
{paddingRight:p,
paddingBottom:q}},



n.children[0]),

c('React').createElement('div',
{className:"_3q6q",
style:
{paddingBottom:q}},



n.children[1])));};



function m(){j.apply(this,arguments);}m.propTypes={offset:l.oneOf(['large','small']),offsetBottom:l.number,offsetRight:l.number};m.defaultProps={offset:'large'};


f.exports=m;}),null);

/** js/p2p/components/common/P2PText.react.js */







__d('P2PText.react',['MessengerEnvironment','MessengerText.react','React','XUIGrayText.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i,






j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;k.prototype.









render=function(){
var l=c('MessengerEnvironment').messengerui,
m=l?c('MessengerText.react'):c('XUIGrayText.react'),
n=this.props.type,
o=this.props;

if(!l){
o=babelHelpers['extends']({},
this.props,
{display:this.props.display||'block',
shade:n==='primary'?'dark':'light',
size:this.props.size||'small'});

delete o.type;}else{

o=babelHelpers['extends']({},
this.props,
{size:'small'});

delete o.size;}





return (c('React').createElement(m,o,


this.props.children));};


function k(){h.apply(this,arguments);}k.propTypes={type:j.oneOf(['primary','secondary']).isRequired};


f.exports=k;}),null);

/** js/p2p/components/send_money/nux/P2PEncryptedText.react.js */







__d('P2PEncryptedText.react',['ix','cx','fbt','xuiglyph','Image.react','P2PText.react','React'],(function a(b,c,d,e,f,g,h,i,j,k){

'use strict';var l,m,









n=c('React').PropTypes;l=babelHelpers.inherits

(o,c('React').Component);m=l&&l.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=m.constructor).call.apply(p,[this].concat(s)),this.










getEncryptedMessage=function(){
if(this.props.showPasswordProtected)
return j._(["Encrypted and password protected.","e7f4102d99a1078f371129ca2132ceba"]);





return j._(["Encrypted and private.","dbb698d6d3523b1f4e1bb9dbf95dd84e"]);}.




bind(this),q;}o.prototype.

render=function(){

return (c('React').createElement(c('P2PText.react'),
{type:'secondary'},
c('React').createElement('div',{className:"__8t"},
c('React').createElement(c('Image.react'),
{src:h("89465")})),


c('React').createElement('span',{className:"_2pir"},
this.getEncryptedMessage())));};



o.propTypes={showPasswordProtected:n.bool};o.defaultProps={showPasswordProtected:false};


f.exports=o;}),null);

/** js/p2p/components/send_money/nux/P2PNUXNextButton.react.js */







__d('P2PNUXNextButton.react',['fbt','P2PButton.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.






render=function(){

return (c('React').createElement(c('P2PButton.react'),
{label:h._(["Next","442f42846b5746d14bb78983bb8fa2f4"]),
onClick:this.props.onNextClick,
use:'confirm'}));};


function l(){i.apply(this,arguments);}l.propTypes={onNextClick:k.func.isRequired};


f.exports=l;}),null);

/** js/p2p/creditCard/P2PCreditCard.js */






__d('P2PCreditCard',['fbt','ix','CreditCardFormParam','CreditCardTypeEnum','PaymentMethodUtils','P2PPaymentMethodCategory'],(function a(b,c,d,e,f,g,h,i){

'use strict';









var j=
{visa:
{image:i("95537"),
imageLarge:i("95538"),
name:'Visa'},

mc:
{image:i("95521"),
imageLarge:i("95522"),
name:'MasterCard'},

disc:
{image:i("95512"),
imageLarge:i("95513"),
name:'Discover'},

jcb:
{image:i("95518"),
imageLarge:i("95519"),
name:'JCB'},

amex:
{image:i("95501"),
imageLarge:i("95502"),
name:'American Express'},

unknown:
{image:i("26967"),
imageLarge:i("26967"),
name:h._(["Unknown Card Type","9d8de6043d34b44fa6630afbbdcc969d"])}};




function k(l){
this.setCredentialId(l[c('CreditCardFormParam').CREDENTIAL_ID]);
this.setCardType(l[c('CreditCardFormParam').CARD_TYPE]);
this.setCreditCardNumber(l[c('CreditCardFormParam').CARD_NUMBER]);
this.setSelected(l.selected);
this.setZipCode(l[c('CreditCardFormParam').ZIP]);
this.setCSC(l[c('CreditCardFormParam').CSC]);
this.setExp(l[c('CreditCardFormParam').CARD_EXPIRATION]);
this.setIsPreset(l.isPreset);
this.setIsVerified(l.isVerified);
this.setIsMobileVerified(l.isMobileVerified);
this.setIsPersonalTransferEligible(l.isPersonalTransferEligible);
this.setCategory(l.category);}
k.prototype.




getCreditCardNumber=function(){
return this[c('CreditCardFormParam').CARD_NUMBER];};
k.prototype.

setCreditCardNumber=function(l){
l=l.replace(/ /g,'');

this.setCardProviderProps
(this[c('CreditCardFormParam').CARD_TYPE],
l);


l=l.substr(l.length-4);
this[c('CreditCardFormParam').CARD_NUMBER]=l;};
k.prototype.

setCardProviderProps=function(l,m){
var n=this.$P2PCreditCard_getShortName
(l,
m);


if(j[n]){
this.setImage(j[n].image);
this.setImageLarge(j[n].imageLarge);
this.setName(j[n].name);}};

k.prototype.




getExp=function(){
return this[c('CreditCardFormParam').CARD_EXPIRATION];};
k.prototype.




getExpFormatted=function(){
var l=this[c('CreditCardFormParam').CARD_EXPIRATION];

return l?l[c('CreditCardFormParam').MONTH]+'/'+
l[c('CreditCardFormParam').YEAR]:'';};
k.prototype.




getExpFormattedShort=function(){
var l=this[c('CreditCardFormParam').CARD_EXPIRATION],
m='';

if(l&&
l[c('CreditCardFormParam').MONTH]&&
l[c('CreditCardFormParam').YEAR]){
m=l[c('CreditCardFormParam').MONTH]+'/';

if(l[c('CreditCardFormParam').YEAR].length===4){
m+=l[c('CreditCardFormParam').YEAR].substr(2);}else 

m+=l[c('CreditCardFormParam').YEAR];}



return m;};
k.prototype.

setExp=function(l){
if(!l)
return;

var m=void 0,
n=void 0,
o={};
o[c('CreditCardFormParam').MONTH]=l[c('CreditCardFormParam').MONTH];
o[c('CreditCardFormParam').YEAR]=l[c('CreditCardFormParam').YEAR];




if(o[c('CreditCardFormParam').MONTH]&&
o[c('CreditCardFormParam').MONTH].length===1)

o[c('CreditCardFormParam').MONTH]=
'0'+o[c('CreditCardFormParam').MONTH];




if(o[c('CreditCardFormParam').YEAR]&&
o[c('CreditCardFormParam').YEAR].length===2){

m=new Date().getFullYear()+'';
n=m.substr(0,2);
o[c('CreditCardFormParam').YEAR]=
n+o[c('CreditCardFormParam').YEAR];}


this[c('CreditCardFormParam').CARD_EXPIRATION]=o;};
k.prototype.




getCSC=function(){
return this[c('CreditCardFormParam').CSC];};
k.prototype.

setCSC=function(l){
this[c('CreditCardFormParam').CSC]=l;};
k.prototype.




getZipCode=function(){
return this[c('CreditCardFormParam').ZIP];};
k.prototype.

setZipCode=function(l){
this[c('CreditCardFormParam').ZIP]=l;};
k.prototype.




getSelected=function(){
return this.$P2PCreditCard_selected;};
k.prototype.

setSelected=function(l){
this.$P2PCreditCard_selected=l;};
k.prototype.




getCardType=function(){
return this[c('CreditCardFormParam').CARD_TYPE];};
k.prototype.

setCardType=function(l){
this[c('CreditCardFormParam').CARD_TYPE]=l;
this.setCardProviderProps(l,this[c('CreditCardFormParam').CARD_NUMBER]);};
k.prototype.




getCredentialId=function(){
return this[c('CreditCardFormParam').CREDENTIAL_ID];};
k.prototype.

setCredentialId=function(l){
this[c('CreditCardFormParam').CREDENTIAL_ID]=l;};
k.prototype.




$P2PCreditCard_getShortName=function(l,m){
var n='default',
o=void 0,
p=void 0;



if(l){
o=
Object.keys(c('CreditCardTypeEnum')).filter
(function(q){
return c('CreditCardTypeEnum')[q]===l;})[

0];

n=this.$P2PCreditCard_translateToShortName(o);}else
if(m){
p=c('PaymentMethodUtils').getCardType(m);
if(p)
n=p.name;}



return n;};
k.prototype.




getImage=function(){
return this.$P2PCreditCard_image||j.unknown.image;};
k.prototype.

setImage=function(l){
this.$P2PCreditCard_image=l;};
k.prototype.




getImageLarge=function(){
return this.$P2PCreditCard_imageLarge||j.unknown.imageLarge;};
k.prototype.

setImageLarge=function(l){
this.$P2PCreditCard_imageLarge=l;};
k.prototype.




getName=function(){
return this.$P2PCreditCard_name||j.unknown.name;};
k.prototype.

setName=function(l){
this.$P2PCreditCard_name=l;};
k.prototype.




getIsPreset=function(){
return this.$P2PCreditCard_isPreset;};
k.prototype.

setIsPreset=function(l){
this.$P2PCreditCard_isPreset=l||false;};
k.prototype.




$P2PCreditCard_translateToShortName=function(l){
switch(l){
case 'VISA':
l='visa';
break;
case 'AMERICANEXPRESS':
l='amex';
break;
case 'MASTERCARD':
l='mc';
break;
case 'DISCOVER':
l='disc';
break;
case 'JCB':
l='jcb';
break;

default:l='unknown';
break;}


return l;};
k.prototype.




getCreditCardNumberFormatted=function(){
return '*'+this[c('CreditCardFormParam').CARD_NUMBER];};
k.prototype.



getDetailsFormatted=function(){

return (this.getName()+' '+this.getCreditCardNumberFormatted());};

k.prototype.




getCreditCardNumberMask=function(){
return '**** **** **** '+this[c('CreditCardFormParam').CARD_NUMBER];};
k.prototype.




getMaxCSCLength=function(){
var l=this.$P2PCreditCard_getShortName
(this[c('CreditCardFormParam').CARD_TYPE],
this[c('CreditCardFormParam').CARD_NUMBER]);


return l==='amex'?4:3;};
k.prototype.




getIsVerified=function(){
return this.$P2PCreditCard_isVerified||false;};
k.prototype.

setIsVerified=function(l){
this.$P2PCreditCard_isVerified=l;};
k.prototype.




getIsMobileVerified=function(){
return this.$P2PCreditCard_isMobileVerified||false;};
k.prototype.

setIsMobileVerified=function(l){
this.$P2PCreditCard_isMobileVerified=l;};
k.prototype.





getIsPersonalTransferEligible=function(){
return !!this.$P2PCreditCard_isPersonalTransferEligible;};
k.prototype.

setIsPersonalTransferEligible=function(l){
this.$P2PCreditCard_isPersonalTransferEligible=l;};
k.prototype.





getCategory=function(){
return this.$P2PCreditCard_category;};
k.prototype.

setCategory=function(l){
this.$P2PCreditCard_category=l;};
k.prototype.





getCategoryName=function(){
switch(this.$P2PCreditCard_category){
case c('P2PPaymentMethodCategory').DEBIT_CARD:
return h._(["Debit","a934ae335ad9aa0ab1f8af81076fa387"]);
case c('P2PPaymentMethodCategory').CREDIT_CARD:
return h._(["Credit","71d9472b53693973c86d0e529d277372"]);
case c('P2PPaymentMethodCategory').PREPAID_CARD:
return h._(["Prepaid","25efb6b588ee09987a6decab49da08c3"]);

default:return null;}};

k.prototype.




isExpired=function(){
var l=this.getExp();
if(!l)
return false;

var m=l.month,n=l.year,
o=new Date(),

p=o.getFullYear()+'',
q=o.getMonth()+1+'';

q=q.length===1?'0'+q:q;

return n<p||p===n&&m<q;};



f.exports=k;}),null);

/** js/p2p/stores/P2PTransferStore.js */






__d('P2PTransferStore',['Arbiter','P2PActionConstants','ChannelConstants','CurrentUser','CreditCardFormParam','EventEmitter','ImmutableObject','P2PActions','P2PAPI','P2PChannelType','P2PCreditCard','P2PDispatcher','P2PGKValues','P2PNUXRendererUtils','P2PTransferParam','P2PTransferStatus','Set','MercuryThreadInformer'],(function a(b,c,d,e,f,g){

'use strict';var h,i,


















j=c('MercuryThreadInformer').get(),

k=false,
l=void 0,
m=[],
n=void 0,

o={},
p=false,
q=false,
r=new (c('Set'))(),
s=false;





function t(w,x){
if(x)
o[x]=new (c('ImmutableObject'))(w);}





function u(w,x){
if(x)
o[x]={error:w};}

h=babelHelpers.inherits

(v,c('EventEmitter'));i=h&&h.prototype;
function v(){
i.constructor.call(this);
c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType
(c('P2PChannelType').TRANSFER_STATUS_CHANGED),

this.handleChannelTransferStatusChanged.bind(this));



j.subscribe
('messages-received',
this.handleMessageReceived.bind(this));


c('P2PDispatcher').register(this.onEventDispatched.bind(this));}
v.prototype.

onEventDispatched=function(w){
var x=w.data,
y=w.type;

switch(y){
case c('P2PActionConstants').TRANSFERS_UPDATED:
this.handleTransfersUpdated(x);
this.emit('change');
break;
case c('P2PActionConstants').TRANSFERS_UPDATED_ERROR:
this.handleTransfersUpdatedError(x);
this.emit('change');
break;
case c('P2PActionConstants').NUX_TRANSFERS_UPDATED:
this.handleNUXTransfersUpdated(x);
this.emit('change');
break;
case c('P2PActionConstants').TRANSFER_ADDED:
this.handleTransferAdded(x);
this.emit('change');
break;
case c('P2PActionConstants').TRANSFER_UPDATED:
this.handleTransferUpdated(x);
this.emit('change');
break;
case c('P2PActionConstants').TRANSFER_ACCEPTED:
this.handleTransferAccepted();
this.emit('change');
break;
case c('P2PActionConstants').TRANSFER_DECLINED:
this.handleTransferDeclined(x);
this.emit('change');
break;
case c('P2PActionConstants').EXTENSIVE_TRANSFER_DETAILS_UPDATED:
this.handleTransferWithExtensiveDetails(x);
this.emit('change');
break;}};

v.prototype.

getAsyncRequestState=function(){
return o;};
v.prototype.


handleTransfersUpdated=function(w){
n=null;
p=true;

var x=[],
y=w.map(function(aa){
var ba={},
ca=this.getTransferByID
(aa[c('P2PTransferParam').TRANSFER_ID]),

da={};

if(aa.creditCard){
ba[c('CreditCardFormParam').CREDENTIAL_ID]=
aa.creditCard[c('CreditCardFormParam').CREDENTIAL_ID];
ba[c('CreditCardFormParam').CARD_NUMBER]=
aa.creditCard[c('CreditCardFormParam').CARD_NUMBER];
ba[c('CreditCardFormParam').CARD_TYPE]=
aa.creditCard[c('CreditCardFormParam').CARD_TYPE];

aa.creditCard=new (c('P2PCreditCard'))(ba);}


if(ca)
for(var ea in ca)
da[ea]=aa[ea]!==null?
aa[ea]:
ca[ea];


x.push(aa[c('P2PTransferParam').TRANSFER_ID]);
return new (c('ImmutableObject'))(aa,da);}.
bind(this)),



z=m.filter(function(aa){
return x.indexOf
(aa[c('P2PTransferParam').TRANSFER_ID])===
-1;});



m=y.concat(z);
m=m.sort(function(aa,ba){
return ba.creationTime-aa.creationTime;});};

v.prototype.


handleTransfersUpdatedError=function(w){
n=w.error;
u(w.requestID,w.error);};
v.prototype.

handleNUXTransfersUpdated=function(w){
if(!p)
this.handleTransfersUpdated(w);};

v.prototype.


handleTransferAdded=function(w){
var x=null;

t(w,w.requestID);

if(w&&w.sender&&w.sender.id===c('CurrentUser').getID())
s=true;


x=m.filter(function(y){

return (y[c('P2PTransferParam').TRANSFER_ID]===
w[c('P2PTransferParam').TRANSFER_ID]);})[

0];

if(x)
return;


m.push(new (c('ImmutableObject'))(w));
m=m.sort(function(y,z){
return z.creationTime-y.creationTime;});};

v.prototype.


handleTransferAddedError=function(w){
u(w.requestID,w.errors);};
v.prototype.

handleChannelTransferStatusChanged=function(w,x){
x=x.obj;

c('P2PActions').transferUpdated(x);};
v.prototype.

handleMessageReceived=function(w,x){
for(var y in x)
if(Object.prototype.hasOwnProperty.call(x,y)){
var z=x[y];
for(var aa=0;aa<z.length;aa++)
if(z[aa].attachments&&z[aa].attachments.length){
var ba=
c('P2PNUXRendererUtils').getTransferFromMessage
(z[aa]);


if(ba){



if(!this.hasReceived()&&
ba.receiver.id===c('CurrentUser').getID())

c('P2PAPI').getBannerStates();

c('P2PActions').transferAdded(ba);
return;}}}};





v.prototype.


handleTransferUpdated=function(w){
for(var x=0,y=m.length;x<y;x++)

if(m[x][c('P2PTransferParam').TRANSFER_ID]===
w[c('P2PTransferParam').TRANSFER_ID])

m[x]=c('ImmutableObject').set(m[x],w);};


v.prototype.


handleTransferAccepted=function(){
var w=void 0;
for(var x=0,y=m.length;x<y;x++)

if(m[x][c('P2PTransferParam').STATUS]===
c('P2PTransferStatus').PENDING_RECIPIENT_NUX){

w={};
w[c('P2PTransferParam').STATUS]=c('P2PTransferStatus').COMPLETED;
m[x]=c('ImmutableObject').set(m[x],w);}



q=true;};
v.prototype.


handleTransferDeclined=function(w){
var x=void 0;
for(var y=0,z=m.length;y<z;y++)

if(m[y][c('P2PTransferParam').TRANSFER_ID]===
w[c('P2PTransferParam').TRANSFER_ID]&&
m[y][c('P2PTransferParam').STATUS]===
c('P2PTransferStatus').PENDING_RECIPIENT_NUX){

x={};
x[c('P2PTransferParam').STATUS]=c('P2PTransferStatus').CANCELED_DECLINED;
m[y]=c('ImmutableObject').set(m[y],x);
break;}};


v.prototype.


handleTransferUpdatedError=function(w){
u(w.requestID,w.errors);};
v.prototype.

getTransferByID=function(w){
return m.filter(function(x){
return w===x[c('P2PTransferParam').TRANSFER_ID];})[
0];};
v.prototype.

getAll=function(w){
if(!k){
k=true;
c('P2PAPI').getTransactions(w);}


return m;};
v.prototype.

getNUXTransfer=function(){
var w=m.filter(function(x){
return c('P2PNUXRendererUtils').isRecipientActionableStatus(x);})[
0];

if(!w&&!l&&!k){
l=true;
c('P2PAPI').getNUXTransactions();}


return w;};
v.prototype.

hasTransfers=function(){
return m.length>0;};
v.prototype.

hasAccepted=function(){
return q;};
v.prototype.

hasReceivedFromSender=function(w){
for(var x=0,y=m.length;x<y;x++)
if(m[x].sender.id===w)
return true;


return false;};
v.prototype.

hasReceived=function(){
for(var w=0,x=m.length;w<x;w++)
if(m[w].receiver.id===c('CurrentUser').getID())
return true;


return false;};
v.prototype.

getTransferFetchError=function(){
return n;};
v.prototype.

getTransferWithExtensiveDetailsByID=function(w){

if(!r.has(w)){
r.add(w);
c('P2PAPI').getExtensiveTransferDetailsByID(w);}};

v.prototype.

handleTransferWithExtensiveDetails=function(w){
if(this.getTransferByID(w.transfer_id)){
this.handleTransferUpdated(w);}else 

this.handleTransferAdded(w);};

v.prototype.

getAllLocal=function(){
return m;};
v.prototype.

hasSentDuringSession=function(){
return s;};
v.prototype.

shouldShowSenderNUX=function(){

return (!c('P2PGKValues').P2PUserAddedCredentialBefore&&
!this.hasSentDuringSession());};




f.exports=new v();}),null);
