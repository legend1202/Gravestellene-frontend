import{k as R,z as A,c as N,d as s,eb as k,cT as T,r as p,e as V,o as z,p as E,j as e,F as D,Q as m,v as b,w as L,B as h,T as t,W as P,S as j,t as B,f as l,cU as H,i as $}from"./index-A5RRZfYH.js";import{d as G}from"./format-number-PIDrlv5x.js";import{a as O}from"./rhf-upload-eTui-glj.js";import{R as I}from"./rhf-switch-SbAXsOar.js";import{R as W}from"./rhf-autocomplete-6bcyEHBq.js";import{F as Z}from"./FormControlLabel-doWXY1Ro.js";import{S as M}from"./Switch-WUG4m-AU.js";function aa({currentUser:a}){const c=R(),{enqueueSnackbar:y}=A(),f=N().shape({name:s().required("Name is required"),email:s().required("Email is required").email("Email must be a valid email address"),phoneNumber:s().required("Phone number is required"),address:s().required("Address is required"),country:s().required("Country is required"),company:s().required("Company is required"),state:s().required("State is required"),city:s().required("City is required"),role:s().required("Role is required"),zipCode:s().required("Zip code is required"),avatarUrl:k().nullable().required("Avatar is required"),status:s(),isVerified:T()}),g=p.useMemo(()=>({name:(a==null?void 0:a.name)||"",city:(a==null?void 0:a.city)||"",role:(a==null?void 0:a.role)||"",email:(a==null?void 0:a.email)||"",state:(a==null?void 0:a.state)||"",status:(a==null?void 0:a.status)||"",address:(a==null?void 0:a.address)||"",country:(a==null?void 0:a.country)||"",zipCode:(a==null?void 0:a.zipCode)||"",company:(a==null?void 0:a.company)||"",avatarUrl:(a==null?void 0:a.avatarUrl)||null,phoneNumber:(a==null?void 0:a.phoneNumber)||"",isVerified:(a==null?void 0:a.isVerified)||!0}),[a]),n=V({resolver:z(f),defaultValues:g}),{reset:u,watch:v,control:C,setValue:x,handleSubmit:q,formState:{isSubmitting:w}}=n,d=v(),S=q(async i=>{try{await new Promise(o=>setTimeout(o,500)),u(),y(a?"Update success!":"Create success!"),c.push(E.dashboard.user.list),console.info("DATA",i)}catch(o){console.error(o)}}),r=p.useCallback(i=>{const o=i[0],F=Object.assign(o,{preview:URL.createObjectURL(o)});o&&x("avatarUrl",F,{shouldValidate:!0})},[x]);return e.jsx(D,{methods:n,onSubmit:S,children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(m,{xs:12,md:4,children:e.jsxs(b,{sx:{pt:10,pb:5,px:3},children:[a&&e.jsx(L,{color:d.status==="active"&&"success"||d.status==="banned"&&"error"||"warning",sx:{position:"absolute",top:24,right:24},children:d.status}),e.jsx(h,{sx:{mb:5},children:e.jsx(O,{name:"avatarUrl",maxSize:3145728,onDrop:r,helperText:e.jsxs(t,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",G(3145728)]})})}),a&&e.jsx(Z,{labelPlacement:"start",control:e.jsx(P,{name:"status",control:C,render:({field:i})=>e.jsx(M,{...i,checked:i.value!=="active",onChange:o=>i.onChange(o.target.checked?"banned":"active")})}),label:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"subtitle2",sx:{mb:.5},children:"Banned"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Apply disable account"})]}),sx:{mx:0,mb:3,width:1,justifyContent:"space-between"}}),e.jsx(I,{name:"isVerified",labelPlacement:"start",label:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"subtitle2",sx:{mb:.5},children:"Email Verified"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Disabling this will automatically send the user a verification email"})]}),sx:{mx:0,width:1,justifyContent:"space-between"}}),a&&e.jsx(j,{justifyContent:"center",alignItems:"center",sx:{mt:3},children:e.jsx(B,{variant:"soft",color:"error",children:"Delete User"})})]})}),e.jsx(m,{xs:12,md:8,children:e.jsxs(b,{sx:{p:3},children:[e.jsxs(h,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(l,{name:"name",label:"Full Name"}),e.jsx(l,{name:"email",label:"Email Address"}),e.jsx(l,{name:"phoneNumber",label:"Phone Number"}),e.jsx(W,{name:"country",type:"country",label:"Country",placeholder:"Choose a country",fullWidth:!0,options:H.map(i=>i.label),getOptionLabel:i=>i}),e.jsx(l,{name:"state",label:"State/Region"}),e.jsx(l,{name:"city",label:"City"}),e.jsx(l,{name:"address",label:"Address"}),e.jsx(l,{name:"zipCode",label:"Zip/Code"}),e.jsx(l,{name:"company",label:"Company"}),e.jsx(l,{name:"role",label:"Role"})]}),e.jsx(j,{alignItems:"flex-end",sx:{mt:3},children:e.jsx($,{type:"submit",variant:"contained",loading:w,children:a?"Save Changes":"Create User"})})]})})]})})}export{aa as U};
