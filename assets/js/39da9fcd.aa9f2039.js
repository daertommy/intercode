"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[51916],{75631:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(45721);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=i(o),y=a,m=u["".concat(p,".").concat(y)]||u[y]||s[y]||r;return o?n.createElement(m,l(l({ref:t},d),{},{components:o})):n.createElement(m,l({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<r;i++)l[i]=o[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},8767:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=o(25577),a=o(45721),r=o(75631);const l={id:"create-coupon-payload",title:"CreateCouponPayload",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/objects/create-coupon-payload",id:"graphql/objects/create-coupon-payload",title:"CreateCouponPayload",description:"Autogenerated return type of CreateCoupon.",source:"@site/docs/graphql/objects/create-coupon-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/create-coupon-payload",permalink:"/docs/graphql/objects/create-coupon-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/create-coupon-payload.mdx",tags:[],version:"current",frontMatter:{id:"create-coupon-payload",title:"CreateCouponPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"CreateCouponApplicationPayload",permalink:"/docs/graphql/objects/create-coupon-application-payload"},next:{title:"CreateDepartmentPayload",permalink:"/docs/graphql/objects/create-department-payload"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateCouponPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcouponpayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateCouponPayload.<b>coupon</b></code><Bullet /><code>Coupon!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-createcouponpayloadbcouponbcodecoupon--",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:s,Badge:y},f="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(f,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Autogenerated return type of CreateCoupon."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateCouponPayload {\n  clientMutationId: String\n  coupon: Coupon!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createcouponpayloadbclientmutationidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateCouponPayload.",(0,r.kt)("b",null,"clientMutationId"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createcouponpayloadbcouponbcodecoupon--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateCouponPayload.",(0,r.kt)("b",null,"coupon"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/coupon"},(0,r.kt)("inlineCode",{parentName:"a"},"Coupon!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/create-coupon"},(0,r.kt)("inlineCode",{parentName:"a"},"createCoupon")),"  ",(0,r.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);