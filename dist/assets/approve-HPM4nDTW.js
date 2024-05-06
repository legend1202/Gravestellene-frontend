import{j as e,z as S,w as p,S as m,A as R,L as G,B as L,b as D,x as k,r,d as n,C as I,p as A,y as l,H as T}from"./index-_tg0Vjne.js";import"./index.esm-zORWVp2x.js";import"./index-R3sdzr18.js";import"./image-SDlH-Y9m.js";import"./styles-GXLlqNmt.js";import{u as M}from"./service-gGy39hDA.js";import{E as d}from"./empty-content-y3p0Z0lQ.js";import{b as c,D as O,G as E,a as N,C as P}from"./confirm-dialog-S7PJEDQN.js";import{C as B}from"./custom-breadcrumbs-KsOYWZLR.js";import{C as F}from"./Card-SUD4YaWI.js";import"./TextField-ZkEZfJO9.js";import"./index-ntnlb33b.js";import"./Autocomplete-qcUxFr8Z.js";import"./Close-50MXt4l6.js";import"./Chip-8y1KTROk.js";import"./Checkbox-Ucah0XzZ.js";import"./SwitchBase-73LMEt7P.js";import"./Switch-wTiz88m9.js";import"./Skeleton-DE5mqhd_.js";import"./CircularProgress-JD4dZggQ.js";import"./FirstPage-W0D_CAXq.js";import"./TableCell-u3gO5J4l.js";import"./FormControlLabel-Tt1qENhS.js";import"./DialogTitle-ZVVh3H6m.js";import"./DialogContent-1g-PAecc.js";function H({params:t}){return e.jsx(S,{variant:"soft",color:t.row.approved&&"info"||"default",children:t.row.approved?"Approved":""})}function V({params:t}){return e.jsx(p,{primary:t.row.location,secondary:t.row.location,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function W({params:t}){return e.jsxs(m,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:[e.jsx(R,{alt:t.row.name,src:t.row.coverUrl,variant:"rounded",sx:{width:64,height:64,mr:2}}),e.jsx(p,{disableTypography:!0,primary:e.jsx(G,{noWrap:!0,color:"inherit",variant:"subtitle2",onClick:t.row.onViewRow,href:"/graveyard/i",sx:{cursor:"pointer"},children:t.row.name}),secondary:e.jsx(L,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:t.row.category}),sx:{display:"flex",flexDirection:"column"}})]})}const z=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],U={category:!1},_=["category","actions"];function Q(){const t=D(),u=k(),{products:i,productsLoading:h}=M(),[x,f]=r.useState([]),[s,g]=r.useState([]),[y,b]=r.useState(U);r.useEffect(()=>{i.length&&f(i)},[i]);const j=r.useCallback(()=>{},[]),w=r.useCallback(o=>{},[]),C=r.useCallback(o=>{},[]),a=[{field:"service",headerName:"Service",flex:1,minWidth:280,hideable:!1,renderCell:o=>e.jsx(W,{params:o})},{field:"graveyard",headerName:"Graveyard",minWidth:280,renderCell:o=>e.jsx(V,{params:o})},{field:"approve",headerName:"Approved Status",width:180,type:"singleSelect",editable:!0,valueOptions:z,renderCell:o=>e.jsx(H,{params:o})},{type:"actions",field:"actions",headerName:" ",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:o=>[e.jsx(c,{showInMenu:!0,icon:e.jsx(n,{icon:"solar:eye-bold"}),label:"Approve",onClick:()=>C(o.row.id)}),e.jsx(c,{showInMenu:!0,icon:e.jsx(n,{icon:"solar:pen-bold"}),label:"Reject",onClick:()=>w(o.row.id)})]}],v=()=>a.filter(o=>!_.includes(o.field)).map(o=>o.field);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{maxWidth:u.themeStretch?!1:"lg",sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(B,{heading:"List",links:[{name:"Graveyard",href:A.dashboard.root},{name:"List"}],sx:{mb:{xs:3,md:5}}}),e.jsx(F,{sx:{height:{xs:800,md:2},flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:e.jsx(O,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:x,columns:a,loading:h,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:10}}},onRowSelectionModelChange:o=>{g(o)},columnVisibilityModel:y,onColumnVisibilityModelChange:o=>b(o),slots:{toolbar:()=>e.jsx(e.Fragment,{children:e.jsxs(E,{children:[e.jsx(N,{}),e.jsx(m,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:!!s.length&&e.jsxs(l,{size:"small",color:"error",startIcon:e.jsx(n,{icon:"solar:trash-bin-trash-bold"}),onClick:t.onTrue,children:["Reject (",s.length,")"]})})]})}),noRowsOverlay:()=>e.jsx(d,{title:"No Data"}),noResultsOverlay:()=>e.jsx(d,{title:"No results found"})},slotProps:{columnsPanel:{getTogglableColumns:v}}})})]}),e.jsx(P,{open:t.value,onClose:t.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete"," ",e.jsxs("strong",{children:[" ",s.length," "]})," items?"]}),action:e.jsx(l,{variant:"contained",color:"error",onClick:()=>{j(),t.onFalse()},children:"Delete"})})]})}function ye(){return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx("title",{children:" Graveyard: List of the Graveyard"})}),e.jsx(Q,{})]})}export{ye as default};
