"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4203],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"nginx\u9759\u6001\u9879\u76ee\u670d\u52a1\u5668\u90e8\u7f72",date:new Date("2022-11-01T15:16:22.000Z"),tags:["nginx"],published:!0,hideInList:!1,feature:null,isTop:!1},i=void 0,l={permalink:"/blog/nginx-jing-tai-xiang-mu-fu-wu-qi-bu-shu",source:"@site/blog/nginx-jing-tai-xiang-mu-fu-wu-qi-bu-shu.md",title:"nginx\u9759\u6001\u9879\u76ee\u670d\u52a1\u5668\u90e8\u7f72",description:"",date:"2022-11-01T15:16:22.000Z",formattedDate:"2022\u5e7411\u67081\u65e5",tags:[{label:"nginx",permalink:"/blog/tags/nginx"}],readingTime:.17,hasTruncateMarker:!1,authors:[],frontMatter:{title:"nginx\u9759\u6001\u9879\u76ee\u670d\u52a1\u5668\u90e8\u7f72",date:"2022-11-01T15:16:22.000Z",tags:["nginx"],published:!0,hideInList:!1,feature:null,isTop:!1},prevItem:{title:"Taro\u5f00\u53d1\u603b\u7ed3",permalink:"/blog/taro-kai-fa-zong-jie"},nextItem:{title:"\u5de7\u7528Github",permalink:"/blog/2019/05/29/qiao-yong-github"}},c={authorsImageUrls:[]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"location ^~/api/ {\n      add_header 'Access-Control-Allow-Origin' '*';\n      rewrite ^/api/(.*)$ /manage/$1 break;\n      proxy_pass http://dpoints.codingfly.site/;\n      proxy_set_header X-Real-IP $remote_addr;\n      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n    location ^~/static/ {\n      add_header 'Access-Control-Allow-Origin' '*';\n      rewrite ^/static/(.*)$ /static/$1 break;\n      proxy_pass http://dpoints.codingfly.site/;\n    }\n")))}u.isMDXComponent=!0}}]);