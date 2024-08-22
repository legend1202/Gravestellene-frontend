import{Q as A,U as D,r as a,V as g,W as E,u as y,j as e,X as b,S as I,Y as U,v as N,G,Z as T,h as d,C as k,J as V,p as O,K as v,H as P}from"./index-HKvYvq3j.js";import{E as f}from"./empty-content-ikLVFtYm.js";import{G as c}from"./GridActionsCellItem-LEzex8T7.js";import{D as z}from"./DataGrid-DpAWUB_n.js";import{G as W,a as F}from"./GridToolbarQuickFilter-hJ5G_Pju.js";import"./index-6AoZoM6i.js";import"./Autocomplete-pGPdnYFd.js";import"./Chip-0IbGJdtD.js";import"./ClickAwayListener-ieEBWmID.js";import"./Checkbox-vB-XJoJj.js";import"./SwitchBase-dhyrm6Co.js";import"./Switch-Hi_VICkA.js";import"./Skeleton-yXkKr8fp.js";import"./TablePagination-APv1Zc7q.js";import"./KeyboardArrowRight-bbyronaV.js";import"./FirstPage-DSIFeLwz.js";import"./TableCell-96gyKv7u.js";import"./FormControlLabel-AwOrzazp.js";function H(){const t=g.admin.userList,{data:o,isLoading:r,error:i,isValidating:n}=A(t,D);return a.useMemo(()=>({users:o==null?void 0:o.result.users,usersLoading:r,usersError:i,usersValidating:n}),[o==null?void 0:o.result,i,r,n])}const _=async t=>{const o=await E.put(g.admin.userRoleUpdate,{user:t});return{data:(o==null?void 0:o.data)||[]}};function B({params:t}){const{t:o}=y();return e.jsx(b,{primary:o(t.row.role),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function Y({params:t}){return e.jsxs(I,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:[e.jsx(U,{alt:t.row.name,src:t.row.coverUrl,variant:"rounded",sx:{width:24,height:24,mr:2}}),e.jsx(b,{disableTypography:!0,primary:e.jsx(N,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:t.row.name})})]})}const Q={category:!1},$=["category","actions"];function q(){const{t}=y(),o=G(),{enqueueSnackbar:r}=T(),{users:i,usersLoading:n}=H(),[u,x]=a.useState([]),[C,j]=a.useState(!1),[w,L]=a.useState(Q);a.useEffect(()=>{i&&x(i)},[i]);const l=async(s,M)=>{const m=await _({id:s,role:M});if(m.data.success){r(t("update_success"));const R=u.map(p=>p.id===m.data.result.id?{...p,role:m.data.result.role}:p);x([...R]),j(!C)}else r("Update did not success")},h=[{field:"name",headerName:`${t("Name")}`,flex:1,minWidth:280,hideable:!1,disableColumnMenu:!0,renderCell:s=>e.jsx(Y,{params:s})},{field:"role",headerName:`${t("Role")}`,minWidth:280,disableColumnMenu:!0,renderCell:s=>e.jsx(B,{params:s})},{type:"actions",field:"actions",headerName:" ",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:s=>[e.jsx(c,{showInMenu:!0,icon:e.jsx(d,{icon:"solar:eye-bold"}),label:t("ADMIN"),onClick:()=>l(s.row.id,"ADMIN")}),e.jsx(c,{showInMenu:!0,icon:e.jsx(d,{icon:"solar:pen-bold"}),label:t("FELLESRAAD"),onClick:()=>l(s.row.id,"FELLESRAAD")}),e.jsx(c,{showInMenu:!0,icon:e.jsx(d,{icon:"solar:pen-bold"}),label:t("COMPANY"),onClick:()=>l(s.row.id,"COMPANY")}),e.jsx(c,{showInMenu:!0,icon:e.jsx(d,{icon:"solar:pen-bold"}),label:t("CLIENT"),onClick:()=>l(s.row.id,"CLIENT")})]}],S=()=>h.filter(s=>!$.includes(s.field)).map(s=>s.field);return e.jsxs(k,{maxWidth:o.themeStretch?!1:"lg",sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(V,{heading:t("List"),links:[{name:t("User"),href:O.dashboard.root},{name:t("List")}],sx:{mb:{xs:3,md:5}}}),e.jsx(v,{sx:{height:{xs:800,md:2},flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:e.jsx(z,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:u,columns:h,loading:n,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:10}}},columnVisibilityModel:w,onColumnVisibilityModelChange:s=>L(s),slots:{toolbar:()=>e.jsx(e.Fragment,{children:e.jsx(W,{children:e.jsx(F,{})})}),noRowsOverlay:()=>e.jsx(f,{title:"No Data"}),noResultsOverlay:()=>e.jsx(f,{title:"No results found"})},slotProps:{columnsPanel:{getTogglableColumns:S}}})})]})}function he(){return e.jsxs(e.Fragment,{children:[e.jsx(P,{children:e.jsx("title",{children:" Admin: List of Users"})}),e.jsx(q,{})]})}export{he as default};