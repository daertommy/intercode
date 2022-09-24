"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[24226],{75631:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var o=r(45721);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),y=a,f=s["".concat(p,".").concat(y)]||s[y]||u[y]||n;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},67232:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var o=r(34489),a=r(45721),n=r(75631);const i={id:"revoke-authorized-application-payload",title:"RevokeAuthorizedApplicationPayload",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/objects/revoke-authorized-application-payload",id:"graphql/objects/revoke-authorized-application-payload",title:"RevokeAuthorizedApplicationPayload",description:"Autogenerated return type of RevokeAuthorizedApplication",source:"@site/docs/graphql/objects/revoke-authorized-application-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/revoke-authorized-application-payload",permalink:"/docs/graphql/objects/revoke-authorized-application-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/revoke-authorized-application-payload.mdx",tags:[],version:"current",frontMatter:{id:"revoke-authorized-application-payload",title:"RevokeAuthorizedApplicationPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"RestoreDroppedEventPayload",permalink:"/docs/graphql/objects/restore-dropped-event-payload"},next:{title:"Room",permalink:"/docs/graphql/objects/room"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RevokeAuthorizedApplicationPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-revokeauthorizedapplicationpayloadbclientmutationidbcodestring-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,n.kt)(a.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:u,SpecifiedBy:s,Badge:y};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Autogenerated return type of RevokeAuthorizedApplication"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type RevokeAuthorizedApplicationPayload {\n  clientMutationId: String\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-revokeauthorizedapplicationpayloadbclientmutationidbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"RevokeAuthorizedApplicationPayload.",(0,n.kt)("b",null,"clientMutationId"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/revoke-authorized-application"},(0,n.kt)("inlineCode",{parentName:"a"},"revokeAuthorizedApplication")),"  ",(0,n.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);