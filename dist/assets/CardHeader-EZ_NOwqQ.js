import{aB as R,aA as T,v as c,aq as d,r as j,ar as N,as as P,T as l,j as s,at as M,au as A}from"./index-xccKnqtj.js";function U(a){return T("MuiCardHeader",a)}const $=R("MuiCardHeader",["root","avatar","action","content","title","subheader"]),v=$,_=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],k=a=>{const{classes:e}=a;return A({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},U,e)},w=c("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>d({[`& .${v.title}`]:e.title,[`& .${v.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),B=c("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),E=c("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),S=c("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),q=j.forwardRef(function(e,h){const p=N({props:e,name:"MuiCardHeader"}),{action:m,avatar:i,className:C,component:y="div",disableTypography:u=!1,subheader:b,subheaderTypographyProps:x,title:g,titleTypographyProps:H}=p,f=P(p,_),r=d({},p,{component:y,disableTypography:u}),t=k(r);let o=g;o!=null&&o.type!==l&&!u&&(o=s.jsx(l,d({variant:i?"body2":"h5",className:t.title,component:"span",display:"block"},H,{children:o})));let n=b;return n!=null&&n.type!==l&&!u&&(n=s.jsx(l,d({variant:i?"body2":"body1",className:t.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:n}))),s.jsxs(w,d({className:M(t.root,C),as:y,ref:h,ownerState:r},f,{children:[i&&s.jsx(B,{className:t.avatar,ownerState:r,children:i}),s.jsxs(S,{className:t.content,ownerState:r,children:[o,n]}),m&&s.jsx(E,{className:t.action,ownerState:r,children:m})]}))}),L=q;export{L as C};