import{b0 as S,j as e,S as T,i as w,R as p,d as r,B as j,ab as f,c as g,b1 as R,b2 as L,h as I,r as c,p as d,dC as B,G as b,T as v,ba as E,ak as O,bb as $,C as G,H as M}from"./index-tv0ZIiTC.js";import{u as A}from"./use-params-iuj_IYOP.js";import"./index-oYV4_ElG.js";import"./index.esm-VBvqitsX.js";import"./image-tVn7ll4O.js";import"./mui-one-time-password-input.es-YbC1owsP.js";import"./styles-9eCz8YsQ.js";import"./_baseToString-oTyNAALA.js";import"./color-picker-nPEb_Zq-.js";import{b as F}from"./product-1kyoSBsH.js";import{E as H}from"./empty-content-a0ZHI6oX.js";import{a as U}from"./product-skeleton-bSPvu0xY.js";import{P as W,a as Y,b as _}from"./product-details-description-FqFvUpu3.js";import{L as z}from"./LoadingButton-CKt2mL1s.js";import{P as N}from"./product-details-carousel-VEczdnTd.js";import{C as V}from"./Card-fEhE4FGy.js";import"./incrementer-button-I4VNuJON.js";import"./styles-Pl_iOln8.js";import"./TextField-MR0F-eFr.js";import"./Skeleton-LzH7r1Lc.js";import"./sumBy-grupSLa9.js";import"./_baseIteratee-VSoSbk_2.js";import"./_baseSum-gu02AyRp.js";import"./format-number-BH3VEnKN.js";import"./Rating-lUu5yZJ_.js";import"./visuallyHidden-DVicuktI.js";import"./Pagination-qt3os8vb.js";import"./FirstPage-sFACmvNK.js";import"./form-provider-k-FKKLvB.js";import"./yup-THP-HfC-.js";import"./rhf-text-field-Jv5-AM0T.js";import"./DialogTitle-uDbN0tw-.js";import"./dialogTitleClasses-47Jk6PmQ.js";import"./DialogContent-l4Y2lTg9.js";import"./DialogActions-C1UtG1Hl.js";import"./rhf-select-XJVvuUwg.js";import"./Checkbox-KewZpZB7.js";import"./SwitchBase-13kQQb6r.js";import"./Chip-EkmsCEpD.js";import"./markdown-KH1b-_Oa.js";import"./CircularProgress-m_JQi2ZX.js";import"./use-light-box-D-_zTE4T.js";import"./carousel-arrow-index-9c3WNDBg.js";function q({publish:s,backLink:t,editLink:m,liveLink:n,publishOptions:x,onChangePublish:l,sx:h,...u}){const a=S();return e.jsxs(e.Fragment,{children:[e.jsxs(T,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...h},...u,children:[e.jsx(w,{component:p,href:t,startIcon:e.jsx(r,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(j,{sx:{flexGrow:1}}),s==="published"&&e.jsx(f,{title:"Go Live",children:e.jsx(g,{component:p,href:n,children:e.jsx(r,{icon:"eva:external-link-fill"})})}),e.jsx(f,{title:"Edit",children:e.jsx(g,{component:p,href:m,children:e.jsx(r,{icon:"solar:pen-bold"})})}),e.jsx(z,{color:"inherit",variant:"contained",loading:!s,loadingIndicator:"Loading…",endIcon:e.jsx(r,{icon:"eva:arrow-ios-downward-fill"}),onClick:a.onOpen,sx:{textTransform:"capitalize"},children:s})]}),e.jsx(R,{open:a.open,onClose:a.onClose,arrow:"top-right",sx:{width:140},children:x.map(o=>e.jsxs(L,{selected:o.value===s,onClick:()=>{a.onClose(),l(o.value)},children:[o.value==="published"&&e.jsx(r,{icon:"eva:cloud-upload-fill"}),o.value==="draft"&&e.jsx(r,{icon:"solar:file-text-bold"}),o.label]},o.value))})]})}const J=[{title:"100% Original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 Day Replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year Warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function K({id:s}){const{product:t,productLoading:m,productError:n}=F(s),x=I(),[l,h]=c.useState("description"),[u,a]=c.useState("");c.useEffect(()=>{t&&a(t==null?void 0:t.publish)},[t]);const o=c.useCallback(i=>{a(i)},[]),C=c.useCallback((i,D)=>{h(D)},[]),k=e.jsx(U,{}),P=e.jsx(H,{filled:!0,title:`${n==null?void 0:n.message}`,action:e.jsx(w,{component:p,href:d.dashboard.product.root,startIcon:e.jsx(r,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:10}}),y=t&&e.jsxs(e.Fragment,{children:[e.jsx(q,{backLink:d.dashboard.product.root,editLink:d.dashboard.product.edit(`${t==null?void 0:t.id}`),liveLink:d.product.details(`${t==null?void 0:t.id}`),publish:u||"",onChangePublish:o,publishOptions:B}),e.jsxs(b,{container:!0,spacing:{xs:3,md:5,lg:8},children:[e.jsx(b,{xs:12,md:6,lg:7,children:e.jsx(N,{product:t})}),e.jsx(b,{xs:12,md:6,lg:5,children:e.jsx(W,{disabledActions:!0,product:t})})]}),e.jsx(j,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:J.map(i=>e.jsxs(j,{sx:{textAlign:"center",px:5},children:[e.jsx(r,{icon:i.icon,width:32,sx:{color:"primary.main"}}),e.jsx(v,{variant:"subtitle1",sx:{mb:1,mt:2},children:i.title}),e.jsx(v,{variant:"body2",sx:{color:"text.secondary"},children:i.description})]},i.title))}),e.jsxs(V,{children:[e.jsx(E,{value:l,onChange:C,sx:{px:3,boxShadow:i=>`inset 0 -2px 0 0 ${O(i.palette.grey[500],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:`Reviews (${t.reviews.length})`}].map(i=>e.jsx($,{value:i.value,label:i.label},i.value))}),l==="description"&&e.jsx(Y,{description:t==null?void 0:t.description}),l==="reviews"&&e.jsx(_,{ratings:t.ratings,reviews:t.reviews,totalRatings:t.totalRatings,totalReviews:t.totalReviews})]})]});return e.jsxs(G,{maxWidth:x.themeStretch?!1:"lg",children:[m&&k,n&&P,t&&y]})}function He(){const s=A(),{id:t}=s;return e.jsxs(e.Fragment,{children:[e.jsx(M,{children:e.jsx("title",{children:" Dashboard: Product Details"})}),e.jsx(K,{id:`${t}`})]})}export{He as default};