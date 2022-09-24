"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[12614],{75631:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,y=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return n?o.createElement(y,l(l({ref:t},c),{},{components:n})):o.createElement(y,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45990:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var o=n(34489),r=n(45721),i=n(75631);const l={id:"permissioned-model-type-indicator",title:"PermissionedModelTypeIndicator",hide_table_of_contents:!1},a=void 0,d={unversionedId:"graphql/enums/permissioned-model-type-indicator",id:"graphql/enums/permissioned-model-type-indicator",title:"PermissionedModelTypeIndicator",description:"No description",source:"@site/docs/graphql/enums/permissioned-model-type-indicator.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/permissioned-model-type-indicator",permalink:"/docs/graphql/enums/permissioned-model-type-indicator",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/enums/permissioned-model-type-indicator.mdx",tags:[],version:"current",frontMatter:{id:"permissioned-model-type-indicator",title:"PermissionedModelTypeIndicator",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"PaymentMode",permalink:"/docs/graphql/enums/payment-mode"},next:{title:"PermissionedRoleTypeIndicator",permalink:"/docs/graphql/enums/permissioned-role-type-indicator"}},s={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PermissionedModelTypeIndicator.<b>CmsContentGroup</b></code>",id:"code-style-fontweight-normal-permissionedmodeltypeindicatorbcmscontentgroupbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PermissionedModelTypeIndicator.<b>Convention</b></code>",id:"code-style-fontweight-normal-permissionedmodeltypeindicatorbconventionbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PermissionedModelTypeIndicator.<b>EventCategory</b></code>",id:"code-style-fontweight-normal-permissionedmodeltypeindicatorbeventcategorybcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:p,SpecifiedBy:m,Badge:u};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PermissionedModelTypeIndicator {\n  CmsContentGroup\n  Convention\n  EventCategory\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-permissionedmodeltypeindicatorbcmscontentgroupbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PermissionedModelTypeIndicator.",(0,i.kt)("b",null,"CmsContentGroup")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-permissionedmodeltypeindicatorbconventionbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PermissionedModelTypeIndicator.",(0,i.kt)("b",null,"Convention")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-permissionedmodeltypeindicatorbeventcategorybcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PermissionedModelTypeIndicator.",(0,i.kt)("b",null,"EventCategory")))),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/permission-input"},(0,i.kt)("inlineCode",{parentName:"a"},"PermissionInput")),"  ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);