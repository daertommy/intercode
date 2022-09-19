"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[72940],{75631:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var a=r(3289);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return r?a.createElement(y,o(o({ref:t},i),{},{components:r})):a.createElement(y,o({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74095:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=r(34489),n=r(3289),l=r(75631);const o={id:"create-cms-graphql-query",title:"createCmsGraphqlQuery",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/mutations/create-cms-graphql-query",id:"graphql/mutations/create-cms-graphql-query",title:"createCmsGraphqlQuery",description:"No description",source:"@site/docs/graphql/mutations/create-cms-graphql-query.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-cms-graphql-query",permalink:"/docs/graphql/mutations/create-cms-graphql-query",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/create-cms-graphql-query.mdx",tags:[],version:"current",frontMatter:{id:"create-cms-graphql-query",title:"createCmsGraphqlQuery",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"createCmsFile",permalink:"/docs/graphql/mutations/create-cms-file"},next:{title:"createCmsLayout",permalink:"/docs/graphql/mutations/create-cms-layout"}},s={},i=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createCmsGraphqlQuery.<b>input</b></code><Bullet /><code>CreateCmsGraphqlQueryInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcmsgraphqlquerybinputbcodecreatecmsgraphqlqueryinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CreateCmsGraphqlQueryPayload</code> <Badge class="secondary" text="object"/>',id:"createcmsgraphqlquerypayload-",level:4}],u=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:i,Bullet:u,SpecifiedBy:m,Badge:d};function g(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"createCmsGraphqlQuery(\n  input: CreateCmsGraphqlQueryInput!\n): CreateCmsGraphqlQueryPayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcmsgraphqlquerybinputbcodecreatecmsgraphqlqueryinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"createCmsGraphqlQuery.",(0,l.kt)("b",null,"input"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/create-cms-graphql-query-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateCmsGraphqlQueryInput!"))," ",(0,l.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Parameters for CreateCmsGraphqlQuery")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"createcmsgraphqlquerypayload-"},(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/create-cms-graphql-query-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateCmsGraphqlQueryPayload"))," ",(0,l.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Autogenerated return type of CreateCmsGraphqlQuery")))}g.isMDXComponent=!0}}]);