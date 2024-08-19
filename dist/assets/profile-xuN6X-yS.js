import{r as h,j as e,aj as k,Z as y,L as g,v as x,b5 as F,f as j,g as n,S as c,an as $,b3 as U,I as R,E as b,bj as H,K as u,T as f,av as E,aH as G,l as M,c0 as z,N as v,B as N,au as B,z as q,Y as I,q as O,c1 as V,ay as J,aA as K,a6 as S,G as Y,C as Z,J as Q,p as T,c2 as C,bs as X,c3 as ee,bt as se,c4 as re,c5 as oe,c6 as te,c7 as ne,H as ae}from"./index-N8SydwAL.js";import{c as ie,a as L}from"./format-number-wF8MOw5S.js";import{F as le}from"./FormControlLabel-kJYRDF2M.js";import{C as ce}from"./Checkbox-aend9-0B.js";import{A as de}from"./AvatarGroup-w2IUQaKN.js";import{F as A}from"./Fab-_JNviI15.js";import{u as xe,L as he}from"./use-light-box-rHYbAlkd.js";import"./SwitchBase-GkPf3Zwx.js";function pe({post:r}){var P;const{user:s}=G(),t=h.useRef(null),a=h.useRef(null),[o,i]=h.useState(""),m=h.useCallback(d=>{i(d.target.value)},[]),p=h.useCallback(()=>{a.current&&a.current.click()},[]),l=h.useCallback(()=>{t.current&&t.current.focus()},[]),w=e.jsx(k,{disableTypography:!0,avatar:e.jsx(y,{src:s==null?void 0:s.photoURL,alt:s==null?void 0:s.displayName,children:(P=s==null?void 0:s.displayName)==null?void 0:P.charAt(0).toUpperCase()}),title:e.jsx(g,{color:"inherit",variant:"subtitle1",children:s==null?void 0:s.displayName}),subheader:e.jsx(x,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:F(r.createdAt)}),action:e.jsx(j,{children:e.jsx(n,{icon:"eva:more-vertical-fill"})})}),D=e.jsx(c,{spacing:1.5,sx:{px:3,pb:2},children:r.comments.map(d=>e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(y,{alt:d.author.name,src:d.author.avatarUrl}),e.jsxs($,{sx:{p:1.5,flexGrow:1,bgcolor:"background.neutral"},children:[e.jsxs(c,{sx:{mb:.5},alignItems:{sm:"center"},justifyContent:"space-between",direction:{xs:"column",sm:"row"},children:[e.jsx(x,{sx:{typography:"subtitle2"},children:d.author.name}),e.jsx(x,{sx:{typography:"caption",color:"text.disabled"},children:F(d.createdAt)})]}),e.jsx(x,{sx:{typography:"body2",color:"text.secondary"},children:d.message})]})]},d.id))}),W=e.jsxs(c,{spacing:2,direction:"row",alignItems:"center",sx:{p:d=>d.spacing(0,3,3,3)},children:[e.jsx(y,{src:s==null?void 0:s.photoURL,alt:s==null?void 0:s.displayName}),e.jsx(U,{fullWidth:!0,value:o,inputRef:t,placeholder:"Write a comment…",onChange:m,endAdornment:e.jsxs(R,{position:"end",sx:{mr:1},children:[e.jsx(j,{size:"small",onClick:p,children:e.jsx(n,{icon:"solar:gallery-add-bold"})}),e.jsx(j,{size:"small",children:e.jsx(n,{icon:"eva:smiling-face-fill"})})]}),sx:{pl:1.5,height:40,borderRadius:1,border:d=>`solid 1px ${b(d.palette.grey[500],.32)}`}}),e.jsx("input",{type:"file",ref:a,style:{display:"none"}})]}),_=e.jsxs(c,{direction:"row",alignItems:"center",sx:{p:d=>d.spacing(2,3,3,3)},children:[e.jsx(le,{control:e.jsx(ce,{defaultChecked:!0,color:"error",icon:e.jsx(n,{icon:"solar:heart-bold"}),checkedIcon:e.jsx(n,{icon:"solar:heart-bold"})}),label:ie(r.personLikes.length),sx:{mr:1}}),!!r.personLikes.length&&e.jsx(de,{sx:{[`& .${H.avatar}`]:{width:32,height:32}},children:r.personLikes.map(d=>e.jsx(y,{alt:d.name,src:d.avatarUrl},d.name))}),e.jsx(x,{sx:{flexGrow:1}}),e.jsx(j,{onClick:l,children:e.jsx(n,{icon:"solar:chat-round-dots-bold"})}),e.jsx(j,{children:e.jsx(n,{icon:"solar:share-bold"})})]});return e.jsxs(u,{children:[w,e.jsx(f,{variant:"body2",sx:{p:d=>d.spacing(3,3,2,3)},children:r.message}),e.jsx(x,{sx:{p:1},children:e.jsx(E,{alt:r.media,src:r.media,ratio:"16/9",sx:{borderRadius:1.5}})}),_,!!r.comments.length&&D,W]})}function me({info:r,posts:s}){const t=h.useRef(null),a=()=>{t.current&&t.current.click()},o=e.jsx(u,{sx:{py:3,textAlign:"center",typography:"h4"},children:e.jsxs(c,{direction:"row",divider:e.jsx(M,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),children:[e.jsxs(c,{width:1,children:[L(r.totalFollowers),e.jsx(x,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Follower"})]}),e.jsxs(c,{width:1,children:[L(r.totalFollowing),e.jsx(x,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Following"})]})]})}),i=e.jsxs(u,{children:[e.jsx(k,{title:"About"}),e.jsxs(c,{spacing:2,sx:{p:3},children:[e.jsx(x,{sx:{typography:"body2"},children:r.quote}),e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(n,{icon:"mingcute:location-fill",width:24}),e.jsxs(x,{sx:{typography:"body2"},children:["Live at ",e.jsx(g,{variant:"subtitle2",color:"inherit",children:r.country})]})]}),e.jsxs(c,{direction:"row",sx:{typography:"body2"},children:[e.jsx(n,{icon:"fluent:mail-24-filled",width:24,sx:{mr:2}}),r.email]}),e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(n,{icon:"ic:round-business-center",width:24}),e.jsxs(x,{sx:{typography:"body2"},children:[r.role," ","at ",e.jsx(g,{variant:"subtitle2",color:"inherit",children:r.company})]})]}),e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(n,{icon:"ic:round-business-center",width:24}),e.jsxs(x,{sx:{typography:"body2"},children:["Studied at ",e.jsx(g,{variant:"subtitle2",color:"inherit",children:r.school})]})]})]})]}),m=e.jsxs(u,{sx:{p:3},children:[e.jsx(U,{multiline:!0,fullWidth:!0,rows:4,placeholder:"Share what you are thinking here...",sx:{p:2,mb:3,borderRadius:1,border:l=>`solid 1px ${b(l.palette.grey[500],.2)}`}}),e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsxs(c,{direction:"row",spacing:1,alignItems:"center",sx:{color:"text.secondary"},children:[e.jsxs(A,{size:"small",color:"inherit",variant:"softExtended",onClick:a,children:[e.jsx(n,{icon:"solar:gallery-wide-bold",width:24,sx:{color:"success.main"}}),"Image/Video"]}),e.jsxs(A,{size:"small",color:"inherit",variant:"softExtended",children:[e.jsx(n,{icon:"solar:videocamera-record-bold",width:24,sx:{color:"error.main"}}),"Streaming"]})]}),e.jsx(N,{variant:"contained",children:"Post"})]}),e.jsx("input",{ref:t,type:"file",style:{display:"none"}})]}),p=e.jsxs(u,{children:[e.jsx(k,{title:"Social"}),e.jsx(c,{spacing:2,sx:{p:3},children:z.map(l=>e.jsxs(c,{spacing:2,direction:"row",sx:{wordBreak:"break-all",typography:"body2"},children:[e.jsx(n,{icon:l.icon,width:24,sx:{flexShrink:0,color:l.color}}),e.jsxs(g,{color:"inherit",children:[l.value==="facebook"&&r.socialLinks.facebook,l.value==="instagram"&&r.socialLinks.instagram,l.value==="linkedin"&&r.socialLinks.linkedin,l.value==="twitter"&&r.socialLinks.twitter]})]},l.name))})]});return e.jsxs(v,{container:!0,spacing:3,children:[e.jsx(v,{xs:12,md:4,children:e.jsxs(c,{spacing:3,children:[o,i,p]})}),e.jsx(v,{xs:12,md:8,children:e.jsxs(c,{spacing:3,children:[m,s.map(l=>e.jsx(pe,{post:l},l.id))]})})]})}function ue({name:r,avatarUrl:s,role:t,coverUrl:a}){const o=B();return e.jsx(x,{sx:{...q({color:b(o.palette.primary.darker,.8),imgUrl:a}),height:1,color:"common.white"},children:e.jsxs(c,{direction:{xs:"column",md:"row"},sx:{left:{md:24},bottom:{md:24},zIndex:{md:10},pt:{xs:6,md:0},position:{md:"absolute"}},children:[e.jsx(y,{alt:r,src:s,sx:{mx:"auto",width:{xs:64,md:128},height:{xs:64,md:128},border:`solid 2px ${o.palette.common.white}`},children:r==null?void 0:r.charAt(0).toUpperCase()}),e.jsx(I,{sx:{mt:3,ml:{md:3},textAlign:{xs:"center",md:"unset"}},primary:r,secondary:t,primaryTypographyProps:{typography:"h4"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}})]})})}function je({friends:r,searchFriends:s,onSearchFriends:t}){const a=ge({inputData:r,query:s}),o=!a.length&&!!s;return e.jsxs(e.Fragment,{children:[e.jsxs(c,{spacing:2,justifyContent:"space-between",direction:{xs:"column",sm:"row"},sx:{my:5},children:[e.jsx(f,{variant:"h4",children:"Friends"}),e.jsx(O,{value:s,onChange:t,placeholder:"Search friends...",InputProps:{startAdornment:e.jsx(R,{position:"start",children:e.jsx(n,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{width:{xs:1,sm:260}}})]}),o?e.jsx(V,{query:s,sx:{mt:10}}):e.jsx(x,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:a.map(i=>e.jsx(ye,{friend:i},i.id))})]})}function ye({friend:r}){const{name:s,role:t,avatarUrl:a}=r,o=J(),i=()=>{o.onClose(),console.info("DELETE",s)},m=()=>{o.onClose(),console.info("EDIT",s)};return e.jsxs(e.Fragment,{children:[e.jsxs(u,{sx:{py:5,display:"flex",position:"relative",alignItems:"center",flexDirection:"column"},children:[e.jsx(y,{alt:s,src:a,sx:{width:64,height:64,mb:3}}),e.jsx(g,{variant:"subtitle1",color:"text.primary",children:s}),e.jsx(f,{variant:"body2",sx:{color:"text.secondary",mb:1,mt:.5},children:t}),e.jsx(c,{alignItems:"center",justifyContent:"center",direction:"row",children:z.map(p=>e.jsx(j,{sx:{color:p.color,"&:hover":{bgcolor:b(p.color,.08)}},children:e.jsx(n,{icon:p.icon})},p.name))}),e.jsx(j,{color:o.open?"inherit":"default",onClick:o.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(n,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(K,{open:o.open,onClose:o.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(S,{onClick:i,sx:{color:"error.main"},children:[e.jsx(n,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(S,{onClick:m,children:[e.jsx(n,{icon:"solar:pen-bold"}),"Edit"]})]})]})}function ge({inputData:r,query:s}){return s?r.filter(t=>t.name.toLowerCase().indexOf(s.toLowerCase())!==-1):r}function be({gallery:r}){const s=B(),t=r.map(o=>({src:o.imageUrl})),a=xe(t);return e.jsxs(e.Fragment,{children:[e.jsx(f,{variant:"h4",sx:{my:5},children:"Gallery"}),e.jsx(x,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:r.map(o=>e.jsxs(u,{sx:{cursor:"pointer",color:"common.white"},children:[e.jsx(j,{color:"inherit",sx:{position:"absolute",top:8,right:8,zIndex:9},children:e.jsx(n,{icon:"eva:more-vertical-fill"})}),e.jsx(I,{sx:{p:3,left:0,width:1,bottom:0,zIndex:9,position:"absolute"},primary:o.title,secondary:F(o.postedAt),primaryTypographyProps:{noWrap:!0,typography:"subtitle1"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}}),e.jsx(E,{alt:"gallery",ratio:"1/1",src:o.imageUrl,onClick:()=>a.onOpen(o.imageUrl),overlay:`linear-gradient(to bottom, ${b(s.palette.grey[900],0)} 0%, ${s.palette.grey[900]} 75%)`})]},o.id))}),e.jsx(he,{index:a.selected,slides:t,open:a.open,close:a.onClose})]})}function fe({followers:r}){const s=r.slice(4,8).map(i=>i.id),[t,a]=h.useState(s),o=h.useCallback(i=>{const m=t.includes(i)?t.filter(p=>p!==i):[...t,i];a(m)},[t]);return e.jsxs(e.Fragment,{children:[e.jsx(f,{variant:"h4",sx:{my:5},children:"Followers"}),e.jsx(x,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:r.map(i=>e.jsx(we,{follower:i,selected:t.includes(i.id),onSelected:()=>o(i.id)},i.id))})]})}function we({follower:r,selected:s,onSelected:t}){const{name:a,country:o,avatarUrl:i}=r;return e.jsxs(u,{sx:{display:"flex",alignItems:"center",p:m=>m.spacing(3,2,3,3)},children:[e.jsx(y,{alt:a,src:i,sx:{width:48,height:48,mr:2}}),e.jsx(I,{primary:a,secondary:e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:"mingcute:location-fill",width:16,sx:{flexShrink:0,mr:.5}}),o," country country country country country country country country country"]}),primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,display:"flex",component:"span",alignItems:"center",typography:"caption",color:"text.disabled"}}),e.jsx(N,{size:"small",variant:s?"text":"outlined",color:s?"success":"inherit",startIcon:s?e.jsx(n,{width:18,icon:"eva:checkmark-fill",sx:{mr:-.75}}):null,onClick:t,sx:{flexShrink:0,ml:1.5},children:s?"Followed":"Follow"})]})}const ve=[{value:"profile",label:"Profile",icon:e.jsx(n,{icon:"solar:user-id-bold",width:24})},{value:"followers",label:"Followers",icon:e.jsx(n,{icon:"solar:heart-bold",width:24})},{value:"friends",label:"Friends",icon:e.jsx(n,{icon:"solar:users-group-rounded-bold",width:24})},{value:"gallery",label:"Gallery",icon:e.jsx(n,{icon:"solar:gallery-wide-bold",width:24})}];function Ce(){const r=Y(),{user:s}=G(),[t,a]=h.useState(""),[o,i]=h.useState("profile"),m=h.useCallback((l,w)=>{i(w)},[]),p=h.useCallback(l=>{a(l.target.value)},[]);return e.jsxs(Z,{maxWidth:r.themeStretch?!1:"lg",children:[e.jsx(Q,{heading:"Profile",links:[{name:"Dashboard",href:T.dashboard.root},{name:"User",href:T.dashboard.user.root},{name:s==null?void 0:s.displayName}],sx:{mb:{xs:3,md:5}}}),e.jsxs(u,{sx:{mb:3,height:290},children:[e.jsx(ue,{role:C.role,name:s==null?void 0:s.displayName,avatarUrl:s==null?void 0:s.photoURL,coverUrl:C.coverUrl}),e.jsx(X,{value:o,onChange:m,sx:{width:1,bottom:0,zIndex:9,position:"absolute",bgcolor:"background.paper",[`& .${ee.flexContainer}`]:{pr:{md:3},justifyContent:{sm:"center",md:"flex-end"}}},children:ve.map(l=>e.jsx(se,{value:l.value,icon:l.icon,label:l.label},l.value))})]}),o==="profile"&&e.jsx(me,{info:C,posts:re}),o==="followers"&&e.jsx(fe,{followers:oe}),o==="friends"&&e.jsx(je,{friends:te,searchFriends:t,onSearchFriends:p}),o==="gallery"&&e.jsx(be,{gallery:ne})]})}function Ue(){return e.jsxs(e.Fragment,{children:[e.jsx(ae,{children:e.jsx("title",{children:" Dashboard: User Profile"})}),e.jsx(Ce,{})]})}export{Ue as default};
