import{j as t,C as a,i as u,R as b,p as c,d as l,S as o,T as m,A as P,D as g,H as v}from"./index-0ZRfM3mG.js";import{u as C}from"./use-params-GhpeyKlM.js";import"./_baseToString-YYCBw-vh.js";import"./index-jDMK9XP-.js";import"./image-PdFD2BG8.js";import"./text-max-line-Swlrlhc3.js";import"./index.esm-G9SoUoJo.js";import"./mui-one-time-password-input.es-QlRnB43f.js";import"./styles-HNTfg28z.js";import"./styles-1A-IYQki.js";import{b as k}from"./format-number-eXbYiZkA.js";import{b as L,c as w}from"./blog-gR9TKZWO.js";import{M as y}from"./markdown-LBui9W0w.js";import{E as F}from"./empty-content--YCbbkiR.js";import{C as D}from"./custom-breadcrumbs-sO1B0Nzy.js";import{P as A}from"./post-list-W5KqXj3L.js";import{P as B,a as H}from"./post-comment-form-PNVcj5c1.js";import{P as I}from"./post-details-hero-lJse1Kgm.js";import{P as S}from"./post-skeleton-ggNIBo3r.js";import{C as W}from"./Chip-Z-_k_k73.js";import{F as $}from"./FormControlLabel-N_o6rvk2.js";import{C as R}from"./Checkbox-fx96uTSf.js";import{A as E}from"./AvatarGroup-H8iFnYWn.js";import"./TextField-bYtDKJ1u.js";import"./Card-pac-bk-l.js";import"./CardContent-USydDurF.js";import"./ListItem-oKlt_d36.js";import"./Pagination-gwvhsUKk.js";import"./FirstPage-9OsAYRHm.js";import"./form-provider-7AhGD8Yg.js";import"./rhf-text-field-1O6oRn4Q.js";import"./LoadingButton-rLhjB2ni.js";import"./CircularProgress-xK0zBRaG.js";import"./Fab-85O6f_Jn.js";import"./Skeleton-s51xMU08.js";import"./SwitchBase-Tu1cRIcg.js";function G({title:e}){const{post:s,postError:i,postLoading:d}=L(e),{latestPosts:n,latestPostsLoading:x}=w(e),p=t.jsx(S,{}),h=t.jsx(a,{sx:{my:10},children:t.jsx(F,{filled:!0,title:`${i==null?void 0:i.message}`,action:t.jsx(u,{component:b,href:c.post.root,startIcon:t.jsx(l,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:10}})}),j=s&&t.jsxs(t.Fragment,{children:[t.jsx(I,{title:s.title,author:s.author,coverUrl:s.coverUrl,createdAt:s.createdAt}),t.jsx(a,{maxWidth:!1,sx:{py:3,mb:5,borderBottom:r=>`solid 1px ${r.palette.divider}`},children:t.jsx(D,{links:[{name:"Home",href:"/"},{name:"Blog",href:c.post.root},{name:s==null?void 0:s.title}],sx:{maxWidth:720,mx:"auto"}})}),t.jsx(a,{maxWidth:!1,children:t.jsxs(o,{sx:{maxWidth:720,mx:"auto"},children:[t.jsx(m,{variant:"subtitle1",sx:{mb:5},children:s.description}),t.jsx(y,{children:s.content}),t.jsxs(o,{spacing:3,sx:{py:3,borderTop:r=>`dashed 1px ${r.palette.divider}`,borderBottom:r=>`dashed 1px ${r.palette.divider}`},children:[t.jsx(o,{direction:"row",flexWrap:"wrap",spacing:1,children:s.tags.map(r=>t.jsx(W,{label:r,variant:"soft"},r))}),t.jsxs(o,{direction:"row",alignItems:"center",children:[t.jsx($,{control:t.jsx(R,{defaultChecked:!0,size:"small",color:"error",icon:t.jsx(l,{icon:"solar:heart-bold"}),checkedIcon:t.jsx(l,{icon:"solar:heart-bold"})}),label:k(s.totalFavorites),sx:{mr:1}}),t.jsx(E,{children:s.favoritePerson.map(r=>t.jsx(P,{alt:r.name,src:r.avatarUrl},r.name))})]})]}),t.jsxs(o,{direction:"row",sx:{mb:3,mt:5},children:[t.jsx(m,{variant:"h4",children:"Comments"}),t.jsxs(m,{variant:"subtitle2",sx:{color:"text.disabled"},children:["(",s.comments.length,")"]})]}),t.jsx(B,{}),t.jsx(g,{sx:{mt:5,mb:2}}),t.jsx(H,{comments:s.comments})]})})]}),f=t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"h4",sx:{mb:5},children:"Recent Posts"}),t.jsx(A,{posts:n.slice(n.length-4),loading:x,disabledIndex:!0})]});return t.jsxs(t.Fragment,{children:[d&&p,i&&h,s&&j,t.jsx(a,{sx:{pb:15},children:!!n.length&&f})]})}function vt(){const e=C(),{title:s}=e;return t.jsxs(t.Fragment,{children:[t.jsx(v,{children:t.jsx("title",{children:" Post: Details"})}),t.jsx(G,{title:`${s}`})]})}export{vt as default};
