import{bN as K,dc as X,r as S,dK as R,j as e,S as l,B as h,T as j,D as A,b2 as P,I as W,b8 as Y,i as N,d as C,aE as Z,b as k,c as B,_ as z,e as I,p as L}from"./index-tv0ZIiTC.js";import{c as _,f as $,g as ee,d as w,a as F,e as se}from"./index.esm-VBvqitsX.js";import{a as v,c as te,C as O,u as ae,F as ie}from"./form-provider-k-FKKLvB.js";import{o as le}from"./yup-THP-HfC-.js";import"./image-tVn7ll4O.js";import"./mui-one-time-password-input.es-YbC1owsP.js";import"./styles-9eCz8YsQ.js";import{_ as oe}from"./_baseSum-gu02AyRp.js";import{f as D}from"./format-number-BH3VEnKN.js";import{R as H}from"./rhf-select-XJVvuUwg.js";import{R as b}from"./rhf-text-field-Jv5-AM0T.js";import{A as V}from"./address-list-dialog-9iXbuY2J.js";import{D as Q}from"./DatePicker-nMFdeaFx.js";import{C as ne}from"./Card-fEhE4FGy.js";import{L as G}from"./LoadingButton-CKt2mL1s.js";var re=oe,de=X;function me(s){return s&&s.length?re(s,de):0}var ce=me;const xe=K(ce);function he(){const{control:s,setValue:o,watch:p,resetField:i}=v(),{fields:d,append:m,remove:c}=te({control:s,name:"items"}),t=p(),g=t.items.map(r=>r.quantity*r.price),f=xe(g),x=f-t.discount-t.shipping+t.taxes;S.useEffect(()=>{o("totalAmount",x)},[o,x]);const q=()=>{m({title:"",description:"",service:"",quantity:1,price:0,total:0})},y=r=>{c(r)},u=S.useCallback(r=>{i(`items[${r}].quantity`),i(`items[${r}].price`),i(`items[${r}].total`)},[i]),J=S.useCallback((r,a)=>{var n;o(`items[${r}].price`,(n=R.find(T=>T.name===a))==null?void 0:n.price),o(`items[${r}].total`,t.items.map(T=>T.quantity*T.price)[r])},[o,t.items]),M=S.useCallback((r,a)=>{o(`items[${a}].quantity`,Number(r.target.value)),o(`items[${a}].total`,t.items.map(n=>n.quantity*n.price)[a])},[o,t.items]),E=S.useCallback((r,a)=>{o(`items[${a}].price`,Number(r.target.value)),o(`items[${a}].total`,t.items.map(n=>n.quantity*n.price)[a])},[o,t.items]),U=e.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{mt:3,textAlign:"right",typography:"body2"},children:[e.jsxs(l,{direction:"row",children:[e.jsx(h,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(h,{sx:{width:160,typography:"subtitle2"},children:D(f)||"-"})]}),e.jsxs(l,{direction:"row",children:[e.jsx(h,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(h,{sx:{width:160,...t.shipping&&{color:"error.main"}},children:t.shipping?`- ${D(t.shipping)}`:"-"})]}),e.jsxs(l,{direction:"row",children:[e.jsx(h,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(h,{sx:{width:160,...t.discount&&{color:"error.main"}},children:t.discount?`- ${D(t.discount)}`:"-"})]}),e.jsxs(l,{direction:"row",children:[e.jsx(h,{sx:{color:"text.secondary"},children:"Taxes"}),e.jsx(h,{sx:{width:160},children:t.taxes?D(t.taxes):"-"})]}),e.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx(h,{children:"Total"}),e.jsx(h,{sx:{width:160},children:D(x)||"-"})]})]});return e.jsxs(h,{sx:{p:3},children:[e.jsx(j,{variant:"h6",sx:{color:"text.disabled",mb:3},children:"Details:"}),e.jsx(l,{divider:e.jsx(A,{flexItem:!0,sx:{borderStyle:"dashed"}}),spacing:3,children:d.map((r,a)=>e.jsxs(l,{alignItems:"flex-end",spacing:1.5,children:[e.jsxs(l,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},children:[e.jsx(b,{size:"small",name:`items[${a}].title`,label:"Title",InputLabelProps:{shrink:!0}}),e.jsx(b,{size:"small",name:`items[${a}].description`,label:"Description",InputLabelProps:{shrink:!0}}),e.jsxs(H,{name:`items[${a}].service`,size:"small",label:"Service",InputLabelProps:{shrink:!0},sx:{maxWidth:{md:160}},children:[e.jsx(P,{value:"",onClick:()=>u(a),sx:{fontStyle:"italic",color:"text.secondary"},children:"None"}),e.jsx(A,{sx:{borderStyle:"dashed"}}),R.map(n=>e.jsx(P,{value:n.name,onClick:()=>J(a,n.name),children:n.name},n.id))]}),e.jsx(b,{size:"small",type:"number",name:`items[${a}].quantity`,label:"Quantity",placeholder:"0",onChange:n=>M(n,a),InputLabelProps:{shrink:!0},sx:{maxWidth:{md:96}}}),e.jsx(b,{size:"small",type:"number",name:`items[${a}].price`,label:"Price",placeholder:"0.00",onChange:n=>E(n,a),InputProps:{startAdornment:e.jsx(W,{position:"start",children:e.jsx(h,{sx:{typography:"subtitle2",color:"text.disabled"},children:"$"})})},sx:{maxWidth:{md:96}}}),e.jsx(b,{disabled:!0,size:"small",type:"number",name:`items[${a}].total`,label:"Total",placeholder:"0.00",value:t.items[a].total===0?"":t.items[a].total.toFixed(2),onChange:n=>E(n,a),InputProps:{startAdornment:e.jsx(W,{position:"start",children:e.jsx(h,{sx:{typography:"subtitle2",color:"text.disabled"},children:"$"})})},sx:{maxWidth:{md:104},[`& .${Y.input}`]:{textAlign:{md:"right"}}}})]}),e.jsx(N,{size:"small",color:"error",startIcon:e.jsx(C,{icon:"solar:trash-bin-trash-bold"}),onClick:()=>y(a),children:"Remove"})]},r.id))}),e.jsx(A,{sx:{my:3,borderStyle:"dashed"}}),e.jsxs(l,{spacing:3,direction:{xs:"column",md:"row"},alignItems:{xs:"flex-end",md:"center"},children:[e.jsx(N,{size:"small",color:"primary",startIcon:e.jsx(C,{icon:"mingcute:add-line"}),onClick:q,sx:{flexShrink:0},children:"Add Item"}),e.jsxs(l,{spacing:2,justifyContent:"flex-end",direction:{xs:"column",md:"row"},sx:{width:1},children:[e.jsx(b,{size:"small",label:"Shipping($)",name:"shipping",type:"number",sx:{maxWidth:{md:120}}}),e.jsx(b,{size:"small",label:"Discount($)",name:"discount",type:"number",sx:{maxWidth:{md:120}}}),e.jsx(b,{size:"small",label:"Taxes(%)",name:"taxes",type:"number",sx:{maxWidth:{md:120}}})]})]}),U]})}function ue(){var f;const{watch:s,setValue:o,formState:{errors:p}}=v(),i=Z("up","md"),d=s(),{invoiceFrom:m,invoiceTo:c}=d,t=k(),g=k();return e.jsxs(e.Fragment,{children:[e.jsxs(l,{spacing:{xs:3,md:5},direction:{xs:"column",md:"row"},divider:e.jsx(A,{flexItem:!0,orientation:i?"vertical":"horizontal",sx:{borderStyle:"dashed"}}),sx:{p:3},children:[e.jsxs(l,{sx:{width:1},children:[e.jsxs(l,{direction:"row",alignItems:"center",sx:{mb:1},children:[e.jsx(j,{variant:"h6",sx:{color:"text.disabled",flexGrow:1},children:"From:"}),e.jsx(B,{onClick:t.onTrue,children:e.jsx(C,{icon:"solar:pen-bold"})})]}),e.jsxs(l,{spacing:1,children:[e.jsx(j,{variant:"subtitle2",children:m.name}),e.jsx(j,{variant:"body2",children:m.fullAddress}),e.jsxs(j,{variant:"body2",children:[" ",m.phoneNumber]})]})]}),e.jsxs(l,{sx:{width:1},children:[e.jsxs(l,{direction:"row",alignItems:"center",sx:{mb:1},children:[e.jsx(j,{variant:"h6",sx:{color:"text.disabled",flexGrow:1},children:"To:"}),e.jsx(B,{onClick:g.onTrue,children:e.jsx(C,{icon:c?"solar:pen-bold":"mingcute:add-line"})})]}),c?e.jsxs(l,{spacing:1,children:[e.jsx(j,{variant:"subtitle2",children:c.name}),e.jsx(j,{variant:"body2",children:c.fullAddress}),e.jsxs(j,{variant:"body2",children:[" ",c.phoneNumber]})]}):e.jsx(j,{typography:"caption",sx:{color:"error.main"},children:(f=p.invoiceTo)==null?void 0:f.message})]})]}),e.jsx(V,{title:"Customers",open:t.value,onClose:t.onFalse,selected:x=>(m==null?void 0:m.id)===x,onSelect:x=>o("invoiceFrom",x),list:z,action:e.jsx(N,{size:"small",startIcon:e.jsx(C,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})}),e.jsx(V,{title:"Customers",open:g.value,onClose:g.onFalse,selected:x=>(c==null?void 0:c.id)===x,onSelect:x=>o("invoiceTo",x),list:z,action:e.jsx(N,{size:"small",startIcon:e.jsx(C,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})})]})}function pe(){const{control:s,watch:o}=v(),p=o();return e.jsxs(l,{spacing:2,direction:{xs:"column",sm:"row"},sx:{p:3,bgcolor:"background.neutral"},children:[e.jsx(b,{disabled:!0,name:"invoiceNumber",label:"Invoice number",value:p.invoiceNumber}),e.jsx(H,{fullWidth:!0,name:"status",label:"Status",InputLabelProps:{shrink:!0},PaperPropsSx:{textTransform:"capitalize"},children:["paid","pending","overdue","draft"].map(i=>e.jsx(P,{value:i,children:i},i))}),e.jsx(O,{name:"createDate",control:s,render:({field:i,fieldState:{error:d}})=>e.jsx(Q,{label:"Date create",value:i.value,onChange:m=>{i.onChange(m)},slotProps:{textField:{fullWidth:!0,error:!!d,helperText:d==null?void 0:d.message}}})}),e.jsx(O,{name:"dueDate",control:s,render:({field:i,fieldState:{error:d}})=>e.jsx(Q,{label:"Due date",value:i.value,onChange:m=>{i.onChange(m)},slotProps:{textField:{fullWidth:!0,error:!!d,helperText:d==null?void 0:d.message}}})})]})}function qe({currentInvoice:s}){const o=I(),p=k(),i=k(),d=_().shape({invoiceTo:$().nullable().required("Invoice to is required"),createDate:$().nullable().required("Create date is required"),dueDate:$().required("Due date is required").test("date-min","Due date must be later than create date",(y,{parent:u})=>y.getTime()>u.createDate.getTime()),items:ee(()=>se().of(_({title:F().required("Title is required"),service:F().required("Service is required"),quantity:w().required("Quantity is required").min(1,"Quantity must be more than 0")}))),taxes:w(),status:F(),discount:w(),shipping:w(),invoiceFrom:$(),totalAmount:w(),invoiceNumber:F()}),m=S.useMemo(()=>({invoiceNumber:(s==null?void 0:s.invoiceNumber)||"INV-1990",createDate:(s==null?void 0:s.createDate)||new Date,dueDate:(s==null?void 0:s.dueDate)||null,taxes:(s==null?void 0:s.taxes)||0,shipping:(s==null?void 0:s.shipping)||0,status:(s==null?void 0:s.status)||"draft",discount:(s==null?void 0:s.discount)||0,invoiceFrom:(s==null?void 0:s.invoiceFrom)||z[0],invoiceTo:(s==null?void 0:s.invoiceTo)||null,items:(s==null?void 0:s.items)||[{title:"",description:"",service:"",quantity:1,price:0,total:0}],totalAmount:(s==null?void 0:s.totalAmount)||0}),[s]),c=ae({resolver:le(d),defaultValues:m}),{reset:t,handleSubmit:g,formState:{isSubmitting:f}}=c,x=g(async y=>{p.onTrue();try{await new Promise(u=>setTimeout(u,500)),t(),p.onFalse(),o.push(L.dashboard.invoice.root),console.info("DATA",JSON.stringify(y,null,2))}catch(u){console.error(u),p.onFalse()}}),q=g(async y=>{i.onTrue();try{await new Promise(u=>setTimeout(u,500)),t(),i.onFalse(),o.push(L.dashboard.invoice.root),console.info("DATA",JSON.stringify(y,null,2))}catch(u){console.error(u),i.onFalse()}});return e.jsxs(ie,{methods:c,children:[e.jsxs(ne,{children:[e.jsx(ue,{}),e.jsx(pe,{}),e.jsx(he,{})]}),e.jsxs(l,{justifyContent:"flex-end",direction:"row",spacing:2,sx:{mt:3},children:[e.jsx(G,{color:"inherit",size:"large",variant:"outlined",loading:p.value&&f,onClick:x,children:"Save as Draft"}),e.jsxs(G,{size:"large",variant:"contained",loading:i.value&&f,onClick:q,children:[s?"Update":"Create"," & Send"]})]})]})}export{qe as I};