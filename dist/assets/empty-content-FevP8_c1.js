import{j as t,S as p,al as r,B as d,T as o}from"./index-xccKnqtj.js";function h({title:n,imgUrl:x,action:s,filled:c,description:a,sx:i,...l}){return t.jsxs(p,{flexGrow:1,alignItems:"center",justifyContent:"center",sx:{px:3,height:1,...c&&{borderRadius:2,bgcolor:e=>r(e.palette.grey[500],.04),border:e=>`dashed 1px ${r(e.palette.grey[500],.08)}`},...i},...l,children:[t.jsx(d,{component:"img",alt:"empty content",src:x||"/assets/icons/empty/ic_content.svg",sx:{width:1,maxWidth:160}}),n&&t.jsx(o,{variant:"h6",component:"span",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:n}),a&&t.jsx(o,{variant:"caption",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:a}),s&&s]})}export{h as E};