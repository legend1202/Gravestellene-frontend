import{a9 as g,aa as p,y as d,ab as e,r as u,ac as f,ad as m,j as x,ae as D,af as y}from"./index-CunmLLou.js";function A(s){return g("MuiDialogActions",s)}p("MuiDialogActions",["root","spacing"]);const b=["className","disableSpacing"],S=s=>{const{classes:t,disableSpacing:o}=s;return y({root:["root",!o&&"spacing"]},A,t)},C=d("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,!o.disableSpacing&&t.spacing]}})(({ownerState:s})=>e({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!s.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),j=u.forwardRef(function(t,o){const a=f({props:t,name:"MuiDialogActions"}),{className:n,disableSpacing:c=!1}=a,l=m(a,b),i=e({},a,{disableSpacing:c}),r=S(i);return x.jsx(C,e({className:D(r.root,n),ownerState:i,ref:o},l))}),M=j;export{M as D};