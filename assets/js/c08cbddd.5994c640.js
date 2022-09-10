"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[47792],{75631:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(3289);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,m=s["".concat(p,".").concat(f)]||s[f]||c[f]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},69693:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=r(50744),a=(r(3289),r(75631));const i={id:"create-order-input",title:"CreateOrderInput",hide_table_of_contents:!1},o=void 0,d={unversionedId:"graphql/inputs/create-order-input",id:"graphql/inputs/create-order-input",title:"CreateOrderInput",description:"Autogenerated input type of CreateOrder",source:"@site/docs/graphql/inputs/create-order-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-order-input",permalink:"/docs/graphql/inputs/create-order-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-order-input.mdx",tags:[],version:"current",frontMatter:{id:"create-order-input",title:"CreateOrderInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"CreateOrderEntryInput",permalink:"/docs/graphql/inputs/create-order-entry-input"},next:{title:"CreateOrganizationRoleInput",permalink:"/docs/graphql/inputs/create-organization-role-input"}},p={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>order</code> (<code>OrderInput!</code>)",id:"order-orderinput",level:4},{value:"<code>order_entries</code> (<code>[OrderEntryInput!]</code>)",id:"order_entries-orderentryinput",level:4},{value:"<code>status</code> (<code>OrderStatus!</code>)",id:"status-orderstatus",level:4},{value:"<code>userConProfileId</code> (<code>ID</code>)",id:"userconprofileid-id",level:4}],l={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of CreateOrder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateOrderInput {\n  clientMutationId: String\n  order: OrderInput!\n  order_entries: [OrderEntryInput!]\n  status: OrderStatus!\n  userConProfileId: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"clientMutationId"))," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"order-orderinput"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"order"))," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/order-input"},(0,a.kt)("inlineCode",{parentName:"a"},"OrderInput!")),")"),(0,a.kt)("h4",{id:"order_entries-orderentryinput"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"order_entries"))," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/order-entry-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[OrderEntryInput!]")),")"),(0,a.kt)("h4",{id:"status-orderstatus"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"status"))," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/order-status"},(0,a.kt)("inlineCode",{parentName:"a"},"OrderStatus!")),")"),(0,a.kt)("h4",{id:"userconprofileid-id"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"userConProfileId"))," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}c.isMDXComponent=!0}}]);