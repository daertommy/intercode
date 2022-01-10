"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[20508],{75631:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(3289);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),f=i,y=s["".concat(d,".").concat(f)]||s[f]||c[f]||a;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},36067:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var n=r(97390),i=r(14184),a=(r(3289),r(75631)),o=["components"],p={id:"update-order-entry-input",title:"UpdateOrderEntryInput"},d=void 0,u={unversionedId:"graphql/inputs/update-order-entry-input",id:"graphql/inputs/update-order-entry-input",title:"UpdateOrderEntryInput",description:"Autogenerated input type of UpdateOrderEntry",source:"@site/docs/graphql/inputs/update-order-entry-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-order-entry-input",permalink:"/docs/graphql/inputs/update-order-entry-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-order-entry-input.mdx",tags:[],version:"current",frontMatter:{id:"update-order-entry-input",title:"UpdateOrderEntryInput"},sidebar:"sidebar",previous:{title:"UpdateNotificationTemplateInput",permalink:"/docs/graphql/inputs/update-notification-template-input"},next:{title:"UpdateOrderInput",permalink:"/docs/graphql/inputs/update-order-input"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>order_entry</code> (OrderEntryInput)",id:"order_entry-orderentryinput",children:[],level:4}],level:3}],c={toc:l};function s(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of UpdateOrderEntry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateOrderEntryInput {\n  clientMutationId: String\n  id: ID\n  order_entry: OrderEntryInput!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"order_entry-orderentryinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"order_entry")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/order-entry-input"},(0,a.kt)("inlineCode",{parentName:"a"},"OrderEntryInput")),")"))}s.isMDXComponent=!0}}]);