"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[19765],{75631:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>u});var a=n(3289);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(n),u=i,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,r(r({ref:e},c),{},{components:n})):a.createElement(g,r({ref:e},c))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46328:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(34489),i=n(3289),o=n(75631);const r={id:"update-cms-navigation-item-input",title:"UpdateCmsNavigationItemInput",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/inputs/update-cms-navigation-item-input",id:"graphql/inputs/update-cms-navigation-item-input",title:"UpdateCmsNavigationItemInput",description:"Autogenerated input type of UpdateCmsNavigationItem",source:"@site/docs/graphql/inputs/update-cms-navigation-item-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-cms-navigation-item-input",permalink:"/docs/graphql/inputs/update-cms-navigation-item-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-cms-navigation-item-input.mdx",tags:[],version:"current",frontMatter:{id:"update-cms-navigation-item-input",title:"UpdateCmsNavigationItemInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UpdateCmsLayoutInput",permalink:"/docs/graphql/inputs/update-cms-layout-input"},next:{title:"UpdateCmsPartialInput",permalink:"/docs/graphql/inputs/update-cms-partial-input"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCmsNavigationItemInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecmsnavigationiteminputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCmsNavigationItemInput.<b>cms_navigation_item</b></code><Bullet /><code>CmsNavigationItemInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatecmsnavigationiteminputbcms_navigation_itembcodecmsnavigationiteminput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCmsNavigationItemInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecmsnavigationiteminputbidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=t=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),u=t=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+t.class},t.text)),g={toc:c,Bullet:d,SpecifiedBy:m,Badge:u};function f(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated input type of UpdateCmsNavigationItem"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateCmsNavigationItemInput {\n  clientMutationId: String\n  cms_navigation_item: CmsNavigationItemInput\n  id: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatecmsnavigationiteminputbclientmutationidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateCmsNavigationItemInput.",(0,o.kt)("b",null,"clientMutationId"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatecmsnavigationiteminputbcms_navigation_itembcodecmsnavigationiteminput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateCmsNavigationItemInput.",(0,o.kt)("b",null,"cms_navigation_item"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/cms-navigation-item-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CmsNavigationItemInput"))," ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatecmsnavigationiteminputbidbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateCmsNavigationItemInput.",(0,o.kt)("b",null,"id"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/sort-cms-navigation-items-input"},(0,o.kt)("inlineCode",{parentName:"a"},"SortCmsNavigationItemsInput")),"  ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/update-cms-navigation-item"},(0,o.kt)("inlineCode",{parentName:"a"},"updateCmsNavigationItem")),"  ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);