import{j as r,B as u,aB as e,h}from"./index-HNXcBFmK.js";import{u as g}from"./preview-multi-file-9P5csR_D.js";function y({placeholder:a,error:i,disabled:t,sx:s,...n}){const{getRootProps:p,getInputProps:c,isDragActive:l,isDragReject:d}=g({disabled:t,...n}),x=d||i;return r.jsxs(u,{...p(),sx:{m:.5,width:64,height:64,flexShrink:0,display:"flex",borderRadius:1,cursor:"pointer",alignItems:"center",color:"text.disabled",justifyContent:"center",bgcolor:o=>e(o.palette.grey[500],.08),border:o=>`dashed 1px ${e(o.palette.grey[500],.16)}`,...l&&{opacity:.72},...t&&{opacity:.48,pointerEvents:"none"},...x&&{color:"error.main",borderColor:"error.main",bgcolor:o=>e(o.palette.error.main,.08)},"&:hover":{opacity:.72},...s},children:[r.jsx("input",{...c()}),a||r.jsx(h,{icon:"eva:cloud-upload-fill",width:28})]})}export{y as U};