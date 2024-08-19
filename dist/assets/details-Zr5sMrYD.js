import{ay as S,j as e,S as i,B as O,R as y,g as n,v as D,n as w,f as x,h as E,aA as R,a6 as A,K as C,T as m,b5 as T,Y as I,an as _,Z as B,N as f,E as d,G as z,d_ as G,r as g,bs as N,d$ as H,bt as M,x as $,C as F,p as k,e0 as U,O as V,H as J}from"./index-N8SydwAL.js";import"./_baseToString-Z76_zUlo.js";import{f as K}from"./format-number-wF8MOw5S.js";import{M as W}from"./markdown-EdamtX2z.js";import{C as P}from"./Chip-YnHBPfwg.js";import"./styles-VhGsR3AZ.js";function Y({publish:s,backLink:o,editLink:a,liveLink:h,publishOptions:j,onChangePublish:p,sx:b,...u}){const c=S();return e.jsxs(e.Fragment,{children:[e.jsxs(i,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...b},...u,children:[e.jsx(O,{component:y,href:o,startIcon:e.jsx(n,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(D,{sx:{flexGrow:1}}),s==="published"&&e.jsx(w,{title:"Go Live",children:e.jsx(x,{component:y,href:h,children:e.jsx(n,{icon:"eva:external-link-fill"})})}),e.jsx(w,{title:"Edit",children:e.jsx(x,{component:y,href:a,children:e.jsx(n,{icon:"solar:pen-bold"})})}),e.jsx(E,{color:"inherit",variant:"contained",loading:!s,loadingIndicator:"Loading…",endIcon:e.jsx(n,{icon:"eva:arrow-ios-downward-fill"}),onClick:c.onOpen,sx:{textTransform:"capitalize"},children:s})]}),e.jsx(R,{open:c.open,onClose:c.onClose,arrow:"top-right",sx:{width:140},children:j.map(l=>e.jsxs(A,{selected:l.value===s,onClick:()=>{c.onClose(),p(l.value)},children:[l.value==="published"&&e.jsx(n,{icon:"eva:cloud-upload-fill"}),l.value==="draft"&&e.jsx(n,{icon:"solar:file-text-bold"}),l.label]},l.value))})]})}function Z({job:s}){const{title:o,skills:a,salary:h,content:j,benefits:p,createdAt:b,experience:u,expiredDate:c,employmentTypes:l}=s,r=e.jsxs(i,{component:C,spacing:3,sx:{p:3},children:[e.jsx(m,{variant:"h4",children:o}),e.jsx(W,{children:j}),e.jsxs(i,{spacing:2,children:[e.jsx(m,{variant:"h6",children:"Skills"}),e.jsx(i,{direction:"row",alignItems:"center",spacing:1,children:a.map(t=>e.jsx(P,{label:t,variant:"soft"},t))})]}),e.jsxs(i,{spacing:2,children:[e.jsx(m,{variant:"h6",children:"Benefits"}),e.jsx(i,{direction:"row",alignItems:"center",spacing:1,children:p.map(t=>e.jsx(P,{label:t,variant:"soft"},t))})]})]}),v=e.jsx(i,{component:C,spacing:2,sx:{p:3},children:[{label:"Date Posted",value:T(b),icon:e.jsx(n,{icon:"solar:calendar-date-bold"})},{label:"Expiration date",value:T(c),icon:e.jsx(n,{icon:"solar:calendar-date-bold"})},{label:"Employment type",value:l,icon:e.jsx(n,{icon:"solar:clock-circle-bold"})},{label:"Offered salary",value:h.negotiable?"Negotiable":K(h.price),icon:e.jsx(n,{icon:"solar:wad-of-money-bold"})},{label:"Experience",value:u,icon:e.jsx(n,{icon:"carbon:skill-level-basic"})}].map(t=>e.jsxs(i,{spacing:1.5,direction:"row",children:[t.icon,e.jsx(I,{primary:t.label,secondary:t.value,primaryTypographyProps:{typography:"body2",color:"text.secondary",mb:.5},secondaryTypographyProps:{typography:"subtitle2",color:"text.primary",component:"span"}})]},t.label))}),L=e.jsxs(i,{component:_,variant:"outlined",spacing:2,direction:"row",sx:{p:3,borderRadius:2,mt:3},children:[e.jsx(B,{alt:s.company.name,src:s.company.logo,variant:"rounded",sx:{width:64,height:64}}),e.jsxs(i,{spacing:1,children:[e.jsx(m,{variant:"subtitle1",children:s.company.name}),e.jsx(m,{variant:"body2",children:s.company.fullAddress}),e.jsx(m,{variant:"body2",children:s.company.phoneNumber})]})]});return e.jsxs(f,{container:!0,spacing:3,children:[e.jsx(f,{xs:12,md:8,children:r}),e.jsxs(f,{xs:12,md:4,children:[v,L]})]})}function q({candidates:s}){return e.jsx(D,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:s.map(o=>e.jsxs(i,{component:C,direction:"row",spacing:2,sx:{p:3},children:[e.jsx(x,{sx:{position:"absolute",top:8,right:8},children:e.jsx(n,{icon:"eva:more-vertical-fill"})}),e.jsx(B,{alt:o.name,src:o.avatarUrl,sx:{width:48,height:48}}),e.jsxs(i,{spacing:2,children:[e.jsx(I,{primary:o.name,secondary:o.role,secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),e.jsxs(i,{spacing:1,direction:"row",children:[e.jsx(x,{size:"small",color:"error",sx:{borderRadius:1,bgcolor:a=>d(a.palette.error.main,.08),"&:hover":{bgcolor:a=>d(a.palette.error.main,.16)}},children:e.jsx(n,{width:18,icon:"solar:phone-bold"})}),e.jsx(x,{size:"small",color:"info",sx:{borderRadius:1,bgcolor:a=>d(a.palette.info.main,.08),"&:hover":{bgcolor:a=>d(a.palette.info.main,.16)}},children:e.jsx(n,{width:18,icon:"solar:chat-round-dots-bold"})}),e.jsx(x,{size:"small",color:"primary",sx:{borderRadius:1,bgcolor:a=>d(a.palette.primary.main,.08),"&:hover":{bgcolor:a=>d(a.palette.primary.main,.16)}},children:e.jsx(n,{width:18,icon:"fluent:mail-24-filled"})}),e.jsx(w,{title:"Download CV",children:e.jsx(x,{size:"small",color:"secondary",sx:{borderRadius:1,bgcolor:a=>d(a.palette.secondary.main,.08),"&:hover":{bgcolor:a=>d(a.palette.secondary.main,.16)}},children:e.jsx(n,{width:18,icon:"eva:cloud-download-fill"})})})]})]})]},o.id))})}function Q({id:s}){const o=z(),a=G.filter(r=>r.id===s)[0],[h,j]=g.useState(a==null?void 0:a.publish),[p,b]=g.useState("content"),u=g.useCallback((r,v)=>{b(v)},[]),c=g.useCallback(r=>{j(r)},[]),l=e.jsx(N,{value:p,onChange:u,sx:{mb:{xs:3,md:5}},children:H.map(r=>e.jsx(M,{iconPosition:"end",value:r.value,label:r.label,icon:r.value==="candidates"?e.jsx($,{variant:"filled",children:a==null?void 0:a.candidates.length}):""},r.value))});return e.jsxs(F,{maxWidth:o.themeStretch?!1:"lg",children:[e.jsx(Y,{backLink:k.dashboard.job.root,editLink:k.dashboard.job.edit(`${a==null?void 0:a.id}`),liveLink:"#",publish:h||"",onChangePublish:c,publishOptions:U}),l,p==="content"&&e.jsx(Z,{job:a}),p==="candidates"&&e.jsx(q,{candidates:a==null?void 0:a.candidates})]})}function ie(){const s=V(),{id:o}=s;return e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsx("title",{children:" Dashboard: Job Details"})}),e.jsx(Q,{id:`${o}`})]})}export{ie as default};
