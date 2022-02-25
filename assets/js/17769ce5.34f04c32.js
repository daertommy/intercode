"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[70482],{75631:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(3289);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,f=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=s;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,p[1]=u;for(var l=2;l<i;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},22022:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return l},assets:function(){return c},toc:function(){return d},default:function(){return m}});var n=r(14002),a=r(89922),i=(r(3289),r(75631)),p=["components"],u={id:"update-cms-graphql-query-input",title:"UpdateCmsGraphqlQueryInput"},o=void 0,l={unversionedId:"graphql/inputs/update-cms-graphql-query-input",id:"graphql/inputs/update-cms-graphql-query-input",title:"UpdateCmsGraphqlQueryInput",description:"Autogenerated input type of UpdateCmsGraphqlQuery",source:"@site/docs/graphql/inputs/update-cms-graphql-query-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-cms-graphql-query-input",permalink:"/docs/graphql/inputs/update-cms-graphql-query-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-cms-graphql-query-input.mdx",tags:[],version:"current",frontMatter:{id:"update-cms-graphql-query-input",title:"UpdateCmsGraphqlQueryInput"},sidebar:"sidebar",previous:{title:"UpdateCmsContentGroupInput",permalink:"/docs/graphql/inputs/update-cms-content-group-input"},next:{title:"UpdateCmsLayoutInput",permalink:"/docs/graphql/inputs/update-cms-layout-input"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>query</code> (<code>CmsGraphqlQueryInput</code>)",id:"query-cmsgraphqlqueryinput",level:4}],s={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated input type of UpdateCmsGraphqlQuery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateCmsGraphqlQueryInput {\n  clientMutationId: String\n  id: ID\n  query: CmsGraphqlQueryInput!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"clientmutationid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"query-cmsgraphqlqueryinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"query")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/cms-graphql-query-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CmsGraphqlQueryInput")),")"))}m.isMDXComponent=!0}}]);