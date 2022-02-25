"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[9793],{75631:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(3289);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(r),f=i,y=s["".concat(u,".").concat(f)]||s[f]||l[f]||o;return r?n.createElement(y,a(a({ref:t},d),{},{components:r})):n.createElement(y,a({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},65275:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return d},toc:function(){return l},default:function(){return f}});var n=r(14002),i=r(89922),o=(r(3289),r(75631)),a=["components"],p={id:"create-order-entry-input",title:"CreateOrderEntryInput"},u=void 0,c={unversionedId:"graphql/inputs/create-order-entry-input",id:"graphql/inputs/create-order-entry-input",title:"CreateOrderEntryInput",description:"Autogenerated input type of CreateOrderEntry",source:"@site/docs/graphql/inputs/create-order-entry-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-order-entry-input",permalink:"/docs/graphql/inputs/create-order-entry-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-order-entry-input.mdx",tags:[],version:"current",frontMatter:{id:"create-order-entry-input",title:"CreateOrderEntryInput"},sidebar:"sidebar",previous:{title:"CreateMySignupInput",permalink:"/docs/graphql/inputs/create-my-signup-input"},next:{title:"CreateOrderInput",permalink:"/docs/graphql/inputs/create-order-input"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>orderId</code> (<code>ID</code>)",id:"orderid-id",level:4},{value:"<code>order_entry</code> (<code>OrderEntryInput</code>)",id:"order_entry-orderentryinput",level:4}],s={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated input type of CreateOrderEntry"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateOrderEntryInput {\n  clientMutationId: String\n  orderId: ID\n  order_entry: OrderEntryInput!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"clientmutationid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,o.kt)("h4",{id:"orderid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"orderId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"order_entry-orderentryinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"order_entry")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/order-entry-input"},(0,o.kt)("inlineCode",{parentName:"a"},"OrderEntryInput")),")"))}f.isMDXComponent=!0}}]);