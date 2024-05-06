import{r as t,j as e,G as d,S as p,T as b,B as A}from"./index-_tg0Vjne.js";import{c as N,a as l,b as D}from"./index.esm-zORWVp2x.js";import{u as H,F as I}from"./form-provider-tifhRCot.js";import{o as U,R as c,L as E}from"./rhf-text-field-tOnCBQMz.js";import{c as B,u as $}from"./graveyard-LvUjv0FH.js";import{R as M,a as V}from"./rhf-editor-jcvAok2r.js";import"./styles-GXLlqNmt.js";import{C as g}from"./Card-SUD4YaWI.js";import{C as j}from"./CardHeader-hcBb590s.js";import{F as z}from"./FormControlLabel-Tt1qENhS.js";import{S as W}from"./Switch-wTiz88m9.js";const Y=`
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
`;function re({currentProduct:s}){console.log(" list edit",s);const[h,y]=t.useState([]),v=N().shape({name:l().required("Name is required"),location:l().required("Location is required"),picture:D().min(1,"Images is required"),content:l().required("Content is required"),newsLink:l().required("News is required"),forecastLink:l().required("Forecast is required")}),f=t.useMemo(()=>({name:s?"The Cemetery of Our Saviour":"",location:s?"Hammersborg in Gamle Aker district":"",picture:(s==null?void 0:s.picture)||[],content:s?Y:"",newsLink:(s==null?void 0:s.newsLink)||"",forecastLink:(s==null?void 0:s.forecastLink)||""}),[s]),u=H({resolver:U(v),defaultValues:f}),{reset:x,watch:w,setValue:i,handleSubmit:k,formState:{isSubmitting:C}}=u,o=w();t.useEffect(()=>{s&&x(f)},[s,f,x]);const S=k(async a=>{try{const r=B(a);console.log(r)}catch(r){console.error(r)}}),R=t.useCallback(a=>{const r=o.picture||[],n=a.map(m=>Object.assign(m,{preview:URL.createObjectURL(m)}));y([...h,...a]),i("picture",[...r,...n],{shouldValidate:!0})},[i,o.picture,h]),F=t.useCallback(a=>{var n;const r=o.picture&&((n=o.picture)==null?void 0:n.filter(m=>m!==a));i("picture",r)},[i,o.picture]),L=t.useCallback(()=>{i("picture",[])},[i]),G=async()=>{const a=await $(h);console.log(a),i("picture",a)},q=e.jsx(d,{xs:12,md:12,children:e.jsxs(g,{children:[e.jsx(j,{title:"Details"}),e.jsxs(p,{spacing:3,sx:{p:3},children:[e.jsx(c,{name:"name",label:"Graveyard Name"}),e.jsx(c,{name:"location",label:"Graveyard location"}),e.jsxs(p,{spacing:1.5,children:[e.jsx(b,{variant:"subtitle2",children:"Content"}),e.jsx(M,{simple:!0,name:"content"})]}),e.jsxs(p,{spacing:1.5,children:[e.jsx(b,{variant:"subtitle2",children:"Pictures"}),e.jsx(V,{multiple:!0,thumbnail:!0,name:"picture",maxSize:3145728,onDrop:R,onRemove:F,onRemoveAll:L,onUpload:G})]})]})]})}),O=e.jsx(d,{xs:12,md:12,children:e.jsxs(g,{children:[e.jsx(j,{title:"Properties"}),e.jsx(p,{spacing:3,sx:{p:3},children:e.jsxs(A,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(1, 1fr)"},children:[e.jsx(c,{name:"newsLink",label:"News"}),e.jsx(c,{name:"forecastLink",label:"Forecast"})]})})]})}),T=e.jsxs(d,{xs:12,md:12,sx:{display:"flex",alignItems:"center"},children:[e.jsx(z,{control:e.jsx(W,{defaultChecked:!0}),label:"",sx:{flexGrow:1,pl:3}}),e.jsx(E,{type:"submit",variant:"contained",size:"large",loading:C,children:s?"Save Changes":"Create Product"})]});return e.jsx(I,{methods:u,onSubmit:S,children:e.jsxs(d,{container:!0,spacing:3,children:[q,O,T]})})}export{re as G};
