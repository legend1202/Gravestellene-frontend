import{r as h,j as e,A as y,L as g,B as x,aV as k,c as j,d as n,S as c,w as $,b8 as A,I as R,al as b,dr as H,T as f,bn as G,D as M,aL as D,G as v,i as E,aC as z,ak as V,g as I,b4 as O,b1 as q,b2 as X,b3 as S,h as Y,C as Z,p as T,dU as C,bb as J,dV as K,bc as Q,dW as ee,dX as re,dY as se,dZ as oe,H as te}from"./index-xccKnqtj.js";import"./index.esm-YEE7kA5n.js";import{I as B}from"./image-ihTI-eUB.js";import"./mui-one-time-password-input.es-8WdpYP-F.js";import"./styles-XyZpQVQ4.js";import{C as ne}from"./custom-breadcrumbs-l_npxqvb.js";import{b as ie,c as L}from"./format-number-po7E8qFT.js";import{C as F}from"./CardHeader-EZ_NOwqQ.js";import{F as ae}from"./FormControlLabel-rYqjbgl6.js";import{C as le}from"./Checkbox-d99zhaav.js";import{A as ce}from"./AvatarGroup-56z25LTf.js";import{C as u}from"./Card-tMu97UR4.js";import{F as U}from"./Fab-iQHHbkKd.js";import{T as de}from"./TextField-_2MBvEfR.js";import{u as xe,L as he}from"./use-light-box-p3l2XJiY.js";import"./SwitchBase-r3AAQIaf.js";function pe({post:s}){var P;const{user:r}=G(),t=h.useRef(null),i=h.useRef(null),[o,a]=h.useState(""),m=h.useCallback(d=>{a(d.target.value)},[]),p=h.useCallback(()=>{i.current&&i.current.click()},[]),l=h.useCallback(()=>{t.current&&t.current.focus()},[]),w=e.jsx(F,{disableTypography:!0,avatar:e.jsx(y,{src:r==null?void 0:r.photoURL,alt:r==null?void 0:r.displayName,children:(P=r==null?void 0:r.displayName)==null?void 0:P.charAt(0).toUpperCase()}),title:e.jsx(g,{color:"inherit",variant:"subtitle1",children:r==null?void 0:r.displayName}),subheader:e.jsx(x,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:k(s.createdAt)}),action:e.jsx(j,{children:e.jsx(n,{icon:"eva:more-vertical-fill"})})}),N=e.jsx(c,{spacing:1.5,sx:{px:3,pb:2},children:s.comments.map(d=>e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(y,{alt:d.author.name,src:d.author.avatarUrl}),e.jsxs($,{sx:{p:1.5,flexGrow:1,bgcolor:"background.neutral"},children:[e.jsxs(c,{sx:{mb:.5},alignItems:{sm:"center"},justifyContent:"space-between",direction:{xs:"column",sm:"row"},children:[e.jsx(x,{sx:{typography:"subtitle2"},children:d.author.name}),e.jsx(x,{sx:{typography:"caption",color:"text.disabled"},children:k(d.createdAt)})]}),e.jsx(x,{sx:{typography:"body2",color:"text.secondary"},children:d.message})]})]},d.id))}),W=e.jsxs(c,{spacing:2,direction:"row",alignItems:"center",sx:{p:d=>d.spacing(0,3,3,3)},children:[e.jsx(y,{src:r==null?void 0:r.photoURL,alt:r==null?void 0:r.displayName}),e.jsx(A,{fullWidth:!0,value:o,inputRef:t,placeholder:"Write a comment…",onChange:m,endAdornment:e.jsxs(R,{position:"end",sx:{mr:1},children:[e.jsx(j,{size:"small",onClick:p,children:e.jsx(n,{icon:"solar:gallery-add-bold"})}),e.jsx(j,{size:"small",children:e.jsx(n,{icon:"eva:smiling-face-fill"})})]}),sx:{pl:1.5,height:40,borderRadius:1,border:d=>`solid 1px ${b(d.palette.grey[500],.32)}`}}),e.jsx("input",{type:"file",ref:i,style:{display:"none"}})]}),_=e.jsxs(c,{direction:"row",alignItems:"center",sx:{p:d=>d.spacing(2,3,3,3)},children:[e.jsx(ae,{control:e.jsx(le,{defaultChecked:!0,color:"error",icon:e.jsx(n,{icon:"solar:heart-bold"}),checkedIcon:e.jsx(n,{icon:"solar:heart-bold"})}),label:ie(s.personLikes.length),sx:{mr:1}}),!!s.personLikes.length&&e.jsx(ce,{sx:{[`& .${H.avatar}`]:{width:32,height:32}},children:s.personLikes.map(d=>e.jsx(y,{alt:d.name,src:d.avatarUrl},d.name))}),e.jsx(x,{sx:{flexGrow:1}}),e.jsx(j,{onClick:l,children:e.jsx(n,{icon:"solar:chat-round-dots-bold"})}),e.jsx(j,{children:e.jsx(n,{icon:"solar:share-bold"})})]});return e.jsxs(u,{children:[w,e.jsx(f,{variant:"body2",sx:{p:d=>d.spacing(3,3,2,3)},children:s.message}),e.jsx(x,{sx:{p:1},children:e.jsx(B,{alt:s.media,src:s.media,ratio:"16/9",sx:{borderRadius:1.5}})}),_,!!s.comments.length&&N,W]})}function me({info:s,posts:r}){const t=h.useRef(null),i=()=>{t.current&&t.current.click()},o=e.jsx(u,{sx:{py:3,textAlign:"center",typography:"h4"},children:e.jsxs(c,{direction:"row",divider:e.jsx(M,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),children:[e.jsxs(c,{width:1,children:[L(s.totalFollowers),e.jsx(x,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Follower"})]}),e.jsxs(c,{width:1,children:[L(s.totalFollowing),e.jsx(x,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Following"})]})]})}),a=e.jsxs(u,{children:[e.jsx(F,{title:"About"}),e.jsxs(c,{spacing:2,sx:{p:3},children:[e.jsx(x,{sx:{typography:"body2"},children:s.quote}),e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(n,{icon:"mingcute:location-fill",width:24}),e.jsxs(x,{sx:{typography:"body2"},children:["Live at ",e.jsx(g,{variant:"subtitle2",color:"inherit",children:s.country})]})]}),e.jsxs(c,{direction:"row",sx:{typography:"body2"},children:[e.jsx(n,{icon:"fluent:mail-24-filled",width:24,sx:{mr:2}}),s.email]}),e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(n,{icon:"ic:round-business-center",width:24}),e.jsxs(x,{sx:{typography:"body2"},children:[s.role," ","at ",e.jsx(g,{variant:"subtitle2",color:"inherit",children:s.company})]})]}),e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(n,{icon:"ic:round-business-center",width:24}),e.jsxs(x,{sx:{typography:"body2"},children:["Studied at ",e.jsx(g,{variant:"subtitle2",color:"inherit",children:s.school})]})]})]})]}),m=e.jsxs(u,{sx:{p:3},children:[e.jsx(A,{multiline:!0,fullWidth:!0,rows:4,placeholder:"Share what you are thinking here...",sx:{p:2,mb:3,borderRadius:1,border:l=>`solid 1px ${b(l.palette.grey[500],.2)}`}}),e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsxs(c,{direction:"row",spacing:1,alignItems:"center",sx:{color:"text.secondary"},children:[e.jsxs(U,{size:"small",color:"inherit",variant:"softExtended",onClick:i,children:[e.jsx(n,{icon:"solar:gallery-wide-bold",width:24,sx:{color:"success.main"}}),"Image/Video"]}),e.jsxs(U,{size:"small",color:"inherit",variant:"softExtended",children:[e.jsx(n,{icon:"solar:videocamera-record-bold",width:24,sx:{color:"error.main"}}),"Streaming"]})]}),e.jsx(E,{variant:"contained",children:"Post"})]}),e.jsx("input",{ref:t,type:"file",style:{display:"none"}})]}),p=e.jsxs(u,{children:[e.jsx(F,{title:"Social"}),e.jsx(c,{spacing:2,sx:{p:3},children:D.map(l=>e.jsxs(c,{spacing:2,direction:"row",sx:{wordBreak:"break-all",typography:"body2"},children:[e.jsx(n,{icon:l.icon,width:24,sx:{flexShrink:0,color:l.color}}),e.jsxs(g,{color:"inherit",children:[l.value==="facebook"&&s.socialLinks.facebook,l.value==="instagram"&&s.socialLinks.instagram,l.value==="linkedin"&&s.socialLinks.linkedin,l.value==="twitter"&&s.socialLinks.twitter]})]},l.name))})]});return e.jsxs(v,{container:!0,spacing:3,children:[e.jsx(v,{xs:12,md:4,children:e.jsxs(c,{spacing:3,children:[o,a,p]})}),e.jsx(v,{xs:12,md:8,children:e.jsxs(c,{spacing:3,children:[m,r.map(l=>e.jsx(pe,{post:l},l.id))]})})]})}function ue({name:s,avatarUrl:r,role:t,coverUrl:i}){const o=z();return e.jsx(x,{sx:{...V({color:b(o.palette.primary.darker,.8),imgUrl:i}),height:1,color:"common.white"},children:e.jsxs(c,{direction:{xs:"column",md:"row"},sx:{left:{md:24},bottom:{md:24},zIndex:{md:10},pt:{xs:6,md:0},position:{md:"absolute"}},children:[e.jsx(y,{alt:s,src:r,sx:{mx:"auto",width:{xs:64,md:128},height:{xs:64,md:128},border:`solid 2px ${o.palette.common.white}`},children:s==null?void 0:s.charAt(0).toUpperCase()}),e.jsx(I,{sx:{mt:3,ml:{md:3},textAlign:{xs:"center",md:"unset"}},primary:s,secondary:t,primaryTypographyProps:{typography:"h4"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}})]})})}function je({friends:s,searchFriends:r,onSearchFriends:t}){const i=ge({inputData:s,query:r}),o=!i.length&&!!r;return e.jsxs(e.Fragment,{children:[e.jsxs(c,{spacing:2,justifyContent:"space-between",direction:{xs:"column",sm:"row"},sx:{my:5},children:[e.jsx(f,{variant:"h4",children:"Friends"}),e.jsx(de,{value:r,onChange:t,placeholder:"Search friends...",InputProps:{startAdornment:e.jsx(R,{position:"start",children:e.jsx(n,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{width:{xs:1,sm:260}}})]}),o?e.jsx(O,{query:r,sx:{mt:10}}):e.jsx(x,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:i.map(a=>e.jsx(ye,{friend:a},a.id))})]})}function ye({friend:s}){const{name:r,role:t,avatarUrl:i}=s,o=q(),a=()=>{o.onClose(),console.info("DELETE",r)},m=()=>{o.onClose(),console.info("EDIT",r)};return e.jsxs(e.Fragment,{children:[e.jsxs(u,{sx:{py:5,display:"flex",position:"relative",alignItems:"center",flexDirection:"column"},children:[e.jsx(y,{alt:r,src:i,sx:{width:64,height:64,mb:3}}),e.jsx(g,{variant:"subtitle1",color:"text.primary",children:r}),e.jsx(f,{variant:"body2",sx:{color:"text.secondary",mb:1,mt:.5},children:t}),e.jsx(c,{alignItems:"center",justifyContent:"center",direction:"row",children:D.map(p=>e.jsx(j,{sx:{color:p.color,"&:hover":{bgcolor:b(p.color,.08)}},children:e.jsx(n,{icon:p.icon})},p.name))}),e.jsx(j,{color:o.open?"inherit":"default",onClick:o.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(n,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(X,{open:o.open,onClose:o.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(S,{onClick:a,sx:{color:"error.main"},children:[e.jsx(n,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(S,{onClick:m,children:[e.jsx(n,{icon:"solar:pen-bold"}),"Edit"]})]})]})}function ge({inputData:s,query:r}){return r?s.filter(t=>t.name.toLowerCase().indexOf(r.toLowerCase())!==-1):s}function be({gallery:s}){const r=z(),t=s.map(o=>({src:o.imageUrl})),i=xe(t);return e.jsxs(e.Fragment,{children:[e.jsx(f,{variant:"h4",sx:{my:5},children:"Gallery"}),e.jsx(x,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(o=>e.jsxs(u,{sx:{cursor:"pointer",color:"common.white"},children:[e.jsx(j,{color:"inherit",sx:{position:"absolute",top:8,right:8,zIndex:9},children:e.jsx(n,{icon:"eva:more-vertical-fill"})}),e.jsx(I,{sx:{p:3,left:0,width:1,bottom:0,zIndex:9,position:"absolute"},primary:o.title,secondary:k(o.postedAt),primaryTypographyProps:{noWrap:!0,typography:"subtitle1"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}}),e.jsx(B,{alt:"gallery",ratio:"1/1",src:o.imageUrl,onClick:()=>i.onOpen(o.imageUrl),overlay:`linear-gradient(to bottom, ${b(r.palette.grey[900],0)} 0%, ${r.palette.grey[900]} 75%)`})]},o.id))}),e.jsx(he,{index:i.selected,slides:t,open:i.open,close:i.onClose})]})}function fe({followers:s}){const r=s.slice(4,8).map(a=>a.id),[t,i]=h.useState(r),o=h.useCallback(a=>{const m=t.includes(a)?t.filter(p=>p!==a):[...t,a];i(m)},[t]);return e.jsxs(e.Fragment,{children:[e.jsx(f,{variant:"h4",sx:{my:5},children:"Followers"}),e.jsx(x,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(a=>e.jsx(we,{follower:a,selected:t.includes(a.id),onSelected:()=>o(a.id)},a.id))})]})}function we({follower:s,selected:r,onSelected:t}){const{name:i,country:o,avatarUrl:a}=s;return e.jsxs(u,{sx:{display:"flex",alignItems:"center",p:m=>m.spacing(3,2,3,3)},children:[e.jsx(y,{alt:i,src:a,sx:{width:48,height:48,mr:2}}),e.jsx(I,{primary:i,secondary:e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:"mingcute:location-fill",width:16,sx:{flexShrink:0,mr:.5}}),o," country country country country country country country country country"]}),primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,display:"flex",component:"span",alignItems:"center",typography:"caption",color:"text.disabled"}}),e.jsx(E,{size:"small",variant:r?"text":"outlined",color:r?"success":"inherit",startIcon:r?e.jsx(n,{width:18,icon:"eva:checkmark-fill",sx:{mr:-.75}}):null,onClick:t,sx:{flexShrink:0,ml:1.5},children:r?"Followed":"Follow"})]})}const ve=[{value:"profile",label:"Profile",icon:e.jsx(n,{icon:"solar:user-id-bold",width:24})},{value:"followers",label:"Followers",icon:e.jsx(n,{icon:"solar:heart-bold",width:24})},{value:"friends",label:"Friends",icon:e.jsx(n,{icon:"solar:users-group-rounded-bold",width:24})},{value:"gallery",label:"Gallery",icon:e.jsx(n,{icon:"solar:gallery-wide-bold",width:24})}];function Ce(){const s=Y(),{user:r}=G(),[t,i]=h.useState(""),[o,a]=h.useState("profile"),m=h.useCallback((l,w)=>{a(w)},[]),p=h.useCallback(l=>{i(l.target.value)},[]);return e.jsxs(Z,{maxWidth:s.themeStretch?!1:"lg",children:[e.jsx(ne,{heading:"Profile",links:[{name:"Dashboard",href:T.dashboard.root},{name:"User",href:T.dashboard.user.root},{name:r==null?void 0:r.displayName}],sx:{mb:{xs:3,md:5}}}),e.jsxs(u,{sx:{mb:3,height:290},children:[e.jsx(ue,{role:C.role,name:r==null?void 0:r.displayName,avatarUrl:r==null?void 0:r.photoURL,coverUrl:C.coverUrl}),e.jsx(J,{value:o,onChange:m,sx:{width:1,bottom:0,zIndex:9,position:"absolute",bgcolor:"background.paper",[`& .${K.flexContainer}`]:{pr:{md:3},justifyContent:{sm:"center",md:"flex-end"}}},children:ve.map(l=>e.jsx(Q,{value:l.value,icon:l.icon,label:l.label},l.value))})]}),o==="profile"&&e.jsx(me,{info:C,posts:ee}),o==="followers"&&e.jsx(fe,{followers:re}),o==="friends"&&e.jsx(je,{friends:se,searchFriends:t,onSearchFriends:p}),o==="gallery"&&e.jsx(be,{gallery:oe})]})}function We(){return e.jsxs(e.Fragment,{children:[e.jsx(te,{children:e.jsx("title",{children:" Dashboard: User Profile"})}),e.jsx(Ce,{})]})}export{We as default};
