import{az as A,aA as W,t as F,aw as X,ap as i,c0 as D,r as G,ar as H,X as J,c6 as K,j as x,as as M,E as Q,at as T}from"./index-tv0ZIiTC.js";function V(e){return A("PrivateSwitchBase",e)}W("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:o,checked:d,disabled:l,edge:a}=e,r={root:["root",d&&"checked",l&&"disabled",a&&`edge${Q(a)}`],input:["input"]};return T(r,V,o)},ee=F(X)(({ownerState:e})=>i({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=F("input",{shouldForwardProp:D})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),te=G.forwardRef(function(o,d){const{autoFocus:l,checked:a,checkedIcon:r,className:w,defaultChecked:h,disabled:y,disableFocusRipple:p=!1,edge:R=!1,icon:S,id:P,inputProps:I,inputRef:v,name:j,onBlur:f,onChange:g,onFocus:m,readOnly:z,required:E=!1,tabIndex:N,type:n,value:b}=o,U=H(o,Y),[k,L]=J({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),t=K(),_=s=>{m&&m(s),t&&t.onFocus&&t.onFocus(s)},q=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;L(C),g&&g(s,C)};let c=y;t&&typeof c>"u"&&(c=t.disabled);const $=n==="checkbox"||n==="radio",u=i({},o,{checked:k,disabled:c,disableFocusRipple:p,edge:R}),B=Z(u);return x.jsxs(ee,i({component:"span",className:M(B.root,w),centerRipple:!0,focusRipple:!p,disabled:c,tabIndex:null,role:void 0,onFocus:_,onBlur:q,ownerState:u,ref:d},U,{children:[x.jsx(se,i({autoFocus:l,checked:a,defaultChecked:h,className:B.input,disabled:c,id:$?P:void 0,name:j,onChange:O,readOnly:z,ref:v,required:E,ownerState:u,tabIndex:N,type:n},n==="checkbox"&&b===void 0?{}:{value:b},I)),k?r:S]}))}),ae=te;export{ae as S};