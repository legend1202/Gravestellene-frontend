import{V as I,j as s,W as P,r as y,h as d,M as x,I as A,cU as $}from"./index-A5RRZfYH.js";import{A as h}from"./Autocomplete-VAhUVX0s.js";import{C as v}from"./Chip-GbrFxrzK.js";function L({name:l,label:u,type:a,helperText:f,placeholder:C,...c}){const{control:w,setValue:j}=I(),{multiple:r}=c;return s.jsx(P,{name:l,control:w,render:({field:g,fieldState:{error:n}})=>a==="country"?s.jsx(h,{...g,id:`autocomplete-${l}`,autoHighlight:!r,disableCloseOnSelect:r,onChange:(t,o)=>j(l,o,{shouldValidate:!0}),renderOption:(t,o)=>{var i;const e=m(o);return e.label?y.createElement("li",{...t,key:e.label},s.jsx(d,{icon:`circle-flags:${(i=e.code)==null?void 0:i.toLowerCase()}`,sx:{mr:1}},e.label),e.label," (",e.code,") +",e.phone):null},renderInput:t=>{var i;const o=m(t.inputProps.value),e={...t,label:u,placeholder:C,error:!!n,helperText:n?n==null?void 0:n.message:f,inputProps:{...t.inputProps,autoComplete:"new-password"}};return r?s.jsx(x,{...e}):s.jsx(x,{...e,InputProps:{...t.InputProps,startAdornment:s.jsx(A,{position:"start",sx:{...!o.code&&{display:"none"}},children:s.jsx(d,{icon:`circle-flags:${(i=o.code)==null?void 0:i.toLowerCase()}`,sx:{mr:-.5,ml:.5}})})}})},renderTags:(t,o)=>t.map((e,i)=>{var b;const p=m(e);return y.createElement(v,{...o({index:i}),key:p.label,label:p.label,icon:s.jsx(d,{icon:`circle-flags:${(b=p.code)==null?void 0:b.toLowerCase()}`}),size:"small",variant:"soft"})}),...c}):s.jsx(h,{...g,id:`autocomplete-${l}`,onChange:(t,o)=>j(l,o,{shouldValidate:!0}),renderInput:t=>s.jsx(x,{...t,label:u,placeholder:C,error:!!n,helperText:n?n==null?void 0:n.message:f,inputProps:{...t.inputProps,autoComplete:"new-password"}}),...c})})}function m(l){return{...$.filter(a=>a.label===l)[0]}}export{L as R};
