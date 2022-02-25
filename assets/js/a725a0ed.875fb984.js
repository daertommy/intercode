"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[88145],{75631:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(3289);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,g=u["".concat(d,".").concat(m)]||u[m]||s[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71326:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(14002),a=r(89922),i=(r(3289),r(75631)),o=["components"],c={id:"product",title:"Product"},d=void 0,l={unversionedId:"graphql/objects/product",id:"graphql/objects/product",title:"Product",description:"No description",source:"@site/docs/graphql/objects/product.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/product",permalink:"/docs/graphql/objects/product",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/product.mdx",tags:[],version:"current",frontMatter:{id:"product",title:"Product"},sidebar:"sidebar",previous:{title:"ProductVariant",permalink:"/docs/graphql/objects/product-variant"},next:{title:"ProvideEventTicketPayload",permalink:"/docs/graphql/objects/provide-event-ticket-payload"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>available</code> (<code>Boolean</code>)",id:"available-boolean",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>description_html</code> (<code>String</code>)",id:"description_html-string",level:4},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>image</code> (<code>ActiveStorageAttachment</code>)",id:"image-activestorageattachment",level:4},{value:"<code>image_url</code> (<code>String</code>)",id:"image_url-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>order_quantities_by_status</code> (<code>OrderQuantityByStatus</code>)",id:"order_quantities_by_status-orderquantitybystatus",level:4},{value:"<code>payment_options</code> (<code>String</code>)",id:"payment_options-string",level:4},{value:"<code>pricing_structure</code> (<code>PricingStructure</code>)",id:"pricing_structure-pricingstructure",level:4},{value:"<code>product_variants</code> (<code>ProductVariant</code>)",id:"product_variants-productvariant",level:4},{value:"<code>provides_ticket_type</code> (<code>TicketType</code>)",id:"provides_ticket_type-tickettype",level:4}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Product {\n  available: Boolean!\n  description: String\n  description_html: String\n  id: ID!\n  image: ActiveStorageAttachment\n  image_url: String\n  name: String!\n  order_quantities_by_status: [OrderQuantityByStatus!]!\n  payment_options: [String!]!\n  pricing_structure: PricingStructure!\n  product_variants: [ProductVariant!]!\n  provides_ticket_type: TicketType\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"available-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"available")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"description_html-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description_html")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"image-activestorageattachment"},(0,i.kt)("inlineCode",{parentName:"h4"},"image")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/active-storage-attachment"},(0,i.kt)("inlineCode",{parentName:"a"},"ActiveStorageAttachment")),")"),(0,i.kt)("h4",{id:"image_url-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"image_url")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"order_quantities_by_status-orderquantitybystatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"order_quantities_by_status")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order-quantity-by-status"},(0,i.kt)("inlineCode",{parentName:"a"},"OrderQuantityByStatus")),")"),(0,i.kt)("h4",{id:"payment_options-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"payment_options")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"pricing_structure-pricingstructure"},(0,i.kt)("inlineCode",{parentName:"h4"},"pricing_structure")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/pricing-structure"},(0,i.kt)("inlineCode",{parentName:"a"},"PricingStructure")),")"),(0,i.kt)("h4",{id:"product_variants-productvariant"},(0,i.kt)("inlineCode",{parentName:"h4"},"product_variants")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/product-variant"},(0,i.kt)("inlineCode",{parentName:"a"},"ProductVariant")),")"),(0,i.kt)("h4",{id:"provides_ticket_type-tickettype"},(0,i.kt)("inlineCode",{parentName:"h4"},"provides_ticket_type")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/ticket-type"},(0,i.kt)("inlineCode",{parentName:"a"},"TicketType")),")"))}m.isMDXComponent=!0}}]);