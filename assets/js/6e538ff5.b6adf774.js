"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[68767],{75631:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(3289);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38570:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(1629),a=r(17322),i=(r(3289),r(75631)),c=["components"],o={id:"site-search",title:"siteSearch"},s=void 0,l={unversionedId:"graphql/queries/site-search",id:"graphql/queries/site-search",isDocsHomePage:!1,title:"siteSearch",description:"DEPRECATED: Domain-specific queries are being deprecated. Please use the fullTextSearch field on the CmsParent interface instead.",source:"@site/docs/graphql/queries/site-search.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/site-search",permalink:"/docs/graphql/queries/site-search",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/site-search.mdx",tags:[],version:"current",frontMatter:{id:"site-search",title:"siteSearch"},sidebar:"sidebar",previous:{title:"signup",permalink:"/docs/graphql/queries/signup"},next:{title:"staffPosition",permalink:"/docs/graphql/queries/staff-position"}},u=[{value:"Arguments",id:"arguments",children:[{value:"<code>query</code> (String!)",id:"query-string",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"SearchResult",id:"searchresult",children:[],level:4}],level:3}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("span",{class:"badge badge--warning"},"DEPRECATED: Domain-specific queries are being deprecated. Please use the `fullTextSearch` field on the CmsParent interface instead."),(0,i.kt)("p",null,"Does a full-text search on the convention associated with the domain name of this HTTP\nrequest."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"siteSearch(\n  query: String!\n): SearchResult!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"query-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"query")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("p",null,"The text to search for."),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"searchresult"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/search-result"},(0,i.kt)("inlineCode",{parentName:"a"},"SearchResult"))))}d.isMDXComponent=!0}}]);