import{k as f,m as g,o as b,R as h,B as y,q as C,I as k,_ as D,r as u}from"./index-B2_631JD.js";var N={root:"m-7485cace"};const $={},B=C((s,{size:o,fluid:e})=>({root:{"--container-size":e?void 0:k(o,"container-size")}})),R=f((s,o)=>{const e=g("Container",$,s),{classNames:t,className:a,style:l,styles:n,unstyled:c,vars:d,fluid:i,mod:m,...r}=e,v=b({name:"Container",classes:N,props:e,className:a,style:l,classNames:t,styles:n,unstyled:c,vars:d,varsResolver:B});return h.createElement(y,{ref:o,mod:[{fluid:i},m],...v("root"),...r})});R.classes=N;R.displayName="@mantine/core/Container";var x={root:"m-3eebeb36",label:"m-9e365f20"};const P={orientation:"horizontal"},S=C((s,{color:o,variant:e,size:t})=>({root:{"--divider-color":o?D(o,s):void 0,"--divider-border-style":e,"--divider-size":k(t,"divider-size")}})),E=f((s,o)=>{const e=g("Divider",P,s),{classNames:t,className:a,style:l,styles:n,unstyled:c,vars:d,color:i,orientation:m,label:r,labelPosition:v,mod:p,...z}=e,w=b({name:"Divider",classes:x,props:e,className:a,style:l,classNames:t,styles:n,unstyled:c,vars:d,varsResolver:S});return h.createElement(y,{ref:o,mod:[{orientation:m,"with-label":!!r},p],...w("root"),...z,role:"separator"},r&&h.createElement(y,{component:"span",mod:{position:v},...w("label")},r))});E.classes=x;E.displayName="@mantine/core/Divider";/**
 * @license @tabler/icons-react v3.0.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var A={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.0.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(s,o,e,t)=>{const a=u.forwardRef(({color:l="currentColor",size:n=24,stroke:c=2,className:d="",children:i,...m},r)=>u.createElement("svg",{ref:r,...A[s],width:n,height:n,stroke:l,strokeWidth:c,className:["tabler-icon",`tabler-icon-${o}`,d].join(" "),...m},[...t.map(([v,p])=>u.createElement(v,p)),...Array.isArray(i)?i:[i]]));return a.displayName=`${e}`,a};export{R as C,E as D,L as c};
