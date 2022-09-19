"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[37735],{75631:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(3289);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,y=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59867:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>g,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(34489),a=r(3289),i=r(75631);const o={id:"pricing-strategy",title:"PricingStrategy",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/enums/pricing-strategy",id:"graphql/enums/pricing-strategy",title:"PricingStrategy",description:"No description",source:"@site/docs/graphql/enums/pricing-strategy.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/pricing-strategy",permalink:"/docs/graphql/enums/pricing-strategy",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/enums/pricing-strategy.mdx",tags:[],version:"current",frontMatter:{id:"pricing-strategy",title:"PricingStrategy",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"PermissionedRoleTypeIndicator",permalink:"/docs/graphql/enums/permissioned-role-type-indicator"},next:{title:"ReceiveSignupEmail",permalink:"/docs/graphql/enums/receive-signup-email"}},p={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PricingStrategy.<b>fixed</b></code>",id:"code-style-fontweight-normal-pricingstrategybfixedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PricingStrategy.<b>pay_what_you_want</b></code>",id:"code-style-fontweight-normal-pricingstrategybpay_what_you_wantbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PricingStrategy.<b>scheduled_value</b></code>",id:"code-style-fontweight-normal-pricingstrategybscheduled_valuebcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:u,SpecifiedBy:d,Badge:g};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PricingStrategy {\n  fixed\n  pay_what_you_want\n  scheduled_value\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pricingstrategybfixedbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PricingStrategy.",(0,i.kt)("b",null,"fixed")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Fixed price")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pricingstrategybpay_what_you_wantbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PricingStrategy.",(0,i.kt)("b",null,"pay_what_you_want")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pay-what-you-want price")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pricingstrategybscheduled_valuebcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PricingStrategy.",(0,i.kt)("b",null,"scheduled_value")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Price that changes over time")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/objects/pricing-structure"},(0,i.kt)("inlineCode",{parentName:"a"},"PricingStructure")),"  ",(0,i.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/pricing-structure-input"},(0,i.kt)("inlineCode",{parentName:"a"},"PricingStructureInput")),"  ",(0,i.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);