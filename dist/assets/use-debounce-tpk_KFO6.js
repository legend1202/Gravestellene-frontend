import{r as o}from"./index-0EEk4iZQ.js";function c(e,t=500){const[r,u]=o.useState(e);return o.useEffect(()=>{const n=setTimeout(()=>{u(e)},t);return()=>{clearTimeout(n)}},[e,t]),r}export{c as u};
