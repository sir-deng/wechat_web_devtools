'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('uuid/v4'),b=require('./0634ee2ebd3e560d9d4804ecc960160f.js');module.exports={setProjectInfo:(a)=>({type:b.INFO_SET_PROJECT,data:a}),setUploadInfo:(a)=>({type:b.INFO_SET_UPLOAD,data:a}),setConfirmInfo:(a)=>({type:b.INFO_SET_CONFIRM,data:a}),setShareInfo:(a)=>({type:b.INFO_SET_SHARE,data:a}),setUploadPluginDocInfo:(a)=>({type:b.INFO_SET_UPLOAD_PLUGIN_DOC,data:a}),showConfirmPopup:(c)=>(d)=>new Promise((e)=>{const f=c.id||a();d({type:b.INFO_SHOW_CONFIRM_POPUP,data:_extends({},c,{id:f,resolve:(a)=>{d({type:b.INFO_CLOSE_CONFIRM_POPUP,id:f}),e(a)}})})}),showError:(a)=>(c)=>{c({type:b.INFO_SHOW_ERROR,data:{message:a.toString()}})},showSuccessTip:(a)=>({type:b.INFO_SHOW_SUCCESS,data:a}),openEditorFile:(a)=>({type:b.INFO_OPEN_EDITOR_FILE,data:a}),setAddDevicePopUp:(a)=>({type:b.INFO_ADD_DEVICE_POPUP,data:a}),setChangeAppIdInfo:(a)=>{return{type:b.INFO_SET_CHANGE_APP_ID,data:a}},coloseConfirmPopup:(a)=>({type:b.INFO_CLOSE_CONFIRM_POPUP,id:a}),setWorkbenchInfo:(a)=>({type:b.INFO_SET_WORKBENCH_INFO,data:a})}}(require('lazyload'),require);