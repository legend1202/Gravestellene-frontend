import{j as s,_ as d,S as i,d as T,r as A,F as D,T as t,a8 as p,B as g,L as n,g as r}from"./index-JGGUJxTa.js";import{S as e}from"./Skeleton-zn8oggDq.js";import{R as L}from"./Rating-knzsrMgJ.js";import{M}from"./markdown-Fbjyyx16.js";function N({...a}){return s.jsxs(d,{container:!0,spacing:8,...a,children:[s.jsx(d,{xs:12,md:6,lg:7,children:s.jsx(e,{sx:{paddingTop:"100%"}})}),s.jsx(d,{xs:12,md:6,lg:5,children:s.jsxs(i,{spacing:3,children:[s.jsx(e,{sx:{height:16,width:48}}),s.jsx(e,{sx:{height:16,width:80}}),s.jsx(e,{sx:{height:16,width:.5}}),s.jsx(e,{sx:{height:16,width:.75}}),s.jsx(e,{sx:{height:120}})]})}),s.jsx(d,{xs:12,children:s.jsx(i,{direction:"row",alignItems:"center",children:[...Array(3)].map((o,l)=>s.jsxs(i,{spacing:2,alignItems:"center",justifyContent:"center",sx:{width:1},children:[s.jsx(e,{variant:"circular",sx:{width:80,height:80}}),s.jsx(e,{sx:{height:16,width:160}}),s.jsx(e,{sx:{height:16,width:80}})]},l))})})]})}function O({items:a,graveyard:o,onAddCart:l,onGotoStep:E,disabledActions:R,...u}){const{id:f,fellesraadId:b,name:c,location:x,picture:w,content:v,newsLink:h,forecastLink:m}=o,j={id:f,fellesraadId:b,name:c,location:x,picture:w,content:v,newsLink:h,forecastLink:m},y=T({defaultValues:j}),{reset:I}=y;A.useEffect(()=>{o&&I(j)},[o]);const S=s.jsx(g,{sx:{typography:"h5"},children:"Contact me!"}),k=s.jsxs(i,{direction:"row",spacing:3,justifyContent:"center",children:[s.jsxs(n,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[s.jsx(r,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Facebook"]}),s.jsxs(n,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[s.jsx(r,{icon:"solar:heart-bold",width:16,sx:{mr:1}}),"Twitter"]}),s.jsxs(n,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[s.jsx(r,{icon:"solar:share-bold",width:16,sx:{mr:1}}),"Instagram"]})]}),F=s.jsxs(s.Fragment,{children:[s.jsx(g,{sx:{typography:"h5"},children:"Find More!"}),s.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:s.jsxs(n,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[s.jsx(r,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Map - You can see Google Map!"]})}),s.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:s.jsxs(n,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[s.jsx(r,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"News - ",h]})}),s.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:s.jsxs(n,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[s.jsx(r,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Forecast - ",m]})})]}),G=s.jsxs(s.Fragment,{children:[s.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Phone number: +1 234 5678 9012"}),s.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"E-mail: sorokin@mail.co"}),s.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Address: Artists' tombs in an 1808 burial ground"})]}),C=s.jsxs(i,{direction:"row",alignItems:"center",sx:{color:"text.disabled",typography:"body2"},children:[s.jsx(L,{size:"small",value:5,precision:.1,readOnly:!0,sx:{mr:1}}),x]});return s.jsx(D,{methods:y,children:s.jsxs(i,{spacing:3,sx:{pt:3},...u,children:[s.jsxs(i,{spacing:2,alignItems:"flex-start",children:[s.jsx(t,{variant:"h5",children:c}),C,S,G]}),s.jsx(p,{sx:{borderStyle:"dashed"}}),F,s.jsx(p,{sx:{borderStyle:"dashed"}}),k]})})}function V({content:a}){return s.jsx(M,{children:a,sx:{p:3,"& p, li, ol":{typography:"body2"},"& ol":{p:0,display:{md:"flex"},listStyleType:"none","& li":{"&:first-of-type":{minWidth:240,mb:{xs:.5,md:0}}}}}})}export{O as G,V as a,N as b};
