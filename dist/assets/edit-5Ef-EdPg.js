import{G as c,M as l,r as i,j as t,C as u,J as h,p as n,O as x,H as f}from"./index-N8SydwAL.js";import{a as G}from"./gravestone-WpFHd6L4.js";import{G as j}from"./gravestone-create-view-M09aY7ib.js";import"./empty-content-Ttp3qqTd.js";import"./graveyard-vLLPM793.js";import"./rhf-select-Y9ddv89c.js";import"./Checkbox-aend9-0B.js";import"./SwitchBase-GkPf3Zwx.js";import"./Chip-YnHBPfwg.js";import"./DatePicker--X6roKNT.js";import"./index-dPzt3bTj.js";import"./DialogActions-B4SxnogZ.js";import"./ListItem-EnR47mhZ.js";import"./DialogContent-SHEs2aaE.js";import"./dialogTitleClasses-wwJ_Lgyq.js";import"./index-sor8qiUr.js";import"./Skeleton-505Etpy4.js";function v({id:e}){const s=c(),{t:a}=l(),[o,m]=i.useState();i.useEffect(()=>{d(e)},[e]);const d=async p=>{const{gravestone:r}=await G(p);(r==null?void 0:r.length)>0&&m(r[0])};return t.jsxs(u,{maxWidth:s.themeStretch?!1:"lg",children:[t.jsx(h,{heading:a("Edit"),links:[{name:a("Fellesraad"),href:n.dashboard.root},{name:a("Graveyard"),href:n.dashboard.product.root}],sx:{mb:{xs:3,md:5}}}),o&&t.jsx(j,{currentGravestone:o})]})}function T(){const e=x(),{id:s}=e;return t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsx("title",{children:" Fellesraad: Gravestone Edit"})}),t.jsx(v,{id:`${s}`})]})}export{T as default};
