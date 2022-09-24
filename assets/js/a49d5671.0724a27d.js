"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[11638],{75631:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(45721);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),y=n,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||l;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},85320:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>y,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(34489),n=r(45721),l=r(75631);const o={id:"create-cms-graphql-query-payload",title:"CreateCmsGraphqlQueryPayload",hide_table_of_contents:!1},c=void 0,s={unversionedId:"graphql/objects/create-cms-graphql-query-payload",id:"graphql/objects/create-cms-graphql-query-payload",title:"CreateCmsGraphqlQueryPayload",description:"Autogenerated return type of CreateCmsGraphqlQuery",source:"@site/docs/graphql/objects/create-cms-graphql-query-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/create-cms-graphql-query-payload",permalink:"/docs/graphql/objects/create-cms-graphql-query-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/create-cms-graphql-query-payload.mdx",tags:[],version:"current",frontMatter:{id:"create-cms-graphql-query-payload",title:"CreateCmsGraphqlQueryPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"CreateCmsFilePayload",permalink:"/docs/graphql/objects/create-cms-file-payload"},next:{title:"CreateCmsLayoutPayload",permalink:"/docs/graphql/objects/create-cms-layout-payload"}},i={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateCmsGraphqlQueryPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcmsgraphqlquerypayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateCmsGraphqlQueryPayload.<b>query</b></code><Bullet /><code>CmsGraphqlQuery!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-createcmsgraphqlquerypayloadbquerybcodecmsgraphqlquery--",level:4},{value:"Returned by",id:"returned-by",level:3}],d=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:d,SpecifiedBy:u,Badge:y};function g(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Autogenerated return type of CreateCmsGraphqlQuery"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateCmsGraphqlQueryPayload {\n  clientMutationId: String\n  query: CmsGraphqlQuery!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcmsgraphqlquerypayloadbclientmutationidbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateCmsGraphqlQueryPayload.",(0,l.kt)("b",null,"clientMutationId"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcmsgraphqlquerypayloadbquerybcodecmsgraphqlquery--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateCmsGraphqlQueryPayload.",(0,l.kt)("b",null,"query"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-graphql-query"},(0,l.kt)("inlineCode",{parentName:"a"},"CmsGraphqlQuery!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/create-cms-graphql-query"},(0,l.kt)("inlineCode",{parentName:"a"},"createCmsGraphqlQuery")),"  ",(0,l.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);