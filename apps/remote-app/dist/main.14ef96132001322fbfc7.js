(()=>{var e,r,t,n,a={369:(e,r,t)=>{Promise.all([t.e(599),t.e(728)]).then(t.bind(t,728))}},o={};function u(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={exports:{}};return a[e](t,t.exports,u),t.exports}u.m=a,u.c=o,u.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return u.d(r,{a:r}),r},u.d=(e,r)=>{for(var t in r)u.o(r,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((r,t)=>(u.f[t](e,r),r)),[])),u.u=e=>e+"."+{500:"75635fdc6af95e19d151",599:"51be633b5856003ea9ca",728:"48f31dddfface8564370",730:"6163645a341d112a0f35",901:"c1590b55b1c0299b58b1",930:"9eb7142ab9f6eafdd850",983:"71a8e8f4d30ba66656e9"}[e]+".js",u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="remote-app:",u.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,f;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var p=l[d];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+a){i=p;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var s=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),f&&document.head.appendChild(i)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={},n={},u.f.remotes=(e,r)=>{u.o(t,e)&&t[e].forEach((e=>{var t=u.R;t||(t=[]);var a=n[e];if(!(t.indexOf(a)>=0)){if(t.push(a),a.p)return r.push(a.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+a[1]+'" from '+a[2]),u.m[e]=()=>{throw r},a.p=0},i=(e,t,n,u,i,f)=>{try{var l=e(t,n);if(!l||!l.then)return i(l,u,f);var d=l.then((e=>i(e,u)),o);if(!f)return d;r.push(a.p=d)}catch(e){o(e)}},f=(e,r,n)=>i(r.get,a[1],t,0,l,n),l=r=>{a.p=1,u.m[e]=e=>{e.exports=r()}};i(u,a[2],0,0,((e,r,t)=>e?i(u.I,a[0],0,e,f,t):o()),1)}}))},(()=>{u.S={};var e={},r={};u.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];u.o(u.S,t)||(u.S[t]={});var o=u.S[t],i="remote-app",f=(e,r,t,n)=>{var a=o[e]=o[e]||{},u=a[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(a[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(f("react-dom","18.2.0",(()=>Promise.all([u.e(730),u.e(599)]).then((()=>()=>u(730))))),f("react","17.0.2",(()=>u.e(901).then((()=>()=>u(901))))),f("react","18.2.0",(()=>u.e(983).then((()=>()=>u(983))))),f("ui","0.0.0",(()=>u.e(930).then((()=>()=>u(930)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),u.p="/remote-app/dist/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var u=t[n],i=(typeof u)[0];if(o!=i)return"o"==o&&"n"==i||"s"==i||"u"==o;if("o"!=o&&"u"!=o&&a!=u)return a<u;n++}},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,n+="u"==(typeof(i=e[o]))[0]?"-":(a>0?".":"")+(a=2,i);return n}var u=[];for(o=1;o<e.length;o++){var i=e[o];u.push(0===i?"not("+f()+")":1===i?"("+f()+" || "+f()+")":2===i?u.pop()+" "+u.pop():t(i))}return f();function f(){return u.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var a=r[0],o=a<0;o&&(a=-a-1);for(var u=0,i=1,f=!0;;i++,u++){var l,d,p=i<r.length?(typeof r[i])[0]:"";if(u>=t.length||"o"==(d=(typeof(l=t[u]))[0]))return!f||("u"==p?i>a&&!o:""==p!=o);if("u"==d){if(!f||"u"!=p)return!1}else if(f)if(p==d)if(i<=a){if(l!=r[i])return!1}else{if(o?l>r[i]:l<r[i])return!1;l!=r[i]&&(f=!1)}else if("s"!=p&&"n"!=p){if(o||i<=a)return!1;f=!1,i--}else{if(i<=a||d<p!=o)return!1;f=!1}else"s"!=p&&"n"!=p&&(f=!1,i--)}}var s=[],c=s.pop.bind(s);for(u=1;u<r.length;u++){var h=r[u];s.push(1==h?c()|c():2==h?c()&c():h?n(h,t):!c())}return!!c()},a=(e,a,u,i)=>{var f=((e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)})(e,u);return n(i,f)||"undefined"!=typeof console&&console.warn&&console.warn(((e,r,n,a)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(a)+")")(e,u,f,i)),o(e[u][f])},o=e=>(e.loaded=1,e.get()),i=e=>function(r,t,n,a){var o=u.I(r);return o&&o.then?o.then(e.bind(e,r,u.S[r],t,n,a)):e(r,u.S[r],t,n,a)},f=i(((e,r,t,n,o)=>r&&u.o(r,t)?a(r,0,t,n):o())),l=i(((e,t,a,i,f)=>{var l=t&&u.o(t,a)&&((e,t,a)=>{var o=e[t];return(t=Object.keys(o).reduce(((e,t)=>!n(a,t)||e&&!r(e,t)?e:t),0))&&o[t]})(t,a,i);return l?o(l):f()})),d={},p={599:()=>f("default","react",[1,18,2,0],(()=>u.e(983).then((()=>()=>u(983))))),434:()=>l("default","ui",[0],(()=>u.e(930).then((()=>()=>u(930))))),912:()=>f("default","react-dom",[1,18,2,0],(()=>u.e(730).then((()=>()=>u(730))))),809:()=>f("default","react",[1,18,2,0],(()=>u.e(500).then((()=>()=>u(901)))))},s={599:[599],728:[434,912],930:[809]};u.f.consumes=(e,r)=>{u.o(s,e)&&s[e].forEach((e=>{if(u.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,u.m[e]=t=>{delete u.c[e],t.exports=r()}},n=r=>{delete d[e],u.m[e]=t=>{throw delete u.c[e],r}};try{var a=p[e]();a.then?r.push(d[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))}})(),(()=>{var e={179:0};u.f.j=(r,t)=>{var n=u.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(599!=r){var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=u.p+u.u(r),i=new Error;u.l(o,(t=>{if(u.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,a,[o,i,f]=t,l=0;if(o.some((r=>0!==e[r]))){for(n in i)u.o(i,n)&&(u.m[n]=i[n]);f&&f(u)}for(r&&r(t);l<o.length;l++)a=o[l],u.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkremote_app=self.webpackChunkremote_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),u(369)})();