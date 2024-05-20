import{j as e,v as T,B as c,T as I,a_ as $,S as b,aS as O,aA as H,aB as A,dI as q,t as K,z as V,aV as U,r as m,bi as N,b as F,h as j,g as Q,m as _,bG as X,dE as Z,n as ee,X as se,dJ as ae,bj as P,bk as S,K as oe,J as te,aN as ne,q as re,C as ie,Q as C,p as B,N as le,dK as L,dL as ce,H as de}from"./index-crR8fPbl.js";import{U as pe}from"./upload-box-l_v6jxiO.js";import{d as f}from"./format-number-t-aQIVvi.js";import{u as me,F as he,a as xe,b as R,c as ge,d as W}from"./file-manager-folder-item-VyP-bvYh.js";import{C as ue}from"./Checkbox-uS0Dug3P.js";import{A as je}from"./AvatarGroup-4ox_baWf.js";import{C as z}from"./chart-BfNczSmg.js";import{u as G}from"./use-chart-A2w3iaPP.js";import"./preview-multi-file-fvCEVmIa.js";import"./index-rGrVjwg1.js";import"./tslib.es6-ADzvKRL9.js";import"./fade-VV5890gg.js";import"./transition-eqIn2NYL.js";import"./index-OAAMXf_B.js";import"./confirm-dialog-e8aG9Ock.js";import"./DialogTitle-qITN9Y-N.js";import"./dialogTitleClasses-bflJQ_FN.js";import"./DialogContent-PpTN-hcR.js";import"./DialogActions-uC8Ntfc2.js";import"./ListItem-7dYvQPuU.js";import"./Autocomplete-9niLsZQ5.js";import"./Chip-HisbdHvZ.js";import"./upload-DwYhV57j.js";import"./SwitchBase-HZUDhW8q.js";function D({title:s,value:r,total:i,icon:h,sx:t,...l}){return e.jsxs(T,{sx:{p:3,...t},...l,children:[e.jsx(c,{component:"img",src:h,sx:{width:48,height:48}}),e.jsx(I,{variant:"h6",sx:{mt:3},children:s}),e.jsx($,{value:24,variant:"determinate",color:"inherit",sx:{my:2,height:6,"&:before":{bgcolor:"divider",opacity:1}}}),e.jsxs(b,{direction:"row",spacing:.5,justifyContent:"flex-end",sx:{typography:"subtitle2"},children:[e.jsx(c,{sx:{mr:.5,typography:"body2",color:"text.disabled"},children:f(r)}),` / ${f(i)}`]})]})}function be({sx:s,...r}){const i=O();return e.jsxs(b,{alignItems:"center",sx:{...H({direction:"135deg",startColor:A(i.palette.primary.light,.2),endColor:A(i.palette.primary.main,.2)}),p:5,borderRadius:2,backgroundColor:"common.white",...s},...r,children:[e.jsx(q,{}),e.jsx(K,{size:"large",color:"inherit",variant:"contained",sx:{mt:5,mb:2,color:"common.white",bgcolor:"grey.800","&:hover":{bgcolor:"grey.700"}},children:"Upgrade Plan"}),e.jsx(I,{variant:"caption",sx:{color:"primary.dark",textAlign:"center"},children:"Upgrade your plan and get more space"})]})}function ve({file:s,onDelete:r,sx:i,...h}){var M,E;const{enqueueSnackbar:t}=V(),{copy:l}=me(),g=U("up","sm"),[d,n]=m.useState(""),o=N(),v=F(),u=F(),x=F(s.isFavorited),a=m.useCallback(y=>{n(y.target.value)},[]),w=m.useCallback(()=>{t("Copied!"),l(s.url)},[l,t,s.url]),k=e.jsxs(c,{sx:{top:0,right:8,position:"absolute",...g&&{flexShrink:0,position:"unset"}},children:[e.jsx(ue,{color:"warning",icon:e.jsx(j,{icon:"eva:star-outline"}),checkedIcon:e.jsx(j,{icon:"eva:star-fill"}),checked:x.value,onChange:x.onToggle}),e.jsx(Q,{color:o.open?"inherit":"default",onClick:o.onOpen,children:e.jsx(j,{icon:"eva:more-vertical-fill"})})]}),J=e.jsx(_,{onClick:u.onTrue,primary:s.name,secondary:e.jsxs(e.Fragment,{children:[f(s.size),e.jsx(c,{sx:{mx:.75,width:2,height:2,borderRadius:"50%",bgcolor:"currentColor"}}),X(s.modifiedAt)]}),primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,component:"span",alignItems:"center",typography:"caption",color:"text.disabled",display:"inline-flex"}}),Y=e.jsx(je,{max:3,sx:{[`& .${Z.avatar}`]:{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:(M=s.shared)==null?void 0:M.map(y=>e.jsx(ee,{alt:y.name,src:y.avatarUrl},y.id))});return e.jsxs(e.Fragment,{children:[e.jsxs(b,{component:se,variant:"outlined",spacing:1,direction:{xs:"column",sm:"row"},alignItems:{xs:"unset",sm:"center"},sx:{borderRadius:2,bgcolor:"unset",cursor:"pointer",position:"relative",p:{xs:2.5,sm:2},"&:hover":{bgcolor:"background.paper",boxShadow:y=>y.customShadows.z20},...i},...h,children:[e.jsx(ae,{file:s.type,sx:{width:36,height:36,mr:1}}),J,!!((E=s==null?void 0:s.shared)!=null&&E.length)&&Y,k]}),e.jsxs(P,{open:o.open,onClose:o.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(S,{onClick:()=>{o.onClose(),w()},children:[e.jsx(j,{icon:"eva:link-2-fill"}),"Copy Link"]}),e.jsxs(S,{onClick:()=>{o.onClose(),v.onTrue()},children:[e.jsx(j,{icon:"solar:share-bold"}),"Share"]}),e.jsx(oe,{sx:{borderStyle:"dashed"}}),e.jsxs(S,{onClick:()=>{o.onClose(),r()},sx:{color:"error.main"},children:[e.jsx(j,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(he,{item:s,favorited:x.value,onFavorite:x.onToggle,onCopyLink:w,open:u.value,onClose:u.onFalse,onDelete:()=>{u.onFalse(),r()}}),e.jsx(xe,{open:v.value,shared:s.shared,inviteEmail:d,onChangeInvite:a,onCopyLink:w,onClose:()=>{v.onFalse(),n("")}})]})}function ye({title:s,subheader:r,chart:i,...h}){const{labels:t,colors:l,series:g,options:d}=i,n=N(),[o,v]=m.useState("Week"),u=G({chart:{stacked:!0},colors:l,stroke:{width:0},xaxis:{categories:o==="Week"&&t.week||o==="Month"&&t.month||t.year},tooltip:{y:{formatter:a=>f(a)}},plotOptions:{bar:{borderRadius:o==="Week"&&8||o==="Month"&&6||10,columnWidth:"20%"}},...d}),x=m.useCallback(a=>{n.onClose(),v(a)},[n]);return e.jsxs(e.Fragment,{children:[e.jsxs(T,{...h,children:[e.jsx(te,{title:s,subheader:r,action:e.jsxs(ne,{onClick:n.onOpen,sx:{pl:1,py:.5,pr:.5,borderRadius:1,typography:"subtitle2",bgcolor:"background.neutral"},children:[o,e.jsx(j,{width:16,icon:n.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:.5}})]})}),g.map(a=>e.jsx(c,{sx:{mt:3,mx:3},children:a.type===o&&e.jsx(z,{dir:"ltr",type:"bar",series:a.data,options:u,width:"100%",height:364})},a.type))]}),e.jsx(P,{open:n.open,onClose:n.onClose,sx:{width:140},children:g.map(a=>e.jsx(S,{selected:a.type===o,onClick:()=>x(a.type),children:a.type},a.type))})]})}function Ce({data:s,total:r,chart:i,...h}){const t=O(),{colors:l=[t.palette.info.main,t.palette.info.dark],series:g,options:d}=i,n=G({chart:{offsetY:-16,sparkline:{enabled:!0}},grid:{padding:{top:24,bottom:24}},legend:{show:!1},plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"56%"},dataLabels:{name:{offsetY:8},value:{offsetY:-40},total:{label:`Used of ${f(r)} / 50GB`,color:t.palette.text.disabled,fontSize:t.typography.body2.fontSize,fontWeight:t.typography.body2.fontWeight}}}},fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:l[0],opacity:1},{offset:100,color:l[1],opacity:1}]}},...d});return e.jsxs(T,{...h,children:[e.jsx(z,{dir:"ltr",type:"radialBar",series:[g],options:n,width:"100%",height:360}),e.jsx(b,{spacing:3,sx:{px:3,pb:5},children:s.map(o=>e.jsxs(b,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(c,{sx:{width:40,height:40},children:o.icon}),e.jsx(_,{primary:o.name,secondary:`${o.filesCount} files`,secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),e.jsxs(c,{sx:{typography:"subtitle2"},children:[" ",f(o.usedStorage)," "]})]},o.name))})]})}const p=1e9*24,fe={week:["Mon","Tue","Web","Thu","Fri","Sat","Sun"],month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],year:["2018","2019","2020","2021","2022"]};function we(){const s=O(),r=U("down","sm"),i=re(),[h,t]=m.useState(""),[l,g]=m.useState([]),d=F(),n=F(),o=m.useCallback(a=>{t(a.target.value)},[]),v=m.useCallback(()=>{d.onFalse(),t(""),console.info("CREATE NEW FOLDER")},[d]),u=m.useCallback(a=>{const w=a.map(k=>Object.assign(k,{preview:URL.createObjectURL(k)}));g([...l,...w])},[l]),x=e.jsx(Ce,{total:p,chart:{series:76},data:[{name:"Images",usedStorage:p/2,filesCount:223,icon:e.jsx(c,{component:"img",src:"/assets/icons/files/ic_img.svg"})},{name:"Media",usedStorage:p/5,filesCount:223,icon:e.jsx(c,{component:"img",src:"/assets/icons/files/ic_video.svg"})},{name:"Documents",usedStorage:p/5,filesCount:223,icon:e.jsx(c,{component:"img",src:"/assets/icons/files/ic_document.svg"})},{name:"Other",usedStorage:p/10,filesCount:223,icon:e.jsx(c,{component:"img",src:"/assets/icons/files/ic_file.svg"})}]});return e.jsxs(e.Fragment,{children:[e.jsx(ie,{maxWidth:i.themeStretch?!1:"xl",children:e.jsxs(C,{container:!0,spacing:3,children:[r&&e.jsx(C,{xs:12,children:x}),e.jsx(C,{xs:12,sm:6,md:4,children:e.jsx(D,{title:"Dropbox",value:p/10,total:p,icon:"/assets/icons/app/ic_dropbox.svg"})}),e.jsx(C,{xs:12,sm:6,md:4,children:e.jsx(D,{title:"Drive",value:p/5,total:p,icon:"/assets/icons/app/ic_drive.svg"})}),e.jsx(C,{xs:12,sm:6,md:4,children:e.jsx(D,{title:"OneDrive",value:p/2,total:p,icon:"/assets/icons/app/ic_onedrive.svg"})}),e.jsxs(C,{xs:12,md:6,lg:8,children:[e.jsx(ye,{title:"Data Activity",chart:{labels:fe,colors:[s.palette.primary.main,s.palette.error.main,s.palette.warning.main,s.palette.text.disabled],series:[{type:"Week",data:[{name:"Images",data:[20,34,48,65,37,48,9]},{name:"Media",data:[10,34,13,26,27,28,18]},{name:"Documents",data:[10,14,13,16,17,18,28]},{name:"Other",data:[5,12,6,7,8,9,48]}]},{type:"Month",data:[{name:"Images",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Media",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Documents",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Other",data:[10,34,13,56,77,88,99,77,45,12,43,34]}]},{type:"Year",data:[{name:"Images",data:[10,34,13,56,77]},{name:"Media",data:[10,34,13,56,77]},{name:"Documents",data:[10,34,13,56,77]},{name:"Other",data:[10,34,13,56,77]}]}]}}),e.jsxs("div",{children:[e.jsx(R,{title:"Folders",link:B.dashboard.fileManager,onOpen:d.onTrue,sx:{mt:5}}),e.jsx(le,{children:e.jsx(b,{direction:"row",spacing:3,sx:{pb:3},children:L.map(a=>e.jsx(ge,{folder:a,onDelete:()=>console.info("DELETE",a.id),sx:{...L.length>3&&{minWidth:222}}},a.id))})}),e.jsx(R,{title:"Recent Files",link:B.dashboard.fileManager,onOpen:n.onTrue,sx:{mt:2}}),e.jsx(b,{spacing:2,children:ce.slice(0,5).map(a=>e.jsx(ve,{file:a,onDelete:()=>console.info("DELETE",a.id)},a.id))})]})]}),e.jsxs(C,{xs:12,md:6,lg:4,children:[e.jsx(pe,{onDrop:u,placeholder:e.jsxs(b,{spacing:.5,alignItems:"center",sx:{color:"text.disabled"},children:[e.jsx(j,{icon:"eva:cloud-upload-fill",width:40}),e.jsx(I,{variant:"body2",children:"Upload file"})]}),sx:{mb:3,py:2.5,width:"auto",height:"auto",borderRadius:1.5}}),e.jsx(c,{sx:{display:{xs:"none",sm:"block"}},children:x}),e.jsx(be,{sx:{mt:3}})]})]})}),e.jsx(W,{open:n.value,onClose:n.onFalse}),e.jsx(W,{open:d.value,onClose:d.onFalse,title:"New Folder",folderName:h,onChangeFolderName:o,onCreate:v})]})}function qe(){return e.jsxs(e.Fragment,{children:[e.jsx(de,{children:e.jsx("title",{children:" Dashboard: File"})}),e.jsx(we,{})]})}export{qe as default};