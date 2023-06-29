"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[1341],{75631:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(45721);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),g=n,f=u["".concat(i,".").concat(g)]||u[g]||c[g]||s;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<s;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},93241:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>g,Bullet:()=>u,SpecifiedBy:()=>c,assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(91487),n=r(45721),s=r(75631);const o={id:"users-paginated",title:"users_paginated",hide_table_of_contents:!1},l=void 0,i={unversionedId:"graphql/queries/users-paginated",id:"graphql/queries/users-paginated",title:"users_paginated",description:"Returns a paginated list of users. See PaginationInterface for details on how to use",source:"@site/docs/graphql/queries/users-paginated.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/users-paginated",permalink:"/docs/graphql/queries/users-paginated",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/users-paginated.mdx",tags:[],version:"current",frontMatter:{id:"users-paginated",title:"users_paginated",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"user",permalink:"/docs/graphql/queries/user"},next:{title:"users",permalink:"/docs/graphql/queries/users"}},d={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>users_paginated.<b>filters</b></code><Bullet /><code>UserFiltersInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-users_paginatedbfiltersbcodeuserfiltersinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>users_paginated.<b>page</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-users_paginatedbpagebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>users_paginated.<b>per_page</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-users_paginatedbper_pagebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>users_paginated.<b>sort</b></code><Bullet /><code>[SortInput!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-users_paginatedbsortbcodesortinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UsersPagination</code> <Badge class="secondary" text="object"/>',id:"userspagination-",level:4}],u=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:c,Badge:g},m="wrapper";function h(e){let{components:t,...r}=e;return(0,s.kt)(m,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Returns a paginated list of users. See PaginationInterface for details on how to use\npaginated lists, and UserFiltersInput for filters you can use here."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"users_paginated(\n  filters: UserFiltersInput\n  page: Int\n  per_page: Int\n  sort: [SortInput!]\n): UsersPagination!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-users_paginatedbfiltersbcodeuserfiltersinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"users_paginated.",(0,s.kt)("b",null,"filters"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/user-filters-input"},(0,s.kt)("inlineCode",{parentName:"a"},"UserFiltersInput"))," ",(0,s.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filters to restrict what items will appear in the result set.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-users_paginatedbpagebcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"users_paginated.",(0,s.kt)("b",null,"page"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The page number to return from the result set.  Page numbers start with 1.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-users_paginatedbper_pagebcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"users_paginated.",(0,s.kt)("b",null,"per_page"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The number of items to return per page.  Defaults to 20, can go up to 200.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-users_paginatedbsortbcodesortinput--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"users_paginated.",(0,s.kt)("b",null,"sort"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/sort-input"},(0,s.kt)("inlineCode",{parentName:"a"},"[SortInput!]"))," ",(0,s.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"A set of fields to use for ordering the result set. The second field is used as a\ntiebreaker for the first, the third field is used as a tiebreaker for the first two,\nand so on. If the sort argument is missing or empty, the order of items will be left\nup to the database (and may be unpredictable).")),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"userspagination-"},(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/users-pagination"},(0,s.kt)("inlineCode",{parentName:"a"},"UsersPagination"))," ",(0,s.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null))}h.isMDXComponent=!0}}]);