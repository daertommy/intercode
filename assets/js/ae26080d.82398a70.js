"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[99685],{75631:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(3289);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=c(a),g=o,u=p["".concat(l,".").concat(g)]||p[g]||m[g]||r;return a?n.createElement(u,i(i({ref:e},d),{},{components:a})):n.createElement(u,i({ref:e},d))}));function g(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},95268:(t,e,a)=>{a.r(e),a.d(e,{Badge:()=>g,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(34489),o=a(3289),r=a(75631);const i={id:"sort-cms-navigation-items-payload",title:"SortCmsNavigationItemsPayload",hide_table_of_contents:!1},s=void 0,l={unversionedId:"graphql/objects/sort-cms-navigation-items-payload",id:"graphql/objects/sort-cms-navigation-items-payload",title:"SortCmsNavigationItemsPayload",description:"Autogenerated return type of SortCmsNavigationItems",source:"@site/docs/graphql/objects/sort-cms-navigation-items-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/sort-cms-navigation-items-payload",permalink:"/docs/graphql/objects/sort-cms-navigation-items-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/sort-cms-navigation-items-payload.mdx",tags:[],version:"current",frontMatter:{id:"sort-cms-navigation-items-payload",title:"SortCmsNavigationItemsPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"SignupsPagination",permalink:"/docs/graphql/objects/signups-pagination"},next:{title:"StaffPosition",permalink:"/docs/graphql/objects/staff-position"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SortCmsNavigationItemsPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sortcmsnavigationitemspayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SortCmsNavigationItemsPayload.<b>navigation_items</b></code><Bullet /><code>[CmsNavigationItem!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-sortcmsnavigationitemspayloadbnavigation_itemsbcodecmsnavigationitem--",level:4},{value:"Returned by",id:"returned-by",level:3}],m=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=t=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),g=t=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+t.class},t.text)),u={toc:d,Bullet:m,SpecifiedBy:p,Badge:g};function y(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Autogenerated return type of SortCmsNavigationItems"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SortCmsNavigationItemsPayload {\n  clientMutationId: String\n  navigation_items: [CmsNavigationItem!]!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sortcmsnavigationitemspayloadbclientmutationidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SortCmsNavigationItemsPayload.",(0,r.kt)("b",null,"clientMutationId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-sortcmsnavigationitemspayloadbnavigation_itemsbcodecmsnavigationitem--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SortCmsNavigationItemsPayload.",(0,r.kt)("b",null,"navigation_items"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-navigation-item"},(0,r.kt)("inlineCode",{parentName:"a"},"[CmsNavigationItem!]!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/sort-cms-navigation-items"},(0,r.kt)("inlineCode",{parentName:"a"},"sortCmsNavigationItems")),"  ",(0,r.kt)(g,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);