import{bc as k,t as v,j as s,S as G,J as j,R as h,g as r,B as C,am as g,f as S,bd as w,Q as y,v as L,r as x,p as n,cv as D,_ as p,y as P,C as B}from"./index-JGGUJxTa.js";import{b as I}from"./graveyard-XASBtLuG.js";import{E}from"./empty-content-M6RskY8h.js";import{G as R,a as A,b as O}from"./graveyard-details-description-es_vCve5.js";import{G as T}from"./graveyard-details-carousel-RA4rwKip.js";function _({publish:i,backLink:e,editLink:u,liveLink:t,publishOptions:m,onChangePublish:l,sx:a,...c}){const o=k(),{t:d}=v();return s.jsxs(s.Fragment,{children:[s.jsxs(G,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...a},...c,children:[s.jsx(j,{component:h,href:e,startIcon:s.jsx(r,{icon:"eva:arrow-ios-back-fill",width:16}),children:d("Back")}),s.jsx(C,{sx:{flexGrow:1}}),i&&s.jsx(g,{title:"Go Live",children:s.jsx(S,{component:h,href:t,children:s.jsx(r,{icon:"eva:external-link-fill"})})})]}),s.jsx(w,{open:o.open,onClose:o.onClose,arrow:"top-right",sx:{width:140},children:s.jsxs(y,{onClick:()=>{o.onClose(),l(!0)},children:[s.jsx(r,{icon:"eva:cloud-upload-fill"}),"Approve"]})})]})}function M({id:i}){const{graveyard:e,graveyardLoading:u,graveyardError:t}=I(i),m=L(),[l,a]=x.useState(!1);x.useEffect(()=>{e&&a(e==null?void 0:e.approved)},[e]);const c=x.useCallback(b=>{a(b)},[]),o=s.jsx(O,{}),d=s.jsx(E,{filled:!0,title:`${t==null?void 0:t.message}`,action:s.jsx(j,{component:h,href:n.dashboard.product.root,startIcon:s.jsx(r,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:10}}),f=e&&s.jsxs(s.Fragment,{children:[s.jsx(_,{backLink:n.fellesraad.graveyard.root,editLink:n.fellesraad.graveyard.edit(`${e==null?void 0:e.id}`),liveLink:n.fellesraad.graveyard.details(`${e==null?void 0:e.id}`),publish:l,onChangePublish:c,publishOptions:D}),s.jsxs(p,{container:!0,spacing:{xs:3,md:5,lg:8},children:[s.jsx(p,{xs:12,md:6,lg:7,children:e.picture&&s.jsx(T,{graveyard:e})}),s.jsx(p,{xs:12,md:6,lg:5,children:s.jsx(R,{disabledActions:!0,graveyard:e})})]}),s.jsx(P,{sx:{my:10},children:s.jsx(A,{content:e==null?void 0:e.content})})]});return s.jsxs(B,{maxWidth:m.themeStretch?!1:"lg",children:[u&&o,t&&d,e&&f]})}export{M as G};
