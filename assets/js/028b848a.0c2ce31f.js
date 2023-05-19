"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[70058],{75631:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(45721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),y=s(r),u=o,m=y["".concat(c,".").concat(u)]||y[u]||p[u]||a;return r?n.createElement(m,d(d({ref:t},i),{},{components:r})):n.createElement(m,d({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,d=new Array(a);d[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[y]="string"==typeof e?e:o,d[1]=l;for(var s=2;s<a;s++)d[s]=r[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8290:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>y,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>d,metadata:()=>c,toc:()=>i});var n=r(64715),o=r(45721),a=r(75631);const d={id:"order-entry",title:"OrderEntry",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/objects/order-entry",id:"graphql/objects/order-entry",title:"OrderEntry",description:"No description",source:"@site/docs/graphql/objects/order-entry.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/order-entry",permalink:"/docs/graphql/objects/order-entry",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/order-entry.mdx",tags:[],version:"current",frontMatter:{id:"order-entry",title:"OrderEntry",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"NotificationTemplate",permalink:"/docs/graphql/objects/notification-template"},next:{title:"OrderQuantityByStatus",permalink:"/docs/graphql/objects/order-quantity-by-status"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OrderEntry.<b>describe_products</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderentrybdescribe_productsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderEntry.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderentrybidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderEntry.<b>order</b></code><Bullet /><code>Order!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderentryborderbcodeorder--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderEntry.<b>price</b></code><Bullet /><code>Money!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderentrybpricebcodemoney--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderEntry.<b>price_per_item</b></code><Bullet /><code>Money!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderentrybprice_per_itembcodemoney--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderEntry.<b>product</b></code><Bullet /><code>Product!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderentrybproductbcodeproduct--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderEntry.<b>product_variant</b></code><Bullet /><code>ProductVariant</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderentrybproduct_variantbcodeproductvariant-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderEntry.<b>quantity</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderentrybquantitybcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],y=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:i,Bullet:y,SpecifiedBy:p,Badge:u},b="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type OrderEntry {\n  describe_products: String!\n  id: ID!\n  order: Order!\n  price: Money!\n  price_per_item: Money!\n  product: Product!\n  product_variant: ProductVariant\n  quantity: Int!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-orderentrybdescribe_productsbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OrderEntry.",(0,a.kt)("b",null,"describe_products"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-orderentrybidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OrderEntry.",(0,a.kt)("b",null,"id"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-orderentryborderbcodeorder--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OrderEntry.",(0,a.kt)("b",null,"order"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order"},(0,a.kt)("inlineCode",{parentName:"a"},"Order!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-orderentrybpricebcodemoney--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OrderEntry.",(0,a.kt)("b",null,"price"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,a.kt)("inlineCode",{parentName:"a"},"Money!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-orderentrybprice_per_itembcodemoney--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OrderEntry.",(0,a.kt)("b",null,"price_per_item"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,a.kt)("inlineCode",{parentName:"a"},"Money!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-orderentrybproductbcodeproduct--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OrderEntry.",(0,a.kt)("b",null,"product"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/product"},(0,a.kt)("inlineCode",{parentName:"a"},"Product!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-orderentrybproduct_variantbcodeproductvariant-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OrderEntry.",(0,a.kt)("b",null,"product_variant"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/product-variant"},(0,a.kt)("inlineCode",{parentName:"a"},"ProductVariant"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-orderentrybquantitybcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OrderEntry.",(0,a.kt)("b",null,"quantity"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects/add-order-entry-to-current-pending-order-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"AddOrderEntryToCurrentPendingOrderPayload")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects/create-order-entry-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"CreateOrderEntryPayload")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects/delete-order-entry-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteOrderEntryPayload")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects/order"},(0,a.kt)("inlineCode",{parentName:"a"},"Order")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects/ticket"},(0,a.kt)("inlineCode",{parentName:"a"},"Ticket")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects/update-order-entry-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateOrderEntryPayload")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);