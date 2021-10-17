"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[50597],{75631:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(3289);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47035:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=r(1629),n=r(17322),i=(r(3289),r(75631)),o=["components"],l={id:"create-cms-partial-payload",title:"CreateCmsPartialPayload"},c=void 0,p={unversionedId:"graphql/objects/create-cms-partial-payload",id:"graphql/objects/create-cms-partial-payload",isDocsHomePage:!1,title:"CreateCmsPartialPayload",description:"Autogenerated return type of CreateCmsPartial",source:"@site/docs/graphql/objects/create-cms-partial-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/create-cms-partial-payload",permalink:"/docs/graphql/objects/create-cms-partial-payload",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/create-cms-partial-payload.mdx",tags:[],version:"current",frontMatter:{id:"create-cms-partial-payload",title:"CreateCmsPartialPayload"},sidebar:"sidebar",previous:{title:"CreateCmsNavigationItemPayload",permalink:"/docs/graphql/objects/create-cms-navigation-item-payload"},next:{title:"CreateConventionPayload",permalink:"/docs/graphql/objects/create-convention-payload"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>cms_partial</code> (CmsPartial!)",id:"cms_partial-cmspartial",children:[],level:4}],level:3}],u={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated return type of CreateCmsPartial"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateCmsPartialPayload {\n  clientMutationId: String\n  cms_partial: CmsPartial!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"clientmutationid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,i.kt)("h4",{id:"cms_partial-cmspartial"},(0,i.kt)("inlineCode",{parentName:"h4"},"cms_partial")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-partial"},(0,i.kt)("inlineCode",{parentName:"a"},"CmsPartial!")),")"))}d.isMDXComponent=!0}}]);