if (self.CavalryLogger) { CavalryLogger.start_js(["foMA1"]); }

/** __static_js_modules__/mncommerceloggerevents.js */




__d("MNCommerceLoggerEvents",[],(function a(b,c,d,e,f,g){

f.exports={RECEIVE_API_LATENCY:"receive_api_latency",NLP_API_LATENCY:"nlp_api_latency",NLP_API_FAILED:"nlp_api_failed",EVENTS_PUSH_SUCCESS:"events_push_success",EVENTS_PUSH_FAILED:"events_push_failed",ENTITY_CONFIGURATION_ERROR:"entity_configuration_error",ENTITY_SUBSCRIPTION_SUCCESS:"entity_subscribed",ENTITY_UNSUBSCRIPTION_SUCCESS:"entity_unsubscribed",ENTITY_UNSUBSCRIPTION_FAILED:"entity_unsubscribe_request_failed",ENTITY_SUBSCRIPTION_FAILED:"entity_subscribe_request_failed",APP_TO_PAGE_ASSOC_DELETE_FAILED:"app_to_page_assoc_delete_failed",APP_TO_PAGE_ASSOC_SET_FAILED:"app_to_page_assoc_delete_failed",TAO_EXCEPTION:"tao_exception",IRIS_SUBSCRIPTION_NOTIFY:"iris_subscription_notify",RECEIVE_API_E2E_HANDLER_FAILURE:"receive_api_e2e_handler_failure",SKIPPED_STALE_DELTA_NEW_MESSAGE:"skipped_stale_delta_new_message",CHECK_INTERNAL_URI_FAILED:"check_internal_uril_failed",REMOVE_ALERT_ERROR:"remove_alert_error",SET_ALERT_ERROR:"set_alert_error",SEND_API_ERROR:"send_api_error",SEND_API_LATENCY:"send_api_latency",SEND_MESSAGE_WITH_AUDIO:"send_message_with_audio",SEND_MESSAGE_WITH_FILE:"send_message_with_file",SEND_MESSAGE_WITH_IMAGE:"send_message_with_image",SEND_MESSAGE_WITH_TEXT:"send_message_with_text",SEND_MESSAGE_WITH_VIDEO:"send_message_with_video",SEND_MESSAGE_WITH_ROBOTEXT:"send_message_with_robotext",SEND_MESSAGE_WITH_ATTACHMENT:"send_message_with_attachment",SEND_MESSAGE_WITH_LOG_MESSAGE:"send_message_with_log_message",SEND_MESSAGE_FAILURE:"send_message_failure",SEND_MESSAGE_INNER_FAILURE:"send_message_inner_failure",SEND_MESSAGE_WITH_AD_TEXT:"send_ad_message_with_text",SEND_MESSAGE_WITH_AD_ATTACHMENT:"send_ad_message_with_attachment",UPLOAD_API_ERROR:"upload_api_error",ID_CONVERSION_ERROR:"id_conversion_error",ID_CONVERSION_SUCCESS:"id_conversion_success",GIF_UPLOAD:"gif_upload",HIGH_MPS_ON:"high_mps_on",HIGH_MPS_OFF:"high_mps_off",USER_PROFILE_API_FAILED:"user_profile_api_failed",RECEIVE_MESSAGE_WITH_TEXT:"receive_message_with_text",RECEIVE_MESSAGE_WITH_IMAGE:"receive_message_with_image",RECEIVE_MESSAGE_WITH_VIDEO:"receive_message_with_video",RECEIVE_MESSAGE_WITH_AUDIO:"receive_message_with_audio",RECEIVE_MESSAGE_WITH_FILE:"receive_message_with_file",RECEIVE_MESSAGE_WITH_ATTACHMENT:"receive_message_with_attachment",PAGE_PROMETHEUS_STATUS_NOTIFICATION:"page_prometheus_status_notification",GEN_CALL:"gen_call",DUPLICATE_CALL:"duplicate_call",ERROR:"error",APP_ID_FETCH_FAILURE:"app_id_fetch_failure",GEN_SHIPMENT_ENT:"gen_shipment_ent",GEN_SHIPMENT_TRACKING_ENT:"gen_shipment_tracking_ent",SHIPMENT_NOTIFICATION_READY:"shipment_notification_ready",SHIPMENT_NOTIFICATION_SENT:"shipment_notification_sent",SHIPMENT_NOTIF_READY:"shipment_notif_ready",SHIPMENT_NOTIF_SENT:"shipment_notif_sent",ETA_NOTIF_READY:"eta_notif_ready",ETA_NOTIF_SENT:"eta_notif_sent",DELIVERED_NOTIF_READY:"delivered_notif_ready",DELIVERED_NOTIF_SENT:"delivered_notif_sent",OUT_FOR_DELIVERY_NOTIF_READY:"out_for_delivery_notif_ready",OUT_FOR_DELIVERY_NOTIF_SENT:"out_for_delivery_notif_sent",DELAYED_NOTIF_READY:"delayed_notif_ready",DELAYED_NOTIF_SENT:"delayed_notif_sent",IN_TRANSIT_NOTIF_READY:"in_transit_notif_ready",IN_TRANSIT_NOTIF_SENT:"in_transit_notif_sent",ASYNC_EXECUTION:"async_execution",ASYNC_SCHEDULE:"async_schedule",ASYNC_THROTTLE:"async_throttle",ASYNC_USER_ACCOUNT_DISABLED:"async_user_account_disabled",ASYNC_GEN_DATA_ERROR:"async_gen_data_error",TRACKING_SHUTDOWN_WITH_EXCEPTION_ERROR:"tracking_shutdown_with_exception",TRACKING_SHUTDOWN_WITH_RETRY_ERROR:"tracking_shutdown_with_retry",DELIVERED_STATS:"delivered_stats",USER_LINKED:"user_linked",USER_LINK_FAILED:"user_link_failed",USER_TOKEN_DECRYPTION_FAILED:"user_token_decryption_failed",USER_TOKEN_DELIVERY_ATTEMPT:"user_token_delivery_attempt",USER_TOKEN_DELIVERED:"user_token_delivered",USER_TOKEN_DELIVERY_FAILED:"user_token_delivery_failed",USER_TOKEN_CRITICAL_LOOKUP:"user_token_critical_lookup",USER_TOKEN_LOOKUP_FAILED:"user_token_lookup_failed",USER_UNLINKED:"user_unlinked",USER_UNLINK_FAILED:"user_unlink_failed",USER_UNLINK_BUSINESS_NOTIFIED:"user_unlink_business_notified",USER_UNLINK_BUSINESS_NOTIFICATION_FAILED:"user_unlink_business_notification_failed",PLATFORM_PLUGIN_PAGE_APP_ID_MISMATCH:"platform_plugin_page_app_id_mismatch",SEND_TO_MESSENGER_RENDERED:"send_to_messenger_rendered",SEND_TO_MESSENGER_CLICKED:"send_to_messenger_clicked",SEND_TO_MESSENGER_OPT_IN:"send_to_messenger_opt_in",SEND_TO_MESSENGER_ID_DELIVERY_FAILURE:"send_to_messenger_id_delivery_failure",SEND_TO_MESSENGER_UNSUPPORTED_APP:"send_to_messenger_unsupported_app",SEND_TO_MESSENGER_ERROR:"send_to_messenger_error",MESSAGE_US_RENDERED:"message_us_rendered",MESSAGE_US_CLICKED:"message_us_clicked",MESSAGE_US_ERROR:"message_us_error",MESSENGER_PRECHECKED_ERROR:"messenger_prechecked_error",MESSENGER_PRECHECKED_RENDERED:"messenger_prechecked_rendered",MESSENGER_PRECHECKED_HIDDEN:"messenger_prechecked_hidden",MESSENGER_PRECHECKED_LOGIN:"messenger_prechecked_login",MESSENGER_PRECHECKED_NOTYOU:"messenger_prechecked_notyou",MESSENGER_PRECHECKED_CHECKED:"messenger_prechecked_checked",MESSENGER_PRECHECKED_UNCHECKED:"messenger_prechecked_unchecked",MESSENGER_PRECHECKED_PIXEL_ERROR:"messenger_prechecked_pixel_error",MESSENGER_PRECHECKED_PIXEL_INVALID_APP_ID:"messenger_prechecked_pixel_invalid_app_id",MESSENGER_PRECHECKED_PIXEL_NO_APP_SUBSCRIPTION:"messenger_prechecked_pixel_no_app_subscription",MESSENGER_PRECHECKED_PIXEL_ENT_NOT_FOUND:"messenger_prechecked_pixel_ent_not_found",MESSENGER_PRECHECKED_PIXEL_USER_MISMATCH:"messenger_prechecked_pixel_user_mismatch",MESSENGER_PRECHECKED_PIXEL_INVALID_PLUGIN_STATE:"messenger_prechecked_pixel_invalid_plugin_state",MESSENGER_PRECHECKED_PIXEL_EVENT_SAVED:"messenger_prechecked_pixel_event_saved",MESSENGER_PRECHECKED_PIXEL_WEBHOOK_EVENT_SENT:"messenger_prechecked_pixel_webhook_event_sent",MESSENGER_PRECHECKED_API_ENT_NOT_FOUND:"messenger_prechecked_api_ent_not_found",MESSENGER_PRECHECKED_API_INVALID_USER_ID:"messenger_prechecked_api_invalid_user_id",MESSENGER_PRECHECKED_API_INVALID_PLUGIN_STATE:"messenger_prechecked_api_invalid_plugin_state",MESSENGER_PRECHECKED_API_PIXEL_NOT_FIRED:"messenger_prechecked_api_pixel_not_fired",MESSENGER_PRECHECKED_API_USER_MATCH_SUCCEEDED:"messenger_prechecked_api_user_match_succeeded",MESSENGER_PRECHECKED_API_ADMIN_MESSAGE_SENT:"messenger_prechecked_api_admin_message_sent",MESSENGER_PRECHECKED_API_ERROR:"messenger_prechecked_api_error",PLUGIN_ID_MATCH_INITIATED:"plugin_id_match_initiated",PLUGIN_ID_MATCH_FAILED:"plugin_id_match_failed",PLUGIN_ID_MATCH_NO_LOGGED_IN_USER:"plugin_id_match_no_logged_in_user",PLUGIN_ID_MATCH_HAS_NAME_MATCH:"plugin_id_match_has_name_match",PLUGIN_ID_MATCH_NO_NAME_MATCH:"plugin_id_match_no_name_match",PLUGIN_ID_MATCH_HAS_EMAIL_MATCH:"plugin_id_match_has_email_match",PLUGIN_ID_MATCH_NO_EMAIL_MATCH:"plugin_id_match_no_email_match",PLUGIN_ID_MATCH_HAS_MATCH:"plugin_id_match_has_match",PLUGIN_ID_MATCH_NO_MATCH:"plugin_id_match_no_match",PLUGIN_ID_MATCH_ERROR:"plugin_id_match_error",ECOMMERCE_OPT_IN:"ecommerce_opt_in",ECOMMERCE_OPT_IN_EVENT_DELIVERED:"ecommerce_opt_in_event_delivered",ECOMMERCE_OPT_OUT:"ecommerce_opt_out",ECOMMERCE_OPT_OUT_EVENT_DELIVERED:"ecommerce_opt_out_event_delivered",ECOMMERCE_ERROR:"ecommerce_error",AUTH_MUTATION_SUCCEEDED:"auth_mutation_succeeded",AUTH_MUTATION_ERROR:"auth_mutation_error",AUTH_BITMASK_MUTATION_SUCCEEDED:"auth_bitmask_mutation_succeeded",AUTH_BITMASK_MUTATION_ERROR:"auth_bitmask_mutation_error",PERMISSIONS_DOUBLE_WRITE_SUCCEEDED:"permissions_double_write_succeeded",PERMISSIONS_DOUBLE_WRITE_ERROR:"permissions_double_write_error",THREAD_DELETION_REVOKE_SUCCESS:"thread_deletion_revoke_success",THREAD_DELETION_REVOKE_FAILURE:"thread_deletion_revoke_failure",COMMERCE_TOKEN_CONVERSION_REQUESTED:"commerce_token_conversion_requested",COMMERCE_TOKEN_CONVERSION_INVALID_TOKEN:"commerce_token_conversion_invalid_token",COMMERCE_TOKEN_CONVERSION_USER_NOT_LINKED:"commerce_token_conversion_user_not_linked",COMMERCE_TOKEN_CONVERSION_NO_THREAD:"commerce_token_conversion_no_thread",COMMERCE_TOKEN_CONVERSION_PSID_GENEREATED:"commerce_token_conversion_psid_genereated",COMMERCE_TOKEN_CONVERSION_FAILURE:"commerce_token_conversion_failure",PLUGIN_CLIENT_RENDERED:"plugin_client_rendered",PLUGIN_RENDERED:"plugin_rendered",PLUGIN_HIDDEN_ALREADY_LINKED:"plugin_hidden_already_linked",PLUGIN_BLOCKED:"plugin_blocked",PLUGIN_UPDATES_DISALLOWED:"plugin_updates_disallowed",PLUGIN_UPDATES_REALLOWED:"plugin_updates_reallowed",PLUGIN_ASSOC_MUTATE_FAILED:"plugin_assoc_mutate_failed",PLUGIN_ASSOC_READ_FAILED:"plugin_assoc_read_failed",PLUGIN_MESSAGE_US_CLICK:"plugin_message_us_click",LAST_DIGITS_PLUGIN_ERROR_PARSING_MESSAGE:"last_digits_plugin_error_parsing_message",LAST_DIGITS_PLUGIN_ERROR_UNAUTHORIZED_DOMAIN:"last_digits_plugin_error_unauthorized_domain",LAST_DIGITS_PLUGIN_VERIFICATION_RESULT:"last_digits_plugin_verification_result",LAST_DIGITS_PLUGIN_MESSAGE_RECEIVED:"last_digits_plugin_message_received",LAST_DIGITS_PLUGIN_MESSAGE_POSTED:"last_digits_plugin_message_posted",SIMPLE_LINK_PLUGIN_IMPRESSION:"simple_link_plugin_impression",SIMPLE_LINK_PLUGIN_UNCHECKED:"simple_link_plugin_unchecked",SIMPLE_LINK_PLUGIN_LINKED:"simple_link_plugin_linked",ORDER_CANCELLED:"order_cancelled",ORDER_CANCELLATION_FAILED:"order_cancellation_failed",SEND_BLOCK_ALL_LOG_MESSAGE_EXCEPTION:"send_block_all_log_message_exception",SEND_UNBLOCK_ALL_LOG_MESSAGE_EXCEPTION:"send_unblock_all_log_message_exception",DIALOG_OPENED:"dialog_opened",DIALOG_CLOSED:"dialog_closed",DIALOG_LOAD_ERROR:"dialog_load_error",DIALOG_LOAD_SUCCESS:"dialog_load_success",PLATFORM_SUBSCRIPTION_LAST_USER_SENT_MESSAGE_UPDATED:"platform_subscription_last_user_sent_message_updated",PLATFORM_SUBSCRIPTION_EXTRA_MESSAGE_COUNT_UPDATED:"platform_subscription_extra_message_count_updated",PLATFORM_SUBSCRIPTION_STATE_MUTATION_FAILED:"platform_subscription_state_mutation_failed",PLATFORM_SUBSCRIPTION_ASSOC_NOT_FOUND:"platform_subscription_assoc_not_found",PLATFORM_SUBSCRIPTION_MESSAGE_WITHIN_ONE_DAY:"platform_subscription_message_within_one_day",PLATFORM_SUBSCRIPTION_WHITELISTED_TEMPLATE:"platform_subscription_whitelisted_template",PLATFORM_SUBSCRIPTION_PERMISSION_CHECK:"platform_subscription_permission_check",PLATFORM_TAGS_SUCCESS:"platform_tags_success",PLATFORM_TAGS_FAILURE:"platform_tags_failure",QR_CODES_API_CALL:"qr_codes_api_call",QR_CODES_API_SUCCESS:"qr_codes_api_success",QR_CODES_API_FAILURE:"qr_codes_api_failure",QR_CODES_NEW_GRAPHQL_ATTEMPT:"qr_codes_new_graphql_attempt",QR_CODES_NEW_GRAPHQL_INVALID_HASH:"qr_codes_new_graphql_invalid_hash",QR_CODES_NEW_GRAPHQL_LEGACY_CODE_SUCCESS:"qr_codes_new_graphql_legacy_code_success",QR_CODES_NEW_GRAPHQL_PARAMETRIC_CODE_SUCCESS:"qr_codes_new_graphql_parametric_code_success",QR_CODES_NEW_GRAPHQL_EXCEPTION:"qr_codes_new_graphql_exception",QR_CODES_LEGACY_GRAPHQL_ATTEMPT:"qr_codes_legacy_graphql_attempt",QR_CODES_LEGACY_GRAPHQL_SUCCESS:"qr_codes_legacy_graphql_success",QR_CODES_LEGACY_GRAPHQL_EXCEPTION:"qr_codes_legacy_graphql_exception",QR_CODES_LEGACY_GRAPHQL_INVALID_HASH:"qr_codes_legacy_graphql_invalid_hash",QR_CODES_LEGACY_GRAPHQL_FALLBACK_LOGIC:"qr_codes_legacy_graphql_fallback_logic",NOT_YOU_CLICKED:"not_you_clicked",PRODUCT_SUBSCRIPTION_CLICKED:"product_subscription_clicked",RECEIPTS:"receipts",CANCELLATIONS:"cancellations",SHIPMENTS:"shipments",NOW_IN_STOCK:"nowinstock",NOTIFY_ME:"notifyme",PROMOTIONAL_MESSAGE:"promotionalmessage",RETAIL_CANCELLATIONS:"retailcancellations",RETAIL_RECEIPTS:"retailreceipts",UPDATE_RECEIPTS:"updatereceipts",RETAIL_SHIPMENTS:"retailshipments",RETAIL_UPDATE_RECEIPTS:"retailupdatereceipts",AIRLINE_ITINERARY:"airlineitinerary",AIRLINE_REMINDER:"airlinereminder",AIRLINE_CHECKIN:"airlinecheckin",AIRLINE_UPDATE:"airlineupdate",AIRLINE_BOARDINGPASS:"airlineboardingpass",BILL_PAYMENT_REQUEST:"billpaymentrequest",SIMPLE_LINK_WITH_STATE:"simplelinkwithstate",BUSINESS_MESSAGE:"businessmessage",MARK_SPAM:"spam",ACCOUNT_UNLINK_SUCCESS:"account_unlink_success",ACCOUNT_UNLINK_FAILURE:"account_unlink_failure",ACCOUNT_UNLINK_UNKNOWN_FAILURE:"account_unlink_unknown_failure",ACCOUNT_UNLINK_FORCE_FAILURE:"account_unlink_force_failure",ACCOUNT_UNLINK_NO_WEBHOOK_SUBSCRIPTION:"account_unlink_no_webhook_subscription",ACCOUNT_LINK_SUCCESS:"account_link_success",ACCOUNT_LINK_FAILURE:"account_link_failure",ACCOUNT_LINK_NO_WEBHOOK_SUBSCRIPTION:"account_link_no_webhook_subscription",ACCOUNT_LINK_UNKNOWN_FAILURE:"account_link_unknown_failure",ACCOUNT_LINK_NO_AUTHORIZATION_CODE:"account_link_no_authorization_code",ACCOUNT_LINK_INVALID_NONCE:"account_link_invalid_nonce",ACCOUNT_LINKING_URL_DELETE_FAILED:"account_linking_url_delete_failed",ACCOUNT_LINKING_TOKEN_CREATED:"account_linking_token_created",ACCOUNT_LINK_REDIRECT_REQUEST:"account_link_redirect_request",ACCOUNT_LINK_FB_COOKIE_NOT_SET:"account_link_fb_cookie_not_set",ACCOUNT_LINK_INVALID_VIEWER_CONTEXT:"account_link_invalid_viewer_context",ACCOUNT_LINK_URI_GEN_INPROGRESS:"account_link_uri_gen_inprogress",ACCOUNT_LINK_URI_GEN_START:"account_link_uri_gen_start",ACCOUNT_LINK_URI_GEN_END:"account_link_uri_gen_end",ACCOUNT_LINK_NULL_URI:"account_link_null_uri",ACCOUNT_LINK_URI_ADD_FAILED:"account_link_uri_add_failed",ACCOUNT_LINK_USER_ID_MISMATCH:"account_link_user_id_mismatch",PROMOTION_CREATION_ATTEMPTED:"promotion_creation_attempted",PROMOTION_ENT_CREATED:"promotion_ent_created",PROMOTION_SCHEDULED:"promotion_scheduled",PROMOTION_KILLED:"promotion_killed",PROMOTION_USER_ATTEMPTED:"promotion_user_attempted",PROMOTION_USER_GK_FAILED:"promotion_user_gk_failed",PROMOTION_USER_GK_PASSED:"promotion_user_gk_passed",PROMOTION_USER_ALREADY_LINKED:"promotion_user_already_linked",PROMOTION_USER_NOT_LINKED:"promotion_user_not_linked",PROMOTION_USER_PREVIOUSLY_UNLINKED:"promotion_user_previously_unlinked",PROMOTION_USER_BLOCKED_PROMOTION:"promotion_user_blocked_promotion",PROMOTION_USER_SEND_MESSAGE_EXCEPTION:"promotion_user_send_message_exception",PROMOTION_ATOMIC_MESSAGE_SENT:"promotion_atomic_message_sent",PROMOTION_LOG_MESSAGE_SENT:"promotion_log_message_sent",PROMOTION_ROBOTEXT_SENT:"promotion_robotext_sent",PROMOTION_ATTACHMENT_SENT:"promotion_attachment_sent",PROMOTION_ASYNC_JOB_ERROR:"promotion_async_job_error",REF_SEND_SUCCESS:"referral_send_success",REF_SEND_FAILURE:"referral_send_failure",REF_SEND_NO_PSID:"referral_send_no_psid_inplace",REF_SEND_INVALID_AUTH_STATE:"referral_send_invalid_auth_state",USER_CONTROL_BLOCKED_ALL:"user_control_blocked_all",USER_CONTROL_BLOCKED_PROMOTION:"user_control_blocked_promotion",USER_CONTROL_UNBLOCKED_ALL:"user_control_unblocked_all",USER_CONTROL_UNBLOCKED_PROMOTION:"user_control_unblocked_promotion",USER_CONTROL_REPORT_AD:"user_control_report_ad",USER_CONTROL_REPORT_OTHER_ABUSE:"user_control_report_other_abuse",ACCEPT_MESSAGE_REQUEST_ACTION:"accept_message_request",IGNORE_MESSAGE_REQUEST_ACTION:"ignore_message_request",PLATFORM_REPORT_FAILURE:"platform_report_failure",PLATFORM_REPORT_SUCCEEDED:"platform_report_succeeded",PLATFORM_REPORT_ADMIN_MSG_SENT:"platform_report_admin_msg_sent",PLATFORM_REPORT_PAGE_BLOCKED:"platform_report_page_blocked",PLATFORM_REPORT_PAGE_REPORT_FAILURE:"platform_report_page_report_failure",M_SUGGESTION_CALL:"m_suggestion_call",M_SUGGESTION_ENT_CREATED:"m_suggestion_ent_created",M_SUGGESTION_LINK_IF_NECESSARY:"m_suggestion_link_if_necessary",M_SUGGESTION_SEND_MESSAGE:"m_suggestion_send_message",GEN_CANCELLATION_ENT:"gen_cancellation_ent",CANCELLATION_NOTIFICATION_READY:"cancellation_notification_ready",CANCELLATION_NOTIFICATION_SENT:"cancellation_notification_sent",LIVECHAT_HISTORY_USER_FETCH_FAILURE:"livechat_history_user_fetch_failure",LIVECHAT_HISTORY_PAGE_FETCH_FAILURE:"livechat_history_page_fetch_failure",LIVECHAT_HISTORY_API_SUCCESS:"livechat_history_api_success",LIVECHAT_HISTORY_API_FAILURE:"livechat_history_api_failure",ECOMMERCE_EVENT_CALL:"ecommerce_event_call",ECOMMERCE_EVENT_DATA_VALIDATED:"ecommerce_event_data_validated",ECOMMERCE_EVENT_SECURITY_CHECKED:"ecommerce_event_security_checked",ECOMMERCE_EVENT_MESSAGE_SENT:"ecommerce_event_message_sent",ECOMMERCE_EVENT_INVALID_SENDER:"ecommerce_event_invalid_sender",ECOMMERCE_EVENT_MULTIPLE_WELCOME_MESSAGE_NOT_ALLOWED:"ecommerce_event_multiple_welcome_message_not_allowed",ECOMMERCE_EVENT_NO_OPT_IN:"ecommerce_event_no_opt_in",ECOMMERCE_EVENT_HANDLER_EXCEPTION:"ecommerce_event_handler_exception",PROMOTION_CTA_CLICKED:"promotion_cta_clicked",ACCESS_ENT_WITHOUT_MESSAGE_ID:"access_ent_without_message_id",ACCESS_ENT_WITH_WRONG_MESSAGE_ID:"access_ent_with_wrong_message_id",ACCESS_ENT_WITHOUT_CAN_SEE_SHARE_TOKEN:"access_ent_without_can_see_share_token",ACCESS_ENT_WITH_WRONG_SHARE_ID:"access_ent_with_wrong_share_id",ACCESS_ENT_WITH_GENIE_MSG_LOOP:"access_ent_with_genie_msg_loop",BOT_SHARE_MSG_SENT:"bot_share_msg_sent",PAGE_SHARE_MSG_SENT:"page_share_msg_sent",PAGE_SHARE_MSG_FAILURE:"page_share_msg_failure",ELEMENT_SHARE_MSG_SENT:"element_share_msg_sent",EXTENSIBLE_SHARE_MSG_SENT:"extensible_share_msg_sent",SUBSCRIPTION_SHARE_MSG_SENT:"subscription_share_msg_sent",ELEMENT_SHARE_MSG_FAILURE:"element_share_msg_failure",SUBSCRIPTION_SHARE_MSG_FAILURE:"subscription_share_msg_failure",ELEMENT_SHARE_ATTACHMENT_CREATION_FAILED:"element_share_attachment_creation_failed",ELEMENT_SHARE_GET_PAGE_LINK_FAILED:"element_share_get_page_link_failed",WEBVIEW_SHARE_ATTACHMENT_CREATION_FAILED:"webview_share_attachment_creation_failed",WEBVIEW_SHARE_MSG_FAILURE:"webview_share_msg_failure",WEBVIEW_SHARE_MSG_SENT:"webview_share_msg_sent",WEBVIEW_SHARE_NULL_PAGE_ID:"webview_share_with_null_page_id",WEBVIEW_SHARE_EMPTY_TITLE:"webview_share_with_empty_title",WEBVIEW_SHARE_INVALID_BUTTON_DATA:"webview_share_with_invalid_button_data",WEBVIEW_SHARE_URL_MISSING:"webview_share_without_url_data",PAGE_ATTACHMENT_FORWARDING:"page_attachment_forwarding",BOT_ATTACHMENT_FORWARDING:"bot_attachment_forwarding",MEDIA_ATTACHMENT_FORWARDING:"media_attachment_forwarding",BOT_REVIEW_CREATION:"bot_review_creation",BOT_REVIEW_UPDATE:"bot_review_update",BOT_REVIEW_DELETION:"bot_review_deletion",BOT_REVIEW_FAILURE:"bot_review_failure",BOT_REVIEW_DEVSITE_PAGE_SKIPPED:"bot_review_devsite_page_skipped",AGGREGATE_BOT_RATING_FETCH_FAILURE:"aggregate_bot_rating_fetch_failure",AGGREGATE_BOT_RATING_INC_FAILURE:"aggregate_bot_rating_inc_failure",AGGREGATE_BOT_RATING_INC_PERM_FAILURE:"aggregate_bot_rating_inc_perm_failure",INVALID_RATING:"invalid_rating",BOT_REVIEW_ADMIN_MSG_FAILURE:"bot_review_admin_msg_failure",BOT_REVIEW_NOTIF_FAILURE:"bot_review_notification_failure",BOT_REVIEW_NOTIF_INVALID_DB_DATA:"bot_review_notification_invalid_db_data",BOT_REVIEW_NOTIF_PAGE_REVIEW_GEN_FAILURE:"bot_review_notification_page_review_gen_failure",BOT_REVIEW_NOTIF_SEND_FAILURE:"bot_review_notification_send_failure",BOT_REVIEW_NOTIF_SEND_SUCCESS:"bot_review_notification_send_success",BOT_REVIEW_NOTIF_PAGE_SEND_FAILURE:"bot_review_notification_page_send_failure",LINK_CLICK:"link_click",POSTBACK_CLICKED:"postback_cta_clicked",POSTBACK_SUCCESS:"postback_cta_success",POSTBACK_NO_WEBHOOK_SUBSCRIPTION:"postback_no_webhook_subscription",POSTBACK_SEND_FAILED:"postback_send_failed",POSTBACK_FAILED:"postback_failed",POSTBACK_INVALID_IDS:"postback_invalid_ids",COMPOSER_CTA_PAGE_GEN_FAILED:"composer_cta_page_gen_failed",COMPOSER_CTA_DOUBLE_TAPPED:"composer_cta_double_tapped",NULLSTATE_CTAS_DELETE_INITIATED:"nullstate_ctas_delete_initiated",NULLSTATE_CTAS_DELETE_FAILED:"nullstate_ctas_delete_failed",NULLSTATE_CTAS_UPDATE_INITIATED:"nullstate_ctas_update_initiated",NULLSTATE_CTAS_UPDATE_FAILED:"nullstate_ctas_update_failed",NULLSTATE_CTAS_ADDED:"nullstate_ctas_added",NULLSTATE_CTAS_UPDATED:"nullstate_ctas_updated",NULLSTATE_CTAS_DELETED:"nullstate_ctas_deleted",NULLSTATE_ATTACHMENT_CREATION_FAILED:"nullstate_attachment_creation_failed",STRUCTURED_MENU_CTAS_DELETE_INITIATED:"structured_menu_ctas_delete_initiated",STRUCTURED_MENU_CTAS_DELETE_FAILED:"structured_menu_ctas_delete_failed",STRUCTURED_MENU_CTAS_UPDATE_INITIATED:"structured_menu_ctas_update_initiated",STRUCTURED_MENU_CTAS_UPDATE_FAILED:"structured_menu_ctas_update_failed",STRUCTURED_MENU_CTAS_ADDED:"structured_menu_ctas_added",STRUCTURED_MENU_CTAS_UPDATED:"structured_menu_ctas_updated",STRUCTURED_MENU_CTAS_DELETED:"structured_menu_ctas_deleted",STRUCTURED_MENU_CTAS_MIGRATED:"structured_menu_ctas_migrated",STRUCTURED_MENU_CTAS_MIGRATION_FAILED:"structured_menu_ctas_migration_failed",V2_STRUCTURED_MENU_UPDATED:"v2_structured_menu_updated",V2_STRUCTURED_MENU_UPDATE_FAIL:"v2_structured_menu_update_fail",NULLSTATE_GREETING_UPDATE_INITIATED:"nullstate_greeting_update_initiated",NULLSTATE_GREETING_UPDATE_FAILED:"nullstate_greeting_update_failed",NULLSTATE_GREETING_DELETE_SUCCEEDED:"nullstate_greeting_delete_succeeded",NULLSTATE_GREETING_DELETE_FAILED:"nullstate_greeting_delete_failed",WHITELIST_DOMAIN_UPDATED:"whitelist_domain_updated",WHITELIST_DOMAIN_UPDATE_FAILED:"whitelist_domain_update_failed",PAYMENT_SETTING_UPDATED:"payment_setting_updated",PAYMENT_SETTING_UPDATE_FAILED:"payment_setting_update_failed",THREAD_SETTING_DELETE_FAILED:"thread_setting_delete_failed",PAYMENT_SETTING_DELETE_FAILED:"payment_setting_delete_failed",TARGET_AUDIENCE_UPDATE_FAILED:"target_audience_update_failed",TARGET_AUDIENCE_UPDATE_SUCCEEDED:"target_audience_update_succeeded",DEVX_GET_STARTED_RENDERED:"devx_get_started_rendered",DEVX_TOS_CARD_RENDERED:"devx_tos_card_rendered",DEVX_BOT_CREATION_STARTED:"devx_bot_creation_started",DEVX_BOT_CREATION_SUCCESS:"devx_bot_creation_success",DEVX_BOT_CREATION_FAIL:"devx_bot_creation_fail",DEVX_PAGE_TOKEN_CARD_RENDERED:"devx_page_token_card_rendered",DEVX_PAGE_TOKEN_CALLBACK:"devx_page_token_callback",DEVX_PAGE_TOKEN_CALLBACK_NO_PAGE:"devx_page_token_callback_no_page",DEVX_PAGE_TOKEN_CALLBACK_NO_PERMISSIONS:"devx_page_token_callback_no_permissions",DEVX_PAGE_TOKEN_GENERATED:"devx_page_token_generated",DEVX_FINITE_LENGTH_PAGE_TOKEN_GENERATED:"devx_finite_length_page_token_generated",DEVX_PAGE_TOKEN_CALLBACK_FAILED:"devx_page_token_callback_failed",DEVX_PAKE_TOKEN_POPUP_OPEN_FAILED:"devx_page_token_popup_open_failed",DEVX_UPSELL_CARD_RENDERED:"devx_upsell_card_rendered",DEVX_UPSELL_LEARN_MORE_CLICKED:"devx_upsell_learn_more_clicked",DEBUG_EVENT_FOR_SEND_MESSAGE:"debug_event_send_message",PARSE_USER_INFO_FAILURE:"parse_user_info_failure",QUICK_REPLY_FALLBACK:"quick_reply_fallback",QUICK_REPLY_DECODE_FAILED:"quick_reply_decode_failed",QUICK_REPLY_PAYLOAD_WITH_WRONG_IDS:"quick_rely_payload_with_wrong_ids",PAGE_MESSAGE_TOPICS:"page_message_topics",DELIVER_PAYMENT_TO_WEBHOOK_SUCCEED:"deliver_payment_to_webhook_succeed",DELIVER_PAYMENT_TO_WEBHOOK_FAILED:"deliver_payment_to_webhook_failed",BROADCAST_MESSAGE_API_ERROR:"broadcast_message_api_error",DELIVER_CHECKOUT_UPDATES_TO_WEBHOOK_SUCCEED:"deliver_checkout_updates_to_webhook_succeed",DELIVER_CHECKOUT_UPDATES_TO_WEBHOOK_FAILED:"deliver_checkout_updates_to_webhook_failed",PAYMENT_CHECKOUT_UPDATES_SUCCEED:"payment_checkout_updates_succeed",PAYMENT_CHECKOUT_UPDATES_FAILED:"payment_checkout_updates_failed",PAYMENT_CHARGE_CALL_SUCCEED:"payment_charge_call_succeed",PAYMENT_CHARGE_CALL_FAILED:"payment_charge_call_failed",PAYMENTS_WEB_FORM_SUCCESS:"payments_web_form_success",PAYMENTS_WEB_FORM_FAILURE:"payments_web_form_failure",PAYMENTS_WEB_FORM_APPROVED:"payments_web_form_approved",PAYMENTS_WEB_FORM_APPROVAL_FAILED:"payments_web_form_approval_failed",PAYMENTS_WEB_FORM_REQUEST_PROCESSED:"payments_web_form_request_processed",PAYMENTS_WEB_FORM_REQUEST_PROCESSING_FAILED:"payments_web_form_request_processing_failed",PAYMENTS_WEB_FORM_DEVELOPER_AGREEMENT_SENT:"payments_web_form_developer_agreement_sent",SEARCH_POST_RANK_FAILED:"search_post_rank_failed",SEARCH_EXISTING_THREADS_FAILED:"search_existing_threads_failed",GAME_PLAY_NO_WEBHOOK_SUBSCRIPTION:"game_play_no_webhook_subscription",GAME_PLAY_WEBHOOK_FAILURE:"game_play_webhook_failure",GAME_PLAY_WEBHOOK_SUCCESS:"game_play_webhook_success",MESSENGER_PROFILE_DELETE_SUCCESS:"messenger_profile_delete_success",MESSENGER_PROFILE_DELETE_FAILURE:"messenger_profile_delete_failure",MESSENGER_PROFILE_INVALID_DATA:"messenger_profile_invalid_data",MESSENGER_PROFILE_UPDATE_SUCCESS:"messenger_profile_update_success",MESSENGER_PROFILE_UPDATE_FAILURE:"messenger_profile_update_failure",MESSENGER_PROFILE_GROUP_BOT_SETTINGS_UPDATE_SUCCESS:"messenger_profile_group_bot_settings_update_success",MESSENGER_PROFILE_GROUP_BOT_SETTINGS_UPDATE_FAILURE:"messenger_profile_group_bot_settings_update_failure",MESSENGER_PROFILE_GROUP_BOT_SETTINGS_GET_SUCCESS:"messenger_profile_group_bot_settings_get_success",MESSENGER_PROFILE_GROUP_BOT_SETTINGS_GET_FAILURE:"messenger_profile_group_bot_settings_get_failure",MESSENGER_PROFILE_GROUP_BOT_SETTINGS_DELETE_SUCCESS:"messenger_profile_group_bot_settings_delete_success",MN_PLATFORM_THREAD_CONTEXT_SUCCESS:"mn_platform_thread_context_success",MN_PLATFORM_THREAD_CONTEXT_FAILED:"mn_platform_thread_context_failed",MESSENGER_EXTENSIONS_GET_CONTEXT_SUCCESS:"messenger_extensions_get_context_success",MESSENGER_EXTENSIONS_GET_CONTEXT_FAILURE:"messenger_extensions_get_context_failure"};}),

null);

/** __static_js_modules__/p2plinkconstants.js */




__d("P2PLinkConstants",[],(function a(b,c,d,e,f,g){

f.exports={receiverIneligibleHelpURI:"http:\/\/www.facebook.com\/help\/1495718484027862",addDebitCardHelpURI:"http:\/\/www.facebook.com\/help\/200298266807261",helpCenterURI:"http:\/\/www.facebook.com\/help\/863171203733904",contactSupportURI:"http:\/\/www.facebook.com\/help\/contact\/1491759007768605",disabledPaymentsSupportURI:"http:\/\/www.facebook.com\/help\/contact\/223254857690713",complianceLearnMoreURI:"http:\/\/www.facebook.com\/help\/1555715811351399",complianceLearnMoreMsiteURI:"http:\/\/www.facebook.com\/help\/messenger-app\/369959656515129",securePayInfoLearnMoreURI:"http:\/\/www.facebook.com\/help\/146373702454423",contactFraudTeamURI:"http:\/\/www.facebook.com\/help\/contact\/370238886476028",payerProtectionURI:"http:\/\/www.facebook.com\/payer_protection\/",helpTransferSystemFailureURI:"http:\/\/www.facebook.com\/help\/contact\/614010102040957",helpTransferManualReviewURI:"http:\/\/www.facebook.com\/help\/messenger-app\/1463256903894928",helpTransferRecipientCanceledURI:"http:\/\/www.facebook.com\/help\/messenger-app\/1564459413784472",helpTransferCompletedURI:"http:\/\/www.facebook.com\/help\/messenger-app\/750020781733477",helpTransferCanceledSameCardURI:"http:\/\/www.facebook.com\/help\/messenger-app\/818512131561533",helpTransferPushFailURI:"http:\/\/www.facebook.com\/help\/1386991644944095",settingsWWWURI:"http:\/\/www.facebook.com\/settings?tab=payments",settingsMsiteURI:"http:\/\/m.facebook.com\/settings\/p2p\/",mTermsURI:"http:\/\/www.facebook.com\/legal\/m",mHelpURI:"http:\/\/www.facebook.com\/help\/messenger-app\/870471599656315",disputeURI:"http:\/\/www.facebook.com\/help\/contact\/828169843971429",paymentMethodsURI:"https:\/\/www.facebook.com\/settings?tab=payments&section=settings",paymentHistoryURI:"https:\/\/www.facebook.com\/settings?tab=payments&section=history",paymentsTermsURI:"\/payments_terms\/"};}),

null);

/** __static_js_modules__/quicksilversources.js */




__d("QuicksilverSources",[],(function a(b,c,d,e,f,g){

f.exports={FB_CANVAS:"fb_canvas",FB_FEED:"fb_feed",FB_FEED_EGO:"fb_ego_igyml",FB_FEED_SCREENSHOT:"fb_feed_screenshot",FB_SCORE_PASSED_NOTIF:"fb_score_passed_notif",FB_SEARCH:"big_blue_search",FB_FEED_IGYML_QP:"fb_qp_igyml",FB_GROUP_COMPOSER:"fb_group_composer",FB_GROUP_GAMES_TAB:"fb_group_games_tab",FB_GROUP_MALL:"fb_group_mall",FB_GROUP_MALL_EGO:"fb_group_mall_ego",FB_GROUP_MALL_SCREENSHOT:"fb_group_mall_screenshot",FB_GROUP_NEWS_FEED:"fb_group_news_feed",FB_GROUP_NEWSFEED_SCREENSHOT:"fb_group_newsfeed_screenshot",FB_GROUP_RHC_LEADERBOARD:"fb_group_rhc_leaderboard",FB_GROUP_SCORE_PASSED_NOTIF:"fb_group_score_passed_notif",MESSENGER_ADMIN_MESSAGE:"admin_message",MESSENGER_CALL_TO_ACTION:"call_to_action",MESSENGER_COMPOSER:"composer",MESSENGER_GAME_EMOJI:"game_emoji",MESSENGER_GAME_SHARE:"game_share",MESSENGER_GAME_SCORE_SHARE:"game_score_share",MESSENGER_GAME_SEARCH:"search",MOBILE_BOOKMARK:"mobile_bookmark",EMBEDDED_PLAYER:"embedded_player",WWW_BOOKMARK:"www_bookmark",WWW_APP_CENTER_MAIN:"www_app_center_main",WWW_APP_CENTER_BROWSE:"www_app_center_browse",UNKNOWN:"unknown"};}),

null);

/** js/fbpayments/payments_modules_DEPRECATED/components/common/FBPaymentsErrorNotice_DEPRECATED.react.js */






__d('FBPaymentsErrorNotice_DEPRECATED.react',['cx','React','XUINotice.react'],(function a(b,c,d,e,f,g,h){var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.














renderErrorContent=function(){
var r=this.props.error;



if(r.message.__html){
return c('React').createElement('span',{dangerouslySetInnerHTML:r.message});}else 

return c('React').createElement('span',null,r.message);}.

bind(this),n;}l.prototype.




render=function(){'use strict';

return (c('React').createElement(c('XUINotice.react'),{className:"_3-8n",use:'warn'},
this.renderErrorContent()));};


l.propTypes={error:k.object};l.defaultProps={error:null};


f.exports=l;}),null);

/** js/mercury/clients/messenger/MessengerProfileImageWrapper.react.js */






__d('MessengerProfileImageWrapper.react',['cssVar','cx','MessagingThreadType','MessengerConfig','React','TooltipData','WorkGKs','getViewportDimensions','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,












l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').PureComponent);k=j&&j.prototype;m.prototype.











render=function(){
var q={};
if(this.props.tooltipContent){
var r=c('getViewportDimensions')().width,
s=parseInt
("700px".replace('px',''),
10),

t=
r<=s?'above':'left';
Object.assign
(q,
c('TooltipData').propsFor(this.props.tooltipContent,t));}



var u=this.props.threadType===c('MessagingThreadType').ROOM?

{width:this.props.size+'px',
height:this.props.size+'px',
background:this.props.threadColor?
this.props.threadColor:
"#0084ff"}:


{width:this.props.size+'px',
height:this.props.size+'px'};


return (c('React').createElement('div',babelHelpers['extends']
({className:c('joinClasses')
("_4ldz",
this.props.className),

style:
{width:this.props.size+'px',
height:this.props.size+'px'}},

q),
c('React').createElement('div',
{className:"_4ld-"+


(this.props.threadType===c('MessagingThreadType').ROOM?' '+"_180i":''),

style:u},
this.props.children),

this.$MessengerProfileImageWrapper_renderBadge()));};


m.prototype.

$MessengerProfileImageWrapper_renderBadge=function(){
if(this.props.customBadge)

return (c('React').createElement(o,
{className:"_4ld_",
customBadge:this.props.customBadge}));




if(c('MessengerConfig').BadgesDisabled||
!this.props.showBadge||
this.props.isMessengerUser==null||
c('WorkGKs').workplace_www_chat_branding)

return null;

if(this.props.renderOnlineStatus)

return (c('React').createElement(p,
{className:"_4ld_"}));




return (c('React').createElement(n,
{className:"_4ld_",
isMessengerUser:this.props.isMessengerUser,
customBadge:this.props.customBadge}));};


function m(){j.apply(this,arguments);}m.propTypes={customBadge:l.string,isMessengerUser:l.bool,renderOnlineStatus:l.bool,showBadge:l.bool,size:l.number,threadColor:l.string,threadType:l.number,tooltipContent:l.string};


var n=function q(r){
return (c('React').createElement('div',
{className:c('joinClasses')
(r.className,
"_2pom")},

c('React').createElement('div',
{className:"_2pon"+

(r.isMessengerUser?' '+"_2poo":'')+
(!r.isMessengerUser?' '+"_2pop":'')})));},





o=function q(r){
return (c('React').createElement('div',
{className:c('joinClasses')
(r.className,
"_2pom")},

c('React').createElement('div',
{className:"_2pon _4p4t"},

r.customBadge)));};




n.propTypes=
{isMessengerUser:l.bool.isRequired};


var p=function q(r){
return (c('React').createElement('div',
{className:c('joinClasses')
(r.className,
"_38jn")},

c('React').createElement('div',{className:"_38jt"})));};



f.exports=m;}),null);

/** js/mercury/clients/messenger/MessengerContactImage.react.js */






__d('MessengerContactImage.react',['Image.react','MessengerProfileImageWrapper.react','React'],(function a(b,c,d,e,f,g){var h,i,







j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').PureComponent);i=h&&h.prototype;k.prototype.















render=function(){'use strict';

return (c('React').createElement('div',{className:this.props.className},
c('React').createElement(c('MessengerProfileImageWrapper.react'),
{isMessengerUser:this.props.isMessengerUser,
size:this.props.size,
customBadge:this.props.customBadge,
showBadge:true},
c('React').createElement(c('Image.react'),
{alt:'',
height:this.props.size,
src:this.props.src,
width:this.props.size}))));};




function k(){'use strict';h.apply(this,arguments);}k.propTypes={customBadge:j.string,isMessengerUser:j.bool,size:j.number.isRequired,src:c('Image.react').validateImageSrcPropType};


f.exports=k;}),null);

/** js/mercury/clients/messenger/components/core/MessengerDialogTitle.react.js */






__d('MessengerDialogTitle.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits






(k,c('React').Component);j=i&&i.prototype;k.prototype.
render=function(){

return (c('React').createElement('div',
{className:c('joinClasses')
("_19jt",
this.props.className)},

this.props.children));};


function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/mercury/clients/messenger/components/core/MessengerScrollableArea.react.js */






__d('MessengerScrollableArea.react',['cx','React','ReactDOM','ScrollableArea.react','Style','UserAgent','clearImmediate','joinClasses','setImmediate','throttle'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,













k=c('React').PropTypes,

l=20;i=babelHelpers.inherits



(m,c('React').Component);j=i&&i.prototype;function m(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=j.constructor).call.apply(o,[this].concat(r)),n.call(this),p;}m.prototype.


























componentDidMount=function(){
this.$MessengerScrollableArea_resizeCallback=c('setImmediate')(this.$MessengerScrollableArea_resize);
this.$MessengerScrollableArea_isMounted=true;
this.$MessengerScrollableArea_handleScrollThrottled=c('throttle')(this.$MessengerScrollableArea_handleScroll,50);};
m.prototype.

componentWillUnmount=function(){
c('clearImmediate')(this.$MessengerScrollableArea_resizeCallback);
this.$MessengerScrollableArea_isMounted=false;};
m.prototype.







render=function(){

return (c('React').createElement(c('ScrollableArea.react'),
{className:c('joinClasses')
("_5f0v",
this.props.className),

height:this.props.height,
onScroll:this.props.needsFastScrollHandler?
this.$MessengerScrollableArea_handleScroll:
this.$MessengerScrollableArea_handleScrollThrottled,
ref:'scrollable',
shadow:false,
tabIndex:this.props.tabIndex,
width:this.props.width},
this.props.children));};


m.prototype.














































scrollToPosition=
function(o){


var p=arguments.length<=1||arguments[1]===undefined?false:arguments[1],q=arguments.length<=2||arguments[2]===undefined?{}:arguments[2],
r=this.getArea();
if(!r)
return;

r.setScrollTop(o,p,q);};
m.propTypes={needsFastScrollHandler:k.bool,onScroll:k.func,width:k.number};var n=function o(){this.$MessengerScrollableArea_isMounted=false;this.$MessengerScrollableArea_resizeCallback=null;this.$MessengerScrollableArea_handleScroll=function(){if(this.$MessengerScrollableArea_isMounted){var p;this.props.onScroll&&(p=this.props).onScroll.apply(p,arguments);}}.bind(this);this.$MessengerScrollableArea_resize=function(){if(!c('UserAgent').isBrowser('IE'))return;var p=this.refs.scrollable.refs.wrap,q=this.refs.scrollable.refs.body;if(!q||!p)return;q=c('ReactDOM').findDOMNode(q);p=c('ReactDOM').findDOMNode(p);var r=p.offsetWidth-p.clientWidth;if(r>0)c('Style').set(q,'margin-right',-r+'px');}.bind(this);this.getArea=function(){return this.refs.scrollable.getArea();}.bind(this);this.scrollToBottom=function(){var p=this.getArea();if(p)this.scrollToPosition(p.getScrollHeight());}.bind(this);this.scrollToTop=function(p){var q=this.getArea();if(q)q.scrollToTop(!!p);}.bind(this);this.

isScrolledToBottom=function(){
return this.isScrolledToBottomWithHeight(0);}.
bind(this);this.

isScrolledToBottomWithHeight=function(p){
var q=this.getArea();
if(!q)
return false;

return q.getScrollTop()+q.getClientHeight()+p>=
q.getScrollHeight()-l;}.
bind(this);this.

isScrolledToTop=function(){
var p=this.getArea();
if(!p)
return true;


return p.getScrollTop()<=l;}.
bind(this);this.

getScrollTop=function(){
var p=this.getArea();
if(!p)
return 0;


return p.getScrollTop();}.
bind(this);};


f.exports=m;}),null);

/** js/mercury/clients/rtc/groupcall/MultiwayTypes.js */







__d("MultiwayTypes",[],(function a(b,c,d,e,f,g){



var h=
{OK:200,

BAD_REQUEST:400,
UNAUTHORIZED:401,
NOT_FOUND:404,
METHOD_NOT_ALLOWED:406,
CONDITIONAL_REQUEST_FAILED:412,
BUSY_HERE:486,

SERVER_INTERNAL_ERROR:500,
SERVICE_UNAVAILABLE:503,
PRECONDITION_FAILURE:580},


i=
{JOIN:0,
SERVER_MEDIA_UPDATE:1,
HANGUP:2,
ICE_CANDIDATE:3,
RING:4,
DISMISS:5,
CONFERENCE_STATE:6,
ADD_PARTICIPANTS:7,
SUBSCRIPTION:8,
CLIENT_MEDIA_UPDATE:9,
DATA_MESSAGE:10,
REMOVE_PARTICIPANTS:11,
EXPERIMENT:12},


j=
{AUDIO:0,
VIDEO:1,
DATA:2},


k=
{IGNORE_CALL:0,
HANGUP_CALL:1,
NO_ANSWER_TIMEOUT:2,
CLIENT_ERROR:3,
IN_ANOTHER_CALL:4,
CLIENT_INTERRUPTED:5},


l=
{CALL_ENDED:0,
ANSWERED_ON_ANOTHER_DEVICE:1,
IN_ANOTHER_CALL:2,
CONNECTION_DROPPED:3,
REJECTED_ON_ANOTHER_DEVICE:4,
REMOVED_BY_PARTICIPANT:5,
REJECTED_BY_CALLEE:6,
INTERNAL_ERROR:7},


m=
{SUPPORT_AUDIO:0,
SUPPORT_VIDEO:1},


n=
{GROUP_AUDIO_CALL:0,
PEER_VIDEO_CALL:1,
PEER_AUDIO_CALL:2,
GROUP_VIDEO_CALL:3,
LIVE_STREAM:4},


o=
{OK:0,
NOT_SUPPORTED:1,
IN_ANOTHER_CALL:10},




























































































p=
{UNKNOWN:0,
DISCONNECTED:1,

NO_ANSWER:2,
REJECTED:3,
UNREACHABLE:4,
CONNECTION_DROPPED:5,

CONTACTING:6,
RINGING:7,
CONNECTING:8,
CONNECTED:9,

PARTICIPANT_LIMIT_REACHED:10,

IN_ANOTHER_CALL:11};





























































f.exports=
{RtcResponseStatusCode:h,
MessageType:i,
MediaType:j,
RingType:n,
HangupReason:k,
DismissReason:l,
Capability:m,
DeviceStatus:o,
ParticipantCallState:p};}),null);

/** js/p2p/immutable_records/P2PUser.js */







__d('P2PUser',['immutable'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits



(j,c('immutable').Record
({id:'',
name:'',
full_name:'',
profile_uri:''}));i=h&&h.prototype;function j(){h.apply(this,arguments);}







f.exports=j;}),null);

/** js/p2p/immutable_records/P2PPaymentRequest.js */







__d('P2PPaymentRequest',['P2PPaymentRequestStatus','P2PUser','immutable'],(function a(b,c,d,e,f,g){

'use strict';var h,i,







j=Math.round(Date.now()/1000);h=babelHelpers.inherits







(k,c('immutable').Record
({amount:'',
amountWithSymbol:'',
creationTime:j,
currency:'',
currentStatus:c('P2PPaymentRequestStatus').INITED,
groupThreadFBID:'',
id:'',
individualRequests:[],
memoText:'',
requestee:{},
requester:{},
statusDescription:'',
transferID:'',
updatedTime:j}));i=h&&h.prototype;function k(){h.apply(this,arguments);}

















f.exports=k;}),null);

/** js/ui/layer/behaviors/AbstractDialogFitHeight.js */





__d('AbstractDialogFitHeight',['csx','cx','CSS','DOM','Event','Style','SubscriptionsHandler','Vector','throttle'],(function a(b,c,d,e,f,g,h,i){












var j=450,

k=100,
l=67,
m=67;






function n(o){'use strict';
this.$AbstractDialogFitHeight_dialog=o;}
n.prototype.

enable=function(){'use strict';
this.$AbstractDialogFitHeight_subscriptions=new (c('SubscriptionsHandler'))();
this.$AbstractDialogFitHeight_subscriptions.addSubscriptions
(this.$AbstractDialogFitHeight_dialog.subscribe('beforeshow',this.$AbstractDialogFitHeight_resize.bind(this)),
c('Event').listen(window,'resize',c('throttle')(this.$AbstractDialogFitHeight_resize.bind(this))));


this.$AbstractDialogFitHeight_body=c('DOM').find(this.$AbstractDialogFitHeight_dialog.getRoot(),"._4-i2");

c('CSS').addClass(this.$AbstractDialogFitHeight_body,"_5pfh");

this.$AbstractDialogFitHeight_padding=k;

if(c('DOM').scry(this.$AbstractDialogFitHeight_dialog.getRoot(),"._4-i0").length)
this.$AbstractDialogFitHeight_padding+=l;



if(c('DOM').scry(this.$AbstractDialogFitHeight_dialog.getRoot(),"._5a8u").length)

this.$AbstractDialogFitHeight_padding+=m;};

n.prototype.

disable=function(){'use strict';
this.$AbstractDialogFitHeight_subscriptions.release();
this.$AbstractDialogFitHeight_subscriptions=null;

c('CSS').removeClass(this.$AbstractDialogFitHeight_body,"_5pfh");};
n.prototype.

$AbstractDialogFitHeight_resize=function(){'use strict';
var o=c('Vector').getViewportDimensions().y,
p=o-this.$AbstractDialogFitHeight_padding;
c('Style').set
(this.$AbstractDialogFitHeight_body,
this.getHeightProperty(),
Math.max(j,p)+'px');

this.$AbstractDialogFitHeight_dialog.updatePosition();};




f.exports=n;}),null);

/** js/ui/layer/behaviors/DialogFitHeight.js */





__d('DialogFitHeight',['AbstractDialogFitHeight'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits



(j,c('AbstractDialogFitHeight'));i=h&&h.prototype;j.prototype.




getHeightProperty=function(){'use strict';
return 'height';};
function j(){'use strict';h.apply(this,arguments);}



f.exports=j;}),null);
