import{a8 as w,a9 as b,y,aa as d,r as v,ab as g,ac as G,cU as R,cV as k,j as s,ad as S,ae as M,aj as f,ak as C,am as F,bn as U,dC as L}from"./index-F58UWM6d.js";import{F as j,f as D}from"./FormControlLabel-yEUOmb-6.js";import{C as h}from"./Checkbox-LoW-zYTz.js";function H(o){return w("MuiFormGroup",o)}b("MuiFormGroup",["root","row","error"]);const N=["className","row"],_=o=>{const{classes:e,row:r,error:a}=o;return M({root:["root",r&&"row",a&&"error"]},H,e)},E=y("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.root,r.row&&e.row]}})(({ownerState:o})=>d({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),P=v.forwardRef(function(e,r){const a=g({props:e,name:"MuiFormGroup"}),{className:c,row:t=!1}=a,i=G(a,N),x=R(),p=k({props:a,muiFormControl:x,states:["error"]}),m=d({},a,{row:t,error:p.error}),l=_(m);return s.jsx(E,d({className:S(l.root,c),ownerState:m,ref:r},i))}),W=P;function z({name:o,helperText:e,...r}){const{control:a}=f();return s.jsx(C,{name:o,control:a,render:({field:c,fieldState:{error:t}})=>s.jsxs("div",{children:[s.jsx(j,{control:s.jsx(h,{...c,checked:c.value}),...r}),(!!t||e)&&s.jsx(F,{error:!!t,children:t?t==null?void 0:t.message:e})]})})}function A({row:o,name:e,label:r,options:a,spacing:c,helperText:t,sx:i,...x}){const{control:p}=f(),m=(l,n)=>l.includes(n)?l.filter(u=>u!==n):[...l,n];return s.jsx(C,{name:e,control:p,render:({field:l,fieldState:{error:n}})=>s.jsxs(U,{component:"fieldset",children:[r&&s.jsx(L,{component:"legend",sx:{typography:"body2"},children:r}),s.jsx(W,{sx:{...o&&{flexDirection:"row"},[`& .${D.root}`]:{"&:not(:last-of-type)":{mb:c||0},...o&&{mr:0,"&:not(:last-of-type)":{mr:c||2}}},...i},children:a.map(u=>s.jsx(j,{control:s.jsx(h,{checked:l.value.includes(u.value),onChange:()=>l.onChange(m(l.value,u.value))}),label:u.label,...x},u.value))}),(!!n||t)&&s.jsx(F,{error:!!n,sx:{mx:0},children:n?n==null?void 0:n.message:t})]})})}export{W as F,A as R,z as a};
