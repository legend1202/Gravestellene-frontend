import{r as c,ar as F,X as b,Z as v,W as C,j as o,ap as y}from"./index-tv0ZIiTC.js";import{a as g,C as G}from"./form-provider-k-FKKLvB.js";import{a as P,c as S,F as V}from"./TextField-MR0F-eFr.js";import{a as H,R as L}from"./Radio-cGrJpfGW.js";import{F as _}from"./rhf-checkbox-82oNEnKz.js";import{F as $}from"./FormControlLabel-SC4RdDd1.js";const k=["actions","children","defaultValue","name","onChange","value"],q=c.forwardRef(function(r,a){const{actions:m,children:l,defaultValue:u,name:f,onChange:n,value:d}=r,p=F(r,k),e=c.useRef(null),[s,x]=b({controlled:d,default:u,name:"RadioGroup"});c.useImperativeHandle(m,()=>({focus:()=>{let t=e.current.querySelector("input:not(:disabled):checked");t||(t=e.current.querySelector("input:not(:disabled)")),t&&t.focus()}}),[]);const h=v(a,e),R=C(f),j=c.useMemo(()=>({name:R,onChange(t){x(t.target.value),n&&n(t,t.target.value)},value:s}),[R,n,x,s]);return o.jsx(H.Provider,{value:j,children:o.jsx(_,y({role:"radiogroup",ref:h},p,{children:l}))})}),E=q;function z({row:i,name:r,label:a,options:m,spacing:l,helperText:u,...f}){const{control:n}=g(),d=a?`${r}-${a}`:"";return o.jsx(G,{name:r,control:n,render:({field:p,fieldState:{error:e}})=>o.jsxs(P,{component:"fieldset",children:[a&&o.jsx(S,{component:"legend",id:d,sx:{typography:"body2"},children:a}),o.jsx(E,{...p,"aria-labelledby":d,row:i,...f,children:m.map(s=>o.jsx($,{value:s.value,control:o.jsx(L,{}),label:s.label,sx:{"&:not(:last-of-type)":{mb:l||0},...i&&{mr:0,"&:not(:last-of-type)":{mr:l||2}}}},s.value))}),(!!e||u)&&o.jsx(V,{error:!!e,sx:{mx:0},children:e?e==null?void 0:e.message:u})]})})}export{z as R};