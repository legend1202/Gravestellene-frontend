import{aH as c,aI as p,_ as u,aw as a,r as g,ax as v,ay as x,j as C,aA as f,aB as m}from"./index-HVmlIZYv.js";import{d as D}from"./dialogTitleClasses-9HrkLq5U.js";function w(o){return c("MuiDialogContent",o)}p("MuiDialogContent",["root","dividers"]);const y=["className","dividers"],R=o=>{const{classes:s,dividers:t}=o;return m({root:["root",t&&"dividers"]},w,s)},b=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:t}=o;return[s.root,t.dividers&&s.dividers]}})(({theme:o,ownerState:s})=>a({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},s.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${D.root} + &`]:{paddingTop:0}})),j=g.forwardRef(function(s,t){const e=v({props:s,name:"MuiDialogContent"}),{className:r,dividers:n=!1}=e,l=x(e,y),i=a({},e,{dividers:n}),d=R(i);return C.jsx(b,a({className:f(d.root,r),ownerState:i,ref:t},l))}),U=j;export{U as D};