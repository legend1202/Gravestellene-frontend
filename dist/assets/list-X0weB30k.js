import{j as e,S as b,h,bz as O,E as U,T as z,v as B,b as $,ax as J,Y as ce,X as W,L as de,x as M,g as w,az as X,a5 as y,m as Y,B as E,r as p,bn as pe,bo as he,bp as xe,bq as ue,bk as me,s as ge,I as je,al as be,Z as ve,at as Ce,G as fe,k as ye,bA as we,p as P,C as De,J as Pe,R as Te,K as N,n as V,bB as ke,q as I,H as Se}from"./index-F58UWM6d.js";import{s as H}from"./sumBy-j36G8VUu.js";import{c as _,d as q,i as Re,e as Ie}from"./format-time-N0vllXDz.js";import{C as Z}from"./confirm-dialog-Eyd0MEzy.js";import{u as Ae,T as Le,e as Be,a as Ee,b as Fe,g as We}from"./table-pagination-custom-FdRX2XOT.js";import{T as ze}from"./table-empty-rows-4YbjQMTr.js";import{T as Oe}from"./table-head-custom-SoSNiOfj.js";import{c as Ne,f as Q}from"./format-number-5NpL39v-.js";import{T as Ve,a as He,b as _e,c as qe}from"./TableHead-jOlk7A5d.js";import{T as f}from"./TableCell-6a7cWiGU.js";import{C as ee}from"./Checkbox-LoW-zYTz.js";import{D as G}from"./DatePicker-k9SVsDE2.js";import{s as Ge}from"./utils-KO2YPjrM.js";import{C as A}from"./Chip-Bf9OfEDF.js";import{T as Ke,a as Ue}from"./Tabs-VgtfxpHW.js";import"./invoice-details-IuWQjrvF.js";import"./_baseIteratee-88HzSBsR.js";import"./_baseToString-kWLBp72X.js";import"./_baseSum-gu02AyRp.js";import"./DialogTitle-Yv6DKYq6.js";import"./dialogTitleClasses-fTeeAY48.js";import"./DialogContent-sEfmhfdt.js";import"./DialogActions-qDclrG3N.js";import"./empty-content-cu3d-hY6.js";import"./TablePagination-boMs0Lib.js";import"./KeyboardArrowRight-nt3KTS5I.js";import"./FirstPage-LKd4WdE0.js";import"./FormControlLabel-yEUOmb-6.js";import"./Switch-mI38wMsz.js";import"./SwitchBase-QO7WNYjK.js";import"./index-AQ_QNN8Z.js";import"./ListItem-E97LGm5E.js";import"./tslib.es6-YYMLUA4o.js";function T({title:s,total:a,icon:m,color:d,percent:t,price:x}){return e.jsxs(b,{spacing:2.5,direction:"row",alignItems:"center",justifyContent:"center",sx:{width:1,minWidth:200},children:[e.jsxs(b,{alignItems:"center",justifyContent:"center",sx:{position:"relative"},children:[e.jsx(h,{icon:m,width:32,sx:{color:d,position:"absolute"}}),e.jsx(O,{variant:"determinate",value:t,size:56,thickness:2,sx:{color:d,opacity:.48}}),e.jsx(O,{variant:"determinate",value:100,size:56,thickness:3,sx:{top:0,left:0,opacity:.48,position:"absolute",color:i=>U(i.palette.grey[500],.16)}})]}),e.jsxs(b,{spacing:.5,children:[e.jsx(z,{variant:"subtitle1",children:s}),e.jsxs(B,{component:"span",sx:{color:"text.disabled",typography:"body2"},children:[Ne(a)," invoices"]}),e.jsx(z,{variant:"subtitle2",children:Q(x)})]})]})}function $e({row:s,selected:a,onSelectRow:m,onViewRow:d,onEditRow:t,onDeleteRow:x}){const{sent:i,invoiceNumber:g,createDate:c,dueDate:r,status:n,invoiceTo:l,totalAmount:j}=s,D=$(),v=J();return e.jsxs(e.Fragment,{children:[e.jsxs(Ve,{hover:!0,selected:a,children:[e.jsx(f,{padding:"checkbox",children:e.jsx(ee,{checked:a,onClick:m})}),e.jsxs(f,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(ce,{alt:l.name,sx:{mr:2},children:l.name.charAt(0).toUpperCase()}),e.jsx(W,{disableTypography:!0,primary:e.jsx(z,{variant:"body2",noWrap:!0,children:l.name}),secondary:e.jsx(de,{noWrap:!0,variant:"body2",onClick:d,sx:{color:"text.disabled",cursor:"pointer"},children:g})})]}),e.jsx(f,{children:e.jsx(W,{primary:_(c),secondary:q(c),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(f,{children:e.jsx(W,{primary:_(r),secondary:q(r),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(f,{children:Q(j)}),e.jsx(f,{align:"center",children:i}),e.jsx(f,{children:e.jsx(M,{variant:"soft",color:n==="paid"&&"success"||n==="pending"&&"warning"||n==="overdue"&&"error"||"default",children:n})}),e.jsx(f,{align:"right",sx:{px:1},children:e.jsx(w,{color:v.open?"inherit":"default",onClick:v.onOpen,children:e.jsx(h,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(X,{open:v.open,onClose:v.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(y,{onClick:()=>{d(),v.onClose()},children:[e.jsx(h,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(y,{onClick:()=>{t(),v.onClose()},children:[e.jsx(h,{icon:"solar:pen-bold"}),"Edit"]}),e.jsx(Y,{sx:{borderStyle:"dashed"}}),e.jsxs(y,{onClick:()=>{D.onTrue(),v.onClose()},sx:{color:"error.main"},children:[e.jsx(h,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(Z,{open:D.value,onClose:D.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(E,{variant:"contained",color:"error",onClick:x,children:"Delete"})})]})}function Je({filters:s,onFilters:a,dateError:m,serviceOptions:d}){const t=J(),x=p.useCallback(r=>{a("name",r.target.value)},[a]),i=p.useCallback(r=>{a("service",typeof r.target.value=="string"?r.target.value.split(","):r.target.value)},[a]),g=p.useCallback(r=>{a("startDate",r)},[a]),c=p.useCallback(r=>{a("endDate",r)},[a]);return e.jsxs(e.Fragment,{children:[e.jsxs(b,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsxs(pe,{sx:{flexShrink:0,width:{xs:1,md:180}},children:[e.jsx(he,{children:"Service"}),e.jsx(xe,{multiple:!0,value:s.service,onChange:i,input:e.jsx(ue,{label:"Service"}),renderValue:r=>r.map(n=>n).join(", "),sx:{textTransform:"capitalize"},children:d.map(r=>e.jsxs(y,{value:r,children:[e.jsx(ee,{disableRipple:!0,size:"small",checked:s.service.includes(r)}),r]},r))})]}),e.jsx(G,{label:"Start date",value:s.startDate,onChange:g,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:180}}}),e.jsx(G,{label:"End date",value:s.endDate,onChange:c,slotProps:{textField:{fullWidth:!0,error:m,helperText:m&&"End date must be later than start date"}},sx:{maxWidth:{md:180},[`& .${me.root}`]:{position:{md:"absolute"},bottom:{md:-40}}}}),e.jsxs(b,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(ge,{fullWidth:!0,value:s.name,onChange:x,placeholder:"Search customer or invoice number...",InputProps:{startAdornment:e.jsx(je,{position:"start",children:e.jsx(h,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(w,{onClick:t.onOpen,children:e.jsx(h,{icon:"eva:more-vertical-fill"})})]})]}),e.jsxs(X,{open:t.open,onClose:t.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(y,{onClick:()=>{t.onClose()},children:[e.jsx(h,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(y,{onClick:()=>{t.onClose()},children:[e.jsx(h,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(y,{onClick:()=>{t.onClose()},children:[e.jsx(h,{icon:"solar:export-bold"}),"Export"]})]})]})}function Me({filters:s,onFilters:a,onResetFilters:m,results:d,...t}){const x=Ge(s.startDate,s.endDate),i=p.useCallback(()=>{a("name","")},[a]),g=p.useCallback(n=>{const l=s.service.filter(j=>j!==n);a("service",l)},[s.service,a]),c=p.useCallback(()=>{a("status","all")},[a]),r=p.useCallback(()=>{a("startDate",null),a("endDate",null)},[a]);return e.jsxs(b,{spacing:1.5,...t,children:[e.jsxs(B,{sx:{typography:"body2"},children:[e.jsx("strong",{children:d}),e.jsx(B,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(b,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!s.service.length&&e.jsx(L,{label:"Service:",children:s.service.map(n=>e.jsx(A,{label:n,size:"small",onDelete:()=>g(n)},n))}),s.status!=="all"&&e.jsx(L,{label:"Status:",children:e.jsx(A,{size:"small",label:s.status,onDelete:c})}),s.startDate&&s.endDate&&e.jsx(L,{label:"Date:",children:e.jsx(A,{size:"small",label:x,onDelete:r})}),!!s.name&&e.jsx(L,{label:"Keyword:",children:e.jsx(A,{label:s.name,size:"small",onDelete:i})}),e.jsx(E,{color:"error",onClick:m,startIcon:e.jsx(h,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}function L({label:s,children:a,sx:m,...d}){return e.jsxs(b,{component:be,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...m},...d,children:[e.jsx(B,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(b,{spacing:1,direction:"row",flexWrap:"wrap",children:a})]})}const Xe=[{id:"invoiceNumber",label:"Customer"},{id:"createDate",label:"Create"},{id:"dueDate",label:"Due"},{id:"price",label:"Amount"},{id:"sent",label:"Sent",align:"center"},{id:"status",label:"Status"},{id:""}],K={name:"",service:[],status:"all",startDate:null,endDate:null};function Ye(){const{enqueueSnackbar:s}=ve(),a=Ce(),m=fe(),d=ye(),t=Ae({defaultOrderBy:"createDate"}),x=$(),[i,g]=p.useState(we),[c,r]=p.useState(K),n=Re(c.startDate,c.endDate),l=Ze({inputData:i,comparator:We(t.order,t.orderBy),filters:c,dateError:n}),j=l.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage),D=t.dense?56:76,v=!!c.name||!!c.service.length||c.status!=="all"||!!c.startDate&&!!c.endDate,te=!l.length&&v||!l.length,C=o=>i.filter(u=>u.status===o).length,k=o=>H(i.filter(u=>u.status===o),"totalAmount"),S=o=>C(o)/i.length*100,se=[{value:"all",label:"All",color:"default",count:i.length},{value:"paid",label:"Paid",color:"success",count:C("paid")},{value:"pending",label:"Pending",color:"warning",count:C("pending")},{value:"overdue",label:"Overdue",color:"error",count:C("overdue")},{value:"draft",label:"Draft",color:"default",count:C("draft")}],R=p.useCallback((o,u)=>{t.onResetPage(),r(F=>({...F,[o]:u}))},[t]),oe=p.useCallback(()=>{r(K)},[]),ae=p.useCallback(o=>{const u=i.filter(F=>F.id!==o);s("Delete success!"),g(u),t.onUpdatePageDeleteRow(j.length)},[j.length,s,t,i]),ne=p.useCallback(()=>{const o=i.filter(u=>!t.selected.includes(u.id));s("Delete success!"),g(o),t.onUpdatePageDeleteRows({totalRowsInPage:j.length,totalRowsFiltered:l.length})},[l.length,j.length,s,t,i]),re=p.useCallback(o=>{d.push(P.dashboard.invoice.edit(o))},[d]),le=p.useCallback(o=>{d.push(P.dashboard.invoice.details(o))},[d]),ie=p.useCallback((o,u)=>{R("status",u)},[R]);return e.jsxs(e.Fragment,{children:[e.jsxs(De,{maxWidth:m.themeStretch?!1:"lg",children:[e.jsx(Pe,{heading:"List",links:[{name:"Dashboard",href:P.dashboard.root},{name:"Invoice",href:P.dashboard.invoice.root},{name:"List"}],action:e.jsx(E,{component:Te,href:P.dashboard.invoice.new,variant:"contained",startIcon:e.jsx(h,{icon:"mingcute:add-line"}),children:"New Invoice"}),sx:{mb:{xs:3,md:5}}}),e.jsx(N,{sx:{mb:{xs:3,md:5}},children:e.jsx(V,{children:e.jsxs(b,{direction:"row",divider:e.jsx(Y,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[e.jsx(T,{title:"Total",total:i.length,percent:100,price:H(i,"totalAmount"),icon:"solar:bill-list-bold-duotone",color:a.palette.info.main}),e.jsx(T,{title:"Paid",total:C("paid"),percent:S("paid"),price:k("paid"),icon:"solar:file-check-bold-duotone",color:a.palette.success.main}),e.jsx(T,{title:"Pending",total:C("pending"),percent:S("pending"),price:k("pending"),icon:"solar:sort-by-time-bold-duotone",color:a.palette.warning.main}),e.jsx(T,{title:"Overdue",total:C("overdue"),percent:S("overdue"),price:k("overdue"),icon:"solar:bell-bing-bold-duotone",color:a.palette.error.main}),e.jsx(T,{title:"Draft",total:C("draft"),percent:S("draft"),price:k("draft"),icon:"solar:file-corrupted-bold-duotone",color:a.palette.text.secondary})]})})}),e.jsxs(N,{children:[e.jsx(Ke,{value:c.status,onChange:ie,sx:{px:2.5,boxShadow:`inset 0 -2px 0 0 ${U(a.palette.grey[500],.08)}`},children:se.map(o=>e.jsx(Ue,{value:o.value,label:o.label,iconPosition:"end",icon:e.jsx(M,{variant:(o.value==="all"||o.value===c.status)&&"filled"||"soft",color:o.color,children:o.count})},o.value))}),e.jsx(Je,{filters:c,onFilters:R,dateError:n,serviceOptions:ke.map(o=>o.name)}),v&&e.jsx(Me,{filters:c,onFilters:R,onResetFilters:oe,results:l.length,sx:{p:2.5,pt:0}}),e.jsxs(He,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(Le,{dense:t.dense,numSelected:t.selected.length,rowCount:l.length,onSelectAllRows:o=>{t.onSelectAllRows(o,l.map(u=>u.id))},action:e.jsxs(b,{direction:"row",children:[e.jsx(I,{title:"Sent",children:e.jsx(w,{color:"primary",children:e.jsx(h,{icon:"iconamoon:send-fill"})})}),e.jsx(I,{title:"Download",children:e.jsx(w,{color:"primary",children:e.jsx(h,{icon:"eva:download-outline"})})}),e.jsx(I,{title:"Print",children:e.jsx(w,{color:"primary",children:e.jsx(h,{icon:"solar:printer-minimalistic-bold"})})}),e.jsx(I,{title:"Delete",children:e.jsx(w,{color:"primary",onClick:x.onTrue,children:e.jsx(h,{icon:"solar:trash-bin-trash-bold"})})})]})}),e.jsx(V,{children:e.jsxs(_e,{size:t.dense?"small":"medium",sx:{minWidth:800},children:[e.jsx(Oe,{order:t.order,orderBy:t.orderBy,headLabel:Xe,rowCount:l.length,numSelected:t.selected.length,onSort:t.onSort,onSelectAllRows:o=>t.onSelectAllRows(o,l.map(u=>u.id))}),e.jsxs(qe,{children:[l.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map(o=>e.jsx($e,{row:o,selected:t.selected.includes(o.id),onSelectRow:()=>t.onSelectRow(o.id),onViewRow:()=>le(o.id),onEditRow:()=>re(o.id),onDeleteRow:()=>ae(o.id)},o.id)),e.jsx(ze,{height:D,emptyRows:Be(t.page,t.rowsPerPage,l.length)}),e.jsx(Ee,{notFound:te})]})]})})]}),e.jsx(Fe,{count:l.length,page:t.page,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onRowsPerPageChange:t.onChangeRowsPerPage,dense:t.dense,onChangeDense:t.onChangeDense})]})]}),e.jsx(Z,{open:x.value,onClose:x.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",t.selected.length," "]})," items?"]}),action:e.jsx(E,{variant:"contained",color:"error",onClick:()=>{ne(),x.onFalse()},children:"Delete"})})]})}function Ze({inputData:s,comparator:a,filters:m,dateError:d}){const{name:t,status:x,service:i,startDate:g,endDate:c}=m,r=s.map((n,l)=>[n,l]);return r.sort((n,l)=>{const j=a(n[0],l[0]);return j!==0?j:n[1]-l[1]}),s=r.map(n=>n[0]),t&&(s=s.filter(n=>n.invoiceNumber.toLowerCase().indexOf(t.toLowerCase())!==-1||n.invoiceTo.name.toLowerCase().indexOf(t.toLowerCase())!==-1)),x!=="all"&&(s=s.filter(n=>n.status===x)),i.length&&(s=s.filter(n=>n.items.some(l=>i.includes(l.service)))),d||g&&c&&(s=s.filter(n=>Ie(n.createDate,g,c))),s}function Lt(){return e.jsxs(e.Fragment,{children:[e.jsx(Se,{children:e.jsx("title",{children:" Dashboard: Invoice List"})}),e.jsx(Ye,{})]})}export{Lt as default};
