import{r as i,as as X,X as O,j as e,aq as L,v as te,aa as se,au as re,F as le,b1 as ne,b3 as S,b2 as ae,d as j,S as w,B as G,i as F,w as ie,k as ce,g as Y,aV as de,bv as ue,aJ as pe,A as he,L as xe,m as be,b as me,e as fe,h as ge,af as Ce,p as T,dD as E,C as je,R as we,H as ye}from"./index-xccKnqtj.js";import"./index-scZDXM4y.js";import"./index.esm-YEE7kA5n.js";import"./image-ihTI-eUB.js";import"./mui-one-time-password-input.es-8WdpYP-F.js";import"./styles-XyZpQVQ4.js";import"./_baseToString-cxoetQrk.js";import"./color-picker-jNO9G0Wu.js";import{u as ke}from"./product-Ow0l_3BO.js";import{E as z}from"./empty-content-FevP8_c1.js";import{C as Pe}from"./confirm-dialog-SwAW3vpZ.js";import{C as ve}from"./custom-breadcrumbs-l_npxqvb.js";import{a as $,b as W,S as H,O as U}from"./TextField-_2MBvEfR.js";import{C as q}from"./Checkbox-d99zhaav.js";import{C as J}from"./Chip-_G7JEqc_.js";import{f as Se}from"./format-number-po7E8qFT.js";import{C as Te}from"./Card-tMu97UR4.js";import{u as Z,c as ee,d as D,g as oe,e as B,f as Re,h as Ie,i as Le,b as _,D as Fe,G as De,a as Oe,j as Ge}from"./DataGrid-dgFD5cAt.js";import"./incrementer-button-smeRqjqq.js";import"./product-details-carousel-8yokSGTs.js";import"./styles-vVjrARI1.js";import"./DialogTitle-FkY0OOI0.js";import"./dialogTitleClasses-P16bkwpN.js";import"./DialogContent-JWUImff-.js";import"./DialogActions-DIqTiIED.js";import"./SwitchBase-r3AAQIaf.js";import"./index-Ahahihkz.js";import"./Autocomplete-ZCPYHfF2.js";import"./Close-z_cgMax_.js";import"./ClickAwayListener-uNsuJQqx.js";import"./Switch-8NlbQv1L.js";import"./Skeleton-ur7bka2j.js";import"./CircularProgress-Ir6PpH3m.js";import"./TablePagination-bieaFalW.js";import"./FirstPage-nPhwdI91.js";import"./TableCell-II5q65hQ.js";import"./FormControlLabel-rYqjbgl6.js";import"./use-light-box-p3l2XJiY.js";import"./carousel-arrow-index-4QuI9OrK.js";const Be=["onClick"],Ne=i.forwardRef(function(r,u){var x;const{onClick:c}=r,m=X(r,Be),b=O(),l=O(),s=Z(),a=ee(),p=D(s,oe),g=n=>{p.open&&p.openedPanelValue===B.columns?s.current.hidePreferences():s.current.showPreferences(B.columns,l,b),c==null||c(n)};if(a.disableColumnSelector)return null;const f=p.open&&p.panelId===l;return e.jsx(a.slots.baseButton,L({ref:u,id:b,size:"small","aria-label":s.current.getLocaleText("toolbarColumnsLabel"),"aria-haspopup":"menu","aria-expanded":f,"aria-controls":f?l:void 0,startIcon:e.jsx(a.slots.columnSelectorIcon,{})},m,{onClick:g},(x=a.slotProps)==null?void 0:x.baseButton,{children:s.current.getLocaleText("toolbarColumns")}))}),Ve=["componentsProps"],Ae=o=>{const{classes:r}=o;return re({root:["toolbarFilterList"]},Re,r)},_e=te("ul",{name:"MuiDataGrid",slot:"ToolbarFilterList",overridesResolver:(o,r)=>r.toolbarFilterList})(({theme:o})=>({margin:o.spacing(1,1,.5),padding:o.spacing(0,1)})),Me=i.forwardRef(function(r,u){var x,c;const{componentsProps:m={}}=r,b=X(r,Ve),l=m.button||{},s=Z(),a=ee(),p=D(s,Ie),g=D(s,Le),f=D(s,oe),n=Ae(a),h=O(),k=O(),R=i.useMemo(()=>{if(f.open)return s.current.getLocaleText("toolbarFiltersTooltipHide");if(p.length===0)return s.current.getLocaleText("toolbarFiltersTooltipShow");const P=d=>g[d.field].filterOperators.find(C=>C.value===d.operator).label||s.current.getLocaleText(`filterOperator${le(d.operator)}`).toString(),y=d=>{const{getValueAsString:C}=g[d.field].filterOperators.find(V=>V.value===d.operator);return C?C(d.value):d.value};return e.jsxs("div",{children:[s.current.getLocaleText("toolbarFiltersTooltipActive")(p.length),e.jsx(_e,{className:n.root,ownerState:a,children:p.map((d,C)=>L({},g[d.field]&&e.jsx("li",{children:`${g[d.field].headerName||d.field}
                  ${P(d)}
                  ${d.value!=null?y(d):""}`},C)))})]})},[s,a,f.open,p,g,n]),N=P=>{var y;const{open:d,openedPanelValue:C}=f;d&&C===B.filters?s.current.hidePreferences():s.current.showPreferences(B.filters,k,h),(y=l.onClick)==null||y.call(l,P)};if(a.disableColumnFilter)return null;const I=f.open&&f.panelId===k;return e.jsx(a.slots.baseTooltip,L({title:R,enterDelay:1e3},b,(x=a.slotProps)==null?void 0:x.baseTooltip,{children:e.jsx(a.slots.baseButton,L({ref:u,id:h,size:"small","aria-label":s.current.getLocaleText("toolbarFiltersLabel"),"aria-controls":I?k:void 0,"aria-expanded":I,"aria-haspopup":!0,startIcon:e.jsx(se,{badgeContent:p.length,color:"primary",children:e.jsx(a.slots.openFilterButtonIcon,{})})},l,{onClick:N},(c=a.slotProps)==null?void 0:c.baseButton,{children:s.current.getLocaleText("toolbarFilters")}))}))});function Ee({filters:o,onFilters:r,stockOptions:u,publishOptions:x}){const c=ne(),[m,b]=i.useState(o.stock),[l,s]=i.useState(o.publish),a=i.useCallback(n=>{const{target:{value:h}}=n;b(typeof h=="string"?h.split(","):h)},[]),p=i.useCallback(n=>{const{target:{value:h}}=n;s(typeof h=="string"?h.split(","):h)},[]),g=i.useCallback(()=>{r("stock",m)},[r,m]),f=i.useCallback(()=>{r("publish",l)},[r,l]);return e.jsxs(e.Fragment,{children:[e.jsxs($,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(W,{children:"Stock"}),e.jsx(H,{multiple:!0,value:m,onChange:a,input:e.jsx(U,{label:"Stock"}),renderValue:n=>n.map(h=>h).join(", "),onClose:g,sx:{textTransform:"capitalize"},children:u.map(n=>e.jsxs(S,{value:n.value,children:[e.jsx(q,{disableRipple:!0,size:"small",checked:m.includes(n.value)}),n.label]},n.value))})]}),e.jsxs($,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(W,{children:"Publish"}),e.jsx(H,{multiple:!0,value:l,onChange:p,input:e.jsx(U,{label:"Publish"}),renderValue:n=>n.map(h=>h).join(", "),onClose:f,sx:{textTransform:"capitalize"},children:x.map(n=>e.jsxs(S,{value:n.value,children:[e.jsx(q,{disableRipple:!0,size:"small",checked:l.includes(n.value)}),n.label]},n.value))})]}),e.jsxs(ae,{open:c.open,onClose:c.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(S,{onClick:()=>{c.onClose()},children:[e.jsx(j,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(S,{onClick:()=>{c.onClose()},children:[e.jsx(j,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(S,{onClick:()=>{c.onClose()},children:[e.jsx(j,{icon:"solar:export-bold"}),"Export"]})]})]})}function ze({filters:o,onFilters:r,onResetFilters:u,results:x,...c}){const m=i.useCallback(l=>{const s=o.stock.filter(a=>a!==l);r("stock",s)},[o.stock,r]),b=i.useCallback(l=>{const s=o.publish.filter(a=>a!==l);r("publish",s)},[o.publish,r]);return e.jsxs(w,{spacing:1.5,...c,children:[e.jsxs(G,{sx:{typography:"body2"},children:[e.jsx("strong",{children:x}),e.jsx(G,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(w,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!o.stock.length&&e.jsx(K,{label:"Stock:",children:o.stock.map(l=>e.jsx(J,{label:l,size:"small",onDelete:()=>m(l)},l))}),!!o.publish.length&&e.jsx(K,{label:"Publish:",children:o.publish.map(l=>e.jsx(J,{label:l,size:"small",onDelete:()=>b(l)},l))}),e.jsx(F,{color:"error",onClick:u,startIcon:e.jsx(j,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}function K({label:o,children:r,sx:u,...x}){return e.jsxs(w,{component:ie,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...u},...x,children:[e.jsx(G,{component:"span",sx:{typography:"subtitle2"},children:o}),e.jsx(w,{spacing:1,direction:"row",flexWrap:"wrap",children:r})]})}function $e({params:o}){return e.jsx(e.Fragment,{children:Se(o.row.price)})}function We({params:o}){return e.jsx(ce,{variant:"soft",color:o.row.publish==="published"&&"info"||"default",children:o.row.publish})}function He({params:o}){return e.jsx(Y,{primary:de(o.row.createdAt),secondary:ue(o.row.createdAt),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function Ue({params:o}){return e.jsxs(w,{sx:{typography:"caption",color:"text.secondary"},children:[e.jsx(pe,{value:o.row.available*100/o.row.quantity,variant:"determinate",color:o.row.inventoryType==="out of stock"&&"error"||o.row.inventoryType==="low stock"&&"warning"||"success",sx:{mb:1,height:6,maxWidth:80}}),!!o.row.available&&o.row.available," ",o.row.inventoryType]})}function qe({params:o}){return e.jsxs(w,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:[e.jsx(he,{alt:o.row.name,src:o.row.coverUrl,variant:"rounded",sx:{width:64,height:64,mr:2}}),e.jsx(Y,{disableTypography:!0,primary:e.jsx(xe,{noWrap:!0,color:"inherit",variant:"subtitle2",onClick:o.row.onViewRow,sx:{cursor:"pointer"},children:o.row.name}),secondary:e.jsx(G,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:o.row.category}),sx:{display:"flex",flexDirection:"column"}})]})}const Q=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],M={publish:[],stock:[]},Je={category:!1},Ke=["category","actions"];function Qe(){const{enqueueSnackbar:o}=be(),r=me(),u=fe(),x=ge(),{products:c,productsLoading:m}=ke(),[b,l]=i.useState([]),[s,a]=i.useState(M),[p,g]=i.useState([]),[f,n]=i.useState(Je);i.useEffect(()=>{c.length&&l(c)},[c]);const h=Xe({inputData:b,filters:s}),k=!Ce(M,s),R=i.useCallback((t,v)=>{a(A=>({...A,[t]:v}))},[]),N=i.useCallback(()=>{a(M)},[]),I=i.useCallback(t=>{const v=b.filter(A=>A.id!==t);o("Delete success!"),l(v)},[o,b]),P=i.useCallback(()=>{const t=b.filter(v=>!p.includes(v.id));o("Delete success!"),l(t)},[o,p,b]),y=i.useCallback(t=>{u.push(T.dashboard.product.edit(t))},[u]),d=i.useCallback(t=>{u.push(T.dashboard.product.details(t))},[u]),C=[{field:"category",headerName:"Category",filterable:!1},{field:"name",headerName:"Product",flex:1,minWidth:360,hideable:!1,renderCell:t=>e.jsx(qe,{params:t})},{field:"createdAt",headerName:"Create at",width:160,renderCell:t=>e.jsx(He,{params:t})},{field:"inventoryType",headerName:"Stock",width:160,type:"singleSelect",valueOptions:E,renderCell:t=>e.jsx(Ue,{params:t})},{field:"price",headerName:"Price",width:140,editable:!0,renderCell:t=>e.jsx($e,{params:t})},{field:"publish",headerName:"Publish",width:110,type:"singleSelect",editable:!0,valueOptions:Q,renderCell:t=>e.jsx(We,{params:t})},{type:"actions",field:"actions",headerName:" ",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:t=>[e.jsx(_,{showInMenu:!0,icon:e.jsx(j,{icon:"solar:eye-bold"}),label:"View",onClick:()=>d(t.row.id)}),e.jsx(_,{showInMenu:!0,icon:e.jsx(j,{icon:"solar:pen-bold"}),label:"Edit",onClick:()=>y(t.row.id)}),e.jsx(_,{showInMenu:!0,icon:e.jsx(j,{icon:"solar:trash-bin-trash-bold"}),label:"Delete",onClick:()=>{I(t.row.id)},sx:{color:"error.main"}})]}],V=()=>C.filter(t=>!Ke.includes(t.field)).map(t=>t.field);return e.jsxs(e.Fragment,{children:[e.jsxs(je,{maxWidth:x.themeStretch?!1:"lg",sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[e.jsx(ve,{heading:"List",links:[{name:"Dashboard",href:T.dashboard.root},{name:"Product",href:T.dashboard.product.root},{name:"List"}],action:e.jsx(F,{component:we,href:T.dashboard.product.new,variant:"contained",startIcon:e.jsx(j,{icon:"mingcute:add-line"}),children:"New Product"}),sx:{mb:{xs:3,md:5}}}),e.jsx(Te,{sx:{height:{xs:800,md:2},flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:e.jsx(Fe,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:h,columns:C,loading:m,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:10}}},onRowSelectionModelChange:t=>{g(t)},columnVisibilityModel:f,onColumnVisibilityModelChange:t=>n(t),slots:{toolbar:()=>e.jsxs(e.Fragment,{children:[e.jsxs(De,{children:[e.jsx(Ee,{filters:s,onFilters:R,stockOptions:E,publishOptions:Q}),e.jsx(Oe,{}),e.jsxs(w,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[!!p.length&&e.jsxs(F,{size:"small",color:"error",startIcon:e.jsx(j,{icon:"solar:trash-bin-trash-bold"}),onClick:r.onTrue,children:["Delete (",p.length,")"]}),e.jsx(Ne,{}),e.jsx(Me,{}),e.jsx(Ge,{})]})]}),k&&e.jsx(ze,{filters:s,onFilters:R,onResetFilters:N,results:h.length,sx:{p:2.5,pt:0}})]}),noRowsOverlay:()=>e.jsx(z,{title:"No Data"}),noResultsOverlay:()=>e.jsx(z,{title:"No results found"})},slotProps:{columnsPanel:{getTogglableColumns:V}}})})]}),e.jsx(Pe,{open:r.value,onClose:r.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",p.length," "]})," items?"]}),action:e.jsx(F,{variant:"contained",color:"error",onClick:()=>{P(),r.onFalse()},children:"Delete"})})]})}function Xe({inputData:o,filters:r}){const{stock:u,publish:x}=r;return u.length&&(o=o.filter(c=>u.includes(c.inventoryType))),x.length&&(o=o.filter(c=>x.includes(c.publish))),o}function Ao(){return e.jsxs(e.Fragment,{children:[e.jsx(ye,{children:e.jsx("title",{children:" Dashboard: Product List"})}),e.jsx(Qe,{})]})}export{Ao as default};