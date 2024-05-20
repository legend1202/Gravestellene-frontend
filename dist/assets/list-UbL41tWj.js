import{j as e,S as w,A as E,g as n,m as F,b as B,e as H,h as A,r as s,p as m,d,C as q,i as y,R as z,b3 as U,H as V}from"./index-xccKnqtj.js";import"./index-scZDXM4y.js";import{c as _,a as Q}from"./index.esm-YEE7kA5n.js";import"./image-ihTI-eUB.js";import"./mui-one-time-password-input.es-8WdpYP-F.js";import"./styles-XyZpQVQ4.js";import{u as $,F as J}from"./form-provider-AIk6qsYQ.js";import{o as K}from"./yup-kNUoSS0a.js";import{G as X}from"./gravestone-iSBR3JnF.js";import{d as Y,e as Z}from"./graveyard-UNAl1ZZZ.js";import{E as b}from"./empty-content-FevP8_c1.js";import{C as ee}from"./confirm-dialog-SwAW3vpZ.js";import{C as re}from"./custom-breadcrumbs-l_npxqvb.js";import{R as te}from"./rhf-select-ehLTFbkh.js";import{C as oe}from"./Card-tMu97UR4.js";import{b as j,D as ae,G as se,a as ne}from"./DataGrid-dgFD5cAt.js";import"./TextField-_2MBvEfR.js";import"./DialogTitle-FkY0OOI0.js";import"./dialogTitleClasses-P16bkwpN.js";import"./DialogContent-JWUImff-.js";import"./DialogActions-DIqTiIED.js";import"./Checkbox-d99zhaav.js";import"./SwitchBase-r3AAQIaf.js";import"./Chip-_G7JEqc_.js";import"./index-Ahahihkz.js";import"./Autocomplete-ZCPYHfF2.js";import"./Close-z_cgMax_.js";import"./ClickAwayListener-uNsuJQqx.js";import"./Switch-8NlbQv1L.js";import"./Skeleton-ur7bka2j.js";import"./CircularProgress-Ir6PpH3m.js";import"./TablePagination-bieaFalW.js";import"./FirstPage-nPhwdI91.js";import"./TableCell-II5q65hQ.js";import"./FormControlLabel-rYqjbgl6.js";function ie({params:t}){return e.jsxs(w,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:[e.jsx(E,{alt:t.row.name,src:t.row.coverUrl,variant:"rounded",sx:{width:64,height:64,mr:2}}),e.jsx(n,{primary:t.row.name,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})]})}function le({params:t}){return e.jsx(n,{primary:t.row.birthday,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function de({params:t}){return e.jsx(n,{primary:t.row.deceasedDate,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function pe({params:t}){return e.jsx(n,{primary:t.row.buriedDate,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function ce({params:t}){return e.jsx(n,{primary:t.row.homeTown,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function me({params:t}){return e.jsx(n,{primary:t.row.graveSiteNumber,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function ye({params:t}){return e.jsx(n,{primary:t.row.quarter,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}const i=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],he={category:!1},ue=["category","actions"];function ge(){const{enqueueSnackbar:t}=F(),l=B(),h=H(),C=A(),{graveyards:u,graveyardsLoading:v}=Y(),[p,g]=s.useState([]),[c,S]=s.useState([]),[D,T]=s.useState(he),G=_().shape({id:Q().required("Please select Graveyard!")}),P=s.useMemo(()=>({id:""}),[]),x=$({resolver:K(G),defaultValues:P}),{watch:R}=x,o=R();s.useEffect(()=>{o!=null&&o.id&&L(o==null?void 0:o.id)},[o==null?void 0:o.id]);const I=async r=>{try{if((await Z(r)).success){const M=p.filter(W=>W.id!==r);t("Delete success!"),g(M)}}catch(a){console.error(a)}},N=s.useCallback(()=>{console.log("delete id")},[]),k=s.useCallback(r=>{h.push(m.fellesraad.gravestone.edit(r))},[h]),f=[{field:"name",headerName:"Name",flex:1,minWidth:220,hideable:!1,renderCell:r=>e.jsx(ie,{params:r})},{field:"birthday",headerName:"Birthday",minWidth:150,renderCell:r=>e.jsx(le,{params:r})},{field:"deceasedDate",headerName:"Deceased Date",width:150,type:"singleSelect",editable:!0,valueOptions:i,renderCell:r=>e.jsx(de,{params:r})},{field:"buriedDate",headerName:"Beried Date",width:150,type:"singleSelect",editable:!0,valueOptions:i,renderCell:r=>e.jsx(pe,{params:r})},{field:"homeTown",headerName:"Home Town",width:180,type:"singleSelect",editable:!0,valueOptions:i,renderCell:r=>e.jsx(ce,{params:r})},{field:"graveSiteNumber",headerName:"Site",width:110,type:"singleSelect",editable:!0,valueOptions:i,renderCell:r=>e.jsx(me,{params:r})},{field:"quarter",headerName:"Quarter",width:110,type:"singleSelect",editable:!0,valueOptions:i,renderCell:r=>e.jsx(ye,{params:r})},{type:"actions",field:"actions",headerName:" ",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:r=>[e.jsx(j,{showInMenu:!0,icon:e.jsx(d,{icon:"solar:trash-bin-trash-bold"}),label:"Delete",onClick:()=>I(r.row.id)}),e.jsx(j,{showInMenu:!0,icon:e.jsx(d,{icon:"solar:pen-bold"}),label:"Edit",onClick:()=>k(r.row.id)})]}],L=async r=>{const a=await X(r);a&&g(a==null?void 0:a.gravestones)},O=()=>f.filter(r=>!ue.includes(r.field)).map(r=>r.field);return e.jsxs(e.Fragment,{children:[e.jsxs(q,{maxWidth:C.themeStretch?!1:"lg",sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(re,{heading:"List",links:[{name:"Gravestone",href:m.fellesraad.gravestone.create},{name:"List"}],action:e.jsx(y,{component:z,href:m.fellesraad.graveyard.create,variant:"contained",startIcon:e.jsx(d,{icon:"mingcute:add-line"}),children:"New Gravestone"}),sx:{mb:{xs:3,md:5}}}),u&&e.jsx(J,{methods:x,children:e.jsx(te,{fullWidth:!0,name:"id",label:"Graveyard",InputLabelProps:{shrink:!0},PaperPropsSx:{textTransform:"capitalize"},children:u.map(r=>e.jsx(U,{value:r==null?void 0:r.id,children:r==null?void 0:r.name},r.id))})}),e.jsx(oe,{sx:{height:{xs:800,md:2},flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:p&&e.jsx(ae,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:p,columns:f,loading:v,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:10}}},onRowSelectionModelChange:r=>{S(r)},columnVisibilityModel:D,onColumnVisibilityModelChange:r=>T(r),slots:{toolbar:()=>e.jsxs(se,{children:[e.jsx(ne,{}),e.jsx(w,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:!!c.length&&e.jsxs(y,{size:"small",color:"error",startIcon:e.jsx(d,{icon:"solar:trash-bin-trash-bold"}),onClick:l.onTrue,children:["Delete (",c.length,")"]})})]}),noRowsOverlay:()=>e.jsx(b,{title:"No Data"}),noResultsOverlay:()=>e.jsx(b,{title:"No results found"})},slotProps:{columnsPanel:{getTogglableColumns:O}}})})]}),e.jsx(ee,{open:l.value,onClose:l.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete"," ",e.jsxs("strong",{children:[" ",c.length," "]})," items?"]}),action:e.jsx(y,{variant:"contained",color:"error",onClick:()=>{N(),l.onFalse()},children:"Delete"})})]})}function Ye(){return e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsx("title",{children:" Dashboard: Gravestone List"})}),e.jsx(ge,{})]})}export{Ye as default};