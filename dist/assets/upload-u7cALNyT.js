import{j as e,w as z,al as i,dA as B,B as s,T as h,S as x,dB as U,c as k,d as A,i as E}from"./index-xccKnqtj.js";import{u as M,M as W}from"./preview-multi-file-BBKR0arB.js";import{d as T}from"./format-number-po7E8qFT.js";import{I as $}from"./image-ihTI-eUB.js";function q({fileRejections:t}){return t.length?e.jsx(z,{variant:"outlined",sx:{py:1,px:2,mt:3,textAlign:"left",borderStyle:"dashed",borderColor:"error.main",bgcolor:n=>i(n.palette.error.main,.08)},children:t.map(({file:n,errors:c})=>{const{path:a,size:o}=B(n);return e.jsxs(s,{sx:{my:1},children:[e.jsxs(h,{variant:"subtitle2",noWrap:!0,children:[a," - ",o?T(o):""]}),c.map(l=>e.jsxs(s,{component:"span",sx:{typography:"caption"},children:["- ",l.message]},l.code))]},a)})}):null}function G({imgUrl:t=""}){return e.jsx(s,{sx:{p:1,top:0,left:0,width:1,height:1,position:"absolute"},children:e.jsx($,{alt:"file preview",src:t,sx:{width:1,height:1,borderRadius:1}})})}function O({disabled:t,multiple:n=!1,error:c,helperText:a,file:o,onDelete:l,files:p,thumbnail:m,onUpload:H,onRemove:u,onRemoveAll:g,sx:j,...y}){const{getRootProps:v,getInputProps:w,isDragActive:b,isDragReject:f,fileRejections:P}=M({multiple:n,disabled:t,...y}),d=!!o&&!n,I=!!p&&n&&!!p.length,D=f||!!c,R=e.jsxs(x,{spacing:3,alignItems:"center",justifyContent:"center",flexWrap:"wrap",children:[e.jsx(U,{sx:{width:1,maxWidth:200}}),e.jsxs(x,{spacing:1,sx:{textAlign:"center"},children:[e.jsx(h,{variant:"h6",children:"Drop or Select file"}),e.jsxs(h,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click",e.jsx(s,{component:"span",sx:{mx:.5,color:"primary.main",textDecoration:"underline"},children:"browse"}),"thorough your machine"]})]})]}),S=e.jsx(G,{imgUrl:typeof o=="string"?o:o==null?void 0:o.preview}),C=d&&l&&e.jsx(k,{size:"small",onClick:l,sx:{top:16,right:16,zIndex:9,position:"absolute",color:r=>i(r.palette.common.white,.8),bgcolor:r=>i(r.palette.grey[900],.72),"&:hover":{bgcolor:r=>i(r.palette.grey[900],.48)}},children:e.jsx(A,{icon:"mingcute:close-line",width:18})}),F=I&&e.jsxs(e.Fragment,{children:[e.jsx(s,{sx:{my:3},children:e.jsx(W,{files:p,thumbnail:m,onRemove:u})}),e.jsx(x,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:g&&e.jsx(E,{color:"inherit",variant:"outlined",size:"small",onClick:g,children:"Remove All"})})]});return e.jsxs(s,{sx:{width:1,position:"relative",...j},children:[e.jsxs(s,{...v(),sx:{p:5,outline:"none",borderRadius:1,cursor:"pointer",overflow:"hidden",position:"relative",bgcolor:r=>i(r.palette.grey[500],.08),border:r=>`1px dashed ${i(r.palette.grey[500],.2)}`,transition:r=>r.transitions.create(["opacity","padding"]),"&:hover":{opacity:.72},...b&&{opacity:.72},...t&&{opacity:.48,pointerEvents:"none"},...D&&{color:"error.main",borderColor:"error.main",bgcolor:r=>i(r.palette.error.main,.08)},...d&&{padding:"24% 0"}},children:[e.jsx("input",{...w()}),d?S:R]}),C,a&&a,e.jsx(q,{fileRejections:P}),F]})}export{q as R,O as U};