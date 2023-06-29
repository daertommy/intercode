"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[70263],{75631:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>f});var n=a(45721);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(f,l(l({ref:e},s),{},{components:a})):n.createElement(f,l({ref:e},s))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[d]="string"==typeof t?t:r,l[1]=p;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},43506:(t,e,a)=>{a.r(e),a.d(e,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(91487),r=a(45721),i=a(75631);const l={id:"update-cms-partial-input",title:"UpdateCmsPartialInput",hide_table_of_contents:!1},p=void 0,o={unversionedId:"graphql/inputs/update-cms-partial-input",id:"graphql/inputs/update-cms-partial-input",title:"UpdateCmsPartialInput",description:"Autogenerated input type of UpdateCmsPartial",source:"@site/docs/graphql/inputs/update-cms-partial-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-cms-partial-input",permalink:"/docs/graphql/inputs/update-cms-partial-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-cms-partial-input.mdx",tags:[],version:"current",frontMatter:{id:"update-cms-partial-input",title:"UpdateCmsPartialInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UpdateCmsNavigationItemInput",permalink:"/docs/graphql/inputs/update-cms-navigation-item-input"},next:{title:"UpdateConventionInput",permalink:"/docs/graphql/inputs/update-convention-input"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCmsPartialInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecmspartialinputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCmsPartialInput.<b>cms_partial</b></code><Bullet /><code>CmsPartialInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatecmspartialinputbcms_partialbcodecmspartialinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCmsPartialInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecmspartialinputbidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=t=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+t.class},t.text)),f={toc:s,Bullet:d,SpecifiedBy:u,Badge:m},g="wrapper";function y(t){let{components:e,...a}=t;return(0,i.kt)(g,(0,n.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated input type of UpdateCmsPartial"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateCmsPartialInput {\n  clientMutationId: String\n  cms_partial: CmsPartialInput!\n  id: ID\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-updatecmspartialinputbclientmutationidbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"UpdateCmsPartialInput.",(0,i.kt)("b",null,"clientMutationId"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-updatecmspartialinputbcms_partialbcodecmspartialinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"UpdateCmsPartialInput.",(0,i.kt)("b",null,"cms_partial"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/cms-partial-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CmsPartialInput!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-updatecmspartialinputbidbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"UpdateCmsPartialInput.",(0,i.kt)("b",null,"id"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/update-cms-partial"},(0,i.kt)("inlineCode",{parentName:"a"},"updateCmsPartial")),"  ",(0,i.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);