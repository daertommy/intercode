"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[24529],{75631:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(45721);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),i=c(r),m=n,y=i["".concat(u,".").concat(m)]||i[m]||d[m]||l;return r?a.createElement(y,p(p({ref:t},s),{},{components:r})):a.createElement(y,p({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[i]="string"==typeof e?e:n,p[1]=o;for(var c=2;c<l;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47728:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>i,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>s});var a=r(91487),n=r(45721),l=r(75631);const p={id:"update-cms-graphql-query",title:"updateCmsGraphqlQuery",hide_table_of_contents:!1},o=void 0,u={unversionedId:"graphql/mutations/update-cms-graphql-query",id:"graphql/mutations/update-cms-graphql-query",title:"updateCmsGraphqlQuery",description:"No description",source:"@site/docs/graphql/mutations/update-cms-graphql-query.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-cms-graphql-query",permalink:"/docs/graphql/mutations/update-cms-graphql-query",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/update-cms-graphql-query.mdx",tags:[],version:"current",frontMatter:{id:"update-cms-graphql-query",title:"updateCmsGraphqlQuery",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"updateCmsContentGroup",permalink:"/docs/graphql/mutations/update-cms-content-group"},next:{title:"updateCmsLayout",permalink:"/docs/graphql/mutations/update-cms-layout"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateCmsGraphqlQuery.<b>input</b></code><Bullet /><code>UpdateCmsGraphqlQueryInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatecmsgraphqlquerybinputbcodeupdatecmsgraphqlqueryinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateCmsGraphqlQueryPayload</code> <Badge class="secondary" text="object"/>',id:"updatecmsgraphqlquerypayload-",level:4}],i=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:i,SpecifiedBy:d,Badge:m},g="wrapper";function h(e){let{components:t,...r}=e;return(0,l.kt)(g,(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"updateCmsGraphqlQuery(\n  input: UpdateCmsGraphqlQueryInput!\n): UpdateCmsGraphqlQueryPayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatecmsgraphqlquerybinputbcodeupdatecmsgraphqlqueryinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"updateCmsGraphqlQuery.",(0,l.kt)("b",null,"input"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-cms-graphql-query-input"},(0,l.kt)("inlineCode",{parentName:"a"},"UpdateCmsGraphqlQueryInput!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Parameters for UpdateCmsGraphqlQuery")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"updatecmsgraphqlquerypayload-"},(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/update-cms-graphql-query-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"UpdateCmsGraphqlQueryPayload"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Autogenerated return type of UpdateCmsGraphqlQuery.")))}h.isMDXComponent=!0}}]);