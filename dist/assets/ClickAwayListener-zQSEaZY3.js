import{r as n,af as C,ae as T,a8 as h,j as x}from"./index-A5RRZfYH.js";function p(o){return o.substring(2).toLowerCase()}function g(o,s){return s.documentElement.clientWidth<o.clientX||s.documentElement.clientHeight<o.clientY}function y(o){const{children:s,disableReactTree:R=!1,mouseEvent:u="onClick",onClickAway:L,touchEvent:i="onTouchEnd"}=o,f=n.useRef(!1),c=n.useRef(null),l=n.useRef(!1),d=n.useRef(!1);n.useEffect(()=>(setTimeout(()=>{l.current=!0},0),()=>{l.current=!1}),[]);const k=C(s.ref,c),a=T(e=>{const t=d.current;d.current=!1;const r=h(c.current);if(!l.current||!c.current||"clientX"in e&&g(e,r))return;if(f.current){f.current=!1;return}let E;e.composedPath?E=e.composedPath().indexOf(c.current)>-1:E=!r.documentElement.contains(e.target)||c.current.contains(e.target),!E&&(R||!t)&&L(e)}),v=e=>t=>{d.current=!0;const r=s.props[e];r&&r(t)},m={ref:k};return i!==!1&&(m[i]=v(i)),n.useEffect(()=>{if(i!==!1){const e=p(i),t=h(c.current),r=()=>{f.current=!0};return t.addEventListener(e,a),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,a),t.removeEventListener("touchmove",r)}}},[a,i]),u!==!1&&(m[u]=v(u)),n.useEffect(()=>{if(u!==!1){const e=p(u),t=h(c.current);return t.addEventListener(e,a),()=>{t.removeEventListener(e,a)}}},[a,u]),x.jsx(n.Fragment,{children:n.cloneElement(s,m)})}export{y as C};
