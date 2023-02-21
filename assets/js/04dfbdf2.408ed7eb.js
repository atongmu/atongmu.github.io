"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[490],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,v=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return t?r.createElement(v,i(i({ref:n},p),{},{components:t})):r.createElement(v,i({ref:n},p))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={title:"JS\u6bd4\u8f83\u4e24\u4e2a\u7248\u672c\u53f7\u7684\u5927\u5c0f",date:new Date("2022-11-01T17:00:32.000Z"),tags:["js"],published:!0,hideInList:!1,feature:null,isTop:!1},i=void 0,l={permalink:"/blog/2022/11/01/js-version",source:"@site/blog/2022-11-01-js-version.md",title:"JS\u6bd4\u8f83\u4e24\u4e2a\u7248\u672c\u53f7\u7684\u5927\u5c0f",description:"",date:"2022-11-01T17:00:32.000Z",formattedDate:"2022\u5e7411\u67081\u65e5",tags:[{label:"js",permalink:"/blog/tags/js"}],readingTime:.71,hasTruncateMarker:!1,authors:[],frontMatter:{title:"JS\u6bd4\u8f83\u4e24\u4e2a\u7248\u672c\u53f7\u7684\u5927\u5c0f",date:"2022-11-01T17:00:32.000Z",tags:["js"],published:!0,hideInList:!1,feature:null,isTop:!1},prevItem:{title:"Markdown\u8bed\u6cd5",permalink:"/blog/markdown-yu-fa"},nextItem:{title:"nginx\u9759\u6001\u9879\u76ee\u670d\u52a1\u5668\u90e8\u7f72",permalink:"/blog/nginx-jing-tai-xiang-mu-fu-wu-qi-bu-shu"}},s={authorsImageUrls:[]},c=[],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"**\n * \u6bd4\u8f83\u4e24\u4e2a\u7248\u672c\u53f7\u7684\u5927\u5c0f\n * @param {string} v1\n * @param {string} v2\n * @returns {0|1|-1} 0\u8868\u793av1 = v2\uff0c1\u8868\u793av1 > v2\uff0c-1\u8868\u793av1 < v2\n *\n * compareVersion('1.1.0', '1.1.0');      // => 0\n * compareVersion('1.20.0', '1.2.20');    // => 1\n * compareVersion('v2.0.30', 'v1.9.10');  // => 1\n * compareVersion('v1.1.40', 'v1.2.0');   // => -1\n */\nfunction compareVersion(v1, v2) {\n  let cpResult;\n  let i = 0;\n  const arr1 = v1.replace(/[^0-9.]/, '').split('.');\n  const arr2 = v2.replace(/[^0-9.]/, '').split('.');\n  while (true) {\n    const s1 = arr1[i];\n    const s2 = arr2[i++];\n    if (s1 === undefined || s2 === undefined) {\n      cpResult = arr1.length - arr2.length;\n      break;\n    }\n    if (s1 === s2) continue;\n    cpResult = s1 - s2;\n    break;\n  }\n  // eslint-disable-next-line\n  return cpResult > 0 ? 1 : cpResult === 0 ? 0 : -1;\n}\n")))}f.isMDXComponent=!0}}]);