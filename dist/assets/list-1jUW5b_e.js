import{bi as _,j as e,S as x,B as k,aY as G,m as Q,bG as Z,L as ee,R as $,p as w,g as A,h as g,v as se,bj as H,bk as E,k as K,r as u,t as B,bl as te,bm as ne,M,I as re,bn as oe,bo as ae,n as L,T,aq as U,ar as ie,K as le,N as ce,as as de,X as he,q as pe,b as xe,d$ as ue,eC as z,eB as me,eF as je,cU as be,eG as ge,C as ve,s as fe,e1 as Ce,H as ye}from"./index-HNXcBFmK.js";import{o as W}from"./orderBy-qj-3AKgd.js";import{E as we}from"./empty-content-U1gD0OQx.js";import{f as q}from"./format-number-CyLv55jy.js";import{s as X}from"./utils-GRjn_MD6.js";import{P as ke,p as Se}from"./Pagination-_e_R5hex.js";import{A as Y}from"./Autocomplete-GN7x_yCw.js";import{C as Te}from"./country-select-9ZxrqYPJ.js";import{D as N}from"./DatePicker-8wVTWTxc.js";import{C as P}from"./Chip-3avuppyl.js";import{F as De}from"./FormControlLabel-lt5zSUTX.js";import{C as Ie}from"./Checkbox-Ym_NGexD.js";import"./styles-YnmLUlb4.js";import"./_baseToString-9_B3_dNw.js";import"./_baseIteratee-Jya-825R.js";import"./_baseEach-ryiSa7WG.js";import"./FirstPage-YanvF_fQ.js";import"./index-D8YE_QsH.js";import"./DialogActions-LK-BktfY.js";import"./ListItem-cpog5qFZ.js";import"./DialogContent-TegZmxqz.js";import"./dialogTitleClasses-6FDEkIU1.js";import"./SwitchBase-jg6lkq6c.js";function Re({tour:s,onView:i,onEdit:h,onDelete:o}){const n=_(),{id:l,name:p,price:c,images:a,bookers:m,createdAt:d,available:r,priceSale:j,destination:v,ratingNumber:D}=s,I=X(r.startDate,r.endDate),R=e.jsxs(x,{direction:"row",alignItems:"center",sx:{top:8,right:8,zIndex:9,borderRadius:1,position:"absolute",p:"2px 6px 2px 4px",typography:"subtitle2",bgcolor:"warning.lighter"},children:[e.jsx(g,{icon:"eva:star-fill",sx:{color:"warning.main",mr:.25}})," ",D]}),O=e.jsxs(x,{direction:"row",alignItems:"center",sx:{top:8,left:8,zIndex:9,borderRadius:1,bgcolor:"grey.800",position:"absolute",p:"2px 6px 2px 4px",color:"common.white",typography:"subtitle2"},children:[!!j&&e.jsx(k,{component:"span",sx:{color:"grey.500",mr:.25,textDecoration:"line-through"},children:q(j)}),q(c)]}),b=e.jsxs(x,{spacing:.5,direction:"row",sx:{p:t=>t.spacing(1,1,0,1)},children:[e.jsxs(x,{flexGrow:1,sx:{position:"relative"},children:[O,R,e.jsx(G,{alt:a[0],src:a[0],sx:{borderRadius:1,height:164,width:1}})]}),e.jsxs(x,{spacing:.5,children:[e.jsx(G,{alt:a[1],src:a[1],ratio:"1/1",sx:{borderRadius:1,width:80}}),e.jsx(G,{alt:a[2],src:a[2],ratio:"1/1",sx:{borderRadius:1,width:80}})]})]}),C=e.jsx(Q,{sx:{p:t=>t.spacing(2.5,2.5,2,2.5)},primary:`Posted date: ${Z(d)}`,secondary:e.jsx(ee,{component:$,href:w.dashboard.tour.details(l),color:"inherit",children:p}),primaryTypographyProps:{typography:"caption",color:"text.disabled"},secondaryTypographyProps:{mt:1,noWrap:!0,component:"span",color:"text.primary",typography:"subtitle1"}}),y=e.jsxs(x,{spacing:1.5,sx:{position:"relative",p:t=>t.spacing(0,2.5,2.5,2.5)},children:[e.jsx(A,{onClick:n.onOpen,sx:{position:"absolute",bottom:20,right:8},children:e.jsx(g,{icon:"eva:more-vertical-fill"})}),[{label:v,icon:e.jsx(g,{icon:"mingcute:location-fill",sx:{color:"error.main"}})},{label:I,icon:e.jsx(g,{icon:"solar:clock-circle-bold",sx:{color:"info.main"}})},{label:`${m.length} Booked`,icon:e.jsx(g,{icon:"solar:users-group-rounded-bold",sx:{color:"primary.main"}})}].map(t=>e.jsxs(x,{spacing:1,direction:"row",alignItems:"center",sx:{typography:"body2"},children:[t.icon,t.label]},t.label))]});return e.jsxs(e.Fragment,{children:[e.jsxs(se,{children:[b,C,y]}),e.jsxs(H,{open:n.open,onClose:n.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(E,{onClick:()=>{n.onClose(),i()},children:[e.jsx(g,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(E,{onClick:()=>{n.onClose(),h()},children:[e.jsx(g,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(E,{onClick:()=>{n.onClose(),o()},sx:{color:"error.main"},children:[e.jsx(g,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}function Oe({tours:s}){const i=K(),h=u.useCallback(l=>{i.push(w.dashboard.tour.details(l))},[i]),o=u.useCallback(l=>{i.push(w.dashboard.tour.edit(l))},[i]),n=u.useCallback(l=>{console.info("DELETE",l)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(k,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(l=>e.jsx(Re,{tour:l,onView:()=>h(l.id),onEdit:()=>o(l.id),onDelete:()=>n(l.id)},l.id))}),s.length>8&&e.jsx(ke,{count:8,sx:{mt:8,[`& .${Se.ul}`]:{justifyContent:"center"}}})]})}function Pe({sort:s,onSort:i,sortOptions:h}){const o=_();return e.jsxs(e.Fragment,{children:[e.jsxs(B,{disableRipple:!0,color:"inherit",onClick:o.onOpen,endIcon:e.jsx(g,{icon:o.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold"},children:["Sort By:",e.jsx(k,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold",textTransform:"capitalize"},children:s})]}),e.jsx(H,{open:o.open,onClose:o.onClose,sx:{width:140},children:h.map(n=>e.jsx(E,{selected:n.value===s,onClick:()=>{o.onClose(),i(n.value)},children:n.label},n.value))})]})}function Fe({query:s,results:i,onSearch:h,hrefItem:o}){const n=K(),l=c=>{n.push(o(c))},p=c=>{if(s&&c.key==="Enter"){const a=i.filter(m=>m.name===s)[0];l(a.id)}};return e.jsx(Y,{sx:{width:{xs:1,sm:260}},autoHighlight:!0,popupIcon:null,options:i,onInputChange:(c,a)=>h(a),getOptionLabel:c=>c.name,noOptionsText:e.jsx(te,{query:s,sx:{bgcolor:"unset"}}),isOptionEqualToValue:(c,a)=>c.id===a.id,slotProps:{popper:{placement:"bottom-start",sx:{minWidth:320}},paper:{sx:{[` .${ne.option}`]:{pl:.75}}}},renderInput:c=>e.jsx(M,{...c,placeholder:"Search...",onKeyUp:p,InputProps:{...c.InputProps,startAdornment:e.jsx(re,{position:"start",children:e.jsx(g,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})})}}),renderOption:(c,a,{inputValue:m})=>{const d=oe(a.name,m),r=ae(a.name,d);return u.createElement(k,{component:"li",...c,onClick:()=>l(a.id),key:a.id},e.jsx(L,{alt:a.name,src:a.images[0],variant:"rounded",sx:{width:48,height:48,flexShrink:0,mr:1.5,borderRadius:1}},a.id),e.jsx("div",{children:r.map((j,v)=>e.jsx(T,{component:"span",color:j.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:j.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:j.text},v))},m))}})}function Ee({open:s,onOpen:i,onClose:h,filters:o,onFilters:n,canReset:l,onResetFilters:p,destinationOptions:c,tourGuideOptions:a,serviceOptions:m,dateError:d}){const r=u.useCallback(t=>{const f=o.services.includes(t)?o.services.filter(S=>S!==t):[...o.services,t];n("services",f)},[o.services,n]),j=u.useCallback(t=>{n("startDate",t)},[n]),v=u.useCallback(t=>{n("endDate",t)},[n]),D=u.useCallback(t=>{n("destination",t)},[n]),I=u.useCallback(t=>{n("tourGuides",t)},[n]),R=e.jsxs(x,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(T,{variant:"h6",sx:{flexGrow:1},children:"Filters"}),e.jsx(de,{title:"Reset",children:e.jsx(A,{onClick:p,children:e.jsx(U,{color:"error",variant:"dot",invisible:!l,children:e.jsx(g,{icon:"solar:restart-bold"})})})}),e.jsx(A,{onClick:h,children:e.jsx(g,{icon:"mingcute:close-line"})})]}),O=e.jsxs(x,{children:[e.jsx(T,{variant:"subtitle2",sx:{mb:1.5},children:"Durations"}),e.jsxs(x,{spacing:2.5,children:[e.jsx(N,{label:"Start date",value:o.startDate,onChange:j}),e.jsx(N,{label:"End date",value:o.endDate,onChange:v,slotProps:{textField:{error:d,helperText:d&&"End date must be later than start date"}}})]})]}),b=e.jsxs(x,{children:[e.jsx(T,{variant:"subtitle2",sx:{mb:1.5},children:"Destination"}),e.jsx(Te,{placeholder:o.destination.length?"+ Destination":"Select Destination",fullWidth:!0,multiple:!0,value:o.destination,onChange:(t,f)=>D(f),options:c,getOptionLabel:t=>t})]}),C=e.jsxs(x,{children:[e.jsx(T,{variant:"subtitle2",sx:{mb:1.5},children:"Tour Guide"}),e.jsx(Y,{multiple:!0,disableCloseOnSelect:!0,options:a,value:o.tourGuides,onChange:(t,f)=>I(f),getOptionLabel:t=>t.name,renderInput:t=>e.jsx(M,{placeholder:"Select Tour Guides",...t}),renderOption:(t,f)=>u.createElement("li",{...t,key:f.id},e.jsx(L,{alt:f.avatarUrl,src:f.avatarUrl,sx:{width:24,height:24,flexShrink:0,mr:1}},f.id),f.name),renderTags:(t,f)=>t.map((S,J)=>u.createElement(P,{...f({index:J}),key:S.id,size:"small",variant:"soft",label:S.name,avatar:e.jsx(L,{alt:S.name,src:S.avatarUrl})}))})]}),y=e.jsxs(x,{children:[e.jsx(T,{variant:"subtitle2",sx:{mb:1},children:"Services"}),m.map(t=>e.jsx(De,{control:e.jsx(Ie,{checked:o.services.includes(t),onClick:()=>r(t)}),label:t},t))]});return e.jsxs(e.Fragment,{children:[e.jsx(B,{disableRipple:!0,color:"inherit",endIcon:e.jsx(U,{color:"error",variant:"dot",invisible:!l,children:e.jsx(g,{icon:"ic:round-filter-list"})}),onClick:i,children:"Filters"}),e.jsxs(ie,{anchor:"right",open:s,onClose:h,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:280}},children:[R,e.jsx(le,{}),e.jsx(ce,{sx:{px:2.5,py:3},children:e.jsxs(x,{spacing:3,children:[O,b,C,y]})})]})]})}function Le({filters:s,onFilters:i,canReset:h,onResetFilters:o,results:n,...l}){const p=X(s.startDate,s.endDate),c=r=>{const j=s.services.filter(v=>v!==r);i("services",j)},a=()=>{i("startDate",null),i("endDate",null)},m=r=>{const j=s.tourGuides.filter(v=>v.name!==r.name);i("tourGuides",j)},d=r=>{const j=s.destination.filter(v=>v!==r);i("destination",j)};return e.jsxs(x,{spacing:1.5,...l,children:[e.jsxs(k,{sx:{typography:"body2"},children:[e.jsx("strong",{children:n}),e.jsx(k,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(x,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[s.startDate&&s.endDate&&e.jsx(F,{label:"Available:",children:e.jsx(P,{size:"small",label:p,onDelete:a})}),!!s.services.length&&e.jsx(F,{label:"Services:",children:s.services.map(r=>e.jsx(P,{label:r,size:"small",onDelete:()=>c(r)},r))}),!!s.tourGuides.length&&e.jsx(F,{label:"Tour guide:",children:s.tourGuides.map(r=>e.jsx(P,{size:"small",avatar:e.jsx(L,{alt:r.name,src:r.avatarUrl}),label:r.name,onDelete:()=>m(r)},r.id))}),!!s.destination.length&&e.jsx(F,{label:"Destination:",children:s.destination.map(r=>e.jsx(P,{label:r,size:"small",onDelete:()=>d(r)},r))}),h&&e.jsx(B,{color:"error",onClick:o,startIcon:e.jsx(g,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}function F({label:s,children:i,sx:h,...o}){return e.jsxs(x,{component:he,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...h},...o,children:[e.jsx(k,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(x,{spacing:1,direction:"row",flexWrap:"wrap",children:i})]})}const V={destination:[],tourGuides:[],services:[],startDate:null,endDate:null};function Be(){const s=pe(),i=xe(),[h,o]=u.useState("latest"),[n,l]=u.useState({query:"",results:[]}),[p,c]=u.useState(V),a=ue(p.startDate,p.endDate),m=Ge({inputData:z,filters:p,sortBy:h,dateError:a}),d=!!p.destination.length||!!p.tourGuides.length||!!p.services.length||!!p.startDate&&!!p.endDate,r=!m.length&&d,j=u.useCallback((b,C)=>{c(y=>({...y,[b]:C}))},[]),v=u.useCallback(()=>{c(V)},[]),D=u.useCallback(b=>{o(b)},[]),I=u.useCallback(b=>{if(l(C=>({...C,query:b})),b){const C=z.filter(y=>y.name.toLowerCase().indexOf(n.query.toLowerCase())!==-1);l(y=>({...y,results:C}))}},[n.query]),R=e.jsxs(x,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[e.jsx(Fe,{query:n.query,results:n.results,onSearch:I,hrefItem:b=>w.dashboard.tour.details(b)}),e.jsxs(x,{direction:"row",spacing:1,flexShrink:0,children:[e.jsx(Ee,{open:i.value,onOpen:i.onTrue,onClose:i.onFalse,filters:p,onFilters:j,canReset:d,onResetFilters:v,serviceOptions:me.map(b=>b.label),tourGuideOptions:je,destinationOptions:be.map(b=>b.label),dateError:a}),e.jsx(Pe,{sort:h,onSort:D,sortOptions:ge})]})]}),O=e.jsx(Le,{filters:p,onResetFilters:v,canReset:d,onFilters:j,results:m.length});return e.jsxs(ve,{maxWidth:s.themeStretch?!1:"lg",children:[e.jsx(fe,{heading:"List",links:[{name:"Dashboard",href:w.dashboard.root},{name:"Tour",href:w.dashboard.tour.root},{name:"List"}],action:e.jsx(B,{component:$,href:w.dashboard.tour.new,variant:"contained",startIcon:e.jsx(g,{icon:"mingcute:add-line"}),children:"New Tour"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(x,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[R,d&&O]}),r&&e.jsx(we,{title:"No Data",filled:!0,sx:{py:10}}),e.jsx(Oe,{tours:m})]})}const Ge=({inputData:s,filters:i,sortBy:h,dateError:o})=>{const{services:n,destination:l,startDate:p,endDate:c,tourGuides:a}=i,m=a.map(d=>d.id);return h==="latest"&&(s=W(s,["createdAt"],["desc"])),h==="oldest"&&(s=W(s,["createdAt"],["asc"])),h==="popular"&&(s=W(s,["totalViews"],["desc"])),l.length&&(s=s.filter(d=>l.includes(d.destination))),m.length&&(s=s.filter(d=>d.tourGuides.some(r=>m.includes(r.id)))),n.length&&(s=s.filter(d=>d.services.some(r=>n.includes(r)))),o||p&&c&&(s=s.filter(d=>Ce(p,d.available.startDate,d.available.endDate))),s};function as(){return e.jsxs(e.Fragment,{children:[e.jsx(ye,{children:e.jsx("title",{children:" Dashboard: Tour List"})}),e.jsx(Be,{})]})}export{as as default};