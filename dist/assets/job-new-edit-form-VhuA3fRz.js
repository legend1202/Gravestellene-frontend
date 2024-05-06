import{e as N,az as q,du as b,r as n,dZ as f,p as A,j as e,G as o,T as l,S as t,e7 as $,e6 as M,e9 as G,ea as z,cJ as W,B as u,d as S,n as U,ar as K,I as Y,e5 as V}from"./index-0ZRfM3mG.js";import{c as C,a as p,b as m,f as X,e as Z,d as Q}from"./index.esm-G9SoUoJo.js";import{R as E,o as J}from"./rhf-text-field-1O6oRn4Q.js";import{u as ee,C as O,F as se}from"./form-provider-7AhGD8Yg.js";import"./image-PdFD2BG8.js";import{a as T}from"./rhf-checkbox-0aGZ_Nv3.js";import"./mui-one-time-password-input.es-QlRnB43f.js";import{R as ie}from"./rhf-switch-gTFUs5jV.js";import{R as ae}from"./rhf-editor-Fc8AoE4Q.js";import{R as le}from"./rhf-radio-group-LkQPl7PZ.js";import{R as x}from"./rhf-autocomplete-n_B7mSvn.js";import{C as k}from"./Card-pac-bk-l.js";import{C as v}from"./CardHeader-YaGP2TRH.js";import{C as R}from"./Chip-Z-_k_k73.js";import{D as te}from"./DatePicker-jyLseyPd.js";import{F as ne}from"./FormControlLabel-N_o6rvk2.js";import{S as oe}from"./Switch-vKV57KqU.js";import{L as re}from"./LoadingButton-rLhjB2ni.js";function Re({currentJob:s}){const P=N(),r=q("up","md"),{enqueueSnackbar:F}=b(),w=C().shape({title:p().required("Title is required"),content:p().required("Content is required"),employmentTypes:m().min(1,"Choose at least one option"),role:p().required("Role is required"),skills:m().min(1,"Choose at least one option"),workingSchedule:m().min(1,"Choose at least one option"),benefits:m().min(1,"Choose at least one option"),locations:m().min(1,"Choose at least one option"),expiredDate:X().nullable().required("Expired date is required"),salary:C().shape({type:p(),price:Z().min(1,"Price is required"),negotiable:Q()}),experience:p()}),c=n.useMemo(()=>({title:(s==null?void 0:s.title)||"",content:(s==null?void 0:s.content)||"",employmentTypes:(s==null?void 0:s.employmentTypes)||[],experience:(s==null?void 0:s.experience)||"1 year exp",role:(s==null?void 0:s.role)||f[1],skills:(s==null?void 0:s.skills)||[],workingSchedule:(s==null?void 0:s.workingSchedule)||[],locations:(s==null?void 0:s.locations)||[],benefits:(s==null?void 0:s.benefits)||[],expiredDate:(s==null?void 0:s.expiredDate)||null,salary:(s==null?void 0:s.salary)||{type:"Hourly",price:0,negotiable:!1}}),[s]),y=ee({resolver:J(w),defaultValues:c}),{reset:h,control:g,handleSubmit:I,formState:{isSubmitting:L}}=y;n.useEffect(()=>{s&&h(c)},[s,c,h]);const _=I(async i=>{try{await new Promise(a=>setTimeout(a,500)),h(),F(s?"Update success!":"Create success!"),P.push(A.dashboard.job.root),console.info("DATA",i)}catch(a){console.error(a)}}),B=e.jsxs(e.Fragment,{children:[r&&e.jsxs(o,{md:4,children:[e.jsx(l,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(l,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(o,{xs:12,md:8,children:e.jsxs(k,{children:[!r&&e.jsx(v,{title:"Details"}),e.jsxs(t,{spacing:3,sx:{p:3},children:[e.jsxs(t,{spacing:1.5,children:[e.jsx(l,{variant:"subtitle2",children:"Title"}),e.jsx(E,{name:"title",placeholder:"Ex: Software Engineer..."})]}),e.jsxs(t,{spacing:1.5,children:[e.jsx(l,{variant:"subtitle2",children:"Content"}),e.jsx(ae,{simple:!0,name:"content"})]})]})]})})]}),D=e.jsxs(e.Fragment,{children:[r&&e.jsxs(o,{md:4,children:[e.jsx(l,{variant:"h6",sx:{mb:.5},children:"Properties"}),e.jsx(l,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(o,{xs:12,md:8,children:e.jsxs(k,{children:[!r&&e.jsx(v,{title:"Properties"}),e.jsxs(t,{spacing:3,sx:{p:3},children:[e.jsxs(t,{spacing:1,children:[e.jsx(l,{variant:"subtitle2",children:"Employment type"}),e.jsx(T,{row:!0,spacing:4,name:"employmentTypes",options:$})]}),e.jsxs(t,{spacing:1,children:[e.jsx(l,{variant:"subtitle2",children:"Experience"}),e.jsx(le,{row:!0,spacing:4,name:"experience",options:M})]}),e.jsxs(t,{spacing:1.5,children:[e.jsx(l,{variant:"subtitle2",children:"Role"}),e.jsx(x,{name:"role",autoHighlight:!0,options:f.map(i=>i),getOptionLabel:i=>i,renderOption:(i,a)=>n.createElement("li",{...i,key:a},a)})]}),e.jsxs(t,{spacing:1.5,children:[e.jsx(l,{variant:"subtitle2",children:"Skills"}),e.jsx(x,{name:"skills",placeholder:"+ Skills",multiple:!0,disableCloseOnSelect:!0,options:G.map(i=>i),getOptionLabel:i=>i,renderOption:(i,a)=>n.createElement("li",{...i,key:a},a),renderTags:(i,a)=>i.map((d,j)=>n.createElement(R,{...a({index:j}),key:d,label:d,size:"small",color:"info",variant:"soft"}))})]}),e.jsxs(t,{spacing:1.5,children:[e.jsx(l,{variant:"subtitle2",children:"Working schedule"}),e.jsx(x,{name:"workingSchedule",placeholder:"+ Schedule",multiple:!0,disableCloseOnSelect:!0,options:z.map(i=>i),getOptionLabel:i=>i,renderOption:(i,a)=>n.createElement("li",{...i,key:a},a),renderTags:(i,a)=>i.map((d,j)=>n.createElement(R,{...a({index:j}),key:d,label:d,size:"small",color:"info",variant:"soft"}))})]}),e.jsxs(t,{spacing:1.5,children:[e.jsx(l,{variant:"subtitle2",children:"Locations"}),e.jsx(x,{name:"locations",type:"country",placeholder:"+ Locations",multiple:!0,options:W.map(i=>i.label),getOptionLabel:i=>i})]}),e.jsxs(t,{spacing:1.5,children:[e.jsx(l,{variant:"subtitle2",children:"Expired"}),e.jsx(O,{name:"expiredDate",control:g,render:({field:i,fieldState:{error:a}})=>e.jsx(te,{...i,format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0,error:!!a,helperText:a==null?void 0:a.message}}})})]}),e.jsxs(t,{spacing:2,children:[e.jsx(l,{variant:"subtitle2",children:"Salary"}),e.jsx(O,{name:"salary.type",control:g,render:({field:i})=>e.jsx(u,{gap:2,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",children:[{label:"Hourly",icon:e.jsx(S,{icon:"solar:clock-circle-bold",width:32,sx:{mb:2}})},{label:"Custom",icon:e.jsx(S,{icon:"solar:wad-of-money-bold",width:32,sx:{mb:2}})}].map(a=>e.jsxs(U,{component:K,variant:"outlined",onClick:()=>i.onChange(a.label),sx:{p:2.5,borderRadius:1,typography:"subtitle2",flexDirection:"column",...a.label===i.value&&{borderWidth:2,borderColor:"text.primary"}},children:[a.icon,a.label]},a.label))})}),e.jsx(E,{name:"salary.price",placeholder:"0.00",type:"number",InputProps:{startAdornment:e.jsx(Y,{position:"start",children:e.jsx(u,{sx:{typography:"subtitle2",color:"text.disabled"},children:"$"})})}}),e.jsx(ie,{name:"salary.negotiable",label:"Salary is negotiable"})]}),e.jsxs(t,{spacing:1,children:[e.jsx(l,{variant:"subtitle2",children:"Benefits"}),e.jsx(T,{name:"benefits",options:V,sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}})]})]})]})})]}),H=e.jsxs(e.Fragment,{children:[r&&e.jsx(o,{md:4}),e.jsxs(o,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:[e.jsx(ne,{control:e.jsx(oe,{defaultChecked:!0}),label:"Publish",sx:{flexGrow:1,pl:3}}),e.jsx(re,{type:"submit",variant:"contained",size:"large",loading:L,sx:{ml:2},children:s?"Save Changes":"Create Job"})]})]});return e.jsx(se,{methods:y,onSubmit:_,children:e.jsxs(o,{container:!0,spacing:3,children:[B,D,H]})})}export{Re as J};