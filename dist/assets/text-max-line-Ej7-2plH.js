import{aJ as x,dc as g,r as l,j as y,L as u,T as f}from"./index-zFfPxWlY.js";function b(e){return Math.round(parseFloat(e)*16)}function m(e){const o=x(),t=g(),p=o.breakpoints.up(t==="xl"?"lg":t),r=(e==="h1"||e==="h2"||e==="h3"||e==="h4"||e==="h5"||e==="h6")&&o.typography[e][p]?o.typography[e][p]:o.typography[e],s=b(r.fontSize),n=Number(o.typography[e].lineHeight)*s,{fontWeight:c,letterSpacing:h}=o.typography[e];return{fontSize:s,lineHeight:n,fontWeight:c,letterSpacing:h}}const T=l.forwardRef(({asLink:e,variant:o="body1",line:t=2,persistent:p=!1,children:i,sx:r,...s},n)=>{const{lineHeight:c}=m(o),h={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:t,WebkitBoxOrient:"vertical",...p&&{height:c*t},...r};return e?y.jsx(u,{color:"inherit",ref:n,variant:o,sx:{...h},...s,children:i}):y.jsx(f,{ref:n,variant:o,sx:{...h},...s,children:i})}),d=T;export{d as T};