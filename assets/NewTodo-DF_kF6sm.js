import{u as f,r as t,b as j,j as e,S as g,B as S,C as a,T as C,c as T,E as v,n as b,e as w,d as E,R as k}from"./index-BkKHYiuB.js";import{C as B}from"./ComponentWithSuspense-BoQFT_gb.js";import{S as R}from"./SimpleMdeReact-DscAT6RU.js";import{u as W}from"./useSelectTodo-B0nG_Ob_.js";import{I as n}from"./Input-CEWmTexs.js";import{B as z}from"./Button-DBo-rdW8.js";const N=()=>{const{isLoading:i,isError:l}=f(),[o,c]=t.useState(""),[r,d]=t.useState(""),{onTodoAdd:u}=W(),m=j(),p=t.useCallback(s=>{d(s)},[]),x=t.useCallback(s=>{c(s.target.value)},[]),h=()=>{if(o)E({title:o,description:r,date:new Date().toString()}),u(),m(k.Home);else{v({title:b.error,message:w.noDataForTodo});return}};return i||l?e.jsx(g,{}):e.jsxs(S,{p:10,children:[e.jsx(a,{children:e.jsx(C,{size:"md",fw:700,children:"Новая заметка"})}),e.jsx(n.Wrapper,{label:"Заголовок",children:e.jsx(n,{required:!0,id:"new-todo-title",name:"todoTitle",placeholder:"Новая заметка",value:o,onChange:x})}),e.jsx(R,{style:{fontSize:"0.8rem"},id:"new-todo-textarea",value:r,onChange:p}),e.jsx(a,{children:e.jsx(z,{onClick:h,fullWidth:!0,color:T.green,radius:5,children:"Save"})})]})},q=()=>e.jsx(e.Fragment,{children:e.jsx(B,{component:N})});export{q as NewTodo};