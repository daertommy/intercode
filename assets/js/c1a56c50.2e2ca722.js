"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[40894],{75631:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>y});var r=a(3289);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(a),y=o,m=s["".concat(c,".").concat(y)]||s[y]||u[y]||n;return a?r.createElement(m,d(d({ref:t},i),{},{components:a})):r.createElement(m,d({ref:t},i))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,d=new Array(n);d[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,d[1]=l;for(var p=2;p<n;p++)d[p]=a[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1442:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>i});var r=a(34489),o=a(3289),n=a(75631);const d={id:"update-product-payload",title:"UpdateProductPayload",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/objects/update-product-payload",id:"graphql/objects/update-product-payload",title:"UpdateProductPayload",description:"Autogenerated return type of UpdateProduct",source:"@site/docs/graphql/objects/update-product-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/update-product-payload",permalink:"/docs/graphql/objects/update-product-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/update-product-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-product-payload",title:"UpdateProductPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UpdatePagePayload",permalink:"/docs/graphql/objects/update-page-payload"},next:{title:"UpdateRoomPayload",permalink:"/docs/graphql/objects/update-room-payload"}},p={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateProductPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateproductpayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateProductPayload.<b>product</b></code><Bullet /><code>Product!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-updateproductpayloadbproductbcodeproduct--",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:i,Bullet:u,SpecifiedBy:s,Badge:y};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Autogenerated return type of UpdateProduct"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateProductPayload {\n  clientMutationId: String\n  product: Product!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updateproductpayloadbclientmutationidbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UpdateProductPayload.",(0,n.kt)("b",null,"clientMutationId"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updateproductpayloadbproductbcodeproduct--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UpdateProductPayload.",(0,n.kt)("b",null,"product"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/product"},(0,n.kt)("inlineCode",{parentName:"a"},"Product!"))," ",(0,n.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/update-product"},(0,n.kt)("inlineCode",{parentName:"a"},"updateProduct")),"  ",(0,n.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);