import{h as C,m as w,r as c,j as t,i as y,R as k,p as l,d as p,G as m,B as d,T as x,b5 as P,af as S,b6 as D,C as R,H as T}from"./index-0ZRfM3mG.js";import{u as I}from"./use-params-GhpeyKlM.js";import"./index-jDMK9XP-.js";import"./index.esm-G9SoUoJo.js";import"./image-PdFD2BG8.js";import"./mui-one-time-password-input.es-QlRnB43f.js";import"./styles-HNTfg28z.js";import"./_baseToString-YYCBw-vh.js";import"./color-picker-uhyesaW3.js";import"./incrementer-button-pL-bYg3e.js";import{P as B}from"./product-details-carousel-UaOhywIp.js";import"./styles-1A-IYQki.js";import{b as G}from"./product-Mjo-OPaZ.js";import{E as A}from"./empty-content--YCbbkiR.js";import{C as E}from"./custom-breadcrumbs-sO1B0Nzy.js";import{C as $}from"./cart-icon-ETWkxMQu.js";import{P as H,a as L,b as M}from"./product-details-description-X6SVPF12.js";import{a as F}from"./product-skeleton--Bj2dr0z.js";import{C as W}from"./Card-pac-bk-l.js";import"./TextField-bYtDKJ1u.js";import"./use-light-box-W3CwR54H.js";import"./carousel-arrow-index-btlijmk-.js";import"./sumBy-2eo8jNaH.js";import"./_baseIteratee-7BTfqYPy.js";import"./_baseSum-gu02AyRp.js";import"./format-number-eXbYiZkA.js";import"./Rating-By9Gv33K.js";import"./visuallyHidden-DVicuktI.js";import"./Pagination-gwvhsUKk.js";import"./FirstPage-9OsAYRHm.js";import"./form-provider-7AhGD8Yg.js";import"./rhf-text-field-1O6oRn4Q.js";import"./DialogTitle-W1lJR9Ac.js";import"./dialogTitleClasses-ZCYOSLm7.js";import"./DialogContent-06x0Qt-W.js";import"./DialogActions-hXFZkrNb.js";import"./LoadingButton-rLhjB2ni.js";import"./CircularProgress-xK0zBRaG.js";import"./rhf-select-ps_eZ5Ob.js";import"./Checkbox-fx96uTSf.js";import"./SwitchBase-Tu1cRIcg.js";import"./Chip-Z-_k_k73.js";import"./markdown-LBui9W0w.js";import"./Skeleton-s51xMU08.js";const Y=[{title:"100% Original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 Day Replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year Warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function O({id:i}){const a=C(),o=w(),[n,u]=c.useState("description"),{product:e,productLoading:h,productError:s}=G(i),g=c.useCallback((r,v)=>{u(v)},[]),j=t.jsx(F,{}),f=t.jsx(A,{filled:!0,title:`${s==null?void 0:s.message}`,action:t.jsx(y,{component:k,href:l.product.root,startIcon:t.jsx(p,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:10}}),b=e&&t.jsxs(t.Fragment,{children:[t.jsx(E,{links:[{name:"Home",href:"/"},{name:"Shop",href:l.product.root},{name:e==null?void 0:e.name}],sx:{mb:5}}),t.jsxs(m,{container:!0,spacing:{xs:3,md:5,lg:8},children:[t.jsx(m,{xs:12,md:6,lg:7,children:t.jsx(B,{product:e})}),t.jsx(m,{xs:12,md:6,lg:5,children:t.jsx(H,{product:e,items:o.items,onAddCart:o.onAddToCart,onGotoStep:o.onGotoStep})})]}),t.jsx(d,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:Y.map(r=>t.jsxs(d,{sx:{textAlign:"center",px:5},children:[t.jsx(p,{icon:r.icon,width:32,sx:{color:"primary.main"}}),t.jsx(x,{variant:"subtitle1",sx:{mb:1,mt:2},children:r.title}),t.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:r.description})]},r.title))}),t.jsxs(W,{children:[t.jsx(P,{value:n,onChange:g,sx:{px:3,boxShadow:r=>`inset 0 -2px 0 0 ${S(r.palette.grey[500],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:`Reviews (${e.reviews.length})`}].map(r=>t.jsx(D,{value:r.value,label:r.label},r.value))}),n==="description"&&t.jsx(L,{description:e==null?void 0:e.description}),n==="reviews"&&t.jsx(M,{ratings:e.ratings,reviews:e.reviews,totalRatings:e.totalRatings,totalReviews:e.totalReviews})]})]});return t.jsxs(R,{maxWidth:a.themeStretch?!1:"lg",sx:{mt:5,mb:15},children:[t.jsx($,{totalItems:o.totalItems}),h&&j,s&&f,e&&b]})}function At(){const i=I(),{id:a}=i;return t.jsxs(t.Fragment,{children:[t.jsx(T,{children:t.jsx("title",{children:" Product: Details"})}),t.jsx(O,{id:`${a}`})]})}export{At as default};
