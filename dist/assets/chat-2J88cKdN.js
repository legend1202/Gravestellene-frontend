import{cG as _,r as c,n as me,o as T,aE as q,e as M,p as $,j as e,a9 as N,A as w,aH as O,g as F,S as p,T as C,B as S,bm as P,b0 as ge,b1 as je,ab as fe,c as m,d as h,D as be,b2 as W,bt as ye,b7 as se,b3 as te,aB as ne,I as ve,q as z,aa as oe,d9 as Ce,dk as we,da as ke,eq as Se,bN as Ie,w as Re,ak as R,b as H,av as re,dw as Te,bo as Ae,er as Ne,es as Oe,dr as Le,bn as De,h as $e,a as Fe,C as Pe,H as Ue}from"./index-tv0ZIiTC.js";import{k as Me}from"./keyBy-wSglvROY.js";import{u as K,m as U}from"./index-oYV4_ElG.js";import{A as ae}from"./AvatarGroup-US6hmpus.js";import{f as ie}from"./index-yOJ6aJnq.js";import{S as ze,T as le}from"./TextField-MR0F-eFr.js";import{S as V}from"./Skeleton-LzH7r1Lc.js";import{C as Ee}from"./ClickAwayListener-wtSf9s9a.js";import{D as Ge}from"./DialogContent-l4Y2lTg9.js";import{u as We,L as Ve}from"./use-light-box-D-_zTE4T.js";import{u as Q}from"./uuidv4-aWC4thH7.js";import{A as Be}from"./Autocomplete-J0YW4wEt.js";import{C as _e}from"./Chip-EkmsCEpD.js";import{C as qe}from"./Card-fEhE4FGy.js";import"./_baseEach-u1IbIKlH.js";import"./_baseIteratee-VSoSbk_2.js";import"./_baseToString-oTyNAALA.js";import"./dialogTitleClasses-47Jk6PmQ.js";import"./Close--UPeKSTc.js";const Y={revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1};function He(){const t=[T.chat,{params:{endpoint:"contacts"}}],{data:o,isLoading:n,error:a,isValidating:r}=K(t,_,Y);return c.useMemo(()=>({contacts:(o==null?void 0:o.contacts)||[],contactsLoading:n,contactsError:a,contactsValidating:r,contactsEmpty:!n&&!(o!=null&&o.contacts.length)}),[o==null?void 0:o.contacts,a,n,r])}function Ke(){const t=[T.chat,{params:{endpoint:"conversations"}}],{data:o,isLoading:n,error:a,isValidating:r}=K(t,_,Y);return c.useMemo(()=>{const i=Me(o==null?void 0:o.conversations,"id")||{},l=Object.keys(i)||[];return{conversations:{byId:i,allIds:l},conversationsLoading:n,conversationsError:a,conversationsValidating:r,conversationsEmpty:!n&&!l.length}},[o==null?void 0:o.conversations,a,n,r])}function Ye(t){const o=t?[T.chat,{params:{conversationId:t,endpoint:"conversation"}}]:"",{data:n,isLoading:a,error:r,isValidating:s}=K(o,_,Y);return c.useMemo(()=>({conversation:n==null?void 0:n.conversation,conversationLoading:a,conversationError:r,conversationValidating:s}),[n==null?void 0:n.conversation,r,a,s])}async function Je(t,o){const n=[T.chat,{params:{endpoint:"conversations"}}],a=[T.chat,{params:{conversationId:t,endpoint:"conversation"}}];U(a,r=>{const{conversation:s}=r;return{conversation:{...s,messages:[...s.messages,o]}}},!1),U(n,r=>{const{conversations:s}=r;return{conversations:s.map(l=>l.id===t?{...l,messages:[...l.messages,o]}:l)}},!1)}async function Qe(t){const o=[T.chat,{params:{endpoint:"conversations"}}],n={conversationData:t},a=await me.post(T.chat,n);return U(o,r=>{const s=[...r.conversations,t];return{...r,conversations:s}},!1),a.data}async function Xe(t){const o=T.chat;U([o,{params:{endpoint:"conversations"}}],n=>{const a=n.conversations.map(r=>r.id===t?{...r,unreadCount:0}:r);return{...n,conversations:a}},!1)}function Ze({message:t,participants:o,currentUserId:n}){const a=o.find(l=>l.id===t.senderId),r=t.senderId===n?{type:"me"}:{avatarUrl:a==null?void 0:a.avatarUrl,firstName:a==null?void 0:a.name.split(" ")[0]},s=r.type==="me";return{hasImage:t.contentType==="image",me:s,senderDetails:r}}function es({currentUserId:t,conversation:o}){const{messages:n,participants:a}=o,r=a.filter(x=>x.id!==t),s=n[n.length-1],i=r.length>1,l=r.map(x=>x.name).join(", "),u=i?r.map(x=>x.status).includes("online"):!1;let d="";if(s){const x=s.senderId===t?"You: ":"",f=s.contentType==="image"?"Sent a photo":s.body;d=`${x}${f}`}return{group:i,displayName:l,displayText:d,participants:r,lastActivity:s.createdAt,hasOnlineInGroup:u}}function ce(){const[t,o]=c.useState(!1),[n,a]=c.useState(!1),r=c.useCallback(()=>{a(u=>!u)},[]),s=c.useCallback(()=>{a(!1)},[]),i=c.useCallback(()=>{o(!0)},[]),l=c.useCallback(()=>{o(!1)},[]);return{openMobile:t,collapseDesktop:n,onOpenMobile:i,onCloseMobile:l,onCloseDesktop:s,onCollapseDesktop:r}}function ss(t){const o=c.useRef(null),n=c.useCallback(()=>{t&&o.current&&o.current&&(o.current.scrollTop=o.current.scrollHeight)},[t]);return c.useEffect(()=>{n()},[t]),{messagesEndRef:o}}function ts({selected:t,collapse:o,conversation:n,onCloseMobile:a}){const{user:r}=P(),s=q("up","md"),i=M(),{group:l,displayName:u,displayText:d,participants:x,lastActivity:f,hasOnlineInGroup:g}=es({conversation:n,currentUserId:`${r==null?void 0:r.id}`}),j=x[0],{name:b,avatarUrl:y,status:I}=j,L=c.useCallback(async()=>{try{s||a(),await Xe(n.id),i.push(`${$.dashboard.chat}?id=${n.id}`)}catch(A){console.error(A)}},[n.id,s,a,i]),k=e.jsx(N,{variant:g?"online":"invisible",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(ae,{variant:"compact",sx:{width:48,height:48},children:x.slice(0,2).map(A=>e.jsx(w,{alt:A.name,src:A.avatarUrl},A.id))})}),E=e.jsx(N,{variant:I,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(w,{alt:b,src:y,sx:{width:48,height:48}})},I);return e.jsxs(O,{disableGutters:!0,onClick:L,sx:{py:1.5,px:2.5,...t&&{bgcolor:"action.selected"}},children:[e.jsx(N,{color:"error",overlap:"circular",badgeContent:o?n.unreadCount:0,children:l?k:E}),!o&&e.jsxs(e.Fragment,{children:[e.jsx(F,{sx:{ml:2},primary:u,primaryTypographyProps:{noWrap:!0,variant:"subtitle2"},secondary:d,secondaryTypographyProps:{noWrap:!0,component:"span",variant:n.unreadCount?"subtitle2":"body2",color:n.unreadCount?"text.primary":"text.secondary"}}),e.jsxs(p,{alignItems:"flex-end",sx:{ml:2,height:44},children:[e.jsx(C,{noWrap:!0,variant:"body2",component:"span",sx:{mb:1.5,fontSize:12,color:"text.disabled"},children:ie(new Date(f),{addSuffix:!1})}),!!n.unreadCount&&e.jsx(S,{sx:{width:8,height:8,bgcolor:"info.main",borderRadius:"50%"}})]})]})]})}function ns(){var s;const{user:t}=P(),o=ge(),[n,a]=c.useState("online"),r=c.useCallback(i=>{a(i.target.value)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(N,{variant:n,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(w,{src:t==null?void 0:t.photoURL,alt:t==null?void 0:t.displayName,onClick:o.onOpen,sx:{cursor:"pointer",width:48,height:48},children:(s=t==null?void 0:t.displayName)==null?void 0:s.charAt(0).toUpperCase()})}),e.jsxs(je,{open:o.open,onClose:o.onClose,arrow:"top-left",sx:{p:0},children:[e.jsxs(p,{direction:"row",alignItems:"center",spacing:2,sx:{py:2,pr:1,pl:2.5},children:[e.jsx(F,{primary:t==null?void 0:t.displayName,secondary:t==null?void 0:t.email,secondaryTypographyProps:{component:"span"}}),e.jsx(fe,{title:"Log out",children:e.jsx(m,{color:"error",children:e.jsx(h,{icon:"ic:round-power-settings-new"})})})]}),e.jsx(be,{sx:{borderStyle:"dashed"}}),e.jsxs(p,{sx:{p:1},children:[e.jsxs(W,{children:[e.jsx(N,{variant:n,sx:{[`& .${ye.badge}`]:{position:"static",m:.75,width:12,height:12,flexShrink:0}}}),e.jsx(ze,{native:!0,fullWidth:!0,value:n,onChange:r,input:e.jsx(se,{sx:{pl:2}}),inputProps:{sx:{textTransform:"capitalize"}},children:["online","alway","busy","offline"].map(i=>e.jsx("option",{value:i,children:i},i))})]}),e.jsxs(W,{children:[e.jsx(h,{icon:"solar:user-id-bold",width:24}),"Profile"]}),e.jsxs(W,{children:[e.jsx(h,{icon:"eva:settings-2-fill",width:24}),"Settings"]})]})]})]})}function os({sx:t,...o}){return e.jsxs(p,{spacing:2,direction:"row",alignItems:"center",sx:{px:2.5,py:1.5,...t},...o,children:[e.jsx(V,{variant:"circular",sx:{width:48,height:48}}),e.jsxs(p,{spacing:1,flexGrow:1,children:[e.jsx(V,{sx:{width:.75,height:10}}),e.jsx(V,{sx:{width:.5,height:10}})]})]})}function rs({query:t,results:o,onClickResult:n}){const a=o.length,r=!a&&!!t;return e.jsxs(e.Fragment,{children:[e.jsxs(C,{variant:"h6",sx:{px:2.5,mb:2},children:["Contacts (",a,")"]}),r?e.jsx(te,{query:t,sx:{p:3,mx:"auto",width:"calc(100% - 40px)",bgcolor:"background.neutral"}}):e.jsx(e.Fragment,{children:o.map(s=>e.jsxs(O,{onClick:()=>n(s),sx:{px:2.5,py:1.5,typography:"subtitle2"},children:[e.jsx(w,{alt:s.name,src:s.avatarUrl,sx:{mr:2}}),s.name]},s.id))})]})}const X=320,as=96;function is({loading:t,contacts:o,conversations:n,selectedConversationId:a}){const r=ne(),s=M(),i=q("up","md"),{collapseDesktop:l,onCloseDesktop:u,onCollapseDesktop:d,openMobile:x,onOpenMobile:f,onCloseMobile:g}=ce(),[j,b]=c.useState({query:"",results:[]});c.useEffect(()=>{i||u()},[u,i]);const y=c.useCallback(()=>{i?d():g()},[i,g,d]),I=c.useCallback(()=>{i||g(),s.push($.dashboard.chat)},[i,g,s]),L=c.useCallback(v=>{if(b(D=>({...D,query:v})),v){const D=o.filter(G=>G.name.toLowerCase().includes(v));b(G=>({...G,results:D}))}},[o]),k=c.useCallback(()=>{b({query:"",results:[]})},[]),E=c.useCallback(v=>{k(),s.push(`${$.dashboard.chat}?id=${v.id}`)},[k,s]),A=e.jsx(m,{onClick:f,sx:{left:0,top:84,zIndex:9,width:32,height:32,position:"absolute",borderRadius:"0 12px 12px 0",bgcolor:r.palette.primary.main,boxShadow:r.customShadows.primary,color:r.palette.primary.contrastText,"&:hover":{bgcolor:r.palette.primary.darker}},children:e.jsx(h,{width:16,icon:"solar:users-group-rounded-bold"})}),he=e.jsx(e.Fragment,{children:[...Array(12)].map((v,D)=>e.jsx(os,{},D))}),pe=e.jsx(e.Fragment,{children:n.allIds.map(v=>e.jsx(ts,{collapse:l,conversation:n.byId[v],selected:v===a,onCloseMobile:g},v))}),xe=e.jsx(rs,{query:j.query,results:j.results,onClickResult:E}),ue=e.jsx(Ee,{onClickAway:k,children:e.jsx(le,{fullWidth:!0,value:j.query,onChange:v=>L(v.target.value),placeholder:"Search contacts...",InputProps:{startAdornment:e.jsx(ve,{position:"start",children:e.jsx(h,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{mt:2.5}})}),J=e.jsxs(e.Fragment,{children:[e.jsxs(p,{direction:"row",alignItems:"center",justifyContent:"center",sx:{p:2.5,pb:0},children:[!l&&e.jsxs(e.Fragment,{children:[e.jsx(ns,{}),e.jsx(S,{sx:{flexGrow:1}})]}),e.jsx(m,{onClick:y,children:e.jsx(h,{icon:l?"eva:arrow-ios-forward-fill":"eva:arrow-ios-back-fill"})}),!l&&e.jsx(m,{onClick:I,children:e.jsx(h,{width:24,icon:"solar:user-plus-bold"})})]}),e.jsx(S,{sx:{p:2.5,pt:0},children:!l&&ue}),e.jsxs(z,{sx:{pb:1},children:[j.query&&xe,t&&he,!j.query&&!!n.allIds.length&&pe]})]});return e.jsxs(e.Fragment,{children:[!i&&A,i?e.jsx(p,{sx:{height:1,flexShrink:0,width:X,borderRight:`solid 1px ${r.palette.divider}`,transition:r.transitions.create(["width"],{duration:r.transitions.duration.shorter}),...l&&{width:as}},children:J}):e.jsx(oe,{open:x,onClose:g,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:X}},children:J})]})}var Z=Ce,ls=we,cs=ke,ee=Z?Z.isConcatSpreadable:void 0;function ds(t){return cs(t)||ls(t)||!!(ee&&t&&t[ee])}var hs=ds,ps=Se,xs=hs;function de(t,o,n,a,r){var s=-1,i=t.length;for(n||(n=xs),r||(r=[]);++s<i;){var l=t[s];o>0&&n(l)?o>1?de(l,o-1,n,a,r):ps(r,l):a||(r[r.length]=l)}return r}var us=de,ms=us;function gs(t){var o=t==null?0:t.length;return o?ms(t,1):[]}var js=gs;const fs=Ie(js);function bs({participant:t,open:o,onClose:n}){return e.jsxs(Re,{fullWidth:!0,maxWidth:"xs",open:o,onClose:n,children:[e.jsx(m,{onClick:n,sx:{position:"absolute",right:8,top:8},children:e.jsx(h,{icon:"mingcute:close-line"})}),e.jsxs(Ge,{sx:{py:5,px:3,display:"flex"},children:[e.jsx(w,{alt:t.name,src:t.avatarUrl,sx:{width:96,height:96,mr:3}}),e.jsxs(p,{spacing:1,children:[e.jsx(C,{variant:"caption",sx:{color:"primary.main"},children:t.role}),e.jsx(C,{variant:"subtitle1",children:t.name}),e.jsxs(p,{direction:"row",sx:{typography:"caption",color:"text.disabled"},children:[e.jsx(h,{icon:"mingcute:location-fill",width:16,sx:{flexShrink:0,mr:.5,mt:"2px"}}),t.address]}),e.jsxs(p,{spacing:1,direction:"row",sx:{pt:1.5},children:[e.jsx(m,{size:"small",color:"error",sx:{borderRadius:1,bgcolor:a=>R(a.palette.error.main,.08),"&:hover":{bgcolor:a=>R(a.palette.error.main,.16)}},children:e.jsx(h,{width:18,icon:"solar:phone-bold"})}),e.jsx(m,{size:"small",color:"info",sx:{borderRadius:1,bgcolor:a=>R(a.palette.info.main,.08),"&:hover":{bgcolor:a=>R(a.palette.info.main,.16)}},children:e.jsx(h,{width:18,icon:"solar:chat-round-dots-bold"})}),e.jsx(m,{size:"small",color:"primary",sx:{borderRadius:1,bgcolor:a=>R(a.palette.primary.main,.08),"&:hover":{bgcolor:a=>R(a.palette.primary.main,.16)}},children:e.jsx(h,{width:18,icon:"fluent:mail-24-filled"})}),e.jsx(m,{size:"small",color:"secondary",sx:{borderRadius:1,bgcolor:a=>R(a.palette.secondary.main,.08),"&:hover":{bgcolor:a=>R(a.palette.secondary.main,.16)}},children:e.jsx(h,{width:18,icon:"solar:videocamera-record-bold"})})]})]})]})]})}function ys({participants:t}){const[o,n]=c.useState(null),a=H(!0),r=c.useCallback(d=>{n(d)},[]),s=()=>{n(null)},i=t.length,l=e.jsxs(O,{onClick:a.onToggle,sx:{pl:2.5,pr:1.5,height:40,flexShrink:0,flexGrow:"unset",typography:"overline",color:"text.secondary",bgcolor:"background.neutral"},children:[e.jsxs(S,{component:"span",sx:{flexGrow:1},children:["In room (",i,")"]}),e.jsx(h,{width:16,icon:a.value?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill"})]}),u=e.jsx(z,{sx:{height:56*4},children:t.map(d=>e.jsxs(O,{onClick:()=>r(d),children:[e.jsx(N,{variant:d.status,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(w,{alt:d.name,src:d.avatarUrl})}),e.jsx(F,{sx:{ml:2},primary:d.name,secondary:d.role,primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{noWrap:!0,component:"span",typography:"caption"}})]},d.id))});return e.jsxs(e.Fragment,{children:[l,e.jsx("div",{children:e.jsx(re,{in:a.value,children:u})}),o&&e.jsx(bs,{participant:o,open:!!o,onClose:s})]})}function vs({participant:t}){const o=H(!0),{name:n,avatarUrl:a,role:r,address:s,phoneNumber:i,email:l}=t,u=e.jsxs(p,{alignItems:"center",sx:{py:5},children:[e.jsx(w,{alt:n,src:a,sx:{width:96,height:96,mb:2}}),e.jsx(C,{variant:"subtitle1",children:n}),e.jsx(C,{variant:"body2",sx:{color:"text.secondary",mt:.5},children:r})]}),d=e.jsxs(O,{onClick:o.onToggle,sx:{pl:2.5,pr:1.5,height:40,flexShrink:0,flexGrow:"unset",typography:"overline",color:"text.secondary",bgcolor:"background.neutral"},children:[e.jsx(S,{component:"span",sx:{flexGrow:1},children:"Information"}),e.jsx(h,{width:16,icon:o.value?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill"})]}),x=e.jsxs(p,{spacing:2,sx:{px:2,py:2.5,"& svg":{mr:1,flexShrink:0,color:"text.disabled"}},children:[e.jsxs(p,{direction:"row",children:[e.jsx(h,{icon:"mingcute:location-fill"}),e.jsx(C,{variant:"body2",children:s})]}),e.jsxs(p,{direction:"row",children:[e.jsx(h,{icon:"solar:phone-bold"}),e.jsx(C,{variant:"body2",children:i})]}),e.jsxs(p,{direction:"row",children:[e.jsx(h,{icon:"fluent:mail-24-filled"}),e.jsx(C,{variant:"body2",noWrap:!0,children:l})]})]});return e.jsxs(e.Fragment,{children:[u,d,e.jsx("div",{children:e.jsx(re,{in:o.value,children:x})})]})}function Cs({attachments:t}){const o=H(!0),n=t.length,a=e.jsxs(O,{disabled:!t.length,onClick:o.onToggle,sx:{pl:2.5,pr:1.5,height:40,flexShrink:0,flexGrow:"unset",typography:"overline",color:"text.secondary",bgcolor:"background.neutral"},children:[e.jsxs(S,{component:"span",sx:{flexGrow:1},children:["Attachments (",n,")"]}),e.jsx(h,{width:16,icon:!o.value&&"eva:arrow-ios-forward-fill"||!t.length&&"eva:arrow-ios-forward-fill"||"eva:arrow-ios-downward-fill"})]}),r=e.jsx(z,{sx:{px:2,py:2.5},children:t.map((s,i)=>e.jsxs(p,{spacing:1.5,direction:"row",alignItems:"center",sx:{mb:2},children:[e.jsx(p,{alignItems:"center",justifyContent:"center",sx:{width:40,height:40,flexShrink:0,borderRadius:1,overflow:"hidden",position:"relative",backgroundColor:"background.neutral"},children:e.jsx(Te,{imageView:!0,file:s.preview,onDownload:()=>console.info("DOWNLOAD"),sx:{width:28,height:28}})}),e.jsx(F,{primary:s.name,secondary:Ae(s.createdAt),primaryTypographyProps:{noWrap:!0,typography:"body2"},secondaryTypographyProps:{mt:.25,noWrap:!0,component:"span",typography:"caption",color:"text.disabled"}})]},s.name+i))});return e.jsxs(e.Fragment,{children:[a,e.jsx(S,{sx:{overflow:"hidden",height:o.value?1:0,transition:s=>s.transitions.create(["height"],{duration:s.transitions.duration.shorter})},children:r})]})}const B=240;function ws({participants:t,conversation:o}){const n=ne(),a=q("up","lg"),{collapseDesktop:r,onCloseDesktop:s,onCollapseDesktop:i,openMobile:l,onOpenMobile:u,onCloseMobile:d}=ce();c.useEffect(()=>{a||s()},[s,a]);const x=c.useCallback(()=>{a?i():u()},[a]),f=t.length>1,g=Ne(fs(o.messages.map(y=>y.attachments))),j=e.jsxs(e.Fragment,{children:[f?e.jsx(ys,{participants:t}):e.jsx(vs,{participant:t[0]}),e.jsx(Cs,{attachments:g})]}),b=e.jsx(m,{onClick:x,sx:{top:12,right:0,zIndex:9,width:32,height:32,borderRight:0,position:"absolute",borderRadius:"12px 0 0 12px",boxShadow:n.customShadows.z8,bgcolor:n.palette.background.paper,border:`solid 1px ${n.palette.divider}`,"&:hover":{bgcolor:n.palette.background.neutral},...a&&{...!r&&{right:B}}},children:a?e.jsx(h,{width:16,icon:r?"eva:arrow-ios-back-fill":"eva:arrow-ios-forward-fill"}):e.jsx(h,{width:16,icon:"eva:arrow-ios-back-fill"})});return e.jsxs(S,{sx:{position:"relative"},children:[b,a?e.jsx(p,{sx:{height:1,flexShrink:0,width:B,borderLeft:`solid 1px ${n.palette.divider}`,transition:n.transitions.create(["width"],{duration:n.transitions.duration.shorter}),...r&&{width:0}},children:!r&&j}):e.jsx(oe,{anchor:"right",open:l,onClose:d,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:B}},children:j})]})}function ks({message:t,participants:o,onOpenLightbox:n}){const{user:a}=P(),{me:r,senderDetails:s,hasImage:i}=Ze({message:t,participants:o,currentUserId:`${a==null?void 0:a.id}`}),{firstName:l,avatarUrl:u}=s,{body:d,createdAt:x}=t,f=e.jsxs(C,{noWrap:!0,variant:"caption",sx:{mb:1,color:"text.disabled",...!r&&{mr:"auto"}},children:[!r&&`${l},`,"  ",ie(new Date(x),{addSuffix:!0})]}),g=e.jsx(p,{sx:{p:1.5,minWidth:48,maxWidth:320,borderRadius:1,typography:"body2",bgcolor:"background.neutral",...r&&{color:"grey.800",bgcolor:"primary.lighter"},...i&&{p:0,bgcolor:"transparent"}},children:i?e.jsx(S,{component:"img",alt:"attachment",src:d,onClick:()=>n(d),sx:{minHeight:220,borderRadius:1.5,cursor:"pointer","&:hover":{opacity:.9}}}):d}),j=e.jsxs(p,{direction:"row",className:"message-actions",sx:{pt:.5,opacity:0,top:"100%",left:0,position:"absolute",transition:b=>b.transitions.create(["opacity"],{duration:b.transitions.duration.shorter}),...r&&{left:"unset",right:0}},children:[e.jsx(m,{size:"small",children:e.jsx(h,{icon:"solar:reply-bold",width:16})}),e.jsx(m,{size:"small",children:e.jsx(h,{icon:"eva:smiling-face-fill",width:16})}),e.jsx(m,{size:"small",children:e.jsx(h,{icon:"solar:trash-bin-trash-bold",width:16})})]});return e.jsxs(p,{direction:"row",justifyContent:r?"flex-end":"unset",sx:{mb:5},children:[!r&&e.jsx(w,{alt:l,src:u,sx:{width:32,height:32,mr:2}}),e.jsxs(p,{alignItems:"flex-end",children:[f,e.jsxs(p,{direction:"row",alignItems:"center",sx:{position:"relative","&:hover":{"& .message-actions":{opacity:1}}},children:[g,j]})]})]})}function Ss({messages:t=[],participants:o}){const{messagesEndRef:n}=ss(t),a=t.filter(s=>s.contentType==="image").map(s=>({src:s.body})),r=We(a);return e.jsxs(e.Fragment,{children:[e.jsx(z,{ref:n,sx:{px:3,py:5,height:1},children:e.jsx(S,{children:t.map(s=>e.jsx(ks,{message:s,participants:o,onOpenLightbox:()=>r.onOpen(s.body)},s.id))})}),e.jsx(Ve,{index:r.selected,slides:a,open:r.open,close:r.onClose})]})}function Is({recipients:t,onAddRecipients:o,disabled:n,selectedConversationId:a}){const r=M(),{user:s}=P(),i=c.useRef(null),[l,u]=c.useState(""),d=c.useMemo(()=>({id:`${s==null?void 0:s.id}`,role:`${s==null?void 0:s.role}`,email:`${s==null?void 0:s.email}`,address:`${s==null?void 0:s.address}`,name:`${s==null?void 0:s.displayName}`,lastActivity:new Date,avatarUrl:`${s==null?void 0:s.photoURL}`,phoneNumber:`${s==null?void 0:s.phoneNumber}`,status:"online"}),[s]),x=c.useMemo(()=>({id:Q(),attachments:[],body:l,contentType:"text",createdAt:Oe(new Date,{minutes:1}),senderId:d.id}),[l,d.id]),f=c.useMemo(()=>({id:Q(),messages:[x],participants:[...t,d],type:t.length>1?"GROUP":"ONE_TO_ONE",unreadCount:0}),[x,d,t]),g=c.useCallback(()=>{i.current&&i.current.click()},[]),j=c.useCallback(y=>{u(y.target.value)},[]),b=c.useCallback(async y=>{try{if(y.key==="Enter"){if(l)if(a)await Je(a,x);else{const I=await Qe(f);r.push(`${$.dashboard.chat}?id=${I.conversation.id}`),o([])}u("")}}catch(I){console.error(I)}},[f,l,x,o,r,a]);return e.jsxs(e.Fragment,{children:[e.jsx(se,{value:l,onKeyUp:b,onChange:j,placeholder:"Type a message",disabled:n,startAdornment:e.jsx(m,{children:e.jsx(h,{icon:"eva:smiling-face-fill"})}),endAdornment:e.jsxs(p,{direction:"row",sx:{flexShrink:0},children:[e.jsx(m,{onClick:g,children:e.jsx(h,{icon:"solar:gallery-add-bold"})}),e.jsx(m,{onClick:g,children:e.jsx(h,{icon:"eva:attach-2-fill"})}),e.jsx(m,{children:e.jsx(h,{icon:"solar:microphone-bold"})})]}),sx:{px:1,height:56,flexShrink:0,borderTop:y=>`solid 1px ${y.palette.divider}`}}),e.jsx("input",{type:"file",ref:i,style:{display:"none"}})]})}function Rs({participants:t}){const o=t.length>1,n=t[0],a=e.jsx(ae,{max:3,sx:{[`& .${Le.avatar}`]:{width:32,height:32}},children:t.map(s=>e.jsx(w,{alt:s.name,src:s.avatarUrl},s.id))}),r=e.jsxs(p,{flexGrow:1,direction:"row",alignItems:"center",spacing:2,children:[e.jsx(N,{variant:n.status,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(w,{src:n.avatarUrl,alt:n.name})}),e.jsx(F,{primary:n.name,secondary:n.status==="offline"?De(n.lastActivity):n.status,secondaryTypographyProps:{component:"span",...n.status!=="offline"&&{textTransform:"capitalize"}}})]});return e.jsxs(e.Fragment,{children:[o?a:r,e.jsx(p,{flexGrow:1}),e.jsx(m,{children:e.jsx(h,{icon:"solar:phone-bold"})}),e.jsx(m,{children:e.jsx(h,{icon:"solar:videocamera-record-bold"})}),e.jsx(m,{children:e.jsx(h,{icon:"eva:more-vertical-fill"})})]})}function Ts({contacts:t,onAddRecipients:o}){const[n,a]=c.useState(""),r=c.useCallback(s=>{a(""),o(s)},[o]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{variant:"subtitle2",sx:{color:"text.primary",mr:2},children:"To:"}),e.jsx(Be,{sx:{minWidth:320},multiple:!0,limitTags:3,popupIcon:null,defaultValue:[],disableCloseOnSelect:!0,noOptionsText:e.jsx(te,{query:n}),onChange:(s,i)=>r(i),onInputChange:(s,i)=>a(i),options:t,getOptionLabel:s=>s.name,isOptionEqualToValue:(s,i)=>s.id===i.id,renderInput:s=>e.jsx(le,{...s,placeholder:"+ Recipients"}),renderOption:(s,i,{selected:l})=>c.createElement("li",{...s,key:i.id},e.jsxs(S,{sx:{mr:1,width:32,height:32,overflow:"hidden",borderRadius:"50%",position:"relative"},children:[e.jsx(w,{alt:i.name,src:i.avatarUrl,sx:{width:1,height:1}}),e.jsx(p,{alignItems:"center",justifyContent:"center",sx:{top:0,left:0,width:1,height:1,opacity:0,position:"absolute",bgcolor:u=>R(u.palette.grey[900],.8),transition:u=>u.transitions.create(["opacity"],{easing:u.transitions.easing.easeInOut,duration:u.transitions.duration.shorter}),...l&&{opacity:1,color:"primary.main"}},children:e.jsx(h,{icon:"eva:checkmark-fill"})})]},i.id),i.name),renderTags:(s,i)=>s.map((l,u)=>c.createElement(_e,{...i({index:u}),key:l.id,label:l.name,avatar:e.jsx(w,{alt:l.name,src:l.avatarUrl}),size:"small",variant:"soft"}))})]})}function As(){const t=M(),{user:o}=P(),n=$e(),r=Fe().get("id")||"",[s,i]=c.useState([]),{contacts:l}=He(),{conversations:u,conversationsLoading:d}=Ke(),{conversation:x,conversationError:f}=Ye(`${r}`),g=x?x.participants.filter(k=>k.id!==`${o==null?void 0:o.id}`):[];c.useEffect(()=>{(f||!r)&&t.push($.dashboard.chat)},[f,t,r]);const j=c.useCallback(k=>{i(k)},[]),b=!!x,y=e.jsx(p,{direction:"row",alignItems:"center",flexShrink:0,sx:{pr:1,pl:2.5,py:1,minHeight:72},children:r?e.jsx(e.Fragment,{children:b&&e.jsx(Rs,{participants:g})}):e.jsx(Ts,{contacts:l,onAddRecipients:j})}),I=e.jsx(is,{contacts:l,conversations:u,loading:d,selectedConversationId:r}),L=e.jsxs(p,{sx:{width:1,height:1,overflow:"hidden"},children:[e.jsx(Ss,{messages:x==null?void 0:x.messages,participants:g}),e.jsx(Is,{recipients:s,onAddRecipients:j,selectedConversationId:r,disabled:!s.length&&!r})]});return e.jsxs(Pe,{maxWidth:n.themeStretch?!1:"xl",children:[e.jsx(C,{variant:"h4",sx:{mb:{xs:3,md:5}},children:"Chat"}),e.jsxs(p,{component:qe,direction:"row",sx:{height:"72vh"},children:[I,e.jsxs(p,{sx:{width:1,height:1,overflow:"hidden"},children:[y,e.jsxs(p,{direction:"row",sx:{width:1,height:1,overflow:"hidden",borderTop:k=>`solid 1px ${k.palette.divider}`},children:[L,b&&e.jsx(ws,{conversation:x,participants:g})]})]})]})]})}function Ys(){return e.jsxs(e.Fragment,{children:[e.jsx(Ue,{children:e.jsx("title",{children:" Dashboard: Chat"})}),e.jsx(As,{})]})}export{Ys as default};
