import{aX as q,j as e,c as _,d as u,S as b,A as D,g as Q,L as ee,R as V,p as w,aP as se,D as H,B as S,T as C,aY as M,aZ as R,e as G,r as m,i as L,a_ as ne,I as oe,b0 as te,b1 as le,a5 as N,a6 as re,l as ie,a7 as ae,n as ce,h as de,b as pe,a9 as xe,e2 as A,cJ as he,dZ as me,e5 as be,e6 as ue,e7 as je,e8 as ye,C as fe,H as ge}from"./index-0ZRfM3mG.js";import{o as F}from"./orderBy-wNzuQ2aY.js";import{E as Ce}from"./empty-content--YCbbkiR.js";import{C as ke}from"./custom-breadcrumbs-sO1B0Nzy.js";import{f as Te}from"./format-number-eXbYiZkA.js";import{C as ve}from"./Card-pac-bk-l.js";import{P as we,p as Se}from"./Pagination-gwvhsUKk.js";import{A as Y}from"./Autocomplete-b6vdn5ff.js";import{T as K}from"./TextField-bYtDKJ1u.js";import{C as Ee}from"./country-select-SVVszg4T.js";import{F as J}from"./FormControlLabel-N_o6rvk2.js";import{C as z}from"./Checkbox-fx96uTSf.js";import{R as Oe}from"./Radio-d3vKI_9n.js";import{C as O}from"./Chip-Z-_k_k73.js";import"./index.esm-G9SoUoJo.js";import"./image-PdFD2BG8.js";import"./mui-one-time-password-input.es-QlRnB43f.js";import"./styles-HNTfg28z.js";import"./styles-1A-IYQki.js";import"./_baseToString-YYCBw-vh.js";import"./_baseIteratee-7BTfqYPy.js";import"./_baseEach-NqZjhfht.js";import"./FirstPage-9OsAYRHm.js";import"./Close-ceJClZw0.js";import"./SwitchBase-Tu1cRIcg.js";function Ie({job:s,onView:i,onEdit:d,onDelete:t}){const o=q(),{id:a,title:j,company:c,createdAt:r,candidates:p,experience:g,employmentTypes:l,salary:x,role:y}=s;return e.jsxs(e.Fragment,{children:[e.jsxs(ve,{children:[e.jsx(_,{onClick:o.onOpen,sx:{position:"absolute",top:8,right:8},children:e.jsx(u,{icon:"eva:more-vertical-fill"})}),e.jsxs(b,{sx:{p:3,pb:2},children:[e.jsx(D,{alt:c.name,src:c.logo,variant:"rounded",sx:{width:48,height:48,mb:2}}),e.jsx(Q,{sx:{mb:1},primary:e.jsx(ee,{component:V,href:w.dashboard.job.details(a),color:"inherit",children:j}),secondary:`Posted date: ${se(r)}`,primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{mt:1,component:"span",typography:"caption",color:"text.disabled"}}),e.jsxs(b,{spacing:.5,direction:"row",alignItems:"center",sx:{color:"primary.main",typography:"caption"},children:[e.jsx(u,{width:16,icon:"solar:users-group-rounded-bold"}),p.length," Candidates"]})]}),e.jsx(H,{sx:{borderStyle:"dashed"}}),e.jsx(S,{rowGap:1.5,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{p:3},children:[{label:g,icon:e.jsx(u,{width:16,icon:"carbon:skill-level-basic",sx:{flexShrink:0}})},{label:l.join(", "),icon:e.jsx(u,{width:16,icon:"solar:clock-circle-bold",sx:{flexShrink:0}})},{label:x.negotiable?"Negotiable":Te(x.price),icon:e.jsx(u,{width:16,icon:"solar:wad-of-money-bold",sx:{flexShrink:0}})},{label:y,icon:e.jsx(u,{width:16,icon:"solar:user-rounded-bold",sx:{flexShrink:0}})}].map(k=>e.jsxs(b,{spacing:.5,flexShrink:0,direction:"row",alignItems:"center",sx:{color:"text.disabled",minWidth:0},children:[k.icon,e.jsx(C,{variant:"caption",noWrap:!0,children:k.label})]},k.label))})]}),e.jsxs(M,{open:o.open,onClose:o.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(R,{onClick:()=>{o.onClose(),i()},children:[e.jsx(u,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(R,{onClick:()=>{o.onClose(),d()},children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(R,{onClick:()=>{o.onClose(),t()},sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}function Re({jobs:s}){const i=G(),d=m.useCallback(a=>{i.push(w.dashboard.job.details(a))},[i]),t=m.useCallback(a=>{i.push(w.dashboard.job.edit(a))},[i]),o=m.useCallback(a=>{console.info("DELETE",a)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(a=>e.jsx(Ie,{job:a,onView:()=>d(a.id),onEdit:()=>t(a.id),onDelete:()=>o(a.id)},a.id))}),s.length>8&&e.jsx(we,{count:8,sx:{mt:8,[`& .${Se.ul}`]:{justifyContent:"center"}}})]})}function Le({sort:s,onSort:i,sortOptions:d}){const t=q();return e.jsxs(e.Fragment,{children:[e.jsxs(L,{disableRipple:!0,color:"inherit",onClick:t.onOpen,endIcon:e.jsx(u,{icon:t.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold"},children:["Sort By:",e.jsx(S,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold",textTransform:"capitalize"},children:s})]}),e.jsx(M,{open:t.open,onClose:t.onClose,sx:{width:140},children:d.map(o=>e.jsx(R,{selected:o.value===s,onClick:()=>{t.onClose(),i(o.value)},children:o.label},o.value))})]})}function Be({query:s,results:i,onSearch:d,hrefItem:t}){const o=G(),a=c=>{o.push(t(c))},j=c=>{if(s&&c.key==="Enter"){const r=i.filter(p=>p.title===s)[0];a(r.id)}};return e.jsx(Y,{sx:{width:{xs:1,sm:260}},autoHighlight:!0,popupIcon:null,options:i,onInputChange:(c,r)=>d(r),getOptionLabel:c=>c.title,noOptionsText:e.jsx(ne,{query:s,sx:{bgcolor:"unset"}}),isOptionEqualToValue:(c,r)=>c.id===r.id,renderInput:c=>e.jsx(K,{...c,placeholder:"Search...",onKeyUp:j,InputProps:{...c.InputProps,startAdornment:e.jsx(oe,{position:"start",children:e.jsx(u,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})})}}),renderOption:(c,r,{inputValue:p})=>{const g=te(r.title,p),l=le(r.title,g);return m.createElement(S,{component:"li",...c,onClick:()=>a(r.id),key:r.id},e.jsx("div",{children:l.map((x,y)=>e.jsx(C,{component:"span",color:x.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:x.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:x.text},y))}))}})}function Pe({open:s,onOpen:i,onClose:d,filters:t,onFilters:o,canReset:a,onResetFilters:j,roleOptions:c,locationOptions:r,benefitOptions:p,experienceOptions:g,employmentTypeOptions:l}){const x=m.useCallback(n=>{const f=t.employmentTypes.includes(n)?t.employmentTypes.filter(E=>E!==n):[...t.employmentTypes,n];o("employmentTypes",f)},[t.employmentTypes,o]),y=m.useCallback(n=>{o("experience",n)},[o]),k=m.useCallback(n=>{o("roles",n)},[o]),B=m.useCallback(n=>{o("locations",n)},[o]),P=m.useCallback(n=>{const f=t.benefits.includes(n)?t.benefits.filter(E=>E!==n):[...t.benefits,n];o("benefits",f)},[t.benefits,o]),h=e.jsxs(b,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(C,{variant:"h6",sx:{flexGrow:1},children:"Filters"}),e.jsx(ae,{title:"Reset",children:e.jsx(_,{onClick:j,children:e.jsx(N,{color:"error",variant:"dot",invisible:!a,children:e.jsx(u,{icon:"solar:restart-bold"})})})}),e.jsx(_,{onClick:d,children:e.jsx(u,{icon:"mingcute:close-line"})})]}),T=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1},children:"Employment Types"}),l.map(n=>e.jsx(J,{control:e.jsx(z,{checked:t.employmentTypes.includes(n),onClick:()=>x(n)}),label:n},n))]}),v=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1},children:"Experience"}),g.map(n=>e.jsx(J,{control:e.jsx(Oe,{checked:n===t.experience,onClick:()=>y(n)}),label:n,sx:{...n==="all"&&{textTransform:"capitalize"}}},n))]}),U=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1.5},children:"Roles"}),e.jsx(Y,{multiple:!0,disableCloseOnSelect:!0,options:c.map(n=>n),getOptionLabel:n=>n,value:t.roles,onChange:(n,f)=>k(f),renderInput:n=>e.jsx(K,{placeholder:"Select Roles",...n}),renderOption:(n,f)=>m.createElement("li",{...n,key:f},f),renderTags:(n,f)=>n.map((E,$)=>m.createElement(O,{...f({index:$}),key:E,label:E,size:"small",variant:"soft"}))})]}),X=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1.5},children:"Locations"}),e.jsx(Ee,{placeholder:t.locations.length?"+ Locations":"Select Locations",fullWidth:!0,multiple:!0,value:t.locations,onChange:(n,f)=>B(f),options:r,getOptionLabel:n=>n})]}),Z=e.jsxs(b,{children:[e.jsx(C,{variant:"subtitle2",sx:{mb:1},children:"Benefits"}),p.map(n=>e.jsx(J,{control:e.jsx(z,{checked:t.benefits.includes(n),onClick:()=>P(n)}),label:n},n))]});return e.jsxs(e.Fragment,{children:[e.jsx(L,{disableRipple:!0,color:"inherit",endIcon:e.jsx(N,{color:"error",variant:"dot",invisible:!a,children:e.jsx(u,{icon:"ic:round-filter-list"})}),onClick:i,children:"Filters"}),e.jsxs(re,{anchor:"right",open:s,onClose:d,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:280}},children:[h,e.jsx(H,{}),e.jsx(ie,{sx:{px:2.5,py:3},children:e.jsxs(b,{spacing:3,children:[T,v,U,X,Z]})})]})]})}function Fe({filters:s,onFilters:i,canReset:d,onResetFilters:t,results:o,...a}){const j=l=>{const x=s.employmentTypes.filter(y=>y!==l);i("employmentTypes",x)},c=()=>{i("experience","all")},r=l=>{const x=s.roles.filter(y=>y!==l);i("role",x)},p=l=>{const x=s.locations.filter(y=>y!==l);i("locations",x)},g=l=>{const x=s.benefits.filter(y=>y!==l);i("benefits",x)};return e.jsxs(b,{spacing:1.5,...a,children:[e.jsxs(S,{sx:{typography:"body2"},children:[e.jsx("strong",{children:o}),e.jsx(S,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(b,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!s.employmentTypes.length&&e.jsx(I,{label:"Employment Types:",children:s.employmentTypes.map(l=>e.jsx(O,{label:l,size:"small",onDelete:()=>j(l)},l))}),s.experience!=="all"&&e.jsx(I,{label:"Experience:",children:e.jsx(O,{size:"small",label:s.experience,onDelete:c})}),!!s.roles.length&&e.jsx(I,{label:"Roles:",children:s.roles.map(l=>e.jsx(O,{label:l,size:"small",onDelete:()=>r(l)},l))}),!!s.locations.length&&e.jsx(I,{label:"Locations:",children:s.locations.map(l=>e.jsx(O,{label:l,size:"small",onDelete:()=>p(l)},l))}),!!s.benefits.length&&e.jsx(I,{label:"Benefits:",children:s.benefits.map(l=>e.jsx(O,{label:l,size:"small",onDelete:()=>g(l)},l))}),d&&e.jsx(L,{color:"error",onClick:t,startIcon:e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}function I({label:s,children:i,sx:d,...t}){return e.jsxs(b,{component:ce,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...d},...t,children:[e.jsx(S,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(b,{spacing:1,direction:"row",flexWrap:"wrap",children:i})]})}const W={roles:[],locations:[],benefits:[],experience:"all",employmentTypes:[]};function Je(){const s=de(),i=pe(),[d,t]=m.useState("latest"),[o,a]=m.useState({query:"",results:[]}),[j,c]=m.useState(W),r=We({inputData:A,filters:j,sortBy:d}),p=!xe(W,j),g=!r.length&&p,l=m.useCallback((h,T)=>{c(v=>({...v,[h]:T}))},[]),x=m.useCallback(()=>{c(W)},[]),y=m.useCallback(h=>{t(h)},[]),k=m.useCallback(h=>{if(a(T=>({...T,query:h})),h){const T=A.filter(v=>v.title.toLowerCase().indexOf(o.query.toLowerCase())!==-1);a(v=>({...v,results:T}))}},[o.query]),B=e.jsxs(b,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[e.jsx(Be,{query:o.query,results:o.results,onSearch:k,hrefItem:h=>w.dashboard.job.details(h)}),e.jsxs(b,{direction:"row",spacing:1,flexShrink:0,children:[e.jsx(Pe,{open:i.value,onOpen:i.onTrue,onClose:i.onFalse,filters:j,onFilters:l,canReset:p,onResetFilters:x,locationOptions:he.map(h=>h.label),roleOptions:me,benefitOptions:be.map(h=>h.label),experienceOptions:["all",...ue.map(h=>h.label)],employmentTypeOptions:je.map(h=>h.label)}),e.jsx(Le,{sort:d,onSort:y,sortOptions:ye})]})]}),P=e.jsx(Fe,{filters:j,onResetFilters:x,canReset:p,onFilters:l,results:r.length});return e.jsxs(fe,{maxWidth:s.themeStretch?!1:"lg",children:[e.jsx(ke,{heading:"List",links:[{name:"Dashboard",href:w.dashboard.root},{name:"Job",href:w.dashboard.job.root},{name:"List"}],action:e.jsx(L,{component:V,href:w.dashboard.job.new,variant:"contained",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),children:"New Job"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(b,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[B,p&&P]}),g&&e.jsx(Ce,{filled:!0,title:"No Data",sx:{py:10}}),e.jsx(Re,{jobs:r})]})}const We=({inputData:s,filters:i,sortBy:d})=>{const{employmentTypes:t,experience:o,roles:a,locations:j,benefits:c}=i;return d==="latest"&&(s=F(s,["createdAt"],["desc"])),d==="oldest"&&(s=F(s,["createdAt"],["asc"])),d==="popular"&&(s=F(s,["totalViews"],["desc"])),t.length&&(s=s.filter(r=>r.employmentTypes.some(p=>t.includes(p)))),o!=="all"&&(s=s.filter(r=>r.experience===o)),a.length&&(s=s.filter(r=>a.includes(r.role))),j.length&&(s=s.filter(r=>r.locations.some(p=>j.includes(p)))),c.length&&(s=s.filter(r=>r.benefits.some(p=>c.includes(p)))),s};function as(){return e.jsxs(e.Fragment,{children:[e.jsx(ge,{children:e.jsx("title",{children:" Dashboard: Job List"})}),e.jsx(Je,{})]})}export{as as default};
