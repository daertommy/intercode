"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[23974],{75631:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,g=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},15241:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=n(75731),r=n(42706),i=(n(3289),n(75631)),o=["components"],c={id:"pagination-interface",title:"PaginationInterface",hide_table_of_contents:!1},p=void 0,l={unversionedId:"graphql/interfaces/pagination-interface",id:"graphql/interfaces/pagination-interface",title:"PaginationInterface",description:"PaginationInterface provides a way to use offset-based pagination on a list of objects. This",source:"@site/docs/graphql/interfaces/pagination-interface.mdx",sourceDirName:"graphql/interfaces",slug:"/graphql/interfaces/pagination-interface",permalink:"/docs/graphql/interfaces/pagination-interface",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/interfaces/pagination-interface.mdx",tags:[],version:"current",frontMatter:{id:"pagination-interface",title:"PaginationInterface",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"CmsParent",permalink:"/docs/graphql/interfaces/cms-parent"},next:{title:"acceptClickwrapAgreement",permalink:"/docs/graphql/mutations/accept-clickwrap-agreement"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>current_page</code> (<code>Int!</code>)",id:"current_page-int",level:4},{value:"<code>per_page</code> (<code>Int!</code>)",id:"per_page-int",level:4},{value:"<code>total_entries</code> (<code>Int!</code>)",id:"total_entries-int",level:4},{value:"<code>total_pages</code> (<code>Int!</code>)",id:"total_pages-int",level:4}],f={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"PaginationInterface provides a way to use offset-based pagination on a list of objects. This\nis useful for UIs such as Intercode's table views, which provide a way to jump between numbered\npages."),(0,i.kt)("p",null,"Page numbers in PaginationInterface are 1-based (so, the first page is page 1, then page 2,\netc.) The number of items per page can be controlled via the per_page argument on paginated\nfields. It defaults to 20, and can go up to 200."),(0,i.kt)("p",null,"Offset-based pagination is different from\n",(0,i.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"Relay's cursor-based pagination")," that is more\ncommonly used in GraphQL APIs. We chose to go with an offset-based approach due to our UI\nneeds, but if a cursor-based approach is desirable in the future, we may also implement Relay\nconnections alongside our existing pagination fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"interface PaginationInterface {\n  current_page: Int!\n  per_page: Int!\n  total_entries: Int!\n  total_pages: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"current_page-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"current_page"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The number of the page currently being returned in this query"),(0,i.kt)("h4",{id:"per_page-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"per_page"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The number of items per page currently being returned in this query"),(0,i.kt)("h4",{id:"total_entries-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"total_entries"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The total number of items in the paginated list (across all pages)"),(0,i.kt)("h4",{id:"total_pages-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"total_pages"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The total number of pages in the paginated list"))}d.isMDXComponent=!0}}]);