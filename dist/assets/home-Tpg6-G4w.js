import{ab as ne,ac as ie,r,ad as K,ae as q,af as oe,ag as M,ah as ce,ai as de,j as e,B as d,a5 as p,E as X,aj as W,g as U,ak as le,a7 as xe,X as pe,S as l,T as a,al as ue,f as $,a3 as V,am as w,R as he,an as me,ao as J,a as ge,ap as fe,C as je,z as _,_ as be,aq as ve,ar as Se,H as ye}from"./index-zFfPxWlY.js";import{u as j}from"./use-debounce-WEKGFWn6.js";import{u as De}from"./gravestone-E4Sp2NWG.js";import{v as u}from"./fade-VV5890gg.js";import{M as ke}from"./motion-container-EF93FD8O.js";import{D as B}from"./DatePicker-xvGV52gi.js";import"./transition-eqIn2NYL.js";import"./index-g5_14GVp.js";import"./DialogActions-pydsUUwr.js";import"./ListItem-vuk4xiXM.js";import"./Chip-gh5rtDwp.js";import"./DialogContent-DOQSYuAM.js";import"./dialogTitleClasses-ryWSJ9bo.js";function Ce(t){const s=ne(()=>ie(t)),{isStatic:i}=r.useContext(K);if(i){const[,x]=r.useState(t);r.useEffect(()=>s.on("change",x),[])}return s}function we(t,s={}){const{isStatic:i}=r.useContext(K),x=r.useRef(null),o=Ce(q(t)?t.get():t),h=()=>{x.current&&x.current.stop()};return r.useInsertionEffect(()=>o.attach((c,m)=>{if(i)return m(c);if(h(),x.current=oe({keyframes:[o.get(),c],velocity:o.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...s,onUpdate:m}),!M.isProcessing){const g=performance.now()-M.timestamp;g<30&&(x.current.time=ce(g))}return o.get()},h),[JSON.stringify(s)]),de(()=>{if(q(t))return t.on("change",c=>o.set(parseFloat(c)))},[o]),o}function Be({color:t="primary",size:s=3,scrollYProgress:i,sx:x,...o}){const h=we(i,{stiffness:100,damping:30,restDelta:.001});return e.jsx(d,{component:p.div,sx:{top:0,left:0,right:0,height:s,zIndex:1999,position:"fixed",transformOrigin:"0%",bgcolor:"text.primary",...t!=="inherit"&&{background:c=>`linear-gradient(135deg, ${c.palette[t].light} 0%, ${c.palette[t].main} 100%)`},...x},style:{scaleX:h},...o})}function Fe({open:t,onOpen:s,onClose:i,filters:x,onFilters:o,canReset:h,onResetFilters:c,graveyardName:m,startDOB:g,endDOB:F,startDeceasedDate:R,endDeceasedDate:T,graveSite:v,setGraveyardName:S,setStartDOB:y,setEndDOB:D,setStartDeceasedDate:k,setEndDeceasedDate:C,setGraveSite:E,handleShowSearchResult:A}){const z=e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(a,{variant:"h6",sx:{flexGrow:1},children:"Advanced Search"}),e.jsx(ue,{title:"Reset",children:e.jsx($,{onClick:c,children:e.jsx(W,{color:"error",variant:"dot",invisible:!h,children:e.jsx(U,{icon:"solar:restart-bold"})})})}),e.jsx($,{onClick:i,children:e.jsx(U,{icon:"mingcute:close-line"})})]}),G=e.jsxs(l,{children:[e.jsx(a,{variant:"subtitle2",sx:{mb:1},children:"Name"}),e.jsx(V,{variant:"outlined",required:!0,fullWidth:!0,label:"Name",defaultValue:"",sx:{my:1},value:m,onChange:n=>S(n.target.value)})]}),I=e.jsxs(l,{children:[e.jsx(a,{variant:"subtitle2",sx:{mb:1},children:"Birthday"}),e.jsx(B,{label:"From",onChange:n=>{y(w(n))},sx:{my:1}}),e.jsx(B,{label:"To",onChange:n=>D(w(n)),sx:{my:1}})]}),H=e.jsxs(l,{children:[e.jsx(a,{variant:"subtitle2",sx:{mb:1},children:"Date of death"}),e.jsx(B,{label:"From",onChange:n=>k(w(n)),sx:{my:1}}),e.jsx(B,{label:"To",onChange:n=>C(w(n)),sx:{my:1}})]}),b=e.jsxs(l,{children:[e.jsx(a,{variant:"subtitle2",sx:{mb:1},children:"Grave Site"}),e.jsx(V,{variant:"outlined",required:!0,fullWidth:!0,label:"Locatin",defaultValue:"",sx:{my:1},value:v,onChange:n=>E(n.target.value)})]});return e.jsxs(e.Fragment,{children:[e.jsx(X,{disableRipple:!0,color:"success",variant:"contained",endIcon:e.jsx(W,{color:"error",variant:"dot",invisible:!h,children:e.jsx(U,{icon:"ic:round-filter-list"})}),onClick:s,children:"Advanced Search"}),e.jsxs(le,{anchor:"right",open:t,onClose:i,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:320}},children:[z,e.jsx(xe,{}),e.jsx(pe,{sx:{px:2.5,py:3},children:e.jsxs(l,{spacing:3,children:[G,I,H,b]})})]})]})}function Re({gravestones:t}){return e.jsx(l,{spacing:3,sx:{mb:{xs:1,md:2}},children:e.jsx(d,{sx:{pb:{xs:3.75,md:3.75},px:{xs:1,md:1.5}},children:t==null?void 0:t.map((s,i)=>e.jsxs(d,{sx:{backgroundColor:"white",p:{xs:1,md:1.5}},children:[e.jsx(d,{sx:{display:"flex",justifyContent:"space-between"},children:e.jsx(a,{sx:{display:"block",p:{xs:1.5,md:1.5},fontSize:"18px"},color:"primary",children:e.jsx(X,{component:he,href:`${me}/${s.id}/${s.graveyardId}`,variant:"text",children:s==null?void 0:s.name})})}),e.jsxs(d,{gap:{xs:3,lg:10},display:"grid",alignItems:"center",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[e.jsx(p.div,{variants:u().inUp,children:e.jsxs(a,{sx:{py:{xs:.5,md:.5},px:{xs:1.5,md:1.5},fontSize:"14px"},color:"common.black",children:["Born: ",s==null?void 0:s.birthday]})}),e.jsx(p.div,{variants:u().inUp,children:e.jsxs(a,{sx:{py:{xs:.5,md:.5},px:{xs:1.5,md:1.5},fontSize:"14px"},color:"common.black",children:["Deceased: ",s==null?void 0:s.deceasedDate]})}),e.jsx(p.div,{variants:u().inUp,children:e.jsxs(a,{sx:{py:{xs:.5,md:.5},px:{xs:1.5,md:1.5},fontSize:"14px"},color:"common.black",children:["Buried: ",s==null?void 0:s.buriedDate]})})]}),e.jsxs(d,{gap:{xs:3,lg:10},display:"grid",alignItems:"center",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[e.jsx(p.div,{variants:u().inUp,children:e.jsx(a,{sx:{py:{xs:.5,md:.5},px:{xs:1.5,md:1.5},fontSize:"14px",fontStyle:"bold"},color:"common.black"})}),e.jsx(p.div,{variants:u().inUp,children:e.jsxs(a,{sx:{py:{xs:.5,md:.5},px:{xs:1.5,md:1.5},fontSize:"14px"},color:"common.black",children:["Quarter: ",s==null?void 0:s.quarter]})}),e.jsx(p.div,{variants:u().inUp,children:e.jsxs(a,{sx:{py:{xs:.5,md:.5},px:{xs:1.5,md:1.5},fontSize:"14px"},color:"common.black",children:["Grave site: ",s==null?void 0:s.graveSite]})})]}),e.jsx(d,{gap:{xs:3,lg:10},display:"grid",alignItems:"center",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:e.jsx(p.div,{variants:u().inUp,children:e.jsxs(a,{sx:{py:{xs:.5,md:.5},px:{xs:1.5,md:1.5},fontSize:"14px",fontStyle:"bold"},color:"common.black",children:["Hometown: ",s==null?void 0:s.homeTown]})})}),e.jsx(d,{gap:{xs:3,lg:10},display:"grid",alignItems:"center",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:e.jsx(p.div,{variants:u().inUp,children:e.jsxs(a,{sx:{py:{xs:.5,md:.5},px:{xs:1.5,md:1.5},fontSize:"14px",fontStyle:"bold"},color:"common.black",children:["Grave site number: ",s==null?void 0:s.graveSiteNumber]})})})]},i))})})}const Te=be("div")(({theme:t})=>({...ve({color:Se(t.palette.background.default,t.palette.mode==="light"?.9:.94),imgUrl:"/assets/background/overlay_3.jpg"}),width:"100%",height:"100%",position:"relative"})),Y={gender:[],colors:[],rating:"",category:"all",priceRange:[0,200]};function Ee(){const t=r.useRef(null),{scrollY:s}=J(),[i,x]=r.useState(0),[o,h]=r.useState(!1),[c,m]=r.useState(""),[g,F]=r.useState(""),[R,T]=r.useState(""),[v,S]=r.useState(""),[y,D]=r.useState(""),[k,C]=r.useState(""),E=j(c),A=j(g),z=j(R),G=j(v),I=j(y),H=j(k),{gravestones:b}=De({name:E,birthday:{start:A,end:z},deceasedDate:{start:G,end:I},graveSite:H}),n=ge(),[N,Q]=r.useState(Y),Z=r.useCallback((f,O)=>{Q(P=>({...P,[f]:O}))},[]),ee=r.useCallback(()=>{m(""),F(""),T(""),S(""),D(""),C("")},[]),se=!fe(Y,N),L=r.useCallback(()=>{let f=0;t.current&&(f=t.current.offsetHeight),s.on("change",O=>{const P=O*100/f;x(Math.floor(P))})},[s]),te=()=>{h(!0)};r.useEffect(()=>{L()},[L]);const re=i>120,ae=e.jsx(l,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"row-reverse",sm:"row-reverse"},children:e.jsx(l,{direction:"row",spacing:1,flexShrink:0,children:e.jsx(Fe,{open:n.value,onOpen:n.onTrue,onClose:n.onFalse,filters:N,onFilters:Z,canReset:se,onResetFilters:ee,graveyardName:c,startDOB:g,endDOB:R,startDeceasedDate:v,endDeceasedDate:y,graveSite:k,setGraveyardName:m,setStartDOB:F,setEndDOB:T,setStartDeceasedDate:S,setEndDeceasedDate:D,setGraveSite:C,handleShowSearchResult:te})})});return e.jsx(Te,{ref:t,sx:{...re&&{opacity:0}},children:e.jsx(d,{sx:{height:"100%",py:{xs:15,md:20},overflow:"hidden",position:"relative",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(/assets/background/splash.jpg)"},children:e.jsxs(je,{component:ke,children:[!o&&e.jsxs(l,{spacing:3,sx:{textAlign:"center",mb:{xs:5,md:10}},children:[e.jsx(p.div,{variants:u().inUp,children:e.jsx(a,{component:"div",variant:"h2",sx:{color:"#d69c00"},children:"Welcome to GraveSteller!"})}),e.jsx(p.div,{variants:u().inDown,children:e.jsxs(a,{variant:"overline",children:[e.jsx("b",{children:"Here you can search for people buried"}),","," ",e.jsx("small",{children:"in currently 109 cemetery administrations"}),","," ",e.jsx("b",{children:"842 cemeteries and 0 people buried."}),e.jsx("br",{}),e.jsx("b",{children:"At"})," ",e.jsx("small",{children:"administrations"})," ",e.jsx("b",{children:"with the symbol *, you can also order grave care."})]})})]}),e.jsxs(l,{spacing:3,sx:{mb:{xs:1,md:2}},children:[e.jsxs(d,{sx:{backgroundColor:"hsla(0,0%,0%,.2)",pb:{xs:3.75,md:3.75},px:{xs:1,md:1.5}},children:[e.jsx(_,{sx:{display:"block",pt:{xs:1.5,md:1.5},color:"white",position:"relative",fontSize:"18px",top:"-14px"},variant:"soft",color:"default",children:"Search Buried"}),e.jsx(_,{sx:{display:"block",color:"white",fontWeight:"400",textShadow:"0 0 10px rgba(0,0,0,.2)",margin:"0",padding:"5px",paddingLeft:"10px",borderRadius:"2px 2px 0px 0px",fontSize:{xs:"8px",md:"13px"}},variant:"soft",color:"default",children:"You can search by name:"}),e.jsx(d,{sx:{display:"flex",justifyContent:"space-around"},children:e.jsx(V,{variant:"outlined",required:!0,fullWidth:!0,label:"",defaultValue:"",onChange:f=>m(f.target.value)})})]}),e.jsx(l,{spacing:0,children:ae})]}),b&&b.length>0&&e.jsx(Re,{gravestones:b})]})})})}function ze(){const{scrollYProgress:t}=J();return e.jsxs(e.Fragment,{children:[e.jsx(Be,{scrollYProgress:t}),e.jsx(Ee,{}),e.jsx(d,{sx:{overflow:"hidden",position:"relative",bgcolor:"background.default"}})]})}function $e(){return e.jsxs(e.Fragment,{children:[e.jsx(ye,{children:e.jsx("title",{children:" Gravepass: The starting point for you"})}),e.jsx(ze,{})]})}export{$e as default};
