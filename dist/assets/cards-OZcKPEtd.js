import{aB as g,j as r,B as i,be as y,A as b,ak as c,g as f,S as v,aK as C,c as U,d as m,D as w,T as a,h as I,C as T,p as o,i as S,R as B,d_ as F,H as P}from"./index-tv0ZIiTC.js";import"./index.esm-VBvqitsX.js";import{I as k}from"./image-tVn7ll4O.js";import"./mui-one-time-password-input.es-YbC1owsP.js";import"./styles-9eCz8YsQ.js";import{C as A}from"./custom-breadcrumbs-wU-A5DZv.js";import{b as n}from"./format-number-BH3VEnKN.js";import{C as D}from"./Card-fEhE4FGy.js";import"./TextField-MR0F-eFr.js";function L({user:s}){const t=g(),{name:d,coverUrl:l,role:x,totalFollowers:p,totalPosts:h,avatarUrl:j,totalFollowing:u}=s;return r.jsxs(D,{sx:{textAlign:"center"},children:[r.jsxs(i,{sx:{position:"relative"},children:[r.jsx(y,{sx:{left:0,right:0,zIndex:10,mx:"auto",bottom:-26,position:"absolute"}}),r.jsx(b,{alt:d,src:j,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),r.jsx(k,{src:l,alt:l,ratio:"16/9",overlay:c(t.palette.grey[900],.48)})]}),r.jsx(f,{sx:{mt:7,mb:1},primary:d,secondary:x,primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{component:"span",mt:.5}}),r.jsx(v,{direction:"row",alignItems:"center",justifyContent:"center",sx:{mb:2.5},children:C.map(e=>r.jsx(U,{sx:{color:e.color,"&:hover":{bgcolor:c(e.color,.08)}},children:r.jsx(m,{icon:e.icon})},e.name))}),r.jsx(w,{sx:{borderStyle:"dashed"}}),r.jsxs(i,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",sx:{py:3,typography:"subtitle1"},children:[r.jsxs("div",{children:[r.jsx(a,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Follower"}),n(p)]}),r.jsxs("div",{children:[r.jsx(a,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Following"}),n(u)]}),r.jsxs("div",{children:[r.jsx(a,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Total Post"}),n(h)]})]})]})}function R({users:s}){return r.jsx(i,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(t=>r.jsx(L,{user:t},t.id))})}function _(){const s=I();return r.jsxs(T,{maxWidth:s.themeStretch?!1:"lg",children:[r.jsx(A,{heading:"User Cards",links:[{name:"Dashboard",href:o.dashboard.root},{name:"User",href:o.dashboard.user.root},{name:"Cards"}],action:r.jsx(S,{component:B,href:o.dashboard.user.new,variant:"contained",startIcon:r.jsx(m,{icon:"mingcute:add-line"}),children:"New User"}),sx:{mb:{xs:3,md:5}}}),r.jsx(R,{users:F})]})}function J(){return r.jsxs(r.Fragment,{children:[r.jsx(P,{children:r.jsx("title",{children:" Dashboard: User Cards"})}),r.jsx(_,{})]})}export{J as default};
