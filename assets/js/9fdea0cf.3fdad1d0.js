"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[58537],{75631:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8137:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var o=n(64715),r=n(45721),l=n(75631);const a={id:"delete-coupon-input",title:"DeleteCouponInput",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/inputs/delete-coupon-input",id:"graphql/inputs/delete-coupon-input",title:"DeleteCouponInput",description:"Autogenerated input type of DeleteCoupon",source:"@site/docs/graphql/inputs/delete-coupon-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/delete-coupon-input",permalink:"/docs/graphql/inputs/delete-coupon-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/delete-coupon-input.mdx",tags:[],version:"current",frontMatter:{id:"delete-coupon-input",title:"DeleteCouponInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"DeleteCouponApplicationInput",permalink:"/docs/graphql/inputs/delete-coupon-application-input"},next:{title:"DeleteDepartmentInput",permalink:"/docs/graphql/inputs/delete-department-input"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteCouponInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletecouponinputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteCouponInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletecouponinputbidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:d,SpecifiedBy:s,Badge:m},g="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(g,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Autogenerated input type of DeleteCoupon"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input DeleteCouponInput {\n  clientMutationId: String\n  id: ID\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deletecouponinputbclientmutationidbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DeleteCouponInput.",(0,l.kt)("b",null,"clientMutationId"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deletecouponinputbidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DeleteCouponInput.",(0,l.kt)("b",null,"id"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/delete-coupon"},(0,l.kt)("inlineCode",{parentName:"a"},"deleteCoupon")),"  ",(0,l.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);