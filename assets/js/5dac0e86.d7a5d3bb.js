"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[86401],{75631:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(3289);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),i=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=i(t.components);return r.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,d=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=i(n),m=a,g=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(g,l(l({ref:e},p),{},{components:n})):r.createElement(g,l({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=s;var c={};for(var d in e)hasOwnProperty.call(e,d)&&(c[d]=e[d]);c.originalType=t,c.mdxType="string"==typeof t?t:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},67084:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=n(34489),a=n(3289),o=n(75631);const l={id:"product-input",title:"ProductInput",hide_table_of_contents:!1},c=void 0,d={unversionedId:"graphql/inputs/product-input",id:"graphql/inputs/product-input",title:"ProductInput",description:"No description",source:"@site/docs/graphql/inputs/product-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/product-input",permalink:"/docs/graphql/inputs/product-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/product-input.mdx",tags:[],version:"current",frontMatter:{id:"product-input",title:"ProductInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"PricingStructureInput",permalink:"/docs/graphql/inputs/pricing-structure-input"},next:{title:"ProductVariantInput",permalink:"/docs/graphql/inputs/product-variant-input"}},i={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProductInput.<b>available</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productinputbavailablebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductInput.<b>deleteVariantIds</b></code><Bullet /><code>[ID!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productinputbdeletevariantidsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productinputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductInput.<b>image</b></code><Bullet /><code>Upload</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productinputbimagebcodeupload-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductInput.<b>payment_options</b></code><Bullet /><code>[String!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productinputbpayment_optionsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductInput.<b>pricing_structure</b></code><Bullet /><code>PricingStructureInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-productinputbpricing_structurebcodepricingstructureinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductInput.<b>product_variants</b></code><Bullet /><code>[ProductVariantInput!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-productinputbproduct_variantsbcodeproductvariantinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductInput.<b>providesTicketTypeId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productinputbprovidestickettypeidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=t=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+t.class},t.text)),g={toc:p,Bullet:u,SpecifiedBy:s,Badge:m};function y(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input ProductInput {\n  available: Boolean\n  deleteVariantIds: [ID!]\n  description: String\n  image: Upload\n  name: String\n  payment_options: [String!]\n  pricing_structure: PricingStructureInput\n  product_variants: [ProductVariantInput!]\n  providesTicketTypeId: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productinputbavailablebcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductInput.",(0,o.kt)("b",null,"available"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productinputbdeletevariantidsbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductInput.",(0,o.kt)("b",null,"deleteVariantIds"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productinputbdescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductInput.",(0,o.kt)("b",null,"description"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productinputbimagebcodeupload-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductInput.",(0,o.kt)("b",null,"image"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/upload"},(0,o.kt)("inlineCode",{parentName:"a"},"Upload"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productinputbnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductInput.",(0,o.kt)("b",null,"name"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productinputbpayment_optionsbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductInput.",(0,o.kt)("b",null,"payment_options"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productinputbpricing_structurebcodepricingstructureinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductInput.",(0,o.kt)("b",null,"pricing_structure"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/pricing-structure-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PricingStructureInput"))," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productinputbproduct_variantsbcodeproductvariantinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductInput.",(0,o.kt)("b",null,"product_variants"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/product-variant-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[ProductVariantInput!]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productinputbprovidestickettypeidbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductInput.",(0,o.kt)("b",null,"providesTicketTypeId"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/create-product-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateProductInput")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/update-product-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateProductInput")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);