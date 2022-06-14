"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[5387],{75631:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(3289);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),m=a,h=l["".concat(d,".").concat(m)]||l[m]||s[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=l;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},28275:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var n=r(75731),a=r(42706),i=(r(3289),r(75631)),o=["components"],c={id:"product-variant",title:"ProductVariant",hide_table_of_contents:!1},d=void 0,p={unversionedId:"graphql/objects/product-variant",id:"graphql/objects/product-variant",title:"ProductVariant",description:"No description",source:"@site/docs/graphql/objects/product-variant.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/product-variant",permalink:"/docs/graphql/objects/product-variant",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/product-variant.mdx",tags:[],version:"current",frontMatter:{id:"product-variant",title:"ProductVariant",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"PricingStructure",permalink:"/docs/graphql/objects/pricing-structure"},next:{title:"Product",permalink:"/docs/graphql/objects/product"}},u={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>description_html</code> (<code>String</code>)",id:"description_html-string",level:4},{value:"<code>id</code> (<code>ID!</code>)",id:"id-id",level:4},{value:"<code>image</code> (<code>ActiveStorageAttachment</code>)",id:"image-activestorageattachment",level:4},{value:"<code>image_url</code> (<code>String</code>)",id:"image_url-string",level:4},{value:"<code>name</code> (<code>String!</code>)",id:"name-string",level:4},{value:"<code>order_quantities_by_status</code> (<code>[OrderQuantityByStatus!]!</code>)",id:"order_quantities_by_status-orderquantitybystatus",level:4},{value:"<code>override_pricing_structure</code> (<code>PricingStructure</code>)",id:"override_pricing_structure-pricingstructure",level:4},{value:"<code>position</code> (<code>Int</code>)",id:"position-int",level:4},{value:"<code>product</code> (<code>Product!</code>)",id:"product-product",level:4}],l={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProductVariant {\n  description: String\n  description_html: String\n  id: ID!\n  image: ActiveStorageAttachment\n  image_url: String\n  name: String!\n  order_quantities_by_status: [OrderQuantityByStatus!]!\n  override_pricing_structure: PricingStructure\n  position: Int\n  product: Product!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"description_html-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"description_html"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"image-activestorageattachment"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"image"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/active-storage-attachment"},(0,i.kt)("inlineCode",{parentName:"a"},"ActiveStorageAttachment")),")"),(0,i.kt)("h4",{id:"image_url-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"image_url"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"order_quantities_by_status-orderquantitybystatus"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"order_quantities_by_status"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order-quantity-by-status"},(0,i.kt)("inlineCode",{parentName:"a"},"[OrderQuantityByStatus!]!")),")"),(0,i.kt)("h4",{id:"override_pricing_structure-pricingstructure"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"override_pricing_structure"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/pricing-structure"},(0,i.kt)("inlineCode",{parentName:"a"},"PricingStructure")),")"),(0,i.kt)("h4",{id:"position-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"position"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"product-product"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"product"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/product"},(0,i.kt)("inlineCode",{parentName:"a"},"Product!")),")"))}m.isMDXComponent=!0}}]);