import{j as e,S as r,s as ce,q as de,b3 as xe,g,T as a,B as b,c as me,dB as ue,b as D,d as N,o as he,r as k,a4 as pe,F as O,a0 as H,a2 as je,e as T,E as I,h as ye,a as ge,aR as ve,a7 as z,i as be,p as we,L as f,dC as fe,O as Ie,z as $}from"./index-zFfPxWlY.js";import{s as Ce}from"./sumBy-UC1t22Vy.js";import{b as F,f as E}from"./format-number-76EDHf4S.js";import{R as C}from"./Rating-4Zm6IZ1V.js";import{P as Re,p as Se}from"./Pagination--iJ2_o3G.js";import{D as qe}from"./DialogTitle-3uReqiqs.js";import{D as Pe}from"./DialogContent-DOQSYuAM.js";import{D as De}from"./DialogActions-pydsUUwr.js";import{C as Te}from"./color-picker-4LEg7MhU.js";import{R as ke}from"./rhf-select-ElkriFWx.js";import{I as ze}from"./incrementer-button-tv97_E7i.js";import{M as Fe}from"./markdown-dJQS-jdR.js";function Le({review:s}){const{name:o,rating:i,comment:m,postedAt:l,avatarUrl:u,attachments:d,isPurchased:h}=s,p=e.jsxs(r,{spacing:2,alignItems:"center",direction:{xs:"row",md:"column"},sx:{width:{md:240},textAlign:{md:"center"}},children:[e.jsx(ce,{src:u,sx:{width:{xs:48,md:64},height:{xs:48,md:64}}}),e.jsx(de,{primary:o,secondary:xe(l),primaryTypographyProps:{noWrap:!0,typography:"subtitle2",mb:.5},secondaryTypographyProps:{noWrap:!0,typography:"caption",component:"span"}})]}),t=e.jsxs(r,{spacing:1,flexGrow:1,children:[e.jsx(C,{size:"small",value:i,precision:.1,readOnly:!0}),h&&e.jsxs(r,{direction:"row",alignItems:"center",sx:{color:"success.main",typography:"caption"},children:[e.jsx(g,{icon:"ic:round-verified",width:16,sx:{mr:.5}}),"Verified purchase"]}),e.jsx(a,{variant:"body2",children:m}),!!(d!=null&&d.length)&&e.jsx(r,{direction:"row",flexWrap:"wrap",spacing:1,sx:{pt:1},children:d.map(y=>e.jsx(b,{component:"img",alt:y,src:y,sx:{width:64,height:64,borderRadius:1.5}},y))}),e.jsxs(r,{direction:"row",spacing:2,sx:{pt:1.5},children:[e.jsxs(r,{direction:"row",alignItems:"center",sx:{typography:"caption"},children:[e.jsx(g,{icon:"solar:like-outline",width:16,sx:{mr:.5}}),"123"]}),e.jsxs(r,{direction:"row",alignItems:"center",sx:{typography:"caption"},children:[e.jsx(g,{icon:"solar:dislike-outline",width:16,sx:{mr:.5}}),"34"]})]})]});return e.jsxs(r,{spacing:2,direction:{xs:"column",md:"row"},sx:{mt:5,px:{xs:2.5,md:0}},children:[p,t]})}function Be({reviews:s}){return e.jsxs(e.Fragment,{children:[s.map(o=>e.jsx(Le,{review:o},o.id)),e.jsx(Re,{count:10,sx:{mx:"auto",[`& .${Se.ul}`]:{my:5,mx:"auto",justifyContent:"center"}}})]})}function We({onClose:s,...o}){var v;const i=me().shape({rating:ue().min(1,"Rating must be greater than or equal to 1"),review:D().required("Review is required"),name:D().required("Name is required"),email:D().required("Email is required").email("Email must be a valid email address")}),m={rating:0,review:"",name:"",email:""},l=N({resolver:he(i),defaultValues:m}),{reset:u,control:d,handleSubmit:h,formState:{errors:p,isSubmitting:t}}=l,y=h(async j=>{try{await new Promise(x=>setTimeout(x,500)),u(),s(),console.info("DATA",j)}catch(x){console.error(x)}}),R=k.useCallback(()=>{s(),u()},[s,u]);return e.jsx(pe,{onClose:s,...o,children:e.jsxs(O,{methods:l,onSubmit:y,children:[e.jsx(qe,{children:" Add Review "}),e.jsxs(Pe,{children:[e.jsxs(r,{direction:"row",flexWrap:"wrap",alignItems:"center",spacing:1.5,children:[e.jsx(a,{variant:"body2",children:"Your review about this product:"}),e.jsx(H,{name:"rating",control:d,render:({field:j})=>e.jsx(C,{...j,size:"small",value:Number(j.value),onChange:(x,w)=>{j.onChange(w)}})})]}),!!p.rating&&e.jsxs(je,{error:!0,children:[" ",(v=p.rating)==null?void 0:v.message]}),e.jsx(T,{name:"review",label:"Review *",multiline:!0,rows:3,sx:{mt:3}}),e.jsx(T,{name:"name",label:"Name *",sx:{mt:3}}),e.jsx(T,{name:"email",label:"Email *",sx:{mt:3}})]}),e.jsxs(De,{children:[e.jsx(I,{color:"inherit",variant:"outlined",onClick:R,children:"Cancel"}),e.jsx(ye,{type:"submit",variant:"contained",loading:t,children:"Post"})]})]})})}function Je({totalRatings:s,totalReviews:o,ratings:i,reviews:m}){const l=ge(),u=Ce(i,t=>t.starCount),d=e.jsxs(r,{spacing:1,alignItems:"center",justifyContent:"center",children:[e.jsx(a,{variant:"subtitle2",children:"Average rating"}),e.jsxs(a,{variant:"h2",children:[s,"/5"]}),e.jsx(C,{readOnly:!0,value:s,precision:.1}),e.jsxs(a,{variant:"caption",sx:{color:"text.secondary"},children:["(",F(o)," reviews)"]})]}),h=e.jsx(r,{spacing:1.5,sx:{py:5,px:{xs:3,md:5},borderLeft:t=>({md:`dashed 1px ${t.palette.divider}`}),borderRight:t=>({md:`dashed 1px ${t.palette.divider}`})},children:i.slice(0).reverse().map(t=>e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(a,{variant:"subtitle2",component:"span",sx:{width:42},children:t.name}),e.jsx(ve,{color:"inherit",variant:"determinate",value:t.starCount/u*100,sx:{mx:2,flexGrow:1}}),e.jsx(a,{variant:"body2",component:"span",sx:{minWidth:48,color:"text.secondary"},children:F(t.reviewCount)})]},t.name))}),p=e.jsx(r,{alignItems:"center",justifyContent:"center",children:e.jsx(I,{size:"large",variant:"soft",color:"inherit",onClick:l.onTrue,startIcon:e.jsx(g,{icon:"solar:pen-bold"}),children:"Write your review"})});return e.jsxs(e.Fragment,{children:[e.jsxs(b,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{py:{xs:5,md:0}},children:[d,h,p]}),e.jsx(z,{sx:{borderStyle:"dashed"}}),e.jsx(Be,{reviews:m}),e.jsx(We,{open:l.value,onClose:l.onFalse})]})}function Ke({items:s,product:o,onAddCart:i,onGotoStep:m,disabledActions:l,...u}){const d=be(),{id:h,name:p,sizes:t,price:y,coverUrl:R,colors:v,newLabel:j,available:x,priceSale:w,saleLabel:S,totalRatings:M,totalReviews:V,inventoryType:q,subDescription:A}=o,Q=!!(s!=null&&s.length)&&s.map(n=>n.id).includes(h),U=!!(s!=null&&s.length)&&s.filter(n=>n.id===h).map(n=>n.quantity)[0]>=x,L={id:h,name:p,coverUrl:R,available:x,price:y,colors:v[0],size:t[4],quantity:x<1?0:1},B=N({defaultValues:L}),{reset:G,watch:Y,control:J,setValue:W,handleSubmit:K}=B,c=Y();k.useEffect(()=>{o&&G(L)},[o]);const X=K(async n=>{try{Q||i==null||i({...n,colors:[c.colors],subTotal:n.price*n.quantity}),m==null||m(0),d.push(we.product.checkout)}catch(P){console.error(P)}}),Z=k.useCallback(()=>{try{i==null||i({...c,colors:[c.colors],subTotal:c.price*c.quantity})}catch(n){console.error(n)}},[i,c]),_=e.jsxs(b,{sx:{typography:"h5"},children:[w&&e.jsx(b,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through",mr:.5},children:E(w)}),E(y)]}),ee=e.jsxs(r,{direction:"row",spacing:3,justifyContent:"center",children:[e.jsxs(f,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(g,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Compare"]}),e.jsxs(f,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(g,{icon:"solar:heart-bold",width:16,sx:{mr:1}}),"Favorite"]}),e.jsxs(f,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(g,{icon:"solar:share-bold",width:16,sx:{mr:1}}),"Share"]})]}),re=e.jsxs(r,{direction:"row",children:[e.jsx(a,{variant:"subtitle2",sx:{flexGrow:1},children:"Color"}),e.jsx(H,{name:"colors",control:J,render:({field:n})=>e.jsx(Te,{colors:v,selected:n.value,onSelectColor:P=>n.onChange(P),limit:4})})]}),se=e.jsxs(r,{direction:"row",children:[e.jsx(a,{variant:"subtitle2",sx:{flexGrow:1},children:"Size"}),e.jsx(ke,{name:"size",size:"small",helperText:e.jsx(f,{underline:"always",color:"textPrimary",children:"Size Chart"}),sx:{maxWidth:88,[`& .${fe.root}`]:{mx:0,mt:1,textAlign:"right"}},children:t.map(n=>e.jsx(Ie,{value:n,children:n},n))})]}),ne=e.jsxs(r,{direction:"row",children:[e.jsx(a,{variant:"subtitle2",sx:{flexGrow:1},children:"Quantity"}),e.jsxs(r,{spacing:1,children:[e.jsx(ze,{name:"quantity",quantity:c.quantity,disabledDecrease:c.quantity<=1,disabledIncrease:c.quantity>=x,onIncrease:()=>W("quantity",c.quantity+1),onDecrease:()=>W("quantity",c.quantity-1)}),e.jsxs(a,{variant:"caption",component:"div",sx:{textAlign:"right"},children:["Available: ",x]})]})]}),te=e.jsxs(r,{direction:"row",spacing:2,children:[e.jsx(I,{fullWidth:!0,disabled:U||l,size:"large",color:"warning",variant:"contained",startIcon:e.jsx(g,{icon:"solar:cart-plus-bold",width:24}),onClick:Z,sx:{whiteSpace:"nowrap"},children:"Add to Cart"}),e.jsx(I,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:l,children:"Buy Now"})]}),ie=e.jsx(a,{variant:"body2",sx:{color:"text.secondary"},children:A}),ae=e.jsxs(r,{direction:"row",alignItems:"center",sx:{color:"text.disabled",typography:"body2"},children:[e.jsx(C,{size:"small",value:M,precision:.1,readOnly:!0,sx:{mr:1}}),`(${F(V)} reviews)`]}),oe=(j.enabled||S.enabled)&&e.jsxs(r,{direction:"row",alignItems:"center",spacing:1,children:[j.enabled&&e.jsx($,{color:"info",children:j.content}),S.enabled&&e.jsx($,{color:"error",children:S.content})]}),le=e.jsx(b,{component:"span",sx:{typography:"overline",color:q==="out of stock"&&"error.main"||q==="low stock"&&"warning.main"||"success.main"},children:q});return e.jsx(O,{methods:B,onSubmit:X,children:e.jsxs(r,{spacing:3,sx:{pt:3},...u,children:[e.jsxs(r,{spacing:2,alignItems:"flex-start",children:[oe,le,e.jsx(a,{variant:"h5",children:p}),ae,_,ie]}),e.jsx(z,{sx:{borderStyle:"dashed"}}),re,se,ne,e.jsx(z,{sx:{borderStyle:"dashed"}}),te,ee]})})}function Xe({description:s}){return e.jsx(Fe,{children:s,sx:{p:3,"& p, li, ol":{typography:"body2"},"& ol":{p:0,display:{md:"flex"},listStyleType:"none","& li":{"&:first-of-type":{minWidth:240,mb:{xs:.5,md:0}}}}}})}export{Ke as P,Xe as a,Je as b};