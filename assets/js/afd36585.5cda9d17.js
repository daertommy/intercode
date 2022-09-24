"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[87832],{75631:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var l=a(45721);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=l.createContext({}),d=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return l.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,b=m["".concat(c,".").concat(u)]||m[u]||p[u]||n;return a?l.createElement(b,o(o({ref:t},s),{},{components:a})):l.createElement(b,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<n;d++)o[d]=a[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18545:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var l=a(34489),r=a(45721),n=a(75631);const o={id:"delete-cms-variable-payload",title:"DeleteCmsVariablePayload",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/objects/delete-cms-variable-payload",id:"graphql/objects/delete-cms-variable-payload",title:"DeleteCmsVariablePayload",description:"Autogenerated return type of DeleteCmsVariable",source:"@site/docs/graphql/objects/delete-cms-variable-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/delete-cms-variable-payload",permalink:"/docs/graphql/objects/delete-cms-variable-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/delete-cms-variable-payload.mdx",tags:[],version:"current",frontMatter:{id:"delete-cms-variable-payload",title:"DeleteCmsVariablePayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"DeleteCmsPartialPayload",permalink:"/docs/graphql/objects/delete-cms-partial-payload"},next:{title:"DeleteCouponApplicationPayload",permalink:"/docs/graphql/objects/delete-coupon-application-payload"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteCmsVariablePayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletecmsvariablepayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteCmsVariablePayload.<b>cms_variable</b></code><Bullet /><code>CmsVariable!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-deletecmsvariablepayloadbcms_variablebcodecmsvariable--",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(r.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:p,SpecifiedBy:m,Badge:u};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Autogenerated return type of DeleteCmsVariable"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type DeleteCmsVariablePayload {\n  clientMutationId: String\n  cms_variable: CmsVariable!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-deletecmsvariablepayloadbclientmutationidbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"DeleteCmsVariablePayload.",(0,n.kt)("b",null,"clientMutationId"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-deletecmsvariablepayloadbcms_variablebcodecmsvariable--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"DeleteCmsVariablePayload.",(0,n.kt)("b",null,"cms_variable"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-variable"},(0,n.kt)("inlineCode",{parentName:"a"},"CmsVariable!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/delete-cms-variable"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteCmsVariable")),"  ",(0,n.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);