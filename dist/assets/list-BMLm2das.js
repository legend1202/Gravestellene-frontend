import{b0 as _,j as e,S as x,B as k,g as Y,bo as Z,L as ee,R as H,p as w,c as A,d as g,b1 as $,b2 as E,e as M,r as m,i as B,b3 as se,b4 as te,I as ne,b5 as re,b6 as oe,A as F,T,a9 as z,aa as ae,D as ie,q as le,ab as ce,v as de,h as pe,b as he,dJ as xe,eg as U,ef as me,ej as ue,cM as be,ek as je,C as ge,dL as fe,H as ve}from"./index-tv0ZIiTC.js";import{o as G}from"./orderBy-2iIA81l_.js";import{E as Ce}from"./empty-content-a0ZHI6oX.js";import{C as ye}from"./custom-breadcrumbs-wU-A5DZv.js";import{f as q}from"./format-number-BH3VEnKN.js";import{I as W}from"./image-tVn7ll4O.js";import{s as K}from"./utils-DptvEvRx.js";import{C as we}from"./Card-fEhE4FGy.js";import{P as ke,p as Se}from"./Pagination-qt3os8vb.js";import{A as J}from"./Autocomplete-J0YW4wEt.js";import{T as Q}from"./TextField-MR0F-eFr.js";import{C as Te}from"./country-select-42NXEIlb.js";import{D as N}from"./DatePicker-nMFdeaFx.js";import{C as P}from"./Chip-EkmsCEpD.js";import{F as De}from"./FormControlLabel-SC4RdDd1.js";import{C as Ie}from"./Checkbox-KewZpZB7.js";import"./index.esm-VBvqitsX.js";import"./mui-one-time-password-input.es-YbC1owsP.js";import"./styles-9eCz8YsQ.js";import"./styles-Pl_iOln8.js";import"./_baseToString-oTyNAALA.js";import"./_baseIteratee-VSoSbk_2.js";import"./_baseEach-u1IbIKlH.js";import"./FirstPage-sFACmvNK.js";import"./Close--UPeKSTc.js";import"./index-D-rNU0hp.js";import"./DialogActions-C1UtG1Hl.js";import"./ListItem-c4OVPCIE.js";import"./DialogContent-l4Y2lTg9.js";import"./dialogTitleClasses-47Jk6PmQ.js";import"./SwitchBase-13kQQb6r.js";function Re({tour:s,onView:i,onEdit:p,onDelete:o}){const n=_(),{id:l,name:h,price:c,images:a,bookers:u,createdAt:d,available:r,priceSale:b,destination:f,ratingNumber:D}=s,I=K(r.startDate,r.endDate),R=e.jsxs(x,{direction:"row",alignItems:"center",sx:{top:8,right:8,zIndex:9,borderRadius:1,position:"absolute",p:"2px 6px 2px 4px",typography:"subtitle2",bgcolor:"warning.lighter"},children:[e.jsx(g,{icon:"eva:star-fill",sx:{color:"warning.main",mr:.25}})," ",D]}),O=e.jsxs(x,{direction:"row",alignItems:"center",sx:{top:8,left:8,zIndex:9,borderRadius:1,bgcolor:"grey.800",position:"absolute",p:"2px 6px 2px 4px",color:"common.white",typography:"subtitle2"},children:[!!b&&e.jsx(k,{component:"span",sx:{color:"grey.500",mr:.25,textDecoration:"line-through"},children:q(b)}),q(c)]}),j=e.jsxs(x,{spacing:.5,direction:"row",sx:{p:t=>t.spacing(1,1,0,1)},children:[e.jsxs(x,{flexGrow:1,sx:{position:"relative"},children:[O,R,e.jsx(W,{alt:a[0],src:a[0],sx:{borderRadius:1,height:164,width:1}})]}),e.jsxs(x,{spacing:.5,children:[e.jsx(W,{alt:a[1],src:a[1],ratio:"1/1",sx:{borderRadius:1,width:80}}),e.jsx(W,{alt:a[2],src:a[2],ratio:"1/1",sx:{borderRadius:1,width:80}})]})]}),C=e.jsx(Y,{sx:{p:t=>t.spacing(2.5,2.5,2,2.5)},primary:`Posted date: ${Z(d)}`,secondary:e.jsx(ee,{component:H,href:w.dashboard.tour.details(l),color:"inherit",children:h}),primaryTypographyProps:{typography:"caption",color:"text.disabled"},secondaryTypographyProps:{mt:1,noWrap:!0,component:"span",color:"text.primary",typography:"subtitle1"}}),y=e.jsxs(x,{spacing:1.5,sx:{position:"relative",p:t=>t.spacing(0,2.5,2.5,2.5)},children:[e.jsx(A,{onClick:n.onOpen,sx:{position:"absolute",bottom:20,right:8},children:e.jsx(g,{icon:"eva:more-vertical-fill"})}),[{label:f,icon:e.jsx(g,{icon:"mingcute:location-fill",sx:{color:"error.main"}})},{label:I,icon:e.jsx(g,{icon:"solar:clock-circle-bold",sx:{color:"info.main"}})},{label:`${u.length} Booked`,icon:e.jsx(g,{icon:"solar:users-group-rounded-bold",sx:{color:"primary.main"}})}].map(t=>e.jsxs(x,{spacing:1,direction:"row",alignItems:"center",sx:{typography:"body2"},children:[t.icon,t.label]},t.label))]});return e.jsxs(e.Fragment,{children:[e.jsxs(we,{children:[j,C,y]}),e.jsxs($,{open:n.open,onClose:n.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(E,{onClick:()=>{n.onClose(),i()},children:[e.jsx(g,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(E,{onClick:()=>{n.onClose(),p()},children:[e.jsx(g,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(E,{onClick:()=>{n.onClose(),o()},sx:{color:"error.main"},children:[e.jsx(g,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}function Oe({tours:s}){const i=M(),p=m.useCallback(l=>{i.push(w.dashboard.tour.details(l))},[i]),o=m.useCallback(l=>{i.push(w.dashboard.tour.edit(l))},[i]),n=m.useCallback(l=>{console.info("DELETE",l)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(k,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(l=>e.jsx(Re,{tour:l,onView:()=>p(l.id),onEdit:()=>o(l.id),onDelete:()=>n(l.id)},l.id))}),s.length>8&&e.jsx(ke,{count:8,sx:{mt:8,[`& .${Se.ul}`]:{justifyContent:"center"}}})]})}function Pe({sort:s,onSort:i,sortOptions:p}){const o=_();return e.jsxs(e.Fragment,{children:[e.jsxs(B,{disableRipple:!0,color:"inherit",onClick:o.onOpen,endIcon:e.jsx(g,{icon:o.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold"},children:["Sort By:",e.jsx(k,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold",textTransform:"capitalize"},children:s})]}),e.jsx($,{open:o.open,onClose:o.onClose,sx:{width:140},children:p.map(n=>e.jsx(E,{selected:n.value===s,onClick:()=>{o.onClose(),i(n.value)},children:n.label},n.value))})]})}function Le({query:s,results:i,onSearch:p,hrefItem:o}){const n=M(),l=c=>{n.push(o(c))},h=c=>{if(s&&c.key==="Enter"){const a=i.filter(u=>u.name===s)[0];l(a.id)}};return e.jsx(J,{sx:{width:{xs:1,sm:260}},autoHighlight:!0,popupIcon:null,options:i,onInputChange:(c,a)=>p(a),getOptionLabel:c=>c.name,noOptionsText:e.jsx(se,{query:s,sx:{bgcolor:"unset"}}),isOptionEqualToValue:(c,a)=>c.id===a.id,slotProps:{popper:{placement:"bottom-start",sx:{minWidth:320}},paper:{sx:{[` .${te.option}`]:{pl:.75}}}},renderInput:c=>e.jsx(Q,{...c,placeholder:"Search...",onKeyUp:h,InputProps:{...c.InputProps,startAdornment:e.jsx(ne,{position:"start",children:e.jsx(g,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})})}}),renderOption:(c,a,{inputValue:u})=>{const d=re(a.name,u),r=oe(a.name,d);return m.createElement(k,{component:"li",...c,onClick:()=>l(a.id),key:a.id},e.jsx(F,{alt:a.name,src:a.images[0],variant:"rounded",sx:{width:48,height:48,flexShrink:0,mr:1.5,borderRadius:1}},a.id),e.jsx("div",{children:r.map((b,f)=>e.jsx(T,{component:"span",color:b.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:b.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:b.text},f))},u))}})}function Ee({open:s,onOpen:i,onClose:p,filters:o,onFilters:n,canReset:l,onResetFilters:h,destinationOptions:c,tourGuideOptions:a,serviceOptions:u,dateError:d}){const r=m.useCallback(t=>{const v=o.services.includes(t)?o.services.filter(S=>S!==t):[...o.services,t];n("services",v)},[o.services,n]),b=m.useCallback(t=>{n("startDate",t)},[n]),f=m.useCallback(t=>{n("endDate",t)},[n]),D=m.useCallback(t=>{n("destination",t)},[n]),I=m.useCallback(t=>{n("tourGuides",t)},[n]),R=e.jsxs(x,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(T,{variant:"h6",sx:{flexGrow:1},children:"Filters"}),e.jsx(ce,{title:"Reset",children:e.jsx(A,{onClick:h,children:e.jsx(z,{color:"error",variant:"dot",invisible:!l,children:e.jsx(g,{icon:"solar:restart-bold"})})})}),e.jsx(A,{onClick:p,children:e.jsx(g,{icon:"mingcute:close-line"})})]}),O=e.jsxs(x,{children:[e.jsx(T,{variant:"subtitle2",sx:{mb:1.5},children:"Durations"}),e.jsxs(x,{spacing:2.5,children:[e.jsx(N,{label:"Start date",value:o.startDate,onChange:b}),e.jsx(N,{label:"End date",value:o.endDate,onChange:f,slotProps:{textField:{error:d,helperText:d&&"End date must be later than start date"}}})]})]}),j=e.jsxs(x,{children:[e.jsx(T,{variant:"subtitle2",sx:{mb:1.5},children:"Destination"}),e.jsx(Te,{placeholder:o.destination.length?"+ Destination":"Select Destination",fullWidth:!0,multiple:!0,value:o.destination,onChange:(t,v)=>D(v),options:c,getOptionLabel:t=>t})]}),C=e.jsxs(x,{children:[e.jsx(T,{variant:"subtitle2",sx:{mb:1.5},children:"Tour Guide"}),e.jsx(J,{multiple:!0,disableCloseOnSelect:!0,options:a,value:o.tourGuides,onChange:(t,v)=>I(v),getOptionLabel:t=>t.name,renderInput:t=>e.jsx(Q,{placeholder:"Select Tour Guides",...t}),renderOption:(t,v)=>m.createElement("li",{...t,key:v.id},e.jsx(F,{alt:v.avatarUrl,src:v.avatarUrl,sx:{width:24,height:24,flexShrink:0,mr:1}},v.id),v.name),renderTags:(t,v)=>t.map((S,X)=>m.createElement(P,{...v({index:X}),key:S.id,size:"small",variant:"soft",label:S.name,avatar:e.jsx(F,{alt:S.name,src:S.avatarUrl})}))})]}),y=e.jsxs(x,{children:[e.jsx(T,{variant:"subtitle2",sx:{mb:1},children:"Services"}),u.map(t=>e.jsx(De,{control:e.jsx(Ie,{checked:o.services.includes(t),onClick:()=>r(t)}),label:t},t))]});return e.jsxs(e.Fragment,{children:[e.jsx(B,{disableRipple:!0,color:"inherit",endIcon:e.jsx(z,{color:"error",variant:"dot",invisible:!l,children:e.jsx(g,{icon:"ic:round-filter-list"})}),onClick:i,children:"Filters"}),e.jsxs(ae,{anchor:"right",open:s,onClose:p,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:280}},children:[R,e.jsx(ie,{}),e.jsx(le,{sx:{px:2.5,py:3},children:e.jsxs(x,{spacing:3,children:[O,j,C,y]})})]})]})}function Fe({filters:s,onFilters:i,canReset:p,onResetFilters:o,results:n,...l}){const h=K(s.startDate,s.endDate),c=r=>{const b=s.services.filter(f=>f!==r);i("services",b)},a=()=>{i("startDate",null),i("endDate",null)},u=r=>{const b=s.tourGuides.filter(f=>f.name!==r.name);i("tourGuides",b)},d=r=>{const b=s.destination.filter(f=>f!==r);i("destination",b)};return e.jsxs(x,{spacing:1.5,...l,children:[e.jsxs(k,{sx:{typography:"body2"},children:[e.jsx("strong",{children:n}),e.jsx(k,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(x,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[s.startDate&&s.endDate&&e.jsx(L,{label:"Available:",children:e.jsx(P,{size:"small",label:h,onDelete:a})}),!!s.services.length&&e.jsx(L,{label:"Services:",children:s.services.map(r=>e.jsx(P,{label:r,size:"small",onDelete:()=>c(r)},r))}),!!s.tourGuides.length&&e.jsx(L,{label:"Tour guide:",children:s.tourGuides.map(r=>e.jsx(P,{size:"small",avatar:e.jsx(F,{alt:r.name,src:r.avatarUrl}),label:r.name,onDelete:()=>u(r)},r.id))}),!!s.destination.length&&e.jsx(L,{label:"Destination:",children:s.destination.map(r=>e.jsx(P,{label:r,size:"small",onDelete:()=>d(r)},r))}),p&&e.jsx(B,{color:"error",onClick:o,startIcon:e.jsx(g,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}function L({label:s,children:i,sx:p,...o}){return e.jsxs(x,{component:de,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...p},...o,children:[e.jsx(k,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(x,{spacing:1,direction:"row",flexWrap:"wrap",children:i})]})}const V={destination:[],tourGuides:[],services:[],startDate:null,endDate:null};function Be(){const s=pe(),i=he(),[p,o]=m.useState("latest"),[n,l]=m.useState({query:"",results:[]}),[h,c]=m.useState(V),a=xe(h.startDate,h.endDate),u=Ge({inputData:U,filters:h,sortBy:p,dateError:a}),d=!!h.destination.length||!!h.tourGuides.length||!!h.services.length||!!h.startDate&&!!h.endDate,r=!u.length&&d,b=m.useCallback((j,C)=>{c(y=>({...y,[j]:C}))},[]),f=m.useCallback(()=>{c(V)},[]),D=m.useCallback(j=>{o(j)},[]),I=m.useCallback(j=>{if(l(C=>({...C,query:j})),j){const C=U.filter(y=>y.name.toLowerCase().indexOf(n.query.toLowerCase())!==-1);l(y=>({...y,results:C}))}},[n.query]),R=e.jsxs(x,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[e.jsx(Le,{query:n.query,results:n.results,onSearch:I,hrefItem:j=>w.dashboard.tour.details(j)}),e.jsxs(x,{direction:"row",spacing:1,flexShrink:0,children:[e.jsx(Ee,{open:i.value,onOpen:i.onTrue,onClose:i.onFalse,filters:h,onFilters:b,canReset:d,onResetFilters:f,serviceOptions:me.map(j=>j.label),tourGuideOptions:ue,destinationOptions:be.map(j=>j.label),dateError:a}),e.jsx(Pe,{sort:p,onSort:D,sortOptions:je})]})]}),O=e.jsx(Fe,{filters:h,onResetFilters:f,canReset:d,onFilters:b,results:u.length});return e.jsxs(ge,{maxWidth:s.themeStretch?!1:"lg",children:[e.jsx(ye,{heading:"List",links:[{name:"Dashboard",href:w.dashboard.root},{name:"Tour",href:w.dashboard.tour.root},{name:"List"}],action:e.jsx(B,{component:H,href:w.dashboard.tour.new,variant:"contained",startIcon:e.jsx(g,{icon:"mingcute:add-line"}),children:"New Tour"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(x,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[R,d&&O]}),r&&e.jsx(Ce,{title:"No Data",filled:!0,sx:{py:10}}),e.jsx(Oe,{tours:u})]})}const Ge=({inputData:s,filters:i,sortBy:p,dateError:o})=>{const{services:n,destination:l,startDate:h,endDate:c,tourGuides:a}=i,u=a.map(d=>d.id);return p==="latest"&&(s=G(s,["createdAt"],["desc"])),p==="oldest"&&(s=G(s,["createdAt"],["asc"])),p==="popular"&&(s=G(s,["totalViews"],["desc"])),l.length&&(s=s.filter(d=>l.includes(d.destination))),u.length&&(s=s.filter(d=>d.tourGuides.some(r=>u.includes(r.id)))),n.length&&(s=s.filter(d=>d.services.some(r=>n.includes(r)))),o||h&&c&&(s=s.filter(d=>fe(h,d.available.startDate,d.available.endDate))),s};function ms(){return e.jsxs(e.Fragment,{children:[e.jsx(ve,{children:e.jsx("title",{children:" Dashboard: Tour List"})}),e.jsx(Be,{})]})}export{ms as default};
