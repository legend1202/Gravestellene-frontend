import{j as e,x as V,T as r,i as M,D as N,s as W,C as I,S as f,e as _,aF as J,m as Q,b as X,r as t,p as Y,G as n,dH as S}from"./index-xccKnqtj.js";import{c as Z,a as j,f as P,e as k}from"./index.esm-YEE7kA5n.js";import{u as ee,F as se}from"./form-provider-AIk6qsYQ.js";import{o as ie}from"./yup-kNUoSS0a.js";import{R as ae}from"./rhf-upload-Z5fOaHy6.js";import"./mui-one-time-password-input.es-8WdpYP-F.js";import{R as le}from"./rhf-editor-qCb2TUsu.js";import{R as v}from"./rhf-text-field-M35LS_3G.js";import{R as T}from"./rhf-autocomplete-3-iJKZ_B.js";import{M as te}from"./markdown-DnsWDlv5.js";import{E as re}from"./empty-content-FevP8_c1.js";import{P as oe}from"./post-details-hero-oRm9B9Tl.js";import{D as ne}from"./DialogActions-DIqTiIED.js";import{L}from"./LoadingButton-rYn3LTh9.js";import{F as R}from"./FormControlLabel-rYqjbgl6.js";import{S as E}from"./Switch-8NlbQv1L.js";import{C as U}from"./Card-tMu97UR4.js";import{C as q}from"./CardHeader-EZ_NOwqQ.js";import{C as H}from"./Chip-_G7JEqc_.js";function de({title:s,coverUrl:x,content:l,description:b,open:d,isValid:g,onClose:m,onSubmit:u,isSubmitting:h}){const C=s||b||l||x,c=s||x;return e.jsxs(V,{fullScreen:!0,open:d,onClose:m,children:[e.jsxs(ne,{sx:{py:2,px:3},children:[e.jsx(r,{variant:"h6",sx:{flexGrow:1},children:"Preview"}),e.jsx(M,{variant:"outlined",color:"inherit",onClick:m,children:"Cancel"}),e.jsx(L,{type:"submit",variant:"contained",disabled:!g,loading:h,onClick:u,children:"Post"})]}),e.jsx(N,{}),C?e.jsxs(W,{children:[c&&e.jsx(oe,{title:s,coverUrl:x}),e.jsx(I,{sx:{mt:5,mb:10},children:e.jsxs(f,{sx:{maxWidth:720,mx:"auto"},children:[e.jsx(r,{variant:"h6",sx:{mb:5},children:b}),e.jsx(te,{children:l})]})})]}):e.jsx(re,{filled:!0,title:"Empty Content!"})]})}function Re({currentPost:s}){var F;const x=_(),l=J("up","md"),{enqueueSnackbar:b}=Q(),d=X(),g=Z().shape({title:j().required("Title is required"),description:j().required("Description is required"),content:j().required("Content is required"),coverUrl:P().nullable().required("Cover is required"),tags:k().min(2,"Must have at least 2 tags"),metaKeywords:k().min(1,"Meta keywords is required"),metaTitle:j(),metaDescription:j()}),m=t.useMemo(()=>({title:(s==null?void 0:s.title)||"",description:(s==null?void 0:s.description)||"",content:(s==null?void 0:s.content)||"",coverUrl:(s==null?void 0:s.coverUrl)||null,tags:(s==null?void 0:s.tags)||[],metaKeywords:(s==null?void 0:s.metaKeywords)||[],metaTitle:(s==null?void 0:s.metaTitle)||"",metaDescription:(s==null?void 0:s.metaDescription)||""}),[s]),u=ee({resolver:ie(g),defaultValues:m}),{reset:h,watch:C,setValue:c,handleSubmit:O,formState:{isSubmitting:w,isValid:A}}=u,p=C();t.useEffect(()=>{s&&h(m)},[s,m,h]);const D=O(async i=>{try{await new Promise(a=>setTimeout(a,500)),h(),d.onFalse(),b(s?"Update success!":"Create success!"),x.push(Y.dashboard.post.root),console.info("DATA",i)}catch(a){console.error(a)}}),z=t.useCallback(i=>{const a=i[0],o=Object.assign(a,{preview:URL.createObjectURL(a)});a&&c("coverUrl",o,{shouldValidate:!0})},[c]),K=t.useCallback(()=>{c("coverUrl",null)},[c]),$=e.jsxs(e.Fragment,{children:[l&&e.jsxs(n,{md:4,children:[e.jsx(r,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(n,{xs:12,md:8,children:e.jsxs(U,{children:[!l&&e.jsx(q,{title:"Details"}),e.jsxs(f,{spacing:3,sx:{p:3},children:[e.jsx(v,{name:"title",label:"Post Title"}),e.jsx(v,{name:"description",label:"Description",multiline:!0,rows:3}),e.jsxs(f,{spacing:1.5,children:[e.jsx(r,{variant:"subtitle2",children:"Content"}),e.jsx(le,{simple:!0,name:"content"})]}),e.jsxs(f,{spacing:1.5,children:[e.jsx(r,{variant:"subtitle2",children:"Cover"}),e.jsx(ae,{name:"coverUrl",maxSize:3145728,onDrop:z,onDelete:K})]})]})]})})]}),B=e.jsxs(e.Fragment,{children:[l&&e.jsxs(n,{md:4,children:[e.jsx(r,{variant:"h6",sx:{mb:.5},children:"Properties"}),e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(n,{xs:12,md:8,children:e.jsxs(U,{children:[!l&&e.jsx(q,{title:"Properties"}),e.jsxs(f,{spacing:3,sx:{p:3},children:[e.jsx(T,{name:"tags",label:"Tags",placeholder:"+ Tags",multiple:!0,freeSolo:!0,options:S.map(i=>i),getOptionLabel:i=>i,renderOption:(i,a)=>t.createElement("li",{...i,key:a},a),renderTags:(i,a)=>i.map((o,y)=>t.createElement(H,{...a({index:y}),key:o,label:o,size:"small",color:"info",variant:"soft"}))}),e.jsx(v,{name:"metaTitle",label:"Meta title"}),e.jsx(v,{name:"metaDescription",label:"Meta description",fullWidth:!0,multiline:!0,rows:3}),e.jsx(T,{name:"metaKeywords",label:"Meta keywords",placeholder:"+ Keywords",multiple:!0,freeSolo:!0,disableCloseOnSelect:!0,options:S.map(i=>i),getOptionLabel:i=>i,renderOption:(i,a)=>t.createElement("li",{...i,key:a},a),renderTags:(i,a)=>i.map((o,y)=>t.createElement(H,{...a({index:y}),key:o,label:o,size:"small",color:"info",variant:"soft"}))}),e.jsx(R,{control:e.jsx(E,{defaultChecked:!0}),label:"Enable comments"})]})]})})]}),G=e.jsxs(e.Fragment,{children:[l&&e.jsx(n,{md:4}),e.jsxs(n,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:[e.jsx(R,{control:e.jsx(E,{defaultChecked:!0}),label:"Publish",sx:{flexGrow:1,pl:3}}),e.jsx(M,{color:"inherit",variant:"outlined",size:"large",onClick:d.onTrue,children:"Preview"}),e.jsx(L,{type:"submit",variant:"contained",size:"large",loading:w,sx:{ml:2},children:s?"Save Changes":"Create Post"})]})]});return e.jsxs(se,{methods:u,onSubmit:D,children:[e.jsxs(n,{container:!0,spacing:3,children:[$,B,G]}),e.jsx(de,{title:p.title,content:p.content,description:p.description,coverUrl:typeof p.coverUrl=="string"?p.coverUrl:`${(F=p.coverUrl)==null?void 0:F.preview}`,open:d.value,isValid:A,isSubmitting:w,onClose:d.onFalse,onSubmit:D})]})}export{Re as P};
