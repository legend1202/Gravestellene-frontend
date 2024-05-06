import{y as p,j as l,s as d,n as V,w as B,bx as z,bw as b,ak as a,bM as h,r as F,al as U,am as Z,c as q,an as D,ao as G,bN as J}from"./index-0ZRfM3mG.js";import{C as K}from"./Close-ceJClZw0.js";const Q=p(l.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),X=p(l.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Y=p(l.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),oo=p(l.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),so=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],to=o=>{const{variant:t,color:e,severity:r,classes:s}=o,i={root:["root",`${t}${B(e||r)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return G(i,J,s)},lo=d(V,{name:"MuiAlert",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,t[e.variant],t[`${e.variant}${B(e.color||e.severity)}`]]}})(({theme:o,ownerState:t})=>{const e=o.palette.mode==="light"?z:b,r=o.palette.mode==="light"?b:z,s=t.color||t.severity;return a({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},s&&t.variant==="standard"&&{color:o.vars?o.vars.palette.Alert[`${s}Color`]:e(o.palette[s].light,.6),backgroundColor:o.vars?o.vars.palette.Alert[`${s}StandardBg`]:r(o.palette[s].light,.9),[`& .${h.icon}`]:o.vars?{color:o.vars.palette.Alert[`${s}IconColor`]}:{color:o.palette[s].main}},s&&t.variant==="outlined"&&{color:o.vars?o.vars.palette.Alert[`${s}Color`]:e(o.palette[s].light,.6),border:`1px solid ${(o.vars||o).palette[s].light}`,[`& .${h.icon}`]:o.vars?{color:o.vars.palette.Alert[`${s}IconColor`]}:{color:o.palette[s].main}},s&&t.variant==="filled"&&a({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert[`${s}FilledColor`],backgroundColor:o.vars.palette.Alert[`${s}FilledBg`]}:{backgroundColor:o.palette.mode==="dark"?o.palette[s].dark:o.palette[s].main,color:o.palette.getContrastText(o.palette[s].main)}))}),eo=d("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(o,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),ro=d("div",{name:"MuiAlert",slot:"Message",overridesResolver:(o,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),L=d("div",{name:"MuiAlert",slot:"Action",overridesResolver:(o,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),P={success:l.jsx(Q,{fontSize:"inherit"}),warning:l.jsx(X,{fontSize:"inherit"}),error:l.jsx(Y,{fontSize:"inherit"}),info:l.jsx(oo,{fontSize:"inherit"})},no=F.forwardRef(function(t,e){var r,s,i,x,A,C;const u=U({props:t,name:"MuiAlert"}),{action:v,children:R,className:k,closeText:f="Close",color:S,components:I={},componentsProps:M={},icon:m,iconMapping:_=P,onClose:$,role:N="alert",severity:g="success",slotProps:j={},slots:y={},variant:O="standard"}=u,H=Z(u,so),n=a({},u,{color:S,severity:g,variant:O}),c=to(n),E=(r=(s=y.closeButton)!=null?s:I.CloseButton)!=null?r:q,T=(i=(x=y.closeIcon)!=null?x:I.CloseIcon)!=null?i:K,W=(A=j.closeButton)!=null?A:M.closeButton,w=(C=j.closeIcon)!=null?C:M.closeIcon;return l.jsxs(lo,a({role:N,elevation:0,ownerState:n,className:D(c.root,k),ref:e},H,{children:[m!==!1?l.jsx(eo,{ownerState:n,className:c.icon,children:m||_[g]||P[g]}):null,l.jsx(ro,{ownerState:n,className:c.message,children:R}),v!=null?l.jsx(L,{ownerState:n,className:c.action,children:v}):null,v==null&&$?l.jsx(L,{ownerState:n,className:c.action,children:l.jsx(E,a({size:"small","aria-label":f,title:f,color:"inherit",onClick:$},W,{children:l.jsx(T,a({fontSize:"small"},w))}))}):null]}))}),io=no;export{io as A};
