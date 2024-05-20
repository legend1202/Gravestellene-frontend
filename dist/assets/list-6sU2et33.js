import{z as N,c as $,d as C,r as h,e as K,o as Z,j as e,Z as X,F as J,A as Y,B as P,ek as E,bk as y,f as w,cU as U,t as S,i as ee,b as I,bi as L,n as se,m as ae,w as B,as as z,g as T,h as u,bj as O,S as R,cf as oe,ch as le,cg as ne,dQ as te,M as ie,I as re,X as de,q as ce,k as me,el as he,av as pe,p as k,C as xe,s as ue,R as je,v as ge,bs as be,aB as Ce,bt as we,em as fe,N as ye,H as ve}from"./index-crR8fPbl.js";import{C as H}from"./confirm-dialog-e8aG9Ock.js";import{u as Re,g as Pe,T as Se,e as ke,a as Te,b as Fe}from"./table-pagination-custom-GDS2tWSq.js";import{T as De}from"./table-empty-rows-1SfrA4Lz.js";import{T as Ae}from"./table-head-custom-RvGg2Hrl.js";import{R as qe}from"./rhf-select-cRLZboZK.js";import{R as Ie}from"./rhf-autocomplete-9Z_1_y5K.js";import{D as Ne}from"./DialogTitle-qITN9Y-N.js";import{D as Ee}from"./DialogContent-PpTN-hcR.js";import{D as Le}from"./DialogActions-uC8Ntfc2.js";import{T as Be,a as ze,b as Oe,c as He}from"./TableHead-MLo9zkAl.js";import{T as f}from"./TableCell-IjKaKf_a.js";import{C as W}from"./Checkbox-uS0Dug3P.js";import{C as D}from"./Chip-HisbdHvZ.js";import"./empty-content-3DHsQVWb.js";import"./TablePagination-XlSzBjLA.js";import"./FirstPage-enMprDKc.js";import"./FormControlLabel-s6zQIPoP.js";import"./Switch-H6fQJ0cr.js";import"./SwitchBase-HZUDhW8q.js";import"./Autocomplete-9niLsZQ5.js";import"./dialogTitleClasses-bflJQ_FN.js";function We({currentUser:s,open:a,onClose:c}){const{enqueueSnackbar:i}=N(),m=$().shape({name:C().required("Name is required"),email:C().required("Email is required").email("Email must be a valid email address"),phoneNumber:C().required("Phone number is required"),address:C().required("Address is required"),country:C().required("Country is required"),company:C().required("Company is required"),state:C().required("State is required"),city:C().required("City is required"),role:C().required("Role is required")}),r=h.useMemo(()=>({name:(s==null?void 0:s.name)||"",email:(s==null?void 0:s.email)||"",phoneNumber:(s==null?void 0:s.phoneNumber)||"",address:(s==null?void 0:s.address)||"",country:(s==null?void 0:s.country)||"",state:(s==null?void 0:s.state)||"",city:(s==null?void 0:s.city)||"",zipCode:(s==null?void 0:s.zipCode)||"",status:s==null?void 0:s.status,company:(s==null?void 0:s.company)||"",role:(s==null?void 0:s.role)||""}),[s]),n=K({resolver:Z(m),defaultValues:r}),{reset:l,handleSubmit:d,formState:{isSubmitting:t}}=n,g=d(async p=>{try{await new Promise(b=>setTimeout(b,500)),l(),c(),i("Update success!"),console.info("DATA",p)}catch(b){console.error(b)}});return e.jsx(X,{fullWidth:!0,maxWidth:!1,open:a,onClose:c,PaperProps:{sx:{maxWidth:720}},children:e.jsxs(J,{methods:n,onSubmit:g,children:[e.jsx(Ne,{children:"Quick Update"}),e.jsxs(Ee,{children:[e.jsx(Y,{variant:"outlined",severity:"info",sx:{mb:3},children:"Account is waiting for confirmation"}),e.jsxs(P,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(qe,{name:"status",label:"Status",children:E.map(p=>e.jsx(y,{value:p.value,children:p.label},p.value))}),e.jsx(P,{sx:{display:{xs:"none",sm:"block"}}}),e.jsx(w,{name:"name",label:"Full Name"}),e.jsx(w,{name:"email",label:"Email Address"}),e.jsx(w,{name:"phoneNumber",label:"Phone Number"}),e.jsx(Ie,{name:"country",type:"country",label:"Country",placeholder:"Choose a country",fullWidth:!0,options:U.map(p=>p.label),getOptionLabel:p=>p}),e.jsx(w,{name:"state",label:"State/Region"}),e.jsx(w,{name:"city",label:"City"}),e.jsx(w,{name:"address",label:"Address"}),e.jsx(w,{name:"zipCode",label:"Zip/Code"}),e.jsx(w,{name:"company",label:"Company"}),e.jsx(w,{name:"role",label:"Role"})]})]}),e.jsxs(Le,{children:[e.jsx(S,{variant:"outlined",onClick:c,children:"Cancel"}),e.jsx(ee,{type:"submit",variant:"contained",loading:t,children:"Update"})]})]})})}function _e({row:s,selected:a,onEditRow:c,onSelectRow:i,onDeleteRow:m}){const{name:r,avatarUrl:n,company:l,role:d,status:t,email:g,phoneNumber:p}=s,b=I(),v=I(),j=L();return e.jsxs(e.Fragment,{children:[e.jsxs(Be,{hover:!0,selected:a,children:[e.jsx(f,{padding:"checkbox",children:e.jsx(W,{checked:a,onClick:i})}),e.jsxs(f,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(se,{alt:r,src:n,sx:{mr:2}}),e.jsx(ae,{primary:r,secondary:g,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),e.jsx(f,{sx:{whiteSpace:"nowrap"},children:p}),e.jsx(f,{sx:{whiteSpace:"nowrap"},children:l}),e.jsx(f,{sx:{whiteSpace:"nowrap"},children:d}),e.jsx(f,{children:e.jsx(B,{variant:"soft",color:t==="active"&&"success"||t==="pending"&&"warning"||t==="banned"&&"error"||"default",children:t})}),e.jsxs(f,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(z,{title:"Quick Edit",placement:"top",arrow:!0,children:e.jsx(T,{color:v.value?"inherit":"default",onClick:v.onTrue,children:e.jsx(u,{icon:"solar:pen-bold"})})}),e.jsx(T,{color:j.open?"inherit":"default",onClick:j.onOpen,children:e.jsx(u,{icon:"eva:more-vertical-fill"})})]})]}),e.jsx(We,{currentUser:s,open:v.value,onClose:v.onFalse}),e.jsxs(O,{open:j.open,onClose:j.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(y,{onClick:()=>{b.onTrue(),j.onClose()},sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(y,{onClick:()=>{c(),j.onClose()},children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]})]}),e.jsx(H,{open:b.value,onClose:b.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(S,{variant:"contained",color:"error",onClick:m,children:"Delete"})})]})}function Ge({filters:s,onFilters:a,roleOptions:c}){const i=L(),m=h.useCallback(n=>{a("name",n.target.value)},[a]),r=h.useCallback(n=>{a("role",typeof n.target.value=="string"?n.target.value.split(","):n.target.value)},[a]);return e.jsxs(e.Fragment,{children:[e.jsxs(R,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsxs(oe,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(le,{children:"Role"}),e.jsx(ne,{multiple:!0,value:s.role,onChange:r,input:e.jsx(te,{label:"Role"}),renderValue:n=>n.map(l=>l).join(", "),MenuProps:{PaperProps:{sx:{maxHeight:240}}},children:c.map(n=>e.jsxs(y,{value:n,children:[e.jsx(W,{disableRipple:!0,size:"small",checked:s.role.includes(n)}),n]},n))})]}),e.jsxs(R,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(ie,{fullWidth:!0,value:s.name,onChange:m,placeholder:"Search...",InputProps:{startAdornment:e.jsx(re,{position:"start",children:e.jsx(u,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(T,{onClick:i.onOpen,children:e.jsx(u,{icon:"eva:more-vertical-fill"})})]})]}),e.jsxs(O,{open:i.open,onClose:i.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(y,{onClick:()=>{i.onClose()},children:[e.jsx(u,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(y,{onClick:()=>{i.onClose()},children:[e.jsx(u,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(y,{onClick:()=>{i.onClose()},children:[e.jsx(u,{icon:"solar:export-bold"}),"Export"]})]})]})}function Me({filters:s,onFilters:a,onResetFilters:c,results:i,...m}){const r=h.useCallback(()=>{a("name","")},[a]),n=h.useCallback(()=>{a("status","all")},[a]),l=h.useCallback(d=>{const t=s.role.filter(g=>g!==d);a("role",t)},[s.role,a]);return e.jsxs(R,{spacing:1.5,...m,children:[e.jsxs(P,{sx:{typography:"body2"},children:[e.jsx("strong",{children:i}),e.jsx(P,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(R,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[s.status!=="all"&&e.jsx(A,{label:"Status:",children:e.jsx(D,{size:"small",label:s.status,onDelete:n})}),!!s.role.length&&e.jsx(A,{label:"Role:",children:s.role.map(d=>e.jsx(D,{label:d,size:"small",onDelete:()=>l(d)},d))}),!!s.name&&e.jsx(A,{label:"Keyword:",children:e.jsx(D,{label:s.name,size:"small",onDelete:r})}),e.jsx(S,{color:"error",onClick:c,startIcon:e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}function A({label:s,children:a,sx:c,...i}){return e.jsxs(R,{component:de,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...c},...i,children:[e.jsx(P,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(R,{spacing:1,direction:"row",flexWrap:"wrap",children:a})]})}const Qe=[{value:"all",label:"All"},...E],Ve=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone Number",width:180},{id:"company",label:"Company",width:220},{id:"role",label:"Role",width:180},{id:"status",label:"Status",width:100},{id:"",width:88}],q={name:"",role:[],status:"all"};function $e(){const{enqueueSnackbar:s}=N(),a=Re(),c=ce(),i=me(),m=I(),[r,n]=h.useState(he),[l,d]=h.useState(q),t=Ke({inputData:r,comparator:Pe(a.order,a.orderBy),filters:l}),g=t.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage),p=a.dense?56:76,b=!pe(q,l),v=!t.length&&b||!t.length,j=h.useCallback((o,x)=>{a.onResetPage(),d(F=>({...F,[o]:x}))},[a]),_=h.useCallback(()=>{d(q)},[]),G=h.useCallback(o=>{const x=r.filter(F=>F.id!==o);s("Delete success!"),n(x),a.onUpdatePageDeleteRow(g.length)},[g.length,s,a,r]),M=h.useCallback(()=>{const o=r.filter(x=>!a.selected.includes(x.id));s("Delete success!"),n(o),a.onUpdatePageDeleteRows({totalRowsInPage:g.length,totalRowsFiltered:t.length})},[t.length,g.length,s,a,r]),Q=h.useCallback(o=>{i.push(k.dashboard.user.edit(o))},[i]),V=h.useCallback((o,x)=>{j("status",x)},[j]);return e.jsxs(e.Fragment,{children:[e.jsxs(xe,{maxWidth:c.themeStretch?!1:"lg",children:[e.jsx(ue,{heading:"List",links:[{name:"Dashboard",href:k.dashboard.root},{name:"User",href:k.dashboard.user.root},{name:"List"}],action:e.jsx(S,{component:je,href:k.dashboard.user.new,variant:"contained",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),children:"New User"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(ge,{children:[e.jsx(be,{value:l.status,onChange:V,sx:{px:2.5,boxShadow:o=>`inset 0 -2px 0 0 ${Ce(o.palette.grey[500],.08)}`},children:Qe.map(o=>e.jsx(we,{iconPosition:"end",value:o.value,label:o.label,icon:e.jsx(B,{variant:(o.value==="all"||o.value===l.status)&&"filled"||"soft",color:o.value==="active"&&"success"||o.value==="pending"&&"warning"||o.value==="banned"&&"error"||"default",children:["active","pending","banned","rejected"].includes(o.value)?r.filter(x=>x.status===o.value).length:r.length})},o.value))}),e.jsx(Ge,{filters:l,onFilters:j,roleOptions:fe}),b&&e.jsx(Me,{filters:l,onFilters:j,onResetFilters:_,results:t.length,sx:{p:2.5,pt:0}}),e.jsxs(ze,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(Se,{dense:a.dense,numSelected:a.selected.length,rowCount:t.length,onSelectAllRows:o=>a.onSelectAllRows(o,t.map(x=>x.id)),action:e.jsx(z,{title:"Delete",children:e.jsx(T,{color:"primary",onClick:m.onTrue,children:e.jsx(u,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(ye,{children:e.jsxs(Oe,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Ae,{order:a.order,orderBy:a.orderBy,headLabel:Ve,rowCount:t.length,numSelected:a.selected.length,onSort:a.onSort,onSelectAllRows:o=>a.onSelectAllRows(o,t.map(x=>x.id))}),e.jsxs(He,{children:[t.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(o=>e.jsx(_e,{row:o,selected:a.selected.includes(o.id),onSelectRow:()=>a.onSelectRow(o.id),onDeleteRow:()=>G(o.id),onEditRow:()=>Q(o.id)},o.id)),e.jsx(De,{height:p,emptyRows:ke(a.page,a.rowsPerPage,t.length)}),e.jsx(Te,{notFound:v})]})]})})]}),e.jsx(Fe,{count:t.length,page:a.page,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage,dense:a.dense,onChangeDense:a.onChangeDense})]})]}),e.jsx(H,{open:m.value,onClose:m.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",a.selected.length," "]})," items?"]}),action:e.jsx(S,{variant:"contained",color:"error",onClick:()=>{M(),m.onFalse()},children:"Delete"})})]})}function Ke({inputData:s,comparator:a,filters:c}){const{name:i,status:m,role:r}=c,n=s.map((l,d)=>[l,d]);return n.sort((l,d)=>{const t=a(l[0],d[0]);return t!==0?t:l[1]-d[1]}),s=n.map(l=>l[0]),i&&(s=s.filter(l=>l.name.toLowerCase().indexOf(i.toLowerCase())!==-1)),m!=="all"&&(s=s.filter(l=>l.status===m)),r.length&&(s=s.filter(l=>r.includes(l.role))),s}function gs(){return e.jsxs(e.Fragment,{children:[e.jsx(ve,{children:e.jsx("title",{children:" Dashboard: User List"})}),e.jsx($e,{})]})}export{gs as default};