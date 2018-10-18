'use strict';!function(require,directRequire){var a=localStorage.getItem('urlConfig');a=a?JSON.parse(a):{};const b='https://servicewechat.com/',c='https://mp.weixin.qq.com/',d='https://open.weixin.qq.com/';var e=a.wechat_login||`${d}connect/qrconnect?appid=wxde40e023744664cb&redirect_uri=https%3a%2f%2fmp.weixin.qq.com%2fdebug%2fcgi-bin%2fwebdebugger%2fqrcode&scope=snsapi_login&state=login#wechat_redirect`,f=`${c}debug/cgi-bin/webdebugger/qrcode`,g=a.webdebugger_clientreport||`${c}debug/cgi-bin/webdebugger/clientreport`,h=a.webdebugger_download||`${c}debug/cgi-bin/webdebugger/download`,i=a.refresh_ticket||`${c}debug/cgi-bin/webdebugger/refreshticket`;module.exports={CGI_DOMAIN:b,MP_DOMAIN:c,OPEN_DOMAIN:d,clientreportURL:g,downloadURL:h,refreshTicketURL:i,LOGIN_URL:e,LOGIN_REDIRECT_URL:f,NEW_VERSION_LOG:'https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/new.html',BETA_VERSION_LOG:'https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/beta.html',LOADCONFIG_URL:`${c}debug/cgi-bin/webdebugger/loadconfig`,batchGetCardInfoURL:`${c}debug/cgi-bin/webdebugger/getcarditeminfo`,batchAddCardURL:`${c}debug/cgi-bin/webdebugger/acceptcarditem`,batchViewCardURL:`${c}debug/cgi-bin/webdebugger/batchgetcarditembytpinfo`,createWeappURL:`${b}wxa-dev-logic/getappinfo`,newReportURL:`${b}wxa-dev-logic/clientreport`,getWeappAttrURL:`${b}wxa-dev-logic/batchgetappattr`,jsLoginURL:`${b}wxa-dev-logic/jslogin`,jsRefreshSessionURL:`${b}wxa-dev-logic/jsrefresh_session`,jsOperateWXDATAURL:`${b}wxa-dev-logic/jsoperatewxdata`,jsDecodeQRCodeURL:`${b}wxa-dev-logic/decode_qrcode`,jsDecodeLoginQRCodeURL:`${b}wxa-dev-logic/decodeloginqrcode`,jsAuthorizeURL:`${b}wxa-dev-logic/jsauthorize`,jsAuthorizeConfirmURL:`${b}wxa-dev-logic/jsauthorize-confirm`,testSourceURL:`${b}wxa-dev/testsource`,testSourceNewFeatureURL:`${b}wxa-dev-new/testsource`,commitSourceURL:`${b}wxa-dev/commitsource`,commitSourceNewFeatureURL:`${b}wxa-dev-new/commitsource`,shareMiniCodeURL:`${b}wxa-dev-logic/codepack?action=setcodepack`,getMiniCodeURL:`${b}wxa-dev-logic/codepack?action=getcodepack`,getMiniCodeInfoURL:`${b}wxa-dev-logic/codepack?action=getcodepackinfo`,downloadRedirectURL:`${b}wxa-dev-logic/download_redirect`,touristCreateURL:`${b}wxa-dev-logic/createtourist`,uploadQrCodeURL:`${b}wxa-dev-logic/getcommitqrcode`,paymentURL:`${b}wxa-dev-logic/payment`,paymentStateURL:`${b}wxa-dev-logic/querypaymentstate`,refreshUploadConfirm:`${b}wxa-dev-logic/queryqrcodestate`,cleanUserAuth:`${b}wxa-dev-logic/deleteuserauth`,getBbsTicket:`${b}wxa-dev-logic/getbbsopenticket`,getDocTicket:`${b}wxa-dev-logic/getdocopenticket`,checkApiAuth:`${b}wxa-dev-logic/jsapiauth`,getAuthList:`${b}wxa-dev-logic/getauthlist`,setAuth:`${b}wxa-dev-logic/setauth`,syncMessage:`${b}wxa-dev-logic/devsync`,syncBBSLogConfig:`${b}wxa-dev-logic/idelogconfig`,getUserAutoFillData:`${b}wxa-dev-logic/getuserfillinfo`,setUserAutoFillData:`${b}wxa-dev-logic/saveuserfillinfo`,deleteUserAutoFillData:`${b}wxa-dev-logic/deleteuserfillinfo`,requestAuthUserAutoFillData:`${b}wxa-dev-logic/authuserfillinfo`,clearUserAutoFillInfo:`${b}wxa-dev-logic/clearuserfillinfo`,getUserPhoneNumber:`${b}wxa-dev-logic/jsgetuserwxphone`,checkWeRunState:`${b}wxa-dev-logic/checkwerunstate`,getMobileTestOpenTicket:`${b}wxa-dev-logic/getmtestopenticket`,commitMobileTest:`${b}wxa-dev/commitmobiletest`,getMobileTestInfo:`${b}wxa-dev/getmobiletestinfo`,viewMobileTestReport:`${c}wxopen/mobiletest`,getDataOpenTicket:`${b}wxa-dev-logic/getdataopenticket`,IDKeyBatchReport:`${b}wxa-dev-logic/wxaappidkeybatchreport`,searchWidgetTrans:`${b}wxa-dev-logic/widgettransfer`,requestWidgetData:`${b}wxa-dev-logic/dynamicdata`,checkJumpWeapp:`${b}wxa-dev-logic/devlaunchwxaapp`,getPublicLibUsageRate:`${b}wxa-dev-logic/getpublibpercentage`,uploadPluginDoc:`${b}wxa-dev/commitpluginreadme`,getcosinfoURL:`${b}wxa-dev-cloud/getcosinfo`,operatecvmURL:`${b}wxa-dev-cloud/operatecvm`,polleventrespURL:`${b}wxa-dev-cloud/polleventresp`,gettmpcode:`${b}wxa-dev-cloud/gettmpcode`,getplugincode:`${b}wxa-dev/getplugincode`,clearSession:`${b}wxa-dev-logic/clearsession`,verifyPlugin:`${b}wxa-dev-logic/verifyplugin`,batchGetContact:`${b}wxa-dev-logic/batchgetcontact`,selectLanguage:`${b}wxa-dev-cloud/selectlanguage`,checkUpdate:`${b}wxa-dev-logic/checkupdate`,batchGetPluginInfo:`${b}wxa-dev-logic/batchgetplugininfo`,getCloudConsoleTmpCode:`${b}wxa-dev-cloud/getqbasetmpcode`,getVendorPkg:`${b}wxa-dev-logic/getpublibdownloadurl`,getCosTicket:`${b}wxa-dev-cloud/getcosticket`,cosAction:`https://lagame.qcloud.com/console/Resources`,getTGitUrl:`${b}wxa-dev-cloud/getcosinfo?hook=tgit`,tcbUrl:`https://tcb.cloud.tencent.com/wx`,tcbLoginUrl:`${b}wxa-dev-qbase/qbaselogin`,tcbAgentUrl:`${b}wxa-dev-qbase/httpagent`,getQBaseInfo:`${b}wxa-dev-qbase/getqbaseinfo`,setQBaseInfo:`${b}wxa-dev-qbase/openqbaseinfo`,getSandboxAccountUrl:`${b}wxa-dev-logic/getsandbox`,getServerScript:`${b}wxa-dev-logic/getmanagedscript`,uploadServerScript:`${b}wxa-dev-logic/uploadmanagedscript`,checkServerScript:`${b}wxa-dev-logic/checkmanagedscript`,getServerScriptLog:`${b}wxa-dev-logic/getmanagedscriptlog`,uploadServerResources:`${b}wxa-dev-logic/uploadjssvrresource`,downloadServerResources:`${b}wxa-dev-logic/getjssvrresource`,getServerResourcesInfo:`${b}wxa-dev-logic/getjssvrresourceinfo`,getPluginList:`${b}wxa-dev-logic/getpluginlist`,translateFilename:`${b}wxa-dev/translate_filename`}}(require('lazyload'),require);