import{u as h,r as t,b as j,j as e,S as g,B as S,C as a,T as C,c as T,E as v,n as b,e as w,d as E}from"./index-B2_631JD.js";import{C as k}from"./ComponentWithSuspense-D3_WAyu6.js";import{S as B}from"./SimpleMdeReact-BgsZz_N2.js";import{u as W}from"./useSelectTodo-ZGuzQSWX.js";import{I as n}from"./Input-D0KGYep8.js";import{B as z}from"./Button-BNC95Mi2.js";const N=()=>{const{isLoading:i,isError:l}=h(),[o,c]=t.useState(""),[r,d]=t.useState(""),{onTodoAdd:u}=W(),m=j(),p=t.useCallback(s=>{d(s)},[]),x=t.useCallback(s=>{c(s.target.value)},[]),f=()=>{if(o)E({title:o,description:r,date:new Date().toString()}),u(),m("/");else{v({title:b.error,message:w.noDataForTodo});return}};return i||l?e.jsx(g,{}):e.jsxs(S,{p:10,children:[e.jsx(a,{children:e.jsx(C,{size:"md",fw:700,children:"Новая заметка"})}),e.jsx(n.Wrapper,{label:"Заголовок",children:e.jsx(n,{required:!0,id:"new-todo-title",name:"todoTitle",placeholder:"Новая заметка",value:o,onChange:x})}),e.jsx(B,{style:{fontSize:"0.8rem"},id:"new-todo-textarea",value:r,onChange:p}),e.jsx(a,{children:e.jsx(z,{onClick:f,fullWidth:!0,color:T.green,radius:5,children:"Save"})})]})},R=()=>e.jsx(e.Fragment,{children:e.jsx(k,{component:N})});export{R as NewTodo};
