import{j as e,B as g,y as r}from"./index-xccKnqtj.js";const s=t=>{const i=(t==null?void 0:t.staggerIn)||.05,n=(t==null?void 0:t.staggerIn)||.05,a=(t==null?void 0:t.staggerIn)||.05;return{animate:{transition:{staggerChildren:i,delayChildren:n}},exit:{transition:{staggerChildren:a,staggerDirection:-1}}}};function x({animate:t,action:i=!1,children:n,...a}){return i?e.jsx(g,{component:r.div,initial:!1,animate:t?"animate":"exit",variants:s(),...a,children:n}):e.jsx(g,{component:r.div,initial:"initial",animate:"animate",exit:"exit",variants:s(),...a,children:n})}export{x as M,s as v};
