import{j as e,_ as c,S as r,r as h,cw as M,d as R,F as P,T as t,a8 as S,B as j,L as i,g as a}from"./index-6zkZJZ_0.js";import{S as n}from"./Skeleton-hlsj9s3X.js";import{R as z}from"./Rating-pY76avfd.js";import{M as N}from"./markdown-wHT6N3ya.js";function K({...o}){return e.jsxs(c,{container:!0,spacing:8,...o,children:[e.jsx(c,{xs:12,md:6,lg:7,children:e.jsx(n,{sx:{paddingTop:"100%"}})}),e.jsx(c,{xs:12,md:6,lg:5,children:e.jsxs(r,{spacing:3,children:[e.jsx(n,{sx:{height:16,width:48}}),e.jsx(n,{sx:{height:16,width:80}}),e.jsx(n,{sx:{height:16,width:.5}}),e.jsx(n,{sx:{height:16,width:.75}}),e.jsx(n,{sx:{height:120}})]})}),e.jsx(c,{xs:12,children:e.jsx(r,{direction:"row",alignItems:"center",children:[...Array(3)].map((d,m)=>e.jsxs(r,{spacing:2,alignItems:"center",justifyContent:"center",sx:{width:1},children:[e.jsx(n,{variant:"circular",sx:{width:80,height:80}}),e.jsx(n,{sx:{height:16,width:160}}),e.jsx(n,{sx:{height:16,width:80}})]},m))})})]})}function Q({items:o,graveyard:d,onAddCart:m,onGotoStep:O,disabledActions:V,...I}){const{id:y,fellesraadId:v,name:p,location:x,picture:k,content:F,newsLink:l,forecastLink:g}=d,[f,G]=h.useState(),{services:L,servicesLoading:u}=M(y||""),b={id:y,fellesraadId:v,name:p,location:x,picture:k,content:F,newsLink:l,forecastLink:g},w=R({defaultValues:b}),{reset:T}=w;h.useEffect(()=>{d&&T(b)},[d]),h.useEffect(()=>{u||G(L)},[u]);const C=e.jsx(j,{sx:{typography:"h5"},children:"Contact me!"}),D=e.jsxs(r,{direction:"row",spacing:3,justifyContent:"center",children:[e.jsxs(i,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(a,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Facebook"]}),e.jsxs(i,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(a,{icon:"solar:heart-bold",width:16,sx:{mr:1}}),"Twitter"]}),e.jsxs(i,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(a,{icon:"solar:share-bold",width:16,sx:{mr:1}}),"Instagram"]})]}),E=e.jsxs(e.Fragment,{children:[e.jsx(j,{sx:{typography:"h5"},children:"Find More!"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:e.jsxs(i,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},href:l,target:"_blank",rel:"noopener",children:[e.jsx(a,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"News - ",l]})}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:e.jsxs(i,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},href:g,target:"_blank",rel:"noopener",children:[e.jsx(a,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Forecast"]})})]}),A=e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Phone number:"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"E-mail:"}),e.jsxs(t,{variant:"body2",sx:{color:"text.secondary"},children:["Address: ",x]})]}),_=e.jsx(j,{sx:{typography:"h5"},children:"Services"}),B=e.jsxs(r,{direction:"row",alignItems:"center",sx:{color:"text.disabled",typography:"body2"},children:[e.jsx(z,{size:"small",value:5,precision:.1,readOnly:!0,sx:{mr:1}}),x]});return e.jsx(P,{methods:w,children:e.jsxs(r,{spacing:3,sx:{pt:3},...I,children:[e.jsxs(r,{spacing:2,alignItems:"flex-start",children:[e.jsx(t,{variant:"h5",children:p}),B,C,A,_,f&&f.map(s=>(s==null?void 0:s.approved)&&e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.name},s==null?void 0:s.id))]}),e.jsx(S,{sx:{borderStyle:"dashed"}}),E,e.jsx(S,{sx:{borderStyle:"dashed"}}),D]})})}function U({content:o}){return e.jsx(N,{children:o,sx:{p:3,"& p, li, ol":{typography:"body2"},"& ol":{p:0,display:{md:"flex"},listStyleType:"none","& li":{"&:first-of-type":{minWidth:240,mb:{xs:.5,md:0}}}}}})}export{Q as G,U as a,K as b};
