import{u as y,j as o,x as p,X as s,k as i,S as a,Y as l,v as d,p as c}from"./index-HKvYvq3j.js";function h({params:e}){const{t:r}=y();return o.jsx(p,{variant:"soft",color:e.row.approved&&"info"||"default",children:e.row.approved?r("Approved"):r("Draft")})}function u({params:e}){return o.jsx(s,{primary:e.row.location,secondary:e.row.location,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}function w({params:e}){const r=i(),t=n=>{r.push(c.fellesraad.graveyard.details(n))};return o.jsxs(a,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:[o.jsx(l,{alt:e.row.name,src:e.row.coverUrl,variant:"rounded",sx:{width:24,height:24,mr:2}}),o.jsx(s,{disableTypography:!0,onClick:()=>t(`${e==null?void 0:e.row.name}`),secondary:o.jsx(d,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:e.row.name}),sx:{display:"flex",flexDirection:"column",cursor:"pointer"}})]})}function v({params:e}){const r=i(),t=n=>{r.push(c.graveyard.details(n))};return o.jsxs(a,{direction:"row",alignItems:"center",sx:{py:2,width:1},children:[o.jsx(l,{alt:e.row.name,src:e.row.coverUrl,variant:"rounded",sx:{width:24,height:24,mr:2}}),o.jsx(s,{disableTypography:!0,onClick:()=>t(`${e==null?void 0:e.row.name}`),secondary:o.jsx(d,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:e.row.name}),sx:{display:"flex",flexDirection:"column",cursor:"pointer"}})]})}export{v as R,u as a,h as b,w as c};
