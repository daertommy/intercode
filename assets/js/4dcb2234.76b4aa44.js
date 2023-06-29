"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[94192],{75631:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var o=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),i=d(n),m=r,y=i["".concat(p,".").concat(m)]||i[m]||u[m]||a;return n?o.createElement(y,l(l({ref:t},s),{},{components:n})):o.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[i]="string"==typeof e?e:r,l[1]=c;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60577:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>i,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var o=n(91487),r=n(45721),a=n(75631);const l={id:"update-cms-content-group-payload",title:"UpdateCmsContentGroupPayload",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/objects/update-cms-content-group-payload",id:"graphql/objects/update-cms-content-group-payload",title:"UpdateCmsContentGroupPayload",description:"Autogenerated return type of UpdateCmsContentGroup.",source:"@site/docs/graphql/objects/update-cms-content-group-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/update-cms-content-group-payload",permalink:"/docs/graphql/objects/update-cms-content-group-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/update-cms-content-group-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-cms-content-group-payload",title:"UpdateCmsContentGroupPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"TransitionEventProposalPayload",permalink:"/docs/graphql/objects/transition-event-proposal-payload"},next:{title:"UpdateCmsGraphqlQueryPayload",permalink:"/docs/graphql/objects/update-cms-graphql-query-payload"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCmsContentGroupPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecmscontentgrouppayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCmsContentGroupPayload.<b>cms_content_group</b></code><Bullet /><code>CmsContentGroup!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-updatecmscontentgrouppayloadbcms_content_groupbcodecmscontentgroup--",level:4},{value:"Returned by",id:"returned-by",level:3}],i=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:i,SpecifiedBy:u,Badge:m},g="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated return type of UpdateCmsContentGroup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateCmsContentGroupPayload {\n  clientMutationId: String\n  cms_content_group: CmsContentGroup!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updatecmscontentgrouppayloadbclientmutationidbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"UpdateCmsContentGroupPayload.",(0,a.kt)("b",null,"clientMutationId"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updatecmscontentgrouppayloadbcms_content_groupbcodecmscontentgroup--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"UpdateCmsContentGroupPayload.",(0,a.kt)("b",null,"cms_content_group"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-content-group"},(0,a.kt)("inlineCode",{parentName:"a"},"CmsContentGroup!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"returned-by"},"Returned by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/update-cms-content-group"},(0,a.kt)("inlineCode",{parentName:"a"},"updateCmsContentGroup")),"  ",(0,a.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);