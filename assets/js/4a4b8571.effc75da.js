"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[66665],{75631:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(3289);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),h=i,f=d["".concat(u,".").concat(h)]||d[h]||s[h]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69660:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(50753),i=r(61242),o=(r(3289),r(75631)),a=["components"],p={id:"my-authorized-applications",title:"myAuthorizedApplications"},u=void 0,c={unversionedId:"graphql/queries/my-authorized-applications",id:"graphql/queries/my-authorized-applications",isDocsHomePage:!1,title:"myAuthorizedApplications",description:"Returns the authorized OAuth applications for the current user. If no user is signed in,",source:"@site/docs/graphql/queries/my-authorized-applications.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/my-authorized-applications",permalink:"/docs/graphql/queries/my-authorized-applications",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/my-authorized-applications.mdx",tags:[],version:"current",frontMatter:{id:"my-authorized-applications",title:"myAuthorizedApplications"},sidebar:"sidebar",previous:{title:"email_routes_paginated",permalink:"/docs/graphql/queries/email-routes-paginated"},next:{title:"oauthPreAuth",permalink:"/docs/graphql/queries/oauth-pre-auth"}},l=[{value:"Type",id:"type",children:[{value:"AuthorizedApplication",id:"authorizedapplication",children:[],level:4}],level:3}],s={toc:l};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns the authorized OAuth applications for the current user. If no user is signed in,\nreturns null."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"myAuthorizedApplications: [AuthorizedApplication!]!\n\n")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"authorizedapplication"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/authorized-application"},(0,o.kt)("inlineCode",{parentName:"a"},"AuthorizedApplication"))))}d.isMDXComponent=!0}}]);