import{K as h,j as t,v as B,c1 as P,F as l,aq as n,cs as u,al as R,r as x,ar as g,as as y,at as H,au as M,ct as S}from"./index-xccKnqtj.js";import{S as _}from"./SwitchBase-r3AAQIaf.js";const E=h(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),O=h(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=h(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),F=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],L=o=>{const{classes:e,indeterminate:c,color:s,size:r}=o,a={root:["root",c&&"indeterminate",`color${l(s)}`,`size${l(r)}`]},d=M(a,S,e);return n({},e,d)},N=B(_,{shouldForwardProp:o=>P(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:c}=o;return[e.root,c.indeterminate&&e.indeterminate,e[`size${l(c.size)}`],c.color!=="default"&&e[`color${l(c.color)}`]]}})(({theme:o,ownerState:e})=>n({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:R(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${u.checked}, &.${u.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${u.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),U=t.jsx(O,{}),q=t.jsx(E,{}),K=t.jsx(V,{}),T=x.forwardRef(function(e,c){var s,r;const a=g({props:e,name:"MuiCheckbox"}),{checkedIcon:d=U,color:I="primary",icon:z=q,indeterminate:i=!1,indeterminateIcon:m=K,inputProps:b,size:p="medium",className:$}=a,j=y(a,F),k=i?m:z,v=i?m:d,C=n({},a,{color:I,indeterminate:i,size:p}),f=L(C);return t.jsx(N,n({type:"checkbox",inputProps:n({"data-indeterminate":i},b),icon:x.cloneElement(k,{fontSize:(s=k.props.fontSize)!=null?s:p}),checkedIcon:x.cloneElement(v,{fontSize:(r=v.props.fontSize)!=null?r:p}),ownerState:C,ref:c,className:H(f.root,$)},j,{classes:f}))}),A=T;export{A as C};