import{b as F,j as e,A as w,S as x,T as h,aV as I,B as f,i as P,d as u,c as p}from"./index-xccKnqtj.js";import{L as y}from"./ListItem-SIad6pfE.js";import{T}from"./TextField-_2MBvEfR.js";import{P as A}from"./Pagination-Gap7x2Il.js";import{c as B,a as j}from"./index.esm-YEE7kA5n.js";import{u as C,F as S}from"./form-provider-AIk6qsYQ.js";import{o as q}from"./yup-kNUoSS0a.js";import"./image-ihTI-eUB.js";import"./mui-one-time-password-input.es-8WdpYP-F.js";import"./styles-XyZpQVQ4.js";import{R as L}from"./rhf-text-field-M35LS_3G.js";import{L as U}from"./LoadingButton-rYn3LTh9.js";function g({name:r,avatarUrl:n,message:o,tagUser:t,postedAt:m,hasReply:i}){const s=F();return e.jsxs(y,{sx:{p:0,pt:3,alignItems:"flex-start",...i&&{pl:8}},children:[e.jsx(w,{alt:r,src:n,sx:{mr:2,width:48,height:48}}),e.jsxs(x,{flexGrow:1,sx:{pb:3,borderBottom:l=>`solid 1px ${l.palette.divider}`},children:[e.jsx(h,{variant:"subtitle2",sx:{mb:.5},children:r}),e.jsx(h,{variant:"caption",sx:{color:"text.disabled"},children:I(m)}),e.jsxs(h,{variant:"body2",sx:{mt:1},children:[t&&e.jsxs(f,{component:"strong",sx:{mr:.5},children:["@",t]}),o]}),s.value&&e.jsx(f,{sx:{mt:2},children:e.jsx(T,{fullWidth:!0,autoFocus:!0,placeholder:"Write comment..."})})]}),!i&&e.jsx(P,{size:"small",color:s.value?"primary":"inherit",startIcon:e.jsx(u,{icon:"solar:pen-bold",width:16}),onClick:s.onToggle,sx:{right:0,position:"absolute"},children:"Reply"})]})}function K({comments:r}){return e.jsxs(e.Fragment,{children:[e.jsx(e.Fragment,{children:r.map(n=>{const{id:o,replyComment:t,name:m,users:i,message:s,avatarUrl:l,postedAt:c}=n,v=!!t.length;return e.jsxs(f,{children:[e.jsx(g,{name:m,message:s,postedAt:c,avatarUrl:l}),v&&t.map(d=>{const a=i.find(b=>b.id===d.userId);return e.jsx(g,{name:(a==null?void 0:a.name)||"",message:d.message,postedAt:d.postedAt,avatarUrl:(a==null?void 0:a.avatarUrl)||"",tagUser:d.tagUser,hasReply:!0},d.id)})]},o)})}),e.jsx(A,{count:8,sx:{my:5,mx:"auto"}})]})}function M(){const r=B().shape({comment:j().required("Comment is required"),name:j().required("Name is required"),email:j().required("Email is required").email("Email must be a valid email address")}),n={comment:"",name:"",email:""},o=C({resolver:q(r),defaultValues:n}),{reset:t,handleSubmit:m,formState:{isSubmitting:i}}=o,s=m(async l=>{try{await new Promise(c=>setTimeout(c,500)),t(),console.info("DATA",l)}catch(c){console.error(c)}});return e.jsx(S,{methods:o,onSubmit:s,children:e.jsxs(x,{spacing:3,children:[e.jsx(L,{name:"comment",placeholder:"Write some of your comments...",multiline:!0,rows:4}),e.jsxs(x,{direction:"row",alignItems:"center",children:[e.jsxs(x,{direction:"row",alignItems:"center",flexGrow:1,children:[e.jsx(p,{children:e.jsx(u,{icon:"solar:gallery-add-bold"})}),e.jsx(p,{children:e.jsx(u,{icon:"eva:attach-2-fill"})}),e.jsx(p,{children:e.jsx(u,{icon:"eva:smiling-face-fill"})})]}),e.jsx(U,{type:"submit",variant:"contained",loading:i,children:"Post comment"})]})]})})}export{M as P,K as a};
