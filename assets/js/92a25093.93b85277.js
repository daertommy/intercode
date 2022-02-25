"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[65176],{75631:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,g=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return n?a.createElement(g,c(c({ref:t},p),{},{components:n})):a.createElement(g,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},92215:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(14002),r=n(89922),o=(n(3289),n(75631)),c=["components"],i={id:"attach-image-to-event-payload",title:"AttachImageToEventPayload"},l=void 0,d={unversionedId:"graphql/objects/attach-image-to-event-payload",id:"graphql/objects/attach-image-to-event-payload",title:"AttachImageToEventPayload",description:"Autogenerated return type of AttachImageToEvent",source:"@site/docs/graphql/objects/attach-image-to-event-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/attach-image-to-event-payload",permalink:"/docs/graphql/objects/attach-image-to-event-payload",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/attach-image-to-event-payload.mdx",tags:[],version:"current",frontMatter:{id:"attach-image-to-event-payload",title:"AttachImageToEventPayload"},sidebar:"sidebar",previous:{title:"AddOrderEntryToCurrentPendingOrderPayload",permalink:"/docs/graphql/objects/add-order-entry-to-current-pending-order-payload"},next:{title:"AttachImageToEventProposalPayload",permalink:"/docs/graphql/objects/attach-image-to-event-proposal-payload"}},p={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>attachment</code> (<code>ActiveStorageAttachment</code>)",id:"attachment-activestorageattachment",level:4},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>event</code> (<code>Event</code>)",id:"event-event",level:4}],s={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated return type of AttachImageToEvent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type AttachImageToEventPayload {\n  attachment: ActiveStorageAttachment!\n  clientMutationId: String\n  event: Event!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"attachment-activestorageattachment"},(0,o.kt)("inlineCode",{parentName:"h4"},"attachment")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/active-storage-attachment"},(0,o.kt)("inlineCode",{parentName:"a"},"ActiveStorageAttachment")),")"),(0,o.kt)("h4",{id:"clientmutationid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,o.kt)("h4",{id:"event-event"},(0,o.kt)("inlineCode",{parentName:"h4"},"event")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event"},(0,o.kt)("inlineCode",{parentName:"a"},"Event")),")"))}m.isMDXComponent=!0}}]);