"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[23467],{75631:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?o.createElement(f,p(p({ref:t},u),{},{components:n})):o.createElement(f,p({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91620:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var o=n(34489),r=n(45721),a=n(75631);const p={id:"create-coupon-input",title:"CreateCouponInput",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/inputs/create-coupon-input",id:"graphql/inputs/create-coupon-input",title:"CreateCouponInput",description:"Autogenerated input type of CreateCoupon",source:"@site/docs/graphql/inputs/create-coupon-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-coupon-input",permalink:"/docs/graphql/inputs/create-coupon-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-coupon-input.mdx",tags:[],version:"current",frontMatter:{id:"create-coupon-input",title:"CreateCouponInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"CreateCouponApplicationInput",permalink:"/docs/graphql/inputs/create-coupon-application-input"},next:{title:"CreateDepartmentInput",permalink:"/docs/graphql/inputs/create-department-input"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateCouponInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcouponinputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateCouponInput.<b>coupon</b></code><Bullet /><code>CouponInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcouponinputbcouponbcodecouponinput--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:s,SpecifiedBy:d,Badge:m};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of CreateCoupon"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateCouponInput {\n  clientMutationId: String\n  coupon: CouponInput!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-createcouponinputbclientmutationidbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CreateCouponInput.",(0,a.kt)("b",null,"clientMutationId"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-createcouponinputbcouponbcodecouponinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CreateCouponInput.",(0,a.kt)("b",null,"coupon"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/coupon-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CouponInput!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/create-coupon"},(0,a.kt)("inlineCode",{parentName:"a"},"createCoupon")),"  ",(0,a.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);