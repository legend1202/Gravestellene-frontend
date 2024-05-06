import{j as e,G as C,S as i,A as ge,w as ye,b9 as be,d,T as m,B as w,r as v,J as ve,y as k,b as we,aZ as fe,D as B,e as Ce,p as S,L as R,bo as U,z as H,bm as Pe,R as T,aD as M,c as N,bn as ke,x as Ie,c7 as Se,bw as Re,ap as Te,bx as De,C as Le,H as qe}from"./index-_tg0Vjne.js";import{u as Fe}from"./use-params-JjcDWs5q.js";import"./index-R3sdzr18.js";import"./_baseToString-DU9o3e3j.js";import"./image-SDlH-Y9m.js";import{C as $e}from"./color-picker-6ZFrZzyT.js";import{b as ze}from"./product-d2cPzUcv.js";import{E as Be}from"./empty-content-y3p0Z0lQ.js";import{S as b}from"./Skeleton-DE5mqhd_.js";import{s as We,R as Oe}from"./sumBy-10YoiFhp.js";import{b as W,f as G}from"./format-number-x-XRdvJl.js";import{R as D}from"./Rating-L_4PWj4N.js";import{P as Ee,p as Ae}from"./Pagination-PHJHJt2N.js";import{c as He,d as Me,a as $}from"./index.esm-zORWVp2x.js";import{u as V,F as Q,C as Y}from"./form-provider-tifhRCot.js";import{R as z,L as _,o as Ne}from"./rhf-text-field-tOnCBQMz.js";import"./styles-GXLlqNmt.js";import{D as Ge}from"./DialogTitle-ZVVh3H6m.js";import{D as Ue,a as Ve}from"./DialogContent-1g-PAecc.js";import{F as Qe,f as Ye}from"./TextField-ZkEZfJO9.js";import{I as _e,P as Je}from"./product-details-carousel-dZBA4jmL.js";import{M as Ze}from"./markdown-jKfzBdon.js";import{C as Ke}from"./Card-SUD4YaWI.js";import"./styles-xjWQ6_Y0.js";import"./_baseIteratee-W96Arp6Y.js";import"./FirstPage-W0D_CAXq.js";import"./CircularProgress-JD4dZggQ.js";import"./use-light-box-1YwnlQoR.js";import"./carousel-arrow-index-g72R1Kc2.js";function Xe({...s}){return e.jsxs(C,{container:!0,spacing:8,...s,children:[e.jsx(C,{xs:12,md:6,lg:7,children:e.jsx(b,{sx:{paddingTop:"100%"}})}),e.jsx(C,{xs:12,md:6,lg:5,children:e.jsxs(i,{spacing:3,children:[e.jsx(b,{sx:{height:16,width:48}}),e.jsx(b,{sx:{height:16,width:80}}),e.jsx(b,{sx:{height:16,width:.5}}),e.jsx(b,{sx:{height:16,width:.75}}),e.jsx(b,{sx:{height:120}})]})}),e.jsx(C,{xs:12,children:e.jsx(i,{direction:"row",alignItems:"center",children:[...Array(3)].map((r,a)=>e.jsxs(i,{spacing:2,alignItems:"center",justifyContent:"center",sx:{width:1},children:[e.jsx(b,{variant:"circular",sx:{width:80,height:80}}),e.jsx(b,{sx:{height:16,width:160}}),e.jsx(b,{sx:{height:16,width:80}})]},a))})})]})}function er({review:s}){const{name:r,rating:a,comment:c,postedAt:x,avatarUrl:h,attachments:u,isPurchased:p}=s,l=e.jsxs(i,{spacing:2,alignItems:"center",direction:{xs:"row",md:"column"},sx:{width:{md:240},textAlign:{md:"center"}},children:[e.jsx(ge,{src:h,sx:{width:{xs:48,md:64},height:{xs:48,md:64}}}),e.jsx(ye,{primary:r,secondary:be(x),primaryTypographyProps:{noWrap:!0,typography:"subtitle2",mb:.5},secondaryTypographyProps:{noWrap:!0,typography:"caption",component:"span"}})]}),t=e.jsxs(i,{spacing:1,flexGrow:1,children:[e.jsx(D,{size:"small",value:a,precision:.1,readOnly:!0}),p&&e.jsxs(i,{direction:"row",alignItems:"center",sx:{color:"success.main",typography:"caption"},children:[e.jsx(d,{icon:"ic:round-verified",width:16,sx:{mr:.5}}),"Verified purchase"]}),e.jsx(m,{variant:"body2",children:c}),!!(u!=null&&u.length)&&e.jsx(i,{direction:"row",flexWrap:"wrap",spacing:1,sx:{pt:1},children:u.map(y=>e.jsx(w,{component:"img",alt:y,src:y,sx:{width:64,height:64,borderRadius:1.5}},y))}),e.jsxs(i,{direction:"row",spacing:2,sx:{pt:1.5},children:[e.jsxs(i,{direction:"row",alignItems:"center",sx:{typography:"caption"},children:[e.jsx(d,{icon:"solar:like-outline",width:16,sx:{mr:.5}}),"123"]}),e.jsxs(i,{direction:"row",alignItems:"center",sx:{typography:"caption"},children:[e.jsx(d,{icon:"solar:dislike-outline",width:16,sx:{mr:.5}}),"34"]})]})]});return e.jsxs(i,{spacing:2,direction:{xs:"column",md:"row"},sx:{mt:5,px:{xs:2.5,md:0}},children:[l,t]})}function rr({reviews:s}){return e.jsxs(e.Fragment,{children:[s.map(r=>e.jsx(er,{review:r},r.id)),e.jsx(Ee,{count:10,sx:{mx:"auto",[`& .${Ae.ul}`]:{my:5,mx:"auto",justifyContent:"center"}}})]})}function sr({onClose:s,...r}){var f;const a=He().shape({rating:Me().min(1,"Rating must be greater than or equal to 1"),review:$().required("Review is required"),name:$().required("Name is required"),email:$().required("Email is required").email("Email must be a valid email address")}),c={rating:0,review:"",name:"",email:""},x=V({resolver:Ne(a),defaultValues:c}),{reset:h,control:u,handleSubmit:p,formState:{errors:l,isSubmitting:t}}=x,y=p(async j=>{try{await new Promise(n=>setTimeout(n,500)),h(),s(),console.info("DATA",j)}catch(n){console.error(n)}}),I=v.useCallback(()=>{s(),h()},[s,h]);return e.jsx(ve,{onClose:s,...r,children:e.jsxs(Q,{methods:x,onSubmit:y,children:[e.jsx(Ge,{children:" Add Review "}),e.jsxs(Ue,{children:[e.jsxs(i,{direction:"row",flexWrap:"wrap",alignItems:"center",spacing:1.5,children:[e.jsx(m,{variant:"body2",children:"Your review about this product:"}),e.jsx(Y,{name:"rating",control:u,render:({field:j})=>e.jsx(D,{...j,size:"small",value:Number(j.value),onChange:(n,P)=>{j.onChange(P)}})})]}),!!l.rating&&e.jsxs(Qe,{error:!0,children:[" ",(f=l.rating)==null?void 0:f.message]}),e.jsx(z,{name:"review",label:"Review *",multiline:!0,rows:3,sx:{mt:3}}),e.jsx(z,{name:"name",label:"Name *",sx:{mt:3}}),e.jsx(z,{name:"email",label:"Email *",sx:{mt:3}})]}),e.jsxs(Ve,{children:[e.jsx(k,{color:"inherit",variant:"outlined",onClick:I,children:"Cancel"}),e.jsx(_,{type:"submit",variant:"contained",loading:t,children:"Post"})]})]})})}function ir({totalRatings:s,totalReviews:r,ratings:a,reviews:c}){const x=we(),h=We(a,t=>t.starCount),u=e.jsxs(i,{spacing:1,alignItems:"center",justifyContent:"center",children:[e.jsx(m,{variant:"subtitle2",children:"Average rating"}),e.jsxs(m,{variant:"h2",children:[s,"/5"]}),e.jsx(D,{readOnly:!0,value:s,precision:.1}),e.jsxs(m,{variant:"caption",sx:{color:"text.secondary"},children:["(",W(r)," reviews)"]})]}),p=e.jsx(i,{spacing:1.5,sx:{py:5,px:{xs:3,md:5},borderLeft:t=>({md:`dashed 1px ${t.palette.divider}`}),borderRight:t=>({md:`dashed 1px ${t.palette.divider}`})},children:a.slice(0).reverse().map(t=>e.jsxs(i,{direction:"row",alignItems:"center",children:[e.jsx(m,{variant:"subtitle2",component:"span",sx:{width:42},children:t.name}),e.jsx(fe,{color:"inherit",variant:"determinate",value:t.starCount/h*100,sx:{mx:2,flexGrow:1}}),e.jsx(m,{variant:"body2",component:"span",sx:{minWidth:48,color:"text.secondary"},children:W(t.reviewCount)})]},t.name))}),l=e.jsx(i,{alignItems:"center",justifyContent:"center",children:e.jsx(k,{size:"large",variant:"soft",color:"inherit",onClick:x.onTrue,startIcon:e.jsx(d,{icon:"solar:pen-bold"}),children:"Write your review"})});return e.jsxs(e.Fragment,{children:[e.jsxs(w,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{py:{xs:5,md:0}},children:[u,p,l]}),e.jsx(B,{sx:{borderStyle:"dashed"}}),e.jsx(rr,{reviews:c}),e.jsx(sr,{open:x.value,onClose:x.onFalse})]})}function tr({items:s,product:r,onAddCart:a,onGotoStep:c,disabledActions:x,...h}){const u=Ce(),{id:p,name:l,sizes:t,price:y,coverUrl:I,colors:f,newLabel:j,available:n,priceSale:P,saleLabel:L,totalRatings:J,totalReviews:Z,inventoryType:q,subDescription:K}=r,X=!!(s!=null&&s.length)&&s.map(o=>o.id).includes(p),ee=!!(s!=null&&s.length)&&s.filter(o=>o.id===p).map(o=>o.quantity)[0]>=n,O={id:p,name:l,coverUrl:I,available:n,price:y,colors:f[0],size:t[4],quantity:n<1?0:1},E=V({defaultValues:O}),{reset:re,watch:se,control:ie,setValue:A,handleSubmit:te}=E,g=se();v.useEffect(()=>{r&&re(O)},[r]);const ne=te(async o=>{try{X||a==null||a({...o,colors:[g.colors],subTotal:o.price*o.quantity}),c==null||c(0),u.push(S.product.checkout)}catch(F){console.error(F)}}),ae=v.useCallback(()=>{try{a==null||a({...g,colors:[g.colors],subTotal:g.price*g.quantity})}catch(o){console.error(o)}},[a,g]),oe=e.jsxs(w,{sx:{typography:"h5"},children:[P&&e.jsx(w,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through",mr:.5},children:G(P)}),G(y)]}),le=e.jsxs(i,{direction:"row",spacing:3,justifyContent:"center",children:[e.jsxs(R,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(d,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Compare"]}),e.jsxs(R,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(d,{icon:"solar:heart-bold",width:16,sx:{mr:1}}),"Favorite"]}),e.jsxs(R,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(d,{icon:"solar:share-bold",width:16,sx:{mr:1}}),"Share"]})]}),ce=e.jsxs(i,{direction:"row",children:[e.jsx(m,{variant:"subtitle2",sx:{flexGrow:1},children:"Color"}),e.jsx(Y,{name:"colors",control:ie,render:({field:o})=>e.jsx($e,{colors:f,selected:o.value,onSelectColor:F=>o.onChange(F),limit:4})})]}),de=e.jsxs(i,{direction:"row",children:[e.jsx(m,{variant:"subtitle2",sx:{flexGrow:1},children:"Size"}),e.jsx(Oe,{name:"size",size:"small",helperText:e.jsx(R,{underline:"always",color:"textPrimary",children:"Size Chart"}),sx:{maxWidth:88,[`& .${Ye.root}`]:{mx:0,mt:1,textAlign:"right"}},children:t.map(o=>e.jsx(U,{value:o,children:o},o))})]}),xe=e.jsxs(i,{direction:"row",children:[e.jsx(m,{variant:"subtitle2",sx:{flexGrow:1},children:"Quantity"}),e.jsxs(i,{spacing:1,children:[e.jsx(_e,{name:"quantity",quantity:g.quantity,disabledDecrease:g.quantity<=1,disabledIncrease:g.quantity>=n,onIncrease:()=>A("quantity",g.quantity+1),onDecrease:()=>A("quantity",g.quantity-1)}),e.jsxs(m,{variant:"caption",component:"div",sx:{textAlign:"right"},children:["Available: ",n]})]})]}),he=e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(k,{fullWidth:!0,disabled:ee||x,size:"large",color:"warning",variant:"contained",startIcon:e.jsx(d,{icon:"solar:cart-plus-bold",width:24}),onClick:ae,sx:{whiteSpace:"nowrap"},children:"Add to Cart"}),e.jsx(k,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:x,children:"Buy Now"})]}),me=e.jsx(m,{variant:"body2",sx:{color:"text.secondary"},children:K}),ue=e.jsxs(i,{direction:"row",alignItems:"center",sx:{color:"text.disabled",typography:"body2"},children:[e.jsx(D,{size:"small",value:J,precision:.1,readOnly:!0,sx:{mr:1}}),`(${W(Z)} reviews)`]}),pe=(j.enabled||L.enabled)&&e.jsxs(i,{direction:"row",alignItems:"center",spacing:1,children:[j.enabled&&e.jsx(H,{color:"info",children:j.content}),L.enabled&&e.jsx(H,{color:"error",children:L.content})]}),je=e.jsx(w,{component:"span",sx:{typography:"overline",color:q==="out of stock"&&"error.main"||q==="low stock"&&"warning.main"||"success.main"},children:q});return e.jsx(Q,{methods:E,onSubmit:ne,children:e.jsxs(i,{spacing:3,sx:{pt:3},...h,children:[e.jsxs(i,{spacing:2,alignItems:"flex-start",children:[pe,je,e.jsx(m,{variant:"h5",children:l}),ue,oe,me]}),e.jsx(B,{sx:{borderStyle:"dashed"}}),ce,de,xe,e.jsx(B,{sx:{borderStyle:"dashed"}}),he,le]})})}function nr({publish:s,backLink:r,editLink:a,liveLink:c,publishOptions:x,onChangePublish:h,sx:u,...p}){const l=Pe();return e.jsxs(e.Fragment,{children:[e.jsxs(i,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...u},...p,children:[e.jsx(k,{component:T,href:r,startIcon:e.jsx(d,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(w,{sx:{flexGrow:1}}),s==="published"&&e.jsx(M,{title:"Go Live",children:e.jsx(N,{component:T,href:c,children:e.jsx(d,{icon:"eva:external-link-fill"})})}),e.jsx(M,{title:"Edit",children:e.jsx(N,{component:T,href:a,children:e.jsx(d,{icon:"solar:pen-bold"})})}),e.jsx(_,{color:"inherit",variant:"contained",loading:!s,loadingIndicator:"Loading…",endIcon:e.jsx(d,{icon:"eva:arrow-ios-downward-fill"}),onClick:l.onOpen,sx:{textTransform:"capitalize"},children:s})]}),e.jsx(ke,{open:l.open,onClose:l.onClose,arrow:"top-right",sx:{width:140},children:x.map(t=>e.jsxs(U,{selected:t.value===s,onClick:()=>{l.onClose(),h(t.value)},children:[t.value==="published"&&e.jsx(d,{icon:"eva:cloud-upload-fill"}),t.value==="draft"&&e.jsx(d,{icon:"solar:file-text-bold"}),t.label]},t.value))})]})}function ar({description:s}){return e.jsx(Ze,{children:s,sx:{p:3,"& p, li, ol":{typography:"body2"},"& ol":{p:0,display:{md:"flex"},listStyleType:"none","& li":{"&:first-of-type":{minWidth:240,mb:{xs:.5,md:0}}}}}})}const or=[{title:"100% Original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 Day Replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year Warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function lr({id:s}){const{product:r,productLoading:a,productError:c}=ze(s),x=Ie(),[h,u]=v.useState("description"),[p,l]=v.useState("");v.useEffect(()=>{r&&l(r==null?void 0:r.publish)},[r]);const t=v.useCallback(n=>{l(n)},[]),y=v.useCallback((n,P)=>{u(P)},[]),I=e.jsx(Xe,{}),f=e.jsx(Be,{filled:!0,title:`${c==null?void 0:c.message}`,action:e.jsx(k,{component:T,href:S.dashboard.product.root,startIcon:e.jsx(d,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:10}}),j=r&&e.jsxs(e.Fragment,{children:[e.jsx(nr,{backLink:S.dashboard.product.root,editLink:S.dashboard.product.edit(`${r==null?void 0:r.id}`),liveLink:S.product.details(`${r==null?void 0:r.id}`),publish:p||"",onChangePublish:t,publishOptions:Se}),e.jsxs(C,{container:!0,spacing:{xs:3,md:5,lg:8},children:[e.jsx(C,{xs:12,md:6,lg:7,children:e.jsx(Je,{product:r})}),e.jsx(C,{xs:12,md:6,lg:5,children:e.jsx(tr,{disabledActions:!0,product:r})})]}),e.jsx(w,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:or.map(n=>e.jsxs(w,{sx:{textAlign:"center",px:5},children:[e.jsx(d,{icon:n.icon,width:32,sx:{color:"primary.main"}}),e.jsx(m,{variant:"subtitle1",sx:{mb:1,mt:2},children:n.title}),e.jsx(m,{variant:"body2",sx:{color:"text.secondary"},children:n.description})]},n.title))}),e.jsxs(Ke,{children:[e.jsx(Re,{value:h,onChange:y,sx:{px:3,boxShadow:n=>`inset 0 -2px 0 0 ${Te(n.palette.grey[500],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:`Reviews (${r.reviews.length})`}].map(n=>e.jsx(De,{value:n.value,label:n.label},n.value))}),h==="description"&&e.jsx(ar,{description:r==null?void 0:r.description}),h==="reviews"&&e.jsx(ir,{ratings:r.ratings,reviews:r.reviews,totalRatings:r.totalRatings,totalReviews:r.totalReviews})]})]});return e.jsxs(Le,{maxWidth:x.themeStretch?!1:"lg",children:[a&&I,c&&f,r&&j]})}function Or(){const s=Fe(),{id:r}=s;return e.jsxs(e.Fragment,{children:[e.jsx(qe,{children:e.jsx("title",{children:" Dashboard: Product Details"})}),e.jsx(lr,{id:`${r}`})]})}export{Or as default};
