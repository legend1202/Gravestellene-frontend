import{c as n}from"./format-time-nXOmxoul.js";import{dG as e,dH as f,dI as l}from"./index-HKvYvq3j.js";function Y(r,M){const o=new Date().getFullYear(),s=r?e(r):null,y=M?e(M):null,u=o===s&&o===y,c=r&&M?f(new Date(r),new Date(M)):!1,d=r&&M?l(new Date(r),new Date(M)):!1;return u?d?c?n(M,"dd MMM yy"):`${n(r,"dd")} - ${n(M,"dd MMM yy")}`:`${n(r,"dd MMM")} - ${n(M,"dd MMM yy")}`:`${n(r,"dd MMM yy")} - ${n(M,"dd MMM yy")}`}export{Y as s};