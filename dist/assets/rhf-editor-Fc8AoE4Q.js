import{r as c,j as o}from"./index-0ZRfM3mG.js";import{a as f,C as m}from"./form-provider-7AhGD8Yg.js";import{E as r}from"./editor-RvwnxdoU.js";import{F as d}from"./TextField-bYtDKJ1u.js";function F({name:s,helperText:e,...n}){const{control:p,watch:x,setValue:a,formState:{isSubmitSuccessful:i}}=f(),u=x();return c.useEffect(()=>{u[s]==="<p><br></p>"&&a(s,"",{shouldValidate:!i})},[i,s,a,u]),o.jsx(m,{name:s,control:p,render:({field:l,fieldState:{error:t}})=>o.jsx(r,{id:s,value:l.value,onChange:l.onChange,error:!!t,helperText:(!!t||e)&&o.jsx(d,{error:!!t,sx:{px:2},children:t?t==null?void 0:t.message:e}),...n})})}export{F as R};
