import{j as e,i as x,d as a,S as l,T as d,D as S,B as p,I as B,A as O,k as W,c as E,q as L,s as g,G as m,R as z,p as $,t as N,v as k,g as I,b as P,w as R,x as _,O as G,L as H,_ as q,h as V,C as M,bc as U,H as Q}from"./index-tv0ZIiTC.js";import{E as Y}from"./empty-content-a0ZHI6oX.js";import{f as j}from"./format-number-BH3VEnKN.js";import{C}from"./Card-fEhE4FGy.js";import{C as v}from"./CardHeader-BwadA8Aj.js";import{C as J}from"./CardContent-SHrdNnGG.js";import{T as D,F as K}from"./TextField-MR0F-eFr.js";import{T as X}from"./table-head-custom-ob8eVphv.js";import"./color-picker-nPEb_Zq-.js";import{C as Z}from"./color-preview--N0Q8Zvp.js";import{I as ee}from"./incrementer-button-I4VNuJON.js";import{T as te,a as se,b as re,c as ne}from"./TableHead-O1Yiey09.js";import{T as b}from"./TableCell--Pegy-Kt.js";import{S as oe,a as ie,b as ae,s as le,M as ce,c as f}from"./StepLabel-IVzL_jxA.js";import{c as de,a as xe}from"./index.esm-VBvqitsX.js";import{a as A,C as F,u as pe,F as he}from"./form-provider-k-FKKLvB.js";import{o as me}from"./yup-THP-HfC-.js";import"./image-tVn7ll4O.js";import"./mui-one-time-password-input.es-YbC1owsP.js";import"./styles-9eCz8YsQ.js";import{P as ue}from"./payment-new-card-dialog-lg0EpT9t.js";import{L as je}from"./LoadingButton-CKt2mL1s.js";import{v as ye}from"./fade-VV5890gg.js";import{A as be}from"./index-UFEvaiSF.js";import{A as Ce,a as ve}from"./address-new-form-K59X3dcj.js";import"./Checkbox-KewZpZB7.js";import"./SwitchBase-13kQQb6r.js";import"./DialogTitle-uDbN0tw-.js";import"./dialogTitleClasses-47Jk6PmQ.js";import"./DialogContent-l4Y2lTg9.js";import"./DialogActions-C1UtG1Hl.js";import"./CircularProgress-m_JQi2ZX.js";import"./transition-eqIn2NYL.js";import"./rhf-checkbox-82oNEnKz.js";import"./FormControlLabel-SC4RdDd1.js";import"./rhf-text-field-Jv5-AM0T.js";import"./rhf-radio-group-_Ii7bZrh.js";import"./Radio-cGrJpfGW.js";import"./rhf-autocomplete--7DQc1jI.js";import"./Autocomplete-J0YW4wEt.js";import"./Close--UPeKSTc.js";import"./Chip-EkmsCEpD.js";function w({total:t,discount:s,subTotal:o,shipping:n,onEdit:r,onApplyDiscount:i}){const c=n!==null?"Free":"-";return e.jsxs(C,{sx:{mb:3},children:[e.jsx(v,{title:"Order Summary",action:r&&e.jsx(x,{size:"small",onClick:r,startIcon:e.jsx(a,{icon:"solar:pen-bold"}),children:"Edit"})}),e.jsx(J,{children:e.jsxs(l,{spacing:2,children:[e.jsxs(l,{direction:"row",justifyContent:"space-between",children:[e.jsx(d,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),e.jsx(d,{variant:"subtitle2",children:j(o)})]}),e.jsxs(l,{direction:"row",justifyContent:"space-between",children:[e.jsx(d,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),e.jsx(d,{variant:"subtitle2",children:s?j(-s):"-"})]}),e.jsxs(l,{direction:"row",justifyContent:"space-between",children:[e.jsx(d,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(d,{variant:"subtitle2",children:n?j(n):c})]}),e.jsx(S,{sx:{borderStyle:"dashed"}}),e.jsxs(l,{direction:"row",justifyContent:"space-between",children:[e.jsx(d,{variant:"subtitle1",children:"Total"}),e.jsxs(p,{sx:{textAlign:"right"},children:[e.jsx(d,{variant:"subtitle1",sx:{color:"error.main"},children:j(t)}),e.jsx(d,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),i&&e.jsx(D,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"DISCOUNT5",InputProps:{endAdornment:e.jsx(B,{position:"end",children:e.jsx(x,{color:"primary",onClick:()=>i(5),sx:{mr:-.5},children:"Apply"})})}})]})})]})}function fe({row:t,onDelete:s,onDecrease:o,onIncrease:n}){const{name:r,size:i,price:c,colors:h,coverUrl:y,quantity:u,available:T}=t;return e.jsxs(te,{children:[e.jsxs(b,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(O,{variant:"rounded",alt:r,src:y,sx:{width:64,height:64,mr:2}}),e.jsxs(l,{spacing:.5,children:[e.jsx(d,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:r}),e.jsxs(l,{direction:"row",alignItems:"center",sx:{typography:"body2",color:"text.secondary"},children:["size: ",e.jsxs(W,{sx:{ml:.5},children:[" ",i," "]}),e.jsx(S,{orientation:"vertical",sx:{mx:1,height:16}}),e.jsx(Z,{colors:h})]})]})]}),e.jsx(b,{children:j(c)}),e.jsx(b,{children:e.jsxs(p,{sx:{width:88,textAlign:"right"},children:[e.jsx(ee,{quantity:u,onDecrease:o,onIncrease:n,disabledDecrease:u<=1,disabledIncrease:u>=T}),e.jsxs(d,{variant:"caption",component:"div",sx:{color:"text.secondary",mt:1},children:["available: ",T]})]})}),e.jsx(b,{align:"right",children:j(c*u)}),e.jsx(b,{align:"right",sx:{px:1},children:e.jsx(E,{onClick:s,children:e.jsx(a,{icon:"solar:trash-bin-trash-bold"})})})]})}const ge=[{id:"product",label:"Product"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"totalAmount",label:"Total Price",align:"right"},{id:""}];function Se({products:t,onDelete:s,onIncreaseQuantity:o,onDecreaseQuantity:n}){return e.jsx(se,{sx:{overflow:"unset"},children:e.jsx(L,{children:e.jsxs(re,{sx:{minWidth:720},children:[e.jsx(X,{headLabel:ge}),e.jsx(ne,{children:t.map(r=>e.jsx(fe,{row:r,onDelete:()=>s(r.id),onDecrease:()=>n(r.id),onIncrease:()=>o(r.id)},r.id))})]})})})}function ke(){const t=g(),s=!t.items.length;return e.jsxs(m,{container:!0,spacing:3,children:[e.jsxs(m,{xs:12,md:8,children:[e.jsxs(C,{sx:{mb:3},children:[e.jsx(v,{title:e.jsxs(d,{variant:"h6",children:["Cart",e.jsxs(d,{component:"span",sx:{color:"text.secondary"},children:[" (",t.totalItems," item)"]})]}),sx:{mb:3}}),s?e.jsx(Y,{title:"Cart is Empty!",description:"Look like you have no items in your shopping cart.",imgUrl:"/assets/icons/empty/ic_cart.svg",sx:{pt:5,pb:10}}):e.jsx(Se,{products:t.items,onDelete:t.onDeleteCart,onIncreaseQuantity:t.onIncreaseQuantity,onDecreaseQuantity:t.onDecreaseQuantity})]}),e.jsx(x,{component:z,href:$.product.root,color:"inherit",startIcon:e.jsx(a,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})]}),e.jsxs(m,{xs:12,md:4,children:[e.jsx(w,{total:t.total,discount:t.discount,subTotal:t.subTotal,onApplyDiscount:t.onApplyDiscount}),e.jsx(x,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:s,onClick:t.onNextStep,children:"Check Out"})]})]})}const we=N(ce)(({theme:t})=>({top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)",[`& .${f.line}`]:{borderTopWidth:2,borderColor:t.palette.divider},[`&.${f.active}, &.${f.completed}`]:{[`& .${f.line}`]:{borderColor:t.palette.primary.main}}}));function Te({steps:t,activeStep:s,sx:o,...n}){return e.jsx(oe,{alternativeLabel:!0,activeStep:s,connector:e.jsx(we,{}),sx:{mb:{xs:3,md:5},...o},...n,children:t.map(r=>e.jsx(ie,{children:e.jsx(ae,{StepIconComponent:Ie,sx:{[`& .${le.label}`]:{fontWeight:"fontWeightSemiBold"}},children:r})},r))})}function Ie({active:t,completed:s}){return e.jsx(l,{alignItems:"center",justifyContent:"center",sx:{width:24,height:24,color:"text.disabled",...t&&{color:"primary.main"}},children:s?e.jsx(a,{icon:"eva:checkmark-fill",sx:{color:"primary.main"}}):e.jsx(p,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}function Pe({options:t,onApplyShipping:s,...o}){const{control:n}=A();return e.jsxs(C,{...o,children:[e.jsx(v,{title:"Delivery"}),e.jsx(F,{name:"delivery",control:n,render:({field:r})=>e.jsx(p,{columnGap:2,rowGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},sx:{p:3},children:t.map(i=>e.jsx(De,{option:i,selected:r.value===i.value,onClick:()=>{r.onChange(i.value),s(i.value)}},i.label))})})]})}function De({option:t,selected:s,...o}){const{value:n,label:r,description:i}=t;return e.jsxs(k,{variant:"outlined",sx:{p:2.5,cursor:"pointer",display:"flex",...s&&{boxShadow:c=>`0 0 0 2px ${c.palette.text.primary}`}},...o,children:[r==="Free"&&e.jsx(a,{icon:"carbon:bicycle",width:32}),r==="Standard"&&e.jsx(a,{icon:"carbon:delivery",width:32}),r==="Express"&&e.jsx(a,{icon:"carbon:rocket",width:32}),e.jsx(I,{sx:{ml:2},primary:e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(p,{component:"span",sx:{flexGrow:1},children:r}),e.jsx(p,{component:"span",sx:{typography:"h6"},children:`$${n}`})]}),secondary:i,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}})]},n)}function Ae({billing:t,onBackStep:s}){return e.jsxs(C,{sx:{mb:3},children:[e.jsx(v,{title:"Address",action:e.jsx(x,{size:"small",startIcon:e.jsx(a,{icon:"solar:pen-bold"}),onClick:s,children:"Edit"})}),e.jsxs(l,{spacing:1,sx:{p:3},children:[e.jsxs(p,{sx:{typography:"subtitle2"},children:[`${t==null?void 0:t.name} `,e.jsxs(p,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:["(",t==null?void 0:t.addressType,")"]})]}),e.jsx(p,{sx:{color:"text.secondary",typography:"body2"},children:t==null?void 0:t.fullAddress}),e.jsx(p,{sx:{color:"text.secondary",typography:"body2"},children:t==null?void 0:t.phoneNumber})]})]})}function Fe({options:t,cardOptions:s,...o}){const{control:n}=A(),r=P();return e.jsxs(e.Fragment,{children:[e.jsxs(C,{...o,children:[e.jsx(v,{title:"Payment"}),e.jsx(F,{name:"payment",control:n,render:({field:i,fieldState:{error:c}})=>e.jsxs(l,{sx:{px:3,pb:3},children:[t.map(h=>e.jsx(Be,{option:h,onOpen:r.onTrue,cardOptions:s,selected:i.value===h.value,isCredit:h.value==="credit"&&i.value==="credit",onClick:()=>{i.onChange(h.value)}},h.label)),!!c&&e.jsx(K,{error:!0,sx:{pt:1,px:2},children:c.message})]})})]}),e.jsx(ue,{open:r.value,onClose:r.onFalse})]})}function Be({option:t,cardOptions:s,selected:o,isCredit:n,onOpen:r,...i}){const{value:c,label:h,description:y}=t;return e.jsxs(k,{variant:"outlined",sx:{p:2.5,mt:2.5,cursor:"pointer",...o&&{boxShadow:u=>`0 0 0 2px ${u.palette.text.primary}`}},...i,children:[e.jsx(I,{primary:e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(p,{component:"span",sx:{flexGrow:1},children:h}),e.jsxs(l,{spacing:1,direction:"row",alignItems:"center",children:[c==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(a,{icon:"logos:mastercard",width:24}),",",e.jsx(a,{icon:"logos:visa",width:24})]}),c==="paypal"&&e.jsx(a,{icon:"logos:paypal",width:24}),c==="cash"&&e.jsx(a,{icon:"solar:wad-of-money-bold",width:32})]})]}),secondary:y,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}}),n&&e.jsxs(l,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(D,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:s.map(u=>e.jsx("option",{value:u.value,children:u.label},u.value))}),e.jsx(x,{size:"small",color:"primary",startIcon:e.jsx(a,{icon:"mingcute:add-line"}),onClick:r,children:"Add New Card"})]})]},c)}const Oe=[{value:0,label:"Free",description:"5-7 Days delivery"},{value:10,label:"Standard",description:"3-5 Days delivery"},{value:20,label:"Express",description:"2-3 Days delivery"}],We=[{value:"paypal",label:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely."},{value:"credit",label:"Credit / Debit Card",description:"We support Mastercard, Visa, Discover and Stripe."},{value:"cash",label:"Cash",description:"Pay with cash when your order is delivered."}],Ee=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function Le(){const t=g(),s=de().shape({payment:xe().required("Payment is required")}),o={delivery:t.shipping,payment:""},n=pe({resolver:me(s),defaultValues:o}),{handleSubmit:r,formState:{isSubmitting:i}}=n,c=r(async h=>{try{t.onNextStep(),t.onReset(),console.info("DATA",h)}catch(y){console.error(y)}});return e.jsx(he,{methods:n,onSubmit:c,children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsxs(m,{xs:12,md:8,children:[e.jsx(Pe,{onApplyShipping:t.onApplyShipping,options:Oe}),e.jsx(Fe,{cardOptions:Ee,options:We,sx:{my:3}}),e.jsx(x,{size:"small",color:"inherit",onClick:t.onBackStep,startIcon:e.jsx(a,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),e.jsxs(m,{xs:12,md:4,children:[e.jsx(Ae,{billing:t.billing,onBackStep:t.onBackStep}),e.jsx(w,{total:t.total,subTotal:t.subTotal,discount:t.discount,shipping:t.shipping,onEdit:()=>t.onGotoStep(0)}),e.jsx(je,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:i,children:"Complete Order"})]})]})})}function ze({open:t,onReset:s,onDownloadPDF:o}){const n=e.jsxs(l,{spacing:5,sx:{m:"auto",maxWidth:480,textAlign:"center",px:{xs:2,sm:0}},children:[e.jsx(d,{variant:"h4",children:"Thank you for your purchase!"}),e.jsx(G,{sx:{height:260}}),e.jsxs(d,{children:["Thanks for placing order",e.jsx("br",{}),e.jsx("br",{}),e.jsx(H,{children:"01dc1370-3df6-11eb-b378-0242ac130002"}),e.jsx("br",{}),e.jsx("br",{}),"We will send you a notification within 5 days when it ships.",e.jsx("br",{})," If you have any question or queries then fell to get in contact us. ",e.jsx("br",{})," ",e.jsx("br",{}),"All the best,"]}),e.jsx(S,{sx:{borderStyle:"dashed"}}),e.jsxs(l,{spacing:2,justifyContent:"space-between",direction:{xs:"column-reverse",sm:"row"},children:[e.jsx(x,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",onClick:s,startIcon:e.jsx(a,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),e.jsx(x,{fullWidth:!0,size:"large",variant:"contained",startIcon:e.jsx(a,{icon:"eva:cloud-download-fill"}),onClick:o,children:"Download as PDF"})]})]});return e.jsx(be,{children:t&&e.jsx(R,{fullWidth:!0,fullScreen:!0,open:t,PaperComponent:r=>e.jsx(p,{component:_.div,...ye({distance:120,durationIn:.32,durationOut:.24,easeIn:"easeInOut"}).inUp,sx:{width:1,height:1,p:{md:3}},children:e.jsx(k,{...r,children:r.children})}),children:n})})}function $e(){const t=g(),s=P();return e.jsxs(e.Fragment,{children:[e.jsxs(m,{container:!0,spacing:3,children:[e.jsxs(m,{xs:12,md:8,children:[q.slice(0,4).map(o=>e.jsx(Ce,{address:o,action:e.jsxs(l,{flexDirection:"row",flexWrap:"wrap",flexShrink:0,children:[!o.primary&&e.jsx(x,{size:"small",color:"error",sx:{mr:1},children:"Delete"}),e.jsx(x,{variant:"outlined",size:"small",onClick:()=>t.onCreateBilling(o),children:"Deliver to this Address"})]}),sx:{p:3,mb:3,borderRadius:2,boxShadow:n=>n.customShadows.card}},o.id)),e.jsxs(l,{direction:"row",justifyContent:"space-between",children:[e.jsx(x,{size:"small",color:"inherit",onClick:t.onBackStep,startIcon:e.jsx(a,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),e.jsx(x,{size:"small",color:"primary",onClick:s.onTrue,startIcon:e.jsx(a,{icon:"mingcute:add-line"}),children:"New Address"})]})]}),e.jsx(m,{xs:12,md:4,children:e.jsx(w,{total:t.total,subTotal:t.subTotal,discount:t.discount})})]}),e.jsx(ve,{open:s.value,onClose:s.onFalse,onCreate:t.onCreateBilling})]})}function Ne(){const t=V(),s=g();return e.jsxs(M,{maxWidth:t.themeStretch?!1:"lg",sx:{mb:10},children:[e.jsx(d,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Checkout"}),e.jsx(m,{container:!0,justifyContent:s.completed?"center":"flex-start",children:e.jsx(m,{xs:12,md:8,children:e.jsx(Te,{activeStep:s.activeStep,steps:U})})}),s.completed?e.jsx(ze,{open:s.completed,onReset:s.onReset,onDownloadPDF:()=>{}}):e.jsxs(e.Fragment,{children:[s.activeStep===0&&e.jsx(ke,{}),s.activeStep===1&&e.jsx($e,{}),s.activeStep===2&&s.billing&&e.jsx(Le,{})]})]})}function Pt(){return e.jsxs(e.Fragment,{children:[e.jsx(Q,{children:e.jsx("title",{children:" Checkout"})}),e.jsx(Ne,{})]})}export{Pt as default};
