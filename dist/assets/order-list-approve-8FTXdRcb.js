import{j as e,Y as l,w as p,y as A,S as x,u as M,r as n,_ as O,J as N,a0 as i,C as G,K as L,p as R,M as E,g as T}from"./index-olWG5rmW.js";import{i as k}from"./role-check-5Hlc5mGT.js";import{G as I,A as W}from"./order-Y5jxx5ML.js";import{E as f}from"./empty-content-aEHGwk1d.js";import{f as P}from"./format-number-dgBbQaGG.js";import{D as _}from"./DataGrid-zjjvXiyR.js";import{G as B}from"./GridActionsCellItem-yab85Fz2.js";function H({params:r}){return e.jsx(e.Fragment,{children:r.row.serviceDetails.map(s=>e.jsx(l,{disableTypography:!0,primary:e.jsx(p,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:P(s.price)}),sx:{display:"flex",flexDirection:"column"}},s.id))})}function U({params:r}){return e.jsx(A,{variant:"soft",color:r.row.approved&&"info"||"default",children:r.row.approved?"Approved":"Draft"})}function V({params:r}){return e.jsx(l,{primary:`${r.row.gravestoneDetails.firstName} ${r.row.gravestoneDetails.lastName}`,primaryTypographyProps:{typography:"body2",noWrap:!0}})}function z({params:r}){return e.jsx(x,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:r.row.serviceDetails.map(s=>e.jsx(l,{disableTypography:!0,primary:e.jsx(p,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:s.name}),sx:{display:"flex",flexDirection:"column"}},s.id))})}function F({params:r}){return e.jsx(x,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:e.jsx(l,{disableTypography:!0,primary:e.jsx(p,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:r.row.userDetails.name})})})}const $={category:!1},q=["category","actions"];function te(){const{user:r}=M(),[s,h]=n.useState(!1),{enqueueSnackbar:y}=O(),g=N(),{orders:a,ordersLoading:b}=I(),[u,d]=n.useState([]),[C,v]=n.useState($);n.useEffect(()=>{r!=null&&r.role&&h(k(r==null?void 0:r.role))},[r==null?void 0:r.role]),n.useEffect(()=>{if(a&&a.length>0)if(s)d(a);else{const t=a.filter(o=>(o==null?void 0:o.approved)===!0);d(t)}},[a,s]);const j=async t=>{const o=await W(t);if(o.results.success){const S=u.map(c=>c.id===o.results.result.id?{...c,approved:o.results.result.approved}:c);d(S),y("Approve success!")}else console.error("Approve not success!")},w=t=>s?[e.jsx(B,{showInMenu:!0,icon:e.jsx(T,{icon:"eva:checkmark-circle-2-fill"}),label:"Approve",onClick:()=>j(t.row.id)})]:[],m=[{field:"name",headerName:i("Client"),flex:1,minWidth:140,hideable:!1,disableColumnMenu:!0,renderCell:t=>e.jsx(F,{params:t})},{field:"orders",headerName:i("Orders"),minWidth:140,disableColumnMenu:!0,renderCell:t=>e.jsx(z,{params:t})},{field:"price",headerName:i("Price"),minWidth:140,disableColumnMenu:!0,renderCell:t=>e.jsx(H,{params:t})},{field:"gravestone",headerName:i("Gravestone"),minWidth:280,type:"singleSelect",disableColumnMenu:!0,renderCell:t=>e.jsx(V,{params:t})},{field:"approve",headerName:i("Approve"),minWidth:110,type:"singleSelect",disableColumnMenu:!0,renderCell:t=>e.jsx(U,{params:t})},{type:"actions",field:"actions",headerName:" ",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:t=>w(t)}],D=()=>m.filter(t=>!q.includes(t.field)).map(t=>t.field);return e.jsxs(G,{maxWidth:g.themeStretch?!1:"lg",sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(L,{heading:i("List"),links:[{name:i("Order"),href:R.dashboard.root},{name:i("List")}],sx:{mb:{xs:3,md:5}}}),e.jsx(E,{sx:{height:{xs:800,md:2},px:3,flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:a&&e.jsx(_,{disableRowSelectionOnClick:!0,rows:u,columns:m,loading:b,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:10}}},columnVisibilityModel:C,onColumnVisibilityModelChange:t=>v(t),slots:{noRowsOverlay:()=>e.jsx(f,{title:"No Data"}),noResultsOverlay:()=>e.jsx(f,{title:"No results found"})},slotProps:{columnsPanel:{getTogglableColumns:D}}})})]})}export{te as O};
