import{al as R,ak as T,s as c,_ as d,r as j,n as N,o as P,T as l,j as s,q as M,t as A}from"./index-_tg0Vjne.js";function U(a){return T("MuiCardHeader",a)}const _=R("MuiCardHeader",["root","avatar","action","content","title","subheader"]),C=_,$=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],k=a=>{const{classes:e}=a;return A({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},U,e)},w=c("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>d({[`& .${C.title}`]:e.title,[`& .${C.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),E=c("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),S=c("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),q=c("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),B=j.forwardRef(function(e,h){const p=N({props:e,name:"MuiCardHeader"}),{action:m,avatar:i,className:v,component:y="div",disableTypography:u=!1,subheader:b,subheaderTypographyProps:x,title:g,titleTypographyProps:H}=p,f=P(p,$),r=d({},p,{component:y,disableTypography:u}),t=k(r);let o=g;o!=null&&o.type!==l&&!u&&(o=s.jsx(l,d({variant:i?"body2":"h5",className:t.title,component:"span",display:"block"},H,{children:o})));let n=b;return n!=null&&n.type!==l&&!u&&(n=s.jsx(l,d({variant:i?"body2":"body1",className:t.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:n}))),s.jsxs(w,d({className:M(t.root,v),as:y,ref:h,ownerState:r},f,{children:[i&&s.jsx(E,{className:t.avatar,ownerState:r,children:i}),s.jsxs(q,{className:t.content,ownerState:r,children:[o,n]}),m&&s.jsx(S,{className:t.action,ownerState:r,children:m})]}))}),L=B;export{L as C};
