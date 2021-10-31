"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[36430],{75631:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(3289);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:e},s),{},{components:n})):r.createElement(f,a({ref:e},s))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96053:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(88078),i=n(65844),o=(n(3289),n(75631)),a=["components"],c={id:"notification-template-input",title:"NotificationTemplateInput"},l=void 0,p={unversionedId:"graphql/inputs/notification-template-input",id:"graphql/inputs/notification-template-input",isDocsHomePage:!1,title:"NotificationTemplateInput",description:"No description",source:"@site/docs/graphql/inputs/notification-template-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/notification-template-input",permalink:"/docs/graphql/inputs/notification-template-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/notification-template-input.mdx",tags:[],version:"current",frontMatter:{id:"notification-template-input",title:"NotificationTemplateInput"},sidebar:"sidebar",previous:{title:"NotificationDestinationInput",permalink:"/docs/graphql/inputs/notification-destination-input"},next:{title:"OrderEntryInput",permalink:"/docs/graphql/inputs/order-entry-input"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>body_html</code> (String)",id:"body_html-string",children:[],level:4},{value:"<code>body_sms</code> (String)",id:"body_sms-string",children:[],level:4},{value:"<code>body_text</code> (String)",id:"body_text-string",children:[],level:4},{value:"<code>subject</code> (String)",id:"subject-string",children:[],level:4}],level:3}],u={toc:s};function d(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type NotificationTemplateInput {\n  body_html: String\n  body_sms: String\n  body_text: String\n  subject: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"body_html-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"body_html")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"body_sms-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"body_sms")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"body_text-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"body_text")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"subject-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"subject")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"))}d.isMDXComponent=!0}}]);