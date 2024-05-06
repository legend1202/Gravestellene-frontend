import{y as T,j as s,s as m,ar as A,ak as d,cb as w,am as P,av as N,au as _,T as M,r as x,al as U,bz as H,an as O,ao as W,B as i,L as $,R as q,S as F}from"./index-0ZRfM3mG.js";const G=T(s.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),V=["slots","slotProps"],D=m(A)(({theme:e})=>d({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":d({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":d({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:w(e.palette.grey[200],.12)}:{backgroundColor:w(e.palette.grey[600],.12)})})),J=m(G)({width:24,height:16});function K(e){const{slots:r={},slotProps:a={}}=e,t=P(e,V),o=e;return s.jsx("li",{children:s.jsx(D,d({focusRipple:!0},t,{ownerState:o,children:s.jsx(J,d({as:r.CollapsedIcon,ownerState:o},a.collapsedIcon))}))})}function Q(e){return _("MuiBreadcrumbs",e)}const X=N("MuiBreadcrumbs",["root","ol","li","separator"]),Y=X,Z=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],ee=e=>{const{classes:r}=e;return W({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},Q,r)},se=m(M,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${Y.li}`]:r.li},r.root]})({}),re=m("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),oe=m("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function te(e,r,a,t){return e.reduce((o,p,c)=>(c<e.length-1?o=o.concat(p,s.jsx(oe,{"aria-hidden":!0,className:r,ownerState:t,children:a},`separator-${c}`)):o.push(p),o),[])}const ae=x.forwardRef(function(r,a){const t=U({props:r,name:"MuiBreadcrumbs"}),{children:o,className:p,component:c="nav",slots:g={},slotProps:l={},expandText:B="Show path",itemsAfterCollapse:b=1,itemsBeforeCollapse:f=1,maxItems:y=8,separator:S="/"}=t,z=P(t,Z),[R,L]=x.useState(!1),u=d({},t,{component:c,expanded:R,expandText:B,itemsAfterCollapse:b,itemsBeforeCollapse:f,maxItems:y,separator:S}),h=ee(u),k=H({elementType:g.CollapsedIcon,externalSlotProps:l.collapsedIcon,ownerState:u}),v=x.useRef(null),E=n=>{const j=()=>{L(!0);const I=v.current.querySelector("a[href],button,[tabindex]");I&&I.focus()};return f+b>=n.length?n:[...n.slice(0,f),s.jsx(K,{"aria-label":B,slots:{CollapsedIcon:g.CollapsedIcon},slotProps:{collapsedIcon:k},onClick:j},"ellipsis"),...n.slice(n.length-b,n.length)]},C=x.Children.toArray(o).filter(n=>x.isValidElement(n)).map((n,j)=>s.jsx("li",{className:h.li,children:n},`child-${j}`));return s.jsx(se,d({ref:a,component:c,color:"text.secondary",className:O(h.root,p),ownerState:u},z,{children:s.jsx(re,{className:h.ol,ref:v,ownerState:u,children:te(R||y&&C.length<=y?C:E(C),h.separator,S,u)})}))}),ne=ae;function le({link:e,activeLast:r,disabled:a}){const t={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...a&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},o=s.jsxs(s.Fragment,{children:[e.icon&&s.jsx(i,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:e.icon}),e.name]});return e.href?s.jsx($,{component:q,href:e.href,sx:t,children:o}):s.jsxs(i,{sx:t,children:[" ",o," "]})}function de({links:e,action:r,heading:a,moreLink:t,activeLast:o,sx:p,...c}){const g=e[e.length-1].name;return s.jsxs(i,{sx:{...p},children:[s.jsxs(F,{direction:"row",alignItems:"center",children:[s.jsxs(i,{sx:{flexGrow:1},children:[a&&s.jsx(M,{variant:"h4",gutterBottom:!0,children:a}),!!e.length&&s.jsx(ne,{separator:s.jsx(ce,{}),...c,children:e.map(l=>s.jsx(le,{link:l,activeLast:o,disabled:l.name===g},l.name||""))})]}),r&&s.jsxs(i,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!t&&s.jsx(i,{sx:{mt:2},children:t.map(l=>s.jsx($,{href:l,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:l},l))})]})}function ce(){return s.jsx(i,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}export{de as C};
