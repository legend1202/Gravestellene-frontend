import{aw as x,d4 as g,r as l,j as c,L as u,T as f}from"./index-0ZRfM3mG.js";function b(e){return Math.round(parseFloat(e)*16)}function m(e){const o=x(),t=g(),p=o.breakpoints.up(t==="xl"?"lg":t),r=(e==="h1"||e==="h2"||e==="h3"||e==="h4"||e==="h5"||e==="h6")&&o.typography[e][p]?o.typography[e][p]:o.typography[e],s=b(r.fontSize),n=Number(o.typography[e].lineHeight)*s,{fontWeight:y,letterSpacing:h}=o.typography[e];return{fontSize:s,lineHeight:n,fontWeight:y,letterSpacing:h}}const T=l.forwardRef(({asLink:e,variant:o="body1",line:t=2,persistent:p=!1,children:i,sx:r,...s},n)=>{const{lineHeight:y}=m(o),h={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:t,WebkitBoxOrient:"vertical",...p&&{height:y*t},...r};return e?c.jsx(u,{color:"inherit",ref:n,variant:o,sx:{...h},...s,children:i}):c.jsx(f,{ref:n,variant:o,sx:{...h},...s,children:i})}),d=T;export{d as T};
