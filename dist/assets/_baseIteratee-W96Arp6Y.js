import{c8 as m,c9 as g,ca as A,bJ as S,bN as u,cb as d,cc as M,cd as C,bL as O}from"./index-_tg0Vjne.js";import{i as v,a as E,b as K}from"./_baseToString-DU9o3e3j.js";var D=m,R=g,L=1,G=2;function w(r,n,t,e){var a=t.length,s=a,f=!e;if(r==null)return!s;for(r=Object(r);a--;){var i=t[a];if(f&&i[2]?i[1]!==r[i[0]]:!(i[0]in r))return!1}for(;++a<s;){i=t[a];var _=i[0],h=r[_],y=i[1];if(f&&i[2]){if(h===void 0&&!(_ in r))return!1}else{var $=new D;if(e)var c=e(h,y,_,r,n,$);if(!(c===void 0?R(y,h,L|G,e,$):c))return!1}}return!0}var T=w,x=A;function F(r){return r===r&&!x(r)}var P=F,N=P,q=S;function H(r){for(var n=q(r),t=n.length;t--;){var e=n[t],a=r[e];n[t]=[e,a,N(a)]}return n}var U=H;function J(r,n){return function(t){return t==null?!1:t[r]===n&&(n!==void 0||r in Object(t))}}var b=J,Y=T,B=U,Q=b;function W(r){var n=B(r);return n.length==1&&n[0][2]?Q(n[0][0],n[0][1]):function(t){return t===r||Y(t,r,n)}}var X=W,Z=u,k=v,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,V=/^\w*$/;function j(r,n){if(Z(r))return!1;var t=typeof r;return t=="number"||t=="symbol"||t=="boolean"||r==null||k(r)?!0:V.test(r)||!z.test(r)||n!=null&&r in Object(n)}var l=j,rr=E;function nr(r){return r==null?"":rr(r)}var tr=nr,er=u,ar=l,ir=K,sr=tr;function fr(r,n){return er(r)?r:ar(r,n)?[r]:ir(sr(r))}var p=fr,ur=v,or=1/0;function _r(r){if(typeof r=="string"||ur(r))return r;var n=r+"";return n=="0"&&1/r==-or?"-0":n}var o=_r,hr=p,lr=o;function yr(r,n){n=hr(n,r);for(var t=0,e=n.length;r!=null&&t<e;)r=r[lr(n[t++])];return t&&t==e?r:void 0}var I=yr,$r=I;function cr(r,n,t){var e=r==null?void 0:$r(r,n);return e===void 0?t:e}var gr=cr;function vr(r,n){return r!=null&&n in Object(r)}var Pr=vr,br=p,pr=d,Ir=u,mr=M,Ar=C,Sr=o;function dr(r,n,t){n=br(n,r);for(var e=-1,a=n.length,s=!1;++e<a;){var f=Sr(n[e]);if(!(s=r!=null&&t(r,f)))break;r=r[f]}return s||++e!=a?s:(a=r==null?0:r.length,!!a&&Ar(a)&&mr(f,a)&&(Ir(r)||pr(r)))}var Mr=dr,Cr=Pr,Or=Mr;function Er(r,n){return r!=null&&Or(r,n,Cr)}var Kr=Er,Dr=g,Rr=gr,Lr=Kr,Gr=l,wr=P,Tr=b,xr=o,Fr=1,Nr=2;function qr(r,n){return Gr(r)&&wr(n)?Tr(xr(r),n):function(t){var e=Rr(t,r);return e===void 0&&e===n?Lr(t,r):Dr(n,e,Fr|Nr)}}var Hr=qr;function Ur(r){return function(n){return n==null?void 0:n[r]}}var Jr=Ur,Yr=I;function Br(r){return function(n){return Yr(n,r)}}var Qr=Br,Wr=Jr,Xr=Qr,Zr=l,kr=o;function zr(r){return Zr(r)?Wr(kr(r)):Xr(r)}var Vr=zr,jr=X,rn=Hr,nn=O,tn=u,en=Vr;function an(r){return typeof r=="function"?r:r==null?nn:typeof r=="object"?tn(r)?rn(r[0],r[1]):jr(r):en(r)}var un=an;export{I as _,un as a};
