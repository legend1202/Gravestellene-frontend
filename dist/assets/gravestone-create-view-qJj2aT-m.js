import{j as e,eM as H,aI as V,g as z,S as d,T as C,aF as k,I as U,d as O,s as $,ab as Q,l as X,m as J,a as K,r as b,h as Y,b as Z,eN as D,b3 as G,C as ee,G as ae}from"./index-xccKnqtj.js";import{c as se,a as r}from"./index.esm-YEE7kA5n.js";import{a as ie,C as te,u as re,F as de}from"./form-provider-AIk6qsYQ.js";import{o as oe}from"./yup-kNUoSS0a.js";import{E as le}from"./empty-content-FevP8_c1.js";import{d as ne}from"./graveyard-UNAl1ZZZ.js";import{c as ce}from"./gravestone-iSBR3JnF.js";import"./image-ihTI-eUB.js";import{R as me}from"./rhf-select-ehLTFbkh.js";import"./mui-one-time-password-input.es-8WdpYP-F.js";import"./styles-XyZpQVQ4.js";import{R as g}from"./rhf-text-field-M35LS_3G.js";import{D as xe}from"./DatePicker-6vw-lEMw.js";import{f as he}from"./index-2uVKYtoZ.js";import{S as q}from"./Skeleton-ur7bka2j.js";import{T as pe}from"./TextField-_2MBvEfR.js";import{L as ue}from"./LoadingButton-rYn3LTh9.js";function w({name:a,label:s,defaultValue:t}){const{control:i}=ie();return console.log("=========",new Date(t)),e.jsx(te,{name:a,control:i,render:({field:c,fieldState:{error:l}})=>e.jsx(xe,{label:s,value:H(t),onChange:m=>{c.onChange(m)},slotProps:{textField:{fullWidth:!0,error:!!l,helperText:l==null?void 0:l.message}}})})}function be({mail:a,selected:s,sx:t,...i}){return e.jsxs(V,{sx:{p:1,mb:.5,borderRadius:1,...s&&{bgcolor:"action.selected"},...t},...i,children:[e.jsx(z,{primary:a.name,primaryTypographyProps:{noWrap:!0,variant:"subtitle2"},secondary:"Graveyard Location",secondaryTypographyProps:{noWrap:!0,component:"span",variant:"body2",color:"text.secondary"}}),e.jsx(d,{alignItems:"flex-end",sx:{ml:2,height:44},children:e.jsx(C,{noWrap:!0,variant:"body2",component:"span",sx:{mb:1.5,fontSize:12,color:"text.disabled"},children:a.cratedAt&&he(new Date(a.cratedAt),{addSuffix:!1})})})]})}function ge({sx:a,...s}){return e.jsxs(d,{spacing:2,direction:"row",alignItems:"center",sx:{py:1,...a},...s,children:[e.jsx(q,{variant:"circular",sx:{width:40,height:40}}),e.jsxs(d,{spacing:1,flexGrow:1,children:[e.jsx(q,{sx:{width:.75,height:10}}),e.jsx(q,{sx:{width:.5,height:10}})]})]})}function fe({loading:a,mails:s,openMail:t,onCloseMail:i,onClickMail:c,selectedLabelId:l,selectedMailId:m}){const x=k("up","md"),h=e.jsx(e.Fragment,{children:[...Array(8)].map((o,p)=>e.jsx(ge,{},p))}),j=e.jsx(e.Fragment,{children:s&&s.map((o,p)=>e.jsx(be,{mail:o,selected:m===o.id,onClick:()=>{c(o.id)}},p))}),f=e.jsxs(e.Fragment,{children:[e.jsx(d,{sx:{p:2},children:e.jsx(pe,{placeholder:"Search...",InputProps:{startAdornment:e.jsx(U,{position:"start",children:e.jsx(O,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),e.jsxs($,{sx:{px:2},children:[a&&h,s&&!!s.length&&j]})]});return x?e.jsx(d,{sx:{width:320,flexShrink:0,borderRadius:1.5,bgcolor:"background.default"},children:f}):e.jsx(Q,{open:t,onClose:i,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:320}},children:f})}const je="inbox";function _e({currentGravestone:a}){const{t:s}=X(),{enqueueSnackbar:t}=J(),{graveyards:i,graveyardsLoading:c}=ne(),m=K().get("label")||je,[x,h]=b.useState(""),j=k("up","md"),f=Y(),o=Z(),p=se().shape({name:r().required("name is required"),gender:r().required("gender is required"),birthday:r().required("birthday is required"),deceasedDate:r().required("deceasedDate is required"),buriedDate:r().required("buriedDate is required"),quarter:r().required("quarter is required"),graveSite:r().required("graveSite is required"),homeTown:r().required("homeTown is required"),graveSiteNumber:r().required("graveSiteNumber is required")}),F=b.useMemo(()=>({name:a?a.name:"",gender:a?a.gender:"",birthday:a?a.birthday:"",deceasedDate:a?a.deceasedDate:"",buriedDate:a?a.buriedDate:"",quarter:a?a.quarter:"",graveSite:a?a.graveSite:"",homeTown:a?a.homeTown:"",graveSiteNumber:a?a.graveSiteNumber:""}),[a]),I=re({resolver:oe(p),defaultValues:F}),{reset:P,watch:T,handleSubmit:M,formState:{isSubmitting:L}}=I,u=T();console.log(u);const N=b.useCallback(n=>{h(n)},[]);b.useEffect(()=>{i&&i.length>0&&i[0].id&&h(i[0].id)},[i]),b.useEffect(()=>{a&&h(a.graveyardId)},[a]);const R=M(async n=>{try{if(x){const y=D(u.birthday),W=D(u.buriedDate),v=D(u.deceasedDate),B={...u,birthday:y,buriedDate:W,deceasedDate:v,graveyardId:x},S=await ce(B);S!=null&&S.searchResults.success,t(s(a?"update_success":"create_success")),P()}else t("Select the Graveyard!")}catch(y){console.error(y)}}),A=e.jsx(fe,{mails:i,loading:c,openMail:o.value,onCloseMail:o.onFalse,onClickMail:N,selectedLabelId:m,selectedMailId:x}),E=e.jsx(e.Fragment,{children:i?e.jsxs(d,{spacing:3,sx:{p:1,flex:1,justifyContent:"space-between"},children:[e.jsx(g,{name:"name",label:"Last Name and First Name"}),e.jsx(me,{fullWidth:!0,name:"gender",label:"Gender",InputLabelProps:{shrink:!0},PaperPropsSx:{textTransform:"capitalize"},children:["MAN","WOMAN"].map(n=>e.jsx(G,{value:n,children:n},n))}),e.jsx(w,{name:"birthday",label:"Birthday",defaultValue:(a==null?void 0:a.birthday)||"05/10/2024"}),e.jsx(w,{name:"deceasedDate",label:"Deceased Date",defaultValue:(a==null?void 0:a.deceasedDate)||"05/10/2024"}),e.jsx(w,{name:"buriedDate",label:"Buried Date",defaultValue:(a==null?void 0:a.buriedDate)||"05/10/2024"}),e.jsx(g,{name:"quarter",label:"Quarter"}),e.jsx(g,{name:"graveSite",label:"Grave Site"}),e.jsx(g,{name:"homeTown",label:"Hometown"}),e.jsx(g,{name:"graveSiteNumber",label:"Gravesite Number"})]}):e.jsx(le,{imgUrl:"/assets/icons/empty/ic_email_disabled.svg",sx:{borderRadius:1.5,bgcolor:"background.default",...!j&&{display:"none"}}})}),_=e.jsx(ae,{xs:12,md:12,sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",p:1},children:e.jsx(ue,{type:"submit",variant:"contained",size:"large",loading:L,children:a?"Save Changes":"Create Product"})});return e.jsx(de,{methods:I,onSubmit:R,children:e.jsxs(ee,{maxWidth:f.themeStretch?!1:"xl",children:[e.jsx(C,{variant:"h4",sx:{mb:{xs:3,md:5}},children:"Gravestone"}),e.jsxs(d,{spacing:1,sx:{p:1,borderRadius:2,overflow:"hidden",position:"relative",bgcolor:"background.neutral"},children:[e.jsxs(d,{spacing:1,direction:"row",sx:{minHeight:{md:720}},children:[A,E]}),_]})]})})}export{_e as G};