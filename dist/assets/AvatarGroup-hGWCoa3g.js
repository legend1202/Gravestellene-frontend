import{U as S,aG as o,dE as w,dF as U,n as k,r as i,aH as z,aI as I,j as y,aJ as f,aK as D,dG as F}from"./index-A5RRZfYH.js";const H=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],N={small:-16,medium:null},J=a=>{const{classes:t}=a;return D({root:["root"],avatar:["avatar"]},F,t)},K=S("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,t)=>o({[`& .${w.avatar}`]:t.avatar},t.root)})(({theme:a})=>({[`& .${U.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"})),T=S(k,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:(a,t)=>t.avatar})(({theme:a})=>({border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}})),V=i.forwardRef(function(t,g){var G;const c=z({props:t,name:"MuiAvatarGroup"}),{children:C,className:L,component:h="div",componentsProps:M={},max:p=5,renderSurplus:P,slotProps:$={},spacing:e="medium",total:E,variant:v="circular"}=c,R=I(c,H);let s=p<2?2:p;const d=o({},c,{max:p,spacing:e,component:h,variant:v}),m=J(d),u=i.Children.toArray(C).filter(r=>i.isValidElement(r)),l=E||u.length;l===s&&(s+=1),s=Math.min(l+1,s);const x=Math.min(u.length,s-1),A=Math.max(l-s,l-x,0),j=P?P(A):`+${A}`,b=e&&N[e]!==void 0?N[e]:-e,n=(G=$.additionalAvatar)!=null?G:M.additionalAvatar;return y.jsxs(K,o({as:h,ownerState:d,className:f(m.root,L),ref:g},R,{children:[A?y.jsx(T,o({ownerState:d,variant:v},n,{className:f(m.avatar,n==null?void 0:n.className),style:o({marginLeft:b},n==null?void 0:n.style),children:j})):null,u.slice(0,x).reverse().map((r,_)=>i.cloneElement(r,{className:f(r.props.className,m.avatar),style:o({marginLeft:_===x-1?void 0:b},r.props.style),variant:r.props.variant||v}))]}))}),q=V;export{q as A};
