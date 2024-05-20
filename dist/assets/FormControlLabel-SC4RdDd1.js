import{aA as S,az as _,t as R,E as $,ap as d,r as x,aq as A,ar as U,c6 as D,c7 as w,T as v,j as p,as as F,S as z,at as W}from"./index-tv0ZIiTC.js";function B(e){return _("MuiFormControlLabel",e)}const H=S("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),t=H,I=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],G=e=>{const{classes:o,disabled:l,labelPlacement:n,error:s,required:r}=e,m={root:["root",l&&"disabled",`labelPlacement${$(n)}`,s&&"error",r&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",s&&"error"]};return W(m,B,o)},J=R("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:l}=e;return[{[`& .${t.label}`]:o.label},o.root,o[`labelPlacement${$(l.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${t.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${t.label}`]:{[`&.${t.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),K=R("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${t.error}`]:{color:(e.vars||e).palette.error.main}})),O=x.forwardRef(function(o,l){var n,s;const r=A({props:o,name:"MuiFormControlLabel"}),{className:m,componentsProps:k={},control:i,disabled:P,disableTypography:q,label:j,labelPlacement:T="end",required:h,slotProps:N={}}=r,E=U(r,I),b=D(),y=(n=P??i.props.disabled)!=null?n:b==null?void 0:b.disabled,u=h??i.props.required,L={disabled:y,required:u};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof r[c]<"u"&&(L[c]=r[c])});const M=w({props:r,muiFormControl:b,states:["error"]}),f=d({},r,{disabled:y,labelPlacement:T,required:u,error:M.error}),C=G(f),g=(s=N.typography)!=null?s:k.typography;let a=j;return a!=null&&a.type!==v&&!q&&(a=p.jsx(v,d({component:"span"},g,{className:F(C.label,g==null?void 0:g.className),children:a}))),p.jsxs(J,d({className:F(C.root,m),ownerState:f,ref:l},E,{children:[x.cloneElement(i,L),u?p.jsxs(z,{display:"block",children:[a,p.jsxs(K,{ownerState:f,"aria-hidden":!0,className:C.asterisk,children:[" ","*"]})]}):a]}))}),V=O;export{V as F,t as f};