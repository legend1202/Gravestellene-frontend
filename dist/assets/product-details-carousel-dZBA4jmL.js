import{r as x,j as s,S as j,ap as g,c as p,d as h,am as v,B as u,A as I,s as C,aK as S}from"./index-_tg0Vjne.js";import{I as w}from"./image-SDlH-Y9m.js";import{u as y,L as k}from"./use-light-box-1YwnlQoR.js";import{u as f,a as m,b as R}from"./carousel-arrow-index-g72R1Kc2.js";const T=x.forwardRef(({quantity:o,onIncrease:i,onDecrease:a,disabledIncrease:t,disabledDecrease:r,sx:n,...c},d)=>s.jsxs(j,{ref:d,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:.5,width:88,borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${g(e.palette.grey[500],.2)}`,...n},...c,children:[s.jsx(p,{size:"small",onClick:a,disabled:r,sx:{borderRadius:.75},children:s.jsx(h,{icon:"eva:minus-fill",width:16})}),o,s.jsx(p,{size:"small",onClick:i,disabled:t,sx:{borderRadius:.75},children:s.jsx(h,{icon:"mingcute:add-line",width:16})})]})),W=T,l=64,B=C("div")(({length:o,theme:i})=>({position:"relative",margin:i.spacing(0,"auto"),"& .slick-slide":{lineHeight:0},...o===1&&{maxWidth:l*1+16},...o===2&&{maxWidth:l*2+32},...(o===3||o===4)&&{maxWidth:l*3+48},...o>=5&&{maxWidth:l*6},...o>3&&{"&:before, &:after":{...S({direction:"to left",startColor:`${g(i.palette.background.default,0)} 0%`,endColor:`${i.palette.background.default} 100%`}),top:0,zIndex:9,content:"''",height:"100%",position:"absolute",width:l*2/3},"&:after":{right:0,transform:"scaleX(-1)"}}}));function $({product:o}){const i=v(),a=o.images.map(e=>({src:e})),t=y(a),r=f({rtl:!1,draggable:!1,adaptiveHeight:!0}),n=f({rtl:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:a.length>3?3:a.length});x.useEffect(()=>{r.onSetNav(),n.onSetNav()},[r,n]),x.useEffect(()=>{t.open&&r.onTogo(t.selected)},[r,t.open,t.selected]);const c=s.jsxs(u,{sx:{mb:3,borderRadius:2,overflow:"hidden",position:"relative"},children:[s.jsx(m,{...r.carouselSettings,asNavFor:n.nav,ref:r.carouselRef,children:a.map(e=>s.jsx(w,{alt:e.src,src:e.src,ratio:"1/1",onClick:()=>t.onOpen(e.src),sx:{cursor:"zoom-in"}},e.src))}),s.jsx(R,{index:r.currentIndex,total:a.length,onNext:n.onNext,onPrev:n.onPrev})]}),d=s.jsx(B,{length:a.length,children:s.jsx(m,{...n.carouselSettings,asNavFor:r.nav,ref:n.carouselRef,children:a.map((e,b)=>s.jsx(u,{sx:{px:.5},children:s.jsx(I,{alt:e.src,src:e.src,variant:"rounded",sx:{width:l,height:l,opacity:.48,cursor:"pointer",...r.currentIndex===b&&{opacity:1,border:`solid 2.5px ${i.palette.primary.main}`}}},e.src)},e.src))})});return s.jsxs(u,{sx:{"& .slick-slide":{float:i.direction==="rtl"?"right":"left"}},children:[c,d,s.jsx(k,{index:t.selected,slides:a,open:t.open,close:t.onClose,onGetCurrentIndex:e=>t.setSelected(e)})]})}export{W as I,$ as P};
