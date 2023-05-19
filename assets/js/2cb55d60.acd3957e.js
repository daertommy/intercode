"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[83671],{75631:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),u=o,y=p["".concat(d,".").concat(u)]||p[u]||s[u]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90824:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>m,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=n(64715),o=n(45721),a=n(75631);const l={id:"payment-mode",title:"PaymentMode",hide_table_of_contents:!1},i=void 0,d={unversionedId:"graphql/enums/payment-mode",id:"graphql/enums/payment-mode",title:"PaymentMode",description:"No description",source:"@site/docs/graphql/enums/payment-mode.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/payment-mode",permalink:"/docs/graphql/enums/payment-mode",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/enums/payment-mode.mdx",tags:[],version:"current",frontMatter:{id:"payment-mode",title:"PaymentMode",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"OrderStatus",permalink:"/docs/graphql/enums/order-status"},next:{title:"PermissionedModelTypeIndicator",permalink:"/docs/graphql/enums/permissioned-model-type-indicator"}},m={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMode.<b>free</b></code>",id:"code-style-fontweight-normal-paymentmodebfreebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMode.<b>later</b></code>",id:"code-style-fontweight-normal-paymentmodeblaterbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMode.<b>now</b></code>",id:"code-style-fontweight-normal-paymentmodebnowbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMode.<b>payment_intent</b></code>",id:"code-style-fontweight-normal-paymentmodebpayment_intentbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:p,SpecifiedBy:s,Badge:u},f="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PaymentMode {\n  free\n  later\n  now\n  payment_intent\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-paymentmodebfreebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PaymentMode.",(0,a.kt)("b",null,"free")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-paymentmodeblaterbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PaymentMode.",(0,a.kt)("b",null,"later")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-paymentmodebnowbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PaymentMode.",(0,a.kt)("b",null,"now")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-paymentmodebpayment_intentbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PaymentMode.",(0,a.kt)("b",null,"payment_intent")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/submit-order-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SubmitOrderInput")),"  ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);