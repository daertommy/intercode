"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[47792],{75631:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(3289);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=p(t),f=i,m=s["".concat(u,".").concat(f)]||s[f]||c[f]||a;return t?n.createElement(m,o(o({ref:r},l),{},{components:t})):n.createElement(m,o({ref:r},l))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=s;var d={};for(var u in r)hasOwnProperty.call(r,u)&&(d[u]=r[u]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1010:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var n=t(14002),i=t(89922),a=(t(3289),t(75631)),o=["components"],d={id:"create-order-input",title:"CreateOrderInput"},u=void 0,p={unversionedId:"graphql/inputs/create-order-input",id:"graphql/inputs/create-order-input",title:"CreateOrderInput",description:"Autogenerated input type of CreateOrder",source:"@site/docs/graphql/inputs/create-order-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-order-input",permalink:"/docs/graphql/inputs/create-order-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-order-input.mdx",tags:[],version:"current",frontMatter:{id:"create-order-input",title:"CreateOrderInput"},sidebar:"sidebar",previous:{title:"CreateOrderEntryInput",permalink:"/docs/graphql/inputs/create-order-entry-input"},next:{title:"CreateOrganizationRoleInput",permalink:"/docs/graphql/inputs/create-organization-role-input"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>order</code> (OrderInput)",id:"order-orderinput",children:[],level:4},{value:"<code>order_entries</code> (OrderEntryInput)",id:"order_entries-orderentryinput",children:[],level:4},{value:"<code>status</code> (OrderStatus)",id:"status-orderstatus",children:[],level:4},{value:"<code>userConProfileId</code> (ID)",id:"userconprofileid-id",children:[],level:4}],level:3}],c={toc:l};function s(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of CreateOrder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateOrderInput {\n  clientMutationId: String\n  order: OrderInput!\n  order_entries: [OrderEntryInput!]\n  status: OrderStatus!\n  userConProfileId: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"order-orderinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"order")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/order-input"},(0,a.kt)("inlineCode",{parentName:"a"},"OrderInput")),")"),(0,a.kt)("h4",{id:"order_entries-orderentryinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"order_entries")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/order-entry-input"},(0,a.kt)("inlineCode",{parentName:"a"},"OrderEntryInput")),")"),(0,a.kt)("h4",{id:"status-orderstatus"},(0,a.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/order-status"},(0,a.kt)("inlineCode",{parentName:"a"},"OrderStatus")),")"),(0,a.kt)("h4",{id:"userconprofileid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"userConProfileId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}s.isMDXComponent=!0}}]);