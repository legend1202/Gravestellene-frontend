import{w as _,u as T,r as o,t as S,a as B,i as H,v as F,E as V,p as h,j as s,C as W,x as z,D as C,R as U,g as c,y as $,S as q,J,K,M as Q,H as X}from"./index-HVmlIZYv.js";import{i as Y,a as Z}from"./role-check-016q34qw.js";import{E as b}from"./empty-content-J0vuGcwT.js";import{R as ee,a as se,b as te,c as ie}from"./graveyard-table-row-zI0lFXLb.js";import{D as oe,G as re,a as ne,b as f}from"./DataGrid-z0EVE2U0.js";import"./format-number-Ze4u1bEl.js";import"./index-WptKgvAm.js";import"./Autocomplete-WNTy16pS.js";import"./Chip-yi7Wa9Nd.js";import"./ClickAwayListener-_jfQIiHS.js";import"./Checkbox-m4MeutVJ.js";import"./SwitchBase-hsBiV9_9.js";import"./Switch-f6XRvqtI.js";import"./Skeleton-R_VnUK7w.js";import"./TablePagination-qo-oKBHm.js";import"./FirstPage-lXeDo4YM.js";import"./TableCell-DndY-2IM.js";import"./FormControlLabel-o9IPCE2V.js";const ae=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],le={category:!1},ce=["category","actions"];function de(){const{enqueueSnackbar:n}=_(),{user:t}=T(),[j,w]=o.useState(!1),[m,y]=o.useState(!1),{t:i}=S(),R=B(),x=H(),A=F(),{services:d,servicesLoading:I}=V(t==null?void 0:t.userId),[a,u]=o.useState([]),[g,D]=o.useState([]),[k,G]=o.useState(le);o.useEffect(()=>{t!=null&&t.role&&(w(Y(t==null?void 0:t.role)),y(Z(t==null?void 0:t.role)))},[t==null?void 0:t.role]);const M=o.useCallback(e=>{x.push(h.fellesraad.service.edit(e))},[x]),E=async()=>{const e=await J();u(e.searchResults.result)};o.useEffect(()=>{m?E():d&&d.length>0&&u(d)},[m,d]);const L=async e=>{try{if((await K(e)).success){const p=a.filter(l=>l.id!==e);u(p),n("Delete success!")}}catch(r){console.error(r)}},N=async e=>{const r=await Q(e);if(r.searchResults.success){const p=a.map(l=>l.id===r.searchResults.result.id?{...l,approved:r.searchResults.result.approved}:l);u(p),n("Approve success!")}else console.error("Approve not success!")},O=e=>m?[s.jsx(f,{showInMenu:!0,icon:s.jsx(c,{icon:"eva:checkmark-circle-2-fill"}),label:"Approve",onClick:()=>N(e.row.id)})]:j?[s.jsx(f,{showInMenu:!0,icon:s.jsx(c,{icon:"solar:trash-bin-trash-bold"}),label:i("delete"),onClick:()=>L(e.row.id)}),s.jsx(f,{showInMenu:!0,icon:s.jsx(c,{icon:"solar:pen-bold"}),label:i("edit"),onClick:()=>M(e.row.id)})]:[],v=[{field:"name",headerName:i("service_name"),flex:1,minWidth:100,hideable:!1,renderCell:e=>s.jsx(ee,{params:e})},{field:"description",headerName:i("description"),minWidth:280,renderCell:e=>s.jsx(se,{params:e})},{field:"price",headerName:i("price"),minWidth:280,renderCell:e=>s.jsx(te,{params:e})},{field:"Approve",headerName:i("approve"),width:110,type:"singleSelect",editable:!0,valueOptions:ae,renderCell:e=>s.jsx(ie,{params:e})},{type:"actions",field:"actions",headerName:" ",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:e=>O(e)}],P=()=>v.filter(e=>!ce.includes(e.field)).map(e=>e.field);return s.jsxs(W,{maxWidth:A.themeStretch?!1:"lg",sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[s.jsx(z,{heading:"List",links:[{name:i("service"),href:h.fellesraad.service.root},{name:i("list")}],action:s.jsx(C,{component:U,href:h.fellesraad.service.create,variant:"contained",startIcon:s.jsx(c,{icon:"mingcute:add-line"}),children:i("new_service")}),sx:{mb:{xs:3,md:5}}}),s.jsx($,{sx:{height:{xs:800,md:2},flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"},px:3},children:a&&a.length>0&&s.jsx(oe,{disableRowSelectionOnClick:!0,rows:a,columns:v,loading:I,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:10}}},onRowSelectionModelChange:e=>{D(e)},columnVisibilityModel:k,onColumnVisibilityModelChange:e=>G(e),slots:{toolbar:()=>s.jsxs(re,{children:[s.jsx(ne,{}),s.jsx(q,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:!!g.length&&s.jsxs(C,{size:"small",color:"error",startIcon:s.jsx(c,{icon:"solar:trash-bin-trash-bold"}),onClick:R.onTrue,children:["Delete (",g.length,")"]})})]}),noRowsOverlay:()=>s.jsx(b,{title:"No Data"}),noResultsOverlay:()=>s.jsx(b,{title:"No results found"})},slotProps:{columnsPanel:{getTogglableColumns:P}}})})]})}function ke(){const{t:n}=S();return s.jsxs(s.Fragment,{children:[s.jsx(X,{children:s.jsxs("title",{children:[" ",`${n("services")}: ${n("list_of_services")}`]})}),s.jsx(de,{})]})}export{ke as default};