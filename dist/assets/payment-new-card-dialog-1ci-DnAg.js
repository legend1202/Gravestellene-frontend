import{b1 as l,j as e,x as c,S as s,I as d,c as p,d as t,i,b2 as x}from"./index-xccKnqtj.js";import{D as h}from"./DialogTitle-FkY0OOI0.js";import{D as u}from"./DialogContent-JWUImff-.js";import{T as o}from"./TextField-_2MBvEfR.js";import{D as m}from"./DialogActions-DIqTiIED.js";function I({onClose:r,...a}){const n=l();return e.jsxs(e.Fragment,{children:[e.jsxs(c,{maxWidth:"sm",onClose:r,...a,children:[e.jsx(h,{children:" New Card "}),e.jsx(u,{sx:{overflow:"unset"},children:e.jsxs(s,{spacing:2.5,children:[e.jsx(o,{autoFocus:!0,label:"Card Number",placeholder:"XXXX XXXX XXXX XXXX",InputLabelProps:{shrink:!0}}),e.jsx(o,{label:"Card Holder",placeholder:"JOHN DOE",InputLabelProps:{shrink:!0}}),e.jsxs(s,{spacing:2,direction:"row",children:[e.jsx(o,{label:"Expiration Date",placeholder:"MM/YY",InputLabelProps:{shrink:!0}}),e.jsx(o,{label:"CVV/CVC",placeholder:"***",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(d,{position:"end",children:e.jsx(p,{size:"small",edge:"end",onClick:n.onOpen,children:e.jsx(t,{icon:"eva:info-outline"})})})}})]}),e.jsxs(s,{direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled"},children:[e.jsx(t,{icon:"carbon:locked",sx:{mr:.5}}),"Your transaction is secured with SSL encryption"]})]})}),e.jsxs(m,{children:[e.jsx(i,{color:"inherit",variant:"outlined",onClick:r,children:"Cancel"}),e.jsx(i,{variant:"contained",onClick:r,children:"Add"})]})]}),e.jsx(x,{open:n.open,onClose:n.onClose,arrow:"bottom-center",sx:{maxWidth:200,typography:"body2",textAlign:"center"},children:"Three-digit number on the back of your VISA card"})]})}export{I as P};