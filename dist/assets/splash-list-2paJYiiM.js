import{v as d,r as i,j as e,C as m,x as p,p as x,y as h,H as c}from"./index-JGGUJxTa.js";import{a as u}from"./graveyard-XASBtLuG.js";import{R as f,a as g,b as v}from"./graveyard-table-row-j4lJKb_V.js";import{D as j}from"./DataGrid-S15przbM.js";import"./graveyard-details-carousel-RA4rwKip.js";import"./styles-_6htcQjI.js";import"./index-OQBkFM31.js";import"./Autocomplete-bGY3qg-r.js";import"./Chip-8vmzDimG.js";import"./ClickAwayListener-wsQln6jz.js";import"./Checkbox-knf4fuN6.js";import"./SwitchBase-BlNstvD5.js";import"./Switch-3tzVvzRP.js";import"./Skeleton-zn8oggDq.js";import"./TablePagination-WpIltiJT.js";import"./FirstPage-bg88TicR.js";import"./TableCell-anRfX08j.js";import"./FormControlLabel-ky2qaCet.js";import"./use-light-box-BLB9u_VA.js";import"./carousel-arrow-index-QGW6sfLc.js";const y=[{value:"approved",label:"Approved"},{value:"draft",label:"Draft"}];function b(){const s=d(),{graveyards:a,graveyardsLoading:r}=u(),[o,l]=i.useState([]);i.useMemo(()=>{r||l(a)},[a,r]);const n=[{field:"name",headerName:"Graveyard",flex:1,minWidth:280,hideable:!1,renderCell:t=>e.jsx(f,{params:t})},{field:"location",headerName:"location",minWidth:280,renderCell:t=>e.jsx(g,{params:t})},{field:"publish",headerName:"Publish",width:110,type:"singleSelect",editable:!0,valueOptions:y,renderCell:t=>e.jsx(v,{params:t})}];return e.jsxs(m,{maxWidth:s.themeStretch?!1:"lg",sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(p,{heading:"List",links:[{name:"Graveyard",href:x.dashboard.root},{name:"List"}],sx:{mb:{xs:3,md:5}}}),e.jsx(h,{sx:{height:"100%",flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:a&&e.jsx(j,{rows:o,columns:n,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:10}}},autoHeight:!0})})]})}function F(){return e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx("title",{children:" Graveyard: List of the Graveyard"})}),e.jsx(b,{})]})}export{F as default};
