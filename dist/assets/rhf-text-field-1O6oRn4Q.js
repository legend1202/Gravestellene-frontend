import{g as v,s as c,b as y,a as x,C as b}from"./form-provider-7AhGD8Yg.js";import{j as h}from"./index-0ZRfM3mG.js";import{T as j}from"./TextField-bYtDKJ1u.js";var p=function(e,a,t){if(e&&"reportValidity"in e){var i=v(t,a);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},g=function(e,a){var t=function(s){var r=a.fields[s];r&&r.ref&&"reportValidity"in r.ref?p(r.ref,s,e):r.refs&&r.refs.forEach(function(n){return p(n,s,e)})};for(var i in a.fields)t(i)},C=function(e,a){a.shouldUseNativeValidation&&g(e,a);var t={};for(var i in e){var s=v(a.fields,i),r=Object.assign(e[i]||{},{ref:s&&s.ref});if(E(a.names||Object.keys(e),i)){var n=Object.assign({},V(v(t,i)));c(n,"root",r),c(t,i,n)}else c(t,i,r)}return t},V=function(e){return Array.isArray(e)?e.filter(Boolean):[]},E=function(e,a){return e.some(function(t){return t.startsWith(a+".")})};function T(e,a,t){return a===void 0&&(a={}),t===void 0&&(t={}),function(i,s,r){try{return Promise.resolve(function(n,f){try{var l=(a.context,Promise.resolve(e[t.mode==="sync"?"validateSync":"validate"](i,Object.assign({abortEarly:!1},a,{context:s}))).then(function(u){return r.shouldUseNativeValidation&&g({},r),{values:t.raw?i:u,errors:{}}}))}catch(u){return f(u)}return l&&l.then?l.then(void 0,f):l}(0,function(n){if(!n.inner)throw n;return{values:{},errors:C((f=n,l=!r.shouldUseNativeValidation&&r.criteriaMode==="all",(f.inner||[]).reduce(function(u,o){if(u[o.path]||(u[o.path]={message:o.message,type:o.type}),l){var m=u[o.path].types,d=m&&m[o.type];u[o.path]=y(o.path,l,u,o.type,d?[].concat(d,o.message):o.message)}return u},{})),r)};var f,l}))}catch(n){return Promise.reject(n)}}}function P({name:e,helperText:a,type:t,...i}){const{control:s}=x();return h.jsx(b,{name:e,control:s,render:({field:r,fieldState:{error:n}})=>h.jsx(j,{...r,fullWidth:!0,type:t,value:t==="number"&&r.value===0?"":r.value,onChange:f=>{t==="number"?r.onChange(Number(f.target.value)):r.onChange(f.target.value)},error:!!n,helperText:n?n==null?void 0:n.message:a,...i})})}export{P as R,T as o};
