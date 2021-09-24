"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[64334],{75631:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(3289);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(r),m=i,d=f["".concat(u,".").concat(m)]||f[m]||l[m]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5490:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(1629),i=r(17322),o=(r(3289),r(75631)),s=["components"],a={id:"my-signups",title:"my_signups"},u=void 0,c={unversionedId:"graphql/queries/my-signups",id:"graphql/queries/my-signups",isDocsHomePage:!1,title:"my_signups",description:"Returns all signups for the current user within the convention associated with the domain name",source:"@site/docs/graphql/queries/my-signups.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/my-signups",permalink:"/docs/graphql/queries/my-signups",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/my-signups.mdx",tags:[],version:"current",frontMatter:{id:"my-signups",title:"my_signups"},sidebar:"sidebar",previous:{title:"myProfile",permalink:"/docs/graphql/queries/my-profile"},next:{title:"notifierLiquidAssigns",permalink:"/docs/graphql/queries/notifier-liquid-assigns"}},p=[{value:"Type",id:"type",children:[]}],l={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns all signups for the current user within the convention associated with the domain name\nof this HTTP request. If no user is signed in, returns an empty array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"my_signups: [Signup!]!\n\n")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"signup"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup"},(0,o.kt)("inlineCode",{parentName:"a"},"Signup"))))}f.isMDXComponent=!0}}]);