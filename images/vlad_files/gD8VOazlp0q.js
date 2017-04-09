if (self.CavalryLogger) { CavalryLogger.start_js(["t7tSJ"]); }

/** __static_js_modules__/irisprotocolmessagelifetime.js */




__d("IrisProtocolMessageLifetime",[],(function a(b,c,d,e,f,g){

f.exports={TTL_OFF:0,TTL_ON_UNKNOWN:1,TTL_30SECONDS:30000,TTL_1MINUTE:60000,TTL_3MINUTES:180000,TTL_5MINUTES:300000,TTL_10MINUTES:600000,TTL_15MINUTES:900000,TTL_30MINUTES:1800000,TTL_1HOUR:3600000,TTL_2HOURS:7200000,TTL_4HOURS:14400000,TTL_8HOURS:28800000,TTL_12HOURS:43200000,TTL_24HOURS:86400000};}),

null);

/** __static_js_modules__/mercuryactionstatus.js */




__d("MercuryActionStatus",[],(function a(b,c,d,e,f,g){

f.exports={UNSENT:0,SUCCESS:1,UNCONFIRMED:3,FAILED_UNKNOWN_REASON:4,UNABLE_TO_CONFIRM:5,RESENT:6,RESENDING:7,ERROR:10};}),

null);

/** __static_js_modules__/mercuryactiontype.js */




__d("MercuryActionType",[],(function a(b,c,d,e,f,g){

f.exports={LOG_MESSAGE:"ma-type:log-message",USER_GENERATED_MESSAGE:"ma-type:user-generated-message",ADD_GROUP_ADMINS:"ma-type:add_group_admins",REMOVE_GROUP_ADMINS:"ma-type:remove_group_admins",CHANGE_READ_STATUS:"ma-type:change_read_status",MARK_THREAD_SEEN:"ma-type:mark_thread_seen",CHANGE_MUTE_SETTINGS:"ma-type:change-mute-settings",SEND_MESSAGE:"ma-type:send-message",DELETE_MESSAGES:"ma-type:delete-messages",DELETE_THREAD:"ma-type:delete-thread",UPDATE_SNIPPET:"ma-type:update-snippet",CHANGE_ARCHIVED_STATUS:"ma-type:change-archived-status",CHANGE_FOLDER:"ma-type:change-folder",ADD_PARTICIPANTS:"ma-type:add-participants",CANCEL_ATTACHMENT_PLACEHOLDER:"ma-type:cancel-attachment-placeholder",CONFIRM_ATTACHMENT_PLACEHOLDER:"ma-type:confirm-attachment-placeholder",CHANGE_FLAG:"ma-type:change_flag",MOVE_PENDING_TO_INBOX:"ma-type:move_pending_to_inbox",CREATE_PAGE_ADMIN_NOTE:"ma-type:create-page-admin-note",REPLACE_MESSAGE:"ma-type:replace-message",UPDATE_CUSTOM_LIKE:"ma-type:update_custom_like",UNWRAP_MESSAGE:"ma-type:unwrap-message",JOINABLE_MODE:"ma-type:joinable-mode",APPROVAL_MODE:"ma-type:approval-mode",APPROVAL_QUEUE:"ma-type:approval-queue",IS_PIN_PROTECTED:"ma-type:is_pin_protected",REACTION_UPDATE:"ma-type:reaction-update",UPDATE_RTC_CALL_DATA:"ma-type:update-rtc-call-data"};}),

null);

/** __static_js_modules__/mercuryapiargssource.js */




__d("MercuryAPIArgsSource",[],(function a(b,c,d,e,f,g){

f.exports={CHAT:"chat",JEWEL:"jewel",MERCURY:"mercury",MERCURYSYNC:"mercury_sync",WEBMESSENGER:"web_messenger",MESSENGER:"messenger"};}),

null);

/** __static_js_modules__/mercuryattachmentcontenttype.js */




__d("MercuryAttachmentContentType",[],(function a(b,c,d,e,f,g){

f.exports={PHOTO:"attach:image",VIDEO:"attach:video",MUSIC:"attach:music",VOICE:"attach:voice",TEXT:"attach:text",MSWORD:"attach:ms:word",MSXLS:"attach:ms:xls",MSPPT:"attach:ms:ppt",ORION:"attach:orion",SHOERACK_INVITATION:"attach:shoerackinvite",UNKNOWN:"attach:unknown"};}),

null);

/** __static_js_modules__/mercuryaudiotype.js */




__d("MercuryAudioType",[],(function a(b,c,d,e,f,g){

f.exports={AudioClip:"fb_voice_message",VoiceMessageWithTranscript:"fb_voice_message_with_transcript"};}),

null);

/** __static_js_modules__/mercuryerrortype.js */




__d("MercuryErrorType",[],(function a(b,c,d,e,f,g){

f.exports={SERVER:1,TRANSPORT:2,TIMEOUT:3};}),

null);

/** __static_js_modules__/mercuryglobalactiontype.js */




__d("MercuryGlobalActionType",[],(function a(b,c,d,e,f,g){

f.exports={MARK_ALL_READ:"mga-type:mark-all-read",MARK_ALL_SEEN:"mga-type:mark-all-seen"};}),

null);

/** __static_js_modules__/mercurylogmessagetype.js */




__d("MercuryLogMessageType",[],(function a(b,c,d,e,f,g){

f.exports={SUBSCRIBE:"log:subscribe",UNSUBSCRIBE:"log:unsubscribe",VIDEO_CALL:"log:video-call",PHONE_CALL:"log:phone-call",THREAD_NAME:"log:thread-name",THREAD_IMAGE:"log:thread-image",SERVER_ERROR:"log:error-msg",LIVE_LISTEN:"log:live-listen",WALLPAPER:"log:wallpaper",ORION:"log:orion",SWITCH_TO_WORK:"log:switch",PAGE_REPLY:"log:page-reply",GENERIC_ADMIN_TEXT:"log:generic-admin-text"};}),

null);

/** __static_js_modules__/mercurypayloadsource.js */




__d("MercuryPayloadSource",[],(function a(b,c,d,e,f,g){

f.exports={UNKNOWN:"unknown",CLIENT_CHANNEL_MESSAGE:"client_channel_message",CLIENT_SEND_MESSAGE:"client_send_message",CLIENT_CHANGE_ARCHIVED_STATUS:"client_change-archived_status",CLIENT_CHANGE_FOLDER:"client_change_folder",CLIENT_CHANGE_MUTE_SETTINGS:"client_change_mute_settings",CLIENT_CHANGE_READ_STATUS:"client_change_read_status",CLIENT_CHANGE_CUSTOM_LIKE:"client_change_custom_like",CLIENT_MARK_THREAD_SEEN:"client_mark_thread_seen",CLIENT_ADD_PARTICIPANTS:"client_add_participants",CLIENT_FETCH_PARTICIPANTS:"client_fetch_participants",CLIENT_DELETE_MESSAGES:"client_delete_messages",CLIENT_DELETE_THREAD:"client_delete_thread",CLIENT_UPDATE_SNIPPET:"client_update_snippet",CLIENT_HANDLE_ERROR:"client_handle_error",CLIENT_CHANGE_FLAG:"client_change_flag",CLIENT_MOVE_PENDING_TO_INBOX:"client_move_pending_to_inbox",CLIENT_CREATE_PAGE_ADMIN_NOTE:"client_create_page_admin_note",CLIENT_UNWRAP_MESSAGE:"client_unwrap_message",SERVER_INITIAL_DATA:"server_initial_data",SERVER_SEND_MESSAGE:"server_send_message",SERVER_CHANGE_ARCHIVED_STATUS:"server_change_archived_status",SERVER_CHANGE_READ_STATUS:"server_change_read_status",SERVER_MARK_FOLDER_READ:"server_mark_folder_read",SERVER_MARK_SEEN:"server_mark_seen",SERVER_FETCH_PARTICIPANTS:"server_fetch_participants",SERVER_FETCH_THREAD_INFO:"server_fetch_thread_info",SERVER_FETCH_THREADLIST_INFO:"server_fetch_threadlist_info",SERVER_STANDALONE_NOTIFICATIONS:"server_standalone_notifications",SERVER_THREAD_SYNC:"server_thread_sync",SERVER_TAB_PRESENCE:"server_tab_presence",SERVER_UNREAD_THREADS:"server_unread_threads",SERVER_UNSEEN_THREADS:"server_unseen_threads",SERVER_SEARCH:"server_search",SERVER_CHANGE_FLAG:"server_change_flag",SERVER_INVALIDATE_THREAD_STATE:"server_invalidate_thread_state",SERVER_INVALIDATE_GLOBAL_STATE:"server_invalidate_global_state"};}),

null);

/** __static_js_modules__/mercurysourcetype.js */




__d("MercurySourceType",[],(function a(b,c,d,e,f,g){

f.exports={CHAT_ORCA:"source:chat:orca",CHAT_IPHONE:"source:chat:iphone",CHAT_JABBER:"source:chat:jabber",CHAT_MEEBO:"source:chat:meebo",CHAT_WEB:"source:chat:web",CHAT_TEST:"source:chat:test",CHAT_FORWARD_DIALOG:"source:chat:forward",CHAT:"source:chat",CONTACT_ADD_MUTATION:"source:contact_add:graphql_mutation",CONTACT_ADD_CYMK:"source:contact_add:cymk_suggestion",EMAIL:"source:email",EVENT_MESSAGE_BLAST:"source:event_message_blast",EVENT_REMINDERS:"source:event_reminders",FUNDRAISER_MESSAGE_BLAST:"source:fundraiser_message_blast",GENERIC_ADMIN_TEXT:"source:generic_admin_text",GIGABOXX_API:"source:gigaboxx:api",GIGABOXX_BLAST:"source:gigaboxx:blast",GIGABOXX_EMAIL_REPLY:"source:gigaboxx:emailreply",GIGABOXX_MOBILE:"source:gigaboxx:mobile",GIGABOXX_WAP:"source:gigaboxx:wap",GIGABOXX_WEB:"source:gigaboxx:web",INVITE:"source:invite",LEIA:"source:leia",MESSENGER_WEB:"source:messenger:web",MESSENGER_WEB_SEARCH:"source:messenger:web_search",SAM_UFI:"source:sam:ufi",SHARE_DIALOG:"source:share:dialog",SEND_PLUGIN:"source:sendplugin",SMS:"source:sms",TEST:"source:test",TITAN_WAP:"source:titan:wap",TITAN_M_BASIC:"source:titan:m_basic",TITAN_M_FREE:"source:titan:m_free_basic",TITAN_M_JAPAN:"source:titan:m_japan",TITAN_M_MINI:"source:titan:m_mini",TITAN_M_TOUCH:"source:titan:m_touch",TITAN_M_APP:"source:titan:m_app",TITAN_M_TABLET:"source:titan:m_tablet",TITAN_M_ZERO:"source:titan:m_zero",TITAN_M_TALK:"source:titan:m_talk",TITAN_WEB:"source:titan:web",TITAN_FACEWEB_ANDROID:"source:titan:faceweb_android",TITAN_FACEWEB_BUFFY:"source:titan:faceweb_buffy",TITAN_FACEWEB_IPAD:"source:titan:faceweb_ipad",TITAN_FACEWEB_IPHONE:"source:titan:faceweb_iphone",TITAN_FACEWEB_UNKNOWN:"source:titan:faceweb_unknown",TITAN_API:"source:titan:api",TITAN_API_MOBILE:"source:titan:api_mobile",TITAN_ORCA:"source:titan:orca",TITAN_EMAIL_REPLY:"source:titan:emailreply",MOBILE:"source:mobile",PAGE_PLATFORM_API:"source:page_platform_api",UNKNOWN:"source:unknown",WEB:"source:web",HELPCENTER:"source:helpcenter",NEW_SHARE_DIALOG:"source:share:dialog:new",PAID_PROMOTION:"source:paid_promotion",BUFFY_SMS:"source:buffy:sms",WEBRTC_MOBILE:"source:webrtc:mobile",MESSENGER_COMMERCE:"source:messenger:commerce",MESSENGER_BOT:"source:bot",MESSENGER_EMPLOYEE_ONLY_BOT:"source:bot:employee_only",MESSENGER_OMNIM:"source:messenger:omnim",PAGES_PRIVATE_REPLY:"source:pages:private_reply",MESSENGER_FORWARD_DIALOG:"source:messenger:forward",MESSENGER_AD:"source:messenger:ad",MARKETPLACE:"source:marketplace",MESSENGER_LEAD_GEN:"source:messenger:lead_gen",PAGES_MESSAGE_SHORTLINK:"source:pages:message_shortlink",STICKER_SUBSCRIBE:"source:messenger:sticker_subscribe",PHOTO_TAG:"source:messenger:photo_tag",INTERNAL_TEST_PENDING:"source:internal:test_pending",JOB_SEARCH_APPLICATION:"source:job_search:application",MESSENGER_JOINABLE_LINK:"source:messenger:joinable_link",MESSENGER_SMS_BRIDGE_CONVERT:"source:messenger:sms_bridge_conversion",TINCAN_ORCA:"source:tincan:orca",TINCAN_IOS:"source:tincan:ios",TINCAN_UNKNOWN:"source:tincan:unknown",FACEBOOK_GROUPS_CHANNELS:"source:groups:channels",GROUP_COMMERCE:"source:group_commerce",INTERNAL_TOOL:"source:internal:tool",PAGES_PLATFORM:"source:pages:platform",PAGES_RECOMMENDATION:"source:pages:recommendation",FRIENDING_ADMIN_BUMP:"source:messenger_growth:friending_admin_bump",NEW_MESSENGER_USER_ADMIN_BUMP:"source:messenger_growth:new_messenger_user_admin_bump"};}),

null);

/** __static_js_modules__/mercurysynctopictype.js */




__d("MercurySyncTopicType",[],(function a(b,c,d,e,f,g){

f.exports={DELTA:"delta",DELTAFLOW:"deltaflow",DELTAFLOWREJECT:"deltaflowreject"};}),

null);

/** __static_js_modules__/messaginggenericadmintexttype.js */




__d("MessagingGenericAdminTextType",[],(function a(b,c,d,e,f,g){

f.exports={MADE_POLL_VOTE:"made_poll_vote",GROUP_POLL:"group_poll",CONFIRM_FRIEND_REQUEST:"confirm_friend_request",PHONE_CONTACT_UPLOAD:"phone_contact_upload",ACCEPT_PENDING_THREAD:"accept_pending_thread",RAMP_UP_WELCOME_MESSAGE:"ramp_up_welcome_message",CHANGE_THREAD_THEME:"change_thread_theme",CHANGE_THREAD_ICON:"change_thread_icon",GROUP_THREAD_CREATED:"group_thread_created",THREAD_EPHEMERAL_SEND_MODE:"thread_ephemeral_send_mode",INVITE_ACCEPTED:"invite_accepted",MESSENGER_INVITE_SENT:"messenger_invite_sent",TURN_ON_PUSH:"turn_on_push",JOURNEY_PROMPT_COLOR:"journey_prompt_color",JOURNEY_PROMPT_LIKE:"journey_prompt_like",JOURNEY_PROMPT_NICKNAME:"journey_prompt_nickname",JOURNEY_PROMPT_SETUP:"journey_prompt_setup",CHANGE_THREAD_NICKNAME:"change_thread_nickname",BOT_THREAD_SUBSCRIPTION:"bot_thread_subscription",RTC_CALL_LOG:"rtc_call_log",RTC_INSTANT_VIDEO_LIFECYCLE:"rtc_instant_video_lifecycle",JOURNEY_PROMPT_BOT:"journey_prompt_bot",RIDE_ORDERED_MESSAGE:"ride_ordered_message",DESTINATION_ETA_MESSAGE:"destination_eta_message",RIDE_ARRIVED_MESSAGE:"ride_arrived_message",JOURNEY_PROMPT_NEW_SETUP:"journey_prompt_new_setup",LIGHTWEIGHT_EVENT_CREATE:"lightweight_event_create",LIGHTWEIGHT_EVENT_DELETE:"lightweight_event_delete",LIGHTWEIGHT_EVENT_NOTIFY:"lightweight_event_notify",LIGHTWEIGHT_EVENT_NOTIFY_BEFORE_EVENT:"lightweight_event_notify_before_event",LIGHTWEIGHT_EVENT_RSVP:"lightweight_event_rsvp",LIGHTWEIGHT_EVENT_UPDATE:"lightweight_event_update",LIGHTWEIGHT_EVENT_UPDATE_LOCATION:"lightweight_event_update_location",LIGHTWEIGHT_EVENT_UPDATE_TIME:"lightweight_event_update_time",LIGHTWEIGHT_EVENT_UPDATE_TITLE:"lightweight_event_update_title",SAFETY_LOCATION_REQUEST_SENT:"safety_location_request_sent",SAFETY_LOCATION_REQUEST_RESPONDED:"safety_location_request_responded",SAFETY_LOCATION_REQUEST_DENIED:"safety_location_request_denied",AD_MANAGE_MESSAGE:"ad_manage_message",AD_REPLY_MESSAGE:"ad_reply_message",TAGGED_PHOTO:"tagged_photo",GAME_SCORE:"game_score",INSTANT_GAME_UPDATE:"instant_game_update",MEDIA_SUBSCRIPTION_MANAGE:"media_subscription_manage",M_AI_SURVEY:"m_ai_survey",PHONE_NUMBER_LOOKUP_NOTICE:"phone_number_lookup_notice",MESSENGER_PRECHECKED_PLUGIN:"messenger_prechecked_plugin",ADD_CONTACT:"add_contact",PRODUCT_INVOICE_RECEIPT_REJECTED:"product_invoice_receipt_rejected",PRODUCT_INVOICE_PAID:"product_invoice_paid",PRODUCT_INVOICE_VOIDED:"product_invoice_voided",PRODUCT_INVOICE_SHIPPED:"product_invoice_shipped",PRODUCT_INVOICE_PAYMENT_EXPIRED:"product_invoice_payment_expired",PRODUCT_INVOICE_RECEIPT_UPLOADED:"product_invoice_receipt_uploaded",CHANGE_JOINABLE_SETTING:"change_joinable_setting",CHANGE_THREAD_ADMINS:"change_thread_admins",CHANGE_THREAD_APPROVAL_MODE:"change_thread_approval_mode",CAPY_SESSION_BEGIN:"capy_session_begin",CAPY_SESSION_END:"capy_session_end",CAPY_AGENT_JOIN:"capy_agent_join",GROUP_SMS_PARTICIPANT_JOINED:"group_sms_participant_joined",GROUP_SMS_PARTICIPANT_CAPPED:"group_sms_participant_capped",SMS_PHONE_NUMBER_CHECK:"sms_phone_number_check",MESSENGER_BOT_REVIEW_SENT:"messenger_bot_review_sent",MESSENGER_CODE_SCAN:"messenger_code_scan",MN_ACCOUNT_LINKING_TEXT:"mn_account_linking_text",MN_ACCOUNT_UNLINKING_TEXT:"mn_account_unlinking_text",MN_ACCOUNT_FORCED_UNLINKING_TEXT:"mn_account_forced_unlinking_text",MN_REF_SEND_TEXT:"mn_ref_send_text",ADS_WELCOME_MSG:"ads_welcome_msg",THREAD_JOINABLE_PROMOTION_TEXT:"thread_joinable_promotion_text",PAGES_PLATFORM_REQUEST_TEXT:"pages_platform_request_text",MESSENGER_NEW_USER_GET_STARTED:"messenger_new_user_get_started",SMS_PHONE_NUMBER_TOGGLE:"sms_phone_number_toggle",PAGES_PLATFORM_CREATE_APPOINTMENT:"Pages_Platform_create_appointment",JOINABLE_GROUP_THREAD_CREATED:"joinable_group_thread_created",JOINABLE_ROOM_CREATED_WITH_CO_CREATORS:"joinable_room_created_with_co_creators",PAGES_PLATFORM_ACCEPT_APPOINTMENT:"pages_platform_accept_appointment",PAGES_PLATFORM_DECLINE_APPOINTMENT:"pages_platform_decline_appointment",PAGES_PLATFORM_USER_CANCEL:"pages_platform_user_cancel",PAGES_PLATFORM_ADMIN_CANCEL:"pages_platform_admin_cancel",MESSENGER_OMNIM_CREATE_FLOW:"messenger_omnim_create_flow",MESSENGER_OMNIM_UPDATE_FLOW:"messenger_omnim_update_flow",MESSENGER_OMNIM_UPDATE_FLOW_STATE:"messenger_omnim_update_flow_state",MESSENGER_GROUP_DESCRITPION_UPDATE:"messenger_group_description_update",MESSENGER_EXTENSION_ADD_CART:"messenger_extension_add_cart",MESSENGER_EXTENSION_ADD_FAVORITE:"messenger_extension_add_favorite",PAGES_PLATFORM_APPOINTMENT_REMINDER:"pages_platform_appointment_reminder",PAGES_PLATFORM_ADMIN_DECLINE:"pages_platform_admin_decline",POKE_RECEIVED:"poke_received",MESSENGER_STATION_SUBSCRIPTION:"messenger_station_subscription",MESSENGER_USER_ALSO_ON_MESSENGER:"messenger_user_also_on_messenger",MESSENGER_INBOX2_BIRTHDAY_BUMP:"messenger_inbox2_birthday_bump",STARTED_SHARING_VIDEO:"started_sharing_video",LIVE_VIDEO_CHAT:"live_video_chat",PARTICIPANT_JOINED_GROUP_CALL:"participant_joined_group_call",MESSENGER_ONLY_PHONE_JOINED_WITH_NEW_ACCOUNT:"messenger_only_phone_joined_with_new_account",PAGES_COMMERCE_PAYMENT_ENABLED:"pages_commerce_payment_enabled",GROUP_PAYMENT_REQUEST:"group_payment_request",P2P_CALL_ESCALATED_TO_GROUP_CALL:"p2p_call_escalated_to_group_call",INVITED_TO_ESCALATED_P2P_CALL:"invited_to_escalated_p2p_call"};}),

null);

/** __static_js_modules__/messagingthreadaction.js */




__d("MessagingThreadAction",[],(function a(b,c,d,e,f,g){

f.exports={ACTION_INVALID:"ACTION_INVALID",ACTION_ARCHIVED:"ACTION_ARCHIVED",ACTION_UNARCHIVED:"ACTION_UNARCHIVED"};}),

null);

/** __static_js_modules__/messengerapprovalqueuetypes.js */




__d("MessengerApprovalQueueTypes",[],(function a(b,c,d,e,f,g){

f.exports={REQUESTED:"REQUESTED",REMOVED:"REMOVED"};}),

null);

/** __static_js_modules__/messengerthreadcannotreplyreason.js */




__d("MessengerThreadCannotReplyReason",[],(function a(b,c,d,e,f,g){

f.exports={BLOCKED:"blocked",COMPOSER_DISABLED_BOT:"composer_disabled_bot",HAS_EMAIL_PARTICIPANT:"has_email_participant",OBJECT_ORIGINATED:"object_originated",READ_ONLY:"read_only",VIEWER_NOT_SUBSCRIBED:"viewer_not_subscribed",RECIPIENTS_NOT_LOADABLE:"recipients_not_loadable",RECIPIENTS_UNAVAILABLE:"recipients_unavailable",RECIPIENTS_INVALID:"recipients_invalid",RECIPIENTS_INACTIVE_WORK_ACC:"recipients_inactive_work_account",MONTAGE_NOT_AUTHOR:"montage_not_author"};}),

null);

/** __static_js_modules__/messengerview.js */




__d("MessengerView",[],(function a(b,c,d,e,f,g){

f.exports={DETAIL:{COMPOSE:"detail\/compose",THREAD:"detail\/thread"},MASTER:{GROUPS:"master\/groups",PEOPLE:"master\/people",RECENT:"master\/recent",SUPPORT:"master\/support",SEARCH:"master\/search"}};}),

null);

/** __static_js_modules__/pagemessageenumtag.js */




__d("PageMessageEnumTag",[],(function a(b,c,d,e,f,g){

f.exports={FLAG:"flag",IMPORTANT:"important",LOW_VALUE:"low_value",SPAM_SPOOFING:"spam_spoofing",JOB_APPLICATION:"job_application",CONFIRMED_APPOINTMENT:"confirmed_appointment",PENDING_APPOINTMENT:"pending_appointment"};}),

null);

/** __static_js_modules__/pagesmessagingeventtype.js */




__d("PagesMessagingEventType",[],(function a(b,c,d,e,f,g){

f.exports={FLAG:1,CREATE_ADMIN_NOTE:2,PRIORITY_UPDATE:3};}),

null);

/** __static_js_modules__/photoresizemodeconst.js */




__d("PhotoResizeModeConst",[],(function a(b,c,d,e,f,g){

f.exports={CONTAIN:"s",COVER:"p"};}),

null);

/** js/events/event_reminders/EventReminderConstants.js */






__d('EventReminderConstants',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
{GOING:'GOING',
DECLINED:'DECLINED',
INVITED:'INVITED'},


i=
{NO_ERROR:'NO_ERROR',
PAST_TIME:'PAST_TIME',
AFTER_ONE_YEAR:'AFTER_ONE_YEAR'};








f.exports=
{GuestStates:h,
TimeErrorType:i};}),null);

/** js/logging/generated/MercurySyncHolesTypedLogger.js */





__d('MercurySyncHolesTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:MercurySyncHolesLoggerConfig',this.$MercurySyncHolesTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:MercurySyncHolesLoggerConfig',this.$MercurySyncHolesTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$MercurySyncHolesTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$MercurySyncHolesTypedLogger_data=babelHelpers['extends']({},
this.$MercurySyncHolesTypedLogger_data,
j);

return this;};
h.prototype.




setDifference=function(j){
this.$MercurySyncHolesTypedLogger_data.difference=j;
return this;};
h.prototype.




setSeqID=function(j){
this.$MercurySyncHolesTypedLogger_data.seq_id=j;
return this;};
h.prototype.




setTopicType=function(j){
this.$MercurySyncHolesTypedLogger_data.topic_type=j;
return this;};
h.prototype.




setVC=function(j){
this.$MercurySyncHolesTypedLogger_data.vc=j;
return this;};

















var i=
{difference:true,
seq_id:true,
topic_type:true,
vc:true};


f.exports=h;}),null);

/** js/mercury/MercuryMessageClientState.js */











__d('MercuryMessageClientState',[],(function a(b,c,d,e,f,g){
var h=
{DO_NOT_SEND_TO_SERVER:'do_not_send_to_server',
SEND_TO_SERVER:'send_to_server'};


f.exports=h;}),null);

/** js/mercury/clients/shared/EmojiLikeConstants.js */






__d('EmojiLikeConstants',['EmojiStaticConfig'],(function a(b,c,d,e,f,g){

'use strict';



var h=c('EmojiStaticConfig').sizeMap,

i=
{XSMALL:'xsmall',
SMALL:'small',
MEDIUM:'medium',
LARGE:'large'},


j=
{dp16:'xsmall',
dp32:'small',
dp64:'medium',
db64:'medium',
dp128:'large'},


k=
{PICKER:'picker',
HOT_LIKE:'hot_like'},


l=[983040],
m='hot_emoji_source',
n='hot_emoji_size',
o='emoji_like',
p='\uD83D\uDC4D',
q=[128077];

f.exports=
{FB_THUMBS_UP_EMOJI:l,
size:i,
sizeMap:h,
sizeMapTransfer:j,
source:k,
SOURCE_TAG_PREFIX:m,
TAG_PREFIX_NEW:n,
TAG_PREFIX_OLD:o,
THUMBS_UP_EMOJI:p,
THUMBS_UP_EMOJI_CODES:q};}),null);

/** js/mercury/models/MercuryDispatcher.js */








__d('MercuryDispatcher',['invariant','ArbiterMixin','LogHistory','MercuryActionType','MercuryPayloadSource','MercurySingletonProvider','MercuryThreadInformer','isEmpty','mixin'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,












k=c('LogHistory').getInstance('mercury_dispatcher');i=babelHelpers.inherits








(l,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;l.

getForFBID=function(n){
return m.getForFBID(n);};
l.

get=function(){
return m.get();};




function l(n){
j.constructor.call(this);
this.$MercuryDispatcher_fbid=n;}
l.prototype.

handleUpdate=function(n){
this.$MercuryDispatcher_maybeLogToLogHistory(n);


!!n.from_client!==!!n.preprocessed||h(0,
'one of from_client or preprocessed should be set but not both');




delete n.preprocessed;

if(!c('isEmpty')(n))
c('MercuryThreadInformer').getForFBID(this.$MercuryDispatcher_fbid).synchronizeInforms(function(){

if(n.payload_source===
c('MercuryPayloadSource').SERVER_INVALIDATE_GLOBAL_STATE)
this.inform('invalidate-global-state',{});


if(n.payload_source===
c('MercuryPayloadSource').SERVER_INVALIDATE_THREAD_STATE){
var o=n.threads&&
n.threads.length>0&&
n.threads[0]&&
n.threads[0].thread_id;
if(o)
this.inform('invalidate-thread-state',o);}






this.inform('update-thread-ids',n.newlyAddedClientIDs||{});

this.inform('update-participants',n);

this.inform('update-threads',n);



this.inform('update-unread',n);
this.inform('update-threadlist',n);

this.inform('update-messages',n);
this.inform('update-unseen',n);

this.inform('update-typing-state',n);

this.inform('update-delivery',n);
this.inform('update-roger',n.roger);
this.inform('update-blocked-users',n);
this.inform('fanta-payload',n);



this.inform('model-update-completed',null);}.
bind(this));};

l.prototype.

$MercuryDispatcher_maybeLogToLogHistory=function(n){
var o=n.payload_source;

if(o===c('MercuryPayloadSource').CLIENT_CHANGE_READ_STATUS||
o===c('MercuryPayloadSource').CLIENT_MARK_THREAD_SEEN)
return;


var p=
{from_client:n.from_client,
messages:null};


if(n.actions){




var q=n.actions.filter
(function(r){

return (r.action_type===c('MercuryActionType').USER_GENERATED_MESSAGE||
r.action_type===c('MercuryActionType').LOG_MESSAGE);}).


map
(function(r){

return {action_type:r.action_type,
other_user_fbid:r.other_user_fbid,
thread_fbid:r.thread_fbid,
message_id:r.message_id};});



if(q.length)
p.messages=q;}



k.debug('update:'+o,JSON.stringify(p));};



var m=new (c('MercurySingletonProvider'))(l);

f.exports=l;}),null);

/** js/mercury/utils/MercuryLocalIDs.js */






__d('MercuryLocalIDs',['PresenceUtil','randomInt'],(function a(b,c,d,e,f,g){

'use strict';




var h=




{generateMessageID:function j(k){
var l=k||Date.now(),
m=c('randomInt')(0,4294967295),
n=c('PresenceUtil').getSessionID();
return '<'+l+':'+m+'-'+n+'@mail.projektitan.com>';},





generateThreadID:function j(k){
return 'root:'+h.generateOfflineThreadingID(k);},





generateOfflineThreadingID:function j(k){
var l=k||Date.now(),
m=c('randomInt')(0,4294967295),

n=('0000000000000000000000'+m.toString(2)).slice(-22),
o=l.toString(2)+n;

return i(o.slice(-63));}};







function i(j){
var k='';
while(j!='0'){
var l=0,
m='';
for(var n=0;n<j.length;n++){
l=2*l+parseInt(j[n],10);
if(l>=10){
m+='1';
l-=10;}else 

m+='0';}


k=l.toString()+k;
j=m.slice(m.indexOf('1'));}

return k;}


f.exports=h;}),null);

/** js/mercury/utils/MercuryTagHelper.js */










__d('MercuryTagHelper',[],(function a(b,c,d,e,f,g){

'use strict';

var h=





{get:function i(j,k){
var l=j.find(function(m){return m.startsWith(k);});
return l&&l.substr(l.indexOf(':')+1);}};



f.exports=h;}),null);

/** js/mercury/clients/shared/EmojiLikeUtils.js */






__d('EmojiLikeUtils',['EmojiLikeConstants','EmoticonEmojiList','MercuryTagHelper'],(function a(b,c,d,e,f,g){

'use strict';







function h(n,o){
if(!n.tags){
n.tags=[i(o)];}else 

n.tags.push(i(o));

return n;}


function i(n){
var o=c('EmojiLikeConstants').TAG_PREFIX_NEW;
return o+':'+n;}


function j(n,o){
if(!n.tags){
n.tags=[k(o)];}else 

n.tags.push(k(o));

return n;}


function k(n){
return c('EmojiLikeConstants').SOURCE_TAG_PREFIX+':'+n;}


function l(n){
return m(n)!=null;}


function m(n){
if(!n.tags)
return null;


var o=
c('MercuryTagHelper').get(n.tags,c('EmojiLikeConstants').TAG_PREFIX_NEW);
if(o)
return o;

return c('MercuryTagHelper').get(n.tags,c('EmojiLikeConstants').TAG_PREFIX_OLD);}


f.exports=
{getEmojiSize:m,
isEmojiLike:l,
setEmojiSize:h,
setEmojiSource:j};}),null);

/** js/mercury/utils/MercuryAttachment.js */





__d('MercuryAttachment',['cx','EmojiLikeUtils','MercuryAttachmentContentType','MercuryAttachmentType','MercuryAudioType','Set','StoryAttachmentStyle'],(function a(b,c,d,e,f,g,h){

'use strict';










var i=function m(n){return n===Object(n);},

j="_1c_u",


k=new (c('Set'))
([c('MercuryAttachmentType').ANIMATED_IMAGE,
c('MercuryAttachmentType').PHOTO,
c('MercuryAttachmentType').VIDEO,
c('MercuryAttachmentType').THIRDPARTYSTICKER]),







l=





{getAttachIconClass:function m(n){
switch(n){
case c('MercuryAttachmentContentType').PHOTO:
return "_y2-";
case c('MercuryAttachmentContentType').VIDEO:
return "_y2_";
case c('MercuryAttachmentContentType').MUSIC:
return "_y30";
case c('MercuryAttachmentContentType').VOICE:
return "_y31";
case c('MercuryAttachmentContentType').TEXT:
return "_y32";
case c('MercuryAttachmentContentType').MSWORD:
return "_y33";
case c('MercuryAttachmentContentType').MSXLS:
return "_y34";
case c('MercuryAttachmentContentType').MSPPT:
return "_y35";}

return "_y36";},






getAttachIconClassByMime:function m(n){
if(n.startsWith('image')){
return "_y2-";}else
if(n.startsWith('video')){
return "_y2_";}else
if(n.startsWith('audio')){
return "_y30";}else
if(n.startsWith('text/plain')){
return "_y32";}else 

return "_y36";},






getAttachTypeByMime:function m(n){
if(n.startsWith('image')){
return c('MercuryAttachmentContentType').PHOTO;}else
if(n.startsWith('video')){
return c('MercuryAttachmentContentType').VIDEO;}else
if(n.startsWith('audio')){
return c('MercuryAttachmentContentType').MUSIC;}else
if(n.startsWith('text/plain')){
return c('MercuryAttachmentContentType').TEXT;}else 

return c('MercuryAttachmentContentType').UNKNOWN;},







convertRaw:function m(n){
var o=[];
for(var p=0;p<n.length;p++){
var q=n[p];


if(q.attach_type===c('MercuryAttachmentType').PHOTO){
o.push(q);}else


if(q.filename){
var r=l.getAttachTypeByMime(q.filetype),
s={};
s.attach_type=c('MercuryAttachmentType').FILE;
s.name=q.filename;
s.icon_type=r;
s.url='';
o.push(s);}}


return o;},





get:function m(n){
var o=[];

if(n.attachments){
o=n.attachments;}else
if(n.raw_attachments)
o=this.convertRaw(n.raw_attachments);


var p=c('EmojiLikeUtils').getEmojiSize(n);
if(p)
o=o.concat
([{attach_type:c('MercuryAttachmentType').EMOJI_LIKE,
size:p}]);




if(!(n.attachments&&n.attachments.length>0)){
if(n.sticker_id)
return o.concat
([{attach_type:c('MercuryAttachmentType').STICKER}]);


if(n.preview_attachments&&
n.preview_attachments.length>0)
return o.concat(n.preview_attachments);}



return o;},






resizeContain:function m(n,o){
var p=n.width/n.height,
q=o.width/o.height;

if(q<p){


return {width:Math.ceil(Math.min(n.height*q,o.width)),
height:Math.ceil(Math.min(n.height,o.height))};}else 




return {width:Math.ceil(Math.min(n.width,o.width)),
height:Math.ceil(Math.min(n.width/q,o.height))};},





isBubblePreferred:function m(n){
return this.isFileAttachment(n);},


isPhotoAttachment:function m(n){

return !!(n.attach_type==c('MercuryAttachmentType').PHOTO||
n.attach_type==c('MercuryAttachmentType').ANIMATED_IMAGE||
n.attach_type==c('MercuryAttachmentType').THIRDPARTYSTICKER||

n.attach_type==c('MercuryAttachmentType').FILE&&
n.preview_url);},




isPhotoGroupAttachment:function m(n){
return k.has(n.attach_type);},


isVideoAttachment:function m(n){
return n.attach_type==c('MercuryAttachmentType').VIDEO;},


isShareAttachment:function m(n){
return n.attach_type==c('MercuryAttachmentType').SHARE;},


isFileAttachment:function m(n){
return n.attach_type==c('MercuryAttachmentType').FILE;},


isErrorAttachment:function m(n){
return n.attach_type==c('MercuryAttachmentType').ERROR;},


isStickerAttachment:function m(n){
return n.attach_type==c('MercuryAttachmentType').STICKER;},


isEmojiLikeAttachment:function m(n){
return n.attach_type===c('MercuryAttachmentType').EMOJI_LIKE;},


isVoiceAttachment:function m(n){
if(!n.metadata)
return false;



return (n.metadata.type===c('MercuryAudioType').AudioClip||
n.metadata.type===c('MercuryAudioType').VoiceMessageWithTranscript);},



hasAttribution:function m(n){
return !!n.app_attribution;},


isSingleVideoAttachment:function m(n){
var o=this.get(n).
filter(i).
filter(function(p){
return (this.isVideoAttachment(p));}.bind(this));


return o.length===1;},


isSharedVideoAttachment:function m(n){
var o=
n.attach_type===c('MercuryAttachmentType').SHARE&&
n.share&&
n.share.subattachments&&
n.share.subattachments[0];
return !!(o&&
o.target&&
o.target.video_id);},



isGenieSharedVideoAttachment:function m(n){
return !!(n.attach_type===c('MercuryAttachmentType').SHARE&&
n.share&&
n.share.style_list.
indexOf(c('StoryAttachmentStyle').GENIE_MESSAGE)>-1&&
n.share.target&&
n.share.target.attachment&&
this.isSharedVideoAttachment(n.share.target.attachment));},



isSharedVideoAttachmentMessage:function m(n){
var o=this.
get(n).
filter(i).
filter(function(p){
return (this.isSharedVideoAttachment(p)||
this.isGenieSharedVideoAttachment(p));}.bind(this));

return o.length===1;},


getVideoElem:function m(n,o){
var p=
o.getMessageElement(n);
if(!p)
return null;

var q=p.getElementsByClassName(j);
return q&&q.length?
q[0]:
p;}};



f.exports=l;}),null);

/** js/mercury/renderers/MercuryDisplayTimeFilterMessageRenderer.js */





__d('MercuryDisplayTimeFilterMessageRenderer',['fbt'],(function a(b,c,d,e,f,g,h){

'use strict';



var i=
{renderFilteredContent:function j(k){
if(k.is_filtered_content_bh)
return h._(["This message was removed because it contains blocked or harmful links.","c26e3aa7a9b0dd8620a74c28ca816c83"]);








if(k.is_filtered_content_account)
return h._(["This message has been temporarily removed because the sender's account requires verification.","3aff2157eb40f66ffafb89c92c3b22f6"]);









if(k.is_filtered_content_quasar)
return h._(["This message was removed because it contains blocked or harmful content.","ab2f069dbf23c9446e1c81053f8571ed"]);









if(k.is_filtered_content_invalid_app)
return h._(["This message was removed because the app it's being sent from is blocked from sending messages.","5007ea7f52c23e97f637c5966157e792"]);









return h._(["This message has been temporarily removed because the sender's account requires verification, or it was identified as abusive.","90ace42df7adc0a5eb3eb61f921c9cda"]);}};











f.exports=i;}),null);

/** shared/mercury/renderers/MercuryGiftSnippetRenderer.js */






__d('MercuryGiftSnippetRenderer',['fbt'],(function a(b,c,d,e,f,g,h){

'use strict';



var i=
{renderText:function j
(k,
l){

return k?h._(["You sent a valentine.","7e29a301c0a2d9a08ab253c767bbc7b5"]):h._(["{name} sent a valentine.","fa2fbffa9d71d7b510292f5fa6307fa7"],[h.param




('name',l)]);}};





f.exports=i;}),null);

/** js/photos/modules/ImageSourceType.js */





__d('ImageSourceType',[],(function a(b,c,d,e,f,g){


var h=
{PROFILE_PICTURE:'profile_picture',
IMAGE:'image'};


f.exports=h;}),null);

/** js/photos/modules/ImageSourceRequest.js */



























__d('ImageSourceRequest',['CurrentUser','ImageSourceType','KeyedCallbackManager','PhotoResizeModeConst','MercuryServerDispatcher','arrayContains'],(function a(b,c,d,e,f,g){










function h(){'use strict';
this._request=
{fbid:null,
type:null,
width:null,
height:null,
resize_mode:null};

this._callback=null;}
h.prototype.




setFBID=function(l){'use strict';
this._request.fbid=l;
return this;};
h.prototype.










setType=function(l){'use strict';
if(!c('arrayContains')
([c('ImageSourceType').PROFILE_PICTURE,
c('ImageSourceType').IMAGE],
l))
throw new TypeError('ImageSourceRequest.setType: invalid type '+l);


this._request.type=l;
return this;};
h.prototype.






setDimensions=function(l,m){'use strict';
this._request.width=l;
this._request.height=m;
return this;};
h.prototype.















setResizeMode=function(l){'use strict';
if(!c('arrayContains')
([c('PhotoResizeModeConst').COVER,
c('PhotoResizeModeConst').CONTAIN],
l))
throw new TypeError
('ImageSourceRequest.setResizeMode: invalid resize mode '+l);



this._request.resize_mode=l;
return this;};
h.prototype.











setCallback=function(l){'use strict';
this._callback=l;
return this;};
h.prototype.






send=function(){'use strict';
if(!this._request.fbid||
!this._request.width||
!this._request.height||
!this._request.type||
!this._request.resize_mode||
!this._callback)
throw new Error('ImageSourceRequest: You must set all the fields');


var l=j(),
m=k(this._request);

l.executeOrEnqueue(m,this._callback);

if(l.getUnavailableResourcesFromRequest(m).length===1){
c('MercuryServerDispatcher').trySend
('/ajax/image_source.php',
{requests:[this._request]});

return true;}

return false;};




var i=null;

function j(){
if(i)
return i;


var l=new (c('KeyedCallbackManager'))();
i=l;

c('MercuryServerDispatcher').registerEndpoints
({'/ajax/image_source.php':
{request_user_id:c('CurrentUser').getID(),
mode:c('MercuryServerDispatcher').BATCH_DEFERRED_MULTI,

batch_function:function m(n,o){var p;
(p=n.requests).push.apply(p,o.requests);
return n;},


handler:function m(n,o){
var p=o.getData().requests;

for(var q=0;q<p.length;++q)
l.setResource
(k(p[q]),
n[q]);}}});






return l;}


function k(l){

return [l.fbid,l.type,
l.width,l.height,
l.resize_mode].
join('|');}


f.exports=h;}),null);

/** js/mercury/reliability/MercurySendErrorLogger.js */






__d('MercurySendErrorLogger',['Banzai','BanzaiLogger'],(function a(b,c,d,e,f,g){




var h=c('BanzaiLogger').create({retry:true}),
i=c('Banzai').isEnabled('mercury_send_error_logging'),

j=



{log:function k(l){
if(!i)
return;


var m=
{message_id:l.message_id,
timestamp_client:Date.now(),
error_type:l.error_data.type,
error_code:l.error_data.code,
error_description:l.error_data.description,
is_transient:l.error_data.is_transient};


h.log('MercurySendErrorLoggerConfig',m);}};



f.exports=j;}),null);

/** js/mercury/models/MercuryServerPayloadPreprocessor.js */





__d('MercuryServerPayloadPreprocessor',['invariant','MessengerEnvironment','MercuryIDs','MercuryConfig','MercuryActionStatus','MercuryActionType','MercuryAttachment','MercuryDispatcher','MercurySendErrorLogger','MercurySingletonProvider','MercuryThreadIDMap','URI'],(function a(b,c,d,e,f,g,h){

'use strict';























function i(k){
this.$MercuryServerPayloadPreprocessor_fbid=k;
this.$MercuryServerPayloadPreprocessor_threadIDMap=c('MercuryThreadIDMap').getForFBID(this.$MercuryServerPayloadPreprocessor_fbid);
this.$MercuryServerPayloadPreprocessor_dispatcher=c('MercuryDispatcher').getForFBID(this.$MercuryServerPayloadPreprocessor_fbid);}
i.

getForFBID=function(k){
return j.getForFBID(k);};
i.

get=function(){
return j.get();};
i.prototype.





handleUpdate=function(k){
var l={};
!k.from_client||h(0,'Trying to preprocess data from the client.');

(k.threads||[]).forEach(function(x){
this.$MercuryServerPayloadPreprocessor_convertThreadFBID(x,l);


var y=this.$MercuryServerPayloadPreprocessor_threadIDMap.getServerIDFromClientIDNow(x.thread_id);
e(['MercuryServerRequests'],function(z){
var aa=z.getForFBID(this.$MercuryServerPayloadPreprocessor_fbid);
aa.markThreadFetched(x.thread_id);
if(y)
aa.markThreadFetched(y);

aa.updateLastActionTimestamp(x.timestamp);}.
bind(this));}.
bind(this));


(k.ordered_threadlists||[]).forEach(function(x){
var y=x.thread_fbids||[];
y=y.concat(x.other_user_fbids||[]);
x.thread_ids=y.map
(function(z){return this.$MercuryServerPayloadPreprocessor_threadIDMap.getClientIDFromServerIDNow(z.toString());}.bind(this));}.

bind(this));


if(k.pinned_threads&&k.pinned_threads.thread_fbids)
k.pinned_threads.thread_fbids=k.pinned_threads.thread_fbids.map
(function(x){return this.$MercuryServerPayloadPreprocessor_threadIDMap.getClientIDFromServerIDNow(x);}.bind(this));




if(k.delivery_receipts){
var m={};
for(var n=k.delivery_receipts,o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var q;if(o){if(p>=n.length)break;q=n[p++];}else{p=n.next();if(p.done)break;q=p.value;}var r=q,
s=r.other_user_fbid?
c('MercuryIDs').getThreadIDFromUserID(r.other_user_fbid):
this.$MercuryServerPayloadPreprocessor_threadIDMap.getClientIDFromServerIDNow(r.thread_fbid);
if(s)
m[s]=r.time;}


k.delivery_receipts=m;}



k.actions=k.actions||[];
k.actions.forEach(function(x){
if(x.action_type===c('MercuryActionType').SEND_MESSAGE&&
x.status===c('MercuryActionStatus').ERROR)
c('MercurySendErrorLogger').log(x);


var y=null,
z=null;
if(x.other_user_fbid){
z=c('MercuryIDs').getThreadIDFromUserID(x.other_user_fbid);
y=x.other_user_fbid;}else
if(x.thread_fbid){
z=c('MercuryIDs').getThreadIDFromThreadFBID(x.thread_fbid);
y=x.thread_fbid;}else
if(x.thread_id){


z=c('MercuryIDs').getThreadIDFromThreadFBID(x.thread_id);
y=x.thread_id;}else

if(x.status&&x.status!=c('MercuryActionStatus').SUCCESS&&
x.client_thread_id){



z=x.client_thread_id;}else 


h(0,
'No thread identifier on action with type %s and status %s',
x.action_type,
x.status);


y=y&&y.toString();


x.thread_id=this.$MercuryServerPayloadPreprocessor_threadIDMap.hasClientIDForServerID(y)?
this.$MercuryServerPayloadPreprocessor_threadIDMap.getClientIDFromServerIDNow(y):
z;



if(x.action_type==c('MercuryActionType').SEND_MESSAGE&&
x.client_thread_id&&
y){
x.thread_id=x.client_thread_id;
this.$MercuryServerPayloadPreprocessor_threadIDMap.forceSetServerIDToClientID
(y,
x.client_thread_id);

l[y]=x.client_thread_id;}



x.thread_id||h(0,
'Unable to resolve a client thread id for action type %s',
x.action_type);


if(!k.payload_source||!k.payload_source.startsWith('server'))
e(['MercuryServerRequests'],function(aa){
aa.
getForFBID(this.$MercuryServerPayloadPreprocessor_fbid).
updateLastActionTimestamp(x.timestamp);}.
bind(this));}.

bind(this));

this.$MercuryServerPayloadPreprocessor_fixRelativeURIs(k);
this.$MercuryServerPayloadPreprocessor_processGenieMessage(k);


if(k.end_of_history){
var t=[];

for(var u=0;u<k.end_of_history.length;u++){
var v=k.end_of_history[u];

if(v.type=='user'){
t.push('user:'+v.fbid);}else
if(v.type=='thread'&&
this.$MercuryServerPayloadPreprocessor_threadIDMap.hasClientIDForServerID(v.fbid))
t.push
(this.$MercuryServerPayloadPreprocessor_threadIDMap.getClientIDFromServerIDNow(v.fbid));}




k.end_of_history=t;}



if(k.roger){
var w={};
Object.keys(k.roger).forEach(function(x){
var y=Object.keys(k.roger[x]),

z=void 0;
if(x){
z=this.$MercuryServerPayloadPreprocessor_threadIDMap.getClientIDFromServerIDNow(x);}else
if(y.length===1)
z=c('MercuryIDs').getThreadIDFromUserID(y[0]);

if(z){
var aa=k.roger[x];

w[z]={};

for(var ba in aa)
if(Object.prototype.hasOwnProperty.call(aa,ba)){
var ca=
c('MercuryIDs').getParticipantIDFromUserID(ba);
w[z][ca]=aa[ba];}}}.



bind(this));
k.roger=w;}

k.newlyAddedClientIDs=l;



k.preprocessed=true;
this.$MercuryServerPayloadPreprocessor_dispatcher.handleUpdate(k);};
i.prototype.

$MercuryServerPayloadPreprocessor_convertThreadFBID=function(k,l){
var m=k.other_user_fbid?
k.other_user_fbid:
k.thread_fbid;

m||h(0,'Encountered thread with no server identifier');
var n=this.$MercuryServerPayloadPreprocessor_threadIDMap.getClientIDFromServerIDNow(m);


if(!n){
n=k.other_user_fbid?
c('MercuryIDs').getThreadIDFromUserID(k.other_user_fbid):
c('MercuryIDs').getThreadIDFromThreadFBID(k.thread_fbid);

this.$MercuryServerPayloadPreprocessor_threadIDMap.setServerIDToClientID(m,n);
this.$MercuryServerPayloadPreprocessor_threadIDMap.setDeprecatedServerIDToClientID(k.thread_id,n);
l[m]=n;}

k.thread_id=n;};
i.prototype.

$MercuryServerPayloadPreprocessor_fixRelativeURIs=function(k){

k.actions.forEach(function(l){
if(l.action_type===c('MercuryActionType').USER_GENERATED_MESSAGE){
l.attachments=l.attachments||[];
l.attachments.forEach(function(m){

if(c('MercuryAttachment').isShareAttachment(m)&&
c('MessengerEnvironment').messengerui){

var n=new (c('URI'))(m.share.uri);
if(!n.getDomain())
m.share.uri=n.
setDomain('facebook.com').
setSubdomain(c('URI').getRequestURI().getSubdomain()).
setProtocol('https').
toString();}});}});};





i.prototype.

$MercuryServerPayloadPreprocessor_processGenieMessage=function(k){

k.actions.forEach(function(l){
if(l.action_type!==c('MercuryActionType').USER_GENERATED_MESSAGE)
return;

var m=l;
if(!m.has_attachment||
!m.attachments)

return;



for(var n=m.attachments.length-1;n>=0;n-=1){
var o=m.attachments[n];


if(!o.share||
!o.share.style_list||
o.share.style_list[0]!='genie_message')

continue;

if(o.share.target.genie_id)
m.author=c('MercuryIDs').getParticipantIDFromUserID
(o.share.target.genie_id);




if(o.share.target&&
!o.share.target.attachment){
m.attachments.splice(n,1);
m.has_attachment=m.attachments.length>0;}}});};






var j=new (c('MercurySingletonProvider'))(i);

f.exports=i;}),null);

/** js/mercury/models/MercuryMessageIDs.js */





__d('MercuryMessageIDs',['KeyedCallbackManager'],(function a(b,c,d,e,f,g){

'use strict';



var h=new (c('KeyedCallbackManager'))(),

i=
{getServerIDs:function j(k,l){
var m=k.filter(function(o){

return o.indexOf('id')===-1;}),


n=function o(p){
var q=k.map(function(r){

return p[r]?p[r]:r;});

l(q);};


return h.executeOrEnqueue(m,n);},


addServerID:function j(k,l){
h.setResource(k,l);}};



f.exports=i;}),null);

/** js/mercury/send_queue/MercuryServerSendMessageQueueOptions.js */









__d('MercuryServerSendMessageQueueOptions',[],(function a(b,c,d,e,f,g){
















function h
(i,
j,
k,
l,
m,
n){
'use strict';
this.success_handler=i;
this.error_handler=j;
this.transport_error_handler=k;
this.timeout_handler=l;
this.timeout=m;
this.connection_retries=n;}



f.exports=h;}),null);

/** js/mercury/send_queue/MercuryServerSendMessageQueueSimulatedError.js */









__d('MercuryServerSendMessageQueueSimulatedError',['AsyncRequest','AsyncResponse'],(function a(b,c,d,e,f,g){




var h=9999,

i=





{create:function j(k){
var l=new (c('AsyncRequest'))(this.endpoint_uri).
setData({message_batch:[k],client:this.client}),

m=new (c('AsyncResponse'))(l,{});
Object.assign(m,
{error:h,
silentError:false,
transientError:true,
request:l});


return m;}};



f.exports=i;}),null);

/** www/__virtual__/x/XMessagingSendController.js */



__d("XMessagingSendController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/send\/",{});}),

null);

/** js/mercury/send_queue/MercuryServerSendMessageQueue.js */












__d('MercuryServerSendMessageQueue',['BanzaiODS','LogHistory','MercuryLoggingHelper','MercuryServerRequestsConfig','MercuryServerDispatcher','MercuryServerSendMessageQueueSimulatedError','XMessagingSendController'],(function a(b,c,d,e,f,g){









var h=c('LogHistory').getInstance('mercury_server_send_message_queue');






























function i
(j,
k,
l,
m){
var n;'use strict';this.pending_message=null;this.queue=[];

this.sender_id=j;
this.queue_id=k;
this.$MercuryServerSendMessageQueue_parent_success_handler=l.success_handler;
this.$MercuryServerSendMessageQueue_parent_error_handler=l.error_handler;
this.$MercuryServerSendMessageQueue_parent_transport_error_handler=l.transport_error_handler;
this.$MercuryServerSendMessageQueue_parent_timeout_handler=l.timeout_handler;
this.client=m;

var o=null;
if(c('MercuryServerRequestsConfig').msgrRegion)


o=
{name:'X-MSGR-Region',
value:c('MercuryServerRequestsConfig').msgrRegion};



var p=c('XMessagingSendController').getURIBuilder().getURI().toString(),
q=(n={},n[
p]=
{request_user_id:this.sender_id,
endpoint_id:this.queue_id,
mode:c('MercuryServerDispatcher').IMMEDIATE,
customHeader:o,
handler:this.handleSuccess.bind(this),
error_handler:this.handleError.bind(this),
transport_error_handler:this.handleTransportError.bind(this),
timeout:l.timeout,
timeout_handler:this.handleTimeout.bind(this),
connection_retries:l.connection_retries},n);


c('MercuryServerDispatcher').registerEndpoints(q);}
i.prototype.

enqueue=function(j){'use strict';
this.queue.push(j);
this.$MercuryServerSendMessageQueue_maybeSendNext();};
i.prototype.

$MercuryServerSendMessageQueue_maybeSendNext=function(){'use strict';
if(this.pending_message||!this.queue.length){
if(this.pending_message)
this.$MercuryServerSendMessageQueue_logDelayedSend();

return;}


this.pending_message=this.queue.shift();

var j=
{client:this.client,

action_type:this.pending_message.action_type,
app_id:this.pending_message.app_id,
audio_ids:this.pending_message.audio_ids,
body:this.pending_message.body,
client_thread_id:this.pending_message.client_thread_id,
content_attachment:this.pending_message.content_attachment,
ephemeral_ttl_mode:this.pending_message.ephemeral_ttl_mode,
file_ids:this.pending_message.file_ids,
gif_ids:this.pending_message.gif_ids,
has_attachment:this.pending_message.has_attachment,
image_ids:this.pending_message.image_ids,
location_attachment:this.pending_message.location_attachment,
lightweight_action_attachment:
this.pending_message.lightweight_action_attachment,
log_message_data:this.pending_message.log_message_data,
log_message_type:this.pending_message.log_message_type,
message_id:this.pending_message.message_id,
message_source_data:this.pending_message.message_source_data,
offline_threading_id:this.pending_message.offline_threading_id,
other_user_fbid:this.pending_message.other_user_fbid,
photo_fbids:this.pending_message.photo_fbids,
shareable_attachment:this.pending_message.shareable_attachment,
signature_id:this.pending_message.signatureID,
source:this.pending_message.source,
specific_to_list:this.pending_message.specific_to_list,
sticker_id:this.pending_message.sticker_id,
tags:this.pending_message.tags,
thread_fbid:this.pending_message.thread_fbid,
timestamp:this.pending_message.timestamp,
ui_push_phase:this.pending_message.ui_push_phase,
video_ids:this.pending_message.video_ids,
platform_xmd:this.pending_message.platform_xmd,
profile_xmd:this.pending_message.profile_xmd};




for(var k in j)
if(j[k]===undefined||j[k]===null)
delete j[k];


c('MercuryServerDispatcher').trySend
(c('XMessagingSendController').getURIBuilder().getURI().toString(),
j,
null,
this.sender_id,
this.queue_id);};

i.prototype.

$MercuryServerSendMessageQueue_markAllEnqueuedAsFailed=function(){'use strict';
while(this.queue.length)
this.$MercuryServerSendMessageQueue_markAsFailed(this.queue.shift());};

i.prototype.

$MercuryServerSendMessageQueue_markAsFailed=function(j){'use strict';
this.$MercuryServerSendMessageQueue_parent_error_handler(c('MercuryServerSendMessageQueueSimulatedError').create(j));

h.error
('mark_as_failed',
JSON.stringify
({fbid:this.sender_id,
queue_id:this.queue_id,
message:c('MercuryLoggingHelper').obfuscateMessage(j)}));};


i.prototype.

handleSuccess=
function(j,
k){
'use strict';
this.$MercuryServerSendMessageQueue_parent_success_handler(j,k);
this.pending_message=null;
this.$MercuryServerSendMessageQueue_maybeSendNext();};
i.prototype.

handleError=function(j){'use strict';
this.$MercuryServerSendMessageQueue_parent_error_handler(j);
this.$MercuryServerSendMessageQueue_markAllEnqueuedAsFailed();
this.pending_message=null;};
i.prototype.

handleTransportError=function(j){'use strict';
this.$MercuryServerSendMessageQueue_parent_transport_error_handler(j);
this.$MercuryServerSendMessageQueue_markAllEnqueuedAsFailed();
this.pending_message=null;};
i.prototype.

handleTimeout=function(j){'use strict';
this.$MercuryServerSendMessageQueue_parent_timeout_handler(j);
this.$MercuryServerSendMessageQueue_markAllEnqueuedAsFailed();
this.pending_message=null;};
i.prototype.

$MercuryServerSendMessageQueue_logDelayedSend=function(){'use strict';
h.debug
('maybe_send_next_pending_message',
JSON.stringify
({fbid:this.sender_id,
queue_id:this.queue_id,
pending_message:
c('MercuryLoggingHelper').obfuscateMessage(this.pending_message),
queue:this.queue.map
(function(k){return c('MercuryLoggingHelper').obfuscateMessage(k);})}));









var j=
'send_queue.delayed.queue_length.'+this.queue.length.toString();
c('BanzaiODS').bumpEntityKey('chat.web',j);};



f.exports=i;}),null);

/** js/mercury/mixin/MercurySingletonMixin.js */




__d('MercurySingletonMixin',['CurrentUser'],(function a(b,c,d,e,f,g){



var h=
{_getInstances:function i(){
if(!this._instances)
this._instances={};

return this._instances;},







get:function i(){
return this.getForFBID(c('CurrentUser').getID());},





getForFBID:function i(j){
var k=this._getInstances();
if(!k[j])
k[j]=new this(j);


return k[j];}};



f.exports=h;}),null);

/** js/mercury/send_queue/MercuryServerSendMessageQueueRouter.js */








__d('MercuryServerSendMessageQueueRouter',['BanzaiODS','LogHistory','Map','MercuryServerSendMessageQueue','MercurySingletonMixin'],(function a(b,c,d,e,f,g){







var h=
c('LogHistory').getInstance('mercury_server_send_message_queue_router'),

i='chat.web.send_queue_router';
c('BanzaiODS').setEntitySample(i,.1);








function j(k){'use strict';this.queues=new (c('Map'))();
this.fbid=k;}
j.prototype.







enqueue=
function(k,
l,
m,
n){
'use strict';

var o=this.queues.get(k);
if(o===undefined){
o=new (c('MercuryServerSendMessageQueue'))
(this.fbid,
k,
l,
m);

this.queues.set(k,o);
h.debug('added queue',JSON.stringify
({fbid:this.fbid,
queue_id:k}));

c('BanzaiODS').bumpEntityKey(i,'new_queue');}


o.enqueue(n);};



Object.assign(j,c('MercurySingletonMixin'));

f.exports=j;}),null);

/** js/mercury/sync/MercurySyncConstants.js */






__d('MercurySyncConstants',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
{ARBITER_EVENT_INVALID_STATE:'SYNC:INVALID_STATE',
ARBITER_EVENT_INVALID_STATE_RETRY:'SYNC:INVALID_STATE_RETRY',
ARBITER_EVENT_INVALID_STATE_RECOVER:'SYNC:INVALID_STATE_RECOVER',
ARBITER_EVENT_SERVER_REQUESTS_FAIL:'NET:SERVER_REQUESTS_FAIL',
ARBITER_EVENT_SERVER_REQUESTS_RECOVER:'NET:SERVER_REQUESTS_RECOVER'};


f.exports=h;}),null);

/** js/mercury/sync/MercurySyncDeltaHolder.js */












__d('MercurySyncDeltaHolder',['Map','MercurySingletonProvider'],(function a(b,c,d,e,f,g){

'use strict';

















function h(){
this.$MercurySyncDeltaHolder_seqIDMap=new (c('Map'))();
this.$MercurySyncDeltaHolder_seqIDArr=[];


this.$MercurySyncDeltaHolder_lastSeqID=0;}
h.

getForFBID=function(j){
return i.getForFBID(j);};
h.

get=function(){
return i.get();};
h.prototype.




peek=function(){

this.$MercurySyncDeltaHolder_seqIDArr=this.$MercurySyncDeltaHolder_seqIDArr.sort(function(j,k){return j-k;});
return this.$MercurySyncDeltaHolder_seqIDArr[0];};
h.prototype.






pop=function(){

this.$MercurySyncDeltaHolder_seqIDArr=this.$MercurySyncDeltaHolder_seqIDArr.sort(function(l,m){return l-m;});

if(this.$MercurySyncDeltaHolder_seqIDArr.length===0)
return undefined;


var j=this.$MercurySyncDeltaHolder_seqIDArr.shift(),
k=this.$MercurySyncDeltaHolder_seqIDMap.get(j);
this.$MercurySyncDeltaHolder_seqIDMap['delete'](j);
return {seqID:j,delta:k};};
h.prototype.




push=function(j,k){
if(this.$MercurySyncDeltaHolder_seqIDMap.has(j))
return;


this.$MercurySyncDeltaHolder_seqIDMap.set(j,k);
this.$MercurySyncDeltaHolder_seqIDArr.push(j);};
h.prototype.

getLastSeqID=function(){
return this.$MercurySyncDeltaHolder_lastSeqID;};
h.prototype.

updateLastSeqID=function(j){
this.$MercurySyncDeltaHolder_lastSeqID=j;};


var i=new (c('MercurySingletonProvider'))(h);
f.exports=h;}),null);

/** www/__virtual__/x/XMercuryUnseenThreadIDsController.js */



__d("XMercuryUnseenThreadIDsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/mercury\/unseen_thread_ids\/",{});}),

null);

/** www/__virtual__/x/XMessagingChangeMentionsMuteModeController.js */



__d("XMessagingChangeMentionsMuteModeController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ajax\/mercury\/change_mentions_mute_thread\/",{});}),

null);

/** www/__virtual__/x/XMessagingChangeReactionsMuteModeController.js */



__d("XMessagingChangeReactionsMuteModeController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ajax\/mercury\/change_reactions_mute_thread\/",{});}),

null);

/** js/mercury/models/MercuryServerRequests.js */








__d('MercuryServerRequests',['errorCode','invariant','Arbiter','AsyncResponse','BanzaiODS','ChannelConstants','ChatReliabilityInstrumentation','CurrentUser','FBID','LogHistory','MercuryActionStatus','MercuryActionType','MercuryAPIArgsSource','MercuryAssert','MercuryConfig','MercuryDispatcher','MercuryErrorType','MercuryGlobalActionType','MercuryIDs','MercuryLogMessageType','MercuryMessageClientState','MercuryPayloadSource','MercurySendErrorLogger','MercuryServerPayloadPreprocessor','MercuryServerRequestsConfig','MercuryServerSendMessageQueueRouter','MercuryServerURIs','MercurySingletonProvider','MercurySourceType','MercurySyncDeltaHolder','MercurySyncConstants','MercuryThreadIDMap','MercuryThreadlistConstants','MercuryMessageIDs','MessagingConfig','MessagingTag','PageMessageEnumTag','MercuryServerSendMessageQueueOptions','MercuryServerDispatcher','Set','XMercuryUnseenThreadIDsController','XMessagingChangeMentionsMuteModeController','XMessagingChangeReactionsMuteModeController','createObjectFrom','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h,i){

'use strict';
















































var j=c('LogHistory').getInstance('mercury_server'),

k=c('MercuryAPIArgsSource').MERCURY,
l=1000,
m=30*1000;



function n(y){
return y.getError()?'_'+y.getError():'';}


function o(y,z){
var aa=babelHelpers['extends']({},
y),

ba=void 0;

if(z.threads){
if(!aa.threads)
aa.threads={};

for(ba in z.threads)

aa.threads[ba]=Object.keys
(c('createObjectFrom')((aa.threads[ba]||[]).concat
(z.threads[ba])));}





if(z.messages){
if(!aa.messages)
aa.messages={};

for(ba in z.messages){
if(!aa.messages[ba])
aa.messages[ba]={};

for(var ca in z.messages[ba])
if(aa.messages[ba][ca]){
aa.messages[ba][ca]=s
(aa.messages[ba][ca],
z.messages[ba][ca]);}else 


aa.messages[ba][ca]=z.messages[ba][ca];}}





aa.client=y.client||z.client;

return aa;}


function p(y,z){
var aa=Object.assign
(c('createObjectFrom')(y.folders,true),
c('createObjectFrom')(z.folders,true)),

ba=y.client||z.client;
return {folders:Object.keys(aa),client:ba};}







function q(y,z){
for(var aa in z)
if(y[aa]&&typeof y[aa]==='object'){
y[aa]=s
(y[aa],
z[aa]);}else

if(z[aa]&&typeof z[aa]==='object'){
var ba={};
Object.assign(ba,z[aa]);
y[aa]=ba;}



return y;}


function r(y,z){

return z;}





function s(y,z){

var aa=y.offset<z.offset?
y.offset:
z.offset,
ba=y.offset+y.limit,
ca=z.offset+z.limit,
da=ba>ca?
ba:
ca,
ea=da-aa,


fa=y.timestamp>z.timestamp?
y.timestamp:
z.timestamp;


return {offset:aa,
limit:ea,
timestamp:fa};}



function t(y,z){
var aa=y.client||z.client,
ba={ids:{},client:aa};
Object.assign(ba.ids,y.ids,z.ids);
return ba;}







function u(y,z){
var aa={},
ba=void 0,
ca=y.client||z.client;
delete y.client;
delete z.client;


for(ba in y)
Object.assign
(aa,
c('createObjectFrom')(y[ba],ba));



for(ba in z)
Object.assign
(aa,
c('createObjectFrom')(z[ba],ba));




var da={client:ca};
for(var ea in aa){
ba=aa[ea];
if(!da[ba])
da[ba]=[];

da[ba].push(ea);}


return da;}


function v(y,z){
var aa=y.client||z.client,
ba=c('createObjectFrom')(y.ids,true),
ca=c('createObjectFrom')(z.ids,true),
da=Object.assign(ba,ca);
return {ids:Object.keys(da),client:aa};}















function w(y){
this.$MercuryServerRequests_fbid=y;

this.$MercuryServerRequests_lastActionTimestamp=0;

this.$MercuryServerRequests_fetchingThreads={};

this.$MercuryServerRequests_sentMessagesTimestamp={};

this.$MercuryServerRequests_failedThreads=new (c('Set'))();

this.__threadIDMap=c('MercuryThreadIDMap').getForFBID(this.$MercuryServerRequests_fbid);

this.$MercuryServerRequests_dispatcher=c('MercuryDispatcher').getForFBID(this.$MercuryServerRequests_fbid);

this.$MercuryServerRequests_payloadPreprocessor=
c('MercuryServerPayloadPreprocessor').getForFBID(this.$MercuryServerRequests_fbid);

this.$MercuryServerRequests_sendMessageQueueOptions=new (c('MercuryServerSendMessageQueueOptions'))
(function(z,aa){
this.__handleUpdate(z,aa);}.
bind(this),
function(z){return this.$MercuryServerRequests_handleSendMessageError(z);}.bind(this),
function(z){
this.$MercuryServerRequests_handleSendMessageTransportError(z);}.
bind(this),
function(z){return this.$MercuryServerRequests_handleSendMessageTimeout(z);}.bind(this),
c('MercuryServerRequestsConfig').sendMessageTimeout,
c('MessagingConfig').SEND_CONNECTION_RETRIES);


this.$MercuryServerRequests_deltaHolder=c('MercurySyncDeltaHolder').getForFBID(this.$MercuryServerRequests_fbid);

this.$MercuryServerRequests_registerEndpoints();}
w.

getForFBID=function(y){
return x.getForFBID(y);};
w.

get=function(){
return x.get();};
w.prototype.












fetchThreadlistInfo=
function(y,
z){



var aa=arguments.length<=2||arguments[2]===undefined?c('MessagingTag').INBOX:arguments[2],ba=arguments[3],ca=arguments.length<=4||arguments[4]===undefined?k:arguments[4],
da=ba?c('MercuryServerDispatcher').IMMEDIATE:null,
ea={client:ca};
ea[aa]=
{offset:y,
limit:z,
filter:ba};


this.__sendRequest
(c('MercuryServerURIs').THREADLIST_INFO,
ea,
da);};

w.prototype.

fetchUnseenThreadIDs=function(){


var y=arguments.length<=0||arguments[0]===undefined?c('MessagingTag').INBOX:arguments[0],z=arguments.length<=1||arguments[1]===undefined?k:arguments[1];
this.__sendRequest
(c('XMercuryUnseenThreadIDsController').getURIBuilder().getURI().toString(),
{});};

w.prototype.

fetchUnreadThreadIDs=
function(y){

var z=arguments.length<=1||arguments[1]===undefined?k:arguments[1];
this.__sendRequest
(c('MercuryServerURIs').UNREAD_THREADS,
{folders:[y],client:z});};

w.prototype.

fetchThreadData=
function(y){

var z=arguments.length<=1||arguments[1]===undefined?k:arguments[1];
c('MercuryAssert').allThreadID(y);











var aa={threads:{},client:z},
ba=[],
ca=[];

y.forEach(function(ea){
if(this.$MercuryServerRequests_fetchingThreads[ea])
return;

this.$MercuryServerRequests_fetchingThreads[ea]=true;

var fa=this.__threadIDMap.getServerIDFromClientIDNow(ea),
ga=c('MercuryIDs').tokenize(ea);
if(ga.type=='user'){
ba.push(ga.value);
aa.threads.user_ids=ba;}else
if(ga.type=='thread'){
if(fa){
ca.push(fa);}else 

ca.push(ga.value);

aa.threads.thread_fbids=ca;}else
if(ga.type=='root'){
if(fa){
ca.push(fa);
aa.threads.thread_fbids=ca;}}else

if(ga.type!='pending')
throw new Error('Unknown thread type',ga);}.

bind(this));

this.$MercuryServerRequests_dispatcher.inform('fetch-thread-data',aa);
if(aa.threads.thread_fbids)
aa.threads.thread_fbids.forEach(function(ea){
if(!ea)
c('ChatReliabilityInstrumentation').logERROR
('Invalid FBID sent to thread_info.php: '+
JSON.stringify(y));});




for(var da in aa.threads){
this.__sendRequest(c('MercuryServerURIs').THREAD_INFO,aa);
break;}};

w.prototype.




ensureThreadIsFetched=
function(y){

var z=arguments.length<=1||arguments[1]===undefined?k:arguments[1];
if(!this.__threadIDMap.getClientIDFromServerIDNow(y)&&
!this.$MercuryServerRequests_fetchingThreads[y]){
this.$MercuryServerRequests_fetchingThreads[y]=true;
this.__sendRequest
(c('MercuryServerURIs').THREAD_INFO,
{threads:{thread_fbids:[y]},client:z});}};


w.prototype.











fetchThreadMessages=
function(y,
z,
aa,
ba,
ca){

var da=arguments.length<=5||arguments[5]===undefined?k:arguments[5];
c('MercuryAssert').isThreadID(y);
var ea=void 0,
fa=void 0,




ga=c('MercuryIDs').tokenize(y),
ha=this.__threadIDMap.getServerIDFromClientIDNow(y),
ia=false;
if(ha){
ea=ha;
fa=ga.type=='user'?'user_ids':'thread_fbids';}else{

ea=ga.value;
switch(ga.type){
case 'user':
fa='user_ids';
ia=true;
break;
case 'thread':
fa='thread_fbids';
break;}}


var ja={messages:{},threads:{},client:da};
if(fa){
ja.messages[fa]={};
ja.messages[fa][ea]=
{offset:z,
timestamp:ba,
limit:aa};


if(ia)



ja.threads[fa]=[ea];

this.__sendRequest
(c('MercuryServerURIs').THREAD_INFO,
ja,
ca);}else 


this.__threadIDMap.getServerIDFromClientID
(y,
function(ka){
ja.messages.thread_fbids={};
ja.messages.thread_fbids[ka]=
{offset:z,
timestamp:ba,
limit:aa};

this.__sendRequest
(c('MercuryServerURIs').THREAD_INFO,
ja,
ca);}.

bind(this));};


w.prototype.

handleThreadInfoError=function(y){var z,aa=this,
ba=y.getData(),



ca=[];
if(ba.messages){

for(var da in ba.messages.thread_fbids){
var ea=
this.__threadIDMap.getClientIDFromServerIDNow(da);
if(ea)
ca.push(this.$MercuryServerRequests_createServerErrorLogMessage(ea));}


for(var fa in ba.messages.user_ids)
ca.push(this.$MercuryServerRequests_createServerErrorLogMessage
('user:'+fa));


for(var ga in ba.messages.group_ids)
ca.push(this.$MercuryServerRequests_createServerErrorLogMessage
('group:'+ga));}




if(ca.length)
this.$MercuryServerRequests_dispatcher.handleUpdate

({actions:ca,
from_client:true,
payload_source:c('MercuryPayloadSource').CLIENT_CHANNEL_MESSAGE});







if(ba.threads&&
(ba.threads.user_ids||
ba.threads.thread_fbids||
ba.threads.group_ids||
ba.threads.thread_ids)){
var ha=5,

ia=true;
if(!ba.retry_count){

ba.retry_count=0;


if(ba.messages)
delete ba.messages;}else

if(ba.retry_count>=ha&&

!c('MercuryConfig').MR4E){


ia=false;

(ba.threads.thread_ids||[]).concat
(ba.threads.thread_fbids||[]).
forEach(function(ka){
if(ka in this.$MercuryServerRequests_fetchingThreads)
delete this.$MercuryServerRequests_fetchingThreads[ka];},

this);}


[].concat
(ba.threads.thread_ids||[],
ba.threads.thread_fbids||[],
ba.threads.user_ids||[],
ba.threads.group_ids||[]).
forEach(function(ka){
this.$MercuryServerRequests_failedThreads.add(ka);}.
bind(this));

if(ia){

var ja=Math.pow
(2,
Math.min(ba.retry_count,ha))*
1000;
c('setTimeoutAcrossTransitions')(function(){
j.log('retry_thread','{}');
this.__sendRequest
(c('MercuryServerURIs').THREAD_INFO,
ba);}.

bind(this),ja);
ba.retry_count++;}

if(this.$MercuryServerRequests_failedThreads.size)(function(){
var ka=[];
aa.$MercuryServerRequests_failedThreads.forEach(function(la){return ka.push(la);});
j.debug('failed threads',JSON.stringify(ka));
c('Arbiter').inform
(c('MercurySyncConstants').ARBITER_EVENT_SERVER_REQUESTS_FAIL,
ka);})();}};



w.prototype.

markFolderAsRead=function(y){

this.__sendRequest
(c('MercuryServerURIs').MARK_FOLDER_READ,
{folder:y});



var z=
[{action_type:c('MercuryGlobalActionType').MARK_ALL_READ,
folder:y}];


this.$MercuryServerRequests_dispatcher.handleUpdate
({global_actions:z,
from_client:true,
payload_source:c('MercuryPayloadSource').CLIENT_CHANGE_READ_STATUS});};

w.prototype.

changeThreadReadStatus=
function(y,
z,
aa,
ba,
ca,
da){

c('MercuryAssert').isThreadID(y);
this.__threadIDMap.getServerIDFromClientID(y,function(ea){var fa,
ga=
{ids:(fa={},fa[ea]=z,fa),
source:aa,
watermarkTimestamp:ba,
shouldSendReadReceipt:ca,
commerce_last_message_type:da};


j.log('initiate_change_read_status',JSON.stringify
({thread_id:y,
thread_fbid:ea,
mark_as_read:z,
watermarkTimestamp:ba}));



this.__sendRequest
(c('MercuryServerURIs').CHANGE_READ_STATUS,
ga);}.

bind(this));};
w.prototype.

changeThreadArchivedStatus=
function(y,
z,
aa){

c('MercuryAssert').isThreadID(y);
this.__threadIDMap.getServerIDFromClientID(y,function(ba){

var ca={ids:{},source:aa};
ca.ids[ba]=z;
this.__sendRequest
(c('MercuryServerURIs').CHANGE_ARCHIVED_STATUS,
ca);}.

bind(this));};
w.prototype.

changeThreadFolder=
function(y,
z){

c('MercuryAssert').isThreadID(y);

this.__threadIDMap.getServerIDFromClientID(y,function(aa){
var ba={};
ba[z]=[aa];
this.__sendRequest
(c('MercuryServerURIs').MOVE_THREAD,
ba);}.

bind(this));};
w.prototype.

changeMutingOnThread=function(y,z){
c('MercuryAssert').isThreadID(y);
this.__threadIDMap.getServerIDFromClientID(y,function(aa){
this.__sendRequest
(c('MercuryServerURIs').CHANGE_MUTE_THREAD,
{thread_fbid:aa,
mute_settings:z,
payload_source:k});}.

bind(this));};
w.prototype.

changeMentionsMutingOnThread=function(y,z){
c('MercuryAssert').isThreadID(y);
this.__threadIDMap.getServerIDFromClientID(y,function(aa){
this.__sendRequest
(c('XMessagingChangeMentionsMuteModeController').getURIBuilder().getURI(),
{thread_fbid:aa,
mentions_mute_mode:z,
payload_source:k});}.

bind(this));};
w.prototype.

changeReactionsMutingOnThread=function(y,z){
c('MercuryAssert').isThreadID(y);
this.__threadIDMap.getServerIDFromClientID(y,function(aa){
this.__sendRequest
(c('XMessagingChangeReactionsMuteModeController').getURIBuilder().getURI(),
{thread_fbid:aa,
reactions_mute_mode:z,
payload_source:k});}.

bind(this));};
w.prototype.

markThreadSpam=function(y,z){
c('MercuryAssert').isThreadID(y);
this.__threadIDMap.getServerIDFromClientID(y,function(aa){
this.__sendRequest
(c('MercuryServerURIs').MARK_SPAM,
{id:aa,source:z});}.

bind(this));};
w.prototype.

unmarkThreadSpam=function(y,z){
c('MercuryAssert').isThreadID(y);
this.__threadIDMap.getServerIDFromClientID(y,function(aa){
this.__sendRequest
(c('MercuryServerURIs').UNMARK_SPAM,
{id:aa,source:z});}.

bind(this));};
w.prototype.

deleteThread=function(y,z){
c('MercuryAssert').isThreadID(y);

this.__threadIDMap.getServerIDFromClientID(y,function(aa){
var ba={ids:[aa],source:z};
this.__sendRequest
(c('MercuryServerURIs').DELETE_THREAD,
ba);}.

bind(this));};
w.prototype.

deleteMessages=function(y,z){


c('MercuryMessageIDs').getServerIDs(z||[],function(aa){
this.__sendRequest
(c('MercuryServerURIs').DELETE_MESSAGES,
{message_ids:aa});}.

bind(this));};
w.prototype.

sendDeliveryReceipts=
function(y,
z){

c('MercuryMessageIDs').getServerIDs(y||[],function(aa){
this.__sendRequest
(c('MercuryServerURIs').DELIVERY_RECEIPTS,
{message_ids:aa,thread_ids:z});}.

bind(this));};
w.prototype.

sendNewMessage=
function(y){

var z=arguments.length<=1||arguments[1]===undefined?k:arguments[1];
if(!y.offline_threading_id)
c('BanzaiODS').bumpEntityKey('chat.web','missing_otid_on_send');






if(y.client_state&&
y.client_state!==c('MercuryMessageClientState').SEND_TO_SERVER)
return;


var aa=c('MercuryIDs').tokenize(y.thread_id),
ba=aa.type,
ca=babelHelpers['extends']({},
y);



ca.thread_id=null;
if(ba=='user'){
ca.other_user_fbid=aa.value;
this.$MercuryServerRequests_sendNewMessageToServer(ca,z);}else
if(ba=='thread'){
ca.thread_fbid=aa.value;
this.$MercuryServerRequests_sendNewMessageToServer(ca,z);}else

if(ba=='root'&&aa.value==ca.offline_threading_id){






ca.client_thread_id=y.thread_id;
this.$MercuryServerRequests_sendNewMessageToServer(ca,z);}else{


c('MercuryIDs').isLocalThread(y.thread_id)||i(0,
'Attempting to send to unknown thread id: %s',
y.thread_id);




this.__threadIDMap.getServerIDFromClientID
(y.thread_id,
function(da){
ca.thread_fbid=da;
this.$MercuryServerRequests_sendNewMessageToServer(ca,z);}.
bind(this));}};


w.prototype.

$MercuryServerRequests_sendNewMessageToServer=function(y,z){



c('Arbiter').inform(c('ChannelConstants').ATTEMPT_RECONNECT);

this.$MercuryServerRequests_sentMessagesTimestamp[y.message_id]=Date.now();


c('MercuryServerSendMessageQueueRouter').getForFBID(this.$MercuryServerRequests_fbid).enqueue
(y.other_user_fbid||
y.thread_fbid||
y.client_thread_id,
this.$MercuryServerRequests_sendMessageQueueOptions,
z,
y);};

w.prototype.

markSeen=function(){
var y=this.$MercuryServerRequests_lastActionTimestamp;

this.__sendRequest
(c('MercuryServerURIs').MARK_SEEN,
{seen_timestamp:y});};

w.prototype.



$MercuryServerRequests_handleSendMessageErrorCommon=
function(y,
z,
aa,
ba){
var ca=y.getData(),
da=ca.message_batch||[ca];

j.debug('handle_send_message_error_common',JSON.stringify
({reliability_error_status:aa,
request_error_status:z,
error_data:ba,
message_list:da}));


var ea=da.map(function(ga){
var ha=
{action_type:c('MercuryActionType').SEND_MESSAGE,
other_user_fbid:ga.other_user_fbid,
thread_fbid:ga.thread_fbid,
client_message_id:ga.message_id,
message_id:ga.message_id,
client_thread_id:ga.client_thread_id,
status:z,
error_data:ba};

return ha;});


ea.forEach(function(ga){
if(ga.action_type===c('MercuryActionType').SEND_MESSAGE&&
ga.status===c('MercuryActionStatus').ERROR)
this.__logMercurySendError(ga);},

this);


var fa=
{actions:ea,
payload_source:c('MercuryPayloadSource').CLIENT_HANDLE_ERROR};




this.$MercuryServerRequests_payloadPreprocessor.handleUpdate(fa);};
w.prototype.

handleSendMessageError=function(y){
var z=y.getPayload(),
aa=null,
ba=null;
if(z&&z.error_payload){





aa=c('MercuryActionStatus').UNCONFIRMED;
ba='send_error';}else{




aa=c('MercuryActionStatus').ERROR;
ba=
'request_error'+n(y);}



var ca=y.error;
if(ca===1404102)
c('AsyncResponse').verboseErrorHandler(y);



var da=/<.*>/.test(y.getErrorDescription())?
y.getErrorSummary():
y.getErrorDescription();
this.$MercuryServerRequests_handleSendMessageErrorCommon
(y.getRequest(),
aa,
ba,

{type:c('MercuryErrorType').SERVER,
code:y.getError(),
description:da,
is_transient:y.isTransient()});};


w.prototype.

handleSendMessageTransportError=function(y){


this.$MercuryServerRequests_handleSendMessageErrorCommon
(y.getRequest(),
c('MercuryActionStatus').ERROR,
'transport_error'+n(y),

{type:c('MercuryErrorType').TRANSPORT,
code:y.getError(),
is_transient:true});};


w.prototype.

handleSendMessageTimeout=function(y){

this.$MercuryServerRequests_handleSendMessageErrorCommon
(y,
c('MercuryActionStatus').ERROR,
'transport_timeout',
{type:c('MercuryErrorType').TIMEOUT,is_transient:true});};

w.prototype.

getLastActionTimestamp=function(){
return this.$MercuryServerRequests_lastActionTimestamp;};
w.prototype.

__logMercurySendError=function(y){
c('MercurySendErrorLogger').log(y);};
w.prototype.

updateLastActionTimestamp=function(y){

var z=Date.now()-1000*60*60*24;
if(y&&y>z)
this.$MercuryServerRequests_lastActionTimestamp=Math.max
(this.$MercuryServerRequests_lastActionTimestamp,
y);};


w.prototype.

markThreadFetched=function(y){
delete this.$MercuryServerRequests_fetchingThreads[y];
if(this.$MercuryServerRequests_failedThreads['delete'](y)&&
!this.$MercuryServerRequests_failedThreads.size){


j.debug('no_failed_threads','{}');
c('Arbiter').inform
(c('MercurySyncConstants').ARBITER_EVENT_SERVER_REQUESTS_RECOVER);}};


w.prototype.

$MercuryServerRequests_createServerErrorLogMessage=function(y){

return {action_type:c('MercuryActionType').LOG_MESSAGE,
thread_id:y,
message_id:y,
timestamp:Date.now(),
is_unread:false,
source:c('MercurySourceType').UNKNOWN,
log_message_body:'',
log_message_type:c('MercuryLogMessageType').SERVER_ERROR,
log_message_data:{}};};

w.prototype.

__getForAsyncRequest=function(y){
var z=y.getData(),
aa=z.request_user_id?
z.request_user_id:c('CurrentUser').getID();
return w.getForFBID(aa);};
w.prototype.

__handleUpdate=function(y,z){
this.__getForAsyncRequest(z).
$MercuryServerRequests_payloadPreprocessor.
handleUpdate(y);};
w.prototype.


$MercuryServerRequests_handleThreadInfoError=function(y){
var z=this.__getForAsyncRequest(y);
z.handleThreadInfoError(y);};
w.prototype.

$MercuryServerRequests_handleSendMessageError=function(y){

var z=this.__getForAsyncRequest(y.getRequest());
z.handleSendMessageError(y);};
w.prototype.

$MercuryServerRequests_handleSendMessageTransportError=function(y){

var z=this.__getForAsyncRequest(y.getRequest());
z.handleSendMessageTransportError(y);};
w.prototype.

$MercuryServerRequests_handleSendMessageTimeout=function(y){
var z=this.__getForAsyncRequest(y);
z.handleSendMessageTimeout(y);};
w.prototype.

$MercuryServerRequests_registerEndpoints=function(){var y,
z=null;
if(c('MercuryServerRequestsConfig').msgrRegion)


z=
{name:'X-MSGR-Region',
value:c('MercuryServerRequestsConfig').msgrRegion};




var aa=(y={},y[
c('MercuryServerURIs').THREAD_INFO]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').BATCH_DEFERRED_MULTI,
customHeader:z,
batch_function:o,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this),
error_handler:function(ea){
return (this.$MercuryServerRequests_handleThreadInfoError(ea.getRequest()));}.bind(this),
timeout_handler:function(ea){return this.$MercuryServerRequests_handleThreadInfoError(ea);}.bind(this),
timeout:m},y[

c('MercuryServerURIs').MARK_FOLDER_READ]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').IMMEDIATE,
customHeader:z,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)},y[

c('MercuryServerURIs').CHANGE_READ_STATUS]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').IMMEDIATE,
customHeader:z,
handler:function(ea,fa){
this.__handleUpdate(ea,fa);
var ga=(ea.threads||[]).map(function(ha){return ha&&ha.thread_id;});
j.log('response_change_read_status',JSON.stringify
({threads:ga}));}.

bind(this)},y[

c('MercuryServerURIs').MARK_SEEN]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').BATCH_SUCCESSIVE,
customHeader:z,
batch_function:r,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)},y[

c('MercuryServerURIs').THREADLIST_INFO]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').BATCH_SUCCESSIVE_UNIQUE,
customHeader:z,
batch_function:q,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)},y[

c('MercuryServerURIs').MARK_SPAM]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').IMMEDIATE,
customHeader:z,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)},y[

c('MercuryServerURIs').UNMARK_SPAM]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').IMMEDIATE,
customHeader:z,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)},y[

c('MercuryServerURIs').UNREAD_THREADS]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').BATCH_SUCCESSIVE_UNIQUE,
customHeader:z,
batch_function:p,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)},y[

c('MercuryServerURIs').CHANGE_ARCHIVED_STATUS]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').BATCH_SUCCESSIVE,
customHeader:z,
batch_function:t,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)},y[

c('MercuryServerURIs').DELETE_THREAD]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').BATCH_SUCCESSIVE,
customHeader:z,
batch_function:v,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)},y[

c('MercuryServerURIs').DELETE_MESSAGES]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').IMMEDIATE,
customHeader:z,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)},y[

c('MercuryServerURIs').DELIVERY_RECEIPTS]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').IMMEDIATE,
customHeader:z,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)},y[

c('MercuryServerURIs').MOVE_THREAD]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').BATCH_SUCCESSIVE,
customHeader:z,
batch_function:u,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)},y[

c('MercuryServerURIs').CHANGE_MUTE_THREAD]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').IMMEDIATE,
customHeader:z,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)},y),



ba=c('XMercuryUnseenThreadIDsController').
getURIBuilder().
getURI().
toString();
aa[ba]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').IMMEDIATE,
customHeader:z,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)};

var ca=c('XMessagingChangeMentionsMuteModeController').
getURIBuilder().
getURI().
toString();
aa[ca]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').IMMEDIATE,
customHeader:z,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)};


var da=c('XMessagingChangeReactionsMuteModeController').
getURIBuilder().
getURI().
toString();
aa[da]=
{request_user_id:this.$MercuryServerRequests_fbid,
mode:c('MercuryServerDispatcher').IMMEDIATE,
customHeader:z,
handler:function(ea,fa){return this.__handleUpdate(ea,fa);}.bind(this)};

c('MercuryServerDispatcher').registerEndpoints(aa);};
w.prototype.






__sendRequest=function(y,z,aa){
if(c('MercuryConfig').MessengerCachiusUseClientSeqIDWWW)
switch(y){
case c('MercuryServerURIs').THREADLIST_INFO:
case c('MercuryServerURIs').THREAD_INFO:
z.cachius_min_seq_id=this.$MercuryServerRequests_deltaHolder.getLastSeqID();
break;

default:break;}


c('MercuryServerDispatcher').trySend(y,z,aa,this.$MercuryServerRequests_fbid);};
w.prototype.

__getFBID=function(){
return this.$MercuryServerRequests_fbid;};



var x=new (c('MercurySingletonProvider'))(w);

f.exports=w;}),null);

/** js/mercury/models/MercuryThreadIDMap.js */






__d('MercuryThreadIDMap',['KeyedCallbackManager','MercuryAssert','MercuryIDs','MercurySingletonProvider'],(function a(b,c,d,e,f,g){

'use strict';
















function h(j){
this.$MercuryThreadIDMap_fbid=j;
this.$MercuryThreadIDMap_serverToClientIDs=new (c('KeyedCallbackManager'))();
this.$MercuryThreadIDMap_clientToServerIDs=new (c('KeyedCallbackManager'))();}
h.

getForFBID=function(j){
return i.getForFBID(j);};
h.

get=function(){
return i.get();};
h.prototype.

setServerIDToClientID=function(j,k){
var l=this.getClientIDFromServerIDNow(j);
if(l){
l!==k;



return;}

this.forceSetServerIDToClientID(j,k);};
h.prototype.






forceSetServerIDToClientID=function(j,k){
this.$MercuryThreadIDMap_serverToClientIDs.setResource(j,k);
this.$MercuryThreadIDMap_clientToServerIDs.setResource(k,j);};
h.prototype.





setDeprecatedServerIDToClientID=
function(j,
k){

if(j)
this.$MercuryThreadIDMap_serverToClientIDs.setResource(j,k);};

h.prototype.

getClientIDFromServerIDNow=function(j){
return this.$MercuryThreadIDMap_serverToClientIDs.getResource(j);};
h.prototype.

getClientIDFromServerID=
function(j,
k){

this.$MercuryThreadIDMap_serverToClientIDs.executeOrEnqueue(j,k);

e(['MercuryServerRequests'],function(l){
l.
getForFBID(this.$MercuryThreadIDMap_fbid).

ensureThreadIsFetched(j);}.
bind(this));};
h.prototype.

getServerIDFromClientIDNow=function(j){
return this.$MercuryThreadIDMap_clientToServerIDs.getResource(j);};
h.prototype.

getServerIDFromClientID=
function(j,
k){

c('MercuryAssert').isThreadID(j);
var l=
this.$MercuryThreadIDMap_clientToServerIDs.executeOrEnqueue(j,k);


e(['MercuryServerRequests'],function(m){
var n=this.$MercuryThreadIDMap_clientToServerIDs.getUnavailableResources(l),
o=c('MercuryIDs').tokenize(j);




if(n.length&&o.type!='root')
m.
getForFBID(this.$MercuryThreadIDMap_fbid).

fetchThreadData(n);}.

bind(this));};
h.prototype.

hasClientIDForServerID=function(j){
return !!this.getClientIDFromServerIDNow(j);};
h.prototype.











convertThreadIDIfAvailable=function(j){
var k=this.getClientIDFromServerIDNow(j);
return k||j;};
h.prototype.





canLinkExternally=function(j){
c('MercuryAssert').isThreadID(j);

var k=c('MercuryIDs').tokenize(j);
return k.type=='user'||
!!this.getServerIDFromClientIDNow(j);};



var i=new (c('MercurySingletonProvider'))(h);

f.exports=h;}),null);

/** js/mercury/models/MercuryParticipantFetcher.js */






__d('MercuryParticipantFetcher',['LogHistory','MercuryIDs','MercuryPayloadSource','MercuryServerPayloadPreprocessor','Set','ShortProfiles','setImmediate','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){

'use strict';











var h=c('LogHistory').getInstance('short_profiles');



















function i(k){
this.$MercuryParticipantFetcher_payloadPreprocessor=
c('MercuryServerPayloadPreprocessor').getForFBID(k);

this.$MercuryParticipantFetcher_fetchQueued=false;
this.$MercuryParticipantFetcher_missingIDs=new (c('Set'))();
this.$MercuryParticipantFetcher_pendingIDs=new (c('Set'))();
this.$MercuryParticipantFetcher_enqueueInterval=setInterval(this.$MercuryParticipantFetcher_enqueue.bind(this),20*1000);}
i.prototype.




fetch=function(k){
this.$MercuryParticipantFetcher_check(k);
this.$MercuryParticipantFetcher_enqueue();};
i.prototype.




fetchMulti=function(k){
k.forEach(function(l){return this.$MercuryParticipantFetcher_check(l);}.bind(this));
this.$MercuryParticipantFetcher_enqueue();};
i.prototype.




$MercuryParticipantFetcher_check=function(k){
if(!this.$MercuryParticipantFetcher_pendingIDs.has(k))
this.$MercuryParticipantFetcher_missingIDs.add(k);};

i.prototype.














$MercuryParticipantFetcher_enqueue=function(){
if(this.$MercuryParticipantFetcher_fetchQueued||this.$MercuryParticipantFetcher_missingIDs.size===0)
return;

this.$MercuryParticipantFetcher_fetchQueued=true;

c('setImmediate')(function(){
this.$MercuryParticipantFetcher_fetchQueued=false;
this.$MercuryParticipantFetcher_missingIDs.forEach(function(k){return this.$MercuryParticipantFetcher_pendingIDs.add(k);}.bind(this));
this.$MercuryParticipantFetcher_doFetch(this.$MercuryParticipantFetcher_missingIDs,function(k){
k.forEach(function(l){return this.$MercuryParticipantFetcher_pendingIDs['delete'](l.id);}.bind(this));
this.$MercuryParticipantFetcher_dispatch(k);
if(this.$MercuryParticipantFetcher_fetchTimeout)
clearTimeout(this.$MercuryParticipantFetcher_fetchTimeout);}.

bind(this));
this.$MercuryParticipantFetcher_setFetchTimeoutHandler();
this.$MercuryParticipantFetcher_missingIDs.clear();}.
bind(this));};
i.prototype.






$MercuryParticipantFetcher_setFetchTimeoutHandler=function(){
this.$MercuryParticipantFetcher_fetchTimeout=c('setTimeoutAcrossTransitions')(function(){


this.$MercuryParticipantFetcher_pendingIDs.forEach(function(k){return this.$MercuryParticipantFetcher_missingIDs.add(k);}.bind(this));
this.$MercuryParticipantFetcher_pendingIDs.clear();}.
bind(this),11*1000);};
i.prototype.




$MercuryParticipantFetcher_doFetch=
function(k,
l){

var m=[];
k.forEach(function(n){var o=
c('MercuryIDs').tokenize(n),p=o.type,q=o.value;
p==='fbid'&&m.push(q);});


if(m.length>0){
c('ShortProfiles').getMulti(m,function(n){
var o=[];
for(var p in n)
o.push(j(n[p],p));

l(o);
if(o.length!==m.length)
h.error
('server_fetch_participant_count_error',
JSON.stringify
({expectedIDs:m,
receivedIDs:Object.keys(n)}));});




h.debug('client_fetch_participants',JSON.stringify({userIDs:m}));}};

i.prototype.




$MercuryParticipantFetcher_dispatch=function(k){
this.$MercuryParticipantFetcher_payloadPreprocessor.handleUpdate
({participants:k,
from_client:false,
payload_source:c('MercuryPayloadSource').SERVER_FETCH_PARTICIPANTS});};







function j(k,l){
var m=babelHelpers['extends']
({gender:k.gender,
fbid:k.id||l,
href:k.uri,
id:c('MercuryIDs').getParticipantIDFromUserID(k.id||l),
image_src:k.thumbSrc,
name:k.name,
short_name:k.firstName,
employee:k.employee,
is_employee_away:k.is_employee_away,
type:k.type,
vanity:k.vanity,
is_friend:k.is_friend,
is_messenger_user:k.is_messenger_user},
{});


if(k.officeStatus){
m.officeStatus=k.officeStatus;
m.officeStatusEndDate=k.officeStatusEndDate;
m.officeStatusComment=k.officeStatusComment;
m.officeStatusLocation=k.officeStatusLocation;}


if(k.timezone||k.timezone===0)
m.timezone=k.timezone;


if(k.personal_id)
m.personal_id=k.personal_id;


if(k.work_id)
m.work_id=k.work_id;


return m;}


f.exports=i;}),null);

/** js/mercury/models/MercuryVanityIDMap.js */






__d('MercuryVanityIDMap',['Map','MercuryAssert'],(function a(b,c,d,e,f,g){

'use strict';




var h=new (c('Map'))(),
i=new (c('Map'))(),




j=




{getID:function k(l){


return h.get(l.toLowerCase());},





getVanity:function k(l){
return i.get(l);},






hasID:function k(l){
return i.has(l);},






hasVanity:function k(l){


return h.has(l.toLowerCase());},





set:function k(l,m){
c('MercuryAssert').isParticipantID(m);



var n=l.toLowerCase();
h.set(n,m);
i.set(m,n);}};



f.exports=j;}),null);

/** js/mercury/models/MercuryParticipants.js */






__d('MercuryParticipants',['fbt','CurrentUser','EventEmitter','ImageSourceRequest','ImageSourceType','ImmutableObject','KeyedCallbackManager','MercuryAssert','MercuryIDs','MercuryParticipantFetcher','MercuryParticipantTypes','MercuryParticipantsConstants','MercuryDispatcher','MercuryVanityIDMap','PhotoResizeModeConst','Set','createObjectFrom'],(function a(b,c,d,e,f,g,h){

'use strict';

























var i='change';








function j(l){
this.$MercuryParticipants_fbid=l;

this.$MercuryParticipants_emitter=new (c('EventEmitter'))();
this.$MercuryParticipants_participants=new (c('KeyedCallbackManager'))();
this.$MercuryParticipants_fetcher=new (c('MercuryParticipantFetcher'))(this.$MercuryParticipants_fbid);

this.$MercuryParticipants_dispatcher=c('MercuryDispatcher').getForFBID(this.$MercuryParticipants_fbid);
this.$MercuryParticipants_dispatcher.subscribe('update-participants',function(m,n){
if(n.participants&&n.participants.length>0)
this.$MercuryParticipants_addParticipants(n.participants);}.

bind(this));

this.$MercuryParticipants_dispatcher.subscribe('invalidate-global-state',function(){
this.$MercuryParticipants_invalidateGlobalState();}.
bind(this));}
j.prototype.




addListener=
function(l,
m){

return this.$MercuryParticipants_emitter.addListener(l,m);};
j.prototype.




getIDFromVanityOrFBID=function(l){
if(!l)
return null;

if(c('MercuryVanityIDMap').hasVanity(l))
return c('MercuryVanityIDMap').getID(l);

if(/^\d+$/.test(l))

return c('MercuryIDs').getParticipantIDFromUserID(l);

return undefined;};
j.prototype.





getNow=function(l){
return this.$MercuryParticipants_getNow(l);};
j.prototype.





getOrFetch=function(l){
var m=this.$MercuryParticipants_getNow(l);
if(!m)
this.$MercuryParticipants_fetcher.fetch(l);

return m;};
j.prototype.




get=
function(l,
m){

c('MercuryAssert').isParticipantID(l);

return this.$MercuryParticipants_getMultiImpl([l],function(n){
m(n[l]);});};

j.prototype.






getMulti=
function(l,
m){

return this.$MercuryParticipants_getMultiImpl(l,m);};
j.prototype.





getBigImageMulti=
function(l,
m){

c('MercuryAssert').allParticipantIDs(l);

var n=c('MercuryParticipantsConstants').BIG_IMAGE_SIZE;

return this.$MercuryParticipants_getMultiImpl(l,function(o){
var p={},
q=0,
r=new (c('Set'))(),

s=function(w,x){
q++;
p[w]=x;
if(q===l.length){
m(p);
if(r.size>0)
this.$MercuryParticipants_emit(r);}}.


bind(this),
t=function(w,x){
this.$MercuryParticipants_participants.setResource(w,c('ImmutableObject').set
(this.$MercuryParticipants_participants.getResource(w),
{big_image_src:x.uri}));

r.add(w);
s(w,x.uri);}.
bind(this);

for(var u in o){
var v=o[u];
if(!v.big_image_src){
new (c('ImageSourceRequest'))().
setFBID(c('MercuryIDs').getUserIDFromParticipantID(u)).
setType(c('ImageSourceType').PROFILE_PICTURE).
setDimensions(n,n).
setResizeMode(c('PhotoResizeModeConst').COVER).
setCallback(t.bind(null,u)).
send();}else 

s(v.id,v.big_image_src);}}.


bind(this));};
j.prototype.





getOrderedBigImageMulti=
function(l,
m){

return this.getBigImageMulti(l,function(n){
m(l.map(function(o){return n[o];}));});};

j.prototype.

$MercuryParticipants_getMultiImpl=
function(l,
m){

c('MercuryAssert').allParticipantIDs(l);

var n=this.$MercuryParticipants_participants.executeOrEnqueue(l,m),
o=this.$MercuryParticipants_participants.
getUnavailableResources(n).
filter(function(p){var q=
c('MercuryIDs').tokenize(p),r=q.type,s=q.value;
if(r==='email'){
this.$MercuryParticipants_genEmailParticipant(p,s);
return false;}

if(r==='name'){
this.$MercuryParticipants_genNameParticipant(p,s);
return false;}

return true;}.
bind(this));
this.$MercuryParticipants_fetcher.fetchMulti(o);

return this.$MercuryParticipants_getSubscriptionToken(n);};
j.prototype.





$MercuryParticipants_getNow=function(l){
var m=this.$MercuryParticipants_participants.getResource(l);
if(!m){var n=
c('MercuryIDs').tokenize(l),o=n.type,p=n.value;
if(o==='email')
m=this.$MercuryParticipants_genEmailParticipant(l,p);

if(o==='name')
m=this.$MercuryParticipants_genNameParticipant(l,p);}


return m;};
j.prototype.




$MercuryParticipants_genEmailParticipant=function(l,m){
var n=new (c('ImmutableObject'))(k(l,m));
this.$MercuryParticipants_participants.setResource(l,n);
return n;};
j.prototype.




$MercuryParticipants_genNameParticipant=function(l,m){
var n=new (c('ImmutableObject'))
({gender:c('MercuryParticipantsConstants').UNKNOWN_GENDER,
href:null,
id:l,
image_src:c('MercuryParticipantsConstants').EMAIL_IMAGE,
big_image_src:c('MercuryParticipantsConstants').EMAIL_IMAGE,
name:m,
short_name:m,
employee:false});

this.$MercuryParticipants_participants.setResource(l,n);
return n;};
j.prototype.




$MercuryParticipants_emit=function(l){
this.$MercuryParticipants_emitter.emit(i,l);};
j.prototype.





$MercuryParticipants_addParticipants=function(l){
var m=l.map(function(n){return n.id;});
l=l.map(function(n){
if(n.vanity)
c('MercuryVanityIDMap').set(n.vanity,n.id);


var o=this.$MercuryParticipants_participants.getResource(n.id);
return o?
c('ImmutableObject').set(o,n):
new (c('ImmutableObject'))(this.$MercuryParticipants_guaranteeNameFields(n));}.
bind(this));

this.$MercuryParticipants_participants.addResourcesAndExecute
(c('createObjectFrom')(m,l));

this.$MercuryParticipants_emit(new (c('Set'))(m));};
j.prototype.







$MercuryParticipants_guaranteeNameFields=
function(l){

var m=l.type===c('MercuryParticipantTypes').USER||
l.type===c('MercuryParticipantTypes').FRIEND;

if(!m)
return l;


if(!l.name&&!l.href&&!l.vanity){
var n=h._(["Facebook User","60dcd568764a853dc68776339fb62582"]);








l.name=n;

l.short_name=n;}


return l;};
j.prototype.




$MercuryParticipants_getSubscriptionToken=function(l){

return {remove:function(){
this.$MercuryParticipants_participants.unsubscribe(l);}.
bind(this)};};

j.prototype.

$MercuryParticipants_invalidateGlobalState=function(){
this.$MercuryParticipants_participants=new (c('KeyedCallbackManager'))();};






function k(l,m){

return {gender:c('MercuryParticipantsConstants').UNKNOWN_GENDER,
href:null,
id:l,
image_src:c('MercuryParticipantsConstants').EMAIL_IMAGE,
big_image_src:c('MercuryParticipantsConstants').EMAIL_IMAGE,
name:m,
short_name:m,
employee:false,
fbid:undefined,
accepts_messenger_user_feedback:undefined,
is_business_enabled:undefined,
is_messenger_platform_bot:undefined,
is_employee_away:undefined,
is_friend:undefined,
is_messenger_user:undefined,
is_verified:undefined,
type:undefined,
vanity:undefined,
timezone:undefined,
personal_id:undefined,
work_id:undefined};}



f.exports=new j(c('CurrentUser').getID());}),null);

/** shared/mercury/sync/MercurySyncDeltaTypes.js */






__d('MercurySyncDeltaTypes',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
{AdminAddedToGroupThread:'AdminAddedToGroupThread',
AdminRemovedFromGroupThread:'AdminRemovedFromGroupThread',
AdminTextMessage:'AdminTextMessage',
DeliveryReceipt:'DeliveryReceipt',
ForcedFetch:'ForcedFetch',
MarkRead:'MarkRead',
MarkUnread:'MarkUnread',
MarkFolderSeen:'MarkFolderSeen',
MessageDelete:'MessageDelete',
NewMessage:'NewMessage',
PagesManagerEvent:'PagesManagerEvent',
ParticipantLeftGroupThread:'ParticipantLeftGroupThread',
ParticipantsAddedToGroupThread:'ParticipantsAddedToGroupThread',
ReadReceipt:'ReadReceipt',
ReplaceMessage:'ReplaceMessage',
RTCEventLog:'RTCEventLog',
ThreadAction:'ThreadAction',
ThreadDelete:'ThreadDelete',
ThreadMuteSettings:'ThreadMuteSettings',
ThreadName:'ThreadName',
JoinableMode:'JoinableMode',
ApprovalMode:'ApprovalMode',
ApprovalQueue:'ApprovalQueue',
ClientPayload:'ClientPayload',
GenieMessage:'GenieMessage',
MontageMessage:'MontageMessage',
RtcCallData:'RtcCallData'};


f.exports=h;}),null);

/** js/mercury/sync/MercurySyncFakeDFFSender.js */






__d('MercurySyncFakeDFFSender',['Arbiter','ChannelConstants','MercurySingletonProvider','MercurySyncDeltaTypes'],(function a(b,c,d,e,f,g){

'use strict';






var h=c('ChannelConstants').getArbiterType
(c('ChannelConstants').FAKE_DFF);i.






getForFBID=function(k){
return j.getForFBID(k);};
i.

get=function(){
return j.get();};


function i(k){
this.$MercurySyncFakeDFFSender_fbid=k;}
i.prototype.

sendGlobalDFF=function(){
c('Arbiter').inform
(h,

{obj:
{delta:
{'class':c('MercurySyncDeltaTypes').ForcedFetch},

queue:this.$MercurySyncFakeDFFSender_fbid}});};



i.prototype.

sendThreadDFF=function(k,l){
c('Arbiter').inform
(h,

{obj:
{delta:
{'class':c('MercurySyncDeltaTypes').ForcedFetch,
threadKey:
{otherUserFbId:k,
threadFbId:l}},


queue:this.$MercurySyncFakeDFFSender_fbid}});};






var j=new (c('MercurySingletonProvider'))(i);

f.exports=i;}),null);

/** js/mercury/info/MercuryThreadInfo.js */






__d('MercuryThreadInfo',['CurrentUser','MercuryIDs','MessengerThreadCannotReplyReason'],(function a(b,c,d,e,f,g){

'use strict';











var h=



{canReply:function j(k){

return !!(k.is_subscribed&&
(k.can_reply===undefined||k.can_reply)&&
!k.has_email_participant&&
!k.read_only);},






getMuteSetting:function j(k){
return !k.mute_until?undefined:k.mute_until;},






isEmptyLocalThread:function j(k){

return (c('MercuryIDs').tokenize(k.thread_id).type==='root'&&
!k.timestamp);},






isMuted:function j(k){
return h.getMuteSetting(k)!==undefined;},





areMentionsMuted:function j(k){
return k.mentions_mute_mode===1;},





areReactionsMuted:function j(k){
return k.reactions_mute_mode===1;},






isNewEmptyLocalThread:function j(k){

return !!(h.isEmptyLocalThread(k)&&
k.participants&&
k.participants.length===0);},



showComposer:function j(k){

return !!(k.is_subscribed&&
(k.can_reply||
!k.cannot_reply_reason||
k.cannot_reply_reason===c('MessengerThreadCannotReplyReason').BLOCKED)&&
!k.has_email_participant&&
!k.read_only);},



isColdOpen:function j(k){

return !!(k.is_canonical_user&&
(k.message_count===0||!k.timestamp));}};




function i(j){
return j+'@facebook.com';}


f.exports=h;}),null);

/** js/messaging/giftwrap/MessagingGiftWrapConstants.js */






__d('MessagingGiftWrapConstants',[],(function a(b,c,d,e,f,g){

'use strict';

var h='gift_wrap',
i='gift_unwrapped',
j='valentines2016';

f.exports=
{TAG_PREFIX:h,
UNWRAPPED_TAG:i,
VALENTINES_GIFT:j};}),null);

/** js/messaging/giftwrap/MessagingGiftWrapChecker.js */






__d('MessagingGiftWrapChecker',['MercuryConfig','MercuryTagHelper','MessagingGiftWrapConstants'],(function a(b,c,d,e,f,g){

'use strict';






var h=

{shouldRenderWithGiftWrap:function k(l){

return !!(c('MercuryConfig').GiftWrapViewerGK&&
l.tags&&
i(l.tags)&&
!j(l.tags));}};




function i(k){
return c('MercuryTagHelper').get
(k,
c('MessagingGiftWrapConstants').TAG_PREFIX)===
c('MessagingGiftWrapConstants').VALENTINES_GIFT;}


function j(k){
return !!c('MercuryTagHelper').get(k,c('MessagingGiftWrapConstants').UNWRAPPED_TAG);}


f.exports=h;}),null);

/** js/mercury/models/MercuryThreads.js */





















__d('MercuryThreads',['invariant','ChatReliabilityInstrumentation','EventEmitter','EventReminderConstants','MercuryDisplayTimeFilterMessageRenderer','ImmutableObject','KeyedCallbackManager','LogHistory','Map','MercuryActionType','MercuryAssert','MercuryAttachment','MercuryConfig','MercuryDispatcher','MercuryGiftSnippetRenderer','MercuryGlobalActionType','MercuryIDs','MercuryLocalIDs','MercuryLoggingHelper','MercuryLogMessageType','MercuryParticipants','MercuryPayloadSource','MercuryServerRequests','MercurySingletonProvider','MercurySyncFakeDFFSender','MercuryThreadInfo','MercuryThreadInformer','MessagingGenericAdminTextType','MessagingGiftWrapChecker','MessagingTag','Set','emptyFunction','ifRequired','requireWeak','setImmediate'],(function a(b,c,d,e,f,g,h){

'use strict';






































var i=c('EventReminderConstants').GuestStates,






j=new (c('EventEmitter'))(),
k=c('LogHistory').getInstance('mercury_threads');


















function l(n){
this.$MercuryThreads_fbid=n;
this.$MercuryThreads_serverRequests=c('MercuryServerRequests').getForFBID(this.$MercuryThreads_fbid);
this.$MercuryThreads_threadInformer=c('MercuryThreadInformer').getForFBID(this.$MercuryThreads_fbid);
this.$MercuryThreads_viewer=c('MercuryIDs').getParticipantIDFromUserID(this.$MercuryThreads_fbid);
this.$MercuryThreads_dispatcher=c('MercuryDispatcher').getForFBID(this.$MercuryThreads_fbid);
this.$MercuryThreads_fakeDFFSender=c('MercurySyncFakeDFFSender').getForFBID(this.$MercuryThreads_fbid);



this.$MercuryThreads_didChange=false;


this.$MercuryThreads_threads=new (c('KeyedCallbackManager'))();
this.$MercuryThreads_pendingReadStatusThreads=new (c('Set'))();

this.$MercuryThreads_fetchQueued=false;
this.$MercuryThreads_missingIDs=new (c('Set'))();
this.$MercuryThreads_pendingIDs=new (c('Set'))();

this.$MercuryThreads_setUpDispatcher();}
l.

getForFBID=function(n){
return m.getForFBID(n);};
l.

get=function(){
return m.get();};
l.prototype.





getThreadMetaNow=function(n){
c('MercuryAssert').isThreadID(n);
var o=this.$MercuryThreads_threads.getResource(n);
if(o&&!o.participants){
c('ChatReliabilityInstrumentation').logERROR
('participants are null!',
{thread_id:n});

this.$MercuryThreads_fakeDFFSender.sendThreadDFF(null,n);
return new (c('ImmutableObject'))(babelHelpers['extends']({},
o,
{participants:[]}));}


return o;};
l.prototype.





getOrFetch=function(n){
var o=this.getThreadMetaNow(n);

if(!o&&!this.$MercuryThreads_pendingIDs.has(n))
this.$MercuryThreads_missingIDs.add(n);

if(this.$MercuryThreads_missingIDs.size>0&&!this.$MercuryThreads_fetchQueued)
this.$MercuryThreads_queueFetch();


return o;};
l.prototype.






$MercuryThreads_queueFetch=function(){
if(this.$MercuryThreads_fetchQueued)
return;

this.$MercuryThreads_fetchQueued=true;

c('setImmediate')(function(){
this.$MercuryThreads_fetchQueued=false;
this.$MercuryThreads_missingIDs.forEach(function(n){return this.$MercuryThreads_pendingIDs.add(n);}.bind(this));
this.getMultiThreadMeta(Array.from(this.$MercuryThreads_missingIDs),function(n){
for(var o in n)
Object.prototype.hasOwnProperty.call(n,o)&&this.$MercuryThreads_pendingIDs['delete'](o);}.

bind(this));
this.$MercuryThreads_missingIDs.clear();}.
bind(this));};
l.prototype.














getThreadMeta=
function(n,
o,
p){

return this.getMultiThreadMeta
([n],
function(q){return o(q[n]);},
p);};

l.prototype.





getMultiThreadMeta=
function(n,
o,
p){

c('MercuryAssert').allThreadID(n);

var q=this.$MercuryThreads_threads.executeOrEnqueue(n,o),
r=this.$MercuryThreads_threads.getUnavailableResources(q);

if(r.length){
var s=[];

for(var t=0;t<r.length;t++){
var u=r[t],v=
c('MercuryIDs').tokenize(u),w=v.type,x=v.value;
if(w=='user'){

var y=c('MercuryIDs').getParticipantIDFromUserID(x);
this.createNewLocalThread
(u,
y===this.$MercuryThreads_viewer?
[this.$MercuryThreads_viewer]:
[this.$MercuryThreads_viewer,y]);}


s.push(u);}



if(s.length)
this.$MercuryThreads_serverRequests.fetchThreadData(s,p);}



return q;};
l.





addListener=function(n,o){
return j.addListener(n,o);};
l.prototype.




unsubscribe=function(n){
this.$MercuryThreads_threads.unsubscribe(n);};
l.prototype.





getCanonicalThreadToParticipant=
function(n,
o,
p,
q){

var r=c('MercuryIDs').getThreadIDFromParticipantID(n);
!!r||h(0,'participant id must be valid');
var s=this.$MercuryThreads_threads.getResource(r);

if(s==undefined){
s=this.createNewLocalThread
(r,
this.$MercuryThreads_viewer===n?
[this.$MercuryThreads_viewer]:
[this.$MercuryThreads_viewer,n],
o);



!q&&this.$MercuryThreads_serverRequests.fetchThreadData([r],p);}


return s;};
l.prototype.







createNewLocalThread=
function(n,
o,
p){

var q=this.$MercuryThreads_threads.getResource(n);
if(!q){var r=
c('MercuryIDs').tokenize(n),s=r.type,t=r.value;
q=new (c('ImmutableObject'))
({thread_id:n,
participants:Array.from(o),
admin_ids:[],
name:'',
snippet:'',
snippet_sender:null,
unread_count:p?p:0,
message_count:0,
image_src:null,
timestamp:null,
other_user_fbid:s==='user'?t:null,
is_canonical_user:s=='user',
is_canonical:this.$MercuryThreads_isCanonicalFromInitialParticipants(o),
is_subscribed:true,
folder:c('MessagingTag').INBOX,
is_archived:false});

this.$MercuryThreads_threads.setResource(n,q);}


return q;};
l.prototype.

createNewLocalThreadGenerateID=function(){
var n=c('MercuryLocalIDs').generateThreadID();
this.createNewLocalThread(n,[]);

return n;};
l.prototype.






isEmptyLocalThread=function(n){
var o=this.$MercuryThreads_threads.getResource(n);
if(!o)
return false;


return c('MercuryThreadInfo').isEmptyLocalThread(o);};
l.prototype.





isNewEmptyLocalThread=function(n){
var o=this.$MercuryThreads_threads.getResource(n);
if(!o)
return false;


return c('MercuryThreadInfo').isNewEmptyLocalThread(o);};
l.prototype.




$MercuryThreads_updateMetadataByActions=
function(n,
o){

if(!n||!n.length)
return;


var p=new (c('Map'))(),
q=new (c('Map'))(),
r=new (c('Map'))(),
s=[];

for(var t=0;t<n.length;t++){
var u=n[t],



v=u.action_type;
if(v==c('MercuryActionType').LOG_MESSAGE&&
u.log_message_type==c('MercuryLogMessageType').SERVER_ERROR)
continue;





var w=
!!(u.sync_id||u.is_from_iris),
x=u.thread_id;
c('MercuryAssert').isThreadID(x);
var y=this.$MercuryThreads_threads.getResource(x);
if(!y&&
!w&&
v==c('MercuryActionType').USER_GENERATED_MESSAGE){
y=this.$MercuryThreads_createLocalMetadataFromMessage(u);
if(!y.participants){
k.debug('missing_local_participants',JSON.stringify(u));
c('ChatReliabilityInstrumentation').logERROR
('missing_local_participants',
{thread_id:x});

this.$MercuryThreads_fakeDFFSender.sendThreadDFF(null,x);
y=new (c('ImmutableObject'))(babelHelpers['extends']({},
y,
{participants:[]}));}


this.$MercuryThreads_threads.setResource(x,y);}




if(!y)
continue;






if(v==c('MercuryActionType').LOG_MESSAGE||
v==c('MercuryActionType').USER_GENERATED_MESSAGE)
w=!o;

if(y.server_timestamp&&
u.timestamp<=y.server_timestamp&&
w)
continue;



if(!r.has(x))
r.set(x,babelHelpers['extends']({},y));


var z=r.get(x);

!!z||h(0,'it shuold have been set');

this.$MercuryThreads_updateMetadataByAction
(z,
u,
o);


var aa=p.get(x);

if(v==c('MercuryActionType').USER_GENERATED_MESSAGE&&
(!aa||
u.timestamp>aa.timestamp))
p.set(x,u);




if((v==c('MercuryActionType').USER_GENERATED_MESSAGE||
v==c('MercuryActionType').LOG_MESSAGE)&&
!u.skip_bump_thread)



if(u&&u.timestamp&&
(!q.has(x)||



u.timestamp>q.get(x).timestamp))
q.set(x,u);}




r.forEach(function(ba,ca){
var da=q.get(ca),
ea=p.get(ca);

if(ea){
this.$MercuryThreads_updateSnippetInfo(ba,ea);}else
if(da&&da.log_message_body){
var fa=babelHelpers['extends']({},
da,
{body:da.log_message_body});

this.$MercuryThreads_updateSnippetInfo(ba,fa);}






var ga=ba.timestamp;
if(da){
if(da.timestamp>ga)
Object.assign(ba,
{timestamp:da.timestamp});



var ha=ba.server_timestamp;
if(!o&&da.timestamp>ha)
ba.server_timestamp=da.timestamp;}



var ia=new (c('ImmutableObject'))(ba);
this.$MercuryThreads_threads.setResource(ca,ia);
s.push(c('MercuryLoggingHelper').obfuscateThread(ia));}.

bind(this),this);

s.length&&this.$MercuryThreads_didChange&&k.debug
('threads_updated',
JSON.stringify({threads:s}));};

l.prototype.





$MercuryThreads_updateMetadataByAction=
function(n,
o,
p){

var q=o.action_type;
if(q==c('MercuryActionType').USER_GENERATED_MESSAGE||
q==c('MercuryActionType').LOG_MESSAGE){
if(o.is_unread||o.skip_bump_thread)
if(!(n.unread_count===0&&o.skip_bump_thread))


n.unread_count++;


n.message_count++;
n.is_archived=false;}


switch(q){
case c('MercuryActionType').DELETE_THREAD:



n.message_count=0;
this.$MercuryThreads_informDeleted(o.thread_id);
break;

case c('MercuryActionType').USER_GENERATED_MESSAGE:


if(n.unread_count===0&&
o.author===this.$MercuryThreads_viewer&&
o.timestamp>=n.last_read_timestamp)
n.last_read_timestamp=o.timestamp;




if(o.offline_threading_id!==o.message_id)
n.last_message_timestamp=o.timestamp;

this.$MercuryThreads_bumpParticipant(n,o.author);
break;

case c('MercuryActionType').SEND_MESSAGE:
var r=o.log_message_type;


if(r==c('MercuryLogMessageType').THREAD_IMAGE){
n.image_src=o.log_message_data.image?
o.log_message_data.image.preview_url:null;
this.$MercuryThreads_informUpdated(o.thread_id);}


if(r!==c('MercuryLogMessageType').SUBSCRIBE&&
r!==c('MercuryLogMessageType').UNSUBSCRIBE)
n.snippet_attachments=o.attachments;


break;

case c('MercuryActionType').LOG_MESSAGE:
var r=o.log_message_type;
if(r==c('MercuryLogMessageType').SUBSCRIBE){
this.$MercuryThreads_addParticipants
(n,
o.log_message_data.added_participants);

this.$MercuryThreads_informUpdated(o.thread_id);}else
if(r==c('MercuryLogMessageType').UNSUBSCRIBE){
this.$MercuryThreads_removeParticipants
(n,
o.log_message_data.removed_participants);

this.$MercuryThreads_informUpdated(o.thread_id);}else
if(r==c('MercuryLogMessageType').THREAD_IMAGE){


if(!p)
n.image_src=o.log_message_data.image?
o.log_message_data.image.preview_url:null;}else

if(r==c('MercuryLogMessageType').THREAD_NAME){
if(n.name!==o.log_message_data.name)
this.$MercuryThreads_informUpdated(o.thread_id);

n.name=o.log_message_data.name;}else
if(r===c('MercuryLogMessageType').GENERIC_ADMIN_TEXT)
this.$MercuryThreads_updateThreadWithGenericAdminMsg(n,o);

break;

case c('MercuryActionType').CHANGE_READ_STATUS:
var s=this.$MercuryThreads_updateThreadReadStatus
(n,
o,
o.mark_as_read);


if(s)

n.last_read_timestamp=n.last_message_timestamp;


var t=
!n.read_only&&n.folder===c('MessagingTag').INBOX;
if(s&&p)
this.$MercuryThreads_serverRequests.changeThreadReadStatus
(n.thread_id,
o.mark_as_read,
o.source,
n.last_read_timestamp,
t,
n.last_message_type);


break;

case c('MercuryActionType').CHANGE_ARCHIVED_STATUS:
if(n.is_archived!=o.archived){
n.is_archived=o.archived;
this.$MercuryThreads_informUpdated(o.thread_id);}

break;

case c('MercuryActionType').CHANGE_FOLDER:
if(n.folder!=o.new_folder){
n.folder=o.new_folder;
this.$MercuryThreads_informUpdated(o.thread_id);}

break;

case c('MercuryActionType').DELETE_MESSAGES:
if(p){


n.snippet='...';
n.snippet_attachments=null;
n.snippet_sender=null;

this.$MercuryThreads_informUpdated(o.thread_id);}else 


if(o.message_ids){
n.message_count-=o.message_ids.length;

c('ifRequired')
('MercuryMessages',
function(v){
v=v.getForFBID(this.$MercuryThreads_fbid);
for(var w=o.message_ids,x=Array.isArray(w),y=0,w=x?w:w[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var z;if(x){if(y>=w.length)break;z=w[y++];}else{y=w.next();if(y.done)break;z=y.value;}var aa=z,ba=
v.getMessagesFromIDs([aa]),ca=ba[0];
if(ca&&
ca.timestamp>n.last_read_timestamp)
n.unread_count=Math.max
(0,
n.unread_count-1);}



this.$MercuryThreads_informUpdated(o.thread_id);}.
bind(this),c('emptyFunction'));}




break;

case c('MercuryActionType').UPDATE_SNIPPET:
c('ifRequired')
('MercuryMessages',
function(v){
v=v.getForFBID(this.$MercuryThreads_fbid);
var w=0,
x=1,y=
v.getThreadMessagesRangeNow
(o.thread_id,
w,
x),z=y[0];

if(z){
n.snippet=z.body;
n.snippet_attachments=z.attachments;
n.snippet_sender=z.author;}else{


n.snippet='...';
n.snippet_attachments=null;
n.snippet_sender=null;


v.getThreadMessagesRange
(o.thread_id,
w,
x,
function(aa){
if(aa.length)
this.$MercuryThreads_dispatcher.handleUpdate
({from_client:true,
actions:

[{thread_id:o.thread_id,
action_type:c('MercuryActionType').UPDATE_SNIPPET,
deleted_ids:o.deleted_ids}]});}.




bind(this));}


this.$MercuryThreads_informUpdated(o.thread_id);}.
bind(this),c('emptyFunction'));


break;

case c('MercuryActionType').CHANGE_MUTE_SETTINGS:
if(Object.prototype.hasOwnProperty.call(o,'reactions_mute_mode')){
n.reactions_mute_mode=o.reactions_mute_mode;}else
if(Object.prototype.hasOwnProperty.call(o,'mentions_mute_mode')){
n.mentions_mute_mode=o.mentions_mute_mode;}else 

n.mute_until=!o.mute_until?
undefined:
o.mute_until;

this.$MercuryThreads_informUpdated(n.thread_id);
break;

case c('MercuryActionType').ADD_PARTICIPANTS:
this.$MercuryThreads_addParticipants(n,o.participants);
this.$MercuryThreads_informUpdated(n.thread_id);
break;

case c('MercuryActionType').CHANGE_FLAG:
this.$MercuryThreads_updateFlagStatus(n,o.mark_as_flag);
this.$MercuryThreads_informUpdated(n.thread_id);
break;

case c('MercuryActionType').MOVE_PENDING_TO_INBOX:
this.$MercuryThreads_movePendingToInbox(n);
this.$MercuryThreads_informUpdated(n.thread_id);
break;

case c('MercuryActionType').UPDATE_CUSTOM_LIKE:
n.custom_like_icon=o.custom_like;
this.$MercuryThreads_informUpdated(n.thread_id);
break;

case c('MercuryActionType').ADD_GROUP_ADMINS:
n.admin_ids=
n.admin_ids.concat(o.added_admin_ids.filter
(function(v){return n.admin_ids.indexOf(v)===-1;}));

this.$MercuryThreads_informUpdated(o.thread_id);
break;

case c('MercuryActionType').REMOVE_GROUP_ADMINS:
n.admin_ids=n.admin_ids.filter
(function(v){return o.removed_admin_ids.indexOf(v)===-1;});

this.$MercuryThreads_informUpdated(o.thread_id);
break;

case c('MercuryActionType').JOINABLE_MODE:
n.joinable_mode=o.joinable_mode;
this.$MercuryThreads_informUpdated(o.thread_id);
break;

case c('MercuryActionType').APPROVAL_MODE:
n.approval_mode=o.approval_mode;
this.$MercuryThreads_informUpdated(o.thread_id);
break;

case c('MercuryActionType').APPROVAL_QUEUE:
if(o.added_id&&
n.approval_queue_ids&&
n.approval_queue_ids.indexOf(o.added_id)===-1)
n.approval_queue_ids=
n.approval_queue_ids.concat(o.added_id);

if(o.removed_id&&
n.approval_queue_ids)
n.approval_queue_ids=
n.approval_queue_ids.filter
(function(v){return o.removed_id!==v;});


this.$MercuryThreads_informUpdated(o.thread_id);
break;
case c('MercuryActionType').IS_PIN_PROTECTED:
n.is_pin_protected=o.is_pin_protected;
this.$MercuryThreads_informUpdated(o.thread_id);
break;
case c('MercuryActionType').UPDATE_RTC_CALL_DATA:




var u=o.initiator_fbid||
(n.rtc_call_data?
n.rtc_call_data.initiator_fbid:
undefined);

n.rtc_call_data=new (c('ImmutableObject'))
({call_state:o.call_state,
server_info_data:o.server_info_data,
initiator_fbid:u});

this.$MercuryThreads_informUpdated(o.thread_id);
break;}};


l.prototype.

$MercuryThreads_updateThreadWithGenericAdminMsg=
function(n,
o){
var p,q=this;
if(o.log_message_data&&
o.log_message_data.untypedData)(function(){
var r=o.log_message_data.untypedData,
event=n.lightweight_event;
switch(o.log_message_data.message_type){
case c('MessagingGenericAdminTextType').THREAD_EPHEMERAL_SEND_MODE:
var s=parseInt(r.ttl,10);
if(s!==null&&n.ephemeral_ttl_mode!==s){
n.ephemeral_ttl_mode=s;
q.$MercuryThreads_informUpdated(o.thread_id);}

break;
case c('MessagingGenericAdminTextType').CHANGE_THREAD_NICKNAME:
var t={};
for(var u in n.custom_nickname){
if(u==r.participant_id&&
r.nickname.trim().length==0)
continue;

t[u]=n.custom_nickname[u];}

if(r.nickname.trim().length>0)
t[r.participant_id]=r.nickname;

n.custom_nickname=t;
q.$MercuryThreads_informUpdated(o.thread_id);
break;
case c('MessagingGenericAdminTextType').CHANGE_THREAD_ICON:
c('requireWeak')
('MercuryThreadActions',
function(y){
y.getForFBID(this.$MercuryThreads_fbid).updateCustomLike
(o.thread_id,
r.thread_icon);}.

bind(q));

break;
case c('MessagingGenericAdminTextType').CHANGE_THREAD_THEME:
var v=r.theme_color;
if(v.length>0){
n.custom_color='#'.concat(v.substring(2));}else 

n.custom_color=null;

q.$MercuryThreads_informUpdated(o.thread_id);
break;
case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_CREATE:
var w={};
w[r.event_creator_id]=i.GOING;
n.lightweight_event=
{track_rsvp:r.event_track_rsvp,
title:r.event_title,
event_time:parseInt(r.event_time,10),
location_name:r.event_location_name,
event_members:w,
oid:r.event_id};

q.$MercuryThreads_informUpdated(o.thread_id);
break;
case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_UPDATE:
case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_UPDATE_TIME:
case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_UPDATE_TITLE:
case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_UPDATE_LOCATION:
if(event)
n.lightweight_event=
q.$MercuryThreads_createLightweightEventPayloadFromAdminMessageData
(r,
event,
event.event_members);


q.$MercuryThreads_informUpdated(o.thread_id);
break;
case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_RSVP:
if(event&&event.event_members){
var x=
q.$MercuryThreads_updateLightweightEventMembersFromAdminMessageData
(event.event_members,
r);

n.lightweight_event=
q.$MercuryThreads_createLightweightEventPayloadFromAdminMessageData
(r,
event,
x);}


q.$MercuryThreads_informUpdated(o.thread_id);
break;
case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_DELETE:
case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_NOTIFY:
n.lightweight_event=null;
q.$MercuryThreads_informUpdated(o.thread_id);
break;}})();};


l.prototype.





$MercuryThreads_updateLightweightEventMembersFromAdminMessageData=
function(n,
o){

var p={};
for(var q in n)
p[q]=n[q];

p[o.guest_id]=o.guest_status;
return p;};
l.prototype.





$MercuryThreads_createLightweightEventPayloadFromAdminMessageData=
function(n,
event,
o){


return {track_rsvp:event.track_rsvp,
title:n.event_title===undefined?
event.title:
n.event_title,
event_time:n.event_time===undefined?
event.event_time:
parseInt(n.event_time,10),
location_name:n.event_location_name===undefined?
event.location_name:
n.event_location_name,
event_members:o===undefined?
event.event_members:
o,
oid:event.oid};};

l.prototype.




$MercuryThreads_createLocalMetadataFromMessage=
function(n){
var o=
c('MercuryIDs').tokenize(n.thread_id),p=o.type,q=o.value,
r=p==='user',
s=r||
n.specific_to_list&&
this.$MercuryThreads_isCanonicalFromInitialParticipants(n.specific_to_list),
t=s||r?
this.$MercuryThreads_getCanonicalParticipantsFromMessage(n):
n.specific_to_list;


return new (c('ImmutableObject'))
({thread_id:n.thread_id,
participants:t,
name:null,
snippet:n.body,
snippet_attachments:[],
snippet_sender:n.author,
unread_count:0,
message_count:0,
image_src:null,
timestamp:n.timestamp,
other_user_fbid:r?q:null,
is_canonical_user:r,
is_canonical:s,
is_subscribed:true,
folder:c('MessagingTag').INBOX,
is_archived:false});};

l.prototype.







$MercuryThreads_updateThreadReadStatus=
function(n,
o,
p){

if(o.timestamp)
this.$MercuryThreads_informChangedReadState
(n.thread_id,p,o.timestamp);



if(!n||!n.thread_id)

return false;


if(!n.timestamp){




this.$MercuryThreads_pendingReadStatusThreads.add(n.thread_id);
return false;}


var q=!n.unread_count;
if(p==q)
return false;


n.unread_count=p?0:1;
this.$MercuryThreads_informUpdated(n.thread_id);

return true;};
l.prototype.




$MercuryThreads_markAllThreadsRead=function(n){
var o=this.$MercuryThreads_threads.getAllResources();

for(var p in o)
if(Object.prototype.hasOwnProperty.call(o,p)){
var q=o[p];
if(q.folder==n){
this.$MercuryThreads_threads.setResource
(p,
c('ImmutableObject').setProperty(q,'unread_count',0));

this.$MercuryThreads_informUpdated(p);}}};



l.prototype.





$MercuryThreads_addParticipants=
function(n,
o){

var p=new (c('Set'))(n.participants);
n.participants=Array.from(n.participants||[]);
o.forEach(function(q){
if(!p.has(q)){
n.participants.push(q);
if(q===this.$MercuryThreads_viewer){
n.is_subscribed=true;
n.can_reply=true;
n.cannot_reply_reason=null;

this.$MercuryThreads_fakeDFFSender.sendThreadDFF
(undefined,
n.thread_fbid);}}}.



bind(this));};
l.prototype.





$MercuryThreads_removeParticipants=
function(n,
o){


var p=new (c('Set'))(o);
if(n&&!n.participants){
c('ChatReliabilityInstrumentation').logERROR
('participants are null in thread_info!',
{thread_info:n});}else 


n.participants=n.participants.filter
(function(q){return !p.has(q);});



if(n&&!n.admin_ids){
c('ChatReliabilityInstrumentation').logERROR
('admin_ids are null in thread_info!',
{thread_info:n});}else 


n.admin_ids=n.admin_ids.filter
(function(q){return !p.has(q);});



if(p.has(this.$MercuryThreads_viewer))
n.is_subscribed=false;


this.$MercuryThreads_serverRequests.fetchThreadData([n.thread_id]);};
l.prototype.





$MercuryThreads_bumpParticipant=
function(n,
o){



if(!n.participants){
var p=JSON.stringify({thread_info:n,participant:o});
k.debug('missing_participants',p);
return;}


var q=n.participants.indexOf(o);
if(q>0)

n.participants=[o].concat
(n.participants.slice(0,q),
n.participants.slice(q+1));};


l.prototype.




$MercuryThreads_updateSnippetInfo=
function(n,
o){


var p=o.body,
q=o.subject,

r='';
if(q){
q=q.toLowerCase();
if(p.slice(0,q.length).toLowerCase()==q){


r=p;}else
if(p){

r=q+' \u00B7 '+p;}else 


r=q;}else 


r=p;


if(o.is_filtered_content)
r=c('MercuryDisplayTimeFilterMessageRenderer').renderFilteredContent(o);


if(c('MessagingGiftWrapChecker').shouldRenderWithGiftWrap(o)){
var s=o.author,
t=s==this.$MercuryThreads_viewer,
u=null;
if(!t){
u=n.custom_nickname&&
n.custom_nickname[
c('MercuryIDs').getUserIDFromParticipantID(s)];
if(!u){
var v=c('MercuryParticipants').getNow(s);
if(v!=null)
u=v.short_name;}}



r=c('MercuryGiftSnippetRenderer').renderText
(t,
u);}



n.snippet=r;
if(o.raw_attachments&&


o.raw_attachments.length>0){
var w=c('MercuryAttachment').convertRaw
(o.raw_attachments);

n.snippet_attachments=w;}else 

n.snippet_attachments=o.attachments;

if(o.log_message_type){
n.snippet_sender=null;}else 

n.snippet_sender=o.author;};

l.prototype.




$MercuryThreads_updateFlagStatus=
function(n,
o){

n.page_thread_info=babelHelpers['extends']({},
n.page_thread_info,
{flagged:o});};

l.prototype.




$MercuryThreads_movePendingToInbox=function(n){
if(n.folder!==c('MessagingTag').PENDING)
return;


n.folder=c('MessagingTag').INBOX;};
l.prototype.




$MercuryThreads_isCanonicalFromInitialParticipants=function(n){
return n.filter(function(o){return o!=this.$MercuryThreads_viewer;}.bind(this)).length<=1;};
l.prototype.




$MercuryThreads_setUpDispatcher=function(){
this.$MercuryThreads_dispatcher.subscribe
('invalidate-thread-state',
function(n,o){return this.$MercuryThreads_invalidateThreadState(o);}.bind(this));


this.$MercuryThreads_dispatcher.subscribe
('invalidate-global-state',
function(n,o){return this.$MercuryThreads_invalidateGlobalState();}.bind(this));


this.$MercuryThreads_dispatcher.subscribe('update-threads',function(n,o){

var p=(o.actions||[]).filter(function(q){return q.thread_id;});


if(o.threads&&
o.payload_source==
c('MercuryPayloadSource').SERVER_FETCH_THREAD_INFO)
o.threads.forEach(function(q){
var r=q.thread_id;
if(this.$MercuryThreads_pendingReadStatusThreads.has(r)){
this.$MercuryThreads_pendingReadStatusThreads['delete'](r);
if(q.unread_count)
this.$MercuryThreads_serverRequests.changeThreadReadStatus
(q.thread_id,
true);}}.



bind(this));




this.$MercuryThreads_updateThreads(o.threads);
this.$MercuryThreads_updateMetadataByActions(p,o.from_client);
o.threads&&o.threads.forEach(function(q){
this.$MercuryThreads_informUpdated(q.thread_id);}.
bind(this));


if(o.global_actions)
o.global_actions.forEach(function(q){
if(q.action_type==c('MercuryGlobalActionType').MARK_ALL_READ)
this.$MercuryThreads_markAllThreadsRead(q.folder);}.

bind(this));


if(this.$MercuryThreads_didChange){
this.$MercuryThreads_didChange=false;
j.emit('change');}}.

bind(this));};
l.prototype.





$MercuryThreads_updateThreads=function(n){
if(!n||!n.length)
return;


var o={},
p=[];

n.forEach(function(q){
var r=new (c('ImmutableObject'))(q);
o[q.thread_id]=r;
p.push(c('MercuryLoggingHelper').obfuscateThread(r));});



p.length&&k.debug
('threads_added',
JSON.stringify({threads:p}));

this.$MercuryThreads_threads.addResourcesAndExecute(o);};
l.prototype.




$MercuryThreads_informUpdated=function(n){
this.$MercuryThreads_didChange=true;
this.$MercuryThreads_threadInformer.updatedThread(n);};
l.prototype.




$MercuryThreads_informDeleted=function(n){
this.$MercuryThreads_didChange=true;
this.$MercuryThreads_threadInformer.deletedThread(n);};
l.prototype.




$MercuryThreads_informChangedReadState=
function(n,
o,
p){

this.$MercuryThreads_didChange=true;
this.$MercuryThreads_threadInformer.changedThreadReadState(n,o,p);};
l.prototype.

$MercuryThreads_invalidateThreadState=function(n){
this.$MercuryThreads_threads.setResource(n,undefined);};
l.prototype.

$MercuryThreads_invalidateGlobalState=function(){
this.$MercuryThreads_didChange=false;
this.$MercuryThreads_threads=new (c('KeyedCallbackManager'))();
this.$MercuryThreads_pendingReadStatusThreads=new (c('Set'))();
this.$MercuryThreads_fetchQueued=false;
this.$MercuryThreads_missingIDs=new (c('Set'))();
this.$MercuryThreads_pendingIDs=new (c('Set'))();};
l.prototype.

$MercuryThreads_getCanonicalParticipantsFromMessage=
function(n){

if(n.specific_to_list)
return n.specific_to_list;
var o=
c('MercuryIDs').tokenize(n.thread_id),p=o.type,q=o.value;
if(!q||p!=='user')
return [this.$MercuryThreads_viewer];


return [c('MercuryIDs').getParticipantIDFromUserID(q),
this.$MercuryThreads_viewer];};




var m=new (c('MercurySingletonProvider'))(l);

f.exports=l;}),null);

/** www/__virtual__/x/XMercuryThreadLikeIconController.js */



__d("XMercuryThreadLikeIconController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/mercury\/like_icon\/",{emoji:{type:"String",defaultValue:""}});}),

null);

/** www/__virtual__/x/XMessagingBlockMessagesController.js */



__d("XMessagingBlockMessagesController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/block_messages\/",{});}),

null);

/** www/__virtual__/x/XMessagingGroupJoinThroughHashController.js */



__d("XMessagingGroupJoinThroughHashController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/join_through_hash\/",{link_hash:{type:"String"}});}),

null);

/** www/__virtual__/x/XMessagingGroupJoinableAcceptController.js */



__d("XMessagingGroupJoinableAcceptController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/joinable_accept\/",{thread_fbid:{type:"String"},user_id:{type:"Int"}});}),

null);

/** www/__virtual__/x/XMessagingGroupJoinableInviteController.js */



__d("XMessagingGroupJoinableInviteController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/joinable_invite\/",{thread_fbid:{type:"String"},user_ids:{type:"IntSet"}});}),

null);

/** www/__virtual__/x/XMessagingGroupJoinableRejectController.js */



__d("XMessagingGroupJoinableRejectController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/joinable_reject\/",{thread_fbid:{type:"String"},user_id:{type:"Int"}});}),

null);

/** www/__virtual__/x/XMessagingGroupSetApprovalController.js */



__d("XMessagingGroupSetApprovalController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/set_approval_mode\/",{set_mode:{type:"Enum",enumType:0},thread_fbid:{type:"String"}});}),

null);

/** www/__virtual__/x/XMessagingGroupSetJoinableController.js */



__d("XMessagingGroupSetJoinableController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/set_joinable_mode\/",{set_mode:{type:"Enum",enumType:0},thread_fbid:{type:"String"}});}),

null);

/** www/__virtual__/x/XMessagingSaveAdminsController.js */



__d("XMessagingSaveAdminsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/save_admins\/",{elem_id:{type:"String"},parent_elem_id:{type:"String"},thread_fbid:{type:"String"},admin_ids:{type:"FBIDSet"},add:{type:"Bool",defaultValue:false}});}),

null);

/** www/__virtual__/x/XMessagingSaveNicknameController.js */



__d("XMessagingSaveNicknameController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/save_thread_nickname\/",{source:{type:"Enum",required:true,enumType:1}});}),

null);

/** www/__virtual__/x/XMessagingSaveThreadColorController.js */



__d("XMessagingSaveThreadColorController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/save_thread_color\/",{source:{type:"Enum",required:true,enumType:1}});}),

null);

/** www/__virtual__/x/XMessagingSaveThreadEmojiController.js */



__d("XMessagingSaveThreadEmojiController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/save_thread_emoji\/",{source:{type:"Enum",required:true,enumType:1}});}),

null);

/** www/__virtual__/x/XMessagingUnblockMessagesController.js */



__d("XMessagingUnblockMessagesController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/unblock_messages\/",{});}),

null);

/** www/__virtual__/x/XNFXMessengerBlockActionController.js */



__d("XNFXMessengerBlockActionController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/nfx\/block_messages\/",{thread_fbid:{type:"Int",required:true},av:{type:"Int"},location:{type:"Enum",required:true,enumType:1},__asyncDialog:{type:"Int"}});}),

null);

/** js/mercury/actions/MercuryThreadActions.js */





__d('MercuryThreadActions',['cssVar','AsyncDialog','AsyncRequest','EmojiLikeConstants','MercuryActionType','MercuryAPIArgsSource','MercuryDispatcher','MercuryIDs','MercuryLogMessageType','MercuryMessengerBlockingUtils','MercuryPayloadSource','MercuryServerPayloadPreprocessor','MercuryServerRequests','MercurySingletonMixin','MercurySourceType','MercuryThreadIDMap','MercuryThreads','MercuryViewer','MercuryMessageActions','MercuryMessageObject','MessagingTag','URI','XMercuryThreadLikeIconController','XMessagingGroupJoinableAcceptController','XMessagingGroupJoinableInviteController','XMessagingGroupJoinableRejectController','XMessagingGroupJoinThroughHashController','XMessagingGroupSetApprovalController','XMessagingGroupSetJoinableController','XMessagingSaveAdminsController','XMessagingSaveNicknameController','XMessagingSaveThreadColorController','XMessagingSaveThreadEmojiController','XNFXMessengerBlockActionController','XMessagingBlockMessagesController','XMessagingUnblockMessagesController'],(function a(b,c,d,e,f,g,h){

'use strict';















var i=c('MercuryThreadIDMap').get(),
j=c('MercuryThreads').get(),

k=c('MercuryMessageActions').get(),
l=c('MercuryMessageObject').get();




















function m(n){
this.$MercuryThreadActions_fbid=n;
this.__serverRequests=c('MercuryServerRequests').getForFBID(this.$MercuryThreadActions_fbid);
this.__dispatcher=c('MercuryDispatcher').getForFBID(this.$MercuryThreadActions_fbid);
this.__payloadPreprocessor=
c('MercuryServerPayloadPreprocessor').getForFBID(this.$MercuryThreadActions_fbid);}
m.prototype.






markRead=function(n,o){
this.batchMarkRead([n],o);};
m.prototype.






batchMarkRead=function(n,o){


this.__dispatcher.handleUpdate
(this.$MercuryThreadActions_constructChangeReadStatusPayload(n,true,o));};

m.prototype.






markUnread=function(n,o){
this.batchMarkUnread([n],o);};
m.prototype.






batchMarkUnread=function(n,o){


this.__dispatcher.handleUpdate
(this.$MercuryThreadActions_constructChangeReadStatusPayload(n,false,o));};

m.prototype.






markSeen=function(n,o){


this.__dispatcher.handleUpdate
(this.__constructClientPayload
([n],
c('MercuryActionType').MARK_THREAD_SEEN,
c('MercuryPayloadSource').CLIENT_MARK_THREAD_SEEN,
{persistent:o}));};


m.prototype.






archive=function(n,o){
this.batchArchive([n],o);};
m.prototype.






batchArchive=function(n,o){
n.forEach(function(p){
this.__serverRequests.changeThreadArchivedStatus(p,true,o);}.
bind(this));
this.__dispatcher.handleUpdate
(this.$MercuryThreadActions_constructChangeArchivedStatusPayload(n,true));};

m.prototype.






unarchive=function(n,o){
this.batchUnarchive([n],o);};
m.prototype.






batchUnarchive=function(n,o){
n.forEach(function(p){
this.__serverRequests.changeThreadArchivedStatus(p,false,o);}.
bind(this));
this.__dispatcher.handleUpdate
(this.$MercuryThreadActions_constructChangeArchivedStatusPayload(n,false));};

m.prototype.






markSpam=function(n,o){
this.batchMarkSpam([n],o);};
m.prototype.






batchMarkSpam=function(n,o){
n.forEach(function(p){
this.__serverRequests.markThreadSpam(p,o);}.
bind(this));
this.__dispatcher.handleUpdate
(this.$MercuryThreadActions_constructChangeFolderPayload(n,c('MessagingTag').SPAM));};

m.prototype.






unmarkSpam=function(n,o){
this.batchUnmarkSpam([n],o);};
m.prototype.






batchUnmarkSpam=function(n,o){
n.forEach(function(p){
this.__serverRequests.unmarkThreadSpam(p,o);}.
bind(this));
this.__dispatcher.handleUpdate
(this.$MercuryThreadActions_constructChangeFolderPayload(n,c('MessagingTag').INBOX));};

m.prototype.






changeFolder=function(n,o){
this.batchChangeFolder([n],o);};
m.prototype.






batchChangeFolder=function(n,o){
n.forEach(function(p){
this.__serverRequests.changeThreadFolder(p,o);}.
bind(this));
this.__dispatcher.handleUpdate
(this.$MercuryThreadActions_constructChangeFolderPayload(n,o));};

m.prototype['delete']=






function(n,o){
this.batchDelete([n],o);};
m.prototype.






batchDelete=function(n,o){
n.forEach(function(p){
this.__serverRequests.deleteThread(p,o);}.
bind(this));
this.__dispatcher.handleUpdate
(this.__constructClientPayload
(n,
c('MercuryActionType').DELETE_THREAD,
c('MercuryPayloadSource').CLIENT_DELETE_THREAD));};


m.prototype.





unmute=function(n){
this.updateMuteSetting(n,0);};
m.prototype.






updateMuteSetting=function(n,o){
this.__serverRequests.changeMutingOnThread(n,o);
this.__dispatcher.handleUpdate
(this.__constructClientPayload
([n],
c('MercuryActionType').CHANGE_MUTE_SETTINGS,
c('MercuryPayloadSource').CLIENT_CHANGE_MUTE_SETTINGS,
{mute_until:o}));};


m.prototype.

updateMentionsMuteSetting=function(n,o){
var p=o?1:0;
this.__serverRequests.changeMentionsMutingOnThread(n,p);
this.__dispatcher.handleUpdate
(this.__constructClientPayload
([n],
c('MercuryActionType').CHANGE_MUTE_SETTINGS,
c('MercuryPayloadSource').CLIENT_CHANGE_MUTE_SETTINGS,
{mentions_mute_mode:p}));};


m.prototype.

updateReactionsMuteSetting=function(n,o){
var p=o?1:0;
this.__serverRequests.changeReactionsMutingOnThread(n,p);
this.__dispatcher.handleUpdate
(this.__constructClientPayload
([n],
c('MercuryActionType').CHANGE_MUTE_SETTINGS,
c('MercuryPayloadSource').CLIENT_CHANGE_MUTE_SETTINGS,
{reactions_mute_mode:p}));};


m.prototype.

blockMessages=function(n){
var o=c('XNFXMessengerBlockActionController').getURIBuilder().
setInt('thread_fbid',c('MercuryIDs').getUserIDFromThreadID(n)).
setEnum('location','www_chat_head').
getURI();
c('AsyncDialog').send(new (c('AsyncRequest'))(o));};
m.prototype.

unblockMessages=function(n){
var o=JSON.stringify
({reportable_ent_token:c('MercuryIDs').getUserIDFromThreadID(n),
initial_action_name:c('MercuryMessengerBlockingUtils').block_messages});

new (c('AsyncRequest'))
(new (c('URI'))('/ajax/nfx/messenger_undo_block').
addQueryData
({story_location:'messenger',
context:o})).

send();};
m.prototype.






blockOnMessengerDotCom=function(n){
var o=c('XMessagingBlockMessagesController').getURIBuilder().getURI();

new (c('AsyncRequest'))(o).
setMethod('POST').
setData({fbid:c('MercuryIDs').getUserIDFromThreadID(n)}).
send();};
m.prototype.

unblockOnMessengerDotCom=function(n){
var o=c('XMessagingUnblockMessagesController').getURIBuilder().getURI();

new (c('AsyncRequest'))(o).
setMethod('POST').
setData({fbid:c('MercuryIDs').getUserIDFromThreadID(n)}).
send();};
m.prototype.

leaveGroup=function(n){
if(!j.isEmptyLocalThread(n))
k.send
(l.constructLogMessageObject
(c('MercurySourceType').TITAN_WEB,
n,
c('MercuryLogMessageType').UNSUBSCRIBE,
{removed_participants:[c('MercuryViewer').getID()]}),

null,
c('MercuryAPIArgsSource').WEBMESSENGER);};


m.prototype.

changeThreadColor=function(n,o,p){
if(j.isEmptyLocalThread(n))
return;

i.getServerIDFromClientID(n,function(q){
var r={};
if(o!="#0084ff")
r.color_choice=o;

r.thread_or_other_fbid=q;
var s=c('XMessagingSaveThreadColorController').
getURIBuilder().
setEnum('source',p).
getURI();

new (c('AsyncRequest'))(s).
setMethod('POST').
setData(r).
send();});};

m.prototype.

changeThreadEmoji=function(n,o,p){
if(j.isEmptyLocalThread(n))
return;


i.getServerIDFromClientID(n,function(q){
var r={},
s=String.fromCodePoint.apply(String,o);
if(s!==
String.fromCodePoint(c('EmojiLikeConstants').FB_THUMBS_UP_EMOJI)&&
s!==
String.fromCodePoint(c('EmojiLikeConstants').THUMBS_UP_EMOJI_CODES))
r.emoji_choice=s;

r.thread_or_other_fbid=q;
var t=c('XMessagingSaveThreadEmojiController').
getURIBuilder().
setEnum('source',p).
getURI();

new (c('AsyncRequest'))(t).
setMethod('POST').
setData(r).
send();});};

m.prototype.

changeThreadNicknames=function(n,o,p,q){
if(j.isEmptyLocalThread(n))
return;

i.getServerIDFromClientID(n,function(r){
var s=
{thread_or_other_fbid:r,
participant_id:o,
nickname:p},


t=c('XMessagingSaveNicknameController').
getURIBuilder().
setEnum('source',q).
getURI();

new (c('AsyncRequest'))(t).
setMethod('POST').
setData(s).
send();});};

m.prototype.

setJoinableMode=
function(n,
o){

var p=c('XMessagingGroupSetJoinableController').
getURIBuilder().
getURI();

new (c('AsyncRequest'))(p).
setMethod('POST').
setData
({set_mode:n,
thread_fbid:o.thread_fbid}).

send();};
m.prototype.

setApprovalMode=
function(n,
o){

var p=c('XMessagingGroupSetApprovalController').
getURIBuilder().
getURI();

new (c('AsyncRequest'))(p).
setMethod('POST').
setData
({set_mode:n,
thread_fbid:o.thread_fbid}).

send();};
m.prototype.

changeGroupAdmins=function(n,o,p){
var q=
{thread_fbid:n,
admin_ids:o,
add:p},


r=c('XMessagingSaveAdminsController').
getURIBuilder().
getURI();

new (c('AsyncRequest'))(r).
setMethod('POST').
setData(q).
send();};
m.prototype.

joinThroughHash=function(n){
var o=
{link_hash:n},


p=c('XMessagingGroupJoinThroughHashController').
getURIBuilder().
getURI();

new (c('AsyncRequest'))(p).
setMethod('POST').
setData(o).
send();};
m.prototype.

inviteToJoinableGroup=function(n,o){
var p=
{thread_fbid:n,
user_ids:o},


q=c('XMessagingGroupJoinableInviteController').
getURIBuilder().
getURI();

new (c('AsyncRequest'))(q).
setMethod('POST').
setData(p).
send();};
m.prototype.

acceptToJoinableGroup=function(n,o){
var p=
{thread_fbid:n,
user_id:o},


q=c('XMessagingGroupJoinableAcceptController').
getURIBuilder().
getURI();

new (c('AsyncRequest'))(q).
setMethod('POST').
setData(p).
send();};
m.prototype.

rejectToJoinableGroup=function(n,o){
var p=
{thread_fbid:n,
user_id:o},


q=c('XMessagingGroupJoinableRejectController').
getURIBuilder().
getURI();

new (c('AsyncRequest'))(q).
setMethod('POST').
setData(p).
send();};
m.prototype.






addParticipants=function(n,o){
this.__dispatcher.handleUpdate
(this.__constructClientPayload
([n],
c('MercuryActionType').ADD_PARTICIPANTS,
c('MercuryPayloadSource').CLIENT_ADD_PARTICIPANTS,
{participants:o}));};


m.prototype.

updateCustomLike=function(n,o){
var p=c('XMercuryThreadLikeIconController').
getURIBuilder().
setString('emoji',o).
getURI();
new (c('AsyncRequest'))().
setURI(p).
setHandler(function(q){
this.__dispatcher.handleUpdate
(this.__constructClientPayload
([n],
c('MercuryActionType').UPDATE_CUSTOM_LIKE,
c('MercuryPayloadSource').CLIENT_CHANGE_CUSTOM_LIKE,
{custom_like:q.getPayload()}));}.


bind(this)).
send();};
m.prototype.







movePendingToInbox=function(n){
this.__dispatcher.handleUpdate
(this.__constructClientPayload
([n],
c('MercuryActionType').MOVE_PENDING_TO_INBOX,
c('MercuryPayloadSource').CLIENT_MOVE_PENDING_TO_INBOX));};


m.prototype.

updateSnippet=function(n,o){
this.__dispatcher.handleUpdate
(this.__constructClientPayload
([n],
c('MercuryActionType').UPDATE_SNIPPET,
c('MercuryPayloadSource').CLIENT_UPDATE_SNIPPET,
{deleted_ids:o}));};


m.prototype.









$MercuryThreadActions_constructChangeReadStatusPayload=function(n,o,p){
return this.__constructClientPayload
(n,
c('MercuryActionType').CHANGE_READ_STATUS,
c('MercuryPayloadSource').CLIENT_CHANGE_READ_STATUS,
{mark_as_read:o,source:p});};

m.prototype.








$MercuryThreadActions_constructChangeArchivedStatusPayload=function(n,o){
return this.__constructClientPayload
(n,
c('MercuryActionType').CHANGE_ARCHIVED_STATUS,
c('MercuryPayloadSource').CLIENT_CHANGE_ARCHIVED_STATUS,
{archived:o});};

m.prototype.








$MercuryThreadActions_constructChangeFolderPayload=function(n,o){
return this.__constructClientPayload
(n,
c('MercuryActionType').CHANGE_FOLDER,
c('MercuryPayloadSource').CLIENT_CHANGE_FOLDER,
{new_folder:o});};

m.prototype.











__constructClientPayload=function(n,o,p,q){

return {actions:n.map(function(r){return babelHelpers['extends']
({action_type:o,
thread_id:r},
q);}),

from_client:true,
payload_source:p};};





Object.assign(m,c('MercurySingletonMixin'));

f.exports=m;}),null);

/** js/mercury/clients/chat/ChatActivity.js */












__d('ChatActivity',['Arbiter','Event','JSLogger','MercuryConfig','PresenceState','UserActivity'],(function a(b,c,d,e,f,g){








var h=c('MercuryConfig').activity_limit||60000,
i=c('MercuryConfig').idle_limit||1800000,
j=c('MercuryConfig').idle_poll_interval||300000,

k=c('JSLogger').create('chat_activity'),

l=Date.now(),

m=true;

function n(){

var r=Date.now();
return !!(m&&r-l<h);}


var o=Object.assign(new (c('Arbiter'))(),
{isActive:n});


function p(){



var r=l;
l=Date.now();


if(l-r>i){
k.debug('idle_to_active',r);

c('PresenceState').doSync();}


o.inform('activity');}


c('Event').listen(window,'focus',function(){

m=true;
p();});


c('Event').listen(window,'blur',function(){
m=false;});


c('UserActivity').subscribe(function(){
p();});


function q(r){
var s=r&&r.at&&c('PresenceState').verifyNumber(r.at);

if(typeof s!=='number')
s=null;


return s||0;}



setInterval
(function(){
var r=Date.now(),
s=q(c('PresenceState').get()),
t=Math.max
(l,
s);

if(r-t>i){
k.debug('idle',
{cookie:s,
local:l});

o.inform('idle',r-t);}},


j);


c('PresenceState').registerStateStorer(function(r){
var s=q(r);
if(s<l)
r.at=l;

return r;});


c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(r,s){
s.chat_activity=
{activity_limit:h,
idle_limit:i,
idle_poll_interval:j,
last_active_time:l};});



f.exports=o;}),null);

/** js/mercury/clients/messenger/MessengerFluxReduceDispatcher.js */






__d('MessengerFluxReduceDispatcher',['ExplicitRegistrationReactDispatcher'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits



(j,c('ExplicitRegistrationReactDispatcher'));i=h&&h.prototype;function j(){h.apply(this,arguments);}



f.exports=new j({strict:false});}),null);

/** js/mercury/clients/messenger/components/MessengerSharedMediaActions.js */






__d('MessengerSharedMediaActions',['MessengerFluxReduceDispatcher','keyMirror'],(function a(b,c,d,e,f,g){

'use strict';





var h=c('keyMirror')
({CURRENT_LOADED:null,
DELETE_PHOTOS:null,
LATEST_LOADED:null,
LOAD_CURRENT:null,
LOAD_MORE_LATEST:null,
LOAD_MORE_PREVIOUS:null,
PREVIOUS_LOADED:null}),


i='MessengerSharedMedia',

j=
{Types:h,
Namespace:i,

currentLoaded:function k(l){
c('MessengerFluxReduceDispatcher').dispatch
({type:h.CURRENT_LOADED,
namespace:i,
data:l});},



deletePhotos:function k(l,m){
c('MessengerFluxReduceDispatcher').dispatch
({type:h.DELETE_PHOTOS,
namespace:i,
threadFBID:l,
photoFBIDs:m});},



loadCurrent:function k(l,m){
c('MessengerFluxReduceDispatcher').dispatch
({type:h.LOAD_CURRENT,
namespace:i,
threadFBID:l,
photoID:m});},



loadMorePrevious:function k(l,m,n){
c('MessengerFluxReduceDispatcher').dispatch
({type:h.LOAD_MORE_PREVIOUS,
namespace:i,
threadFBID:l,
afterCursor:m,
first:n});},



loadMoreLatest:function k(l,m,n){
c('MessengerFluxReduceDispatcher').dispatch
({type:h.LOAD_MORE_LATEST,
namespace:i,
threadFBID:l,
beforeCursor:m,
last:n});},



previousLoaded:function k(l){
c('MessengerFluxReduceDispatcher').dispatch
({type:h.PREVIOUS_LOADED,
namespace:i,
data:l});},



latestLoaded:function k(l){
c('MessengerFluxReduceDispatcher').dispatch
({type:h.LATEST_LOADED,
namespace:i,
data:l});}};




f.exports=j;}),null);

/** js/mercury/models/MercuryMessages.js */

































































__d('MercuryMessages',['invariant','BanzaiODS','ChatReliabilityInstrumentation','EventEmitter','ImmutableObject','LogHistory','Map','MercuryActionStatus','MercuryActionType','MercuryAssert','MercuryAttachment','MercuryDispatcher','MercuryIDs','MercuryLogMessageType','MercuryMessageClientState','MercuryPayloadSource','MercurySingletonProvider','MercuryMessageActions','MercuryMessageIDs','MessagingGiftWrapConstants','MessengerSharedMediaActions','RangedCallbackManager','MercurySendMessageFields','MercuryServerRequests','MercuryThreadActions','MercuryThreadInformer','MercuryThreads','URI','isMessengerDotComURI','setImmediate'],(function a(b,c,d,e,f,g,h){

'use strict';




































var i=new (c('EventEmitter'))(),
j=c('LogHistory').getInstance('mercury_messages');

function k(p){



switch(p){
case c('MercuryPayloadSource').UNKNOWN:
case c('MercuryPayloadSource').SERVER_INITIAL_DATA:
case c('MercuryPayloadSource').SERVER_FETCH_THREAD_INFO:
case c('MercuryPayloadSource').SERVER_THREAD_SYNC:
return true;}


return false;}
l.


















getForFBID=function(p){
return o.getForFBID(p);};
l.

get=function(){
return o.get();};


function l(p){
this.$MercuryMessages_fbid=p;

this.$MercuryMessages_messageActions=c('MercuryMessageActions').getForFBID(this.$MercuryMessages_fbid);
this.$MercuryMessages_serverRequests=c('MercuryServerRequests').getForFBID(this.$MercuryMessages_fbid);
this.$MercuryMessages_threadInformer=c('MercuryThreadInformer').getForFBID(this.$MercuryMessages_fbid);
this.$MercuryMessages_threads=c('MercuryThreads').getForFBID(this.$MercuryMessages_fbid);
this.$MercuryMessages_threadActions=c('MercuryThreadActions').getForFBID(this.$MercuryMessages_fbid);
this.$MercuryMessages_dispatcher=c('MercuryDispatcher').getForFBID(this.$MercuryMessages_fbid);

this.$MercuryMessages_didChange=false;




this.$MercuryMessages_failedHistoryFetchThreads={};



this.$MercuryMessages_threadsToMessages={};





this.$MercuryMessages_localTitanMessagesCount={};


this.$MercuryMessages_messages=new (c('Map'))();




this.$MercuryMessages_localIdsMap={};



this.$MercuryMessages_uploadMessages={};


this.$MercuryMessages_dispatcher.subscribe('update-messages',function(q,r){
var s=(r.actions||[]).filter(function(u){
var v=u.action_type,

w=
u.thread_id&&

(v==c('MercuryActionType').LOG_MESSAGE||
v==c('MercuryActionType').USER_GENERATED_MESSAGE||
v==c('MercuryActionType').SEND_MESSAGE||
v==c('MercuryActionType').DELETE_THREAD||
v==c('MercuryActionType').DELETE_MESSAGES),





x=
u.upload_id&&u.upload_data&&

(v==c('MercuryActionType').CANCEL_ATTACHMENT_PLACEHOLDER||
v==c('MercuryActionType').CONFIRM_ATTACHMENT_PLACEHOLDER),



y=
v==c('MercuryActionType').REACTION_UPDATE,


z=
u.replaced_message_id&&
v==c('MercuryActionType').REPLACE_MESSAGE,


aa=
u.unwrapped_message_id&&
v==c('MercuryActionType').UNWRAP_MESSAGE;


return w||
x||
y||
z||
aa;}),


t=k(r.payload_source);

this.handleUpdates
(s,
t,
r.payload_source,
r.from_client);


if(r.end_of_history)
this.$MercuryMessages_addFetchedAllHistoryMarkers
(r.end_of_history,
r.payload_source);



if(this.$MercuryMessages_didChange){
this.$MercuryMessages_didChange=false;
i.emit('change');}}.


bind(this));

this.$MercuryMessages_dispatcher.subscribe
('invalidate-thread-state',
function(q,r){
this.$MercuryMessages_invalidateThreadState(r);}.
bind(this));


this.$MercuryMessages_dispatcher.subscribe
('invalidate-global-state',
function(){return this.invalidateGlobalState();}.bind(this));


j.debug('constructed',JSON.stringify({fbid:this.$MercuryMessages_fbid}));}
l.prototype.

getMessagesFromIDs=
function(p){

return (p||[]).
map(function(q){return this.$MercuryMessages_resolveMessageID(q);}.bind(this)).
filter(function(q){return q;});};
l.prototype.

getServerMessageID=function(p){
var q=p;
if(this.$MercuryMessages_localIdsMap[p])
q=this.$MercuryMessages_localIdsMap[p];

return q;};
l.prototype.








hasLoadedNMessages=function(p,q){
var r=this.$MercuryMessages_getCallbackManager(p);

return r.hasReachedEndOfArray()||
r.getCurrentArraySize()>=q;};
l.prototype.








hasLoadedExactlyNMessages=function(p,q){
var r=this.$MercuryMessages_getCallbackManager(p);

return r.getCurrentArraySize()==q;};
l.prototype.

invalidateGlobalState=function(){
var p=Object.keys(this.$MercuryMessages_threadsToMessages);
this.$MercuryMessages_failedHistoryFetchThreads={};
this.$MercuryMessages_threadsToMessages={};
this.$MercuryMessages_localTitanMessagesCount={};
this.$MercuryMessages_messages=new (c('Map'))();
this.$MercuryMessages_localIdsMap={};
p.map
(function(q){return this.$MercuryMessages_threadInformer.invalidatedThread(q);}.bind(this));};

l.prototype.



















getThreadMessagesRange=
function(p,
q,
r,
s,
t,
u){

var v=this.$MercuryMessages_getCallbackManager(p),

w=function(ga){
s(this.$MercuryMessages_getMessagesFromIDs(ga));}.
bind(this),
x=v.executeOrEnqueue
(q,
r,
w),

y=v.getUnavailableResources
(x),





z=this.$MercuryMessages_failedHistoryFetchThreads[p];

if(y.length&&!z){
















var aa=v.getCurrentArraySize(),
ba=this.$MercuryMessages_localTitanMessagesCount[p]||0,
ca=aa-ba,
da=y.length+ba,
ea=this.getCurrentlyLoadedMessages(p),
fa=ea.length?
ea[0].timestamp:
null;

j.debug('fetch_missing_messages',JSON.stringify
({threadID:p,
offset:q,
limit:r,
timestamp:fa,
missingIndices:y,
messageCount:aa,
localMessageCount:ba}));


this.$MercuryMessages_serverRequests.fetchThreadMessages
(p,
ca,
da,
fa,
t,
u);}else 




this.$MercuryMessages_failedHistoryFetchThreads[p]=false;


return x;};
l.prototype.





getThreadMessagesRangeNow=
function(p,
q,
r){

var s=this.$MercuryMessages_getCallbackManager(p),
t=[];

for(var u=q;u<q+r;u++){
var v=s.getResourceAtIndex(u),
w=v&&this.$MercuryMessages_resolveMessageID(v);
w&&t.push(w);}


return t;};
l.prototype.








getThreadMessagesSinceTimestamp=
function(p,
q){

var r=this.$MercuryMessages_getCallbackManager(p),
s=r.getElementsUntil(q);

return this.$MercuryMessages_getMessagesFromIDs(s);};
l.prototype.

hasLoadedAllMessages=function(p){
return this.$MercuryMessages_getCallbackManager(p).hasReachedEndOfArray();};
l.prototype.






getCurrentlyLoadedMessages=function(p){
var q=this.$MercuryMessages_getCallbackManager(p).getAllResources();
return this.$MercuryMessages_getMessagesFromIDs(q);};
l.prototype.




unsubscribe=function(p,q){
c('MercuryAssert').isThreadID(q);
var r=this.$MercuryMessages_getCallbackManager(q);
r.unsubscribe(p);};
l.prototype.





$MercuryMessages_addNewMessage=function(p,q){
n(q);
this.$MercuryMessages_messages.set(p,new (c('ImmutableObject'))(q));};
l.prototype.

$MercuryMessages_addNewPageAdminNote=function(p,q){
var r=this.$MercuryMessages_messages.get(p);
if(r){


var s=r.page_admin_notes?r.page_admin_notes.slice():[],
t=false,
u=true;
for(var v=0;v<s.length;++v)
if(s[v].id===q.id){
t=true;
u=false;
break;}else
if((s[v].id===null||s[v].id===undefined)&&
s[v].body===q.body){
t=true;
s[v]=q;}


if(!t)
s.push(q);

if(u){
var w={};
w.page_admin_notes=s;
this.$MercuryMessages_updateMessage(p,r,w);}}};


l.prototype.




$MercuryMessages_updateMessage=
function(p,
q,
r){

var s=c('ImmutableObject').set(q,r);
this.$MercuryMessages_messages.set(p,s);
return s;};
l.prototype.

$MercuryMessages_shouldSortOutOfOrderMessages=
function(p,
q,
r){

if(p==c('MercuryPayloadSource').CLIENT_CHANNEL_MESSAGE){
var s=this.getThreadMessagesSinceTimestamp
(q,
r);

if(s.length>0){
c('BanzaiODS').bumpEntityKey('chat.web','channel.messages_reordered');
return true;}}else


if(p===c('MercuryPayloadSource').SERVER_INVALIDATE_THREAD_STATE||
p===c('MercuryPayloadSource').SERVER_INVALIDATE_GLOBAL_STATE)
return true;

return false;};
l.prototype.




$MercuryMessages_preprocessIncomingAction=function(p,q){
var r=p.action_type;



if(q==c('MercuryPayloadSource').CLIENT_CHANNEL_MESSAGE&&
r==c('MercuryActionType').USER_GENERATED_MESSAGE&&
p.offline_threading_id&&
this.$MercuryMessages_localIdsMap[p.offline_threading_id]===
p.offline_threading_id){
p.client_message_id=p.offline_threading_id;
p.status=c('MercuryActionStatus').SUCCESS;
p.action_type=c('MercuryActionType').SEND_MESSAGE;

r=p.action_type;}





if(q===c('MercuryPayloadSource').CLIENT_CHANNEL_MESSAGE&&
r==c('MercuryActionType').USER_GENERATED_MESSAGE){




var s=this.$MercuryMessages_threads.getThreadMetaNow(p.thread_id);
if(s&&s.folder)
p.folder=s.folder;

c('ChatReliabilityInstrumentation').logMESSAGE_RECEIVED();}

return p;};
l.prototype.

handleUpdates=
function(p,
q,
r,
s){

var t=void 0,


u={};

for(var v=0;v<p.length;v++){
var w=this.$MercuryMessages_preprocessIncomingAction(p[v],r),
x=w.action_type,
y=w.message_id?
this.$MercuryMessages_resolveMessageID(w.message_id):
null;

if(x==c('MercuryActionType').LOG_MESSAGE)
if(this.isLocalMessage(w))
continue;






if(r==c('MercuryPayloadSource').SERVER_SEARCH){
if(!this.$MercuryMessages_messages.has(w.message_id))
this.$MercuryMessages_addNewMessage(w.message_id,w);

continue;}else

if(w.client_state===c('MercuryMessageClientState').SEND_TO_SERVER){





this.$MercuryMessages_addNewMessage(w.message_id,w);
continue;}else
if(x==c('MercuryActionType').SEND_MESSAGE){

var z=w.client_message_id,


aa=this.$MercuryMessages_resolveMessageID(z);
if(z&&aa&&w.status){
var ba=aa.status;



if(aa.status==c('MercuryActionStatus').SUCCESS)
continue;


if(!u[w.thread_id])




u[w.thread_id]=[];


this.$MercuryMessages_updateLocalMessage(w);

if(typeof ba!==undefined||
w.status==c('MercuryActionStatus').FAILED_UNKNOWN_REASON||
w.status==c('MercuryActionStatus').UNABLE_TO_CONFIRM||
w.status==c('MercuryActionStatus').SUCCESS||
w.status==c('MercuryActionStatus').ERROR){
var ca=this.$MercuryMessages_resolveMessageID(z);
if(ca)
this.$MercuryMessages_emitUpdatedChange
(w.thread_id,
ca.message_id,
r);}}







continue;}else
if(x==c('MercuryActionType').DELETE_THREAD){

this.$MercuryMessages_getCallbackManager(w.thread_id).removeAllResources();
continue;}else
if(x==c('MercuryActionType').DELETE_MESSAGES){
this.$MercuryMessages_deleteMessages(w.thread_id,w.message_ids,r);

c('setImmediate')(function(){
this.$MercuryMessages_threadActions.updateSnippet
(w.thread_id,
w.message_ids);}.

bind(this));
continue;}else
if(x===c('MercuryActionType').REACTION_UPDATE){
if(this.$MercuryMessages_updateMessageReactions(w))
this.$MercuryMessages_prepareEmitUpdatedChange(u,w,r);

continue;}else
if(x==c('MercuryActionType').REPLACE_MESSAGE){

if(this.$MercuryMessages_replaceMessage(w)){
this.$MercuryMessages_prepareEmitUpdatedChange(u,w,r);

q=true;}

continue;}else


if(w.offline_threading_id&&
this.$MercuryMessages_localIdsMap[w.offline_threading_id]&&

(r!=c('MercuryPayloadSource').SERVER_FETCH_THREAD_INFO||this.$MercuryMessages_localIdsMap[w.offline_threading_id]===w.message_id)||


y){



if(y&&w.ranges&&w.ranges.length>0){
var da=y.message_id;
this.$MercuryMessages_updateMessage
(this.$MercuryMessages_localIdsMap[da]||da,
y,
{ranges:w.ranges});


this.$MercuryMessages_emitUpdatedChange
(y.thread_id,
y.message_id,
'link_shim');}


continue;}else

if(x===
c('MercuryActionType').CONFIRM_ATTACHMENT_PLACEHOLDER){

this.$MercuryMessages_confirmAttachmentPlaceholder
(w.upload_id,
w.upload_data);

continue;}else

if(x===c('MercuryActionType').CANCEL_ATTACHMENT_PLACEHOLDER){

this.$MercuryMessages_cancelAttachmentPlaceholder
(w.upload_id,
w.upload_data);

continue;}else
if(x==c('MercuryActionType').UNWRAP_MESSAGE){
if(this.$MercuryMessages_unwrapMessage(w))
this.$MercuryMessages_emitUpdatedChange
(w.thread_id,
w.unwrapped_message_id,
r);}else{




if(r===c('MercuryPayloadSource').CLIENT_SEND_MESSAGE){
this.$MercuryMessages_localIdsMap[w.message_id]=w.message_id;

if(w.thread_id=='root:'+w.offline_threading_id)





this.$MercuryMessages_getCallbackManager(w.thread_id).setReachedEndOfArray();}




if(x==c('MercuryActionType').LOG_MESSAGE&&
w.log_message_type==c('MercuryLogMessageType').SERVER_ERROR)

this.$MercuryMessages_failedHistoryFetchThreads[w.thread_id]=true;



if(w.client_state===
c('MercuryMessageClientState').DO_NOT_SEND_TO_SERVER&&
w.upload_id)

this.$MercuryMessages_uploadMessages[w.upload_id]=w;


if(!u[w.thread_id])
u[w.thread_id]=[];


u[w.thread_id].push(w.message_id);
this.$MercuryMessages_addNewMessage(w.message_id,w);

if(w.offline_threading_id&&
w.offline_threading_id!=w.message_id){

this.$MercuryMessages_localIdsMap[w.offline_threading_id]=w.message_id;
c('MercuryMessageIDs').addServerID
(w.offline_threading_id,
w.message_id);
if(w.threading_id)
c('MercuryMessageIDs').addServerID
(w.threading_id,
w.message_id);}



if(w[c('MercurySendMessageFields').MANUAL_RETRY_CNT]>0){
t=this.$MercuryMessages_getCallbackManager(w.thread_id);
t.resortResources([w.message_id]);


this.$MercuryMessages_emitReorderedChange
(w.thread_id,
c('MercuryPayloadSource').CLIENT_SEND_MESSAGE);}




q=q||this.$MercuryMessages_shouldSortOutOfOrderMessages
(r,w.thread_id,w.timestamp);

if(!q){



var ea=this.$MercuryMessages_resolveMessageID(w.message_id);
if(ea)
this.$MercuryMessages_emitReceivedChange
(ea);}



continue;}}




for(var fa in u){
t=this.$MercuryMessages_getCallbackManager(fa);
var ga=t.getAllResources(),


ha=ga.filter(function(ia){
var ja=this.$MercuryMessages_messages.get(ia);
if(!ja)
return true;

return ja.action_type==c('MercuryActionType').LOG_MESSAGE&&
ja.log_message_type==c('MercuryLogMessageType').SERVER_ERROR;}.
bind(this));

t.removeResources(ha);

if(s)
this.$MercuryMessages_updateLocalTitanMessagesCount
(fa,
u[fa]);


if(q){



t.addResources(u[fa]);
this.$MercuryMessages_emitReorderedChange(fa,r);}else 




t.addResourcesWithoutSorting
(u[fa].reverse(),
0);



this.$MercuryMessages_threadInformer.updatedThread(fa);}


this.$MercuryMessages_didChange&&j.debug('handle_updates',JSON.stringify
({localMessageCounts:this.$MercuryMessages_localTitanMessagesCount}));};

l.prototype.

$MercuryMessages_prepareEmitUpdatedChange=function(p,q,r){

if(!p[q.thread_id])
p[q.thread_id]=[];

this.$MercuryMessages_getCallbackManager(q.thread_id).removeResources
([q.replaced_message_id,
q.offline_threading_id]);

p[q.thread_id].push(q.message_id);

if(q.replaced_message_id)
this.$MercuryMessages_emitUpdatedChange
(q.thread_id,
q.replaced_message_id,
r);


this.$MercuryMessages_emitUpdatedChange
(q.thread_id,
q.message_id||q.messageId,
r);};

l.prototype.

isFirstMessage=function(p){
var q=this.$MercuryMessages_getCallbackManager(p.thread_id);
if(q.getCurrentArraySize()===0)
return false;

var r=q.getResourceAtIndex
(q.getCurrentArraySize()-1),
s=
this.$MercuryMessages_resolveMessageID(r),
t=
s&&s.message_id,
u=
this.$MercuryMessages_resolveMessageID(p.message_id),
v=
u&&u.message_id;

if(!t||!v)
return false;


return q.hasReachedEndOfArray()&&
t==v;};
l.prototype.

isLocalMessage=function(p){
if(p.offline_threading_id!==null&&
p.offline_threading_id===p.message_id)
return true;

return false;};
l.prototype.

$MercuryMessages_deleteMessages=
function(p,
q,
r){

if(!q.length)
return;


this.$MercuryMessages_deleteIndividualMessages(p,q,r);

if(r!==c('MercuryPayloadSource').CLIENT_CHANNEL_MESSAGE)
this.$MercuryMessages_serverRequests.deleteMessages(p,q);


var s=this.$MercuryMessages_getMessagesFromIDs(q);
for(var t=0;t<s.length;t++){
var u=s[t];
if(u&&u.has_attachment){
var v=u.attachments.map(function(w){
if(c('MercuryAttachment').isPhotoAttachment(w)||
c('MercuryAttachment').isVideoAttachment(w))
return w.metadata.fbid;

return null;}).
filter(function(w){return w!==null;});
c('MessengerSharedMediaActions').deletePhotos
(c('MercuryIDs').getThreadFBIDFromThreadID(u.thread_id),
v);}}};



l.prototype.

$MercuryMessages_deleteIndividualMessages=
function(p,
q,
r){



var s=q.
map(function(u){
var v=this.$MercuryMessages_resolveMessageID(u);
return v&&v.message_id;}.
bind(this)).
filter(function(u){return !!u;}),
t=this.$MercuryMessages_getCallbackManager(p);
t.removeResources(s);

this.$MercuryMessages_emitReorderedChange(p,r);};
l.prototype.







$MercuryMessages_updateLocalMessage=function(p){
var q=p.client_message_id;
if(!q)
return false;



var r=this.$MercuryMessages_resolveMessageID(q);
if(!r)
return false;


var s={};
s.status=p.status;






if(p.status===c('MercuryActionStatus').SUCCESS||
p.error_data)
s.error_data=p.error_data;


var t=p.message_id;

if(this.$MercuryMessages_messages.has(t)){



if(r)
this.$MercuryMessages_updateMessage(t,r,s);

return false;}


if(p.threading_id)

s.threading_id=p.threading_id;



if(p.timestamp)
s.timestamp=p.timestamp;


if(p.log_message_data)
s.log_message_data=p.log_message_data;


if(p.ranges&&p.ranges.length){
n(p);
s.ranges=p.ranges;}



if(p.attachments&&p.attachments.length){
s.raw_attachments=null;
s.attachments=p.attachments;}



this.$MercuryMessages_localIdsMap[q]=t;
c('MercuryMessageIDs').addServerID(q,t);


if(r){
var u=this.$MercuryMessages_updateMessage(t,r,s);
this.$MercuryMessages_messages.set(q,new (c('ImmutableObject'))());



if(m(u))
this.$MercuryMessages_localTitanMessagesCount[u.thread_id]--;}



return true;};
l.prototype.

$MercuryMessages_updateMessageReactions=function(p){var q,
r=p.messageId,s=p.reaction,t=p.userId,
u=this.$MercuryMessages_resolveMessageID(r);
if(!u)
return false;


var v=babelHelpers['extends']({},
u.reactions,(q={},q[
t]=s,q));


if(!s)
delete v[t];



this.$MercuryMessages_updateMessage(r,u,{reactions:v});
return true;};
l.prototype.








$MercuryMessages_replaceMessage=function(p){

var q=p.replaced_message_id;
if(!q)
return false;

var r=this.$MercuryMessages_resolveMessageID(q);
if(!r)
return false;

var s=p.message_id,


t={};
if(p.status)
t.status=p.status;




if(p.timestamp&&s!==q)
t.timestamp=p.timestamp;

if(p.log_message_data)
t.log_message_data=p.log_message_data;

if(p.ranges&&p.ranges.length){
n(p);
t.ranges=p.ranges;}

if(p.meta_ranges)
t.meta_ranges=p.meta_ranges;

if(p.attachments&&p.attachments.length){
t.raw_attachments=null;
t.attachments=p.attachments;}

if(p.body&&p.body!==r.body)
t.body=p.body;


if(p.platform_xmd&&
p.platform_xmd!==r.platform_xmd)
t.platform_xmd=p.platform_xmd;


if(p.profile_ranges&&
p.profile_ranges!==r.profile_ranges)
t.profile_ranges=p.profile_ranges;


if(Object.keys(t).length===0)
return false;



c('MercuryMessageIDs').addServerID(s,s);
this.$MercuryMessages_updateMessage(s,r,t);

if(q!==s){

this.$MercuryMessages_messages['delete'](q);


if(r.message_id&&
this.$MercuryMessages_messages.has(r.message_id))

this.$MercuryMessages_messages['delete'](r.message_id);}



return true;};
l.prototype.

$MercuryMessages_unwrapMessage=function(p){
var q=this.$MercuryMessages_resolveMessageID(p.unwrapped_message_id);
if(!q||!q.tags)
return false;


var r=q.tags.slice(0);
r.push(c('MessagingGiftWrapConstants').UNWRAPPED_TAG);
var s={tags:r};
this.$MercuryMessages_updateMessage(p.unwrapped_message_id,q,s);

return true;};
l.prototype.

getNumberLocalMessages=function(p){
return this.$MercuryMessages_localTitanMessagesCount[p]||0;};
l.prototype.





$MercuryMessages_confirmAttachmentPlaceholder=function(p,q){
var r=this.$MercuryMessages_popPendingAttachmentMessage
(p,
q);

delete r.preview_attachments;
this.$MercuryMessages_serverRequests.sendNewMessage(r);};
l.prototype.





$MercuryMessages_cancelAttachmentPlaceholder=function(p,q){
var r=this.$MercuryMessages_popPendingAttachmentMessage
(p,
q);

this.$MercuryMessages_deleteIndividualMessages
(r.thread_id,
[r.message_id]);

if(this.$MercuryMessages_localTitanMessagesCount[r.thread_id])
this.$MercuryMessages_localTitanMessagesCount[r.thread_id]--;};

l.prototype.






$MercuryMessages_popPendingAttachmentMessage=function(p,q){
var r=this.$MercuryMessages_uploadMessages[p];
r||h(0,'Message must exist to update');


r.image_ids=q.image_ids;
r.file_ids=q.file_ids;
r.audio_ids=q.audio_ids;
r.gif_ids=q.gif_ids;
r.video_ids=q.video_ids;

r.client_state=c('MercuryMessageClientState').SEND_TO_SERVER;

delete this.$MercuryMessages_uploadMessages[p];

return r;};
l.prototype.

$MercuryMessages_emitUpdatedChange=function(p,q,r){
this.$MercuryMessages_didChange=true;
this.$MercuryMessages_threadInformer.updatedMessage(p,q,r);};
l.prototype.

$MercuryMessages_emitReceivedChange=function(p){
this.$MercuryMessages_didChange=true;
this.$MercuryMessages_threadInformer.receivedMessage(p);};
l.prototype.

$MercuryMessages_emitReorderedChange=function(p,q){
this.$MercuryMessages_didChange=true;
this.$MercuryMessages_threadInformer.reorderedMessages(p,q);};
l.prototype.




$MercuryMessages_invalidateThreadState=function(p){
if(!this.$MercuryMessages_threadsToMessages[p])
return;


var q=this.$MercuryMessages_threadsToMessages[p].getAllResources();
q.forEach(function(r){


var s=this.$MercuryMessages_resolveMessageID(r),
t=undefined;
if(s)
t=s.offline_threading_id;

this.$MercuryMessages_messages['delete'](r);

if(t){
var u=this.$MercuryMessages_localIdsMap[t];
if(u)
this.$MercuryMessages_messages['delete'](u);

delete this.$MercuryMessages_localIdsMap[t];}


delete this.$MercuryMessages_localIdsMap[r];}.
bind(this));
delete this.$MercuryMessages_threadsToMessages[p];};
l.

addListener=function(p,q){
return i.addListener(p,q);};
l.prototype.


$MercuryMessages_resolveMessageID=function(p){
var q=p;
if(this.$MercuryMessages_localIdsMap[p])
q=this.$MercuryMessages_localIdsMap[p];


return this.$MercuryMessages_messages.get(q);};
l.prototype.

$MercuryMessages_getCallbackManager=function(p){
if(!this.$MercuryMessages_threadsToMessages[p])
this.$MercuryMessages_threadsToMessages[p]=new (c('RangedCallbackManager'))
(function(q){
var r=this.$MercuryMessages_resolveMessageID(q);
return r&&r.timestamp;}.
bind(this),
function(q,r){
return r-q;});




return this.$MercuryMessages_threadsToMessages[p];};
l.prototype.

$MercuryMessages_addFetchedAllHistoryMarkers=function(p,q){
p.forEach(function(r){
var s=this.$MercuryMessages_getCallbackManager(r);
s.setReachedEndOfArray();






this.$MercuryMessages_emitReorderedChange(r,q);}.
bind(this));};
l.prototype.

$MercuryMessages_getMessagesFromIDs=function(p){
var q=p.reduce(function(r,s){
var t=this.$MercuryMessages_resolveMessageID(s);
if(t)
r.push(t);


return r;}.
bind(this),[]);


return q.reverse();};
l.prototype.

$MercuryMessages_updateLocalTitanMessagesCount=
function(p,
q){

var r=q.filter(function(s){
return (m(this.$MercuryMessages_resolveMessageID(s)));}.bind(this));

if(!this.$MercuryMessages_localTitanMessagesCount[p])
this.$MercuryMessages_localTitanMessagesCount[p]=0;

this.$MercuryMessages_localTitanMessagesCount[p]+=r.length;};



function m(p){
var q=p.action_type;
if(q==c('MercuryActionType').USER_GENERATED_MESSAGE)
return true;


switch(p.log_message_type){
case c('MercuryLogMessageType').SUBSCRIBE:
case c('MercuryLogMessageType').UNSUBSCRIBE:
case c('MercuryLogMessageType').SERVER_ERROR:
case c('MercuryLogMessageType').LIVE_LISTEN:
return false;

default:return true;}}



function n(p){
if(!p.ranges)
return;

p.ranges.forEach(function(q){
if(!q.entity||

q.entity.external||
!q.entity.url)
return;


var r=new (c('URI'))(q.entity.url);






if(c('isMessengerDotComURI')(c('URI').getRequestURI())&&
!r.getDomain()){
r.setProtocol('https').setDomain('www.facebook.com');
q.entity.url=r.toString();}});}




var o=new (c('MercurySingletonProvider'))(l);

f.exports=l;}),null);

/** js/mercury/models/MercuryTimestampTracker.js */






__d('MercuryTimestampTracker',['MercuryActionType','MercuryDispatcher','MercuryPayloadSource','MercurySingletonProvider'],(function a(b,c,d,e,f,g){

'use strict';h.











getForFBID=function(j){
return i.getForFBID(j);};
h.

get=function(){
return i.get();};


function h(j){
this.$MercuryTimestampTracker_fbid=j;

this.$MercuryTimestampTracker_lastTimestamp=0;

this.$MercuryTimestampTracker_dispatcher=c('MercuryDispatcher').getForFBID(this.$MercuryTimestampTracker_fbid);

this.$MercuryTimestampTracker_dispatcher.subscribe
('update-messages',
this.$MercuryTimestampTracker_handleDispatch.bind(this));}

h.prototype.

$MercuryTimestampTracker_handleDispatch=function(j,k){
if(!k.actions||!k.actions.length)
return;




if(k.payload_source===c('MercuryPayloadSource').CLIENT_SEND_MESSAGE||
k.payload_source===c('MercuryPayloadSource').UNKNOWN)
return;


for(var l=0;l<k.actions.length;l++){
var m=k.actions[l],
n=m.action_type;



if(n==c('MercuryActionType').USER_GENERATED_MESSAGE&&
m.thread_id&&
m.timestamp>this.$MercuryTimestampTracker_lastTimestamp)
this.$MercuryTimestampTracker_lastTimestamp=m.timestamp;}};


h.prototype.

getLastUserMessageTimestamp=function(){
return this.$MercuryTimestampTracker_lastTimestamp;};



var i=new (c('MercurySingletonProvider'))(h);

f.exports=h;}),null);

/** js/mercury/clients/chat/ChatTitleBarBlinker.js */






__d('ChatTitleBarBlinker',['ChatActivity','DocumentTitle','JSLogger','MercuryThreadInformer','MercuryNotificationRenderer','PresenceState','MercuryTimestampTracker'],(function a(b,c,d,e,f,g){

'use strict';




var h=c('MercuryThreadInformer').get(),


i=c('MercuryTimestampTracker').get(),

j=c('JSLogger').create('chat_title'),

k=null,
l=0,
m=false;




function n(){
if(k){
k.stop();
k=null;
return true;}

return false;}


function o(u){



var v=u||i.getLastUserMessageTimestamp();
if(l<=v){
l=v;



if(n()||m)
c('PresenceState').doSync();}}




var p=
{blink:function u(v,w){


if(!k&&l<w)
c('MercuryNotificationRenderer').renderDocumentTitle(v,function(x){
if(!k)
k=c('DocumentTitle').blink(x);});},





stopBlinking:function u(){
o();},





blinkingElsewhere:function u(){
m=true;}};












function q(u){
var v=c('PresenceState').verifyNumber(u.sb2);
if(!v||v<=l)
return null;


return v;}






function r(u){
var v=u&&q(u);
if(v){
l=v;
j.debug('load',l);
n();


m=false;}}



function s(u){
var v=q(u);
if(!v){
j.debug('store',l);
u.sb2=l;


m=false;}


return u;}


c('PresenceState').registerStateStorer(s);
c('PresenceState').registerStateLoader(r);





h.subscribe('thread-read-changed',function(u,v){
var w=i.getLastUserMessageTimestamp(),
x=0;

for(var y in v)


if(v[y].mark_as_read&&
v[y].timestamp>=w&&
v[y].timestamp>x)
x=v[y].timestamp;



x&&o(x);});






c('ChatActivity').subscribe('activity',function(){return o();});

var t=c('PresenceState').getInitial();
if(t)
l=q(t)||0;


f.exports=p;}),null);

/** js/mercury/clients/browser/MercuryBrowserAlerts.js */








__d('MercuryBrowserAlerts',['ArbiterMixin','ChatActivity','ChatConfig','ChatOptions','ChatTitleBarBlinker','Event','Map','MercuryBlockedParticipants','MercuryConfig','MercuryIDs','MercuryThreadInfo','MercuryThreads','MercuryViewer','MessagingTag','Sound','UserActivity'],(function a(b,c,d,e,f,g){

'use strict';








var h=c('MercuryBlockedParticipants').get(),



i=c('MercuryThreads').get(),





j=3,
k=600000,

l=new (c('Map'))(),
m=0;



function n(){
return !c('UserActivity').isOnTab()&&!c('UserActivity').hasBeenInactive();}


function o(){
l=new (c('Map'))();}


function p(r){


if(c('ChatOptions').getSetting('sound')&&!n())
c('Sound').play
([c('ChatConfig').get('sound.notif_ogg_url'),
c('ChatConfig').get('sound.notif_mp3_url')],
r,
false);}



var q=Object.assign
({init:function r(){

c('Event').listen
(window,
'focus',
function(){
o();
clearInterval(m);});



c('Event').listen
(window,
'blur',
function(){
m=setInterval
(o,
k);});},





messageReceived:function r(s){
if(s.author&&c('MercuryViewer').isViewer(s.author)||
!s.is_unread||
s.folder!=c('MessagingTag').INBOX&&
s.folder!=c('MessagingTag').ARCHIVED)
return;


var t=s.thread_id,
u=c('ChatActivity').isActive();
if(u){
var v=false;


q.inform('before-alert',
{threadID:t,
cancelAlert:function w(){
v=true;}});}




i.getThreadMeta
(t,
function(w){
var x=c('MercuryThreadInfo').isMuted(w),
y=c('MercuryIDs').getUserIDFromParticipantID
(c('MercuryViewer').getID());


if(x)
if(!c('MercuryThreadInfo').areMentionsMuted(w)){
if(!s.profile_ranges||
!s.profile_ranges.some||
!s.profile_ranges.some
(function(ba){return ba.id===y;}))

return;}else 


return;



if(h.isPresentInGroupThread(w))
return;


var z=s.timestamp;

if(u){


!v&&p(z);}else{


c('ChatTitleBarBlinker').blink(t,z);



var aa=
l.get(t)||0;
if(aa<j){
l.set
(t,
aa+1);

p(z);}}





c('ChatTitleBarBlinker').blinkingElsewhere();});}},


c('ArbiterMixin'));


f.exports=q;}),null);

/** js/mercury/clients/chat/ChatAppActions.js */






__d('ChatAppActions',['ChatDispatcher','ChatAppActionTypes'],(function a(b,c,d,e,f,g){

'use strict';




var h=
{tti:function i(){
c('ChatDispatcher').dispatch
({type:c('ChatAppActionTypes').TTI});},



hide:function i(){
c('ChatDispatcher').dispatch
({type:c('ChatAppActionTypes').HIDE});},



unhide:function i(){
c('ChatDispatcher').dispatch
({type:c('ChatAppActionTypes').UNHIDE});},



setInitialDisplayDone:function i(){
c('ChatDispatcher').dispatch
({type:c('ChatAppActionTypes').INITIAL_DISPLAY_DONE});},



load:function i(){
c('ChatDispatcher').dispatch
({type:c('ChatAppActionTypes').LOAD});}};




f.exports=h;}),null);

/** js/mercury/clients/chat/components/montage/MontageDispatcher.js */






__d('MontageDispatcher',['ExplicitRegistrationDispatcher'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits



(j,c('ExplicitRegistrationDispatcher'));i=h&&h.prototype;function j(){h.apply(this,arguments);}


f.exports=new j({strict:false});}),null);

/** js/mercury/clients/chat/components/montage/MontageActions.js */






__d('MontageActions',['MontageDispatcher','keyMirror'],(function a(b,c,d,e,f,g){

'use strict';





var h=c('keyMirror')
({REQUEST_UPDATE:null,
HAS_UPDATED:null}),


i=
{Types:h,

requestUpdate:function j(k){
c('MontageDispatcher').dispatch
({type:h.REQUEST_UPDATE,
threadFBID:k});},



hasUpdated:function j(k){
c('MontageDispatcher').dispatch
({type:h.HAS_UPDATED,
threadFBID:k});}};




f.exports=i;}),null);

/** js/mercury/clients/fanta/FantaConst.js */






__d('FantaConst',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
{DEFAULT_ALLOWED_RAISED_TABS:2,
DEFAULT_MESSAGE_COUNT:10};


f.exports=h;}),null);

/** js/mercury/clients/fanta/FantaTypeTab.js */






__d('FantaTypeTab',['immutable'],(function a(b,c,d,e,f,g){

'use strict';var h,i,



j=
{focusCounter:0,
id:'',
isMinimized:false,
openCounter:0,
focusOnMountDEPRECATED:false};h=babelHelpers.inherits


(k,c('immutable').Record(j));i=h&&h.prototype;function k(){h.apply(this,arguments);}







f.exports=k;}),null);

/** js/mercury/clients/fanta/FantaTypeTabGroup.js */






__d('FantaTypeTabGroup',['FantaConst','FantaTypeTab','immutable'],(function a(b,c,d,e,f,g){

'use strict';var h,i,





j=
{allowedRaisedTabs:c('FantaConst').DEFAULT_ALLOWED_RAISED_TABS,
focusedTabID:null,
tabs:c('immutable').Map({}),
updatedTime:0};h=babelHelpers.inherits




(k,c('immutable').Record(j));i=h&&h.prototype;k.prototype.





getRaisedandUnraisedTabs=function(){



var l=function q(r){return r.openCounter;},
m=function q(r){return r.focusCounter*-1;},

n=this.tabs.
sortBy(m),
o=n.
slice(this.allowedRaisedTabs),
p=n.
take(this.allowedRaisedTabs).
sortBy(l);


return {raisedTabs:p,
unraisedTabs:o};};

function k(){h.apply(this,arguments);}


f.exports=k;}),null);

/** js/mercury/clients/fanta/FantaCookieUtil.js */






__d('FantaCookieUtil',['FantaTypeTabGroup','MercuryIDs','MercuryThreads','WorkModeConfig'],(function a(b,c,d,e,f,g){

'use strict';



var h=c('MercuryThreads').get(),








i=
{convertCookieData:function j
(k,
l){

var m=
{tabs:[],
focusedTabID:null,
updatedTime:0},

n=[],

o=this._getCookieKeys();

if(k[o.tabs]){
n=k[o.tabs];}else
if(k.t2)
n=k.t2;


n.forEach(function(u){
m.tabs.push
({id:u.i,
isMinimized:!u.r,
openCounter:u.o,
focusCounter:u.f});});




if(l)
for(var p=l.tabs.values(),q=Array.isArray(p),r=0,p=q?p:p[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var s;if(q){if(r>=p.length)break;s=p[r++];}else{r=p.next();if(r.done)break;s=r.value;}var t=s;
if(h.isEmptyLocalThread(t.id))
m.tabs.push
({id:t.id,
isMinimized:t.isMinimized,
openCounter:t.openCounter,
focusCounter:t.focusCounter});}





m.focusedTabID=k[o.focusedTabID]||
k.lm2;
m.updatedTime=k[o.updatedTime];

return m;},


createCookieData:function j(k,l){
var m=[],

n=this._getCookieKeys();

for(var o=k.tabs.values(),p=Array.isArray(o),q=0,o=p?o:o[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var r;if(p){if(q>=o.length)break;r=o[q++];}else{q=o.next();if(q.done)break;r=q.value;}var s=r;
if(!c('MercuryIDs').isLocalThread(s.id))
m.push
({i:s.id,
r:s.isMinimized?undefined:1,
o:s.openCounter,
f:s.focusCounter});}




l[n.tabs]=m;
l[n.focusedTabID]=k.focusedTabID;
l[n.updatedTime]=k.updatedTime;

return l;},


_getCookieKeys:function j(){
var k=c('WorkModeConfig').is_work_user;


return {tabs:k?'t3w':'t3',
focusedTabID:k?'lm3w':'lm3',
updatedTime:k?'utc3w':'utc3'};}};




f.exports=i;}),null);

/** js/mercury/clients/fanta/FantaMercuryThreadEventsBootloaded.js */






__d('FantaMercuryThreadEventsBootloaded',['Bootloader','MercuryThreadInformer','MercuryThreads','MercuryViewer'],(function a(b,c,d,e,f,g){

'use strict';


var h=c('MercuryThreadInformer').get(),
i=c('MercuryThreads').get(),


j=
{onMessagesReceived:function k(l){
h.subscribe('messages-received',function(m,n){var o,p=function r
(s){var t,
u=n[s],v=function x

(y){
var z=u[y];


if(z.author!=c('MercuryViewer').getID()){
if(!z.is_unread)
return 'continue';


i.getThreadMeta(s,function(aa){
c('Bootloader').loadModules(["ChatTabPolicy"],function(ba){
ba.messageIsAllowed
(aa,
z,
function(){
l(s,z);});},

'FantaMercuryThreadEventsBootloaded');});}};

for(var w=0;w<u.length;w++){var t=v(w);if(t==='continue')continue;}};
for(var q in n)p(q);});}};





f.exports=j;}),null);

/** js/mercury/clients/fanta/FantaMessageActions.js */






__d('FantaMessageActions',['Bootloader','FantaDispatcher','MercuryConfig','ifRequired','keyMirror','emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';









var h=c('keyMirror')
({CANCEL_FILE_UPLOAD:null,
COMPOSER_TEXT_UPDATE:null,
LINK_PREVIEW:null,
LOADED_SHARE_DATA:null,
LOADING_SHARE_DATA:null,
PREPARE_FILES_FOR_SEND:null,
RECEIVED_NEW_MESSAGE:null,
SEND_GROUP_MESSAGE:null,
SEND_HOT_LIKE:null,
SEND_MESSAGE:null,
SEND_PHOTO:null,
SEND_STICKER:null,
UPDATE_GROUP_NAME:null,
UPLOAD_FILE_FAILED:null,
UPLOADED_FILE:null});


function i(){
var l=document.createElement('form');
l.action=c('MercuryConfig').upload_url;
l.method='post';

return l;}


function j
(l,
m){

var n=document.createElement('input');
n.type='file';
n.name='attachment[]';
n.multiple=true;

if(m)
n.onchange=m;


l.appendChild(n);

return n;}


var k=
{Types:h,

prepareFilesForSend:function l(m,n){
this.dispatchOrBootloadUploader(function(){
c('FantaDispatcher').dispatch
({type:h.PREPARE_FILES_FOR_SEND,
tabID:m,
files:n});});},







openUploadFilePicker:function l(m){
var n=i(),
o=j(n,function(){
k.prepareFilesForSend(m,this.files);});

o.click();},


uploadedFile:function l(m,n,o){
this.dispatchOrBootloadUploader(function(){
c('FantaDispatcher').dispatch
({type:h.UPLOADED_FILE,
tabID:m,
uploadID:n,
payload:o});});},




uploadFileFailed:function l(m,n){
this.dispatchOrBootloadUploader(function(){
c('FantaDispatcher').dispatch
({type:h.UPLOAD_FILE_FAILED,
tabID:m,
uploadID:n});});},




cancelFileUpload:function l(m,n){
this.dispatchOrBootloadUploader(function(){
c('FantaDispatcher').dispatch
({type:h.CANCEL_FILE_UPLOAD,
tabID:m,
uploadID:n});});},




linkPreview:function l(m,n){
this.dispatchOrBootloadSharePreview(function(){
c('FantaDispatcher').dispatch
({type:h.LINK_PREVIEW,
tabID:m,
uri:n});});},




loadedShareData:function l(m,n){
this.dispatchOrBootloadSharePreview(function(){
c('FantaDispatcher').dispatch
({type:h.LOADED_SHARE_DATA,
tabID:m,
attachmentData:n});});},




loadingShareData:function l(m){
this.dispatchOrBootloadSharePreview(function(){
c('FantaDispatcher').dispatch
({type:h.LOADING_SHARE_DATA,
tabID:m});});},




receivedNewMessage:function l(m,n){
c('FantaDispatcher').dispatch
({type:h.RECEIVED_NEW_MESSAGE,
tabID:m,
message:n});},



updateGroupName:function l
(m,
n){

this.dispatchOrBootloadSendMessages(function(){
c('FantaDispatcher').dispatch
({type:h.UPDATE_GROUP_NAME,
threadID:m,
newName:n});});},




sendGroupMessage:function l
(m,
n){

this.dispatchOrBootloadSendMessages(function(){
c('FantaDispatcher').dispatch
({type:h.SEND_GROUP_MESSAGE,
threadID:m,
onSendSuccess:n});});},




sendMessage:function l
(m,
n,
o){

this.dispatchOrBootloadSendMessages(function(){
c('FantaDispatcher').dispatch
({type:h.SEND_MESSAGE,
threadID:m,
message:n,
onSendSuccess:o});});},




sendPhoto:function l
(m,
n,
o){

this.dispatchOrBootloadSendMessages(function(){
c('FantaDispatcher').dispatch
({type:h.SEND_PHOTO,
onSendSuccess:o,
photoData:n,
threadID:m});});},




sendHotLike:function l
(m,
n,
o,
p,
q){

this.dispatchOrBootloadSendMessages(function(){
c('FantaDispatcher').dispatch
({type:h.SEND_HOT_LIKE,
emoji:n,
onSendSuccess:q,
size:o,
source:p,
threadID:m});});},




sendSticker:function l
(m,
n,
o){

this.dispatchOrBootloadSendMessages(function(){
c('FantaDispatcher').dispatch
({type:h.SEND_STICKER,
threadID:m,
stickerID:n,
onSendSuccess:o});});},




composerTextUpdate:function l(m,n){
if(c('MercuryConfig').FantaTabView){

if(n.length>0)
c('ifRequired')
('FantaReducersSendMessages',c('emptyFunction'),

function(){return this.dispatchOrBootloadSendMessages(c('emptyFunction'));}.bind(this));



this.dispatchOrBootloadSharePreview(function(){
c('FantaDispatcher').dispatch
({type:h.COMPOSER_TEXT_UPDATE,
threadID:m,
message:n});});}else 



c('FantaDispatcher').dispatch
({type:h.COMPOSER_TEXT_UPDATE,
threadID:m,
message:n});},




dispatchOrBootloadSendMessages:function l(m){


c('ifRequired')
('FantaReducersSendMessages',function(){
m();},

function(){
c('Bootloader').loadModules
(["FantaAppStore","FantaReducersSendMessages"],
function(n,o){
n.addReducers(o);
m();},
'FantaMessageActions');});},





dispatchOrBootloadUploader:function l(m){


c('ifRequired')
('FantaReducersFileUploader',function(){
m();},

function(){
c('Bootloader').loadModules
(["FantaAppStore","FantaReducersFileUploader"],
function(n,o){
n.addReducers(o);
m();},
'FantaMessageActions');});},





dispatchOrBootloadSharePreview:function l(m){


c('ifRequired')
('FantaReducersSharePreview',function(){
m();},

function(){
c('Bootloader').loadModules
(["FantaAppStore","FantaReducersSharePreview"],
function(n,o){
n.addReducers(o);
m();},
'FantaMessageActions');});}};






f.exports=k;}),null);

/** js/mercury/clients/web_messenger/permalinks/isWebMessengerURI.js */




__d("isWebMessengerURI",[],(function a(b,c,d,e,f,g){

function h(i){
return /^(\/messages)/.test(i.getPath());}


f.exports=h;}),null);

/** js/mercury/clients/fanta/FantaTabViewportManager.js */





__d('FantaTabViewportManager',['Arbiter','DockTabsViewportCalculator','DockTabsViewportFantaTabUtils','FantaTabActions','immutable','ifRequired','isWebMessengerURI'],(function a(b,c,d,e,f,g){

'use strict';










function h(i){
var j=c('DockTabsViewportCalculator').getInstance(i);
if(!j)
return;


j.registerFantaTabCallbacks
({fantaTabModelStateGetter:function k(){
var l=c('immutable').Map({});
c('ifRequired')('FantaAppStore',function(m){
l=m.getState().tabGroup.tabs;});

return l;},

onAvailableWidthChanged:function k(l){
c('FantaTabActions').setAllowedRaisedTabs
(c('DockTabsViewportFantaTabUtils').getTabCountToFitWidth
(l));}});




c('Arbiter').subscribe('FantaReducersDockCalculator/shouldRecalculate',function(){
j.forceRecalculateChatTabs();});


j.forceRecalculateFBDockWidth();

c('Arbiter').subscribe('page_transition',function(k,l){
if(c('isWebMessengerURI')(l.uri))
c('FantaTabActions').minimizeAllTabs();});}




f.exports=
{init:h};}),null);

/** js/mercury/models/MercuryDelayedDispatcher.js */






__d('MercuryDelayedDispatcher',['MercuryDispatcher','MercuryServerPayloadPreprocessor','MercuryServerRequests','MercurySingletonProvider','MercuryThreadIDMap'],(function a(b,c,d,e,f,g){

'use strict';





















function h(j){
this.$MercuryDelayedDispatcher_fbid=j;
this.$MercuryDelayedDispatcher_pendingUpdates=[];
this.$MercuryDelayedDispatcher_threadIDMap=c('MercuryThreadIDMap').getForFBID(this.$MercuryDelayedDispatcher_fbid);
this.$MercuryDelayedDispatcher_dispatcher=c('MercuryDispatcher').getForFBID(this.$MercuryDelayedDispatcher_fbid);
this.$MercuryDelayedDispatcher_serverRequests=c('MercuryServerRequests').getForFBID(this.$MercuryDelayedDispatcher_fbid);
this.$MercuryDelayedDispatcher_payloadPreprocessor=
c('MercuryServerPayloadPreprocessor').getForFBID(this.$MercuryDelayedDispatcher_fbid);

this.$MercuryDelayedDispatcher_dispatcher.subscribe
('model-update-completed',
function(k,l){return this.$MercuryDelayedDispatcher_handlePendingUpdates();}.bind(this));}

h.

getForFBID=function(j){
return i.getForFBID(j);};
h.

get=function(){
return i.get();};
h.prototype.

handleUpdateWaitForThread=
function(j,
k){


var l=this.$MercuryDelayedDispatcher_threadIDMap.getClientIDFromServerIDNow(k);
if(l){
this.$MercuryDelayedDispatcher_handleUpdate(j);
return;}


this.$MercuryDelayedDispatcher_threadIDMap.getClientIDFromServerID
(k,
function(){return this.$MercuryDelayedDispatcher_pendingUpdates.push({thread_fbid:k,payload:j});}.bind(this));

this.$MercuryDelayedDispatcher_serverRequests.ensureThreadIsFetched(k);};
h.prototype.

$MercuryDelayedDispatcher_handlePendingUpdates=function(){
if(this.$MercuryDelayedDispatcher_pendingUpdates&&this.$MercuryDelayedDispatcher_pendingUpdates.length){var j=
this.$MercuryDelayedDispatcher_pendingUpdates.shift(),k=j.thread_fbid,l=j.payload;
this.handleUpdateWaitForThread(l,k);}};

h.prototype.

$MercuryDelayedDispatcher_handleUpdate=function(j){
if(j.from_client){
this.$MercuryDelayedDispatcher_dispatcher.handleUpdate(j);}else 

this.$MercuryDelayedDispatcher_payloadPreprocessor.handleUpdate(j);};




var i=new (c('MercurySingletonProvider'))(h);

f.exports=h;}),null);

/** shared/mercury/utils/MercuryMessageCustomizations.js */






__d('MercuryMessageCustomizations',[],(function a(b,c,d,e,f,g){

'use strict';






function h
(j,
k){

var l=j.customizations;
if(!l)
return null;


var m=
l.filter(function(n){return n.customization_type===k;});
return m.length>0?
m[0].customization_value:
null;}


function i
(j){

var k=JSON.parse(j),
l=[];
Object.keys(k).forEach(function(m){
l.push({customization_type:m,customization_value:k[m]});});

return l;}


f.exports=
{getCustomizationValue:h,
parseCustomizations:i};}),null);

/** shared/mercury/utils/MercuryProfileRanges.js */






__d('MercuryProfileRanges',['idx'],(function a(b,c,d,e,f,g){

'use strict';



function h(i){
if(!i.id&&i.i)


return {id:i.i,
offset:i.o,
length:i.l};


return i;}


f.exports=
{extractFromDelta:function i(j){var k,l,
m=(k=j)!=null?(l=k.data)!=null?l.prng:l:k;
if(!m)
return undefined;


var n=[];

try{n=JSON.parse(m);
if(n.length>0)
return n.map(h);}catch(

o){}
return n;}};}),
null);

/** shared/mercury/sync/transformers/MercurySyncNewMessageTransformer.js */








__d('MercurySyncNewMessageTransformer',['IrisProtocolMessageLifetime','MercuryActionType','MercuryIDs','MercuryMessageCustomizations','MercuryProfileRanges','MercuryTimestamp','MessagingTag'],(function a(b,c,d,e,f,g){

'use strict';









var h=function j(k){
var l={};

try{l=JSON.parse(k);}catch(
m){}
return l;};


function i(j,k){
var l=parseInt(k.messageMetadata.timestamp,10),
m=
c('MercuryTimestamp').getFormatedTimestamp(l),
n=k.messageMetadata.skipBumpThread,
o=j!==k.messageMetadata.actorFbId,

p=[];


if(k.attachments)
p=k.attachments.map
(function(r){return r.mercury;});



var q=k.messageMetadata.tags?
k.messageMetadata.tags[0]:
undefined;


return {message_id:k.messageMetadata.messageId,
threading_id:null,
offline_threading_id:k.messageMetadata.offlineThreadingId,
author:c('MercuryIDs').getParticipantIDFromUserID
(k.messageMetadata.actorFbId),

author_email:k.messageMetadata.actorFbId+'@facebook.com',
ephemeral_ttl_mode:k.ttl?c('IrisProtocolMessageLifetime')[k.ttl]:0,
timestamp:l,
is_unread:o,
is_filtered_content:false,
is_filtered_content_bh:false,
is_filtered_content_account:false,
is_filtered_content_quasar:false,
is_filtered_content_invalid_app:false,
source:q,
tags:k.messageMetadata.tags,
is_spoof_warning:false,
folder:c('MessagingTag').INBOX,
thread_fbid:k.messageMetadata.threadKey.threadFbId,
other_user_fbid:k.messageMetadata.threadKey.otherUserFbId,
body:k.body!==undefined?k.body:'',
html_body:null,
subject:null,
has_attachment:p.length>0,
attachments:p,
ranges:undefined,
thread_id:null,
action_type:c('MercuryActionType').USER_GENERATED_MESSAGE,
is_from_iris:true,
is_sponsored:!!(k.data&&
k.data.is_sponsored&&
k.data.is_sponsored==='true'),
commerce_message_type:k.data?
k.data.commerce_message_type:
null,
customizations:k.data&&k.data.customization?
c('MercuryMessageCustomizations').parseCustomizations
(k.data.customization):
null,
platform_xmd:k.data&&k.data.platform_xmd?
k.data.platform_xmd:null,
profile_ranges:c('MercuryProfileRanges').extractFromDelta(k),
message_source:k.data&&k.data.message_source_data?
h(k.data.message_source_data).message_source:null,
skip_bump_thread:n,
montage_reply_data:k.data&&k.data.montage_reply_data?
h(k.data.montage_reply_data):
null,
meta_ranges:k.data&&k.data.meta_ranges?
h(k.data.meta_ranges):
null};}



f.exports={transform:i};}),null);

/** shared/mercury/sync/transformers/MercurySyncAdminTextMessageTransformer.js */






__d('MercurySyncAdminTextMessageTransformer',['MercuryActionType','MercuryLogMessageType','MercurySyncNewMessageTransformer'],(function a(b,c,d,e,f,g){

'use strict';





function h(i,j){
var k=
c('MercurySyncNewMessageTransformer').transform(i,j);
k.action_type=c('MercuryActionType').LOG_MESSAGE;
k.log_message_body=j.messageMetadata.adminText;
k.log_message_data=
{message_type:j.type,
untypedData:j.untypedData};

k.log_message_type=c('MercuryLogMessageType').GENERIC_ADMIN_TEXT;
return k;}


f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncClientPayloadTransformer.js */








__d('MercurySyncClientPayloadTransformer',['MercuryActionType'],(function a(b,c,d,e,f,g){

'use strict';



function h(k){
var l=k.payload;


l=JSON.parse(String.fromCharCode.apply(null,l));
var m=l&&l.deltas,
n=m[0];
if(n.deltaMessageReaction){
return i(n.deltaMessageReaction);}else 

return j(n);}



function i(k){

var l=




k.messageId,m=k.offlineThreadingId,n=k.reaction,o=k.senderId,p=k.userId,
q=k.threadKey.threadFbId||
k.threadKey.otherUserFbId;


return {action_type:c('MercuryActionType').REACTION_UPDATE,
messageId:l,
offlineThreadingId:m,

reaction:n?
decodeURIComponent(window.escape(n)):
undefined,
senderId:o,
thread_fbid:q,
userId:p};}



function j(k){
var l=k&&
k.deltaPaymentPinProtectionStatusData,
m=l&&
l.threadKey&&
l.threadKey.otherUserFbId,
n=l&&
l.isPinProtected,

o=m?m.toString():'';

return {action_type:c('MercuryActionType').IS_PIN_PROTECTED,
thread_fbid:o,
is_pin_protected:n};}



f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncDeliveryReceiptTransformer.js */








__d('MercurySyncDeliveryReceiptTransformer',[],(function a(b,c,d,e,f,g){

'use strict';

function h(i){

return {delivery_receipts:

[{other_user_fbid:i.threadKey.otherUserFbId?
i.threadKey.otherUserFbId:
'',
thread_fbid:i.threadKey.threadFbId?
i.threadKey.threadFbId:
'',
time:parseInt(i.deliveredWatermarkTimestampMs,10)}]};}





f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncMarkReadTransformer.js */








__d('MercurySyncMarkReadTransformer',['MercuryActionType','MercuryGlobalActionType','MessagingTag'],(function a(b,c,d,e,f,g){

'use strict';





function h(i){
if(i.folders&&i.folders.length>0)
return i.folders.map(function(j){

return {action_type:c('MercuryGlobalActionType').MARK_ALL_READ,
action_id:null,
folder:c('MessagingTag').IRIS_MAPPING[j],
timestamp:parseInt(i.watermarkTimestamp,10)};});




return i.threadKeys.map(function(j){

return {action_type:c('MercuryActionType').CHANGE_READ_STATUS,
other_user_fbid:j.otherUserFbId,
thread_fbid:j.threadFbId,
mark_as_read:true,
timestamp:parseInt(i.watermarkTimestamp,10),
folder:c('MessagingTag').INBOX};});}




f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncMarkUnreadTransformer.js */








__d('MercurySyncMarkUnreadTransformer',['MercuryActionType','MessagingTag'],(function a(b,c,d,e,f,g){

'use strict';




function h(i){
return i.threadKeys.map(function(j){

return {action_type:c('MercuryActionType').CHANGE_READ_STATUS,
other_user_fbid:j.otherUserFbId,
thread_fbid:j.threadFbId,
mark_as_read:false,
timestamp:parseInt(i.watermarkTimestamp,10),
folder:c('MessagingTag').INBOX};});}




f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncMessageDeleteTransformer.js */








__d('MercurySyncMessageDeleteTransformer',['MercuryActionType'],(function a(b,c,d,e,f,g){

'use strict';



function h(i){

return {action_type:c('MercuryActionType').DELETE_MESSAGES,
message_ids:i.messageIds,
other_user_fbid:i.threadKey.otherUserFbId,
thread_fbid:i.threadKey.threadFbId};}



f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncPagesManagerEventTransformer.js */








__d('MercurySyncPagesManagerEventTransformer',['MercuryActionType','PagesMessagingEventType'],(function a(b,c,d,e,f,g){

'use strict';











function h(i){
var j=JSON.parse(i.jsonBlob),
k=j&&j.type;
if(!k)
return undefined;


switch(k){
case c('PagesMessagingEventType').FLAG:
var l=
!!(j&&j.flagData&&j.flagData.state),

m=
{action_type:c('MercuryActionType').CHANGE_FLAG,
mark_as_flag:l,
other_user_fbid:i.threadKey.otherUserFbId,
thread_fbid:i.threadKey.threadFbId};

return m;

default:return undefined;}}



f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncParticipantLeftGroupThreadTransformer.js */






__d('MercurySyncParticipantLeftGroupThreadTransformer',['MercuryActionType','MercuryIDs','MercuryLogMessageType','MercurySyncNewMessageTransformer'],(function a(b,c,d,e,f,g){






'use strict';

function h(i,j){
var k=
c('MercurySyncNewMessageTransformer').transform(i,j);
k.action_type=c('MercuryActionType').LOG_MESSAGE;
k.log_message_body=j.messageMetadata.adminText;
k.log_message_data=
{removed_participants:
[c('MercuryIDs').getParticipantIDFromUserID(j.leftParticipantFbId)]};


k.log_message_type=c('MercuryLogMessageType').UNSUBSCRIBE;
return k;}


f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncParticipantsAddedToGroupThreadTransformer.js */






__d('MercurySyncParticipantsAddedToGroupThreadTransformer',['MercuryActionType','MercuryIDs','MercuryLogMessageType','MercurySyncNewMessageTransformer'],(function a(b,c,d,e,f,g){






'use strict';

function h(i,j){
var k=
c('MercurySyncNewMessageTransformer').transform(i,j);
k.action_type=c('MercuryActionType').LOG_MESSAGE;
k.log_message_body=j.messageMetadata.adminText;
k.log_message_data=
{added_participants:j.addedParticipants.map
(function(l){
return (c('MercuryIDs').getParticipantIDFromUserID(l.userFbId));})};


k.log_message_type=c('MercuryLogMessageType').SUBSCRIBE;
return k;}


f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncRTCEventLogTransformer.js */






__d('MercurySyncRTCEventLogTransformer',['MercuryActionType','MercuryIDs','MercuryLogMessageType','MercurySyncNewMessageTransformer'],(function a(b,c,d,e,f,g){






'use strict';

function h(i,j){
var k=
c('MercurySyncNewMessageTransformer').transform(i,j),

l=j.messageMetadata.actorFbId,
m=l===i?
j.messageMetadata.threadKey.otherUserFbId:
i;

k.action_type=c('MercuryActionType').LOG_MESSAGE;
k.log_message_body=j.messageMetadata.adminText;
k.log_message_data=
{answered:j.duration>0,
callee:c('MercuryIDs').getParticipantIDFromUserID(m),
caller:c('MercuryIDs').getParticipantIDFromUserID(l)};


k.log_message_type=c('MercuryLogMessageType').VIDEO_CALL;

return k;}


f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncReadReceiptTransformer.js */








__d('MercurySyncReadReceiptTransformer',[],(function a(b,c,d,e,f,g){

'use strict';

function h(i){
var j=
{watermark:parseInt(i.watermarkTimestampMs,10),
action:parseInt(i.actionTimestampMs,10)},

k=i.threadKey.otherUserFbId||i.actorFbId,
l=i.threadKey.otherUserFbId||i.threadKey.threadFbId,

m=
{roger:{}};


m.roger[l]={};
m.roger[l][k]=j;

return m;}


f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncReplaceMessageTransformer.js */








__d('MercurySyncReplaceMessageTransformer',['MercuryActionType','MercurySyncNewMessageTransformer'],(function a(b,c,d,e,f,g){

'use strict';




function h(i,j){
j=Object.assign({},j.newMessage,j);
return Object.assign
(c('MercurySyncNewMessageTransformer').transform(i,j),

{action_type:c('MercuryActionType').REPLACE_MESSAGE,
replaced_message_id:j.replacedMessageId});}




f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncRtcCallDataTransformer.js */








__d('MercurySyncRtcCallDataTransformer',['MercuryActionType'],(function a(b,c,d,e,f,g){

'use strict';



function h(i){
var j=i.messageMetadata.threadKey&&
i.messageMetadata.threadKey.threadFbId?
i.messageMetadata.threadKey.threadFbId.toString():undefined,
k=i.initiator&&i.initiator.userFbId?
i.initiator.userFbId.toString():undefined;

return {action_type:c('MercuryActionType').UPDATE_RTC_CALL_DATA,
thread_fbid:j,
call_state:i.callState,
server_info_data:i.serverInfoData,
initiator_fbid:k};}



f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncThreadActionTransformer.js */






__d('MercurySyncThreadActionTransformer',['MercuryActionType','MessagingThreadAction'],(function a(b,c,d,e,f,g){

'use strict';











function h(i){
var j=
{action_type:c('MercuryActionType').CHANGE_ARCHIVED_STATUS,
thread_fbid:i.threadKey.threadFbId,
other_user_fbid:i.threadKey.otherUserFbId,
archived:i.action===c('MessagingThreadAction').ACTION_ARCHIVED};

return j;}


f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncThreadAdminsAddToGroupTransformer.js */








__d('MercurySyncThreadAdminsAddToGroupTransformer',['MercuryActionType','MercuryIDs'],(function a(b,c,d,e,f,g){

'use strict';




function h(i){

return {action_type:c('MercuryActionType').ADD_GROUP_ADMINS,
action_id:null,
thread_fbid:i.messageMetadata.threadKey.threadFbId,
added_admin_ids:i.addedAdmins.map
(function(j){
return c('MercuryIDs').getParticipantIDFromUserID(j.userFbId);})};}





f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncThreadAdminsRemovedFromGroupTransformer.js */








__d('MercurySyncThreadAdminsRemovedFromGroupTransformer',['MercuryActionType','MercuryIDs'],(function a(b,c,d,e,f,g){

'use strict';




function h(i){

return {action_type:c('MercuryActionType').REMOVE_GROUP_ADMINS,
action_id:null,
thread_fbid:i.messageMetadata.threadKey.threadFbId,
removed_admin_ids:i.removedAdminFbIds.map
(function(j){
return c('MercuryIDs').getParticipantIDFromUserID(j);})};}





f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncThreadApprovalModeTransformer.js */








__d('MercurySyncThreadApprovalModeTransformer',['MercuryActionType','MessengerApprovalModeTypes'],(function a(b,c,d,e,f,g){

'use strict';




function h(i){

return {action_type:c('MercuryActionType').APPROVAL_MODE,
action_id:null,
thread_fbid:i.messageMetadata.threadKey.threadFbId,
approval_mode:c('MessengerApprovalModeTypes')[i.mode]};}



f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncThreadApprovalQueueTransformer.js */








__d('MercurySyncThreadApprovalQueueTransformer',['MercuryActionType','MercuryIDs','MessengerApprovalQueueTypes'],(function a(b,c,d,e,f,g){

'use strict';





function h(i){




var j=c('MercuryIDs').getParticipantIDFromUserID(i.recipientFbId);

return {action_type:c('MercuryActionType').APPROVAL_QUEUE,
action_id:null,
thread_fbid:i.messageMetadata.threadKey.threadFbId,
removed_id:i.action===c('MessengerApprovalQueueTypes').REMOVED?
j:
null,
added_id:i.action===c('MessengerApprovalQueueTypes').REQUESTED?
j:
null};}



f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncThreadDeleteTransformer.js */








__d('MercurySyncThreadDeleteTransformer',['MercuryActionType'],(function a(b,c,d,e,f,g){

'use strict';



function h(i){
return i.threadKeys.map
(function(j){

return {action_type:c('MercuryActionType').DELETE_THREAD,
other_user_fbid:j.otherUserFbId,
thread_fbid:j.threadFbId};});}





f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncThreadJoinableModeTransformer.js */








__d('MercurySyncThreadJoinableModeTransformer',['MercuryActionType','MessengerJoinableModeType'],(function a(b,c,d,e,f,g){

'use strict';




function h(i){





return {action_type:c('MercuryActionType').JOINABLE_MODE,
action_id:null,
thread_fbid:i.messageMetadata.threadKey.threadFbId,
joinable_mode:
{mode:c('MessengerJoinableModeType')[i.mode],
link:i.link}};}




f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncThreadMuteSettingsTransformer.js */






__d('MercurySyncThreadMuteSettingsTransformer',['MercuryActionType'],(function a(b,c,d,e,f,g){

'use strict';










function h(i){
var j=
{action_type:c('MercuryActionType').CHANGE_MUTE_SETTINGS,
thread_fbid:i.threadKey.threadFbId,
other_user_fbid:i.threadKey.otherUserFbId,
mute_until:parseInt(i.expireTime,10)};

return j;}


f.exports={transform:h};}),null);

/** shared/mercury/sync/transformers/MercurySyncThreadNameTransformer.js */








__d('MercurySyncThreadNameTransformer',['MercuryActionType','MercuryLogMessageType','MercurySyncNewMessageTransformer'],(function a(b,c,d,e,f,g){





'use strict';

function h(i,j){
var k=
c('MercurySyncNewMessageTransformer').transform(i,j);
k.action_type=c('MercuryActionType').LOG_MESSAGE;
k.log_message_body=j.messageMetadata.adminText;
k.log_message_data={name:j.name};
k.log_message_type=c('MercuryLogMessageType').THREAD_NAME;
return k;}


f.exports={transform:h};}),null);

/** js/mercury/sync/MercurySyncDispatcher.js */















__d('MercurySyncDispatcher',['MercuryDelayedDispatcher','MercuryGlobalActionType','MercuryPayloadSource','MercuryServerPayloadPreprocessor','MercurySyncThreadAdminsAddToGroupTransformer','MercurySyncThreadAdminsRemovedFromGroupTransformer','MercurySyncAdminTextMessageTransformer','MercurySyncClientPayloadTransformer','MercurySyncDeliveryReceiptTransformer','MercurySyncMarkReadTransformer','MercurySyncMarkUnreadTransformer','MercurySyncMessageDeleteTransformer','MercurySyncNewMessageTransformer','MercurySyncReadReceiptTransformer','MercurySyncPagesManagerEventTransformer','MercurySyncParticipantLeftGroupThreadTransformer','MercurySyncParticipantsAddedToGroupThreadTransformer','MercurySyncRTCEventLogTransformer','MercurySyncThreadDeleteTransformer','MercurySyncThreadMuteSettingsTransformer','MercurySyncThreadNameTransformer','MercurySyncThreadActionTransformer','MercurySyncReplaceMessageTransformer','MercurySyncThreadJoinableModeTransformer','MercurySyncThreadApprovalModeTransformer','MercurySyncThreadApprovalQueueTransformer','MercurySyncRtcCallDataTransformer','MercurySyncDeltaTypes','MercurySingletonProvider','MontageActions'],(function a(b,c,d,e,f,g){

'use strict';

































var h='FOLDER_MONTAGE';i.







getForFBID=function(k){
return j.getForFBID(k);};
i.

get=function(){
return j.get();};



function i(k){
this.$MercurySyncDispatcher_fbid=k;
this.$MercurySyncDispatcher_delayedDispatcher=
c('MercuryDelayedDispatcher').getForFBID(this.$MercurySyncDispatcher_fbid);
this.$MercurySyncDispatcher_payloadPreprocessor=
c('MercuryServerPayloadPreprocessor').getForFBID(this.$MercurySyncDispatcher_fbid);}
i.prototype.

process=function(k){
var l=void 0,
m=void 0;
switch(k['class']){
case c('MercurySyncDeltaTypes').NewMessage:
l=
c('MercurySyncNewMessageTransformer').transform(this.$MercurySyncDispatcher_fbid,k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;

case c('MercurySyncDeltaTypes').ReplaceMessage:
l=
c('MercurySyncReplaceMessageTransformer').transform(this.$MercurySyncDispatcher_fbid,k);

this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;

case c('MercurySyncDeltaTypes').DeliveryReceipt:
l=c('MercurySyncDeliveryReceiptTransformer').transform(k);
this.$MercurySyncDispatcher_payloadPreprocessor.handleUpdate(l);
break;

case c('MercurySyncDeltaTypes').MarkRead:
l=c('MercurySyncMarkReadTransformer').transform(k);


var n=false;
for(var o=0;o<l.length;o++){
var p=l[o];
if(p.action_type===c('MercuryGlobalActionType').MARK_ALL_READ)
n=true;}






if(n)
return;


this.$MercurySyncDispatcher_sendToPayloadPreprocessor(l);
break;
case c('MercurySyncDeltaTypes').MarkUnread:
l=c('MercurySyncMarkUnreadTransformer').transform(k);
this.$MercurySyncDispatcher_sendToPayloadPreprocessor(l);
break;
case c('MercurySyncDeltaTypes').ParticipantLeftGroupThread:
l=c('MercurySyncParticipantLeftGroupThreadTransformer').
transform(this.$MercurySyncDispatcher_fbid,k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;

case c('MercurySyncDeltaTypes').ParticipantsAddedToGroupThread:
l=c('MercurySyncParticipantsAddedToGroupThreadTransformer').
transform(this.$MercurySyncDispatcher_fbid,k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;

case c('MercurySyncDeltaTypes').RTCEventLog:
l=
c('MercurySyncRTCEventLogTransformer').transform(this.$MercurySyncDispatcher_fbid,k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;

case c('MercurySyncDeltaTypes').ThreadName:
l=
c('MercurySyncThreadNameTransformer').transform(this.$MercurySyncDispatcher_fbid,k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;

case c('MercurySyncDeltaTypes').ReadReceipt:
l=c('MercurySyncReadReceiptTransformer').transform(k);
this.$MercurySyncDispatcher_payloadPreprocessor.handleUpdate(l);
break;

case c('MercurySyncDeltaTypes').AdminTextMessage:
l=
c('MercurySyncAdminTextMessageTransformer').transform(this.$MercurySyncDispatcher_fbid,k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;

case c('MercurySyncDeltaTypes').MessageDelete:
m=k.threadKey.threadFbId;
if(m&&k.folder&&k.folder===h){
c('MontageActions').requestUpdate(m);}else{

l=
c('MercurySyncMessageDeleteTransformer').transform(k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);}

break;

case c('MercurySyncDeltaTypes').ThreadAction:
l=
c('MercurySyncThreadActionTransformer').transform(k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;

case c('MercurySyncDeltaTypes').ThreadDelete:
l=
c('MercurySyncThreadDeleteTransformer').transform(k);
this.$MercurySyncDispatcher_sendToPayloadPreprocessor(l);
break;

case c('MercurySyncDeltaTypes').AdminAddedToGroupThread:
l=
c('MercurySyncThreadAdminsAddToGroupTransformer').transform(k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;

case c('MercurySyncDeltaTypes').AdminRemovedFromGroupThread:
l=
c('MercurySyncThreadAdminsRemovedFromGroupTransformer').transform(k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;

case c('MercurySyncDeltaTypes').ThreadMuteSettings:
l=
c('MercurySyncThreadMuteSettingsTransformer').transform(k);
this.$MercurySyncDispatcher_sendToPayloadPreprocessor([l]);
break;

case c('MercurySyncDeltaTypes').PagesManagerEvent:
l=
c('MercurySyncPagesManagerEventTransformer').transform(k);


if(!l)
return;


this.$MercurySyncDispatcher_sendToPayloadPreprocessor([l]);
break;
case c('MercurySyncDeltaTypes').JoinableMode:
l=c('MercurySyncThreadJoinableModeTransformer').transform(k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;
case c('MercurySyncDeltaTypes').ApprovalMode:
l=c('MercurySyncThreadApprovalModeTransformer').transform(k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;
case c('MercurySyncDeltaTypes').ApprovalQueue:
l=c('MercurySyncThreadApprovalQueueTransformer').transform(k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;
case c('MercurySyncDeltaTypes').ClientPayload:
l=c('MercurySyncClientPayloadTransformer').transform(k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;
case c('MercurySyncDeltaTypes').GenieMessage:
l=
c('MercurySyncNewMessageTransformer').transform
(this.$MercurySyncDispatcher_fbid,
k.deltaNewMessage);

this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;
case c('MercurySyncDeltaTypes').MontageMessage:
m=k.newMessage.messageMetadata.actorFbId;
if(m)
c('MontageActions').requestUpdate(m);

break;
case c('MercurySyncDeltaTypes').RtcCallData:
l=c('MercurySyncRtcCallDataTransformer').transform(k);
this.$MercurySyncDispatcher_sendToDelayedDispatcher(l);
break;

default:break;}};

i.prototype.

$MercurySyncDispatcher_sendToDelayedDispatcher=function(k){
var l=k.other_user_fbid||k.thread_fbid;
this.$MercurySyncDispatcher_delayedDispatcher.handleUpdateWaitForThread

({actions:[k],
payload_source:c('MercuryPayloadSource').CLIENT_CHANNEL_MESSAGE},

l);};

i.prototype.

$MercurySyncDispatcher_sendToPayloadPreprocessor=function(k){
this.$MercurySyncDispatcher_payloadPreprocessor.handleUpdate

({actions:k,
payload_source:c('MercuryPayloadSource').CLIENT_CHANNEL_MESSAGE});};





var j=new (c('MercurySingletonProvider'))(i);

f.exports=i;}),null);

/** js/mercury/sync/request/MercurySyncDataFetcherImpl.js */











__d('MercurySyncDataFetcherImpl',['Promise','AsyncRequest','MessagingConfig','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){

'use strict';








var h=c('MessagingConfig').syncFetchRequestTimeoutMs;

function i(k){
return new (c('Promise'))(function(l,m){
j(k,l,m,0);});}



function j
(k,
l,
m,
n){

if(n>c('MessagingConfig').syncFetchRetries){
m();
return;}


var o=n===0?
0:
c('MessagingConfig').syncFetchInitialTimeoutMs*Math.pow
(c('MessagingConfig').syncFetchTimeoutMultiplier,
n);


c('setTimeoutAcrossTransitions')
(function(){
var p=false,

q=function r(){
if(p)
return;

p=true;
j(k,l,m,n+1);};


new (c('AsyncRequest'))().
setURI(k).
setHandler(function(r){
p=true;
l(r);}).

setErrorHandler(q).
setTimeoutHandler(h,q).
setAllowCrossPageTransition(true).
send();},

o);}



f.exports={fetch:i};}),null);

/** js/mercury/sync/request/MercurySyncDataFetcher.js */














__d('MercurySyncDataFetcher',['Promise','LogHistory','MessagingConfig','MercurySyncDataFetcherImpl','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){

'use strict';








var h=c('LogHistory').getInstance('mercury_sync_data_fetcher');



function i(){
var l=0;

for(var m=0;m<c('MessagingConfig').syncFetchRetries;m++){
var n=m===0?
0:
c('MessagingConfig').syncFetchInitialTimeoutMs*Math.pow
(c('MessagingConfig').syncFetchTimeoutMultiplier,
m);


l+=
n+c('MessagingConfig').syncFetchRequestTimeoutMs;}



return l;}


var j=i();

function k(l){
return new (c('Promise'))(function(m,n){
var o=function q(){
h.error('fetch_timeout',JSON.stringify
({timeout:j,
uri:l.toString()}));

n();},

p=c('setTimeoutAcrossTransitions')(o,j);
c('MercurySyncDataFetcherImpl').fetch(l).done(function(){


clearTimeout(p);
m.apply(undefined,arguments);},
o);});}




f.exports=
{fetch:k,
getMaxTimeoutMs:i};}),null);

/** www/__virtual__/x/XMercuryFetchMessageController.js */



__d("XMercuryFetchMessageController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/mercury\/fetch_message\/",{other_user_or_thread_fbid:{type:"Int",required:true},mid:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XMercuryInvalidateGlobalStateController.js */



__d("XMercuryInvalidateGlobalStateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/mercury\/invalidate_global_state\/",{cachius_min_seq_id:{type:"Int"}});}),

null);

/** www/__virtual__/x/XMercuryInvalidateThreadStateController.js */



__d("XMercuryInvalidateThreadStateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/mercury\/invalidate_thread_state\/",{other_user_or_thread_fbid:{type:"Int",required:true},num_messages:{type:"Int",required:true}});}),

null);

/** js/mercury/sync/MercurySyncDFFDataFetcher.js */






__d('MercurySyncDFFDataFetcher',['Promise','ActorURI','AsyncRequest','MercuryConfig','MercuryMessages','MercuryThreads','MercuryThreadIDMap','MercurySingletonProvider','MercurySyncDataFetcher','XMercuryFetchMessageController','XMercuryInvalidateGlobalStateController','XMercuryInvalidateThreadStateController'],(function a(b,c,d,e,f,g){

'use strict';




















function h(j){
this.$MercurySyncDFFDataFetcher_fbid=j;
this.__messages=c('MercuryMessages').getForFBID(this.$MercurySyncDFFDataFetcher_fbid);
this.__threads=c('MercuryThreads').getForFBID(this.$MercurySyncDFFDataFetcher_fbid);
this.__threadIDMap=c('MercuryThreadIDMap').getForFBID(this.$MercurySyncDFFDataFetcher_fbid);}
h.

getForFBID=function(j){
return i.getForFBID(j);};
h.

get=function(){
return i.get();};
h.prototype.




fetchInvalidateGlobalState=
function(j){

var k=c('XMercuryInvalidateGlobalStateController').
getURIBuilder();
if(c('MercuryConfig').MessengerCachiusUseClientSeqIDWWW)
k.setInt('cachius_min_seq_id',j);

var l=k.getURI(),
m=c('ActorURI').create(l,this.$MercurySyncDFFDataFetcher_fbid);

return c('MercurySyncDataFetcher').fetch(m);};
h.prototype.

fetchInvalidateThreadState=
function(j,
k){

var l=11,


m=3,

n=j||k,
o=
this.__threadIDMap.getClientIDFromServerIDNow(n);
if(!o)

return c('Promise').resolve
({getPayload:function s(){return {};}});


var p=m+
this.__messages.getCurrentlyLoadedMessages(o).length,

q=c('XMercuryInvalidateThreadStateController').getURIBuilder().
setInt('other_user_or_thread_fbid',n).
setInt('num_messages',Math.max(p,l)).
getURI(),
r=c('ActorURI').create(q,this.$MercurySyncDFFDataFetcher_fbid);

return c('MercurySyncDataFetcher').fetch(r);};
h.prototype.

fetchInvalidateMessage=
function(j,
k,
l){

var m=c('XMercuryFetchMessageController').getURIBuilder().
setInt('other_user_or_thread_fbid',j||k).
setString('mid',l).
getURI(),
n=c('ActorURI').create(m,this.$MercurySyncDFFDataFetcher_fbid);

return c('MercurySyncDataFetcher').fetch(n);};



var i=new (c('MercurySingletonProvider'))(h);

f.exports=h;}),null);

/** js/mercury/sync/MercurySyncForcedFetchHandler.js */










__d('MercurySyncForcedFetchHandler',['Promise','MercurySingletonProvider','MercurySyncDFFDataFetcher','MercuryMessages','MercuryThreadIDMap'],(function a(b,c,d,e,f,g){

'use strict';








function h(k){

return {getPayload:function l(){return {sequence_id:k};}};}

i.








getForFBID=function(k){
return j.getForFBID(k);};
i.

get=function(){
return j.get();};



function i(k){
this.$MercurySyncForcedFetchHandler_fbid=k;
this.$MercurySyncForcedFetchHandler_messages=c('MercuryMessages').getForFBID(this.$MercurySyncForcedFetchHandler_fbid);
this.$MercurySyncForcedFetchHandler_threadIDMap=c('MercuryThreadIDMap').getForFBID(this.$MercurySyncForcedFetchHandler_fbid);
this.$MercurySyncForcedFetchHandler_dataFetcher=c('MercurySyncDFFDataFetcher').getForFBID(this.$MercurySyncForcedFetchHandler_fbid);}
i.prototype.

processMessageDFF=
function(k,
l,
m,
n){

if(n){

var o=l.otherUserFbId!==undefined?
l.otherUserFbId.toString():
l.threadFbId.toString(),

p=this.$MercurySyncForcedFetchHandler_threadIDMap.getClientIDFromServerIDNow(o);
if(p===undefined)
return c('Promise').resolve(h(k));



var q=
this.$MercurySyncForcedFetchHandler_messages.getMessagesFromIDs([m]);
if(q.length===0)
return c('Promise').resolve(h(k));}



return this.$MercurySyncForcedFetchHandler_dataFetcher.fetchInvalidateMessage
(l.otherUserFbId,
l.threadFbId,
m);};

i.prototype.

processThreadDFF=
function(k,
l,
m){

if(m){

var n=l.otherUserFbId!==undefined?
l.otherUserFbId.toString():
l.threadFbId.toString(),

o=this.$MercurySyncForcedFetchHandler_threadIDMap.getClientIDFromServerIDNow(n);
if(o===undefined)
return c('Promise').resolve(h(k));}


return this.$MercurySyncForcedFetchHandler_dataFetcher.fetchInvalidateThreadState
(l.otherUserFbId,
l.threadFbId);};

i.prototype.

processGlobalDFF=
function(k){

return this.$MercurySyncForcedFetchHandler_dataFetcher.fetchInvalidateGlobalState(k);};



var j=new (c('MercurySingletonProvider'))(i);

f.exports=i;}),null);

/** js/mercury/sync/MercurySyncDeltaHandler.js */















__d('MercurySyncDeltaHandler',['invariant','Arbiter','ChannelConstants','LogHistory','MercuryConfig','MessagingConfig','MercuryDelayedDispatcher','MercuryPayloadSource','MercurySyncConstants','MercurySyncDeltaHolder','MercurySyncDeltaTypes','MercurySyncDispatcher','MercurySyncForcedFetchHandler','MercurySyncHolesTypedLogger','MercuryServerPayloadPreprocessor','MercurySyncTopicType','MercurySingletonProvider'],(function a(b,c,d,e,f,g,h){

'use strict';






















var i=c('LogHistory').getInstance('mercury_sync_delta_handler'),

j=c('MessagingConfig').syncFetchRetries||0;k.


















getForFBID=function(m){
return l.getForFBID(m);};
k.

get=function(){
return l.get();};


function k(m){
this.$MercurySyncDeltaHandler_fbid=m;
this.$MercurySyncDeltaHandler_syncDispatcher=c('MercurySyncDispatcher').getForFBID(this.$MercurySyncDeltaHandler_fbid);
this.$MercurySyncDeltaHandler_forcedFetchHandler=
c('MercurySyncForcedFetchHandler').getForFBID(this.$MercurySyncDeltaHandler_fbid);
this.__payloadPreprocessor=
c('MercuryServerPayloadPreprocessor').getForFBID(this.$MercurySyncDeltaHandler_fbid);
this.__delayedDispatcher=c('MercuryDelayedDispatcher').getForFBID(this.$MercurySyncDeltaHandler_fbid);
this.$MercurySyncDeltaHandler_deltaHolder=c('MercurySyncDeltaHolder').getForFBID(this.$MercurySyncDeltaHandler_fbid);
this.$MercurySyncDeltaHandler_requestInFlight=false;

this.$MercurySyncDeltaHandler_fakeDFFs=[];
this.$MercurySyncDeltaHandler_retries=0;
i.debug('constructor',JSON.stringify({fbid:this.$MercurySyncDeltaHandler_fbid}));

c('Arbiter').subscribe('MercurySyncDeltaHandler/initSeqID',function(n,o){
i.debug('initSeqID',JSON.stringify(o));

var p=o&&o.seqID,
q=o&&o.fbid;
if(!q)
return;



if(q!==this.$MercurySyncDeltaHandler_fbid)
return;





if(p){
this.$MercurySyncDeltaHandler_deltaHolder.updateLastSeqID(p);}else 

this.$MercurySyncDeltaHandler_deltaHolder.updateLastSeqID(0);


this.$MercurySyncDeltaHandler_setUpSubscriptionsToRealTimeUpdates();
this.$MercurySyncDeltaHandler_deltaflowToken=c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('deltaflow'),
function(r,s){
if(!this.$MercurySyncDeltaHandler_subscriptionsLive)
this.$MercurySyncDeltaHandler_setUpSubscriptionsToRealTimeUpdates();}.




bind(this));}.


bind(this));}
k.prototype.






$MercurySyncDeltaHandler_setUpSubscriptionsToRealTimeUpdates=function(){
i.debug
('setUpSubscriptionsToRealTimeUpdates',
JSON.stringify({fbid:this.$MercurySyncDeltaHandler_fbid}));


this.$MercurySyncDeltaHandler_channelMessageToken=c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('delta'),
function(m,n){

var o=n&&n.obj&&n.obj.queue;
if(o)
if(o.toString()!==this.$MercurySyncDeltaHandler_fbid)
return;



var p=n&&n.obj&&n.obj.delta,
q=n&&n.obj&&n.obj.iseq;
if(!p||!q)
return;


this.$MercurySyncDeltaHandler_maybeLogHole(q,c('MercurySyncTopicType').DELTA);
this.$MercurySyncDeltaHandler_maybeLogToLogHistory(q,p);

this.$MercurySyncDeltaHandler_deltaHolder.push(q,p);
this.$MercurySyncDeltaHandler_maybePerformNextAction();}.
bind(this));

this.$MercurySyncDeltaHandler_flowRejectToken=c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('deltaflowreject'),
function(m,n){

var o=n&&n.obj&&n.obj.queue;
if(o)
if(o.toString()!==this.$MercurySyncDeltaHandler_fbid)
return;




this.$MercurySyncDeltaHandler_killSubscriptions();}.
bind(this));







this.$MercurySyncDeltaHandler_fakeDFFToken=c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType(c('ChannelConstants').FAKE_DFF),
function(m,n){

var o=n&&n.obj&&n.obj.queue;
if(o&&o.toString()!==this.$MercurySyncDeltaHandler_fbid)
return;


var p=n&&n.obj&&n.obj.delta;
if(!p)
return;

this.$MercurySyncDeltaHandler_fakeDFFs.push(p);
this.$MercurySyncDeltaHandler_maybePerformNextAction();}.
bind(this));


this.$MercurySyncDeltaHandler_subscriptionsLive=true;};
k.prototype.





$MercurySyncDeltaHandler_maybePerformNextAction=function(){




if(this.$MercurySyncDeltaHandler_requestInFlight)
return;


if(this.$MercurySyncDeltaHandler_fakeDFFs.length>0){
var m=this.$MercurySyncDeltaHandler_fakeDFFs.shift();


this.$MercurySyncDeltaHandler_processDelta(this.$MercurySyncDeltaHandler_deltaHolder.getLastSeqID(),m);
this.$MercurySyncDeltaHandler_maybePerformNextAction();}


var n=this.$MercurySyncDeltaHandler_deltaHolder.peek();
if(!n)
return;


var o=n-this.$MercurySyncDeltaHandler_deltaHolder.getLastSeqID();

if(o===1){
var p=this.$MercurySyncDeltaHandler_deltaHolder.pop();
if(!p)
return;

var q=p.seqID,r=p.delta;
this.$MercurySyncDeltaHandler_processDelta(q,r);
this.$MercurySyncDeltaHandler_maybePerformNextAction();}else
if(o>1){
this.$MercurySyncDeltaHandler_handleHole();}else{


this.$MercurySyncDeltaHandler_deltaHolder.pop();
this.$MercurySyncDeltaHandler_maybePerformNextAction();}};

k.prototype.

$MercurySyncDeltaHandler_processDelta=function(m,n){
this.$MercurySyncDeltaHandler_deltaHolder.updateLastSeqID(m);

if(n['class']===c('MercurySyncDeltaTypes').ForcedFetch){
i.debug('DFF',JSON.stringify(n));


if(n.threadKey!==undefined&&n.messageId===undefined){
this.$MercurySyncDeltaHandler_initiateThreadDFF(m,n);}else

if(n.threadKey!==undefined&&
n.messageId!==undefined){
this.$MercurySyncDeltaHandler_initiateMessageDFF(m,n);}else 


this.$MercurySyncDeltaHandler_initiateGlobalDFF(m);}else 


this.$MercurySyncDeltaHandler_syncDispatcher.process(n);};

k.prototype.









$MercurySyncDeltaHandler_handleHole=function(){
i.warn
('hole',
JSON.stringify
({$MercurySyncDeltaHandler_lastSeqID:this.$MercurySyncDeltaHandler_deltaHolder.getLastSeqID(),
nextSeqID:this.$MercurySyncDeltaHandler_deltaHolder.peek()}));





var m=this.$MercurySyncDeltaHandler_deltaHolder.peek();
!!m||h(0,'seqIDEndOfHole is falsey');
var n=m-1;

this.$MercurySyncDeltaHandler_initiateGlobalDFF(n);};
k.prototype.








$MercurySyncDeltaHandler_scheduleDataFetch=

function(m,



n,


o,


p){


!this.$MercurySyncDeltaHandler_requestInFlight||h(0,
'sending a request while another one is in flight');



this.$MercurySyncDeltaHandler_requestInFlight=true;

i.debug('_scheduleDataFetch:start',JSON.stringify
({seqID:m}));


n().done




(function(q){
i.debug('_scheduleDataFetch:success',JSON.stringify
({seqID:m}));





o(m,q);
this.$MercurySyncDeltaHandler_requestInFlight=false;
this.$MercurySyncDeltaHandler_maybePerformNextAction();}.
bind(this),
function(){
i.error('_scheduleDataFetch:failure',JSON.stringify
({seqID:m}));

p(m);
this.$MercurySyncDeltaHandler_requestInFlight=false;
this.$MercurySyncDeltaHandler_maybePerformNextAction();}.
bind(this));};

k.prototype.




$MercurySyncDeltaHandler_initiateGlobalDFF=function(m){
this.$MercurySyncDeltaHandler_scheduleDataFetch
(undefined,
function(){return this.$MercurySyncDeltaHandler_forcedFetchHandler.processGlobalDFF(m);}.bind(this),
function(n,o){
var p=o.getPayload();
this.__payloadPreprocessor.handleUpdate(p);




if(p.sequence_id){
i.debug('_initiateGlobalDFF:success',JSON.stringify
({seqID:p.sequence_id}));

this.$MercurySyncDeltaHandler_deltaHolder.updateLastSeqID(p.sequence_id);}

this.$MercurySyncDeltaHandler_retries=0;
c('Arbiter').inform
(c('MercurySyncConstants').ARBITER_EVENT_INVALID_STATE_RECOVER);}.

bind(this),
function(){
i.error('_initiateGlobalDFF:failure','');
if(this.$MercurySyncDeltaHandler_retries>=j){




this.$MercurySyncDeltaHandler_killSubscriptions();
this.$MercurySyncDeltaHandler_deltaHolder.updateLastSeqID(m);}else{


this.$MercurySyncDeltaHandler_retries++;
c('Arbiter').inform
(c('MercurySyncConstants').ARBITER_EVENT_INVALID_STATE_RETRY);

i.debug('_initiateGlobalDFF:retry','');
this.$MercurySyncDeltaHandler_requestInFlight=false;
this.$MercurySyncDeltaHandler_initiateGlobalDFF(m);}}.

bind(this));};

k.prototype.

$MercurySyncDeltaHandler_initiateThreadDFF=function(m,n){
this.$MercurySyncDeltaHandler_scheduleDataFetch
(m,
function(){return this.$MercurySyncDeltaHandler_forcedFetchHandler.processThreadDFF
(m,
n.threadKey,
n.isLazy);}.bind(this),

function(o,p){
this.__payloadPreprocessor.handleUpdate
(p.getPayload());

this.$MercurySyncDeltaHandler_deltaHolder.updateLastSeqID(o);}.
bind(this),
function(){
i.error('_initiateThreadDFF:failure',JSON.stringify(n));

var o=babelHelpers['extends']({},n);
delete o.threadKey;
this.$MercurySyncDeltaHandler_deltaHolder.updateLastSeqID(m-1);
this.$MercurySyncDeltaHandler_deltaHolder.push(m,o);}.
bind(this));};

k.prototype.

$MercurySyncDeltaHandler_initiateMessageDFF=function(m,n){
this.$MercurySyncDeltaHandler_scheduleDataFetch
(m,
function(){return this.$MercurySyncDeltaHandler_forcedFetchHandler.processMessageDFF
(m,
n.threadKey,
n.messageId,
n.isLazy);}.bind(this),

function(o,p){
var q=p.getPayload(),
r=q.other_user_fbid?
q.other_user_fbid:
q.thread_fbid,
s=[babelHelpers['extends']({},
q)],

t=c('MercuryPayloadSource').CLIENT_CHANNEL_MESSAGE;

this.__delayedDispatcher.handleUpdateWaitForThread
({actions:s,payload_source:t},
r);


this.$MercurySyncDeltaHandler_deltaHolder.updateLastSeqID(o);}.
bind(this),
function(){
i.error('_initiateMessageDFF:failure',JSON.stringify(n));

var o=babelHelpers['extends']({},n);
delete o.messageId;
this.$MercurySyncDeltaHandler_deltaHolder.updateLastSeqID(m-1);
this.$MercurySyncDeltaHandler_deltaHolder.push(m,o);}.
bind(this));};

k.prototype.

$MercurySyncDeltaHandler_maybeLogHole=function(m,n){
var o=m-this.$MercurySyncDeltaHandler_deltaHolder.getLastSeqID();

if(o!==1&&o!==0){

if(!c('MercuryConfig').WWWSyncHolesLogging)
return;

new (c('MercurySyncHolesTypedLogger'))().
setSeqID(m).
setDifference(o).
setTopicType(n).
log();}};

k.prototype.










$MercurySyncDeltaHandler_maybeLogToLogHistory=function(m,n){
switch(n['class']){
case c('MercurySyncDeltaTypes').NewMessage:
i.debug('message_delta',JSON.stringify
({seqID:m,
threadKey:n.messageMetadata.threadKey,
messageId:n.messageMetadata.messageId}));

break;
case c('MercurySyncDeltaTypes').ReadReceipt:
i.debug('read_receipt_delta',JSON.stringify
({seqID:m,
threadKey:n.threadKey,
actionTimestampMs:n.actionTimestampMs,
watermarkTimestampMs:n.watermarkTimestampMs}));

break;
case c('MercurySyncDeltaTypes').DeliveryReceipt:
i.debug('delivery_receipt_delta',JSON.stringify
({seqID:m,
deliveredWatermarkTimestampMs:n.deliveredWatermarkTimestampMs,
messageIds:n.messageIds}));

break;}};

k.prototype.

$MercurySyncDeltaHandler_killSubscriptions=function(){
this.$MercurySyncDeltaHandler_subscriptionsLive=false;
c('Arbiter').unsubscribe(this.$MercurySyncDeltaHandler_channelMessageToken);
c('Arbiter').unsubscribe(this.$MercurySyncDeltaHandler_fakeDFFToken);
c('Arbiter').unsubscribe(this.$MercurySyncDeltaHandler_flowRejectToken);
c('Arbiter').inform(c('MercurySyncConstants').ARBITER_EVENT_INVALID_STATE);};



var l=new (c('MercurySingletonProvider'))(k);

f.exports=k;}),null);

/** js/p2p/stores/P2PSendMoneyDialogStore.js */






__d('P2PSendMoneyDialogStore',['P2PActionConstants','EventEmitter','Map','P2PDispatcher'],(function a(b,c,d,e,f,g){

'use strict';var h,i,






j=void 0,
k=void 0;h=babelHelpers.inherits

(l,c('EventEmitter'));i=h&&h.prototype;
function l(){
i.constructor.call(this);
k=new (c('Map'))();
j=c('P2PDispatcher').register(this.onEventDispatched.bind(this));}
l.prototype.

onEventDispatched=function(m){
var n=m.data,
o=m.type;

switch(o){
case c('P2PActionConstants').CHAT_SEND_VIEW_OPENED:
this.handleChatSendViewOpened(n);
this.emit('change');
break;
case c('P2PActionConstants').CHAT_SEND_VIEW_CLOSED:
this.handleChatSendViewClosed(n);
this.emit('change');
break;}};

l.prototype.

getStateByThreadID=function(m){
return k.get(m);};
l.prototype.

handleChatSendViewOpened=function(m){
k.set(m.threadID,
{amount:m.amount,
groupSendRecipientUserIDs:m.groupSendRecipientUserIDs,
groupSendReceiptDetails:m.groupSendReceiptDetails,
groupThreadFBID:m.groupThreadFBID,
onCompletion:m.onCompletion,
openRequestTab:m.openRequestTab,
memoText:m.memoText,
platformData:m.platformData,
referrer:m.referrer,
paymentRequestID:m.paymentRequestID,
sendMoneyDialogShown:true,
sendMoneyNUXDismissed:m.sendMoneyNUXDismissed,
useModal:m.useModal});};

l.prototype.

handleChatSendViewClosed=function(m){
k.set(m.threadID,
{amount:'',
groupSendRecipientUserIDs:[],
groupSendReceiptDetails:null,
groupThreadFBID:'',
onCompletion:null,
openRequestTab:false,
memoText:null,
platformData:null,
referrer:null,
paymentRequestID:null,
sendMoneyDialogShown:false,
sendMoneyNUXDismissed:false,
useModal:false});};

l.prototype.

isAnyChatSendViewOpen=function(){
for(var m=k.values(),n=Array.isArray(m),o=0,m=n?m:m[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var p;if(n){if(o>=m.length)break;p=m[o++];}else{o=m.next();if(o.done)break;p=o.value;}var q=p;
if(q.sendMoneyDialogShown)
return true;}


return false;};



f.exports=new l();}),null);

/** js/mercury/clients/fanta/FantaTabsAppBase.js */






__d('FantaTabsAppBase',['ChatAppActions','ChatAppStore','ChatPerfInstrumentation','CSS','JSLogger'],(function a(b,c,d,e,f,g){

'use strict';h.prototype.











init=
function(i,
j,
k){

if(this.isInitialized()){
c('JSLogger').create('chat_app').error('repeated_init');
return;}


this.$FantaTabsAppBase_rootElem=i;
this.tabsElem=j;

var l=c('ChatAppStore').addListener(function(){
var m=c('ChatAppStore').getPreviousState(),
n=c('ChatAppStore').getState();

if(m.initialDisplayDone===false&&
n.initialDisplayDone===true){
c('ChatPerfInstrumentation').logDisplayDone();
l.remove();}});



c('ChatPerfInstrumentation').init();




this.$FantaTabsAppBase_initializeStores();
this.initializeFantaData(k);
this.initializeFantaUI();
this.$FantaTabsAppBase_initHotLikeSound();

c('ChatAppActions').tti();
c('ChatPerfInstrumentation').logTTI();};
h.prototype.

isInitialized=function(){
return !!c('ChatAppStore').getState().isInitialized;};
h.prototype.

isHidden=function(){
var i=c('ChatAppStore').getState();
return !!(!i.isInitialized||i.isHidden);};
h.prototype.

hide=function(){
if(this.isHidden())
return;


c('CSS').hide(this.$FantaTabsAppBase_rootElem);
c('ChatAppActions').hide();};
h.prototype.

unhide=function(){
var i=c('ChatAppStore').getState();
if(i.isInitialized){
if(i.isHidden){
c('CSS').show(this.$FantaTabsAppBase_rootElem);

e(['Dock'],function(j){
j.resizeAllFlyouts();});


c('ChatAppActions').unhide();}}else

if(!i.isLoaded){
e(['UIPagelet'],function(j){
j.loadFromEndpoint('ChatTabsPagelet','ChatTabsPagelet');
j.loadFromEndpoint('BuddylistPagelet','BuddylistPagelet');});


c('ChatAppActions').load();}};

h.prototype.


initializeFantaData=function(i){};h.prototype.
initializeFantaUI=function(){};h.prototype.





$FantaTabsAppBase_initializeStores=function(){
e
(['MercuryBlockedParticipants',
'MercuryChannelHandlerDEPRECATED',
'MercuryDelayedRoger',
'MercuryDeliveryReceipts',
'MercuryDeliveryState',
'MercuryParticipants',
'MercuryThreads',
'MercuryUnreadState',
'MercuryUnseenState',
'MercurySyncEnvironment',
'P2PSendMoneyDialogStore',
'OmniMStore'],

function(i,
j,
k,
l,
m,
n,
o,
p,
q,
r,
s,
t){

i.get();
j.get().turnOn();
k.get();
l.get();
m.get();
n;
o.get();
q.get();
p.get();
r.setUp();
t.setUp();

c('ChatPerfInstrumentation').logInitStores();});};

h.prototype.

$FantaTabsAppBase_initHotLikeSound=function(){
e
(['HotLikeSound','ChatOptions'],
function(i,j){
i.setCheckSoundEnabledFunc
(function(){return j.getSetting('sound');});


c('ChatPerfInstrumentation').logInitSound();});};


function h(){}


f.exports=h;}),null);

/** js/mercury/clients/messenger/MessengerDispatcher.js */






__d('MessengerDispatcher',['Dispatcher_DEPRECATED'],(function a(b,c,d,e,f,g){

'use strict';



f.exports=new (c('Dispatcher_DEPRECATED'))();}),null);

/** js/mercury/utils/MercuryFilters.js */




__d('MercuryFilters',['MessagingTag','arrayContains'],(function a(b,c,d,e,f,g){





var h=
[c('MessagingTag').UNREAD],


i=



{ALL:'all',

UNREAD:c('MessagingTag').UNREAD,

getSupportedFilters:function j(){
return h.concat();},


isSupportedFilter:function j(k){
return c('arrayContains')(h,k);}};



f.exports=i;}),null);

/** js/mercury/clients/messenger/uri/MessengerStateProcessor.js */





__d('MessengerStateProcessor',['MercuryAPIArgsSource','MercuryIDs','MercuryParticipantTypes','MercuryParticipants','MercuryThreadIDMap','MercuryThreads','MercuryVanityIDMap','MessengerURIConstants'],(function a(b,c,d,e,f,g){

'use strict';















var h=






{preprocess:function j(k){
var l=k.activeThreadID;
if(l){
var m=c('MercuryIDs').getUserIDFromThreadID(l),
n=m&&c('MercuryParticipants').getNow
(c('MercuryIDs').getParticipantIDFromUserID(m));


if(n&&n.type!==c('MercuryParticipantTypes').EVENT){
k.threadKey=n.vanity||m;}else
if(m&&!n){
var o=c('MercuryIDs').getParticipantIDFromUserID(m);
k.threadKey=c('MercuryVanityIDMap').hasID(o)?
c('MercuryVanityIDMap').getVanity(o):
m;}else{

var p=c('MercuryThreadIDMap').get(),
q=p.getServerIDFromClientIDNow(l);
k.threadKey=q||
c('MercuryIDs').tokenize(l).value;}}



delete k.activeThreadID;
return k;},








postprocess:function j(k){
var l=c('MercuryThreadIDMap').get(),
m=c('MercuryThreads').get(),
n=i(k.threadKey),
o=void 0;



o=c('MercuryIDs').isValid(n)?
n:
l.getClientIDFromServerIDNow(n);

if(!o){
var p=c('MercuryParticipants').getIDFromVanityOrFBID(n),
q=p&&m.getCanonicalThreadToParticipant
(p,
null,
c('MercuryAPIArgsSource').MESSENGER);

if(q)
o=q.thread_id;}



if(o){
k.activeThreadID=o;
k.serverThreadID=l.getServerIDFromClientIDNow(o);}




delete k.threadKey;
return k;},


supportInboxPostprocess:function j(k){
if(k.threadKey)
k.activeThreadID=
c('MercuryIDs').getThreadIDFromSupportInboxItemID(k.threadKey);

delete k.threadKey;
return k;}};



function i(j){
if(!j)
return null;

return j.startsWith(c('MessengerURIConstants').GROUP_PREFIX)?
j.substr(c('MessengerURIConstants').GROUP_PREFIX.length):
j;}


f.exports=h;}),null);

/** js/mercury/clients/messenger/uri/MessengerURISerializer.js */





__d('MessengerURISerializer',['CurrentEnvironment','MercuryFilters','MessagingTag','MessengerStateProcessor','MessengerURIConstants','MessengerView','URI','WWWBase'],(function a(b,c,d,e,f,g){

'use strict';










var h='/?$',

i=function m(n,o){
n.setPath
(c('CurrentEnvironment').facebookdotcom?
c('MessengerURIConstants').FACEBOOK_PREFIX+o:
o);},



j=function m(n,o){
var p=n.getPath();

if(c('CurrentEnvironment').facebookdotcom&&
!p.startsWith(c('MessengerURIConstants').FACEBOOK_PREFIX))

o=c('MessengerURIConstants').FACEBOOK_PREFIX+o;

n.setPath(n.getPath()+o);},


k=






{serialize:function m(n){
var o=new (c('URI'))(c('WWWBase').uri);
n=c('MessengerStateProcessor').preprocess(n);

switch(n.masterView){
case c('MessengerView').MASTER.GROUPS:
i(o,c('MessengerURIConstants').GROUPS_PATH);
break;
case c('MessengerView').MASTER.PEOPLE:
i(o,c('MessengerURIConstants').PEOPLE_PATH);
break;
case c('MessengerView').MASTER.SUPPORT:
i(o,c('MessengerURIConstants').SUPPORT_PATH);
break;}


switch(n.folder){
case c('MessagingTag').OTHER:
i(o,c('MessengerURIConstants').FILTERED_REQUESTS_PATH);
break;
case c('MessagingTag').ACTION_ARCHIVED:
i(o,c('MessengerURIConstants').ARCHIVED_PATH);
break;
case c('MessagingTag').PENDING:
i(o,c('MessengerURIConstants').MESSAGE_REQUESTS_PATH);
break;}


if(n.detailView===c('MessengerView').DETAIL.COMPOSE){
j(o,c('MessengerURIConstants').COMPOSE_SUBPATH);}else
if(n.threadKey){
j(o,c('MessengerURIConstants').THREAD_PREFIX+n.threadKey);}else 

j(o,'');


if(n.extraQueryParms)
o.addQueryData(n.extraQueryParams);


if(c('MercuryFilters').isSupportedFilter(n.filter))
o.addQueryData({filter:n.filter});


if(n.query!=null){var p;
o.addQueryData((p={},p[
n.masterView===c('MessengerView').MASTER.SEARCH?'qa':'q']=
n.query,p));}



if(n.mid)
o.addQueryData({mid:n.mid});


return o;},








deserialize:function m(n){
var o={},
p=n.getPath();

if(c('CurrentEnvironment').facebookdotcom&&
!p.startsWith(c('MessengerURIConstants').FACEBOOK_PREFIX))

o.notMessenger=true;

var q=p.replace(c('MessengerURIConstants').FACEBOOK_PREFIX,''),r=
n.getQueryData(),s=r.filter,t=r.mid,u=r.q,v=r.qa,w=babelHelpers.objectWithoutProperties(r,['filter','mid','q','qa']);

if(q.match('^'+c('MessengerURIConstants').GROUPS_PATH)){
o.masterView=c('MessengerView').MASTER.GROUPS;}else
if(q.match('^'+c('MessengerURIConstants').PEOPLE_PATH)){
o.masterView=c('MessengerView').MASTER.PEOPLE;}else
if(q.match('^'+c('MessengerURIConstants').SUPPORT_PATH)){
o.masterView=c('MessengerView').MASTER.SUPPORT;}else
if(v){
o.masterView=c('MessengerView').MASTER.SEARCH;}else 

o.masterView=c('MessengerView').MASTER.RECENT;


if(q.match('^'+c('MessengerURIConstants').FILTERED_REQUESTS_PATH)){
o.folder=c('MessagingTag').OTHER;}else
if(q.match('^'+c('MessengerURIConstants').ARCHIVED_PATH)){
o.folder=c('MessagingTag').ACTION_ARCHIVED;}else
if(q.match('^'+c('MessengerURIConstants').MESSAGE_REQUESTS_PATH)){
o.folder=c('MessagingTag').PENDING;}else 

o.folder=c('MessagingTag').INBOX;


if(q.match(c('MessengerURIConstants').COMPOSE_SUBPATH+h)){
o.detailView=c('MessengerView').DETAIL.COMPOSE;}else{

var x=l(q);
if(x){
o.threadKey=x;
o.detailView=c('MessengerView').DETAIL.THREAD;}}



if(c('MercuryFilters').isSupportedFilter(s)){
o.filter=s;}else 

o.filter=c('MercuryFilters').ALL;


o.mid=t;
o.query=v||u;

o.extraQueryParams=w;


if(o.masterView===c('MessengerView').MASTER.SUPPORT)
return c('MessengerStateProcessor').supportInboxPostprocess(o);

return c('MessengerStateProcessor').postprocess(o);}};






function l(m){
var n=m.match
(c('MessengerURIConstants').THREAD_PREFIX+'([^/]+)'+h);

return n&&decodeURIComponent(n[1]);}


f.exports=k;}),null);

/** js/mercury/clients/messenger/MessengerActions.js */






__d('MessengerActions',['invariant','MercuryIDs','MessengerDispatcher','MessengerURISerializer','MercuryTypeaheadConstants','MessengerView','URI','goURI','keyMirror'],(function a(b,c,d,e,f,g,h){

'use strict';












var i=c('keyMirror')
({REPLACE_STATE:null,
SELECT_THREAD:null,
UPDATE_MDOT_ME:null,
UPDATE_THREAD_TAG:null}),


j=
{Types:i,




changeDetailView:function m(n){
l(function(o){
if(o.detailView!==n)
return {detailView:n};});},







changeMasterView:function m(n){
l(function(o){
if(o.masterView!==n){
var p={masterView:n};
if(o.masterView===c('MessengerView').MASTER.SEARCH)

p.query=undefined;

return p;}});},







selectThread:function m(n,o){
if(o===c('MercuryTypeaheadConstants').MEETING_ROOM_PAGE_TYPE){
!!n||h(0,'we need a thread id for this action');
var p=c('MercuryIDs').getUserIDFromThreadID(n);
!!p||h(0,'we need a user id for this action');
var q=new (c('URI'))(),
r=q.getQualifiedURI().getSubdomain();
q.
setDomain('facebook.com').
setSubdomain(r).
setPath('/'+p).
setProtocol('https');
window.open(q,'_blank');
return;}


c('MessengerDispatcher').dispatch
({type:i.SELECT_THREAD,
threadID:n});


l(function(s){
if(s.activeThreadID!==n)

return {activeThreadID:n,
detailView:c('MessengerView').DETAIL.THREAD,
mid:null};});},








changeState:function m(n){
c('MessengerDispatcher').dispatch
({type:i.REPLACE_STATE,
nextState:n});},



changeMDotMeReferral:function m(){


var n=arguments.length<=0||arguments[0]===undefined?null:arguments[0],o=arguments.length<=1||arguments[1]===undefined?null:arguments[1];
c('MessengerDispatcher').dispatch
({type:j.Types.UPDATE_MDOT_ME,
refCode:n,
refThreadID:o});},



changeThreadTag:function m(){


var n=arguments.length<=0||arguments[0]===undefined?null:arguments[0],o=arguments.length<=1||arguments[1]===undefined?null:arguments[1];
c('MessengerDispatcher').dispatch
({type:j.Types.UPDATE_THREAD_TAG,
messagingTags:n,
threadID:o});},



changeFolder:function m(n){
l(function(o){
if(o.folder!==n)
return {folder:n};});},




changeFilter:function m(n){
l(function(o){
if(o.filter!==n)
return {filter:n};});},




changeQuery:function m(n){
l(function(o){
if(o.query!==n)
return {query:n};});},




changeQueryAll:function m(n){
var o=!!n;
l(function(p){
if(p.queryAll!==n)

return {query:n,
masterView:c('MessengerView').MASTER.SEARCH};});},





changeMid:function m(n){
l(function(o){
if(o.mid!==n)
return {mid:n};});}};





function k(m,n){
return m.detailView==null;}


function l(m){
var n=c('MessengerURISerializer').deserialize(new (c('URI'))(window.location.href)),
o=m(n),
p=k(n,o);
if(o)
c('goURI')
(c('MessengerURISerializer').serialize(Object.assign(n,o)),
false,
p);}




f.exports=j;}),null);
