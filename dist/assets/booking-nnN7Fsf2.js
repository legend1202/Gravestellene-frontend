import{j as e,S as c,B as p,aD as q,af as C,aw as f,n as V,A as O,g as k,bj as H,d as g,k as L,l as X,D as S,i as D,aX as Y,aP as A,bp as N,c as Z,aY as $,aZ as v,r as W,ar as K,ae as Q,az as ee,T as R,h as se,C as te,G as h,bB as oe,bC as re,bD as ae,bE as ie,bF as E,bG as ne,bH as le,H as ce}from"./index-0ZRfM3mG.js";import{b as F,c as M,f as z,a as de}from"./format-number-eXbYiZkA.js";import{C as y}from"./Card-pac-bk-l.js";import{C as w}from"./CardHeader-YaGP2TRH.js";import{I as pe}from"./image-PdFD2BG8.js";import{u as U,C as _,a as J}from"./carousel-arrow-index-btlijmk-.js";import{T as he}from"./table-head-custom-iZNWxHju.js";import{a as xe,b as me,c as ue,T as ge}from"./TableHead-5IJQP_Rv.js";import{T as b}from"./TableCell-yqIe5W_W.js";import{s as je}from"./sumBy-2eo8jNaH.js";import{C as T}from"./chart-fnnconR9.js";import{u as I}from"./use-chart-i9LAvuGE.js";import{R as ye}from"./Rating-By9Gv33K.js";import{C as be}from"./Chip-Z-_k_k73.js";import"./Checkbox-fx96uTSf.js";import"./SwitchBase-Tu1cRIcg.js";import"./_baseIteratee-7BTfqYPy.js";import"./_baseToString-YYCBw-vh.js";import"./_baseSum-gu02AyRp.js";import"./index-GVuFcJ36.js";import"./visuallyHidden-DVicuktI.js";function fe({title:s,subheader:n,data:r,...o}){return e.jsxs(y,{...o,children:[e.jsx(w,{title:s,subheader:n}),e.jsx(c,{spacing:3,sx:{p:3},children:r.map(t=>e.jsxs(c,{children:[e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:1},children:[e.jsx(p,{sx:{typography:"overline"},children:t.status}),e.jsx(p,{sx:{typography:"subtitle1"},children:F(t.quantity)})]}),e.jsx(q,{variant:"determinate",value:t.value,color:t.status==="Pending"&&"warning"||t.status==="Canceled"&&"error"||"success",sx:{height:8,bgcolor:a=>C(a.palette.grey[500],.16)}})]},t.status))})]})}function we({title:s,subheader:n,list:r,sx:o,...t}){const a=f(),i=U({slidesToShow:4,responsive:[{breakpoint:a.breakpoints.values.lg,settings:{slidesToShow:3}},{breakpoint:a.breakpoints.values.md,settings:{slidesToShow:2}},{breakpoint:a.breakpoints.values.sm,settings:{slidesToShow:1}}]});return e.jsxs(p,{sx:{py:2,...o},...t,children:[e.jsx(w,{title:s,subheader:n,action:e.jsx(_,{onNext:i.onNext,onPrev:i.onPrev}),sx:{p:0,mb:3}}),e.jsx(J,{ref:i.carouselRef,...i.carouselSettings,children:r.map(l=>e.jsx(ve,{item:l},l.id))})]})}function ve({item:s}){const{avatarUrl:n,name:r,duration:o,bookedAt:t,guests:a,coverUrl:i,price:l,isHot:d}=s;return e.jsxs(V,{sx:{mr:3,borderRadius:2,position:"relative",bgcolor:"background.neutral"},children:[e.jsxs(c,{spacing:2,sx:{px:2,pb:1,pt:2.5},children:[e.jsxs(c,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(O,{alt:r,src:n}),e.jsx(k,{primary:r,secondary:H(t),secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}})]}),e.jsxs(c,{rowGap:1.5,columnGap:3,flexWrap:"wrap",direction:"row",alignItems:"center",sx:{color:"text.secondary",typography:"caption"},children:[e.jsxs(c,{direction:"row",alignItems:"center",children:[e.jsx(g,{width:16,icon:"solar:calendar-date-bold",sx:{mr:.5,flexShrink:0}}),o]}),e.jsxs(c,{direction:"row",alignItems:"center",children:[e.jsx(g,{width:16,icon:"solar:users-group-rounded-bold",sx:{mr:.5,flexShrink:0}}),a," Guests"]})]})]}),e.jsxs(L,{variant:"filled",sx:{right:16,zIndex:9,bottom:16,position:"absolute"},children:[d&&"🔥"," $",l]}),e.jsx(p,{sx:{p:1,position:"relative"},children:e.jsx(pe,{alt:i,src:i,ratio:"1/1",sx:{borderRadius:1.5}})})]})}function ke({title:s,subheader:n,tableLabels:r,tableData:o,...t}){return e.jsxs(y,{...t,children:[e.jsx(w,{title:s,subheader:n,sx:{mb:3}}),e.jsx(xe,{sx:{overflow:"unset"},children:e.jsx(X,{children:e.jsxs(me,{sx:{minWidth:960},children:[e.jsx(he,{headLabel:r}),e.jsx(ue,{children:o.map(a=>e.jsx(Ce,{row:a},a.id))})]})})}),e.jsx(S,{sx:{borderStyle:"dashed"}}),e.jsx(p,{sx:{p:2,textAlign:"right"},children:e.jsx(D,{size:"small",color:"inherit",endIcon:e.jsx(g,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]})}function Ce({row:s}){const r=f().palette.mode==="light",o=Y(),t=()=>{o.onClose(),console.info("DOWNLOAD",s.id)},a=()=>{o.onClose(),console.info("PRINT",s.id)},i=()=>{o.onClose(),console.info("SHARE",s.id)},l=()=>{o.onClose(),console.info("DELETE",s.id)};return e.jsxs(e.Fragment,{children:[e.jsxs(ge,{children:[e.jsxs(b,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(O,{variant:"rounded",alt:s.destination.name,src:s.destination.coverUrl,sx:{mr:2,width:48,height:48}}),s.destination.name]}),e.jsx(b,{children:e.jsx(k,{primary:s.customer.name,secondary:s.customer.phoneNumber,primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(b,{children:e.jsx(k,{primary:A(new Date(s.checkIn)),secondary:N(new Date(s.checkIn)),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(b,{children:e.jsx(k,{primary:A(new Date(s.checkOut)),secondary:N(new Date(s.checkOut)),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(b,{children:e.jsx(L,{variant:r?"soft":"filled",color:s.status==="Paid"&&"success"||s.status==="Pending"&&"warning"||"error",children:s.status})}),e.jsx(b,{align:"right",sx:{pr:1},children:e.jsx(Z,{color:o.open?"inherit":"default",onClick:o.onOpen,children:e.jsx(g,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs($,{open:o.open,onClose:o.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(v,{onClick:t,children:[e.jsx(g,{icon:"eva:cloud-download-fill"}),"Download"]}),e.jsxs(v,{onClick:a,children:[e.jsx(g,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(v,{onClick:i,children:[e.jsx(g,{icon:"solar:share-bold"}),"Share"]}),e.jsx(S,{sx:{borderStyle:"dashed"}}),e.jsxs(v,{onClick:l,sx:{color:"error.main"},children:[e.jsx(g,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}function Se({title:s,subheader:n,chart:r,...o}){const t=f(),{colors:a=[t.palette.primary.light,t.palette.primary.main],series:i,options:l}=r,d=je(i,"value"),x=i.filter(u=>u.label==="Sold out")[0].value/d*100,j=I({legend:{show:!1},grid:{padding:{top:-32,bottom:-32}},fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:a[0],opacity:1},{offset:100,color:a[1],opacity:1}]}},plotOptions:{radialBar:{hollow:{size:"64%"},dataLabels:{name:{offsetY:-16},value:{offsetY:8},total:{label:"Tours",formatter:()=>M(d)}}}},...l});return e.jsxs(y,{...o,children:[e.jsx(w,{title:s,subheader:n,sx:{mb:8}}),e.jsx(T,{dir:"ltr",type:"radialBar",series:[x],options:j,width:"100%",height:310}),e.jsx(c,{spacing:2,sx:{p:5},children:i.map(u=>e.jsxs(c,{spacing:1,direction:"row",alignItems:"center",sx:{typography:"subtitle2"},children:[e.jsx(p,{sx:{width:16,height:16,bgcolor:C(t.palette.grey[500],.16),borderRadius:.75,...u.label==="Sold out"&&{bgcolor:a[1]}}}),e.jsx(p,{sx:{color:"text.secondary",flexGrow:1},children:u.label}),u.value," Tours"]},u.label))})]})}function Te({title:s,subheader:n,chart:r,...o}){const{categories:t,colors:a,series:i,options:l}=r,d=Y(),[x,j]=W.useState("Year"),u=I({colors:a,stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:t},tooltip:{y:{formatter:m=>`$${m}`}},...l}),B=W.useCallback(m=>{d.onClose(),j(m)},[d]);return e.jsxs(e.Fragment,{children:[e.jsxs(y,{...o,children:[e.jsx(w,{title:s,subheader:n,action:e.jsxs(K,{onClick:d.onOpen,sx:{pl:1,py:.5,pr:.5,borderRadius:1,typography:"subtitle2",bgcolor:"background.neutral"},children:[x,e.jsx(g,{width:16,icon:d.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:.5}})]})}),i.map(m=>e.jsx(p,{sx:{mt:3,mx:3},children:m.type===x&&e.jsx(T,{dir:"ltr",type:"bar",series:m.data,options:u,width:"100%",height:364})},m.type))]}),e.jsx($,{open:d.open,onClose:d.onClose,sx:{width:140},children:i.map(m=>e.jsx(v,{selected:m.type===x,onClick:()=>B(m.type),children:m.type},m.type))})]})}function Ie({title:s,total:n,percent:r,color:o="primary",chart:t,sx:a,...i}){const l=f(),{colors:d=[l.palette[o].main,l.palette[o].dark],series:x,options:j}=t,u=I({colors:[d[1]],fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:d[0],opacity:1},{offset:100,color:d[1],opacity:1}]}},chart:{sparkline:{enabled:!0}},xaxis:{labels:{show:!1}},yaxis:{labels:{show:!1}},stroke:{width:4},legend:{show:!1},grid:{show:!1},tooltip:{marker:{show:!1},y:{formatter:B=>z(B),title:{formatter:()=>""}}},...j});return e.jsxs(c,{sx:{...Q({direction:"135deg",startColor:C(l.palette[o].light,.2),endColor:C(l.palette[o].main,.2)}),p:3,borderRadius:2,color:`${o}.darker`,backgroundColor:"common.white",...a},...i,children:[e.jsxs(c,{direction:"row",justifyContent:"space-between",sx:{mb:3},children:[e.jsxs("div",{children:[e.jsx(p,{sx:{mb:1,typography:"subtitle2"},children:s}),e.jsx(p,{sx:{typography:"h3"},children:z(n)})]}),e.jsxs("div",{children:[e.jsxs(c,{spacing:.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(g,{icon:r>=0?"eva:trending-up-fill":"eva:trending-down-fill"}),e.jsxs(p,{sx:{typography:"subtitle2"},children:[r>0&&"+",de(r)]})]}),e.jsx(p,{sx:{mt:.5,opacity:.8,typography:"body2"},children:"than last month "})]})]}),e.jsx(T,{dir:"ltr",type:"line",series:[{data:x}],options:u,width:"100%",height:118})]})}function P({title:s,total:n,icon:r,sx:o,...t}){return e.jsxs(y,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:2,pl:3,...o},...t,children:[e.jsxs(p,{children:[e.jsx(p,{sx:{mb:1,typography:"h3"},children:F(n)}),e.jsx(p,{sx:{color:"text.secondary",typography:"subtitle2"},children:s})]}),e.jsx(p,{sx:{width:120,height:120,lineHeight:0,borderRadius:"50%",bgcolor:"background.neutral"},children:r})]})}function Be({chart:s,...n}){const r=f(),o=ee("up","sm"),{colors:t=[[r.palette.primary.light,r.palette.primary.main],[r.palette.warning.light,r.palette.warning.main]],series:a,options:i}=s,l=I({fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:t[0][0],opacity:1},{offset:100,color:t[0][1],opacity:1}]}},chart:{sparkline:{enabled:!0}},grid:{padding:{top:-9,bottom:-9}},legend:{show:!1},plotOptions:{radialBar:{hollow:{size:"64%"},track:{margin:0},dataLabels:{name:{show:!1},value:{offsetY:6,fontSize:r.typography.subtitle2.fontSize}}}},...i}),d={...l,fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:t[1][0],opacity:1},{offset:100,color:t[1][1],opacity:1}]}}};return e.jsx(y,{...n,children:e.jsx(c,{direction:{xs:"column",sm:"row"},divider:e.jsx(S,{orientation:o?"vertical":"horizontal",flexItem:!0,sx:{borderStyle:"dashed"}}),children:a.map((x,j)=>e.jsxs(c,{spacing:3,direction:"row",alignItems:"center",justifyContent:{sm:"center"},sx:{py:5,width:1,px:{xs:3,sm:0}},children:[e.jsx(T,{dir:"ltr",type:"radialBar",series:[x.percent],options:j===1?d:l,width:106,height:106}),e.jsxs("div",{children:[e.jsx(R,{variant:"h4",sx:{mb:.5},children:M(x.total)}),e.jsx(R,{variant:"body2",sx:{opacity:.72},children:x.label})]})]},x.label))})})}function Pe({title:s,subheader:n,list:r,...o}){const t=U({adaptiveHeight:!0}),a=r.find((i,l)=>l===t.currentIndex);return e.jsxs(y,{...o,children:[e.jsx(w,{title:s,subheader:n,action:e.jsx(_,{onNext:t.onNext,onPrev:t.onPrev})}),e.jsx(J,{ref:t.carouselRef,...t.carouselSettings,children:r.map(i=>e.jsx(De,{item:i},i.id))}),e.jsx(S,{sx:{borderStyle:"dashed"}}),e.jsxs(c,{spacing:2,direction:"row",alignItems:"center",sx:{p:3},children:[e.jsx(D,{fullWidth:!0,color:"error",variant:"soft",onClick:()=>console.info("ACCEPT",a==null?void 0:a.id),children:"Reject"}),e.jsx(D,{fullWidth:!0,color:"inherit",variant:"contained",onClick:()=>console.info("REJECT",a==null?void 0:a.id),children:"Accept"})]})]})}function De({item:s}){const{avatarUrl:n,name:r,description:o,rating:t,postedAt:a,tags:i}=s;return e.jsxs(c,{spacing:2,sx:{p:3,position:"relative"},children:[e.jsxs(c,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(O,{alt:r,src:n,sx:{width:48,height:48}}),e.jsx(k,{primary:r,secondary:`Posted ${H(a)}`,secondaryTypographyProps:{component:"span",typography:"caption",mt:.5,color:"text.disabled"}})]}),e.jsx(ye,{value:t,size:"small",readOnly:!0,precision:.5}),e.jsx(R,{variant:"body2",children:o}),e.jsx(c,{direction:"row",flexWrap:"wrap",spacing:1,children:i.map(l=>e.jsx(be,{size:"small",variant:"soft",label:l},l))})]})}const G=3;function Re(){const s=f(),n=se();return e.jsx(te,{maxWidth:n.themeStretch?!1:"xl",children:e.jsxs(h,{container:!0,spacing:G,disableEqualOverflow:!0,children:[e.jsx(h,{xs:12,md:4,children:e.jsx(P,{title:"Total Booking",total:714e3,icon:e.jsx(oe,{})})}),e.jsx(h,{xs:12,md:4,children:e.jsx(P,{title:"Sold",total:311e3,icon:e.jsx(re,{})})}),e.jsx(h,{xs:12,md:4,children:e.jsx(P,{title:"Canceled",total:124e3,icon:e.jsx(ae,{})})}),e.jsxs(h,{container:!0,xs:12,children:[e.jsxs(h,{container:!0,xs:12,md:8,children:[e.jsx(h,{xs:12,md:6,children:e.jsx(Ie,{title:"Total Incomes",total:18765,percent:2.6,chart:{series:[{x:2016,y:111},{x:2017,y:136},{x:2018,y:76},{x:2019,y:108},{x:2020,y:74},{x:2021,y:54},{x:2022,y:57},{x:2023,y:84}]}})}),e.jsx(h,{xs:12,md:6,children:e.jsx(fe,{title:"Booked",data:ie})}),e.jsx(h,{xs:12,children:e.jsx(Be,{chart:{series:[{label:"Sold",percent:72,total:38566},{label:"Pending for payment",percent:64,total:18472}]}})}),e.jsx(h,{xs:12,children:e.jsx(Te,{title:"Statistics",subheader:"(+43% Sold | +12% Canceled) than last year",chart:{colors:[s.palette.primary.main,s.palette.error.light],categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],series:[{type:"Week",data:[{name:"Sold",data:[10,41,35,151,49,62,69,91,48]},{name:"Canceled",data:[10,34,13,56,77,88,99,77,45]}]},{type:"Month",data:[{name:"Sold",data:[148,91,69,62,49,51,35,41,10]},{name:"Canceled",data:[45,77,99,88,77,56,13,34,10]}]},{type:"Year",data:[{name:"Sold",data:[76,42,29,41,27,138,117,86,63]},{name:"Canceled",data:[80,55,34,114,80,130,15,28,55]}]}]}})})]}),e.jsxs(h,{xs:12,md:4,children:[e.jsx(Se,{title:"Tours Available",chart:{series:[{label:"Sold out",value:120},{label:"Available",value:66}]}}),e.jsx(Pe,{title:"Customer Reviews",subheader:`${E.length} Reviews`,list:E,sx:{mt:G}})]})]}),e.jsx(h,{xs:12,children:e.jsx(we,{title:"Newest Booking",subheader:"12 Booking",list:ne})}),e.jsx(h,{xs:12,children:e.jsx(ke,{title:"Booking Details",tableData:le,tableLabels:[{id:"destination",label:"Destination"},{id:"customer",label:"Customer"},{id:"checkIn",label:"Check In"},{id:"checkOut",label:"Check Out"},{id:"status",label:"Status"},{id:""}]})})]})})}function Qe(){return e.jsxs(e.Fragment,{children:[e.jsx(ce,{children:e.jsx("title",{children:" Dashboard: Booking"})}),e.jsx(Re,{})]})}export{Qe as default};
