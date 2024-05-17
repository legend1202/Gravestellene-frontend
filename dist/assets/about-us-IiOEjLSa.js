import{j as e,B as m,C as N,S as j,q as r,T as u,ax as $,aA as te,ag as W,G as y,aE as ue,i as G,d as k,aF as _,aG as xe,c as he,av as pe,aw as ge,s as fe,r as B,am as ye,an as ve,al as C,M as je,V as be,ao as we,ap as Ce,aH as ee,aI as ke,aJ as z,aK as E,aL as Me,aM as V,aN as Se,aO as Re,af as Ne,aP as Ae,A as Ie,g as Te,aQ as Ue,H as Fe}from"./index-tWxiFnGS.js";import{v as a}from"./fade-VV5890gg.js";import{M as Be}from"./motion-container-CDGUS1P9.js";import{a as Pe}from"./format-number-JDM7uL47.js";import{I as P}from"./image-IKMP3f3C.js";import{M as H}from"./motion-viewport-aPFUJa8u.js";import{u as $e,C as We,a as He}from"./carousel-arrow-index-O0BijrEu.js";import{C as Oe}from"./Card-ZKq7ZSof.js";import{F as Le}from"./Fab-E_KialRR.js";import{R as _e}from"./Rating-22SIQLqa.js";import"./transition-eqIn2NYL.js";import"./visuallyHidden-DVicuktI.js";function ze(){return e.jsx(m,{sx:{height:{md:560},py:{xs:10,md:0},overflow:"hidden",position:"relative",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(/assets/background/overlay_1.svg), url(/assets/images/about/hero.jpg)"},children:e.jsx(N,{component:Be,children:e.jsxs(m,{sx:{bottom:{md:80},position:{md:"absolute"},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(D,{text:"Who",variants:a().inRight,sx:{color:"primary.main"}}),e.jsx("br",{}),e.jsxs(j,{spacing:2,display:"inline-flex",direction:"row",sx:{color:"common.white"},children:[e.jsx(D,{text:"we"}),e.jsx(D,{text:"are?"})]}),e.jsx(r.div,{variants:a().inRight,children:e.jsxs(u,{variant:"h4",sx:{mt:3,color:"common.white",fontWeight:"fontWeightSemiBold"},children:["Let's work together and",e.jsx("br",{})," make awesome site easily"]})})]})})})}function D({text:t,variants:s,sx:i,...o}){return e.jsx(m,{component:r.div,sx:{typography:"h1",overflow:"hidden",display:"inline-flex",...i},...o,children:t.split("").map((n,d)=>e.jsx(r.span,{variants:s||a().inUp,children:n},d))})}const Ee=[...Array(3)].map((t,s)=>({label:["Development","Design","Marketing"][s],value:[20,40,60][s]}));function Ve(){const t=$(),s=te("up","md"),i=t.palette.mode==="light",o=`-40px 40px 80px ${W(i?t.palette.grey[500]:t.palette.common.black,.24)}`;return e.jsx(N,{component:H,sx:{py:{xs:10,md:15},textAlign:{xs:"center",md:"unset"}},children:e.jsxs(y,{container:!0,columnSpacing:{md:3},alignItems:"flex-start",children:[s&&e.jsxs(y,{container:!0,xs:12,md:6,lg:7,alignItems:"center",sx:{pr:{md:7}},children:[e.jsx(y,{xs:6,children:e.jsx(r.div,{variants:a().inUp,children:e.jsx(P,{alt:"our office 2",src:"/assets/images/about/what_2.png",ratio:"1/1",sx:{borderRadius:3,boxShadow:o}})})}),e.jsx(y,{xs:6,children:e.jsx(r.div,{variants:a().inUp,children:e.jsx(P,{alt:"our office 1",src:"/assets/images/about/what_1.png",ratio:"3/4",sx:{borderRadius:3,boxShadow:o}})})})]}),e.jsxs(y,{xs:12,md:6,lg:5,children:[e.jsx(r.div,{variants:a().inRight,children:e.jsx(u,{variant:"h2",sx:{mb:3},children:"What is Minimal?"})}),e.jsx(r.div,{variants:a().inRight,children:e.jsx(u,{sx:{color:t.palette.mode==="light"?"text.secondary":"common.white"},children:"Our theme is the most advanced and user-friendly theme you will find on the market, we have documentation and video to help set your site really easily, pre-installed demos you can import in one click and everything from the theme options to page content can be edited from the front-end. This is the theme you are looking for."})}),e.jsx(j,{spacing:3,sx:{my:5},children:Ee.map((n,d)=>e.jsxs(m,{component:r.div,variants:a().inRight,children:[e.jsxs(j,{direction:"row",alignItems:"center",sx:{mb:1},children:[e.jsx(u,{variant:"subtitle2",sx:{flexGrow:1,textAlign:"left"},children:n.label}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:Pe(n.value)})]}),e.jsx(ue,{color:d===0&&"primary"||d===1&&"warning"||"error",variant:"determinate",value:n.value})]},n.label))}),e.jsx(r.div,{variants:a().inRight,children:e.jsx(G,{variant:"outlined",color:"inherit",size:"large",endIcon:e.jsx(k,{icon:"eva:arrow-ios-forward-fill"}),children:"Our Work"})})]})]})})}function De(){const t=$e({infinite:!1,slidesToShow:4,responsive:[{breakpoint:1279,settings:{slidesToShow:3}},{breakpoint:959,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]});return e.jsxs(N,{component:H,sx:{textAlign:"center",py:{xs:10,md:15}},children:[e.jsx(r.div,{variants:a().inDown,children:e.jsx(u,{variant:"overline",sx:{color:"text.disabled"},children:"Dream team"})}),e.jsx(r.div,{variants:a().inUp,children:e.jsx(u,{variant:"h2",sx:{my:3},children:"Great team is the key"})}),e.jsx(r.div,{variants:a().inUp,children:e.jsx(u,{sx:{mx:"auto",maxWidth:640,color:"text.secondary"},children:"Minimal will provide you support if you have any problems, our support team will reply within a day and we also have detailed documentation."})}),e.jsx(m,{sx:{position:"relative"},children:e.jsx(We,{filled:!0,shape:"rounded",onNext:t.onNext,onPrev:t.onPrev,leftButtonProps:{sx:{left:24,..._.length<5&&{display:"none"}}},rightButtonProps:{sx:{right:24,..._.length<5&&{display:"none"}}},children:e.jsx(He,{ref:t.carouselRef,...t.carouselSettings,children:_.map(s=>e.jsx(m,{component:r.div,variants:a().in,sx:{px:1.5,py:{xs:8,md:10}},children:e.jsx(Ge,{member:s})},s.id))})})}),e.jsx(G,{size:"large",color:"inherit",variant:"outlined",endIcon:e.jsx(k,{icon:"eva:arrow-ios-forward-fill",width:24}),sx:{mx:"auto"},children:"All Members"})]})}function Ge({member:t}){const{name:s,role:i,avatarUrl:o}=t;return e.jsxs(Oe,{children:[e.jsx(u,{variant:"subtitle1",sx:{mt:2.5,mb:.5},children:s}),e.jsx(u,{variant:"body2",sx:{mb:2.5,color:"text.secondary"},children:i}),e.jsx(m,{sx:{px:1},children:e.jsx(P,{alt:s,src:o,ratio:"1/1",sx:{borderRadius:2}})}),e.jsx(j,{direction:"row",alignItems:"center",justifyContent:"center",sx:{p:2},children:xe.map(n=>e.jsx(he,{sx:{color:n.color,"&:hover":{bgcolor:W(n.color,.08)}},children:e.jsx(k,{icon:n.icon})},n.name))})]},s)}function qe(){const t=$(),s=e.jsx(P,{src:"/assets/images/about/vision.jpg",alt:"about-vision",overlay:W(t.palette.grey[900],.48)}),i=e.jsx(j,{direction:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",sx:{width:1,zIndex:9,bottom:0,opacity:.48,position:"absolute",py:{xs:1.5,md:2.5}},children:["ibm","lya","spotify","netflix","hbo","amazon"].map(o=>e.jsx(m,{component:r.img,variants:a().in,alt:o,src:`/assets/icons/brands/ic_brand_${o}.svg`,sx:{m:{xs:1.5,md:2.5},height:{xs:20,md:32}}},o))});return e.jsx(m,{sx:{pb:10,position:"relative",bgcolor:"background.neutral","&:before":{top:0,left:0,width:1,content:"''",position:"absolute",height:{xs:80,md:120},bgcolor:"background.default"}},children:e.jsxs(N,{component:H,children:[e.jsxs(m,{sx:{mb:10,borderRadius:2,display:"flex",overflow:"hidden",position:"relative",alignItems:"center",justifyContent:"center"},children:[s,i,e.jsx(Le,{sx:{position:"absolute",zIndex:9},children:e.jsx(k,{icon:"solar:play-broken",width:24})})]}),e.jsx(r.div,{variants:a().inUp,children:e.jsx(u,{variant:"h3",sx:{textAlign:"center",maxWidth:800,mx:"auto"},children:"Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada."})})]})})}function Ke(t){return pe("MuiMasonry",t)}ge("MuiMasonry",["root"]);const Je=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],f=t=>Number(t.replace("px","")),Qe={flexBasis:"100%",width:0,margin:0,padding:0},Xe=t=>{const{classes:s}=t;return Ce({root:["root"]},Ke,s)},Ye=({ownerState:t,theme:s})=>{let i={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const o={};if(t.isSSR){const c={},l=f(s.spacing(t.defaultSpacing));for(let x=1;x<=t.defaultColumns;x+=1)c[`&:nth-of-type(${t.defaultColumns}n+${x%t.defaultColumns})`]={order:x};return o.height=t.defaultHeight,o.margin=-(l/2),o["& > *"]=C({},i["& > *"],c,{margin:l/2,width:`calc(${(100/t.defaultColumns).toFixed(2)}% - ${l}px)`}),C({},i,o)}const n=ee({values:t.spacing,breakpoints:s.breakpoints.values}),d=ke(s);i=z(i,E({theme:s},n,c=>{let l;if(typeof c=="string"&&!Number.isNaN(Number(c))||typeof c=="number"){const x=Number(c);l=V(d,x)}else l=c;return C({margin:`calc(0px - (${l} / 2))`,"& > *":{margin:`calc(${l} / 2)`}},t.maxColumnHeight&&{height:typeof l=="number"?Math.ceil(t.maxColumnHeight+f(l)):`calc(${t.maxColumnHeight}px + ${l})`})}));const h=ee({values:t.columns,breakpoints:s.breakpoints.values});return i=z(i,E({theme:s},h,c=>{const x=`${(100/Number(c)).toFixed(2)}%`,S=typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number"?V(d,Number(n)):"0px";return{"& > *":{width:`calc(${x} - ${S})`}}})),typeof n=="object"&&(i=z(i,E({theme:s},n,(c,l)=>{if(l){const x=Number(c),S=Object.keys(h).pop(),g=V(d,x);return{"& > *":{width:`calc(${`${(100/(typeof h=="object"?h[l]||h[S]:h)).toFixed(2)}%`} - ${g})`}}}return null}))),i},Ze=fe("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(t,s)=>[s.root]})(Ye),et=B.forwardRef(function(s,i){const o=ye({props:s,name:"MuiMasonry"}),{children:n,className:d,component:A="div",columns:h=4,spacing:M=1,defaultColumns:c,defaultHeight:l,defaultSpacing:x}=o,S=ve(o,Je),g=B.useRef(),[O,q]=B.useState(),K=!O&&l&&c!==void 0&&x!==void 0,[se,ne]=B.useState(K?c-1:0),J=C({},o,{spacing:M,columns:h,maxColumnHeight:O,defaultColumns:c,defaultHeight:l,defaultSpacing:x,isSSR:K}),ie=Xe(J),oe=v=>{if(!g.current||!v||v.length===0)return;const p=g.current,I=g.current.firstChild,Q=p.clientWidth,X=I.clientWidth;if(Q===0||X===0)return;const Y=window.getComputedStyle(I),le=f(Y.marginLeft),ce=f(Y.marginRight),L=Math.round(Q/(X+le+ce)),T=new Array(L).fill(0);let R=!1;p.childNodes.forEach(b=>{if(b.nodeType!==Node.ELEMENT_NODE||b.dataset.class==="line-break"||R)return;const U=window.getComputedStyle(b),de=f(U.marginTop),me=f(U.marginBottom),Z=f(U.height)?Math.ceil(f(U.height))+de+me:0;if(Z===0){R=!0;return}for(let w=0;w<b.childNodes.length;w+=1){const F=b.childNodes[w];if(F.tagName==="IMG"&&F.clientHeight===0){R=!0;break}}if(!R){const w=T.indexOf(Math.min(...T));T[w]+=Z;const F=w+1;b.style.order=F}}),R||Me.flushSync(()=>{q(Math.max(...T)),ne(L>0?L-1:0)})};je(()=>{if(typeof ResizeObserver>"u")return;let v;const p=new ResizeObserver(()=>{v=requestAnimationFrame(oe)});return g.current&&g.current.childNodes.forEach(I=>{p.observe(I)}),()=>{v&&window.cancelAnimationFrame(v),p&&p.disconnect()}},[h,M,n]);const re=be(i,g),ae=new Array(se).fill("").map((v,p)=>e.jsx("span",{"data-class":"line-break",style:C({},Qe,{order:p+1})},p));return e.jsxs(Ze,C({as:A,className:we(ie.root,d),ref:re,ownerState:J},S,{children:[n,ae]}))}),tt=et;function st(){const t=$(),s=te("up","md"),i=e.jsx(G,{color:"primary",endIcon:e.jsx(k,{icon:"eva:arrow-ios-forward-fill"}),children:"Read more testimonials"}),o=e.jsxs(m,{sx:{maxWidth:{md:360},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(r.div,{variants:a().inUp,children:e.jsx(u,{variant:"overline",sx:{color:"common.white",opacity:.48},children:"Testimonials"})}),e.jsx(r.div,{variants:a().inUp,children:e.jsxs(u,{variant:"h2",sx:{my:3,color:"common.white"},children:["Who love ",e.jsx("br",{}),"my work"]})}),e.jsx(r.div,{variants:a().inUp,children:e.jsx(u,{sx:{color:"common.white"},children:"Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say."})}),!s&&e.jsx(m,{component:r.div,variants:a().inUp,sx:{mt:3,display:"flex",justifyContent:"center"},children:i})]}),n=e.jsx(m,{sx:{py:{md:10},height:{md:1},...s&&{...Se.y}},children:e.jsx(tt,{spacing:3,columns:{xs:1,md:2},sx:{ml:0},children:Re.map(d=>e.jsx(r.div,{variants:a().inUp,children:e.jsx(nt,{testimonial:d})},d.name))})});return e.jsx(m,{sx:{...Ne({color:W(t.palette.grey[900],.9),imgUrl:"/assets/images/about/testimonials.jpg"}),overflow:"hidden",height:{md:840},py:{xs:10,md:0}},children:e.jsxs(N,{component:H,sx:{position:"relative",height:1},children:[e.jsxs(y,{container:!0,spacing:3,alignItems:"center",justifyContent:{xs:"center",md:"space-between"},sx:{height:1},children:[e.jsx(y,{xs:10,md:4,children:o}),e.jsx(y,{xs:12,md:7,lg:6,alignItems:"center",sx:{height:1},children:n})]}),s&&e.jsx(m,{component:r.div,variants:a().inUp,sx:{bottom:60,position:"absolute"},children:i})]})})}function nt({testimonial:t,sx:s,...i}){const o=$(),{name:n,ratingNumber:d,postedDate:A,content:h,avatarUrl:M}=t;return e.jsxs(j,{spacing:3,sx:{...Ae({color:o.palette.common.white,opacity:.08}),p:3,borderRadius:2,color:"common.white",...s},...i,children:[e.jsx(k,{icon:"mingcute:quote-left-fill",width:40,sx:{opacity:.48}}),e.jsx(u,{variant:"body2",children:h}),e.jsx(_e,{value:d,readOnly:!0,size:"small"}),e.jsxs(j,{direction:"row",children:[e.jsx(Ie,{alt:n,src:M,sx:{mr:2}}),e.jsx(Te,{primary:n,secondary:Ue(A),primaryTypographyProps:{typography:"subtitle2",mb:.5},secondaryTypographyProps:{typography:"caption",color:"inherit",sx:{opacity:.64}}})]})]})}function it(){return e.jsxs(e.Fragment,{children:[e.jsx(ze,{}),e.jsx(Ve,{}),e.jsx(qe,{}),e.jsx(De,{}),e.jsx(st,{})]})}function ft(){return e.jsxs(e.Fragment,{children:[e.jsx(Fe,{children:e.jsx("title",{children:" About us"})}),e.jsx(it,{})]})}export{ft as default};