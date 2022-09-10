"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[15946],{75631:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(3289);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=i,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},67694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(50744),i=(r(3289),r(75631));const a={id:"order-entry-input",title:"OrderEntryInput",hide_table_of_contents:!1},o=void 0,p={unversionedId:"graphql/inputs/order-entry-input",id:"graphql/inputs/order-entry-input",title:"OrderEntryInput",description:"No description",source:"@site/docs/graphql/inputs/order-entry-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/order-entry-input",permalink:"/docs/graphql/inputs/order-entry-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/order-entry-input.mdx",tags:[],version:"current",frontMatter:{id:"order-entry-input",title:"OrderEntryInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"NotificationTemplateInput",permalink:"/docs/graphql/inputs/notification-template-input"},next:{title:"OrderFiltersInput",permalink:"/docs/graphql/inputs/order-filters-input"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>price_per_item</code> (<code>MoneyInput</code>)",id:"price_per_item-moneyinput",level:4},{value:"<code>productId</code> (<code>ID</code>)",id:"productid-id",level:4},{value:"<code>productVariantId</code> (<code>ID</code>)",id:"productvariantid-id",level:4},{value:"<code>quantity</code> (<code>Int</code>)",id:"quantity-int",level:4},{value:"<code>ticketId</code> (<code>ID</code>)",id:"ticketid-id",level:4}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input OrderEntryInput {\n  price_per_item: MoneyInput\n  productId: ID\n  productVariantId: ID\n  quantity: Int\n  ticketId: ID\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"price_per_item-moneyinput"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"price_per_item"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/money-input"},(0,i.kt)("inlineCode",{parentName:"a"},"MoneyInput")),")"),(0,i.kt)("h4",{id:"productid-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"productId"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"productvariantid-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"productVariantId"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"quantity-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"quantity"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"ticketid-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"ticketId"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}u.isMDXComponent=!0}}]);