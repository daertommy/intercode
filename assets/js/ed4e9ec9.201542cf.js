"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[43311],{75631:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,v=u["".concat(d,".").concat(m)]||u[m]||s[m]||i;return n?o.createElement(v,a(a({ref:t},p),{},{components:n})):o.createElement(v,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75784:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return m}});var o=n(14002),r=n(89922),i=(n(3289),n(75631)),a=["components"],c={id:"ticket-type",title:"TicketType"},d=void 0,l={unversionedId:"graphql/objects/ticket-type",id:"graphql/objects/ticket-type",title:"TicketType",description:"No description",source:"@site/docs/graphql/objects/ticket-type.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/ticket-type",permalink:"/docs/graphql/objects/ticket-type",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/ticket-type.mdx",tags:[],version:"current",frontMatter:{id:"ticket-type",title:"TicketType"},sidebar:"sidebar",previous:{title:"TicketCountByTypeAndPaymentAmount",permalink:"/docs/graphql/objects/ticket-count-by-type-and-payment-amount"},next:{title:"Ticket",permalink:"/docs/graphql/objects/ticket"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>allows_event_signups</code> (<code>Boolean</code>)",id:"allows_event_signups-boolean",level:4},{value:"<code>convention</code> (<code>Convention</code>)",id:"convention-convention",level:4},{value:"<code>counts_towards_convention_maximum</code> (<code>Boolean</code>)",id:"counts_towards_convention_maximum-boolean",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>maximum_event_provided_tickets</code> (<code>Int</code>)",id:"maximum_event_provided_tickets-int",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>providing_products</code> (<code>Product</code>)",id:"providing_products-product",level:4}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type TicketType {\n  allows_event_signups: Boolean!\n  convention: Convention!\n  counts_towards_convention_maximum: Boolean!\n  description: String\n  id: ID!\n  maximum_event_provided_tickets(\n  eventId: ID\n): Int!\n  name: String!\n  providing_products: [Product!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"allows_event_signups-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"allows_event_signups")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"convention-convention"},(0,i.kt)("inlineCode",{parentName:"h4"},"convention")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,i.kt)("inlineCode",{parentName:"a"},"Convention")),")"),(0,i.kt)("h4",{id:"counts_towards_convention_maximum-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"counts_towards_convention_maximum")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"maximum_event_provided_tickets-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"maximum_event_provided_tickets")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"eventid-id"},(0,i.kt)("inlineCode",{parentName:"h5"},"eventId")," (",(0,i.kt)("a",{parentName:"h5",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"providing_products-product"},(0,i.kt)("inlineCode",{parentName:"h4"},"providing_products")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/product"},(0,i.kt)("inlineCode",{parentName:"a"},"Product")),")"))}m.isMDXComponent=!0}}]);