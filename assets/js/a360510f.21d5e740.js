"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[36783],{75631:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97395:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(88078),a=n(65844),i=(n(3289),n(75631)),o=["components"],l={id:"cms-page",title:"cmsPage"},c=void 0,s={unversionedId:"graphql/queries/cms-page",id:"graphql/queries/cms-page",isDocsHomePage:!1,title:"cmsPage",description:"DEPRECATED: Domain-specific queries are being deprecated. Please use the cmsPage field on the CmsParent interface instead.",source:"@site/docs/graphql/queries/cms-page.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/cms-page",permalink:"/docs/graphql/queries/cms-page",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/cms-page.mdx",tags:[],version:"current",frontMatter:{id:"cms-page",title:"cmsPage"},sidebar:"sidebar",previous:{title:"cmsNavigationItems",permalink:"/docs/graphql/queries/cms-navigation-items"},next:{title:"cmsPages",permalink:"/docs/graphql/queries/cms-pages"}},p=[{value:"Arguments",id:"arguments",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>rootPage</code> (Boolean)",id:"rootpage-boolean",children:[],level:4},{value:"<code>slug</code> (String)",id:"slug-string",children:[],level:4},{value:"<code>transitionalId</code> (ID)",id:"transitionalid-id",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"Page",id:"page",children:[],level:4}],level:3}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("span",{class:"badge badge--warning"},"DEPRECATED: Domain-specific queries are being deprecated. Please use the `cmsPage` field on the CmsParent interface instead."),(0,i.kt)("p",null,"Finds a CMS page within the domain name of this HTTP request. Exactly one of the three\noptional arguments (",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"slug"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"rootPage"),") must be specified. These each represent a\ndifferent way of finding a page. If the desired page can't be found within the current\ndomain name, errors out."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"cmsPage(\n  id: Int\n  rootPage: Boolean\n  slug: String\n  transitionalId: ID\n): Page!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The ID of the page to find."),(0,i.kt)("h4",{id:"rootpage-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"rootPage")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If true, returns the root page for this domain."),(0,i.kt)("h4",{id:"slug-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The unique slug of the page to find."),(0,i.kt)("h4",{id:"transitionalid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"The ID of the page to find."),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"page"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/page"},(0,i.kt)("inlineCode",{parentName:"a"},"Page"))))}u.isMDXComponent=!0}}]);