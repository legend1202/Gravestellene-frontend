import{m as N,r as p,j as e,x as Q,B as P,d$ as E,b3 as y,cN as K,i as S,b as I,b1 as L,A as Z,g as J,k as B,ac as O,c as k,d as u,b2 as z,S as R,I as X,w as Y,h as U,e as ee,e0 as oe,af as ae,p as T,C as se,R as le,bb as ne,al as te,bc as ie,e1 as re,s as de,H as ce}from"./index-xccKnqtj.js";import{c as me,a as C}from"./index.esm-YEE7kA5n.js";import"./image-ihTI-eUB.js";import"./mui-one-time-password-input.es-8WdpYP-F.js";import"./styles-XyZpQVQ4.js";import{C as H}from"./confirm-dialog-SwAW3vpZ.js";import{C as pe}from"./custom-breadcrumbs-l_npxqvb.js";import{u as he,g as xe,T as ue,e as je,a as ge,b as be}from"./table-pagination-custom-oyBzmJSA.js";import{T as Ce}from"./table-empty-rows-w0kPp4w5.js";import{T as fe}from"./table-head-custom-BwwdKLBC.js";import{u as we,F as ye}from"./form-provider-AIk6qsYQ.js";import{o as ve}from"./yup-kNUoSS0a.js";import{R as Re}from"./rhf-select-ehLTFbkh.js";import{R as f}from"./rhf-text-field-M35LS_3G.js";import{R as Pe}from"./rhf-autocomplete-3-iJKZ_B.js";import{D as Se}from"./DialogTitle-FkY0OOI0.js";import{D as Te}from"./DialogContent-JWUImff-.js";import{A as ke}from"./Alert-0-vwW3IE.js";import{D as Fe}from"./DialogActions-DIqTiIED.js";import{L as Ae}from"./LoadingButton-rYn3LTh9.js";import{T as De,a as qe,b as Ie,c as Ne}from"./TableHead-Q5eQX_gM.js";import{T as w}from"./TableCell-II5q65hQ.js";import{C as W}from"./Checkbox-d99zhaav.js";import{a as Ee,b as Le,S as Be,O as Oe,T as ze}from"./TextField-_2MBvEfR.js";import{C as A}from"./Chip-_G7JEqc_.js";import{C as He}from"./Card-tMu97UR4.js";import"./empty-content-FevP8_c1.js";import"./TablePagination-bieaFalW.js";import"./FirstPage-nPhwdI91.js";import"./FormControlLabel-rYqjbgl6.js";import"./Switch-8NlbQv1L.js";import"./SwitchBase-r3AAQIaf.js";import"./Autocomplete-ZCPYHfF2.js";import"./Close-z_cgMax_.js";import"./dialogTitleClasses-P16bkwpN.js";import"./CircularProgress-Ir6PpH3m.js";function We({currentUser:o,open:a,onClose:c}){const{enqueueSnackbar:i}=N(),m=me().shape({name:C().required("Name is required"),email:C().required("Email is required").email("Email must be a valid email address"),phoneNumber:C().required("Phone number is required"),address:C().required("Address is required"),country:C().required("Country is required"),company:C().required("Company is required"),state:C().required("State is required"),city:C().required("City is required"),role:C().required("Role is required")}),r=p.useMemo(()=>({name:(o==null?void 0:o.name)||"",email:(o==null?void 0:o.email)||"",phoneNumber:(o==null?void 0:o.phoneNumber)||"",address:(o==null?void 0:o.address)||"",country:(o==null?void 0:o.country)||"",state:(o==null?void 0:o.state)||"",city:(o==null?void 0:o.city)||"",zipCode:(o==null?void 0:o.zipCode)||"",status:o==null?void 0:o.status,company:(o==null?void 0:o.company)||"",role:(o==null?void 0:o.role)||""}),[o]),n=we({resolver:ve(m),defaultValues:r}),{reset:l,handleSubmit:d,formState:{isSubmitting:t}}=n,g=d(async h=>{try{await new Promise(b=>setTimeout(b,500)),l(),c(),i("Update success!"),console.info("DATA",h)}catch(b){console.error(b)}});return e.jsx(Q,{fullWidth:!0,maxWidth:!1,open:a,onClose:c,PaperProps:{sx:{maxWidth:720}},children:e.jsxs(ye,{methods:n,onSubmit:g,children:[e.jsx(Se,{children:"Quick Update"}),e.jsxs(Te,{children:[e.jsx(ke,{variant:"outlined",severity:"info",sx:{mb:3},children:"Account is waiting for confirmation"}),e.jsxs(P,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(Re,{name:"status",label:"Status",children:E.map(h=>e.jsx(y,{value:h.value,children:h.label},h.value))}),e.jsx(P,{sx:{display:{xs:"none",sm:"block"}}}),e.jsx(f,{name:"name",label:"Full Name"}),e.jsx(f,{name:"email",label:"Email Address"}),e.jsx(f,{name:"phoneNumber",label:"Phone Number"}),e.jsx(Pe,{name:"country",type:"country",label:"Country",placeholder:"Choose a country",fullWidth:!0,options:K.map(h=>h.label),getOptionLabel:h=>h}),e.jsx(f,{name:"state",label:"State/Region"}),e.jsx(f,{name:"city",label:"City"}),e.jsx(f,{name:"address",label:"Address"}),e.jsx(f,{name:"zipCode",label:"Zip/Code"}),e.jsx(f,{name:"company",label:"Company"}),e.jsx(f,{name:"role",label:"Role"})]})]}),e.jsxs(Fe,{children:[e.jsx(S,{variant:"outlined",onClick:c,children:"Cancel"}),e.jsx(Ae,{type:"submit",variant:"contained",loading:t,children:"Update"})]})]})})}function _e({row:o,selected:a,onEditRow:c,onSelectRow:i,onDeleteRow:m}){const{name:r,avatarUrl:n,company:l,role:d,status:t,email:g,phoneNumber:h}=o,b=I(),v=I(),j=L();return e.jsxs(e.Fragment,{children:[e.jsxs(De,{hover:!0,selected:a,children:[e.jsx(w,{padding:"checkbox",children:e.jsx(W,{checked:a,onClick:i})}),e.jsxs(w,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(Z,{alt:r,src:n,sx:{mr:2}}),e.jsx(J,{primary:r,secondary:g,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),e.jsx(w,{sx:{whiteSpace:"nowrap"},children:h}),e.jsx(w,{sx:{whiteSpace:"nowrap"},children:l}),e.jsx(w,{sx:{whiteSpace:"nowrap"},children:d}),e.jsx(w,{children:e.jsx(B,{variant:"soft",color:t==="active"&&"success"||t==="pending"&&"warning"||t==="banned"&&"error"||"default",children:t})}),e.jsxs(w,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(O,{title:"Quick Edit",placement:"top",arrow:!0,children:e.jsx(k,{color:v.value?"inherit":"default",onClick:v.onTrue,children:e.jsx(u,{icon:"solar:pen-bold"})})}),e.jsx(k,{color:j.open?"inherit":"default",onClick:j.onOpen,children:e.jsx(u,{icon:"eva:more-vertical-fill"})})]})]}),e.jsx(We,{currentUser:o,open:v.value,onClose:v.onFalse}),e.jsxs(z,{open:j.open,onClose:j.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(y,{onClick:()=>{b.onTrue(),j.onClose()},sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(y,{onClick:()=>{c(),j.onClose()},children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]})]}),e.jsx(H,{open:b.value,onClose:b.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(S,{variant:"contained",color:"error",onClick:m,children:"Delete"})})]})}function Ge({filters:o,onFilters:a,roleOptions:c}){const i=L(),m=p.useCallback(n=>{a("name",n.target.value)},[a]),r=p.useCallback(n=>{a("role",typeof n.target.value=="string"?n.target.value.split(","):n.target.value)},[a]);return e.jsxs(e.Fragment,{children:[e.jsxs(R,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsxs(Ee,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(Le,{children:"Role"}),e.jsx(Be,{multiple:!0,value:o.role,onChange:r,input:e.jsx(Oe,{label:"Role"}),renderValue:n=>n.map(l=>l).join(", "),MenuProps:{PaperProps:{sx:{maxHeight:240}}},children:c.map(n=>e.jsxs(y,{value:n,children:[e.jsx(W,{disableRipple:!0,size:"small",checked:o.role.includes(n)}),n]},n))})]}),e.jsxs(R,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(ze,{fullWidth:!0,value:o.name,onChange:m,placeholder:"Search...",InputProps:{startAdornment:e.jsx(X,{position:"start",children:e.jsx(u,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(k,{onClick:i.onOpen,children:e.jsx(u,{icon:"eva:more-vertical-fill"})})]})]}),e.jsxs(z,{open:i.open,onClose:i.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(y,{onClick:()=>{i.onClose()},children:[e.jsx(u,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(y,{onClick:()=>{i.onClose()},children:[e.jsx(u,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(y,{onClick:()=>{i.onClose()},children:[e.jsx(u,{icon:"solar:export-bold"}),"Export"]})]})]})}function Ve({filters:o,onFilters:a,onResetFilters:c,results:i,...m}){const r=p.useCallback(()=>{a("name","")},[a]),n=p.useCallback(()=>{a("status","all")},[a]),l=p.useCallback(d=>{const t=o.role.filter(g=>g!==d);a("role",t)},[o.role,a]);return e.jsxs(R,{spacing:1.5,...m,children:[e.jsxs(P,{sx:{typography:"body2"},children:[e.jsx("strong",{children:i}),e.jsx(P,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(R,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[o.status!=="all"&&e.jsx(D,{label:"Status:",children:e.jsx(A,{size:"small",label:o.status,onDelete:n})}),!!o.role.length&&e.jsx(D,{label:"Role:",children:o.role.map(d=>e.jsx(A,{label:d,size:"small",onDelete:()=>l(d)},d))}),!!o.name&&e.jsx(D,{label:"Keyword:",children:e.jsx(A,{label:o.name,size:"small",onDelete:r})}),e.jsx(S,{color:"error",onClick:c,startIcon:e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}function D({label:o,children:a,sx:c,...i}){return e.jsxs(R,{component:Y,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...c},...i,children:[e.jsx(P,{component:"span",sx:{typography:"subtitle2"},children:o}),e.jsx(R,{spacing:1,direction:"row",flexWrap:"wrap",children:a})]})}const $e=[{value:"all",label:"All"},...E],Me=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone Number",width:180},{id:"company",label:"Company",width:220},{id:"role",label:"Role",width:180},{id:"status",label:"Status",width:100},{id:"",width:88}],q={name:"",role:[],status:"all"};function Qe(){const{enqueueSnackbar:o}=N(),a=he(),c=U(),i=ee(),m=I(),[r,n]=p.useState(oe),[l,d]=p.useState(q),t=Ke({inputData:r,comparator:xe(a.order,a.orderBy),filters:l}),g=t.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage),h=a.dense?56:76,b=!ae(q,l),v=!t.length&&b||!t.length,j=p.useCallback((s,x)=>{a.onResetPage(),d(F=>({...F,[s]:x}))},[a]),_=p.useCallback(()=>{d(q)},[]),G=p.useCallback(s=>{const x=r.filter(F=>F.id!==s);o("Delete success!"),n(x),a.onUpdatePageDeleteRow(g.length)},[g.length,o,a,r]),V=p.useCallback(()=>{const s=r.filter(x=>!a.selected.includes(x.id));o("Delete success!"),n(s),a.onUpdatePageDeleteRows({totalRowsInPage:g.length,totalRowsFiltered:t.length})},[t.length,g.length,o,a,r]),$=p.useCallback(s=>{i.push(T.dashboard.user.edit(s))},[i]),M=p.useCallback((s,x)=>{j("status",x)},[j]);return e.jsxs(e.Fragment,{children:[e.jsxs(se,{maxWidth:c.themeStretch?!1:"lg",children:[e.jsx(pe,{heading:"List",links:[{name:"Dashboard",href:T.dashboard.root},{name:"User",href:T.dashboard.user.root},{name:"List"}],action:e.jsx(S,{component:le,href:T.dashboard.user.new,variant:"contained",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),children:"New User"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(He,{children:[e.jsx(ne,{value:l.status,onChange:M,sx:{px:2.5,boxShadow:s=>`inset 0 -2px 0 0 ${te(s.palette.grey[500],.08)}`},children:$e.map(s=>e.jsx(ie,{iconPosition:"end",value:s.value,label:s.label,icon:e.jsx(B,{variant:(s.value==="all"||s.value===l.status)&&"filled"||"soft",color:s.value==="active"&&"success"||s.value==="pending"&&"warning"||s.value==="banned"&&"error"||"default",children:["active","pending","banned","rejected"].includes(s.value)?r.filter(x=>x.status===s.value).length:r.length})},s.value))}),e.jsx(Ge,{filters:l,onFilters:j,roleOptions:re}),b&&e.jsx(Ve,{filters:l,onFilters:j,onResetFilters:_,results:t.length,sx:{p:2.5,pt:0}}),e.jsxs(qe,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(ue,{dense:a.dense,numSelected:a.selected.length,rowCount:t.length,onSelectAllRows:s=>a.onSelectAllRows(s,t.map(x=>x.id)),action:e.jsx(O,{title:"Delete",children:e.jsx(k,{color:"primary",onClick:m.onTrue,children:e.jsx(u,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(de,{children:e.jsxs(Ie,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(fe,{order:a.order,orderBy:a.orderBy,headLabel:Me,rowCount:t.length,numSelected:a.selected.length,onSort:a.onSort,onSelectAllRows:s=>a.onSelectAllRows(s,t.map(x=>x.id))}),e.jsxs(Ne,{children:[t.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(s=>e.jsx(_e,{row:s,selected:a.selected.includes(s.id),onSelectRow:()=>a.onSelectRow(s.id),onDeleteRow:()=>G(s.id),onEditRow:()=>$(s.id)},s.id)),e.jsx(Ce,{height:h,emptyRows:je(a.page,a.rowsPerPage,t.length)}),e.jsx(ge,{notFound:v})]})]})})]}),e.jsx(be,{count:t.length,page:a.page,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage,dense:a.dense,onChangeDense:a.onChangeDense})]})]}),e.jsx(H,{open:m.value,onClose:m.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",a.selected.length," "]})," items?"]}),action:e.jsx(S,{variant:"contained",color:"error",onClick:()=>{V(),m.onFalse()},children:"Delete"})})]})}function Ke({inputData:o,comparator:a,filters:c}){const{name:i,status:m,role:r}=c,n=o.map((l,d)=>[l,d]);return n.sort((l,d)=>{const t=a(l[0],d[0]);return t!==0?t:l[1]-d[1]}),o=n.map(l=>l[0]),i&&(o=o.filter(l=>l.name.toLowerCase().indexOf(i.toLowerCase())!==-1)),m!=="all"&&(o=o.filter(l=>l.status===m)),r.length&&(o=o.filter(l=>r.includes(l.role))),o}function qo(){return e.jsxs(e.Fragment,{children:[e.jsx(ce,{children:e.jsx("title",{children:" Dashboard: User List"})}),e.jsx(Qe,{})]})}export{qo as default};
