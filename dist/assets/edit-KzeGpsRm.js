import{v as p,r as o,j as t,C as c,x as l,p as i,V as x,H as h}from"./index-zFfPxWlY.js";import{a as u}from"./gravestone-E4Sp2NWG.js";import{G as f}from"./gravestone-create-view--dYqJBC-.js";import"./empty-content-EBAcp_-R.js";import"./graveyard-bxcUt2iV.js";import"./rhf-select-ElkriFWx.js";import"./Checkbox-Ixvscv7Q.js";import"./SwitchBase-UFqOjZj0.js";import"./Chip-gh5rtDwp.js";import"./DatePicker-xvGV52gi.js";import"./index-g5_14GVp.js";import"./DialogActions-pydsUUwr.js";import"./ListItem-vuk4xiXM.js";import"./DialogContent-DOQSYuAM.js";import"./dialogTitleClasses-ryWSJ9bo.js";import"./index-WrWLi9vR.js";import"./Skeleton-3Uorjo7W.js";function j({id:r}){const a=p(),[e,n]=o.useState();o.useEffect(()=>{m(r)},[r]);const m=async d=>{const{gravestone:s}=await u(d);(s==null?void 0:s.length)>0&&n(s[0])};return t.jsxs(c,{maxWidth:a.themeStretch?!1:"lg",children:[t.jsx(l,{heading:"Edit",links:[{name:"Fellesraad",href:i.dashboard.root},{name:"Graveyard",href:i.dashboard.product.root},{name:e==null?void 0:e.name}],sx:{mb:{xs:3,md:5}}}),e&&t.jsx(f,{currentGravestone:e})]})}function $(){const r=x(),{id:a}=r;return t.jsxs(t.Fragment,{children:[t.jsx(h,{children:t.jsx("title",{children:" Fellesraad: Gravestone Edit"})}),t.jsx(j,{id:`${a}`})]})}export{$ as default};
