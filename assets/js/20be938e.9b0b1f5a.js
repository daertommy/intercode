"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[90937],{75631:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(50744),r=(n(3289),n(75631));const o={title:"Email forwarding",tags:["changelog"],authors:["nbudin"]},i=void 0,s={permalink:"/blog/2020/03/15/email-forwarding",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/blog/blog/2020-03-15-email-forwarding.md",source:"@site/blog/2020-03-15-email-forwarding.md",title:"Email forwarding",description:"Intercode can now forward emails recieved by a convention domain to appropriate staff members. For example, if your convention is hosted at 2020.example.com, and you have a staff position called Webmaster whose contact email is set as webmaster@2020.example.com, Intercode can now automatically forward emails received at that address to all the people in that staff position.",date:"2020-03-15T00:00:00.000Z",formattedDate:"March 15, 2020",tags:[{label:"changelog",permalink:"/blog/tags/changelog"}],readingTime:.61,hasTruncateMarker:!1,authors:[{name:"Nat Budin",url:"https://github.com/nbudin",imageURL:"https://github.com/nbudin.png",key:"nbudin"}],frontMatter:{title:"Email forwarding",tags:["changelog"],authors:["nbudin"]},prevItem:{title:"GraphQL Cross-Domain Security Issue Disclosure",permalink:"/blog/2022/01/18/graphql-cross-domain-security-issue-disclosure"},nextItem:{title:"SMS Notifications",permalink:"/blog/2020/01/27/sms-notifications"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Intercode can now forward emails recieved by a convention domain to appropriate staff members. For example, if your convention is hosted at 2020.example.com, and you have a staff position called Webmaster whose contact email is set as ",(0,r.kt)("a",{parentName:"p",href:"mailto:webmaster@2020.example.com"},"webmaster@2020.example.com"),", Intercode can now automatically forward emails received at that address to all the people in that staff position."),(0,r.kt)("p",null,"Additionally, staff positions can now have CC addresses (which will also receive email sent to that staff position) and aliases (additional email addresses that can be used to contact that staff position)."),(0,r.kt)("p",null,"In order to take advantage of this feature, conventions will need to set the MX record on their domain name appropriately. If you'd like to do this, please contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:hosting@neilhosting.net"},"hosting@neilhosting.net")," for instructions!"))}m.isMDXComponent=!0}}]);