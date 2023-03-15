"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[12778],{75631:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>f});var a=l(45721);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(l),u=n,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return l?a.createElement(f,o(o({ref:t},s),{},{components:l})):a.createElement(f,o({ref:t},s))}));function f(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,o=new Array(r);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<r;d++)o[d]=l[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}u.displayName="MDXCreateElement"},5510:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=l(25577),n=l(45721),r=l(75631);const o={id:"delete-cms-file-payload",title:"DeleteCmsFilePayload",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/objects/delete-cms-file-payload",id:"graphql/objects/delete-cms-file-payload",title:"DeleteCmsFilePayload",description:"Autogenerated return type of DeleteCmsFile.",source:"@site/docs/graphql/objects/delete-cms-file-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/delete-cms-file-payload",permalink:"/docs/graphql/objects/delete-cms-file-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/delete-cms-file-payload.mdx",tags:[],version:"current",frontMatter:{id:"delete-cms-file-payload",title:"DeleteCmsFilePayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"DeleteCmsContentGroupPayload",permalink:"/docs/graphql/objects/delete-cms-content-group-payload"},next:{title:"DeleteCmsGraphqlQueryPayload",permalink:"/docs/graphql/objects/delete-cms-graphql-query-payload"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteCmsFilePayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletecmsfilepayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteCmsFilePayload.<b>cms_file</b></code><Bullet /><code>CmsFile!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-deletecmsfilepayloadbcms_filebcodecmsfile--",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:p,SpecifiedBy:m,Badge:u},y="wrapper";function g(e){let{components:t,...l}=e;return(0,r.kt)(y,(0,a.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Autogenerated return type of DeleteCmsFile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type DeleteCmsFilePayload {\n  clientMutationId: String\n  cms_file: CmsFile!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-deletecmsfilepayloadbclientmutationidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DeleteCmsFilePayload.",(0,r.kt)("b",null,"clientMutationId"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-deletecmsfilepayloadbcms_filebcodecmsfile--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DeleteCmsFilePayload.",(0,r.kt)("b",null,"cms_file"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-file"},(0,r.kt)("inlineCode",{parentName:"a"},"CmsFile!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/delete-cms-file"},(0,r.kt)("inlineCode",{parentName:"a"},"deleteCmsFile")),"  ",(0,r.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);