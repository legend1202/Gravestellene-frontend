import{bi as R,k as z,aV as O,j as s,S as a,v as A,w as I,B as P,ba as V,L as H,R as L,p as h,g as E,h as l,n as G,aY as N,bj as Q,bk as w,q as U,r as d,C as _,s as q,t as M,bs as W,bt as Y,H as $}from"./index-A5RRZfYH.js";import{o as S}from"./orderBy-xhequno3.js";import{u as J}from"./use-debounce-cOwrhfcP.js";import{P as K}from"./_blog-GspOuDqg.js";import{u as X,a as Z}from"./blog-nLEjvfsG.js";import{P as D,a as ss}from"./post-search-3tzFHyZc.js";import{a as es}from"./post-skeleton-xN59KFpm.js";import{b as y}from"./format-number-PIDrlv5x.js";import{T as k}from"./text-max-line-3N6UAzO5.js";import{P as ts,p as os}from"./Pagination-GjPtaotA.js";import"./styles-87Wh7GO5.js";import"./_baseToString-zUlb8NG_.js";import"./_baseIteratee--KI4xOJu.js";import"./_baseEach-EFrBalw4.js";import"./Autocomplete-VAhUVX0s.js";import"./Chip-GbrFxrzK.js";import"./Skeleton-v5Il4nLo.js";import"./FirstPage-0P5qewe6.js";function rs({post:t}){const o=R(),n=z(),i=O("up","sm"),{title:r,author:x,publish:m,coverUrl:u,createdAt:p,totalViews:f,totalShares:j,totalComments:b,description:g}=t;return s.jsxs(s.Fragment,{children:[s.jsxs(a,{component:A,direction:"row",children:[s.jsxs(a,{sx:{p:C=>C.spacing(3,3,2,3)},children:[s.jsxs(a,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:2},children:[s.jsx(I,{variant:"soft",color:m==="published"&&"info"||"default",children:m}),s.jsx(P,{component:"span",sx:{typography:"caption",color:"text.disabled"},children:V(p)})]}),s.jsxs(a,{spacing:1,flexGrow:1,children:[s.jsx(H,{color:"inherit",component:L,href:h.dashboard.post.details(r),children:s.jsx(k,{variant:"subtitle2",line:2,children:r})}),s.jsx(k,{variant:"body2",sx:{color:"text.secondary"},children:g})]}),s.jsxs(a,{direction:"row",alignItems:"center",children:[s.jsx(E,{color:o.open?"inherit":"default",onClick:o.onOpen,children:s.jsx(l,{icon:"eva:more-horizontal-fill"})}),s.jsxs(a,{spacing:1.5,flexGrow:1,direction:"row",flexWrap:"wrap",justifyContent:"flex-end",sx:{typography:"caption",color:"text.disabled"},children:[s.jsxs(a,{direction:"row",alignItems:"center",children:[s.jsx(l,{icon:"eva:message-circle-fill",width:16,sx:{mr:.5}}),y(b)]}),s.jsxs(a,{direction:"row",alignItems:"center",children:[s.jsx(l,{icon:"solar:eye-bold",width:16,sx:{mr:.5}}),y(f)]}),s.jsxs(a,{direction:"row",alignItems:"center",children:[s.jsx(l,{icon:"solar:share-bold",width:16,sx:{mr:.5}}),y(j)]})]})]})]}),i&&s.jsxs(P,{sx:{width:180,height:240,position:"relative",flexShrink:0,p:1},children:[s.jsx(G,{alt:x.name,src:x.avatarUrl,sx:{position:"absolute",top:16,right:16,zIndex:9}}),s.jsx(N,{alt:r,src:u,sx:{height:1,borderRadius:1.5}})]})]}),s.jsxs(Q,{open:o.open,onClose:o.onClose,arrow:"bottom-center",sx:{width:140},children:[s.jsxs(w,{onClick:()=>{o.onClose(),n.push(h.dashboard.post.details(r))},children:[s.jsx(l,{icon:"solar:eye-bold"}),"View"]}),s.jsxs(w,{onClick:()=>{o.onClose(),n.push(h.dashboard.post.edit(r))},children:[s.jsx(l,{icon:"solar:pen-bold"}),"Edit"]}),s.jsxs(w,{onClick:()=>{o.onClose()},sx:{color:"error.main"},children:[s.jsx(l,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}function ns({posts:t,loading:o}){const n=s.jsx(s.Fragment,{children:[...Array(16)].map((r,x)=>s.jsx(es,{variant:"horizontal"},x))}),i=s.jsx(s.Fragment,{children:t.map(r=>s.jsx(rs,{post:r},r.id))});return s.jsxs(s.Fragment,{children:[s.jsx(P,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:o?n:i}),t.length>8&&s.jsx(ts,{count:8,sx:{mt:8,[`& .${os.ul}`]:{justifyContent:"center"}}})]})}const is={publish:"all"};function as(){const t=U(),[o,n]=d.useState("latest"),[i,r]=d.useState(is),[x,m]=d.useState(""),u=J(x),{posts:p,postsLoading:f}=X(),{searchResults:j,searchLoading:b}=Z(u),g=ls({inputData:p,filters:i,sortBy:o}),C=d.useCallback(e=>{n(e)},[]),v=d.useCallback((e,c)=>{r(B=>({...B,[e]:c}))},[]),F=d.useCallback(e=>{m(e)},[]),T=d.useCallback((e,c)=>{v("publish",c)},[v]);return s.jsxs(_,{maxWidth:t.themeStretch?!1:"lg",children:[s.jsx(q,{heading:"List",links:[{name:"Dashboard",href:h.dashboard.root},{name:"Blog",href:h.dashboard.post.root},{name:"List"}],action:s.jsx(M,{component:L,href:h.dashboard.post.new,variant:"contained",startIcon:s.jsx(l,{icon:"mingcute:add-line"}),children:"New Post"}),sx:{mb:{xs:3,md:5}}}),s.jsxs(a,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[s.jsx(D,{query:u,results:j,onSearch:F,loading:b,hrefItem:e=>h.dashboard.post.details(e)}),s.jsx(ss,{sort:o,onSort:C,sortOptions:K})]}),s.jsx(W,{value:i.publish,onChange:T,sx:{mb:{xs:3,md:5}},children:["all","published","draft"].map(e=>s.jsx(Y,{iconPosition:"end",value:e,label:e,icon:s.jsxs(I,{variant:(e==="all"||e===i.publish)&&"filled"||"soft",color:e==="published"&&"info"||"default",children:[e==="all"&&p.length,e==="published"&&p.filter(c=>c.publish==="published").length,e==="draft"&&p.filter(c=>c.publish==="draft").length]}),sx:{textTransform:"capitalize"}},e))}),s.jsx(ns,{posts:g,loading:f})]})}const ls=({inputData:t,filters:o,sortBy:n})=>{const{publish:i}=o;return n==="latest"&&(t=S(t,["createdAt"],["desc"])),n==="oldest"&&(t=S(t,["createdAt"],["asc"])),n==="popular"&&(t=S(t,["totalViews"],["desc"])),i!=="all"&&(t=t.filter(r=>r.publish===i)),t};function Is(){return s.jsxs(s.Fragment,{children:[s.jsx($,{children:s.jsx("title",{children:" Dashboard: Post List"})}),s.jsx(as,{})]})}export{Is as default};
