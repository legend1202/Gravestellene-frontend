import{cC as _,s as k,i as n,_ as o,cD as D,r as N,n as E,o as w,j as v,q as z,t as F,cE as I}from"./index-_tg0Vjne.js";const K=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,$,b,S;const t=44,U=_(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),W=_($||($=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),q=r=>{const{classes:s,variant:e,color:a,disableShrink:d}=r,u={root:["root",e,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(e)}`,d&&"circleDisableShrink"]};return F(u,I,s)},B=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.root,s[e.variant],s[`color${n(e.color)}`]]}})(({ownerState:r,theme:s})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:s.transitions.create("transform")},r.color!=="inherit"&&{color:(s.vars||s).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&D(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),U)),G=k("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,s)=>s.svg})({display:"block"}),L=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.circle,s[`circle${n(e.variant)}`],e.disableShrink&&s.circleDisableShrink]}})(({ownerState:r,theme:s})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:s.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&D(S||(S=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),W)),T=N.forwardRef(function(s,e){const a=E({props:s,name:"MuiCircularProgress"}),{className:d,color:u="primary",disableShrink:R=!1,size:p=40,style:j,thickness:i=3.6,value:h=0,variant:x="indeterminate"}=a,M=w(a,K),c=o({},a,{color:u,disableShrink:R,size:p,thickness:i,value:h,variant:x}),m=q(c),f={},g={},C={};if(x==="determinate"){const y=2*Math.PI*((t-i)/2);f.strokeDasharray=y.toFixed(3),C["aria-valuenow"]=Math.round(h),f.strokeDashoffset=`${((100-h)/100*y).toFixed(3)}px`,g.transform="rotate(-90deg)"}return v.jsx(B,o({className:z(m.root,d),style:o({width:p,height:p},g,j),ownerState:c,ref:e,role:"progressbar"},C,M,{children:v.jsx(G,{className:m.svg,ownerState:c,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:v.jsx(L,{className:m.circle,style:f,ownerState:c,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))}),Z=T;export{Z as C};
