import{r as t,j as e,G as d,S as h,T as x,x as G,C as O,p as A,H}from"./index-_tg0Vjne.js";import{C as N}from"./custom-breadcrumbs-KsOYWZLR.js";import{c as T,a as n,b as D}from"./index.esm-zORWVp2x.js";import{u as I,F as U}from"./form-provider-tifhRCot.js";import{o as E,R as b,L as M}from"./rhf-text-field-tOnCBQMz.js";import{c as V,u as $}from"./graveyard-LvUjv0FH.js";import{R as B,a as z}from"./rhf-editor-jcvAok2r.js";import"./styles-GXLlqNmt.js";import{C as W}from"./Card-SUD4YaWI.js";import{C as Y}from"./CardHeader-hcBb590s.js";import{F as J}from"./FormControlLabel-Tt1qENhS.js";import{S as K}from"./Switch-wTiz88m9.js";import"./CircularProgress-JD4dZggQ.js";import"./TextField-ZkEZfJO9.js";import"./index-R3sdzr18.js";import"./index-ntnlb33b.js";import"./format-number-x-XRdvJl.js";import"./fade-HpdRXKiE.js";import"./transition-Uc7vb3zK.js";import"./index-EEJIfaqx.js";import"./image-SDlH-Y9m.js";import"./SwitchBase-73LMEt7P.js";const Q=`
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
`;function X({currentProduct:i}){const[p,g]=t.useState([]),j=T().shape({name:n().required("Name is required"),location:n().required("Location is required"),picture:D().min(1,"Images is required"),content:n().required("Content is required"),newsLink:n().required("News is required"),forecastLink:n().required("Forecast is required")}),c=t.useMemo(()=>({name:i?"The Cemetery of Our Saviour":"",location:i?"Hammersborg in Gamle Aker district":"",picture:(i==null?void 0:i.picture)||[],content:i?Q:"",newsLink:(i==null?void 0:i.newsLink)||"",forecastLink:(i==null?void 0:i.forecastLink)||""}),[i]),u=I({resolver:E(j),defaultValues:c}),{reset:f,watch:v,setValue:a,handleSubmit:C,formState:{isSubmitting:S}}=u,o=v();t.useEffect(()=>{i&&f(c)},[i,c,f]);const y=C(async s=>{try{const r=V(s);console.log(r)}catch(r){console.error(r)}}),w=t.useCallback(s=>{const r=o.picture||[],l=s.map(m=>Object.assign(m,{preview:URL.createObjectURL(m)}));g([...p,...s]),a("picture",[...r,...l],{shouldValidate:!0})},[a,o.picture,p]),k=t.useCallback(s=>{var l;const r=o.picture&&((l=o.picture)==null?void 0:l.filter(m=>m!==s));a("picture",r)},[a,o.picture]),R=t.useCallback(()=>{a("picture",[])},[a]),F=async()=>{const s=await $(p);console.log(s),a("picture",s)},L=e.jsx(d,{xs:12,md:12,children:e.jsxs(W,{children:[e.jsx(Y,{title:"Details"}),e.jsxs(h,{spacing:3,sx:{p:3},children:[e.jsx(b,{name:"name",label:"Service Name"}),e.jsx(b,{name:"price",label:"Price"}),e.jsxs(h,{spacing:1.5,children:[e.jsx(x,{variant:"subtitle2",children:"Content"}),e.jsx(B,{simple:!0,name:"content"})]}),e.jsxs(h,{spacing:1.5,children:[e.jsx(x,{variant:"subtitle2",children:"Pictures"}),e.jsx(z,{multiple:!0,thumbnail:!0,name:"picture",maxSize:3145728,onDrop:w,onRemove:k,onRemoveAll:R,onUpload:F})]})]})]})}),q=e.jsxs(d,{xs:12,md:12,sx:{display:"flex",alignItems:"center"},children:[e.jsx(J,{control:e.jsx(K,{defaultChecked:!0}),label:"",sx:{flexGrow:1,pl:3}}),e.jsx(M,{type:"submit",variant:"contained",size:"large",loading:S,children:i?"Save Changes":"Create Product"})]});return e.jsx(U,{methods:u,onSubmit:y,children:e.jsxs(d,{container:!0,spacing:3,children:[L,q]})})}function Z(){const i=G();return e.jsxs(O,{maxWidth:i.themeStretch?!1:"lg",children:[e.jsx(N,{heading:"Create My Service",links:[{name:"Service",href:A.fellesraad.root},{name:"New Service"}],sx:{mb:{xs:3,md:5}}}),e.jsx(X,{})]})}function ve(){return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx("title",{children:" Graveyard: Create a new Graveyard"})}),e.jsx(Z,{})]})}export{ve as default};
