import{eu as E,ev as L,ew as Y,ex as b,ey as H,ez as d,eA as S,eB as $}from"./index-xccKnqtj.js";var w=1e3*60,c=60*24,x=c*30,_=c*365;function j(t,i,e){var v,m,g;E(2,arguments);var T=$(),n=(v=(m=e==null?void 0:e.locale)!==null&&m!==void 0?m:T.locale)!==null&&v!==void 0?v:L;if(!n.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var h=Y(t,i);if(isNaN(h))throw new RangeError("Invalid time value");var o=b(H(e),{addSuffix:!!(e!=null&&e.addSuffix),comparison:h}),u,f;h>0?(u=d(i),f=d(t)):(u=d(t),f=d(i));var M=String((g=e==null?void 0:e.roundingMethod)!==null&&g!==void 0?g:"round"),a;if(M==="floor")a=Math.floor;else if(M==="ceil")a=Math.ceil;else if(M==="round")a=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var N=f.getTime()-u.getTime(),l=N/w,O=S(f)-S(u),s=(N-O)/w,D=e==null?void 0:e.unit,r;if(D?r=String(D):l<1?r="second":l<60?r="minute":l<c?r="hour":s<x?r="day":s<_?r="month":r="year",r==="second"){var z=a(N/1e3);return n.formatDistance("xSeconds",z,o)}else if(r==="minute"){var R=a(l);return n.formatDistance("xMinutes",R,o)}else if(r==="hour"){var y=a(l/60);return n.formatDistance("xHours",y,o)}else if(r==="day"){var A=a(s/c);return n.formatDistance("xDays",A,o)}else if(r==="month"){var I=a(s/x);return I===12&&D!=="month"?n.formatDistance("xYears",1,o):n.formatDistance("xMonths",I,o)}else if(r==="year"){var U=a(s/_);return n.formatDistance("xYears",U,o)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function C(t,i){return E(1,arguments),j(t,Date.now(),i)}export{C as f};
