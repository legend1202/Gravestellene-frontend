import{j as e,y as g,X as S,S as p,T as m,B as x,z as L,f as Q,g as l,Y as J,Z as O,_ as h,J as C,$ as U,a0 as N,a1 as R,a2 as W,q as B,a as X,a3 as Z,a4 as K,c as $,b as P,d as q,o as G,F as _,h as z,a5 as ee,a6 as se,a7 as te,L as re,a8 as ne,u as ae,r as v,A as ie,e as T,v as oe,w as ce,i as le,a9 as de,C as xe,aa as pe,ab as he,W as ue,H as me}from"./index-Unum9nVw.js";import{c as je}from"./order-ZBJ3YKgX.js";import{E as ye}from"./empty-content-GbU2eJBU.js";import{f as H}from"./format-number-VuTxsZKm.js";import{C as ve}from"./CardContent-voIf1FS6.js";import{T as be}from"./table-head-custom-8oDXQUPb.js";import{T as fe,a as Ce,b as ge,c as Se}from"./TableHead-rTAVgUOI.js";import{T as I}from"./TableCell-cPFwLuUe.js";import{S as ke,a as we,b as Ie,s as Pe,M as Te,c as D}from"./Stepper-hmjh9xaI.js";import{P as De}from"./payment-new-card-dialog-u9VSuGBD.js";import{v as Oe}from"./fade-VV5890gg.js";import{A as Ae}from"./index-Yz6iv_bl.js";import"./Checkbox-2ExRgTd_.js";import"./SwitchBase-blZAzLa7.js";import"./DialogTitle-baaL_RM8.js";import"./dialogTitleClasses-1LmfuNX7.js";import"./DialogContent-XHf2fRIG.js";import"./DialogActions-w4_g6mVg.js";import"./transition-eqIn2NYL.js";function M({total:s}){return e.jsxs(g,{sx:{mb:3},children:[e.jsx(S,{title:"Order Summary"}),e.jsx(ve,{children:e.jsxs(p,{direction:"row",justifyContent:"space-between",children:[e.jsx(m,{variant:"subtitle1",children:"Total"}),e.jsx(x,{sx:{textAlign:"right"},children:e.jsx(m,{variant:"subtitle1",sx:{color:"error.main"},children:H(s)})})]})})]})}function Ee({row:s,onDelete:t,onDecrease:a,onIncrease:r}){const{serviceDetails:{name:n,description:i,price:o},graveyardDetails:{name:c}}=s;return e.jsxs(fe,{children:[e.jsx(I,{children:e.jsx(m,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:n})}),e.jsx(I,{children:e.jsx(m,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:e.jsxs(L,{children:[" ",i," "]})})}),e.jsx(I,{children:H(o)}),e.jsx(I,{align:"center",sx:{px:1},children:e.jsx(m,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:e.jsxs(L,{children:[" ",c," "]})})}),e.jsx(I,{align:"right",sx:{px:1},children:e.jsx(Q,{onClick:t,children:e.jsx(l,{icon:"solar:trash-bin-trash-bold"})})})]})}const We=[{id:"name",label:"Name"},{id:"description",label:"Description"},{id:"price",label:"Price"},{id:"graveyard",label:"Graveyard",align:"center"},{id:""}];function Fe({products:s,onDelete:t,onIncreaseQuantity:a,onDecreaseQuantity:r}){return e.jsx(Ce,{sx:{overflow:"unset"},children:e.jsx(J,{children:e.jsxs(ge,{sx:{minWidth:720},children:[e.jsx(be,{headLabel:We}),e.jsx(Se,{children:s&&s.map(n=>e.jsx(Ee,{row:n,onDelete:()=>t(n.id||""),onDecrease:()=>r(n.id||""),onIncrease:()=>a(n.id||"")},n.id))})]})})})}function Le({total:s,services:t,handleOrderListDelete:a}){const r=O(),n=t&&!t.length;return e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{xs:12,md:8,children:e.jsxs(g,{sx:{mb:3},children:[e.jsx(S,{title:e.jsxs(m,{variant:"h6",children:["Cart",e.jsxs(m,{component:"span",sx:{color:"text.secondary"},children:[" (",r.totalItems," item)"]})]}),sx:{mb:3}}),n?e.jsx(ye,{title:"Cart is Empty!",description:"Look like you have no items in your shopping cart.",imgUrl:"/assets/icons/empty/ic_cart.svg",sx:{pt:5,pb:10}}):e.jsx(Fe,{products:t,onDelete:a,onIncreaseQuantity:r.onIncreaseQuantity,onDecreaseQuantity:r.onDecreaseQuantity})]})}),e.jsxs(h,{xs:12,md:4,children:[e.jsx(M,{total:s}),e.jsx(C,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:n,onClick:r.onNextStep,children:"Check Out"})]})]})}const Ne=U(Te)(({theme:s})=>({top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)",[`& .${D.line}`]:{borderTopWidth:2,borderColor:s.palette.divider},[`&.${D.active}, &.${D.completed}`]:{[`& .${D.line}`]:{borderColor:s.palette.primary.main}}}));function Re({steps:s,activeStep:t,sx:a,...r}){return e.jsx(ke,{alternativeLabel:!0,activeStep:t,connector:e.jsx(Ne,{}),sx:{mb:{xs:3,md:5},...a},...r,children:s.map(n=>e.jsx(we,{children:e.jsx(Ie,{StepIconComponent:Be,sx:{[`& .${Pe.label}`]:{fontWeight:"fontWeightSemiBold"}},children:n})},n))})}function Be({active:s,completed:t}){return e.jsx(p,{alignItems:"center",justifyContent:"center",sx:{width:24,height:24,color:"text.disabled",...s&&{color:"primary.main"}},children:t?e.jsx(l,{icon:"eva:checkmark-fill",sx:{color:"primary.main"}}):e.jsx(x,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}function $e({options:s,onApplyShipping:t,...a}){const{control:r}=N();return e.jsxs(g,{...a,children:[e.jsx(S,{title:"Delivery"}),e.jsx(R,{name:"delivery",control:r,render:({field:n})=>e.jsx(x,{columnGap:2,rowGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},sx:{p:3},children:s.map(i=>e.jsx(qe,{option:i,selected:n.value===i.value,onClick:()=>{n.onChange(i.value),t(i.value)}},i.label))})})]})}function qe({option:s,selected:t,...a}){const{value:r,label:n,description:i}=s;return e.jsxs(W,{variant:"outlined",sx:{p:2.5,cursor:"pointer",display:"flex",...t&&{boxShadow:o=>`0 0 0 2px ${o.palette.text.primary}`}},...a,children:[n==="Free"&&e.jsx(l,{icon:"carbon:bicycle",width:32}),n==="Standard"&&e.jsx(l,{icon:"carbon:delivery",width:32}),n==="Express"&&e.jsx(l,{icon:"carbon:rocket",width:32}),e.jsx(B,{sx:{ml:2},primary:e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(x,{component:"span",sx:{flexGrow:1},children:n}),e.jsx(x,{component:"span",sx:{typography:"h6"},children:`$${r}`})]}),secondary:i,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}})]},r)}function Ge({billing:s,onBackStep:t}){return e.jsxs(g,{sx:{mb:3},children:[e.jsx(S,{title:"Address",action:e.jsx(C,{size:"small",startIcon:e.jsx(l,{icon:"solar:pen-bold"}),onClick:t,children:"Edit"})}),e.jsxs(p,{spacing:1,sx:{p:3},children:[e.jsxs(x,{sx:{typography:"subtitle2"},children:[`${s==null?void 0:s.name} `,e.jsxs(x,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:["(",s==null?void 0:s.addressType,")"]})]}),e.jsx(x,{sx:{color:"text.secondary",typography:"body2"},children:s==null?void 0:s.fullAddress}),e.jsx(x,{sx:{color:"text.secondary",typography:"body2"},children:s==null?void 0:s.phoneNumber})]})]})}function _e({options:s,cardOptions:t,...a}){const{control:r}=N(),n=X();return e.jsxs(e.Fragment,{children:[e.jsxs(g,{...a,children:[e.jsx(S,{title:"Payment"}),e.jsx(R,{name:"payment",control:r,render:({field:i,fieldState:{error:o}})=>e.jsxs(p,{sx:{px:3,pb:3},children:[s.map(c=>e.jsx(ze,{option:c,onOpen:n.onTrue,cardOptions:t,selected:i.value===c.value,isCredit:c.value==="credit"&&i.value==="credit",onClick:()=>{i.onChange(c.value)}},c.label)),!!o&&e.jsx(Z,{error:!0,sx:{pt:1,px:2},children:o.message})]})})]}),e.jsx(De,{open:n.value,onClose:n.onFalse})]})}function ze({option:s,cardOptions:t,selected:a,isCredit:r,onOpen:n,...i}){const{value:o,label:c,description:u}=s;return e.jsxs(W,{variant:"outlined",sx:{p:2.5,mt:2.5,cursor:"pointer",...a&&{boxShadow:d=>`0 0 0 2px ${d.palette.text.primary}`}},...i,children:[e.jsx(B,{primary:e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(x,{component:"span",sx:{flexGrow:1},children:c}),e.jsxs(p,{spacing:1,direction:"row",alignItems:"center",children:[o==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:"logos:mastercard",width:24}),",",e.jsx(l,{icon:"logos:visa",width:24})]}),o==="paypal"&&e.jsx(l,{icon:"logos:paypal",width:24}),o==="cash"&&e.jsx(l,{icon:"solar:wad-of-money-bold",width:32})]})]}),secondary:u,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}}),r&&e.jsxs(p,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(K,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:t.map(d=>e.jsx("option",{value:d.value,children:d.label},d.value))}),e.jsx(C,{size:"small",color:"primary",startIcon:e.jsx(l,{icon:"mingcute:add-line"}),onClick:n,children:"Add New Card"})]})]},o)}const He=[{value:0,label:"Free",description:"5-7 Days delivery"},{value:10,label:"Standard",description:"3-5 Days delivery"},{value:20,label:"Express",description:"2-3 Days delivery"}],Me=[{value:"paypal",label:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely."},{value:"credit",label:"Credit / Debit Card",description:"We support Mastercard, Visa, Discover and Stripe."},{value:"cash",label:"Cash",description:"Pay with cash when your order is delivered."}],Ve=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function Ye({total:s,handleSubmitData:t}){const a=O(),r=$().shape({payment:P().required("Payment is required")}),n={delivery:a.shipping,payment:""},i=q({resolver:G(r),defaultValues:n}),{handleSubmit:o}=i,c=o(async u=>{try{a.onNextStep(),a.onReset(),console.info("DATA",u),t()}catch(d){console.error(d)}});return e.jsx(_,{methods:i,onSubmit:c,children:e.jsxs(h,{container:!0,spacing:3,children:[e.jsxs(h,{xs:12,md:8,children:[e.jsx($e,{onApplyShipping:a.onApplyShipping,options:He}),e.jsx(_e,{cardOptions:Ve,options:Me,sx:{my:3}}),e.jsx(C,{size:"small",color:"inherit",onClick:a.onBackStep,startIcon:e.jsx(l,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),e.jsxs(h,{xs:12,md:4,children:[e.jsx(Ge,{billing:a.billing,onBackStep:a.onBackStep}),e.jsx(M,{total:s}),e.jsx(z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",onClick:t,children:"Complete Order"})]})]})})}function Qe({open:s,onReset:t,onDownloadPDF:a}){const r=e.jsxs(p,{spacing:5,sx:{m:"auto",maxWidth:480,textAlign:"center",px:{xs:2,sm:0}},children:[e.jsx(m,{variant:"h4",children:"Thank you for your purchase!"}),e.jsx(te,{sx:{height:260}}),e.jsxs(m,{children:["Thanks for placing order",e.jsx("br",{}),e.jsx("br",{}),e.jsx(re,{children:"01dc1370-3df6-11eb-b378-0242ac130002"}),e.jsx("br",{}),e.jsx("br",{}),"We will send you a notification within 5 days when it ships.",e.jsx("br",{})," If you have any question or queries then fell to get in contact us. ",e.jsx("br",{})," ",e.jsx("br",{}),"All the best,"]}),e.jsx(ne,{sx:{borderStyle:"dashed"}}),e.jsxs(p,{spacing:2,justifyContent:"space-between",direction:{xs:"column-reverse",sm:"row"},children:[e.jsx(C,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",onClick:t,startIcon:e.jsx(l,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),e.jsx(C,{fullWidth:!0,size:"large",variant:"contained",startIcon:e.jsx(l,{icon:"eva:cloud-download-fill"}),onClick:a,children:"Download as PDF"})]})]});return e.jsx(Ae,{children:s&&e.jsx(ee,{fullWidth:!0,fullScreen:!0,open:s,PaperComponent:n=>e.jsx(x,{component:se.div,...Oe({distance:120,durationIn:.32,durationOut:.24,easeIn:"easeInOut"}).inUp,sx:{width:1,height:1,p:{md:3}},children:e.jsx(W,{...n,children:n.children})}),children:r})})}function Je({handleSetContactInfo:s}){const{user:t}=ae(),[a]=v.useState(""),r=O(),n=$().shape({name:P().required("Name is required"),ssn:P().required("SSN is required"),email:P().required("Mail is required"),phone:P().required("Phone is required")}),i=v.useMemo(()=>({name:(t==null?void 0:t.name)||"",ssn:(t==null?void 0:t.ssn)||"",email:(t==null?void 0:t.email)||"",phone:(t==null?void 0:t.phone)||""}),[t]),o=q({resolver:G(n),defaultValues:i}),{watch:c,handleSubmit:u,formState:{isSubmitting:d}}=o,b=c(),k={name:b.name,fullAddress:b.email},j=u(()=>{s(b),r.onCreateBilling(k)}),f=e.jsx(h,{xs:12,md:12,children:e.jsxs(g,{children:[e.jsx(S,{title:"Details"}),e.jsxs(p,{spacing:3,sx:{p:3},children:[e.jsx(T,{name:"ssn",label:"Social Security Number"}),e.jsx(T,{name:"name",label:"Your Name"}),e.jsx(T,{name:"email",label:"Your E-mail"}),e.jsx(T,{name:"phone",label:"Your Phone"})]})]})}),A=e.jsx(h,{xs:12,md:12,sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:e.jsx(z,{type:"submit",variant:"contained",size:"large",loading:d,children:"Save Contact"})});return e.jsx(_,{methods:o,onSubmit:j,children:e.jsxs(h,{container:!0,spacing:3,children:[!!a&&e.jsx(ie,{severity:"error",sx:{mb:3},children:a}),f,A]})})}function Ue({id:s,graveyardId:t}){const a=oe(),r=O(),{enqueueSnackbar:n}=ce(),i=le(),[o,c]=v.useState({}),{services:u,servicesLoading:d}=de(t),[b,k]=v.useState(0),[j,f]=v.useState([]);v.useEffect(()=>{u&&u.length?f(u):(f([]),k(0))},[u]),v.useEffect(()=>{if(j&&j.length){let y=0;j.forEach(w=>{y+=Number(w.serviceDetails.price)}),k(y)}else f([]),k(0)},[j]);const A=y=>{const w=j.filter(F=>F.id!==y);f(w)},V=y=>{c(y)},Y=async()=>{const y=j.map(E=>E.serviceId).filter(E=>E!==void 0),w={...o,graveyardId:t,gravestoneId:s,servicesList:y};(await je(w)).results.success?(r.onReset(),n("Order success!"),i.push(he)):(console.error("Order did not success!"),r.onReset())};return e.jsxs(xe,{maxWidth:a.themeStretch?!1:"lg",sx:{mb:10},children:[e.jsx(m,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Order Grave Care"}),!d&&e.jsxs(e.Fragment,{children:[e.jsx(h,{container:!0,justifyContent:r.completed?"center":"flex-start",children:e.jsx(h,{xs:12,md:8,children:e.jsx(Re,{activeStep:r.activeStep,steps:pe})})}),r.completed?e.jsx(Qe,{open:r.completed,onReset:r.onReset,onDownloadPDF:()=>{}}):e.jsxs(e.Fragment,{children:[r.activeStep===0&&e.jsx(Le,{services:j,total:b,handleOrderListDelete:A}),r.activeStep===1&&e.jsx(Je,{handleSetContactInfo:V}),r.activeStep===2&&r.billing&&e.jsx(Ye,{total:b,handleSubmitData:Y})]})]})]})}function js(){const s=ue(),{id:t,graveyardId:a}=s;return e.jsxs(e.Fragment,{children:[e.jsx(me,{children:e.jsx("title",{children:" Checkout"})}),e.jsx(Ue,{id:`${t}`,graveyardId:`${a}`})]})}export{js as default};
