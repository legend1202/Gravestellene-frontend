import{j as e,C as c,y as o,T as d,an as x,bn as h,h as p,r as m,p as j,B as g,H as v}from"./index-xccKnqtj.js";import{v as l}from"./bounce-2wMPGPoA.js";import{M as f}from"./motion-container-MK9sOarX.js";import{C as b}from"./custom-breadcrumbs-l_npxqvb.js";import{T as C,a as u}from"./ToggleButtonGroup-HkLS06i8.js";import{C as y}from"./Card-tMu97UR4.js";import{C as D}from"./CardHeader-EZ_NOwqQ.js";import"./transition-eqIn2NYL.js";function P({hasContent:n,roles:r,children:a,sx:t}){const{user:i}=h(),s=i==null?void 0:i.role;return typeof r<"u"&&!r.includes(s)?n?e.jsxs(c,{component:f,sx:{textAlign:"center",...t},children:[e.jsx(o.div,{variants:l().in,children:e.jsx(d,{variant:"h3",sx:{mb:2},children:"Permission Denied"})}),e.jsx(o.div,{variants:l().in,children:e.jsx(d,{sx:{color:"text.secondary"},children:"You do not have permission to access this page"})}),e.jsx(o.div,{variants:l().in,children:e.jsx(x,{sx:{height:260,my:{xs:5,sm:10}}})})]}):null:e.jsxs(e.Fragment,{children:[" ",a," "]})}function B(){const n=p(),[r,a]=m.useState("admin"),t=m.useCallback((i,s)=>{s!==null&&a(s)},[]);return e.jsxs(c,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(b,{heading:"Permission Denied",links:[{name:"Dashboard",href:j.dashboard.root},{name:"Permission Denied"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(C,{exclusive:!0,value:r,size:"small",onChange:t,sx:{mb:5},children:[e.jsx(u,{value:"admin","aria-label":"admin role",children:"isAdmin"}),e.jsx(u,{value:"user","aria-label":"user role",children:"isUser"})]}),e.jsx(P,{hasContent:!0,roles:[r],sx:{py:10},children:e.jsx(g,{gap:3,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",children:[...Array(8)].map((i,s)=>e.jsxs(y,{children:[e.jsx(D,{title:`Card ${s+1}`,subheader:"Proin viverra ligula"}),e.jsx(d,{variant:"body2",sx:{px:3,py:2,color:"text.secondary"},children:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Vestibulum fringilla pede sit amet augue."})]},s))})})]})}function q(){return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx("title",{children:" Dashboard: Permission Denied"})}),e.jsx(B,{})]})}export{q as default};