import{ax as q,j as e,K as Q,g as _,h as u,S as b,Y as Z,X as ee,L as se,R as V,p as w,m as G,v as S,T as C,az as H,a5 as R,k as M,r as m,B as L,bT as ne,s as K,I as oe,dO as le,dP as te,l as N,D as re,n as ie,q as ae,al as ce,G as de,b as pe,t as xe,dX as z,c0 as he,c2 as me,d_ as be,d$ as ue,e0 as je,e1 as ye,C as fe,J as ge,H as Ce}from"./index-F58UWM6d.js";import{o as F}from"./orderBy-cGdNKNa-.js";import{E as ke}from"./empty-content-cu3d-hY6.js";import{c as ve}from"./format-time-N0vllXDz.js";import{f as Te}from"./format-number-5NpL39v-.js";import{P as we,p as Se}from"./Pagination-3iRHKege.js";import{A as X}from"./Autocomplete--E0PVWeu.js";import{C as Ee}from"./country-select-2RTLVgz0.js";import{F as J}from"./FormControlLabel-yEUOmb-6.js";import{C as A}from"./Checkbox-LoW-zYTz.js";import{a as Oe}from"./Radio-xuGq06mH.js";import{C as O}from"./Chip-Bf9OfEDF.js";import"./styles-ChwulusQ.js";import"./_baseToString-kWLBp72X.js";import"./_baseIteratee-88HzSBsR.js";import"./_baseEach-Jnq4qx23.js";import"./FirstPage-LKd4WdE0.js";import"./SwitchBase-QO7WNYjK.js";function Ie({job:s,onView:i,onEdit:d,onDelete:l}){const o=q(),{id:a,title:j,company:c,createdAt:r,candidates:p,experience:g,employmentTypes:t,salary:x,role:y}=s;return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{children:[e.jsx(_,{onClick:o.onOpen,sx:{position:"absolute",top:8,right:8},children:e.jsx(u,{icon:"eva:more-vertical-fill"})}),e.jsxs(b,{sx:{p:3,pb:2},children:[e.jsx(Z,{alt:c.name,src:c.logo,variant:"rounded",sx:{width:48,height:48,mb:2}}),e.jsx(ee,{sx:{mb:1},primary:e.jsx(se,{component:V,href:w.dashboard.job.details(a),color:"inherit",children:j}),secondary:`Posted date: ${ve(r)}`,primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{mt:1,component:"span",typography:"caption",color:"text.disabled"}}),e.jsxs(b,{spacing:.5,direction:"row",alignItems:"center",sx:{color:"primary.main",typography:"caption"},children:[e.jsx(u,{width:16,icon:"solar:users-group-rounded-bold"}),p.length," Candidates"]})]}),e.jsx(G,{sx:{borderStyle:"dashed"}}),e.jsx(S,{rowGap:1.5,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{p:3},children:[{label:g,icon:e.jsx(u,{width:16,icon:"carbon:skill-level-basic",sx:{flexShrink:0}})},{label:t.join(", "),icon:e.jsx(u,{width:16,icon:"solar:clock-circle-bold",sx:{flexShrink:0}})},{label:x.negotiable?"Negotiable":Te(x.price),icon:e.jsx(u,{width:16,icon:"solar:wad-of-money-bold",sx:{flexShrink:0}})},{label:y,icon:e.jsx(u,{width:16,icon:"solar:user-rounded-bold",sx:{flexShrink:0}})}].map(k=>e.jsxs(b,{spacing:.5,flexShrink:0,direction:"row",alignItems:"center",sx:{color:"text.disabled",minWidth:0},children:[k.icon,e.jsx(C,{variant:"caption",noWrap:!0,children:k.label})]},k.label))})]}),e.jsxs(H,{open:o.open,onClose:o.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(R,{onClick:()=>{o.onClose(),i()},children:[e.jsx(u,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(R,{onClick:()=>{o.onClose(),d()},children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(R,{onClick:()=>{o.onClose(),l()},sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}function Re({jobs:s}){const i=M(),d=m.useCallback(a=>{i.push(w.dashboard.job.details(a))},[i]),l=m.useCallback(a=>{i.push(w.dashboard.job.edit(a))},[i]),o=m.useCallback(a=>{console.info("DELETE",a)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(a=>e.jsx(Ie,{job:a,onView:()=>d(a.id),onEdit:()=>l(a.id),onDelete:()=>o(a.id)},a.id))}),s.length>8&&e.jsx(we,{count:8,sx:{mt:8,[`& .${Se.ul}`]:{justifyContent:"center"}}})]})}function Le({sort:s,onSort:i,sortOptions:d}){const l=q();return e.jsxs(e.Fragment,{children:[e.jsxs(L,{disableRipple:!0,color:"inherit",onClick:l.onOpen,endIcon:e.jsx(u,{icon:l.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold"},children:["Sort By:",e.jsx(S,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold",textTransform:"capitalize"},children:s})]}),e.jsx(H,{open:l.open,onClose:l.onClose,sx:{width:140},children:d.map(o=>e.jsx(R,{selected:o.value===s,onClick:()=>{l.onClose(),i(o.value)},children:o.label},o.value))})]})}function Be({query:s,results:i,onSearch:d,hrefItem:l}){const o=M(),a=c=>{o.push(l(c))},j=c=>{if(s&&c.key==="Enter"){const r=i.filter(p=>p.title===s)[0];a(r.id)}};return e.jsx(X,{sx:{width:{xs:1,sm:260}},autoHighlight:!0,popupIcon:null,options:i,onInputChange:(c,r)=>d(r),getOptionLabel:c=>c.title,noOptionsText:e.jsx(ne,{query:s,sx:{bgcolor:"unset"}}),isOptionEqualToValue:(c,r)=>c.id===r.id,renderInput:c=>e.jsx(K,{...c,placeholder:"Search...",onKeyUp:j,InputProps:{...c.InputProps,startAdornment:e.jsx(oe,{position:"start",children:e.jsx(u,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})})}}),renderOption:(c,r,{inputValue:p})=>{const g=le(r.title,p),t=te(r.title,g);return m.createElement(S,{component:"li",...c,onClick:()=>a(r.id),key:r.id},e.jsx("div",{children:t.map((x,y)=>e.jsx(C,{component:"span",color:x.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:x.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:x.text},y))}))}})}function Pe({open:s,onOpen:i,onClose:d,filters:l,onFilters:o,canReset:a,onResetFilters:j,roleOptions:c,locationOptions:r,benefitOptions:p,experienceOptions:g,employmentTypeOptions:t}){const x=m.useCallback(n=>{const f=l.employmentTypes.includes(n)?l.employmentTypes.filter(E=>E!==n):[...l.employmentTypes,n];o("employmentTypes",f)},[l.employmentTypes,o]),y=m.useCallback(n=>{o("experience",n)},[o]),k=m.useCallback(n=>{o("roles",n)},[o]),B=m.useCallback(n=>{o("locations",n)},[o]),P=m.useCallback(n=>{const f=l.benefits.includes(n)?l.benefits.filter(E=>E!==n):[...l.benefits,n];o("benefits",f)},[l.benefits,o]),h=e.jsxs(b,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(C,{variant:"h6",sx:{flexGrow:1},children:"Filters"}),e.jsx(ae,{title:"Reset",children:e.jsx(_,{onClick:j,children:e.jsx(N,{color:"error",variant:"dot",invisible:!a,children:e.jsx(u,{icon:"solar:restart-bold"})})})}),e.jsx(_,{onClick:d,children:e.jsx(u,{icon:"mingcute:close-line"})})]}),v=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1},children:"Employment Types"}),t.map(n=>e.jsx(J,{control:e.jsx(A,{checked:l.employmentTypes.includes(n),onClick:()=>x(n)}),label:n},n))]}),T=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1},children:"Experience"}),g.map(n=>e.jsx(J,{control:e.jsx(Oe,{checked:n===l.experience,onClick:()=>y(n)}),label:n,sx:{...n==="all"&&{textTransform:"capitalize"}}},n))]}),Y=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1.5},children:"Roles"}),e.jsx(X,{multiple:!0,disableCloseOnSelect:!0,options:c.map(n=>n),getOptionLabel:n=>n,value:l.roles,onChange:(n,f)=>k(f),renderInput:n=>e.jsx(K,{placeholder:"Select Roles",...n}),renderOption:(n,f)=>m.createElement("li",{...n,key:f},f),renderTags:(n,f)=>n.map((E,D)=>m.createElement(O,{...f({index:D}),key:E,label:E,size:"small",variant:"soft"}))})]}),$=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1.5},children:"Locations"}),e.jsx(Ee,{placeholder:l.locations.length?"+ Locations":"Select Locations",fullWidth:!0,multiple:!0,value:l.locations,onChange:(n,f)=>B(f),options:r,getOptionLabel:n=>n})]}),U=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1},children:"Benefits"}),p.map(n=>e.jsx(J,{control:e.jsx(A,{checked:l.benefits.includes(n),onClick:()=>P(n)}),label:n},n))]});return e.jsxs(e.Fragment,{children:[e.jsx(L,{disableRipple:!0,color:"inherit",endIcon:e.jsx(N,{color:"error",variant:"dot",invisible:!a,children:e.jsx(u,{icon:"ic:round-filter-list"})}),onClick:i,children:"Filters"}),e.jsxs(re,{anchor:"right",open:s,onClose:d,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:280}},children:[h,e.jsx(G,{}),e.jsx(ie,{sx:{px:2.5,py:3},children:e.jsxs(b,{spacing:3,children:[v,T,Y,$,U]})})]})]})}function Fe({filters:s,onFilters:i,canReset:d,onResetFilters:l,results:o,...a}){const j=t=>{const x=s.employmentTypes.filter(y=>y!==t);i("employmentTypes",x)},c=()=>{i("experience","all")},r=t=>{const x=s.roles.filter(y=>y!==t);i("role",x)},p=t=>{const x=s.locations.filter(y=>y!==t);i("locations",x)},g=t=>{const x=s.benefits.filter(y=>y!==t);i("benefits",x)};return e.jsxs(b,{spacing:1.5,...a,children:[e.jsxs(S,{sx:{typography:"body2"},children:[e.jsx("strong",{children:o}),e.jsx(S,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(b,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!s.employmentTypes.length&&e.jsx(I,{label:"Employment Types:",children:s.employmentTypes.map(t=>e.jsx(O,{label:t,size:"small",onDelete:()=>j(t)},t))}),s.experience!=="all"&&e.jsx(I,{label:"Experience:",children:e.jsx(O,{size:"small",label:s.experience,onDelete:c})}),!!s.roles.length&&e.jsx(I,{label:"Roles:",children:s.roles.map(t=>e.jsx(O,{label:t,size:"small",onDelete:()=>r(t)},t))}),!!s.locations.length&&e.jsx(I,{label:"Locations:",children:s.locations.map(t=>e.jsx(O,{label:t,size:"small",onDelete:()=>p(t)},t))}),!!s.benefits.length&&e.jsx(I,{label:"Benefits:",children:s.benefits.map(t=>e.jsx(O,{label:t,size:"small",onDelete:()=>g(t)},t))}),d&&e.jsx(L,{color:"error",onClick:l,startIcon:e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}function I({label:s,children:i,sx:d,...l}){return e.jsxs(b,{component:ce,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...d},...l,children:[e.jsx(S,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(b,{spacing:1,direction:"row",flexWrap:"wrap",children:i})]})}const W={roles:[],locations:[],benefits:[],experience:"all",employmentTypes:[]};function Je(){const s=de(),i=pe(),[d,l]=m.useState("latest"),[o,a]=m.useState({query:"",results:[]}),[j,c]=m.useState(W),r=We({inputData:z,filters:j,sortBy:d}),p=!xe(W,j),g=!r.length&&p,t=m.useCallback((h,v)=>{c(T=>({...T,[h]:v}))},[]),x=m.useCallback(()=>{c(W)},[]),y=m.useCallback(h=>{l(h)},[]),k=m.useCallback(h=>{if(a(v=>({...v,query:h})),h){const v=z.filter(T=>T.title.toLowerCase().indexOf(o.query.toLowerCase())!==-1);a(T=>({...T,results:v}))}},[o.query]),B=e.jsxs(b,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[e.jsx(Be,{query:o.query,results:o.results,onSearch:k,hrefItem:h=>w.dashboard.job.details(h)}),e.jsxs(b,{direction:"row",spacing:1,flexShrink:0,children:[e.jsx(Pe,{open:i.value,onOpen:i.onTrue,onClose:i.onFalse,filters:j,onFilters:t,canReset:p,onResetFilters:x,locationOptions:he.map(h=>h.label),roleOptions:me,benefitOptions:be.map(h=>h.label),experienceOptions:["all",...ue.map(h=>h.label)],employmentTypeOptions:je.map(h=>h.label)}),e.jsx(Le,{sort:d,onSort:y,sortOptions:ye})]})]}),P=e.jsx(Fe,{filters:j,onResetFilters:x,canReset:p,onFilters:t,results:r.length});return e.jsxs(fe,{maxWidth:s.themeStretch?!1:"lg",children:[e.jsx(ge,{heading:"List",links:[{name:"Dashboard",href:w.dashboard.root},{name:"Job",href:w.dashboard.job.root},{name:"List"}],action:e.jsx(L,{component:V,href:w.dashboard.job.new,variant:"contained",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),children:"New Job"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(b,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[B,p&&P]}),g&&e.jsx(ke,{filled:!0,title:"No Data",sx:{py:10}}),e.jsx(Re,{jobs:r})]})}const We=({inputData:s,filters:i,sortBy:d})=>{const{employmentTypes:l,experience:o,roles:a,locations:j,benefits:c}=i;return d==="latest"&&(s=F(s,["createdAt"],["desc"])),d==="oldest"&&(s=F(s,["createdAt"],["asc"])),d==="popular"&&(s=F(s,["totalViews"],["desc"])),l.length&&(s=s.filter(r=>r.employmentTypes.some(p=>l.includes(p)))),o!=="all"&&(s=s.filter(r=>r.experience===o)),a.length&&(s=s.filter(r=>a.includes(r.role))),j.length&&(s=s.filter(r=>r.locations.some(p=>j.includes(p)))),c.length&&(s=s.filter(r=>r.benefits.some(p=>c.includes(p)))),s};function ss(){return e.jsxs(e.Fragment,{children:[e.jsx(Ce,{children:e.jsx("title",{children:" Dashboard: Job List"})}),e.jsx(Je,{})]})}export{ss as default};
