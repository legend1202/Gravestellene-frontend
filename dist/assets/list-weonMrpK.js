import{j as e,z as L,w as u,S as h,A as D,L as G,B as k,b as I,e as P,x as T,r,p as s,d as a,C as E,y as d,R as M,H as N}from"./index-_tg0Vjne.js";import"./index.esm-zORWVp2x.js";import"./index-R3sdzr18.js";import"./image-SDlH-Y9m.js";import"./styles-GXLlqNmt.js";import{a as O}from"./service-gGy39hDA.js";import{E as m}from"./empty-content-y3p0Z0lQ.js";import{b as p,D as A,G as B,a as F,C as V}from"./confirm-dialog-S7PJEDQN.js";import{C as H}from"./custom-breadcrumbs-KsOYWZLR.js";import{C as W}from"./Card-SUD4YaWI.js";import"./TextField-ZkEZfJO9.js";import"./index-ntnlb33b.js";import"./Autocomplete-qcUxFr8Z.js";import"./Close-50MXt4l6.js";import"./Chip-8y1KTROk.js";import"./Checkbox-Ucah0XzZ.js";import"./SwitchBase-73LMEt7P.js";import"./Switch-wTiz88m9.js";import"./Skeleton-DE5mqhd_.js";import"./CircularProgress-JD4dZggQ.js";import"./FirstPage-W0D_CAXq.js";import"./TableCell-u3gO5J4l.js";import"./FormControlLabel-Tt1qENhS.js";import"./DialogTitle-ZVVh3H6m.js";import"./DialogContent-1g-PAecc.js";function z({params:o}){return e.jsx(L,{variant:"soft",color:o.row.approved&&"info"||"default",children:o.row.approved?"Approved":""})}function U({params:o}){return e.jsx(u,{primary:o.row.location,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function _({params:o}){return e.jsxs(h,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:[e.jsx(D,{alt:o.row.name,src:o.row.coverUrl,variant:"rounded",sx:{width:64,height:64,mr:2}}),e.jsx(u,{disableTypography:!0,primary:e.jsx(G,{noWrap:!0,color:"inherit",variant:"subtitle2",onClick:o.row.onViewRow,href:"/graveyard/i",sx:{cursor:"pointer"},children:o.row.name}),secondary:e.jsx(k,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:o.row.category}),sx:{display:"flex",flexDirection:"column"}})]})}const Q=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],q={category:!1},J=["category","actions"];function K(){const o=I(),i=P(),x=T(),{products:n,productsLoading:f}=O(),[g,y]=r.useState([]),[l,b]=r.useState([]),[j,w]=r.useState(q);r.useEffect(()=>{n.length&&y(n)},[n]);const C=r.useCallback(()=>{},[]),v=r.useCallback(t=>{i.push(s.fellesraad.graveyard.edit(t))},[i]),S=r.useCallback(t=>{i.push(s.fellesraad.graveyard.details(t))},[i]),c=[{field:"name",headerName:"Service",flex:1,minWidth:280,hideable:!1,renderCell:t=>e.jsx(_,{params:t})},{field:"location",headerName:"Price",minWidth:280,renderCell:t=>e.jsx(U,{params:t})},{field:"publish",headerName:"Publish",width:110,type:"singleSelect",editable:!0,valueOptions:Q,renderCell:t=>e.jsx(z,{params:t})},{type:"actions",field:"actions",headerName:" ",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:t=>[e.jsx(p,{showInMenu:!0,icon:e.jsx(a,{icon:"solar:eye-bold"}),label:"View",onClick:()=>S(t.row.id)}),e.jsx(p,{showInMenu:!0,icon:e.jsx(a,{icon:"solar:pen-bold"}),label:"Edit",onClick:()=>v(t.row.id)})]}],R=()=>c.filter(t=>!J.includes(t.field)).map(t=>t.field);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{maxWidth:x.themeStretch?!1:"lg",sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(H,{heading:"List",links:[{name:"Graveyard",href:s.dashboard.root},{name:"List"}],action:e.jsx(d,{component:M,href:s.fellesraad.graveyard.create,variant:"contained",startIcon:e.jsx(a,{icon:"mingcute:add-line"}),children:"New Graveyard"}),sx:{mb:{xs:3,md:5}}}),e.jsx(W,{sx:{height:{xs:800,md:2},flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:e.jsx(A,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:g,columns:c,loading:f,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:10}}},onRowSelectionModelChange:t=>{b(t)},columnVisibilityModel:j,onColumnVisibilityModelChange:t=>w(t),slots:{toolbar:()=>e.jsx(e.Fragment,{children:e.jsxs(B,{children:[e.jsx(F,{}),e.jsx(h,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:!!l.length&&e.jsxs(d,{size:"small",color:"error",startIcon:e.jsx(a,{icon:"solar:trash-bin-trash-bold"}),onClick:o.onTrue,children:["Delete (",l.length,")"]})})]})}),noRowsOverlay:()=>e.jsx(m,{title:"No Data"}),noResultsOverlay:()=>e.jsx(m,{title:"No results found"})},slotProps:{columnsPanel:{getTogglableColumns:R}}})})]}),e.jsx(V,{open:o.value,onClose:o.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete"," ",e.jsxs("strong",{children:[" ",l.length," "]})," items?"]}),action:e.jsx(d,{variant:"contained",color:"error",onClick:()=>{C(),o.onFalse()},children:"Delete"})})]})}function we(){return e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsx("title",{children:" Graveyard: List of the Graveyard"})}),e.jsx(K,{})]})}export{we as default};
