import{am as g,r as d,j as r,B as c,A as m,s as b,aK as v,ap as j}from"./index-_tg0Vjne.js";import{I as C}from"./image-SDlH-Y9m.js";import{u as S,L as I}from"./use-light-box-1YwnlQoR.js";import{u,a as x,b as T}from"./carousel-arrow-index-g72R1Kc2.js";const i=64,k=b("div")(({length:a,theme:l})=>({position:"relative",margin:l.spacing(0,"auto"),"& .slick-slide":{lineHeight:0},...a===1&&{maxWidth:i*1+16},...a===2&&{maxWidth:i*2+32},...(a===3||a===4)&&{maxWidth:i*3+48},...a>=5&&{maxWidth:i*6},...a>3&&{"&:before, &:after":{...v({direction:"to left",startColor:`${j(l.palette.background.default,0)} 0%`,endColor:`${l.palette.background.default} 100%`}),top:0,zIndex:9,content:"''",height:"100%",position:"absolute",width:i*2/3},"&:after":{right:0,transform:"scaleX(-1)"}}}));function L({product:a}){const l=g(),o=a.images.map(e=>({src:e})),s=S(o),t=u({rtl:!1,draggable:!1,adaptiveHeight:!0}),n=u({rtl:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:o.length>3?3:o.length});d.useEffect(()=>{t.onSetNav(),n.onSetNav()},[t,n]),d.useEffect(()=>{s.open&&t.onTogo(s.selected)},[t,s.open,s.selected]);const p=r.jsxs(c,{sx:{mb:3,borderRadius:2,overflow:"hidden",position:"relative"},children:[r.jsx(x,{...t.carouselSettings,asNavFor:n.nav,ref:t.carouselRef,children:o.map(e=>r.jsx(C,{alt:e.src,src:"/assets/background/4.jpg",ratio:"1/1",onClick:()=>s.onOpen(e.src),sx:{cursor:"zoom-in"}},e.src))}),r.jsx(T,{index:t.currentIndex,total:o.length,onNext:n.onNext,onPrev:n.onPrev})]}),h=r.jsx(k,{length:o.length,children:r.jsx(x,{...n.carouselSettings,asNavFor:t.nav,ref:n.carouselRef,children:o.map((e,f)=>r.jsx(c,{sx:{px:.5},children:r.jsx(m,{alt:e.src,src:e.src,variant:"rounded",sx:{width:i,height:i,opacity:.48,cursor:"pointer",...t.currentIndex===f&&{opacity:1,border:`solid 2.5px ${l.palette.primary.main}`}}},e.src)},e.src))})});return r.jsxs(c,{sx:{"& .slick-slide":{float:l.direction==="rtl"?"right":"left"}},children:[p,h,r.jsx(I,{index:s.selected,slides:o,open:s.open,close:s.onClose,onGetCurrentIndex:e=>s.setSelected(e)})]})}export{L as G};
