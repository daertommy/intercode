"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[18655],{75631:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>u});var a=r(45721);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,y=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(y,l(l({ref:t},i),{},{components:r})):a.createElement(y,l({ref:t},i))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1407:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=r(50524),n=r(45721),o=r(75631);const l={id:"json",title:"Json",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/scalars/json",id:"graphql/scalars/json",title:"Json",description:"An arbitrary object, serialized as JSON",source:"@site/docs/graphql/scalars/json.mdx",sourceDirName:"graphql/scalars",slug:"/graphql/scalars/json",permalink:"/docs/graphql/scalars/json",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/scalars/json.mdx",tags:[],version:"current",frontMatter:{id:"json",title:"Json",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"Int",permalink:"/docs/graphql/scalars/int"},next:{title:"String",permalink:"/docs/graphql/scalars/string"}},c={},i=[{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:i,Bullet:d,SpecifiedBy:m,Badge:u};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An arbitrary object, serialized as JSON"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Json\n")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/queries/oauth-pre-auth"},(0,o.kt)("inlineCode",{parentName:"a"},"oauthPreAuth")),"  ",(0,o.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/contact-email"},(0,o.kt)("inlineCode",{parentName:"a"},"ContactEmail")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/convention"},(0,o.kt)("inlineCode",{parentName:"a"},"Convention")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/convention-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ConventionInput")),"  ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event"},(0,o.kt)("inlineCode",{parentName:"a"},"Event")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event-proposal"},(0,o.kt)("inlineCode",{parentName:"a"},"EventProposal")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/form"},(0,o.kt)("inlineCode",{parentName:"a"},"Form")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/form-item"},(0,o.kt)("inlineCode",{parentName:"a"},"FormItem")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/form-item-input"},(0,o.kt)("inlineCode",{parentName:"a"},"FormItemInput")),"  ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/form-response-change"},(0,o.kt)("inlineCode",{parentName:"a"},"FormResponseChange")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/queries/oauth-pre-auth"},(0,o.kt)("inlineCode",{parentName:"a"},"oauthPreAuth")),"  ",(0,o.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/run"},(0,o.kt)("inlineCode",{parentName:"a"},"Run")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/user-con-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"UserConProfile")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);