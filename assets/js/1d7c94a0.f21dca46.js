"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[7079],{75631:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var r=a(45721);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(a),u=l,y=p["".concat(c,".").concat(u)]||p[u]||m[u]||n;return a?r.createElement(y,o(o({ref:t},s),{},{components:a})):r.createElement(y,o({ref:t},s))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var d=2;d<n;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76788:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=a(64715),l=a(45721),n=a(75631);const o={id:"delete-cms-partial-payload",title:"DeleteCmsPartialPayload",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/objects/delete-cms-partial-payload",id:"graphql/objects/delete-cms-partial-payload",title:"DeleteCmsPartialPayload",description:"Autogenerated return type of DeleteCmsPartial.",source:"@site/docs/graphql/objects/delete-cms-partial-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/delete-cms-partial-payload",permalink:"/docs/graphql/objects/delete-cms-partial-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/delete-cms-partial-payload.mdx",tags:[],version:"current",frontMatter:{id:"delete-cms-partial-payload",title:"DeleteCmsPartialPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"DeleteCmsNavigationItemPayload",permalink:"/docs/graphql/objects/delete-cms-navigation-item-payload"},next:{title:"DeleteCmsVariablePayload",permalink:"/docs/graphql/objects/delete-cms-variable-payload"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteCmsPartialPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletecmspartialpayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteCmsPartialPayload.<b>cms_partial</b></code><Bullet /><code>CmsPartial!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-deletecmspartialpayloadbcms_partialbcodecmspartial--",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(l.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:p,SpecifiedBy:m,Badge:u},f="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Autogenerated return type of DeleteCmsPartial."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type DeleteCmsPartialPayload {\n  clientMutationId: String\n  cms_partial: CmsPartial!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-deletecmspartialpayloadbclientmutationidbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"DeleteCmsPartialPayload.",(0,n.kt)("b",null,"clientMutationId"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-deletecmspartialpayloadbcms_partialbcodecmspartial--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"DeleteCmsPartialPayload.",(0,n.kt)("b",null,"cms_partial"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-partial"},(0,n.kt)("inlineCode",{parentName:"a"},"CmsPartial!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/delete-cms-partial"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteCmsPartial")),"  ",(0,n.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);