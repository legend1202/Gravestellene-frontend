import{d5 as m,d6 as e,d7 as A,d4 as g,c5 as B}from"./index-JGGUJxTa.js";import{i as M,_ as o}from"./_baseToString-1Q8NEKav.js";import{_ as s,a as $}from"./_baseIteratee-VzlByJmy.js";import{_ as k}from"./_baseEach-tr5FeyB2.js";var C=k,E=m;function L(n,r){var a=-1,u=E(n)?Array(n.length):[];return C(n,function(t,i,c){u[++a]=r(t,i,c)}),u}var O=L;function w(n,r){var a=n.length;for(n.sort(r);a--;)n[a]=n[a].value;return n}var x=w,y=M;function G(n,r){if(n!==r){var a=n!==void 0,u=n===null,t=n===n,i=y(n),c=r!==void 0,d=r===null,f=r===r,p=y(r);if(!d&&!p&&!i&&n>r||i&&c&&f&&!d&&!p||u&&c&&f||!a&&f||!t)return 1;if(!u&&!i&&!p&&n<r||p&&a&&t&&!u&&!i||d&&a&&t||!c&&t||!f)return-1}return 0}var U=G,j=U;function F(n,r,a){for(var u=-1,t=n.criteria,i=r.criteria,c=t.length,d=a.length;++u<c;){var f=j(t[u],i[u]);if(f){if(u>=d)return f;var p=a[u];return f*(p=="desc"?-1:1)}}return n.index-r.index}var q=F,_=o,z=s,H=$,J=O,K=x,P=A,Q=q,T=e,V=g;function W(n,r,a){r.length?r=_(r,function(i){return V(i)?function(c){return z(c,i.length===1?i[0]:i)}:i}):r=[T];var u=-1;r=_(r,P(H));var t=J(n,function(i,c,d){var f=_(r,function(p){return p(i)});return{criteria:f,index:++u,value:i}});return K(t,function(i,c){return Q(i,c,a)})}var X=W,Y=X,b=g;function Z(n,r,a,u){return n==null?[]:(b(r)||(r=r==null?[]:[r]),a=u?void 0:a,b(a)||(a=a==null?[]:[a]),Y(n,r,a))}var v=Z;const R=B(v);export{R as o};
