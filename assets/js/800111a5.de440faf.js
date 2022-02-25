"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[37576],{75631:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90355:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(14002),i=n(89922),o=(n(3289),n(75631)),a=["components"],c={id:"notification-template",title:"NotificationTemplate"},l=void 0,d={unversionedId:"graphql/objects/notification-template",id:"graphql/objects/notification-template",title:"NotificationTemplate",description:"No description",source:"@site/docs/graphql/objects/notification-template.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/notification-template",permalink:"/docs/graphql/objects/notification-template",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/notification-template.mdx",tags:[],version:"current",frontMatter:{id:"notification-template",title:"NotificationTemplate"},sidebar:"sidebar",previous:{title:"NotificationDestination",permalink:"/docs/graphql/objects/notification-destination"},next:{title:"OrderEntry",permalink:"/docs/graphql/objects/order-entry"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>body_html</code> (<code>String</code>)",id:"body_html-string",level:4},{value:"<code>body_sms</code> (<code>String</code>)",id:"body_sms-string",level:4},{value:"<code>body_text</code> (<code>String</code>)",id:"body_text-string",level:4},{value:"<code>event_key</code> (<code>String</code>)",id:"event_key-string",level:4},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>subject</code> (<code>String</code>)",id:"subject-string",level:4}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type NotificationTemplate {\n  body_html: String\n  body_sms: String\n  body_text: String\n  event_key: String!\n  id: ID!\n  subject: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"body_html-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"body_html")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"body_sms-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"body_sms")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"body_text-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"body_text")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"event_key-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"event_key")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"id-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"subject-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"subject")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"))}m.isMDXComponent=!0}}]);