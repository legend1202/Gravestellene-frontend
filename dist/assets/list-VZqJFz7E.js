import{j as e,S as w,A as E,g as n,m as F,b as B,e as H,h as A,r as s,p as m,d,C as q,i as y,R as z,b2 as U,H as V}from"./index-tv0ZIiTC.js";import"./index-oYV4_ElG.js";import{c as _,a as Q}from"./index.esm-VBvqitsX.js";import"./image-tVn7ll4O.js";import"./mui-one-time-password-input.es-YbC1owsP.js";import"./styles-9eCz8YsQ.js";import{u as $,F as J}from"./form-provider-k-FKKLvB.js";import{o as K}from"./yup-THP-HfC-.js";import{G as X}from"./gravestone-NSufFyIp.js";import{d as Y,e as Z}from"./graveyard-lkQ1F3CD.js";import{E as b}from"./empty-content-a0ZHI6oX.js";import{C as ee}from"./confirm-dialog-X7HGHnE_.js";import{C as re}from"./custom-breadcrumbs-wU-A5DZv.js";import{R as te}from"./rhf-select-XJVvuUwg.js";import{C as oe}from"./Card-fEhE4FGy.js";import{b as j,D as ae,G as se,a as ne}from"./DataGrid-cai3K9_h.js";import"./TextField-MR0F-eFr.js";import"./DialogTitle-uDbN0tw-.js";import"./dialogTitleClasses-47Jk6PmQ.js";import"./DialogContent-l4Y2lTg9.js";import"./DialogActions-C1UtG1Hl.js";import"./Checkbox-KewZpZB7.js";import"./SwitchBase-13kQQb6r.js";import"./Chip-EkmsCEpD.js";import"./index-D-rNU0hp.js";import"./Autocomplete-J0YW4wEt.js";import"./Close--UPeKSTc.js";import"./ClickAwayListener-wtSf9s9a.js";import"./Switch-shtlxAjk.js";import"./Skeleton-LzH7r1Lc.js";import"./CircularProgress-m_JQi2ZX.js";import"./TablePagination-NVXoWdCj.js";import"./FirstPage-sFACmvNK.js";import"./TableCell--Pegy-Kt.js";import"./FormControlLabel-SC4RdDd1.js";function ie({params:t}){return e.jsxs(w,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:[e.jsx(E,{alt:t.row.name,src:t.row.coverUrl,variant:"rounded",sx:{width:64,height:64,mr:2}}),e.jsx(n,{primary:t.row.name,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})]})}function le({params:t}){return e.jsx(n,{primary:t.row.birthday,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function de({params:t}){return e.jsx(n,{primary:t.row.deceasedDate,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function pe({params:t}){return e.jsx(n,{primary:t.row.buriedDate,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function ce({params:t}){return e.jsx(n,{primary:t.row.homeTown,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function me({params:t}){return e.jsx(n,{primary:t.row.graveSiteNumber,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function ye({params:t}){return e.jsx(n,{primary:t.row.quarter,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}const i=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],he={category:!1},ue=["category","actions"];function ge(){const{enqueueSnackbar:t}=F(),l=B(),h=H(),C=A(),{graveyards:u,graveyardsLoading:v}=Y(),[p,g]=s.useState([]),[c,S]=s.useState([]),[D,T]=s.useState(he),G=_().shape({id:Q().required("Please select Graveyard!")}),P=s.useMemo(()=>({id:""}),[]),x=$({resolver:K(G),defaultValues:P}),{watch:R}=x,o=R();s.useEffect(()=>{o!=null&&o.id&&L(o==null?void 0:o.id)},[o==null?void 0:o.id]);const I=async r=>{try{if((await Z(r)).success){const M=p.filter(W=>W.id!==r);t("Delete success!"),g(M)}}catch(a){console.error(a)}},N=s.useCallback(()=>{console.log("delete id")},[]),k=s.useCallback(r=>{h.push(m.fellesraad.gravestone.edit(r))},[h]),f=[{field:"name",headerName:"Name",flex:1,minWidth:220,hideable:!1,renderCell:r=>e.jsx(ie,{params:r})},{field:"birthday",headerName:"Birthday",minWidth:150,renderCell:r=>e.jsx(le,{params:r})},{field:"deceasedDate",headerName:"Deceased Date",width:150,type:"singleSelect",editable:!0,valueOptions:i,renderCell:r=>e.jsx(de,{params:r})},{field:"buriedDate",headerName:"Beried Date",width:150,type:"singleSelect",editable:!0,valueOptions:i,renderCell:r=>e.jsx(pe,{params:r})},{field:"homeTown",headerName:"Home Town",width:180,type:"singleSelect",editable:!0,valueOptions:i,renderCell:r=>e.jsx(ce,{params:r})},{field:"graveSiteNumber",headerName:"Site",width:110,type:"singleSelect",editable:!0,valueOptions:i,renderCell:r=>e.jsx(me,{params:r})},{field:"quarter",headerName:"Quarter",width:110,type:"singleSelect",editable:!0,valueOptions:i,renderCell:r=>e.jsx(ye,{params:r})},{type:"actions",field:"actions",headerName:" ",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:r=>[e.jsx(j,{showInMenu:!0,icon:e.jsx(d,{icon:"solar:trash-bin-trash-bold"}),label:"Delete",onClick:()=>I(r.row.id)}),e.jsx(j,{showInMenu:!0,icon:e.jsx(d,{icon:"solar:pen-bold"}),label:"Edit",onClick:()=>k(r.row.id)})]}],L=async r=>{const a=await X(r);a&&g(a==null?void 0:a.gravestones)},O=()=>f.filter(r=>!ue.includes(r.field)).map(r=>r.field);return e.jsxs(e.Fragment,{children:[e.jsxs(q,{maxWidth:C.themeStretch?!1:"lg",sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(re,{heading:"List",links:[{name:"Gravestone",href:m.fellesraad.gravestone.create},{name:"List"}],action:e.jsx(y,{component:z,href:m.fellesraad.graveyard.create,variant:"contained",startIcon:e.jsx(d,{icon:"mingcute:add-line"}),children:"New Gravestone"}),sx:{mb:{xs:3,md:5}}}),u&&e.jsx(J,{methods:x,children:e.jsx(te,{fullWidth:!0,name:"id",label:"Graveyard",InputLabelProps:{shrink:!0},PaperPropsSx:{textTransform:"capitalize"},children:u.map(r=>e.jsx(U,{value:r==null?void 0:r.id,children:r==null?void 0:r.name},r.id))})}),e.jsx(oe,{sx:{height:{xs:800,md:2},flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:p&&e.jsx(ae,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:p,columns:f,loading:v,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:10}}},onRowSelectionModelChange:r=>{S(r)},columnVisibilityModel:D,onColumnVisibilityModelChange:r=>T(r),slots:{toolbar:()=>e.jsxs(se,{children:[e.jsx(ne,{}),e.jsx(w,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:!!c.length&&e.jsxs(y,{size:"small",color:"error",startIcon:e.jsx(d,{icon:"solar:trash-bin-trash-bold"}),onClick:l.onTrue,children:["Delete (",c.length,")"]})})]}),noRowsOverlay:()=>e.jsx(b,{title:"No Data"}),noResultsOverlay:()=>e.jsx(b,{title:"No results found"})},slotProps:{columnsPanel:{getTogglableColumns:O}}})})]}),e.jsx(ee,{open:l.value,onClose:l.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete"," ",e.jsxs("strong",{children:[" ",c.length," "]})," items?"]}),action:e.jsx(y,{variant:"contained",color:"error",onClick:()=>{N(),l.onFalse()},children:"Delete"})})]})}function Ye(){return e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsx("title",{children:" Dashboard: Gravestone List"})}),e.jsx(ge,{})]})}export{Ye as default};