"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[75163],{75631:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,f=u["".concat(s,".").concat(g)]||u[g]||p[g]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83931:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(34489),a=n(45721),r=n(75631);const i={id:"conventions-paginated",title:"conventions_paginated",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/queries/conventions-paginated",id:"graphql/queries/conventions-paginated",title:"conventions_paginated",description:"Returns a paginated list of conventions. See PaginationInterface for details on how to use",source:"@site/docs/graphql/queries/conventions-paginated.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/conventions-paginated",permalink:"/docs/graphql/queries/conventions-paginated",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/conventions-paginated.mdx",tags:[],version:"current",frontMatter:{id:"conventions-paginated",title:"conventions_paginated",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"conventionByRequestHost",permalink:"/docs/graphql/queries/convention-by-request-host"},next:{title:"currentAbility",permalink:"/docs/graphql/queries/current-ability"}},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>conventions_paginated.<b>filters</b></code><Bullet /><code>ConventionFiltersInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-conventions_paginatedbfiltersbcodeconventionfiltersinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>conventions_paginated.<b>page</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventions_paginatedbpagebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>conventions_paginated.<b>per_page</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventions_paginatedbper_pagebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>conventions_paginated.<b>sort</b></code><Bullet /><code>[SortInput!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-conventions_paginatedbsortbcodesortinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ConventionsPagination</code> <Badge class="secondary" text="object"/>',id:"conventionspagination-",level:4}],p=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:p,SpecifiedBy:u,Badge:g};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Returns a paginated list of conventions. See PaginationInterface for details on how to use\npaginated lists, and ConventionFiltersInput for filters you can use here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"conventions_paginated(\n  filters: ConventionFiltersInput\n  page: Int\n  per_page: Int\n  sort: [SortInput!]\n): ConventionsPagination!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-conventions_paginatedbfiltersbcodeconventionfiltersinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"conventions_paginated.",(0,r.kt)("b",null,"filters"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/convention-filters-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ConventionFiltersInput"))," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filters to restrict what items will appear in the result set.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-conventions_paginatedbpagebcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"conventions_paginated.",(0,r.kt)("b",null,"page"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The page number to return from the result set.  Page numbers start with 1.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-conventions_paginatedbper_pagebcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"conventions_paginated.",(0,r.kt)("b",null,"per_page"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The number of items to return per page.  Defaults to 20, can go up to 200.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-conventions_paginatedbsortbcodesortinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"conventions_paginated.",(0,r.kt)("b",null,"sort"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/sort-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[SortInput!]"))," ",(0,r.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A set of fields to use for ordering the result set. The second field is used as a\ntiebreaker for the first, the third field is used as a tiebreaker for the first two,\nand so on. If the sort argument is missing or empty, the order of items will be left\nup to the database (and may be unpredictable).")),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"conventionspagination-"},(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/conventions-pagination"},(0,r.kt)("inlineCode",{parentName:"a"},"ConventionsPagination"))," ",(0,r.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}m.isMDXComponent=!0}}]);