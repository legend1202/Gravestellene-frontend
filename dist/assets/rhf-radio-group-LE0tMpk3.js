import{r as c,ad as j,aP as v,aR as F,bu as y,j as o,ab as C,ak as g,al as G,bv as P,dF as S,an as V}from"./index-CunmLLou.js";import{R as k,a as H}from"./Radio-21b84oim.js";import{F as L}from"./rhf-checkbox--0dOjZqZ.js";import{F as _}from"./FormControlLabel-L6vUYbWe.js";const $=["actions","children","defaultValue","name","onChange","value"],q=c.forwardRef(function(n,t){const{actions:m,children:r,defaultValue:u,name:f,onChange:l,value:d}=n,p=j(n,$),e=c.useRef(null),[s,x]=v({controlled:d,default:u,name:"RadioGroup"});c.useImperativeHandle(m,()=>({focus:()=>{let a=e.current.querySelector("input:not(:disabled):checked");a||(a=e.current.querySelector("input:not(:disabled)")),a&&a.focus()}}),[]);const h=F(t,e),R=y(f),b=c.useMemo(()=>({name:R,onChange(a){x(a.target.value),l&&l(a,a.target.value)},value:s}),[R,l,x,s]);return o.jsx(k.Provider,{value:b,children:o.jsx(L,C({role:"radiogroup",ref:h},p,{children:r}))})}),E=q;function z({row:i,name:n,label:t,options:m,spacing:r,helperText:u,...f}){const{control:l}=g(),d=t?`${n}-${t}`:"";return o.jsx(G,{name:n,control:l,render:({field:p,fieldState:{error:e}})=>o.jsxs(P,{component:"fieldset",children:[t&&o.jsx(S,{component:"legend",id:d,sx:{typography:"body2"},children:t}),o.jsx(E,{...p,"aria-labelledby":d,row:i,...f,children:m.map(s=>o.jsx(_,{value:s.value,control:o.jsx(H,{}),label:s.label,sx:{"&:not(:last-of-type)":{mb:r||0},...i&&{mr:0,"&:not(:last-of-type)":{mr:r||2}}}},s.value))}),(!!e||u)&&o.jsx(V,{error:!!e,sx:{mx:0},children:e?e==null?void 0:e.message:u})]})})}export{z as R};