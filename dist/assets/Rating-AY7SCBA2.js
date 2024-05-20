import{K as ne,j as i,v as D,cI as $,F as te,aq as l,bE as be,r as L,ar as Fe,as as ie,X as se,Y as xe,aC as Re,a0 as Ve,$ as Ce,at as X,au as Ae,cJ as Se}from"./index-xccKnqtj.js";import{v as Me}from"./visuallyHidden-DVicuktI.js";const Le=ne(i.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),je=ne(i.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),Ee=["value"],He=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function we(o,e,t){return o<e?e:o>t?t:o}function ze(o){const e=o.toString().split(".")[1];return e?e.length:0}function K(o,e){if(o==null)return o;const t=Math.round(o/e)*e;return Number(t.toFixed(ze(e)))}const Ie=o=>{const{classes:e,size:t,readOnly:f,disabled:j,emptyValueFocused:y,focusVisible:v}=o,b={root:["root",`size${te(t)}`,j&&"disabled",v&&"focusVisible",f&&"readOnly"],label:["label","pristine"],labelEmptyValue:[y&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Ae(b,Se,e)},$e=D("span",{name:"MuiRating",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${$.visuallyHidden}`]:e.visuallyHidden},e.root,e[`size${te(t.size)}`],t.readOnly&&e.readOnly]}})(({theme:o,ownerState:e})=>l({display:"inline-flex",position:"relative",fontSize:o.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${$.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${$.focusVisible} .${$.iconActive}`]:{outline:"1px solid #999"},[`& .${$.visuallyHidden}`]:Me},e.size==="small"&&{fontSize:o.typography.pxToRem(18)},e.size==="large"&&{fontSize:o.typography.pxToRem(30)},e.readOnly&&{pointerEvents:"none"})),ae=D("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:o},e)=>[e.label,o.emptyValueFocused&&e.labelEmptyValueActive]})(({ownerState:o})=>l({cursor:"inherit"},o.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Oe=D("span",{name:"MuiRating",slot:"Icon",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.icon,t.iconEmpty&&e.iconEmpty,t.iconFilled&&e.iconFilled,t.iconHover&&e.iconHover,t.iconFocus&&e.iconFocus,t.iconActive&&e.iconActive]}})(({theme:o,ownerState:e})=>l({display:"flex",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),pointerEvents:"none"},e.iconActive&&{transform:"scale(1.2)"},e.iconEmpty&&{color:(o.vars||o).palette.action.disabled})),Te=D("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:o=>be(o)&&o!=="iconActive",overridesResolver:(o,e)=>{const{iconActive:t}=o;return[e.decimal,t&&e.iconActive]}})(({iconActive:o})=>l({position:"relative"},o&&{transform:"scale(1.2)"}));function Ne(o){const e=ie(o,Ee);return i.jsx("span",l({},e))}function oe(o){const{classes:e,disabled:t,emptyIcon:f,focus:j,getLabelText:y,highlightSelectedOnly:v,hover:b,icon:O,IconContainerComponent:E,isActive:T,itemValue:c,labelProps:H,name:F,onBlur:W,onChange:x,onClick:R,onFocus:N,readOnly:P,ownerState:a,ratingValue:u,ratingValueRounded:U}=o,V=v?c===u:c<=u,B=c<=b,C=c<=j,Y=c===U,w=se(),h=i.jsx(Oe,{as:E,value:c,className:X(e.icon,V?e.iconFilled:e.iconEmpty,B&&e.iconHover,C&&e.iconFocus,T&&e.iconActive),ownerState:l({},a,{iconEmpty:!V,iconFilled:V,iconHover:B,iconFocus:C,iconActive:T}),children:f&&!V?f:O});return P?i.jsx("span",l({},H,{children:h})):i.jsxs(L.Fragment,{children:[i.jsxs(ae,l({ownerState:l({},a,{emptyValueFocused:void 0}),htmlFor:w},H,{children:[h,i.jsx("span",{className:e.visuallyHidden,children:y(c)})]})),i.jsx("input",{className:e.visuallyHidden,onFocus:N,onBlur:W,onChange:x,onClick:R,disabled:t,value:c,id:w,type:"radio",name:F,checked:Y})]})}const Pe=i.jsx(Le,{fontSize:"inherit"}),Be=i.jsx(je,{fontSize:"inherit"});function ke(o){return`${o} Star${o!==1?"s":""}`}const _e=L.forwardRef(function(e,t){const f=Fe({name:"MuiRating",props:e}),{className:j,defaultValue:y=null,disabled:v=!1,emptyIcon:b=Be,emptyLabelText:O="Empty",getLabelText:E=ke,highlightSelectedOnly:T=!1,icon:c=Pe,IconContainerComponent:H=Ne,max:F=5,name:W,onChange:x,onChangeActive:R,onMouseLeave:N,onMouseMove:P,precision:a=1,readOnly:u=!1,size:U="medium",value:V}=f,B=ie(f,He),C=se(W),[Y,w]=xe({controlled:V,default:y,name:"Rating"}),h=K(Y,a),le=Re(),[{hover:d,focus:k},z]=L.useState({hover:-1,focus:-1});let A=h;d!==-1&&(A=d),k!==-1&&(A=k);const{isFocusVisibleRef:G,onBlur:ce,onFocus:re,ref:ue}=Ve(),[de,q]=L.useState(!1),Q=L.useRef(),pe=Ce(ue,Q,t),fe=n=>{P&&P(n);const s=Q.current,{right:r,left:_,width:S}=s.getBoundingClientRect();let M;le.direction==="rtl"?M=(r-n.clientX)/S:M=(n.clientX-_)/S;let p=K(F*M+a/2,a);p=we(p,a,F),z(g=>g.hover===p&&g.focus===p?g:{hover:p,focus:p}),q(!1),R&&d!==p&&R(n,p)},me=n=>{N&&N(n);const s=-1;z({hover:s,focus:s}),R&&d!==s&&R(n,s)},Z=n=>{let s=n.target.value===""?null:parseFloat(n.target.value);d!==-1&&(s=d),w(s),x&&x(n,s)},ve=n=>{n.clientX===0&&n.clientY===0||(z({hover:-1,focus:-1}),w(null),x&&parseFloat(n.target.value)===h&&x(n,null))},he=n=>{re(n),G.current===!0&&q(!0);const s=parseFloat(n.target.value);z(r=>({hover:r.hover,focus:s}))},ge=n=>{if(d!==-1)return;ce(n),G.current===!1&&q(!1);const s=-1;z(r=>({hover:r.hover,focus:s}))},[ye,ee]=L.useState(!1),I=l({},f,{defaultValue:y,disabled:v,emptyIcon:b,emptyLabelText:O,emptyValueFocused:ye,focusVisible:de,getLabelText:E,icon:c,IconContainerComponent:H,max:F,precision:a,readOnly:u,size:U}),m=Ie(I);return i.jsxs($e,l({ref:pe,onMouseMove:fe,onMouseLeave:me,className:X(m.root,j,u&&"MuiRating-readOnly"),ownerState:I,role:u?"img":null,"aria-label":u?E(A):null},B,{children:[Array.from(new Array(F)).map((n,s)=>{const r=s+1,_={classes:m,disabled:v,emptyIcon:b,focus:k,getLabelText:E,highlightSelectedOnly:T,hover:d,icon:c,IconContainerComponent:H,name:C,onBlur:ge,onChange:Z,onClick:ve,onFocus:he,ratingValue:A,ratingValueRounded:h,readOnly:u,ownerState:I},S=r===Math.ceil(A)&&(d!==-1||k!==-1);if(a<1){const M=Array.from(new Array(1/a));return i.jsx(Te,{className:X(m.decimal,S&&m.iconActive),ownerState:I,iconActive:S,children:M.map((p,g)=>{const J=K(r-1+(g+1)*a,a);return i.jsx(oe,l({},_,{isActive:!1,itemValue:J,labelProps:{style:M.length-1===g?{}:{width:J===A?`${(g+1)*a*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),J)})},r)}return i.jsx(oe,l({},_,{isActive:S,itemValue:r}),r)}),!u&&!v&&i.jsxs(ae,{className:X(m.label,m.labelEmptyValue),ownerState:I,children:[i.jsx("input",{className:m.visuallyHidden,value:"",id:`${C}-empty`,type:"radio",name:C,checked:h==null,onFocus:()=>ee(!0),onBlur:()=>ee(!1),onChange:Z}),i.jsx("span",{className:m.visuallyHidden,children:O})]})]}))}),We=_e;export{We as R};
