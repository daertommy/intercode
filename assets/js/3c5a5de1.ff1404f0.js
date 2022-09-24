"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[74636],{75631:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(45721);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52427:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(34489),a=r(45721),l=r(75631);const o={id:"search-result",title:"SearchResult",hide_table_of_contents:!1},c=void 0,s={unversionedId:"graphql/objects/search-result",id:"graphql/objects/search-result",title:"SearchResult",description:"No description",source:"@site/docs/graphql/objects/search-result.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/search-result",permalink:"/docs/graphql/objects/search-result",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/search-result.mdx",tags:[],version:"current",frontMatter:{id:"search-result",title:"SearchResult",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"SearchResultEntry",permalink:"/docs/graphql/objects/search-result-entry"},next:{title:"SendNotificationPreviewPayload",permalink:"/docs/graphql/objects/send-notification-preview-payload"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SearchResult.<b>entries</b></code><Bullet /><code>[SearchResultEntry!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-searchresultbentriesbcodesearchresultentry--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SearchResult.<b>total_entries</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchresultbtotal_entriesbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),h={toc:d,Bullet:p,SpecifiedBy:u,Badge:m};function f(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type SearchResult {\n  entries: [SearchResultEntry!]!\n  total_entries: Int!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-searchresultbentriesbcodesearchresultentry--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SearchResult.",(0,l.kt)("b",null,"entries"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/search-result-entry"},(0,l.kt)("inlineCode",{parentName:"a"},"[SearchResultEntry!]!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-searchresultbtotal_entriesbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SearchResult.",(0,l.kt)("b",null,"total_entries"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/interfaces/cms-parent"},(0,l.kt)("inlineCode",{parentName:"a"},"CmsParent")),"  ",(0,l.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/convention"},(0,l.kt)("inlineCode",{parentName:"a"},"Convention")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/root-site"},(0,l.kt)("inlineCode",{parentName:"a"},"RootSite")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);