import{aS as g,j as s,v as y,B as i,bw as b,n as f,aY as v,aB as c,m as C,S as w,b0 as U,g as T,h as x,K as I,T as a,q as S,C as B,s as F,p as o,t as P,R as k,ej as A,H as D}from"./index-HNXcBFmK.js";import{b as n}from"./format-number-CyLv55jy.js";function L({user:e}){const r=g(),{name:d,coverUrl:l,role:m,totalFollowers:h,totalPosts:p,avatarUrl:j,totalFollowing:u}=e;return s.jsxs(y,{sx:{textAlign:"center"},children:[s.jsxs(i,{sx:{position:"relative"},children:[s.jsx(b,{sx:{left:0,right:0,zIndex:10,mx:"auto",bottom:-26,position:"absolute"}}),s.jsx(f,{alt:d,src:j,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),s.jsx(v,{src:l,alt:l,ratio:"16/9",overlay:c(r.palette.grey[900],.48)})]}),s.jsx(C,{sx:{mt:7,mb:1},primary:d,secondary:m,primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{component:"span",mt:.5}}),s.jsx(w,{direction:"row",alignItems:"center",justifyContent:"center",sx:{mb:2.5},children:U.map(t=>s.jsx(T,{sx:{color:t.color,"&:hover":{bgcolor:c(t.color,.08)}},children:s.jsx(x,{icon:t.icon})},t.name))}),s.jsx(I,{sx:{borderStyle:"dashed"}}),s.jsxs(i,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",sx:{py:3,typography:"subtitle1"},children:[s.jsxs("div",{children:[s.jsx(a,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Follower"}),n(h)]}),s.jsxs("div",{children:[s.jsx(a,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Following"}),n(u)]}),s.jsxs("div",{children:[s.jsx(a,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Total Post"}),n(p)]})]})]})}function R({users:e}){return s.jsx(i,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:e.map(r=>s.jsx(L,{user:r},r.id))})}function z(){const e=S();return s.jsxs(B,{maxWidth:e.themeStretch?!1:"lg",children:[s.jsx(F,{heading:"User Cards",links:[{name:"Dashboard",href:o.dashboard.root},{name:"User",href:o.dashboard.user.root},{name:"Cards"}],action:s.jsx(P,{component:k,href:o.dashboard.user.new,variant:"contained",startIcon:s.jsx(x,{icon:"mingcute:add-line"}),children:"New User"}),sx:{mb:{xs:3,md:5}}}),s.jsx(R,{users:A})]})}function _(){return s.jsxs(s.Fragment,{children:[s.jsx(D,{children:s.jsx("title",{children:" Dashboard: User Cards"})}),s.jsx(z,{})]})}export{_ as default};