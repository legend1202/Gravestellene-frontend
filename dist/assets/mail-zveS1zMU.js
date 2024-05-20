import{cK as z,cL as P,r as g,cI as A,j as e,aZ as H,h as a,m as B,T as b,S as n,aB as S,aV as L,t as M,N as D,ar as q,n as X,B as I,M as Z,I as K,g as m,b as k,eH as ae,eZ as le,X as ce,bp as W,w as de,bW as xe,bV as he,as as F,bG as pe,L as me,aN as ue,aM as ge,dJ as je,K as G,k as be,a as fe,q as ye,p as w,C as we,e_ as ve,H as ke}from"./index-crR8fPbl.js";import{k as Ce}from"./keyBy-cUir-OiF.js";import{E as U}from"./empty-content-3DHsQVWb.js";import{S as C}from"./Skeleton-_5UsUu-y.js";import{f as Ie}from"./index-PzNzv4sy.js";import{E as J}from"./editor-KAo55ahu.js";import{M as Se}from"./markdown-lA-JjHCE.js";import{T as Me}from"./text-max-line-bChYQHuI.js";import{C as _}from"./Checkbox-uS0Dug3P.js";import"./_baseEach-FK-uqoMM.js";import"./_baseIteratee-_s10SrN7.js";import"./_baseToString-eGF-a8HB.js";import"./styles-m_ofs5nc.js";import"./SwitchBase-HZUDhW8q.js";function Le(){const s=A.mail.labels,{data:o,isLoading:r,error:l,isValidating:i}=z(s,P);return g.useMemo(()=>({labels:(o==null?void 0:o.labels)||[],labelsLoading:r,labelsError:l,labelsValidating:i,labelsEmpty:!r&&!(o!=null&&o.labels.length)}),[o==null?void 0:o.labels,l,r,i])}function Te(s){const o=s?[A.mail.list,{params:{labelId:s}}]:"",{data:r,isLoading:l,error:i,isValidating:d}=z(o,P);return g.useMemo(()=>{const h=Ce(r==null?void 0:r.mails,"id")||{},p=Object.keys(h)||[];return{mails:{byId:h,allIds:p},mailsLoading:l,mailsError:i,mailsValidating:d,mailsEmpty:!l&&!p.length}},[r==null?void 0:r.mails,i,l,d])}function Ee(s){const o=s?[A.mail.details,{params:{mailId:s}}]:"",{data:r,isLoading:l,error:i,isValidating:d}=z(o,P);return g.useMemo(()=>({mail:r==null?void 0:r.mail,mailLoading:l,mailError:i,mailValidating:d}),[r==null?void 0:r.mail,i,l,d])}const Re={all:"fluent:mail-24-filled",inbox:"solar:inbox-bold",trash:"solar:trash-bin-trash-bold",drafts:"solar:file-text-bold",spam:"solar:danger-bold",sent:"iconamoon:send-fill",starred:"eva:star-fill",important:"material-symbols:label-important-rounded",social:"solar:tag-horizontal-bold-duotone",promotions:"solar:tag-horizontal-bold-duotone",forums:"solar:tag-horizontal-bold-duotone"};function Fe({selected:s,label:o,onClickNavItem:r,...l}){const{unreadCount:i,color:d,name:t}=o,h=Re[o.id];return e.jsxs(H,{disableRipple:!0,onClick:r,sx:{px:0,height:40,color:"text.secondary",...s&&{color:"text.primary"},"&:hover":{bgcolor:"transparent"}},...l,children:[e.jsx(a,{icon:h,width:22,sx:{mr:2,color:d}}),e.jsx(B,{primary:t,primaryTypographyProps:{textTransform:"capitalize",typography:s?"subtitle2":"body2"}}),!!i&&e.jsx(b,{variant:"caption",children:i})]})}function Ne({sx:s,...o}){return e.jsxs(n,{spacing:2,direction:"row",alignItems:"center",sx:{py:1,color:r=>S(r.palette.grey[500],.24),...s},...o,children:[e.jsx(C,{variant:"circular",sx:{width:32,height:32,bgcolor:"currentColor"}}),e.jsx(C,{sx:{width:.5,height:10,bgcolor:"currentColor"}})]})}function Ue({sx:s,...o}){return e.jsxs(n,{spacing:2,direction:"row",alignItems:"center",sx:{py:1,...s},...o,children:[e.jsx(C,{variant:"circular",sx:{width:40,height:40}}),e.jsxs(n,{spacing:1,flexGrow:1,children:[e.jsx(C,{sx:{width:.75,height:10}}),e.jsx(C,{sx:{width:.5,height:10}})]})]})}function ze({loading:s,openNav:o,onCloseNav:r,labels:l,selectedLabelId:i,handleClickLabel:d,onToggleCompose:t}){const h=L("up","md"),p=e.jsx(e.Fragment,{children:[...Array(8)].map((c,f)=>e.jsx(Ne,{},f))}),x=e.jsx(e.Fragment,{children:l.map(c=>e.jsx(Fe,{label:c,selected:i===c.id,onClickNavItem:()=>{d(c.id)}},c.id))}),u=e.jsxs(e.Fragment,{children:[e.jsx(n,{sx:{p:c=>({xs:c.spacing(2.5,2.5,2,2.5),md:c.spacing(2,1.5)})},children:e.jsx(M,{fullWidth:!0,color:"inherit",variant:"contained",startIcon:e.jsx(a,{icon:"solar:pen-bold"}),onClick:t,children:"Compose"})}),e.jsx(D,{children:e.jsxs(n,{sx:{px:{xs:3.5,md:2.5}},children:[s&&p,!!l.length&&x]})})]});return h?e.jsx(n,{sx:{width:200,flexShrink:0},children:u}):e.jsx(q,{open:o,onClose:r,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:260}},children:u})}function Pe({mail:s,selected:o,sx:r,...l}){return e.jsxs(H,{sx:{p:1,mb:.5,borderRadius:1,...o&&{bgcolor:"action.selected"},...r},...l,children:[e.jsx(X,{alt:s.from.name,src:s.from.avatarUrl?`${s.from.avatarUrl}`:"",sx:{mr:2},children:s.from.name.charAt(0).toUpperCase()}),e.jsxs(e.Fragment,{children:[e.jsx(B,{primary:s.from.name,primaryTypographyProps:{noWrap:!0,variant:"subtitle2"},secondary:s.message,secondaryTypographyProps:{noWrap:!0,component:"span",variant:s.isUnread?"subtitle2":"body2",color:s.isUnread?"text.primary":"text.secondary"}}),e.jsxs(n,{alignItems:"flex-end",sx:{ml:2,height:44},children:[e.jsx(b,{noWrap:!0,variant:"body2",component:"span",sx:{mb:1.5,fontSize:12,color:"text.disabled"},children:Ie(new Date(s.createdAt),{addSuffix:!1})}),!!s.isUnread&&e.jsx(I,{sx:{bgcolor:"info.main",width:8,height:8,borderRadius:"50%"}})]})]})]})}function Ae({loading:s,mails:o,openMail:r,onCloseMail:l,onClickMail:i,selectedLabelId:d,selectedMailId:t}){const h=L("up","md"),p=e.jsx(e.Fragment,{children:[...Array(8)].map((c,f)=>e.jsx(Ue,{},f))}),x=e.jsx(e.Fragment,{children:o.allIds.map(c=>e.jsx(Pe,{mail:o.byId[c],selected:t===c,onClick:()=>{i(c)}},c))}),u=e.jsxs(e.Fragment,{children:[e.jsx(n,{sx:{p:2},children:h?e.jsx(Z,{placeholder:"Search...",InputProps:{startAdornment:e.jsx(K,{position:"start",children:e.jsx(a,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}):e.jsx(b,{variant:"h6",sx:{textTransform:"capitalize"},children:d})}),e.jsxs(D,{sx:{px:2},children:[s&&p,!!o.allIds.length&&x]})]});return h?e.jsx(n,{sx:{width:320,flexShrink:0,borderRadius:1.5,bgcolor:"background.default"},children:u}):e.jsx(q,{open:r,onClose:l,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:320}},children:u})}function Be({onOpenNav:s,onOpenMail:o,...r}){return e.jsxs(n,{spacing:2,direction:"row",alignItems:"center",sx:{py:1},...r,children:[e.jsxs(n,{direction:"row",alignItems:"center",children:[e.jsx(m,{onClick:s,children:e.jsx(a,{icon:"fluent:mail-24-filled"})}),o&&e.jsx(m,{onClick:o,children:e.jsx(a,{icon:"solar:chat-round-dots-bold"})})]}),e.jsx(Z,{fullWidth:!0,size:"small",placeholder:"Search...",InputProps:{startAdornment:e.jsx(K,{position:"start",children:e.jsx(a,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})]})}const O=1998,v=24;function De({onCloseCompose:s}){const o=L("up","sm"),[r,l]=g.useState(""),i=k(),d=g.useCallback(t=>{l(t)},[]);return e.jsxs(ae,{children:[(i.value||!o)&&e.jsx(le,{open:!0,sx:{zIndex:O}}),e.jsxs(ce,{sx:{right:0,bottom:0,borderRadius:2,display:"flex",position:"fixed",zIndex:O+1,m:`${v}px`,overflow:"hidden",flexDirection:"column",boxShadow:t=>t.customShadows.dropdown,...i.value&&{m:0,right:v/2,bottom:v/2,width:`calc(100% - ${v}px)`,height:`calc(100% - ${v}px)`}},children:[e.jsxs(n,{direction:"row",alignItems:"center",sx:{bgcolor:"background.neutral",p:t=>t.spacing(1.5,1,1.5,2)},children:[e.jsx(b,{variant:"h6",sx:{flexGrow:1},children:"New Message"}),e.jsx(m,{onClick:i.onToggle,children:e.jsx(a,{icon:i?"eva:collapse-fill":"eva:expand-fill"})}),e.jsx(m,{onClick:s,children:e.jsx(a,{icon:"mingcute:close-line"})})]}),e.jsx(W,{placeholder:"To",endAdornment:e.jsxs(n,{direction:"row",spacing:.5,sx:{typography:"subtitle2"},children:[e.jsx(I,{sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:"Cc"}),e.jsx(I,{sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:"Bcc"})]}),sx:{px:2,height:48,borderBottom:t=>`solid 1px ${S(t.palette.grey[500],.08)}`}}),e.jsx(W,{placeholder:"Subject",sx:{px:2,height:48,borderBottom:t=>`solid 1px ${S(t.palette.grey[500],.08)}`}}),e.jsxs(n,{spacing:2,flexGrow:1,sx:{p:2},children:[e.jsx(J,{simple:!0,id:"compose-mail",value:r,onChange:d,placeholder:"Type a message",sx:{"& .ql-editor":{},...i.value&&{height:1,"& .quill":{height:1},"& .ql-editor":{maxHeight:"unset"}}}}),e.jsxs(n,{direction:"row",alignItems:"center",children:[e.jsxs(n,{direction:"row",alignItems:"center",flexGrow:1,children:[e.jsx(m,{children:e.jsx(a,{icon:"solar:gallery-add-bold"})}),e.jsx(m,{children:e.jsx(a,{icon:"eva:attach-2-fill"})})]}),e.jsx(M,{variant:"contained",color:"primary",endIcon:e.jsx(a,{icon:"iconamoon:send-fill"}),children:"Send"})]})]})]})]})}function $e({mail:s,renderLabel:o}){const r=k(!0);if(!s)return e.jsx(U,{title:"No Conversation Selected",description:"Select a conversation to read",imgUrl:"/assets/icons/empty/ic_email_selected.svg",sx:{borderRadius:1.5,bgcolor:"background.default"}});const l=e.jsxs(n,{direction:"row",alignItems:"center",flexShrink:0,sx:{height:56,pl:2,pr:1},children:[e.jsx(n,{direction:"row",spacing:1,flexGrow:1,children:s.labelIds.map(x=>{const u=o(x);return u?e.jsx(de,{sx:{bgcolor:S(u.color,.16),color:c=>c.palette.mode==="light"?xe(u.color,.24):he(u.color,.24)},children:u.name},u.id):null})}),e.jsxs(n,{direction:"row",alignItems:"center",children:[e.jsx(_,{color:"warning",icon:e.jsx(a,{icon:"eva:star-outline"}),checkedIcon:e.jsx(a,{icon:"eva:star-fill"}),checked:s.isStarred}),e.jsx(_,{color:"warning",icon:e.jsx(a,{icon:"material-symbols:label-important-rounded"}),checkedIcon:e.jsx(a,{icon:"material-symbols:label-important-rounded"}),checked:s.isImportant}),e.jsx(F,{title:"Archive",children:e.jsx(m,{children:e.jsx(a,{icon:"solar:archive-down-minimlistic-bold"})})}),e.jsx(F,{title:"Mark Unread",children:e.jsx(m,{children:e.jsx(a,{icon:"fluent:mail-unread-20-filled"})})}),e.jsx(F,{title:"Trash",children:e.jsx(m,{children:e.jsx(a,{icon:"solar:trash-bin-trash-bold"})})}),e.jsx(m,{children:e.jsx(a,{icon:"eva:more-vertical-fill"})})]})]}),i=e.jsxs(n,{spacing:2,direction:"row",flexShrink:0,sx:{p:2},children:[e.jsxs(Me,{variant:"subtitle2",sx:{flexGrow:1},children:["Re: ",s.subject]}),e.jsxs(n,{spacing:.5,children:[e.jsxs(n,{direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(m,{size:"small",children:e.jsx(a,{width:18,icon:"solar:reply-bold"})}),e.jsx(m,{size:"small",children:e.jsx(a,{width:18,icon:"solar:multiple-forward-left-broken"})}),e.jsx(m,{size:"small",children:e.jsx(a,{width:18,icon:"solar:forward-bold"})})]}),e.jsx(b,{variant:"caption",noWrap:!0,sx:{color:"text.disabled"},children:pe(s.createdAt)})]})]}),d=e.jsxs(n,{flexShrink:0,direction:"row",alignItems:"center",sx:{p:x=>x.spacing(2,2,1,2)},children:[e.jsx(X,{alt:s.from.name,src:s.from.avatarUrl?`${s.from.avatarUrl}`:"",sx:{mr:2},children:s.from.name.charAt(0).toUpperCase()}),e.jsx(B,{primary:e.jsxs(e.Fragment,{children:[s.from.name,e.jsx(I,{component:"span",sx:{typography:"body2",color:"text.disabled"},children:` <${s.from.email}>`})]}),secondary:e.jsxs(e.Fragment,{children:["To: ",s.to.map(x=>e.jsx(me,{sx:{color:"text.secondary"},children:`${x.email}, `},x.email))]}),secondaryTypographyProps:{mt:.5,noWrap:!0,component:"span",typography:"caption"}})]}),t=e.jsxs(n,{spacing:1,sx:{p:1,borderRadius:1,bgcolor:"background.neutral"},children:[e.jsxs(n,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsxs(ue,{onClick:r.onToggle,sx:{color:"text.secondary",typography:"caption",borderRadius:.5},children:[e.jsx(a,{icon:"eva:attach-2-fill",sx:{mr:.5}}),s.attachments.length," attachments",e.jsx(a,{icon:r.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",width:16,sx:{ml:.5}})]}),e.jsx(M,{startIcon:e.jsx(a,{icon:"eva:cloud-download-fill"}),children:"Download"})]}),e.jsx(ge,{in:r.value,unmountOnExit:!0,timeout:"auto",children:e.jsx(n,{direction:"row",flexWrap:"wrap",spacing:1,children:s.attachments.map(x=>e.jsx(n,{alignItems:"center",justifyContent:"center",sx:{width:40,height:40,flexShrink:0,borderRadius:1,overflow:"hidden",position:"relative",backgroundColor:"background.neutral"},children:e.jsx(je,{tooltip:!0,imageView:!0,file:x.preview,onDownload:()=>console.info("DOWNLOAD"),sx:{width:24,height:24}})},x.id))})})]}),h=e.jsx(I,{sx:{py:3,flexGrow:1,overflow:{xs:"auto",md:"hidden"}},children:e.jsx(D,{children:e.jsx(Se,{children:s.message,sx:{px:2,"& p":{typography:"body2"}}})})}),p=e.jsxs(n,{spacing:2,sx:{p:x=>x.spacing(0,2,2,2)},children:[e.jsx(J,{simple:!0,id:"reply-mail"}),e.jsxs(n,{direction:"row",alignItems:"center",children:[e.jsxs(n,{direction:"row",alignItems:"center",flexGrow:1,children:[e.jsx(m,{children:e.jsx(a,{icon:"solar:gallery-add-bold"})}),e.jsx(m,{children:e.jsx(a,{icon:"eva:attach-2-fill"})})]}),e.jsx(M,{variant:"contained",color:"primary",endIcon:e.jsx(a,{icon:"iconamoon:send-fill"}),children:"Send"})]})]});return e.jsxs(n,{flexGrow:1,sx:{width:1,minWidth:0,borderRadius:1.5,bgcolor:"background.default"},children:[l,e.jsx(G,{sx:{borderStyle:"dashed"}}),i,e.jsx(G,{sx:{borderStyle:"dashed"}}),d,!!s.attachments.length&&e.jsxs(n,{sx:{px:2},children:[" ",t," "]}),h,p]})}const N="inbox";function Ve(){const s=be(),o=fe(),r=o.get("label")||N,l=o.get("id")||"",i=L("up","md"),d=ye(),t=k(),h=k(),p=k(),{labels:x,labelsLoading:u}=Le(),{mails:c,mailsLoading:f,mailsError:$,mailsEmpty:T}=Te(r),{mail:Q,mailLoading:Y,mailError:V}=Ee(l),E=c.allIds[0]||"",ee=g.useCallback(()=>{t.value&&t.onFalse(),p.onToggle()},[p,t]),se=g.useCallback(j=>{if(i||t.onFalse(),j){const y=j!==N?`${w.dashboard.mail}?label=${j}`:w.dashboard.mail;s.push(y)}},[t,s,i]),R=g.useCallback(j=>{i||h.onFalse();const y=r!==N?`${w.dashboard.mail}?id=${j}&label=${r}`:`${w.dashboard.mail}?id=${j}`;s.push(y)},[h,s,r,i]);g.useEffect(()=>{($||V)&&s.push(w.dashboard.mail)},[V,$,s]),g.useEffect(()=>{!l&&E&&R(E)},[E,R,l]),g.useEffect(()=>{p.value?document.body.style.overflow="hidden":document.body.style.overflow=""},[p.value]);const re=e.jsx(ve,{sx:{borderRadius:1.5,bgcolor:"background.default"}}),oe=e.jsx(U,{title:`Nothing in ${r}`,description:"This folder is empty",imgUrl:"/assets/icons/empty/ic_folder_empty.svg",sx:{borderRadius:1.5,maxWidth:{md:320},bgcolor:"background.default"}}),ne=e.jsx(ze,{loading:u,openNav:t.value,onCloseNav:t.onFalse,labels:x,selectedLabelId:r,handleClickLabel:se,onToggleCompose:ee}),ie=e.jsx(Ae,{mails:c,loading:f,openMail:h.value,onCloseMail:h.onFalse,onClickMail:R,selectedLabelId:r,selectedMailId:l}),te=e.jsx(e.Fragment,{children:T?e.jsx(U,{imgUrl:"/assets/icons/empty/ic_email_disabled.svg",sx:{borderRadius:1.5,bgcolor:"background.default",...!i&&{display:"none"}}}):e.jsx($e,{mail:Q,renderLabel:j=>x.filter(y=>y.id===j)[0]})});return e.jsxs(e.Fragment,{children:[e.jsxs(we,{maxWidth:d.themeStretch?!1:"xl",children:[e.jsx(b,{variant:"h4",sx:{mb:{xs:3,md:5}},children:"Mail"}),e.jsxs(n,{spacing:1,sx:{p:1,borderRadius:2,overflow:"hidden",position:"relative",bgcolor:"background.neutral"},children:[!i&&e.jsx(Be,{onOpenNav:t.onTrue,onOpenMail:T?null:h.onTrue}),e.jsxs(n,{spacing:1,direction:"row",sx:{minHeight:{md:720},height:{xs:800,md:"72vh"}},children:[ne,T?oe:ie,Y?re:te]})]})]}),p.value&&e.jsx(De,{onCloseCompose:p.onFalse})]})}function rs(){return e.jsxs(e.Fragment,{children:[e.jsx(ke,{children:e.jsx("title",{children:" Dashboard: Mail"})}),e.jsx(Ve,{})]})}export{rs as default};