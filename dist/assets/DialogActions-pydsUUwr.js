import{aH as g,aI as p,_ as u,aw as e,r as d,ax as m,ay as x,j as f,aA as A,aB as D}from"./index-zFfPxWlY.js";function y(s){return g("MuiDialogActions",s)}p("MuiDialogActions",["root","spacing"]);const S=["className","disableSpacing"],b=s=>{const{classes:t,disableSpacing:o}=s;return D({root:["root",!o&&"spacing"]},y,t)},C=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,!o.disableSpacing&&t.spacing]}})(({ownerState:s})=>e({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!s.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),j=d.forwardRef(function(t,o){const a=m({props:t,name:"MuiDialogActions"}),{className:n,disableSpacing:c=!1}=a,l=x(a,S),i=e({},a,{disableSpacing:c}),r=b(i);return f.jsx(C,e({className:A(r.root,n),ownerState:i,ref:o},l))}),w=j;export{w as D};