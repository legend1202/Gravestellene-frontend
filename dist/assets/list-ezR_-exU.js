import{j as e,m as f,S as h,n as R,L as D,B as I,b as S,k as E,q as G,r as n,p as a,C as M,s as A,t as m,R as N,h as r,v as T,H as O}from"./index-crR8fPbl.js";import{E as p}from"./empty-content-3DHsQVWb.js";import{C as P}from"./confirm-dialog-e8aG9Ock.js";import{D as F,G as U,a as B,b as i}from"./DataGrid-JyCKjmTt.js";import"./DialogTitle-qITN9Y-N.js";import"./dialogTitleClasses-bflJQ_FN.js";import"./DialogContent-PpTN-hcR.js";import"./DialogActions-uC8Ntfc2.js";import"./index-rGrVjwg1.js";import"./Autocomplete-9niLsZQ5.js";import"./Chip-HisbdHvZ.js";import"./ClickAwayListener-X3KpbesX.js";import"./Checkbox-uS0Dug3P.js";import"./SwitchBase-HZUDhW8q.js";import"./Switch-H6fQJ0cr.js";import"./Skeleton-_5UsUu-y.js";import"./TablePagination-XlSzBjLA.js";import"./FirstPage-enMprDKc.js";import"./TableCell-IjKaKf_a.js";import"./FormControlLabel-s6zQIPoP.js";function V(){return{products:[{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",fellesraadId:"fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",name:"User 1",location:"COMPANY",content:"string",newsLink:"string",forecastLink:"string",approved:!0},{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",fellesraadId:"fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",name:"User 2",location:"CLIENT",content:"string",newsLink:"string",forecastLink:"string",approved:!0},{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",fellesraadId:"fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",name:"User 3",location:"FELLESRAAD",content:"string",newsLink:"string",forecastLink:"string",approved:!1}],productsLoading:!1,productsValidating:!1,productsEmpty:!1}}function H({params:o}){return e.jsx(f,{primary:o.row.location,secondary:o.row.location,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function W({params:o}){return e.jsxs(h,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:[e.jsx(R,{alt:o.row.name,src:o.row.coverUrl,variant:"rounded",sx:{width:64,height:64,mr:2}}),e.jsx(f,{disableTypography:!0,primary:e.jsx(D,{noWrap:!0,color:"inherit",variant:"subtitle2",onClick:o.row.onViewRow,href:"/graveyard/i",sx:{cursor:"pointer"},children:o.row.name}),secondary:e.jsx(I,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:o.row.category}),sx:{display:"flex",flexDirection:"column"}})]})}const z={category:!1},_=["category","actions"];function Y(){const o=S(),s=E(),x=G(),{products:l,productsLoading:g}=V(),[b,y]=n.useState([]),[d,j]=n.useState([]),[w,C]=n.useState(z);n.useEffect(()=>{l.length&&(console.log(l),y([]))},[l]);const L=n.useCallback(()=>{},[]),c=n.useCallback(t=>{s.push(a.fellesraad.graveyard.edit(t))},[s]),k=n.useCallback(t=>{s.push(a.fellesraad.graveyard.details(t))},[s]),u=[{field:"name",headerName:"Name",flex:1,minWidth:280,hideable:!1,renderCell:t=>e.jsx(W,{params:t})},{field:"role",headerName:"Role",minWidth:280,renderCell:t=>e.jsx(H,{params:t})},{type:"actions",field:"actions",headerName:" ",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:t=>[e.jsx(i,{showInMenu:!0,icon:e.jsx(r,{icon:"solar:eye-bold"}),label:"ADMIN",onClick:()=>k(t.row.id)}),e.jsx(i,{showInMenu:!0,icon:e.jsx(r,{icon:"solar:pen-bold"}),label:"FELLESRAAD",onClick:()=>c(t.row.id)}),e.jsx(i,{showInMenu:!0,icon:e.jsx(r,{icon:"solar:pen-bold"}),label:"COMPANY",onClick:()=>c(t.row.id)}),e.jsx(i,{showInMenu:!0,icon:e.jsx(r,{icon:"solar:pen-bold"}),label:"CUSTOMER",onClick:()=>c(t.row.id)})]}],v=()=>u.filter(t=>!_.includes(t.field)).map(t=>t.field);return e.jsxs(e.Fragment,{children:[e.jsxs(M,{maxWidth:x.themeStretch?!1:"lg",sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(A,{heading:"List",links:[{name:"Graveyard",href:a.dashboard.root},{name:"List"}],action:e.jsx(m,{component:N,href:a.fellesraad.graveyard.create,variant:"contained",startIcon:e.jsx(r,{icon:"mingcute:add-line"}),children:"New Graveyard"}),sx:{mb:{xs:3,md:5}}}),e.jsx(T,{sx:{height:{xs:800,md:2},flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:e.jsx(F,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:b,columns:u,loading:g,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:10}}},onRowSelectionModelChange:t=>{j(t)},columnVisibilityModel:w,onColumnVisibilityModelChange:t=>C(t),slots:{toolbar:()=>e.jsx(e.Fragment,{children:e.jsxs(U,{children:[e.jsx(B,{}),e.jsx(h,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:!!d.length&&e.jsxs(m,{size:"small",color:"error",startIcon:e.jsx(r,{icon:"solar:trash-bin-trash-bold"}),onClick:o.onTrue,children:["Delete (",d.length,")"]})})]})}),noRowsOverlay:()=>e.jsx(p,{title:"No Data"}),noResultsOverlay:()=>e.jsx(p,{title:"No results found"})},slotProps:{columnsPanel:{getTogglableColumns:v}}})})]}),e.jsx(P,{open:o.value,onClose:o.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete"," ",e.jsxs("strong",{children:[" ",d.length," "]})," items?"]}),action:e.jsx(m,{variant:"contained",color:"error",onClick:()=>{L(),o.onFalse()},children:"Delete"})})]})}function pe(){return e.jsxs(e.Fragment,{children:[e.jsx(O,{children:e.jsx("title",{children:" Graveyard: List of the Graveyard"})}),e.jsx(Y,{})]})}export{pe as default};