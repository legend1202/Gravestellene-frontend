import{bb as _,j as e,S as c,E as O,R as y,g as r,B as m,al as C,f as b,h as z,bc as F,O as U,a5 as w,aP as k,T,L as N,b3 as I,q as D,eG as $,a7 as L,r as j,y as M,s as V,ar as u,v as W,eH as q,bo as J,eI as K,bp as Q,z as X,C as Y,p as S,eJ as Z,V as ee,H as se}from"./index-zFfPxWlY.js";import"./_baseToString-_058cDH1.js";import{M as re}from"./markdown-dJQS-jdR.js";import{b as P}from"./transition-eqIn2NYL.js";import{u as ae,L as oe}from"./use-light-box-6AJBZAkN.js";import{C as ne}from"./Checkbox-Ixvscv7Q.js";import"./styles-pt_i9z85.js";import"./SwitchBase-UFqOjZj0.js";function ie({publish:n,backLink:i,editLink:a,liveLink:o,publishOptions:t,onChangePublish:d,sx:p,...g}){const h=_();return e.jsxs(e.Fragment,{children:[e.jsxs(c,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...p},...g,children:[e.jsx(O,{component:y,href:i,startIcon:e.jsx(r,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(m,{sx:{flexGrow:1}}),n==="published"&&e.jsx(C,{title:"Go Live",children:e.jsx(b,{component:y,href:o,children:e.jsx(r,{icon:"eva:external-link-fill"})})}),e.jsx(C,{title:"Edit",children:e.jsx(b,{component:y,href:a,children:e.jsx(r,{icon:"solar:pen-bold"})})}),e.jsx(z,{color:"inherit",variant:"contained",loading:!n,loadingIndicator:"Loading…",endIcon:e.jsx(r,{icon:"eva:arrow-ios-downward-fill"}),onClick:h.onOpen,sx:{textTransform:"capitalize"},children:n})]}),e.jsx(F,{open:h.open,onClose:h.onClose,arrow:"top-right",sx:{width:140},children:t.map(x=>e.jsxs(U,{selected:x.value===n,onClick:()=>{h.onClose(),d(x.value)},children:[x.value==="published"&&e.jsx(r,{icon:"eva:cloud-upload-fill"}),x.value==="draft"&&e.jsx(r,{icon:"solar:file-text-bold"}),x.label]},x.value))})]})}function le({tour:n}){const{name:i,images:a,content:o,services:t,tourGuides:d,available:p,durations:g,destination:h,ratingNumber:x}=n,l=a.map(s=>({src:s})),{selected:v,open:R,onOpen:f,onClose:B}=ae(l),G=e.jsxs(e.Fragment,{children:[e.jsxs(m,{gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{mb:{xs:3,md:5}},children:[e.jsx(w.div,{whileHover:"hover",variants:{hover:{opacity:.8}},transition:P(),children:e.jsx(k,{alt:l[0].src,src:l[0].src,ratio:"1/1",onClick:()=>f(l[0].src),sx:{borderRadius:2,cursor:"pointer"}})},l[0].src),e.jsx(m,{gap:1,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",children:l.slice(1,5).map(s=>e.jsx(w.div,{whileHover:"hover",variants:{hover:{opacity:.8}},transition:P(),children:e.jsx(k,{alt:s.src,src:s.src,ratio:"1/1",onClick:()=>f(s.src),sx:{borderRadius:2,cursor:"pointer"}})},s.src))})]}),e.jsx(oe,{index:v,slides:l,open:R,close:B})]}),A=e.jsxs(e.Fragment,{children:[e.jsxs(c,{direction:"row",sx:{mb:3},children:[e.jsx(T,{variant:"h4",sx:{flexGrow:1},children:i}),e.jsx(b,{children:e.jsx(r,{icon:"solar:share-bold"})}),e.jsx(ne,{defaultChecked:!0,color:"error",icon:e.jsx(r,{icon:"solar:heart-outline"}),checkedIcon:e.jsx(r,{icon:"solar:heart-bold"})})]}),e.jsxs(c,{spacing:3,direction:"row",flexWrap:"wrap",alignItems:"center",children:[e.jsxs(c,{direction:"row",alignItems:"center",spacing:.5,sx:{typography:"body2"},children:[e.jsx(r,{icon:"eva:star-fill",sx:{color:"warning.main"}}),e.jsx(m,{component:"span",sx:{typography:"subtitle2"},children:x}),e.jsx(N,{sx:{color:"text.secondary"},children:"(234 reviews)"})]}),e.jsxs(c,{direction:"row",alignItems:"center",spacing:.5,sx:{typography:"body2"},children:[e.jsx(r,{icon:"mingcute:location-fill",sx:{color:"error.main"}}),h]}),e.jsxs(c,{direction:"row",alignItems:"center",spacing:.5,sx:{typography:"subtitle2"},children:[e.jsx(r,{icon:"solar:flag-bold",sx:{color:"info.main"}}),e.jsx(m,{component:"span",sx:{typography:"body2",color:"text.secondary"},children:"Guide by"}),d.map(s=>s.name).join(", ")]})]})]}),H=e.jsx(m,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[{label:"Available",value:`${I(p.startDate)} - ${I(p.endDate)}`,icon:e.jsx(r,{icon:"solar:calendar-date-bold"})},{label:"Contact name",value:d.map(s=>s.phoneNumber).join(", "),icon:e.jsx(r,{icon:"solar:user-rounded-bold"})},{label:"Durations",value:g,icon:e.jsx(r,{icon:"solar:clock-circle-bold"})},{label:"Contact phone",value:d.map(s=>s.name).join(", "),icon:e.jsx(r,{icon:"solar:phone-bold"})}].map(s=>e.jsxs(c,{spacing:1.5,direction:"row",children:[s.icon,e.jsx(D,{primary:s.label,secondary:s.value,primaryTypographyProps:{typography:"body2",color:"text.secondary",mb:.5},secondaryTypographyProps:{typography:"subtitle2",color:"text.primary",component:"span"}})]},s.label))}),E=e.jsxs(e.Fragment,{children:[e.jsx(re,{children:o}),e.jsxs(c,{spacing:2,children:[e.jsx(T,{variant:"h6",children:" Services"}),e.jsx(m,{rowGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:$.map(s=>e.jsxs(c,{spacing:1,direction:"row",alignItems:"center",sx:{...t.includes(s.label)&&{color:"text.disabled"}},children:[e.jsx(r,{icon:"eva:checkmark-circle-2-outline",sx:{color:"primary.main",...t.includes(s.label)&&{color:"text.disabled"}}}),s.label]},s.label))})]})]});return e.jsxs(e.Fragment,{children:[G,e.jsxs(c,{sx:{maxWidth:720,mx:"auto"},children:[A,e.jsx(L,{sx:{borderStyle:"dashed",my:5}}),H,e.jsx(L,{sx:{borderStyle:"dashed",my:5}}),E]})]})}function te({bookers:n}){const[i,a]=j.useState([]),o=j.useCallback(t=>{const d=i.includes(t)?i.filter(p=>p!==t):[...i,t];a(d)},[i]);return e.jsx(m,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:n.map(t=>e.jsx(ce,{booker:t,selected:i.includes(t.id),onSelected:()=>o(t.id)},t.id))})}function ce({booker:n,selected:i,onSelected:a}){return e.jsxs(c,{component:M,direction:"row",spacing:2,sx:{p:3},children:[e.jsx(V,{alt:n.name,src:n.avatarUrl,sx:{width:48,height:48}}),e.jsxs(c,{spacing:2,flexGrow:1,children:[e.jsx(D,{primary:n.name,secondary:e.jsxs(c,{direction:"row",alignItems:"center",spacing:.5,children:[e.jsx(r,{icon:"solar:users-group-rounded-bold",width:16}),n.guests," guests"]}),secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),e.jsxs(c,{spacing:1,direction:"row",children:[e.jsx(b,{size:"small",color:"error",sx:{borderRadius:1,bgcolor:o=>u(o.palette.error.main,.08),"&:hover":{bgcolor:o=>u(o.palette.error.main,.16)}},children:e.jsx(r,{width:18,icon:"solar:phone-bold"})}),e.jsx(b,{size:"small",color:"info",sx:{borderRadius:1,bgcolor:o=>u(o.palette.info.main,.08),"&:hover":{bgcolor:o=>u(o.palette.info.main,.16)}},children:e.jsx(r,{width:18,icon:"solar:chat-round-dots-bold"})}),e.jsx(b,{size:"small",color:"primary",sx:{borderRadius:1,bgcolor:o=>u(o.palette.primary.main,.08),"&:hover":{bgcolor:o=>u(o.palette.primary.main,.16)}},children:e.jsx(r,{width:18,icon:"fluent:mail-24-filled"})})]})]}),e.jsx(O,{size:"small",variant:i?"text":"outlined",color:i?"success":"inherit",startIcon:i?e.jsx(r,{width:18,icon:"eva:checkmark-fill",sx:{mr:-.75}}):null,onClick:a,children:i?"Approved":"Approve"})]},n.id)}function de({id:n}){const i=W(),a=q.filter(l=>l.id===n)[0],[o,t]=j.useState(a==null?void 0:a.publish),[d,p]=j.useState("content"),g=j.useCallback((l,v)=>{p(v)},[]),h=j.useCallback(l=>{t(l)},[]),x=e.jsx(J,{value:d,onChange:g,sx:{mb:{xs:3,md:5}},children:K.map(l=>e.jsx(Q,{iconPosition:"end",value:l.value,label:l.label,icon:l.value==="bookers"?e.jsx(X,{variant:"filled",children:a==null?void 0:a.bookers.length}):""},l.value))});return e.jsxs(Y,{maxWidth:i.themeStretch?!1:"lg",children:[e.jsx(ie,{backLink:S.dashboard.tour.root,editLink:S.dashboard.tour.edit(`${a==null?void 0:a.id}`),liveLink:"#",publish:o||"",onChangePublish:h,publishOptions:Z}),x,d==="content"&&e.jsx(le,{tour:a}),d==="bookers"&&e.jsx(te,{bookers:a==null?void 0:a.bookers})]})}function ve(){const n=ee(),{id:i}=n;return e.jsxs(e.Fragment,{children:[e.jsx(se,{children:e.jsx("title",{children:" Dashboard: Analytics"})}),e.jsx(de,{id:`${i}`})]})}export{ve as default};
