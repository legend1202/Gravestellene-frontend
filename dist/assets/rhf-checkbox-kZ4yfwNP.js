import{aI as w,aJ as y,$ as b,ax as d,r as v,ay as g,az as G,ch as R,ci as S,j as s,aB as k,aC as M,a0 as f,a1 as C,a3 as F,c1 as L,dt as U}from"./index-JGGUJxTa.js";import{F as h,f as D}from"./FormControlLabel-ky2qaCet.js";import{C as j}from"./Checkbox-knf4fuN6.js";function H(o){return w("MuiFormGroup",o)}y("MuiFormGroup",["root","row","error"]);const N=["className","row"],_=o=>{const{classes:t,row:r,error:a}=o;return M({root:["root",r&&"row",a&&"error"]},H,t)},$=b("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.root,r.row&&t.row]}})(({ownerState:o})=>d({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),E=v.forwardRef(function(t,r){const a=g({props:t,name:"MuiFormGroup"}),{className:c,row:e=!1}=a,i=G(a,N),x=R(),p=S({props:a,muiFormControl:x,states:["error"]}),m=d({},a,{row:e,error:p.error}),l=_(m);return s.jsx($,d({className:k(l.root,c),ownerState:m,ref:r},i))}),P=E;function J({name:o,helperText:t,...r}){const{control:a}=f();return s.jsx(C,{name:o,control:a,render:({field:c,fieldState:{error:e}})=>s.jsxs("div",{children:[s.jsx(h,{control:s.jsx(j,{...c,checked:c.value}),...r}),(!!e||t)&&s.jsx(F,{error:!!e,children:e?e==null?void 0:e.message:t})]})})}function q({row:o,name:t,label:r,options:a,spacing:c,helperText:e,sx:i,...x}){const{control:p}=f(),m=(l,n)=>l.includes(n)?l.filter(u=>u!==n):[...l,n];return s.jsx(C,{name:t,control:p,render:({field:l,fieldState:{error:n}})=>s.jsxs(L,{component:"fieldset",children:[r&&s.jsx(U,{component:"legend",sx:{typography:"body2"},children:r}),s.jsx(P,{sx:{...o&&{flexDirection:"row"},[`& .${D.root}`]:{"&:not(:last-of-type)":{mb:c||0},...o&&{mr:0,"&:not(:last-of-type)":{mr:c||2}}},...i},children:a.map(u=>s.jsx(h,{control:s.jsx(j,{checked:l.value.includes(u.value),onChange:()=>l.onChange(m(l.value,u.value))}),label:u.label,...x},u.value))}),(!!n||e)&&s.jsx(F,{error:!!n,sx:{mx:0},children:n?n==null?void 0:n.message:e})]})})}export{P as F,J as R,q as a};
