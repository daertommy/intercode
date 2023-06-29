"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[98602],{75631:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>i});var o=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),y=a,i=m["".concat(d,".").concat(y)]||m[y]||p[y]||r;return n?o.createElement(i,l(l({ref:t},u),{},{components:n})):o.createElement(i,l({ref:t},u))}));function i(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=y;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[m]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},88056:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var o=n(91487),a=n(45721),r=n(75631);const l={id:"sales-count-by-product-and-payment-amount",title:"SalesCountByProductAndPaymentAmount",hide_table_of_contents:!1},c=void 0,d={unversionedId:"graphql/objects/sales-count-by-product-and-payment-amount",id:"graphql/objects/sales-count-by-product-and-payment-amount",title:"SalesCountByProductAndPaymentAmount",description:"No description",source:"@site/docs/graphql/objects/sales-count-by-product-and-payment-amount.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/sales-count-by-product-and-payment-amount",permalink:"/docs/graphql/objects/sales-count-by-product-and-payment-amount",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/sales-count-by-product-and-payment-amount.mdx",tags:[],version:"current",frontMatter:{id:"sales-count-by-product-and-payment-amount",title:"SalesCountByProductAndPaymentAmount",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"Run",permalink:"/docs/graphql/objects/run"},next:{title:"ScheduledMoneyValue",permalink:"/docs/graphql/objects/scheduled-money-value"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SalesCountByProductAndPaymentAmount.<b>count</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-salescountbyproductandpaymentamountbcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SalesCountByProductAndPaymentAmount.<b>payment_amount</b></code><Bullet /><code>Money!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-salescountbyproductandpaymentamountbpayment_amountbcodemoney--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SalesCountByProductAndPaymentAmount.<b>product</b></code><Bullet /><code>Product!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-salescountbyproductandpaymentamountbproductbcodeproduct--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SalesCountByProductAndPaymentAmount.<b>status</b></code><Bullet /><code>OrderStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-salescountbyproductandpaymentamountbstatusbcodeorderstatus--",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),i={toc:u,Bullet:m,SpecifiedBy:p,Badge:y},b="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SalesCountByProductAndPaymentAmount {\n  count: Int!\n  payment_amount: Money!\n  product: Product!\n  status: OrderStatus!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-salescountbyproductandpaymentamountbcountbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SalesCountByProductAndPaymentAmount.",(0,r.kt)("b",null,"count"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-salescountbyproductandpaymentamountbpayment_amountbcodemoney--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SalesCountByProductAndPaymentAmount.",(0,r.kt)("b",null,"payment_amount"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,r.kt)("inlineCode",{parentName:"a"},"Money!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-salescountbyproductandpaymentamountbproductbcodeproduct--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SalesCountByProductAndPaymentAmount.",(0,r.kt)("b",null,"product"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/product"},(0,r.kt)("inlineCode",{parentName:"a"},"Product!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-salescountbyproductandpaymentamountbstatusbcodeorderstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SalesCountByProductAndPaymentAmount.",(0,r.kt)("b",null,"status"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/order-status"},(0,r.kt)("inlineCode",{parentName:"a"},"OrderStatus!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/objects/convention-reports"},(0,r.kt)("inlineCode",{parentName:"a"},"ConventionReports")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);