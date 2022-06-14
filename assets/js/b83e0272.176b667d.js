"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[73281],{75631:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49589:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(75731),a=n(42706),o=(n(3289),n(75631)),i=["components"],c={title:"Email forwarding",tags:["changelog"],authors:["nbudin"]},s=void 0,l={permalink:"/blog/2020/03/15/email-forwarding",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/blog/blog/2020-03-15-email-forwarding.md",source:"@site/blog/2020-03-15-email-forwarding.md",title:"Email forwarding",description:"Intercode can now forward emails recieved by a convention domain to appropriate staff members. For example, if your convention is hosted at 2020.example.com, and you have a staff position called Webmaster whose contact email is set as webmaster@2020.example.com, Intercode can now automatically forward emails received at that address to all the people in that staff position.",date:"2020-03-15T00:00:00.000Z",formattedDate:"March 15, 2020",tags:[{label:"changelog",permalink:"/blog/tags/changelog"}],readingTime:.61,truncated:!1,authors:[{name:"Nat Budin",url:"https://github.com/nbudin",imageURL:"https://github.com/nbudin.png",key:"nbudin"}],frontMatter:{title:"Email forwarding",tags:["changelog"],authors:["nbudin"]},prevItem:{title:"GraphQL Cross-Domain Security Issue Disclosure",permalink:"/blog/2022/01/18/graphql-cross-domain-security-issue-disclosure"},nextItem:{title:"SMS Notifications",permalink:"/blog/2020/01/27/sms-notifications"}},u={authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Intercode can now forward emails recieved by a convention domain to appropriate staff members. For example, if your convention is hosted at 2020.example.com, and you have a staff position called Webmaster whose contact email is set as ",(0,o.kt)("a",{parentName:"p",href:"mailto:webmaster@2020.example.com"},"webmaster@2020.example.com"),", Intercode can now automatically forward emails received at that address to all the people in that staff position."),(0,o.kt)("p",null,"Additionally, staff positions can now have CC addresses (which will also receive email sent to that staff position) and aliases (additional email addresses that can be used to contact that staff position)."),(0,o.kt)("p",null,"In order to take advantage of this feature, conventions will need to set the MX record on their domain name appropriately. If you'd like to do this, please contact us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:hosting@neilhosting.net"},"hosting@neilhosting.net")," for instructions!"))}f.isMDXComponent=!0}}]);