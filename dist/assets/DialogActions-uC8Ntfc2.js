import{aQ as g,aR as p,U as u,aG as e,r as d,aH as m,aI as f,j as x,aJ as D,aK as A}from"./index-crR8fPbl.js";function y(s){return g("MuiDialogActions",s)}p("MuiDialogActions",["root","spacing"]);const S=["className","disableSpacing"],b=s=>{const{classes:t,disableSpacing:o}=s;return A({root:["root",!o&&"spacing"]},y,t)},C=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,!o.disableSpacing&&t.spacing]}})(({ownerState:s})=>e({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!s.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),R=d.forwardRef(function(t,o){const a=m({props:t,name:"MuiDialogActions"}),{className:n,disableSpacing:c=!1}=a,l=f(a,S),i=e({},a,{disableSpacing:c}),r=b(i);return x.jsx(C,e({className:D(r.root,n),ownerState:i,ref:o},l))}),U=R;export{U as D};