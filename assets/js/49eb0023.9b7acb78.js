"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[42631],{75631:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(45721);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),p=d(a),g=o,u=p["".concat(c,".").concat(g)]||p[g]||m[g]||i;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7748:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=a(50524),o=a(45721),i=a(75631);const l={id:"delete-cms-navigation-item-payload",title:"DeleteCmsNavigationItemPayload",hide_table_of_contents:!1},r=void 0,c={unversionedId:"graphql/objects/delete-cms-navigation-item-payload",id:"graphql/objects/delete-cms-navigation-item-payload",title:"DeleteCmsNavigationItemPayload",description:"Autogenerated return type of DeleteCmsNavigationItem.",source:"@site/docs/graphql/objects/delete-cms-navigation-item-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/delete-cms-navigation-item-payload",permalink:"/docs/graphql/objects/delete-cms-navigation-item-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/delete-cms-navigation-item-payload.mdx",tags:[],version:"current",frontMatter:{id:"delete-cms-navigation-item-payload",title:"DeleteCmsNavigationItemPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"DeleteCmsLayoutPayload",permalink:"/docs/graphql/objects/delete-cms-layout-payload"},next:{title:"DeleteCmsPartialPayload",permalink:"/docs/graphql/objects/delete-cms-partial-payload"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteCmsNavigationItemPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletecmsnavigationitempayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteCmsNavigationItemPayload.<b>cms_navigation_item</b></code><Bullet /><code>CmsNavigationItem!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-deletecmsnavigationitempayloadbcms_navigation_itembcodecmsnavigationitem--",level:4},{value:"Returned by",id:"returned-by",level:3}],m=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:m,SpecifiedBy:p,Badge:g};function y(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated return type of DeleteCmsNavigationItem."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type DeleteCmsNavigationItemPayload {\n  clientMutationId: String\n  cms_navigation_item: CmsNavigationItem!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-deletecmsnavigationitempayloadbclientmutationidbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DeleteCmsNavigationItemPayload.",(0,i.kt)("b",null,"clientMutationId"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-deletecmsnavigationitempayloadbcms_navigation_itembcodecmsnavigationitem--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DeleteCmsNavigationItemPayload.",(0,i.kt)("b",null,"cms_navigation_item"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-navigation-item"},(0,i.kt)("inlineCode",{parentName:"a"},"CmsNavigationItem!"))," ",(0,i.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"returned-by"},"Returned by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/delete-cms-navigation-item"},(0,i.kt)("inlineCode",{parentName:"a"},"deleteCmsNavigationItem")),"  ",(0,i.kt)(g,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);