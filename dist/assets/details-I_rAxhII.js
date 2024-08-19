import{a as S,j as e,Z as I,S as m,T as u,b5 as T,v,q as y,B as w,g as a,c as B,b as g,d as D,o as $,F as A,e as E,f as p,h as F,ay as U,R as b,n as C,aA as q,a6 as G,r as P,p as f,bj as O,l as W,C as H,O as z,H as M}from"./index-N8SydwAL.js";import"./_baseToString-Z76_zUlo.js";import"./text-max-line-hECicoKB.js";import"./styles-VhGsR3AZ.js";import{c as N}from"./format-number-wF8MOw5S.js";import{b as R}from"./blog-cwz-mMkO.js";import{b as V,c as _}from"./post-skeleton-9jxPDfLJ.js";import{M as Z}from"./markdown-EdamtX2z.js";import{E as J}from"./empty-content-Ttp3qqTd.js";import{P as K}from"./post-details-hero-3gO29xG_.js";import{L as Q}from"./ListItem-EnR47mhZ.js";import{P as X}from"./Pagination-HaT0S1Qb.js";import{C as Y}from"./Chip-YnHBPfwg.js";import{F as ee}from"./FormControlLabel-kJYRDF2M.js";import{C as se}from"./Checkbox-aend9-0B.js";import{A as te}from"./AvatarGroup-w2IUQaKN.js";import"./Skeleton-505Etpy4.js";import"./Fab-_JNviI15.js";import"./FirstPage-S57-CWai.js";import"./SwitchBase-GkPf3Zwx.js";function k({name:r,avatarUrl:n,message:l,tagUser:s,postedAt:x,hasReply:o}){const c=S();return e.jsxs(Q,{sx:{p:0,pt:3,alignItems:"flex-start",...o&&{pl:8}},children:[e.jsx(I,{alt:r,src:n,sx:{mr:2,width:48,height:48}}),e.jsxs(m,{flexGrow:1,sx:{pb:3,borderBottom:h=>`solid 1px ${h.palette.divider}`},children:[e.jsx(u,{variant:"subtitle2",sx:{mb:.5},children:r}),e.jsx(u,{variant:"caption",sx:{color:"text.disabled"},children:T(x)}),e.jsxs(u,{variant:"body2",sx:{mt:1},children:[s&&e.jsxs(v,{component:"strong",sx:{mr:.5},children:["@",s]}),l]}),c.value&&e.jsx(v,{sx:{mt:2},children:e.jsx(y,{fullWidth:!0,autoFocus:!0,placeholder:"Write comment..."})})]}),!o&&e.jsx(w,{size:"small",color:c.value?"primary":"inherit",startIcon:e.jsx(a,{icon:"solar:pen-bold",width:16}),onClick:c.onToggle,sx:{right:0,position:"absolute"},children:"Reply"})]})}function re({comments:r}){return e.jsxs(e.Fragment,{children:[e.jsx(e.Fragment,{children:r.map(n=>{const{id:l,replyComment:s,name:x,users:o,message:c,avatarUrl:h,postedAt:i}=n,d=!!s.length;return e.jsxs(v,{children:[e.jsx(k,{name:x,message:c,postedAt:i,avatarUrl:h}),d&&s.map(t=>{const j=o.find(L=>L.id===t.userId);return e.jsx(k,{name:(j==null?void 0:j.name)||"",message:t.message,postedAt:t.postedAt,avatarUrl:(j==null?void 0:j.avatarUrl)||"",tagUser:t.tagUser,hasReply:!0},t.id)})]},l)})}),e.jsx(X,{count:8,sx:{my:5,mx:"auto"}})]})}function oe(){const r=B().shape({comment:g().required("Comment is required"),name:g().required("Name is required"),email:g().required("Email is required").email("Email must be a valid email address")}),n={comment:"",name:"",email:""},l=D({resolver:$(r),defaultValues:n}),{reset:s,handleSubmit:x,formState:{isSubmitting:o}}=l,c=x(async h=>{try{await new Promise(i=>setTimeout(i,500)),s(),console.info("DATA",h)}catch(i){console.error(i)}});return e.jsx(A,{methods:l,onSubmit:c,children:e.jsxs(m,{spacing:3,children:[e.jsx(E,{name:"comment",placeholder:"Write some of your comments...",multiline:!0,rows:4}),e.jsxs(m,{direction:"row",alignItems:"center",children:[e.jsxs(m,{direction:"row",alignItems:"center",flexGrow:1,children:[e.jsx(p,{children:e.jsx(a,{icon:"solar:gallery-add-bold"})}),e.jsx(p,{children:e.jsx(a,{icon:"eva:attach-2-fill"})}),e.jsx(p,{children:e.jsx(a,{icon:"eva:smiling-face-fill"})})]}),e.jsx(F,{type:"submit",variant:"contained",loading:o,children:"Post comment"})]})]})})}function ae({publish:r,backLink:n,editLink:l,liveLink:s,publishOptions:x,onChangePublish:o,sx:c,...h}){const i=U();return e.jsxs(e.Fragment,{children:[e.jsxs(m,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...c},...h,children:[e.jsx(w,{component:b,href:n,startIcon:e.jsx(a,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(v,{sx:{flexGrow:1}}),r==="published"&&e.jsx(C,{title:"Go Live",children:e.jsx(p,{component:b,href:s,children:e.jsx(a,{icon:"eva:external-link-fill"})})}),e.jsx(C,{title:"Edit",children:e.jsx(p,{component:b,href:l,children:e.jsx(a,{icon:"solar:pen-bold"})})}),e.jsx(F,{color:"inherit",variant:"contained",loading:!r,loadingIndicator:"Loading…",endIcon:e.jsx(a,{icon:"eva:arrow-ios-downward-fill"}),onClick:i.onOpen,sx:{textTransform:"capitalize"},children:r})]}),e.jsx(q,{open:i.open,onClose:i.onClose,arrow:"top-right",sx:{width:140},children:x.map(d=>e.jsxs(G,{selected:d.value===r,onClick:()=>{i.onClose(),o(d.value)},children:[d.value==="published"&&e.jsx(a,{icon:"eva:cloud-upload-fill"}),d.value==="draft"&&e.jsx(a,{icon:"solar:file-text-bold"}),d.label]},d.value))})]})}function ie({title:r}){const[n,l]=P.useState(""),{post:s,postLoading:x,postError:o}=R(r),c=P.useCallback(t=>{l(t)},[]);P.useEffect(()=>{s&&l(s==null?void 0:s.publish)},[s]);const h=e.jsx(_,{}),i=e.jsx(J,{filled:!0,title:`${o==null?void 0:o.message}`,action:e.jsx(w,{component:b,href:f.dashboard.post.root,startIcon:e.jsx(a,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:20}}),d=s&&e.jsxs(e.Fragment,{children:[e.jsx(ae,{backLink:f.dashboard.post.root,editLink:f.dashboard.post.edit(`${s==null?void 0:s.title}`),liveLink:f.post.details(`${s==null?void 0:s.title}`),publish:n||"",onChangePublish:c,publishOptions:V}),e.jsx(K,{title:s.title,coverUrl:s.coverUrl}),e.jsxs(m,{sx:{maxWidth:720,mx:"auto",mt:{xs:5,md:10}},children:[e.jsx(u,{variant:"subtitle1",sx:{mb:5},children:s.description}),e.jsx(Z,{children:s.content}),e.jsxs(m,{spacing:3,sx:{py:3,borderTop:t=>`dashed 1px ${t.palette.divider}`,borderBottom:t=>`dashed 1px ${t.palette.divider}`},children:[e.jsx(m,{direction:"row",flexWrap:"wrap",spacing:1,children:s.tags.map(t=>e.jsx(Y,{label:t,variant:"soft"},t))}),e.jsxs(m,{direction:"row",alignItems:"center",children:[e.jsx(ee,{control:e.jsx(se,{defaultChecked:!0,size:"small",color:"error",icon:e.jsx(a,{icon:"solar:heart-bold"}),checkedIcon:e.jsx(a,{icon:"solar:heart-bold"})}),label:N(s.totalFavorites),sx:{mr:1}}),e.jsx(te,{sx:{[`& .${O.avatar}`]:{width:32,height:32}},children:s.favoritePerson.map(t=>e.jsx(I,{alt:t.name,src:t.avatarUrl},t.name))})]})]}),e.jsxs(m,{direction:"row",sx:{mb:3,mt:5},children:[e.jsx(u,{variant:"h4",children:"Comments"}),e.jsxs(u,{variant:"subtitle2",sx:{color:"text.disabled"},children:["(",s.comments.length,")"]})]}),e.jsx(oe,{}),e.jsx(W,{sx:{mt:5,mb:2}}),e.jsx(re,{comments:s.comments})]})]});return e.jsxs(H,{maxWidth:!1,children:[x&&h,o&&i,s&&d]})}function Le(){const r=z(),{title:n}=r;return e.jsxs(e.Fragment,{children:[e.jsx(M,{children:e.jsx("title",{children:" Dashboard: Post Details"})}),e.jsx(ie,{title:`${n}`})]})}export{Le as default};
