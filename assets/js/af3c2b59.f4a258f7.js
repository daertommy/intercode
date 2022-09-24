"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[98064],{75631:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(45721);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=c(a),g=o,y=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return a?n.createElement(y,l(l({ref:t},m),{},{components:a})):n.createElement(y,l({ref:t},m))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},60921:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>r,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(34489),o=a(45721),i=a(75631);const l={id:"cms-navigation-item",title:"CmsNavigationItem",hide_table_of_contents:!1},r=void 0,s={unversionedId:"graphql/objects/cms-navigation-item",id:"graphql/objects/cms-navigation-item",title:"CmsNavigationItem",description:"No description",source:"@site/docs/graphql/objects/cms-navigation-item.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/cms-navigation-item",permalink:"/docs/graphql/objects/cms-navigation-item",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/cms-navigation-item.mdx",tags:[],version:"current",frontMatter:{id:"cms-navigation-item",title:"CmsNavigationItem",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"CmsLayout",permalink:"/docs/graphql/objects/cms-layout"},next:{title:"CmsPartial",permalink:"/docs/graphql/objects/cms-partial"}},c={},m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CmsNavigationItem.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cmsnavigationitembidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CmsNavigationItem.<b>navigation_items</b></code><Bullet /><code>[CmsNavigationItem]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cmsnavigationitembnavigation_itemsbcodecmsnavigationitem--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CmsNavigationItem.<b>navigation_section</b></code><Bullet /><code>CmsNavigationItem</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cmsnavigationitembnavigation_sectionbcodecmsnavigationitem-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CmsNavigationItem.<b>page</b></code><Bullet /><code>Page</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cmsnavigationitembpagebcodepage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CmsNavigationItem.<b>position</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cmsnavigationitembpositionbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CmsNavigationItem.<b>title</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cmsnavigationitembtitlebcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:m,Bullet:d,SpecifiedBy:p,Badge:g};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CmsNavigationItem {\n  id: ID!\n  navigation_items: [CmsNavigationItem]\n  navigation_section: CmsNavigationItem\n  page: Page\n  position: Int\n  title: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-cmsnavigationitembidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CmsNavigationItem.",(0,i.kt)("b",null,"id"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-cmsnavigationitembnavigation_itemsbcodecmsnavigationitem--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CmsNavigationItem.",(0,i.kt)("b",null,"navigation_items"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-navigation-item"},(0,i.kt)("inlineCode",{parentName:"a"},"[CmsNavigationItem]"))," ",(0,i.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-cmsnavigationitembnavigation_sectionbcodecmsnavigationitem-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CmsNavigationItem.",(0,i.kt)("b",null,"navigation_section"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-navigation-item"},(0,i.kt)("inlineCode",{parentName:"a"},"CmsNavigationItem"))," ",(0,i.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-cmsnavigationitembpagebcodepage-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CmsNavigationItem.",(0,i.kt)("b",null,"page"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/page"},(0,i.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,i.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-cmsnavigationitembpositionbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CmsNavigationItem.",(0,i.kt)("b",null,"position"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-cmsnavigationitembtitlebcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CmsNavigationItem.",(0,i.kt)("b",null,"title"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/objects/cms-navigation-item"},(0,i.kt)("inlineCode",{parentName:"a"},"CmsNavigationItem")),"  ",(0,i.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/interfaces/cms-parent"},(0,i.kt)("inlineCode",{parentName:"a"},"CmsParent")),"  ",(0,i.kt)(g,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/objects/convention"},(0,i.kt)("inlineCode",{parentName:"a"},"Convention")),"  ",(0,i.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/objects/create-cms-navigation-item-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"CreateCmsNavigationItemPayload")),"  ",(0,i.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/objects/delete-cms-navigation-item-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"DeleteCmsNavigationItemPayload")),"  ",(0,i.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/objects/root-site"},(0,i.kt)("inlineCode",{parentName:"a"},"RootSite")),"  ",(0,i.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/objects/sort-cms-navigation-items-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"SortCmsNavigationItemsPayload")),"  ",(0,i.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/objects/update-cms-navigation-item-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"UpdateCmsNavigationItemPayload")),"  ",(0,i.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);