'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('fs'),b=require('path'),c=require('jszip'),d=require('./72653d4b93cdd7443296229431a7aa9a.js'),e=require('./f171257bbcaef547a3cf27266ccb0db2.js'),f=require('./92320c1386e6db6a6f2556736a9bc280.js'),g=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),h=require('./15ba1827c7f6564a45df6bd44da3a977.js'),i=require('./233d77ecf0781f44985f684f70e316d0.js'),j=require('./cba9f1961ad06faf785db8d4f9fa3ed8.js'),k=require('./da7c31daaf542cf1796023d8e344b98a.js'),{setCookie:l,getCookieHeader:m}=require('./78d92290ab1162437cdbc716df54225c.js'),n=async()=>{const{resp:a,body:b}=await h({url:`${e.tcbLoginUrl}`,body:JSON.stringify({new_method:!0}),method:'POST',needToken:1,needAppID:1});if(a&&a.headers&&a.headers['set-cookie']){const b=a.headers['set-cookie'],c=Object.prototype.toString.call(b);'[object String]'==c?l(b):'[object Array]'==c&&b.forEach((a)=>{l(a)})}},o=async()=>{let a=m();return a||(await n(),a=m()),a},p=async(a={})=>{let b=await h({url:`${e.tcbAgentUrl}`,method:a.method||'GET',body:JSON.stringify(a.data||{}),headers:{"User-Agent":'wechatdevtools',Cookie:await o()},needParse:1,needCheckErrCode:-1,needToken:1,needAppID:1});const{base_resp:c,content:d}=b.body;if(0!=c.ret){if(c.ret==g.TCB_SESSION_FAIL&&(!a||!a.retry))return await n(),a.retry=!0,await p(a);if(c.ret==g.NO_CLOUD_CONSOLE_PERMISSION)throw'\u767B\u5F55\u7684\u5F00\u53D1\u8005\u5E10\u53F7\u6CA1\u6709\u4E91\u5F00\u53D1\u63A7\u5236\u53F0\u6743\u9650';throw c}const f=JSON.parse(d),i=f.code;if(0==i)return f;if(0==i)return f;if(('VERIFY_LOGIN_FAILED'==i||4100==i||4105==i||'AuthFailure.TokenFailure'==i||'GET_SESSIONTOKEN_FAILED'==i)&&!a.retry)return await n(),a.retry=!0,await p(a);throw new Error(`${a.name} fail code:${i} message:${f.message}`)},q=(d,e,f,g=!1)=>{if(!a.existsSync(d))return f;f||(f=new c);let h=a.statSync(d),j=e||b.basename(d);if(h.isDirectory()){g&&f.folder(j);let c=a.readdirSync(d);for(let a=0,e=c.length;a<e;a++){let e=c[a],h=g?b.posix.join(j,e):e;q(b.join(d,e),h,f,!0)}}else f.file(j,a.readFileSync(d),{binary:!0,unixPermissions:h.mode});return f};module.exports={getTicket:async()=>{async function a(){try{const{body:a}=await h({url:`${e.getCloudConsoleTmpCode}`,needToken:1,needAppID:1});return console.log('res',a),a.tmp_code}catch(a){throw b=a,d.error(`get cloud console tmpcode error: ${a.toString()}`),a}}let b='';for(let b=0;b<3;b++)try{const b=await a();if(b)return b}catch(a){}throw new Error(`get tmpcode failed: ${b.toString()}`)},getEnvList:async()=>{k('tcb_get_env_list',!0);try{let a=await p({data:{path:'/wx/user?action=getEnvListWithGather',content:''},method:'POST',name:'getEnvList'}),b=(a.data.env_list||[]).map((a)=>{return _extends({},a,{namespace:a.resource_gather&&a.resource_gather.function&&a.resource_gather.function.namespace||a.id})});return{env_list:b}}catch(a){throw k('tcb_get_env_list_err',!0),a}},getTcbFuncList:async(a={})=>{k('tcb_get_func_list',!0);const{namespace:b,pageIndex:c=0,pageSize:d=100}=a;try{let a=await p({data:{path:'/wx/capi?i=scf/ListFunctions',content:JSON.stringify({serviceType:'scf',action:'ListFunctions',regionId:4,data:{Offset:c*d,Limit:d,Namespace:b,Version:'2018-04-16',Region:'ap-shanghai'},env_id:b,weappidRequired:!0})},method:'POST',name:'getTcbFuncList'});return a.data.Response}catch(a){throw k('tcb_get_func_list_err',!0),a}},getFuncDownloadAddress:async(a)=>{k('tcb_get_func_download_addr',!0);const{namespace:b,functionName:c}=a;try{let a=await p({data:{path:'/wx/capi?i=scf/GetFunctionAddress',content:JSON.stringify({serviceType:'scf',action:'GetFunctionAddress',regionId:4,data:{FunctionName:c,Namespace:b,Version:'2018-04-16',Region:'ap-shanghai'},weappidRequired:!0})},method:'POST',name:'getFunctionAddress'});return a.data.Response}catch(a){throw k('tcb_get_func_download_addr_err',!0),a}},uploadTcbFunc:async(c)=>{const{namespace:g,functionName:i,dirPath:l,runtime:m}=c;j.checkFunctionDirectory(l);const p=q(l),r=await p.generateAsync({type:'nodebuffer',platform:'darwin'===process.platform?'UNIX':'DOS'}),s=b.join(f.Weappdest,`${Date.now()}${Math.random()}.zip`);a.writeFileSync(s,r);const t=async(b={})=>{let{body:c}=await h({url:`${e.tcbUrl}/client?action=uploadFunction`,method:'POST',headers:{"User-Agent":'wechatdevtools',Cookie:await o()},formData:{action:'UpdateFunctionCode',serviceType:'scf',data:JSON.stringify({Namespace:g,FunctionName:i,Runtime:m||'Nodejs8.9'}),filedata:a.createReadStream(s)},needAppID:-1,needToken:-1});k('tcb_up_func',!0);const f=c.code;if(('VERIFY_LOGIN_FAILED'==f||4100==f||4105==f||'AuthFailure.TokenFailure'==f||'GET_SESSIONTOKEN_FAILED'==f)&&!b.retry)return await n(),b.retry=!0,await t(b);if(a.unlink(s,(a)=>{a&&d.error(`delete tcb upload fn zip fail with error : ${a.toString()}`)}),0!=f)throw k('tcb_up_func_err',!0),new Error(`tcb uploadTcbFunc ${f} ${c.message}`);return{filesCount:Object.keys(p.files).length,packSize:r.byteLength}};return await t()},downloadTcbFunc:async(a)=>{return new Promise((b,d)=>{k('tcb_download_func',!0),i({url:a,encoding:null},async(a,e,f)=>{if(a)return k('tcb_download_func_err',!0),void d(a);try{var g={},h=await c.loadAsync(f);for(let a in h.files){let b=h.files[a];if(b.dir)continue;let c=await b.async('nodebuffer');g[a]=c}b(g)}catch(a){k('tcb_download_func_err',!0),d(a)}})})},getQBaseInfo:async()=>{let{body:a}=await h({url:e.getQBaseInfo,method:'POST',needToken:1,needAppID:1});return a},setQBaseInfo:async()=>{let{body:a}=await h({url:e.setQBaseInfo,method:'POST',needToken:1,needAppID:1});if(0!=a.base_resp.ret)throw new Error(`ret:${a.base_resp.ret} errmsg:${a.base_resp.errmsg}`)}}}(require('lazyload'),require);