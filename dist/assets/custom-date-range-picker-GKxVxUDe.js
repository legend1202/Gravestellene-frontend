import{aV as j,j as e,Z as v,S as b,X as l,Y as g,t as x}from"./index-HNXcBFmK.js";import{D as C}from"./DialogTitle-WOjgF7_D.js";import{D as f}from"./DialogContent-TegZmxqz.js";import{a as c,D as u}from"./DatePicker-8wVTWTxc.js";import{D}from"./DialogActions-LK-BktfY.js";function w({title:h="Select date range",variant:m="input",startDate:s,endDate:i,onChangeStartDate:t,onChangeEndDate:n,open:p,onClose:a,error:d}){const o=j("up","md"),r=m==="calendar";return e.jsxs(v,{fullWidth:!0,maxWidth:r?!1:"xs",open:p,onClose:a,PaperProps:{sx:{...r&&{maxWidth:720}}},children:[e.jsx(C,{sx:{pb:2},children:h}),e.jsxs(f,{sx:{...r&&o&&{overflow:"unset"}},children:[e.jsx(b,{justifyContent:"center",spacing:r?3:2,direction:r&&o?"row":"column",sx:{pt:1},children:r?e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:e.jsx(c,{value:s,onChange:t})}),e.jsx(l,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:e.jsx(c,{value:i,onChange:n})})]}):e.jsxs(e.Fragment,{children:[e.jsx(u,{label:"Start date",value:s,onChange:t}),e.jsx(u,{label:"End date",value:i,onChange:n})]})}),d&&e.jsx(g,{error:!0,sx:{px:2},children:"End date must be later than start date"})]}),e.jsxs(D,{children:[e.jsx(x,{variant:"outlined",color:"inherit",onClick:a,children:"Cancel"}),e.jsx(x,{disabled:d,variant:"contained",onClick:a,children:"Apply"})]})]})}export{w as C};