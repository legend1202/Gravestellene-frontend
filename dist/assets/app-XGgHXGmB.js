import{aJ as x,j as e,S as c,aq as C,ar as g,T as n,y as v,aP as I,a5 as h,L as A,B as S,g as W,u as k,v as R,C as T,Z as l,bw as F,E as G,bx as P,H as D}from"./index-zFfPxWlY.js";import{v as u}from"./fade-VV5890gg.js";import{M as N}from"./motion-container-EF93FD8O.js";import{u as O,b as B,a as L,C as $}from"./carousel-arrow-index-aJOMmNCF.js";import{c as f,a as E}from"./format-number-76EDHf4S.js";import{C as H}from"./chart-3p4fNMMf.js";import"./transition-eqIn2NYL.js";import"./index-g5_14GVp.js";function M({title:s,description:t,action:r,img:o,...i}){const a=x();return e.jsxs(c,{flexDirection:{xs:"column",md:"row"},sx:{...C({direction:"135deg",startColor:g(a.palette.primary.light,.2),endColor:g(a.palette.primary.main,.2)}),height:{md:1},borderRadius:2,position:"relative",color:"primary.darker",backgroundColor:"common.white"},...i,children:[e.jsxs(c,{flexGrow:1,justifyContent:"center",alignItems:{xs:"center",md:"flex-start"},sx:{p:{xs:a.spacing(5,3,0,3),md:a.spacing(5)},textAlign:{xs:"center",md:"left"}},children:[e.jsx(n,{variant:"h4",sx:{mb:2,whiteSpace:"pre-line"},children:s}),e.jsx(n,{variant:"body2",sx:{opacity:.8,maxWidth:360,mb:{xs:3,xl:5}},children:t}),r&&r]}),o&&e.jsx(c,{component:"span",justifyContent:"center",sx:{p:{xs:5,md:3},maxWidth:360,mx:"auto"},children:o})]})}function U({list:s,...t}){const r=O({speed:800,autoplay:!0,...B({sx:{top:16,left:16,position:"absolute",color:"primary.light"}})});return e.jsxs(v,{...t,children:[e.jsx(L,{ref:r.carouselRef,...r.carouselSettings,children:s.map((o,i)=>e.jsx(q,{item:o,active:i===r.currentIndex},o.id))}),e.jsx($,{onNext:r.onNext,onPrev:r.onPrev,sx:{top:8,right:8,position:"absolute",color:"common.white"}})]})}function q({item:s,active:t}){const r=x(),{coverUrl:o,title:i,description:a}=s,d=e.jsx(I,{alt:i,src:o,overlay:`linear-gradient(to bottom, ${g(r.palette.grey[900],0)} 0%, ${r.palette.grey[900]} 75%)`,sx:{width:1,height:{xs:280,xl:320}}});return e.jsxs(N,{action:!0,animate:t,sx:{position:"relative"},children:[e.jsxs(c,{spacing:1,sx:{p:3,width:1,bottom:0,zIndex:9,textAlign:"left",position:"absolute",color:"common.white"},children:[e.jsx(h.div,{variants:u().inRight,children:e.jsx(n,{variant:"overline",sx:{color:"primary.light"},children:"Featured App"})}),e.jsx(h.div,{variants:u().inRight,children:e.jsx(A,{color:"inherit",underline:"none",children:e.jsx(n,{variant:"h5",noWrap:!0,children:i})})}),e.jsx(h.div,{variants:u().inRight,children:e.jsx(n,{variant:"body2",noWrap:!0,children:a})})]}),d]})}function j({title:s,percent:t,total:r,chart:o,sx:i,...a}){const d=x(),{colors:m=[d.palette.primary.light,d.palette.primary.main],series:y,options:b}=o,w={colors:m.map(p=>p[1]),fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:m[0],opacity:1},{offset:100,color:m[1],opacity:1}]}},chart:{sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"68%",borderRadius:2}},tooltip:{x:{show:!1},y:{formatter:p=>f(p),title:{formatter:()=>""}},marker:{show:!1}},...b};return e.jsxs(v,{sx:{display:"flex",alignItems:"center",p:3,...i},...a,children:[e.jsxs(S,{sx:{flexGrow:1},children:[e.jsx(n,{variant:"subtitle2",children:s}),e.jsxs(c,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[e.jsx(W,{width:24,icon:t<0?"solar:double-alt-arrow-down-bold-duotone":"solar:double-alt-arrow-up-bold-duotone",sx:{mr:1,color:"success.main",...t<0&&{color:"error.main"}}}),e.jsxs(n,{component:"div",variant:"subtitle2",children:[t>0&&"+",E(t)]})]}),e.jsx(n,{variant:"h3",children:f(r)})]}),e.jsx(H,{dir:"ltr",type:"bar",series:[{data:y}],options:w,width:60,height:36})]})}function z(){const{user:s}=k(),t=x(),r=R();return e.jsx(T,{maxWidth:r.themeStretch?!1:"xl",children:e.jsxs(l,{container:!0,spacing:3,children:[e.jsx(l,{xs:12,md:8,children:e.jsx(M,{title:`Welcome back 👋 
 ${s==null?void 0:s.name}`,description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",img:e.jsx(F,{}),action:e.jsx(G,{variant:"contained",color:"primary",children:"Go Now"})})}),e.jsx(l,{xs:12,md:4,children:e.jsx(U,{list:P})}),e.jsx(l,{xs:12,md:4,children:e.jsx(j,{title:"Total Active Users",percent:2.6,total:18765,chart:{series:[5,18,12,51,68,11,39,37,27,20]}})}),e.jsx(l,{xs:12,md:4,children:e.jsx(j,{title:"Total Installed",percent:.2,total:4876,chart:{colors:[t.palette.info.light,t.palette.info.main],series:[20,41,63,33,28,35,50,46,11,26]}})}),e.jsx(l,{xs:12,md:4,children:e.jsx(j,{title:"Total Downloads",percent:-.1,total:678,chart:{colors:[t.palette.warning.light,t.palette.warning.main],series:[8,9,31,8,16,37,8,33,46,31]}})})]})})}function ee(){return e.jsxs(e.Fragment,{children:[e.jsx(D,{children:e.jsx("title",{children:" Dashboard: App"})}),e.jsx(z,{})]})}export{ee as default};