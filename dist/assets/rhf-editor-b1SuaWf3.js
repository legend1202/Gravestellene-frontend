import{al as p,r as f,j as a,am as d,ao as m}from"./index-N8SydwAL.js";import{E as r}from"./editor-fZ_LMMmE.js";function j({name:s,helperText:e,...n}){const{control:x,watch:c,setValue:o,formState:{isSubmitSuccessful:l}}=p(),u=c();return f.useEffect(()=>{u[s]==="<p><br></p>"&&o(s,"",{shouldValidate:!l})},[l,s,o,u]),a.jsx(d,{name:s,control:x,render:({field:i,fieldState:{error:t}})=>a.jsx(r,{id:s,value:i.value,onChange:i.onChange,error:!!t,helperText:(!!t||e)&&a.jsx(m,{error:!!t,sx:{px:2},children:t?t==null?void 0:t.message:e}),...n})})}export{j as R};
