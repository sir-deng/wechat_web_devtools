'use strict';!function(require,directRequire){function a(a,c,d){return new Promise(async(f,g)=>{const i=p(c,d,a),k=o.srcPath,l=d&&d.pages.map((a)=>b.posix.join(d.root,a))||c.pages;let q=0;const r=[],s={};i.forEach((a)=>{s[a]=!0}),l.forEach((a)=>{s[`${a}.wxss`]&&(q++,r.push(`./${a}.wxss`),delete s[`${a}.wxss`])});let t=[];try{t=await h.getFileList(a,c,d)}catch(a){return g(a)}for(const a in t.forEach((a)=>{s[`${a}.wxss`]&&(q++,r.push(`./${a}.wxss`),delete s[`${a}.wxss`])}),s)r.push(`./${a}`);const u=['-db','-pc',q].concat(r),v=e.getWXSSParsePath(),w=m(v,u,{cwd:k}),x=[],y=[];w.on('close',(a)=>{if(0===a){const a=Buffer.concat(x).toString(),b=a.split('='),c={};for(let a=0,d=b.length;a<d&&b[a+1];a+=2)c[b[a]]=b[a+1];return f(c)}const b=Buffer.concat(y).toString(),c=new Error(j.config.COMPILE_WXSS_ERROR_CONSOLE);return c.code=n,c.msgForConsole=b,g(c)}),w.stdout.on('data',(a)=>{x.push(a)}),w.stderr.on('data',(a)=>{y.push(a)})})}const b=require('path'),c=require('child_process'),d=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),e=require('./d28a711224425b00101635efe1034c99.js'),f=require('./949d8235c744ced2a80121e4dba34c28.js'),g=require('./162bf2ee28b76d3b3d95b685cede4146.js'),h=require('./6b5520e429c60abf5d2f924c0fa05fd0.js'),i=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),j=require('./common/locales/index.js'),k=require('./2e9637e8a0816a626f7db9a0dee5efe8.js'),l=require('./1c8a8c710417d102ab574145dc51b4b0.js'),m=c.spawn,n=f.TRANS_WXSS_JS_ERR;let o;const p=(a,b,c)=>{const d=(c.packOptions||{}).ignore||[];let e=o.getAllWXSSFiles().filter((a)=>!l.isFileIgnored(a,d));if(a.subPackages){const c=e.filter((b)=>{let c=!0;return a.subPackages.forEach((a)=>{0==b.indexOf(a.root)&&(c=!1)}),c});e=b?c.concat(e.filter((a)=>0==a.indexOf(b.root))):c}return e};module.exports=async function(b,c={}){const{app:e,page:f}=c;await k.init(b);const h=await d(b);if(o=await g(b),c.app){const c=k.CACHE_KEYS.WXSS_MAIN;let d=k.get(c);return d&&void 0!=d.comm||(d=await a(b,h),k.set(c,d)),d&&d.comm||''}const j=`./${f}.wxss`,l=i.checkIsInSubPackage(h,f);if(!l){const a=k.CACHE_KEYS.WXSS_MAIN,b=k.get(a);return{page:b&&b[j]||''}}const m=k.CACHE_KEYS.WXSS_SUBPACKAGE;let n=k.get(m,l.root);return n||(n=await a(b,h,l),k.set(m,l.root,n)),{comm:n&&n.comm||'',page:n&&n[j]||''}}}(require('lazyload'),require);