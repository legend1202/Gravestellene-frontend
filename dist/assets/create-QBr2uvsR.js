import{r as t,j as e,G as d,S as h,T as x,h as G,C as O,p as A,H}from"./index-GLB0-COv.js";import{C as N}from"./custom-breadcrumbs-y7vEq1Mg.js";import{c as T,a as n,b as D}from"./index.esm-bFz1mbUk.js";import{u as I,F as U}from"./form-provider-AdOD8xaK.js";import{o as E,R as b}from"./rhf-text-field-Uk3ngPTL.js";import{c as M,u as V}from"./graveyard-2Y_Ls1OL.js";import{R as $}from"./rhf-upload--PlcAzAv.js";import"./mui-one-time-password-input.es-zG04MA5Y.js";import{R as B}from"./rhf-editor-oazwmMjy.js";import{C as z}from"./Card-oKMzPwWo.js";import{C as W}from"./CardHeader-vBRWBTXb.js";import{F as Y}from"./FormControlLabel-NMuNkhR8.js";import{S as J}from"./Switch-MCTQfwpv.js";import{L as K}from"./LoadingButton-VzOr3nA8.js";import"./TextField-zEGoGrFA.js";import"./index-1u5g4BxH.js";import"./upload-281rM_Ee.js";import"./preview-multi-file-_oZf9tQz.js";import"./index-Kx7fbXlQ.js";import"./tslib.es6-ADzvKRL9.js";import"./format-number-shkRvLbp.js";import"./fade-VV5890gg.js";import"./transition-eqIn2NYL.js";import"./index-3sYfCsrU.js";import"./image-sa1WTJbO.js";import"./editor-EkMZumKM.js";import"./styles-RrkxVDFU.js";import"./SwitchBase-dYFpV_N7.js";import"./CircularProgress-gdFe3tcU.js";const Q=`
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
`;function X({currentProduct:i}){const[p,g]=t.useState([]),j=T().shape({name:n().required("Name is required"),location:n().required("Location is required"),picture:D().min(1,"Images is required"),content:n().required("Content is required"),newsLink:n().required("News is required"),forecastLink:n().required("Forecast is required")}),c=t.useMemo(()=>({name:i?"The Cemetery of Our Saviour":"",location:i?"Hammersborg in Gamle Aker district":"",picture:(i==null?void 0:i.picture)||[],content:i?Q:"",newsLink:(i==null?void 0:i.newsLink)||"",forecastLink:(i==null?void 0:i.forecastLink)||""}),[i]),u=I({resolver:E(j),defaultValues:c}),{reset:f,watch:v,setValue:s,handleSubmit:C,formState:{isSubmitting:S}}=u,o=v();t.useEffect(()=>{i&&f(c)},[i,c,f]);const y=C(async r=>{try{const a=M(r);console.log(a)}catch(a){console.error(a)}}),w=t.useCallback(r=>{const a=o.picture||[],l=r.map(m=>Object.assign(m,{preview:URL.createObjectURL(m)}));g([...p,...r]),s("picture",[...a,...l],{shouldValidate:!0})},[s,o.picture,p]),k=t.useCallback(r=>{var l;const a=o.picture&&((l=o.picture)==null?void 0:l.filter(m=>m!==r));s("picture",a)},[s,o.picture]),R=t.useCallback(()=>{s("picture",[])},[s]),F=async()=>{const r=await V(p);console.log(r),s("picture",r)},L=e.jsx(d,{xs:12,md:12,children:e.jsxs(z,{children:[e.jsx(W,{title:"Details"}),e.jsxs(h,{spacing:3,sx:{p:3},children:[e.jsx(b,{name:"name",label:"Service Name"}),e.jsx(b,{name:"price",label:"Price"}),e.jsxs(h,{spacing:1.5,children:[e.jsx(x,{variant:"subtitle2",children:"Content"}),e.jsx(B,{simple:!0,name:"content"})]}),e.jsxs(h,{spacing:1.5,children:[e.jsx(x,{variant:"subtitle2",children:"Pictures"}),e.jsx($,{multiple:!0,thumbnail:!0,name:"picture",maxSize:3145728,onDrop:w,onRemove:k,onRemoveAll:R,onUpload:F})]})]})]})}),q=e.jsxs(d,{xs:12,md:12,sx:{display:"flex",alignItems:"center"},children:[e.jsx(Y,{control:e.jsx(J,{defaultChecked:!0}),label:"",sx:{flexGrow:1,pl:3}}),e.jsx(K,{type:"submit",variant:"contained",size:"large",loading:S,children:i?"Save Changes":"Create Product"})]});return e.jsx(U,{methods:u,onSubmit:y,children:e.jsxs(d,{container:!0,spacing:3,children:[L,q]})})}function Z(){const i=G();return e.jsxs(O,{maxWidth:i.themeStretch?!1:"lg",children:[e.jsx(N,{heading:"Create My Service",links:[{name:"Service",href:A.fellesraad.root},{name:"New Service"}],sx:{mb:{xs:3,md:5}}}),e.jsx(X,{})]})}function Fe(){return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx("title",{children:" Graveyard: Create a new Graveyard"})}),e.jsx(Z,{})]})}export{Fe as default};
