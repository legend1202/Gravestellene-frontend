import{r as u,U as C,X as P,aF as S,aG as l,aH as U,aI as N,ad as J,j as s,aJ as q,aK as k,aL as Q,aM as Y,aN as Z,aO as g,aP as ss,aQ as es,aR as os,aS as as,B as b,aA as ts,aB as ns,C as _,S as E,_ as d,M as y,I as rs,h as F,aT as W,aU as is,T,t as V,aV as ds,b as cs,aW as ls,aX as ps,K as us,ar as xs,aY as H,aZ as ms,H as hs}from"./index-HNXcBFmK.js";import{v as c}from"./fade-VV5890gg.js";import{M as fs}from"./motion-container-FC1k2uqY.js";import{M as L}from"./motion-viewport-bUjfFpRa.js";import{T as gs}from"./text-max-line-h08lUWkW.js";import"./transition-eqIn2NYL.js";const bs=u.createContext({}),O=bs,js=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],vs=e=>{const{classes:o,square:a,expanded:t,disabled:n,disableGutters:i}=e;return k({root:["root",!a&&"rounded",t&&"expanded",n&&"disabled",!i&&"gutters"],region:["region"]},Q,o)},ys=C(P,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[{[`& .${S.region}`]:o.region},o.root,!a.square&&o.rounded,!a.disableGutters&&o.gutters]}})(({theme:e})=>{const o={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],o),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],o)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${S.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${S.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e,ownerState:o})=>l({},!o.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!o.disableGutters&&{[`&.${S.expanded}`]:{margin:"16px 0"}})),Cs=u.forwardRef(function(o,a){const t=U({props:o,name:"MuiAccordion"}),{children:n,className:i,defaultExpanded:p=!1,disabled:x=!1,disableGutters:h=!1,expanded:I,onChange:f,square:A=!1,TransitionComponent:R=Y,TransitionProps:w}=t,M=N(t,js),[r,m]=J({controlled:I,default:p,name:"Accordion",state:"expanded"}),j=u.useCallback(X=>{m(!r),f&&f(X,!r)},[r,f,m]),[$,...z]=u.Children.toArray(n),K=u.useMemo(()=>({expanded:r,disabled:x,disableGutters:h,toggle:j}),[r,x,h,j]),B=l({},t,{square:A,disabled:x,disableGutters:h,expanded:r}),G=vs(B);return s.jsxs(ys,l({className:q(G.root,i),ref:a,ownerState:B,square:A},M,{children:[s.jsx(O.Provider,{value:K,children:$}),s.jsx(R,l({in:r,timeout:"auto"},w,{children:s.jsx("div",{"aria-labelledby":$.props.id,id:$.props["aria-controls"],role:"region",className:G.region,children:z})}))]}))}),As=Cs,Rs=["children","className","expandIcon","focusVisibleClassName","onClick"],ws=e=>{const{classes:o,expanded:a,disabled:t,disableGutters:n}=e;return k({root:["root",a&&"expanded",t&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]},ss,o)},Ss=C(Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e,ownerState:o})=>{const a={duration:e.transitions.duration.shortest};return l({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],a),[`&.${g.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${g.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${g.disabled})`]:{cursor:"pointer"}},!o.disableGutters&&{[`&.${g.expanded}`]:{minHeight:64}})}),qs=C("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,o)=>o.content})(({theme:e,ownerState:o})=>l({display:"flex",flexGrow:1,margin:"12px 0"},!o.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${g.expanded}`]:{margin:"20px 0"}})),Ts=C("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,o)=>o.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${g.expanded}`]:{transform:"rotate(180deg)"}})),Is=u.forwardRef(function(o,a){const t=U({props:o,name:"MuiAccordionSummary"}),{children:n,className:i,expandIcon:p,focusVisibleClassName:x,onClick:h}=t,I=N(t,Rs),{disabled:f=!1,disableGutters:A,expanded:R,toggle:w}=u.useContext(O),M=j=>{w&&w(j),h&&h(j)},r=l({},t,{expanded:R,disabled:f,disableGutters:A}),m=ws(r);return s.jsxs(Ss,l({focusRipple:!1,disableRipple:!0,disabled:f,component:"div","aria-expanded":R,className:q(m.root,i),focusVisibleClassName:q(m.focusVisible,x),onClick:M,ref:a,ownerState:r},I,{children:[s.jsx(qs,{className:m.content,ownerState:r,children:n}),p&&s.jsx(Ts,{className:m.expandIconWrapper,ownerState:r,children:p})]}))}),Ms=Is;function $s(e){return es("MuiAccordionDetails",e)}os("MuiAccordionDetails",["root"]);const Us=["className"],Ns=e=>{const{classes:o}=e;return k({root:["root"]},$s,o)},ks=C("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),Fs=u.forwardRef(function(o,a){const t=U({props:o,name:"MuiAccordionDetails"}),{className:n}=t,i=N(t,Us),p=t,x=Ns(p);return s.jsx(ks,l({className:q(x.root,n),ref:a,ownerState:p},i))}),Bs=Fs;function Gs(){const e=as();return s.jsx(b,{sx:{...ts({color:ns(e.palette.grey[900],.8),imgUrl:"/assets/images/faqs/hero.jpg"}),height:{md:560},py:{xs:10,md:0},overflow:"hidden",position:"relative"},children:s.jsx(_,{component:fs,children:s.jsxs(b,{sx:{bottom:{md:80},position:{md:"absolute"},textAlign:{xs:"center",md:"unset"}},children:[s.jsxs("div",{children:[s.jsx(v,{text:"How",sx:{color:"primary.main"},variants:c().inRight}),s.jsx("br",{}),s.jsxs(E,{spacing:2,display:"inline-flex",direction:"row",sx:{color:"common.white"},children:[s.jsx(v,{text:"can"}),s.jsx(v,{text:"we"}),s.jsx(v,{text:"help"}),s.jsx(v,{text:"you?"})]})]}),s.jsx(d.div,{variants:c().in,children:s.jsx(y,{fullWidth:!0,placeholder:"Search support...",InputProps:{startAdornment:s.jsx(rs,{position:"start",children:s.jsx(F,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{mt:5,maxWidth:360,[`& .${W.root}`]:{bgcolor:"common.white"},[`& .${W.input}`]:{typography:"subtitle1"}}})})]})})})}function v({text:e,variants:o,sx:a,...t}){return s.jsx(b,{component:d.div,sx:{typography:"h1",overflow:"hidden",display:"inline-flex",...a},...t,children:e.split("").map((n,i)=>s.jsx(d.span,{variants:o||c().inUp,children:n},i))})}function Ws(){return s.jsx("div",{children:is.map(e=>s.jsxs(As,{children:[s.jsx(Ms,{expandIcon:s.jsx(F,{icon:"eva:arrow-ios-downward-fill"}),children:s.jsx(T,{variant:"subtitle1",children:e.heading})}),s.jsx(Bs,{children:s.jsx(T,{children:e.detail})})]},e.id))})}function Ds(){return s.jsxs(E,{component:L,spacing:3,children:[s.jsx(d.div,{variants:c().inUp,children:s.jsx(T,{variant:"h4",children:"Haven't found the right help?"})}),s.jsx(d.div,{variants:c().inUp,children:s.jsx(y,{fullWidth:!0,label:"Name"})}),s.jsx(d.div,{variants:c().inUp,children:s.jsx(y,{fullWidth:!0,label:"Email"})}),s.jsx(d.div,{variants:c().inUp,children:s.jsx(y,{fullWidth:!0,label:"Subject"})}),s.jsx(d.div,{variants:c().inUp,children:s.jsx(y,{fullWidth:!0,label:"Enter your message here.",multiline:!0,rows:4})}),s.jsx(d.div,{variants:c().inUp,children:s.jsx(V,{size:"large",variant:"contained",children:"Submit Now"})})]})}const D=[{label:"Managing your account",icon:"/assets/icons/faqs/ic_account.svg",href:"#"},{label:"Payment",icon:"/assets/icons/faqs/ic_payment.svg",href:"#"},{label:"Delivery",icon:"/assets/icons/faqs/ic_delivery.svg",href:"#"},{label:"Problem with the Product",icon:"/assets/icons/faqs/ic_package.svg",href:"#"},{label:"Return & Refund",icon:"/assets/icons/faqs/ic_refund.svg",href:"#"},{label:"Guarantees and assurances",icon:"/assets/icons/faqs/ic_assurances.svg",href:"#"}];function Ps(){const e=ds("up","md"),o=cs();return e?s.jsx(b,{component:L,gap:3,display:"grid",gridTemplateColumns:{md:"repeat(3, 1fr)",lg:"repeat(6, 1fr)"},children:D.map(a=>s.jsx(d.div,{variants:c().in,children:s.jsx(_s,{category:a})},a.label))}):s.jsxs(s.Fragment,{children:[s.jsxs(ls,{position:"absolute",children:[s.jsx(ps,{children:s.jsx(V,{startIcon:s.jsx(F,{icon:"solar:list-bold"}),onClick:o.onTrue,children:"Categories"})}),s.jsx(us,{})]}),s.jsx(xs,{open:o.value,onClose:o.onFalse,children:s.jsx(b,{gap:1,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{p:1},children:D.map(a=>s.jsx(Es,{category:a},a.label))})})]})}function _s({category:e}){const{label:o,icon:a}=e;return s.jsxs(P,{variant:"outlined",sx:{p:3,borderRadius:2,bgcolor:"unset",cursor:"pointer",textAlign:"center","&:hover":{bgcolor:"background.paper",boxShadow:t=>t.customShadows.z20}},children:[s.jsx(H,{disabledEffect:!0,alt:a,src:a,sx:{mb:2,width:80,height:80,mx:"auto"}}),s.jsx(gs,{variant:"subtitle2",persistent:!0,children:o})]})}function Es({category:e}){const{label:o,icon:a}=e;return s.jsxs(ms,{sx:{py:2,maxWidth:140,borderRadius:1,textAlign:"center",alignItems:"center",typography:"subtitle2",flexDirection:"column",justifyContent:"center",bgcolor:"background.neutral"},children:[s.jsx(H,{alt:a,src:a,sx:{width:48,height:48,mb:1}}),e.label]},o)}function Vs(){return s.jsxs(s.Fragment,{children:[s.jsx(Gs,{}),s.jsxs(_,{sx:{pb:10,pt:{xs:10,md:15},position:"relative"},children:[s.jsx(Ps,{}),s.jsx(T,{variant:"h3",sx:{my:{xs:5,md:10}},children:"Frequently asked questions"}),s.jsxs(b,{gap:10,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[s.jsx(Ws,{}),s.jsx(Ds,{})]})]})]})}function Js(){return s.jsxs(s.Fragment,{children:[s.jsx(hs,{children:s.jsx("title",{children:" Faqs"})}),s.jsx(Vs,{})]})}export{Js as default};