if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const u=s=>l(s,r),t={module:{uri:r},exports:o,require:u};e[r]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(n(...s),o)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Alert-CfRBBQ9N.js",revision:null},{url:"assets/Button-BNC95Mi2.js",revision:null},{url:"assets/ComponentWithSuspense-D3_WAyu6.js",revision:null},{url:"assets/createReactComponent-BrvL_yLq.js",revision:null},{url:"assets/EditTodo-CPYhw2gp.js",revision:null},{url:"assets/Group-QRCOHa8I.js",revision:null},{url:"assets/HomePage-IOa9pcRG.js",revision:null},{url:"assets/index-B2_631JD.js",revision:null},{url:"assets/index-XorVRCVN.css",revision:null},{url:"assets/Input-D0KGYep8.js",revision:null},{url:"assets/LoginPage-2vJNqEak.js",revision:null},{url:"assets/NewTodo-B_JTPNoD.js",revision:null},{url:"assets/NewTodo-BNsTc0or.css",revision:null},{url:"assets/NotFoundPage-Dfwc09_Z.js",revision:null},{url:"assets/Offline-A1_6sYak.js",revision:null},{url:"assets/RegisterPage-B0vHDRmc.js",revision:null},{url:"assets/SimpleMdeReact-BgsZz_N2.js",revision:null},{url:"assets/Title-CjablfVF.js",revision:null},{url:"assets/Todo-DM0IV0C9.js",revision:null},{url:"assets/use-form-CZuNC1hZ.js",revision:null},{url:"assets/useSelectTodo-ZGuzQSWX.js",revision:null},{url:"index.html",revision:"64e086772bef07b3077c28e505fb6b8f"},{url:"registerSW.js",revision:"379245bd78f94310031dca086c1b37c4"},{url:"manifest.webmanifest",revision:"7133e5c38828b0e3d657c1363fb23dff"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
