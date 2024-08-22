import{a9 as x,aa as w,cS as b,y as R,ab as o,E as S,cT as u,r as _,ac as $,ad as U,j as M,ae as j,af as A}from"./index-CunmLLou.js";function X(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function E(t){return parseFloat(t)}function N(t){return x("MuiSkeleton",t)}w("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const T=["animation","className","component","height","style","variant","width"];let r=t=>t,p,g,m,f;const B=t=>{const{classes:a,variant:e,animation:i,hasChildren:n,width:l,height:s}=t;return A({root:["root",e,i,n&&"withChildren",n&&!l&&"fitContent",n&&!s&&"heightAuto"]},N,a)},F=b(p||(p=r`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),K=b(g||(g=r`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),P=R("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=X(t.shape.borderRadius)||"px",i=E(t.shape.borderRadius);return o({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:S(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${e}/${Math.round(i/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&u(m||(m=r`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),F),({ownerState:t,theme:a})=>t.animation==="wave"&&u(f||(f=r`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),K,(a.vars||a).palette.action.hover)),W=_.forwardRef(function(a,e){const i=$({props:a,name:"MuiSkeleton"}),{animation:n="pulse",className:l,component:s="span",height:d,style:v,variant:C="text",width:k}=i,h=U(i,T),c=o({},i,{animation:n,component:s,variant:C,hasChildren:!!h.children}),y=B(c);return M.jsx(P,o({as:s,ref:e,className:j(y.root,l),ownerState:c},h,{style:o({width:k,height:d},v)}))}),O=W;export{O as S};