import{a0 as I,j as s,a1 as P,r as y,g as d,a4 as x,I as A,ds as $}from"./index-JGGUJxTa.js";import{A as h}from"./Autocomplete-bGY3qg-r.js";import{C as v}from"./Chip-8vmzDimG.js";function R({name:l,label:i,type:u,helperText:f,placeholder:C,...c}){const{control:w,setValue:g}=I(),{multiple:r}=c;return s.jsx(P,{name:l,control:w,render:({field:j,fieldState:{error:n}})=>u==="country"?s.jsx(h,{...j,id:`autocomplete-${l}`,autoHighlight:!r,disableCloseOnSelect:r,onChange:(t,o)=>g(l,o,{shouldValidate:!0}),renderOption:(t,o)=>{var a;const e=m(o);return e.label?y.createElement("li",{...t,key:e.label},s.jsx(d,{icon:`circle-flags:${(a=e.code)==null?void 0:a.toLowerCase()}`,sx:{mr:1}},e.label),e.label," (",e.code,") +",e.phone):null},renderInput:t=>{var a;const o=m(t.inputProps.value),e={...t,label:i,placeholder:C,error:!!n,helperText:n?n==null?void 0:n.message:f,inputProps:{...t.inputProps,autoComplete:"new-password"}};return r?s.jsx(x,{...e}):s.jsx(x,{...e,InputProps:{...t.InputProps,startAdornment:s.jsx(A,{position:"start",sx:{...!o.code&&{display:"none"}},children:s.jsx(d,{icon:`circle-flags:${(a=o.code)==null?void 0:a.toLowerCase()}`,sx:{mr:-.5,ml:.5}})})}})},renderTags:(t,o)=>t.map((e,a)=>{var b;const p=m(e);return y.createElement(v,{...o({index:a}),key:p.label,label:p.label,icon:s.jsx(d,{icon:`circle-flags:${(b=p.code)==null?void 0:b.toLowerCase()}`}),size:"small",variant:"soft"})}),...c}):s.jsx(h,{...j,id:`autocomplete-${l}`,onChange:(t,o)=>g(l,o,{shouldValidate:!0}),renderInput:t=>s.jsx(x,{...t,label:i,placeholder:C,error:!!n,helperText:n?n==null?void 0:n.message:f,inputProps:{...t.inputProps,autoComplete:"new-password"}}),...c})})}function m(l){return{...$.filter(u=>u.label===l)[0]}}export{R};
