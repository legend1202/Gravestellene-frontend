import{j as e,G as o,S as t,e as W,r as g,p as q,k as U,T as a,D as v,B as j,L as l,d,h as V,C as H}from"./index-uKP6CWMZ.js";import{a as _}from"./graveyard-mwfkI-yq.js";import{S as r}from"./Skeleton-u4DLitaA.js";import{u as $,F as J}from"./form-provider-XaOssykM.js";import"./image-J6RLhyGE.js";import"./mui-one-time-password-input.es-BcSk2K9t.js";import"./styles-Iq_cUUs_.js";import{R as K}from"./Rating-SEA_uN6F.js";import{G as Q}from"./graveyard-details-carousel-rZUWsgAg.js";import{M as X}from"./markdown-QUNKGYVD.js";import{C as Z}from"./Card-ZPFmK4Qe.js";function ee({...i}){return e.jsxs(o,{container:!0,spacing:8,...i,children:[e.jsx(o,{xs:12,md:6,lg:7,children:e.jsx(r,{sx:{paddingTop:"100%"}})}),e.jsx(o,{xs:12,md:6,lg:5,children:e.jsxs(t,{spacing:3,children:[e.jsx(r,{sx:{height:16,width:48}}),e.jsx(r,{sx:{height:16,width:80}}),e.jsx(r,{sx:{height:16,width:.5}}),e.jsx(r,{sx:{height:16,width:.75}}),e.jsx(r,{sx:{height:120}})]})}),e.jsx(o,{xs:12,children:e.jsx(t,{direction:"row",alignItems:"center",children:[...Array(3)].map((s,n)=>e.jsxs(t,{spacing:2,alignItems:"center",justifyContent:"center",sx:{width:1},children:[e.jsx(r,{variant:"circular",sx:{width:80,height:80}}),e.jsx(r,{sx:{height:16,width:160}}),e.jsx(r,{sx:{height:16,width:80}})]},n))})})]})}function se({items:i,product:s,onAddCart:n,onGotoStep:c,disabledActions:m,...p}){const u=W(),{id:h,name:k,sizes:I,price:S,coverUrl:T,colors:C,newLabel:y,available:f,saleLabel:D}=s,F=!!(i!=null&&i.length)&&i.map(x=>x.id).includes(h),b={id:h,name:k,coverUrl:T,available:f,price:S,colors:C[0],size:I[4],quantity:f<1?0:1},w=$({defaultValues:b}),{reset:G,watch:L,handleSubmit:O}=w,M=L();g.useEffect(()=>{s&&G(b)},[s]);const P=O(async x=>{try{F||n==null||n({...x,colors:[M.colors],subTotal:x.price*x.quantity}),c==null||c(0),u.push(q.product.checkout)}catch(B){console.error(B)}}),N=e.jsx(j,{sx:{typography:"h5"},children:"Contact me!"}),A=e.jsxs(t,{direction:"row",spacing:3,justifyContent:"center",children:[e.jsxs(l,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(d,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Facebook"]}),e.jsxs(l,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(d,{icon:"solar:heart-bold",width:16,sx:{mr:1}}),"Twitter"]}),e.jsxs(l,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(d,{icon:"solar:share-bold",width:16,sx:{mr:1}}),"Instagram"]})]}),E=e.jsxs(e.Fragment,{children:[e.jsx(j,{sx:{typography:"h5"},children:"Find More!"}),e.jsx(a,{variant:"body2",sx:{color:"text.secondary"},children:e.jsxs(l,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(d,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Map - You can see Google Map!"]})}),e.jsx(a,{variant:"body2",sx:{color:"text.secondary"},children:e.jsxs(l,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(d,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"News - You can see the News!"]})}),e.jsx(a,{variant:"body2",sx:{color:"text.secondary"},children:e.jsxs(l,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(d,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Forecast - You can see the weekly forecast!"]})})]}),R=e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"body2",sx:{color:"text.secondary"},children:"Phone number: +1 234 5678 9012"}),e.jsx(a,{variant:"body2",sx:{color:"text.secondary"},children:"E-mail: sorokin@mail.co"}),e.jsx(a,{variant:"body2",sx:{color:"text.secondary"},children:"Address: Artists' tombs in an 1808 burial ground"})]}),Y=e.jsxs(t,{direction:"row",alignItems:"center",sx:{color:"text.disabled",typography:"body2"},children:[e.jsx(K,{size:"small",value:5,precision:.1,readOnly:!0,sx:{mr:1}}),"Oslo, Norway"]}),z=(y.enabled||D.enabled)&&e.jsx(t,{direction:"row",alignItems:"center",spacing:1,children:y.enabled&&e.jsx(U,{color:"info",children:y.content})});return e.jsx(J,{methods:w,onSubmit:P,children:e.jsxs(t,{spacing:3,sx:{pt:3},...p,children:[e.jsxs(t,{spacing:2,alignItems:"flex-start",children:[z,e.jsx(a,{variant:"h5",children:"Graveyard Name"}),Y,N,R]}),e.jsx(v,{sx:{borderStyle:"dashed"}}),E,e.jsx(v,{sx:{borderStyle:"dashed"}}),A]})})}function re({description:i}){const s=`
  <h6>The Cemetery of Our Saviour</h6>
  
  
  <br/>
  <br/>
  
  <h6>About US</h6>
  <br/>
  <ul>
    <li><p>The Cemetery of Our Saviour is a cemetery in Oslo, Norway, located north of Hammersborg in Gamle Aker district.</p></li>
    <li><p>It is located adjacent to the older Old Aker Cemetery and was created in 1808 as a result of the great famine and cholera epidemic of the Napoleonic Wars.</p></li>
    <li><p>Its grounds were extended in 1911</p></li>
  </ul>
  
  <br/>
  <br/>
  
  <h6>Benefits</h6>
  <br/>
  <ul>
    <li>
      <p>Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort</p>
      and durability.
    </li>
    <li>
      <p>Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushio</p>
      ning underfoot.
    </li>
    <li><p>The foam midsole feels springy and soft.</p></li>
    <li><p>The rubber outsole adds traction and durability.</p></li>
  </ul>
  
  <br/>
  <br/>
  
  <h6>Delivery and Returns</h6>
  <br/>
  <p>Your order of $200 or more gets free standard delivery.</p>
  <br/>
`;return e.jsx(X,{children:s,sx:{p:3,"& p, li, ol":{typography:"body2"},"& ol":{p:0,display:{md:"flex"},listStyleType:"none","& li":{"&:first-of-type":{minWidth:240,mb:{xs:.5,md:0}}}}}})}function pe({id:i}){const{product:s,productLoading:n}=_(),c=V(),[m,p]=g.useState("");g.useEffect(()=>{s&&(p(s==null?void 0:s.publish),m&&console.log("==="))},[s,m]);const u=e.jsx(ee,{}),h=s&&e.jsxs(e.Fragment,{children:[e.jsxs(o,{container:!0,spacing:{xs:3,md:5,lg:8},children:[e.jsx(o,{xs:12,md:6,lg:7,children:e.jsx(Q,{product:s})}),e.jsx(o,{xs:12,md:6,lg:5,children:e.jsx(se,{disabledActions:!0,product:s})})]}),e.jsx(j,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:2}}),e.jsx(Z,{children:e.jsx(re,{description:s==null?void 0:s.description})})]});return e.jsxs(H,{maxWidth:c.themeStretch?!1:"lg",children:[n&&u,s&&h]})}export{pe as G};
