'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a(a){return'/'+a}const b=require('lodash'),c=require('./ad554134baaa7dc37c79f2d0af026415.js'),d=require('querystring'),e=require('./c604817bbbe125c83759d41efefe4ee8.js'),f=require('./879b9b1b8431c6089f7619a2530cf66d.js'),g={taskName:'',config:{},dataStr:'',maxTimeout:0,useBackup:!0,downgrade:!1,onBeforeRun:null,forceBackup:!1,showInStatus:!1,onAfterRun:null,onRunSuccess:null,onRunFail:null,onAskShouldRun:null};let h=null;module.exports=async function(b={}){const i=_extends({},g,b||{}),{taskName:j,config:k,dataStr:l,maxTimeout:m,useBackup:n,downgrade:o,onAskShouldRun:p,onBeforeRun:q,onAfterRun:r,onRunSuccess:s,onRunFail:t,forceBackup:u,showInStatus:v}=i;return new Promise(async(b,g)=>{try{if('function'==typeof p&&!p())return g();const e=k;let h='';try{h=decodeURIComponent(d.stringify(e))}catch(a){h=''}const i=await(async()=>new Promise(async(b,d)=>{'function'==typeof q&&q.call(null);let g=!1;!u&&m&&setTimeout(()=>{g||(c.stop(!0),d(new Error('max timeout')))},m),u?d('force backup'):(async()=>{const i=`${+new Date}-${Math.random()}`;try{const d=Date.now();if(console.log('before run Task',`${j}?${h}`),v){const a={type:'SHOW',id:i,text:`running ${j} ${h} ...`,duration:Infinity};!0===v?f.hub.emit(f.EVENT.STATUS_DISPLAY,a):f.hub.emit(f.EVENT.STATUS_DISPLAY,_extends({},a,v))}const k=await c.runTask({path:a(j),query:e,headers:{downgrade:o?'yes':'no'},body:l});console.log('done run Task',`${j}?${h}`,Date.now()-d),v&&f.hub.emit(f.EVENT.STATUS_DISPLAY,{type:'HIDE',id:i}),g=!0,b(k)}catch(a){v&&f.hub.emit(f.EVENT.STATUS_DISPLAY,{type:'HIDE',id:i}),d(a)}})()}))();'function'==typeof s&&s.call(null),'function'==typeof r&&r.call(null),b(i)}catch(c){const d=(a)=>{'function'==typeof t&&t.call(null),'function'==typeof r&&r.call(null),a instanceof Error?g(a):g(new Error(a))};if(u||n){const c=`${+new Date}-${Math.random()}`;try{const d=Date.now();if(v){const a={type:'SHOW',id:c,text:`running ${j} ${k.sourceFileName} ...`,duration:Infinity};!0===v?f.hub.emit(f.EVENT.STATUS_DISPLAY,a):f.hub.emit(f.EVENT.STATUS_DISPLAY,_extends({},a,v))}const g=await e(a(j),k,l);v&&(clearTimeout(h),h=setTimeout(()=>{f.hub.emit(f.EVENT.STATUS_DISPLAY,{type:'HIDE',id:c})},100)),console.log('task',j,'backup method spent time',Date.now()-d),'function'==typeof s&&s.call(null),'function'==typeof r&&r.call(null),b(g)}catch(a){v&&f.hub.emit(f.EVENT.STATUS_DISPLAY,{type:'HIDE',id:c}),d(a)}}else d(c)}})},module.exports.stopImmediately=()=>{c.stop(!0)}}(require('lazyload'),require);