"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[74636],{75631:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(3289);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85460:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(43830),o=r(32056),a=(r(3289),r(75631)),c=["components"],i={id:"search-result",title:"SearchResult"},l=void 0,s={unversionedId:"graphql/objects/search-result",id:"graphql/objects/search-result",title:"SearchResult",description:"No description",source:"@site/docs/graphql/objects/search-result.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/search-result",permalink:"/docs/graphql/objects/search-result",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/search-result.mdx",tags:[],version:"current",frontMatter:{id:"search-result",title:"SearchResult"},sidebar:"sidebar",previous:{title:"SearchResultEntry",permalink:"/docs/graphql/objects/search-result-entry"},next:{title:"SendNotificationPreviewPayload",permalink:"/docs/graphql/objects/send-notification-preview-payload"}},u={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>entries</code> (<code>SearchResultEntry</code>)",id:"entries-searchresultentry",level:4},{value:"<code>total_entries</code> (<code>Int</code>)",id:"total_entries-int",level:4}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SearchResult {\n  entries: [SearchResultEntry!]!\n  total_entries: Int!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"entries-searchresultentry"},(0,a.kt)("inlineCode",{parentName:"h4"},"entries")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/search-result-entry"},(0,a.kt)("inlineCode",{parentName:"a"},"SearchResultEntry")),")"),(0,a.kt)("h4",{id:"total_entries-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"total_entries")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"))}f.isMDXComponent=!0}}]);