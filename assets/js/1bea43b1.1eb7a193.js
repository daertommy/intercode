"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[93014],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,g=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87313:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(97390),r=n(14184),i=(n(3289),n(75631)),o=["components"],l={id:"events-pagination",title:"EventsPagination"},p=void 0,s={unversionedId:"graphql/objects/events-pagination",id:"graphql/objects/events-pagination",title:"EventsPagination",description:"No description",source:"@site/docs/graphql/objects/events-pagination.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/events-pagination",permalink:"/docs/graphql/objects/events-pagination",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/events-pagination.mdx",tags:[],version:"current",frontMatter:{id:"events-pagination",title:"EventsPagination"},sidebar:"sidebar",previous:{title:"Event",permalink:"/docs/graphql/objects/event"},next:{title:"ForceConfirmSignupPayload",permalink:"/docs/graphql/objects/force-confirm-signup-payload"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>current_page</code> (Int)",id:"current_page-int",children:[],level:4},{value:"<code>entries</code> (Event)",id:"entries-event",children:[],level:4},{value:"<code>per_page</code> (Int)",id:"per_page-int",children:[],level:4},{value:"<code>total_entries</code> (Int)",id:"total_entries-int",children:[],level:4},{value:"<code>total_pages</code> (Int)",id:"total_pages-int",children:[],level:4}],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"PaginationInterface",id:"paginationinterface",children:[],level:4}],level:3}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type EventsPagination implements PaginationInterface {\n  current_page: Int!\n  entries: [Event!]!\n  per_page: Int!\n  total_entries: Int!\n  total_pages: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"current_page-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"current_page")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The number of the page currently being returned in this query"),(0,i.kt)("h4",{id:"entries-event"},(0,i.kt)("inlineCode",{parentName:"h4"},"entries")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event"},(0,i.kt)("inlineCode",{parentName:"a"},"Event")),")"),(0,i.kt)("h4",{id:"per_page-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"per_page")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The number of items per page currently being returned in this query"),(0,i.kt)("h4",{id:"total_entries-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"total_entries")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The total number of items in the paginated list (across all pages)"),(0,i.kt)("h4",{id:"total_pages-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"total_pages")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The total number of pages in the paginated list"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"paginationinterface"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/interfaces/pagination-interface"},(0,i.kt)("inlineCode",{parentName:"a"},"PaginationInterface"))),(0,i.kt)("p",null,"PaginationInterface provides a way to use offset-based pagination on a list of objects. This\nis useful for UIs such as Intercode's table views, which provide a way to jump between numbered\npages."),(0,i.kt)("p",null,"Page numbers in PaginationInterface are 1-based (so, the first page is page 1, then page 2,\netc.) The number of items per page can be controlled via the per_page argument on paginated\nfields. It defaults to 20, and can go up to 200."),(0,i.kt)("p",null,"Offset-based pagination is different from\n",(0,i.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"Relay's cursor-based pagination")," that is more\ncommonly used in GraphQL APIs. We chose to go with an offset-based approach due to our UI\nneeds, but if a cursor-based approach is desirable in the future, we may also implement Relay\nconnections alongside our existing pagination fields."))}u.isMDXComponent=!0}}]);