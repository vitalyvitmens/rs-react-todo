import{r as n,j as e,B as x,c as i,b as T,T as p,R as w,u as I,S as y,C as v,O as z}from"./index-BpJOGEHr.js";import{C as h}from"./ComponentWithSuspense-DHQgPhmz.js";import{I as E}from"./Input-DnI-8qRs.js";import{c as k,D as f,C as m}from"./createReactComponent-CXzZnbGx.js";import{u as R}from"./useSelectTodo-C368tlCs.js";import{G as L}from"./Group-CXmGsz9q.js";import{B as V}from"./Button-BbwW_iVZ.js";/**
 * @license @tabler/icons-react v3.0.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var B=k("outline","search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]);const D=({setSearchInput:t})=>{const[o,s]=n.useState(""),a=c=>{const u=c.target.value;s(u),t(u)};return e.jsxs(x,{m:"0 8px 10px 0",children:[e.jsx(E,{radius:15,id:"search",name:"search",placeholder:"Search todo",rightSection:e.jsx(B,{size:24}),value:o,onChange:a}),e.jsx(f,{size:2,w:"100%",mt:10,color:i.primary})]})},O=(t,o=500)=>{const[s,a]=n.useState(t);return n.useEffect(()=>{const c=setTimeout(()=>{a(t)},o);return()=>{clearTimeout(c)}},[t,o]),s},A=()=>{const{selectTodo:t,getTodos:o,todos:s,isTodoAdded:a}=R(),[c,u]=n.useState(s),[j,d]=n.useState(s),[S,g]=n.useState(""),b=T(),C=r=>{t(r),b(w.Home)},l=O(S,500);return n.useEffect(()=>{u(s),d(s)},[o]),n.useEffect(()=>{o()},[a]),n.useEffect(()=>{l.length?d(c.filter(r=>r.description.toLocaleLowerCase().indexOf(l)!==-1)):d(c)},[l]),e.jsxs(x,{w:"38%",style:{borderRight:`2px solid ${i.primary}`},children:[e.jsx(D,{setSearchInput:g}),j.map(r=>e.jsxs(L,{role:"listitem",w:"100%",onClick:()=>C(r.id),style:{cursor:"pointer"},children:[e.jsx(p,{size:"md",fw:700,pl:10,truncate:"end",children:r.title}),e.jsx(p,{size:"xs",w:600,c:i.success,children:r.date.slice(4,24)}),e.jsx(p,{size:"sm",truncate:"end",children:r.description}),e.jsx(f,{w:"97%",pb:5,color:i.black})]},r.id))]})},N=()=>{const{logOut:t,isLoading:o,isError:s}=I(),a=()=>t(()=>{});return o||s?e.jsx(y,{}):e.jsxs(m,{children:[e.jsx(V,{m:8,size:"sm",radius:15,variant:"outline",onClick:a,children:"Logout"}),e.jsx(v,{children:e.jsxs(m,{p:8,w:"100%",bg:"bisque",style:{display:"flex",border:`2px solid ${i.primary}`,borderRadius:"10px",boxShadow:"-5px -4px 10px black"},children:[e.jsx(h,{component:A}),e.jsx(h,{component:z})]})})]})};export{N as HomePage};