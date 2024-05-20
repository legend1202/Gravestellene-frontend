import{j as e,Q as d,S as a,e as M,r as y,F as O,T as c,K as S,B as w,L as j,h as t,bi as V,t as P,R as b,as as L,g as F,i as _,bj as $,bk as z,q as N,p as f,cG as W,v as Y,C as q}from"./index-A5RRZfYH.js";import{u as H}from"./graveyard-Swqx8YUn.js";import{E as K}from"./empty-content-GoFS-V4X.js";import{S as o}from"./Skeleton-v5Il4nLo.js";import{R as Q}from"./Rating-9BuXmHVL.js";import{G as U}from"./graveyard-details-carousel--p6fw25E.js";import{M as J}from"./markdown-T-uK82pL.js";function X({...n}){return e.jsxs(d,{container:!0,spacing:8,...n,children:[e.jsx(d,{xs:12,md:6,lg:7,children:e.jsx(o,{sx:{paddingTop:"100%"}})}),e.jsx(d,{xs:12,md:6,lg:5,children:e.jsxs(a,{spacing:3,children:[e.jsx(o,{sx:{height:16,width:48}}),e.jsx(o,{sx:{height:16,width:80}}),e.jsx(o,{sx:{height:16,width:.5}}),e.jsx(o,{sx:{height:16,width:.75}}),e.jsx(o,{sx:{height:120}})]})}),e.jsx(d,{xs:12,children:e.jsx(a,{direction:"row",alignItems:"center",children:[...Array(3)].map((s,x)=>e.jsxs(a,{spacing:2,alignItems:"center",justifyContent:"center",sx:{width:1},children:[e.jsx(o,{variant:"circular",sx:{width:80,height:80}}),e.jsx(o,{sx:{height:16,width:160}}),e.jsx(o,{sx:{height:16,width:80}})]},x))})})]})}function Z({items:n,graveyard:s,onAddCart:x,onGotoStep:l,disabledActions:g,...m}){const{id:h,fellesraadId:p,name:r,location:i,picture:u,content:v,newsLink:k,forecastLink:C}=s,I={id:h,fellesraadId:p,name:r,location:i,picture:u,content:v,newsLink:k,forecastLink:C},G=M({defaultValues:I}),{reset:T}=G;y.useEffect(()=>{s&&T(I)},[s]);const D=e.jsx(w,{sx:{typography:"h5"},children:"Contact me!"}),E=e.jsxs(a,{direction:"row",spacing:3,justifyContent:"center",children:[e.jsxs(j,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(t,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Facebook"]}),e.jsxs(j,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(t,{icon:"solar:heart-bold",width:16,sx:{mr:1}}),"Twitter"]}),e.jsxs(j,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(t,{icon:"solar:share-bold",width:16,sx:{mr:1}}),"Instagram"]})]}),A=e.jsxs(e.Fragment,{children:[e.jsx(w,{sx:{typography:"h5"},children:"Find More!"}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:e.jsxs(j,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(t,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Map - You can see Google Map!"]})}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:e.jsxs(j,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(t,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"News - ",k]})}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:e.jsxs(j,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(t,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Forecast - ",C]})})]}),B=e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:"Phone number: +1 234 5678 9012"}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:"E-mail: sorokin@mail.co"}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:"Address: Artists' tombs in an 1808 burial ground"})]}),R=e.jsxs(a,{direction:"row",alignItems:"center",sx:{color:"text.disabled",typography:"body2"},children:[e.jsx(Q,{size:"small",value:5,precision:.1,readOnly:!0,sx:{mr:1}}),i]});return e.jsx(O,{methods:G,children:e.jsxs(a,{spacing:3,sx:{pt:3},...m,children:[e.jsxs(a,{spacing:2,alignItems:"flex-start",children:[e.jsx(c,{variant:"h5",children:r}),R,D,B]}),e.jsx(S,{sx:{borderStyle:"dashed"}}),A,e.jsx(S,{sx:{borderStyle:"dashed"}}),E]})})}function ee({publish:n,backLink:s,editLink:x,liveLink:l,publishOptions:g,onChangePublish:m,sx:h,...p}){const r=V();return e.jsxs(e.Fragment,{children:[e.jsxs(a,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...h},...p,children:[e.jsx(P,{component:b,href:s,startIcon:e.jsx(t,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(w,{sx:{flexGrow:1}}),n==="published"&&e.jsx(L,{title:"Go Live",children:e.jsx(F,{component:b,href:l,children:e.jsx(t,{icon:"eva:external-link-fill"})})}),e.jsx(L,{title:"Edit",children:e.jsx(F,{component:b,href:x,children:e.jsx(t,{icon:"solar:pen-bold"})})}),e.jsx(_,{color:"inherit",variant:"contained",loading:!n,loadingIndicator:"Loading…",endIcon:e.jsx(t,{icon:"eva:arrow-ios-downward-fill"}),onClick:r.onOpen,sx:{textTransform:"capitalize"},children:n})]}),e.jsx($,{open:r.open,onClose:r.onClose,arrow:"top-right",sx:{width:140},children:g.map((i,u)=>e.jsxs(z,{selected:i.value===!0,onClick:()=>{r.onClose(),m(i.value)},children:[i.value&&e.jsx(t,{icon:"eva:cloud-upload-fill"}),!i.value&&e.jsx(t,{icon:"solar:file-text-bold"}),i.label]},u))})]})}function se({content:n}){return e.jsx(J,{children:n,sx:{p:3,"& p, li, ol":{typography:"body2"},"& ol":{p:0,display:{md:"flex"},listStyleType:"none","& li":{"&:first-of-type":{minWidth:240,mb:{xs:.5,md:0}}}}}})}function ce({id:n}){const{graveyard:s,graveyardLoading:x,graveyardError:l}=H(n),g=N(),[m,h]=y.useState(!1);y.useEffect(()=>{s&&h(s==null?void 0:s.approved)},[s]);const p=y.useCallback(v=>{h(v)},[]),r=e.jsx(X,{}),i=e.jsx(K,{filled:!0,title:`${l==null?void 0:l.message}`,action:e.jsx(P,{component:b,href:f.dashboard.product.root,startIcon:e.jsx(t,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:10}}),u=s&&e.jsxs(e.Fragment,{children:[e.jsx(ee,{backLink:f.fellesraad.graveyard.root,editLink:f.fellesraad.graveyard.edit(`${s==null?void 0:s.id}`),liveLink:f.fellesraad.graveyard.details(`${s==null?void 0:s.id}`),publish:m||!1,onChangePublish:p,publishOptions:W}),e.jsxs(d,{container:!0,spacing:{xs:3,md:5,lg:8},children:[e.jsx(d,{xs:12,md:6,lg:7,children:s.picture&&e.jsx(U,{graveyard:s})}),e.jsx(d,{xs:12,md:6,lg:5,children:e.jsx(Z,{disabledActions:!0,graveyard:s})})]}),e.jsx(Y,{sx:{my:10},children:e.jsx(se,{content:s==null?void 0:s.content})})]});return e.jsxs(q,{maxWidth:g.themeStretch?!1:"lg",children:[x&&r,l&&i,s&&u]})}export{ce as G};
