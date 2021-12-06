"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[88145],{75631:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(3289);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=i,m=u["".concat(d,".").concat(h)]||u[h]||s[h]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71947:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(50753),i=r(61242),a=(r(3289),r(75631)),o=["components"],c={id:"product",title:"Product"},d=void 0,l={unversionedId:"graphql/objects/product",id:"graphql/objects/product",isDocsHomePage:!1,title:"Product",description:"No description",source:"@site/docs/graphql/objects/product.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/product",permalink:"/docs/graphql/objects/product",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/product.mdx",tags:[],version:"current",frontMatter:{id:"product",title:"Product"},sidebar:"sidebar",previous:{title:"ProductVariant",permalink:"/docs/graphql/objects/product-variant"},next:{title:"ProvideEventTicketPayload",permalink:"/docs/graphql/objects/provide-event-ticket-payload"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>available</code> (Boolean)",id:"available-boolean",children:[],level:4},{value:"<code>description</code> (String)",id:"description-string",children:[],level:4},{value:"<code>description_html</code> (String)",id:"description_html-string",children:[],level:4},{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>image_url</code> (String)",id:"image_url-string",children:[],level:4},{value:"<code>name</code> (String)",id:"name-string",children:[],level:4},{value:"<code>order_quantities_by_status</code> (OrderQuantityByStatus)",id:"order_quantities_by_status-orderquantitybystatus",children:[],level:4},{value:"<code>payment_options</code> (String)",id:"payment_options-string",children:[],level:4},{value:"<code>pricing_structure</code> (PricingStructure)",id:"pricing_structure-pricingstructure",children:[],level:4},{value:"<code>product_variants</code> (ProductVariant)",id:"product_variants-productvariant",children:[],level:4},{value:"<code>provides_ticket_type</code> (TicketType)",id:"provides_ticket_type-tickettype",children:[],level:4}],level:3}],s={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Product {\n  available: Boolean!\n  description: String\n  description_html: String\n  id: ID!\n  image_url: String\n  name: String!\n  order_quantities_by_status: [OrderQuantityByStatus!]!\n  payment_options: [String!]!\n  pricing_structure: PricingStructure!\n  product_variants: [ProductVariant!]!\n  provides_ticket_type: TicketType\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"available-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"available")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"description-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"description_html-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"description_html")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"image_url-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"image_url")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"order_quantities_by_status-orderquantitybystatus"},(0,a.kt)("inlineCode",{parentName:"h4"},"order_quantities_by_status")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order-quantity-by-status"},(0,a.kt)("inlineCode",{parentName:"a"},"OrderQuantityByStatus")),")"),(0,a.kt)("h4",{id:"payment_options-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"payment_options")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"pricing_structure-pricingstructure"},(0,a.kt)("inlineCode",{parentName:"h4"},"pricing_structure")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/pricing-structure"},(0,a.kt)("inlineCode",{parentName:"a"},"PricingStructure")),")"),(0,a.kt)("h4",{id:"product_variants-productvariant"},(0,a.kt)("inlineCode",{parentName:"h4"},"product_variants")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/product-variant"},(0,a.kt)("inlineCode",{parentName:"a"},"ProductVariant")),")"),(0,a.kt)("h4",{id:"provides_ticket_type-tickettype"},(0,a.kt)("inlineCode",{parentName:"h4"},"provides_ticket_type")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/ticket-type"},(0,a.kt)("inlineCode",{parentName:"a"},"TicketType")),")"))}u.isMDXComponent=!0}}]);