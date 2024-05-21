import{j as e,S as t,X as b,T as x,B as y,w as j,c as f,d as s,cT as g,e as q,o as C,Z as T,F as v,f as i,cU as w,t as A,i as F}from"./index-HNXcBFmK.js";import{R as N}from"./rhf-checkbox-JZf0apXg.js";import{R as D}from"./rhf-radio-group-9VMZL7V0.js";import{R}from"./rhf-autocomplete-wFIFSb62.js";import{D as S}from"./DialogTitle-WOjgF7_D.js";import{D as $}from"./DialogContent-TegZmxqz.js";import{D as H}from"./DialogActions-LK-BktfY.js";function O({address:n,action:a,sx:d,...l}){const{name:m,fullAddress:o,addressType:c,phoneNumber:p,primary:u}=n;return e.jsxs(t,{component:b,spacing:2,alignItems:{md:"flex-end"},direction:{xs:"column",md:"row"},sx:{position:"relative",...d},...l,children:[e.jsxs(t,{flexGrow:1,spacing:1,children:[e.jsxs(t,{direction:"row",alignItems:"center",children:[e.jsxs(x,{variant:"subtitle2",children:[m,e.jsxs(y,{component:"span",sx:{ml:.5,typography:"body2",color:"text.secondary"},children:["(",c,")"]})]}),u&&e.jsx(j,{color:"info",sx:{ml:1},children:"Default"})]}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:o}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:p})]}),a&&a]})}function Z({open:n,onClose:a,onCreate:d}){const l=f().shape({name:s().required("Fullname is required"),phoneNumber:s().required("Phone number is required"),address:s().required("Address is required"),city:s().required("City is required"),state:s().required("State is required"),country:s().required("Country is required"),zipCode:s().required("Zip code is required"),addressType:s(),primary:g()}),m={name:"",city:"",state:"",address:"",zipCode:"",primary:!0,phoneNumber:"",addressType:"Home",country:""},o=q({resolver:C(l),defaultValues:m}),{handleSubmit:c,formState:{isSubmitting:p}}=o,u=c(async r=>{try{d({name:r.name,phoneNumber:r.phoneNumber,fullAddress:`${r.address}, ${r.city}, ${r.state}, ${r.country}, ${r.zipCode}`,addressType:r.addressType,primary:r.primary}),a()}catch(h){console.error(h)}});return e.jsx(T,{fullWidth:!0,maxWidth:"sm",open:n,onClose:a,children:e.jsxs(v,{methods:o,onSubmit:u,children:[e.jsx(S,{children:"New address"}),e.jsx($,{dividers:!0,children:e.jsxs(t,{spacing:3,children:[e.jsx(D,{row:!0,name:"addressType",options:[{label:"Home",value:"Home"},{label:"Office",value:"Office"}]}),e.jsxs(y,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(i,{name:"name",label:"Full Name"}),e.jsx(i,{name:"phoneNumber",label:"Phone Number"})]}),e.jsx(i,{name:"address",label:"Address"}),e.jsxs(y,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"},children:[e.jsx(i,{name:"city",label:"Town / City"}),e.jsx(i,{name:"state",label:"State"}),e.jsx(i,{name:"zipCode",label:"Zip/Code"})]}),e.jsx(R,{name:"country",type:"country",label:"Country",placeholder:"Choose a country",options:w.map(r=>r.label),getOptionLabel:r=>r}),e.jsx(N,{name:"primary",label:"Use this address as default."})]})}),e.jsxs(H,{children:[e.jsx(A,{color:"inherit",variant:"outlined",onClick:a,children:"Cancel"}),e.jsx(F,{type:"submit",variant:"contained",loading:p,children:"Deliver to this Address"})]})]})})}export{O as A,Z as a};