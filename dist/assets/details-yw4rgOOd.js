import{j as t,C as a,i as u,R as b,p as c,d as l,S as o,T as m,A as P,D as g,H as v}from"./index-xccKnqtj.js";import{u as C}from"./use-params-N982_uW4.js";import"./_baseToString-cxoetQrk.js";import"./index-scZDXM4y.js";import"./image-ihTI-eUB.js";import"./text-max-line-RJIP1uxs.js";import"./index.esm-YEE7kA5n.js";import"./mui-one-time-password-input.es-8WdpYP-F.js";import"./styles-XyZpQVQ4.js";import"./styles-vVjrARI1.js";import{b as k}from"./format-number-po7E8qFT.js";import{b as L,c as w}from"./blog-CjayAV6j.js";import{M as y}from"./markdown-DnsWDlv5.js";import{E as F}from"./empty-content-FevP8_c1.js";import{C as D}from"./custom-breadcrumbs-l_npxqvb.js";import{P as A}from"./post-list-k8npibDw.js";import{P as B,a as H}from"./post-comment-form-YdRTUiXd.js";import{P as I}from"./post-details-hero-oRm9B9Tl.js";import{P as S}from"./post-skeleton-1ipASb_f.js";import{C as W}from"./Chip-_G7JEqc_.js";import{F as $}from"./FormControlLabel-rYqjbgl6.js";import{C as R}from"./Checkbox-d99zhaav.js";import{A as E}from"./AvatarGroup-56z25LTf.js";import"./TextField-_2MBvEfR.js";import"./Card-tMu97UR4.js";import"./CardContent-gQVSeczZ.js";import"./ListItem-SIad6pfE.js";import"./Pagination-Gap7x2Il.js";import"./FirstPage-nPhwdI91.js";import"./form-provider-AIk6qsYQ.js";import"./yup-kNUoSS0a.js";import"./rhf-text-field-M35LS_3G.js";import"./LoadingButton-rYn3LTh9.js";import"./CircularProgress-Ir6PpH3m.js";import"./Fab-iQHHbkKd.js";import"./Skeleton-ur7bka2j.js";import"./SwitchBase-r3AAQIaf.js";function G({title:e}){const{post:s,postError:i,postLoading:d}=L(e),{latestPosts:n,latestPostsLoading:x}=w(e),p=t.jsx(S,{}),h=t.jsx(a,{sx:{my:10},children:t.jsx(F,{filled:!0,title:`${i==null?void 0:i.message}`,action:t.jsx(u,{component:b,href:c.post.root,startIcon:t.jsx(l,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:10}})}),j=s&&t.jsxs(t.Fragment,{children:[t.jsx(I,{title:s.title,author:s.author,coverUrl:s.coverUrl,createdAt:s.createdAt}),t.jsx(a,{maxWidth:!1,sx:{py:3,mb:5,borderBottom:r=>`solid 1px ${r.palette.divider}`},children:t.jsx(D,{links:[{name:"Home",href:"/"},{name:"Blog",href:c.post.root},{name:s==null?void 0:s.title}],sx:{maxWidth:720,mx:"auto"}})}),t.jsx(a,{maxWidth:!1,children:t.jsxs(o,{sx:{maxWidth:720,mx:"auto"},children:[t.jsx(m,{variant:"subtitle1",sx:{mb:5},children:s.description}),t.jsx(y,{children:s.content}),t.jsxs(o,{spacing:3,sx:{py:3,borderTop:r=>`dashed 1px ${r.palette.divider}`,borderBottom:r=>`dashed 1px ${r.palette.divider}`},children:[t.jsx(o,{direction:"row",flexWrap:"wrap",spacing:1,children:s.tags.map(r=>t.jsx(W,{label:r,variant:"soft"},r))}),t.jsxs(o,{direction:"row",alignItems:"center",children:[t.jsx($,{control:t.jsx(R,{defaultChecked:!0,size:"small",color:"error",icon:t.jsx(l,{icon:"solar:heart-bold"}),checkedIcon:t.jsx(l,{icon:"solar:heart-bold"})}),label:k(s.totalFavorites),sx:{mr:1}}),t.jsx(E,{children:s.favoritePerson.map(r=>t.jsx(P,{alt:r.name,src:r.avatarUrl},r.name))})]})]}),t.jsxs(o,{direction:"row",sx:{mb:3,mt:5},children:[t.jsx(m,{variant:"h4",children:"Comments"}),t.jsxs(m,{variant:"subtitle2",sx:{color:"text.disabled"},children:["(",s.comments.length,")"]})]}),t.jsx(B,{}),t.jsx(g,{sx:{mt:5,mb:2}}),t.jsx(H,{comments:s.comments})]})})]}),f=t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"h4",sx:{mb:5},children:"Recent Posts"}),t.jsx(A,{posts:n.slice(n.length-4),loading:x,disabledIndex:!0})]});return t.jsxs(t.Fragment,{children:[d&&p,i&&h,s&&j,t.jsx(a,{sx:{pb:15},children:!!n.length&&f})]})}function Ct(){const e=C(),{title:s}=e;return t.jsxs(t.Fragment,{children:[t.jsx(v,{children:t.jsx("title",{children:" Post: Details"})}),t.jsx(G,{title:`${s}`})]})}export{Ct as default};
