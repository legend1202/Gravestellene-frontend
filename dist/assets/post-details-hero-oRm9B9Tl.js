import{r,aC as J,as as z,$ as se,j as a,aq as l,cU as ye,dp as De,dq as te,aB as ae,aA as re,v as N,F as Z,ar as le,Y as Te,at as H,N as Ce,au as ce,ch as Ee,ac as Se,aF as ve,B as Pe,ak as we,al as oe,C as Re,T as $e,S as ne,A as Ae,g as Le,aV as Fe,d as ie,aL as je}from"./index-xccKnqtj.js";import{F as pe}from"./Fab-iQHHbkKd.js";const ke=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Me={entering:{transform:"none"},entered:{transform:"none"}},Oe=r.forwardRef(function(t,n){const s=J(),c={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{addEndListener:E,appear:f=!0,children:L,easing:g,in:F,onEnter:S,onEntered:k,onEntering:h,onExit:v,onExited:p,onExiting:y,style:b,timeout:D=c,TransitionComponent:P=ye}=t,w=z(t,ke),R=r.useRef(null),M=se(R,L.ref,n),x=i=>d=>{if(i){const T=R.current;d===void 0?i(T):i(T,d)}},q=x(h),O=x((i,d)=>{De(i);const T=te({style:b,timeout:D,easing:g},{mode:"enter"});i.style.webkitTransition=s.transitions.create("transform",T),i.style.transition=s.transitions.create("transform",T),S&&S(i,d)}),W=x(k),m=x(y),$=x(i=>{const d=te({style:b,timeout:D,easing:g},{mode:"exit"});i.style.webkitTransition=s.transitions.create("transform",d),i.style.transition=s.transitions.create("transform",d),v&&v(i)}),I=x(p),B=i=>{E&&E(R.current,i)};return a.jsx(P,l({appear:f,in:F,nodeRef:R,onEnter:O,onEntered:W,onEntering:q,onExit:$,onExited:I,onExiting:m,addEndListener:B,timeout:D},w,{children:(i,d)=>r.cloneElement(L,l({style:l({transform:"scale(0)",visibility:i==="exited"&&!F?"hidden":void 0},Me[i],b,L.props.style),ref:M},d))}))}),Ie=Oe;function Be(e){return re("MuiSpeedDial",e)}const Ne=ae("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),K=Ne,Ue=["ref"],ze=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],_e=["ref"],Ke=e=>{const{classes:t,open:n,direction:s}=e,c={root:["root",`direction${Z(s)}`],fab:["fab"],actions:["actions",!n&&"actionsClosed"]};return ce(c,Be,t)};function U(e){if(e==="up"||e==="down")return"vertical";if(e==="right"||e==="left")return"horizontal"}function Ve(e,t,n){return e<t?t:e>n?n:e}const A=32,V=16,He=N("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`direction${Z(n.direction)}`]]}})(({theme:e,ownerState:t})=>l({zIndex:(e.vars||e).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},t.direction==="up"&&{flexDirection:"column-reverse",[`& .${K.actions}`]:{flexDirection:"column-reverse",marginBottom:-A,paddingBottom:V+A}},t.direction==="down"&&{flexDirection:"column",[`& .${K.actions}`]:{flexDirection:"column",marginTop:-A,paddingTop:V+A}},t.direction==="left"&&{flexDirection:"row-reverse",[`& .${K.actions}`]:{flexDirection:"row-reverse",marginRight:-A,paddingRight:V+A}},t.direction==="right"&&{flexDirection:"row",[`& .${K.actions}`]:{flexDirection:"row",marginLeft:-A,paddingLeft:V+A}})),Ze=N(pe,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(e,t)=>t.fab})(()=>({pointerEvents:"auto"})),qe=N("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.actions,!n.open&&t.actionsClosed]}})(({ownerState:e})=>l({display:"flex",pointerEvents:"auto"},!e.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})),We=r.forwardRef(function(t,n){const s=le({props:t,name:"MuiSpeedDial"}),c=J(),E={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{ariaLabel:f,FabProps:{ref:L}={},children:g,className:F,direction:S="up",hidden:k=!1,icon:h,onBlur:v,onClose:p,onFocus:y,onKeyDown:b,onMouseEnter:D,onMouseLeave:P,onOpen:w,open:R,TransitionComponent:M=Ie,transitionDuration:x=E,TransitionProps:q}=s,O=z(s.FabProps,Ue),W=z(s,ze),[m,$]=Te({controlled:R,default:!1,name:"SpeedDial",state:"open"}),I=l({},s,{open:m,direction:S}),B=Ke(I),i=r.useRef();r.useEffect(()=>()=>{clearTimeout(i.current)},[]);const d=r.useRef(0),T=r.useRef(),j=r.useRef([]);j.current=[j.current[0]];const de=r.useCallback(o=>{j.current[0]=o},[]),ue=se(L,de),fe=(o,u)=>C=>{j.current[o+1]=C,u&&u(C)},me=o=>{b&&b(o);const u=o.key.replace("Arrow","").toLowerCase(),{current:C=u}=T;if(o.key==="Escape"){$(!1),j.current[0].focus(),p&&p(o,"escapeKeyDown");return}if(U(u)===U(C)&&U(u)!==void 0){o.preventDefault();const Y=u===C?1:-1,_=Ve(d.current+Y,0,j.current.length-1);j.current[_].focus(),d.current=_,T.current=C}};r.useEffect(()=>{m||(d.current=0,T.current=void 0)},[m]);const Q=o=>{o.type==="mouseleave"&&P&&P(o),o.type==="blur"&&v&&v(o),clearTimeout(i.current),o.type==="blur"?i.current=setTimeout(()=>{$(!1),p&&p(o,"blur")}):($(!1),p&&p(o,"mouseLeave"))},xe=o=>{O.onClick&&O.onClick(o),clearTimeout(i.current),m?($(!1),p&&p(o,"toggle")):($(!0),w&&w(o,"toggle"))},X=o=>{o.type==="mouseenter"&&D&&D(o),o.type==="focus"&&y&&y(o),clearTimeout(i.current),m||(i.current=setTimeout(()=>{$(!0),w&&w(o,{focus:"focus",mouseenter:"mouseEnter"}[o.type])}))},G=f.replace(/^[^a-z]+|[^\w:.-]+/gi,""),ee=r.Children.toArray(g).filter(o=>r.isValidElement(o)),be=ee.map((o,u)=>{const C=o.props,{FabProps:{ref:Y}={},tooltipPlacement:_}=C,ge=z(C.FabProps,_e),he=_||(U(S)==="vertical"?"left":"top");return r.cloneElement(o,{FabProps:l({},ge,{ref:fe(u,Y)}),delay:30*(m?u:ee.length-u),open:m,tooltipPlacement:he,id:`${G}-action-${u}`})});return a.jsxs(He,l({className:H(B.root,F),ref:n,role:"presentation",onKeyDown:me,onBlur:Q,onFocus:X,onMouseEnter:X,onMouseLeave:Q,ownerState:I},W,{children:[a.jsx(M,l({in:!k,timeout:x,unmountOnExit:!0},q,{children:a.jsx(Ze,l({color:"primary","aria-label":f,"aria-haspopup":"true","aria-expanded":m,"aria-controls":`${G}-actions`},O,{onClick:xe,className:H(B.fab,O.className),ref:ue,ownerState:I,children:r.isValidElement(h)&&Ce(h,["SpeedDialIcon"])?r.cloneElement(h,{open:m}):h}))})),a.jsx(qe,{id:`${G}-actions`,role:"menu","aria-orientation":U(S),className:H(B.actions,!m&&B.actionsClosed),ownerState:I,children:be})]}))}),Ge=We;function Ye(e){return re("MuiSpeedDialAction",e)}const Je=ae("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),Qe=Je,Xe=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],et=e=>{const{open:t,tooltipPlacement:n,classes:s}=e,c={fab:["fab",!t&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${Z(n)}`,!t&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return ce(c,Ye,s)},tt=N(pe,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.fab,!n.open&&t.fabClosed]}})(({theme:e,ownerState:t})=>l({margin:8,color:(e.vars||e).palette.text.secondary,backgroundColor:(e.vars||e).palette.background.paper,"&:hover":{backgroundColor:e.vars?e.vars.palette.SpeedDialAction.fabHoverBg:Ee(e.palette.background.paper,.15)},transition:`${e.transitions.create("transform",{duration:e.transitions.duration.shorter})}, opacity 0.8s`,opacity:1},!t.open&&{opacity:0,transform:"scale(0)"})),ot=N("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.staticTooltip,!n.open&&t.staticTooltipClosed,t[`tooltipPlacement${Z(n.tooltipPlacement)}`]]}})(({theme:e,ownerState:t})=>({position:"relative",display:"flex",alignItems:"center",[`& .${Qe.staticTooltipLabel}`]:l({transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.shorter}),opacity:1},!t.open&&{opacity:0,transform:"scale(0.5)"},t.tooltipPlacement==="left"&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},t.tooltipPlacement==="right"&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8})})),nt=N("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(e,t)=>t.staticTooltipLabel})(({theme:e})=>l({position:"absolute"},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.paper,borderRadius:(e.vars||e).shape.borderRadius,boxShadow:(e.vars||e).shadows[1],color:(e.vars||e).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"})),it=r.forwardRef(function(t,n){const s=le({props:t,name:"MuiSpeedDialAction"}),{className:c,delay:E=0,FabProps:f={},icon:L,id:g,open:F,TooltipClasses:S,tooltipOpen:k=!1,tooltipPlacement:h="left",tooltipTitle:v}=s,p=z(s,Xe),y=l({},s,{tooltipPlacement:h}),b=et(y),[D,P]=r.useState(k),w=()=>{P(!1)},R=()=>{P(!0)},M={transitionDelay:`${E}ms`},x=a.jsx(tt,l({size:"small",className:H(b.fab,c),tabIndex:-1,role:"menuitem",ownerState:y},f,{style:l({},M,f.style),children:L}));return k?a.jsxs(ot,l({id:g,ref:n,className:b.staticTooltip,ownerState:y},p,{children:[a.jsx(nt,{style:M,id:`${g}-label`,className:b.staticTooltipLabel,ownerState:y,children:v}),r.cloneElement(x,{"aria-labelledby":`${g}-label`})]})):(!F&&D&&P(!1),a.jsx(Se,l({id:g,ref:n,title:v,placement:h,onClose:w,onOpen:R,open:F&&D,classes:S},p,{children:x})))}),st=it;function lt({title:e,author:t,coverUrl:n,createdAt:s}){const c=J(),E=ve("up","sm");return a.jsx(Pe,{sx:{height:480,overflow:"hidden",...we({imgUrl:n,startColor:`${oe(c.palette.grey[900],.64)} 0%`,endColor:`${oe(c.palette.grey[900],.64)} 100%`})},children:a.jsxs(Re,{sx:{height:1,position:"relative"},children:[a.jsx($e,{variant:"h3",component:"h1",sx:{zIndex:9,color:"common.white",position:"absolute",maxWidth:480,pt:{xs:2,md:8}},children:e}),a.jsxs(ne,{sx:{left:0,width:1,bottom:0,position:"absolute"},children:[t&&s&&a.jsxs(ne,{direction:"row",alignItems:"center",sx:{px:{xs:2,md:3},pb:{xs:3,md:8}},children:[a.jsx(Ae,{alt:t.name,src:t.avatarUrl,sx:{width:64,height:64,mr:2}}),a.jsx(Le,{sx:{color:"common.white"},primary:t.name,secondary:Fe(s),primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{color:"inherit",sx:{opacity:.64}}})]}),a.jsx(Ge,{direction:E?"left":"up",ariaLabel:"Share post",icon:a.jsx(ie,{icon:"solar:share-bold"}),FabProps:{size:"medium"},sx:{position:"absolute",bottom:{xs:32,md:64},right:{xs:16,md:24}},children:je.map(f=>a.jsx(st,{icon:a.jsx(ie,{icon:f.icon,sx:{color:f.color}}),tooltipTitle:f.name,tooltipPlacement:"top",FabProps:{color:"default"}},f.name))})]})]})})}export{lt as P};
