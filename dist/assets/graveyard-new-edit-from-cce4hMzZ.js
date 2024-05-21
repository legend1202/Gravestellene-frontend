import{z as V,r as o,k as $,c as O,d as c,dS as J,e as Q,o as _,p as K,j as s,F as W,Q as f,A as X,v as R,J as S,S as j,f as g,T as q,B as Y,i as Z}from"./index-HNXcBFmK.js";import{a as u,c as P,b as ee}from"./graveyard-phk-a7ft.js";import{R as se}from"./rhf-upload-gig_X0_x.js";import{R as ae}from"./rhf-editor-NyTipjcO.js";function pe({currentProduct:e}){const{enqueueSnackbar:y}=V(),[w,v]=o.useState(""),C=$(),[l,h]=o.useState([]),F=O().shape({name:c().required("Name is required"),location:c().required("Location is required"),picture:J().min(1,"Images is required"),content:c().required("Content is required"),newsLink:c().required("News is required"),forecastLink:c().required("Forecast is required")}),b=o.useMemo(()=>({name:(e==null?void 0:e.name)||"",location:(e==null?void 0:e.location)||"",picture:(e==null?void 0:e.picture)||[],content:(e==null?void 0:e.content)||"",newsLink:(e==null?void 0:e.newsLink)||"",forecastLink:(e==null?void 0:e.forecastLink)||""}),[e]),k=Q({resolver:_(F),defaultValues:b}),{reset:d,watch:L,setValue:p,handleSubmit:G,formState:{isSubmitting:U}}=k,n=L();o.useEffect(()=>{e&&(h(e.picture),d(b))},[e,b,d]);const E=G(async m=>{var x,t;try{if(e){const i={...e,...n,picture:l},a=await u(i);(x=a.searchResults)!=null&&x.success?(d(),y("Update success!")):v(a==null?void 0:a.message)}else{const i={...n,picture:l},a=await P(i);(t=a.searchResults)!=null&&t.success?(d(),y("Create success!")):v(a==null?void 0:a.message)}C.push(K.fellesraad.graveyard.list)}catch(i){v(i==null?void 0:i.message),console.error(i)}}),D=o.useCallback(async m=>{const x=n.picture||[],t=m.map(r=>Object.assign(r,{preview:URL.createObjectURL(r)})),i=await ee(m),a=[...l,i];e!=null&&e.picture?h([...e.picture,...a]):h([...a]),p("picture",[...x,...t],{shouldValidate:!0})},[p,n.picture,l,e==null?void 0:e.picture]),N=o.useCallback(m=>{var t,i;const x=n.picture&&((t=n.picture)==null?void 0:t.filter(a=>a!==m));(i=n.picture)==null||i.forEach((a,r)=>{if(a===m){const I=l==null?void 0:l.filter((ie,M)=>r!==M);h(I)}}),p("picture",x)},[p,n.picture,l]),A=o.useCallback(()=>{p("picture",[]),h([])},[p]),H=async()=>{console.log("")},T=s.jsx(f,{xs:12,md:12,children:s.jsxs(R,{children:[s.jsx(S,{title:"Details"}),s.jsxs(j,{spacing:3,sx:{p:3},children:[s.jsx(g,{name:"name",label:"Graveyard Name"}),s.jsx(g,{name:"location",label:"Graveyard location"}),s.jsxs(j,{spacing:1.5,children:[s.jsx(q,{variant:"subtitle2",children:"Content"}),s.jsx(ae,{simple:!0,name:"content"})]}),s.jsxs(j,{spacing:1.5,children:[s.jsx(q,{variant:"subtitle2",children:"Pictures"}),s.jsx(se,{multiple:!0,thumbnail:!0,name:"picture",maxSize:13145728,onDrop:D,onRemove:N,onRemoveAll:A,onUpload:H})]})]})]})}),z=s.jsx(f,{xs:12,md:12,children:s.jsxs(R,{children:[s.jsx(S,{title:"Properties"}),s.jsx(j,{spacing:3,sx:{p:3},children:s.jsxs(Y,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(1, 1fr)"},children:[s.jsx(g,{name:"newsLink",label:"News"}),s.jsx(g,{name:"forecastLink",label:"Forecast"})]})})]})}),B=s.jsx(f,{xs:12,md:12,sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:s.jsx(Z,{type:"submit",variant:"contained",size:"large",loading:U,children:e?"Save Changes":"Create Product"})});return s.jsx(W,{methods:k,onSubmit:E,children:s.jsxs(f,{container:!0,spacing:3,children:[!!w&&s.jsx(X,{severity:"error",sx:{mb:3},children:w}),T,z,B]})})}export{pe as G};