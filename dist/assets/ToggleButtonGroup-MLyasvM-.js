import{U as L,aN as j,a3 as z,aG as p,eK as m,aB as B,r as b,aH as k,aI as N,j as U,aJ as G,aK as M,eL as E,aR as _,aQ as P}from"./index-A5RRZfYH.js";const A=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],D=o=>{const{classes:e,fullWidth:t,selected:r,disabled:n,size:d,color:g}=o,c={root:["root",r&&"selected",n&&"disabled",t&&"fullWidth",`size${z(d)}`,g]};return M(c,E,e)},F=L(j,{name:"MuiToggleButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,e[`size${z(t.size)}`]]}})(({theme:o,ownerState:e})=>{let t=e.color==="standard"?o.palette.text.primary:o.palette[e.color].main,r;return o.vars&&(t=e.color==="standard"?o.vars.palette.text.primary:o.vars.palette[e.color].main,r=e.color==="standard"?o.vars.palette.text.primaryChannel:o.vars.palette[e.color].mainChannel),p({},o.typography.button,{borderRadius:(o.vars||o).shape.borderRadius,padding:11,border:`1px solid ${(o.vars||o).palette.divider}`,color:(o.vars||o).palette.action.active},e.fullWidth&&{width:"100%"},{[`&.${m.disabled}`]:{color:(o.vars||o).palette.action.disabled,border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:B(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.selected}`]:{color:t,backgroundColor:o.vars?`rgba(${r} / ${o.vars.palette.action.selectedOpacity})`:B(t,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?`rgba(${r} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:B(t,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.vars?`rgba(${r} / ${o.vars.palette.action.selectedOpacity})`:B(t,o.palette.action.selectedOpacity)}}}},e.size==="small"&&{padding:7,fontSize:o.typography.pxToRem(13)},e.size==="large"&&{padding:15,fontSize:o.typography.pxToRem(15)})}),H=b.forwardRef(function(e,t){const r=k({props:e,name:"MuiToggleButton"}),{children:n,className:d,color:g="standard",disabled:c=!1,disableFocusRipple:C=!1,fullWidth:R=!1,onChange:i,onClick:$,selected:x,size:s="medium",value:f}=r,y=N(r,A),v=p({},r,{color:g,disabled:c,disableFocusRipple:C,fullWidth:R,size:s}),h=D(v),W=a=>{$&&($(a,f),a.defaultPrevented)||i&&i(a,f)};return U.jsx(F,p({className:G(h.root,d),disabled:c,focusRipple:!C,ref:t,onClick:W,onChange:i,value:f,ownerState:v,"aria-pressed":x},y,{children:n}))}),Z=H;function K(o,e){return e===void 0||o===void 0?!1:Array.isArray(e)?e.indexOf(o)>=0:o===e}function I(o){return P("MuiToggleButtonGroup",o)}const J=_("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth"]),l=J,Q=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],V=o=>{const{classes:e,orientation:t,fullWidth:r,disabled:n}=o,d={root:["root",t==="vertical"&&"vertical",r&&"fullWidth"],grouped:["grouped",`grouped${z(t)}`,n&&"disabled"]};return M(d,I,e)},q=L("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${l.grouped}`]:e.grouped},{[`& .${l.grouped}`]:e[`grouped${z(t.orientation)}`]},e.root,t.orientation==="vertical"&&e.vertical,t.fullWidth&&e.fullWidth]}})(({ownerState:o,theme:e})=>p({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},o.orientation==="vertical"&&{flexDirection:"column"},o.fullWidth&&{width:"100%"},{[`& .${l.grouped}`]:p({},o.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${l.selected} + .${l.grouped}.${l.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${l.selected} + .${l.grouped}.${l.selected}`]:{borderTop:0,marginTop:0}})})),X=b.forwardRef(function(e,t){const r=k({props:e,name:"MuiToggleButtonGroup"}),{children:n,className:d,color:g="standard",disabled:c=!1,exclusive:C=!1,fullWidth:R=!1,onChange:i,orientation:$="horizontal",size:x="medium",value:s}=r,f=N(r,Q),y=p({},r,{disabled:c,fullWidth:R,orientation:$,size:x}),v=V(y),h=(a,u)=>{if(!i)return;const O=s&&s.indexOf(u);let T;s&&O>=0?(T=s.slice(),T.splice(O,1)):T=s?s.concat(u):[u],i(a,T)},W=(a,u)=>{i&&i(a,s===u?null:u)};return U.jsx(q,p({role:"group",className:G(v.root,d),ref:t,ownerState:y},f,{children:b.Children.map(n,a=>b.isValidElement(a)?b.cloneElement(a,{className:G(v.grouped,a.props.className),onChange:C?W:h,selected:a.props.selected===void 0?K(a.props.value,s):a.props.selected,size:a.props.size||x,fullWidth:R,color:a.props.color||g,disabled:a.props.disabled||c}):null)}))}),w=X;export{w as T,Z as a};
