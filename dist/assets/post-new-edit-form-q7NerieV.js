import{j as e,ap as G,T as r,B as A,h as H,l as N,m as W,C as _,S as b,i as I,b7 as J,_ as Q,a as X,c as Y,b as j,bR as Z,bA as S,r as t,d as P,o as ee,p as se,N as o,F as ae,K as k,aj as T,e as f,bF as R}from"./index-N8SydwAL.js";import{R as ie}from"./rhf-upload-pScH7AMk.js";import{R as le}from"./rhf-editor-b1SuaWf3.js";import{R as E}from"./rhf-autocomplete-PhhBYMEL.js";import{M as te}from"./markdown-EdamtX2z.js";import{E as re}from"./empty-content-Ttp3qqTd.js";import{P as ne}from"./post-details-hero-3gO29xG_.js";import{D as oe}from"./DialogActions-B4SxnogZ.js";import{F as U}from"./FormControlLabel-kJYRDF2M.js";import{S as q}from"./Switch--DTMlivf.js";import{C as M}from"./Chip-YnHBPfwg.js";function de({title:s,coverUrl:p,content:l,description:v,open:d,isValid:g,onClose:m,onSubmit:u,isSubmitting:h}){const y=s||v||l||p,c=s||p;return e.jsxs(G,{fullScreen:!0,open:d,onClose:m,children:[e.jsxs(oe,{sx:{py:2,px:3},children:[e.jsx(r,{variant:"h6",sx:{flexGrow:1},children:"Preview"}),e.jsx(A,{variant:"outlined",color:"inherit",onClick:m,children:"Cancel"}),e.jsx(H,{type:"submit",variant:"contained",disabled:!g,loading:h,onClick:u,children:"Post"})]}),e.jsx(N,{}),y?e.jsxs(W,{children:[c&&e.jsx(ne,{title:s,coverUrl:p}),e.jsx(_,{sx:{mt:5,mb:10},children:e.jsxs(b,{sx:{maxWidth:720,mx:"auto"},children:[e.jsx(r,{variant:"h6",sx:{mb:5},children:v}),e.jsx(te,{children:l})]})})]}):e.jsx(re,{filled:!0,title:"Empty Content!"})]})}function ye({currentPost:s}){var F;const p=I(),l=J("up","md"),{enqueueSnackbar:v}=Q(),d=X(),g=Y().shape({title:j().required("Title is required"),description:j().required("Description is required"),content:j().required("Content is required"),coverUrl:Z().nullable().required("Cover is required"),tags:S().min(2,"Must have at least 2 tags"),metaKeywords:S().min(1,"Meta keywords is required"),metaTitle:j(),metaDescription:j()}),m=t.useMemo(()=>({title:(s==null?void 0:s.title)||"",description:(s==null?void 0:s.description)||"",content:(s==null?void 0:s.content)||"",coverUrl:(s==null?void 0:s.coverUrl)||null,tags:(s==null?void 0:s.tags)||[],metaKeywords:(s==null?void 0:s.metaKeywords)||[],metaTitle:(s==null?void 0:s.metaTitle)||"",metaDescription:(s==null?void 0:s.metaDescription)||""}),[s]),u=P({resolver:ee(g),defaultValues:m}),{reset:h,watch:y,setValue:c,handleSubmit:O,formState:{isSubmitting:w,isValid:K}}=u,x=y();t.useEffect(()=>{s&&h(m)},[s,m,h]);const D=O(async a=>{try{await new Promise(i=>setTimeout(i,500)),h(),d.onFalse(),v(s?"Update success!":"Create success!"),p.push(se.dashboard.post.root),console.info("DATA",a)}catch(i){console.error(i)}}),L=t.useCallback(a=>{const i=a[0],n=Object.assign(i,{preview:URL.createObjectURL(i)});i&&c("coverUrl",n,{shouldValidate:!0})},[c]),z=t.useCallback(()=>{c("coverUrl",null)},[c]),B=e.jsxs(e.Fragment,{children:[l&&e.jsxs(o,{md:4,children:[e.jsx(r,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(o,{xs:12,md:8,children:e.jsxs(k,{children:[!l&&e.jsx(T,{title:"Details"}),e.jsxs(b,{spacing:3,sx:{p:3},children:[e.jsx(f,{name:"title",label:"Post Title"}),e.jsx(f,{name:"description",label:"Description",multiline:!0,rows:3}),e.jsxs(b,{spacing:1.5,children:[e.jsx(r,{variant:"subtitle2",children:"Content"}),e.jsx(le,{simple:!0,name:"content"})]}),e.jsxs(b,{spacing:1.5,children:[e.jsx(r,{variant:"subtitle2",children:"Cover"}),e.jsx(ie,{name:"coverUrl",maxSize:3145728,onDrop:L,onDelete:z})]})]})]})})]}),$=e.jsxs(e.Fragment,{children:[l&&e.jsxs(o,{md:4,children:[e.jsx(r,{variant:"h6",sx:{mb:.5},children:"Properties"}),e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(o,{xs:12,md:8,children:e.jsxs(k,{children:[!l&&e.jsx(T,{title:"Properties"}),e.jsxs(b,{spacing:3,sx:{p:3},children:[e.jsx(E,{name:"tags",label:"Tags",placeholder:"+ Tags",multiple:!0,freeSolo:!0,options:R.map(a=>a),getOptionLabel:a=>a,renderOption:(a,i)=>t.createElement("li",{...a,key:i},i),renderTags:(a,i)=>a.map((n,C)=>t.createElement(M,{...i({index:C}),key:n,label:n,size:"small",color:"info",variant:"soft"}))}),e.jsx(f,{name:"metaTitle",label:"Meta title"}),e.jsx(f,{name:"metaDescription",label:"Meta description",fullWidth:!0,multiline:!0,rows:3}),e.jsx(E,{name:"metaKeywords",label:"Meta keywords",placeholder:"+ Keywords",multiple:!0,freeSolo:!0,disableCloseOnSelect:!0,options:R.map(a=>a),getOptionLabel:a=>a,renderOption:(a,i)=>t.createElement("li",{...a,key:i},i),renderTags:(a,i)=>a.map((n,C)=>t.createElement(M,{...i({index:C}),key:n,label:n,size:"small",color:"info",variant:"soft"}))}),e.jsx(U,{control:e.jsx(q,{defaultChecked:!0}),label:"Enable comments"})]})]})})]}),V=e.jsxs(e.Fragment,{children:[l&&e.jsx(o,{md:4}),e.jsxs(o,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:[e.jsx(U,{control:e.jsx(q,{defaultChecked:!0}),label:"Publish",sx:{flexGrow:1,pl:3}}),e.jsx(A,{color:"inherit",variant:"outlined",size:"large",onClick:d.onTrue,children:"Preview"}),e.jsx(H,{type:"submit",variant:"contained",size:"large",loading:w,sx:{ml:2},children:s?"Save Changes":"Create Post"})]})]});return e.jsxs(ae,{methods:u,onSubmit:D,children:[e.jsxs(o,{container:!0,spacing:3,children:[B,$,V]}),e.jsx(de,{title:x.title,content:x.content,description:x.description,coverUrl:typeof x.coverUrl=="string"?x.coverUrl:`${(F=x.coverUrl)==null?void 0:F.preview}`,open:d.value,isValid:K,isSubmitting:w,onClose:d.onFalse,onSubmit:D})]})}export{ye as P};
