import{u,b as d,r as p,l as c,j as s,S as x,B as g,c as a}from"./index-B2_631JD.js";import{u as f,T as w,P as b,N as h,v as j,a as v}from"./use-form-CZuNC1hZ.js";import{T as P}from"./Title-CjablfVF.js";import{G as I}from"./Group-QRCOHa8I.js";import{B as L}from"./Button-BNC95Mi2.js";import"./Input-D0KGYep8.js";const N=()=>{const{user:r,logIn:i,isLoading:n,isError:l}=u(),e=d(),o=f({initialValues:{username:"",password:""},validate:{username:j,password:v}});p.useEffect(()=>{(r==null?void 0:r.username)!==void 0&&e("/",{replace:!0})},[r,e]);const m=o.onSubmit(t=>c(t,()=>{i(t,()=>e("/",{replace:!0}))}));return n||l?s.jsx(x,{}):s.jsxs(g,{maw:340,mx:"auto",mt:100,children:[s.jsx(P,{ta:"center",c:a.blue,children:"Authorization"}),s.jsxs("form",{onSubmit:m,children:[s.jsx(w,{id:"login-username",radius:5,c:a.primary,label:"Username",placeholder:"Username",...o.getInputProps("username")}),s.jsx(b,{id:"login-password",radius:5,c:a.primary,label:"Password",placeholder:"Password",...o.getInputProps("password")}),s.jsxs(I,{wrap:"nowrap",mt:"md",children:[s.jsx(h,{href:"/register",label:"Ещё не зарегистрированы?",variant:"subtle",active:!0,c:a.red,fw:"bold"}),s.jsx(L,{type:"submit",w:"120px",bg:"#006400",radius:5,children:"Login"})]})]})]})};export{N as LoginPage};
