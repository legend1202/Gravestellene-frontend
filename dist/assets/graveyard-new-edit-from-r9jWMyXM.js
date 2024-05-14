import{dv as M,r as o,j as e,G as h,S as f,T as w,B}from"./index-lMmDPpwH.js";import{c as $,a as d,b as V}from"./index.esm-V-50jqn-.js";import{u as z,F as W}from"./form-provider-f1RDglyc.js";import{o as Y,R as u}from"./rhf-text-field-caf8ax7a.js";import{c as _,u as J}from"./graveyard-dvzvJAPI.js";import{R as K}from"./rhf-upload-YlkGOuqR.js";import"./mui-one-time-password-input.es-I6hoYgDw.js";import{R as Q}from"./rhf-editor-JLELdUjr.js";import{A as X}from"./Alert-J0QsY6ma.js";import{C as k}from"./Card-i_M7QnNo.js";import{C}from"./CardHeader-K11AEWGQ.js";import{F as Z}from"./FormControlLabel-wfVEIqv2.js";import{S as P}from"./Switch-j-L7GRmq.js";import{L as ee}from"./LoadingButton-fI_uTZ9h.js";const se=`
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
`;function be({currentProduct:s}){const{enqueueSnackbar:S}=M(),[j,y]=o.useState(""),[r,x]=o.useState([]),R=$().shape({name:d().required("Name is required"),location:d().required("Location is required"),picture:V().min(1,"Images is required"),content:d().required("Content is required"),newsLink:d().required("News is required"),forecastLink:d().required("Forecast is required")}),b=o.useMemo(()=>({name:s?"The Cemetery of Our Saviour":"",location:s?"Hammersborg in Gamle Aker district":"",picture:(s==null?void 0:s.picture)||[],content:s?se:"",newsLink:(s==null?void 0:s.newsLink)||"",forecastLink:(s==null?void 0:s.forecastLink)||""}),[s]),v=z({resolver:Y(R),defaultValues:b}),{reset:g,watch:F,setValue:n,handleSubmit:L,formState:{isSubmitting:G}}=v,t=F();o.useEffect(()=>{s&&g(b)},[s,b,g]);const q=L(async l=>{var m;try{const a={...t,picture:r},i=await _(a);(m=i.searchResults)!=null&&m.success?(g(),S(s?"Update success!":"Create success!")):y(i==null?void 0:i.message)}catch(a){y(a==null?void 0:a.message),console.error(a)}}),A=o.useCallback(async l=>{const m=t.picture||[],a=l.map(p=>Object.assign(p,{preview:URL.createObjectURL(p)})),i=await J(l),c=[...r,...i];x([...c]),n("picture",[...m,...a],{shouldValidate:!0})},[n,t.picture,r]),U=o.useCallback(l=>{var a,i;const m=t.picture&&((a=t.picture)==null?void 0:a.filter(c=>c!==l));(i=t.picture)==null||i.forEach((c,p)=>{if(c===l){const H=r==null?void 0:r.filter((ae,I)=>p!==I);x(H)}}),n("picture",m)},[n,t.picture,r]),O=o.useCallback(()=>{n("picture",[]),x([])},[n]),T=async()=>{console.log("")},N=e.jsx(h,{xs:12,md:12,children:e.jsxs(k,{children:[e.jsx(C,{title:"Details"}),e.jsxs(f,{spacing:3,sx:{p:3},children:[e.jsx(u,{name:"name",label:"Graveyard Name"}),e.jsx(u,{name:"location",label:"Graveyard location"}),e.jsxs(f,{spacing:1.5,children:[e.jsx(w,{variant:"subtitle2",children:"Content"}),e.jsx(Q,{simple:!0,name:"content"})]}),e.jsxs(f,{spacing:1.5,children:[e.jsx(w,{variant:"subtitle2",children:"Pictures"}),e.jsx(K,{multiple:!0,thumbnail:!0,name:"picture",maxSize:13145728,onDrop:A,onRemove:U,onRemoveAll:O,onUpload:T})]})]})]})}),D=e.jsx(h,{xs:12,md:12,children:e.jsxs(k,{children:[e.jsx(C,{title:"Properties"}),e.jsx(f,{spacing:3,sx:{p:3},children:e.jsxs(B,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(1, 1fr)"},children:[e.jsx(u,{name:"newsLink",label:"News"}),e.jsx(u,{name:"forecastLink",label:"Forecast"})]})})]})}),E=e.jsxs(h,{xs:12,md:12,sx:{display:"flex",alignItems:"center"},children:[e.jsx(Z,{control:e.jsx(P,{defaultChecked:!0}),label:"",sx:{flexGrow:1,pl:3}}),e.jsx(ee,{type:"submit",variant:"contained",size:"large",loading:G,children:s?"Save Changes":"Create Product"})]});return e.jsx(W,{methods:v,onSubmit:q,children:e.jsxs(h,{container:!0,spacing:3,children:[!!j&&e.jsx(X,{severity:"error",sx:{mb:3},children:j}),N,D,E]})})}export{be as G};
