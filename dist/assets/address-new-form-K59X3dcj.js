import{j as e,S as t,v as f,T as x,B as y,k as b,w as j,cM as g,i as q}from"./index-tv0ZIiTC.js";import{c as C,a as s,b as v}from"./index.esm-VBvqitsX.js";import{u as T,F as w}from"./form-provider-k-FKKLvB.js";import{o as A}from"./yup-THP-HfC-.js";import"./image-tVn7ll4O.js";import{R as F}from"./rhf-checkbox-82oNEnKz.js";import"./mui-one-time-password-input.es-YbC1owsP.js";import"./styles-9eCz8YsQ.js";import{R as i}from"./rhf-text-field-Jv5-AM0T.js";import{R as N}from"./rhf-radio-group-_Ii7bZrh.js";import{R}from"./rhf-autocomplete--7DQc1jI.js";import{D}from"./DialogTitle-uDbN0tw-.js";import{D as S}from"./DialogContent-l4Y2lTg9.js";import{D as $}from"./DialogActions-C1UtG1Hl.js";import{L as H}from"./LoadingButton-CKt2mL1s.js";function K({address:n,action:o,sx:d,...l}){const{name:m,fullAddress:a,addressType:c,phoneNumber:p,primary:u}=n;return e.jsxs(t,{component:f,spacing:2,alignItems:{md:"flex-end"},direction:{xs:"column",md:"row"},sx:{position:"relative",...d},...l,children:[e.jsxs(t,{flexGrow:1,spacing:1,children:[e.jsxs(t,{direction:"row",alignItems:"center",children:[e.jsxs(x,{variant:"subtitle2",children:[m,e.jsxs(y,{component:"span",sx:{ml:.5,typography:"body2",color:"text.secondary"},children:["(",c,")"]})]}),u&&e.jsx(b,{color:"info",sx:{ml:1},children:"Default"})]}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:a}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:p})]}),o&&o]})}function Q({open:n,onClose:o,onCreate:d}){const l=C().shape({name:s().required("Fullname is required"),phoneNumber:s().required("Phone number is required"),address:s().required("Address is required"),city:s().required("City is required"),state:s().required("State is required"),country:s().required("Country is required"),zipCode:s().required("Zip code is required"),addressType:s(),primary:v()}),m={name:"",city:"",state:"",address:"",zipCode:"",primary:!0,phoneNumber:"",addressType:"Home",country:""},a=T({resolver:A(l),defaultValues:m}),{handleSubmit:c,formState:{isSubmitting:p}}=a,u=c(async r=>{try{d({name:r.name,phoneNumber:r.phoneNumber,fullAddress:`${r.address}, ${r.city}, ${r.state}, ${r.country}, ${r.zipCode}`,addressType:r.addressType,primary:r.primary}),o()}catch(h){console.error(h)}});return e.jsx(j,{fullWidth:!0,maxWidth:"sm",open:n,onClose:o,children:e.jsxs(w,{methods:a,onSubmit:u,children:[e.jsx(D,{children:"New address"}),e.jsx(S,{dividers:!0,children:e.jsxs(t,{spacing:3,children:[e.jsx(N,{row:!0,name:"addressType",options:[{label:"Home",value:"Home"},{label:"Office",value:"Office"}]}),e.jsxs(y,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(i,{name:"name",label:"Full Name"}),e.jsx(i,{name:"phoneNumber",label:"Phone Number"})]}),e.jsx(i,{name:"address",label:"Address"}),e.jsxs(y,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"},children:[e.jsx(i,{name:"city",label:"Town / City"}),e.jsx(i,{name:"state",label:"State"}),e.jsx(i,{name:"zipCode",label:"Zip/Code"})]}),e.jsx(R,{name:"country",type:"country",label:"Country",placeholder:"Choose a country",options:g.map(r=>r.label),getOptionLabel:r=>r}),e.jsx(F,{name:"primary",label:"Use this address as default."})]})}),e.jsxs($,{children:[e.jsx(q,{color:"inherit",variant:"outlined",onClick:o,children:"Cancel"}),e.jsx(H,{type:"submit",variant:"contained",loading:p,children:"Deliver to this Address"})]})]})})}export{K as A,Q as a};
