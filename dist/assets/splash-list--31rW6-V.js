import{u as d,G as p,r as s,j as e,C as x,J as h,p as c,K as u,H as f}from"./index-HKvYvq3j.js";import{u as g}from"./graveyard-zrdqr7Mr.js";import{R as j,a as y,b as C}from"./graveyard-table-row-FGqiRw_6.js";import{D as G}from"./DataGrid-DpAWUB_n.js";import"./graveyard-details-carousel-NpLTHGxn.js";import"./styles-8o45jqZe.js";import"./index-6AoZoM6i.js";import"./Autocomplete-pGPdnYFd.js";import"./Chip-0IbGJdtD.js";import"./ClickAwayListener-ieEBWmID.js";import"./Checkbox-vB-XJoJj.js";import"./SwitchBase-dhyrm6Co.js";import"./Switch-Hi_VICkA.js";import"./Skeleton-yXkKr8fp.js";import"./TablePagination-APv1Zc7q.js";import"./KeyboardArrowRight-bbyronaV.js";import"./FirstPage-DSIFeLwz.js";import"./TableCell-96gyKv7u.js";import"./FormControlLabel-AwOrzazp.js";import"./use-light-box-qy7CEV4w.js";import"./carousel-arrow-index-2QDXTQen.js";function v(){const{t}=d(),o=p(),{graveyards:a,graveyardsLoading:i}=g(),[l,n]=s.useState([]);s.useMemo(()=>{i||n(a)},[a,i]);const m=[{field:"name",headerName:t("Graveyard"),flex:1,minWidth:280,hideable:!1,renderCell:r=>e.jsx(j,{params:r})},{field:"location",headerName:t("location"),minWidth:280,renderCell:r=>e.jsx(y,{params:r})},{field:"publish",headerName:t("Approve"),minWidth:110,type:"singleSelect",renderCell:r=>e.jsx(C,{params:r})}];return e.jsxs(x,{maxWidth:o.themeStretch?!1:"lg",sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(h,{heading:t("List"),links:[{name:t("Graveyard"),href:c.dashboard.root},{name:t("List")}],sx:{mb:{xs:3,md:5}}}),e.jsx(u,{sx:{height:"100%",flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:a&&e.jsx(G,{rows:l,columns:m,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:10}}},autoHeight:!0})})]})}function q(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx("title",{children:" Graveyard: List of the Graveyard"})}),e.jsx(v,{})]})}export{q as default};