"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[53511],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99982:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(1629),a=n(17322),o=(n(3289),n(75631)),i=["components"],p={id:"coupons-pagination",title:"CouponsPagination"},s=void 0,c={unversionedId:"graphql/objects/coupons-pagination",id:"graphql/objects/coupons-pagination",isDocsHomePage:!1,title:"CouponsPagination",description:"No description",source:"@site/docs/graphql/objects/coupons-pagination.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/coupons-pagination",permalink:"/docs/graphql/objects/coupons-pagination",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/coupons-pagination.mdx",tags:[],version:"current",frontMatter:{id:"coupons-pagination",title:"CouponsPagination"},sidebar:"sidebar",previous:{title:"Coupon",permalink:"/docs/graphql/objects/coupon"},next:{title:"CreateCmsContentGroupPayload",permalink:"/docs/graphql/objects/create-cms-content-group-payload"}},l=[{value:"Fields",id:"fields",children:[]},{value:"Interfaces",id:"interfaces",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CouponsPagination implements PaginationInterface {\n  current_page: Int!\n  entries: [Coupon!]!\n  per_page: Int!\n  total_entries: Int!\n  total_pages: Int!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"current_page-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"current_page")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The number of the page currently being returned in this query"),(0,o.kt)("h4",{id:"entries-coupon"},(0,o.kt)("inlineCode",{parentName:"h4"},"entries")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/coupon"},(0,o.kt)("inlineCode",{parentName:"a"},"[Coupon!]!")),")"),(0,o.kt)("h4",{id:"per_page-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"per_page")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The number of items per page currently being returned in this query"),(0,o.kt)("h4",{id:"total_entries-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"total_entries")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The total number of items in the paginated list (across all pages)"),(0,o.kt)("h4",{id:"total_pages-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"total_pages")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The total number of pages in the paginated list"),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"paginationinterface"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/interfaces/pagination-interface"},(0,o.kt)("inlineCode",{parentName:"a"},"PaginationInterface"))),(0,o.kt)("p",null,"PaginationInterface provides a way to use offset-based pagination on a list of objects. This\nis useful for UIs such as Intercode's table views, which provide a way to jump between numbered\npages."),(0,o.kt)("p",null,"Page numbers in PaginationInterface are 1-based (so, the first page is page 1, then page 2,\netc.) The number of items per page can be controlled via the per_page argument on paginated\nfields. It defaults to 20, and can go up to 200."),(0,o.kt)("p",null,"Offset-based pagination is different from\n",(0,o.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"Relay's cursor-based pagination")," that is more\ncommonly used in GraphQL APIs. We chose to go with an offset-based approach due to our UI\nneeds, but if a cursor-based approach is desirable in the future, we may also implement Relay\nconnections alongside our existing pagination fields."))}d.isMDXComponent=!0}}]);