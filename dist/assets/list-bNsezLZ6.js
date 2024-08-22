import{j as e,S as j,g as h,bH as z,E as U,T as O,v as B,a as J,ay as $,Z as ce,Y as W,L as de,b5 as N,b6 as H,x as M,f as w,aA as Y,a6 as y,l as Z,B as E,r as p,bv as pe,bw as he,bx as xe,by as ue,bq as me,q as be,I as ge,am as je,_ as ve,au as Ce,G as fe,i as ye,bI as we,bJ as De,p as P,C as Pe,J as Te,R as ke,K as V,m as _,bs as Se,bt as Re,bK as Ie,n as I,bL as Ae,H as Le}from"./index-CunmLLou.js";import{s as K}from"./sumBy-sWPMSW0y.js";import{C as Q}from"./confirm-dialog-eLtbkqWE.js";import{u as Be,T as Ee,e as Fe,a as We,b as Oe,g as ze}from"./table-pagination-custom-paG8FffW.js";import{T as Ne}from"./table-empty-rows-GBpCxOOt.js";import{T as He}from"./table-head-custom-d7DhEAop.js";import{c as Ve,f as X}from"./format-number-MlCsyGQp.js";import{T as _e,a as Ke,b as qe,c as Ge}from"./TableHead-klPWbmg8.js";import{T as f}from"./TableCell-Gj9JH0iU.js";import{C as ee}from"./Checkbox-oddwhIQJ.js";import{D as q}from"./DatePicker-nugejkge.js";import{s as Ue}from"./utils-Wb6XoR4p.js";import{C as A}from"./Chip-BVGf60xL.js";import"./invoice-details-91hIOHKM.js";import"./_baseIteratee-7bY-_Gok.js";import"./_baseToString-4ZcLi7aA.js";import"./_baseSum-gu02AyRp.js";import"./DialogTitle-GOOymP4W.js";import"./dialogTitleClasses-2MPpGYRa.js";import"./DialogContent-B-VvmhNR.js";import"./DialogActions-5ckigJHQ.js";import"./empty-content-NdHJ5ZV0.js";import"./TablePagination-v6AtQ65M.js";import"./FirstPage-jMewCZH7.js";import"./FormControlLabel-L6vUYbWe.js";import"./Switch-bFYH9Y2J.js";import"./SwitchBase-hAFlUYrk.js";import"./index-jGaRA_M3.js";import"./ListItem-akvjACAU.js";import"./tslib.es6-YYMLUA4o.js";function T({title:s,total:a,icon:m,color:d,percent:t,price:x}){return e.jsxs(j,{spacing:2.5,direction:"row",alignItems:"center",justifyContent:"center",sx:{width:1,minWidth:200},children:[e.jsxs(j,{alignItems:"center",justifyContent:"center",sx:{position:"relative"},children:[e.jsx(h,{icon:m,width:32,sx:{color:d,position:"absolute"}}),e.jsx(z,{variant:"determinate",value:t,size:56,thickness:2,sx:{color:d,opacity:.48}}),e.jsx(z,{variant:"determinate",value:100,size:56,thickness:3,sx:{top:0,left:0,opacity:.48,position:"absolute",color:i=>U(i.palette.grey[500],.16)}})]}),e.jsxs(j,{spacing:.5,children:[e.jsx(O,{variant:"subtitle1",children:s}),e.jsxs(B,{component:"span",sx:{color:"text.disabled",typography:"body2"},children:[Ve(a)," invoices"]}),e.jsx(O,{variant:"subtitle2",children:X(x)})]})]})}function Je({row:s,selected:a,onSelectRow:m,onViewRow:d,onEditRow:t,onDeleteRow:x}){const{sent:i,invoiceNumber:b,createDate:c,dueDate:r,status:n,invoiceTo:l,totalAmount:g}=s,D=J(),v=$();return e.jsxs(e.Fragment,{children:[e.jsxs(_e,{hover:!0,selected:a,children:[e.jsx(f,{padding:"checkbox",children:e.jsx(ee,{checked:a,onClick:m})}),e.jsxs(f,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(ce,{alt:l.name,sx:{mr:2},children:l.name.charAt(0).toUpperCase()}),e.jsx(W,{disableTypography:!0,primary:e.jsx(O,{variant:"body2",noWrap:!0,children:l.name}),secondary:e.jsx(de,{noWrap:!0,variant:"body2",onClick:d,sx:{color:"text.disabled",cursor:"pointer"},children:b})})]}),e.jsx(f,{children:e.jsx(W,{primary:N(c),secondary:H(c),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(f,{children:e.jsx(W,{primary:N(r),secondary:H(r),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(f,{children:X(g)}),e.jsx(f,{align:"center",children:i}),e.jsx(f,{children:e.jsx(M,{variant:"soft",color:n==="paid"&&"success"||n==="pending"&&"warning"||n==="overdue"&&"error"||"default",children:n})}),e.jsx(f,{align:"right",sx:{px:1},children:e.jsx(w,{color:v.open?"inherit":"default",onClick:v.onOpen,children:e.jsx(h,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(Y,{open:v.open,onClose:v.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(y,{onClick:()=>{d(),v.onClose()},children:[e.jsx(h,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(y,{onClick:()=>{t(),v.onClose()},children:[e.jsx(h,{icon:"solar:pen-bold"}),"Edit"]}),e.jsx(Z,{sx:{borderStyle:"dashed"}}),e.jsxs(y,{onClick:()=>{D.onTrue(),v.onClose()},sx:{color:"error.main"},children:[e.jsx(h,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(Q,{open:D.value,onClose:D.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(E,{variant:"contained",color:"error",onClick:x,children:"Delete"})})]})}function $e({filters:s,onFilters:a,dateError:m,serviceOptions:d}){const t=$(),x=p.useCallback(r=>{a("name",r.target.value)},[a]),i=p.useCallback(r=>{a("service",typeof r.target.value=="string"?r.target.value.split(","):r.target.value)},[a]),b=p.useCallback(r=>{a("startDate",r)},[a]),c=p.useCallback(r=>{a("endDate",r)},[a]);return e.jsxs(e.Fragment,{children:[e.jsxs(j,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsxs(pe,{sx:{flexShrink:0,width:{xs:1,md:180}},children:[e.jsx(he,{children:"Service"}),e.jsx(xe,{multiple:!0,value:s.service,onChange:i,input:e.jsx(ue,{label:"Service"}),renderValue:r=>r.map(n=>n).join(", "),sx:{textTransform:"capitalize"},children:d.map(r=>e.jsxs(y,{value:r,children:[e.jsx(ee,{disableRipple:!0,size:"small",checked:s.service.includes(r)}),r]},r))})]}),e.jsx(q,{label:"Start date",value:s.startDate,onChange:b,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:180}}}),e.jsx(q,{label:"End date",value:s.endDate,onChange:c,slotProps:{textField:{fullWidth:!0,error:m,helperText:m&&"End date must be later than start date"}},sx:{maxWidth:{md:180},[`& .${me.root}`]:{position:{md:"absolute"},bottom:{md:-40}}}}),e.jsxs(j,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(be,{fullWidth:!0,value:s.name,onChange:x,placeholder:"Search customer or invoice number...",InputProps:{startAdornment:e.jsx(ge,{position:"start",children:e.jsx(h,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(w,{onClick:t.onOpen,children:e.jsx(h,{icon:"eva:more-vertical-fill"})})]})]}),e.jsxs(Y,{open:t.open,onClose:t.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(y,{onClick:()=>{t.onClose()},children:[e.jsx(h,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(y,{onClick:()=>{t.onClose()},children:[e.jsx(h,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(y,{onClick:()=>{t.onClose()},children:[e.jsx(h,{icon:"solar:export-bold"}),"Export"]})]})]})}function Me({filters:s,onFilters:a,onResetFilters:m,results:d,...t}){const x=Ue(s.startDate,s.endDate),i=p.useCallback(()=>{a("name","")},[a]),b=p.useCallback(n=>{const l=s.service.filter(g=>g!==n);a("service",l)},[s.service,a]),c=p.useCallback(()=>{a("status","all")},[a]),r=p.useCallback(()=>{a("startDate",null),a("endDate",null)},[a]);return e.jsxs(j,{spacing:1.5,...t,children:[e.jsxs(B,{sx:{typography:"body2"},children:[e.jsx("strong",{children:d}),e.jsx(B,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(j,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!s.service.length&&e.jsx(L,{label:"Service:",children:s.service.map(n=>e.jsx(A,{label:n,size:"small",onDelete:()=>b(n)},n))}),s.status!=="all"&&e.jsx(L,{label:"Status:",children:e.jsx(A,{size:"small",label:s.status,onDelete:c})}),s.startDate&&s.endDate&&e.jsx(L,{label:"Date:",children:e.jsx(A,{size:"small",label:x,onDelete:r})}),!!s.name&&e.jsx(L,{label:"Keyword:",children:e.jsx(A,{label:s.name,size:"small",onDelete:i})}),e.jsx(E,{color:"error",onClick:m,startIcon:e.jsx(h,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}function L({label:s,children:a,sx:m,...d}){return e.jsxs(j,{component:je,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...m},...d,children:[e.jsx(B,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(j,{spacing:1,direction:"row",flexWrap:"wrap",children:a})]})}const Ye=[{id:"invoiceNumber",label:"Customer"},{id:"createDate",label:"Create"},{id:"dueDate",label:"Due"},{id:"price",label:"Amount"},{id:"sent",label:"Sent",align:"center"},{id:"status",label:"Status"},{id:""}],G={name:"",service:[],status:"all",startDate:null,endDate:null};function Ze(){const{enqueueSnackbar:s}=ve(),a=Ce(),m=fe(),d=ye(),t=Be({defaultOrderBy:"createDate"}),x=J(),[i,b]=p.useState(we),[c,r]=p.useState(G),n=De(c.startDate,c.endDate),l=Qe({inputData:i,comparator:ze(t.order,t.orderBy),filters:c,dateError:n}),g=l.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage),D=t.dense?56:76,v=!!c.name||!!c.service.length||c.status!=="all"||!!c.startDate&&!!c.endDate,te=!l.length&&v||!l.length,C=o=>i.filter(u=>u.status===o).length,k=o=>K(i.filter(u=>u.status===o),"totalAmount"),S=o=>C(o)/i.length*100,se=[{value:"all",label:"All",color:"default",count:i.length},{value:"paid",label:"Paid",color:"success",count:C("paid")},{value:"pending",label:"Pending",color:"warning",count:C("pending")},{value:"overdue",label:"Overdue",color:"error",count:C("overdue")},{value:"draft",label:"Draft",color:"default",count:C("draft")}],R=p.useCallback((o,u)=>{t.onResetPage(),r(F=>({...F,[o]:u}))},[t]),oe=p.useCallback(()=>{r(G)},[]),ae=p.useCallback(o=>{const u=i.filter(F=>F.id!==o);s("Delete success!"),b(u),t.onUpdatePageDeleteRow(g.length)},[g.length,s,t,i]),ne=p.useCallback(()=>{const o=i.filter(u=>!t.selected.includes(u.id));s("Delete success!"),b(o),t.onUpdatePageDeleteRows({totalRowsInPage:g.length,totalRowsFiltered:l.length})},[l.length,g.length,s,t,i]),re=p.useCallback(o=>{d.push(P.dashboard.invoice.edit(o))},[d]),le=p.useCallback(o=>{d.push(P.dashboard.invoice.details(o))},[d]),ie=p.useCallback((o,u)=>{R("status",u)},[R]);return e.jsxs(e.Fragment,{children:[e.jsxs(Pe,{maxWidth:m.themeStretch?!1:"lg",children:[e.jsx(Te,{heading:"List",links:[{name:"Dashboard",href:P.dashboard.root},{name:"Invoice",href:P.dashboard.invoice.root},{name:"List"}],action:e.jsx(E,{component:ke,href:P.dashboard.invoice.new,variant:"contained",startIcon:e.jsx(h,{icon:"mingcute:add-line"}),children:"New Invoice"}),sx:{mb:{xs:3,md:5}}}),e.jsx(V,{sx:{mb:{xs:3,md:5}},children:e.jsx(_,{children:e.jsxs(j,{direction:"row",divider:e.jsx(Z,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[e.jsx(T,{title:"Total",total:i.length,percent:100,price:K(i,"totalAmount"),icon:"solar:bill-list-bold-duotone",color:a.palette.info.main}),e.jsx(T,{title:"Paid",total:C("paid"),percent:S("paid"),price:k("paid"),icon:"solar:file-check-bold-duotone",color:a.palette.success.main}),e.jsx(T,{title:"Pending",total:C("pending"),percent:S("pending"),price:k("pending"),icon:"solar:sort-by-time-bold-duotone",color:a.palette.warning.main}),e.jsx(T,{title:"Overdue",total:C("overdue"),percent:S("overdue"),price:k("overdue"),icon:"solar:bell-bing-bold-duotone",color:a.palette.error.main}),e.jsx(T,{title:"Draft",total:C("draft"),percent:S("draft"),price:k("draft"),icon:"solar:file-corrupted-bold-duotone",color:a.palette.text.secondary})]})})}),e.jsxs(V,{children:[e.jsx(Se,{value:c.status,onChange:ie,sx:{px:2.5,boxShadow:`inset 0 -2px 0 0 ${U(a.palette.grey[500],.08)}`},children:se.map(o=>e.jsx(Re,{value:o.value,label:o.label,iconPosition:"end",icon:e.jsx(M,{variant:(o.value==="all"||o.value===c.status)&&"filled"||"soft",color:o.color,children:o.count})},o.value))}),e.jsx($e,{filters:c,onFilters:R,dateError:n,serviceOptions:Ie.map(o=>o.name)}),v&&e.jsx(Me,{filters:c,onFilters:R,onResetFilters:oe,results:l.length,sx:{p:2.5,pt:0}}),e.jsxs(Ke,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(Ee,{dense:t.dense,numSelected:t.selected.length,rowCount:l.length,onSelectAllRows:o=>{t.onSelectAllRows(o,l.map(u=>u.id))},action:e.jsxs(j,{direction:"row",children:[e.jsx(I,{title:"Sent",children:e.jsx(w,{color:"primary",children:e.jsx(h,{icon:"iconamoon:send-fill"})})}),e.jsx(I,{title:"Download",children:e.jsx(w,{color:"primary",children:e.jsx(h,{icon:"eva:download-outline"})})}),e.jsx(I,{title:"Print",children:e.jsx(w,{color:"primary",children:e.jsx(h,{icon:"solar:printer-minimalistic-bold"})})}),e.jsx(I,{title:"Delete",children:e.jsx(w,{color:"primary",onClick:x.onTrue,children:e.jsx(h,{icon:"solar:trash-bin-trash-bold"})})})]})}),e.jsx(_,{children:e.jsxs(qe,{size:t.dense?"small":"medium",sx:{minWidth:800},children:[e.jsx(He,{order:t.order,orderBy:t.orderBy,headLabel:Ye,rowCount:l.length,numSelected:t.selected.length,onSort:t.onSort,onSelectAllRows:o=>t.onSelectAllRows(o,l.map(u=>u.id))}),e.jsxs(Ge,{children:[l.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map(o=>e.jsx(Je,{row:o,selected:t.selected.includes(o.id),onSelectRow:()=>t.onSelectRow(o.id),onViewRow:()=>le(o.id),onEditRow:()=>re(o.id),onDeleteRow:()=>ae(o.id)},o.id)),e.jsx(Ne,{height:D,emptyRows:Fe(t.page,t.rowsPerPage,l.length)}),e.jsx(We,{notFound:te})]})]})})]}),e.jsx(Oe,{count:l.length,page:t.page,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onRowsPerPageChange:t.onChangeRowsPerPage,dense:t.dense,onChangeDense:t.onChangeDense})]})]}),e.jsx(Q,{open:x.value,onClose:x.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",t.selected.length," "]})," items?"]}),action:e.jsx(E,{variant:"contained",color:"error",onClick:()=>{ne(),x.onFalse()},children:"Delete"})})]})}function Qe({inputData:s,comparator:a,filters:m,dateError:d}){const{name:t,status:x,service:i,startDate:b,endDate:c}=m,r=s.map((n,l)=>[n,l]);return r.sort((n,l)=>{const g=a(n[0],l[0]);return g!==0?g:n[1]-l[1]}),s=r.map(n=>n[0]),t&&(s=s.filter(n=>n.invoiceNumber.toLowerCase().indexOf(t.toLowerCase())!==-1||n.invoiceTo.name.toLowerCase().indexOf(t.toLowerCase())!==-1)),x!=="all"&&(s=s.filter(n=>n.status===x)),i.length&&(s=s.filter(n=>n.items.some(l=>i.includes(l.service)))),d||b&&c&&(s=s.filter(n=>Ae(n.createDate,b,c))),s}function Rt(){return e.jsxs(e.Fragment,{children:[e.jsx(Le,{children:e.jsx("title",{children:" Dashboard: Invoice List"})}),e.jsx(Ze,{})]})}export{Rt as default};