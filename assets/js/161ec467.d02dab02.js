"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[60475],{75631:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var a=t(3289);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=c(t),d=r,h=g["".concat(s,".").concat(d)]||g[d]||u[d]||i;return t?a.createElement(h,o(o({ref:n},l),{},{components:t})):a.createElement(h,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},90068:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return g}});var a=t(88078),r=t(65844),i=(t(3289),t(75631)),o=["components"],p={id:"signup-changes-pagination",title:"SignupChangesPagination"},s=void 0,c={unversionedId:"graphql/objects/signup-changes-pagination",id:"graphql/objects/signup-changes-pagination",isDocsHomePage:!1,title:"SignupChangesPagination",description:"No description",source:"@site/docs/graphql/objects/signup-changes-pagination.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/signup-changes-pagination",permalink:"/docs/graphql/objects/signup-changes-pagination",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/signup-changes-pagination.mdx",tags:[],version:"current",frontMatter:{id:"signup-changes-pagination",title:"SignupChangesPagination"},sidebar:"sidebar",previous:{title:"SignupChange",permalink:"/docs/graphql/objects/signup-change"},next:{title:"SignupCountByState",permalink:"/docs/graphql/objects/signup-count-by-state"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>current_page</code> (Int!)",id:"current_page-int",children:[],level:4},{value:"<code>entries</code> ([SignupChange!]!)",id:"entries-signupchange",children:[],level:4},{value:"<code>per_page</code> (Int!)",id:"per_page-int",children:[],level:4},{value:"<code>total_entries</code> (Int!)",id:"total_entries-int",children:[],level:4},{value:"<code>total_pages</code> (Int!)",id:"total_pages-int",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"PaginationInterface",id:"paginationinterface",children:[],level:4}],level:3}],u={toc:l};function g(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SignupChangesPagination implements PaginationInterface {\n  current_page: Int!\n  entries: [SignupChange!]!\n  per_page: Int!\n  total_entries: Int!\n  total_pages: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"current_page-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"current_page")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The number of the page currently being returned in this query"),(0,i.kt)("h4",{id:"entries-signupchange"},(0,i.kt)("inlineCode",{parentName:"h4"},"entries")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup-change"},(0,i.kt)("inlineCode",{parentName:"a"},"[SignupChange!]!")),")"),(0,i.kt)("h4",{id:"per_page-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"per_page")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The number of items per page currently being returned in this query"),(0,i.kt)("h4",{id:"total_entries-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"total_entries")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The total number of items in the paginated list (across all pages)"),(0,i.kt)("h4",{id:"total_pages-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"total_pages")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The total number of pages in the paginated list"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"paginationinterface"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/interfaces/pagination-interface"},(0,i.kt)("inlineCode",{parentName:"a"},"PaginationInterface"))),(0,i.kt)("p",null,"PaginationInterface provides a way to use offset-based pagination on a list of objects. This\nis useful for UIs such as Intercode's table views, which provide a way to jump between numbered\npages."),(0,i.kt)("p",null,"Page numbers in PaginationInterface are 1-based (so, the first page is page 1, then page 2,\netc.) The number of items per page can be controlled via the per_page argument on paginated\nfields. It defaults to 20, and can go up to 200."),(0,i.kt)("p",null,"Offset-based pagination is different from\n",(0,i.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"Relay's cursor-based pagination")," that is more\ncommonly used in GraphQL APIs. We chose to go with an offset-based approach due to our UI\nneeds, but if a cursor-based approach is desirable in the future, we may also implement Relay\nconnections alongside our existing pagination fields."))}g.isMDXComponent=!0}}]);