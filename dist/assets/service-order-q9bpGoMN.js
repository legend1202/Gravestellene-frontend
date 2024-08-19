import{r as x,a9 as _,aa as q,y as w,ab as h,ac as U,ad as G,j as e,ae as O,af as H,ag as ne,ah as be,ai as re,K as z,aj as E,S as L,T as k,v as g,x as te,f as je,g as b,m as ye,ak as Q,N as I,B as W,al as se,am as ae,an as Z,Y as ie,a as Ce,ao as Se,q as fe,c as le,b as B,d as ce,o as de,F as pe,h as xe,ap as ge,w as Le,aq as Ie,L as we,l as Pe,u as ke,A as $e,e as V,G as Re,_ as Te,i as Ne,ar as Me,C as De,as as Ae,at as Oe,O as We,H as ze}from"./index-N8SydwAL.js";import{c as Ee}from"./order-R7QOarOU.js";import{E as Fe}from"./empty-content-Ttp3qqTd.js";import{f as ue}from"./format-number-wF8MOw5S.js";import{C as Be}from"./CardContent-jp4PiAeh.js";import{T as _e}from"./table-head-custom-2d1oDiAr.js";import{T as qe,a as Ue,b as Ge,c as He}from"./TableHead-lcDFm7L-.js";import{T as F}from"./TableCell-KZJaRtgc.js";import{P as Ve}from"./payment-new-card-dialog-SbwJM4Hb.js";import{v as Ye}from"./fade-VV5890gg.js";import{A as Qe}from"./index-fEFJxiHu.js";import"./Checkbox-aend9-0B.js";import"./SwitchBase-GkPf3Zwx.js";import"./DialogTitle-Wi6leAvy.js";import"./dialogTitleClasses-wwJ_Lgyq.js";import"./DialogContent-SHEs2aaE.js";import"./DialogActions-B4SxnogZ.js";import"./transition-eqIn2NYL.js";const Je=x.createContext({}),J=Je,Ke=x.createContext({}),ee=Ke;function Xe(t){return _("MuiStep",t)}q("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const Ze=["active","children","className","component","completed","disabled","expanded","index","last"],et=t=>{const{classes:o,orientation:n,alternativeLabel:r,completed:s}=t;return H({root:["root",n,r&&"alternativeLabel",s&&"completed"]},Xe,o)},tt=w("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel,n.completed&&o.completed]}})(({ownerState:t})=>h({},t.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})),ot=x.forwardRef(function(o,n){const r=U({props:o,name:"MuiStep"}),{active:s,children:a,className:i,component:l="div",completed:c,disabled:p,expanded:u=!1,index:d,last:m}=r,j=G(r,Ze),{activeStep:S,connector:f,alternativeLabel:$,orientation:v,nonLinear:y}=x.useContext(J);let[C=!1,P=!1,T=!1]=[s,c,p];S===d?C=s!==void 0?s:!0:!y&&S>d?P=c!==void 0?c:!0:!y&&S<d&&(T=p!==void 0?p:!0);const M=x.useMemo(()=>({index:d,last:m,expanded:u,icon:d+1,active:C,completed:P,disabled:T}),[d,m,u,C,P,T]),N=h({},r,{active:C,orientation:v,alternativeLabel:$,completed:P,disabled:T,expanded:u,component:l}),D=et(N),A=e.jsxs(tt,h({as:l,className:O(D.root,i),ref:n,ownerState:N},j,{children:[f&&$&&d!==0?f:null,a]}));return e.jsx(ee.Provider,{value:M,children:f&&!$&&d!==0?e.jsxs(x.Fragment,{children:[f,A]}):A})}),nt=ot,rt=ne(e.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),st=ne(e.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function at(t){return _("MuiStepIcon",t)}const it=q("MuiStepIcon",["root","active","completed","error","text"]),K=it;var oe;const lt=["active","className","completed","error","icon"],ct=t=>{const{classes:o,active:n,completed:r,error:s}=t;return H({root:["root",n&&"active",r&&"completed",s&&"error"],text:["text"]},at,o)},X=w(be,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,o)=>o.root})(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${K.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${K.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${K.error}`]:{color:(t.vars||t).palette.error.main}})),dt=w("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,o)=>o.text})(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily})),pt=x.forwardRef(function(o,n){const r=U({props:o,name:"MuiStepIcon"}),{active:s=!1,className:a,completed:i=!1,error:l=!1,icon:c}=r,p=G(r,lt),u=h({},r,{active:s,completed:i,error:l}),d=ct(u);if(typeof c=="number"||typeof c=="string"){const m=O(a,d.root);return l?e.jsx(X,h({as:st,className:m,ref:n,ownerState:u},p)):i?e.jsx(X,h({as:rt,className:m,ref:n,ownerState:u},p)):e.jsxs(X,h({className:m,ref:n,ownerState:u},p,{children:[oe||(oe=e.jsx("circle",{cx:"12",cy:"12",r:"12"})),e.jsx(dt,{className:d.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:u,children:c})]}))}return c}),xt=pt;function ut(t){return _("MuiStepLabel",t)}const mt=q("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),R=mt,ht=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],vt=t=>{const{classes:o,orientation:n,active:r,completed:s,error:a,disabled:i,alternativeLabel:l}=t;return H({root:["root",n,a&&"error",i&&"disabled",l&&"alternativeLabel"],label:["label",r&&"active",s&&"completed",a&&"error",i&&"disabled",l&&"alternativeLabel"],iconContainer:["iconContainer",r&&"active",s&&"completed",a&&"error",i&&"disabled",l&&"alternativeLabel"],labelContainer:["labelContainer",l&&"alternativeLabel"]},ut,o)},bt=w("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation]]}})(({ownerState:t})=>h({display:"flex",alignItems:"center",[`&.${R.alternativeLabel}`]:{flexDirection:"column"},[`&.${R.disabled}`]:{cursor:"default"}},t.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),jt=w("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,o)=>o.label})(({theme:t})=>h({},t.typography.body2,{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${R.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${R.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${R.alternativeLabel}`]:{marginTop:16},[`&.${R.error}`]:{color:(t.vars||t).palette.error.main}})),yt=w("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,o)=>o.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${R.alternativeLabel}`]:{paddingRight:0}})),Ct=w("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,o)=>o.labelContainer})(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${R.alternativeLabel}`]:{textAlign:"center"}})),me=x.forwardRef(function(o,n){var r;const s=U({props:o,name:"MuiStepLabel"}),{children:a,className:i,componentsProps:l={},error:c=!1,icon:p,optional:u,slotProps:d={},StepIconComponent:m,StepIconProps:j}=s,S=G(s,ht),{alternativeLabel:f,orientation:$}=x.useContext(J),{active:v,disabled:y,completed:C,icon:P}=x.useContext(ee),T=p||P;let M=m;T&&!M&&(M=xt);const N=h({},s,{active:v,alternativeLabel:f,completed:C,disabled:y,error:c,orientation:$}),D=vt(N),A=(r=d.label)!=null?r:l.label;return e.jsxs(bt,h({className:O(D.root,i),ref:n,ownerState:N},S,{children:[T||M?e.jsx(yt,{className:D.iconContainer,ownerState:N,children:e.jsx(M,h({completed:C,active:v,error:c,icon:T},j))}):null,e.jsxs(Ct,{className:D.labelContainer,ownerState:N,children:[a?e.jsx(jt,h({ownerState:N},A,{className:O(D.label,A==null?void 0:A.className),children:a})):null,u]})]}))});me.muiName="StepLabel";const St=me;function ft(t){return _("MuiStepConnector",t)}const gt=q("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]),Y=gt,Lt=["className"],It=t=>{const{classes:o,orientation:n,alternativeLabel:r,active:s,completed:a,disabled:i}=t,l={root:["root",n,r&&"alternativeLabel",s&&"active",a&&"completed",i&&"disabled"],line:["line",`line${re(n)}`]};return H(l,ft,o)},wt=w("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel,n.completed&&o.completed]}})(({ownerState:t})=>h({flex:"1 1 auto"},t.orientation==="vertical"&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),Pt=w("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.line,o[`line${re(n.orientation)}`]]}})(({ownerState:t,theme:o})=>{const n=o.palette.mode==="light"?o.palette.grey[400]:o.palette.grey[600];return h({display:"block",borderColor:o.vars?o.vars.palette.StepConnector.border:n},t.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},t.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),kt=x.forwardRef(function(o,n){const r=U({props:o,name:"MuiStepConnector"}),{className:s}=r,a=G(r,Lt),{alternativeLabel:i,orientation:l="horizontal"}=x.useContext(J),{active:c,disabled:p,completed:u}=x.useContext(ee),d=h({},r,{alternativeLabel:i,orientation:l,active:c,completed:u,disabled:p}),m=It(d);return e.jsx(wt,h({className:O(m.root,s),ref:n,ownerState:d},a,{children:e.jsx(Pt,{className:m.line,ownerState:d})}))}),he=kt;function $t(t){return _("MuiStepper",t)}q("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const Rt=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],Tt=t=>{const{orientation:o,alternativeLabel:n,classes:r}=t;return H({root:["root",o,n&&"alternativeLabel"]},$t,r)},Nt=w("div",{name:"MuiStepper",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel]}})(({ownerState:t})=>h({display:"flex"},t.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},t.orientation==="vertical"&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})),Mt=e.jsx(he,{}),Dt=x.forwardRef(function(o,n){const r=U({props:o,name:"MuiStepper"}),{activeStep:s=0,alternativeLabel:a=!1,children:i,className:l,component:c="div",connector:p=Mt,nonLinear:u=!1,orientation:d="horizontal"}=r,m=G(r,Rt),j=h({},r,{alternativeLabel:a,orientation:d,component:c}),S=Tt(j),f=x.Children.toArray(i).filter(Boolean),$=f.map((y,C)=>x.cloneElement(y,h({index:C,last:C+1===f.length},y.props))),v=x.useMemo(()=>({activeStep:s,alternativeLabel:a,connector:p,nonLinear:u,orientation:d}),[s,a,p,u,d]);return e.jsx(J.Provider,{value:v,children:e.jsx(Nt,h({as:c,ownerState:j,className:O(S.root,l),ref:n},m,{children:$}))})}),At=Dt;function ve({total:t}){return e.jsxs(z,{sx:{mb:3},children:[e.jsx(E,{title:"Order Summary"}),e.jsx(Be,{children:e.jsxs(L,{direction:"row",justifyContent:"space-between",children:[e.jsx(k,{variant:"subtitle1",children:"Total"}),e.jsx(g,{sx:{textAlign:"right"},children:e.jsx(k,{variant:"subtitle1",sx:{color:"error.main"},children:ue(t)})})]})})]})}function Ot({row:t,onDelete:o,onDecrease:n,onIncrease:r}){const{serviceDetails:{name:s,description:a,price:i},graveyardDetails:{name:l}}=t;return e.jsxs(qe,{children:[e.jsx(F,{children:e.jsx(k,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:s})}),e.jsx(F,{children:e.jsx(k,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:e.jsxs(te,{children:[" ",a," "]})})}),e.jsx(F,{children:ue(i)}),e.jsx(F,{align:"center",sx:{px:1},children:e.jsx(k,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:e.jsxs(te,{children:[" ",l," "]})})}),e.jsx(F,{align:"right",sx:{px:1},children:e.jsx(je,{onClick:o,children:e.jsx(b,{icon:"solar:trash-bin-trash-bold"})})})]})}const Wt=[{id:"name",label:"Name"},{id:"description",label:"Description"},{id:"price",label:"Price"},{id:"graveyard",label:"Graveyard",align:"center"},{id:""}];function zt({products:t,onDelete:o,onIncreaseQuantity:n,onDecreaseQuantity:r}){return e.jsx(Ue,{sx:{overflow:"unset"},children:e.jsx(ye,{children:e.jsxs(Ge,{sx:{minWidth:720},children:[e.jsx(_e,{headLabel:Wt}),e.jsx(He,{children:t&&t.map(s=>e.jsx(Ot,{row:s,onDelete:()=>o(s.id||""),onDecrease:()=>r(s.id||""),onIncrease:()=>n(s.id||"")},s.id))})]})})})}function Et({total:t,services:o,handleOrderListDelete:n}){const r=Q(),s=o&&!o.length;return e.jsxs(I,{container:!0,spacing:3,children:[e.jsx(I,{xs:12,md:8,children:e.jsxs(z,{sx:{mb:3},children:[e.jsx(E,{title:e.jsxs(k,{variant:"h6",children:["Cart",e.jsxs(k,{component:"span",sx:{color:"text.secondary"},children:[" (",r.totalItems," item)"]})]}),sx:{mb:3}}),s?e.jsx(Fe,{title:"Cart is Empty!",description:"Look like you have no items in your shopping cart.",imgUrl:"/assets/icons/empty/ic_cart.svg",sx:{pt:5,pb:10}}):e.jsx(zt,{products:o,onDelete:n,onIncreaseQuantity:r.onIncreaseQuantity,onDecreaseQuantity:r.onDecreaseQuantity})]})}),e.jsxs(I,{xs:12,md:4,children:[e.jsx(ve,{total:t}),e.jsx(W,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:s,onClick:r.onNextStep,children:"Check Out"})]})]})}const Ft=w(he)(({theme:t})=>({top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)",[`& .${Y.line}`]:{borderTopWidth:2,borderColor:t.palette.divider},[`&.${Y.active}, &.${Y.completed}`]:{[`& .${Y.line}`]:{borderColor:t.palette.primary.main}}}));function Bt({steps:t,activeStep:o,sx:n,...r}){return e.jsx(At,{alternativeLabel:!0,activeStep:o,connector:e.jsx(Ft,{}),sx:{mb:{xs:3,md:5},...n},...r,children:t.map(s=>e.jsx(nt,{children:e.jsx(St,{StepIconComponent:_t,sx:{[`& .${R.label}`]:{fontWeight:"fontWeightSemiBold"}},children:s})},s))})}function _t({active:t,completed:o}){return e.jsx(L,{alignItems:"center",justifyContent:"center",sx:{width:24,height:24,color:"text.disabled",...t&&{color:"primary.main"}},children:o?e.jsx(b,{icon:"eva:checkmark-fill",sx:{color:"primary.main"}}):e.jsx(g,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}function qt({options:t,onApplyShipping:o,...n}){const{control:r}=se();return e.jsxs(z,{...n,children:[e.jsx(E,{title:"Delivery"}),e.jsx(ae,{name:"delivery",control:r,render:({field:s})=>e.jsx(g,{columnGap:2,rowGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},sx:{p:3},children:t.map(a=>e.jsx(Ut,{option:a,selected:s.value===a.value,onClick:()=>{s.onChange(a.value),o(a.value)}},a.label))})})]})}function Ut({option:t,selected:o,...n}){const{value:r,label:s,description:a}=t;return e.jsxs(Z,{variant:"outlined",sx:{p:2.5,cursor:"pointer",display:"flex",...o&&{boxShadow:i=>`0 0 0 2px ${i.palette.text.primary}`}},...n,children:[s==="Free"&&e.jsx(b,{icon:"carbon:bicycle",width:32}),s==="Standard"&&e.jsx(b,{icon:"carbon:delivery",width:32}),s==="Express"&&e.jsx(b,{icon:"carbon:rocket",width:32}),e.jsx(ie,{sx:{ml:2},primary:e.jsxs(L,{direction:"row",alignItems:"center",children:[e.jsx(g,{component:"span",sx:{flexGrow:1},children:s}),e.jsx(g,{component:"span",sx:{typography:"h6"},children:`$${r}`})]}),secondary:a,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}})]},r)}function Gt({billing:t,onBackStep:o}){return e.jsxs(z,{sx:{mb:3},children:[e.jsx(E,{title:"Address",action:e.jsx(W,{size:"small",startIcon:e.jsx(b,{icon:"solar:pen-bold"}),onClick:o,children:"Edit"})}),e.jsxs(L,{spacing:1,sx:{p:3},children:[e.jsxs(g,{sx:{typography:"subtitle2"},children:[`${t==null?void 0:t.name} `,e.jsxs(g,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:["(",t==null?void 0:t.addressType,")"]})]}),e.jsx(g,{sx:{color:"text.secondary",typography:"body2"},children:t==null?void 0:t.fullAddress}),e.jsx(g,{sx:{color:"text.secondary",typography:"body2"},children:t==null?void 0:t.phoneNumber})]})]})}function Ht({options:t,cardOptions:o,...n}){const{control:r}=se(),s=Ce();return e.jsxs(e.Fragment,{children:[e.jsxs(z,{...n,children:[e.jsx(E,{title:"Payment"}),e.jsx(ae,{name:"payment",control:r,render:({field:a,fieldState:{error:i}})=>e.jsxs(L,{sx:{px:3,pb:3},children:[t.map(l=>e.jsx(Vt,{option:l,onOpen:s.onTrue,cardOptions:o,selected:a.value===l.value,isCredit:l.value==="credit"&&a.value==="credit",onClick:()=>{a.onChange(l.value)}},l.label)),!!i&&e.jsx(Se,{error:!0,sx:{pt:1,px:2},children:i.message})]})})]}),e.jsx(Ve,{open:s.value,onClose:s.onFalse})]})}function Vt({option:t,cardOptions:o,selected:n,isCredit:r,onOpen:s,...a}){const{value:i,label:l,description:c}=t;return e.jsxs(Z,{variant:"outlined",sx:{p:2.5,mt:2.5,cursor:"pointer",...n&&{boxShadow:p=>`0 0 0 2px ${p.palette.text.primary}`}},...a,children:[e.jsx(ie,{primary:e.jsxs(L,{direction:"row",alignItems:"center",children:[e.jsx(g,{component:"span",sx:{flexGrow:1},children:l}),e.jsxs(L,{spacing:1,direction:"row",alignItems:"center",children:[i==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(b,{icon:"logos:mastercard",width:24}),",",e.jsx(b,{icon:"logos:visa",width:24})]}),i==="paypal"&&e.jsx(b,{icon:"logos:paypal",width:24}),i==="cash"&&e.jsx(b,{icon:"solar:wad-of-money-bold",width:32})]})]}),secondary:c,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}}),r&&e.jsxs(L,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(fe,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:o.map(p=>e.jsx("option",{value:p.value,children:p.label},p.value))}),e.jsx(W,{size:"small",color:"primary",startIcon:e.jsx(b,{icon:"mingcute:add-line"}),onClick:s,children:"Add New Card"})]})]},i)}const Yt=[{value:0,label:"Free",description:"5-7 Days delivery"},{value:10,label:"Standard",description:"3-5 Days delivery"},{value:20,label:"Express",description:"2-3 Days delivery"}],Qt=[{value:"paypal",label:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely."},{value:"credit",label:"Credit / Debit Card",description:"We support Mastercard, Visa, Discover and Stripe."},{value:"cash",label:"Cash",description:"Pay with cash when your order is delivered."}],Jt=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function Kt({total:t,handleSubmitData:o}){const n=Q(),r=le().shape({payment:B().required("Payment is required")}),s={delivery:n.shipping,payment:""},a=ce({resolver:de(r),defaultValues:s}),{handleSubmit:i}=a,l=i(async c=>{try{n.onNextStep(),n.onReset(),console.info("DATA",c),o()}catch(p){console.error(p)}});return e.jsx(pe,{methods:a,onSubmit:l,children:e.jsxs(I,{container:!0,spacing:3,children:[e.jsxs(I,{xs:12,md:8,children:[e.jsx(qt,{onApplyShipping:n.onApplyShipping,options:Yt}),e.jsx(Ht,{cardOptions:Jt,options:Qt,sx:{my:3}}),e.jsx(W,{size:"small",color:"inherit",onClick:n.onBackStep,startIcon:e.jsx(b,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),e.jsxs(I,{xs:12,md:4,children:[e.jsx(Gt,{billing:n.billing,onBackStep:n.onBackStep}),e.jsx(ve,{total:t}),e.jsx(xe,{fullWidth:!0,size:"large",type:"submit",variant:"contained",onClick:o,children:"Complete Order"})]})]})})}function Xt({open:t,onReset:o,onDownloadPDF:n}){const r=e.jsxs(L,{spacing:5,sx:{m:"auto",maxWidth:480,textAlign:"center",px:{xs:2,sm:0}},children:[e.jsx(k,{variant:"h4",children:"Thank you for your purchase!"}),e.jsx(Ie,{sx:{height:260}}),e.jsxs(k,{children:["Thanks for placing order",e.jsx("br",{}),e.jsx("br",{}),e.jsx(we,{children:"01dc1370-3df6-11eb-b378-0242ac130002"}),e.jsx("br",{}),e.jsx("br",{}),"We will send you a notification within 5 days when it ships.",e.jsx("br",{})," If you have any question or queries then fell to get in contact us. ",e.jsx("br",{})," ",e.jsx("br",{}),"All the best,"]}),e.jsx(Pe,{sx:{borderStyle:"dashed"}}),e.jsxs(L,{spacing:2,justifyContent:"space-between",direction:{xs:"column-reverse",sm:"row"},children:[e.jsx(W,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",onClick:o,startIcon:e.jsx(b,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),e.jsx(W,{fullWidth:!0,size:"large",variant:"contained",startIcon:e.jsx(b,{icon:"eva:cloud-download-fill"}),onClick:n,children:"Download as PDF"})]})]});return e.jsx(Qe,{children:t&&e.jsx(ge,{fullWidth:!0,fullScreen:!0,open:t,PaperComponent:s=>e.jsx(g,{component:Le.div,...Ye({distance:120,durationIn:.32,durationOut:.24,easeIn:"easeInOut"}).inUp,sx:{width:1,height:1,p:{md:3}},children:e.jsx(Z,{...s,children:s.children})}),children:r})})}function Zt({handleSetContactInfo:t}){const{user:o}=ke(),[n]=x.useState(""),r=Q(),s=le().shape({name:B().required("Name is required"),ssn:B().required("SSN is required"),email:B().required("Mail is required"),phone:B().required("Phone is required")}),a=x.useMemo(()=>({name:(o==null?void 0:o.name)||"",ssn:(o==null?void 0:o.ssn)||"",email:(o==null?void 0:o.email)||"",phone:(o==null?void 0:o.phone)||""}),[o]),i=ce({resolver:de(s),defaultValues:a}),{watch:l,handleSubmit:c,formState:{isSubmitting:p}}=i,u=l(),d={name:u.name,fullAddress:u.email},m=c(()=>{t(u),r.onCreateBilling(d)}),j=e.jsx(I,{xs:12,md:12,children:e.jsxs(z,{children:[e.jsx(E,{title:"Details"}),e.jsxs(L,{spacing:3,sx:{p:3},children:[e.jsx(V,{name:"ssn",label:"Social Security Number"}),e.jsx(V,{name:"name",label:"Your Name"}),e.jsx(V,{name:"email",label:"Your E-mail"}),e.jsx(V,{name:"phone",label:"Your Phone"})]})]})}),S=e.jsx(I,{xs:12,md:12,sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:e.jsx(xe,{type:"submit",variant:"contained",size:"large",loading:p,children:"Save Contact"})});return e.jsx(pe,{methods:i,onSubmit:m,children:e.jsxs(I,{container:!0,spacing:3,children:[!!n&&e.jsx($e,{severity:"error",sx:{mb:3},children:n}),j,S]})})}function eo({id:t,graveyardId:o}){const n=Re(),r=Q(),{enqueueSnackbar:s}=Te(),a=Ne(),[i,l]=x.useState({}),{services:c,servicesLoading:p}=Me(o),[u,d]=x.useState(0),[m,j]=x.useState([]);x.useEffect(()=>{c&&c.length?j(c):(j([]),d(0))},[c]),x.useEffect(()=>{if(m&&m.length){let v=0;m.forEach(y=>{v+=Number(y.serviceDetails.price)}),d(v)}else j([]),d(0)},[m]);const S=v=>{const y=m.filter(C=>C.id!==v);j(y)},f=v=>{l(v)},$=async()=>{const v=m.map(P=>P.serviceId).filter(P=>P!==void 0),y={...i,graveyardId:o,gravestoneId:t,servicesList:v};(await Ee(y)).results.success?(r.onReset(),s("Order success!"),a.push(Oe)):(console.error("Order did not success!"),r.onReset())};return e.jsxs(De,{maxWidth:n.themeStretch?!1:"lg",sx:{mb:10},children:[e.jsx(k,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Order Grave Care"}),!p&&e.jsxs(e.Fragment,{children:[e.jsx(I,{container:!0,justifyContent:r.completed?"center":"flex-start",children:e.jsx(I,{xs:12,md:8,children:e.jsx(Bt,{activeStep:r.activeStep,steps:Ae})})}),r.completed?e.jsx(Xt,{open:r.completed,onReset:r.onReset,onDownloadPDF:()=>{}}):e.jsxs(e.Fragment,{children:[r.activeStep===0&&e.jsx(Et,{services:m,total:u,handleOrderListDelete:S}),r.activeStep===1&&e.jsx(Zt,{handleSetContactInfo:f}),r.activeStep===2&&r.billing&&e.jsx(Kt,{total:u,handleSubmitData:$})]})]})]})}function Co(){const t=We(),{id:o,graveyardId:n}=t;return e.jsxs(e.Fragment,{children:[e.jsx(ze,{children:e.jsx("title",{children:" Checkout"})}),e.jsx(eo,{id:`${o}`,graveyardId:`${n}`})]})}export{Co as default};
