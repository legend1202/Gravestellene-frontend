import{Z as N,a as L,r as i,u as j,b as B,k as W,G as F,a0 as O,p as h,j as e,C as P,J as T,B as C,R as z,h as c,K as H,S as _,a1 as $,a2 as q,a3 as J,H as K}from"./index-F58UWM6d.js";import{a as Q,i as V}from"./role-check-5Hlc5mGT.js";import{E as g}from"./empty-content-cu3d-hY6.js";import{R as Z,a as U,b as X,c as Y}from"./graveyard-table-row-Sn8Z_VvW.js";import{D as ee}from"./DataGrid-Qd0gu4hV.js";import{G as se,a as te}from"./GridToolbarQuickFilter-cyoWmbS9.js";import{G as f}from"./GridActionsCellItem-ZjyDAvNv.js";import"./format-number-5NpL39v-.js";import"./index-AQ_QNN8Z.js";import"./Autocomplete--E0PVWeu.js";import"./Chip-Bf9OfEDF.js";import"./ClickAwayListener-FZVsDqfR.js";import"./Checkbox-LoW-zYTz.js";import"./SwitchBase-QO7WNYjK.js";import"./Switch-mI38wMsz.js";import"./Skeleton-UqJgurFx.js";import"./TablePagination-boMs0Lib.js";import"./KeyboardArrowRight-nt3KTS5I.js";import"./FirstPage-LKd4WdE0.js";import"./TableCell-6a7cWiGU.js";import"./FormControlLabel-yEUOmb-6.js";function re(){const{enqueueSnackbar:n}=N(),{user:t}=L(),[b,w]=i.useState(!1),[m,S]=i.useState(!1),{t:r}=j(),R=B(),x=W(),y=F(),{services:d,servicesLoading:A}=O(t==null?void 0:t.userId),[a,u]=i.useState([]),[v]=i.useState([]);i.useEffect(()=>{t!=null&&t.role&&(w(Q(t==null?void 0:t.role)),S(V(t==null?void 0:t.role)))},[t==null?void 0:t.role]);const k=i.useCallback(s=>{x.push(h.fellesraad.service.edit(s))},[x]),G=async()=>{const s=await $();u(s.searchResults.result)};i.useEffect(()=>{m?G():d&&d.length>0&&u(d)},[m,d]);const D=async s=>{try{if((await q(s)).success){const p=a.filter(l=>l.id!==s);u(p),n("Delete success!")}}catch(o){console.error(o)}},I=async s=>{const o=await J(s);if(o.searchResults.success){const p=a.map(l=>l.id===o.searchResults.result.id?{...l,approved:o.searchResults.result.approved}:l);u(p),n("Approve success!")}else console.error("Approve not success!")},M=s=>m?[e.jsx(f,{showInMenu:!0,icon:e.jsx(c,{icon:"eva:checkmark-circle-2-fill"}),label:r("Approve"),onClick:()=>I(s.row.id)})]:b?[e.jsx(f,{showInMenu:!0,icon:e.jsx(c,{icon:"solar:trash-bin-trash-bold"}),label:r("delete"),onClick:()=>D(s.row.id)}),e.jsx(f,{showInMenu:!0,icon:e.jsx(c,{icon:"solar:pen-bold"}),label:r("Edit"),onClick:()=>k(s.row.id)})]:[],E=[{field:"name",headerName:r("service_name"),flex:1,minWidth:220,hideable:!1,disableColumnMenu:!0,renderCell:s=>e.jsx(Z,{params:s})},{field:"description",headerName:r("Description"),minWidth:280,disableColumnMenu:!0,renderCell:s=>e.jsx(U,{params:s})},{field:"price",headerName:r("Price"),minWidth:140,disableColumnMenu:!0,renderCell:s=>e.jsx(X,{params:s})},{field:"Approve",headerName:r("Approve"),minWidth:110,type:"singleSelect",disableColumnMenu:!0,renderCell:s=>e.jsx(Y,{params:s})},{type:"actions",field:"actions",headerName:" ",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:s=>M(s)}];return e.jsxs(P,{maxWidth:y.themeStretch?!1:"lg",sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(T,{heading:r("List"),links:[{name:r("service"),href:h.fellesraad.service.root},{name:r("List")}],action:e.jsx(C,{component:z,href:h.fellesraad.service.create,variant:"contained",startIcon:e.jsx(c,{icon:"mingcute:add-line"}),children:r("New Service")}),sx:{mb:{xs:3,md:5}}}),e.jsx(H,{sx:{height:{xs:800,md:2},flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"},px:3},children:a&&a.length>0&&e.jsx(ee,{disableRowSelectionOnClick:!0,rows:a,columns:E,loading:A,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:10}}},slots:{toolbar:()=>e.jsxs(se,{children:[e.jsx(te,{}),e.jsx(_,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:!!v.length&&e.jsxs(C,{size:"small",color:"error",startIcon:e.jsx(c,{icon:"solar:trash-bin-trash-bold"}),onClick:R.onTrue,children:["Delete (",v.length,")"]})})]}),noRowsOverlay:()=>e.jsx(g,{title:"No Data"}),noResultsOverlay:()=>e.jsx(g,{title:"No results found"})}})})]})}function ye(){const{t:n}=j();return e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsxs("title",{children:[" ",`${n("services")}: ${n("list_of_services")}`]})}),e.jsx(re,{})]})}export{ye as default};
