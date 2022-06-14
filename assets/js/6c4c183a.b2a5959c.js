"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[33875],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99403:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(75731),a=n(42706),o=(n(3289),n(75631)),i=["components"],s={id:"user-con-profiles-pagination",title:"UserConProfilesPagination",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/objects/user-con-profiles-pagination",id:"graphql/objects/user-con-profiles-pagination",title:"UserConProfilesPagination",description:"No description",source:"@site/docs/graphql/objects/user-con-profiles-pagination.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/user-con-profiles-pagination",permalink:"/docs/graphql/objects/user-con-profiles-pagination",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/user-con-profiles-pagination.mdx",tags:[],version:"current",frontMatter:{id:"user-con-profiles-pagination",title:"UserConProfilesPagination",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UserConProfile",permalink:"/docs/graphql/objects/user-con-profile"},next:{title:"User",permalink:"/docs/graphql/objects/user"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>current_page</code> (<code>Int!</code>)",id:"current_page-int",level:4},{value:"<code>entries</code> (<code>[UserConProfile!]!</code>)",id:"entries-userconprofile",level:4},{value:"<code>per_page</code> (<code>Int!</code>)",id:"per_page-int",level:4},{value:"<code>total_entries</code> (<code>Int!</code>)",id:"total_entries-int",level:4},{value:"<code>total_pages</code> (<code>Int!</code>)",id:"total_pages-int",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>PaginationInterface</code>",id:"paginationinterface",level:4}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserConProfilesPagination implements PaginationInterface {\n  current_page: Int!\n  entries: [UserConProfile!]!\n  per_page: Int!\n  total_entries: Int!\n  total_pages: Int!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"current_page-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"current_page"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The number of the page currently being returned in this query"),(0,o.kt)("h4",{id:"entries-userconprofile"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"entries"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserConProfile!]!")),")"),(0,o.kt)("h4",{id:"per_page-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"per_page"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The number of items per page currently being returned in this query"),(0,o.kt)("h4",{id:"total_entries-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"total_entries"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The total number of items in the paginated list (across all pages)"),(0,o.kt)("h4",{id:"total_pages-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"total_pages"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The total number of pages in the paginated list"),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"paginationinterface"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/interfaces/pagination-interface"},(0,o.kt)("inlineCode",{parentName:"a"},"PaginationInterface"))),(0,o.kt)("p",null,"PaginationInterface provides a way to use offset-based pagination on a list of objects. This\nis useful for UIs such as Intercode's table views, which provide a way to jump between numbered\npages."),(0,o.kt)("p",null,"Page numbers in PaginationInterface are 1-based (so, the first page is page 1, then page 2,\netc.) The number of items per page can be controlled via the per_page argument on paginated\nfields. It defaults to 20, and can go up to 200."),(0,o.kt)("p",null,"Offset-based pagination is different from\n",(0,o.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"Relay's cursor-based pagination")," that is more\ncommonly used in GraphQL APIs. We chose to go with an offset-based approach due to our UI\nneeds, but if a cursor-based approach is desirable in the future, we may also implement Relay\nconnections alongside our existing pagination fields."))}f.isMDXComponent=!0}}]);