import{b0 as C,j as t,S as l,i as P,R as x,d as r,B as g,ab as b,c as v,b1 as k,b2 as w,r as f,p as d,T as u,dr as L,A as I,D as B,C as D,H as S}from"./index-tv0ZIiTC.js";import{u as T}from"./use-params-iuj_IYOP.js";import"./_baseToString-oTyNAALA.js";import"./index-oYV4_ElG.js";import"./image-tVn7ll4O.js";import"./text-max-line-c6g0cB0E.js";import"./index.esm-VBvqitsX.js";import"./mui-one-time-password-input.es-YbC1owsP.js";import"./styles-9eCz8YsQ.js";import"./styles-Pl_iOln8.js";import{b as F}from"./format-number-BH3VEnKN.js";import{b as $}from"./blog-Kag-YuB2.js";import{a as y}from"./_blog-GspOuDqg.js";import{M as E}from"./markdown-KH1b-_Oa.js";import{E as G}from"./empty-content-a0ZHI6oX.js";import{P as O}from"./post-details-hero-2T5bKcLV.js";import{P as A,a as H}from"./post-comment-form-Y7jZJjSe.js";import{P as U}from"./post-skeleton-RQ1Zk_9p.js";import{L as M}from"./LoadingButton-CKt2mL1s.js";import{C as R}from"./Chip-EkmsCEpD.js";import{F as W}from"./FormControlLabel-SC4RdDd1.js";import{C as z}from"./Checkbox-KewZpZB7.js";import{A as N}from"./AvatarGroup-US6hmpus.js";import"./TextField-MR0F-eFr.js";import"./Fab-zNUleQFa.js";import"./ListItem-c4OVPCIE.js";import"./Pagination-qt3os8vb.js";import"./FirstPage-sFACmvNK.js";import"./form-provider-k-FKKLvB.js";import"./yup-THP-HfC-.js";import"./rhf-text-field-Jv5-AM0T.js";import"./Skeleton-LzH7r1Lc.js";import"./CircularProgress-m_JQi2ZX.js";import"./SwitchBase-13kQQb6r.js";function _({publish:e,backLink:m,editLink:c,liveLink:o,publishOptions:p,onChangePublish:a,sx:h,...j}){const n=C();return t.jsxs(t.Fragment,{children:[t.jsxs(l,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...h},...j,children:[t.jsx(P,{component:x,href:m,startIcon:t.jsx(r,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),t.jsx(g,{sx:{flexGrow:1}}),e==="published"&&t.jsx(b,{title:"Go Live",children:t.jsx(v,{component:x,href:o,children:t.jsx(r,{icon:"eva:external-link-fill"})})}),t.jsx(b,{title:"Edit",children:t.jsx(v,{component:x,href:c,children:t.jsx(r,{icon:"solar:pen-bold"})})}),t.jsx(M,{color:"inherit",variant:"contained",loading:!e,loadingIndicator:"Loading…",endIcon:t.jsx(r,{icon:"eva:arrow-ios-downward-fill"}),onClick:n.onOpen,sx:{textTransform:"capitalize"},children:e})]}),t.jsx(k,{open:n.open,onClose:n.onClose,arrow:"top-right",sx:{width:140},children:p.map(i=>t.jsxs(w,{selected:i.value===e,onClick:()=>{n.onClose(),a(i.value)},children:[i.value==="published"&&t.jsx(r,{icon:"eva:cloud-upload-fill"}),i.value==="draft"&&t.jsx(r,{icon:"solar:file-text-bold"}),i.label]},i.value))})]})}function V({title:e}){const[m,c]=f.useState(""),{post:o,postLoading:p,postError:a}=$(e),h=f.useCallback(s=>{c(s)},[]);f.useEffect(()=>{o&&c(o==null?void 0:o.publish)},[o]);const j=t.jsx(U,{}),n=t.jsx(G,{filled:!0,title:`${a==null?void 0:a.message}`,action:t.jsx(P,{component:x,href:d.dashboard.post.root,startIcon:t.jsx(r,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:20}}),i=o&&t.jsxs(t.Fragment,{children:[t.jsx(_,{backLink:d.dashboard.post.root,editLink:d.dashboard.post.edit(`${o==null?void 0:o.title}`),liveLink:d.post.details(`${o==null?void 0:o.title}`),publish:m||"",onChangePublish:h,publishOptions:y}),t.jsx(O,{title:o.title,coverUrl:o.coverUrl}),t.jsxs(l,{sx:{maxWidth:720,mx:"auto",mt:{xs:5,md:10}},children:[t.jsx(u,{variant:"subtitle1",sx:{mb:5},children:o.description}),t.jsx(E,{children:o.content}),t.jsxs(l,{spacing:3,sx:{py:3,borderTop:s=>`dashed 1px ${s.palette.divider}`,borderBottom:s=>`dashed 1px ${s.palette.divider}`},children:[t.jsx(l,{direction:"row",flexWrap:"wrap",spacing:1,children:o.tags.map(s=>t.jsx(R,{label:s,variant:"soft"},s))}),t.jsxs(l,{direction:"row",alignItems:"center",children:[t.jsx(W,{control:t.jsx(z,{defaultChecked:!0,size:"small",color:"error",icon:t.jsx(r,{icon:"solar:heart-bold"}),checkedIcon:t.jsx(r,{icon:"solar:heart-bold"})}),label:F(o.totalFavorites),sx:{mr:1}}),t.jsx(N,{sx:{[`& .${L.avatar}`]:{width:32,height:32}},children:o.favoritePerson.map(s=>t.jsx(I,{alt:s.name,src:s.avatarUrl},s.name))})]})]}),t.jsxs(l,{direction:"row",sx:{mb:3,mt:5},children:[t.jsx(u,{variant:"h4",children:"Comments"}),t.jsxs(u,{variant:"subtitle2",sx:{color:"text.disabled"},children:["(",o.comments.length,")"]})]}),t.jsx(A,{}),t.jsx(B,{sx:{mt:5,mb:2}}),t.jsx(H,{comments:o.comments})]})]});return t.jsxs(D,{maxWidth:!1,children:[p&&j,a&&n,o&&i]})}function Bt(){const e=T(),{title:m}=e;return t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsx("title",{children:" Dashboard: Post Details"})}),t.jsx(V,{title:`${m}`})]})}export{Bt as default};
