import{r as t,bc as V,j as e,s as q,q as H,am as oe,J as f,g as n,bd as J,Q as I,a8 as B,a5 as Q,a4 as G,I as ne,Y,cT as re,a as b,S as x,f as D,B as y,bH as ae,dS as ie,T as E,al as te,dP as le,R as ce,w as de,dx as xe,a2 as he}from"./index-JGGUJxTa.js";import{d as _}from"./format-number-7uu69HrW.js";import{C as pe}from"./confirm-dialog-msuNFFeT.js";import{L as me}from"./ListItem-XXOeljW1.js";import{D as $}from"./DialogTitle-GoYSdL04.js";import{D as K}from"./DialogContent-I9aPqMht.js";import{D as X}from"./DialogActions-X2Ez_hXE.js";import{A as ue}from"./Autocomplete-bGY3qg-r.js";import{C as je}from"./Chip-8vmzDimG.js";import{C as U}from"./Checkbox-knf4fuN6.js";import{U as ge}from"./upload-q_JMMFAm.js";import{A as ve}from"./AvatarGroup-K1CaQJPV.js";function fe(){const[s,r]=t.useState(null);return{copiedText:s,copy:async o=>{if(!(navigator!=null&&navigator.clipboard))return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(o),r(o),!0}catch(i){return console.warn("Copy failed",i),r(null),!1}}}}function Z({person:s}){const[r,l]=t.useState(s.permission),o=V(),i=t.useCallback(h=>{l(h)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(me,{sx:{px:0,py:1},children:[e.jsx(q,{alt:s.name,src:s.avatarUrl,sx:{mr:2}}),e.jsx(H,{primary:s.name,secondary:e.jsx(oe,{title:s.email,children:e.jsx("span",{children:s.email})}),primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{noWrap:!0,component:"span"},sx:{flexGrow:1,pr:1}}),e.jsxs(f,{size:"small",color:"inherit",endIcon:e.jsx(n,{width:20,icon:o.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:-1}}),onClick:o.onOpen,sx:{flexShrink:0,...o.open&&{bgcolor:"action.selected"}},children:["Can ",r]})]}),e.jsx(J,{open:o.open,onClose:o.onClose,sx:{width:160},children:e.jsxs(e.Fragment,{children:[e.jsxs(I,{selected:r==="view",onClick:()=>{o.onClose(),i("view")},children:[e.jsx(n,{icon:"solar:eye-bold"}),"Can view"]}),e.jsxs(I,{selected:r==="edit",onClick:()=>{o.onClose(),i("edit")},children:[e.jsx(n,{icon:"solar:pen-bold"}),"Can edit"]}),e.jsx(B,{sx:{borderStyle:"dashed"}}),e.jsxs(I,{onClick:()=>{o.onClose()},sx:{color:"error.main"},children:[e.jsx(n,{icon:"solar:trash-bin-trash-bold"}),"Remove"]})]})})]})}function ee({shared:s,inviteEmail:r,onCopyLink:l,onChangeInvite:o,open:i,onClose:h,...g}){const v=s&&!!s.length;return e.jsxs(Q,{fullWidth:!0,maxWidth:"xs",open:i,onClose:h,...g,children:[e.jsx($,{children:" Invite "}),e.jsxs(K,{sx:{overflow:"unset"},children:[o&&e.jsx(G,{fullWidth:!0,value:r,placeholder:"Email",onChange:o,InputProps:{endAdornment:e.jsx(ne,{position:"end",children:e.jsx(f,{color:"inherit",variant:"contained",disabled:!r,sx:{mr:-.75},children:"Send Invite"})})},sx:{mb:2}}),v&&e.jsx(Y,{sx:{maxHeight:60*6},children:e.jsx(re,{disablePadding:!0,children:s.map(p=>e.jsx(Z,{person:p},p.id))})})]}),e.jsxs(X,{sx:{justifyContent:"space-between"},children:[l&&e.jsx(f,{startIcon:e.jsx(n,{icon:"eva:link-2-fill"}),onClick:l,children:"Copy link"}),h&&e.jsx(f,{variant:"outlined",color:"inherit",onClick:h,children:"Close"})]})]})}function Ce({item:s,open:r,favorited:l,onFavorite:o,onCopyLink:i,onClose:h,onDelete:g,...v}){const{name:p,size:C,url:T,type:w,shared:u,modifiedAt:k}=s,j=u&&!!u.length,c=b(!0),m=b(),F=b(!0),[S,z]=t.useState(""),[R,P]=t.useState(s.tags.slice(0,3)),L=t.useCallback(a=>{z(a.target.value)},[]),W=t.useCallback(a=>{P(a)},[]),M=e.jsxs(x,{spacing:1.5,children:[e.jsxs(x,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{typography:"subtitle2"},children:["Tags",e.jsx(D,{size:"small",onClick:c.onToggle,children:e.jsx(n,{icon:c.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})})]}),c.value&&e.jsx(ue,{multiple:!0,freeSolo:!0,options:s.tags.map(a=>a),getOptionLabel:a=>a,defaultValue:s.tags.slice(0,3),value:R,onChange:(a,d)=>{W(d)},renderOption:(a,d)=>t.createElement("li",{...a,key:d},d),renderTags:(a,d)=>a.map((N,se)=>t.createElement(je,{...d({index:se}),size:"small",variant:"soft",label:N,key:N})),renderInput:a=>e.jsx(G,{...a,placeholder:"#Add a tags"})})]}),O=e.jsxs(x,{spacing:1.5,children:[e.jsxs(x,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{typography:"subtitle2"},children:["Properties",e.jsx(D,{size:"small",onClick:F.onToggle,children:e.jsx(n,{icon:F.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})})]}),F.value&&e.jsxs(e.Fragment,{children:[e.jsxs(x,{direction:"row",sx:{typography:"caption",textTransform:"capitalize"},children:[e.jsx(y,{component:"span",sx:{width:80,color:"text.secondary",mr:2},children:"Size"}),_(C)]}),e.jsxs(x,{direction:"row",sx:{typography:"caption",textTransform:"capitalize"},children:[e.jsx(y,{component:"span",sx:{width:80,color:"text.secondary",mr:2},children:"Modified"}),ae(k)]}),e.jsxs(x,{direction:"row",sx:{typography:"caption",textTransform:"capitalize"},children:[e.jsx(y,{component:"span",sx:{width:80,color:"text.secondary",mr:2},children:"Type"}),ie(w)]})]})]}),A=e.jsxs(e.Fragment,{children:[e.jsxs(x,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:2.5},children:[e.jsx(E,{variant:"subtitle2",children:" File Share With "}),e.jsx(D,{size:"small",color:"primary",onClick:m.onTrue,sx:{width:24,height:24,bgcolor:"primary.main",color:"primary.contrastText","&:hover":{bgcolor:"primary.dark"}},children:e.jsx(n,{icon:"mingcute:add-line"})})]}),j&&e.jsx(y,{sx:{pl:2.5,pr:1},children:u.map(a=>e.jsx(Z,{person:a},a.id))})]});return e.jsxs(e.Fragment,{children:[e.jsxs(te,{open:r,onClose:h,anchor:"right",slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:320}},...v,children:[e.jsxs(Y,{sx:{height:1},children:[e.jsxs(x,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:2.5},children:[e.jsx(E,{variant:"h6",children:" Info "}),e.jsx(U,{color:"warning",icon:e.jsx(n,{icon:"eva:star-outline"}),checkedIcon:e.jsx(n,{icon:"eva:star-fill"}),checked:l,onChange:o})]}),e.jsxs(x,{spacing:2.5,justifyContent:"center",sx:{p:2.5,bgcolor:"background.neutral"},children:[e.jsx(le,{imageView:!0,file:w==="folder"?w:T,sx:{width:64,height:64},imgSx:{borderRadius:1}}),e.jsx(E,{variant:"subtitle1",sx:{wordBreak:"break-all"},children:p}),e.jsx(B,{sx:{borderStyle:"dashed"}}),M,O]}),A]}),e.jsx(y,{sx:{p:2.5},children:e.jsx(f,{fullWidth:!0,variant:"soft",color:"error",size:"large",startIcon:e.jsx(n,{icon:"solar:trash-bin-trash-bold"}),onClick:g,children:"Delete"})})]}),e.jsx(ee,{open:m.value,shared:u,inviteEmail:S,onChangeInvite:L,onCopyLink:i,onClose:()=>{m.onFalse(),z("")}})]})}function Re({title:s,subTitle:r,link:l,onOpen:o,collapse:i,onCollapse:h,sx:g,...v}){return e.jsxs(x,{direction:"row",alignItems:"center",sx:{mb:3,...g},...v,children:[e.jsxs(x,{flexGrow:1,children:[e.jsxs(x,{direction:"row",alignItems:"center",spacing:1,flexGrow:1,children:[e.jsxs(E,{variant:"h6",children:[" ",s," "]}),e.jsx(D,{size:"small",color:"primary",onClick:o,sx:{width:24,height:24,bgcolor:"primary.main",color:"primary.contrastText","&:hover":{bgcolor:"primary.dark"}},children:e.jsx(n,{icon:"mingcute:add-line"})})]}),e.jsx(y,{sx:{typography:"body2",color:"text.disabled",mt:.5},children:r})]}),l&&e.jsx(f,{href:l,component:ce,size:"small",color:"inherit",endIcon:e.jsx(n,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"}),h&&e.jsx(D,{onClick:h,children:e.jsx(n,{icon:i?"eva:arrow-ios-downward-fill":"eva:arrow-ios-upward-fill"})})]})}function be({title:s="Upload Files",open:r,onClose:l,onCreate:o,onUpdate:i,folderName:h,onChangeFolderName:g,...v}){const[p,C]=t.useState([]);t.useEffect(()=>{r||C([])},[r]);const T=t.useCallback(j=>{const c=j.map(m=>Object.assign(m,{preview:URL.createObjectURL(m)}));C([...p,...c])},[p]),w=()=>{l(),console.info("ON UPLOAD")},u=j=>{const c=p.filter(m=>m!==j);C(c)},k=()=>{C([])};return e.jsxs(Q,{fullWidth:!0,maxWidth:"sm",open:r,onClose:l,...v,children:[e.jsxs($,{sx:{p:j=>j.spacing(3,3,2,3)},children:[" ",s," "]}),e.jsxs(K,{dividers:!0,sx:{pt:1,pb:0,border:"none"},children:[(o||i)&&e.jsx(G,{fullWidth:!0,label:"Folder name",value:h,onChange:g,sx:{mb:3}}),e.jsx(ge,{multiple:!0,files:p,onDrop:T,onRemove:u})]}),e.jsxs(X,{children:[e.jsx(f,{variant:"contained",startIcon:e.jsx(n,{icon:"eva:cloud-upload-fill"}),onClick:w,children:"Upload"}),!!p.length&&e.jsx(f,{variant:"outlined",color:"inherit",onClick:k,children:"Remove all"}),(o||i)&&e.jsx(x,{direction:"row",justifyContent:"flex-end",flexGrow:1,children:e.jsx(f,{variant:"soft",onClick:o||i,children:i?"Save":"Create"})})]})]})}function Le({folder:s,selected:r,onSelect:l,onDelete:o,sx:i,...h}){var A,a;const{enqueueSnackbar:g}=de(),{copy:v}=fe(),[p,C]=t.useState(""),[T,w]=t.useState(s.name),u=b(),k=b(),j=b(),c=V(),m=b(),F=b(),S=b(s.isFavorited),z=t.useCallback(d=>{C(d.target.value)},[]),R=t.useCallback(d=>{w(d.target.value)},[]),P=t.useCallback(()=>{g("Copied!"),v(s.url)},[v,g,s.url]),L=e.jsxs(x,{direction:"row",alignItems:"center",sx:{top:8,right:8,position:"absolute"},children:[e.jsx(U,{color:"warning",icon:e.jsx(n,{icon:"eva:star-outline"}),checkedIcon:e.jsx(n,{icon:"eva:star-fill"}),checked:S.value,onChange:S.onToggle}),e.jsx(D,{color:c.open?"inherit":"default",onClick:c.onOpen,children:e.jsx(n,{icon:"eva:more-vertical-fill"})})]}),W=(k.value||r)&&l?e.jsx(U,{size:"medium",checked:r,onClick:l,icon:e.jsx(n,{icon:"eva:radio-button-off-fill"}),checkedIcon:e.jsx(n,{icon:"eva:checkmark-circle-2-fill"}),sx:{p:.75}}):e.jsx(y,{component:"img",src:"/assets/icons/files/ic_folder.svg",sx:{width:36,height:36}}),M=e.jsx(H,{onClick:F.onTrue,primary:s.name,secondary:e.jsxs(e.Fragment,{children:[_(s.size),e.jsx(y,{component:"span",sx:{mx:.75,width:2,height:2,borderRadius:"50%",bgcolor:"currentColor"}}),s.totalFiles," files"]}),primaryTypographyProps:{noWrap:!0,typography:"subtitle1"},secondaryTypographyProps:{mt:.5,component:"span",alignItems:"center",typography:"caption",color:"text.disabled",display:"inline-flex"}}),O=e.jsx(ve,{max:3,sx:{[`& .${xe.avatar}`]:{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:(A=s.shared)==null?void 0:A.map(d=>e.jsx(q,{alt:d.name,src:d.avatarUrl},d.id))});return e.jsxs(e.Fragment,{children:[e.jsxs(x,{component:he,variant:"outlined",spacing:1,alignItems:"flex-start",sx:{p:2.5,maxWidth:222,borderRadius:2,bgcolor:"unset",cursor:"pointer",position:"relative",...(k.value||r)&&{bgcolor:"background.paper",boxShadow:d=>d.customShadows.z20},...i},...h,children:[e.jsx(y,{onMouseEnter:k.onTrue,onMouseLeave:k.onFalse,children:W}),L,M,!!((a=s==null?void 0:s.shared)!=null&&a.length)&&O]}),e.jsxs(J,{open:c.open,onClose:c.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(I,{onClick:()=>{c.onClose(),P()},children:[e.jsx(n,{icon:"eva:link-2-fill"}),"Copy Link"]}),e.jsxs(I,{onClick:()=>{c.onClose(),j.onTrue()},children:[e.jsx(n,{icon:"solar:share-bold"}),"Share"]}),e.jsxs(I,{onClick:()=>{c.onClose(),u.onTrue()},children:[e.jsx(n,{icon:"solar:pen-bold"}),"Edit"]}),e.jsx(B,{sx:{borderStyle:"dashed"}}),e.jsxs(I,{onClick:()=>{m.onTrue(),c.onClose()},sx:{color:"error.main"},children:[e.jsx(n,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(Ce,{item:s,favorited:S.value,onFavorite:S.onToggle,onCopyLink:P,open:F.value,onClose:F.onFalse,onDelete:()=>{F.onFalse(),o()}}),e.jsx(ee,{open:j.value,shared:s.shared,inviteEmail:p,onChangeInvite:z,onCopyLink:P,onClose:()=>{j.onFalse(),C("")}}),e.jsx(be,{open:u.value,onClose:u.onFalse,title:"Edit Folder",onUpdate:()=>{u.onFalse(),w(T),console.info("UPDATE FOLDER",T)},folderName:T,onChangeFolderName:R}),e.jsx(pe,{open:m.value,onClose:m.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(f,{variant:"contained",color:"error",onClick:o,children:"Delete"})})]})}export{Ce as F,ee as a,Re as b,Le as c,be as d,fe as u};
