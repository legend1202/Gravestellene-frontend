import{b as F,j as e,n as w,S as x,T as h,ba as I,B as g,M as P,t as y,h as u,c as B,d as j,e as C,o as S,F as T,f as q,g as p,i as A}from"./index-HNXcBFmK.js";import{L}from"./ListItem-cpog5qFZ.js";import{P as U}from"./Pagination-_e_R5hex.js";function f({name:r,avatarUrl:i,message:a,tagUser:s,postedAt:m,hasReply:o}){const t=F();return e.jsxs(L,{sx:{p:0,pt:3,alignItems:"flex-start",...o&&{pl:8}},children:[e.jsx(w,{alt:r,src:i,sx:{mr:2,width:48,height:48}}),e.jsxs(x,{flexGrow:1,sx:{pb:3,borderBottom:l=>`solid 1px ${l.palette.divider}`},children:[e.jsx(h,{variant:"subtitle2",sx:{mb:.5},children:r}),e.jsx(h,{variant:"caption",sx:{color:"text.disabled"},children:I(m)}),e.jsxs(h,{variant:"body2",sx:{mt:1},children:[s&&e.jsxs(g,{component:"strong",sx:{mr:.5},children:["@",s]}),a]}),t.value&&e.jsx(g,{sx:{mt:2},children:e.jsx(P,{fullWidth:!0,autoFocus:!0,placeholder:"Write comment..."})})]}),!o&&e.jsx(y,{size:"small",color:t.value?"primary":"inherit",startIcon:e.jsx(u,{icon:"solar:pen-bold",width:16}),onClick:t.onToggle,sx:{right:0,position:"absolute"},children:"Reply"})]})}function k({comments:r}){return e.jsxs(e.Fragment,{children:[e.jsx(e.Fragment,{children:r.map(i=>{const{id:a,replyComment:s,name:m,users:o,message:t,avatarUrl:l,postedAt:c}=i,b=!!s.length;return e.jsxs(g,{children:[e.jsx(f,{name:m,message:t,postedAt:c,avatarUrl:l}),b&&s.map(d=>{const n=o.find(v=>v.id===d.userId);return e.jsx(f,{name:(n==null?void 0:n.name)||"",message:d.message,postedAt:d.postedAt,avatarUrl:(n==null?void 0:n.avatarUrl)||"",tagUser:d.tagUser,hasReply:!0},d.id)})]},a)})}),e.jsx(U,{count:8,sx:{my:5,mx:"auto"}})]})}function D(){const r=B().shape({comment:j().required("Comment is required"),name:j().required("Name is required"),email:j().required("Email is required").email("Email must be a valid email address")}),i={comment:"",name:"",email:""},a=C({resolver:S(r),defaultValues:i}),{reset:s,handleSubmit:m,formState:{isSubmitting:o}}=a,t=m(async l=>{try{await new Promise(c=>setTimeout(c,500)),s(),console.info("DATA",l)}catch(c){console.error(c)}});return e.jsx(T,{methods:a,onSubmit:t,children:e.jsxs(x,{spacing:3,children:[e.jsx(q,{name:"comment",placeholder:"Write some of your comments...",multiline:!0,rows:4}),e.jsxs(x,{direction:"row",alignItems:"center",children:[e.jsxs(x,{direction:"row",alignItems:"center",flexGrow:1,children:[e.jsx(p,{children:e.jsx(u,{icon:"solar:gallery-add-bold"})}),e.jsx(p,{children:e.jsx(u,{icon:"eva:attach-2-fill"})}),e.jsx(p,{children:e.jsx(u,{icon:"eva:smiling-face-fill"})})]}),e.jsx(A,{type:"submit",variant:"contained",loading:o,children:"Post comment"})]})]})})}export{D as P,k as a};