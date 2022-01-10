"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[75641],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51373:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(97390),r=n(14184),i=(n(3289),n(75631)),o=["components"],p={id:"signups-pagination",title:"SignupsPagination"},s=void 0,l={unversionedId:"graphql/objects/signups-pagination",id:"graphql/objects/signups-pagination",title:"SignupsPagination",description:"No description",source:"@site/docs/graphql/objects/signups-pagination.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/signups-pagination",permalink:"/docs/graphql/objects/signups-pagination",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/signups-pagination.mdx",tags:[],version:"current",frontMatter:{id:"signups-pagination",title:"SignupsPagination"},sidebar:"sidebar",previous:{title:"Signup",permalink:"/docs/graphql/objects/signup"},next:{title:"SortCmsNavigationItemsPayload",permalink:"/docs/graphql/objects/sort-cms-navigation-items-payload"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>current_page</code> (Int)",id:"current_page-int",children:[],level:4},{value:"<code>entries</code> (Signup)",id:"entries-signup",children:[],level:4},{value:"<code>per_page</code> (Int)",id:"per_page-int",children:[],level:4},{value:"<code>total_entries</code> (Int)",id:"total_entries-int",children:[],level:4},{value:"<code>total_pages</code> (Int)",id:"total_pages-int",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"PaginationInterface",id:"paginationinterface",children:[],level:4}],level:3}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SignupsPagination implements PaginationInterface {\n  current_page: Int!\n  entries: [Signup!]!\n  per_page: Int!\n  total_entries: Int!\n  total_pages: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"current_page-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"current_page")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The number of the page currently being returned in this query"),(0,i.kt)("h4",{id:"entries-signup"},(0,i.kt)("inlineCode",{parentName:"h4"},"entries")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup"},(0,i.kt)("inlineCode",{parentName:"a"},"Signup")),")"),(0,i.kt)("h4",{id:"per_page-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"per_page")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The number of items per page currently being returned in this query"),(0,i.kt)("h4",{id:"total_entries-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"total_entries")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The total number of items in the paginated list (across all pages)"),(0,i.kt)("h4",{id:"total_pages-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"total_pages")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The total number of pages in the paginated list"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"paginationinterface"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/interfaces/pagination-interface"},(0,i.kt)("inlineCode",{parentName:"a"},"PaginationInterface"))),(0,i.kt)("p",null,"PaginationInterface provides a way to use offset-based pagination on a list of objects. This\nis useful for UIs such as Intercode's table views, which provide a way to jump between numbered\npages."),(0,i.kt)("p",null,"Page numbers in PaginationInterface are 1-based (so, the first page is page 1, then page 2,\netc.) The number of items per page can be controlled via the per_page argument on paginated\nfields. It defaults to 20, and can go up to 200."),(0,i.kt)("p",null,"Offset-based pagination is different from\n",(0,i.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"Relay's cursor-based pagination")," that is more\ncommonly used in GraphQL APIs. We chose to go with an offset-based approach due to our UI\nneeds, but if a cursor-based approach is desirable in the future, we may also implement Relay\nconnections alongside our existing pagination fields."))}d.isMDXComponent=!0}}]);